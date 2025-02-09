import { model, Schema } from "mongoose";
import { TProject } from "./project.interface";

const projectSchema = new Schema<TProject>(
  {
    title: { type: String, required: true },
    image: { type: String, required: true },
    technologies: { type: [String], required: true },
    features: { type: [String], required: true },
    description: { type: String, required: true },
    isFeatured: { type: Boolean, required: true },
    live_link: { type: String, required: true },
    github_link: { type: String },
    github_link_frontEnd: { type: String },
    github_link_backEnd: { type: String },
  },
  {
    timestamps: true,
  }
);

export const Project = model<TProject>("Project", projectSchema);
