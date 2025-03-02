// Tu desafío de hoy es crear los destinos posibles de un juego, en el que el usuario pueda elegir:
const areaDeDesarrollo = parseInt(prompt("¿Te gustaria desarrollarte en \n1. Front-End \n2. Back-End?"))

let framework;
let especializacion;

// Si quiere seguir hacia el área de Front-End o seguir hacia el área de Back-End.
if (areaDeDesarrollo !== 1 && areaDeDesarrollo !== 2) {
    alert("Respuesta no válida. Debes elegir 1 para Front-End o 2 para Back-End.");

// Si está en el área de Front-End, si quiere aprender React o aprender Vue. Si está en el área de Back-End, podrá aprender C# o aprender Java.
} else if (areaDeDesarrollo === 1) {
    const eleccionFramework = parseInt(prompt("¿Te gustaria aprender \n1. React o \n2. Vue?"));
    if (eleccionFramework === 1) {
        framework = "React";
    } else if (eleccionFramework === 2) {
        framework = "Vue";
    }
} else if (areaDeDesarrollo === 2) {
    const eleccionFramework = parseInt(prompt("¿Te gustaria aprender \n1. C# o \n2. Java?"));
    if (eleccionFramework === 1) {
        framework = "C#";
    } else if (eleccionFramework === 2) {
        framework = "Java";
    }
}
alert(`Elegiste aprender ${areaDeDesarrollo === 1 ? "Front-End" : "Back-End"} con ${framework}.`);

// Después, independientemente de las elecciones anteriores, el usuario podrá elegir entre seguir especializándose en el área elegida
// o desarrollarse para convertirse en Fullstack.
// Debes mostrar en pantalla un mensaje específico para cada elección.
if (areaDeDesarrollo === 1) {
    especializacion = parseInt(prompt("En que te gustaria especializarte? \n1. Front-End \n2. Full-Stack"))
        alert(`Elegiste especializarte en ${especializacion === 1? "Front-End" : "Full-Stack"}`)
} else if (areaDeDesarrollo === 2) {
    especializacion = parseInt(prompt("En que te gustaria especializarte? \n1. Back-End \n2. Full-Stack"))
        alert(`Elegiste especializarte en ${especializacion === 1? "Back-End" : "Full-Stack"}`)
    }


// Finalmente, pregunta en qué tecnologías le gustaría a la persona especializarse o conocer.
// Aquí, la persona puede responder N tecnologías, una a la vez.
// Entonces, mientras continúe respondiendo **ok** a la pregunta: "¿Hay alguna otra tecnología que te gustaría aprender?",
// sigue presentando el Prompt, para que complete el nombre de la tecnología en cuestión.
// Y, justo después, presenta un mensaje comentando algo sobre la tecnología ingresada.
const aprenderTecnologias = [];
let continuar = true;

while (continuar) {
    const tecnologia = prompt("¿Hay alguna otra tecnología que te gustaría aprender?");
    aprenderTecnologias.push(tecnologia);
    const agregarTecnologia = parseInt(prompt("¿Te gustaria aprender otra teconologia? \n1. Si \n2. No"));
    if (agregarTecnologia === 2) {
        continuar = false;
    }
}
if (aprenderTecnologias.length > 0) {
    alert(`Deseas aprender las siguientes tecnologias: ${aprenderTecnologias.join(", ")}`)
} else {
    alert("No has elegido ninguna tecnologia")
}


 

// Lo importante es que la persona que esté jugando siempre pueda elegir qué decisión tomar para aprender
// y desarrollarse en el área de programación.

 

// Además, también es esencial que, al final del juego, pueda ingresar tantas tecnologías como desee en la lista de aprendizaje.