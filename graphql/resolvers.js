const { getUsers, getOneUser } = require("./user/userResolver/query");
const {
  loginUser,
  addUser,
  updateUser,
  deleteUser,
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
    getOneUser: (_, { id }, { req }) => getOneUser(_, { id }, { req }),

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
    loginCompany: (_, { email, password }, { req }) =>
      loginCompany(_, { email, password }, { req }),
    // company Mutation
    addCompany: (_, args) => addCompany(_, args),
    updateCompany: (_, args, { req }) => updateCompany(_, args, { req }),
    deleteCompany: (_, args, { req }) => deleteCompany(_, args, { req }),
    // user Mutation
    addUser: (_, args) => addUser(_, args),
    updateUser: (_, args) => updateUser(_, args, { req }),
    deleteUser: (_, args, { req }) => deleteUser(_, args, { req }),
    // job Mutation
    addJob: (_, args, { req }) => addJob(_, args, { req }),
    updateJob: (_, args, { req }) => updateJob(_, args, { req }),
    deleteJob: (_, args, { req }) => deleteJob(_, args, { req }),
  },
};
module.exports = { resolvers };
