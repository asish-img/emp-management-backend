const mongoose = require("mongoose");

const EmployeeSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    date_of_birth: Date,
    mobile: {
      type: String,
      trim: true,
    },
    email: {
      type: String,
      trim: true,
    },
    gender: {
      type: String,
      enum: { values: ["male", "female", "other"], message: "feel corrects" },
      required: true,
    },
    employee_type: {
      type: String,
      enum: ["trainee", "intern", "onJob"],
      required: true,
    },
    status: { type: String, default: "active", enum: ["active", "inActive"] },
    training_period: Number,
    internship_period: Number,
    joining_date: Date,
    training_start_date: Date,
    training_end_date: Date,
    internship_start_date: Date,
    internship_start_date: Date,
    internship_end_date: Date,
    job_start_date: Date,
    job_end_date: Date,
  },
  { timestamps: true }
);

const Employee = mongoose.model("Employee", EmployeeSchema);

module.exports = Employee;
