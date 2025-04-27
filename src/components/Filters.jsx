import React from 'react';

export default function Filters({ severityFilter, sortOrder, onSeverityChange, onSortChange }) {
  return (
    <div className="flex gap-4 mb-6 justify-between w-full">
      {/* Severity Filter as Buttons */}
      <div className="flex gap-4 w-full">
      <button
          onClick={() => onSeverityChange({ target: { value: 'All' } })}
          className={`flex-1 py-2 px-4 rounded ${severityFilter === 'All' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
        >
          All
        </button>

        <button
          onClick={() => onSeverityChange({ target: { value: 'High' } })}
          className={`flex-1 py-2 px-4 rounded ${severityFilter === 'High' ? 'bg-red-500 text-white' : 'bg-gray-200'}`}
        >
          High
        </button>

      
        <button
          onClick={() => onSeverityChange({ target: { value: 'Medium' } })}
          className={`flex-1 py-2 px-4 rounded ${severityFilter === 'Medium' ? 'bg-purple-500 text-white' : 'bg-gray-200'}`}
        >
          Medium
        </button>

        <button
          onClick={() => onSeverityChange({ target: { value: 'Low' } })}
          className={`flex-1 py-2 px-4 rounded ${severityFilter === 'Low' ? 'bg-green-500 text-white' : 'bg-gray-200'}`}
        >
          Low
        </button>
        
       
       
      </div>

      {/* Sort Buttons */}
      <div className="flex gap-4 w-full">
        <button
          onClick={() => onSortChange({ target: { value: 'Newest' } })}
          className={`flex-1 py-2 px-4 rounded ${sortOrder === 'Newest' ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}
        >
          Newest
        </button>
        <button
          onClick={() => onSortChange({ target: { value: 'Oldest' } })}
          className={`flex-1 py-2 px-4 rounded ${sortOrder === 'Oldest' ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}
        >
          Oldest
        </button>
      </div>
    </div>
  );
}
