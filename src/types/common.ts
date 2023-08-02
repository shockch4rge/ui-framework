export type Size = "lg" | "md" | "sm" | "xl" | "xs";

export type Side = "bottom" | "center" | "left" | "right" | "top";

export type TopPosition = `${Extract<Side, "top">}${Capitalize<Exclude<Side, "bottom" | "top">>}`;
export type CenterPosition = Extract<Side, "center"> | `${Extract<Side, "center">}${Capitalize<Exclude<Side, "bottom" | "center" | "top">>}`;
export type BottomPosition = `${Extract<Side, "bottom">}${Capitalize<Exclude<Side, "bottom" | "top">>}`;
export type Position = BottomPosition | CenterPosition | TopPosition;

export type Modify<A, B> = B & Omit<A, keyof B>;

export type NoChildren<T> = T & { children?: never };