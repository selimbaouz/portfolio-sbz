import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

const useMarqueeTextScroll = () => {
  useGSAP(() => {
    let currentSroll = 0;
    let isScrollingDown = true;
    const arrows = document.querySelectorAll(".arrow");
    const tween = gsap.to(".marquee__part", {
      xPercent: -100,
      repeat: -1,
      duration: 10,
      ease: "linear"
    }).totalProgress(0.5);

    gsap.set(".marquee__inner", { xPercent: -50 });

    window.addEventListener("scroll", function() {
      if(this.window.scrollY > currentSroll) {
        isScrollingDown = true;
      } else {
        isScrollingDown = false;
      }

      gsap.to(tween, {
        timeScale: isScrollingDown ? 1 : -1,
      });
      
      arrows.forEach((arrow) => {
        if(isScrollingDown) {
          arrow.classList.remove("active");
        } else {
          arrow.classList.add("active");
        }
      });
      
      currentSroll = window.scrollY;
    });
  });
};

export default useMarqueeTextScroll;
