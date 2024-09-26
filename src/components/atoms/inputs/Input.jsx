import React from "react";
import styles from "./Input.module.css";

export const Input = ({ name, type, placeholder, className, onChange, value}) => {
  return (
    <input
    className={className ? className : styles.input}
      id={name}
      type={type}
      name={name}
      placeholder={placeholder}
      onChange={onChange}
      value={value}
    />
  );
};
