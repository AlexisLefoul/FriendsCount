import { DepenseService } from "../models/depense";

/**
 * @swagger
 * tags:
 *   name: Dépenses
 *   description: API pour la gestion des dépenses
 */

export class ControlerDepense {
  public static async getDepenses(req, res) {
    const categService = new DepenseService();
    const categs = await categService.getDepenses();
    res.send(categs);
  }

  public static async getDepense(req, res) {
    const categService = new DepenseService();
    let categ_id: string = req.params.identifiant;
    let categ = await categService.getDepense(categ_id);
    res.send(categ);
  }

  public static async createDepense(req, res) {
    const categService = new DepenseService();
    await categService.createDepense(req.body);
    res.status(201).send();
  }
}
