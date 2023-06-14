import { BrowserRouter, Route, Routes } from "react-router-dom";

import LandingPage from "./pages/LandingPage";
import WebsiteShowcase from "./pages/WebsiteShowcase";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/mvp3" element={<LandingPage />} />
        <Route path="/portfolio" element={<WebsiteShowcase />} />
        <Route path="/showcase" element={<WebsiteShowcase />} />
        <Route path="/" element={<LandingPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
