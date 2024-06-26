import React from "react";
import routes from "./routes";
import "./App.css";
import { useRoutes } from "react-router-dom";
import TopBar from "./components/TopBar/TopBar";
import SideBar from "./components/SideBar/SideBar";

function App() {
  let router = useRoutes(routes);
  return (
    <>
      <TopBar />
      <div className="container">
        <div className="sidebar">
        <SideBar />
        </div>
       <div className="router">
       {router}
       </div>
      </div>
    </>
  );
}

export default App;
