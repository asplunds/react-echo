import React, { CSSProperties, useMemo } from "react";
import cx from "./cx";
import { useText } from "./TextProvider";

type Header<T extends "h1" | "h2" | "h3" | "h4" | "h5" | "h6"> = {
  [Key in T]?: boolean;
};

type Base = {
  color?: string;
  inline?: boolean;
  italic?: boolean;
  bold?: boolean;
  family?: string;
  font?: string;
  size?: string | number;
  weight?:
    | CSSProperties["fontWeight"]
    | 100
    | 200
    | 300
    | 400
    | 500
    | 600
    | 700
    | 900;
};

type TextTags =
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "h5"
  | "h6"
  | "p"
  | "span"
  | "a"
  | "pre"
  | "code"
  | "div";
type As<T extends TextTags> = {
  as?: T;
} & React.ComponentProps<T>;

function Text<T extends TextTags>(
  props: Base & Header<"h1"> & As<T>
): JSX.Element;
function Text<T extends TextTags>(
  props: Base & Header<"h2"> & As<T>
): JSX.Element;
function Text<T extends TextTags>(
  props: Base & Header<"h3"> & As<T>
): JSX.Element;
function Text<T extends TextTags>(
  props: Base & Header<"h4"> & As<T>
): JSX.Element;
function Text<T extends TextTags>(
  props: Base & Header<"h5"> & As<T>
): JSX.Element;
function Text<T extends TextTags>(
  props: Base & Header<"h6"> & As<T>
): JSX.Element;
function Text<T extends TextTags = "p">(props: Base & As<T>): JSX.Element;
function Text(props: object) {
  const ctx = useText();
  const {
    h1,
    h2,
    h3,
    h4,
    h5,
    h6,
    as,
    className,
    color,
    style,
    children,
    family,
    font,
    bold,
    italic,
    inline,
    weight,
    size,
    ...rest
  } = props as {
    as?: TextTags;
    h1?: boolean;
    h2?: boolean;
    h3?: boolean;
    h4?: boolean;
    h5?: boolean;
    h6?: boolean;
    className?: string;
    style?: CSSProperties;
    children?: React.ReactNode;
  } & Base;
  const Component: TextTags = useMemo(() => {
    if (as != null) {
      return as;
    }
    switch (true) {
      case h1:
        return "h1";
      case h2:
        return "h2";
      case h3:
        return "h3";
      case h4:
        return "h4";
      case h5:
        return "h5";
      case h6:
        return "h6";
      default:
        return "p";
    }
  }, [as, h1, h2, h3, h4, h5, h6]);

  const styles = useMemo(() => {
    return {
      color,
      display: inline ? "inline" : undefined,
      fontWeight: bold ? "bold" : weight,
      fontStyle: italic ? "italic" : undefined,
      fontFamily: family ?? font,
      fontSize: size,
      ...style,
    };
  }, [color, bold, inline, italic, family, font, style]);

  if (family && font) {
    throw new Error(
      "React Echo: 'font' and 'family' are aliases, both cannot be defined simultaneously"
    );
  }

  if (weight && bold) {
    throw new Error(
      "React Echo: 'bold' and 'weight' conflict, both cannot be defined simultaneously"
    );
  }

  return (
    <Component
      style={styles}
      className={cx(ctx.classNames.text, {
        [ctx.classNames.h]: h1 || h2 || h3 || h4 || h5 || h6,
        [ctx.classNames.h1]: h1,
        [ctx.classNames.h2]: h2,
        [ctx.classNames.h3]: h3,
        [ctx.classNames.h4]: h4,
        [ctx.classNames.h5]: h5,
        [ctx.classNames.h6]: h6,
        [ctx.classNames.tiny]: size === "tiny",
        [ctx.classNames.small]: size === "small",
        [ctx.classNames.inline]: inline,
        [ctx.classNames.bold]: bold,
      })}
      {...(rest as object)}
    >
      {children}
    </Component>
  );
}

export default Text;
