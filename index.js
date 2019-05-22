// HTML elements selectors
sleepBtn = document.querySelector("#sleep-button");
linkBtn = document.querySelector("#link-button");
backBtn = document.querySelectorAll(".back-button");

appSection = document.querySelector("#app-section");
sleepSection = document.querySelector("#sleep-section");
linkSection = document.querySelector("#link-section");

//Show functions
const showSleepSection = (event) => {
  event.preventDefault();
  appSection.style.display = "none";
  sleepSection.style.display = "block";
};

const loadSleepSection = (event) => {
  appSection.style.display = "none";
  sleepSection.style.display = "block";
};

const showLinkSection = (event) => {
  event.preventDefault();
  appSection.style.display = "none";
  linkSection.style.display = "block";
};

const showAppSection = (event) => {
  event.preventDefault();
  sleepSection.style.display = "none";
  linkSection.style.display = "none";
  appSection.style.display = "block";
};

// Click Events
sleepBtn.addEventListener("click", showSleepSection);
linkBtn.addEventListener("click", showLinkSection);
backBtn.forEach( (btn) => {
  btn.addEventListener("click", showAppSection);
});

// URL page selector
const urlParams = new URLSearchParams(window.location.search);
const myParam = urlParams.get('page');
if (myParam == "accomodations"){
  loadSleepSection();
}

