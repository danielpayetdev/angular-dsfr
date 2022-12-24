import { CommonModule } from "@angular/common";
import {
    ChangeDetectionStrategy,
    Component,
    HostBinding,
    Input,
    OnChanges,
    ViewEncapsulation
} from "@angular/core";

type ButtonType = "primary" | "secondary" | "tertiary" | "tertiary-no-outline";
type ButtonSize = "sm" | "md" | "lg";

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
    @Input() icon?: string;
    @Input() iconLeft: unknown;
    @Input() iconRight: unknown;

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
        return !this.type?.startsWith("tertiary") && !!this.icon && this.coerceValue(this.iconLeft);
    }
    @HostBinding("class.fr-btn--icon-right") get frBtnRight() {
        return (
            !this.type?.startsWith("tertiary") && !!this.icon && this.coerceValue(this.iconRight)
        );
    }
    @HostBinding("class") classes = "";

    ngOnChanges() {
        if (this.icon) {
            this.classes = this.icon;
        }
    }

    coerceValue(value: unknown): boolean {
        return value !== undefined || value === false;
    }
}
