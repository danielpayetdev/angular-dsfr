import { DOCUMENT } from "@angular/common";
import { inject, Injectable } from "@angular/core";

export enum ThemeOption {
    LIGHT = "light",
    DARK = "dark",
    SYSTEM = "system"
}

const DATA_FR_SCHEME = "data-fr-scheme";
const SCHEME_DB = "scheme";

@Injectable({
    providedIn: "root"
})
export class ThemeService {
    private document = inject(DOCUMENT);

    public setTheme(theme: ThemeOption): void {
        this.document.documentElement.setAttribute(DATA_FR_SCHEME, theme);
    }

    public getTheme(): ThemeOption {
        return this.getThemeFromLocalStorage() ?? ThemeOption.LIGHT;
    }

    private getThemeFromLocalStorage(): ThemeOption | undefined {
        const valueFromLocalStorage = localStorage.getItem(SCHEME_DB);
        if (Object.values(ThemeOption).includes(valueFromLocalStorage as any)) {
            return valueFromLocalStorage as ThemeOption;
        }
        return undefined;
    }
}
