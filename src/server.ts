import Fastify from 'fastify';
import swagger from '@fastify/swagger';
import { swaggerConfig } from './config/swagger.config';
import { environment } from './environment/environment';

const app = Fastify({ logger: true });

app.register(swagger, swaggerConfig);

app.post('/mine-block', () => {});

app.listen({ port: environment.port }, (err, address) => {
    console.log(`the app started on ${address}`);
    if (err) {
        throw err;
    }
});

