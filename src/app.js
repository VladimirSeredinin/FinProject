import { bindStockSearcherView } from "./binders/bindStockSearcherView.js";
import { getStockItems } from "./helpers/storage.js";
import { getStockItemView } from "./views/getStockItemView.js";
import { getStockSearcherView } from "./views/getStockSearcherView.js";
import { bindStockItemView } from "./binders/bindStockItemView.js"
import { getStockItemsInfo } from "./helpers/getStockItemsInfo.js";

function main(){
    getStockSearcherView().then((searcher)=>{
        bindStockSearcherView(searcher);
    })
    getStockItems().forEach((name)=>{
        const stockItemsInfo = getStockItemsInfo(name);
        stockItemsInfo.then((stockItem)=>{
            getStockItemView(stockItem.symbol,stockItem).then(element=>{
                bindStockItemView(element);
            })
        })
    })
}

window.addEventListener('load',main);