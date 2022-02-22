const mongoose = require("mongoose");
const { Schema } = mongoose;

const companySchema = new Schema({
  company_name: { type: String, required: true },
  owner_name: { type: String, required: true },
  avatar: {
    type: String,
    default: function () {
      return `https://source.unsplash.com/1600x900/?${this.company_name}`;
    },
  },
  company_type: { type: String, required: true },
  address: { type: String, required: true },
  phone: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  repeatPassword: { type: String, required: true },
  description: { type: String, required: true },
  favorite: [{ type: mongoose.Schema.Types.ObjectId, ref: "users" }],
  jobs: [{ type: mongoose.Schema.Types.ObjectId, ref: "jobs" }],
});
const CompanyCollection = mongoose.model("companies", companySchema);
module.exports = CompanyCollection;
