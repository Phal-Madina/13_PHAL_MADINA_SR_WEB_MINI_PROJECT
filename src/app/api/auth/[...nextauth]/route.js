import { loginService } from "@/service/auth.service";
import nextAuth from "next-auth"
import CredentialProvider from "next-auth/providers/credentials";

export const authOption = {
    providers: [
        //log in by email
        CredentialProvider({
            async authorize (userInfo){
            const newUserInfo ={
                email : userInfo.email,
                password : userInfo.password
                };
                // call login service
            const login = await loginService(newUserInfo);
                if (login.status !== 400){
                    return login;
                }
                else {
                    throw new Error(login.detail);
                }
            },
        }),
    ],
    callbacks: {
         async jwt({ token, user}){
            return {...token, ...user}
         },
         async session({session, token}){
            session.user = token;
            return session;
         },
    },
    secret: process.env.NEXTAUTH_SECRET,
    pages: {
        signIn: "/login",
    },
};
const handler = nextAuth(authOption);
export {handler as GET, handler as POST};