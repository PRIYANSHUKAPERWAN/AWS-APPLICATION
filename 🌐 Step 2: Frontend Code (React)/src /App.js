import React, { useEffect, useState } from "react";

function App() {
  const [data, setData] = useState("Loading...");

  useEffect(() => {
    fetch("/api")
      .then((res) => res.json())
      .then((data) => setData(data.message))
      .catch(() => setData("Error connecting to backend"));
  }, []);

  return (
    <div style={{ textAlign: "center", marginTop: "100px" }}>
      <h1>🚀 Full Stack App on AWS</h1>
      <h2>{data}</h2>
    </div>
  );
}

export default App;
