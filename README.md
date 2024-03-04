# TBD

## Launch

```bash
# starts a development server with development ENVs
# => NODE_ENV:development | APP_ENV:dev
npm run dev

# same but in verbose mode : Node, Sequelize, NextAuth, ...
npm run debug

# builds & starts a production server with development ENVs
# => NODE_ENV:production | APP_ENV:dev
npm run build:dev && npm run start:dev
```
> [localhost:3000](http://localhost:3000)

## Analyse
```bash
npm run analyze:dev
```
> will build & open [client](.next/analyze/client.html) / [server](.next/analyze/server.html) bundles in default browser

## Tools

### Libraries
- [@next/bundle-analyzer](https://github.com/vercel/next.js/tree/canary/packages/next-bundle-analyzer)
- [react-icons](https://github.com/icons8/flat-color-icons) ([list](https://react-icons.github.io/react-icons/icons))
- [tailwindcss](https://tailwindcss.com/docs)
  * [optimizing-for-production](https://tailwindcss.com/docs/optimizing-for-production)
- [lodash v4](https://lodash.com/docs/4.17.15)
  * use [require](https://lodash.com/per-method-packages) to optimize (or like [this](https://dev.to/payapula/minimizing-lodash-size-in-cra-and-next-js-5598))
- [pony-cause](https://github.com/voxpelli/pony-cause) nested errors
- [react-tostify](https://github.com/fkhadra/react-toastify) [(documentation)](https://fkhadra.github.io/react-toastify/introduction])
- [react-query](https://github.com/tannerlinsley/react-query) [(documentation)](https://react-query.tanstack.com/)

### ESLint
- [@next/eslint-plugin-next](https://nextjs.org/docs/basic-features/eslint)
- [own rules](./.eslintrc.json)

### VS Code plugins
- [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
- [Path Intellisense](https://marketplace.visualstudio.com/items?itemName=christian-kohler.path-intellisense)
- [NPM Intellisense](https://marketplace.visualstudio.com/items?itemName=christian-kohler.npm-intellisense)
- [Tailwind IntelliSense](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss)
- [Atom Keymap](https://marketplace.visualstudio.com/items?itemName=ms-vscode.atom-keybindings)
- [ES7 React/Redux/GraphQL/React-Native Snippets](https://marketplace.visualstudio.com/items?itemName=dsznajder.es7-react-js-snippets)
- [NextJS/React Snippets](https://marketplace.visualstudio.com/items?itemName=iJS.reactnextjssnippets)
- [Better Comments](https://marketplace.visualstudio.com/items?itemName=aaron-bond.better-comments)
- [Headwind](https://marketplace.visualstudio.com/items?itemName=heybourn.headwind) (only [v2](https://github.com/heybourn/headwind/files/6361713/headwind-2.0.0.vsix.zip) is able to parse clsx calls ⚠️)
- [Color Highlight](https://marketplace.visualstudio.com/items?itemName=naumovs.color-highlight)
- [Stylelint](https://marketplace.visualstudio.com/items?itemName=stylelint.vscode-stylelint) => [config](https://stylelint.io/user-guide/configure/)
