const {
  getUsers,
  getOneUser,
  getVerify,
} = require("./user/userResolver/query");
const {
  loginUser,
  addUser,
  updateUser,
  deleteUser,
  updateUserFavorite,
} = require("./user/userResolver/mutation");
const {
  getCompanies,
  getOneCompany,
} = require("./company/companyResolver/query");
const {
  loginCompany,
  addCompany,
  updateCompany,
} = require("./company/companyResolver/mutation");
const { getJobs, getOneJob } = require("./job/jobResolver/query");
const { addJob, updateJob, deleteJob } = require("./job/jobResolver/mutation");

const resolvers = {
  Query: {
    getUsers: () => getUsers(),
    getOneUser: (_, { id }) => getOneUser(_, { id }),
    getVerify: (_, __, { req }) => getVerify(_, __, { req }),

    // company queries
    getCompanies: () => getCompanies(),
    getOneCompany: (_, { id }) => getOneCompany(_, { id }),
    // job queries
    getJobs: () => getJobs(),
    getOneJob: (_, { id }) => getOneJob(_, { id }),
  },
  Mutation: {
    // user  login
    loginUser: (_, { email, password }, { req }) =>
      loginUser(_, { email, password }, { req }),
    // company login
    loginCompany: (_, { email, password }, { req, res }) =>
      loginCompany(_, { email, password }, { req, res }),
    // company Mutation
    addCompany: (_, args) => addCompany(_, args),
    updateCompany: (_, args, { req }) => updateCompany(_, args, { req }),
    deleteCompany: (_, args, { req }) => deleteCompany(_, args, { req }),
    // user Mutation
    addUser: (_, args) => addUser(_, args),
    updateUser: (_, args, { req }) => updateUser(_, args, { req }),
    deleteUser: (_, args, { req }) => deleteUser(_, args, { req }),
    // updateUserFavorite: (_, args, { req }) =>
    //   updateUserFavorite(_, args, { req }),
    // job Mutation
    addJob: (_, args, { req }) => addJob(_, args, { req }),
    updateJob: (_, args, { req }) => updateJob(_, args, { req }),
    deleteJob: (_, args, { req }) => deleteJob(_, args, { req }),
  },
};
module.exports = { resolvers };
