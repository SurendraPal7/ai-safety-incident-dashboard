import React from 'react';

export default function IncidentItem({ incident, isExpanded, onToggle }) {
  // Map severity to background colors and badge colors
  const severityBgColor = {
    Low: "bg-green-100",
    Medium: "bg-purple-300",
    High: "bg-red-300",
  };

  const severityBadgeColor = {
    Low: "bg-green-500",
    Medium: "bg-purple-500",
    High: "bg-red-500",
  };

  return (
    <div className={`border p-4 rounded shadow hover:bg-gray-50 transition ${severityBgColor[incident.severity]}`}>
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-xl font-semibold">{incident.title}</h2>
          <p className="text-gray-600 flex items-center gap-2 mt-1">
            Severity: 
            <span className={`w-3 h-3 rounded-full inline-block ${severityBadgeColor[incident.severity]}`}></span> 
            <span className="font-medium">{incident.severity}</span> 
            | Reported: {new Date(incident.reported_at).toLocaleDateString()}
          </p>
        </div>
        <button
          onClick={() => onToggle(incident.id)}
          className="text-blue-500 hover:underline"
        >
          {isExpanded ? "Hide Details" : "View Details"}
        </button>
      </div>

      {/* Animated transition for details */}
      <div
        className={`overflow-hidden transition-all duration-500 ease-in-out ${isExpanded ? "max-h-96 opacity-100 mt-4" : "max-h-0 opacity-0"}`}
      >
        <div className="text-gray-700">{incident.description}</div>
      </div>
    </div>
  );
}
