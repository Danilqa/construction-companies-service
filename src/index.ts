import { Blockchain } from './app/blockchain';

const blockchain = new Blockchain();

console.log(blockchain.proofOfWork(10));
console.log(blockchain.proofOfWork(11));
console.log(blockchain.proofOfWork(12));
console.log(blockchain.proofOfWork(13));
