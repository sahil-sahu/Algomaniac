import React from "react";
import { Tag, Table } from "antd";

function UserHistory() {
  const columns = [
    {
      title: "Address",
      dataIndex: "address",
      key: "address",
    },
    {
      title: "Complaint",
      key: "complaint",
      dataIndex: "complaint",
      // render :(complaint)=>{
      //   <span>{complaint}</span>
      // },
      render: (complaint) => <span>{complaint}</span>,
    },
    {
      title: "Tags",
      key: "tags",
      dataIndex: "tags",
      render: (tags) => (
        <span>
          {tags.map((tag) => {
            let color = "green";
            if (tag === "pending") {
              color = "volcano";
            }
            return (
              <Tag color={color} key={tag}>
                {tag.toUpperCase()}
              </Tag>
            );
          })}
        </span>
      ),
    },
    {
      title: "Action",
      key: "action",
      render: (text, record) => (
        <button className="p-2 font-bold text-white bg-blue-300 rounded-md hover:bg-blue-400">
          {/* <a>Invite {record.name}</a>
          <Divider type="vertical" />
          <a>Delete</a> */}
          Delete
        </button>
      ),
    },
  ];

  const data = [
    {
      key: "1",
      // name: "John Brown",
      // age: 32,
      address: "plot-no:45 Unit-8",
      complaint: "get the trash out of the park",
      tags: ["pending"],
    },
    {
      key: "2",
      // name: "Jim Green",
      // age: 42,
      address: "plot-no:45 Unit-9",
      complaint: "get the trash out of the park",
      tags: ["pending"],
    },
    {
      key: "3",
      // name: "Joe Black",
      // age: 32,
      address: "plot-no:45 Unit-10",
      complaint: "get the trash out of the park",
      tags: ["completed"],
    },
  ];

  // return <Table columns={columns} pagination={{ pageSize: 6 }} />;
  return (
    <div>
      <Table dataSource={data} columns={columns} />;
    </div>
  );
}

export default UserHistory;
