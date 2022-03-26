const teclado = require('./teclado.js');

const programa = async () => {

    let adi = '1'
    let sub = '2'
    let multi = '3'
    let pot = '4'


    const per = async () =>{
        let pergunta = await teclado.perguntar(`Olá, gostaria de calcular algo? `)

        if(pergunta == 'sim' || pergunta == 'SIM' || pergunta == 'Sim' ){
            await cp()
        }else{
            console.log('Ah que pena, até uma proxima')
            teclado.fechar
        }
    }
    
    const cp = async () =>{
        p1 = await teclado.perguntar(`Olá, o que você deseja calcular?
    
        1 - Adição
        2 - Subtração
        3 - Multiplicação
        4 - Potenciação
        
        -> `)
        if(p1 == adi){
            await adicao()
        }
        if(p1 == sub){
            await subtracao()
        }
        if(p1 == multi){
            await multiplicacao()
        }
        if(p1 == pot){
            await potenciacao()
        }
    }

    const adicao = async () =>{
        let n1 = await teclado.perguntar('Qual o número 1? ')
        let n2 = await teclado.perguntar('Qual o número 2? ')
        let res

        res = (parseInt(n1)) + (parseInt(n2))
        console.log(res)
        await continuar()
    }

    const subtracao = async () =>{
        let n1 = await teclado.perguntar('Qual o número 1? ')
        let n2 = await teclado.perguntar('Qual o número 2? ')
        let res

        res = (parseInt(n1)) - (parseInt(n2))
        console.log(res)
        await continuar()
    }

    const multiplicacao = async () =>{
        let n1 = await teclado.perguntar('Qual o número 1? ')
        let n2 = await teclado.perguntar('Qual o número 2? ')
        let res

        res = (parseInt(n1)) * (parseInt(n2))
        console.log(res)
        await continuar()
    }

    const potenciacao = async () =>{
        let numero = await teclado.perguntar('Escolha um numero ')
        let potencia = await teclado.perguntar('Escolha uma potência ')

        let res = 1
        for (let i = 0; i < potencia; i++){
            res *= numero
        }
        console.log(+ res)
        await continuar()
    }

    const continuar = async () =>{
        let cont = await teclado.perguntar('Deseja continuar calculando? ')

        if(cont == 'sim' || cont == 'SIM' == 'Sim'){
            await cp()
        }else{
            console.log('Volte sempre!!')
            teclado.fechar
        }
    }

    await per()

    teclado.fechar();
}

programa ();