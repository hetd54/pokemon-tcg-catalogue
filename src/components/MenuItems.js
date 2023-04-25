const MenuItems = ({ items }, dropdown) => {
  return (
    <li className="menu-items">
        <a className="flex items-center whitespace-nowrap py-2 pr-8  transition duration-150 ease-in-out hover:text-neutral-700 focus:text-neutral-700 dark:hover:text-white dark:focus:text-white" href={items.url}>{items.title}</a>
    </li>
  );
};

export default MenuItems;