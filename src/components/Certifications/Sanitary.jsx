import { useState, useEffect } from "react";
import Modal from "../Global/Modal";
import SelectPatient from "../Quotes/SelectPatient";
import { useDispatch, useSelector } from "react-redux";
import { readPatients } from "../../redux/actions/patiences";
import { Document, Paragraph, TextRun, AlignmentType, Packer } from "docx";
import { saveAs } from "file-saver";
import { Warning } from "../Global/Alerts/Warning";
import { readDoctors } from "../../redux/actions/doctors";
import SelectDoctor from "../Quotes/SelectDoctor";

export default function Sanitary() {
  const [showModalPat, setShowModalPat] = useState(false);
  const [selectPat, setSelectPat] = useState();
  const [showModalDoctor, setShowModalDoctor] = useState(false);
  const [selectDoctor, setSelectDoctor] = useState();
  const [search, setSearch] = useState({ name: "", custom: "" });
  const [page, setPage] = useState(1);
  const [pageDoc, setPageDoc] = useState(1);
  const [searchDoc, setSearchDoc] = useState("");
  const [contry, setContry] = useState();
  const [custom, setCustom] = useState();
  const patients = useSelector((state) => state.patient.data);
  const doctors = useSelector((state) => state.doctor.data);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(readPatients(page, search.name, search.custom, "", 3));
    return;
  }, [dispatch, search, page]);
  useEffect(() => {
    dispatch(readDoctors(pageDoc, ""));
    return;
  }, [dispatch, searchDoc, pageDoc]);
  function generate() {
    if (!selectPat && !contry) {
      Warning("Debes seleccionar un paciente");
      return;
    }
    const doc = new Document({
      sections: [
        {
          properties: {},
          children: [
            new Paragraph({
              alignment: AlignmentType.CENTER,
              children: [
                new TextRun({
                  text: `DR.  ${String(
                    selectDoctor?.users.names +
                      " " +
                      selectDoctor?.users.lastnames
                  ).toUpperCase()}`,
                  bold: true,
                  font: "Calibri Light",
                  size: 25,
                }),
              ],
            }),
            new Paragraph({
              alignment: AlignmentType.CENTER,
              spacing: {
                line: 20,
                before: 20,
                after: 20,
              },
              children: [
                new TextRun({
                  text: "MEDICO VETERINARIO",
                  bold: true,
                  font: "Calibri Light",
                  size: 25,
                }),
              ],
            }),
            new Paragraph({
              alignment: AlignmentType.CENTER,
              children: [
                new TextRun({
                  text: `${String(selectDoctor?.jvpmv).toUpperCase()}`,
                  bold: true,
                  font: "Calibri Light",
                  size: 25,
                }),
              ],
            }),
            new Paragraph({
              alignment: AlignmentType.CENTER,
              spacing: {
                line: 950,
                before: 950,
                after: 950,
              },
              children: [
                new TextRun({
                  text: "CERTIFICADO SANITARIO",
                  bold: true,
                  font: "Calibri Light",
                  size: 40,
                }),
              ],
            }),
            new Paragraph({
              alignment: AlignmentType.JUSTIFY,
              children: [
                new TextRun({
                  text: "A QUIEN INTERESE:",
                  bold: true,
                  font: "Calibri Light",
                  size: 20,
                }),
              ],
            }),
            new Paragraph({
              alignment: AlignmentType.JUSTIFY,
              spacing: {
                line: 200,
                before: 200,
                after: 200,
              },
              children: [
                new TextRun({
                  text: `EL INFRAESCRITO MEDICO VETERINARIO HACE CONSTAR QUE EN ESTE FECHA HA EXAMINADO: UN CANINO ${String(
                    selectPat?.sexes?.type
                  ).toUpperCase()}, DE RAZA ${String(
                    selectPat?.breeds?.type
                  ).toUpperCase()},DE COLOR ${String(
                    selectPat?.colors?.type
                  ).toUpperCase()} DE ${String(
                    selectPat?.age
                  ).toUpperCase()} DE EDAD QUE CORRESPONDE AL NOMBRE DE ${String(
                    selectPat?.names
                  ).toUpperCase()}.`,
                  bold: true,
                  font: "Calibri Light",
                  size: 20,
                }),
              ],
            }),
            new Paragraph({
              alignment: AlignmentType.JUSTIFY,
              spacing: {
                line: 200,
                before: 200,
                after: 200,
              },
              children: [
                new TextRun({
                  text: `PROPIEDAD DE: ${String(
                    custom
                      ? custom
                      : selectPat?.customers?.names +
                          " " +
                          selectPat?.customers?.lastname
                  ).toUpperCase()} `,
                  bold: true,
                  font: "Calibri Light",
                  size: 20,
                }),
              ],
            }),
            new Paragraph({
              alignment: AlignmentType.JUSTIFY,
              spacing: {
                line: 100,
                before: 100,
                after: 100,
              },
              children: [
                new TextRun({
                  text: "CONSIGNATARIO EL MISMO.",
                  bold: true,
                  font: "Calibri Light",
                  size: 20,
                }),
              ],
            }),
            new Paragraph({
              alignment: AlignmentType.JUSTIFY,
              spacing: {
                line: 100,
                before: 100,
                after: 100,
              },
              children: [
                new TextRun({
                  text: `QUE DESEA LLEVARLO: A ${String(
                    contry
                  ).toUpperCase()}.`,
                  bold: true,
                  font: "Calibri Light",
                  size: 20,
                }),
              ],
            }),
            new Paragraph({
              alignment: AlignmentType.JUSTIFY,
              spacing: {
                line: 200,
                before: 200,
                after: 200,
              },
              children: [
                new TextRun({
                  text: `HABIENDOSE ENCONTRADO: A ESTE EJEMPLAR, AL MOMENTO DE LA INSPECCION LIBRE DE ENFERMEDADES INFECTOCONTAGIOSAS O PARASITARIAS, AL MISMO TIEMPO DOY FE DE HABER CONFIRMADO SU INMUNIZACION, CON EL ESQUEMA DE VACUNACION CORRESPONDIENTE A LA FECHA`,
                  bold: true,
                  font: "Calibri Light",
                  size: 20,
                }),
              ],
            }),
            new Paragraph({
              alignment: AlignmentType.JUSTIFY,
              spacing: {
                line: 200,
                before: 200,
                after: 200,
              },
              children: [
                new TextRun({
                  text: `Y PARA LOS USOS QUE ESTIME CONVENIENTE SE EXTIENDE LA PRESENTE, EN LA CIUDAD DE SONSONATE, DEPARTAMENTE DE SONSONATE, A LOS VEINTITRES DIAS DEL MES DE AGOSTO DE DOS MIL VEINTIUNO`,
                  bold: true,
                  font: "Calibri Light",
                  size: 20,
                }),
              ],
            }),
            new Paragraph({
              alignment: AlignmentType.CENTER,
              spacing: {
                line: 950,
                before: 950,
              },
              children: [
                new TextRun({
                  text: `DR.  ${String(
                    selectDoctor?.users.names +
                      " " +
                      selectDoctor?.users.lastnames
                  ).toUpperCase()}`,
                  bold: true,
                  font: "Calibri Light",
                  size: 20,
                }),
              ],
            }),
            new Paragraph({
              alignment: AlignmentType.CENTER,
              children: [
                new TextRun({
                  text: "AVENIDA MORAZAN, BARRIO MEJICANOS, LOCAL No. 8-10, SONSONATE",
                  bold: true,
                  font: "Calibri Light",
                  size: 20,
                }),
              ],
            }),
            new Paragraph({
              alignment: AlignmentType.CENTER,
              children: [
                new TextRun({
                  text: "TEL: 2451-9309",
                  bold: true,
                  font: "Calibri Light",
                  size: 20,
                }),
              ],
            }),
          ],
        },
      ],
    });

    Packer.toBlob(doc).then((blob) => {
      saveAs(blob, `CS-${selectPat?.names}-${selectPat?.exp}.docx`);
    });
  }
  console.log(selectDoctor);
  return (
    <div>
      <div>
        <label className="text-sm">Paciente</label>
        <div className="flex">
          <input
            readOnly
            defaultValue={selectPat && selectPat?.names}
            placeholder="Selecciona el paciente"
            className="w-full px-2 rounded border outline-none"
          />
          <button
            onClick={() => setShowModalPat(true)}
            className="whitespace-nowrap px-4 py-1 bg-green-500 text-white rounded ml-3"
          >
            Seleccionar paciente
          </button>
        </div>
      </div>
      <div className="mt-6">
        <label className="text-sm">Doctor</label>
        <div className="flex">
          <input
            className="w-full rounded border px-2 outline-none"
            readOnly
            placeholder="Selecciona el doctor"
            defaultValue={
              selectDoctor &&
              selectDoctor?.users.names + " " + selectDoctor?.users.lastnames
            }
          />
          <button
            onClick={() => setShowModalDoctor(true)}
            className="whitespace-nowrap px-4 py-1 bg-green-500 text-white rounded ml-3"
          >
            Seleccionar Doctor
          </button>
        </div>
      </div>
      <div className="mt-6 grid grid-cols-2 gap-6">
        <div>
          <label className="text-sm">Pais de viaje</label>
          <div className="flex">
            <input
              placeholder="Escribe el pais de viaje"
              onChange={(e) => setContry(e.currentTarget.value)}
              className="w-full rounded border outline-none px-2"
            />
          </div>
        </div>
        <div>
          <label className="text-sm">Dueño</label>
          <div className="flex">
            <input
              placeholder="Escribe el nombre del dueño de la mascota"
              onChange={(e) => setCustom(e.currentTarget.value)}
              className="w-full rounded border outline-none px-2"
            />
          </div>
        </div>
      </div>
      <button
        onClick={generate}
        className="bg-blue-500 text-white rounded py-1 px-8 mt-6"
      >
        Generar Certificado Sanitario
      </button>
      <Modal
        showModal={showModalPat}
        setShowModal={setShowModalPat}
        title="Seleccionar paciente"
      >
        <SelectPatient
          setPatientToQuote={setSelectPat}
          setPage={setPage}
          setSearch={setSearch}
          search={search}
          patients={patients}
          setShowModalSelectPat={setShowModalPat}
        />
      </Modal>
      <Modal
        showModal={showModalDoctor}
        setShowModal={setShowModalDoctor}
        title="Seleccionar doctor"
      >
        <SelectDoctor
          setDoctorToQuote={setSelectDoctor}
          setShowModalSelectDoc={setShowModalDoctor}
          doctors={doctors}
          setSearch={setSearchDoc}
          setPage={setPageDoc}
        />
      </Modal>
    </div>
  );
}
