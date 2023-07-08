import type { Meta, StoryObj } from "@storybook/react";
import { Avatar } from "./Avatar";

const meta: Meta<typeof Avatar> = {
    component: Avatar,

};

type Story = StoryObj<typeof Avatar>;

export const Primary: Story = {
    args: {
        size: "xl",
        src: "https://images.unsplash.com/photo-1688719330946-f179bc8fc86c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    }
};

export const Square: Story = {
    args: {
        circle: false,
        src: "https://images.unsplash.com/photo-1688719330946-f179bc8fc86c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    }
};

export const Fallback: Story = {
    args: {
        fallback: "JD",
    }
};

export default meta;

