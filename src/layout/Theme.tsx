import { ConfigProvider } from "antd";
import { FC } from "react";

interface Props {
  children?: React.ReactNode;
}

const Theme: FC<Props> = ({ children }) => {
  return (
    <ConfigProvider
      theme={{
        token: { colorPrimary: "#0077B7" },
        components: {
          Button: {
            colorBgContainer: "#F4FBFF",
            colorBorder: "#D9EBF4",
            colorText: "#0077B7",
          },
          Typography: {
            colorText: "#2C3E50 !important",
          },
        },
      }}
    >
      {children}
    </ConfigProvider>
  );
};
export default Theme;
