import { LoginOutlined, LogoutOutlined } from "@ant-design/icons";
import { Tag, Tooltip } from "antd";
const branchesColumn = [
  {
    title: "Branch Name",
    dataIndex: "name",
    key: "name",
    sorter: (a, b) => a.name.localeCompare(b.name),
  },
  {
    title: "Longitude",
    dataIndex: "longitude",
    key: "longitude",
    sorter: (a, b) => a.longitude.localeCompare(b.longitude),
  },
  {
    title: "Latitude",
    dataIndex: "latitude",
    key: "latitude",
    sorter: (a, b) => a.latitude.localeCompare(b.latitude),
  },
  {
    title: "Location",
    dataIndex: "location",
    key: "location",
    //   sorter: (a, b) =>
    //     a.name.localeCompare(b.name),
  },
];
const holidaysColumn = [
  {
    title: "Holiday Name",
    dataIndex: "name",
    key: "name",
    sorter: (a, b) => a.name.localeCompare(b.name),
  },
  {
    title: "Start Date",
    dataIndex: "startDate",
    key: "startDate",
    sorter: (a, b) => a.startDate.localeCompare(b.startDate),
  },
  {
    title: "End Date",
    dataIndex: "endDate",
    key: "endDate",
    sorter: (a, b) => a.endDate.localeCompare(b.endDate),
  },
];
const shiftsColumns = [
  {
    title: "Shift",
    dataIndex: "name",
    key: "name",
    sorter: (a, b) => a.name.localeCompare(b.name),
  },
  {
    title: "Start Time",
    dataIndex: "startTime",
    key: "startTime",
    sorter: (a, b) => a.start.localeCompare(b.start),
  },
  {
    title: "End Time",
    dataIndex: "endTime",
    key: "endTime",
    sorter: (a, b) => a.end.localeCompare(b.end),
  },
];
const departmentsColumn = [
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
    sorter: (a, b) => a.name.localeCompare(b.name),
  },

  {
    title: "description",
    dataIndex: "description",
    key: "description",
    sorter: (a, b) => a.description.localeCompare(b.description),
  },
  {
    title: "Department Manager",
    dataIndex: "managerName",
    key: "managerName",
    sorter: (a, b) => a.d.localeCompare(b.d),
  },
];
const employeesColumn = [
  {
    title: "First Name",
    dataIndex: "firstName",
    key: "firstName",
    sorter: (a, b) => a.firstName.localeCompare(b.firstName),
  },
  {
    title: "Last Name",
    dataIndex: "lastName",
    key: "lastName",
    sorter: (a, b) => a.lastName.localeCompare(b.lastName),
  },
  {
    title: "Employee Code",
    dataIndex: "employeeCode",
    key: "employeeCode",
    sorter: (a, b) => a.employeeCode.localeCompare(b.employeeCode),
  },
  {
    title: "Department",
    dataIndex: "departmentName",
    key: "departmentName",
    sorter: (a, b) => a.department.localeCompare(b.department),
  },
  {
    title: "Branch",
    dataIndex: "branchName",
    key: "branchName",
    sorter: (a, b) => a.branchName.localeCompare(b.branchName),
  },
  {
    title: "Status",
    dataIndex: "status",
    key: "status",
    sorter: (a, b) => a.status.localeCompare(b.status),
    render: (_, record) => {
      return (
        <Tag
          color={
            record?.status?.toLowerCase() === "active" ? "success" : "warning"
          }
        >
          {record.status}
        </Tag>
      );
    },
  },
  {
    title: "Hire Date",
    dataIndex: "hireDate",
    key: "hireDate",
    sorter: (a, b) => a.hireDate.localeCompare(b.hireDate),
  },
  {
    title: "Email",
    dataIndex: "email",
    key: "email",
    sorter: (a, b) => a.email.localeCompare(b.email),
  },
  {
    title: "User Name",
    dataIndex: "userName",
    key: "userName",
    sorter: (a, b) => a.userName.localeCompare(b.userName),
  },
];

const reportsColumns = [
  {
    title: "Full Name",
    dataIndex: "fullName",
    key: "fullName",
    sorter: (a, b) => a.fullName.localeCompare(b.fullName),
  },
  {
    title: "Department Name",
    dataIndex: "departmentName",
    key: "departmentName",
    sorter: (a, b) => a.departmentName.localeCompare(b.departmentName),
  },
  {
    title: "Branch Name",
    dataIndex: "branchName",
    key: "endDate",
    sorter: (a, b) => a.branchName.localeCompare(b.branchName),
  },
  {
    title: "Check In",
    dataIndex: "firstIn",
    key: "firstIn",
  },
  {
    title: "Check Out",
    dataIndex: "lastOut",
    key: "lastOut",
  },
  {
    title: "Total Work Hours",
    dataIndex: "totalWorkHours",
    key: "totalWorkHours",
  },
  {
    title: "Status",
    dataIndex: "status",
    key: "status",
    render: (_, record) => {
      return (
        <Tag
          color={
            record?.status?.toLowerCase() === "active" ? "#87d068" : "#f50"
          }
        >
          {record.status}
        </Tag>
      );
    },
  },
];

const employeesVacationsColumn = [
  {
    title: "Employee Name",
    dataIndex: "employeeName",
    key: "employeeName",
    sorter: (a, b) => a.employeeName.localeCompare(b.employeeName),
  },
  {
    title: "Start Date",
    dataIndex: "startDate",
    key: "startDate",
    sorter: (a, b) => a.startDate.localeCompare(b.startDate),
  },
  {
    title: "End Date",
    dataIndex: "endDate",
    key: "endDate",
    sorter: (a, b) => a.endDate.localeCompare(b.endDate),
  },
  {
    title: "Reason",
    dataIndex: "reason",
    key: "reason",
    sorter: (a, b) => a.reason.localeCompare(b.reason),
  },
  {
    title: "Status",
    dataIndex: "status",
    key: "status",
    sorter: (a, b) => a.status.localeCompare(b.status),
    render: (_, record) => {
      return (
        <Tag color={record?.status === "accepted" ? "success" : "warning"}>
          {record.status}
        </Tag>
      );
    },
  },
];
const employeesLogsColumn = (attendEmployee) => [
  {
    title: "User Name",
    dataIndex: "userName",
    key: "userName",
    sorter: (a, b) => a.userName.localeCompare(b.userName),
  },
  {
    title: "Email",
    dataIndex: "email",
    key: "email",
    sorter: (a, b) => a.email.localeCompare(b.email),
  },

  {
    title: "Check In Time",
    dataIndex: "log",
    key: "log",
    render: (_, record) => {
      return (
        <div className="flex  gap-4">
          <Tooltip placement="left" title={"Check in"} color={"green"}>
            <LoginOutlined
              onClick={() =>
                attendEmployee({ inOutMode: 0, employeeId: record.userId })
              }
              style={{ color: "green", fontSize: "40px", cursor: "pointer" }}
            />
          </Tooltip>
          <Tooltip placement="right" title={"Check out"} color={"red"}>
            <LogoutOutlined
              onClick={() =>
                attendEmployee({ inOutMode: 1, employeeId: record.userId })
              }
              style={{ color: "red", fontSize: "40px", cursor: "pointer" }}
            />
          </Tooltip>
        </div>
      );
    },
  },
];
export {
  branchesColumn,
  holidaysColumn,
  shiftsColumns,
  departmentsColumn,
  employeesColumn,
  employeesVacationsColumn,
  employeesLogsColumn,
  reportsColumns,
};
