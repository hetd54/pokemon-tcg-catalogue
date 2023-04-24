import MenuItems from "./MenuItems";

const Dropdown = ({ submenus, dropdown }) => {
    return (
      <ul className={`${dropdown ? "visible" : "hidden"}`}>
        {submenus.map((submenu, index) => (
    <MenuItems items={submenu} key={index} />
   ))}
  </ul>
 );

  };
  
  export default Dropdown;