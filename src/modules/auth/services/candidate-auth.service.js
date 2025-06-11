import EmailAlreadyExistsError from "../../../shared/exceptions/EmailAlreadyExistsError.exception.js";
import InvalidCredentialsError from "../../../shared/exceptions/InvalidCredentialsError.exception.js";
import CandidateDAO from "../../candidate/dao/cadidate.dao.js";
import bcrypt from "bcryptjs";
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

class CandidateAuthService {

    static async register({fullName, email, password}) {
        const existingEmail = await CandidateDAO.findByEmail(email);
        if(existingEmail) throw new EmailAlreadyExistsError();

        const hashed = await bcrypt.hash(password, 10);
        const newCandidate = await CandidateDAO.create({
            fullName, 
            email, 
            password: hashed,
            role: 'candidate'
        });
        
        return {
            id: newCandidate._id,
            fullName: newCandidate.fullName,
            email: newCandidate.email, 
            role: newCandidate.role,
        };
    }

    static async login({email, password}) {
        const candidate = await CandidateDAO.findByEmail(email);

        if(!candidate) throw new InvalidCredentialsError();

        const isPassword = await bcrypt.compare(password, candidate.password);
        if(!isPassword) throw new InvalidCredentialsError();

        const payload = {
            email: candidate.email,
            role: candidate.role
        }

        const token = jwt.sign(payload, JWT_SECRET, {expiresIn: JWT_EXPIRES_IN});
        
        return {
            token
        }
    }
}

export default CandidateAuthService;