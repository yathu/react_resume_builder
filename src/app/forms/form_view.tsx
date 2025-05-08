import React, { useState } from "react";
import { useForm, useFieldArray, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
// import { CVSchema, CVFormData } from "./CVFormTypes";
import { PDFViewer, PDFDownloadLink } from "@react-pdf/renderer";
import { CVFormData, CVSchema } from "../constant/schema/formSchema";
import { Button, FormField, TextAreaField } from "../components/form_elements";

// Button component for better UI

const CVForm = () => {
  const [showPreview, setShowPreview] = useState(false);
  const [formData, setFormData] = useState(null);

  // Set default values based on the CV data you provided
  const defaultValues = {
    personalInfo: {
      name: "Yathavan YOGARAJAH",
      email: "yathavancom@gmail.com",
      phone: "+33758353959",
      location: "Ivry-sur-Seine, France",
      github: "https://github.com/yathu",
      linkedin: "https://www.linkedin.com/in/yathavancom/",
    },
    summary:
      "Digital marketing professionals with the expertise in Front-End development. Demonstrated proficiency in SEO, WordPress, UX design, and content creation.",
    skills:
      "SEO, SEM, Google Analytics, Google Search Console, Google Keyword Planner, WordPress, Excel, Python, HTML, SCSS, CSS, JavaScript, Canva, Adobe Photoshop, UX Design, Content creation, Social media analysis, AdobeXD, Figma, Typescript, React JS, Adobe Premiere Pro, Final Cut Pro, Google Sheets, Webflow, Ahrefs, Yoast SEO, Rank Math, Asana, Trello, Notion, Clarity",
    workExperience: [
      {
        title: "Freelance - Lanka Property Web",
        company:
          "Sri Lanka's number one and most visited property and real estate website",
        startDate: "2018",
        endDate: "present",
        description:
          "Convert UI/UX design into HTML website, Mobile and integrate with backend, email template design",
        achievements: [],
      },
      {
        title: "Software Developer (Web & Mobile)",
        company: "",
        startDate: "2014.01",
        endDate: "2023.12",
        description: "",
        achievements: [
          "Translated Sketch and Figma designs into fully functional web applications and websites with SEO optimization.",
          "Frontend development using React with Typescript.",
          "Mobile App development (React Native, Flutter, Native Android)",
        ],
      },
    ],
    projects: [
      {
        title: "Flyers, Brochures, Posters and UX design",
        link: "https://www.behance.net/yathavan",
        achievements: [
          "WordPress blog website development and management, including implementation of GA4, Google Search Console, meta tags, and keyword research using Google Keyword Planner.",
          "Experienced in managing personal YouTube channels, utilizing Final Cut Pro, Adobe Premiere Pro, Adobe After Effects, and Canva for thumbnails.",
        ],
      },
    ],
    education: [
      {
        degree: "MSc in Strategic & Digital Marketing",
        institution: "Rennes School of Business",
        startDate: "Jan 2023",
        endDate: "present",
        achievements: [
          "Developing digital marketing strategies for campaigns involving email, social media, SEO/SEM, and display advertising.",
          "Analysed Google Analytics data and prepared reports on consumer insights.",
          "Designed promotional materials such as newsletters, posters, brochures, and flyers.",
          "Translated specific requirements into wireframes and transformed into the user experience in Figma.",
        ],
      },
      {
        degree: "BEng (Hons) in Software Engineering",
        institution: "London Metropolitan University",
        startDate: "Feb 2021",
        endDate: "Jun 2022",
        achievements: [],
      },
      {
        degree: "HNDIT",
        institution: "Advanced Technical Institute Jaffna",
        startDate: "2011",
        endDate: "2014",
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
    mode: "onChange"
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
  const createAchievementFieldArray = (parentPath:string, index:number) => {
    return useFieldArray({
      control,
      name: `${parentPath}.${index}.achievements`,
    });
  };

  const onSubmit = (data: CVFormData) => {
    console.log("Form data:", data);
    // setFormData(data);
    // setShowPreview(true);
  };

  return (
    <div className="w-full flex-1 overflow-y-auto text-black max-h-full">
      <h1 className="text-2xl font-bold mb-6">Create Your CV</h1>

      <form className="space-y-8">
        {/* Personal Information */}
        <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
          <h2 className="text-xl font-semibold mb-4">Personal Information</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <FormField
              label="Full Name"
              type="text"
              {...register("personalInfo.name")}
              error={errors.personalInfo?.name}
            />

            <FormField
              label="Email"
              type="email"
              {...register("personalInfo.email")}
              error={errors.personalInfo?.email}
            />
            <FormField
              label="Phone"
              type="text"
              {...register("personalInfo.phone")}
              error={errors.personalInfo?.phone}
            />
            <FormField
              label="Location"
              type="text"
              {...register("personalInfo.location")}
              error={errors.personalInfo?.location}
            />
            <FormField
              label="GitHub"
              type="url"
              {...register("personalInfo.github")}
              error={errors.personalInfo?.github}
            />
            <FormField
              label="LinkedIn"
              type="url"
              {...register("personalInfo.linkedin")}
              error={errors.personalInfo?.linkedin}
            />
          </div>
        </div>

        {/* Summary */}
        <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
          <h2 className="text-xl font-semibold mb-4">Summary</h2>
          <TextAreaField
            label="Professional Summary"
            {...register("summary")}
            error={errors.summary}
          />
        </div>

        {/* Skills */}
        <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
          <h2 className="text-xl font-semibold mb-4">Skills</h2>
          <TextAreaField
            label="Skills (comma separated)"
            {...register("skills")}
            error={errors.skills}
          />
        </div>

        {/* Work Experience */}
        <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
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
                    {...register(`workExperience.${workIndex}.title`)}
                    error={errors.workExperience?.[workIndex]?.title}
                  />
                  <FormField
                    label="Company"
                    {...register(`workExperience.${workIndex}.company`)}
                    error={errors.workExperience?.[workIndex]?.company}
                  />
                  <FormField
                    label="Start Date"
                    {...register(`workExperience.${workIndex}.startDate`)}
                    error={errors.workExperience?.[workIndex]?.startDate}
                  />
                  <FormField
                    label="End Date (or 'present')"
                    {...register(`workExperience.${workIndex}.endDate`)}
                    error={errors.workExperience?.[workIndex]?.endDate}
                  />
                </div>

                <TextAreaField
                  label="Job Description"
                  {...register(`workExperience.${workIndex}.description`)}
                  error={errors.workExperience?.[workIndex]?.description}
                />

                <div className="mt-4">
                  <h4 className="font-medium mb-2">
                    Achievements/Responsibilities
                  </h4>

                  {field?.achievements?.map((fieldItem, achiveIndex) => (
                    <div key={achiveIndex} className="flex items-start mb-2">
                      <input
                        type="text"
                        className="w-full px-3 py-2 border border-gray-300 rounded"
                        value={fieldItem}
                        {...register(
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
                        className="ml-2 text-red-500 hover:text-red-700">
                        ✕
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
                          className="ml-2 text-red-500 hover:text-red-700">
                          ✕
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
                  description: "",
                  achievements: [],
                })
              }>
              + Add Work Experience
            </Button>
          </div>
        </div>

        {/* Projects */}
        <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
          <h2 className="text-xl font-semibold mb-4">Projects</h2>

          {projectFields.map((field, index) => {
            const achievementsArray = createAchievementFieldArray(
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
                    {...register(`projects.${index}.title`)}
                    error={errors.projects?.[index]?.title}
                  />
                  <FormField
                    label="Link (optional)"
                    {...register(`projects.${index}.link`)}
                    error={errors.projects?.[index]?.link}
                  />
                </div>

                <div className="mt-4">
                  <h4 className="font-medium mb-2">Project Details</h4>

                  {achievementsArray.fields.map(
                    (achievementField, achievementIndex) => (
                      <div
                        key={achievementField.id}
                        className="flex items-start mb-2">
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
                          className="ml-2 text-red-500 hover:text-red-700">
                          ✕
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
        <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
          <h2 className="text-xl font-semibold mb-4">Education</h2>

          {educationFields.map((field, index) => {
            const achievementsArray = createAchievementFieldArray(
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
                    {...register(`education.${index}.degree`)}
                    error={errors.education?.[index]?.degree}
                  />
                  <FormField
                    label="Institution"
                    {...register(`education.${index}.institution`)}
                    error={errors.education?.[index]?.institution}
                  />
                  <FormField
                    label="Start Date"
                    {...register(`education.${index}.startDate`)}
                    error={errors.education?.[index]?.startDate}
                  />
                  <FormField
                    label="End Date (or 'present')"
                    {...register(`education.${index}.endDate`)}
                    error={errors.education?.[index]?.endDate}
                  />
                </div>

                <div className="mt-4">
                  <h4 className="font-medium mb-2">Achievements/Courses</h4>

                  {achievementsArray.fields.map(
                    (achievementField, achievementIndex) => (
                      <div
                        key={achievementField.id}
                        className="flex items-start mb-2">
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
                          className="ml-2 text-red-500 hover:text-red-700">
                          ✕
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
        <div className="flex justify-center">
          <Button type="button" onClick={handleSubmit(onSubmit)}>
            Generate CV
          </Button>
        </div>
      </form>
    </div>
  );
};

export default CVForm;