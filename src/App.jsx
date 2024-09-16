import "./App.css";
import { Sidebar } from "./components/Sidebar";
import { TaskLayout } from "./components/TaskLayout/components";

function App() {
  return (
    <>
      <div id="main-container" className="h-screen flex">
        <Sidebar />
        <TaskLayout />
      </div>
    </>
  );
}

export default App;
