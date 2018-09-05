import { html, PolymerElement } from "@polymer/polymer/polymer-element.js";
import { MutableData } from "@polymer/polymer/lib/mixins/mutable-data.js";
import "@polymer/polymer/lib/elements/dom-repeat.js";
import { RuxStatus } from "@astrouxds/rux-status/rux-status.js";
// import { RuxSpectrumAnalyzer } from "/src/astro-components/rux-spectrum-analyzer/rux-spectrum-analyzer.js";
/**
 * @polymer
 * @extends HTMLElement
 */
export class AstroElements extends PolymerElement {
  static get properties() {
    return {};
  }
  static get template() {
    return html`
    
    <style>
    :host {
      height: 100%;
      padding: 0 3rem 3rem 3rem;
      width: 100%;
      box-sizing: border-box;
      margin: 0;
      
      
    }
    
    *,
    *:after,
    *:before {
      box-sizing: inherit;
    }
    


.rux-advanced-status {
  position: relative;
  margin: 0 0.75rem;
  line-height: 0;
  /* width: 6.25rem; */
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

.rux-advanced-status__icon-group {
  position: relative;
  display: -webkit-flex;
  display: flex;
  -webkit-justify-content: center;
          justify-content: center;
  max-width: 6.25rem;
  min-width: 4rem;

  /* fauxicon grid. Usefull for gross alignment */
  /*  border: 1px solid red;

  background-image: linear-gradient(
    to right,
    rgba(255, 0, 0, 0) 0,
    rgba(255, 0, 0, 0) 49%,
    rgba(0, 255, 0, 1) 50%,
    rgba(0, 255, 0, 1) 51%,
    rgba(0, 255, 0, 0) 52%,
    rgba(0, 255, 0, 0) 100%
  ); */
}

.rux-advanced-status__status-icon {
  margin: 0 2px 0 auto;
  -webkit-order: 1;
          order: 1;
}

.rux-advanced-status__icon {
  -webkit-order: 2;
          order: 2;
  margin: 0 auto;
}

.rux-advanced-status__icon::before {
  content: "";
  display: block;
  position: relative;
  margin-bottom: -12px;
  margin-left: -18px !important;
  height: 12px;
  width: 12px;
}

.rux-status--off svg {
  fill: #c6ccd1;
}
.rux-status--standby svg {
  fill: #a1dcfb;
}
.rux-status--ok svg {
  fill: #7ed321;
}
.rux-status--caution svg {
  fill: #f8e71c;
}
.rux-status--error svg {
  fill: #c05846;
}
.rux-status--emergency svg {
  fill: #f72501;
}

.rux-status--off .rux-advanced-status__icon::before {
  background-image: url("data:image/svg+xml,%3Csvg%20width%3D%2212%22%20height%3D%2212%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%20%20%20%20%3Cpath%20fill%3D%22%23C6CCD1%22%20d%3D%22M3%203h6v6H3z%22%3E%3C%2Fpath%3E%0A%3C%2Fsvg%3E");
}
.rux-status--standby .rux-advanced-status__icon::before {
  background-image: url("data:image/svg+xml,%3Csvg%20width%3D%2212%22%20height%3D%2212%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%20%20%20%20%3Cpath%20fill%3D%22%23A1DCFB%22%20d%3D%22M6%2012A6%206%200%201%201%206%200a6%206%200%200%201%200%2012zm0-2a4%204%200%201%200%200-8%204%204%200%200%200%200%208z%22%3E%3C%2Fpath%3E%0A%3C%2Fsvg%3E");
}
.rux-status--ok .rux-advanced-status__icon::before {
  background-image: url("data:image/svg+xml,%3Csvg%20width%3D%2212%22%20height%3D%2212%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%20%20%20%20%3Cpath%20fill%3D%22%237ED321%22%20d%3D%22M1%203h10v5H1z%22%3E%3C%2Fpath%3E%0A%3C%2Fsvg%3E");
}
.rux-status--caution .rux-advanced-status__icon::before {
  background-image: url("data:image/svg+xml,%3Csvg%20width%3D%2212%22%20height%3D%2212%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%20%20%20%20%3Cpath%20fill%3D%22%23F8E81C%22%20d%3D%22M1%201h10v10H1z%22%3E%3C%2Fpath%3E%0A%3C%2Fsvg%3E%0A");
}
.rux-status--error .rux-advanced-status__icon::before {
  background-image: url("data:image/svg+xml,%3Csvg%20width%3D%2212%22%20height%3D%2212%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%20%20%20%20%3Ccircle%20fill%3D%22%23C05846%22%20cx%3D%226%22%20cy%3D%226%22%20r%3D%226%22%3E%3C%2Fcircle%3E%0A%3C%2Fsvg%3E%0A");
}
.rux-status--emergency .rux-advanced-status__icon::before {
  background-image: url("data:image/svg+xml,%3Csvg%20width%3D%2212%22%20height%3D%2212%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%20%20%20%20%3Cpath%20fill%3D%22%23F72501%22%20d%3D%22M12%2012H0L6%200z%22%3E%3C%2Fpath%3E%0A%3C%2Fsvg%3E%0A");
}

.rux-advanced-status__badge:empty {
  display: none;
}

.rux-advanced-status__badge {
  display: block;
  z-index: 2;
  -webkit-order: 3;
          order: 3;

  position: absolute;
  bottom: -0.75rem;
  right: -0.5rem;

  border: 1px solid rgba(255, 255, 255, 0.6);
  border-radius: 3px;
  padding: 0.65rem 0.25rem;
  font-size: 0.775rem;
  text-align: center;
  color: #fff;
  background-color: #000;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.rux-advanced-status__label {
  text-align: center;
  color: var(--font-color);
  color: var(--font-color);
  font-size: 0.875rem;
  line-height: 1.2;
  margin-top: 1rem;
  overflow: hidden;
  text-overflow: ellipsis;
  width: 100%;
  max-width: 6.25rem;
  white-space: nowrap;
}

.rux-advanced-status__label__sub-label {
  font-size: 0.65em;
  color: rgba(255, 255, 255, 0.6);
  display: block;
}

.rux-status--off {
  fill: var(--status-off);
  fill: var(--status-off);
}

.rux-status--standby {
  fill: var(--status-standby);
  fill: var(--status-standby);
}

.rux-status--ok {
  fill: #f00;
}

.rux-status--caution {
  fill: var(--status-caution);
  fill: var(--status-caution);
}

.rux-status--error {
  fill: var(--status-error);
  fill: var(--status-error);
}

.rux-status--emergency {
  fill: var(--status-emergency);
  fill: var(--status-emergency);
}

/*
**
** ADVANCED STATUS
** =======================================================================
** Defines the implementation of an advanced status system that expands 
** the generic status icons to custom symbols and badges indicating counts
** 
**
** NOTE: 	This is not a sub-class of the satcom-status class, but an 
**			entirely self-contained library
**			
*/

/*
** SVG utilities
** -----------------------------------------------------------------------
** These handle some basic rendering and inheritance for the SVG icons
**
*/

svg path,
svg circle {
  fill: inherit;
}

/*
** Default Settings for Advanced Status
** -----------------------------------------------------------------------
** Basic margins and default sizes
**
*/
.satcom-advanced-status {
  display: inline-block;
}

.satcom-advanced-status svg {
  height: 2.8em;
  width: 2.8em;
  display: block;
}

/*
** Badges (Optional)
** -----------------------------------------------------------------------
** Small bugs in the lower right corner of a status icon indicating a count
**
** NOTE:	An assumption made here about is badges will always be included
**			in the markup regardless of content, hence the style only being
**			applied in instances where the badge element has content
*/
.satcom-advanced-status .badge:not(:empty) {
  position: absolute;
  left: 80%;
  bottom: 2.25em;
  border-radius: 3px;
  width: auto;
  padding: 0.1em 0.25em 0.1em;
  font-size: 0.9em;
  text-align: center;

  color: #fff;
  background-color: #000;
  border: 1px solid rgba(255, 255, 255, 0.6);
}

/*
** Labels (Optional)
** -----------------------------------------------------------------------
** 
**
** NOTE:	Like badges the assumption here is labels will always be 
**			included in the markup, but may not have content, so these
**			style definitions will only apply to label elements with content
*/
.satcom-advanced-status .label:not(:empty) {
  font-family: open_sanscondensed_light;
  text-align: center;
  color: #fff;
  line-height: 1.2;
  margin-top: 0.5em;
}

/*
** Sub Labels (Optional)
** -----------------------------------------------------------------------
** Mostly a graphical differentiation of supporting data for the primary
** label. E.g., Mhz or dBm
**
** NOTE:	Like badges the assumption here is labels will always be 
**			included in the markup, but may not have content, so these
**			style definitions will only apply to label elements with content
*/
.satcom-advanced-status .sub-label:not(:empty) {
  font-family: open_sansregular;
  font-size: 0.65em;
  color: rgba(255, 255, 255, 0.6);
}

/*
** Status
** -----------------------------------------------------------------------
** Defines the state of the icon both in color and additional status bug
** for color impaired users. Status bugs are the same as those used in the
** standard
** 
**
*/

/* DEFAULT SETTINGS/OFF  */
.satcom-advanced-status,
.satcom-advanced-status-off use {
  fill: #b4bbc2;
}

.satcom-advanced-status::before,
.satcom-advanced-status-off::before {
  content: "";
  display: block;
  height: 12px;
  width: 12px;
  position: absolute;
  left: -15px;
  background-image: url(../images/off.svg);
  background-repeat: no-repeat;
}

/* ALERT */
.satcom-advanced-status-alert use {
  fill: #f72501;
}

.satcom-advanced-status-alert::before {
  background-image: url(../images/alert.svg);
}

/* ERROR */
.satcom-advanced-status-error use {
  fill: #be5849;
}

.satcom-advanced-status-error::before {
  background-image: url(../images/error.svg);
}

/* CAUTION */
.satcom-advanced-status-caution use {
  fill: #f7e63b;
}

.satcom-advanced-status-caution::before {
  background-image: url(../images/caution.svg);
}

/* ALERT */
.satcom-advanced-status-standby use {
  fill: #afddf5;
}
.satcom-advanced-status-standby::before {
  background-image: url(../images/standby.svg);
}

/* OK */
.satcom-advanced-status-ok use {
  fill: #81d135;
}
.satcom-advanced-status-ok::before {
  background-image: url(../images/ok.svg);
}

/*
**
** 	ASTRO BUTTON
** 	==========================================================================
**  3.0 Notes
**  - Removed Master Off Button Style
**  - Replaced various properties with css custom properties to support
**  - Removed .satcom class definition
**  - Removed narrow/short definitions
**	1.4 Notes
**	- Added rux_ and BEM compatible classes to all satcom_ NOTE: satcom_ will be removed in a future version
**	- Disabled user selection of text on all buttons
**	- Removed redundant background hover from 'disabled' state by using :not() on the :hover state
** 	- Removed redundant background hover from 'master off' by using :not() on the :hover state // deprecate after 1.4
**  - Fixed Firefox alignment issue where text was misaligned vertically
**  - Renamed half-height to short and half-width to narrow (Note: rux_ only, satcom_ retains old syntax)
**  - Removed user-select and placed it in astro.css to apply to all input types
**  - Embedded master off icon and removed the additional states required to handle icons and gradient backgrounds
*/

.rux-button-group {
  display: -webkit-flex;
  display: flex;
}

.rux-button-group .rux-button:not(:last-child) {
  margin-right: 0.625rem;
}

/* Global Button Styles */
.rux-button {
  display: -webkit-flex;
  display: flex;
  position: relative;

  margin: 0;
  padding: 0 1rem;

  height: 2.125rem;
  min-width: 2.25rem;
  /* max-width: 10.125rem; */

  border-radius: 3px;

  border-radius: var(--buttonBorderRadius, 3px);

  color: #fff;

  color: var(--buttonTextColor, #fff);
  font-family: "Open Sans";
  font-family: var(--fontFamily, "Open Sans");
  font-size: 1rem;

  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  -webkit-justify-content: center;

          justify-content: center;
  -webkit-align-items: center;
          align-items: center;

  -webkit-user-select: none;

     -moz-user-select: none;

      -ms-user-select: none;

          user-select: none;
}

/* 
  
  Disabled States

*/
/* disabled state */
.rux-button:disabled {
  opacity: 0.4;
  opacity: var(--disabledOpacity, 0.4);
  cursor: not-allowed;
  cursor: var(--disabledCursor, not-allowed);
}

.rux-button:focus {
  outline: none;
}
.rux-button:not(.rux-button--outline) {
  border: 1px solid rgb(0, 90, 143);
  border: 1px solid var(--buttonBackgroundColor, rgb(0, 90, 143));
  background-color: rgb(0, 90, 143);
  background-color: var(--buttonBorderColor, rgb(0, 90, 143));
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.14),
    0 3px 4px rgba(0, 0, 0, 0.12),
    0 1px 5px rgba(0, 0, 0, 0.2)
  ;
  box-shadow: var(
    --controlBoxShadow,
    0 2px 4px rgba(0, 0, 0, 0.14),
    0 3px 4px rgba(0, 0, 0, 0.12),
    0 1px 5px rgba(0, 0, 0, 0.2)
  );
}

.rux-button--default {
  border-color: rgb(255, 255, 255) !important;
  border-color: var(--buttonDefaultBorderColor, rgb(255, 255, 255)) !important;
}

/* Outline Button Specific Styles */
.rux-button--outline {
  color: rgb(255, 255, 255);
  color: var(--buttonOutlineTextColor, rgb(255, 255, 255));
  background-color: transparent;
  background-color: var(--buttonOutlineBackgroundColor, transparent);
  border: 1px solid rgb(0, 90, 143);
  border: 1px solid var(--buttonOutlineBorderColor, rgb(0, 90, 143));
}

/* 
  
  Press/Active States

*/
.rux-button:active:not([hover]):not([disabled]):not(.rux-button--outline) {
  border-color: rgb(0, 90, 143) !important;
  border-color: var(--buttonActiveBorderColor, rgb(0, 90, 143)) !important;
  background-color: rgb(0, 90, 143)
   !important;
  background-color: var(
    --buttonActiveBackgroundColor,
    rgb(0, 90, 143)
  ) !important;
  box-shadow: 0 2px 2px rgba(0, 0, 0, 0.14) !important;
}

/* 
  
  Hover States

*/
.rux-button:hover:not([active]):not([disabled]):not(.rux-button--outline) {
  border-color: rgb(58, 129, 191);
  border-color: var(--buttonHoverBorderColor, rgb(58, 129, 191));
  background-color: rgb(58, 129, 191);
  background-color: var(--buttonHoverBackgroundColor, rgb(58, 129, 191));
  box-shadow: 0 8px 10px 1px rgba(0, 0, 0, 0.14),
    0 3px 14px 3px rgba(0, 0, 0, 0.12),
    0 4px 5px rgba(0, 0, 0, 0.2)
  ;
  box-shadow: var(
    --buttonHoverBoxShadow,
    0 8px 10px 1px rgba(0, 0, 0, 0.14),
    0 3px 14px 3px rgba(0, 0, 0, 0.12),
    0 4px 5px rgba(0, 0, 0, 0.2)
  );
}

.rux-button--outline:hover:not([disabled]) {
  color: rgb(255, 255, 255);
  color: var(--buttonOutlineTextColor, rgb(255, 255, 255));
  background-color: rgba(30, 47, 66, 0.75)
  ;
  background-color: var(
    --buttonOutlineHoverBackgroundColor,
    rgba(30, 47, 66, 0.75)
  );
  border-color: rgb(58, 129, 191);
  border-color: var(--buttonOutlineHoverBorderColor, rgb(58, 129, 191));
}

/* 
  
  Icons

*/

.rux-button--small {
  font-size: 0.875rem;
  font-size: var(--smallLabelTextSize, 0.875rem);
  height: 1.625rem;
  padding: 0 1rem;
  line-height: 1;
}

.rux-button--large {
  font-size: 1.125rem;
  font-size: var(--largeLabelTextSize, 1.125rem);
  height: 2.875rem;
  /* min-width: 2.875rem; */
  padding: 0 1.5rem;
}

.rux-button__icon {
  height: 1.5rem;
  width: 1.5rem;

  margin-right: 0.625rem;
  margin-left: -0.625rem;
}

.rux-button--icon-only .rux-button__icon {
  margin-left: -0.625rem;
  margin-right: -0.625rem;
}

.rux-button--large.rux-button--icon-only .rux-button__icon {
  margin-left: -1rem;
  margin-right: -1rem;
}

.rux-button--small .rux-button__icon {
  height: 0.875rem;
  width: 0.875rem;
}

.rux-button--large .rux-button__icon {
  height: 1.75rem;
  width: 1.75rem;
  margin-left: -0.8rem;
  /* margin: -0.65rem 0.25rem -0.3rem calc((1.5rem - 0.625rem) * -1); */
}

.rux-button__icon .rux-icon {
  height: auto;
  width: 100%;
  fill: rgb(255, 255, 255);
  fill: var(--buttonTextColor, rgb(255, 255, 255));
}

.rux-button.rux-button--critical,
.rux-button.rux-button--critical:active:not([hover]):not([disabled]):not(.rux-button--outline) {
  background-color: rgb(191, 36, 36) !important;
  background-color: var(--colorCriticalDarken1, rgb(191, 36, 36)) !important;
  border-color: rgb(191, 36, 36) !important;
  border-color: var(--colorCriticalDarken1, rgb(191, 36, 36)) !important;
}

.rux-button.rux-button--critical:hover:not([active]):not([disabled]) {
  background-color: rgb(255, 48, 48);
  background-color: var(--colorCritical, rgb(255, 48, 48));
  border-color: rgb(255, 48, 48);
  border-color: var(--colorCritical, rgb(255, 48, 48));
}

.rux-clock {
  display: -webkit-flex;
  display: flex;
  color: rgb(255, 255, 255);
  color: var(--clockTextColor, rgb(255, 255, 255));

  font-size: 1.15rem;
}

.rux-clock__segment {
  display: -webkit-flex;
  display: flex;
  -webkit-flex-direction: column;
          flex-direction: column;
  -webkit-align-items: center;
          align-items: center;
}

.rux-clock__segment__value {
  display: -webkit-flex;
  display: flex;
  -webkit-align-items: center;
          align-items: center;
  font-family: "Roboto Mono", monospace;
  font-family: var(--fontFamilyMono, "Roboto Mono", monospace);
  font-weight: 700;

  border: 1px solid rgb(39, 86, 128);

  border: 1px solid var(--clockBorderColor, rgb(39, 86, 128));

  background-color: rgb(20, 32, 44);

  background-color: var(--clockBackgroundColor, rgb(20, 32, 44));
  margin-bottom: 0.25rem;

  white-space: nowrap;
  overflow-y: hidden;
  text-overflow: ellipsis;
}

.rux-clock--compact .rux-clock__segment__value {
  height: 2.75rem;
  padding: 0 0.75rem;
  font-size: 1.15rem;
  font-weight: 500;
}

.rux-clock:not(.rux-clock--compact) .rux-clock__segment__value {
  font-size: 1.75rem;
  height: 2.75rem;
  padding: 0 0.75rem;
}

.rux-clock__segment__label {
  font-size: 0.875rem;
}

.rux-clock__day-of-the-year .rux-clock__segment__value {
  border-right: none;
}

.rux-clock__aos {
  margin-left: 1em;
}

.rux-clock__los {
  margin-left: 0.5em;
}

/*
**
** 	ASTRO CHECKBOX & RADIO BUTTONS
** 	==========================================================================
**  3.0 Notes
**  Added Custom CSS Properties to support light/dark theming
**  Added fallback properties for IE11
**  2.0 Notes
**  - Removed hand cursor on checkbox
**  - Updated styles to Astro 2.0
**	1.4 Notes
**	- Added rux_ and BEM compatible classes to all satcom_ NOTE: satcom_ will be removed in a future version
**	- Removed prefixed linear gradients
**  - Added line-height to label to fix minor alignment issue
**  - Moved user-select to parent element
**  - Removed user-select and placed it in astro.css to apply to all input types
*/

.rux-checkbox,
.satcom-checkbox,
.rux-radio-button,
.satcom-radio-button {
  display: -webkit-flex;
  display: flex;
  position: relative;
  margin: 0 0 1rem 0;

  line-height: 1.2;

  /* DEBUG */
  /* padding: 1rem; */
  /* outline: 1px solid red;
  background: linear-gradient(
    to bottom,
    rgba(255, 0, 0, 0),
    rgba(255, 0, 0, 0) 49.5%,
    rgba(255, 0, 0, 1) 50%,
    rgba(255, 0, 0, 1) 51.5%,
    rgba(255, 0, 0, 0) 51%,
    rgba(255, 0, 0, 0)
  ); */
}

.rux-checkbox input[type="checkbox"],
.satcom-checkbox input[type="checkbox"],
.rux-radio-button input[type="radio"],
.satcom-radio-button input[type="radio"] {
  -webkit-appearance: none;
  display: none;
}

.rux-checkbox input[type="checkbox"] + label,
.satcom-checkbox input[type="checkbox"] + label,
.rux-radio-button input[type="radio"] + label,
.satcom-radio-button input[type="radio"] + label {
  position: relative;
  display: -webkit-flex;
  display: flex;

  -webkit-align-items: flex-start;

          align-items: flex-start;
  -webkit-justify-content: flex-start;
          justify-content: flex-start;

  color: #fff;

  color: var(--controlLabelColor, #fff);
}

.rux-checkbox input[type="checkbox"] + label::before,
.satcom-checkbox input[type="checkbox"] + label::before,
.rux-radio-button input[type="radio"] + label::before,
.satcom-radio-button input[type="radio"] + label::before {
  display: -webkit-flex;
  display: flex;
  -webkit-flex-shrink: 0;
          flex-shrink: 0;
  -webkit-flex-grow: 0;
          flex-grow: 0;
  content: "";

  height: 1.25rem;

  height: var(--controlOptionSize, 1.25rem);
  width: 1.25rem;
  width: var(--controlOptionSize, 1.25rem);

  margin: 0 0.625rem 0 0;

  border: 1px solid rgb(122, 193, 255);

  border: 1px solid var(--controlBorderColor, rgb(122, 193, 255));
}

.rux-checkbox input[type="checkbox"] + label::before,
.satcom-checkbox input[type="checkbox"] + label::before {
  border-radius: 2px;
}

.rux-radio-button input[type="radio"] + label::before,
.satcom-radio-button input[type="radio"] + label::before {
  border-radius: 100%;
  background-color: none;
}

.rux-checkbox input[type="checkbox"]:checked + label::before,
.satcom-checkbox input[type="checkbox"]:checked + label::before,
.rux-radio-button input[type="radio"]:checked + label::before,
.satcom-radio-button input[type="radio"]:checked + label::before {
  background-color: rgb(58, 129, 191)
  ;
  background-color: var(
    --controlSelectedOutlineBackgroundColor,
    rgb(58, 129, 191)
  );
  border-color: #fff;
  border-color: var(--controlSelectedOutlineBorderColor, #fff);
}

.rux-checkbox input[type="checkbox"]:checked + label::after,
.satcom-checkbox input[type="checkbox"]:checked + label::after,
.rux-radio-button input[type="radio"]:checked + label::after,
.satcom-radio-button input[type="radio"]:checked + label::after {
  position: absolute;
  display: block;

  content: "";
}

.rux-checkbox input[type="checkbox"]:checked + label::after,
.satcom-checkbox input[type="checkbox"]:checked + label::after {
  height: 6px;
  width: 12px;
  top: 5px;
  left: 4px;
  border-right: 2px solid #fff;
  border-right: 2px solid var(--controlTextColor, #fff);
  border-top: 2px solid #fff;
  border-top: 2px solid var(--controlTextColor, #fff);

  -webkit-transform: rotate(125deg);

          transform: rotate(125deg);
}

.rux-radio-button input[type="radio"]:checked + label::after,
.satcom-radio-button input[type="radio"]:checked + label::after {
  top: 5px;
  left: 5px;

  height: 10px;
  width: 10px;

  border-radius: 100%;
  /* box-shadow: inset 0 0 1px 0 rgba(255, 255, 255, 0.9); */

  background-color: #fff;

  background-color: var(--controlTextColor, #fff);
}

.rux-checkbox input[type="checkbox"]:disabled + label,
.satcom-checkbox input[type="checkbox"]:disabled + label,
.rux-radio-button input[type="radio"]:disabled + label,
.satcom-radio-button input[type="radio"]:disabled + label {
  cursor: not-allowed;
  cursor: var(--disabledCursor, not-allowed);
  opacity: 0.4;
  opacity: var(--disabledOpacity, 0.4);
}

/*
**
** 	ASTRO CHECKBOX
** 	==========================================================================
**	2.0.1 Notes
*/

.rux-select {
  -webkit-appearance: none;
  -moz-appearance: none;

  border: 1px solid rgb(0, 90, 143);

  border: 1px solid var(--selectBorderColor, rgb(0, 90, 143));
  border-radius: 3px;
  border-radius: var(--buttonBorderRadius, 3px);

  color: rgb(255, 255, 255);

  color: var(--selectTextColor, rgb(255, 255, 255));
  font-size: 0.875rem;
  line-height: 1;
  height: 2rem;
  padding: 0 1.2rem 0 0.625rem;

  background-color: rgb(0, 90, 143);

  background-color: var(--selectBackgroundColor, rgb(0, 90, 143));
  background-image: url("data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%228%22%20height%3D%225%22%20viewBox%3D%220%200%208%205%22%3E%0A%20%20%3Cpath%20fill%3D%22%23FF2929%22%20fill-rule%3D%22evenodd%22%20d%3D%22M4%200L8%205%200%205z%22%20transform%3D%22matrix(1%200%200%20-1%200%205)%22%2F%3E%0A%3C%2Fsvg%3E%0A");
  background-image: var(
    --selectCaret,
    url("data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%228%22%20height%3D%225%22%20viewBox%3D%220%200%208%205%22%3E%0A%20%20%3Cpath%20fill%3D%22%23FF2929%22%20fill-rule%3D%22evenodd%22%20d%3D%22M4%200L8%205%200%205z%22%20transform%3D%22matrix(1%200%200%20-1%200%205)%22%2F%3E%0A%3C%2Fsvg%3E%0A")
  );
  background-position: center right 0.625rem;
  background-repeat: no-repeat;
}

.rux-select .rux-select optgroup,
.rux-select option {
  color: #000;
  background-color: #fff;
}

.rux-form-element {
  display: -webkit-flex;
  display: flex;
  -webkit-align-items: baseline;
          align-items: baseline;
}

label {
  color: #fff;
}

.rux-icon {
  margin: 0 auto;

  width: 2.8rem;
  height: 2.8rem;

  fill: #329fff;
}

/*
**
** 	ASTRO INPUT TEXT FIELDS
** 	==========================================================================
**	1.4 Notes
**	- Added rux_ and BEM compatible classes to all satcom_ NOTE: satcom_ will be removed in a future version
**	- Removed prefixed linear gradients
**  - Updated text entry field to WCAG
*/

/*
**
** 	INPUT TEXT
** 	==========================================================================
*/

/* 	REQUIRED CLASSES */

label {
  color: rgb(255, 255, 255);
  color: var(--fontColor, rgb(255, 255, 255));
}

.rux-form-field,
.satcom-form-chunk {
  display: -webkit-flex;
  display: flex;
  -webkit-flex-direction: row;
          flex-direction: row;
  -webkit-flex-wrap: wrap;
          flex-wrap: wrap;
  -webkit-align-items: flex-start;
          align-items: flex-start;

  margin: 0 0 1rem 0;
}

.rux-form-field label,
.satcom-form-chunk label {
  display: -webkit-flex;
  display: flex;
  -webkit-order: 0;
          order: 0;
  margin: 0 0 0.25rem 0;
  width: 100%;
  font-size: 1rem;
  font-size: var(--fontSize, 1rem);

  -webkit-user-select: none;

     -moz-user-select: none;

      -ms-user-select: none;

          user-select: none;
}

.rux-form-field input[type="text"],
.rux-form-field input[type="number"],
.rux-form-field input[type="date"],
.rux-form-field input[type="datetimelocal"],
.rux-form-field input[type="email"],
.rux-form-field input[type="month"],
.rux-form-field input[type="password"],
.rux-form-field input[type="search"],
.rux-form-field input[type="tel"],
.rux-form-field input[type="time"],
.rux-form-field input[type="url"],
.rux-form-field input[type="week"],
.satcom-text-entry {
  font-size: 1rem;
  padding: 2px 5px;

  border-radius: 3px;
  border: 1px solid rgb(0, 90, 143);
  border: 1px solid var(--colorPrimary, rgb(0, 90, 143));

  /* border: 2px solid rgba(0, 0, 0, 0.1);
  border-bottom: none; */

  color: #000;

  background: #fff;
  width: calc(100% - 28px);
}

.rux-text-entry:invalid,
.satcom-v2-text-entry:invalid,
.force-validity {
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 29 27'%3E%3cg fill='none' fill-rule='evenodd'%3E%3ccircle cx='13' cy='13' r='13' fill='#F72501'/%3E%3cpath fill='#FFF' d='M14.45 16h-2.902L11 6.055c-.03-.55.392-1.023.944-1.053L12 5h2c.552 0 1 .448 1 1 0 .018 0 .037-.002.055L14.45 16zm-2.936 2.506c.343-.337.842-.506 1.497-.506.635 0 1.124.173 1.47.518.348.345.52.84.52 1.482 0 .62-.174 1.108-.525 1.465-.35.357-.838.535-1.463.535-.64 0-1.134-.175-1.484-.524-.35-.35-.526-.84-.526-1.476 0-.66.17-1.157.514-1.494z'/%3E%3c/g%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: center center;
  background-size: 70%;
  width: 28px;
  height: 28px;

  margin-top: -2px;
}

.required {
  margin-right: 0.4em;
  color: #fff;

  font-size: 16px;
}

.rux-text-entry:disabled,
.satcom-text-entry:disabled {
  opacity: 0.4;
  opacity: var(--disabledOpacity, 0.4);
  cursor: not-allowed;
  cursor: var(--disabledCursor, not-allowed);
}

.rux-log {
  display: block;
  font-size: 0.875rem;
  background-color: rgb(30, 47, 66);
  background-color: var(--logBackgroundColor, rgb(30, 47, 66));
}

.rux-log-header {
  display: -webkit-flex;
  display: flex;
  -webkit-flex-wrap: wrap;
          flex-wrap: wrap;
  position: relative;
  -webkit-justify-content: space-between;
          justify-content: space-between;

  padding: 0.5rem;
  background-color: rgb(20, 32, 44);
  background-color: var(--logHeaderBackgroundColor, rgb(20, 32, 44));
}

.rux-log-header-title {
  margin: 0 0 1rem 0;
  display: none;

  font-size: 1.25rem;
  font-weight: 300;
}

.rux-log__header-labels {
  display: -webkit-flex;
  display: flex;
  width: 100%;
  color: rgb(255, 255, 255);
  color: var(--logHeaderTextColor, rgb(255, 255, 255));
}

.rux-log__header-labels,
.rux-log__events {
  padding: 0;
  margin: 0;
  list-style: none;
}

.rux-log__header-labels,
.rux-log__log-event {
  display: -webkit-flex;
  display: flex;
  -webkit-align-content: flex-start;
          align-content: flex-start;
}

.rux-log__events {
  height: 100%;
  overflow-y: scroll;
}

.log-event__timestamp {
  -webkit-flex-shrink: 0;
          flex-shrink: 0;

  text-align: right;
  width: 5rem;
}

.rux-log__log-event {
  display: -webkit-flex;
  display: flex;
  -webkit-flex-shrink: 0;
          flex-shrink: 0;
  -webkit-align-items: flex-start;
          align-items: flex-start;
  padding: 0.5rem 0;
  border-bottom: 1px solid rgb(40, 63, 88);
  border-bottom: 1px solid var(--logBorderColor, rgb(40, 63, 88));
}

.rux-log__log-event:last-child {
  border-bottom: none;
}

.rux-log__header-labels li:not(:first-child),
.rux-log__log-event > * {
  margin: 0 0.5rem;
}

.rux-log__header-labels li:first-child {
  margin: 0 0.5rem 0 0;
}

.rux-log__log-event .log-event__timestamp {
  font-family: "Roboto Mono", monospace;
  font-family: var(--fontFamilyMono, "Roboto Mono", monospace);
}

.log-event__status {
  -webkit-flex-grow: 0;
          flex-grow: 0;
  -webkit-flex-shrink: 0;
          flex-shrink: 0;
  text-align: center;
  width: 1rem;
  overflow: hidden;
}

.log-event__message {
  -webkit-flex-grow: 1;
          flex-grow: 1;
  text-align: left;
}

.log-header__message {
  display: -webkit-flex;
  display: flex;
  -webkit-justify-content: space-between;
          justify-content: space-between;
}

/* ol li:nth-child(even) {
  background-color: #283f58;
} */

.rux-log__filter-enabled {
  position: -webkit-sticky;
  position: sticky;
  top: 0;
  left: 0;

  -webkit-align-content: center;

          align-content: center;

  color: rgb(0, 0, 0);

  color: var(--logFilterTextColor, rgb(0, 0, 0));
  background-color: rgb(192, 240, 255);
  background-color: var(--logFilterBackgroundColor, rgb(192, 240, 255));
  padding: 0.5rem;
}

.rux-log__filter-enabled rux-icon {
  margin-right: 0.5rem;
}

input[type="search"] {
  border: none;
  border-radius: 3px;
  font-size: 1rem;
  background-image: url("data:image/svg+xml;charset=utf-8,<svg xmlns='http://www.w3.org/2000/svg'/><path d='M6.33 5.67l1 1-3.66 3.66-1-1'/></g></svg>");
}

.rux-modal {
  position: relative;
  display: -webkit-flex;
  display: flex;
  -webkit-flex-direction: column;
          flex-direction: column;
  -webkit-justify-content: space-between;
          justify-content: space-between;

  background-color: rgb(0, 0, 0);

  background-color: var(--modalBackgroundColor, rgb(0, 0, 0));

  width: 28rem;
  height: 13.5rem;
  border: 2px solid rgb(0, 90, 143);
  border: 2px solid var(--modalBorderColor, rgb(0, 90, 143));

  border-radius: 4px;
  margin: auto;
  padding: 0;

  -webkit-user-select: none;

     -moz-user-select: none;

      -ms-user-select: none;

          user-select: none;

  box-shadow: 0 8px 10px 1px rgba(0, 0, 0, 0.14),
    0 3px 14px 3px rgba(0, 0, 0, 0.12), 0 4px 5px 0 rgba(0, 0, 0, 0.2);
}

.rux-modal__titlebar {
  display: -webkit-flex;
  display: flex;
  -webkit-flex-grow: 0;
          flex-grow: 0;
  -webkit-justify-content: center;
          justify-content: center;
  -webkit-align-items: center;
          align-items: center;

  width: 100%;
  height: 2rem;

  background-color: rgb(0, 90, 143);

  background-color: var(--modalBorderColor, rgb(0, 90, 143));
  -webkit-user-select: none;
     -moz-user-select: none;
      -ms-user-select: none;
          user-select: none;
  cursor: move;
}

.rux-modal__titlebar h1 {
  font-size: 1rem;
  font-weight: 600;
  padding: 0;
  margin: 0;
  line-height: 1.2;

  color: #fff !important;
}

.rux-modal__content {
  height: 100%;
  display: -webkit-flex;
  display: flex;
  -webkit-flex-direction: column;
          flex-direction: column;
  -webkit-flex-grow: 1;
          flex-grow: 1;
  padding: 1rem;
  color: #fff;
  color: var(--fontColor, #fff);
}

.rux-button-group {
  margin-top: auto;
  margin-left: auto;
}

.rux-modal__message {
  margin: 0.5rem 1.875rem 2.5rem 1.875rem;
}

.rux-modal .rux-button {
  box-shadow: none !important;
}

/*
**
** 	ASTRO NOTIFICATION
** 	==========================================================================
**	2.0 Notes
**
*/
.rux-notification {
  display: -webkit-flex;
  display: flex;
  -webkit-justify-content: space-between;
          justify-content: space-between;
  -webkit-flex-wrap: nowrap;
          flex-wrap: nowrap;
  -webkit-flex-grow: 1;
          flex-grow: 1;
  -webkit-align-items: center;
          align-items: center;
  -webkit-align-content: center;
          align-content: center;

  top: -4.25rem;
  left: 0;

  height: 4.25rem;
  width: 100%;

  padding: 0.7rem 1.25rem;
  background-color: rgb(160, 232, 255);
  background-color: var(--colorStandbyLighten1, rgb(160, 232, 255));
  transition: all 0.5s ease;

  box-sizing: border-box;
  color: rgb(0, 0, 0);
  color: var(--colorBlack, rgb(0, 0, 0));
}

.rux-notification::after {
  position: relative;
  display: block;
  content: "";
  height: 60px;
}

.visible {
  margin-top: 0;
}

.notification-buffer.show {
  margin-top: 0;
}

.show .rux-notification-container {
  top: 0;
}
.show .rux-notification-buffer {
  height: 60px;
}

.rux-notification_close-button {
  border: 3px solid rgb(96, 168, 191);
  border: 3px solid var(--colorStandbyDarken1, rgb(96, 168, 191));
  color: rgb(96, 168, 191);
  color: var(--colorStandbyDarken1, rgb(96, 168, 191));

  background-color: transparent;

  height: 2.2rem;
  width: 2.2rem;
  border-radius: 50%;

  position: relative;

  margin-left: auto;

  display: -webkit-flex;

  display: flex;
  -webkit-justify-content: center;
          justify-content: center;
  -webkit-align-items: center;
          align-items: center;
}

.rux-notification_close-button::after,
.rux-notification_close-button::before {
  display: block;
  position: absolute;

  height: 2px;
  width: 66%;

  content: "";

  background-color: rgb(96, 168, 191);

  background-color: var(--colorStandbyDarken1, rgb(96, 168, 191));
}

.rux-notification_close-button::after {
  -webkit-transform: rotate(-45deg);
          transform: rotate(-45deg);
}

.rux-notification_close-button::before {
  -webkit-transform: rotate(45deg);
          transform: rotate(45deg);
}

/* Critical Variant */
.rux-notification--critical {
  background-color: rgb(255, 100, 100);
  background-color: var(--colorCriticalLighten1, rgb(255, 100, 100));
}

.rux-notification--critical .rux-notification_close-button {
  border-color: rgb(191, 36, 36);
  border-color: var(--colorCriticalDarken1, rgb(191, 36, 36));
}

.rux-notification--critical .rux-notification_close-button::after,
.rux-notification--critical .rux-notification_close-button::before {
  background-color: rgb(191, 36, 36);
  background-color: var(--colorCriticalDarken1, rgb(191, 36, 36));
}

/* Caution Variant */
.rux-notification--caution {
  background-color: rgb(250, 237, 86);
  background-color: var(--colorCautionLighten1, rgb(250, 237, 86));
}
.rux-notification--caution .rux-notification_close-button {
  border-color: rgb(186, 173, 22);
  border-color: var(--colorCautionDarken1, rgb(186, 173, 22));
}

.rux-notification--caution .rux-notification_close-button::after,
.rux-notification--caution .rux-notification_close-button::before {
  background-color: rgb(186, 173, 22);
  background-color: var(--colorCautionDarken1, rgb(186, 173, 22));
}

/* Normal Variant */
.rux-notification--normal {
  background-color: rgb(173, 255, 128);
  background-color: var(--colorNormalLighten2, rgb(173, 255, 128));
}

.rux-notification--normal .rux-notification_close-button {
  border-color: rgb(68, 191, 0);
  border-color: var(--colorNormalDarken1, rgb(68, 191, 0));
}

.rux-notification--normal .rux-notification_close-button::after,
.rux-notification--normal .rux-notification_close-button::before {
  background-color: rgb(68, 191, 0);
  background-color: var(--colorNormalDarken1, rgb(68, 191, 0));
}

/* Info Variant */
.rux-notification--info {
  background-color: rgb(160, 232, 255);
  background-color: var(--colorStandbyLighten1, rgb(160, 232, 255));
}
.rux-notification--info .rux-notification_close-button {
  border-color: rgb(96, 168, 191);
  border-color: var(--colorStandbyDarken1, rgb(96, 168, 191));
}

.rux-notification--info .rux-notification_close-button::after,
.rux-notification--info .rux-notification_close-button::before {
  background-color: rgb(96, 168, 191);
  background-color: var(--colorStandbyDarken1, rgb(96, 168, 191));
}

/*
**
** 	ASTRO POP-UPS
** 	==========================================================================
**	1.4 Notes
**	- Added rux_ and BEM compatible classes to all satcom_ NOTE: satcom_ will be removed in a future version
**	- Removed prefixed transform
**  - Updated colors to WCAG
*/

/* 	REQUIRED CLASSES */
.rux-pop-up,
.satcom-pop-up {
  font-size: 0.875rem;
  display: inline-block;

  margin: 1em;

  min-width: 15em;
  position: relative;

  border: 1px solid rgb(77, 172, 255);

  border: 1px solid var(--colorSecondary, rgb(77, 172, 255));
}

.rux-pop-up ul,
.satcom-pop-up ul {
  position: relative;
  list-style: none;
  padding: 0;
  margin: 0;
  background: none;
  background-color: #fff;

  z-index: 2;
}

/* .rux-pop-up li,
.satcom-pop-up li {
  border-bottom: 1px solid #f0f1f3;
} */

.rux-pop-up li:last-child,
.satcom-pop-up li:last-child {
  border: none;
}

.rux-pop-up a,
.satcom-pop-up a {
  display: block;
  padding: 0.5em;
  color: #000;
  text-decoration: none;

  min-width: 15em;
  max-width: 20em;
}

.rux-pop-up a:hover,
.satcom-pop-up a:hover {
  background-color: rgb(211, 234, 255);
  background-color: var(--colorSecondaryLighten3, rgb(211, 234, 255));
}

.rux-pop-up--top,
.satcom-pop-up-top {
  border-top: 3px solid rgb(77, 172, 255);
  border-top: 3px solid var(--colorSecondary, rgb(77, 172, 255));
}

.rux-pop-up--top::before,
.satcom-pop-up-top::before {
  content: "";
  display: block;
  position: absolute;

  width: 1.1875rem;
  height: 1.1875rem;

  background-color: rgb(77, 172, 255);

  background-color: var(--colorSecondary, rgb(77, 172, 255));
  z-index: 1;

  margin: -13px 0 0 16px;
  -webkit-transform: rotate(45deg);
          transform: rotate(45deg);
}

.rux-pop-up--bottom,
.satcom-pop-up-bottom {
  border-bottom: 3px solid rgb(77, 172, 255);
  border-bottom: 3px solid var(--colorSecondary, rgb(77, 172, 255));
}

.rux-pop-up--bottom::after,
.satcom-pop-up-bottom::after {
  content: "";
  display: block;
  position: absolute;
  border-bottom: 1px solid rgb(77, 172, 255);
  border-bottom: 1px solid var(--colorSecondary, rgb(77, 172, 255));
  border-right: 1px solid rgb(77, 172, 255);
  border-right: 1px solid var(--colorSecondary, rgb(77, 172, 255));
  width: 1.1875rem;
  height: 1.1875rem;

  background-color: rgb(77, 172, 255);

  background-color: var(--colorSecondary, rgb(77, 172, 255));

  margin: -6px 0 0 16px;
  -webkit-transform: rotate(45deg);
          transform: rotate(45deg);
}

.rux-pop-up--left,
.satcom-pop-up-left {
  border-left: 3px solid rgb(77, 172, 255);
  border-left: 3px solid var(--colorSecondary, rgb(77, 172, 255));
}

.rux-pop-up--left::before,
.satcom-pop-up-left::before {
  content: "";
  display: block;
  position: absolute;
  border-bottom: 1px solid rgb(77, 172, 255);
  border-bottom: 1px solid var(--colorSecondary, rgb(77, 172, 255));
  border-left: 1px solid rgb(77, 172, 255);
  border-left: 1px solid var(--colorSecondary, rgb(77, 172, 255));
  width: 1.1875rem;
  height: 1.1875rem;

  background-color: rgb(77, 172, 255);

  background-color: var(--colorSecondary, rgb(77, 172, 255));

  margin: 16px 0 0 -13px;
  -webkit-transform: rotate(45deg);
          transform: rotate(45deg);
}

.rux-pop-up--right,
.satcom-pop-up-right {
  border-right: 3px solid rgb(77, 172, 255);
  border-right: 3px solid var(--colorSecondary, rgb(77, 172, 255));
}

.rux-pop-up--right::before,
.satcom-pop-up-right::before {
  content: "";
  display: block;
  position: absolute;
  border-top: 1px solid rgb(77, 172, 255);
  border-top: 1px solid var(--colorSecondary, rgb(77, 172, 255));
  border-right: 1px solid rgb(77, 172, 255);
  border-right: 1px solid var(--colorSecondary, rgb(77, 172, 255));
  width: 1.1875rem;
  height: 1.1875rem;

  background-color: rgb(77, 172, 255);

  background-color: var(--colorSecondary, rgb(77, 172, 255));

  right: 0;
  margin: 16px -13px 0 0;
  -webkit-transform: rotate(45deg);
          transform: rotate(45deg);
}

/*
**
** 	ASTRO PROGRESS
** 	==========================================================================
**	2.0 Notes
**  - Updated indeterminate progress to use animated SVG and the :indeterminate pseudo class
**	1.4 Notes
**	- Added rux_ and BEM compatible classes to all satcom_ NOTE: satcom_ will be removed in a future version
**  - In addition to rux_ added the correct spelling of indeterminate as an additional selector
**  - Combined indeterminate and determinate progress styles
**  - DETERMINATE
**  - Made container a flex element
**  - Made percentage readout have an appropriate margin (NOTE: without a text rep the progress bar will scale to full width. Flexbox is neat.
**  - Fixed alignment issue in Safari/Chrome where the progress bar was 2-3 pixels too low
**  - Fixed width (on Chrome/Safari) of 100% width progress bar expanding past the border of the track
**  - INDETERMINATE
**  - Removed prefixed animation. Safari 8 was the last browser that required it
**  - [REMOVED] Embeded SVG graphics embeded SVG graphic stopped working
**  -
**  - !! NOTE !!
**  - The whole progress bar needs a rewrite. Better native elements and CSS properties should be used
**  -
*/

.rux-progress {
  --progressPadding: 2px 0 0 2px;
  --progressRadius: 10px;
  --progressHeight: 14px;
  --progressWidth: calc(100% - 4px);

  display: -webkit-flex;

  display: flex;
  position: relative;

  -webkit-justify-content: space-between;

          justify-content: space-between;
  -webkit-align-items: center;
          align-items: center;
}

.rux-progress progress[value] {
  -webkit-appearance: none;
     -moz-appearance: none;
          appearance: none;

  /* background: #21384f; */
  background-color: rgb(30, 47, 66)
  ;
  background-color: var(
    --progressDeterminateTrackBackgroundColor,
    rgb(30, 47, 66)
  );
  border: 1px solid rgb(20, 32, 44);
  border: 1px solid var(--progressDeterminateTrackBorderColor, rgb(20, 32, 44));
  border-radius: var(--progressRadius);
  border-radius: var(--progressRadius);
  height: 20px;
  width: 100%;
}

.rux-progress__value {
  margin-left: 1rem;

  text-align: right;
  font-size: 24px;
  color: #fff;
  color: var(--controlLabelColor, #fff);
}

.rux-progress progress[value]::-webkit-progress-bar {
  background-color: transparent;
}

.rux-progress progress[value]::-webkit-progress-value {
  border-radius: var(--progressRadius);
  border-radius: var(--progressRadius);

  height: var(--progressHeight);

  height: var(--progressHeight);
  margin: var(--progressPadding);
  margin: var(--progressPadding);
  max-width: var(--progressWidth);
  max-width: var(--progressWidth);

  background: rgb(77, 172, 255);

  background: var(--progressDeterminateBarBackgroundColor, rgb(77, 172, 255));
}

.rux-progress progress[value]::-ms-fill {
  border-radius: var(--progressRadius);
  border-radius: var(--progressRadius);

  height: var(--progressHeight), 14px;

  height: var(--progressHeight), 14px;
  margin: 2px;
  margin: var(--progressPadding, 2px);
  max-width: var(--progressWidth);
  max-width: var(--progressWidth);

  background: rgb(77, 172, 255);

  background: var(--progressDeterminateBarBackgroundColor, rgb(77, 172, 255));
}

.rux-progress progress[value]::-moz-progress-bar {
  border-radius: var(--progressRadius);
  border-radius: var(--progressRadius);

  margin: 2px 2px 0 2px;
  height: var(--progressHeight);
  height: var(--progressHeight);
  max-width: var(--progressWidth);
  max-width: var(--progressWidth);

  background: rgb(77, 172, 255);

  background: var(--progressDeterminateBarBackgroundColor, rgb(77, 172, 255));
}

/* Indeterminate */
.rux-progress progress:indeterminate {
  -webkit-appearance: none;

  position: relative;

  height: 5rem;
  width: 5rem;
  background-color: transparent;
  /* outline: 1px solid rgba(0, 255, 0, 0.2); */
  border: none;

  background-image: url("data:image/svg+xml,%3Csvg width='64' height='64' xmlns='http://www.w3.org/2000/svg'%3E %3Cdefs%3E %3ClinearGradient x1='65.479%25' y1='-8.436%25' x2='50%25' y2='100%25' id='a'%3E %3Cstop stop-color='%235CB3FF' offset='0%25'/%3E %3Cstop stop-color='%23010F1B' stop-opacity='0' offset='100%25'/%3E %3C/linearGradient%3E %3C/defs%3E %3Cg fill='none' fill-rule='evenodd'%3E %3Cpath d='M32 64C14.327 64 0 49.673 0 32 0 14.327 14.327 0 32 0c17.673 0 32 14.327 32 32 0 17.673-14.327 32-32 32zm0-6c14.36 0 26-11.64 26-26S46.36 6 32 6 6 17.64 6 32s11.64 26 26 26z' fill='%23192B3C'/%3E %3Cpath d='M51.908 8.236l-2.358 3.245A26.894 26.894 0 0 0 32 5C17.088 5 5 17.088 5 32s12.088 27 27 27c1.129 0 2.242-.07 3.334-.204l4.435 3.222C37.286 62.66 34.683 63 32 63 14.88 63 1 49.12 1 32 1 14.88 14.88 1 32 1c7.579 0 14.522 2.72 19.908 7.236z' fill='url(%23a)'/%3E %3Cpath d='M47.564 12c1.92 0 3.557-.64 4.075-2.367.112-.375.361-.67.361-1.08C52 6.248 50.572 4 48.234 4S44 5.867 44 8.17c0 2.304 1.225 3.83 3.564 3.83z' fill='%2352AEFF'/%3E %3C/g%3E %3C/svg%3E ")
  ;

  background-image: var(
    --progressIndeterminate,
    url("data:image/svg+xml,%3Csvg width='64' height='64' xmlns='http://www.w3.org/2000/svg'%3E %3Cdefs%3E %3ClinearGradient x1='65.479%25' y1='-8.436%25' x2='50%25' y2='100%25' id='a'%3E %3Cstop stop-color='%235CB3FF' offset='0%25'/%3E %3Cstop stop-color='%23010F1B' stop-opacity='0' offset='100%25'/%3E %3C/linearGradient%3E %3C/defs%3E %3Cg fill='none' fill-rule='evenodd'%3E %3Cpath d='M32 64C14.327 64 0 49.673 0 32 0 14.327 14.327 0 32 0c17.673 0 32 14.327 32 32 0 17.673-14.327 32-32 32zm0-6c14.36 0 26-11.64 26-26S46.36 6 32 6 6 17.64 6 32s11.64 26 26 26z' fill='%23192B3C'/%3E %3Cpath d='M51.908 8.236l-2.358 3.245A26.894 26.894 0 0 0 32 5C17.088 5 5 17.088 5 32s12.088 27 27 27c1.129 0 2.242-.07 3.334-.204l4.435 3.222C37.286 62.66 34.683 63 32 63 14.88 63 1 49.12 1 32 1 14.88 14.88 1 32 1c7.579 0 14.522 2.72 19.908 7.236z' fill='url(%23a)'/%3E %3Cpath d='M47.564 12c1.92 0 3.557-.64 4.075-2.367.112-.375.361-.67.361-1.08C52 6.248 50.572 4 48.234 4S44 5.867 44 8.17c0 2.304 1.225 3.83 3.564 3.83z' fill='%2352AEFF'/%3E %3C/g%3E %3C/svg%3E ")
  );
  background-repeat: no-repeat;
  background-position: center center;

  -webkit-animation-name: spin;

          animation-name: spin;
  -webkit-animation-duration: 1.367s;
          animation-duration: 1.367s;
  -webkit-animation-iteration-count: infinite;
          animation-iteration-count: infinite;
  -webkit-animation-timing-function: linear;
          animation-timing-function: linear;
}

/* Removes the default animation from IE */
.rux-progress progress:indeterminate::-ms-fill {
  animation-name: none;
}

.rux-progress progress:indeterminate::-moz-progress-bar {
  background-color: transparent;
}

.rux-progress progress:indeterminate::-webkit-progress-value,
.rux-progress progress:indeterminate::-webkit-progress-bar {
  background-color: transparent;
}

@-webkit-keyframes spin {
  from {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  to {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}

@keyframes spin {
  from {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  to {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}

/*
**
** 	ASTRO PUSHBUTTONS
** 	==========================================================================
**  3.0 Notes
**	- Updated with css custom properties for light/dark theme
**  2.1 Notes
**	- Moved Pushbuttons to its own style
**	1.4 Notes
**	- Added rux_ and BEM compatible classes to all satcom_ NOTE: satcom_ will be removed in a future version
**	- Removed prefixed linear gradients
**	- Removed prefixed transition
**  - Fixed added colon to checked pseudo class (e.g., checked became :checked)
**  - Alignment issue fixed on toggle button label
**  - Updated to WCAG colors
**  - Updated transition speed
*/

.rux-pushbutton,
.satcom-pushbutton {
  display: inline-block;

  height: 1.3125rem;

  /* width: auto; */
  -webkit-font-smoothing: subpixel-antialiased;
}

.rux-pushbutton__input,
.satcom-pushbutton-input {
  display: none;
}

.rux-pushbutton__button,
.satcom-pushbutton-button {
  display: -webkit-flex;
  display: flex;

  -webkit-justify-content: center;

          justify-content: center;
  -webkit-align-items: center;
          align-items: center;

  height: 1.375rem;
  font-size: 0.75rem !important;

  margin: 0;
  padding: 0 0.625rem;

  color: rgb(255, 255, 255);

  color: var(--pushbuttonTextColor, rgb(255, 255, 255));

  background-color: rgb(0, 90, 143);

  background-color: var(--pushbuttonBackgroundColor, rgb(0, 90, 143));
  border-radius: 3px;
  border-radius: var(--defaultBorderRadius, 3px);
  border: 1px solid rgb(30, 47, 66);
  border: 1px solid var(--pushbuttonBorderColor, rgb(30, 47, 66));
}

.rux-pushbutton__input:checked + .rux-pushbutton__button,
.satcom-pushbutton-input:checked + .satcom-pushbutton-button {
  display: -webkit-flex;
  display: flex;
  color: rgb(91, 255, 0);
  color: var(--pushbuttonSelectedTextColor, rgb(91, 255, 0));
  background-color: rgb(0, 0, 0);
  background-color: var(--pushbuttonSelectedBackgroundColor, rgb(0, 0, 0));
  border-color: rgb(0, 0, 0);
  border-color: var(--pushbuttonSelectedBorderColor, rgb(0, 0, 0));

  box-shadow: inset 0 0 4px rgba(0, 0, 0, 0.33);
}

.rux-pushbutton__input:not(:checked) + .rux-pushbutton__button .on,
.satcom-pushbutton-input:not(:checked) + .satcom-pushbutton-button .on {
  display: none;
}

.rux-pushbutton__input:disabled + .rux-pushbutton__button,
.satcom-pushbutton-input:disabled + .satcom-pushbutton-button {
  opacity: 0.4;
  opacity: var(--disabledOpacity, 0.4);
  cursor: not-allowed;
  cursor: var(-disabledCursor, not-allowed);
}

/*
**
** 	ASTRO RADIO BUTTON
** 	==========================================================================
**  3.0 Notes
**  Moved all directives to 
**  2.0 Notes
**  - Removed hand cursor on checkbox
**  - Updated styles to Astro 2.0
**	1.4 Notes
**	- Added rux_ and BEM compatible classes to all satcom_ NOTE: satcom_ will be removed in a future version
**	- Removed prefixed linear gradients
**  - Removed user-select and placed it in astro.css to apply to all input types
**  - Added line-height to label to fix minor alignment issue
**  - Adjusted background position of checked state to sit more centrally
*/

/*
**
** 	ASTRO SEGMENTED BUTTON
** 	==========================================================================
**  3.0 Notes
**  Don‘t forget to update Sketch with outline border color

*/

.rux-segmented-buttons {
  display: -webkit-inline-flex;
  display: inline-flex;
  height: 1.6875rem;

  overflow: hidden;

  padding: 0;
  margin: 0;

  list-style: none;

  border-radius: 3px;

  border-radius: var(--controlBorderRadius, 3px);
  border: 1px solid rgb(30, 47, 66);
  border: 1px solid var(--segmentedButtonBorderColor, rgb(30, 47, 66));
}

.rux-segmented-button {
  height: 1.6875rem;
  width: auto;
  margin: 0;
  padding: 0;
}

.rux-segmented-button label {
  display: -webkit-flex;
  display: flex;
  -webkit-justify-content: center;
          justify-content: center;
  -webkit-align-items: center;
          align-items: center;

  width: auto;
  height: 1.5625rem;

  margin: 0;
  padding: 0 0.75rem;

  border: none;
  border-right: 1px solid rgb(30, 47, 66);
  border-right: 1px solid var(--segmentedButtonBorderColor, rgb(30, 47, 66));

  color: #fff;

  color: var(--segmentedButtonTextColor, #fff);
  background-color: rgb(0, 90, 143);
  background-color: var(--segmentedButtonBackgroundColor, rgb(0, 90, 143));

  font-size: 0.875rem;

  -webkit-user-select: none;

     -moz-user-select: none;

      -ms-user-select: none;

          user-select: none;
}

.rux-segmented-button:last-child label {
  border-right: none !important;
}

.rux-segmented-button input {
  display: none !important;
}

.rux-segmented-button label:hover {
  background-color: rgb(58, 129, 191)
  ;
  background-color: var(
    --segmentedButtonHoverBackgroundColor,
    rgb(58, 129, 191)
  );
  color: #fff;
  color: var(--segmentedButtonHoverTextColor, #fff);
  outline: none;
}

.rux-segmented-button input:checked + label {
  background-color: rgb(58, 129, 191)
  ;
  background-color: var(
    --segmentedButtonSelectedBackgroundColor,
    rgb(58, 129, 191)
  );
  color: #fff;
  color: var(--segmentedButtonSelectedTextColor, #fff);
}

/*
**
** 	ASTRO SLIDER
** 	==========================================================================
**  3.0 Notes
**  Removed SVG dependancy for the thumb element
**  Updated to 3.0 look/feel
**  Added CSS Custom Property support for light/dark theming
**  2.1 Notes
**  - Added support for bifurcated range slider
**	1.4 Notes
**	- Added rux_ compatible classes to all satcom_ NOTE: satcom_ will be removed in a future version
**	- Removed prefixed linear gradients
**  - Removed focus ring from Chrome (probably need an actual focus solution)
**  - Updated SVG
*/

.rux-slider {
  /* outline: 1px solid red; */
}

/* 
    Internal Variables 
    Because Chrome, Firefox and IE all require explicit declarations to style
    the slider/range component these minimize the need to add repeat values
    between the three
  */

:root {
  --thumbSize: 1.25rem;
  --thumbSize: var(--controlOptionSize, 1.25rem);
  --thumbShadow: 0 6px 10px rgba(0, 0, 0, 0.14), 0 1px 18px rgba(0, 0, 0, 0.12),
    0 3px 5px rgba(0, 0, 0, 0.2);
  --thumbShadowActive: inset 0 0 0 4px var(--colorPrimary), 0 6px 10px rgba(0, 0, 0, 0.14), 0 1px 18px rgba(0, 0, 0, 0.12),
    0 3px 5px rgba(0, 0, 0, 0.2);
  --thumbShadowActive: inset 0 0 0 4px var(--colorPrimary), var(--thumbShadow);

  --trackHeight: 2px;
  --trackCursor: pointer;
}

.rux-slider label input {
  margin-left: auto;
  margin-right: 0;
}

.rux-range,
.satcom-range {
  -webkit-appearance: none;
     -moz-appearance: none;
          appearance: none;

  background: none;

  width: 100%;
}

input[type="range"]:focus {
  outline: none;
}

.rux-range::-webkit-slider-runnable-track,
.satcom-range::-webkit-slider-runnable-track {
  display: -webkit-flex;
  display: flex;
  -webkit-align-items: center;
          align-items: center;

  /* width: 100%; */
  height: 2px;
  height: var(--trackHeight);
  cursor: pointer;
  cursor: var(--trackCursor);

  background-color: rgb(217, 217, 217);

  background-color: var(--sliderTrackBackgroundColor, rgb(217, 217, 217));
  outline: 1px solid transparent;
  outline: 1px solid var(--sliderTrackBorderColor, transparent);

  background-image: linear-gradient(
    to right,
    rgb(77, 172, 255) 0%,
    rgb(77, 172, 255)
      calc(1% * var(--value)),
    rgb(217, 217, 217)
      calc(1% * var(--value)),
    rgb(217, 217, 217) 100%
  );

  background-image: linear-gradient(
    to right,
    var(--sliderSelectedTrackBackgroundColor, rgb(77, 172, 255)) 0%,
    var(--sliderSelectedTrackBackgroundColor, rgb(77, 172, 255))
      calc(1% * var(--value)),
    var(--sliderTrackBackgroundColor, rgb(217, 217, 217))
      calc(1% * var(--value)),
    var(--sliderTrackBackgroundColor, rgb(217, 217, 217)) 100%
  );
}

.rux-range::-webkit-slider-thumb,
.satcom-range::-webkit-slider-thumb {
  -webkit-appearance: none;

  position: relative;

  height: 1.25rem;

  height: var(--thumbSize);
  width: 1.25rem;
  width: var(--thumbSize);

  border-radius: 100%;
  border: 1px solid rgb(255, 255, 255);
  border: 1px solid var(--sliderThumbBorderColor, rgb(255, 255, 255));
  background-color: rgb(0, 90, 143);
  background-color: var(--sliderThumbBackgroundColor, rgb(0, 90, 143));

  cursor: pointer;
  box-shadow: inset 0 0 1px 0 rgba(255, 255, 255, 0.9), 0 6px 10px rgba(0, 0, 0, 0.14), 0 1px 18px rgba(0, 0, 0, 0.12),
    0 3px 5px rgba(0, 0, 0, 0.2);
  box-shadow: inset 0 0 1px 0 rgba(255, 255, 255, 0.9), var(--thumbShadow);
}

.rux-range:disabled::-webkit-slider-runnable-track,
.satcom-range:disabled::-webkit-slider-runnable-track {
  opacity: 0.4;
  opacity: var(--disabledOpacity, 0.4);
  cursor: not-allowed;
  cursor: var(--disabledCursor, not-allowed);
}

.rux-range:disabled::-webkit-slider-thumb,
.satcom-range:disabled::-webkit-slider-thumbtrack {
  cursor: not-allowed;
  cursor: var(--disabledCursor, not-allowed);
}

.rux-range:not(:disabled)::-webkit-slider-thumb:active,
.satcom-range:not(:disabled)::-webkit-slider-thumb:active {
  border-color: var(--colorSecondary);
  border-color: var(--colorSecondary);
  background-color: #fff;
  box-shadow: inset 0 0 0 4px var(--colorPrimary), 0 6px 10px rgba(0, 0, 0, 0.14), 0 1px 18px rgba(0, 0, 0, 0.12),
    0 3px 5px rgba(0, 0, 0, 0.2);
  box-shadow: var(--thumbShadowActive);
}

.rux-range:not(:disabled)::-webkit-slider-thumb:focus,
.rux-range:not(:disabled)::-webkit-slider-thumb:hover:not(:active),
.satcom-range:not(:disabled)::-webkit-slider-thumb:focus,
.satcom-range:not(:disabled)::-webkit-slider-thumb:hover:not(:active) {
  background-color: rgb(58, 129, 191);
  background-color: var(--sliderHoverThumbBackgroundColor, rgb(58, 129, 191));
}

/*
**
** 	ASTRO STATUS INDICATOR
** 	==========================================================================
**  3.0 Notes
**  Removed margin on status symbols
**	1.4 Notes
**	- Added rux_ and BEM compatible classes to all satcom_ NOTE: satcom_ will be removed in a future version
**  - Embeded SVG graphics
*/
.rux-status,
.satcom-status {
  font-size: 1rem;

  line-height: 1;
  padding: 0;
  vertical-align: middle;
  text-align: center;
  /* border: 1px solid red !important; */
}

/* Icon */
.rux-status::before,
.satcom-status::before {
  content: "";
  display: inline-block;
  height: 15px;
  width: 15px;

  margin: 0 auto;
  vertical-align: middle;

  background-repeat: no-repeat;
}

/* Specific Status Colors & Iconography */
.rux-status--off::before,
.satcom-status-off::before {
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Crect width='5' height='5' fill='%23C6CCD1' transform='translate(4 4)'/%3E%3C/svg%3E");
  background-position: 0 0;
}

.rux-status--standby::before,
.satcom-status-standby::before {
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Ccircle cx='5' cy='5' r='5' stroke='%23A1DCFB' fill='none' stroke-width='2' transform='translate(1 1)'/%3E%3C/svg%3E");
  background-position: 0 0;
}

.rux-status--normal::before,
.rux-status--ok::before,
.satcom-status-ok::before {
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Crect width='10' height='5' fill='%237ED321' transform='translate(1 4)'/%3E%3C/svg%3E");
  background-position: 1px 1px;
}

.rux-status--caution::before,
.satcom-status-caution::before {
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Crect width='10' height='10' fill='%23F8E81C' transform='translate(1 1)'/%3E%3C/svg%3E");
  background-position: 1px 1px;
}

.rux-status--serious::before,
.rux-status--error::before,
.satcom-status-error::before {
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Ccircle cx='5.5' cy='5.5' r='5.5' fill='rgb(255, 176, 0)' transform='translate(1 1)'/%3E%3C/svg%3E");
  background-position: 0 0;
}

.rux-status--critical::before,
.rux-status--alert::before,
.satcom-status-alert::before {
  background-image: url("data:image/svg+xml,%3Csvg%20width%3D%2212px%22%20height%3D%2212px%22%20viewBox%3D%220%200%2012%2012%22%20version%3D%221.1%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%20%20%20%20%20%3Cg%20id%3D%22emergency%22%3E%0A%20%20%20%20%20%20%20%20%3Cpath%20fill%3D%22%23F72501%22%20d%3D%22M12%2012H0L6%200z%22%2F%3E%0A%20%20%20%20%3C%2Fg%3E%0A%3C%2Fsvg%3E");
  background-position: 1px 0;
}

/* Small Status Modifiers */
.rux-status--small,
.satcom-status-small {
  font-size: 0.8rem;
  margin: 0 0 1rem 0;
}

.rux-status--small::before,
.satcom-status-small::before {
  height: 18px;
  width: 18px;
}

/*
**
** 	TABLE
** 	==========================================================================
*/



/* 	REQUIRED CLASSES */
.rux-table,
.satcom-table {
  border-collapse: separate;
  border-spacing: 5px;

  color: #fff;
}


.rux-table th,
.satcom-table th {
  font-stretch: condensed;
  font-weight: 300;
  text-align: left;
  color: rgba(255, 255, 255, 0.6);
}



.rux-table tr,
.satcom-table tr {
  
}

.rux-table td,
.rux-table th,
.satcom-table td,
.satcom-table th {
  padding: 0.5em 1em 1em 0.75em;


  border-top: 1px solid rgba(216, 216, 216, 0.1);
  background-color: rgba(216, 216, 216, 0.1);
}

.rux-table__column-head th,
.satcom-table-column-head th {
  padding-bottom: 0.5em;
}

.rux-table tfoot,
.satcom-table tfoot {
  font-size: 0.7rem;
}

.rux-table .selected,
.satcom-table .selected {
  background: #36557a;
}

/*
**
** 	ASTRO TABS
** 	==========================================================================
**	1.4 Notes
**	- Added rux_ and BEM compatible classes to all satcom_ NOTE: satcom_ will be removed in a future version
**  - Removed prefixed transitions
**  - Removed prefixed gradients
**  - Updated colors for WCAG compliance
**  - Swapped condensed font for standard
**  2.0 Ideas
**  - Replace use a radio-button based structure for tabs? (http://alistapart.com/article/radio-controlled-web-design)
*/

/* 	REQUIRED CLASSES */

.rux-tabs,
.satcom-tabs {
  font-size: 1.5rem;

  width: 100%;
  margin: 0;
  padding: 0;
  height: 5.625rem;

  -moz-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

.rux-tabs--compact {
  height: 3.125rem;
  font-size: 1rem;
}

.rux-tabs ul,
.satcom-tabs ul {
  padding: 0;
  margin: 0;
  height: 100%;

  display: -webkit-flex;

  display: flex;
  list-style: none;
}

.rux-tabs li,
.satcom-tabs li {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;

  /* outline: 1px solid green; */
}

.rux-tabs li:not(:last-child),
.satcom-tabs li:not(:last-child) {
  border-right: 1px solid rgb(20, 32, 44);
  border-right: 1px solid var(--tabBorderColor, rgb(20, 32, 44));
}

.rux-tabs li::before,
.satcom-tabs li::before {
  display: none !important;
}

.rux-tabs a,
.satcom-tabs a {
  height: 100%;
  display: -webkit-flex;
  display: flex;
  -webkit-align-items: center;
          align-items: center;
  padding: 3px 2rem 0;

  text-decoration: none;
  color: rgb(77, 172, 255);
  color: var(--tabTextColor, rgb(77, 172, 255));

  background-color: rgb(30, 47, 66);

  background-color: var(--tabBackgroundColor, rgb(30, 47, 66));
  border-bottom: 0.3125rem solid rgb(30, 47, 66);
  border-bottom: 0.3125rem solid var(--tabBackgroundColor, rgb(30, 47, 66));
  overflow: show;
}

.rux-tabs a[disabled] {
  opacity: 0.4;
  opacity: var(--disabledOpacity, 0.4);
  cursor: not-allowed;
  cursor: var(--disabledCursor, not-allowed);
}

.rux-tabs .selected a,
.satcom-tabs .selected a,
.rux-tabs .selected a:hover,
.satcom-tabs .selected a:hover {
  color: rgb(255, 255, 255);
  color: var(--tabSelectedTextColor, rgb(255, 255, 255));
  border-bottom: 0.3125rem solid
    rgb(77, 172, 255);
  border-bottom: 0.3125rem solid
    var(--tabSelectedBorderColor, rgb(77, 172, 255));
}

.rux-tabs a:hover:not([disabled]),
.satcom-tabs a:hover:not([disabled]) {
  color: rgb(255, 255, 255);
  color: var(--tabHoverTextColor, rgb(255, 255, 255));
}

/*
**
** 	ASTRO TOGGLE BUTTONS
** 	==========================================================================
**  3.0 Notes
**  - Breaking change to markup of toggle button
**  2.1 Notes
**	- Moved Pushbuttons to its own style sheet
**	1.4 Notes
**	- Added rux_ and BEM compatible classes to all satcom_ NOTE: satcom_ will be removed in a future version
**	- Removed prefixed linear gradients
**	- Removed prefixed transition
**  - Fixed added colon to checked pseudo class (e.g., checked became :checked)
**  - Alignment issue fixed on toggle button label
**  - Updated to WCAG colors
**  - Updated transition speed
*/

.rux-toggle,
.rux-toggle--alt2,
.satcom-toggle {
  position: relative;
  display: inline-block;
  box-sizing: border-box;

  -webkit-font-smoothing: subpixel-antialiased;

  height: 1.3125rem;
  width: 4.375rem;
  border-radius: 0.1875rem;
  border-radius: var(--defaultBorderRadius, 0.1875rem);
  border: 1px solid rgb(0, 0, 0);
  border: 1px solid var(--toggleBaseBorderColor, rgb(0, 0, 0));
  /* box-shadow: inset 0 0 2px rgba(0, 0, 0, 1); */
  -webkit-user-select: none;
     -moz-user-select: none;
      -ms-user-select: none;
          user-select: none;
  overflow: hidden;
}

.rux-toggle__input,
.satcom-toggle input {
  display: none !important;
}

.rux-toggle__button {
  position: absolute;
  display: -webkit-flex;
  display: flex;

  -webkit-justify-content: space-around;

          justify-content: space-around;
  -webkit-align-content: center;
          align-content: center;
  -webkit-align-items: center;
          align-items: center;

  top: 0;
  left: 0;

  font-size: 0.75rem !important;

  height: 100%;
  width: 100%;
}

.rux-toggle__button span {
  display: -webkit-flex;
  display: flex;

  -webkit-align-content: center;

          align-content: center;
  -webkit-justify-content: center;
          justify-content: center;
  -webkit-align-items: center;
          align-items: center;

  width: 50%;
  height: 100%;
  z-index: 1;

  text-transform: uppercase;
}

.rux-toggle__button::before {
  position: absolute;
  content: "";
  display: block;

  height: 100%;
  width: 100%;

  border-radius: 0.1875rem;

  background: linear-gradient(
      to right,
      #000 50%,
      rgb(50, 51, 52) 50.1%,
      rgb(50, 51, 52) 100%
    )
  ;

  background: var(
    --toggleBaseBackgroundColor,
    linear-gradient(
      to right,
      #000 50%,
      rgb(50, 51, 52) 50.1%,
      rgb(50, 51, 52) 100%
    )
  );
}

.rux-toggle__button::after {
  content: "";

  display: block;

  position: absolute;

  box-sizing: border-box;

  top: 0;
  left: 0;

  z-index: 10;

  transition: left 0.1s ease-out;

  width: 50%;
  height: 100%;

  border-radius: 0.125rem;

  background: rgb(0, 90, 143)
    url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='6' height='6'%3E %3Cdefs%3E %3ClinearGradient id='a' x1='50%25' x2='50%25' y1='0%25' y2='100%25'%3E %3Cstop offset='0%25' stop-color='%23000'/%3E %3Cstop offset='100%25' stop-color='%23023861' stop-opacity='0'/%3E %3C/linearGradient%3E %3C/defs%3E %3Ccircle cx='3' cy='3' r='3' fill='url(%23a)' fill-rule='evenodd'/%3E %3C/svg%3E")
    center center no-repeat;

  background: var(--toggleButtonBackgroundColor, rgb(0, 90, 143))
    url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='6' height='6'%3E %3Cdefs%3E %3ClinearGradient id='a' x1='50%25' x2='50%25' y1='0%25' y2='100%25'%3E %3Cstop offset='0%25' stop-color='%23000'/%3E %3Cstop offset='100%25' stop-color='%23023861' stop-opacity='0'/%3E %3C/linearGradient%3E %3C/defs%3E %3Ccircle cx='3' cy='3' r='3' fill='url(%23a)' fill-rule='evenodd'/%3E %3C/svg%3E")
    center center no-repeat;

  box-shadow: 0 0 3px rgba(0, 0, 0, 0.5),
    1px 0 2px rgba(0, 0, 0, 0.6)
  ;

  box-shadow: var(
    --toggleButtonBoxShadow,
    0 0 3px rgba(0, 0, 0, 0.5),
    1px 0 2px rgba(0, 0, 0, 0.6)
  );
}

.rux-toggle .on {
  color: rgb(91, 255, 0);
  color: var(--toggleBaseSelectedTextColor, rgb(91, 255, 0));
}

.rux-toggle .off {
  color: rgb(198, 204, 209);
  color: var(--toggleBaseTextColor, rgb(198, 204, 209));
}

.rux-toggle__input:disabled + .rux-toggle__button {
  opacity: 0.4;
  opacity: var(--disabledOpacity, 0.4);
  cursor: not-allowed;
}

.rux-toggle__input:checked + .rux-toggle__button::after {
  left: 50%;
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.5),
    -1px 0 2px rgba(0, 0, 0, 0.6)
  ;
  box-shadow: var(
    --toggleButtonSelectedBoxShadow,
    0 0 3px rgba(0, 0, 0, 0.5),
    -1px 0 2px rgba(0, 0, 0, 0.6)
  );
}

.rux-tree {
  display: inline-block;
  box-sizing: border-box;

  width: 100%;
  padding: 0;
  margin: 0;

  font-size: 1rem;

  background-color: rgb(30, 47, 66);

  background-color: var(--treeBackgroundColor, rgb(30, 47, 66));

  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

.rux-tree--compact {
  font-size: 0.875rem;
}

*,
*:before,
*:after {
  box-sizing: inherit;
}

.rux-tree ul {
  padding: 0;
  margin: 0;
  list-style: none;
}

.rux-tree li:not(:first-child) {
  border-top: 1px solid rgb(40, 63, 88);
  border-top: 1px solid var(--treeItemBorderColor, rgb(40, 63, 88));
}

/* Parent Elements */
.rux-tree__parent-container {
  display: -webkit-flex;
  display: flex;
  -webkit-flex-wrap: wrap;
          flex-wrap: wrap;
  -webkit-align-items: center;
          align-items: center;
  -webkit-align-content: stretch;
          align-content: stretch;
  padding: 0 0 0 1.25rem;
  margin: 0;
}

.rux-tree__label {
  -webkit-flex-grow: 1;
          flex-grow: 1;
  padding: 0.5rem;

  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  width: calc(100% - 7px);
}

.rux-tree--compact .rux-tree__label {
  padding: 0.35rem;
}

.rux-tree__arrow {
  position: relative;
  cursor: pointer;
  width: 7px;
  visibility: hidden;
}

.rux-tree__arrow::after {
  content: "";

  width: 0;
  height: 0;
  border-style: solid;
  border-width: 7px 0 7px 7px;
  border-color: transparent transparent transparent
    rgb(77, 172, 255);
  border-color: transparent transparent transparent
    var(--treeAccentColor, rgb(77, 172, 255));
  display: inline-block;
}

.has-children .rux-tree__arrow {
  visibility: visible;
}

/* Child Elements */
.rux-tree__children {
  width: 100%;
  display: none;
  padding: 0;
  margin: 0;
  height: 0;
}

.rux-tree__child {
  padding-left: 3rem;
}

/* Expanded */
.expanded .rux-tree__arrow::after {
  -webkit-transform: rotate(90deg);
  transform: rotate(90deg);
}

.expanded .rux-tree__children {
  display: block;
  height: auto;
}

.selected {
  background-color: rgb(0, 68, 107);
  background-color: var(--treeSelectedBackgroundColor, rgb(0, 68, 107));
  box-shadow: inset 5px 0 rgb(77, 172, 255);
  box-shadow: inset 5px 0 var(--treeSelectedAccentColor, rgb(77, 172, 255));

  color: rgb(255, 255, 255);

  color: var(--treeSelectedTextColor, rgb(255, 255, 255));
}

.selected .rux-tree__arrow::after {
  border-color: transparent transparent transparent
    rgb(77, 172, 255);
  border-color: transparent transparent transparent
    var(--treeSelectedAccentColor, rgb(77, 172, 255));
}
    


/* */
.astro-elements-pane {
  background-color: var(--paneBackgroundColor, rgb(19, 43, 64));
  margin: 0.5rem;
  padding: 0;

  min-width: 10rem;
  max-width: 100rem;
}

.astro-elements-pane__content {
  padding: 0 1rem 1rem 1rem;
}

.astro-elements-pane h2 {
  font-weight: 500;
  padding: 0.5rem;
  margin: 0 0 1rem 0;
  background-color: var(--colorTertiaryDarken2);
  color: var(--textColor);
}

ol, ul {
  padding: 0;
}

.grid {
  display: flex;
  flex-wrap: wrap;
}

rux-tree {
  width: 300px;
}

    </style>    


    <div class="grid">

    <section class="astro-elements-pane">
      <h2>Controls</h2>
      <div class="astro-elements-pane__content">
        <ol>
          <li class="rux-checkbox">
            <input type="checkbox" name="checkbox1c" id="checkbox1c">
            <label for="checkbox1c">Checkbox</label>
          </li>
  
          <li class="rux-checkbox">
            <input type="checkbox" name="checkbox2c" id="checkbox2c" checked="">
            <label for="checkbox2c">Checkbox checked</label>
          </li>
  
          <li class="rux-checkbox">
            <input type="checkbox" name="checkbox3c" id="checkbox3c" disabled="">
            <label for="checkbox3c">Checkbox disabled</label>
          </li>
  
          <li class="rux-checkbox">
            <input type="checkbox" name="checkbox4c" id="checkbox4c" checked="" disabled="">
            <label for="checkbox4c">Checkbox disabled checked</label>
          </li>
        </ol>
  
        <ol>
          <li class="rux-radio-button">
            <input type="radio" name="radio1c" id="radio1c">
            <label for="radio1c">Radio Button</label>
          </li>
  
          <li class="rux-radio-button">
            <input type="radio" name="radio1c" id="radio2c" checked="">
            <label for="radio2c">Radio Button checked</label>
          </li>
  
          <li class="rux-radio-button">
            <input type="radio" name="radio2c" id="radio3c" disabled="">
            <label for="radio3c">Radio Button disabled</label>
          </li>
  
          <li class="rux-radio-button">
            <input type="radio" name="radio2c" id="radio4c" checked="" disabled="">
            <label for="radio4c">Radio Button disabled checked</label>
          </li>
        </ol>
      </div>
    </section>
  

    <section class="astro-elements-pane">
      <h2>Segmented Button</h2>
      <div class="astro-elements-pane__content">
      <figure>
        <rux-segmented-button data={{segmentOne}}></rux-segmented-button>
      
        <figcaption class="output">Output = [[segmentOne.selected.label]]</figcaption>
      </figure>
      </div>
    </section>
    
    
    <section class="astro-elements-pane">
      <h2>Notifications</h2>
      <div class="astro-elements-pane__content">
        <figure>
          <rux-button class="rux-launch-button" on-click="_launchModal">Launch Modal</rux-button>
        </figure>
        <figcaption>
          <p>I’m just sitting here listening for a modal window event: <span class="look">[[modalMessage]]</span></p>
        </figcaption>
      </div>

      <rux-modal
            message="Release Modem 2 on slice 1000 for deactivation. Releasing this modem cannot be undone." 
            confirm-text="Release"
            deny-text="Cancel"
            opened></rux-modal>
    </section>


    <section class="astro-elements-pane">
      <h2>Progress</h2>
      <div class="astro-elements-pane__content">
        <rux-progress value=50 label=true></rux-progress>
        <rux-progress></rux-progress>
      </div>
    </section>


    <section class="astro-elements-pane">
      <h2>Slider</h2>
      <div class="astro-elements-pane__content">
      <rux-slider label="Label" val={{sliderObj.value}}></rux-slider>
      <rux-slider min={{sliderObjTwo.min}} max={{sliderObjTwo.max}} step={{sliderObjTwo.step}} val={{sliderObjTwo.value}}></rux-slider>
      <rux-slider 
                    axis-labels=[[sliderObjThree.labels]] 
                    min=10
                    max=85
                    val={{sliderObjThree.value}}></rux-slider>
      </div>
    </section>


    <section class="astro-elements-pane">
      <h2>Clock</h2>
      <div class="astro-elements-pane__content">
        <rux-clock compact></rux-clock>
        <rux-clock></rux-clock>
      </div>
    </section>


    <section class="astro-elements-pane">
      <h2>Tree</h2>
      <div class="astro-elements-pane__content">
        <rux-tree data={{treeData}}></rux-tree>
        Selected Tree Element: [[treeData.selected.label]]
        <br>Action for Tree Element: [[treeData.selected.payload.action]]
      </div>
    </section>
    
    
    
    <section class="astro-elements-pane">
      <h2>Drop Down/Select</h2>
      <div class="astro-elements-pane__content">
        <select class="rux-select" style="--value:Group One Option Three;">
          <optgroup label="Group One">
            <option>Group One Option One</option>
            <option>Group One Option Two</option>
            <option>Group One Option Three</option>
            <option>Group One Option Four</option>
          </optgroup>
          <optgroup label="Group Two">
            <option>Group Two Option One</option>
            <option>Group Two Option Two</option>
            <option>Group Two Option Three</option>
            <option>Group Two Option Four</option>
          </optgroup>
        </select>
      </div>
    </section>
  


  
    <section class="astro-elements-pane">
      <h2>Tabs</h2>
      <div class="astro-elements-pane__content">
        <rux-tabs id="main">
          <rux-tab id="a1" role="tab" selected>Tab 1</rux-tab>
          <rux-tab id="a2" role="tab">Tab with a Long Title</rux-tab>
          <rux-tab id="a3" role="tab" disabled>Tab 3</rux-tab>
          
        </rux-tabs>
  
        <rux-tab-panels role="tablist" aria-labeledby="main">
          <rux-tab-panel aria-labeledby="a1" role="tabpanel">
            <h3>Modems</h3>
          </rux-tab-panel>
  
          <rux-tab-panel aria-labeledby="a2" role="tabpanel">
            <h3>Pass Plans</h3>
          </rux-tab-panel>
  
          <rux-tab-panel aria-labeledby="a3" role="tabpanel">
            <h3>Satellites</h3>
          </rux-tab-panel>
        </rux-tab-panels>
  
  
        <br>
  
        <rux-tabs id="compact-tabs" compact>
          <rux-tab id="t1" role="tab" selected>Tab 1</rux-tab>
          <rux-tab id="t2" role="tab">Tab 2</rux-tab>
          <rux-tab id="t3" role="tab" disabled>Tab 3</rux-tab>
        </rux-tabs>
  
        <rux-tab-panels role="tablist" aria-labeledby="compact-tabs">
          <rux-tab-panel aria-labeledby="t1" role="tabpanel">
            <h3>Tab 1</h3>
          </rux-tab-panel>
  
          <rux-tab-panel aria-labeledby="t2" role="tabpanel">
            <h3>Tab 2</h3>
          </rux-tab-panel>
  
          <rux-tab-panel aria-labeledby="t3" role="tabpanel">
            <h3>Tab 3</h3>
          </rux-tab-panel>
        </rux-tab-panels>
  
        <br>
  
        <rux-tabs id="interior-tabs" interior>
          <rux-tab id="i1" role="tab" selected>Tiny 1</rux-tab>
          <rux-tab id="i2" role="tab">Tiny 2</rux-tab>
          <rux-tab id="i3" role="tab" disabled>Tiny 3</rux-tab>
        </rux-tabs>
  
        <rux-tab-panels role="tablist" aria-labeledby="interior-tabs">
          <rux-tab-panel aria-labeledby="i1" role="tabpanel">
            <h3>Tab 1</h3>
          </rux-tab-panel>
  
          <rux-tab-panel aria-labeledby="i2" role="tabpanel">
            <h3>Tab 2</h3>
          </rux-tab-panel>
  
          <rux-tab-panel aria-labeledby="i3" role="tabpanel">
            <h3>Tab 3</h3>
          </rux-tab-panel>
        </rux-tab-panels>
      </div>
    </section>
  
  </div>
    
      
    `;
  }
  constructor() {
    super();

    /* SEGMENTED BUTTON DATA */
    this.segmentOne = [
      {
        label: "Hour"
      },
      {
        label: "Day"
      },
      {
        label: "Week"
      }
    ];

    /* TREE DATA */
    this.treeData = [
      {
        _id: "i1",
        label: "Item 1",
        payload: { action: "this could be anything …" },
        children: [
          { _id: "i1-1", label: "Child 1", payload: { action: "… an id" } },
          {
            _id: "i1-2",
            label: "Child 2",
            payload: { action: "… a method call to be interpreted" }
          }
        ]
      },
      {
        _id: "i2",
        label:
          "A really long title to see what happens when someone adds a stupid long string",
        payload: { action: "It gives developers the chance to add anything …" },
        children: [
          {
            _id: "i2-1",
            label: "And what about this in a child element?",
            payload: { action: "… then react to that thing" }
          },
          {
            _id: "i2-2",
            label: "Child 1.2",
            payload: {
              action:
                "… it can also be updated dynamically from outside the component"
            }
          },
          {
            _id: "i2-3",
            label: "Child 1.3",
            payload: { action: "… so functionality could change on the fly" }
          }
        ]
      },
      {
        _id: "i4",
        label: "Item 4",
        payload: { action: "Works on items with no children" }
      },
      {
        _id: "i2",
        label: "Item 3",
        payload: { action: "Just use the paylod property …" },
        children: [
          {
            _id: "i2-1",
            label: "Child 1.1",
            payload: { action: "… then use whatever key/value pairs you want" }
          },
          {
            _id: "i2-2",
            label: "Child 1.2",
            payload: { action: "… it’s just an Object" }
          }
        ]
      }
    ];

    // this.modalMessage = "test";
    this.sliderObj = {
      value: 10
    };
    this.sliderObjTwo = {
      value: 0,
      min: -10,
      max: 10,
      step: 0.1,
      labels: "min,mid,max"
    };
    this.sliderObjThree = {
      value: 10,
      labels: "min,mid,max"
    };

    window.addEventListener("modal-event", e => {
      if (e.detail.confirm) {
        this.modalMessage = "You agreed!";
      } else {
        this.modalMessage = "You didn’t agree";
      }
    });
  }
  connectedCallback() {
    super.connectedCallback();
  }
  disconnectedCallback() {
    super.disconnectedCallback();
  }
  ready() {
    super.ready();
  }

  /* Functions */
  _launchModal() {
    const _modal = this.shadowRoot.querySelectorAll("rux-modal")[0];
    _modal.setAttribute("open", "");
  }
}
customElements.define("astro-elements", AstroElements);
