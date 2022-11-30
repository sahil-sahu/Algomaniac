import React from "react";
import { Button, Form, Input } from "antd";

function Charts() {
  return (
    <div className="flex flex-col space-y-6">
      <h1 className="text-white">Add complaint</h1>
      <div>
        <Button type="primary">Upload Image</Button>
      </div>
      <div>
        <Form>
          <Form.Item label="Required Mark" name="requiredMarkValue"></Form.Item>
          <Form.Item
            label="Address"
            required
            tooltip="This is a required field"
          >
            <Input placeholder="input placeholder" />
          </Form.Item>
          <Form.Item
            label="Complaint"
            required
            tooltip="This is a required field"
          >
            <Input placeholder="input placeholder" />
          </Form.Item>
        </Form>
        <Form>
          <Form.Item className="mt-8">
            <Button type="primary">Submit</Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
}

export default Charts;
