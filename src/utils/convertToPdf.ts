import html2pdf from 'html2pdf.js';

export const convertToPdf = (content: HTMLDivElement, filename: string) => {
  
  const options = {
    filename: `${filename}.pdf`,
    margin: 1,
    image: { type: 'jpeg', quality: 0.98 },
    html2canvas: { scale: 2 },
    jsPDF: {
      unit: 'in',
      format: 'letter',
      orientation: 'portrait',
    },
  };

  html2pdf().set(options).from(content).save();
};