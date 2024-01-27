document.querySelector(".icon").addEventListener('click', () =>{
    getRandomAdvice()
})

async function getRandomAdvice(){
    const adviceUrl = await fetch("https://api.adviceslip.com/advice")
    const contentAdvice = await adviceUrl.json()
    const adviceId = contentAdvice.slip.id
    const advice = contentAdvice.slip.advice
    document.querySelector('.advice-dice').innerHTML = `ADVICE#${adviceId}`
    document.querySelector('.advice-text').innerHTML = `"${advice}"`
}

