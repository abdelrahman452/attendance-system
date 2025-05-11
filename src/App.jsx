import { Routes, Route } from "react-router-dom";
import AppLayout from "./Layout/AppLayout";
import Home from "./pages/Dashboard/Home";
import PublicVacation from "./pages/PublicVacation/PublicVacation";
import Branches from "./pages/Branches/Branches";

function App() {
  return (
    <Routes>
      <Route element={<AppLayout />}>
        <Route index path="/" element={<Home />} />
        <Route path="/branches" element={<Branches />} />
        <Route path="/publicvacation" element={<PublicVacation />} />
      </Route>
    </Routes>
  );
}

export default App;
