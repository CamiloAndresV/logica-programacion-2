//* Funcion para convertir de Celcius a Fahrenheit y Kelvin *\\

const btnConvert = document.getElementById("convert")
const result = document.getElementById("resultado")

function convertCelcius() {
    result.innerHTML = ""
    const input = Number(document.getElementById("input").value)
    if (!input) {
        alert("Por favor ingrese un número válido")
        return
    }

    const fahrenheit = document.createElement("p")
    fahrenheit.className = "fahrenheit"
    let calcularF = (input * 1.8) + 32
    fahrenheit.textContent = `${input}°C es igual a: ${calcularF}°F`
    result.appendChild(fahrenheit)

    const Kelvin = document.createElement("p")
    Kelvin.className = "fahrenheit"
    let calcularK = input + 273.15
    Kelvin.textContent = `${input}°C es igual a: ${calcularK}°K`
    result.appendChild(Kelvin)
}

btnConvert.addEventListener("click", convertCelcius);

// proximamente mejoras en la funcion de conversion, crear un boton de historial y limpiar y tambien 2 funciones mas.


// convertCelcius()

// let fahrenheit = (celcius * 1.8) + 32

// console.log(`${celcius}°C is equal to ${fahrenheit}°F`)

// let Kelvin = celcius + 273.15

// console.log(`${celcius}°C is equal to ${Kelvin}K`)