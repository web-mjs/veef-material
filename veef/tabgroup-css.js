export const tabGroupStyle = `
.mdc-tab-bar {
    flex: 1 1 0%;
}
.mdc-tab-bar {
    width: 100%;
}
.mdc-tab-scroller {
    flex: 1 1 0%;
}
.scr-wrap {
   display: flex;
}
.mdc-tab-scroller {
    overflow-y: hidden;
}
.mdc-tab-scroller {
    flex: 1 1 0%;
}
.mdc-tab-scroller {
    overflow-y: hidden;
}

.mdc-tab-scroller__scroll-area {
    display: flex;
    overflow-x: hidden;
}

.mdc-tab-scroller__scroll-content {
    position: relative;
    display: flex;
    flex: 1 0 auto;
    transform: none;
    will-change: transform;
}
`;

export const tabStyle = `
:host{
    outline: none;
    flex: 1 0 auto;
    display: flex;
    justify-content: center;
    -webkit-tap-highlight-color: transparent;
}
.mdc-tab {
    height: var(--mdc-tab-height, 48px);
    margin-left: 0px;
    margin-right: 0px;
    padding-right: var(--mdc-tab-horizontal-padding, 24px);
    padding-left: var(--mdc-tab-horizontal-padding, 24px);
}
.mdc-tab {
    --mdc-ripple-fg-size: 0;
    --mdc-ripple-left: 0;
    --mdc-ripple-top: 0;
    --mdc-ripple-fg-scale: 1;
    --mdc-ripple-fg-translate-end: 0;
    --mdc-ripple-fg-translate-start: 0;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
}
.mdc-tab {
    min-width: 90px;
    padding: 0px 24px;
    display: flex;
    flex: 1 0 auto;
    justify-content: center;
    box-sizing: border-box;
    margin: 0px;
    border: none;
    background: none;
    text-align: center;
    white-space: nowrap;
    cursor: pointer;
    appearance: none;
    z-index: 1;
}
.mdc-tab:focus {
   outline: none;
   background: var(--focus-color, #6200ee10);
}
.mdc-tab.mdc-tab--active:focus {
    background: none;
}
.mdc-tab {
    -webkit-font-smoothing: antialiased;
    font-family: var(--vfont, -apple-system, BlinkMacSystemFont, "Segoe UI", "Liberation Sans", sans-serif);
    font-size: var(--mdc-typography-button-font-size, 0.875rem);
    line-height: var(--mdc-typography-button-line-height, 2.25rem);
    font-weight: var(--mdc-typography-button-font-weight, 500);
    letter-spacing: var(--mdc-typography-button-letter-spacing, 0.0892857em);
    text-decoration: var(--mdc-typography-button-text-decoration, none);
    text-transform: var(--mdc-typography-button-text-transform, uppercase);
    position: relative;
}
.mdc-tab__content {
    display: flex;
    align-items: center;
    justify-content: center;
    height: inherit;
    pointer-events: none;
}
.mdc-tab__content {
    position: relative;
}
.mdc-tab--active .mdc-tab__text-label, .mdc-tab--active .mdc-tab__icon {
    transition-delay: 100ms;
}

.mdc-tab .mdc-tab__text-label {
    color: rgba(0, 0, 0, 0.6);
}
.mdc-tab__text-label {
    transition: color 150ms linear 0s;
    display: inline-block;
    line-height: 1;
    z-index: 2;
}

.mdc-tab--active .mdc-tab__text-label{
    color: var(--mdc-theme-primary, #6200ee);
}

.mdc-tab-indicator {
    display: flex;
    position: absolute;
    top: 0px;
    left: 0px;
    justify-content: center;
    width: 100%;
    height: 100%;
    pointer-events: none;
    z-index: 1;
}
.mdc-tab-indicator .mdc-tab-indicator__content--underline{
   border-top: 2px solid var(--mdc-theme-primary, #6200ee);
   opacity: 0;
   transform-origin: left center;
   align-self: flex-end;
   box-sizing: border-box;
   width: 100%;
    transform: translateX(var(--tranX, 0px));
}
.transition-cls{
    transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1) 0s;
}

.mdc-tab-indicator--active .mdc-tab-indicator__content {
    opacity: 1;
}
`;
