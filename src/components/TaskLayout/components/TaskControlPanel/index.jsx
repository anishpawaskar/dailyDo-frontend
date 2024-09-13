import { TaskSmartList } from "./components/TaskSmartList";

export const TaskControlPanel = () => {
  return (
    <div className="w-[213px] py-2">
      <TaskSmartList />
      <hr className="mx-2.5 my-4" />
    </div>
  );
};
