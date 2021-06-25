import * as create from "./modals.js";
import * as nav from "./nav.js";

const servantsWrapper = document.getElementById("servants");
const modalsWrapper = document.querySelector("#modals-wrapper");
const overlay = document.getElementById("overlay");
export let servantWrapperArr = [];

export const displayServant = function (servantData) {
  servantData.forEach((servants) => {
    // deconstruct
    const {
      name: sName,
      gender: sGender,
      className: sClass,
      rarity: sRarity,
      lvMax: sMaxlvl,
      attribute: sAttribute,
      collectionNo: sID,
      atkBase: sATKBase,
      atkMax: sATKMax,
      hpBase: sHPBase,
      hpMax: sHPMax,
      type: sType,
      cards: sCards,
      extraAssets: {
        charaGraph: {
          ascension: sAssension,
          ascension: { 0: ascbeast, 1: asc1, 2: asc2, 3: asc3, 4: asc4 },
        },
        commands: sCommands,
      },
      skills: sSKills,
      classPassive: sPassive,
      noblePhantasms: sNP,
      profile: {
        cv: sVA,
        illustrator: sIllu,
        stats: {
          strength: sStr,
          agility: sAgi,
          endurance: sEndu,
          luck: sLuck,
          magic: sMagic,
          np: sStatNP,
        },
      },
    } = servants;
    // display==================================================================

    // Check if servant is NPC
    const isNPC = function () {
      if (sType == "enemyCollectionDetail") {
        return ascbeast;
      } else {
        return asc1;
      }
    };
    // Check if servant is grandCaster
    const isGrandCaster = function () {
      if (sClass == "grandCaster") {
        return "caster";
      } else {
        return sClass;
      }
    };

    const servantCardWrapper = document.createElement("div");
    servantsWrapper.appendChild(servantCardWrapper);
    servantCardWrapper.classList.add(
      "servant-wrapper",
      `${isGrandCaster()}`,
      "showServant"
    );

    servantCardWrapper.insertAdjacentHTML(
      "afterbegin",
      `<div class="servant-card" >
          <div class="servant-hover">
            <p>View Profile</p>
          </div>
            <div class="servant-border">
              <img
                src="./images/servant-border/servant_card_0${sRarity}.png"
                alt="${sRarity} Star Border"
              />
            </div>
            <div class="servant-picture">
              <img src="${isNPC()}" alt="${sName}" />
            </div>
            <div class="servant-title">
              <div class="servant-title-text">
                <div class="servant-name">${sName}</div>
              </div>
              <div class="servant-class-ico">
                <img src="./images/class-ico/${isGrandCaster()}-ico.png" alt="${isGrandCaster()}" />
              </div>
            </div>
          </div>`
    );
    // After display, loading screen will disappear=============================================
    const loading = document.querySelector(".servant-load");
    loading.classList.add("hideMe");
    // click servant profile for modals=========================================================

    servantCardWrapper.addEventListener("click", function () {
      // console.log(`This is ${sName}`);

      // const modalDiv = document.createElement("div");
      // modalsWrapper.appendChild(modalDiv);
      // modalDiv.insertAdjacentHTML(
      modalsWrapper.insertAdjacentHTML(
        "afterbegin",
        create.createModal(
          sName,
          sGender,
          sClass,
          sType,
          sMaxlvl,
          sAttribute,
          sID,
          sATKBase,
          sATKMax,
          sHPBase,
          sHPMax,
          sVA,
          sIllu,
          sStr,
          sAgi,
          sLuck,
          sEndu,
          sMagic,
          sStatNP
        )
      );

      const mainModals = document.getElementById("modals");
      const modalsWrapper2 = document.querySelector(".modals-wrapper-2");
      overlay.classList.remove("hideModal");
      modalsWrapper.classList.remove("hideModal");
      mainModals.classList.add("modals-show");

      const servantSKillElem = document.getElementById("servantSkill");
      const servantPassiveElem = document.getElementById("servantPassive");
      const servantNPElem = document.getElementById("servantNP");
      const servantCommandCard = document.getElementById("servantCards");
      const servantRarityNum = document.getElementById("servantRarity");
      const servantAscElem = document.getElementById("ascension");
      const closeBtn = document.getElementById("modals-close");

      const closeWindow = function (elem) {
        elem.addEventListener("click", function () {
          overlay.classList.add("hideModal");
          modalsWrapper.classList.add("hideModal");
          mainModals.classList.remove("modals-show");
          modalsWrapper2.remove();
        });
      };

      closeWindow(closeBtn);
      closeWindow(overlay);

      create.getSkills(sSKills, servantSKillElem);
      create.getSkills(sPassive, servantPassiveElem);
      create.getNP(sNP, sCommands, servantNPElem);
      create.placeCards(sCards, servantCommandCard);
      create.rarity(sRarity, servantRarityNum);
      create.generateAscBtn(sAssension, servantAscElem);
      // console.log(servantAscImg);

      // Radio button function
      const servantPortrait = document.getElementById("modals-ascension");
      const imgPortrait = document.createElement("img");
      const ascRadio = document.querySelectorAll(`input[name="ascensions"]`);
      const firstAsc = document.getElementById("1st-Asc");
      const secondAsc = document.getElementById("2nd-Asc");
      const thirdAsc = document.getElementById("3rd-Asc");
      const fourthAsc = document.getElementById("4th-Asc");

      servantPortrait.insertAdjacentElement("afterbegin", imgPortrait);

      if (sType == "enemyCollectionDetail") {
        imgPortrait.src = ascbeast;
      } else {
        imgPortrait.src = asc1;
      }

      firstAsc.checked = true;

      ascRadio.forEach((radio) => {
        radio.addEventListener("click", function () {
          create.changeAscPic(
            sName,
            imgPortrait,
            firstAsc,
            secondAsc,
            thirdAsc,
            fourthAsc,
            sType,
            ascbeast,
            asc1,
            asc2,
            asc3,
            asc4
          );
        });
      });
    });
    // Modals functions=================================================================
  });
};
