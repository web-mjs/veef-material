export default `
.mdc-floating-label {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  font-family: var(--mdc-typography-subtitle1-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));
  font-size: var(--mdc-typography-subtitle1-font-size, 1rem);
  font-weight: var(--mdc-typography-subtitle1-font-weight, 400);
  letter-spacing: var(--mdc-typography-subtitle1-letter-spacing, 0.009375em);
  text-decoration: var(--mdc-typography-subtitle1-text-decoration, inherit);
  text-transform: var(--mdc-typography-subtitle1-text-transform, inherit);
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
  transition: transform 150ms cubic-bezier(0.4, 0, 0.2, 1), color 150ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mdc-floating-label--float-above {
  cursor: auto;
}
.mdc-floating-label--required::after {
  margin-left: 1px;
  margin-right: 0px;
  content: "*";
}
.mdc-floating-label--float-above {
  transform: translateY(-106%) scale(0.75);
}

.mdc-floating-label--shake {
  animation: mdc-floating-label-shake-float-above-standard 250ms 1;
}

@keyframes mdc-floating-label-shake-float-above-standard {
  0% {
    transform: translateX(calc(0 - 0%)) translateY(-106%) scale(0.75);
  }
  33% {
    animation-timing-function: cubic-bezier(0.5, 0, 0.701732, 0.495819);
    transform: translateX(calc(4% - 0%)) translateY(-106%) scale(0.75);
  }
  66% {
    animation-timing-function: cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);
    transform: translateX(calc(-4% - 0%)) translateY(-106%) scale(0.75);
  }
  100% {
    transform: translateX(calc(0 - 0%)) translateY(-106%) scale(0.75);
  }
}
.mdc-line-ripple::before, .mdc-line-ripple::after {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  border-bottom-style: solid;
  content: "";
}
.mdc-line-ripple::before {
  border-bottom-width: 1px;
  z-index: 1;
}
.mdc-line-ripple::after {
  transform: scaleX(0);
  border-bottom-width: 2px;
  opacity: 0;
  z-index: 2;
}
.mdc-line-ripple::after {
  transition: transform 180ms cubic-bezier(0.4, 0, 0.2, 1), opacity 180ms cubic-bezier(0.4, 0, 0.2, 1);
}

.mdc-line-ripple--active::after {
  transform: scaleX(1);
  opacity: 1;
}

.mdc-line-ripple--deactivating::after {
  opacity: 0;
}
.mdc-notched-outline {
  display: flex;
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  box-sizing: border-box;
  width: 100%;
  max-width: 100%;
  height: 100%;
  text-align: left;
  pointer-events: none;
}
.mdc-notched-outline__leading, .mdc-notched-outline__notch, .mdc-notched-outline__trailing {
  box-sizing: border-box;
  height: 100%;
  border-top: 1px solid;
  border-bottom: 1px solid;
  pointer-events: none;
}
.mdc-notched-outline__leading {
  border-left: 1px solid;
  border-right: none;
  width: 12px;
}
.mdc-notched-outline__trailing {
  border-left: none;
  border-right: 1px solid;
  flex-grow: 1;
}
.mdc-notched-outline__notch {
  flex: 0 0 auto;
  width: auto;
  max-width: calc(100% - 12px * 2);
}
.mdc-notched-outline .mdc-floating-label {
  display: inline-block;
  position: relative;
  max-width: 100%;
}
.mdc-notched-outline .mdc-floating-label--float-above {
  text-overflow: clip;
}
.mdc-notched-outline--upgraded .mdc-floating-label--float-above {
  max-width: calc(100% / 0.75);
}

.mdc-notched-outline--notched .mdc-notched-outline__notch {
  padding-left: 0;
  padding-right: 8px;
  border-top: none;
}
[dir=rtl] .mdc-notched-outline--notched .mdc-notched-outline__notch, .mdc-notched-outline--notched .mdc-notched-outline__notch[dir=rtl] {
  padding-left: 8px;
  padding-right: 0;
}

.mdc-notched-outline--no-label .mdc-notched-outline__notch {
  display: none;
}

@keyframes mdc-ripple-fg-radius-in {
  from {
    animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transform: translate(var(--mdc-ripple-fg-translate-start, 0)) scale(1);
  }
  to {
    transform: translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1));
  }
}
@keyframes mdc-ripple-fg-opacity-in {
  from {
    animation-timing-function: linear;
    opacity: 0;
  }
  to {
    opacity: var(--mdc-ripple-fg-opacity, 0);
  }
}
@keyframes mdc-ripple-fg-opacity-out {
  from {
    animation-timing-function: linear;
    opacity: var(--mdc-ripple-fg-opacity, 0);
  }
  to {
    opacity: 0;
  }
}
.mdc-text-field--filled {
  --mdc-ripple-fg-size: 0;
  --mdc-ripple-left: 0;
  --mdc-ripple-top: 0;
  --mdc-ripple-fg-scale: 1;
  --mdc-ripple-fg-translate-end: 0;
  --mdc-ripple-fg-translate-start: 0;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  will-change: transform, opacity;
}
.mdc-text-field--filled .mdc-text-field__ripple::before,
.mdc-text-field--filled .mdc-text-field__ripple::after {
  position: absolute;
  border-radius: 50%;
  opacity: 0;
  pointer-events: none;
  content: "";
}
.mdc-text-field--filled .mdc-text-field__ripple::before {
  transition: opacity 15ms linear, background-color 15ms linear;
  z-index: var(--mdc-ripple-z-index, 1);
}
.mdc-text-field--filled .mdc-text-field__ripple::after {
  z-index: var(--mdc-ripple-z-index, 0);
}
.mdc-text-field--filled.mdc-ripple-upgraded .mdc-text-field__ripple::before {
  transform: scale(var(--mdc-ripple-fg-scale, 1));
}
.mdc-text-field--filled.mdc-ripple-upgraded .mdc-text-field__ripple::after {
  top: 0;
  left: 0;
  transform: scale(0);
  transform-origin: center center;
}
.mdc-text-field--filled.mdc-ripple-upgraded--unbounded .mdc-text-field__ripple::after {
  top: var(--mdc-ripple-top, 0);
  left: var(--mdc-ripple-left, 0);
}
.mdc-text-field--filled.mdc-ripple-upgraded--foreground-activation .mdc-text-field__ripple::after {
  animation: mdc-ripple-fg-radius-in 225ms forwards, mdc-ripple-fg-opacity-in 75ms forwards;
}
.mdc-text-field--filled.mdc-ripple-upgraded--foreground-deactivation .mdc-text-field__ripple::after {
  animation: mdc-ripple-fg-opacity-out 150ms;
  transform: translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1));
}
.mdc-text-field--filled .mdc-text-field__ripple::before,
.mdc-text-field--filled .mdc-text-field__ripple::after {
  top: calc(50% - 100%);
  left: calc(50% - 100%);
  width: 200%;
  height: 200%;
}
.mdc-text-field--filled.mdc-ripple-upgraded .mdc-text-field__ripple::after {
  width: var(--mdc-ripple-fg-size, 100%);
  height: var(--mdc-ripple-fg-size, 100%);
}

.mdc-text-field__ripple {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
}

.mdc-text-field {
  border-top-left-radius: 4px;
  border-top-left-radius: var(--mdc-shape-small, 4px);
  border-top-right-radius: 4px;
  border-top-right-radius: var(--mdc-shape-small, 4px);
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
  display: inline-flex;
  align-items: baseline;
  padding: 0 16px;
  position: relative;
  box-sizing: border-box;
  overflow: hidden;
  will-change: opacity, transform, color;
}
.mdc-text-field:not(.mdc-text-field--disabled) .mdc-floating-label {
  color: rgba(0, 0, 0, 0.6);
}
.mdc-text-field:not(.mdc-text-field--disabled) .mdc-text-field__input {
  color: rgba(0, 0, 0, 0.87);
}
@media all {
  .mdc-text-field:not(.mdc-text-field--disabled) .mdc-text-field__input::placeholder {
    color: rgba(0, 0, 0, 0.54);
  }
}
@media all {
  .mdc-text-field:not(.mdc-text-field--disabled) .mdc-text-field__input:-ms-input-placeholder {
    color: rgba(0, 0, 0, 0.54);
  }
}
.mdc-text-field .mdc-text-field__input {
  caret-color: var(--mdc-theme-primary, #6200ee);
}
.mdc-text-field:not(.mdc-text-field--disabled) + .mdc-text-field-helper-line .mdc-text-field-helper-text {
  color: rgba(0, 0, 0, 0.6);
}
.mdc-text-field:not(.mdc-text-field--disabled) .mdc-text-field-character-counter,
.mdc-text-field:not(.mdc-text-field--disabled) + .mdc-text-field-helper-line .mdc-text-field-character-counter {
  color: rgba(0, 0, 0, 0.6);
}
.mdc-text-field:not(.mdc-text-field--disabled) .mdc-text-field__icon--leading {
  color: rgba(0, 0, 0, 0.54);
}
.mdc-text-field:not(.mdc-text-field--disabled) .mdc-text-field__icon--trailing {
  color: rgba(0, 0, 0, 0.54);
}
.mdc-text-field:not(.mdc-text-field--disabled) .mdc-text-field__affix--prefix {
  color: rgba(0, 0, 0, 0.6);
}
.mdc-text-field:not(.mdc-text-field--disabled) .mdc-text-field__affix--suffix {
  color: rgba(0, 0, 0, 0.6);
}
.mdc-text-field .mdc-floating-label {
  top: 50%;
  transform: translateY(-50%);
  pointer-events: none;
}

.mdc-text-field__input {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  font-family: var(--mdc-typography-subtitle1-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));
  font-size: var(--mdc-typography-subtitle1-font-size, 1rem);
  font-weight: var(--mdc-typography-subtitle1-font-weight, 400);
  letter-spacing: var(--mdc-typography-subtitle1-letter-spacing, 0.009375em);
  text-decoration: var(--mdc-typography-subtitle1-text-decoration, inherit);
  text-transform: var(--mdc-typography-subtitle1-text-transform, inherit);
  height: 28px;
  transition: opacity 150ms 0ms cubic-bezier(0.4, 0, 0.2, 1);
  width: 100%;
  min-width: 0;
  border: none;
  border-radius: 0;
  background: none;
  appearance: none;
  padding: 0;
}
.mdc-text-field__input::-ms-clear {
  display: none;
}
.mdc-text-field__input::-webkit-calendar-picker-indicator {
  display: none;
}
.mdc-text-field__input:focus {
  outline: none;
}
.mdc-text-field__input:invalid {
  box-shadow: none;
}
@media all {
  .mdc-text-field__input::placeholder {
    transition: opacity 67ms 0ms cubic-bezier(0.4, 0, 0.2, 1);
    opacity: 0;
  }
}
@media all {
  .mdc-text-field__input:-ms-input-placeholder {
    transition: opacity 67ms 0ms cubic-bezier(0.4, 0, 0.2, 1);
    opacity: 0;
  }
}
@media all {
  .mdc-text-field--no-label .mdc-text-field__input::placeholder, .mdc-text-field--focused .mdc-text-field__input::placeholder {
    transition-delay: 40ms;
    transition-duration: 110ms;
    opacity: 1;
  }
}
@media all {
  .mdc-text-field--no-label .mdc-text-field__input:-ms-input-placeholder, .mdc-text-field--focused .mdc-text-field__input:-ms-input-placeholder {
    transition-delay: 40ms;
    transition-duration: 110ms;
    opacity: 1;
  }
}

.mdc-text-field__affix {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  font-family: Roboto, sans-serif;
  font-family: var(--mdc-typography-subtitle1-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));
  font-size: var(--mdc-typography-subtitle1-font-size, 1rem);
  font-weight: var(--mdc-typography-subtitle1-font-weight, 400);
  letter-spacing: var(--mdc-typography-subtitle1-letter-spacing, 0.009375em);
  text-decoration: var(--mdc-typography-subtitle1-text-decoration, inherit);
  text-transform: var(--mdc-typography-subtitle1-text-transform, inherit);
  height: 28px;
  transition: opacity 150ms 0ms cubic-bezier(0.4, 0, 0.2, 1);
  opacity: 0;
  white-space: nowrap;
}
.mdc-text-field--label-floating .mdc-text-field__affix, .mdc-text-field--no-label .mdc-text-field__affix {
  opacity: 1;
}
@supports (-webkit-hyphens: none) {
  .mdc-text-field--outlined .mdc-text-field__affix {
    align-items: center;
    align-self: center;
    display: inline-flex;
    height: 100%;
  }
}

.mdc-text-field__affix--prefix {
  padding-left: 0;
  padding-right: 2px;
}
.mdc-text-field--end-aligned .mdc-text-field__affix--prefix {
  padding-left: 0;
  padding-right: 12px;
}


.mdc-text-field--filled {
  height: 56px;
}
.mdc-text-field--filled .mdc-text-field__ripple::before,
.mdc-text-field--filled .mdc-text-field__ripple::after {
  background-color: var(--mdc-ripple-color, rgba(0, 0, 0, 0.87));
}
.mdc-text-field--filled:hover .mdc-text-field__ripple::before, .mdc-text-field--filled.mdc-ripple-surface--hover .mdc-text-field__ripple::before {
  opacity: var(--mdc-ripple-hover-opacity, 0.04);
}
.mdc-text-field--filled.mdc-ripple-upgraded--background-focused .mdc-text-field__ripple::before, .mdc-text-field--filled:not(.mdc-ripple-upgraded):focus .mdc-text-field__ripple::before {
  transition-duration: 75ms;
  opacity: var(--mdc-ripple-focus-opacity, 0.12);
}
.mdc-text-field--filled::before {
  display: inline-block;
  width: 0;
  height: 40px;
  content: "";
  vertical-align: 0;
}
.mdc-text-field--filled:not(.mdc-text-field--disabled) {
  background-color: whitesmoke;
}
.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-line-ripple::before {
  border-bottom-color: rgba(0, 0, 0, 0.42);
}
.mdc-text-field--filled:not(.mdc-text-field--disabled):hover .mdc-line-ripple::before {
  border-bottom-color: rgba(0, 0, 0, 0.87);
}
.mdc-text-field--filled .mdc-line-ripple::after {
  border-bottom-color: var(--mdc-theme-primary, #6200ee);
}
.mdc-text-field--filled .mdc-floating-label {
  left: 16px;
  right: initial;
}
.mdc-text-field--filled .mdc-floating-label--float-above {
  transform: translateY(-106%) scale(0.75);
}
.mdc-text-field--filled.mdc-text-field--no-label .mdc-text-field__input {
  height: 100%;
}
.mdc-text-field--filled.mdc-text-field--no-label .mdc-floating-label {
  display: none;
}
.mdc-text-field--filled.mdc-text-field--no-label::before {
  display: none;
}
.mdc-text-field--outlined {
  height: 56px;
  overflow: visible;
}
.mdc-text-field--outlined .mdc-floating-label--float-above {
  transform: translateY(-37.25px) scale(1);
}
.mdc-text-field--outlined .mdc-floating-label--float-above {
  font-size: 0.75rem;
}
.mdc-text-field--outlined.mdc-notched-outline--upgraded .mdc-floating-label--float-above,
.mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above {
  transform: translateY(-34.75px) scale(0.75);
}
.mdc-text-field--outlined.mdc-notched-outline--upgraded .mdc-floating-label--float-above,
.mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above {
  font-size: 1rem;
}
.mdc-text-field--outlined .mdc-floating-label--shake {
  animation: mdc-floating-label-shake-float-above-text-field-outlined 250ms 1;
}
@keyframes mdc-floating-label-shake-float-above-text-field-outlined {
  0% {
    transform: translateX(calc(0 - 0%)) translateY(-34.75px) scale(0.75);
  }
  33% {
    animation-timing-function: cubic-bezier(0.5, 0, 0.701732, 0.495819);
    transform: translateX(calc(4% - 0%)) translateY(-34.75px) scale(0.75);
  }
  66% {
    animation-timing-function: cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);
    transform: translateX(calc(-4% - 0%)) translateY(-34.75px) scale(0.75);
  }
  100% {
    transform: translateX(calc(0 - 0%)) translateY(-34.75px) scale(0.75);
  }
}
.mdc-text-field--outlined .mdc-text-field__input {
  height: 100%;
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-notched-outline__leading,
.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-notched-outline__notch,
.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-notched-outline__trailing {
  border-color: rgba(0, 0, 0, 0.38);
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-notched-outline .mdc-notched-outline__leading,
.mdc-text-field--outlined:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-notched-outline .mdc-notched-outline__notch,
.mdc-text-field--outlined:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-notched-outline .mdc-notched-outline__trailing {
  border-color: rgba(0, 0, 0, 0.87);
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-notched-outline__leading,
.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-notched-outline__notch,
.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-notched-outline__trailing {
  border-color: var(--mdc-theme-primary, #6200ee);
}
.mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__leading {
  border-top-left-radius: 4px;
  /* @alternate */
  /* @noflip */
  border-top-left-radius: var(--mdc-shape-small, 4px);
  /* @noflip */
  border-top-right-radius: 0;
  /* @noflip */
  border-bottom-right-radius: 0;
  /* @noflip */
  border-bottom-left-radius: 4px;
  /* @alternate */
  /* @noflip */
  border-bottom-left-radius: var(--mdc-shape-small, 4px);
}
@supports (top: max(0%)) {
  .mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__leading {
    width: max(12px, var(--mdc-shape-small, 4px));
  }
}
@supports (top: max(0%)) {
  .mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__notch {
    max-width: calc(100% - max(12px, var(--mdc-shape-small, 4px)) * 2);
  }
}
.mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__trailing {
  border-top-left-radius: 0;
  border-top-right-radius: 4px;
  /* @alternate */
  /* @noflip */
  border-top-right-radius: var(--mdc-shape-small, 4px);
  /* @noflip */
  border-bottom-right-radius: 4px;
  /* @alternate */
  /* @noflip */
  border-bottom-right-radius: var(--mdc-shape-small, 4px);
  /* @noflip */
  border-bottom-left-radius: 0;
}
@supports (top: max(0%)) {
  .mdc-text-field--outlined {
    /* @noflip */
    padding-left: max(16px, calc(var(--mdc-shape-small, 4px) + 4px));
  }
}
@supports (top: max(0%)) {
  .mdc-text-field--outlined {
    /* @noflip */
    padding-right: max(16px, var(--mdc-shape-small, 4px));
  }
}
@supports (top: max(0%)) {
  .mdc-text-field--outlined + .mdc-text-field-helper-line {
    /* @noflip */
    padding-left: max(16px, calc(var(--mdc-shape-small, 4px) + 4px));
  }
}
@supports (top: max(0%)) {
  .mdc-text-field--outlined + .mdc-text-field-helper-line {
    /* @noflip */
    padding-right: max(16px, var(--mdc-shape-small, 4px));
  }
}
.mdc-text-field--outlined.mdc-text-field--with-leading-icon {
  /* @noflip */
  padding-left: 0;
}
@supports (top: max(0%)) {
  .mdc-text-field--outlined.mdc-text-field--with-leading-icon {
    /* @noflip */
    padding-right: max(16px, var(--mdc-shape-small, 4px));
  }
}
.mdc-text-field--outlined.mdc-text-field--with-trailing-icon {
  /* @noflip */
  padding-right: 0;
}
@supports (top: max(0%)) {
  .mdc-text-field--outlined.mdc-text-field--with-trailing-icon {
    /* @noflip */
    padding-left: max(16px, calc(var(--mdc-shape-small, 4px) + 4px));
  }
}
.mdc-text-field--outlined.mdc-text-field--with-leading-icon.mdc-text-field--with-trailing-icon {
  /* @noflip */
  padding-left: 0;
  /* @noflip */
  padding-right: 0;
}
.mdc-text-field--outlined .mdc-notched-outline--notched .mdc-notched-outline__notch {
  padding-top: 1px;
}
.mdc-text-field--outlined .mdc-text-field__ripple::before,
.mdc-text-field--outlined .mdc-text-field__ripple::after {
  content: none;
}
.mdc-text-field--outlined .mdc-floating-label {
  /* @noflip */
  left: 4px;
  /* @noflip */
  right: initial;
}
.mdc-text-field--outlined .mdc-text-field__input {
  display: flex;
  border: none !important;
  background-color: transparent;
}
.mdc-text-field--outlined .mdc-notched-outline {
  z-index: 1;
}

.mdc-text-field--textarea {
  flex-direction: column;
  align-items: center;
  width: auto;
  height: auto;
  padding: 0;
  transition: none;
}
.mdc-text-field--textarea .mdc-floating-label {
  top: 19px;
}
.mdc-text-field--textarea .mdc-floating-label:not(.mdc-floating-label--float-above) {
  transform: none;
}
.mdc-text-field--textarea .mdc-text-field__input {
  flex-grow: 1;
  height: auto;
  min-height: 1.5rem;
  overflow-x: hidden;
  overflow-y: auto;
  box-sizing: border-box;
  resize: none;
  padding: 0 16px;
  line-height: 1.5rem;
}
.mdc-text-field--textarea.mdc-text-field--filled::before {
  display: none;
}
.mdc-text-field--textarea.mdc-text-field--filled .mdc-floating-label--float-above {
  transform: translateY(-10.25px) scale(0.75);
}
.mdc-text-field--textarea.mdc-text-field--filled .mdc-floating-label--shake {
  animation: mdc-floating-label-shake-float-above-textarea-filled 250ms 1;
}
@keyframes mdc-floating-label-shake-float-above-textarea-filled {
  0% {
    transform: translateX(calc(0 - 0%)) translateY(-10.25px) scale(0.75);
  }
  33% {
    animation-timing-function: cubic-bezier(0.5, 0, 0.701732, 0.495819);
    transform: translateX(calc(4% - 0%)) translateY(-10.25px) scale(0.75);
  }
  66% {
    animation-timing-function: cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);
    transform: translateX(calc(-4% - 0%)) translateY(-10.25px) scale(0.75);
  }
  100% {
    transform: translateX(calc(0 - 0%)) translateY(-10.25px) scale(0.75);
  }
}
.mdc-text-field--textarea.mdc-text-field--filled .mdc-text-field__input {
  margin-top: 23px;
  margin-bottom: 9px;
}
.mdc-text-field--textarea.mdc-text-field--filled.mdc-text-field--no-label .mdc-text-field__input {
  margin-top: 16px;
  margin-bottom: 16px;
}
.mdc-text-field--textarea.mdc-text-field--outlined .mdc-notched-outline--notched .mdc-notched-outline__notch {
  padding-top: 0;
}
.mdc-text-field--textarea.mdc-text-field--outlined .mdc-floating-label--float-above {
  transform: translateY(-27.25px) scale(1);
}
.mdc-text-field--textarea.mdc-text-field--outlined .mdc-floating-label--float-above {
  font-size: 0.75rem;
}
.mdc-text-field--textarea.mdc-text-field--outlined.mdc-notched-outline--upgraded .mdc-floating-label--float-above,
.mdc-text-field--textarea.mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above {
  transform: translateY(-24.75px) scale(0.75);
}
.mdc-text-field--textarea.mdc-text-field--outlined.mdc-notched-outline--upgraded .mdc-floating-label--float-above,
.mdc-text-field--textarea.mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above {
  font-size: 1rem;
}
.mdc-text-field--textarea.mdc-text-field--outlined .mdc-floating-label--shake {
  animation: mdc-floating-label-shake-float-above-textarea-outlined 250ms 1;
}
@keyframes mdc-floating-label-shake-float-above-textarea-outlined {
  0% {
    transform: translateX(calc(0 - 0%)) translateY(-24.75px) scale(0.75);
  }
  33% {
    animation-timing-function: cubic-bezier(0.5, 0, 0.701732, 0.495819);
    transform: translateX(calc(4% - 0%)) translateY(-24.75px) scale(0.75);
  }
  66% {
    animation-timing-function: cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);
    transform: translateX(calc(-4% - 0%)) translateY(-24.75px) scale(0.75);
  }
  100% {
    transform: translateX(calc(0 - 0%)) translateY(-24.75px) scale(0.75);
  }
}
.mdc-text-field--textarea.mdc-text-field--outlined .mdc-text-field__input {
  margin-top: 16px;
  margin-bottom: 16px;
}
.mdc-text-field--textarea.mdc-text-field--outlined .mdc-floating-label {
  top: 18px;
}
.mdc-text-field--textarea.mdc-text-field--with-internal-counter .mdc-text-field__input {
  margin-bottom: 2px;
}
.mdc-text-field--textarea.mdc-text-field--with-internal-counter .mdc-text-field-character-counter {
  align-self: flex-end;
  padding: 0 16px;
}
.mdc-text-field--textarea.mdc-text-field--with-internal-counter .mdc-text-field-character-counter::after {
  display: inline-block;
  width: 0;
  height: 16px;
  content: "";
  vertical-align: -16px;
}
.mdc-text-field--textarea.mdc-text-field--with-internal-counter .mdc-text-field-character-counter::before {
  display: none;
}

.mdc-text-field__resizer {
  align-self: stretch;
  display: inline-flex;
  flex-direction: column;
  flex-grow: 1;
  max-height: 100%;
  max-width: 100%;
  min-height: 56px;
  min-width: fit-content;
  min-width: -moz-available;
  min-width: -webkit-fill-available;
  overflow: hidden;
  resize: both;
}
.mdc-text-field--filled .mdc-text-field__resizer {
  transform: translateY(-1px);
}
.mdc-text-field--filled .mdc-text-field__resizer .mdc-text-field__input,
.mdc-text-field--filled .mdc-text-field__resizer .mdc-text-field-character-counter {
  transform: translateY(1px);
}
.mdc-text-field--outlined .mdc-text-field__resizer {
  transform: translateX(-1px) translateY(-1px);
}
.mdc-text-field--with-leading-icon {
  padding-left: 0;
  padding-right: 16px;
}
[dir=rtl] .mdc-text-field--with-leading-icon, .mdc-text-field--with-leading-icon[dir=rtl] {
  padding-left: 16px;
  padding-right: 0;
}
.mdc-text-field--with-leading-icon.mdc-text-field--filled .mdc-floating-label {
  max-width: calc(100% - 48px);
  left: 48px;
  right: initial;
}
.mdc-text-field--with-leading-icon.mdc-text-field--filled .mdc-floating-label--float-above {
  max-width: calc(100% / 0.75 - 64px / 0.75);
}
.mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-floating-label {
  left: 36px;
  right: initial;
}
.mdc-text-field--with-leading-icon.mdc-text-field--outlined :not(.mdc-notched-outline--notched) .mdc-notched-outline__notch {
  max-width: calc(100% - 60px);
}
.mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-floating-label--float-above {
  transform: translateY(-37.25px) translateX(-32px) scale(1);
}
[dir=rtl] .mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-floating-label--float-above, .mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-floating-label--float-above[dir=rtl] {
  transform: translateY(-37.25px) translateX(32px) scale(1);
}
.mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-floating-label--float-above {
  font-size: 0.75rem;
}
.mdc-text-field--with-leading-icon.mdc-text-field--outlined.mdc-notched-outline--upgraded .mdc-floating-label--float-above,
.mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above {
  transform: translateY(-34.75px) translateX(-32px) scale(0.75);
}
.mdc-text-field--with-leading-icon.mdc-text-field--outlined.mdc-notched-outline--upgraded .mdc-floating-label--float-above,
.mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above {
  font-size: 1rem;
}
.mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-floating-label--shake {
  animation: mdc-floating-label-shake-float-above-text-field-outlined-leading-icon 250ms 1;
}
@keyframes mdc-floating-label-shake-float-above-text-field-outlined-leading-icon {
  0% {
    transform: translateX(calc(0 - 32px)) translateY(-34.75px) scale(0.75);
  }
  33% {
    animation-timing-function: cubic-bezier(0.5, 0, 0.701732, 0.495819);
    transform: translateX(calc(4% - 32px)) translateY(-34.75px) scale(0.75);
  }
  66% {
    animation-timing-function: cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);
    transform: translateX(calc(-4% - 32px)) translateY(-34.75px) scale(0.75);
  }
  100% {
    transform: translateX(calc(0 - 32px)) translateY(-34.75px) scale(0.75);
  }
}
[dir=rtl] .mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-floating-label--shake, .mdc-text-field--with-leading-icon.mdc-text-field--outlined[dir=rtl] .mdc-floating-label--shake {
  animation: mdc-floating-label-shake-float-above-text-field-outlined-leading-icon 250ms 1;
}
@keyframes mdc-floating-label-shake-float-above-text-field-outlined-leading-icon-rtl {
  0% {
    transform: translateX(calc(0 - -32px)) translateY(-34.75px) scale(0.75);
  }
  33% {
    animation-timing-function: cubic-bezier(0.5, 0, 0.701732, 0.495819);
    transform: translateX(calc(4% - -32px)) translateY(-34.75px) scale(0.75);
  }
  66% {
    animation-timing-function: cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);
    transform: translateX(calc(-4% - -32px)) translateY(-34.75px) scale(0.75);
  }
  100% {
    transform: translateX(calc(0 - -32px)) translateY(-34.75px) scale(0.75);
  }
}

.mdc-text-field--with-trailing-icon {
  /* @noflip */
  padding-left: 16px;
  /* @noflip */
  padding-right: 0;
}
[dir=rtl] .mdc-text-field--with-trailing-icon, .mdc-text-field--with-trailing-icon[dir=rtl] {
  /* @noflip */
  padding-left: 0;
  /* @noflip */
  padding-right: 16px;
}
.mdc-text-field--with-trailing-icon.mdc-text-field--filled .mdc-floating-label {
  max-width: calc(100% - 64px);
}
.mdc-text-field--with-trailing-icon.mdc-text-field--filled .mdc-floating-label--float-above {
  max-width: calc(100% / 0.75 - 64px / 0.75);
}
.mdc-text-field--with-trailing-icon.mdc-text-field--outlined :not(.mdc-notched-outline--notched) .mdc-notched-outline__notch {
  max-width: calc(100% - 60px);
}

.mdc-text-field--with-leading-icon.mdc-text-field--with-trailing-icon {
  /* @noflip */
  padding-left: 0;
  /* @noflip */
  padding-right: 0;
}
.mdc-text-field--with-leading-icon.mdc-text-field--with-trailing-icon.mdc-text-field--filled .mdc-floating-label {
  max-width: calc(100% - 96px);
}
.mdc-text-field--with-leading-icon.mdc-text-field--with-trailing-icon.mdc-text-field--filled .mdc-floating-label--float-above {
  max-width: calc(100% / 0.75 - 96px / 0.75);
}

.mdc-text-field-helper-line {
  display: flex;
  justify-content: space-between;
  box-sizing: border-box;
}
.mdc-text-field + .mdc-text-field-helper-line {
  padding-right: 16px;
  padding-left: 16px;
}

.mdc-form-field > .mdc-text-field + label {
  align-self: flex-start;
}

.mdc-text-field--focused:not(.mdc-text-field--disabled) .mdc-floating-label {
  color: rgba(98, 0, 238, 0.87);
}
.mdc-text-field--focused .mdc-notched-outline__leading,
.mdc-text-field--focused .mdc-notched-outline__notch,
.mdc-text-field--focused .mdc-notched-outline__trailing {
  border-width: 2px;
}
.mdc-text-field--focused + .mdc-text-field-helper-line .mdc-text-field-helper-text:not(.mdc-text-field-helper-text--validation-msg) {
  opacity: 1;
}
.mdc-text-field--focused.mdc-text-field--outlined .mdc-notched-outline--notched .mdc-notched-outline__notch {
  padding-top: 2px;
}
.mdc-text-field--focused.mdc-text-field--outlined.mdc-text-field--textarea .mdc-notched-outline--notched .mdc-notched-outline__notch {
  padding-top: 0;
}

.mdc-text-field--invalid:not(.mdc-text-field--disabled):hover .mdc-line-ripple::before {
  border-bottom-color: #b00020;
  /* @alternate */
  border-bottom-color: var(--mdc-theme-error, #b00020);
}
.mdc-text-field--invalid:not(.mdc-text-field--disabled) .mdc-line-ripple::after {
  border-bottom-color: #b00020;
  /* @alternate */
  border-bottom-color: var(--mdc-theme-error, #b00020);
}
.mdc-text-field--invalid:not(.mdc-text-field--disabled) .mdc-floating-label {
  color: #b00020;
  /* @alternate */
  color: var(--mdc-theme-error, #b00020);
}
.mdc-text-field--invalid:not(.mdc-text-field--disabled).mdc-text-field--invalid + .mdc-text-field-helper-line .mdc-text-field-helper-text--validation-msg {
  color: #b00020;
  /* @alternate */
  color: var(--mdc-theme-error, #b00020);
}
.mdc-text-field--invalid .mdc-text-field__input {
  caret-color: #b00020;
  /* @alternate */
  caret-color: var(--mdc-theme-error, #b00020);
}
.mdc-text-field--invalid:not(.mdc-text-field--disabled) .mdc-text-field__icon--trailing {
  color: #b00020;
  /* @alternate */
  color: var(--mdc-theme-error, #b00020);
}
.mdc-text-field--invalid:not(.mdc-text-field--disabled) .mdc-line-ripple::before {
  border-bottom-color: #b00020;
  /* @alternate */
  border-bottom-color: var(--mdc-theme-error, #b00020);
}
.mdc-text-field--invalid:not(.mdc-text-field--disabled) .mdc-notched-outline__leading,
.mdc-text-field--invalid:not(.mdc-text-field--disabled) .mdc-notched-outline__notch,
.mdc-text-field--invalid:not(.mdc-text-field--disabled) .mdc-notched-outline__trailing {
  border-color: #b00020;
  /* @alternate */
  border-color: var(--mdc-theme-error, #b00020);
}
.mdc-text-field--invalid:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-notched-outline .mdc-notched-outline__leading,
.mdc-text-field--invalid:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-notched-outline .mdc-notched-outline__notch,
.mdc-text-field--invalid:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-notched-outline .mdc-notched-outline__trailing {
  border-color: #b00020;
  /* @alternate */
  border-color: var(--mdc-theme-error, #b00020);
}
.mdc-text-field--invalid:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-notched-outline__leading,
.mdc-text-field--invalid:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-notched-outline__notch,
.mdc-text-field--invalid:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-notched-outline__trailing {
  border-color: #b00020;
  /* @alternate */
  border-color: var(--mdc-theme-error, #b00020);
}
.mdc-text-field--invalid + .mdc-text-field-helper-line .mdc-text-field-helper-text--validation-msg {
  opacity: 1;
}

.mdc-text-field--disabled {
  pointer-events: none;
}
.mdc-text-field--disabled .mdc-text-field__input {
  color: rgba(0, 0, 0, 0.38);
}
@media all {
  .mdc-text-field--disabled .mdc-text-field__input::placeholder {
    color: rgba(0, 0, 0, 0.38);
  }
}
@media all {
  .mdc-text-field--disabled .mdc-text-field__input:-ms-input-placeholder {
    color: rgba(0, 0, 0, 0.38);
  }
}
.mdc-text-field--disabled .mdc-floating-label {
  color: rgba(0, 0, 0, 0.38);
}
.mdc-text-field--disabled + .mdc-text-field-helper-line .mdc-text-field-helper-text {
  color: rgba(0, 0, 0, 0.38);
}
.mdc-text-field--disabled .mdc-text-field-character-counter,
.mdc-text-field--disabled + .mdc-text-field-helper-line .mdc-text-field-character-counter {
  color: rgba(0, 0, 0, 0.38);
}
.mdc-text-field--disabled .mdc-text-field__icon--leading {
  color: rgba(0, 0, 0, 0.3);
}
.mdc-text-field--disabled .mdc-text-field__icon--trailing {
  color: rgba(0, 0, 0, 0.3);
}
.mdc-text-field--disabled .mdc-text-field__affix--prefix {
  color: rgba(0, 0, 0, 0.38);
}
.mdc-text-field--disabled .mdc-text-field__affix--suffix {
  color: rgba(0, 0, 0, 0.38);
}
.mdc-text-field--disabled .mdc-line-ripple::before {
  border-bottom-color: rgba(0, 0, 0, 0.06);
}
.mdc-text-field--disabled .mdc-notched-outline__leading,
.mdc-text-field--disabled .mdc-notched-outline__notch,
.mdc-text-field--disabled .mdc-notched-outline__trailing {
  border-color: rgba(0, 0, 0, 0.06);
}
.mdc-text-field--disabled .mdc-floating-label {
  cursor: default;
}
.mdc-text-field--disabled.mdc-text-field--filled {
  background-color: #fafafa;
}
.mdc-text-field--disabled.mdc-text-field--filled .mdc-text-field__ripple {
  display: none;
}
.mdc-text-field--disabled .mdc-text-field__input {
  pointer-events: auto;
}

.mdc-text-field--end-aligned .mdc-text-field__input {
  /* @noflip */
  text-align: right;
}
[dir=rtl] .mdc-text-field--end-aligned .mdc-text-field__input, .mdc-text-field--end-aligned .mdc-text-field__input[dir=rtl] {
  /* @noflip */
  text-align: left;
}

.mdc-text-field-helper-text {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  font-family: Roboto, sans-serif;
  /* @alternate */
  font-family: var(--mdc-typography-caption-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));
  font-size: 0.75rem;
  /* @alternate */
  font-size: var(--mdc-typography-caption-font-size, 0.75rem);
  line-height: 1.25rem;
  /* @alternate */
  line-height: var(--mdc-typography-caption-line-height, 1.25rem);
  font-weight: 400;
  /* @alternate */
  font-weight: var(--mdc-typography-caption-font-weight, 400);
  letter-spacing: 0.0333333333em;
  /* @alternate */
  letter-spacing: var(--mdc-typography-caption-letter-spacing, 0.0333333333em);
  text-decoration: inherit;
  /* @alternate */
  text-decoration: var(--mdc-typography-caption-text-decoration, inherit);
  text-transform: inherit;
  /* @alternate */
  text-transform: var(--mdc-typography-caption-text-transform, inherit);
  display: block;
  margin-top: 0;
  /* @alternate */
  line-height: normal;
  margin: 0;
  opacity: 0;
  will-change: opacity;
  transition: opacity 150ms 0ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mdc-text-field-helper-text::before {
  display: inline-block;
  width: 0;
  height: 16px;
  content: "";
  vertical-align: 0;
}

.mdc-text-field-helper-text--persistent {
  transition: none;
  opacity: 1;
  will-change: initial;
}

.mdc-text-field-character-counter {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  font-family: Roboto, sans-serif;
  /* @alternate */
  font-family: var(--mdc-typography-caption-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));
  font-size: 0.75rem;
  /* @alternate */
  font-size: var(--mdc-typography-caption-font-size, 0.75rem);
  line-height: 1.25rem;
  /* @alternate */
  line-height: var(--mdc-typography-caption-line-height, 1.25rem);
  font-weight: 400;
  /* @alternate */
  font-weight: var(--mdc-typography-caption-font-weight, 400);
  letter-spacing: 0.0333333333em;
  /* @alternate */
  letter-spacing: var(--mdc-typography-caption-letter-spacing, 0.0333333333em);
  text-decoration: inherit;
  /* @alternate */
  text-decoration: var(--mdc-typography-caption-text-decoration, inherit);
  text-transform: inherit;
  /* @alternate */
  text-transform: var(--mdc-typography-caption-text-transform, inherit);
  display: block;
  margin-top: 0;
  /* @alternate */
  line-height: normal;
  /* @noflip */
  margin-left: auto;
  /* @noflip */
  margin-right: 0;
  /* @noflip */
  padding-left: 16px;
  /* @noflip */
  padding-right: 0;
  white-space: nowrap;
}
.mdc-text-field-character-counter::before {
  display: inline-block;
  width: 0;
  height: 16px;
  content: "";
  vertical-align: 0;
}
.mdc-text-field__icon {
  align-self: center;
  cursor: pointer;
}
.mdc-text-field__icon:not([tabindex]), .mdc-text-field__icon[tabindex="-1"] {
  cursor: default;
  pointer-events: none;
}
.mdc-text-field__icon svg {
  display: block;
}

.mdc-text-field__icon--leading {
  margin-left: 16px;
  margin-right: 8px;
}

.mdc-text-field__icon--trailing {
  padding: 12px;
  /* @noflip */
  margin-left: 0px;
  /* @noflip */
  margin-right: 0px;
}
.material-icons {
  font-family: var(--mdc-icon-font, "Material Icons");
  font-weight: normal;
  font-style: normal;
  font-size: var(--mdc-icon-size, 24px);
  line-height: 1;
  letter-spacing: normal;
  text-transform: none;
  display: inline-block;
  white-space: nowrap;
  word-wrap: normal;
  direction: ltr;
  /* Support for all WebKit browsers. */
  -webkit-font-smoothing: antialiased;
  /* Support for Safari and Chrome. */
  text-rendering: optimizeLegibility;
  /* Support for Firefox. */
  -moz-osx-font-smoothing: grayscale;
  /* Support for IE. */
  font-feature-settings: "liga";
}

:host {
  display: inline-flex;
  flex-direction: column;
  outline: none;
}

.mdc-text-field {
  width: 100%;
}
.mdc-text-field:not(.mdc-text-field--disabled) .mdc-line-ripple::before {
  border-bottom-color: rgba(0, 0, 0, 0.42);
  /* @alternate */
  border-bottom-color: var(--mdc-text-field-idle-line-color, rgba(0, 0, 0, 0.42));
}
.mdc-text-field:not(.mdc-text-field--disabled):hover .mdc-line-ripple::before {
  border-bottom-color: rgba(0, 0, 0, 0.87);
  /* @alternate */
  border-bottom-color: var(--mdc-text-field-hover-line-color, rgba(0, 0, 0, 0.87));
}
.mdc-text-field.mdc-text-field--disabled .mdc-line-ripple::before {
  border-bottom-color: rgba(0, 0, 0, 0.06);
  /* @alternate */
  border-bottom-color: var(--mdc-text-field-disabled-line-color, rgba(0, 0, 0, 0.06));
}
.mdc-text-field.mdc-text-field--invalid:not(.mdc-text-field--disabled) .mdc-line-ripple::before {
  border-bottom-color: #b00020;
  /* @alternate */
  border-bottom-color: var(--mdc-theme-error, #b00020);
}

mwc-notched-outline {
  --mdc-notched-outline-border-color: var(
    --mdc-text-field-outlined-idle-border-color,
    rgba(0, 0, 0, 0.38)
  );
}

:host(:not([disabled]):hover) :not(.mdc-text-field--invalid):not(.mdc-text-field--focused) mwc-notched-outline {
  --mdc-notched-outline-border-color: var(
    --mdc-text-field-outlined-hover-border-color,
    rgba(0, 0, 0, 0.87)
  );
}

:host(:not([disabled])) .mdc-text-field:not(.mdc-text-field--outlined) {
  background-color: var(--mdc-text-field-fill-color, whitesmoke);
}
:host(:not([disabled])) .mdc-text-field.mdc-text-field--invalid mwc-notched-outline {
  --mdc-notched-outline-border-color: var(
    --mdc-text-field-error-color,
    var(--mdc-theme-error, #b00020)
  );
}
:host(:not([disabled])) .mdc-text-field.mdc-text-field--invalid + .mdc-text-field-helper-line .mdc-text-field-character-counter,
:host(:not([disabled])) .mdc-text-field.mdc-text-field--invalid .mdc-text-field__icon {
  color: var(--mdc-text-field-error-color, var(--mdc-theme-error, #b00020));
}
:host(:not([disabled])) .mdc-text-field:not(.mdc-text-field--invalid):not(.mdc-text-field--focused) .mdc-floating-label,
:host(:not([disabled])) .mdc-text-field:not(.mdc-text-field--invalid):not(.mdc-text-field--focused) .mdc-floating-label::after {
  color: var(--mdc-text-field-label-ink-color, rgba(0, 0, 0, 0.6));
}
:host(:not([disabled])) .mdc-text-field.mdc-text-field--focused mwc-notched-outline {
  --mdc-notched-outline-stroke-width: 2px;
}
:host(:not([disabled])) .mdc-text-field.mdc-text-field--focused:not(.mdc-text-field--invalid) mwc-notched-outline {
  --mdc-notched-outline-border-color: var(
    --mdc-text-field-focused-label-color,
    var(--mdc-theme-primary, rgba(98, 0, 238, 0.87))
  );
}
:host(:not([disabled])) .mdc-text-field.mdc-text-field--focused:not(.mdc-text-field--invalid) .mdc-floating-label {
  color: #6200ee;
  /* @alternate */
  color: var(--mdc-theme-primary, #6200ee);
}
:host(:not([disabled])) .mdc-text-field .mdc-text-field__input {
  color: var(--mdc-text-field-ink-color, rgba(0, 0, 0, 0.87));
}
:host(:not([disabled])) .mdc-text-field .mdc-text-field__input::placeholder {
  color: var(--mdc-text-field-label-ink-color, rgba(0, 0, 0, 0.6));
}
:host(:not([disabled])) .mdc-text-field-helper-line .mdc-text-field-helper-text:not(.mdc-text-field-helper-text--validation-msg), :host(:not([disabled])) .mdc-text-field-helper-line:not(.mdc-text-field--invalid) .mdc-text-field-character-counter {
  color: var(--mdc-text-field-label-ink-color, rgba(0, 0, 0, 0.6));
}

:host([disabled]) .mdc-text-field:not(.mdc-text-field--outlined) {
  background-color: var(--mdc-text-field-disabled-fill-color, #fafafa);
}
:host([disabled]) .mdc-text-field.mdc-text-field--outlined mwc-notched-outline {
  --mdc-notched-outline-border-color: var(
    --mdc-text-field-outlined-disabled-border-color,
    rgba(0, 0, 0, 0.06)
  );
}
:host([disabled]) .mdc-text-field:not(.mdc-text-field--invalid):not(.mdc-text-field--focused) .mdc-floating-label,
:host([disabled]) .mdc-text-field:not(.mdc-text-field--invalid):not(.mdc-text-field--focused) .mdc-floating-label::after {
  color: var(--mdc-text-field-disabled-ink-color, rgba(0, 0, 0, 0.38));
}
:host([disabled]) .mdc-text-field .mdc-text-field__input,
:host([disabled]) .mdc-text-field .mdc-text-field__input::placeholder {
  color: var(--mdc-text-field-disabled-ink-color, rgba(0, 0, 0, 0.38));
}
:host([disabled]) .mdc-text-field-helper-line .mdc-text-field-helper-text,
:host([disabled]) .mdc-text-field-helper-line .mdc-text-field-character-counter {
  color: var(--mdc-text-field-disabled-ink-color, rgba(0, 0, 0, 0.38));
}
`;
