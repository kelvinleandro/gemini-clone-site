import React from "react";

import {
  AiOutlineQuestionCircle,
  AiOutlineSetting,
  AiOutlineMenu,
  AiOutlinePlus,
} from "react-icons/ai";
import { MdHistory } from "react-icons/md";

type Props = {
  open: boolean;
  onClose: () => void;
};

const ICON_SIZE = 20;

const Sidebar = ({ open, onClose }: Props) => {
  return (
    <section
      className={`fixed left-0 top-0 bottom-0 ${
        open ? "w-screen bg-gemini-grey-700/70 md:none" : "w-0"
      } md:static md:max-w-48`}
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
              size={ICON_SIZE}
              className="cursor-pointer ml-2 block"
            />

            <div className="flex items-center gap-2 py-2 px-4 mt-12 text-gray-500 bg-gemini-white-200 rounded-[50px] cursor-pointer">
              <AiOutlinePlus size={ICON_SIZE} />
              {open && <p>New Chat</p>}
            </div>
          </div>

          {/* bottom */}
          <div className="flex flex-col">
            <div className="cursor-pointer flex items-start gap-2 p-2 text-gemini-grey-700 hover:bg-gemini-white-300">
              <AiOutlineQuestionCircle size={ICON_SIZE} />
              {open && <p>Help</p>}
            </div>
            <div className="cursor-pointer flex items-start gap-2 p-2 text-gemini-grey-700 hover:bg-gemini-white-300">
              <MdHistory size={ICON_SIZE} />
              {open && <p>Activity</p>}
            </div>
            <div className="cursor-pointer flex items-start gap-2 p-2 text-gemini-grey-700 hover:bg-gemini-white-300">
              <AiOutlineSetting size={ICON_SIZE} />
              {open && <p>Settings</p>}
            </div>
          </div>
        </div>

        <div className="flex justify-center items-center w-28 md:hidden"></div>
      </div>
    </section>
  );
};

export default Sidebar;
