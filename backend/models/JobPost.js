const mongoose = require("mongoose")

const JobPostSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
  },
  title: {
    type: String,
    require: true,
  },
  company: {
    type: String,
    require: true,
  },
  location: {
    type: String,
    require: true,
  },
  recruiterContact: {
    type: String,
  },
  postLink: {
    type: String,
  },
  dateCreated: {
    type: Date,
    default: Date.now,
  },
  dateApplied: {
    type: Date,
  },
  description: {
    type: String,
  },
  isApplied: {
    type: Boolean,
    default: false,
  },
})

module.exports = JobPostSchema = mongoose.model("jobpost", JobPostSchema)
