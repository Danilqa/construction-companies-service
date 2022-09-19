import { Speciality } from '../model/speciality';
import { SPECIALITIES } from '../assets/specialities';

export class SpecialityRepository {

    findAll(): Speciality[] {
        return SPECIALITIES;
    }
}
