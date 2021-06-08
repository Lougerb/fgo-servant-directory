"use strict";

const generateServantElement=function(rarity,servantPic,servantName,servantClass){
    
    return `
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
      </div>
`};

const getServant;