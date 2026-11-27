// This file opens the connection to your Supabase database.
import { createClient } from '@supabase/supabase-js'

// Read the keys from your .env.local file.
// The '!' at the end tells TypeScript: "Trust me, these keys exist."
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

// Create and export the connection so other files can use it.
export const supabase = createClient(supabaseUrl, supabaseAnonKey)