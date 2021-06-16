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
          wrapper.classList.remove("hideServant");
        } else if (servantRadio.id == "beast" && isBeast) {
          wrapper.classList.remove("hideServant");
        } else {
          if (wrapper.classList[1] != servantRadio.id) {
            wrapper.classList.add("hideServant");
          } else if (wrapper.classList[1] == servantRadio.id) {
            console.log(servantRadio.id);
            wrapper.classList.remove("hideServant");
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
        servantCardEl.classList.add("hideServant");
        console.log(servantName);
        console.log(servantCardEl);
      } else {
        servantCardEl.classList.remove("hideServant");
      }
    });
  });
};
