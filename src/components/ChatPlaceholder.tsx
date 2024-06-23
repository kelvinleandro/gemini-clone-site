import React from "react";
import { FiMessageSquare } from "react-icons/fi";

const ChatPlaceholder = () => {
  return (
    <>
      <div className="my-12 mx-0 p-5 text-6xl font-medium text-gemini-grey-200 cursor-default">
        <p>
          <span className="bg-clip-text text-transparent bg-text-gradient">Hello, User</span>
        </p>
        <p>How can I help you today?</p>
      </div>

      <div className="overflow-x-auto no-scrollbar">
        <div className="flex space-x-4 text-gemini-grey-700 text-lg">
          <div className="min-w-full sm:min-w-[40%] md:min-w-[30%] cursor-pointer relative rounded-lg p-4 bg-gemini-white-100 hover:bg-gemini-white-150">
            <p>Suggest beautiful places to see on an upcoming road trip</p>
            <FiMessageSquare className="w-9 h-9 p-2 absolute bg-white rounded-full bottom-2 right-2" />
          </div>
          <div className="min-w-full sm:min-w-[40%] md:min-w-[30%] cursor-pointer relative rounded-lg p-4 bg-gemini-white-100 hover:bg-gemini-white-150">
            <p>Briefly summarize this concept: urban planning</p>
            <FiMessageSquare className="w-9 h-9 p-2 absolute bg-white rounded-full bottom-2 right-2" />
          </div>
          <div className="min-w-full sm:min-w-[40%] md:min-w-[30%] cursor-pointer relative rounded-lg p-4 bg-gemini-white-100 hover:bg-gemini-white-150">
            <p>Brianstorm team bonding activities for our work retreat</p>
            <FiMessageSquare className="w-9 h-9 p-2 absolute bg-white rounded-full bottom-2 right-2" />
          </div>
        </div>
      </div>
    </>
  );
};

export default ChatPlaceholder;
