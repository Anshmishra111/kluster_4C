const head=document.querySelector('#head');
console.log(head);
head.style.color='red';
head.style.border='2px solid black';
head.style.backgroundColor='yellow';
const btn=document.getElementById('btn');
btn.addEventListener('click',()=>{
    head.style.backgroundColor='grey';
    const inner=document.querySelector('#inner');
    inner.style.color='blue';
    const container=document.querySelector('.container');
    container.style.backgroundColor='lightblue';
});         
