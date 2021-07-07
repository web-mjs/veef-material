const textFieldStyle = `
:host {
    display: inline-flex;
    flex-direction: column;
    outline: none;
}
:host(:not([disabled])) .mdc-text-field:not(.mdc-text-field--outlined) {
    background-color: var(--mdc-text-field-fill-color,whitesmoke);
}

.mdc-text-field--filled:not(.mdc-text-field--disabled) {
    background-color: #f5f5f5;
}
.mdc-text-field {
    width: 100%;
}
.mdc-text-field--filled {
    height: 56px;
}
.mdc-text-field {
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
.mdc-text-field--outlined {
    padding-right: max(16px, var(--mdc-shape-small, 4px));
}
.mdc-text-field--outlined {
    padding-left: max(16px, calc(var(--mdc-shape-small, 4px) + 4px));
}
.mdc-text-field--outlined {
    height: 56px;
    overflow: visible;
}

.mdc-text-field--filled {
    --mdc-ripple-fg-size: 0;
    --mdc-ripple-left: 0;
    --mdc-ripple-top: 0;
    --mdc-ripple-fg-scale: 1;
    --mdc-ripple-fg-translate-end: 0;
    --mdc-ripple-fg-translate-start: 0;
    -webkit-tap-highlight-color: rgba(0,0,0,0);
    will-change: transform,opacity;
}
.mdc-text-field--filled::before {
    display: inline-block;
    width: 0;
    height: 40px;
    content: "";
    vertical-align: 0;
}
.mdc-text-field__ripple {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
}
.mdc-text-field--filled .mdc-text-field__ripple::before, .mdc-text-field--filled .mdc-text-field__ripple::after {
    background-color: var(--mdc-ripple-color,rgba(0,0,0,0.87));
}
.mdc-text-field--filled .mdc-text-field__ripple::before, .mdc-text-field--filled .mdc-text-field__ripple::after {
    top: calc(50% - 100%);
    left: calc(50% - 100%);
    width: 200%;
    height: 200%;
}
.mdc-text-field--filled .mdc-text-field__ripple::before {
    transition: opacity 15ms linear,background-color 15ms linear;
    z-index: var(--mdc-ripple-z-index,1);
}
.mdc-text-field--filled .mdc-text-field__ripple::before, .mdc-text-field--filled .mdc-text-field__ripple::after {
    position: absolute;
    border-radius: 50%;
    opacity: 0;
    pointer-events: none;
    content: "";
}
.mdc-text-field--filled .mdc-text-field__ripple::before, .mdc-text-field--filled .mdc-text-field__ripple::after {
    background-color: var(--mdc-ripple-color,rgba(0,0,0,0.87));
}
.mdc-text-field--filled .mdc-text-field__ripple::before, .mdc-text-field--filled .mdc-text-field__ripple::after {
    top: calc(50% - 100%);
    left: calc(50% - 100%);
    width: 200%;
    height: 200%;
}
.mdc-text-field--filled .mdc-text-field__ripple::after {
    z-index: var(--mdc-ripple-z-index,0);
}
.mdc-text-field--filled .mdc-text-field__ripple::before, .mdc-text-field--filled .mdc-text-field__ripple::after {
    position: absolute;
    border-radius: 50%;
    opacity: 0;
    pointer-events: none;
    content: "";
}
:host(:not([disabled])) .mdc-text-field:not(.mdc-text-field--invalid):not(.mdc-text-field--focused) .mdc-floating-label, :host(:not([disabled])) .mdc-text-field:not(.mdc-text-field--invalid):not(.mdc-text-field--focused) .mdc-floating-label::after {
    color: var(--mdc-text-field-label-ink-color,rgba(0,0,0,0.6));
}
.mdc-text-field:not(.mdc-text-field--disabled) .mdc-floating-label {
    color: rgba(0,0,0,0.6);
}
.mdc-text-field--filled .mdc-floating-label {
    left: 16px;
    right: initial;
}
.mdc-floating-label {
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    font-family: var(--mdc-typography-subtitle1-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));
    font-size: var(--mdc-typography-subtitle1-font-size,1rem);
    font-weight: var(--mdc-typography-subtitle1-font-weight,400);
    letter-spacing: var(--mdc-typography-subtitle1-letter-spacing,0.009375em);
    text-decoration: var(--mdc-typography-subtitle1-text-decoration,inherit);
    text-transform: var(--mdc-typography-subtitle1-text-transform,inherit);
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
.mdc-text-field .mdc-floating-label {
    top: 50%;
    transform: translateY(-50%);
    pointer-events: none;
}
.mdc-text-field--filled .mdc-floating-label {
    left: 16px;
    right: initial;
}
.mdc-floating-label--float-above {
    transform: translateY(-106%) scale(0.75);
}

:host(:not([disabled])) .mdc-text-field .mdc-text-field__input{
    color: var(--mdc-text-field-ink-color,rgba(0,0,0,0.87));
}
.mdc-text-field:not(.mdc-text-field--disabled) .mdc-text-field__input {
    color: rgba(0,0,0,0.87);
}
.mdc-text-field .mdc-text-field__input {
    caret-color: var(--mdc-theme-primary,#6200ee);
}
.mdc-text-field__input {
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    font-family: var(--mdc-typography-subtitle1-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));
    font-size: var(--mdc-typography-subtitle1-font-size,1rem);
    font-weight: var(--mdc-typography-subtitle1-font-weight,400);
    letter-spacing: var(--mdc-typography-subtitle1-letter-spacing,0.009375em);
    text-decoration: var(--mdc-typography-subtitle1-text-decoration,inherit);
    text-transform: var(--mdc-typography-subtitle1-text-transform,inherit);
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
.mdc-text-field:not(.mdc-text-field--disabled) .mdc-line-ripple::before {
    border-bottom-color: var(--mdc-text-field-idle-line-color,rgba(0,0,0,0.42));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-line-ripple::before {
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
.mdc-text-field--filled .mdc-line-ripple::after {
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
:host(:not([disabled])) .mdc-text-field.mdc-text-field--focused:not(.mdc-text-field--invalid) .mdc-floating-label {
    color: #6200ee;
    color: var(--mdc-theme-primary,#6200ee);
}
.mdc-text-field--focused:not(.mdc-text-field--disabled) .mdc-floating-label {
    color: rgba(98,0,238,0.87);
}
.mdc-text-field:not(.mdc-text-field--disabled) .mdc-floating-label {
    color: rgba(0,0,0,0.6);
}
.mdc-text-field--filled .mdc-floating-label--float-above {
    transform: translateY(-106%) scale(0.75);
}
.mdc-text-field--filled .mdc-floating-label {
    left: 16px;
    right: initial;
}
.mdc-floating-label--float-above {
    transform: translateY(-106%) scale(0.75);
}
.mdc-floating-label--float-above {
    cursor: auto;
}
.mdc-text-field__input:focus {
    outline: none;
}
.mdc-text-field--outlined .mdc-text-field__input {
    display: flex;
    background-color: transparent;
    border: none !important;
}
.mdc-text-field--outlined .mdc-text-field__input {
    height: 100%;
}
.mdc-text-field--outlined .mdc-floating-label {
    left: 4px;
    right: initial;
}
.mdc-text-field--outlined .mdc-floating-label--float-above {
    font-size: 0.75rem;
}
.mdc-text-field--outlined .mdc-floating-label--float-above {
    transform: translateY(-37.25px) scale(1);
}
`;
export { textFieldStyle };
