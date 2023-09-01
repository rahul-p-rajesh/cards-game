# Stack Used: React + TypeScript + Vite

## Installation

Install card-game with npm

```bash
  cd card-game
  npm install 
  npm run start
```

## Codesandbox
codesanbox link: https://codesandbox.io/p/sandbox/cranky-benz-7nlfzd

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