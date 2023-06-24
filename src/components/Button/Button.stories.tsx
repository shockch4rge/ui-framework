import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "./Button";

const meta: Meta<typeof Button> = {
    component: Button,
};

type Story = StoryObj<typeof Button>;

export const Primary: Story = {
    args: {
        children: "Login",
        loading: false,
        onClick: () => {
            console.log("Clicked");
        },
        className: "rounded-full",
    },
    argTypes: {
        onClick: { action: "clicked" }, 
    }
};

export default meta;

