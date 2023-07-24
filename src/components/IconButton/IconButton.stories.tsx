import type { Meta, StoryObj } from "@storybook/react";
import { IconButton } from "./IconButton";
import { DotsThree, ListPlus } from "@phosphor-icons/react";

const meta: Meta<typeof IconButton> = {
    component: IconButton,
};

type Story = StoryObj<typeof IconButton>;

export const Primary: Story = {
    args: {
        children: <ListPlus/>,
    },
};

export const CustomLoadingIcon: Story = {
    args: {
        children: <ListPlus />,
        loadingIcon: <DotsThree />,
    }
};

export default meta;

