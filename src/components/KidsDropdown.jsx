import React from "react";
import { useRooms } from "../context/RoomContext";
import { Menu } from "@headlessui/react";
import { BsChevronDown } from "react-icons/bs";
const lis = [
  { name: "0 children" },
  { name: "1 child" },
  { name: "2 children" },
  { name: "3 children" },
  { name: "4 children" },
];

const KidsDropdown = () => {
  const { kids, setKids } = useRooms();
  return (
    <Menu as="div" className="w-full h-full bg-white relative">
      <Menu.Button className="w-full h-full flex items-center justify-between px-8">
        {kids === "0 children" ? "No children" : kids}
        <BsChevronDown className="text-base text-accent-hover" />
      </Menu.Button>

      <Menu.Items
        as="ul"
        className="bg-white absolute w-full flex flex-col z-40"
      >
        {lis.map((li, index) => {
          return (
            <Menu.Item
              onClick={() => setKids(li.name)}
              as="li"
              className="border-b last-of-type:border-b-0 h-12 hover:bg-accent hover:text-white w-full flex justify-center items-center cursor-pointer"
              key={index}
            >
              {li.name}
            </Menu.Item>
          );
        })}
      </Menu.Items>
    </Menu>
  );
};

export default KidsDropdown;
