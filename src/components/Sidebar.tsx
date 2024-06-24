import { useGPT } from "@/hooks/useGPT";
import React from "react";

import {
  AiOutlineQuestionCircle,
  AiOutlineSetting,
  AiOutlineMenu,
  AiOutlinePlus,
} from "react-icons/ai";
import { MdHistory } from "react-icons/md";
import SidebarChatButton from "./SidebarChatButton";

type Props = {
  open: boolean;
  onClose: () => void;
};

const Sidebar = ({ open, onClose }: Props) => {
  const { chatList, chatActiveId, deleteChat, editChat, selectChat, createNewChat } = useGPT();

  return (
    <section
      className={`fixed z-50 left-0 top-0 bottom-0 ${
        open ? "w-screen bg-gemini-grey-700/60" : "w-0"
      } md:min-w-16 md:max-w-48 md:static`}
    >
      <div
        className={`transition-all duration-200 flex h-screen ${
          open ? "ml-0" : "-ml-96"
        } md:ml-0`}
      >
        <div className="flex flex-col flex-1 justify-between px-2 py-3 bg-gemini-white-100">
          {/* top */}
          <div>
            <AiOutlineMenu
              onClick={onClose}
              className="cursor-pointer ml-2 block w-[32px] h-[32px] md:w-[20px] md:h-[20px]"
            />

            <div onClick={createNewChat} className="flex items-center gap-2 py-2 px-4 mt-12 text-gray-500 bg-gemini-white-200 rounded-[50px] cursor-pointer">
              <AiOutlinePlus className="w-[32px] h-[32px] md:w-[20px] md:h-[20px]" />
              {open && <p>New Chat</p>}
            </div>

            {open && (
              <div className="flex flex-col gap-1 animate-fadeIn">
                <p className="my-4">Recent</p>
                {chatList.map((item) => (
                  <SidebarChatButton
                    key={item.id}
                    chatItem={item}
                    active={item.id === chatActiveId}
                    onClick={selectChat}
                    onDelete={deleteChat}
                    onEdit={editChat}
                  />
                ))}
              </div>
            )}
          </div>

          {/* bottom */}
          <div className="flex flex-col">
            <div className="rounded-full cursor-pointer flex items-start gap-2 p-2 text-gemini-grey-700 hover:bg-gemini-white-300">
              <AiOutlineQuestionCircle className="w-[32px] h-[32px] md:w-[20px] md:h-[20px]" />
              {open && <p>Help</p>}
            </div>
            <div className="rounded-full cursor-pointer flex items-start gap-2 p-2 text-gemini-grey-700 hover:bg-gemini-white-300">
              <MdHistory className="w-[32px] h-[32px] md:w-[20px] md:h-[20px]" />
              {open && <p>Activity</p>}
            </div>
            <div className="rounded-full cursor-pointer flex items-start gap-2 p-2 text-gemini-grey-700 hover:bg-gemini-white-300">
              <AiOutlineSetting className="w-[32px] h-[32px] md:w-[20px] md:h-[20px]" />
              {open && <p>Settings</p>}
            </div>
          </div>
        </div>

        <div className="flex justify-center items-center w-16 md:hidden"></div>
      </div>
    </section>
  );
};

export default Sidebar;
