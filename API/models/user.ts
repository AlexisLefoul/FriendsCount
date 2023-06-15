import {
  createClient,
  SupabaseClient,
  PostgrestSingleResponse,
  PostgrestResponse,
} from "@supabase/supabase-js";

interface User {
  id: number;
  nom: string;
  prenom: string;
}

const supabaseUrl = "https://cekdzyiddjifsrtnemsj.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNla2R6eWlkZGppZnNydG5lbXNqIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODY2Nzg3NTQsImV4cCI6MjAwMjI1NDc1NH0.22vNGb4SoqnVpX3vLGzlnjt3CRQy3RxnSRbEzILnro8";

export class UserService {
  private supabase: SupabaseClient;

  constructor() {
    this.supabase = createClient(supabaseUrl, supabaseKey);
  }

  public async getUsers(): Promise<User[] | null> {
    const { data, error }: PostgrestResponse<User> = await this.supabase
      .from("users_app")
      .select("*");

    if (error) {
      console.error(
        "Erreur lors de la récupération des utilisateurs :",
        error.message
      );
      return null;
    }

    return data as User[];
  }

  public async getUser(userId: number): Promise<User | null> {
    const { data, error }: PostgrestSingleResponse<User> = await this.supabase
      .from("users_app")
      .select("*")
      .eq("id", userId)
      .single();

    if (error) {
      console.error(
        "Erreur lors de la récupération de l'utilisateur :",
        error.message
      );
      return null;
    }

    return data as User;
  }

  public async createUser(body: {
    nom: string;
    prenom: string;
  }): Promise<User | null> {
    const { data, error } = await this.supabase
      .from("users_app")
      .insert([{ nom: body.nom, prenom: body.prenom }])
      .single();

    if (error) {
      console.error(
        "Erreur lors de la création de l'utilisateur :",
        error.message
      );
      return null;
    }

    return data as User;
  }

  public async updateUser(
    id: number,
    nom: string,
    prenom: string
  ): Promise<User | null> {
    const { data, error } = await this.supabase
      .from("users_app")
      .update({ nom, prenom })
      .eq("id", id)
      .single();

    if (error) {
      console.error(
        "Erreur lors de la mise à jour de l'utilisateur :",
        error.message
      );
      return null;
    }

    return data as User;
  }

  public async deleteUser(id: number): Promise<boolean> {
    const { error } = await this.supabase
      .from("users_app")
      .delete()
      .eq("id", id);

    if (error) {
      console.error(
        "Erreur lors de la suppression de l'utilisateur :",
        error.message
      );
      return false;
    }

    return true;
  }
}
