
import { createClient } from '@supabase/supabase-js';

// These will be replaced by environment variables in production
// For now, we use empty placeholder values
const supabaseUrl = '';
const supabaseAnonKey = '';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export const saveRegistration = async (data: { 
  name: string; 
  phone: string; 
  company?: string;
}) => {
  try {
    const { error } = await supabase
      .from('registrations')
      .insert([
        { 
          name: data.name,
          phone: data.phone,
          company: data.company || null,
          created_at: new Date()
        }
      ]);
    
    if (error) {
      throw error;
    }
    
    return { success: true };
  } catch (error) {
    console.error('Error saving registration:', error);
    return { success: false, error };
  }
};
