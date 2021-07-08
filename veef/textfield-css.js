const textFieldStyle = `
.textfield--outlined .mdc-notched-outline {
    z-index: 1;
}
.mdc-notched-outline {
    display: flex;
    position: absolute;
    top: 0px;
    right: 0px;
    left: 0px;
    box-sizing: border-box;
    width: 100%;
    max-width: 100%;
    height: 100%;
    text-align: left;
    pointer-events: none;
}
mwc-notched-outline {
    --mdc-notched-outline-border-color: var( --textfield-outlined-idle-border-color, rgba(0, 0, 0, 0.38) );
}
.textfield.textfield--focused:not(.textfield--invalid) mwc-notched-outline {
    --mdc-notched-outline-border-color: var( --textfield-focused-label-color, var(--mdc-theme-primary, rgba(98, 0, 238, 0.87)) );
}
.textfield.textfield--focused mwc-notched-outline {
    --mdc-notched-outline-stroke-width: 2px;
}
:host {
    display: inline-flex;
    flex-direction: column;
    outline: none;
}
.textfield:not(.textfield--outlined) {
    background-color: var(--textfield-fill-color,whitesmoke);
}

.textfield--filled:not(.textfield--disabled) {
    background-color: #f5f5f5;
}
.textfield {
    width: 100%;
}
.textfield--filled {
    height: 56px;
}
.textfield {
    border-top-left-radius: 4px;
    border-top-left-radius: var(--mdc-shape-small,4px);
    border-top-right-radius: 4px;
    border-top-right-radius: var(--mdc-shape-small,4px);
    border-bottom-right-radius: 0;
    border-bottom-left-radius: 0;
    display: inline-flex;
    align-items: baseline;
    padding: 0 16px;
    position: relative;
    box-sizing: border-box;
    overflow: hidden;
    will-change: opacity,transform,color;
}
.textfield--outlined {
    padding-right: max(16px, var(--mdc-shape-small, 4px));
}
.textfield--outlined {
    padding-left: max(16px, calc(var(--mdc-shape-small, 4px) + 4px));
}
.textfield--outlined {
    height: 56px;
    overflow: visible;
}

.textfield--filled {
    --mdc-ripple-fg-size: 0;
    --mdc-ripple-left: 0;
    --mdc-ripple-top: 0;
    --mdc-ripple-fg-scale: 1;
    --mdc-ripple-fg-translate-end: 0;
    --mdc-ripple-fg-translate-start: 0;
    -webkit-tap-highlight-color: rgba(0,0,0,0);
    will-change: transform,opacity;
}
.textfield--filled::before {
    display: inline-block;
    width: 0;
    height: 40px;
    content: "";
    vertical-align: 0;
}
.textfield__ripple {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
}
.textfield--filled .textfield__ripple::before, .textfield--filled .textfield__ripple::after {
    background-color: var(--mdc-ripple-color,rgba(0,0,0,0.87));
}
.textfield--filled .textfield__ripple::before, .textfield--filled .textfield__ripple::after {
    top: calc(50% - 100%);
    left: calc(50% - 100%);
    width: 200%;
    height: 200%;
}
.textfield--filled .textfield__ripple::before {
    transition: opacity 15ms linear,background-color 15ms linear;
    z-index: var(--mdc-ripple-z-index,1);
}
.textfield--filled .textfield__ripple::before, .textfield--filled .textfield__ripple::after {
    position: absolute;
    border-radius: 50%;
    opacity: 0;
    pointer-events: none;
    content: "";
}
.textfield--filled .textfield__ripple::before, .textfield--filled .textfield__ripple::after {
    background-color: var(--mdc-ripple-color,rgba(0,0,0,0.87));
}
.textfield--filled .textfield__ripple::before, .textfield--filled .textfield__ripple::after {
    top: calc(50% - 100%);
    left: calc(50% - 100%);
    width: 200%;
    height: 200%;
}
.textfield--filled .textfield__ripple::after {
    z-index: var(--mdc-ripple-z-index,0);
}
.textfield--filled .textfield__ripple::before, .textfield--filled .textfield__ripple::after {
    position: absolute;
    border-radius: 50%;
    opacity: 0;
    pointer-events: none;
    content: "";
}
.textfield:not(.textfield--invalid):not(.textfield--focused) .mdc-floating-label, .textfield:not(.textfield--focused) .mdc-floating-label::after {
    color: var(--textfield-label-ink-color,rgba(0,0,0,0.6));
}
.textfield .mdc-floating-label {
    color: rgba(0,0,0,0.6);
}
.textfield--filled .mdc-floating-label {
    left: 16px;
    right: initial;
}
.mdc-floating-label {
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
	font-family: var(--vfont, -apple-system, BlinkMacSystemFont, "Segoe UI", "Liberation Sans", sans-serif);
    font-size: var(t-1-font-size,1rem);
    font-weight: var(t-1-font-weight,400);
    letter-spacing: var(t-1-letter-spacing,0.009375em);
    text-decoration: var(t-1-text-decoration,inherit);
    text-transform: var(t-1-text-transform,inherit);
    position: absolute;
    left: 0;
    -webkit-transform-origin: left top;
    transform-origin: left top;
    line-height: 1.15rem;
    text-align: left;
    text-overflow: ellipsis;
    white-space: nowrap;
    cursor: text;
    overflow: hidden;
    will-change: transform;
    transition: transform 150ms cubic-bezier(0.4,0,0.2,1),color 150ms cubic-bezier(0.4,0,0.2,1);
}
.textfield--outlined .mdc-floating-label {
    left: 5px;
    right: initial;
	display: inline-block;
    position: relative;
    max-width: 100%;
}
.textfield .mdc-floating-label {
    top: 50%;
    transform: translateY(-50%);
    pointer-events: none;
}
.textfield--filled .mdc-floating-label {
    left: 16px;
    right: initial;
}
.mdc-floating-label--float-above {
    transform: translateY(-106%) scale(0.75);
}

.textfield .textfield__input{
    color: var(--textfield-ink-color,rgba(0,0,0,0.87));
}
.textfield .textfield__input {
    color: rgba(0,0,0,0.87);
}
.textfield .textfield__input {
    caret-color: var(--mdc-theme-primary,#6200ee);
}
.textfield__input {
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
	font-family: var(--vfont, -apple-system, BlinkMacSystemFont, "Segoe UI", "Liberation Sans", sans-serif);
    font-size: var(t-1-font-size,1rem);
    font-weight: var(t-1-font-weight,400);
    letter-spacing: var(t-1-letter-spacing,0.009375em);
    text-decoration: var(t-1-text-decoration,inherit);
    text-transform: var(t-1-text-transform,inherit);
    height: 28px;
    transition: opacity 150ms 0 cubic-bezier(0.4,0,0.2,1);
    width: 100%;
    min-width: 0;
    border: none;
    border-radius: 0;
    background: none;
    appearance: none;
    padding: 0;
}
.textfield .mdc-line-ripple::before {
    border-bottom-color: var(--textfield-idle-line-color,rgba(0,0,0,0.42));
}
.textfield--filled .mdc-line-ripple::before {
    border-bottom-color: rgba(0,0,0,0.42);
}
.mdc-line-ripple::before {
    border-bottom-width: 1px;
    z-index: 1;
}
.mdc-line-ripple::before, .mdc-line-ripple::after {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    border-bottom-style: solid;
    content: "";
}
.textfield--filled .mdc-line-ripple::after {
    border-bottom-color: var(--mdc-theme-primary,#6200ee);
}
.mdc-line-ripple::after {
    transform: scaleX(0);
    border-bottom-width: 2px;
    opacity: 0;
    z-index: 2;
    transition: transform 180ms cubic-bezier(0.4,0,0.2,1),opacity 180ms cubic-bezier(0.4,0,0.2,1);
}
.mdc-line-ripple::before, .mdc-line-ripple::after {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    border-bottom-style: solid;
    content: "";
}
.textfield.textfield--focused:not(.textfield--invalid) .mdc-floating-label {
    color: #6200ee;
    color: var(--mdc-theme-primary,#6200ee);
}
.textfield--focused .mdc-floating-label {
    color: rgba(98,0,238,0.87);
}
.textfield .mdc-floating-label {
    color: rgba(0,0,0,0.6);
}
.textfield--filled .mdc-floating-label--float-above {
    transform: translateY(-106%) scale(0.75);
}
.textfield--filled .mdc-floating-label {
    left: 16px;
    right: initial;
}
.mdc-floating-label--float-above {
    transform: translateY(-106%) scale(0.75);
}
.mdc-floating-label--float-above {
    cursor: auto;
}
.textfield__input:focus {
    outline: none;
}
.textfield--outlined .textfield__input {
    display: flex;
    background-color: transparent;
    border: none !important;
}
.textfield--outlined .textfield__input {
    height: 100%;
}
.textfield--outlined .mdc-floating-label {
    left: 4px;
    right: initial;
}
.textfield--outlined .mdc-floating-label--float-above {
    font-size: 0.75rem;
}
.textfield--outlined .mdc-floating-label--float-above {
    transform: translateY(-37.25px) scale(1);
}
`;
export { textFieldStyle };
