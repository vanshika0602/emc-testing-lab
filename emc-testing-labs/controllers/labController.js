const Lab = require('../models/labsModel');  // ✅ Ensure correct model path
const User = require('../models/usersModel');  // ✅ Import the User model
const { createLabSchema } = require('../middlewares/authMiddleware'); // Adjust path if needed


// CREATE a new lab
exports.createLab = async (req, res) => {
    try {
        const { user_id } = req.body;

        // Create lab with explicit user_id
        const lab = new Lab({ ...req.body, user_id });
        const savedLab = await lab.save();
        const labObject = savedLab.toObject({ versionKey: false });

        const { _id, ...rest } = labObject;
        const responseData = { id: _id.toString(), ...rest };

        res.status(201).json({ success: true, message: "Lab created", data: responseData });
    } catch (err) {
        res.status(400).json({ success: false, message: err.message });
    }
};

// GET all labs
exports.getAllLabs = async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    const skip = (page - 1) * limit;

    const filters = req.query;
    const query = {};

    if (filters.accreditation) {
      query.accreditation = { $regex: filters.accreditation, $options: 'i' };
    }

    if (filters.industries) {
      query.industries = { $in: [new RegExp(filters.industries, 'i')] };
    }

    if (filters.testingServices) {
      query.testingServices = { $in: [new RegExp(filters.testingServices, 'i')] };
    }

    if (filters.location) {
      query.location = { $in: [new RegExp(filters.location, 'i')] };
    }

    if (filters.expertise) {
      query.expertise = { $regex: filters.expertise, $options: 'i' };
    }

    const labs = await Lab.find(query).skip(skip).limit(limit);
    const total = await Lab.countDocuments(query);

    const transformedLabs = labs.map((lab) => {
      const labObj = lab.toObject({ versionKey: false });
      const { _id, ...rest } = labObj;
      return { id: _id.toString(), ...rest };
    });

    res.status(200).json({
      success: true,
      data: transformedLabs,
      total,
      page,
      pages: Math.ceil(total / limit),
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Server error",
      error: err.message,
    });
  }
};
