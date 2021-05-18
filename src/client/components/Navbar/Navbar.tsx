import classNames from "classnames";
import { useRouter } from "next/dist/client/router";
import React from "react";
import { HiPencil } from "react-icons/hi";

export interface Bookmark {
  name: string;
  path: string;
}

export interface BookmarkProps extends Bookmark {
  isActive: boolean;
  onEdit: (options: { name: string; path: string }) => void;
  onClick: (options: { path: string }) => void;
}

const bookmarks: Bookmark[] = [
  { name: "Maj 2021", path: "/?year=2021&month=4" },
];

const BookmarkElement: React.FC<BookmarkProps> = ({
  name,
  path,
  isActive,
  onEdit,
  onClick,
}) => {
  const handleClick = () => {
    onClick({ path });
  };
  const handleEdit: React.MouseEventHandler<HTMLButtonElement> = (e) => {
    e.stopPropagation();
    onEdit({ name, path });
  };

  const activeClassName = "bg-gray-900 text-white";
  const inactiveClassNmae = "text-gray-300 hover:bg-gray-700";

  return (
    <button
      type="button"
      className={classNames(
        "group flex items-center justify-between gap-2 w-full pl-2 pr-1 text-sm font-medium rounded-md focus:outline-none",
        {
          [activeClassName]: isActive,
          [inactiveClassNmae]: !isActive,
        }
      )}
      onClick={handleClick}
    >
      <span className="group-hover:text-white truncate py-2">{name}</span>
      <button
        type="button"
        className={classNames("p-2 rounded-md focus:outline-none", {
          "hover:bg-gray-700": isActive,
          "hover:bg-gray-900": !isActive,
        })}
        onClick={handleEdit}
      >
        <HiPencil />
      </button>
    </button>
  );
};

const Navbar: React.FC = () => {
  const router = useRouter();
  const path = router.asPath;

  const handleBookmarkClick: BookmarkProps["onClick"] = ({ path }) => {
    router.push(path);
  };

  const handleBookmarkEdit: BookmarkProps["onEdit"] = () => {
    console.log("Edited bookmark");
  };

  return (
    <nav className="flex-1 flex flex-col py-2 px-2 bg-gray-800 overflow-y-auto">
      <div className="mt-4">
        <span className="px-2 font-semibold text-xs uppercase tracking-wider text-gray-500">
          Zakładki
        </span>
        <div className="space-y-1 mt-1">
          {bookmarks.map((props) => (
            <BookmarkElement
              key={props.path}
              {...props}
              isActive={props.path === path}
              onClick={handleBookmarkClick}
              onEdit={handleBookmarkEdit}
            />
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
