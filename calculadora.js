const cantDescuento = [10,50,100,200,300,400,500,1000]
function calcular() {
    const tamanio = Number(document.getElementById('tamanioHoja').value)
    const cantidad = Number(document.getElementById('cantidadHojas').value)
    const tipoPapel = document.getElementById('tipoPapel').value
    const gramaje = Number(document.getElementById('gramaje').value)
    const tipoImpresion = document.getElementById('tipoImpresion').value
    const gremio = document.getElementById('gremio').checked
    const dobleFaz = document.getElementById('dobleFaz').checked
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
        tipoImpresionB = document.getElementById('tipoImpresionB').value
        if (tipoImpresionB === tipoImpresion){
            precioPorImpresionB = precioPorImpresion
            resultado+= precioPorImpresion*cantidad
        }else{
            precioPorImpresionB = impresiones[tamanioReal][tipoImpresionB] * dolar
            const porcentajeDescuentoImpresionB = descuentos.cantidadImpresion[posCantidadDescuento][gramaje]
            precioPorImpresionB = precioPorImpresionB - valorDescuento(precioPorImpresionB,porcentajeDescuentoImpresionB)
            resultado += precioPorImpresionB*cantidad
        }
    }
    const elems = document.createElement('p').innerHTML = `
    El precio de cada hoja es: $${precioPorHoja} </br>
    El precio por impresion es: $${precioPorImpresion}</br>
    ${dobleFaz?'El precio por impresion Lado B es: $' + precioPorImpresionB:''}
    `
    document.getElementById('detalle').innerHTML = elems
    document.getElementById('result').innerText = Math.round(resultado)

}


function valorDescuento(number,percent){
    return ((percent) * (number)) / 100
}


function dobleFazChanged(){
    const elem = document.getElementById('dobleFazContainer')
    const checked = document.getElementById('dobleFaz').checked
    if(checked){
        elem.innerHTML = `
        <div>
            <p>Lado B:</p>
            <select name="tipoImpresion" id='tipoImpresionB'>
                <option value="fullcolor" selected>Full Color</option>
                <option value="semicolor">Semi Color</option>
                <option value="textocolor">Texto Color</option>
            </select>
        </div>
        <div>
            <p>Doble Faz:</p>
            <input type="checkbox" checked id='dobleFaz' onchange="dobleFazChanged()">
        </div>`
    }else{
        elem.innerHTML = `<p>Doble Faz:</p>
        <input type="checkbox" id='dobleFaz' onchange="dobleFazChanged()">`
    }

}

function tipoPapelChange(){
    const elem = document.getElementById('gramaje')
    const tipoPapel = document.getElementById('tipoPapel').value
    if(tipoPapel === 'carton'){
        elem.innerHTML = ` <select name='gramaje' id='gramaje'>
                <option value='0' selected>TRIPLEX CMPC  255</option>
                <option value="1">TRIPLEX ZENIT 270</option>
                <option value="2">DUPLEX REVERSO CAFÉ 255</option>
            </select>`
    }else if(tipoPapel === 'autoadhesivo'){
        elem.innerHTML = `<select name="gramaje" id='gramaje'>
            <option value="0" selected>160g</option>
        </select>/`
    }
    else{
        elem.innerHTML = `<select name="gramaje" id='gramaje'>
            <option value="0" selected>90g o menos</option>
            <option value="1">115g a 135g</option>
            <option value="2">140g a 160g</option>
            <option value="3">180g a 200g</option>
            <option value="4">210g a 250g</option>
            <option value="5">Mas de 250g</option>
        </select>`
    }
}

