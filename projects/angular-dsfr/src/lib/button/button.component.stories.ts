import { Meta, StoryObj } from "@storybook/angular";

import { ButtonComponent } from "./button.component";

const meta: Meta<ButtonComponent> = {
    title: "Button",
    component: ButtonComponent
};

export default meta;

export const Variant: StoryObj<ButtonComponent> = {
    render: args => ({
        template: `
        <div style="display:grid; grid-gap: 10px; grid-column: 1;">
        <button dsfrButton [type]="type" [size]="size">Label bouton</button>
          <button dsfrButton [type]="type" [size]="size" icon='fr-icon-checkbox-circle-line' iconLeft>Label bouton</button>
          <button dsfrButton [type]="type" [size]="size" icon='fr-icon-checkbox-circle-line' iconRight>Label bouton</button>
          <button dsfrButton [type]="type" [size]="size" icon='fr-icon-checkbox-circle-line'>Label bouton</button>
        <div>
        `,
        props: args
    })
};
