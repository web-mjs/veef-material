import { BaseElement } from '@material/mwc-base/base-element';
import { RippleInterface } from '@material/mwc-base/utils';
import { MDCRippleAdapter } from '@material/ripple/adapter';
import MDCRippleFoundation from '@material/ripple/foundation';
import { PropertyValues, TemplateResult } from 'lit-element';
/** @soyCompatible */
export declare class RippleBase extends BaseElement implements RippleInterface {
    mdcRoot: HTMLElement;
    primary: boolean;
    accent: boolean;
    unbounded: boolean;
    disabled: boolean;
    activated: boolean;
    selected: boolean;
    protected hovering: boolean;
    protected bgFocused: boolean;
    protected fgActivation: boolean;
    protected fgDeactivation: boolean;
    protected fgScale: string;
    protected fgSize: string;
    protected translateStart: string;
    protected translateEnd: string;
    protected leftPos: string;
    protected topPos: string;
    protected mdcFoundationClass: typeof MDCRippleFoundation;
    protected mdcFoundation: MDCRippleFoundation;
    get isActive(): boolean;
    createAdapter(): MDCRippleAdapter;
    startPress(ev?: Event): void;
    endPress(): void;
    startFocus(): void;
    endFocus(): void;
    startHover(): void;
    endHover(): void;
    /**
     * Wait for the MDCFoundation to be created by `firstUpdated`
     */
    protected waitForFoundation(fn: () => void): void;
    protected update(changedProperties: PropertyValues<this>): void;
    /** @soyTemplate */
    protected render(): TemplateResult;
}
