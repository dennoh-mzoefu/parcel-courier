const mssql = require("mssql");
const dotenv = require("dotenv");
dotenv.config();

//connect to database

const sqlConfig = {
  user: "sa",
  password: "deno",
  server: "localhost",
  database: "send_it",

  options: {
    encrypt: false,
  },
  pool: {
    max: 10,
    min: 0,
    idleTimeoutMillis: 30000,
  },
};

mssql
  .connect(sqlConfig)
  .then((pool) => {
    if (pool.connecting) {
      console.log("connecting to the database");
    }

    if (pool.connected) {
      console.log("connected");
    }
  })
  .catch((e) => console.log(e));
