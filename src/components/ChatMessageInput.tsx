import { useGPT } from "@/hooks/useGPT";
import React, { useEffect, useRef, useState, KeyboardEvent } from "react";
import { TbPhotoPlus, TbMicrophone, TbSend2 } from "react-icons/tb";

const ChatMessageInput = () => {
  const [text, setText] = useState("");
  const textEl = useRef<HTMLTextAreaElement>(null);
  const { aiLoading, sendMessage } = useGPT();

  useEffect(() => {
    if (textEl.current) {
      textEl.current.style.height = "0px";
      const scrollHeight = textEl.current.scrollHeight;
      textEl.current.style.height = scrollHeight + "px";
    }
  }, [text, textEl]);

  const handleSendMessage = () => {
    if (!aiLoading && text.trim() !== "") {
      sendMessage(text);
      setText("");
    }
  };

  const handleTextKeyUp = (event: KeyboardEvent<HTMLTextAreaElement>) => {
    if (event.code.toLowerCase() === "enter" && !event.shiftKey) {
      event.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <div className="bg-gemini-white-100 flex items-center justify-between gap-4 rounded-full py-2 px-4">
      <textarea
        onChange={(e) => setText(e.target.value)}
        value={text}
        placeholder="Enter a prompt here"
        id="input-text"
        onKeyUp={handleTextKeyUp}
        disabled={aiLoading}
        className="flex-1 bg-transparent border-0 outline-none resize-none max-h-48 overflow-y-auto text-lg"
      />
      <div className="flex items-center gap-4">
        <TbPhotoPlus className="cursor-pointer text-lg" />
        <TbMicrophone className="cursor-pointer text-lg" />
        {text.trim() !== "" && <TbSend2 onClick={handleSendMessage} className="cursor-pointer text-lg" />}
      </div>
    </div>
  );
};

export default ChatMessageInput;
