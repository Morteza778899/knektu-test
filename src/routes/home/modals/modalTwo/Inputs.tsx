import Input from "antd/es/input/Input";
import { FC } from "react";
import { AddIcon, DeleteIcon } from "../../../../asset/icons/CustomIcons";

const Inputs: FC = () => {
  const data = [
    ["Kenyatta University College", "Business and Enterprise", "Degree"],
    ["Kolang College", "Computer Science", "Diploma"],
    ["Kenyatta University College", "Math", "Diploma"],
    [, ,],
  ];
  return (
    <>
      {data.map((value, index) => (
        <div className="border-solid border-0 border-b-2 border-gray-br">
          <div className="flex space-x-6 py-6">
            <Input
              placeholder="Type here..."
              className="rounded h-[60px] text-[20px]"
              value={value[0]}
            />
            <Input
              size="large"
              placeholder="Type here..."
              className="rounded h-[60px] text-[20px]"
              value={value[1]}
            />
            <Input
              size="large"
              placeholder="Type here..."
              className="rounded h-[60px] text-[20px]"
              value={value[2]}
            />
            <div className="w-[90px]">
              {index === 3 ? (
                <AddIcon className="text-[#B9B9B9] w-[35px] h-[43px] m-2 cursor-pointer" />
              ) : (
                <DeleteIcon className="text-[#E84C3C] w-[35px] h-[43px] m-2 cursor-pointer" />
              )}
            </div>
          </div>
        </div>
      ))}
    </>
  );
};
export default Inputs;
