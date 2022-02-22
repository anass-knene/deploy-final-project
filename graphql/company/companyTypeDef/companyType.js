const CompanyType = `type CompanyType {
    id: ID
    company_name: String!
    owner_name: String!
    avatar: String
    company_type: String!
    address: String!
    phone: String!
    email: String!
    password: String!
    repeatPassword: String!
    description: String!
    favorite: [UserType]
    jobs: [JobType]
  }`;
const CompanyAuthType = `  type CompanyAuthType {
    companyId: ID!
    token: String!
    tokenExpiration: Int!
    company: CompanyType
  }`;
module.exports = { CompanyType, CompanyAuthType };
