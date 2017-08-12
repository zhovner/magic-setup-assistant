const backArrow = document.querySelector('#move-back-btn');
const forwardArrow = document.querySelector('#move-forward-btn');

const moveBack = () => {
  const activeTab = document.querySelector('.tab.active');
  const previousTab = activeTab.previousElementSibling;
  switchTab(activeTab, previousTab);
}

const moveForward = () => {
  const activeTab = document.querySelector('.tab.active');
  const nextTab = activeTab.nextElementSibling;
  switchTab(activeTab, nextTab);
}

const switchTab = (activeTab, tabToActivate) => {
  activeTab.classList.remove('active');
  tabToActivate.classList.add('active');

  updateArrows(tabToActivate);
}

const updateArrows = (tab) => {
  if (isFirstTab(tab)) {
    backArrow.style.opacity = 0.5;
    backArrow.removeEventListener('click', moveBack);
  } else {
    backArrow.style.opacity = 1;
    backArrow.addEventListener('click', moveBack);
  }
  
  if (isLastTab(tab)) {
    forwardArrow.style.opacity = 0.5;
    forwardArrow.removeEventListener('click', moveForward);
  } else {
    forwardArrow.style.opacity = 1;
    forwardArrow.addEventListener('click', moveForward);
  }
}

const isFirstTab = (tab) => tab.previousElementSibling === null;

const isLastTab = (tab) => tab.nextElementSibling === null;

// Only forward arrow is active on first page
forwardArrow.addEventListener('click', moveForward);