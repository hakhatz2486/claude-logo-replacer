// ==UserScript==
// @name           Claude Logo Replacer
// @name:ja        Claudeのロゴを置き換える
// @namespace      http://tampermonkey.net/
// @version        1.0.1
// @author         hakhatz2486
// @description    This userscript replaces Claude.ai's default logo with Clawd, the character of Claude Code.
// @description:ja ClaudeのロゴをClawd(Claude Codeのキャラクター)に置き換えるユーザースクリプトです。
// @homepageURL    https://github.com/hakhatz2486/claude-logo-replacer
// @supportURL     https://github.com/hakhatz2486/claude-logo-replacer/issues
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

    function replaceLogo() {
        const pathElement = document.querySelector('path[d^="m19.6 66.5"]');
        if (!pathElement) return;

        const originalSvg = pathElement.closest("svg");
        if (!originalSvg || originalSvg.dataset.replaced === "true") return;

        const template = document.createElement("template");
        template.innerHTML = newLogoSvg.trim();
        const newSvgElement = template.content.firstChild;

        if (newSvgElement) {
            newSvgElement.setAttribute(
                "class",
                originalSvg.getAttribute("class") || "",
            );
            newSvgElement.dataset.replaced = "true";
            originalSvg.parentNode.replaceChild(newSvgElement, originalSvg);
        }
    }

    const observer = new MutationObserver(() => {
        replaceLogo();
    });

    observer.observe(document.body, {
        childList: true,
        subtree: true,
    });

    replaceLogo();
})();
