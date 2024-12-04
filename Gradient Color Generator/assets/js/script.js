const gradientBox = document.querySelector(".gradient-box");
const selectMenu = document.querySelector(".select-box select");
const colorInputs = document.querySelectorAll(".colors input");
const textarea = document.querySelector("textarea");
const refreshBtn = document.querySelector(".refresh");
const copyBtn = document.querySelector(".copy");

const getRandomColor = () => {
    // Genera un color aleatorio en formato hexadecimal. Ejemplo: #5665E9
    const randomHex = Math.floor(Math.random() * 0xffffff).toString(16);
    return `#${randomHex}`;
}

const generateGradient = (isRandom) => {
    if (isRandom) { 
        // Si isRandom es verdadero, actualiza los valores de los inputs de color con colores aleatorios
        colorInputs[0].value = getRandomColor();
        colorInputs[1].value = getRandomColor();
    }
    // Crea una cadena de gradiente usando el valor del menú select con los valores de los inputs de color
    const gradient = `linear-gradient(${selectMenu.value}, ${colorInputs[0].value}, ${colorInputs[1].value})`;
    gradientBox.style.background = gradient;
    textarea.value = `background: ${gradient};`;
}

const copyCode = () => {
    // Copia el valor del textarea y actualiza el texto del botón de copiar
    navigator.clipboard.writeText(textarea.value);
    copyBtn.innerText = "Código copiado";
    setTimeout(() => copyBtn.innerText = "Copiar código", 1600);
}

colorInputs.forEach(input => {
    // Llama a la función generateGradient cuando se hace clic en cada input de color
    input.addEventListener("input", () => generateGradient(false));
});

selectMenu.addEventListener("change", () => generateGradient(false));
refreshBtn.addEventListener("click", () => generateGradient(true));
copyBtn.addEventListener("click", copyCode);