import { Table, Popconfirm, Button, ConfigProvider, message, Form } from "antd";
import { useState } from "react";
import AddHolidayForm from "./AddHolidayForm";
import { holidaysColumn } from "../../constant";
import { addFormData } from "../../Services/PublicHoliday";
const PublicHoliday = () => {
  const [loading, setLoading] = useState(false);
  const [showForm, setShowForm] = useState(null);

  //add holiday
  const handleAddHoliday = async (values) => {
    try {
      setLoading(true);
      const formattedValues = {
        ...values,
        startDate: values.startDate
          .startOf("day")
          .format("YYYY-MM-DDTHH:mm:ss.SSS[Z]"),
        endDate: values.endDate
          .endOf("day")
          .format("YYYY-MM-DDTHH:mm:ss.SSS[Z]"),
      };
      await addFormData(formattedValues);
      message.success("Holiday added successfully");
    } catch (error) {
      console.error(error);
      message.error("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
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
              columns={holidaysColumn}
              dataSource={[]}
              rowKey="key"
            />
          </>
        </div>
      )}
      {showForm && (
        <AddHolidayForm
          onFinish={handleAddHoliday}
          onClick={() => setShowForm(false)}
        />
      )}
    </>
  );
};

export default PublicHoliday;
