
import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    firstname: {
        type: String, // Fix: 'String' should be capitalized
        required: true
    },
    lastname: {
        type: String, // Fix: 'String' should be capitalized
        required: true
    },
    email: {
        type: String, // Fix: 'String' should be capitalized
        required: true,
        unique: true
    },
    phone: {
        type: String, // Fix: 'String' should be capitalized
        required: true
    }
});

const Usermodels = mongoose.model("User", userSchema);

export default Usermodels;
