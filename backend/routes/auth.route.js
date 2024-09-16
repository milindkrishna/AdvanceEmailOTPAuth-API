import express from "express";
import { login, signup, logout, verifyemail, forgotpassword, resetpassword, checkAuth } from "../controller/auth.controller.js";
import { verifyToken } from "../middleware/verifyToken.js";
const router = express.Router();

router.route('/check-auth').get(verifyToken, checkAuth)
router.route('/login').post(login)
router.route('/register').post(signup)
router.route('/logout').post(logout)
router.route('/verify-email').post(verifyemail)
router.route('/forgot-password').post(forgotpassword)
router.route('/reset-password/:token').post(resetpassword)
export default router