const speakersArr = [
  {
    hideInMobile: false,
    img: {
      src: './img/speakers/antonio-sarosi.png',
      alt: 'Speaker Antonio Sarosi Profile Picture',
    },
    name: 'Antonio Sarosi',
    education: 'Computer Science Engineer Specialized in Linux OS',
    description: 'Software developer and content creator specialized in Linux distributions and ethical hacking.',
  },
  {
    hideInMobile: false,
    img: {
      src: './img/speakers/miguel-angel.png',
      alt: 'Speaker Miguel Angel Duran Profile Picture',
    },
    name: 'Miguel Ángel Durán',
    education: 'Software Engineer / Full Stack JavaScript Web Developer',
    description: 'A full stack web developer with more than 15 years of experience. GDE (Google Developer Expert) and GS (Github Star)',
  },
  {
    hideInMobile: true,
    img: {
      src: './img/speakers/nate-gentile.png',
      alt: 'Speaker Nate Gentile Profile Picture',
    },
    name: 'Nate Gentile',
    education: 'Informatic Engineer / Python Software Developer',
    description: 'Informatic Engineer specialized in python software development and computers technical support.',
  },
  {
    hideInMobile: true,
    img: {
      src: './img/speakers/lucas-dalto.png',
      alt: 'Speaker Lucas Dalto Profile Picture',
    },
    name: 'Lucas Dalto',
    education: 'Science and Technology EduTuber and Programmer',
    description: 'Programming and software development content creator, growth hacker, full stack web developer and more.',
  },
];

const createSpeakerHtml = (speaker) => {
  const speakerCnt = document.createElement('div');
  speakerCnt.className = `speaker ${speaker.hideInMobile ? 'hide' : ''}`;
  speakerCnt.innerHTML = `
    <figure>
        <img class="speaker__image" src="${speaker.img.src}" alt="${speaker.img.alt}">
    </figure>
    <div>
        <h3 class="speaker__name">${speaker.name}</h3>
        <p class="speaker__education">${speaker.education}</p>
        <hr class="speaker__divisor">
        <p class="speaker__description">${speaker.description}</p>
    </div>
  `;
  return speakerCnt;
};

const speakersFragment = document.createDocumentFragment();
speakersArr.forEach((speaker) => {
  speakersFragment.appendChild(createSpeakerHtml(speaker));
});

const btnToggleSpeakersView = document.getElementById('btnToggleSpeakersView');
const textToggleSpeakersView = document.getElementById('textToggleSpeakersView');
const iconToggleSpeakersView = document.getElementById('iconToggleSpeakersView');
const speakers = document.querySelector('.speakers');
speakers.appendChild(speakersFragment);
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