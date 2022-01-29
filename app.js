var Web3 = require('web3')
var EthereumTransaction = require("ethereumjs-tx").Transaction
//const EthereumTx = require('ethereumjs-tx').Transaction
var url = 'HTTP://127.0.0.1:7545' // 8545 if using ganache-cli
var web3 = new Web3(url)
var sendingAddress = '0x6C535498152765BA9ce8B0D61dcB57F92642030B';
var receivingAddress = '0xC4A78b77Dd1548aEe8E3A2b2C9424b9f830dBE1a';
web3.eth.getBalance(sendingAddress).then(console.log) ;
web3.eth.getBalance(receivingAddress).then(console.log);
//web3.eth.getAccounts().then(accounts => console.log(accounts));
/*##########################
CREATE A TRANSACTION
##########################*/
// -- Step 4: Set up the transaction using the transaction variables as shown var rawTransaction = { nonce: 0, to: receivingAddress, gasPrice: 20000000, gasLimit: 30000, value: 1, data: "" }
// -- Step 5: View the raw transaction rawTransaction
// -- Step 6: Check the new account balances (they should be the same) web3.eth.getBalance(sendingAddress).then(console.log) web3.eth.getBalance(receivingAddress).then(console.log)
// Note: They haven't changed because they need to be signed...
var rawTransaction = { nonce: "0x000", to: receivingAddress, gasPrice: '0x20000000', gasLimit: '0x30000', value: '0x01', data: "0x000" }

//Sign the transaction
var privateKeySender ='7a67f526fc71f3a1b9a5d7f5bd45a2fc5836f5ca31f7205b2e87ce577d3cb17e';
var privateKeySenderHex = Buffer.from(privateKeySender, 'hex');
var transaction = new EthereumTransaction(rawTransaction) ;
transaction.sign(privateKeySenderHex);
//Sign the transactions
var serializedTransaction = transaction.serialize();
web3.eth.sendSignedTransaction(serializedTransaction);