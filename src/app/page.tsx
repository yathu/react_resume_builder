"use client";
import { PDFDownloadLink, StyleSheet } from "@react-pdf/renderer";
// import { PDFViewer } from '@react-pdf/renderer';

import dynamic from "next/dynamic";
import { useRef, useState } from "react";
import CV from "./cv_view";
import Navbar from "./components/Navbar";
import IntroSection from "./landing_page/intro";
import CVForm from "./forms/form_view";
import { CVFormData } from "./constant/schema/formSchema";
import { Button } from "./components/form_elements";

const PDFViewer = dynamic(
  () => import("@react-pdf/renderer").then(({ PDFViewer }) => PDFViewer),
  {
    ssr: false,
    loading: () => <p>Loading...</p>,
  }
);

const MainDoc = () => {
  const element = useRef<any>();
  const [cvData, setcvData] = useState<CVFormData>({
    personalInfo: {
      name: "",
      email: "",
      phone: "",
      location: "",
    },
    skills: "",
    workExperience: [],
    projects: [],
    education: [],
  });

  const handleOnFormUpdate = (data: CVFormData) => {
    setcvData(data);
  };

  return (
    <div>
      <div className="h-svh overflow-hidden flex flex-col">
        <Navbar />
        <IntroSection />
      </div>
      <div
        id="builderSection"
        className="lg:h-svh overflow-hidden w-screen grid grid-cols-12">
        <div className="col-span-12 lg:col-span-6 flex flex-col justify-between overflow-y-auto">
          <CVForm onUpdate={handleOnFormUpdate} />
          {/* Download button */}
          {/* <div className="flex justify-center p-4 gap-4">
            <PDFDownloadLink
              className="bg-teal-500 rounded-md px-4 py-3 w-full text-center"
              document={<CV data={cvData} />}
              fileName="NodeCV.pdf">
              {({ blob, url, loading, error }) =>
                loading ? "Loading document..." : "Download"
              }
            </PDFDownloadLink>
          </div> */}
        </div>
        <div className="col-span-12 lg:col-span-6 min-h-svh">
          <PDFViewer
            innerRef={element}
            showToolbar={false}
            width="100%"
            height="100%"
            className="">
            <CV data={cvData} />
          </PDFViewer>
        </div>
      </div>
    </div>
  );
};

// Create styles
const styles = StyleSheet.create({
  page: {},
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1,
  },
  heading1: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
  headerLinks: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 5,
  },
  headerLinkItem: {
    flexDirection: "row",
    alignItems: "center",
    fontSize: 11,
    textDecoration: "none",
  },
  headerIcon: {
    height: 15,
    width: "auto",
  },
});

export default MainDoc;
