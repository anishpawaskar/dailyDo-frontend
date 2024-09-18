import { TaskDashboardHeader } from "./components/TaskDashboardHeader";
import { TaskForm } from "./components/TaskForm";

export const TaskDashboard = () => {
  return (
    <div className="w-full">
      <TaskDashboardHeader title={"All"} />
      <TaskForm />
    </div>
  );
};
