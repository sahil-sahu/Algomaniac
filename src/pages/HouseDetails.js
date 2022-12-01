import React from "react";
import { Button, Table, Drawer, Input } from "antd";
import { useState } from "react";

const columns = [
  {
    title: "Name",
    dataIndex: "name",
    filters: [
      {
        text: "Ram",
        value: "Ram",
      },
      {
        text: "Sham",
        value: "Sham",
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
    name: "Nitin",
    // age: 32,
    houseId: 11101,
    address: " Bhubaneswar unit-1",
  },
  {
    key: "2",
    name: "Neha",
    // age: 42,
    houseId: 11102,
    address: " Cuttack unit-2",
  },
  {
    key: "3",
    name: "Ruby",
    // age: 32,
    houseId: 11103,
    address: "Bhubaneswar unit-3",
  },
  {
    key: "4",
    name: "Rohan",
    // age: 32,
    houseId: 11104,
    address: "Cuttack unit-4",
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
