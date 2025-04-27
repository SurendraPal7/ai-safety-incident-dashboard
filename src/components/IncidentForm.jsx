import React, { useState } from 'react';

export default function IncidentForm({ onAddIncident }) {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    severity: 'Low',
  });
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.title.trim() || !formData.description.trim()) {
      setError('Title and Description are required.');
      return;
    }
    onAddIncident(formData);
    setFormData({ title: '', description: '', severity: 'Low' });
    setError('');
  };

  return (
    <div className="border p-6 rounded shadow">
      <h2 className="text-2xl font-semibold mb-4">Report New Incident</h2>
      {error && <p className="text-red-500 mb-2">{error}</p>}
      <form onSubmit={handleSubmit} className="grid gap-4">
        <input
          type="text"
          name="title"
          placeholder="Incident Title"
          className="border p-2 rounded"
          value={formData.title}
          onChange={handleChange}
        />
        <textarea
          name="description"
          placeholder="Incident Description"
          className="border p-2 rounded"
          value={formData.description}
          onChange={handleChange}
        ></textarea>
        <select
          name="severity"
          className="border p-2 rounded"
          value={formData.severity}
          onChange={handleChange}
        >
          <option value="Low">Low</option>
          <option value="Medium">Medium</option>
          <option value="High">High</option>
        </select>
        <div className="flex justify-center mt-4">
        <button className="bg-blue-700 hover:bg-gray-800 text-white py-2 px-6 rounded">
          Submit Incident
        </button>
      </div>
      </form>
    </div>
  );
}
