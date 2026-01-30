import { supabase } from '../config/supabase.js'

export const createUser = async (user) => {
  return await supabase.from('users').insert([user]).select()
}

export const getAllUsers = async () => {
  return await supabase.from('users').select('id, name, email, age, role, created_at')
}

export const getUserById = async (id) => {
  return await supabase
    .from('users')
    .select('id, name, email, age, role, created_at')
    .eq('id', id)
    .single()
}

export const updateUserById = async (id, updates) => {
  return await supabase
    .from('users')
    .update(updates)
    .eq('id', id)
    .select()
}

export const deleteUserById = async (id) => {
  return await supabase.from('users').delete().eq('id', id)
}
