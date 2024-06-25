import OpenAI from "openai";

export const openai = new OpenAI({
  organization: "org-ZcHm7uC3kZo0V57fMu383uIs",
  apiKey: process.env.NEXT_PUBLIC_OPENAI_API_KEY,
  dangerouslyAllowBrowser: true,
});
