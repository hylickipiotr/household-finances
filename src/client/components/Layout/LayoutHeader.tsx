import React from "react";
import { RiAddLine } from "react-icons/ri";

function HeaderLogo() {
  return (
    <div>
      <p className="text-base leading-none font-bold text-white">Household</p>
      <p className="text-[10px] leading-none font-normal uppercase tracking-widest text-gray-200">
        Finances
      </p>
    </div>
  );
}

function HeaderActions() {
  return (
    <div className="flex items-center space-x-3">
      <button
        type="button"
        aria-label="Add transaction"
        className="flex items-center justify-center w-8 h-8 bg-transparent text-white rounded-full transition-colors duration-75 ease-out hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-600 focus:ring-gray-900"
      >
        <RiAddLine className="w-5 h-5" />
      </button>
      <img
        className="bg-gray-500 w-8 h-8 rounded-full shadow object-cover"
        src="https://randomuser.me/api/portraits/men/46.jpg"
        alt="user"
      />
    </div>
  );
}

function LayoutHeader() {
  return (
    <header className="flex items-center justify-between px-12 py-2 bg-gray-600">
      <HeaderLogo />
      <HeaderActions />
    </header>
  );
}

export { LayoutHeader, HeaderActions, HeaderLogo };
