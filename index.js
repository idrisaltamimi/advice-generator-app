const adviceId = document.getElementById('advice-id')
const adviceQuote = document.getElementById('advice-quote')


document.getElementById("get-advice-btn").addEventListener('click', () => {
    fetch("https://api.adviceslip.com/advice")
        .then(res => res.json())
        .then(data => {
            adviceId.textContent = ` # ${data.slip.id}`
            adviceQuote.textContent = `"${data.slip.advice}"`
            })
})
