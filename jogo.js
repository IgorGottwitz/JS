const teclado = require('./teclado.js');

let C1 = ' '
let C2 = ' '
let C3 = ' '
let C4 = ' '
let C5 = ' '
let C6 = ' '
let C7 = ' '
let C8 = ' '
let C9 = ' '
let jogador = 'X';


const continuar = () => {


    if (C1 == C2 && C2 == C3 && C3 == 'X'){
        console.log('O vencedor foi o jogador X');
        return false;
    }
    if (C4 == C5 && C5 == C6 && C6 == 'X'){
        console.log('O vencedor foi o jogador X');
        return false;
    }
    if (C7 == C8 && C8 == C9 && C9 == 'X'){
        console.log('O vencedor foi o jogador X');
        return false;
    }
    if (C1 == C4 && C4 == C7 && C7 == 'X'){
        console.log('O vencedor foi o jogador X');
        return false;
    }
    if (C2 == C5 && C5 == C8 && C8 == 'X'){
        console.log('O vencedor foi o jogador X');
        return false;
    }
    if (C3 == C6 && C6 == C9 && C9 == 'X'){
        console.log('O vencedor foi o jogador X');
        return false;
    }
    if (C1 == C5 && C5 == C9 && C9 == 'X'){
        console.log('O vencedor foi o jogador X');
        return false;
    }
    if (C3 == C5 && C5 == C7 && C7 == 'X'){
        console.log('O vencedor foi o jogador X');
        return false;
    }
    // -------------------------------------------

    if (C1 == C2 && C2 == C3 && C3 == 'O'){
        console.log('O vencedor foi o jogador O');
        return false;
    }
    if (C4 == C5 && C5 == C6 && C6 == 'O'){
        console.log('O vencedor foi o jogador O');
        return false;
    }
    if (C7 == C8 && C8 == C9 && C9 == 'O'){
        console.log('O vencedor foi o jogador O');
        return false;
    }
    if (C1 == C4 && C4 == C7 && C7 == 'O'){
        console.log('O vencedor foi o jogador O');
        return false;
    }
    if (C2 == C5 && C5 == C8 && C8 == 'O'){
        console.log('O vencedor foi o jogador O');
        return false;
    }
    if (C3 == C6 && C6 == C9 && C9 == 'O'){
        console.log('O vencedor foi o jogador O');
        return false;
    }
    if (C1 == C5 && C5 == C9 && C9 == 'O'){
        console.log('O vencedor foi o jogador O');
        return false;
    }
    if (C3 == C5 && C5 == C7 && C7 == 'O'){
        console.log('O vencedor foi o jogador O');
        return false;
    }

    //------------------------------------------------

    empate()
    return true;
}

const empate = () => {
    if (typeof C1 && C2 && C3 && C4 && C5 && C6 && C7 && C8 && C9 == ' '){
        return true
    }else{
        console.log('Empate')
        return false
    }
}

const imprimir = () => {
    console.log('-------');
    console.log('|' + C1 + '|' + C2 + '|' + C3 + '|');
    console.log('-------');    
    console.log('|' + C4 + '|' + C5 + '|' + C6 + '|');
    console.log('-------');    
    console.log('|' + C7 + '|' + C8 + '|' + C9 + '|');        
    console.log('-------'); 
}

const ler = async () => {
    
    while (continuar()){
        imprimir();
        console.log('O jogador atual é: ' + jogador);
        const opcao = await teclado.perguntar('Qual casa você deseja?');

        // Verificando se a resposta for maior do que o permitido
        //----------------------------------------------------
        if (opcao < 1 || opcao > 9){
            console.log('Opção inválida. Você  deve escolher entre 1 e 9');
            continue;
        }
        //----------------------------------------------------        


        // Verificando se as casas estão ocupadas
        //----------------------------------------------------        
        if (opcao == 1 && C1 != ' '){
            console.log('Opção inválida');
            continue;
        }

        if (opcao == 2 && C2 != ' '){
            console.log('Opção inválida');
            continue;
        }        

        if (opcao == 3 && C3 != ' '){
            console.log('Opção inválida');
            continue;
        }

        if (opcao == 4 && C4 != ' '){
            console.log('Opção inválida');
            continue;
        }        
        if (opcao == 5 && C5 != ' '){
            console.log('Opção inválida');
            continue;
        }

        if (opcao == 6 && C6 != ' '){
            console.log('Opção inválida');
            continue;
        }        
        if (opcao == 7 && C7 != ' '){
            console.log('Opção inválida');
            continue;
        }

        if (opcao == 8 && C8 != ' '){
            console.log('Opção inválida');
            continue;
        }        
        if (opcao == 9 && C9 != ' '){
            console.log('Opção inválida');
            continue;
        }


        //----------------------------------------------------                



        // Atribuindo valor as casas
        //----------------------------------------------------                
        if (opcao == 1){
            C1 = jogador;
        }

        if (opcao == 2){
            C2  = jogador;
        }

        if (opcao == 3){
            C3 = jogador;
        }

        if (opcao == 4){
            C4  = jogador;
        }

        if (opcao == 5){
            C5 = jogador;
        }

        if (opcao == 6){
            C6  = jogador;
        }

        if (opcao == 7){
            C7 = jogador;
        }

        if (opcao == 8){
            C8  = jogador;
        }

        if (opcao == 9){
            C9  = jogador;
        }

        //----------------------------------------------------                

        if (jogador == 'X'){
            jogador = 'O';
        } else {
            jogador = 'X';
        }

        imprimir();

    }
}

const programa = async () => {
    await ler();
    teclado.fechar();
}

programa();