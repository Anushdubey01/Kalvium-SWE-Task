import React from 'react';

const Controls = ({ pageNumber, goToPage }) => (
  <div className="controls flex gap-8 space-x-4">
    <button
      onClick={() => goToPage(pageNumber - 1)}
      disabled={pageNumber <= 1}
      className="px-6 py-3 bg-red-600 text-white font-semibold rounded-lg disabled:bg-gray-500"
    >
      ◀
    </button>
    <button
      onClick={() => goToPage(pageNumber + 1)}
      className="px-6 py-3 bg-green-600 text-white font-semibold rounded-lg"
    >
      ▶
    </button>
  </div>
);

export default Controls;
