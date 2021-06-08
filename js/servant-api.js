"use strict";

const generateServantElement = function (
  rarity,
  servantPic,
  servantName,
  servantClass
) {
  const servantsWrapper = document.getElementById("servants");
  servantsWrapper.insertAdjacentHTML(
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
  //   const servantHTML =  `
  //     <div class="servant-card">
  //         <div class="servant-border">
  //           <img
  //             src="./images/servant-border/servant_card_0${rarity}.png"
  //             alt="${rarity} Star Border"
  //           />
  //         </div>
  //         <div class="servant-picture">
  //           <img src="${servantPic}" alt="${servantName}" />
  //         </div>
  //         <div class="servant-title">
  //           <div class="servant-title-text">
  //             <div class="servant-name">${servantName}</div>
  //           </div>
  //           <div class="servant-class-ico">
  //             <img src="./images/class-ico/${servantClass}-ico.png" alt="${servantClass}" />
  //           </div>
  //         </div>
  //       </div>
  // `;
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
      `https://api.atlasacademy.io/export/NA/nice_servant.json`
    );
    const resJSON = await response.json();
    resJSON.forEach((element) => {
      const {
        name: sName,
        className: sClass,
        rarity: sRarity,
        type: sType,
        extraAssets: {
          charaGraph: {
            ascension: {
              0: nonServant,
              1: firstAsc,
              2: secondAsc,
              3: thirdAsc,
              4: fourthAsc,
            },
          },
        },
      } = element;

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
      generateServantElement(sRarity, isNonServant(), sName, isNonClass());
      // console.log(element);
      // console.log(sRarity, firstAsc, sName, sClass);
    });
  } catch (err) {
    console.error(err);
  }
};

// export const testMe = function () {
//   console.log("Hello Test");
// };
