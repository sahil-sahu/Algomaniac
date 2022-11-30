import React from "react";
import { Button, Drawer } from "antd";
import { useState } from "react";

const Tasks = () => {
  const [open, setOpen] = useState(false);
  const showDrawer1 = () => {
    setOpen(true);
  };
  const onClose1 = () => {
    setOpen(false);
  };
  const showDrawer2 = () => {
    setOpen(true);
  };
  const onClose2 = () => {
    setOpen(false);
  };
  return (
    <div className="flex flex-col space-y-4 mt-8">
      <h1>Areas to visit today !</h1>
      <div>
        <Button type="primary" onClick={showDrawer1}>
          Ghatikia
        </Button>
        <Drawer
          title="Houses to visit"
          placement="right"
          onClose={onClose1}
          open={open}
        >
          <p>address 1</p>
          <p>address 2</p>
          <p>address 3</p>
        </Drawer>
      </div>
      <div>
        <Button type="primary" onClick={showDrawer2}>
          Unit-8
        </Button>
        <Drawer
          title="Houses to visit"
          placement="right"
          onClose={onClose2}
          open={open}
        >
          <p>address 1</p>
          <p>address 2</p>
          <p>address 3</p>
        </Drawer>
      </div>
    </div>
  );
};

export default Tasks;
