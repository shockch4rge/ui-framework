import { X } from "@phosphor-icons/react";
import * as RDialog from "@radix-ui/react-dialog";
import { clsx } from "clsx";
import { motion } from "framer-motion";
import type { ElementRef } from "react";
import { forwardRef, type ComponentProps, type ComponentPropsWithoutRef } from "react";
import type { NoChildren, Position, Size } from "../../types/common";
import { Button } from "../Button/Button";
import { IconButton } from "../IconButton/IconButton";


export type DialogCloseProps = ComponentPropsWithoutRef<"button"> & (NoChildren<{
    asButton: true;
}> | {
    asButton?: false;
});
export type DialogTitleProps = ComponentPropsWithoutRef<"h2">;

export type DialogDescriptionProps = ComponentPropsWithoutRef<"p">;

export type DialogBodyProps = ComponentPropsWithoutRef<"div">;

export type DialogFooterProps = ComponentPropsWithoutRef<"footer">;

export type DialogSize = Exclude<Size, "xs">;

export type DialogPosition = Position;

export type DialogProps = ComponentProps<"div"> & {
    size?: DialogSize;
    open?: boolean;
    onOpen?: () => void;
    onClose: () => void;
    position?: DialogPosition;
};

export const DialogClose: React.FC<DialogCloseProps> = ({ children, className, asButton, ...props }) => {
    let child = children;

    if (asButton) {
        child = <IconButton className={clsx(`m-1 text-xl`, className)}>{<X />}</IconButton>;
    }

    return <RDialog.Close className={clsx(`absolute top-3 right-3`, className)} {...props} asChild>
        {child}
    </RDialog.Close>;
};

export const DialogTitle = forwardRef<ElementRef<"h3">, DialogTitleProps>(({ children, className, ...props }, ref) => {
    return <RDialog.Title ref={ref} className={clsx("text-xl font-bold", className)} {...props}>{children}</RDialog.Title>;
});

export const DialogDescription = forwardRef<ElementRef<"p">, DialogDescriptionProps>(({ children, className, ...props }, ref) => {
    return <RDialog.Description ref={ref} className={clsx("mt-6 text-gray-600", className)} {...props}>{children}</RDialog.Description>;
});

export const DialogBody = forwardRef<ElementRef<"div">, DialogBodyProps>(({ children, ...props }, ref) => {
    return <div ref={ref} {...props}>
        {children}
    </div>;
});

export const DialogFooter = forwardRef<ElementRef<"footer">, DialogFooterProps>(({ children, className, ...props }, ref) => {
    return <footer className={clsx("mt-8", className)} {...props}>
        {children}
    </footer>;
});

export const Dialog: React.FC<DialogProps> = ({ size = "lg", open, position = "center", children, onClose, onOpen }) => {
    const sizes: Record<NonNullable<DialogSize>, string> = {
        sm: "max-w-lg",
        md: "max-w-xl",
        lg: "max-w-2xl",
        xl: "max-w-4xl",
    };

    const positions: Record<NonNullable<DialogPosition>, string> = {
        bottomCenter: "bottom-8 inset-x-0 mx-auto",
        bottomLeft: "bottom-8 left-8",
        bottomRight: "bottom-8 right-8",
        centerLeft: "left-8",
        centerRight: "right-8",
        topCenter: "top-8 inset-x-0 mx-auto",
        topLeft: "top-8 left-8",
        topRight: "top-8 right-8",
        center: "absolute-center",
    };

    const initialCoords: Record<NonNullable<DialogPosition>, { x?: number; y?: number }> = {
        bottomCenter: { y: 50, },
        bottomLeft: { x: -50, },
        bottomRight: { x: 50, },
        topCenter: { y: -50, },
        topLeft: { x: -50, },
        topRight: { x: 50, },
        centerLeft: { x: -50, },
        centerRight: { x: 50, },
        center: { y: 50, },
    }; 
 
    return <RDialog.Root 
        onOpenChange={open => {
            if (open) return onOpen?.();
            onClose?.();
        }}
    >
        <RDialog.Trigger asChild>
            <Button>Open</Button>
        </RDialog.Trigger>
        <RDialog.Portal>
            <RDialog.Overlay />
            <RDialog.Content 
                className={`${sizes[size]} max-h-fit p-8 bg-white shadow-md rounded-sm absolute ${positions[position]}`} 
                asChild
            >
                <motion.div
                    initial={{ 
                        opacity: 0, 
                        ...initialCoords[position],
                    }}
                    animate={{
                        opacity: 1,
                        y: 0,
                        x: 0,
                    }}
                    transition={{ 
                        type: "spring",
                        bounce: 0.35,
                        duration: 0.4, 
                    }}
                >
                    {children}
                </motion.div>
            </RDialog.Content>
        </RDialog.Portal>
    </RDialog.Root>;
};