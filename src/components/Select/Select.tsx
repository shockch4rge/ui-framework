import { CaretDown, CaretUp, Check } from "@phosphor-icons/react";
import * as RSelect from "@radix-ui/react-select";
import { clsx } from "clsx";
import type { ComponentProps, ComponentPropsWithRef, ElementRef, PropsWithChildren } from "react";
import { forwardRef } from "react";

export type SelectProps = ComponentProps<"button"> & PropsWithChildren<{
	defaultValue?: string;
	placeholder?: string;
	icon?: React.ReactNode;
    onSelect?: (value: string) => void;
	// TODO: multi-select menu
}>;

export const Select = forwardRef<ElementRef<"div">, SelectProps>(({ children, onSelect, placeholder, className, icon, ...props }) => {
    return <RSelect.Root onValueChange={onSelect}>
        <RSelect.Trigger
            aria-label={props["aria-label"]}
            className={clsx(
                "w-52 h-10 px-4 bg-white hover:bg-gray-100 flex items-center justify-between gap-3 leading-none rounded-sm data-[placeholder]:max-w-prose data-[placeholder]:truncate",
                className
            )}
        >
            <RSelect.Value placeholder={placeholder} />
            <RSelect.Icon>
                {icon ?? <CaretDown />}
            </RSelect.Icon>
        </RSelect.Trigger>
        <RSelect.Portal>
            <RSelect.Content className="overflow-hidden bg-white rounded-md shadow-[0px_10px_38px_-10px_rgba(22,_23,_24,_0.35),0px_10px_20px_-15px_rgba(22,_23,_24,_0.2)]">
                <RSelect.ScrollUpButton className="h-8 flex items-center justify-center bg-white cursor-default">
                    <CaretUp />
                </RSelect.ScrollUpButton>
                <RSelect.Viewport className="p-4">
                    {children}
                </RSelect.Viewport>
                <RSelect.ScrollDownButton className="h-8 bg-white text-black flex items-center justify-center cursor-default">
                    <CaretDown />
                </RSelect.ScrollDownButton>
            </RSelect.Content>
        </RSelect.Portal>
    </RSelect.Root>;
});

export type SelectItemGroupProps = ComponentProps<"div"> & PropsWithChildren<{
    label: string;
}>;

export const SelectSeparator = forwardRef<ElementRef<"div">, ComponentPropsWithRef<"div">>((props, ref) => {
    return <RSelect.Separator ref={ref} className="h-[1px] m-2 bg-gray-200" {...props}/>;
});

export const SelectItemGroup = forwardRef<ElementRef<"div">, SelectItemGroupProps>(({ children, label, className }, ref) => {
    return <RSelect.Group ref={ref}>
        <RSelect.Label className={clsx(
            "my-0.5 pl-8 text-lg font-bold tracking-wide leading-8", 
            className
        )}>
            {label}
        </RSelect.Label>
        {children}
    </RSelect.Group>;
});

export type SelectItemProps = ComponentPropsWithRef<"div"> & PropsWithChildren<{
    value: string;
    disabled?: boolean;
	checkedIcon?: React.ReactNode;
}>;

export const SelectItem = forwardRef<ElementRef<"div">, SelectItemProps>(({ children, className, ...props }, ref) => {
    return (
        <RSelect.Item
            ref={ref}
            className={clsx(
                "h-10 px-8 leading-none truncate text-base rounded-sm flex items-center relative select-none data-[disabled]:text-slate-400/70 data-[disabled]:pointer-events-none data-[highlighted]:outline-none data-[highlighted]:bg-gray-100",
                className
            )}
            {...props}
        >
            <RSelect.ItemText>{children}</RSelect.ItemText>
            <RSelect.ItemIndicator className="inline-flex items-center justify-center absolute left-2">
                <Check />
            </RSelect.ItemIndicator>
        </RSelect.Item>
    );
});