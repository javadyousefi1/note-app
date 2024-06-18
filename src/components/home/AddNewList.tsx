import { QuestionCircleOutlined, SketchOutlined } from "@ant-design/icons";
import { Input, InputRef } from "antd";
import { useEffect, useRef } from "react";
import ListOfIcons from "./ListOfIcons";
import { iconsList } from "./Icons";

const AddNewList: React.FC<{
  handleSelectedIcon: (iconName: string) => void;
  selectedIcon: string;
}> = ({ handleSelectedIcon, selectedIcon }) => {
  const inputRef = useRef<InputRef>(null);

  useEffect(() => inputRef.current.focus(), []);

  const findTheSelectedIcon = iconsList[selectedIcon] ?? (
    <QuestionCircleOutlined style={{ color: "var(--color-space)" }} />
  );

  return (
    <div className="flex flex-col items-center justify-center py-10">
      {/* selcted icon */}
      <div className="flex flex-col items-center justify-center w-full p-5 bg-gray-300 rounded-lg ">
        <div className="flex items-center justify-center text-xl rounded-full w-28 h-28 bg-primary [&>span]:!text-5xl">
          {findTheSelectedIcon}
        </div>

        <Input
          ref={inputRef}
          size="large"
          placeholder="Enter Your List Name ..."
          className="mt-10 text-center w-[250px]"
        />
      </div>
      <div className="flex flex-col items-center justify-center w-full p-5 mt-4 bg-gray-300 rounded-lg ">
        <ListOfIcons
          handleSelectedIcon={handleSelectedIcon}
          selectedIcon={selectedIcon}
        />
      </div>
    </div>
  );
};

export default AddNewList;
