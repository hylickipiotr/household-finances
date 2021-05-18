import { Menu, Transition } from "@headlessui/react";
import classNames from "classnames";
import React, { Fragment } from "react";
import { HiChevronDown, HiFilter, HiSortAscending } from "react-icons/hi";
import TransactionsTable from "src/client/components/TransactionsTable/TransactionsTable";
import { useTransactionsQuery } from "src/client/graphql/types.generated";
import Layout from "../client/components/Layout/Layout";

const AddButton: React.FC = () => (
  <span className="relative z-0 inline-flex shadow-sm rounded-md">
    <button
      type="button"
      className="relative inline-flex items-center px-4 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500"
    >
      Dodaj
    </button>
    <Menu as="span" className="-ml-px relative block">
      {({ open }) => (
        <>
          <Menu.Button className="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500">
            <span className="sr-only">Więcej</span>
            <HiChevronDown className="h-5 w-5" aria-hidden="true" />
          </Menu.Button>
          <Transition
            show={open}
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <Menu.Items
              static
              className="origin-top-right absolute right-0 mt-2 -mr-1 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
            >
              <div className="py-1">
                <Menu.Item>
                  {({ active }) => (
                    <button
                      type="button"
                      className={classNames(
                        active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                        "block px-4 py-2 text-sm"
                      )}
                    >
                      Dodaj wiele
                    </button>
                  )}
                </Menu.Item>
              </div>
            </Menu.Items>
          </Transition>
        </>
      )}
    </Menu>
  </span>
);

const Index: React.FC = () => {
  const [{ data }] = useTransactionsQuery();

  if (!data) return null;

  return (
    <Layout title="Transakcje">
      <div className="flex justify-end mt-6 space-x-2">
        <button
          type="button"
          className="inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          <HiSortAscending
            className="-ml-0.5 mr-2 h-4 w-4"
            aria-hidden="true"
          />
          Sortuj
        </button>
        <button
          type="button"
          className="inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          <HiFilter className="-ml-0.5 mr-2 h-4 w-4" aria-hidden="true" />
          Filtruj
        </button>
        <AddButton />
      </div>
      <div className="mt-4">
        <TransactionsTable dataSource={data.transactions} />
      </div>
    </Layout>
  );
};

export default Index;
