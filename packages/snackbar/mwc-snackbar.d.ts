import { SnackbarBase } from './mwc-snackbar-base';
declare global {
    interface HTMLElementTagNameMap {
        'mwc-snackbar': Snackbar;
    }
}
export declare class Snackbar extends SnackbarBase {
    static styles: import("lit-element").CSSResult;
}
