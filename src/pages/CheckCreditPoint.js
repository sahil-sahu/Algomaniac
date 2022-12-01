import React from "react";
import { Card } from "antd";

const CheckCreditPoint = () => (
  <div className="site-card-border-less-wrapper mt-8">
    <Card
      title="Rewards"
      bordered={false}
      style={{
        width: 300,
      }}
    >
      <p>august reward : 100 points</p>
      <p>Earning : $ 2.4</p>
    </Card>
  </div>
);

export default CheckCreditPoint;
