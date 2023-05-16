import { useState } from 'react';

function CategoryNavbar() {
  const [activeMenu, setActiveMenu] = useState(null);

  const toggleMenu = (item) => {
    setActiveMenu(activeMenu === item ? null : item);
  };

  const menuItems = [
    {
      label: 'Clothing',
      subMenuItems: [
        { label: "Men's Clothing", link: '/mensclothing' },
        { label: "Women's Clothing", link: '/womensclothing' },
      ],
    },
  ];

  return (
    <nav className="w-full text-black py-3">
      <div className="mx-auto container flex justify-center items-center">
        <ul className="flex">
          {menuItems.map((item) => (
            <li key={item.label} className="relative mx-4">
              <a
                href={item.subMenuItems[0].link}
                className="hover:text-gray-600"
                onMouseEnter={() => toggleMenu(item.label)}
                onMouseLeave={() => toggleMenu(item.label)}
              >
                {item.label}
                {activeMenu === item.label && (
                  <ul className="absolute top-full left-1/2 transform -translate-x-1/2 mt-1 bg-gray-100 rounded-md p-3 border-b-2 border-r-2">
                    {item.subMenuItems.map((subMenuItem) => (
                      <li key={subMenuItem.label} className="mb-2">
                        <a href={subMenuItem.link} className="hover:text-gray-400">
                          {subMenuItem.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                )}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default CategoryNavbar;
