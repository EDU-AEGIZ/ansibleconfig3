(()=>{"use strict";var e={759:(e,t,i)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.registerAudioPreviewSupport=void 0;const s=i(549),n=i(406),r=i(968);class o{constructor(e,t){this.a=e,this.b=t}async openCustomDocument(e){return{uri:e,dispose:()=>{}}}async resolveCustomEditor(e,t){new a(this.a,e.uri,t,this.b)}}o.viewType="vscode.audioPreview";class a extends n.MediaPreview{constructor(e,t,i,s){super(e,t,i,s),this.o=e,this.c(i.webview.onDidReceiveMessage((e=>{switch(e.type){case"reopen-as-text":(0,n.reopenAsText)(t,i.viewColumn)}}))),this.k(),this.l(),this.n()}async m(){const e=Date.now().toString(),t={src:await this.q(this.i,this.h,e)},i=(0,r.getNonce)(),n=this.i.webview.cspSource;return`<!DOCTYPE html>\n<html lang="en">\n<head>\n\t<meta charset="UTF-8">\n\n\t\x3c!-- Disable pinch zooming --\x3e\n\t<meta name="viewport"\n\t\tcontent="width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no">\n\n\t<title>Audio Preview</title>\n\n\t<link rel="stylesheet" href="${(0,r.escapeAttribute)(this.r("media","audioPreview.css"))}" type="text/css" media="screen" nonce="${i}">\n\n\t<meta http-equiv="Content-Security-Policy" content="default-src 'none'; img-src data: ${n}; media-src ${n}; script-src 'nonce-${i}'; style-src ${n} 'nonce-${i}';">\n\t<meta id="settings" data-settings="${(0,r.escapeAttribute)(JSON.stringify(t))}">\n</head>\n<body class="container loading">\n\t<div class="loading-indicator"></div>\n\t<div class="loading-error">\n\t\t<p>${s.l10n.t("An error occurred while loading the audio file.")}</p>\n\t\t<a href="#" class="open-file-link">${s.l10n.t("Open file using VS Code's standard text/binary editor?")}</a>\n\t</div>\n\t<script src="${(0,r.escapeAttribute)(this.r("media","audioPreview.js"))}" nonce="${i}"><\/script>\n</body>\n</html>`}async q(e,t,i){return"git"===t.scheme&&0===(await s.workspace.fs.stat(t)).size?null:t.query?e.webview.asWebviewUri(t).toString():e.webview.asWebviewUri(t).with({query:`version=${i}`}).toString()}r(...e){return this.i.webview.asWebviewUri(s.Uri.joinPath(this.o,...e))}}t.registerAudioPreviewSupport=function(e,t){const i=new o(e.extensionUri,t);return s.window.registerCustomEditorProvider(o.viewType,i,{supportsMultipleEditorsPerDocument:!0,webviewOptions:{retainContextWhenHidden:!0}})}},86:(e,t,i)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.BinarySizeStatusBarEntry=void 0;const s=i(549),n=i(650);class r{static formatSize(e){return e<r.KB?s.l10n.t("{0}B",e):e<r.MB?s.l10n.t("{0}KB",(e/r.KB).toFixed(2)):e<r.GB?s.l10n.t("{0}MB",(e/r.MB).toFixed(2)):e<r.TB?s.l10n.t("{0}GB",(e/r.GB).toFixed(2)):s.l10n.t("{0}TB",(e/r.TB).toFixed(2))}}r.KB=1024,r.MB=r.KB*r.KB,r.GB=r.MB*r.KB,r.TB=r.GB*r.KB;class o extends n.PreviewStatusBarEntry{constructor(){super("status.imagePreview.binarySize",s.l10n.t("Image Binary Size"),s.StatusBarAlignment.Right,100)}show(e,t){"number"==typeof t?super.g(e,r.formatSize(t)):this.hide(e)}}t.BinarySizeStatusBarEntry=o},34:(e,t,i)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.registerImagePreviewSupport=t.PreviewManager=void 0;const s=i(549),n=i(406),r=i(968),o=i(233),a=i(142);class c{constructor(e,t,i,s){this.c=e,this.d=t,this.f=i,this.g=s,this.a=new Set}async openCustomDocument(e){return{uri:e,dispose:()=>{}}}async resolveCustomEditor(e,t){const i=new h(this.c,e.uri,t,this.d,this.f,this.g);this.a.add(i),this.h(i),t.onDidDispose((()=>{this.a.delete(i)})),t.onDidChangeViewState((()=>{t.active?this.h(i):this.b!==i||t.active||this.h(void 0)}))}get activePreview(){return this.b}h(e){this.b=e}}t.PreviewManager=c,c.viewType="imagePreview.previewEditor";class h extends n.MediaPreview{constructor(e,t,i,s,r,o){super(e,t,i,r),this.r=e,this.s=s,this.u=o,this.q="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAEElEQVR42gEFAPr/AP///wAI/AL+Sr4t6gAAAABJRU5ErkJggg==",this.c(i.webview.onDidReceiveMessage((e=>{switch(e.type){case"size":this.o=e.value,this.n();break;case"zoom":this.p=e.value,this.n();break;case"reopen-as-text":(0,n.reopenAsText)(t,i.viewColumn)}}))),this.c(o.onDidChangeScale((e=>{2===this.f&&this.i.webview.postMessage({type:"setScale",scale:e.scale})}))),this.c(i.onDidChangeViewState((()=>{this.i.webview.postMessage({type:"setActive",value:this.i.active})}))),this.c(i.onDidDispose((()=>{2===this.f&&(this.s.hide(this),this.u.hide(this)),this.f=0}))),this.k(),this.l(),this.n(),this.i.webview.postMessage({type:"setActive",value:this.i.active})}dispose(){super.dispose(),this.s.hide(this),this.u.hide(this)}zoomIn(){2===this.f&&this.i.webview.postMessage({type:"zoomIn"})}zoomOut(){2===this.f&&this.i.webview.postMessage({type:"zoomOut"})}n(){super.n(),0!==this.f&&(this.i.active?(this.s.show(this,this.o||""),this.u.show(this,this.p||"fit")):(this.s.hide(this),this.u.hide(this)))}async m(){const e=Date.now().toString(),t={src:await this.x(this.i,this.h,e)},i=(0,r.getNonce)(),n=this.i.webview.cspSource;return`<!DOCTYPE html>\n<html lang="en">\n<head>\n\t<meta charset="UTF-8">\n\n\t\x3c!-- Disable pinch zooming --\x3e\n\t<meta name="viewport"\n\t\tcontent="width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no">\n\n\t<title>Image Preview</title>\n\n\t<link rel="stylesheet" href="${(0,r.escapeAttribute)(this.y("media","imagePreview.css"))}" type="text/css" media="screen" nonce="${i}">\n\n\t<meta http-equiv="Content-Security-Policy" content="default-src 'none'; img-src data: ${n}; script-src 'nonce-${i}'; style-src ${n} 'nonce-${i}';">\n\t<meta id="image-preview-settings" data-settings="${(0,r.escapeAttribute)(JSON.stringify(t))}">\n</head>\n<body class="container image scale-to-fit loading">\n\t<div class="loading-indicator"></div>\n\t<div class="image-load-error">\n\t\t<p>${s.l10n.t("An error occurred while loading the image.")}</p>\n\t\t<a href="#" class="open-file-link">${s.l10n.t("Open file using VS Code's standard text/binary editor?")}</a>\n\t</div>\n\t<script src="${(0,r.escapeAttribute)(this.y("media","imagePreview.js"))}" nonce="${i}"><\/script>\n</body>\n</html>`}async x(e,t,i){return"git"===t.scheme&&0===(await s.workspace.fs.stat(t)).size?this.q:t.query?e.webview.asWebviewUri(t).toString():e.webview.asWebviewUri(t).with({query:`version=${i}`}).toString()}y(...e){return this.i.webview.asWebviewUri(s.Uri.joinPath(this.r,...e))}}t.registerImagePreviewSupport=function(e,t){const i=[],n=new o.SizeStatusBarEntry;i.push(n);const r=new a.ZoomStatusBarEntry;i.push(r);const h=new c(e.extensionUri,n,t,r);return i.push(s.window.registerCustomEditorProvider(c.viewType,h,{supportsMultipleEditorsPerDocument:!0})),i.push(s.commands.registerCommand("imagePreview.zoomIn",(()=>{h.activePreview?.zoomIn()}))),i.push(s.commands.registerCommand("imagePreview.zoomOut",(()=>{h.activePreview?.zoomOut()}))),s.Disposable.from(...i)}},233:(e,t,i)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.SizeStatusBarEntry=void 0;const s=i(549),n=i(650);class r extends n.PreviewStatusBarEntry{constructor(){super("status.imagePreview.size",s.l10n.t("Image Size"),s.StatusBarAlignment.Right,101)}show(e,t){this.g(e,t)}}t.SizeStatusBarEntry=r},142:(e,t,i)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.ZoomStatusBarEntry=void 0;const s=i(549),n=i(650),r="_imagePreview.selectZoomLevel";class o extends n.PreviewStatusBarEntry{constructor(){super("status.imagePreview.zoom",s.l10n.t("Image Zoom"),s.StatusBarAlignment.Right,102),this.h=this.c(new s.EventEmitter),this.onDidChangeScale=this.h.event,this.c(s.commands.registerCommand(r,(async()=>{const e=[10,5,2,1,.5,.2,"fit"].map((e=>({label:this.i(e),scale:e}))),t=await s.window.showQuickPick(e,{placeHolder:s.l10n.t("Select zoom level")});t&&this.h.fire({scale:t.scale})}))),this.f.command=r}show(e,t){this.g(e,this.i(t))}i(e){return"fit"===e?s.l10n.t("Whole Image"):`${Math.round(100*e)}%`}}t.ZoomStatusBarEntry=o},406:(e,t,i)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.MediaPreview=t.reopenAsText=void 0;const s=i(549),n=i(274);t.reopenAsText=function(e,t){s.commands.executeCommand("vscode.openWith",e,"default",t)};class r extends n.Disposable{constructor(e,t,i,n){super(),this.h=t,this.i=i,this.j=n,this.f=1;const r=t.with({path:t.path.replace(/\/[^\/]+?\.\w+$/,"/")});i.webview.options={enableScripts:!0,enableForms:!1,localResourceRoots:[r,e]},this.c(i.onDidChangeViewState((()=>{this.n()}))),this.c(i.onDidDispose((()=>{this.f=0,this.dispose()})));const o=this.c(s.workspace.createFileSystemWatcher(new s.RelativePattern(t,"*")));this.c(o.onDidChange((e=>{e.toString()===this.h.toString()&&(this.k(),this.l())}))),this.c(o.onDidDelete((e=>{e.toString()===this.h.toString()&&this.i.dispose()})))}dispose(){super.dispose(),this.j.hide(this)}k(){s.workspace.fs.stat(this.h).then((({size:e})=>{this.g=e,this.n()}))}async l(){if(0===this.f)return;const e=await this.m();0!==this.f&&(this.i.webview.html=e)}n(){0!==this.f&&(this.i.active?(this.f=2,this.j.show(this,this.g)):(this.j.hide(this),this.f=1))}}t.MediaPreview=r},650:(e,t,i)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.PreviewStatusBarEntry=void 0;const s=i(549),n=i(274);class r extends n.Disposable{constructor(e,t,i,n){super(),this.f=this.c(s.window.createStatusBarItem(e,i,n)),this.f.name=t}g(e,t){this.e=e,this.f.text=t,this.f.show()}hide(e){e===this.e&&(this.f.hide(),this.e=void 0)}}t.PreviewStatusBarEntry=r},274:(e,t)=>{function i(e){for(;e.length;){const t=e.pop();t&&t.dispose()}}Object.defineProperty(t,"__esModule",{value:!0}),t.Disposable=t.disposeAll=void 0,t.disposeAll=i,t.Disposable=class{constructor(){this.a=!1,this.b=[]}dispose(){this.a||(this.a=!0,i(this.b))}c(e){return this.a?e.dispose():this.b.push(e),e}get d(){return this.a}}},968:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.getNonce=t.escapeAttribute=void 0,t.escapeAttribute=function(e){return e.toString().replace(/"/g,"&quot;")},t.getNonce=function(){let e="";const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";for(let i=0;i<64;i++)e+=t.charAt(Math.floor(Math.random()*t.length));return e}},280:(e,t,i)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.registerVideoPreviewSupport=void 0;const s=i(549),n=i(406),r=i(968);class o{constructor(e,t){this.a=e,this.b=t}async openCustomDocument(e){return{uri:e,dispose:()=>{}}}async resolveCustomEditor(e,t){new a(this.a,e.uri,t,this.b)}}o.viewType="vscode.videoPreview";class a extends n.MediaPreview{constructor(e,t,i,s){super(e,t,i,s),this.o=e,this.c(i.webview.onDidReceiveMessage((e=>{switch(e.type){case"reopen-as-text":(0,n.reopenAsText)(t,i.viewColumn)}}))),this.k(),this.l(),this.n()}async m(){const e=Date.now().toString(),t={src:await this.q(this.i,this.h,e)},i=(0,r.getNonce)(),n=this.i.webview.cspSource;return`<!DOCTYPE html>\n<html lang="en">\n<head>\n\t<meta charset="UTF-8">\n\n\t\x3c!-- Disable pinch zooming --\x3e\n\t<meta name="viewport"\n\t\tcontent="width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no">\n\n\t<title>Video Preview</title>\n\n\t<link rel="stylesheet" href="${(0,r.escapeAttribute)(this.r("media","videoPreview.css"))}" type="text/css" media="screen" nonce="${i}">\n\n\t<meta http-equiv="Content-Security-Policy" content="default-src 'none'; img-src data: ${n}; media-src ${n}; script-src 'nonce-${i}'; style-src ${n} 'nonce-${i}';">\n\t<meta id="settings" data-settings="${(0,r.escapeAttribute)(JSON.stringify(t))}">\n</head>\n<body class="loading">\n\t<div class="loading-indicator"></div>\n\t<div class="loading-error">\n\t\t<p>${s.l10n.t("An error occurred while loading the video file.")}</p>\n\t\t<a href="#" class="open-file-link">${s.l10n.t("Open file using VS Code's standard text/binary editor?")}</a>\n\t</div>\n\t<script src="${(0,r.escapeAttribute)(this.r("media","videoPreview.js"))}" nonce="${i}"><\/script>\n</body>\n</html>`}async q(e,t,i){return"git"===t.scheme&&0===(await s.workspace.fs.stat(t)).size?null:t.query?e.webview.asWebviewUri(t).toString():e.webview.asWebviewUri(t).with({query:`version=${i}`}).toString()}r(...e){return this.i.webview.asWebviewUri(s.Uri.joinPath(this.o,...e))}}t.registerVideoPreviewSupport=function(e,t){const i=new o(e.extensionUri,t);return s.window.registerCustomEditorProvider(o.viewType,i,{supportsMultipleEditorsPerDocument:!0,webviewOptions:{retainContextWhenHidden:!0}})}},549:e=>{e.exports=require("vscode")}},t={};function i(s){var n=t[s];if(void 0!==n)return n.exports;var r=t[s]={exports:{}};return e[s](r,r.exports,i),r.exports}var s={};(()=>{var e=s;Object.defineProperty(e,"__esModule",{value:!0}),e.activate=void 0;const t=i(759),n=i(86),r=i(34),o=i(280);e.activate=function(e){const i=new n.BinarySizeStatusBarEntry;e.subscriptions.push(i),e.subscriptions.push((0,r.registerImagePreviewSupport)(e,i)),e.subscriptions.push((0,t.registerAudioPreviewSupport)(e,i)),e.subscriptions.push((0,o.registerVideoPreviewSupport)(e,i))}})();var n=exports;for(var r in s)n[r]=s[r];s.__esModule&&Object.defineProperty(n,"__esModule",{value:!0})})();
//# sourceMappingURL=https://ticino.blob.core.windows.net/sourcemaps/97dec172d3256f8ca4bfb2143f3f76b503ca0534/extensions/media-preview/dist/extension.js.map