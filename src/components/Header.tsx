import React from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { FaUserCircle } from "react-icons/fa";
import { MdHistory } from "react-icons/md";

type Props = {
  onMenuClick: () => void;
};

const Header = ({ onMenuClick }: Props) => {
  return (
    <header className="flex w-full justify-between items-center p-4 border-b border-b-gemini-grey-500/30">
      <div className="flex gap-2 text-gemini-grey-500 text-xl items-center">
        <AiOutlineMenu onClick={onMenuClick} size={32} className="md:hidden" />
        <p className="cursor-pointer">Gemini</p>
      </div>
      <div className="flex gap-2 items-center">
        <MdHistory size={32} className="md:hidden cursor-pointer" />
        <FaUserCircle size={32} className="cursor-pointer" />
      </div>
    </header>
  );
};

export default Header;
