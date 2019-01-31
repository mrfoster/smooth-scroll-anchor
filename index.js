// IE11/Edge scrollIntoView polyfill
import * as smoothscroll from "smoothscroll-polyfill";
smoothscroll.polyfill();

type Block = "start" | "center" | "end" | "nearest";
const smoothScroll = (e: Event, element: Element, block: Block = "center") => {
  e.preventDefault();
  // Native modern functionality with IE11 support in a basic way, via polyfill
  console.log(block);
  element.scrollIntoView({
    behavior: "smooth",
    block
  });
};
// Loop over anchor links
const anchorLinks = document.querySelectorAll('[href^="#"]:not([href="#"]');
for (var i = 0; i < anchorLinks.length; i++) {
  anchorLinks[i].addEventListener("click", e => {
    // Grab the href and thence the targetted element
    const targetSelector = (<HTMLElement>e.target).getAttribute("href") || "",
      target = document.querySelector(targetSelector);
    if (target) {
      smoothScroll(e, target);
    }
  });
}