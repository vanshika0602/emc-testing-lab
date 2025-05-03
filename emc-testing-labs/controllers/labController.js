const Lab = require('../models/labsModel');  // ✅ Ensure correct model path
const User = require('../models/usersModel');  // ✅ Import the User model
const { createLabSchema } = require('../middlewares/validator'); // Adjust path if needed


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
        const labs = await Lab.find().populate('user_id', 'email');
        
        // Transform each lab to move 'id' to the top and remove '_id'
        const transformedLabs = labs.map(lab => {
            const labObj = lab.toObject({ versionKey: false });
            const { _id, ...rest } = labObj;
            return { id: _id.toString(), ...rest };
        });

        res.status(200).json({ success: true, data: transformedLabs });
    } catch (err) {
        res.status(500).json({ success: false, message: "Server error", error: err.message });
    }
};

exports.getLabDescription = async (req, res) => {
    try {
        const lab = await Lab.findById(req.params.labId).populate('user_id', 'email');
        // console.log(lab);

        if (!lab) return res.status(404).json({ success: false, message: 'Lab not found' });
        // console.log('heheo');
        
        
        res.status(200).json({ success: true, data: lab });

    } catch (err) {
        
        res.status(500).json({ success: false, message: err.message });
    }
}

null
""
"bhbcjwbci"

