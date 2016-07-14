/*!-----------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Version: 0.1.0(6c0fe2014e7a7d596ac1af21f25bf2fc17da8a75)
 * Released under the MIT license
 * https://github.com/Microsoft/vscode/blob/master/LICENSE.txt
 *-----------------------------------------------------------*/
define("vs/languages/json/common/features/jsonTokenTypes",["require","exports"],function(e,r){"use strict";r.TOKEN_DELIM_OBJECT="punctuation.bracket.json",r.TOKEN_DELIM_ARRAY="punctuation.array.json",r.TOKEN_DELIM_COLON="punctuation.colon.json",r.TOKEN_DELIM_COMMA="punctuation.comma.json",r.TOKEN_VALUE_BOOLEAN="support.property-value.keyword.json",r.TOKEN_VALUE_NULL="support.property-value.constant.other.json",r.TOKEN_VALUE_STRING="support.property-value.string.value.json",r.TOKEN_VALUE_NUMBER="support.property-value.constant.numeric.json",r.TOKEN_PROPERTY_NAME="support.type.property-name.json",r.TOKEN_COMMENT_BLOCK="comment.block.json",r.TOKEN_COMMENT_LINE="comment.line.json"}),define("vs/nls!vs/base/common/json",["vs/nls","vs/nls!vs/languages/json/common/json"],function(e,r){return e.create("vs/base/common/json",r)}),define("vs/base/common/json",["require","exports","vs/nls!vs/base/common/json"],function(e,r,n){"use strict";function t(e,r){function n(r,n){for(var t=0,o=0;r>t||!n;){var a=e.charCodeAt(m);if(a>=f._0&&a<=f._9)o=16*o+a-f._0;else if(a>=f.A&&a<=f.F)o=16*o+a-f.A+10;else{if(!(a>=f.a&&a<=f.f))break;o=16*o+a-f.a+10}m++,t++}return r>t&&(o=-1),o}function t(){var r=m;if(e.charCodeAt(m)===f._0)m++;else for(m++;m<e.length&&i(e.charCodeAt(m));)m++;if(m<e.length&&e.charCodeAt(m)===f.dot){if(m++,!(m<e.length&&i(e.charCodeAt(m))))return _=l.UnexpectedEndOfNumber,e.substring(r,n);for(m++;m<e.length&&i(e.charCodeAt(m));)m++}var n=m;if(m<e.length&&(e.charCodeAt(m)===f.E||e.charCodeAt(m)===f.e))if(m++,(m<e.length&&e.charCodeAt(m)===f.plus||e.charCodeAt(m)===f.minus)&&m++,m<e.length&&i(e.charCodeAt(m))){for(m++;m<e.length&&i(e.charCodeAt(m));)m++;n=m}else _=l.UnexpectedEndOfNumber;return e.substring(r,n)}function c(){for(var r="",t=m;;){if(m>=k){r+=e.substring(t,m),_=l.UnexpectedEndOfString;break}var o=e.charCodeAt(m);if(o===f.doubleQuote){r+=e.substring(t,m),m++;break}if(o!==f.backslash){if(a(o)){r+=e.substring(t,m),_=l.UnexpectedEndOfString;break}m++}else{if(r+=e.substring(t,m),m++,m>=k){_=l.UnexpectedEndOfString;break}switch(o=e.charCodeAt(m++)){case f.doubleQuote:r+='"';break;case f.backslash:r+="\\";break;case f.slash:r+="/";break;case f.b:r+="\b";break;case f.f:r+="\f";break;case f.n:r+="\n";break;case f.r:r+="\r";break;case f.t:r+="	";break;case f.u:var o=n(4,!0);o>=0?r+=String.fromCharCode(o):_=l.InvalidUnicode;break;default:_=l.InvalidEscapeCharacter}t=m}}return r}function s(){if(h="",_=l.None,g=m,m>=k)return g=k,T=p.EOF;var r=e.charCodeAt(m);if(o(r)){do m++,h+=String.fromCharCode(r),r=e.charCodeAt(m);while(o(r));return T=p.Trivia}if(a(r))return m++,h+=String.fromCharCode(r),r===f.carriageReturn&&e.charCodeAt(m)===f.lineFeed&&(m++,h+="\n"),T=p.LineBreakTrivia;switch(r){case f.openBrace:return m++,T=p.OpenBraceToken;case f.closeBrace:return m++,T=p.CloseBraceToken;case f.openBracket:return m++,T=p.OpenBracketToken;case f.closeBracket:return m++,T=p.CloseBracketToken;case f.colon:return m++,T=p.ColonToken;case f.comma:return m++,T=p.CommaToken;case f.doubleQuote:return m++,h=c(),T=p.StringLiteral;case f.slash:var n=m-1;if(e.charCodeAt(m+1)===f.slash){for(m+=2;k>m&&!a(e.charCodeAt(m));)m++;return h=e.substring(n,m),T=p.LineCommentTrivia}if(e.charCodeAt(m+1)===f.asterisk){m+=2;for(var s=k-1,d=!1;s>m;){var S=e.charCodeAt(m);if(S===f.asterisk&&e.charCodeAt(m+1)===f.slash){m+=2,d=!0;break}m++}return d||(m++,_=l.UnexpectedEndOfComment),h=e.substring(n,m),T=p.BlockCommentTrivia}return h+=String.fromCharCode(r),m++,T=p.Unknown;case f.minus:if(h+=String.fromCharCode(r),m++,m===k||!i(e.charCodeAt(m)))return T=p.Unknown;case f._0:case f._1:case f._2:case f._3:case f._4:case f._5:case f._6:case f._7:case f._8:case f._9:return h+=t(),T=p.NumericLiteral;default:for(;k>m&&u(r);)m++,r=e.charCodeAt(m);if(g!==m){switch(h=e.substring(g,m)){case"true":return T=p.TrueKeyword;case"false":return T=p.FalseKeyword;case"null":return T=p.NullKeyword}return T=p.Unknown}return h+=String.fromCharCode(r),m++,T=p.Unknown}}function u(e){if(o(e)||a(e))return!1;switch(e){case f.closeBrace:case f.closeBracket:case f.openBrace:case f.openBracket:case f.doubleQuote:case f.colon:case f.comma:return!1}return!0}function d(){var e;do e=s();while(e>=p.LineCommentTrivia&&e<=p.Trivia);return e}void 0===r&&(r=!1);var m=0,k=e.length,h="",g=0,T=p.Unknown,_=l.None;return{getPosition:function(){return m},scan:r?d:s,getToken:function(){return T},getTokenValue:function(){return h},getTokenOffset:function(){return g},getTokenLength:function(){return m-g},getTokenError:function(){return _}}}function o(e){return e===f.space||e===f.tab||e===f.verticalTab||e===f.formFeed||e===f.nonBreakingSpace||e===f.ogham||e>=f.enQuad&&e<=f.zeroWidthSpace||e===f.narrowNoBreakSpace||e===f.mathematicalSpace||e===f.ideographicSpace||e===f.byteOrderMark}function a(e){return e===f.lineFeed||e===f.carriageReturn||e===f.lineSeparator||e===f.paragraphSeparator}function i(e){return e>=f._0&&e<=f._9}function c(e){return e>=f.a&&e<=f.z||e>=f.A&&e<=f.Z}function s(e,r){var n,o,a=t(e),i=[],c=0;do switch(o=a.getPosition(),n=a.scan()){case p.LineCommentTrivia:case p.BlockCommentTrivia:case p.EOF:c!==o&&i.push(e.substring(c,o)),void 0!==r&&i.push(a.getTokenValue().replace(/[^\r\n]/g,r)),c=a.getPosition()}while(n!==p.EOF);return i.join("")}function u(e,r){function o(){for(var e=m.scan();e===p.Unknown;)a(n.localize(0,null)),e=m.scan();return e}function a(e,n,t){if(void 0===n&&(n=[]),void 0===t&&(t=[]),r.push(e),n.length+t.length>0)for(var a=m.getToken();a!==p.EOF;){if(-1!==n.indexOf(a)){o();break}if(-1!==t.indexOf(a))break;a=o()}}function i(){if(m.getToken()!==p.StringLiteral)return d;var e=m.getTokenValue();return o(),e}function c(){var e;switch(m.getToken()){case p.NumericLiteral:try{e=JSON.parse(m.getTokenValue()),"number"!=typeof e&&(a(n.localize(1,null)),e=0)}catch(r){e=0}break;case p.NullKeyword:e=null;break;case p.TrueKeyword:e=!0;break;case p.FalseKeyword:e=!1;break;default:return d}return o(),e}function s(e){var r=i();if(r===d)return a(n.localize(2,null),[],[p.CloseBraceToken,p.CommaToken]),!1;if(m.getToken()===p.ColonToken){o();var t=f();t!==d?e[r]=t:a(n.localize(3,null),[],[p.CloseBraceToken,p.CommaToken])}else a(n.localize(4,null),[],[p.CloseBraceToken,p.CommaToken]);return!0}function u(){if(m.getToken()!==p.OpenBraceToken)return d;var e={};o();for(var r=!1;m.getToken()!==p.CloseBraceToken&&m.getToken()!==p.EOF;){m.getToken()===p.CommaToken?(r||a(n.localize(5,null),[],[]),o()):r&&a(n.localize(6,null),[],[]);var t=s(e);t||a(n.localize(7,null),[],[p.CloseBraceToken,p.CommaToken]),r=!0}return m.getToken()!==p.CloseBraceToken?a(n.localize(8,null),[p.CloseBraceToken],[]):o(),e}function l(){if(m.getToken()!==p.OpenBracketToken)return d;var e=[];o();for(var r=!1;m.getToken()!==p.CloseBracketToken&&m.getToken()!==p.EOF;){m.getToken()===p.CommaToken?(r||a(n.localize(9,null),[],[]),o()):r&&a(n.localize(10,null),[],[]);var t=f();t===d?a(n.localize(11,null),[],[p.CloseBracketToken,p.CommaToken]):e.push(t),r=!0}return m.getToken()!==p.CloseBracketToken?a(n.localize(12,null),[p.CloseBracketToken],[]):o(),e}function f(){var e=l();return e!==d?e:(e=u(),e!==d?e:(e=i(),e!==d?e:c()))}void 0===r&&(r=[]);var d=Object(),m=t(e,!0);o();var k=f();return k===d?void a(n.localize(13,null),[],[]):(m.getToken()!==p.EOF&&a(n.localize(14,null),[],[]),k)}!function(e){e[e.None=0]="None",e[e.UnexpectedEndOfComment=1]="UnexpectedEndOfComment",e[e.UnexpectedEndOfString=2]="UnexpectedEndOfString",e[e.UnexpectedEndOfNumber=3]="UnexpectedEndOfNumber",e[e.InvalidUnicode=4]="InvalidUnicode",e[e.InvalidEscapeCharacter=5]="InvalidEscapeCharacter"}(r.ScanError||(r.ScanError={}));var l=r.ScanError;!function(e){e[e.Unknown=0]="Unknown",e[e.OpenBraceToken=1]="OpenBraceToken",e[e.CloseBraceToken=2]="CloseBraceToken",e[e.OpenBracketToken=3]="OpenBracketToken",e[e.CloseBracketToken=4]="CloseBracketToken",e[e.CommaToken=5]="CommaToken",e[e.ColonToken=6]="ColonToken",e[e.NullKeyword=7]="NullKeyword",e[e.TrueKeyword=8]="TrueKeyword",e[e.FalseKeyword=9]="FalseKeyword",e[e.StringLiteral=10]="StringLiteral",e[e.NumericLiteral=11]="NumericLiteral",e[e.LineCommentTrivia=12]="LineCommentTrivia",e[e.BlockCommentTrivia=13]="BlockCommentTrivia",e[e.LineBreakTrivia=14]="LineBreakTrivia",e[e.Trivia=15]="Trivia",e[e.EOF=16]="EOF"}(r.SyntaxKind||(r.SyntaxKind={}));var p=r.SyntaxKind;r.createScanner=t,r.isLetter=c;var f;!function(e){e[e.nullCharacter=0]="nullCharacter",e[e.maxAsciiCharacter=127]="maxAsciiCharacter",e[e.lineFeed=10]="lineFeed",e[e.carriageReturn=13]="carriageReturn",e[e.lineSeparator=8232]="lineSeparator",e[e.paragraphSeparator=8233]="paragraphSeparator",e[e.nextLine=133]="nextLine",e[e.space=32]="space",e[e.nonBreakingSpace=160]="nonBreakingSpace",e[e.enQuad=8192]="enQuad",e[e.emQuad=8193]="emQuad",e[e.enSpace=8194]="enSpace",e[e.emSpace=8195]="emSpace",e[e.threePerEmSpace=8196]="threePerEmSpace",e[e.fourPerEmSpace=8197]="fourPerEmSpace",e[e.sixPerEmSpace=8198]="sixPerEmSpace",e[e.figureSpace=8199]="figureSpace",e[e.punctuationSpace=8200]="punctuationSpace",e[e.thinSpace=8201]="thinSpace",e[e.hairSpace=8202]="hairSpace",e[e.zeroWidthSpace=8203]="zeroWidthSpace",e[e.narrowNoBreakSpace=8239]="narrowNoBreakSpace",e[e.ideographicSpace=12288]="ideographicSpace",e[e.mathematicalSpace=8287]="mathematicalSpace",e[e.ogham=5760]="ogham",e[e._=95]="_",e[e.$=36]="$",e[e._0=48]="_0",e[e._1=49]="_1",e[e._2=50]="_2",e[e._3=51]="_3",e[e._4=52]="_4",e[e._5=53]="_5",e[e._6=54]="_6",e[e._7=55]="_7",e[e._8=56]="_8",e[e._9=57]="_9",e[e.a=97]="a",e[e.b=98]="b",e[e.c=99]="c",e[e.d=100]="d",e[e.e=101]="e",e[e.f=102]="f",e[e.g=103]="g",e[e.h=104]="h",e[e.i=105]="i",e[e.j=106]="j",e[e.k=107]="k",e[e.l=108]="l",e[e.m=109]="m",e[e.n=110]="n",e[e.o=111]="o",e[e.p=112]="p",e[e.q=113]="q",e[e.r=114]="r",e[e.s=115]="s",e[e.t=116]="t",e[e.u=117]="u",e[e.v=118]="v",e[e.w=119]="w",e[e.x=120]="x",e[e.y=121]="y",e[e.z=122]="z",e[e.A=65]="A",e[e.B=66]="B",e[e.C=67]="C",e[e.D=68]="D",e[e.E=69]="E",e[e.F=70]="F",e[e.G=71]="G",e[e.H=72]="H",e[e.I=73]="I",e[e.J=74]="J",e[e.K=75]="K",e[e.L=76]="L",e[e.M=77]="M",e[e.N=78]="N",e[e.O=79]="O",e[e.P=80]="P",e[e.Q=81]="Q",e[e.R=82]="R",e[e.S=83]="S",e[e.T=84]="T",e[e.U=85]="U",e[e.V=86]="V",e[e.W=87]="W",e[e.X=88]="X",e[e.Y=89]="Y",e[e.Z=90]="Z",e[e.ampersand=38]="ampersand",e[e.asterisk=42]="asterisk",e[e.at=64]="at",e[e.backslash=92]="backslash",e[e.bar=124]="bar",e[e.caret=94]="caret",e[e.closeBrace=125]="closeBrace",e[e.closeBracket=93]="closeBracket",e[e.closeParen=41]="closeParen",e[e.colon=58]="colon",e[e.comma=44]="comma",e[e.dot=46]="dot",e[e.doubleQuote=34]="doubleQuote",e[e.equals=61]="equals",e[e.exclamation=33]="exclamation",e[e.greaterThan=62]="greaterThan",e[e.lessThan=60]="lessThan",e[e.minus=45]="minus",e[e.openBrace=123]="openBrace",e[e.openBracket=91]="openBracket",e[e.openParen=40]="openParen",e[e.percent=37]="percent",e[e.plus=43]="plus",e[e.question=63]="question",e[e.semicolon=59]="semicolon",e[e.singleQuote=39]="singleQuote",e[e.slash=47]="slash",e[e.tilde=126]="tilde",e[e.backspace=8]="backspace",e[e.formFeed=12]="formFeed",e[e.byteOrderMark=65279]="byteOrderMark",e[e.tab=9]="tab",e[e.verticalTab=11]="verticalTab"}(f||(f={})),r.stripComments=s,r.parse=u}),define("vs/languages/json/common/features/tokenization",["require","exports","vs/base/common/json","vs/languages/json/common/features/jsonTokenTypes"],function(e,r,n,t){"use strict";function o(e,r){return{shouldGenerateEmbeddedModels:!1,getInitialState:function(){return new i(e,null,null,!1)},tokenize:function(n,t,o,i){return a(e,r,n,t,o,i)}}}function a(e,r,o,a,c,s){void 0===c&&(c=0);var u=0,l=!1;switch(a.scanError){case n.ScanError.UnexpectedEndOfString:o='"'+o,u=1;break;case n.ScanError.UnexpectedEndOfComment:o="/*"+o,u=2}var p,f,d=n.createScanner(o),m=a.lastWasColon;for(f={tokens:[],actualStopOffset:o.length,endState:a.clone(),modeTransitions:[{startIndex:0,mode:e}]};;){var k=c+d.getPosition(),h="";if(p=d.scan(),p===n.SyntaxKind.EOF)break;if(k===c+d.getPosition())throw new Error("Scanner did not advance, next 3 characters are: "+o.substr(d.getPosition(),3));switch(l&&(k-=u),l=u>0,p){case n.SyntaxKind.OpenBraceToken:h=t.TOKEN_DELIM_OBJECT,m=!1;break;case n.SyntaxKind.CloseBraceToken:h=t.TOKEN_DELIM_OBJECT,m=!1;break;case n.SyntaxKind.OpenBracketToken:h=t.TOKEN_DELIM_ARRAY,m=!1;break;case n.SyntaxKind.CloseBracketToken:h=t.TOKEN_DELIM_ARRAY,m=!1;break;case n.SyntaxKind.ColonToken:h=t.TOKEN_DELIM_COLON,m=!0;break;case n.SyntaxKind.CommaToken:h=t.TOKEN_DELIM_COMMA,m=!1;break;case n.SyntaxKind.TrueKeyword:case n.SyntaxKind.FalseKeyword:h=t.TOKEN_VALUE_BOOLEAN,m=!1;break;case n.SyntaxKind.NullKeyword:h=t.TOKEN_VALUE_NULL,m=!1;break;case n.SyntaxKind.StringLiteral:h=m?t.TOKEN_VALUE_STRING:t.TOKEN_PROPERTY_NAME,m=!1;break;case n.SyntaxKind.NumericLiteral:h=t.TOKEN_VALUE_NUMBER,m=!1}if(r)switch(p){case n.SyntaxKind.LineCommentTrivia:h=t.TOKEN_COMMENT_LINE;break;case n.SyntaxKind.BlockCommentTrivia:h=t.TOKEN_COMMENT_BLOCK}f.endState=new i(a.getMode(),a.getStateData(),d.getTokenError(),m),f.tokens.push({startIndex:k,type:h})}return f}r.createTokenizationSupport=o;var i=function(){function e(e,r,n,t){this._mode=e,this._state=r,this.scanError=n,this.lastWasColon=t}return e.prototype.clone=function(){return new e(this._mode,this._state,this.scanError,this.lastWasColon)},e.prototype.equals=function(r){return r===this?!0:r&&r instanceof e?this.scanError===r.scanError&&this.lastWasColon===r.lastWasColon:!1},e.prototype.getMode=function(){return this._mode},e.prototype.tokenize=function(e){throw new Error},e.prototype.getStateData=function(){return this._state},e.prototype.setStateData=function(e){this._state=e},e}()});var __extends=this&&this.__extends||function(e,r){function n(){this.constructor=e}for(var t in r)r.hasOwnProperty(t)&&(e[t]=r[t]);e.prototype=null===r?Object.create(r):(n.prototype=r.prototype,new n)},__decorate=this&&this.__decorate||function(e,r,n,t){var o,a=arguments.length,i=3>a?r:null===t?t=Object.getOwnPropertyDescriptor(r,n):t;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,r,n,t);else for(var c=e.length-1;c>=0;c--)(o=e[c])&&(i=(3>a?o(i):a>3?o(r,n,i):o(r,n))||i);return a>3&&i&&Object.defineProperty(r,n,i),i},__param=this&&this.__param||function(e,r){return function(n,t){r(n,t,e)}};define("vs/languages/json/common/json",["require","exports","vs/platform/platform","vs/nls!vs/languages/json/common/json","vs/languages/json/common/features/tokenization","vs/editor/common/modes/abstractMode","vs/platform/thread/common/threadService","vs/platform/thread/common/thread","vs/platform/jsonschemas/common/jsonContributionRegistry","vs/platform/instantiation/common/instantiation","vs/editor/common/modes/supports/richEditSupport","vs/editor/common/modes/supports/suggestSupport"],function(e,r,n,t,o,a,i,c,s,u,l,p){"use strict";var f=function(e){function r(r,n,i){var c=this;e.call(this,r.id),this._modeWorkerManager=new a.ModeWorkerManager(r,"vs/languages/json/common/jsonWorker","JSONWorker",null,n),this._threadService=i,this.tokenizationSupport=o.createTokenizationSupport(this,!0),this.richEditSupport=new l.RichEditSupport(this.getId(),null,{wordPattern:a.createWordRegExp(".-"),comments:{lineComment:"//",blockComment:["/*","*/"]},brackets:[["{","}"],["[","]"]],__characterPairSupport:{autoClosingPairs:[{open:"{",close:"}",notIn:["string"]},{open:"[",close:"]",notIn:["string"]},{open:'"',close:'"',notIn:["string"]}]}}),this.extraInfoSupport=this,this.inplaceReplaceSupport=this,this.configSupport=this,this.outlineSupport=this,this.outlineGroupLabel=Object.create(null),this.outlineGroupLabel.object=t.localize(0,null),this.outlineGroupLabel.array=t.localize(1,null),this.outlineGroupLabel.string=t.localize(2,null),this.outlineGroupLabel.number=t.localize(3,null),this.outlineGroupLabel["boolean"]=t.localize(4,null),this.outlineGroupLabel["null"]=t.localize(5,null),this.formattingSupport=this,this.suggestSupport=new p.SuggestSupport(this.getId(),{triggerCharacters:[],excludeTokens:["comment.line.json","comment.block.json"],suggest:function(e,r){return c.suggest(e,r)}})}return __extends(r,e),r.prototype.creationDone=function(){var e=this;if(this._threadService.isInMainThread){this._pickAWorkerToValidate(),this._configureWorkerSchemas(this.getSchemaConfiguration());var r=n.Registry.as(s.Extensions.JSONContribution);r.addRegistryChangedListener(function(r){e._configureWorkerSchemas(e.getSchemaConfiguration())})}},r.prototype._worker=function(e){return this._modeWorkerManager.worker(e)},r.prototype.getSchemaConfiguration=function(){var e=n.Registry.as(s.Extensions.JSONContribution);return e.getSchemaContributions()},r.prototype.configure=function(e){return this._threadService.isInMainThread?this._configureWorkers(e):this._worker(function(r){return r._doConfigure(e)})},r.prototype._configureWorkers=function(e){return this._worker(function(r){return r._doConfigure(e)})},r.prototype._configureWorkerSchemas=function(e){return this._worker(function(r){return r.setSchemaContributions(e)})},r.prototype._pickAWorkerToValidate=function(){return this._worker(function(e){return e.enableValidator()})},r.prototype.navigateValueSet=function(e,r,n){return this._worker(function(t){return t.navigateValueSet(e,r,n)})},r.prototype.suggest=function(e,r){return this._worker(function(n){return n.suggest(e,r)})},r.prototype.computeInfo=function(e,r){return this._worker(function(n){return n.computeInfo(e,r)})},r.prototype.getOutline=function(e){return this._worker(function(r){return r.getOutline(e)})},r.prototype.formatDocument=function(e,r){return this._worker(function(n){return n.format(e,null,r)})},r.prototype.formatRange=function(e,r,n){return this._worker(function(t){return t.format(e,r,n)})},r.$_configureWorkers=i.AllWorkersAttr(r,r.prototype._configureWorkers),r.$_configureWorkerSchemas=i.AllWorkersAttr(r,r.prototype._configureWorkerSchemas),r.$_pickAWorkerToValidate=i.OneWorkerAttr(r,r.prototype._pickAWorkerToValidate,c.ThreadAffinity.Group1),r.$navigateValueSet=i.OneWorkerAttr(r,r.prototype.navigateValueSet),r.$suggest=i.OneWorkerAttr(r,r.prototype.suggest),r.$computeInfo=i.OneWorkerAttr(r,r.prototype.computeInfo),r.$getOutline=i.OneWorkerAttr(r,r.prototype.getOutline),r.$formatDocument=i.OneWorkerAttr(r,r.prototype.formatDocument),r.$formatRange=i.OneWorkerAttr(r,r.prototype.formatRange),r=__decorate([__param(1,u.IInstantiationService),__param(2,c.IThreadService)],r)}(a.AbstractMode);r.JSONMode=f});
//# sourceMappingURL=https://ticino.blob.core.windows.net/sourcemaps/6c0fe2014e7a7d596ac1af21f25bf2fc17da8a75/vs\languages\json\common\json.js.map