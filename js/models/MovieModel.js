import { supabaseClient } from "../config/supabase.js";

export class MovieModel {
    static async getAll() {
        const { data, error } = await supabaseClient
            .from("movies")
            .select("*")
            .order("created_at", { ascending: false });

        if (error) throw error;

        return data;
    }

    static async search(term) {
        const { data, error } = await supabaseClient
            .from("movies")
            .select("*")
            .ilike("title", `%${term}%`)
            .order("created_at", { ascending: false });

        if (error) throw error;

        return data;
    }

    static async create(movie) {
        const { error } = await supabaseClient
            .from("movies")
            .insert([movie]);

        if (error) throw error;
    }

    static async update(id, movie) {
        const { error } = await supabaseClient
            .from("movies")
            .update(movie)
            .eq("id", id);

        if (error) throw error;
    }

    static async delete(id) {
        const { error } = await supabaseClient
            .from("movies")
            .delete()
            .eq("id", id);

        if (error) throw error;
    }
}