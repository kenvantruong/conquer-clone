// -----------------------------------------------------------------
// ----------------------- HOME ------------------------------------
// -----------------------------------------------------------------

function smoothScroll(target, duration) {
  var target = document.querySelector(".homeEnd");
  var targetPosition = target.getBoundingClientRect().top;
  var startPosition = window.pageYOffset || window.scrollY;
  var distance = targetPosition - startPosition;
  var startTime = null;

  function loop(currentTime) {
    if (startTime === null) startTime = currentTime;
    var timeElapsed = currentTime - startTime;
    var run = ease(timeElapsed, startPosition, distance, duration);
    window.scrollTo(0, run);
    if (timeElapsed < duration) requestAnimationFrame(loop);
  }
  function ease(t, b, c, d) {
    t /= d / 2;
    if (t < 1) return c / 2 * t * t + b;
    t--;
    return -c / 2 * (t * (t - 2) - 1) + b;
  }
  requestAnimationFrame(loop);
}

//Animating
document.querySelector(".home").addEventListener("click", function(e) {
  e.preventDefault();
  smoothScroll(e.target, 1000);
});

//Animating Second Link
document.querySelector(".homeEnd").addEventListener("click", function(e) {
  e.preventDefault();
  smoothScroll(e.target, 1000);
});


// -----------------------------------------------------------------
// ----------------------- About Us --------------------------------
// -----------------------------------------------------------------

function smoothScrollAboutUs(target, duration) {
  var target = document.querySelector(".aboutUsEnd");
  var targetPosition = target.getBoundingClientRect().top;
  var startPosition = window.pageYOffset || window.scrollY;
  var distance = targetPosition - startPosition;
  var startTime = null;

  function loop(currentTime) {
    if (startTime === null) startTime = currentTime;
    var timeElapsed = currentTime - startTime;
    var run = ease(timeElapsed, startPosition, distance, duration);
    window.scrollTo(0, run);
    if (timeElapsed < duration) requestAnimationFrame(loop);
  }
  function ease(t, b, c, d) {
    t /= d / 2;
    if (t < 1) return c / 2 * t * t + b;
    t--;
    return -c / 2 * (t * (t - 2) - 1) + b;
  }
  requestAnimationFrame(loop);
}

//Animating
document.querySelector(".aboutUs").addEventListener("click", function(e) {
  e.preventDefault();
  smoothScrollAboutUs(e.target, 1000);
});

//Animating Second Link
document.querySelector(".aboutUsEnd").addEventListener("click", function(e) {
  e.preventDefault();
  smoothScrollAboutUs(e.target, 1000);
});


// -----------------------------------------------------------------
// ----------------------- Services --------------------------------
// -----------------------------------------------------------------

function smoothScrollservices(target, duration) {
  var target = document.querySelector(".servicesEnd");
  var targetPosition = target.getBoundingClientRect().top;
  var startPosition = window.pageYOffset || window.scrollY;
  var distance = targetPosition - startPosition;
  var startTime = null;

  function loop(currentTime) {
    if (startTime === null) startTime = currentTime;
    var timeElapsed = currentTime - startTime;
    var run = ease(timeElapsed, startPosition, distance, duration);
    window.scrollTo(0, run);
    if (timeElapsed < duration) requestAnimationFrame(loop);
  }
  function ease(t, b, c, d) {
    t /= d / 2;
    if (t < 1) return c / 2 * t * t + b;
    t--;
    return -c / 2 * (t * (t - 2) - 1) + b;
  }
  requestAnimationFrame(loop);
}

//Animating
document.querySelector(".services").addEventListener("click", function(e) {
  e.preventDefault();
  smoothScrollservices(e.target, 1000);
});

//Animating Second Link
document.querySelector(".servicesEnd").addEventListener("click", function(e) {
  e.preventDefault();
  smoothScrollservices(e.target, 1000);
});


// -----------------------------------------------------------------
// ----------------------- Contact ---------------------------------
// -----------------------------------------------------------------

function smoothScrollcontact(target, duration) {
  var target = document.querySelector(".contactEnd");
  var targetPosition = target.getBoundingClientRect().top;
  var startPosition = window.pageYOffset || window.scrollY;
  var distance = targetPosition - startPosition;
  var startTime = null;

  function loop(currentTime) {
    if (startTime === null) startTime = currentTime;
    var timeElapsed = currentTime - startTime;
    var run = ease(timeElapsed, startPosition, distance, duration);
    window.scrollTo(0, run);
    if (timeElapsed < duration) requestAnimationFrame(loop);
  }
  function ease(t, b, c, d) {
    t /= d / 2;
    if (t < 1) return c / 2 * t * t + b;
    t--;
    return -c / 2 * (t * (t - 2) - 1) + b;
  }
  requestAnimationFrame(loop);
}

//Animating
document.querySelector(".contact").addEventListener("click", function(e) {
  e.preventDefault();
  smoothScrollcontact(e.target, 1000);
});

//Animating Second Link
document.querySelector(".contactEnd").addEventListener("click", function(e) {
  e.preventDefault();
  smoothScrollcontact(e.target, 1000);
});


// -----------------------------------------------------------------
// ----------------------- External --------------------------------
// -----------------------------------------------------------------

function smoothScrollexternal(target, duration) {
  var target = document.querySelector(".externalEnd");
  var targetPosition = target.getBoundingClientRect().top;
  var startPosition = window.pageYOffset || window.scrollY;
  var distance = targetPosition - startPosition;
  var startTime = null;

  function loop(currentTime) {
    if (startTime === null) startTime = currentTime;
    var timeElapsed = currentTime - startTime;
    var run = ease(timeElapsed, startPosition, distance, duration);
    window.scrollTo(0, run);
    if (timeElapsed < duration) requestAnimationFrame(loop);
  }
  function ease(t, b, c, d) {
    t /= d / 2;
    if (t < 1) return c / 2 * t * t + b;
    t--;
    return -c / 2 * (t * (t - 2) - 1) + b;
  }
  requestAnimationFrame(loop);
}

//Animating
document.querySelector(".external").addEventListener("click", function(e) {
  e.preventDefault();
  smoothScrollexternal(e.target, 1000);
});

//Animating Second Link
document.querySelector(".externalEnd").addEventListener("click", function(e) {
  e.preventDefault();
  smoothScrollexternal(e.target, 1000);
});



// -----------------------------------------------------------------
// ----------------------- Scroll Up --------------------------------
// -----------------------------------------------------------------

function smoothScrollscrollUp(target, duration) {
  var target = document.querySelector(".scrollUpEnd");
  var targetPosition = target.getBoundingClientRect().top;
  var startPosition = window.pageYOffset || window.scrollY;
  var distance = targetPosition - startPosition;
  var startTime = null;

  function loop(currentTime) {
    if (startTime === null) startTime = currentTime;
    var timeElapsed = currentTime - startTime;
    var run = ease(timeElapsed, startPosition, distance, duration);
    window.scrollTo(0, run);
    if (timeElapsed < duration) requestAnimationFrame(loop);
  }
  function ease(t, b, c, d) {
    t /= d / 2;
    if (t < 1) return c / 2 * t * t + b;
    t--;
    return -c / 2 * (t * (t - 2) - 1) + b;
  }
  requestAnimationFrame(loop);
}

//Animating
document.querySelector(".scrollUp").addEventListener("click", function(e) {
  e.preventDefault();
  smoothScrollscrollUp(e.target, 1000);
});

//Animating Second Link
document.querySelector(".scrollUpEnd").addEventListener("click", function(e) {
  e.preventDefault();
  smoothScrollscrollUp(e.target, 1000);
});