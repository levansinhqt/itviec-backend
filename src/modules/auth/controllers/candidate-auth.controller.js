
import CandidateAuthService from "../services/candidate-auth.service.js";
import { apiSuccess } from "../../../shared/helpers/apiResponse.helper.js";

class CandidateAuthController {
    static async register(req, res, next) {
        try {
            const result = await CandidateAuthService.register(req.body);
            return apiSuccess(res, result, 'Đăng ký ứng viên thành công', 201);
        } catch (error) {
            next(error);
        }
    }

    static async login(req, res, next) {
        try {
            const result = await CandidateAuthService.login(req.body);
            return apiSuccess(res, result, 'Ứng viên đăng nhập thành công', 200);
        } catch (error) {
            next(error);
        }
    }
}

export default CandidateAuthController;