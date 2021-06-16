import { FormElement } from '@material/mwc-base/form-element';
import { MDCSliderAdapter } from '@material/slider/adapter';
import MDCSliderFoundation from '@material/slider/foundation';
import { PropertyValues, TemplateResult } from 'lit-element';
export declare class SliderBase extends FormElement {
    protected mdcFoundation: MDCSliderFoundation;
    protected readonly mdcFoundationClass: typeof MDCSliderFoundation;
    protected mdcRoot: HTMLElement;
    protected formElement: HTMLElement;
    protected thumbContainer: HTMLElement;
    protected pinMarker: HTMLElement;
    min: number;
    max: number;
    protected _value: number;
    set value(value: number);
    get value(): number;
    step: number;
    disabled: boolean;
    pin: boolean;
    markers: boolean;
    protected pinMarkerText: string;
    protected trackMarkerContainerStyles: {};
    protected thumbContainerStyles: {};
    protected trackStyles: {};
    /** @soyPrefixAttribute */
    ariaLabel?: string;
    /** @soyPrefixAttribute */
    ariaLabelledBy?: string;
    protected isFoundationDestroyed: boolean;
    protected render(): TemplateResult;
    connectedCallback(): void;
    updated(changed: PropertyValues): void;
    disconnectedCallback(): void;
    protected createAdapter(): MDCSliderAdapter;
    protected resetFoundation(): void;
    protected firstUpdated(): Promise<void>;
    /**
     * Layout is called on mousedown / touchstart as the dragging animations of
     * slider are calculated based off of the bounding rect which can change
     * between interactions with this component, and this is the only location
     * in the foundation that udpates the rects. e.g. scrolling horizontally
     * causes adverse effects on the bounding rect vs mouse drag / touchmove
     * location.
     */
    layout(): void;
}
