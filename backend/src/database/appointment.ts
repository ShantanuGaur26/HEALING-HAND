import mongoose from "mongoose";
const appointmentSchema = new mongoose.Schema({
  patient: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Patient",
    // required: true
  },
  doctor: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Doctor",
    // required: true
  },
  date: {
    type: Date,
    // required: true
  },
  status: {
    type: String,
    enum: ["Scheduled", "Completed", "Canceled"],
    default: "Scheduled",
  },
  createdAt: {
    type: Date,
    default: Date.now,
    // required: true
  },
  mode: String,

  token: String,
});

const AppointmentModel = mongoose.model("Appointment", appointmentSchema);

module.exports = AppointmentModel;
