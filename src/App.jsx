import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Sidebar from "./components/Sidebar/Sidebar";
import ContextProvider from "./components/Context/Context";
import Feed from "./components/Feed/Feed";
import { BrowserRouter, Route, Routes } from "react-router";
import Video from "./components/Video/Video";

function App() {
  return (
    <>
      <BrowserRouter>
        <ContextProvider>
          <div className="main">
            <Navbar />
            <div className="container">
              <Routes>
                <Route path="/" element={
                  <>
                  <Sidebar />
                  <Feed />
                  </>
                  }></Route>
                <Route
                  path="/video/:categoryId/:videoId"
                  element={<Video />}
                ></Route>
              </Routes>
            </div>
          </div>
        </ContextProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
