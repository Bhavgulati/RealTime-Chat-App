import {create} from "zustand";
import { axiosInstance} from "../lib/axios.js";

export const useAuthStore = create((set)=>({
    authUser:null,
    isSigningUp: false,
    isLoggingIn: false,
    isUpdatingProfile:false,

    isCheckingAuth:true,
    updateProfile: async (data) => {
    set({isUpdatingProfile: true});
    try {
        const res = await axiosInstance.put("/auth/update-profile",data);
        set({ authUser: res.data});
        toast.success("Profile updated succesfully");
    } catch(error) {
        console.log("error in update profile:",error);
        toast.error(error.response.data.message);
    } finally{
        set({ isUpdatingProfile: false});
    }
},
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