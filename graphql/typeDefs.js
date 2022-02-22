const { gql } = require("apollo-server");
const {
  loginCompany,
  addCompany,
  deleteCompany,
  updateCompany,
} = require("./company/companyTypeDef/companyMutation");
const {
  getCompanies,
  getOneCompany,
} = require("./company/companyTypeDef/companyQuery");
const {
  CompanyType,
  CompanyAuthType,
} = require("./company/companyTypeDef/companyType");

const { JobType } = require("./job/jobTypeDef/jobType");
const { getOneJob, getJobs } = require("./job/jobTypeDef/jobQuery");
const {
  addJob,
  updateJob,
  deleteJob,
} = require("./job/jobTypeDef/jobMutation");
const { UserType, UserAuthType } = require("./user/userTypeDef/userType");
const { getUsers, getOneUser } = require("./user/userTypeDef/query");

const {
  loginUser,
  addUser,
  deleteUser,
  updateUser,
} = require("./user/userTypeDef/mutation");

const typeDefs = gql`

    ${UserType}
    ${UserAuthType}
    ${CompanyType}
    ${CompanyAuthType}
    ${JobType}
  type Query {
    ${getUsers}
    ${getOneUser}
    ${getCompanies}
    ${getOneCompany}
    ${getJobs}
    ${getOneJob}

  }
  type Mutation {
    # user Mutation
    ${loginUser}
    ${loginCompany}
    ${addUser}
    ${deleteUser}
    ${updateUser}
    # company Mutation
    ${addCompany}
    ${deleteCompany}
    ${updateCompany}
    # job Mutation
    ${addJob}
    ${deleteJob}
    ${updateJob}

  }
`;
module.exports = { typeDefs };
