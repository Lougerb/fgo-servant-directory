"use strict";
const servantsWrapper = document.getElementById("servants");
const modalsWrapper = document.querySelector("#modals-wrapper");
const overlay = document.querySelector("#overlay");

const generateServantElement = function (
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
  servantNPFace
) {
  const clickServant = document.createElement("div");
  servantsWrapper.appendChild(clickServant);
  clickServant.classList.add("servant-click");
  clickServant.insertAdjacentHTML(
    "afterbegin",
    `
<div class="servant-card">
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

  clickServant.addEventListener("click", function () {
    console.log(`This is ${servantName}`);
    // modalsWrapper;
    // Generate Modal here
    const modalDiv = document.createElement("div");
    const modalElem = servantModal;
    modalsWrapper.appendChild(modalDiv);
    modalDiv.insertAdjacentHTML("afterbegin", modalElem);
    overlay.classList.remove("hideMe");
    modalsWrapper.classList.remove("hideMe");

    const servantSKillElem = document.getElementById("servantSkill");
    const servantPassiveElem = document.getElementById("servantPassive");
    const servantNPElem = document.getElementById("servantNP");

    // servantSKillElem.insertAdjacentHTML("afterbegin", getSkills(servantSkills));
    getSkills(servantSkills, servantSKillElem);
    getSkills(servantPass, servantPassiveElem);
    getNP(servantNP, servantNPFace, servantNPElem);
    // console.log(servantNPFace);
    // servantPassiveElem.insertAdjacentHTML("afterbegin", getSkills(servantPass));
    // console.log(getSkills(servantSkills));
    // console.log(servantPass);

    // Radio button functio
    // const { 0: ascbeast, 1: asc1, 2: asc2, 3: asc3, 4: asc4 } = servantAscImg;

    // const firstAsc = document.getElementById("firstAsc");
    // const secondAsc = document.getElementById("secondAsc");
    // const thirdAsc = document.getElementById("thirdAsc");
    // const fourthAsc = document.getElementById("fourthAsc");

    // changeAscPic(
    //   firstAsc,
    //   secondAsc,
    //   thirdAsc,
    //   fourthAsc,
    //   servantType,
    //   ascbeast,
    //   asc1,
    //   asc2,
    //   asc3,
    //   asc4
    // );
  });
};
// Search Single Servant
export const servantData = async function (servant) {
  try {
    // GET Datas
    const servantRes = await fetch(
      `https://api.atlasacademy.io/nice/NA/servant/search?name=${servant}`
    );
    const servantJSON = await servantRes.json();
    const _servantData = servantJSON[0];

    // Get infos
    // const sName = _servantData.name;
    // const sClass = _servantData.className;
    const {
      name: sName,
      className: sClass,
      rarity: sRarity,
      extraAssets: {
        charaGraph: {
          ascension: { 1: firstAsc, 2: secondAsc, 3: thirdAsc, 4: fourthAsc },
        },
      },
    } = _servantData;

    console.log(_servantData);
  } catch (err) {
    console.error(err);
  }

  // console.log("Hello World");
};

export const allServant = async function () {
  try {
    const response = await fetch(
      `https://api.atlasacademy.io/export/NA/nice_servant_lore.json`
    );
    const resJSON = await response.json();
    resJSON.forEach((element) => {
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
            ascension: {
              0: nonServant,
              1: firstAsc,
              2: secondAsc,
              3: thirdAsc,
              4: fourthAsc,
            },
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
      } = element;

      // Skills
      // const [skill1, skill2, skill3] = sSKills;
      // const {
      //   name: sSkillName1,
      //   detail: sSkillDetail1,
      //   icon: sSkillIco1,
      // } = skill1;
      // const {
      //   name: sSkillName2,
      //   detail: sSkillDetail2,
      //   icon: sSkillIco2,
      // } = skill2;
      // const {
      //   name: sSkillName3,
      //   detail: sSkillDetail3,
      //   icon: sSkillIco3,
      // } = skill3;
      // Passive Skills
      // sPassive.forEach((element) => {
      // });
      // for(let i=0; i<=sPassive.length;i++){
      //   sPassive[i]
      // }
      // const [pass1, pass2] = sPassive;
      // const {
      //   name: sPassiveName1,
      //   icon: sPassiveIco1,
      //   detail: sPassiveDetail1,
      // } = pass1;
      // const {
      //   name: sPassiveName2,
      //   icon: sPassiveIco2,
      //   detail: sPassiveDetail2,
      // } = pass2;
      // const [arrNP] = sNP;
      // const {
      //   card: sNPCard,
      //   name: sNPName,
      //   detail: sNPDetail,
      //   icon: sNPIco,
      // } = arrNP;

      const isNonServant = function () {
        if (sType == "enemyCollectionDetail") {
          return nonServant;
        } else {
          return firstAsc;
        }
      };
      const isNonClass = function () {
        if (sClass == "grandCaster") {
          return "caster";
        } else {
          return sClass;
        }
      };

      generateServantElement(
        sRarity,
        isNonServant(),
        sName,
        isNonClass(),
        sSKills,
        sPassive,
        sType,
        sAssension,
        createModal(
          sRarity,
          sAssension,
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
          sStatNP,
          sCards
        ),
        sNP,
        sCommands
      );
      console.log(element);
      // console.log(sRarity, firstAsc, sName, sClass);
    });
  } catch (err) {
    console.error(err);
  }
};

// export const testMe = function () {
//   console.log("Hello Test");
// };

const createModal = function (
  servantRarity,
  servantAscImg,
  servantName,
  servantGender,
  servantClass,
  servantType,
  servantMaxLevel,
  servantAttribute,
  servantID,
  servantATKBase,
  servantATKMax,
  servantHPBase,
  servantHPMax,
  servantVA,
  servantIllu,
  servantStr,
  servantAgi,
  servantLuck,
  servantEndu,
  servantMagic,
  servantNPStat,
  servantCards
) {
  // servantCards.forEach
  const placeCards = () => {
    servantCards.forEach((cards) => {
      return `<img src="${cards}" class="class-card" alt="Card">`;
    });
  };
  //
  const rarity = () => {
    for (let i = 0; i <= servantRarity; i++) {
      return `<div class="rarity"></div>`;
    }
  };

  const generateAscBtn = function () {
    const servantAscLength = Object.keys(servantAscImg).length;
    for (let i = 0; i <= servantAscLength; i++) {
      const ascNum =
        i == 1 ? `${i}st` : i == 2 ? `${i}nd` : i == 3 ? `${i}rd` : `${i}th`;
      if (i == 1) {
        return `
          <label class="asc-opt" for="${ascNum}-Asc" >
                  <input type="radio" id="${ascNum}-Asc" name="ascensions" class="asc-Radio" checked>${ascNum}</input>
                </label>
                `;
      } else {
        return `
          <label class="asc-opt" for="${ascNum}-Asc" >
                  <input type="radio" id="${ascNum}-Asc" name="ascensions" class="asc-Radio" >${ascNum}</input>
                </label>
                `;
      }
    }
  };

  // const changeServantPic = function () {
  //   const { 0: ascbeast, 1: asc1, 2: asc2, 3: asc3, 4: asc4 } = servantAscImg;

  //   const firstAsc = document.getElementById("firstAsc");
  //   const secondAsc = document.getElementById("secondAsc");
  //   const thirdAsc = document.getElementById("thirdAsc");
  //   const fourthAsc = document.getElementById("fourthAsc");

  //   return changeAscPic(
  //     firstAsc,
  //     secondAsc,
  //     thirdAsc,
  //     fourthAsc,
  //     servantType,
  //     ascbeast,
  //     asc1,
  //     asc2,
  //     asc3,
  //     asc4
  //   );
  // };

  return `
<div id="modals" class="modals-hide modals-show">
<!--  modal close -->
        <div id="modals-close" class="button-X"><p>&#10006 </p> </div>
        <!-- Ascension Column -->
        <div id="modals-ascension" class="modals-column">
        <!--  <img src="${`changeServantPic()`}" alt="${servantName}" id="servants-portrait">-->
         <!-- Ascension -->
         <div id="ascension">
         ${`INSERT RADIO HERE`}
         </div>
         <span>Ascensions</span>
        </div>
        <div id="modals-info-wrapper">

          <!-- Info Column -->
          <div id="modals-info" class="modals-column">
            <table class="modals-table" >
              <tr>
                <td colspan="2" class="modals-info-bold">
                  <div class="rarity-stars clipshadow">
                  ${rarity()}
                  </div>
                </td>
              </tr>
              <tr>
                <td class="modals-info-bold">Name:</td>
                <td class="modals-info-reg">${servantName}</td>
              </tr>
              <tr>
                <td class="modals-info-bold">Gender:</td>
                <td class="modals-info-reg">${servantGender}</td>
              </tr> 
              <tr>
                <td class="modals-info-bold">Class:</td>
                <td class="modals-info-reg">${servantClass}</td>
              </tr>
              <tr>
                <td class="modals-info-bold">Max Level:</td>
                <td class="modals-info-reg">${servantMaxLevel}</td>
              </tr>
              <tr>
                <td class="modals-info-bold">Attribute:</td>
                <td class="modals-info-reg">${servantAttribute}</td>
              </tr>
              <tr>
                <td class="modals-info-bold">ID:</td>
                <td class="modals-info-reg">${servantID}</td>
              </tr>
              <tr>
                <td class="modals-info-bold">ATK:</td>
                <td class="modals-info-reg">${servantATKBase} / ${servantATKMax}</td>
              </tr>
              <tr>
                <td class="modals-info-bold">HP:</td>
                <td class="modals-info-reg">${servantHPBase} / ${servantHPMax}</td>
              </tr>
              <tr>
                <td class="modals-info-bold">VA:</td>
                <td class="modals-info-reg">${servantVA}</td>
              </tr>
              <tr>
                <td class="modals-info-bold">Illustrator:</td>
                <td class="modals-info-reg">${servantIllu}</td>
              </tr>
              <tr>
                <td colspan="2" class="modals-info-bold">Stats:</td>
              </tr>
              <tr>
                <td colspan="2" class="modals-info-bold">
                  <table class="stats">
                    <tr>
                      <td class="modals-info-bold">Strength:</td>
                      <td class="modals-info-reg">${servantStr}</td>
                      <td class="modals-info-bold">Endurance:</td>
                      <td class="modals-info-reg">${servantEndu}</td>
                    </tr>
                    <tr>
                      <td class="modals-info-bold">Agility:</td>
                      <td class="modals-info-reg">${servantAgi}</td>
                      <td class="modals-info-bold">Magic:</td>
                      <td class="modals-info-reg">${servantMagic}</td>
                    </tr>
                    <tr>
                      <td class="modals-info-bold">Luck:</td>
                      <td class="modals-info-reg">${servantLuck}</td>
                      <td class="modals-info-bold">Noble Phantasm:</td>
                      <td class="modals-info-reg">${servantNPStat}</td>
                    </tr>
                  </table>
                </td>
              </tr>
              
              <tr>
                <td colspan="2" class="modals-info-bold">Cards:</td>
              </tr>
              <tr>
                <td colspan="2" class="modals-info-bold">
                ${placeCards()}
                </td>
              </tr>
            </table>
          </div>
          <!-- Skills Column -->
          <div class="modals-separator"></div>
          <div id="modals-skills" class="modals-column">
          <table class="modals-table">
              <!-- Active Skills -->
              <tr id="servantSkill">
              <td colspan="2" class="modals-info-bold modals-skill ">
                <p>Skills</p>
                <div class="modals-skill-title"></div>
              </td>
              </tr>
              
              
              <!-- Passive Skills -->
              <tr id="servantPassive">
              <td colspan="2" class="modals-info-bold modals-skill">
                <p>Passive Skills</p>
                <div class="modals-skill-title"></div>
              </td>
              </tr>
              <!-- Noble Phantasm -->
              <tr id="servantNP">
                <td colspan="2" class="modals-info-bold modals-skill">
                  <p>Noble Phantasm</p>
                  <div class="modals-skill-title"></div>
                </td>
              </tr>
          </table>
        </div>

          
        </div>
      </div>
`;
};

const changeAscPic = function (
  firstAsc_,
  secondAsc_,
  thirdAsc_,
  fourthAsc_,
  servantType_,
  beastpic,
  a1,
  a2,
  a3,
  a4
) {
  if (servantType_ == "enemyCollectionDetail") {
    return beastpic;
  } else {
    if (firstAsc_.checked) {
      return a1;
    } else if (secondAsc_.checked) {
      return a2;
    } else if (thirdAsc_.checked) {
      return a3;
    } else if (fourthAsc_.checked) {
      return a4;
    }
  }
};

// Make a sample of rendered Element showing NOT AVAILABLE
// if some certain servant doesnt have stats

// servantSKillElem.insertAdjacentHTML("afterbegin", getSkills(servantSkills,servantSKillElem));

const getSkills = function (skillArr, skillElem) {
  if (skillArr.length == 0) {
    skillElem.insertAdjacentHTML(
      "afterend",
      `
      <tr>
        <td colspan="2" class="modals-notavailable">NOT AVAILABLE</td>
      </tr>`
    );
  } else {
    for (const element of skillArr) {
      const { name, detail, icon } = element;
      skillElem.insertAdjacentHTML(
        "afterend",
        `     <tr>
                <td align="center" class="skill-ico">
                  <img src="${icon}"  alt="skill">
                </td>
                <td >
                  <span class="modals-info-bold">${name}</span>
                  <p class="modals-info-skill">${detail}</p>
                </td>
              </tr>
              `
      );
    }
  }
};

const getNP = function (np, sNPFace, npElem) {
  if (np.length === 0) {
    npElem.insertAdjacentHTML(
      "afterend",
      `
    <tr>
      <td colspan="2" class="modals-notavailable">NOT AVAILABLE</td>
    </tr>`
    );
  } else {
    np.forEach((element) => {
      const { name, icon, detail, card } = element;
      npElem.insertAdjacentHTML(
        "afterend",
        `<tr>
      <td class="modals-info-reg">
        <div class="np-card">
        ${
          sNPFace.hasOwnProperty("ascension")
            ? `<img src="${sNPFace.ascension[1]}" alt="command" class="np-face"></img>`
            : ""
        }
          <img src="${icon}" alt="stella" class="np-icon">
          <img src="./images/NP-Cards/${card}-np.png" class="np-bg" alt="skill-NP">
        </div>
      </td>
      <td class="modals-info-reg">
        <span class="modals-info-bold">${name}</span>
        <p>${detail}</p>
      </td>
    </tr>`
      );
      //     return ` <tr>
      //   <td class="modals-info-reg">
      //     <div class="np-card">
      //     ${
      //       servantNPFace.hasOwnProperty("ascension")
      //         ? `<img src="${sNPFace}" alt="command" class="np-face"></img>`
      //         : ""}

      //       <img src="${icon}" alt="stella" class="np-icon">
      //       <img src="./images/NP-Cards/${card}-np.png" class="np-bg" alt="skill-NP">
      //     </div>
      //   </td>
      //   <td class="modals-info-reg">
      //     <span class="modals-info-bold">${name}</span>
      //     <p>${detail}</p>
      //   </td>
      // </tr>
      //   `;
    });
  }
};
