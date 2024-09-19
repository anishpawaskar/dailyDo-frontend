import { TASK_LIST_DATA } from "../../taskDashboard.constant";
import { TaskListItem } from "./TasksListItem";

export const Tasks = () => {
  return (
    <ul className="w-full">
      {TASK_LIST_DATA.map((task) => {
        return <TaskListItem task={task} key={task.id} />;
      })}
    </ul>
  );
};
