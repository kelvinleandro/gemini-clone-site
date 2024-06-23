import React from "react";
import Image from "next/image";
import { FaUserCircle } from "react-icons/fa";
import { ChatMessage } from "@/types/ChatMessage";
import gemini_icon from "@/assets/gemini_icon.png";

type Props = {
  item: ChatMessage;
};

const ChatMessageItem = ({ item }: Props) => {
  return (
    <div className="my-4 max-w-4xl flex m-auto">
      <div
        className={`w-10 h-10 flex justify-center items-center mx-4 md:ml-0 rounded`}
      >
        {item.role === "user" ? (
          <FaUserCircle size={32} />
        ) : (
          <Image
            src={gemini_icon}
            alt=""
            className="rounded-full"
            width={32}
            height={32}
          />
        )}
      </div>
      <div className="flex-1 text-base whitespace-pre-wrap">{item.content}</div>
    </div>
  );
};

export default ChatMessageItem;
