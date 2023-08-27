import {z} from 'zod';
export const registerSchema = z.object({
    username: z.string({required_error: 'username is required'}),
    email: z.string({required_error: 'email is required'}).email({
        message: 'invalided Email'
    }),
    password: z.string({required_error: 'password is required'})
});
export const LoginSchema = z.object({
    username: z.string({required_error: 'username is required'}),
    password: z.string({required_error: 'password is required'})
});