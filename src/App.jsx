import DateTime from "./components/DateTime";
import { appWindow } from "@tauri-apps/api/window";

function App() {
  return (
    <div className="flex flex-col h-full w-full items-center justify-center m-0 p-0">
      <DateTime />
    </div>
  );
}

export default App;
