const express = require("express");
const colors = require("colors");
const cors = require("cors");
const bodyParser = require("body-parser");
const db = require("./config/db");
const path = require("path");
const { notFound, errorHandler } = require("./middleware/errorMiddleware");

const app = express();

app.use(cors());

// route
const userRoute = require("./routes/userRoute");
const productRoute = require("./routes/productRoute");
const uploadRoute = require("./routes/uploadRoute");
const orderRoute = require("./routes/orderRoute");

// connection to database
db.authenticate()
  .then((res) => console.log(`Database Connected`.bgYellow))
  .catch((err) => console.log(`Error:${err}`.red.inverse));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

app.use("/api/user", userRoute);
app.use("/api/product", productRoute);
app.use("/api/upload", uploadRoute);
app.use("/api/order", orderRoute);

let __variableOfChoice = path.resolve();
console.log(path.join(__variableOfChoice, "/uploads"));
app.use("/uploads", express.static(path.join(__variableOfChoice, "/uploads")));

// error handler
app.use(notFound);
app.use(errorHandler);

const PORT = 5000;

app.listen(PORT, () =>
  console.log(`Server Running in on port 5000`.yellow.bold)
);
