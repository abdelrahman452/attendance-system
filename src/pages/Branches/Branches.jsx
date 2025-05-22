import { Table, Button, message } from "antd";
import { useState } from "react";
import AddBranchForm from "./AddBranchForm";
import { branchesColumn } from "../../constant/index";
import axios from "../../Services/axiosInstance";
import useBranches from "../../hooks/useBranches";

const Branches = () => {
  const [showForm, setShowForm] = useState(null);
  const { branches, refetch } = useBranches();

  //Add Branch Function
  const addBranches = async (values) => {
    try {
      const response = await axios.post(`api/Branches/CreateBranch`, values);

      message.success("Branch added successfully");
      refetch();
      setShowForm(false);
    } catch (error) {
      if (error.response && error.response.status === 400) {
        message.error("Branch already exists");
      } else {
        message.error(error.message);
      }
    }
  };

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
              columns={branchesColumn}
              dataSource={branches}
              rowKey="key"
            />
          </>
        </div>
      )}
      {showForm && (
        <AddBranchForm
          onFinish={addBranches}
          onClick={() => setShowForm(false)}
        />
      )}
    </>
  );
};

export default Branches;
