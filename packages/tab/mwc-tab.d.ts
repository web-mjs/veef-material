import { TabBase } from './mwc-tab-base';
export { TabInteractionEventDetail } from './mwc-tab-base';
declare global {
    interface HTMLElementTagNameMap {
        'mwc-tab': Tab;
    }
}
export declare class Tab extends TabBase {
    static styles: import("lit-element").CSSResult;
}
