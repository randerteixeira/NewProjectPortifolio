
function insert(n){
   let number=n;
 let display =document.querySelector('.display').innerHTML;
 document.querySelector('.display').innerHTML=display+number;
 
       
}
 function clea(){
     document.querySelector('.display').innerHTML='';
     console.log('limpou')
}
function back(){
   let back =document.querySelector('.display').innerHTML;
   document.querySelector('.display').innerHTML=back.substring(0,back.length -1)
}
function resu(){
    let result= document.querySelector('.display').innerHTML;
    if(result){
       document.querySelector('.display').innerHTML=eval(result) 
    }
}