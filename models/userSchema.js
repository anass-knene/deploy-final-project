const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = new Schema({
  first_name: { type: String, required: true },
  last_name: { type: String, required: true },
  avatar: {
    type: String,
    default: function () {
      // return `https://joeschmoe.io/api/v1/${this.last_name}`;
      return `https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png`;
    },
  },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  password: { type: String, required: true },
  hourly_rate: { type: Number },
  description: { type: String, required: true },
  favorite: [{ type: mongoose.Schema.Types.ObjectId, ref: "jobs" }],
});
const UserCollection = mongoose.model("users", userSchema);
module.exports = UserCollection;
