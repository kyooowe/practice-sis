import express, { Express } from "express";
import cors from "cors";
import bodyParser from "body-parser";
import compression from "compression";
import helmet from "helmet";

// Constant
const App: Express = express()

// Libs
App.use(compression()); // Compresses response bodies to reduce payload size and improve performance.
App.use(helmet()); // Secures the app by setting various HTTP headers to protect against vulnerabilities.
App.use(cors()); // Enables Cross-Origin Resource Sharing to allow requests from other origins.
App.use(express.json()); // Parses incoming JSON payloads and makes them available in req.body.
App.use(bodyParser.urlencoded({ extended: true })); // Parses URL-encoded payloads with nested objects support.
App.use(bodyParser.json()); // Parses JSON payloads 

// For checking if the api is working
App.get("/", (req, res) => {
	res.status(200).send("Test GET..");
})

export default App;