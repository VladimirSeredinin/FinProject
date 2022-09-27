import { stockItemViewController } from "../controllers/stockItemViewController.js";
import { getStockItemsLogo } from "../helpers/getSockItemLogo.js";

export const getStockItemView=async (stockItemName,stockItem)=>{
    const element=document.createElement('article');
    element.className='article';
    element.style.color=stockItem.change>0?"lightgreen":"lightred";
    element.innerHTML = String.raw`
    <div class="icon">&nbsp;</div>
    <div class="ticker"><p>${stockItemName}</p></div>
    <div class="name"><p>${stockItem.name}</p></div>
    <div class="price"><p>${new Number(stockItem.close).toFixed(2)} $</p></div>
    <div class="icon_gap">${(stockItem.change>0?"&uarr;":"&darr;")}</div>
    <div class="gap"><p>${new Number(stockItem.change).toFixed(2)} $</p></div>
    <div class="gap-percent"><p>${new Number(stockItem.percent_change).toFixed(2)} %</p></div>
    <div class="remove" title="Click here to remove stock item."><p>x</p></div>
    `;
    getStockItemsLogo(stockItemName).then((data)=>{
        const icon=element.querySelector('.icon');
        icon.style.backgroundImage=`url('${data.url}')`;
        icon.style.backgroundSize="contain";
        icon.style.backgroundPosition='center center';
        icon.style.backgroundRepeat="no-repeat";
    })
    
    element.querySelector('.remove').addEventListener('click', () => {
        stockItemViewController('remove',stockItem.name,element);
    })
    return element;
}