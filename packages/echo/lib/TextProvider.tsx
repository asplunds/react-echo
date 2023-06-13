import React, { createContext, useContext } from "react";

export type TextContext = {
  classNames: Record<string, string>;
};

const ctx = createContext<TextContext>({} as TextContext);

export const useText = () => useContext(ctx);

type TextProviderProps = TextContext & {
  children: React.ReactNode | React.ReactNode[] | JSX.Element | JSX.Element[];
};
export function TextProvider({ classNames, children }: TextProviderProps) {
  return <ctx.Provider value={{ classNames }}>{children}</ctx.Provider>;
}
