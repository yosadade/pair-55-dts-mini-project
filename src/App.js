import React, { useEffect } from "react";
import "./App.css";
import Routers from "./routers/routers";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import { auth } from "../src/authentication/firebase";

function App() {
  return (
    <div className="App">
      <Routers />
    </div>
  );
}

export default App;
