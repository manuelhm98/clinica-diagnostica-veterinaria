import React from "react";
import { Document, Page, Text, View, StyleSheet } from "@react-pdf/renderer";

const styles = StyleSheet.create({
  page: {
    flexDirection: "row",
    display:"flex",
    textAlign:"center",
    fontFamily:"Arial",
    fontWeight:"demibold"
  },
  section: {
    flexGrow: 1,
  },
});

export const MyDocument = () => {
  return (
    <div className="w-full h-full">
      <Document>
        <Page size="A4" style={styles.page}>
          <View style={styles.section}>
            <Text>DR. CARLOS DAVID VEGA VALLE</Text>
          </View>
          <View style={styles.section}>
            <Text>MEDICO VETERINARIO</Text>
          </View>
        </Page>
      </Document>
    </div>
  );
};
