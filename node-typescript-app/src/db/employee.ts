import mongoose from "mongoose";

const EmployeeSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      match: [/\S+@\S+\.\S+/, 'Please provide a valid email address'], // Optional: Email validation regex
    },
    mobile: {
      type: String,
      required: true,
    },
    dob: {
      type: Date,
    },
    doj: {
      type: Date,
    },
  },
  {
    timestamps: true,
  }
);

export const EmployeeModel = mongoose.model("Employee", EmployeeSchema);
