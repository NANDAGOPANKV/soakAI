import React from "react";
import { Link } from "react-router-dom";
import EditMenu from "../../components/DropdownEditMenu";

function DashboardCard07() {
  return (
    <div className="flex flex-col col-span-full sm:col-span-6 xl:col-span-4 bg-white dark:bg-gray-800 shadow-sm rounded-xl">
      <div className="px-5 pt-10 p-8">
        <header className="flex justify-between items-start mb-2">
          <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-100 mb-2">
            Health Data Management
          </h2>
          {/* Menu button */}
          <EditMenu align="right" className="relative inline-flex">
            <li>
              <Link
                className="font-medium text-sm text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-gray-200 flex py-1 px-3"
                to="#0"
              >
                Profile
              </Link>
            </li>
            <li>
              <Link
                className="font-medium text-sm text-gray-600 dark:text-green-300 hover:text-gray-800 dark:hover:text-green-200 flex py-1 px-3"
                to="#0"
              >
                Health Records
              </Link>
            </li>
            <li>
              <Link
                className="font-medium text-sm text-gray-600 dark:text-green-300 hover:text-gray-800 dark:hover:text-green-200 flex py-1 px-3"
                to="#0"
              >
                Disease status
              </Link>
            </li>
            <li>
              <Link
                className="font-medium text-sm text-red-500 hover:text-red-600 flex py-1 px-3"
                to="#0"
              >
                Remove Card
              </Link>
            </li>
          </EditMenu>
        </header>
      </div>
    </div>
  );
}

export default DashboardCard07;
