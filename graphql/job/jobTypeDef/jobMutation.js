const addJob = ` addJob(
      job_Title: String!
      start_Date: String!
      end_Date: String!
      num_of_people_needed: Int!
      job_description: String!
      created_by: ID!
    ): JobType`;
const deleteJob = `deleteJob(id: ID): JobType`;
const updateJob = `updateJob(
      id: ID!
      job_Title: String
      start_Date: String
      end_Date: String
      num_of_people_needed: Int
      job_description: String
      created_by: String
    ): JobType`;
module.exports = { addJob, deleteJob, updateJob };
