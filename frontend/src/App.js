import React from 'react';
import PDFViewer from './components/PDFViewer';
import Controls from './components/Controls';
import FileUpload from './components/FileUpload';
import useSocket from './hooks/useSocket';
import 'animate.css';
import './App.css';

function App() {
  const { pageNumber, setPageNumber, goToPage } = useSocket();

  return (
    <div className="App min-h-screen flex flex-col items-center justify-center p-5"
      style={{ backgroundImage: `url('/background_1.jpg')`, backgroundSize: 'cover', backgroundPosition: 'center' }}
    >
      <h1 className="text-5xl font-mono text-red-500 mb-6 animate__animated animate__fadeIn">
        Kalvium Task - Rohan Wetal
      </h1>
      <h2 className="text-2xl font-bold text-teal-500 mb-6 animate__animated animate__fadeIn">
        Page - {pageNumber}
      </h2>
      
      <PDFViewer pageNumber={pageNumber} setPageNumber={setPageNumber} />
      <FileUpload setPageNumber={setPageNumber} />
      <Controls pageNumber={pageNumber} goToPage={goToPage} />
    </div>
  );
}

export default App;
