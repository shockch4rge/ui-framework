import type { Meta, StoryObj } from "@storybook/react";
import { Tooltip, TooltipContent, TooltipTrigger } from "./Tooltip";
import { Button } from "../Button/Button";

const meta: Meta<typeof Tooltip> = {
    component: Tooltip,
};

type Story = StoryObj<typeof Tooltip>;

export const Default: Story = {
    args: {
        side: "right",
        children: <>
            <TooltipTrigger>
                <Button>
                    Hello
                </Button>
            </TooltipTrigger>
            <TooltipContent>
                <h1>You need a subscription for this!</h1>
            </TooltipContent>
        </>
    },
};

export default meta;

