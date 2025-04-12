import React from 'react';
import { 
  Document, 
  Page, 
  Text, 
  View, 
  StyleSheet, 
  Link, 
  Font 
} from '@react-pdf/renderer';

// If you want to use custom fonts, you would register them like this:
// Font.register({
//   family: 'Fontin',
//   fonts: [
//     { src: '/path/to/Fontin.ttf' },
//     { src: '/path/to/Fontin-Bold.ttf', fontWeight: 'bold' },
//     { src: '/path/to/Fontin-Italic.ttf', fontStyle: 'italic' },
//   ],
// });

// Define styles
const styles = StyleSheet.create({
  page: {
    padding: 30,
    fontSize: 12,
    fontFamily: 'Helvetica',
    color: '#000000',
  },
  header: {
    textAlign: 'center',
    marginBottom: 10,
  },
  name: {
    fontSize: 18,
    marginBottom: 7.5,
    fontWeight: 'bold',
  },
  contactInfo: {
    flexDirection: 'row',
    justifyContent: 'center',
    flexWrap: 'wrap',
    marginBottom: 15,
  },
  contactItem: {
    marginHorizontal: 5,
  },
  section: {
    marginBottom: 10,
  },
  sectionTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 5,
    textTransform: 'uppercase',
    borderBottom: '1pt solid #5F9EA0', // CadetBlue color as in LaTeX
    paddingBottom: 2,
  },
  spacing: {
    lineHeight: 1.3,
  },
  experience: {
    marginBottom: 8,
  },
  jobTitle: {
    fontWeight: 'bold',
  },
  jobDate: {
    textAlign: 'right',
  },
  jobCompany: {
    color: '#0000FF', // Blue color as in LaTeX
    fontStyle: 'italic',
    fontSize: 11,
    marginBottom: 5,
  },
  jobDescription: {
    marginTop: 5,
  },
  bullet: {
    marginLeft: 10,
    marginBottom: 4,
    flexDirection: 'row',
  },
  bulletPoint: {
    width: 10,
    textAlign: 'center',
  },
  bulletText: {
    flex: 1,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 5,
  },
  link: {
    color: '#0000FF',
    textDecoration: 'none',
  },
  location: {
    color: '#0000FF',
  },
  divider: {
    marginHorizontal: 3,
  },
});

// Create Document Component
const CV = () => (
  <Document>
    <Page size="A4" style={styles.page}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.name}>Yathavan YOGARAJAH</Text>
        <View style={styles.contactInfo}>
          <Link src="https://github.com/yathu" style={styles.contactItem}>
            <Text>Github</Text>
          </Link>
          <Text style={styles.divider}>|</Text>
          
          <Link src="https://www.linkedin.com/in/yathavancom/" style={styles.contactItem}>
            <Text>LinkedIn</Text>
          </Link>
          <Text style={styles.divider}>|</Text>
          
          <Link src="mailto:yathavancom@gmail.com" style={styles.contactItem}>
            <Text>yathavancom@gmail.com</Text>
          </Link>
          <Text style={styles.divider}>|</Text>
          
          <Link src="tel:+33758353959" style={styles.contactItem}>
            <Text>+33758353959</Text>
          </Link>
          <Text style={styles.divider}>|</Text>
          
          <Text style={[styles.contactItem, styles.location]}>Ivry-sur-Seine, France</Text>
        </View>
      </View>

      {/* Summary Section */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Summary</Text>
        <Text style={styles.spacing}>
          Digital marketing professionals with the expertise in Front-End development. Demonstrated proficiency
          in SEO, WordPress, UX design, and content creation.
        </Text>
      </View>

      {/* Skills Section */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Skills</Text>
        <Text style={styles.spacing}>
          SEO, SEM, Google Analytics, Google Search Console, Google Keyword Planner, WordPress, Excel,
          Python, HTML, SCSS, CSS, JavaScript, Canva, Adobe Photoshop, UX Design, Content creation, So-
          cial media analysis, AdobeXD, Figma, Typescript, React JS, Adobe Premiere Pro, Final Cut Pro, Google
          Sheets, Webflow, Ahrefs, Yoast SEO, Rank Math, Asana, Trello, Notion, Clarity
        </Text>
      </View>

      {/* Work Experience Section */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Work Experience</Text>
        
        {/* Freelance */}
        <View style={styles.experience}>
          <View style={styles.row}>
            <Text style={styles.jobTitle}>Freelance - Lanka Property Web</Text>
            <Text style={styles.jobDate}>2018 - present</Text>
          </View>
          <Text style={styles.jobCompany}>
            Sri Lanka's number one and most visited property and real estate website
          </Text>
          <Text style={styles.jobDescription}>
            Convert UI/UX design into HTML website, Mobile and integrate with backend, email template design
          </Text>
        </View>
        
        {/* Software Developer */}
        <View style={styles.experience}>
          <View style={styles.row}>
            <Text style={styles.jobTitle}>Software Developer (Web & Mobile)</Text>
            <Text style={styles.jobDate}>2014.01 - 2023.12</Text>
          </View>
          
          <View style={styles.bullet}>
            <Text style={styles.bulletPoint}>•</Text>
            <Text style={styles.bulletText}>
              Translated Sketch and Figma designs into fully functional web applications and websites with SEO
              optimization.
            </Text>
          </View>
          
          <View style={styles.bullet}>
            <Text style={styles.bulletPoint}>•</Text>
            <Text style={styles.bulletText}>
              Frontend development using React with Typescript.
            </Text>
          </View>
          
          <View style={styles.bullet}>
            <Text style={styles.bulletPoint}>•</Text>
            <Text style={styles.bulletText}>
              Mobile App development (React Native, Flutter, Native Android)
            </Text>
          </View>
        </View>
      </View>

      {/* Projects & Portfolios Section */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Projects & Portfolios</Text>
        
        <View style={styles.row}>
          <Text style={styles.jobTitle}>Flyers, Brochures, Posters and UX design</Text>
          <Link src="https://www.behance.net/yathavan" style={styles.link}>
            <Text>Link to Demo</Text>
          </Link>
        </View>
        
        <View style={styles.bullet}>
          <Text style={styles.bulletPoint}>•</Text>
          <Text style={styles.bulletText}>
            WordPress blog website development and management, including implementation of GA4, Google
            Search Console, meta tags, and keyword research using Google Keyword Planner.
          </Text>
        </View>
        
        <View style={styles.bullet}>
          <Text style={styles.bulletPoint}>•</Text>
          <Text style={styles.bulletText}>
            Experienced in managing personal YouTube channels, utilizing Final Cut Pro, Adobe Premiere Pro,
            Adobe After Effects, and Canva for thumbnails.
          </Text>
        </View>
      </View>

      {/* Education Section */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Education</Text>
        
        {/* MSc */}
        <View style={styles.experience}>
          <View style={styles.row}>
            <Text style={styles.jobTitle}>MSc in Strategic & Digital Marketing at Rennes School of Business</Text>
            <Text style={styles.jobDate}>Jan 2023 - present</Text>
          </View>
          
          <View style={styles.bullet}>
            <Text style={styles.bulletPoint}>•</Text>
            <Text style={styles.bulletText}>
              Developing digital marketing strategies for campaigns involving email, social media, SEO/SEM, and
              display advertising.
            </Text>
          </View>
          
          <View style={styles.bullet}>
            <Text style={styles.bulletPoint}>•</Text>
            <Text style={styles.bulletText}>
              Analysed Google Analytics data and prepared reports on consumer insights.
            </Text>
          </View>
          
          <View style={styles.bullet}>
            <Text style={styles.bulletPoint}>•</Text>
            <Text style={styles.bulletText}>
              Designed promotional materials such as newsletters, posters, brochures, and flyers.
            </Text>
          </View>
          
          <View style={styles.bullet}>
            <Text style={styles.bulletPoint}>•</Text>
            <Text style={styles.bulletText}>
              Translated specific requirements into wireframes and transformed into the user experience in Figma.
            </Text>
          </View>
        </View>
        
        {/* BEng */}
        <View style={styles.experience}>
          <View style={styles.row}>
            <Text style={styles.jobTitle}>BEng (Hons) in Software Engineering at London Metropolitan University</Text>
            <Text style={styles.jobDate}>Feb 2021 - Jun 2022</Text>
          </View>
        </View>
        
        {/* HNDIT */}
        <View style={styles.experience}>
          <View style={styles.row}>
            <Text style={styles.jobTitle}>HNDIT at Advanced Technical Institute Jaffna</Text>
            <Text style={styles.jobDate}>2011 - 2014</Text>
          </View>
        </View>
      </View>
    </Page>
  </Document>
);

export default CV;