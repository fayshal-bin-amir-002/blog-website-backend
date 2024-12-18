import mongoose, { Schema, Document, Types } from "mongoose";
import { TBlog } from "./blog.interface";
import { title } from "process";

const blogSchema: Schema = new Schema<TBlog>(
  {
    title: { type: String, required: true },
    content: { type: String, required: true },
    author: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    isPublished: { type: Boolean, default: true },
  },
  {
    timestamps: true,
  },
);

blogSchema.set("toJSON", {
  transform: (doc, ret) => {
    return {
      _id: ret._id,
      title: ret.title,
      content: ret.content,
      author: ret.author,
    };
  },
});

const Blog = mongoose.model<TBlog>("Blog", blogSchema);

export default Blog;
