const { genToken } = require('../auth/genToken');
const { userModel } = require('../models/userModel');
const mongoose = require('mongoose')




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

        const notes = [{
            title: "Not added any task here!",
            content: "-",
            _id: new mongoose.Types.ObjectId(),
        }];


        // Create the user
        const user = await userModel.create({ name, email, password, notes });

        // Generate token
        const token = genToken(user._id);

        return res.status(201).json({
            msg: "User created successfully!",
            generatedToken: token,
            user: { id: user._id, name: user.name, email: user.email, notes: user.notes },
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

        // console.log(user._id);

        if (user) {
            res.json({ email, password, msg: 'Login successful', generatedToken: genToken(user._id), result: true, user: user })
        }

    } catch (error) {
        res.json({ msg: error.message })
    }

}




// getNotes
const getNotes = async (req, res) => {
    const email = req.headers.email; // Get the email from headers

    if (!email) {
        return res.json({ result: false, msg: "Provide user email" });
    }

    const user = await userModel.findOne({ email });

    if (!user) {
        return res.json({ result: false, msg: "sign up first!" });
    }

    return res.json(user.notes); // Return the user's notes
};





const addNotes = async (req, res) => {
    const { title, content, isPin } = req.body;
    const email = req.headers.email
    if (!email) {
        return res.json({ result: false, msg: "Provide email!" })
    }

    if (!title || !content) {
        return res.json({ result: false, msg: "Provide notes information" })
    }
    const user = await userModel.findOne({ email });
    if (!user) {
        return res.json({ result: false, msg: "user not found" })
    }

    const note = {
        title: title,
        content: content,
        isPin: isPin,
        id: user.notes.length > 0 ? user.notes.length + 1 : 1
    }
    await user.notes.push(note);
    await user.save();

    return res.json({ msg: 'note added successfuly', result: true })
}





const editNote = async (req, res) => {
    const { content, title } = req.body;
    const { noteID } = req.params;
    const email = req.headers.email;
    if (!email) {
        return res.json({ msg: 'Provide Email!', result: false })
    }

    if (!content || !title) {
        return res.json({ msg: 'Provide content and title', result: false })
    }

    const user = await userModel.findOne({ email });
    if (!user) {
        return res.json({ msg: "invalid Email", result: false })
    }

    try {
        let notes = await user.notes;

        const note = await notes.find((val) => val._id.toString() === noteID);
        if (!note) {
            return res.json({ msg: "invalid Note ID", result: false })
        }

        note.title = title;
        note.content = content;
        await user.save();

        return res.json({ msg: 'Note edited successfuly!', result: true })

    } catch (error) {
        return res.json({ msg: "could not edit!", result: false });
    }

}



const deleteNote = async (req, res) => {
    const email = req.headers.email;
    const { noteID } = req.params;
    if (!email) {
        return res.json({ msg: 'Provide email', result: false })
    }

    const user = await userModel.findOne({ email });
    if (!user) {
        return res.json({ msg: 'Invalid email!', result: false })
    }

    let allNotes = await user.notes;
    try {
        allNotes = await allNotes.filter((val) => val._id.toString() !== noteID);
        user.notes = allNotes;
        await user.save();
        return res.json({ msg: "Deleted successfuly", result: true })
    } catch (error) {
        return res.json({ msg: 'could not delete note', result: false })
    }
}



const pinNote = async (req, res) => {
    const email = req.headers.email;
    const { noteID } = req.params;

    if (!email) {
        return res.json({ msg: 'Provide Email', result: false });
    }

    const user = await userModel.findOne({ email });
    if (!user) {
        return res.json({ msg: 'Invalid Email', result: false });
    }

    let note = user.notes.find((val) => val._id.toString() === noteID);

    if (!note) {
        return res.json({ msg: 'Note not found', result: false });
    }

    if (note.isPin == true) {
        note.isPin = false;
    } else {
        note.isPin = true;
    }

    await user.save();

    return res.json({ msg: 'Note Pinned!', result: true });
};


const unpinNote = async (req, res) => {
    const email = req.headers.email;
    const { noteID } = req.params;
    if (!email) {
        return res.json({ msg: 'Provide Email', result: false })
    }

    const user = await userModel.findOne({ email });
    if (!user) {
        return res.json({ msg: 'Invalid Email', result: false })
    }

    let note = await user.notes.find((val) => val._id.toString() === noteID);
    note.isPin = false;
    user.save();
    return res.json({ msg: 'Note UnPinned!', result: true })
}



module.exports = { handleSignup, handleLogin, getNotes, addNotes, editNote, deleteNote, pinNote, unpinNote };
