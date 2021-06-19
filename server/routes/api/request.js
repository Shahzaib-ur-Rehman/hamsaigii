const router = require("express").Router();

// authentication middleware
const auth = require("../../middleware/auth");

// models
const Request = require("../../models/Request");
const Notification = require("../../models/Notification");

// @route    Post api/user_request/addRequest
// @access   Private
router.post("/addRequest", auth, async (req, res) => {
    try {

        const { item_name, quote, return_date } = req.body;
        if (!quote || !item_name || !return_date) {
            return res
                .status(400)
                .json({ success: false, msg: "Please! Enter all fields" });
        }

        const newRequest = new Request({
            userId: req.user.id,
            item_name,
            quote,
            return_date
        });

        await newRequest.save();
        return res.json({
            success: true,
            msg: 'Request send'
        })

    } catch (err) {
        res.status(500).json({
            success: false,
            msg: "Server Error",
        });
    }
});

// @route    Get api/user_request/getAllRequest
// @access   Private
router.get("/getAllRequest", auth, async (req, res) => {
    try {
        const response = await Request.find({
            userId: {
                $nin: req.user.id
            }
        }).sort({ date: -1 });

        if (!response.length > 0) {
            return res.status(400).json({
                success: false,
                msg: "Right Now! There is no Request Exists.",
            });
        }

        res.json({
            success: true,
            requests: response
        });

    } catch (err) {
        res.status(500).json({
            success: false,
            msg: "Server Error",
        });
    }
});

// @route    Get api/user_request/myRequest
// @access   Private
router.get("/myRequest", auth, async (req, res) => {
    try {
        const response = await Request.find({ userId: req.user.id }).sort({ date: -1 });

        if (!response.length > 0) {
            return res.status(400).json({
                success: false,
                msg: "Right Now! There is no Request Exists.",
            });
        }

        res.json({
            success: true,
            requests: response
        });

    } catch (err) {
        res.status(500).json({
            success: false,
            msg: "Server Error",
        });
    }
});

// @route    Delete api/user_request/deleteRequest
// @access   Private
router.delete("/deleteRequest/:id", auth, async (req, res) => {
    try {

        await Request.findOneAndRemove({
            _id: req.params.id,
        });

        return res.json({
            success: true,
            msg: "Request Deleted",
        });

    } catch (err) {
        res.status(500).json({
            success: false,
            msg: "Server Error",
        });
    }
});

// @route    Put api/user_request/requestAccepted
// @access   Private
router.put("/requestAccepted", auth, async (req, res) => {
    try {

        const { id, userId, message } = req.body;

        if (!message) {
            return res
                .status(400)
                .json({ success: false, msg: "Please! Write some message." });
        }

        const reqFields = {}; // built object
        reqFields.message = message;
        reqFields.acceptorId = req.user.id;

        // let user = await User.findById({ _id: req.user.id });
        let getByUserId = await User.findById({ _id: userId }); // find which user currently request

        const notifyFields = {}; // notification obj
        notifyFields.userId = userId;
        notifyFields.message = `Hello ${getByUserId.fullname}, I Accepted your request`;
        notifyFields.color = "success";

        const notify = new Notification(notifyFields);
        await notify.save(); // notification save into DB

        // Update Request
        await Request.findOneAndUpdate(
            { _id: id },
            { $set: reqFields },
            { new: true }
        );

        return res.json({
            success: true,
            msg: "Your Responed successfully sent to particular neibghour",
        });

    } catch (err) {
        res.status(500).json({
            success: false,
            msg: "Server Error",
        });
    }
});

module.exports = router;