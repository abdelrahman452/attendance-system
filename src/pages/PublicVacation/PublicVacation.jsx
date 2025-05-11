import { Table, Popconfirm, Button, ConfigProvider, message } from "antd";

const PublicVacation = () => {
  return (
    <div className="flex flex-col gap-5 items-center p-5 dark:bg-gray-800 bg-white rounded-md">
      <Button
        className="self-end px-3 py-2 font-medium  rounded-md text-theme-sm hover:text-gray-900   dark:hover:text-white shadow-theme-xs text-gray-900 dark:text-white bg-white dark:bg-gray-800 w-28"
        // onClick={() => setShowForm(true)}
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
        //   columns={columns}
        dataSource={[]}
        rowKey="key"
      />
    </div>
  );
};

export default PublicVacation;
