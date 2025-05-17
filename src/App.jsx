import "./App.css";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
import Welcome from "./componets/Welcome";
import FirstModal from "./componets/FirstModal";
import PolicyPage from "./pages/PolicyPage";
import Connect from "./pages/Connect";
import { BrowserRouter, Route, Routes } from "react-router";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Welcome />} />
      <Route path="/policy" element={<PolicyPage />} />
      <Route path="/connect" element={<Connect />} />
    </Routes>
  );
}

export default App;
