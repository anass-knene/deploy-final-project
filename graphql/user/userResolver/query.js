const CompanyCollection = require("../../../models/companySchema");
const UserCollection = require("../../../models/userSchema");
const jwt = require("jsonwebtoken");
const getUsers = async () => {
  const getAllUsers = await UserCollection.find({}).populate("favorite");
  if (getAllUsers) {
    return getAllUsers;
  } else {
    throw new Error("no users found");
  }
};
const getOneUser = async (_, { id }, { req }) => {
  const getUser = await UserCollection.findById(id).populate("favorite");
  if (getUser) {
    return getUser;
  } else {
    throw new Error("no user found");
  }
};
const getVerify = async (_, __, { req }) => {
  const token = req.headers["token"];
  if (token) {
    const decode = jwt.verify(token, "secret-key");
    if (decode) {
      const user = await UserCollection.findById(decode.userId).populate(
        "favorite"
      );
      const company = await CompanyCollection.findById(decode.companyId)
        .populate("jobs")
        .populate("favorite");
      return { user, company };
    } else {
      throw new Error("you have to login");
    }
  }
};

module.exports = { getUsers, getOneUser, getVerify };
