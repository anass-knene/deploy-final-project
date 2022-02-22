const JobCollection = require("../../../models/jobSchema");

const addJob = async (_, args, { req }) => {
  if (req.session.isAuthenticated) {
    const createJob = new JobCollection(args);
    await createJob.save();
    const company = await CompanyCollection.findById(args.created_by);
    company.jobs.push(createJob._id);
    await company.save();

    return createJob;
  }
};
const updateJob = async (_, args, { req }) => {
  if (req.session.isAuthenticated) {
    const updateJob = await JobCollection.findByIdAndUpdate(
      args.id,
      { ...args },
      { new: true }
    );
    return updateJob;
  }
};
const deleteJob = async (_, args, { req }) => {
  if (req.session.isAuthenticated) {
    const deleteJob = await JobCollection.findByIdAndDelete(args.id);
    return deleteJob;
  }
};
module.exports = { addJob, updateJob, deleteJob };
