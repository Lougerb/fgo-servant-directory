export const createModal = function (
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
  servantNPStat
) {
  // servantCards.forEach
  //   const placeCards = () => {
  //     servantCards.forEach((cards) => {
  //       return `<img src="${cards}" class="class-card" alt="Card">`;
  //     });
  //   };
  //   console.log(servantCards);
  //
  //   const rarity = () => {
  //     for (let i = 0; i <= servantRarity; i++) {
  //       return `<div class="rarity"></div>`;
  //     }
  //   };
  //   console.log(servantAscImg);

  //   const generateAscBtn = function () {
  //     const servantAscLength = Object.keys(servantAscImg).length;
  //     for (let i = 0; i <= servantAscLength; i++) {
  //       const ascNum =
  //         i == 1 ? `${i}st` : i == 2 ? `${i}nd` : i == 3 ? `${i}rd` : `${i}th`;
  //       if (i == 1) {
  //         return `
  //             <label class="asc-opt" for="${ascNum}-Asc" >
  //                     <input type="radio" id="${ascNum}-Asc" name="ascensions" class="asc-Radio" checked>${ascNum}</input>
  //                   </label>
  //                   `;
  //       } else {
  //         return `
  //             <label class="asc-opt" for="${ascNum}-Asc" >
  //                     <input type="radio" id="${ascNum}-Asc" name="ascensions" class="asc-Radio" >${ascNum}</input>
  //                   </label>
  //                   `;
  //       }
  //     }
  //   };

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
          <div id="modals-ascension" class="modals-column" >
          
            <!--  <img src="${`changeServantPic()`}" alt="${servantName}" >-->
            <!-- Ascension -->

            <div id="ascension">
            <!-- INSERT RADIO HERE--->
            </div>
            <span>Ascensions</span>
          </div>
          <div id="modals-info-wrapper">
  
            <!-- Info Column -->
            <div id="modals-info" class="modals-column">
              <table class="modals-table" >
                <tr>
                  <td colspan="2" class="modals-info-bold">
                    <div class="rarity-stars clipshadow" id="servantRarity">
                   
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
                  <td colspan="2" class="modals-info-bold" id="servantCards">
                  
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

export const changeAscPic = function (
  servantName,
  portraitElem,
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
    if (firstAsc_.checked) {
      portraitElem.src = beastpic;
      //   console.log(beastpic);
    }
  } else {
    if (firstAsc_.checked) {
      portraitElem.src = a1;
      //   portraitElem.insertAdjacentHTML(
      //     "afterbegin",
      //     `<img src="${a1}" alt="${servantName}" ></img>`
      //   );
    } else if (secondAsc_.checked) {
      portraitElem.src = a2;
      //   portraitElem.insertAdjacentHTML(
      //     "afterbegin",
      //     `<img src="${a2}" alt="${servantName}" ></img>`
      //   );
    } else if (thirdAsc_.checked) {
      portraitElem.src = a3;
      //   portraitElem.insertAdjacentHTML(
      //     "afterbegin",
      //     `<img src="${a3}" alt="${servantName}" ></img>`
      //   );
    } else if (fourthAsc_.checked) {
      portraitElem.src = a4;
      //   portraitElem.insertAdjacentHTML(
      //     "afterbegin",
      //     `<img src="${a4}" alt="${servantName}" ></img>`
      //   );
    }
  }
};

export const getSkills = function (skillArr, skillElem) {
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

export const getNP = function (np, sNPFace, npElem) {
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

      checkIfImageExists(icon, function (isIMG) {
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
              ${
                isIMG
                  ? `<img src="${icon}" alt="${name}" class="np-icon">`
                  : `<p class="np-NA">Icon not available</p>`
              } 
              
              <img src="./images/NP-Cards/${card}-np.png" class="np-bg" alt="skill-NP">
            </div>
          </td>
          <td class="modals-info-reg">
            <span class="modals-info-bold">${name}</span>
            <p>${detail}</p>
          </td>
        </tr>`
        );
      });
    });
  }
};

export const placeCards = (cCards, cardElem) => {
  cCards.forEach((cards) => {
    cardElem.insertAdjacentHTML(
      "afterbegin",
      `<img src="./images/cards/${cards}-card.png" class="class-card" alt="Card">`
    );
  });
};

export const rarity = (rarity, rElem) => {
  for (let i = 0; i < rarity; i++) {
    rElem.insertAdjacentHTML("afterbegin", `<div class="rarity"></div>`);
  }
};

export const generateAscBtn = function (sAsc, sAscElem) {
  const servantAscLength = Object.keys(sAsc).length;
  for (let i = 1; i <= servantAscLength; i++) {
    const ascNum =
      i == 1 ? `${i}st` : i == 2 ? `${i}nd` : i == 3 ? `${i}rd` : `${i}th`;

    sAscElem.insertAdjacentHTML(
      "beforeend",
      `
      <input type="radio" id="${ascNum}-Asc" name="ascensions" class="asc-Radio" ></input>
        <label class="asc-opt" for="${ascNum}-Asc" >${ascNum}</label>
              
              `
    );
    //   }
  }
};

const checkIfImageExists = function (url, callback) {
  const img = new Image();

  img.src = url;

  if (img.complete) {
    callback(true);
  } else {
    img.onload = () => {
      callback(true);
    };
    img.onerror = () => {
      callback(false);
    };
  }
};

const renderIMG = function (isIMGExist, url) {
  if (!isIMGExist) {
    return `<p>Icon Not Available</p>`;
  } else {
    return `<p>Icon Not Available</p>`;
  }
};
