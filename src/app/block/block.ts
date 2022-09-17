import { sha256number } from '../../@types/common';
import { toSha256 } from '../../utils/hash.utils';

interface BlockArgs {
    index: number;
    timestamp: Date;
    previousHash: sha256number;
    proof: number;
}

export class Block {
    index: number;
    timestamp: Date;
    previousHash: sha256number;
    proof: number;

    constructor(props: BlockArgs) {
        this.index = props.index;
        this.timestamp = props.timestamp;
        this.previousHash = props.previousHash;
        this.proof = props.proof;
    }

    get hash(): sha256number {
        return toSha256(JSON.stringify(this));
    }
}
