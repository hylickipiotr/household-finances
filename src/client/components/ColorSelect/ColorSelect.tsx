import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import clsx from "clsx";
import * as React from "react";
import { BiCheck } from "react-icons/bi";
import mergeRefs from "react-merge-refs";
import { Color } from "src/@types/Color";

type ColorSelectProps = {
  name?: string;
  colors?: Color[];
  defaultValue?: Color;
  value?: Color;
  onChange?: (value: Color) => void;
  className?: string;
};

const getColorCls = (color: Color) => {
  switch (color) {
    case "blue":
      return "bg-blue-600";
    case "green":
      return "bg-green-600";
    case "yellow":
      return "bg-yellow-300";
    case "orange":
      return "bg-yellow-600";
    case "purple":
      return "bg-purple-600";
    case "pink":
      return "bg-pink-600";
    case "indigo":
      return "bg-indigo-600";
    default:
      return "bg-gray-500";
  }
};

const defaultColors: Color[] = [
  "green",
  "yellow",
  "orange",
  "pink",
  "blue",
  "indigo",
  "purple",
  "gray",
];

const ColorSelect = React.forwardRef<HTMLButtonElement, ColorSelectProps>(
  (props, ref) => {
    const {
      name,
      className,
      defaultValue = "gray",
      colors = defaultColors,
    } = props;
    const innerRef = React.useRef<HTMLButtonElement>(null);
    const [open, setOpen] = React.useState(false);
    const [color, setColor] = React.useState(props.value || defaultValue);

    const width = React.useMemo(() => innerRef.current?.offsetWidth || 0, [
      open,
    ]);

    const value = props.value || color;
    const onChange = props.onChange || setColor;

    const handleSelect = (e: any) => {
      const color: Color = e.target.dataset.value;
      onChange(color);
    };

    return (
      <div className={clsx("relative w-full", className)}>
        <DropdownMenu.Root onOpenChange={setOpen}>
          <DropdownMenu.Trigger
            id={name}
            name={name}
            ref={mergeRefs([innerRef, ref])}
            className="w-full pl-3 pr-12 h-10 flex items-center border border-gray-300 text-left text-base rounded-md transition-colors ease-out duration-75 focus:outline-none focus:border-gray-500 focus:ring-1 focus:ring-gray-500 focus:ring-opacity-20"
          >
            <span
              className={clsx("w-2.5 h-2.5 rounded-full", getColorCls(value))}
            />
            <span className="ml-3 text-sm text-gray-900 capitalize">
              {value}
            </span>
          </DropdownMenu.Trigger>
          <DropdownMenu.Content
            side="bottom"
            sideOffset={4}
            align="start"
            className="bg-white max-h-64 py-1 border border-gray-300 rounded-md shadow-3xl overflow-y-auto"
            style={{ width }}
          >
            {colors.map((color) => (
              <DropdownMenu.DropdownMenuItem
                data-value={color}
                key={color}
                onSelect={handleSelect}
                className={clsx(
                  "group h-8 flex items-center justify-between px-3 cursor-pointer transition duration-75 focus:outline-none",
                  color === value
                    ? "bg-gray-200 focus:bg-gray-300"
                    : "bg-transparent focus:bg-gray-200"
                )}
              >
                <div className="flex items-center">
                  <span
                    className={clsx(
                      "w-2.5 h-2.5 rounded-full",
                      getColorCls(color)
                    )}
                  />
                  <span className="ml-3 text-sm text-gray-900 capitalize">
                    {color}
                  </span>
                </div>
                {color === value && (
                  <BiCheck className="w-5 h-5 text-gray-900" />
                )}
              </DropdownMenu.DropdownMenuItem>
            ))}
          </DropdownMenu.Content>
        </DropdownMenu.Root>
      </div>
    );
  }
);

export { ColorSelect };
export type { Color, ColorSelectProps };
