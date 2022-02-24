const ShortCompanyType = `type ShortCompanyType {
    id: ID
    company_Name: String!
    avatar: String
    company_type: String!
    address: String!
    email: String!
    description: String!
  }`;
const JobType = `  type JobType {
	id: ID
	job_Title: String!
	issued_At: String!
	num_of_people_needed: Int!
	job_description: String!
	created_by: ShortCompanyType
      }`;
module.exports = { JobType, ShortCompanyType };
