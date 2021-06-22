/*====================================*
 *========VARIAVEIS GLOBAIS===========*
 *====================================*/
const c = (el)=>document.querySelector(el);
const cs =(el)=>document.querySelectorAll(el);    
let modalqt=1;
let cart=[];
let modalKey=0;
let tam='';
let valor;
let total;


/*====================================*
 *========LISTAGEN DAS PIZZAS=========*
 *====================================*/
pizzaJson.map((item, index)=>{
let pizzaItem =c('.models .pizza-item').cloneNode(true);


           /*TELA HOME */
pizzaItem.setAttribute('data-key',index);
pizzaItem.querySelector('.pizza-item--img img').src=item.img;
pizzaItem.querySelector('.pizza-item--name').innerHTML=item.name;
pizzaItem.querySelector('.pizza-item--price').innerHTML=`R$ ${item.price.toFixed(2)}`;
pizzaItem.querySelector('.pizza-item--desc').innerHTML=item.description;

            /*HOME BY MODAL */

pizzaItem.querySelector('a').addEventListener('click',(e)=>{e.preventDefault();
    let key=e.target.closest('.pizza-item').getAttribute('data-key');
    modalqt=1;
    modalKey=key;
    valor=pizzaJson[key].price.toFixed(2);
    total;
    
c('.pizzaInfo--actualPrice').innerHTML=`R$ ${pizzaJson[key].price .toFixed(2)}`;
c('.pizzaInfo--actualPrice.total').innerHTML=`R$ ${pizzaJson[key].price .toFixed(2)}`;
c('.pizzaBig img').src=pizzaJson[key].img;
c('.pizzaInfo--desc').innerHTML=pizzaJson[key].description;  
c('.pizzaInfo--desc').innerHTML=pizzaJson[key].description;   
c('.pizzaInfo h1').innerHTML = pizzaJson[key].name;
c('.pizzaInfo--size.selected').classList.remove('selected');
cs('.pizzaInfo--size').forEach((size,sizeIndex)=>{
    if(sizeIndex==2){
        size.classList.add('selected');
    }

    
size.querySelector('span').innerHTML=pizzaJson[key].sizes[sizeIndex];
})
c('.pizzaInfo--qt').innerHTML=modalqt;
c('.pizzaWindowArea').style.opacity=0;
c('.pizzaWindowArea').style.display='flex';
   setTimeout(()=>{c('.pizzaWindowArea').style.opacity=1;},200)

});



c('.pizza-area').append( pizzaItem );

})
/*====================================*
 *==========EVENTOS DO MODAL==========*
 *====================================*/
   function closedModal(){
    c('.pizzaWindowArea').style.opacity=0;
    setTimeout(()=>{c('.pizzaWindowArea').style.display='none';},500);

   }
   cs('.pizzaInfo--cancelButton, .pizzaInfo--cancelMobileButton').forEach((item)=>{
       item.addEventListener('click',closedModal);
   });
         
          /*btn + e - and modal */
   c('.pizzaInfo--qtmenos').addEventListener('click',()=>{
       if(modalqt>1){
    modalqt--
    c('.pizzaInfo--qt').innerHTML=modalqt;
    total=total-valor;
    c('.pizzaInfo--actualPrice.total').innerHTML=`R$ ${total.toFixed(2)}`;
    }else{
        closedModal();
    } })

   c('.pizzaInfo--qtmais').addEventListener('click', ()=>{
       modalqt++;
       c('.pizzaInfo--qt').innerHTML=modalqt;
       total=valor*modalqt;
       c('.pizzaInfo--actualPrice.total').innerHTML=`R$ ${total.toFixed(2)}`;

})

           /*BTN FOR SELECTED TAM */
cs('.pizzaInfo--size').forEach((size,sizeIndex)=>{
  size.addEventListener('click',(e)=>{
    c('.pizzaInfo--size.selected').classList.remove('selected');
    size.classList.add('selected');
  })
})

            /*BTN ADD ON CART */

c('.pizzaInfo--addButton').addEventListener('click', ()=>{
            


let size= c('.pizzaInfo--size.selected').getAttribute('data-key');
switch(size){
    case '0':tam='P';break;
    case '1':tam='M';break;
    case '2':tam='G';break;
    
}
let ident=pizzaJson[modalKey].id+'#'+tam;
let pass=cart.findIndex((item)=>item.ident==ident);
if(pass> -1){
    cart[pass].qt+=modalqt;
}
else{

cart.push({
    ident,
    id:pizzaJson[modalKey].id,
    tamanho:tam,
    qt:modalqt
})
}

console.log(cart);
closedModal();
updateCart();

})
c('.menu-openner').addEventListener('click',()=>{
if(cart.length>0){
    c('aside').style.left='0';
}
c('.menu-closer').addEventListener('click',()=>{
    c('aside').style.left='100vw';  
})

})
function updateCart(){
    c('.menu-openner span').innerHTML=cart.length;
if(cart.length>0){
 c('aside').classList.add('show');
 c('.cart').innerHTML='';
 let subtotal=0;
 let desconto=0;
 let total=0;
 for (let i in cart){
     let pizzaItem=pizzaJson.find((item)=>item.id==cart[i].id);
     subtotal+=pizzaItem.price*cart[i].qt;
     let cartItem=c('.models .cart--item').cloneNode(true);
     cartItem.querySelector('img').src = pizzaItem.img
     cartItem.querySelector('.cart--item-nome').innerHTML=`${pizzaItem.name} (${tam})`;
     cartItem.querySelector('.cart--item--qt').innerHTML=cart[i].qt;
     cartItem.querySelector('.cart--item-qtmenos').addEventListener('click',()=>{
        if (cart[i].qt>1){
           cart[i].qt--;
        }else{
            cart.splice(i,1);
        }
       
       updateCart();
            })
     cartItem.querySelector('.cart--item-qtmais').addEventListener('click',()=>{
cart[i].qt++;
updateCart();
     })
     

     c('.cart').append(cartItem);
 }
 desconto=subtotal*0.1;
 total=subtotal-desconto;
 c('.subtotal span:last-child').innerHTML=`R$ ${subtotal.toFixed(2)}`;
 c('.desconto span:last-child').innerHTML=`R$ ${desconto.toFixed(2)}`;
 c('.total span:last-child').innerHTML=`R$ ${total.toFixed(2)}`;
}
else{
    c('aside').classList.remove('show');
    c('aside').style.left='100vw';

}
}
