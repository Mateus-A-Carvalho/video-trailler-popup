const btnEl = document.querySelector('#btn');
const trailerEl = document.querySelector('#trailer');
const bodyEl = document.querySelector('body');
const closeTrailerEl = document.querySelector('#close-btn');

// Ripple Button Effect Function
btnEl.addEventListener("mouseover", (e) => {
  let xPos = (e.pageX - btnEl.offsetLeft);
  let yPos = (e.pageY - btnEl.offsetTop);

  btnEl.style.setProperty("--xPos", `${xPos}px`)
  btnEl.style.setProperty("--yPos", `${yPos}px`)
})

// Close clicking in somewhere of body 
bodyEl.addEventListener("click", (e) => {
  let event = e.target
  if(event === bodyEl || event === closeTrailerEl) return reloadTrailer(trailerEl, closeTrailerEl);
})

// Play video event trigger
btnEl.addEventListener("click", () => {
  playTrailer(trailerEl, closeTrailerEl);
})

// Play video function
function playTrailer(element, closeBtn) {
  element.play();
  element.style.visibility = "visible"
  closeBtn.style.visibility = "visible"
  element.style.width = "85vw"
  element.style.height = "85vh"
  element.style.zIndex = "10"
  element.classList.add('fade-in');
  closeBtn.classList.add('fade-in');
}

// Stop video function
function reloadTrailer(element, closeBtn) {
  element.pause();
  element.currentTime = 0;
  element.style.visibility = "hidden"
  closeBtn.style.visibility = "hidden"
}