function calcular(){
    const tamanio = Number(document.getElementById('tamanioHoja').value)
    const cantidad = Number(document.getElementById('cantidadHojas').value)
    const tipoPapel = document.getElementById('tipoPapel').value
    const gramaje = Number(document.getElementById('gramaje').value)
    const tipoImpresion = document.getElementById('tipoImpresion').value
    const gremio = document.getElementById('gremio').checked
    const dobleFaz = document.getElementById('dobleFaz').checked
    let tipoImpresionB = document.getElementById('tipoImpresionB')
    if(tipoImpresionB != null){
        tipoImpresionB = tipoImpresionB.value
    }
    const orden = calcularPedido({tamanio,cantidad,tipoPapel,gramaje,tipoImpresion,gremio,dobleFaz,tipoImpresionB})

    const elems = document.createElement('p')
    elems.innerHTML = orden.detalleHTML

    document.getElementById('detalle').innerHTML = elems.innerHTML
    document.getElementById('result').innerText = orden.subtotal
}

function dobleFazChanged(){
    const elem = document.getElementById('dobleFazContainer')
    const checked = document.getElementById('dobleFaz').checked
    if(checked){
        elem.innerHTML = `
        
            
            <input type="checkbox" checked id='dobleFaz' onchange="dobleFazChanged()">
       
           
            <select name="tipoImpresion" id='tipoImpresionB'>
                <option disabled >doble faz</option>
                <option selected value="fullcolor" >Full Color</option>
                <option value="semicolor">Semi Color</option>
                <option value="textocolor">Texto Color</option>
            </select>
        
        `
    }else{
        elem.innerHTML = `<div class="juntisti"><p class="otro">doble faz</p>
        <input type="checkbox" id='dobleFaz' onchange="dobleFazChanged()">
        </div>`}

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
            <option value="0" selected>PAPEL MATE</option>
            <option value="1" selected>BRILLANTE</option>
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


function saveButton(){

    if(actualOrder.sum){
        document.getElementById('textototal').hidden = false
        arrayOrders.push(actualOrder)
    
        const infoOrder = document.createElement('p')
        infoOrder.innerHTML = `${actualOrder.sum} <div class="grisesito"><p>impresión $${actualOrder.precioPorImpresion}<br/> <p>lado B $${actualOrder.precioPorImpresionB}<br/> <p>hoja $${actualOrder.precioPorHoja}</div></br>`
        const newOrder = document.createElement('li')
        newOrder.innerHTML = infoOrder.innerHTML
        totalCost += actualOrder.subtotal
        document.getElementById('list').appendChild(newOrder)
        document.getElementById('total').innerHTML = `<p class="resaltado">${totalCost}</p>`
    }
}


function clearButton(){
    document.getElementById('textototal').hidden = true
    for (let i = 0; i < arrayOrders.length; i++) {
        arrayOrders.pop()
    }
    totalCost = 0
    document.getElementById('list').innerHTML = ``
}