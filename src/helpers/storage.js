export const addStockItem=(name)=>{
    const stockItems=getStockItems();
    if (! stockItems.includes(name)){
        stockItems.push(name);
    }
    localStorage.setItem('stockItems',JSON.stringify(stockItems));
}
export const delStockItem = (name) => {
    const stockItems=getStockItems().filter(item=>item!==name);
    localStorage.setItem('stockItems',JSON.stringify(stockItems));
}
export const getStockItems=()=>{
    let stockItems=JSON.parse(localStorage.getItem('stockItems'));
    if (! Array.isArray(stockItems)){
        stockItems=[];
    }
    return stockItems;
}