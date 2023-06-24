import type { Meta, StoryObj } from "@storybook/react";
import { Badge } from "./Badge";
import { Check } from "@phosphor-icons/react";

const meta: Meta<typeof Badge> = {
    component: Badge,
};

type Story = StoryObj<typeof Badge>;

const Base: Story = {
    args: {
        children: "Verified",
        shape: "pill",
        icon: <Check weight="bold" />,
        iconPosition: "right",
        size: "md",
        className: "bg-green-300/50 text-green-900",
    }
};

export const Pill: Story = {
    args: {
        ...Base.args,
        shape: "pill",
    }
};

export const Chip: Story = {
    args: {
        ...Base.args,
        shape: "chip",
    },
};

export default meta;
