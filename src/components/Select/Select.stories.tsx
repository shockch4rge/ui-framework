import type { Meta, StoryObj } from "@storybook/react";
import { Select, SelectItem, SelectItemGroup, SelectSeparator } from "./Select";
import { CaretDown } from "@phosphor-icons/react";

const meta: Meta<typeof Select> = {
    component: Select,
};

type Story = StoryObj<typeof Select>;

export const Primary: Story = {
    args: {
        onSelect: value => console.log(value),
        placeholder: "Select a food...",
        defaultValue: "Apple",
        icon: <CaretDown />,
        children: <>
            <SelectItemGroup label="Fruits">
                <SelectItem value="apple">Apple</SelectItem>
                <SelectItem value="banana">Banana</SelectItem>
                <SelectItem value="blueberry">Blueberry</SelectItem>
                <SelectItem value="grapes">Grapes</SelectItem>
                <SelectItem value="pineapple">Pineapple</SelectItem>
            </SelectItemGroup>

            <SelectSeparator />

            <SelectItemGroup label="Vegetables">
                <SelectItem value="aubergine">Aubergine</SelectItem>
                <SelectItem value="carrot" disabled>
                    Carrot
                </SelectItem>
                <SelectItem value="courgette">Courgette</SelectItem>
                <SelectItem value="leek">Leek</SelectItem>
            </SelectItemGroup>

            <SelectSeparator />

            <SelectItemGroup label="Meat">
                <SelectItem value="beef">Beef</SelectItem>
                <SelectItem value="chicken">Chicken</SelectItem>
                <SelectItem value="lamb">Lamb</SelectItem>
                <SelectItem value="pork">Pork</SelectItem>
                <SelectItem value="fish">Fish</SelectItem>
            </SelectItemGroup>
        </>
    }
};

export default meta;

