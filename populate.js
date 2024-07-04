const mongoose = require("mongoose");

const Admin = require("./models/admin.model");
const Doctor = require("./models/doctor.model");
const Patient = require("./models/patient.model");
const Pharmacy = require("./models/pharmacy.model");

require("dotenv").config({ path: "config.env" });

// Function to populate data (example)
async function populateUsers() {
  try {
    await Admin.insertMany([
      {
        username: "admin",
        name: "admin",
        email: "admin@gmail.com",
        password: "admin",
      },
    ]);
    console.log("Admin added to database!");

    await Doctor.insertMany([
      {
        username: "doctor",
        name: "doctor",
        email: "doctor@gmail.com",
        password: "doctor",
        sitting_time: "2am",
        age: 35,
        gender: "Male",
        phone_no: "104232423423",
        room_no: 300,
      },
    ]);
    console.log("Doctor added to database!");

    await Patient.insertMany([
      {
        username: "patient",
        name: "patient",
        email: "patient@gmail.com",
        password: "patient",
        matric_no: "A23EC2315",
        ic_no: "121351351",
        age: 27,
        gender: "Female",
        phone_no: 123562251522,
      },
    ]);

    console.log("Patient added to database!");

    await Pharmacy.insertMany([
      {
        username: "pharmacy",
        name: "pharmacy",
        email: "pharmacy@gmail.com",
        password: "pharmacy",
        age: 31,
        gender: "Male",
      },
    ]);

    console.log("Pharmacy added to database!");
  } catch (error) {
    console.error("Error populating products:", error);
  }
}

// Connect to MongoDB
mongoose
  .connect(process.env.MONGO_DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to MongoDB");
    populateUsers(); // Call the function to populate data
  })
  .catch((err) => console.error("Error connecting to MongoDB:", err));
