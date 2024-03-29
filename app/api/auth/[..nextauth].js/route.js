import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';

const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
};

export const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
// callbacks: {
//   async signIn({ account, profile }) {
//     if (!profile?.email) {
//       throw new Error('No email returned from Google');
//     }
//     await upsertUser({
//       email: profile.email,
//       name: profile.name,
//       image: profile.picture,
//     });
//   },
// },
