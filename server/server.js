
require("dotenv").config();

const express = require("express");
const cors = require("cors");

const app = express();

const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Home route
app.get("/", (req, res) => {
    res.json({
        message: "Accessibility Audit API is running successfully!"
    });
});

// Health check route
app.get("/api/health", (req, res) => {
    res.json({
        status: "success",
        message: "Server is healthy"
    });
});

// Start server only when this file is run directly
if (require.main === module) {
    app.listen(PORT, () => {
        console.log(`Server running at http://localhost:${PORT}`);
    });
}

// Export app for automated testing
module.exports = app;
