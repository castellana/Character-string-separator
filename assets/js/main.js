const inputKette = document.getElementById("inputKette")
const trennungsPosition = document.getElementById("trennungsPosition")
const davor = document.getElementById('davor')
const result1 = document.getElementById('result1')
const result2 = document.getElementById('result2')



console.log(inputKette.value);
console.log(trennungsPosition.value);
console.log(davor.value);
console.log(result1.value);
console.log(result2.value);

const trennen = () => {
    console.log("working");

    result1.innerHTML =""  
    result2.innerHTML ="" 
    let position = inputKette.value.indexOf(trennungsPosition.value)
    if (position === -1) {
        result1.innerHTML += "Der gesuchte String ist nicht vorhanden"
    } else {
        if (davor.checked) {
        result1.innerHTML += inputKette.value.slice(0, position)
        result2.innerHTML += inputKette.value.slice(position)
    } else {
        result1.innerHTML += inputKette.value.slice(0, position + trennungsPosition.value.length)
        result2.innerHTML += inputKette.value.slice(position + trennungsPosition.value.length)
    }

}
}



