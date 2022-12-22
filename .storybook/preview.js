import { setCompodocJson } from "@storybook/addon-docs/angular";
import { DocsContainer, DocsPage } from "@storybook/blocks";
import docJson from "../documentation.json";
import { darkTheme, lightTheme } from "./customTheme";
setCompodocJson(docJson);

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  backgrounds: {
    disable: true
  },
  docs: {
    container: DocsContainer,
    page: DocsPage,
  },
  darkMode: {
    light: lightTheme,
    dark: darkTheme,
  },
  viewport: {
    viewports: {
      "440p": {
        name: "1440p",
        styles: {
          width: "2560px",
          height: "1440px",
        },
      },
      fullHD: {
        name: "Full HD",
        styles: {
          width: "1920px",
          height: "1080px",
        },
      },
      macBookProBig: {
        name: "MacBook Pro Big",
        styles: {
          width: "1024px",
          height: "640px",
        },
      },
      macBookProMedium: {
        name: "MacBook Pro Medium",
        styles: {
          width: "1440px",
          height: "900px",
        },
      },
      macBookProSmall: {
        name: "MacBook Pro Small",
        styles: {
          width: "1680px",
          height: "1050px",
        },
      },
      pcAgent: {
        name: "PC Agent",
        styles: {
          width: "960px",
          height: "540px",
        },
      },
      verySmallLandscape: {
        name: "Very small landscape",
        styles: {
          width: "599px",
          height: "337px",
        },
      },
    },
  },
}
