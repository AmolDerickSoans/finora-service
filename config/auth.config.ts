export interface AuthConfig {
  supabaseUrl: string;
  supabaseKey: string;
  jwtSecret: string;
}

export const authConfig: AuthConfig = {
  supabaseUrl: process.env.SUPABASE_URL || '',
  supabaseKey: process.env.SUPABASE_KEY || '',
  jwtSecret: process.env.JWT_SECRET || 'your-secret-key'
}; 