import React from "react";

const ChatMessageLoader = () => {
  return (
    <div className="loader flex flex-col gap-2.5 w-full">
      <hr className="animate-loader bg-gradient-to-r from-blue-400 via-white to-blue-400 h-5 rounded-lg border-none" />
      <hr className="animate-loader bg-gradient-to-r from-blue-400 via-white to-blue-400 h-5 rounded-lg border-none" />
      <hr className="animate-loader bg-gradient-to-r from-blue-400 via-white to-blue-400 h-5 rounded-lg border-none" />
    </div>
  );
};

export default ChatMessageLoader;
