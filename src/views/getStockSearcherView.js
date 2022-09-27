import { stockSearcherController } from "../controllers/stockSearcherController.js";

export const getStockSearcherView=async()=>{
    const searcher = document.createElement('div');
    searcher.className='searcher';
    searcher.innerHTML=String.raw`
     <input type="text" list="stockitems">
     <input type="submit" value="Add stock item">
     <datalist id="stockitems">
    </datalist>`;
    const dataList=searcher.querySelector('#stockitems');
    const userInput=searcher.querySelector('input[type=text]');
    const userButton=searcher.querySelector('input[type=submit]');
    userInput.addEventListener('input',()=>{
        stockSearcherController('input',userInput.value,dataList);
    })
    userButton.addEventListener('click',()=>{
        stockSearcherController('add',userInput.value,userInput);
    });

    return searcher;
}