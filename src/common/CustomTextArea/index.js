import React from "react";
import classNames from "classnames";
import Styles from "./index.module.scss";

function CustomTextArea({
  defaultValue,
  value,
  hasError,
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
  rows, // Add rows prop
}) {
  return (
    <div className={Styles.wrapper}>
      <textarea
        className={classNames(Styles.input, {
          [Styles.hasError]: hasError || errorMsg,
        })}
        rows={rows} // Set rows attribute to the value of rows prop
        id={id}
        name={name}
        disabled={disable}
        readOnly={readOnly}
        placeholder={placeholder}
        autoComplete={autoComplete}
        autoFocus={autoFocus}
        defaultValue={defaultValue}
        value={value}
        enterKeyHint={enterKeyHint}
        onKeyUp={onChange}
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

export default CustomTextArea;
