const apiRequest = async (url = '', optionsObj = null, errorMsg = null) => {
    try{
        const response = await fetch(url, optionsObj);
        if (!response.ok) throw Error('Reaload the page pls')
    } catch(error){
        errorMsg = error.message;
    } finally{
        return errorMsg;
    }
};

export default apiRequest;