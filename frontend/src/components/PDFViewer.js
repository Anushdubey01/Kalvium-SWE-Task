import React, { useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';

pdfjs.GlobalWorkerOptions.workerSrc = `https://unpkg.com/pdfjs-dist@2.16.105/build/pdf.worker.min.js`;

const PDFViewer = ({ pageNumber }) => {
  const [zoomLevel, setZoomLevel] = useState(1);

  return (
    <div className="pdf-viewer h-[850px] bg-[#1F2937] shadow-xl p-6 mb-6 rounded-xl overflow-hidden">
      <Document file="/sample.pdf">
        <Page pageNumber={pageNumber} scale={zoomLevel} />
      </Document>
      <button onClick={() => setZoomLevel(zoomLevel + 0.1)}>Zoom In</button>
      <button onClick={() => setZoomLevel(zoomLevel - 0.1)}>Zoom Out</button>
    </div>
  );
};

export default PDFViewer;
