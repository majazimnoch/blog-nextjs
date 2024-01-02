import mongoose, { Document, Schema, Types } from 'mongoose';

// interface IBlog {
//     title: string;
//     desc: string;
//     imageUrl: string;
//     category: 'Nature' | 'Mountain' | 'Ocean' | 'Wildlife' | 'Forest';
//     authorId: Types.ObjectId;
//     likes: Types.ObjectId[];
// }

// interface IBlogDocument extends IBlog, Document {
//     // Additional methods or virtuals can be added here
// }

// const BlogSchema = new Schema<IBlog>({
//     title: {
//         type: String,
//         required: true,
//         minlength: 4,
//     },
//     desc: {
//         type: String,
//         required: true,
//         minlength: 6,
//     },
//     imageUrl: {
//         type: String,
//         required: true,
//     },
//     category: {
//         type: String,
//         required: true,
//         enum: ['Nature', 'Mountain', 'Ocean', 'Wildlife', 'Forest'],
//     },
//     authorId: {
//         type: Schema.Types.ObjectId,
//         ref: 'User',
//         required: true,
//     },
//     likes: {
//         type: [Schema.Types.ObjectId],
//         ref: 'User',
//         default: [],
//     },
// }, { timestamps: true });

// const BlogModel = mongoose.models.Blog || mongoose.model<IBlogDocument>('Blog', BlogSchema);

// export default BlogModel;
