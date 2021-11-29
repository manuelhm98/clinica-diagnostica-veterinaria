import React from "react";
import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  Image,
} from "@react-pdf/renderer";
import IMG from "../../assets/log.PNG";

export default function Responsability({ patient }) {
  const styles = StyleSheet.create({
    body: {
      padding: 90,
      width: "100%",
    },
    detailView: {
      display: "flex",
      textAlign: "center",
    },
    detailTitle: {
      fontSize: 12,
      fontWeight: 1000,
      textAlign: "center",
    },
    rows: {
      display: "flex",
      marginTop: 40,
      flexDirection: "column",
    },
    rows_text: {
      fontSize: 8,
    },
    rows_text_two: {
      fontSize: 8,
      width: 200,
    },
    rows_text_three: {
      fontSize: 8,
      marginLeft: 50,
    },
    secondText: {
      fontSize: 12,
      fontWeight: 1000,
      textAlign: "center",
      marginTop: 40,
    },
    second_text: {
      fontSize: 10,
    },
    pet: {
      fontSize: 8,
      width: 500,
    },
  });
  return (
    <Document>
      <Page style={styles.body}>
        <View style={styles.detailView}>
          <Text style={styles.detailTitle}>HOJA DE RESPONSABILIDADES</Text>
        </View>
        <View style={{ display: "flex", flexDirection: "row" }}>
          <View style={styles.rows}>
            <View style={{ display: "flex", flexDirection: "row" }}>
              <Text style={styles.pet}>
                FECHA: {new Date().toLocaleDateString()}
              </Text>
              <Text style={styles.rows_text_two}>
                HORA:{" "}
                {new Date().toLocaleString("en-US", {
                  hour: "numeric",
                  minute: "numeric",
                  hour12: true,
                })}
              </Text>
            </View>
            <View
              style={{ display: "flex", flexDirection: "row", marginTop: 10 }}
            >
              <Text style={{ fontSize: 8, width: 200 }}>
                NOMBRE: {patient?.names}
              </Text>
              <Text style={{ fontSize: 8, width: 250 }}>
                RAZA: {patient?.breeds?.type}
              </Text>
              <Text style={{ fontSize: 8, width: 200 }}>
                EDAD: {patient?.age}
              </Text>
            </View>
            <View style={{ marginTop: 10 }}>
              <Text style={styles.rows_text}>
                PROPIETARIO: {String(patient?.customers?.names).toUpperCase()}{" "}
                {String(patient?.customers?.lastname).toUpperCase()}
              </Text>
            </View>
            <View
              style={{ marginTop: 10, display: "flex", flexDirection: "row" }}
            >
              <Text style={{ fontSize: 8, width: 250 }}>
                DIRECCION: {patient?.customers?.direction}
              </Text>
              <Text style={{ fontSize: 8 }}>
                TEL.: {patient?.customers?.phone}
              </Text>
            </View>
          </View>
          <View>
            <Image
              style={{ width: 50, height: 100, margin: 40, marginTop: 20 }}
              src={IMG}
            />
          </View>
        </View>
        <View style={styles.detailView}>
          <Text style={styles.secondText}>CONSENTIMIENTOS Y OBLIGACIONES</Text>
        </View>
        <View style={{ marginTop: 10 }}>
          <Text style={styles.second_text}>
            YO:_____________________________________________, propietario(a), de
            un paciente en la Clinica de Diagnostico Veterinario,
            voluntariamente y con pleno conocimiento, doy mi expreso
            consentimiento para que se le practique los procedimientos
            medico-quirujicos que los medicos que yo eh escogido de Clinica de
            Diagnostico Veterinario estimen conveniente.
            ___________________________________________
          </Text>
        </View>
        <View style={{ marginTop: 5 }}>
          <Text style={styles.second_text}>
            Asi mismo entiendo que los procedimientos quirujicos y de
            diagnostico, asi como: anestesia, transfusiones y en la
            administracion de algunos medicamentos o tratamientos , existen,
            aunque remotos, riegos de acciones adversas tales como: muerte, daño
            cerebral, paralisis, infecciones, etc. Sin embargo, Yo acepto de
            comformidad y en forma legal todos estos riesgos, puesto que
            entiendo que los beneficios en su salud que se esperan con el
            tratamiento, son superiores al riesgo de todas las reacciones
            adversas.
          </Text>
        </View>
        <View style={{ marginTop: 5 }}>
          <Text style={styles.second_text}>
            Expresamente me obligo,al pago del monto total de la cuenta de
            dinero que resulte por los servicios medico-quirurjicos a favor del
            paciente ________________________________ cuyo saldo debera ser
            cancelado en su totalidad a la hor que se de alta dicho paciente.
          </Text>
        </View>
        <View style={{ marginTop: 5 }}>
          <Text style={styles.second_text}>
            En casos de propietarios menores de edad o en los imposibilitados de
            poder firmar, la persona responsable debera firmar aqui, dandose por
            enterado del contenido de lo que expresa esta hoja, aceptando los
            conceptos, imposibilidades, obligaciones y dando la autorizacion
            solicitada.
          </Text>
        </View>
        <View style={{ marginTop: 50, display: "flex", textAlign: "center" }}>
          <Text style={styles.second_text}>
            FIRMA DEL PROPIETARIO: _________________________________
          </Text>
        </View>
        <View style={{ marginTop: 5, display: "flex", textAlign: "center" }}>
          <Text style={styles.second_text}>
            NOMBRE: ________________________________________________
          </Text>
        </View>
        <View style={{ marginTop: 5, display: "flex", textAlign: "center" }}>
          <Text style={styles.second_text}>DUI: ______________________</Text>
        </View>
        <View style={{ marginTop: 30, display: "flex", textAlign: "center" }}>
          <Text style={styles.second_text}>
            Sonsonate _____________ de __________________ del ____________
          </Text>
        </View>
      </Page>
    </Document>
  );
}
