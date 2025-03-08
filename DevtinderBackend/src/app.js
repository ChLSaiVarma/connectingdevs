const express = require("express");
require("dotenv").config();
const connectDB = require("./config/database");
const app = express();
const PORT = process.env.PORT || 7777;
const cookieParser = require("cookie-parser");
const cors = require("cors");

// Get the frontend origin from environment variable
const allowedOrigin = process.env.REACT_APP_API_ORIGIN || "http://localhost:5173";

// CORS setup: Allow specific origin and enable credentials
app.use(
  cors({
    origin: allowedOrigin,  // Use the correct frontend origin
    credentials: true,      // Allow cookies to be sent
  })
);

// Optionally handle pre-flight requests
app.options('*', cors());

app.use(express.json());
app.use(cookieParser());

const authRouter = require("./routes/auth");
const profileRouter = require("./routes/profile");
const requestRouter = require("./routes/request");
const userRouter = require("./routes/user");

app.use("/", authRouter);
app.use("/", profileRouter);
app.use("/", requestRouter);
app.use("/", userRouter);

connectDB()
  .then(() => {
    console.log("Database connection established...");
    app.listen(PORT, () => {
      console.log(`Server is successfully listening on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error("Database cannot be connected!!");
  });
