import React from "react";
const CustomRadioButton = (props) => {
  const {
    onRadioButtonClicked,
    label,
    isSelected,
    deSelectedCustomIcon,
    selectedIconClass = "",
    value,
    totalCount,
    labelClassName,
    classes,
  } = props;
  // TODO please do not change inside component
  const radioButtonClicked = () => {
    onRadioButtonClicked?.(props, !isSelected);
  };

  const classVal = `flex w-full cursor-pointer ${
    isSelected ? "font-medium" : ""
  } ${classes}`;

  return (
    <div onClick={radioButtonClicked} className={classVal}>
      <div className="items-center flex">
        {isSelected ? (
          <i
            className={`icon-checkmark-circle-filled text-lg text-primary-main ${selectedIconClass}`}
          ></i>
        ) : (
          deSelectedCustomIcon ?? (
            <i className="icon-circle text-greyscale-4 text-lg"></i>
          )
        )}
      </div>
      <div className="">
        <span className={`text-bodySmall ${labelClassName}`}>{label}</span>
        {value !== "all" && totalCount !== undefined && (
          <span
            className={`text-bodySmall pl-spacing2 ${
              isSelected ? "text-primary-main" : "text-greyscale-4"
            }`}
          >
            ({totalCount})
          </span>
        )}
      </div>
    </div>
  );
};

export default CustomRadioButton;
