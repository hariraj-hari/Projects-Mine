const API_request = async (url='', optionObj = null, errMsg=null)=>{
    try{
        const respone = await fetch(url, optionObj )
        if(!respone.ok) throw Error("please reload the app")
    }catch(err){
        errMsg =err.Message
    }
    finally{
        return errMsg
    }
}
export default API_request 