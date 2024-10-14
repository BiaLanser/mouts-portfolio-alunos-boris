const phrases = ["Programmer", "Analyst", "Full Stack Developer"];
let i = 0;
let j = 0;
const typewriterElement = document.getElementById("typewriter");

function type() {
  if (i < phrases.length) {
    if (j < phrases[i].length) {
      typewriterElement.innerHTML += phrases[i].charAt(j);
      j++;
      setTimeout(type, 100);
    } else {
      setTimeout(deleteText, 2000);
    }
  }
}

function deleteText() {
  if (j > 0) {
    typewriterElement.innerHTML = phrases[i].substring(0, j - 1);
    j--;
    setTimeout(deleteText, 50);
  } else {
    i++;
    if (i < phrases.length) {
      setTimeout(type, 500);
    } else {
      return;
    }
  }
}

document.addEventListener('DOMContentLoaded', () => {
  type();
});
