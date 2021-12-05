import React from "react";
import { Page, Text, View, Document, Image } from "@react-pdf/renderer";
import IMG from "../../assets/logo.png";
import { styles } from "./options/resp-text";

export default function Sanitary({
  selectPat,
  specie,
  custom,
  country,
  date,
  selectDoctor,
}) {
  return (
    <Document>
      <Page style={styles.body}>
        <View style={{ display: "flex", flexDirection: "row" }}>
          <View style={{ width: "30%" }}>
            <Image style={{ width: 80, height: 100 }} src={IMG} />
          </View>
          <View>
            <Text style={styles.title}>Clinica de Diagnostico Veterinario</Text>
            <View
              style={{
                textAlign: "center",
                display: "flex",
                justifyContent: "center",
                alignContent: "center",
                alignItems: "center",
              }}
            >
              <Text style={{ fontSize: 11 }}>
                DR.{" "}
                {String(
                  selectDoctor?.users?.names +
                    " " +
                    selectDoctor?.users?.lastnames
                ).toUpperCase()}
              </Text>
              <Text style={{ fontSize: 11, marginTop: 10 }}>
                MEDICO VETERINARIO
              </Text>
              <Text style={{ fontSize: 11, marginTop: 10 }}>
                {String(selectDoctor?.jvpmv).toUpperCase()}
              </Text>
            </View>
            <View
              style={{
                textAlign: "center",
                display: "flex",
                justifyContent: "center",
                alignContent: "center",
                alignItems: "center",
              }}
            >
              <Text style={{ fontSize: 13, marginTop: 40 }}>
                CERTIFICADO SANITARIO
              </Text>
            </View>
          </View>
        </View>
        <View style={{ marginTop: 40 }}>
          <Text style={{ fontSize: 10 }}>A QUIEN INTERESE:</Text>
        </View>
        <View style={{ marginTop: 20 }}>
          <Text style={{ fontSize: 10 }}>
            EL INFRAESCRITO MEDICO VETERINARIO HACE CONSTAR QUE EN ESTE FECHA HA
            EXAMINADO: UN {specie}{" "}
            {String(selectPat?.sexes?.type).toUpperCase()}, DE RAZA{" "}
            {String(selectPat?.breeds?.type).toUpperCase()},DE COLOR{" "}
            {String(selectPat?.colors?.type).toUpperCase()} DE{" "}
            {String(selectPat?.age).toUpperCase()} DE EDAD QUE CORRESPONDE AL
            NOMBRE DE {String(selectPat?.names).toUpperCase()}.
          </Text>
        </View>
        <View style={{ marginTop: 20 }}>
          <Text style={{ fontSize: 10 }}>
            PROPIEDAD DE:{" "}
            {String(
              custom
                ? custom
                : selectPat?.customers?.names +
                    " " +
                    selectPat?.customers?.lastname
            ).toUpperCase()}
          </Text>
        </View>
        <View style={{ marginTop: 20 }}>
          <Text style={{ fontSize: 10 }}>CONSIGNATARIO EL MISMO.</Text>
        </View>
        <View style={{ marginTop: 20 }}>
          <Text style={{ fontSize: 10 }}>
            QUE DESEA LLEVARLO: A {String(country).toUpperCase()}
          </Text>
        </View>
        <View style={{ marginTop: 20 }}>
          <Text style={{ fontSize: 10 }}>
            HABIENDOSE ENCONTRADO: A ESTE EJEMPLAR, AL MOMENTO DE LA INSPECCION
            LIBRE DE ENFERMEDADES INFECTOCONTAGIOSAS O PARASITARIAS, AL MISMO
            TIEMPO DOY FE DE HABER CONFIRMADO SU INMUNIZACION, CON EL ESQUEMA DE
            VACUNACION CORRESPONDIENTE A LA FECHA
          </Text>
        </View>
        <View style={{ marginTop: 20 }}>
          <Text style={{ fontSize: 10 }}>
            Y PARA LOS USOS QUE ESTIME CONVENIENTE SE EXTIENDE LA PRESENTE, EN
            LA CIUDAD DE SONSONATE, DEPARTAMENTO DE SONSONATE,{" "}
            {String(date).toUpperCase()}
          </Text>
        </View>
        <View style={{ marginTop: 120, textAlign: "center" }}>
          <Text style={{ fontSize: 12 }}>
            {" "}
            DR.{" "}
            {String(
              selectDoctor?.users?.names + " " + selectDoctor?.users?.lastnames
            ).toUpperCase()}
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
