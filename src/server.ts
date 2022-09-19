import Fastify, { FastifyRequest } from 'fastify';
import cors from '@fastify/cors';
import { env } from './env/env';
import { CompanyRepository } from './repository/company.repository';
import { SpecialityRepository } from './repository/speciality.repository';

const companyRepository = new CompanyRepository();
const specialityRepository = new SpecialityRepository();

const app = Fastify({ logger: true });

app.register(cors);

type CompaniesRequest = FastifyRequest<{ Querystring: { query: string, specialities: string } }>
app.get('/companies', (request: CompaniesRequest) => {
    const { query = '', specialities } = request.query;
    console.log('query:', query);
    return companyRepository.findByNameAndSpecialities(query, specialities?.split(','));
});

app.get('/specialities', () => specialityRepository.findAll());

app.listen({ port: env.port }, (error, address) => {
    console.log(`the app started on ${address}`);
    if (error) {
        throw error;
    }
});

