const hamburger = document.querySelector('.hamburger');
const xIcon = document.querySelector('.close-modal');
const sideMenu = document.querySelector('.side-menu');

hamburger.addEventListener('click', () => {
  sideMenu.classList.add('display-active');
});

xIcon.addEventListener('click', () => {
  sideMenu.classList.remove('display-active');
});

/* Featured Speakers */
const speakersData = [
  {
    name: 'Muhyideen Elias',
    background: '5K Race Winner 22',
    profileImage: './images/speaker_01.jpeg',
    alt: 'speaker_01',
    description: 'Focusing on a colloborative training Muhyideen Elias is well known for his humor and rigid trainning sessions with his pets. he created the concept of co-supervision theory.',
  },
  {
    name: 'Kevin Lintroittle',
    background: 'Top Breeder Simon County',
    profileImage: './images/d2.jpeg',
    alt: 'speaker_02',
    description: 'Kevin Little is known all round Simon County as thebest when it comes to breeding dogs to the best standard. He is an avid learner a good speaker.',
  },
  {
    name: 'Abubakar Sadiq',
    background: 'The Morocaan Maestro',
    profileImage: './images/d3.jpeg',
    alt: 'speaker_03',
    description: 'After retiring from modern day football, Sadiq sought to out to connect with his long passing of breeding dogs and travelling.',
  },
  {
    name: 'Eglesias Philips',
    background: 'San Francisco Kernel',
    profileImage: './images/d4.jpeg',
    alt: 'speaker_04',
    description: 'Eglesias is own the renowned San Franscisco Kernel, his establishment is one of the oldest dog breeding kernels',
  },
  {
    name: 'Sir John',
    background: 'Animal Companion (Romania)',
    profileImage: './images/d5.jpg',
    alt: 'speaker_05',
    description: 'Sir John is known for his kennel "Animal Companion" that encourages old people to take up breeding. He believes dog provide great company.',
  },
  {
    name: 'Eurasian Wolf',
    background: 'Best Teen Breeder (UK 2021)',
    profileImage: './images/d6.jpg',
    alt: 'speaker_06',
    description: 'Anna Robertson beat the odds when ti comes to breeding at a young age, she is a motivation to all teens out there especially young girls.',
  },
];

// create speaker container
const section = document.createElement('section');
section.classList.add('featured-speakers');
//
const mainBody = document.querySelector('.main-body');
const mainSponsors = document.querySelector('.main-sponsors');
mainBody.insertBefore(section, mainSponsors);

const main = document.createElement('div');
main.classList.add('main');
// appeding main to section
section.appendChild(main);

// creating main-heading
const mainHeading = document.createElement('div');
mainHeading.classList.add('main-heading');
// appending mainHeading to main
main.appendChild(mainHeading);

// creating main-heading children
const headingText = document.createElement('h4');
headingText.innerText = 'Featured Speakers';
const bar = document.createElement('div');
bar.classList.add('bar');

// appending heading children to main-heading
mainHeading.appendChild(headingText);
mainHeading.appendChild(bar);

// creating speaker list
const speakerList = document.createElement('div');
speakerList.classList.add('speaker-list');
// appending speaker List to main
main.appendChild(speakerList);

// creating speaker list grid
const speakerListGrid = document.createElement('div');
speakerListGrid.classList.add('speaker-list-grid');

// appending speakerlistgrid to speakerList
speakerList.appendChild(speakerListGrid);

// const templateLiteral = `<div class="speaker">
// <div class="speakerImage">
//   <img
//     src="/images/speaker_01.jpeg"
//     alt="speaker-01"
//     class="speaker-img"
//   />
// </div>
// <div class="speaker-info">
//   <h3>Muhyideen Elias</h3>
//   <h4>5K Race Winner '22</h4>
//   <p>
//     Focusing on a colloborative training Muhyideen Elias is well
//     known for his humor and rigid trainning sessions with his
//     pets. he created the concept of co-supervision theory.
//   </p>
// </div>
// </div>
// `
speakersData.forEach((element) => {
  const speaker = document.createElement('div');
  const speakerImageCt = document.createElement('div');
  const speakerImage = document.createElement('img');
  const speakerInfo = document.createElement('div');
  const spInfoMainHeading = document.createElement('h3');
  const spInfoSubHeading = document.createElement('h4');
  const spInfoText = document.createElement('p');

  // adding all classlist
  speaker.classList.add('speaker');
  speakerImageCt.classList.add('speakerImage');
  speakerImage.classList.add('speaker-img');
  speakerInfo.classList.add('speaker-info');

  // dynamic attributes
  speakerImage.src = element.profileImage;
  speakerImage.alt = element.alt;
  spInfoMainHeading.textContent = element.name;
  spInfoSubHeading.textContent = element.background;
  spInfoText.textContent = element.description;

  // appending children
  speakerImageCt.appendChild(speakerImage);
  speakerInfo.append(spInfoMainHeading, spInfoSubHeading, spInfoText);

  // appending to containers
  speakerListGrid.appendChild(speaker);
  speaker.appendChild(speakerImageCt);
  speaker.appendChild(speakerInfo);
});
