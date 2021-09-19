import clsx from "clsx";
import * as React from "react";
import mergeRefs from "react-merge-refs";

type InputProps = React.InputHTMLAttributes<HTMLInputElement>;

type InputType = React.ForwardRefExoticComponent<
  React.PropsWithoutRef<InputProps> & React.RefAttributes<HTMLInputElement>
>;

const Input: InputType = React.forwardRef((props, ref) => {
  const { className, name, ...rest } = props;
  const innerRef = React.useRef<HTMLInputElement>(null);

  return (
    <div className="relative w-full h-10">
      <input
        id={props.id || props.name}
        name={name}
        autoComplete="off"
        className={clsx(
          "w-full pl-2.5 pr-12 h-full border border-gray-300 text-base rounded-md transition-colors ease-out duration-75 focus:outline-none focus:border-gray-500 focus:ring-1 focus:ring-gray-500 focus:ring-opacity-20",
          className
        )}
        ref={mergeRefs([innerRef, ref])}
        {...rest}
      />
      {!!props.maxLength && (
        <div className="absolute top-1/2 -translate-y-1/2 right-2.5 px-2 h-6 flex items-center text-sm bg-gray-200 text-gray-500 rounded">
          {props.maxLength - (innerRef.current?.value.length || 0)}
        </div>
      )}
    </div>
  );
});

export { Input };
export type { InputProps };
