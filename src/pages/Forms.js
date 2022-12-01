import React from "react";
import { Tag, Table } from "antd";

function Forms() {
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
            let color = tag.length > 5 ? "geekblue" : "green";
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
        <span>
          {/* <a>Invite {record.name}</a>
          <Divider type="vertical" />
          <a>Delete</a> */}
          Delete
        </span>
      ),
    },
  ];

  const data = [
    {
      key: "1",
      // name: "John Brown",
      // age: 32,
      address: "New York No. 1 Lake Park",
      complaint: "get the trash out of the park",
      tags: ["pending"],
    },
    {
      key: "2",
      // name: "Jim Green",
      // age: 42,
      address: "London No. 1 Lake Park",
      complaint: "get the trash out of the park",
      tags: ["pending"],
    },
    {
      key: "3",
      // name: "Joe Black",
      // age: 32,
      address: "Sidney No. 1 Lake Park",
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

export default Forms;
