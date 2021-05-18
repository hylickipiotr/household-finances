import classNames from "classnames";
import React, { ReactNode, RefObject, useRef, useState } from "react";
import { TableCellAligment } from "../Table/Cell";

export interface FieldProps<T> {
  value: T;
  onChange?: (value: T) => void;
  aligment?: TableCellAligment;
  previewElement?: (value: T) => ReactNode;
  children?: (options: {
    value: T;
    onChange?: (value: T) => void;
    ref: RefObject<HTMLElement>;
  }) => React.ReactNode;
}

export type FieldElementType = <T extends string | number>(
  props: FieldProps<T>
) => JSX.Element;

export type FieldMode = "preview" | "edit";

const Field: FieldElementType = ({
  aligment = "left",
  previewElement,
  value,
  onChange,
  children,
}) => {
  const inputRef = useRef<HTMLElement>(null);
  const [isFocused, setIsFocused] = useState(false);

  const aligmentClassName = {
    "text-left": aligment === "left",
    "text-right": aligment === "right",
    "text-center": aligment === "center",
  };

  const preview = previewElement ? previewElement(value) : value;
  const editable = children
    ? children({ value, onChange, ref: inputRef })
    : null;

  return (
    <div
      className="relative"
      tabIndex={0}
      onFocus={(e) => {
        e.preventDefault();
        setIsFocused(true);
        inputRef.current?.focus();
      }}
    >
      {isFocused ? (
        <div
          className="absolute top-0 left-0 w-full shadow-md z-10"
          style={{
            minWidth: "320px",
          }}
        >
          {editable}
        </div>
      ) : (
        <div className={classNames("px-3 py-2 text-sm", aligmentClassName)}>
          {preview}
        </div>
      )}
    </div>
  );
};

export default Field;
