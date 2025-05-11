import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import {
  faEnvelope,
  faLocationDot,
  faMobile,
} from "@fortawesome/free-solid-svg-icons";
import {
  Document,
  Font,
  Link,
  Page,
  StyleSheet,
  Text,
  View,
} from "@react-pdf/renderer";
import FontAwesomeIcon from "./components/FontawesomeIconPDF";
import { CVFormData } from "./constant/schema/formSchema";
import { FC, useEffect } from "react";

// If you want to use custom fonts, you would register them like this:
Font.register({
  family: "Cmu",
  fonts: [
    { src: "/fonts/cmu.serif-roman.ttf", fontWeight: "normal" },
    {
      src: "/fonts/cmu.serif-italic.ttf",
      fontWeight: "normal",
      fontStyle: "italic",
    },
    {
      src: "/fonts/cmu.serif-bold.ttf",
      fontWeight: "bold",
    },
    // {
    //   src: "/fonts/cmunbx.ttf",
    //   fontWeight: "medium",
    // },
  ],
});

// Define styles
const styles = StyleSheet.create({
  page: {
    padding: 20,
    fontSize: 12,
    color: "#000000",
  },
  header: {
    textAlign: "center",
    marginBottom: 10,
    fontFamily: "Cmu",
  },
  name: {
    fontSize: 16,
    marginBottom: 5,
    // fontWeight: "medium",
  },
  contactSection: {
    flexDirection: "row",
    justifyContent: "space-between",
    flexWrap: "wrap",
    marginBottom: 2,
    // fontSize: "12px"
  },
  contactIcon: { color: "#013399", width: "10px" },
  contactItem: {
    marginHorizontal: 5,
    display: "flex",
    flexDirection: "row",
    gap: "3px",
    alignItems: "center",
    textDecoration: "none",
    color: "#013399",
  },
  section: {
    marginBottom: 10,
  },
  sectionTitle: {
    fontSize: 12,
    fontWeight: "bold",
    marginBottom: 5,
    textTransform: "uppercase",
    borderBottom: "0.5px solid #8a89a8", // CadetBlue color as in LaTeX
    paddingBottom: 2,
    fontFamily: "Cmu",
  },
  spacing: {
    lineHeight: 1.3,
    fontFamily: "Cmu",
    color: "#000000",
  },
  experience: {
    marginBottom: 8,
  },
  jobTitle: {
    fontWeight: "bold",
    fontFamily: "Cmu",
    fontSize: 12,
  },
  jobLink: {
    fontFamily: "Cmu",
  },
  jobDate: {
    textAlign: "right",
    fontFamily: "Cmu",
  },
  jobKeynote: {
    color: "#003399", // Blue color as in LaTeX
    fontStyle: "italic",
    // fontSize: 11,
    marginBottom: 5,
    fontFamily: "Cmu",
  },
  jobDescription: {
    marginTop: 5,
    fontFamily: "Cmu",
    // fontSize: 11,
  },
  bullet: {
    marginLeft: 10,
    marginBottom: 4,
    flexDirection: "row",
  },
  bulletPoint: {
    width: 10,
    textAlign: "center",
  },
  bulletText: {
    flex: 1,
    fontFamily: "Cmu",
    // fontSize: 11,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 5,
  },
  link: {
    color: "#0000FF",
    textDecoration: "none",
  },
  divider: {
    // marginHorizontal: 1,
  },
});

interface CVProps {
  data: CVFormData;
}
// Create Document Component
const CV: FC<CVProps> = ({ data }) => {
  const { personalInfo, summary,education,projects,skills,workExperience } = data;

  const { name, email, linkedin, location, phone, github } = personalInfo;

  // useEffect(() => {
  //   console.log("data PDF:",data);
  // }, [data]);

  return (
    <Document>
      <Page size="A4" style={styles.page}>
        {/* Header */}
        <View style={styles.header}>
          {name && <Text style={styles.name}>{name}</Text>}

          <View style={styles.contactSection}>
            {github && (
              <>
                <Link src={github} style={styles.contactItem}>
                  <FontAwesomeIcon
                    faIcon={faGithub}
                    style={styles.contactIcon}
                  />
                  <Text>Github</Text>
                </Link>
                <Text style={styles.divider}>|</Text>
              </>
            )}

            {linkedin && (
              <>
                <Link src={linkedin} style={styles.contactItem}>
                  <FontAwesomeIcon
                    faIcon={faLinkedin}
                    style={styles.contactIcon}
                  />
                  <Text>LinkedIn</Text>
                </Link>
                <Text style={styles.divider}>|</Text>
              </>
            )}

            {email && (
              <>
                <Link src={`mailto:${email}`} style={styles.contactItem}>
                  <FontAwesomeIcon
                    faIcon={faEnvelope}
                    style={styles.contactIcon}
                  />
                  <Text>{email}</Text>
                </Link>
                <Text style={styles.divider}>|</Text>
              </>
            )}

            {phone && (
              <>
                <Link src={`tel:${phone}`} style={styles.contactItem}>
                  <FontAwesomeIcon
                    faIcon={faMobile}
                    style={styles.contactIcon}
                  />
                  <Text>{phone}</Text>
                </Link>
                <Text style={styles.divider}>|</Text>
              </>
            )}

            {location && (
              <Link style={styles.contactItem}>
                <FontAwesomeIcon
                  faIcon={faLocationDot}
                  style={styles.contactIcon}
                />
                <Text>{location}</Text>
              </Link>
            )}
          </View>
        </View>

        {/* Summary Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Summary</Text>
          <Text style={styles.spacing}>{summary}</Text>
        </View>

        {/* Skills Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Skills</Text>
          <Text style={styles.spacing}>{skills}</Text>
        </View>

        {/* Work Experience Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Work Experience</Text>

          {/* <View style={styles.experience}>
            <View style={styles.row}>
              <Text style={styles.jobTitle}>
                Freelance - Lanka Property Web
              </Text>
              <Text style={styles.jobDate}>2018 - present</Text>
            </View>
            <Text style={styles.jobCompany}>
              Sri Lanka's number one and most visited property and real estate
              website
            </Text>
            <Text style={styles.jobDescription}>
              Convert UI/UX design into HTML website, Mobile and integrate with
              backend, email template design
            </Text>
          </View> */}

          {workExperience.map((experience, index) => (
            <View key={index} style={styles.experience}>
              <View style={styles.row}>
                <Text style={styles.jobTitle}>
                  {experience.title} - {experience.company}
                </Text>
                <Text style={styles.jobDate}>
                  {experience.startDate} - {experience.endDate || "present"}
                </Text>
              </View>
              <Text style={styles.jobKeynote}>{experience.keyNote}</Text>

              {experience.achievements &&
                experience.achievements.map((achievement, idx) => (
                  <View key={idx} style={styles.bullet}>
                    <Text style={styles.bulletPoint}>•</Text>
                    <Text style={styles.bulletText}>{achievement}</Text>
                  </View>
                ))}
            </View>
          ))}
        </View>

        {/* Projects Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Projects & Portfolios</Text>

          {projects.map((project, index) => (
            <View key={index}>
              <View style={styles.row}>
                <Text style={styles.jobTitle}>{project.title}</Text>
                {project.link && (
                  <Link src={project.link} style={styles.link}>
                    <Text style={styles.jobLink}>Link to Demo</Text>
                  </Link>
                )}
              </View>
              {project.achievements &&
                project.achievements.map((achievement, idx) => (
                  <View key={idx} style={styles.bullet}>
                    <Text style={styles.bulletPoint}>•</Text>
                    <Text style={styles.bulletText}>{achievement}</Text>
                  </View>
                ))}
            </View>
          ))}
        </View>

        {/* Education Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Education</Text>

          {education.map((edu, index) => (
            <View key={index} style={styles.experience}>
              <View style={styles.row}>
                <Text style={styles.jobTitle}>
                  {edu.degree} at {edu.institution}
                </Text>
                <Text style={styles.jobDate}>
                  {edu.startDate} - {edu.endDate || "present"}
                </Text>
              </View>
              {edu.achievements &&
                edu.achievements.map((achievement, idx) => (
                  <View key={idx} style={styles.bullet}>
                    <Text style={styles.bulletPoint}>•</Text>
                    <Text style={styles.bulletText}>{achievement}</Text>
                  </View>
                ))}
            </View>
          ))}
        </View>
      </Page>
    </Document>
  );
};

export default CV;
