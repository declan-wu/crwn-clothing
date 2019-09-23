import React from "react";
import "./custom-button.style.scss";
// import classNames from "classnames";

const CustomButton = ({
  children,
  isGoogleSignIn,
  inverted,
  ...otherProps
}) => (
  <button
    className={`${inverted ? "inverted" : ""} ${
      isGoogleSignIn ? "google-sign-in" : ""
    } custom-button`}
    {...otherProps}
  >
    {children}
  </button>
);

export default CustomButton;
// classNames={classNames({
//   isGoogleSignIn: isGoogleSignIn,
//   "custom-button": true,
//   inverted: inverted
// })}

// className={`${inverted ? "inverted" : ""} ${
//   isGoogleSignIn ? "google-sign-in" : ""
// } custom-button`}
