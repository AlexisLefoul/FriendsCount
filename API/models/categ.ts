import {
  createClient,
  SupabaseClient,
  PostgrestSingleResponse,
  PostgrestResponse,
} from "@supabase/supabase-js";

interface Categ {
  id: string;
  nom: string;
}

const supabaseUrl = "https://cekdzyiddjifsrtnemsj.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNla2R6eWlkZGppZnNydG5lbXNqIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODY2Nzg3NTQsImV4cCI6MjAwMjI1NDc1NH0.22vNGb4SoqnVpX3vLGzlnjt3CRQy3RxnSRbEzILnro8";

export class CategService {
  private supabase: SupabaseClient;

  constructor() {
    this.supabase = createClient(supabaseUrl, supabaseKey);
  }

  public async getCategs(): Promise<Categ[] | null> {
    const { data, error }: PostgrestResponse<Categ> = await this.supabase
      .from("categ_depense")
      .select("*");

    if (error) {
      console.error(
        "Erreur lors de la récupération des catégories :",
        error.message
      );
      return null;
    }

    return data as Categ[];
  }

  public async getCateg(categId: string): Promise<Categ | null> {
    const { data, error }: PostgrestSingleResponse<Categ> = await this.supabase
      .from("categ_depense")
      .select("*")
      .eq("id", categId)
      .single();

    if (error) {
      console.error(
        "Erreur lors de la récupération de la catégorie :",
        error.message
      );
      return null;
    }

    return data as Categ;
  }

  public async createCateg(body: { nom: string }): Promise<Categ | null> {
    const { data, error } = await this.supabase
      .from("categ_depense")
      .insert([{ nom: body.nom }])
      .single();

    if (error) {
      console.error(
        "Erreur lors de la création de la catégorie :",
        error.message
      );
      return null;
    }

    return data as Categ;
  }

  public async updateCateg(id: string, nom: string): Promise<Categ | null> {
    const { data, error } = await this.supabase
      .from("categ_depense")
      .update({ nom })
      .eq("id", id)
      .single();

    if (error) {
      console.error(
        "Erreur lors de la mise à jour de la catégorie :",
        error.message
      );
      return null;
    }

    return data as Categ;
  }

  public async deleteCateg(id: string): Promise<boolean> {
    const { error } = await this.supabase
      .from("categ_depense")
      .delete()
      .eq("id", id);

    if (error) {
      console.error(
        "Erreur lors de la suppression de la catégorie :",
        error.message
      );
      return false;
    }

    return true;
  }
}
