const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const cors = require("cors");

dotenv.config();

connectDB();

const app = express();

app.use(express.json());
app.use(cors());

app.use("/api/students", require("./routes/studentRoutes"));

const PORT = process.env.PORT;
app.listen(PORT, () => console.log("server running in this port 5001"));