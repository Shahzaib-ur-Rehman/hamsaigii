const router = require("express").Router();

// authentication middleware
const auth = require("../../middleware/auth");

// models
const Society = require("../../models/Society");

// @route    Post api/admin/addSociety
// @access   Private
router.post("/addSociety", auth, async (req, res) => {
    try {

        const { name, location, description } = req.body;
        if (!name || !location || !description) {
            return res
                .status(400)
                .json({ success: false, msg: "Please! Enter all fields" });
        }

        const newSociety = new Society({
            name,
            location,
            description
        });

        await newSociety.save(); // save user into DB
        return res.json({
            success: true,
            msg: "Society Added",
        });

    } catch (err) {
        res.status(500).json({
            success: false,
            msg: "Server Error",
        });
    }
});

// @route    Get api/admin/getSocieties
// @access   Private
router.get("/getSocieties", async (req, res) => {
    try {
        const society = await Society.find().sort({ date: -1 });
        if (!society) {
            return res.status(400).json({
                success: false,
                msg: "Right Now! There is no Society Exist.",
            });
        }

        let societies = [];
        society.forEach(item => {
            societies.push(item.name);
        })

        res.json({
            success: true,
            societies
        });

    } catch (err) {
        res.status(500).json({
            success: false,
            msg: "Server Error",
        });
    }
});

// @route    Get api/admin/getAllSocieties
// @access   Private
router.get("/getAllSocieties", async (req, res) => {
    try {

        const society = await Society.find().sort({ date: -1 });
        if (!society) {
            return res.status(400).json({
                success: false,
                msg: "Right Now! There is no Society Exist.",
            });
        }

        res.json({
            success: true,
            societies: society
        });

    } catch (err) {
        res.status(500).json({
            success: false,
            msg: "Server Error",
        });
    }
});

// @route    Put api/admin/updateSociety
// @access   Private
router.put("/updateSociety", auth, async (req, res) => {
    try {

        const { id, name, location, description } = req.body;

        const societyFields = {}; // built object
        societyFields.name = name;
        societyFields.location = location;
        societyFields.description = description;

        // Update Society
        await Society.findOneAndUpdate(
            { _id: id },
            { $set: societyFields },
            { new: true }
        );

        return res.json({
            success: true,
            msg: "Society Updated",
        });

    } catch (err) {
        res.status(500).json({
            success: false,
            msg: "Server Error",
        });
    }
});

// @route    Delete api/admin/removedSociety
// @access   Private
router.delete("/removedSociety", auth, async (req, res) => {
    try {

        await Society.findOneAndRemove({
            _id: req.body.id,
        });

        return res.json({
            success: true,
            msg: "Society Removed",
        });

    } catch (err) {
        res.status(500).json({
            success: false,
            msg: "Server Error",
        });
    }
});

module.exports = router;