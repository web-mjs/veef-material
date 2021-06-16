import { RadioBase } from './mwc-radio-base';
export { SingleSelectionController } from './single-selection-controller';
declare global {
    interface HTMLElementTagNameMap {
        'mwc-radio': Radio;
    }
}
export declare class Radio extends RadioBase {
    static styles: import("lit-element").CSSResult;
}
