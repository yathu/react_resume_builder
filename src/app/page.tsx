"use client";

import Image from "next/image";
import React from 'react';
import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';
import ReactPDF from '@react-pdf/renderer';
// import { PDFViewer } from '@react-pdf/renderer';
import ReactDOM from 'react-dom';
// Create styles
const styles = StyleSheet.create({
  page: {
    flexDirection: 'row',
    backgroundColor: '#ff0000'
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1,
  }
});


import dynamic from "next/dynamic";

const PDFViewer = dynamic(
  () => import("@react-pdf/renderer").then(({PDFViewer}) => PDFViewer),
  {
    ssr: false,
    loading: () => <p>Loading...</p>,
  },
);

// Create Document Component
const MyDocument = () => (
  <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.section}>
        <Text>Section #1</Text>
      </View>
      <View style={styles.section}>
        <Text>Section #2</Text>
      </View>
    </Page>
  </Document>
);

const MainDoc = ()=> (
  <PDFViewer className="w-full h-screen">
  <MyDocument />
  </PDFViewer>
);


export default MainDoc;