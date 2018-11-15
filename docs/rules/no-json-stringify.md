# Prevent JSON.stringify usage in logs (no-json-stringify)

Please describe the origin of the rule here.


## Rule Details

This rule aims to...

Examples of **incorrect** code for this rule:

```js

  logger.error(JSON.stringify({ a: 1 }));

```

Examples of **correct** code for this rule:

```js

  logger.warn('anything without containing JSON.stringify as a parameter');

```

### Options

If there are any options, describe them here. Otherwise, delete this section.

## When Not To Use It

Give a short description of when it would be appropriate to turn off this rule.
