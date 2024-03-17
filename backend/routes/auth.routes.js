import express from 'express'
import { signup, loginUser, logoutUser } from '../controller/auth.controller.js'
const router = express.Router()

router.post('/signup', signup)
router.post('/login', loginUser)
router.post('/logout', logoutUser)

export default router;