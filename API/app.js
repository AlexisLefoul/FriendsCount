"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var controllerUser_1 = require("./controller/controllerUser");
var controllerCateg_1 = require("./controller/controllerCateg");
var controllerDepense_1 = require("./controller/controllerDepense");
var supabase_js_1 = require("@supabase/supabase-js");
var express = require("express");
var bodyParser = require("body-parser");
var supabaseUrl = "https://cekdzyiddjifsrtnemsj.supabase.co";
var supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNla2R6eWlkZGppZnNydG5lbXNqIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODY2Nzg3NTQsImV4cCI6MjAwMjI1NDc1NH0.22vNGb4SoqnVpX3vLGzlnjt3CRQy3RxnSRbEzILnro8";
var supabase = (0, supabase_js_1.createClient)(supabaseUrl, supabaseKey);
/**
 * On créé une nouvelle "application" express
 */
var app = express();
/**
 * On dit à Express que l'on souhaite parser le body des requêtes en JSON
 *
 * @example app.post('/', (req) => req.body.prop)
 */
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(function (request, response, next) {
    response.header("Access-Control-Allow-Origin", request.headers.origin);
    response.header("Access-Control-Allow-Headers", "Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");
    response.header("Access-Control-Allow-Methods", "GET,HEAD,POST,PUT,DELETE,OPTIONS");
    response.header("Access-Control-Allow-Credentials", "true");
    next();
});
// Default
app.get("/", function (req, res) { return res.send("🏠"); });
// GET Utilisateur
app.get("/users", function (req, res) { return controllerUser_1.ControlerUser.getUsers(req, res); });
app.get("/user/:identifiant", function (req, res) { return controllerUser_1.ControlerUser.getUser(req, res); });
// GET Catégorie de dépense
app.get("/categs", function (req, res) { return controllerCateg_1.ControlerCateg.getCategs(req, res); });
app.get("/categ/:identifiant", function (req, res) { return controllerCateg_1.ControlerCateg.getCateg(req, res); });
// GET Dépenses
app.get("/depenses", function (req, res) { return controllerDepense_1.ControlerDepense.getDepenses(req, res); });
app.get("/depense/:identifiant", function (req, res) { return controllerDepense_1.ControlerDepense.getDepense(req, res); });
// POST User
app.post("/user/add", function (req, res) { return controllerUser_1.ControlerUser.createUser(req, res); });
// POST Catégorie de dépense
app.post("/categ/add", function (req, res) { return controllerCateg_1.ControlerCateg.createCateg(req, res); });
// POST Dépense
app.post("/depense/add", function (req, res) { return controllerDepense_1.ControlerDepense.createDepense(req, res); });
// DELETE
app.delete("/user/:identifiant", function (req, res) { return controllerUser_1.ControlerUser.deleteUser(req, res); });
app.listen(4000, function () {
    "Serveur listening on port :4000";
});
function main() {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, supabase.auth.getUser()];
                case 1:
                    _a.sent();
                    console.log("Connexion bdd ok");
                    return [2 /*return*/];
            }
        });
    });
}
main().catch(function (err) { return console.log(err); });
var swaggerJSDoc = require("swagger-jsdoc");
var swaggerUi = require("swagger-ui-express");
var swaggerDefinition = {
    openapi: "3.0.0",
    info: {
        title: "Express API for JSONPlaceholder",
        version: "1.0.0",
        description: "This is a REST API application made with Express. It retrieves data from JSONPlaceholder.",
    },
    servers: [
        { url: "http://localhost:4000/", description: "Development server" },
    ],
};
var options = {
    swaggerDefinition: swaggerDefinition,
    // Paths to files containing OpenAPI definitions
    apis: ["./*.js", "./controller/*.js"],
};
var swaggerSpec = swaggerJSDoc(options);
app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
//# sourceMappingURL=app.js.map