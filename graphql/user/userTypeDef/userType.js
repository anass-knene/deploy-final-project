const UserType = ` type UserType {
    id: ID
    first_name: String!
    last_name: String!
    avatar: String
    email: String!
    phone: String!
    password: String!
    hourly_rate: Int
    description: String!
    favorite: [JobType]
  }`;
const FavoriteArgsType = `type FavoriteArgsType{
  userId: ID!
  job:    JobType!
}`;
const UserAuthType = `type UserAuthType {  
    token: String!
    tokenExpiration: Int!
    user: UserType
  }`;

const VerifyType = `type VerifyType {
 user:UserType
 company: CompanyType

  }`;

module.exports = { FavoriteArgsType, UserType, UserAuthType, VerifyType };
