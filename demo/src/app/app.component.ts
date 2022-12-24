import { Component } from "@angular/core";
import { ButtonComponent } from "angular-dsfr";

@Component({
    selector: "dsfr-demo-root",
    templateUrl: "./app.component.html",
    styleUrls: ["./app.component.scss"],
    standalone: true,
    imports: [ButtonComponent]
})
export class AppComponent {}
