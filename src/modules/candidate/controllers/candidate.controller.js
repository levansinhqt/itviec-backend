
import InvalidCredentialsError from '../../../shared/exceptions/InvalidCredentialsError.exception.js';
import CandidateService from '../services/candidate.service.js';
import { apiSuccess } from '../../../shared/helpers/apiResponse.helper.js';

class CandidateController {
    static async getProfile(req, res, next) {
       try {
            const email = req.user?.email;
            if(!email) throw new InvalidCredentialsError();

            const result = await CandidateService.getProfile(email);
            return apiSuccess(res, result, 'Ứng viên xem thông tin hồ sơ thành công', 200);
       } catch (error) {
            next(error);
       } 
    }

    static async suaHoSoTongQuan (req, res, next) {
        try {
            const email = req.email;
            const thongTinMoi = req.body;

            if(!email){
                return res.status(401).json({
                    status: 'error',
                    message: 'Bạn chưa đăng nhập. Vui lòng đăng nhập.'
                });
            }

            const thongTinCapNhat = await UngVienService.suaHoSoTongQuan(email, thongTinMoi);

            return res.status(200).json({
                status: 'success',
                data: thongTinCapNhat,
            });
        } catch (error) {
            next(error);
        }
    }

    static async xemDanhSachUngVien(req, res, next){
        try {
            const danhSachUngVien = await UngVienService.danhSachUngVien();
            res.status(200).json({
                status: 'success',
                data: danhSachUngVien,
            });
        } catch (error) {
            next(error);
        }
    }
}

export default CandidateController;