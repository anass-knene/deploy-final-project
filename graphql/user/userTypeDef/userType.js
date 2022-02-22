const UserType = ` type UserType {
    id: ID
    first_name: String!
    last_name: String!
    avatar: String
    email: String!
    phone: String!
    password: String!
    repeatPassword: String!
    hourly_rate: Int
    description: String!
    favorite: [JobType]
  }`;
const UserAuthType = `type UserAuthType {
    userId: ID!
    token: String!
    tokenExpiration: Int!
    user: UserType
  }`;

module.exports = { UserType, UserAuthType };
