import React, { useState } from "react";
import QrReader from "modern-react-qr-reader";

import "./qrcode.css";

const QrCode = () => {

  const [result, setResult] = useState('nothing');
  const [success, setSuccess] = useState(false);

  const handleScan = (data) => {
    if (data) {
      setResult(data);
      setSuccess(true);
    }
  };

  const handleError = (err) => {
    console.error(err);
  };

  const successContainer = <div className="successwrapper"><div className="successContainer"><img src="/Completed.gif" alt="" /><p> Successfully added</p><button onClick={()=>{setSuccess(false)}}>OK</button></div></div>

  return (
    <div>
        {success?successContainer:<QrReader
          delay={300}
          facingMode={"environment"}
          onError={handleError}
          onScan={handleScan}
          style={{ width: "30rem" }}
        />}
      </div>
  );
};

export default QrCode;
