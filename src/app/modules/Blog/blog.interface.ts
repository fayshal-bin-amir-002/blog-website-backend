import { Model, Types } from "mongoose";

export type TBlog = {
  title: string;
  image: string;
  description: string;
  content: string;
  author?: Types.ObjectId | null;
  isPublished?: boolean;
};

export interface TBlogModel extends Model<TBlog> {
  isBlogExists(id: string): Promise<TBlog>;
}
