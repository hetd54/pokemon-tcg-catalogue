import {useState} from "react";
import MegaMenu from "./MegaMenu";


const Header = () => {
const [dropdown, setDropdown] = useState(false);
  return (
    <header>
      <div className="relative flex w-full items-center justify-end bg-neutral-50 py-2 text-neutral-600 shadow-lg dark:bg-neutral-700 dark:text-neutral-200 dark:shadow-black/5">
          <nav >
              <div className="flex-grow basis-[100%] items-center lg:!flex lg:basis-auto">
                  <ul className="mr-auto flex flex-row">
                      <li><a className="flex items-center whitespace-nowrap py-2 pr-8  transition duration-150 ease-in-out hover:text-neutral-700 focus:text-neutral-700 dark:hover:text-white dark:focus:text-white" href="/">Home</a></li>
                      <li><button className="flex items-center whitespace-nowrap py-2 pr-8  transition duration-150 ease-in-out hover:text-neutral-700 focus:text-neutral-700 dark:hover:text-white dark:focus:text-white" type="button" aria-expanded={dropdown ? "true" : "false"}
                                  onClick={() => setDropdown((prev) => !prev)}>
                          Collections
                      </button></li>
                  </ul>
              </div>
          </nav>
      </div>
        <div id="mega-menu-full-dropdown"
             className={`${dropdown ? "visible" : "hidden"} border-gray-200 shadow-sm bg-gray-50 md:bg-white border-y dark:bg-gray-800 dark:border-gray-600`}>
            <MegaMenu/>
        </div>
    </header>
  );
};

export default Header;