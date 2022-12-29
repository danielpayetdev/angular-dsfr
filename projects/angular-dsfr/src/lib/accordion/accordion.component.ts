import { Component, Input, ViewEncapsulation } from "@angular/core";

let nextUniqueId = 0;

@Component({
    selector: "dsfr-accordion",
    standalone: true,
    imports: [],
    templateUrl: "./accordion.component.html",
    styleUrls: ["./accordion.component.scss"],
    encapsulation: ViewEncapsulation.None
})
export class AccordionComponent {
    @Input() title!: string;

    protected id = `dsfr-accordion-${++nextUniqueId}`;
}
