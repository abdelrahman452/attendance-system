import { useEffect, useState } from "react";
import { Table, Button, message } from "antd";
import axios from "../../Services/axiosInstance";
import AddVacationForm from "./AddVacationForm";
import { employeesVacationsColumn } from "../../constant";

const EmployeeVacances = () => {
  const [showForm, setShowForm] = useState(null);
  const [employeesVacations, setEmployeesVacations] = useState(null);
  //add employee vacation
  const addEmployeeVacation = async (values) => {
    message.destroy();
    try {
      const formattedValues = {
        ...values,
        startDate: values.startDate.format("YYYY-MM-DDTHH:mm:ss.SSS[Z]"),
        endDate: values.endDate.format("YYYY-MM-DDTHH:mm:ss.SSS[Z]"),
      };

      await axios.post(`api/EmployeeVacances/Add`, formattedValues);
      message.success("Employee added successfully");
      getEmployeesVacations();
      setShowForm(false);
    } catch (error) {
      console.error(error);
      message.error("Something went wrong. Please try again.");
    } finally {
      console.log("done");
    }
  };
  console.log(employeesVacations);
  const getEmployeesVacations = async () => {
    try {
      const response = await axios.get("api/EmployeeVacances/GetAll");
      const data = response.data.response.vacancies;

      setEmployeesVacations(
        data.map((item) => {
          return {
            ...item,
            key: item.id,
            status: item.status === 1 ? "accepted" : "Pending",
            // startDate: item.startDate.format("YYYY-MM-DD"),
          };
        })
      );
    } catch (error) {
      console.error(`${error.message}`);
    } finally {
      console.log("done");
    }
  };
  useEffect(() => {
    getEmployeesVacations();
  }, []);
  return (
    <>
      {!showForm && (
        <div className="flex flex-col gap-5 items-center p-5  rounded-md">
          <>
            <Button
              className="self-end px-3 py-2 font-medium  rounded-md text-theme-sm hover:text-gray-900   dark:hover:text-white shadow-theme-xs text-gray-900 dark:text-white bg-white dark:bg-gray-800 w-28"
              onClick={() => {
                setShowForm(true);
              }}
            >
              Create new
            </Button>

            <Table
              style={{
                marginBottom: "10px",
                boxShadow: "rgba(0, 0, 0, 0.1) -4px 10px 14px 4px",
              }}
              pagination={{ pageSize: 8 }}
              sticky
              scroll={{ x: "max-content" }}
              rowClassName={(_, index) => {
                return index % 2 === 0 ? "" : "bg-[#f9fafb] dark:bg-gray-700";
              }}
              columns={employeesVacationsColumn}
              dataSource={employeesVacations}
              rowKey="key"
            />
          </>
        </div>
      )}
      {showForm && (
        <AddVacationForm
          onFinish={addEmployeeVacation}
          onClick={() => setShowForm(false)}
        />
      )}
    </>
  );
};

export default EmployeeVacances;
