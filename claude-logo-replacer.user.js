// ==UserScript==
// @name           Claude Logo Replacer
// @name:ja        Claude Logo Replacer
// @namespace      https://github.com/hakhatz2486/claude-logo-replacer
// @version        1.0.1
// @description    Replace the default Claude.ai logo and favicon with Clawd, the character of Claude Code.
// @description:ja Claude.aiのデフォルトのロゴとファビコンを、Claude CodeのキャラクターであるClawdに置き換えます。
// @author         hakhatz2486
// @homepageURL    https://greasyfork.org/ja/scripts/587693-claude-logo-replacer
// @supportURL     https://github.com/hakhatz2486/claude-logo-replacer/issues
// @downloadURL    https://update.greasyfork.org/scripts/587693/claude-logo-replacer.user.js
// @updateURL      https://update.greasyfork.org/scripts/587693/claude-logo-replacer.meta.js
// @license        MIT
// @icon           https://raw.githubusercontent.com/lobehub/lobe-icons/refs/heads/master/packages/static-png/light/claudecode-color.png
// @match          https://claude.ai/*
// @grant          none
// @run-at         document-end
// ==/UserScript==

(function () {
    "use strict";

    // Clawdの画像
    const newLogoSvg =
        '<svg height="1em" style="flex:none;line-height:1" viewBox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><title>Claude Code</title><path clip-rule="evenodd" d="M20.998 10.949H24v3.102h-3v3.028h-1.487V20H18v-2.921h-1.487V20H15v-2.921H9V20H7.488v-2.921H6V20H4.487v-2.921H3V14.05H0V10.95h3V5h17.998v5.949zM6 10.949h1.488V8.102H6v2.847zm10.51 0H18V8.102h-1.49v2.847z" fill="#D97757" fill-rule="evenodd"></path></svg>';

    const faviconHref = `data:image/svg+xml,${encodeURIComponent(newLogoSvg)}`;
    const logoTemplate = document.createElement("template");
    logoTemplate.innerHTML = newLogoSvg.trim();

    function replaceLogo() {
        const templateSvg = logoTemplate.content.firstElementChild;
        const templatePath = templateSvg?.querySelector("path");
        if (!templateSvg || !templatePath) return;

        document
            .querySelectorAll('path[d^="m19.6 66.5"]')
            .forEach((originalPath) => {
                const originalSvg = originalPath.closest("svg");
                if (!originalSvg) return;

                originalSvg.setAttribute(
                    "viewBox",
                    templateSvg.getAttribute("viewBox"),
                );
                [...templatePath.attributes].forEach(({ name, value }) => {
                    originalPath.setAttribute(name, value);
                });
                originalSvg.dataset.replaced = "true";
            });
    }

    function replaceFavicon() {
        let faviconLinks = document.querySelectorAll('link[rel~="icon"]');

        if (faviconLinks.length === 0) {
            const faviconLink = document.createElement("link");
            faviconLink.rel = "icon";
            document.head.appendChild(faviconLink);
            faviconLinks = [faviconLink];
        }

        faviconLinks.forEach((faviconLink) => {
            faviconLink.type = "image/svg+xml";
            faviconLink.removeAttribute("sizes");

            if (faviconLink.href !== faviconHref) {
                faviconLink.href = faviconHref;
            }
        });
    }

    let replacementScheduled = false;

    function scheduleReplacement() {
        if (replacementScheduled) return;
        replacementScheduled = true;

        requestAnimationFrame(() => {
            replacementScheduled = false;
            replaceLogo();
            replaceFavicon();
        });
    }

    const observer = new MutationObserver(scheduleReplacement);

    observer.observe(document.documentElement, {
        attributes: true,
        attributeFilter: ["href", "rel", "d", "viewBox"],
        childList: true,
        subtree: true,
    });

    replaceLogo();
    replaceFavicon();
})();
