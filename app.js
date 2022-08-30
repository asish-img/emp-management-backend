require("dotenv").config();
const express = require("express");
const cors = require("cors");

const employeeRouter = require("./routes/employee/employee.route");
const dashboardRouter = require("./routes/dashboard/dashboard.route");

const db = require("./models/index");
const path = require("path");
const app = express();
db.initialize();

var corsOption = {
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  // credentials: true,
  exposedHeaders: ["x-access-token"],
};

app.use(cors(corsOption));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use(express.static(path.join(__dirname, "public")));

app.use("/employee", employeeRouter);
app.use("/dashboard", dashboardRouter);

// app.use("/img", express.static(path.join(__dirname, "public/images/")));

app.listen(process.env.PORT, () => {
  console.log("Server is running at PORT", process.env.PORT);
});

app.use(function (req, res) {
  res.status(404).json({
    status: 404,
    message: "Sorry can't find that!",
    data: {},
  });
});
