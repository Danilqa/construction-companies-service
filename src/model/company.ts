import { UUID } from '../types/common';

export type Company = {
    id: UUID;
    name: string;
    logoImageUrl: string;
    specialties: string[];
    city: string;
};
