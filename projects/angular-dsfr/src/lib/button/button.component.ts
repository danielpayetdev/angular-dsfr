import { CommonModule } from "@angular/common";
import {
    ChangeDetectionStrategy,
    Component,
    HostBinding,
    Input,
    OnChanges,
    ViewEncapsulation
} from "@angular/core";
import { Icon, Icons } from "../icons/icons";

type ButtonType = "primary" | "secondary" | "tertiary" | "tertiary-no-outline";
export type ButtonSize = "sm" | "md" | "lg";

/**
 * @link https://www.systeme-de-design.gouv.fr/elements-d-interface/composants/bouton
 */
@Component({
    // eslint-disable-next-line @angular-eslint/component-selector
    selector: "button[dsfrButton]",
    standalone: true,
    imports: [CommonModule],
    template: "<ng-content></ng-content>",
    styleUrls: ["./button.component.scss"],
    changeDetection: ChangeDetectionStrategy.OnPush,
    encapsulation: ViewEncapsulation.None
})
export class ButtonComponent implements OnChanges {
    @Input() type: ButtonType = "primary";
    @Input() size: ButtonSize = "md";
    @Input() ariaLabel?: string;
    @Input() icon?: Icons;
    @Input() iconStyle?: "fill" | "line";
    @Input() iconAlign?: "left" | "right";

    @HostBinding("class.fr-btn") frBtn = true;
    @HostBinding("class.fr-btn--secondary") get frBtnSecondary() {
        return this.type === "secondary";
    }
    @HostBinding("class.fr-btn--tertiary") get frBtnTertiary() {
        return this.type === "tertiary";
    }
    @HostBinding("class.fr-btn--tertiary-no-outline") get frBtnTertiaryNoOutline() {
        return this.type === "tertiary-no-outline";
    }
    @HostBinding("class.fr-btn--sm") get frBtnSm() {
        return this.size === "sm";
    }
    @HostBinding("class.fr-btn--lg") get frBtnLg() {
        return this.size === "lg";
    }
    @HostBinding("class.fr-btn--icon-left") get frBtnIconLeft() {
        return !this.type?.startsWith("tertiary") && !!this.icon && this.iconAlign === "left";
    }
    @HostBinding("class.fr-btn--icon-right") get frBtnRight() {
        return !this.type?.startsWith("tertiary") && !!this.icon && this.iconAlign === "right";
    }
    @HostBinding("class") classes = "";

    ngOnChanges() {
        if (this.icon) {
            this.classes = Icon.get(this.icon, this.iconStyle);
        }
    }
}
