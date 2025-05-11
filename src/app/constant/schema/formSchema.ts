import { z } from "zod";


// Define the schema for education entries
export const EducationSchema = z.object({
  degree: z.string().min(1, "Degree is required"),
  institution: z.string().min(1, "Institution is required"),
  startDate: z.string().min(1, "Start date is required"),
  endDate: z.string().optional(),
  achievements: z.array(z.string()).optional(),
});

// Define the schema for work experience entries
export const WorkExperienceSchema = z.object({
  title: z.string().min(1, "Job title is required"),
  company: z.string().min(1, "Company is required"),
  startDate: z.string().min(1, "Start date is required"),
  endDate: z.string().optional(),
  keyNote: z.string().optional(),
  achievements: z.array(z.string()).optional(),
});

// Define the schema for project entries
export const ProjectSchema = z.object({
  title: z.string().min(1, "Project title is required"),
  link: z.string().url().optional(),
  achievements: z.array(z.string()).optional(),
});

// Define the schema for the full CV
export const CVSchema = z.object({
  personalInfo: z.object({
    name: z.string().min(1, "Name is required"),
    email: z.string().email("Invalid email address"),
    phone: z.string().min(1, "Phone number is required"),
    location: z.string().min(1, "Location is required"),
    github: z.string().url("GitHub link must be a valid URL").optional(),
    linkedin: z.string().url("LinkedIn link must be a valid URL").optional(),
  }),
  summary: z.string().optional(),
  skills: z.string().min(1, "Skills are required"),
  workExperience: z.array(WorkExperienceSchema),
  projects: z.array(ProjectSchema),
  education: z.array(EducationSchema),
});

// Export type based on the schema
export type CVFormData = z.infer<typeof CVSchema>;
export type WorkExperienceData = z.infer<typeof WorkExperienceSchema>;
export type EducationData = z.infer<typeof EducationSchema>;
export type ProjectData = z.infer<typeof ProjectSchema>;
