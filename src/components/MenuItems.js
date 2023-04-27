import {Link} from "react-router-dom";

const MenuItems = ({ items }, dropdown) => {
    function refreshPage(setID) {
        const url = window.location;
        if(url.pathname !== "/"){
            url.reload();
        }
        // save set to localstorage since location state doesn't work in new tab
        localStorage.setItem("collection", setID);
    }

  return (
    <p className="menu-items text-center py-2">

        <Link className="flex flex-row items-center justify-center py-2 transition duration-150 ease-in-out" to="/catalogue" onClick={() => refreshPage(items.url)}>
            <img className="w-5 mx-2" src={items.logo}/>
            <p className="hover:text-red-600">{items.title}</p>
        </Link>
    </p>
  );
};

export default MenuItems;