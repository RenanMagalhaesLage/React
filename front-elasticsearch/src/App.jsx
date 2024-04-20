import { useState } from "react";
import "./App.css";

//Components
import SearchBar from "./components/SearchBar";
import Switch from "./components/Switch";

function App() {

  return (
    <>
      <Switch/>
      <div className="search-bar-container">
        <p>
          <span className="gradient-text">Wiki</span> explorer
        </p>
        <SearchBar />
      </div>
    </>
  );
}

export default App;
