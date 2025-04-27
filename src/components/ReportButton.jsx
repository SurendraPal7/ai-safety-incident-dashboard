import React from 'react';

function ReportButton({ showForm, setShowForm }) {
  return (
    <div className="mb-6">
      <button
        onClick={() => setShowForm(!showForm)}
        className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded transition"
      >
        {showForm ? "Close Form" : "Report New Incident"}
      </button>
    </div>
  );
}

export default ReportButton;
