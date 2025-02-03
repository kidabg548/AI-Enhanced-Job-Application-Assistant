# AI-Enhanced Job Application Assistant

## Samuel Michu Bezabih

## Overview

This project is a single-page web application designed to streamline the job application process. It leverages the power of generative AI (specifically Google's Gemini API) to help users create tailored cover letters based on job descriptions and their resume information. The application goes beyond simple generation by incorporating user feedback and personal preferences for tone and content.

## Core Idea

The core idea behind the AI-Enhanced Job Application Assistant is to make the often tedious process of creating cover letters more efficient and effective. Instead of starting from scratch each time, users can input their resume and job description, and the AI will generate a customized cover letter that aligns with the specific job requirements. The application also allows users to refine the output by providing feedback that the AI will incorporate to improve results over time.

## Prompting Techniques

This application utilizes several advanced prompting techniques to achieve its functionality:

*   **Zero-Shot Prompting (Initial Generation):**
    *   **Purpose:** To generate the initial cover letter content based on the job description and resume information.
    *   **Implementation:** The application provides an initial prompt that provides all relevant information for the AI, as well as a clear instruction to generate the content and the general instructions to avoid common phrases.
    *   **Example:**
        ```javascript
         `You are an expert career coach specializing in crafting compelling cover letters. Generate a cover letter based on the following job description: ${jobDescription} 
                and the following resume information: ${resumeInfo}. 

               Ensure the cover letter includes the following structure: 
                   1.  A brief and compelling introduction that grabs the reader's attention.
                   2.  A paragraph highlighting 2-3 most relevant skills and experiences for this specific job using examples from the resume.
                   3.  A closing paragraph restating the interest in the position and a call to action to the reader. 

                Keep the letter concise and professional and use a ${userPreferences.tone} tone, be sure to use active voice. 
                 Emphasize and use the following keywords and phrases within the letter: ${userPreferences.keywords}.  Be sure to highlight the following accomplishments: ${userPreferences.accomplishments}.

                Avoid generic phrases like 'hard-working', 'team player' or 'motivated'. Instead, use specific examples based on the resume.

                Format the output as a well-formatted letter with proper paragraphs and spacing.
            `
        ```

*   **Contextual Prompting (Personalization):**
    *   **Purpose:** To allow users to customize the AI's output based on their personal preferences.
    *   **Implementation:** The application allows users to select their preferred tone (formal, enthusiastic, professional), as well as include comma-separated lists of keywords and accomplishments to highlight in the generated letter. These preferences are included in the prompt to provide context.
    *   **Example:** The prompt will utilize the following to personalize the output: `${userPreferences.tone}`, `${userPreferences.keywords}`, and `${userPreferences.accomplishments}`.
*  **Negative Prompting (Avoiding Common Phrases):**
     *  **Purpose:** To ensure the cover letter is unique and does not use generic or overused language.
     *   **Implementation:** The prompt will explicitly tell the AI to avoid common and overused phrases, and provide a specific example of phrases to avoid, it also reinforces using specific examples from the resume to achieve a more unique result.
     *   **Example:** The prompts includes the explicit instruction: `Avoid generic phrases like 'hard-working', 'team player' or 'motivated'. Instead, use specific examples based on the resume.`
*   **Iterative Prompting (Feedback Loop):**
    *   **Purpose:** To refine the AI's output based on the user's feedback.
    *   **Implementation:** Users are able to submit feedback, which is then used to create a new prompt for the AI to generate an improved cover letter.
  * **Specific Instructions:**
     *  **Purpose:** To provide a more specific guidance on how the AI should complete the task.
     *   **Implementation:** The prompts include specific instructions on formatting, structure, tone and voice.
     *   **Example:** In the prompts you can see instructions such as `Format the output as a well-formatted letter with proper paragraphs and spacing.`, `Keep the letter concise and professional and use a ${userPreferences.tone} tone, be sure to use active voice.`, and  `Ensure the cover letter includes the following structure`.

## Parameter Adjustments

The application utilizes the following parameters from the Gemini API:

*   **`model: "gemini-pro"`:** This parameter uses the `gemini-pro` model which is optimal for text-generation.
*   **Temperature:**  The temperature parameter is set to 0.7. This provides a balance between creativity and consistency. It allows for some variation in the output but encourages coherence, leading to more suitable cover letter text. This setting is adjustable in the code by the developer to fine-tune the balance of creativity and accuracy.
*  **Max Tokens:** The maxOutputTokens parameter is set to 800. This limits the generated output length, ensuring cover letters remain concise and focused on the most relevant information. It also prevents excessively long outputs. The parameter is adjustable in code to fine-tune response length.
*   **Top-P (Nucleus Sampling):**  The topP parameter is set to 0.9. This encourages the model to choose the most likely tokens, promoting coherent and relevant responses but allowing some diversity in its output. This setting is adjustable in the code by the developer to find a suitable diversity for responses.

