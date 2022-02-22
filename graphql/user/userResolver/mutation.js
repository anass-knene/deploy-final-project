const Joi = require("@hapi/joi");
const { UserInputError } = require("apollo-server");
const UserCollection = require("../../../models/userSchema");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const loginUser = async (_, { email, password }, { req }) => {
  const user = await UserCollection.findOne({ email: email });
  if (!user) {
    throw new Error("user dos not exist");
  }
  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
    throw new Error("password is incorrect");
  }
  const token = jwt.sign({ userId: user.id, email: user.email }, "secret-key", {
    expiresIn: "2h",
  });
  req.session.isAuthenticated = true;
  req.session.cookie.token = token;

  return { userId: user.id, token: token, tokenExpiration: 2, user: user };
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
    repeatPassword: Joi.any().valid(Joi.ref("password")).required(),
    hourly_rate: Joi.number(),
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
  const findUser = await UserCollection.findOne({ email: args.email });
  if (!findUser) {
    const hashedPassword = bcrypt.hashSync(args.password, 10);
    args.password = hashedPassword;
    const createUser = new UserCollection(args);
    return await createUser.save();
  } else {
    throw new Error("error creating user");
  }
};
const updateUser = async (_, args, { req }) => {
  if (req.session.isAuthenticated) {
    const updateUser = await UserCollection.findByIdAndUpdate(
      args.id,
      { ...args },
      { new: true }
    );
    return updateUser;
  } else {
    throw new Error("you are not authenticated");
  }
};
const deleteUser = async (_, args, { req }) => {
  if (req.session.isAuthenticated) {
    const deleteUser = await UserCollection.findByIdAndDelete(args.id);
    return deleteUser;
  } else {
    throw new Error("you are not authenticated");
  }
};
module.exports = { loginUser, addUser, updateUser, deleteUser };
