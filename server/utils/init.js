const User = require('../models/User');
const bcrypt = require("bcryptjs");

exports.checkAdmin = async () => {
    try {

        let email = process.env.ADMIN_ACCOUNT_EMAIL;
        const salt = await bcrypt.genSalt();
        const passordHash = await bcrypt.hash(process.env.ADMIN_ACCOUNT_PASSWORD, salt);
        
        // check admin already exist
        const admin = await User.findOne({ email });
        if (!admin) {
            const addAdmin = new User({
                fullname: "Admin",
                email,
                password: passordHash,
                role: 0
            });

            await addAdmin.save(); // admin added
            console.log("admin added");
        }
    } catch (error) {
        console.log(error);
    }
}