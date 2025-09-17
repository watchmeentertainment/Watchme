import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://supabase.com/dashboard/project/nttgbgiivrzunulvojfu/settings/api-keys";
const supabaseAnonKey = "sb_publishable_J6pBo1trwO4GZt1bWuVuPA_xbGLjCxm";

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

