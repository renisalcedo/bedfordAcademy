const h1 = document.getElementById('h1')
const button = document.querySelector('.notouch')

button.addEventListener('click', () => {
  hide(h1)
  document.body.style.backgroundColor = "#c0392b"
})

function hide(el) {
  el.style.display = "none"
  console.log("Eliminating EVERYTHING!")
}
