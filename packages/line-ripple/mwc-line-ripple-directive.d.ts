import { MDCLineRippleFoundation } from '@material/line-ripple/foundation';
import { PropertyPart } from 'lit-html';
export interface LineRipple extends HTMLElement {
    lineRippleFoundation: MDCLineRippleFoundation;
}
export declare const lineRipple: () => (part: PropertyPart) => void;
