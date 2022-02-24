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
	job_Title: String!
  start_Date:String!
  end_Date: String!
	issued_At: String
	num_of_people_needed: Int!
	job_description: String!
	created_by: ShortCompanyType
      }`;
module.exports = { JobType, ShortCompanyType };
