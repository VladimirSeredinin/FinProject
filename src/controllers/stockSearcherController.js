import { bindStockItemView } from "../binders/bindStockItemView.js";
import { addStockItem } from "../helpers/storage.js";
import { getStockItemView } from "../views/getStockItemView.js";
import { getNameSuggestion} from "../helpers/getNameSuggestion.js";
import { getStockItemsInfo } from "../helpers/getStockItemsInfo.js";

export const stockSearcherController=(eventName,data,reference)=>{
    if (eventName==='add'){
        getStockItemsInfo(data).then((stockItemInfo)=>{
            getStockItemView(data,stockItemInfo).then((stockItem)=>{
                reference.value='';

                addStockItem(data);
                bindStockItemView(stockItem);
            });
        });
    }
    if (eventName==='input'){
        reference.innerHTML='';
        getNameSuggestion(data).then((stockList)=>{
            stockList.data.forEach((item)=>{
                const option=document.createElement('option');
                option.value=item.symbol;
                option.textContent=item.instrument_name;
                reference.appendChild(option);
            });
        })
    }
}