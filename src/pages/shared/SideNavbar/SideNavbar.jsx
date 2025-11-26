import React, { useState } from "react";
import { Link } from "react-router-dom";
import { menuItems } from "../../../utils/menuItems";
import { MdArrowForwardIos } from "react-icons/md";
import { IoIosArrowDown } from "react-icons/io";

export default function SideNavbar({ isOpen }) {
  const [openMenus, setOpenMenus] = useState({});

  const toggleMenu = (title) => {
    setOpenMenus((prev) => ({ ...prev, [title]: !prev[title] }));
  };

  const renderIcon = (Icon) => {
    if (!Icon) return null;

    // React component icon
    if (typeof Icon === "function") {
      const Component = Icon;
      return <Component className="text-lg" />;
    }

    // Image icon
    if (typeof Icon === "string" && Icon.includes(".")) {
      return <img src={Icon} className="w-5 h-5" alt="" />;
    }

    // Emoji or text icon
    return <span className="text-lg">{Icon}</span>;
  };

  return (
    <div className="bg-white border-r border-[#cbd5e6] shadow-sm h-screen overflow-y-auto p-4 text-black">
      {/* Logo */}
      <div
        className={`border-b border-[#cbd5e6] text-black p-5 text-center ${
          !isOpen && "hidden"
        }`}
      >
        Logo
      </div>

      {menuItems.map((section, index) => (
        <div key={index} className="my-6">
          {isOpen && (
            <p className="text-gray-500 text-xs uppercase mb-2">
              {section.section}
            </p>
          )}

          <ul className="space-y-1">
            {section.items.map((item, i) => (
              <li key={i}>
                {item.subItems ? (
                  <div>
                    {isOpen && (
                      <button
                        onClick={() => toggleMenu(item.title)}
                        className="flex justify-between items-center w-full px-3 py-2 rounded hover:bg-gray-100"
                      >
                        <span>
                          {item.icon} {item.title}
                        </span>
                        <span>
                          {openMenus[item.title] ? (
                            <IoIosArrowDown />
                          ) : (
                            <MdArrowForwardIos />
                          )}
                        </span>
                      </button>
                    )}

                    {/* ▼ Submenu শুধু sidebar open থাকলে show হবে */}
                    {isOpen && openMenus[item.title] && (
                      <ul className="ml-6 mt-1 space-y-1">
                        {item.subItems.map((sub, si) => (
                          <li key={si}>
                            <Link
                              to={sub.path}
                              className="block px-3 py-1 rounded hover:bg-gray-100"
                            >
                              {sub.title}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                ) : (
                  <Link
                    to={item.path}
                    className={`flex items-center px-3 py-2 rounded hover:bg-gray-100 ${
                      !isOpen && "justify-center"
                    }`}
                  >
                    {renderIcon(item.icon)}
                    {isOpen && <span className="ml-2">{item.title}</span>}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
