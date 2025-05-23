import {create} from "zustand";
import { axiosInstance} from "../lib/axios.js";

export const useAuthStore = create((set)=>({
    authUser:null,
    isSigningUp: false,
    isLoggingIn: false,
    isUpdatingProfile:false,

    isCheckingAuth:true,

    checkAuth: async() =>{
        try{
            const res = await axiosInstance.get("/auth/check");
        }catch(error){
            console
            set({authUser:null});
        }finally{
            set({isCheckingAuth:false});
        }
    },
    signup : async(data)=>{
        set({isSigningUp:true});
        try{

        }catch(error){

        }
    },
}));