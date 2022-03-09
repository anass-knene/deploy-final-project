const { ApolloError } = require("apollo-server-express");
const CompanyCollection = require("../../../models/companySchema");
const JobCollection = require("../../../models/jobSchema");
const jwt = require("jsonwebtoken");
const addJob = async (_, args, { req }) => {
  const token = req.headers["token"];

  if (token) {
    const decode = jwt.verify(token, "secret-key");
    if (decode) {
      const createJob = new JobCollection(args);
      await createJob.save();

      const company = await CompanyCollection.findById(args.created_by);

      company.jobs.push(createJob._id);

      await company.save();
      const populateCreateJob = await createJob.populate({
        path: "created_by",
        model: "companies",
      });

      return populateCreateJob;
    } else {
      throw new ApolloError("yoh have to login", 403);
    }
  }
};
const updateJob = async (_, args, { req }) => {
  const token = req.headers["token"];

  if (token) {
    const decode = jwt.verify(token, "secret-key");
    if (decode) {
      const updateJob = await JobCollection.findByIdAndUpdate(
        args.id,
        { ...args },
        { new: true }
      );
      return updateJob;
    } else {
      throw new ApolloError("yoh have to login", 403);
    }
  }
};
const deleteJob = async (_, args, { req }) => {
  const token = req.headers["token"];

  if (token) {
    const decode = jwt.verify(token, "secret-key");
    if (decode) {
      await JobCollection.findByIdAndDelete(args.id);
      return { success: true };
    }
  } else {
    throw new ApolloError("yoh have to login", 403);
  }
};
module.exports = { addJob, updateJob, deleteJob };
