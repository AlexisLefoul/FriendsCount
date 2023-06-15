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
exports.ControlerDepense = void 0;
var depense_1 = require("../models/depense");
/**
 * @swagger
 * tags:
 *   name: Utilisateurs
 *   description: API pour la gestion des utilisateurs
 */
var ControlerDepense = /** @class */ (function () {
    function ControlerDepense() {
    }
    /**
     * @swagger
     * /users:
     *    get:
     *      tags:
     *        - Utilisateurs
     *      summary: Retourne la liste des utilisateurs
     *      responses:
     *        200:
     *          description: Liste des utilisateurs.
     *          content:
     *            application/json:
     *              schema:
     *                type: array
     *                items:
     *                   type: object
     *                   properties:
     *                     id:
     *                       type: string
     *                       description: L'ID unique de l'utilisateur.
     *                       example: 0
     *                     nom:
     *                       type: string
     *                       description: Le nom de l'utilisateur.
     *                       example: Dupont
     *                     prenom:
     *                       type: string
     *                       description: Le prénom de l'utilisateur.
     *                       example: Jean
     */
    ControlerDepense.getDepenses = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var categService, categs;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        categService = new depense_1.DepenseService();
                        return [4 /*yield*/, categService.getDepenses()];
                    case 1:
                        categs = _a.sent();
                        res.send(categs);
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * @swagger
     * /user/{identifiant}:
     *    get:
     *      tags:
     *        - Utilisateurs
     *      summary: Retourne un utilisateur par son identifiant
     *      parameters:
     *        - in: path
     *          name: identifiant
     *          type: string
     *          description: L'identifiant de l'utilisateur.
     *          required: true
     *      responses:
     *        200:
     *          description: Un utilisateur correspondant à l'identifiant.
     *          content:
     *            application/json:
     *              schema:
     *                 type: object
     *                 properties:
     *                   id:
     *                     type: string
     *                     description: L'ID unique de l'utilisateur.
     *                     example: 0
     *                   nom:
     *                     type: string
     *                     description: Le nom de l'utilisateur.
     *                     example: Dupont
     *                   prenom:
     *                     type: string
     *                     description: Le prénom de l'utilisateur.
     *                     example: Jean
     */
    ControlerDepense.getDepense = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var categService, categ_id, categ;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        categService = new depense_1.DepenseService();
                        categ_id = req.params.identifiant;
                        return [4 /*yield*/, categService.getDepense(categ_id)];
                    case 1:
                        categ = _a.sent();
                        res.send(categ);
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * @swagger
     * /user/add:
     *    post:
     *      tags:
     *        - Utilisateurs
     *      summary: Ajoute un utilisateur
     *      requestBody:
     *        description: Les données de l'utilisateur à ajouter
     *        required: true
     *        content:
     *          application/json:
     *            schema:
     *              type: object
     *              properties:
     *                nom:
     *                  type: string
     *                  description: Le nom de l'utilisateur.
     *                  example: Dupont
     *                prenom:
     *                  type: string
     *                  description: Le prénom de l'utilisateur.
     *                  example: Jean
     *      responses:
     *        201:
     *          description: Utilisateur ajouté avec succès.
     */
    ControlerDepense.createDepense = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var categService;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        categService = new depense_1.DepenseService();
                        return [4 /*yield*/, categService.createDepense(req.body)];
                    case 1:
                        _a.sent();
                        res.status(201).send();
                        return [2 /*return*/];
                }
            });
        });
    };
    return ControlerDepense;
}());
exports.ControlerDepense = ControlerDepense;
//# sourceMappingURL=controllerDepense.js.map