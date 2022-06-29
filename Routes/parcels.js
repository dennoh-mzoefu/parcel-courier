const express = require("express");
const router = express.Router();
const parcelscontroller = require("../Controllers/parcelController.js");

router.get("/", parcelscontroller.getAllParcels);
router.get("/:id", parcelscontroller.getParcel);
router.post("/", parcelscontroller.createParcel);
router.put("/:id", parcelscontroller.updateParcel);
router.delete("/:id", parcelscontroller.deleteParcel);

module.exports = router;
