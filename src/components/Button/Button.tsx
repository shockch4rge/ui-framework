import { CircleNotch } from "@phosphor-icons/react";
import { clsx } from "clsx";
import { forwardRef, type ComponentPropsWithRef } from "react";
import type { Size } from "../../types/common";

export type ButtonVariant = "danger" | "primary" | "secondary" | "warning";
export type ButtonSize = Exclude<Size, "xl">;

export type ButtonProps = ComponentPropsWithRef<"button"> & {
    variant?: ButtonVariant;
    size?: ButtonSize;
    loading?: boolean;
    shape?: "chip" | "pill";
};

const paddings: Record<ButtonSize, string> = {
    xs: "px-3 py-1",
    sm: "px-4 py-1.5",
    md: "px-6 py-2",
    lg: "px-6 py-3",
};

const textSizes: Record<ButtonSize, string> = {
    xs: "text-sm",
    sm: "text-sm",
    md: "text-base",
    lg: "text-lg",
};

export const Button: React.FC<ButtonProps> = forwardRef(({ variant = "primary", size = "md", loading = false, children, disabled, className, ...props }, ref) => {
    const isDisabled = disabled || loading;    

    return <button 
        ref={ref}
        className={clsx(
            `${paddings[size]} flex items-center gap-2 bg-blue-400 text-white ${textSizes[size]} focus-within:ring-2 ring-blue-300 rounded-sm`,
            isDisabled ? "opacity-50 pointer-events-none" : "hover:bg-blue-500 focus:bg-blue-600",
            className,
        )} 
        disabled={isDisabled} 
        {...props}
    >   
        {loading && <CircleNotch className="animate-spin text-xl" weight="bold" />}
        {children}
    </button>;
});