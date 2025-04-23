// src/App.tsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from "./Pages/Landing";
import HelpSection from "./components/HelpSection";
import Method from "./components/Madness";
import YBigwigSection from "./components/YBigwigSection";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/things-to-do" element={<HelpSection />} />
        <Route path="/Method" element={<Method />} />
        <Route path="/YBigwigSection" element={<YBigwigSection />} />
      </Routes>
    </Router>
  );
}

export default App;
