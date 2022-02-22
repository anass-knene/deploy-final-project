const JobType = `  type JobType {
	id: ID
	job_Title: String!
	company_Name: String!
	date: String!
	num_of_people_needed: Int!
	job_description: String!
	created_by: CompanyType
      }`;
module.exports = { JobType };
