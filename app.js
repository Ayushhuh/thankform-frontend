import React, { useState } from "react";
import axios from "axios";

function App() {
  const [username, setUsername] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
   const response = await axios.post("https://thankform-backend.vercel.app/api/submit", { username });
    setMessage(response.data.message);
  };

  return (
    <div style={{ padding: "2rem", fontFamily: "Arial" }}>
      {message ? (
        <h2>{message}</h2>
      ) : (
        <form onSubmit={handleSubmit}>
          <label>
            Enter Username:{" "}
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </label>
          <button type="submit" style={{ marginLeft: "10px" }}>
            Submit
          </button>
        </form>
      )}
    </div>
  );
}
const cors = require("cors");
app.use(cors({
  origin: "*", // or your frontend domain in production
}));


export default App;
