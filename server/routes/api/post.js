const router = require("express").Router();

// authentication middleware
const auth = require("../../middleware/auth");

// models
const Post = require("../../models/Post");
const User = require("../../models/User");
const Notification = require("../../models/Notification");

// @route    Post api/post/signContract
// @access   Private
router.post("/signContract", auth, async (req, res) => {
    try {
        const { neibName, neighbourId, item_name, message, return_date } = req.body;

        if (!item_name || !message || !return_date) {
            return res
                .status(400)
                .json({ success: false, msg: "Please! Enter all fields" });
        }

        const newPost = new Post({
            userId: req.user.id,
            neighbourId,
            item_name,
            message,
            return_date
        });

        await newPost.save() // save user into DB

        return res.json({
            success: true,
            msg: "Your Contract goes to Admin, wait for his Approval",
            neibName
        });

    } catch (err) {
        res.status(500).json({
            success: false,
            msg: "Server Error",
        });
    }
});

// @route    Get api/posts/getAllContracts
// @access   Private
router.get("/getAllContracts", auth, async (req, res) => {
    try {

        const post = await Post.find({ status: "Pending" })
            .populate('neighbourId', ['fullname'])
            .sort({ date: -1 });
        if (!post) {
            return res.status(400).json({
                success: false,
                msg: "Right Now! There is no Contract Exists.",
            });
        }

        res.json({
            success: true,
            posts: post
        });

    } catch (err) {
        res.status(500).json({
            success: false,
            msg: "Server Error",
        });
    }
});

// @route    Put api/posts/updatePost
// @access   Private
router.put("/updatePost", auth, async (req, res) => {
    try {

        const { id, userId, status } = req.body;

        const postFields = {}; // built object
        postFields.status = status;

        let user = await User.findById({ _id: req.user.id }); // find which user currently request
        let getByUserId = await User.findById({ _id: userId }); // find which user currently request

        const notifyFields = {}; // notification obj
        notifyFields.userId = userId;


        // if Rejected than do reason attach
        if (status == "Rejected") {
            // Role based attachment
            if (user.role == 1) {
                postFields.reason = req.body.reason;
                postFields.flag = 1; // neib

                notifyFields.message = `Sorry ${getByUserId.fullname}! I Dont have. Have a Nice day.`;
                notifyFields.color = "danger";
            } else {
                postFields.reason = req.body.reason;
                postFields.flag = 0; // admin

                notifyFields.message = `Hey ${getByUserId.fullname}, Admin Reject your request due to some SOPs`;
                notifyFields.color = "danger";
            }
        } else {
            if (user.role == 1) {
                // neib req
                notifyFields.message = `Hello ${getByUserId.fullname}, I'll give you the particular item`;
                notifyFields.color = "success";
            } else {
                // admin req
                notifyFields.message = `Hey ${getByUserId.fullname}, I'll Passed On your request to particular Neibghour`;
                notifyFields.color = "primary";
            }
        }

        const notify = new Notification(notifyFields);
        await notify.save(); // notification save into DB

        // Update Post
        await Post.findOneAndUpdate(
            { _id: id },
            { $set: postFields },
            { new: true }
        );

        return res.json({
            success: true,
            msg: "Post Status Changed and Notify particular user as well.",
        });

    } catch (err) {
        console.log(err)
        res.status(500).json({
            success: false,
            msg: "Server Error",
        });
    }
});

// @route    Get api/posts/getRejectedContracts
// @access   Private
router.get("/getRejectedContracts", auth, async (req, res) => {
    try {

        const post = await Post.find({
            userId: req.user.id,
            status: "Rejected"
        }).sort({ date: -1 });
        if (!post.length > 0) {
            return res.status(400).json({
                success: false,
                msg: "Right Now! There is no Contract Exists.",
            });
        }

        res.json({
            success: true,
            posts: post
        });

    } catch (err) {
        res.status(500).json({
            success: false,
            msg: "Server Error",
        });
    }
});

// @route    Get api/posts/getPassedOnContracts
// @access   Private
router.get("/getPassedOnContracts", auth, async (req, res) => {
    try {
        const post = await Post.find({
            userId: req.user.id,
            status: "Passed On"
        }).sort({ date: -1 });

        if (!post.length > 0) {
            return res.status(400).json({
                success: false,
                msg: "Right Now! There is no Contract Exists.",
            });
        }

        res.json({
            success: true,
            posts: post
        });

    } catch (err) {
        res.status(500).json({
            success: false,
            msg: "Server Error",
        });
    }
});

// @route    Get api/posts/getSingleUserContracts
// @access   Private
router.get("/getSingleUserContracts", auth, async (req, res) => {
    try {

        const post = await Post.find({
            userId: req.user.id
        }).populate('neighbourId', ['fullname']).sort({ date: -1 });

        if (!post.length > 0) {
            return res.status(400).json({
                success: false,
                msg: "Right Now! You did not Signed Contract Anyone.",
            });
        }

        res.json({
            success: true,
            posts: post
        });

    } catch (err) {
        res.status(500).json({
            success: false,
            msg: "Server Error",
        });
    }
});

// @route    Get api/posts/receivedPassedOnContracts
// @access   Private
router.get("/receivedPassedOnContracts", auth, async (req, res) => {
    try {
        const post = await Post.find({
            neighbourId: req.user.id,
            status: "Passed On"
        })
            .populate('neighbourId', ['fullname'])
            .sort({ date: -1 });

        if (!post.length > 0) {
            return res.status(400).json({
                success: false,
                msg: "Right Now! There is no Contract Exists.",
            });
        }

        res.json({
            success: true,
            posts: post
        });

    } catch (err) {
        res.status(500).json({
            success: false,
            msg: "Server Error",
        });
    }
});

module.exports = router;