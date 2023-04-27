import { useState } from 'react';

function CategoryNavbar() {
  const [menuState, setMenuState] = useState({
    item1: false,
    item2: false,
    item3: false,
    item4: false,
  });

  const toggleMenu = (item) => {
    setMenuState((prevState) => ({ ...prevState, [item]: !prevState[item] }));
  };
  return (
    <nav className="w-full text-black py-3">
      <div className="mx-auto container flex justify-center items-center">
        <ul className="flex">
          <li className="relative mx-4">
            <a
              href="/clothing"
              className="hover:text-gray-400"
              onMouseEnter={() => toggleMenu('item1')}
              onMouseLeave={() => toggleMenu('item1')}
            >
              Clothing
              {menuState.item1 && (
                <ul className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 bg-gray-300 rounded-md p-2">
                  <li className="mb-2">
                    <a href="/mensclothing" className="hover:text-gray-400">
                      Men's Clothing
                    </a>
                  </li>
                  <li>
                    <a href="/womensclothing" className="hover:text-gray-400">
                      Women's Clothing
                    </a>
                  </li>
                </ul>
              )}
            </a>
          </li>
          <li className="relative mx-4">
            <a
              href="#"
              className="hover:text-gray-400"
              onMouseEnter={() => toggleMenu('item2')}
              onMouseLeave={() => toggleMenu('item2')}
            >
              Jewellery
              {menuState.item2 && (
                <ul className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 bg-gray-300 rounded-md p-2">
                  <li className="mb-2">
                    <a href="#" className="hover:text-gray-400">
                      Submenu Item 1
                    </a>
                  </li>
                  <li className="mb-2">
                    <a href="#" className="hover:text-gray-400">
                      Submenu Item 2
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-gray-400">
                      Submenu Item 3
                    </a>
                  </li>
                </ul>
              )}
            </a>
          </li>
          <li className="relative mx-4">
            <a
              href="#"
              className="hover:text-gray-400"
              onMouseEnter={() => toggleMenu('item3')}
              onMouseLeave={() => toggleMenu('item3')}
            >
              Electronics
              {menuState.item3 && (
                <ul className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 bg-gray-300 rounded-md p-2">
                  <li className="mb-2">
                    <a href="#" className="hover:text-gray-400">
                      Submenu Item 1
                    </a>
                  </li>
                  <li className="mb-2">
                    <a href="#" className="hover:text-gray-400">
                      Submenu Item 2
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-gray-400">
                      Submenu Item 3
                    </a>
                  </li>
                </ul>
              )}
            </a>
          </li>
          <li className="relative mx-4">
            <a
              href="#"
              className="hover:text-gray-400"
              onMouseEnter={() => toggleMenu('item4')}
              onMouseLeave={() => toggleMenu('item4')}
            >
              Examples
              {menuState.item4 && (
                <ul className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 bg-gray-300 rounded-md p-2">
                  <li className="mb-2">
                    <a href="#" className="hover:text-gray-400">
                      Submenu Item 1
                    </a>
                  </li>
                  <li className="mb-2">
                    <a href="#" className="hover:text-gray-400">
                      Submenu Item 2
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-gray-400">
                      Submenu Item 3
                    </a>
                  </li>
                </ul>
              )}
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default CategoryNavbar;

