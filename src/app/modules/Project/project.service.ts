import { TProject } from "./project.interface";
import { Project } from "./project.model";

const createProject = async (payload: TProject) => {
  const result = await Project.create(payload);
  return result;
};

const getAllProjects = async () => {
  const result = await Project.find().sort({ createdAt: -1 });
  return result;
};

const getAProject = async (id: string) => {
  const result = await Project.findById(id);
  return result;
};

const updateProject = async (payload: Partial<TProject>, _id: string) => {
  const result = await Project.findByIdAndUpdate(_id, payload, { new: true });
  return result;
};

const getFeaturedProjects = async () => {
  const result = await Project.find({ isFeatured: true })
    .sort({ createdAt: -1 })
    .limit(3);
  return result;
};

export const ProjectServices = {
  createProject,
  getAllProjects,
  getAProject,
  updateProject,
  getFeaturedProjects,
};
