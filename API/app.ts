import { ControlerUser } from "./controller/controllerUser";
import { createClient } from "@supabase/supabase-js";

const express = require("express");
const bodyParser = require("body-parser");

const supabaseUrl = "https://cekdzyiddjifsrtnemsj.supabase.co";
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNla2R6eWlkZGppZnNydG5lbXNqIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODY2Nzg3NTQsImV4cCI6MjAwMjI1NDc1NH0.22vNGb4SoqnVpX3vLGzlnjt3CRQy3RxnSRbEzILnro8";
const supabase = createClient(supabaseUrl, supabaseKey);

/**
 * On créé une nouvelle "application" express
 */
const app = express();

/**
 * On dit à Express que l'on souhaite parser le body des requêtes en JSON
 *
 * @example app.post('/', (req) => req.body.prop)
 */

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(function (request, response, next) {
  response.header("Access-Control-Allow-Origin", request.headers.origin);
  response.header(
    "Access-Control-Allow-Headers",
    "Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With"
  );
  response.header(
    "Access-Control-Allow-Methods",
    "GET,HEAD,POST,PUT,DELETE,OPTIONS"
  );
  response.header("Access-Control-Allow-Credentials", "true");
  next();
});

// Default
app.get("/", (req, res) => res.send("🏠"));

// GET Utilisateur
app.get("/users", (req, res) => ControlerUser.getUsers(req, res));
app.get("/user/:identifiant", (req, res) => ControlerUser.getUser(req, res));

// POST User
app.post("/user/add", (req, res) => ControlerUser.createUser(req, res));

// DELETE

app.listen(3000, () => {
  "Serveur listening on port :3000";
});

async function main() {
  await supabase.auth.getUser();
  console.log("Connexion bdd ok");
}
main().catch((err) => console.log(err));

const swaggerJSDoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");

const swaggerDefinition = {
  openapi: "3.0.0",
  info: {
    title: "Express API for JSONPlaceholder",
    version: "1.0.0",
    description:
      "This is a REST API application made with Express. It retrieves data from JSONPlaceholder.",
  },
  servers: [
    { url: "http://localhost:3000/", description: "Development server" },
  ],
};

const options = {
  swaggerDefinition,
  // Paths to files containing OpenAPI definitions
  apis: ["./*.js", "./controller/*.js"],
};

const swaggerSpec = swaggerJSDoc(options);
app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
