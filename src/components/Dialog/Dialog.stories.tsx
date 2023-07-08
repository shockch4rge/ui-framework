import type { Meta, StoryObj } from "@storybook/react";
import { Dialog, DialogTitle, DialogClose, DialogDescription, DialogFooter, DialogBody } from "./Dialog";
import { IconButton } from "../IconButton/IconButton";
import { X } from "@phosphor-icons/react";
import { Button } from "../Button/Button";
import { CircleBackslashIcon } from "@radix-ui/react-icons";

const meta: Meta<typeof Dialog> = {
    component: Dialog,
};

type Story = StoryObj<typeof Dialog>;

export const Primary: Story = {
    args: {
        open: false,
        children: <>
            <DialogClose asButton />
            <DialogTitle>Submit login details</DialogTitle>
            <DialogDescription>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Beatae ratione a, nisi cupiditate non voluptates eum cum magnam animi, odit iure magni pariatur, maiores eos ad. Esse ipsa sed rerum. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto eaque hic autem exercitationem, nemo dolore quod sit cum inventore commodi soluta dolorem aperiam atque odio dolores neque perferendis iste? Obcaecati. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat nesciunt explicabo ipsa voluptatum voluptatibus amet cum natus, consequuntur harum ab alias reiciendis recusandae vel eaque nulla obcaecati perspiciatis. Non, veniam!
            </DialogDescription>
            <DialogBody>
            </DialogBody>
            <DialogFooter className="flex justify-end space-x-4"> 
                <Button>Cancel</Button>
                <Button>Submit</Button>
            </DialogFooter>
        </>
    }
};

export const CustomCloseButton: Story = {
    args: {
        open: false,
        children: <>
            <DialogClose>
                <IconButton className="m-1 text-xl">
                    <CircleBackslashIcon />
                </IconButton>
            </DialogClose>
            <DialogTitle>Submit login details</DialogTitle>
            <DialogDescription>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Beatae ratione a, nisi cupiditate non voluptates eum cum magnam animi, odit iure magni pariatur, maiores eos ad. Esse ipsa sed rerum. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto eaque hic autem exercitationem, nemo dolore quod sit cum inventore commodi soluta dolorem aperiam atque odio dolores neque perferendis iste? Obcaecati. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat nesciunt explicabo ipsa voluptatum voluptatibus amet cum natus, consequuntur harum ab alias reiciendis recusandae vel eaque nulla obcaecati perspiciatis. Non, veniam!
            </DialogDescription>
            <DialogBody>
            </DialogBody>
            <DialogFooter className="flex justify-end space-x-4"> 
                <Button>Cancel</Button>
                <Button>Submit</Button>
            </DialogFooter>
        </>
    }
};

export default meta;

