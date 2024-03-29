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
exports.CategService = void 0;
var supabase_js_1 = require("@supabase/supabase-js");
var supabaseUrl = "https://cekdzyiddjifsrtnemsj.supabase.co";
var supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNla2R6eWlkZGppZnNydG5lbXNqIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODY2Nzg3NTQsImV4cCI6MjAwMjI1NDc1NH0.22vNGb4SoqnVpX3vLGzlnjt3CRQy3RxnSRbEzILnro8";
var CategService = /** @class */ (function () {
    function CategService() {
        this.supabase = (0, supabase_js_1.createClient)(supabaseUrl, supabaseKey);
    }
    CategService.prototype.getCategs = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a, data, error;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, this.supabase
                            .from("categ_depense")
                            .select("*")];
                    case 1:
                        _a = _b.sent(), data = _a.data, error = _a.error;
                        if (error) {
                            console.error("Erreur lors de la récupération des catégories :", error.message);
                            return [2 /*return*/, null];
                        }
                        return [2 /*return*/, data];
                }
            });
        });
    };
    CategService.prototype.getCateg = function (categId) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, data, error;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, this.supabase
                            .from("categ_depense")
                            .select("*")
                            .eq("id", categId)
                            .single()];
                    case 1:
                        _a = _b.sent(), data = _a.data, error = _a.error;
                        if (error) {
                            console.error("Erreur lors de la récupération de la catégorie :", error.message);
                            return [2 /*return*/, null];
                        }
                        return [2 /*return*/, data];
                }
            });
        });
    };
    CategService.prototype.createCateg = function (body) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, data, error;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, this.supabase
                            .from("categ_depense")
                            .insert([{ nom: body.nom }])
                            .single()];
                    case 1:
                        _a = _b.sent(), data = _a.data, error = _a.error;
                        if (error) {
                            console.error("Erreur lors de la création de la catégorie :", error.message);
                            return [2 /*return*/, null];
                        }
                        return [2 /*return*/, data];
                }
            });
        });
    };
    CategService.prototype.updateCateg = function (id, nom) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, data, error;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, this.supabase
                            .from("categ_depense")
                            .update({ nom: nom })
                            .eq("id", id)
                            .single()];
                    case 1:
                        _a = _b.sent(), data = _a.data, error = _a.error;
                        if (error) {
                            console.error("Erreur lors de la mise à jour de la catégorie :", error.message);
                            return [2 /*return*/, null];
                        }
                        return [2 /*return*/, data];
                }
            });
        });
    };
    CategService.prototype.deleteCateg = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var error;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.supabase
                            .from("categ_depense")
                            .delete()
                            .eq("id", id)];
                    case 1:
                        error = (_a.sent()).error;
                        if (error) {
                            console.error("Erreur lors de la suppression de la catégorie :", error.message);
                            return [2 /*return*/, false];
                        }
                        return [2 /*return*/, true];
                }
            });
        });
    };
    return CategService;
}());
exports.CategService = CategService;
//# sourceMappingURL=categ.js.map