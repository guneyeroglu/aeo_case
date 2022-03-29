import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Units from "./pages/Units";
import UnitDetail from "./pages/UnitDetail";
import { DataProvider } from "./context/DataContext";

function App() {
  return (
    <DataProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/unit" element={<Units />} />
        <Route path="/unit_detail" element={<UnitDetail />} />
      </Routes>
    </DataProvider>
  );
}

export default App;
