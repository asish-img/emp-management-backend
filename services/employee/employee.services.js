const Employee = require("../../models/employee.model");
var { isEmpty } = require("lodash");
const moment = require("moment");

module.exports = {
  list_employee: async (req, res) => {
    const finaldata = await Employee.find({});
    return res.json(finaldata);
  },
  add_employee: async (req, res) => {
    const {
      name,
      date_of_birth,
      mobile,
      email,
      gender,
      employee_type,
      training_period,
      internship_period,
      joining_date,
    } = req.body;
    if (
      (name,
      date_of_birth,
      mobile,
      email,
      gender,
      employee_type,
      training_period,
      internship_period,
      joining_date)
    ) {
      console.log(joining_date);
      const training_start_date = moment(joining_date);
      const training_end_date = moment(joining_date).add(
        training_period,
        "days"
      );
      const internship_start_date = training_period
        ? moment(training_end_date).add(1, "days")
        : training_end_date;
      const internship_end_date = moment(internship_start_date).add(
        internship_period,
        "days"
      );
      const job_start_date = internship_period
        ? moment(internship_end_date).add(1, "days")
        : internship_end_date;

      const employee = await Employee.create({
        name,
        date_of_birth,
        mobile,
        email,
        gender,
        employee_type,
        training_period,
        internship_period,
        joining_date,
        training_start_date,
        training_end_date,
        internship_start_date,
        internship_end_date,
        job_start_date,
      });
      return res.json({ success: true, data: employee });
    } else {
      return res.json({ success: false, error: "please fill require field" });
    }
  },
  edit_employee: async (req, res) => {
    const { id, name, age } = req.body;
    const updateToBe = {};
    if (name) {
      updateToBe["name"] = name;
    }
    if (age) {
      updateToBe["age"] = age;
    }

    if (id) {
      const employee = await Employee.findByIdAndUpdate(id, updateToBe, {
        new: true,
      });
      return res.json({ success: true, data: employee });
    } else {
      return res.json({ success: false, error: "id is required" });
    }
  },

  delete_employee: async (req, res) => {
    const { id } = req.body;
    if (id) {
      const employee = await Employee.findByIdAndRemove(id);
      if (employee) {
        return res.json({ success: true, data: employee });
      } else {
        return res.json({
          success: false,
          error: "coudn't find employee with given id",
        });
      }
    } else {
      return res.json({ success: false, error: "id is required" });
    }
  },

  get_employee: async (req, res) => {
    const { id } = req.params;
    if (id) {
      const employee = await Employee.findById(id);
      const daysForTrainingCompletion = moment(employee.training_end_date).diff(
        new Date(),
        "days"
      );
      const daysForInternshipCompletion = moment(
        employee.internship_end_date
      ).diff(new Date(), "days");
      if (
        employee.employee_type === "trainee" &&
        daysForTrainingCompletion <= 0
      ) {
        await Employee.findByIdAndUpdate(id, { employee_type: "intern" });
      }
      if (
        employee.employee_type === "intern" &&
        daysForInternshipCompletion <= 0
      ) {
        await Employee.findByIdAndUpdate(id, { employee_type: "intern" });
      }

      employee._doc.daysForTrainingCompletion = daysForTrainingCompletion;
      employee._doc.daysForInternshipCompletion = daysForInternshipCompletion;

      return res.json({ success: true, data: employee });
    } else {
      return res.json({ success: false, error: "id is required" });
    }
  },
};
