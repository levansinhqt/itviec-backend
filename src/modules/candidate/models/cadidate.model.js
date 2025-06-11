import mongoose from "mongoose";
import Gender from "../../../shared/constants/gender.enum.js";
import Role from "../../../shared/constants/role.enum.js";

const candidateSchema = new mongoose.Schema({
    fullName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true, //Đảm bảo email là du nhất
        immutable: true, //Đảm bảo không được sửa 
    },
    password: {
        type: String,
        required: true,
    },
    phoneNumber: {
        type: String,
    },
    gender: {
        type: String,
        enum: Object.values(Gender),
        require: false,
    },
    address: {
        city: {
            type: String,
        },
        line: {type: String}
    },
    role: {
        type: String,
        enum: Object.values(Role),
        default: Role.CANDIDATE,
        require: true,
    },
});

// Định nghĩa phương thức toJSON để loại bỏ trường password
candidateSchema.methods.toJSON = function () {
    const candidate = this.toObject();
    delete candidate.password;
    return candidate;
};

const Candidate = mongoose.model('candidate', candidateSchema);

export default Candidate;