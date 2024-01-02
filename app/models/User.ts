import mongoose, { Document, Schema } from 'mongoose';

interface IUser {
    username: string;
    email: string;
    password: string;
}

interface IUserDocument extends IUser, Document {
}

const UserSchema = new Schema<IUser>({
    username: {
        type: String,
        required: true,
        unique: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
}, { timestamps: true });

const UserModel = mongoose.models.User as mongoose.Model<IUserDocument> || mongoose.model<IUserDocument>('User', UserSchema);

export default UserModel;
