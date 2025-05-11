import { AlignLeft, AlignRight, Menu } from "lucide-react";
import React from "react";
const Navbar = () => {
  const [opened, setOpened] = React.useState(false);

  const toggleNav = () => {
    setOpened(!opened);
  };

  return (
    <div>
      <div className="w-full text-gray-700 bg-teal-50 border-b border-gray-200 dark-mode:text-gray-200 dark-mode:bg-gray-800">
        <div
          x-data="{ open: false }"
          className="flex flex-col max-w-screen-xl px-4 mx-auto md:items-center md:justify-between md:flex-row md:px-6 lg:px-8">
          <div className="py-4 flex flex-row items-center justify-between">
            <a
              href="#"
              className="text-lg font-semibold tracking-widest text-teal-950 uppercase rounded-lg dark-mode:text-white focus:outline-none focus:shadow-outline">
              QR generator
            </a>
            <button
              className="md:hidden rounded-lg focus:outline-none focus:shadow-outline"
              onClick={() => toggleNav()}>
              <AlignLeft />
            </button>
          </div>

          <nav
            className={
              "flex-col flex-grow pb-4 md:pb-0 md:flex md:justify-end md:flex-row" +
              (opened
                ? " flex absolute w-full top-[60px] left-0 bg-white px-4 py-2 shadow-lg"
                : " hidden")
            }>
            <a
              className="px-4 py-2 mt-2 text-sm font-semibold text-white bg-teal-600 rounded-lg dark-mode:bg-gray-700 dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 md:mt-0 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
              href="#">
              Home
            </a>
            <a
              className="px-4 py-2 mt-2 text-sm font-semibold bg-transparent rounded-lg dark-mode:bg-transparent dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 md:mt-0 md:ml-4 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
              href="#">
              Portfolio
            </a>
            <a
              className="px-4 py-2 mt-2 text-sm font-semibold bg-transparent rounded-lg dark-mode:bg-transparent dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 md:mt-0 md:ml-4 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
              href="#">
              About
            </a>
            <a
              className="px-4 py-2 mt-2 text-sm font-semibold bg-transparent rounded-lg dark-mode:bg-transparent dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 md:mt-0 md:ml-4 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
              href="#">
              Contact
            </a>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Navbar;