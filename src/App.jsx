import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Hyperbloom from "./pages/Hyperbloom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/hyperbloom" element={<Hyperbloom />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
