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
exports.ControlerUser = void 0;
var user_1 = require("../models/user");
/**
 * @swagger
 * tags:
 *   name: Utilisateurs
 *   description: API pour la gestion des utilisateurs
 */
var ControlerUser = /** @class */ (function () {
    function ControlerUser() {
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
    ControlerUser.getUsers = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var userService, users;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        userService = new user_1.UserService();
                        return [4 /*yield*/, userService.getUsers()];
                    case 1:
                        users = _a.sent();
                        res.send(users);
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
    ControlerUser.getUser = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var userService, user_id, user;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        userService = new user_1.UserService();
                        user_id = req.params.identifiant;
                        return [4 /*yield*/, userService.getUser(user_id)];
                    case 1:
                        user = _a.sent();
                        res.send(user);
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
    ControlerUser.createUser = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var userService;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        userService = new user_1.UserService();
                        return [4 /*yield*/, userService.createUser(req.body)];
                    case 1:
                        _a.sent();
                        res.status(201).send();
                        return [2 /*return*/];
                }
            });
        });
    };
    ControlerUser.deleteUser = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var userService, userId, user;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        userService = new user_1.UserService();
                        userId = req.params.identifiant;
                        return [4 /*yield*/, userService.deleteUser(userId)];
                    case 1:
                        user = _a.sent();
                        res.status(204);
                        res.send(user);
                        return [2 /*return*/];
                }
            });
        });
    };
    return ControlerUser;
}());
exports.ControlerUser = ControlerUser;
//# sourceMappingURL=controllerUser.js.map