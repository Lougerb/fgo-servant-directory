"use strict";
import * as api from "./servant-api.js";
import * as card from "./servant-card.js";
// Radios
const saberOpt = document.getElementById("saber"),
  lancerOpt = document.getElementById("lancer"),
  archerOpt = document.getElementById("archer"),
  riderOpt = document.getElementById("rider"),
  casterOpt = document.getElementById("caster"),
  assassinOpt = document.getElementById("assassin"),
  berserkerOpt = document.getElementById("berserker"),
  avengerOpt = document.getElementById("avenger"),
  rulerOpt = document.getElementById("ruler"),
  mooncancerOpt = document.getElementById("mooncancer"),
  alterEgoOpt = document.getElementById("alterEgo"),
  foreignerOpt = document.getElementById("foreigner"),
  shielderOpt = document.getElementById("shielder"),
  beastOpt = document.getElementById("beast"),
  allOpt = document.getElementById("all"),
  navServants = document.getElementsByName("servant"),
  searchBar = document.getElementById("search-bar"),
  navServantIcons = document.getElementById("nav-menu-1");

allOpt.checked = true;

const filterClass = function (radioBtn, servantClass, callback) {
  if (radioBtn.checked) {
    console.log(radioBtn.id);
    callback(true);
  } else {
    callback(false);
  }
};
const servantList = [
  "saber",
  "lancer",
  "archer",
  "rider",
  "caster",
  "assassin",
  "berserker",
  "avenger",
  "ruler",
  "moonCancer",
  "alterEgo",
  "foreigner",
  "shielder",
  "beast",
  "all",
];
export const filterServants = function (sWrapper, sName) {
  for (let i of Object.keys(navServants)) {
    const servantRadio = navServants[i];

    servantRadio.addEventListener("click", function () {
      sWrapper.forEach((wrapper) => {
        // Do something to this radio
        // if (servantRadio.id == "all") {
        //   wrapper.classList.remove("hideServant");
        // }
        // ============================================================
        // Check if beast
        const beast = "beast".split("");
        const beastSplit = wrapper.classList[1].split("");
        const isBeast = beast.every((letter) => beastSplit.includes(letter));
        if (servantRadio.id == "all") {
          toggleHide(wrapper, "showServant", "hideServant");
          // wrapper.classList.remove("hideServant");
          // wrapper.classList.add("showServant");
        } else if (servantRadio.id == "beast" && isBeast) {
          toggleHide(wrapper, "showServant", "hideServant");
          // wrapper.classList.remove("hideServant");
          // wrapper.classList.add("showServant");
        } else {
          if (wrapper.classList[1] != servantRadio.id) {
            toggleHide(wrapper, "hideServant", "showServant");
            // wrapper.classList.add("hideServant");
            // wrapper.classList.remove("showServant");
          } else if (wrapper.classList[1] == servantRadio.id) {
            console.log(servantRadio.id);
            toggleHide(wrapper, "showServant", "hideServant");
            // wrapper.classList.remove("hideServant");
            // wrapper.classList.add("showServant");
          }
        }
        // console.log(wrapper);
      });
      // ============================================================
    });
  }
  // SEARCH BAR

  // ====================================================

  searchBar.addEventListener("keyup", function (e) {
    const userSearch = e.target.value.toLowerCase();
    sName.forEach((names) => {
      const servantName = names.innerHTML;
      const servantCardEl =
        names.parentElement.parentElement.parentElement.parentElement;
      const filteredS = servantName.toLowerCase().includes(userSearch);
      if (!filteredS) {
        toggleHide(servantCardEl, "hideServant", "showServant");
        // servantCardEl.classList.add("hideServant");
        // servantCardEl.classList.remove("showServant");
        console.log(servantName);
        console.log(servantCardEl);
      } else {
        toggleHide(servantCardEl, "showServant", "hideServant");
        // servantCardEl.classList.remove("hideServant");
        // servantCardEl.classList.add("showServant");
      }
    });
  });
};

const toggleHide = function (elem, addClass, removeClass) {
  elem.classList.remove(removeClass);
  elem.classList.add(addClass);
};

// =====================================================
// Nav mobile
// =====================================================

navServantIcons.addEventListener("touchstart", startTouch, false);
navServantIcons.addEventListener("touchmove", moveTouch, false);

// Swipe Up / Down / Left / Right
var initialX = null;
var initialY = null;

function startTouch(e) {
  initialX = e.touches[0].clientX;
  initialY = e.touches[0].clientY;
}

function moveTouch(e) {
  if (initialX === null) {
    return;
  }

  if (initialY === null) {
    return;
  }

  var currentX = e.touches[0].clientX;
  var currentY = e.touches[0].clientY;

  var diffX = initialX - currentX;
  var diffY = initialY - currentY;

  if (Math.abs(diffX) > Math.abs(diffY)) {
    // sliding horizontally
    if (diffX > 0) {
      // swiped left
      navServantIcons.style.left = "-200px";
      console.log("swiped left");
    } else {
      // swiped right
      navServantIcons.style.left = "0";
      console.log("swiped right");
    }
  } else {
    // sliding vertically
    if (diffY > 0) {
      // swiped up
      console.log("swiped up");
    } else {
      // swiped down
      console.log("swiped down");
    }
  }

  initialX = null;
  initialY = null;

  e.preventDefault();
}
