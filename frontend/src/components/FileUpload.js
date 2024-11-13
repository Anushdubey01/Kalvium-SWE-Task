import React from 'react';
import { FiFile } from "react-icons/fi";

const FileUpload = ({ setPageNumber }) => {
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file && file.type === 'application/pdf') {
      setPageNumber(1);
    } else {
      alert('Please select a valid PDF file.');
    }
  };

  return (
    <div className="mb-6">
      <label
        htmlFor="file-input"
        className="cursor-pointer px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg flex items-center gap-2"
      >
        <FiFile className="text-xl" /> Choose PDF File
      </label>
      <input
        id="file-input"
        type="file"
        accept="application/pdf"
        onChange={handleFileChange}
        className="hidden"
      />
    </div>
  );
};

export default FileUpload;
