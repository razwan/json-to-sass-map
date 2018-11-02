# @absolunet/json-to-scss

[![npm](https://img.shields.io/npm/v/@absolunet/json-to-scss.svg)](https://www.npmjs.com/package/@absolunet/json-to-scss)
[![npm dependencies](https://david-dm.org/absolunet/node-json-to-scss/status.svg)](https://david-dm.org/absolunet/node-json-to-scss)
[![npms](https://badges.npms.io/%40absolunet%2Fjson-to-scss.svg)](https://npms.io/search?q=%40absolunet%2Fjson-to-scss)
[![Travis CI](https://api.travis-ci.org/absolunet/node-json-to-scss.svg?branch=master)](https://travis-ci.org/absolunet/node-json-to-scss/builds)
[![Code style](https://img.shields.io/badge/code_style-@absolunet/node-659d32.svg)](https://github.com/absolunet/eslint-config-node)

> Convert a JSON to a SCSS map


## Install

```sh
$ npm install @absolunet/json-to-scss
```


## Usage

```js
const jsonToScss = require('@absolunet/json-to-scss');

console.log(
  jsonToScss.convert(`
    {
      "points": [
        [0, 1.2],
        [50, 1.6],
        [200, 1.8]
      ],
      "dimension": {
        "small":   600,
        "medium":  900,
        "large":  1200,
        "xlarge": 1500
      },
      "transition": {
        "hover":     100,
        "animation": 500
      },
      "color": {
        "shell": {
          "main":  "#659d32",
          "shade": "#618931"
        },
        "fruit": "#423228"
      }
    }
  `)
);

/*
$points: (
  0 1.2,
  50 1.6,
  200 1.8
);

$dimension: (
  'small': 600,
  'medium': 900,
  'large': 1200,
  'xlarge': 1500
);

$transition: (
  'hover': 100,
  'animation': 500
);

$color: (
  'shell': (
    'main': #659d32,
    'shade': #618931
  ),
  'fruit': #423228
);
*/
```


## API

### convert(data *[, indent]*)
Converts JSON to SCSS map<br>
Return `String` SCSS

#### data
*Required*<br>
Type: `String`<br>
JSON content

#### indent
Type: `String`<br>
Default: `<tab>`<br>
Indent style


## Source

Forked from [razwan/json-to-sass-map](https://github.com/razwan/json-to-sass-map)


## License

MIT © [Absolunet](https://absolunet.com)
