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
  BooleanType,
} = require("./company/companyTypeDef/companyType");

const {
  JobType,
  ShortCompanyType,
  inputType,
  inputShortCompanyType,
} = require("./job/jobTypeDef/jobType");
const { getOneJob, getJobs } = require("./job/jobTypeDef/jobQuery");
const {
  addJob,
  updateJob,
  deleteJob,
} = require("./job/jobTypeDef/jobMutation");
const {
  UserType,
  UserAuthType,
  VerifyType,
} = require("./user/userTypeDef/userType");
const { getUsers, getOneUser, getVerify } = require("./user/userTypeDef/query");

const {
  loginUser,
  addUser,
  deleteUser,
  updateUser,
  updateUserFavorite,
} = require("./user/userTypeDef/mutation");
const { ImageType } = require("./image/imageTypeDef/imageType");
const { singleUpload } = require("./image/imageTypeDef/imageMutation");

const typeDefs = gql`
    scalar Upload
    ${UserType}
    ${UserAuthType}
    ${CompanyType}
    ${CompanyAuthType}
    ${ShortCompanyType}
    ${JobType}
    ${VerifyType}
    ${BooleanType}
    ${ImageType}
    ${inputType}
    ${inputShortCompanyType}
  type Query {
    
    ${getUsers}
    ${getOneUser}
    ${getCompanies}
    ${getOneCompany}
    ${getJobs}
    ${getOneJob}
    ${getVerify}

  }
  type Mutation {
    # user Mutation
    ${loginUser}
    ${loginCompany}
    ${addUser}
    ${deleteUser}
    ${updateUser}
    ${updateUserFavorite}
    # company Mutation
    ${addCompany}
    ${deleteCompany}
    ${updateCompany}
    # job Mutation
    ${addJob}
    ${deleteJob}
    ${updateJob}
    # image Mutation
    ${singleUpload}

  }
`;
module.exports = { typeDefs };
