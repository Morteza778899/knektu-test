import { Button } from "antd";
import {
  HomeIcon,
  SchoolIcon,
  StatisticIcon,
} from "../../asset/icons/CustomIcons";
import Logo from "./Logo";

const SideMenu = () => {
  return (
    <div className="h-[100vh] border-solid border-0 border-r-2 border-gray-br">
      <div className="flex flex-col">
        <Logo />
        <div className="flex flex-col px-6 py-3">
          <Button
            type="default"
            icon={<HomeIcon className="w-[22px] h-[22px] mr-3" />}
            className="h-[fit-content] w-full flex items-center p-4 text-xl mt-9 mb-14"
          >
            Home
          </Button>
          <Button
            type="text"
            icon={<SchoolIcon className="w-[22px] h-[22px] mr-3" />}
            className="h-[fit-content] w-full flex items-center  p-4 text-xl text-default-txt"
          >
            Schools
          </Button>
          <Button
            type="text"
            icon={<StatisticIcon className="w-[22px] h-[22px] mr-3" />}
            className="h-[fit-content] w-full flex items-center p-4 text-xl text-default-txt"
          >
            Statistic
          </Button>
        </div>
      </div>
    </div>
  );
};
export default SideMenu;
