import {menuItems} from "../menuItems";
import MenuItems from "./MenuItems";

const MegaMenu = () => {
    return(
       <div
        className="grid max-w-screen-xl px-4 py-5 mx-auto text-gray-900 grid-cols-2 dark:text-white sm:grid-cols-4 md:px-6">
        {menuItems.map((menu, index) => {
            return <MenuItems items={menu} key={index} />;
        })}
       </div>
    )
}

export default MegaMenu;