import { Table, Popconfirm, Button, ConfigProvider } from "antd";
import { useEffect, useState } from "react";
import AddBranchForm from "./AddBranchForm";
import { branchesColumn } from "../../constant/index";
import { getBranches, addBranches } from "../../Services/branchesApi";
const Branches = () => {
  const [showForm, setShowForm] = useState(null);
  const [branches, setBranches] = useState([]);
  const handleAddBranch = async (values) => {
    try {
      await addBranches(values);
      await handleGetBranches();
      setShowForm(false);
    } catch (error) {
      console.error(error);
    }
  };

  const handleGetBranches = async () => {
    try {
      const data = await getBranches();

      setBranches(
        data.response?.map((item) => ({
          ...item,
          key: item.id,
        }))
      );
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    handleGetBranches();
  }, []);
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
          onFinish={handleAddBranch}
          onClick={() => setShowForm(false)}
        />
      )}
    </>
  );
};

export default Branches;
