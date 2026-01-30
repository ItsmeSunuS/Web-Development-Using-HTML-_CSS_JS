import bcrypt from 'bcryptjs'
import {
  createUser,
  getAllUsers,
  getUserById,
  updateUserById,
  deleteUserById
} from '../services/user.service.js'
import { supabase } from '../config/supabase.js'

export const registerUser = async (req, res) => {
  const { name, email, password, age, role } = req.body

  const hashedPassword = await bcrypt.hash(password, 10)

  const { data, error } = await createUser({
    name,
    email,
    password: hashedPassword,
    age,
    role
  })

  if (error) {
    if (error.code === '23505') {
      return res.status(409).json({ error: 'Email already exists' })
    }
    return res.status(500).json({ error: error.message })
  }

  res.status(201).json(data[0])
}

export const fetchUsers = async (req, res) => {
  const { data } = await getAllUsers()
  res.json(data)
}

export const fetchUserById = async (req, res) => {
  const { id } = req.params

  const { data, error } = await getUserById(id)

  if (error) {
    return res.status(404).json({ error: 'User not found' })
  }

  res.json(data)
}

export const updateUser = async (req, res) => {
  const { id } = req.params
  const updates = req.body

  if (updates.password) {
    updates.password = await bcrypt.hash(updates.password, 10)
  }

  const { data } = await updateUserById(id, updates)

  if (!data.length) {
    return res.status(404).json({ error: 'User not found' })
  }

  res.json(data[0])
}

export const deleteUser = async (req, res) => {
  const { id } = req.params

  const { error } = await deleteUserById(id)

  if (error) {
    return res.status(404).json({ error: 'User not found' })
  }

  res.json({ message: 'User deleted successfully' })
}
