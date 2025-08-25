const Parcel = require("../models/parcel.model");

// create  a parcel

const createParcel = async (req, res) => {
  try {
    console.log("Incoming body:", req.body);
    const parcel = new Parcel(req.body);
    await parcel.save();
    res.status(201).json(parcel);
  } catch (error) {
    console.error("Parcel creation error:", error);
    res.status(400).json({ message: error.message });
  }
};

// get all parcels

const getAllParcels = async (req, res) => {
  try {
    const parcels = await Parcel.find().sort({ createdAt: -1 });
    res.status(200).json(parcels);
  } catch (error) {
    res.status(500).json(error);
  }
};

// update the parcel
const updateParcel = async (req, res) => {
  try {
    const parcel = await Parcel.findByIdAndUpdate(
      req.params.id,
      { $set: req.body }, // updates only provided fields
      { new: true, runValidators: true } // return updated doc
    );

    if (!parcel) {
      return res.status(404).json({ message: "Parcel not found" });
    }

    res.status(200).json(parcel);
  } catch (error) {
    console.error("Update error:", error);
    res.status(500).json({ message: error.message });
  }
};

// get one parcel
const getOneParcel = async (req, res) => {
  try {
    const parcel = await Parcel.findById(req.params.id);
    res.status(200).json(parcel);
  } catch (error) {
    res.status(500).json(error);
  }
};

// get user's parcel

const getUserParcel = async (req, res) => {
  try {
    const parcels = await Parcel.find({ senderemail: req.body.email }).sort({
      createdAt: -1,
    });
    res.status(200).json(parcels);
  } catch (error) {
    res.status(500).json(error);
  }
};

// delete a parcel

const deleteParcel = async (req, res) => {
  try {
    await Parcel.findByIdAndDelete(req.params.id);
    res.status(201).json("parcel has been deleted successfully");
  } catch (error) {
    res.status(500).json(error);
  }
};
module.exports = {
  deleteParcel,
  updateParcel,
  getUserParcel,
  getOneParcel,
  getAllParcels,
  createParcel,
};
