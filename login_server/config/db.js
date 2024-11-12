require ('dotenv').config(); // Load environment variables
const mongoose = require("mongoose");

// Connect to MongoDB using the environment variable
mongoose
.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => {
    console.log("DB Connected");
})
.catch((error) => console.log("Database connection error:", error));

