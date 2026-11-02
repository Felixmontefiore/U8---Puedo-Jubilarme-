let genero = prompt("¿Cuál es tu género? (Femenino/Masculino)")
let edad = prompt("¿Cuál es tu edad?")

if ((genero === "Femenino" && edad >= 60) || (genero === "Masculino" && edad >= 65)) {
  alert("Ya podés jubilarte.")
} else {
  alert("Todavía no podés jubilarte.")
}
