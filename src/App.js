import React from "react";
import AllPages from "./components/pdf/AllPages";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <div className="all-page-container">
        <AllPages pdf={`/api/v1/files/7`} />
      </div>
    </div>
  );
}
