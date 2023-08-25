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

codesanbox link: https://codesandbox.io/p/sandbox/cranky-benz-7nlfzd

## Questions

- 1. Ideal Practices for renaaming varaibles and function and how to come up with names
- 2. How to think about making components truly reusable
  
