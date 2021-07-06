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
    font-family: Roboto,sans-serif;
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
