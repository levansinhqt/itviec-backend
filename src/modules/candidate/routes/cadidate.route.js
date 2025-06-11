import express from 'express';
import authenticateToken from '../../../shared/middlewares/auth.middleware.js';
import UngVienController from '../controllers/candidate.controller.js';
import { validateCapNhat } from '../../../shared/middlewares/validate.middleware.js';

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
router.get('/ho-so-cv', authenticateToken, UngVienController.xemHoSoTongQuan);
router.put('/ho-so-cv', authenticateToken, validateCapNhat, UngVienController.suaHoSoTongQuan);

//Các endpoint của quản trị viên nhằm quản lý người dùng
router.get('/', UngVienController.xemDanhSachUngVien);

export default router;