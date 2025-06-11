
import express from "express";
import CandidateAuthController from "../controllers/candidate-auth.controller.js";

const router = express.Router();

/**
 * @swagger
 * /tai-khoan/dang-ky:
 *   post:
 *     summary: Đăng ký tài khoản
 *     tags:
 *       - Tài khoản
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *               matKhau:
 *                 type: string
 *     responses:
 *       201:
 *         description: Tạo tài khoản thành công
 *       400:
 *         description: Dữ liệu không hợp lệ
 */
router.post('/register', CandidateAuthController.register);
router.post('/login', CandidateAuthController.login);

export default router;