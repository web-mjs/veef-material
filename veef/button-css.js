export const buttonStyle = `
:host {
    --mdc-ripple-focus-opacity: 0.24;
    --mdc-ripple-hover-opacity: 0.08;
    --mdc-ripple-press-opacity: 0.24;
    --mdc-ripple-color: #fff;
    outline: 0;
    vertical-align: top;
    display: inline-flex;
}
:host([light]) {
    --mdc-ripple-color: var(--theme-primary, #6200ee);
    --mdc-ripple-focus-opacity: 0.1;
    --mdc-ripple-press-opacity: 0.1;
}

.btn {
    color: #fff;
    background: var(--theme-primary, #6200ee);
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
.btn.light {
	border: var(--btn-light-border, 1px solid rgba(0, 0, 0, 0.12));
	background: var(--var-light-bg, #fff);
	color: var(--theme-primary, #6200ee);
}
.btn.borderless{
	border: 0 !important;
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
