import "antd/dist/reset.css";
import Header from "./layout/header/Header";
import SideMenu from "./layout/sideMenu/SideMenu";
import Theme from "./layout/Theme";

function App() {
  return (
    <Theme>
      <div className="flex">
        <SideMenu />
        <Header />
      </div>
    </Theme>
  );
}

export default App;
