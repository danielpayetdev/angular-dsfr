import { Meta, StoryObj } from "@storybook/angular";

import { AccordionComponent } from "./accordion.component";

const meta: Meta<AccordionComponent> = {
    title: "Accordion",
    component: AccordionComponent
};

export default meta;

export const Simple: StoryObj<AccordionComponent> = {
    render: args => ({
        template: `
        <dsfr-accordion title="Mes informations">
            Contenu accordion 1
        </dsfr-accordion>
        <dsfr-accordion title="Encore plus d'information">
            Contenu accordion 2
        </dsfr-accordion>
        `,
        props: args
    })
};
