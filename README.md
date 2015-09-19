# Write-Good (as Promised) - Datalist

A wrapper for [wooorm](https://github.com/wooorm)'s datalist modules, allowing
them to be used as [write-good](https://github.com/btford/write-good) checks.

## Use
```javascript
// write-good.js

var datalist = require('wgap-datalist');
var checks = {
  weasels:  { fn: datalist(require('weasels')),   explanation: 'is a weasel word' },
  buzzword: { fn: datalist(require('buzzwords')), explanation: 'is a buzzword' },
  filler:   { fn: datalist(require('fillers')),   explanation: 'is filler' },
  hedge:    { fn: datalist(require('hedges')),    explanation: 'is a hedge word' }
};
```

```javascript
// foobar.js

var writeGood = require('write-good');
var suggestions = writeGood('Remarkably few startup developers write well.');

/* yields:
[
  { index : 0, offset : 10, reason : '"Remarkably" can weaken meaning and is a weasel word' },
  { index : 11, offset : 3, reason : '"few" is a weasel word and is a hedge word' }, 
  { index : 15, offset : 7, reason : '"startup" is a buzzword' }, 
  { index : 40, offset : 4, reason : '"well" is a weasel word and is filler' }
] 
*/
```

## License
MIT