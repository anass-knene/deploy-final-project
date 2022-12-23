const JobCollection = require("../../../models/jobSchema");

const getJobs = async () => {
  const getAllJobs = await JobCollection.find({})
    .sort({ issued_At: -1 })
    .populate("created_by");

  if (getAllJobs) {
    return getAllJobs;
  } else {
    throw new Error("no jobs found");
  }
};
const getOneJob = async (_, { id }) => {
  const getJob = await JobCollection.findById(id).populate("created_by");
  if (getJob) {
    return getJob;
  } else {
    throw new Error("no job found");
  }
};
module.exports = { getJobs, getOneJob };
