"use client";
import {
  Breadcrumb,
  Button,
  Layout,
  Menu,
  MenuProps,
  Space,
  theme,
} from "antd";
import Sider from "antd/es/layout/Sider";
import {
  UserOutlined,
  LaptopOutlined,
  NotificationOutlined,
  LeftOutlined,
} from "@ant-design/icons";
import React, { PropsWithChildren, useContext } from "react";
import { themeContext } from "@/components/ThemeProvider";

const items1: MenuProps["items"] = ["1", "2", "3"].map((key) => ({
  key,
  label: `nav ${key}`,
}));

const items2: MenuProps["items"] = [
  UserOutlined,
  LaptopOutlined,
  NotificationOutlined,
].map((icon, index) => {
  const key = String(index + 1);

  return {
    key: `sub${key}`,
    icon: React.createElement(icon),
    label: `subnav ${key}`,

    children: new Array(4).fill(null).map((_, j) => {
      const subKey = index * 4 + j + 1;
      return {
        key: subKey,
        label: `option${subKey}`,
      };
    }),
  };
});

const MyLayout: React.FC<PropsWithChildren> = ({ children }) => {
  const { theme } = useContext(themeContext);
  return (
    <Layout>
      <Layout.Header
        style={{ display: "flex", alignItems: "center", paddingLeft: 24 }}
      >
        <Space>
          <Button
            type="primary"
            onClick={() => {
              history.go(-1);
            }}
            style={{ color: "white" }}
          >
            <LeftOutlined />
          </Button>
          <div style={{ color: "white", paddingRight: 16, cursor: "pointer" }}>
            My Website
          </div>
        </Space>

        <Menu
          theme="dark"
          items={items1}
          mode="horizontal"
          defaultSelectedKeys={["2"]}
          style={{ flex: 1, minWidth: 0 }}
        />
      </Layout.Header>
      <Layout style={{ minHeight: "calc(100vh - 64px)" }}>
        <Sider width={200}>
          <Menu
            mode="inline"
            defaultSelectedKeys={["1"]}
            defaultOpenKeys={["sub1"]}
            style={{ height: "100%", borderRight: 0 }}
            items={items2}
          ></Menu>
        </Sider>
        <Layout style={{ padding: "0 24px 24px" }}>
          <Breadcrumb
            style={{ margin: "16px 0" }}
            items={[
              {
                title: "Home",
              },
              {
                title: "List",
              },
              {
                title: "App",
              },
            ]}
          />
          <Layout.Content
            style={{
              padding: 24,
              margin: 0,
              minHeight: 280,
            }}
          >
            {children}
          </Layout.Content>
        </Layout>
      </Layout>
    </Layout>
  );
};

export default MyLayout;
