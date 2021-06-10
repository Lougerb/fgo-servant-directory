"use strict";
const servantsWrapper = document.getElementById("servants");
const modalsWrapper = document.getElementById("modals-wrapper");

const generateServantElement = function (
  rarity,
  servantPic,
  servantName,
  servantClass,
  servantType,
  servantAscImg,
  servantModal
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
    modalsWrapper;
    // modalsWrapper;
    // Generate Modal here
    const modalDiv = document.createElement("div");
    modalsWrapper.appendChild(modalDiv);

    // Radio button function

    const { 0: ascbeast, 1: asc1, 2: asc2, 3: asc3, 4: asc4 } = servantAscImg;

    const firstAsc = document.getElementById("firstAsc");
    const secondAsc = document.getElementById("secondAsc");
    const thirdAsc = document.getElementById("thirdAsc");
    const fourthAsc = document.getElementById("fourthAsc");

    changeAscPic(
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
    console.log(`This is ${servantName}`);
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
          // commands: {
          //   ascension: { 1: sCardFace },
          // },
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

      // generateServantElement(
      //   sRarity,
      //   isNonServant(),
      //   sName,
      //   isNonClass(),
      //   sType,
      //   ascension
      //   // createModal(
      //   //   sRarity,
      //   //   sAssension,
      //   //   sName,
      //   //   sGender,
      //   //   sClass,
      //   //   sMaxlvl,
      //   //   sAttribute,
      //   //   sID,
      //   //   sATKBase,
      //   //   sATKMax,
      //   //   sHPBase,
      //   //   sHPMax,
      //   //   sVA,
      //   //   sIllu,
      //   //   sStr,
      //   //   sAgi,
      //   //   sLuck,
      //   //   sEndu,
      //   //   sMagic,
      //   //   sStatNP,
      //   //   sCards,
      //   //   sSKills,
      //   //   sPassive,
      //   //   sNPIco,
      //   //   sNPCard,
      //   //   sCardFace,
      //   //   sNPName,
      //   //   sNPDetail
      //   // )
      // );
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
  servantNP,
  servantCards,
  servantSkills,
  servantPass,
  servantNPIco,
  servantNPCard,
  servantNPFace,
  servantNPName,
  servantNPDesc
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
  const getSkills = function (skillArr) {
    skillArr.forEach((element) => {
      const { name, detail, icon } = element;
      return `
    <tr>
      <td align="center" class="skill-ico">
        <img src="${icon}"  alt="skill">
      </td>
      <td >
        <span class="modals-info-bold">${name}</span>
        <p class="modals-info-skill">${detail}</p>
      </td>
    </tr>
    `;
    });
  };

  return `
<div id="modals" class="modals-hide">
        <!-- modal close -->
        <div id="modals-close" class="button-X"><p>&#10006 </p> </div>
        <!-- Ascension Column -->
        <div id="modals-ascension" class="modals-column">
         <img src="${changeAscPic()}" alt="${servantName}" id="servants-portrait">
         <!-- Ascension -->
         <div id="ascension">
         ${generateAscBtn()}
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
                      <td class="modals-info-reg">${servantNP}</td>
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
              <tr>
                <td colspan="2" class="modals-info-bold modals-skill ">
                  <p>Skills</p>
                  <div class="modals-skill-title"></div>
                </td>
              </tr>
              ${getSkills(servantSkills)}
              
              <!-- Passive Skills -->
              <tr>
                <td colspan="2" class="modals-info-bold modals-skill">
                  <p>Passive Skills</p>
                  <div class="modals-skill-title"></div>
                </td>
              </tr>
              ${getSkills(servantPass)}
              <!-- Noble Phantasm -->
              <tr>
                <td colspan="2" class="modals-info-bold modals-skill">
                  <p>Noble Phantasm</p>
                  <div class="modals-skill-title"></div>
                </td>
              </tr>
              <tr>
                <td class="modals-info-reg">
                  <div class="np-card">
                    <img src="${servantNPFace}" alt="command" class="np-face">
                    <img src="${servantNPIco}" alt="stella" class="np-icon">
                    <img src="${servantNPCard}" class="np-bg" alt="skill-NP">
                  </div>
                </td>
                <td class="modals-info-reg">
                  <span class="modals-info-bold">${servantNPName}</span>
                  <p>${servantNPDesc}</p>
                </td>
              </tr>
            </table>
          </div>
        </div>
      </div>
`;
  // changeAscension();

  // const
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
