import { menuItems } from "@/constants/menuConstants";
import { useAppSelector } from "@/redux/hooks";
import { menuItemsType } from "@/types/menuTypes";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const Links = (): React.JSX.Element => {
  const pathname = usePathname();

  const { selected } = useAppSelector((state) => state.user);

  const filteredMenuItems: menuItemsType[] = menuItems.filter((mi) => {
    if (mi.name === "Create post" || mi.name === "Create event") {
      return selected !== "";
    }
    return true;
  });

  return (
    <ul className="flex">
      {filteredMenuItems.map((mi: menuItemsType) => (
        <Link href={mi.href} key={mi.name}>
          <li
            className={`min-w-[100px] p-2.5 rounded-xl font-medium text-center cursor-pointer border-gray-300 hover:bg-slate-400 hover:text-white ${
              pathname === "/" + mi.href ||
              (pathname === "/" && mi.href === "/")
                ? "bg-slate-400 text-white"
                : "text-white bg-transparent"
            }`}
          >
            {mi.name}
          </li>
        </Link>
      ))}
    </ul>
  );
};

export default Links;
