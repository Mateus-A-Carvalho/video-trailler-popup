const btnEl = document.querySelector('#btn');
const trailerEl = document.querySelector('#trailer');

btnEl.addEventListener("mouseover", (e) => {
  let xPos = (e.pageX - btnEl.offsetLeft);
  let yPos = (e.pageY - btnEl.offsetTop);

  btnEl.style.setProperty("--xPos", `${xPos}px`)
  btnEl.style.setProperty("--yPos", `${yPos}px`)
})

btnEl.addEventListener("click", () => {
  play(trailerEl);
})

function play(element) {
  element.play();
  element.style.visibility = "visible"
  element.style.width = "90vw"
  element.style.height = "90vw"
  element.style.zIndex = "10"
}
