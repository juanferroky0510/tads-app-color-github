// Obtener los elementos
const redSlider = document.getElementById("red");
const greenSlider = document.getElementById("green");
const blueSlider = document.getElementById("blue");

const colorBox = document.getElementById("colorBox");
const rgbText = document.getElementById("rgbText");
const hexText = document.getElementById("hexText");

const rValue = document.getElementById("rValue");
const gValue = document.getElementById("gValue");
const bValue = document.getElementById("bValue");

// Función para convertir a hexadecimal
function toHex(value) {
    let hex = Number(value).toString(16);
    return hex.length === 1 ? "0" + hex : hex;
}

// Función que actualiza el color
function updateColor() {
    let r = clamp(redSlider.value);
    let g = clamp(greenSlider.value);
    let b = clamp(blueSlider.value);

    // Sincronizar inputs numéricos
    redInput.value = r;
    greenInput.value = g;
    blueInput.value = b;

    // Mostrar valores numéricos en los span
    rValue.textContent = r;
    gValue.textContent = g;
    bValue.textContent = b;

    // Cambiar el color del recuadro
    colorBox.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;

    // Mostrar texto RGB
    rgbText.textContent = `RGB(${r}, ${g}, ${b})`;

    // Calcular y mostrar HEX
    let hex = `#${toHex(r)}${toHex(g)}${toHex(b)}`;
    hexText.textContent = hex.toUpperCase();
}


// Eventos
redSlider.addEventListener("input", updateColor);
greenSlider.addEventListener("input", updateColor);
blueSlider.addEventListener("input", updateColor);


// Inputs numéricos
const redInput = document.getElementById("redInput");
const greenInput = document.getElementById("greenInput");
const blueInput = document.getElementById("blueInput");

// Limitar valores entre 0 y 255
function clamp(value) {
    value = parseInt(value);
    if (isNaN(value) || value < 0) return 0;
    if (value > 255) return 255;
    return value;
}

// Eventos cuando se escriba en los inputs
redInput.addEventListener("input", () => {
    redSlider.value = clamp(redInput.value);
    updateColor();
});

greenInput.addEventListener("input", () => {
    greenSlider.value = clamp(greenInput.value);
    updateColor();
});

blueInput.addEventListener("input", () => {
    blueSlider.value = clamp(blueInput.value);
    updateColor();
});
