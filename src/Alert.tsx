import React, {ReactNode, useState} from "react";

interface Props {
  children: ReactNode;
  onClose: () => void;
}
const Alert = ({children, onClose}: Props) => {
  return (
    <div className={"alert alert-warning alert-dismissible "} role="alert">
      <strong>Holy guacamole! {children}</strong> You should check in on some of
      those fields below.
      <button
        type="button"
        className="btn-close"
        data-bs-dismiss="alert"
        aria-label="Close"
        onClick={onClose}
      ></button>
    </div>
  );
};

export default Alert;
