# VAMTIGER Bash
A [regular expression](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions) to match the body **_inner HTML title_** for a defined HTML input string.

## Installation
[VAMTIGER Regex HTML Body Inner HTML](https://github.com/vamtiger-project/vamtiger-regex-html-body-inner-html) can be installed using [npm](https://www.npmjs.com/) or [yarn]():
```bash
npm i --save vamtiger-regex-html-body-inner-html
```
or
```bash
yarn add vamtiger-regex-html-body-inner-html
```

## Usage
[Import](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import) or [require](https://nodejs.org/api/modules.html#modules_require) a referece to [VAMTIGER Regex HTML Body Inner HTML](https://github.com/vamtiger-project/vamtiger-regex-html-body-inner-html):
```javascript
import regex from 'vamtiger-regex-html-body-inner-html';
```
or
```javascript
const regex = require('vamtiger-regex-html-body-inner-html').default;
```

[VAMTIGER Regex HTML Body Inner HTML](https://github.com/vamtiger-project/vamtiger-regex-html-body-inner-html) can be used to match the body **_inner HTML title_** for a defined HTML input string:
```javascript
const regex = require('vamtiger-regex-html-body-inner-html').default;

const input = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Some HTML Title</title>
</head>
<body>
    
</body>
</html>
`;
const match = input.match(regex);

/**
 * if (match) {
 *     // Yep, the input string has a HTML title
 *     match[1] === '<body>'
 *     match[2] === `
 *          <div>
 *               Some HTML body inner HTML
 *          </div>`
 *     match[3] === '</body>'
 * }
 **/
```

Named capture groups can be referenced when used together with [XRegExp](https://www.npmjs.com/package/xregexp):
```javascript
const XRegExp = require('xregexp');
const regex = require('vamtiger-regex-html-body-inner-html').default;
const input = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Some HTML Title</title>
</head>
<body>
    
</body>
</html>
`;
const match = XRegExp.exec(input, regex);
// const match: Match = XRegExp.exec(input, regex); // Typescript

/**
 * if (match) {
 *     // Yep, the input string has a HTML title
 *     match.openingBodyTag === '<body>'
 *     match.innerHtml === `
 *          <div>
 *               Some HTML body inner HTML
 *          </div>`
 *     match.closingBodyTag === '</body>'
 * }
 **/
```