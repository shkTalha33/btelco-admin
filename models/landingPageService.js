const mongoose = require("mongoose");

const landingPageServiceSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    category: { type: String, required: true },
    image: { type: String, required: true },
}, { timestamps: true });

module.exports = mongoose.model("LandingPageService", landingPageServiceSchema);
