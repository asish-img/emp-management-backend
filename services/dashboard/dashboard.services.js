const Employee = require("../../models/employee.model");

module.exports = {
  getTrainees: async (req, res) => {
    const trainees = await Employee.find({ employee_type: "trainee" }).exec();
    res.send({ success: true, data: trainees });
  },
  getInterns: async (req, res) => {
    const interns = await Employee.find({ employee_type: "intern" }).exec();
    res.send({ success: true, data: interns });
  },
  getOnJobs: async (req, res) => {
    const interns = await Employee.find({ employee_type: "onJob" }).exec();
    res.send({ success: true, data: interns });
  },
};
