import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./styles.css";
import { LogicalPosition, appWindow } from "@tauri-apps/api/window";

appWindow.setTitle("Tauri Clock!");
appWindow.setAlwaysOnTop(true);
appWindow.setResizable(false);
appWindow.setClosable(false);
appWindow.setMinimizable(false);
appWindow.setSkipTaskbar(true);

const setWindowPosition = async () => {
  const screenWidth = window.screen.width;
  const screenHeight = window.screen.height;
  const { width: windowWidth, height: windowHeight } =
    await appWindow.innerSize();
  const positionX = screenWidth - windowWidth + 50;
  const positionY = screenHeight - windowHeight;
  appWindow.setPosition(new LogicalPosition(positionX, positionY));
};

setWindowPosition();

const handleMouseEnter = () => {
  appWindow.hide();
  setTimeout(() => {
    appWindow.show();
  }, 5000);
};

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <div className="w-full h-full" onMouseEnter={handleMouseEnter}>
      <App />
    </div>
  </React.StrictMode>
);
