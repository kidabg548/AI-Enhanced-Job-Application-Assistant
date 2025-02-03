import React, { useState } from 'react';
import { GoogleGenerativeAI } from "@google/generative-ai";
import FeedbackModal from './FeedbackModal';
import PromptingForm from './PromptingForm';

const API_KEY= import.meta.env.VITE_API_KEY;

const genAI = new GoogleGenerativeAI(API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-pro"});

const  CoverLetterGenerator = ({userPreferences}) => {
    const [jobDescription, setJobDescription] = useState('');
    const [resumeInfo, setResumeInfo] = useState('');
    const [coverLetter, setCoverLetter] = useState('');
    const [loading, setLoading] = useState(false);
    const [feedbackModalOpen, setFeedbackModalOpen] = useState(false);
    const [feedback, setFeedback] = useState('');
    const [feedbackTarget, setFeedbackTarget] = useState(null);

    const handleGenerateCoverLetter = async () => {
        setLoading(true);
        try {
            const prompt = `
            You are an expert career coach specializing in crafting compelling cover letters. Generate a cover letter based on the following job description: ${jobDescription} 
              and the following resume information: ${resumeInfo}. 
    
             Ensure the cover letter includes the following structure: 
                 1.  A brief and compelling introduction that grabs the reader's attention.
                 2.  A paragraph highlighting 2-3 most relevant skills and experiences for this specific job using examples from the resume.
                 3.  A closing paragraph restating the interest in the position and a call to action to the reader. 
    
              Keep the letter concise and professional and use a ${userPreferences.tone} tone, be sure to use active voice. 
               Emphasize and use the following keywords and phrases within the letter: ${userPreferences.keywords}.  Be sure to highlight the following accomplishments: ${userPreferences.accomplishments}.
    
              Avoid generic phrases like 'hard-working', 'team player' or 'motivated'. Instead, use specific examples based on the resume.
    
              Format the output as a well-formatted letter with proper paragraphs and spacing.
              `;
          const result = await model.generateContent(prompt);
          const response = await result.response;
          const text = response.text();
          setCoverLetter(text);
          console.log("got cover letter",text);
      }
       catch (error) {
            console.error("Error generating cover letter:", error);
            setCoverLetter("Error generating cover letter, check console for details");
        } finally {
            setLoading(false);
        }
    };

    const handleOpenFeedbackModal = () => {
      setFeedbackTarget('coverLetter');
      setFeedbackModalOpen(true);
    };
    const handleCloseFeedbackModal = () => {
      setFeedbackModalOpen(false);
      setFeedback('');
      setFeedbackTarget(null);
    }

    const handleFeedbackSubmit = async () => {
      setLoading(true);
      try {
        const prompt = `Here's the initial cover letter: ${coverLetter}. A user rated this cover letter with the following feedback: ${feedback}. Based on the job description: ${jobDescription}, resume information: ${resumeInfo}, and the feedback from the user, generate an improved version of the cover letter. Keep the letter concise, emphasize relevant skills for this role, use a ${userPreferences.tone} tone. Be sure to include these keywords and phrases: ${userPreferences.keywords}, and highlight these accomplishments: ${userPreferences.accomplishments}. Avoid using common overused phrases like 'highly motivated' or 'team player'.`
        const result = await model.generateContent(prompt);
          const response = await result.response;
          const text = response.text();
          setCoverLetter(text);
          console.log("got improved cover letter",text);

      } catch(error){
        console.error("error improving cover letter", error)
        setCoverLetter("Error improving cover letter, check console for details")
      }
      finally{
        setLoading(false);
        handleCloseFeedbackModal();
      }
    }

    return (
        <div className="bg-white rounded-lg shadow-md p-4">
            <h2 className="text-xl font-semibold mb-4">Cover Letter Generator</h2>
            <PromptingForm
                  jobDescription={jobDescription}
                  setJobDescription={setJobDescription}
                  resumeInfo={resumeInfo}
                  setResumeInfo={setResumeInfo}
                  onSubmit={handleGenerateCoverLetter}
                  loading={loading}
            />

            {coverLetter && (
                <div className="mt-4 border-t pt-4">
                    <h3 className="text-lg font-semibold mb-2">Generated Cover Letter:</h3>
                    <p className="whitespace-pre-line">{coverLetter}</p>
                      <button
                          onClick={handleOpenFeedbackModal}
                          className="mt-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                              Provide Feedback
                        </button>
                </div>
            )}
              <FeedbackModal
                    isOpen={feedbackModalOpen}
                    onClose={handleCloseFeedbackModal}
                    onSubmit={handleFeedbackSubmit}
                    feedback={feedback}
                    setFeedback={setFeedback}
                  />

        </div>
    );
};

export default CoverLetterGenerator;