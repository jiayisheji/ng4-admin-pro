import { OverlayRef } from '../overlay-ref';

/**
 * Describes a strategy that will be used by an overlay to handle scroll events while it is open.
 */
export interface ScrollStrategy {
    /** Enable this scroll strategy (called when the attached overlay is attached to a portal). */
    enable: () => void;

    /** Disable this scroll strategy (called when the attached overlay is detached from a portal). */
    disable: () => void;

    /** Attaches this `ScrollStrategy` to an overlay. */
    attach: (overlayRef: OverlayRef) => void;
}

/**
 * Returns an error to be thrown when attempting to attach an already-attached scroll strategy.
 */
export function getMatScrollStrategyAlreadyAttachedError(): Error {
    return Error(`Scroll strategy has already been attached.`);
}
