import { TaskControlPanel } from "./TaskControlPanel";

export const TaskLayout = () => {
  return (
    <div className="flex w-full">
      <TaskControlPanel />
      <div className="flex flex-auto bg-green-400"></div>
      <div className="w-1/5 h-full flex bg-red-500"></div>
    </div>
  );
};
