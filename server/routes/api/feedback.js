const router = require("express").Router();

// authentication middleware
const auth = require("../../middleware/auth");

// models
const Feedback = require("../../models/Feedback");
const Notification = require("../../models/Notification");

// @route    Post api/user_feedback/addFeedback
// @access   Private
router.post("/addFeedback", auth, async (req, res) => {
    try {

        const { message } = req.body;
        if (!message) {
            return res
                .status(400)
                .json({ success: false, msg: "Please! Write some message" });
        }

        const newFeedback = new Feedback({
            userId: req.user.id,
            message
        });
        await newFeedback.save();

        return res.json({
            success: true,
            msg: 'Feedback submitted.'
        })

    } catch (err) {
        res.status(500).json({
            success: false,
            msg: "Server Error",
        });
    }
});

// @route    Put api/user_feedback/replyFeedback
// @access   Private
router.put("/replyFeedback", auth, async (req, res) => {
    try {

        const { id, userId, reply } = req.body;
        if (!reply) {
            return res
                .status(400)
                .json({ success: false, msg: "Please! Write some message" });
        }

        const feedbackFields = {}; // built object
        feedbackFields.reply = reply;

        // Update Society
        await Feedback.findOneAndUpdate(
            { _id: id },
            { $set: feedbackFields },
            { new: true }
        );

        // send notification
        let user = await User.findById({ _id: userId }); // find which user currently request
        const notifyFields = {}; // notification obj

        notifyFields.userId = userId;
        notifyFields.message = `Hello ${user.fullname}, Admin viewed your query and take necessary steps on it`;
        notifyFields.color = "bg-info";

        const notify = new Notification(notifyFields);
        await notify.save(); // notification save into DB

        return res.json({
            success: true,
            msg: "Responed Send to particular neibghour",
        });

    } catch (err) {
        res.status(500).json({
            success: false,
            msg: "Server Error",
        });
    }
});

// @route    Get api/user_feedback/getAllFeedback
// @access   Private
router.get("/getAllFeedback", auth, async (req, res) => {
    try {

        let feedback = await Feedback.find()
            .populate('userId', ['fullname'])
            .sort({ date: -1 });

        if (!feedback) {
            return res.status(400).json({
                success: false,
                msg: "There is no Feedback from Neibghour side right now",
            });
        }

        res.json({
            success: true,
            feedbacks: feedback
        });

    } catch (err) {
        res.status(500).json({
            success: false,
            msg: "Server Error",
        });
    }
});



module.exports = router;