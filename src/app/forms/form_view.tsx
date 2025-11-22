'use client'
import React, { FC, useEffect, useState } from "react";
import { useForm, useFieldArray, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
// import { CVSchema, CVFormData } from "./CVFormTypes";
import { PDFViewer, PDFDownloadLink } from "@react-pdf/renderer";
import { CVFormData, CVSchema } from "../constant/schema/formSchema";
import { Button, FormField, TextAreaField } from "../components/form_elements";
import { CircleX, Download, Eye } from "lucide-react";
import CV from "../cv_view";
import { sendGAEvent, sendGTMEvent } from "@next/third-parties/google";

// Button component for better UI

interface CVFormProps {
  onUpdate: (data: CVFormData) => void;
}

const CVForm: FC<CVFormProps> = ({ onUpdate }) => {
  const [showPreview, setShowPreview] = useState(false);
  const [formData, setFormData] = useState(null);

   const [isClient, setIsClient] = useState(false);

   useEffect(() => {
     setIsClient(true);
   }, []);

  // Set default values based on the CV data you provided

  const defaultValues = {
    personalInfo: {
      name: "Sarah Chen",
      email: "sarah.chen@techinnovate.com",
      phone: "+1 (415) 555-0123",
      location: "San Francisco, CA",
      github: "https://github.com/sarahchen-dev",
      linkedin: "https://www.linkedin.com/in/sarahchen-tech/",
    },
    summary:
      "Full-stack developer with 5+ years of experience in building scalable web applications. Specialized in React, Node.js, and cloud technologies. Passionate about creating efficient, user-friendly solutions and mentoring junior developers.",
    skills:
      "React, Node.js, TypeScript, AWS, Docker, Kubernetes, GraphQL, MongoDB, PostgreSQL, Jest, CI/CD, Git, Agile Methodologies, System Design, Microservices Architecture, REST APIs, WebSocket, Redis, Elasticsearch, Terraform",
    workExperience: [
      {
        title: "Senior Software Engineer",
        company: "TechInnovate Solutions",
        startDate: "2021",
        endDate: "present",
        keyNote: "Lead developer for enterprise-level application.",
        achievements: [
          "Architected and implemented a microservices-based platform that reduced system response time by 40%",
          "Led a team of 5 developers in migrating legacy systems to cloud infrastructure",
          "Implemented CI/CD pipelines that reduced deployment time by 60%",
        ],
      },
      {
        title: "Full Stack Developer",
        company: "Digital Dynamics",
        startDate: "2019",
        endDate: "2021",
        keyNote: "",
        achievements: [
          "Developed and maintained multiple React-based web applications serving over 100,000 users",
          "Optimized database queries resulting in 30% faster page load times",
          "Implemented automated testing increasing code coverage to 85%",
        ],
      },
    ],
    projects: [
      {
        title: "E-commerce Platform",
        link: "https://github.com/sarahchen-dev/ecommerce-platform",
        achievements: [
          "Built a full-stack e-commerce platform using React, Node.js, and MongoDB",
          "Implemented real-time inventory management and payment processing",
          "Integrated with multiple third-party APIs for shipping and payment processing",
        ],
      },
    ],
    education: [
      {
        degree: "Master of Computer Science",
        institution: "Stanford University",
        startDate: "2017",
        endDate: "2019",
        achievements: [
          "Specialized in Distributed Systems and Cloud Computing",
          "Published research paper on scalable microservices architecture",
          "Graduated with distinction",
        ],
      },
      {
        degree: "Bachelor of Science in Computer Engineering",
        institution: "University of California, Berkeley",
        startDate: "2013",
        endDate: "2017",
        achievements: [],
      },
    ],
  };

  const {
    register,
    control,
    handleSubmit,
    setValue,
    getValues,
    formState: { errors },
  } = useForm<CVFormData>({
    resolver: zodResolver(CVSchema),
    defaultValues,
    mode: "onChange",
  });

  // Initialize form with default values
  // React.useEffect(() => {
  //   Object.entries(defaultValues).forEach(([key, value]) => {
  //     setValue(key as any, value);
  //   });
  // }, [setValue]);

  // Work Experience field array
  const {
    fields: workFields,
    append: appendWork,
    remove: removeWork,
  } = useFieldArray({
    control,
    name: "workExperience",
  });

  // Project field array
  const {
    fields: projectFields,
    append: appendProject,
    remove: removeProject,
  } = useFieldArray({
    control,
    name: "projects",
  });

  // Education field array
  const {
    fields: educationFields,
    append: appendEducation,
    remove: removeEducation,
  } = useFieldArray({
    control,
    name: "education",
  });

  //handle add remove work experience achivements

  // Achievement field arrays (nested)
  const CreateAchievementFieldArray = (parentPath: string, index: number) => {
    return useFieldArray({
      control,
      name: `${parentPath}.${index}.achievements` as any,
    });
  };

  const onSubmit = (data: CVFormData) => {
    console.log("Form data:", data);
    onUpdate(data);
    // setFormData(data);
    // setShowPreview(true);
  };

  const handlePreview = ()=>{
    handleSubmit(onSubmit);
    sendGAEvent({ 
      event: 'preview_clicked',      // The name that shows up in GA4
      event_category: 'engagement',  // Optional: helps categorize reports
      event_label: 'CV_preview'  // Optional: specific button identifier
    });
  }

  return (
    <div className="w-full flex-1 overflow-y-auto text-black max-h-full p-4 bg-gray-600">
      {/* bg-[#282828] */}
      <h1 className="text-xl font-bold mb-4 mt-2 text-white">Create Your CV</h1>
      <form className="space-y-8">
        {/* Personal Information */}
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h2 className="text-xl font-semibold mb-4">Personal Information</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <FormField
              label="Full Name"
              type="text"
              register={register("personalInfo.name")}
              error={errors.personalInfo?.name}
            />

            <FormField
              label="Email"
              type="email"
              register={register("personalInfo.email")}
              error={errors.personalInfo?.email}
            />
            <FormField
              label="Phone"
              type="text"
              register={register("personalInfo.phone")}
              error={errors.personalInfo?.phone}
            />
            <FormField
              label="Location"
              type="text"
              register={register("personalInfo.location")}
              error={errors.personalInfo?.location}
            />
            <FormField
              label="GitHub"
              type="url"
              register={register("personalInfo.github")}
              error={errors.personalInfo?.github}
            />
            <FormField
              label="LinkedIn"
              type="url"
              register={register("personalInfo.linkedin")}
              error={errors.personalInfo?.linkedin}
            />
          </div>
        </div>

        {/* Summary */}
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h2 className="text-xl font-semibold mb-4">Summary</h2>
          <TextAreaField
            label="Professional Summary"
            register={register("summary")}
            error={errors.summary}
          />
        </div>

        {/* Skills */}
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h2 className="text-xl font-semibold mb-4">Skills</h2>
          <TextAreaField
            label="Skills (comma separated)"
            register={register("skills")}
            error={errors.skills}
          />
        </div>

        {/* Work Experience */}
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h2 className="text-xl font-semibold mb-4">Work Experience</h2>

          {workFields.map((field, workIndex) => {
            // const achievementsArray = createAchievementFieldArray(
            //   "workExperience",
            //   index
            // );

            return (
              <div
                key={field.id}
                className="mb-8 p-4 border border-gray-200 rounded">
                <div className="flex justify-between mb-4">
                  <h3 className="text-lg font-medium">
                    Experience #{workIndex + 1}
                  </h3>
                  <button
                    type="button"
                    onClick={() => removeWork(workIndex)}
                    className="text-red-500 hover:text-red-700">
                    Remove
                  </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <FormField
                    label="Job Title"
                    register={register(`workExperience.${workIndex}.title`)}
                    error={errors.workExperience?.[workIndex]?.title}
                  />
                  <FormField
                    label="Company"
                    register={register(`workExperience.${workIndex}.company`)}
                    error={errors.workExperience?.[workIndex]?.company}
                  />
                  <FormField
                    label="Start Date"
                    register={register(`workExperience.${workIndex}.startDate`)}
                    error={errors.workExperience?.[workIndex]?.startDate}
                  />
                  <FormField
                    label="End Date (or 'present')"
                    register={register(`workExperience.${workIndex}.endDate`)}
                    error={errors.workExperience?.[workIndex]?.endDate}
                  />
                </div>

                <TextAreaField
                  label="Key Note"
                  register={register(`workExperience.${workIndex}.keyNote`)}
                  placeholder="Optional: Highlight anything special"
                  error={errors.workExperience?.[workIndex]?.keyNote}
                  rows={1}
                />

                <div className="mt-4">
                  <h4 className="font-medium mb-2">
                    Achievements/Responsibilities
                  </h4>

                  {field?.achievements?.map((fieldItem, achiveIndex) => (
                    <div key={achiveIndex} className="flex items-center mb-2">
                      <TextAreaField
                        rows={1}
                        className="w-full px-3 py-2 border border-gray-300 rounded"
                        value={fieldItem}
                        register={register(
                          `workExperience.${workIndex}.achievements.${achiveIndex}`
                        )}
                      />
                      <button
                        type="button"
                        onClick={() => {
                          const newVal = getValues("workExperience").map(
                            (item, i) => {
                              if (i == workIndex) {
                                const newI = {
                                  ...item,
                                  achievements: item?.achievements?.filter(
                                    (val, i) => i !== achiveIndex
                                  ),
                                };
                                return newI;
                              }
                              return item;
                            }
                          );

                          setValue("workExperience", newVal);

                          // achievementsArray.remove(index);
                        }}
                        className="ml-2 text-red-300 hover:text-red-500">
                        <CircleX size={18} />
                      </button>
                    </div>
                  ))}

                  {/* {achievementsArray.fields.map(
                    (achievementField, achievementIndex) => (
                      <div
                        key={achievementField.id}
                        className="flex items-start mb-2">
                        <input
                          type="text"
                          className="w-full px-3 py-2 border border-gray-300 rounded"
                          {...register(
                            `workExperience.${index}.achievements.${achievementIndex}`
                          )}
                        />
                        <button
                          type="button"
                          onClick={() =>
                            achievementsArray.remove(achievementIndex)
                          }
                          className="ml-2 text-red-300 hover:text-red-500">
                          <CircleX size={18} />
                        </button>
                      </div>
                    )
                  )} */}

                  <button
                    type="button"
                    onClick={() => {
                      const newVal = getValues("workExperience").map(
                        (item, i) => {
                          if (i == workIndex) {
                            const newI = {
                              ...item,
                              achievements: [...(item?.achievements || []), ""],
                            };
                            return newI;
                          }
                          return item;
                        }
                      );

                      console.log("newVal==>", newVal);

                      setValue("workExperience", newVal);
                    }}
                    // onClick={() => {}}
                    className="mt-2 text-blue-500 hover:text-blue-700">
                    + Add Achievement
                  </button>
                </div>
              </div>
            );
          })}

          <div className="mt-4">
            <Button
              type="button"
              onClick={() =>
                appendWork({
                  title: "",
                  company: "",
                  startDate: "",
                  endDate: "",
                  keyNote: "",
                  achievements: [],
                })
              }>
              + Add Work Experience
            </Button>
          </div>
        </div>

        {/* Projects */}
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h2 className="text-xl font-semibold mb-4">Projects</h2>

          {projectFields.map((field, index) => {
            const achievementsArray = CreateAchievementFieldArray(
              "projects",
              index
            );

            return (
              <div
                key={field.id}
                className="mb-8 p-4 border border-gray-200 rounded">
                <div className="flex justify-between mb-4">
                  <h3 className="text-lg font-medium">Project #{index + 1}</h3>
                  <button
                    type="button"
                    onClick={() => removeProject(index)}
                    className="text-red-500 hover:text-red-700">
                    Remove
                  </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <FormField
                    label="Project Title"
                    register={register(`projects.${index}.title`)}
                    error={errors.projects?.[index]?.title}
                  />
                  <FormField
                    label="Link (optional)"
                    register={register(`projects.${index}.link`)}
                    error={errors.projects?.[index]?.link}
                  />
                </div>

                <div className="mt-4">
                  <h4 className="font-medium mb-2">Project Details</h4>

                  {achievementsArray.fields.map(
                    (achievementField, achievementIndex) => (
                      <div
                        key={achievementField.id}
                        className="flex items-center mb-2">
                        <input
                          type="text"
                          className="w-full px-3 py-2 border border-gray-300 rounded"
                          {...register(
                            `projects.${index}.achievements.${achievementIndex}`
                          )}
                        />
                        <button
                          type="button"
                          onClick={() =>
                            achievementsArray.remove(achievementIndex)
                          }
                          className="ml-2 text-red-300 hover:text-red-500">
                          <CircleX size={18} />
                        </button>
                      </div>
                    )
                  )}

                  <button
                    type="button"
                    onClick={() => achievementsArray.append("")}
                    className="mt-2 text-blue-500 hover:text-blue-700">
                    + Add Detail
                  </button>
                </div>
              </div>
            );
          })}

          <div className="mt-4">
            <Button
              type="button"
              onClick={() =>
                appendProject({
                  title: "",
                  link: "",
                  achievements: [],
                })
              }>
              + Add Project
            </Button>
          </div>
        </div>

        {/* Education */}
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h2 className="text-xl font-semibold mb-4">Education</h2>

          {educationFields.map((field, index) => {
            const achievementsArray = CreateAchievementFieldArray(
              "education",
              index
            );

            return (
              <div
                key={field.id}
                className="mb-8 p-4 border border-gray-200 rounded">
                <div className="flex justify-between mb-4">
                  <h3 className="text-lg font-medium">
                    Education #{index + 1}
                  </h3>
                  <button
                    type="button"
                    onClick={() => removeEducation(index)}
                    className="text-red-500 hover:text-red-700">
                    Remove
                  </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <FormField
                    label="Degree/Certificate"
                    register={register(`education.${index}.degree`)}
                    error={errors.education?.[index]?.degree}
                  />
                  <FormField
                    label="Institution"
                    register={register(`education.${index}.institution`)}
                    error={errors.education?.[index]?.institution}
                  />
                  <FormField
                    label="Start Date"
                    register={register(`education.${index}.startDate`)}
                    error={errors.education?.[index]?.startDate}
                  />
                  <FormField
                    label="End Date (or 'present')"
                    register={register(`education.${index}.endDate`)}
                    error={errors.education?.[index]?.endDate}
                  />
                </div>

                <div className="mt-4">
                  <h4 className="font-medium mb-2">Achievements/Courses</h4>

                  {achievementsArray.fields.map(
                    (achievementField, achievementIndex) => (
                      <div
                        key={achievementField.id}
                        className="flex items-center mb-2">
                        <input
                          type="text"
                          className="w-full px-3 py-2 border border-gray-300 rounded"
                          {...register(
                            `education.${index}.achievements.${achievementIndex}`
                          )}
                        />
                        <button
                          type="button"
                          onClick={() =>
                            achievementsArray.remove(achievementIndex)
                          }
                          className="ml-2 text-red-300 hover:text-red-500">
                          <CircleX size={18} />
                        </button>
                      </div>
                    )
                  )}

                  <button
                    type="button"
                    onClick={() => achievementsArray.append("")}
                    className="mt-2 text-blue-500 hover:text-blue-700">
                    + Add Achievement
                  </button>
                </div>
              </div>
            );
          })}

          <div className="mt-4">
            <Button
              type="button"
              onClick={() =>
                appendEducation({
                  degree: "",
                  institution: "",
                  startDate: "",
                  endDate: "",
                  achievements: [],
                })
              }>
              + Add Education
            </Button>
          </div>
        </div>

        {/* Submit Button */}
        <div className="flex justify-end items-center bg-white gap-2 p-2 rounded-lg">
          <Button className="lg:px-8 flex items-center" type="button" onClick={handlePreview}>
            <Eye />
            <span className="hidden lg:inline-block lg:ms-2">Preview</span>
          </Button>

          { isClient &&  <PDFDownloadLink
            className="bg-teal-600 rounded-lg text-white lg:px-6 py-2.5 text-center flex-1"
            document={<CV data={getValues()} />}
            fileName="NodeCV.pdf">
            {({ blob, url, loading, error }) =>
              loading ? "Loading document..." : <div className="flex justify-center items-center">
                <Download />
                <span className="hidden lg:inline-block lg:ms-2">Download</span>
              </div>
            }
          </PDFDownloadLink>}

          <a href="https://www.buymeacoffee.com/yathavancow" target="_blank">
          <img src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png" alt="Buy Me A Coffee" className="w-auto h-[44px] min-w-[157px]" />
          </a>
          
        </div>
      </form>
    </div>
  );
};

export default CVForm;
