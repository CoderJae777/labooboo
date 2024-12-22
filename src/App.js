import "./App.css";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./components/mainpage";
import History from "./components/history";
import Profile from "./components/profile";
import Diet from "./components/diet";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Dashboard />} />
        <Route exact path="/history" element={<History />} />
        <Route exact path="/profile" element={<Profile />} />
        <Route exact path="/diet" element={<Diet />} />
      </Routes>
    </div>
  );
}

export default App;
