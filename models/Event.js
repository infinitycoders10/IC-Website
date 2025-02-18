import mongoose from "mongoose";

const EventSchema = new mongoose.Schema(
    {
        title: { type: String, required: true },
        description: { type: String, required: true },
        date: { type: Date, required: true },
        location: { type: String, required: true },
        image: { type: String, required: true }, // Store image URL
        createdBy: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    },
    { timestamps: true }
);

export default mongoose.models.Event || mongoose.model("Event", EventSchema);