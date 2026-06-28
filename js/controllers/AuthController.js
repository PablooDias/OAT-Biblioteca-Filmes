import { supabaseClient } from "../config/supabase.js";

export class AuthController {
    static async login(email, password) {
        const { error } = await supabaseClient.auth.signInWithPassword({
            email,
            password
        });

        if (error) throw error;
    }

    static async logout() {
        await supabaseClient.auth.signOut();
        window.location.hash = "#/admin";
    }

    static async getUser() {
        const { data } = await supabaseClient.auth.getUser();

        return data.user;
    }
}