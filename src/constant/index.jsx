import { LoginOutlined, LogoutOutlined } from "@ant-design/icons";
import { Button, Tag, Tooltip } from "antd";
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
    dataIndex: "d",
    key: "d",
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
const employeesLogsColumn = (attendEmployee, employees) => [
  {
    title: "User Name",
    dataIndex: "userName",
    key: "userName",
    sorter: (a, b) => a.userName.localeCompare(b.userName),
    filters: employees.map((employee) => {
      return { text: employee.userName, value: employee.userName };
    }),
    filterMode: "tree",
    filterSearch: true,
    onFilter: (value, record) => record.userName.startsWith(value),
  },
  {
    title: "Email",
    dataIndex: "email",
    key: "email",
    sorter: (a, b) => a.email.localeCompare(b.email),
    filters: employees.map((employee) => {
      return { text: employee.email, value: employee.email };
    }),
    filterMode: "tree",
    filterSearch: true,
    onFilter: (value, record) => record.email.startsWith(value),
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
};
