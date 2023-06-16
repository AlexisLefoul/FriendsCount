import { CategService } from "../models/categ";

/**
 * @swagger
 * tags:
 *   name: Catégories
 *   description: API pour la gestion des catégories
 */

export class ControlerCateg {
  public static async getCategs(req, res) {
    const categService = new CategService();
    const categs = await categService.getCategs();
    res.send(categs);
  }

  public static async getCateg(req, res) {
    const categService = new CategService();
    let categ_id: string = req.params.identifiant;
    let categ = await categService.getCateg(categ_id);
    res.send(categ);
  }

  public static async createCateg(req, res) {
    const categService = new CategService();
    await categService.createCateg(req.body);
    res.status(201).send();
  }
}
