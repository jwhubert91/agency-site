const revolvingHeroContent = document.querySelector('.video-header-revolving');

const revolvingArray = [
  'restaurant',
  'store',
  'non-profit',
  'portfolio',
  'start-up',
  'band',
  'agency',
  'business',
];

let timer = 0;
setInterval(() => {
  if (timer == revolvingArray.length - 1) {
    timer = 0;
  }
  revolvingHeroContent.innerHTML = revolvingArray[timer];
  timer++;
}, 2000);
