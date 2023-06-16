import {
  createClient,
  SupabaseClient,
  PostgrestSingleResponse,
  PostgrestResponse,
} from "@supabase/supabase-js";
import { UserService } from "../models/user";
import { CategService } from "../models/categ";

interface Depense {
  date_creation: any;
  id: string;
  montant: number;
  user_id: string;
  categ_depense_id: string;
}

interface DepenseForList {
  date: any;
  id: string;
  montant: number;
  user: any;
  categ: any;
}

const supabaseUrl = "https://cekdzyiddjifsrtnemsj.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNla2R6eWlkZGppZnNydG5lbXNqIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODY2Nzg3NTQsImV4cCI6MjAwMjI1NDc1NH0.22vNGb4SoqnVpX3vLGzlnjt3CRQy3RxnSRbEzILnro8";

export class DepenseService {
  private supabase: SupabaseClient;

  constructor() {
    this.supabase = createClient(supabaseUrl, supabaseKey);
  }

  public async getDepenses(): Promise<DepenseForList[] | null> {
    const { data, error }: PostgrestResponse<Depense> = await this.supabase
      .from("depenses")
      .select("*");

    if (error) {
      console.error(
        "Erreur lors de la récupération des dépenses :",
        error.message
      );
      return null;
    }

    const sortedDepenses = data.sort((a: Depense, b: Depense) => {
      const dateA = new Date(a.date_creation);
      const dateB = new Date(b.date_creation);
      return dateA.getTime() - dateB.getTime();
    });

    const updatedDepenses: DepenseForList[] = await Promise.all(
      sortedDepenses.map(async (element: Depense) => {
        const userService = new UserService();
        const categService = new CategService();
        const userResponse = await userService.getUser(element.user_id);
        const categResponse = await categService.getCateg(
          element.categ_depense_id
        );

        const user = userResponse;
        const categ = categResponse;
        const formattedDate = formatDate(element.date_creation);

        return {
          id: element.id,
          user,
          categ,
          montant: element.montant,
          date: formattedDate,
        };
      })
    );

    return updatedDepenses;
  }

  public async getDepense(depenseId: string): Promise<Depense | null> {
    const { data, error }: PostgrestSingleResponse<Depense> =
      await this.supabase
        .from("depenses")
        .select("*")
        .eq("id", depenseId)
        .single();

    if (error) {
      console.error(
        "Erreur lors de la récupération de la dépense :",
        error.message
      );
      return null;
    }

    return data as Depense;
  }

  public async createDepense(body: {
    montant: number;
    user: string;
    categ: string;
  }): Promise<Depense | null> {
    const { data, error } = await this.supabase
      .from("depenses")
      .insert([
        {
          montant: body.montant,
          user_id: body.user,
          categ_depense_id: body.categ,
        },
      ])
      .single();
    if (error) {
      console.error(
        "Erreur lors de la création de la dépense :",
        error.message
      );
      return null;
    }

    return data as Depense;
  }

  public async updateDepense(body: {
    depenseId: string;
    montant: number;
    user: string;
    categ: string;
  }): Promise<Depense | null> {
    const { data, error } = await this.supabase
      .from("depenses")
      .update({
        montant: body.montant,
        user_id: body.user,
        categ_depense_id: body.categ,
      })
      .eq("id", body.depenseId)
      .single();

    if (error) {
      console.error(
        "Erreur lors de la mise à jour de la dépense :",
        error.message
      );
      return null;
    }

    return data as Depense;
  }

  public async deleteDepense(depenseId: string): Promise<boolean> {
    const { error } = await this.supabase
      .from("depenses")
      .delete()
      .eq("id", depenseId);

    if (error) {
      console.error(
        "Erreur lors de la suppression de la dépense :",
        error.message
      );
      return false;
    }

    return true;
  }
}

function formatDate(dateString: string): string {
  const date = new Date(dateString);
  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const year = String(date.getFullYear());

  return `${day}/${month}/${year}`;
}
