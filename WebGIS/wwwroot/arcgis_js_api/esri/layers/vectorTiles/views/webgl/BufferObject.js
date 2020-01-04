// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.20/esri/copyright.txt for details.
//>>built
define("esri/layers/vectorTiles/views/webgl/BufferObject",["require","exports"],function(l,m){var k=function(){function a(b,c,d,e){this._glName=this._context=null;this._bufferType=void 0;this._usage=35044;this._size=-1;this._indexType=void 0;this._context=b;this._bufferType=c;this._usage=d;this._id=a._nextId++;this._glName=this._context.gl.createBuffer();e&&this.setData(e)}a.createIndex=function(b,c,d){return new a(b,34963,c,d)};a.createVertex=function(b,c,d){return new a(b,34962,c,d)};Object.defineProperty(a.prototype,
"id",{get:function(){return this._id},enumerable:!0,configurable:!0});Object.defineProperty(a.prototype,"glName",{get:function(){return this._glName},enumerable:!0,configurable:!0});Object.defineProperty(a.prototype,"size",{get:function(){return this._size},enumerable:!0,configurable:!0});Object.defineProperty(a.prototype,"usage",{get:function(){return this._usage},enumerable:!0,configurable:!0});Object.defineProperty(a.prototype,"bufferType",{get:function(){return this._bufferType},enumerable:!0,
configurable:!0});Object.defineProperty(a.prototype,"indexType",{get:function(){return this._indexType},enumerable:!0,configurable:!0});Object.defineProperty(a.prototype,"byteSize",{get:function(){return 34962===this._bufferType?this._size:5125===this._indexType?4*this._size:2*this._size},enumerable:!0,configurable:!0});a.prototype.dispose=function(){this._glName&&(this._context.gl.deleteBuffer(this._glName),this._glName=null)};a.prototype.setData=function(b){if(b){if("number"===typeof b)0>b&&console.error("Buffer size cannot be negative!"),
this._size=b;else{var c=b.byteLength;b instanceof Uint16Array&&(c/=2,this._indexType=5123);b instanceof Uint32Array&&(c/=4,this._indexType=5125);this._size=c}c=this._context.getBoundVAO();this._context.bindVAO(null);this._context.bindBuffer(this);this._context.gl.bufferData(this._bufferType,b,this._usage);this._context.bindVAO(c)}};a.prototype.setSubData=function(b,c,a,e){void 0===c&&(c=0);void 0===a&&(a=0);if(b){(0>c||c>=this._size)&&console.error("offset is out of range!");var d=c,f=a,g=e,h=b.byteLength;
b instanceof Uint16Array&&(h/=2,d*=2,f*=2,g*=2);b instanceof Uint32Array&&(h/=4,d*=4,f*=4,g*=2);void 0===e&&(e=h-1);a>=e&&console.error("end must be bigger than start!");c+a-e>this._size&&console.error("An attempt to write beyond the end of the buffer!");c=this._context.getBoundVAO();this._context.bindVAO(null);this._context.bindBuffer(this);this._context.gl.bufferSubData(this._bufferType,d,(b instanceof ArrayBuffer?b:b.buffer).slice(f,g));this._context.bindVAO(c)}};return a}();k._nextId=0;return k});