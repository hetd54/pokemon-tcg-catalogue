import Dropdown from './Dropdown';
import { useState } from "react";

const MenuItems = ({ items }) => {
    const [dropdown, setDropdown] = useState(false);
  return (
    <li className="menu-items">
      {items.submenu ? (
        <>
          <button className="flex items-center whitespace-nowrap py-2 pr-2  transition duration-150 ease-in-out hover:text-neutral-700 focus:text-neutral-700 dark:hover:text-white dark:focus:text-white lg:px-2" type="button" aria-expanded={dropdown ? "true" : "false"}
            onClick={() => setDropdown((prev) => !prev)}>
            {items.title}{' '}
          </button>
          <Dropdown submenus={items.submenu} dropdown={dropdown}  />
        </>
      ) : (
        <a className="flex items-center whitespace-nowrap py-2 pr-2  transition duration-150 ease-in-out hover:text-neutral-700 focus:text-neutral-700 dark:hover:text-white dark:focus:text-white lg:px-2" href={items.url}>{items.title}</a>
      )}
    </li>
  );
};

export default MenuItems;