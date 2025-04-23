// src/App.tsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from "./Pages/Landing";
import HelpSection from "./components/HelpSection";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/help" element={<HelpSection />} />
      </Routes>
    </Router>
  );
}

export default App;
