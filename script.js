const spacingSlider = document.getElementById("spacing")
const blurSlider = document.getElementById("blur")
const colorPicker = document.getElementById("base")

function onChange() {
    if (this.name !== "base") document.documentElement.style.setProperty(`--${this.name}`, this.value + 'px');
    else document.documentElement.style.setProperty(`--${this.name}`, this.value);
}

spacingSlider.addEventListener("change", onChange)
spacingSlider.addEventListener("mousemove", onChange)

blurSlider.addEventListener("change", onChange)
blurSlider.addEventListener("mousemove", onChange)

colorPicker.addEventListener("change", onChange)
colorPicker.addEventListener("mousemove", onChange)