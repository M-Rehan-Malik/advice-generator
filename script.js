
const button = document.querySelector('.button')
button.onclick = btnClick

const adviceOutput = document.getElementById('advice')
const adviceNumberOutput = document.getElementById('advice-number-span')

async function generateAdvice() {
    const advice1 = await fetch('https://api.adviceslip.com/advice')
    const json = await advice1.json()
    return json.slip
}

async function btnClick() {
    const advice = await generateAdvice();
    adviceOutput.textContent = advice.advice
    adviceNumberOutput.textContent = advice.id

}