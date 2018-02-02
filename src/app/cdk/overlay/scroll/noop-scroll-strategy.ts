import { ScrollStrategy } from './scroll-strategy';

/** Scroll strategy that doesn't do anything. */
export class NoopScrollStrategy implements ScrollStrategy {
    /** Does nothing, as this scroll strategy is a no-op. */
    enable() { }
    /** Does nothing, as this scroll strategy is a no-op. */
    disable() { }
    /** Does nothing, as this scroll strategy is a no-op. */
    attach() { }
}
