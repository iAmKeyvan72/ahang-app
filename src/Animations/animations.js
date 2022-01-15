export const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export const tileVariants = {
  hover: {
    scale: 1.15,
    zIndex: 2,
    backgroundColor: 'var(--background-700)',
    borderRadius: 10,
    transition: {
      duration: 0.3,
      backgroundColor: {
        duration: 0.2,
      },
    },
  },
  tap: {
    scale: 0.9,
  },
  initial: {
    scale: 0.8,
    opacity: 0,
  },
  animate: {
    scale: 1,
    opacity: 1,
  },
  exit: {
    scale: 0.7,
    opacity: 0,
  },
};
