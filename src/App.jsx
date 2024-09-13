import "./App.css";
import { Sidebar } from "./components/Sidebar";

function App() {
  return (
    <>
      <div id="main-container" className="h-screen flex">
        <Sidebar />
      </div>
    </>
  );
}

export default App;
