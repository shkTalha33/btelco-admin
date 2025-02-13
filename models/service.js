const mongoose = require("mongoose");

const serviceSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    category: { type: String, required: true },
    image: { type: String, required: true } // Stores image path
}, { timestamps: true });

module.exports = mongoose.model("Service", serviceSchema);
