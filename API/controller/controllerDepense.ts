import { DepenseService } from "../models/depense";

/**
 * @swagger
 * tags:
 *   name: Utilisateurs
 *   description: API pour la gestion des utilisateurs
 */

export class ControlerDepense {
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

  public static async getDepenses(req, res) {
    const categService = new DepenseService();
    const categs = await categService.getDepenses();
    res.send(categs);
  }

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

  public static async getDepense(req, res) {
    const categService = new DepenseService();
    let categ_id: string = req.params.identifiant;
    let categ = await categService.getDepense(categ_id);
    res.send(categ);
  }

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

  public static async createDepense(req, res) {
    const categService = new DepenseService();
    await categService.createDepense(req.body);
    res.status(201).send();
  }
}
