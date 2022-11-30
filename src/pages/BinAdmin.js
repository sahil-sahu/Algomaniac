import React from "react";
import { Table, Button, Drawer, Input } from "antd";
import { useState } from "react";

function BinAdmin() {
  const [open, setOpen] = useState(false);
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };
  const columns = [
    {
      title: "Bin Id",
      dataIndex: "BinId",
      key: "BinId",
    },
    {
      title: "Address",
      key: "address",
      dataIndex: "address",
      render: (address) => <span>{address}</span>,
    },
    {
      title: "Capacity",
      key: "capacity",
      dataIndex: "capacity",
      render: (capacity) => <span>{capacity}</span>,
    },
    {
      title: "Odour",
      key: "odour",
      dataIndex: "odour",
      render: (odour) => <span>{odour}</span>,
    },
    {
      key: "delete",
      dataIndex: "delete",
      render: () => (
        <button className="p-2 bg-blue-300 text-white font-bold rounded-md hover:bg-blue-400">
          Delete
        </button>
      ),
    },
  ];

  const data = [
    {
      key: "1",
      BinId: 62627,
      address: "New York No. 1 Lake Park",
      capacity: "45%",
      odour: "98%",
    },
    {
      key: "2",
      BinId: 62629,
      address: "London No. 1 Lake Park",
      capacity: "45%",
      odour: "98%",
    },
    {
      key: "3",
      BinId: 62620,
      address: "Sidney No. 1 Lake Park",
      capacity: "45%",
      odour: "98%",
    },
  ];

  return (
    <div>
      <Table dataSource={data} columns={columns} pagination={{ pageSize: 6 }} />
      <Button type="primary" onClick={showDrawer}>
        Add new bin
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
          <Input placeholder="Bin Id" />
          <Input placeholder="Address" />
          <Input placeholder="Capacity" />
          <Input placeholder="Odour" />
        </div>
        <div>
          <Button type="primary" className="mt-4">
            Submit
          </Button>
        </div>
      </Drawer>
    </div>
  );
}

export default BinAdmin;
