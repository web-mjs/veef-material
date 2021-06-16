import { BaseElement } from '@material/mwc-base/base-element';
import { MDCTabScrollerAdapter } from '@material/tab-scroller/adapter';
import MDCTabScrollerFoundation from '@material/tab-scroller/foundation';
export declare class TabScrollerBase extends BaseElement {
    protected mdcFoundation: MDCTabScrollerFoundation;
    protected mdcFoundationClass: typeof MDCTabScrollerFoundation;
    protected mdcRoot: HTMLElement;
    protected scrollAreaElement: HTMLElement;
    protected scrollContentElement: HTMLElement;
    protected _handleInteraction(): void;
    protected _handleTransitionEnd(e: Event): void;
    protected _scrollbarHeight: number;
    protected render(): import("lit-element").TemplateResult;
    protected createAdapter(): MDCTabScrollerAdapter;
    /**
     * Returns the current visual scroll position
     * @return {number}
     */
    getScrollPosition(): number;
    /**
     * Returns the width of the scroll content
     * @return {number}
     */
    getScrollContentWidth(): number;
    /**
     * Increments the scroll value by the given amount
     * @param {number} scrollXIncrement The pixel value by which to increment the
     *     scroll value
     */
    incrementScrollPosition(scrollXIncrement: number): void;
    /**
     * Scrolls to the given pixel position
     * @param {number} scrollX The pixel value to scroll to
     */
    scrollToPosition(scrollX: number): void;
}
