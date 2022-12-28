import { NgSwitch, NgSwitchCase } from "@angular/common";
import { Component, inject } from "@angular/core";
import {
    ButtonComponent,
    ButtonGroupItemDirective,
    ButtonGroupComponent,
    ThemeService,
    ThemeOption
} from "angular-dsfr";

@Component({
    selector: "dsfr-demo-root",
    templateUrl: "./app.component.html",
    styleUrls: ["./app.component.scss"],
    standalone: true,
    imports: [
        ButtonComponent,
        ButtonGroupComponent,
        ButtonGroupItemDirective,
        NgSwitch,
        NgSwitchCase
    ]
})
export class AppComponent {
    protected ThemeOption = ThemeOption;
    private themeService: ThemeService = inject(ThemeService);
    public currentTheme: ThemeOption = this.themeService.getTheme();

    setTheme(theme: ThemeOption): void {
        this.themeService.setTheme(theme);
        this.currentTheme = theme;
    }
}
