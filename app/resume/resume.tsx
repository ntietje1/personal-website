'use client'
import React, { useEffect, useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;
// pdfjs.GlobalWorkerOptions.workerSrc = new URL(
//   'pdfjs-dist/legacy/build/pdf.worker.min.mjs',
//   import.meta.url,
// ).toString();
const resumePath = 'https://tietje-resume-bucket.s3.amazonaws.com/Nicholas_Tietje_Resume.pdf';

function Resume() {
  const [width, setWidth] = useState(1200);

  useEffect(() => {
    const updateWidth = () => {
      setWidth(window.innerWidth);
    };
    window.addEventListener('resize', updateWidth);
    return () => window.removeEventListener('resize', updateWidth);
  }, []);

  return (
    <div className="flex justify-center">
      <Document file={resumePath} className="flex justify-center w-full">
        <Page pageNumber={1} scale={width > 786 ? 1.7 : 0.6} renderTextLayer={false} />
      </Document>
    </div>
  );
}

export default Resume;