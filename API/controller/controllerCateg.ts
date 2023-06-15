import { CategService } from "../models/categ";

/**
 * @swagger
 * tags:
 *   name: Utilisateurs
 *   description: API pour la gestion des utilisateurs
 */

export class ControlerCateg {
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

  public static async getCategs(req, res) {
    const categService = new CategService();
    const categs = await categService.getCategs();
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

  public static async getCateg(req, res) {
    const categService = new CategService();
    let categ_id: string = req.params.identifiant;
    let categ = await categService.getCateg(categ_id);
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

  public static async createCateg(req, res) {
    const categService = new CategService();
    await categService.createCateg(req.body);
    res.status(201).send();
  }
}
