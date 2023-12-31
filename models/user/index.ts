const { default: mongoose } = require("mongoose");

const UserSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    }
}, { timestamps: true });

const User = mongoose.models.User || mongoose.model('User', UserSchema);

export default User;