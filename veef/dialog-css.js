export const dialogStyle = `
.mdc-dialog {
    display: none;
    z-index: var(--mdc-dialog-z-index, 7);
}
.mdc-dialog--display {
    display: flex;
}
.mdc-dialog, .mdc-dialog__scrim {
    position: fixed;
    top: 0px;
    left: 0px;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;
    width: 100%;
    height: 100%;
}
.mdc-dialog__scrim {
	background-color: var(--mdc-dialog-scrim-color, rgba(0, 0, 0, 0.32));
	opacity: 0;
	z-index: -1;
  transition: opacity 150ms linear;
}
.mdc-dialog--open .mdc-dialog__scrim {
    opacity: 1;
}
.mdc-dialog--open .mdc-dialog__container {
    transform: none;
    opacity: 1;
}
.mdc-dialog__container {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    box-sizing: border-box;
    height: 100%;
    transform: scale(0.8);
    opacity: 0;
    pointer-events: none;
	  transition: opacity 75ms linear, transform 150ms 0ms cubic-bezier(0, 0, 0.2, 1);
}
.mdc-dialog .mdc-dialog__surface{
    max-height: var(--mdc-dialog-max-height, calc(100% - 32px));
    min-width: var(--mdc-dialog-min-width, 280px);
	max-width: 80vw;
    border-radius: var(--mdc-shape-medium, 4px);
    background-color: var(--mdc-theme-surface, #fff);
    box-shadow: var(--mdc-dialog-box-shadow, 0px 11px 15px -7px rgba(0, 0, 0, 0.2), 0px 24px 38px 3px rgba(0, 0, 0, 0.14), 0px 9px 46px 8px rgba(0, 0, 0, 0.12));
    position: relative;
    box-shadow: rgb(0 0 0 / 20%) 0px 11px 15px -7px, rgb(0 0 0 / 14%) 0px 24px 38px 3px, rgb(0 0 0 / 12%) 0px 9px 46px 8px;
    display: flex;
    flex-direction: column;
    flex-grow: 0;
    flex-shrink: 0;
    box-sizing: border-box;
    pointer-events: auto;
    overflow-y: auto;
}
.mdc-dialog__surface::before {
    position: absolute;
    box-sizing: border-box;
    width: 100%;
    height: 100%;
    top: 0px;
    left: 0px;
    border: 2px solid transparent;
    border-radius: inherit;
    content: "";
    pointer-events: none;
}
.mdc-dialog__title {
    display: block;
    -webkit-font-smoothing: antialiased;
    font-family: var(--mdc-typography-headline6-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));
    font-size: var(--mdc-typography-headline6-font-size, 1.25rem);
    line-height: var(--mdc-typography-headline6-line-height, 2rem);
    font-weight: var(--mdc-typography-headline6-font-weight, 500);
    letter-spacing: var(--mdc-typography-headline6-letter-spacing, 0.0125em);
    text-decoration: var(--mdc-typography-headline6-text-decoration, inherit);
    text-transform: var(--mdc-typography-headline6-text-transform, inherit);
    position: relative;
    flex-shrink: 0;
    box-sizing: border-box;
    margin: 0px 0px 1px;
    padding: 0px 24px 9px;
}
.mdc-dialog__title::before {
    display: inline-block;
    width: 0px;
    height: 40px;
    content: "";
    vertical-align: 0px;
}
.mdc-dialog .mdc-dialog__content{
    -webkit-font-smoothing: antialiased;
    font-family: var(--mdc-typography-body1-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));
    font-size: var(--mdc-typography-body1-font-size, 1rem);
    line-height: var(--mdc-typography-body1-line-height, 1.5rem);
    font-weight: var(--mdc-typography-body1-font-weight, 400);
    letter-spacing: var(--mdc-typography-body1-letter-spacing, 0.03125em);
    text-decoration: var(--mdc-typography-body1-text-decoration, inherit);
    text-transform: var(--mdc-typography-body1-text-transform, inherit);
    flex-grow: 1;
    box-sizing: border-box;
    margin: 0px;
    overflow: auto;
    padding: 20px 24px;
    padding-top: 0px;
}
.mdc-dialog__actions {
    display: flex;
    position: relative;
    flex-shrink: 0;
    flex-wrap: wrap;
    align-items: center;
    justify-content: flex-end;
    box-sizing: border-box;
    min-height: 52px;
    margin: 0px;
    padding: 8px;
    border-top: 1px solid transparent;
}
`;
