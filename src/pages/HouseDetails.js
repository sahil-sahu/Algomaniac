import React from "react";
import { Button, Table, Drawer, Input } from "antd";
import { useState } from "react";

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
  // {
  //   title: "Age",
  //   dataIndex: "age",
  //   defaultSortOrder: "descend",
  //   sorter: (a, b) => a.age - b.age,
  // },
  {
    title: "House Id",
    dataIndex: "houseId",
    defaultSortOrder: "descend",
    sorter: (a, b) => a.age - b.age,
  },
  {
    title: "Address",
    dataIndex: "address",
    filters: [
      {
        text: "Bhubaneswar",
        value: "Bhubaneswar",
      },
      {
        text: "Cuttack",
        value: "Cuttack",
      },
    ],
    onFilter: (value, record) => record.address.indexOf(value) === 0,
  },
  {
    dataIndex: <button>Delete</button>,
  },
];
const data = [
  {
    key: "1",
    name: "John Brown",
    // age: 32,
    houseId: 11101,
    address: "unit-1",
  },
  {
    key: "2",
    name: "Jim Green",
    // age: 42,
    houseId: 11102,
    address: "unit-2",
  },
  {
    key: "3",
    name: "Joe Black",
    // age: 32,
    houseId: 11103,
    address: "unit-3",
  },
  {
    key: "4",
    name: "Jim Red",
    // age: 32,
    houseId: 11104,
    address: "unit-4",
  },
];
const onChange = (pagination, filters, sorter, extra) => {
  console.log("params", pagination, filters, sorter, extra);
};

const HouseDetails = () => {
  const [open, setOpen] = useState(false);
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Table columns={columns} dataSource={data} onChange={onChange} />
      <Button type="primary" onClick={showDrawer}>
        Add a new house
      </Button>
      <Drawer
        title="Enter new details"
        placement="right"
        onClose={onClose}
        open={open}
      >
        {/* <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p> */}
        <div className="flex flex-col space-y-3">
          <Input placeholder="Name" />
          <Input placeholder="House Id" />
          <Input placeholder="Address" />
        </div>
        <div>
          <Button type="primary" className="mt-4">
            Submit
          </Button>
        </div>
      </Drawer>
    </div>
  );
};

export default HouseDetails;
