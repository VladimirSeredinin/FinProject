export const getStockItemsInfo=async (stockItem)=>{
    const RESTKEY='84313387f65348aa9d5dc1076fa67d6d';
    const RESTAPI = `https://api.twelvedata.com/quote?symbol=${stockItem}&apikey=${RESTKEY}`
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