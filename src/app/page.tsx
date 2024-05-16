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
} from "@react-pdf/renderer";
import ReactPDF from "@react-pdf/renderer";
// import { PDFViewer } from '@react-pdf/renderer';
import ReactDOM from "react-dom";
import gitHub from "@/assets/icons8-github.svg";
import githubLogo from "@/assets/githublogo.png";

import dynamic from "next/dynamic";
import { url } from "inspector";

const PDFViewer = dynamic(
  () => import("@react-pdf/renderer").then(({ PDFViewer }) => PDFViewer),
  {
    ssr: false,
    loading: () => <p>Loading...</p>,
  }
);
var arr = [11, 89, 23, 7, 98];
// Create Document Component
const MyDocument = () => (
  <Document title="Yathavan resume">
    <Page size="A4" style={styles.page}>
      <View style={styles.section}>
        <Text style={styles.heading1}>First & Last Name</Text>
        <View style={styles.headerLinks}>
          {Array.from({ length: 5 }).map((i,index) => (
            <Link href="https://github.com" style={[styles.headerLinkItem,{marginLeft:`${index == 0 ? 0:10}`}]}>
              <Image
                src="https://github.githubassets.com/assets/GitHub-Mark-ea2971cee799.png"
                style={styles.headerIcon}
              />
              <Text>gitHub1</Text>
            </Link>
          ))}
        </View>
      </View>
    </Page>
  </Document>
);

const MainDoc = () => (
  <PDFViewer className="w-full h-screen">
    <MyDocument />
  </PDFViewer>
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
