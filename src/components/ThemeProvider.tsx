"use client";

import { ReactNode, createContext, useState } from "react";
import { StyleProvider } from "@ant-design/cssinjs";
import { ThemeProvider as AntdThemeProvider } from "antd-style";

type ThemeType = "light" | "dark";

type ContextType = {
  theme: ThemeType;
  setTheme: (newTheme: ThemeType) => void;
};

export const themeContext = createContext<ContextType>({} as ContextType);

export default function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<ContextType["theme"]>("light");
  return (
    <themeContext.Provider value={{ theme, setTheme }}>
      <themeContext.Consumer>
        {({ theme }) => {
          return (
            <AntdThemeProvider appearance={theme === "dark" ? "dark" : "light"}>
              <StyleProvider>{children}</StyleProvider>
            </AntdThemeProvider>
          );
        }}
      </themeContext.Consumer>
    </themeContext.Provider>
  );
}
