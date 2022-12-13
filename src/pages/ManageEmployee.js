import React from "react";
import { Table, Button, Drawer, Input } from "antd";
import { useState } from "react";

function ManageEmployee() {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState("");
  const [file, setFile] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name);
  };

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
      title: "Upload picture",
      key: "uploadPicture",
      dataIndex: "uploadPicture",
      render: () => (
        <span>
          {" "}
          <input
            type="file"
            id="avatar"
            name="avatar"
            value={file}
            onChange={(e) => {
              setFile(e.target.value);
            }}
            accept="image/*"
            capture="environment"
          />
        </span>
      ),
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
      name: "slok",
    },
    {
      key: "3",
      EmployeeId: 2877175,
      adhaarNumber: 98123457,
      name: "anlok",
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
        <form className="flex flex-col space-y-3" onSubmit={handleSubmit}>
          <Input
            type="text"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
            placeholder="Name"
          />
          <Input placeholder="Aadhar Number" />
          <Input placeholder="Employee Id" />

          <Button
            type="submit"
            className="mt-4 bg-blue-600 rounded-lg text-white"
          >
            Submit
          </Button>
        </form>
      </Drawer>
    </div>
  );
}

export default ManageEmployee;
