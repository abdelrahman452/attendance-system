import { useState } from "react";
import { Table, Button, message } from "antd";
import AssignEmployeeForm from "./AsignEmployeeForm";
import axios from "../../Services/axiosInstance";

const AssignEmployees = () => {
  const [showForm, setShowForm] = useState(null);
  const [shifts, setShifts] = useState([]);

  //Add Branch Function
  const addAssignEmployee = async (values) => {
    message.destroy();
    try {
      await axios.post(`api/ShiftEmployees/Assign`, values);

      message.success("Employee assigned successfully");

      setShowForm(false);
    } catch (error) {
      message.error("Employee already assigned");
      console.error(`${error.message}`);
    } finally {
      console.log("done");
    }
  };

  const getShifts = async () => {
    try {
      const response = await axios.get("api/Shifts/GetAll");
      const data = response.data.response;
      setShifts(
        data.map((item) => {
          return { ...item, key: item.id };
        })
      );
    } catch (error) {
      console.error(`${error.message}`);
    } finally {
      console.log("done");
    }
  };
  return (
    <>
      {!showForm && (
        <div className="flex flex-col gap-5 items-center p-5  rounded-md">
          <>
            <Button
              className="self-end px-3 py-2 font-medium  rounded-md text-theme-sm hover:text-gray-900   shadow-theme-xs text-gray-900 bg-white "
              onClick={() => {
                setShowForm(true);
                getShifts();
              }}
            >
              Assign Employee
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
                return index % 2 === 0 ? "" : "bg-[#f9fafb]";
              }}
              columns={[]}
              dataSource={[]}
              rowKey="key"
            />
          </>
        </div>
      )}
      {showForm && (
        <AssignEmployeeForm
          onFinish={addAssignEmployee}
          onClick={() => setShowForm(false)}
          shifts={shifts}
        />
      )}
    </>
  );
};

export default AssignEmployees;
