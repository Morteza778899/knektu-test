import { Avatar, Badge, Button } from "antd";
import logo from "../../asset/images/logo.png";
import {
  DownIcon,
  MessageIcon,
  NotificationIcon,
} from "../../asset/icons/CustomIcons";
import avatarIMG from "../../asset/images/avatar.jpg";
import Title from "antd/es/typography/Title";

const Logo = () => {
  return (
    <div className="col-span-3 flex space-x-4 items-center px-12 py-6">
      <img src={logo} alt="logo" className="w-44 h-12" />
      <Button className="text-[17px] border-2 w-[90px] h-[37px]">Tutor</Button>
    </div>
  );
};
export default Logo;
