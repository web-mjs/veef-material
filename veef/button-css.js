export const buttonStyle = `
:host([raised]), :host([unelevated]) {
    --mdc-ripple-color: #fff;
    --mdc-ripple-focus-opacity: 0.24;
    --mdc-ripple-hover-opacity: 0.08;
    --mdc-ripple-press-opacity: 0.24;
    outline: 0;
    vertical-align: top;
    display: inline-flex;
}
.btn {
    color: #fff;
    background: var(--mdc-theme-primary, #6200ee);
    padding-left: 16px;
    padding-right: 16px;
    flex: auto;
    overflow: hidden;
    height: 36px;
    padding-top: 0;
    padding-bottom: 0;
    border: 0;
    box-sizing: border-box;
	font-family: var(--vfont, -apple-system, BlinkMacSystemFont, "Segoe UI", "Liberation Sans", sans-serif);
    border-radius: 4px;
    position: relative;
    display: inline-flex;
    align-items: center;
    min-width: 64px;
    vertical-align: middle;
    cursor: pointer;
}
.btn.raised{
    box-shadow: var(--mdc-button-raised-box-shadow,
    0px 3px 1px -2px rgba(0, 0, 0, 0.2),
    0px 2px 2px 0px rgba(0, 0, 0, 0.14),
    0px 1px 5px 0px rgba(0, 0, 0, 0.12));
}
.label{
    font-size: var(--font-size, 0.875rem);
    letter-spacing: var(--spacing, 0.0892857143em);
    user-select: none;
    -webkit-font-smoothing: antialiased;
    font-weight: 500;
    text-transform: uppercase;
}
`;
