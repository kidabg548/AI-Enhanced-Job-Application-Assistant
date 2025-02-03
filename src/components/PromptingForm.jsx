import React from "react";

const PromptingForm = ({
  jobDescription,
  setJobDescription,
  resumeInfo,
  setResumeInfo,
  onSubmit,
  loading,
}) => {
  return (
    <div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Job Description:
        </label>
        <textarea
          className="shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          rows="4"
          placeholder="Paste job description here..."
          value={jobDescription}
          onChange={(e) => setJobDescription(e.target.value)}
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Resume Info:
        </label>
        <textarea
          className="shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          rows="4"
          placeholder="Paste resume info here..."
          value={resumeInfo}
          onChange={(e) => setResumeInfo(e.target.value)}
        />
      </div>
      <button
        onClick={onSubmit}
        disabled={loading}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded disabled:bg-blue-300"
      >
        {loading ? "Generating..." : "Generate"}
      </button>
    </div>
  );
};
export default PromptingForm;
