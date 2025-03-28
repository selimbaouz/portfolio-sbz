import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

const useMouseFollower = () => {
  useGSAP(() => {
    const circle = document.querySelector(".circle") as HTMLElement;
    
    const handleMouseMove = (event: MouseEvent) => {
      if (!circle) {
        return;
      }

      gsap.to(circle, {
        x: event.clientX + window.scrollX,
        y: event.clientY + window.scrollY,
        duration: 0.3,
        ease: 'expo.out',
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);
};

export default useMouseFollower;
