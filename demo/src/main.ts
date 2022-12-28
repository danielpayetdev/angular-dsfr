import { APP_INITIALIZER } from "@angular/core";
import { bootstrapApplication } from "@angular/platform-browser";
import { ThemeService } from "angular-dsfr";
import { AppComponent } from "./app/app.component";

bootstrapApplication(AppComponent, {
    providers: [
        {
            provide: APP_INITIALIZER,
            useFactory: (themeService: ThemeService) => () =>
                themeService.setTheme(themeService.getTheme()),
            deps: [ThemeService],
            multi: true
        }
    ]
});
