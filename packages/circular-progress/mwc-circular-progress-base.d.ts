import { LitElement, TemplateResult } from 'lit-element';
/** @soyCompatible */
export declare class CircularProgressBase extends LitElement {
    indeterminate: boolean;
    progress: number;
    density: number;
    closed: boolean;
    /** @soyPrefixAttribute */
    ariaLabel?: string;
    open(): void;
    close(): void;
    /**
     * @soyTemplate
     */
    protected render(): TemplateResult;
    /**
     * @soyTemplate
     */
    protected renderDeterminateContainer(): TemplateResult;
    /**
     * @soyTemplate
     */
    protected renderIndeterminateContainer(): TemplateResult;
    /**
     * @soyTemplate
     */
    protected renderIndeterminateSpinnerLayer(): TemplateResult;
    update(changedProperties: Map<string, string>): void;
}
