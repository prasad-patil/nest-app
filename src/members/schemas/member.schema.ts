import * as mongoose from 'mongoose';

export const MemberSchema = new mongoose.Schema({
    name: String,
    type: String,
    flatNo: Number,
    nativePlace: String,
});
