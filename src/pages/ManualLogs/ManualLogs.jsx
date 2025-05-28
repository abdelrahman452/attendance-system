import { Table, Button, message } from "antd";
import { employeesLogsColumn } from "../../constant";
import useEmployees from "../../hooks/useEmployees";
import axios from "../../Services/axiosInstance";

const ManualLogs = () => {
  const { employees } = useEmployees();
  const attendEmployee = async (form) => {
    message.destroy();
    try {
      await axios.post(`api/AttendenceLogs/manual`, form);
      if (form.inOutMode === 0) {
        message.success(" Checked in successfully");
      } else {
        message.info("Checked out successfully");
      }
    } catch (error) {
      message.error(error.response.data.response);
    } finally {
      console.log("done");
    }
  };
  return (
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
      columns={employeesLogsColumn(attendEmployee, employees)}
      dataSource={employees}
      rowKey="key"
    />
  );
};

export default ManualLogs;
