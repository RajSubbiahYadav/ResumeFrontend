// import {
//   GoogleGenerativeAI,
//   HarmCategory,
//   HarmBlockThreshold,
// } from '@google-cloud/generativeai';
  
//   const apiKey = import.meta.env.VITE_GOOGLE_AI_API_KEY;
//   const genAI = new GoogleGenerativeAI(apiKey);
  
//   const model = genAI.getGenerativeModel({
//     model: "gemini-1.5-flash",
//   });
  
//   const generationConfig = {
//     temperature: 1,
//     topP: 0.95,
//     topK: 40,
//     maxOutputTokens: 8192,
//     responseMimeType: "text/plain",
//   };
  
  
//     export const AIChatSession = model.startChat({
//       generationConfig,
//       // safetySettings:Adjust safety settings
//       // see https://ai.google.dev/gemini-api/docs/safety-settings
//       history: [
//       ],
//     });
  
import { model, generationConfig } from './ai-client';

export const AIChatSession = model.startChat({
  generationConfig,
  // safetySettings:Adjust safety settings
  // see https://ai.google.dev/gemini-api/docs/safety-settings
  history: [
    // ...
  ],
});