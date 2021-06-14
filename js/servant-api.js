"use strict";
import * as card from "./servant-card.js";
import * as create from "./modals.js";

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
};

export const allServant = async function () {
  try {
    const response = await fetch(
      `https://api.atlasacademy.io/export/NA/nice_servant_lore.json`
    );
    const resJSON = await response.json();
    card.displayServant(resJSON);
    // resJSON.forEach((element, i) => {
    //   // if (i < 20) {
    //   const {
    //     name: sName,
    //     gender: sGender,
    //     className: sClass,
    //     rarity: sRarity,
    //     lvMax: sMaxlvl,
    //     attribute: sAttribute,
    //     collectionNo: sID,
    //     atkBase: sATKBase,
    //     atkMax: sATKMax,
    //     hpBase: sHPBase,
    //     hpMax: sHPMax,
    //     type: sType,
    //     cards: sCards,
    //     extraAssets: {
    //       charaGraph: {
    //         ascension: sAssension,
    //         ascension: {
    //           0: nonServant,
    //           1: firstAsc,
    //           2: secondAsc,
    //           3: thirdAsc,
    //           4: fourthAsc,
    //         },
    //       },
    //       commands: sCommands,
    //     },
    //     skills: sSKills,
    //     classPassive: sPassive,
    //     noblePhantasms: sNP,
    //     profile: {
    //       cv: sVA,
    //       illustrator: sIllu,
    //       stats: {
    //         strength: sStr,
    //         agility: sAgi,
    //         endurance: sEndu,
    //         luck: sLuck,
    //         magic: sMagic,
    //         np: sStatNP,
    //       },
    //     },
    //   } = element;

    //   const isNonServant = function () {
    //     if (sType == "enemyCollectionDetail") {
    //       return nonServant;
    //     } else {
    //       return firstAsc;
    //     }
    //   };
    //   const isNonClass = function () {
    //     if (sClass == "grandCaster") {
    //       return "caster";
    //     } else {
    //       return sClass;
    //     }
    //   };

    //   // card.generateServantElement(
    //   //   sRarity,
    //   //   isNonServant(),
    //   //   sName,
    //   //   isNonClass(),
    //   //   sSKills,
    //   //   sPassive,
    //   //   sType,
    //   //   sAssension,
    //   //   create.createModal(
    //   //     sName,
    //   //     sGender,
    //   //     sClass,
    //   //     sType,
    //   //     sMaxlvl,
    //   //     sAttribute,
    //   //     sID,
    //   //     sATKBase,
    //   //     sATKMax,
    //   //     sHPBase,
    //   //     sHPMax,
    //   //     sVA,
    //   //     sIllu,
    //   //     sStr,
    //   //     sAgi,
    //   //     sLuck,
    //   //     sEndu,
    //   //     sMagic,
    //   //     sStatNP
    //   //   ),
    //   //   sNP,
    //   //   sCommands,
    //   //   sCards
    //   // );
    //   console.log(element);
    //   // console.log(sRarity, firstAsc, sName, sClass);
    //   // window.addEventListener("load", function () {
    //   // const loading = document.querySelector(".servant-load");
    //   // loading.classList.add("hideMe");
    //   // });
    //   // } //
    // });
  } catch (err) {
    console.error(err);
  }
};
