import { DATE_ACTIONS, PRIORITY_ACTIONS } from "../taskActionBar.constant";
import { TaskActionSection } from "./TaskActionSection";

export const TaskActionsBar = () => {
  return (
    <div className="absolute bg-white shadow-2xl w-48 max-w-48 rounded-lg px-1 py-[14px]">
      <ul className="flex flex-col">
        <li className="px-3 pb-2">
          <TaskActionSection title="Date" actions={DATE_ACTIONS} />
        </li>
        <li className="px-3 pb-2">
          <TaskActionSection title="Priority" actions={PRIORITY_ACTIONS} />
        </li>
        <hr />
      </ul>
    </div>
  );
};
