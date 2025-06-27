// backend/controllers/vendorController.js
const { v4: uuidv4 } = require('uuid');
const Vendor = require('../models/Vendor');

exports.addVendor = async (req, res) => {
  try {
    const vendorData = { vendorId: uuidv4(), ...req.body };
    const vendor = await Vendor.create(vendorData);
    res.status(201).json({ success: true, vendor });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

exports.getVendors = async (req, res) => {
  try {
    const vendors = await Vendor.findAll();
    res.status(200).json(vendors);
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};
