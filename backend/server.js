const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./config/db.js');
const userRoutes = require('./routes/userRoutes.js');
const productRoutes = require('./routes/productRoutes.js');

const app = express();
app.use(express.json());
app.use(cors());


dotenv.config();
const PORT = process.env.PORT || 3000;

// Connect to MongoDB
connectDB();


app.get("/", (req, res) => {
    res.send("Hello from the server!");
});

//API routes
app.use("/api/users", userRoutes);
app.use("/api/products", productRoutes);


app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});