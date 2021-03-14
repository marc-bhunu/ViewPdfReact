import React from "react";
import Header from "./components/navigation/Header";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"
import AllPages from "./components/pdf/AllPages";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <Header/>
      <div className="all-page-container">
        <AllPages pdf={`/api/v1/files/7`} />
      </div>
    </div>
  );
}
