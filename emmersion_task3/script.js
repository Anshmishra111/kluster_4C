const btn=document.getElementById('btn');
const tempUrl='https://dummyjson.com/products/search?q=';
const inp=document.getElementById('inp');
const container=document.getElementById('container');
btn.addEventListener('click',function(){
    const URL=tempUrl+inp.value;
    fetch(URL)
    .then((res) =>{
        return res.json();

    })
    .then((data) =>{
        for(let product of data.products){
         console.log(product);
         const productElem= document.createElement('div');
         productElem.style.border='2px solid black';
         const h2=document.createElement('h2');
         h2.innerText=product.title;
         const img=document.createElement('img');
         img.setAttribute('src', product.images[0]);
         img.style.width='200px';
         const para= document.createElement('p');
         para.innerText=product.price;

         productElem.append(h2);
            productElem.append(img);
            productElem.append(para);
         container.append(productElem);
        }
       
    })
    
});