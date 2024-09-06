import React from "react";
import { IoIosCheckbox } from "react-icons/io";
import { IoSquareOutline } from "react-icons/io5";
const CustomCheckBox = (props) => {
  // TODO please do not change inside component
  const {
    onCheckBoxClicked,
    label,
    isSelected,
    indeterminate,
    totalCount,
    value,
    classes,
  } = props;

  const radioButtonClicked = () => {
    onCheckBoxClicked?.(props, !isSelected);
  };

  const wrapperClass = `${classes ? classes.wrapper : ""} ${
    isSelected ? "font-medium" : ""
  }`;

  return (
    <div
      onClick={radioButtonClicked}
      className={`custom-checkbox-wrapper ${wrapperClass}`}
    >
      <div>
        {indeterminate ? (
          <i className="icon-subtract-square-filled text-primary-main text-icon-lg"></i>
        ) : isSelected ? (
          // <i className="icon-checkmark-square-filled text-primary-main text-icon-lg"></i>
          <IoIosCheckbox fontSize={24} color="#ee2c3c" />
        ) : (
          // <i className="icon-square text-icon-lg"></i>
          <IoSquareOutline fontSize={24} />
        )}
      </div>
      <div className="custom-checkbox-label text-bodySmall text-greyscale-1">
        <span dangerouslySetInnerHTML={{ __html: label }} />
        {value !== "all" && totalCount !== undefined && (
          <span
            className={`pl-spacing2 ${
              isSelected ? "text-primary-main" : "text-greyscale-3"
            }`}
          >
            ({totalCount})
          </span>
        )}
      </div>
    </div>
  );
};

export default CustomCheckBox;
