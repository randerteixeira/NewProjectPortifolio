let text = 'Seja bem vindo ao meu portifolio';
const word = text.split("");
let quant = word.length

word.forEach((item, index) => {
    setTimeout(() => {
        document.querySelector('.text').innerHTML += item;

        quant--;

        if (quant == 0) {
            document.querySelector('.abaixo').style.opacity = "1";
            setTimeout(() => {
                document.querySelector('.text').innerHTML = '';
            }, 2000)
        }

    }, 200 * index);


})

function dropdawn() {
    document.querySelector('.lista-drop2').classList.remove('dispf2');
    document.querySelector('.lista-drop3').classList.remove('dispf3');
    document.querySelector('.seta3').classList.remove('setac3');
    document.querySelector('.seta2').classList.remove('setac2');
    document.querySelector('.seta2').classList.add('setab2');
    document.querySelector('.seta3').classList.add('setab3');


    if (document.querySelector('.lista-drop').classList.contains('dispf')) {
        document.querySelector('.lista-drop').classList.remove('dispf');

    } else {
        document.querySelector('.lista-drop').classList.add('dispf')
    }
    if (document.querySelector('.seta').classList.contains('setab')) {
        document.querySelector('.seta').classList.remove('setab')
        document.querySelector('.seta').classList.add('setac')
    } else {
        document.querySelector('.seta').classList.remove('setac')
        document.querySelector('.seta').classList.add('setab')
    }

}

function dropdawn2() {
    document.querySelector('.lista-drop').classList.remove('dispf');
    document.querySelector('.lista-drop3').classList.remove('dispf3');
    document.querySelector('.seta').classList.remove('setac');
    document.querySelector('.seta3').classList.remove('setac3');
    document.querySelector('.seta').classList.add('setab');
    document.querySelector('.seta3').classList.add('setab3');
    if (document.querySelector('.lista-drop2').classList.contains('dispf2')) {
        document.querySelector('.lista-drop2').classList.remove('dispf2');

    } else {
        document.querySelector('.lista-drop2').classList.add('dispf2')
    }
    if (document.querySelector('.seta2').classList.contains('setab2')) {
        document.querySelector('.seta2').classList.remove('setab2')
        document.querySelector('.seta2').classList.add('setac2')
    } else {
        document.querySelector('.seta2').classList.remove('setac2')
        document.querySelector('.seta2').classList.add('setab2')
    }

}

function dropdawn3() {
    document.querySelector('.lista-drop').classList.remove('dispf');
    document.querySelector('.lista-drop2').classList.remove('dispf2');
    document.querySelector('.seta').classList.remove('setac');
    document.querySelector('.seta2').classList.remove('setac2');
    document.querySelector('.seta2').classList.add('setab2');
    document.querySelector('.seta').classList.add('setab');

    if (document.querySelector('.lista-drop3').classList.contains('dispf3')) {
        document.querySelector('.lista-drop3').classList.remove('dispf3');

    } else {
        document.querySelector('.lista-drop3').classList.add('dispf3')
    }
    if (document.querySelector('.seta3').classList.contains('setab3')) {
        document.querySelector('.seta3').classList.remove('setab3')
        document.querySelector('.seta3').classList.add('setac3')
    } else {
        document.querySelector('.seta3').classList.remove('setac3')
        document.querySelector('.seta3').classList.add('setab3')
    }

}
setTimeout(() => {
    let medidaWidth = document.getElementsByClassName('text-ap')[0].clientWidth;
    let medidaHeigt = document.getElementsByClassName('text-ap')[0].clientHeight;
    document.querySelector('.text-ap-conteudo').style.height = `${medidaHeigt-20}px`;
    document.querySelector('.text-ap-conteudo').style.width = `${medidaWidth-20}px`;
}, 10)
window.addEventListener('resize', () => {
    let medidaWidth = document.getElementsByClassName('text-ap')[0].clientWidth;
    let medidaHeigt = document.getElementsByClassName('text-ap')[0].clientHeight;
    document.querySelector('.text-ap-conteudo').style.height = `${medidaHeigt-20}px`;
    document.querySelector('.text-ap-conteudo').style.width = `${medidaWidth-20}px`;

})
function porc(inicio,final){
    return calculo=100-(((inicio-final)/inicio)*100);
}
function barracss(){
let habNivel=document.querySelector('.hab_css').clientWidth;

let habTotal=document.querySelector('.hab-barra').clientWidth;

let calculo= porc(habTotal,habNivel);
document.querySelector('.hab_quant_css').innerHTML=Math.round( calculo.toFixed(2))+"%";
}
function barrahtml(){
    let habNivel=document.querySelector('.hab_html').clientWidth;
    
    let habTotal=document.querySelector('.hab-barra').clientWidth;
    
    let calculo= porc(habTotal,habNivel);
    document.querySelector('.hab_quant_html').innerHTML=Math.round( calculo.toFixed(2))+"%";
    }
    function barrajs(){
        let habNivel=document.querySelector('.hab_js').clientWidth;
        
        let habTotal=document.querySelector('.hab-barra').clientWidth;
        
        let calculo= porc(habTotal,habNivel);
        document.querySelector('.hab_quant_js').innerHTML=Math.round( calculo.toFixed(2))+"%";
        }
        function barraphp(){
            let habNivel=document.querySelector('.hab_php').clientWidth;
            
            let habTotal=document.querySelector('.hab-barra').clientWidth;
            
            let calculo= porc(habTotal,habNivel);
            document.querySelector('.hab_quant_php').innerHTML=Math.round( calculo.toFixed(2))+"%";
            }
            function barrasql(){
                let habNivel=document.querySelector('.hab_sql').clientWidth;
                
                let habTotal=document.querySelector('.hab-barra').clientWidth;
                
                let calculo= porc(habTotal,habNivel);
                document.querySelector('.hab_quant_sql').innerHTML=Math.round( calculo.toFixed(2))+"%";
                }
                function barragit(){
                    let habNivel=document.querySelector('.hab_git').clientWidth;
                    
                    let habTotal=document.querySelector('.hab-barra').clientWidth;
                    
                    let calculo= porc(habTotal,habNivel);
                    document.querySelector('.hab_quant_git').innerHTML=Math.round( calculo.toFixed(2))+"%";
                    }
                    function barranode(){
                        let habNivel=document.querySelector('.hab_node').clientWidth;
                        
                        let habTotal=document.querySelector('.hab-barra').clientWidth;
                        
                        let calculo= porc(habTotal,habNivel);
                        document.querySelector('.hab_quant_node').innerHTML=Math.round( calculo.toFixed(2))+"%";
                        }
                        function barranode(){
                            let habNivel=document.querySelector('.hab_node').clientWidth;
                            
                            let habTotal=document.querySelector('.hab-barra').clientWidth;
                            
                            let calculo= porc(habTotal,habNivel);
                            document.querySelector('.hab_quant_node').innerHTML=Math.round( calculo.toFixed(2))+"%";
                            }
                            function barrareact(){
                                let habNivel=document.querySelector('.hab_react').clientWidth;
                                
                                let habTotal=document.querySelector('.hab-barra').clientWidth;
                                
                                let calculo= porc(habTotal,habNivel);
                                document.querySelector('.hab_quant_react').innerHTML=Math.round( calculo.toFixed(2))+"%";
                                }
                                function barrareactN(){
                                    let habNivel=document.querySelector('.hab_react-n').clientWidth;
                                    
                                    let habTotal=document.querySelector('.hab-barra').clientWidth;
                                    
                                    let calculo= porc(habTotal,habNivel);
                                    document.querySelector('.hab_quant_react-n').innerHTML=Math.round( calculo.toFixed(2))+"%";
                                    }
                                    function barraboot(){
                                        let habNivel=document.querySelector('.hab_boot').clientWidth;
                                        
                                        let habTotal=document.querySelector('.hab-barra').clientWidth;
                                        
                                        let calculo= porc(habTotal,habNivel);
                                        document.querySelector('.hab_quant_boot').innerHTML=Math.round( calculo.toFixed(2))+"%";
                                        }
                                        function barralara(){
                                            let habNivel=document.querySelector('.hab_lara').clientWidth;
                                            
                                            let habTotal=document.querySelector('.hab-barra').clientWidth;
                                            
                                            let calculo= porc(habTotal,habNivel);
                                            document.querySelector('.hab_quant_lara').innerHTML=Math.round( calculo.toFixed(2))+"%";
                                            }
setTimeout(barracss,300);
setTimeout(barrahtml,200);
setTimeout(barrajs,400);
setTimeout(barraphp,500);
setTimeout(barrasql,600);
setTimeout(barranode,700);
setTimeout(barragit,400);
setTimeout(barrareact,800);
setTimeout(barrareactN,900);
setTimeout(barraboot,1000);
setTimeout(barralara,1100);
