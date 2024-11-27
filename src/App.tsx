import { useState, useEffect } from "react";

function App() {
  const [data, setData] = useState<{ name: string; parameter: string } | null>(
    null
  );

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_LINK}/api/data`)
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Frontend Practice App</h1>
      {data ? (
        <div>
          <p>
            <strong>Name:</strong> {data.name}
          </p>
          <p>
            <strong>Parameter:</strong> {data.parameter}
          </p>
        </div>
      ) : (
        <p>Loading data...</p>
      )}
    </div>
  );
}

export default App;
