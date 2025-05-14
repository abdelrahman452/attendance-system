import { Routes, Route } from "react-router-dom";
import AppLayout from "./Layout/AppLayout";
import Home from "./pages/Dashboard/Home";
import Branches from "./pages/Branches/Branches";
import PublicHoliday from "./pages/PublicHoliday/PublicHoliday";
import Shifts from "./Layout/Shifts/Shifts";

function App() {
  return (
    <Routes>
      {/* <Route path="/" element={<LoginSignupPage />} /> */}
      <Route element={<AppLayout />}>
        <Route index path="/" element={<Home />} />
        <Route path="/branches" element={<Branches />} />
        <Route path="/publicholiday" element={<PublicHoliday />} />
        <Route path="/shifts" element={<Shifts />} />
      </Route>
    </Routes>
  );
}

export default App;
