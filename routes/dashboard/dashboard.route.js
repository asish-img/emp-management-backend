const express = require("express");
const dashboardController = require("../../controllers/dashboard/dashboard.controller");
const router = express.Router();

router.get("/getTrainees", dashboardController.getTrainees);
router.get("/getInterns", dashboardController.getInterns);
router.get("/getOnJobs", dashboardController.getOnJobs);

module.exports = router;
