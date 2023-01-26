import Notification from "./Notification";
import User from "./User";

const Header = () => {
  return (
    <div className="h-[100px] w-full border-solid border-0 border-b-2 border-gray-br">
      <div className="flex justify-end space-x-5 px-12 py-6 ">
        <Notification />
        <User />
      </div>
    </div>
  );
};
export default Header;
