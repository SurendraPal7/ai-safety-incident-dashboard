import React from 'react';
import IncidentItem from './IncidentItem';

export default function IncidentList({ incidents, expandedIds, onToggleDetails }) {
  return (
    <div className="grid gap-4 mb-10">
      {incidents.map((incident) => (
        <IncidentItem
          key={incident.id}
          incident={incident}
          isExpanded={expandedIds.includes(incident.id)}
          onToggle={onToggleDetails}
        />
      ))}
    </div>
  );
}
