import { Meta, StoryObj } from '@storybook/angular';

import { ButtonComponent } from './button.component';

const meta: Meta<ButtonComponent> = {
  title: 'Button',
  component: ButtonComponent
};

export default meta;

export const Primary: StoryObj<ButtonComponent> = {
  render: args => ({
    template: `<dsfr-button [type]="type" [disabled]="disabled" [size]="size">Label bouton</dsfr-button>`,
    props: args
  })
};

export const WithIcone: StoryObj<ButtonComponent> = {
  render: args => ({
    template: `<dsfr-button icon='fr-icon-checkbox-circle-line' [iconDirection]="iconDirection">Label bouton {{iconDirection}}</dsfr-button>`,
    props: args
  }),
};