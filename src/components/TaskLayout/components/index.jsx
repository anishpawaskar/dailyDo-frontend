import { TaskControlPanel } from "./TaskControlPanel";
import { TaskDashboard } from "./TaskDashboard";

export const TaskLayout = () => {
  return (
    <div className="flex w-full">
      <TaskControlPanel />
      <div className="flex flex-auto">
        <TaskDashboard />
      </div>
      <div className="w-1/5 min-w-80 h-full flex bg-red-500"></div>
    </div>
  );
};
