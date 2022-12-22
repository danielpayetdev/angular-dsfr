```
 /!\ Non officel
```

<p align="center">
    🇫🇷 <i><a href="https://www.systeme-de-design.gouv.fr/">French State Design System</a> Angular integration</i> 🇫🇷
    <br>
    <br>
    <a href="https://github.com/codegouvfr/react-dsfr/blob/main/LICENSE">
      <img src="https://img.shields.io/npm/l/@codegouvfr/react-dsfr">
    </a>
</p>

# What about [`@dataesr/react-dsfr`](https://github.com/dataesr/react-dsfr)?

`@codegouvfr/react-dsfr` is a TypeScript oriented library that puts high priority in providing a good integration with the
JavaScript ecosystem, notably Next.js.  
It's has been started in October 2022, it's a much newer initiative and although it's being actively developed, as of today,
`@dataesr/react-dsfr` is more stable and provide [a wider component coverage](https://github.com/dataesr/react-dsfr/tree/master/src/components/interface).  
If you are working on a SPA (Create React App, Vite) `@dataesr/react-dsfr` is probably a more viable option at the moment.

That being said, many of `@codegouvfr/react-dsfr`'s features can be enjoyed without migrating away from `@dataesr/react-dsfr`.  
You can, as standalone feature:

- Enjoy the [`fr-*` classes autocompletion and type safety](https://react-dsfr.etalab.studio/class-names-type-safety).
- Use [the type safe color system](https://react-dsfr.etalab.studio/css-in-js#colors).
- Use the MUI theme.
- The [the spacing system](https://react-dsfr.etalab.studio/css-in-js#fr.spacing) and
    [breakpoints util for building responsive UI](https://react-dsfr.etalab.studio/css-in-js#fr.breakpoints).

[Here is a playground to demonstrate it](https://stackblitz.com/edit/react-ts-fph9bh?file=App.tsx).

# Development

Here are instructions for contributing,

```bash
git clone https://github.com/danielpayetdev/angular-dsfr
cd angular-dsfr
npm i

# Starting storybook
npm run storybook

# Starting test apps
npm run start

# Run all unit test (test/runtime):
yarn test
# Run only test/runtime/cssVariable.test.ts (for example)
npx vitest -t "Resolution of CSS variables"

# Debugging while unit testing
```