import { Table, Button } from "antd";
import { useState } from "react";
import { departmentsColumn } from "../../constant";
import AddDepartmentForm from "./AddDepartmentForm";
import useDepartments from "../../hooks/useDepartments";

const Departments = () => {
  const [showForm, setShowForm] = useState(null);
  const { departments, reFetch } = useDepartments();
  return (
    <>
      {!showForm && (
        <div className="flex flex-col gap-5 items-center p-5  rounded-md">
          <>
            <Button
              className="self-end px-3 py-2 font-medium  rounded-md text-theme-sm hover:text-gray-900   dark:hover:text-white shadow-theme-xs text-gray-900 dark:text-white bg-white dark:bg-gray-800 w-28"
              onClick={() => setShowForm(true)}
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
              columns={departmentsColumn}
              dataSource={departments}
              rowKey="key"
            />
          </>
        </div>
      )}
      {showForm && (
        <AddDepartmentForm
          // onFinish={}
          onClick={() => setShowForm(false)}
          departments={departments}
        />
      )}
    </>
  );
};

export default Departments;
