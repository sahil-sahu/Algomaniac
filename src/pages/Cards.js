import React from "react";
import { useState } from "react";
import {
  Button,
  Form,
  Input,
  DatePicker,
  Select,
  Space,
  TimePicker,
} from "antd";

const Cards = () => {
  const { Option } = Select;
  const PickerWithType = ({ type, onChange }) => {
    if (type === "time") return <TimePicker onChange={onChange} />;
    if (type === "date") return <DatePicker onChange={onChange} />;
    return <DatePicker picker={type} onChange={onChange} />;
  };
  const [type, setType] = useState("time");

  return (
    <div>
      <Form>
        <Form.Item label="Required Mark" name="requiredMarkValue"></Form.Item>
        <Form.Item label="Address" required tooltip="This is a required field">
          <Input placeholder="input placeholder" />
        </Form.Item>
      </Form>
      <Space>
        <Select value={type} onChange={setType}>
          <Option value="time">Time</Option>
          <Option value="date">Date</Option>
          <Option value="week">Week</Option>
          <Option value="month">Month</Option>
          <Option value="quarter">Quarter</Option>
          <Option value="year">Year</Option>
        </Select>
        <PickerWithType type={type} onChange={(value) => console.log(value)} />
      </Space>
      <Space>
        <Select value={type} onChange={setType}>
          <Option value="time">Time</Option>
          <Option value="date">Date</Option>
          <Option value="week">Week</Option>
          <Option value="month">Month</Option>
          <Option value="quarter">Quarter</Option>
          <Option value="year">Year</Option>
        </Select>
        <PickerWithType type={type} onChange={(value) => console.log(value)} />
      </Space>
      <Form>
        <Form.Item className="mt-8">
          <Button type="primary">Submit</Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Cards;
