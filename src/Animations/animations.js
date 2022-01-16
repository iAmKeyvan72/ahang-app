export const staggerVariants = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export const navbarItemVariants = {
  initial: {
    x: -100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      delay: 0.2,
    },
  },
  exit: {
    x: -100,
    opacity: 0,
    transition: {
      delay: 0.2,
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

export const mainImageVariants = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      delay: 0.3,
    },
  },
};

export const rowItemsVariants = {
  initial: {
    x: 50,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
  },
  drag: {
    backgroundColor: 'var(--background-700)',
    borderRadius: 10,
    zIndex: 10000,
    boxShadow: '0 3px 20px rgba(0,0,0,.4)',
    scale: 1.1,
  },
};
