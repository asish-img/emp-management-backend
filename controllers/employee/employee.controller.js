const employee_service = require("../../services/employee/employee.services");

module.exports = {
  list_employee: async (req, res) => {
    try {
      await employee_service.list_employee(req, res);
    } catch (err) {
      var msg = err.message || "SOMETHING_WENT_WRONG";
      return res.status(422).json({ error: msg });
    }
  },
  add_employee: async (req, res) => {
    try {
      await employee_service.add_employee(req, res);
    } catch (err) {
      var msg = err.message || "SOMETHING_WENT_WRONG";
      return res.status(422).json({ error: msg });
    }
  },
  edit_employee: async (req, res) => {
    try {
      await employee_service.edit_employee(req, res);
    } catch (err) {
      var msg = err.message || "SOMETHING_WENT_WRONG";
      return res.status(422).json({ error: msg });
    }
  },
  delete_employee: async (req, res) => {
    try {
      await employee_service.delete_employee(req, res);
    } catch (err) {
      var msg = err.message || "SOMETHING_WENT_WRONG";
      return res.status(422).json({ error: msg });
    }
  },
  get_employee: async (req, res) => {
    try {
      await employee_service.get_employee(req, res);
    } catch (err) {
      var msg = err.message || "SOMETHING_WENT_WRONG";
      return res.status(422).json({ error: msg });
    }
  },
};
