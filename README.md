# eslint-plugin-log

Prevent sensitive information from being logged in the log messages

## Installation

You'll first need to install [ESLint](http://eslint.org):

```sh
  npm i eslint --save-dev
```

Next, install `eslint-plugin-log`:

```sh
  npm install eslint-plugin-log --save-dev
```

**Note:** If you installed ESLint globally (using the `-g` flag) then you must also install `eslint-plugin-log` globally.

## Usage

Add `log` to the plugins section of your `.eslintrc` configuration file. You can omit the `eslint-plugin-` prefix:

```json
{
    "plugins": [
        "log"
    ]
}
```

Then configure the rules you want to use under the rules section.

```json
{
    "rules": {
        "log/no-json-stringify": 2
    }
}
```

## Supported Rules

- log/no-json-stringify
