/* eslint-disable react/button-has-type */

import clsx from "clsx";
import * as React from "react";
import { cloneNode } from "src/helpers/cloneNode";

type ButtonElement = HTMLButtonElement;
type ButtonType = "secondary" | "primary" | "outline";
type ButtonSize = "small" | "base";
type ButtonProps = Omit<React.ButtonHTMLAttributes<ButtonElement>, "type"> & {
  iconBefore?: React.ReactNode;
  type?: ButtonType;
  size?: ButtonSize;
  htmlType?: React.ButtonHTMLAttributes<ButtonElement>["type"];
};

const Button = React.forwardRef<ButtonElement, ButtonProps>((props, ref) => {
  const {
    size = "base",
    type = "secondary",
    htmlType = "button",
    className,
    iconBefore,
    children,
    ...rest
  } = props;

  return (
    <button
      ref={ref}
      type={htmlType}
      className={clsx(
        classes.container.default,
        classes.container.size[size],
        classes.container.type[type],
        className
      )}
      {...rest}
    >
      {iconBefore &&
        cloneNode(iconBefore, {
          className: clsx(
            classes.iconBefore.default,
            classes.iconBefore.size[size]
          ),
        })}
      <span>{children}</span>
    </button>
  );
});

const classes = {
  container: {
    default: "flex items-center transition duration-75",
    type: {
      primary:
        "bg-blue-600 text-white font-semibold shadow-md focus:bg-blue-700",
      secondary: "bg-gray-100 text-gray-500 hover:text-gray-900",
      outline:
        "ring-1 ring-inset ring-gray-200 bg-transparent text-gray-500 hover:bg-gray-50 hover:text-gray-900",
    },
    size: {
      base: "px-5 h-10 text-base rounded-lg",
      small: "px-4 h-8 text-base rounded-md",
    },
  },
  iconBefore: {
    default: "mr-3",
    size: {
      base: "w-5 h-5",
      small: "w-4 h-4",
    },
  },
};

export { Button };
