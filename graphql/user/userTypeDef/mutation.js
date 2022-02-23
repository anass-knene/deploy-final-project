const loginUser = ` loginUser(email: String!, password: String!): UserAuthType!`;

const addUser = `addUser(
      first_name: String!
      last_name: String!
      email: String!
      password: String!
      repeatPassword: String!
      phone: String!
      hourly_rate: Int
      description: String!
    ): UserType`;

const deleteUser = ` deleteUser(id: ID): UserType`;

const updateUser = ` updateUser(
      id: ID!
      first_name: String
      last_name: String
      avatar: String
      email: String
      password: String
      phone: String
      hourly_rate: Int
      description: String
    ): UserType`;
const updateUserFavorite = `updateUserFavorite(userId:ID!,favId:ID!):UserType`;

module.exports = {
  loginUser,
  addUser,
  deleteUser,
  updateUser,
  updateUserFavorite,
};
