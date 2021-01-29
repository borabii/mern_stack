const express = require("express");
const ConnectDB = require("./DB/Connection");
const cors = require("cors");
const PORT = process.env.PORT || 6001;

ConnectDB();

const app = express();

app.use(cors());

app.use(express.json({ extended: false }));
app.use("/api/userModel", require("./Api/User"));

app.listen(PORT, () => {
  console.log(` server listen en port ${PORT}`);
});
