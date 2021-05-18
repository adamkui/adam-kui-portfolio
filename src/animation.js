export const introAnim = {
    hidden: {opacity: 0, scale: .8},
    show: {
        opacity: 1,
        scale: 1,
        transition: {
            duration: 0.3,
            delay: 0.3,
            ease: "easeOut"
        }
    }
}

export const btnAnim = {
    hidden: {opacity: 0, scale: .8},
    show: {
        opacity: 1,
        scale: 1,
        transition: {
            duration: 0.15,
            delay: 0.25,
            ease: "easeInOut"
        }
    }
}

export const titleAnim = {
    hidden: {x: -500, opacity: 0},
    show: {
        x: 0,
        opacity: 1,
        transition: {
            duration: 0.75,
            ease: "easeOut"
        }
    }
};

export const titleAnimRight = {
    hidden: {x: 500, opacity: 0},
    show: {
        x: 0,
        opacity: 1,
        transition: {
            duration: 0.75,
            ease: "easeOut"
        }
    }
};

export const subTitleAnim = {
    hidden: {x: -500, opacity: 0},
    show: {
        x: 0,
        opacity: 1,
        transition: {
            delay: .2,
            duration: 0.75,
            ease: "easeOut"
        }
    }
};

export const delayedTitleAnim = {
    hidden: {x: -500, opacity: 0},
    show: {
        x: 0,
        opacity: 1,
        transition: {
            delay: .6,
            duration: 0.75,
            ease: "easeOut"
        }
    }
};

export const fadeIn = {
    hidden: {opacity: 0},
    show: {
        opacity: 1,
        transition: {
            delay: .4,
            duration: 0.75,
            ease: "easeOut"
        }
    }
}

export const delayedFadeIn = {
    hidden: {opacity: 0},
    show: {
        opacity: 1,
        transition: {
            delay: 1,
            duration: 0.75,
            ease: "easeOut"
        }
    }
}

export const fadeInList = {
    hidden: {opacity: 0},
    show: {
        opacity: 1,
        transition: {
            delay: 1,
            duration: 0.75,
            ease: "easeOut",
            staggerChildren: 0.25
        }
    }
}

export const fadeInListNoDelay = {
    hidden: {opacity: 0},
    show: {
        opacity: 1,
        transition: {
            delay: 0,
            duration: 0.75,
            ease: "easeOut",
            staggerChildren: 0.15
        }
    }
}

export const fadeInListLong = {
    hidden: {opacity: 0},
    show: {
        opacity: 1,
        transition: {
            delay: 1,
            duration: 0.75,
            ease: "easeOut",
            staggerChildren: 0.75
        }
    }
}

export const fadeInListItem = {
    hidden: {opacity: 0, y: -120},
    show: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.5,
            ease: "easeOut",
        }
    }
}

export const fadeInListItemShort = {
    hidden: {opacity: 0, y: -120},
    show: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.15,
            ease: "easeOut",
        }
    }
}

export const zoomOut = {
    hidden: {scale: 1.5, opacity: 0},
    show: {
        scale: 1,
        opacity: 1,
        transition: {
            delay: .4,
            duration: 0.75,
            ease: "easeOut"
        }
    }
}

export const swimInRight = {
    hidden: {opacity: 0, x: 1000},
    show: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 0.75,
            ease: "easeOut",
        }
    }
}

export const swimInUp = {
    hidden: {opacity: 0, y: 500},
    show: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.75,
            ease: "easeOut",
        }
    }
}