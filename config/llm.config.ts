export interface LLMConfig {
  apiKey: string;
  model: string;
  temperature: number;
}

export const llmConfig: LLMConfig = {
  apiKey: process.env.GEMINI_API_KEY || '',
  model: 'gemini-pro',
  temperature: 0.7
}; 