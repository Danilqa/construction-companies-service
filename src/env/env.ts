import 'dotenv/config';

export const env = {
    port: Number(process.env.HOST_PORT || 3060)
}
