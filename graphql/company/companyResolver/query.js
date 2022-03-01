const CompanyCollection = require("../../../models/companySchema");

const getCompanies = async () => {
  const getAllCompanies = await CompanyCollection.find()
    .populate("jobs")
    .populate("favorite");

  if (getAllCompanies) {
    return getAllCompanies;
  } else {
    throw new Error("no companies found");
  }
};
const getOneCompany = async (_, { id }) => {
  const getCompany = await CompanyCollection.findById(id)
    .populate("jobs")
    .populate("favorite");

  if (getCompany) {
    return getCompany;
  } else {
    throw new Error("no company found");
  }
};
module.exports = { getCompanies, getOneCompany };
