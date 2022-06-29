const mssql = require("mssql");
const config = require("../config/db");
const bcrypt = require("bcrypt");

const { v4: uuidv4 } = require("uuid");

async function getAllParcels(req, res) {
  try {
    let pool = await mssql.connect(config);
    let parcels = await pool.request().execute(`getAllParcels`);

    return res.json(parcels.recordsets[0]);
  } catch (error) {
    console.log(error);
  }
}

async function getParcel(req, res) {
  const parcelId = req.params.id;

  try {
    let pool = await mssql.connect(config);
    let parcel = await pool
      .request()
      .input("parcelId", parcelId)
      .execute(`getParcel`);

    return res.json(parcel.recordsets[0]);
  } catch (error) {
    console.log(error);
  }
}

async function createParcel(req, res) {
  const {
    senderId,
    receiverPhoneNumber,
    receiverEmail,
    destination,
    startLocation,
    parcelType,
    weight,
    price,
  } = req.body;

  try {
    let pool = await mssql.connect(config);
    const id = uuidv4();
    await pool
      .request()
      .input("parcelId", id)
      .input("senderId", senderId)
      .input("receiverPhoneNumber", receiverPhoneNumber)
      .input("receiverEmail", receiverEmail)
      .input("destination", destination)
      .input("startLocation", startLocation)
      .input("parcelType", parcelType)
      .input("weight", weight)
      .input("price", price)
      .execute(`createParcel`);

    return res.json("Parcel created successfully");
  } catch (error) {
    console.log(error);
  }
}

async function updateParcel(req, res) {
  const id = req.params.id;
  const {
    receiverPhoneNumber,
    receiverEmail,
    destination,
    startLocation,
    parcelType,
    weight,
    price,
  } = req.body;

  try {
    let pool = await mssql.connect(config);

    await pool
      .request()
      .input("parcelId", id)
      .input("senderId", senderId)
      .input("receiverPhoneNumber", receiverPhoneNumber)
      .input("receiverEmail", receiverEmail)
      .input("destination", destination)
      .input("startLocation", startLocation)
      .input("parcelType", parcelType)
      .input("weight", weight)
      .input("price", price)
      .execute(`updateParcel`);

    return res.json("Parcel updtated successfully");
  } catch (error) {
    console.log(error);
  }
}

async function deleteParcel(req, res) {
  const parcelId = req.params.id;

  try {
    let pool = await mssql.connect(config);

    await pool.request().input("parcelId", parcelId).execute(`deleteParcel`);

    return res.json("parcel deleted");
  } catch (error) {
    console.log(error);
  }
}

module.exports = {
  getAllParcels,
  getParcel,
  createParcel,
  updateParcel,
  deleteParcel,
};
