import { redirect } from "next/dist/server/api-utils";

export const registerService = async (registeerInfo) =>{
    const res = await fetch(`http://110.74.194.123:8989/api/todo/v1/auth/sign-up`,{
        method: "POST",
        body: JSON.stringify(registeerInfo),
        headers: {
            "Content-Type": "application/json"
        },
        
    });console.log(res.json());
    if(res.ok){
        return {redirect: '/login'};
    }
    
}
