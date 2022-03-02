const CompanyType = `type CompanyType {
    id: ID
    company_Name: String!
    owner_name: String!
    avatar: String
    company_type: String!
    address: String!
    phone: String!
    email: String!
    password: String!
    description: String!
    favorite: [UserType]
    jobs: [JobType]
  }`;

const CompanyAuthType = `  type CompanyAuthType {
    token: String!
    tokenExpiration: Int!
    company: CompanyType
  }`;
module.exports = { CompanyType, CompanyAuthType };
