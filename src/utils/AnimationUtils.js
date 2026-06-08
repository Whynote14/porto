import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

/**
 * Cinematic reveal animation for text and elements
 */
export const createCinematicReveal = (element, options = {}) => {
  const defaults = {
    duration: 1.2,
    delay: 0,
    stagger: 0.1,
    ease: 'power4.out',
  };

  const config = { ...defaults, ...options };

  return gsap.to(element, {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    duration: config.duration,
    delay: config.delay,
    stagger: config.stagger,
    ease: config.ease,
  });
};

/**
 * Glassmorphism floating animation
 */
export const createFloatingAnimation = (element, options = {}) => {
  const defaults = {
    duration: 3,
    yAmount: 15,
    ease: 'sine.inOut',
    repeat: -1,
  };

  const config = { ...defaults, ...options };

  return gsap.to(element, {
    y: -config.yAmount,
    duration: config.duration,
    ease: config.ease,
    repeat: config.repeat,
    yoyo: true,
  });
};

/**
 * Parallax effect for hero section
 */
export const createParallaxEffect = (element, speed = 0.5) => {
  gsap.registerPlugin(ScrollTrigger);

  gsap.to(element, {
    y: window.innerHeight * speed,
    scrollTrigger: {
      trigger: element,
      start: 'top center',
      end: 'bottom center',
      scrub: 0.5,
      markers: false,
    },
  });
};

/**
 * Glow pulse animation for cards
 */
export const createGlowPulse = (element, options = {}) => {
  const defaults = {
    duration: 2,
    intensity: 1,
    ease: 'sine.inOut',
  };

  const config = { ...defaults, ...options };

  return gsap.to(element, {
    boxShadow: `0 0 ${30 * config.intensity}px rgba(56, 189, 248, 0.6), 0 0 ${60 * config.intensity}px rgba(139, 92, 246, 0.3)`,
    duration: config.duration,
    ease: config.ease,
    repeat: -1,
    yoyo: true,
  });
};

/**
 * Scroll triggered scale animation
 */
export const createScrollScale = (element, options = {}) => {
  const defaults = {
    startScale: 0.8,
    endScale: 1,
    duration: 0.8,
  };

  const config = { ...defaults, ...options };

  gsap.set(element, { scale: config.startScale, opacity: 0 });

  gsap.to(element, {
    scale: config.endScale,
    opacity: 1,
    duration: config.duration,
    ease: 'power3.out',
    scrollTrigger: {
      trigger: element,
      start: 'top 80%',
      end: 'top 20%',
      scrub: 0.5,
      markers: false,
    },
  });
};

/**
 * Text line reveal animation
 */
export const createLineReveal = (element, options = {}) => {
  const defaults = {
    duration: 1,
    delay: 0,
    stagger: 0.15,
    ease: 'power4.out',
  };

  const config = { ...defaults, ...options };

  const lines = element.querySelectorAll('span, p, h1, h2, h3, h4, h5, h6');

  return gsap.from(lines, {
    opacity: 0,
    y: 30,
    filter: 'blur(10px)',
    duration: config.duration,
    delay: config.delay,
    stagger: config.stagger,
    ease: config.ease,
  });
};

/**
 * Staggered card entrance
 */
export const createCardStagger = (cards, options = {}) => {
  const defaults = {
    duration: 0.8,
    stagger: 0.15,
    ease: 'back.out',
  };

  const config = { ...defaults, ...options };

  return gsap.from(cards, {
    opacity: 0,
    y: 50,
    filter: 'blur(10px)',
    duration: config.duration,
    stagger: config.stagger,
    ease: config.ease,
  });
};

/**
 * Hover glow effect
 */
export const createHoverGlow = (element) => {
  element.addEventListener('mouseenter', () => {
    gsap.to(element, {
      boxShadow: '0 0 40px rgba(56, 189, 248, 0.8), 0 0 80px rgba(139, 92, 246, 0.5)',
      duration: 0.3,
      ease: 'power2.out',
    });
  });

  element.addEventListener('mouseleave', () => {
    gsap.to(element, {
      boxShadow: 'var(--shadow)',
      duration: 0.3,
      ease: 'power2.out',
    });
  });
};

/**
 * Morphing shape animation
 */
export const createMorphing = (element, options = {}) => {
  const defaults = {
    duration: 3,
    ease: 'sine.inOut',
  };

  const config = { ...defaults, ...options };

  return gsap.to(element, {
    borderRadius: ['50%', '30%', '50%'],
    duration: config.duration,
    ease: config.ease,
    repeat: -1,
  });
};

export default {
  createCinematicReveal,
  createFloatingAnimation,
  createParallaxEffect,
  createGlowPulse,
  createScrollScale,
  createLineReveal,
  createCardStagger,
  createHoverGlow,
  createMorphing,
};
