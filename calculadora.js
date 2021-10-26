
const arrayOrders = []

const actualOrder = {}
let totalCost = 0


const cantDescuento = [10,50,100,200,300,400,500,1000]

function calcularPedido({tamanio,cantidad,tipoPapel,gramaje,tipoImpresion,gremio,dobleFaz,tipoImpresionB}) {

    let resultado = 0
    let precioPorHoja = 0
    let precioPorImpresion = 0
    let posCantidadDescuento = 0


    cantDescuento.forEach((cantCopias,index) => {
        if(cantidad >= cantCopias){
            posCantidadDescuento = index+1
        }
    });

    // if (cantidad < 10){
    //     posCantidadDescuento = 0
    // }else if(cantidad < 50){
    //     posCantidadDescuento = 1
    // }else if(cantidad < 100){
    //     posCantidadDescuento = 2
    // }else if(cantidad < 200){
    //     posCantidadDescuento = 3
    // }else if(cantidad < 300){
    //     posCantidadDescuento = 4
    // }else if(cantidad < 400){
    //     posCantidadDescuento = 5
    // }else if(cantidad < 500){
    //     posCantidadDescuento = 6
    // }else if(cantidad < 1000){
    //     posCantidadDescuento = 7
    // }else{
    //     posCantidadDescuento = 8
    // }

    switch (tamanio) {
        case 0:
            precioPorHoja = precioHojaA3[tipoPapel][gramaje] / 2
            break;
        case 1:
            precioPorHoja = precioHojaA3[tipoPapel][gramaje]
            break
        case 2:
            precioPorHoja = precioHojaA3plus[tipoPapel][gramaje]
            break
        default:
            precioPorHoja = 0
            break;
    }

    let tamanioReal = tamanio
    if(gremio){
        tamanioReal+=3
        if (posCantidadDescuento > 6){
            posCantidadDescuento = 6
        }
    }
    
    precioPorImpresion = impresiones[tamanioReal][tipoImpresion] * dolar
    
    const porcentajeDescuentoHojas = descuentos.cantidadHojas[posCantidadDescuento][gramaje]
    const porcentajeDescuentoImpresion = descuentos.cantidadImpresion[posCantidadDescuento][gramaje]
    precioPorHoja = precioPorHoja - valorDescuento(precioPorHoja,porcentajeDescuentoHojas)
    precioPorImpresion = precioPorImpresion - valorDescuento(precioPorImpresion,porcentajeDescuentoImpresion)
    
    resultado = precioPorHoja * cantidad + precioPorImpresion * cantidad
    let precioPorImpresionB
    if(dobleFaz){
        if (tipoImpresionB === tipoImpresion){
            precioPorImpresionB = precioPorImpresion
            resultado+= precioPorImpresion*cantidad
        }else{
            precioPorImpresionB = impresiones[tamanioReal][tipoImpresionB] * dolar
            const porcentajeDescuentoImpresionB = descuentos.cantidadImpresion[posCantidadDescuento][gramaje]
            precioPorImpresionB = precioPorImpresionB - valorDescuento(precioPorImpresionB,porcentajeDescuentoImpresionB)
            resultado += precioPorImpresionB*cantidad
        }
        precioPorImpresionB = Math.round(precioPorImpresionB)
    }


    precioPorHoja = Math.round(precioPorHoja)
    precioPorImpresion = Math.round(precioPorImpresion)
    resultado = Math.round(resultado)

    const detalle = `
    El precio de cada hoja es $${precioPorHoja} </br>
    El precio por impresion es $${precioPorImpresion}</br>
    ${dobleFaz?'El precio por impresion Lado B es $' + precioPorImpresionB:''}
    `


    actualOrder.detalleHTML = detalle
    actualOrder.subtotal = resultado

  


actualOrder.sum = `<p><div class="juntis"><strong style="margin-right: 8px">${cantidad}</strong>  ${tipoPapel} | ${tipoImpresion} <div class="cuadradito"><strong>${actualOrder.subtotal}</strong></div></div></p>`
    actualOrder.precioPorHoja = precioPorHoja
    actualOrder.precioPorImpresion = precioPorImpresion
    actualOrder.precioPorImpresionB = precioPorImpresionB

    return actualOrder
}


function valorDescuento(number,percent){
    return ((percent) * (number)) / 100
}

