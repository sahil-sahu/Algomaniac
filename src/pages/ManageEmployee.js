import React from "react";
import { Table, Button, Drawer, Input } from "antd";
import { useState } from "react";

function ManageEmployee() {
  const [open, setOpen] = useState(false);
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };
  const columns = [
    {
      title: "Employee Id",
      dataIndex: "EmployeeId",
      key: "employeeId",
    },
    {
      title: "Aadhar Number",
      key: "AdhaarNumber",
      dataIndex: "adhaarNumber",
      render: (adhaarNumber) => <span>{adhaarNumber}</span>,
    },
    {
      title: "Name",
      key: "name",
      dataIndex: "name",
      render: (name) => <span>{name}</span>,
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
      EmployeeId: 2877178,
      adhaarNumber: 98123457,
      name: "alok",
    },
    {
      key: "2",
      EmployeeId: 2877179,
      adhaarNumber: 98123457,
      name: "alok",
    },
    {
      key: "3",
      EmployeeId: 2877175,
      adhaarNumber: 98123457,
      name: "alok",
    },
  ];

  return (
    <div>
      <Table dataSource={data} columns={columns} pagination={{ pageSize: 6 }} />
      <Button type="primary" onClick={showDrawer}>
        Addemployee details
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
          <Input placeholder="Aadhar Number" />
          <Input placeholder="Employee Id" />
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

export default ManageEmployee;
