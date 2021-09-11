import clsx from "clsx";
import { useRouter } from "next/router";
import * as React from "react";
import {
  IoLayersOutline,
  IoLogOutOutline,
  IoPersonOutline,
  IoWallet,
} from "react-icons/io5";

/* -------------------------------------------------------------------------- */
/*                                    Logo                                    */
/* -------------------------------------------------------------------------- */

const Logo = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512 512"
    className="w-8 h-8"
  >
    <path
      fill="rgb(245, 158, 11)"
      d="M377 16c-74.44 0-135 60.56-135 135s60.56 135 135 135 135-60.56 135-135S451.44 16 377 16zm0 210a44.94 44.94 0 01-41.46-27.48l27.63-11.69A15 15 0 10377 166c-24.81 0-45-20.19-45-45s20.19-45 45-45a44.94 44.94 0 0141.46 27.48l-27.63 11.69A15.02 15.02 0 00362 121c0 8.27 6.73 15 15 15 24.81 0 45 20.19 45 45s-20.19 45-45 45z"
    />
    <path
      fill="rgb(37, 99, 235)"
      d="M450.04 298.94A164.01 164.01 0 01377 316c-85.92 0-156.72-66.02-164.33-150H181a147 147 0 00-60.25 12.71A104.03 104.03 0 0071.13 166H25.19l25.68 77.05A154.55 154.55 0 0044.18 256H0v120h44.09a150.44 150.44 0 0055.67 65.48 46.3 46.3 0 0121.24 39V496h90v-30h90v30h90v-15c0-25.1 8.88-49.52 25.01-68.76a149.56 149.56 0 0034.03-113.3zM151 286h-30v-30h30z"
    />
  </svg>
);

/* -------------------------------------------------------------------------- */
/*                                    Item                                    */
/* -------------------------------------------------------------------------- */

type NavigationItemProps = {
  icon: React.ReactNode;
  active?: boolean;
  onClick?: () => void;
  path?: string;
};

const NavigationItem: React.FC<NavigationItemProps> = ({
  icon,
  active,
  path,
  onClick,
}) => {
  const router = useRouter();

  const handleClick = () => {
    if (path) {
      router.push(path);
    }
    onClick?.();
  };

  const isActive = React.useMemo(() => {
    if (active !== undefined) return active;
    if (path && router.pathname.startsWith(path)) return true;
    return false;
  }, [active, router.pathname]);

  return (
    <li
      tabIndex={0}
      className={clsx(
        "relative flex justify-center items-center space-x-4 h-10 rounded-md hover:text-gray-700 focus:outline-none focus:text-gray-700 cursor-pointer",
        isActive
          ? "text-gray-700 before:absolute before:top-0 before:bottom-0 before:right-0 before:w-1 before:bg-blue-500 before:rounded-l-lg"
          : "text-gray-400"
      )}
      onClick={handleClick}
    >
      {icon}
    </li>
  );
};

/* -------------------------------------------------------------------------- */
/*                               NavigationList                               */
/* -------------------------------------------------------------------------- */

const NavigationList: React.FC = ({ children }) => (
  <ul className="mt-10 space-y-4">{children}</ul>
);

/* -------------------------------------------------------------------------- */
/*                                 Navigation                                 */
/* -------------------------------------------------------------------------- */

const items = [
  { icon: <IoWallet className="w-5 h-5" />, path: "/wallets" },
  { icon: <IoLayersOutline className="w-5 h-5" />, path: "/categories" },
];

const Navigation: React.VFC = () => {
  return (
    <div className="flex-shrink-0 flex flex-col justify-between pt-14 py-8 bg-white border-r border-gray-200 w-24">
      <div className="space-y-14">
        <div className="flex justify-center">
          <Logo />
        </div>
        <NavigationList>
          {items.map(({ icon, path }) => (
            <NavigationItem key={path} icon={icon} path={path} />
          ))}
        </NavigationList>
      </div>
      <NavigationList>
        <NavigationItem icon={<IoPersonOutline className="w-5 h-5" />} />
        <NavigationItem icon={<IoLogOutOutline className="w-5 h-5" />} />
      </NavigationList>
    </div>
  );
};

/* -------------------------------------------------------------------------- */

export { Navigation };
