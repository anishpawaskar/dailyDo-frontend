import { TaskSmartList } from "./components/TaskSmartList";
import { TaskControlPanelAccordion } from "./components/TaskControlPanelAccordion";

export const TaskControlPanel = () => {
  return (
    <div className="w-[213px] py-2 border-r">
      <TaskSmartList />
      <hr className="mx-2.5 my-4" />
      <TaskControlPanelAccordion title="Lists" />
    </div>
  );
};
