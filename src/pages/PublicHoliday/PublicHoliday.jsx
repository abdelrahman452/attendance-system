import { Table, Popconfirm, Button, ConfigProvider, message, Form } from "antd";
import { useEffect, useState } from "react";
import AddHolidayForm from "./AddHolidayForm";
import { holidaysColumn } from "../../constant";
import axios from "../../Services/axiosInstance";
const PublicHoliday = () => {
  const [showForm, setShowForm] = useState(null);
  const [holidays, setHolidays] = useState([]);

  //add holiday
  const addHoliday = async (values) => {
    message.destroy();
    try {
      const formattedValues = {
        ...values,
        startDate: values.startDate
          .startOf("day")
          .format("YYYY-MM-DDTHH:mm:ss.SSS[Z]"),
        endDate: values.endDate
          .endOf("day")
          .format("YYYY-MM-DDTHH:mm:ss.SSS[Z]"),
      };
      await axios.post(`api/PublicHolidays/Add`, formattedValues);
      message.success("Holiday added successfully");
      getHolidays();
      setShowForm(false);
    } catch (error) {
      console.error(error);
      message.error("Something went wrong. Please try again.");
    } finally {
      console.log("done");
    }
  };

  const getHolidays = async () => {
    try {
      const response = await axios.get("api/PublicHolidays/GetAll");
      const data = response.data.response;
      setHolidays(
        data.map((item) => {
          return {
            ...item,
            key: item.id,
            startDate: item.startDate.split("T")[0],
            endDate: item.endDate.split("T")[0],
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
    getHolidays();
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
              columns={holidaysColumn}
              dataSource={holidays}
              rowKey="key"
            />
          </>
        </div>
      )}
      {showForm && (
        <AddHolidayForm
          onFinish={addHoliday}
          onClick={() => setShowForm(false)}
        />
      )}
    </>
  );
};

export default PublicHoliday;
