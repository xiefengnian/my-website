import { useContext } from "react";
import { SomeContext } from "./Counter";

export default function MyButton() {
  const { count } = useContext(SomeContext);
  return <div>Count Context: {count}</div>;
}
