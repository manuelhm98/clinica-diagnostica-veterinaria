import { StyleSheet } from "@react-pdf/renderer";

export const options = {
  title: "CONSENTIMIENTOS Y OBLIGACIONES",
  text_one: ``,
  text_two: `Asi mismo entiendo que los procedimientos quirujicos y de diagnostico, asi como: anestesia, transfusiones y en la administracion de algunos medicamentos o tratamientos , existen, aunque remotos, riegos de acciones adversas tales como: muerte, daño cerebral, paralisis, infecciones, etc. Sin embargo, Yo acepto de comformidad y en forma legal todos estos riesgos, puesto que entiendo que los beneficios en su salud que se esperan con el tratamiento, son superiores al riesgo de todas las reacciones adversas.`,
  text_three: ` `,
  text_four: `En casos de propietarios menores de edad o en los imposibilitados de poder firmar, la persona responsable debera firmar aqui, dandose por enterado del contenido de lo que expresa esta hoja, aceptando los conceptos, imposibilidades, obligaciones y dando la autorizacion solicitada.`,
};
export const styles = StyleSheet.create({
  body: {
    padding: 60,
    width: "100%",
  },
  title: {
    textDecoration: "underline",
    fontSize: 12,
    fontWeight: 600,
    marginBottom: 10,
  },
  detailView: {
    display: "flex",
    textAlign: "center",
  },
  detailTitle: {
    fontSize: 12,
    fontWeight: 1000,
    textAlign: "center",
    marginTop: 20,
  },
  rows: {
    display: "flex",
    marginTop: 10,
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
  text_details: {
    borderColor: "#22618F",
    BorderStyle: "solid",
    borderBottom: 1,
    fontSize: 8,
    width: 100,
  },
  tableCol: {
    display: "table-cell",
    width: "25%",
    borderStyle: "solid",
    borderColor: "#bfbfbf",
    borderWidth: 1,
    padding: 10,
  },
  tableRow: {
    margin: "auto",
    flexDirection: "row",
    display: "table-row",
  },
  tableCellHeader: {
    margin: "auto",
    fontSize: 12,
    color: "#4B4B49",
    fontWeight: 500,
  },
  tableCell: {
    fontSize: 11,
  },
});

export const returnMonth = (m) => {
  if (m === 1) {
    return "enero";
  }
  if (m === 2) {
    return "febrero";
  }
  if (m === 3) {
    return "marzo";
  }
  if (m === 4) {
    return "abril";
  }
  if (m === 5) {
    return "mayo";
  }
  if (m === 6) {
    return "junio";
  }
  if (m === 7) {
    return "julio";
  }
  if (m === 8) {
    return "agosto";
  }
  if (m === 9) {
    return "septiembre";
  }
  if (m === 10) {
    return "octubre";
  }
  if (m === 11) {
    return "noviembre";
  }
  if (m === 12) {
    return "diciembre";
  }
};
