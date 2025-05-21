import { Routes, Route } from "react-router-dom";
import AppLayout from "./Layout/AppLayout";
import Home from "./pages/Dashboard/Home";
import Branches from "./pages/Branches/Branches";
import PublicHoliday from "./pages/PublicHoliday/PublicHoliday";
import Shifts from "./pages/Shifts/Shifts";
import Departments from "./pages/Department/Departments";
import LoginSignupPage from "./components/LoginSignupPage";
import Employees from "./pages/Employees/Employees";
import DepartmentsProvider from "./context/DepartmentsContext";
import EmployeesProvider from "./context/EmployeesContext";

function App() {
  return (
    <Routes>
      <Route path="/login" element={<LoginSignupPage />} />
      <Route element={<AppLayout />}>
        <Route index path="/" element={<Home />} />
        <Route path="/branches" element={<Branches />} />
        <Route path="/publicholiday" element={<PublicHoliday />} />
        <Route path="/shifts" element={<Shifts />} />
        <Route
          path="/employees"
          element={
            <EmployeesProvider>
              <Employees />
            </EmployeesProvider>
          }
        />

        <Route
          path="/departments"
          element={
            <EmployeesProvider>
              <DepartmentsProvider>
                <Departments />
              </DepartmentsProvider>
            </EmployeesProvider>
          }
        />
      </Route>
    </Routes>
  );
}

export default App;
