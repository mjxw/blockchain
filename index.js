import block from block.js;
import blockchain from Blockchain.js;

let BlockGeeksCoin = new Blockchain();
BlockGeeksCoin.addBlock({ amount: 4 });
BlockGeeksCoin.addBlock({ amount: 8 });