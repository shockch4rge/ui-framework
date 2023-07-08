export type Size = "lg" | "md" | "sm" | "xl" | "xs";

export type Modify<A, B> = B & Omit<A, keyof B>;

export type NoChildren<T> = T & { children?: never };