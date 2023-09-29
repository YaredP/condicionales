const eres = prompt("¿Eres hermoso? si o no");

var respuesta = [
  {
    respuesta1: "si",
  },
  {
    respuesta2: "no",
  },
];

if (eres === respuesta[0].respuesta1) {
  alert("Ciertamente");
} else if (eres === respuesta[1].respuesta2) {
  alert("No te creo");
}

const division = prompt("Es tú número ¿divisible entre 2?. Dame un número");

if (division % 2 == 0) {
  alert(division + " es divisible entre dos");
} else if (division % 2 > 0) {
  alert(division + " no es divisible entre dos");
}

const par = prompt("¿Es un número par?. Dame un número");

if (par % 2 == 0) {
  alert(par + " sí es un número par");
} else if (par % 2 > 0) {
  alert(par + " no es un número par");
}

const ganador = parseInt(
  prompt("¡Veamos si ganaste!. ingresa un número del 1 al 1000")
);

if (ganador === 1000) {
  alert("¡ganaste un premio!");
} else if (ganador < 1000) {
  alert("¡lo sentimos! sigue participando");
} else {
  alert("¡lo sentimos! sigue participando");
}

const menorOne = prompt("¿Cuál es el número menor?. Dame un número");
const menorTwo = prompt("Dame otro número");

if (menorOne < menorTwo) {
  alert(menorOne + " es el número menor");
} else if (menorTwo < menorOne) {
  alert(menorTwo + " es el número menor menor");
}

const mayorOne = prompt("¿Cuál número es mayor?. Dame un número");
const mayorTwo = prompt("Dame otro número");
const mayorThree = prompt("Dame otro número");

if (mayorOne > mayorTwo || mayorOne > mayorThree) {
  alert(mayorOne + " es el número menor mayor");
} else if (mayorTwo > mayorOne || mayorTwo > mayorThree) {
  alert(mayorTwo + " es el número menor mayor");
} else if (mayorThree > mayorOne || mayorThree > mayorTwo) {
  alert(mayorThree + " es el número menor mayor");
} else if (
  mayorThree == mayorOne ||
  mayorThree == mayorTwo ||
  mayorOne == mayorTwo
) {
  alert(mayorThree + " y " + mayorTwo + " son iguales");
}

const semana = prompt("Escribe un día de la semana");

var dias = [
  {
    dia1: "lunes",
    dia2: "martes",
    dia3: "miercoles",
    dia4: "jueves",
    dia5: "viernes",
    dia6: "sabado",
    dia7: "domingo",
  },
];

if (semana === dias[0].dia1) {
  alert("¡Ten un bonito inicio de semana!");
} else if (semana === dias[0].dia2) {
  alert("¡Feliz Martes!");
} else if (semana === dias[0].dia3) {
  alert("¡Hey!. Ya es mitad se semana");
} else if (semana === dias[0].dia4) {
  alert("¡Uff ya es Jueves!");
} else if (semana === dias[0].dia5) {
  alert("¡Al fin es Viernes!");
} else if (semana === dias[0].dia6) {
  alert("¡Diviértete! es fin de semana");
} else if (semana === dias[0].dia7) {
  alert("¿Cuál es el plan hoy?");
}

const digita = parseInt(prompt("Digita una calificación"));

if (digita < 1) {
  alert("digita un múmero mayor ⬆");
} else if (digita > 10) {
  alert("digita un múmero menor ⬇");
} else if (digita < 6) {
  alert("reprobado ❌");
} else if (digita == 6 || digita <= 8) {
  alert("regular 😐");
} else if (digita == 9) {
  alert("bien 😉");
} else if (digita == 10) {
  alert("excelente ✔");
}


let topping = parseInt(
  prompt(
    "¿Qué podemos servirte hoy?" +

      "\n 1. Helado sin topping 50 MXN" +
      "\n 2. Topping de oreo 10 MXN." +
      "\n 3. Topping de KitKat 15 MXN." +
      "\n 4. Topping de brownie 20 MXN."
  )
);
let costoElado = 50;

switch (topping) {
  case 1:
    alert(`EL total del helado es ${costoElado}`);
    break;
  case 2:
    costoElado += 10;
    alert(`El total del helado es ${costoElado}`);
    break;
  case 3:
    costoElado += 15;
    alert(`El total del helado es ${costoElado}`);
    break;
  case 4:
    costoElado += 20;
    alert(`El total del helado es ${costoElado}`);
    break;
  default:
    alert(`El total del helado es ${costoElado}`);
    break;
}

let programa = parseInt(
  prompt(
    "¡Bienvenido!" +
      "\n Elije una opción: " +
      "\n 1. Course: $4999 MXN" +
      "\n 2. Carrera $3999 MXN" +
      "\n 3. Master: $2999 MXN"
  )
);

let beca = parseInt(
  prompt(
    "¿Cuentas con alguna Beca?" +
      "\n Por favor elija una opción: " +
      "\n 1. Beca Facebook" +
      "\n 2. Beca Google" +
      "\n 3. Beca Jesua" +
      "\n 4. No"
  )
);

let descuento = 0;
let tieneBeca = false;

switch (beca) {
  case 1:
    tieneBeca = true;
    descuento = 20;
    break;
  case 2:
    tieneBeca = true;
    descuento = 15;
    break;
  case 3:
    tieneBeca = true;
    descuento = 50;
    break;
    default: 
    tieneBeca = false;
    descuento = 0;
    break;
}

let costoPrograma = 0;
switch (programa) {
  case 1:
    costoPrograma = 4999;
    if (tieneBeca) {
        descuento = (4999 * descuento) / 100;
        costoPrograma -= descuento;
    } 
    alert(`Èl precio mensual del Course es ${costoPrograma}  MXN`);
    break;
  case 2:
    costoPrograma = 3999;
    if (tieneBeca) {
        descuento = (3999 * descuento) / 100;
        costoPrograma -= descuento;
    } 
    alert(`Èl precio mensual de la Carrera es ${costoPrograma}`);
    break;
  case 3:
    costoPrograma = 2999;
    if (tieneBeca) {
        descuento = (2999 * descuento) / 100;
        costoPrograma -= descuento;
    }
    alert(`Èl precio mensual del Master es ${costoPrograma}`);
    break;
  default:
    alert(`Ingrese una opción valida`);
    break;
}

let litros = 0;
let litrosConsumidos
let vehiculos = ["coche", "moto", "autobus"];
let precioKilometro = 0;
let costo = 0;

function obtenerVehiculo(n) {
  if (n < 1 || n > 3) {
    return -1;
  }
  return vehiculos[n - 1];
}

function precioKilometraje(vehiculo, litros) {
  switch (vehiculo) {
    case "coche":
        costo = litros + 0.20;
        alert(`El costo del recorrido es de: ${costo}`);
      break;
    case "moto":
        costo = litros + 0.10;
        alert(`El costo del recorrido es de: ${costo}`);
      break;
    case "autobus":
        costo = litros + 0.5;
        alert(`El costo del recorrido es de: ${costo}`);
      break;

    default:
      break;
  }
}
function litrosCosto(litros) {
  if (litros >= 0 && litros <= 100) {
    return 5;
  } else if (litros > 100) {
    return 10;
  } else {
    return 0;
  }
}

let vehiculo = parseInt(
  prompt(
      "\n Seleccione una opción: " +
      "\n 1. coche" +
      "\n 2. moto" +
      "\n 3. autobus"
  )
);

let v = obtenerVehiculo(vehiculo);

litrosConsumidos = parseInt(
  prompt("¡Litros Consumidos!" 
  + "\n Seleccione una opción: " 
  + "\n \"0 - 100\" ")
);

litros = litrosCosto(litrosConsumidos);

precioKilometraje(v, litros);


