import classNames from "classnames";
import React from "react";

export interface TagProps {
  className?: string;
  color?: "gray" | "red" | "green";
}

const Tag: React.FC<TagProps> = ({ className, children, color = "gray" }) => {
  const colorClassName = {
    "bg-gray-100 text-gray-800": color === "gray",
    "bg-red-100 text-red-800": color === "red",
    "bg-green-100 text-green-800": color === "green",
  };
  return (
    <span
      className={classNames(
        "inline-flex items-center px-2 py-0.5 rounded text-xs font-medium",
        colorClassName,
        className
      )}
    >
      {children}
    </span>
  );
};

export default Tag;
