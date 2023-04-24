import { menuItems } from '../menuItems';
import MenuItems from './MenuItems';
const Navbar = () => {
  return (
    <nav >
      <div className="!visible hidden flex-grow basis-[100%] items-center lg:!flex lg:basis-auto">
      <ul className="mr-auto flex flex-row">
        {menuItems.map((menu, index) => {
          return <MenuItems items={menu} key={index} />;
        })}
      </ul>
      </div>
    </nav>
  );
};

export default Navbar;