import { Component } from "@angular/core";
import { ButtonComponent, ButtonGroupItemDirective, ButtonGroupComponent } from "angular-dsfr";

@Component({
    selector: "dsfr-demo-root",
    templateUrl: "./app.component.html",
    styleUrls: ["./app.component.scss"],
    standalone: true,
    imports: [ButtonComponent, ButtonGroupComponent, ButtonGroupItemDirective]
})
export class AppComponent {}
