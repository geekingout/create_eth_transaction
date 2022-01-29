# Create-ethereum-transaction

## How to run

Change directory to the project's root directory and install the node modules

```
npm i

```

Run the app

```
node app.js
```

It is going to throw an error because the nonce is not correct and you will need to use the nonce that they mention:

![nonce error](https://github.com/andresaaap/Create-ethereum-transaction/blob/master/img/error-nonce.png?raw=true)

Convert decimal nonce to hexadecimal using this [webtool](https://www.rapidtables.com/convert/number/decimal-to-hex.html):

![Decimal to hex converted](https://github.com/andresaaap/Create-ethereum-transaction/blob/master/img/decimal-hex.png?raw=true)

Verify:


![verify hex](https://github.com/andresaaap/Create-ethereum-transaction/blob/master/img/verify-hex.png?raw=true)

Paste the nonce in the file and make sure to add the **0x** prefix:

![paste nonce to file](https://github.com/andresaaap/Create-ethereum-transaction/blob/master/img/paste-nonce.png?raw=true)

Run the app again

```
node app.js
```

