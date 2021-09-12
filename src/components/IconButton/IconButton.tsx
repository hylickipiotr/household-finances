/* eslint-disable react/button-has-type */

import clsx from "clsx";
import * as React from "react";
import { cloneNode } from "src/helpers/cloneNode";

type IconButtonSize = "small" | "base";
type IconButtonType = "plain" | "secondary";

type IconButtonElement = HTMLButtonElement;
type IconButtonProps = Omit<
  React.ButtonHTMLAttributes<IconButtonElement>,
  "type"
> & {
  icon: React.ReactNode;
  htmlType?: React.ButtonHTMLAttributes<IconButtonElement>["type"];
  type?: IconButtonType;
  size?: IconButtonSize;
};

const classes = {
  base:
    "flex items-center justify-center text-gray-500 rounded-full hover:text-gray-900 focus:outline-none focus:ring",
  size: {
    small: "w-8 h-8",
    base: "w-10 h-10",
  },
  type: {
    plain: "bg-transparent",
    secondary: "bg-gray-100",
  },
  icon: {
    size: {
      small: "w-5 h-5",
      base: "w-6 h-6",
    },
  },
};

const IconButton = React.forwardRef<IconButtonElement, IconButtonProps>(
  (props, ref) => {
    const {
      icon,
      size = "base",
      type = "plain",
      htmlType = "button",
      className,
      ...rest
    } = props;

    return (
      <button
        ref={ref}
        type={htmlType}
        className={clsx(
          classes.base,
          classes.size[size],
          classes.type[type],
          className
        )}
        {...rest}
      >
        {cloneNode(icon, { className: classes.icon.size[size] })}
      </button>
    );
  }
);

export { IconButton };
