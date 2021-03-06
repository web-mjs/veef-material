export const switchStyle = `
.switch-thumb-under {
  left: -14px;
  right: initial;
  top: -17px;
  width: 48px;
  height: 48px;
}
.native-input{
  width: 64px;
  height: 48px;
}
.switch {
  display: inline-block;
  position: relative;
  outline: none;
  user-select: none;
}
.switch.switch-checked .switch-track {
  background-color: var(--theme-secondary, #018786);
}
.switch.switch-checked .switch-thumb {
  background-color: var(--mdc-theme-secondary, #018786);
  border-color: var(--theme-secondary, #018786);
}
.switch:not(.switch-checked) .switch-track {
  background-color: var(--mdc-theme-on-surface, #000);
}
.switch:not(.switch-checked) .switch-thumb {
  background-color: #fff;
  /* @alternate */
  background-color: var(--mdc-theme-surface, #fff);
  border-color: #fff;
  /* @alternate */
  border-color: var(--mdc-theme-surface, #fff);
}
.native-input {
  left: 0;
  right: initial;
  position: absolute;
  top: 0;
  margin: 0;
  opacity: 0;
  cursor: pointer;
  pointer-events: auto;
  transition: transform 90ms cubic-bezier(0.4, 0, 0.2, 1);
}

.switch-track {
  box-sizing: border-box;
  width: 36px;
  height: 14px;
  border: 1px solid transparent;
  border-radius: 7px;
  opacity: 0.38;
  transition: opacity 90ms cubic-bezier(0.4, 0, 0.2, 1), background-color 90ms cubic-bezier(0.4, 0, 0.2, 1), border-color 90ms cubic-bezier(0.4, 0, 0.2, 1);
}

.switch-thumb-under {
  display: flex;
  position: absolute;
  align-items: center;
  justify-content: center;
  transform: translateX(0);
  transition: transform 90ms cubic-bezier(0.4, 0, 0.2, 1), background-color 90ms cubic-bezier(0.4, 0, 0.2, 1), border-color 90ms cubic-bezier(0.4, 0, 0.2, 1);
}

.switch-thumb {
  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);
  box-sizing: border-box;
  width: 20px;
  height: 20px;
  border: 10px solid;
  border-radius: 50%;
  pointer-events: none;
  z-index: 1;
}
.switch.switch-checked .switch-track {
  opacity: 0.54;
}
.switch.switch-checked .switch-thumb-under {
  transform: translateX(16px);
}
.switch.switch-checked .native-input {
  transform: translateX(-16px);
}
.switch-disabled {
  opacity: 0.38;
  pointer-events: none;
}
.switch-disabled .switch-thumb {
  border-width: 1px;
}
.switch-disabled .native-input {
  cursor: default;
  pointer-events: none;
}
:host {
  display: inline-flex;
  outline: none;
  -webkit-tap-highlight-color: transparent;
}
`;

export const checkboxStyle = `
.mdc-checkbox{
	width: 40px;
	height: 40px;
	position: relative;
	display: inline-block;
}
.mdc-checkbox .native{
	padding: 0;
	margin: 0;
	width: 100%;
	height: 100%;
	border: 0;
	outline: 0;
	opacity: 0;
	cursor: pointer;
}
.bg{
	background: #fff;
	position: absolute;
	inset: 10px;
	border: 2px solid #eee;
	border-color: var(--unchecked, rgba(0, 0, 0, 0.54));
	border-radius: 2px;
	transition:  border-color 90ms ease-in-out 0ms, background-color 90ms ease-in-out 0ms;
	z-index: -1;
}
.native:checked ~ .bg{
	background: #018786;
	border-color: #018786;
}
.check-svg{
	color: #fff;
}
.check-path{
    stroke: currentColor;
    stroke-width: 3.12px;
	stroke-dashoffset: var(--offset, 29.7833);
    stroke-dasharray: 29.7833;
	transition: stroke-dashoffset 180ms cubic-bezier(0.4, 0, 0.6, 1) 0ms;
}
.check-path.no-trans{
	transition: none;
}
`;
