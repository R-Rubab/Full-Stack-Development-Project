// require("dotenv").config();
require("dotenv").config({
  path: require("path").resolve(__dirname, "../.env"),
});

const app = require("../app");

const connectDB = require("./db");

const PORT = process.env.PORT || 5001;
// const PORT =  5000;

connectDB();

app.listen(PORT, () => {
  console.log(`🚀 Server Running on http://localhost:${PORT}`);
});
