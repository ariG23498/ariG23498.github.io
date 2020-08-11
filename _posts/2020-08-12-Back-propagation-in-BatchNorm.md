<!-- ---

layout: post
title:  "Back propagation in BatchNorm"
author: "Aritra Roy Gosthipaty"
prev_title: "Similarity of neuron activations between similar classes"
prev_link: /similarity-of-neuron-activations-between-similar-classes
next_title: false
next_link: false
tags: deeplearning batchnorm
permalink: /back-prop-in-batch-norm

--- -->

<!doctype html><html style="overflow:auto;height:auto;width:auto;"><head><title>BatchNorm</title><meta http-equiv="Content-Type" content="text/html; charset=utf-8"/><style>@font-face {
	font-family: Asana;
	src: url("{{site.url}}/assets/fonts_new/Asana-Math.otf") format("opentype");
}

@font-face {
	font-family: Asana-Math;
	src: url("{{site.url}}/assets/fonts_new/Asana-math-mode.otf") format("opentype");
}

@font-face {
	font-family: Asana-Mathbb;
	src: url("{{site.url}}/assets/fonts_new/types-generated/Asana-mathbb.otf") format("opentype");
}

@font-face {
	font-family: Asana-Mathit;
	src: url("{{site.url}}/assets/fonts_new/types-generated/Asana-mathit.otf") format("opentype");
}

@font-face {
	font-family: Asana-Mathcal;
	src: url("{{site.url}}/assets/fonts_new/types-generated/Asana-mathcal.otf") format("opentype");
}

@font-face {
	font-family: Asana-Mathscr;
	src: url("{{site.url}}/assets/fonts_new/types-generated/Asana-mathscr.otf") format("opentype");
}

@font-face {
	font-family: Asana-Mathfrak;
	src: url("{{site.url}}/assets/fonts_new/types-generated/Asana-mathfrak.otf") format("opentype");
}

@font-face {
	font-family: Asana-Mathsf;
	src: url("{{site.url}}/assets/fonts_new/types-generated/Asana-mathsf.otf") format("opentype");
}

@font-face {
	font-family: Asana-Mathtt;
	src: url("{{site.url}}/assets/fonts_new/types-generated/Asana-mathtt.otf") format("opentype");
}

@font-face {
	font-family: Asana-Mathrm;
	src: url("{{site.url}}/assets/fonts_new/types-generated/Asana-mathrm.otf") format("opentype");
}

@font-face {
	font-family: 'FontAwesome';
	src: url('{{site.url}}/assets/fonts_new/icomoon.eot');
	src: url('{{site.url}}/assets/fonts_new/icomoon.eot') format('embedded-opentype'), url('{{site.url}}/assets/fonts_new/icomoon.woff') format('woff'), url('{{site.url}}/assets/fonts_new/icomoon.ttf') format('truetype'), url('{{site.url}}/assets/fonts_new/icomoon.svg') format('svg');
	font-weight: normal;
	font-style: normal;
}

/**
Latin Modern
**/

@font-face {
	font-family: LatinModern;
	src: url("{{site.url}}/assets/fonts_new/latinmodern-math.otf") format("opentype");
}

@font-face {
	font-family: LatinModern-Math;
	src: url("{{site.url}}/assets/fonts_new/latinmodern-math-mode.otf") format("opentype");
}

@font-face {
	font-family: LatinModern-Mathbb;
	src: url("{{site.url}}/assets/fonts_new/types-generated/latinmodern-mathbb.otf") format("opentype");
}

@font-face {
	font-family: LatinModern-Mathit;
	src: url("{{site.url}}/assets/fonts_new/types-generated/latinmodern-mathit.otf") format("opentype");
}

@font-face {
	font-family: LatinModern-Mathcal;
	src: url("{{site.url}}/assets/fonts_new/types-generated/latinmodern-mathcal.otf") format("opentype");
}

@font-face {
	font-family: LatinModern-Mathscr;
	src: url("{{site.url}}/assets/fonts_new/types-generated/latinmodern-mathscr.otf") format("opentype");
}

@font-face {
	font-family: LatinModern-Mathfrak;
	src: url("{{site.url}}/assets/fonts_new/types-generated/latinmodern-mathfrak.otf") format("opentype");
}

@font-face {
	font-family: LatinModern-Mathsf;
	src: url("{{site.url}}/assets/fonts_new/types-generated/latinmodern-mathsf.otf") format("opentype");
}

@font-face {
	font-family: LatinModern-Mathtt;
	src: url("{{site.url}}/assets/fonts_new/types-generated/latinmodern-mathtt.otf") format("opentype");
}

@font-face {
	font-family: LatinModern-Mathrm;
	src: url("{{site.url}}/assets/fonts_new/types-generated/latinmodern-mathrm.otf") format("opentype");
}

/***********************************************************/

/**
Thicker Latin Modern
**/

@font-face {
	font-family: ThickerLm;
	src: url("{{site.url}}/assets/fonts_new/thickerlm-math.otf") format("opentype");
}

@font-face {
	font-family: ThickerLm-Math;
	src: url("{{site.url}}/assets/fonts_new/thickerlm-math-mode.otf") format("opentype");
}

@font-face {
	font-family: ThickerLm-Mathbb;
	src: url("{{site.url}}/assets/fonts_new/types-generated/thickerlm-mathbb.otf") format("opentype");
}

@font-face {
	font-family: ThickerLm-Mathit;
	src: url("{{site.url}}/assets/fonts_new/types-generated/thickerlm-mathit.otf") format("opentype");
}

@font-face {
	font-family: ThickerLm-Mathcal;
	src: url("{{site.url}}/assets/fonts_new/types-generated/thickerlm-mathcal.otf") format("opentype");
}

@font-face {
	font-family: ThickerLm-Mathscr;
	src: url("{{site.url}}/assets/fonts_new/types-generated/thickerlm-mathscr.otf") format("opentype");
}

@font-face {
	font-family: ThickerLm-Mathfrak;
	src: url("{{site.url}}/assets/fonts_new/types-generated/thickerlm-mathfrak.otf") format("opentype");
}

@font-face {
	font-family: ThickerLm-Mathsf;
	src: url("{{site.url}}/assets/fonts_new/types-generated/thickerlm-mathsf.otf") format("opentype");
}

@font-face {
	font-family: ThickerLm-Mathtt;
	src: url("{{site.url}}/assets/fonts_new/types-generated/thickerlm-mathtt.otf") format("opentype");
}

@font-face {
	font-family: ThickerLm-Mathrm;
	src: url("{{site.url}}/assets/fonts_new/types-generated/thickerlm-mathrm.otf") format("opentype");
}

/***********************************************************/

/* Computer Modern */

@font-face {
	font-family: 'Computer Modern Sans';
	src: url('{{site.url}}/assets/fonts_new/others-text-mode/computer-modern/Sans/cmunss.otf') format("opentype");
	font-weight: normal;
	font-style: normal;
}

@font-face {
	font-family: 'Computer Modern Sans';
	src: url('{{site.url}}/assets/fonts_new/others-text-mode/computer-modern/Sans/cmunsx.otf') format("opentype");
	font-weight: bold;
	font-style: normal;
}

@font-face {
	font-family: 'Computer Modern Sans';
	src: url('{{site.url}}/assets/fonts_new/others-text-mode/computer-modern/Sans/cmunsi.otf') format("opentype");
	font-weight: normal;
	font-style: italic;
}

@font-face {
	font-family: 'Computer Modern Sans';
	src: url('{{site.url}}/assets/fonts_new/others-text-mode/computer-modern/Sans/cmunso.otf') format("opentype");
	font-weight: bold;
	font-style: italic;
}

@font-face {
	font-family: 'Computer Modern Serif';
	src: url('{{site.url}}/assets/fonts_new/others-text-mode/computer-modern/Serif/cmunrm.otf') format("opentype");
	font-weight: normal;
	font-style: normal;
}

@font-face {
	font-family: 'Computer Modern Serif';
	src: url('{{site.url}}/assets/fonts_new/others-text-mode/computer-modern/Serif/cmunbx.otf') format("opentype");
	font-weight: bold;
	font-style: normal;
}

@font-face {
	font-family: 'Computer Modern Serif';
	src: url('{{site.url}}/assets/fonts_new/others-text-mode/computer-modern/Serif/cmunti.otf') format("opentype");
	font-weight: normal;
	font-style: italic;
}

@font-face {
	font-family: 'Computer Modern Serif';
	src: url('{{site.url}}/assets/fonts_new/others-text-mode/computer-modern/Serif/cmunbi.otf') format("opentype");
	font-weight: bold;
	font-style: italic;
}

@font-face {
	font-family: 'Computer Modern Typewriter';
	src: url('{{site.url}}/assets/fonts_new/others-text-mode/computer-modern/Typewriter/cmuntt.otf') format("opentype");
	font-weight: normal;
	font-style: normal;
}

@font-face {
	font-family: 'Computer Modern Typewriter';
	src: url('{{site.url}}/assets/fonts_new/others-text-mode/computer-modern/Typewriter/cmuntb.otf') format("opentype");
	font-weight: bold;
	font-style: normal;
}

@font-face {
	font-family: 'Computer Modern Typewriter';
	src: url('{{site.url}}/assets/fonts_new/others-text-mode/computer-modern/Typewriter/cmunit.otf') format("opentype");
	font-weight: normal;
	font-style: italic;
}

@font-face {
	font-family: 'Computer Modern Typewriter';
	src: url('{{site.url}}/assets/fonts_new/others-text-mode/computer-modern/Typewriter/cmuntx.otf') format("opentype");
	font-weight: bold;
	font-style: italic;
}

/**/

/**
Sans Math + Liberation Font
**/

@font-face {
	font-family: Sans;
	src: url("{{site.url}}/assets/fonts_new/Sans-Math.otf") format("opentype");
}

@font-face {
	font-family: Sans-Math;
	src: url("{{site.url}}/assets/fonts_new/Sans-Math-mode.otf") format("opentype");
}

@font-face {
	font-family: Sans-Bold;
	src: url("{{site.url}}/assets/fonts_new/types-generated/Sans-bold.otf") format("opentype");
	font-weight: bold;
}

@font-face {
	font-family: Sans-Mathbb;
	src: url("{{site.url}}/assets/fonts_new/types-generated/Asana-mathbb.otf") format("opentype");
}

@font-face {
	font-family: Sans-Mathit;
	src: url("{{site.url}}/assets/fonts_new/types-generated/Sans-mathit.otf") format("opentype");
}

@font-face {
	font-family: Sans-Mathcal;
	src: url("{{site.url}}/assets/fonts_new/types-generated/Asana-mathcal.otf") format("opentype");
}

@font-face {
	font-family: Sans-Mathscr;
	src: url("{{site.url}}/assets/fonts_new/types-generated/Asana-mathscr.otf") format("opentype");
}

@font-face {
	font-family: Sans-Mathfrak;
	src: url("{{site.url}}/assets/fonts_new/types-generated/Asana-mathfrak.otf") format("opentype");
}

@font-face {
	font-family: Sans-Mathsf;
	src: url("{{site.url}}/assets/fonts_new/types-generated/Asana-mathsf.otf") format("opentype");
}

@font-face {
	font-family: Sans-Mathtt;
	src: url("{{site.url}}/assets/fonts_new/types-generated/Asana-mathtt.otf") format("opentype");
}

@font-face {
	font-family: Sans-Mathrm;
	src: url("{{site.url}}/assets/fonts_new/types-generated/Asana-mathrm.otf") format("opentype");
}

@font-face {
	font-family: Sans-Mathbf;
	src: url("{{site.url}}/assets/fonts_new/types-generated/Sans-mathbf.otf") format("opentype");
	font-weight: bold;
}

/***********************************************************/</style><style>@media print {#ghostery-purple-box {display:none !important}}</style><style>

math-type.dark-mode {
  background: #1e1e1e;
}
math-type.dark-mode.math-type-for-print {
  -webkit-print-color-adjust: exact;
}
math-type.dark-mode editarea.root-editor {
  color: #e0e0e0;
  fill: #e0e0e0;
  stroke: #e0e0e0;
  border-color: #e0e0e0;
}
math-type.dark-mode editarea.root-editor {
  background: #1e1e1e;
}
math-type.dark-mode .math-container-symbol.selected,
math-type.dark-mode .math-container-symbol.display.selected {
  background-color: #2a352a;
}
math-type.dark-mode .matrix-symbol.gather-symbol.selected {
  background-color: #2a352a;
}
math-type.dark-mode .matrix-symbol.gather-symbol > matrix > table > tbody > tr > td.selected {
  border: 1px solid #525252;
}
math-type.dark-mode .matrix-symbol.align-symbol.selected {
  background-color: #2a352a;
}
math-type.dark-mode .matrix-symbol.align-symbol > matrix > table > tbody > tr > td.selected {
  border: 1px solid #525252;
}
math-type.dark-mode .matrix-symbol.matrix-like.selected {
  background-color: #2a352a;
}
math-type.dark-mode .matrix-symbol.matrix-like > matrix > table > tbody > tr.selected:not(.hline) {
  border-top: 1px solid #525252;
}
math-type.dark-mode .matrix-symbol.matrix-like > matrix > table > tbody > tr:last-child.selected {
  border-bottom: 1px solid #525252;
}
math-type.dark-mode .matrix-symbol > matrix > table > tbody > tr > td.selected:not(.vline) {
  border-left: 1px solid #525252;
}
math-type.dark-mode .matrix-symbol > matrix > table > tbody > tr > td:last-child.selected {
  border-right: 1px solid #525252;
}
math-type.dark-mode .matrix-symbol.case-symbol > matrix > table > tbody > tr > td.selected {
  border: 1px solid #525252;
}
math-type.dark-mode selection-wrapper > selection {
  background-color: rgba(33, 150, 243, 0.25);
}
math-type.dark-mode selection-wrapper.inactive > selection {
  background-color: rgba(255, 255, 255, 0.27);
}
math-type.dark-mode editarea.selected {
  outline: 1px solid rgba(177, 174, 174, 0.3);
}
math-type.dark-mode compositeblock.math-diagram > math-diagram {
  background: #1e1e1e;
}
container-layer.dark-mode editor-container {
  background: #1e1e1e;
}



compositeblock {
  display: inline-block;
  position: relative;
  text-align: left;
  unicode-bidi: isolate;
}
compositeblock.middle {
  vertical-align: middle;
}
latex-symbol-icon {
  display: inline-block;
  padding: 2px;
  border: 1px solid transparent;
  cursor: pointer;
}
latex-symbol-icon:hover,
latex-symbol-icon.selected {
  background: white;
  border: 1px solid lightgray;
}
inline {
  display: inline-block;
}
base-line-indicator {
  display: inline-block;
  overflow: hidden;
  width: 0px;
  height: inherit;
}

math-type .constant-text > constant-text {
  margin-left: 0.2em;
  margin-right: 0.2em;
}
math-type .constant-text > constant-text.close-left {
  margin-left: 0;
}
math-type .constant-text > constant-text.close-right {
  margin-right: 0;
}








.color-picker no-color-select {
  display: block;
  text-align: center;
  /* width: 100%; */
  /* height: 20px; */
  background: white;
  border: 1px solid lightgray;
  margin-bottom: 2px;
  color: gray;
  padding: 2px;
  cursor: default;
  border-radius: 0;
  padding-bottom: 2px;
  margin-bottom: 3px;
  margin-left: -1px;
  margin-right: -1px;
  font-size: 13px;
}
.color-picker no-color-select:hover {
  color: black;
}
.color-picker color-select {
  position: absolute;
  top: 30px;
  left: 0px;
  background: white;
}

check-box-wrapper {
  display: block;
  font-size: 11px;
  color: gray;
  cursor: pointer;
}
check-box-wrapper.disabled {
  color: lightgray;
}
check-box-wrapper.disabled check-box-rect {
  border: 1px solid #e2e1e1;
  color: lightgray;
}
check-box-wrapper.disabled check-box-rect:hover {
  border: 1px solid #e2e1e1;
}
check-box-wrapper.mobile-tablet check-box-rect {
  margin-top: -3px;
  width: 16px;
  height: 15px;
  font-size: 13px;
}
check-box-wrapper.mobile-tablet check-box-rect > i {
  left: 2px;
  top: 1px;
}
check-box-wrapper check-box-rect {
  width: 1.4em;
  height: 1.35em;
  border: 1px solid #c3c2c2;
  position: relative;
  display: inline-flex;
  font-size: 11px;
  color: green;
  background: white;
  justify-content: center;
  align-items: center;
}
check-box-wrapper check-box-rect:hover {
  border: 1px solid gray;
}
check-box-wrapper.unchecked check-box-rect > i {
  visibility: hidden;
}

vcomposed-symbol {
  display: flex;
  width: 100%;
  height: 100%;
  overflow: hidden;
  flex-direction: column;
}
vcomposed-symbol > start {
  display: block;
  float: left;
  overflow: hidden;
  margin-bottom: -0.02em;
}
vcomposed-symbol > middle-center {
  overflow: hidden;
  margin-top: -0.02em;
  margin-bottom: -0.02em;
}
vcomposed-symbol > middle {
  display: block;
  flex-grow: 1;
  position: relative;
  overflow: hidden;
  margin-top: -0.02em;
  margin-bottom: -0.02em;
}
vcomposed-symbol > middle > fixed {
  display: block;
  position: absolute;
  left: 0;
  top: 0;
}
vcomposed-symbol > middle > fixed > inside {
  display: block;
  overflow: hidden;
}
vcomposed-symbol > end {
  margin-top: -0.02em;
  display: block;
  overflow: hidden;
}


.open-brace,
.close-brace {
  padding: 0 0.1em;
  width: 0.5em;
  min-width: 0.5em;
}
.open-brace > start,
.close-brace > start {
  min-height: 0.75em;
  height: 0.75em;
}
.open-brace > middle-center,
.close-brace > middle-center {
  min-height: 0.6em;
  height: 0.6em;
}
.open-brace > end,
.close-brace > end {
  min-height: 0.75em;
  height: 0.75em;
}
.open-bracket,
.close-bracket {
  width: 0.43em;
  min-width: 0.43em;
}
.open-bracket > start,
.close-bracket > start {
  height: 0.5em;
  min-height: 0.5em;
}
.open-bracket > end,
.close-bracket > end {
  height: 0.7em;
  min-height: 0.7em;
}
.open-parenthesis,
.close-parenthesis {
  width: 0.45em;
  min-width: 0.45em;
}
.open-parenthesis > start,
.close-parenthesis > start {
  min-height: 0.85em;
  height: 0.85em;
}
.open-parenthesis > end,
.close-parenthesis > end {
  min-height: 0.8em;
  height: 0.8em;
}
.open-floor,
.close-floor {
  width: 0.45em;
  min-width: 0.45em;
}
.open-floor > end,
.close-floor > end {
  height: 0.35em;
  min-height: 0.35em;
}
.open-ceil,
.close-ceil {
  width: 0.45em;
  min-width: 0.45em;
}
.open-ceil > start,
.close-ceil > start {
  height: 0.5em;
  min-height: 0.5em;
}
.open-vert,
.close-vert {
  width: 0.3em;
  min-width: 0.3em;
}
.open-Vert,
.close-Vert {
  width: 0.5em;
  min-width: 0.5em;
}
.open-uparrow,
.close-uparrow {
  width: 0.45em;
  min-width: 0.45em;
}
.open-uparrow > start,
.close-uparrow > start {
  height: 0.5em;
  min-height: 0.5em;
}
.open-downarrow,
.close-downarrow {
  width: 0.45em;
  min-width: 0.45em;
}
.open-downarrow > end,
.close-downarrow > end {
  height: 0.4em;
  min-height: 0.4em;
}
.open-updownarrow,
.close-updownarrow {
  width: 0.45em;
  min-width: 0.45em;
}
.open-updownarrow > start,
.close-updownarrow > start {
  height: 0.5em;
  min-height: 0.5em;
}
.open-updownarrow > end,
.close-updownarrow > end {
  height: 0.4em;
  min-height: 0.4em;
}
.open-Uparrow,
.close-Uparrow {
  width: 0.7em;
  min-width: 0.7em;
}
.open-Uparrow > start,
.close-Uparrow > start {
  height: 0.5em;
  min-height: 0.5em;
}
.open-Downarrow,
.close-Downarrow {
  width: 0.7em;
  min-width: 0.7em;
}
.open-Downarrow > end,
.close-Downarrow > end {
  height: 0.5em;
  min-height: 0.5em;
}
.open-Updownarrow,
.close-Updownarrow {
  width: 0.6em;
  min-width: 0.6em;
}
.open-Updownarrow > start,
.close-Updownarrow > start {
  height: 0.5em;
  min-height: 0.5em;
}
.open-Updownarrow > end,
.close-Updownarrow > end {
  height: 0.5em;
  min-height: 0.5em;
}

/**we use alpha as we have problem with background (without alpha) in Electron version (older Chrome) **/
/* z-index region*/
/**different context*/
/**different context*/
opensymbolblock,
closesymbolblock {
  display: inline-flex;
  align-items: center;
  position: relative;
  text-align: left;
  margin-top: 0.1em;
  margin-bottom: 0.1em;
}
opensymbolblock.normal,
closesymbolblock.normal {
  margin-top: 0;
  margin-bottom: 0;
}
opensymbolblock > hidden-span,
closesymbolblock > hidden-span {
  visibility: hidden;
  width: 0px;
}
opensymbolblock[type='brace'],
closesymbolblock[type='brace'] {
  margin-left: 0.05em;
  margin-right: 0.05em;
  overflow: visible;
}
opensymbolblock[type='brace'] > svg,
closesymbolblock[type='brace'] > svg {
  overflow: visible;
  width: 0.5em;
  height: 100%;
}
opensymbolblock[type='parenthesis'] > svg,
closesymbolblock[type='parenthesis'] > svg {
  width: 0.5em;
  height: 100%;
}
opensymbolblock[type='bracket'] > svg,
closesymbolblock[type='bracket'] > svg {
  width: 0.5em;
  height: 100%;
}
opensymbolblock[type='angle'].sm-1 > svg,
closesymbolblock[type='angle'].sm-1 > svg {
  width: 0.3em;
}
opensymbolblock[type='angle'].sm-2 > svg,
closesymbolblock[type='angle'].sm-2 > svg {
  width: 0.45em;
}
opensymbolblock[type='angle'] > svg,
closesymbolblock[type='angle'] > svg {
  width: 0.6em;
  height: 100%;
}
opensymbolblock[type='slash'] > svg,
closesymbolblock[type='slash'] > svg {
  width: 0.7em;
  height: 100%;
}
opensymbolblock > bracket-span,
closesymbolblock > bracket-span {
  display: block;
}
opensymbolblock > vcomposed-symbol,
closesymbolblock > vcomposed-symbol,
opensymbolblock > bracket-span,
closesymbolblock > bracket-span {
  height: 100%;
  width: 100%;
  font-style: normal;
}
opensymbolblock > brace-span,
closesymbolblock > brace-span {
  visibility: hidden;
  display: inline-block;
  padding: 0 0.1em;
}
opensymbolblock {
  margin-left: 0.07em;
}
opensymbolblock.normal {
  margin-left: 0;
}
opensymbolblock[type='vert'] {
  margin-left: 0.05em;
  margin-right: 0.05em;
}
opensymbolblock[type='vert'] > svg {
  width: 0.4em;
  height: 100%;
}
opensymbolblock[type='parenthesis'] > svg {
  margin-right: -0.1em;
}
closesymbolblock {
  margin-right: 0.07em;
}
closesymbolblock.normal {
  margin-right: 0;
}
closesymbolblock[type='vert'] {
  margin-left: 0.05em;
  margin-right: 0.05em;
}
closesymbolblock[type='vert'] > svg {
  width: 0.4em;
  height: 100%;
}
closesymbolblock[type='parenthesis'] > svg {
  margin-left: -0.1em;
}

opensymbolblock[type=empty] > empty,
closesymbolblock[type=empty] > empty {
  width: 2px;
  height: 100%;
  display: block;
}
opensymbolblock[type=empty] > empty.normal-size,
closesymbolblock[type=empty] > empty.normal-size {
  height: 1em;
}
opensymbolblock[type=empty] > empty.line-selected,
closesymbolblock[type=empty] > empty.line-selected {
  background-color: lightgray;
}

.dirac-bracket-symbol > div > .oangle,
.dirac-bracket-symbol > div > .cangle {
  align-self: stretch;
  width: 0.55em;
  position: relative;
  margin-top: 0.1em;
  margin-bottom: -0.1em;
}
.dirac-bracket-symbol > div > .oangle > svg,
.dirac-bracket-symbol > div > .cangle > svg {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
}
.dirac-bracket-symbol > div > .vert {
  align-self: stretch;
  width: 0.25em;
  position: relative;
  margin-top: 0.1em;
  margin-bottom: -0.1em;
}
.dirac-bracket-symbol > div > .vert > svg {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
}
.dirac-bracket-symbol > div > editarea.first {
  min-width: 0.3em;
  padding-right: 0.1em;
}
.dirac-bracket-symbol > div > editarea.last {
  min-width: 0.3em;
  padding-left: 0.1em;
}
.dirac-bracket-symbol > div > editarea.middle {
  min-width: 0.3em;
  padding-left: 0.1em;
  padding-right: 0.1em;
}

cancel-symbol > editarea {
  display: inline-flex;
}
cancel-symbol > svg {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
}

/**we use alpha as we have problem with background (without alpha) in Electron version (older Chrome) **/
/* z-index region*/
/**different context*/
/**different context*/
math-type compositeblock.fraction-symbol {
  margin-left: 0.1em;
  margin-right: 0.1em;
  vertical-align: baseline;
}
math-type compositeblock.fraction-symbol.frac-inline {
  font-size: 0.75em;
}
math-type compositeblock.fraction-symbol > .enumerator {
  float: left;
  width: 100%;
  clear: both;
}
math-type compositeblock.fraction-symbol > .denominator {
  margin-top: -5px;
  float: left;
  width: 100%;
}
math-type compositeblock.fraction-symbol > .frac-line {
  clear: both;
  pointer-events: none;
}
math-type compositeblock.fraction-symbol > .frac-line > inline {
  display: inline-block;
  width: 100%;
  vertical-align: 0.25em;
  border-bottom: solid 1px;
}
math-type compositeblock.fraction-symbol > editarea {
  border: 0px;
  min-width: 0.6em;
  text-align: center;
}
math-type compositeblock.fraction-symbol > editarea > area-container > line,
math-type compositeblock.fraction-symbol > editarea > line {
  justify-content: center;
  text-align: center;
}
math-type compositeblock.fraction-symbol > editarea-line {
  text-align: center;
}

.stackrel-icon {
  margin: auto;
  display: flex;
  align-items: center;
  flex-direction: column;
}
.stackrel-icon .square {
  width: 6px;
  height: 6px;
  border-style: solid;
  border-width: 1px;
  border-color: gray;
}
.stackrel-icon .distance {
  margin-top: 3px;
}

/**we use alpha as we have problem with background (without alpha) in Electron version (older Chrome) **/
/* z-index region*/
/**different context*/
/**different context*/
math-type .stackrel-symbol.selected {
  outline: 1px solid rgba(93, 92, 92, 0.3);
}
math-type .stackrel-symbol > .cur-value {
  clear: both;
  display: inline-flex;
  width: 100%;
}
math-type .stackrel-symbol > .top {
  float: left;
  clear: both;
  width: 100%;
  font-size: 0.7em;
}

/**we use alpha as we have problem with background (without alpha) in Electron version (older Chrome) **/
/* z-index region*/
/**different context*/
/**different context*/
math-type .underset-symbol > .center {
  display: inline-flex;
  width: 100%;
}
math-type .underset-symbol > .bottom {
  float: left;
  display: block;
  width: 100%;
  font-size: 0.7em;
}

/**we use alpha as we have problem with background (without alpha) in Electron version (older Chrome) **/
/* z-index region*/
/**different context*/
/**different context*/
math-type .over-under-set-symbol.selected {
  outline: 1px solid rgba(93, 92, 92, 0.3);
}
math-type .over-under-set-symbol > .top {
  display: flex;
  float: left;
  clear: both;
  width: 100%;
}
math-type .over-under-set-symbol > .top > line {
  font-size: 0.7em;
}
math-type .over-under-set-symbol > .middle {
  display: inline-flex;
  width: 100%;
  clear: both;
}
math-type .over-under-set-symbol > .middle.select {
  border-bottom: none;
}
math-type .over-under-set-symbol > .bottom {
  display: flex;
  float: left;
  width: 100%;
}
math-type .over-under-set-symbol > .bottom > line {
  font-size: 0.7em;
}

expandable-component.thickness item-option.thickness-option {
  width: 40px;
  height: 12px;
}
expandable-component.thickness svg {
  stroke: gray;
  stroke-width: 1px;
  fill: none;
}
expandable-component.thickness thickness {
  position: relative;
  display: flex;
  height: 100%;
}
expandable-component.thickness thickness > svg.thickness {
  width: 25px;
  height: 100%;
  position: static;
}
expandable-component.thickness thickness > svg.thickness line {
  stroke: gray;
  stroke-width: 1px;
}
expandable-component.thickness thickness > svg.thickness path {
  fill: #d2cfcf;
  stroke: none;
}



/**we use alpha as we have problem with background (without alpha) in Electron version (older Chrome) **/
/* z-index region*/
/**different context*/
/**different context*/
math-type .textcircled > div > editarea {
  text-align: center;
}
math-type .textcircled > div > editarea > area-container > line,
math-type .textcircled > div > editarea > line {
  justify-content: center;
  text-align: center;
}

/**different context*/
/**different context*/
math-type ref-tag {
  position: absolute;
  right: 5px;
  top: 50%;
  transform: translate(0, -50%);
  z-index: 8;
  cursor: pointer;
}
math-type ref-tag > label {
  cursor: pointer;
}
math-type ref-tag:hover {
  text-decoration: underline;
}
math-type ref-tag.line-tag {
  transition: background 0.4s;
}
math-type ref-tag.empty-line-tag {
  opacity: 0.5;
  animation: fadein 0.5s;
}
math-type tr.math-row ref-tag {
  left: calc(100% + 20px);
  right: unset;
}
@keyframes fadein {
  0% {
    opacity: 0;
  }
  70% {
    opacity: 0;
  }
  100% {
    opacity: 0.5;
  }
}

/**we use alpha as we have problem with background (without alpha) in Electron version (older Chrome) **/
/* z-index region*/
/**different context*/
/**different context*/
.math-container-symbol {
  margin-top: 0.3em;
  margin-bottom: 0.3em;
  display: inline-flex;
}
.math-container-symbol.inline {
  margin-top: 0px;
  margin-bottom: 0px;
}
.math-container-symbol.selected {
  background-color: rgba(76, 175, 80, 0.05);
  outline: 1px solid #c1d4c1;
}
.math-container-symbol.display {
  display: block;
}
.math-container-symbol.display.selected {
  background-color: rgba(76, 175, 80, 0.05);
  outline: none;
}
.math-container-symbol.display > editarea {
  width: 100%;
  flex-grow: 1;
  display: block;
  text-align: center;
}
.math-container-symbol.display > editarea > area-container > line,
.math-container-symbol.display > editarea > line {
  justify-content: center;
  text-align: center;
}
.math-container-symbol.display > editarea > area-container > line {
  padding-top: 8px;
  padding-bottom: 8px;
}

/**we use alpha as we have problem with background (without alpha) in Electron version (older Chrome) **/
/* z-index region*/
/**different context*/
/**different context*/
.math-container-symbol > editarea.multiline {
  display: block;
  flex-grow: 1;
  text-align: center;
}
.math-container-symbol > editarea.multiline > area-container > line,
.math-container-symbol > editarea.multiline > line {
  justify-content: center;
  text-align: center;
}
.math-container-symbol > editarea.multiline > line:last-child {
  justify-content: flex-end;
  text-align: right;
}
.math-container-symbol > editarea.multiline > line:first-child {
  justify-content: flex-start;
  text-align: left;
}

/**we use alpha as we have problem with background (without alpha) in Electron version (older Chrome) **/
/* z-index region*/
/**different context*/
/**different context*/
math-type .icon-sqrt,
.auto-complete-external-area .icon-sqrt {
  display: flex;
  margin: auto;
  font-size: 12px;
}
math-type .icon-sqrt .square,
.auto-complete-external-area .icon-sqrt .square {
  margin-top: 3px;
  margin-right: -6px;
}
math-type .icon-sqrt .square-expand,
.auto-complete-external-area .icon-sqrt .square-expand {
  background-color: #f7f7f7;
}
math-type .icon-sqrt .align-end,
.auto-complete-external-area .icon-sqrt .align-end {
  margin-top: 8px;
}
math-type .icon-sqrt .line,
.auto-complete-external-area .icon-sqrt .line {
  width: 10px;
  border-top: solid 1px black;
  margin-top: 6px;
}
math-type .icon-sqrt .big-square,
.auto-complete-external-area .icon-sqrt .big-square {
  margin-top: 11px;
  margin-left: -8px;
}
math-type .sqrt-symbol {
  white-space: nowrap;
  align-items: stretch;
  position: relative;
}
math-type .sqrt-symbol > add {
  opacity: 0.5;
  background-color: #f7f7f7;
  border: 1px solid #c3c2c2;
  color: gray;
  display: block;
  position: absolute;
  font-size: 0.6em;
  cursor: pointer;
  margin-left: -0.4em;
  z-index: 999;
  opacity: 0.7;
  left: 50%;
  top: -0.5em;
  left: 0.5em;
}
math-type .sqrt-symbol > add:hover {
  border-color: gray;
  opacity: 1;
}
math-type .sqrt-symbol > add > i {
  display: block;
  height: 1em;
  padding: 0.1em 0.15em;
  padding-bottom: 0;
  width: 0.8em;
}
math-type .sqrt-symbol text {
  fill: black;
}
math-type .sqrt-symbol > sqrt-edit {
  position: relative;
  order: 3;
  display: inline-block;
  align-self: flex-end;
}
math-type .sqrt-symbol > sqrt-edit > sqrt-symbol-line {
  overflow: visible;
  z-index: 1;
  width: 100%;
  height: 100%;
  display: block;
  position: absolute;
  left: 0;
  top: 0;
  pointer-events: none;
}
math-type .sqrt-symbol > sqrt-edit > sqrt-symbol-line > svg {
  overflow: visible;
  width: 100%;
  height: 1em;
}
math-type .sqrt-symbol > sqrt-edit > area-container > line {
  width: 1em;
  position: relative;
}
math-type .sqrt-symbol > sqrt-edit > editarea,
math-type .sqrt-symbol > sqrt-edit > editarea-line {
  z-index: 2;
  display: inline-block;
  min-width: 0.5em;
  margin-left: 1em;
}
math-type .sqrt-symbol > sqrt-top {
  position: relative;
  z-index: 2;
  vertical-align: bottom;
  padding-bottom: 0.9em;
  align-self: flex-end;
  display: inline-block;
}
math-type .sqrt-symbol > sqrt-top.selected {
  outline: 1px solid rgba(93, 92, 92, 0.3);
}
math-type .sqrt-symbol > sqrt-top > editarea {
  font-size: 0.7em;
  border: none 0px;
  min-width: 0.5em;
  display: flex;
  float: right;
  text-align: center;
}
math-type .sqrt-symbol > sqrt-top > editarea > line {
  justify-content: center;
  text-align: center;
}





/**we use alpha as we have problem with background (without alpha) in Electron version (older Chrome) **/
/* z-index region*/
/**different context*/
/**different context*/
image-viewer {
  width: 100%;
}
image-viewer.inline {
  width: auto;
}
image-viewer .image-content {
  cursor: pointer;
  text-align: left;
}
image-viewer detail list-items-options div {
  border: 1px solid transparent;
  cursor: pointer;
  margin-left: 3px;
  padding: 0 2px 0 2px;
}
image-viewer detail list-items-options div:hover {
  background-color: white;
  border: 1px solid lightgray;
}
image-viewer detail list-items-options div.selected {
  background-color: white;
  border: 1px solid lightgray;
}
image-viewer image-container {
  display: flex;
  flex-direction: column;
}
image-viewer image-container img {
  position: absolute;
}
image-viewer image-container.center {
  align-items: center;
}
image-viewer image-container.left {
  align-items: flex-start;
}
image-viewer image-container.right {
  align-items: flex-end;
}
.resize-box {
  position: absolute;
  width: 8px;
  height: 8px;
  border-width: 1px;
  border-color: gray;
  border-style: solid;
  background-color: white;
  z-index: 999;
}
.resize-box.mobile-tablet {
  width: 16px;
  height: 16px;
}
.resize-box.hide {
  display: none;
}
topleft {
  top: 0;
  left: 0;
  margin-left: -5px;
  margin-top: -5px;
  cursor: nwse-resize;
}
topleft.mobile-tablet {
  margin-left: -8px;
  margin-top: -8px;
}
topright {
  top: 0;
  right: 0;
  margin-right: -5px;
  margin-top: -5px;
  cursor: nesw-resize;
}
topright.mobile-tablet {
  margin-right: -8px;
  margin-top: -8px;
}
topmiddle {
  top: 0;
  left: 50%;
  margin-left: -5px;
  margin-top: -5px;
  cursor: ns-resize;
}
topmiddle.mobile-tablet {
  margin-left: -8px;
  margin-top: -8px;
}
leftmiddle {
  top: 50%;
  left: 0;
  margin-left: -5px;
  margin-top: -5px;
  cursor: ew-resize;
}
leftmiddle.mobile-tablet {
  margin-left: -8px;
  margin-top: -8px;
}
rightmiddle {
  top: 50%;
  right: 0;
  margin-right: -5px;
  margin-top: -5px;
  cursor: ew-resize;
}
rightmiddle.mobile-tablet {
  margin-right: -8px;
  margin-top: -8px;
}
bottomleft {
  bottom: 0;
  left: 0;
  margin-left: -5px;
  margin-bottom: -5px;
  cursor: nesw-resize;
}
bottomleft.mobile-tablet {
  margin-left: -8px;
  margin-bottom: -8px;
}
bottomright {
  bottom: 0;
  right: 0;
  margin-right: -5px;
  margin-bottom: -5px;
  cursor: nwse-resize;
}
bottomright.mobile-tablet {
  margin-right: -8px;
  margin-bottom: -8px;
}
bottommiddle {
  bottom: 0;
  left: 50%;
  margin-left: -5px;
  margin-bottom: -5px;
  cursor: ns-resize;
}
bottommiddle.mobile-tablet {
  margin-left: -8px;
  margin-bottom: -8px;
}
.ghost-viewer {
  border: 1px dotted gray;
  width: 100%;
  height: 100%;
  display: block;
}

compositeblock.image-container {
  position: relative;
  width: 100%;
  margin-top: 10px;
  margin-bottom: 10px;
}
compositeblock.image-container > image-viewer {
  display: block;
}
compositeblock.image-container.inline {
  width: auto;
  margin-top: 0;
  margin-bottom: 0;
  display: inline-block;
}
.image-caption > line.text-mode:first-child {
  display: inline;
}
.image-caption > line.text-mode:first-child > blocks {
  display: inline;
}
.add-caption {
  opacity: 0.85;
  text-align: "center";
  color: #1155cc;
  cursor: pointer;
  position: absolute;
  bottom: -35px;
  left: 50%;
  transform: translate(-50%, 0);
  z-index: 10;
  font-size: 13px;
  background: white;
  border: 1px solid lightgray;
  padding: 5px;
}
.add-caption:hover {
  opacity: 1;
}

/**we use alpha as we have problem with background (without alpha) in Electron version (older Chrome) **/
/* z-index region*/
/**different context*/
/**different context*/
math-type .power-index-symbol-container {
  margin-right: 0.06em;
  margin-left: 0.03em;
}
math-type .power-index-symbol-container.has-power > .power-value {
  margin-left: 0.04em;
}
math-type .power-index-symbol-container > .power-value,
math-type .pre-script-symbol-container > .power-value {
  /*margin-bottom: -2px;*/
  float: left;
  clear: both;
  text-align: left;
}
math-type .power-index-symbol-container > .power-value.small > line,
math-type .pre-script-symbol-container > .power-value.small > line {
  margin-bottom: -0.35em;
}
math-type .power-index-symbol-container > .power-value > line,
math-type .pre-script-symbol-container > .power-value > line {
  font-size: 0.7em;
}
math-type .power-index-symbol-container > .power-value > area-container > line,
math-type .pre-script-symbol-container > .power-value > area-container > line,
math-type .power-index-symbol-container > .power-value > line,
math-type .pre-script-symbol-container > .power-value > line {
  justify-content: flex-start;
  text-align: left;
}
math-type .power-index-symbol-container > middle-base,
math-type .pre-script-symbol-container > middle-base {
  display: block;
  clear: both;
  height: 1em;
}
math-type .power-index-symbol-container > middle-base > inline,
math-type .pre-script-symbol-container > middle-base > inline {
  display: inline-block;
}
math-type .power-index-symbol-container > .index-value,
math-type .pre-script-symbol-container > .index-value {
  float: left;
  text-align: left;
}
math-type .power-index-symbol-container > .index-value > line,
math-type .pre-script-symbol-container > .index-value > line {
  font-size: 0.7em;
}
math-type .power-index-symbol-container > .index-value > area-container > line,
math-type .pre-script-symbol-container > .index-value > area-container > line,
math-type .power-index-symbol-container > .index-value > line,
math-type .pre-script-symbol-container > .index-value > line {
  justify-content: flex-start;
  text-align: left;
}
math-type .power-index-symbol-container > editarea-block.index-value,
math-type .pre-script-symbol-container > editarea-block.index-value,
math-type .power-index-symbol-container > editarea-line.index-value,
math-type .pre-script-symbol-container > editarea-line.index-value {
  font-size: 0.7em;
}
math-type .power-index-symbol-container > editarea-block.power-value,
math-type .pre-script-symbol-container > editarea-block.power-value,
math-type .power-index-symbol-container > editarea-line.power-value,
math-type .pre-script-symbol-container > editarea-line.power-value {
  font-size: 0.7em;
}
math-type .pre-script-symbol-container > .power-value {
  float: right;
}
math-type .pre-script-symbol-container > .index-value {
  float: right;
}
.icon-power-index-symbol {
  display: flex;
  margin: auto;
  width: 20px;
  padding-bottom: 6px;
}
.icon-power-index-symbol .square-up {
  margin-top: 4px;
}
.icon-power-index-symbol .square-down {
  margin-top: 14px;
  margin-left: -6px;
}
.icon-power-index-symbol .align-end {
  margin-top: 4px;
}
.icon-power-symbol {
  display: flex;
  margin: auto;
  width: 20px;
  padding-bottom: 6px;
}
.icon-power-symbol .square {
  margin-top: 4px;
}
.icon-power-symbol .align-end {
  margin-top: 4px;
}
.icon-index-symbol {
  display: flex;
  margin: auto;
  width: 20px;
  padding-bottom: 6px;
}
.icon-index-symbol .square {
  margin-top: 14px;
  margin-left: 0px;
}
.icon-index-symbol .align-end {
  margin-top: 4px;
}

/**we use alpha as we have problem with background (without alpha) in Electron version (older Chrome) **/
/* z-index region*/
/**different context*/
/**different context*/
.matrix-symbol.matrix-like > matrix > table > tbody > tr > td {
  padding-bottom: 0.1em;
  padding-top: 0.1em;
}
.matrix-symbol.matrix-like > matrix > table > tbody > tr.hline {
  border-top: 1px solid;
}
.matrix-symbol.matrix-like > matrix > table > tbody > tr:last-child.last-hline {
  border-bottom: 1px solid;
}
.matrix-symbol {
  /* must be flex to have vertical center align , unless figure out another way */
  display: inline-flex;
  align-items: center;
}
.matrix-symbol > matrix > table > tbody > tr > td > .sbd {
  position: absolute;
  left: -1px;
  top: -1px;
  right: -1px;
  bottom: -1px;
  pointer-events: none;
  background: none;
}
.matrix-symbol.selected > matrix > table > tbody > tr > td > .sbd {
  border-top: 1px solid rgba(93, 92, 92, 0.15);
  border-left: 1px solid rgba(93, 92, 92, 0.15);
}
.matrix-symbol.selected > matrix > table > tbody > tr > td > .sbd.sbd-lr {
  border-bottom: 1px solid rgba(93, 92, 92, 0.15);
}
.matrix-symbol.selected > matrix > table > tbody > tr > td > .sbd.sbd-lc {
  border-right: 1px solid rgba(93, 92, 92, 0.15);
}
.matrix-symbol > base-line-indicator {
  height: inherit;
  margin-top: -0.18em;
}
.matrix-symbol matrixclosesymbol,
.matrix-symbol matrixopensymbol {
  font-style: normal;
  color: black;
  position: relative;
}
.matrix-symbol matrixclosesymbol > span,
.matrix-symbol matrixopensymbol > span {
  visibility: hidden;
  display: inline-block;
}
.matrix-symbol matrixclosesymbol > svg,
.matrix-symbol matrixopensymbol > svg {
  overflow: visible;
  font-size: 15px;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
}
.matrix-symbol matrixclosesymbol > svg text,
.matrix-symbol matrixopensymbol > svg text {
  fill: black;
}
.matrix-symbol > matrix.matrix > table > tbody > tr > td {
  padding: 0 0.3em;
}
.matrix-symbol > matrix {
  display: flex;
  position: relative;
  float: left;
  align-items: stretch;
  break-inside: avoid;
}
.matrix-symbol > matrix > svg {
  width: 0.6em;
  /*init height, willl be changed by inline style*/
  height: 3px;
  overflow: visible;
}
.matrix-symbol > matrix > vcomposed-symbol {
  height: inherit;
}
.matrix-symbol > matrix > table {
  border: 1px solid transparent;
  border-collapse: collapse;
}
.matrix-symbol > matrix > table > tbody > tr {
  box-sizing: border-box;
}
.matrix-symbol > matrix > table > tbody > tr.smaller {
  font-size: 0.75em;
}
.matrix-symbol > matrix > table > tbody > tr > td {
  position: relative;
  border: 1px dotted transparent;
  box-sizing: border-box;
  padding: 0 0.3em;
  vertical-align: baseline;
}
.matrix-symbol > matrix > table > tbody > tr > td > .editor-cell {
  display: inline-block;
  width: 100%;
}
.matrix-symbol > matrix > table > tbody > tr > td.vline {
  border-left: 1px solid;
}
.matrix-symbol > matrix > table > tbody > tr > td:last-child.last-vline {
  border-right: 1px solid;
}
.matrix-symbol > matrix > table > tbody > tr > td > .editor-cell {
  min-width: 0.5em;
  text-align: center;
}
.matrix-symbol > matrix > table > tbody > tr > td > .editor-cell > area-container > line,
.matrix-symbol > matrix > table > tbody > tr > td > .editor-cell > line {
  justify-content: center;
  text-align: center;
}
.matrix-symbol > matrix.matrix > table {
  margin-left: -0.2em;
  margin-right: -0.2em;
}
.matrix-symbol > matrix.matrix > table > tbody > tr > td > .editor-cell {
  text-align: center;
}
.matrix-symbol > matrix.matrix > table > tbody > tr > td > .editor-cell > area-container > line,
.matrix-symbol > matrix.matrix > table > tbody > tr > td > .editor-cell > line {
  justify-content: center;
  text-align: center;
}
.matrix-symbol > matrix.array > table > tbody > tr > td > .editor-cell.left {
  text-align: left;
}
.matrix-symbol > matrix.array > table > tbody > tr > td > .editor-cell.left > area-container > line,
.matrix-symbol > matrix.array > table > tbody > tr > td > .editor-cell.left > line {
  justify-content: flex-start;
  text-align: left;
}
.matrix-symbol > matrix.array > table > tbody > tr > td > .editor-cell.center {
  text-align: center;
}
.matrix-symbol > matrix.array > table > tbody > tr > td > .editor-cell.center > area-container > line,
.matrix-symbol > matrix.array > table > tbody > tr > td > .editor-cell.center > line {
  justify-content: center;
  text-align: center;
}
.matrix-symbol > matrix.array > table > tbody > tr > td > .editor-cell.right {
  text-align: right;
}
.matrix-symbol > matrix.array > table > tbody > tr > td > .editor-cell.right > area-container > line,
.matrix-symbol > matrix.array > table > tbody > tr > td > .editor-cell.right > line {
  justify-content: flex-end;
  text-align: right;
}
.matrix-symbol > matrix.gathered > table > tbody > tr > td:nth-child(2n+3) {
  padding-left: 1em;
}
.matrix-symbol > matrix.gathered line {
  text-align: center;
}
.matrix-symbol > matrix.aligned > table > tbody > tr > td {
  padding: 0;
}
.matrix-symbol > matrix.aligned > table > tbody > tr > td:nth-child(2n+3) {
  padding-left: 1em;
}
.matrix-symbol > matrix.aligned > table > tbody > tr > td:nth-child(2n+1) > .editor-cell {
  text-align: right;
}
.matrix-symbol > matrix.aligned > table > tbody > tr > td:nth-child(2n+1) > .editor-cell > area-container > line,
.matrix-symbol > matrix.aligned > table > tbody > tr > td:nth-child(2n+1) > .editor-cell > line {
  justify-content: flex-end;
  text-align: right;
}
.matrix-symbol > matrix.aligned > table > tbody > tr > td:nth-child(2n) > .editor-cell {
  text-align: left;
}
.matrix-symbol > matrix.aligned > table > tbody > tr > td:nth-child(2n) > .editor-cell > area-container > line,
.matrix-symbol > matrix.aligned > table > tbody > tr > td:nth-child(2n) > .editor-cell > line {
  justify-content: flex-start;
  text-align: left;
}
.matrix-symbol > matrix > border-design {
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  display: block;
  background-color: rgba(255, 255, 255, 0.7);
  z-index: 10;
}
.matrix-symbol > matrix > border-design > border-line {
  cursor: pointer;
  position: absolute;
  /*border:1px solid gray;*/
}
.matrix-symbol > matrix > border-design > border-line > horizontal-line {
  border-top: 1px solid #eceaea;
  display: block;
  position: absolute;
  top: 50%;
  width: 100%;
  height: 1px;
  margin-top: 0;
  left: 0;
}
.matrix-symbol > matrix > border-design > border-line > vertical-line {
  border-left: 1px solid #eceaea;
  display: block;
  position: absolute;
  left: 50%;
  width: 1px;
  height: 100%;
  top: 0;
}
.matrix-symbol > matrix > border-design > border-line > vertical-line.enabled {
  border-top: 1px solid;
}
.matrix-symbol > matrix > border-design > border-line:hover > horizontal-line {
  border-top: 1px solid gray;
}
.matrix-symbol > matrix > border-design > border-line:hover > vertical-line {
  border-left: 1px solid gray;
}
.matrix-symbol > matrix > border-design > border-line.enabled > horizontal-line {
  border-top: 1px solid;
}
.matrix-symbol > matrix > border-design > border-line.enabled > vertical-line {
  border-left: 1px solid;
}
.matrix-symbol > matrix > setting {
  padding: 7px;
  position: absolute;
  top: -6px;
  font-family: "Segoe UI", Arial, Verdana, sans-serif;
  transform: translate(0, -100%);
  left: 0;
}
.matrix-symbol > matrix > setting > main-setting {
  display: flex;
  flex-direction: row;
}
.matrix-symbol > matrix > setting > main-setting styled-select {
  display: block;
  background-color: white;
}
.fa-table.array-settings {
  border: 1px solid lightgray;
  padding: 3px 5px;
  font-size: 14px;
  color: gray;
  cursor: pointer;
  /*margin-left: 5px;*/
}
.fa-table.array-settings:hover {
  color: black;
  background: white;
}
.matrix-icon {
  display: flex;
}
.matrix-icon .square {
  margin-top: 2px;
}
.matrix-icon .display-flex {
  display: flex;
}

/**we use alpha as we have problem with background (without alpha) in Electron version (older Chrome) **/
/* z-index region*/
/**different context*/
/**different context*/
.matrix-symbol.case-symbol > matrix > table > tbody > tr > td {
  padding: 0 0.2em;
}
.matrix-symbol.case-symbol > matrix > table > tbody > tr > td.non-select {
  user-select: none;
  width: 0.2em;
  padding: 0;
}
.matrix-symbol.case-symbol > matrix > table > tbody > tr > td > .editor-cell {
  text-align: left;
}
.matrix-symbol.case-symbol > matrix > table > tbody > tr > td > .editor-cell > area-container > line,
.matrix-symbol.case-symbol > matrix > table > tbody > tr > td > .editor-cell > line {
  justify-content: flex-start;
  text-align: left;
}
.case-icon {
  display: flex;
  font-size: 18px;
  line-height: 18px;
}
.case-icon .square {
  margin-top: 2px;
}
.case-icon .display-flex {
  display: flex;
}

/**we use alpha as we have problem with background (without alpha) in Electron version (older Chrome) **/
/* z-index region*/
/**different context*/
/**different context*/
.matrix-symbol.dr-case-symbol > matrix > table > tbody > tr > td {
  padding: 0 0.2em;
}
.matrix-symbol.dr-case-symbol > matrix > table > tbody > tr > td.selected {
  border: 1px solid #e0e0e0;
}
.matrix-symbol.dr-case-symbol > matrix > table > tbody > tr > td > .editor-cell {
  text-align: left;
}
.matrix-symbol.dr-case-symbol > matrix > table > tbody > tr > td > .editor-cell > area-container > line,
.matrix-symbol.dr-case-symbol > matrix > table > tbody > tr > td > .editor-cell > line {
  justify-content: flex-start;
  text-align: left;
}
.case-icon {
  display: flex;
  font-size: 18px;
  line-height: 18px;
}
.case-icon .square {
  margin-top: 2px;
}
.case-icon .display-flex {
  display: flex;
}

.array-icon .square {
  margin-top: 2px;
}
.array-icon .display-flex {
  display: flex;
}

.matrix-like.binom > .binom > table > tbody > tr > td {
  padding: 0;
}
.matrix-like.binom > .binom > table > tbody > tr > td line {
  text-align: center;
}

/**we use alpha as we have problem with background (without alpha) in Electron version (older Chrome) **/
/* z-index region*/
/**different context*/
/**different context*/
.matrix-symbol.align-symbol {
  /*display flex because to make sure it's spend whole line*/
  display: flex;
  justify-content: center;
  margin-top: 10px;
  margin-bottom: 10px;
  width: 100%;
}
.matrix-symbol.align-symbol.selected {
  background-color: rgba(76, 175, 80, 0.05);
}
.matrix-symbol.align-symbol > matrix > setting > main-setting {
  margin-bottom: 0px;
}
.matrix-symbol.align-symbol > matrix > bulb {
  left: 50%;
}
.matrix-symbol.align-symbol > matrix > setting {
  margin-left: 20px;
}
.matrix-symbol.align-symbol > matrix.align {
  width: 100%;
  display: block;
}
.matrix-symbol.align-symbol > matrix > table > tbody > tr > td {
  padding: 0;
  vertical-align: baseline;
  border: 1px solid transparent;
}
.matrix-symbol.align-symbol > matrix > table > tbody > tr > td > .editor-cell {
  /* should align start and area-container level (instead of line level)
                as for lazy rendering, we need to have exact line width */
}
.matrix-symbol.align-symbol > matrix > table > tbody > tr > td > .editor-cell > area-container {
  align-items: flex-start;
}
.matrix-symbol.align-symbol > matrix > table > tbody > tr > td > .editor-cell > area-container > line {
  width: auto;
  text-align: left;
}
.matrix-symbol.align-symbol > matrix > table > tbody > tr > td.align-right > .editor-cell {
  /* should align start and area-container level (instead of line level)
                as for lazy rendering, we need to have exact line width */
}
.matrix-symbol.align-symbol > matrix > table > tbody > tr > td.align-right > .editor-cell > area-container {
  align-items: flex-end;
}
.matrix-symbol.align-symbol > matrix > table > tbody > tr > td.align-right > .editor-cell > area-container > line {
  width: auto;
  text-align: right;
}
.matrix-symbol.align-symbol > matrix > table > tbody > tr > td.non-select {
  border: none;
  user-select: none;
}
.matrix-symbol.align-symbol > matrix > table > tbody > tr > td.expand {
  width: 100%;
}
.matrix-symbol.align-symbol > matrix > table > tbody > tr > td.selected {
  border: 1px solid #e0e0e0;
}
.matrix-symbol.align-symbol > matrix > table > tbody > tr > td > .editor-cell {
  min-width: 1.5em;
}
.matrix-symbol.align-symbol > matrix > table > tbody > tr > td > tupple {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: baseline;
}

/**we use alpha as we have problem with background (without alpha) in Electron version (older Chrome) **/
/* z-index region*/
/**different context*/
/**different context*/
.matrix-symbol.gather-symbol {
  /*display flex because to make sure it's spend whole line*/
  display: flex;
  justify-content: center;
  margin-top: 10px;
  margin-bottom: 10px;
  width: 100%;
}
.matrix-symbol.gather-symbol.selected {
  background-color: rgba(76, 175, 80, 0.05);
}
.matrix-symbol.gather-symbol > matrix.gather {
  width: 100%;
  display: block;
}
.matrix-symbol.gather-symbol > matrix > setting > main-setting {
  margin-bottom: 0px;
}
.matrix-symbol.gather-symbol > matrix > bulb {
  left: -1em;
}
.matrix-symbol.gather-symbol > matrix > setting {
  margin-left: 20px;
}
.matrix-symbol.gather-symbol > matrix > table > tbody > tr > td {
  padding: 0;
  vertical-align: baseline;
  border: 1px solid transparent;
  text-align: center;
}
.matrix-symbol.gather-symbol > matrix > table > tbody > tr > td.non-select {
  user-select: none;
  width: 1.5em;
  border: none;
}
.matrix-symbol.gather-symbol > matrix > table > tbody > tr > td.expand {
  width: 100%;
}
.matrix-symbol.gather-symbol > matrix > table > tbody > tr > td.selected {
  border: 1px solid #e0e0e0;
}
.matrix-symbol.gather-symbol > matrix > table > tbody > tr > td line {
  text-align: center;
}
.matrix-symbol.gather-symbol > matrix > table > tbody > tr > td > .editor-cell {
  min-width: 1.5em;
  /* should align start and area-container level (instead of line level)
                as for lazy rendering, we need to have exact line width */
}
.matrix-symbol.gather-symbol > matrix > table > tbody > tr > td > .editor-cell > area-container {
  align-items: center;
}
.matrix-symbol.gather-symbol > matrix > table > tbody > tr > td > .editor-cell > area-container > line {
  width: auto;
}
.matrix-symbol.gather-symbol > matrix > table > tbody > tr > td > tupple {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: baseline;
}

math-type compositeblock.table-symbol {
  width: 100%;
  display: flex;
}
math-type matrix.table {
  width: 100%;
  flex-direction: column;
}
math-type matrix.table > table {
  table-layout: fixed;
  width: 100%;
}
math-type matrix.table > table > tbody > tr > td {
  vertical-align: top;
  padding: 0;
  position: relative;
}
math-type .cell-border-box {
  position: absolute;
  left: -1px;
  top: -1px;
  width: 100%;
  height: 100%;
}
.table-caption > line.text-mode:first-child {
  display: inline;
}
.table-caption > line.text-mode:first-child > blocks {
  display: inline;
}

editarea.lttb.text-mode > line.text-mode > blocks {
  text-align: inherit;
}



math-type compositeblock.table-of-content {
  display: block;
  width: 100%;
}
math-type compositeblock.table-of-content > toc-wrapper {
  position: relative;
  width: 100%;
  display: block;
  cursor: default;
}
math-type compositeblock.table-of-content > toc-wrapper .toc-setting-icons {
  display: none;
  position: absolute;
  left: -65px;
  width: 70px;
  top: -20px;
  bottom: 0;
  font-size: 1em;
  z-index: 999;
  padding-top: 20px;
}
math-type compositeblock.table-of-content > toc-wrapper .toc-setting-icons > .icon-refresh,
math-type compositeblock.table-of-content > toc-wrapper .toc-setting-icons > .icon-settings {
  border: 1px solid #c3c2c2;
  padding: 0.3em;
  padding-top: 0.1em;
  line-height: 1.2;
  padding-bottom: 0;
  cursor: pointer;
  background-color: #f7f7f7;
  color: gray;
  width: 12px;
  display: inline-block;
  margin-left: 5px;
}
math-type compositeblock.table-of-content > toc-wrapper:hover .toc-setting-icons {
  display: block;
}
math-type compositeblock.table-of-content > toc-wrapper > editarea.toc-ea.text-mode {
  width: 100%;
  cursor: default;
  display: block;
}
math-type compositeblock.table-of-content > toc-wrapper > editarea.toc-ea.text-mode > line.text-mode {
  display: block;
  width: auto;
  cursor: default;
  padding-left: 1em;
  padding-right: 2.5em;
  font-style: unset;
}
math-type compositeblock.table-of-content > toc-wrapper > editarea.toc-ea.text-mode > line.text-mode > a > blocks,
math-type compositeblock.table-of-content > toc-wrapper > editarea.toc-ea.text-mode > line.text-mode > blocks {
  display: block;
}
math-type compositeblock.table-of-content > toc-wrapper > editarea.toc-ea.text-mode > line.text-mode > a > prefix,
math-type compositeblock.table-of-content > toc-wrapper > editarea.toc-ea.text-mode > line.text-mode > prefix {
  display: none;
}
math-type compositeblock.table-of-content > toc-wrapper > editarea.toc-ea.text-mode > line.text-mode.has-rtl {
  padding-left: 2.5em;
  padding-right: 1em;
}
math-type compositeblock.table-of-content > toc-wrapper > editarea.toc-ea.text-mode > line.text-mode.has-rtl > a > blocks,
math-type compositeblock.table-of-content > toc-wrapper > editarea.toc-ea.text-mode > line.text-mode.has-rtl > blocks {
  text-align: right;
}
math-type compositeblock.table-of-content > toc-wrapper > editarea.toc-ea.text-mode > line.text-mode.has-rtl a > blocks > compositeblock.toc-page-number-symbol,
math-type compositeblock.table-of-content > toc-wrapper > editarea.toc-ea.text-mode > line.text-mode.has-rtl > blocks > compositeblock.toc-page-number-symbol {
  float: left;
  padding-left: 0;
  margin-right: 0;
  margin-left: -1em;
  padding-right: 0.5em;
}
math-type compositeblock.table-of-content > toc-wrapper > editarea.toc-ea.text-mode > line.text-mode > block,
math-type compositeblock.table-of-content > toc-wrapper > editarea.toc-ea.text-mode > line.text-mode > a > block,
math-type compositeblock.table-of-content > toc-wrapper > editarea.toc-ea.text-mode > line.text-mode > blocks > block,
math-type compositeblock.table-of-content > toc-wrapper > editarea.toc-ea.text-mode > line.text-mode a > blocks > block {
  white-space: pre-wrap;
  white-space: break-spaces;
  cursor: pointer;
  font-style: unset;
}
math-type compositeblock.table-of-content > toc-wrapper > editarea.toc-ea.text-mode > line.text-mode > a > blocks > compositeblock.toc-page-number-symbol,
math-type compositeblock.table-of-content > toc-wrapper > editarea.toc-ea.text-mode > line.text-mode > blocks > compositeblock.toc-page-number-symbol {
  float: right;
  padding-left: 0.5em;
  margin-right: -1em;
}



.icon-integral-symbol {
  margin: auto 4px auto auto;
  display: flex;
  flex-direction: row-reverse;
  font-size: 12px;
}
.icon-integral-symbol .square-up {
  border-width: 1px;
  margin-top: 0px;
}
.icon-integral-symbol .square-down {
  border-width: 1px;
  margin-top: 21px;
  margin-left: -10px;
}
.icon-integral-symbol .align-end {
  margin-top: 6px;
}

/**we use alpha as we have problem with background (without alpha) in Electron version (older Chrome) **/
/* z-index region*/
/**different context*/
/**different context*/
math-type .limit-type {
  position: relative;
}
math-type .limit-type > add {
  opacity: 0.5;
  background-color: #f7f7f7;
  border: 1px solid #c3c2c2;
  color: gray;
  display: block;
  position: absolute;
  font-size: 0.6em;
  cursor: pointer;
  margin-left: -0.4em;
  z-index: 999;
  opacity: 0.7;
  top: -0.5em;
  left: 50%;
  top: -1.4em;
  left: 0.6em;
  align-items: flex-start;
}
math-type .limit-type > add:hover {
  border-color: gray;
  opacity: 1;
}
math-type .limit-type > add > i {
  display: block;
  height: 1em;
  padding: 0.1em 0.15em;
  padding-bottom: 0;
  width: 0.8em;
}
math-type .limit-type > .to,
math-type .limit-type > .from {
  float: left;
  clear: both;
}
math-type .limit-type > .to > line,
math-type .limit-type > .from > line,
math-type .limit-type > .to > editarea > line,
math-type .limit-type > .from > editarea > line {
  font-size: 0.7em;
}
math-type .limit-type > editarea-line,
math-type .limit-type > editarea-block {
  font-size: 0.7em;
}
math-type .limit-type > symbol {
  display: block;
  clear: both;
  pointer-events: none;
}
math-type .limit-type > symbol > span {
  white-space: nowrap;
  pointer-events: none;
}
math-type .limit-type > setting {
  background-color: #f7f7f7;
  border: 1px solid #c3c2c2;
  color: gray;
  opacity: 0.5;
  opacity: 1;
  position: absolute;
  left: 50%;
  top: -2em;
  font-size: 0.6em;
  margin-left: -0.6em;
  padding: 0 0.2em;
  cursor: pointer;
}
math-type .limit-type > setting:hover {
  border-color: gray;
  opacity: 1;
}
math-type .limit-type > setting:hover {
  border: 1px solid gray;
}
math-type .limit-type > setting > i {
  transform: rotate(-60deg);
}
math-type .limit-type.limit-kind > setting > i {
  transform: rotate(45deg);
}
math-type .limit-type.limit-kind > symbol {
  text-align: center;
}
math-type .limit-type.limit-kind > .from,
math-type .limit-type.limit-kind > .to {
  width: 100%;
  text-align: center;
}
math-type .limit-type.limit-kind > .from > line,
math-type .limit-type.limit-kind > .to > line {
  justify-content: center;
  text-align: center;
}
math-type .limit-type.limit-kind > empty.from {
  height: 0;
  margin-top: -0.75em;
}
math-type .limit-type.limit-kind > empty.from > editarea.selected > line,
math-type .limit-type.limit-kind > empty.from > editarea-block.selected,
math-type .limit-type.limit-kind > empty.from > editarea-line.selected {
  background-color: white;
  text-align: center;
}
math-type .limit-type.limit-kind > empty.to {
  height: 0;
  text-align: center;
}
math-type .limit-type.limit-kind > empty.to > editarea.selected > line,
math-type .limit-type.limit-kind > empty.to > editarea-block.selected,
math-type .limit-type.limit-kind > empty.to > editarea-line.selected {
  background-color: white;
  text-align: center;
}
math-type .integral-like-symbol.inline > symbol {
  font-size: 1em;
}
math-type .integral-like-symbol > symbol {
  font-size: 1.5em;
}
math-type .integral-like-symbol > symbol > span {
  line-height: 1.4em;
}

/**we use alpha as we have problem with background (without alpha) in Electron version (older Chrome) **/
/* z-index region*/
/**different context*/
/**different context*/
math-type .limit-type.lim-like-symbol {
  margin-left: 0.2em;
  margin-right: 0.2em;
}
math-type .limit-type.lim-like-symbol.close-left {
  margin-left: 0;
}
math-type .limit-type.lim-like-symbol.close-right {
  margin-right: 0;
}
math-type .limit-type.lim-like-symbol.limit-kind > empty.from > editarea {
  margin-top: -0.4em;
}
math-type .lim-like-symbol > add {
  left: 50%;
  top: -1em;
}
math-type .lim-like-symbol > symbol.inf {
  text-decoration: underline;
}
math-type .lim-like-symbol > symbol.sup {
  text-decoration: overline;
}
math-type .lim-like-symbol.non-limit-kind > editarea.from,
math-type .lim-like-symbol.non-limit-kind > editarea.to {
  margin-left: 1.47em;
}
math-type .lim-like-symbol.non-limit-kind > editarea.from.from-lim,
math-type .lim-like-symbol.non-limit-kind > editarea.to.to-lim {
  margin-left: 1.5435em;
}
math-type .lim-like-symbol.non-limit-kind > editarea.from.from-liminf,
math-type .lim-like-symbol.non-limit-kind > editarea.to.to-liminf {
  margin-left: 3.15em;
}
math-type .lim-like-symbol.non-limit-kind > editarea.from.from-limsup,
math-type .lim-like-symbol.non-limit-kind > editarea.to.to-limsup {
  margin-left: 3.528em;
}
math-type .lim-like-symbol.non-limit-kind > editarea.from.from-sup,
math-type .lim-like-symbol.non-limit-kind > editarea.to.to-sup {
  margin-left: 1.6905em;
}
math-type .lim-like-symbol.non-limit-kind > editarea.from.from-varlimsup,
math-type .lim-like-symbol.non-limit-kind > editarea.to.to-varlimsup {
  margin-left: 1.5435em;
}
math-type .lim-like-symbol.non-limit-kind > editarea-block.from,
math-type .lim-like-symbol.non-limit-kind > editarea-block.to {
  margin-left: 2.072em;
}
math-type .lim-like-symbol.non-limit-kind > editarea-block.from.from-lim,
math-type .lim-like-symbol.non-limit-kind > editarea-block.to.to-lim {
  margin-left: 2.1756em;
}
math-type .lim-like-symbol.non-limit-kind > editarea-block.from.from-liminf,
math-type .lim-like-symbol.non-limit-kind > editarea-block.to.to-liminf {
  margin-left: 4.44em;
}
math-type .lim-like-symbol.non-limit-kind > editarea-block.from.from-limsup,
math-type .lim-like-symbol.non-limit-kind > editarea-block.to.to-limsup {
  margin-left: 4.9728em;
}
math-type .lim-like-symbol.non-limit-kind > editarea-block.from.from-sup,
math-type .lim-like-symbol.non-limit-kind > editarea-block.to.to-sup {
  margin-left: 2.3828em;
}
math-type .lim-like-symbol.non-limit-kind > editarea-block.from.from-varlimsup,
math-type .lim-like-symbol.non-limit-kind > editarea-block.to.to-varlimsup {
  margin-left: 2.1756em;
}



/**we use alpha as we have problem with background (without alpha) in Electron version (older Chrome) **/
/* z-index region*/
/**different context*/
/**different context*/
math-type .limit-type.summation-like-symbol.limit-kind > empty.from {
  margin-top: -0.3em;
}
math-type .limit-type.summation-like-symbol.limit-kind > empty.from > editarea,
math-type .limit-type.summation-like-symbol.limit-kind > empty.from > editarea-block {
  margin-top: -0.2em;
}
math-type .summation-like-symbol.inline > add {
  top: -1.1em;
}
math-type .summation-like-symbol.inline > symbol {
  font-size: 1em;
}
math-type .summation-like-symbol.inline > symbol > span {
  vertical-align: 0.15em;
}
math-type .summation-like-symbol {
  padding-right: 0.15em;
}
math-type .summation-like-symbol > symbol {
  font-size: 1.5em;
}
math-type .summation-like-symbol > symbol > span {
  vertical-align: 0.1em;
  line-height: 1.4em;
}
math-type .summation-like-symbol > add {
  top: -1.5em;
}
math-type .summation-like-symbol > .custom-symbol {
  font-weight: bold;
}

hcomposed-symbol {
  display: flex;
  width: 100%;
  height: 100%;
  overflow: hidden;
}
hcomposed-symbol > start {
  display: block;
  float: left;
  overflow: hidden;
}
hcomposed-symbol > middle {
  display: block;
  flex-grow: 1;
  white-space: nowrap;
  position: relative;
  overflow: hidden;
}
hcomposed-symbol > middle > fixed {
  display: block;
  position: absolute;
  left: 0;
  top: 0;
}
hcomposed-symbol > middle > fixed > inside {
  display: inline-block;
  overflow: hidden;
}
hcomposed-symbol > end {
  display: block;
  overflow: hidden;
}

/**we use alpha as we have problem with background (without alpha) in Electron version (older Chrome) **/
/* z-index region*/
/**different context*/
/**different context*/
math-type .arrow-like-symbol {
  padding: 0 0.2em;
}
math-type .arrow-like-symbol > arrow-like-simple > add {
  opacity: 0.5;
  background-color: #f7f7f7;
  border: 1px solid #c3c2c2;
  color: gray;
  display: block;
  position: absolute;
  font-size: 0.6em;
  cursor: pointer;
  margin-left: -0.4em;
  z-index: 999;
  opacity: 0.7;
  top: -0.5em;
  left: 50%;
  left: 0.8em;
  top: -0.7em;
}
math-type .arrow-like-symbol > arrow-like-simple > add:hover {
  border-color: gray;
  opacity: 1;
}
math-type .arrow-like-symbol > arrow-like-simple > add > i {
  display: block;
  height: 1em;
  padding: 0.1em 0.15em;
  padding-bottom: 0;
  width: 0.8em;
}
math-type .arrow-like-symbol > middle {
  display: block;
  text-align: center;
  clear: both;
  width: 100%;
  position: relative;
}
math-type .arrow-like-symbol > middle > inside {
  display: inline-block;
  height: 0.55em;
  width: 100%;
}
math-type .arrow-like-symbol > middle > inside > hcomposed-symbol {
  position: absolute;
  top: 0.4em;
  left: 0;
}
math-type .arrow-like-symbol > editarea.small-margin {
  padding-left: 0.4em;
  padding-right: 0.4em;
}
math-type .arrow-like-symbol > editarea.large-padding {
  margin: 0 1.3em;
}
math-type .arrow-like-symbol > editarea > line {
  font-size: 0.7em;
}
math-type .arrow-like-symbol > .top {
  float: left;
  width: 100%;
  clear: both;
  margin-bottom: -0.5em;
  z-index: 1;
  position: relative;
}
math-type .arrow-like-symbol > .bottom {
  margin-top: -0.45em;
  float: left;
  width: 100%;
}

.over-icon {
  margin: auto;
  width: 12px;
  font-size: 13px;
}

/**we use alpha as we have problem with background (without alpha) in Electron version (older Chrome) **/
/* z-index region*/
/**different context*/
/**different context*/
math-type .over-arrow-symbol > arrow-symbol {
  display: block;
  margin-right: -0.05em;
  position: relative;
}
math-type .over-arrow-symbol > arrow-symbol > hcomposed-symbol {
  position: absolute;
}
math-type .over-arrow-symbol > arrow-symbol > arrow-wrapper {
  margin-right: -0.2em;
}
math-type .over-arrow-symbol > editarea {
  display: inline-flex;
  text-align: center;
}
math-type .over-arrow-symbol > editarea > area-container > line,
math-type .over-arrow-symbol > editarea > line {
  justify-content: center;
  text-align: center;
}
math-type .over-arrow-symbol > editarea-block {
  min-width: 0.5em;
  text-align: center;
  display: inline-block;
}

/**we use alpha as we have problem with background (without alpha) in Electron version (older Chrome) **/
/* z-index region*/
/**different context*/
/**different context*/
math-type .over-line-symbol {
  margin-left: 0.05em;
  margin-right: 0.05em;
}
math-type .over-line-symbol > editarea {
  display: inline-flex;
  min-width: 0.5em;
}
math-type .over-line-symbol > editarea-line {
  min-width: 0.5em;
  display: inline-block;
  text-align: center;
}
math-type .over-line-symbol > line-border {
  display: block;
  position: relative;
}
math-type .over-line-symbol > line-border > hcomposed-symbol {
  position: absolute;
}
math-type .over-line-symbol > line-border > svg {
  position: absolute;
  width: 100%;
  height: 100%;
}

brace-top-wrapper {
  display: flex;
  flex-direction: row;
  height: 100%;
  font-family: Asana-Math, Asana;
}
brace-top-wrapper > middle-wrapper {
  flex-grow: 1;
  position: relative;
  overflow: hidden;
}
brace-top-wrapper > middle-wrapper > fixed {
  display: block;
  position: absolute;
  left: 0;
  top: 0;
}
brace-top-wrapper > middle-wrapper > fixed > middle-inside {
  overflow: hidden;
}
brace-top-wrapper first,
brace-top-wrapper middle,
brace-top-wrapper last {
  overflow: hidden;
  position: relative;
}
brace-top-wrapper first {
  min-width: 0.7em;
  width: 0.7em;
}
brace-top-wrapper > middle {
  min-width: 0.6em;
  width: 0.6em;
}
brace-top-wrapper > last {
  min-width: 0.7em;
  width: 0.7em;
}
bracket-top-wrapper {
  display: flex;
  flex-direction: column;
  width: 100%;
  font-family: Asana-Math, Asana;
}
bracket-top-wrapper > first,
bracket-top-wrapper middle,
bracket-top-wrapper last {
  overflow: hidden;
  position: relative;
}
bracket-top-wrapper > first {
  height: 0.5em;
  min-height: 0.5em;
}
bracket-top-wrapper middle-wrapper {
  flex-grow: 1;
  position: relative;
  overflow: hidden;
}
bracket-top-wrapper middle-wrapper > fixed {
  overflow: hidden;
  position: absolute;
  left: 0;
  top: 0;
}
bracket-top-wrapper middle-wrapper > fixed > middle {
  display: block;
  overflow: hidden;
}
bracket-top-wrapper > last {
  height: 0.65em;
  min-height: 0.65em;
}
parenthesis-top-wrapper {
  display: flex;
  flex-direction: column;
  width: 100%;
  font-family: Asana-Math, Asana;
}
parenthesis-top-wrapper > first,
parenthesis-top-wrapper middle,
parenthesis-top-wrapper last {
  overflow: hidden;
  position: relative;
  height: 1em;
  min-height: 1em;
}
parenthesis-top-wrapper > first {
  min-height: 0.9em;
  height: 0.9em;
}
parenthesis-top-wrapper middle-wrapper {
  flex-grow: 1;
  position: relative;
  overflow: hidden;
}
parenthesis-top-wrapper middle-wrapper > fixed {
  position: absolute;
  top: 0;
  left: 0;
}
parenthesis-top-wrapper middle-wrapper > fixed > middle {
  display: block;
  overflow: hidden;
}
parenthesis-top-wrapper > last {
  min-height: 1em;
  height: 1em;
}

/**we use alpha as we have problem with background (without alpha) in Electron version (older Chrome) **/
/* z-index region*/
/**different context*/
/**different context*/
math-type .over-brace-symbol {
  position: relative;
}
math-type .over-brace-symbol > add {
  opacity: 0.5;
  background-color: #f7f7f7;
  border: 1px solid #c3c2c2;
  color: gray;
  display: block;
  position: absolute;
  font-size: 0.6em;
  cursor: pointer;
  margin-left: -0.4em;
  z-index: 999;
  opacity: 0.7;
  top: -0.5em;
  left: 50%;
  top: -1.5em;
  margin-left: -0.6em;
}
math-type .over-brace-symbol > add:hover {
  border-color: gray;
  opacity: 1;
}
math-type .over-brace-symbol > add > i {
  display: block;
  height: 1em;
  padding: 0.1em 0.15em;
  padding-bottom: 0;
  width: 0.8em;
}
math-type .over-brace-symbol > top-brace {
  pointer-events: none;
  display: block;
  min-width: 1.1em;
  position: relative;
  clear: both;
  margin-bottom: -0.1em;
  font-style: normal;
  font-weight: normal;
}
math-type .over-brace-symbol > top-brace > brace-top-wrapper {
  position: absolute;
  top: 0;
  left: 0;
  left: 50%;
  transform: translate(-50%, 0);
}
math-type .over-brace-symbol > editarea {
  display: inline-flex;
  width: 100%;
  align-self: center;
  clear: both;
}
math-type .over-brace-symbol > editarea.overValue {
  font-size: 0.7em;
  float: left;
  width: 100%;
  margin-bottom: 0.1em;
}

.icon-hat {
  margin: auto;
  width: 12px;
  font-size: 12px;
}
.icon-hat .square {
  margin-top: -3px;
}

.under-arc-symbol {
  display: inline-block;
}
.under-arc-symbol > editarea {
  display: inline-flex;
}
.under-arc-symbol > symbol {
  display: block;
  width: 100%;
  position: relative;
}
.under-arc-symbol > symbol > svg {
  position: absolute;
  left: 0;
  top: 0;
  display: block;
  width: 100%;
  height: 100%;
}

/**we use alpha as we have problem with background (without alpha) in Electron version (older Chrome) **/
/* z-index region*/
/**different context*/
/**different context*/
math-type .under-line-symbol > editarea {
  display: inline-flex;
}
math-type .under-line-symbol > line-border {
  display: block;
  position: relative;
  float: left;
  width: 100%;
}
math-type .under-line-symbol > line-border > svg {
  position: absolute;
  width: 100%;
  height: 100%;
}

/**we use alpha as we have problem with background (without alpha) in Electron version (older Chrome) **/
/* z-index region*/
/**different context*/
/**different context*/
math-type compositeblock.under-brace-symbol {
  display: inline-flex;
  flex-flow: column;
  position: relative;
}
math-type compositeblock.under-brace-symbol > add {
  opacity: 0.5;
  background-color: #f7f7f7;
  border: 1px solid #c3c2c2;
  color: gray;
  display: block;
  position: absolute;
  font-size: 0.6em;
  cursor: pointer;
  margin-left: -0.4em;
  z-index: 999;
  opacity: 0.7;
  top: -0.5em;
  left: 50%;
  top: 3em;
}
math-type compositeblock.under-brace-symbol > add:hover {
  border-color: gray;
  opacity: 1;
}
math-type compositeblock.under-brace-symbol > add > i {
  display: block;
  height: 1em;
  padding: 0.1em 0.15em;
  padding-bottom: 0;
  width: 0.8em;
}
math-type compositeblock.under-brace-symbol > bottom-brace {
  pointer-events: none;
  display: block;
  position: relative;
  min-width: 1.3em;
  font-style: normal;
  font-weight: normal;
}
math-type compositeblock.under-brace-symbol > bottom-brace > brace-top-wrapper {
  position: absolute;
  top: 0;
  left: 0;
  left: 50%;
  transform: translate(-50%, 0);
}
math-type compositeblock.under-brace-symbol > editarea {
  margin-left: 0.15em;
  margin-right: 0.15em;
  align-self: center;
}
math-type compositeblock.under-brace-symbol > editarea.underValue {
  font-size: 0.7em;
}
.under-brace-icon {
  width: 12px;
  margin: auto;
  font-size: 12px;
}
.under-brace-icon .brace-wrapper {
  margin-top: -14px;
}


math-type .operator-name > editarea {
  margin-left: 0.2em;
  margin-right: 0.2em;
  display: inline-flex;
}
math-type .operator-name > editarea.close-left {
  margin-left: 0;
}
math-type .operator-name > editarea.close-right {
  margin-right: 0;
}

.math-group > editarea {
  float: left;
}
.group-icon .rectangle {
  width: 23px;
  height: 12px;
  border-style: solid;
  border-width: 1px;
  text-align: center;
  border-color: gray;
  font-family: fantasy;
  color: black;
  padding-top: 1px;
  font-size: 9px;
  line-height: 14px;
  vertical-align: middle;
  margin: auto;
}

/**we use alpha as we have problem with background (without alpha) in Electron version (older Chrome) **/
/* z-index region*/
/**different context*/
/**different context*/
math-type compositeblock.over-symbol {
  position: relative;
}
math-type compositeblock.over-symbol > symbol {
  font-family: Asana-Math, Asana, Arial;
  height: 8em;
  display: block;
  text-align: center;
  position: relative;
}
math-type compositeblock.over-symbol > symbol > inner {
  display: block;
  position: absolute;
  text-align: center;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
}
math-type compositeblock.over-symbol > symbol.dot > inner.left-sign,
math-type compositeblock.over-symbol > symbol.ring > inner.left-sign {
  transform: translate(-0.07em, 0);
}
math-type compositeblock.over-symbol > symbol.dot > inner.right-sign,
math-type compositeblock.over-symbol > symbol.ring > inner.right-sign {
  transform: translate(0.2em, 0);
}
math-type compositeblock.over-symbol > symbol.dot > inner,
math-type compositeblock.over-symbol > symbol.ring > inner {
  transform: translate(0.05em, 0);
}
math-type compositeblock.over-symbol > symbol.small-hat > inner.left-sign,
math-type compositeblock.over-symbol > symbol.small-tilde > inner.left-sign {
  transform: translate(-0.04em, 0);
}
math-type compositeblock.over-symbol > symbol.small-hat > inner.right-sign,
math-type compositeblock.over-symbol > symbol.small-tilde > inner.right-sign {
  transform: translate(0.15em, 0);
}
math-type compositeblock.over-symbol > symbol.small-hat > inner,
math-type compositeblock.over-symbol > symbol.small-tilde > inner {
  transform: translate(0.05em, 0);
}
math-type compositeblock.over-symbol > symbol.acute > inner.left-sign {
  transform: translate(-0.04em, 0);
}
math-type compositeblock.over-symbol > symbol.acute > inner.right-sign {
  transform: translate(0.25em, 0);
}
math-type compositeblock.over-symbol > symbol.acute > inner {
  transform: translate(0.1em, 0);
}
math-type compositeblock.over-symbol > symbol.grave,
math-type compositeblock.over-symbol > symbol.breve,
math-type compositeblock.over-symbol > symbol.acute {
  font-family: 'Times New Roman', Times, serif;
}
math-type compositeblock.over-symbol > symbol.grave > inner.left-sign,
math-type compositeblock.over-symbol > symbol.breve > inner.left-sign,
math-type compositeblock.over-symbol > symbol.check > inner.left-sign {
  transform: translate(-0.07em, 0);
}
math-type compositeblock.over-symbol > symbol.grave > inner.right-sign,
math-type compositeblock.over-symbol > symbol.breve > inner.right-sign,
math-type compositeblock.over-symbol > symbol.check > inner.right-sign {
  transform: translate(0.17em, 0);
}
math-type compositeblock.over-symbol > symbol.ddddot {
  min-width: 0.9em;
}
math-type compositeblock.over-symbol > symbol.dddot {
  min-width: 0.7em;
}

.math-xx > editarea {
  float: left;
}

math-type .big-delimiter-symbol {
  display: inline-flex;
  align-items: center;
  position: relative;
  margin: 0.1em 0;
}
math-type .big-delimiter-symbol big-delimiter.big-open {
  margin-left: 0.09em;
}
math-type .big-delimiter-symbol big-delimiter.big-close {
  margin-right: 0.07em;
}
math-type .big-delimiter-symbol > base-line-indicator {
  height: inherit;
}
math-type .big-delimiter-symbol > big-delimiter > svg {
  height: 100%;
  width: 100%;
}
math-type .big-delimiter-symbol > big-delimiter > bulb {
  left: -10px;
}
math-type .big-delimiter-symbol > big-delimiter > setting {
  width: 158px;
  display: flex;
  position: absolute;
  left: 0;
  top: -40px;
}
math-type .big-delimiter-symbol > big-delimiter > setting > .select-box-container {
  margin-right: 4px;
}
math-type .big-delimiter-symbol > big-delimiter > setting > .select-box-container:last-child {
  margin-right: 0px;
}

select-buttons {
  font-size: 13px;
  color: gray;
  display: block;
}
select-buttons > sb-item {
  display: inline-block;
  padding: 2px 2px;
  cursor: pointer;
  border: 1px solid transparent;
  /*box-sizing: border-box;*/
}
select-buttons > sb-item.selected {
  background-color: white;
  border: 1px solid lightgray;
}
select-buttons > sb-item:hover {
  border: 1px solid lightgray;
}
select-buttons > sb-item.disabled {
  opacity: 0.3;
  cursor: default;
  border: 1px solid transparent;
}
select-buttons > sb-item.disabled:hover {
  background-color: inherit;
  border: 1px solid transparent;
}

tabs-container tab-item {
  color: gray;
}
tabs-container tab-item:hover {
  color: black;
}

expandable-component.buton-action {
  cursor: pointer;
  color: gray;
}
expandable-component.buton-action:hover,
expandable-component.buton-action.selected {
  color: black;
}
expandable-component.buton-action:hover label-display,
expandable-component.buton-action.selected label-display {
  border: 1px solid #e2e0e0;
}
expandable-component.buton-action label-display {
  font-size: 12px;
  padding-top: 5px;
  display: flex;
  border: 1px solid transparent;
  padding-left: 2px;
  padding-right: 2px;
  margin-top: 0px;
  padding-bottom: 4px;
  cursor: pointer;
}
expandable-component.buton-action label-display > i {
  padding-left: 5px;
  padding-top: 1px;
}
expandable-component.buton-action label-item-container > label-item:hover {
  background-color: #bfe4bd;
}
expandable-component.buton-action label-item-container > label-item.ignore-select {
  background-color: inherit;
  cursor: default;
}
expandable-component.buton-action.button-style label-display {
  background: white;
  border: 1px solid lightgray;
}
expandable-component.buton-action.button-style:hover,
expandable-component.buton-action.button-style.selected {
  color: gray;
}
expandable-component.buton-action.button-style:hover label-display,
expandable-component.buton-action.button-style.selected label-display {
  background: #f7f6f6;
}

g.group-box-move {
  opacity: 0.2;
}
g.group-box-move:hover {
  opacity: 0.8;
}




.math-diagram .intersections-group {
  stroke-width: 2px;
  stroke: black;
  fill: transparent;
  cursor: move;
}

/**we use alpha as we have problem with background (without alpha) in Electron version (older Chrome) **/
/* z-index region*/
/**different context*/
/**different context*/
math-type compositeblock.math-diagram > math-diagram {
  background: white;
}
math-type compositeblock.math-diagram {
  cursor: default;
  width: 100%;
  /** display block as if inline block, it will be disapear in some cases*/
  display: block;
}
math-type compositeblock.math-diagram .connection-point {
  cursor: crosshair;
}
math-type compositeblock.math-diagram .connection-point g {
  fill-opacity: 0.6;
}
math-type compositeblock.math-diagram .connection-point:hover g {
  fill-opacity: 1;
}
math-type compositeblock.math-diagram .text-diagram-editor editarea.text-mode.non-wrap > line.text-mode {
  font-size: unset;
}
math-type compositeblock.math-diagram .text-diagram-editor editarea.text-mode.non-wrap > line.text-mode > block {
  white-space: pre;
}
math-type compositeblock.math-diagram .text-diagram-editor editarea.text-mode.non-wrap > line.text-mode > blocks > block {
  white-space: pre;
}
math-type compositeblock.math-diagram > math-diagram {
  border: 1px solid transparent;
}
math-type compositeblock.math-diagram > math-diagram > clip-region > zoom-region {
  display: block;
  width: 100%;
  height: 100%;
}
math-type compositeblock.math-diagram > math-diagram > clip-region > zoom-region > svg {
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
}
math-type compositeblock.math-diagram .add-label {
  fill: gray;
}
math-type compositeblock.math-diagram .add-label:hover {
  fill: black;
}
math-type compositeblock.math-diagram .diagram-editor {
  margin: 0 2px;
}
math-type compositeblock.math-diagram .control-point-guide {
  stroke: lightgray;
  stroke-width: 0.5px;
  pointer-events: none;
}
math-type compositeblock.math-diagram .connection-group {
  stroke: black;
  fill: none;
}
math-type compositeblock.math-diagram .arrow-line {
  cursor: move;
}
math-type compositeblock.math-diagram .mobile-tablet .shape .transparent,
math-type compositeblock.math-diagram .mobile-tablet .composite-shape .transparent {
  stroke-width: 10px;
}
math-type compositeblock.math-diagram .shape,
math-type compositeblock.math-diagram .composite-shape {
  stroke-width: 1px;
  fill: none;
  cursor: move;
}
math-type compositeblock.math-diagram .shape .transparent,
math-type compositeblock.math-diagram .composite-shape .transparent {
  pointer-events: visiblePainted;
  stroke-width: 6px;
  stroke: transparent;
  stroke-dasharray: none;
  fill: none;
}
math-type compositeblock.math-diagram .mobile-tablet .connection.transparent,
math-type compositeblock.math-diagram .mobile-tablet .connection.transparent > line,
math-type compositeblock.math-diagram .mobile-tablet .connection.transparent > path {
  stroke-width: 10px;
}
math-type compositeblock.math-diagram .connection {
  stroke-width: 1px;
  fill: none;
  cursor: move;
}
math-type compositeblock.math-diagram .connection.transparent,
math-type compositeblock.math-diagram .connection.transparent > line,
math-type compositeblock.math-diagram .connection.transparent > path {
  pointer-events: visiblePainted;
  stroke-width: 6px;
  stroke: transparent;
  stroke-dasharray: none;
  fill: none;
}
math-type compositeblock.math-diagram .frame {
  stroke-width: 1px;
  fill: transparent;
}
math-type math-diagram {
  display: block;
  position: relative;
  width: 100%;
  height: 300px;
}
math-type math-diagram position-container {
  position: absolute;
  width: 1px;
  height: 1px;
  display: block;
}
math-type math-diagram dg-editor-container {
  position: absolute;
  min-width: 0.85em;
  border-collapse: border-box;
}
math-type math-diagram coverlayer {
  position: absolute;
  background: transparent;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: 2;
  cursor: move;
}
math-type math-diagram connection-point {
  position: absolute;
  display: block;
  height: 6px;
  width: 6px;
  background: lightgray;
  border: 1px solid gray;
  bottom: -10px;
  left: 50%;
  margin-left: -3px;
  cursor: e-resize;
}
math-type .diagram-caption > line.text-mode:first-child {
  display: inline;
}
math-type .diagram-caption > line.text-mode:first-child > blocks {
  display: inline;
}


.plot-input-style-settings {
  opacity: 0.5;
}
.plot-input-style-settings:hover {
  opacity: 1;
}

.psa-cn .ps-hint {
  opacity: 0;
  transition: opacity 0.3s linear;
}
.psa-cn:hover .ps-hint {
  opacity: 0.6;
}

.role-toolbar-wrapper.dg-full-view tool-bar too-bar-container {
  justify-content: start;
  width: auto;
  min-width: 0;
}
.role-toolbar-wrapper.dg-full-view diagram-settings {
  width: auto;
}

.dg-items-bar-container item {
  display: inline-block;
  padding: 3px;
  fill: gray;
  stroke: gray;
}
.dg-items-bar-container item,
.dg-items-bar-container item-option {
  border: 1px transparent solid;
}
.dg-items-bar-container item:hover,
.dg-items-bar-container item-option:hover {
  border: 1px #c4c1c1 solid;
  background: white;
}

/**we use alpha as we have problem with background (without alpha) in Electron version (older Chrome) **/
/* z-index region*/
/**different context*/
/**different context*/
math-type compositeblock.theorem {
  display: block;
}
math-type compositeblock.theorem.selected {
  outline: 1px solid rgba(93, 92, 92, 0.3);
}
math-type theorem-name {
  min-width: 20px;
  padding-right: 0.5em;
  display: inline;
  font-weight: bold;
}
math-type theorem-name > line.text-mode:first-child {
  display: inline;
}
math-type theorem-counting {
  font-weight: bold;
  padding-right: 0.5em;
}
math-type editarea.text-mode.edit-theorem-content {
  min-width: 100px;
  display: inline;
  font-style: italic;
}
math-type editarea.text-mode.edit-theorem-content > line.text-mode:first-child {
  display: inline;
}
math-type editarea.text-mode.edit-theorem-content > line.text-mode:first-child > blocks {
  display: inline;
}
math-type editarea.text-mode.edit-theorem-content > line.text-mode > block {
  font-style: italic;
}
math-type editarea.text-mode.edit-theorem-content > line.text-mode > blocks > block {
  font-style: italic;
}
math-type editarea.text-mode.edit-theorem-content.normal > line.text-mode > block {
  font-style: normal;
}
math-type editarea.text-mode.edit-theorem-content.normal > line.text-mode > blocks > block {
  font-style: normal;
}
math-type editarea.text-mode.edit-theorem-content .qed-symbol {
  line-height: 1em;
}
.deletable {
  cursor: pointer;
}
.deletable:hover {
  color: red;
}

.regular-checkbox:hover {
  background-color: #f3f2f2;
}

@media print {
  code[class*="language-"],
  pre[class*="language-"] {
    text-shadow: none !important;
  }
}
math-type .code-section prefix.code-line-number {
  color: #a9a7a7;
  width: 2.5em;
  display: inline-block;
  flex-shrink: 0;
}
math-type .code-section prefix.code-line-number.prefix-l10 {
  width: 1.5em;
}
math-type .code-section prefix.code-line-number.prefix-l100 {
  width: 2em;
}
math-type .code-section .code-line-blocks-container {
  white-space: pre-wrap;
  white-space: break-spaces;
}
math-type .code-section .code-line-blocks-container block.token {
  white-space: pre-wrap;
  white-space: break-spaces;
}
math-type .code-section line.text-mode.code-section-line {
  display: flex;
  flex-direction: row;
  line-height: 1.5;
}

/**
 * prism.js default theme for JavaScript, CSS and HTML
 * Based on dabblet (http://dabblet.com)
 * @author Lea Verou
 */
.code-section.theme-default editarea {
  color: black;
}
.code-section.theme-default .token.comment,
.code-section.theme-default .token.prolog,
.code-section.theme-default .token.doctype,
.code-section.theme-default .token.cdata {
  color: slategray;
}
.code-section.theme-default .token.punctuation {
  color: #999;
}
.code-section.theme-default .namespace {
  opacity: 0.7;
}
.code-section.theme-default .token.property,
.code-section.theme-default .token.tag,
.code-section.theme-default .token.boolean,
.code-section.theme-default .token.number,
.code-section.theme-default .token.constant,
.code-section.theme-default .token.symbol,
.code-section.theme-default .token.deleted {
  color: #905;
}
.code-section.theme-default .token.selector,
.code-section.theme-default .token.attr-name,
.code-section.theme-default .token.string,
.code-section.theme-default .token.char,
.code-section.theme-default .token.builtin,
.code-section.theme-default .token.inserted {
  color: #690;
}
.code-section.theme-default .token.operator,
.code-section.theme-default .token.entity,
.code-section.theme-default .token.url,
.code-section.theme-default .language-css .token.string,
.code-section.theme-default .style .token.string {
  color: #9a6e3a;
}
.code-section.theme-default .token.atrule,
.code-section.theme-default .token.attr-value,
.code-section.theme-default .token.keyword {
  color: #07a;
}
.code-section.theme-default .token.function,
.code-section.theme-default .token.class-name {
  color: #DD4A68;
}
.code-section.theme-default .token.regex,
.code-section.theme-default .token.important,
.code-section.theme-default .token.important1,
.code-section.theme-default .token.variable {
  color: #e90;
}
.code-section.theme-default .token.important,
.code-section.theme-default .token.bold,
.code-section.theme-default .token.bold1 {
  font-weight: bold;
}
.code-section.theme-default .token.italic,
.code-section.theme-default .token.italic1 {
  font-style: italic;
}
.code-section.theme-default .token.entity {
  cursor: help;
}

/**
 * prism.js default theme for JavaScript, CSS and HTML
 * Based on dabblet (http://dabblet.com)
 * @author Lea Verou
 */
.code-section.theme-tomorrow-night {
  /**
 * prism.js tomorrow night eighties for JavaScript, CoffeeScript, CSS and HTML
 * Based on https://github.com/chriskempson/tomorrow-theme
 * @author Rose Pritchard
 */
}
.code-section.theme-tomorrow-night editarea {
  caret-color: #ccc;
}
.code-section.theme-tomorrow-night editarea {
  color: #ccc;
}
.code-section.theme-tomorrow-night .token.comment,
.code-section.theme-tomorrow-night .token.block-comment,
.code-section.theme-tomorrow-night .token.prolog,
.code-section.theme-tomorrow-night .token.doctype,
.code-section.theme-tomorrow-night .token.cdata {
  color: #999;
}
.code-section.theme-tomorrow-night .token.punctuation {
  color: #ccc;
}
.code-section.theme-tomorrow-night .token.tag,
.code-section.theme-tomorrow-night .token.attr-name,
.code-section.theme-tomorrow-night .token.namespace,
.code-section.theme-tomorrow-night .token.deleted {
  color: #e2777a;
}
.code-section.theme-tomorrow-night .token.function-name {
  color: #6196cc;
}
.code-section.theme-tomorrow-night .token.boolean,
.code-section.theme-tomorrow-night .token.number,
.code-section.theme-tomorrow-night .token.function {
  color: #f08d49;
}
.code-section.theme-tomorrow-night .token.property,
.code-section.theme-tomorrow-night .token.class-name,
.code-section.theme-tomorrow-night .token.constant,
.code-section.theme-tomorrow-night .token.symbol {
  color: #f8c555;
}
.code-section.theme-tomorrow-night .token.selector,
.code-section.theme-tomorrow-night .token.important,
.code-section.theme-tomorrow-night .token.important1,
.code-section.theme-tomorrow-night .token.atrule,
.code-section.theme-tomorrow-night .token.keyword,
.code-section.theme-tomorrow-night .token.builtin {
  color: #cc99cd;
}
.code-section.theme-tomorrow-night .token.string,
.code-section.theme-tomorrow-night .token.char,
.code-section.theme-tomorrow-night .token.attr-value,
.code-section.theme-tomorrow-night .token.regex,
.code-section.theme-tomorrow-night .token.variable {
  color: #7ec699;
}
.code-section.theme-tomorrow-night .token.operator,
.code-section.theme-tomorrow-night .token.entity,
.code-section.theme-tomorrow-night .token.url {
  color: #67cdcc;
}
.code-section.theme-tomorrow-night .token.important,
.code-section.theme-tomorrow-night .token.bold,
.code-section.theme-tomorrow-night .token.bold1 {
  font-weight: bold;
}
.code-section.theme-tomorrow-night .token.italic,
.code-section.theme-tomorrow-night .token.italic1 {
  font-style: italic;
}
.code-section.theme-tomorrow-night .token.entity {
  cursor: help;
}
.code-section.theme-tomorrow-night .token.inserted {
  color: green;
}

.lang-name:hover {
  background: #f7f7f7;
}
.lang-name.selected {
  background: #e1e8f5;
}
.custom-lange-area input::placeholder,
.custom-lange-area textarea::placeholder {
  color: lightgray;
}

.page-print-item {
  position: relative;
}
.page-print-item:hover .page-print-item-hover {
  display: block;
}
.page-print-item-hover {
  display: none;
  position: absolute;
  top: 100%;
  left: 50%;
  transform: translateX(-50%);
  margin-top: 10px;
  background: #f7f6f6;
  z-index: 10;
  padding: 5px;
  font-size: 0.8em;
  white-space: nowrap;
  color: gray;
  border: 1px solid lightgray;
}

.settings-show-hide {
  background: rgba(255, 255, 255, 0.61);
}
.settings-show-hide:hover {
  background: white;
}
.group-symbol-collapsed {
  display: block;
  border: 1px dotted lightgray;
  padding-top: 0.1em;
  padding-bottom: 0.1em;
}
.role-math-mode-group.math-mode-group-expanded .settings-show-hide,
.role-text-mode-group-inline.text-mode-group-inline-expanded .settings-show-hide {
  display: none;
}
.role-math-mode-group.math-mode-group-expanded:hover,
.role-text-mode-group-inline.text-mode-group-inline-expanded:hover {
  outline: 1px solid lightgray;
}
.role-math-mode-group.math-mode-group-expanded:hover .settings-show-hide,
.role-text-mode-group-inline.text-mode-group-inline-expanded:hover .settings-show-hide {
  display: flex;
}

math-type .symbol-container,
.auto-complete-external-area .symbol-container {
  display: flex;
  flex-direction: row;
  min-height: 25px;
  padding-left: 4px;
  padding-right: 12px;
  align-items: center;
  cursor: pointer;
}
math-type .symbol-container.selected,
.auto-complete-external-area .symbol-container.selected {
  background-color: #bfe4bd;
}
math-type .symbol-friendly-name,
.auto-complete-external-area .symbol-friendly-name {
  flex-grow: 1;
  font-family: Asana;
  /*padding-top: 6px;*/
}
math-type .symbol-icon,
.auto-complete-external-area .symbol-icon {
  /*padding-top: 6px;*/
  margin-right: 15px;
  min-width: 20px;
  text-align: center;
}
math-type .short-cut,
.auto-complete-external-area .short-cut {
  text-align: center;
  color: gray;
  /*vertical-align: middle;*/
  /*line-height: 20px;*/
  margin: 0 2px 0 2px;
  font-size: 12px;
  display: flex;
  align-items: center;
}
math-type .short-cut span,
.auto-complete-external-area .short-cut span {
  font-size: 10px;
}
math-type .hidden,
.auto-complete-external-area .hidden {
  display: none;
}

math-type compositeblock.text-super-script-symbol,
math-type compositeblock.text-sub-script-symbol {
  display: inline;
}
math-type compositeblock.text-super-script-symbol > editarea.text-mode,
math-type compositeblock.text-sub-script-symbol > editarea.text-mode {
  display: inline;
}
math-type compositeblock.text-super-script-symbol > editarea.text-mode > line.text-mode,
math-type compositeblock.text-sub-script-symbol > editarea.text-mode > line.text-mode {
  display: inline;
}
math-type compositeblock.text-super-script-symbol > editarea.text-mode > line.text-mode > blocks,
math-type compositeblock.text-sub-script-symbol > editarea.text-mode > line.text-mode > blocks {
  display: inline;
}
math-type .text-super-script-symbol {
  vertical-align: super;
}
math-type .text-sub-script-symbol {
  vertical-align: sub;
}

/**we use alpha as we have problem with background (without alpha) in Electron version (older Chrome) **/
/* z-index region*/
/**different context*/
/**different context*/
math-type editarea.no-area-container,
math-type editarea.text-mode,
math-type area-container,
math-type .print-as-area-container {
  display: flex;
  flex-direction: column;
  align-items: stretch;
}
math-type editarea.no-area-container > line,
math-type editarea.text-mode > line,
math-type area-container > line,
math-type .print-as-area-container > line {
  min-width: 0.3em;
  position: relative;
  display: block;
  width: 100%;
  align-items: baseline;
  flex-wrap: wrap;
  box-sizing: border-box;
  flex-wrap: nowrap;
  line-height: 1.2;
  white-space: nowrap;
}
math-type editarea.no-area-container > line block,
math-type editarea.text-mode > line block,
math-type area-container > line block,
math-type .print-as-area-container > line block {
  white-space: pre;
}
math-type editarea.no-area-container > line.single-block > blocks > baselineblock,
math-type editarea.text-mode > line.single-block > blocks > baselineblock,
math-type area-container > line.single-block > blocks > baselineblock,
math-type .print-as-area-container > line.single-block > blocks > baselineblock {
  display: none;
}
math-type editarea.no-area-container > line > blocks,
math-type editarea.text-mode > line > blocks,
math-type area-container > line > blocks,
math-type .print-as-area-container > line > blocks {
  /**
            Different between inline and inline-block is about whether Section Text will be wrap in next wrapped line 
            */
  display: inline-block;
  text-align: left;
}
math-type editarea.no-area-container > line.root,
math-type editarea.text-mode > line.root,
math-type area-container > line.root,
math-type .print-as-area-container > line.root,
math-type editarea.no-area-container > line.text-mode,
math-type editarea.text-mode > line.text-mode,
math-type area-container > line.text-mode,
math-type .print-as-area-container > line.text-mode {
  display: block;
  font-style: normal;
}
math-type editarea.no-area-container > line.root > prefix,
math-type editarea.text-mode > line.root > prefix,
math-type area-container > line.root > prefix,
math-type .print-as-area-container > line.root > prefix,
math-type editarea.no-area-container > line.text-mode > prefix,
math-type editarea.text-mode > line.text-mode > prefix,
math-type area-container > line.text-mode > prefix,
math-type .print-as-area-container > line.text-mode > prefix {
  white-space: pre;
  display: inline-block;
  cursor: default;
  text-align: left;
  vertical-align: top;
}
math-type editarea.no-area-container > line.root > blocks,
math-type editarea.text-mode > line.root > blocks,
math-type area-container > line.root > blocks,
math-type .print-as-area-container > line.root > blocks,
math-type editarea.no-area-container > line.text-mode > blocks,
math-type editarea.text-mode > line.text-mode > blocks,
math-type area-container > line.text-mode > blocks,
math-type .print-as-area-container > line.text-mode > blocks {
  /** should not wrap here*/
  align-items: baseline;
  box-sizing: border-box;
}
math-type editarea.no-area-container > line.root > blocks > block,
math-type editarea.text-mode > line.root > blocks > block,
math-type area-container > line.root > blocks > block,
math-type .print-as-area-container > line.root > blocks > block,
math-type editarea.no-area-container > line.text-mode > blocks > block,
math-type editarea.text-mode > line.text-mode > blocks > block,
math-type area-container > line.text-mode > blocks > block,
math-type .print-as-area-container > line.text-mode > blocks > block {
  white-space: pre-wrap;
  white-space: break-spaces;
}
math-type editarea.no-area-container > line.root.full-line-block-inside > prefix,
math-type editarea.text-mode > line.root.full-line-block-inside > prefix,
math-type area-container > line.root.full-line-block-inside > prefix,
math-type .print-as-area-container > line.root.full-line-block-inside > prefix,
math-type editarea.no-area-container > line.text-mode.full-line-block-inside > prefix,
math-type editarea.text-mode > line.text-mode.full-line-block-inside > prefix,
math-type area-container > line.text-mode.full-line-block-inside > prefix,
math-type .print-as-area-container > line.text-mode.full-line-block-inside > prefix {
  float: left;
}
math-type editarea.no-area-container > line.root.full-line-block-inside > blocks,
math-type editarea.text-mode > line.root.full-line-block-inside > blocks,
math-type area-container > line.root.full-line-block-inside > blocks,
math-type .print-as-area-container > line.root.full-line-block-inside > blocks,
math-type editarea.no-area-container > line.text-mode.full-line-block-inside > blocks,
math-type editarea.text-mode > line.text-mode.full-line-block-inside > blocks,
math-type area-container > line.text-mode.full-line-block-inside > blocks,
math-type .print-as-area-container > line.text-mode.full-line-block-inside > blocks {
  display: block;
  width: 100%;
}
math-type editarea.no-area-container > line.root.full-line-block-inside > blocks > baselineblock,
math-type editarea.text-mode > line.root.full-line-block-inside > blocks > baselineblock,
math-type area-container > line.root.full-line-block-inside > blocks > baselineblock,
math-type .print-as-area-container > line.root.full-line-block-inside > blocks > baselineblock,
math-type editarea.no-area-container > line.text-mode.full-line-block-inside > blocks > baselineblock,
math-type editarea.text-mode > line.text-mode.full-line-block-inside > blocks > baselineblock,
math-type area-container > line.text-mode.full-line-block-inside > blocks > baselineblock,
math-type .print-as-area-container > line.text-mode.full-line-block-inside > blocks > baselineblock {
  display: inline-block;
  float: left;
}
math-type editarea.no-area-container > line.root.section,
math-type editarea.text-mode > line.root.section,
math-type area-container > line.root.section,
math-type .print-as-area-container > line.root.section,
math-type editarea.no-area-container > line.text-mode.section,
math-type editarea.text-mode > line.text-mode.section,
math-type area-container > line.text-mode.section,
math-type .print-as-area-container > line.text-mode.section {
  text-align: left;
}
math-type editarea.no-area-container > line.root.section > blocks,
math-type editarea.text-mode > line.root.section > blocks,
math-type area-container > line.root.section > blocks,
math-type .print-as-area-container > line.root.section > blocks,
math-type editarea.no-area-container > line.text-mode.section > blocks,
math-type editarea.text-mode > line.text-mode.section > blocks,
math-type area-container > line.text-mode.section > blocks,
math-type .print-as-area-container > line.text-mode.section > blocks {
  /**
                    Different between inline and inline-block is about whether Section Text will be wrap in next wrapped line 
                    */
  display: inline;
}
math-type editarea.no-area-container > line.root.section.has-rtl,
math-type editarea.text-mode > line.root.section.has-rtl,
math-type area-container > line.root.section.has-rtl,
math-type .print-as-area-container > line.root.section.has-rtl,
math-type editarea.no-area-container > line.text-mode.section.has-rtl,
math-type editarea.text-mode > line.text-mode.section.has-rtl,
math-type area-container > line.text-mode.section.has-rtl,
math-type .print-as-area-container > line.text-mode.section.has-rtl {
  direction: rtl;
}
math-type editarea.no-area-container > line.root.section.has-rtl > prefix,
math-type editarea.text-mode > line.root.section.has-rtl > prefix,
math-type area-container > line.root.section.has-rtl > prefix,
math-type .print-as-area-container > line.root.section.has-rtl > prefix,
math-type editarea.no-area-container > line.text-mode.section.has-rtl > prefix,
math-type editarea.text-mode > line.text-mode.section.has-rtl > prefix,
math-type area-container > line.text-mode.section.has-rtl > prefix,
math-type .print-as-area-container > line.text-mode.section.has-rtl > prefix {
  direction: rtl;
  order: 1;
}
math-type editarea.no-area-container > line.root.theorem,
math-type editarea.text-mode > line.root.theorem,
math-type area-container > line.root.theorem,
math-type .print-as-area-container > line.root.theorem,
math-type editarea.no-area-container > line.text-mode.theorem,
math-type editarea.text-mode > line.text-mode.theorem,
math-type area-container > line.text-mode.theorem,
math-type .print-as-area-container > line.text-mode.theorem {
  padding-top: 0.3em;
  padding-bottom: 0.3em;
}
math-type editarea.no-area-container > line > prefix,
math-type editarea.text-mode > line > prefix,
math-type area-container > line > prefix,
math-type .print-as-area-container > line > prefix {
  text-align: right;
}
math-type editarea.no-area-container > line.has-indent,
math-type editarea.text-mode > line.has-indent,
math-type area-container > line.has-indent,
math-type .print-as-area-container > line.has-indent {
  display: flex;
  justify-content: flex-start;
}
math-type editarea.no-area-container > line.has-rtl.has-indent > prefix,
math-type editarea.text-mode > line.has-rtl.has-indent > prefix,
math-type area-container > line.has-rtl.has-indent > prefix,
math-type .print-as-area-container > line.has-rtl.has-indent > prefix {
  direction: rtl;
  order: 1;
}
math-type editarea.no-area-container > line.has-rtl.has-indent.indent-0,
math-type editarea.text-mode > line.has-rtl.has-indent.indent-0,
math-type area-container > line.has-rtl.has-indent.indent-0,
math-type .print-as-area-container > line.has-rtl.has-indent.indent-0 {
  padding-left: 0;
  padding-right: 30px;
}
math-type editarea.no-area-container > line.has-rtl.has-indent.indent-1,
math-type editarea.text-mode > line.has-rtl.has-indent.indent-1,
math-type area-container > line.has-rtl.has-indent.indent-1,
math-type .print-as-area-container > line.has-rtl.has-indent.indent-1 {
  padding-left: 0;
  padding-right: 65px;
}
math-type editarea.no-area-container > line.has-rtl.has-indent.indent-2,
math-type editarea.text-mode > line.has-rtl.has-indent.indent-2,
math-type area-container > line.has-rtl.has-indent.indent-2,
math-type .print-as-area-container > line.has-rtl.has-indent.indent-2 {
  padding-left: 0;
  padding-right: 105px;
}
math-type editarea.no-area-container > line.has-rtl.has-indent.indent-3,
math-type editarea.text-mode > line.has-rtl.has-indent.indent-3,
math-type area-container > line.has-rtl.has-indent.indent-3,
math-type .print-as-area-container > line.has-rtl.has-indent.indent-3 {
  padding-left: 0;
  padding-right: 145px;
}
math-type editarea.no-area-container > line.has-rtl.has-indent.indent-4,
math-type editarea.text-mode > line.has-rtl.has-indent.indent-4,
math-type area-container > line.has-rtl.has-indent.indent-4,
math-type .print-as-area-container > line.has-rtl.has-indent.indent-4 {
  padding-left: 0;
  padding-right: 185px;
}
math-type editarea.no-area-container > line.indent-0,
math-type editarea.text-mode > line.indent-0,
math-type area-container > line.indent-0,
math-type .print-as-area-container > line.indent-0 {
  padding-left: 30px;
}
math-type editarea.no-area-container > line.indent-1,
math-type editarea.text-mode > line.indent-1,
math-type area-container > line.indent-1,
math-type .print-as-area-container > line.indent-1 {
  padding-left: 65px;
}
math-type editarea.no-area-container > line.indent-2,
math-type editarea.text-mode > line.indent-2,
math-type area-container > line.indent-2,
math-type .print-as-area-container > line.indent-2 {
  padding-left: 105px;
}
math-type editarea.no-area-container > line.indent-3,
math-type editarea.text-mode > line.indent-3,
math-type area-container > line.indent-3,
math-type .print-as-area-container > line.indent-3 {
  padding-left: 145px;
}
math-type editarea.no-area-container > line.indent-4,
math-type editarea.text-mode > line.indent-4,
math-type area-container > line.indent-4,
math-type .print-as-area-container > line.indent-4 {
  padding-left: 185px;
}
math-type editarea.no-area-container > line.math-container-selected,
math-type editarea.text-mode > line.math-container-selected,
math-type area-container > line.math-container-selected,
math-type .print-as-area-container > line.math-container-selected {
  outline: 1px solid rgba(93, 92, 92, 0.3);
}
math-type editarea.no-area-container > line.math-container,
math-type editarea.text-mode > line.math-container,
math-type area-container > line.math-container,
math-type .print-as-area-container > line.math-container {
  font-family: 'Asana';
  justify-content: center;
  text-align: center;
  display: flex;
}
math-type editarea.no-area-container > line.math-container block,
math-type editarea.text-mode > line.math-container block,
math-type area-container > line.math-container block,
math-type .print-as-area-container > line.math-container block {
  white-space: pre;
}
math-type editarea.no-area-container > line.align-center,
math-type editarea.text-mode > line.align-center,
math-type area-container > line.align-center,
math-type .print-as-area-container > line.align-center {
  text-align: center;
}
math-type editarea.no-area-container > line.align-center.has-indent,
math-type editarea.text-mode > line.align-center.has-indent,
math-type area-container > line.align-center.has-indent,
math-type .print-as-area-container > line.align-center.has-indent {
  justify-content: center;
}
math-type editarea.no-area-container > line.align-center.section,
math-type editarea.text-mode > line.align-center.section,
math-type area-container > line.align-center.section,
math-type .print-as-area-container > line.align-center.section {
  text-align: center;
}
math-type editarea.no-area-container > line.align-center > blocks,
math-type editarea.text-mode > line.align-center > blocks,
math-type area-container > line.align-center > blocks,
math-type .print-as-area-container > line.align-center > blocks {
  text-align: center;
}
math-type editarea.no-area-container > line.align-justify,
math-type editarea.text-mode > line.align-justify,
math-type area-container > line.align-justify,
math-type .print-as-area-container > line.align-justify {
  text-align: justify;
}
math-type editarea.no-area-container > line.align-justify.section,
math-type editarea.text-mode > line.align-justify.section,
math-type area-container > line.align-justify.section,
math-type .print-as-area-container > line.align-justify.section {
  text-align: justify;
}
math-type editarea.no-area-container > line.align-justify > blocks,
math-type editarea.text-mode > line.align-justify > blocks,
math-type area-container > line.align-justify > blocks,
math-type .print-as-area-container > line.align-justify > blocks {
  text-align: justify;
}
math-type editarea.no-area-container > line.align-left,
math-type editarea.text-mode > line.align-left,
math-type area-container > line.align-left,
math-type .print-as-area-container > line.align-left {
  text-align: left;
}
math-type editarea.no-area-container > line.align-left > blocks,
math-type editarea.text-mode > line.align-left > blocks,
math-type area-container > line.align-left > blocks,
math-type .print-as-area-container > line.align-left > blocks {
  text-align: left;
}
math-type editarea.no-area-container > line.align-right,
math-type editarea.text-mode > line.align-right,
math-type area-container > line.align-right,
math-type .print-as-area-container > line.align-right {
  text-align: right;
}
math-type editarea.no-area-container > line.align-right.has-indent,
math-type editarea.text-mode > line.align-right.has-indent,
math-type area-container > line.align-right.has-indent,
math-type .print-as-area-container > line.align-right.has-indent {
  justify-content: flex-end;
}
math-type editarea.no-area-container > line.align-right.section,
math-type editarea.text-mode > line.align-right.section,
math-type area-container > line.align-right.section,
math-type .print-as-area-container > line.align-right.section {
  text-align: right;
}
math-type editarea.no-area-container > line.align-right > blocks,
math-type editarea.text-mode > line.align-right > blocks,
math-type area-container > line.align-right > blocks,
math-type .print-as-area-container > line.align-right > blocks {
  text-align: right;
}
math-type editarea.no-area-container > line > blocks > block,
math-type editarea.text-mode > line > blocks > block,
math-type area-container > line > blocks > block,
math-type .print-as-area-container > line > blocks > block {
  display: inline;
}
math-type editarea.no-area-container,
math-type area-container {
  align-items: initial;
}
math-type editarea.root-editor {
  align-items: initial;
  display: block;
  color: black;
  fill: black;
  stroke: black;
  border-color: black;
}
math-type editarea.root-editor.read-only {
  cursor: default;
}
math-type editarea.root-editor.read-only block {
  cursor: default;
}
math-type editarea.root-editor > area-container {
  display: block;
}
math-type area-container {
  width: 100%;
}
math-type block {
  cursor: text;
}
math-type editarea {
  box-sizing: border-box;
  display: flex;
  overflow-x: visible;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  flex-wrap: nowrap;
}
math-type editarea block {
  cursor: text;
}
math-type editarea.high-order {
  position: relative;
  z-index: 10;
}
math-type editarea.selected {
  outline: 1px solid rgba(93, 92, 92, 0.3);
}
math-type editarea.bordered {
  outline: 1px solid rgba(93, 92, 92, 0.3);
}
math-type editarea.center > area-container > line,
math-type editarea.center > line {
  justify-content: center;
  text-align: center;
}
math-type editarea.left > area-container > line,
math-type editarea.left > line {
  justify-content: flex-start;
  text-align: left;
}
math-type editarea.right > area-container > line,
math-type editarea.right > line {
  justify-content: flex-end;
  text-align: right;
}
math-type editarea > area-baseline {
  width: 0;
  overflow: hidden;
  display: inline-block;
  float: left;
}
math-type setting.mt-common-dialog.line-tag-setting {
  transform: translate(0, -100%);
  position: absolute;
  font-family: serif;
  font-size: 11px;
  top: -4px;
  left: -10px;
  outline: none;
}
math-type setting.mt-common-dialog.line-tag-setting i {
  font-style: normal;
  padding: 1px 3px;
}
baselineblock {
  height: 0px;
  display: inline-block;
  width: 0;
  overflow: hidden;
}
baselineblock.inline {
  display: inline;
}
emptyblock {
  white-space: pre;
}
composite {
  display: inline-block;
}
block.Binary {
  padding: 0 0.2em;
}
block.Relation {
  padding: 0 0.3em;
}
block.Punctuation {
  padding-right: 0.2em;
}

/**we use alpha as we have problem with background (without alpha) in Electron version (older Chrome) **/
/* z-index region*/
/**different context*/
/**different context*/
math-type {
  display: block;
  position: relative;
  padding: 20px;
  color: black;
  padding-top: 15px;
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  outline: none;
  cursor: text;
  text-align: initial;
}
math-type.math-only compositeblock.math-container-symbol {
  width: 100%;
}
math-type.math-only compositeblock.math-container-symbol.selected {
  outline: none;
  background: none;
}
math-type.math-only compositeblock.math-container-symbol > editarea {
  width: 100%;
}
math-type.math-only compositeblock.math-container-symbol > editarea > line {
  justify-content: flex-start;
}
math-type > input:not([type]),
math-type input[type="text"] {
  width: 50px;
}
math-type composition-indicator {
  display: block;
  position: absolute;
  height: 2px;
  min-width: 2px;
  border-bottom: 2px solid gray;
  left: 0;
  top: 0;
}
math-type .focus-element {
  outline: none;
  overflow: hidden;
  width: 0px;
  height: 0px;
  top: 0px;
  left: 0px;
  display: block;
  position: absolute;
  font-size: 40px;
}
.scroll-without-scrollbar {
  scrollbar-width: none;
  /* Firefox */
  -ms-overflow-style: none;
  /* IE 10+ */
}
.scroll-without-scrollbar::-webkit-scrollbar {
  width: 0;
  height: 0;
  display: none;
}
#root,
.main-container {
  width: 100%;
  color: #212121;
}
.sub-text-cursor,
.text-cursor {
  position: absolute;
  color: green;
  /*font-size: 1.2em;*/
  pointer-events: none;
  border-left: 2px solid green;
  display: block;
  top: 0px;
  left: 0px;
  z-index: 10;
}
.sub-text-cursor {
  opacity: 0.4;
}
math-edit-container {
  display: block;
  outline: none;
  position: relative;
  font-family: 'Asana';
}
.root-editor {
  min-height: 500px;
  box-sizing: border-box;
}
.root-editor.restricted-view {
  min-height: unset;
}
.root-editor.test-view {
  min-height: 100px;
}
.menu {
  color: #ffffff;
  text-transform: uppercase;
  text-decoration: none;
  font-family: "HelveticaNeue-Medium", sans-serif;
  font-size: 14px;
  display: inline-block;
  transform: scale(1, 1.5);
  -webkit-transform: scale(1, 1.5);
  /* Safari and Chrome */
  -moz-transform: scale(1, 1.5);
  /* Firefox */
  -ms-transform: scale(1, 1.5);
  /* IE 9+ */
  -o-transform: scale(1, 1.5);
  /* Opera */
}
.setting-group-options {
  font-size: 13px;
  color: gray;
  fill: gray;
}
.setting-group-options > i,
.setting-group-options > svg.icon {
  padding: 3px;
  cursor: pointer;
  border: 1px solid transparent;
  /*box-sizing: border-box;*/
}
.setting-group-options > i.selected,
.setting-group-options > svg.icon.selected {
  background-color: white;
  border: 1px solid lightgray;
}
.setting-group-options > i:hover,
.setting-group-options > svg.icon:hover {
  border: 1px solid lightgray;
}
.setting-group-options > i.disabled,
.setting-group-options > svg.icon.disabled {
  opacity: 0.3;
}
.setting-group-options > i.disabled:hover,
.setting-group-options > svg.icon.disabled:hover {
  background-color: inherit;
  border: 1px solid transparent;
}
math-type .math-text,
math-type .normal-text,
math-type .raw-latex {
  font-family: arial, verdana, geneva, lucida, 'lucida grande', arial, helvetica, sans-serif;
}
math-type .math-text editarea.text-mode > line.text-mode > blocks > block,
math-type .normal-text editarea.text-mode > line.text-mode > blocks > block,
math-type .raw-latex editarea.text-mode > line.text-mode > blocks > block {
  white-space: nowrap;
}
.mt-common-dialog {
  box-shadow: 1px 1px 1px 0px #e0dddd;
  background-color: #f7f7f7;
  border: 1px lightgray solid;
  z-index: 14;
  padding: 6px;
  cursor: default;
  font-family: "Segoe UI", Arial, Verdana, sans-serif;
}
disabled-layer {
  display: block;
  position: absolute;
  left: 0;
  top: 1px;
  right: 0;
  bottom: 2px;
  background: rgba(247, 247, 247, 0.66);
  /** consider export button z-index when change this one*/
  z-index: 500;
}
math-type tag-container tag-select-wrapper {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
}
math-type tag-container tag-box-select {
  position: absolute;
  display: block;
  background-color: green;
  opacity: 0;
  cursor: pointer;
  z-index: 15;
}
math-type tag-container tag-box-select:hover {
  opacity: 0.2;
}
math-type tag-container tag-box-gap {
  position: absolute;
  display: block;
  background-color: white;
  opacity: 0.9;
  z-index: 15;
}
.setting-popup-zindex {
  z-index: 11;
}
svg.selectable {
  cursor: pointer;
  border: 1px solid transparent;
}
svg.selectable.selected {
  background: white;
  border: solid 1px lightgray;
}
svg.selectable:hover {
  border: solid 1px lightgray;
}


@media print {
  @page {
    margin: 0;
  }
  /**
    Convert Preview into main print area
    */
  .math-type-doc,
  .docs-container,
  .modal-dialog-root-container,
  instructions-container {
    display: none !important;
  }
  .print-preview-container {
    position: static !important;
    display: block !important;
    visibility: visible !important;
    width: auto !important;
    height: auto !important;
    z-index: 99999 !important;
  }
  .print-container {
    position: static !important;
    overflow: hidden;
  }
  .print-preview-controls-container {
    display: none !important;
  }
  .math-type-no-print {
    display: none !important;
  }
  area-container.print-page-level {
    margin-left: 0 !important;
    margin-top: 0 !important;
    margin-right: 0 !important;
    margin-bottom: 0 !important;
    border: none !important;
    border-left: none !important;
    border-top: none !important;
    border-right: none !important;
    border-bottom: none !important;
    break-inside: avoid !important;
  }
  .area-container-border {
    border: none !important;
    border-left: none !important;
    border-top: none !important;
    border-right: none !important;
    border-bottom: none !important;
    display: none !important;
  }
  #print-container {
    background-color: transparent !important;
  }
  #print-container > math-type {
    background-color: transparent !important;
  }
  #print-container > math-type > math-edit-container > editarea {
    background-color: transparent !important;
  }
  /*-----------------------------*/
  header,
  .export-bar-container {
    display: none !important;
  }
  math-type {
    padding: 0 !important;
  }
  .print-remove-background {
    background-color: transparent !important;
  }
  document-info-bar {
    display: none !important;
  }
  document-sidebar-container {
    display: none !important;
  }
  body {
    position: relative !important;
  }
  page,
  #root,
  body,
  html {
    height: 100% !important;
    width: 100% !important;
    position: relative !important;
    background: white !important;
    overflow: visible !important;
  }
}
.print-background.math-type-for-print {
  -webkit-print-color-adjust: exact;
}
@media print {
  .npm__react-simple-code-editor__textarea {
    display: none !important;
  }
  math-diagram {
    border: none !important;
  }
  .no-border-on-print {
    border: none !important;
  }
  .no-print,
  ref-tag.empty-line-tag,
  .text-cursor,
  .sub-text-cursor,
  selection-wrapper,
  message-box-container,
  connection-controls,
  .control-point-guide,
  tool-bar,
  items-bar,
  document-sidebar,
  resize-bar,
  diagram-expander,
  warning-error-region,
  loading-layer,
  resizing-info,
  toc-refresh {
    display: none !important;
  }
  .no-print-outline {
    outline: none !important;
  }
  .selected {
    background: unset !important;
  }
  .math-container-symbol.selected {
    background: unset !important;
  }
  .matrix-symbol.align-symbol {
    background: unset !important;
  }
  .matrix-symbol.gather-symbol {
    background: unset !important;
  }
  tr.selected,
  td.selected {
    border: unset !important;
  }
  tr.selected.hline {
    border-top: 1px solid black !important;
  }
  tr.selected.last-hline {
    border-bottom: 1px solid black !important;
  }
  td.selected.vline {
    border-left: 1px solid black !important;
  }
  td.selected.last-vline {
    border-right: 1px solid black !important;
  }
  .selected {
    outline: unset !important;
  }
  container-layer {
    margin: 0 !important;
    padding: 0 !important;
    background: transparent !important;
    height: initial !important;
    overflow: visible !important;
  }
  editor-container {
    border: none !important;
    margin: 0 !important;
    padding: 0 !important;
    background: transparent !important;
    width: 100% !important;
  }
  content-area {
    padding: 0px !important;
    margin: 0;
    background: transparent !important;
  }
  vcomposed-symbol.non-safari > start {
    margin-bottom: -0.05em !important;
  }
  vcomposed-symbol.non-safari > middle-center {
    margin-top: -0.05em;
    margin-bottom: -0.05em !important;
  }
  vcomposed-symbol.non-safari > middle {
    margin-top: -0.05em;
    margin-bottom: -0.05em !important;
  }
  vcomposed-symbol.non-safari > end {
    margin-top: -0.05em !important;
  }
}
.math-type-for-print .npm__react-simple-code-editor__textarea {
  display: none !important;
}
.math-type-for-print math-diagram {
  border: none !important;
}
.math-type-for-print .no-border-on-print {
  border: none !important;
}
.math-type-for-print .no-print,
.math-type-for-print ref-tag.empty-line-tag,
.math-type-for-print .text-cursor,
.math-type-for-print .sub-text-cursor,
.math-type-for-print selection-wrapper,
.math-type-for-print message-box-container,
.math-type-for-print connection-controls,
.math-type-for-print .control-point-guide,
.math-type-for-print tool-bar,
.math-type-for-print items-bar,
.math-type-for-print document-sidebar,
.math-type-for-print resize-bar,
.math-type-for-print diagram-expander,
.math-type-for-print warning-error-region,
.math-type-for-print loading-layer,
.math-type-for-print resizing-info,
.math-type-for-print toc-refresh {
  display: none !important;
}
.math-type-for-print .no-print-outline {
  outline: none !important;
}
.math-type-for-print .selected {
  background: unset !important;
}
.math-type-for-print .math-container-symbol.selected {
  background: unset !important;
}
.math-type-for-print .matrix-symbol.align-symbol {
  background: unset !important;
}
.math-type-for-print .matrix-symbol.gather-symbol {
  background: unset !important;
}
.math-type-for-print tr.selected,
.math-type-for-print td.selected {
  border: unset !important;
}
.math-type-for-print tr.selected.hline {
  border-top: 1px solid black !important;
}
.math-type-for-print tr.selected.last-hline {
  border-bottom: 1px solid black !important;
}
.math-type-for-print td.selected.vline {
  border-left: 1px solid black !important;
}
.math-type-for-print td.selected.last-vline {
  border-right: 1px solid black !important;
}
.math-type-for-print .selected {
  outline: unset !important;
}
.math-type-for-print container-layer {
  margin: 0 !important;
  padding: 0 !important;
  background: transparent !important;
  height: initial !important;
  overflow: visible !important;
}
.math-type-for-print editor-container {
  border: none !important;
  margin: 0 !important;
  padding: 0 !important;
  background: transparent !important;
  width: 100% !important;
}
.math-type-for-print content-area {
  padding: 0px !important;
  margin: 0;
  background: transparent !important;
}
.math-type-for-print vcomposed-symbol.non-safari > start {
  margin-bottom: -0.05em !important;
}
.math-type-for-print vcomposed-symbol.non-safari > middle-center {
  margin-top: -0.05em;
  margin-bottom: -0.05em !important;
}
.math-type-for-print vcomposed-symbol.non-safari > middle {
  margin-top: -0.05em;
  margin-bottom: -0.05em !important;
}
.math-type-for-print vcomposed-symbol.non-safari > end {
  margin-top: -0.05em !important;
}
.justify-single-line {
  display: inline-block;
  text-align-last: justify;
  width: 100%;
}

math-type modal-dialog.import-latex math-type editarea.root-editor {
  min-height: 100px;
}

/**we use alpha as we have problem with background (without alpha) in Electron version (older Chrome) **/
/* z-index region*/
/**different context*/
/**different context*/
math-type .mobile-keys-support-region {
  position: fixed;
  top: 84px;
  left: 45px;
  color: gray;
  z-index: 11609;
  opacity: 0.9;
  display: flex;
  width: auto;
  z-index: 600;
  cursor: pointer;
}
math-type .mobile-keys-support-region.is-android {
  top: unset;
  bottom: 4px;
  left: 17px;
}
math-type .mobile-keys-support-region.select-only {
  top: 40px;
  left: 25px;
}
math-type .mobile-keys-support-region.select-only .btn-suggestion-box-mobile {
  display: none;
}



/**we use alpha as we have problem with background (without alpha) in Electron version (older Chrome) **/
/* z-index region*/
/**different context*/
/**different context*/
context-menu-container {
  position: fixed;
  left: 100px;
  top: 300px;
  z-index: 13;
  box-shadow: 2px 2px 3px 0px #c3c3c3;
  border: 1px solid lightgray;
  width: 200px;
  background: white;
  cursor: default;
  outline: none;
  font-family: "Segoe UI", Arial, Verdana, sans-serif;
}
context-menu-container ct-item {
  display: block;
  padding: 6px 9px;
  font-size: 13px;
  color: gray;
}
context-menu-container ct-item.disabled {
  color: lightgray;
}
context-menu-container ct-item:hover {
  background: #eae9e9;
}
context-menu-container ct-item.hidden {
  display: none;
}
context-menu-container ct-icon {
  width: 20px;
  display: inline-block;
}
context-menu-container ct-separator {
  width: 100%;
  display: block;
  height: 1px;
  margin-top: 2px;
  margin-bottom: 2px;
  border-top: 1px solid lightgray;
}

/* Collection default theme */
/* Grid default theme */
/* Table default theme */









/* List default theme */










/**different context*/
/**different context*/
selection-wrapper {
  display: block;
  position: absolute;
  left: 0;
  top: 0;
  user-select: none;
  pointer-events: none;
  z-index: 9;
}
selection-wrapper > selection {
  display: block;
  position: absolute;
  background-color: rgba(0, 126, 255, 0.15);
  user-select: none;
  width: 100px;
  height: 100px;
  transform-origin: 0 0;
}
selection-wrapper.inactive > selection {
  background-color: rgba(58, 57, 57, 0.13);
}

region-highlight-container {
  user-select: none;
  pointer-events: none;
  display: block;
  position: absolute;
  width: 0px;
  height: 0px;
  top: 0;
  left: 0;
  border: 1px solid lightgoldenrodyellow;
  opacity: 0.2;
}
region-highlight-container > rhc-all > rh-rect {
  display: block;
  position: absolute;
  background: orange;
}
region-highlight-container > rh-selected-rect {
  display: block;
  position: absolute;
  background: red;
}

.math-template-btb.btn-normal {
  background: transparent;
  margin-left: 0;
  font-size: 12px;
  border: none;
}
.math-template-btb.btn-normal:hover {
  background: white;
}
.math-template-name-item:hover {
  background: #f7f7f7;
}

.math-template-tree .tree-node-name {
  white-space: nowrap;
}
.math-template-tree .tree-node-name:hover {
  background: #f7f7f7;
}

.special-symbol-dialog__special-char {
  display: inline-block;
  width: 24px;
  height: 24px;
  line-height: 24px;
  border-bottom: 1px solid #ddd;
  border-right: 1px solid #ddd;
  text-align: center;
  cursor: pointer;
  outline: none;
}
.special-symbol-dialog__special-char:hover {
  background: #bfe4bd;
}

.caption-ref-select .role-item:hover {
  background: #edf9ec;
}

.footnote-mt-container {
  position: relative;
}
.footnote-mt-container .more-option-box {
  position: absolute;
  left: -25px;
  top: 0;
  width: 30px;
  bottom: 0;
  display: none;
}
.footnote-mt-container .more-option-box > div {
  background: #f7f7f7;
  border: 1px solid #d6d3d3;
  padding: 0 0.2em;
  cursor: pointer;
  color: gray;
  display: inline-block;
}
.footnote-mt-container.hover-select:hover .more-option-box {
  display: block;
}
.mt-doc-fn > math-edit-container > editarea > area-container > line > first-line-prefix {
  padding-right: 0.3em;
}
.mt-doc-fn > math-edit-container > editarea > area-container > line.has-rtl {
  direction: rtl;
}
.mt-doc-fn > math-edit-container > editarea > area-container > line.has-rtl > first-line-prefix {
  padding-left: 0.3em;
}
.blocks-inline > math-edit-container > editarea > area-container > line > blocks {
  display: inline;
}



icon-dropdown-items icon-dropdown-item:hover {
  background: #eae9e9;
}
icon-dropdown:hover {
  color: #4e4d4d;
}

resizable-container {
  display: block;
  position: relative;
  height: 100%;
}





a.fce {
  cursor: pointer;
}
a.fce:hover svg {
  fill: #2d4373;
}
a.fce svg {
  fill: #3b5998;
}
a.fce i {
  text-align: center;
  color: white;
}
a.gg {
  cursor: pointer;
}
a.gg:hover svg {
  fill: #c23321;
}
a.gg svg {
  fill: #dd4b39;
}
a.gg i {
  text-align: center;
  color: white;
}
a.twr {
  cursor: pointer;
}
a.twr:hover svg {
  fill: #2795e9;
}
a.twr svg {
  fill: #55acee;
}
a.twr i {
  text-align: center;
  color: white;
}
a.gh {
  cursor: pointer;
}
a.gh:hover svg {
  fill: #2b2b2b;
}
a.gh svg {
  fill: #444;
}
a.gh i {
  text-align: center;
  color: white;
}



modal-dialog.swift.document-name modal-container.mt-common-dialog {
  width: 500px;
  max-width: 95vw;
}
modal-dialog.swift.document-name document-name {
  width: 100%;
  display: flex;
  flex-direction: column;
}
modal-dialog.swift.document-name document-name label {
  display: block;
  font-size: 12px;
}
modal-dialog.swift.document-name document-name textarea {
  width: auto;
  display: block;
  margin: 5px 0px;
  height: 39px;
  outline: none;
  border: 1px solid lightgray;
  resize: vertical;
}

quick-start editarea.root-editor {
  min-height: 100px;
}
quick-start > qs-math-type-container > math-type:hover {
  border: 1px solid gray;
}
quick-start > qs-math-type-container > math-type tool-bar {
  display: none;
}
quick-start > qs-math-type-container > math-type items-bar {
  display: none;
  left: -60px;
  top: 0px;
  box-shadow: 0px 1px 2px 0px #4c4949;
}





/**we use alpha as we have problem with background (without alpha) in Electron version (older Chrome) **/
/* z-index region*/
/**Context Level 1*/
/**both Level 1 and 2 Context */
/**Context Level 2 inside docsContainerZIndex*/
document-info-container document-info-bar {
  display: block;
  position: absolute;
  right: 15px;
  bottom: 5px;
  background: #f7f7f7;
  box-shadow: 1px 1px 1px 0px #e0dddd;
  border: 1px lightgray solid;
  font-size: 12px;
  padding: 0px;
  color: gray;
  opacity: 0.8;
  z-index: 4;
}
document-info-container document-info-bar:hover {
  opacity: 1;
}
document-info-container modal-container button.ok.btn-primary {
  display: none;
}
.Popover-body {
  font-size: 12px;
  padding: 10px;
  background: #4CAF50;
  box-shadow: #888686 1px 1px 1px 1px;
  color: white;
  max-width: 250px;
}
.Popover-tip {
  fill: #4CAF50;
}

/**Context Level 1*/
/**both Level 1 and 2 Context */
/**Context Level 2 inside docsContainerZIndex*/
.doc-toolbar-container {
  position: relative;
  background: #f7f7f7;
  top: 0;
  left: 0;
  width: 100%;
  border: 1px lightgray solid;
  margin-left: -2px;
  z-index: 6;
}
.doc-toolbar-container > tool-bar {
  position: relative;
  top: 0;
  left: 0;
  display: block;
  padding-left: 0px;
  min-width: 770px;
  width: 770px;
  margin: auto;
  background: transparent;
  box-shadow: none;
  border: none;
  height: 35px;
}













/**Context Level 1*/
/**both Level 1 and 2 Context */
/**Context Level 2 inside docsContainerZIndex*/


</style><style>/* @font-face {
  font-family: 'FontAwesome';
  src: format('woff'), url('{{site.url}}/assets/fonts_new/icomoon.svg?erlpdm#icomoon') format('svg');
  font-weight: normal;
  font-style: normal;
} */

[class^="fa-"], [class*=" fa-"] {
  /* use !important to prevent issues with browser extensions that change {{site.url}}/assets/fonts_new */
  /* font-family: 'FontAwesome' !important;
  speak: none;
  font-style: normal;
  font-weight: normal;
  font-variant: normal;
  text-transform: none; */
  /* line-height: 1; */
  /* Better Font Rendering =========== */
  /* -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale; */
  display: inline-block;
  font: normal normal normal 14px/1 FontAwesome;
  font-size: inherit;
  text-rendering: auto;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.fa-plus:before {
  content: "\f067";
}
.fa-user:before {
  content: "\f007";
}
.fa-check:before {
  content: "\f00c";
}
.fa-close:before {
  content: "\f00d";
}
.fa-remove:before {
  content: "\f00d";
}
.fa-times:before {
  content: "\f00d";
}
.fa-search-plus:before {
  content: "\f00e";
}
.fa-search-minus:before {
  content: "\f010";
}
.fa-cog:before {
  content: "\f013";
}
.fa-gear:before {
  content: "\f013";
}
.fa-trash-o:before {
  content: "\f014";
}
.fa-file-o:before {
  content: "\f016";
}
.fa-refresh:before {
  content: "\f021";
}
.fa-font:before {
  content: "\f031";
}
.fa-bold:before {
  content: "\f032";
}
.fa-italic:before {
  content: "\f033";
}
.fa-align-left:before {
  content: "\f036";
}
.fa-align-center:before {
  content: "\f037";
}
.fa-align-right:before {
  content: "\f038";
}
.fa-dedent:before {
  content: "\f03b";
}
.fa-outdent:before {
  content: "\f03b";
}
.fa-indent:before {
  content: "\f03c";
}
.fa-image:before {
  content: "\f03e";
}
.fa-photo:before {
  content: "\f03e";
}
.fa-picture-o:before {
  content: "\f03e";
}
.fa-pencil:before {
  content: "\f040";
}
.fa-edit:before {
  content: "\f044";
}
.fa-pencil-square-o:before {
  content: "\f044";
}
.fa-share-square-o:before {
  content: "\f045";
}
.fa-arrows:before {
  content: "\f047";
}
.fa-chevron-left:before {
  content: "\f053";
}
.fa-chevron-right:before {
  content: "\f054";
}
.fa-times-circle:before {
  content: "\f057";
}
.fa-info-circle:before {
  content: "\f05a";
}
.fa-arrow-left:before {
  content: "\f060";
}
.fa-arrow-right:before {
  content: "\f061";
}
.fa-arrow-up:before {
  content: "\f062";
}
.fa-arrow-down:before {
  content: "\f063";
}
.fa-mail-forward:before {
  content: "\f064";
}
.fa-share:before {
  content: "\f064";
}
.fa-exclamation-circle:before {
  content: "\f06a";
}
.fa-exclamation-triangle:before {
  content: "\f071";
}
.fa-warning:before {
  content: "\f071";
}
.fa-chevron-up:before {
  content: "\f077";
}
.fa-chevron-down:before {
  content: "\f078";
}
.fa-folder:before {
  content: "\f07b";
}
.fa-folder-open:before {
  content: "\f07c";
}
.fa-twitter:before {
  content: "\f099";
}
.fa-twr:before {
  content: "\f099";
}
.fa-facebook:before {
  content: "\f09a";
}
.fa-fce:before {
  content: "\f09a";
}
.fa-facebook-f:before {
  content: "\f09a";
}
.fa-github:before {
  content: "\f09b";
}
.fa-gh:before {
  content: "\f09b";
}
.fa-cut:before {
  content: "\f0c4";
}
.fa-scissors:before {
  content: "\f0c4";
}
.fa-copy:before {
  content: "\f0c5";
}
.fa-files-o:before {
  content: "\f0c5";
}
.fa-bars:before {
  content: "\f0c9";
}
.fa-navicon:before {
  content: "\f0c9";
}
.fa-reorder:before {
  content: "\f0c9";
}
.fa-list-ul:before {
  content: "\f0ca";
}
.fa-list-ol:before {
  content: "\f0cb";
}
.fa-strikethrough:before {
  content: "\f0cc";
}
.fa-underline:before {
  content: "\f0cd";
}
.fa-table:before {
  content: "\f0ce";
}
.fa-magic:before {
  content: "\f0d0";
}
.fa-caret-down:before {
  content: "\f0d7";
}
.fa-caret-right:before {
  content: "\f0da";
}
.fa-sort-desc:before {
  content: "\f0dd";
}
.fa-sort-down:before {
  content: "\f0dd";
}
.fa-clipboard:before {
  content: "\f0ea";
}
.fa-paste:before {
  content: "\f0ea";
}
.fa-angle-double-left:before {
  content: "\f100";
}
.fa-angle-double-right:before {
  content: "\f101";
}
.fa-angle-double-up:before {
  content: "\f102";
}
.fa-angle-double-down:before {
  content: "\f103";
}
.fa-circle:before {
  content: "\f111";
}
.fa-mail-reply:before {
  content: "\f112";
}
.fa-reply:before {
  content: "\f112";
}
.fa-exclamation:before {
  content: "\f12a";
}
.fa-eraser:before {
  content: "\f12d";
}
.fa-ellipsis-h:before {
  content: "\f141";
}
.fa-ellipsis-v:before {
  content: "\f142";
}
.fa-file:before {
  content: "\f15b";
}
.fa-file-text:before {
  content: "\f15c";
}
.fa-google:before {
  content: "\f1a0";
}
.fa-gg:before {
  content: "\f1a0";
}
.fa-trash:before {
  content: "\f1f8";
}
.fa-i-cursor:before {
  content: "\f246";
}
.fa-hand-paper-o:before {
  content: "\f256";
}
.fa-hand-stop-o:before {
  content: "\f256";
}
</style><style>.plotly-notifier .notifier-close:hover { color: rgb(68, 68, 68); text-decoration: none; cursor: pointer; }
.plotly-notifier .notifier-close { color: rgb(255, 255, 255); opacity: 0.8; float: right; padding: 0px 5px; background: rgba(0, 0, 0, 0) none repeat scroll 0% 0%; border: medium none; font-size: 20px; font-weight: bold; line-height: 20px; }
.plotly-notifier .notifier-note { min-width: 180px; max-width: 250px; border: 1px solid rgb(255, 255, 255); z-index: 3000; margin: 0px; background-color: rgba(140, 151, 175, 0.9); color: rgb(255, 255, 255); padding: 10px; overflow-wrap: break-word; hyphens: auto; }
.plotly-notifier p { margin: 0px; }
.plotly-notifier { font-family: "Open Sans", verdana, arial, sans-serif; position: fixed; top: 50px; right: 20px; z-index: 10000; font-size: 10pt; max-width: 180px; }
.js-plotly-plot .plotly .select-outline-2 { stroke: black; stroke-dasharray: 2px, 2px; }
.js-plotly-plot .plotly .select-outline-1 { stroke: white; }
.js-plotly-plot .plotly .select-outline { fill: none; stroke-width: 1px; shape-rendering: crispedges; }
.js-plotly-plot .plotly .vertical [data-title]::before { border-color: transparent transparent transparent rgb(105, 115, 138); border-style: solid; border-width: 6px; border-image: none 100% / 1 / 0 stretch; margin-top: 8px; margin-right: -30px; }
.js-plotly-plot .plotly .vertical [data-title]::before, .js-plotly-plot .plotly .vertical [data-title]::after { top: 0%; right: 200%; }
.js-plotly-plot .plotly [data-title]::after { content: attr(data-title); background: rgb(105, 115, 138) none repeat scroll 0% 0%; color: white; padding: 8px 10px; font-size: 12px; line-height: 12px; white-space: nowrap; margin-right: -18px; border-radius: 2px; }
.js-plotly-plot .plotly [data-title]::before { content: ""; position: absolute; background: transparent none repeat scroll 0% 0%; border-color: transparent transparent rgb(105, 115, 138); border-style: solid; border-width: 6px; border-image: none 100% / 1 / 0 stretch; z-index: 1002; margin-top: -12px; margin-right: -6px; }
.js-plotly-plot .plotly [data-title]:hover::before, .js-plotly-plot .plotly [data-title]:hover::after { display: block; opacity: 1; }
.js-plotly-plot .plotly [data-title]::before, .js-plotly-plot .plotly [data-title]::after { position: absolute; transform: translate3d(0px, 0px, 0px); display: none; opacity: 0; z-index: 1001; pointer-events: none; top: 110%; right: 50%; }
.js-plotly-plot .plotly .modebar.vertical .modebar-group .modebar-btn { display: block; text-align: center; }
.js-plotly-plot .plotly .modebar.vertical .modebar-group { display: block; float: none; padding-left: 0px; padding-bottom: 8px; }
.js-plotly-plot .plotly .modebar.vertical svg { top: -1px; }
.js-plotly-plot .plotly .modebar.vertical { display: flex; flex-flow: column wrap; align-content: flex-end; max-height: 100%; }
.js-plotly-plot .plotly .modebar-btn svg { position: relative; top: 2px; }
.js-plotly-plot .plotly .modebar-btn { position: relative; font-size: 16px; padding: 3px 4px; height: 22px; cursor: pointer; line-height: normal; box-sizing: border-box; }
.js-plotly-plot .plotly .modebar-group { float: left; display: inline-block; box-sizing: border-box; padding-left: 8px; position: relative; vertical-align: middle; white-space: nowrap; }
.js-plotly-plot .plotly:hover .modebar--hover .modebar-group { opacity: 1; }
.js-plotly-plot .plotly .modebar--hover > :not(.watermark) { opacity: 0; transition: opacity 0.3s ease 0s; }
.js-plotly-plot .plotly .ease-bg { transition: background-color 0.3s ease 0s; }
.js-plotly-plot .plotly .modebar { position: absolute; top: 2px; right: 2px; }
.js-plotly-plot .plotly .cursor-grab { cursor: grab; }
.js-plotly-plot .plotly .cursor-ne-resize { cursor: ne-resize; }
.js-plotly-plot .plotly .cursor-n-resize { cursor: n-resize; }
.js-plotly-plot .plotly .cursor-nw-resize { cursor: nw-resize; }
.js-plotly-plot .plotly .cursor-e-resize { cursor: e-resize; }
.js-plotly-plot .plotly .cursor-w-resize { cursor: w-resize; }
.js-plotly-plot .plotly .cursor-se-resize { cursor: se-resize; }
.js-plotly-plot .plotly .cursor-s-resize { cursor: s-resize; }
.js-plotly-plot .plotly .cursor-sw-resize { cursor: sw-resize; }
.js-plotly-plot .plotly .cursor-ew-resize { cursor: ew-resize; }
.js-plotly-plot .plotly .cursor-ns-resize { cursor: ns-resize; }
.js-plotly-plot .plotly .cursor-row-resize { cursor: row-resize; }
.js-plotly-plot .plotly .cursor-col-resize { cursor: col-resize; }
.js-plotly-plot .plotly .cursor-move { cursor: move; }
.js-plotly-plot .plotly .cursor-crosshair { cursor: crosshair; }
.js-plotly-plot .plotly .cursor-pointer { cursor: pointer; }
.js-plotly-plot .plotly .cursor-default { cursor: default; }
.js-plotly-plot .plotly .main-svg .draglayer { pointer-events: all; }
.js-plotly-plot .plotly .main-svg { position: absolute; top: 0px; left: 0px; pointer-events: none; }
.js-plotly-plot .plotly svg a:hover { fill: rgb(60, 109, 197); }
.js-plotly-plot .plotly svg a { fill: rgb(68, 122, 219); }
.js-plotly-plot .plotly svg { overflow: hidden; }
.js-plotly-plot .plotly .user-select-none { user-select: none; }
.js-plotly-plot .plotly .crisp { shape-rendering: crispedges; }
.js-plotly-plot .plotly a:hover { text-decoration: none; }
.js-plotly-plot .plotly a { text-decoration: none; }
.js-plotly-plot .plotly input:focus, .js-plotly-plot .plotly button:focus { outline: currentcolor none medium; }
.js-plotly-plot .plotly input, .js-plotly-plot .plotly button { font-family: "Open Sans", verdana, arial, sans-serif; }
.js-plotly-plot .plotly, .js-plotly-plot .plotly div { direction: ltr; font-family: "Open Sans", verdana, arial, sans-serif; margin: 0px; padding: 0px; }</style><style>
        @page {
            size: letter portrait;            
        }
        </style></head><body style="overflow:auto;background:white;width:auto;height:auto;"><editor-container style="display:block;margin:auto;width:700px;"><math-type style="user-select:text;" class=" math-type-for-print "><math-edit-container><editarea class="root-editor" style="font-family: Arial, Helvetica, sans-serif; font-size: 15px;"><area-baseline aria-hidden="true">a</area-baseline><area-container><line class="root text-mode selected" style="line-height: 1.4;"><prefix></prefix><blocks><baselineblock class="inline"></baselineblock><emptyblock aria-label="empty line"> </emptyblock></blocks></line><line class="root text-mode" style="line-height: 1.4;"><prefix></prefix><blocks><baselineblock class="inline"></baselineblock><emptyblock aria-label="empty line"> </emptyblock></blocks></line><line class="root text-mode full-line-block-inside" style="line-height: 1.4;"><prefix></prefix><blocks><baselineblock class="inline"></baselineblock><compositeblock dir="ltr" class="matrix-symbol align-symbol role-mathmode-area role-tabular" style="font-size: 17px;" data-mathml="<math display=&quot;block&quot; xmlns=&quot;http://www.w3.org/1998/Math/MathML&quot;><mtable width=&quot;100%&quot; columnspacing=&quot;0em 2em&quot; columnalign=&quot;right left&quot;><mtr><mtd><mrow><mi>B</mi><mi>a</mi><mi>t</mi><mi>c</mi><mi>h</mi><mspace is=&quot;true&quot; width=&quot;0.22em&quot;></mspace><mi>N</mi><mi>o</mi><mi>r</mi><mi>m</mi><mi>a</mi><mi>l</mi><mi>i</mi><mi>z</mi><mi>a</mi><mi>t</mi><mi>i</mi><mi>o</mi><mi>n</mi></mrow></mtd><mtd><mrow><mi></mi></mrow></mtd></mtr></mtable></math>"><matrix class="align" aria-hidden="true"><table><tbody><tr class="math-row"><td class="non-select" style="width: 50%;"></td><td class="align-right first-in-pair"><editarea class="editor-cell" style="position: relative; font-family: Asana-Math, Asana;"><area-container><line class="" style="line-height: 1.2;"><baselineblock></baselineblock><block class="Normal">Batch Normalization</block></line></area-container></editarea></td><td class="second-in-pair"><editarea class="editor-cell" style="position: relative; font-family: Asana-Math, Asana;"><area-container><line class="" style="line-height: 1.2;"><baselineblock></baselineblock><emptyblock aria-label="empty line"> </emptyblock></line></area-container></editarea></td><td class="non-select" style="width: 50%;"></td></tr></tbody></table></matrix><span role="presentation" style="width:100%;position:absolute;top:0;left:0;clip:rect(1px, 1px, 1px, 1px);height:1px;padding:1px 0 0 0!important;overflow:hidden;user-select:none;"><math display="block" xmlns="http://www.w3.org/1998/Math/MathML"><mtable columnspacing="0em 2em" columnalign="right left" width="100%"><mtr><mtd><mrow><mi>B</mi><mi>a</mi><mi>t</mi><mi>c</mi><mi>h</mi><mspace is="true" width="0.22em"></mspace><mi>N</mi><mi>o</mi><mi>r</mi><mi>m</mi><mi>a</mi><mi>l</mi><mi>i</mi><mi>z</mi><mi>a</mi><mi>t</mi><mi>i</mi><mi>o</mi><mi>n</mi></mrow></mtd><mtd><mrow><mi></mi></mrow></mtd></mtr></mtable></math></span></compositeblock></blocks></line><line class="root text-mode" style="line-height: 1.4;"><prefix></prefix><blocks><baselineblock class="inline"></baselineblock><compositeblock dir="ltr" class="math-container-symbol role-mathmode-area inline" style="font-size: 17px;" data-mathml="<math xmlns=&quot;http://www.w3.org/1998/Math/MathML&quot;><mstyle displaystyle=&quot;true&quot;><mrow><mi>F</mi><mi>e</mi><mi>e</mi><mi>d</mi><mspace is=&quot;true&quot; width=&quot;0.22em&quot;></mspace><mi>F</mi><mi>o</mi><mi>r</mi><mi>w</mi><mi>a</mi><mi>r</mi><mi>d</mi></mrow></mstyle></math>"><editarea class="math-mode-font no-area-container" style="font-family: Asana-Math, Asana;" aria-hidden="true"><line class="" style="line-height: 1.2;"><baselineblock></baselineblock><block class="Normal">Feed Forward</block></line></editarea><span role="presentation" style="width:100%;position:absolute;top:0;left:0;clip:rect(1px, 1px, 1px, 1px);height:1px;padding:1px 0 0 0!important;overflow:hidden;user-select:none;"><math xmlns="http://www.w3.org/1998/Math/MathML"><mstyle displaystyle="true"><mrow><mi>F</mi><mi>e</mi><mi>e</mi><mi>d</mi><mspace is="true" width="0.22em"></mspace><mi>F</mi><mi>o</mi><mi>r</mi><mi>w</mi><mi>a</mi><mi>r</mi><mi>d</mi></mrow></mstyle></math></span></compositeblock><block>:</block></blocks></line><line class="root text-mode" style="line-height: 1.4;"><prefix></prefix><blocks><baselineblock class="inline"></baselineblock><block>We consider here a mini-batch </block><compositeblock dir="ltr" class="math-container-symbol role-mathmode-area inline" style="font-size: 17px;" data-mathml="<math xmlns=&quot;http://www.w3.org/1998/Math/MathML&quot;><mstyle displaystyle=&quot;true&quot;><mi>B</mi></mstyle></math>"><editarea class="math-mode-font no-area-container" style="font-family: Asana-Math, Asana;" aria-hidden="true"><line class="" style="line-height: 1.2;"><baselineblock></baselineblock><block class="Normal">B</block></line></editarea><span role="presentation" style="width:100%;position:absolute;top:0;left:0;clip:rect(1px, 1px, 1px, 1px);height:1px;padding:1px 0 0 0!important;overflow:hidden;user-select:none;"><math xmlns="http://www.w3.org/1998/Math/MathML"><mstyle displaystyle="true"><mi>B</mi></mstyle></math></span></compositeblock><block> of size </block><compositeblock dir="ltr" class="math-container-symbol role-mathmode-area inline" style="font-size: 17px;" data-mathml="<math xmlns=&quot;http://www.w3.org/1998/Math/MathML&quot;><mstyle displaystyle=&quot;true&quot;><mi>m</mi></mstyle></math>"><editarea class="math-mode-font no-area-container" style="font-family: Asana-Math, Asana;" aria-hidden="true"><line class="" style="line-height: 1.2;"><baselineblock></baselineblock><block class="Normal">m</block></line></editarea><span role="presentation" style="width:100%;position:absolute;top:0;left:0;clip:rect(1px, 1px, 1px, 1px);height:1px;padding:1px 0 0 0!important;overflow:hidden;user-select:none;"><math xmlns="http://www.w3.org/1998/Math/MathML"><mstyle displaystyle="true"><mi>m</mi></mstyle></math></span></compositeblock><block>. The </block><compositeblock dir="ltr" class="math-container-symbol role-mathmode-area inline" style="font-size: 17px;" data-mathml="<math xmlns=&quot;http://www.w3.org/1998/Math/MathML&quot;><mstyle displaystyle=&quot;true&quot;><msub><mi>x</mi><mi>i</mi></msub></mstyle></math>"><editarea class="math-mode-font no-area-container" style="font-family: Asana-Math, Asana;" aria-hidden="true"><line class="" style="line-height: 1.2;"><baselineblock></baselineblock><block class="Normal">x</block><compositeblock dir="ltr" class="power-index-symbol-container power-index-symbol-container"><middle-base><inline></inline></middle-base><editarea-block class="index-value" style="line-height: 1.2; margin-top: -0.747899em;">i</editarea-block></compositeblock></line></editarea><span role="presentation" style="width:100%;position:absolute;top:0;left:0;clip:rect(1px, 1px, 1px, 1px);height:1px;padding:1px 0 0 0!important;overflow:hidden;user-select:none;"><math xmlns="http://www.w3.org/1998/Math/MathML"><mstyle displaystyle="true"><msub><mi>x</mi><mi>i</mi></msub></mstyle></math></span></compositeblock><block> is </block><compositeblock dir="ltr" class="math-container-symbol role-mathmode-area inline" style="font-size: 17px;" data-mathml="<math xmlns=&quot;http://www.w3.org/1998/Math/MathML&quot;><mstyle displaystyle=&quot;true&quot;><msup><mi>i</mi><mrow><mi>t</mi><mi>h</mi></mrow></msup></mstyle></math>"><editarea class="math-mode-font no-area-container" style="font-family: Asana-Math, Asana;" aria-hidden="true"><line class="" style="line-height: 1.2;"><baselineblock></baselineblock><block class="Normal">i</block><compositeblock dir="ltr" class="power-index-symbol-container power-index-symbol-container has-power"><editarea-line class=" power-value" style="line-height: 1.2; margin-bottom: -1.06571em;"><baselineblock></baselineblock><block>th</block></editarea-line><middle-base><inline></inline></middle-base></compositeblock></line></editarea><span role="presentation" style="width:100%;position:absolute;top:0;left:0;clip:rect(1px, 1px, 1px, 1px);height:1px;padding:1px 0 0 0!important;overflow:hidden;user-select:none;"><math xmlns="http://www.w3.org/1998/Math/MathML"><mstyle displaystyle="true"><msup><mi>i</mi><mrow><mi>t</mi><mi>h</mi></mrow></msup></mstyle></math></span></compositeblock><block> element in any one dimension of activation. Actually we consider </block><compositeblock dir="ltr" class="math-container-symbol role-mathmode-area inline" style="font-size: 17px;" data-mathml="<math xmlns=&quot;http://www.w3.org/1998/Math/MathML&quot;><mstyle displaystyle=&quot;true&quot;><msubsup><mi>x</mi><mi>i</mi><mi>k</mi></msubsup></mstyle></math>"><editarea class="math-mode-font no-area-container" style="font-family: Asana-Math, Asana;" aria-hidden="true"><line class="" style="line-height: 1.2;"><baselineblock></baselineblock><block class="Normal">x</block><compositeblock dir="ltr" class="power-index-symbol-container power-index-symbol-container has-power"><editarea-block class="power-value" style="line-height: 1.2; margin-top: 0em; margin-bottom: -1.05378em;">k</editarea-block><middle-base><inline></inline></middle-base><editarea-block class="index-value" style="line-height: 1.2; margin-top: -0.60899em; margin-bottom: 0em;">i</editarea-block></compositeblock></line></editarea><span role="presentation" style="width:100%;position:absolute;top:0;left:0;clip:rect(1px, 1px, 1px, 1px);height:1px;padding:1px 0 0 0!important;overflow:hidden;user-select:none;"><math xmlns="http://www.w3.org/1998/Math/MathML"><mstyle displaystyle="true"><msubsup><mi>x</mi><mi>i</mi><mi>k</mi></msubsup></mstyle></math></span></compositeblock><block> as the </block><compositeblock dir="ltr" class="math-container-symbol role-mathmode-area inline" style="font-size: 17px;" data-mathml="<math xmlns=&quot;http://www.w3.org/1998/Math/MathML&quot;><mstyle displaystyle=&quot;true&quot;><msup><mi>k</mi><mrow><mi>t</mi><mi>h</mi></mrow></msup></mstyle></math>"><editarea class="math-mode-font no-area-container" style="font-family: Asana-Math, Asana;" aria-hidden="true"><line class="" style="line-height: 1.2;"><baselineblock></baselineblock><block class="Normal">k</block><compositeblock dir="ltr" class="power-index-symbol-container power-index-symbol-container has-power"><editarea-line class=" power-value" style="line-height: 1.2; margin-bottom: -1.06571em;"><baselineblock></baselineblock><block>th</block></editarea-line><middle-base><inline></inline></middle-base></compositeblock></line></editarea><span role="presentation" style="width:100%;position:absolute;top:0;left:0;clip:rect(1px, 1px, 1px, 1px);height:1px;padding:1px 0 0 0!important;overflow:hidden;user-select:none;"><math xmlns="http://www.w3.org/1998/Math/MathML"><mstyle displaystyle="true"><msup><mi>k</mi><mrow><mi>t</mi><mi>h</mi></mrow></msup></mstyle></math></span></compositeblock><block> dim and </block><compositeblock dir="ltr" class="math-container-symbol role-mathmode-area inline" style="font-size: 17px;" data-mathml="<math xmlns=&quot;http://www.w3.org/1998/Math/MathML&quot;><mstyle displaystyle=&quot;true&quot;><msup><mi>i</mi><mrow><mi>t</mi><mi>h</mi></mrow></msup></mstyle></math>"><editarea class="math-mode-font no-area-container" style="font-family: Asana-Math, Asana;" aria-hidden="true"><line class="" style="line-height: 1.2;"><baselineblock></baselineblock><block class="Normal">i</block><compositeblock dir="ltr" class="power-index-symbol-container power-index-symbol-container has-power"><editarea-line class=" power-value" style="line-height: 1.2; margin-bottom: -1.06571em;"><baselineblock></baselineblock><block>th</block></editarea-line><middle-base><inline></inline></middle-base></compositeblock></line></editarea><span role="presentation" style="width:100%;position:absolute;top:0;left:0;clip:rect(1px, 1px, 1px, 1px);height:1px;padding:1px 0 0 0!important;overflow:hidden;user-select:none;"><math xmlns="http://www.w3.org/1998/Math/MathML"><mstyle displaystyle="true"><msup><mi>i</mi><mrow><mi>t</mi><mi>h</mi></mrow></msup></mstyle></math></span></compositeblock><block> element, but to keep things concise, I have taken the </block><compositeblock dir="ltr" class="math-container-symbol role-mathmode-area inline" style="font-size: 17px;" data-mathml="<math xmlns=&quot;http://www.w3.org/1998/Math/MathML&quot;><mstyle displaystyle=&quot;true&quot;><mi>k</mi></mstyle></math>"><editarea class="math-mode-font no-area-container" style="font-family: Asana-Math, Asana;" aria-hidden="true"><line class="" style="line-height: 1.2;"><baselineblock></baselineblock><block class="Normal">k</block></line></editarea><span role="presentation" style="width:100%;position:absolute;top:0;left:0;clip:rect(1px, 1px, 1px, 1px);height:1px;padding:1px 0 0 0!important;overflow:hidden;user-select:none;"><math xmlns="http://www.w3.org/1998/Math/MathML"><mstyle displaystyle="true"><mi>k</mi></mstyle></math></span></compositeblock><block> out of the derivation. The mean and variance of the mini-batch are </block><compositeblock dir="ltr" class="math-container-symbol role-mathmode-area inline" style="font-size: 17px;" data-mathml="<math xmlns=&quot;http://www.w3.org/1998/Math/MathML&quot;><mstyle displaystyle=&quot;true&quot;><mrow><msub><mi>𝜇</mi><mi>B</mi></msub><mspace is=&quot;true&quot; width=&quot;0.22em&quot;></mspace><mi>a</mi><mi>n</mi><mi>d</mi><mspace is=&quot;true&quot; width=&quot;0.22em&quot;></mspace><msubsup><mi>𝜎</mi><mi>B</mi><mn>2</mn></msubsup></mrow></mstyle></math>"><editarea class="math-mode-font no-area-container" style="font-family: Asana-Math, Asana;" aria-hidden="true"><line class="" style="line-height: 1.2;"><baselineblock></baselineblock><block class="Normal">𝜇</block><compositeblock dir="ltr" class="power-index-symbol-container power-index-symbol-container"><middle-base><inline></inline></middle-base><editarea-block class="index-value" style="line-height: 1.2; margin-top: -0.747899em;">B</editarea-block></compositeblock><block class="Normal"> and 𝜎</block><compositeblock dir="ltr" class="power-index-symbol-container power-index-symbol-container has-power"><editarea-block class="power-value" style="line-height: 1.2; margin-top: 0em; margin-bottom: -1.05378em;">2</editarea-block><middle-base><inline></inline></middle-base><editarea-block class="index-value" style="line-height: 1.2; margin-top: -0.60899em; margin-bottom: 0em;">B</editarea-block></compositeblock></line></editarea><span role="presentation" style="width:100%;position:absolute;top:0;left:0;clip:rect(1px, 1px, 1px, 1px);height:1px;padding:1px 0 0 0!important;overflow:hidden;user-select:none;"><math xmlns="http://www.w3.org/1998/Math/MathML"><mstyle displaystyle="true"><mrow><msub><mi>𝜇</mi><mi>B</mi></msub><mspace is="true" width="0.22em"></mspace><mi>a</mi><mi>n</mi><mi>d</mi><mspace is="true" width="0.22em"></mspace><msubsup><mi>𝜎</mi><mi>B</mi><mn>2</mn></msubsup></mrow></mstyle></math></span></compositeblock><block> respectively. </block><compositeblock dir="ltr" class="math-container-symbol role-mathmode-area inline" style="font-size: 17px;" data-mathml="<math xmlns=&quot;http://www.w3.org/1998/Math/MathML&quot;><mstyle displaystyle=&quot;true&quot;><mrow><mi>𝛾</mi><mspace is=&quot;true&quot; width=&quot;0.22em&quot;></mspace><mi>a</mi><mi>n</mi><mi>d</mi><mspace is=&quot;true&quot; width=&quot;0.22em&quot;></mspace><mi>𝛽</mi></mrow></mstyle></math>"><editarea class="math-mode-font no-area-container" style="font-family: Asana-Math, Asana;" aria-hidden="true"><line class="" style="line-height: 1.2;"><baselineblock></baselineblock><block class="Normal">𝛾 and 𝛽</block></line></editarea><span role="presentation" style="width:100%;position:absolute;top:0;left:0;clip:rect(1px, 1px, 1px, 1px);height:1px;padding:1px 0 0 0!important;overflow:hidden;user-select:none;"><math xmlns="http://www.w3.org/1998/Math/MathML"><mstyle displaystyle="true"><mrow><mi>𝛾</mi><mspace is="true" width="0.22em"></mspace><mi>a</mi><mi>n</mi><mi>d</mi><mspace is="true" width="0.22em"></mspace><mi>𝛽</mi></mrow></mstyle></math></span></compositeblock><block> are the scaling and shifting parameters of the batch-norm layer.</block></blocks></line><line class="root text-mode full-line-block-inside" style="line-height: 1.4;"><prefix></prefix><blocks><baselineblock class="inline"></baselineblock><compositeblock dir="ltr" class="math-container-symbol role-mathmode-area display" style="font-size: 17px;" data-mathml="<math display=&quot;block&quot; xmlns=&quot;http://www.w3.org/1998/Math/MathML&quot;><mtable columnwidth=&quot;100%&quot; width=&quot;100%&quot; columnalign=&quot;center&quot;><mtr><mtd><mrow><msub><mi>𝜇</mi><mi>B</mi></msub><mo form=&quot;infix&quot;>=</mo><mfrac><mn>1</mn><mi>m</mi></mfrac><munderover><mo largeop=&quot;true&quot; movablelimit=&quot;true&quot;>∑</mo><mrow><mi>i</mi><mspace is=&quot;true&quot; width=&quot;0.22em&quot;></mspace><mo form=&quot;infix&quot;>=</mo><mspace is=&quot;true&quot; width=&quot;0.22em&quot;></mspace><mn>1</mn></mrow><mi>m</mi></munderover><msub><mi>x</mi><mi>i</mi></msub></mrow></mtd></mtr><mtr><mtd><mrow><msubsup><mi>𝜎</mi><mi>B</mi><mn>2</mn></msubsup><mo form=&quot;infix&quot;>=</mo><mfrac><mn>1</mn><mi>m</mi></mfrac><munderover><mo largeop=&quot;true&quot; movablelimit=&quot;true&quot;>∑</mo><mrow><mi>i</mi><mspace is=&quot;true&quot; width=&quot;0.22em&quot;></mspace><mo form=&quot;infix&quot;>=</mo><mspace is=&quot;true&quot; width=&quot;0.22em&quot;></mspace><mn>1</mn></mrow><mi>m</mi></munderover><mo fence=&quot;true&quot; stretchy=&quot;false&quot;>(</mo><msub><mi>x</mi><mi>i</mi></msub><mo form=&quot;infix&quot;>-</mo><msub><mi>𝜇</mi><mi>B</mi></msub><msup><mo fence=&quot;true&quot; stretchy=&quot;false&quot;>)</mo><mn>2</mn></msup></mrow></mtd></mtr><mtr><mtd><mrow><mover accent=&quot;true&quot;><msub><mi>x</mi><mi>i</mi></msub><mo>^</mo></mover><mo form=&quot;infix&quot;>=</mo><mfrac><mrow><msub><mi>x</mi><mi>i</mi></msub><mo form=&quot;infix&quot;>-</mo><msub><mi>𝜇</mi><mi>B</mi></msub></mrow><msup><msqrt><mrow><msubsup><mi>𝜎</mi><mi>B</mi><mn>2</mn></msubsup><mo form=&quot;infix&quot;>+</mo><mi>𝜖</mi></mrow></msqrt><mrow><mi></mi></mrow></msup></mfrac></mrow></mtd></mtr><mtr><mtd><mrow><msub><mi>y</mi><mi>i</mi></msub><mo form=&quot;infix&quot;>=</mo><mi>𝛾</mi><mover accent=&quot;true&quot;><msub><mi>x</mi><mi>i</mi></msub><mo>^</mo></mover><mspace is=&quot;true&quot; width=&quot;0.22em&quot;></mspace><mo form=&quot;infix&quot;>+</mo><mspace is=&quot;true&quot; width=&quot;0.22em&quot;></mspace><mi>𝛽</mi></mrow></mtd></mtr></mtable></math>"><editarea class="math-mode-font lazy no-area-container" style="font-family: Asana-Math, Asana;" aria-hidden="true"><line class="taggable" style="line-height: 1.2;"><baselineblock></baselineblock><ref-tag data-tag-position="line" class="line-tag automatic" data-tag-id="tid0.6337582151592681" style="font-family: Arial, Helvetica, sans-serif; font-size: 15px;" id="tid0.6337582151592681"><label>(1)</label></ref-tag><block class="Normal">𝜇</block><compositeblock dir="ltr" class="power-index-symbol-container power-index-symbol-container"><middle-base><inline></inline></middle-base><editarea-block class="index-value" style="line-height: 1.2; margin-top: -0.747899em;">B</editarea-block></compositeblock><block class="Relation">=</block><compositeblock dir="ltr" class="fraction-symbol smaller"><editarea-line class=" frac-edit-area enumerator" style="line-height: 1.2; margin-bottom: -0.470588em;"><baselineblock></baselineblock><block class="Normal">1</block></editarea-line><div class="frac-line"><inline style="border-bottom: 1px solid;"></inline></div><editarea-line class=" frac-edit-area denominator" style="margin-bottom: -0.176471em; line-height: 1.2; margin-top: -0.411765em;"><baselineblock></baselineblock><block class="Normal">m</block></editarea-line></compositeblock><compositeblock dir="ltr" class="summation-like-symbol limit-type limit-kind "><editarea class="from no-area-container" style="margin-bottom: -0.470588em;"><line class="" style="margin-bottom: -0.168067em; line-height: 1.2;"><baselineblock></baselineblock><block>m</block></line></editarea><symbol class="" style="font-family: Asana-Math, Asana; font-style: normal; font-weight: normal;"><span>∑</span></symbol><editarea class="to to-summation no-area-container" style="margin-top: 0.117647em;"><line class="" style="line-height: 1.2;"><baselineblock></baselineblock><block>i = 1</block></line></editarea></compositeblock><block class="Normal">x</block><compositeblock dir="ltr" class="power-index-symbol-container power-index-symbol-container"><middle-base><inline></inline></middle-base><editarea-block class="index-value" style="line-height: 1.2; margin-top: -0.747899em;">i</editarea-block></compositeblock></line><line class="taggable" style="line-height: 1.2;"><baselineblock></baselineblock><ref-tag data-tag-position="line" class="line-tag automatic" data-tag-id="tid0.763948744629253" style="font-family: Arial, Helvetica, sans-serif; font-size: 15px;" id="tid0.763948744629253"><label>(2)</label></ref-tag><block class="Normal">𝜎</block><compositeblock dir="ltr" class="power-index-symbol-container power-index-symbol-container has-power"><editarea-block class="power-value" style="line-height: 1.2; margin-top: 0em; margin-bottom: -1.05378em;">2</editarea-block><middle-base><inline></inline></middle-base><editarea-block class="index-value" style="line-height: 1.2; margin-top: -0.60899em; margin-bottom: 0em;">B</editarea-block></compositeblock><block class="Relation">=</block><compositeblock dir="ltr" class="fraction-symbol smaller"><editarea-line class=" frac-edit-area enumerator" style="line-height: 1.2; margin-bottom: -0.470588em;"><baselineblock></baselineblock><block class="Normal">1</block></editarea-line><div class="frac-line"><inline style="border-bottom: 1px solid;"></inline></div><editarea-line class=" frac-edit-area denominator" style="margin-bottom: -0.176471em; line-height: 1.2; margin-top: -0.411765em;"><baselineblock></baselineblock><block class="Normal">m</block></editarea-line></compositeblock><compositeblock dir="ltr" class="summation-like-symbol limit-type limit-kind "><editarea class="from no-area-container" style="margin-bottom: -0.470588em;"><line class="" style="margin-bottom: -0.168067em; line-height: 1.2;"><baselineblock></baselineblock><block>m</block></line></editarea><symbol class="" style="font-family: Asana-Math, Asana; font-style: normal; font-weight: normal;"><span>∑</span></symbol><editarea class="to to-summation no-area-container" style="margin-top: 0.117647em;"><line class="" style="line-height: 1.2;"><baselineblock></baselineblock><block>i = 1</block></line></editarea></compositeblock><opensymbolblock class="normal" type="parenthesis"><bracket-span>(</bracket-span></opensymbolblock><block class="Normal">x</block><compositeblock dir="ltr" class="power-index-symbol-container power-index-symbol-container"><middle-base><inline></inline></middle-base><editarea-block class="index-value" style="line-height: 1.2; margin-top: -0.747899em;">i</editarea-block></compositeblock><block class="Binary">-</block><block class="Normal">𝜇</block><compositeblock dir="ltr" class="power-index-symbol-container power-index-symbol-container"><middle-base><inline></inline></middle-base><editarea-block class="index-value" style="line-height: 1.2; margin-top: -0.747899em;">B</editarea-block></compositeblock><closesymbolblock class="normal" type="parenthesis"><bracket-span>)</bracket-span></closesymbolblock><compositeblock dir="ltr" class="power-index-symbol-container power-index-symbol-container has-power"><editarea-block class="power-value" style="line-height: 1.2; margin-bottom: -1.06571em;">2</editarea-block><middle-base><inline></inline></middle-base></compositeblock></line><line class="taggable" style="line-height: 1.2;"><baselineblock></baselineblock><ref-tag data-tag-position="line" class="line-tag automatic" data-tag-id="tid0.28102549130439536" style="font-family: Arial, Helvetica, sans-serif; font-size: 15px;" id="tid0.28102549130439536"><label>(3)</label></ref-tag><compositeblock dir="ltr" class="wide-hat-symbol ig-ex-br"><symbol style="display: block; width: 100%; position: relative; height: 0.529412em; margin-bottom: -0.176471em;"><svg style="position: absolute; left: 0px; top: 0px; display: block; width: 100%; height: 100%; overflow: visible;"><polyline points="0.00,8.06 6.66,3.62 13.32,8.06" stroke-width="1" fill="none" stroke-linejoin="bevel"></polyline></svg></symbol><editarea class="no-area-container" style="display: inline-flex;"><line class="" style="line-height: 1.2;"><baselineblock></baselineblock><block class="Normal">x</block><compositeblock dir="ltr" class="power-index-symbol-container power-index-symbol-container inline"><middle-base><inline></inline></middle-base><editarea-block class="index-value" style="line-height: 1.2; margin-top: -0.747899em;">i</editarea-block></compositeblock></line></editarea></compositeblock><block class="Relation">=</block><compositeblock dir="ltr" class="fraction-symbol smaller"><editarea-line class=" frac-edit-area enumerator" style="line-height: 1.2; margin-bottom: -0.470588em;"><baselineblock></baselineblock><block class="Normal">x</block><compositeblock dir="ltr" class="power-index-symbol-container power-index-symbol-container inline"><middle-base><inline></inline></middle-base><editarea-block class="index-value" style="line-height: 1.2; margin-top: -0.747899em;">i</editarea-block></compositeblock><block class="Binary">-</block><block class="Normal">𝜇</block><compositeblock dir="ltr" class="power-index-symbol-container power-index-symbol-container inline"><middle-base><inline></inline></middle-base><editarea-block class="index-value" style="line-height: 1.2; margin-top: -0.747899em;">B</editarea-block></compositeblock></editarea-line><div class="frac-line"><inline style="border-bottom: 1px solid;"></inline></div><editarea-line class=" frac-edit-area denominator" style="line-height: 1.2; margin-top: -0.411765em;"><baselineblock></baselineblock><compositeblock dir="ltr" class="sqrt-symbol inline" style="padding-top: 0.235294em;"><sqrt-edit><editarea-line class=" edit-area" style="line-height: 1.2; margin-top: 0.117647em;"><baselineblock></baselineblock><block class="Normal">𝜎</block><compositeblock dir="ltr" class="power-index-symbol-container power-index-symbol-container has-power inline"><editarea-block class="power-value" style="line-height: 1.2; margin-top: 0em; margin-bottom: -1.05378em;">2</editarea-block><middle-base><inline></inline></middle-base><editarea-block class="index-value" style="line-height: 1.2; margin-top: -0.60899em; margin-bottom: -0.168067em;">B</editarea-block></compositeblock><block class="Binary">+</block><block class="Normal">𝜖</block></editarea-line><sqrt-symbol-line><svg style="stroke: none;"><polygon points="0.35142118863049093,13.672472482134204 4.7881136950904395,11.30037945887839 9.53695714341764,21.371598172963612 16.363049095607234,0 61.23333740234375,0 61.23333740234375,1.054263565891475 17.101111079197302,1.054263565891475 9.180878552971576,25.97221408420139 3.0968992248062013,13.23319599634609 0.6369509043927648,14.155676616501129"></polygon></svg></sqrt-symbol-line></sqrt-edit></compositeblock><compositeblock dir="ltr" class="power-index-symbol-container power-index-symbol-container has-power inline"><editarea-block class="power-value" style="line-height: 1.2; margin-bottom: -0.396638em; display: inline-block; height: 1.2em; width: 0.5em; vertical-align: -0.17em;"></editarea-block><middle-base><inline></inline></middle-base></compositeblock></editarea-line></compositeblock></line><line class="taggable" style="line-height: 1.2;"><baselineblock></baselineblock><ref-tag data-tag-position="line" class="line-tag automatic" data-tag-id="tid0.9056724478146658" style="font-family: Arial, Helvetica, sans-serif; font-size: 15px;" id="tid0.9056724478146658"><label>(4)</label></ref-tag><block class="Normal">y</block><compositeblock dir="ltr" class="power-index-symbol-container power-index-symbol-container"><middle-base><inline></inline></middle-base><editarea-block class="index-value" style="line-height: 1.2; margin-top: -0.747899em;">i</editarea-block></compositeblock><block class="Relation">=</block><block class="Normal">𝛾</block><compositeblock dir="ltr" class="wide-hat-symbol ig-ex-br"><symbol style="display: block; width: 100%; position: relative; height: 0.529412em; margin-bottom: -0.176471em;"><svg style="position: absolute; left: 0px; top: 0px; display: block; width: 100%; height: 100%; overflow: visible;"><polyline points="0.00,8.06 6.66,3.62 13.32,8.06" stroke-width="1" fill="none" stroke-linejoin="bevel"></polyline></svg></symbol><editarea class="no-area-container" style="display: inline-flex;"><line class="" style="line-height: 1.2;"><baselineblock></baselineblock><block class="Normal">x</block><compositeblock dir="ltr" class="power-index-symbol-container power-index-symbol-container inline"><middle-base><inline></inline></middle-base><editarea-block class="index-value" style="line-height: 1.2; margin-top: -0.747899em;">i</editarea-block></compositeblock></line></editarea></compositeblock><block class="Normal"> </block><block class="Binary">+</block><block class="Normal"> 𝛽</block></line></editarea><span role="presentation" style="width:100%;position:absolute;top:0;left:0;clip:rect(1px, 1px, 1px, 1px);height:1px;padding:1px 0 0 0!important;overflow:hidden;user-select:none;"><math display="block" xmlns="http://www.w3.org/1998/Math/MathML"><mtable columnwidth="100%" columnalign="center" width="100%"><mtr><mtd><mrow><msub><mi>𝜇</mi><mi>B</mi></msub><mo form="infix">=</mo><mfrac><mn>1</mn><mi>m</mi></mfrac><munderover><mo largeop="true" movablelimit="true">∑</mo><mrow><mi>i</mi><mspace is="true" width="0.22em"></mspace><mo form="infix">=</mo><mspace is="true" width="0.22em"></mspace><mn>1</mn></mrow><mi>m</mi></munderover><msub><mi>x</mi><mi>i</mi></msub></mrow></mtd></mtr><mtr><mtd><mrow><msubsup><mi>𝜎</mi><mi>B</mi><mn>2</mn></msubsup><mo form="infix">=</mo><mfrac><mn>1</mn><mi>m</mi></mfrac><munderover><mo largeop="true" movablelimit="true">∑</mo><mrow><mi>i</mi><mspace is="true" width="0.22em"></mspace><mo form="infix">=</mo><mspace is="true" width="0.22em"></mspace><mn>1</mn></mrow><mi>m</mi></munderover><mo fence="true" stretchy="false">(</mo><msub><mi>x</mi><mi>i</mi></msub><mo form="infix">-</mo><msub><mi>𝜇</mi><mi>B</mi></msub><msup><mo fence="true" stretchy="false">)</mo><mn>2</mn></msup></mrow></mtd></mtr><mtr><mtd><mrow><mover accent="true"><msub><mi>x</mi><mi>i</mi></msub><mo>^</mo></mover><mo form="infix">=</mo><mfrac><mrow><msub><mi>x</mi><mi>i</mi></msub><mo form="infix">-</mo><msub><mi>𝜇</mi><mi>B</mi></msub></mrow><msup><msqrt><mrow><msubsup><mi>𝜎</mi><mi>B</mi><mn>2</mn></msubsup><mo form="infix">+</mo><mi>𝜖</mi></mrow></msqrt><mrow><mi></mi></mrow></msup></mfrac></mrow></mtd></mtr><mtr><mtd><mrow><msub><mi>y</mi><mi>i</mi></msub><mo form="infix">=</mo><mi>𝛾</mi><mover accent="true"><msub><mi>x</mi><mi>i</mi></msub><mo>^</mo></mover><mspace is="true" width="0.22em"></mspace><mo form="infix">+</mo><mspace is="true" width="0.22em"></mspace><mi>𝛽</mi></mrow></mtd></mtr></mtable></math></span></compositeblock></blocks></line><line class="root text-mode" style="line-height: 1.4;"><prefix></prefix><blocks><baselineblock class="inline"></baselineblock><emptyblock aria-label="empty line"> </emptyblock></blocks></line><line class="root text-mode full-line-block-inside" style="line-height: 1.4;"><prefix></prefix><blocks><baselineblock class="inline"></baselineblock><compositeblock dir="ltr" class="math-diagram inline" aria-label="Diagram" role="img"><math-diagram aria-hidden="true" data-amt="diagram" style="height: 181px; z-index: 1;"><clip-region style="width: 100%; height: 100%; display: block; overflow: hidden; position: relative;"><zoom-region><svg><g><defs><pattern id=".7132823348233084" width="10" height="10" patternUnits="userSpaceOnUse"><path d="M 10 0 L 0 0 0 10" fill="none" stroke="lightgray" stroke-width="0.5"></path></pattern></defs><rect width="100%" height="100%" fill="url(#.7132823348233084)" stroke="lightgray" stroke-width="0.5"></rect></g></svg><div class="diagram-plotly-layer" style="position: absolute; inset: 0px; pointer-events: none; fill: none; stroke: none;"><svg style="overflow:visible;position:absolute;left:0;top:0;"></svg></div><svg class="role-diagram-draw-area"><g class="shapes-region" style="stroke: black; fill: none;"><g class="composite-shape"><path class="real" d=" M141,47 L152.5,47 L152.5,137.2 L141,137.2 Z" style="stroke-width: 1px; stroke: rgb(0, 0, 0); fill: none; fill-opacity: 1;"></path></g><g class="composite-shape"><path class="real" d=" M302,47 L313.5,47 L313.5,137.2 L302,137.2 Z" style="stroke-width: 1px; stroke: rgb(0, 0, 0); fill: none; fill-opacity: 1;"></path></g><g class="composite-shape"><path class="real" d=" M461,47 L472.5,47 L472.5,137.2 L461,137.2 Z" style="stroke-width: 1px; stroke: rgb(0, 0, 0); fill: none; fill-opacity: 1;"></path></g><g></g></g><g><g class="connection-group"><g class="arrow-line"><path class="connection real" stroke-dasharray="" d="  M223.04,76 L248.67,47.14" style="stroke: rgb(0, 0, 0); stroke-width: 1px; fill: none; fill-opacity: 1;"></path><g stroke="#000" transform="matrix(-0.6639262126522422,0.7477980904985314,-0.7477980904985314,-0.6639262126522422,250,45.64077669902912)" style="stroke: rgb(0, 0, 0); stroke-width: 1px;"><path d=" M10.93,-3.29 Q4.96,-0.45 0,0 Q4.96,0.45 10.93,3.29"></path></g></g></g><g class="connection-group"><g class="arrow-line"><path class="connection real" stroke-dasharray="" d="  M276,26.96 L302.09,18.86" style="stroke: rgb(0, 0, 0); stroke-width: 1px; fill: none; fill-opacity: 1;"></path><g stroke="#000" transform="matrix(-0.9549681736431398,0.2967082528826693,-0.2967082528826693,-0.9549681736431398,304,18.262135922330096)" style="stroke: rgb(0, 0, 0); stroke-width: 1px;"><path d=" M10.93,-3.29 Q4.96,-0.45 0,0 Q4.96,0.45 10.93,3.29"></path></g></g></g><g class="connection-group"><g class="arrow-line"><path class="connection real" stroke-dasharray="" d="  M225,79.3 L302.38,23.71" style="stroke: rgb(0, 0, 0); stroke-width: 1px; fill: none; fill-opacity: 1;"></path><g stroke="#000" transform="matrix(-0.8120835268918059,0.583541211356118,-0.583541211356118,-0.8120835268918059,304,22.543689320388353)" style="stroke: rgb(0, 0, 0); stroke-width: 1px;"><path d=" M10.93,-3.29 Q4.96,-0.45 0,0 Q4.96,0.45 10.93,3.29"></path></g></g></g><g class="connection-group"><g class="arrow-line"><path class="connection real" stroke-dasharray="" d="  M325,15.82 L456.01,26.03" style="stroke: rgb(0, 0, 0); stroke-width: 1px; fill: none; fill-opacity: 1;"></path><g stroke="#000" transform="matrix(-0.9969718655679232,-0.07776309707062173,0.07776309707062173,-0.9969718655679232,458,26.181818181818187)" style="stroke: rgb(0, 0, 0); stroke-width: 1px;"><path d=" M10.93,-3.29 Q4.96,-0.45 0,0 Q4.96,0.45 10.93,3.29"></path></g></g></g><g class="connection-group"><g class="arrow-line"><path class="connection real" stroke-dasharray="" d="  M383,65 L456.17,32.48" style="stroke: rgb(0, 0, 0); stroke-width: 1px; fill: none; fill-opacity: 1;"></path><g stroke="#000" transform="matrix(-0.9138291907384626,0.40609876896425895,-0.40609876896425895,-0.9138291907384626,457.99999999999994,31.66666666666667)" style="stroke: rgb(0, 0, 0); stroke-width: 1px;"><path d=" M10.93,-3.29 Q4.96,-0.45 0,0 Q4.96,0.45 10.93,3.29"></path></g></g></g><g class="connection-group"><g class="arrow-line"><path class="connection real" stroke-dasharray="" d="  M382,109.42 L456.55,38.38" style="stroke: rgb(0, 0, 0); stroke-width: 1px; fill: none; fill-opacity: 1;"></path><g stroke="#000" transform="matrix(-0.7239310946907973,0.6898722853831598,-0.6898722853831598,-0.7239310946907973,458,37.00523560209422)" style="stroke: rgb(0, 0, 0); stroke-width: 1px;"><path d=" M10.93,-3.29 Q4.96,-0.45 0,0 Q4.96,0.45 10.93,3.29"></path></g></g></g><g class="connection-group"><g class="arrow-line"><path class="connection real" stroke-dasharray="" d="  M159,27.37 L248,30.48" style="stroke: rgb(0, 0, 0); stroke-width: 1px; fill: none; fill-opacity: 1;"></path><g stroke="#000" transform="matrix(-0.9993908270190958,-0.0348994967025009,0.0348994967025009,-0.9993908270190958,250,30.545851528384276)" style="stroke: rgb(0, 0, 0); stroke-width: 1px;"><path d=" M10.93,-3.29 Q4.96,-0.45 0,0 Q4.96,0.45 10.93,3.29"></path></g></g></g><g class="connection-group"><g class="arrow-line"><path class="connection real" stroke-dasharray="" d="  M159,37.33 L196.86,74.6" style="stroke: rgb(0, 0, 0); stroke-width: 1px; fill: none; fill-opacity: 1;"></path><g stroke="#000" transform="matrix(-0.7127609484023376,-0.7014070362012347,0.7014070362012347,-0.7127609484023376,198.29032258064518,75.99999999999997)" style="stroke: rgb(0, 0, 0); stroke-width: 1px;"><path d=" M10.93,-3.29 Q4.96,-0.45 0,0 Q4.96,0.45 10.93,3.29"></path></g></g></g><g class="connection-group"><g class="arrow-line"><path class="connection real" stroke-dasharray="" d="  M159,26.24 L302.01,15.9" style="stroke: rgb(0, 0, 0); stroke-width: 1px; fill: none; fill-opacity: 1;"></path><g stroke="#000" transform="matrix(-0.9974032102313196,0.0720196932807824,-0.0720196932807824,-0.9974032102313196,304.00000000000006,15.759036144578314)" style="stroke: rgb(0, 0, 0); stroke-width: 1px;"><path d=" M10.93,-3.29 Q4.96,-0.45 0,0 Q4.96,0.45 10.93,3.29"></path></g></g></g></g><g></g><g></g></svg><diagram-editors><position-container data-rotation="0" data-skewx="0" data-flipx="false" data-anchor="left-top" style="left: 139px; top: 15px;"><dg-editor-container data-editor-id="de28842225746743255" class="no-border-on-print math-diagram-editor" style="border: 1px solid transparent; transform: translate(0%); font-size: 17px; font-family: Asana-Math, Asana;"><editarea class="diagram-editor non-wrap no-area-container" style="font-size: 1em;"><line class="" style="line-height: 1.2;"><baselineblock></baselineblock><block class="Normal">x</block><compositeblock dir="ltr" class="power-index-symbol-container power-index-symbol-container inline"><middle-base><inline></inline></middle-base><editarea-block class="index-value" style="line-height: 1.2; margin-top: -0.747899em;">i</editarea-block></compositeblock></line></editarea></dg-editor-container></position-container><position-container data-rotation="0" data-skewx="0" data-flipx="false" data-anchor="left-top" style="left: 305px; top: 0px;"><dg-editor-container data-editor-id="de8392701620026595" class="no-border-on-print math-diagram-editor" style="border: 1px solid transparent; transform: translate(0%); font-size: 17px; font-family: Asana-Math, Asana;"><editarea class="diagram-editor non-wrap no-area-container" style="font-size: 1em;"><line class="" style="line-height: 1.2;"><baselineblock></baselineblock><compositeblock dir="ltr" class="wide-hat-symbol ig-ex-br inline"><symbol style="display: block; width: 100%; position: relative; height: 0.529412em; margin-bottom: -0.176471em;"><svg style="position: absolute; left: 0px; top: 0px; display: block; width: 100%; height: 100%; overflow: visible;"><polyline points="0.00,8.06 6.66,3.62 13.32,8.06" stroke-width="1" fill="none" stroke-linejoin="bevel"></polyline></svg></symbol><editarea class="no-area-container" style="display: inline-flex;"><line class="" style="line-height: 1.2;"><baselineblock></baselineblock><block class="Normal">x</block><compositeblock dir="ltr" class="power-index-symbol-container power-index-symbol-container inline"><middle-base><inline></inline></middle-base><editarea-block class="index-value" style="line-height: 1.2; margin-top: -0.747899em;">i</editarea-block></compositeblock></line></editarea></compositeblock></line></editarea></dg-editor-container></position-container><position-container data-rotation="0" data-skewx="0" data-flipx="false" data-anchor="left-top" style="left: 199px; top: 77px;"><dg-editor-container data-editor-id="de2541509240238702" class="no-border-on-print math-diagram-editor" style="border: 1px solid transparent; transform: translate(0%); font-size: 17px; font-family: Asana-Math, Asana;"><editarea class="diagram-editor non-wrap no-area-container" style="font-size: 1em;"><line class="" style="line-height: 1.2;"><baselineblock></baselineblock><block class="Normal">𝜇</block><compositeblock dir="ltr" class="power-index-symbol-container power-index-symbol-container inline"><middle-base><inline></inline></middle-base><editarea-block class="index-value" style="line-height: 1.2; margin-top: -0.747899em;">B</editarea-block></compositeblock></line></editarea></dg-editor-container></position-container><position-container data-rotation="0" data-skewx="0" data-flipx="false" data-anchor="left-top" style="left: 251px; top: 17px;"><dg-editor-container data-editor-id="de58014489777705" class="no-border-on-print math-diagram-editor" style="border: 1px solid transparent; transform: translate(0%); font-size: 17px; font-family: Asana-Math, Asana;"><editarea class="diagram-editor non-wrap no-area-container" style="font-size: 1em;"><line class="" style="line-height: 1.2;"><baselineblock></baselineblock><block class="Normal">𝜎</block><compositeblock dir="ltr" class="power-index-symbol-container power-index-symbol-container has-power inline"><editarea-block class="power-value" style="line-height: 1.2; margin-top: 0em; margin-bottom: -1.05378em;">2</editarea-block><middle-base><inline></inline></middle-base><editarea-block class="index-value" style="line-height: 1.2; margin-top: -0.60899em; margin-bottom: 0em;">B</editarea-block></compositeblock></line></editarea></dg-editor-container></position-container><position-container data-rotation="0" data-skewx="0" data-flipx="false" data-anchor="left-top" style="left: 365px; top: 107px;"><dg-editor-container data-editor-id="de790353900271701" class="no-border-on-print math-diagram-editor" style="border: 1px solid transparent; transform: translate(0%); font-size: 17px; font-family: Asana-Math, Asana;"><editarea class="diagram-editor non-wrap no-area-container" style="font-size: 1em;"><line class="" style="line-height: 1.2;"><baselineblock></baselineblock><block class="Normal">𝛾</block></line></editarea></dg-editor-container></position-container><position-container data-rotation="0" data-skewx="0" data-flipx="false" data-anchor="left-top" style="left: 366px; top: 58px;"><dg-editor-container data-editor-id="de8918882901993471" class="no-border-on-print math-diagram-editor" style="border: 1px solid transparent; transform: translate(0%); font-size: 17px; font-family: Asana-Math, Asana;"><editarea class="diagram-editor non-wrap no-area-container" style="font-size: 1em;"><line class="" style="line-height: 1.2;"><baselineblock></baselineblock><block class="Normal">𝛽</block></line></editarea></dg-editor-container></position-container><position-container data-rotation="0" data-skewx="0" data-flipx="false" data-anchor="left-top" style="left: 459px; top: 15px;"><dg-editor-container data-editor-id="de6502708879090391" class="no-border-on-print math-diagram-editor" style="border: 1px solid transparent; transform: translate(0%); font-size: 17px; font-family: Asana-Math, Asana;"><editarea class="diagram-editor non-wrap no-area-container" style="font-size: 1em;"><line class="" style="line-height: 1.2;"><baselineblock></baselineblock><block class="Normal">y</block><compositeblock dir="ltr" class="power-index-symbol-container power-index-symbol-container inline"><middle-base><inline></inline></middle-base><editarea-block class="index-value" style="line-height: 1.2; margin-top: -0.747899em;">i</editarea-block></compositeblock></line></editarea></dg-editor-container></position-container></diagram-editors></zoom-region><svg style="position: absolute; width: 100%; height: 100%; overflow: visible; left: 0px; top: 0px; pointer-events: none;"></svg></clip-region></math-diagram></compositeblock></blocks></line><line class="root text-mode" style="line-height: 1.4;"><prefix></prefix><blocks><baselineblock class="inline"></baselineblock><emptyblock aria-label="empty line"> </emptyblock></blocks></line><line class="root text-mode" style="line-height: 1.4;"><prefix></prefix><blocks><baselineblock class="inline"></baselineblock><compositeblock dir="ltr" class="math-container-symbol role-mathmode-area inline" style="font-size: 17px;" data-mathml="<math xmlns=&quot;http://www.w3.org/1998/Math/MathML&quot;><mstyle displaystyle=&quot;true&quot;><mrow><mi>B</mi><mi>a</mi><mi>c</mi><mi>k</mi><mspace is=&quot;true&quot; width=&quot;0.22em&quot;></mspace><mi>P</mi><mi>r</mi><mi>o</mi><mi>p</mi><mi>a</mi><mi>g</mi><mi>a</mi><mi>t</mi><mi>i</mi><mi>o</mi><mi>n</mi></mrow></mstyle></math>"><editarea class="math-mode-font no-area-container" style="font-family: Asana-Math, Asana;" aria-hidden="true"><line class="" style="line-height: 1.2;"><baselineblock></baselineblock><block class="Normal">Back Propagation</block></line></editarea><span role="presentation" style="width:100%;position:absolute;top:0;left:0;clip:rect(1px, 1px, 1px, 1px);height:1px;padding:1px 0 0 0!important;overflow:hidden;user-select:none;"><math xmlns="http://www.w3.org/1998/Math/MathML"><mstyle displaystyle="true"><mrow><mi>B</mi><mi>a</mi><mi>c</mi><mi>k</mi><mspace is="true" width="0.22em"></mspace><mi>P</mi><mi>r</mi><mi>o</mi><mi>p</mi><mi>a</mi><mi>g</mi><mi>a</mi><mi>t</mi><mi>i</mi><mi>o</mi><mi>n</mi></mrow></mstyle></math></span></compositeblock><block>:</block></blocks></line><line class="root text-mode" style="line-height: 1.4;"><prefix></prefix><blocks><baselineblock class="inline"></baselineblock><block>Let us consider that we have </block><compositeblock dir="ltr" class="math-container-symbol role-mathmode-area inline" style="font-size: 17px;" data-mathml="<math xmlns=&quot;http://www.w3.org/1998/Math/MathML&quot;><mstyle displaystyle=&quot;true&quot;><mfrac><mrow><mi>∂</mi><mi>l</mi></mrow><mrow><mi>∂</mi><msub><mi>y</mi><mi>i</mi></msub></mrow></mfrac></mstyle></math>"><editarea class="math-mode-font no-area-container" style="font-family: Asana-Math, Asana;" aria-hidden="true"><line class="" style="line-height: 1.2;"><baselineblock></baselineblock><compositeblock dir="ltr" class="fraction-symbol smaller"><editarea-line class=" frac-edit-area enumerator" style="line-height: 1.2; margin-bottom: -0.470588em;"><baselineblock></baselineblock><block class="Normal">∂l</block></editarea-line><div class="frac-line"><inline style="border-bottom: 1px solid;"></inline></div><editarea-line class=" frac-edit-area denominator" style="line-height: 1.2; margin-top: -0.411765em;"><baselineblock></baselineblock><block class="Normal">∂y</block><compositeblock dir="ltr" class="power-index-symbol-container power-index-symbol-container inline"><middle-base><inline></inline></middle-base><editarea-block class="index-value" style="line-height: 1.2; margin-top: -0.747899em;">i</editarea-block></compositeblock></editarea-line></compositeblock></line></editarea><span role="presentation" style="width:100%;position:absolute;top:0;left:0;clip:rect(1px, 1px, 1px, 1px);height:1px;padding:1px 0 0 0!important;overflow:hidden;user-select:none;"><math xmlns="http://www.w3.org/1998/Math/MathML"><mstyle displaystyle="true"><mfrac><mrow><mi>∂</mi><mi>l</mi></mrow><mrow><mi>∂</mi><msub><mi>y</mi><mi>i</mi></msub></mrow></mfrac></mstyle></math></span></compositeblock><block> flowing upstream into our network. We will back-prop into every parameter in the batch-norm with the help of chain rule. For our convenience we will replace </block><compositeblock dir="ltr" class="math-container-symbol role-mathmode-area inline" style="font-size: 17px;" data-mathml="<math xmlns=&quot;http://www.w3.org/1998/Math/MathML&quot;><mstyle displaystyle=&quot;true&quot;><mfrac><mrow><mi>∂</mi><mi>l</mi></mrow><mrow><mi>∂</mi><mi>a</mi></mrow></mfrac></mstyle></math>"><editarea class="math-mode-font no-area-container" style="font-family: Asana-Math, Asana;" aria-hidden="true"><line class="" style="line-height: 1.2;"><baselineblock></baselineblock><compositeblock dir="ltr" class="fraction-symbol smaller"><editarea-line class=" frac-edit-area enumerator" style="line-height: 1.2; margin-bottom: -0.470588em;"><baselineblock></baselineblock><block class="Normal">∂l</block></editarea-line><div class="frac-line"><inline style="border-bottom: 1px solid;"></inline></div><editarea-line class=" frac-edit-area denominator" style="margin-bottom: -0.176471em; line-height: 1.2; margin-top: -0.411765em;"><baselineblock></baselineblock><block class="Normal">∂a</block></editarea-line></compositeblock></line></editarea><span role="presentation" style="width:100%;position:absolute;top:0;left:0;clip:rect(1px, 1px, 1px, 1px);height:1px;padding:1px 0 0 0!important;overflow:hidden;user-select:none;"><math xmlns="http://www.w3.org/1998/Math/MathML"><mstyle displaystyle="true"><mfrac><mrow><mi>∂</mi><mi>l</mi></mrow><mrow><mi>∂</mi><mi>a</mi></mrow></mfrac></mstyle></math></span></compositeblock><block> where a is any parameter, with </block><compositeblock dir="ltr" class="math-container-symbol role-mathmode-area inline" style="font-size: 17px;" data-mathml="<math xmlns=&quot;http://www.w3.org/1998/Math/MathML&quot;><mstyle displaystyle=&quot;true&quot;><mrow><mi>d</mi><mi>a</mi></mrow></mstyle></math>"><editarea class="math-mode-font no-area-container" style="font-family: Asana-Math, Asana;" aria-hidden="true"><line class="" style="line-height: 1.2;"><baselineblock></baselineblock><block class="Normal">da</block></line></editarea><span role="presentation" style="width:100%;position:absolute;top:0;left:0;clip:rect(1px, 1px, 1px, 1px);height:1px;padding:1px 0 0 0!important;overflow:hidden;user-select:none;"><math xmlns="http://www.w3.org/1998/Math/MathML"><mstyle displaystyle="true"><mrow><mi>d</mi><mi>a</mi></mrow></mstyle></math></span></compositeblock><block>.</block></blocks></line><line class="root text-mode" style="line-height: 1.4;"><prefix></prefix><blocks><baselineblock class="inline"></baselineblock><emptyblock aria-label="empty line"> </emptyblock></blocks></line><line class="root text-mode full-line-block-inside" style="line-height: 1.4;"><prefix></prefix><blocks><baselineblock class="inline"></baselineblock><compositeblock dir="ltr" class="math-diagram inline" aria-label="Diagram" role="img"><math-diagram aria-hidden="true" data-amt="diagram" style="height: 181px; z-index: 1;"><clip-region style="width: 100%; height: 100%; display: block; overflow: hidden; position: relative;"><zoom-region><svg><g><defs><pattern id=".5423297571507428" width="10" height="10" patternUnits="userSpaceOnUse"><path d="M 10 0 L 0 0 0 10" fill="none" stroke="lightgray" stroke-width="0.5"></path></pattern></defs><rect width="100%" height="100%" fill="url(#.5423297571507428)" stroke="lightgray" stroke-width="0.5"></rect></g></svg><div class="diagram-plotly-layer" style="position: absolute; inset: 0px; pointer-events: none; fill: none; stroke: none;"><svg style="overflow:visible;position:absolute;left:0;top:0;"></svg></div><svg class="role-diagram-draw-area"><g class="shapes-region" style="stroke: black; fill: none;"><g class="composite-shape"><path class="real" d=" M141,47 L152.5,47 L152.5,137.2 L141,137.2 Z" style="stroke-width: 1px; stroke: rgb(0, 0, 0); fill: none; fill-opacity: 1;"></path></g><g class="composite-shape"><path class="real" d=" M302,47 L313.5,47 L313.5,137.2 L302,137.2 Z" style="stroke-width: 1px; stroke: rgb(0, 0, 0); fill: none; fill-opacity: 1;"></path></g><g class="composite-shape"><path class="real" d=" M461,47 L472.5,47 L472.5,137.2 L461,137.2 Z" style="stroke-width: 1px; stroke: rgb(0, 0, 0); fill: none; fill-opacity: 1;"></path></g><g class="arrow-line"><path class="connection real" stroke-dasharray="" d="  M546.5,92.03 L502.5,92.03" style="stroke: rgb(211, 34, 34); stroke-opacity: 1; stroke-width: 1px; fill: rgb(255, 255, 255); fill-opacity: 1;"></path><g stroke="rgb(211,34,34)" stroke-opacity="1" transform="matrix(1,-2.4492935982947064e-16,2.4492935982947064e-16,1,500.5,92.0333251953125)" style="stroke: rgb(211, 34, 34); stroke-width: 1px;"><path d=" M10.93,-3.29 Q4.96,-0.45 0,0 Q4.96,0.45 10.93,3.29"></path></g></g><g></g></g><g><g class="connection-group"><g class="arrow-line"><path class="connection real" stroke-dasharray="" d="  M223.04,76 L248.67,47.14" style="stroke: rgb(0, 0, 0); stroke-width: 1px; fill: none; fill-opacity: 1;"></path><g stroke="#000" transform="matrix(-0.6639262126522422,0.7477980904985314,-0.7477980904985314,-0.6639262126522422,250,45.64077669902912)" style="stroke: rgb(0, 0, 0); stroke-width: 1px;"><path d=" M10.93,-3.29 Q4.96,-0.45 0,0 Q4.96,0.45 10.93,3.29"></path></g></g></g><g class="connection-group"><g class="arrow-line"><path class="connection real" stroke-dasharray="" d="  M276,27.49 L295.07,22.35" style="stroke: rgb(0, 0, 0); stroke-width: 1px; fill: none; fill-opacity: 1;"></path><g stroke="#000" transform="matrix(-0.9655180827879265,0.26033599791332507,-0.26033599791332507,-0.9655180827879265,297,21.831460674157306)" style="stroke: rgb(0, 0, 0); stroke-width: 1px;"><path d=" M10.93,-3.29 Q4.96,-0.45 0,0 Q4.96,0.45 10.93,3.29"></path></g></g></g><g class="connection-group"><g class="arrow-line"><path class="connection real" stroke-dasharray="" d="  M225,79.16 L295.38,27.83" style="stroke: rgb(0, 0, 0); stroke-width: 1px; fill: none; fill-opacity: 1;"></path><g stroke="#000" transform="matrix(-0.8079898838980304,0.5891963573533423,-0.5891963573533423,-0.8079898838980304,297,26.65625)" style="stroke: rgb(0, 0, 0); stroke-width: 1px;"><path d=" M10.93,-3.29 Q4.96,-0.45 0,0 Q4.96,0.45 10.93,3.29"></path></g></g></g><g class="connection-group"><g class="arrow-line"><path class="connection real" stroke-dasharray="" d="  M318,19.52 L456,26.38" style="stroke: rgb(0, 0, 0); stroke-width: 1px; fill: none; fill-opacity: 1;"></path><g stroke="#000" transform="matrix(-0.9987717903683445,-0.049547056062007475,0.049547056062007475,-0.9987717903683445,458.00000000000006,26.47826086956521)" style="stroke: rgb(0, 0, 0); stroke-width: 1px;"><path d=" M10.93,-3.29 Q4.96,-0.45 0,0 Q4.96,0.45 10.93,3.29"></path></g></g></g><g class="connection-group"><g class="arrow-line"><path class="connection real" stroke-dasharray="" d="  M385,65.82 L456.19,32.72" style="stroke: rgb(0, 0, 0); stroke-width: 1px; fill: none; fill-opacity: 1;"></path><g stroke="#000" transform="matrix(-0.9068234361295451,0.4215106827664098,-0.4215106827664098,-0.9068234361295451,457.99999999999994,31.881081081081078)" style="stroke: rgb(0, 0, 0); stroke-width: 1px;"><path d=" M10.93,-3.29 Q4.96,-0.45 0,0 Q4.96,0.45 10.93,3.29"></path></g></g></g><g class="connection-group"><g class="arrow-line"><path class="connection real" stroke-dasharray="" d="  M383,100.29 L456.48,37.3" style="stroke: rgb(0, 0, 0); stroke-width: 1px; fill: none; fill-opacity: 1;"></path><g stroke="#000" transform="matrix(-0.7592713073348804,0.6507742172658515,-0.6507742172658515,-0.7592713073348804,458,36)" style="stroke: rgb(0, 0, 0); stroke-width: 1px;"><path d=" M10.93,-3.29 Q4.96,-0.45 0,0 Q4.96,0.45 10.93,3.29"></path></g></g></g><g class="connection-group"><g class="arrow-line"><path class="connection real" stroke-dasharray="" d="  M159,27.37 L248,30.48" style="stroke: rgb(0, 0, 0); stroke-width: 1px; fill: none; fill-opacity: 1;"></path><g stroke="#000" transform="matrix(-0.9993908270190958,-0.0348994967025009,0.0348994967025009,-0.9993908270190958,250,30.545851528384276)" style="stroke: rgb(0, 0, 0); stroke-width: 1px;"><path d=" M10.93,-3.29 Q4.96,-0.45 0,0 Q4.96,0.45 10.93,3.29"></path></g></g></g><g class="connection-group"><g class="arrow-line"><path class="connection real" stroke-dasharray="" d="  M159,37.33 L196.86,74.6" style="stroke: rgb(0, 0, 0); stroke-width: 1px; fill: none; fill-opacity: 1;"></path><g stroke="#000" transform="matrix(-0.7127609484023376,-0.7014070362012347,0.7014070362012347,-0.7127609484023376,198.29032258064518,75.99999999999997)" style="stroke: rgb(0, 0, 0); stroke-width: 1px;"><path d=" M10.93,-3.29 Q4.96,-0.45 0,0 Q4.96,0.45 10.93,3.29"></path></g></g></g><g class="connection-group"><g class="arrow-line"><path class="connection real" stroke-dasharray="" d="  M159,26.47 L295,19.63" style="stroke: rgb(0, 0, 0); stroke-width: 1px; fill: none; fill-opacity: 1;"></path><g stroke="#000" transform="matrix(-0.9987369566060175,0.05024431817977035,-0.05024431817977035,-0.9987369566060175,296.99999999999994,19.52830188679245)" style="stroke: rgb(0, 0, 0); stroke-width: 1px;"><path d=" M10.93,-3.29 Q4.96,-0.45 0,0 Q4.96,0.45 10.93,3.29"></path></g></g></g></g><g></g><g></g></svg><diagram-editors><position-container data-rotation="0" data-skewx="0" data-flipx="false" data-anchor="left-top" style="left: 139px; top: 15px;"><dg-editor-container data-editor-id="de8359610681687613" class="no-border-on-print math-diagram-editor" style="border: 1px solid transparent; transform: translate(0%); font-size: 17px; font-family: Asana-Math, Asana;"><editarea class="diagram-editor non-wrap no-area-container" style="font-size: 1em;"><line class="" style="line-height: 1.2;"><baselineblock></baselineblock><block class="Normal">x</block><compositeblock dir="ltr" class="power-index-symbol-container power-index-symbol-container inline"><middle-base><inline></inline></middle-base><editarea-block class="index-value" style="line-height: 1.2; margin-top: -0.747899em;">i</editarea-block></compositeblock></line></editarea></dg-editor-container></position-container><position-container data-rotation="0" data-skewx="0" data-flipx="false" data-anchor="left-top" style="left: 298px; top: 4px;"><dg-editor-container data-editor-id="de49080482550293647" class="no-border-on-print math-diagram-editor" style="border: 1px solid transparent; transform: translate(0%); font-size: 17px; font-family: Asana-Math, Asana;"><editarea class="diagram-editor non-wrap no-area-container" style="font-size: 1em;"><line class="" style="line-height: 1.2;"><baselineblock></baselineblock><compositeblock dir="ltr" class="wide-hat-symbol ig-ex-br inline"><symbol style="display: block; width: 100%; position: relative; height: 0.529412em; margin-bottom: -0.176471em;"><svg style="position: absolute; left: 0px; top: 0px; display: block; width: 100%; height: 100%; overflow: visible;"><polyline points="0.00,8.06 6.66,3.62 13.32,8.06" stroke-width="1" fill="none" stroke-linejoin="bevel"></polyline></svg></symbol><editarea class="no-area-container" style="display: inline-flex;"><line class="" style="line-height: 1.2;"><baselineblock></baselineblock><block class="Normal">x</block><compositeblock dir="ltr" class="power-index-symbol-container power-index-symbol-container inline"><middle-base><inline></inline></middle-base><editarea-block class="index-value" style="line-height: 1.2; margin-top: -0.747899em;">i</editarea-block></compositeblock></line></editarea></compositeblock></line></editarea></dg-editor-container></position-container><position-container data-rotation="0" data-skewx="0" data-flipx="false" data-anchor="left-top" style="left: 199px; top: 77px;"><dg-editor-container data-editor-id="de9171595786950287" class="no-border-on-print math-diagram-editor" style="border: 1px solid transparent; transform: translate(0%); font-size: 17px; font-family: Asana-Math, Asana;"><editarea class="diagram-editor non-wrap no-area-container" style="font-size: 1em;"><line class="" style="line-height: 1.2;"><baselineblock></baselineblock><block class="Normal">𝜇</block><compositeblock dir="ltr" class="power-index-symbol-container power-index-symbol-container inline"><middle-base><inline></inline></middle-base><editarea-block class="index-value" style="line-height: 1.2; margin-top: -0.747899em;">B</editarea-block></compositeblock></line></editarea></dg-editor-container></position-container><position-container data-rotation="0" data-skewx="0" data-flipx="false" data-anchor="left-top" style="left: 251px; top: 17px;"><dg-editor-container data-editor-id="de7726131807977585" class="no-border-on-print math-diagram-editor" style="border: 1px solid transparent; transform: translate(0%); font-size: 17px; font-family: Asana-Math, Asana;"><editarea class="diagram-editor non-wrap no-area-container" style="font-size: 1em;"><line class="" style="line-height: 1.2;"><baselineblock></baselineblock><block class="Normal">𝜎</block><compositeblock dir="ltr" class="power-index-symbol-container power-index-symbol-container has-power inline"><editarea-block class="power-value" style="line-height: 1.2; margin-top: 0em; margin-bottom: -1.05378em;">2</editarea-block><middle-base><inline></inline></middle-base><editarea-block class="index-value" style="line-height: 1.2; margin-top: -0.60899em; margin-bottom: 0em;">B</editarea-block></compositeblock></line></editarea></dg-editor-container></position-container><position-container data-rotation="0" data-skewx="0" data-flipx="false" data-anchor="left-top" style="left: 366px; top: 97px;"><dg-editor-container data-editor-id="de12282396367228565" class="no-border-on-print math-diagram-editor" style="border: 1px solid transparent; transform: translate(0%); font-size: 17px; font-family: Asana-Math, Asana;"><editarea class="diagram-editor non-wrap no-area-container" style="font-size: 1em;"><line class="" style="line-height: 1.2;"><baselineblock></baselineblock><block class="Normal">𝛾</block></line></editarea></dg-editor-container></position-container><position-container data-rotation="0" data-skewx="0" data-flipx="false" data-anchor="left-top" style="left: 368px; top: 59px;"><dg-editor-container data-editor-id="de4772731418211441" class="no-border-on-print math-diagram-editor" style="border: 1px solid transparent; transform: translate(0%); font-size: 17px; font-family: Asana-Math, Asana;"><editarea class="diagram-editor non-wrap no-area-container" style="font-size: 1em;"><line class="" style="line-height: 1.2;"><baselineblock></baselineblock><block class="Normal">𝛽</block></line></editarea></dg-editor-container></position-container><position-container data-rotation="0" data-skewx="0" data-flipx="false" data-anchor="left-top" style="left: 459px; top: 15px;"><dg-editor-container data-editor-id="de26550466307096254" class="no-border-on-print math-diagram-editor" style="border: 1px solid transparent; transform: translate(0%); font-size: 17px; font-family: Asana-Math, Asana;"><editarea class="diagram-editor non-wrap no-area-container" style="font-size: 1em;"><line class="" style="line-height: 1.2;"><baselineblock></baselineblock><block class="Normal">y</block><compositeblock dir="ltr" class="power-index-symbol-container power-index-symbol-container inline"><middle-base><inline></inline></middle-base><editarea-block class="index-value" style="line-height: 1.2; margin-top: -0.747899em;">i</editarea-block></compositeblock></line></editarea></dg-editor-container></position-container><position-container data-rotation="0" data-skewx="0" data-flipx="false" data-anchor="left-top" style="left: 511px; top: 61px;"><dg-editor-container data-editor-id="de9957549184212635" class="no-border-on-print math-diagram-editor" style="border: 1px solid transparent; transform: translate(0%); font-size: 17px; font-family: Asana-Math, Asana;"><editarea class="diagram-editor non-wrap no-area-container" style="font-size: 1em;"><line class="" style="line-height: 1.2;"><baselineblock></baselineblock><block class="Normal">dy</block><compositeblock dir="ltr" class="power-index-symbol-container power-index-symbol-container inline"><middle-base><inline></inline></middle-base><editarea-block class="index-value" style="line-height: 1.2; margin-top: -0.747899em;">i</editarea-block></compositeblock></line></editarea></dg-editor-container></position-container></diagram-editors></zoom-region><svg style="position: absolute; width: 100%; height: 100%; overflow: visible; left: 0px; top: 0px; pointer-events: none;"></svg></clip-region></math-diagram></compositeblock></blocks></line><line class="root text-mode" style="line-height: 1.4;"><prefix></prefix><blocks><baselineblock class="inline"></baselineblock><emptyblock aria-label="empty line"> </emptyblock></blocks></line><line class="root text-mode full-line-block-inside" style="line-height: 1.4;"><prefix></prefix><blocks><baselineblock class="inline"></baselineblock><compositeblock dir="ltr" class="math-container-symbol role-mathmode-area display" style="font-size: 17px;" data-mathml="<math display=&quot;block&quot; xmlns=&quot;http://www.w3.org/1998/Math/MathML&quot;><mtable columnwidth=&quot;100%&quot; width=&quot;100%&quot; columnalign=&quot;center&quot;><mtr><mtd><mrow><mi>D</mi><mi>i</mi><mi>f</mi><mi>f</mi><mspace is=&quot;true&quot; width=&quot;0.22em&quot;></mspace><mo fence=&quot;true&quot; stretchy=&quot;false&quot;>(</mo><mn>4</mn><mo fence=&quot;true&quot; stretchy=&quot;false&quot;>)</mo><mspace is=&quot;true&quot; width=&quot;0.22em&quot;></mspace><mi>w</mi><mi>r</mi><mi>t</mi><mspace is=&quot;true&quot; width=&quot;0.22em&quot;></mspace><mover accent=&quot;true&quot;><msub><mi>x</mi><mi>i</mi></msub><mo>^</mo></mover><mspace is=&quot;true&quot; width=&quot;0.22em&quot;></mspace><mi>w</mi><mi>e</mi><mspace is=&quot;true&quot; width=&quot;0.22em&quot;></mspace><mi>g</mi><mi>e</mi><mi>t</mi></mrow></mtd></mtr><mtr><mtd><mrow><mfrac><mrow><mi>∂</mi><msub><mi>y</mi><mi>i</mi></msub></mrow><mrow><mi>∂</mi><mover accent=&quot;true&quot;><msub><mi>x</mi><mi>i</mi></msub><mo>^</mo></mover></mrow></mfrac><mo form=&quot;infix&quot;>=</mo><mi>𝛾</mi></mrow></mtd></mtr><mtr><mtd><mrow><mfrac><mrow><mi>∂</mi><mi>l</mi></mrow><mrow><mi>∂</mi><mover accent=&quot;true&quot;><msub><mi>x</mi><mi>i</mi></msub><mo>^</mo></mover></mrow></mfrac><mo form=&quot;infix&quot;>=</mo><mfrac><mrow><mi>∂</mi><mi>l</mi></mrow><mrow><mi>∂</mi><msub><mi>y</mi><mi>i</mi></msub></mrow></mfrac><mo separator=&quot;true&quot;>.</mo><mfrac><mrow><mi>∂</mi><msub><mi>y</mi><mi>i</mi></msub></mrow><mrow><mi>∂</mi><mover accent=&quot;true&quot;><msub><mi>x</mi><mi>i</mi></msub><mo>^</mo></mover></mrow></mfrac></mrow></mtd></mtr><mtr><mtd><mrow><mo form=&quot;infix&quot;>⟹</mo><mfrac><mrow><mi>∂</mi><mi>l</mi></mrow><mrow><mi>∂</mi><mover accent=&quot;true&quot;><msub><mi>x</mi><mi>i</mi></msub><mo>^</mo></mover></mrow></mfrac><mo form=&quot;infix&quot;>=</mo><mi>d</mi><msub><mi>y</mi><mi>i</mi></msub><mo separator=&quot;true&quot;>.</mo><mi>𝛾</mi><mspace is=&quot;true&quot; width=&quot;0.22em&quot;></mspace></mrow></mtd></mtr></mtable></math>"><editarea class="math-mode-font lazy no-area-container" style="font-family: Asana-Math, Asana;" aria-hidden="true"><line class="taggable" style="line-height: 1.2;"><baselineblock></baselineblock><block class="Normal">Diff </block><opensymbolblock class="normal" type="parenthesis"><bracket-span>(</bracket-span></opensymbolblock><block class="Normal">4</block><closesymbolblock class="normal" type="parenthesis"><bracket-span>)</bracket-span></closesymbolblock><block class="Normal"> wrt </block><compositeblock dir="ltr" class="wide-hat-symbol ig-ex-br"><symbol style="display: block; width: 100%; position: relative; height: 0.529412em; margin-bottom: -0.176471em;"><svg style="position: absolute; left: 0px; top: 0px; display: block; width: 100%; height: 100%; overflow: visible;"><polyline points="0.00,8.06 6.66,3.62 13.32,8.06" stroke-width="1" fill="none" stroke-linejoin="bevel"></polyline></svg></symbol><editarea class="no-area-container" style="display: inline-flex;"><line class="" style="line-height: 1.2;"><baselineblock></baselineblock><block class="Normal">x</block><compositeblock dir="ltr" class="power-index-symbol-container power-index-symbol-container inline"><middle-base><inline></inline></middle-base><editarea-block class="index-value" style="line-height: 1.2; margin-top: -0.747899em;">i</editarea-block></compositeblock></line></editarea></compositeblock><block class="Normal"> we get</block></line><line class="taggable" style="line-height: 1.2;"><baselineblock></baselineblock><ref-tag data-tag-position="line" class="line-tag automatic" data-tag-id="tid0.4181274274694802" style="font-family: Arial, Helvetica, sans-serif; font-size: 15px;" id="tid0.4181274274694802"><label>(5)</label></ref-tag><compositeblock dir="ltr" class="fraction-symbol smaller"><editarea-line class=" frac-edit-area enumerator" style="line-height: 1.2; margin-bottom: -0.470588em;"><baselineblock></baselineblock><block class="Normal">∂y</block><compositeblock dir="ltr" class="power-index-symbol-container power-index-symbol-container inline"><middle-base><inline></inline></middle-base><editarea-block class="index-value" style="line-height: 1.2; margin-top: -0.747899em;">i</editarea-block></compositeblock></editarea-line><div class="frac-line"><inline style="border-bottom: 1px solid;"></inline></div><editarea-line class=" frac-edit-area denominator" style="line-height: 1.2; margin-top: -0.411765em;"><baselineblock></baselineblock><block class="Normal">∂</block><compositeblock dir="ltr" class="wide-hat-symbol ig-ex-br inline"><symbol style="display: block; width: 100%; position: relative; height: 0.529412em; margin-bottom: -0.176471em;"><svg style="position: absolute; left: 0px; top: 0px; display: block; width: 100%; height: 100%; overflow: visible;"><polyline points="0.00,8.06 6.66,3.62 13.32,8.06" stroke-width="1" fill="none" stroke-linejoin="bevel"></polyline></svg></symbol><editarea class="no-area-container" style="display: inline-flex;"><line class="" style="line-height: 1.2;"><baselineblock></baselineblock><block class="Normal">x</block><compositeblock dir="ltr" class="power-index-symbol-container power-index-symbol-container inline"><middle-base><inline></inline></middle-base><editarea-block class="index-value" style="line-height: 1.2; margin-top: -0.747899em;">i</editarea-block></compositeblock></line></editarea></compositeblock></editarea-line></compositeblock><block class="Relation">=</block><block class="Normal">𝛾</block></line><line class="taggable" style="line-height: 1.2;"><baselineblock></baselineblock><compositeblock dir="ltr" class="fraction-symbol smaller"><editarea-line class=" frac-edit-area enumerator" style="line-height: 1.2; margin-bottom: -0.470588em;"><baselineblock></baselineblock><block class="Normal">∂l</block></editarea-line><div class="frac-line"><inline style="border-bottom: 1px solid;"></inline></div><editarea-line class=" frac-edit-area denominator" style="line-height: 1.2; margin-top: -0.411765em;"><baselineblock></baselineblock><block class="Normal">∂</block><compositeblock dir="ltr" class="wide-hat-symbol ig-ex-br inline"><symbol style="display: block; width: 100%; position: relative; height: 0.529412em; margin-bottom: -0.176471em;"><svg style="position: absolute; left: 0px; top: 0px; display: block; width: 100%; height: 100%; overflow: visible;"><polyline points="0.00,8.06 6.66,3.62 13.32,8.06" stroke-width="1" fill="none" stroke-linejoin="bevel"></polyline></svg></symbol><editarea class="no-area-container" style="display: inline-flex;"><line class="" style="line-height: 1.2;"><baselineblock></baselineblock><block class="Normal">x</block><compositeblock dir="ltr" class="power-index-symbol-container power-index-symbol-container inline"><middle-base><inline></inline></middle-base><editarea-block class="index-value" style="line-height: 1.2; margin-top: -0.747899em;">i</editarea-block></compositeblock></line></editarea></compositeblock></editarea-line></compositeblock><block class="Relation">=</block><compositeblock dir="ltr" class="fraction-symbol smaller"><editarea-line class=" frac-edit-area enumerator" style="line-height: 1.2; margin-bottom: -0.470588em;"><baselineblock></baselineblock><block class="Normal">∂l</block></editarea-line><div class="frac-line"><inline style="border-bottom: 1px solid;"></inline></div><editarea-line class=" frac-edit-area denominator" style="line-height: 1.2; margin-top: -0.411765em;"><baselineblock></baselineblock><block class="Normal">∂y</block><compositeblock dir="ltr" class="power-index-symbol-container power-index-symbol-container inline"><middle-base><inline></inline></middle-base><editarea-block class="index-value" style="line-height: 1.2; margin-top: -0.747899em;">i</editarea-block></compositeblock></editarea-line></compositeblock><block class="Punctuation">.</block><compositeblock dir="ltr" class="fraction-symbol smaller"><editarea-line class=" frac-edit-area enumerator" style="line-height: 1.2; margin-bottom: -0.470588em;"><baselineblock></baselineblock><block class="Normal">∂y</block><compositeblock dir="ltr" class="power-index-symbol-container power-index-symbol-container inline"><middle-base><inline></inline></middle-base><editarea-block class="index-value" style="line-height: 1.2; margin-top: -0.747899em;">i</editarea-block></compositeblock></editarea-line><div class="frac-line"><inline style="border-bottom: 1px solid;"></inline></div><editarea-line class=" frac-edit-area denominator" style="line-height: 1.2; margin-top: -0.411765em;"><baselineblock></baselineblock><block class="Normal">∂</block><compositeblock dir="ltr" class="wide-hat-symbol ig-ex-br inline"><symbol style="display: block; width: 100%; position: relative; height: 0.529412em; margin-bottom: -0.176471em;"><svg style="position: absolute; left: 0px; top: 0px; display: block; width: 100%; height: 100%; overflow: visible;"><polyline points="0.00,8.06 6.66,3.62 13.32,8.06" stroke-width="1" fill="none" stroke-linejoin="bevel"></polyline></svg></symbol><editarea class="no-area-container" style="display: inline-flex;"><line class="" style="line-height: 1.2;"><baselineblock></baselineblock><block class="Normal">x</block><compositeblock dir="ltr" class="power-index-symbol-container power-index-symbol-container inline"><middle-base><inline></inline></middle-base><editarea-block class="index-value" style="line-height: 1.2; margin-top: -0.747899em;">i</editarea-block></compositeblock></line></editarea></compositeblock></editarea-line></compositeblock></line><line class="taggable" style="line-height: 1.2;"><baselineblock></baselineblock><ref-tag data-tag-position="line" class="line-tag" data-tag-id="tid0.7054523514572902" style="font-family: Arial, Helvetica, sans-serif; font-size: 15px;" id="tid0.7054523514572902"><label>(From 5)</label></ref-tag><block class="Relation">⟹</block><compositeblock dir="ltr" class="fraction-symbol smaller"><editarea-line class=" frac-edit-area enumerator" style="line-height: 1.2; margin-bottom: -0.470588em;"><baselineblock></baselineblock><block class="Normal">∂l</block></editarea-line><div class="frac-line"><inline style="border-bottom: 1px solid;"></inline></div><editarea-line class=" frac-edit-area denominator" style="line-height: 1.2; margin-top: -0.411765em;"><baselineblock></baselineblock><block class="Normal">∂</block><compositeblock dir="ltr" class="wide-hat-symbol ig-ex-br inline"><symbol style="display: block; width: 100%; position: relative; height: 0.529412em; margin-bottom: -0.176471em;"><svg style="position: absolute; left: 0px; top: 0px; display: block; width: 100%; height: 100%; overflow: visible;"><polyline points="0.00,8.06 6.66,3.62 13.32,8.06" stroke-width="1" fill="none" stroke-linejoin="bevel"></polyline></svg></symbol><editarea class="no-area-container" style="display: inline-flex;"><line class="" style="line-height: 1.2;"><baselineblock></baselineblock><block class="Normal">x</block><compositeblock dir="ltr" class="power-index-symbol-container power-index-symbol-container inline"><middle-base><inline></inline></middle-base><editarea-block class="index-value" style="line-height: 1.2; margin-top: -0.747899em;">i</editarea-block></compositeblock></line></editarea></compositeblock></editarea-line></compositeblock><block class="Relation">=</block><block class="Normal">dy</block><compositeblock dir="ltr" class="power-index-symbol-container power-index-symbol-container"><middle-base><inline></inline></middle-base><editarea-block class="index-value" style="line-height: 1.2; margin-top: -0.747899em;">i</editarea-block></compositeblock><block class="Punctuation">.</block><block class="Normal">𝛾 </block></line></editarea><span role="presentation" style="width:100%;position:absolute;top:0;left:0;clip:rect(1px, 1px, 1px, 1px);height:1px;padding:1px 0 0 0!important;overflow:hidden;user-select:none;"><math display="block" xmlns="http://www.w3.org/1998/Math/MathML"><mtable columnwidth="100%" columnalign="center" width="100%"><mtr><mtd><mrow><mi>D</mi><mi>i</mi><mi>f</mi><mi>f</mi><mspace is="true" width="0.22em"></mspace><mo fence="true" stretchy="false">(</mo><mn>4</mn><mo fence="true" stretchy="false">)</mo><mspace is="true" width="0.22em"></mspace><mi>w</mi><mi>r</mi><mi>t</mi><mspace is="true" width="0.22em"></mspace><mover accent="true"><msub><mi>x</mi><mi>i</mi></msub><mo>^</mo></mover><mspace is="true" width="0.22em"></mspace><mi>w</mi><mi>e</mi><mspace is="true" width="0.22em"></mspace><mi>g</mi><mi>e</mi><mi>t</mi></mrow></mtd></mtr><mtr><mtd><mrow><mfrac><mrow><mi>∂</mi><msub><mi>y</mi><mi>i</mi></msub></mrow><mrow><mi>∂</mi><mover accent="true"><msub><mi>x</mi><mi>i</mi></msub><mo>^</mo></mover></mrow></mfrac><mo form="infix">=</mo><mi>𝛾</mi></mrow></mtd></mtr><mtr><mtd><mrow><mfrac><mrow><mi>∂</mi><mi>l</mi></mrow><mrow><mi>∂</mi><mover accent="true"><msub><mi>x</mi><mi>i</mi></msub><mo>^</mo></mover></mrow></mfrac><mo form="infix">=</mo><mfrac><mrow><mi>∂</mi><mi>l</mi></mrow><mrow><mi>∂</mi><msub><mi>y</mi><mi>i</mi></msub></mrow></mfrac><mo separator="true">.</mo><mfrac><mrow><mi>∂</mi><msub><mi>y</mi><mi>i</mi></msub></mrow><mrow><mi>∂</mi><mover accent="true"><msub><mi>x</mi><mi>i</mi></msub><mo>^</mo></mover></mrow></mfrac></mrow></mtd></mtr><mtr><mtd><mrow><mo form="infix">⟹</mo><mfrac><mrow><mi>∂</mi><mi>l</mi></mrow><mrow><mi>∂</mi><mover accent="true"><msub><mi>x</mi><mi>i</mi></msub><mo>^</mo></mover></mrow></mfrac><mo form="infix">=</mo><mi>d</mi><msub><mi>y</mi><mi>i</mi></msub><mo separator="true">.</mo><mi>𝛾</mi><mspace is="true" width="0.22em"></mspace></mrow></mtd></mtr></mtable></math></span></compositeblock></blocks></line><line class="root text-mode full-line-block-inside" style="line-height: 1.4;"><prefix></prefix><blocks><baselineblock class="inline"></baselineblock><compositeblock dir="ltr" class="math-diagram inline" aria-label="Diagram" role="img"><math-diagram aria-hidden="true" data-amt="diagram" style="height: 224px; z-index: 1;"><clip-region style="width: 100%; height: 100%; display: block; overflow: hidden; position: relative;"><zoom-region><svg><g><defs><pattern id=".7261259351384842" width="10" height="10" patternUnits="userSpaceOnUse"><path d="M 10 0 L 0 0 0 10" fill="none" stroke="lightgray" stroke-width="0.5"></path></pattern></defs><rect width="100%" height="100%" fill="url(#.7261259351384842)" stroke="lightgray" stroke-width="0.5"></rect></g></svg><div class="diagram-plotly-layer" style="position: absolute; inset: 0px; pointer-events: none; fill: none; stroke: none;"><svg style="overflow:visible;position:absolute;left:0;top:0;"></svg></div><svg class="role-diagram-draw-area"><g class="shapes-region" style="stroke: black; fill: none;"><g class="composite-shape"><path class="real" d=" M128,80 L139.5,80 L139.5,170.2 L128,170.2 Z" style="stroke-width: 1px; stroke: rgb(0, 0, 0); fill: none; fill-opacity: 1;"></path></g><g class="composite-shape"><path class="real" d=" M289,80 L300.5,80 L300.5,170.2 L289,170.2 Z" style="stroke-width: 1px; stroke: rgb(0, 0, 0); fill: none; fill-opacity: 1;"></path></g><g class="composite-shape"><path class="real" d=" M448,80 L459.5,80 L459.5,170.2 L448,170.2 Z" style="stroke-width: 1px; stroke: rgb(0, 0, 0); fill: none; fill-opacity: 1;"></path></g><g class="arrow-line"><path class="connection real" stroke-dasharray="" d="  M533.5,125.03 L489.5,125.03" style="stroke: rgb(211, 34, 34); stroke-opacity: 1; stroke-width: 1px; fill: rgb(255, 255, 255); fill-opacity: 1;"></path><g stroke="rgb(211,34,34)" stroke-opacity="1" transform="matrix(1,-2.4492935982947064e-16,2.4492935982947064e-16,1,487.5,125.0333251953125)" style="stroke: rgb(211, 34, 34); stroke-width: 1px;"><path d=" M10.93,-3.29 Q4.96,-0.45 0,0 Q4.96,0.45 10.93,3.29"></path></g></g><g class="arrow-line"><path class="connection real" stroke-dasharray="" d="  M384.5,58.55 L337.49,52.79" style="stroke: rgb(211, 34, 34); stroke-opacity: 1; stroke-width: 1px; fill: rgb(255, 255, 255); fill-opacity: 1;"></path><g stroke="rgb(211,34,34)" stroke-opacity="1" transform="matrix(0.9925886315970825,0.12152287202099499,-0.12152287202099499,0.9925886315970825,335.5,52.55000305175781)" style="stroke: rgb(211, 34, 34); stroke-width: 1px;"><path d=" M10.93,-3.29 Q4.96,-0.45 0,0 Q4.96,0.45 10.93,3.29"></path></g></g><g></g></g><g><g class="connection-group"><g class="arrow-line"><path class="connection real" stroke-dasharray="" d="  M210.04,109 L235.67,80.14" style="stroke: rgb(0, 0, 0); stroke-width: 1px; fill: none; fill-opacity: 1;"></path><g stroke="#000" transform="matrix(-0.6639262126522422,0.7477980904985314,-0.7477980904985314,-0.6639262126522422,237,78.64077669902912)" style="stroke: rgb(0, 0, 0); stroke-width: 1px;"><path d=" M10.93,-3.29 Q4.96,-0.45 0,0 Q4.96,0.45 10.93,3.29"></path></g></g></g><g class="connection-group"><g class="arrow-line"><path class="connection real" stroke-dasharray="" d="  M263,57.57 L282.21,48.08" style="stroke: rgb(0, 0, 0); stroke-width: 1px; fill: none; fill-opacity: 1;"></path><g stroke="#000" transform="matrix(-0.8964090862185582,0.443227650474121,-0.443227650474121,-0.8964090862185582,283.99999999999994,47.19101123595506)" style="stroke: rgb(0, 0, 0); stroke-width: 1px;"><path d=" M10.93,-3.29 Q4.96,-0.45 0,0 Q4.96,0.45 10.93,3.29"></path></g></g></g><g class="connection-group"><g class="arrow-line"><path class="connection real" stroke-dasharray="" d="  M212,110.75 L282.46,52.03" style="stroke: rgb(0, 0, 0); stroke-width: 1px; fill: none; fill-opacity: 1;"></path><g stroke="#000" transform="matrix(-0.7681717916741633,0.6402437805056023,-0.6402437805056023,-0.7681717916741633,283.99999999999994,50.75)" style="stroke: rgb(0, 0, 0); stroke-width: 1px;"><path d=" M10.93,-3.29 Q4.96,-0.45 0,0 Q4.96,0.45 10.93,3.29"></path></g></g></g><g class="connection-group"><g class="arrow-line"><path class="connection real" stroke-dasharray="" d="  M305,43.17 L443.01,58.6" style="stroke: rgb(0, 0, 0); stroke-width: 1px; fill: none; fill-opacity: 1;"></path><g stroke="#000" transform="matrix(-0.9938067686136166,-0.11112203497849357,0.11112203497849357,-0.9938067686136166,445,58.82608695652175)" style="stroke: rgb(0, 0, 0); stroke-width: 1px;"><path d=" M10.93,-3.29 Q4.96,-0.45 0,0 Q4.96,0.45 10.93,3.29"></path></g></g></g><g class="connection-group"><g class="arrow-line"><path class="connection real" stroke-dasharray="" d="  M385,93.7 L443.2,65.88" style="stroke: rgb(0, 0, 0); stroke-width: 1px; fill: none; fill-opacity: 1;"></path><g stroke="#000" transform="matrix(-0.9022092489132822,0.43129858703145685,-0.43129858703145685,-0.9022092489132822,445.00000000000006,65.01886792452831)" style="stroke: rgb(0, 0, 0); stroke-width: 1px;"><path d=" M10.93,-3.29 Q4.96,-0.45 0,0 Q4.96,0.45 10.93,3.29"></path></g></g></g><g class="connection-group"><g class="arrow-line"><path class="connection real" stroke-dasharray="" d="  M382,130.38 L443.56,71.44" style="stroke: rgb(0, 0, 0); stroke-width: 1px; fill: none; fill-opacity: 1;"></path><g stroke="#000" transform="matrix(-0.7222432592616974,0.6916391215446395,-0.6916391215446395,-0.7222432592616974,445,70.05454545454546)" style="stroke: rgb(0, 0, 0); stroke-width: 1px;"><path d=" M10.93,-3.29 Q4.96,-0.45 0,0 Q4.96,0.45 10.93,3.29"></path></g></g></g><g class="connection-group"><g class="arrow-line"><path class="connection real" stroke-dasharray="" d="  M146,60.37 L235,63.48" style="stroke: rgb(0, 0, 0); stroke-width: 1px; fill: none; fill-opacity: 1;"></path><g stroke="#000" transform="matrix(-0.9993908270190958,-0.0348994967025009,0.0348994967025009,-0.9993908270190958,237.00000000000003,63.54585152838426)" style="stroke: rgb(0, 0, 0); stroke-width: 1px;"><path d=" M10.93,-3.29 Q4.96,-0.45 0,0 Q4.96,0.45 10.93,3.29"></path></g></g></g><g class="connection-group"><g class="arrow-line"><path class="connection real" stroke-dasharray="" d="  M146,70.33 L183.86,107.6" style="stroke: rgb(0, 0, 0); stroke-width: 1px; fill: none; fill-opacity: 1;"></path><g stroke="#000" transform="matrix(-0.7127609484023376,-0.7014070362012347,0.7014070362012347,-0.7127609484023376,185.29032258064512,109)" style="stroke: rgb(0, 0, 0); stroke-width: 1px;"><path d=" M10.93,-3.29 Q4.96,-0.45 0,0 Q4.96,0.45 10.93,3.29"></path></g></g></g><g class="connection-group"><g class="arrow-line"><path class="connection real" stroke-dasharray="" d="  M146,58.81 L282.01,43.41" style="stroke: rgb(0, 0, 0); stroke-width: 1px; fill: none; fill-opacity: 1;"></path><g stroke="#000" transform="matrix(-0.9936506442949048,0.1125095422278507,-0.1125095422278507,-0.9936506442949048,283.99999999999994,43.18867924528302)" style="stroke: rgb(0, 0, 0); stroke-width: 1px;"><path d=" M10.93,-3.29 Q4.96,-0.45 0,0 Q4.96,0.45 10.93,3.29"></path></g></g></g></g><g></g><g></g></svg><diagram-editors><position-container data-rotation="0" data-skewx="0" data-flipx="false" data-anchor="left-top" style="left: 126px; top: 48px;"><dg-editor-container data-editor-id="de9866311834678265" class="no-border-on-print math-diagram-editor" style="border: 1px solid transparent; transform: translate(0%); font-size: 17px; font-family: Asana-Math, Asana;"><editarea class="diagram-editor non-wrap no-area-container" style="font-size: 1em;"><line class="" style="line-height: 1.2;"><baselineblock></baselineblock><block class="Normal">x</block><compositeblock dir="ltr" class="power-index-symbol-container power-index-symbol-container inline"><middle-base><inline></inline></middle-base><editarea-block class="index-value" style="line-height: 1.2; margin-top: -0.747899em;">i</editarea-block></compositeblock></line></editarea></dg-editor-container></position-container><position-container data-rotation="0" data-skewx="0" data-flipx="false" data-anchor="left-top" style="left: 285px; top: 27px;"><dg-editor-container data-editor-id="de7373907744083908" class="no-border-on-print math-diagram-editor" style="border: 1px solid transparent; transform: translate(0%); font-size: 17px; font-family: Asana-Math, Asana;"><editarea class="diagram-editor non-wrap no-area-container" style="font-size: 1em;"><line class="" style="line-height: 1.2;"><baselineblock></baselineblock><compositeblock dir="ltr" class="wide-hat-symbol ig-ex-br inline"><symbol style="display: block; width: 100%; position: relative; height: 0.529412em; margin-bottom: -0.176471em;"><svg style="position: absolute; left: 0px; top: 0px; display: block; width: 100%; height: 100%; overflow: visible;"><polyline points="0.00,8.06 6.66,3.62 13.32,8.06" stroke-width="1" fill="none" stroke-linejoin="bevel"></polyline></svg></symbol><editarea class="no-area-container" style="display: inline-flex;"><line class="" style="line-height: 1.2;"><baselineblock></baselineblock><block class="Normal">x</block><compositeblock dir="ltr" class="power-index-symbol-container power-index-symbol-container inline"><middle-base><inline></inline></middle-base><editarea-block class="index-value" style="line-height: 1.2; margin-top: -0.747899em;">i</editarea-block></compositeblock></line></editarea></compositeblock></line></editarea></dg-editor-container></position-container><position-container data-rotation="0" data-skewx="0" data-flipx="false" data-anchor="left-top" style="left: 186px; top: 110px;"><dg-editor-container data-editor-id="de008063750645833645" class="no-border-on-print math-diagram-editor" style="border: 1px solid transparent; transform: translate(0%); font-size: 17px; font-family: Asana-Math, Asana;"><editarea class="diagram-editor non-wrap no-area-container" style="font-size: 1em;"><line class="" style="line-height: 1.2;"><baselineblock></baselineblock><block class="Normal">𝜇</block><compositeblock dir="ltr" class="power-index-symbol-container power-index-symbol-container inline"><middle-base><inline></inline></middle-base><editarea-block class="index-value" style="line-height: 1.2; margin-top: -0.747899em;">B</editarea-block></compositeblock></line></editarea></dg-editor-container></position-container><position-container data-rotation="0" data-skewx="0" data-flipx="false" data-anchor="left-top" style="left: 238px; top: 50px;"><dg-editor-container data-editor-id="de15459374230928669" class="no-border-on-print math-diagram-editor" style="border: 1px solid transparent; transform: translate(0%); font-size: 17px; font-family: Asana-Math, Asana;"><editarea class="diagram-editor non-wrap no-area-container" style="font-size: 1em;"><line class="" style="line-height: 1.2;"><baselineblock></baselineblock><block class="Normal">𝜎</block><compositeblock dir="ltr" class="power-index-symbol-container power-index-symbol-container has-power inline"><editarea-block class="power-value" style="line-height: 1.2; margin-top: 0em; margin-bottom: -1.05378em;">2</editarea-block><middle-base><inline></inline></middle-base><editarea-block class="index-value" style="line-height: 1.2; margin-top: -0.60899em; margin-bottom: 0em;">B</editarea-block></compositeblock></line></editarea></dg-editor-container></position-container><position-container data-rotation="0" data-skewx="0" data-flipx="false" data-anchor="left-top" style="left: 365px; top: 128px;"><dg-editor-container data-editor-id="de2530711228305942" class="no-border-on-print math-diagram-editor" style="border: 1px solid transparent; transform: translate(0%); font-size: 17px; font-family: Asana-Math, Asana;"><editarea class="diagram-editor non-wrap no-area-container" style="font-size: 1em;"><line class="" style="line-height: 1.2;"><baselineblock></baselineblock><block class="Normal">𝛾</block></line></editarea></dg-editor-container></position-container><position-container data-rotation="0" data-skewx="0" data-flipx="false" data-anchor="left-top" style="left: 368px; top: 87px;"><dg-editor-container data-editor-id="de7828701699743748" class="no-border-on-print math-diagram-editor" style="border: 1px solid transparent; transform: translate(0%); font-size: 17px; font-family: Asana-Math, Asana;"><editarea class="diagram-editor non-wrap no-area-container" style="font-size: 1em;"><line class="" style="line-height: 1.2;"><baselineblock></baselineblock><block class="Normal">𝛽</block></line></editarea></dg-editor-container></position-container><position-container data-rotation="0" data-skewx="0" data-flipx="false" data-anchor="left-top" style="left: 446px; top: 48px;"><dg-editor-container data-editor-id="de014664309647617002" class="no-border-on-print math-diagram-editor" style="border: 1px solid transparent; transform: translate(0%); font-size: 17px; font-family: Asana-Math, Asana;"><editarea class="diagram-editor non-wrap no-area-container" style="font-size: 1em;"><line class="" style="line-height: 1.2;"><baselineblock></baselineblock><block class="Normal">y</block><compositeblock dir="ltr" class="power-index-symbol-container power-index-symbol-container inline"><middle-base><inline></inline></middle-base><editarea-block class="index-value" style="line-height: 1.2; margin-top: -0.747899em;">i</editarea-block></compositeblock></line></editarea></dg-editor-container></position-container><position-container data-rotation="0" data-skewx="0" data-flipx="false" data-anchor="left-top" style="left: 498px; top: 94px;"><dg-editor-container data-editor-id="de26861555533611936" class="no-border-on-print math-diagram-editor" style="border: 1px solid transparent; transform: translate(0%); font-size: 17px; font-family: Asana-Math, Asana;"><editarea class="diagram-editor non-wrap no-area-container" style="font-size: 1em;"><line class="" style="line-height: 1.2;"><baselineblock></baselineblock><block class="Normal">dy</block><compositeblock dir="ltr" class="power-index-symbol-container power-index-symbol-container inline"><middle-base><inline></inline></middle-base><editarea-block class="index-value" style="line-height: 1.2; margin-top: -0.747899em;">i</editarea-block></compositeblock></line></editarea></dg-editor-container></position-container><position-container data-rotation="5.59" data-skewx="0" data-flipx="false" data-anchor="left-top" style="left: 344.276px; top: 19.8654px; transform: rotate(5.59deg);"><dg-editor-container data-editor-id="de5873955630783323" class="no-border-on-print math-diagram-editor" style="border: 1px solid transparent; transform: translate(0%); font-size: 17px; font-family: Asana-Math, Asana;"><editarea class="diagram-editor non-wrap no-area-container" style="font-size: 1em;"><line class="" style="line-height: 1.2;"><baselineblock></baselineblock><block class="Normal">dy</block><compositeblock dir="ltr" class="power-index-symbol-container power-index-symbol-container inline"><middle-base><inline></inline></middle-base><editarea-block class="index-value" style="line-height: 1.2; margin-top: -0.747899em;">i</editarea-block></compositeblock><block class="Punctuation">.</block><block class="Normal">𝛾</block></line></editarea></dg-editor-container></position-container></diagram-editors></zoom-region><svg style="position: absolute; width: 100%; height: 100%; overflow: visible; left: 0px; top: 0px; pointer-events: none;"></svg></clip-region></math-diagram></compositeblock></blocks></line><line class="root text-mode" style="line-height: 1.4;"><prefix></prefix><blocks><baselineblock class="inline"></baselineblock><block>Note to the reader: When the gradient </block><compositeblock dir="ltr" class="math-container-symbol role-mathmode-area inline" style="font-size: 17px;" data-mathml="<math xmlns=&quot;http://www.w3.org/1998/Math/MathML&quot;><mstyle displaystyle=&quot;true&quot;><mrow><mi>d</mi><msub><mi>y</mi><mi>i</mi></msub></mrow></mstyle></math>"><editarea class="math-mode-font no-area-container" style="font-family: Asana-Math, Asana;" aria-hidden="true"><line class="" style="line-height: 1.2;"><baselineblock></baselineblock><block class="Normal">dy</block><compositeblock dir="ltr" class="power-index-symbol-container power-index-symbol-container"><middle-base><inline></inline></middle-base><editarea-block class="index-value" style="line-height: 1.2; margin-top: -0.747899em;">i</editarea-block></compositeblock></line></editarea><span role="presentation" style="width:100%;position:absolute;top:0;left:0;clip:rect(1px, 1px, 1px, 1px);height:1px;padding:1px 0 0 0!important;overflow:hidden;user-select:none;"><math xmlns="http://www.w3.org/1998/Math/MathML"><mstyle displaystyle="true"><mrow><mi>d</mi><msub><mi>y</mi><mi>i</mi></msub></mrow></mstyle></math></span></compositeblock><block> flows into the network, each of the </block><compositeblock dir="ltr" class="math-container-symbol role-mathmode-area inline" style="font-size: 17px;" data-mathml="<math xmlns=&quot;http://www.w3.org/1998/Math/MathML&quot;><mstyle displaystyle=&quot;true&quot;><msup><mi>i</mi><mrow><mi>t</mi><mi>h</mi></mrow></msup></mstyle></math>"><editarea class="math-mode-font no-area-container" style="font-family: Asana-Math, Asana;" aria-hidden="true"><line class="" style="line-height: 1.2;"><baselineblock></baselineblock><block class="Normal">i</block><compositeblock dir="ltr" class="power-index-symbol-container power-index-symbol-container has-power"><editarea-line class=" power-value" style="line-height: 1.2; margin-bottom: -1.06571em;"><baselineblock></baselineblock><block>th</block></editarea-line><middle-base><inline></inline></middle-base></compositeblock></line></editarea><span role="presentation" style="width:100%;position:absolute;top:0;left:0;clip:rect(1px, 1px, 1px, 1px);height:1px;padding:1px 0 0 0!important;overflow:hidden;user-select:none;"><math xmlns="http://www.w3.org/1998/Math/MathML"><mstyle displaystyle="true"><msup><mi>i</mi><mrow><mi>t</mi><mi>h</mi></mrow></msup></mstyle></math></span></compositeblock><block> element of </block><compositeblock dir="ltr" class="math-container-symbol role-mathmode-area inline" style="font-size: 17px;" data-mathml="<math xmlns=&quot;http://www.w3.org/1998/Math/MathML&quot;><mstyle displaystyle=&quot;true&quot;><mover accent=&quot;true&quot;><msub><mi>x</mi><mi>i</mi></msub><mo>^</mo></mover></mstyle></math>"><editarea class="math-mode-font no-area-container" style="font-family: Asana-Math, Asana;" aria-hidden="true"><line class="" style="line-height: 1.2;"><baselineblock></baselineblock><compositeblock dir="ltr" class="wide-hat-symbol ig-ex-br"><symbol style="display: block; width: 100%; position: relative; height: 0.529412em; margin-bottom: -0.176471em;"><svg style="position: absolute; left: 0px; top: 0px; display: block; width: 100%; height: 100%; overflow: visible;"><polyline points="0.00,8.06 6.66,3.62 13.32,8.06" stroke-width="1" fill="none" stroke-linejoin="bevel"></polyline></svg></symbol><editarea class="no-area-container" style="display: inline-flex;"><line class="" style="line-height: 1.2;"><baselineblock></baselineblock><block class="Normal">x</block><compositeblock dir="ltr" class="power-index-symbol-container power-index-symbol-container inline"><middle-base><inline></inline></middle-base><editarea-block class="index-value" style="line-height: 1.2; margin-top: -0.747899em;">i</editarea-block></compositeblock></line></editarea></compositeblock></line></editarea><span role="presentation" style="width:100%;position:absolute;top:0;left:0;clip:rect(1px, 1px, 1px, 1px);height:1px;padding:1px 0 0 0!important;overflow:hidden;user-select:none;"><math xmlns="http://www.w3.org/1998/Math/MathML"><mstyle displaystyle="true"><mover accent="true"><msub><mi>x</mi><mi>i</mi></msub><mo>^</mo></mover></mstyle></math></span></compositeblock><block> is effected by the corresponding </block><compositeblock dir="ltr" class="math-container-symbol role-mathmode-area inline" style="font-size: 17px;" data-mathml="<math xmlns=&quot;http://www.w3.org/1998/Math/MathML&quot;><mstyle displaystyle=&quot;true&quot;><msup><mi>i</mi><mrow><mi>t</mi><mi>h</mi></mrow></msup></mstyle></math>"><editarea class="math-mode-font no-area-container" style="font-family: Asana-Math, Asana;" aria-hidden="true"><line class="" style="line-height: 1.2;"><baselineblock></baselineblock><block class="Normal">i</block><compositeblock dir="ltr" class="power-index-symbol-container power-index-symbol-container has-power"><editarea-line class=" power-value" style="line-height: 1.2; margin-bottom: -1.06571em;"><baselineblock></baselineblock><block>th</block></editarea-line><middle-base><inline></inline></middle-base></compositeblock></line></editarea><span role="presentation" style="width:100%;position:absolute;top:0;left:0;clip:rect(1px, 1px, 1px, 1px);height:1px;padding:1px 0 0 0!important;overflow:hidden;user-select:none;"><math xmlns="http://www.w3.org/1998/Math/MathML"><mstyle displaystyle="true"><msup><mi>i</mi><mrow><mi>t</mi><mi>h</mi></mrow></msup></mstyle></math></span></compositeblock><block> element of </block><compositeblock dir="ltr" class="math-container-symbol role-mathmode-area inline" style="font-size: 17px;" data-mathml="<math xmlns=&quot;http://www.w3.org/1998/Math/MathML&quot;><mstyle displaystyle=&quot;true&quot;><mrow><mi>d</mi><msub><mi>y</mi><mi>i</mi></msub></mrow></mstyle></math>"><editarea class="math-mode-font no-area-container" style="font-family: Asana-Math, Asana;" aria-hidden="true"><line class="" style="line-height: 1.2;"><baselineblock></baselineblock><block class="Normal">dy</block><compositeblock dir="ltr" class="power-index-symbol-container power-index-symbol-container"><middle-base><inline></inline></middle-base><editarea-block class="index-value" style="line-height: 1.2; margin-top: -0.747899em;">i</editarea-block></compositeblock></line></editarea><span role="presentation" style="width:100%;position:absolute;top:0;left:0;clip:rect(1px, 1px, 1px, 1px);height:1px;padding:1px 0 0 0!important;overflow:hidden;user-select:none;"><math xmlns="http://www.w3.org/1998/Math/MathML"><mstyle displaystyle="true"><mrow><mi>d</mi><msub><mi>y</mi><mi>i</mi></msub></mrow></mstyle></math></span></compositeblock><block>. Now to consider all the collective gradient flow for single valued </block><compositeblock dir="ltr" class="math-container-symbol role-mathmode-area inline" style="font-size: 17px;" data-mathml="<math xmlns=&quot;http://www.w3.org/1998/Math/MathML&quot;><mstyle displaystyle=&quot;true&quot;><mrow><mi>𝛽</mi><mspace is=&quot;true&quot; width=&quot;0.22em&quot;></mspace><mi>a</mi><mi>n</mi><mi>d</mi><mspace is=&quot;true&quot; width=&quot;0.22em&quot;></mspace><mi>𝛾</mi></mrow></mstyle></math>"><editarea class="math-mode-font no-area-container" style="font-family: Asana-Math, Asana;" aria-hidden="true"><line class="" style="line-height: 1.2;"><baselineblock></baselineblock><block class="Normal">𝛽 and 𝛾</block></line></editarea><span role="presentation" style="width:100%;position:absolute;top:0;left:0;clip:rect(1px, 1px, 1px, 1px);height:1px;padding:1px 0 0 0!important;overflow:hidden;user-select:none;"><math xmlns="http://www.w3.org/1998/Math/MathML"><mstyle displaystyle="true"><mrow><mi>𝛽</mi><mspace is="true" width="0.22em"></mspace><mi>a</mi><mi>n</mi><mi>d</mi><mspace is="true" width="0.22em"></mspace><mi>𝛾</mi></mrow></mstyle></math></span></compositeblock><block> we need to </block><compositeblock dir="ltr" class="math-container-symbol role-mathmode-area inline" style="font-size: 17px;" data-mathml="<math xmlns=&quot;http://www.w3.org/1998/Math/MathML&quot;><mstyle displaystyle=&quot;true&quot;><mrow><mi>a</mi><mi>d</mi><mi>d</mi></mrow></mstyle></math>"><editarea class="math-mode-font no-area-container" style="font-family: Asana-Math, Asana;" aria-hidden="true"><line class="" style="line-height: 1.2;"><baselineblock></baselineblock><block class="Normal">add</block></line></editarea><span role="presentation" style="width:100%;position:absolute;top:0;left:0;clip:rect(1px, 1px, 1px, 1px);height:1px;padding:1px 0 0 0!important;overflow:hidden;user-select:none;"><math xmlns="http://www.w3.org/1998/Math/MathML"><mstyle displaystyle="true"><mrow><mi>a</mi><mi>d</mi><mi>d</mi></mrow></mstyle></math></span></compositeblock><block> the gradients flowing in.</block></blocks></line><line class="root text-mode full-line-block-inside" style="line-height: 1.4;"><prefix></prefix><blocks><baselineblock class="inline"></baselineblock><compositeblock dir="ltr" class="math-container-symbol role-mathmode-area display" style="font-size: 17px;" data-mathml="<math display=&quot;block&quot; xmlns=&quot;http://www.w3.org/1998/Math/MathML&quot;><mtable columnwidth=&quot;100%&quot; width=&quot;100%&quot; columnalign=&quot;center&quot;><mtr><mtd><mrow><mi>D</mi><mi>i</mi><mi>f</mi><mi>f</mi><mspace is=&quot;true&quot; width=&quot;0.22em&quot;></mspace><mo fence=&quot;true&quot; stretchy=&quot;false&quot;>(</mo><mn>4</mn><mo fence=&quot;true&quot; stretchy=&quot;false&quot;>)</mo><mspace is=&quot;true&quot; width=&quot;0.22em&quot;></mspace><mi>w</mi><mi>r</mi><mi>t</mi><mspace is=&quot;true&quot; width=&quot;0.22em&quot;></mspace><mi>𝛽</mi><mspace is=&quot;true&quot; width=&quot;0.22em&quot;></mspace><mi>w</mi><mi>e</mi><mspace is=&quot;true&quot; width=&quot;0.22em&quot;></mspace><mi>g</mi><mi>e</mi><mi>t</mi></mrow></mtd></mtr><mtr><mtd><mrow><mfrac><mrow><mi>∂</mi><msub><mi>y</mi><mi>i</mi></msub></mrow><mrow><mi>∂</mi><mi>𝛽</mi></mrow></mfrac><mspace is=&quot;true&quot; width=&quot;0.22em&quot;></mspace><mo form=&quot;infix&quot;>=</mo><mspace is=&quot;true&quot; width=&quot;0.22em&quot;></mspace><mn>1</mn></mrow></mtd></mtr><mtr><mtd><mrow><mfrac><mrow><mi>∂</mi><mi>l</mi></mrow><mrow><mi>∂</mi><mi>𝛽</mi></mrow></mfrac><mo form=&quot;infix&quot;>=</mo><munderover><mo largeop=&quot;true&quot; movablelimit=&quot;true&quot;>∑</mo><mrow><mi>i</mi><mo form=&quot;infix&quot;>=</mo><mn>1</mn></mrow><mi>m</mi></munderover><mfrac><mrow><mi>∂</mi><mi>l</mi></mrow><mrow><mi>∂</mi><msub><mi>y</mi><mi>i</mi></msub></mrow></mfrac><mo separator=&quot;true&quot;>.</mo><mfrac><mrow><mi>∂</mi><msub><mi>y</mi><mi>i</mi></msub></mrow><mrow><mi>∂</mi><mi>𝛽</mi></mrow></mfrac><mspace is=&quot;true&quot; width=&quot;0.22em&quot;></mspace></mrow></mtd></mtr><mtr><mtd><mrow><mo form=&quot;infix&quot;>⟹</mo><mfrac><mrow><mi>∂</mi><mi>l</mi></mrow><mrow><mi>∂</mi><mi>𝛽</mi></mrow></mfrac><mo form=&quot;infix&quot;>=</mo><munderover><mo largeop=&quot;true&quot; movablelimit=&quot;true&quot;>∑</mo><mrow><mi>i</mi><mo form=&quot;infix&quot;>=</mo><mn>1</mn></mrow><mi>m</mi></munderover><mi>d</mi><msub><mi>y</mi><mi>i</mi></msub><mspace is=&quot;true&quot; width=&quot;0.22em&quot;></mspace></mrow></mtd></mtr><mtr><mtd><mrow></mrow></mtd></mtr></mtable></math>"><editarea class="math-mode-font lazy no-area-container" style="font-family: Asana-Math, Asana;" aria-hidden="true"><line class="taggable" style="line-height: 1.2;"><baselineblock></baselineblock><block class="Normal">Diff </block><opensymbolblock class="normal" type="parenthesis"><bracket-span>(</bracket-span></opensymbolblock><block class="Normal">4</block><closesymbolblock class="normal" type="parenthesis"><bracket-span>)</bracket-span></closesymbolblock><block class="Normal"> wrt 𝛽 we get</block></line><line class="taggable" style="line-height: 1.2;"><baselineblock></baselineblock><ref-tag data-tag-position="line" class="line-tag automatic" data-tag-id="tid0.8479637302287415" style="font-family: Arial, Helvetica, sans-serif; font-size: 15px;" id="tid0.8479637302287415"><label>(6)</label></ref-tag><compositeblock dir="ltr" class="fraction-symbol smaller"><editarea-line class=" frac-edit-area enumerator" style="line-height: 1.2; margin-bottom: -0.470588em;"><baselineblock></baselineblock><block class="Normal">∂y</block><compositeblock dir="ltr" class="power-index-symbol-container power-index-symbol-container inline"><middle-base><inline></inline></middle-base><editarea-block class="index-value" style="line-height: 1.2; margin-top: -0.747899em;">i</editarea-block></compositeblock></editarea-line><div class="frac-line"><inline style="border-bottom: 1px solid;"></inline></div><editarea-line class=" frac-edit-area denominator" style="line-height: 1.2; margin-top: -0.411765em;"><baselineblock></baselineblock><block class="Normal">∂𝛽</block></editarea-line></compositeblock><block class="Normal"> </block><block class="Relation">=</block><block class="Normal"> 1</block></line><line class="taggable" style="line-height: 1.2;"><baselineblock></baselineblock><compositeblock dir="ltr" class="fraction-symbol smaller"><editarea-line class=" frac-edit-area enumerator" style="line-height: 1.2; margin-bottom: -0.470588em;"><baselineblock></baselineblock><block class="Normal">∂l</block></editarea-line><div class="frac-line"><inline style="border-bottom: 1px solid;"></inline></div><editarea-line class=" frac-edit-area denominator" style="line-height: 1.2; margin-top: -0.411765em;"><baselineblock></baselineblock><block class="Normal">∂𝛽</block></editarea-line></compositeblock><block class="Relation">=</block><compositeblock dir="ltr" class="summation-like-symbol limit-type limit-kind "><editarea class="from no-area-container" style="margin-bottom: -0.470588em;"><line class="" style="margin-bottom: -0.168067em; line-height: 1.2;"><baselineblock></baselineblock><block>m</block></line></editarea><symbol class="" style="font-family: Asana-Math, Asana; font-style: normal; font-weight: normal;"><span>∑</span></symbol><editarea class="to to-summation no-area-container" style="margin-top: 0.117647em;"><line class="" style="line-height: 1.2;"><baselineblock></baselineblock><block>i=1</block></line></editarea></compositeblock><compositeblock dir="ltr" class="fraction-symbol smaller"><editarea-line class=" frac-edit-area enumerator" style="line-height: 1.2; margin-bottom: -0.470588em;"><baselineblock></baselineblock><block class="Normal">∂l</block></editarea-line><div class="frac-line"><inline style="border-bottom: 1px solid;"></inline></div><editarea-line class=" frac-edit-area denominator" style="line-height: 1.2; margin-top: -0.411765em;"><baselineblock></baselineblock><block class="Normal">∂y</block><compositeblock dir="ltr" class="power-index-symbol-container power-index-symbol-container inline"><middle-base><inline></inline></middle-base><editarea-block class="index-value" style="line-height: 1.2; margin-top: -0.747899em;">i</editarea-block></compositeblock></editarea-line></compositeblock><block class="Punctuation">.</block><compositeblock dir="ltr" class="fraction-symbol smaller"><editarea-line class=" frac-edit-area enumerator" style="line-height: 1.2; margin-bottom: -0.470588em;"><baselineblock></baselineblock><block class="Normal">∂y</block><compositeblock dir="ltr" class="power-index-symbol-container power-index-symbol-container inline"><middle-base><inline></inline></middle-base><editarea-block class="index-value" style="line-height: 1.2; margin-top: -0.747899em;">i</editarea-block></compositeblock></editarea-line><div class="frac-line"><inline style="border-bottom: 1px solid;"></inline></div><editarea-line class=" frac-edit-area denominator" style="line-height: 1.2; margin-top: -0.411765em;"><baselineblock></baselineblock><block class="Normal">∂𝛽</block></editarea-line></compositeblock><block class="Normal"> </block></line><line class="taggable" style="line-height: 1.2;"><baselineblock></baselineblock><ref-tag data-tag-position="line" class="line-tag" data-tag-id="tid0.9346677930642712" style="font-family: Arial, Helvetica, sans-serif; font-size: 15px;" id="tid0.9346677930642712"><label>(From 6)</label></ref-tag><block class="Relation">⟹</block><compositeblock dir="ltr" class="fraction-symbol smaller"><editarea-line class=" frac-edit-area enumerator" style="line-height: 1.2; margin-bottom: -0.470588em;"><baselineblock></baselineblock><block class="Normal">∂l</block></editarea-line><div class="frac-line"><inline style="border-bottom: 1px solid;"></inline></div><editarea-line class=" frac-edit-area denominator" style="line-height: 1.2; margin-top: -0.411765em;"><baselineblock></baselineblock><block class="Normal">∂𝛽</block></editarea-line></compositeblock><block class="Relation">=</block><compositeblock dir="ltr" class="summation-like-symbol limit-type limit-kind "><editarea class="from no-area-container" style="margin-bottom: -0.470588em;"><line class="" style="margin-bottom: -0.168067em; line-height: 1.2;"><baselineblock></baselineblock><block>m</block></line></editarea><symbol class="" style="font-family: Asana-Math, Asana; font-style: normal; font-weight: normal;"><span>∑</span></symbol><editarea class="to to-summation no-area-container" style="margin-top: 0.117647em;"><line class="" style="line-height: 1.2;"><baselineblock></baselineblock><block>i=1</block></line></editarea></compositeblock><block class="Normal">dy</block><compositeblock dir="ltr" class="power-index-symbol-container power-index-symbol-container"><middle-base><inline></inline></middle-base><editarea-block class="index-value" style="line-height: 1.2; margin-top: -0.747899em;">i</editarea-block></compositeblock><block class="Normal"> </block></line><line class="taggable" style="line-height: 1.2;"><baselineblock></baselineblock><emptyblock aria-label="empty line"> </emptyblock></line></editarea><span role="presentation" style="width:100%;position:absolute;top:0;left:0;clip:rect(1px, 1px, 1px, 1px);height:1px;padding:1px 0 0 0!important;overflow:hidden;user-select:none;"><math display="block" xmlns="http://www.w3.org/1998/Math/MathML"><mtable columnwidth="100%" columnalign="center" width="100%"><mtr><mtd><mrow><mi>D</mi><mi>i</mi><mi>f</mi><mi>f</mi><mspace is="true" width="0.22em"></mspace><mo fence="true" stretchy="false">(</mo><mn>4</mn><mo fence="true" stretchy="false">)</mo><mspace is="true" width="0.22em"></mspace><mi>w</mi><mi>r</mi><mi>t</mi><mspace is="true" width="0.22em"></mspace><mi>𝛽</mi><mspace is="true" width="0.22em"></mspace><mi>w</mi><mi>e</mi><mspace is="true" width="0.22em"></mspace><mi>g</mi><mi>e</mi><mi>t</mi></mrow></mtd></mtr><mtr><mtd><mrow><mfrac><mrow><mi>∂</mi><msub><mi>y</mi><mi>i</mi></msub></mrow><mrow><mi>∂</mi><mi>𝛽</mi></mrow></mfrac><mspace is="true" width="0.22em"></mspace><mo form="infix">=</mo><mspace is="true" width="0.22em"></mspace><mn>1</mn></mrow></mtd></mtr><mtr><mtd><mrow><mfrac><mrow><mi>∂</mi><mi>l</mi></mrow><mrow><mi>∂</mi><mi>𝛽</mi></mrow></mfrac><mo form="infix">=</mo><munderover><mo largeop="true" movablelimit="true">∑</mo><mrow><mi>i</mi><mo form="infix">=</mo><mn>1</mn></mrow><mi>m</mi></munderover><mfrac><mrow><mi>∂</mi><mi>l</mi></mrow><mrow><mi>∂</mi><msub><mi>y</mi><mi>i</mi></msub></mrow></mfrac><mo separator="true">.</mo><mfrac><mrow><mi>∂</mi><msub><mi>y</mi><mi>i</mi></msub></mrow><mrow><mi>∂</mi><mi>𝛽</mi></mrow></mfrac><mspace is="true" width="0.22em"></mspace></mrow></mtd></mtr><mtr><mtd><mrow><mo form="infix">⟹</mo><mfrac><mrow><mi>∂</mi><mi>l</mi></mrow><mrow><mi>∂</mi><mi>𝛽</mi></mrow></mfrac><mo form="infix">=</mo><munderover><mo largeop="true" movablelimit="true">∑</mo><mrow><mi>i</mi><mo form="infix">=</mo><mn>1</mn></mrow><mi>m</mi></munderover><mi>d</mi><msub><mi>y</mi><mi>i</mi></msub><mspace is="true" width="0.22em"></mspace></mrow></mtd></mtr><mtr><mtd><mrow></mrow></mtd></mtr></mtable></math></span></compositeblock></blocks></line><line class="root text-mode full-line-block-inside" style="line-height: 1.4;"><prefix></prefix><blocks><baselineblock class="inline"></baselineblock><compositeblock dir="ltr" class="math-diagram inline" aria-label="Diagram" role="img"><math-diagram aria-hidden="true" data-amt="diagram" style="height: 224px; z-index: 1;"><clip-region style="width: 100%; height: 100%; display: block; overflow: hidden; position: relative;"><zoom-region><svg><g><defs><pattern id=".21682594246203357" width="10" height="10" patternUnits="userSpaceOnUse"><path d="M 10 0 L 0 0 0 10" fill="none" stroke="lightgray" stroke-width="0.5"></path></pattern></defs><rect width="100%" height="100%" fill="url(#.21682594246203357)" stroke="lightgray" stroke-width="0.5"></rect></g></svg><div class="diagram-plotly-layer" style="position: absolute; inset: 0px; pointer-events: none; fill: none; stroke: none;"><svg style="overflow:visible;position:absolute;left:0;top:0;"></svg></div><svg class="role-diagram-draw-area"><g class="shapes-region" style="stroke: black; fill: none;"><g class="composite-shape"><path class="real" d=" M128,80 L139.5,80 L139.5,170.2 L128,170.2 Z" style="stroke-width: 1px; stroke: rgb(0, 0, 0); fill: none; fill-opacity: 1;"></path></g><g class="composite-shape"><path class="real" d=" M289,80 L300.5,80 L300.5,170.2 L289,170.2 Z" style="stroke-width: 1px; stroke: rgb(0, 0, 0); fill: none; fill-opacity: 1;"></path></g><g class="composite-shape"><path class="real" d=" M448,80 L459.5,80 L459.5,170.2 L448,170.2 Z" style="stroke-width: 1px; stroke: rgb(0, 0, 0); fill: none; fill-opacity: 1;"></path></g><g class="arrow-line"><path class="connection real" stroke-dasharray="" d="  M533.5,125.03 L489.5,125.03" style="stroke: rgb(211, 34, 34); stroke-opacity: 1; stroke-width: 1px; fill: rgb(255, 255, 255); fill-opacity: 1;"></path><g stroke="rgb(211,34,34)" stroke-opacity="1" transform="matrix(1,-2.4492935982947064e-16,2.4492935982947064e-16,1,487.5,125.0333251953125)" style="stroke: rgb(211, 34, 34); stroke-width: 1px;"><path d=" M10.93,-3.29 Q4.96,-0.45 0,0 Q4.96,0.45 10.93,3.29"></path></g></g><g class="arrow-line"><path class="connection real" stroke-dasharray="" d="  M383.5,55.03 L339.46,46.51" style="stroke: rgb(211, 34, 34); stroke-opacity: 1; stroke-width: 1px; fill: rgb(255, 255, 255); fill-opacity: 1;"></path><g stroke="rgb(211,34,34)" stroke-opacity="1" transform="matrix(0.9817933219112158,0.18995229151168402,-0.18995229151168402,0.9817933219112158,337.5,46.133331298828125)" style="stroke: rgb(211, 34, 34); stroke-width: 1px;"><path d=" M10.93,-3.29 Q4.96,-0.45 0,0 Q4.96,0.45 10.93,3.29"></path></g></g><g class="arrow-line"><path class="connection real" stroke-dasharray="" d="  M411.5,85.87 L361.42,122.75" style="stroke: rgb(211, 34, 34); stroke-opacity: 1; stroke-width: 1px; fill: rgb(255, 255, 255); fill-opacity: 1;"></path><g stroke="rgb(211,34,34)" stroke-opacity="1" transform="matrix(0.8052044004110598,-0.5929973638715992,0.5929973638715992,0.8052044004110598,359.8145177012128,123.9333458872415)" style="stroke: rgb(211, 34, 34); stroke-width: 1px;"><path d=" M10.93,-3.29 Q4.96,-0.45 0,0 Q4.96,0.45 10.93,3.29"></path></g></g><g></g></g><g><g class="connection-group"><g class="arrow-line"><path class="connection real" stroke-dasharray="" d="  M210.04,109 L235.67,80.14" style="stroke: rgb(0, 0, 0); stroke-width: 1px; fill: none; fill-opacity: 1;"></path><g stroke="#000" transform="matrix(-0.6639262126522422,0.7477980904985314,-0.7477980904985314,-0.6639262126522422,237,78.64077669902912)" style="stroke: rgb(0, 0, 0); stroke-width: 1px;"><path d=" M10.93,-3.29 Q4.96,-0.45 0,0 Q4.96,0.45 10.93,3.29"></path></g></g></g><g class="connection-group"><g class="arrow-line"><path class="connection real" stroke-dasharray="" d="  M263,56.23 L286.28,42.3" style="stroke: rgb(0, 0, 0); stroke-width: 1px; fill: none; fill-opacity: 1;"></path><g stroke="#000" transform="matrix(-0.8582441131575654,0.5132416996215174,-0.5132416996215174,-0.8582441131575654,287.99999999999994,41.27835051546391)" style="stroke: rgb(0, 0, 0); stroke-width: 1px;"><path d=" M10.93,-3.29 Q4.96,-0.45 0,0 Q4.96,0.45 10.93,3.29"></path></g></g></g><g class="connection-group"><g class="arrow-line"><path class="connection real" stroke-dasharray="" d="  M212,110.26 L286.49,45.45" style="stroke: rgb(0, 0, 0); stroke-width: 1px; fill: none; fill-opacity: 1;"></path><g stroke="#000" transform="matrix(-0.7544805264450195,0.6563224323571808,-0.6563224323571808,-0.7544805264450195,288,44.135000000000005)" style="stroke: rgb(0, 0, 0); stroke-width: 1px;"><path d=" M10.93,-3.29 Q4.96,-0.45 0,0 Q4.96,0.45 10.93,3.29"></path></g></g></g><g class="connection-group"><g class="arrow-line"><path class="connection real" stroke-dasharray="" d="  M309,36.67 L443.02,58.01" style="stroke: rgb(0, 0, 0); stroke-width: 1px; fill: none; fill-opacity: 1;"></path><g stroke="#000" transform="matrix(-0.9875514497047189,-0.15729632604135446,0.15729632604135446,-0.9875514497047189,445,58.328025477707)" style="stroke: rgb(0, 0, 0); stroke-width: 1px;"><path d=" M10.93,-3.29 Q4.96,-0.45 0,0 Q4.96,0.45 10.93,3.29"></path></g></g></g><g class="connection-group"><g class="arrow-line"><path class="connection real" stroke-dasharray="" d="  M361,133.04 L443.42,69.34" style="stroke: rgb(0, 0, 0); stroke-width: 1px; fill: none; fill-opacity: 1;"></path><g stroke="#000" transform="matrix(-0.7912235329674899,0.6115270401858314,-0.6115270401858314,-0.7912235329674899,445.00000000000006,68.1159420289855)" style="stroke: rgb(0, 0, 0); stroke-width: 1px;"><path d=" M10.93,-3.29 Q4.96,-0.45 0,0 Q4.96,0.45 10.93,3.29"></path></g></g></g><g class="connection-group"><g class="arrow-line"><path class="connection real" stroke-dasharray="" d="  M369,171.41 L444.18,74.58" style="stroke: rgb(0, 0, 0); stroke-width: 1px; fill: none; fill-opacity: 1;"></path><g stroke="#000" transform="matrix(-0.6133206938151116,0.7898339866947676,-0.7898339866947676,-0.6133206938151116,445.4065040650406,73)" style="stroke: rgb(0, 0, 0); stroke-width: 1px;"><path d=" M10.93,-3.29 Q4.96,-0.45 0,0 Q4.96,0.45 10.93,3.29"></path></g></g></g><g class="connection-group"><g class="arrow-line"><path class="connection real" stroke-dasharray="" d="  M146,60.37 L235,63.48" style="stroke: rgb(0, 0, 0); stroke-width: 1px; fill: none; fill-opacity: 1;"></path><g stroke="#000" transform="matrix(-0.9993908270190958,-0.0348994967025009,0.0348994967025009,-0.9993908270190958,237.00000000000003,63.54585152838426)" style="stroke: rgb(0, 0, 0); stroke-width: 1px;"><path d=" M10.93,-3.29 Q4.96,-0.45 0,0 Q4.96,0.45 10.93,3.29"></path></g></g></g><g class="connection-group"><g class="arrow-line"><path class="connection real" stroke-dasharray="" d="  M146,70.33 L183.86,107.6" style="stroke: rgb(0, 0, 0); stroke-width: 1px; fill: none; fill-opacity: 1;"></path><g stroke="#000" transform="matrix(-0.7127609484023376,-0.7014070362012347,0.7014070362012347,-0.7127609484023376,185.29032258064512,109)" style="stroke: rgb(0, 0, 0); stroke-width: 1px;"><path d=" M10.93,-3.29 Q4.96,-0.45 0,0 Q4.96,0.45 10.93,3.29"></path></g></g></g><g class="connection-group"><g class="arrow-line"><path class="connection real" stroke-dasharray="" d="  M146,58.39 L286.02,36.91" style="stroke: rgb(0, 0, 0); stroke-width: 1px; fill: none; fill-opacity: 1;"></path><g stroke="#000" transform="matrix(-0.9884410266004133,0.15160586048408867,-0.15160586048408867,-0.9884410266004133,288,36.61042944785276)" style="stroke: rgb(0, 0, 0); stroke-width: 1px;"><path d=" M10.93,-3.29 Q4.96,-0.45 0,0 Q4.96,0.45 10.93,3.29"></path></g></g></g></g><g></g><g></g></svg><diagram-editors><position-container data-rotation="0" data-skewx="0" data-flipx="false" data-anchor="left-top" style="left: 126px; top: 48px;"><dg-editor-container data-editor-id="de16190033644583812" class="no-border-on-print math-diagram-editor" style="border: 1px solid transparent; transform: translate(0%); font-size: 17px; font-family: Asana-Math, Asana;"><editarea class="diagram-editor non-wrap no-area-container" style="font-size: 1em;"><line class="" style="line-height: 1.2;"><baselineblock></baselineblock><block class="Normal">x</block><compositeblock dir="ltr" class="power-index-symbol-container power-index-symbol-container inline"><middle-base><inline></inline></middle-base><editarea-block class="index-value" style="line-height: 1.2; margin-top: -0.747899em;">i</editarea-block></compositeblock></line></editarea></dg-editor-container></position-container><position-container data-rotation="0" data-skewx="0" data-flipx="false" data-anchor="left-top" style="left: 289px; top: 20px;"><dg-editor-container data-editor-id="de8339022501394665" class="no-border-on-print math-diagram-editor" style="border: 1px solid transparent; transform: translate(0%); font-size: 17px; font-family: Asana-Math, Asana;"><editarea class="diagram-editor non-wrap no-area-container" style="font-size: 1em;"><line class="" style="line-height: 1.2;"><baselineblock></baselineblock><compositeblock dir="ltr" class="wide-hat-symbol ig-ex-br inline"><symbol style="display: block; width: 100%; position: relative; height: 0.529412em; margin-bottom: -0.176471em;"><svg style="position: absolute; left: 0px; top: 0px; display: block; width: 100%; height: 100%; overflow: visible;"><polyline points="0.00,8.06 6.66,3.62 13.32,8.06" stroke-width="1" fill="none" stroke-linejoin="bevel"></polyline></svg></symbol><editarea class="no-area-container" style="display: inline-flex;"><line class="" style="line-height: 1.2;"><baselineblock></baselineblock><block class="Normal">x</block><compositeblock dir="ltr" class="power-index-symbol-container power-index-symbol-container inline"><middle-base><inline></inline></middle-base><editarea-block class="index-value" style="line-height: 1.2; margin-top: -0.747899em;">i</editarea-block></compositeblock></line></editarea></compositeblock></line></editarea></dg-editor-container></position-container><position-container data-rotation="0" data-skewx="0" data-flipx="false" data-anchor="left-top" style="left: 186px; top: 110px;"><dg-editor-container data-editor-id="de1999933522610522" class="no-border-on-print math-diagram-editor" style="border: 1px solid transparent; transform: translate(0%); font-size: 17px; font-family: Asana-Math, Asana;"><editarea class="diagram-editor non-wrap no-area-container" style="font-size: 1em;"><line class="" style="line-height: 1.2;"><baselineblock></baselineblock><block class="Normal">𝜇</block><compositeblock dir="ltr" class="power-index-symbol-container power-index-symbol-container inline"><middle-base><inline></inline></middle-base><editarea-block class="index-value" style="line-height: 1.2; margin-top: -0.747899em;">B</editarea-block></compositeblock></line></editarea></dg-editor-container></position-container><position-container data-rotation="0" data-skewx="0" data-flipx="false" data-anchor="left-top" style="left: 238px; top: 50px;"><dg-editor-container data-editor-id="de02372106449431033" class="no-border-on-print math-diagram-editor" style="border: 1px solid transparent; transform: translate(0%); font-size: 17px; font-family: Asana-Math, Asana;"><editarea class="diagram-editor non-wrap no-area-container" style="font-size: 1em;"><line class="" style="line-height: 1.2;"><baselineblock></baselineblock><block class="Normal">𝜎</block><compositeblock dir="ltr" class="power-index-symbol-container power-index-symbol-container has-power inline"><editarea-block class="power-value" style="line-height: 1.2; margin-top: 0em; margin-bottom: -1.05378em;">2</editarea-block><middle-base><inline></inline></middle-base><editarea-block class="index-value" style="line-height: 1.2; margin-top: -0.60899em; margin-bottom: 0em;">B</editarea-block></compositeblock></line></editarea></dg-editor-container></position-container><position-container data-rotation="0" data-skewx="0" data-flipx="false" data-anchor="left-top" style="left: 352px; top: 172px;"><dg-editor-container data-editor-id="de9182186949298218" class="no-border-on-print math-diagram-editor" style="border: 1px solid transparent; transform: translate(0%); font-size: 17px; font-family: Asana-Math, Asana;"><editarea class="diagram-editor non-wrap no-area-container" style="font-size: 1em;"><line class="" style="line-height: 1.2;"><baselineblock></baselineblock><block class="Normal">𝛾</block></line></editarea></dg-editor-container></position-container><position-container data-rotation="0" data-skewx="0" data-flipx="false" data-anchor="left-top" style="left: 344px; top: 129px;"><dg-editor-container data-editor-id="de18414441621891686" class="no-border-on-print math-diagram-editor" style="border: 1px solid transparent; transform: translate(0%); font-size: 17px; font-family: Asana-Math, Asana;"><editarea class="diagram-editor non-wrap no-area-container" style="font-size: 1em;"><line class="" style="line-height: 1.2;"><baselineblock></baselineblock><block class="Normal">𝛽</block></line></editarea></dg-editor-container></position-container><position-container data-rotation="0" data-skewx="0" data-flipx="false" data-anchor="left-top" style="left: 446px; top: 48px;"><dg-editor-container data-editor-id="de95826121958881" class="no-border-on-print math-diagram-editor" style="border: 1px solid transparent; transform: translate(0%); font-size: 17px; font-family: Asana-Math, Asana;"><editarea class="diagram-editor non-wrap no-area-container" style="font-size: 1em;"><line class="" style="line-height: 1.2;"><baselineblock></baselineblock><block class="Normal">y</block><compositeblock dir="ltr" class="power-index-symbol-container power-index-symbol-container inline"><middle-base><inline></inline></middle-base><editarea-block class="index-value" style="line-height: 1.2; margin-top: -0.747899em;">i</editarea-block></compositeblock></line></editarea></dg-editor-container></position-container><position-container data-rotation="0" data-skewx="0" data-flipx="false" data-anchor="left-top" style="left: 499px; top: 94px;"><dg-editor-container data-editor-id="de32799808553092236" class="no-border-on-print math-diagram-editor" style="border: 1px solid transparent; transform: translate(0%); font-size: 17px; font-family: Asana-Math, Asana;"><editarea class="diagram-editor non-wrap no-area-container" style="font-size: 1em;"><line class="" style="line-height: 1.2;"><baselineblock></baselineblock><block class="Normal">dy</block><compositeblock dir="ltr" class="power-index-symbol-container power-index-symbol-container inline"><middle-base><inline></inline></middle-base><editarea-block class="index-value" style="line-height: 1.2; margin-top: -0.747899em;">i</editarea-block></compositeblock></line></editarea></dg-editor-container></position-container><position-container data-rotation="11.17" data-skewx="0" data-flipx="false" data-anchor="left-top" style="left: 347.751px; top: 13.8686px; transform: rotate(11.17deg);"><dg-editor-container data-editor-id="de17513621411072633" class="no-border-on-print math-diagram-editor" style="border: 1px solid transparent; transform: translate(0%); font-size: 17px; font-family: Asana-Math, Asana;"><editarea class="diagram-editor non-wrap no-area-container" style="font-size: 1em;"><line class="" style="line-height: 1.2;"><baselineblock></baselineblock><block class="Normal">dy</block><compositeblock dir="ltr" class="power-index-symbol-container power-index-symbol-container inline"><middle-base><inline></inline></middle-base><editarea-block class="index-value" style="line-height: 1.2; margin-top: -0.747899em;">i</editarea-block></compositeblock><block class="Punctuation">.</block><block class="Normal">𝛾</block></line></editarea></dg-editor-container></position-container><position-container data-rotation="324.75" data-skewx="0" data-flipx="false" data-anchor="left-top" style="left: 332.614px; top: 96.2084px; transform: rotate(324.75deg);"><dg-editor-container data-editor-id="de3679529280253767" class="no-border-on-print math-diagram-editor" style="border: 1px solid transparent; transform: translate(0%); font-size: 17px; font-family: Asana-Math, Asana;"><editarea class="diagram-editor non-wrap no-area-container" style="font-size: 1em;"><line class="" style="line-height: 1.2;"><baselineblock></baselineblock><compositeblock dir="ltr" class="summation-like-symbol limit-type non-limit-kind  inline"><editarea class="from no-area-container" style="margin-bottom: -0.588235em; margin-left: 0.9em;"><line class="" style="margin-bottom: -0.168067em; line-height: 1.2;"><baselineblock></baselineblock><block>m</block></line></editarea><symbol class="" style="font-family: Asana-Math, Asana; font-style: normal; font-weight: normal;"><span>∑</span></symbol><editarea class="to to-summation no-area-container" style="margin-top: -0.470588em; margin-left: 0.9em;"><line class="" style="line-height: 1.2;"><baselineblock></baselineblock><block>i=1</block></line></editarea></compositeblock><block class="Normal">dy</block><compositeblock dir="ltr" class="power-index-symbol-container power-index-symbol-container inline"><middle-base><inline></inline></middle-base><editarea-block class="index-value" style="line-height: 1.2; margin-top: -0.747899em;">i</editarea-block></compositeblock><block class="Normal"> </block></line></editarea></dg-editor-container></position-container></diagram-editors></zoom-region><svg style="position: absolute; width: 100%; height: 100%; overflow: visible; left: 0px; top: 0px; pointer-events: none;"></svg></clip-region></math-diagram></compositeblock></blocks></line><line class="root text-mode full-line-block-inside" style="line-height: 1.4;"><prefix></prefix><blocks><baselineblock class="inline"></baselineblock><compositeblock dir="ltr" class="math-container-symbol role-mathmode-area display" style="font-size: 17px;" data-mathml="<math display=&quot;block&quot; xmlns=&quot;http://www.w3.org/1998/Math/MathML&quot;><mtable columnwidth=&quot;100%&quot; width=&quot;100%&quot; columnalign=&quot;center&quot;><mtr><mtd><mrow><mi>D</mi><mi>i</mi><mi>f</mi><mi>f</mi><mspace is=&quot;true&quot; width=&quot;0.22em&quot;></mspace><mo fence=&quot;true&quot; stretchy=&quot;false&quot;>(</mo><mn>4</mn><mo fence=&quot;true&quot; stretchy=&quot;false&quot;>)</mo><mspace is=&quot;true&quot; width=&quot;0.22em&quot;></mspace><mi>w</mi><mi>r</mi><mi>t</mi><mspace is=&quot;true&quot; width=&quot;0.22em&quot;></mspace><mi>𝛾</mi><mspace is=&quot;true&quot; width=&quot;0.22em&quot;></mspace><mi>w</mi><mi>e</mi><mspace is=&quot;true&quot; width=&quot;0.22em&quot;></mspace><mi>g</mi><mi>e</mi><mi>t</mi></mrow></mtd></mtr><mtr><mtd><mrow><mfrac><mrow><mi>∂</mi><msub><mi>y</mi><mi>i</mi></msub></mrow><mrow><mi>∂</mi><mi>𝛾</mi></mrow></mfrac><mo form=&quot;infix&quot;>=</mo><mover accent=&quot;true&quot;><msub><mi>x</mi><mi>i</mi></msub><mo>^</mo></mover><mspace is=&quot;true&quot; width=&quot;0.22em&quot;></mspace></mrow></mtd></mtr><mtr><mtd><mrow><mfrac><mrow><mi>∂</mi><mi>l</mi></mrow><mrow><mi>∂</mi><mi>𝛾</mi></mrow></mfrac><mo form=&quot;infix&quot;>=</mo><munderover><mo largeop=&quot;true&quot; movablelimit=&quot;true&quot;>∑</mo><mrow><mi>i</mi><mo form=&quot;infix&quot;>=</mo><mn>1</mn></mrow><mi>m</mi></munderover><mfrac><mrow><mi>∂</mi><mi>l</mi></mrow><mrow><mi>∂</mi><msub><mi>y</mi><mi>i</mi></msub></mrow></mfrac><mo separator=&quot;true&quot;>.</mo><mfrac><mrow><mi>∂</mi><msub><mi>y</mi><mi>i</mi></msub></mrow><mrow><mi>∂</mi><mi>𝛾</mi></mrow></mfrac></mrow></mtd></mtr><mtr><mtd><mrow><mspace is=&quot;true&quot; width=&quot;0.22em&quot;></mspace><mo form=&quot;infix&quot;>⟹</mo><mfrac><mrow><mi>∂</mi><mi>l</mi></mrow><mrow><mi>∂</mi><mi>𝛾</mi></mrow></mfrac><mo form=&quot;infix&quot;>=</mo><munderover><mo largeop=&quot;true&quot; movablelimit=&quot;true&quot;>∑</mo><mrow><mi>i</mi><mo form=&quot;infix&quot;>=</mo><mn>1</mn></mrow><mi>m</mi></munderover><mi>d</mi><msub><mi>y</mi><mi>i</mi></msub><mo separator=&quot;true&quot;>.</mo><mover accent=&quot;true&quot;><msub><mi>x</mi><mi>i</mi></msub><mo>^</mo></mover></mrow></mtd></mtr><mtr><mtd><mrow></mrow></mtd></mtr></mtable></math>"><editarea class="math-mode-font lazy no-area-container" style="font-family: Asana-Math, Asana;" aria-hidden="true"><line class="taggable" style="line-height: 1.2;"><baselineblock></baselineblock><block class="Normal">Diff </block><opensymbolblock class="normal" type="parenthesis"><bracket-span>(</bracket-span></opensymbolblock><block class="Normal">4</block><closesymbolblock class="normal" type="parenthesis"><bracket-span>)</bracket-span></closesymbolblock><block class="Normal"> wrt 𝛾 we get</block></line><line class="taggable" style="line-height: 1.2;"><baselineblock></baselineblock><ref-tag data-tag-position="line" class="line-tag automatic" data-tag-id="tid0.5989987190724341" style="font-family: Arial, Helvetica, sans-serif; font-size: 15px;" id="tid0.5989987190724341"><label>(7)</label></ref-tag><compositeblock dir="ltr" class="fraction-symbol smaller"><editarea-line class=" frac-edit-area enumerator" style="line-height: 1.2; margin-bottom: -0.470588em;"><baselineblock></baselineblock><block class="Normal">∂y</block><compositeblock dir="ltr" class="power-index-symbol-container power-index-symbol-container inline"><middle-base><inline></inline></middle-base><editarea-block class="index-value" style="line-height: 1.2; margin-top: -0.747899em;">i</editarea-block></compositeblock></editarea-line><div class="frac-line"><inline style="border-bottom: 1px solid;"></inline></div><editarea-line class=" frac-edit-area denominator" style="line-height: 1.2; margin-top: -0.411765em;"><baselineblock></baselineblock><block class="Normal">∂𝛾</block></editarea-line></compositeblock><block class="Relation">=</block><compositeblock dir="ltr" class="wide-hat-symbol ig-ex-br"><symbol style="display: block; width: 100%; position: relative; height: 0.529412em; margin-bottom: -0.176471em;"><svg style="position: absolute; left: 0px; top: 0px; display: block; width: 100%; height: 100%; overflow: visible;"><polyline points="0.00,8.06 6.66,3.62 13.32,8.06" stroke-width="1" fill="none" stroke-linejoin="bevel"></polyline></svg></symbol><editarea class="no-area-container" style="display: inline-flex;"><line class="" style="line-height: 1.2;"><baselineblock></baselineblock><block class="Normal">x</block><compositeblock dir="ltr" class="power-index-symbol-container power-index-symbol-container inline"><middle-base><inline></inline></middle-base><editarea-block class="index-value" style="line-height: 1.2; margin-top: -0.747899em;">i</editarea-block></compositeblock></line></editarea></compositeblock><block class="Normal"> </block></line><line class="taggable" style="line-height: 1.2;"><baselineblock></baselineblock><compositeblock dir="ltr" class="fraction-symbol smaller"><editarea-line class=" frac-edit-area enumerator" style="line-height: 1.2; margin-bottom: -0.470588em;"><baselineblock></baselineblock><block class="Normal">∂l</block></editarea-line><div class="frac-line"><inline style="border-bottom: 1px solid;"></inline></div><editarea-line class=" frac-edit-area denominator" style="line-height: 1.2; margin-top: -0.411765em;"><baselineblock></baselineblock><block class="Normal">∂𝛾</block></editarea-line></compositeblock><block class="Relation">=</block><compositeblock dir="ltr" class="summation-like-symbol limit-type limit-kind "><editarea class="from no-area-container" style="margin-bottom: -0.470588em;"><line class="" style="margin-bottom: -0.168067em; line-height: 1.2;"><baselineblock></baselineblock><block>m</block></line></editarea><symbol class="" style="font-family: Asana-Math, Asana; font-style: normal; font-weight: normal;"><span>∑</span></symbol><editarea class="to to-summation no-area-container" style="margin-top: 0.117647em;"><line class="" style="line-height: 1.2;"><baselineblock></baselineblock><block>i=1</block></line></editarea></compositeblock><compositeblock dir="ltr" class="fraction-symbol smaller"><editarea-line class=" frac-edit-area enumerator" style="line-height: 1.2; margin-bottom: -0.470588em;"><baselineblock></baselineblock><block class="Normal">∂l</block></editarea-line><div class="frac-line"><inline style="border-bottom: 1px solid;"></inline></div><editarea-line class=" frac-edit-area denominator" style="line-height: 1.2; margin-top: -0.411765em;"><baselineblock></baselineblock><block class="Normal">∂y</block><compositeblock dir="ltr" class="power-index-symbol-container power-index-symbol-container inline"><middle-base><inline></inline></middle-base><editarea-block class="index-value" style="line-height: 1.2; margin-top: -0.747899em;">i</editarea-block></compositeblock></editarea-line></compositeblock><block class="Punctuation">.</block><compositeblock dir="ltr" class="fraction-symbol smaller"><editarea-line class=" frac-edit-area enumerator" style="line-height: 1.2; margin-bottom: -0.470588em;"><baselineblock></baselineblock><block class="Normal">∂y</block><compositeblock dir="ltr" class="power-index-symbol-container power-index-symbol-container inline"><middle-base><inline></inline></middle-base><editarea-block class="index-value" style="line-height: 1.2; margin-top: -0.747899em;">i</editarea-block></compositeblock></editarea-line><div class="frac-line"><inline style="border-bottom: 1px solid;"></inline></div><editarea-line class=" frac-edit-area denominator" style="line-height: 1.2; margin-top: -0.411765em;"><baselineblock></baselineblock><block class="Normal">∂𝛾</block></editarea-line></compositeblock></line><line class="taggable" style="line-height: 1.2;"><baselineblock></baselineblock><ref-tag data-tag-position="line" class="line-tag" data-tag-id="tid0.9911400913994187" style="font-family: Arial, Helvetica, sans-serif; font-size: 15px;" id="tid0.9911400913994187"><label>(From 7)</label></ref-tag><block class="Normal"> </block><block class="Relation">⟹</block><compositeblock dir="ltr" class="fraction-symbol smaller"><editarea-line class=" frac-edit-area enumerator" style="line-height: 1.2; margin-bottom: -0.470588em;"><baselineblock></baselineblock><block class="Normal">∂l</block></editarea-line><div class="frac-line"><inline style="border-bottom: 1px solid;"></inline></div><editarea-line class=" frac-edit-area denominator" style="line-height: 1.2; margin-top: -0.411765em;"><baselineblock></baselineblock><block class="Normal">∂𝛾</block></editarea-line></compositeblock><block class="Relation">=</block><compositeblock dir="ltr" class="summation-like-symbol limit-type limit-kind "><editarea class="from no-area-container" style="margin-bottom: -0.470588em;"><line class="" style="margin-bottom: -0.168067em; line-height: 1.2;"><baselineblock></baselineblock><block>m</block></line></editarea><symbol class="" style="font-family: Asana-Math, Asana; font-style: normal; font-weight: normal;"><span>∑</span></symbol><editarea class="to to-summation no-area-container" style="margin-top: 0.117647em;"><line class="" style="line-height: 1.2;"><baselineblock></baselineblock><block>i=1</block></line></editarea></compositeblock><block class="Normal">dy</block><compositeblock dir="ltr" class="power-index-symbol-container power-index-symbol-container"><middle-base><inline></inline></middle-base><editarea-block class="index-value" style="line-height: 1.2; margin-top: -0.747899em;">i</editarea-block></compositeblock><block class="Punctuation">.</block><compositeblock dir="ltr" class="wide-hat-symbol ig-ex-br"><symbol style="display: block; width: 100%; position: relative; height: 0.529412em; margin-bottom: -0.176471em;"><svg style="position: absolute; left: 0px; top: 0px; display: block; width: 100%; height: 100%; overflow: visible;"><polyline points="0.00,8.06 6.66,3.62 13.32,8.06" stroke-width="1" fill="none" stroke-linejoin="bevel"></polyline></svg></symbol><editarea class="no-area-container" style="display: inline-flex;"><line class="" style="line-height: 1.2;"><baselineblock></baselineblock><block class="Normal">x</block><compositeblock dir="ltr" class="power-index-symbol-container power-index-symbol-container inline"><middle-base><inline></inline></middle-base><editarea-block class="index-value" style="line-height: 1.2; margin-top: -0.747899em;">i</editarea-block></compositeblock></line></editarea></compositeblock></line><line class="taggable" style="line-height: 1.2;"><baselineblock></baselineblock><emptyblock aria-label="empty line"> </emptyblock></line></editarea><span role="presentation" style="width:100%;position:absolute;top:0;left:0;clip:rect(1px, 1px, 1px, 1px);height:1px;padding:1px 0 0 0!important;overflow:hidden;user-select:none;"><math display="block" xmlns="http://www.w3.org/1998/Math/MathML"><mtable columnwidth="100%" columnalign="center" width="100%"><mtr><mtd><mrow><mi>D</mi><mi>i</mi><mi>f</mi><mi>f</mi><mspace is="true" width="0.22em"></mspace><mo fence="true" stretchy="false">(</mo><mn>4</mn><mo fence="true" stretchy="false">)</mo><mspace is="true" width="0.22em"></mspace><mi>w</mi><mi>r</mi><mi>t</mi><mspace is="true" width="0.22em"></mspace><mi>𝛾</mi><mspace is="true" width="0.22em"></mspace><mi>w</mi><mi>e</mi><mspace is="true" width="0.22em"></mspace><mi>g</mi><mi>e</mi><mi>t</mi></mrow></mtd></mtr><mtr><mtd><mrow><mfrac><mrow><mi>∂</mi><msub><mi>y</mi><mi>i</mi></msub></mrow><mrow><mi>∂</mi><mi>𝛾</mi></mrow></mfrac><mo form="infix">=</mo><mover accent="true"><msub><mi>x</mi><mi>i</mi></msub><mo>^</mo></mover><mspace is="true" width="0.22em"></mspace></mrow></mtd></mtr><mtr><mtd><mrow><mfrac><mrow><mi>∂</mi><mi>l</mi></mrow><mrow><mi>∂</mi><mi>𝛾</mi></mrow></mfrac><mo form="infix">=</mo><munderover><mo largeop="true" movablelimit="true">∑</mo><mrow><mi>i</mi><mo form="infix">=</mo><mn>1</mn></mrow><mi>m</mi></munderover><mfrac><mrow><mi>∂</mi><mi>l</mi></mrow><mrow><mi>∂</mi><msub><mi>y</mi><mi>i</mi></msub></mrow></mfrac><mo separator="true">.</mo><mfrac><mrow><mi>∂</mi><msub><mi>y</mi><mi>i</mi></msub></mrow><mrow><mi>∂</mi><mi>𝛾</mi></mrow></mfrac></mrow></mtd></mtr><mtr><mtd><mrow><mspace is="true" width="0.22em"></mspace><mo form="infix">⟹</mo><mfrac><mrow><mi>∂</mi><mi>l</mi></mrow><mrow><mi>∂</mi><mi>𝛾</mi></mrow></mfrac><mo form="infix">=</mo><munderover><mo largeop="true" movablelimit="true">∑</mo><mrow><mi>i</mi><mo form="infix">=</mo><mn>1</mn></mrow><mi>m</mi></munderover><mi>d</mi><msub><mi>y</mi><mi>i</mi></msub><mo separator="true">.</mo><mover accent="true"><msub><mi>x</mi><mi>i</mi></msub><mo>^</mo></mover></mrow></mtd></mtr><mtr><mtd><mrow></mrow></mtd></mtr></mtable></math></span></compositeblock></blocks></line><line class="root text-mode full-line-block-inside" style="line-height: 1.4;"><prefix></prefix><blocks><baselineblock class="inline"></baselineblock><compositeblock dir="ltr" class="math-diagram inline" aria-label="Diagram" role="img"><math-diagram aria-hidden="true" data-amt="diagram" style="height: 224px; z-index: 1;"><clip-region style="width: 100%; height: 100%; display: block; overflow: hidden; position: relative;"><zoom-region><svg><g><defs><pattern id=".27885548088762735" width="10" height="10" patternUnits="userSpaceOnUse"><path d="M 10 0 L 0 0 0 10" fill="none" stroke="lightgray" stroke-width="0.5"></path></pattern></defs><rect width="100%" height="100%" fill="url(#.27885548088762735)" stroke="lightgray" stroke-width="0.5"></rect></g></svg><div class="diagram-plotly-layer" style="position: absolute; inset: 0px; pointer-events: none; fill: none; stroke: none;"><svg style="overflow:visible;position:absolute;left:0;top:0;"></svg></div><svg class="role-diagram-draw-area"><g class="shapes-region" style="stroke: black; fill: none;"><g class="composite-shape"><path class="real" d=" M128,80 L139.5,80 L139.5,170.2 L128,170.2 Z" style="stroke-width: 1px; stroke: rgb(0, 0, 0); fill: none; fill-opacity: 1;"></path></g><g class="composite-shape"><path class="real" d=" M289,80 L300.5,80 L300.5,170.2 L289,170.2 Z" style="stroke-width: 1px; stroke: rgb(0, 0, 0); fill: none; fill-opacity: 1;"></path></g><g class="composite-shape"><path class="real" d=" M461,80 L472.5,80 L472.5,170.2 L461,170.2 Z" style="stroke-width: 1px; stroke: rgb(0, 0, 0); fill: none; fill-opacity: 1;"></path></g><g class="arrow-line"><path class="connection real" stroke-dasharray="" d="  M533.5,125.03 L489.5,125.03" style="stroke: rgb(211, 34, 34); stroke-opacity: 1; stroke-width: 1px; fill: rgb(255, 255, 255); fill-opacity: 1;"></path><g stroke="rgb(211,34,34)" stroke-opacity="1" transform="matrix(1,-2.4492935982947064e-16,2.4492935982947064e-16,1,487.5,125.0333251953125)" style="stroke: rgb(211, 34, 34); stroke-width: 1px;"><path d=" M10.93,-3.29 Q4.96,-0.45 0,0 Q4.96,0.45 10.93,3.29"></path></g></g><g class="arrow-line"><path class="connection real" stroke-dasharray="" d="  M393.5,59.42 L339.49,53.63" style="stroke: rgb(211, 34, 34); stroke-opacity: 1; stroke-width: 1px; fill: rgb(255, 255, 255); fill-opacity: 1;"></path><g stroke="rgb(211,34,34)" stroke-opacity="1" transform="matrix(0.9943007903969989,0.10661115427526012,-0.10661115427526012,0.9943007903969989,337.5,53.41668701171875)" style="stroke: rgb(211, 34, 34); stroke-width: 1px;"><path d=" M10.93,-3.29 Q4.96,-0.45 0,0 Q4.96,0.45 10.93,3.29"></path></g></g><g class="arrow-line"><path class="connection real" stroke-dasharray="" d="  M405.5,92 L360.34,118.18" style="stroke: rgb(211, 34, 34); stroke-opacity: 1; stroke-width: 1px; fill: rgb(255, 255, 255); fill-opacity: 1;"></path><g stroke="rgb(211,34,34)" stroke-opacity="1" transform="matrix(0.8651514205697043,-0.5015107371594577,0.5015107371594577,0.8651514205697043,358.6072076055523,119.18081640711526)" style="stroke: rgb(211, 34, 34); stroke-width: 1px;"><path d=" M10.93,-3.29 Q4.96,-0.45 0,0 Q4.96,0.45 10.93,3.29"></path></g></g><g class="arrow-line"><path class="connection real" stroke-dasharray="" d="  M449.5,124 L385.04,177.72" style="stroke: rgb(211, 34, 34); stroke-opacity: 1; stroke-width: 1px; fill: rgb(255, 255, 255); fill-opacity: 1;"></path><g stroke="rgb(211,34,34)" stroke-opacity="1" transform="matrix(0.7681717916741639,-0.6402437805056015,0.6402437805056015,0.7681717916741639,383.5,178.99999999999997)" style="stroke: rgb(211, 34, 34); stroke-width: 1px;"><path d=" M10.93,-3.29 Q4.96,-0.45 0,0 Q4.96,0.45 10.93,3.29"></path></g></g><g></g></g><g><g class="connection-group"><g class="arrow-line"><path class="connection real" stroke-dasharray="" d="  M210.04,109 L235.67,80.14" style="stroke: rgb(0, 0, 0); stroke-width: 1px; fill: none; fill-opacity: 1;"></path><g stroke="#000" transform="matrix(-0.6639262126522422,0.7477980904985314,-0.7477980904985314,-0.6639262126522422,237,78.64077669902912)" style="stroke: rgb(0, 0, 0); stroke-width: 1px;"><path d=" M10.93,-3.29 Q4.96,-0.45 0,0 Q4.96,0.45 10.93,3.29"></path></g></g></g><g class="connection-group"><g class="arrow-line"><path class="connection real" stroke-dasharray="" d="  M263,58.37 L286.16,48.34" style="stroke: rgb(0, 0, 0); stroke-width: 1px; fill: none; fill-opacity: 1;"></path><g stroke="#000" transform="matrix(-0.9176852963230405,0.39730806298449733,-0.39730806298449733,-0.9176852963230405,288.00000000000006,47.54639175257732)" style="stroke: rgb(0, 0, 0); stroke-width: 1px;"><path d=" M10.93,-3.29 Q4.96,-0.45 0,0 Q4.96,0.45 10.93,3.29"></path></g></g></g><g class="connection-group"><g class="arrow-line"><path class="connection real" stroke-dasharray="" d="  M212,111.34 L286.43,52.53" style="stroke: rgb(0, 0, 0); stroke-width: 1px; fill: none; fill-opacity: 1;"></path><g stroke="#000" transform="matrix(-0.7846681867334077,0.6199159916702472,-0.6199159916702472,-0.7846681867334077,288,51.295)" style="stroke: rgb(0, 0, 0); stroke-width: 1px;"><path d=" M10.93,-3.29 Q4.96,-0.45 0,0 Q4.96,0.45 10.93,3.29"></path></g></g></g><g class="connection-group"><g class="arrow-line"><path class="connection real" stroke-dasharray="" d="  M309,44.03 L460.01,58.78" style="stroke: rgb(0, 0, 0); stroke-width: 1px; fill: none; fill-opacity: 1;"></path><g stroke="#000" transform="matrix(-0.9952614022063083,-0.09723549392239937,0.09723549392239937,-0.9952614022063083,462.00000000000006,58.97413793103449)" style="stroke: rgb(0, 0, 0); stroke-width: 1px;"><path d=" M10.93,-3.29 Q4.96,-0.45 0,0 Q4.96,0.45 10.93,3.29"></path></g></g></g><g class="connection-group"><g class="arrow-line"><path class="connection real" stroke-dasharray="" d="  M360,125.74 L460.27,67.14" style="stroke: rgb(0, 0, 0); stroke-width: 1px; fill: none; fill-opacity: 1;"></path><g stroke="#000" transform="matrix(-0.863395550606772,0.5045276238150188,-0.5045276238150188,-0.863395550606772,461.99999999999994,66.13580246913581)" style="stroke: rgb(0, 0, 0); stroke-width: 1px;"><path d=" M10.93,-3.29 Q4.96,-0.45 0,0 Q4.96,0.45 10.93,3.29"></path></g></g></g><g class="connection-group"><g class="arrow-line"><path class="connection real" stroke-dasharray="" d="  M364,150.49 L460.46,70.04" style="stroke: rgb(0, 0, 0); stroke-width: 1px; fill: none; fill-opacity: 1;"></path><g stroke="#000" transform="matrix(-0.7679482576392958,0.6405118840339887,-0.6405118840339887,-0.7679482576392958,462,68.75744680851062)" style="stroke: rgb(0, 0, 0); stroke-width: 1px;"><path d=" M10.93,-3.29 Q4.96,-0.45 0,0 Q4.96,0.45 10.93,3.29"></path></g></g></g><g class="connection-group"><g class="arrow-line"><path class="connection real" stroke-dasharray="" d="  M146,60.37 L235,63.48" style="stroke: rgb(0, 0, 0); stroke-width: 1px; fill: none; fill-opacity: 1;"></path><g stroke="#000" transform="matrix(-0.9993908270190958,-0.0348994967025009,0.0348994967025009,-0.9993908270190958,237.00000000000003,63.54585152838426)" style="stroke: rgb(0, 0, 0); stroke-width: 1px;"><path d=" M10.93,-3.29 Q4.96,-0.45 0,0 Q4.96,0.45 10.93,3.29"></path></g></g></g><g class="connection-group"><g class="arrow-line"><path class="connection real" stroke-dasharray="" d="  M146,70.33 L183.86,107.6" style="stroke: rgb(0, 0, 0); stroke-width: 1px; fill: none; fill-opacity: 1;"></path><g stroke="#000" transform="matrix(-0.7127609484023376,-0.7014070362012347,0.7014070362012347,-0.7127609484023376,185.29032258064512,109)" style="stroke: rgb(0, 0, 0); stroke-width: 1px;"><path d=" M10.93,-3.29 Q4.96,-0.45 0,0 Q4.96,0.45 10.93,3.29"></path></g></g></g><g class="connection-group"><g class="arrow-line"><path class="connection real" stroke-dasharray="" d="  M146,58.9 L286.01,44.3" style="stroke: rgb(0, 0, 0); stroke-width: 1px; fill: none; fill-opacity: 1;"></path><g stroke="#000" transform="matrix(-0.9946127349631558,0.10366053949845712,-0.10366053949845712,-0.9946127349631558,288,44.09509202453988)" style="stroke: rgb(0, 0, 0); stroke-width: 1px;"><path d=" M10.93,-3.29 Q4.96,-0.45 0,0 Q4.96,0.45 10.93,3.29"></path></g></g></g></g><g></g><g></g></svg><diagram-editors><position-container data-rotation="0" data-skewx="0" data-flipx="false" data-anchor="left-top" style="left: 126px; top: 48px;"><dg-editor-container data-editor-id="de32144081209972997" class="no-border-on-print math-diagram-editor" style="border: 1px solid transparent; transform: translate(0%); font-size: 17px; font-family: Asana-Math, Asana;"><editarea class="diagram-editor non-wrap no-area-container" style="font-size: 1em;"><line class="" style="line-height: 1.2;"><baselineblock></baselineblock><block class="Normal">x</block><compositeblock dir="ltr" class="power-index-symbol-container power-index-symbol-container inline"><middle-base><inline></inline></middle-base><editarea-block class="index-value" style="line-height: 1.2; margin-top: -0.747899em;">i</editarea-block></compositeblock></line></editarea></dg-editor-container></position-container><position-container data-rotation="0" data-skewx="0" data-flipx="false" data-anchor="left-top" style="left: 289px; top: 28px;"><dg-editor-container data-editor-id="de9226917861142059" class="no-border-on-print math-diagram-editor" style="border: 1px solid transparent; transform: translate(0%); font-size: 17px; font-family: Asana-Math, Asana;"><editarea class="diagram-editor non-wrap no-area-container" style="font-size: 1em;"><line class="" style="line-height: 1.2;"><baselineblock></baselineblock><compositeblock dir="ltr" class="wide-hat-symbol ig-ex-br inline"><symbol style="display: block; width: 100%; position: relative; height: 0.529412em; margin-bottom: -0.176471em;"><svg style="position: absolute; left: 0px; top: 0px; display: block; width: 100%; height: 100%; overflow: visible;"><polyline points="0.00,8.06 6.66,3.62 13.32,8.06" stroke-width="1" fill="none" stroke-linejoin="bevel"></polyline></svg></symbol><editarea class="no-area-container" style="display: inline-flex;"><line class="" style="line-height: 1.2;"><baselineblock></baselineblock><block class="Normal">x</block><compositeblock dir="ltr" class="power-index-symbol-container power-index-symbol-container inline"><middle-base><inline></inline></middle-base><editarea-block class="index-value" style="line-height: 1.2; margin-top: -0.747899em;">i</editarea-block></compositeblock></line></editarea></compositeblock></line></editarea></dg-editor-container></position-container><position-container data-rotation="0" data-skewx="0" data-flipx="false" data-anchor="left-top" style="left: 186px; top: 110px;"><dg-editor-container data-editor-id="de6472602837911368" class="no-border-on-print math-diagram-editor" style="border: 1px solid transparent; transform: translate(0%); font-size: 17px; font-family: Asana-Math, Asana;"><editarea class="diagram-editor non-wrap no-area-container" style="font-size: 1em;"><line class="" style="line-height: 1.2;"><baselineblock></baselineblock><block class="Normal">𝜇</block><compositeblock dir="ltr" class="power-index-symbol-container power-index-symbol-container inline"><middle-base><inline></inline></middle-base><editarea-block class="index-value" style="line-height: 1.2; margin-top: -0.747899em;">B</editarea-block></compositeblock></line></editarea></dg-editor-container></position-container><position-container data-rotation="0" data-skewx="0" data-flipx="false" data-anchor="left-top" style="left: 238px; top: 50px;"><dg-editor-container data-editor-id="de43479855225398156" class="no-border-on-print math-diagram-editor" style="border: 1px solid transparent; transform: translate(0%); font-size: 17px; font-family: Asana-Math, Asana;"><editarea class="diagram-editor non-wrap no-area-container" style="font-size: 1em;"><line class="" style="line-height: 1.2;"><baselineblock></baselineblock><block class="Normal">𝜎</block><compositeblock dir="ltr" class="power-index-symbol-container power-index-symbol-container has-power inline"><editarea-block class="power-value" style="line-height: 1.2; margin-top: 0em; margin-bottom: -1.05378em;">2</editarea-block><middle-base><inline></inline></middle-base><editarea-block class="index-value" style="line-height: 1.2; margin-top: -0.60899em; margin-bottom: 0em;">B</editarea-block></compositeblock></line></editarea></dg-editor-container></position-container><position-container data-rotation="0" data-skewx="0" data-flipx="false" data-anchor="left-top" style="left: 347px; top: 147px;"><dg-editor-container data-editor-id="de5913733395590287" class="no-border-on-print math-diagram-editor" style="border: 1px solid transparent; transform: translate(0%); font-size: 17px; font-family: Asana-Math, Asana;"><editarea class="diagram-editor non-wrap no-area-container" style="font-size: 1em;"><line class="" style="line-height: 1.2;"><baselineblock></baselineblock><block class="Normal">𝛾</block></line></editarea></dg-editor-container></position-container><position-container data-rotation="0" data-skewx="0" data-flipx="false" data-anchor="left-top" style="left: 343px; top: 120px;"><dg-editor-container data-editor-id="de7952664532175676" class="no-border-on-print math-diagram-editor" style="border: 1px solid transparent; transform: translate(0%); font-size: 17px; font-family: Asana-Math, Asana;"><editarea class="diagram-editor non-wrap no-area-container" style="font-size: 1em;"><line class="" style="line-height: 1.2;"><baselineblock></baselineblock><block class="Normal">𝛽</block></line></editarea></dg-editor-container></position-container><position-container data-rotation="0" data-skewx="0" data-flipx="false" data-anchor="left-top" style="left: 463px; top: 48px;"><dg-editor-container data-editor-id="de8209120017154962" class="no-border-on-print math-diagram-editor" style="border: 1px solid transparent; transform: translate(0%); font-size: 17px; font-family: Asana-Math, Asana;"><editarea class="diagram-editor non-wrap no-area-container" style="font-size: 1em;"><line class="" style="line-height: 1.2;"><baselineblock></baselineblock><block class="Normal">y</block><compositeblock dir="ltr" class="power-index-symbol-container power-index-symbol-container inline"><middle-base><inline></inline></middle-base><editarea-block class="index-value" style="line-height: 1.2; margin-top: -0.747899em;">i</editarea-block></compositeblock></line></editarea></dg-editor-container></position-container><position-container data-rotation="0" data-skewx="0" data-flipx="false" data-anchor="left-top" style="left: 499px; top: 94px;"><dg-editor-container data-editor-id="de5028128138181821" class="no-border-on-print math-diagram-editor" style="border: 1px solid transparent; transform: translate(0%); font-size: 17px; font-family: Asana-Math, Asana;"><editarea class="diagram-editor non-wrap no-area-container" style="font-size: 1em;"><line class="" style="line-height: 1.2;"><baselineblock></baselineblock><block class="Normal">dy</block><compositeblock dir="ltr" class="power-index-symbol-container power-index-symbol-container inline"><middle-base><inline></inline></middle-base><editarea-block class="index-value" style="line-height: 1.2; margin-top: -0.747899em;">i</editarea-block></compositeblock></line></editarea></dg-editor-container></position-container><position-container data-rotation="4.59" data-skewx="0" data-flipx="false" data-anchor="left-top" style="left: 349.032px; top: 23.2379px; transform: rotate(4.59deg);"><dg-editor-container data-editor-id="de7118269558166068" class="no-border-on-print math-diagram-editor" style="border: 1px solid transparent; transform: translate(0%); font-size: 17px; font-family: Asana-Math, Asana;"><editarea class="diagram-editor non-wrap no-area-container" style="font-size: 1em;"><line class="" style="line-height: 1.2;"><baselineblock></baselineblock><block class="Normal">dy</block><compositeblock dir="ltr" class="power-index-symbol-container power-index-symbol-container inline"><middle-base><inline></inline></middle-base><editarea-block class="index-value" style="line-height: 1.2; margin-top: -0.747899em;">i</editarea-block></compositeblock><block class="Punctuation">.</block><block class="Normal">𝛾</block></line></editarea></dg-editor-container></position-container><position-container data-rotation="327.88" data-skewx="0" data-flipx="false" data-anchor="left-top" style="left: 329.538px; top: 90.3417px; transform: rotate(327.88deg);"><dg-editor-container data-editor-id="de35975150056366023" class="no-border-on-print math-diagram-editor" style="border: 1px solid transparent; transform: translate(0%); font-size: 17px; font-family: Asana-Math, Asana;"><editarea class="diagram-editor non-wrap no-area-container" style="font-size: 1em;"><line class="" style="line-height: 1.2;"><baselineblock></baselineblock><compositeblock dir="ltr" class="summation-like-symbol limit-type non-limit-kind  inline"><editarea class="from no-area-container" style="margin-bottom: -0.588235em; margin-left: 0.9em;"><line class="" style="margin-bottom: -0.168067em; line-height: 1.2;"><baselineblock></baselineblock><block>m</block></line></editarea><symbol class="" style="font-family: Asana-Math, Asana; font-style: normal; font-weight: normal;"><span>∑</span></symbol><editarea class="to to-summation no-area-container" style="margin-top: -0.470588em; margin-left: 0.9em;"><line class="" style="line-height: 1.2;"><baselineblock></baselineblock><block>i=1</block></line></editarea></compositeblock><block class="Normal">dy</block><compositeblock dir="ltr" class="power-index-symbol-container power-index-symbol-container inline"><middle-base><inline></inline></middle-base><editarea-block class="index-value" style="line-height: 1.2; margin-top: -0.747899em;">i</editarea-block></compositeblock><block class="Normal"> </block></line></editarea></dg-editor-container></position-container><position-container data-rotation="319.54" data-skewx="0" data-flipx="false" data-anchor="left-top" style="left: 362.071px; top: 148.842px; transform: rotate(319.54deg);"><dg-editor-container data-editor-id="de40482955143473376" class="no-border-on-print math-diagram-editor" style="border: 1px solid transparent; transform: translate(0%); font-size: 17px; font-family: Asana-Math, Asana;"><editarea class="diagram-editor non-wrap no-area-container" style="font-size: 1em;"><line class="" style="line-height: 1.2;"><baselineblock></baselineblock><compositeblock dir="ltr" class="summation-like-symbol limit-type non-limit-kind  inline"><editarea class="from no-area-container" style="margin-bottom: -0.588235em; margin-left: 0.9em;"><line class="" style="margin-bottom: -0.168067em; line-height: 1.2;"><baselineblock></baselineblock><block>m</block></line></editarea><symbol class="" style="font-family: Asana-Math, Asana; font-style: normal; font-weight: normal;"><span>∑</span></symbol><editarea class="to to-summation no-area-container" style="margin-top: -0.470588em; margin-left: 0.9em;"><line class="" style="line-height: 1.2;"><baselineblock></baselineblock><block>i=1</block></line></editarea></compositeblock><block class="Normal">dy</block><compositeblock dir="ltr" class="power-index-symbol-container power-index-symbol-container inline"><middle-base><inline></inline></middle-base><editarea-block class="index-value" style="line-height: 1.2; margin-top: -0.747899em;">i</editarea-block></compositeblock><block class="Punctuation">.</block><compositeblock dir="ltr" class="wide-hat-symbol ig-ex-br inline"><symbol style="display: block; width: 100%; position: relative; height: 0.529412em; margin-bottom: -0.176471em;"><svg style="position: absolute; left: 0px; top: 0px; display: block; width: 100%; height: 100%; overflow: visible;"><polyline points="0.00,8.06 6.66,3.62 13.32,8.06" stroke-width="1" fill="none" stroke-linejoin="bevel"></polyline></svg></symbol><editarea class="no-area-container" style="display: inline-flex;"><line class="" style="line-height: 1.2;"><baselineblock></baselineblock><block class="Normal">x</block><compositeblock dir="ltr" class="power-index-symbol-container power-index-symbol-container inline"><middle-base><inline></inline></middle-base><editarea-block class="index-value" style="line-height: 1.2; margin-top: -0.747899em;">i</editarea-block></compositeblock></line></editarea></compositeblock></line></editarea></dg-editor-container></position-container></diagram-editors></zoom-region><svg style="position: absolute; width: 100%; height: 100%; overflow: visible; left: 0px; top: 0px; pointer-events: none;"></svg></clip-region></math-diagram></compositeblock></blocks></line><line class="root text-mode" style="line-height: 1.4;"><prefix></prefix><blocks><baselineblock class="inline"></baselineblock><block>A note for the reader: When the gradient </block><compositeblock dir="ltr" class="math-container-symbol role-mathmode-area inline" style="font-size: 17px;" data-mathml="<math xmlns=&quot;http://www.w3.org/1998/Math/MathML&quot;><mstyle displaystyle=&quot;true&quot;><mrow><mi>d</mi><mover accent=&quot;true&quot;><msub><mi>x</mi><mi>i</mi></msub><mo>^</mo></mover></mrow></mstyle></math>"><editarea class="math-mode-font lazy no-area-container" style="font-family: Asana-Math, Asana;" aria-hidden="true"><line class="" style="line-height: 1.2;"><baselineblock></baselineblock><block class="Normal">d</block><compositeblock dir="ltr" class="wide-hat-symbol ig-ex-br"><symbol style="display: block; width: 100%; position: relative; height: 0.529412em; margin-bottom: -0.176471em;"><svg style="position: absolute; left: 0px; top: 0px; display: block; width: 100%; height: 100%; overflow: visible;"><polyline points="0.00,8.06 6.66,3.62 13.32,8.06" stroke-width="1" fill="none" stroke-linejoin="bevel"></polyline></svg></symbol><editarea class="no-area-container" style="display: inline-flex;"><line class="" style="line-height: 1.2;"><baselineblock></baselineblock><block class="Normal">x</block><compositeblock dir="ltr" class="power-index-symbol-container power-index-symbol-container inline"><middle-base><inline></inline></middle-base><editarea-block class="index-value" style="line-height: 1.2; margin-top: -0.747899em;">i</editarea-block></compositeblock></line></editarea></compositeblock></line></editarea><span role="presentation" style="width:100%;position:absolute;top:0;left:0;clip:rect(1px, 1px, 1px, 1px);height:1px;padding:1px 0 0 0!important;overflow:hidden;user-select:none;"><math xmlns="http://www.w3.org/1998/Math/MathML"><mstyle displaystyle="true"><mrow><mi>d</mi><mover accent="true"><msub><mi>x</mi><mi>i</mi></msub><mo>^</mo></mover></mrow></mstyle></math></span></compositeblock><block> flows into the network, each of the </block><compositeblock dir="ltr" class="math-container-symbol role-mathmode-area inline" style="font-size: 17px;" data-mathml="<math xmlns=&quot;http://www.w3.org/1998/Math/MathML&quot;><mstyle displaystyle=&quot;true&quot;><msup><mi>i</mi><mrow><mi>t</mi><mi>h</mi></mrow></msup></mstyle></math>"><editarea class="math-mode-font lazy no-area-container" style="font-family: Asana-Math, Asana;" aria-hidden="true"><line class="" style="line-height: 1.2;"><baselineblock></baselineblock><block class="Normal">i</block><compositeblock dir="ltr" class="power-index-symbol-container power-index-symbol-container has-power"><editarea-line class=" power-value" style="line-height: 1.2; margin-bottom: -1.06571em;"><baselineblock></baselineblock><block>th</block></editarea-line><middle-base><inline></inline></middle-base></compositeblock></line></editarea><span role="presentation" style="width:100%;position:absolute;top:0;left:0;clip:rect(1px, 1px, 1px, 1px);height:1px;padding:1px 0 0 0!important;overflow:hidden;user-select:none;"><math xmlns="http://www.w3.org/1998/Math/MathML"><mstyle displaystyle="true"><msup><mi>i</mi><mrow><mi>t</mi><mi>h</mi></mrow></msup></mstyle></math></span></compositeblock><block> element of </block><compositeblock dir="ltr" class="math-container-symbol role-mathmode-area inline" style="font-size: 17px;" data-mathml="<math xmlns=&quot;http://www.w3.org/1998/Math/MathML&quot;><mstyle displaystyle=&quot;true&quot;><msub><mi>x</mi><mi>i</mi></msub></mstyle></math>"><editarea class="math-mode-font lazy no-area-container" style="font-family: Asana-Math, Asana;" aria-hidden="true"><line class="" style="line-height: 1.2;"><baselineblock></baselineblock><block class="Normal">x</block><compositeblock dir="ltr" class="power-index-symbol-container power-index-symbol-container"><middle-base><inline></inline></middle-base><editarea-block class="index-value" style="line-height: 1.2; margin-top: -0.747899em;">i</editarea-block></compositeblock></line></editarea><span role="presentation" style="width:100%;position:absolute;top:0;left:0;clip:rect(1px, 1px, 1px, 1px);height:1px;padding:1px 0 0 0!important;overflow:hidden;user-select:none;"><math xmlns="http://www.w3.org/1998/Math/MathML"><mstyle displaystyle="true"><msub><mi>x</mi><mi>i</mi></msub></mstyle></math></span></compositeblock><block> is effected by the corresponding </block><compositeblock dir="ltr" class="math-container-symbol role-mathmode-area inline" style="font-size: 17px;" data-mathml="<math xmlns=&quot;http://www.w3.org/1998/Math/MathML&quot;><mstyle displaystyle=&quot;true&quot;><msup><mi>i</mi><mrow><mi>t</mi><mi>h</mi></mrow></msup></mstyle></math>"><editarea class="math-mode-font lazy no-area-container" style="font-family: Asana-Math, Asana;" aria-hidden="true"><line class="" style="line-height: 1.2;"><baselineblock></baselineblock><block class="Normal">i</block><compositeblock dir="ltr" class="power-index-symbol-container power-index-symbol-container has-power"><editarea-line class=" power-value" style="line-height: 1.2; margin-bottom: -1.06571em;"><baselineblock></baselineblock><block>th</block></editarea-line><middle-base><inline></inline></middle-base></compositeblock></line></editarea><span role="presentation" style="width:100%;position:absolute;top:0;left:0;clip:rect(1px, 1px, 1px, 1px);height:1px;padding:1px 0 0 0!important;overflow:hidden;user-select:none;"><math xmlns="http://www.w3.org/1998/Math/MathML"><mstyle displaystyle="true"><msup><mi>i</mi><mrow><mi>t</mi><mi>h</mi></mrow></msup></mstyle></math></span></compositeblock><block> element of </block><compositeblock dir="ltr" class="math-container-symbol role-mathmode-area inline" style="font-size: 17px;" data-mathml="<math xmlns=&quot;http://www.w3.org/1998/Math/MathML&quot;><mstyle displaystyle=&quot;true&quot;><mrow><mi>d</mi><mover accent=&quot;true&quot;><msub><mi>x</mi><mi>i</mi></msub><mo>^</mo></mover><mspace is=&quot;true&quot; width=&quot;0.22em&quot;></mspace></mrow></mstyle></math>"><editarea class="math-mode-font lazy no-area-container" style="font-family: Asana-Math, Asana;" aria-hidden="true"><line class="" style="line-height: 1.2;"><baselineblock></baselineblock><block class="Normal">d</block><compositeblock dir="ltr" class="wide-hat-symbol ig-ex-br"><symbol style="display: block; width: 100%; position: relative; height: 0.529412em; margin-bottom: -0.176471em;"><svg style="position: absolute; left: 0px; top: 0px; display: block; width: 100%; height: 100%; overflow: visible;"><polyline points="0.00,8.06 6.66,3.62 13.32,8.06" stroke-width="1" fill="none" stroke-linejoin="bevel"></polyline></svg></symbol><editarea class="no-area-container" style="display: inline-flex;"><line class="" style="line-height: 1.2;"><baselineblock></baselineblock><block class="Normal">x</block><compositeblock dir="ltr" class="power-index-symbol-container power-index-symbol-container inline"><middle-base><inline></inline></middle-base><editarea-block class="index-value" style="line-height: 1.2; margin-top: -0.747899em;">i</editarea-block></compositeblock></line></editarea></compositeblock><block class="Normal"> </block></line></editarea><span role="presentation" style="width:100%;position:absolute;top:0;left:0;clip:rect(1px, 1px, 1px, 1px);height:1px;padding:1px 0 0 0!important;overflow:hidden;user-select:none;"><math xmlns="http://www.w3.org/1998/Math/MathML"><mstyle displaystyle="true"><mrow><mi>d</mi><mover accent="true"><msub><mi>x</mi><mi>i</mi></msub><mo>^</mo></mover><mspace is="true" width="0.22em"></mspace></mrow></mstyle></math></span></compositeblock><block>. Now to consider all the collective gradient flow for single valued </block><compositeblock dir="ltr" class="math-container-symbol role-mathmode-area inline" style="font-size: 17px;" data-mathml="<math xmlns=&quot;http://www.w3.org/1998/Math/MathML&quot;><mstyle displaystyle=&quot;true&quot;><mrow><msub><mi>𝜇</mi><mi>B</mi></msub><mspace is=&quot;true&quot; width=&quot;0.22em&quot;></mspace><mi>a</mi><mi>n</mi><mi>d</mi><mspace is=&quot;true&quot; width=&quot;0.22em&quot;></mspace><msubsup><mi>𝜎</mi><mi>B</mi><mn>2</mn></msubsup></mrow></mstyle></math>"><editarea class="math-mode-font lazy no-area-container" style="font-family: Asana-Math, Asana;" aria-hidden="true"><line class="" style="line-height: 1.2;"><baselineblock></baselineblock><block class="Normal">𝜇</block><compositeblock dir="ltr" class="power-index-symbol-container power-index-symbol-container"><middle-base><inline></inline></middle-base><editarea-block class="index-value" style="line-height: 1.2; margin-top: -0.747899em;">B</editarea-block></compositeblock><block class="Normal"> and 𝜎</block><compositeblock dir="ltr" class="power-index-symbol-container power-index-symbol-container has-power"><editarea-block class="power-value" style="line-height: 1.2; margin-top: 0em; margin-bottom: -1.05378em;">2</editarea-block><middle-base><inline></inline></middle-base><editarea-block class="index-value" style="line-height: 1.2; margin-top: -0.60899em; margin-bottom: 0em;">B</editarea-block></compositeblock></line></editarea><span role="presentation" style="width:100%;position:absolute;top:0;left:0;clip:rect(1px, 1px, 1px, 1px);height:1px;padding:1px 0 0 0!important;overflow:hidden;user-select:none;"><math xmlns="http://www.w3.org/1998/Math/MathML"><mstyle displaystyle="true"><mrow><msub><mi>𝜇</mi><mi>B</mi></msub><mspace is="true" width="0.22em"></mspace><mi>a</mi><mi>n</mi><mi>d</mi><mspace is="true" width="0.22em"></mspace><msubsup><mi>𝜎</mi><mi>B</mi><mn>2</mn></msubsup></mrow></mstyle></math></span></compositeblock><block> we need to </block><compositeblock dir="ltr" class="math-container-symbol role-mathmode-area inline" style="font-size: 17px;" data-mathml="<math xmlns=&quot;http://www.w3.org/1998/Math/MathML&quot;><mstyle displaystyle=&quot;true&quot;><mrow><mi>a</mi><mi>d</mi><mi>d</mi></mrow></mstyle></math>"><editarea class="math-mode-font no-area-container" style="font-family: Asana-Math, Asana;" aria-hidden="true"><line class="" style="line-height: 1.2;"><baselineblock></baselineblock><block class="Normal">add</block></line></editarea><span role="presentation" style="width:100%;position:absolute;top:0;left:0;clip:rect(1px, 1px, 1px, 1px);height:1px;padding:1px 0 0 0!important;overflow:hidden;user-select:none;"><math xmlns="http://www.w3.org/1998/Math/MathML"><mstyle displaystyle="true"><mrow><mi>a</mi><mi>d</mi><mi>d</mi></mrow></mstyle></math></span></compositeblock><block> the gradients flowing in.</block></blocks></line><line class="root text-mode" style="line-height: 1.4;"><prefix></prefix><blocks><baselineblock class="inline"></baselineblock><emptyblock aria-label="empty line"> </emptyblock></blocks></line><line class="root text-mode full-line-block-inside" style="line-height: 1.4;"><prefix></prefix><blocks><baselineblock class="inline"></baselineblock><compositeblock dir="ltr" class="math-container-symbol role-mathmode-area display" style="font-size: 17px;" data-mathml="<math display=&quot;block&quot; xmlns=&quot;http://www.w3.org/1998/Math/MathML&quot;><mtable columnwidth=&quot;100%&quot; width=&quot;100%&quot; columnalign=&quot;center&quot;><mtr><mtd><mrow><mi>D</mi><mi>i</mi><mi>f</mi><mi>f</mi><mspace is=&quot;true&quot; width=&quot;0.22em&quot;></mspace><mo fence=&quot;true&quot; stretchy=&quot;false&quot;>(</mo><mn>3</mn><mo fence=&quot;true&quot; stretchy=&quot;false&quot;>)</mo><mspace is=&quot;true&quot; width=&quot;0.22em&quot;></mspace><mi>w</mi><mi>r</mi><mi>t</mi><mspace is=&quot;true&quot; width=&quot;0.22em&quot;></mspace><msubsup><mi>𝜎</mi><mi>B</mi><mn>2</mn></msubsup></mrow></mtd></mtr><mtr><mtd><mrow><mfrac><mrow><mi>∂</mi><mover accent=&quot;true&quot;><msub><mi>x</mi><mi>i</mi></msub><mo>^</mo></mover></mrow><mrow><mi>∂</mi><msubsup><mi>𝜎</mi><mi>B</mi><mn>2</mn></msubsup></mrow></mfrac><mo form=&quot;infix&quot;>=</mo><mfrac><mrow><mo fence=&quot;true&quot;>(</mo><msqrt><mrow><msubsup><mi>𝜎</mi><mi>B</mi><mn>2</mn></msubsup><mo form=&quot;infix&quot;>+</mo><mi>𝜖</mi></mrow></msqrt><mo fence=&quot;true&quot;>)</mo><mo fence=&quot;true&quot; stretchy=&quot;false&quot;>(</mo><mn>0</mn><mo fence=&quot;true&quot; stretchy=&quot;false&quot;>)</mo><mo form=&quot;infix&quot;>-</mo><mo fence=&quot;true&quot; stretchy=&quot;false&quot;>(</mo><msub><mi>x</mi><mi>i</mi></msub><mo form=&quot;infix&quot;>-</mo><msub><mi>𝜇</mi><mi>B</mi></msub><mo fence=&quot;true&quot; stretchy=&quot;false&quot;>)</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mo fence=&quot;true&quot;>(</mo><msubsup><mi>𝜎</mi><mi>B</mi><mn>2</mn></msubsup><mo form=&quot;infix&quot;>+</mo><mi>𝜖</mi><msup><mo fence=&quot;true&quot;>)</mo><mrow><mo form=&quot;prefix&quot;>-</mo><mfrac><mn>1</mn><mn>2</mn></mfrac></mrow></msup></mrow><mrow><msubsup><mi>𝜎</mi><mi>B</mi><mn>2</mn></msubsup><mo form=&quot;infix&quot;>+</mo><mi>𝜖</mi></mrow></mfrac></mrow></mtd></mtr><mtr><mtd><mrow><mo form=&quot;infix&quot;>⟹</mo><mfrac><mrow><mi>∂</mi><mover accent=&quot;true&quot;><msub><mi>x</mi><mi>i</mi></msub><mo>^</mo></mover></mrow><mrow><mi>∂</mi><msubsup><mi>𝜎</mi><mi>B</mi><mn>2</mn></msubsup></mrow></mfrac><mo form=&quot;infix&quot;>=</mo><mo form=&quot;infix&quot;>-</mo><mo fence=&quot;true&quot; stretchy=&quot;false&quot;>(</mo><msub><mi>x</mi><mi>i</mi></msub><mo form=&quot;infix&quot;>-</mo><msub><mi>𝜇</mi><mi>B</mi></msub><mo fence=&quot;true&quot; stretchy=&quot;false&quot;>)</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mo fence=&quot;true&quot;>(</mo><msubsup><mi>𝜎</mi><mi>B</mi><mn>2</mn></msubsup><mo form=&quot;infix&quot;>+</mo><mi>𝜖</mi><msup><mo fence=&quot;true&quot;>)</mo><mrow><mo form=&quot;prefix&quot;>-</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mo form=&quot;infix&quot;>-</mo><mn>1</mn></mrow></msup></mrow></mtd></mtr><mtr><mtd><mrow><mo form=&quot;infix&quot;>⟹</mo><mfrac><mrow><mi>∂</mi><mover accent=&quot;true&quot;><msub><mi>x</mi><mi>i</mi></msub><mo>^</mo></mover></mrow><mrow><mi>∂</mi><msubsup><mi>𝜎</mi><mi>B</mi><mn>2</mn></msubsup></mrow></mfrac><mo form=&quot;infix&quot;>=</mo><mo form=&quot;infix&quot;>-</mo><mo fence=&quot;true&quot; stretchy=&quot;false&quot;>(</mo><msub><mi>x</mi><mi>i</mi></msub><mo form=&quot;infix&quot;>-</mo><msub><mi>𝜇</mi><mi>B</mi></msub><mo fence=&quot;true&quot; stretchy=&quot;false&quot;>)</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mo fence=&quot;true&quot;>(</mo><msubsup><mi>𝜎</mi><mi>B</mi><mn>2</mn></msubsup><mo form=&quot;infix&quot;>+</mo><mi>𝜖</mi><msup><mo fence=&quot;true&quot;>)</mo><mrow><mo form=&quot;prefix&quot;>-</mo><mfrac><mn>3</mn><mn>2</mn></mfrac></mrow></msup></mrow></mtd></mtr><mtr><mtd><mrow></mrow></mtd></mtr><mtr><mtd><mrow><mfrac><mrow><mi>∂</mi><mi>l</mi></mrow><mrow><mi>∂</mi><msubsup><mi>𝜎</mi><mi>B</mi><mn>2</mn></msubsup></mrow></mfrac><mo form=&quot;infix&quot;>=</mo><munderover><mo largeop=&quot;true&quot; movablelimit=&quot;true&quot;>∑</mo><mrow><mi>i</mi><mo form=&quot;infix&quot;>=</mo><mn>1</mn></mrow><mi>m</mi></munderover><mfrac><mrow><mi>∂</mi><mi>l</mi></mrow><mrow><mi>∂</mi><msub><mi>y</mi><mi>i</mi></msub></mrow></mfrac><mo separator=&quot;true&quot;>.</mo><mfrac><mrow><mi>∂</mi><msub><mi>y</mi><mi>i</mi></msub></mrow><mrow><mi>∂</mi><mover accent=&quot;true&quot;><msub><mi>x</mi><mi>i</mi></msub><mo>^</mo></mover></mrow></mfrac><mo separator=&quot;true&quot;>.</mo><mfrac><mrow><mi>∂</mi><mover accent=&quot;true&quot;><msub><mi>x</mi><mi>i</mi></msub><mo>^</mo></mover></mrow><mrow><mi>∂</mi><msubsup><mi>𝜎</mi><mi>B</mi><mn>2</mn></msubsup></mrow></mfrac></mrow></mtd></mtr><mtr><mtd><mrow><mo form=&quot;infix&quot;>⟹</mo><mfrac><mrow><mi>∂</mi><mi>l</mi></mrow><mrow><mi>∂</mi><msubsup><mi>𝜎</mi><mi>B</mi><mn>2</mn></msubsup></mrow></mfrac><mo form=&quot;infix&quot;>=</mo><munderover><mo largeop=&quot;true&quot; movablelimit=&quot;true&quot;>∑</mo><mrow><mi>i</mi><mo form=&quot;infix&quot;>=</mo><mn>1</mn></mrow><mi>m</mi></munderover><mfrac><mrow><mi>∂</mi><mi>l</mi></mrow><mrow><mi>∂</mi><mover accent=&quot;true&quot;><msub><mi>x</mi><mi>i</mi></msub><mo>^</mo></mover></mrow></mfrac><mo separator=&quot;true&quot;>.</mo><mfrac><mrow><mi>∂</mi><mover accent=&quot;true&quot;><msub><mi>x</mi><mi>i</mi></msub><mo>^</mo></mover></mrow><mrow><mi>∂</mi><msubsup><mi>𝜎</mi><mi>B</mi><mn>2</mn></msubsup></mrow></mfrac></mrow></mtd></mtr><mtr><mtd><mrow><mo form=&quot;infix&quot;>⟹</mo><mfrac><mrow><mi>∂</mi><mi>l</mi></mrow><mrow><mi>∂</mi><msubsup><mi>𝜎</mi><mi>B</mi><mn>2</mn></msubsup></mrow></mfrac><mo form=&quot;infix&quot;>=</mo><munderover><mo largeop=&quot;true&quot; movablelimit=&quot;true&quot;>∑</mo><mrow><mi>i</mi><mo form=&quot;infix&quot;>=</mo><mn>1</mn></mrow><mi>m</mi></munderover><mi>d</mi><mover accent=&quot;true&quot;><msub><mi>x</mi><mi>i</mi></msub><mo>^</mo></mover><mo separator=&quot;true&quot;>.</mo><mfrac><mrow><mi>∂</mi><mover accent=&quot;true&quot;><msub><mi>x</mi><mi>i</mi></msub><mo>^</mo></mover></mrow><mrow><mi>∂</mi><msubsup><mi>𝜎</mi><mi>B</mi><mn>2</mn></msubsup></mrow></mfrac></mrow></mtd></mtr><mtr><mtd><mrow><mo form=&quot;infix&quot;>⟹</mo><mfrac><mrow><mi>∂</mi><mi>l</mi></mrow><mrow><mi>∂</mi><msubsup><mi>𝜎</mi><mi>B</mi><mn>2</mn></msubsup></mrow></mfrac><mo form=&quot;infix&quot;>=</mo><munderover><mo largeop=&quot;true&quot; movablelimit=&quot;true&quot;>∑</mo><mrow><mi>i</mi><mo form=&quot;infix&quot;>=</mo><mn>1</mn></mrow><mi>m</mi></munderover><mo fence=&quot;true&quot;>(</mo><mi>d</mi><mover accent=&quot;true&quot;><msub><mi>x</mi><mi>i</mi></msub><mo>^</mo></mover><mo fence=&quot;true&quot;>)</mo><mo separator=&quot;true&quot;>.</mo><mo fence=&quot;true&quot;>(</mo><mo form=&quot;prefix&quot;>-</mo><mo fence=&quot;true&quot; stretchy=&quot;false&quot;>(</mo><msub><mi>x</mi><mi>i</mi></msub><mo form=&quot;infix&quot;>-</mo><msub><mi>𝜇</mi><mi>B</mi></msub><mo fence=&quot;true&quot; stretchy=&quot;false&quot;>)</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mo fence=&quot;true&quot;>(</mo><msubsup><mi>𝜎</mi><mi>B</mi><mn>2</mn></msubsup><mo form=&quot;infix&quot;>+</mo><mi>𝜖</mi><msup><mo fence=&quot;true&quot;>)</mo><mrow><mo form=&quot;prefix&quot;>-</mo><mfrac><mn>3</mn><mn>2</mn></mfrac></mrow></msup><mo fence=&quot;true&quot;>)</mo></mrow></mtd></mtr></mtable></math>"><editarea class="math-mode-font lazy no-area-container" style="font-family: Asana-Math, Asana;" aria-hidden="true"><line class="taggable" style="line-height: 1.2;"><baselineblock></baselineblock><block class="Normal">Diff </block><opensymbolblock class="normal" type="parenthesis"><bracket-span>(</bracket-span></opensymbolblock><block class="Normal">3</block><closesymbolblock class="normal" type="parenthesis"><bracket-span>)</bracket-span></closesymbolblock><block class="Normal"> wrt 𝜎</block><compositeblock dir="ltr" class="power-index-symbol-container power-index-symbol-container has-power"><editarea-block class="power-value" style="line-height: 1.2; margin-top: 0em; margin-bottom: -1.05378em;">2</editarea-block><middle-base><inline></inline></middle-base><editarea-block class="index-value" style="line-height: 1.2; margin-top: -0.60899em; margin-bottom: 0em;">B</editarea-block></compositeblock></line><line class="taggable" style="line-height: 1.2;"><baselineblock></baselineblock><compositeblock dir="ltr" class="fraction-symbol smaller"><editarea-line class=" frac-edit-area enumerator" style="line-height: 1.2; margin-bottom: -0.470588em;"><baselineblock></baselineblock><block class="Normal">∂</block><compositeblock dir="ltr" class="wide-hat-symbol ig-ex-br inline"><symbol style="display: block; width: 100%; position: relative; height: 0.529412em; margin-bottom: -0.176471em;"><svg style="position: absolute; left: 0px; top: 0px; display: block; width: 100%; height: 100%; overflow: visible;"><polyline points="0.00,8.06 6.66,3.62 13.32,8.06" stroke-width="1" fill="none" stroke-linejoin="bevel"></polyline></svg></symbol><editarea class="no-area-container" style="display: inline-flex;"><line class="" style="line-height: 1.2;"><baselineblock></baselineblock><block class="Normal">x</block><compositeblock dir="ltr" class="power-index-symbol-container power-index-symbol-container inline"><middle-base><inline></inline></middle-base><editarea-block class="index-value" style="line-height: 1.2; margin-top: -0.747899em;">i</editarea-block></compositeblock></line></editarea></compositeblock></editarea-line><div class="frac-line"><inline style="border-bottom: 1px solid;"></inline></div><editarea-line class=" frac-edit-area denominator" style="line-height: 1.2; margin-top: -0.411765em;"><baselineblock></baselineblock><block class="Normal">∂𝜎</block><compositeblock dir="ltr" class="power-index-symbol-container power-index-symbol-container has-power inline"><editarea-block class="power-value" style="line-height: 1.2; margin-top: 0em; margin-bottom: -1.05378em;">2</editarea-block><middle-base><inline></inline></middle-base><editarea-block class="index-value" style="line-height: 1.2; margin-top: -0.60899em; margin-bottom: -0.168067em;">B</editarea-block></compositeblock></editarea-line></compositeblock><block class="Relation">=</block><compositeblock dir="ltr" class="fraction-symbol smaller"><editarea-line class=" frac-edit-area enumerator" style="line-height: 1.2; margin-bottom: -0.470588em;"><baselineblock></baselineblock><opensymbolblock class="" type="parenthesis" style="height: 1.94118em;"><hidden-span style="margin-top: 0.352941em; align-self: flex-start;">(</hidden-span><svg style="width: 0.5em;"><path d=" M 6.27 1.70 c 0.00 -0.06 -0.04 -0.08 -0.08 -0.08 c -0.03 0.00 -0.06 0.01 -0.08 0.02 c -2.55 1.34 -4.65 3.73 -4.65 9.40 v 0.60 h 1.53 v -0.60 c 0.00 -3.23 0.64 -7.03 3.31 -9.06 c 0.12 -0.09 0.13 -0.19 0.13 -0.28 z   M 1.44 11.64 v 9.72 h 1.53 v -9.72 z" stroke="none"></path><path d=" M 6.27 31.30 c 0.00 0.06 -0.04 0.08 -0.08 0.08 c -0.03 0.00 -0.06 -0.01 -0.08 -0.02 c -2.55 -1.34 -4.65 -3.73 -4.65 -9.40 v -0.60 h 1.53 v 0.60 c 0.00 3.23 0.64 7.03 3.31 9.06 c 0.12 0.09 0.13 0.19 0.13 0.28 z" stroke="none"></path></svg></opensymbolblock><compositeblock dir="ltr" class="sqrt-symbol inline" style="padding-top: 0.235294em;"><sqrt-edit><editarea-line class=" edit-area" style="line-height: 1.2; margin-top: 0.117647em;"><baselineblock></baselineblock><block class="Normal">𝜎</block><compositeblock dir="ltr" class="power-index-symbol-container power-index-symbol-container has-power inline"><editarea-block class="power-value" style="line-height: 1.2; margin-top: 0em; margin-bottom: -1.05378em;">2</editarea-block><middle-base><inline></inline></middle-base><editarea-block class="index-value" style="line-height: 1.2; margin-top: -0.60899em; margin-bottom: 0em;">B</editarea-block></compositeblock><block class="Binary">+</block><block class="Normal">𝜖</block></editarea-line><sqrt-symbol-line><svg style="stroke: none;"><polygon points="0.35142118863049093,15.672487740923266 4.7881136950904395,13.300394717667453 9.47533612076175,23.240929233946222 16.363049095607234,0 61.23332214355469,0 61.23332214355469,1.0542635658914747 17.108954276290593,1.0542635658914747 9.180878552971576,27.972229342990452 3.0968992248062013,15.233211255135153 0.6369509043927648,16.15569187529019"></polygon></svg></sqrt-symbol-line></sqrt-edit></compositeblock><closesymbolblock class="" type="parenthesis" style="height: 1.94118em;"><hidden-span style="margin-top: 0.352941em; align-self: flex-start;">)</hidden-span><svg style="width: 0.5em;"><path d=" M 1.75 1.70 c 0.00 -0.06 0.04 -0.08 0.08 -0.08 c 0.03 0.00 0.06 0.01 0.08 0.02 c 2.55 1.34 4.65 3.73 4.65 9.40 v 0.60 h -1.53 v -0.60 c 0.00 -3.23 -0.64 -7.03 -3.31 -9.06 c -0.12 -0.09 -0.13 -0.19 -0.13 -0.28 z  M 6.58 11.64 v 9.72 h -1.53 v -9.72 z" stroke="none"></path><path d=" M 1.75 31.30 c 0.00 0.06 0.04 0.08 0.08 0.08 c 0.03 0.00 0.06 -0.01 0.08 -0.02 c 2.55 -1.34 4.65 -3.73 4.65 -9.40 v -0.60 h -1.53 v 0.60 c 0.00 3.23 -0.64 7.03 -3.31 9.06 c -0.12 0.09 -0.13 0.19 -0.13 0.28 z" stroke="none"></path></svg></closesymbolblock><opensymbolblock class="normal" type="parenthesis"><bracket-span>(</bracket-span></opensymbolblock><block class="Normal">0</block><closesymbolblock class="normal" type="parenthesis"><bracket-span>)</bracket-span></closesymbolblock><block class="Binary">-</block><opensymbolblock class="normal" type="parenthesis"><bracket-span>(</bracket-span></opensymbolblock><block class="Normal">x</block><compositeblock dir="ltr" class="power-index-symbol-container power-index-symbol-container inline"><middle-base><inline></inline></middle-base><editarea-block class="index-value" style="line-height: 1.2; margin-top: -0.747899em;">i</editarea-block></compositeblock><block class="Binary">-</block><block class="Normal">𝜇</block><compositeblock dir="ltr" class="power-index-symbol-container power-index-symbol-container inline"><middle-base><inline></inline></middle-base><editarea-block class="index-value" style="line-height: 1.2; margin-top: -0.747899em;">B</editarea-block></compositeblock><closesymbolblock class="normal" type="parenthesis"><bracket-span>)</bracket-span></closesymbolblock><compositeblock dir="ltr" class="fraction-symbol smaller frac-inline inline"><editarea-line class=" frac-edit-area enumerator" style="line-height: 1.2; margin-bottom: -0.411765em; padding-top: 0.0588235em;"><baselineblock></baselineblock><block>1</block></editarea-line><div class="frac-line"><inline style="vertical-align: 0.35em; border-bottom: 1px solid;"></inline></div><editarea-line class=" frac-edit-area denominator" style="margin-bottom: -0.0588235em; line-height: 1.2; margin-top: -0.588235em;"><baselineblock></baselineblock><block>2</block></editarea-line></compositeblock><opensymbolblock class="" type="parenthesis" style="height: 1.64706em;"><hidden-span style="margin-top: 0.0588235em; align-self: flex-start;">(</hidden-span><svg style="width: 0.5em;"><path d=" M 6.27 1.70 c 0.00 -0.06 -0.04 -0.08 -0.08 -0.08 c -0.03 0.00 -0.06 0.01 -0.08 0.02 c -2.55 1.34 -4.65 3.73 -4.65 9.40 v 0.60 h 1.53 v -0.60 c 0.00 -3.23 0.64 -7.03 3.31 -9.06 c 0.12 -0.09 0.13 -0.19 0.13 -0.28 z   M 1.44 11.64 v 4.72 h 1.53 v -4.72 z" stroke="none"></path><path d=" M 6.27 26.30 c 0.00 0.06 -0.04 0.08 -0.08 0.08 c -0.03 0.00 -0.06 -0.01 -0.08 -0.02 c -2.55 -1.34 -4.65 -3.73 -4.65 -9.40 v -0.60 h 1.53 v 0.60 c 0.00 3.23 0.64 7.03 3.31 9.06 c 0.12 0.09 0.13 0.19 0.13 0.28 z" stroke="none"></path></svg></opensymbolblock><block class="Normal">𝜎</block><compositeblock dir="ltr" class="power-index-symbol-container power-index-symbol-container has-power inline"><editarea-block class="power-value" style="line-height: 1.2; margin-top: 0em; margin-bottom: -1.05378em;">2</editarea-block><middle-base><inline></inline></middle-base><editarea-block class="index-value" style="line-height: 1.2; margin-top: -0.60899em; margin-bottom: 0em;">B</editarea-block></compositeblock><block class="Binary">+</block><block class="Normal">𝜖</block><closesymbolblock class="" type="parenthesis" style="height: 1.64706em;"><hidden-span style="margin-top: 0.0588235em; align-self: flex-start;">)</hidden-span><svg style="width: 0.5em;"><path d=" M 1.75 1.70 c 0.00 -0.06 0.04 -0.08 0.08 -0.08 c 0.03 0.00 0.06 0.01 0.08 0.02 c 2.55 1.34 4.65 3.73 4.65 9.40 v 0.60 h -1.53 v -0.60 c 0.00 -3.23 -0.64 -7.03 -3.31 -9.06 c -0.12 -0.09 -0.13 -0.19 -0.13 -0.28 z  M 6.58 11.64 v 4.72 h -1.53 v -4.72 z" stroke="none"></path><path d=" M 1.75 26.30 c 0.00 0.06 0.04 0.08 0.08 0.08 c 0.03 0.00 0.06 -0.01 0.08 -0.02 c 2.55 -1.34 4.65 -3.73 4.65 -9.40 v -0.60 h -1.53 v 0.60 c 0.00 3.23 -0.64 7.03 -3.31 9.06 c -0.12 0.09 -0.13 0.19 -0.13 0.28 z" stroke="none"></path></svg></closesymbolblock><compositeblock dir="ltr" class="power-index-symbol-container power-index-symbol-container has-power inline" style="margin-left: -0.1em;"><editarea-line class=" power-value" style="line-height: 1.2; margin-bottom: -0.585714em;"><baselineblock></baselineblock><block>-</block><compositeblock dir="ltr" class="fraction-symbol smaller inline"><editarea-line class=" frac-edit-area enumerator" style="line-height: 1.2; margin-bottom: -0.504202em;"><baselineblock></baselineblock><block class="Normal">1</block></editarea-line><div class="frac-line"><inline style="border-bottom: 1px solid;"></inline></div><editarea-line class=" frac-edit-area denominator" style="margin-bottom: -0.168067em; line-height: 1.2; margin-top: -0.420168em;"><baselineblock></baselineblock><block class="Normal">2</block></editarea-line></compositeblock></editarea-line><middle-base><inline></inline></middle-base></compositeblock></editarea-line><div class="frac-line"><inline style="border-bottom: 1px solid;"></inline></div><editarea-line class=" frac-edit-area denominator" style="line-height: 1.2; margin-top: -0.411765em;"><baselineblock></baselineblock><block class="Normal">𝜎</block><compositeblock dir="ltr" class="power-index-symbol-container power-index-symbol-container has-power inline"><editarea-block class="power-value" style="line-height: 1.2; margin-top: 0em; margin-bottom: -1.05378em;">2</editarea-block><middle-base><inline></inline></middle-base><editarea-block class="index-value" style="line-height: 1.2; margin-top: -0.60899em; margin-bottom: -0.168067em;">B</editarea-block></compositeblock><block class="Binary">+</block><block class="Normal">𝜖</block></editarea-line></compositeblock></line><line class="taggable" style="line-height: 1.2;"><baselineblock></baselineblock><block class="Relation">⟹</block><compositeblock dir="ltr" class="fraction-symbol smaller"><editarea-line class=" frac-edit-area enumerator" style="line-height: 1.2; margin-bottom: -0.470588em;"><baselineblock></baselineblock><block class="Normal">∂</block><compositeblock dir="ltr" class="wide-hat-symbol ig-ex-br inline"><symbol style="display: block; width: 100%; position: relative; height: 0.529412em; margin-bottom: -0.176471em;"><svg style="position: absolute; left: 0px; top: 0px; display: block; width: 100%; height: 100%; overflow: visible;"><polyline points="0.00,8.06 6.66,3.62 13.32,8.06" stroke-width="1" fill="none" stroke-linejoin="bevel"></polyline></svg></symbol><editarea class="no-area-container" style="display: inline-flex;"><line class="" style="line-height: 1.2;"><baselineblock></baselineblock><block class="Normal">x</block><compositeblock dir="ltr" class="power-index-symbol-container power-index-symbol-container inline"><middle-base><inline></inline></middle-base><editarea-block class="index-value" style="line-height: 1.2; margin-top: -0.747899em;">i</editarea-block></compositeblock></line></editarea></compositeblock></editarea-line><div class="frac-line"><inline style="border-bottom: 1px solid;"></inline></div><editarea-line class=" frac-edit-area denominator" style="line-height: 1.2; margin-top: -0.411765em;"><baselineblock></baselineblock><block class="Normal">∂𝜎</block><compositeblock dir="ltr" class="power-index-symbol-container power-index-symbol-container has-power inline"><editarea-block class="power-value" style="line-height: 1.2; margin-top: 0em; margin-bottom: -1.05378em;">2</editarea-block><middle-base><inline></inline></middle-base><editarea-block class="index-value" style="line-height: 1.2; margin-top: -0.60899em; margin-bottom: -0.168067em;">B</editarea-block></compositeblock></editarea-line></compositeblock><block class="Relation">=</block><block class="Binary">-</block><opensymbolblock class="normal" type="parenthesis"><bracket-span>(</bracket-span></opensymbolblock><block class="Normal">x</block><compositeblock dir="ltr" class="power-index-symbol-container power-index-symbol-container"><middle-base><inline></inline></middle-base><editarea-block class="index-value" style="line-height: 1.2; margin-top: -0.747899em;">i</editarea-block></compositeblock><block class="Binary">-</block><block class="Normal">𝜇</block><compositeblock dir="ltr" class="power-index-symbol-container power-index-symbol-container"><middle-base><inline></inline></middle-base><editarea-block class="index-value" style="line-height: 1.2; margin-top: -0.747899em;">B</editarea-block></compositeblock><closesymbolblock class="normal" type="parenthesis"><bracket-span>)</bracket-span></closesymbolblock><compositeblock dir="ltr" class="fraction-symbol smaller"><editarea-line class=" frac-edit-area enumerator" style="line-height: 1.2; margin-bottom: -0.470588em;"><baselineblock></baselineblock><block class="Normal">1</block></editarea-line><div class="frac-line"><inline style="border-bottom: 1px solid;"></inline></div><editarea-line class=" frac-edit-area denominator" style="margin-bottom: -0.176471em; line-height: 1.2; margin-top: -0.411765em;"><baselineblock></baselineblock><block class="Normal">2</block></editarea-line></compositeblock><opensymbolblock class="" type="parenthesis" style="height: 1.64706em;"><hidden-span style="margin-top: 0.0588235em; align-self: flex-start;">(</hidden-span><svg style="width: 0.5em;"><path d=" M 6.27 1.70 c 0.00 -0.06 -0.04 -0.08 -0.08 -0.08 c -0.03 0.00 -0.06 0.01 -0.08 0.02 c -2.55 1.34 -4.65 3.73 -4.65 9.40 v 0.60 h 1.53 v -0.60 c 0.00 -3.23 0.64 -7.03 3.31 -9.06 c 0.12 -0.09 0.13 -0.19 0.13 -0.28 z   M 1.44 11.64 v 4.72 h 1.53 v -4.72 z" stroke="none"></path><path d=" M 6.27 26.30 c 0.00 0.06 -0.04 0.08 -0.08 0.08 c -0.03 0.00 -0.06 -0.01 -0.08 -0.02 c -2.55 -1.34 -4.65 -3.73 -4.65 -9.40 v -0.60 h 1.53 v 0.60 c 0.00 3.23 0.64 7.03 3.31 9.06 c 0.12 0.09 0.13 0.19 0.13 0.28 z" stroke="none"></path></svg></opensymbolblock><block class="Normal">𝜎</block><compositeblock dir="ltr" class="power-index-symbol-container power-index-symbol-container has-power"><editarea-block class="power-value" style="line-height: 1.2; margin-top: 0em; margin-bottom: -1.05378em;">2</editarea-block><middle-base><inline></inline></middle-base><editarea-block class="index-value" style="line-height: 1.2; margin-top: -0.60899em; margin-bottom: 0em;">B</editarea-block></compositeblock><block class="Binary">+</block><block class="Normal">𝜖</block><closesymbolblock class="" type="parenthesis" style="height: 1.64706em;"><hidden-span style="margin-top: 0.0588235em; align-self: flex-start;">)</hidden-span><svg style="width: 0.5em;"><path d=" M 1.75 1.70 c 0.00 -0.06 0.04 -0.08 0.08 -0.08 c 0.03 0.00 0.06 0.01 0.08 0.02 c 2.55 1.34 4.65 3.73 4.65 9.40 v 0.60 h -1.53 v -0.60 c 0.00 -3.23 -0.64 -7.03 -3.31 -9.06 c -0.12 -0.09 -0.13 -0.19 -0.13 -0.28 z  M 6.58 11.64 v 4.72 h -1.53 v -4.72 z" stroke="none"></path><path d=" M 1.75 26.30 c 0.00 0.06 0.04 0.08 0.08 0.08 c 0.03 0.00 0.06 -0.01 0.08 -0.02 c 2.55 -1.34 4.65 -3.73 4.65 -9.40 v -0.60 h -1.53 v 0.60 c 0.00 3.23 -0.64 7.03 -3.31 9.06 c -0.12 0.09 -0.13 0.19 -0.13 0.28 z" stroke="none"></path></svg></closesymbolblock><compositeblock dir="ltr" class="power-index-symbol-container power-index-symbol-container has-power" style="margin-left: -0.1em;"><editarea-line class=" power-value" style="line-height: 1.2; margin-bottom: -0.585714em;"><baselineblock></baselineblock><block>-</block><compositeblock dir="ltr" class="fraction-symbol smaller inline"><editarea-line class=" frac-edit-area enumerator" style="line-height: 1.2; margin-bottom: -0.504202em;"><baselineblock></baselineblock><block class="Normal">1</block></editarea-line><div class="frac-line"><inline style="border-bottom: 1px solid;"></inline></div><editarea-line class=" frac-edit-area denominator" style="margin-bottom: -0.168067em; line-height: 1.2; margin-top: -0.420168em;"><baselineblock></baselineblock><block class="Normal">2</block></editarea-line></compositeblock><block>-1</block></editarea-line><middle-base><inline></inline></middle-base></compositeblock></line><line class="taggable" style="line-height: 1.2;"><baselineblock></baselineblock><ref-tag data-tag-position="line" class="line-tag automatic" data-tag-id="tid0.06636189681098037" style="font-family: Arial, Helvetica, sans-serif; font-size: 15px;" id="tid0.06636189681098037"><label>(8)</label></ref-tag><block class="Relation">⟹</block><compositeblock dir="ltr" class="fraction-symbol smaller"><editarea-line class=" frac-edit-area enumerator" style="line-height: 1.2; margin-bottom: -0.470588em;"><baselineblock></baselineblock><block class="Normal">∂</block><compositeblock dir="ltr" class="wide-hat-symbol ig-ex-br inline"><symbol style="display: block; width: 100%; position: relative; height: 0.529412em; margin-bottom: -0.176471em;"><svg style="position: absolute; left: 0px; top: 0px; display: block; width: 100%; height: 100%; overflow: visible;"><polyline points="0.00,8.06 6.66,3.62 13.32,8.06" stroke-width="1" fill="none" stroke-linejoin="bevel"></polyline></svg></symbol><editarea class="no-area-container" style="display: inline-flex;"><line class="" style="line-height: 1.2;"><baselineblock></baselineblock><block class="Normal">x</block><compositeblock dir="ltr" class="power-index-symbol-container power-index-symbol-container inline"><middle-base><inline></inline></middle-base><editarea-block class="index-value" style="line-height: 1.2; margin-top: -0.747899em;">i</editarea-block></compositeblock></line></editarea></compositeblock></editarea-line><div class="frac-line"><inline style="border-bottom: 1px solid;"></inline></div><editarea-line class=" frac-edit-area denominator" style="line-height: 1.2; margin-top: -0.411765em;"><baselineblock></baselineblock><block class="Normal">∂𝜎</block><compositeblock dir="ltr" class="power-index-symbol-container power-index-symbol-container has-power inline"><editarea-block class="power-value" style="line-height: 1.2; margin-top: 0em; margin-bottom: -1.05378em;">2</editarea-block><middle-base><inline></inline></middle-base><editarea-block class="index-value" style="line-height: 1.2; margin-top: -0.60899em; margin-bottom: -0.168067em;">B</editarea-block></compositeblock></editarea-line></compositeblock><block class="Relation">=</block><block class="Binary">-</block><opensymbolblock class="normal" type="parenthesis"><bracket-span>(</bracket-span></opensymbolblock><block class="Normal">x</block><compositeblock dir="ltr" class="power-index-symbol-container power-index-symbol-container"><middle-base><inline></inline></middle-base><editarea-block class="index-value" style="line-height: 1.2; margin-top: -0.747899em;">i</editarea-block></compositeblock><block class="Binary">-</block><block class="Normal">𝜇</block><compositeblock dir="ltr" class="power-index-symbol-container power-index-symbol-container"><middle-base><inline></inline></middle-base><editarea-block class="index-value" style="line-height: 1.2; margin-top: -0.747899em;">B</editarea-block></compositeblock><closesymbolblock class="normal" type="parenthesis"><bracket-span>)</bracket-span></closesymbolblock><compositeblock dir="ltr" class="fraction-symbol smaller"><editarea-line class=" frac-edit-area enumerator" style="line-height: 1.2; margin-bottom: -0.470588em;"><baselineblock></baselineblock><block class="Normal">1</block></editarea-line><div class="frac-line"><inline style="border-bottom: 1px solid;"></inline></div><editarea-line class=" frac-edit-area denominator" style="margin-bottom: -0.176471em; line-height: 1.2; margin-top: -0.411765em;"><baselineblock></baselineblock><block class="Normal">2</block></editarea-line></compositeblock><opensymbolblock class="" type="parenthesis" style="height: 1.64706em;"><hidden-span style="margin-top: 0.0588235em; align-self: flex-start;">(</hidden-span><svg style="width: 0.5em;"><path d=" M 6.27 1.70 c 0.00 -0.06 -0.04 -0.08 -0.08 -0.08 c -0.03 0.00 -0.06 0.01 -0.08 0.02 c -2.55 1.34 -4.65 3.73 -4.65 9.40 v 0.60 h 1.53 v -0.60 c 0.00 -3.23 0.64 -7.03 3.31 -9.06 c 0.12 -0.09 0.13 -0.19 0.13 -0.28 z   M 1.44 11.64 v 4.72 h 1.53 v -4.72 z" stroke="none"></path><path d=" M 6.27 26.30 c 0.00 0.06 -0.04 0.08 -0.08 0.08 c -0.03 0.00 -0.06 -0.01 -0.08 -0.02 c -2.55 -1.34 -4.65 -3.73 -4.65 -9.40 v -0.60 h 1.53 v 0.60 c 0.00 3.23 0.64 7.03 3.31 9.06 c 0.12 0.09 0.13 0.19 0.13 0.28 z" stroke="none"></path></svg></opensymbolblock><block class="Normal">𝜎</block><compositeblock dir="ltr" class="power-index-symbol-container power-index-symbol-container has-power"><editarea-block class="power-value" style="line-height: 1.2; margin-top: 0em; margin-bottom: -1.05378em;">2</editarea-block><middle-base><inline></inline></middle-base><editarea-block class="index-value" style="line-height: 1.2; margin-top: -0.60899em; margin-bottom: 0em;">B</editarea-block></compositeblock><block class="Binary">+</block><block class="Normal">𝜖</block><closesymbolblock class="" type="parenthesis" style="height: 1.64706em;"><hidden-span style="margin-top: 0.0588235em; align-self: flex-start;">)</hidden-span><svg style="width: 0.5em;"><path d=" M 1.75 1.70 c 0.00 -0.06 0.04 -0.08 0.08 -0.08 c 0.03 0.00 0.06 0.01 0.08 0.02 c 2.55 1.34 4.65 3.73 4.65 9.40 v 0.60 h -1.53 v -0.60 c 0.00 -3.23 -0.64 -7.03 -3.31 -9.06 c -0.12 -0.09 -0.13 -0.19 -0.13 -0.28 z  M 6.58 11.64 v 4.72 h -1.53 v -4.72 z" stroke="none"></path><path d=" M 1.75 26.30 c 0.00 0.06 0.04 0.08 0.08 0.08 c 0.03 0.00 0.06 -0.01 0.08 -0.02 c 2.55 -1.34 4.65 -3.73 4.65 -9.40 v -0.60 h -1.53 v 0.60 c 0.00 3.23 -0.64 7.03 -3.31 9.06 c -0.12 0.09 -0.13 0.19 -0.13 0.28 z" stroke="none"></path></svg></closesymbolblock><compositeblock dir="ltr" class="power-index-symbol-container power-index-symbol-container has-power" style="margin-left: -0.1em;"><editarea-line class=" power-value" style="line-height: 1.2; margin-bottom: -0.585714em;"><baselineblock></baselineblock><block>-</block><compositeblock dir="ltr" class="fraction-symbol smaller inline"><editarea-line class=" frac-edit-area enumerator" style="line-height: 1.2; margin-bottom: -0.504202em;"><baselineblock></baselineblock><block class="Normal">3</block></editarea-line><div class="frac-line"><inline style="border-bottom: 1px solid;"></inline></div><editarea-line class=" frac-edit-area denominator" style="margin-bottom: -0.168067em; line-height: 1.2; margin-top: -0.420168em;"><baselineblock></baselineblock><block class="Normal">2</block></editarea-line></compositeblock></editarea-line><middle-base><inline></inline></middle-base></compositeblock></line><line class="taggable" style="line-height: 1.2;"><baselineblock></baselineblock><emptyblock aria-label="empty line"> </emptyblock></line><line class="taggable" style="line-height: 1.2;"><baselineblock></baselineblock><compositeblock dir="ltr" class="fraction-symbol smaller"><editarea-line class=" frac-edit-area enumerator" style="line-height: 1.2; margin-bottom: -0.470588em;"><baselineblock></baselineblock><block class="Normal">∂l</block></editarea-line><div class="frac-line"><inline style="border-bottom: 1px solid;"></inline></div><editarea-line class=" frac-edit-area denominator" style="line-height: 1.2; margin-top: -0.411765em;"><baselineblock></baselineblock><block class="Normal">∂𝜎</block><compositeblock dir="ltr" class="power-index-symbol-container power-index-symbol-container has-power inline"><editarea-block class="power-value" style="line-height: 1.2; margin-top: 0em; margin-bottom: -1.05378em;">2</editarea-block><middle-base><inline></inline></middle-base><editarea-block class="index-value" style="line-height: 1.2; margin-top: -0.60899em; margin-bottom: -0.168067em;">B</editarea-block></compositeblock></editarea-line></compositeblock><block class="Relation">=</block><compositeblock dir="ltr" class="summation-like-symbol limit-type limit-kind "><editarea class="from no-area-container" style="margin-bottom: -0.470588em;"><line class="" style="margin-bottom: -0.168067em; line-height: 1.2;"><baselineblock></baselineblock><block>m</block></line></editarea><symbol class="" style="font-family: Asana-Math, Asana; font-style: normal; font-weight: normal;"><span>∑</span></symbol><editarea class="to to-summation no-area-container" style="margin-top: 0.117647em;"><line class="" style="line-height: 1.2;"><baselineblock></baselineblock><block>i=1</block></line></editarea></compositeblock><compositeblock dir="ltr" class="fraction-symbol smaller"><editarea-line class=" frac-edit-area enumerator" style="line-height: 1.2; margin-bottom: -0.470588em;"><baselineblock></baselineblock><block class="Normal">∂l</block></editarea-line><div class="frac-line"><inline style="border-bottom: 1px solid;"></inline></div><editarea-line class=" frac-edit-area denominator" style="line-height: 1.2; margin-top: -0.411765em;"><baselineblock></baselineblock><block class="Normal">∂y</block><compositeblock dir="ltr" class="power-index-symbol-container power-index-symbol-container inline"><middle-base><inline></inline></middle-base><editarea-block class="index-value" style="line-height: 1.2; margin-top: -0.747899em;">i</editarea-block></compositeblock></editarea-line></compositeblock><block class="Punctuation">.</block><compositeblock dir="ltr" class="fraction-symbol smaller"><editarea-line class=" frac-edit-area enumerator" style="line-height: 1.2; margin-bottom: -0.470588em;"><baselineblock></baselineblock><block class="Normal">∂y</block><compositeblock dir="ltr" class="power-index-symbol-container power-index-symbol-container inline"><middle-base><inline></inline></middle-base><editarea-block class="index-value" style="line-height: 1.2; margin-top: -0.747899em;">i</editarea-block></compositeblock></editarea-line><div class="frac-line"><inline style="border-bottom: 1px solid;"></inline></div><editarea-line class=" frac-edit-area denominator" style="line-height: 1.2; margin-top: -0.411765em;"><baselineblock></baselineblock><block class="Normal">∂</block><compositeblock dir="ltr" class="wide-hat-symbol ig-ex-br inline"><symbol style="display: block; width: 100%; position: relative; height: 0.529412em; margin-bottom: -0.176471em;"><svg style="position: absolute; left: 0px; top: 0px; display: block; width: 100%; height: 100%; overflow: visible;"><polyline points="0.00,8.06 6.66,3.62 13.32,8.06" stroke-width="1" fill="none" stroke-linejoin="bevel"></polyline></svg></symbol><editarea class="no-area-container" style="display: inline-flex;"><line class="" style="line-height: 1.2;"><baselineblock></baselineblock><block class="Normal">x</block><compositeblock dir="ltr" class="power-index-symbol-container power-index-symbol-container inline"><middle-base><inline></inline></middle-base><editarea-block class="index-value" style="line-height: 1.2; margin-top: -0.747899em;">i</editarea-block></compositeblock></line></editarea></compositeblock></editarea-line></compositeblock><block class="Punctuation">.</block><compositeblock dir="ltr" class="fraction-symbol smaller"><editarea-line class=" frac-edit-area enumerator" style="line-height: 1.2; margin-bottom: -0.470588em;"><baselineblock></baselineblock><block class="Normal">∂</block><compositeblock dir="ltr" class="wide-hat-symbol ig-ex-br inline"><symbol style="display: block; width: 100%; position: relative; height: 0.529412em; margin-bottom: -0.176471em;"><svg style="position: absolute; left: 0px; top: 0px; display: block; width: 100%; height: 100%; overflow: visible;"><polyline points="0.00,8.06 6.66,3.62 13.32,8.06" stroke-width="1" fill="none" stroke-linejoin="bevel"></polyline></svg></symbol><editarea class="no-area-container" style="display: inline-flex;"><line class="" style="line-height: 1.2;"><baselineblock></baselineblock><block class="Normal">x</block><compositeblock dir="ltr" class="power-index-symbol-container power-index-symbol-container inline"><middle-base><inline></inline></middle-base><editarea-block class="index-value" style="line-height: 1.2; margin-top: -0.747899em;">i</editarea-block></compositeblock></line></editarea></compositeblock></editarea-line><div class="frac-line"><inline style="border-bottom: 1px solid;"></inline></div><editarea-line class=" frac-edit-area denominator" style="line-height: 1.2; margin-top: -0.411765em;"><baselineblock></baselineblock><block class="Normal">∂𝜎</block><compositeblock dir="ltr" class="power-index-symbol-container power-index-symbol-container has-power inline"><editarea-block class="power-value" style="line-height: 1.2; margin-top: 0em; margin-bottom: -1.05378em;">2</editarea-block><middle-base><inline></inline></middle-base><editarea-block class="index-value" style="line-height: 1.2; margin-top: -0.60899em; margin-bottom: -0.168067em;">B</editarea-block></compositeblock></editarea-line></compositeblock></line><line class="taggable" style="line-height: 1.2;"><baselineblock></baselineblock><block class="Relation">⟹</block><compositeblock dir="ltr" class="fraction-symbol smaller"><editarea-line class=" frac-edit-area enumerator" style="line-height: 1.2; margin-bottom: -0.470588em;"><baselineblock></baselineblock><block class="Normal">∂l</block></editarea-line><div class="frac-line"><inline style="border-bottom: 1px solid;"></inline></div><editarea-line class=" frac-edit-area denominator" style="line-height: 1.2; margin-top: -0.411765em;"><baselineblock></baselineblock><block class="Normal">∂𝜎</block><compositeblock dir="ltr" class="power-index-symbol-container power-index-symbol-container has-power inline"><editarea-block class="power-value" style="line-height: 1.2; margin-top: 0em; margin-bottom: -1.05378em;">2</editarea-block><middle-base><inline></inline></middle-base><editarea-block class="index-value" style="line-height: 1.2; margin-top: -0.60899em; margin-bottom: -0.168067em;">B</editarea-block></compositeblock></editarea-line></compositeblock><block class="Relation">=</block><compositeblock dir="ltr" class="summation-like-symbol limit-type limit-kind "><editarea class="from no-area-container" style="margin-bottom: -0.470588em;"><line class="" style="margin-bottom: -0.168067em; line-height: 1.2;"><baselineblock></baselineblock><block>m</block></line></editarea><symbol class="" style="font-family: Asana-Math, Asana; font-style: normal; font-weight: normal;"><span>∑</span></symbol><editarea class="to to-summation no-area-container" style="margin-top: 0.117647em;"><line class="" style="line-height: 1.2;"><baselineblock></baselineblock><block>i=1</block></line></editarea></compositeblock><compositeblock dir="ltr" class="fraction-symbol smaller"><editarea-line class=" frac-edit-area enumerator" style="line-height: 1.2; margin-bottom: -0.470588em;"><baselineblock></baselineblock><block class="Normal">∂l</block></editarea-line><div class="frac-line"><inline style="border-bottom: 1px solid;"></inline></div><editarea-line class=" frac-edit-area denominator" style="line-height: 1.2; margin-top: -0.411765em;"><baselineblock></baselineblock><block class="Normal">∂</block><compositeblock dir="ltr" class="wide-hat-symbol ig-ex-br inline"><symbol style="display: block; width: 100%; position: relative; height: 0.529412em; margin-bottom: -0.176471em;"><svg style="position: absolute; left: 0px; top: 0px; display: block; width: 100%; height: 100%; overflow: visible;"><polyline points="0.00,8.06 6.66,3.62 13.32,8.06" stroke-width="1" fill="none" stroke-linejoin="bevel"></polyline></svg></symbol><editarea class="no-area-container" style="display: inline-flex;"><line class="" style="line-height: 1.2;"><baselineblock></baselineblock><block class="Normal">x</block><compositeblock dir="ltr" class="power-index-symbol-container power-index-symbol-container inline"><middle-base><inline></inline></middle-base><editarea-block class="index-value" style="line-height: 1.2; margin-top: -0.747899em;">i</editarea-block></compositeblock></line></editarea></compositeblock></editarea-line></compositeblock><block class="Punctuation">.</block><compositeblock dir="ltr" class="fraction-symbol smaller"><editarea-line class=" frac-edit-area enumerator" style="line-height: 1.2; margin-bottom: -0.470588em;"><baselineblock></baselineblock><block class="Normal">∂</block><compositeblock dir="ltr" class="wide-hat-symbol ig-ex-br inline"><symbol style="display: block; width: 100%; position: relative; height: 0.529412em; margin-bottom: -0.176471em;"><svg style="position: absolute; left: 0px; top: 0px; display: block; width: 100%; height: 100%; overflow: visible;"><polyline points="0.00,8.06 6.66,3.62 13.32,8.06" stroke-width="1" fill="none" stroke-linejoin="bevel"></polyline></svg></symbol><editarea class="no-area-container" style="display: inline-flex;"><line class="" style="line-height: 1.2;"><baselineblock></baselineblock><block class="Normal">x</block><compositeblock dir="ltr" class="power-index-symbol-container power-index-symbol-container inline"><middle-base><inline></inline></middle-base><editarea-block class="index-value" style="line-height: 1.2; margin-top: -0.747899em;">i</editarea-block></compositeblock></line></editarea></compositeblock></editarea-line><div class="frac-line"><inline style="border-bottom: 1px solid;"></inline></div><editarea-line class=" frac-edit-area denominator" style="line-height: 1.2; margin-top: -0.411765em;"><baselineblock></baselineblock><block class="Normal">∂𝜎</block><compositeblock dir="ltr" class="power-index-symbol-container power-index-symbol-container has-power inline"><editarea-block class="power-value" style="line-height: 1.2; margin-top: 0em; margin-bottom: -1.05378em;">2</editarea-block><middle-base><inline></inline></middle-base><editarea-block class="index-value" style="line-height: 1.2; margin-top: -0.60899em; margin-bottom: -0.168067em;">B</editarea-block></compositeblock></editarea-line></compositeblock></line><line class="taggable" style="line-height: 1.2;"><baselineblock></baselineblock><block class="Relation">⟹</block><compositeblock dir="ltr" class="fraction-symbol smaller"><editarea-line class=" frac-edit-area enumerator" style="line-height: 1.2; margin-bottom: -0.470588em;"><baselineblock></baselineblock><block class="Normal">∂l</block></editarea-line><div class="frac-line"><inline style="border-bottom: 1px solid;"></inline></div><editarea-line class=" frac-edit-area denominator" style="line-height: 1.2; margin-top: -0.411765em;"><baselineblock></baselineblock><block class="Normal">∂𝜎</block><compositeblock dir="ltr" class="power-index-symbol-container power-index-symbol-container has-power inline"><editarea-block class="power-value" style="line-height: 1.2; margin-top: 0em; margin-bottom: -1.05378em;">2</editarea-block><middle-base><inline></inline></middle-base><editarea-block class="index-value" style="line-height: 1.2; margin-top: -0.60899em; margin-bottom: -0.168067em;">B</editarea-block></compositeblock></editarea-line></compositeblock><block class="Relation">=</block><compositeblock dir="ltr" class="summation-like-symbol limit-type limit-kind "><editarea class="from no-area-container" style="margin-bottom: -0.470588em;"><line class="" style="margin-bottom: -0.168067em; line-height: 1.2;"><baselineblock></baselineblock><block>m</block></line></editarea><symbol class="" style="font-family: Asana-Math, Asana; font-style: normal; font-weight: normal;"><span>∑</span></symbol><editarea class="to to-summation no-area-container" style="margin-top: 0.117647em;"><line class="" style="line-height: 1.2;"><baselineblock></baselineblock><block>i=1</block></line></editarea></compositeblock><block class="Normal">d</block><compositeblock dir="ltr" class="wide-hat-symbol ig-ex-br"><symbol style="display: block; width: 100%; position: relative; height: 0.529412em; margin-bottom: -0.176471em;"><svg style="position: absolute; left: 0px; top: 0px; display: block; width: 100%; height: 100%; overflow: visible;"><polyline points="0.00,8.06 6.66,3.62 13.32,8.06" stroke-width="1" fill="none" stroke-linejoin="bevel"></polyline></svg></symbol><editarea class="no-area-container" style="display: inline-flex;"><line class="" style="line-height: 1.2;"><baselineblock></baselineblock><block class="Normal">x</block><compositeblock dir="ltr" class="power-index-symbol-container power-index-symbol-container inline"><middle-base><inline></inline></middle-base><editarea-block class="index-value" style="line-height: 1.2; margin-top: -0.747899em;">i</editarea-block></compositeblock></line></editarea></compositeblock><block class="Punctuation">.</block><compositeblock dir="ltr" class="fraction-symbol smaller"><editarea-line class=" frac-edit-area enumerator" style="line-height: 1.2; margin-bottom: -0.470588em;"><baselineblock></baselineblock><block class="Normal">∂</block><compositeblock dir="ltr" class="wide-hat-symbol ig-ex-br inline"><symbol style="display: block; width: 100%; position: relative; height: 0.529412em; margin-bottom: -0.176471em;"><svg style="position: absolute; left: 0px; top: 0px; display: block; width: 100%; height: 100%; overflow: visible;"><polyline points="0.00,8.06 6.66,3.62 13.32,8.06" stroke-width="1" fill="none" stroke-linejoin="bevel"></polyline></svg></symbol><editarea class="no-area-container" style="display: inline-flex;"><line class="" style="line-height: 1.2;"><baselineblock></baselineblock><block class="Normal">x</block><compositeblock dir="ltr" class="power-index-symbol-container power-index-symbol-container inline"><middle-base><inline></inline></middle-base><editarea-block class="index-value" style="line-height: 1.2; margin-top: -0.747899em;">i</editarea-block></compositeblock></line></editarea></compositeblock></editarea-line><div class="frac-line"><inline style="border-bottom: 1px solid;"></inline></div><editarea-line class=" frac-edit-area denominator" style="line-height: 1.2; margin-top: -0.411765em;"><baselineblock></baselineblock><block class="Normal">∂𝜎</block><compositeblock dir="ltr" class="power-index-symbol-container power-index-symbol-container has-power inline"><editarea-block class="power-value" style="line-height: 1.2; margin-top: 0em; margin-bottom: -1.05378em;">2</editarea-block><middle-base><inline></inline></middle-base><editarea-block class="index-value" style="line-height: 1.2; margin-top: -0.60899em; margin-bottom: -0.168067em;">B</editarea-block></compositeblock></editarea-line></compositeblock></line><line class="taggable" style="line-height: 1.2;"><baselineblock></baselineblock><ref-tag data-tag-position="line" class="line-tag" data-tag-id="tid0.5518151685248875" style="font-family: Arial, Helvetica, sans-serif; font-size: 15px;" id="tid0.5518151685248875"><label>(From 8)</label></ref-tag><block class="Relation">⟹</block><compositeblock dir="ltr" class="fraction-symbol smaller"><editarea-line class=" frac-edit-area enumerator" style="line-height: 1.2; margin-bottom: -0.470588em;"><baselineblock></baselineblock><block class="Normal">∂l</block></editarea-line><div class="frac-line"><inline style="border-bottom: 1px solid;"></inline></div><editarea-line class=" frac-edit-area denominator" style="line-height: 1.2; margin-top: -0.411765em;"><baselineblock></baselineblock><block class="Normal">∂𝜎</block><compositeblock dir="ltr" class="power-index-symbol-container power-index-symbol-container has-power inline"><editarea-block class="power-value" style="line-height: 1.2; margin-top: 0em; margin-bottom: -1.05378em;">2</editarea-block><middle-base><inline></inline></middle-base><editarea-block class="index-value" style="line-height: 1.2; margin-top: -0.60899em; margin-bottom: -0.168067em;">B</editarea-block></compositeblock></editarea-line></compositeblock><block class="Relation">=</block><compositeblock dir="ltr" class="summation-like-symbol limit-type limit-kind "><editarea class="from no-area-container" style="margin-bottom: -0.470588em;"><line class="" style="margin-bottom: -0.168067em; line-height: 1.2;"><baselineblock></baselineblock><block>m</block></line></editarea><symbol class="" style="font-family: Asana-Math, Asana; font-style: normal; font-weight: normal;"><span>∑</span></symbol><editarea class="to to-summation no-area-container" style="margin-top: 0.117647em;"><line class="" style="line-height: 1.2;"><baselineblock></baselineblock><block>i=1</block></line></editarea></compositeblock><opensymbolblock class="" type="parenthesis" style="height: 1.88235em;"><hidden-span style="margin-top: 0.411765em; align-self: flex-start;">(</hidden-span><svg style="width: 0.5em;"><path d=" M 6.27 1.70 c 0.00 -0.06 -0.04 -0.08 -0.08 -0.08 c -0.03 0.00 -0.06 0.01 -0.08 0.02 c -2.55 1.34 -4.65 3.73 -4.65 9.40 v 0.60 h 1.53 v -0.60 c 0.00 -3.23 0.64 -7.03 3.31 -9.06 c 0.12 -0.09 0.13 -0.19 0.13 -0.28 z   M 1.44 11.64 v 8.72 h 1.53 v -8.72 z" stroke="none"></path><path d=" M 6.27 30.30 c 0.00 0.06 -0.04 0.08 -0.08 0.08 c -0.03 0.00 -0.06 -0.01 -0.08 -0.02 c -2.55 -1.34 -4.65 -3.73 -4.65 -9.40 v -0.60 h 1.53 v 0.60 c 0.00 3.23 0.64 7.03 3.31 9.06 c 0.12 0.09 0.13 0.19 0.13 0.28 z" stroke="none"></path></svg></opensymbolblock><block class="Normal">d</block><compositeblock dir="ltr" class="wide-hat-symbol ig-ex-br"><symbol style="display: block; width: 100%; position: relative; height: 0.529412em; margin-bottom: -0.176471em;"><svg style="position: absolute; left: 0px; top: 0px; display: block; width: 100%; height: 100%; overflow: visible;"><polyline points="0.00,8.06 6.66,3.62 13.32,8.06" stroke-width="1" fill="none" stroke-linejoin="bevel"></polyline></svg></symbol><editarea class="no-area-container" style="display: inline-flex;"><line class="" style="line-height: 1.2;"><baselineblock></baselineblock><block class="Normal">x</block><compositeblock dir="ltr" class="power-index-symbol-container power-index-symbol-container inline"><middle-base><inline></inline></middle-base><editarea-block class="index-value" style="line-height: 1.2; margin-top: -0.747899em;">i</editarea-block></compositeblock></line></editarea></compositeblock><closesymbolblock class="" type="parenthesis" style="height: 1.88235em;"><hidden-span style="margin-top: 0.411765em; align-self: flex-start;">)</hidden-span><svg style="width: 0.5em;"><path d=" M 1.75 1.70 c 0.00 -0.06 0.04 -0.08 0.08 -0.08 c 0.03 0.00 0.06 0.01 0.08 0.02 c 2.55 1.34 4.65 3.73 4.65 9.40 v 0.60 h -1.53 v -0.60 c 0.00 -3.23 -0.64 -7.03 -3.31 -9.06 c -0.12 -0.09 -0.13 -0.19 -0.13 -0.28 z  M 6.58 11.64 v 8.72 h -1.53 v -8.72 z" stroke="none"></path><path d=" M 1.75 30.30 c 0.00 0.06 0.04 0.08 0.08 0.08 c 0.03 0.00 0.06 -0.01 0.08 -0.02 c 2.55 -1.34 4.65 -3.73 4.65 -9.40 v -0.60 h -1.53 v 0.60 c 0.00 3.23 -0.64 7.03 -3.31 9.06 c -0.12 0.09 -0.13 0.19 -0.13 0.28 z" stroke="none"></path></svg></closesymbolblock><block class="Punctuation">.</block><opensymbolblock class="" type="parenthesis" style="height: 3.23529em;"><hidden-span style="margin-top: 1.29412em; align-self: flex-start;">(</hidden-span><svg style="width: 0.5em;"><path d=" M 6.27 1.70 c 0.00 -0.06 -0.04 -0.08 -0.08 -0.08 c -0.03 0.00 -0.06 0.01 -0.08 0.02 c -2.55 1.34 -4.65 3.73 -4.65 9.40 v 0.60 h 1.53 v -0.60 c 0.00 -3.23 0.64 -7.03 3.31 -9.06 c 0.12 -0.09 0.13 -0.19 0.13 -0.28 z   M 1.44 11.64 v 31.72 h 1.53 v -31.72 z" stroke="none"></path><path d=" M 6.27 53.30 c 0.00 0.06 -0.04 0.08 -0.08 0.08 c -0.03 0.00 -0.06 -0.01 -0.08 -0.02 c -2.55 -1.34 -4.65 -3.73 -4.65 -9.40 v -0.60 h 1.53 v 0.60 c 0.00 3.23 0.64 7.03 3.31 9.06 c 0.12 0.09 0.13 0.19 0.13 0.28 z" stroke="none"></path></svg></opensymbolblock><block class="Unary">-</block><opensymbolblock class="normal" type="parenthesis"><bracket-span>(</bracket-span></opensymbolblock><block class="Normal">x</block><compositeblock dir="ltr" class="power-index-symbol-container power-index-symbol-container"><middle-base><inline></inline></middle-base><editarea-block class="index-value" style="line-height: 1.2; margin-top: -0.747899em;">i</editarea-block></compositeblock><block class="Binary">-</block><block class="Normal">𝜇</block><compositeblock dir="ltr" class="power-index-symbol-container power-index-symbol-container"><middle-base><inline></inline></middle-base><editarea-block class="index-value" style="line-height: 1.2; margin-top: -0.747899em;">B</editarea-block></compositeblock><closesymbolblock class="normal" type="parenthesis"><bracket-span>)</bracket-span></closesymbolblock><compositeblock dir="ltr" class="fraction-symbol smaller"><editarea-line class=" frac-edit-area enumerator" style="line-height: 1.2; margin-bottom: -0.470588em;"><baselineblock></baselineblock><block class="Normal">1</block></editarea-line><div class="frac-line"><inline style="border-bottom: 1px solid;"></inline></div><editarea-line class=" frac-edit-area denominator" style="margin-bottom: -0.176471em; line-height: 1.2; margin-top: -0.411765em;"><baselineblock></baselineblock><block class="Normal">2</block></editarea-line></compositeblock><opensymbolblock class="" type="parenthesis" style="height: 1.64706em;"><hidden-span style="margin-top: 0.0588235em; align-self: flex-start;">(</hidden-span><svg style="width: 0.5em;"><path d=" M 6.27 1.70 c 0.00 -0.06 -0.04 -0.08 -0.08 -0.08 c -0.03 0.00 -0.06 0.01 -0.08 0.02 c -2.55 1.34 -4.65 3.73 -4.65 9.40 v 0.60 h 1.53 v -0.60 c 0.00 -3.23 0.64 -7.03 3.31 -9.06 c 0.12 -0.09 0.13 -0.19 0.13 -0.28 z   M 1.44 11.64 v 4.72 h 1.53 v -4.72 z" stroke="none"></path><path d=" M 6.27 26.30 c 0.00 0.06 -0.04 0.08 -0.08 0.08 c -0.03 0.00 -0.06 -0.01 -0.08 -0.02 c -2.55 -1.34 -4.65 -3.73 -4.65 -9.40 v -0.60 h 1.53 v 0.60 c 0.00 3.23 0.64 7.03 3.31 9.06 c 0.12 0.09 0.13 0.19 0.13 0.28 z" stroke="none"></path></svg></opensymbolblock><block class="Normal">𝜎</block><compositeblock dir="ltr" class="power-index-symbol-container power-index-symbol-container has-power"><editarea-block class="power-value" style="line-height: 1.2; margin-top: 0em; margin-bottom: -1.05378em;">2</editarea-block><middle-base><inline></inline></middle-base><editarea-block class="index-value" style="line-height: 1.2; margin-top: -0.60899em; margin-bottom: 0em;">B</editarea-block></compositeblock><block class="Binary">+</block><block class="Normal">𝜖</block><closesymbolblock class="" type="parenthesis" style="height: 1.64706em;"><hidden-span style="margin-top: 0.0588235em; align-self: flex-start;">)</hidden-span><svg style="width: 0.5em;"><path d=" M 1.75 1.70 c 0.00 -0.06 0.04 -0.08 0.08 -0.08 c 0.03 0.00 0.06 0.01 0.08 0.02 c 2.55 1.34 4.65 3.73 4.65 9.40 v 0.60 h -1.53 v -0.60 c 0.00 -3.23 -0.64 -7.03 -3.31 -9.06 c -0.12 -0.09 -0.13 -0.19 -0.13 -0.28 z  M 6.58 11.64 v 4.72 h -1.53 v -4.72 z" stroke="none"></path><path d=" M 1.75 26.30 c 0.00 0.06 0.04 0.08 0.08 0.08 c 0.03 0.00 0.06 -0.01 0.08 -0.02 c 2.55 -1.34 4.65 -3.73 4.65 -9.40 v -0.60 h -1.53 v 0.60 c 0.00 3.23 -0.64 7.03 -3.31 9.06 c -0.12 0.09 -0.13 0.19 -0.13 0.28 z" stroke="none"></path></svg></closesymbolblock><compositeblock dir="ltr" class="power-index-symbol-container power-index-symbol-container has-power" style="margin-left: -0.1em;"><editarea-line class=" power-value" style="line-height: 1.2; margin-bottom: -0.585714em;"><baselineblock></baselineblock><block>-</block><compositeblock dir="ltr" class="fraction-symbol smaller inline"><editarea-line class=" frac-edit-area enumerator" style="line-height: 1.2; margin-bottom: -0.504202em;"><baselineblock></baselineblock><block class="Normal">3</block></editarea-line><div class="frac-line"><inline style="border-bottom: 1px solid;"></inline></div><editarea-line class=" frac-edit-area denominator" style="margin-bottom: -0.168067em; line-height: 1.2; margin-top: -0.420168em;"><baselineblock></baselineblock><block class="Normal">2</block></editarea-line></compositeblock></editarea-line><middle-base><inline></inline></middle-base></compositeblock><closesymbolblock class="" type="parenthesis" style="height: 3.23529em;"><hidden-span style="margin-top: 1.29412em; align-self: flex-start;">)</hidden-span><svg style="width: 0.5em;"><path d=" M 1.75 1.70 c 0.00 -0.06 0.04 -0.08 0.08 -0.08 c 0.03 0.00 0.06 0.01 0.08 0.02 c 2.55 1.34 4.65 3.73 4.65 9.40 v 0.60 h -1.53 v -0.60 c 0.00 -3.23 -0.64 -7.03 -3.31 -9.06 c -0.12 -0.09 -0.13 -0.19 -0.13 -0.28 z  M 6.58 11.64 v 31.72 h -1.53 v -31.72 z" stroke="none"></path><path d=" M 1.75 53.30 c 0.00 0.06 0.04 0.08 0.08 0.08 c 0.03 0.00 0.06 -0.01 0.08 -0.02 c 2.55 -1.34 4.65 -3.73 4.65 -9.40 v -0.60 h -1.53 v 0.60 c 0.00 3.23 -0.64 7.03 -3.31 9.06 c -0.12 0.09 -0.13 0.19 -0.13 0.28 z" stroke="none"></path></svg></closesymbolblock></line></editarea><span role="presentation" style="width:100%;position:absolute;top:0;left:0;clip:rect(1px, 1px, 1px, 1px);height:1px;padding:1px 0 0 0!important;overflow:hidden;user-select:none;"><math display="block" xmlns="http://www.w3.org/1998/Math/MathML"><mtable columnwidth="100%" columnalign="center" width="100%"><mtr><mtd><mrow><mi>D</mi><mi>i</mi><mi>f</mi><mi>f</mi><mspace is="true" width="0.22em"></mspace><mo fence="true" stretchy="false">(</mo><mn>3</mn><mo fence="true" stretchy="false">)</mo><mspace is="true" width="0.22em"></mspace><mi>w</mi><mi>r</mi><mi>t</mi><mspace is="true" width="0.22em"></mspace><msubsup><mi>𝜎</mi><mi>B</mi><mn>2</mn></msubsup></mrow></mtd></mtr><mtr><mtd><mrow><mfrac><mrow><mi>∂</mi><mover accent="true"><msub><mi>x</mi><mi>i</mi></msub><mo>^</mo></mover></mrow><mrow><mi>∂</mi><msubsup><mi>𝜎</mi><mi>B</mi><mn>2</mn></msubsup></mrow></mfrac><mo form="infix">=</mo><mfrac><mrow><mo fence="true">(</mo><msqrt><mrow><msubsup><mi>𝜎</mi><mi>B</mi><mn>2</mn></msubsup><mo form="infix">+</mo><mi>𝜖</mi></mrow></msqrt><mo fence="true">)</mo><mo fence="true" stretchy="false">(</mo><mn>0</mn><mo fence="true" stretchy="false">)</mo><mo form="infix">-</mo><mo fence="true" stretchy="false">(</mo><msub><mi>x</mi><mi>i</mi></msub><mo form="infix">-</mo><msub><mi>𝜇</mi><mi>B</mi></msub><mo fence="true" stretchy="false">)</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mo fence="true">(</mo><msubsup><mi>𝜎</mi><mi>B</mi><mn>2</mn></msubsup><mo form="infix">+</mo><mi>𝜖</mi><msup><mo fence="true">)</mo><mrow><mo form="prefix">-</mo><mfrac><mn>1</mn><mn>2</mn></mfrac></mrow></msup></mrow><mrow><msubsup><mi>𝜎</mi><mi>B</mi><mn>2</mn></msubsup><mo form="infix">+</mo><mi>𝜖</mi></mrow></mfrac></mrow></mtd></mtr><mtr><mtd><mrow><mo form="infix">⟹</mo><mfrac><mrow><mi>∂</mi><mover accent="true"><msub><mi>x</mi><mi>i</mi></msub><mo>^</mo></mover></mrow><mrow><mi>∂</mi><msubsup><mi>𝜎</mi><mi>B</mi><mn>2</mn></msubsup></mrow></mfrac><mo form="infix">=</mo><mo form="infix">-</mo><mo fence="true" stretchy="false">(</mo><msub><mi>x</mi><mi>i</mi></msub><mo form="infix">-</mo><msub><mi>𝜇</mi><mi>B</mi></msub><mo fence="true" stretchy="false">)</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mo fence="true">(</mo><msubsup><mi>𝜎</mi><mi>B</mi><mn>2</mn></msubsup><mo form="infix">+</mo><mi>𝜖</mi><msup><mo fence="true">)</mo><mrow><mo form="prefix">-</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mo form="infix">-</mo><mn>1</mn></mrow></msup></mrow></mtd></mtr><mtr><mtd><mrow><mo form="infix">⟹</mo><mfrac><mrow><mi>∂</mi><mover accent="true"><msub><mi>x</mi><mi>i</mi></msub><mo>^</mo></mover></mrow><mrow><mi>∂</mi><msubsup><mi>𝜎</mi><mi>B</mi><mn>2</mn></msubsup></mrow></mfrac><mo form="infix">=</mo><mo form="infix">-</mo><mo fence="true" stretchy="false">(</mo><msub><mi>x</mi><mi>i</mi></msub><mo form="infix">-</mo><msub><mi>𝜇</mi><mi>B</mi></msub><mo fence="true" stretchy="false">)</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mo fence="true">(</mo><msubsup><mi>𝜎</mi><mi>B</mi><mn>2</mn></msubsup><mo form="infix">+</mo><mi>𝜖</mi><msup><mo fence="true">)</mo><mrow><mo form="prefix">-</mo><mfrac><mn>3</mn><mn>2</mn></mfrac></mrow></msup></mrow></mtd></mtr><mtr><mtd><mrow></mrow></mtd></mtr><mtr><mtd><mrow><mfrac><mrow><mi>∂</mi><mi>l</mi></mrow><mrow><mi>∂</mi><msubsup><mi>𝜎</mi><mi>B</mi><mn>2</mn></msubsup></mrow></mfrac><mo form="infix">=</mo><munderover><mo largeop="true" movablelimit="true">∑</mo><mrow><mi>i</mi><mo form="infix">=</mo><mn>1</mn></mrow><mi>m</mi></munderover><mfrac><mrow><mi>∂</mi><mi>l</mi></mrow><mrow><mi>∂</mi><msub><mi>y</mi><mi>i</mi></msub></mrow></mfrac><mo separator="true">.</mo><mfrac><mrow><mi>∂</mi><msub><mi>y</mi><mi>i</mi></msub></mrow><mrow><mi>∂</mi><mover accent="true"><msub><mi>x</mi><mi>i</mi></msub><mo>^</mo></mover></mrow></mfrac><mo separator="true">.</mo><mfrac><mrow><mi>∂</mi><mover accent="true"><msub><mi>x</mi><mi>i</mi></msub><mo>^</mo></mover></mrow><mrow><mi>∂</mi><msubsup><mi>𝜎</mi><mi>B</mi><mn>2</mn></msubsup></mrow></mfrac></mrow></mtd></mtr><mtr><mtd><mrow><mo form="infix">⟹</mo><mfrac><mrow><mi>∂</mi><mi>l</mi></mrow><mrow><mi>∂</mi><msubsup><mi>𝜎</mi><mi>B</mi><mn>2</mn></msubsup></mrow></mfrac><mo form="infix">=</mo><munderover><mo largeop="true" movablelimit="true">∑</mo><mrow><mi>i</mi><mo form="infix">=</mo><mn>1</mn></mrow><mi>m</mi></munderover><mfrac><mrow><mi>∂</mi><mi>l</mi></mrow><mrow><mi>∂</mi><mover accent="true"><msub><mi>x</mi><mi>i</mi></msub><mo>^</mo></mover></mrow></mfrac><mo separator="true">.</mo><mfrac><mrow><mi>∂</mi><mover accent="true"><msub><mi>x</mi><mi>i</mi></msub><mo>^</mo></mover></mrow><mrow><mi>∂</mi><msubsup><mi>𝜎</mi><mi>B</mi><mn>2</mn></msubsup></mrow></mfrac></mrow></mtd></mtr><mtr><mtd><mrow><mo form="infix">⟹</mo><mfrac><mrow><mi>∂</mi><mi>l</mi></mrow><mrow><mi>∂</mi><msubsup><mi>𝜎</mi><mi>B</mi><mn>2</mn></msubsup></mrow></mfrac><mo form="infix">=</mo><munderover><mo largeop="true" movablelimit="true">∑</mo><mrow><mi>i</mi><mo form="infix">=</mo><mn>1</mn></mrow><mi>m</mi></munderover><mi>d</mi><mover accent="true"><msub><mi>x</mi><mi>i</mi></msub><mo>^</mo></mover><mo separator="true">.</mo><mfrac><mrow><mi>∂</mi><mover accent="true"><msub><mi>x</mi><mi>i</mi></msub><mo>^</mo></mover></mrow><mrow><mi>∂</mi><msubsup><mi>𝜎</mi><mi>B</mi><mn>2</mn></msubsup></mrow></mfrac></mrow></mtd></mtr><mtr><mtd><mrow><mo form="infix">⟹</mo><mfrac><mrow><mi>∂</mi><mi>l</mi></mrow><mrow><mi>∂</mi><msubsup><mi>𝜎</mi><mi>B</mi><mn>2</mn></msubsup></mrow></mfrac><mo form="infix">=</mo><munderover><mo largeop="true" movablelimit="true">∑</mo><mrow><mi>i</mi><mo form="infix">=</mo><mn>1</mn></mrow><mi>m</mi></munderover><mo fence="true">(</mo><mi>d</mi><mover accent="true"><msub><mi>x</mi><mi>i</mi></msub><mo>^</mo></mover><mo fence="true">)</mo><mo separator="true">.</mo><mo fence="true">(</mo><mo form="prefix">-</mo><mo fence="true" stretchy="false">(</mo><msub><mi>x</mi><mi>i</mi></msub><mo form="infix">-</mo><msub><mi>𝜇</mi><mi>B</mi></msub><mo fence="true" stretchy="false">)</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mo fence="true">(</mo><msubsup><mi>𝜎</mi><mi>B</mi><mn>2</mn></msubsup><mo form="infix">+</mo><mi>𝜖</mi><msup><mo fence="true">)</mo><mrow><mo form="prefix">-</mo><mfrac><mn>3</mn><mn>2</mn></mfrac></mrow></msup><mo fence="true">)</mo></mrow></mtd></mtr></mtable></math></span></compositeblock></blocks></line><line class="root text-mode full-line-block-inside" style="line-height: 1.4;"><prefix></prefix><blocks><baselineblock class="inline"></baselineblock><compositeblock dir="ltr" class="math-diagram inline" aria-label="Diagram" role="img"><math-diagram aria-hidden="true" data-amt="diagram" style="height: 308px; z-index: 1;"><clip-region style="width: 100%; height: 100%; display: block; overflow: hidden; position: relative;"><zoom-region><svg><g><defs><pattern id=".952149480699739" width="10" height="10" patternUnits="userSpaceOnUse"><path d="M 10 0 L 0 0 0 10" fill="none" stroke="lightgray" stroke-width="0.5"></path></pattern></defs><rect width="100%" height="100%" fill="url(#.952149480699739)" stroke="lightgray" stroke-width="0.5"></rect></g></svg><div class="diagram-plotly-layer" style="position: absolute; inset: 0px; pointer-events: none; fill: none; stroke: none;"><svg style="overflow:visible;position:absolute;left:0;top:0;"></svg></div><svg class="role-diagram-draw-area"><g class="shapes-region" style="stroke: black; fill: none;"><g class="composite-shape"><path class="real" d=" M18,79 L29.5,79 L29.5,169.2 L18,169.2 Z" style="stroke-width: 1px; stroke: rgb(0, 0, 0); fill: none; fill-opacity: 1;"></path></g><g class="composite-shape"><path class="real" d=" M407,74 L418.5,74 L418.5,164.2 L407,164.2 Z" style="stroke-width: 1px; stroke: rgb(0, 0, 0); fill: none; fill-opacity: 1;"></path></g><g class="composite-shape"><path class="real" d=" M579,74 L590.5,74 L590.5,164.2 L579,164.2 Z" style="stroke-width: 1px; stroke: rgb(0, 0, 0); fill: none; fill-opacity: 1;"></path></g><g class="arrow-line"><path class="connection real" stroke-dasharray="" d="  M651.5,119.03 L607.5,119.03" style="stroke: rgb(211, 34, 34); stroke-opacity: 1; stroke-width: 1px; fill: rgb(255, 255, 255); fill-opacity: 1;"></path><g stroke="rgb(211,34,34)" stroke-opacity="1" transform="matrix(1,-2.4492935982947064e-16,2.4492935982947064e-16,1,605.5,119.0333251953125)" style="stroke: rgb(211, 34, 34); stroke-width: 1px;"><path d=" M10.93,-3.29 Q4.96,-0.45 0,0 Q4.96,0.45 10.93,3.29"></path></g></g><g class="arrow-line"><path class="connection real" stroke-dasharray="" d="  M501.5,49.03 L457.5,49.03" style="stroke: rgb(211, 34, 34); stroke-opacity: 1; stroke-width: 1px; fill: rgb(255, 255, 255); fill-opacity: 1;"></path><g stroke="rgb(211,34,34)" stroke-opacity="1" transform="matrix(1,-2.4492935982947064e-16,2.4492935982947064e-16,1,455.5,49.0333251953125)" style="stroke: rgb(211, 34, 34); stroke-width: 1px;"><path d=" M10.93,-3.29 Q4.96,-0.45 0,0 Q4.96,0.45 10.93,3.29"></path></g></g><g class="arrow-line"><path class="connection real" stroke-dasharray="" d="  M534.5,79.97 L494.34,103.18" style="stroke: rgb(211, 34, 34); stroke-opacity: 1; stroke-width: 1px; fill: rgb(255, 255, 255); fill-opacity: 1;"></path><g stroke="rgb(211,34,34)" stroke-opacity="1" transform="matrix(0.8657634856957139,-0.500453381281421,0.500453381281421,0.8657634856957139,492.6072076055523,104.1808164071152)" style="stroke: rgb(211, 34, 34); stroke-width: 1px;"><path d=" M10.93,-3.29 Q4.96,-0.45 0,0 Q4.96,0.45 10.93,3.29"></path></g></g><g class="arrow-line"><path class="connection real" stroke-dasharray="" d="  M546.5,99 L503.05,134.7" style="stroke: rgb(211, 34, 34); stroke-opacity: 1; stroke-width: 1px; fill: rgb(255, 255, 255); fill-opacity: 1;"></path><g stroke="rgb(211,34,34)" stroke-opacity="1" transform="matrix(0.772733573497351,-0.6347305132022677,0.6347305132022677,0.772733573497351,501.5,135.9666748046875)" style="stroke: rgb(211, 34, 34); stroke-width: 1px;"><path d=" M10.93,-3.29 Q4.96,-0.45 0,0 Q4.96,0.45 10.93,3.29"></path></g></g><g class="arrow-line"><path class="connection real" stroke-dasharray="" d="  M364.5,70.97 L121.46,117.59" style="stroke: rgb(211, 34, 34); stroke-opacity: 1; stroke-width: 1px; fill: rgb(255, 255, 255); fill-opacity: 1;"></path><g stroke="rgb(211,34,34)" stroke-opacity="1" transform="matrix(0.9820904869115739,-0.18840986045795952,0.18840986045795952,0.9820904869115739,119.5,117.9666748046875)" style="stroke: rgb(211, 34, 34); stroke-width: 1px;"><path d=" M10.93,-3.29 Q4.96,-0.45 0,0 Q4.96,0.45 10.93,3.29"></path></g></g><g></g></g><g><g class="connection-group"><g class="arrow-line"><path class="connection real" stroke-dasharray="" d="  M89.66,158 L103.03,129.81" style="stroke: rgb(0, 0, 0); stroke-width: 1px; fill: none; fill-opacity: 1;"></path><g stroke="#000" transform="matrix(-0.4284620893739598,0.9035597589364529,-0.9035597589364529,-0.4284620893739598,103.88793103448279,128)" style="stroke: rgb(0, 0, 0); stroke-width: 1px;"><path d=" M10.93,-3.29 Q4.96,-0.45 0,0 Q4.96,0.45 10.93,3.29"></path></g></g></g><g class="connection-group"><g class="arrow-line"><path class="connection real" stroke-dasharray="" d="  M124,110.6 L402.03,59.3" style="stroke: rgb(0, 0, 0); stroke-width: 1px; fill: none; fill-opacity: 1;"></path><g stroke="#000" transform="matrix(-0.983413563644774,0.1813774044347478,-0.1813774044347478,-0.983413563644774,404.00000000000006,58.93739703459637)" style="stroke: rgb(0, 0, 0); stroke-width: 1px;"><path d=" M10.93,-3.29 Q4.96,-0.45 0,0 Q4.96,0.45 10.93,3.29"></path></g></g></g><g class="connection-group"><g class="arrow-line"><path class="connection real" stroke-dasharray="" d="  M97,166.35 L402.11,61.27" style="stroke: rgb(0, 0, 0); stroke-width: 1px; fill: none; fill-opacity: 1;"></path><g stroke="#000" transform="matrix(-0.9455185755993165,0.32556815445715764,-0.32556815445715764,-0.9455185755993165,404,60.616314199395774)" style="stroke: rgb(0, 0, 0); stroke-width: 1px;"><path d=" M10.93,-3.29 Q4.96,-0.45 0,0 Q4.96,0.45 10.93,3.29"></path></g></g></g><g class="connection-group"><g class="arrow-line"><path class="connection real" stroke-dasharray="" d="  M425,56.82 L578,54.21" style="stroke: rgb(0, 0, 0); stroke-width: 1px; fill: none; fill-opacity: 1;"></path><g stroke="#000" transform="matrix(-0.9998537262811577,0.017103392695131777,-0.017103392695131777,-0.9998537262811577,580,54.17897727272728)" style="stroke: rgb(0, 0, 0); stroke-width: 1px;"><path d=" M10.93,-3.29 Q4.96,-0.45 0,0 Q4.96,0.45 10.93,3.29"></path></g></g></g><g class="connection-group"><g class="arrow-line"><path class="connection real" stroke-dasharray="" d="  M478,119.74 L578.27,61.14" style="stroke: rgb(0, 0, 0); stroke-width: 1px; fill: none; fill-opacity: 1;"></path><g stroke="#000" transform="matrix(-0.863395550606772,0.5045276238150188,-0.5045276238150188,-0.863395550606772,580,60.1358024691358)" style="stroke: rgb(0, 0, 0); stroke-width: 1px;"><path d=" M10.93,-3.29 Q4.96,-0.45 0,0 Q4.96,0.45 10.93,3.29"></path></g></g></g><g class="connection-group"><g class="arrow-line"><path class="connection real" stroke-dasharray="" d="  M470,155.42 L578.47,64.13" style="stroke: rgb(0, 0, 0); stroke-width: 1px; fill: none; fill-opacity: 1;"></path><g stroke="#000" transform="matrix(-0.765033810048734,0.6439901159818507,-0.6439901159818507,-0.765033810048734,580,62.83783783783781)" style="stroke: rgb(0, 0, 0); stroke-width: 1px;"><path d=" M10.93,-3.29 Q4.96,-0.45 0,0 Q4.96,0.45 10.93,3.29"></path></g></g></g><g class="connection-group"><g class="arrow-line"><path class="connection real" stroke-dasharray="" d="  M36,65.63 L96.31,103.72" style="stroke: rgb(0, 0, 0); stroke-width: 1px; fill: none; fill-opacity: 1;"></path><g stroke="#000" transform="matrix(-0.8454483058790255,-0.5340572648005883,0.5340572648005883,-0.8454483058790255,98,104.78947368421052)" style="stroke: rgb(0, 0, 0); stroke-width: 1px;"><path d=" M10.93,-3.29 Q4.96,-0.45 0,0 Q4.96,0.45 10.93,3.29"></path></g></g></g><g class="connection-group"><g class="arrow-line"><path class="connection real" stroke-dasharray="" d="  M32.23,72 L75.85,156.22" style="stroke: rgb(0, 0, 0); stroke-width: 1px; fill: none; fill-opacity: 1;"></path><g stroke="#000" transform="matrix(-0.45988985072076116,-0.8879759710735623,0.8879759710735623,-0.45988985072076116,76.76785714285714,158)" style="stroke: rgb(0, 0, 0); stroke-width: 1px;"><path d=" M10.93,-3.29 Q4.96,-0.45 0,0 Q4.96,0.45 10.93,3.29"></path></g></g></g><g class="connection-group"><g class="arrow-line"><path class="connection real" stroke-dasharray="" d="  M36,58.95 L402,57.06" style="stroke: rgb(0, 0, 0); stroke-width: 1px; fill: none; fill-opacity: 1;"></path><g stroke="#000" transform="matrix(-0.9999871908648438,0.00506143321981126,-0.00506143321981126,-0.9999871908648438,404.00000000000006,57.05398457583547)" style="stroke: rgb(0, 0, 0); stroke-width: 1px;"><path d=" M10.93,-3.29 Q4.96,-0.45 0,0 Q4.96,0.45 10.93,3.29"></path></g></g></g></g><g></g><g></g></svg><diagram-editors><position-container data-rotation="0" data-skewx="0" data-flipx="false" data-anchor="left-top" style="left: 16px; top: 47px;"><dg-editor-container data-editor-id="de14093760592919402" class="no-border-on-print math-diagram-editor" style="border: 1px solid transparent; transform: translate(0%); font-size: 17px; font-family: Asana-Math, Asana;"><editarea class="diagram-editor non-wrap no-area-container" style="font-size: 1em;"><line class="" style="line-height: 1.2;"><baselineblock></baselineblock><block class="Normal">x</block><compositeblock dir="ltr" class="power-index-symbol-container power-index-symbol-container inline"><middle-base><inline></inline></middle-base><editarea-block class="index-value" style="line-height: 1.2; margin-top: -0.747899em;">i</editarea-block></compositeblock></line></editarea></dg-editor-container></position-container><position-container data-rotation="0" data-skewx="0" data-flipx="false" data-anchor="left-top" style="left: 405px; top: 42px;"><dg-editor-container data-editor-id="de6634205768090198" class="no-border-on-print math-diagram-editor" style="border: 1px solid transparent; transform: translate(0%); font-size: 17px; font-family: Asana-Math, Asana;"><editarea class="diagram-editor non-wrap no-area-container" style="font-size: 1em;"><line class="" style="line-height: 1.2;"><baselineblock></baselineblock><compositeblock dir="ltr" class="wide-hat-symbol ig-ex-br inline"><symbol style="display: block; width: 100%; position: relative; height: 0.529412em; margin-bottom: -0.176471em;"><svg style="position: absolute; left: 0px; top: 0px; display: block; width: 100%; height: 100%; overflow: visible;"><polyline points="0.00,8.06 6.66,3.62 13.32,8.06" stroke-width="1" fill="none" stroke-linejoin="bevel"></polyline></svg></symbol><editarea class="no-area-container" style="display: inline-flex;"><line class="" style="line-height: 1.2;"><baselineblock></baselineblock><block class="Normal">x</block><compositeblock dir="ltr" class="power-index-symbol-container power-index-symbol-container inline"><middle-base><inline></inline></middle-base><editarea-block class="index-value" style="line-height: 1.2; margin-top: -0.747899em;">i</editarea-block></compositeblock></line></editarea></compositeblock></line></editarea></dg-editor-container></position-container><position-container data-rotation="0" data-skewx="0" data-flipx="false" data-anchor="left-top" style="left: 71px; top: 159px;"><dg-editor-container data-editor-id="de3491811283430566" class="no-border-on-print math-diagram-editor" style="border: 1px solid transparent; transform: translate(0%); font-size: 17px; font-family: Asana-Math, Asana;"><editarea class="diagram-editor non-wrap no-area-container" style="font-size: 1em;"><line class="" style="line-height: 1.2;"><baselineblock></baselineblock><block class="Normal">𝜇</block><compositeblock dir="ltr" class="power-index-symbol-container power-index-symbol-container inline"><middle-base><inline></inline></middle-base><editarea-block class="index-value" style="line-height: 1.2; margin-top: -0.747899em;">B</editarea-block></compositeblock></line></editarea></dg-editor-container></position-container><position-container data-rotation="0" data-skewx="0" data-flipx="false" data-anchor="left-top" style="left: 99px; top: 99px;"><dg-editor-container data-editor-id="de9558320162498692" class="no-border-on-print math-diagram-editor" style="border: 1px solid transparent; transform: translate(0%); font-size: 17px; font-family: Asana-Math, Asana;"><editarea class="diagram-editor non-wrap no-area-container" style="font-size: 1em;"><line class="" style="line-height: 1.2;"><baselineblock></baselineblock><block class="Normal">𝜎</block><compositeblock dir="ltr" class="power-index-symbol-container power-index-symbol-container has-power inline"><editarea-block class="power-value" style="line-height: 1.2; margin-top: 0em; margin-bottom: -1.05378em;">2</editarea-block><middle-base><inline></inline></middle-base><editarea-block class="index-value" style="line-height: 1.2; margin-top: -0.60899em; margin-bottom: 0em;">B</editarea-block></compositeblock></line></editarea></dg-editor-container></position-container><position-container data-rotation="0" data-skewx="0" data-flipx="false" data-anchor="left-top" style="left: 453px; top: 152px;"><dg-editor-container data-editor-id="de9854180737186983" class="no-border-on-print math-diagram-editor" style="border: 1px solid transparent; transform: translate(0%); font-size: 17px; font-family: Asana-Math, Asana;"><editarea class="diagram-editor non-wrap no-area-container" style="font-size: 1em;"><line class="" style="line-height: 1.2;"><baselineblock></baselineblock><block class="Normal">𝛾</block></line></editarea></dg-editor-container></position-container><position-container data-rotation="0" data-skewx="0" data-flipx="false" data-anchor="left-top" style="left: 461px; top: 114px;"><dg-editor-container data-editor-id="de9360151894632947" class="no-border-on-print math-diagram-editor" style="border: 1px solid transparent; transform: translate(0%); font-size: 17px; font-family: Asana-Math, Asana;"><editarea class="diagram-editor non-wrap no-area-container" style="font-size: 1em;"><line class="" style="line-height: 1.2;"><baselineblock></baselineblock><block class="Normal">𝛽</block></line></editarea></dg-editor-container></position-container><position-container data-rotation="0" data-skewx="0" data-flipx="false" data-anchor="left-top" style="left: 581px; top: 42px;"><dg-editor-container data-editor-id="de13523270499339302" class="no-border-on-print math-diagram-editor" style="border: 1px solid transparent; transform: translate(0%); font-size: 17px; font-family: Asana-Math, Asana;"><editarea class="diagram-editor non-wrap no-area-container" style="font-size: 1em;"><line class="" style="line-height: 1.2;"><baselineblock></baselineblock><block class="Normal">y</block><compositeblock dir="ltr" class="power-index-symbol-container power-index-symbol-container inline"><middle-base><inline></inline></middle-base><editarea-block class="index-value" style="line-height: 1.2; margin-top: -0.747899em;">i</editarea-block></compositeblock></line></editarea></dg-editor-container></position-container><position-container data-rotation="0" data-skewx="0" data-flipx="false" data-anchor="left-top" style="left: 619px; top: 76px;"><dg-editor-container data-editor-id="de6825998602616545" class="no-border-on-print math-diagram-editor" style="border: 1px solid transparent; transform: translate(0%); font-size: 17px; font-family: Asana-Math, Asana;"><editarea class="diagram-editor non-wrap no-area-container" style="font-size: 1em;"><line class="" style="line-height: 1.2;"><baselineblock></baselineblock><block class="Normal">dy</block><compositeblock dir="ltr" class="power-index-symbol-container power-index-symbol-container inline"><middle-base><inline></inline></middle-base><editarea-block class="index-value" style="line-height: 1.2; margin-top: -0.747899em;">i</editarea-block></compositeblock></line></editarea></dg-editor-container></position-container><position-container data-rotation="0" data-skewx="0" data-flipx="false" data-anchor="left-top" style="left: 465px; top: 18px;"><dg-editor-container data-editor-id="de5834648786965078" class="no-border-on-print math-diagram-editor" style="border: 1px solid transparent; transform: translate(0%); font-size: 17px; font-family: Asana-Math, Asana;"><editarea class="diagram-editor non-wrap no-area-container" style="font-size: 1em;"><line class="" style="line-height: 1.2;"><baselineblock></baselineblock><block class="Normal">d</block><compositeblock dir="ltr" class="wide-hat-symbol ig-ex-br inline"><symbol style="display: block; width: 100%; position: relative; height: 0.529412em; margin-bottom: -0.176471em;"><svg style="position: absolute; left: 0px; top: 0px; display: block; width: 100%; height: 100%; overflow: visible;"><polyline points="0.00,8.06 6.66,3.62 13.32,8.06" stroke-width="1" fill="none" stroke-linejoin="bevel"></polyline></svg></symbol><editarea class="no-area-container" style="display: inline-flex;"><line class="" style="line-height: 1.2;"><baselineblock></baselineblock><block class="Normal">x</block><compositeblock dir="ltr" class="power-index-symbol-container power-index-symbol-container inline"><middle-base><inline></inline></middle-base><editarea-block class="index-value" style="line-height: 1.2; margin-top: -0.747899em;">i</editarea-block></compositeblock></line></editarea></compositeblock></line></editarea></dg-editor-container></position-container><position-container data-rotation="327.88" data-skewx="0" data-flipx="false" data-anchor="left-top" style="left: 491.538px; top: 75.3417px; transform: rotate(327.88deg);"><dg-editor-container data-editor-id="de6238781570259844" class="no-border-on-print math-diagram-editor" style="border: 1px solid transparent; transform: translate(0%); font-size: 17px; font-family: Asana-Math, Asana;"><editarea class="diagram-editor non-wrap no-area-container" style="font-size: 1em;"><line class="" style="line-height: 1.2;"><baselineblock></baselineblock><block class="Normal">d𝛽</block><block class="Normal"> </block></line></editarea></dg-editor-container></position-container><position-container data-rotation="319.54" data-skewx="0" data-flipx="false" data-anchor="left-top" style="left: 522.071px; top: 122.842px; transform: rotate(319.54deg);"><dg-editor-container data-editor-id="de1403913309868121" class="no-border-on-print math-diagram-editor" style="border: 1px solid transparent; transform: translate(0%); font-size: 17px; font-family: Asana-Math, Asana;"><editarea class="diagram-editor non-wrap no-area-container" style="font-size: 1em;"><line class="" style="line-height: 1.2;"><baselineblock></baselineblock><block class="Normal">d𝛾</block></line></editarea></dg-editor-container></position-container><position-container data-rotation="350.13" data-skewx="0" data-flipx="false" data-anchor="left-top" style="left: 140.1px; top: 60.5001px; transform: rotate(350.13deg);"><dg-editor-container data-editor-id="de019832638769479494" class="no-border-on-print math-diagram-editor" style="border: 1px solid transparent; transform: translate(0%); font-size: 17px; font-family: Asana-Math, Asana;"><editarea class="diagram-editor non-wrap no-area-container" style="font-size: 0.7em;"><line class="" style="line-height: 1.2;"><baselineblock></baselineblock><compositeblock dir="ltr" class="summation-like-symbol limit-type non-limit-kind  inline"><editarea class="from no-area-container" style="margin-bottom: -0.588235em; margin-left: 0.9em;"><line class="" style="margin-bottom: -0.120048em; line-height: 1.2;"><baselineblock></baselineblock><block>m</block></line></editarea><symbol class="" style="font-family: Asana-Math, Asana; font-style: normal; font-weight: normal;"><span>∑</span></symbol><editarea class="to to-summation no-area-container" style="margin-top: -0.420168em; margin-left: 0.9em;"><line class="" style="line-height: 1.2;"><baselineblock></baselineblock><block>i=1</block></line></editarea></compositeblock><opensymbolblock class="" type="parenthesis" style="height: 1.93277em;"><hidden-span style="margin-top: 0.420168em; align-self: flex-start;">(</hidden-span><svg style="width: 0.5em;"><path d=" M 4.39 1.19 c 0.00 -0.04 -0.03 -0.06 -0.06 -0.06 c -0.02 0.00 -0.04 0.01 -0.06 0.02 c -1.78 0.94 -3.25 2.61 -3.25 6.58 v 0.42 h 1.07 v -0.42 c 0.00 -2.26 0.45 -4.92 2.32 -6.34 c 0.09 -0.07 0.09 -0.13 0.09 -0.20 z   M 1.01 8.15 v 6.70 h 1.07 v -6.70 z" stroke="none"></path><path d=" M 4.39 21.81 c 0.00 0.04 -0.03 0.06 -0.06 0.06 c -0.02 0.00 -0.04 -0.01 -0.06 -0.02 c -1.78 -0.94 -3.25 -2.61 -3.25 -6.58 v -0.42 h 1.07 v 0.42 c 0.00 2.26 0.45 4.92 2.32 6.34 c 0.09 0.07 0.09 0.13 0.09 0.20 z" stroke="none"></path></svg></opensymbolblock><block class="Normal">d</block><compositeblock dir="ltr" class="wide-hat-symbol ig-ex-br inline"><symbol style="display: block; width: 100%; position: relative; height: 0.504202em; margin-bottom: -0.168067em;"><svg style="position: absolute; left: 0px; top: 0px; display: block; width: 100%; height: 100%; overflow: visible;"><polyline points="0.00,5.34 4.65,2.24 9.30,5.34" stroke-width="1" fill="none" stroke-linejoin="bevel"></polyline></svg></symbol><editarea class="no-area-container" style="display: inline-flex;"><line class="" style="line-height: 1.2;"><baselineblock></baselineblock><block class="Normal">x</block><compositeblock dir="ltr" class="power-index-symbol-container power-index-symbol-container inline"><middle-base><inline></inline></middle-base><editarea-block class="index-value" style="line-height: 1.2; margin-top: -0.747899em;">i</editarea-block></compositeblock></line></editarea></compositeblock><closesymbolblock class="" type="parenthesis" style="height: 1.93277em;"><hidden-span style="margin-top: 0.420168em; align-self: flex-start;">)</hidden-span><svg style="width: 0.5em;"><path d=" M 1.22 1.19 c 0.00 -0.04 0.03 -0.06 0.06 -0.06 c 0.02 0.00 0.04 0.01 0.06 0.02 c 1.78 0.94 3.25 2.61 3.25 6.58 v 0.42 h -1.07 v -0.42 c 0.00 -2.26 -0.45 -4.92 -2.32 -6.34 c -0.09 -0.07 -0.09 -0.13 -0.09 -0.20 z  M 4.61 8.15 v 6.70 h -1.07 v -6.70 z" stroke="none"></path><path d=" M 1.22 21.81 c 0.00 0.04 0.03 0.06 0.06 0.06 c 0.02 0.00 0.04 -0.01 0.06 -0.02 c 1.78 -0.94 3.25 -2.61 3.25 -6.58 v -0.42 h -1.07 v 0.42 c 0.00 2.26 -0.45 4.92 -2.32 6.34 c -0.09 0.07 -0.09 0.13 -0.09 0.20 z" stroke="none"></path></svg></closesymbolblock><block class="Punctuation">.</block><opensymbolblock class="" type="parenthesis" style="height: 3.10924em;"><hidden-span style="margin-top: 1.34454em; align-self: flex-start;">(</hidden-span><svg style="width: 0.5em;"><path d=" M 4.39 1.19 c 0.00 -0.04 -0.03 -0.06 -0.06 -0.06 c -0.02 0.00 -0.04 0.01 -0.06 0.02 c -1.78 0.94 -3.25 2.61 -3.25 6.58 v 0.42 h 1.07 v -0.42 c 0.00 -2.26 0.45 -4.92 2.32 -6.34 c 0.09 -0.07 0.09 -0.13 0.09 -0.20 z   M 1.01 8.15 v 20.70 h 1.07 v -20.70 z" stroke="none"></path><path d=" M 4.39 35.81 c 0.00 0.04 -0.03 0.06 -0.06 0.06 c -0.02 0.00 -0.04 -0.01 -0.06 -0.02 c -1.78 -0.94 -3.25 -2.61 -3.25 -6.58 v -0.42 h 1.07 v 0.42 c 0.00 2.26 0.45 4.92 2.32 6.34 c 0.09 0.07 0.09 0.13 0.09 0.20 z" stroke="none"></path></svg></opensymbolblock><block class="Unary">-</block><opensymbolblock class="normal" type="parenthesis"><bracket-span>(</bracket-span></opensymbolblock><block class="Normal">x</block><compositeblock dir="ltr" class="power-index-symbol-container power-index-symbol-container inline"><middle-base><inline></inline></middle-base><editarea-block class="index-value" style="line-height: 1.2; margin-top: -0.747899em;">i</editarea-block></compositeblock><block class="Binary">-</block><block class="Normal">𝜇</block><compositeblock dir="ltr" class="power-index-symbol-container power-index-symbol-container inline"><middle-base><inline></inline></middle-base><editarea-block class="index-value" style="line-height: 1.2; margin-top: -0.747899em;">B</editarea-block></compositeblock><closesymbolblock class="normal" type="parenthesis"><bracket-span>)</bracket-span></closesymbolblock><compositeblock dir="ltr" class="fraction-symbol smaller frac-inline inline"><editarea-line class=" frac-edit-area enumerator" style="line-height: 1.2; margin-bottom: -0.420168em; padding-top: 0.0840336em;"><baselineblock></baselineblock><block>1</block></editarea-line><div class="frac-line"><inline style="vertical-align: 0.35em; border-bottom: 1px solid;"></inline></div><editarea-line class=" frac-edit-area denominator" style="margin-bottom: -0.0840336em; line-height: 1.2; margin-top: -0.588235em;"><baselineblock></baselineblock><block>2</block></editarea-line></compositeblock><opensymbolblock class="" type="parenthesis" style="height: 1.68067em;"><hidden-span style="margin-top: 0.0840336em; align-self: flex-start;">(</hidden-span><svg style="width: 0.5em;"><path d=" M 4.39 1.19 c 0.00 -0.04 -0.03 -0.06 -0.06 -0.06 c -0.02 0.00 -0.04 0.01 -0.06 0.02 c -1.78 0.94 -3.25 2.61 -3.25 6.58 v 0.42 h 1.07 v -0.42 c 0.00 -2.26 0.45 -4.92 2.32 -6.34 c 0.09 -0.07 0.09 -0.13 0.09 -0.20 z   M 1.01 8.15 v 3.70 h 1.07 v -3.70 z" stroke="none"></path><path d=" M 4.39 18.81 c 0.00 0.04 -0.03 0.06 -0.06 0.06 c -0.02 0.00 -0.04 -0.01 -0.06 -0.02 c -1.78 -0.94 -3.25 -2.61 -3.25 -6.58 v -0.42 h 1.07 v 0.42 c 0.00 2.26 0.45 4.92 2.32 6.34 c 0.09 0.07 0.09 0.13 0.09 0.20 z" stroke="none"></path></svg></opensymbolblock><block class="Normal">𝜎</block><compositeblock dir="ltr" class="power-index-symbol-container power-index-symbol-container has-power inline"><editarea-block class="power-value" style="line-height: 1.2; margin-top: 0em; margin-bottom: -1.00576em;">2</editarea-block><middle-base><inline></inline></middle-base><editarea-block class="index-value" style="line-height: 1.2; margin-top: -0.60899em; margin-bottom: 0em;">B</editarea-block></compositeblock><block class="Binary">+</block><block class="Normal">𝜖</block><closesymbolblock class="" type="parenthesis" style="height: 1.68067em;"><hidden-span style="margin-top: 0.0840336em; align-self: flex-start;">)</hidden-span><svg style="width: 0.5em;"><path d=" M 1.22 1.19 c 0.00 -0.04 0.03 -0.06 0.06 -0.06 c 0.02 0.00 0.04 0.01 0.06 0.02 c 1.78 0.94 3.25 2.61 3.25 6.58 v 0.42 h -1.07 v -0.42 c 0.00 -2.26 -0.45 -4.92 -2.32 -6.34 c -0.09 -0.07 -0.09 -0.13 -0.09 -0.20 z  M 4.61 8.15 v 3.70 h -1.07 v -3.70 z" stroke="none"></path><path d=" M 1.22 18.81 c 0.00 0.04 0.03 0.06 0.06 0.06 c 0.02 0.00 0.04 -0.01 0.06 -0.02 c 1.78 -0.94 3.25 -2.61 3.25 -6.58 v -0.42 h -1.07 v 0.42 c 0.00 2.26 -0.45 4.92 -2.32 6.34 c -0.09 0.07 -0.09 0.13 -0.09 0.20 z" stroke="none"></path></svg></closesymbolblock><compositeblock dir="ltr" class="power-index-symbol-container power-index-symbol-container has-power inline" style="margin-left: -0.1em;"><editarea-line class=" power-value" style="line-height: 1.2; margin-bottom: -0.567707em;"><baselineblock></baselineblock><block>-</block><compositeblock dir="ltr" class="fraction-symbol smaller inline"><editarea-line class=" frac-edit-area enumerator" style="line-height: 1.2; margin-bottom: -0.480192em;"><baselineblock></baselineblock><block class="Normal">3</block></editarea-line><div class="frac-line"><inline style="border-bottom: 1px solid;"></inline></div><editarea-line class=" frac-edit-area denominator" style="margin-bottom: -0.120048em; line-height: 1.2; margin-top: -0.360144em;"><baselineblock></baselineblock><block class="Normal">2</block></editarea-line></compositeblock></editarea-line><middle-base><inline></inline></middle-base></compositeblock><closesymbolblock class="" type="parenthesis" style="height: 3.10924em;"><hidden-span style="margin-top: 1.34454em; align-self: flex-start;">)</hidden-span><svg style="width: 0.5em;"><path d=" M 1.22 1.19 c 0.00 -0.04 0.03 -0.06 0.06 -0.06 c 0.02 0.00 0.04 0.01 0.06 0.02 c 1.78 0.94 3.25 2.61 3.25 6.58 v 0.42 h -1.07 v -0.42 c 0.00 -2.26 -0.45 -4.92 -2.32 -6.34 c -0.09 -0.07 -0.09 -0.13 -0.09 -0.20 z  M 4.61 8.15 v 20.70 h -1.07 v -20.70 z" stroke="none"></path><path d=" M 1.22 35.81 c 0.00 0.04 0.03 0.06 0.06 0.06 c 0.02 0.00 0.04 -0.01 0.06 -0.02 c 1.78 -0.94 3.25 -2.61 3.25 -6.58 v -0.42 h -1.07 v 0.42 c 0.00 2.26 -0.45 4.92 -2.32 6.34 c -0.09 0.07 -0.09 0.13 -0.09 0.20 z" stroke="none"></path></svg></closesymbolblock></line></editarea></dg-editor-container></position-container></diagram-editors></zoom-region><svg style="position: absolute; width: 100%; height: 100%; overflow: visible; left: 0px; top: 0px; pointer-events: none;"></svg></clip-region></math-diagram></compositeblock></blocks></line><line class="root text-mode full-line-block-inside" style="line-height: 1.4;"><prefix></prefix><blocks><baselineblock class="inline"></baselineblock><compositeblock dir="ltr" class="math-container-symbol role-mathmode-area display" style="font-size: 17px;" data-mathml="<math display=&quot;block&quot; xmlns=&quot;http://www.w3.org/1998/Math/MathML&quot;><mtable columnwidth=&quot;100%&quot; width=&quot;100%&quot; columnalign=&quot;center&quot;><mtr><mtd><mrow><mi>D</mi><mi>i</mi><mi>f</mi><mi>f</mi><mspace is=&quot;true&quot; width=&quot;0.22em&quot;></mspace><mo fence=&quot;true&quot; stretchy=&quot;false&quot;>(</mo><mn>2</mn><mo fence=&quot;true&quot; stretchy=&quot;false&quot;>)</mo><mspace is=&quot;true&quot; width=&quot;0.22em&quot;></mspace><mi>w</mi><mi>r</mi><mi>t</mi><mspace is=&quot;true&quot; width=&quot;0.22em&quot;></mspace><msub><mi>𝜇</mi><mi>B</mi></msub></mrow></mtd></mtr><mtr><mtd><mrow><mfrac><mrow><mi>∂</mi><msubsup><mi>𝜎</mi><mi>B</mi><mn>2</mn></msubsup></mrow><mrow><mi>∂</mi><msub><mi>𝜇</mi><mi>B</mi></msub></mrow></mfrac><mo form=&quot;infix&quot;>=</mo><mspace is=&quot;true&quot; width=&quot;0.22em&quot;></mspace><mfrac><mrow><mi>∂</mi><mo fence=&quot;true&quot;>(</mo><mfrac><mn>1</mn><mi>m</mi></mfrac><munderover><mo largeop=&quot;true&quot; movablelimit=&quot;true&quot;>∑</mo><mrow><mi>i</mi><mspace is=&quot;true&quot; width=&quot;0.22em&quot;></mspace><mo form=&quot;infix&quot;>=</mo><mspace is=&quot;true&quot; width=&quot;0.22em&quot;></mspace><mn>1</mn></mrow><mi>m</mi></munderover><mo fence=&quot;true&quot; stretchy=&quot;false&quot;>(</mo><msub><mi>x</mi><mi>i</mi></msub><mo form=&quot;infix&quot;>-</mo><msub><mi>𝜇</mi><mi>B</mi></msub><msup><mo fence=&quot;true&quot; stretchy=&quot;false&quot;>)</mo><mn>2</mn></msup><mo fence=&quot;true&quot;>)</mo></mrow><mrow><mi>∂</mi><msub><mi>𝜇</mi><mi>B</mi></msub></mrow></mfrac></mrow></mtd></mtr><mtr><mtd><mrow><mo form=&quot;infix&quot;>⟹</mo><mfrac><mrow><mi>∂</mi><msubsup><mi>𝜎</mi><mi>B</mi><mn>2</mn></msubsup></mrow><mrow><mi>∂</mi><msub><mi>𝜇</mi><mi>B</mi></msub></mrow></mfrac><mo form=&quot;infix&quot;>=</mo><mfrac><mn>1</mn><mi>m</mi></mfrac><munderover><mo largeop=&quot;true&quot; movablelimit=&quot;true&quot;>∑</mo><mrow><mi>i</mi><mspace is=&quot;true&quot; width=&quot;0.22em&quot;></mspace><mo form=&quot;infix&quot;>=</mo><mspace is=&quot;true&quot; width=&quot;0.22em&quot;></mspace><mn>1</mn></mrow><mi>m</mi></munderover><mo form=&quot;infix&quot;>-</mo><mn>2</mn><mo fence=&quot;true&quot; stretchy=&quot;false&quot;>(</mo><msub><mi>x</mi><mi>i</mi></msub><mo form=&quot;infix&quot;>-</mo><msub><mi>𝜇</mi><mi>B</mi></msub><mo fence=&quot;true&quot; stretchy=&quot;false&quot;>)</mo></mrow></mtd></mtr><mtr><mtd><mrow><mi>D</mi><mi>i</mi><mi>f</mi><mi>f</mi><mspace is=&quot;true&quot; width=&quot;0.22em&quot;></mspace><mo fence=&quot;true&quot; stretchy=&quot;false&quot;>(</mo><mn>3</mn><mo fence=&quot;true&quot; stretchy=&quot;false&quot;>)</mo><mspace is=&quot;true&quot; width=&quot;0.22em&quot;></mspace><mi>w</mi><mi>r</mi><mi>t</mi><mspace is=&quot;true&quot; width=&quot;0.22em&quot;></mspace><msub><mi>𝜇</mi><mi>B</mi></msub></mrow></mtd></mtr><mtr><mtd><mrow><mfrac><mrow><mi>∂</mi><mover accent=&quot;true&quot;><msub><mi>x</mi><mi>i</mi></msub><mo>^</mo></mover></mrow><mrow><mi>∂</mi><msub><mi>𝜇</mi><mi>B</mi></msub></mrow></mfrac><mo form=&quot;infix&quot;>=</mo><mfrac><mrow><mi>∂</mi><mo fence=&quot;true&quot;>(</mo><mfrac><mrow><msub><mi>x</mi><mi>i</mi></msub><mo form=&quot;infix&quot;>-</mo><msub><mi>𝜇</mi><mi>B</mi></msub></mrow><msup><msqrt><mrow><msubsup><mi>𝜎</mi><mi>B</mi><mn>2</mn></msubsup><mo form=&quot;infix&quot;>+</mo><mi>𝜖</mi></mrow></msqrt><mrow><mi></mi></mrow></msup></mfrac><mo fence=&quot;true&quot;>)</mo></mrow><mrow><mi>∂</mi><msub><mi>𝜇</mi><mi>B</mi></msub></mrow></mfrac></mrow></mtd></mtr><mtr><mtd><mrow><mo form=&quot;infix&quot;>⟹</mo><mfrac><mrow><mi>∂</mi><mover accent=&quot;true&quot;><msub><mi>x</mi><mi>i</mi></msub><mo>^</mo></mover></mrow><mrow><mi>∂</mi><msub><mi>𝜇</mi><mi>B</mi></msub></mrow></mfrac><mo form=&quot;infix&quot;>=</mo><mfrac><mrow><mo form=&quot;prefix&quot;>-</mo><mn>1</mn></mrow><msup><msqrt><mrow><msubsup><mi>𝜎</mi><mi>B</mi><mn>2</mn></msubsup><mo form=&quot;infix&quot;>+</mo><mi>𝜖</mi></mrow></msqrt><mrow><mi></mi></mrow></msup></mfrac></mrow></mtd></mtr><mtr><mtd><mrow><mfrac><mrow><mi>∂</mi><mi>l</mi></mrow><mrow><mi>∂</mi><msub><mi>𝜇</mi><mi>B</mi></msub></mrow></mfrac><mo form=&quot;infix&quot;>=</mo><mo fence=&quot;true&quot;>(</mo><munderover><mo largeop=&quot;true&quot; movablelimit=&quot;true&quot;>∑</mo><mrow><mi>i</mi><mo form=&quot;infix&quot;>=</mo><mn>1</mn></mrow><mi>m</mi></munderover><mfrac><mrow><mi>∂</mi><mi>l</mi></mrow><mrow><mi>∂</mi><mover accent=&quot;true&quot;><msub><mi>x</mi><mi>i</mi></msub><mo>^</mo></mover></mrow></mfrac><mo separator=&quot;true&quot;>.</mo><mfrac><mrow><mi>∂</mi><mover accent=&quot;true&quot;><msub><mi>x</mi><mi>i</mi></msub><mo>^</mo></mover></mrow><mrow><mi>∂</mi><msub><mi>𝜇</mi><mi>B</mi></msub></mrow></mfrac><mo fence=&quot;true&quot;>)</mo><mo form=&quot;infix&quot;>+</mo><mfrac><mrow><mi>∂</mi><mi>l</mi></mrow><mrow><mi>∂</mi><msubsup><mi>𝜎</mi><mi>B</mi><mn>2</mn></msubsup></mrow></mfrac><mo separator=&quot;true&quot;>.</mo><mfrac><mrow><mi>∂</mi><msubsup><mi>𝜎</mi><mi>B</mi><mn>2</mn></msubsup></mrow><mrow><mi>∂</mi><msub><mi>𝜇</mi><mi>B</mi></msub></mrow></mfrac></mrow></mtd></mtr><mtr><mtd><mrow><mo form=&quot;infix&quot;>⟹</mo><mfrac><mrow><mi>∂</mi><mi>l</mi></mrow><mrow><mi>∂</mi><msub><mi>𝜇</mi><mi>B</mi></msub></mrow></mfrac><mo form=&quot;infix&quot;>=</mo><mo fence=&quot;true&quot;>(</mo><munderover><mo largeop=&quot;true&quot; movablelimit=&quot;true&quot;>∑</mo><mrow><mi>i</mi><mo form=&quot;infix&quot;>=</mo><mn>1</mn></mrow><mi>m</mi></munderover><mi>d</mi><msub><mi>x</mi><mi>i</mi></msub><mo separator=&quot;true&quot;>.</mo><mfrac><mrow><mo form=&quot;prefix&quot;>-</mo><mn>1</mn></mrow><msup><msqrt><mrow><msubsup><mi>𝜎</mi><mi>B</mi><mn>2</mn></msubsup><mo form=&quot;infix&quot;>+</mo><mi>𝜖</mi></mrow></msqrt><mrow><mi></mi></mrow></msup></mfrac><mo fence=&quot;true&quot;>)</mo><mo form=&quot;infix&quot;>+</mo><mi>d</mi><msubsup><mi>𝜎</mi><mi>B</mi><mn>2</mn></msubsup><mo separator=&quot;true&quot;>.</mo><mfrac><mn>1</mn><mi>m</mi></mfrac><munderover><mo largeop=&quot;true&quot; movablelimit=&quot;true&quot;>∑</mo><mrow><mi>i</mi><mspace is=&quot;true&quot; width=&quot;0.22em&quot;></mspace><mo form=&quot;infix&quot;>=</mo><mspace is=&quot;true&quot; width=&quot;0.22em&quot;></mspace><mn>1</mn></mrow><mi>m</mi></munderover><mo form=&quot;infix&quot;>-</mo><mn>2</mn><mo fence=&quot;true&quot; stretchy=&quot;false&quot;>(</mo><msub><mi>x</mi><mi>i</mi></msub><mo form=&quot;infix&quot;>-</mo><msub><mi>𝜇</mi><mi>B</mi></msub><mo fence=&quot;true&quot; stretchy=&quot;false&quot;>)</mo></mrow></mtd></mtr><mtr><mtd><mrow></mrow></mtd></mtr></mtable></math>"><editarea class="math-mode-font lazy no-area-container" style="font-family: Asana-Math, Asana;" aria-hidden="true"><line class="taggable" style="line-height: 1.2;"><baselineblock></baselineblock><block class="Normal">Diff </block><opensymbolblock class="normal" type="parenthesis"><bracket-span>(</bracket-span></opensymbolblock><block class="Normal">2</block><closesymbolblock class="normal" type="parenthesis"><bracket-span>)</bracket-span></closesymbolblock><block class="Normal"> wrt 𝜇</block><compositeblock dir="ltr" class="power-index-symbol-container power-index-symbol-container"><middle-base><inline></inline></middle-base><editarea-block class="index-value" style="line-height: 1.2; margin-top: -0.747899em;">B</editarea-block></compositeblock></line><line class="taggable" style="line-height: 1.2;"><baselineblock></baselineblock><compositeblock dir="ltr" class="fraction-symbol smaller"><editarea-line class=" frac-edit-area enumerator" style="line-height: 1.2; margin-bottom: -0.470588em;"><baselineblock></baselineblock><block class="Normal">∂𝜎</block><compositeblock dir="ltr" class="power-index-symbol-container power-index-symbol-container has-power inline"><editarea-block class="power-value" style="line-height: 1.2; margin-top: 0em; margin-bottom: -1.05378em;">2</editarea-block><middle-base><inline></inline></middle-base><editarea-block class="index-value" style="line-height: 1.2; margin-top: -0.60899em; margin-bottom: 0em;">B</editarea-block></compositeblock></editarea-line><div class="frac-line"><inline style="border-bottom: 1px solid;"></inline></div><editarea-line class=" frac-edit-area denominator" style="line-height: 1.2; margin-top: -0.411765em;"><baselineblock></baselineblock><block class="Normal">∂𝜇</block><compositeblock dir="ltr" class="power-index-symbol-container power-index-symbol-container inline"><middle-base><inline></inline></middle-base><editarea-block class="index-value" style="line-height: 1.2; margin-top: -0.747899em;">B</editarea-block></compositeblock></editarea-line></compositeblock><block class="Relation">=</block><block class="Normal"> </block><compositeblock dir="ltr" class="fraction-symbol smaller"><editarea-line class=" frac-edit-area enumerator" style="line-height: 1.2; margin-bottom: -0.470588em;"><baselineblock></baselineblock><block class="Normal">∂</block><opensymbolblock class="" type="parenthesis" style="height: 2.17647em;"><hidden-span style="margin-top: 0.411765em; align-self: flex-start;">(</hidden-span><svg style="width: 0.5em;"><path d=" M 6.27 1.70 c 0.00 -0.06 -0.04 -0.08 -0.08 -0.08 c -0.03 0.00 -0.06 0.01 -0.08 0.02 c -2.55 1.34 -4.65 3.73 -4.65 9.40 v 0.60 h 1.53 v -0.60 c 0.00 -3.23 0.64 -7.03 3.31 -9.06 c 0.12 -0.09 0.13 -0.19 0.13 -0.28 z   M 1.44 11.64 v 13.72 h 1.53 v -13.72 z" stroke="none"></path><path d=" M 6.27 35.30 c 0.00 0.06 -0.04 0.08 -0.08 0.08 c -0.03 0.00 -0.06 -0.01 -0.08 -0.02 c -2.55 -1.34 -4.65 -3.73 -4.65 -9.40 v -0.60 h 1.53 v 0.60 c 0.00 3.23 0.64 7.03 3.31 9.06 c 0.12 0.09 0.13 0.19 0.13 0.28 z" stroke="none"></path></svg></opensymbolblock><compositeblock dir="ltr" class="fraction-symbol smaller frac-inline inline"><editarea-line class=" frac-edit-area enumerator" style="line-height: 1.2; margin-bottom: -0.411765em; padding-top: 0.0588235em;"><baselineblock></baselineblock><block>1</block></editarea-line><div class="frac-line"><inline style="vertical-align: 0.35em; border-bottom: 1px solid;"></inline></div><editarea-line class=" frac-edit-area denominator" style="margin-top: -0.588235em; margin-bottom: -0.0588235em; line-height: 1.2;"><baselineblock></baselineblock><block>m</block></editarea-line></compositeblock><compositeblock dir="ltr" class="summation-like-symbol limit-type non-limit-kind  inline"><editarea class="from no-area-container" style="margin-bottom: -0.588235em; margin-left: 0.9em;"><line class="" style="margin-top: -0.252101em; margin-bottom: -0.168067em; line-height: 1.2;"><baselineblock></baselineblock><block>m</block></line></editarea><symbol class="" style="font-family: Asana-Math, Asana; font-style: normal; font-weight: normal;"><span>∑</span></symbol><editarea class="to to-summation no-area-container" style="margin-top: -0.470588em; margin-left: 0.9em;"><line class="" style="line-height: 1.2;"><baselineblock></baselineblock><block>i = 1</block></line></editarea></compositeblock><opensymbolblock class="normal" type="parenthesis"><bracket-span>(</bracket-span></opensymbolblock><block class="Normal">x</block><compositeblock dir="ltr" class="power-index-symbol-container power-index-symbol-container inline"><middle-base><inline></inline></middle-base><editarea-block class="index-value" style="line-height: 1.2; margin-top: -0.747899em;">i</editarea-block></compositeblock><block class="Binary">-</block><block class="Normal">𝜇</block><compositeblock dir="ltr" class="power-index-symbol-container power-index-symbol-container inline"><middle-base><inline></inline></middle-base><editarea-block class="index-value" style="line-height: 1.2; margin-top: -0.747899em;">B</editarea-block></compositeblock><closesymbolblock class="normal" type="parenthesis"><bracket-span>)</bracket-span></closesymbolblock><compositeblock dir="ltr" class="power-index-symbol-container power-index-symbol-container has-power inline"><editarea-block class="power-value" style="line-height: 1.2; margin-bottom: -1.06571em;">2</editarea-block><middle-base><inline></inline></middle-base></compositeblock><closesymbolblock class="" type="parenthesis" style="height: 2.17647em;"><hidden-span style="margin-top: 0.411765em; align-self: flex-start;">)</hidden-span><svg style="width: 0.5em;"><path d=" M 1.75 1.70 c 0.00 -0.06 0.04 -0.08 0.08 -0.08 c 0.03 0.00 0.06 0.01 0.08 0.02 c 2.55 1.34 4.65 3.73 4.65 9.40 v 0.60 h -1.53 v -0.60 c 0.00 -3.23 -0.64 -7.03 -3.31 -9.06 c -0.12 -0.09 -0.13 -0.19 -0.13 -0.28 z  M 6.58 11.64 v 13.72 h -1.53 v -13.72 z" stroke="none"></path><path d=" M 1.75 35.30 c 0.00 0.06 0.04 0.08 0.08 0.08 c 0.03 0.00 0.06 -0.01 0.08 -0.02 c 2.55 -1.34 4.65 -3.73 4.65 -9.40 v -0.60 h -1.53 v 0.60 c 0.00 3.23 -0.64 7.03 -3.31 9.06 c -0.12 0.09 -0.13 0.19 -0.13 0.28 z" stroke="none"></path></svg></closesymbolblock></editarea-line><div class="frac-line"><inline style="border-bottom: 1px solid;"></inline></div><editarea-line class=" frac-edit-area denominator" style="line-height: 1.2; margin-top: -0.411765em;"><baselineblock></baselineblock><block class="Normal">∂𝜇</block><compositeblock dir="ltr" class="power-index-symbol-container power-index-symbol-container inline"><middle-base><inline></inline></middle-base><editarea-block class="index-value" style="line-height: 1.2; margin-top: -0.747899em;">B</editarea-block></compositeblock></editarea-line></compositeblock></line><line class="taggable" style="line-height: 1.2;"><baselineblock></baselineblock><ref-tag data-tag-position="line" class="line-tag automatic" data-tag-id="tid0.880238767175684" style="font-family: Arial, Helvetica, sans-serif; font-size: 15px;" id="tid0.880238767175684"><label>(9)</label></ref-tag><block class="Relation">⟹</block><compositeblock dir="ltr" class="fraction-symbol smaller"><editarea-line class=" frac-edit-area enumerator" style="line-height: 1.2; margin-bottom: -0.470588em;"><baselineblock></baselineblock><block class="Normal">∂𝜎</block><compositeblock dir="ltr" class="power-index-symbol-container power-index-symbol-container has-power inline"><editarea-block class="power-value" style="line-height: 1.2; margin-top: 0em; margin-bottom: -1.05378em;">2</editarea-block><middle-base><inline></inline></middle-base><editarea-block class="index-value" style="line-height: 1.2; margin-top: -0.60899em; margin-bottom: 0em;">B</editarea-block></compositeblock></editarea-line><div class="frac-line"><inline style="border-bottom: 1px solid;"></inline></div><editarea-line class=" frac-edit-area denominator" style="line-height: 1.2; margin-top: -0.411765em;"><baselineblock></baselineblock><block class="Normal">∂𝜇</block><compositeblock dir="ltr" class="power-index-symbol-container power-index-symbol-container inline"><middle-base><inline></inline></middle-base><editarea-block class="index-value" style="line-height: 1.2; margin-top: -0.747899em;">B</editarea-block></compositeblock></editarea-line></compositeblock><block class="Relation">=</block><compositeblock dir="ltr" class="fraction-symbol smaller"><editarea-line class=" frac-edit-area enumerator" style="line-height: 1.2; margin-bottom: -0.470588em;"><baselineblock></baselineblock><block class="Normal">1</block></editarea-line><div class="frac-line"><inline style="border-bottom: 1px solid;"></inline></div><editarea-line class=" frac-edit-area denominator" style="margin-bottom: -0.176471em; line-height: 1.2; margin-top: -0.411765em;"><baselineblock></baselineblock><block class="Normal">m</block></editarea-line></compositeblock><compositeblock dir="ltr" class="summation-like-symbol limit-type limit-kind "><editarea class="from no-area-container" style="margin-bottom: -0.470588em;"><line class="" style="margin-bottom: -0.168067em; line-height: 1.2;"><baselineblock></baselineblock><block>m</block></line></editarea><symbol class="" style="font-family: Asana-Math, Asana; font-style: normal; font-weight: normal;"><span>∑</span></symbol><editarea class="to to-summation no-area-container" style="margin-top: 0.117647em;"><line class="" style="line-height: 1.2;"><baselineblock></baselineblock><block>i = 1</block></line></editarea></compositeblock><block class="Binary">-</block><block class="Normal">2</block><opensymbolblock class="normal" type="parenthesis"><bracket-span>(</bracket-span></opensymbolblock><block class="Normal">x</block><compositeblock dir="ltr" class="power-index-symbol-container power-index-symbol-container"><middle-base><inline></inline></middle-base><editarea-block class="index-value" style="line-height: 1.2; margin-top: -0.747899em;">i</editarea-block></compositeblock><block class="Binary">-</block><block class="Normal">𝜇</block><compositeblock dir="ltr" class="power-index-symbol-container power-index-symbol-container"><middle-base><inline></inline></middle-base><editarea-block class="index-value" style="line-height: 1.2; margin-top: -0.747899em;">B</editarea-block></compositeblock><closesymbolblock class="normal" type="parenthesis"><bracket-span>)</bracket-span></closesymbolblock></line><line class="taggable" style="line-height: 1.2;"><baselineblock></baselineblock><block class="Normal">Diff </block><opensymbolblock class="normal" type="parenthesis"><bracket-span>(</bracket-span></opensymbolblock><block class="Normal">3</block><closesymbolblock class="normal" type="parenthesis"><bracket-span>)</bracket-span></closesymbolblock><block class="Normal"> wrt 𝜇</block><compositeblock dir="ltr" class="power-index-symbol-container power-index-symbol-container"><middle-base><inline></inline></middle-base><editarea-block class="index-value" style="line-height: 1.2; margin-top: -0.747899em;">B</editarea-block></compositeblock></line><line class="taggable" style="line-height: 1.2;"><baselineblock></baselineblock><compositeblock dir="ltr" class="fraction-symbol smaller"><editarea-line class=" frac-edit-area enumerator" style="line-height: 1.2; margin-bottom: -0.470588em;"><baselineblock></baselineblock><block class="Normal">∂</block><compositeblock dir="ltr" class="wide-hat-symbol ig-ex-br inline"><symbol style="display: block; width: 100%; position: relative; height: 0.529412em; margin-bottom: -0.176471em;"><svg style="position: absolute; left: 0px; top: 0px; display: block; width: 100%; height: 100%; overflow: visible;"><polyline points="0.00,8.06 6.66,3.62 13.32,8.06" stroke-width="1" fill="none" stroke-linejoin="bevel"></polyline></svg></symbol><editarea class="no-area-container" style="display: inline-flex;"><line class="" style="line-height: 1.2;"><baselineblock></baselineblock><block class="Normal">x</block><compositeblock dir="ltr" class="power-index-symbol-container power-index-symbol-container inline"><middle-base><inline></inline></middle-base><editarea-block class="index-value" style="line-height: 1.2; margin-top: -0.747899em;">i</editarea-block></compositeblock></line></editarea></compositeblock></editarea-line><div class="frac-line"><inline style="border-bottom: 1px solid;"></inline></div><editarea-line class=" frac-edit-area denominator" style="line-height: 1.2; margin-top: -0.411765em;"><baselineblock></baselineblock><block class="Normal">∂𝜇</block><compositeblock dir="ltr" class="power-index-symbol-container power-index-symbol-container inline"><middle-base><inline></inline></middle-base><editarea-block class="index-value" style="line-height: 1.2; margin-top: -0.747899em;">B</editarea-block></compositeblock></editarea-line></compositeblock><block class="Relation">=</block><compositeblock dir="ltr" class="fraction-symbol smaller"><editarea-line class=" frac-edit-area enumerator" style="line-height: 1.2; margin-bottom: -0.470588em;"><baselineblock></baselineblock><block class="Normal">∂</block><opensymbolblock class="" type="parenthesis" style="height: 2.76471em;"><hidden-span style="margin-top: 0.529412em; align-self: flex-start;">(</hidden-span><svg style="width: 0.5em;"><path d=" M 6.27 1.70 c 0.00 -0.06 -0.04 -0.08 -0.08 -0.08 c -0.03 0.00 -0.06 0.01 -0.08 0.02 c -2.55 1.34 -4.65 3.73 -4.65 9.40 v 0.60 h 1.53 v -0.60 c 0.00 -3.23 0.64 -7.03 3.31 -9.06 c 0.12 -0.09 0.13 -0.19 0.13 -0.28 z   M 1.44 11.64 v 23.72 h 1.53 v -23.72 z" stroke="none"></path><path d=" M 6.27 45.30 c 0.00 0.06 -0.04 0.08 -0.08 0.08 c -0.03 0.00 -0.06 -0.01 -0.08 -0.02 c -2.55 -1.34 -4.65 -3.73 -4.65 -9.40 v -0.60 h 1.53 v 0.60 c 0.00 3.23 0.64 7.03 3.31 9.06 c 0.12 0.09 0.13 0.19 0.13 0.28 z" stroke="none"></path></svg></opensymbolblock><compositeblock dir="ltr" class="fraction-symbol smaller frac-inline inline"><editarea-line class=" frac-edit-area enumerator" style="line-height: 1.2; margin-bottom: -0.411765em; padding-top: 0.0588235em;"><baselineblock></baselineblock><block>x</block><compositeblock dir="ltr" class="power-index-symbol-container power-index-symbol-container inline"><middle-base><inline></inline></middle-base><editarea-block class="index-value" style="line-height: 1.2; margin-top: -0.747899em;">i</editarea-block></compositeblock><block>-𝜇</block><compositeblock dir="ltr" class="power-index-symbol-container power-index-symbol-container inline"><middle-base><inline></inline></middle-base><editarea-block class="index-value" style="line-height: 1.2; margin-top: -0.747899em;">B</editarea-block></compositeblock></editarea-line><div class="frac-line"><inline style="vertical-align: 0.35em; border-bottom: 1px solid;"></inline></div><editarea-line class=" frac-edit-area denominator" style="line-height: 1.2; margin-top: -0.588235em; margin-bottom: -0.0588235em;"><baselineblock></baselineblock><compositeblock dir="ltr" class="sqrt-symbol inline" style="padding-top: 0.235294em;"><sqrt-edit><editarea-line class=" edit-area" style="line-height: 1.2; margin-top: 0.0784314em;"><baselineblock></baselineblock><block class="Normal">𝜎</block><compositeblock dir="ltr" class="power-index-symbol-container power-index-symbol-container has-power inline"><editarea-block class="power-value" style="line-height: 1.2; margin-top: 0em; margin-bottom: -0.997759em;">2</editarea-block><middle-base><inline></inline></middle-base><editarea-block class="index-value" style="line-height: 1.2; margin-top: -0.60899em; margin-bottom: -0.112045em;">B</editarea-block></compositeblock><block class="Binary">+</block><block class="Normal">𝜖</block></editarea-line><sqrt-symbol-line><svg style="stroke: none;"><polygon points="0.2635658914728682,10.766866568631906 3.591085271317829,8.987796801190047 7.139106581004326,16.51234440965561 12.272286821705425,0 45.93333435058594,0 45.93333435058594,0.7906976744186061 12.853790881587008,0.7906976744186061 6.8856589147286815,19.99167277018229 2.322674418604651,10.437409204290821 0.4777131782945736,11.129269669407101"></polygon></svg></sqrt-symbol-line></sqrt-edit></compositeblock><compositeblock dir="ltr" class="power-index-symbol-container power-index-symbol-container has-power inline"><editarea-block class="power-value" style="line-height: 1.2; margin-bottom: -0.424168em; display: inline-block; height: 1.2em; width: 0.5em; vertical-align: -0.17em;"></editarea-block><middle-base><inline></inline></middle-base></compositeblock></editarea-line></compositeblock><closesymbolblock class="" type="parenthesis" style="height: 2.76471em;"><hidden-span style="margin-top: 0.529412em; align-self: flex-start;">)</hidden-span><svg style="width: 0.5em;"><path d=" M 1.75 1.70 c 0.00 -0.06 0.04 -0.08 0.08 -0.08 c 0.03 0.00 0.06 0.01 0.08 0.02 c 2.55 1.34 4.65 3.73 4.65 9.40 v 0.60 h -1.53 v -0.60 c 0.00 -3.23 -0.64 -7.03 -3.31 -9.06 c -0.12 -0.09 -0.13 -0.19 -0.13 -0.28 z  M 6.58 11.64 v 23.72 h -1.53 v -23.72 z" stroke="none"></path><path d=" M 1.75 45.30 c 0.00 0.06 0.04 0.08 0.08 0.08 c 0.03 0.00 0.06 -0.01 0.08 -0.02 c 2.55 -1.34 4.65 -3.73 4.65 -9.40 v -0.60 h -1.53 v 0.60 c 0.00 3.23 -0.64 7.03 -3.31 9.06 c -0.12 0.09 -0.13 0.19 -0.13 0.28 z" stroke="none"></path></svg></closesymbolblock></editarea-line><div class="frac-line"><inline style="border-bottom: 1px solid;"></inline></div><editarea-line class=" frac-edit-area denominator" style="line-height: 1.2; margin-top: -0.411765em;"><baselineblock></baselineblock><block class="Normal">∂𝜇</block><compositeblock dir="ltr" class="power-index-symbol-container power-index-symbol-container inline"><middle-base><inline></inline></middle-base><editarea-block class="index-value" style="line-height: 1.2; margin-top: -0.747899em;">B</editarea-block></compositeblock></editarea-line></compositeblock></line><line class="taggable" style="line-height: 1.2;"><baselineblock></baselineblock><ref-tag data-tag-position="line" class="line-tag automatic" data-tag-id="tid0.4055512975814898" style="font-family: Arial, Helvetica, sans-serif; font-size: 15px;" id="tid0.4055512975814898"><label>(10)</label></ref-tag><block class="Relation">⟹</block><compositeblock dir="ltr" class="fraction-symbol smaller"><editarea-line class=" frac-edit-area enumerator" style="line-height: 1.2; margin-bottom: -0.470588em;"><baselineblock></baselineblock><block class="Normal">∂</block><compositeblock dir="ltr" class="wide-hat-symbol ig-ex-br inline"><symbol style="display: block; width: 100%; position: relative; height: 0.529412em; margin-bottom: -0.176471em;"><svg style="position: absolute; left: 0px; top: 0px; display: block; width: 100%; height: 100%; overflow: visible;"><polyline points="0.00,8.06 6.66,3.62 13.32,8.06" stroke-width="1" fill="none" stroke-linejoin="bevel"></polyline></svg></symbol><editarea class="no-area-container" style="display: inline-flex;"><line class="" style="line-height: 1.2;"><baselineblock></baselineblock><block class="Normal">x</block><compositeblock dir="ltr" class="power-index-symbol-container power-index-symbol-container inline"><middle-base><inline></inline></middle-base><editarea-block class="index-value" style="line-height: 1.2; margin-top: -0.747899em;">i</editarea-block></compositeblock></line></editarea></compositeblock></editarea-line><div class="frac-line"><inline style="border-bottom: 1px solid;"></inline></div><editarea-line class=" frac-edit-area denominator" style="line-height: 1.2; margin-top: -0.411765em;"><baselineblock></baselineblock><block class="Normal">∂𝜇</block><compositeblock dir="ltr" class="power-index-symbol-container power-index-symbol-container inline"><middle-base><inline></inline></middle-base><editarea-block class="index-value" style="line-height: 1.2; margin-top: -0.747899em;">B</editarea-block></compositeblock></editarea-line></compositeblock><block class="Relation">=</block><compositeblock dir="ltr" class="fraction-symbol smaller"><editarea-line class=" frac-edit-area enumerator" style="line-height: 1.2; margin-bottom: -0.470588em;"><baselineblock></baselineblock><block class="Unary">-</block><block class="Normal">1</block></editarea-line><div class="frac-line"><inline style="border-bottom: 1px solid;"></inline></div><editarea-line class=" frac-edit-area denominator" style="line-height: 1.2; margin-top: -0.411765em;"><baselineblock></baselineblock><compositeblock dir="ltr" class="sqrt-symbol inline" style="padding-top: 0.235294em;"><sqrt-edit><editarea-line class=" edit-area" style="line-height: 1.2; margin-top: 0.117647em;"><baselineblock></baselineblock><block class="Normal">𝜎</block><compositeblock dir="ltr" class="power-index-symbol-container power-index-symbol-container has-power inline"><editarea-block class="power-value" style="line-height: 1.2; margin-top: 0em; margin-bottom: -1.05378em;">2</editarea-block><middle-base><inline></inline></middle-base><editarea-block class="index-value" style="line-height: 1.2; margin-top: -0.60899em; margin-bottom: -0.168067em;">B</editarea-block></compositeblock><block class="Binary">+</block><block class="Normal">𝜖</block></editarea-line><sqrt-symbol-line><svg style="stroke: none;"><polygon points="0.35142118863049093,13.672487740923266 4.7881136950904395,11.300394717667453 9.536956651792927,21.371612389128284 16.363049095607234,0 61.23333740234375,0 61.23333740234375,1.054263565891475 17.10111113903569,1.054263565891475 9.180878552971576,25.972229342990452 3.0968992248062013,13.233211255135153 0.6369509043927648,14.155691875290191"></polygon></svg></sqrt-symbol-line></sqrt-edit></compositeblock><compositeblock dir="ltr" class="power-index-symbol-container power-index-symbol-container has-power inline"><editarea-block class="power-value" style="line-height: 1.2; margin-bottom: -0.396643em; display: inline-block; height: 1.2em; width: 0.5em; vertical-align: -0.17em;"></editarea-block><middle-base><inline></inline></middle-base></compositeblock></editarea-line></compositeblock></line><line class="taggable" style="line-height: 1.2;"><baselineblock></baselineblock><compositeblock dir="ltr" class="fraction-symbol smaller"><editarea-line class=" frac-edit-area enumerator" style="line-height: 1.2; margin-bottom: -0.470588em;"><baselineblock></baselineblock><block class="Normal">∂l</block></editarea-line><div class="frac-line"><inline style="border-bottom: 1px solid;"></inline></div><editarea-line class=" frac-edit-area denominator" style="line-height: 1.2; margin-top: -0.411765em;"><baselineblock></baselineblock><block class="Normal">∂𝜇</block><compositeblock dir="ltr" class="power-index-symbol-container power-index-symbol-container inline"><middle-base><inline></inline></middle-base><editarea-block class="index-value" style="line-height: 1.2; margin-top: -0.747899em;">B</editarea-block></compositeblock></editarea-line></compositeblock><block class="Relation">=</block><opensymbolblock class="" type="parenthesis" style="height: 3.88235em;"><hidden-span style="margin-top: 1.23529em; align-self: flex-start;">(</hidden-span><svg style="width: 0.5em;"><path d=" M 6.27 1.70 c 0.00 -0.06 -0.04 -0.08 -0.08 -0.08 c -0.03 0.00 -0.06 0.01 -0.08 0.02 c -2.55 1.34 -4.65 3.73 -4.65 9.40 v 0.60 h 1.53 v -0.60 c 0.00 -3.23 0.64 -7.03 3.31 -9.06 c 0.12 -0.09 0.13 -0.19 0.13 -0.28 z   M 1.44 11.64 v 42.72 h 1.53 v -42.72 z" stroke="none"></path><path d=" M 6.27 64.30 c 0.00 0.06 -0.04 0.08 -0.08 0.08 c -0.03 0.00 -0.06 -0.01 -0.08 -0.02 c -2.55 -1.34 -4.65 -3.73 -4.65 -9.40 v -0.60 h 1.53 v 0.60 c 0.00 3.23 0.64 7.03 3.31 9.06 c 0.12 0.09 0.13 0.19 0.13 0.28 z" stroke="none"></path></svg></opensymbolblock><compositeblock dir="ltr" class="summation-like-symbol limit-type limit-kind "><editarea class="from no-area-container" style="margin-bottom: -0.470588em;"><line class="" style="margin-bottom: -0.168067em; line-height: 1.2;"><baselineblock></baselineblock><block>m</block></line></editarea><symbol class="" style="font-family: Asana-Math, Asana; font-style: normal; font-weight: normal;"><span>∑</span></symbol><editarea class="to to-summation no-area-container" style="margin-top: 0.117647em;"><line class="" style="line-height: 1.2;"><baselineblock></baselineblock><block>i=1</block></line></editarea></compositeblock><compositeblock dir="ltr" class="fraction-symbol smaller"><editarea-line class=" frac-edit-area enumerator" style="line-height: 1.2; margin-bottom: -0.470588em;"><baselineblock></baselineblock><block class="Normal">∂l</block></editarea-line><div class="frac-line"><inline style="border-bottom: 1px solid;"></inline></div><editarea-line class=" frac-edit-area denominator" style="line-height: 1.2; margin-top: -0.411765em;"><baselineblock></baselineblock><block class="Normal">∂</block><compositeblock dir="ltr" class="wide-hat-symbol ig-ex-br inline"><symbol style="display: block; width: 100%; position: relative; height: 0.529412em; margin-bottom: -0.176471em;"><svg style="position: absolute; left: 0px; top: 0px; display: block; width: 100%; height: 100%; overflow: visible;"><polyline points="0.00,8.06 6.66,3.62 13.32,8.06" stroke-width="1" fill="none" stroke-linejoin="bevel"></polyline></svg></symbol><editarea class="no-area-container" style="display: inline-flex;"><line class="" style="line-height: 1.2;"><baselineblock></baselineblock><block class="Normal">x</block><compositeblock dir="ltr" class="power-index-symbol-container power-index-symbol-container inline"><middle-base><inline></inline></middle-base><editarea-block class="index-value" style="line-height: 1.2; margin-top: -0.747899em;">i</editarea-block></compositeblock></line></editarea></compositeblock></editarea-line></compositeblock><block class="Punctuation">.</block><compositeblock dir="ltr" class="fraction-symbol smaller"><editarea-line class=" frac-edit-area enumerator" style="line-height: 1.2; margin-bottom: -0.470588em;"><baselineblock></baselineblock><block class="Normal">∂</block><compositeblock dir="ltr" class="wide-hat-symbol ig-ex-br inline"><symbol style="display: block; width: 100%; position: relative; height: 0.529412em; margin-bottom: -0.176471em;"><svg style="position: absolute; left: 0px; top: 0px; display: block; width: 100%; height: 100%; overflow: visible;"><polyline points="0.00,8.06 6.66,3.62 13.32,8.06" stroke-width="1" fill="none" stroke-linejoin="bevel"></polyline></svg></symbol><editarea class="no-area-container" style="display: inline-flex;"><line class="" style="line-height: 1.2;"><baselineblock></baselineblock><block class="Normal">x</block><compositeblock dir="ltr" class="power-index-symbol-container power-index-symbol-container inline"><middle-base><inline></inline></middle-base><editarea-block class="index-value" style="line-height: 1.2; margin-top: -0.747899em;">i</editarea-block></compositeblock></line></editarea></compositeblock></editarea-line><div class="frac-line"><inline style="border-bottom: 1px solid;"></inline></div><editarea-line class=" frac-edit-area denominator" style="line-height: 1.2; margin-top: -0.411765em;"><baselineblock></baselineblock><block class="Normal">∂𝜇</block><compositeblock dir="ltr" class="power-index-symbol-container power-index-symbol-container inline"><middle-base><inline></inline></middle-base><editarea-block class="index-value" style="line-height: 1.2; margin-top: -0.747899em;">B</editarea-block></compositeblock></editarea-line></compositeblock><closesymbolblock class="" type="parenthesis" style="height: 3.88235em;"><hidden-span style="margin-top: 1.23529em; align-self: flex-start;">)</hidden-span><svg style="width: 0.5em;"><path d=" M 1.75 1.70 c 0.00 -0.06 0.04 -0.08 0.08 -0.08 c 0.03 0.00 0.06 0.01 0.08 0.02 c 2.55 1.34 4.65 3.73 4.65 9.40 v 0.60 h -1.53 v -0.60 c 0.00 -3.23 -0.64 -7.03 -3.31 -9.06 c -0.12 -0.09 -0.13 -0.19 -0.13 -0.28 z  M 6.58 11.64 v 42.72 h -1.53 v -42.72 z" stroke="none"></path><path d=" M 1.75 64.30 c 0.00 0.06 0.04 0.08 0.08 0.08 c 0.03 0.00 0.06 -0.01 0.08 -0.02 c 2.55 -1.34 4.65 -3.73 4.65 -9.40 v -0.60 h -1.53 v 0.60 c 0.00 3.23 -0.64 7.03 -3.31 9.06 c -0.12 0.09 -0.13 0.19 -0.13 0.28 z" stroke="none"></path></svg></closesymbolblock><block class="Binary">+</block><compositeblock dir="ltr" class="fraction-symbol smaller"><editarea-line class=" frac-edit-area enumerator" style="line-height: 1.2; margin-bottom: -0.470588em;"><baselineblock></baselineblock><block class="Normal">∂l</block></editarea-line><div class="frac-line"><inline style="border-bottom: 1px solid;"></inline></div><editarea-line class=" frac-edit-area denominator" style="line-height: 1.2; margin-top: -0.411765em;"><baselineblock></baselineblock><block class="Normal">∂𝜎</block><compositeblock dir="ltr" class="power-index-symbol-container power-index-symbol-container has-power inline"><editarea-block class="power-value" style="line-height: 1.2; margin-top: 0em; margin-bottom: -1.05378em;">2</editarea-block><middle-base><inline></inline></middle-base><editarea-block class="index-value" style="line-height: 1.2; margin-top: -0.60899em; margin-bottom: -0.168067em;">B</editarea-block></compositeblock></editarea-line></compositeblock><block class="Punctuation">.</block><compositeblock dir="ltr" class="fraction-symbol smaller"><editarea-line class=" frac-edit-area enumerator" style="line-height: 1.2; margin-bottom: -0.470588em;"><baselineblock></baselineblock><block class="Normal">∂𝜎</block><compositeblock dir="ltr" class="power-index-symbol-container power-index-symbol-container has-power inline"><editarea-block class="power-value" style="line-height: 1.2; margin-top: 0em; margin-bottom: -1.05378em;">2</editarea-block><middle-base><inline></inline></middle-base><editarea-block class="index-value" style="line-height: 1.2; margin-top: -0.60899em; margin-bottom: 0em;">B</editarea-block></compositeblock></editarea-line><div class="frac-line"><inline style="border-bottom: 1px solid;"></inline></div><editarea-line class=" frac-edit-area denominator" style="line-height: 1.2; margin-top: -0.411765em;"><baselineblock></baselineblock><block class="Normal">∂𝜇</block><compositeblock dir="ltr" class="power-index-symbol-container power-index-symbol-container inline"><middle-base><inline></inline></middle-base><editarea-block class="index-value" style="line-height: 1.2; margin-top: -0.747899em;">B</editarea-block></compositeblock></editarea-line></compositeblock></line><line class="taggable" style="line-height: 1.2;"><baselineblock></baselineblock><ref-tag data-tag-position="line" class="line-tag" data-tag-id="tid0.6970372353994491" style="font-family: Arial, Helvetica, sans-serif; font-size: 15px;" id="tid0.6970372353994491"><label>(From 9 &amp; 10)</label></ref-tag><block class="Relation">⟹</block><compositeblock dir="ltr" class="fraction-symbol smaller"><editarea-line class=" frac-edit-area enumerator" style="line-height: 1.2; margin-bottom: -0.470588em;"><baselineblock></baselineblock><block class="Normal">∂l</block></editarea-line><div class="frac-line"><inline style="border-bottom: 1px solid;"></inline></div><editarea-line class=" frac-edit-area denominator" style="line-height: 1.2; margin-top: -0.411765em;"><baselineblock></baselineblock><block class="Normal">∂𝜇</block><compositeblock dir="ltr" class="power-index-symbol-container power-index-symbol-container inline"><middle-base><inline></inline></middle-base><editarea-block class="index-value" style="line-height: 1.2; margin-top: -0.747899em;">B</editarea-block></compositeblock></editarea-line></compositeblock><block class="Relation">=</block><opensymbolblock class="" type="parenthesis" style="height: 3.94118em;"><hidden-span style="margin-top: 1.11765em; align-self: flex-start;">(</hidden-span><svg style="width: 0.5em;"><path d=" M 6.27 1.70 c 0.00 -0.06 -0.04 -0.08 -0.08 -0.08 c -0.03 0.00 -0.06 0.01 -0.08 0.02 c -2.55 1.34 -4.65 3.73 -4.65 9.40 v 0.60 h 1.53 v -0.60 c 0.00 -3.23 0.64 -7.03 3.31 -9.06 c 0.12 -0.09 0.13 -0.19 0.13 -0.28 z   M 1.44 11.64 v 43.72 h 1.53 v -43.72 z" stroke="none"></path><path d=" M 6.27 65.30 c 0.00 0.06 -0.04 0.08 -0.08 0.08 c -0.03 0.00 -0.06 -0.01 -0.08 -0.02 c -2.55 -1.34 -4.65 -3.73 -4.65 -9.40 v -0.60 h 1.53 v 0.60 c 0.00 3.23 0.64 7.03 3.31 9.06 c 0.12 0.09 0.13 0.19 0.13 0.28 z" stroke="none"></path></svg></opensymbolblock><compositeblock dir="ltr" class="summation-like-symbol limit-type limit-kind "><editarea class="from no-area-container" style="margin-bottom: -0.470588em;"><line class="" style="margin-bottom: -0.168067em; line-height: 1.2;"><baselineblock></baselineblock><block>m</block></line></editarea><symbol class="" style="font-family: Asana-Math, Asana; font-style: normal; font-weight: normal;"><span>∑</span></symbol><editarea class="to to-summation no-area-container" style="margin-top: 0.117647em;"><line class="" style="line-height: 1.2;"><baselineblock></baselineblock><block>i=1</block></line></editarea></compositeblock><block class="Normal">dx</block><compositeblock dir="ltr" class="power-index-symbol-container power-index-symbol-container"><middle-base><inline></inline></middle-base><editarea-block class="index-value" style="line-height: 1.2; margin-top: -0.747899em;">i</editarea-block></compositeblock><block class="Punctuation">.</block><compositeblock dir="ltr" class="fraction-symbol smaller"><editarea-line class=" frac-edit-area enumerator" style="line-height: 1.2; margin-bottom: -0.470588em;"><baselineblock></baselineblock><block class="Unary">-</block><block class="Normal">1</block></editarea-line><div class="frac-line"><inline style="border-bottom: 1px solid;"></inline></div><editarea-line class=" frac-edit-area denominator" style="line-height: 1.2; margin-top: -0.411765em;"><baselineblock></baselineblock><compositeblock dir="ltr" class="sqrt-symbol inline" style="padding-top: 0.235294em;"><sqrt-edit><editarea-line class=" edit-area" style="line-height: 1.2; margin-top: 0.117647em;"><baselineblock></baselineblock><block class="Normal">𝜎</block><compositeblock dir="ltr" class="power-index-symbol-container power-index-symbol-container has-power inline"><editarea-block class="power-value" style="line-height: 1.2; margin-top: 0em; margin-bottom: -1.05378em;">2</editarea-block><middle-base><inline></inline></middle-base><editarea-block class="index-value" style="line-height: 1.2; margin-top: -0.60899em; margin-bottom: -0.168067em;">B</editarea-block></compositeblock><block class="Binary">+</block><block class="Normal">𝜖</block></editarea-line><sqrt-symbol-line><svg style="stroke: none;"><polygon points="0.35142118863049093,13.672487740923266 4.7881136950904395,11.300394717667453 9.536956651792927,21.371612389128284 16.363049095607234,0 61.23332214355469,0 61.23332214355469,1.054263565891475 17.10111113903569,1.054263565891475 9.180878552971576,25.972229342990452 3.0968992248062013,13.233211255135153 0.6369509043927648,14.155691875290191"></polygon></svg></sqrt-symbol-line></sqrt-edit></compositeblock><compositeblock dir="ltr" class="power-index-symbol-container power-index-symbol-container has-power inline"><editarea-block class="power-value" style="line-height: 1.2; margin-bottom: -0.396643em; display: inline-block; height: 1.2em; width: 0.5em; vertical-align: -0.17em;"></editarea-block><middle-base><inline></inline></middle-base></compositeblock></editarea-line></compositeblock><closesymbolblock class="" type="parenthesis" style="height: 3.94118em;"><hidden-span style="margin-top: 1.11765em; align-self: flex-start;">)</hidden-span><svg style="width: 0.5em;"><path d=" M 1.75 1.70 c 0.00 -0.06 0.04 -0.08 0.08 -0.08 c 0.03 0.00 0.06 0.01 0.08 0.02 c 2.55 1.34 4.65 3.73 4.65 9.40 v 0.60 h -1.53 v -0.60 c 0.00 -3.23 -0.64 -7.03 -3.31 -9.06 c -0.12 -0.09 -0.13 -0.19 -0.13 -0.28 z  M 6.58 11.64 v 43.72 h -1.53 v -43.72 z" stroke="none"></path><path d=" M 1.75 65.30 c 0.00 0.06 0.04 0.08 0.08 0.08 c 0.03 0.00 0.06 -0.01 0.08 -0.02 c 2.55 -1.34 4.65 -3.73 4.65 -9.40 v -0.60 h -1.53 v 0.60 c 0.00 3.23 -0.64 7.03 -3.31 9.06 c -0.12 0.09 -0.13 0.19 -0.13 0.28 z" stroke="none"></path></svg></closesymbolblock><block class="Binary">+</block><block class="Normal">d𝜎</block><compositeblock dir="ltr" class="power-index-symbol-container power-index-symbol-container has-power"><editarea-block class="power-value" style="line-height: 1.2; margin-top: 0em; margin-bottom: -1.05378em;">2</editarea-block><middle-base><inline></inline></middle-base><editarea-block class="index-value" style="line-height: 1.2; margin-top: -0.60899em; margin-bottom: 0em;">B</editarea-block></compositeblock><block class="Punctuation">.</block><compositeblock dir="ltr" class="fraction-symbol smaller"><editarea-line class=" frac-edit-area enumerator" style="line-height: 1.2; margin-bottom: -0.470588em;"><baselineblock></baselineblock><block class="Normal">1</block></editarea-line><div class="frac-line"><inline style="border-bottom: 1px solid;"></inline></div><editarea-line class=" frac-edit-area denominator" style="margin-bottom: -0.176471em; line-height: 1.2; margin-top: -0.411765em;"><baselineblock></baselineblock><block class="Normal">m</block></editarea-line></compositeblock><compositeblock dir="ltr" class="summation-like-symbol limit-type limit-kind "><editarea class="from no-area-container" style="margin-bottom: -0.470588em;"><line class="" style="margin-bottom: -0.168067em; line-height: 1.2;"><baselineblock></baselineblock><block>m</block></line></editarea><symbol class="" style="font-family: Asana-Math, Asana; font-style: normal; font-weight: normal;"><span>∑</span></symbol><editarea class="to to-summation no-area-container" style="margin-top: 0.117647em;"><line class="" style="line-height: 1.2;"><baselineblock></baselineblock><block>i = 1</block></line></editarea></compositeblock><block class="Binary">-</block><block class="Normal">2</block><opensymbolblock class="normal" type="parenthesis"><bracket-span>(</bracket-span></opensymbolblock><block class="Normal">x</block><compositeblock dir="ltr" class="power-index-symbol-container power-index-symbol-container"><middle-base><inline></inline></middle-base><editarea-block class="index-value" style="line-height: 1.2; margin-top: -0.747899em;">i</editarea-block></compositeblock><block class="Binary">-</block><block class="Normal">𝜇</block><compositeblock dir="ltr" class="power-index-symbol-container power-index-symbol-container"><middle-base><inline></inline></middle-base><editarea-block class="index-value" style="line-height: 1.2; margin-top: -0.747899em;">B</editarea-block></compositeblock><closesymbolblock class="normal" type="parenthesis"><bracket-span>)</bracket-span></closesymbolblock></line><line class="taggable" style="line-height: 1.2;"><baselineblock></baselineblock><emptyblock aria-label="empty line"> </emptyblock></line></editarea><span role="presentation" style="width:100%;position:absolute;top:0;left:0;clip:rect(1px, 1px, 1px, 1px);height:1px;padding:1px 0 0 0!important;overflow:hidden;user-select:none;"><math display="block" xmlns="http://www.w3.org/1998/Math/MathML"><mtable columnwidth="100%" columnalign="center" width="100%"><mtr><mtd><mrow><mi>D</mi><mi>i</mi><mi>f</mi><mi>f</mi><mspace is="true" width="0.22em"></mspace><mo fence="true" stretchy="false">(</mo><mn>2</mn><mo fence="true" stretchy="false">)</mo><mspace is="true" width="0.22em"></mspace><mi>w</mi><mi>r</mi><mi>t</mi><mspace is="true" width="0.22em"></mspace><msub><mi>𝜇</mi><mi>B</mi></msub></mrow></mtd></mtr><mtr><mtd><mrow><mfrac><mrow><mi>∂</mi><msubsup><mi>𝜎</mi><mi>B</mi><mn>2</mn></msubsup></mrow><mrow><mi>∂</mi><msub><mi>𝜇</mi><mi>B</mi></msub></mrow></mfrac><mo form="infix">=</mo><mspace is="true" width="0.22em"></mspace><mfrac><mrow><mi>∂</mi><mo fence="true">(</mo><mfrac><mn>1</mn><mi>m</mi></mfrac><munderover><mo largeop="true" movablelimit="true">∑</mo><mrow><mi>i</mi><mspace is="true" width="0.22em"></mspace><mo form="infix">=</mo><mspace is="true" width="0.22em"></mspace><mn>1</mn></mrow><mi>m</mi></munderover><mo fence="true" stretchy="false">(</mo><msub><mi>x</mi><mi>i</mi></msub><mo form="infix">-</mo><msub><mi>𝜇</mi><mi>B</mi></msub><msup><mo fence="true" stretchy="false">)</mo><mn>2</mn></msup><mo fence="true">)</mo></mrow><mrow><mi>∂</mi><msub><mi>𝜇</mi><mi>B</mi></msub></mrow></mfrac></mrow></mtd></mtr><mtr><mtd><mrow><mo form="infix">⟹</mo><mfrac><mrow><mi>∂</mi><msubsup><mi>𝜎</mi><mi>B</mi><mn>2</mn></msubsup></mrow><mrow><mi>∂</mi><msub><mi>𝜇</mi><mi>B</mi></msub></mrow></mfrac><mo form="infix">=</mo><mfrac><mn>1</mn><mi>m</mi></mfrac><munderover><mo largeop="true" movablelimit="true">∑</mo><mrow><mi>i</mi><mspace is="true" width="0.22em"></mspace><mo form="infix">=</mo><mspace is="true" width="0.22em"></mspace><mn>1</mn></mrow><mi>m</mi></munderover><mo form="infix">-</mo><mn>2</mn><mo fence="true" stretchy="false">(</mo><msub><mi>x</mi><mi>i</mi></msub><mo form="infix">-</mo><msub><mi>𝜇</mi><mi>B</mi></msub><mo fence="true" stretchy="false">)</mo></mrow></mtd></mtr><mtr><mtd><mrow><mi>D</mi><mi>i</mi><mi>f</mi><mi>f</mi><mspace is="true" width="0.22em"></mspace><mo fence="true" stretchy="false">(</mo><mn>3</mn><mo fence="true" stretchy="false">)</mo><mspace is="true" width="0.22em"></mspace><mi>w</mi><mi>r</mi><mi>t</mi><mspace is="true" width="0.22em"></mspace><msub><mi>𝜇</mi><mi>B</mi></msub></mrow></mtd></mtr><mtr><mtd><mrow><mfrac><mrow><mi>∂</mi><mover accent="true"><msub><mi>x</mi><mi>i</mi></msub><mo>^</mo></mover></mrow><mrow><mi>∂</mi><msub><mi>𝜇</mi><mi>B</mi></msub></mrow></mfrac><mo form="infix">=</mo><mfrac><mrow><mi>∂</mi><mo fence="true">(</mo><mfrac><mrow><msub><mi>x</mi><mi>i</mi></msub><mo form="infix">-</mo><msub><mi>𝜇</mi><mi>B</mi></msub></mrow><msup><msqrt><mrow><msubsup><mi>𝜎</mi><mi>B</mi><mn>2</mn></msubsup><mo form="infix">+</mo><mi>𝜖</mi></mrow></msqrt><mrow><mi></mi></mrow></msup></mfrac><mo fence="true">)</mo></mrow><mrow><mi>∂</mi><msub><mi>𝜇</mi><mi>B</mi></msub></mrow></mfrac></mrow></mtd></mtr><mtr><mtd><mrow><mo form="infix">⟹</mo><mfrac><mrow><mi>∂</mi><mover accent="true"><msub><mi>x</mi><mi>i</mi></msub><mo>^</mo></mover></mrow><mrow><mi>∂</mi><msub><mi>𝜇</mi><mi>B</mi></msub></mrow></mfrac><mo form="infix">=</mo><mfrac><mrow><mo form="prefix">-</mo><mn>1</mn></mrow><msup><msqrt><mrow><msubsup><mi>𝜎</mi><mi>B</mi><mn>2</mn></msubsup><mo form="infix">+</mo><mi>𝜖</mi></mrow></msqrt><mrow><mi></mi></mrow></msup></mfrac></mrow></mtd></mtr><mtr><mtd><mrow><mfrac><mrow><mi>∂</mi><mi>l</mi></mrow><mrow><mi>∂</mi><msub><mi>𝜇</mi><mi>B</mi></msub></mrow></mfrac><mo form="infix">=</mo><mo fence="true">(</mo><munderover><mo largeop="true" movablelimit="true">∑</mo><mrow><mi>i</mi><mo form="infix">=</mo><mn>1</mn></mrow><mi>m</mi></munderover><mfrac><mrow><mi>∂</mi><mi>l</mi></mrow><mrow><mi>∂</mi><mover accent="true"><msub><mi>x</mi><mi>i</mi></msub><mo>^</mo></mover></mrow></mfrac><mo separator="true">.</mo><mfrac><mrow><mi>∂</mi><mover accent="true"><msub><mi>x</mi><mi>i</mi></msub><mo>^</mo></mover></mrow><mrow><mi>∂</mi><msub><mi>𝜇</mi><mi>B</mi></msub></mrow></mfrac><mo fence="true">)</mo><mo form="infix">+</mo><mfrac><mrow><mi>∂</mi><mi>l</mi></mrow><mrow><mi>∂</mi><msubsup><mi>𝜎</mi><mi>B</mi><mn>2</mn></msubsup></mrow></mfrac><mo separator="true">.</mo><mfrac><mrow><mi>∂</mi><msubsup><mi>𝜎</mi><mi>B</mi><mn>2</mn></msubsup></mrow><mrow><mi>∂</mi><msub><mi>𝜇</mi><mi>B</mi></msub></mrow></mfrac></mrow></mtd></mtr><mtr><mtd><mrow><mo form="infix">⟹</mo><mfrac><mrow><mi>∂</mi><mi>l</mi></mrow><mrow><mi>∂</mi><msub><mi>𝜇</mi><mi>B</mi></msub></mrow></mfrac><mo form="infix">=</mo><mo fence="true">(</mo><munderover><mo largeop="true" movablelimit="true">∑</mo><mrow><mi>i</mi><mo form="infix">=</mo><mn>1</mn></mrow><mi>m</mi></munderover><mi>d</mi><msub><mi>x</mi><mi>i</mi></msub><mo separator="true">.</mo><mfrac><mrow><mo form="prefix">-</mo><mn>1</mn></mrow><msup><msqrt><mrow><msubsup><mi>𝜎</mi><mi>B</mi><mn>2</mn></msubsup><mo form="infix">+</mo><mi>𝜖</mi></mrow></msqrt><mrow><mi></mi></mrow></msup></mfrac><mo fence="true">)</mo><mo form="infix">+</mo><mi>d</mi><msubsup><mi>𝜎</mi><mi>B</mi><mn>2</mn></msubsup><mo separator="true">.</mo><mfrac><mn>1</mn><mi>m</mi></mfrac><munderover><mo largeop="true" movablelimit="true">∑</mo><mrow><mi>i</mi><mspace is="true" width="0.22em"></mspace><mo form="infix">=</mo><mspace is="true" width="0.22em"></mspace><mn>1</mn></mrow><mi>m</mi></munderover><mo form="infix">-</mo><mn>2</mn><mo fence="true" stretchy="false">(</mo><msub><mi>x</mi><mi>i</mi></msub><mo form="infix">-</mo><msub><mi>𝜇</mi><mi>B</mi></msub><mo fence="true" stretchy="false">)</mo></mrow></mtd></mtr><mtr><mtd><mrow></mrow></mtd></mtr></mtable></math></span></compositeblock></blocks></line><line class="root text-mode full-line-block-inside" style="line-height: 1.4;"><prefix></prefix><blocks><baselineblock class="inline"></baselineblock><compositeblock dir="ltr" class="math-diagram inline" aria-label="Diagram" role="img"><math-diagram aria-hidden="true" data-amt="diagram" style="height: 313px; z-index: 1;"><clip-region style="width: 100%; height: 100%; display: block; overflow: hidden; position: relative;"><zoom-region><svg><g><defs><pattern id=".5763036440555551" width="10" height="10" patternUnits="userSpaceOnUse"><path d="M 10 0 L 0 0 0 10" fill="none" stroke="lightgray" stroke-width="0.5"></path></pattern></defs><rect width="100%" height="100%" fill="url(#.5763036440555551)" stroke="lightgray" stroke-width="0.5"></rect></g></svg><div class="diagram-plotly-layer" style="position: absolute; inset: 0px; pointer-events: none; fill: none; stroke: none;"><svg style="overflow:visible;position:absolute;left:0;top:0;"></svg></div><svg class="role-diagram-draw-area"><g class="shapes-region" style="stroke: black; fill: none;"><g class="composite-shape"><path class="real" d=" M18,80 L29.5,80 L29.5,170.2 L18,170.2 Z" style="stroke-width: 1px; stroke: rgb(0, 0, 0); fill: none; fill-opacity: 1;"></path></g><g class="composite-shape"><path class="real" d=" M407,88 L418.5,88 L418.5,178.2 L407,178.2 Z" style="stroke-width: 1px; stroke: rgb(0, 0, 0); fill: none; fill-opacity: 1;"></path></g><g class="arrow-line"><path class="connection real" stroke-dasharray="" d="  M378.5,72.78 L143.48,103.52" style="stroke: rgb(211, 34, 34); stroke-opacity: 1; stroke-width: 1px; fill: rgb(255, 255, 255); fill-opacity: 1;"></path><g stroke="rgb(211,34,34)" stroke-opacity="1" transform="matrix(0.991558389435874,-0.12966094377003276,0.12966094377003276,0.991558389435874,141.5,103.78334045410156)" style="stroke: rgb(211, 34, 34); stroke-width: 1px;"><path d=" M10.93,-3.29 Q4.96,-0.45 0,0 Q4.96,0.45 10.93,3.29"></path></g></g><g class="arrow-line"><path class="connection real" stroke-dasharray="" d="  M299.5,143.78 L186.11,227.59" style="stroke: rgb(211, 34, 34); stroke-opacity: 1; stroke-width: 1px; fill: rgb(255, 255, 255); fill-opacity: 1;"></path><g stroke="rgb(211,34,34)" stroke-opacity="1" transform="matrix(0.8041681988948683,-0.594401806765578,0.594401806765578,0.8041681988948683,184.5,228.78334045410156)" style="stroke: rgb(211, 34, 34); stroke-width: 1px;"><path d=" M10.93,-3.29 Q4.96,-0.45 0,0 Q4.96,0.45 10.93,3.29"></path></g></g><g class="arrow-line"><path class="connection real" stroke-dasharray="" d="  M112.5,149.78 L106.67,217.79" style="stroke: rgb(211, 34, 34); stroke-opacity: 1; stroke-width: 1px; fill: rgb(255, 255, 255); fill-opacity: 1;"></path><g stroke="rgb(211,34,34)" stroke-opacity="1" transform="matrix(0.08541692313736729,-0.9963452961909064,0.9963452961909064,0.08541692313736729,106.5,219.78334045410156)" style="stroke: rgb(211, 34, 34); stroke-width: 1px;"><path d=" M10.93,-3.29 Q4.96,-0.45 0,0 Q4.96,0.45 10.93,3.29"></path></g></g><g class="composite-shape"><path class="real" d=" M555,87 L566.5,87 L566.5,177.2 L555,177.2 Z" style="stroke-width: 1px; stroke: rgb(0, 0, 0); fill: none; fill-opacity: 1;"></path></g><g class="arrow-line"><path class="connection real" stroke-dasharray="" d="  M627.5,132.03 L583.5,132.03" style="stroke: rgb(211, 34, 34); stroke-opacity: 1; stroke-width: 1px; fill: rgb(255, 255, 255); fill-opacity: 1;"></path><g stroke="rgb(211,34,34)" stroke-opacity="1" transform="matrix(1,-2.4492935982947064e-16,2.4492935982947064e-16,1,581.5,132.0333251953125)" style="stroke: rgb(211, 34, 34); stroke-width: 1px;"><path d=" M10.93,-3.29 Q4.96,-0.45 0,0 Q4.96,0.45 10.93,3.29"></path></g></g><g class="arrow-line"><path class="connection real" stroke-dasharray="" d="  M483.5,62.03 L439.5,62.03" style="stroke: rgb(211, 34, 34); stroke-opacity: 1; stroke-width: 1px; fill: rgb(255, 255, 255); fill-opacity: 1;"></path><g stroke="rgb(211,34,34)" stroke-opacity="1" transform="matrix(1,-2.4492935982947064e-16,2.4492935982947064e-16,1,437.5,62.0333251953125)" style="stroke: rgb(211, 34, 34); stroke-width: 1px;"><path d=" M10.93,-3.29 Q4.96,-0.45 0,0 Q4.96,0.45 10.93,3.29"></path></g></g><g class="arrow-line"><path class="connection real" stroke-dasharray="" d="  M510.5,92.97 L470.34,116.18" style="stroke: rgb(211, 34, 34); stroke-opacity: 1; stroke-width: 1px; fill: rgb(255, 255, 255); fill-opacity: 1;"></path><g stroke="rgb(211,34,34)" stroke-opacity="1" transform="matrix(0.8657634856957139,-0.500453381281421,0.500453381281421,0.8657634856957139,468.6072076055523,117.18081640711523)" style="stroke: rgb(211, 34, 34); stroke-width: 1px;"><path d=" M10.93,-3.29 Q4.96,-0.45 0,0 Q4.96,0.45 10.93,3.29"></path></g></g><g class="arrow-line"><path class="connection real" stroke-dasharray="" d="  M522.5,112 L479.05,147.7" style="stroke: rgb(211, 34, 34); stroke-opacity: 1; stroke-width: 1px; fill: rgb(255, 255, 255); fill-opacity: 1;"></path><g stroke="rgb(211,34,34)" stroke-opacity="1" transform="matrix(0.772733573497351,-0.6347305132022677,0.6347305132022677,0.772733573497351,477.5,148.9666748046875)" style="stroke: rgb(211, 34, 34); stroke-width: 1px;"><path d=" M10.93,-3.29 Q4.96,-0.45 0,0 Q4.96,0.45 10.93,3.29"></path></g></g><g></g></g><g><g class="connection-group"><g class="arrow-line"><path class="connection real" stroke-dasharray="" d="  M108.62,282 L121.54,131.99" style="stroke: rgb(0, 0, 0); stroke-width: 1px; fill: none; fill-opacity: 1;"></path><g stroke="#000" transform="matrix(-0.08576470804451447,0.9963154193597724,-0.9963154193597724,-0.08576470804451447,121.70833333333331,130)" style="stroke: rgb(0, 0, 0); stroke-width: 1px;"><path d=" M10.93,-3.29 Q4.96,-0.45 0,0 Q4.96,0.45 10.93,3.29"></path></g></g></g><g class="connection-group"><g class="arrow-line"><path class="connection real" stroke-dasharray="" d="  M136,113.04 L402.02,72.88" style="stroke: rgb(0, 0, 0); stroke-width: 1px; fill: none; fill-opacity: 1;"></path><g stroke="#000" transform="matrix(-0.9888085184892867,0.14919019325351704,-0.14919019325351704,-0.9888085184892867,404,72.58490566037736)" style="stroke: rgb(0, 0, 0); stroke-width: 1px;"><path d=" M10.93,-3.29 Q4.96,-0.45 0,0 Q4.96,0.45 10.93,3.29"></path></g></g></g><g class="connection-group"><g class="arrow-line"><path class="connection real" stroke-dasharray="" d="  M121,285.15 L402.38,79.84" style="stroke: rgb(0, 0, 0); stroke-width: 1px; fill: none; fill-opacity: 1;"></path><g stroke="#000" transform="matrix(-0.8077841663491174,0.5894783631276567,-0.5894783631276567,-0.8077841663491174,404,78.66123778501628)" style="stroke: rgb(0, 0, 0); stroke-width: 1px;"><path d=" M10.93,-3.29 Q4.96,-0.45 0,0 Q4.96,0.45 10.93,3.29"></path></g></g></g><g class="connection-group"><g class="arrow-line"><path class="connection real" stroke-dasharray="" d="  M38,63.38 L108.29,106.07" style="stroke: rgb(0, 0, 0); stroke-width: 1px; fill: none; fill-opacity: 1;"></path><g stroke="#000" transform="matrix(-0.8547307325638909,-0.5190716470881399,0.5190716470881399,-0.8547307325638909,110.00000000000001,107.10471204188482)" style="stroke: rgb(0, 0, 0); stroke-width: 1px;"><path d=" M10.93,-3.29 Q4.96,-0.45 0,0 Q4.96,0.45 10.93,3.29"></path></g></g></g><g class="connection-group"><g class="arrow-line"><path class="connection real" stroke-dasharray="" d="  M31.87,70 L102.49,280.1" style="stroke: rgb(0, 0, 0); stroke-width: 1px; fill: none; fill-opacity: 1; stroke-opacity: 0.86;"></path><g stroke="rgb(0,0,0)" transform="matrix(-0.3186284562866547,-0.9478796900685147,0.9478796900685147,-0.3186284562866547,103.13025210084032,282)" style="stroke: rgb(0, 0, 0); stroke-width: 1px;" stroke-opacity="0.86"><path d=" M4.37,-1.32 Q1.98,-0.18 0,0 Q1.98,0.18 4.37,1.32"></path></g></g></g><g class="connection-group"><g class="arrow-line"><path class="connection real" stroke-dasharray="" d="  M464,126.75 L554.27,74.13" style="stroke: rgb(0, 0, 0); stroke-width: 1px; fill: none; fill-opacity: 1;"></path><g stroke="#000" transform="matrix(-0.8639234171928347,0.5036232016357619,-0.5036232016357619,-0.8639234171928347,556,73.12107623318386)" style="stroke: rgb(0, 0, 0); stroke-width: 1px;"><path d=" M10.93,-3.29 Q4.96,-0.45 0,0 Q4.96,0.45 10.93,3.29"></path></g></g></g><g class="connection-group"><g class="arrow-line"><path class="connection real" stroke-dasharray="" d="  M468,148.55 L554.46,76.97" style="stroke: rgb(0, 0, 0); stroke-width: 1px; fill: none; fill-opacity: 1;"></path><g stroke="#000" transform="matrix(-0.7702906928909108,0.637692910769471,-0.637692910769471,-0.7702906928909108,556.0000000000001,75.69302325581396)" style="stroke: rgb(0, 0, 0); stroke-width: 1px;"><path d=" M10.93,-3.29 Q4.96,-0.45 0,0 Q4.96,0.45 10.93,3.29"></path></g></g></g><g class="connection-group"><g class="arrow-line"><path class="connection real" stroke-dasharray="" d="  M425,70.72 L554,67.33" style="stroke: rgb(0, 0, 0); stroke-width: 1px; fill: none; fill-opacity: 1;"></path><g stroke="#000" transform="matrix(-0.9996527410105678,0.026351421025416055,-0.026351421025416055,-0.9996527410105678,556.0000000000001,67.27631578947368)" style="stroke: rgb(0, 0, 0); stroke-width: 1px;"><path d=" M10.93,-3.29 Q4.96,-0.45 0,0 Q4.96,0.45 10.93,3.29"></path></g></g></g><g class="connection-group"><g class="arrow-line"><path class="connection real" stroke-dasharray="" d="  M38,57.38 L402,70.55" style="stroke: rgb(0, 0, 0); stroke-width: 1px; fill: none; fill-opacity: 1;"></path><g stroke="#000" transform="matrix(-0.9993474433930183,-0.03612045658402125,0.03612045658402125,-0.9993474433930183,404,70.62015503875969)" style="stroke: rgb(0, 0, 0); stroke-width: 1px;"><path d=" M10.93,-3.29 Q4.96,-0.45 0,0 Q4.96,0.45 10.93,3.29"></path></g></g></g></g><g></g><g></g></svg><diagram-editors><position-container data-rotation="0" data-skewx="0" data-flipx="false" data-anchor="left-top" style="left: 18px; top: 45px;"><dg-editor-container data-editor-id="de5806670632058986" class="no-border-on-print math-diagram-editor" style="border: 1px solid transparent; transform: translate(0%); font-size: 17px; font-family: Asana-Math, Asana;"><editarea class="diagram-editor non-wrap no-area-container" style="font-size: 1em;"><line class="" style="line-height: 1.2;"><baselineblock></baselineblock><block class="Normal">x</block><compositeblock dir="ltr" class="power-index-symbol-container power-index-symbol-container inline"><middle-base><inline></inline></middle-base><editarea-block class="index-value" style="line-height: 1.2; margin-top: -0.747899em;">i</editarea-block></compositeblock></line></editarea></dg-editor-container></position-container><position-container data-rotation="0" data-skewx="0" data-flipx="false" data-anchor="left-top" style="left: 405px; top: 56px;"><dg-editor-container data-editor-id="de7795463091907139" class="no-border-on-print math-diagram-editor" style="border: 1px solid transparent; transform: translate(0%); font-size: 17px; font-family: Asana-Math, Asana;"><editarea class="diagram-editor non-wrap no-area-container" style="font-size: 1em;"><line class="" style="line-height: 1.2;"><baselineblock></baselineblock><compositeblock dir="ltr" class="wide-hat-symbol ig-ex-br inline"><symbol style="display: block; width: 100%; position: relative; height: 0.529412em; margin-bottom: -0.176471em;"><svg style="position: absolute; left: 0px; top: 0px; display: block; width: 100%; height: 100%; overflow: visible;"><polyline points="0.00,8.06 6.66,3.62 13.32,8.06" stroke-width="1" fill="none" stroke-linejoin="bevel"></polyline></svg></symbol><editarea class="no-area-container" style="display: inline-flex;"><line class="" style="line-height: 1.2;"><baselineblock></baselineblock><block class="Normal">x</block><compositeblock dir="ltr" class="power-index-symbol-container power-index-symbol-container inline"><middle-base><inline></inline></middle-base><editarea-block class="index-value" style="line-height: 1.2; margin-top: -0.747899em;">i</editarea-block></compositeblock></line></editarea></compositeblock></line></editarea></dg-editor-container></position-container><position-container data-rotation="0" data-skewx="0" data-flipx="false" data-anchor="left-top" style="left: 95px; top: 283px;"><dg-editor-container data-editor-id="de5725785700483961" class="no-border-on-print math-diagram-editor" style="border: 1px solid transparent; transform: translate(0%); font-size: 17px; font-family: Asana-Math, Asana;"><editarea class="diagram-editor non-wrap no-area-container" style="font-size: 1em;"><line class="" style="line-height: 1.2;"><baselineblock></baselineblock><block class="Normal">𝜇</block><compositeblock dir="ltr" class="power-index-symbol-container power-index-symbol-container inline"><middle-base><inline></inline></middle-base><editarea-block class="index-value" style="line-height: 1.2; margin-top: -0.747899em;">B</editarea-block></compositeblock></line></editarea></dg-editor-container></position-container><position-container data-rotation="0" data-skewx="0" data-flipx="false" data-anchor="left-top" style="left: 111px; top: 101px;"><dg-editor-container data-editor-id="de5755633075476888" class="no-border-on-print math-diagram-editor" style="border: 1px solid transparent; transform: translate(0%); font-size: 17px; font-family: Asana-Math, Asana;"><editarea class="diagram-editor non-wrap no-area-container" style="font-size: 1em;"><line class="" style="line-height: 1.2;"><baselineblock></baselineblock><block class="Normal">𝜎</block><compositeblock dir="ltr" class="power-index-symbol-container power-index-symbol-container has-power inline"><editarea-block class="power-value" style="line-height: 1.2; margin-top: 0em; margin-bottom: -1.05378em;">2</editarea-block><middle-base><inline></inline></middle-base><editarea-block class="index-value" style="line-height: 1.2; margin-top: -0.60899em; margin-bottom: 0em;">B</editarea-block></compositeblock></line></editarea></dg-editor-container></position-container><position-container data-rotation="352.53" data-skewx="0" data-flipx="false" data-anchor="left-top" style="left: 120.567px; top: 50.6484px; transform: rotate(352.53deg);"><dg-editor-container data-editor-id="de44036696587767643" class="no-border-on-print math-diagram-editor" style="border: 1px solid transparent; transform: translate(0%); font-size: 17px; font-family: Asana-Math, Asana;"><editarea class="diagram-editor non-wrap no-area-container" style="font-size: 0.9em;"><line class="" style="line-height: 1.2;"><baselineblock></baselineblock><compositeblock dir="ltr" class="summation-like-symbol limit-type non-limit-kind  inline"><editarea class="from no-area-container" style="margin-bottom: -0.588235em; margin-left: 0.9em;"><line class="" style="margin-bottom: -0.186741em; line-height: 1.2;"><baselineblock></baselineblock><block>m</block></line></editarea><symbol class="" style="font-family: Asana-Math, Asana; font-style: normal; font-weight: normal;"><span>∑</span></symbol><editarea class="to to-summation no-area-container" style="margin-top: -0.457516em; margin-left: 0.9em;"><line class="" style="line-height: 1.2;"><baselineblock></baselineblock><block>i=1</block></line></editarea></compositeblock><opensymbolblock class="" type="parenthesis" style="height: 1.89542em;"><hidden-span style="margin-top: 0.392157em; align-self: flex-start;">(</hidden-span><svg style="width: 0.5em;"><path d=" M 5.65 1.53 c 0.00 -0.05 -0.04 -0.07 -0.08 -0.07 c -0.03 0.00 -0.05 0.01 -0.08 0.02 c -2.29 1.20 -4.18 3.36 -4.18 8.46 v 0.54 h 1.38 v -0.54 c 0.00 -2.91 0.58 -6.32 2.98 -8.15 c 0.11 -0.08 0.11 -0.17 0.11 -0.26 z   M 1.29 10.48 v 8.05 h 1.38 v -8.05 z" stroke="none"></path><path d=" M 5.65 27.47 c 0.00 0.05 -0.04 0.07 -0.08 0.07 c -0.03 0.00 -0.05 -0.01 -0.08 -0.02 c -2.29 -1.20 -4.18 -3.36 -4.18 -8.46 v -0.54 h 1.38 v 0.54 c 0.00 2.91 0.58 6.32 2.98 8.15 c 0.11 0.08 0.11 0.17 0.11 0.26 z" stroke="none"></path></svg></opensymbolblock><block class="Normal">d</block><compositeblock dir="ltr" class="wide-hat-symbol ig-ex-br inline"><symbol style="display: block; width: 100%; position: relative; height: 0.522876em; margin-bottom: -0.196078em;"><svg style="position: absolute; left: 0px; top: 0px; display: block; width: 100%; height: 100%; overflow: visible;"><polyline points="0.00,7.15 5.99,3.16 11.98,7.15" stroke-width="1" fill="none" stroke-linejoin="bevel"></polyline></svg></symbol><editarea class="no-area-container" style="display: inline-flex;"><line class="" style="line-height: 1.2;"><baselineblock></baselineblock><block class="Normal">x</block><compositeblock dir="ltr" class="power-index-symbol-container power-index-symbol-container inline"><middle-base><inline></inline></middle-base><editarea-block class="index-value" style="line-height: 1.2; margin-top: -0.747899em;">i</editarea-block></compositeblock></line></editarea></compositeblock><closesymbolblock class="" type="parenthesis" style="height: 1.89542em;"><hidden-span style="margin-top: 0.392157em; align-self: flex-start;">)</hidden-span><svg style="width: 0.5em;"><path d=" M 1.57 1.53 c 0.00 -0.05 0.04 -0.07 0.08 -0.07 c 0.03 0.00 0.05 0.01 0.08 0.02 c 2.29 1.20 4.18 3.36 4.18 8.46 v 0.54 h -1.38 v -0.54 c 0.00 -2.91 -0.58 -6.32 -2.98 -8.15 c -0.11 -0.08 -0.11 -0.17 -0.11 -0.26 z  M 5.93 10.48 v 8.05 h -1.38 v -8.05 z" stroke="none"></path><path d=" M 1.57 27.47 c 0.00 0.05 0.04 0.07 0.08 0.07 c 0.03 0.00 0.05 -0.01 0.08 -0.02 c 2.29 -1.20 4.18 -3.36 4.18 -8.46 v -0.54 h -1.38 v 0.54 c 0.00 2.91 -0.58 6.32 -2.98 8.15 c -0.11 0.08 -0.11 0.17 -0.11 0.26 z" stroke="none"></path></svg></closesymbolblock><block class="Punctuation">.</block><opensymbolblock class="" type="parenthesis" style="height: 3.00654em;"><hidden-span style="margin-top: 1.24183em; align-self: flex-start;">(</hidden-span><svg style="width: 0.5em;"><path d=" M 5.65 1.53 c 0.00 -0.05 -0.04 -0.07 -0.08 -0.07 c -0.03 0.00 -0.05 0.01 -0.08 0.02 c -2.29 1.20 -4.18 3.36 -4.18 8.46 v 0.54 h 1.38 v -0.54 c 0.00 -2.91 0.58 -6.32 2.98 -8.15 c 0.11 -0.08 0.11 -0.17 0.11 -0.26 z   M 1.29 10.48 v 25.05 h 1.38 v -25.05 z" stroke="none"></path><path d=" M 5.65 44.47 c 0.00 0.05 -0.04 0.07 -0.08 0.07 c -0.03 0.00 -0.05 -0.01 -0.08 -0.02 c -2.29 -1.20 -4.18 -3.36 -4.18 -8.46 v -0.54 h 1.38 v 0.54 c 0.00 2.91 0.58 6.32 2.98 8.15 c 0.11 0.08 0.11 0.17 0.11 0.26 z" stroke="none"></path></svg></opensymbolblock><block class="Unary">-</block><opensymbolblock class="normal" type="parenthesis"><bracket-span>(</bracket-span></opensymbolblock><block class="Normal">x</block><compositeblock dir="ltr" class="power-index-symbol-container power-index-symbol-container inline"><middle-base><inline></inline></middle-base><editarea-block class="index-value" style="line-height: 1.2; margin-top: -0.747899em;">i</editarea-block></compositeblock><block class="Binary">-</block><block class="Normal">𝜇</block><compositeblock dir="ltr" class="power-index-symbol-container power-index-symbol-container inline"><middle-base><inline></inline></middle-base><editarea-block class="index-value" style="line-height: 1.2; margin-top: -0.747899em;">B</editarea-block></compositeblock><closesymbolblock class="normal" type="parenthesis"><bracket-span>)</bracket-span></closesymbolblock><compositeblock dir="ltr" class="fraction-symbol smaller frac-inline inline"><editarea-line class=" frac-edit-area enumerator" style="line-height: 1.2; margin-bottom: -0.392157em; padding-top: 0.0653595em;"><baselineblock></baselineblock><block>1</block></editarea-line><div class="frac-line"><inline style="vertical-align: 0.35em; border-bottom: 1px solid;"></inline></div><editarea-line class=" frac-edit-area denominator" style="margin-bottom: -0.0653595em; line-height: 1.2; margin-top: -0.588235em;"><baselineblock></baselineblock><block>2</block></editarea-line></compositeblock><opensymbolblock class="" type="parenthesis" style="height: 1.63399em;"><hidden-span style="margin-top: 0em; align-self: flex-start;">(</hidden-span><svg style="width: 0.5em;"><path d=" M 5.65 1.53 c 0.00 -0.05 -0.04 -0.07 -0.08 -0.07 c -0.03 0.00 -0.05 0.01 -0.08 0.02 c -2.29 1.20 -4.18 3.36 -4.18 8.46 v 0.54 h 1.38 v -0.54 c 0.00 -2.91 0.58 -6.32 2.98 -8.15 c 0.11 -0.08 0.11 -0.17 0.11 -0.26 z   M 1.29 10.48 v 4.05 h 1.38 v -4.05 z" stroke="none"></path><path d=" M 5.65 23.47 c 0.00 0.05 -0.04 0.07 -0.08 0.07 c -0.03 0.00 -0.05 -0.01 -0.08 -0.02 c -2.29 -1.20 -4.18 -3.36 -4.18 -8.46 v -0.54 h 1.38 v 0.54 c 0.00 2.91 0.58 6.32 2.98 8.15 c 0.11 0.08 0.11 0.17 0.11 0.26 z" stroke="none"></path></svg></opensymbolblock><block class="Normal">𝜎</block><compositeblock dir="ltr" class="power-index-symbol-container power-index-symbol-container has-power inline"><editarea-block class="power-value" style="line-height: 1.2; margin-top: 0em; margin-bottom: -1.07246em;">2</editarea-block><middle-base><inline></inline></middle-base><editarea-block class="index-value" style="line-height: 1.2; margin-top: -0.60899em; margin-bottom: 0em;">B</editarea-block></compositeblock><block class="Binary">+</block><block class="Normal">𝜖</block><closesymbolblock class="" type="parenthesis" style="height: 1.63399em;"><hidden-span style="margin-top: 0em; align-self: flex-start;">)</hidden-span><svg style="width: 0.5em;"><path d=" M 1.57 1.53 c 0.00 -0.05 0.04 -0.07 0.08 -0.07 c 0.03 0.00 0.05 0.01 0.08 0.02 c 2.29 1.20 4.18 3.36 4.18 8.46 v 0.54 h -1.38 v -0.54 c 0.00 -2.91 -0.58 -6.32 -2.98 -8.15 c -0.11 -0.08 -0.11 -0.17 -0.11 -0.26 z  M 5.93 10.48 v 4.05 h -1.38 v -4.05 z" stroke="none"></path><path d=" M 1.57 23.47 c 0.00 0.05 0.04 0.07 0.08 0.07 c 0.03 0.00 0.05 -0.01 0.08 -0.02 c 2.29 -1.20 4.18 -3.36 4.18 -8.46 v -0.54 h -1.38 v 0.54 c 0.00 2.91 -0.58 6.32 -2.98 8.15 c -0.11 0.08 -0.11 0.17 -0.11 0.26 z" stroke="none"></path></svg></closesymbolblock><compositeblock dir="ltr" class="power-index-symbol-container power-index-symbol-container has-power inline" style="margin-left: -0.1em;"><editarea-line class=" power-value" style="line-height: 1.2; margin-bottom: -0.613724em;"><baselineblock></baselineblock><block>-</block><compositeblock dir="ltr" class="fraction-symbol smaller inline"><editarea-line class=" frac-edit-area enumerator" style="line-height: 1.2; margin-bottom: -0.466853em;"><baselineblock></baselineblock><block class="Normal">3</block></editarea-line><div class="frac-line"><inline style="border-bottom: 1px solid;"></inline></div><editarea-line class=" frac-edit-area denominator" style="margin-bottom: -0.186741em; line-height: 1.2; margin-top: -0.373483em;"><baselineblock></baselineblock><block class="Normal">2</block></editarea-line></compositeblock></editarea-line><middle-base><inline></inline></middle-base></compositeblock><closesymbolblock class="" type="parenthesis" style="height: 3.00654em;"><hidden-span style="margin-top: 1.24183em; align-self: flex-start;">)</hidden-span><svg style="width: 0.5em;"><path d=" M 1.57 1.53 c 0.00 -0.05 0.04 -0.07 0.08 -0.07 c 0.03 0.00 0.05 0.01 0.08 0.02 c 2.29 1.20 4.18 3.36 4.18 8.46 v 0.54 h -1.38 v -0.54 c 0.00 -2.91 -0.58 -6.32 -2.98 -8.15 c -0.11 -0.08 -0.11 -0.17 -0.11 -0.26 z  M 5.93 10.48 v 25.05 h -1.38 v -25.05 z" stroke="none"></path><path d=" M 1.57 44.47 c 0.00 0.05 0.04 0.07 0.08 0.07 c 0.03 0.00 0.05 -0.01 0.08 -0.02 c 2.29 -1.20 4.18 -3.36 4.18 -8.46 v -0.54 h -1.38 v 0.54 c 0.00 2.91 -0.58 6.32 -2.98 8.15 c -0.11 0.08 -0.11 0.17 -0.11 0.26 z" stroke="none"></path></svg></closesymbolblock></line></editarea></dg-editor-container></position-container><position-container data-rotation="324.62" data-skewx="0" data-flipx="false" data-anchor="left-top" style="left: 161.77px; top: 177.09px; transform: rotate(324.62deg);"><dg-editor-container data-editor-id="de016090714707558518" class="no-border-on-print math-diagram-editor" style="border: 1px solid transparent; transform: translate(0%); font-size: 17px; font-family: Asana-Math, Asana;"><editarea class="diagram-editor non-wrap no-area-container" style="font-size: 0.9em;"><line class="" style="line-height: 1.2;"><baselineblock></baselineblock><opensymbolblock class="" type="parenthesis" style="height: 2.67974em;"><hidden-span style="margin-top: 0.457516em; align-self: flex-start;">(</hidden-span><svg style="width: 0.5em;"><path d=" M 5.65 1.53 c 0.00 -0.05 -0.04 -0.07 -0.08 -0.07 c -0.03 0.00 -0.05 0.01 -0.08 0.02 c -2.29 1.20 -4.18 3.36 -4.18 8.46 v 0.54 h 1.38 v -0.54 c 0.00 -2.91 0.58 -6.32 2.98 -8.15 c 0.11 -0.08 0.11 -0.17 0.11 -0.26 z   M 1.29 10.48 v 20.05 h 1.38 v -20.05 z" stroke="none"></path><path d=" M 5.65 39.47 c 0.00 0.05 -0.04 0.07 -0.08 0.07 c -0.03 0.00 -0.05 -0.01 -0.08 -0.02 c -2.29 -1.20 -4.18 -3.36 -4.18 -8.46 v -0.54 h 1.38 v 0.54 c 0.00 2.91 0.58 6.32 2.98 8.15 c 0.11 0.08 0.11 0.17 0.11 0.26 z" stroke="none"></path></svg></opensymbolblock><compositeblock dir="ltr" class="summation-like-symbol limit-type non-limit-kind  inline"><editarea class="from no-area-container" style="margin-bottom: -0.588235em; margin-left: 0.9em;"><line class="" style="margin-bottom: -0.186741em; line-height: 1.2;"><baselineblock></baselineblock><block>m</block></line></editarea><symbol class="" style="font-family: Asana-Math, Asana; font-style: normal; font-weight: normal;"><span>∑</span></symbol><editarea class="to to-summation no-area-container" style="margin-top: -0.457516em; margin-left: 0.9em;"><line class="" style="line-height: 1.2;"><baselineblock></baselineblock><block>i=1</block></line></editarea></compositeblock><block class="Normal">dx</block><compositeblock dir="ltr" class="power-index-symbol-container power-index-symbol-container inline"><middle-base><inline></inline></middle-base><editarea-block class="index-value" style="line-height: 1.2; margin-top: -0.747899em;">i</editarea-block></compositeblock><block class="Punctuation">.</block><compositeblock dir="ltr" class="fraction-symbol smaller frac-inline inline"><editarea-line class=" frac-edit-area enumerator" style="line-height: 1.2; margin-bottom: -0.392157em; padding-top: 0.0653595em;"><baselineblock></baselineblock><block>-1</block></editarea-line><div class="frac-line"><inline style="vertical-align: 0.35em; border-bottom: 1px solid;"></inline></div><editarea-line class=" frac-edit-area denominator" style="line-height: 1.2; margin-top: -0.588235em; margin-bottom: -0.0653595em;"><baselineblock></baselineblock><compositeblock dir="ltr" class="sqrt-symbol inline" style="padding-top: 0.261438em;"><sqrt-edit><editarea-line class=" edit-area" style="line-height: 1.2; margin-top: 0.087146em;"><baselineblock></baselineblock><block class="Normal">𝜎</block><compositeblock dir="ltr" class="power-index-symbol-container power-index-symbol-container has-power inline"><editarea-block class="power-value" style="line-height: 1.2; margin-top: 0em; margin-bottom: -1.01021em;">2</editarea-block><middle-base><inline></inline></middle-base><editarea-block class="index-value" style="line-height: 1.2; margin-top: -0.60899em; margin-bottom: -0.124494em;">B</editarea-block></compositeblock><block class="Binary">+</block><block class="Normal">𝜖</block></editarea-line><sqrt-symbol-line><svg style="stroke: none;"><polygon points="0.23720930232558143,9.541833964503086 3.231976744186047,7.940671173805412 6.43088480734717,14.724828853649532 11.045058139534886,0 41.33332824707031,0 41.33332824707031,0.7116279069767444 11.577929031493964,0.7116279069767444 6.197093023255815,17.84415954589844 2.0904069767441866,9.245322336596109 0.42994186046511634,9.86799675520076"></polygon></svg></sqrt-symbol-line></sqrt-edit></compositeblock><compositeblock dir="ltr" class="power-index-symbol-container power-index-symbol-container has-power inline"><editarea-block class="power-value" style="line-height: 1.2; margin-bottom: -0.42667em; display: inline-block; height: 1.2em; width: 0.5em; vertical-align: -0.17em;"></editarea-block><middle-base><inline></inline></middle-base></compositeblock></editarea-line></compositeblock><closesymbolblock class="" type="parenthesis" style="height: 2.67974em;"><hidden-span style="margin-top: 0.457516em; align-self: flex-start;">)</hidden-span><svg style="width: 0.5em;"><path d=" M 1.57 1.53 c 0.00 -0.05 0.04 -0.07 0.08 -0.07 c 0.03 0.00 0.05 0.01 0.08 0.02 c 2.29 1.20 4.18 3.36 4.18 8.46 v 0.54 h -1.38 v -0.54 c 0.00 -2.91 -0.58 -6.32 -2.98 -8.15 c -0.11 -0.08 -0.11 -0.17 -0.11 -0.26 z  M 5.93 10.48 v 20.05 h -1.38 v -20.05 z" stroke="none"></path><path d=" M 1.57 39.47 c 0.00 0.05 0.04 0.07 0.08 0.07 c 0.03 0.00 0.05 -0.01 0.08 -0.02 c 2.29 -1.20 4.18 -3.36 4.18 -8.46 v -0.54 h -1.38 v 0.54 c 0.00 2.91 -0.58 6.32 -2.98 8.15 c -0.11 0.08 -0.11 0.17 -0.11 0.26 z" stroke="none"></path></svg></closesymbolblock></line></editarea></dg-editor-container></position-container><position-container data-rotation="274.61" data-skewx="0" data-flipx="false" data-anchor="left-top" style="left: 74.4247px; top: 232.914px; transform: rotate(274.61deg);"><dg-editor-container data-editor-id="de1870735972132086" class="no-border-on-print math-diagram-editor" style="border: 1px solid transparent; transform: translate(0%); font-size: 17px; font-family: Asana-Math, Asana;"><editarea class="diagram-editor non-wrap no-area-container" style="font-size: 0.7em;"><line class="" style="line-height: 1.2;"><baselineblock></baselineblock><block class="Normal">d𝜎</block><compositeblock dir="ltr" class="power-index-symbol-container power-index-symbol-container has-power inline"><editarea-block class="power-value" style="line-height: 1.2; margin-top: 0em; margin-bottom: -1.00576em;">2</editarea-block><middle-base><inline></inline></middle-base><editarea-block class="index-value" style="line-height: 1.2; margin-top: -0.60899em; margin-bottom: 0em;">B</editarea-block></compositeblock><block class="Punctuation">.</block><compositeblock dir="ltr" class="fraction-symbol smaller frac-inline inline"><editarea-line class=" frac-edit-area enumerator" style="line-height: 1.2; margin-bottom: -0.420168em; padding-top: 0.0840336em;"><baselineblock></baselineblock><block>1</block></editarea-line><div class="frac-line"><inline style="vertical-align: 0.35em; border-bottom: 1px solid;"></inline></div><editarea-line class=" frac-edit-area denominator" style="margin-bottom: -0.0840336em; line-height: 1.2; margin-top: -0.588235em;"><baselineblock></baselineblock><block>m</block></editarea-line></compositeblock><compositeblock dir="ltr" class="summation-like-symbol limit-type non-limit-kind  inline"><editarea class="from no-area-container" style="margin-bottom: -0.588235em; margin-left: 0.9em;"><line class="" style="margin-bottom: -0.120048em; line-height: 1.2;"><baselineblock></baselineblock><block>m</block></line></editarea><symbol class="" style="font-family: Asana-Math, Asana; font-style: normal; font-weight: normal;"><span>∑</span></symbol><editarea class="to to-summation no-area-container" style="margin-top: -0.420168em; margin-left: 0.9em;"><line class="" style="line-height: 1.2;"><baselineblock></baselineblock><block>i = 1</block></line></editarea></compositeblock><block class="Binary">-</block><block class="Normal">2</block><opensymbolblock class="normal" type="parenthesis"><bracket-span>(</bracket-span></opensymbolblock><block class="Normal">x</block><compositeblock dir="ltr" class="power-index-symbol-container power-index-symbol-container inline"><middle-base><inline></inline></middle-base><editarea-block class="index-value" style="line-height: 1.2; margin-top: -0.747899em;">i</editarea-block></compositeblock><block class="Binary">-</block><block class="Normal">𝜇</block><compositeblock dir="ltr" class="power-index-symbol-container power-index-symbol-container inline"><middle-base><inline></inline></middle-base><editarea-block class="index-value" style="line-height: 1.2; margin-top: -0.747899em;">B</editarea-block></compositeblock><closesymbolblock class="normal" type="parenthesis"><bracket-span>)</bracket-span></closesymbolblock></line></editarea></dg-editor-container></position-container><position-container data-rotation="0" data-skewx="0" data-flipx="false" data-anchor="left-top" style="left: 451px; top: 145px;"><dg-editor-container data-editor-id="de9775866276826194" class="no-border-on-print math-diagram-editor" style="border: 1px solid transparent; transform: translate(0%); font-size: 17px; font-family: Asana-Math, Asana;"><editarea class="diagram-editor non-wrap no-area-container" style="font-size: 1em;"><line class="" style="line-height: 1.2;"><baselineblock></baselineblock><block class="Normal">𝛾</block></line></editarea></dg-editor-container></position-container><position-container data-rotation="0" data-skewx="0" data-flipx="false" data-anchor="left-top" style="left: 447px; top: 121px;"><dg-editor-container data-editor-id="de34336162324169206" class="no-border-on-print math-diagram-editor" style="border: 1px solid transparent; transform: translate(0%); font-size: 17px; font-family: Asana-Math, Asana;"><editarea class="diagram-editor non-wrap no-area-container" style="font-size: 1em;"><line class="" style="line-height: 1.2;"><baselineblock></baselineblock><block class="Normal">𝛽</block></line></editarea></dg-editor-container></position-container><position-container data-rotation="0" data-skewx="0" data-flipx="false" data-anchor="left-top" style="left: 557px; top: 55px;"><dg-editor-container data-editor-id="de37571324335161616" class="no-border-on-print math-diagram-editor" style="border: 1px solid transparent; transform: translate(0%); font-size: 17px; font-family: Asana-Math, Asana;"><editarea class="diagram-editor non-wrap no-area-container" style="font-size: 1em;"><line class="" style="line-height: 1.2;"><baselineblock></baselineblock><block class="Normal">y</block><compositeblock dir="ltr" class="power-index-symbol-container power-index-symbol-container inline"><middle-base><inline></inline></middle-base><editarea-block class="index-value" style="line-height: 1.2; margin-top: -0.747899em;">i</editarea-block></compositeblock></line></editarea></dg-editor-container></position-container><position-container data-rotation="0" data-skewx="0" data-flipx="false" data-anchor="left-top" style="left: 595px; top: 89px;"><dg-editor-container data-editor-id="de23708097928812588" class="no-border-on-print math-diagram-editor" style="border: 1px solid transparent; transform: translate(0%); font-size: 17px; font-family: Asana-Math, Asana;"><editarea class="diagram-editor non-wrap no-area-container" style="font-size: 1em;"><line class="" style="line-height: 1.2;"><baselineblock></baselineblock><block class="Normal">dy</block><compositeblock dir="ltr" class="power-index-symbol-container power-index-symbol-container inline"><middle-base><inline></inline></middle-base><editarea-block class="index-value" style="line-height: 1.2; margin-top: -0.747899em;">i</editarea-block></compositeblock></line></editarea></dg-editor-container></position-container><position-container data-rotation="0" data-skewx="0" data-flipx="false" data-anchor="left-top" style="left: 447px; top: 25px;"><dg-editor-container data-editor-id="de964221011117238" class="no-border-on-print math-diagram-editor" style="border: 1px solid transparent; transform: translate(0%); font-size: 17px; font-family: Asana-Math, Asana;"><editarea class="diagram-editor non-wrap no-area-container" style="font-size: 1em;"><line class="" style="line-height: 1.2;"><baselineblock></baselineblock><block class="Normal">d</block><compositeblock dir="ltr" class="wide-hat-symbol ig-ex-br inline"><symbol style="display: block; width: 100%; position: relative; height: 0.529412em; margin-bottom: -0.176471em;"><svg style="position: absolute; left: 0px; top: 0px; display: block; width: 100%; height: 100%; overflow: visible;"><polyline points="0.00,8.06 6.66,3.62 13.32,8.06" stroke-width="1" fill="none" stroke-linejoin="bevel"></polyline></svg></symbol><editarea class="no-area-container" style="display: inline-flex;"><line class="" style="line-height: 1.2;"><baselineblock></baselineblock><block class="Normal">x</block><compositeblock dir="ltr" class="power-index-symbol-container power-index-symbol-container inline"><middle-base><inline></inline></middle-base><editarea-block class="index-value" style="line-height: 1.2; margin-top: -0.747899em;">i</editarea-block></compositeblock></line></editarea></compositeblock></line></editarea></dg-editor-container></position-container><position-container data-rotation="327.88" data-skewx="0" data-flipx="false" data-anchor="left-top" style="left: 467.538px; top: 88.3417px; transform: rotate(327.88deg);"><dg-editor-container data-editor-id="de14429678161814197" class="no-border-on-print math-diagram-editor" style="border: 1px solid transparent; transform: translate(0%); font-size: 17px; font-family: Asana-Math, Asana;"><editarea class="diagram-editor non-wrap no-area-container" style="font-size: 1em;"><line class="" style="line-height: 1.2;"><baselineblock></baselineblock><block class="Normal">d𝛽</block><block class="Normal"> </block></line></editarea></dg-editor-container></position-container><position-container data-rotation="319.54" data-skewx="0" data-flipx="false" data-anchor="left-top" style="left: 498.071px; top: 135.842px; transform: rotate(319.54deg);"><dg-editor-container data-editor-id="de4090756819578105" class="no-border-on-print math-diagram-editor" style="border: 1px solid transparent; transform: translate(0%); font-size: 17px; font-family: Asana-Math, Asana;"><editarea class="diagram-editor non-wrap no-area-container" style="font-size: 1em;"><line class="" style="line-height: 1.2;"><baselineblock></baselineblock><block class="Normal">d𝛾</block></line></editarea></dg-editor-container></position-container></diagram-editors></zoom-region><svg style="position: absolute; width: 100%; height: 100%; overflow: visible; left: 0px; top: 0px; pointer-events: none;"></svg></clip-region></math-diagram></compositeblock></blocks></line><line class="root text-mode full-line-block-inside" style="line-height: 1.4;"><prefix></prefix><blocks><baselineblock class="inline"></baselineblock><compositeblock dir="ltr" class="math-container-symbol role-mathmode-area display" style="font-size: 17px;" data-mathml="<math display=&quot;block&quot; xmlns=&quot;http://www.w3.org/1998/Math/MathML&quot;><mtable columnwidth=&quot;100%&quot; width=&quot;100%&quot; columnalign=&quot;center&quot;><mtr><mtd><mrow><mi>D</mi><mi>i</mi><mi>f</mi><mi>f</mi><mspace is=&quot;true&quot; width=&quot;0.22em&quot;></mspace><mo fence=&quot;true&quot; stretchy=&quot;false&quot;>(</mo><mn>1</mn><mo fence=&quot;true&quot; stretchy=&quot;false&quot;>)</mo><mspace is=&quot;true&quot; width=&quot;0.22em&quot;></mspace><mi>w</mi><mi>r</mi><mi>t</mi><mspace is=&quot;true&quot; width=&quot;0.22em&quot;></mspace><msub><mi>x</mi><mi>i</mi></msub><mo separator=&quot;true&quot;>,</mo><mspace is=&quot;true&quot; width=&quot;0.22em&quot;></mspace></mrow></mtd></mtr><mtr><mtd><mrow><mi>r</mi><mi>e</mi><mi>m</mi><mi>o</mi><mi>v</mi><mi>i</mi><mi>n</mi><mi>g</mi><mspace is=&quot;true&quot; width=&quot;0.22em&quot;></mspace><mi>t</mi><mi>h</mi><mi>e</mi><mspace is=&quot;true&quot; width=&quot;0.22em&quot;></mspace><mi>s</mi><mi>u</mi><mi>m</mi><mi>m</mi><mi>a</mi><mi>t</mi><mi>i</mi><mi>o</mi><mi>n</mi><mspace is=&quot;true&quot; width=&quot;0.22em&quot;></mspace><mi>s</mi><mi>i</mi><mi>g</mi><mi>n</mi><mspace is=&quot;true&quot; width=&quot;0.22em&quot;></mspace><mi>a</mi><mi>s</mi><mspace is=&quot;true&quot; width=&quot;0.22em&quot;></mspace><mi>t</mi><mi>h</mi><mi>e</mi><mspace is=&quot;true&quot; width=&quot;0.22em&quot;></mspace><mi>g</mi><mi>r</mi><mi>a</mi><mi>d</mi><mspace is=&quot;true&quot; width=&quot;0.22em&quot;></mspace><mi>i</mi><mi>s</mi><mspace is=&quot;true&quot; width=&quot;0.22em&quot;></mspace><mi>d</mi><mi>o</mi><mi>n</mi><mi>e</mi><mspace is=&quot;true&quot; width=&quot;0.22em&quot;></mspace><mi>e</mi><mi>l</mi><mi>e</mi><mi>m</mi><mi>e</mi><mi>n</mi><mi>t</mi><mspace is=&quot;true&quot; width=&quot;0.22em&quot;></mspace><mi>w</mi><mi>i</mi><mi>s</mi><mi>e</mi></mrow></mtd></mtr><mtr><mtd><mrow><mo form=&quot;infix&quot;>⟹</mo><mfrac><mrow><mi>∂</mi><msub><mi>𝜇</mi><mi>B</mi></msub></mrow><mrow><mi>∂</mi><msub><mi>x</mi><mi>i</mi></msub></mrow></mfrac><mo form=&quot;infix&quot;>=</mo><mfrac><mrow><mi>∂</mi><mo fence=&quot;true&quot;>(</mo><mfrac><mn>1</mn><mi>m</mi></mfrac><msub><mi>x</mi><mi>i</mi></msub><mo fence=&quot;true&quot;>)</mo></mrow><mrow><mi>∂</mi><msub><mi>x</mi><mi>i</mi></msub></mrow></mfrac></mrow></mtd></mtr><mtr><mtd><mrow><mo form=&quot;infix&quot;>⟹</mo><mfrac><mrow><mi>∂</mi><msub><mi>𝜇</mi><mi>B</mi></msub></mrow><mrow><mi>∂</mi><msub><mi>x</mi><mi>i</mi></msub></mrow></mfrac><mo form=&quot;infix&quot;>=</mo><mfrac><mn>1</mn><mi>m</mi></mfrac></mrow></mtd></mtr><mtr><mtd><mrow><mi>D</mi><mi>i</mi><mi>f</mi><mi>f</mi><mspace is=&quot;true&quot; width=&quot;0.22em&quot;></mspace><mo fence=&quot;true&quot; stretchy=&quot;false&quot;>(</mo><mn>2</mn><mo fence=&quot;true&quot; stretchy=&quot;false&quot;>)</mo><mspace is=&quot;true&quot; width=&quot;0.22em&quot;></mspace><mi>w</mi><mi>r</mi><mi>t</mi><mspace is=&quot;true&quot; width=&quot;0.22em&quot;></mspace><msub><mi>x</mi><mi>i</mi></msub></mrow></mtd></mtr><mtr><mtd><mrow><mfrac><mrow><mi>∂</mi><msubsup><mi>𝜎</mi><mi>B</mi><mn>2</mn></msubsup></mrow><mrow><mi>∂</mi><msub><mi>x</mi><mi>i</mi></msub></mrow></mfrac><mo form=&quot;infix&quot;>=</mo><mfrac><mrow><mi>∂</mi><mo fence=&quot;true&quot;>(</mo><mfrac><mn>1</mn><mi>m</mi></mfrac><mo fence=&quot;true&quot; stretchy=&quot;false&quot;>(</mo><msub><mi>x</mi><mi>i</mi></msub><mo form=&quot;infix&quot;>-</mo><msub><mi>𝜇</mi><mi>B</mi></msub><msup><mo fence=&quot;true&quot; stretchy=&quot;false&quot;>)</mo><mn>2</mn></msup><mo fence=&quot;true&quot;>)</mo></mrow><mrow><mi>∂</mi><msub><mi>x</mi><mi>i</mi></msub></mrow></mfrac></mrow></mtd></mtr><mtr><mtd><mrow><mo form=&quot;infix&quot;>⟹</mo><mfrac><mrow><mi>∂</mi><msubsup><mi>𝜎</mi><mi>B</mi><mn>2</mn></msubsup></mrow><mrow><mi>∂</mi><msub><mi>x</mi><mi>i</mi></msub></mrow></mfrac><mo form=&quot;infix&quot;>=</mo><mfrac><mn>1</mn><mi>m</mi></mfrac><mn>2</mn><mo fence=&quot;true&quot; stretchy=&quot;false&quot;>(</mo><msub><mi>x</mi><mi>i</mi></msub><mo form=&quot;infix&quot;>-</mo><msub><mi>𝜇</mi><mi>B</mi></msub><mo fence=&quot;true&quot; stretchy=&quot;false&quot;>)</mo></mrow></mtd></mtr><mtr><mtd><mrow><mi>D</mi><mi>i</mi><mi>f</mi><mi>f</mi><mspace is=&quot;true&quot; width=&quot;0.22em&quot;></mspace><mo fence=&quot;true&quot; stretchy=&quot;false&quot;>(</mo><mn>3</mn><mo fence=&quot;true&quot; stretchy=&quot;false&quot;>)</mo><mspace is=&quot;true&quot; width=&quot;0.22em&quot;></mspace><mi>w</mi><mi>r</mi><mi>t</mi><mspace is=&quot;true&quot; width=&quot;0.22em&quot;></mspace><msub><mi>x</mi><mi>i</mi></msub></mrow></mtd></mtr><mtr><mtd><mrow><mfrac><mrow><mi>∂</mi><mover accent=&quot;true&quot;><msub><mi>x</mi><mi>i</mi></msub><mo>^</mo></mover></mrow><mrow><mi>∂</mi><msub><mi>x</mi><mi>i</mi></msub></mrow></mfrac><mo form=&quot;infix&quot;>=</mo><mfrac><mrow><mi>∂</mi><mo fence=&quot;true&quot;>(</mo><mfrac><mrow><msub><mi>x</mi><mi>i</mi></msub><mo form=&quot;infix&quot;>-</mo><msub><mi>𝜇</mi><mi>B</mi></msub></mrow><msup><msqrt><mrow><msubsup><mi>𝜎</mi><mi>B</mi><mn>2</mn></msubsup><mo form=&quot;infix&quot;>+</mo><mi>𝜖</mi></mrow></msqrt><mrow><mi></mi></mrow></msup></mfrac><mo fence=&quot;true&quot;>)</mo></mrow><mrow><mi>∂</mi><msub><mi>x</mi><mi>i</mi></msub></mrow></mfrac></mrow></mtd></mtr><mtr><mtd><mrow><mo form=&quot;infix&quot;>⟹</mo><mfrac><mrow><mi>∂</mi><mover accent=&quot;true&quot;><msub><mi>x</mi><mi>i</mi></msub><mo>^</mo></mover></mrow><mrow><mi>∂</mi><msub><mi>x</mi><mi>i</mi></msub></mrow></mfrac><mo form=&quot;infix&quot;>=</mo><mfrac><mn>1</mn><msup><msqrt><mrow><msubsup><mi>𝜎</mi><mi>B</mi><mn>2</mn></msubsup><mo form=&quot;infix&quot;>+</mo><mi>𝜖</mi></mrow></msqrt><mrow><mi></mi></mrow></msup></mfrac></mrow></mtd></mtr><mtr><mtd><mrow><mfrac><mrow><mi>∂</mi><mi>l</mi></mrow><mrow><mi>∂</mi><msub><mi>x</mi><mi>i</mi></msub></mrow></mfrac><mo form=&quot;infix&quot;>=</mo><mfrac><mrow><mi>∂</mi><mi>l</mi></mrow><mrow><mi>∂</mi><mover accent=&quot;true&quot;><msub><mi>x</mi><mi>i</mi></msub><mo>^</mo></mover></mrow></mfrac><mo separator=&quot;true&quot;>.</mo><mfrac><mrow><mi>∂</mi><mover accent=&quot;true&quot;><msub><mi>x</mi><mi>i</mi></msub><mo>^</mo></mover></mrow><mrow><mi>∂</mi><msub><mi>x</mi><mi>i</mi></msub></mrow></mfrac><mo form=&quot;infix&quot;>+</mo><mfrac><mrow><mi>∂</mi><mi>l</mi></mrow><mrow><mi>∂</mi><msubsup><mi>𝜎</mi><mi>B</mi><mn>2</mn></msubsup></mrow></mfrac><mo separator=&quot;true&quot;>.</mo><mfrac><mrow><mi>∂</mi><msubsup><mi>𝜎</mi><mi>B</mi><mn>2</mn></msubsup></mrow><mrow><mi>∂</mi><msub><mi>x</mi><mi>i</mi></msub></mrow></mfrac><mo form=&quot;infix&quot;>+</mo><mfrac><mrow><mi>∂</mi><mi>l</mi></mrow><mrow><mi>∂</mi><msub><mi>𝜇</mi><mi>B</mi></msub></mrow></mfrac><mo separator=&quot;true&quot;>.</mo><mfrac><mrow><mi>∂</mi><msub><mi>𝜇</mi><mi>B</mi></msub></mrow><mrow><mi>∂</mi><msub><mi>x</mi><mi>i</mi></msub></mrow></mfrac></mrow></mtd></mtr><mtr><mtd><mrow><mi>F</mi><mi>r</mi><mi>o</mi><mi>m</mi><mspace is=&quot;true&quot; width=&quot;0.22em&quot;></mspace><mo fence=&quot;true&quot; stretchy=&quot;false&quot;>(</mo><mn>11</mn><mo fence=&quot;true&quot; stretchy=&quot;false&quot;>)</mo><mo separator=&quot;true&quot;>,</mo><mspace is=&quot;true&quot; width=&quot;0.22em&quot;></mspace><mo fence=&quot;true&quot; stretchy=&quot;false&quot;>(</mo><mn>12</mn><mo fence=&quot;true&quot; stretchy=&quot;false&quot;>)</mo><mspace is=&quot;true&quot; width=&quot;0.22em&quot;></mspace><mi>a</mi><mi>n</mi><mi>d</mi><mspace is=&quot;true&quot; width=&quot;0.22em&quot;></mspace><mo fence=&quot;true&quot; stretchy=&quot;false&quot;>(</mo><mn>13</mn><mo fence=&quot;true&quot; stretchy=&quot;false&quot;>)</mo></mrow></mtd></mtr><mtr><mtd><mrow><mo form=&quot;infix&quot;>⟹</mo><mfrac><mrow><mi>∂</mi><mi>l</mi></mrow><mrow><mi>∂</mi><msub><mi>x</mi><mi>i</mi></msub></mrow></mfrac><mo form=&quot;infix&quot;>=</mo><mfrac><mrow><mi>∂</mi><mi>l</mi></mrow><mrow><mi>∂</mi><mover accent=&quot;true&quot;><msub><mi>x</mi><mi>i</mi></msub><mo>^</mo></mover></mrow></mfrac><mo separator=&quot;true&quot;>.</mo><mo fence=&quot;true&quot;>(</mo><mfrac><mn>1</mn><msup><msqrt><mrow><msubsup><mi>𝜎</mi><mi>B</mi><mn>2</mn></msubsup><mo form=&quot;infix&quot;>+</mo><mi>𝜖</mi></mrow></msqrt><mrow><mi></mi></mrow></msup></mfrac><mo fence=&quot;true&quot;>)</mo><mo form=&quot;infix&quot;>+</mo><mfrac><mrow><mi>∂</mi><mi>l</mi></mrow><mrow><mi>∂</mi><msubsup><mi>𝜎</mi><mi>B</mi><mn>2</mn></msubsup></mrow></mfrac><mo separator=&quot;true&quot;>.</mo><mo fence=&quot;true&quot;>(</mo><mfrac><mn>1</mn><mi>m</mi></mfrac><mn>2</mn><mo fence=&quot;true&quot; stretchy=&quot;false&quot;>(</mo><msub><mi>x</mi><mi>i</mi></msub><mo form=&quot;infix&quot;>-</mo><msub><mi>𝜇</mi><mi>B</mi></msub><mo fence=&quot;true&quot; stretchy=&quot;false&quot;>)</mo><mo fence=&quot;true&quot;>)</mo><mo form=&quot;infix&quot;>+</mo><mfrac><mrow><mi>∂</mi><mi>l</mi></mrow><mrow><mi>∂</mi><msub><mi>𝜇</mi><mi>B</mi></msub></mrow></mfrac><mo separator=&quot;true&quot;>.</mo><mfrac><mn>1</mn><mi>m</mi></mfrac></mrow></mtd></mtr><mtr><mtd><mrow></mrow></mtd></mtr></mtable></math>"><editarea class="math-mode-font lazy no-area-container" style="font-family: Asana-Math, Asana;" aria-hidden="true"><line class="taggable" style="line-height: 1.2;"><baselineblock></baselineblock><block class="Normal">Diff </block><opensymbolblock class="normal" type="parenthesis"><bracket-span>(</bracket-span></opensymbolblock><block class="Normal">1</block><closesymbolblock class="normal" type="parenthesis"><bracket-span>)</bracket-span></closesymbolblock><block class="Normal"> wrt x</block><compositeblock dir="ltr" class="power-index-symbol-container power-index-symbol-container"><middle-base><inline></inline></middle-base><editarea-block class="index-value" style="line-height: 1.2; margin-top: -0.747899em;">i</editarea-block></compositeblock><block class="Punctuation">,</block><block class="Normal"> </block></line><line class="taggable" style="line-height: 1.2;"><baselineblock></baselineblock><block class="Normal">removing the summation sign as the grad is done element wise</block></line><line class="taggable" style="line-height: 1.2;"><baselineblock></baselineblock><block class="Relation">⟹</block><compositeblock dir="ltr" class="fraction-symbol smaller"><editarea-line class=" frac-edit-area enumerator" style="line-height: 1.2; margin-bottom: -0.470588em;"><baselineblock></baselineblock><block class="Normal">∂𝜇</block><compositeblock dir="ltr" class="power-index-symbol-container power-index-symbol-container inline"><middle-base><inline></inline></middle-base><editarea-block class="index-value" style="line-height: 1.2; margin-top: -0.747899em;">B</editarea-block></compositeblock></editarea-line><div class="frac-line"><inline style="border-bottom: 1px solid;"></inline></div><editarea-line class=" frac-edit-area denominator" style="line-height: 1.2; margin-top: -0.411765em;"><baselineblock></baselineblock><block class="Normal">∂x</block><compositeblock dir="ltr" class="power-index-symbol-container power-index-symbol-container inline"><middle-base><inline></inline></middle-base><editarea-block class="index-value" style="line-height: 1.2; margin-top: -0.747899em;">i</editarea-block></compositeblock></editarea-line></compositeblock><block class="Relation">=</block><compositeblock dir="ltr" class="fraction-symbol smaller"><editarea-line class=" frac-edit-area enumerator" style="line-height: 1.2; margin-bottom: -0.470588em;"><baselineblock></baselineblock><block class="Normal">∂</block><opensymbolblock class="" type="parenthesis" style="height: 2.17647em;"><hidden-span style="margin-top: 0.411765em; align-self: flex-start;">(</hidden-span><svg style="width: 0.5em;"><path d=" M 6.27 1.70 c 0.00 -0.06 -0.04 -0.08 -0.08 -0.08 c -0.03 0.00 -0.06 0.01 -0.08 0.02 c -2.55 1.34 -4.65 3.73 -4.65 9.40 v 0.60 h 1.53 v -0.60 c 0.00 -3.23 0.64 -7.03 3.31 -9.06 c 0.12 -0.09 0.13 -0.19 0.13 -0.28 z   M 1.44 11.64 v 13.72 h 1.53 v -13.72 z" stroke="none"></path><path d=" M 6.27 35.30 c 0.00 0.06 -0.04 0.08 -0.08 0.08 c -0.03 0.00 -0.06 -0.01 -0.08 -0.02 c -2.55 -1.34 -4.65 -3.73 -4.65 -9.40 v -0.60 h 1.53 v 0.60 c 0.00 3.23 0.64 7.03 3.31 9.06 c 0.12 0.09 0.13 0.19 0.13 0.28 z" stroke="none"></path></svg></opensymbolblock><compositeblock dir="ltr" class="fraction-symbol smaller frac-inline inline"><editarea-line class=" frac-edit-area enumerator" style="line-height: 1.2; margin-bottom: -0.411765em; padding-top: 0.0588235em;"><baselineblock></baselineblock><block>1</block></editarea-line><div class="frac-line"><inline style="vertical-align: 0.35em; border-bottom: 1px solid;"></inline></div><editarea-line class=" frac-edit-area denominator" style="margin-top: -0.588235em; margin-bottom: -0.0588235em; line-height: 1.2;"><baselineblock></baselineblock><block>m</block></editarea-line></compositeblock><block class="Normal">x</block><compositeblock dir="ltr" class="power-index-symbol-container power-index-symbol-container inline"><middle-base><inline></inline></middle-base><editarea-block class="index-value" style="line-height: 1.2; margin-top: -0.747899em;">i</editarea-block></compositeblock><closesymbolblock class="" type="parenthesis" style="height: 2.17647em;"><hidden-span style="margin-top: 0.411765em; align-self: flex-start;">)</hidden-span><svg style="width: 0.5em;"><path d=" M 1.75 1.70 c 0.00 -0.06 0.04 -0.08 0.08 -0.08 c 0.03 0.00 0.06 0.01 0.08 0.02 c 2.55 1.34 4.65 3.73 4.65 9.40 v 0.60 h -1.53 v -0.60 c 0.00 -3.23 -0.64 -7.03 -3.31 -9.06 c -0.12 -0.09 -0.13 -0.19 -0.13 -0.28 z  M 6.58 11.64 v 13.72 h -1.53 v -13.72 z" stroke="none"></path><path d=" M 1.75 35.30 c 0.00 0.06 0.04 0.08 0.08 0.08 c 0.03 0.00 0.06 -0.01 0.08 -0.02 c 2.55 -1.34 4.65 -3.73 4.65 -9.40 v -0.60 h -1.53 v 0.60 c 0.00 3.23 -0.64 7.03 -3.31 9.06 c -0.12 0.09 -0.13 0.19 -0.13 0.28 z" stroke="none"></path></svg></closesymbolblock></editarea-line><div class="frac-line"><inline style="border-bottom: 1px solid;"></inline></div><editarea-line class=" frac-edit-area denominator" style="line-height: 1.2; margin-top: -0.411765em;"><baselineblock></baselineblock><block class="Normal">∂x</block><compositeblock dir="ltr" class="power-index-symbol-container power-index-symbol-container inline"><middle-base><inline></inline></middle-base><editarea-block class="index-value" style="line-height: 1.2; margin-top: -0.747899em;">i</editarea-block></compositeblock></editarea-line></compositeblock></line><line class="taggable" style="line-height: 1.2;"><baselineblock></baselineblock><ref-tag data-tag-position="line" class="line-tag automatic" data-tag-id="tid0.5812548480255362" style="font-family: Arial, Helvetica, sans-serif; font-size: 15px;" id="tid0.5812548480255362"><label>(11)</label></ref-tag><block class="Relation">⟹</block><compositeblock dir="ltr" class="fraction-symbol smaller"><editarea-line class=" frac-edit-area enumerator" style="line-height: 1.2; margin-bottom: -0.470588em;"><baselineblock></baselineblock><block class="Normal">∂𝜇</block><compositeblock dir="ltr" class="power-index-symbol-container power-index-symbol-container inline"><middle-base><inline></inline></middle-base><editarea-block class="index-value" style="line-height: 1.2; margin-top: -0.747899em;">B</editarea-block></compositeblock></editarea-line><div class="frac-line"><inline style="border-bottom: 1px solid;"></inline></div><editarea-line class=" frac-edit-area denominator" style="line-height: 1.2; margin-top: -0.411765em;"><baselineblock></baselineblock><block class="Normal">∂x</block><compositeblock dir="ltr" class="power-index-symbol-container power-index-symbol-container inline"><middle-base><inline></inline></middle-base><editarea-block class="index-value" style="line-height: 1.2; margin-top: -0.747899em;">i</editarea-block></compositeblock></editarea-line></compositeblock><block class="Relation">=</block><compositeblock dir="ltr" class="fraction-symbol smaller"><editarea-line class=" frac-edit-area enumerator" style="line-height: 1.2; margin-bottom: -0.470588em;"><baselineblock></baselineblock><block class="Normal">1</block></editarea-line><div class="frac-line"><inline style="border-bottom: 1px solid;"></inline></div><editarea-line class=" frac-edit-area denominator" style="margin-bottom: -0.176471em; line-height: 1.2; margin-top: -0.411765em;"><baselineblock></baselineblock><block class="Normal">m</block></editarea-line></compositeblock></line><line class="taggable" style="line-height: 1.2;"><baselineblock></baselineblock><block class="Normal">Diff </block><opensymbolblock class="normal" type="parenthesis"><bracket-span>(</bracket-span></opensymbolblock><block class="Normal">2</block><closesymbolblock class="normal" type="parenthesis"><bracket-span>)</bracket-span></closesymbolblock><block class="Normal"> wrt x</block><compositeblock dir="ltr" class="power-index-symbol-container power-index-symbol-container"><middle-base><inline></inline></middle-base><editarea-block class="index-value" style="line-height: 1.2; margin-top: -0.747899em;">i</editarea-block></compositeblock></line><line class="taggable" style="line-height: 1.2;"><baselineblock></baselineblock><compositeblock dir="ltr" class="fraction-symbol smaller"><editarea-line class=" frac-edit-area enumerator" style="line-height: 1.2; margin-bottom: -0.470588em;"><baselineblock></baselineblock><block class="Normal">∂𝜎</block><compositeblock dir="ltr" class="power-index-symbol-container power-index-symbol-container has-power inline"><editarea-block class="power-value" style="line-height: 1.2; margin-top: 0em; margin-bottom: -1.05378em;">2</editarea-block><middle-base><inline></inline></middle-base><editarea-block class="index-value" style="line-height: 1.2; margin-top: -0.60899em; margin-bottom: 0em;">B</editarea-block></compositeblock></editarea-line><div class="frac-line"><inline style="border-bottom: 1px solid;"></inline></div><editarea-line class=" frac-edit-area denominator" style="line-height: 1.2; margin-top: -0.411765em;"><baselineblock></baselineblock><block class="Normal">∂x</block><compositeblock dir="ltr" class="power-index-symbol-container power-index-symbol-container inline"><middle-base><inline></inline></middle-base><editarea-block class="index-value" style="line-height: 1.2; margin-top: -0.747899em;">i</editarea-block></compositeblock></editarea-line></compositeblock><block class="Relation">=</block><compositeblock dir="ltr" class="fraction-symbol smaller"><editarea-line class=" frac-edit-area enumerator" style="line-height: 1.2; margin-bottom: -0.470588em;"><baselineblock></baselineblock><block class="Normal">∂</block><opensymbolblock class="" type="parenthesis" style="height: 2.17647em;"><hidden-span style="margin-top: 0.411765em; align-self: flex-start;">(</hidden-span><svg style="width: 0.5em;"><path d=" M 6.27 1.70 c 0.00 -0.06 -0.04 -0.08 -0.08 -0.08 c -0.03 0.00 -0.06 0.01 -0.08 0.02 c -2.55 1.34 -4.65 3.73 -4.65 9.40 v 0.60 h 1.53 v -0.60 c 0.00 -3.23 0.64 -7.03 3.31 -9.06 c 0.12 -0.09 0.13 -0.19 0.13 -0.28 z   M 1.44 11.64 v 13.72 h 1.53 v -13.72 z" stroke="none"></path><path d=" M 6.27 35.30 c 0.00 0.06 -0.04 0.08 -0.08 0.08 c -0.03 0.00 -0.06 -0.01 -0.08 -0.02 c -2.55 -1.34 -4.65 -3.73 -4.65 -9.40 v -0.60 h 1.53 v 0.60 c 0.00 3.23 0.64 7.03 3.31 9.06 c 0.12 0.09 0.13 0.19 0.13 0.28 z" stroke="none"></path></svg></opensymbolblock><compositeblock dir="ltr" class="fraction-symbol smaller frac-inline inline"><editarea-line class=" frac-edit-area enumerator" style="line-height: 1.2; margin-bottom: -0.411765em; padding-top: 0.0588235em;"><baselineblock></baselineblock><block>1</block></editarea-line><div class="frac-line"><inline style="vertical-align: 0.35em; border-bottom: 1px solid;"></inline></div><editarea-line class=" frac-edit-area denominator" style="margin-top: -0.588235em; margin-bottom: -0.0588235em; line-height: 1.2;"><baselineblock></baselineblock><block>m</block></editarea-line></compositeblock><opensymbolblock class="normal" type="parenthesis"><bracket-span>(</bracket-span></opensymbolblock><block class="Normal">x</block><compositeblock dir="ltr" class="power-index-symbol-container power-index-symbol-container inline"><middle-base><inline></inline></middle-base><editarea-block class="index-value" style="line-height: 1.2; margin-top: -0.747899em;">i</editarea-block></compositeblock><block class="Binary">-</block><block class="Normal">𝜇</block><compositeblock dir="ltr" class="power-index-symbol-container power-index-symbol-container inline"><middle-base><inline></inline></middle-base><editarea-block class="index-value" style="line-height: 1.2; margin-top: -0.747899em;">B</editarea-block></compositeblock><closesymbolblock class="normal" type="parenthesis"><bracket-span>)</bracket-span></closesymbolblock><compositeblock dir="ltr" class="power-index-symbol-container power-index-symbol-container has-power inline"><editarea-block class="power-value" style="line-height: 1.2; margin-bottom: -1.06571em;">2</editarea-block><middle-base><inline></inline></middle-base></compositeblock><closesymbolblock class="" type="parenthesis" style="height: 2.17647em;"><hidden-span style="margin-top: 0.411765em; align-self: flex-start;">)</hidden-span><svg style="width: 0.5em;"><path d=" M 1.75 1.70 c 0.00 -0.06 0.04 -0.08 0.08 -0.08 c 0.03 0.00 0.06 0.01 0.08 0.02 c 2.55 1.34 4.65 3.73 4.65 9.40 v 0.60 h -1.53 v -0.60 c 0.00 -3.23 -0.64 -7.03 -3.31 -9.06 c -0.12 -0.09 -0.13 -0.19 -0.13 -0.28 z  M 6.58 11.64 v 13.72 h -1.53 v -13.72 z" stroke="none"></path><path d=" M 1.75 35.30 c 0.00 0.06 0.04 0.08 0.08 0.08 c 0.03 0.00 0.06 -0.01 0.08 -0.02 c 2.55 -1.34 4.65 -3.73 4.65 -9.40 v -0.60 h -1.53 v 0.60 c 0.00 3.23 -0.64 7.03 -3.31 9.06 c -0.12 0.09 -0.13 0.19 -0.13 0.28 z" stroke="none"></path></svg></closesymbolblock></editarea-line><div class="frac-line"><inline style="border-bottom: 1px solid;"></inline></div><editarea-line class=" frac-edit-area denominator" style="line-height: 1.2; margin-top: -0.411765em;"><baselineblock></baselineblock><block class="Normal">∂x</block><compositeblock dir="ltr" class="power-index-symbol-container power-index-symbol-container inline"><middle-base><inline></inline></middle-base><editarea-block class="index-value" style="line-height: 1.2; margin-top: -0.747899em;">i</editarea-block></compositeblock></editarea-line></compositeblock></line><line class="taggable" style="line-height: 1.2;"><baselineblock></baselineblock><ref-tag data-tag-position="line" class="line-tag automatic" data-tag-id="tid0.7460241521734954" style="font-family: Arial, Helvetica, sans-serif; font-size: 15px;" id="tid0.7460241521734954"><label>(12)</label></ref-tag><block class="Relation">⟹</block><compositeblock dir="ltr" class="fraction-symbol smaller"><editarea-line class=" frac-edit-area enumerator" style="line-height: 1.2; margin-bottom: -0.470588em;"><baselineblock></baselineblock><block class="Normal">∂𝜎</block><compositeblock dir="ltr" class="power-index-symbol-container power-index-symbol-container has-power inline"><editarea-block class="power-value" style="line-height: 1.2; margin-top: 0em; margin-bottom: -1.05378em;">2</editarea-block><middle-base><inline></inline></middle-base><editarea-block class="index-value" style="line-height: 1.2; margin-top: -0.60899em; margin-bottom: 0em;">B</editarea-block></compositeblock></editarea-line><div class="frac-line"><inline style="border-bottom: 1px solid;"></inline></div><editarea-line class=" frac-edit-area denominator" style="line-height: 1.2; margin-top: -0.411765em;"><baselineblock></baselineblock><block class="Normal">∂x</block><compositeblock dir="ltr" class="power-index-symbol-container power-index-symbol-container inline"><middle-base><inline></inline></middle-base><editarea-block class="index-value" style="line-height: 1.2; margin-top: -0.747899em;">i</editarea-block></compositeblock></editarea-line></compositeblock><block class="Relation">=</block><compositeblock dir="ltr" class="fraction-symbol smaller"><editarea-line class=" frac-edit-area enumerator" style="line-height: 1.2; margin-bottom: -0.470588em;"><baselineblock></baselineblock><block class="Normal">1</block></editarea-line><div class="frac-line"><inline style="border-bottom: 1px solid;"></inline></div><editarea-line class=" frac-edit-area denominator" style="margin-bottom: -0.176471em; line-height: 1.2; margin-top: -0.411765em;"><baselineblock></baselineblock><block class="Normal">m</block></editarea-line></compositeblock><block class="Normal">2</block><opensymbolblock class="normal" type="parenthesis"><bracket-span>(</bracket-span></opensymbolblock><block class="Normal">x</block><compositeblock dir="ltr" class="power-index-symbol-container power-index-symbol-container"><middle-base><inline></inline></middle-base><editarea-block class="index-value" style="line-height: 1.2; margin-top: -0.747899em;">i</editarea-block></compositeblock><block class="Binary">-</block><block class="Normal">𝜇</block><compositeblock dir="ltr" class="power-index-symbol-container power-index-symbol-container"><middle-base><inline></inline></middle-base><editarea-block class="index-value" style="line-height: 1.2; margin-top: -0.747899em;">B</editarea-block></compositeblock><closesymbolblock class="normal" type="parenthesis"><bracket-span>)</bracket-span></closesymbolblock></line><line class="taggable" style="line-height: 1.2;"><baselineblock></baselineblock><block class="Normal">Diff </block><opensymbolblock class="normal" type="parenthesis"><bracket-span>(</bracket-span></opensymbolblock><block class="Normal">3</block><closesymbolblock class="normal" type="parenthesis"><bracket-span>)</bracket-span></closesymbolblock><block class="Normal"> wrt x</block><compositeblock dir="ltr" class="power-index-symbol-container power-index-symbol-container"><middle-base><inline></inline></middle-base><editarea-block class="index-value" style="line-height: 1.2; margin-top: -0.747899em;">i</editarea-block></compositeblock></line><line class="taggable" style="line-height: 1.2;"><baselineblock></baselineblock><compositeblock dir="ltr" class="fraction-symbol smaller"><editarea-line class=" frac-edit-area enumerator" style="line-height: 1.2; margin-bottom: -0.470588em;"><baselineblock></baselineblock><block class="Normal">∂</block><compositeblock dir="ltr" class="wide-hat-symbol ig-ex-br inline"><symbol style="display: block; width: 100%; position: relative; height: 0.529412em; margin-bottom: -0.176471em;"><svg style="position: absolute; left: 0px; top: 0px; display: block; width: 100%; height: 100%; overflow: visible;"><polyline points="0.00,8.06 6.66,3.62 13.32,8.06" stroke-width="1" fill="none" stroke-linejoin="bevel"></polyline></svg></symbol><editarea class="no-area-container" style="display: inline-flex;"><line class="" style="line-height: 1.2;"><baselineblock></baselineblock><block class="Normal">x</block><compositeblock dir="ltr" class="power-index-symbol-container power-index-symbol-container inline"><middle-base><inline></inline></middle-base><editarea-block class="index-value" style="line-height: 1.2; margin-top: -0.747899em;">i</editarea-block></compositeblock></line></editarea></compositeblock></editarea-line><div class="frac-line"><inline style="border-bottom: 1px solid;"></inline></div><editarea-line class=" frac-edit-area denominator" style="line-height: 1.2; margin-top: -0.411765em;"><baselineblock></baselineblock><block class="Normal">∂x</block><compositeblock dir="ltr" class="power-index-symbol-container power-index-symbol-container inline"><middle-base><inline></inline></middle-base><editarea-block class="index-value" style="line-height: 1.2; margin-top: -0.747899em;">i</editarea-block></compositeblock></editarea-line></compositeblock><block class="Relation">=</block><compositeblock dir="ltr" class="fraction-symbol smaller"><editarea-line class=" frac-edit-area enumerator" style="line-height: 1.2; margin-bottom: -0.470588em;"><baselineblock></baselineblock><block class="Normal">∂</block><opensymbolblock class="" type="parenthesis" style="height: 2.76471em;"><hidden-span style="margin-top: 0.529412em; align-self: flex-start;">(</hidden-span><svg style="width: 0.5em;"><path d=" M 6.27 1.70 c 0.00 -0.06 -0.04 -0.08 -0.08 -0.08 c -0.03 0.00 -0.06 0.01 -0.08 0.02 c -2.55 1.34 -4.65 3.73 -4.65 9.40 v 0.60 h 1.53 v -0.60 c 0.00 -3.23 0.64 -7.03 3.31 -9.06 c 0.12 -0.09 0.13 -0.19 0.13 -0.28 z   M 1.44 11.64 v 23.72 h 1.53 v -23.72 z" stroke="none"></path><path d=" M 6.27 45.30 c 0.00 0.06 -0.04 0.08 -0.08 0.08 c -0.03 0.00 -0.06 -0.01 -0.08 -0.02 c -2.55 -1.34 -4.65 -3.73 -4.65 -9.40 v -0.60 h 1.53 v 0.60 c 0.00 3.23 0.64 7.03 3.31 9.06 c 0.12 0.09 0.13 0.19 0.13 0.28 z" stroke="none"></path></svg></opensymbolblock><compositeblock dir="ltr" class="fraction-symbol smaller frac-inline inline"><editarea-line class=" frac-edit-area enumerator" style="line-height: 1.2; margin-bottom: -0.411765em; padding-top: 0.0588235em;"><baselineblock></baselineblock><block>x</block><compositeblock dir="ltr" class="power-index-symbol-container power-index-symbol-container inline"><middle-base><inline></inline></middle-base><editarea-block class="index-value" style="line-height: 1.2; margin-top: -0.747899em;">i</editarea-block></compositeblock><block>-𝜇</block><compositeblock dir="ltr" class="power-index-symbol-container power-index-symbol-container inline"><middle-base><inline></inline></middle-base><editarea-block class="index-value" style="line-height: 1.2; margin-top: -0.747899em;">B</editarea-block></compositeblock></editarea-line><div class="frac-line"><inline style="vertical-align: 0.35em; border-bottom: 1px solid;"></inline></div><editarea-line class=" frac-edit-area denominator" style="line-height: 1.2; margin-top: -0.588235em; margin-bottom: -0.0588235em;"><baselineblock></baselineblock><compositeblock dir="ltr" class="sqrt-symbol inline" style="padding-top: 0.235294em;"><sqrt-edit><editarea-line class=" edit-area" style="line-height: 1.2; margin-top: 0.0784314em;"><baselineblock></baselineblock><block class="Normal">𝜎</block><compositeblock dir="ltr" class="power-index-symbol-container power-index-symbol-container has-power inline"><editarea-block class="power-value" style="line-height: 1.2; margin-top: 0em; margin-bottom: -0.997759em;">2</editarea-block><middle-base><inline></inline></middle-base><editarea-block class="index-value" style="line-height: 1.2; margin-top: -0.60899em; margin-bottom: -0.112045em;">B</editarea-block></compositeblock><block class="Binary">+</block><block class="Normal">𝜖</block></editarea-line><sqrt-symbol-line><svg style="stroke: none;"><polygon points="0.2635658914728682,10.766866568631906 3.591085271317829,8.987796801190047 7.139106581004326,16.51234440965561 12.272286821705425,0 45.93333435058594,0 45.93333435058594,0.7906976744186061 12.853790881587008,0.7906976744186061 6.8856589147286815,19.99167277018229 2.322674418604651,10.437409204290821 0.4777131782945736,11.129269669407101"></polygon></svg></sqrt-symbol-line></sqrt-edit></compositeblock><compositeblock dir="ltr" class="power-index-symbol-container power-index-symbol-container has-power inline"><editarea-block class="power-value" style="line-height: 1.2; margin-bottom: -0.424223em; display: inline-block; height: 1.2em; width: 0.5em; vertical-align: -0.17em;"></editarea-block><middle-base><inline></inline></middle-base></compositeblock></editarea-line></compositeblock><closesymbolblock class="" type="parenthesis" style="height: 2.76471em;"><hidden-span style="margin-top: 0.529412em; align-self: flex-start;">)</hidden-span><svg style="width: 0.5em;"><path d=" M 1.75 1.70 c 0.00 -0.06 0.04 -0.08 0.08 -0.08 c 0.03 0.00 0.06 0.01 0.08 0.02 c 2.55 1.34 4.65 3.73 4.65 9.40 v 0.60 h -1.53 v -0.60 c 0.00 -3.23 -0.64 -7.03 -3.31 -9.06 c -0.12 -0.09 -0.13 -0.19 -0.13 -0.28 z  M 6.58 11.64 v 23.72 h -1.53 v -23.72 z" stroke="none"></path><path d=" M 1.75 45.30 c 0.00 0.06 0.04 0.08 0.08 0.08 c 0.03 0.00 0.06 -0.01 0.08 -0.02 c 2.55 -1.34 4.65 -3.73 4.65 -9.40 v -0.60 h -1.53 v 0.60 c 0.00 3.23 -0.64 7.03 -3.31 9.06 c -0.12 0.09 -0.13 0.19 -0.13 0.28 z" stroke="none"></path></svg></closesymbolblock></editarea-line><div class="frac-line"><inline style="border-bottom: 1px solid;"></inline></div><editarea-line class=" frac-edit-area denominator" style="line-height: 1.2; margin-top: -0.411765em;"><baselineblock></baselineblock><block class="Normal">∂x</block><compositeblock dir="ltr" class="power-index-symbol-container power-index-symbol-container inline"><middle-base><inline></inline></middle-base><editarea-block class="index-value" style="line-height: 1.2; margin-top: -0.747899em;">i</editarea-block></compositeblock></editarea-line></compositeblock></line><line class="taggable" style="line-height: 1.2;"><baselineblock></baselineblock><ref-tag data-tag-position="line" class="line-tag automatic" data-tag-id="tid0.338349303837715" style="font-family: Arial, Helvetica, sans-serif; font-size: 15px;" id="tid0.338349303837715"><label>(13)</label></ref-tag><block class="Relation">⟹</block><compositeblock dir="ltr" class="fraction-symbol smaller"><editarea-line class=" frac-edit-area enumerator" style="line-height: 1.2; margin-bottom: -0.470588em;"><baselineblock></baselineblock><block class="Normal">∂</block><compositeblock dir="ltr" class="wide-hat-symbol ig-ex-br inline"><symbol style="display: block; width: 100%; position: relative; height: 0.529412em; margin-bottom: -0.176471em;"><svg style="position: absolute; left: 0px; top: 0px; display: block; width: 100%; height: 100%; overflow: visible;"><polyline points="0.00,8.06 6.66,3.62 13.32,8.06" stroke-width="1" fill="none" stroke-linejoin="bevel"></polyline></svg></symbol><editarea class="no-area-container" style="display: inline-flex;"><line class="" style="line-height: 1.2;"><baselineblock></baselineblock><block class="Normal">x</block><compositeblock dir="ltr" class="power-index-symbol-container power-index-symbol-container inline"><middle-base><inline></inline></middle-base><editarea-block class="index-value" style="line-height: 1.2; margin-top: -0.747899em;">i</editarea-block></compositeblock></line></editarea></compositeblock></editarea-line><div class="frac-line"><inline style="border-bottom: 1px solid;"></inline></div><editarea-line class=" frac-edit-area denominator" style="line-height: 1.2; margin-top: -0.411765em;"><baselineblock></baselineblock><block class="Normal">∂x</block><compositeblock dir="ltr" class="power-index-symbol-container power-index-symbol-container inline"><middle-base><inline></inline></middle-base><editarea-block class="index-value" style="line-height: 1.2; margin-top: -0.747899em;">i</editarea-block></compositeblock></editarea-line></compositeblock><block class="Relation">=</block><compositeblock dir="ltr" class="fraction-symbol smaller"><editarea-line class=" frac-edit-area enumerator" style="line-height: 1.2; margin-bottom: -0.470588em;"><baselineblock></baselineblock><block class="Normal">1</block></editarea-line><div class="frac-line"><inline style="border-bottom: 1px solid;"></inline></div><editarea-line class=" frac-edit-area denominator" style="line-height: 1.2; margin-top: -0.411765em;"><baselineblock></baselineblock><compositeblock dir="ltr" class="sqrt-symbol inline" style="padding-top: 0.235294em;"><sqrt-edit><editarea-line class=" edit-area" style="line-height: 1.2; margin-top: 0.117647em;"><baselineblock></baselineblock><block class="Normal">𝜎</block><compositeblock dir="ltr" class="power-index-symbol-container power-index-symbol-container has-power inline"><editarea-block class="power-value" style="line-height: 1.2; margin-top: 0em; margin-bottom: -1.05378em;">2</editarea-block><middle-base><inline></inline></middle-base><editarea-block class="index-value" style="line-height: 1.2; margin-top: -0.60899em; margin-bottom: -0.168067em;">B</editarea-block></compositeblock><block class="Binary">+</block><block class="Normal">𝜖</block></editarea-line><sqrt-symbol-line><svg style="stroke: none;"><polygon points="0.35142118863049093,13.672472482134204 4.7881136950904395,11.30037945887839 9.53695714341764,21.371598172963612 16.363049095607234,0 61.23333740234375,0 61.23333740234375,1.054263565891475 17.101111079197302,1.054263565891475 9.180878552971576,25.97221408420139 3.0968992248062013,13.23319599634609 0.6369509043927648,14.155676616501129"></polygon></svg></sqrt-symbol-line></sqrt-edit></compositeblock><compositeblock dir="ltr" class="power-index-symbol-container power-index-symbol-container has-power inline"><editarea-block class="power-value" style="line-height: 1.2; margin-bottom: -0.396622em; display: inline-block; height: 1.2em; width: 0.5em; vertical-align: -0.17em;"></editarea-block><middle-base><inline></inline></middle-base></compositeblock></editarea-line></compositeblock></line><line class="taggable" style="line-height: 1.2;"><baselineblock></baselineblock><compositeblock dir="ltr" class="fraction-symbol smaller"><editarea-line class=" frac-edit-area enumerator" style="line-height: 1.2; margin-bottom: -0.470588em;"><baselineblock></baselineblock><block class="Normal">∂l</block></editarea-line><div class="frac-line"><inline style="border-bottom: 1px solid;"></inline></div><editarea-line class=" frac-edit-area denominator" style="line-height: 1.2; margin-top: -0.411765em;"><baselineblock></baselineblock><block class="Normal">∂x</block><compositeblock dir="ltr" class="power-index-symbol-container power-index-symbol-container inline"><middle-base><inline></inline></middle-base><editarea-block class="index-value" style="line-height: 1.2; margin-top: -0.747899em;">i</editarea-block></compositeblock></editarea-line></compositeblock><block class="Relation">=</block><compositeblock dir="ltr" class="fraction-symbol smaller"><editarea-line class=" frac-edit-area enumerator" style="line-height: 1.2; margin-bottom: -0.470588em;"><baselineblock></baselineblock><block class="Normal">∂l</block></editarea-line><div class="frac-line"><inline style="border-bottom: 1px solid;"></inline></div><editarea-line class=" frac-edit-area denominator" style="line-height: 1.2; margin-top: -0.411765em;"><baselineblock></baselineblock><block class="Normal">∂</block><compositeblock dir="ltr" class="wide-hat-symbol ig-ex-br inline"><symbol style="display: block; width: 100%; position: relative; height: 0.529412em; margin-bottom: -0.176471em;"><svg style="position: absolute; left: 0px; top: 0px; display: block; width: 100%; height: 100%; overflow: visible;"><polyline points="0.00,8.06 6.66,3.62 13.32,8.06" stroke-width="1" fill="none" stroke-linejoin="bevel"></polyline></svg></symbol><editarea class="no-area-container" style="display: inline-flex;"><line class="" style="line-height: 1.2;"><baselineblock></baselineblock><block class="Normal">x</block><compositeblock dir="ltr" class="power-index-symbol-container power-index-symbol-container inline"><middle-base><inline></inline></middle-base><editarea-block class="index-value" style="line-height: 1.2; margin-top: -0.747899em;">i</editarea-block></compositeblock></line></editarea></compositeblock></editarea-line></compositeblock><block class="Punctuation">.</block><compositeblock dir="ltr" class="fraction-symbol smaller"><editarea-line class=" frac-edit-area enumerator" style="line-height: 1.2; margin-bottom: -0.470588em;"><baselineblock></baselineblock><block class="Normal">∂</block><compositeblock dir="ltr" class="wide-hat-symbol ig-ex-br inline"><symbol style="display: block; width: 100%; position: relative; height: 0.529412em; margin-bottom: -0.176471em;"><svg style="position: absolute; left: 0px; top: 0px; display: block; width: 100%; height: 100%; overflow: visible;"><polyline points="0.00,8.06 6.66,3.62 13.32,8.06" stroke-width="1" fill="none" stroke-linejoin="bevel"></polyline></svg></symbol><editarea class="no-area-container" style="display: inline-flex;"><line class="" style="line-height: 1.2;"><baselineblock></baselineblock><block class="Normal">x</block><compositeblock dir="ltr" class="power-index-symbol-container power-index-symbol-container inline"><middle-base><inline></inline></middle-base><editarea-block class="index-value" style="line-height: 1.2; margin-top: -0.747899em;">i</editarea-block></compositeblock></line></editarea></compositeblock></editarea-line><div class="frac-line"><inline style="border-bottom: 1px solid;"></inline></div><editarea-line class=" frac-edit-area denominator" style="line-height: 1.2; margin-top: -0.411765em;"><baselineblock></baselineblock><block class="Normal">∂x</block><compositeblock dir="ltr" class="power-index-symbol-container power-index-symbol-container inline"><middle-base><inline></inline></middle-base><editarea-block class="index-value" style="line-height: 1.2; margin-top: -0.747899em;">i</editarea-block></compositeblock></editarea-line></compositeblock><block class="Binary">+</block><compositeblock dir="ltr" class="fraction-symbol smaller"><editarea-line class=" frac-edit-area enumerator" style="line-height: 1.2; margin-bottom: -0.470588em;"><baselineblock></baselineblock><block class="Normal">∂l</block></editarea-line><div class="frac-line"><inline style="border-bottom: 1px solid;"></inline></div><editarea-line class=" frac-edit-area denominator" style="line-height: 1.2; margin-top: -0.411765em;"><baselineblock></baselineblock><block class="Normal">∂𝜎</block><compositeblock dir="ltr" class="power-index-symbol-container power-index-symbol-container has-power inline"><editarea-block class="power-value" style="line-height: 1.2; margin-top: 0em; margin-bottom: -1.05378em;">2</editarea-block><middle-base><inline></inline></middle-base><editarea-block class="index-value" style="line-height: 1.2; margin-top: -0.60899em; margin-bottom: -0.168067em;">B</editarea-block></compositeblock></editarea-line></compositeblock><block class="Punctuation">.</block><compositeblock dir="ltr" class="fraction-symbol smaller"><editarea-line class=" frac-edit-area enumerator" style="line-height: 1.2; margin-bottom: -0.470588em;"><baselineblock></baselineblock><block class="Normal">∂𝜎</block><compositeblock dir="ltr" class="power-index-symbol-container power-index-symbol-container has-power inline"><editarea-block class="power-value" style="line-height: 1.2; margin-top: 0em; margin-bottom: -1.05378em;">2</editarea-block><middle-base><inline></inline></middle-base><editarea-block class="index-value" style="line-height: 1.2; margin-top: -0.60899em; margin-bottom: 0em;">B</editarea-block></compositeblock></editarea-line><div class="frac-line"><inline style="border-bottom: 1px solid;"></inline></div><editarea-line class=" frac-edit-area denominator" style="line-height: 1.2; margin-top: -0.411765em;"><baselineblock></baselineblock><block class="Normal">∂x</block><compositeblock dir="ltr" class="power-index-symbol-container power-index-symbol-container inline"><middle-base><inline></inline></middle-base><editarea-block class="index-value" style="line-height: 1.2; margin-top: -0.747899em;">i</editarea-block></compositeblock></editarea-line></compositeblock><block class="Binary">+</block><compositeblock dir="ltr" class="fraction-symbol smaller"><editarea-line class=" frac-edit-area enumerator" style="line-height: 1.2; margin-bottom: -0.470588em;"><baselineblock></baselineblock><block class="Normal">∂l</block></editarea-line><div class="frac-line"><inline style="border-bottom: 1px solid;"></inline></div><editarea-line class=" frac-edit-area denominator" style="line-height: 1.2; margin-top: -0.411765em;"><baselineblock></baselineblock><block class="Normal">∂𝜇</block><compositeblock dir="ltr" class="power-index-symbol-container power-index-symbol-container inline"><middle-base><inline></inline></middle-base><editarea-block class="index-value" style="line-height: 1.2; margin-top: -0.747899em;">B</editarea-block></compositeblock></editarea-line></compositeblock><block class="Punctuation">.</block><compositeblock dir="ltr" class="fraction-symbol smaller"><editarea-line class=" frac-edit-area enumerator" style="line-height: 1.2; margin-bottom: -0.470588em;"><baselineblock></baselineblock><block class="Normal">∂𝜇</block><compositeblock dir="ltr" class="power-index-symbol-container power-index-symbol-container inline"><middle-base><inline></inline></middle-base><editarea-block class="index-value" style="line-height: 1.2; margin-top: -0.747899em;">B</editarea-block></compositeblock></editarea-line><div class="frac-line"><inline style="border-bottom: 1px solid;"></inline></div><editarea-line class=" frac-edit-area denominator" style="line-height: 1.2; margin-top: -0.411765em;"><baselineblock></baselineblock><block class="Normal">∂x</block><compositeblock dir="ltr" class="power-index-symbol-container power-index-symbol-container inline"><middle-base><inline></inline></middle-base><editarea-block class="index-value" style="line-height: 1.2; margin-top: -0.747899em;">i</editarea-block></compositeblock></editarea-line></compositeblock></line><line class="taggable" style="line-height: 1.2;"><baselineblock></baselineblock><block class="Normal">From </block><opensymbolblock class="normal" type="parenthesis"><bracket-span>(</bracket-span></opensymbolblock><block class="Normal">11</block><closesymbolblock class="normal" type="parenthesis"><bracket-span>)</bracket-span></closesymbolblock><block class="Punctuation">,</block><block class="Normal"> </block><opensymbolblock class="normal" type="parenthesis"><bracket-span>(</bracket-span></opensymbolblock><block class="Normal">12</block><closesymbolblock class="normal" type="parenthesis"><bracket-span>)</bracket-span></closesymbolblock><block class="Normal"> and </block><opensymbolblock class="normal" type="parenthesis"><bracket-span>(</bracket-span></opensymbolblock><block class="Normal">13</block><closesymbolblock class="normal" type="parenthesis"><bracket-span>)</bracket-span></closesymbolblock></line><line class="taggable" style="line-height: 1.2;"><baselineblock></baselineblock><block class="Relation">⟹</block><compositeblock dir="ltr" class="fraction-symbol smaller"><editarea-line class=" frac-edit-area enumerator" style="line-height: 1.2; margin-bottom: -0.470588em;"><baselineblock></baselineblock><block class="Normal">∂l</block></editarea-line><div class="frac-line"><inline style="border-bottom: 1px solid;"></inline></div><editarea-line class=" frac-edit-area denominator" style="line-height: 1.2; margin-top: -0.411765em;"><baselineblock></baselineblock><block class="Normal">∂x</block><compositeblock dir="ltr" class="power-index-symbol-container power-index-symbol-container inline"><middle-base><inline></inline></middle-base><editarea-block class="index-value" style="line-height: 1.2; margin-top: -0.747899em;">i</editarea-block></compositeblock></editarea-line></compositeblock><block class="Relation">=</block><compositeblock dir="ltr" class="fraction-symbol smaller"><editarea-line class=" frac-edit-area enumerator" style="line-height: 1.2; margin-bottom: -0.470588em;"><baselineblock></baselineblock><block class="Normal">∂l</block></editarea-line><div class="frac-line"><inline style="border-bottom: 1px solid;"></inline></div><editarea-line class=" frac-edit-area denominator" style="line-height: 1.2; margin-top: -0.411765em;"><baselineblock></baselineblock><block class="Normal">∂</block><compositeblock dir="ltr" class="wide-hat-symbol ig-ex-br inline"><symbol style="display: block; width: 100%; position: relative; height: 0.529412em; margin-bottom: -0.176471em;"><svg style="position: absolute; left: 0px; top: 0px; display: block; width: 100%; height: 100%; overflow: visible;"><polyline points="0.00,8.06 6.66,3.62 13.32,8.06" stroke-width="1" fill="none" stroke-linejoin="bevel"></polyline></svg></symbol><editarea class="no-area-container" style="display: inline-flex;"><line class="" style="line-height: 1.2;"><baselineblock></baselineblock><block class="Normal">x</block><compositeblock dir="ltr" class="power-index-symbol-container power-index-symbol-container inline"><middle-base><inline></inline></middle-base><editarea-block class="index-value" style="line-height: 1.2; margin-top: -0.747899em;">i</editarea-block></compositeblock></line></editarea></compositeblock></editarea-line></compositeblock><block class="Punctuation">.</block><opensymbolblock class="" type="parenthesis" style="height: 3.58824em;"><hidden-span style="margin-top: 0.764706em; align-self: flex-start;">(</hidden-span><svg style="width: 0.5em;"><path d=" M 6.27 1.70 c 0.00 -0.06 -0.04 -0.08 -0.08 -0.08 c -0.03 0.00 -0.06 0.01 -0.08 0.02 c -2.55 1.34 -4.65 3.73 -4.65 9.40 v 0.60 h 1.53 v -0.60 c 0.00 -3.23 0.64 -7.03 3.31 -9.06 c 0.12 -0.09 0.13 -0.19 0.13 -0.28 z   M 1.44 11.64 v 37.72 h 1.53 v -37.72 z" stroke="none"></path><path d=" M 6.27 59.30 c 0.00 0.06 -0.04 0.08 -0.08 0.08 c -0.03 0.00 -0.06 -0.01 -0.08 -0.02 c -2.55 -1.34 -4.65 -3.73 -4.65 -9.40 v -0.60 h 1.53 v 0.60 c 0.00 3.23 0.64 7.03 3.31 9.06 c 0.12 0.09 0.13 0.19 0.13 0.28 z" stroke="none"></path></svg></opensymbolblock><compositeblock dir="ltr" class="fraction-symbol smaller"><editarea-line class=" frac-edit-area enumerator" style="line-height: 1.2; margin-bottom: -0.470588em;"><baselineblock></baselineblock><block class="Normal">1</block></editarea-line><div class="frac-line"><inline style="border-bottom: 1px solid;"></inline></div><editarea-line class=" frac-edit-area denominator" style="line-height: 1.2; margin-top: -0.411765em;"><baselineblock></baselineblock><compositeblock dir="ltr" class="sqrt-symbol inline" style="padding-top: 0.235294em;"><sqrt-edit><editarea-line class=" edit-area" style="line-height: 1.2; margin-top: 0.117647em;"><baselineblock></baselineblock><block class="Normal">𝜎</block><compositeblock dir="ltr" class="power-index-symbol-container power-index-symbol-container has-power inline"><editarea-block class="power-value" style="line-height: 1.2; margin-top: 0em; margin-bottom: -1.05378em;">2</editarea-block><middle-base><inline></inline></middle-base><editarea-block class="index-value" style="line-height: 1.2; margin-top: -0.60899em; margin-bottom: -0.168067em;">B</editarea-block></compositeblock><block class="Binary">+</block><block class="Normal">𝜖</block></editarea-line><sqrt-symbol-line><svg style="stroke: none;"><polygon points="0.35142118863049093,13.672487740923266 4.7881136950904395,11.300394717667453 9.536956651792927,21.371612389128284 16.363049095607234,0 61.23333740234375,0 61.23333740234375,1.054263565891475 17.10111113903569,1.054263565891475 9.180878552971576,25.972229342990452 3.0968992248062013,13.233211255135153 0.6369509043927648,14.155691875290191"></polygon></svg></sqrt-symbol-line></sqrt-edit></compositeblock><compositeblock dir="ltr" class="power-index-symbol-container power-index-symbol-container has-power inline"><editarea-block class="power-value" style="line-height: 1.2; margin-bottom: -0.396622em; display: inline-block; height: 1.2em; width: 0.5em; vertical-align: -0.17em;"></editarea-block><middle-base><inline></inline></middle-base></compositeblock></editarea-line></compositeblock><closesymbolblock class="" type="parenthesis" style="height: 3.58824em;"><hidden-span style="margin-top: 0.764706em; align-self: flex-start;">)</hidden-span><svg style="width: 0.5em;"><path d=" M 1.75 1.70 c 0.00 -0.06 0.04 -0.08 0.08 -0.08 c 0.03 0.00 0.06 0.01 0.08 0.02 c 2.55 1.34 4.65 3.73 4.65 9.40 v 0.60 h -1.53 v -0.60 c 0.00 -3.23 -0.64 -7.03 -3.31 -9.06 c -0.12 -0.09 -0.13 -0.19 -0.13 -0.28 z  M 6.58 11.64 v 37.72 h -1.53 v -37.72 z" stroke="none"></path><path d=" M 1.75 59.30 c 0.00 0.06 0.04 0.08 0.08 0.08 c 0.03 0.00 0.06 -0.01 0.08 -0.02 c 2.55 -1.34 4.65 -3.73 4.65 -9.40 v -0.60 h -1.53 v 0.60 c 0.00 3.23 -0.64 7.03 -3.31 9.06 c -0.12 0.09 -0.13 0.19 -0.13 0.28 z" stroke="none"></path></svg></closesymbolblock><block class="Binary">+</block><compositeblock dir="ltr" class="fraction-symbol smaller"><editarea-line class=" frac-edit-area enumerator" style="line-height: 1.2; margin-bottom: -0.470588em;"><baselineblock></baselineblock><block class="Normal">∂l</block></editarea-line><div class="frac-line"><inline style="border-bottom: 1px solid;"></inline></div><editarea-line class=" frac-edit-area denominator" style="line-height: 1.2; margin-top: -0.411765em;"><baselineblock></baselineblock><block class="Normal">∂𝜎</block><compositeblock dir="ltr" class="power-index-symbol-container power-index-symbol-container has-power inline"><editarea-block class="power-value" style="line-height: 1.2; margin-top: 0em; margin-bottom: -1.05378em;">2</editarea-block><middle-base><inline></inline></middle-base><editarea-block class="index-value" style="line-height: 1.2; margin-top: -0.60899em; margin-bottom: -0.168067em;">B</editarea-block></compositeblock></editarea-line></compositeblock><block class="Punctuation">.</block><opensymbolblock class="" type="parenthesis" style="height: 2.76471em;"><hidden-span style="margin-top: 0.764706em; align-self: flex-start;">(</hidden-span><svg style="width: 0.5em;"><path d=" M 6.27 1.70 c 0.00 -0.06 -0.04 -0.08 -0.08 -0.08 c -0.03 0.00 -0.06 0.01 -0.08 0.02 c -2.55 1.34 -4.65 3.73 -4.65 9.40 v 0.60 h 1.53 v -0.60 c 0.00 -3.23 0.64 -7.03 3.31 -9.06 c 0.12 -0.09 0.13 -0.19 0.13 -0.28 z   M 1.44 11.64 v 23.72 h 1.53 v -23.72 z" stroke="none"></path><path d=" M 6.27 45.30 c 0.00 0.06 -0.04 0.08 -0.08 0.08 c -0.03 0.00 -0.06 -0.01 -0.08 -0.02 c -2.55 -1.34 -4.65 -3.73 -4.65 -9.40 v -0.60 h 1.53 v 0.60 c 0.00 3.23 0.64 7.03 3.31 9.06 c 0.12 0.09 0.13 0.19 0.13 0.28 z" stroke="none"></path></svg></opensymbolblock><compositeblock dir="ltr" class="fraction-symbol smaller"><editarea-line class=" frac-edit-area enumerator" style="line-height: 1.2; margin-bottom: -0.470588em;"><baselineblock></baselineblock><block class="Normal">1</block></editarea-line><div class="frac-line"><inline style="border-bottom: 1px solid;"></inline></div><editarea-line class=" frac-edit-area denominator" style="margin-bottom: -0.176471em; line-height: 1.2; margin-top: -0.411765em;"><baselineblock></baselineblock><block class="Normal">m</block></editarea-line></compositeblock><block class="Normal">2</block><opensymbolblock class="normal" type="parenthesis"><bracket-span>(</bracket-span></opensymbolblock><block class="Normal">x</block><compositeblock dir="ltr" class="power-index-symbol-container power-index-symbol-container"><middle-base><inline></inline></middle-base><editarea-block class="index-value" style="line-height: 1.2; margin-top: -0.747899em;">i</editarea-block></compositeblock><block class="Binary">-</block><block class="Normal">𝜇</block><compositeblock dir="ltr" class="power-index-symbol-container power-index-symbol-container"><middle-base><inline></inline></middle-base><editarea-block class="index-value" style="line-height: 1.2; margin-top: -0.747899em;">B</editarea-block></compositeblock><closesymbolblock class="normal" type="parenthesis"><bracket-span>)</bracket-span></closesymbolblock><closesymbolblock class="" type="parenthesis" style="height: 2.76471em;"><hidden-span style="margin-top: 0.764706em; align-self: flex-start;">)</hidden-span><svg style="width: 0.5em;"><path d=" M 1.75 1.70 c 0.00 -0.06 0.04 -0.08 0.08 -0.08 c 0.03 0.00 0.06 0.01 0.08 0.02 c 2.55 1.34 4.65 3.73 4.65 9.40 v 0.60 h -1.53 v -0.60 c 0.00 -3.23 -0.64 -7.03 -3.31 -9.06 c -0.12 -0.09 -0.13 -0.19 -0.13 -0.28 z  M 6.58 11.64 v 23.72 h -1.53 v -23.72 z" stroke="none"></path><path d=" M 1.75 45.30 c 0.00 0.06 0.04 0.08 0.08 0.08 c 0.03 0.00 0.06 -0.01 0.08 -0.02 c 2.55 -1.34 4.65 -3.73 4.65 -9.40 v -0.60 h -1.53 v 0.60 c 0.00 3.23 -0.64 7.03 -3.31 9.06 c -0.12 0.09 -0.13 0.19 -0.13 0.28 z" stroke="none"></path></svg></closesymbolblock><block class="Binary">+</block><compositeblock dir="ltr" class="fraction-symbol smaller"><editarea-line class=" frac-edit-area enumerator" style="line-height: 1.2; margin-bottom: -0.470588em;"><baselineblock></baselineblock><block class="Normal">∂l</block></editarea-line><div class="frac-line"><inline style="border-bottom: 1px solid;"></inline></div><editarea-line class=" frac-edit-area denominator" style="line-height: 1.2; margin-top: -0.411765em;"><baselineblock></baselineblock><block class="Normal">∂𝜇</block><compositeblock dir="ltr" class="power-index-symbol-container power-index-symbol-container inline"><middle-base><inline></inline></middle-base><editarea-block class="index-value" style="line-height: 1.2; margin-top: -0.747899em;">B</editarea-block></compositeblock></editarea-line></compositeblock><block class="Punctuation">.</block><compositeblock dir="ltr" class="fraction-symbol smaller"><editarea-line class=" frac-edit-area enumerator" style="line-height: 1.2; margin-bottom: -0.470588em;"><baselineblock></baselineblock><block class="Normal">1</block></editarea-line><div class="frac-line"><inline style="border-bottom: 1px solid;"></inline></div><editarea-line class=" frac-edit-area denominator" style="margin-bottom: -0.176471em; line-height: 1.2; margin-top: -0.411765em;"><baselineblock></baselineblock><block class="Normal">m</block></editarea-line></compositeblock></line><line class="taggable" style="line-height: 1.2;"><baselineblock></baselineblock><emptyblock aria-label="empty line"> </emptyblock></line></editarea><span role="presentation" style="width:100%;position:absolute;top:0;left:0;clip:rect(1px, 1px, 1px, 1px);height:1px;padding:1px 0 0 0!important;overflow:hidden;user-select:none;"><math display="block" xmlns="http://www.w3.org/1998/Math/MathML"><mtable columnwidth="100%" columnalign="center" width="100%"><mtr><mtd><mrow><mi>D</mi><mi>i</mi><mi>f</mi><mi>f</mi><mspace is="true" width="0.22em"></mspace><mo fence="true" stretchy="false">(</mo><mn>1</mn><mo fence="true" stretchy="false">)</mo><mspace is="true" width="0.22em"></mspace><mi>w</mi><mi>r</mi><mi>t</mi><mspace is="true" width="0.22em"></mspace><msub><mi>x</mi><mi>i</mi></msub><mo separator="true">,</mo><mspace is="true" width="0.22em"></mspace></mrow></mtd></mtr><mtr><mtd><mrow><mi>r</mi><mi>e</mi><mi>m</mi><mi>o</mi><mi>v</mi><mi>i</mi><mi>n</mi><mi>g</mi><mspace is="true" width="0.22em"></mspace><mi>t</mi><mi>h</mi><mi>e</mi><mspace is="true" width="0.22em"></mspace><mi>s</mi><mi>u</mi><mi>m</mi><mi>m</mi><mi>a</mi><mi>t</mi><mi>i</mi><mi>o</mi><mi>n</mi><mspace is="true" width="0.22em"></mspace><mi>s</mi><mi>i</mi><mi>g</mi><mi>n</mi><mspace is="true" width="0.22em"></mspace><mi>a</mi><mi>s</mi><mspace is="true" width="0.22em"></mspace><mi>t</mi><mi>h</mi><mi>e</mi><mspace is="true" width="0.22em"></mspace><mi>g</mi><mi>r</mi><mi>a</mi><mi>d</mi><mspace is="true" width="0.22em"></mspace><mi>i</mi><mi>s</mi><mspace is="true" width="0.22em"></mspace><mi>d</mi><mi>o</mi><mi>n</mi><mi>e</mi><mspace is="true" width="0.22em"></mspace><mi>e</mi><mi>l</mi><mi>e</mi><mi>m</mi><mi>e</mi><mi>n</mi><mi>t</mi><mspace is="true" width="0.22em"></mspace><mi>w</mi><mi>i</mi><mi>s</mi><mi>e</mi></mrow></mtd></mtr><mtr><mtd><mrow><mo form="infix">⟹</mo><mfrac><mrow><mi>∂</mi><msub><mi>𝜇</mi><mi>B</mi></msub></mrow><mrow><mi>∂</mi><msub><mi>x</mi><mi>i</mi></msub></mrow></mfrac><mo form="infix">=</mo><mfrac><mrow><mi>∂</mi><mo fence="true">(</mo><mfrac><mn>1</mn><mi>m</mi></mfrac><msub><mi>x</mi><mi>i</mi></msub><mo fence="true">)</mo></mrow><mrow><mi>∂</mi><msub><mi>x</mi><mi>i</mi></msub></mrow></mfrac></mrow></mtd></mtr><mtr><mtd><mrow><mo form="infix">⟹</mo><mfrac><mrow><mi>∂</mi><msub><mi>𝜇</mi><mi>B</mi></msub></mrow><mrow><mi>∂</mi><msub><mi>x</mi><mi>i</mi></msub></mrow></mfrac><mo form="infix">=</mo><mfrac><mn>1</mn><mi>m</mi></mfrac></mrow></mtd></mtr><mtr><mtd><mrow><mi>D</mi><mi>i</mi><mi>f</mi><mi>f</mi><mspace is="true" width="0.22em"></mspace><mo fence="true" stretchy="false">(</mo><mn>2</mn><mo fence="true" stretchy="false">)</mo><mspace is="true" width="0.22em"></mspace><mi>w</mi><mi>r</mi><mi>t</mi><mspace is="true" width="0.22em"></mspace><msub><mi>x</mi><mi>i</mi></msub></mrow></mtd></mtr><mtr><mtd><mrow><mfrac><mrow><mi>∂</mi><msubsup><mi>𝜎</mi><mi>B</mi><mn>2</mn></msubsup></mrow><mrow><mi>∂</mi><msub><mi>x</mi><mi>i</mi></msub></mrow></mfrac><mo form="infix">=</mo><mfrac><mrow><mi>∂</mi><mo fence="true">(</mo><mfrac><mn>1</mn><mi>m</mi></mfrac><mo fence="true" stretchy="false">(</mo><msub><mi>x</mi><mi>i</mi></msub><mo form="infix">-</mo><msub><mi>𝜇</mi><mi>B</mi></msub><msup><mo fence="true" stretchy="false">)</mo><mn>2</mn></msup><mo fence="true">)</mo></mrow><mrow><mi>∂</mi><msub><mi>x</mi><mi>i</mi></msub></mrow></mfrac></mrow></mtd></mtr><mtr><mtd><mrow><mo form="infix">⟹</mo><mfrac><mrow><mi>∂</mi><msubsup><mi>𝜎</mi><mi>B</mi><mn>2</mn></msubsup></mrow><mrow><mi>∂</mi><msub><mi>x</mi><mi>i</mi></msub></mrow></mfrac><mo form="infix">=</mo><mfrac><mn>1</mn><mi>m</mi></mfrac><mn>2</mn><mo fence="true" stretchy="false">(</mo><msub><mi>x</mi><mi>i</mi></msub><mo form="infix">-</mo><msub><mi>𝜇</mi><mi>B</mi></msub><mo fence="true" stretchy="false">)</mo></mrow></mtd></mtr><mtr><mtd><mrow><mi>D</mi><mi>i</mi><mi>f</mi><mi>f</mi><mspace is="true" width="0.22em"></mspace><mo fence="true" stretchy="false">(</mo><mn>3</mn><mo fence="true" stretchy="false">)</mo><mspace is="true" width="0.22em"></mspace><mi>w</mi><mi>r</mi><mi>t</mi><mspace is="true" width="0.22em"></mspace><msub><mi>x</mi><mi>i</mi></msub></mrow></mtd></mtr><mtr><mtd><mrow><mfrac><mrow><mi>∂</mi><mover accent="true"><msub><mi>x</mi><mi>i</mi></msub><mo>^</mo></mover></mrow><mrow><mi>∂</mi><msub><mi>x</mi><mi>i</mi></msub></mrow></mfrac><mo form="infix">=</mo><mfrac><mrow><mi>∂</mi><mo fence="true">(</mo><mfrac><mrow><msub><mi>x</mi><mi>i</mi></msub><mo form="infix">-</mo><msub><mi>𝜇</mi><mi>B</mi></msub></mrow><msup><msqrt><mrow><msubsup><mi>𝜎</mi><mi>B</mi><mn>2</mn></msubsup><mo form="infix">+</mo><mi>𝜖</mi></mrow></msqrt><mrow><mi></mi></mrow></msup></mfrac><mo fence="true">)</mo></mrow><mrow><mi>∂</mi><msub><mi>x</mi><mi>i</mi></msub></mrow></mfrac></mrow></mtd></mtr><mtr><mtd><mrow><mo form="infix">⟹</mo><mfrac><mrow><mi>∂</mi><mover accent="true"><msub><mi>x</mi><mi>i</mi></msub><mo>^</mo></mover></mrow><mrow><mi>∂</mi><msub><mi>x</mi><mi>i</mi></msub></mrow></mfrac><mo form="infix">=</mo><mfrac><mn>1</mn><msup><msqrt><mrow><msubsup><mi>𝜎</mi><mi>B</mi><mn>2</mn></msubsup><mo form="infix">+</mo><mi>𝜖</mi></mrow></msqrt><mrow><mi></mi></mrow></msup></mfrac></mrow></mtd></mtr><mtr><mtd><mrow><mfrac><mrow><mi>∂</mi><mi>l</mi></mrow><mrow><mi>∂</mi><msub><mi>x</mi><mi>i</mi></msub></mrow></mfrac><mo form="infix">=</mo><mfrac><mrow><mi>∂</mi><mi>l</mi></mrow><mrow><mi>∂</mi><mover accent="true"><msub><mi>x</mi><mi>i</mi></msub><mo>^</mo></mover></mrow></mfrac><mo separator="true">.</mo><mfrac><mrow><mi>∂</mi><mover accent="true"><msub><mi>x</mi><mi>i</mi></msub><mo>^</mo></mover></mrow><mrow><mi>∂</mi><msub><mi>x</mi><mi>i</mi></msub></mrow></mfrac><mo form="infix">+</mo><mfrac><mrow><mi>∂</mi><mi>l</mi></mrow><mrow><mi>∂</mi><msubsup><mi>𝜎</mi><mi>B</mi><mn>2</mn></msubsup></mrow></mfrac><mo separator="true">.</mo><mfrac><mrow><mi>∂</mi><msubsup><mi>𝜎</mi><mi>B</mi><mn>2</mn></msubsup></mrow><mrow><mi>∂</mi><msub><mi>x</mi><mi>i</mi></msub></mrow></mfrac><mo form="infix">+</mo><mfrac><mrow><mi>∂</mi><mi>l</mi></mrow><mrow><mi>∂</mi><msub><mi>𝜇</mi><mi>B</mi></msub></mrow></mfrac><mo separator="true">.</mo><mfrac><mrow><mi>∂</mi><msub><mi>𝜇</mi><mi>B</mi></msub></mrow><mrow><mi>∂</mi><msub><mi>x</mi><mi>i</mi></msub></mrow></mfrac></mrow></mtd></mtr><mtr><mtd><mrow><mi>F</mi><mi>r</mi><mi>o</mi><mi>m</mi><mspace is="true" width="0.22em"></mspace><mo fence="true" stretchy="false">(</mo><mn>11</mn><mo fence="true" stretchy="false">)</mo><mo separator="true">,</mo><mspace is="true" width="0.22em"></mspace><mo fence="true" stretchy="false">(</mo><mn>12</mn><mo fence="true" stretchy="false">)</mo><mspace is="true" width="0.22em"></mspace><mi>a</mi><mi>n</mi><mi>d</mi><mspace is="true" width="0.22em"></mspace><mo fence="true" stretchy="false">(</mo><mn>13</mn><mo fence="true" stretchy="false">)</mo></mrow></mtd></mtr><mtr><mtd><mrow><mo form="infix">⟹</mo><mfrac><mrow><mi>∂</mi><mi>l</mi></mrow><mrow><mi>∂</mi><msub><mi>x</mi><mi>i</mi></msub></mrow></mfrac><mo form="infix">=</mo><mfrac><mrow><mi>∂</mi><mi>l</mi></mrow><mrow><mi>∂</mi><mover accent="true"><msub><mi>x</mi><mi>i</mi></msub><mo>^</mo></mover></mrow></mfrac><mo separator="true">.</mo><mo fence="true">(</mo><mfrac><mn>1</mn><msup><msqrt><mrow><msubsup><mi>𝜎</mi><mi>B</mi><mn>2</mn></msubsup><mo form="infix">+</mo><mi>𝜖</mi></mrow></msqrt><mrow><mi></mi></mrow></msup></mfrac><mo fence="true">)</mo><mo form="infix">+</mo><mfrac><mrow><mi>∂</mi><mi>l</mi></mrow><mrow><mi>∂</mi><msubsup><mi>𝜎</mi><mi>B</mi><mn>2</mn></msubsup></mrow></mfrac><mo separator="true">.</mo><mo fence="true">(</mo><mfrac><mn>1</mn><mi>m</mi></mfrac><mn>2</mn><mo fence="true" stretchy="false">(</mo><msub><mi>x</mi><mi>i</mi></msub><mo form="infix">-</mo><msub><mi>𝜇</mi><mi>B</mi></msub><mo fence="true" stretchy="false">)</mo><mo fence="true">)</mo><mo form="infix">+</mo><mfrac><mrow><mi>∂</mi><mi>l</mi></mrow><mrow><mi>∂</mi><msub><mi>𝜇</mi><mi>B</mi></msub></mrow></mfrac><mo separator="true">.</mo><mfrac><mn>1</mn><mi>m</mi></mfrac></mrow></mtd></mtr><mtr><mtd><mrow></mrow></mtd></mtr></mtable></math></span></compositeblock></blocks></line><line class="root text-mode full-line-block-inside" style="line-height: 1.4;"><prefix></prefix><blocks><baselineblock class="inline"></baselineblock><compositeblock dir="ltr" class="math-diagram inline" aria-label="Diagram" role="img"><math-diagram aria-hidden="true" data-amt="diagram" style="height: 287px; z-index: 1;"><clip-region style="width: 100%; height: 100%; display: block; overflow: hidden; position: relative;"><zoom-region><svg><g><defs><pattern id=".13938385766929873" width="10" height="10" patternUnits="userSpaceOnUse"><path d="M 10 0 L 0 0 0 10" fill="none" stroke="lightgray" stroke-width="0.5"></path></pattern></defs><rect width="100%" height="100%" fill="url(#.13938385766929873)" stroke="lightgray" stroke-width="0.5"></rect></g></svg><div class="diagram-plotly-layer" style="position: absolute; inset: 0px; pointer-events: none; fill: none; stroke: none;"><svg style="overflow:visible;position:absolute;left:0;top:0;"></svg></div><svg class="role-diagram-draw-area"><g class="shapes-region" style="stroke: black; fill: none;"><g class="composite-shape"><path class="real" d=" M22,108 L33.5,108 L33.5,198.2 L22,198.2 Z" style="stroke-width: 1px; stroke: rgb(0, 0, 0); fill: none; fill-opacity: 1;"></path></g><g class="composite-shape"><path class="real" d=" M405,101 L416.5,101 L416.5,191.2 L405,191.2 Z" style="stroke-width: 1px; stroke: rgb(0, 0, 0); fill: none; fill-opacity: 1;"></path></g><g class="arrow-line"><path class="connection real" stroke-dasharray="" d="  M315.5,97 L274.47,104.25" style="stroke: rgb(211, 34, 34); stroke-opacity: 1; stroke-width: 1px; fill: rgb(255, 255, 255); fill-opacity: 1;"></path><g stroke="rgb(211,34,34)" stroke-opacity="1" transform="matrix(0.9847470783667127,-0.17399192983648204,0.17399192983648204,0.9847470783667127,272.5,104.60000610351562)" style="stroke: rgb(211, 34, 34); stroke-width: 1px;"><path d=" M10.93,-3.29 Q4.96,-0.45 0,0 Q4.96,0.45 10.93,3.29"></path></g></g><g class="arrow-line"><path class="connection real" stroke-dasharray="" d="  M346.5,141 L239.04,229.73" style="stroke: rgb(211, 34, 34); stroke-opacity: 1; stroke-width: 1px; fill: rgb(255, 255, 255); fill-opacity: 1;"></path><g stroke="rgb(211,34,34)" stroke-opacity="1" transform="matrix(0.7710692066831257,-0.6367513474701527,0.6367513474701527,0.7710692066831257,237.5,231)" style="stroke: rgb(211, 34, 34); stroke-width: 1px;"><path d=" M10.93,-3.29 Q4.96,-0.45 0,0 Q4.96,0.45 10.93,3.29"></path></g></g><g class="arrow-line"><path class="connection real" stroke-dasharray="" d="  M177.5,131 L178.48,223" style="stroke: rgb(211, 34, 34); stroke-opacity: 1; stroke-width: 1px; fill: rgb(255, 255, 255); fill-opacity: 1;"></path><g stroke="rgb(211,34,34)" stroke-opacity="1" transform="matrix(-0.010646307311314168,-0.9999433264643717,0.9999433264643717,-0.010646307311314168,178.5,225)" style="stroke: rgb(211, 34, 34); stroke-width: 1px;"><path d=" M10.93,-3.29 Q4.96,-0.45 0,0 Q4.96,0.45 10.93,3.29"></path></g></g><g class="composite-shape"><path class="real" d=" M554,144 L565.5,144 L565.5,234.2 L554,234.2 Z" style="stroke-width: 1px; stroke: rgb(0, 0, 0); fill: none; fill-opacity: 1;"></path></g><g class="arrow-line"><path class="connection real" stroke-dasharray="" d="  M626.5,189.03 L582.5,189.03" style="stroke: rgb(211, 34, 34); stroke-opacity: 1; stroke-width: 1px; fill: rgb(255, 255, 255); fill-opacity: 1;"></path><g stroke="rgb(211,34,34)" stroke-opacity="1" transform="matrix(1,-2.4492935982947064e-16,2.4492935982947064e-16,1,580.5,189.0333251953125)" style="stroke: rgb(211, 34, 34); stroke-width: 1px;"><path d=" M10.93,-3.29 Q4.96,-0.45 0,0 Q4.96,0.45 10.93,3.29"></path></g></g><g class="arrow-line"><path class="connection real" stroke-dasharray="" d="  M526.5,107 L483.44,96.51" style="stroke: rgb(211, 34, 34); stroke-opacity: 1; stroke-width: 1px; fill: rgb(255, 255, 255); fill-opacity: 1;"></path><g stroke="rgb(211,34,34)" stroke-opacity="1" transform="matrix(0.9715491199976464,0.2368381460656178,-0.2368381460656178,0.9715491199976464,481.5,96.0333251953125)" style="stroke: rgb(211, 34, 34); stroke-width: 1px;"><path d=" M10.93,-3.29 Q4.96,-0.45 0,0 Q4.96,0.45 10.93,3.29"></path></g></g><g class="arrow-line"><path class="connection real" stroke-dasharray="" d="  M509.5,149.97 L469.34,173.18" style="stroke: rgb(211, 34, 34); stroke-opacity: 1; stroke-width: 1px; fill: rgb(255, 255, 255); fill-opacity: 1;"></path><g stroke="rgb(211,34,34)" stroke-opacity="1" transform="matrix(0.8657634856957139,-0.500453381281421,0.500453381281421,0.8657634856957139,467.6072076055523,174.18081640711523)" style="stroke: rgb(211, 34, 34); stroke-width: 1px;"><path d=" M10.93,-3.29 Q4.96,-0.45 0,0 Q4.96,0.45 10.93,3.29"></path></g></g><g class="arrow-line"><path class="connection real" stroke-dasharray="" d="  M521.5,169 L478.05,204.7" style="stroke: rgb(211, 34, 34); stroke-opacity: 1; stroke-width: 1px; fill: rgb(255, 255, 255); fill-opacity: 1;"></path><g stroke="rgb(211,34,34)" stroke-opacity="1" transform="matrix(0.772733573497351,-0.6347305132022677,0.6347305132022677,0.772733573497351,476.5,205.9666748046875)" style="stroke: rgb(211, 34, 34); stroke-width: 1px;"><path d=" M10.93,-3.29 Q4.96,-0.45 0,0 Q4.96,0.45 10.93,3.29"></path></g></g><g class="arrow-line"><path class="connection real" stroke-dasharray="" d="  M130.5,211.4 L64.77,131.94" style="stroke: rgb(211, 34, 34); stroke-opacity: 1; stroke-width: 1px; fill: rgb(255, 255, 255); fill-opacity: 1;"></path><g stroke="rgb(211,34,34)" stroke-opacity="1" transform="matrix(0.6374239897486903,0.7705132427757887,-0.7705132427757887,0.6374239897486903,63.49999999999999,130.39999389648438)" style="stroke: rgb(211, 34, 34); stroke-width: 1px;"><path d=" M10.93,-3.29 Q4.96,-0.45 0,0 Q4.96,0.45 10.93,3.29"></path></g></g><g class="arrow-line"><path class="connection real" stroke-dasharray="" d="  M150.5,110.4 L56.47,92.77" style="stroke: rgb(211, 34, 34); stroke-opacity: 1; stroke-width: 1px; fill: rgb(255, 255, 255); fill-opacity: 1;"></path><g stroke="rgb(211,34,34)" stroke-opacity="1" transform="matrix(0.9828710781323793,0.18429444856233307,-0.18429444856233307,0.9828710781323793,54.5,92.39999389648438)" style="stroke: rgb(211, 34, 34); stroke-width: 1px;"><path d=" M10.93,-3.29 Q4.96,-0.45 0,0 Q4.96,0.45 10.93,3.29"></path></g></g><g class="arrow-line"><path class="connection real" stroke-dasharray="" d="  M251.5,76.4 L117.5,77.39" style="stroke: rgb(211, 34, 34); stroke-opacity: 1; stroke-width: 1px; fill: rgb(255, 255, 255); fill-opacity: 1;"></path><g stroke="rgb(211,34,34)" stroke-opacity="1" transform="matrix(0.9999731328638829,-0.007330317209459482,0.007330317209459482,0.9999731328638829,115.5,77.39999389648438)" style="stroke: rgb(211, 34, 34); stroke-width: 1px;"><path d=" M10.93,-3.29 Q4.96,-0.45 0,0 Q4.96,0.45 10.93,3.29"></path></g></g><g></g></g><g><g class="connection-group"><g class="arrow-line"><path class="connection real" stroke-dasharray="" d="  M186.46,251 L186.06,128" style="stroke: rgb(0, 0, 0); stroke-width: 1px; fill: none; fill-opacity: 1;"></path><g stroke="#000" transform="matrix(0.003316119501060024,0.9999945016606114,-0.9999945016606114,0.003316119501060024,186.04901960784315,126)" style="stroke: rgb(0, 0, 0); stroke-width: 1px;"><path d=" M10.93,-3.29 Q4.96,-0.45 0,0 Q4.96,0.45 10.93,3.29"></path></g></g></g><g class="connection-group"><g class="arrow-line"><path class="connection real" stroke-dasharray="" d="  M199,109.33 L399.02,83.61" style="stroke: rgb(0, 0, 0); stroke-width: 1px; fill: none; fill-opacity: 1;"></path><g stroke="#000" transform="matrix(-0.9918277757528405,0.12758394587554156,-0.12758394587554156,-0.9918277757528405,401.00000000000006,83.35033259423503)" style="stroke: rgb(0, 0, 0); stroke-width: 1px;"><path d=" M10.93,-3.29 Q4.96,-0.45 0,0 Q4.96,0.45 10.93,3.29"></path></g></g></g><g class="connection-group"><g class="arrow-line"><path class="connection real" stroke-dasharray="" d="  M200,253.08 L399.45,91.75" style="stroke: rgb(0, 0, 0); stroke-width: 1px; fill: none; fill-opacity: 1;"></path><g stroke="#000" transform="matrix(-0.777475366298641,0.6289133921286729,-0.6289133921286729,-0.777475366298641,401,90.49333333333334)" style="stroke: rgb(0, 0, 0); stroke-width: 1px;"><path d=" M10.93,-3.29 Q4.96,-0.45 0,0 Q4.96,0.45 10.93,3.29"></path></g></g></g><g class="connection-group"><g class="arrow-line"><path class="connection real" stroke-dasharray="" d="  M463,183.75 L553.27,131.13" style="stroke: rgb(0, 0, 0); stroke-width: 1px; fill: none; fill-opacity: 1;"></path><g stroke="#000" transform="matrix(-0.8639234171928347,0.5036232016357619,-0.5036232016357619,-0.8639234171928347,555.0000000000001,130.12107623318386)" style="stroke: rgb(0, 0, 0); stroke-width: 1px;"><path d=" M10.93,-3.29 Q4.96,-0.45 0,0 Q4.96,0.45 10.93,3.29"></path></g></g></g><g class="connection-group"><g class="arrow-line"><path class="connection real" stroke-dasharray="" d="  M467,205.55 L553.46,133.97" style="stroke: rgb(0, 0, 0); stroke-width: 1px; fill: none; fill-opacity: 1;"></path><g stroke="#000" transform="matrix(-0.7702906928909108,0.637692910769471,-0.637692910769471,-0.7702906928909108,555,132.69302325581396)" style="stroke: rgb(0, 0, 0); stroke-width: 1px;"><path d=" M10.93,-3.29 Q4.96,-0.45 0,0 Q4.96,0.45 10.93,3.29"></path></g></g></g><g class="connection-group"><g class="arrow-line"><path class="connection real" stroke-dasharray="" d="  M422,84.86 L553.07,120.61" style="stroke: rgb(0, 0, 0); stroke-width: 1px; fill: none; fill-opacity: 1;"></path><g stroke="#000" transform="matrix(-0.9647414015272168,-0.2631995976047483,0.2631995976047483,-0.9647414015272168,555,121.13636363636363)" style="stroke: rgb(0, 0, 0); stroke-width: 1px;"><path d=" M10.93,-3.29 Q4.96,-0.45 0,0 Q4.96,0.45 10.93,3.29"></path></g></g></g><g class="connection-group"><g class="arrow-line"><path class="connection real" stroke-dasharray="" d="  M41,96.12 L173.92,249.49" style="stroke: rgb(0, 0, 0); stroke-width: 1px; fill: none; fill-opacity: 1;"></path><g stroke="#000" transform="matrix(-0.6548727250613933,-0.7557391838264474,0.7557391838264474,-0.6548727250613933,175.23333333333335,251)" style="stroke: rgb(0, 0, 0); stroke-width: 1px;"><path d=" M10.93,-3.29 Q4.96,-0.45 0,0 Q4.96,0.45 10.93,3.29"></path></g></g></g><g class="connection-group"><g class="arrow-line"><path class="connection real" stroke-dasharray="" d="  M41,85.82 L171.03,108.4" style="stroke: rgb(0, 0, 0); stroke-width: 1px; fill: none; fill-opacity: 1;"></path><g stroke="#000" transform="matrix(-0.9852589874779215,-0.17106936486110197,0.17106936486110197,-0.9852589874779215,173.00000000000003,108.7427652733119)" style="stroke: rgb(0, 0, 0); stroke-width: 1px;"><path d=" M10.93,-3.29 Q4.96,-0.45 0,0 Q4.96,0.45 10.93,3.29"></path></g></g></g><g class="connection-group"><g class="arrow-line"><path class="connection real" stroke-dasharray="" d="  M41,83.94 L399,82.07" style="stroke: rgb(0, 0, 0); stroke-width: 1px; fill: none; fill-opacity: 1;"></path><g stroke="#000" transform="matrix(-0.9999862922474267,0.005235963831419621,-0.005235963831419621,-0.9999862922474267,401,82.05511811023621)" style="stroke: rgb(0, 0, 0); stroke-width: 1px;"><path d=" M10.93,-3.29 Q4.96,-0.45 0,0 Q4.96,0.45 10.93,3.29"></path></g></g></g></g><g></g><g></g></svg><diagram-editors><position-container data-rotation="0" data-skewx="0" data-flipx="false" data-anchor="left-top" style="left: 21px; top: 72px;"><dg-editor-container data-editor-id="de3765836829265585" class="no-border-on-print math-diagram-editor" style="border: 1px solid transparent; transform: translate(0%); font-size: 17px; font-family: Asana-Math, Asana;"><editarea class="diagram-editor non-wrap no-area-container" style="font-size: 1em;"><line class="" style="line-height: 1.2;"><baselineblock></baselineblock><block class="Normal">x</block><compositeblock dir="ltr" class="power-index-symbol-container power-index-symbol-container inline"><middle-base><inline></inline></middle-base><editarea-block class="index-value" style="line-height: 1.2; margin-top: -0.747899em;">i</editarea-block></compositeblock></line></editarea></dg-editor-container></position-container><position-container data-rotation="0" data-skewx="0" data-flipx="false" data-anchor="left-top" style="left: 402px; top: 67px;"><dg-editor-container data-editor-id="de6288382170746044" class="no-border-on-print math-diagram-editor" style="border: 1px solid transparent; transform: translate(0%); font-size: 17px; font-family: Asana-Math, Asana;"><editarea class="diagram-editor non-wrap no-area-container" style="font-size: 1em;"><line class="" style="line-height: 1.2;"><baselineblock></baselineblock><compositeblock dir="ltr" class="wide-hat-symbol ig-ex-br inline"><symbol style="display: block; width: 100%; position: relative; height: 0.529412em; margin-bottom: -0.176471em;"><svg style="position: absolute; left: 0px; top: 0px; display: block; width: 100%; height: 100%; overflow: visible;"><polyline points="0.00,8.06 6.66,3.62 13.32,8.06" stroke-width="1" fill="none" stroke-linejoin="bevel"></polyline></svg></symbol><editarea class="no-area-container" style="display: inline-flex;"><line class="" style="line-height: 1.2;"><baselineblock></baselineblock><block class="Normal">x</block><compositeblock dir="ltr" class="power-index-symbol-container power-index-symbol-container inline"><middle-base><inline></inline></middle-base><editarea-block class="index-value" style="line-height: 1.2; margin-top: -0.747899em;">i</editarea-block></compositeblock></line></editarea></compositeblock></line></editarea></dg-editor-container></position-container><position-container data-rotation="0" data-skewx="0" data-flipx="false" data-anchor="left-top" style="left: 174px; top: 252px;"><dg-editor-container data-editor-id="de6022134670949288" class="no-border-on-print math-diagram-editor" style="border: 1px solid transparent; transform: translate(0%); font-size: 17px; font-family: Asana-Math, Asana;"><editarea class="diagram-editor non-wrap no-area-container" style="font-size: 1em;"><line class="" style="line-height: 1.2;"><baselineblock></baselineblock><block class="Normal">𝜇</block><compositeblock dir="ltr" class="power-index-symbol-container power-index-symbol-container inline"><middle-base><inline></inline></middle-base><editarea-block class="index-value" style="line-height: 1.2; margin-top: -0.747899em;">B</editarea-block></compositeblock></line></editarea></dg-editor-container></position-container><position-container data-rotation="0" data-skewx="0" data-flipx="false" data-anchor="left-top" style="left: 174px; top: 97px;"><dg-editor-container data-editor-id="de9577823396415133" class="no-border-on-print math-diagram-editor" style="border: 1px solid transparent; transform: translate(0%); font-size: 17px; font-family: Asana-Math, Asana;"><editarea class="diagram-editor non-wrap no-area-container" style="font-size: 1em;"><line class="" style="line-height: 1.2;"><baselineblock></baselineblock><block class="Normal">𝜎</block><compositeblock dir="ltr" class="power-index-symbol-container power-index-symbol-container has-power inline"><editarea-block class="power-value" style="line-height: 1.2; margin-top: 0em; margin-bottom: -1.05378em;">2</editarea-block><middle-base><inline></inline></middle-base><editarea-block class="index-value" style="line-height: 1.2; margin-top: -0.60899em; margin-bottom: 0em;">B</editarea-block></compositeblock></line></editarea></dg-editor-container></position-container><position-container data-rotation="358.71" data-skewx="0" data-flipx="false" data-anchor="left-top" style="left: 282.402px; top: 100.911px; transform: rotate(358.71deg);"><dg-editor-container data-editor-id="de09903303082404202" class="no-border-on-print math-diagram-editor" style="border: 1px solid transparent; transform: translate(0%); font-size: 17px; font-family: Asana-Math, Asana;"><editarea class="diagram-editor non-wrap no-area-container" style="font-size: 1em;"><line class="" style="line-height: 1.2;"><baselineblock></baselineblock><block class="Normal">d𝜎</block><compositeblock dir="ltr" class="power-index-symbol-container power-index-symbol-container has-power inline"><editarea-block class="power-value" style="line-height: 1.2; margin-top: 0em; margin-bottom: -1.05378em;">2</editarea-block><middle-base><inline></inline></middle-base><editarea-block class="index-value" style="line-height: 1.2; margin-top: -0.60899em; margin-bottom: 0em;">B</editarea-block></compositeblock></line></editarea></dg-editor-container></position-container><position-container data-rotation="323.48" data-skewx="0" data-flipx="false" data-anchor="left-top" style="left: 237.46px; top: 230.427px; transform: rotate(323.48deg);"><dg-editor-container data-editor-id="de48481164267142185" class="no-border-on-print math-diagram-editor" style="border: 1px solid transparent; transform: translate(0%); font-size: 17px; font-family: Asana-Math, Asana;"><editarea class="diagram-editor non-wrap no-area-container" style="font-size: 1em;"><line class="" style="line-height: 1.2;"><baselineblock></baselineblock><opensymbolblock class="" type="parenthesis" style="height: 2.70588em;"><hidden-span style="margin-top: 0.470588em; align-self: flex-start;">(</hidden-span><svg style="width: 0.5em;"><path d=" M 6.27 1.70 c 0.00 -0.06 -0.04 -0.08 -0.08 -0.08 c -0.03 0.00 -0.06 0.01 -0.08 0.02 c -2.55 1.34 -4.65 3.73 -4.65 9.40 v 0.60 h 1.53 v -0.60 c 0.00 -3.23 0.64 -7.03 3.31 -9.06 c 0.12 -0.09 0.13 -0.19 0.13 -0.28 z   M 1.44 11.64 v 22.72 h 1.53 v -22.72 z" stroke="none"></path><path d=" M 6.27 44.30 c 0.00 0.06 -0.04 0.08 -0.08 0.08 c -0.03 0.00 -0.06 -0.01 -0.08 -0.02 c -2.55 -1.34 -4.65 -3.73 -4.65 -9.40 v -0.60 h 1.53 v 0.60 c 0.00 3.23 0.64 7.03 3.31 9.06 c 0.12 0.09 0.13 0.19 0.13 0.28 z" stroke="none"></path></svg></opensymbolblock><compositeblock dir="ltr" class="summation-like-symbol limit-type non-limit-kind  inline"><editarea class="from no-area-container" style="margin-bottom: -0.588235em; margin-left: 0.9em;"><line class="" style="margin-bottom: -0.168067em; line-height: 1.2;"><baselineblock></baselineblock><block>m</block></line></editarea><symbol class="" style="font-family: Asana-Math, Asana; font-style: normal; font-weight: normal;"><span>∑</span></symbol><editarea class="to to-summation no-area-container" style="margin-top: -0.470588em; margin-left: 0.9em;"><line class="" style="line-height: 1.2;"><baselineblock></baselineblock><block>i=1</block></line></editarea></compositeblock><block class="Normal">dx</block><compositeblock dir="ltr" class="power-index-symbol-container power-index-symbol-container inline"><middle-base><inline></inline></middle-base><editarea-block class="index-value" style="line-height: 1.2; margin-top: -0.747899em;">i</editarea-block></compositeblock><block class="Punctuation">.</block><compositeblock dir="ltr" class="fraction-symbol smaller frac-inline inline"><editarea-line class=" frac-edit-area enumerator" style="line-height: 1.2; margin-bottom: -0.411765em; padding-top: 0.0588235em;"><baselineblock></baselineblock><block>-1</block></editarea-line><div class="frac-line"><inline style="vertical-align: 0.35em; border-bottom: 1px solid;"></inline></div><editarea-line class=" frac-edit-area denominator" style="line-height: 1.2; margin-top: -0.588235em; margin-bottom: -0.0588235em;"><baselineblock></baselineblock><compositeblock dir="ltr" class="sqrt-symbol inline" style="padding-top: 0.235294em;"><sqrt-edit><editarea-line class=" edit-area" style="line-height: 1.2; margin-top: 0.0784314em;"><baselineblock></baselineblock><block class="Normal">𝜎</block><compositeblock dir="ltr" class="power-index-symbol-container power-index-symbol-container has-power inline"><editarea-block class="power-value" style="line-height: 1.2; margin-top: 0em; margin-bottom: -0.997759em;">2</editarea-block><middle-base><inline></inline></middle-base><editarea-block class="index-value" style="line-height: 1.2; margin-top: -0.60899em; margin-bottom: -0.112045em;">B</editarea-block></compositeblock><block class="Binary">+</block><block class="Normal">𝜖</block></editarea-line><sqrt-symbol-line><svg style="stroke: none;"><polygon points="0.2635658914728682,10.766851309842844 3.591085271317829,8.987781542400985 7.13910705591785,16.5123301580503 12.272286821705425,0 45.93333435058594,0 45.93333435058594,0.7906976744186061 12.85379080180249,0.7906976744186061 6.8856589147286815,19.991657511393228 2.322674418604651,10.437393945501759 0.4777131782945736,11.129254410618039"></polygon></svg></sqrt-symbol-line></sqrt-edit></compositeblock><compositeblock dir="ltr" class="power-index-symbol-container power-index-symbol-container has-power inline"><editarea-block class="power-value" style="line-height: 1.2; margin-bottom: -0.424182em; display: inline-block; height: 1.2em; width: 0.5em; vertical-align: -0.17em;"></editarea-block><middle-base><inline></inline></middle-base></compositeblock></editarea-line></compositeblock><closesymbolblock class="" type="parenthesis" style="height: 2.70588em;"><hidden-span style="margin-top: 0.470588em; align-self: flex-start;">)</hidden-span><svg style="width: 0.5em;"><path d=" M 1.75 1.70 c 0.00 -0.06 0.04 -0.08 0.08 -0.08 c 0.03 0.00 0.06 0.01 0.08 0.02 c 2.55 1.34 4.65 3.73 4.65 9.40 v 0.60 h -1.53 v -0.60 c 0.00 -3.23 -0.64 -7.03 -3.31 -9.06 c -0.12 -0.09 -0.13 -0.19 -0.13 -0.28 z  M 6.58 11.64 v 22.72 h -1.53 v -22.72 z" stroke="none"></path><path d=" M 1.75 44.30 c 0.00 0.06 0.04 0.08 0.08 0.08 c 0.03 0.00 0.06 -0.01 0.08 -0.02 c 2.55 -1.34 4.65 -3.73 4.65 -9.40 v -0.60 h -1.53 v 0.60 c 0.00 3.23 -0.64 7.03 -3.31 9.06 c -0.12 0.09 -0.13 0.19 -0.13 0.28 z" stroke="none"></path></svg></closesymbolblock></line></editarea></dg-editor-container></position-container><position-container data-rotation="268.93" data-skewx="0" data-flipx="false" data-anchor="left-top" style="left: 150.724px; top: 237.397px; transform: rotate(268.93deg);"><dg-editor-container data-editor-id="de045548921539005804" class="no-border-on-print math-diagram-editor" style="border: 1px solid transparent; transform: translate(0%); font-size: 17px; font-family: Asana-Math, Asana;"><editarea class="diagram-editor non-wrap no-area-container" style="font-size: 0.7em;"><line class="" style="line-height: 1.2;"><baselineblock></baselineblock><block class="Normal">d𝜎</block><compositeblock dir="ltr" class="power-index-symbol-container power-index-symbol-container has-power inline"><editarea-block class="power-value" style="line-height: 1.2; margin-top: 0em; margin-bottom: -1.00576em;">2</editarea-block><middle-base><inline></inline></middle-base><editarea-block class="index-value" style="line-height: 1.2; margin-top: -0.60899em; margin-bottom: 0em;">B</editarea-block></compositeblock><block class="Punctuation">.</block><compositeblock dir="ltr" class="fraction-symbol smaller frac-inline inline"><editarea-line class=" frac-edit-area enumerator" style="line-height: 1.2; margin-bottom: -0.420168em; padding-top: 0.0840336em;"><baselineblock></baselineblock><block>1</block></editarea-line><div class="frac-line"><inline style="vertical-align: 0.35em; border-bottom: 1px solid;"></inline></div><editarea-line class=" frac-edit-area denominator" style="margin-bottom: -0.0840336em; line-height: 1.2; margin-top: -0.588235em;"><baselineblock></baselineblock><block>m</block></editarea-line></compositeblock><compositeblock dir="ltr" class="summation-like-symbol limit-type non-limit-kind  inline"><editarea class="from no-area-container" style="margin-bottom: -0.588235em; margin-left: 0.9em;"><line class="" style="margin-bottom: -0.120048em; line-height: 1.2;"><baselineblock></baselineblock><block>m</block></line></editarea><symbol class="" style="font-family: Asana-Math, Asana; font-style: normal; font-weight: normal;"><span>∑</span></symbol><editarea class="to to-summation no-area-container" style="margin-top: -0.420168em; margin-left: 0.9em;"><line class="" style="line-height: 1.2;"><baselineblock></baselineblock><block>i = 1</block></line></editarea></compositeblock><block class="Binary">-</block><block class="Normal">2</block><opensymbolblock class="normal" type="parenthesis"><bracket-span>(</bracket-span></opensymbolblock><block class="Normal">x</block><compositeblock dir="ltr" class="power-index-symbol-container power-index-symbol-container inline"><middle-base><inline></inline></middle-base><editarea-block class="index-value" style="line-height: 1.2; margin-top: -0.747899em;">i</editarea-block></compositeblock><block class="Binary">-</block><block class="Normal">𝜇</block><compositeblock dir="ltr" class="power-index-symbol-container power-index-symbol-container inline"><middle-base><inline></inline></middle-base><editarea-block class="index-value" style="line-height: 1.2; margin-top: -0.747899em;">B</editarea-block></compositeblock><closesymbolblock class="normal" type="parenthesis"><bracket-span>)</bracket-span></closesymbolblock></line></editarea></dg-editor-container></position-container><position-container data-rotation="0" data-skewx="0" data-flipx="false" data-anchor="left-top" style="left: 450px; top: 202px;"><dg-editor-container data-editor-id="de4478707348731865" class="no-border-on-print math-diagram-editor" style="border: 1px solid transparent; transform: translate(0%); font-size: 17px; font-family: Asana-Math, Asana;"><editarea class="diagram-editor non-wrap no-area-container" style="font-size: 1em;"><line class="" style="line-height: 1.2;"><baselineblock></baselineblock><block class="Normal">𝛾</block></line></editarea></dg-editor-container></position-container><position-container data-rotation="0" data-skewx="0" data-flipx="false" data-anchor="left-top" style="left: 446px; top: 178px;"><dg-editor-container data-editor-id="de7075710951816159" class="no-border-on-print math-diagram-editor" style="border: 1px solid transparent; transform: translate(0%); font-size: 17px; font-family: Asana-Math, Asana;"><editarea class="diagram-editor non-wrap no-area-container" style="font-size: 1em;"><line class="" style="line-height: 1.2;"><baselineblock></baselineblock><block class="Normal">𝛽</block></line></editarea></dg-editor-container></position-container><position-container data-rotation="0" data-skewx="0" data-flipx="false" data-anchor="left-top" style="left: 556px; top: 112px;"><dg-editor-container data-editor-id="de2955770286943744" class="no-border-on-print math-diagram-editor" style="border: 1px solid transparent; transform: translate(0%); font-size: 17px; font-family: Asana-Math, Asana;"><editarea class="diagram-editor non-wrap no-area-container" style="font-size: 1em;"><line class="" style="line-height: 1.2;"><baselineblock></baselineblock><block class="Normal">y</block><compositeblock dir="ltr" class="power-index-symbol-container power-index-symbol-container inline"><middle-base><inline></inline></middle-base><editarea-block class="index-value" style="line-height: 1.2; margin-top: -0.747899em;">i</editarea-block></compositeblock></line></editarea></dg-editor-container></position-container><position-container data-rotation="0" data-skewx="0" data-flipx="false" data-anchor="left-top" style="left: 594px; top: 146px;"><dg-editor-container data-editor-id="de0698920572432874" class="no-border-on-print math-diagram-editor" style="border: 1px solid transparent; transform: translate(0%); font-size: 17px; font-family: Asana-Math, Asana;"><editarea class="diagram-editor non-wrap no-area-container" style="font-size: 1em;"><line class="" style="line-height: 1.2;"><baselineblock></baselineblock><block class="Normal">dy</block><compositeblock dir="ltr" class="power-index-symbol-container power-index-symbol-container inline"><middle-base><inline></inline></middle-base><editarea-block class="index-value" style="line-height: 1.2; margin-top: -0.747899em;">i</editarea-block></compositeblock></line></editarea></dg-editor-container></position-container><position-container data-rotation="0" data-skewx="0" data-flipx="false" data-anchor="left-top" style="left: 495px; top: 72px;"><dg-editor-container data-editor-id="de5723009515354088" class="no-border-on-print math-diagram-editor" style="border: 1px solid transparent; transform: translate(0%); font-size: 17px; font-family: Asana-Math, Asana;"><editarea class="diagram-editor non-wrap no-area-container" style="font-size: 1em;"><line class="" style="line-height: 1.2;"><baselineblock></baselineblock><block class="Normal">d</block><compositeblock dir="ltr" class="wide-hat-symbol ig-ex-br inline"><symbol style="display: block; width: 100%; position: relative; height: 0.529412em; margin-bottom: -0.176471em;"><svg style="position: absolute; left: 0px; top: 0px; display: block; width: 100%; height: 100%; overflow: visible;"><polyline points="0.00,8.06 6.66,3.62 13.32,8.06" stroke-width="1" fill="none" stroke-linejoin="bevel"></polyline></svg></symbol><editarea class="no-area-container" style="display: inline-flex;"><line class="" style="line-height: 1.2;"><baselineblock></baselineblock><block class="Normal">x</block><compositeblock dir="ltr" class="power-index-symbol-container power-index-symbol-container inline"><middle-base><inline></inline></middle-base><editarea-block class="index-value" style="line-height: 1.2; margin-top: -0.747899em;">i</editarea-block></compositeblock></line></editarea></compositeblock></line></editarea></dg-editor-container></position-container><position-container data-rotation="327.88" data-skewx="0" data-flipx="false" data-anchor="left-top" style="left: 466.538px; top: 145.342px; transform: rotate(327.88deg);"><dg-editor-container data-editor-id="de5617225240631004" class="no-border-on-print math-diagram-editor" style="border: 1px solid transparent; transform: translate(0%); font-size: 17px; font-family: Asana-Math, Asana;"><editarea class="diagram-editor non-wrap no-area-container" style="font-size: 1em;"><line class="" style="line-height: 1.2;"><baselineblock></baselineblock><block class="Normal">d𝛽</block><block class="Normal"> </block></line></editarea></dg-editor-container></position-container><position-container data-rotation="319.54" data-skewx="0" data-flipx="false" data-anchor="left-top" style="left: 497.071px; top: 192.842px; transform: rotate(319.54deg);"><dg-editor-container data-editor-id="de2677173467357956" class="no-border-on-print math-diagram-editor" style="border: 1px solid transparent; transform: translate(0%); font-size: 17px; font-family: Asana-Math, Asana;"><editarea class="diagram-editor non-wrap no-area-container" style="font-size: 1em;"><line class="" style="line-height: 1.2;"><baselineblock></baselineblock><block class="Normal">d𝛾</block></line></editarea></dg-editor-container></position-container><position-container data-rotation="9.2" data-skewx="0" data-flipx="false" data-anchor="left-top" style="left: 66.7562px; top: 95.1631px; transform: rotate(9.2deg);"><dg-editor-container data-editor-id="de38957033824852516" class="no-border-on-print math-diagram-editor" style="border: 1px solid transparent; transform: translate(0%); font-size: 17px; font-family: Asana-Math, Asana;"><editarea class="diagram-editor non-wrap no-area-container" style="font-size: 0.7em;"><line class="" style="line-height: 1.2;"><baselineblock></baselineblock><block class="Normal">d𝜎</block><compositeblock dir="ltr" class="power-index-symbol-container power-index-symbol-container has-power inline"><editarea-block class="power-value" style="line-height: 1.2; margin-top: 0em; margin-bottom: -1.00576em;">2</editarea-block><middle-base><inline></inline></middle-base><editarea-block class="index-value" style="line-height: 1.2; margin-top: -0.60899em; margin-bottom: 0em;">B</editarea-block></compositeblock><block class="Punctuation">.</block><opensymbolblock class="" type="parenthesis" style="height: 2.18487em;"><hidden-span style="margin-top: 0.420168em; align-self: flex-start;">(</hidden-span><svg style="width: 0.5em;"><path d=" M 4.39 1.19 c 0.00 -0.04 -0.03 -0.06 -0.06 -0.06 c -0.02 0.00 -0.04 0.01 -0.06 0.02 c -1.78 0.94 -3.25 2.61 -3.25 6.58 v 0.42 h 1.07 v -0.42 c 0.00 -2.26 0.45 -4.92 2.32 -6.34 c 0.09 -0.07 0.09 -0.13 0.09 -0.20 z   M 1.01 8.15 v 9.70 h 1.07 v -9.70 z" stroke="none"></path><path d=" M 4.39 24.81 c 0.00 0.04 -0.03 0.06 -0.06 0.06 c -0.02 0.00 -0.04 -0.01 -0.06 -0.02 c -1.78 -0.94 -3.25 -2.61 -3.25 -6.58 v -0.42 h 1.07 v 0.42 c 0.00 2.26 0.45 4.92 2.32 6.34 c 0.09 0.07 0.09 0.13 0.09 0.20 z" stroke="none"></path></svg></opensymbolblock><compositeblock dir="ltr" class="fraction-symbol smaller frac-inline inline"><editarea-line class=" frac-edit-area enumerator" style="line-height: 1.2; margin-bottom: -0.420168em; padding-top: 0.0840336em;"><baselineblock></baselineblock><block>1</block></editarea-line><div class="frac-line"><inline style="vertical-align: 0.35em; border-bottom: 1px solid;"></inline></div><editarea-line class=" frac-edit-area denominator" style="margin-bottom: -0.0840336em; line-height: 1.2; margin-top: -0.588235em;"><baselineblock></baselineblock><block>m</block></editarea-line></compositeblock><block class="Normal">2</block><opensymbolblock class="normal" type="parenthesis"><bracket-span>(</bracket-span></opensymbolblock><block class="Normal">x</block><compositeblock dir="ltr" class="power-index-symbol-container power-index-symbol-container inline"><middle-base><inline></inline></middle-base><editarea-block class="index-value" style="line-height: 1.2; margin-top: -0.747899em;">i</editarea-block></compositeblock><block class="Binary">-</block><block class="Normal">𝜇</block><compositeblock dir="ltr" class="power-index-symbol-container power-index-symbol-container inline"><middle-base><inline></inline></middle-base><editarea-block class="index-value" style="line-height: 1.2; margin-top: -0.747899em;">B</editarea-block></compositeblock><closesymbolblock class="normal" type="parenthesis"><bracket-span>)</bracket-span></closesymbolblock><closesymbolblock class="" type="parenthesis" style="height: 2.18487em;"><hidden-span style="margin-top: 0.420168em; align-self: flex-start;">)</hidden-span><svg style="width: 0.5em;"><path d=" M 1.22 1.19 c 0.00 -0.04 0.03 -0.06 0.06 -0.06 c 0.02 0.00 0.04 0.01 0.06 0.02 c 1.78 0.94 3.25 2.61 3.25 6.58 v 0.42 h -1.07 v -0.42 c 0.00 -2.26 -0.45 -4.92 -2.32 -6.34 c -0.09 -0.07 -0.09 -0.13 -0.09 -0.20 z  M 4.61 8.15 v 9.70 h -1.07 v -9.70 z" stroke="none"></path><path d=" M 1.22 24.81 c 0.00 0.04 0.03 0.06 0.06 0.06 c 0.02 0.00 0.04 -0.01 0.06 -0.02 c 1.78 -0.94 3.25 -2.61 3.25 -6.58 v -0.42 h -1.07 v 0.42 c 0.00 2.26 -0.45 4.92 -2.32 6.34 c -0.09 0.07 -0.09 0.13 -0.09 0.20 z" stroke="none"></path></svg></closesymbolblock></line></editarea></dg-editor-container></position-container><position-container data-rotation="49.89" data-skewx="0" data-flipx="false" data-anchor="left-top" style="left: 81.7787px; top: 150.875px; transform: rotate(49.89deg);"><dg-editor-container data-editor-id="de6811765901974206" class="no-border-on-print math-diagram-editor" style="border: 1px solid transparent; transform: translate(0%); font-size: 17px; font-family: Asana-Math, Asana;"><editarea class="diagram-editor non-wrap no-area-container" style="font-size: 1em;"><line class="" style="line-height: 1.2;"><baselineblock></baselineblock><block class="Normal">d𝜇</block><compositeblock dir="ltr" class="power-index-symbol-container power-index-symbol-container has-power inline"><editarea-block class="power-value" style="line-height: 1.2; margin-top: 0em; margin-bottom: -1.05378em; display: inline-block; height: 1.2em; width: 0.5em; vertical-align: -0.17em;"></editarea-block><middle-base><inline></inline></middle-base><editarea-block class="index-value" style="line-height: 1.2; margin-top: -0.60899em; margin-bottom: 0em;">B</editarea-block></compositeblock><block class="Punctuation">.</block><compositeblock dir="ltr" class="fraction-symbol smaller frac-inline inline"><editarea-line class=" frac-edit-area enumerator" style="line-height: 1.2; margin-bottom: -0.411765em; padding-top: 0.0588235em;"><baselineblock></baselineblock><block>1</block></editarea-line><div class="frac-line"><inline style="vertical-align: 0.35em; border-bottom: 1px solid;"></inline></div><editarea-line class=" frac-edit-area denominator" style="margin-bottom: -0.0588235em; line-height: 1.2; margin-top: -0.588235em;"><baselineblock></baselineblock><block>m</block></editarea-line></compositeblock></line></editarea></dg-editor-container></position-container><position-container data-rotation="358.71" data-skewx="0" data-flipx="false" data-anchor="left-top" style="left: 135.402px; top: 22.9113px; transform: rotate(358.71deg);"><dg-editor-container data-editor-id="de6277468682870037" class="no-border-on-print math-diagram-editor" style="border: 1px solid transparent; transform: translate(0%); font-size: 17px; font-family: Asana-Math, Asana;"><editarea class="diagram-editor non-wrap no-area-container" style="font-size: 1em;"><line class="" style="line-height: 1.2;"><baselineblock></baselineblock><block class="Normal">d</block><compositeblock dir="ltr" class="wide-hat-symbol ig-ex-br inline"><symbol style="display: block; width: 100%; position: relative; height: 0.529412em; margin-bottom: -0.176471em;"><svg style="position: absolute; left: 0px; top: 0px; display: block; width: 100%; height: 100%; overflow: visible;"><polyline points="0.00,8.06 6.66,3.62 13.32,8.06" stroke-width="1" fill="none" stroke-linejoin="bevel"></polyline></svg></symbol><editarea class="no-area-container" style="display: inline-flex;"><line class="" style="line-height: 1.2;"><baselineblock></baselineblock><block class="Normal">x</block><compositeblock dir="ltr" class="power-index-symbol-container power-index-symbol-container inline"><middle-base><inline></inline></middle-base><editarea-block class="index-value" style="line-height: 1.2; margin-top: -0.747899em;">i</editarea-block></compositeblock></line></editarea></compositeblock><block class="Punctuation">.</block><opensymbolblock class="" type="parenthesis" style="height: 2.70588em;"><hidden-span style="margin-top: 0.411765em; align-self: flex-start;">(</hidden-span><svg style="width: 0.5em;"><path d=" M 6.27 1.70 c 0.00 -0.06 -0.04 -0.08 -0.08 -0.08 c -0.03 0.00 -0.06 0.01 -0.08 0.02 c -2.55 1.34 -4.65 3.73 -4.65 9.40 v 0.60 h 1.53 v -0.60 c 0.00 -3.23 0.64 -7.03 3.31 -9.06 c 0.12 -0.09 0.13 -0.19 0.13 -0.28 z   M 1.44 11.64 v 22.72 h 1.53 v -22.72 z" stroke="none"></path><path d=" M 6.27 44.30 c 0.00 0.06 -0.04 0.08 -0.08 0.08 c -0.03 0.00 -0.06 -0.01 -0.08 -0.02 c -2.55 -1.34 -4.65 -3.73 -4.65 -9.40 v -0.60 h 1.53 v 0.60 c 0.00 3.23 0.64 7.03 3.31 9.06 c 0.12 0.09 0.13 0.19 0.13 0.28 z" stroke="none"></path></svg></opensymbolblock><compositeblock dir="ltr" class="fraction-symbol smaller frac-inline inline"><editarea-line class=" frac-edit-area enumerator" style="line-height: 1.2; margin-bottom: -0.411765em; padding-top: 0.0588235em;"><baselineblock></baselineblock><block>1</block></editarea-line><div class="frac-line"><inline style="vertical-align: 0.35em; border-bottom: 1px solid;"></inline></div><editarea-line class=" frac-edit-area denominator" style="line-height: 1.2; margin-top: -0.588235em; margin-bottom: -0.0588235em;"><baselineblock></baselineblock><compositeblock dir="ltr" class="sqrt-symbol inline" style="padding-top: 0.235294em;"><sqrt-edit><editarea-line class=" edit-area" style="line-height: 1.2; margin-top: 0.0784314em;"><baselineblock></baselineblock><block class="Normal">𝜎</block><compositeblock dir="ltr" class="power-index-symbol-container power-index-symbol-container has-power inline"><editarea-block class="power-value" style="line-height: 1.2; margin-top: 0em; margin-bottom: -0.997759em;">2</editarea-block><middle-base><inline></inline></middle-base><editarea-block class="index-value" style="line-height: 1.2; margin-top: -0.60899em; margin-bottom: -0.112045em;">B</editarea-block></compositeblock><block class="Binary">+</block><block class="Normal">𝜖</block></editarea-line><sqrt-symbol-line><svg style="stroke: none;"><polygon points="0.2635658914728682,10.766866568631906 3.591085271317829,8.987796801190047 7.139106581004326,16.51234440965561 12.272286821705425,0 45.93333435058594,0 45.93333435058594,0.7906976744186061 12.853790881587008,0.7906976744186061 6.8856589147286815,19.99167277018229 2.322674418604651,10.437409204290821 0.4777131782945736,11.129269669407101"></polygon></svg></sqrt-symbol-line></sqrt-edit></compositeblock><compositeblock dir="ltr" class="power-index-symbol-container power-index-symbol-container has-power inline"><editarea-block class="power-value" style="line-height: 1.2; margin-bottom: -0.424182em; display: inline-block; height: 1.2em; width: 0.5em; vertical-align: -0.17em;"></editarea-block><middle-base><inline></inline></middle-base></compositeblock></editarea-line></compositeblock><closesymbolblock class="" type="parenthesis" style="height: 2.70588em;"><hidden-span style="margin-top: 0.411765em; align-self: flex-start;">)</hidden-span><svg style="width: 0.5em;"><path d=" M 1.75 1.70 c 0.00 -0.06 0.04 -0.08 0.08 -0.08 c 0.03 0.00 0.06 0.01 0.08 0.02 c 2.55 1.34 4.65 3.73 4.65 9.40 v 0.60 h -1.53 v -0.60 c 0.00 -3.23 -0.64 -7.03 -3.31 -9.06 c -0.12 -0.09 -0.13 -0.19 -0.13 -0.28 z  M 6.58 11.64 v 22.72 h -1.53 v -22.72 z" stroke="none"></path><path d=" M 1.75 44.30 c 0.00 0.06 0.04 0.08 0.08 0.08 c 0.03 0.00 0.06 -0.01 0.08 -0.02 c 2.55 -1.34 4.65 -3.73 4.65 -9.40 v -0.60 h -1.53 v 0.60 c 0.00 3.23 -0.64 7.03 -3.31 9.06 c -0.12 0.09 -0.13 0.19 -0.13 0.28 z" stroke="none"></path></svg></closesymbolblock></line></editarea></dg-editor-container></position-container></diagram-editors></zoom-region><svg style="position: absolute; width: 100%; height: 100%; overflow: visible; left: 0px; top: 0px; pointer-events: none;"></svg></clip-region></math-diagram></compositeblock></blocks></line></area-container></editarea><div></div></math-edit-container></math-type></editor-container></body></html>
