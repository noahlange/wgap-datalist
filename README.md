# WGAP-Datalist

A wrapper for [wooorm](https://github.com/wooorm)'s datalist modules, allowing
them to be used as [write-good](https://github.com/btford/write-good) checks.

## Use
```javascript
var dl = require('wgap-datalist');
var buzzwords = dl(require('buzzwords'));

var checks = {
  // ...other checks
  buzzword: { fn: buzzwords, explanation: 'is a buzzword' }
};
```

## License
MIT