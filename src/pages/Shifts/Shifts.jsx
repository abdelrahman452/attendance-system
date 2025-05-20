import { Table, Button, message } from "antd";
import { useEffect, useState } from "react";
import AddShiftForm from "./AddShiftForm";
import { shiftsColumns } from "../../constant";
import axios from "../../Services/axiosInstance";

const Shifts = () => {
  const [showForm, setShowForm] = useState(null);
  const [shifts, setShifts] = useState([]);
  // add Shift
  const addShifts = async (values) => {
    message.destroy();
    const formattedValues = {
      ...values,
      startTime: values.startTime.format("HH:mm:ss"),
      endTime: values.endTime.format("HH:mm:ss"),
    };

    try {
      await axios.post(`api/Shifts/Create`, formattedValues);
      message.success("Shift added successfully");
      getShifts();
      setShowForm(false);
    } catch (error) {
      console.log(error);
      message.error("Something went wrong. Please try again.");
    }
  };

  // get shifts Data

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

  useEffect(() => {
    getShifts();
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
              columns={shiftsColumns}
              dataSource={shifts}
              rowKey="key"
            />
          </>
        </div>
      )}
      {showForm && (
        <AddShiftForm onFinish={addShifts} onClick={() => setShowForm(false)} />
      )}
    </>
  );
};

export default Shifts;
