const express = require("express");
const router = express.Router();
const userscontroller = require("../Controllers/userControllers.js");
const verifyRoute = require("../middleware/verifyToken");

router.get("/", userscontroller.getAllUsers);
router.get("/:id", userscontroller.getUser);
router.post("/", userscontroller.createUser);
router.put("/:id", userscontroller.updateUser);
router.delete("/:id", userscontroller.deleteUser);
router.post("/login", userscontroller.userLogin);

module.exports = router;
