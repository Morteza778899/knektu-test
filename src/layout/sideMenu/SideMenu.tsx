import Logo from "./Logo";
import Menu from "./Menu";

const SideMenu = () => {
  return (
    <div className="border-solid border-0 border-r-2 border-gray-br">
      <div className="flex flex-col">
        <Logo />
        <Menu />
      </div>
    </div>
  );
};
export default SideMenu;
