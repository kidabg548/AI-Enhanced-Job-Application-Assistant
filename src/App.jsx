import React, { useState } from "react";
import CoverLetterGenerator from "./components/CoverLetterGenerator";
import Settings from "./components/Settings";
import "./index.css";

function App() {
  const [userPreferences, setUserPreferences] = useState({
    tone: "formal",
    keywords: "",
    accomplishments: "",
  });

  const handleSettingsChange = (newPreferences) => {
    setUserPreferences(newPreferences);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 flex flex-col items-center justify-center px-4">
      <h1 className="text-4xl font-extrabold text-gray-900 mb-6 text-center">
        AI Job Application Assistant
      </h1>

      <div className="w-full max-w-3xl bg-white shadow-lg rounded-2xl p-6 md:p-8">
        <div className="mb-6">
          <Settings
            onSettingsChange={handleSettingsChange}
            userPreferences={userPreferences}
          />
        </div>

        <div className="w-full">
          <CoverLetterGenerator userPreferences={userPreferences} />
        </div>
      </div>
    </div>
  );
}

export default App;
