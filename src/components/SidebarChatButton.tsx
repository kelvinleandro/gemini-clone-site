import { Chat } from "@/types/Chat";
import React from "react";
import { FiMessageSquare } from "react-icons/fi";

type Props = {
  chatItem: Chat;
  active: boolean;
  onClick: (id: string) => void;
  onDelete: (id: string) => void;
  onEdit: (id: string, newTitle: string) => void;
};

const SidebarChatButton = ({
  chatItem,
  active,
  onClick,
  onDelete,
  onEdit,
}: Props) => {
  return (
    <div
      onClick={onClick.bind(this, chatItem.id)}
      className={`px-3 py-2 flex items-center text-gemini-grey-700 cursor-pointer hover:bg-gemini-white-300 rounded-full ${
        active ? "bg-gemini-white-150" : "bg-transparent"
      }`}
    >
      <FiMessageSquare className="text-lg" />
      <p className="border border-transparent truncate">{chatItem.title}</p>
    </div>
  );
};

export default SidebarChatButton;
