import express from 'express'
import {
  registerUser,
  fetchUsers,
  fetchUserById,
  updateUser,
  deleteUser
} from '../controllers/user.controller.js'
import { validateUser } from '../validations/user.validation.js'

const router = express.Router()

router.post('/users', validateUser, registerUser)
router.get('/users', fetchUsers)
router.get('/users/:id', fetchUserById)
router.put('/users/:id', updateUser)
router.delete('/users/:id', deleteUser)

export default router
