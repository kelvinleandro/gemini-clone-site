import { GPTContext, GPTContextType } from "@/context/GPTContext";
import { useContext } from "react";

export const useGPT = (): GPTContextType => {
  const context = useContext(GPTContext);
  if (!context) {
    throw new Error("useGPTContext must be used within a GPTProvider");
  }
  return context;
};
