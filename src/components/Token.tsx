"use client";

import { theme } from "antd";
import React, { PropsWithChildren } from "react";

export default function Token({ children }: PropsWithChildren) {
  const { token } = theme.useToken();
  return React.cloneElement(children, { token, ...children.props });
}
