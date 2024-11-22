const { genToken } = require('../auth/genToken');
const { userModel } = require('../models/userModel');

const handleSignup = async (req, res) => {
    const { name, email, password } = req.body;

    // Input Validation
    if (!name || !email || !password) {
        return res.status(400).json({ msg: "All fields (name, email, password) are required!" });
    }

    try {
        // Check if user already exists
        const isUserPresent = await userModel.findOne({ email });
        if (isUserPresent) {
            return res.status(409).json({ msg: "User already exists!", result: false });
        }

        // Create the user
        const user = await userModel.create({ name, email, password });

        // Generate token
        const token = genToken(user._id);

        return res.status(201).json({
            msg: "User created successfully!",
            generatedToken: token,
            user: { id: user._id, name: user.name, email: user.email },
            result: true
        });
    } catch (error) {
        console.error("Error during signup:", error);
        return res.status(500).json({ msg: "Internal server error", result: false });
    }
};

const handleLogin = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await userModel.findOne({ email, password });

        if (!user) {
            return res.json({ msg: 'Check Email & Password', result: false })
        }
        console.log(user._id);
        if (user) {
            res.json({ email, password, msg: 'Login successful', token: genToken(user._id), result: true })
        }

    } catch (error) {
        res.json({ msg: error.message })
    }

}

module.exports = { handleSignup, handleLogin };
