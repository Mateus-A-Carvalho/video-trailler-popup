const btnEl = document.querySelector('#btn');

btnEl.addEventListener("mouseover", (e) => {
  let xPos = (e.pageX - btnEl.offsetLeft);
  let yPos = (e.pageY - btnEl.offsetTop);

  btnEl.style.setProperty("--xPos", `${xPos}px`)
  btnEl.style.setProperty("--yPos", `${yPos}px`)
})