import { Button, DatePicker, message, Table } from "antd";
import axios from "../../Services/axiosInstance";
import { reportsColumns } from "../../constant";
import { useState } from "react";

const Reports = () => {
  const [reports, setReports] = useState([]);
  const [excelBlob, setExcelBlob] = useState(null);
  const onChange = async (date, dateString) => {
    try {
      const res = await axios.get(
        `api/Reports/daily-summary?date=${dateString}`
      );
      const data = res.data.response;
      setReports(
        data.map((obj) => {
          return {
            ...obj,
            key: obj.employeeId,
            firstIn: obj.firstIn == null ? "__" : obj.firstIn,
            lastOut: obj.lastOut == null ? "__" : obj.lastOut,
          };
        })
      );
      // Fetch Excel file
      const excelRes = await axios.get(
        `api/Reports/daily-summary/excel?date=${dateString}`,
        { responseType: "blob" }
      );
      setExcelBlob(excelRes.data);
    } catch (error) {
      console.log(error);
      message.error("Something went wrong. Please try again.");
      setExcelBlob(null);
    }
  };
  const downloadExcel = () => {
    if (!excelBlob) return;
    const url = window.URL.createObjectURL(new Blob([excelBlob]));
    console.log(url);
  };
  return (
    <>
      <DatePicker
        allowClear={false}
        onChange={onChange}
        style={{ marginBottom: "30px" }}
      />
      {excelBlob && <Button onClick={downloadExcel}>Download Excel</Button>}
      <Table
        style={{
          marginBottom: "10px",
          boxShadow: "rgba(0, 0, 0, 0.1) -4px 10px 14px 4px",
        }}
        pagination={{ pageSize: 8 }}
        sticky
        scroll={{ x: "max-content" }}
        rowClassName={(_, index) => {
          return index % 2 === 0 ? "" : "bg-[#f9fafb] ";
        }}
        columns={reportsColumns}
        dataSource={reports}
        rowKey="key"
      />
    </>
  );
};

export default Reports;
