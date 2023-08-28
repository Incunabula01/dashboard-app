import mongoose from "mongoose";

const VisitorSchema = new mongoose.Schema({
    visitors: Number,
    location: String,
    device: String,
    premiumUserNumber: Number,
    month: String
}, { timestamps: true});

const Visitor = mongoose.models.Visitors || mongoose.model('Visitors', VisitorSchema);

export default Visitor;