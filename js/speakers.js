const btnToggleSpeakersView = document.getElementById('btnToggleSpeakersView');
const textToggleSpeakersView = document.getElementById('textToggleSpeakersView');
const iconToggleSpeakersView = document.getElementById('iconToggleSpeakersView');
const speakers = document.querySelector('.speakers');
btnToggleSpeakersView.addEventListener('click', () => {
  const currentText = textToggleSpeakersView.textContent.trim().toLowerCase();
  const speakersAmount = speakers.children.length;
  if (currentText === 'more') {
    textToggleSpeakersView.textContent = 'less';
    iconToggleSpeakersView.classList.add('rotate-180');
    for (let i = 0; i < speakers.children.length; i += 1) {
      speakers.children[i].classList.remove('hide');
    }
  } else {
    textToggleSpeakersView.textContent = 'more';
    iconToggleSpeakersView.classList.remove('rotate-180');
    /* last two speakers */
    for (let i = 1; i <= 2; i += 1) {
      speakers.children[speakersAmount - i].classList.add('hide');
    }
  }
});