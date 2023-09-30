window.addEventListener("mousemove", function (evt) {
  var rect = document.querySelector(".rect");

  var xval = gsap.utils.mapRange(
    0,
    window.innerWidth,
    100 + rect.getBoundingClientRect().width / 2,
    window.innerWidth - (100 + rect.getBoundingClientRect().width / 2),
    evt.clientX
  );

  gsap.to(".rect", {
    left: xval,
    ease: Power4,
  });
});
