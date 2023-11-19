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
appWindow.setIgnoreCursorEvents(true);
const screenWidth = window.screen.width;
const screenHeight = window.screen.height;
const windowWidth = 150; // Replace with your window width
const windowHeight = 45; // Replace with your window height
const positionX = screenWidth - windowWidth;
const positionY = screenHeight - windowHeight - 25;
appWindow.setPosition(new LogicalPosition(positionX, positionY));

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
