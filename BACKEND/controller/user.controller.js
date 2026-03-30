import User from "../model/user.model.js";
import bcrypt from "bcrypt";

// --- SIGNUP LOGIC ---
export const signup = async (req, res) => {
    try {
        const { fullname, email, password } = req.body;
        
        // 1. Check if user already exists
        const user = await User.findOne({ email });
        if (user) {
            return res.status(400).json({ message: "User already exists" });
        }

        // 2. Hash the password
        const hashPassword = await bcrypt.hash(password, 10);

        // 3. Create new user
        const createdUser = new User({
            fullname: fullname,
            email: email,
            password: hashPassword,
        });

        await createdUser.save();
        res.status(201).json({ 
            message: "User created successfully",
            user: {
                _id: createdUser._id,
                fullname: createdUser.fullname,
                email: createdUser.email,
            }
        });

    } catch (error) {
        console.log("Error: " + error.message);
        res.status(500).json({ message: "Internal server error" });
    }
};

// --- LOGIN LOGIC ---
export const login = async (req, res) => {
    try {
        const { email, password } = req.body;

        // 1. Find user by email
        const user = await User.findOne({ email });

        // 2. Compare password with hashed password in DB
        // bcrypt.compare returns true if they match
        const isMatch = user ? await bcrypt.compare(password, user.password) : false;

        if (!user || !isMatch) {
            return res.status(400).json({ message: "Invalid username or password" });
        }

        // 3. Success response (Excluding password from the return data)
        res.status(200).json({
            message: "Login successful",
            user: {
                _id: user._id,
                fullname: user.fullname,
                email: user.email,
            },
        });

    } catch (error) {
        console.log("Error: " + error.message);
        res.status(500).json({ message: "Internal server error" });
    }
};