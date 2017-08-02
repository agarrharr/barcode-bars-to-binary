# barcode-bars-to-binary

[![Build Status](https://travis-ci.org/agarrharr/barcode-bars-to-binary.svg?branch=master)](https://travis-ci.org/agarrharr/barcode-bars-to-binary)

## Install

```
$ npm install --save barcode-bars-to-binary
```

## Usage

```js
const barsToBinary = require('barcode-bars-to-binary');

barsToBinary('10132111231222132113211321111111321122212122123122211312111')
//=> '10100011010110001001100100011010001101000110101010111001011001101101100100111011001101000100101'
```

## API

### barcodeBarsToBinary(bars)

Returns barcode in binary

#### bars

Type: `string`

A string of the barcode where each bar and gap is represented by one number between 1 and 4 depending on its width.

## License

MIT
