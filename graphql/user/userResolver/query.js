const UserCollection = require("../../../models/userSchema");

const getUsers = async () => {
  const getAllUsers = await UserCollection.find({}).populate("favorite");
  if (getAllUsers) {
    return getAllUsers;
  } else {
    throw new Error("no users found");
  }
};
const getOneUser = async (_, { id }, { req }) => {
  if (req.session.isAuthenticated) {
    const getUser = await UserCollection.findById(id).populate("favorite");
    if (getUser) {
      return getUser;
    } else {
      throw new Error("no user found");
    }
  } else {
    throw new Error("you are not authenticated");
  }
};

module.exports = { getUsers, getOneUser };
