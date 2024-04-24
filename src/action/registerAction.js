"use server"

import { registerService } from "@/service/register.service"

export const registerAction = async (registerInfo) =>{
    const addRegister ={
        firstname: registerInfo.get('firstname') ,
        lastname:registerInfo.get('lastname'),
        gender: registerInfo.get('gender'),
        profile_url: registerInfo.get('profile_url'),
        email: registerInfo.get('email'),
        passwork:registerInfo.get('password')
    }
    await registerService (addRegister);

}