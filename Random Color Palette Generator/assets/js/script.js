const container = document.querySelector(".container"); 
const refreshBtn = document.querySelector(".refresh-btn");
const maxPaletteBoxes = 32;

const generatePalette = () => {
    container.innerHTML = ""; // Limpiando el contenedor
    for (let i = 0; i < maxPaletteBoxes; i++) {
        // Generando un código de color hexadecimal aleatorio
        let randomHex = Math.floor(Math.random() * 0xffffff).toString(16);
        randomHex = `#${randomHex.padStart(6, "0")}`;
        
        // Creando un nuevo elemento 'li' e insertándolo en el contenedor
        const color = document.createElement("li");
        color.classList.add("color");
        color.innerHTML = `<div class="rect-box" style="background: ${randomHex}"></div>
                           <span class="hex-value">${randomHex}</span>`;
        // Agregando un evento de clic al elemento 'li' actual para copiar el color
        color.addEventListener("click", () => copyColor(color, randomHex));
        container.appendChild(color);
    }
}

generatePalette();

const copyColor = (elem, hexVal) => {
    const colorElement = elem.querySelector(".hex-value");
    // Copiar el valor hexadecimal, actualizar el texto a "Copiado",
    // y volver a cambiar el texto al valor hexadecimal original después de 1 segundo
    navigator.clipboard.writeText(hexVal).then(() => {
        colorElement.innerText = "Copiado";
        setTimeout(() => colorElement.innerText = hexVal, 1000);
    }).catch(() => alert("¡No se pudo copiar el código de color!")); // Mostrar alerta si el color no se puede copiar
}

refreshBtn.addEventListener("click", generatePalette);