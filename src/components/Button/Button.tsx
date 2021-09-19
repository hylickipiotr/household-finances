/* eslint-disable react/button-has-type */

import clsx from "clsx";
import * as React from "react";
import { cloneNode } from "src/helpers/cloneNode";

type ButtonElement = HTMLButtonElement;
type ButtonType = "secondary" | "primary";
type ButtonSize = "base";
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
    default:
      "flex items-center font-semibold text-base focus:outline-none focus:ring",
    type: {
      primary: "bg-blue-600 text-white shadow-md",
      secondary: "bg-gray-200 text-gray-900 focus:ring-black",
    },
    size: {
      base: "px-6 py-3 rounded-lg",
    },
  },
  iconBefore: {
    default: "mr-3",
    size: {
      base: "w-5 h-5",
    },
  },
};

export { Button };
