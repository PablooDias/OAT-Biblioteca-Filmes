const SUPABASE_URL = "https://nrgebppswbwtpfxdjnge.supabase.co";
const SUPABASE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5yZ2VicHBzd2J3dHBmeGRqbmdlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODI1OTA3NzAsImV4cCI6MjA5ODE2Njc3MH0.MgWDDm3oDjbsZqk5yBnW5ikows5lelRGgcYWPzNxcQ0";

export const supabaseClient = supabase.createClient(
    SUPABASE_URL,
    SUPABASE_KEY
);