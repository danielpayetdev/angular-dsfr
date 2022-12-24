import { JsonPipe, NgFor, NgTemplateOutlet } from "@angular/common";
import {
    ChangeDetectionStrategy,
    Component,
    ContentChildren,
    Directive,
    inject,
    QueryList,
    TemplateRef,
    ViewEncapsulation
} from "@angular/core";
import { ButtonComponent } from "../button/button.component";

@Directive({
    selector: "[dsfrButtonGroupItem]",
    standalone: true
})
export class ButtonGroupItemDirective {
    public templateRef: TemplateRef<ButtonComponent> = inject(TemplateRef);
}

@Component({
    selector: "dsfr-button-group",
    templateUrl: "./button-group.component.html",
    standalone: true,
    imports: [NgFor, NgTemplateOutlet, JsonPipe],
    changeDetection: ChangeDetectionStrategy.OnPush,
    encapsulation: ViewEncapsulation.None
})
export class ButtonGroupComponent {
    @ContentChildren(ButtonGroupItemDirective) buttons!: QueryList<ButtonGroupItemDirective>;
}
