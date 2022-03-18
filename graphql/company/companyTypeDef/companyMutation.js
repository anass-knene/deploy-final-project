const loginCompany = `loginCompany(email: String!, password: String!): CompanyAuthType!
`;
const addCompany = `addCompany(
      company_Name: String!
      owner_name: String!
      avatar: String
      company_type: String!
      address: String!
      phone: String!
      email: String!
      password: String!
      description: String!
    ): CompanyType`;

const updateCompanyFavorite = `updateCompanyFavorite(userId:ID!,companyId:ID!):CompanyType`;
const deleteCompany = `deleteCompany(id: ID):DeleteResponse`;
const updateCompany = `updateCompany(
      id: ID!
      company_Name: String
      owner_name: String
      avatar: String
      file:Upload
      company_type: String
      address: String
      phone: String
      email: String
      password: String
      description: String
      
    ): CompanyType`;
module.exports = {
  updateCompanyFavorite,
  loginCompany,
  addCompany,
  deleteCompany,
  updateCompany,
};
