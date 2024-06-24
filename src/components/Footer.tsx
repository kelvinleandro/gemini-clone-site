import React from "react";
import ChatMessageInput from "./ChatMessageInput";

const Footer = () => {
  return (
    <footer className="w-full">
      <div className="max-w-4xl m-auto">
        <ChatMessageInput />
        <div className="text-sm text-center font-light">
          Gemini may display inaccurate info, including about people, so
          double-check its
        </div>
      </div>
    </footer>
  );
};

export default Footer;
