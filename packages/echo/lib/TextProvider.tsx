import React, { createContext, useContext } from "react";

export type TextContext = {
  classNames: Record<string, string>;
};

const ctx = createContext<TextContext>({} as TextContext);

export const useText = () => useContext(ctx);

type TextProviderProps = TextContext & {
  children: React.ReactNode | React.ReactNode[] | JSX.Element | JSX.Element[];
};

const css = `

.h1 {
  display: block;
  font-size: 2em;
  margin-block-start: 0.67em;
  margin-block-end: 0.67em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  font-weight: bold;
}
.h2 {
  display: block;
  font-size: 1.5em;
  margin-block-start: 0.83em;
  margin-block-end: 0.83em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  font-weight: bold;
}
.h3 {
  display: block;
  font-size: 1.17em;
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  font-weight: bold;
}
.h4 {
  display: block;
  margin-block-start: 1.33em;
  margin-block-end: 1.33em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  font-weight: bold;
}
.h5 {
  display: block;
  font-size: 0.83em;
  margin-block-start: 1.67em;
  margin-block-end: 1.67em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  font-weight: bold;
}
.h6 {
  display: block;
  font-size: 0.67em;
  margin-block-start: 2.33em;
  margin-block-end: 2.33em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  font-weight: bold;
}

`;

export function TextProvider({ classNames, children }: TextProviderProps) {
  return (
    <>
      <style
        dangerouslySetInnerHTML={{
          __html: [
            [classNames.h1, "h1"],
            [classNames.h2, "h2"],
            [classNames.h3, "h3"],
            [classNames.h4, "h4"],
            [classNames.h5, "h5"],
            [classNames.h6, "h6"],
          ].reduce((a, [to, from]) => a.replace(from, to), css),
        }}
      />
      <ctx.Provider value={{ classNames }}>{children}</ctx.Provider>
    </>
  );
}
