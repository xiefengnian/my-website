"use client";
import { createContext, useState } from "react";
import MyButton from "./Button";

type ContextType = {
  count: number;
  setCount: (newCount: number) => void;
};

export const SomeContext = createContext<ContextType>({} as ContextType);

export const Counter: React.FC = () => {
  const [count, setCount] = useState(0);
  return (
    <SomeContext.Provider
      value={{
        count,
        setCount,
      }}
    >
      <div>
        <div>{count}</div>
        <button onClick={(e) => setCount(count + 1)}>click</button>
        <MyButton />
      </div>
    </SomeContext.Provider>
  );
};
