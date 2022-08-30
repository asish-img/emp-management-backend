const express = require("express");
const router = express.Router();
const employee = require("../../controllers/employee/employee.controller");

router.get("/", employee.list_employee);
router.get("/:id", employee.get_employee);

router.post("/addEmployee", employee.add_employee);
router.post("/editEmployee", employee.edit_employee);
router.post("/deleteEmployee", employee.delete_employee);
router.post("/deleteEmployee", employee.delete_employee);

module.exports = router;
