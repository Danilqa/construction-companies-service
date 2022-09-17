import { Block } from './block/block';
import { toSha256 } from '../utils/hash.utils';

export class Blockchain {
    chain: Block[] = [];

    constructor() {
        this.createBlock(1, '0');
    }

    createBlock(proof: number, previousHash: string): Block {
        const block = new Block({
            index: this.chain.length + 1,
            timestamp: new Date(),
            previousHash,
            proof
        });

        this.chain.push(block);

        return block;
    }

    getPreviousBlock(): Block {
        if (!this.chain.length) {
            throw Error('the chain is empty');
        }

        return this.chain[this.chain.length - 1];
    }

    proofOfWork(previousProof: number): number {
        let newProof = 1;
        let checkProof = false;
        while (!checkProof) {
            if (this.isPassedProofOfWorkCondition(newProof, previousProof)) {
                checkProof = true;
            } else {
                newProof++;
            }
        }

        return newProof;
    }

    isChainValid(): boolean {
        let previousBlock = this.chain[0];
        let blockIndex = 1;
        while (blockIndex < this.chain.length) {
            const currentBlock = this.chain[blockIndex];
            if (currentBlock.previousHash !== previousBlock.hash) {
                return false;
            }

            const previousProof = previousBlock.proof;
            const proof = currentBlock.proof;

            if (!this.isPassedProofOfWorkCondition(proof, previousProof)) {
                return false;
            }

            previousBlock = currentBlock;
            blockIndex++;
        }

        return true;
    }

    private isPassedProofOfWorkCondition(proof: number, previousProof: number): boolean {
        return toSha256(proof ** 2 - previousProof ** 2).startsWith('0');
    }
}
