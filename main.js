let dataProduct;
var title=document.getElementById("title");
var price=document.getElementById("price");
var taxes=document.getElementById("taxes");
var ads=document.getElementById("ads");
var discount=document.getElementById("discount");
var count=document.getElementById("count");
var totals=document.getElementById("total");
var catgory=document.getElementById("category");
var search=document.getElementById("search");


if(localStorage.product!=null)
{
    dataProduct=JSON.parse(localStorage.product);
    
}else
{
    dataProduct=[];
}

showdata();

function deleteAll()
{
    localStorage.clear();
    dataProduct=[];
    showdata();
}

function total()
{

    if(price.value!="")
    {
        var sum=+price.value + +taxes.value+ +ads.value- +discount.value;
        if(sum<0){sum=0};
        totals.innerHTML=sum;
        totals.style.background='green'
    }
    else
    {
        total.innerHTML='';
        total.style.background='#e35b2d'
    }
}

function create(){
let newPro=
{
    titleP:title.value,
    priceP:price.value,
    taxesP:taxes.value,
    adsP:ads.value,
    discountP:discount.value,
    totalP:totals.innerHTML,
    catgoryP:catgory.value,
    countP:count.value
} 

    for (let i = 0; i < newPro.countP; i++) {
        dataProduct.push(newPro);
    }

sessionStorage.clear();
localStorage.setItem('product',JSON.stringify(dataProduct));
clearInputs();

showdata();

}

function clearInputs(){
    price.value="";
    taxes.value="";
    ads.value="";
    discount.value="";
    totals.innerHTML="";
    title.value="";
    count.value="";
    catgory.value="";
}

function showdata()
{
    let table='';
    for (let i = 0; i < dataProduct.length; i++) {
        
        table+=`<tr>
        <td>${i+1}</td>
        <td>${dataProduct[i].titleP}</td>
        <td>${dataProduct[i].priceP}</td>
        <td>${dataProduct[i].taxesP}</td>
        <td>${dataProduct[i].adsP}</td>
        <td>${dataProduct[i].discountP}</td>
        <td>${dataProduct[i].totalP}</td>
        <td>${dataProduct[i].catgoryP}</td>
        <td><button id="update${i+1}" onclick='update(${i})'">update</button></td>
        <td><button id="delete${i+1}"onclick='deleteData(${i})'>delete</button></td>
        </tr>`;
    }
    document.getElementById('tbody').innerHTML=table;

        if(dataProduct.length>0)
        {
            document.getElementById("deleteAll").innerHTML=" <button onclick='deleteAll()' >deleteAll</button>"   
        }
        else
        {
            document.getElementById("deleteAll").innerHTML="";
        }
    
}

function deleteData(nb)
{
    
    var x=dataProduct.splice(nb,1);
    localStorage.product=JSON.stringify(dataProduct);
    showdata();


    
}


function updateData(i)
{
    
    dataProduct[i].titleP=title.value,
    dataProduct[i].priceP=price.value,
    dataProduct[i].taxesP=taxes.value,
    dataProduct[i].adsP=ads.value,
    dataProduct[i].discountP=discount.value,
    dataProduct[i].totalP=totals.innerHTML,
    dataProduct[i].catgoryP=category.value,
    dataProduct[i].countP=count.value
    document.getElementById("submit").innerHTML="create";
    document.getElementById("submit").setAttribute('onClick',"create()");
    document.getElementById("count").style.display='block';
    localStorage.product=JSON.stringify(dataProduct);
    showdata();
    clearInputs()
}

function update(nb)
{ 
    title.value=dataProduct[nb].titleP;
    price.value=dataProduct[nb].priceP;
    taxes.value=dataProduct[nb].taxesP;
    ads.value=dataProduct[nb].adsP;
    discount.value=dataProduct[nb].discountP;
    totals.innerHTML=dataProduct[nb].totalP;
    totals.style.background="green";
    document.getElementById("category").value=dataProduct[nb].catgoryP;
    document.getElementById("count").style.display='none';

    document.getElementById("submit").innerHTML="update";
    document.getElementById("submit").setAttribute('onClick',"updateData("+nb+")");
}

function searchh(searchMood)
{

    let table='';
    for (let i = 0; i < dataProduct.length; i++) {
       if(searchMood=="titleP")
       {
           if(dataProduct[i].titleP==search.value)
           {
               table+=`<tr>
               <td>${i+1}</td>
               <td>${dataProduct[i].titleP}</td>
               <td>${dataProduct[i].priceP}</td>
               <td>${dataProduct[i].taxesP}</td>
               <td>${dataProduct[i].adsP}</td>
               <td>${dataProduct[i].discountP}</td>
               <td>${dataProduct[i].totalP}</td>
               <td>${dataProduct[i].catgoryP}</td>
               <td><button id="update${i+1}" onclick='update(${i})'">update</button></td>
               <td><button id="delete${i+1}"onclick='deleteData(${i})'>delete</button></td>
               </tr>`;
           }
       }
       else
       {
        if(dataProduct[i].catgoryP==search.value)
        {
            table+=`<tr>
            <td>${i+1}</td>
            <td>${dataProduct[i].titleP}</td>
            <td>${dataProduct[i].priceP}</td>
            <td>${dataProduct[i].taxesP}</td>
            <td>${dataProduct[i].adsP}</td>
            <td>${dataProduct[i].discountP}</td>
            <td>${dataProduct[i].totalP}</td>
            <td>${dataProduct[i].catgoryP}</td>
            <td><button id="update${i+1}" onclick='update(${i})'">update</button></td>
            <td><button id="delete${i+1}"onclick='deleteData(${i})'>delete</button></td>
            </tr>`;
        }
       }
    
    }
    document.getElementById('tbody').innerHTML=table;
}



