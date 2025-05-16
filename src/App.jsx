import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Welcome from "./componets/Welcome";
import FirstModal from "./componets/FirstModal";
import PolicyPage from "./pages/PolicyPage";
import Connect from "./pages/Connect";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/policy" element={<PolicyPage />} />
        <Route path="/connect" element={<Connect />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
