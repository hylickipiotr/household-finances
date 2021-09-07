import React, { cloneElement } from "react";

type CloneNode = <P extends { [k: string]: unknown } = any>(
  children: React.ReactNode,
  extraProps?: P | ((props?: P) => P)
) => React.ReactNode;

const cloneNode: CloneNode = (children, extraProps) =>
  React.Children.map(
    children,
    (child) =>
      React.isValidElement(child) &&
      cloneElement(
        child,
        extraProps instanceof Function ? extraProps(child.props) : extraProps
      )
  );

export { cloneNode };
