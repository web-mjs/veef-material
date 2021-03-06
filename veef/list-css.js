export const listCss = `
:host{
display: block;
}
.mdc-deprecated-list {
    -webkit-font-smoothing: antialiased;
    font-family: var(--mdc-typography-subtitle1-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));
    font-size: var(--mdc-typography-subtitle1-font-size, 1rem);
    font-weight: var(--mdc-typography-subtitle1-font-weight, 400);
    letter-spacing: var(--mdc-typography-subtitle1-letter-spacing, 0.009375em);
    text-decoration: var(--mdc-typography-subtitle1-text-decoration, inherit);
    text-transform: var(--mdc-typography-subtitle1-text-transform, inherit);
    line-height: 1.5rem;
    margin: 0px;
    list-style-type: none;
    color: var(--mdc-theme-text-primary-on-background, rgba(0, 0, 0, 0.87));
    padding: var(--mdc-list-vertical-padding, 8px) 0;
}
`;
export const listItemCss = `
:host{
    cursor: pointer;
    user-select: none;
    -webkit-tap-highlight-color: transparent;
    display: flex;
    position: relative;
    align-items: center;
    justify-content: flex-start;
    overflow: hidden;
    padding-top: 0px;
    padding-bottom: 0px;
    padding-left: var(--mdc-list-side-padding, 16px);
    padding-right: var(--mdc-list-side-padding, 16px);
    outline: none;
    height: 48px;
    color: var(--mdc-theme-text-primary-on-background, rgba(0, 0, 0, 0.87));
}
:host([graphic="medium"]:not([twoline])), :host([graphic="large"]:not([twoline])) {
    height: 72px;
}
:host([graphic="avatar"]:not([twoline])), :host([graphic="icon"]:not([twoline])) {
    height: 56px;
}
:host([graphic="large"]) {
    padding-left: 0px;
}
.mdc-deprecated-list-item__graphic {
    flex-shrink: 0;
    align-items: center;
    justify-content: center;
    fill: currentcolor;
    display: inline-flex;
}
:host([twoline]) {
    height: 72px;
}
:host([disabled]), :host([noninteractive]) {
    cursor: default;
    pointer-events: none;
}
:host([graphic="icon"]) .mdc-deprecated-list-item__graphic {
    width: var(--mdc-list-item-graphic-size, 24px);
    height: var(--mdc-list-item-graphic-size, 24px);
    margin-left: 0px;
    margin-right: var(--mdc-list-item-graphic-margin, 32px);
}
:host([graphic="avatar"]) .mdc-deprecated-list-item__graphic, :host([graphic="medium"]) .mdc-deprecated-list-item__graphic, :host([graphic="large"]) .mdc-deprecated-list-item__graphic, :host([graphic="control"]) .mdc-deprecated-list-item__graphic {
    margin-left: 0px;
    margin-right: var(--mdc-list-item-graphic-margin, 16px);
}
:host([graphic="avatar"]) .mdc-deprecated-list-item__graphic {
    width: var(--mdc-list-item-graphic-size, 40px);
    height: var(--mdc-list-item-graphic-size, 40px);
}
:host([graphic="medium"]) .mdc-deprecated-list-item__graphic, :host([graphic="large"]) .mdc-deprecated-list-item__graphic{
	width: var(--mdc-list-item-graphic-size, 56px);
    height: var(--mdc-list-item-graphic-size, 56px);
}

:host([disabled]), :host([noninteractive]) {
    cursor: default;
    pointer-events: none;
}
:host([twoline]) .mdc-deprecated-list-item__text {
    align-self: flex-start;
}
.mdc-deprecated-list-item__text {
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
}
.mdc-deprecated-list-item__meta {
    width: var(--mdc-list-item-meta-size, 24px);
    height: var(--mdc-list-item-meta-size, 24px);
    margin-left: auto;
    margin-right: 0px;
    color: var(--mdc-theme-text-hint-on-background, rgba(0, 0, 0, 0.38));
}
.mdc-deprecated-list-item__primary-text {
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    margin-top: 0px;
    line-height: normal;
    margin-bottom: -20px;
    display: block;
}
.mdc-deprecated-list-item__primary-text::before {
    display: inline-block;
    width: 0px;
    height: 32px;
    content: "";
    vertical-align: 0px;
}
.mdc-deprecated-list-item__primary-text::after {
    display: inline-block;
    width: 0px;
    height: 20px;
    content: "";
    vertical-align: -20px;
}
.mdc-deprecated-list-item__secondary-text {
    -webkit-font-smoothing: antialiased;
    font-family: var(--mdc-typography-body2-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));
    font-size: var(--mdc-typography-body2-font-size, 0.875rem);
    font-weight: var(--mdc-typography-body2-font-weight, 400);
    letter-spacing: var(--mdc-typography-body2-letter-spacing, 0.0178571em);
    text-decoration: var(--mdc-typography-body2-text-decoration, inherit);
    text-transform: var(--mdc-typography-body2-text-transform, inherit);
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    margin-top: 0px;
    line-height: normal;
    display: block;
}
.mdc-deprecated-list-item__secondary-text::before {
    display: inline-block;
    width: 0px;
    height: 20px;
    content: "";
    vertical-align: 0px;
}
.mdc-deprecated-list-item__meta ::slotted(.material-icons), .mdc-deprecated-list-item__meta ::slotted(mwc-icon) {
    line-height: var(--mdc-list-item-meta-size, 24px) !important;
}
.mdc-deprecated-list-item__meta ::slotted(*) {
    width: 100%;
    height: 100%;
}
.mdc-deprecated-list-item__meta ::slotted(*) {
    width: var(--mdc-list-item-meta-size, 24px);
    line-height: var(--mdc-list-item-meta-size, 24px);
}
.mdc-deprecated-list-item__graphic ::slotted(*) {
    background-color: transparent;
    color: var(--mdc-theme-text-icon-on-background, rgba(0, 0, 0, 0.38));
}
.mdc-deprecated-list-item__secondary-text ::slotted(*) {
    color: var(--mdc-theme-text-secondary-on-background, rgba(0, 0, 0, 0.54));
}
`;

