import NotFoundError from "../../../shared/exceptions/NotFoundError.exception.js";
import CandidateDAO from "../dao/cadidate.dao.js";

class CandidateService {
    static async getProfile(email){
        const profile = CandidateDAO.findByEmail(email);
        if(!profile) throw new NotFoundError();

        return profile;
    }

    static async updateProfile(email, newProfile){
        const candidate = await CandidateDAO.findByEmail(email);
        if (!candidate){
            throw new EmailNotFoundError();
        }

        //Gán thông tin cập nhật vào document
        Object.assign(candidate, newProfile);

        return await CandidateDAO.save();
    }
}

export default CandidateService;