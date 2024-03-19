import { ReactElement, ReactNode } from "react";

export default function PostLayout({ children }: { children: ReactNode }) {
  return <div style={{ minHeight: "100vh" }}>{children}</div>;
}
