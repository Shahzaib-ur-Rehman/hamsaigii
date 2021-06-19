const router = require("express").Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

// authentication middleware
const auth = require("../../middleware/auth");

// models
const User = require("../../models/User");

// @route    Post api/users/signup
// @access   Public
router.post("/signup", async (req, res) => {
    try {

        const { fullname, email, password, phone, society, address } = req.body;

        if (!fullname || !email || !password || !phone || !society || !address) {
            return res
                .status(400)
                .json({ success: false, msg: "Please! Enter all fields" });
        }

        // check user already exist
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({
                success: false,
                msg: "An account with this email already exists."
            });
        }

        const salt = await bcrypt.genSalt();
        const passordHash = await bcrypt.hash(password, salt);

        const newUser = new User({
            fullname,
            email,
            phone,
            society,
            address,
            password: passordHash,
            role: 1,
        });

        await newUser.save(); // save user into DB

        // login user
        const user = await User.findOne({ email });
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res
                .status(400)
                .json({ success: false, msg: "Invalid Credentials." });
        }

        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);

        // Send Response and also cookie
        return res.cookie('token', token, {
            httpOnly: true,
        }).json({
            success: true,
            msg: "Registered Successfully",
            token: token,
            user: {
                // id: user._id,
                fullname: user.fullname,
                email: user.email,
                role: user.role,
            },
        });

    } catch (err) {
        res.status(500).json({
            success: false,
            msg: "Server Error",
        });
    }
});

// @route    Post api/users/login
// @access   Public
router.post("/login", async (req, res) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return res
                .status(400)
                .json({ success: false, msg: "Email Required" });
        }

        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({
                success: false,
                msg: "No account with this email exists.",
            });
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res
                .status(400)
                .json({ success: false, msg: "Invalid Credentials." });
        }

        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);

        return res.cookie('token', token, {
            httpOnly: true,
        }).json({
            success: true,
            msg: "Registered Successfully",
            token: token,
            user: {
                // id: user._id,
                fullname: user.fullname,
                email: user.email,
                role: user.role,
            },
        });

    } catch (err) {
        res.status(500).json({
            success: false,
            msg: "Server Error",
        });
    }
});

// @route    Put api/users/changePassword
// @access   Private
router.put("/changePassword", auth, async (req, res) => {
    try {
        const { old_password, new_password } = req.body;

        if (!old_password || !new_password) {
            return res
                .status(400)
                .json({ success: false, msg: "Not all Fields have been entered" });
        }

        let findUser = await User.findById({ _id: req.user.id });
        const isMatch = await bcrypt.compare(old_password, findUser.password);
        if (!isMatch) {
            return res
                .status(400)
                .json({ success: false, msg: "Old Password is not correct." });
        }

        const salt = await bcrypt.genSalt();
        const passordHash = await bcrypt.hash(new_password, salt); // hash password

        const userFields = {}; // built object
        userFields.password = passordHash;

        // Update Password
        await User.findOneAndUpdate(
            { _id: req.user.id },
            { $set: userFields },
            { new: true }
        );

        return res
            .status(200)
            .json({ success: true, msg: "Password changed successfully." });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// @route    Get api/users/logout
// @access   Private
router.get('/logout', (req, res) => {
    res.cookie("token", "", {
        httpOnly: true,
        expires: new Date(0)
    }).send();
})

// @route    Get api/users/loggedIn
// @access   Private
router.get('/loggedIn', async (req, res) => {
    try {
        const token = req.cookies.token;
        if (!token) return res.json({
            auth: false,
            user: null
        });

        const verified = jwt.verify(token, process.env.JWT_SECRET);
        if (!verified) return res.json({
            auth: false,
            user: null
        });

        // console.log(verified.id);
        let user = await User.find({ _id: verified.id }).select("-password");

        res.json({
            auth: true,
            user
        });
    } catch (err) {
        res.json({
            auth: false,
            user: null
        });
    }
})

// @route    Get api/user/getAllNeibours
// @access   Private
router.get("/getAllNeibours", auth, async (req, res) => {
    try {

        let findUser = await User.findById({ _id: req.user.id });
        const user = await User.find({
            _id: {
                $ne: req.user.id
            },
            role: 1,
            society: findUser.society
        })
            .select("-password")
            .sort({ date: -1 });

        if (!user) {
            return res.status(400).json({
                success: false,
                msg: "No Neibours Exist.",
            });
        }

        res.json({
            success: true,
            neibours: user
        });

    } catch (err) {
        res.status(500).json({
            success: false,
            msg: "Server Error",
        });
    }
});

// @route    Get api/user/getAllNotification
// @access   Private
router.get("/getAllNotification", auth, async (req, res) => {
    try {

        let notify = await Notification.find({ userId: req.user.id }).sort({ date: -1 });

        if (!notify) {
            return res.status(400).json({
                success: false,
                msg: "You have no notifications",
            });
        }
        res.json({
            success: true,
            notifications: notify
        });

    } catch (err) {
        res.status(500).json({
            success: false,
            msg: "Server Error",
        });
    }
});

module.exports = router;