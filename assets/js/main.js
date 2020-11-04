// Für diese Übung brauchen wir ein Formular in dem wir zwei Zeichenketten eingegeben werden können.
// Die erste Zeichenkette soll an der Stelle in zwei Teile getrennt werden, wo die zweite Zeichenkette innerhalb der ersten gefunden wird. Die zweite Zeichenkette kann mehrere Zeichen enthalten.
//Zeichen slice
//js find string in string

//hacemos const porque los ID no se van a cambiar. con const evitamos que se sobreescriban
const inputKette = document.getElementById("inputKette")
const trennungsPosition = document.getElementById("trennungsPosition")
const davor = document.getElementById('davor')
const result1 = document.getElementById('result1')
const result2 = document.getElementById('result2')


//lo primero que hacemos es ver si funciona la función:
// function trennen() => {
//     console.log("working");
// }
console.log(inputKette.value);
console.log(trennungsPosition.value);
console.log(davor.value);
console.log(result1.value);
console.log(result2.value);

const trennen = () => {
    console.log("working");

    result1.innerHTML =""  //para vaciar las frases del caso anterior
    result2.innerHTML ="" //
    let position = inputKette.value.indexOf(trennungsPosition.value)
    if (position === -1) {
        result1.innerHTML = "Der gesuchte String ist nicht vorhanden"
    } else {
        if (davor.checked) {
        result1.innerHTML = inputKette.value.slice(0, position)
        result2.innerHTML = inputKette.value.slice(position)
    } else {
        result1.innerHTML = inputKette.value.slice(0, position + trennungsPosition.value.length)   //aquí cortamos no sólo hasta el final de position, sino hasta la longitud de la palabra que ha introducido la persona (longitud de la palabra en el segundo inputsfield). 
        result2.innerHTML = inputKette.value.slice(position + trennungsPosition.value.length)
    }

}
}



