// ==UserScript==
// @name     F-List+
// @author FatCatClient
// @version  1.0
// @grant    none
// @match https://www.f-list.net/*
// ==/UserScript==

function init() {
  var path = window.location.pathname;
  if (path.startsWith("/c/"))
    charPage(
      window.location.href.substring(
        window.location.href.lastIndexOf("/c/") + 3
      )
    );
  else if (path.startsWith("/icons.php")) iconPage();
}

function charPage(name) {
  var charActionMenu = document
    .getElementById("Character_InfoBox")
    .querySelector(".charactionmenu");
  name =  document
  .getElementById("Character_InfoBox")
  .querySelector(".charname").textContent;
  var link = document.createElement("a");
  link.append("F-Status");
  link.href = "https://fstatus.stormweyr.dk/c/" + name;
  link.target = "_blank";
  charActionMenu.append(link);

  link = document.createElement("a");
  link.append("FFA");
  link.href = "https://ffa.e-roplay.de/charsummary/" + name;
  link.target = "_blank";
  charActionMenu.append(link);
}

function iconPage() {
  var observables = document.querySelector("#existingIcons");
  var observer = new MutationObserver(iconPageCallback);
  var targetNode = document.body;

  observer.observe(targetNode, { childList: true, subtree: true });
}

function iconPageCallback(records) {
  records.forEach(function (record) {
    var list = record.addedNodes;
    var i = list.length - 1;

    for (; i > -1; i--) {
      if (list[i].className === "character_image_icon") {
        var eiconName = list[i].querySelector(
          ".character_image_usedby"
        ).textContent;
        var iconElement = list[i].querySelector(
          ".character_image_preview_icon"
        );
        iconElement.onclick = function () {
          navigator.clipboard.writeText("[eicon]" + eiconName + "[/eicon]");
        };
        iconElement.style.cursor = "pointer";
      }
    }
  });
}

init();
