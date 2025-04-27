import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Filters from './components/Filters';
import IncidentList from './components/IncidentList';
import IncidentForm from './components/IncidentForm';
import './index.css';

const initialIncidents = [
  {
    id: 1,
    title: "Biased Recommendation Algorithm",
    description: "Algorithm consistently favored certain demographics...",
    severity: "Medium",
    reported_at: "2025-03-15T10:00:00Z",
  },
  {
    id: 2,
    title: "LLM Hallucination in Critical Info",
    description: "LLM provided incorrect safety procedure information...",
    severity: "High",
    reported_at: "2025-04-01T14:30:00Z",
  },
  {
    id: 3,
    title: "Minor Data Leak via Chatbot",
    description: "Chatbot inadvertently exposed non-sensitive user metadata...",
    severity: "Low",
    reported_at: "2025-03-20T09:15:00Z",
  },
];

function App() {
  const [incidents, setIncidents] = useState(initialIncidents);
  const [severityFilter, setSeverityFilter] = useState('All');
  const [sortOrder, setSortOrder] = useState('Newest');
  const [expandedIds, setExpandedIds] = useState([]);
  const [successMessage, setSuccessMessage] = useState('');  // Added success message state

  const handleSeverityChange = (e) => setSeverityFilter(e.target.value);
  const handleSortChange = (e) => setSortOrder(e.target.value);

  const toggleDetails = (id) => {
    setExpandedIds((prev) =>
      prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]
    );
  };

  const addIncident = (newIncident) => {
    const incidentToAdd = {
      ...newIncident,
      id: incidents.length + 1,
      reported_at: new Date().toISOString(),
    };
    setIncidents((prev) => [incidentToAdd, ...prev]);

    // Set the success message
    setSuccessMessage('Report added successfully!');

    // Hide the success message after 3 seconds
    setTimeout(() => setSuccessMessage(''), 3000);
  };

  const filteredIncidents = incidents.filter((incident) =>
    severityFilter === 'All' ? true : incident.severity === severityFilter
  );

  const sortedIncidents = [...filteredIncidents].sort((a, b) =>
    sortOrder === 'Newest'
      ? new Date(b.reported_at) - new Date(a.reported_at)
      : new Date(a.reported_at) - new Date(b.reported_at)
  );

  return (
    <Router>
      <div className="max-w-5xl mx-auto p-6 bg-[#4f7058] min-h-screen text-black">
      <h1 className="text-2xl font-bold mb-4 text-white text-center underline p-3 border-2 border-gray-700 rounded-lg bg-gray-800 w-1/2 mx-auto">
  AI Safety Incident Dashboard
</h1>



        {/* Success Message Popup */}
        {successMessage && (
          <div className="fixed top-4 left-1/2 transform -translate-x-1/2 bg-green-600 text-white py-2 px-6 rounded-lg shadow-lg">
            {successMessage}
          </div>
        )}

        <Routes>
          <Route
            path="/"
            element={
              <>
                <Filters
                  severityFilter={severityFilter}
                  sortOrder={sortOrder}
                  onSeverityChange={handleSeverityChange}
                  onSortChange={handleSortChange}
                />
                <IncidentList
                  incidents={sortedIncidents}
                  expandedIds={expandedIds}
                  onToggleDetails={toggleDetails}
                />
                
                {/* Button at Bottom */}
                <div className="flex justify-center mt-8">
                  <Link to="/report">
                    <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded transition">
                      Report New Incident
                    </button>
                  </Link>
                </div>
              </>
            }
          />

          {/* New Page for Reporting Incident */}
          <Route
            path="/report"
            element={
              <div>
                <IncidentForm onAddIncident={addIncident} />
                <div className="flex justify-center mt-4">
                  <Link to="/">
                    <button className="bg-gray-700 hover:bg-gray-800 text-white py-2 px-6 rounded">
                      Back to Dashboard
                    </button>
                  </Link>
                </div>
              </div>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
