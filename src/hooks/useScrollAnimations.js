import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

/**
 * Hook untuk reveal animations saat scroll
 */
export const useScrollReveal = (options = {}) => {
  const ref = useRef();

  useEffect(() => {
    if (!ref.current) return;

    const defaults = {
      duration: 0.8,
      delay: 0,
      distance: 50,
      ease: 'power3.out',
      once: false,
    };

    const config = { ...defaults, ...options };

    gsap.from(ref.current, {
      scrollTrigger: {
        trigger: ref.current,
        start: 'top 80%',
        end: 'top 20%',
        scrub: 0.5,
        markers: false,
        once: config.once,
      },
      opacity: 0,
      y: config.distance,
      filter: 'blur(10px)',
      duration: config.duration,
      delay: config.delay,
      ease: config.ease,
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, [options]);

  return ref;
};

/**
 * Hook untuk stagger animations on scroll
 */
export const useStaggerReveal = (options = {}) => {
  const containerRef = useRef();

  useEffect(() => {
    if (!containerRef.current) return;

    const defaults = {
      duration: 0.6,
      stagger: 0.1,
      delay: 0,
      distance: 40,
      ease: 'power3.out',
    };

    const config = { ...defaults, ...options };
    const children = containerRef.current.querySelectorAll('[data-stagger]');

    gsap.from(children, {
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top 75%',
        end: 'top 25%',
        scrub: 0.5,
        markers: false,
      },
      opacity: 0,
      y: config.distance,
      filter: 'blur(8px)',
      duration: config.duration,
      stagger: config.stagger,
      delay: config.delay,
      ease: config.ease,
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, [options]);

  return containerRef;
};

/**
 * Hook untuk parallax effect
 */
export const useParallax = (speed = 0.5) => {
  const ref = useRef();

  useEffect(() => {
    if (!ref.current) return;

    gsap.to(ref.current, {
      y: window.innerHeight * speed,
      scrollTrigger: {
        trigger: ref.current,
        start: 'top center',
        end: 'bottom center',
        scrub: 0.5,
        markers: false,
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, [speed]);

  return ref;
};

/**
 * Hook untuk text line reveal animation
 */
export const useLineReveal = (options = {}) => {
  const ref = useRef();

  useEffect(() => {
    if (!ref.current) return;

    const defaults = {
      duration: 0.8,
      stagger: 0.1,
      delay: 0,
      ease: 'power4.out',
    };

    const config = { ...defaults, ...options };
    const lines = ref.current.querySelectorAll('span, p, h1, h2, h3, h4, h5, h6');

    if (lines.length === 0) return;

    gsap.from(lines, {
      opacity: 0,
      y: 20,
      filter: 'blur(8px)',
      duration: config.duration,
      stagger: config.stagger,
      delay: config.delay,
      ease: config.ease,
    });
  }, [options]);

  return ref;
};

export default {
  useScrollReveal,
  useStaggerReveal,
  useParallax,
  useLineReveal,
};
