const btnEl = document.querySelector('#btn');
const trailerEl = document.querySelector('#trailer');
const bodyEl = document.querySelector('body')

btnEl.addEventListener("mouseover", (e) => {
  let xPos = (e.pageX - btnEl.offsetLeft);
  let yPos = (e.pageY - btnEl.offsetTop);

  btnEl.style.setProperty("--xPos", `${xPos}px`)
  btnEl.style.setProperty("--yPos", `${yPos}px`)
})

bodyEl.addEventListener("click", (e) => {
  let event = e.target
  if(event === bodyEl) return reloadTrailer(trailerEl);
})

btnEl.addEventListener("click", () => {
  playTrailer(trailerEl);
})

function playTrailer(element) {
  element.play();
  element.style.visibility = "visible"
  element.style.width = "85vw"
  element.style.height = "85vh"
  element.style.zIndex = "10"
  element.classList.add('fade-in');
}

function reloadTrailer(element) {
  element.pause();
  element.currentTime = 0;
  element.style.visibility = "hidden"
}