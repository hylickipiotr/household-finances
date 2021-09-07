import React from "react";
import { Navigation } from "../Navigation";

const Layout: React.FC = ({ children }) => (
  <div className="min-h-screen h-screen w-full flex overflow-hidden">
    <Navigation />
    <div className="flex-1 min-h-screen overflow-y-auto px-10 py-14 bg-white max-w-screen-xl mx-auto">
      {children}
    </div>
  </div>
);

export { Layout };
