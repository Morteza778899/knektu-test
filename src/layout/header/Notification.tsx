import { Badge, Button } from "antd";
import { MessageIcon, NotificationIcon } from "../../asset/icons/CustomIcons";

const Notification = () => {
  return (
    <div className="flex space-x-4">
      <Badge count={2} color="#FFB703" offset={[-10, 5]}>
        <Button
          shape="circle"
          icon={<MessageIcon />}
          className="!w-[53px] h-[53px] !p-3 border-2 border-gray-br bg-transparent text-default-txt"
        />
      </Badge>
      <Badge count={11} color="#FFB703" offset={[-10, 5]}>
        <Button
          shape="circle"
          icon={<NotificationIcon />}
          className="!w-[53px] h-[53px] !p-3 border-2 border-gray-br bg-transparent text-default-txt"
        />
      </Badge>
    </div>
  );
};
export default Notification;
