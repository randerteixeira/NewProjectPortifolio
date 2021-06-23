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
let habNivel=document.querySelector('.hab_css').clientWidth;

let habTotal=document.querySelector('.hab-barra').clientWidth;
console.log(habNivel )
console.log(habTotal)
let calculo=100-(((habTotal-habNivel)/habTotal)*100);
console.log( Math.round( calculo.toFixed(2)));