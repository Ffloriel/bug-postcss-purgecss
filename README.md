# TypeError: t.test is not a function


Before you open an issue, please check if a similar issue already exists or has been closed before.

### When reporting a bug, please try to include the following:
- [X] A descriptive title
- [X] An *isolated* way to reproduce the behavior (example: GitHub repository with code isolated to the issue that anyone can clone to observe the problem)
- [X] What package and version  you're using, and the platform(s) you're running it on
- [X] The behavior you expect to see, and the actual behavior

https://github.com/dotnetCarpenter/bug-postcss-purgecss

## Steps to reproduce:

1. `git clone git@github.com:dotnetCarpenter/bug-postcss-purgecss.git && cd bug-postcss-purgecss`
2. `yarn install`
3. `yarn build`
4. Observe the errors in your terminal.

Enabling/disabling plugins in [postcss.config.js](https://github.com/dotnetCarpenter/bug-postcss-purgecss/blob/master/postcss.config.js) seems to suggest the [`postcss-import`](https://github.com/postcss/postcss-import) plugin being the culprit. Disabling `postcss-import` does remove the errors but does not generate a valid CSS file. It probably only remove the errors because purgecss is not actually doing any work.

## Actual behavior

Tens of similar error messages.

```
yarn run v1.22.5
$ postcss src/style.css --config postcss.config.js --output _site/assets/style.css
(node:10007) UnhandledPromiseRejectionWarning: TypeError: t.test is not a function
    at /home/dotnet/projects/playground/bug-postcss-purgecss/node_modules/purgecss/lib/purgecss.js:1:7958
    at Array.some (<anonymous>)
    at U.isSelectorSafelistedDeep (/home/dotnet/projects/playground/bug-postcss-purgecss/node_modules/purgecss/lib/purgecss.js:1:7948)
    at U.shouldKeepSelector (/home/dotnet/projects/playground/bug-postcss-purgecss/node_modules/purgecss/lib/purgecss.js:1:9213)
    at /home/dotnet/projects/playground/bug-postcss-purgecss/node_modules/purgecss/lib/purgecss.js:1:6477
    at /home/dotnet/projects/playground/bug-postcss-purgecss/node_modules/purgecss/node_modules/postcss-selector-parser/dist/selectors/container.js:228:20
    at Root.each (/home/dotnet/projects/playground/bug-postcss-purgecss/node_modules/purgecss/node_modules/postcss-selector-parser/dist/selectors/container.js:210:16)
    at Root.walk (/home/dotnet/projects/playground/bug-postcss-purgecss/node_modules/purgecss/node_modules/postcss-selector-parser/dist/selectors/container.js:227:17)
    at Processor.func (/home/dotnet/projects/playground/bug-postcss-purgecss/node_modules/purgecss/lib/purgecss.js:1:6439)
    at Processor._runSync (/home/dotnet/projects/playground/bug-postcss-purgecss/node_modules/purgecss/node_modules/postcss-selector-parser/dist/processor.js:104:26)
(node:10007) UnhandledPromiseRejectionWarning: Unhandled promise rejection. This error originated either by throwing inside of an async function without a catch block, or by rejecting a promise which was not handled with .catch(). To terminate the node process on unhandled promise rejection, use the CLI flag `--unhandled-rejections=strict` (see https://nodejs.org/api/cli.html#cli_unhandled_rejections_mode). (rejection id: 1)
(node:10007) [DEP0018] DeprecationWarning: Unhandled promise rejections are deprecated. In the future, promise rejections that are not handled will terminate the Node.js process with a non-zero exit code.
```

**The resulting CSS file look fine.**

## Expected behavior

The same as the actual behavior but without all of the errors.

- OS: Ubuntu 20.04 (WSL2 Windows 10)
- Nodejs: v12.18.3
- **purgecss**: 3.0.0
- **@fullhuman/postcss-purgecss**: 3.0.0
- PostCSS: 7.0.34
- PostCSS CLI: 7.1.2
- autoprefixer: 7.2.6
- postcss-css-variables: 0.17.0
- postcss-import: 12.0.1
