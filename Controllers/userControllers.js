const mssql = require("mssql");
const config = require("../config/db");
const bcrypt = require("bcrypt");
const { validateUsers } = require("../helpers/validators");
const jwt = require("jsonwebtoken");

const { v4: uuidv4 } = require("uuid");

async function getAllUsers(req, res) {
  try {
    let pool = await mssql.connect(config);
    let users = await pool.request().execute(`getAllUsers`);

    return res.json(users.recordsets[0]);
  } catch (error) {
    console.log(error);
  }
}

async function getUser(req, res) {
  const id = req.params.id;

  try {
    let pool = await mssql.connect(config);
    let user = await pool.request().input("id", id).execute(`getUser`);

    return res.json(user.recordsets[0]);
  } catch (error) {
    console.log(error);
  }
}

async function createUser(req, res) {
  const { userName, phoneNumber, email, password } = req.body;
  const salt = await bcrypt.genSalt(10);
  const hash = await bcrypt.hash(password, salt);
  const validator = {
    userName,
    phoneNumber,
    email,
    password,
  };
  const { error } = validateUsers(validator);

  if (error) {
    return res.status(400).send({ success: false, message: error.details[0] });
  }

  try {
    let pool = await mssql.connect(config);
    const id = uuidv4();
    const user = { id, userName, phoneNumber, email, password };
    await pool
      .request()
      .input("id", id)
      .input("userName", userName)
      .input("phoneNumber", phoneNumber)
      .input("email", email)
      .input("password", hash)
      .execute(`createUser`);

    //create and assign token

    const token = jwt.sign({ id: id }, process.env.JWT_SECRET);
    // return res.header("auth_token", token).send(user);
    return res.header("user", user).send(user);

    // return res.json("User created successfully");
  } catch (error) {
    console.log(error);
  }
}

async function updateUser(req, res) {
  const { userName, phoneNumber, email, password } = req.body;
  const Id = req.params.id;

  try {
    let pool = await mssql.connect(config);

    await pool
      .request()
      .input("id", Id)
      .input("userName", userName)
      .input("phoneNumber", phoneNumber)
      .input("email", email)
      .execute(`updateUser`);

    return res.json("Data Updated successfully");
  } catch (error) {
    console.log(error);
  }
}

async function deleteUser(req, res) {
  const id = req.params.id;

  try {
    let pool = await mssql.connect(config);

    await pool.request().input("id", id).execute(`deleteUser`);

    return res.json("user deleted");
  } catch (error) {
    console.log(error);
  }
}

async function userLogin(req, res) {
  const { email, password } = req.body;

  let pool = await mssql.connect(config);

  let user = await pool.request().input("email", email).execute(`loginUser`);

  const validUser = await bcrypt.compare(
    password,
    user.recordsets[0][0].password
  );

  if (!validUser) {
    res.send("Invalid Details");
  }

  const token = jwt.sign(
    { id: user.recordsets[0][0].id },
    process.env.JWT_SECRET
  );
  return res.header("auth_token", token).send(user.recordsets[0][0]);
  // .json({ token: token, authToken: true, user: user.recordsets[0][0] });
}

module.exports = {
  getAllUsers,
  getUser,
  createUser,
  updateUser,
  deleteUser,
  userLogin,
};
