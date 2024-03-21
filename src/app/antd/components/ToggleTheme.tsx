"use client";
import { themeContext } from "@/components/ThemeProvider";
import { Button, Space } from "antd";
import { useContext } from "react";

export default function ToggleTheme() {
  const { theme, setTheme } = useContext(themeContext);

  return (
    <Space direction="vertical">
      <div>current: {theme}</div>
      <Button
        onClick={() => {
          setTheme(theme === "dark" ? "light" : "dark");
        }}
      >
        toggle
      </Button>
    </Space>
  );
}
