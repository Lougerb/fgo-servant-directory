"use strict";
import * as card from "./servant-card.js";
import * as create from "./modals.js";
import * as nav from "./nav.js";
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

    // console.log(_servantData);
  } catch (err) {
    console.error(err);
  }
};

export const allServant = async function (isSelected) {
  if (isSelected == true) {
    try {
      const response = await fetch(
        `https://api.atlasacademy.io/export/NA/nice_servant_lore.json`
      );
      const resJSON = await response.json();

      // Display Servant
      card.displayServant(resJSON);

      // Nav Function
      const servantAll = document.querySelectorAll(".servant-wrapper");
      const servantName = document.querySelectorAll(".servant-name");
      nav.filterServants(servantAll, servantName);
      // console.log(servantAll);
    } catch (err) {
      console.error(err);
    }
  } else {
    console.log("All not selected");
  }
};
