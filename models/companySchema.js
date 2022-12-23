const mongoose = require("mongoose");
const { Schema } = mongoose;

const companySchema = new Schema({
  company_Name: { type: String, required: true },
  owner_name: { type: String, required: true },
  company_type: { type: String, required: true },
  avatar: {
    type: String,
    default: function () {
      // return `https://source.unsplash.com/1600x900/?${this.company_type}`;
      return `https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png`;
    },
  },
  address: { type: String, required: true },
  phone: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  description: { type: String, required: true },
  favorite: [{ type: mongoose.Schema.Types.ObjectId, ref: "users" }],
  jobs: [{ type: mongoose.Schema.Types.ObjectId, ref: "jobs" }],
});
const CompanyCollection = mongoose.model("companies", companySchema);
module.exports = CompanyCollection;
