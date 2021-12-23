import React from "react";
import { Page, Text, View, Document, Image } from "@react-pdf/renderer";
import IMG from "../../../assets/logo.png";
import { styles } from "./options/resp-text";

export default function PDFEstheticSales({
  sales,
  date,
  initial,
  final,
  total,
}) {
  return (
    <Document>
      <Page style={{ padding: 20 }}>
        <View style={{ display: "flex", flexDirection: "row" }}>
          <View style={{ width: "30%" }}>
            <Image style={{ width: 80, height: 100 }} src={IMG} />
          </View>
          <View>
            <Text style={styles.title}>Clinica de Diagnostico Veterinario</Text>
            <View style={styles.detailView}>
              <Text style={styles.detailTitle}>
                REPORTE DE VENTAS DE ESTETICA
              </Text>
            </View>
          </View>
        </View>
        <View>
          <Text style={{ fontSize: 10, marginTop: 20, marginLeft: 20 }}>
            FECHA: {new Date().toLocaleDateString()}
          </Text>
        </View>
        <View style={{ marginTop: 10, marginLeft: 20 }}>
          <Text style={{ fontSize: 10 }}>TOTAL DE VENTAS: ${total}</Text>
        </View>
        {date && (
          <View style={{ marginTop: 10, marginLeft: 20 }}>
            <Text style={{ fontSize: 10 }}>
              DESDE: {new Date(date).toLocaleDateString()}
            </Text>
          </View>
        )}
        {initial && final && (
          <View style={{ marginTop: 10, marginLeft: 20 }}>
            <Text style={{ fontSize: 10 }}>
              DESDE: {new Date(initial).toLocaleDateString()}
            </Text>
            <Text style={{ fontSize: 10, marginTop: 10 }}>
              HASTA: {new Date(final).toLocaleDateString()}
            </Text>
          </View>
        )}
        <View style={{ marginTop: 20 }}>
          <View style={{ display: "flex", flexDirection: "column" }}>
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                borderColor: "#000",
                BorderStyle: "solid",
                borderWidth: 1,
                fontSize: 11,
              }}
            >
              <View
                style={{
                  width: "20%",
                  height: 17,
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <Text style={{ fontSize: 7, marginLeft: 5 }}>FECHA</Text>
              </View>
              <View
                style={{
                  width: "25%",
                  borderColor: "#000",
                  BorderStyle: "solid",
                  borderLeftWidth: 1,
                  fontSize: 11,
                  height: 17,
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <Text style={{ fontSize: 7, marginLeft: 5 }}>TOTAL</Text>
              </View>
              <View
                style={{
                  width: "25%",
                  borderColor: "#000",
                  BorderStyle: "solid",
                  borderLeftWidth: 1,
                  fontSize: 11,
                  height: 17,
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <Text style={{ fontSize: 7, marginLeft: 5 }}>
                  FORMA DE PAGO
                </Text>
              </View>
              <View
                style={{
                  width: "25%",
                  borderColor: "#000",
                  BorderStyle: "solid",
                  borderLeftWidth: 1,
                  fontSize: 11,
                  height: 17,
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <Text style={{ fontSize: 7, marginLeft: 5 }}>VENDIDO POR</Text>
              </View>
            </View>
          </View>
          {sales &&
            sales?.map((sale, index) => (
              <View
                key={index}
                style={{ display: "flex", flexDirection: "column" }}
              >
                <View
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    borderColor: "#000",
                    BorderStyle: "solid",
                    borderWidth: 1,
                    fontSize: 11,
                    borderTopWidth: 0,
                  }}
                >
                  <View
                    style={{
                      width: "20%",
                      height: 17,
                      display: "flex",
                      justifyContent: "center",
                    }}
                  >
                    <Text style={{ fontSize: 7, marginLeft: 5 }}>
                      {new Date(sale.date).toLocaleDateString()}
                    </Text>
                  </View>
                  <View
                    style={{
                      width: "25%",
                      borderColor: "#000",
                      BorderStyle: "solid",
                      borderLeftWidth: 1,
                      borderTopWidth: 0,
                      fontSize: 11,
                      height: 17,
                      display: "flex",
                      justifyContent: "center",
                    }}
                  >
                    <Text style={{ fontSize: 7, marginLeft: 5 }}>
                      ${sale.totalPrice}
                    </Text>
                  </View>
                  <View
                    style={{
                      width: "25%",
                      borderColor: "#000",
                      BorderStyle: "solid",
                      borderLeftWidth: 1,
                      fontSize: 11,
                      height: 17,
                      display: "flex",
                      justifyContent: "center",
                      borderTopWidth: 0,
                    }}
                  >
                    <Text style={{ fontSize: 7, marginLeft: 5 }}>
                      {sale.wayToPay}
                    </Text>
                  </View>
                  <View
                    style={{
                      width: "25%",
                      borderColor: "#000",
                      BorderStyle: "solid",
                      borderLeftWidth: 1,
                      fontSize: 11,
                      height: 17,
                      display: "flex",
                      justifyContent: "center",
                      borderTopWidth: 0,
                    }}
                  >
                    <Text style={{ fontSize: 7, marginLeft: 5 }}>
                      {sale.users?.names}
                    </Text>
                  </View>
                </View>
              </View>
            ))}
        </View>
        <View style={{ textAlign: "center", marginTop: 40 }}>
          <Text style={{ fontSize: 10 }}>
            AVENIDA MORAZAN, BARRIO MEJICANOS, LOCAL No. 8-10, SONSONATE
          </Text>
        </View>
        <View style={{ textAlign: "center", marginTop: 10 }}>
          <Text style={{ fontSize: 10 }}>TEL: 2451-9309</Text>
        </View>
      </Page>
    </Document>
  );
}
