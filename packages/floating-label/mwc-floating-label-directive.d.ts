import { MDCFloatingLabelFoundation } from '@material/floating-label/foundation';
import { PropertyPart } from 'lit-html';
export interface FloatingLabel extends HTMLLabelElement {
    floatingLabelFoundation: MDCFloatingLabelFoundation;
}
export declare const floatingLabel: (label: string) => (part: PropertyPart) => void;
