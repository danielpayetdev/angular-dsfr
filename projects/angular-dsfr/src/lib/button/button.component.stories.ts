import { Meta, StoryObj } from "@storybook/angular";
import { IconsData } from "../icons/icons";

import { ButtonComponent } from "./button.component";

const meta: Meta<ButtonComponent> = {
    title: "Button",
    component: ButtonComponent,
    argTypes: { icon: { control: "select", options: Object.values(IconsData) } },
    args: {
        icon: IconsData.addCircle
    }
};

export default meta;

export const Variant: StoryObj<ButtonComponent> = {
    render: args => ({
        template: `
        <div style="display:grid; grid-gap: 10px; grid-column: 1;">
          <button dsfrButton [type]="type" [size]="size">Label bouton</button>
          <button dsfrButton [type]="type" [size]="size" [icon]='icon' [iconStyle]="iconStyle" [iconAlign]="iconAlign">Label bouton</button>
          <button dsfrButton [type]="type" [size]="size" [icon]='icon' [iconStyle]="iconStyle"></button>
        <div>
        `,
        props: args
    })
};
