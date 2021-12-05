import React from "react";
import { Page, Text, View, Document, Image } from "@react-pdf/renderer";
import IMG from "../../assets/logo.png";
import { styles, options, returnMonth } from "./options/resp-text";

export default function Responsability({ patient, DUI, tel, custom, address }) {
  return (
    <Document>
      <Page style={styles.body}>
        <View style={{ display: "flex", flexDirection: "row" }}>
          <View style={{ width: "30%" }}>
            <Image style={{ width: 80, height: 100 }} src={IMG} />
          </View>
          <View>
            <Text style={styles.title}>Clinica de Diagnostico Veterinario</Text>
            <View style={styles.detailView}>
              <Text style={styles.detailTitle}>HOJA DE RESPONSABILIDADES</Text>
            </View>
          </View>
        </View>

        <View style={{ display: "flex", flexDirection: "row" }}>
          <View style={styles.rows}>
            <View style={{ display: "flex", flexDirection: "row" }}>
              <View style={{ display: "flex", flexDirection: "row" }}>
                <Text
                  style={{
                    fontSize: 8,
                  }}
                >
                  FECHA:{" "}
                </Text>
                <Text
                  style={{
                    marginLeft: 15,
                    borderColor: "#22618F",
                    BorderStyle: "solid",
                    borderBottom: 1,
                    fontSize: 8,
                    width: 450,
                  }}
                >
                  {new Date().toLocaleDateString()}
                </Text>
              </View>
              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  marginLeft: 15,
                }}
              >
                <Text
                  style={{
                    fontSize: 8,
                  }}
                >
                  HORA:{" "}
                </Text>
                <Text
                  style={{
                    marginLeft: 15,
                    borderColor: "#22618F",
                    BorderStyle: "solid",
                    borderBottom: 1,
                    fontSize: 8,
                    width: 200,
                  }}
                >
                  {new Date().toLocaleString("en-US", {
                    hour: "numeric",
                    minute: "numeric",
                    hour12: true,
                  })}
                </Text>
              </View>
            </View>
            <View
              style={{ display: "flex", flexDirection: "row", marginTop: 10 }}
            >
              <View style={{ display: "flex", flexDirection: "row" }}>
                <Text
                  style={{
                    fontSize: 8,
                  }}
                >
                  NOMBRE:
                </Text>
                <Text
                  style={{
                    marginLeft: 7,
                    borderColor: "#22618F",
                    BorderStyle: "solid",
                    borderBottom: 1,
                    fontSize: 8,
                    width: 100,
                  }}
                >
                  {String(patient?.names).toUpperCase()}
                </Text>
              </View>
              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  marginLeft: 30,
                }}
              >
                <Text style={{ fontSize: 8 }}>RAZA: </Text>
                <Text
                  style={{
                    marginLeft: 5,
                    borderColor: "#22618F",
                    BorderStyle: "solid",
                    borderBottom: 1,
                    fontSize: 8,
                    width: 125,
                  }}
                >
                  {patient?.breeds?.type}
                </Text>
              </View>

              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  marginLeft: 30,
                }}
              >
                <Text
                  style={{
                    fontSize: 8,
                  }}
                >
                  EDAD:{" "}
                </Text>
                <Text
                  style={{
                    marginLeft: 5,
                    borderColor: "#22618F",
                    BorderStyle: "solid",
                    borderBottom: 1,
                    fontSize: 8,
                    width: 100,
                  }}
                >
                  {patient?.age}
                </Text>
              </View>
            </View>
            <View style={{ marginTop: 10 }}>
              <View style={{ display: "flex", flexDirection: "row" }}>
                <Text
                  style={{
                    fontSize: 8,
                  }}
                >
                  PROPIETARIO:
                </Text>
                <Text
                  style={{
                    marginLeft: 35,
                    borderColor: "#22618F",
                    BorderStyle: "solid",
                    borderBottom: 1,
                    fontSize: 8,
                    width: 800,
                  }}
                >
                  {custom
                    ? String(custom).toUpperCase()
                    : String(patient?.customers?.names).toUpperCase() +
                      " " +
                      String(patient?.customers?.lastname).toUpperCase()}
                </Text>
              </View>
            </View>
            <View
              style={{ marginTop: 10, display: "flex", flexDirection: "row" }}
            >
              <View style={{ display: "flex", flexDirection: "row" }}>
                <Text style={{ fontSize: 8 }}>DIRECCION:</Text>
                <Text
                  style={{
                    borderColor: "#22618F",
                    BorderStyle: "solid",
                    borderBottom: 1,
                    fontSize: 8,
                    width: 250,
                    marginLeft: 10,
                  }}
                >
                  {patient?.customers?.direction}
                </Text>
              </View>
              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  marginLeft: 15,
                }}
              >
                <Text style={{ fontSize: 8 }}>TEL.:</Text>
                <Text
                  style={{
                    borderColor: "#22618F",
                    BorderStyle: "solid",
                    borderBottom: 1,
                    fontSize: 8,
                    width: 200,
                    marginLeft: 5,
                  }}
                >
                  {patient?.customers?.phone}
                </Text>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.detailView}>
          <Text style={styles.secondText}>{options.title}</Text>
        </View>
        <View style={{ marginTop: 20 }}>
          <Text style={styles.second_text}>
            YO:{" "}
            <Text
              style={{
                borderColor: "#22618F",
                BorderStyle: "solid",
                borderBottom: 1,
                fontSize: 8,
                textDecoration: "underline",
              }}
            >
              {custom
                ? String(custom).toUpperCase()
                : String(patient?.customers?.names).toUpperCase() +
                  " " +
                  String(patient?.customers?.lastname).toUpperCase()}{" "}
            </Text>
            , propietario(a), de un paciente en la Clinica de Diagnostico
            Veterinario, voluntariamente y con pleno conocimiento, doy mi
            expresoconsentimiento para que se le practique los procedimientos
            medico-quirujicos que los medicos que yo eh escogido de Clinica de
            Diagnostico Veterinario estimen conveniente.
            Procedimiento:________________________________________________________
          </Text>
        </View>
        <View style={{ marginTop: 10 }}>
          <Text style={styles.second_text}>{options.text_two}</Text>
        </View>
        <View style={{ marginTop: 10 }}>
          <Text style={styles.second_text}>{options.text_three}</Text>
        </View>
        <View style={{ marginTop: 5 }}>
          <Text style={styles.second_text}>
            Expresamente me obligo,al pago del monto total de la cuenta de
            dinero que resulte por los servicios medico-quirurjicos a favor del
            paciente{" "}
            <Text
              style={{
                fontSize: 8,
                textDecoration: "underline",
              }}
            >
              {String(patient?.names).toUpperCase()}
            </Text>{" "}
            cuyo saldo debera ser cancelado en su totalidad a la hora que se de
            alta dicho paciente.
          </Text>
        </View>
        <View style={{ marginTop: 50, display: "flex", textAlign: "center" }}>
          <Text style={styles.second_text}>
            FIRMA DEL PROPIETARIO: _________________________________
          </Text>
        </View>
        <View style={{ marginTop: 5, display: "flex", textAlign: "center" }}>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              alignContent: "center",
              justifyContent: "center",
            }}
          >
            <Text style={{ fontSize: 10 }}>NOMBRE:</Text>
            <Text
              style={{
                fontSize: 10,
                borderColor: "#22618F",
                BorderStyle: "solid",
                borderBottom: 1,
                width: 300,
              }}
            >
              {custom
                ? String(custom).toUpperCase()
                : String(patient?.customers?.names).toUpperCase() +
                  " " +
                  String(patient?.customers?.lastname).toUpperCase()}{" "}
            </Text>
          </View>
        </View>
        <View style={{ marginTop: 5, display: "flex", textAlign: "center" }}>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              alignContent: "center",
              justifyContent: "center",
            }}
          >
            <Text style={{ fontSize: 10 }}>DUI:</Text>
            <Text
              style={{
                fontSize: 10,
                borderColor: "#22618F",
                BorderStyle: "solid",
                borderBottom: 1,
                width: 100,
              }}
            >
              {DUI}
            </Text>
          </View>
        </View>
        <View style={{ marginTop: 30, display: "flex", textAlign: "center" }}>
          <Text style={styles.second_text}>
            Sonsonate {new Date().getDate()} de{" "}
            {returnMonth(new Date().getMonth() + 1)} del{" "}
            {new Date().getFullYear()}
          </Text>
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
