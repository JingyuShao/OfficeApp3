/*!-----------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Version: 0.1.0(6c0fe2014e7a7d596ac1af21f25bf2fc17da8a75)
 * Released under the MIT license
 * https://github.com/Microsoft/vscode/blob/master/LICENSE.txt
 *-----------------------------------------------------------*/
define("vs/languages/typescript/common/typescript",["require","exports","vs/base/common/winjs.base","vs/platform/platform","vs/base/common/uri"],function(e,t,s,i,n){"use strict";function o(e){return"string"==typeof e?0===e.indexOf("ts://defaultlib"):"ts"===e.scheme&&"defaultlib"===e.authority}!function(e){e[e.Changed=0]="Changed",e[e.Added=1]="Added",e[e.Removed=2]="Removed"}(t.ChangeKind||(t.ChangeKind={}));var r=t.ChangeKind;t.defaultLib=n["default"].create("ts","defaultlib","/vs/text!vs/languages/typescript/common/lib/lib.d.ts"),t.defaultLibES6=n["default"].create("ts","defaultlib","/vs/text!vs/languages/typescript/common/lib/lib.es6.d.ts"),t.isDefaultLib=o,t.virtualProjectResource=n["default"].create("ts","projects","/virtual/1");var a=function(){function e(){this._needsProjectUpdate=!1,this._fileChanges=[],this._projectChange={kind:r.Changed,resource:t.virtualProjectResource,files:[],options:void 0}}return e.prototype.setConsumer=function(e){this._consumer=e},e.prototype.resolveProjects=function(){var e=[];return this._fileChanges.length&&(e.push(this._consumer.acceptFileChanges(this._fileChanges.slice(0))),this._fileChanges.length=0),this._needsProjectUpdate&&(e.push(this._consumer.acceptProjectChanges([this._projectChange])),this._needsProjectUpdate=!1),s.Promise.join(e)},e.prototype.resolveFiles=function(){},e.prototype.addExtraLib=function(e,t){var s=t?n["default"].file(t):n["default"].create("extralib",void 0,Date.now().toString());this._needsProjectUpdate=!0,this._projectChange.files.push(s),this._fileChanges.push({kind:r.Added,resource:s,content:e})},e.prototype.setCompilerOptions=function(e){this._needsProjectUpdate=!0,this._projectChange.options=e},e}();t.DefaultProjectResolver=a;var c;!function(e){function t(t,s){e.ProjectResolver.addExtraLib(t,s)}function s(t){e.ProjectResolver.setCompilerOptions(t)}e.ProjectResolver=new a,e.addExtraLib=t,e.setCompilerOptions=s}(c=t.Defaults||(t.Defaults={}));var u;!function(e){function t(e){n=e}function s(){return n}e.Identifier="typescript",i.Registry.add(e.Identifier,e);var n;e.setProjectResolver=t,e.getProjectResolver=s}(u=t.Extensions||(t.Extensions={}))});
//# sourceMappingURL=https://ticino.blob.core.windows.net/sourcemaps/6c0fe2014e7a7d596ac1af21f25bf2fc17da8a75/vs\languages\typescript\common\typescript.js.map
