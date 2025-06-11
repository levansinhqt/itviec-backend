import Candidate from "../models/cadidate.model.js";

class CandidateDAO {
    static async create(data){
        const candidate = new Candidate(data);
        return await candidate.save();
    }

    static async getAll(){
        return await Candidate.find();
    }

    static async findByEmail(email){
        return await Candidate.findOne({email});
    }

    static async updateByEmail(email, newData) {
        return await Candidate.findOneAndUpdate (
            { email },
            { $set: newData },
            { new: true }
        );
    }
}

export default CandidateDAO;