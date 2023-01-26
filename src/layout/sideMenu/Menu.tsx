import { Button } from "antd";
import {
  HomeIcon,
  SchoolIcon,
  StatisticIcon,
} from "../../asset/icons/CustomIcons";

const Menu = () => {
  return (
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
  );
};
export default Menu;
