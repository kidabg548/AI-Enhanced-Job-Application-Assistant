import React from 'react';

const FeedbackModal = ({ isOpen, onClose, onSubmit, feedback, setFeedback }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-6 rounded-lg shadow-md w-96">
        <h2 className="text-xl font-semibold mb-4">Provide Feedback</h2>
        <textarea
          className="w-full p-2 border rounded mb-4"
          rows="4"
          placeholder="Enter your feedback here..."
          value={feedback}
          onChange={(e) => setFeedback(e.target.value)}
        />
        <div className="flex justify-end">
          <button onClick={onClose} className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded mr-2">
            Cancel
          </button>
          <button onClick={onSubmit} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default FeedbackModal;