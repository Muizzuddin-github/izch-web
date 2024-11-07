import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./genshinPage/Home";
import Hyperbloom from "./genshinPage/Hyperbloom";
import EnergyRechargeCalculator from "./genshinPage/EnergyRechargeCalculator";
import Genshin from "./genshinPage/Genshin";
import Vaporize from "./genshinPage/Vaporize";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/genshin" element={<Genshin />}>
            <Route path="hyperbloom" element={<Hyperbloom />} />
            <Route
              path="energy-recharge-calculator"
              element={<EnergyRechargeCalculator />}
            />
            <Route path="vaporize" element={<Vaporize />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
