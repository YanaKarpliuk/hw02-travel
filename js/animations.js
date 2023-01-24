window.addEventListener('load', function () {
  let animating = false;
  const airplane = document.querySelector('.js-airplane');

  function startAnimation() {
    if (animating) return;

    animating = true;
    airplane.classList.add('hero__images-plane_animated');
  }
  
  function endAnimation() {
    animating = false;
    airplane.classList.remove('hero__images-plane_animated');
  }
  
  airplane.addEventListener('mouseover', startAnimation);
  airplane.addEventListener('animationend', endAnimation);
})