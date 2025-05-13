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
    export {branchesColumn}