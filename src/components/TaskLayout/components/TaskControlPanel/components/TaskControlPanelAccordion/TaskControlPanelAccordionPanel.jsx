import { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { BsThreeDots } from "react-icons/bs";

export const TaskControlPanelAccordionPanel = ({ lists, isAccordionOpen }) => {
  const [selectedListItem, setSelectedListItem] = useState(1);

  if (!lists.length) {
    return (
      <div
        className={`${
          isAccordionOpen ? "block" : "hidden"
        } bg-[--bg-gray-3] text-xs text-[--text-gray-4] rounded-md py-2 px-4`}
      >
        <p>Use lists to categorize and manage your tasks and notes</p>
      </div>
    );
  }
  return (
    <ul>
      {lists.map((item) => {
        const isSelected = item.id === selectedListItem;

        const handleListItemSelect = (id) => {
          setSelectedListItem(id);
        };

        return (
          <li key={item.id} className="h-10 w-full">
            <button
              onClick={() => handleListItemSelect(item.id)}
              className={`h-full w-full rounded-md ${
                isSelected && "bg-[--light-white]"
              } flex items-center hover:bg-[--light-white] pl-4 pr-3 text-sm group/accordion-list-item`}
            >
              <span className="h-[18px] w-[18px] mr-2 text-[--text-gray-6] truncate flex-shrink-0">
                <RxHamburgerMenu className="w-full h-full" />
              </span>
              <span className="flex flex-auto text-[--text-gray] truncate">
                {item.name}
              </span>
              {item.color && (
                <span
                  style={{ background: item.color }}
                  className="inline-block w-2 h-2 rounded-full mx-2 flex-shrink-0"
                ></span>
              )}
              <span className="relative min-w-6 text-[--text-gray-4] flex-shrink-0">
                <span className="text-xs group-hover/accordion-list-item:invisible">
                  {item.count && item.count}
                </span>
                <span
                  role="button"
                  className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] hidden group-hover/accordion-list-item:block"
                >
                  <BsThreeDots className="w-4 h-4" />
                </span>
              </span>
            </button>
          </li>
        );
      })}
    </ul>
  );
};
