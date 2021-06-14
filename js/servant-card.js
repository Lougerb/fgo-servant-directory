import * as create from "./modals.js";

const servantsWrapper = document.getElementById("servants");
const modalsWrapper = document.querySelector("#modals-wrapper");
const overlay = document.getElementById("overlay");

export const generateServantElement = function (
  rarity,
  servantPic,
  servantName,
  servantClass,
  servantSkills,
  servantPass,
  servantType,
  servantAscImg,
  servantModal,
  servantNP,
  servantNPFace,
  servantCards
) {
  const clickServant = document.createElement("div");

  servantsWrapper.appendChild(clickServant);
  clickServant.classList.add("servant-click");

  clickServant.insertAdjacentHTML(
    "afterbegin",
    `
        <div class="servant-card ${servantClass}">
        <div class="servant-hover">
          <p>View Profile</p>
        </div>
          <div class="servant-border">
            <img
              src="./images/servant-border/servant_card_0${rarity}.png"
              alt="${rarity} Star Border"
            />
          </div>
          <div class="servant-picture">
            <img src="${servantPic}" alt="${servantName}" />
          </div>
          <div class="servant-title">
            <div class="servant-title-text">
              <div class="servant-name">${servantName}</div>
            </div>
            <div class="servant-class-ico">
              <img src="./images/class-ico/${servantClass}-ico.png" alt="${servantClass}" />
            </div>
          </div>
        </div>`
  );
  const loading = document.querySelector(".servant-load");
  loading.classList.add("hideMe");

  clickServant.addEventListener("click", function () {
    console.log(`This is ${servantName}`);

    const modalDiv = document.createElement("div");
    const modalElem = servantModal;
    modalsWrapper.appendChild(modalDiv);
    modalDiv.insertAdjacentHTML("afterbegin", modalElem);
    const mainModals = document.getElementById("modals");
    overlay.classList.remove("hideMe");
    modalsWrapper.classList.remove("hideMe");
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
        overlay.classList.add("hideMe");
        modalsWrapper.classList.add("hideMe");
        mainModals.classList.remove("modals-show");
        mainModals.remove();
      });
    };

    closeWindow(closeBtn);
    closeWindow(overlay);

    // servantSKillElem.insertAdjacentHTML("afterbegin", getSkills(servantSkills));
    create.getSkills(servantSkills, servantSKillElem);
    create.getSkills(servantPass, servantPassiveElem);
    create.getNP(servantNP, servantNPFace, servantNPElem);
    create.placeCards(servantCards, servantCommandCard);
    create.rarity(rarity, servantRarityNum);
    create.generateAscBtn(servantAscImg, servantAscElem);
    console.log(servantAscImg);

    // Radio button function
    const servantPortrait = document.getElementById("modals-ascension");
    const imgPortrait = document.createElement("img");
    const ascRadio = document.querySelectorAll(`input[name="ascensions"]`);
    const { 0: ascbeast, 1: asc1, 2: asc2, 3: asc3, 4: asc4 } = servantAscImg;
    const firstAsc = document.getElementById("1st-Asc");
    const secondAsc = document.getElementById("2nd-Asc");
    const thirdAsc = document.getElementById("3rd-Asc");
    const fourthAsc = document.getElementById("4th-Asc");

    servantPortrait.insertAdjacentElement("afterbegin", imgPortrait);

    if (servantType == "enemyCollectionDetail") {
      imgPortrait.src = ascbeast;
    } else {
      imgPortrait.src = asc1;
    }

    firstAsc.checked = true;

    ascRadio.forEach((radio) => {
      radio.addEventListener("click", function () {
        create.changeAscPic(
          servantName,
          imgPortrait,
          firstAsc,
          secondAsc,
          thirdAsc,
          fourthAsc,
          servantType,
          ascbeast,
          asc1,
          asc2,
          asc3,
          asc4
        );
      });
    });
  });
};

// closeWindow(overlay);
