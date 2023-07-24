import { clsx } from "clsx";
import type { ButtonProps, ButtonSize } from "../Button/Button";
import type { Modify } from "../../types/common";
import { CircleNotch } from "@phosphor-icons/react";

export type IconButtonProps = Modify<ButtonProps, {
    shape?: "chip" | "round";
    // FIXME: move to ButtonProps
    loadingIcon?: React.ReactNode;
}>;

const paddings: Record<ButtonSize, string> = {
    xs: "p-1",
    sm: "p-1.5",
    md: "p-2",
    lg: "p-3",
};

const iconSizes: Record<ButtonSize, string> = {
    xs: "text-base",
    sm: "text-base",
    md: "text-lg",
    lg: "text-xl",
};

export const IconButton: React.FC<IconButtonProps> = ({ 
    children, 
    className, 
    size = "md",
    shape = "chip", 
    disabled,
    loading = false, 
    loadingIcon = <CircleNotch className="animate-spin text-xl" weight="bold" />,
    ...props 
}) => {
    const isDisabled = disabled || loading;

    return <button 
        className={clsx(
            "flex items-center gap-2 bg-blue-400 text-white focus-within:ring-2 ring-blue-300 mix-blend-exclusion",
            `${paddings[size]} ${iconSizes[size]}`,
            shape === "chip" ? "rounded-sm" : "rounded-full",
            isDisabled ? "opacity-50 pointer-events-none" : "hover:bg-blue-500 focus:bg-blue-600",
            className,
        )} 
        {...props}
    >
        {loading ? loadingIcon : children}
    </button>;
};