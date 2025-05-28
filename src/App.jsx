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
import BranchProvider from "./context/BranchContext";
import EmployeeVacances from "./pages/EmployeeVacances/EmployeeVacances";
import AssignEmployees from "./pages/AssignEmplyees/AssignEmployees";
import ManualLogs from "./pages/ManualLogs/ManualLogs";

function App() {
  return (
    <Routes>
      <Route path="/login" element={<LoginSignupPage />} />
      <Route element={<AppLayout />}>
        <Route index path="/" element={<Home />} />

        <Route
          path="/manuallogs"
          element={
            <EmployeesProvider>
              <ManualLogs />
            </EmployeesProvider>
          }
        />

        <Route
          path="/branches"
          element={
            <BranchProvider>
              <Branches />
            </BranchProvider>
          }
        />
        <Route path="/publicholiday" element={<PublicHoliday />} />
        <Route path="/shifts" element={<Shifts />} />
        <Route
          path="/employees"
          element={
            <BranchProvider>
              <DepartmentsProvider>
                <EmployeesProvider>
                  <Employees />
                </EmployeesProvider>
              </DepartmentsProvider>
            </BranchProvider>
          }
        />

        <Route
          path="/assignemployees"
          element={
            <EmployeesProvider>
              <AssignEmployees />
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
        <Route
          path="/employeevacances"
          element={
            <EmployeesProvider>
              <EmployeeVacances />
            </EmployeesProvider>
          }
        />
      </Route>
    </Routes>
  );
}

export default App;
