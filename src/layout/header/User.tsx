import { Avatar } from "antd";
import { DownIcon } from "../../asset/icons/CustomIcons";
import avatarIMG from "../../asset/images/avatar.jpg";
import Title from "antd/es/typography/Title";

const User = () => {
  return (
    <div className="flex items-center space-x-2 hover:cursor-pointer">
      <Avatar size={43} src={avatarIMG} />
      <Title level={4} className="!mb-0">
        Darius
      </Title>
      <DownIcon className="w-6 h-6" />
    </div>
  );
};
export default User;
