let result = document.querySelector('.container .result-box input');
let btns = document.querySelectorAll('.container .btns-box .btn');
let evalBtn = document.querySelector('.container .btns-box .eval-btn');
let clrBtn = document.querySelector('.container .btns-box .clr-btn');
let delBtn = document.querySelector('.container .btns-box .delete-btn');

let getValue =(e)=>{
  let btnText = e.target.innerHTML;
  if(btnText == '×'){
     btnText = '*'    
  }
  if(btnText == '÷'){
     btnText = '/';   
  }
  result.value += btnText;
}

evalBtn.addEventListener('click',()=>{
 try{
   result.value = eval(result.value);   
 }catch(err){
   result.value = 'Error';    
 }    
})

clrBtn.addEventListener('click',()=>{
  result.value = '';     
});

delBtn.addEventListener('click',()=>{
  result.value = result.value.substr(0,result.value.length - 1);
})

for(let i=0;i<btns.length;i++){
  btns[i].addEventListener('click',getValue)  
}
