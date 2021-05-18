import Head from "next/head";
import React from "react";
import Navbar from "../Navbar/Navbar";

export interface LayoutProps {
  title?: string;
}

const Layout: React.FC<LayoutProps> = ({ title, children }) => (
  <>
    <Head>
      <title>Household Finances{title ? ` - ${title}` : null}</title>
    </Head>
    <div className="h-screen flex overflow-hidden bg-gray-100">
      <div className="flex flex-col w-48">
        <Navbar />
      </div>
      <div className="flex flex-col w-0 flex-1 overflow-hidden">
        <main className="flex-1 relative z-0 overflow-y-auto focus:outline-none">
          <div className="py-6">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h1 className="text-2xl font-semibold text-gray-900">{title}</h1>
            </div>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
              {children}
            </div>
          </div>
        </main>
      </div>
    </div>
  </>
);

export default Layout;
