// ==UserScript==
// @name     F-List+
// @version  0.1
// @grant    none
// @match https://www.f-list.net/c/*
// ==/UserScript==

var name = window.location.href.substring(window.location.href.lastIndexOf('/c/') + 3)
console.log(name);
var charActionMenu = document.getElementById("Character_InfoBox")
            .querySelector(".charactionmenu")
console.log(charActionMenu);

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
