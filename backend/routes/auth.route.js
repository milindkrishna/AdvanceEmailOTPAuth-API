import express from "express";
import { login, signup, logout, verifyemail, forgotpassword, resetpassword, checkAuth } from "../controller/auth.controller.js";
import { verifyToken } from "../middleware/verifyToken.js";
const router = express.Router();


/**
 * @swagger
 * /api/auth/check-auth:
 *  get:
 *    summary: Check if user is authenticated
 *    tags: [Authorization]
 *    responses:
 *      200:
 *        description: User is authenticated
 */
router.route('/check-auth').get(verifyToken, checkAuth)

/**
 * @swagger
 * /api/auth/login:
 *  post:
 *    summary: Login user
 *    tags: [Login User]
 *    parameters:
 *      - in: body
 *        name: user
 *        description: Login request body
 *        schema:
 *          type: object
 *          required:
 *            - email
 *            - password
 *          properties:
 *            email:
 *              type: string
 *              description: User email
 *              example: johndoe@example.com
 *            password:
 *              type: string
 *              description: User password
 *              example: password123
 *    responses:
 *      200:
 *        description: User logged in
 */
router.route('/login').post(login)


/**
 * @swagger
 * /api/auth/register:
 *  post:
 *    summary: Register user
 *    tags: [Signup/Regsiter User]
 *    parameters:
 *      - in: body
 *        name: user
 *        description: User registration details
 *        schema:
 *          type: object
 *          required:
 *            - name
 *            - email
 *            - password
 *          properties:
 *            name:
 *              type: string
 *              description: User name
 *              example: John Doe
 *            email:
 *              type: string
 *              description: User email
 *              example: johndoe@example.com
 *            password:
 *              type: string
 *              description: User password
 *              example: password123

 *    responses:
 *      200:
 *        description: User registered
 */

router.route('/register').post(signup)

/**
 * @swagger
 * /api/auth/logout:
 *  post:
 *    summary: Logout user
 *    tags: [Logout User]
 *    responses:
 *      200:
 *        description: User logged out
 */
router.route('/logout').post(logout)


/**
 * @swagger
 * /api/auth/verify-email:
 *  post:
 *    summary: Verify email
 *    tags: [Verify User Email]
 *    parameters:
 *      - in: body
 *        name: user
 *        description: Verify email request body
 *        schema:
 *          type: object
 *          required:
 *            - code
 *          properties:
 *            code:
 *               type: string
 *               description: Verification otp
 *               example: abc123
 *    responses:
 *      200:
 *        description: Email verified
 */

router.route('/verify-email').post(verifyemail)

/**
 * @swagger
 * /api/auth/forgot-password:
 *  post:
 *    summary: Forgot password
 *    tags: [Forgot User Password]
 *    parameters:
 *      - in: body
 *        name: user
 *        description: Forgot password request body
 *        schema:
 *          type: object
 *          required:
 *            - email
 *          properties:
 *             email:
 *               type: string
 *               description: User email
 *               example: johndoe@example.com
 *    responses:
 *      200:
 *        description: Password reset
 */
router.route('/forgot-password').post(forgotpassword)

/**
 * @swagger
 * /api/auth/reset-password/{token}:
 *  post:
 *    summary: Reset password
 *    tags: [Reset User Password]
 *    parameters:
 *      - in: path
 *        name: token
 *        required: true
 *        description: Password reset token
 *      - in: body
 *        name: user
 *        description: Reset password request body
 *        schema:
 *           type: object
 *           required:
 *             - password
 *           properties:
 *             password:
 *               type: string
 *               description: New password
 *               example: password123
 *    responses:
 *      200:
 *        description: Password reset
 */
router.route('/reset-password/:token').post(resetpassword)


export default router