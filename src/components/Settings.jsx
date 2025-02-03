import React from 'react';

const Settings = ({ onSettingsChange, userPreferences }) => {
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    onSettingsChange({ ...userPreferences, [name]: value });
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-4 mb-4">
      <h2 className="text-xl font-semibold mb-4">Settings</h2>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Preferred Tone:
        </label>
        <select
          name="tone"
          value={userPreferences.tone}
          onChange={handleInputChange}
          className="shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        >
          <option value="formal">Formal</option>
          <option value="enthusiastic">Enthusiastic</option>
          <option value="professional">Professional</option>
        </select>
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Keywords/Phrases:
        </label>
        <input
          type="text"
          name="keywords"
          value={userPreferences.keywords}
          onChange={handleInputChange}
          className="shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          placeholder="Enter comma separated keywords or phrases"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Accomplishments:
        </label>
         <input
           type="text"
           name="accomplishments"
          value={userPreferences.accomplishments}
           onChange={handleInputChange}
           className="shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          placeholder="Enter comma separated accomplishments"
        />
      </div>
    </div>
  );
};

export default Settings;