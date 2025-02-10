import mongoose, { Schema } from "mongoose";
import { TBlog, TBlogModel } from "./blog.interface";

const blogSchema: Schema = new Schema<TBlog>(
  {
    title: { type: String, required: true },
    image: { type: String, required: true },
    description: { type: String, required: true },
    content: { type: String, required: true },
    author: {
      type: Schema.Types.ObjectId,
      ref: "User",
      default: null,
    },
    isPublished: { type: Boolean, default: true },
  },
  {
    timestamps: true,
  }
);

blogSchema.statics.isBlogExists = async function (id: string) {
  const blog = await Blog.findById(id);
  return blog;
};

const Blog = mongoose.model<TBlog, TBlogModel>("Blog", blogSchema);

export default Blog;
