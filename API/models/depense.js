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
exports.DepenseService = void 0;
var supabase_js_1 = require("@supabase/supabase-js");
var user_1 = require("../models/user");
var categ_1 = require("../models/categ");
var supabaseUrl = "https://cekdzyiddjifsrtnemsj.supabase.co";
var supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNla2R6eWlkZGppZnNydG5lbXNqIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODY2Nzg3NTQsImV4cCI6MjAwMjI1NDc1NH0.22vNGb4SoqnVpX3vLGzlnjt3CRQy3RxnSRbEzILnro8";
var DepenseService = /** @class */ (function () {
    function DepenseService() {
        this.supabase = (0, supabase_js_1.createClient)(supabaseUrl, supabaseKey);
    }
    DepenseService.prototype.getDepenses = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a, data, error, updatedDepenses;
            var _this = this;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, this.supabase
                            .from("depenses")
                            .select("*")];
                    case 1:
                        _a = _b.sent(), data = _a.data, error = _a.error;
                        if (error) {
                            console.error("Erreur lors de la récupération des dépenses :", error.message);
                            return [2 /*return*/, null];
                        }
                        return [4 /*yield*/, Promise.all(data.map(function (element) { return __awaiter(_this, void 0, void 0, function () {
                                var userService, categService, userResponse, categResponse, user, categ;
                                return __generator(this, function (_a) {
                                    switch (_a.label) {
                                        case 0:
                                            userService = new user_1.UserService();
                                            categService = new categ_1.CategService();
                                            return [4 /*yield*/, userService.getUser(element.user_id)];
                                        case 1:
                                            userResponse = _a.sent();
                                            return [4 /*yield*/, categService.getCateg(element.categ_depense_id)];
                                        case 2:
                                            categResponse = _a.sent();
                                            user = userResponse;
                                            categ = categResponse;
                                            return [2 /*return*/, {
                                                    id: element.id,
                                                    user: user,
                                                    categ: categ,
                                                    montant: element.montant,
                                                    date: element.date_creation,
                                                }];
                                    }
                                });
                            }); }))];
                    case 2:
                        updatedDepenses = _b.sent();
                        return [2 /*return*/, updatedDepenses];
                }
            });
        });
    };
    DepenseService.prototype.getDepense = function (depenseId) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, data, error;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, this.supabase
                            .from("depenses")
                            .select("*")
                            .eq("id", depenseId)
                            .single()];
                    case 1:
                        _a = _b.sent(), data = _a.data, error = _a.error;
                        if (error) {
                            console.error("Erreur lors de la récupération de la dépense :", error.message);
                            return [2 /*return*/, null];
                        }
                        return [2 /*return*/, data];
                }
            });
        });
    };
    DepenseService.prototype.createDepense = function (body) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, data, error;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, this.supabase
                            .from("depenses")
                            .insert([
                            {
                                montant: body.montant,
                                user_id: body.user,
                                categ_depense_id: body.categ,
                            },
                        ])
                            .single()];
                    case 1:
                        _a = _b.sent(), data = _a.data, error = _a.error;
                        if (error) {
                            console.error("Erreur lors de la création de la dépense :", error.message);
                            return [2 /*return*/, null];
                        }
                        return [2 /*return*/, data];
                }
            });
        });
    };
    DepenseService.prototype.updateDepense = function (body) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, data, error;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, this.supabase
                            .from("depenses")
                            .update({
                            montant: body.montant,
                            user_id: body.user,
                            categ_depense_id: body.categ,
                        })
                            .eq("id", body.depenseId)
                            .single()];
                    case 1:
                        _a = _b.sent(), data = _a.data, error = _a.error;
                        if (error) {
                            console.error("Erreur lors de la mise à jour de la dépense :", error.message);
                            return [2 /*return*/, null];
                        }
                        return [2 /*return*/, data];
                }
            });
        });
    };
    DepenseService.prototype.deleteDepense = function (depenseId) {
        return __awaiter(this, void 0, void 0, function () {
            var error;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.supabase
                            .from("depenses")
                            .delete()
                            .eq("id", depenseId)];
                    case 1:
                        error = (_a.sent()).error;
                        if (error) {
                            console.error("Erreur lors de la suppression de la dépense :", error.message);
                            return [2 /*return*/, false];
                        }
                        return [2 /*return*/, true];
                }
            });
        });
    };
    return DepenseService;
}());
exports.DepenseService = DepenseService;
//# sourceMappingURL=depense.js.map