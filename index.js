const express = require("express");
const app = express();
const cors = require("cors");

app.use(cors());
app.use(express.json());

app.use(express.json());
app.use("/users", require("./Routes/Users.js"));
app.use("/parcels", require("./Routes/parcels.js"));
// app.use("/parcels", require("./routes/parcelRouters"));

app.listen(3005, () => {
  console.log("Server Is Running on port 3005");
});
