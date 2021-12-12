import React from "react";
import { Page, Text, View, Document, Image } from "@react-pdf/renderer";
import IMG from "../../assets/logo.png";
import { styles } from "./options/resp-text";

export default function Auth({
  specie,
  turno,
  selectPat,
  address,
  tel,
  custom,
}) {
  return (
    <Document>
      <Page style={{ width: "100%", padding: 25 }}>
        <View style={{ display: "flex", flexDirection: "row" }}>
          <View>
            <Image style={{ width: 80, height: 100 }} src={IMG} />
          </View>
          <View
            style={{
              textAlign: "center",
              display: "flex",
              justifyContent: "center",
              alignContent: "center",
              alignItems: "center",
              marginLeft: 15,
            }}
          >
            <Text style={styles.title}>Clinica de Diagnostico Veterinario</Text>
            <Text style={styles.title}>
              Autorizacion Para el Servicio de Peluqueria y Baño / Canino y
              Felino
            </Text>
            <View
              style={{
                textAlign: "center",
                display: "flex",
                justifyContent: "center",
                alignContent: "center",
                alignItems: "center",
                flexDirection: "row",
              }}
            >
              <View style={{ display: "flex", flexDirection: "row" }}>
                <Text style={{ fontSize: 11 }}>Fecha:</Text>
                <Text
                  style={{
                    marginLeft: 5,
                    borderColor: "#22618F",
                    BorderStyle: "solid",
                    borderBottom: 1,
                    fontSize: 11,
                    width: 125,
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
                <Text style={{ fontSize: 11 }}>Turno:</Text>
                <Text
                  style={{
                    marginLeft: 5,
                    borderColor: "#22618F",
                    BorderStyle: "solid",
                    borderBottom: 1,
                    fontSize: 11,
                    width: 125,
                  }}
                >
                  {turno}
                </Text>
              </View>
            </View>
          </View>
        </View>
        <View style={{ marginTop: 15 }}>
          <Text style={{ fontSize: 7, marginLeft: 10 }}>
            IDENTIFICACION DEL PROPIETARIO
          </Text>
        </View>
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
                width: "50%",
                height: 17,
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Text style={{ fontSize: 7, marginLeft: 5 }}>
                NOMBRE: {" " + String(custom).toUpperCase()}
              </Text>
            </View>
            <View
              style={{
                width: "50%",
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
                TELEFONOS: {" " + tel}
              </Text>
            </View>
          </View>
          <View
            style={{
              width: "100%",
              borderColor: "#000",
              BorderStyle: "solid",
              borderWidth: 1,
              borderTopWidth: 0,
              fontSize: 11,
              height: 17,
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Text style={{ fontSize: 7, marginLeft: 5 }}>
              DIRECCION: {" " + String(address).toUpperCase()}
            </Text>
          </View>
        </View>
        <View style={{ marginTop: 15 }}>
          <Text style={{ fontSize: 7, marginLeft: 10 }}>
            IDENTIFICACION DE LA MASCOTA
          </Text>
        </View>
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
                width: "33.33%",
                height: 17,
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Text style={{ fontSize: 7, marginLeft: 5 }}>
                NOMBRE: {" " + String(selectPat?.names).toUpperCase()}
              </Text>
            </View>
            <View
              style={{
                width: "33.33%",
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
                ESPECIE: {" " + String(specie).toUpperCase()}
              </Text>
            </View>
            <View
              style={{
                width: "33.33%",
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
                RAZA: {" " + String(selectPat?.breeds?.type).toUpperCase()}
              </Text>
            </View>
          </View>
        </View>
        <View style={{ display: "flex", flexDirection: "column" }}>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              borderColor: "#000",
              BorderStyle: "solid",
              borderWidth: 1,
              borderTopWidth: 0,
              fontSize: 11,
            }}
          >
            <View
              style={{
                width: "33.33%",
                height: 17,
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Text style={{ fontSize: 7, marginLeft: 5 }}>
                SEXO: {" " + String(selectPat?.sexes?.type).toUpperCase()}
              </Text>
            </View>
            <View
              style={{
                width: "33.33%",
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
                EDAD: {" " + String(selectPat?.age).toUpperCase()}
              </Text>
            </View>
            <View
              style={{
                width: "33.33%",
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
                COLOR: {" " + String(selectPat?.colors?.type).toUpperCase()}
              </Text>
            </View>
          </View>
        </View>
        <View style={{ display: "flex", flexDirection: "column" }}>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              borderColor: "#000",
              BorderStyle: "solid",
              borderWidth: 1,
              borderTopWidth: 0,
              fontSize: 11,
            }}
          >
            <View
              style={{
                width: "33.33%",
                height: 17,
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Text style={{ fontSize: 7, marginLeft: 5 }}>
                VACUNACION ( ) FECHA:
              </Text>
            </View>
            <View
              style={{
                width: "33.33%",
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
                DESPARACITACION:( )
              </Text>
            </View>
            <View
              style={{
                width: "33.33%",
                borderColor: "#000",
                BorderStyle: "solid",
                borderLeftWidth: 1,
                fontSize: 11,
                height: 17,
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Text style={{ fontSize: 7, marginLeft: 5 }}>FECHA:</Text>
            </View>
          </View>
        </View>
        <View style={{ marginTop: 15 }}>
          <Text style={{ fontSize: 7, marginLeft: 10 }}>
            ESTILO DE PELUQUERIA Y BAÑO:
          </Text>
        </View>
        <View style={{ marginTop: 15 }}>
          <Text style={{ fontSize: 7, marginLeft: 10 }}>TIPO DE CORTE:</Text>
        </View>
        <View
          style={{
            marginTop: 15,
            marginLeft: 10,
            width: "100%",
            borderColor: "#000",
            BorderStyle: "solid",
            borderBottomWidth: 1,
          }}
        />
        <View style={{ marginTop: 15 }}>
          <Text style={{ fontSize: 7, marginLeft: 10 }}>
            OBSERVACIONES DEL CLIENTE:
          </Text>
        </View>
        <View
          style={{
            marginTop: 15,
            marginLeft: 10,
            width: "100%",
            borderColor: "#000",
            BorderStyle: "solid",
            borderBottomWidth: 1,
          }}
        />
        <View style={{ marginTop: 15 }}>
          <Text style={{ fontSize: 7, marginLeft: 10 }}>
            OBSERVACIONES DEL MOTIRISTA/PELUQUERO:
          </Text>
        </View>
        <View
          style={{
            marginTop: 15,
            marginLeft: 10,
            width: "100%",
            borderColor: "#000",
            BorderStyle: "solid",
            borderBottomWidth: 1,
          }}
        />
        <View style={{ marginTop: 15, textAlign: "center" }}>
          <Text style={{ textDecoration: "underline", fontSize: 9 }}>
            IMFORMACION IMPORTANTE
          </Text>
        </View>
        <View style={{ marginTop: 4 }}>
          <Text style={{ fontSize: 7, marginLeft: 25 }}>
            1- ENTENDIENDOSE QUE EN NUESTRA CLINICA VETERINARIA SON UTILIDADOS
            IMPLEMENTOS IMPORTANTES INDIVIDUALES, YA QUE NOS INTERESA DE SOBRE
            MANERA DISMINUIR AL MAXIMO EL RIESGO IMPLICADO POR ENFERMEDADES DE
            LA PIEL.
          </Text>
        </View>
        <View style={{ marginTop: 4 }}>
          <Text style={{ fontSize: 7, marginLeft: 25 }}>
            2- CONOCEDORES DE QUE SE TRABAJA CON SERES VIVOS LOS CUALES AVECES
            SE COMPORTAN DE UNA MANERA INADVERTIDA O INADECUADA PUDIENDOSE
            PRODUCIR UN ACCIDENTE EN EL ESTILO DE CORTE DE PELO, COMO UNA LEVE
            HERIDA PARA LO CUAL SE CORRERA CON LOS GASTOS MEDICOS NECESARIOS EN
            ATENCION EN LA ESTETICA CANINA Y NO INCLUIREMOS GASTOS DE RECETAS.
          </Text>
        </View>
        <View style={{ marginTop: 4 }}>
          <Text style={{ fontSize: 7, marginLeft: 25 }}>
            3- LOS FACTORES DE RIESGOS CARDIOVASCULARES: EDAD-CARDIOPATIAS DE
            BASE-SOBRE PESO-HIPERTENSION-HIPOTIROIDISMPO-COAGULOPATIAS.
          </Text>
        </View>
        <View style={{ marginTop: 4 }}>
          <Text style={{ fontSize: 7, marginLeft: 25 }}>
            4- NUNCA SE COLOCARAN PROCEDIMIENTOS ANALGESICOS PARA PELUQUERIAS Y
            BAÑOS DE MASCOTAS.
          </Text>
        </View>
        <View style={{ marginTop: 4 }}>
          <Text style={{ fontSize: 7, marginLeft: 25 }}>
            5- NO SE PERMITIRA DESPUES DE UNA HORA DE TERMINADO EL SERVICIO
            REQUERIDO LA PERMANENCIA DE LA MASCOTA DENTRO DE LA CLINICA.
          </Text>
        </View>
        <View style={{ marginTop: 4 }}>
          <Text style={{ fontSize: 7, marginLeft: 25 }}>
            6- NO SE ATENDERAN MASCOTAS SI SE ENCUENTRAN INFESTADOS DE PULGAS O
            GARRAPATAS, SE REAGENDARAN AL TERMINO DE ALGUN TRATAMIENTO, O EN
            CASO SI DESEA EL TRATAMIENTO SE COBRARA EL COSTO EXTRA DEPENDIENDO
            EL ESTADO DE LA MASCOTA Y SU MEDICACION.
          </Text>
        </View>
        <View style={{ marginTop: 4 }}>
          <Text style={{ fontSize: 7, marginLeft: 25 }}>
            7- EN CASO DE TENER ALGUN PERCANSE CON EL COMPORTAMIENTO AGRESIVO DE
            LA MASCOTA SE DETENDRA EL PROCESO Y SE ENTREGARA AL DUEÑO EN LA
            CONDICION EN LA QUE SE ENCUENTRE AL MOMENTO DEL CORTO.
          </Text>
        </View>
        <View style={{ marginTop: 4 }}>
          <Text style={{ fontSize: 7, marginLeft: 25 }}>
            8- EN CASO DE ABANDONO DE LA MASCOTA RECIBIDA, SE PODRA PROCEDER DE
            LA MANERA LEGAL.
          </Text>
        </View>
        <View style={{ marginTop: 4 }}>
          <Text style={{ fontSize: 7, marginLeft: 25 }}>
            9- LA VETERINARIA NO SE HACE RESPONSABLE EN EL CASO DEL
            FALLECIMIENTO DE LA MASCOTA POR ALGUN PARO CARDIACO DEBIDO AL
            NERVIOSISMO O ESTRES, PRESENTADO DURANTE SU ESTADIA O RESGUARDO
            DENTRO DE LA VETERINARIA COMO TAMBIEN SE PODRA VERIFICAR LAS CAMARAS
            DE VIDEOSEGURIDAD PARA CONSTAR QUE NO HUBO MALTRATO ALGUNO.
          </Text>
        </View>
        <View style={{ marginTop: 15 }}>
          <Text style={{ fontSize: 7 }}>
            INFORMADO DE TODOS LOS RIESGOS YA MENCIONADOS, ASI COMO LOS COSTOS
            QUE SIGNIFIQUE DICHA ACCION, AUTORIZO Y ESTOY CONFORME QUE SE
            REALICEN LA PELUQUERIA Y/O BAÑO A MI MASCOTA EN LA FORMA YA
            SEÑALADA. EN ESTE MISMO ACTO DECLARO NO TOMARE NINGUNA ACCION LEGAL
            POSTERIOR CONTRA EL SERVICIO DE PELUQUERIA O BAÑO A MI MASCOTA.
          </Text>
        </View>
        <View style={{ marginTop: 20, display: "flex", flexDirection: "row" }}>
          <View style={{ width: "50%" }}>
            <Text style={{ fontSize: 7 }}>FIRMA DEL PROPIETARIO:</Text>
            <View
              style={{
                marginTop: 15,
                width: "70%",
                borderColor: "#000",
                BorderStyle: "solid",
                borderBottomWidth: 1,
              }}
            />
            <Text style={{ fontSize: 7, marginTop: 15 }}>DUI:</Text>
            <View
              style={{
                marginTop: 15,
                width: "70%",
                borderColor: "#000",
                BorderStyle: "solid",
                borderBottomWidth: 1,
              }}
            />
          </View>
          <View style={{ width: "50%" }}>
            <Text style={{ fontSize: 7 }}>
              FIRMA DEL ENCARGADO VETERINARIA:
            </Text>
            <View
              style={{
                marginTop: 15,
                width: "70%",
                borderColor: "#000",
                BorderStyle: "solid",
                borderBottomWidth: 1,
              }}
            />
            <Text style={{ fontSize: 7, marginTop: 15 }}>DUI:</Text>
            <View
              style={{
                marginTop: 15,
                width: "70%",
                borderColor: "#000",
                BorderStyle: "solid",
                borderBottomWidth: 1,
              }}
            />
          </View>
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
