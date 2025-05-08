// ==UserScript==
// @name         Remove Sidebar from Fandom Wiki
// @namespace    http://tampermonkey.net/
// @version      2025-05-08
// @description  paired with other installed userscripts to remove fandom wiki sidebar
// @author       Om Duggineni
// @match        https://*.fandom.com/*
// @match        https://fandom.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=fandom.com
// @homepage     https://github.com/omduggineni/BrowserScripts
// @source       https://github.com/omduggineni/BrowserScripts
// @grant        MIT
// ==/UserScript==

(function() {
    'use strict';

    let elementsRemoved = [
        "aside.page__right-rail",
        "div.sign-in",
        "div.global-top-navigation__action-wrapper",
        "span.wds-avatar",
        "div.wds-avatar",
    ]

    document.querySelectorAll(".has-right-rail").forEach((e) => {
        e.classList.remove("has-right-rail");
    });

    elementsRemoved.forEach((e) => {
        document.querySelectorAll(e).forEach((el) => {
            el.remove();
        });
    });

    let styleInject = "<style> .wds-avatar { display: none !important; } </style>";
    let style = document.createElement("style");
    style.setAttribute("type", "text/css");
    style.appendChild(document.createTextNode(styleInject));
    document.head.appendChild(style);
})();
