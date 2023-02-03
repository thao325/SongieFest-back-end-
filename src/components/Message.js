import React from "react";
import { Alert } from "react-bootstrap";

// pass children in as a prop to use it here
function Message({ variant, children }) {
  return <Alert variant={variant}>{children}</Alert>;
}

export default Message;
