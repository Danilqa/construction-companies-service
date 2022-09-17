import { sha256number } from '../@types/common';
import { sha256 } from 'hash.js';

export function toSha256(value: number | string): sha256number {
    return sha256().update(String(value)).digest('hex');
}
