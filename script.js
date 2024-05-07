const lenis = new Lenis();

lenis.on("scroll", (e) => {
  console.log(e);
});

lenis.on("scroll", ScrollTrigger.update);

gsap.ticker.add((time) => {
  lenis.raf(time * 1000);
});

gsap.ticker.lagSmoothing(0);



// LOADER START HERE
const Loadertimeline = gsap.timeline();
Loadertimeline.to(".loader-text span", {
  y: 100,
  stagger: 0.05,
  duration: 2,
  delay: 1,
  ease: "expo.inOut",
  // skewX: 50,
});

Loadertimeline.to(".loader", {
  height: 0,
  duration: 1,
  delay: -1.3,
  ease: "expo.inOut",
});

Loadertimeline.to(".loader-sec", {
  height: 0,
  duration: 1,
  delay: -1,
  ease: "expo.inOut",
});

Loadertimeline.to(".loader-sec-1", {
  height: 0,
  duration: 1,
  delay: -0.90,
  ease: "expo.inOut",
});



// LOADER END HERE 

// //  NAV START HERE
document.addEventListener("DOMContentLoaded", function () {
  let activeItemIndicator = CSSRulePlugin.getRule(".menu-item p#active::after");
  const toggleButton = document.querySelector(".burger");
  let isOpen = false;

  gsap.set(".menu-item p", { y: 225 });

  const timeline = gsap.timeline({ paused: true });

  timeline.to(".overlay", {
    duration: 1.5,
    clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
    ease: "power4.inOut",
  });

  timeline.to(
    ".menu-item p",
    {
      duration: 1.5,
      y: 0,
      stagger: 0.2,
      ease: "power4.out",
    },
    "-=1"
  );

  timeline.to(
    activeItemIndicator,
    {
      width: "100%",
      duration: 1,
      ease: "power4.out",
      delay: 0.5,
    },
    "<"
  );

  timeline.to(
    ".sub-nav",
    {
      bottom: "10%",
      opacity: 1,
      duration: 0.5,
      delay: 0.5,
    },
    "<"
  );

  toggleButton.addEventListener("click", function () {
    if (isOpen) {
      timeline.reverse();
    } else {
      timeline.play();
    }
    isOpen = !isOpen;
  });
});
//     //  NAV END HERE

const cursor = document.querySelector(".cursor");

// Event listener for mousemove
window.addEventListener("mousemove", function (dets) {
  gsap.to(cursor, {
    x: dets.clientX,
    y: dets.clientY,
    duration: 0.5,
    ease: "expo",
  });
});

// Example placeholder for scroll event handling
window.addEventListener("scroll", function () {});

// MOUSE INNER TEXT START
gsap.to(".cur-txt", {
  x: "-100%",
  duration: 2,
  repeat: -1,
  ease: "none",
});

// Function to update all boxes' text content
function updateCurTxt(text) {
  document.querySelectorAll(".cur-txt").forEach((box) => {
    box.textContent = text;
  });
}

// Mouse enter event for elm1
document
  .querySelector(".home-sec-one-wrap")
  .addEventListener("mouseenter", () => {
    updateCurTxt("SCROLL DOWN - "); // Update text to "SHOWREEL"

    gsap.to(cursor, {
      scale: 6,
      duration: 0.5,
      height:10,
      // mixBlendMode: "difference", // Change mix-blend-mode
      borderRadius:"2rem"
    });
  });

document
  .querySelector(".home-sec-one-wrap")
  .addEventListener("mouseleave", () => {
    updateCurTxt(""); // Update text to "SHOWREEL"

    gsap.to(cursor, {
      scale: 1,
      duration: 0.5,
      ease: "power1",
      height:"2rem",
      borderRadius:"50%",
      mixBlendMode: "normal",
    });
  });


document
  .querySelector(".home-sec-three-video a")
  .addEventListener("mouseenter", () => {
    updateCurTxt("STUDIO REEL -"); // Update text to "SHOWREEL"

    gsap.to(cursor, {
      scale: 6,
      duration: 0.5,
      height:10,
      // mixBlendMode: "difference", // Change mix-blend-mode
      borderRadius:"2rem"
    });
  });

document
  .querySelector(".home-sec-three-video a")
  .addEventListener("mouseleave", () => {
    updateCurTxt(""); // Update text to "SHOWREEL"

     gsap.to(cursor, {
      scale: 1,
      duration: 0.5,
      ease: "power1",
      height:"2rem",
      borderRadius:"50%",
      mixBlendMode: "normal",
    });
  });

// MOUSE INNER TEXT END



// Additional cursor animation and style change for cursorMask
const cursorMaskElems = document.querySelectorAll(".cursorMask");

cursorMaskElems.forEach(function (cursorHoverMask) {
  cursorHoverMask.addEventListener("mouseenter", function (dets) {
    gsap.to(cursor, {
      scale: 6,
      mixBlendMode: "difference", // Change mix-blend-mode
    });
  });

  cursorHoverMask.addEventListener("mouseleave", function (dets) {
    gsap.to(cursor, {
      scale: 1,
      mixBlendMode: "normal", // Change mix-blend-mode
    });
  });
});

const cursorSmallElems = document.querySelectorAll(".cursorSmall");

cursorSmallElems.forEach(function (cursorHoverSmall) {
  cursorHoverSmall.addEventListener("mouseenter", function (dets) {
    gsap.to(cursor, {
      scale: 0.5,
      mixBlendMode: "difference", // Change mix-blend-mode
    });
  });

  cursorHoverSmall.addEventListener("mouseleave", function (dets) {
    gsap.to(cursor, {
      scale: 1,
      mixBlendMode: "normal", // Change mix-blend-mode
    });
  });
});

// HOME SECTION ONE START HERE

const homeSecOneWrap = document.querySelector(".home-sec-one-wrap");
const hs1Img2 = document.querySelectorAll(".home-sec-one-col-2");
const hs1Img1 = document.querySelectorAll(".home-sec-one-col-1");
// gsap.to(hs1Img1,{y:-645, repeat:-1, duration:5, ease: "none"})
// gsap.from(hs1Img2,{y:-645, repeat:-1, duration:8, ease: "none"})

gsap.to(homeSecOneWrap, {
  scale: 1.5,
  rotateY: 20,
  skewX: -2,
  scrollTrigger: {
    trigger: homeSecOneWrap,
    start: "top top",
    end: "200%",
    pin: true,
    scrub: 1,
    // markers:true
  },
});

gsap.to(hs1Img1, {
  y: -2545,
  duration: 100,
  ease: "none",
  // repeat: 3,
  scrollTrigger: {
    trigger: hs1Img1,
    start: "-100",
    end: "790%",
    scrub: 1,
    // markers: true
  },
});

gsap.from(hs1Img2, {
  y: -645,
  duration: 0.005,
  ease: "none",
  // repeat: 4,
  scrollTrigger: {
    trigger: hs1Img2,
    start: "-100",
    end: "790%",
    scrub: 1,
    // markers: true
  },
});



// HOME SECTION ONE END HERE

// HOME SECTION TWO START HERE
gsap.registerPlugin(ScrollTrigger);

// Select the element you want to animate
const homeSecTwoWrap = document.querySelector(".home-sec-two-para p");

// Function to apply the skew effect smoothly
function applySkew(skewX) {
  gsap.to(homeSecTwoWrap, { skewX: skewX, duration: 2, ease: "power1.Inout" });
}

// Calculate scroll speed based on deltaY
let lastScrollY = window.scrollY;
let scrollSpeed = 0;

function calculateScrollSpeed() {
  const currentScrollY = window.scrollY;
  scrollSpeed = currentScrollY - lastScrollY;
  lastScrollY = currentScrollY;
}

// Setup ScrollTrigger for skew animations
ScrollTrigger.create({
  trigger: homeSecTwoWrap,
  start: "top bottom",
  end: "bottom top",
  scrub: true,
  onUpdate: (self) => {
    calculateScrollSpeed();
    if (scrollSpeed > 20) {
      applySkew(20);
    } else if (scrollSpeed < -20) {
      applySkew(-20);
    } else if (scrollSpeed !== 0) {
      // If scrolling but not fast
      applySkew(scrollSpeed / 1); // Adjust skew proportionally to the scroll speed
    }
  },
});

// Reset skew when scrolling stops
let scrollTimeout;
window.addEventListener(
  "scroll",
  () => {
    clearTimeout(scrollTimeout);
    scrollTimeout = setTimeout(() => {
      applySkew(0);
    }, 150); // Reset skew after 150ms of no scrolling
  },
  { passive: true }
);

// HOME SECTION TWO END HERE

// HOME SECTION THREE START HERE
const homeSecThreeWrap = document.querySelector(".home-sec-three-wrap");
const homeSecThreeVid = document.querySelector(".home-sec-three-video");

gsap.to(homeSecThreeWrap, {
  y: -200,
  duration: 10,
  scrollTrigger: {
    trigger: homeSecThreeWrap,
    start: "-100%",
    end: "bottom bottom",
    // markers:true,
    scrub: true,
  },
});

gsap.from(homeSecThreeVid, {
  rotateZ: 10,
  rotateX: 50,
  opacity: 0.6,
  duration: 50,
  scrollTrigger: {
    trigger: homeSecThreeVid,
    start: "top 40%",
    end: "bottom bottom",
    // markers: true,
    scrub: 2,
  },
});
// HOME SECTION THREE END HERE


// HOME SECTION FIVE START HERE
const textYMove = [-100, 200, -50, 150, -90, 100, -200, 70, -100];
const textRMove = [-10, -20, -50, 50, -90, 100, -40, 70, -100];
const textScale = [2, 2, -1, 4, 2, -1, 2, 1, 3];
const imgYMove = [-10, -200, -50, 150, -90, 100, -200, 70, -100];
const imgRMove = [50, -60, 70, 20, -66, 100, -40, 70, -100];
const sec5Text = document.querySelectorAll(".home-sec-five-text span");
const sec5Img = document.querySelectorAll(".home-sec-five-images span img");
const homeSecFiveWrap = document.querySelectorAll(".home-sec-five-wrap");

ScrollTrigger.create({
  trigger:homeSecFiveWrap,
  start:"top top",
      end:"300%",
      pin:true,
      // markers:true

})

gsap.set(sec5Img,{
  y:"100vh"
})


textYMove.forEach((textmove, index) => {
  gsap.to(sec5Text[index], {
    rotate: textRMove[index],
    y: textmove,
    stagger:3,
    scale:textScale[index],
    duration: 10,
    ease: "power2.inOut",
    scrollTrigger:{
      trigger:sec5Text,
      start:"top top",
      end:"400%",
      scrub:3
    }
  });
});


imgYMove.forEach((imgmove, index) => {
  gsap.to(sec5Img[index], {
    rotate: imgRMove[index],
    y: imgmove,
    scale:1.2,
    duration: 50,
    ease: "power2.inOut",
    delay:-3,
    scrollTrigger:{
      trigger:sec5Img,
      start:"-30%",
      end:"400%",
      scrub:3,
      // markers:true
    }
  });
});


// HOME SECTION FIVE END HERE


// HOME SECTION SIX START HERE
gsap.set(".por-image img",{
  scale:1.1,
  // y:50
})

gsap.to(".por-image img",{
  y:-20,
  // duration:20,
  scrollTrigger:{
    trigger:".work-con",
    start:"top top",
    end:"200% bottom",
    scrub:1,
    // markers:true
  }
})
// HOME SECTION SIX END HERE


// HOME SECTION SEVEN START HERE
document.addEventListener('DOMContentLoaded', function() {
  var teamMembers = document.querySelectorAll('.team-member');

  teamMembers.forEach(function(member) {
      member.addEventListener('mouseover', function() {
        // Apply animation to the hovered element
        gsap.to(member, {
          y: -30
        });

        // Apply blur effect to other elements
        teamMembers.forEach(function(otherMember) {
          if (otherMember !== member) {
            otherMember.classList.add('blur');
          }
        });
      });

      member.addEventListener('mouseout', function() {
        // Remove animation from the hovered element
        gsap.to(member, {
          y: 0
        });

        // Remove blur effect from other elements
        teamMembers.forEach(function(otherMember) {
          otherMember.classList.remove('blur');
        });
      });
  });
});
;

// For each section with class vfx-heading
// For each section with class vfx-heading
document.querySelectorAll(".vfx-heading").forEach((section) => {
  // Animation settings
  gsap.set(section.querySelector("h3"), {
    y: 200,
    skewX: -5,
    skewY: 1,
  });
  
  // Scroll trigger for this section
  gsap.to(section.querySelector("h3"), {
    y: 0,
    skewY: 0,
    skewX: 0,
    duration: 1,
    ease: "power1",
    scrollTrigger: {
      trigger: section,
      start: "top center",
      end: "bottom bottom",
      // markers: true, // Uncomment for debugging
    }
  });
});



// HOME SECTION SEVEN END HERE



// HOME SECTION EIGHT START HERE
const homeSecEightWrap = document.querySelector(".home-sec-eight-wrap");
const hs8Img2 = document.querySelectorAll(".home-sec-eight-col-2");
const hs8Img1 = document.querySelectorAll(".home-sec-eight-col-1");
// gsap.to(hs1Img1,{y:-645, repeat:-1, duration:5, ease: "none"})
// gsap.from(hs1Img2,{y:-645, repeat:-1, duration:8, ease: "none"})


gsap.to(hs8Img1, {
  y: -645,
  duration: 100,
  ease: "none",
  // repeat: 2,
  scrollTrigger: {
    trigger: hs8Img1,
    start: "-100",
    end: "790%",
    scrub: 1,
    // markers: true
  },
});

gsap.from(hs8Img2, {
  y: -645,
  duration: 100,
  ease: "none",
  // repeat: 4,
  scrollTrigger: {
    trigger: hs8Img2,
    start: "-100",
    end: "790%",
    scrub: 1,
    // markers: true
  },
});


// HOME SECTION EIGHT END HERE


// HOME SECTION NINE START HERE
gsap.set(".home-sec-nine-heading h3", {
  y: 200,
  skewX: -5,
  skewY: 1,
});

gsap.to(".home-sec-nine-heading h3", {
  y: 0,
  skewY: 0,
  skewX: 0,
  ease: "power1",
  scrollTrigger:{
    trigger:".home-sec-nine-heading",
    start:"top center",
    end:"bottom bottom",
    // markers:true,
  }
});

gsap.set(".home-sec-nine-cli img", {
  y: 200,
  skewX: -5,
  skewY: 1,
});

gsap.to(".home-sec-nine-cli img", {
  y: 0,
  skewY: 0,
  skewX: 0,
  stagger:0.02,
  duration:1,
  ease: "power1",
  scrollTrigger:{
    trigger:".home-sec-nine-cli",
    start:"top center",
    end:"bottom bottom",
    // markers:true,
  }
});
// HOME SECTION NINE END HERE



// BLOG SECTION START HERE

gsap.set(".blog-sec-heading h3", {
  y: 100,
  skewX: -5,
  skewY: 1,
});

gsap.to(".blog-sec-heading h3", {
  y: 0,
  skewY: 0,
  skewX: 0,
  ease: "power1",
  scrollTrigger:{
    trigger:".blog-sec-heading",
    start:"top center",
    end:"bottom bottom",
    // markers:true,
  }
});

document.addEventListener('DOMContentLoaded', function() {
  var blogWrapper = document.querySelectorAll('.blog-sec-iso');
  
  blogWrapper.forEach(function(blOg) {
    blOg.addEventListener('mouseover', function() {
      // Apply blur effect to other elements
      blogWrapper.forEach(function(otherBlog) {
        if (otherBlog !== blOg) {
          otherBlog.classList.add('blur');
        }
      });
    });

      blOg.addEventListener('mouseout', function() {
        blogWrapper.forEach(function(otherBlog) {
          otherBlog.classList.remove('blur');
        });
      });
    });
});
;

// BLOG SECTION END HERE

