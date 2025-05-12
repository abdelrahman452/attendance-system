const branchesColumn=[ {
      title: "Branch Name",
      dataIndex: "name",
      key: "name",
      sorter: (a, b) =>
        a.name.localeCompare(b.name),
    },{
      title: "Branch Code",
      dataIndex: "code",
      key: "code",
    //   sorter: (a, b) =>
    //     a.name.localeCompare(b.name),
    },]
    export {branchesColumn}