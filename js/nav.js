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
  searchBar = document.getElementById("search-bar");

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
      // Do something to this radio
      // if (servantRadio.id == "all") {
      //   wrapper.classList.remove("hideServant");
      // }
      // ============================================================
      sWrapper.forEach((wrapper) => {
        // Check if beast
        const beast = "beast".split("");
        const beastSplit = wrapper.classList[1].split("");
        const isBeast = beast.every((letter) => beastSplit.includes(letter));
        if (servantRadio.id == "all") {
          wrapper.classList.remove("hideServant");
        } else if (servantRadio.id == "beast" && isBeast) {
          wrapper.classList.remove("hideServant");
        } else {
          if (wrapper.classList[1] != servantRadio.id) {
            wrapper.classList.add("hideServant");
          } else if (wrapper.classList[1] == servantRadio.id) {
            wrapper.classList.remove("hideServant");
          }
        }
        // console.log(wrapper);
      });
      // ============================================================
    });
  }
  searchBar.addEventListener("keyup", function (e) {
    const userSearch = e.target.value;

    console.log(userSearch);
  });
  // sName.forEach((names) => {
  //   console.log(names.innerHTML);
  // });
  // sWrapper.forEach((element) => {
  //   console.log(element.classList);
  // });
  // console.log(sWrapper);
};

// for (let i of Object.keys(navServants)) {
//   const servantRadio = navServants[i];
//   servantRadio.addEventListener("click", function () {
//     console.log(`This is ${servantRadio.id}`);
//   });
// }

// Check if constains beast
const beastStr = "beast123";
const beastReal = "beast";
const beastArr = beastStr.split("");
const beastRealArr = beastReal.split("");
console.log(beastArr);
console.log(beastRealArr);

var containsAll = beastRealArr.every((i) => beastArr.includes(i));
console.log(containsAll);
