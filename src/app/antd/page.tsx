import { Metadata } from "next";
import MyLayout from "./components/Layout";
import ToggleTheme from "./components/ToggleTheme";

export default async function AntdPage() {
  return (
    <MyLayout>
      <ToggleTheme />
    </MyLayout>
  );
}

export const metadata: Metadata = {
  title: "antd demo",
};
