import { Button } from "antd";
import logo from "../../asset/images/logo.png";

const Logo = () => {
  return (
    <div className="h-[100px] px-6 py-3 flex space-x-4 items-center border-solid border-0 border-b-2 border-gray-br">
      <img src={logo} alt="logo" className="w-44 h-12" />
      <Button className="text-[17px] border-2 w-[90px] h-[37px]">Tutor</Button>
    </div>
  );
};
export default Logo;
