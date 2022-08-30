const dashboardServices = require("../../services/dashboard/dashboard.services");

module.exports = {
  getTrainees: async (req, res) => {
    try {
      await dashboardServices.getTrainees(req, res);
    } catch (err) {
      var msg = err.message || "SOMETHING_WENT_WRONG";
      return res.status(422).json({ error: msg });
    }
  },
  getInterns: async (req, res) => {
    try {
      await dashboardServices.getInterns(req, res);
    } catch (err) {
      var msg = err.message || "SOMETHING_WENT_WRONG";
      return res.status(422).json({ error: msg });
    }
  },
  getOnJobs: async (req, res) => {
    try {
      await dashboardServices.getOnJobs(req, res);
    } catch (err) {
      var msg = err.message || "SOMETHING_WENT_WRONG";
      return res.status(422).json({ error: msg });
    }
  },
};
