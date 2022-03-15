const Joi = require("@hapi/joi");
const { UserInputError } = require("apollo-server");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const CompanyCollection = require("../../../models/companySchema");
const JobCollection = require("../../../models/jobSchema");
const handleFileUploadMongoDB = require("../../image/storeImageInMongoDB");
const loginCompany = async (_, { email, password }, { res }) => {
  const company = await CompanyCollection.findOne({ email: email }).populate({
    path: "jobs",
    model: "jobs",
  });

  if (!company) {
    throw new Error("company dos not exist");
  }
  const isMatch = await bcrypt.compare(password, company.password);
  if (!isMatch) {
    throw new Error("password is incorrect");
  }
  const token = jwt.sign(
    { companyId: company.id, name: "company", email: company.email },
    "secret-key",
    {
      expiresIn: "2h",
    }
  );
  res.header("token", token);

  return {
    token: token,
    tokenExpiration: 2,
    company: company,
  };
};
const addCompany = async (_, args) => {
  const schema = Joi.object({
    company_Name: Joi.string().min(2).max(50).required(),
    owner_name: Joi.string().min(2).max(50).required(),
    company_type: Joi.string().min(2).max(50).required(),
    address: Joi.string().min(2).max(50).required(),
    phone: Joi.string().pattern(/^[0-9\+]{1,}[0-9\-]{3,15}$/),
    email: Joi.string().email({ tlds: { allow: false } }),
    password: Joi.string().regex(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{5,15}$/
    ),
    description: Joi.string().min(5).max(500).required(),
  });
  const { value, error } = schema.validate(args, { abortEarly: false });

  if (error) {
    throw new UserInputError(
      error.details.map((item) => {
        if (item.message.includes("required pattern")) {
          item.message = `Your password should have minimum 5 and maximum 15 characters, at least one uppercase letter, one lowercase letter, one number and one special character:`;
        } else {
          return item.message;
        }
      }),
      {
        validationError: error.details,
      }
    );
  }
  const findCompany = await CompanyCollection.findOne({
    email: args.email,
  });
  if (!findCompany) {
    const hashedPassword = bcrypt.hashSync(args.password, 10);
    args.password = hashedPassword;
    const createCompany = new CompanyCollection(args);
    return await createCompany.save();
  } else {
    throw new Error("Company already exist");
  }
};
const updateCompany = async (_, args, { req }) => {
  const token = req.headers["token"];

  if (token) {
    const decode = jwt.verify(token, "secret-key");
    if (decode) {
      const updateCompany = await CompanyCollection.findByIdAndUpdate(
        args.id,
        { ...args },
        { new: true }
      );

      if (await args.file) {
        const { file } = await args.file;
        let storImage = await handleFileUploadMongoDB(file);
        updateCompany.avatar = storImage.imageUrl;
        await updateCompany.save();

        console.log(updateCompany);
      }

      return updateCompany;
    } else {
      throw new Error("you have to login", 403);
    }
  }
};
const deleteCompany = async (_, args, { req }) => {
  const token = req.headers["token"];
  if (token) {
    const decode = jwt.verify(token, "secret-key");
    if (decode) {
      const company = await CompanyCollection.findById(args.id);
      if (company.jobs.length > 0) {
        let promisesArray = company.jobs.map((ref) => {
          return JobCollection.findByIdAndDelete(ref);
        });
        await Promise.all(promisesArray);
      }
      const deleteCompany = await CompanyCollection.findByIdAndDelete(args.id);
      console.log(deleteCompany);

      return { success: true };
    }
  } else {
    throw new Error("you have to login", 403);
  }
};

module.exports = { loginCompany, addCompany, updateCompany, deleteCompany };
