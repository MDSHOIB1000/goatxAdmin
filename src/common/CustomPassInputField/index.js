import React, { useState } from "react";
import classNames from "classnames";
import Styles from "./index.module.scss";
import { FaEye, FaEyeSlash } from "react-icons/fa";

function CustomPassInputField({
  defaultValue,
  value,
  hasError,
  type,
  name,
  disable,
  readOnly,
  placeholder,
  enterKeyHint = "enter",
  onChange,
  onBlur,
  autoComplete,
  autoFocus = false,
  errorMsg,
  actionButtons,
  id,
}) {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  return (
    <div className={Styles.wrapper}>
      <input
        className={classNames(Styles.input, {
          [Styles.hasError]: hasError,
        })}
        id={id}
        type={showPassword ? "text" : type}
        name={name}
        disabled={disable}
        readOnly={readOnly}
        placeholder={placeholder}
        autoComplete={autoComplete}
        autoFocus={autoFocus}
        // defaultValue={defaultValue}
        value={value}
        // enterKeyHint={enterKeyHint}
        // onKeyUp={onChange}
        onChange={onChange}
        onBlur={onBlur}
      />
      {placeholder && <label className={Styles.label}>{placeholder}</label>}
      {errorMsg && <span className={Styles.error}>{errorMsg}</span>}
      {!!actionButtons?.length &&
        actionButtons.map((actionButton, index) => actionButton(index))}
      {type === "password" && (
        <button
          type="button"
          className={Styles.eyeButton}
          style={{position:"absolute",top:"21px"}}
          onClick={togglePasswordVisibility}
          aria-label={showPassword ? "Hide password" : "Show password"}
        >
          {showPassword ? <FaEye /> : <FaEyeSlash />}
        </button>
      )}
    </div>


  );
}

export default CustomPassInputField;
