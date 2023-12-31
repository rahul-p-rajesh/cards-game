# Stack Used: React + TypeScript + Vite

## Installation

Install card-game with npm

```bash
  cd card-game
  npm install 
  npm run start
```

## Codesandbox
[codesandbox](https://codesandbox.io/p/github/rpr7629/cards-game/main?file=%2Fsrc%2Fcomponents%2FPlayingCards%2FCard.tsx%3A3%2C15&utm_source=gh_app&layout=%257B%2522sidebarPanel%2522%253A%2522EXPLORER%2522%252C%2522rootPanelGroup%2522%253A%257B%2522direction%2522%253A%2522horizontal%2522%252C%2522contentType%2522%253A%2522UNKNOWN%2522%252C%2522type%2522%253A%2522PANEL_GROUP%2522%252C%2522id%2522%253A%2522ROOT_LAYOUT%2522%252C%2522panels%2522%253A%255B%257B%2522type%2522%253A%2522PANEL_GROUP%2522%252C%2522contentType%2522%253A%2522UNKNOWN%2522%252C%2522direction%2522%253A%2522vertical%2522%252C%2522id%2522%253A%2522cll66jzxe000h376pnhqk0du0%2522%252C%2522sizes%2522%253A%255B100%252C0%255D%252C%2522panels%2522%253A%255B%257B%2522type%2522%253A%2522PANEL_GROUP%2522%252C%2522contentType%2522%253A%2522EDITOR%2522%252C%2522direction%2522%253A%2522horizontal%2522%252C%2522id%2522%253A%2522EDITOR%2522%252C%2522panels%2522%253A%255B%257B%2522type%2522%253A%2522PANEL%2522%252C%2522contentType%2522%253A%2522EDITOR%2522%252C%2522id%2522%253A%2522cll66jzxd000c376pu957om4o%2522%257D%255D%252C%2522sizes%2522%253A%255B100%255D%257D%252C%257B%2522type%2522%253A%2522PANEL_GROUP%2522%252C%2522contentType%2522%253A%2522SHELLS%2522%252C%2522direction%2522%253A%2522horizontal%2522%252C%2522id%2522%253A%2522SHELLS%2522%252C%2522panels%2522%253A%255B%257B%2522type%2522%253A%2522PANEL%2522%252C%2522contentType%2522%253A%2522SHELLS%2522%252C%2522id%2522%253A%2522cll66jzxe000g376pwv8redbq%2522%257D%255D%252C%2522sizes%2522%253A%255B100%255D%257D%255D%257D%252C%257B%2522type%2522%253A%2522PANEL_GROUP%2522%252C%2522contentType%2522%253A%2522DEVTOOLS%2522%252C%2522direction%2522%253A%2522vertical%2522%252C%2522id%2522%253A%2522DEVTOOLS%2522%252C%2522panels%2522%253A%255B%257B%2522type%2522%253A%2522PANEL%2522%252C%2522contentType%2522%253A%2522DEVTOOLS%2522%252C%2522id%2522%253A%2522cll66jzxd000e376pquvmlkxd%2522%257D%255D%252C%2522sizes%2522%253A%255B100%255D%257D%255D%252C%2522sizes%2522%253A%255B50%252C50%255D%257D%252C%2522tabbedPanels%2522%253A%257B%2522cll66jzxd000c376pu957om4o%2522%253A%257B%2522id%2522%253A%2522cll66jzxd000c376pu957om4o%2522%252C%2522activeTabId%2522%253A%2522clm1ephwc01af376geydm5npy%2522%252C%2522tabs%2522%253A%255B%257B%2522id%2522%253A%2522cll66jzxd000b376plxc9m9gk%2522%252C%2522mode%2522%253A%2522permanent%2522%252C%2522type%2522%253A%2522FILE%2522%252C%2522filepath%2522%253A%2522%252FREADME.md%2522%252C%2522state%2522%253A%2522IDLE%2522%257D%252C%257B%2522type%2522%253A%2522FILE%2522%252C%2522filepath%2522%253A%2522%252Fsrc%252Fpages%252FDeck.tsx%2522%252C%2522id%2522%253A%2522cll984tn9013c376pftlan5gi%2522%252C%2522mode%2522%253A%2522permanent%2522%252C%2522state%2522%253A%2522IDLE%2522%257D%252C%257B%2522type%2522%253A%2522FILE%2522%252C%2522filepath%2522%253A%2522%252Fsrc%252Fcomponents%252FPlayingCards%252FCard.tsx%2522%252C%2522id%2522%253A%2522clm1ephwc01af376geydm5npy%2522%252C%2522mode%2522%253A%2522temporary%2522%252C%2522state%2522%253A%2522IDLE%2522%257D%255D%257D%252C%2522cll66jzxd000e376pquvmlkxd%2522%253A%257B%2522id%2522%253A%2522cll66jzxd000e376pquvmlkxd%2522%252C%2522tabs%2522%253A%255B%257B%2522type%2522%253A%2522TASK_PORT%2522%252C%2522taskId%2522%253A%2522dev%2522%252C%2522port%2522%253A5173%252C%2522id%2522%253A%2522cll66k6iv00y6376plowx7bj1%2522%252C%2522mode%2522%253A%2522permanent%2522%252C%2522path%2522%253A%2522%252F%2522%257D%255D%252C%2522activeTabId%2522%253A%2522cll66k6iv00y6376plowx7bj1%2522%257D%252C%2522cll66jzxe000g376pwv8redbq%2522%253A%257B%2522id%2522%253A%2522cll66jzxe000g376pwv8redbq%2522%252C%2522activeTabId%2522%253A%2522cll66jzxe000f376p0uzttoxx%2522%252C%2522tabs%2522%253A%255B%257B%2522id%2522%253A%2522cll66jzxe000f376p0uzttoxx%2522%252C%2522mode%2522%253A%2522permanent%2522%252C%2522type%2522%253A%2522TERMINAL%2522%252C%2522shellId%2522%253A%2522clm1eow9u000ad8fvhn7n6kvp%2522%257D%252C%257B%2522type%2522%253A%2522TASK_LOG%2522%252C%2522taskId%2522%253A%2522dev%2522%252C%2522id%2522%253A%2522cll66k47z00ma376proh84qjg%2522%252C%2522mode%2522%253A%2522permanent%2522%257D%255D%257D%257D%252C%2522showDevtools%2522%253Atrue%252C%2522showShells%2522%253Afalse%252C%2522showSidebar%2522%253Atrue%252C%2522sidebarPanelSize%2522%253A15%257D)

##Core Logic Decision Tree
![Screenshot 2023-08-14 083750](https://github.com/rpr7629/cards-game/assets/52316827/ef23001e-e3b6-46c2-beda-f52d42ba2f54)
![Screenshot 2023-08-14 084140](https://github.com/rpr7629/cards-game/assets/52316827/e42d5933-6437-455f-b694-bca08fb6e279)

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
   parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
   },
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list

codesanbox link: https://codesandbox.io/p/sandbox/github/rpr7629/cards-game/tree/main

## Questions

- 1. Ideal Practices for renaming variables and function and how to come up with names
- 2. How to think about making components truly reusable
- 3. practices to name variables and functions and branch names
  
## Learnings

### Components Design

- 1. First principle of components design is reusability(dry) while following kiss
  - 1.1 reusability of a components comes from a question like in what all scenarios can it be reused for e.g a card can be a playingcard or a uno
  - 1.2 from there a point comes in which all property/method will all types of cards will have common and which all may differ based on card type
- 2. whenever using component design/ writing generics there are 2 relationships
  - 2.1  is - a relationship e.g (this property is a type of  ) => they are part of inheritance
  - 2.2 has - a relationship e.g (all cards have a id) => its a part of the object
  - 2.3 completely independent does not belong to anyone
- 3. a generic having a property might be important but in all the cases will it be provided is not important
- 4.  so when not to use same components when the html structure starts to  vary a lot compare or style starts to vary a lot
