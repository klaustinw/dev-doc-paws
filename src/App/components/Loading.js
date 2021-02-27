import React from "react";
import { Spinner } from "react-bootstrap";

const Loading = () => {
  return (
    <div className="text-center align-items-center my-3">
      <Spinner className="center-block" animation="border" variant="primary" />
    </div>
  );
};

export default Loading;
