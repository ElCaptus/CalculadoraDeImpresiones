
const dolar = 104.25

const A4 = {
    fullcolor:0.516,
    semicolor:0.3354,
    textocolor:0.258,
}

const A3 = {
    fullcolor:0.86,
    semicolor:0.559,
    textocolor:0.43,
}

const A3plus = {
    fullcolor:1.032,
    semicolor:0.6708,
    textocolor:0.516
}

const A4Gremio = {
    fullcolor:0.31,
    semicolor:0.191,
    textocolor:0.15,
}

const A3Gremio = {
    fullcolor:0.52,
    semicolor:0.335,
    textocolor:0.26,
}

const A3plusGremio = {
    fullcolor:0.6308,
    semicolor:0.39602,
    textocolor:0.3154
}

const impresiones = [
    A4,
    A3,
    A3plus,
    A4Gremio,
    A3Gremio,
    A3plusGremio
]
 //Precios A3 hojas. 
const precioHojaA3 = {
    chambril:[0,10,15,28,32,40],
    ilustracion:[12,17,19,26,32,40],
    carton:[30, 35, 30],
    autoadhesivo:[45 , 45]
    
}
 //Precios A3 plus hojas. 
const precioHojaA3plus = {
    chambril:[0,10,15,20,20,30],
    ilustracion:[30,30,30,40,40,50],
    carton:[30, 35, 30], //tiene un aumento del 15% por el grosor
    autoadhesivo:[42 , 60],

}

//decuentos.cantidadImpresion[0,1] -> 0 = 1 a 10 cantidad       1 = 90g gramaje
const descuentos = {
    cantidadImpresion:[
        [0,0,0,0,0,0],
        [12,12,10,10,9,7],
        [17,17,15,15,14,10],
        [27,27,25,25,24,20],
        [37,37,35,35,34,28],
        [42,42,40,40,39,33],
        [47,47,45,45,44,39],
        [53,53,50,50,49,42],
        [60,60,60,60,60,50]
    ],
    cantidadHojas:[
        [0,0,0,0,0,0],
        [10,10,10,10,10,10],
        [20,20,20,20,12,12],
        [25,25,25,25,16,16],
        [26,26,26,26,18,18],
        [28,28,28,28,20,20],
        [29,29,29,29,24,24],
        [32,32,32,32,26,26],
        [35,35,35,35,30,28]
    ],
}