/**
@license
Copyright 2018 Google Inc. All Rights Reserved.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/
export const buttonStyle = `
.mdc-touch-target-wrapper {
  display: inline;
}
.mdc-elevation-overlay {
  position: absolute;
  border-radius: inherit;
  pointer-events: none;
  opacity: 0;
  opacity: var(--mdc-elevation-overlay-opacity, 0);
  transition: opacity 280ms cubic-bezier(0.4, 0, 0.2, 1);
  background-color: #fff;
  background-color: var(--mdc-elevation-overlay-color, #fff);
}
.mdc-button {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  font-family: Roboto, sans-serif;
  font-family: var(
    --mdc-typography-button-font-family,
    var(--mdc-typography-font-family, Roboto, sans-serif)
  );
  font-size: 0.875rem;
  font-size: var(--mdc-typography-button-font-size, 0.875rem);
  line-height: 2.25rem;
  line-height: var(--mdc-typography-button-line-height, 2.25rem);
  font-weight: 500;
  font-weight: var(--mdc-typography-button-font-weight, 500);
  letter-spacing: 0.0892857143em;
  letter-spacing: var(--mdc-typography-button-letter-spacing, 0.0892857143em);
  text-decoration: none;
  text-decoration: var(--mdc-typography-button-text-decoration, none);
  text-transform: uppercase;
  text-transform: var(--mdc-typography-button-text-transform, uppercase);
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  min-width: 64px;
  border: none;
  outline: none;
  line-height: inherit;
  user-select: none;
  -webkit-appearance: none;
  overflow: visible;
  vertical-align: middle;
}
.mdc-button .mdc-elevation-overlay {
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
}
.mdc-button::-moz-focus-inner {
  padding: 0;
  border: 0;
}
.mdc-button:active {
  outline: none;
}
.mdc-button:hover {
  cursor: pointer;
}
.mdc-button:disabled {
  cursor: default;
  pointer-events: none;
}
.mdc-button .mdc-button__icon {
  margin-left: 0;
  margin-right: 8px;
  display: inline-block;
  font-size: 1.125rem;
  height: 1.125rem;
  vertical-align: top;
  width: 1.125rem;
}
.mdc-button .mdc-button__touch {
  position: absolute;
  top: 50%;
  right: 0;
  height: 48px;
  left: 0;
  transform: translateY(-50%);
}
.mdc-button__label + .mdc-button__icon {
  margin-left: 8px;
  margin-right: 0;
}
svg.mdc-button__icon {
  fill: currentColor;
}
.mdc-button--raised .mdc-button__icon,
.mdc-button--unelevated .mdc-button__icon,
.mdc-button--outlined .mdc-button__icon {
  margin-left: -4px;
  margin-right: 8px;
}
.mdc-button--raised .mdc-button__label + .mdc-button__icon,
.mdc-button--unelevated .mdc-button__label + .mdc-button__icon,
.mdc-button--outlined .mdc-button__label + .mdc-button__icon {
  margin-left: 8px;
  margin-right: -4px;
}
.mdc-button--touch {
  margin-top: 6px;
  margin-bottom: 6px;
}
.mdc-button--raised {
  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2),
    0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);
  transition: box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mdc-button--raised:hover,
.mdc-button--raised:focus {
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
}
.mdc-button--raised:active {
  box-shadow: 0px 5px 5px -3px rgba(0, 0, 0, 0.2),
    0px 8px 10px 1px rgba(0, 0, 0, 0.14), 0px 3px 14px 2px rgba(0, 0, 0, 0.12);
}
.mdc-button--raised:disabled {
  box-shadow: 0px 0px 0px 0px rgba(0, 0, 0, 0.2),
    0px 0px 0px 0px rgba(0, 0, 0, 0.14), 0px 0px 0px 0px rgba(0, 0, 0, 0.12);
}
.mdc-button--outlined {
  border-style: solid;
}
.mdc-button {
  height: 36px;
  border-radius: 4px;
  border-radius: var(--mdc-shape-small, 4px);
  padding: 0 8px 0 8px;
}
.mdc-button:not(:disabled) {
  background-color: transparent;
}
.mdc-button:disabled {
  background-color: transparent;
}
.mdc-button:not(:disabled) {
  color: #6200ee;
  color: var(--mdc-theme-primary, #6200ee);
}
.mdc-button:disabled {
  color: rgba(0, 0, 0, 0.38);
}
.mdc-button .mdc-button__ripple {
  border-radius: 4px;
  border-radius: var(--mdc-shape-small, 4px);
}
.mdc-button--raised,
.mdc-button--unelevated {
  padding: 0 16px 0 16px;
  height: 36px;
  border-radius: 4px;
  border-radius: var(--mdc-shape-small, 4px);
}
.mdc-button--raised:not(:disabled),
.mdc-button--unelevated:not(:disabled) {
  background-color: #6200ee;
  background-color: var(--mdc-theme-primary, #6200ee);
}
.mdc-button--raised:disabled,
.mdc-button--unelevated:disabled {
  background-color: rgba(0, 0, 0, 0.12);
}
.mdc-button--raised:not(:disabled),
.mdc-button--unelevated:not(:disabled) {
  color: #fff;
  color: var(--mdc-theme-on-primary, #fff);
}
.mdc-button--raised:disabled,
.mdc-button--unelevated:disabled {
  color: rgba(0, 0, 0, 0.38);
}
.mdc-button--raised .mdc-button__ripple,
.mdc-button--unelevated .mdc-button__ripple {
  border-radius: 4px;
  border-radius: var(--mdc-shape-small, 4px);
}
.mdc-button--outlined {
  height: 36px;
  border-radius: 4px;
  border-radius: var(--mdc-shape-small, 4px);
  padding: 0 15px 0 15px;
  border-width: 1px;
}
.mdc-button--outlined:not(:disabled) {
  background-color: transparent;
}
.mdc-button--outlined:disabled {
  background-color: transparent;
}
.mdc-button--outlined:not(:disabled) {
  color: #6200ee;
  color: var(--mdc-theme-primary, #6200ee);
}
.mdc-button--outlined:disabled {
  color: rgba(0, 0, 0, 0.38);
}
.mdc-button--outlined .mdc-button__ripple {
  border-radius: 4px;
  border-radius: var(--mdc-shape-small, 4px);
}
.mdc-button--outlined:not(:disabled) {
  border-color: rgba(0, 0, 0, 0.12);
}
.mdc-button--outlined:disabled {
  border-color: rgba(0, 0, 0, 0.12);
}
.mdc-button--outlined.mdc-button--icon-trailing {
  padding: 0 11px 0 15px;
}
.mdc-button--outlined.mdc-button--icon-leading {
  padding: 0 15px 0 11px;
}
.mdc-button--outlined .mdc-button__ripple {
  top: -1px;
  left: -1px;
  border: 1px solid transparent;
}
.mdc-button--outlined .mdc-button__touch {
  left: -1px;
  width: calc(100% + 2 * 1px);
}
:host {
  display: inline-flex;
  outline: none;
  -webkit-tap-highlight-color: transparent;
  vertical-align: top;
}
:host([fullwidth]) {
  width: 100%;
}
:host([raised]),
:host([unelevated]) {
  --mdc-ripple-color: #fff;
  --mdc-ripple-focus-opacity: 0.24;
  --mdc-ripple-hover-opacity: 0.08;
  --mdc-ripple-press-opacity: 0.24;
}
.trailing-icon ::slotted(*),
.trailing-icon .mdc-button__icon,
.leading-icon ::slotted(*),
.leading-icon .mdc-button__icon {
  margin-left: 0;
  margin-right: 8px;
  display: inline-block;
  font-size: 1.125rem;
  height: 1.125rem;
  vertical-align: top;
  width: 1.125rem;
}
.trailing-icon ::slotted(*),
.trailing-icon .mdc-button__icon {
  margin-left: 8px;
  margin-right: 0;
}
.slot-container {
  display: inline-flex;
  align-items: center;
  justify-content: center;
}
.slot-container.flex {
  flex: auto;
}
.mdc-button {
  flex: auto;
  overflow: hidden;
  padding-left: 8px;
  padding-left: var(--mdc-button-horizontal-padding, 8px);
  padding-right: 8px;
  padding-right: var(--mdc-button-horizontal-padding, 8px);
}
.mdc-button--raised {
  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2),
    0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);
  box-shadow: var(
    --mdc-button-raised-box-shadow,
    0px 3px 1px -2px rgba(0, 0, 0, 0.2),
    0px 2px 2px 0px rgba(0, 0, 0, 0.14),
    0px 1px 5px 0px rgba(0, 0, 0, 0.12)
  );
}
.mdc-button--raised:focus {
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
  box-shadow: var(
    --mdc-button-raised-box-shadow-focus,
    var(
      --mdc-button-raised-box-shadow-hover,
      0px 2px 4px -1px rgba(0, 0, 0, 0.2),
      0px 4px 5px 0px rgba(0, 0, 0, 0.14),
      0px 1px 10px 0px rgba(0, 0, 0, 0.12)
    )
  );
}
.mdc-button--raised:hover {
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
  box-shadow: var(
    --mdc-button-raised-box-shadow-hover,
    0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14),
    0px 1px 10px 0px rgba(0, 0, 0, 0.12)
  );
}
.mdc-button--raised:active {
  box-shadow: 0px 5px 5px -3px rgba(0, 0, 0, 0.2),
    0px 8px 10px 1px rgba(0, 0, 0, 0.14), 0px 3px 14px 2px rgba(0, 0, 0, 0.12);
  box-shadow: var(
    --mdc-button-raised-box-shadow-active,
    0px 5px 5px -3px rgba(0, 0, 0, 0.2),
    0px 8px 10px 1px rgba(0, 0, 0, 0.14),
    0px 3px 14px 2px rgba(0, 0, 0, 0.12)
  );
}
.mdc-button--raised:disabled {
  box-shadow: 0px 0px 0px 0px rgba(0, 0, 0, 0.2),
    0px 0px 0px 0px rgba(0, 0, 0, 0.14), 0px 0px 0px 0px rgba(0, 0, 0, 0.12);
  box-shadow: var(
    --mdc-button-raised-box-shadow-disabled,
    0px 0px 0px 0px rgba(0, 0, 0, 0.2),
    0px 0px 0px 0px rgba(0, 0, 0, 0.14),
    0px 0px 0px 0px rgba(0, 0, 0, 0.12)
  );
}
.mdc-button--raised,
.mdc-button--unelevated {
  padding-left: 16px;
  padding-left: var(--mdc-button-horizontal-padding, 16px);
  padding-right: 16px;
  padding-right: var(--mdc-button-horizontal-padding, 16px);
}
.mdc-button--outlined {
  border-width: 1px;
  border-width: var(--mdc-button-outline-width, 1px);
  padding-left: calc(16px - 1px);
  padding-left: calc(
    var(--mdc-button-horizontal-padding, 16px) -
      var(--mdc-button-outline-width, 1px)
  );
  padding-right: calc(16px - 1px);
  padding-right: calc(
    var(--mdc-button-horizontal-padding, 16px) -
      var(--mdc-button-outline-width, 1px)
  );
}
.mdc-button--outlined:not(:disabled) {
  border-color: rgba(0, 0, 0, 0.12);
  border-color: var(--mdc-button-outline-color, rgba(0, 0, 0, 0.12));
}
.mdc-button--outlined .ripple {
  top: calc(-1 * 1px);
  top: calc(-1 * var(--mdc-button-outline-width, 1px));
  left: calc(-1 * 1px);
  left: calc(-1 * var(--mdc-button-outline-width, 1px));
  right: initial;
  right: initial;
  border-width: 1px;
  border-width: var(--mdc-button-outline-width, 1px);
  border-style: solid;
  border-color: transparent;
}
.mdc-button--dense {
  height: 28px;
  margin-top: 0;
  margin-bottom: 0;
}
.mdc-button--dense .mdc-button__touch {
  display: none;
}
:host([disabled]) {
  pointer-events: none;
}
:host([disabled]) .mdc-button {
  color: rgba(0, 0, 0, 0.38);
  color: var(--mdc-button-disabled-ink-color, rgba(0, 0, 0, 0.38));
}
:host([disabled]) .mdc-button--raised,
:host([disabled]) .mdc-button--unelevated {
  background-color: rgba(0, 0, 0, 0.12);
  background-color: var(--mdc-button-disabled-fill-color, rgba(0, 0, 0, 0.12));
}
:host([disabled]) .mdc-button--outlined {
  border-color: rgba(0, 0, 0, 0.12);
  border-color: var(--mdc-button-disabled-outline-color, rgba(0, 0, 0, 0.12));
}

`;
