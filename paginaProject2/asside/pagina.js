function mostrar() {



}

function comecar() {
    document.querySelector('.botao').classList.add('display');
    let text = 'ola meu amor tudo bem ?';
    const word = text.split("");
    let quant = word.length
    word.forEach((item, index) => {
        setTimeout(() => {
            document.querySelector('.cabecalho').innerHTML += item;

            quant--;
            if (quant == 0) {
                setTimeout(() => {
                    document.querySelector('.cabecalho').classList.add('display');
                    document.querySelector('.btns').classList.remove('display');
                    document.querySelector('.btns').classList.add('displayf');

                }, 1000)
            }
        }, 200 * index);


    })
}

function nao() {
    alert('nao pode falar nao')
}

function sim() {
    document.querySelector('.btns').classList.remove('displayf');
    document.querySelector('.btns').classList.add('display');
    document.querySelector('.botao').classList.add('display');
    let text = 'ja fazemos 3 anos juntos os melhores 3 anos da minha vida obrigado por fazer parte disso!!!!';
    const word = text.split("");
    let quant = word.length
    word.forEach((item, index) => {
        setTimeout(() => {
            document.querySelector('.cabecalho2').innerHTML += item;

            quant--;
            if (quant == 0) {
                setTimeout(() => {
                    document.querySelector('.cabecalho2').classList.add('display')
                    let text = 'aqui vai um pouco de nossas lembrancas!!!';
                    const word = text.split("");
                    let quant = word.length
                    word.forEach((item, index) => {
                        setTimeout(() => {
                            document.querySelector('.cabecalho3').innerHTML += item;

                            quant--;
                            if (quant == 0) {
                                setTimeout(() => {
                                    chamarfotos()

                                }, 1000)
                            }
                        }, 200 * index);


                    })

                }, 1000)
            }
        }, 200 * index);


    })
}

function chamarfotos() {
    document.querySelector('.galeria').classList.remove('display')
    document.querySelector('.galeria').classList.add('displayf')
}