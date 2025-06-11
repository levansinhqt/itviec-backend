import CandidateDAO from "./candidate.dao.js";

class CandidateService {
    static async getProfile(email){
        return await CandidateDAO.findByEmail(email);
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