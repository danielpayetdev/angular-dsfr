import { JsonPipe, NgClass, NgFor, NgTemplateOutlet } from "@angular/common";
import {
    ChangeDetectionStrategy,
    Component,
    ContentChildren,
    Directive,
    inject,
    Input,
    QueryList,
    TemplateRef,
    ViewEncapsulation
} from "@angular/core";
import { ButtonComponent, ButtonSize } from "../button/button.component";
import { coerceBooleanProperty } from "../utils/coercion";

export type BreakPoint = "sm" | "md" | "lg";

@Directive({
    selector: "[dsfrButtonGroupItem]",
    standalone: true
})
export class ButtonGroupItemDirective {
    public templateRef: TemplateRef<ButtonComponent> = inject(TemplateRef);
}

/**
 * @link https://www.systeme-de-design.gouv.fr/elements-d-interface/composants/groupe-de-boutons
 */
@Component({
    selector: "dsfr-button-group",
    templateUrl: "./button-group.component.html",
    standalone: true,
    imports: [NgFor, NgTemplateOutlet, NgClass, JsonPipe],
    changeDetection: ChangeDetectionStrategy.OnPush,
    encapsulation: ViewEncapsulation.None
})
export class ButtonGroupComponent {
    coerceBooleanProperty = coerceBooleanProperty;
    @ContentChildren(ButtonGroupItemDirective) buttons!: QueryList<ButtonGroupItemDirective>;
    @Input() inline: unknown;
    @Input() inlineMinSize: BreakPoint = "md";
    @Input() align: "left" | "center" | "right" = "left";
    @Input() buttonSize: ButtonSize = "md";
    @Input() iconAlign?: "left" | "right";
    @Input() equisized: unknown;
}
