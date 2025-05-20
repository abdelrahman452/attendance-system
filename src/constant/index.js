const branchesColumn=[ 
  {
      title: "Branch Name",
      dataIndex: "name",
      key: "name",
      sorter: (a, b) =>
        a.name.localeCompare(b.name),
    },
  {
      title: "Longitude",
      dataIndex: "longitude",
      key: "name",
      sorter: (a, b) =>
        a.name.localeCompare(b.name),
    },
  {
      title: "Latitude",
      dataIndex: "latitude",
      key: "name",
      sorter: (a, b) =>
        a.name.localeCompare(b.name),
    },
    {
      title: "Location",
      dataIndex: "location",
      key: "location",
    //   sorter: (a, b) =>
    //     a.name.localeCompare(b.name),
    },]
    const holidaysColumn=[
      {
       title: "Holiday Name",
      dataIndex: "name",
      key: "name",
      sorter: (a, b) =>
        a.name.localeCompare(b.name),
    },
      {
       title: "Start Date",
      dataIndex: "startDate",
      key: "startDate",
      sorter: (a, b) =>
        a.startDate.localeCompare(b.startDate),
    },
      {
       title: "End Date",
      dataIndex: "endDate",
      key: "endDate",
      sorter: (a, b) =>
        a.endDate.localeCompare(b.endDate),
    },
     
  ]
  const shiftsColumns=[
{
       title: "Shift",
      dataIndex: "name",
      key: "name",
      sorter: (a, b) =>
        a.name.localeCompare(b.name),
    },
{
       title: "Start Time",
      dataIndex: "startTime",
      key: "startTime",
      sorter: (a, b) =>
        a.start.localeCompare(b.start),
    },
{
       title: "End Time",
      dataIndex: "endTime",
      key: "endTime",
      sorter: (a, b) =>
        a.end.localeCompare(b.end),
    },
  ]
  const departmentsColumn=[
    {
       title: "Name",
      dataIndex: "name",
      key: "name",
      sorter: (a, b) =>
        a.name.localeCompare(b.name),
    },
   
    {
       title: "description",
      dataIndex: "description",
      key: "description",
      sorter: (a, b) =>
        a.description.localeCompare(b.description),
    },
    {
       title: "Department Manager",
      dataIndex: "d",
      key: "d",
      sorter: (a, b) =>
        a.d.localeCompare(b.d),
    },
  ]
  const employeesColumn=[
    {
       title: "First Name",
      dataIndex: "firstName",
      key: "firstName",
      sorter: (a, b) =>
        a.firstName.localeCompare(b.firstName),
    },
    {
       title: "Last Name",
      dataIndex: "lastName",
      key: "lastName",
      sorter: (a, b) =>
        a.lastName.localeCompare(b.lastName),
    },
    {
       title: "Employee Code",
      dataIndex: "employeeCode",
      key: "employeeCode",
      sorter: (a, b) =>
        a.employeeCode.localeCompare(b.employeeCode),
    },
    {
       title: "Department",
      dataIndex: "department",
      key: "department",
      sorter: (a, b) =>
        a.department.localeCompare(b.department),
    },
    {
       title: "Branch Name",
      dataIndex: "branchName",
      key: "branchName",
      sorter: (a, b) =>
        a.branchName.localeCompare(b.branchName),
    },
    {
       title: "Status",
      dataIndex: "status",
      key: "status",
      sorter: (a, b) =>
        a.status.localeCompare(b.status),
    },
    {
       title: "Hire Date",
      dataIndex: "hireDate",
      key: "hireDate",
      sorter: (a, b) =>
        a.hireDate.localeCompare(b.hireDate),
    },
    {
       title: "Email",
      dataIndex: "email",
      key: "email",
      sorter: (a, b) =>
        a.email.localeCompare(b.email),
    },
    {
       title: "User Name",
      dataIndex: "userName",
      key: "userName",
      sorter: (a, b) =>
        a.userName.localeCompare(b.userName),
    },
  ]
    export {branchesColumn,holidaysColumn,shiftsColumns,departmentsColumn,employeesColumn}
   