import { ConfigProvider } from "antd";
import { FC } from "react";

interface Props {
  children?: React.ReactNode;
}

const Theme: FC<Props> = ({ children }) => {
  return (
    <ConfigProvider
      theme={{
        token: { colorPrimary: "#0077B7", fontFamily: "AvenirMedium" },
        components: {
          Button: {
            colorBgContainer: "#F4FBFF",
            colorBorder: "#D9EBF4",
            colorText: "#0077B7",
          },
          Typography: {
            colorText: "#2C3E50 !important",
          },
          Badge:{
            colorBgContainer:'#000000'
          }
        },
      }}
    >
      {children}
    </ConfigProvider>
  );
};
export default Theme;
