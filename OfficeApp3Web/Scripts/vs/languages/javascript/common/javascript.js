/*!-----------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Version: 0.1.0(6c0fe2014e7a7d596ac1af21f25bf2fc17da8a75)
 * Released under the MIT license
 * https://github.com/Microsoft/vscode/blob/master/LICENSE.txt
 *-----------------------------------------------------------*/
define("vs/languages/javascript/common/javascript.extensions",["require","exports","vs/platform/platform","vs/languages/typescript/common/typescript"],function(e,t,o,r){"use strict";var n;!function(e){function t(t,o){e.ProjectResolver.addExtraLib(t,o)}function o(t){e.ProjectResolver.setCompilerOptions(t)}e.ProjectResolver=new r.DefaultProjectResolver,e.addExtraLib=t,e.setCompilerOptions=o}(n=t.Defaults||(t.Defaults={}));var s;!function(e){function t(e){n=e}function r(){return n}e.Identifier="javascript",o.Registry.add(e.Identifier,e);var n;e.setProjectResolver=t,e.getProjectResolver=r}(s=t.Extensions||(t.Extensions={}))});var __extends=this&&this.__extends||function(e,t){function o(){this.constructor=e}for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r]);e.prototype=null===t?Object.create(t):(o.prototype=t.prototype,new o)},__decorate=this&&this.__decorate||function(e,t,o,r){var n,s=arguments.length,i=3>s?t:null===r?r=Object.getOwnPropertyDescriptor(t,o):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,o,r);else for(var a=e.length-1;a>=0;a--)(n=e[a])&&(i=(3>s?n(i):s>3?n(t,o,i):n(t,o))||i);return s>3&&i&&Object.defineProperty(t,o,i),i},__param=this&&this.__param||function(e,t){return function(o,r){t(o,r,e)}};define("vs/languages/javascript/common/javascript",["require","exports","vs/languages/typescript/common/typescriptMode","vs/editor/common/modes","vs/languages/javascript/common/javascript.extensions","vs/editor/common/modes/abstractMode","vs/platform/thread/common/thread","vs/platform/instantiation/common/instantiation","vs/platform/telemetry/common/telemetry","vs/editor/common/modes/supports/richEditSupport","vs/editor/common/modes/supports/declarationSupport","vs/editor/common/modes/supports/referenceSupport","vs/editor/common/modes/supports/parameterHintsSupport","vs/editor/common/modes/supports/suggestSupport"],function(e,t,o,r,n,s,i,a,c,p,u,d,m,l){"use strict";var f=o.tokenization,g=function(e){function t(t,o,n,i){var a=this;e.call(this,t,o,n,i),this.tokenizationSupport=f.createTokenizationSupport(this,f.Language.EcmaScript5),this.referenceSupport=new d.ReferenceSupport(this.getId(),{tokens:[],findReferences:function(e,t,o){return a.findReferences(e,t,o)}}),this.declarationSupport=new u.DeclarationSupport(this.getId(),{tokens:[],findDeclaration:function(e,t){return a.findDeclaration(e,t)}}),this.parameterHintsSupport=new m.ParameterHintsSupport(this.getId(),{triggerCharacters:["(",","],excludeTokens:["string.js","string.escape.js"],getParameterHints:function(e,t){return a.getParameterHints(e,t)}}),this.richEditSupport=new p.RichEditSupport(this.getId(),null,{wordPattern:s.createWordRegExp("$"),comments:{lineComment:"//",blockComment:["/*","*/"]},brackets:[["{","}"],["[","]"],["(",")"]],onEnterRules:[{beforeText:/^\s*\/\*\*(?!\/)([^\*]|\*(?!\/))*$/,afterText:/^\s*\*\/$/,action:{indentAction:r.IndentAction.IndentOutdent,appendText:" * "}},{beforeText:/^\s*\/\*\*(?!\/)([^\*]|\*(?!\/))*$/,action:{indentAction:r.IndentAction.None,appendText:" * "}},{beforeText:/^(\t|(\ \ ))*\ \*(\ ([^\*]|\*(?!\/))*)?$/,action:{indentAction:r.IndentAction.None,appendText:"* "}},{beforeText:/^(\t|(\ \ ))*\ \*\/\s*$/,action:{indentAction:r.IndentAction.None,removeText:1}}],__electricCharacterSupport:{docComment:{scope:"comment.doc",open:"/**",lineStart:" * ",close:" */"}},__characterPairSupport:{autoClosingPairs:[{open:"{",close:"}"},{open:"[",close:"]"},{open:"(",close:")"},{open:'"',close:'"',notIn:["string"]},{open:"'",close:"'",notIn:["string","comment"]}]}}),this.suggestSupport=new l.SuggestSupport(this.getId(),{triggerCharacters:["."],excludeTokens:["string","comment","number","numeric"],suggest:function(e,t){return a.suggest(e,t)},getSuggestionDetails:function(e,t,o){return a.getSuggestionDetails(e,t,o)}})}return __extends(t,e),t.prototype._createModeWorkerManager=function(e,t){return new s.ModeWorkerManager(e,"vs/languages/javascript/common/javascriptWorker","JavaScriptWorker","vs/languages/typescript/common/typescriptWorker2",t)},t.prototype._getProjectResolver=function(){return n.Extensions.getProjectResolver()||n.Defaults.ProjectResolver},t.prototype._shouldBeValidated=function(e){return e.getMode()===this||/\.(d\.ts|js)$/.test(e.getAssociatedResource().fsPath)},Object.defineProperty(t.prototype,"filter",{get:function(){},enumerable:!0,configurable:!0}),t=__decorate([__param(1,a.IInstantiationService),__param(2,i.IThreadService),__param(3,c.ITelemetryService)],t)}(o.TypeScriptMode);t.JSMode=g});
//# sourceMappingURL=https://ticino.blob.core.windows.net/sourcemaps/6c0fe2014e7a7d596ac1af21f25bf2fc17da8a75/vs\languages\javascript\common\javascript.js.map