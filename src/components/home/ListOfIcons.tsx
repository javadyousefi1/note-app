import React, { useState } from "react";
import {
  GoogleOutlined,
  LinkedinOutlined,
  WhatsAppOutlined,
  YoutubeOutlined,
} from "@ant-design/icons";
import { IconType } from "antd/es/notification/interface";
import { iconsList } from "./Icons";

const ListOfIcons: React.FC<{
  handleSelectedIcon: (iconName: string) => void;
  selectedIcon: string;
}> = ({ handleSelectedIcon, selectedIcon }) => {
  console.log(selectedIcon, "yrt6dfctuyfv");

  return (
    <div className="grid w-full grid-cols-4 gap-4 ">
      {Object.keys(iconsList).map((item) => (
        <div className="flex items-center justify-center">
          <button
            onClick={() => handleSelectedIcon(item)}
            key={item}
            className={` border w-14 h-14 border-gray-300 [&>span]:!text-2xl  ${
              selectedIcon === item ? "!border-primary rounded-full" : ""
            }`}
          >
            {iconsList[item]}
          </button>
        </div>
      ))}
    </div>
  );
};

export default ListOfIcons;
