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


function saveButton(){

    if(actualOrder.sum){
        document.getElementById('textototal').hidden = false
        arrayOrders.push(actualOrder)
    
        const infoOrder = document.createElement('p')
        infoOrder.innerHTML = `${actualOrder.sum} </br> $${actualOrder.subtotal}`
        const newOrder = document.createElement('li')
        newOrder.innerHTML = infoOrder.innerHTML
        totalCost += actualOrder.subtotal
        document.getElementById('list').appendChild(newOrder)
        document.getElementById('total').innerText = totalCost
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