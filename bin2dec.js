const teclado = require('./teclado.js');

const programa = async () => {

  // DUPLA: IGOR E YURY

    let bin = await teclado.perguntar(`Qual número binario?
    -> `)
    let dec = bin2dec(bin)
    console.log(+ bin + " em decimal é " + dec)

    function bin2dec(bin){
        
        let dec = 0
        let i = 0
        let resto
        
        while (bin != 0) {
          resto = bin % 10
          bin = parseInt(bin / 10)
          dec = dec + resto * Math.pow(2, i)
          ++i
        }
        
        return dec
      }
       


    teclado.fechar()
}

programa ();