import { useRef, useState } from "react";
import { RxHamburgerMenu, RxDotsHorizontal } from "react-icons/rx";
import { LuArrowUpDown } from "react-icons/lu";

export const TaskDashboardHeader = ({ title }) => {
  const [isInputVisible, setIsInputVisible] = useState(false);
  const [titleValue, setTitleValue] = useState(title);
  const titleInputRef = useRef(null);

  return (
    <header className="px-5 py-4 flex items-center justify-between">
      <button className="flex-none text-[--icon-color] hover:bg-[--light-white] rounded-md h-9 px-1">
        <RxHamburgerMenu className="w-[23px] h-[23px] opacity-60" />
      </button>
      <div className="h-9 flex items-center text-[--text-gray]">
        <p
          onClick={() => {
            titleInputRef.current.focus();
            setIsInputVisible(true);
            console.log(titleInputRef);
          }}
          className={`text-xl font-semibold flex-auto w-full h-full px-1 items-center rounded-md hover:bg-[--light-white] truncate ${
            isInputVisible ? "hidden" : "flex"
          }`}
        >
          {title}
        </p>
        <input
          //TODO: remove focus while clicking anywhere in window
          ref={titleInputRef}
          onChange={(e) => setTitleValue(e.target.value)}
          value={titleValue}
          className={`text-xl font-semibold h-full px-1 bg-transparent outline-none rounded-md border border-[--secondary-color] ${
            isInputVisible ? "block" : "hidden"
          }`}
        />
      </div>
      <div className="header-actioin flex-auto flex justify-end items-center gap-4 relative">
        <button className="text-[--icon-color] py-1.5 px-1 rounded-md flex items-center hover:bg-[--light-white]">
          <LuArrowUpDown className="h-[20px] w-[20px] opacity-60" />
        </button>
        <button className="text-[--icon-color] py-1.5 px-1 rounded-md flex items-center hover:bg-[--light-white]">
          <RxDotsHorizontal className="h-[20px] w-[20px] opacity-60" />
        </button>
      </div>
    </header>
  );
};
