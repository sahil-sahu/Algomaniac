import React from "react";
import { useState } from "react";
import { Table } from "antd";

const ViewComplaints = () => {
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);
  const onSelectChange = (newSelectedRowKeys) => {
    console.log("selectedRowKeys changed: ", newSelectedRowKeys);
    setSelectedRowKeys(newSelectedRowKeys);
  };
  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
    selections: [
      Table.SELECTION_ALL,
      Table.SELECTION_INVERT,
      Table.SELECTION_NONE,
      {
        key: "odd",
        text: "Select Odd Row",
        onSelect: (changableRowKeys) => {
          let newSelectedRowKeys = [];
          newSelectedRowKeys = changableRowKeys.filter((_, index) => {
            if (index % 2 !== 0) {
              return false;
            }
            return true;
          });
          setSelectedRowKeys(newSelectedRowKeys);
        },
      },
      {
        key: "even",
        text: "Select Even Row",
        onSelect: (changableRowKeys) => {
          let newSelectedRowKeys = [];
          newSelectedRowKeys = changableRowKeys.filter((_, index) => {
            if (index % 2 !== 0) {
              return true;
            }
            return false;
          });
          setSelectedRowKeys(newSelectedRowKeys);
        },
      },
    ],
  };
  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      filters: [
        {
          text: "Joe",
          value: "Joe",
        },
        {
          text: "Jim",
          value: "Jim",
        },
        {
          text: "Submenu",
          value: "Submenu",
          children: [
            {
              text: "Green",
              value: "Green",
            },
            {
              text: "Black",
              value: "Black",
            },
          ],
        },
      ],
      // specify the condition of filtering result
      // here is that finding the name started with `value`
      onFilter: (value, record) => record.name.indexOf(value) === 0,
      sorter: (a, b) => a.name.length - b.name.length,
      sortDirections: ["descend"],
    },
    {
      title: "House Id",
      dataIndex: "houseId",
      defaultSortOrder: "descend",
      sorter: (a, b) => a.age - b.age,
    },
    {
      title: "Address",
      dataIndex: "address",
      defaultSortOrder: "descend",
      sorter: (a, b) => a.age - b.age,
    },
    {
      title: "Complaint",
      key: "complaint",
      dataIndex: "complaint",
    },
  ];
  const data = [
    {
      key: "1",
      name: "John Brown",
      houseId: 11101,
      address: "unit-1",
      complaint: "abdcbhdc",
    },
    {
      key: "2",
      name: "Jim Green",
      houseId: 11102,
      address: "unit-2",
      complaint: "abdcbhdc",
    },
    {
      key: "3",
      name: "Joe Black",
      houseId: 11103,
      address: "unit-3",
      complaint: "abdcbhdc",
    },
    {
      key: "4",
      name: "Jim Red",
      houseId: 11104,
      address: "unit-4",
      complaint: "abdcbhdc",
    },
  ];
  // const ViewComplaints = () => {
  return (
    <Table rowSelection={rowSelection} columns={columns} dataSource={data} />
  );
};

export default ViewComplaints;
