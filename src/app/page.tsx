"use client";
import React from "react";
import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  Image,
  Link,
  PDFDownloadLink,
} from "@react-pdf/renderer";
import ReactPDF from "@react-pdf/renderer";
// import { PDFViewer } from '@react-pdf/renderer';
import ReactDOM from "react-dom";
import gitHub from "@/assets/icons8-github.svg";
import githubLogo from "@/assets/githublogo.png";

import dynamic from "next/dynamic";
import { url } from "inspector";
import CV from "./cv_view";

const PDFViewer = dynamic(
  () => import("@react-pdf/renderer").then(({ PDFViewer }) => PDFViewer),
  {
    ssr: false,
    loading: () => <p>Loading...</p>,
  }
);

const MainDoc = () => (

  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', height: '100vh' }}>
      <h1>Your CV</h1>
      
      {/* Download button */}
      <div style={{ margin: '20px 0' }}>
        <PDFDownloadLink document={<CV />} fileName="yathavan_yogarajah_cv.pdf">
          {({ blob, url, loading, error }) =>
            loading ? 'Loading document...' : 'Download CV as PDF'
          }
        </PDFDownloadLink>
      </div>
      
      {/* PDF Preview */}
      <PDFViewer width="800" height="600" style={{ border: 'none' }}>
        <CV />
      </PDFViewer>
    </div>
    
  // <PDFViewer className="w-full h-screen">
  //   {/* <MyDocument /> */}

  // </PDFViewer>
);

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
    justifyContent:'center',
    marginTop:5,
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
