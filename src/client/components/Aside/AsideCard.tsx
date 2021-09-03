import clsx from "clsx";
import React from "react";

interface AsideCardValueProps {
  children: React.ReactNode;
  className?: string;
}

function AsideCardValue({ children, className }: AsideCardValueProps) {
  return (
    <p
      className={clsx(
        "text-base leading-6 font-semibold text-right",
        className
      )}
    >
      {children}
    </p>
  );
}

interface AsideCardIconProps {
  children: React.ReactNode;
  className?: string;
}

function AsideCardIcon({ children, className }: AsideCardIconProps) {
  return (
    <div
      className={clsx(
        "flex justify-center items-center w-8 h-8 rounded-md bg-gray-50",
        className
      )}
    >
      {children}
    </div>
  );
}

interface AsideCardProps {
  title: React.ReactNode;
  value: React.ReactNode;
  icon: React.ReactNode;
  className?: string;
}

function AsideCard({ title, value, className, icon }: AsideCardProps) {
  return (
    <div
      className={clsx(
        "flex p-4 justify-between bg-white rounded-lg shadow-sm",
        className
      )}
    >
      {icon}
      <div>
        {value}
        <p className="text-xs leading-4 font-normal text-gray-400 text-right">
          {title}
        </p>
      </div>
    </div>
  );
}

export { AsideCard, AsideCardIcon, AsideCardValue };
