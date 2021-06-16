import { FormfieldBase } from './mwc-formfield-base';
declare global {
    interface HTMLElementTagNameMap {
        'mwc-formfield': Formfield;
    }
}
export declare class Formfield extends FormfieldBase {
    static styles: import("lit-element").CSSResult;
}
