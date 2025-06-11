import express from 'express';
import authenticateToken from '../../../shared/middlewares/authenticate.middleware.js';
import CandidateController from '../controllers/candidate.controller.js';
import checkRole from '../../../shared/middlewares/checkRole.middleware.js';

const router = express.Router();

/**
 * @swagger
 * /api/v1/ung-vien/ho-so-cv:
 *   get:
 *     summary: Xem hồ sơ tổng quan của ứng viên
 *     tags:
 *       - Ứng viên
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Thành công
 *       401:
 *         description: Chưa xác thực
 */

//Các endpoint_public

//Các endpoint của người dùng
router.get('/profile', authenticateToken, checkRole('candidate'), CandidateController.getProfile);

//Các endpoint của quản trị viên nhằm quản lý người dùng


export default router;