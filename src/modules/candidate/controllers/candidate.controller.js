
import UngVienService from '../services/candidate.service.js';

class UngVienController {
    static async xemHoSoTongQuan(req, res, next) {
       try {
            const email = req.email;
            if(!email){
                res.status(401).json({
                    status: 'error',
                    message: 'Bạn chưa đăng nhập. Vui lòng đăng nhập để xem thông tin!',
                })
            }
            const thongTinUngVien = await UngVienService.xemHoSoTongQuan(email);
            res.status(200).json({
                status: 'success',
                data: thongTinUngVien,
            });
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

export default UngVienController;