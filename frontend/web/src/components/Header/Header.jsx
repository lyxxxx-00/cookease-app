import { BiMenuAltLeft } from "react-icons/bi";
import { useState } from "react";
import { menuItems } from "../../constants";

const Header = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  const handleToggleMenu = () => {
    setToggleMenu(!toggleMenu);
  };

  return (
    <header className="fixed top-3 left-0 right-0 z-30 px-5 md:px-13">
      <nav className="mx-auto flex max-w-6xl flex-col items-center justify-between rounded-lg border-2 border-orange-500 bg-orange-100 px-3 md:flex-row">
        <div className="flex w-full items-center py-1 justify-between md:flex-row">
          <h1 className="font-bold">
            <a href="#">CookEase</a>
          </h1>
          <button className="cursor-pointer rounded-full bg-orange-400 p-1 text-orange-100 md:hidden hover:scale-105 transition-transform">
            <BiMenuAltLeft className="text-2xl" onClick={handleToggleMenu} />
          </button>
        </div>

        <div
          className={`${
            toggleMenu ? "block" : "hidden"
          } w-full flex-col md:flex md:flex-row md:w-auto md:items-center md:px-5`}
        >
          <ul className="mt-1 flex flex-col items-start md:mt-0 md:flex-row py-2">
            {menuItems.map((item, index) => (
              <li key={index} className="w-full md:w-auto flex-shrink-0">
                <a
                  href={item.href}
                  className="block rounded-lg p-2 px-2 hover:bg-orange-200"
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
