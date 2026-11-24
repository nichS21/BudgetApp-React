1) Install `npm` and `Node.js`
2) Clone the project from Github
3) Run `npm install` in a terminal to get all of the project dependencies
    1) **Note:** the `npm audit` tool will likely complain about vulnerabilities, but if you run `npm audit --omit=dev` you should see that none of the **production** dependencies are actually of any risk. In short, ignore this as long as the production dependencies don't have vulnerabilities (`npm` is known to have these issues unfortunately).
4) Run the project locally with `npm run dev`
    1) **Note:** `npm run` has other sub commands like `build`, `lint`, and `preview`. These commands are 'scripts' (aliases) found in the `package.json` file