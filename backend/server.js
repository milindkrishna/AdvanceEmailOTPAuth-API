import dotenv from "dotenv";
dotenv.config();
import express from "express";
const app = express();
import cookieParser from "cookie-parser";
const PORT = process.env.PORT || 5000;
import { connectDB } from "./db/db.config.js";
import authRoutes from "./routes/auth.route.js";
import swaggerJsdoc from "swagger-jsdoc";
import swaggerui from "swagger-ui-express";
import path from "path";
import { fileURLToPath } from "url";

app.use(express.json())
app.use(cookieParser()) // allow to parse incoming cookies
app.use(express.static('public'));


// Swagger options
const swaggeroptions = {
    definition: {
    //  openapi: "3.1.0",
      info: {
        title: "Auth API",
        version: "1.0.0",
        description: "Auth API Information using Nodejs and Swagger UI \n Build with ♥ by Milind"
      },
      consumes: ['application/json'],
      servers: [
        {
          url: `http://localhost:${PORT}`,
          description: "Local Development Server"
        },
        // {
        //   url: `http://localhost:5000`,
        //   description: "Prod Server"
        // }
      ],
    },
    apis: ["./backend/routes/*.js"]
  }
  

const swaggerSpecs = swaggerJsdoc(swaggeroptions)

// swagger is available at http://localhost:${PORT}/api-docs
app.use("/api-docs", swaggerui.serve, swaggerui.setup(swaggerSpecs))

const __dirname = path.dirname(fileURLToPath(import.meta.url));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Routes
app.use('/api/auth', authRoutes)


// Wildcard route
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', '404.html'));
});



app.listen(PORT, () => {
    connectDB()
    console.log(`Server is running on port ${PORT}`);
})