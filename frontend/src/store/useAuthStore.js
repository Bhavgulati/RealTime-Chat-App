import {create} from "zustand";
import {axiosInstance} from "../lib/axios.js";
import toast from "react-hot-toast";

export const useAuthStore = create((set) =>({
    authUser: null,
    isSigningUp: false,
    isLoggingIng: false,
    isUpdatingProfile: false,

    isCheckingAuth: true,

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

}))