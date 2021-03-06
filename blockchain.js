export default class Blockchain {

    // Section 1 Genesis block creation 
    constructor() {
        this.chain = [this.createGenesisBlock()];
    }

    createGenesisBlock() {
        return new Block(0, "3/1/2018", "Genesis Block", "0");
    }

    // Section 2 Adding new blocks 
    getLatestBlock(){
        return this.chain[this.chain.length - 1];
    }

    addBlock(data) {

        newBlock =  new Block (getLatestBlock.index + 1, Date.now(), data);
        newBlock.previousHash = this.getLatestBlock().hash; 
        newBlock.hash = newBlock.calculateHash();
        this.chain.push(newBlock);
    }

    // Section 3 Validating the chain
    // Genesis block = block 0. Using forloop to validate from block 1 - end 
    isChainValid() {
        for (let i = 1; i < this.chain.length; i++) {
            const currentBlock = this.chain[i];
            const previousBlock = this.chain[i-1];
            if (currentBlock.hash !== currentBlock.calculateHash()) {
                return false;
            }
            if (currentBlock.previousHash !== previousBlock.hash) {
                return false;
            }
        }
        return true;
    }
}