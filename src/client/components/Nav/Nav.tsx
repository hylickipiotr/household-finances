import React from "react";
import { FiTag } from "react-icons/fi";
import { NavGroup } from "./NavGroup";

function Nav() {
  return (
    <div className="w-64 h-full pl-10 py-6 pr-3 space-y-4 bg-white">
      <NavGroup title="Tagi">
        <button
          type="button"
          aria-label="tag"
          className="flex w-full text-left items-center space-x-2 px-2 py-1 bg-transparent rounded-md hover:bg-gray-200 focus:outline-none"
        >
          <div className="flex-1 flex items-center space-x-2">
            <FiTag className="w-3.5 h-3.5 text-gray-900" />
            <p className="flex-1 text-sm leading-5 font-normal text-gray-900 truncate">
              Wakacje 2020
            </p>
          </div>
          <p className="text-xs leading-none font-normal text-gray-400">1</p>
        </button>
      </NavGroup>
    </div>
  );
}

export { Nav };
