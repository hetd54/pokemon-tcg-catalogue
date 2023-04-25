import {Link} from "react-router-dom";

const MenuItems = ({ items }, dropdown) => {
  return (
    <p className="menu-items text-center">
        <Link className="py-2 transition duration-150 ease-in-out hover:text-neutral-700 focus:text-neutral-700 dark:hover:text-white dark:focus:text-white" to="/catalogue" state={{ id: `${items.url}` }}>{items.title}</Link>
    </p>
  );
};

export default MenuItems;