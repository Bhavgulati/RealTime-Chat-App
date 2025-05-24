
//add set, get to useChatStore variables
sendMessage: async(messageData) =>{
    const {selectedUser,messages} =get();
    try{
        const res = await axiosInstance.post(`/messages/send/${selectedUser._id}`,messageData);
        setImmediate({messages:[...messageData,res.data]})
    }catch(error){
        toast.error(error.response.data.message);
    }
},