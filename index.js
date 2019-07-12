document.querySelector("h1").contentEditable = true;

sleepBtn = document.querySelector("#sleep-button");
linkBtn = document.querySelector("#link-button");
backBtn = document.querySelectorAll(".back-button");

appSection = document.querySelector("#app-section");
sleepSection = document.querySelector("#sleep-section");
linkSection = document.querySelector("#link-section");

//Show functions
const loadSleepSection = () => {
  appSection.style.display = "none";
  linkSection.style.display = "none";
  sleepSection.style.display = "block";
};

const loadLinkSection = () => {
  appSection.style.display = "none";
  linkSection.style.display = "block";
  sleepSection.style.display = "none";
};
const showSleepSection = (event) => {
  event.preventDefault();
  loadSleepSection();
};
const showLinkSection = (event) => {
  event.preventDefault();
  loadLinkSection();
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
switch(myParam) {
  case "accomodations":
    loadSleepSection();
    break;
  case "useful-links":
    loadLinkSection();
    break;
  default:
    console.log("Available pages: page=accomodations, page=useful-links");
}


