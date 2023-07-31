import { clsx } from "clsx";
import type { ElementRef } from "react";
import { forwardRef, type ComponentProps, type PropsWithChildren } from "react";
import type { Size } from "../../types/common";

type BadgeSize = Exclude<Size, "xl">;

export type BadgeProps = PropsWithChildren<ComponentProps<"div">> & {
    icon?: React.ReactNode;
    iconPosition?: "left" | "right";
    shape?: "chip" | "pill";
    size?: BadgeSize;
};

const paddings: Record<BadgeSize, string> = {
    xs: "px-2 py-0.5",
    sm: "px-2 py-1",
    md: "px-3 py-1",
    lg: "px-4 py-1.5",
};

const textSizes: Record<BadgeSize, string> = {
    xs: "text-sm",
    sm: "text-sm",
    md: "text-base",
    lg: "text-lg",
};

export const Badge = forwardRef<ElementRef<"div">, BadgeProps>(({ children, className, icon, size = "sm", iconPosition = "right", shape = "pill", ...props }, ref) => {
    return <div 
        ref={ref}
        className={clsx(
            `${paddings[size]} flex items-center justify-between ${textSizes[size]} font-semibold gap-2`, 
            shape === "pill" ? "rounded-full" : "rounded-sm", 
            className
        )} 
        {...props}
    >
        {iconPosition === "left" && icon}
        {children}
        {iconPosition === "right" && icon}
    </div>;
});