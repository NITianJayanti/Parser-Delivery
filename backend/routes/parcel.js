const express = require("express");
const {
  createParcel,
  getAllParcels,
  updateParcel,
  getOneParcel,
  getUserParcel,
  deleteParcel,
} = require("../controllers/parcel");

const router = express.Router();

// add parcel
router.post("/", createParcel);

// get all parcel

router.get("/", getAllParcels);

// update parcel
router.put("/:id", updateParcel);

// get one parcel
router.get("/find/:id", getOneParcel);

// get users parcels
router.post("/me", getUserParcel);

// delete parcel
router.delete("/:id", deleteParcel);

module.exports = router;
