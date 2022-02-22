const Joi = require("@hapi/joi");
const { UserInputError } = require("apollo-server");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const CompanyCollection = require("../../../models/companySchema");

const loginCompany = async (_, { email, password }, { req }) => {
  const company = await CompanyCollection.findOne({ email: email });
  if (!company) {
    throw new Error("company dos not exist");
  }
  const isMatch = await bcrypt.compare(password, company.password);
  if (!isMatch) {
    throw new Error("password is incorrect");
  }
  const token = jwt.sign(
    { companyId: company.id, email: company.email },
    "secret-key",
    {
      expiresIn: "2h",
    }
  );
  req.session.isAuthenticated = true;
  req.session.cookie.token = token;

  return {
    companyId: company.id,
    token: token,
    tokenExpiration: 2,
    company: company,
  };
};
const addCompany = async (_, args) => {
  const schema = Joi.object({
    company_name: Joi.string().min(2).max(50).required(),
    owner_name: Joi.string().min(2).max(50).required(),
    company_type: Joi.string().min(2).max(50).required(),
    address: Joi.string().min(2).max(50).required(),
    phone: Joi.string().pattern(/^[0-9\+]{1,}[0-9\-]{3,15}$/),
    email: Joi.string().email({ tlds: { allow: false } }),
    password: Joi.string().regex(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{5,15}$/
    ),
    repeatPassword: Joi.any().valid(Joi.ref("password")).required(),
    description: Joi.string().min(5).max(150).required(),
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
    if (args.password == args.repeatPassword) {
      const hashedPassword = bcrypt.hashSync(args.password, 10);
      args.password = hashedPassword;
      const createCompany = new CompanyCollection(args);
      return await createCompany.save();
    } else {
      throw new Error("password not matches repeat Password");
    }
  } else {
    throw new Error("Company already exist");
  }
};
const updateCompany = async (_, args, { req }) => {
  if (req.session.isAuthenticated) {
    const updateCompany = await CompanyCollection.findByIdAndUpdate(
      args.id,
      { ...args },
      { new: true }
    );

    return updateCompany;
  } else {
    throw new Error("you are not authenticated");
  }
};
const deleteCompany = async (_, args, { req }) => {
  if (req.session.isAuthenticated) {
    const deleteCompany = await CompanyCollection.findByIdAndDelete(args.id);
    return deleteCompany;
  } else {
    throw new Error("you are not authenticated");
  }
};

module.exports = { loginCompany, addCompany, updateCompany, deleteCompany };
