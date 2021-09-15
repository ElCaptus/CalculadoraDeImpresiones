
const dolar = 103

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
    fullcolor:0.34,
    semicolor:0.221,
    textocolor:0.17,
}

const A3Gremio = {
    fullcolor:0.56,
    semicolor:0.365,
    textocolor:0.28,
}

const A3plusGremio = {
    fullcolor:0.6708,
    semicolor:0.43602,
    textocolor:0.3354
}

const impresiones = [
    A4,
    A3,
    A3plus,
    A4Gremio,
    A3Gremio,
    A3plusGremio
]

const precioHojaA3 = {
    chambril:[0,10,15,20,20,30],
    ilustracion:[15,20,20,30,35,50],
    carton:[26.13, 27.13, 26.13],
    autoadhesivo:[53]
}

const precioHojaA3plus = {
    chambril:[0,10,15,20,20,30],
    ilustracion:[15,20,20,30,35,50],
    carton:[26.13, 27.13, 26.13],
    autoadhesivo:[53]
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
        [0,10,10,10,10,10],
        [0,20,20,20,12,12],
        [0,25,25,25,16,16],
        [0,26,26,26,18,18],
        [0,28,28,28,20,20],
        [0,29,29,29,24,24],
        [0,30,30,30,26,26],
        [0,35,35,35,30,28]
    ],
}