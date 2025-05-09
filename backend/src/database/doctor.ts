import mongoose from "mongoose";

const doctorSchema = new mongoose.Schema({
  FirstName: {
    type: String,
    required: true,
  },
  LastName: {
    type: String,
    required: true,
  },
  Email: {
    type: String,
    required: true,
    unique: true,
  },
  Phone: {
    type: String,
    //required: true,
  },
  Password: {
    type: String,
    required: true,
  },
  address: {
    street: String,
    city: String,
    state: String,
    zip: String,
  },
  specialisation:{
    type:String
  },
  appointments: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Appointment",
    },
  ],
  rating: {
    reviews: [String],
    avgrating: Number,
    totalrating: Number,
    default:0,
  },
  experience:{
    type:Array,
  },
  bio:{ type:String,maxLenght:50},
  timeSlots:{type:Array},
  isApproved:{
    type:String,
    enum:["pending","approved","cancelled"],
    default:"pending",
  }

});
export const DoctorModel = mongoose.model("Doctor", doctorSchema);
// module.exports = DoctorModel;














