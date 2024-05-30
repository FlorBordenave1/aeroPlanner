export const useDocumentationController = () => {
  const documentationMock = [
    {
      Title: "manuals",
      files: [
        {
          name: "Documentacion LV-S105",
          path: "https://pdfobject.com/pdf/sample.pdf",
        },
        {
          name: "337 LV-2105",
          path: "https://pdfobject.com/pdf/sample.pdf",
        },
        {
          name: "KJX f337",
          path: "https://pdfobject.com/pdf/sample.pdf",
        },
      ],
    },
    {
      Title: "rules",
      files: [],
    },
    {
      Title: "planes",
      files: [
        {
          name: "Matricula prov",
          path: "https://pdfobject.com/pdf/sample.pdf",
        },
        {
          name: "337 LV-2105",
          path: "https://pdfobject.com/pdf/sample.pdf",
        },
        {
          name: "PolizaFlota",
          path: "https://pdfobject.com/pdf/sample.pdf",
        },
      ],
    },
  ];

  return { documentationMock };
};
