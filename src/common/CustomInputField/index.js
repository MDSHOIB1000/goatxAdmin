import React from "react";
import classNames from "classnames";
import Styles from "./index.module.scss";

function CustomInputField({
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
  autoFocus = "false",
  errorMsg,
  actionButtons,
  id,
}) {
  return (
    <div className={Styles.wrapper}>
      <input
        className={classNames(Styles.input, {
          [Styles.hasError]: hasError,
        })}
        id={id}
        type={type}
        name={name}
        disabled={disable}
        readOnly={readOnly}
        placeholder={placeholder}
        autoComplete={autoComplete}
        // autoFocus={autoFocus}
        // defaultValue={defaultValue}
        value={value}
        // enterKeyHint={enterKeyHint}
        // onKeyUp={onChange}
        onChange={onChange}
        onBlur={onBlur}
        // required
      />
      {placeholder && <label className={Styles.label}>{placeholder}</label>}
      {errorMsg && <span className={Styles.error}>{errorMsg}</span>}
      {!!actionButtons?.length &&
        actionButtons.map((actionButton, index) => actionButton(index))}
    </div>
  );
}

export default CustomInputField;
