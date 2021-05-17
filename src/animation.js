import { HiScale } from "react-icons/hi";

export const introAnim = {
    hidden: {opacity: 0},
    show: {
        opacity: 1,
        transition: {
            duration: 0.3,
            delay: 0.3,
            ease: "easeOut"
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