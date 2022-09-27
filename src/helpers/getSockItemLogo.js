export const getStockItemsLogo=async (name)=>{
    const RESTKEY='84313387f65348aa9d5dc1076fa67d6d';
    const RESTAPI=`https://api.twelvedata.com/logo?symbol=${name}&apikey=${RESTKEY}`
    try{
        const request=await fetch(RESTAPI);
        try{
            return await request.json();
        }catch(error){
            throw new Error(error);
        }
    }catch(error){
        throw new Error(error);
    }
}