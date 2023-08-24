import { connectToDB } from '@/database';
import User from '@/models/user';
import GoogleProvider from 'next-auth/providers/google';
import NextAuth from 'next-auth/next';


const authOptions = {
    providers: [
        GoogleProvider({
            clientId: '55094340181-v87dbmi5fgtdo33gfo6nhgll51r4f8e6.apps.googleusercontent.com',
            clientSecret: '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'
        })
    ],
    callbacks: {
        async signIn({ user, account }) {
            if (account.provider === 'google') {
                const { name, email } = user;
                try {
                    await connectToDB();
                    const userExists = await User.findOne({ email });
                    if (!userExists) {
                        const res = await fetch('http://localhost:3000/api/user', {
                            method: 'POST',
                            headers: {
                                'Content-Type': 'application/json'
                            },
                            body: JSON.stringify({ name, email })
                        });
                        if (res.success) {
                            return user;
                        }
                    }
                } catch (error) {
                    console.error('Sign in error!', error);
                }
            }
            return user;
        }
    }
}

const authHandler = NextAuth(authOptions);

export { authHandler as GET, authHandler as POST };