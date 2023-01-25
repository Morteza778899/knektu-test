import { Button } from "antd";
import logo from "../../asset/images/logo.png";
import Notification from "./Notification";
import User from "./User";

const Header = () => {
  return (
    <div className="container">
      <div className="grid grid-cols-12 divide-x-2 divide-y-0 divide-solid">
        <div className="col-span-3 flex space-x-4 items-center px-12 py-6">
          <img src={logo} alt="logo" className="w-44 h-12" />
          <Button className="text-[17px] border-2 w-[90px] h-[37px]">
            Tutor
          </Button>
        </div>
        <div className="col-span-9 flex justify-end space-x-5 px-12 py-6 border-gray-br">
          <Notification />
          <User />
        </div>
      </div>
    </div>
  );
};
export default Header;
