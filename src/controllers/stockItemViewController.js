import { delStockItem } from "../helpers/storage.js"

export const stockItemViewController=(eventName,data,reference)=>{
    if (eventName === 'remove') {
        console.log(data);
        console.log(reference)
        delStockItem(data);
        reference.parentNode.removeChild(reference);
    }
}