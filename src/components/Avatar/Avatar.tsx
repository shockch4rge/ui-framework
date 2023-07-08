import type { ComponentProps, ComponentPropsWithoutRef } from "react";
import type { NoChildren, Size } from "../../types/common";
import { clsx } from "clsx";
import * as RAvatar from "@radix-ui/react-avatar";
import flattenChildren from "react-keyed-flatten-children";

export type AvatarSize = Size;

export type AvatarGroupProps = ComponentProps<"ul"> & {
    max?: number;
}; 

export type AvatarProps = ComponentPropsWithoutRef<"img"> & NoChildren<{
    src?: string;
    alt: string;
    size?: AvatarSize;
    circle?: boolean;
    fallback?: string;
}>;

const avatarSizes: Record<AvatarSize, string> = {
    xs: "w-8 h-8",
    sm: "w-12 h-12",
    md: "w-16 h-16",
    lg: "w-24 h-24",
    xl: "w-36 h-36",
};

export const Avatar: React.FC<AvatarProps> = ({ src, alt, size = "md", circle = true, fallback, className, ...props }) => {
    return <RAvatar.Root>
        <RAvatar.Image 
            src={src} 
            alt={alt} 
            draggable={false}
            className={clsx(
                "object-cover select-none",
                circle ? "rounded-full" : "rounded-sm",
                avatarSizes[size]
            )} 
            {...props} 
        />
        <RAvatar.AvatarFallback className={clsx(
            "p-2 grid place-items-center bg-gray-300 font-bold text-2xl leading-10 tracking-wider select-none",
            circle ? "rounded-full" : "rounded-sm",
            avatarSizes[size]
        )}>
            {fallback ?? ""}
        </RAvatar.AvatarFallback>
    </RAvatar.Root>;
};

export const AvatarGroup: React.FC<AvatarGroupProps> = ({ max, className, ...props }) => {
    const children = flattenChildren(props.children);
    
    // limit the children based on the max number of avatars
    const maxedChildren = max ? children.slice(0, max) : children;
    // reverse the children to invert z-index
    const validChildren = maxedChildren.reverse();
    const excess = max ? children.length - max : 0;

    return <ul 
        className={clsx(
            "flex [&_img]:ring-4 [&_img]:ring-white [&_span>span]:ring-4 [&_span>span]:ring-white -space-x-4",
            className
        )} 
        {...props}
    >
        {validChildren}
        {excess > 0 && <Avatar fallback={`+${excess}`} alt={`${excess} avatars remaining`} /> }
    </ul>;
};