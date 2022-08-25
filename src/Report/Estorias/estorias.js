import pdfMake from "pdfmake/build/pdfmake";
import pdfFonts from "pdfmake/build/vfs_fonts";
import api from "../../sevices/api";




function EstoriasPdf() {
  pdfMake.vfs = pdfFonts.pdfMake.vfs;
  
  
  const title = "Título da constante ";
  const euComo = "Eu como da constante ";
  const euQuero = "Eu quero da constante ";
  const para = "Para da constante ";

  const reportTitle = [
    {
      text: title,
      fontSize: 15,
      bold: true,
      margin: [15, 20, 0, 45],
    },
  ];

  const reportBase = [
    {
      table: {
        headersRows: 1,
        widths: ["*", "*", "*"],
        body: [
          [
            {
              text: "EU COMO",
              style: "tableHeader",
              fontSize: 10,
            },
            {
              text: "QUERO",
              style: "tableHeader",
              fontSize: 10,
            },
            {
              text: "PARA",
              style: "tableHeader",
              fontSize: 10,
            },
          ],
          [
            {
              text: euComo,
              style: "tableHeader",
              fontSize: 10,
            },
            {
              text: euQuero,
              style: "tableHeader",
              fontSize: 10,
            },
            {
              text: para,
              style: "tableHeader",
              fontSize: 10,
            },
          ],
        ],
      },
      layout: "headerLineOnly",
    },
  ];

  const docDefinitions = {
    pageSize: "A4",
    pageMargins: [15, 50, 15, 40],

    header: [reportTitle],
    content: [reportBase],
  };

  pdfMake.createPdf(docDefinitions).download();
}

export default EstoriasPdf;
