import * as RTooltip from "@radix-ui/react-tooltip";
import { clsx } from "clsx";
import { createContext, type ComponentPropsWithRef, useContext } from "react";
import type { Modify } from "../../types/common";

export type SharedToolTipProps = {
    delayDuration?: number;
    side?: "bottom" | "left" | "right" | "top";
    hasArrow?: boolean;
};

export type TooltipProps = ComponentPropsWithRef<"div"> & SharedToolTipProps;

export type TooltipTriggerProps = ComponentPropsWithRef<"div">;

export type TooltipContentProps = ComponentPropsWithRef<"div">;

export const TooltipTrigger: React.FC<TooltipTriggerProps> = ({ children }) => {
    return <RTooltip.Trigger asChild>
        {children}
    </RTooltip.Trigger>;
};

const defaultProps = {
    side: "top",
    delayDuration: 400,
    hasArrow: true,
} satisfies Required<SharedToolTipProps>; 

export const TooltipContext = createContext<Required<SharedToolTipProps> & TooltipProps>(defaultProps);

export const TooltipContent: React.FC<TooltipContentProps> = ({ children, ...props }) => {
    const { side, hasArrow } = useContext(TooltipContext);

    return <RTooltip.Portal>
        <RTooltip.Content 
            className={clsx(
                "px-4 py-2.5 items-center rounded-sm select-none",
                "border-2 dark:border-none border-solid border-slate-300 shadow-lg",
                "bg-white dark:bg-gray-800",
            )}
            side={side}
            align="center" 
            sideOffset={6} 
        >
            {hasArrow && <RTooltip.Arrow className="fill-current text-slate-300 dark:text-gray-800" />}
            <p className="text-sm leading-none text-gray-700 dark:text-gray-300">
                {children}
            </p>
        </RTooltip.Content>
    </RTooltip.Portal>;
};

export const Tooltip: React.FC<TooltipProps> = ({ children, ...props }) => {
    return <RTooltip.Provider>
        <TooltipContext.Provider value={{ ...defaultProps, ...props }}>
            <RTooltip.Root delayDuration={props.delayDuration}>
                {children}
            </RTooltip.Root>
        </TooltipContext.Provider>
    </RTooltip.Provider>;
};