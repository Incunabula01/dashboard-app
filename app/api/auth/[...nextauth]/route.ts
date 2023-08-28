import { connectToDB } from '@/database';
import User from '@/models/user';
import GoogleProvider from 'next-auth/providers/google';
import NextAuth from 'next-auth/next';
import { AuthOptions } from 'next-auth';

export const dynamic = 'force-dynamic';

const clientID: string = process.env.GOOGLE_CLIENT_ID ?? '';
const clientSecret: string = process.env.GOOGLE_CLIENT_SECRET ?? '';
const apiUserURL = process.env.API_USER as RequestInfo | URL;

console.log('env vars', clientID, clientSecret, apiUserURL);

const authOptions: AuthOptions = {
    providers: [
        GoogleProvider({
            clientId: clientID,
            clientSecret: clientSecret
        })
    ],
    callbacks: {
        async signIn(params) {
            const { user, account } = params;

            if (account?.provider === 'google') {
                const { name, email } = user;
                try {
                    await connectToDB();
                    const userExists = await User.findOne({ email });
                    if (!userExists) {
                        const res: Response = await fetch(apiUserURL, {
                            method: 'POST',
                            headers: {
                                'Content-Type': 'application/json'
                            },
                            body: JSON.stringify({ name, email })
                        });
                        if (res.ok) {
                            return true;
                        }
                        return false;
                    }
                } catch (error) {
                    console.error('Sign in error!', error);
                    return false;
                }
            }
            if(user){
                return true;
            }
            return false;
        }
    },
    secret: process.env.NEXTAUTH_SECRET
}

const authHandler = NextAuth(authOptions);

export { authHandler as GET, authHandler as POST };