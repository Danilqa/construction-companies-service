import { Company } from '../model/company';
import { COMPANIES } from '../assets/companies';
import { isIntersect } from '../utils/is-intersect';

export class CompanyRepository {

    findByNameAndSpecialities(name: string, specialities: string[]): Company[] {
        const matchByName = (company: Company) => company.name.toLowerCase().startsWith(name.toLowerCase());
        const matchBySpeciality = (company: Company) => !specialities?.length || isIntersect(specialities, company.specialties);

        return COMPANIES.filter(company => matchByName(company) && matchBySpeciality(company));
    }
}
