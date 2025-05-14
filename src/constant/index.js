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
       title: "Date",
      dataIndex: "date",
      key: "date",
      sorter: (a, b) =>
        a.date.localeCompare(b.date),
    },
      {
       title: "Day",
      dataIndex: "day",
      key: "day",
      sorter: (a, b) =>
        a.day.localeCompare(b.day),
    }, {
       title: "Holiday Name",
      dataIndex: "name",
      key: "name",
      sorter: (a, b) =>
        a.name.localeCompare(b.name),
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
       title: "From",
      dataIndex: "start",
      key: "start",
      sorter: (a, b) =>
        a.start.localeCompare(b.start),
    },
{
       title: "To",
      dataIndex: "end",
      key: "end",
      sorter: (a, b) =>
        a.end.localeCompare(b.end),
    },
  ]
    export {branchesColumn,holidaysColumn,shiftsColumns}