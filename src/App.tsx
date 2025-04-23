// src/App.tsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from "./Pages/Landing";
import Landing2 from "./Pages/Landing2"; // import your mobile component
import HelpSection from "./components/HelpSection";

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <>
              {/* Show Landing2 on mobile, hide on md+ */}
              <div className="block md:hidden">
                <Landing2 />
              </div>

              {/* Show Landing on md+ (desktop), hide on mobile */}
              <div className="hidden md:block">
                <Landing />
              </div>
            </>
          }
        />
        <Route path="/things-to-do" element={<HelpSection />} />
      </Routes>
    </Router>
  );
}

export default App;
