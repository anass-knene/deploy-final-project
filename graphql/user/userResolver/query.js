const CompanyCollection = require("../../../models/companySchema");
const UserCollection = require("../../../models/userSchema");

const getUsers = async () => {
  const getAllUsers = await UserCollection.find({}).populate("favorite");
  if (getAllUsers) {
    return getAllUsers;
  } else {
    throw new Error("no users found");
  }
};
const getOneUser = async (_, { id }) => {
  const getUser = await UserCollection.findById(id).populate("favorite");
  if (getUser) {
    return getUser;
  } else {
    throw new Error("no user found");
  }
};
const verifyUser = async (_, __, { req }) => {
  const tokenCookie = req.session.cookie.token;
  if (tokenCookie) {
    const decode = jwt.verify(tokenCookie, "secret-key");
    if (decode) {
      const user =
        decode.name === "user"
          ? await UserCollection.findById(decode.id)
          : await CompanyCollection.findById(decode.id);
      return user;
    } else {
      redirect("/");
    }
  }
};

module.exports = { getUsers, getOneUser, verifyUser };
