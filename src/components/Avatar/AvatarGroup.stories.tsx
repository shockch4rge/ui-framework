import type { Meta, StoryObj } from "@storybook/react";
import { Avatar, AvatarGroup } from "./Avatar";

const meta: Meta<typeof AvatarGroup> = {
    component: AvatarGroup,
};

type Story = StoryObj<typeof AvatarGroup>;

const avatars = Array(5).fill(
    <Avatar src="https://images.unsplash.com/photo-1688719330946-f179bc8fc86c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" alt="Avatar" />
);

export const Primary: Story = {
    args: {
        children: <>
            {avatars}
        </>
    }
};

export const Limited: Story = {
    args: {
        max: 3,
        children: <>
            {avatars}
        </>,
    }
};

export default meta;