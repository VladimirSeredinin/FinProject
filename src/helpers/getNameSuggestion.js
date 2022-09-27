export const getNameSuggestion=async (name)=>{
    try{
        const request=await fetch(`https://api.twelvedata.com/symbol_search?symbol=${name}&source=docs`);
        if (request.ok){
            try{
                return request.json();
            }catch (error){
                throw new Error(error);
            }
        }
    }catch(error){
        throw new Error(error);
    }
}