const Joi = require("@hapi/joi");
const { UserInputError } = require("apollo-server");
const UserCollection = require("../../../models/userSchema");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const handleFileUploadMongoDB = require("../../image/storeImageInMongoDB");

const loginUser = async (_, { email, password }, { req }) => {
  const user = await UserCollection.findOne({ email: email }).populate({
    path: "favorite",
    model: "jobs",
  });
  if (!user) {
    throw new Error("user dos not exist");
  }
  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
    throw new Error("password is incorrect");
  }
  console.log(user.id);
  const token = jwt.sign(
    { userId: user.id, email: user.email, name: "user" },
    "secret-key",
    {
      expiresIn: "2h",
    }
  );

  return { token: token, tokenExpiration: 2, user: user };
};

const addUser = async (_, args) => {
  const schema = Joi.object({
    first_name: Joi.string().min(2).max(50).required(),
    last_name: Joi.string().min(2).max(50).required(),
    email: Joi.string().email({ tlds: { allow: false } }),
    phone: Joi.string().pattern(/^[0-9\+]{1,}[0-9\-]{3,15}$/),
    password: Joi.string().regex(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{5,15}$/
    ),
    hourly_rate: Joi.number(),
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
  const findUser = await UserCollection.findOne({ email: args.email });
  if (!findUser) {
    const hashedPassword = bcrypt.hashSync(args.password, 10);
    args.password = hashedPassword;
    const createUser = new UserCollection(args);
    return await createUser.save();
  } else {
    throw new Error("user already exists");
  }
};
const updateUser = async (_, args, { req }) => {
  const token = req.headers["token"];
  if (token) {
    const decode = jwt.verify(token, "secret-key");
    if (decode) {
      const updateUser = await UserCollection.findByIdAndUpdate(
        args.id,
        { ...args },
        { new: true }
      );
      if (await args.file) {
        const { file } = await args.file;
        let storImage = await handleFileUploadMongoDB(file);
        updateUser.avatar = storImage.imageUrl;
        await updateUser.save();
      }
      return updateUser;
    }
  } else {
    throw new Error("you have to login", 403);
  }
};
const deleteUser = async (_, args, { req }) => {
  const token = req.headers["token"];
  if (token) {
    const decode = jwt.verify(token, "secret-key");
    if (decode) {
      await UserCollection.findByIdAndDelete(args.id);
      return { success: true };
    } else {
      throw new Error("you have to login");
    }
  }
};
// we need userId and favId from the client side
const updateUserFavorite = async (_, args, { req }) => {
  const token = req.headers["token"];
  if (token) {
    const decode = jwt.verify(token, "secret-key");
    if (decode) {
      const findUser = await UserCollection.findById(args.userId);
      if (findUser) {
        // let filterUserFavorite = findUser.favorite.filter(
        //   (item) => item._id !== args.favId
        // );
        findUser.favorite = [...findUser.favorite, args.job];
        await findUser.save();
        return findUser;
      } else {
        throw new Error("no such user find");
      }
    } else {
      throw new Error("you have to login");
    }
  }
};
module.exports = {
  loginUser,
  addUser,
  updateUser,
  deleteUser,
  updateUserFavorite,
};
