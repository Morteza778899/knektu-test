import "antd/dist/reset.css";
import Title from "antd/es/typography/Title";
import Text from "antd/es/typography/Text";
import Header from "./layout/header/Header";
import SideMenu from "./layout/sideMenu/SideMenu";
import Theme from "./layout/Theme";
import Home from "./routes/home/Home";

function App() {
  return (
    <Theme>
      <div className="flex">
        <SideMenu />
        <div className="w-full">
          <Header />
          <div className="p-12">
            <Home />
            {/* The rest of the routes can be placed here */}
          </div>
        </div>
      </div>
    </Theme>
  );
}

export default App;
