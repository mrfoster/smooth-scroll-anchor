"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
// IE11/Edge scrollIntoView polyfill
var smoothscroll = __importStar(require("smoothscroll-polyfill"));
// const smoothscroll = require("smoothscroll-polyfill");
smoothscroll.polyfill();
exports.smoothScroll = function (e, element, block) {
    if (block === void 0) { block = "center"; }
    e.preventDefault();
    // Native modern functionality with IE11 support in a basic way, via polyfill
    element.scrollIntoView({
        behavior: "smooth",
        block: block
    });
};
// Loop over anchor links
exports.smoothScrollAnchor = function () {
    var anchorLinks = document.querySelectorAll('[href^="#"]:not([href="#"]');
    for (var i = 0; i < anchorLinks.length; i++) {
        anchorLinks[i].addEventListener("click", function (e) {
            // Grab the href and thence the targetted element
            var targetSelector = e.target.getAttribute("href") || "", target = document.querySelector(targetSelector);
            if (target) {
                exports.smoothScroll(e, target);
            }
        });
    }
};