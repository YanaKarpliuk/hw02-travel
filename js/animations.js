window.addEventListener("load", function () {
  const plane2 = document.querySelector(".js-plane_2");
  const plane1 = document.querySelector(".js-plane_1");

  function startAnimation(plane) {
    plane.classList.add("hero__images-plane_animated");
  }

  function endAnimation(plane) {
    plane.classList.remove("hero__images-plane_animated");
  }

  plane1.addEventListener("mouseover", () => startAnimation(plane1));
  plane1.addEventListener("animationend", () => endAnimation(plane1));

  plane2.addEventListener("mouseover", () => startAnimation(plane2));
  plane2.addEventListener("animationend", () => endAnimation(plane2));
});
