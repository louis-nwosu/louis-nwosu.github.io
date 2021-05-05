//animate texts
const animateCSS = (element, animation, prefix = "animate__") => {
  //create and return a promise;
  return new Promise((resolve, reject) => {
    const animationName = `${prefix}${animation}`;
    const node = document.querySelector(element);
    //add the animation to the element
    node.classList.add(`${prefix}animated`, animationName);

    //clean up animation after it ends
    function handleAnimationEnd(event) {
      event.stopPropagation();
      node.classList.remove(`${prefix}animated`, animationName);
      resolve("Animation ended");
    }

    node.addEventListener("animationend", handleAnimationEnd, { once: true });
  });
};

//use the animation function
document
  .querySelector(".my-hi")
  .addEventListener("mouseenter", (e) => animateCSS(".my-hi", "bounce"));

console.log("site has loaded");

//animate the letters
document
  .querySelector("#h")
  .addEventListener("mouseenter", (e) => animateCSS("#h", "rubberBand"));

document
  .querySelector("#i")
  .addEventListener("mouseenter", (e) => animateCSS("#i", "rubberBand"));

document
  .querySelector("#comma")
  .addEventListener("mouseenter", (e) => animateCSS("#comma", "rubberBand"));

document
  .querySelector("#big-i")
  .addEventListener("mouseenter", (e) => animateCSS("#big-i", "rubberBand"));

document
  .querySelector("#hiphen")
  .addEventListener("mouseenter", (e) => animateCSS("#hiphen", "rubberBand"));

document
  .querySelector("#m")
  .addEventListener("mouseenter", (e) => animateCSS("#m", "rubberBand"));

document
  .querySelector("#l")
  .addEventListener("mouseenter", (e) => animateCSS("#l", "rubberBand"));

document
  .querySelector("#o")
  .addEventListener("mouseenter", (e) => animateCSS("#o", "rubberBand"));

document
  .querySelector("#u")
  .addEventListener("mouseenter", (e) => animateCSS("#u", "rubberBand"));

document
  .querySelector("#i-2")
  .addEventListener("mouseenter", (e) => animateCSS("#i-2", "rubberBand"));

document
  .querySelector("#s")
  .addEventListener("mouseenter", (e) => animateCSS("#s", "rubberBand"));

document
  .querySelector("#wobble")
  .addEventListener("mouseenter", (e) => animateCSS("#wobble", "jello"));

document
  .querySelector("#portfolio-hero")
  .addEventListener("mouseenter", (e) =>
    animateCSS("#portfolio-hero", "jello")
  );

document
  .querySelector("#contact-text")
  .addEventListener("mouseenter", (e) => animateCSS("#contact-text", "jello"));


