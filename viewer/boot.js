var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));

// (disabled):fs
var require_fs = __commonJS({
  "(disabled):fs"() {
  }
});

// (disabled):http
var require_http = __commonJS({
  "(disabled):http"() {
  }
});

// (disabled):https
var require_https = __commonJS({
  "(disabled):https"() {
  }
});

// (disabled):url
var require_url = __commonJS({
  "(disabled):url"() {
  }
});

// node_modules/.pnpm/pdfjs-dist@4.5.136/node_modules/pdfjs-dist/build/pdf.mjs
var __webpack_require__ = {};
(() => {
  __webpack_require__.d = (exports, definition) => {
    for (var key in definition) {
      if (__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
        Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
      }
    }
  };
})();
(() => {
  __webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop);
})();
var __webpack_exports__ = globalThis.pdfjsLib = {};
__webpack_require__.d(__webpack_exports__, {
  AbortException: () => (
    /* reexport */
    AbortException
  ),
  AnnotationEditorLayer: () => (
    /* reexport */
    AnnotationEditorLayer
  ),
  AnnotationEditorParamsType: () => (
    /* reexport */
    AnnotationEditorParamsType
  ),
  AnnotationEditorType: () => (
    /* reexport */
    AnnotationEditorType
  ),
  AnnotationEditorUIManager: () => (
    /* reexport */
    AnnotationEditorUIManager
  ),
  AnnotationLayer: () => (
    /* reexport */
    AnnotationLayer
  ),
  AnnotationMode: () => (
    /* reexport */
    AnnotationMode
  ),
  CMapCompressionType: () => (
    /* reexport */
    CMapCompressionType
  ),
  ColorPicker: () => (
    /* reexport */
    ColorPicker
  ),
  DOMSVGFactory: () => (
    /* reexport */
    DOMSVGFactory
  ),
  DrawLayer: () => (
    /* reexport */
    DrawLayer
  ),
  FeatureTest: () => (
    /* reexport */
    util_FeatureTest
  ),
  GlobalWorkerOptions: () => (
    /* reexport */
    GlobalWorkerOptions
  ),
  ImageKind: () => (
    /* reexport */
    util_ImageKind
  ),
  InvalidPDFException: () => (
    /* reexport */
    InvalidPDFException
  ),
  MissingPDFException: () => (
    /* reexport */
    MissingPDFException
  ),
  OPS: () => (
    /* reexport */
    OPS
  ),
  PDFDataRangeTransport: () => (
    /* reexport */
    PDFDataRangeTransport
  ),
  PDFDateString: () => (
    /* reexport */
    PDFDateString
  ),
  PDFWorker: () => (
    /* reexport */
    PDFWorker
  ),
  PasswordResponses: () => (
    /* reexport */
    PasswordResponses
  ),
  PermissionFlag: () => (
    /* reexport */
    PermissionFlag
  ),
  PixelsPerInch: () => (
    /* reexport */
    PixelsPerInch
  ),
  RenderingCancelledException: () => (
    /* reexport */
    RenderingCancelledException
  ),
  TextLayer: () => (
    /* reexport */
    TextLayer
  ),
  UnexpectedResponseException: () => (
    /* reexport */
    UnexpectedResponseException
  ),
  Util: () => (
    /* reexport */
    Util
  ),
  VerbosityLevel: () => (
    /* reexport */
    VerbosityLevel
  ),
  XfaLayer: () => (
    /* reexport */
    XfaLayer
  ),
  build: () => (
    /* reexport */
    build
  ),
  createValidAbsoluteUrl: () => (
    /* reexport */
    createValidAbsoluteUrl
  ),
  fetchData: () => (
    /* reexport */
    fetchData
  ),
  getDocument: () => (
    /* reexport */
    getDocument
  ),
  getFilenameFromUrl: () => (
    /* reexport */
    getFilenameFromUrl
  ),
  getPdfFilenameFromUrl: () => (
    /* reexport */
    getPdfFilenameFromUrl
  ),
  getXfaPageViewport: () => (
    /* reexport */
    getXfaPageViewport
  ),
  isDataScheme: () => (
    /* reexport */
    isDataScheme
  ),
  isPdfFile: () => (
    /* reexport */
    isPdfFile
  ),
  noContextMenu: () => (
    /* reexport */
    noContextMenu
  ),
  normalizeUnicode: () => (
    /* reexport */
    normalizeUnicode
  ),
  setLayerDimensions: () => (
    /* reexport */
    setLayerDimensions
  ),
  shadow: () => (
    /* reexport */
    shadow
  ),
  version: () => (
    /* reexport */
    version
  )
});
var isNodeJS = typeof process === "object" && process + "" === "[object process]" && !process.versions.nw && !(process.versions.electron && process.type && process.type !== "browser");
var IDENTITY_MATRIX = [1, 0, 0, 1, 0, 0];
var FONT_IDENTITY_MATRIX = [1e-3, 0, 0, 1e-3, 0, 0];
var MAX_IMAGE_SIZE_TO_CACHE = 1e7;
var LINE_FACTOR = 1.35;
var LINE_DESCENT_FACTOR = 0.35;
var BASELINE_FACTOR = LINE_DESCENT_FACTOR / LINE_FACTOR;
var RenderingIntentFlag = {
  ANY: 1,
  DISPLAY: 2,
  PRINT: 4,
  SAVE: 8,
  ANNOTATIONS_FORMS: 16,
  ANNOTATIONS_STORAGE: 32,
  ANNOTATIONS_DISABLE: 64,
  IS_EDITING: 128,
  OPLIST: 256
};
var AnnotationMode = {
  DISABLE: 0,
  ENABLE: 1,
  ENABLE_FORMS: 2,
  ENABLE_STORAGE: 3
};
var AnnotationEditorPrefix = "pdfjs_internal_editor_";
var AnnotationEditorType = {
  DISABLE: -1,
  NONE: 0,
  FREETEXT: 3,
  HIGHLIGHT: 9,
  STAMP: 13,
  INK: 15
};
var AnnotationEditorParamsType = {
  RESIZE: 1,
  CREATE: 2,
  FREETEXT_SIZE: 11,
  FREETEXT_COLOR: 12,
  FREETEXT_OPACITY: 13,
  INK_COLOR: 21,
  INK_THICKNESS: 22,
  INK_OPACITY: 23,
  HIGHLIGHT_COLOR: 31,
  HIGHLIGHT_DEFAULT_COLOR: 32,
  HIGHLIGHT_THICKNESS: 33,
  HIGHLIGHT_FREE: 34,
  HIGHLIGHT_SHOW_ALL: 35
};
var PermissionFlag = {
  PRINT: 4,
  MODIFY_CONTENTS: 8,
  COPY: 16,
  MODIFY_ANNOTATIONS: 32,
  FILL_INTERACTIVE_FORMS: 256,
  COPY_FOR_ACCESSIBILITY: 512,
  ASSEMBLE: 1024,
  PRINT_HIGH_QUALITY: 2048
};
var TextRenderingMode = {
  FILL: 0,
  STROKE: 1,
  FILL_STROKE: 2,
  INVISIBLE: 3,
  FILL_ADD_TO_PATH: 4,
  STROKE_ADD_TO_PATH: 5,
  FILL_STROKE_ADD_TO_PATH: 6,
  ADD_TO_PATH: 7,
  FILL_STROKE_MASK: 3,
  ADD_TO_PATH_FLAG: 4
};
var util_ImageKind = {
  GRAYSCALE_1BPP: 1,
  RGB_24BPP: 2,
  RGBA_32BPP: 3
};
var AnnotationType = {
  TEXT: 1,
  LINK: 2,
  FREETEXT: 3,
  LINE: 4,
  SQUARE: 5,
  CIRCLE: 6,
  POLYGON: 7,
  POLYLINE: 8,
  HIGHLIGHT: 9,
  UNDERLINE: 10,
  SQUIGGLY: 11,
  STRIKEOUT: 12,
  STAMP: 13,
  CARET: 14,
  INK: 15,
  POPUP: 16,
  FILEATTACHMENT: 17,
  SOUND: 18,
  MOVIE: 19,
  WIDGET: 20,
  SCREEN: 21,
  PRINTERMARK: 22,
  TRAPNET: 23,
  WATERMARK: 24,
  THREED: 25,
  REDACT: 26
};
var AnnotationBorderStyleType = {
  SOLID: 1,
  DASHED: 2,
  BEVELED: 3,
  INSET: 4,
  UNDERLINE: 5
};
var VerbosityLevel = {
  ERRORS: 0,
  WARNINGS: 1,
  INFOS: 5
};
var CMapCompressionType = {
  NONE: 0,
  BINARY: 1
};
var OPS = {
  dependency: 1,
  setLineWidth: 2,
  setLineCap: 3,
  setLineJoin: 4,
  setMiterLimit: 5,
  setDash: 6,
  setRenderingIntent: 7,
  setFlatness: 8,
  setGState: 9,
  save: 10,
  restore: 11,
  transform: 12,
  moveTo: 13,
  lineTo: 14,
  curveTo: 15,
  curveTo2: 16,
  curveTo3: 17,
  closePath: 18,
  rectangle: 19,
  stroke: 20,
  closeStroke: 21,
  fill: 22,
  eoFill: 23,
  fillStroke: 24,
  eoFillStroke: 25,
  closeFillStroke: 26,
  closeEOFillStroke: 27,
  endPath: 28,
  clip: 29,
  eoClip: 30,
  beginText: 31,
  endText: 32,
  setCharSpacing: 33,
  setWordSpacing: 34,
  setHScale: 35,
  setLeading: 36,
  setFont: 37,
  setTextRenderingMode: 38,
  setTextRise: 39,
  moveText: 40,
  setLeadingMoveText: 41,
  setTextMatrix: 42,
  nextLine: 43,
  showText: 44,
  showSpacedText: 45,
  nextLineShowText: 46,
  nextLineSetSpacingShowText: 47,
  setCharWidth: 48,
  setCharWidthAndBounds: 49,
  setStrokeColorSpace: 50,
  setFillColorSpace: 51,
  setStrokeColor: 52,
  setStrokeColorN: 53,
  setFillColor: 54,
  setFillColorN: 55,
  setStrokeGray: 56,
  setFillGray: 57,
  setStrokeRGBColor: 58,
  setFillRGBColor: 59,
  setStrokeCMYKColor: 60,
  setFillCMYKColor: 61,
  shadingFill: 62,
  beginInlineImage: 63,
  beginImageData: 64,
  endInlineImage: 65,
  paintXObject: 66,
  markPoint: 67,
  markPointProps: 68,
  beginMarkedContent: 69,
  beginMarkedContentProps: 70,
  endMarkedContent: 71,
  beginCompat: 72,
  endCompat: 73,
  paintFormXObjectBegin: 74,
  paintFormXObjectEnd: 75,
  beginGroup: 76,
  endGroup: 77,
  beginAnnotation: 80,
  endAnnotation: 81,
  paintImageMaskXObject: 83,
  paintImageMaskXObjectGroup: 84,
  paintImageXObject: 85,
  paintInlineImageXObject: 86,
  paintInlineImageXObjectGroup: 87,
  paintImageXObjectRepeat: 88,
  paintImageMaskXObjectRepeat: 89,
  paintSolidColorImageMask: 90,
  constructPath: 91,
  setStrokeTransparent: 92,
  setFillTransparent: 93
};
var PasswordResponses = {
  NEED_PASSWORD: 1,
  INCORRECT_PASSWORD: 2
};
var verbosity = VerbosityLevel.WARNINGS;
function setVerbosityLevel(level) {
  if (Number.isInteger(level)) {
    verbosity = level;
  }
}
function getVerbosityLevel() {
  return verbosity;
}
function info(msg) {
  if (verbosity >= VerbosityLevel.INFOS) {
    console.log(`Info: ${msg}`);
  }
}
function warn(msg) {
  if (verbosity >= VerbosityLevel.WARNINGS) {
    console.log(`Warning: ${msg}`);
  }
}
function unreachable(msg) {
  throw new Error(msg);
}
function assert(cond, msg) {
  if (!cond) {
    unreachable(msg);
  }
}
function _isValidProtocol(url) {
  switch (url?.protocol) {
    case "http:":
    case "https:":
    case "ftp:":
    case "mailto:":
    case "tel:":
      return true;
    default:
      return false;
  }
}
function createValidAbsoluteUrl(url, baseUrl = null, options = null) {
  if (!url) {
    return null;
  }
  try {
    if (options && typeof url === "string") {
      if (options.addDefaultProtocol && url.startsWith("www.")) {
        const dots = url.match(/\./g);
        if (dots?.length >= 2) {
          url = `http://${url}`;
        }
      }
      if (options.tryConvertEncoding) {
        try {
          url = stringToUTF8String(url);
        } catch {
        }
      }
    }
    const absoluteUrl = baseUrl ? new URL(url, baseUrl) : new URL(url);
    if (_isValidProtocol(absoluteUrl)) {
      return absoluteUrl;
    }
  } catch {
  }
  return null;
}
function shadow(obj, prop, value, nonSerializable = false) {
  Object.defineProperty(obj, prop, {
    value,
    enumerable: !nonSerializable,
    configurable: true,
    writable: false
  });
  return value;
}
var BaseException = function BaseExceptionClosure() {
  function BaseException2(message, name) {
    if (this.constructor === BaseException2) {
      unreachable("Cannot initialize BaseException.");
    }
    this.message = message;
    this.name = name;
  }
  BaseException2.prototype = new Error();
  BaseException2.constructor = BaseException2;
  return BaseException2;
}();
var PasswordException = class extends BaseException {
  constructor(msg, code) {
    super(msg, "PasswordException");
    this.code = code;
  }
};
var UnknownErrorException = class extends BaseException {
  constructor(msg, details) {
    super(msg, "UnknownErrorException");
    this.details = details;
  }
};
var InvalidPDFException = class extends BaseException {
  constructor(msg) {
    super(msg, "InvalidPDFException");
  }
};
var MissingPDFException = class extends BaseException {
  constructor(msg) {
    super(msg, "MissingPDFException");
  }
};
var UnexpectedResponseException = class extends BaseException {
  constructor(msg, status) {
    super(msg, "UnexpectedResponseException");
    this.status = status;
  }
};
var FormatError = class extends BaseException {
  constructor(msg) {
    super(msg, "FormatError");
  }
};
var AbortException = class extends BaseException {
  constructor(msg) {
    super(msg, "AbortException");
  }
};
function bytesToString(bytes) {
  if (typeof bytes !== "object" || bytes?.length === void 0) {
    unreachable("Invalid argument for bytesToString");
  }
  const length = bytes.length;
  const MAX_ARGUMENT_COUNT = 8192;
  if (length < MAX_ARGUMENT_COUNT) {
    return String.fromCharCode.apply(null, bytes);
  }
  const strBuf = [];
  for (let i = 0; i < length; i += MAX_ARGUMENT_COUNT) {
    const chunkEnd = Math.min(i + MAX_ARGUMENT_COUNT, length);
    const chunk = bytes.subarray(i, chunkEnd);
    strBuf.push(String.fromCharCode.apply(null, chunk));
  }
  return strBuf.join("");
}
function stringToBytes(str) {
  if (typeof str !== "string") {
    unreachable("Invalid argument for stringToBytes");
  }
  const length = str.length;
  const bytes = new Uint8Array(length);
  for (let i = 0; i < length; ++i) {
    bytes[i] = str.charCodeAt(i) & 255;
  }
  return bytes;
}
function string32(value) {
  return String.fromCharCode(value >> 24 & 255, value >> 16 & 255, value >> 8 & 255, value & 255);
}
function objectFromMap(map) {
  const obj = /* @__PURE__ */ Object.create(null);
  for (const [key, value] of map) {
    obj[key] = value;
  }
  return obj;
}
function isLittleEndian() {
  const buffer8 = new Uint8Array(4);
  buffer8[0] = 1;
  const view32 = new Uint32Array(buffer8.buffer, 0, 1);
  return view32[0] === 1;
}
function isEvalSupported() {
  try {
    new Function("");
    return true;
  } catch {
    return false;
  }
}
var util_FeatureTest = class {
  static get isLittleEndian() {
    return shadow(this, "isLittleEndian", isLittleEndian());
  }
  static get isEvalSupported() {
    return shadow(this, "isEvalSupported", isEvalSupported());
  }
  static get isOffscreenCanvasSupported() {
    return shadow(this, "isOffscreenCanvasSupported", typeof OffscreenCanvas !== "undefined");
  }
  static get platform() {
    if (typeof navigator !== "undefined" && typeof navigator?.platform === "string") {
      return shadow(this, "platform", {
        isMac: navigator.platform.includes("Mac")
      });
    }
    return shadow(this, "platform", {
      isMac: false
    });
  }
  static get isCSSRoundSupported() {
    return shadow(this, "isCSSRoundSupported", globalThis.CSS?.supports?.("width: round(1.5px, 1px)"));
  }
};
var hexNumbers = Array.from(Array(256).keys(), (n) => n.toString(16).padStart(2, "0"));
var Util = class {
  static makeHexColor(r, g, b) {
    return `#${hexNumbers[r]}${hexNumbers[g]}${hexNumbers[b]}`;
  }
  static scaleMinMax(transform, minMax) {
    let temp;
    if (transform[0]) {
      if (transform[0] < 0) {
        temp = minMax[0];
        minMax[0] = minMax[2];
        minMax[2] = temp;
      }
      minMax[0] *= transform[0];
      minMax[2] *= transform[0];
      if (transform[3] < 0) {
        temp = minMax[1];
        minMax[1] = minMax[3];
        minMax[3] = temp;
      }
      minMax[1] *= transform[3];
      minMax[3] *= transform[3];
    } else {
      temp = minMax[0];
      minMax[0] = minMax[1];
      minMax[1] = temp;
      temp = minMax[2];
      minMax[2] = minMax[3];
      minMax[3] = temp;
      if (transform[1] < 0) {
        temp = minMax[1];
        minMax[1] = minMax[3];
        minMax[3] = temp;
      }
      minMax[1] *= transform[1];
      minMax[3] *= transform[1];
      if (transform[2] < 0) {
        temp = minMax[0];
        minMax[0] = minMax[2];
        minMax[2] = temp;
      }
      minMax[0] *= transform[2];
      minMax[2] *= transform[2];
    }
    minMax[0] += transform[4];
    minMax[1] += transform[5];
    minMax[2] += transform[4];
    minMax[3] += transform[5];
  }
  static transform(m1, m2) {
    return [m1[0] * m2[0] + m1[2] * m2[1], m1[1] * m2[0] + m1[3] * m2[1], m1[0] * m2[2] + m1[2] * m2[3], m1[1] * m2[2] + m1[3] * m2[3], m1[0] * m2[4] + m1[2] * m2[5] + m1[4], m1[1] * m2[4] + m1[3] * m2[5] + m1[5]];
  }
  static applyTransform(p, m) {
    const xt = p[0] * m[0] + p[1] * m[2] + m[4];
    const yt = p[0] * m[1] + p[1] * m[3] + m[5];
    return [xt, yt];
  }
  static applyInverseTransform(p, m) {
    const d = m[0] * m[3] - m[1] * m[2];
    const xt = (p[0] * m[3] - p[1] * m[2] + m[2] * m[5] - m[4] * m[3]) / d;
    const yt = (-p[0] * m[1] + p[1] * m[0] + m[4] * m[1] - m[5] * m[0]) / d;
    return [xt, yt];
  }
  static getAxialAlignedBoundingBox(r, m) {
    const p1 = this.applyTransform(r, m);
    const p2 = this.applyTransform(r.slice(2, 4), m);
    const p3 = this.applyTransform([r[0], r[3]], m);
    const p4 = this.applyTransform([r[2], r[1]], m);
    return [Math.min(p1[0], p2[0], p3[0], p4[0]), Math.min(p1[1], p2[1], p3[1], p4[1]), Math.max(p1[0], p2[0], p3[0], p4[0]), Math.max(p1[1], p2[1], p3[1], p4[1])];
  }
  static inverseTransform(m) {
    const d = m[0] * m[3] - m[1] * m[2];
    return [m[3] / d, -m[1] / d, -m[2] / d, m[0] / d, (m[2] * m[5] - m[4] * m[3]) / d, (m[4] * m[1] - m[5] * m[0]) / d];
  }
  static singularValueDecompose2dScale(m) {
    const transpose = [m[0], m[2], m[1], m[3]];
    const a = m[0] * transpose[0] + m[1] * transpose[2];
    const b = m[0] * transpose[1] + m[1] * transpose[3];
    const c = m[2] * transpose[0] + m[3] * transpose[2];
    const d = m[2] * transpose[1] + m[3] * transpose[3];
    const first = (a + d) / 2;
    const second = Math.sqrt((a + d) ** 2 - 4 * (a * d - c * b)) / 2;
    const sx = first + second || 1;
    const sy = first - second || 1;
    return [Math.sqrt(sx), Math.sqrt(sy)];
  }
  static normalizeRect(rect) {
    const r = rect.slice(0);
    if (rect[0] > rect[2]) {
      r[0] = rect[2];
      r[2] = rect[0];
    }
    if (rect[1] > rect[3]) {
      r[1] = rect[3];
      r[3] = rect[1];
    }
    return r;
  }
  static intersect(rect1, rect2) {
    const xLow = Math.max(Math.min(rect1[0], rect1[2]), Math.min(rect2[0], rect2[2]));
    const xHigh = Math.min(Math.max(rect1[0], rect1[2]), Math.max(rect2[0], rect2[2]));
    if (xLow > xHigh) {
      return null;
    }
    const yLow = Math.max(Math.min(rect1[1], rect1[3]), Math.min(rect2[1], rect2[3]));
    const yHigh = Math.min(Math.max(rect1[1], rect1[3]), Math.max(rect2[1], rect2[3]));
    if (yLow > yHigh) {
      return null;
    }
    return [xLow, yLow, xHigh, yHigh];
  }
  static #getExtremumOnCurve(x0, x1, x2, x3, y0, y1, y2, y3, t, minMax) {
    if (t <= 0 || t >= 1) {
      return;
    }
    const mt = 1 - t;
    const tt = t * t;
    const ttt = tt * t;
    const x = mt * (mt * (mt * x0 + 3 * t * x1) + 3 * tt * x2) + ttt * x3;
    const y = mt * (mt * (mt * y0 + 3 * t * y1) + 3 * tt * y2) + ttt * y3;
    minMax[0] = Math.min(minMax[0], x);
    minMax[1] = Math.min(minMax[1], y);
    minMax[2] = Math.max(minMax[2], x);
    minMax[3] = Math.max(minMax[3], y);
  }
  static #getExtremum(x0, x1, x2, x3, y0, y1, y2, y3, a, b, c, minMax) {
    if (Math.abs(a) < 1e-12) {
      if (Math.abs(b) >= 1e-12) {
        this.#getExtremumOnCurve(x0, x1, x2, x3, y0, y1, y2, y3, -c / b, minMax);
      }
      return;
    }
    const delta = b ** 2 - 4 * c * a;
    if (delta < 0) {
      return;
    }
    const sqrtDelta = Math.sqrt(delta);
    const a2 = 2 * a;
    this.#getExtremumOnCurve(x0, x1, x2, x3, y0, y1, y2, y3, (-b + sqrtDelta) / a2, minMax);
    this.#getExtremumOnCurve(x0, x1, x2, x3, y0, y1, y2, y3, (-b - sqrtDelta) / a2, minMax);
  }
  static bezierBoundingBox(x0, y0, x1, y1, x2, y2, x3, y3, minMax) {
    if (minMax) {
      minMax[0] = Math.min(minMax[0], x0, x3);
      minMax[1] = Math.min(minMax[1], y0, y3);
      minMax[2] = Math.max(minMax[2], x0, x3);
      minMax[3] = Math.max(minMax[3], y0, y3);
    } else {
      minMax = [Math.min(x0, x3), Math.min(y0, y3), Math.max(x0, x3), Math.max(y0, y3)];
    }
    this.#getExtremum(x0, x1, x2, x3, y0, y1, y2, y3, 3 * (-x0 + 3 * (x1 - x2) + x3), 6 * (x0 - 2 * x1 + x2), 3 * (x1 - x0), minMax);
    this.#getExtremum(x0, x1, x2, x3, y0, y1, y2, y3, 3 * (-y0 + 3 * (y1 - y2) + y3), 6 * (y0 - 2 * y1 + y2), 3 * (y1 - y0), minMax);
    return minMax;
  }
};
function stringToUTF8String(str) {
  return decodeURIComponent(escape(str));
}
var NormalizeRegex = null;
var NormalizationMap = null;
function normalizeUnicode(str) {
  if (!NormalizeRegex) {
    NormalizeRegex = /([\u00a0\u00b5\u037e\u0eb3\u2000-\u200a\u202f\u2126\ufb00-\ufb04\ufb06\ufb20-\ufb36\ufb38-\ufb3c\ufb3e\ufb40-\ufb41\ufb43-\ufb44\ufb46-\ufba1\ufba4-\ufba9\ufbae-\ufbb1\ufbd3-\ufbdc\ufbde-\ufbe7\ufbea-\ufbf8\ufbfc-\ufbfd\ufc00-\ufc5d\ufc64-\ufcf1\ufcf5-\ufd3d\ufd88\ufdf4\ufdfa-\ufdfb\ufe71\ufe77\ufe79\ufe7b\ufe7d]+)|(\ufb05+)/gu;
    NormalizationMap = /* @__PURE__ */ new Map([["\uFB05", "\u017Ft"]]);
  }
  return str.replaceAll(NormalizeRegex, (_, p1, p2) => p1 ? p1.normalize("NFKC") : NormalizationMap.get(p2));
}
function getUuid() {
  if (typeof crypto !== "undefined" && typeof crypto?.randomUUID === "function") {
    return crypto.randomUUID();
  }
  const buf = new Uint8Array(32);
  if (typeof crypto !== "undefined" && typeof crypto?.getRandomValues === "function") {
    crypto.getRandomValues(buf);
  } else {
    for (let i = 0; i < 32; i++) {
      buf[i] = Math.floor(Math.random() * 255);
    }
  }
  return bytesToString(buf);
}
var AnnotationPrefix = "pdfjs_internal_id_";
var FontRenderOps = {
  BEZIER_CURVE_TO: 0,
  MOVE_TO: 1,
  LINE_TO: 2,
  QUADRATIC_CURVE_TO: 3,
  RESTORE: 4,
  SAVE: 5,
  SCALE: 6,
  TRANSFORM: 7,
  TRANSLATE: 8
};
var BaseFilterFactory = class _BaseFilterFactory {
  constructor() {
    if (this.constructor === _BaseFilterFactory) {
      unreachable("Cannot initialize BaseFilterFactory.");
    }
  }
  addFilter(maps) {
    return "none";
  }
  addHCMFilter(fgColor, bgColor) {
    return "none";
  }
  addAlphaFilter(map) {
    return "none";
  }
  addLuminosityFilter(map) {
    return "none";
  }
  addHighlightHCMFilter(filterName, fgColor, bgColor, newFgColor, newBgColor) {
    return "none";
  }
  destroy(keepHCM = false) {
  }
};
var BaseCanvasFactory = class _BaseCanvasFactory {
  #enableHWA = false;
  constructor({
    enableHWA = false
  } = {}) {
    if (this.constructor === _BaseCanvasFactory) {
      unreachable("Cannot initialize BaseCanvasFactory.");
    }
    this.#enableHWA = enableHWA;
  }
  create(width, height) {
    if (width <= 0 || height <= 0) {
      throw new Error("Invalid canvas size");
    }
    const canvas = this._createCanvas(width, height);
    return {
      canvas,
      context: canvas.getContext("2d", {
        willReadFrequently: !this.#enableHWA
      })
    };
  }
  reset(canvasAndContext, width, height) {
    if (!canvasAndContext.canvas) {
      throw new Error("Canvas is not specified");
    }
    if (width <= 0 || height <= 0) {
      throw new Error("Invalid canvas size");
    }
    canvasAndContext.canvas.width = width;
    canvasAndContext.canvas.height = height;
  }
  destroy(canvasAndContext) {
    if (!canvasAndContext.canvas) {
      throw new Error("Canvas is not specified");
    }
    canvasAndContext.canvas.width = 0;
    canvasAndContext.canvas.height = 0;
    canvasAndContext.canvas = null;
    canvasAndContext.context = null;
  }
  _createCanvas(width, height) {
    unreachable("Abstract method `_createCanvas` called.");
  }
};
var BaseCMapReaderFactory = class _BaseCMapReaderFactory {
  constructor({
    baseUrl = null,
    isCompressed = true
  }) {
    if (this.constructor === _BaseCMapReaderFactory) {
      unreachable("Cannot initialize BaseCMapReaderFactory.");
    }
    this.baseUrl = baseUrl;
    this.isCompressed = isCompressed;
  }
  async fetch({
    name
  }) {
    if (!this.baseUrl) {
      throw new Error('The CMap "baseUrl" parameter must be specified, ensure that the "cMapUrl" and "cMapPacked" API parameters are provided.');
    }
    if (!name) {
      throw new Error("CMap name must be specified.");
    }
    const url = this.baseUrl + name + (this.isCompressed ? ".bcmap" : "");
    const compressionType = this.isCompressed ? CMapCompressionType.BINARY : CMapCompressionType.NONE;
    return this._fetchData(url, compressionType).catch((reason) => {
      throw new Error(`Unable to load ${this.isCompressed ? "binary " : ""}CMap at: ${url}`);
    });
  }
  _fetchData(url, compressionType) {
    unreachable("Abstract method `_fetchData` called.");
  }
};
var BaseStandardFontDataFactory = class _BaseStandardFontDataFactory {
  constructor({
    baseUrl = null
  }) {
    if (this.constructor === _BaseStandardFontDataFactory) {
      unreachable("Cannot initialize BaseStandardFontDataFactory.");
    }
    this.baseUrl = baseUrl;
  }
  async fetch({
    filename
  }) {
    if (!this.baseUrl) {
      throw new Error('The standard font "baseUrl" parameter must be specified, ensure that the "standardFontDataUrl" API parameter is provided.');
    }
    if (!filename) {
      throw new Error("Font filename must be specified.");
    }
    const url = `${this.baseUrl}${filename}`;
    return this._fetchData(url).catch((reason) => {
      throw new Error(`Unable to load font data at: ${url}`);
    });
  }
  _fetchData(url) {
    unreachable("Abstract method `_fetchData` called.");
  }
};
var BaseSVGFactory = class _BaseSVGFactory {
  constructor() {
    if (this.constructor === _BaseSVGFactory) {
      unreachable("Cannot initialize BaseSVGFactory.");
    }
  }
  create(width, height, skipDimensions = false) {
    if (width <= 0 || height <= 0) {
      throw new Error("Invalid SVG dimensions");
    }
    const svg = this._createSVG("svg:svg");
    svg.setAttribute("version", "1.1");
    if (!skipDimensions) {
      svg.setAttribute("width", `${width}px`);
      svg.setAttribute("height", `${height}px`);
    }
    svg.setAttribute("preserveAspectRatio", "none");
    svg.setAttribute("viewBox", `0 0 ${width} ${height}`);
    return svg;
  }
  createElement(type) {
    if (typeof type !== "string") {
      throw new Error("Invalid SVG element type");
    }
    return this._createSVG(type);
  }
  _createSVG(type) {
    unreachable("Abstract method `_createSVG` called.");
  }
};
var SVG_NS = "http://www.w3.org/2000/svg";
var PixelsPerInch = class {
  static CSS = 96;
  static PDF = 72;
  static PDF_TO_CSS_UNITS = this.CSS / this.PDF;
};
var DOMFilterFactory = class extends BaseFilterFactory {
  #baseUrl;
  #_cache;
  #_defs;
  #docId;
  #document;
  #_hcmCache;
  #id = 0;
  constructor({
    docId,
    ownerDocument = globalThis.document
  } = {}) {
    super();
    this.#docId = docId;
    this.#document = ownerDocument;
  }
  get #cache() {
    return this.#_cache ||= /* @__PURE__ */ new Map();
  }
  get #hcmCache() {
    return this.#_hcmCache ||= /* @__PURE__ */ new Map();
  }
  get #defs() {
    if (!this.#_defs) {
      const div = this.#document.createElement("div");
      const {
        style
      } = div;
      style.visibility = "hidden";
      style.contain = "strict";
      style.width = style.height = 0;
      style.position = "absolute";
      style.top = style.left = 0;
      style.zIndex = -1;
      const svg = this.#document.createElementNS(SVG_NS, "svg");
      svg.setAttribute("width", 0);
      svg.setAttribute("height", 0);
      this.#_defs = this.#document.createElementNS(SVG_NS, "defs");
      div.append(svg);
      svg.append(this.#_defs);
      this.#document.body.append(div);
    }
    return this.#_defs;
  }
  #createTables(maps) {
    if (maps.length === 1) {
      const mapR2 = maps[0];
      const buffer = new Array(256);
      for (let i = 0; i < 256; i++) {
        buffer[i] = mapR2[i] / 255;
      }
      const table = buffer.join(",");
      return [table, table, table];
    }
    const [mapR, mapG, mapB] = maps;
    const bufferR = new Array(256);
    const bufferG = new Array(256);
    const bufferB = new Array(256);
    for (let i = 0; i < 256; i++) {
      bufferR[i] = mapR[i] / 255;
      bufferG[i] = mapG[i] / 255;
      bufferB[i] = mapB[i] / 255;
    }
    return [bufferR.join(","), bufferG.join(","), bufferB.join(",")];
  }
  #createUrl(id) {
    if (this.#baseUrl === void 0) {
      this.#baseUrl = "";
      const url = this.#document.URL;
      if (url !== this.#document.baseURI) {
        if (isDataScheme(url)) {
          warn('#createUrl: ignore "data:"-URL for performance reasons.');
        } else {
          this.#baseUrl = url.split("#", 1)[0];
        }
      }
    }
    return `url(${this.#baseUrl}#${id})`;
  }
  addFilter(maps) {
    if (!maps) {
      return "none";
    }
    let value = this.#cache.get(maps);
    if (value) {
      return value;
    }
    const [tableR, tableG, tableB] = this.#createTables(maps);
    const key = maps.length === 1 ? tableR : `${tableR}${tableG}${tableB}`;
    value = this.#cache.get(key);
    if (value) {
      this.#cache.set(maps, value);
      return value;
    }
    const id = `g_${this.#docId}_transfer_map_${this.#id++}`;
    const url = this.#createUrl(id);
    this.#cache.set(maps, url);
    this.#cache.set(key, url);
    const filter = this.#createFilter(id);
    this.#addTransferMapConversion(tableR, tableG, tableB, filter);
    return url;
  }
  addHCMFilter(fgColor, bgColor) {
    const key = `${fgColor}-${bgColor}`;
    const filterName = "base";
    let info2 = this.#hcmCache.get(filterName);
    if (info2?.key === key) {
      return info2.url;
    }
    if (info2) {
      info2.filter?.remove();
      info2.key = key;
      info2.url = "none";
      info2.filter = null;
    } else {
      info2 = {
        key,
        url: "none",
        filter: null
      };
      this.#hcmCache.set(filterName, info2);
    }
    if (!fgColor || !bgColor) {
      return info2.url;
    }
    const fgRGB = this.#getRGB(fgColor);
    fgColor = Util.makeHexColor(...fgRGB);
    const bgRGB = this.#getRGB(bgColor);
    bgColor = Util.makeHexColor(...bgRGB);
    this.#defs.style.color = "";
    if (fgColor === "#000000" && bgColor === "#ffffff" || fgColor === bgColor) {
      return info2.url;
    }
    const map = new Array(256);
    for (let i = 0; i <= 255; i++) {
      const x = i / 255;
      map[i] = x <= 0.03928 ? x / 12.92 : ((x + 0.055) / 1.055) ** 2.4;
    }
    const table = map.join(",");
    const id = `g_${this.#docId}_hcm_filter`;
    const filter = info2.filter = this.#createFilter(id);
    this.#addTransferMapConversion(table, table, table, filter);
    this.#addGrayConversion(filter);
    const getSteps = (c, n) => {
      const start = fgRGB[c] / 255;
      const end = bgRGB[c] / 255;
      const arr = new Array(n + 1);
      for (let i = 0; i <= n; i++) {
        arr[i] = start + i / n * (end - start);
      }
      return arr.join(",");
    };
    this.#addTransferMapConversion(getSteps(0, 5), getSteps(1, 5), getSteps(2, 5), filter);
    info2.url = this.#createUrl(id);
    return info2.url;
  }
  addAlphaFilter(map) {
    let value = this.#cache.get(map);
    if (value) {
      return value;
    }
    const [tableA] = this.#createTables([map]);
    const key = `alpha_${tableA}`;
    value = this.#cache.get(key);
    if (value) {
      this.#cache.set(map, value);
      return value;
    }
    const id = `g_${this.#docId}_alpha_map_${this.#id++}`;
    const url = this.#createUrl(id);
    this.#cache.set(map, url);
    this.#cache.set(key, url);
    const filter = this.#createFilter(id);
    this.#addTransferMapAlphaConversion(tableA, filter);
    return url;
  }
  addLuminosityFilter(map) {
    let value = this.#cache.get(map || "luminosity");
    if (value) {
      return value;
    }
    let tableA, key;
    if (map) {
      [tableA] = this.#createTables([map]);
      key = `luminosity_${tableA}`;
    } else {
      key = "luminosity";
    }
    value = this.#cache.get(key);
    if (value) {
      this.#cache.set(map, value);
      return value;
    }
    const id = `g_${this.#docId}_luminosity_map_${this.#id++}`;
    const url = this.#createUrl(id);
    this.#cache.set(map, url);
    this.#cache.set(key, url);
    const filter = this.#createFilter(id);
    this.#addLuminosityConversion(filter);
    if (map) {
      this.#addTransferMapAlphaConversion(tableA, filter);
    }
    return url;
  }
  addHighlightHCMFilter(filterName, fgColor, bgColor, newFgColor, newBgColor) {
    const key = `${fgColor}-${bgColor}-${newFgColor}-${newBgColor}`;
    let info2 = this.#hcmCache.get(filterName);
    if (info2?.key === key) {
      return info2.url;
    }
    if (info2) {
      info2.filter?.remove();
      info2.key = key;
      info2.url = "none";
      info2.filter = null;
    } else {
      info2 = {
        key,
        url: "none",
        filter: null
      };
      this.#hcmCache.set(filterName, info2);
    }
    if (!fgColor || !bgColor) {
      return info2.url;
    }
    const [fgRGB, bgRGB] = [fgColor, bgColor].map(this.#getRGB.bind(this));
    let fgGray = Math.round(0.2126 * fgRGB[0] + 0.7152 * fgRGB[1] + 0.0722 * fgRGB[2]);
    let bgGray = Math.round(0.2126 * bgRGB[0] + 0.7152 * bgRGB[1] + 0.0722 * bgRGB[2]);
    let [newFgRGB, newBgRGB] = [newFgColor, newBgColor].map(this.#getRGB.bind(this));
    if (bgGray < fgGray) {
      [fgGray, bgGray, newFgRGB, newBgRGB] = [bgGray, fgGray, newBgRGB, newFgRGB];
    }
    this.#defs.style.color = "";
    const getSteps = (fg, bg, n) => {
      const arr = new Array(256);
      const step = (bgGray - fgGray) / n;
      const newStart = fg / 255;
      const newStep = (bg - fg) / (255 * n);
      let prev = 0;
      for (let i = 0; i <= n; i++) {
        const k = Math.round(fgGray + i * step);
        const value = newStart + i * newStep;
        for (let j = prev; j <= k; j++) {
          arr[j] = value;
        }
        prev = k + 1;
      }
      for (let i = prev; i < 256; i++) {
        arr[i] = arr[prev - 1];
      }
      return arr.join(",");
    };
    const id = `g_${this.#docId}_hcm_${filterName}_filter`;
    const filter = info2.filter = this.#createFilter(id);
    this.#addGrayConversion(filter);
    this.#addTransferMapConversion(getSteps(newFgRGB[0], newBgRGB[0], 5), getSteps(newFgRGB[1], newBgRGB[1], 5), getSteps(newFgRGB[2], newBgRGB[2], 5), filter);
    info2.url = this.#createUrl(id);
    return info2.url;
  }
  destroy(keepHCM = false) {
    if (keepHCM && this.#hcmCache.size !== 0) {
      return;
    }
    if (this.#_defs) {
      this.#_defs.parentNode.parentNode.remove();
      this.#_defs = null;
    }
    if (this.#_cache) {
      this.#_cache.clear();
      this.#_cache = null;
    }
    this.#id = 0;
  }
  #addLuminosityConversion(filter) {
    const feColorMatrix = this.#document.createElementNS(SVG_NS, "feColorMatrix");
    feColorMatrix.setAttribute("type", "matrix");
    feColorMatrix.setAttribute("values", "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.3 0.59 0.11 0 0");
    filter.append(feColorMatrix);
  }
  #addGrayConversion(filter) {
    const feColorMatrix = this.#document.createElementNS(SVG_NS, "feColorMatrix");
    feColorMatrix.setAttribute("type", "matrix");
    feColorMatrix.setAttribute("values", "0.2126 0.7152 0.0722 0 0 0.2126 0.7152 0.0722 0 0 0.2126 0.7152 0.0722 0 0 0 0 0 1 0");
    filter.append(feColorMatrix);
  }
  #createFilter(id) {
    const filter = this.#document.createElementNS(SVG_NS, "filter");
    filter.setAttribute("color-interpolation-filters", "sRGB");
    filter.setAttribute("id", id);
    this.#defs.append(filter);
    return filter;
  }
  #appendFeFunc(feComponentTransfer, func, table) {
    const feFunc = this.#document.createElementNS(SVG_NS, func);
    feFunc.setAttribute("type", "discrete");
    feFunc.setAttribute("tableValues", table);
    feComponentTransfer.append(feFunc);
  }
  #addTransferMapConversion(rTable, gTable, bTable, filter) {
    const feComponentTransfer = this.#document.createElementNS(SVG_NS, "feComponentTransfer");
    filter.append(feComponentTransfer);
    this.#appendFeFunc(feComponentTransfer, "feFuncR", rTable);
    this.#appendFeFunc(feComponentTransfer, "feFuncG", gTable);
    this.#appendFeFunc(feComponentTransfer, "feFuncB", bTable);
  }
  #addTransferMapAlphaConversion(aTable, filter) {
    const feComponentTransfer = this.#document.createElementNS(SVG_NS, "feComponentTransfer");
    filter.append(feComponentTransfer);
    this.#appendFeFunc(feComponentTransfer, "feFuncA", aTable);
  }
  #getRGB(color) {
    this.#defs.style.color = color;
    return getRGB(getComputedStyle(this.#defs).getPropertyValue("color"));
  }
};
var DOMCanvasFactory = class extends BaseCanvasFactory {
  constructor({
    ownerDocument = globalThis.document,
    enableHWA = false
  } = {}) {
    super({
      enableHWA
    });
    this._document = ownerDocument;
  }
  _createCanvas(width, height) {
    const canvas = this._document.createElement("canvas");
    canvas.width = width;
    canvas.height = height;
    return canvas;
  }
};
async function fetchData(url, type = "text") {
  if (isValidFetchUrl(url, document.baseURI)) {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(response.statusText);
    }
    switch (type) {
      case "arraybuffer":
        return response.arrayBuffer();
      case "blob":
        return response.blob();
      case "json":
        return response.json();
    }
    return response.text();
  }
  return new Promise((resolve, reject) => {
    const request = new XMLHttpRequest();
    request.open("GET", url, true);
    request.responseType = type;
    request.onreadystatechange = () => {
      if (request.readyState !== XMLHttpRequest.DONE) {
        return;
      }
      if (request.status === 200 || request.status === 0) {
        switch (type) {
          case "arraybuffer":
          case "blob":
          case "json":
            resolve(request.response);
            return;
        }
        resolve(request.responseText);
        return;
      }
      reject(new Error(request.statusText));
    };
    request.send(null);
  });
}
var DOMCMapReaderFactory = class extends BaseCMapReaderFactory {
  _fetchData(url, compressionType) {
    return fetchData(url, this.isCompressed ? "arraybuffer" : "text").then((data) => ({
      cMapData: data instanceof ArrayBuffer ? new Uint8Array(data) : stringToBytes(data),
      compressionType
    }));
  }
};
var DOMStandardFontDataFactory = class extends BaseStandardFontDataFactory {
  _fetchData(url) {
    return fetchData(url, "arraybuffer").then((data) => new Uint8Array(data));
  }
};
var DOMSVGFactory = class extends BaseSVGFactory {
  _createSVG(type) {
    return document.createElementNS(SVG_NS, type);
  }
};
var PageViewport = class _PageViewport {
  constructor({
    viewBox,
    scale,
    rotation,
    offsetX = 0,
    offsetY = 0,
    dontFlip = false
  }) {
    this.viewBox = viewBox;
    this.scale = scale;
    this.rotation = rotation;
    this.offsetX = offsetX;
    this.offsetY = offsetY;
    const centerX = (viewBox[2] + viewBox[0]) / 2;
    const centerY = (viewBox[3] + viewBox[1]) / 2;
    let rotateA, rotateB, rotateC, rotateD;
    rotation %= 360;
    if (rotation < 0) {
      rotation += 360;
    }
    switch (rotation) {
      case 180:
        rotateA = -1;
        rotateB = 0;
        rotateC = 0;
        rotateD = 1;
        break;
      case 90:
        rotateA = 0;
        rotateB = 1;
        rotateC = 1;
        rotateD = 0;
        break;
      case 270:
        rotateA = 0;
        rotateB = -1;
        rotateC = -1;
        rotateD = 0;
        break;
      case 0:
        rotateA = 1;
        rotateB = 0;
        rotateC = 0;
        rotateD = -1;
        break;
      default:
        throw new Error("PageViewport: Invalid rotation, must be a multiple of 90 degrees.");
    }
    if (dontFlip) {
      rotateC = -rotateC;
      rotateD = -rotateD;
    }
    let offsetCanvasX, offsetCanvasY;
    let width, height;
    if (rotateA === 0) {
      offsetCanvasX = Math.abs(centerY - viewBox[1]) * scale + offsetX;
      offsetCanvasY = Math.abs(centerX - viewBox[0]) * scale + offsetY;
      width = (viewBox[3] - viewBox[1]) * scale;
      height = (viewBox[2] - viewBox[0]) * scale;
    } else {
      offsetCanvasX = Math.abs(centerX - viewBox[0]) * scale + offsetX;
      offsetCanvasY = Math.abs(centerY - viewBox[1]) * scale + offsetY;
      width = (viewBox[2] - viewBox[0]) * scale;
      height = (viewBox[3] - viewBox[1]) * scale;
    }
    this.transform = [rotateA * scale, rotateB * scale, rotateC * scale, rotateD * scale, offsetCanvasX - rotateA * scale * centerX - rotateC * scale * centerY, offsetCanvasY - rotateB * scale * centerX - rotateD * scale * centerY];
    this.width = width;
    this.height = height;
  }
  get rawDims() {
    const {
      viewBox
    } = this;
    return shadow(this, "rawDims", {
      pageWidth: viewBox[2] - viewBox[0],
      pageHeight: viewBox[3] - viewBox[1],
      pageX: viewBox[0],
      pageY: viewBox[1]
    });
  }
  clone({
    scale = this.scale,
    rotation = this.rotation,
    offsetX = this.offsetX,
    offsetY = this.offsetY,
    dontFlip = false
  } = {}) {
    return new _PageViewport({
      viewBox: this.viewBox.slice(),
      scale,
      rotation,
      offsetX,
      offsetY,
      dontFlip
    });
  }
  convertToViewportPoint(x, y) {
    return Util.applyTransform([x, y], this.transform);
  }
  convertToViewportRectangle(rect) {
    const topLeft = Util.applyTransform([rect[0], rect[1]], this.transform);
    const bottomRight = Util.applyTransform([rect[2], rect[3]], this.transform);
    return [topLeft[0], topLeft[1], bottomRight[0], bottomRight[1]];
  }
  convertToPdfPoint(x, y) {
    return Util.applyInverseTransform([x, y], this.transform);
  }
};
var RenderingCancelledException = class extends BaseException {
  constructor(msg, extraDelay = 0) {
    super(msg, "RenderingCancelledException");
    this.extraDelay = extraDelay;
  }
};
function isDataScheme(url) {
  const ii = url.length;
  let i = 0;
  while (i < ii && url[i].trim() === "") {
    i++;
  }
  return url.substring(i, i + 5).toLowerCase() === "data:";
}
function isPdfFile(filename) {
  return typeof filename === "string" && /\.pdf$/i.test(filename);
}
function getFilenameFromUrl(url) {
  [url] = url.split(/[#?]/, 1);
  return url.substring(url.lastIndexOf("/") + 1);
}
function getPdfFilenameFromUrl(url, defaultFilename = "document.pdf") {
  if (typeof url !== "string") {
    return defaultFilename;
  }
  if (isDataScheme(url)) {
    warn('getPdfFilenameFromUrl: ignore "data:"-URL for performance reasons.');
    return defaultFilename;
  }
  const reURI = /^(?:(?:[^:]+:)?\/\/[^/]+)?([^?#]*)(\?[^#]*)?(#.*)?$/;
  const reFilename = /[^/?#=]+\.pdf\b(?!.*\.pdf\b)/i;
  const splitURI = reURI.exec(url);
  let suggestedFilename = reFilename.exec(splitURI[1]) || reFilename.exec(splitURI[2]) || reFilename.exec(splitURI[3]);
  if (suggestedFilename) {
    suggestedFilename = suggestedFilename[0];
    if (suggestedFilename.includes("%")) {
      try {
        suggestedFilename = reFilename.exec(decodeURIComponent(suggestedFilename))[0];
      } catch {
      }
    }
  }
  return suggestedFilename || defaultFilename;
}
var StatTimer = class {
  started = /* @__PURE__ */ Object.create(null);
  times = [];
  time(name) {
    if (name in this.started) {
      warn(`Timer is already running for ${name}`);
    }
    this.started[name] = Date.now();
  }
  timeEnd(name) {
    if (!(name in this.started)) {
      warn(`Timer has not been started for ${name}`);
    }
    this.times.push({
      name,
      start: this.started[name],
      end: Date.now()
    });
    delete this.started[name];
  }
  toString() {
    const outBuf = [];
    let longest = 0;
    for (const {
      name
    } of this.times) {
      longest = Math.max(name.length, longest);
    }
    for (const {
      name,
      start,
      end
    } of this.times) {
      outBuf.push(`${name.padEnd(longest)} ${end - start}ms
`);
    }
    return outBuf.join("");
  }
};
function isValidFetchUrl(url, baseUrl) {
  try {
    const {
      protocol
    } = baseUrl ? new URL(url, baseUrl) : new URL(url);
    return protocol === "http:" || protocol === "https:";
  } catch {
    return false;
  }
}
function noContextMenu(e) {
  e.preventDefault();
}
var pdfDateStringRegex;
var PDFDateString = class {
  static toDateObject(input) {
    if (!input || typeof input !== "string") {
      return null;
    }
    pdfDateStringRegex ||= new RegExp("^D:(\\d{4})(\\d{2})?(\\d{2})?(\\d{2})?(\\d{2})?(\\d{2})?([Z|+|-])?(\\d{2})?'?(\\d{2})?'?");
    const matches = pdfDateStringRegex.exec(input);
    if (!matches) {
      return null;
    }
    const year = parseInt(matches[1], 10);
    let month = parseInt(matches[2], 10);
    month = month >= 1 && month <= 12 ? month - 1 : 0;
    let day = parseInt(matches[3], 10);
    day = day >= 1 && day <= 31 ? day : 1;
    let hour = parseInt(matches[4], 10);
    hour = hour >= 0 && hour <= 23 ? hour : 0;
    let minute = parseInt(matches[5], 10);
    minute = minute >= 0 && minute <= 59 ? minute : 0;
    let second = parseInt(matches[6], 10);
    second = second >= 0 && second <= 59 ? second : 0;
    const universalTimeRelation = matches[7] || "Z";
    let offsetHour = parseInt(matches[8], 10);
    offsetHour = offsetHour >= 0 && offsetHour <= 23 ? offsetHour : 0;
    let offsetMinute = parseInt(matches[9], 10) || 0;
    offsetMinute = offsetMinute >= 0 && offsetMinute <= 59 ? offsetMinute : 0;
    if (universalTimeRelation === "-") {
      hour += offsetHour;
      minute += offsetMinute;
    } else if (universalTimeRelation === "+") {
      hour -= offsetHour;
      minute -= offsetMinute;
    }
    return new Date(Date.UTC(year, month, day, hour, minute, second));
  }
};
function getXfaPageViewport(xfaPage, {
  scale = 1,
  rotation = 0
}) {
  const {
    width,
    height
  } = xfaPage.attributes.style;
  const viewBox = [0, 0, parseInt(width), parseInt(height)];
  return new PageViewport({
    viewBox,
    scale,
    rotation
  });
}
function getRGB(color) {
  if (color.startsWith("#")) {
    const colorRGB = parseInt(color.slice(1), 16);
    return [(colorRGB & 16711680) >> 16, (colorRGB & 65280) >> 8, colorRGB & 255];
  }
  if (color.startsWith("rgb(")) {
    return color.slice(4, -1).split(",").map((x) => parseInt(x));
  }
  if (color.startsWith("rgba(")) {
    return color.slice(5, -1).split(",").map((x) => parseInt(x)).slice(0, 3);
  }
  warn(`Not a valid color format: "${color}"`);
  return [0, 0, 0];
}
function getColorValues(colors) {
  const span = document.createElement("span");
  span.style.visibility = "hidden";
  document.body.append(span);
  for (const name of colors.keys()) {
    span.style.color = name;
    const computedColor = window.getComputedStyle(span).color;
    colors.set(name, getRGB(computedColor));
  }
  span.remove();
}
function getCurrentTransform(ctx) {
  const {
    a,
    b,
    c,
    d,
    e,
    f
  } = ctx.getTransform();
  return [a, b, c, d, e, f];
}
function getCurrentTransformInverse(ctx) {
  const {
    a,
    b,
    c,
    d,
    e,
    f
  } = ctx.getTransform().invertSelf();
  return [a, b, c, d, e, f];
}
function setLayerDimensions(div, viewport, mustFlip = false, mustRotate = true) {
  if (viewport instanceof PageViewport) {
    const {
      pageWidth,
      pageHeight
    } = viewport.rawDims;
    const {
      style
    } = div;
    const useRound = util_FeatureTest.isCSSRoundSupported;
    const w = `var(--scale-factor) * ${pageWidth}px`, h = `var(--scale-factor) * ${pageHeight}px`;
    const widthStr = useRound ? `round(${w}, 1px)` : `calc(${w})`, heightStr = useRound ? `round(${h}, 1px)` : `calc(${h})`;
    if (!mustFlip || viewport.rotation % 180 === 0) {
      style.width = widthStr;
      style.height = heightStr;
    } else {
      style.width = heightStr;
      style.height = widthStr;
    }
  }
  if (mustRotate) {
    div.setAttribute("data-main-rotation", viewport.rotation);
  }
}
var EditorToolbar = class _EditorToolbar {
  #toolbar = null;
  #colorPicker = null;
  #editor;
  #buttons = null;
  constructor(editor) {
    this.#editor = editor;
  }
  render() {
    const editToolbar = this.#toolbar = document.createElement("div");
    editToolbar.className = "editToolbar";
    editToolbar.setAttribute("role", "toolbar");
    const signal = this.#editor._uiManager._signal;
    editToolbar.addEventListener("contextmenu", noContextMenu, {
      signal
    });
    editToolbar.addEventListener("pointerdown", _EditorToolbar.#pointerDown, {
      signal
    });
    const buttons = this.#buttons = document.createElement("div");
    buttons.className = "buttons";
    editToolbar.append(buttons);
    const position = this.#editor.toolbarPosition;
    if (position) {
      const {
        style
      } = editToolbar;
      const x = this.#editor._uiManager.direction === "ltr" ? 1 - position[0] : position[0];
      style.insetInlineEnd = `${100 * x}%`;
      style.top = `calc(${100 * position[1]}% + var(--editor-toolbar-vert-offset))`;
    }
    this.#addDeleteButton();
    return editToolbar;
  }
  static #pointerDown(e) {
    e.stopPropagation();
  }
  #focusIn(e) {
    this.#editor._focusEventsAllowed = false;
    e.preventDefault();
    e.stopPropagation();
  }
  #focusOut(e) {
    this.#editor._focusEventsAllowed = true;
    e.preventDefault();
    e.stopPropagation();
  }
  #addListenersToElement(element) {
    const signal = this.#editor._uiManager._signal;
    element.addEventListener("focusin", this.#focusIn.bind(this), {
      capture: true,
      signal
    });
    element.addEventListener("focusout", this.#focusOut.bind(this), {
      capture: true,
      signal
    });
    element.addEventListener("contextmenu", noContextMenu, {
      signal
    });
  }
  hide() {
    this.#toolbar.classList.add("hidden");
    this.#colorPicker?.hideDropdown();
  }
  show() {
    this.#toolbar.classList.remove("hidden");
  }
  #addDeleteButton() {
    const button = document.createElement("button");
    button.className = "delete";
    button.tabIndex = 0;
    button.setAttribute("data-l10n-id", `pdfjs-editor-remove-${this.#editor.editorType}-button`);
    this.#addListenersToElement(button);
    button.addEventListener("click", (e) => {
      this.#editor._uiManager.delete();
    }, {
      signal: this.#editor._uiManager._signal
    });
    this.#buttons.append(button);
  }
  get #divider() {
    const divider = document.createElement("div");
    divider.className = "divider";
    return divider;
  }
  addAltTextButton(button) {
    this.#addListenersToElement(button);
    this.#buttons.prepend(button, this.#divider);
  }
  addColorPicker(colorPicker) {
    this.#colorPicker = colorPicker;
    const button = colorPicker.renderButton();
    this.#addListenersToElement(button);
    this.#buttons.prepend(button, this.#divider);
  }
  remove() {
    this.#toolbar.remove();
    this.#colorPicker?.destroy();
    this.#colorPicker = null;
  }
};
var HighlightToolbar = class {
  #buttons = null;
  #toolbar = null;
  #uiManager;
  constructor(uiManager) {
    this.#uiManager = uiManager;
  }
  #render() {
    const editToolbar = this.#toolbar = document.createElement("div");
    editToolbar.className = "editToolbar";
    editToolbar.setAttribute("role", "toolbar");
    editToolbar.addEventListener("contextmenu", noContextMenu, {
      signal: this.#uiManager._signal
    });
    const buttons = this.#buttons = document.createElement("div");
    buttons.className = "buttons";
    editToolbar.append(buttons);
    this.#addHighlightButton();
    return editToolbar;
  }
  #getLastPoint(boxes, isLTR) {
    let lastY = 0;
    let lastX = 0;
    for (const box of boxes) {
      const y = box.y + box.height;
      if (y < lastY) {
        continue;
      }
      const x = box.x + (isLTR ? box.width : 0);
      if (y > lastY) {
        lastX = x;
        lastY = y;
        continue;
      }
      if (isLTR) {
        if (x > lastX) {
          lastX = x;
        }
      } else if (x < lastX) {
        lastX = x;
      }
    }
    return [isLTR ? 1 - lastX : lastX, lastY];
  }
  show(parent, boxes, isLTR) {
    const [x, y] = this.#getLastPoint(boxes, isLTR);
    const {
      style
    } = this.#toolbar ||= this.#render();
    parent.append(this.#toolbar);
    style.insetInlineEnd = `${100 * x}%`;
    style.top = `calc(${100 * y}% + var(--editor-toolbar-vert-offset))`;
  }
  hide() {
    this.#toolbar.remove();
  }
  #addHighlightButton() {
    const button = document.createElement("button");
    button.className = "highlightButton";
    button.tabIndex = 0;
    button.setAttribute("data-l10n-id", `pdfjs-highlight-floating-button1`);
    const span = document.createElement("span");
    button.append(span);
    span.className = "visuallyHidden";
    span.setAttribute("data-l10n-id", "pdfjs-highlight-floating-button-label");
    const signal = this.#uiManager._signal;
    button.addEventListener("contextmenu", noContextMenu, {
      signal
    });
    button.addEventListener("click", () => {
      this.#uiManager.highlightSelection("floating_button");
    }, {
      signal
    });
    this.#buttons.append(button);
  }
};
function bindEvents(obj, element, names) {
  for (const name of names) {
    element.addEventListener(name, obj[name].bind(obj));
  }
}
function opacityToHex(opacity) {
  return Math.round(Math.min(255, Math.max(1, 255 * opacity))).toString(16).padStart(2, "0");
}
var IdManager = class {
  #id = 0;
  get id() {
    return `${AnnotationEditorPrefix}${this.#id++}`;
  }
};
var ImageManager = class _ImageManager {
  #baseId = getUuid();
  #id = 0;
  #cache = null;
  static get _isSVGFittingCanvas() {
    const svg = `data:image/svg+xml;charset=UTF-8,<svg viewBox="0 0 1 1" width="1" height="1" xmlns="http://www.w3.org/2000/svg"><rect width="1" height="1" style="fill:red;"/></svg>`;
    const canvas = new OffscreenCanvas(1, 3);
    const ctx = canvas.getContext("2d", {
      willReadFrequently: true
    });
    const image = new Image();
    image.src = svg;
    const promise = image.decode().then(() => {
      ctx.drawImage(image, 0, 0, 1, 1, 0, 0, 1, 3);
      return new Uint32Array(ctx.getImageData(0, 0, 1, 1).data.buffer)[0] === 0;
    });
    return shadow(this, "_isSVGFittingCanvas", promise);
  }
  async #get(key, rawData) {
    this.#cache ||= /* @__PURE__ */ new Map();
    let data = this.#cache.get(key);
    if (data === null) {
      return null;
    }
    if (data?.bitmap) {
      data.refCounter += 1;
      return data;
    }
    try {
      data ||= {
        bitmap: null,
        id: `image_${this.#baseId}_${this.#id++}`,
        refCounter: 0,
        isSvg: false
      };
      let image;
      if (typeof rawData === "string") {
        data.url = rawData;
        image = await fetchData(rawData, "blob");
      } else {
        image = data.file = rawData;
      }
      if (image.type === "image/svg+xml") {
        const mustRemoveAspectRatioPromise = _ImageManager._isSVGFittingCanvas;
        const fileReader = new FileReader();
        const imageElement = new Image();
        const imagePromise = new Promise((resolve, reject) => {
          imageElement.onload = () => {
            data.bitmap = imageElement;
            data.isSvg = true;
            resolve();
          };
          fileReader.onload = async () => {
            const url = data.svgUrl = fileReader.result;
            imageElement.src = await mustRemoveAspectRatioPromise ? `${url}#svgView(preserveAspectRatio(none))` : url;
          };
          imageElement.onerror = fileReader.onerror = reject;
        });
        fileReader.readAsDataURL(image);
        await imagePromise;
      } else {
        data.bitmap = await createImageBitmap(image);
      }
      data.refCounter = 1;
    } catch (e) {
      console.error(e);
      data = null;
    }
    this.#cache.set(key, data);
    if (data) {
      this.#cache.set(data.id, data);
    }
    return data;
  }
  async getFromFile(file) {
    const {
      lastModified,
      name,
      size,
      type
    } = file;
    return this.#get(`${lastModified}_${name}_${size}_${type}`, file);
  }
  async getFromUrl(url) {
    return this.#get(url, url);
  }
  async getFromId(id) {
    this.#cache ||= /* @__PURE__ */ new Map();
    const data = this.#cache.get(id);
    if (!data) {
      return null;
    }
    if (data.bitmap) {
      data.refCounter += 1;
      return data;
    }
    if (data.file) {
      return this.getFromFile(data.file);
    }
    return this.getFromUrl(data.url);
  }
  getSvgUrl(id) {
    const data = this.#cache.get(id);
    if (!data?.isSvg) {
      return null;
    }
    return data.svgUrl;
  }
  deleteId(id) {
    this.#cache ||= /* @__PURE__ */ new Map();
    const data = this.#cache.get(id);
    if (!data) {
      return;
    }
    data.refCounter -= 1;
    if (data.refCounter !== 0) {
      return;
    }
    data.bitmap = null;
  }
  isValidId(id) {
    return id.startsWith(`image_${this.#baseId}_`);
  }
};
var CommandManager = class {
  #commands = [];
  #locked = false;
  #maxSize;
  #position = -1;
  constructor(maxSize = 128) {
    this.#maxSize = maxSize;
  }
  add({
    cmd,
    undo,
    post,
    mustExec,
    type = NaN,
    overwriteIfSameType = false,
    keepUndo = false
  }) {
    if (mustExec) {
      cmd();
    }
    if (this.#locked) {
      return;
    }
    const save = {
      cmd,
      undo,
      post,
      type
    };
    if (this.#position === -1) {
      if (this.#commands.length > 0) {
        this.#commands.length = 0;
      }
      this.#position = 0;
      this.#commands.push(save);
      return;
    }
    if (overwriteIfSameType && this.#commands[this.#position].type === type) {
      if (keepUndo) {
        save.undo = this.#commands[this.#position].undo;
      }
      this.#commands[this.#position] = save;
      return;
    }
    const next = this.#position + 1;
    if (next === this.#maxSize) {
      this.#commands.splice(0, 1);
    } else {
      this.#position = next;
      if (next < this.#commands.length) {
        this.#commands.splice(next);
      }
    }
    this.#commands.push(save);
  }
  undo() {
    if (this.#position === -1) {
      return;
    }
    this.#locked = true;
    const {
      undo,
      post
    } = this.#commands[this.#position];
    undo();
    post?.();
    this.#locked = false;
    this.#position -= 1;
  }
  redo() {
    if (this.#position < this.#commands.length - 1) {
      this.#position += 1;
      this.#locked = true;
      const {
        cmd,
        post
      } = this.#commands[this.#position];
      cmd();
      post?.();
      this.#locked = false;
    }
  }
  hasSomethingToUndo() {
    return this.#position !== -1;
  }
  hasSomethingToRedo() {
    return this.#position < this.#commands.length - 1;
  }
  destroy() {
    this.#commands = null;
  }
};
var KeyboardManager = class {
  constructor(callbacks) {
    this.buffer = [];
    this.callbacks = /* @__PURE__ */ new Map();
    this.allKeys = /* @__PURE__ */ new Set();
    const {
      isMac
    } = util_FeatureTest.platform;
    for (const [keys, callback, options = {}] of callbacks) {
      for (const key of keys) {
        const isMacKey = key.startsWith("mac+");
        if (isMac && isMacKey) {
          this.callbacks.set(key.slice(4), {
            callback,
            options
          });
          this.allKeys.add(key.split("+").at(-1));
        } else if (!isMac && !isMacKey) {
          this.callbacks.set(key, {
            callback,
            options
          });
          this.allKeys.add(key.split("+").at(-1));
        }
      }
    }
  }
  #serialize(event) {
    if (event.altKey) {
      this.buffer.push("alt");
    }
    if (event.ctrlKey) {
      this.buffer.push("ctrl");
    }
    if (event.metaKey) {
      this.buffer.push("meta");
    }
    if (event.shiftKey) {
      this.buffer.push("shift");
    }
    this.buffer.push(event.key);
    const str = this.buffer.join("+");
    this.buffer.length = 0;
    return str;
  }
  exec(self, event) {
    if (!this.allKeys.has(event.key)) {
      return;
    }
    const info2 = this.callbacks.get(this.#serialize(event));
    if (!info2) {
      return;
    }
    const {
      callback,
      options: {
        bubbles = false,
        args = [],
        checker = null
      }
    } = info2;
    if (checker && !checker(self, event)) {
      return;
    }
    callback.bind(self, ...args, event)();
    if (!bubbles) {
      event.stopPropagation();
      event.preventDefault();
    }
  }
};
var ColorManager = class _ColorManager {
  static _colorsMapping = /* @__PURE__ */ new Map([["CanvasText", [0, 0, 0]], ["Canvas", [255, 255, 255]]]);
  get _colors() {
    const colors = /* @__PURE__ */ new Map([["CanvasText", null], ["Canvas", null]]);
    getColorValues(colors);
    return shadow(this, "_colors", colors);
  }
  convert(color) {
    const rgb = getRGB(color);
    if (!window.matchMedia("(forced-colors: active)").matches) {
      return rgb;
    }
    for (const [name, RGB] of this._colors) {
      if (RGB.every((x, i) => x === rgb[i])) {
        return _ColorManager._colorsMapping.get(name);
      }
    }
    return rgb;
  }
  getHexCode(name) {
    const rgb = this._colors.get(name);
    if (!rgb) {
      return name;
    }
    return Util.makeHexColor(...rgb);
  }
};
var AnnotationEditorUIManager = class _AnnotationEditorUIManager {
  #abortController = new AbortController();
  #activeEditor = null;
  #allEditors = /* @__PURE__ */ new Map();
  #allLayers = /* @__PURE__ */ new Map();
  #altTextManager = null;
  #annotationStorage = null;
  #changedExistingAnnotations = null;
  #commandManager = new CommandManager();
  #currentPageIndex = 0;
  #deletedAnnotationsElementIds = /* @__PURE__ */ new Set();
  #draggingEditors = null;
  #editorTypes = null;
  #editorsToRescale = /* @__PURE__ */ new Set();
  #enableHighlightFloatingButton = false;
  #enableUpdatedAddImage = false;
  #filterFactory = null;
  #focusMainContainerTimeoutId = null;
  #highlightColors = null;
  #highlightWhenShiftUp = false;
  #highlightToolbar = null;
  #idManager = new IdManager();
  #isEnabled = false;
  #isWaiting = false;
  #lastActiveElement = null;
  #mainHighlightColorPicker = null;
  #mlManager = null;
  #mode = AnnotationEditorType.NONE;
  #selectedEditors = /* @__PURE__ */ new Set();
  #selectedTextNode = null;
  #pageColors = null;
  #showAllStates = null;
  #boundBlur = this.blur.bind(this);
  #boundFocus = this.focus.bind(this);
  #boundCopy = this.copy.bind(this);
  #boundCut = this.cut.bind(this);
  #boundPaste = this.paste.bind(this);
  #boundKeydown = this.keydown.bind(this);
  #boundKeyup = this.keyup.bind(this);
  #boundOnEditingAction = this.onEditingAction.bind(this);
  #boundOnPageChanging = this.onPageChanging.bind(this);
  #boundOnScaleChanging = this.onScaleChanging.bind(this);
  #boundOnRotationChanging = this.onRotationChanging.bind(this);
  #previousStates = {
    isEditing: false,
    isEmpty: true,
    hasSomethingToUndo: false,
    hasSomethingToRedo: false,
    hasSelectedEditor: false,
    hasSelectedText: false
  };
  #translation = [0, 0];
  #translationTimeoutId = null;
  #container = null;
  #viewer = null;
  static TRANSLATE_SMALL = 1;
  static TRANSLATE_BIG = 10;
  static get _keyboardManager() {
    const proto = _AnnotationEditorUIManager.prototype;
    const arrowChecker = (self) => self.#container.contains(document.activeElement) && document.activeElement.tagName !== "BUTTON" && self.hasSomethingToControl();
    const textInputChecker = (_self, {
      target: el
    }) => {
      if (el instanceof HTMLInputElement) {
        const {
          type
        } = el;
        return type !== "text" && type !== "number";
      }
      return true;
    };
    const small = this.TRANSLATE_SMALL;
    const big = this.TRANSLATE_BIG;
    return shadow(this, "_keyboardManager", new KeyboardManager([[["ctrl+a", "mac+meta+a"], proto.selectAll, {
      checker: textInputChecker
    }], [["ctrl+z", "mac+meta+z"], proto.undo, {
      checker: textInputChecker
    }], [["ctrl+y", "ctrl+shift+z", "mac+meta+shift+z", "ctrl+shift+Z", "mac+meta+shift+Z"], proto.redo, {
      checker: textInputChecker
    }], [["Backspace", "alt+Backspace", "ctrl+Backspace", "shift+Backspace", "mac+Backspace", "mac+alt+Backspace", "mac+ctrl+Backspace", "Delete", "ctrl+Delete", "shift+Delete", "mac+Delete"], proto.delete, {
      checker: textInputChecker
    }], [["Enter", "mac+Enter"], proto.addNewEditorFromKeyboard, {
      checker: (self, {
        target: el
      }) => !(el instanceof HTMLButtonElement) && self.#container.contains(el) && !self.isEnterHandled
    }], [[" ", "mac+ "], proto.addNewEditorFromKeyboard, {
      checker: (self, {
        target: el
      }) => !(el instanceof HTMLButtonElement) && self.#container.contains(document.activeElement)
    }], [["Escape", "mac+Escape"], proto.unselectAll], [["ArrowLeft", "mac+ArrowLeft"], proto.translateSelectedEditors, {
      args: [-small, 0],
      checker: arrowChecker
    }], [["ctrl+ArrowLeft", "mac+shift+ArrowLeft"], proto.translateSelectedEditors, {
      args: [-big, 0],
      checker: arrowChecker
    }], [["ArrowRight", "mac+ArrowRight"], proto.translateSelectedEditors, {
      args: [small, 0],
      checker: arrowChecker
    }], [["ctrl+ArrowRight", "mac+shift+ArrowRight"], proto.translateSelectedEditors, {
      args: [big, 0],
      checker: arrowChecker
    }], [["ArrowUp", "mac+ArrowUp"], proto.translateSelectedEditors, {
      args: [0, -small],
      checker: arrowChecker
    }], [["ctrl+ArrowUp", "mac+shift+ArrowUp"], proto.translateSelectedEditors, {
      args: [0, -big],
      checker: arrowChecker
    }], [["ArrowDown", "mac+ArrowDown"], proto.translateSelectedEditors, {
      args: [0, small],
      checker: arrowChecker
    }], [["ctrl+ArrowDown", "mac+shift+ArrowDown"], proto.translateSelectedEditors, {
      args: [0, big],
      checker: arrowChecker
    }]]));
  }
  constructor(container, viewer, altTextManager, eventBus, pdfDocument, pageColors, highlightColors, enableHighlightFloatingButton, enableUpdatedAddImage, mlManager) {
    this._signal = this.#abortController.signal;
    this.#container = container;
    this.#viewer = viewer;
    this.#altTextManager = altTextManager;
    this._eventBus = eventBus;
    this._eventBus._on("editingaction", this.#boundOnEditingAction);
    this._eventBus._on("pagechanging", this.#boundOnPageChanging);
    this._eventBus._on("scalechanging", this.#boundOnScaleChanging);
    this._eventBus._on("rotationchanging", this.#boundOnRotationChanging);
    this.#addSelectionListener();
    this.#addDragAndDropListeners();
    this.#addKeyboardManager();
    this.#annotationStorage = pdfDocument.annotationStorage;
    this.#filterFactory = pdfDocument.filterFactory;
    this.#pageColors = pageColors;
    this.#highlightColors = highlightColors || null;
    this.#enableHighlightFloatingButton = enableHighlightFloatingButton;
    this.#enableUpdatedAddImage = enableUpdatedAddImage;
    this.#mlManager = mlManager || null;
    this.viewParameters = {
      realScale: PixelsPerInch.PDF_TO_CSS_UNITS,
      rotation: 0
    };
    this.isShiftKeyDown = false;
  }
  destroy() {
    this.#abortController?.abort();
    this.#abortController = null;
    this._signal = null;
    this._eventBus._off("editingaction", this.#boundOnEditingAction);
    this._eventBus._off("pagechanging", this.#boundOnPageChanging);
    this._eventBus._off("scalechanging", this.#boundOnScaleChanging);
    this._eventBus._off("rotationchanging", this.#boundOnRotationChanging);
    for (const layer of this.#allLayers.values()) {
      layer.destroy();
    }
    this.#allLayers.clear();
    this.#allEditors.clear();
    this.#editorsToRescale.clear();
    this.#activeEditor = null;
    this.#selectedEditors.clear();
    this.#commandManager.destroy();
    this.#altTextManager?.destroy();
    this.#highlightToolbar?.hide();
    this.#highlightToolbar = null;
    if (this.#focusMainContainerTimeoutId) {
      clearTimeout(this.#focusMainContainerTimeoutId);
      this.#focusMainContainerTimeoutId = null;
    }
    if (this.#translationTimeoutId) {
      clearTimeout(this.#translationTimeoutId);
      this.#translationTimeoutId = null;
    }
  }
  async mlGuess(data) {
    return this.#mlManager?.guess(data) || null;
  }
  async isMLEnabledFor(name) {
    return !!await this.#mlManager?.isEnabledFor(name);
  }
  get useNewAltTextFlow() {
    return this.#enableUpdatedAddImage;
  }
  get hcmFilter() {
    return shadow(this, "hcmFilter", this.#pageColors ? this.#filterFactory.addHCMFilter(this.#pageColors.foreground, this.#pageColors.background) : "none");
  }
  get direction() {
    return shadow(this, "direction", getComputedStyle(this.#container).direction);
  }
  get highlightColors() {
    return shadow(this, "highlightColors", this.#highlightColors ? new Map(this.#highlightColors.split(",").map((pair) => pair.split("=").map((x) => x.trim()))) : null);
  }
  get highlightColorNames() {
    return shadow(this, "highlightColorNames", this.highlightColors ? new Map(Array.from(this.highlightColors, (e) => e.reverse())) : null);
  }
  setMainHighlightColorPicker(colorPicker) {
    this.#mainHighlightColorPicker = colorPicker;
  }
  editAltText(editor) {
    this.#altTextManager?.editAltText(this, editor);
  }
  switchToMode(mode, callback) {
    this._eventBus.on("annotationeditormodechanged", callback, {
      once: true,
      signal: this._signal
    });
    this._eventBus.dispatch("showannotationeditorui", {
      source: this,
      mode
    });
  }
  setPreference(name, value) {
    this._eventBus.dispatch("setpreference", {
      source: this,
      name,
      value
    });
  }
  onPageChanging({
    pageNumber
  }) {
    this.#currentPageIndex = pageNumber - 1;
  }
  focusMainContainer() {
    this.#container.focus();
  }
  findParent(x, y) {
    for (const layer of this.#allLayers.values()) {
      const {
        x: layerX,
        y: layerY,
        width,
        height
      } = layer.div.getBoundingClientRect();
      if (x >= layerX && x <= layerX + width && y >= layerY && y <= layerY + height) {
        return layer;
      }
    }
    return null;
  }
  disableUserSelect(value = false) {
    this.#viewer.classList.toggle("noUserSelect", value);
  }
  addShouldRescale(editor) {
    this.#editorsToRescale.add(editor);
  }
  removeShouldRescale(editor) {
    this.#editorsToRescale.delete(editor);
  }
  onScaleChanging({
    scale
  }) {
    this.commitOrRemove();
    this.viewParameters.realScale = scale * PixelsPerInch.PDF_TO_CSS_UNITS;
    for (const editor of this.#editorsToRescale) {
      editor.onScaleChanging();
    }
  }
  onRotationChanging({
    pagesRotation
  }) {
    this.commitOrRemove();
    this.viewParameters.rotation = pagesRotation;
  }
  #getAnchorElementForSelection({
    anchorNode
  }) {
    return anchorNode.nodeType === Node.TEXT_NODE ? anchorNode.parentElement : anchorNode;
  }
  #getLayerForTextLayer(textLayer) {
    const {
      currentLayer
    } = this;
    if (currentLayer.hasTextLayer(textLayer)) {
      return currentLayer;
    }
    for (const layer of this.#allLayers.values()) {
      if (layer.hasTextLayer(textLayer)) {
        return layer;
      }
    }
    return null;
  }
  highlightSelection(methodOfCreation = "") {
    const selection = document.getSelection();
    if (!selection || selection.isCollapsed) {
      return;
    }
    const {
      anchorNode,
      anchorOffset,
      focusNode,
      focusOffset
    } = selection;
    const text = selection.toString();
    const anchorElement = this.#getAnchorElementForSelection(selection);
    const textLayer = anchorElement.closest(".textLayer");
    const boxes = this.getSelectionBoxes(textLayer);
    if (!boxes) {
      return;
    }
    selection.empty();
    const layer = this.#getLayerForTextLayer(textLayer);
    const isNoneMode = this.#mode === AnnotationEditorType.NONE;
    const callback = () => {
      layer?.createAndAddNewEditor({
        x: 0,
        y: 0
      }, false, {
        methodOfCreation,
        boxes,
        anchorNode,
        anchorOffset,
        focusNode,
        focusOffset,
        text
      });
      if (isNoneMode) {
        this.showAllEditors("highlight", true, true);
      }
    };
    if (isNoneMode) {
      this.switchToMode(AnnotationEditorType.HIGHLIGHT, callback);
      return;
    }
    callback();
  }
  #displayHighlightToolbar() {
    const selection = document.getSelection();
    if (!selection || selection.isCollapsed) {
      return;
    }
    const anchorElement = this.#getAnchorElementForSelection(selection);
    const textLayer = anchorElement.closest(".textLayer");
    const boxes = this.getSelectionBoxes(textLayer);
    if (!boxes) {
      return;
    }
    this.#highlightToolbar ||= new HighlightToolbar(this);
    this.#highlightToolbar.show(textLayer, boxes, this.direction === "ltr");
  }
  addToAnnotationStorage(editor) {
    if (!editor.isEmpty() && this.#annotationStorage && !this.#annotationStorage.has(editor.id)) {
      this.#annotationStorage.setValue(editor.id, editor);
    }
  }
  #selectionChange() {
    const selection = document.getSelection();
    if (!selection || selection.isCollapsed) {
      if (this.#selectedTextNode) {
        this.#highlightToolbar?.hide();
        this.#selectedTextNode = null;
        this.#dispatchUpdateStates({
          hasSelectedText: false
        });
      }
      return;
    }
    const {
      anchorNode
    } = selection;
    if (anchorNode === this.#selectedTextNode) {
      return;
    }
    const anchorElement = this.#getAnchorElementForSelection(selection);
    const textLayer = anchorElement.closest(".textLayer");
    if (!textLayer) {
      if (this.#selectedTextNode) {
        this.#highlightToolbar?.hide();
        this.#selectedTextNode = null;
        this.#dispatchUpdateStates({
          hasSelectedText: false
        });
      }
      return;
    }
    this.#highlightToolbar?.hide();
    this.#selectedTextNode = anchorNode;
    this.#dispatchUpdateStates({
      hasSelectedText: true
    });
    if (this.#mode !== AnnotationEditorType.HIGHLIGHT && this.#mode !== AnnotationEditorType.NONE) {
      return;
    }
    if (this.#mode === AnnotationEditorType.HIGHLIGHT) {
      this.showAllEditors("highlight", true, true);
    }
    this.#highlightWhenShiftUp = this.isShiftKeyDown;
    if (!this.isShiftKeyDown) {
      const activeLayer = this.#mode === AnnotationEditorType.HIGHLIGHT ? this.#getLayerForTextLayer(textLayer) : null;
      activeLayer?.toggleDrawing();
      const signal = this._signal;
      const pointerup = (e) => {
        if (e.type === "pointerup" && e.button !== 0) {
          return;
        }
        activeLayer?.toggleDrawing(true);
        window.removeEventListener("pointerup", pointerup);
        window.removeEventListener("blur", pointerup);
        if (e.type === "pointerup") {
          this.#onSelectEnd("main_toolbar");
        }
      };
      window.addEventListener("pointerup", pointerup, {
        signal
      });
      window.addEventListener("blur", pointerup, {
        signal
      });
    }
  }
  #onSelectEnd(methodOfCreation = "") {
    if (this.#mode === AnnotationEditorType.HIGHLIGHT) {
      this.highlightSelection(methodOfCreation);
    } else if (this.#enableHighlightFloatingButton) {
      this.#displayHighlightToolbar();
    }
  }
  #addSelectionListener() {
    document.addEventListener("selectionchange", this.#selectionChange.bind(this), {
      signal: this._signal
    });
  }
  #addFocusManager() {
    const signal = this._signal;
    window.addEventListener("focus", this.#boundFocus, {
      signal
    });
    window.addEventListener("blur", this.#boundBlur, {
      signal
    });
  }
  #removeFocusManager() {
    window.removeEventListener("focus", this.#boundFocus);
    window.removeEventListener("blur", this.#boundBlur);
  }
  blur() {
    this.isShiftKeyDown = false;
    if (this.#highlightWhenShiftUp) {
      this.#highlightWhenShiftUp = false;
      this.#onSelectEnd("main_toolbar");
    }
    if (!this.hasSelection) {
      return;
    }
    const {
      activeElement
    } = document;
    for (const editor of this.#selectedEditors) {
      if (editor.div.contains(activeElement)) {
        this.#lastActiveElement = [editor, activeElement];
        editor._focusEventsAllowed = false;
        break;
      }
    }
  }
  focus() {
    if (!this.#lastActiveElement) {
      return;
    }
    const [lastEditor, lastActiveElement] = this.#lastActiveElement;
    this.#lastActiveElement = null;
    lastActiveElement.addEventListener("focusin", () => {
      lastEditor._focusEventsAllowed = true;
    }, {
      once: true,
      signal: this._signal
    });
    lastActiveElement.focus();
  }
  #addKeyboardManager() {
    const signal = this._signal;
    window.addEventListener("keydown", this.#boundKeydown, {
      signal
    });
    window.addEventListener("keyup", this.#boundKeyup, {
      signal
    });
  }
  #removeKeyboardManager() {
    window.removeEventListener("keydown", this.#boundKeydown);
    window.removeEventListener("keyup", this.#boundKeyup);
  }
  #addCopyPasteListeners() {
    const signal = this._signal;
    document.addEventListener("copy", this.#boundCopy, {
      signal
    });
    document.addEventListener("cut", this.#boundCut, {
      signal
    });
    document.addEventListener("paste", this.#boundPaste, {
      signal
    });
  }
  #removeCopyPasteListeners() {
    document.removeEventListener("copy", this.#boundCopy);
    document.removeEventListener("cut", this.#boundCut);
    document.removeEventListener("paste", this.#boundPaste);
  }
  #addDragAndDropListeners() {
    const signal = this._signal;
    document.addEventListener("dragover", this.dragOver.bind(this), {
      signal
    });
    document.addEventListener("drop", this.drop.bind(this), {
      signal
    });
  }
  addEditListeners() {
    this.#addKeyboardManager();
    this.#addCopyPasteListeners();
  }
  removeEditListeners() {
    this.#removeKeyboardManager();
    this.#removeCopyPasteListeners();
  }
  dragOver(event) {
    for (const {
      type
    } of event.dataTransfer.items) {
      for (const editorType of this.#editorTypes) {
        if (editorType.isHandlingMimeForPasting(type)) {
          event.dataTransfer.dropEffect = "copy";
          event.preventDefault();
          return;
        }
      }
    }
  }
  drop(event) {
    for (const item of event.dataTransfer.items) {
      for (const editorType of this.#editorTypes) {
        if (editorType.isHandlingMimeForPasting(item.type)) {
          editorType.paste(item, this.currentLayer);
          event.preventDefault();
          return;
        }
      }
    }
  }
  copy(event) {
    event.preventDefault();
    this.#activeEditor?.commitOrRemove();
    if (!this.hasSelection) {
      return;
    }
    const editors = [];
    for (const editor of this.#selectedEditors) {
      const serialized = editor.serialize(true);
      if (serialized) {
        editors.push(serialized);
      }
    }
    if (editors.length === 0) {
      return;
    }
    event.clipboardData.setData("application/pdfjs", JSON.stringify(editors));
  }
  cut(event) {
    this.copy(event);
    this.delete();
  }
  paste(event) {
    event.preventDefault();
    const {
      clipboardData
    } = event;
    for (const item of clipboardData.items) {
      for (const editorType of this.#editorTypes) {
        if (editorType.isHandlingMimeForPasting(item.type)) {
          editorType.paste(item, this.currentLayer);
          return;
        }
      }
    }
    let data = clipboardData.getData("application/pdfjs");
    if (!data) {
      return;
    }
    try {
      data = JSON.parse(data);
    } catch (ex) {
      warn(`paste: "${ex.message}".`);
      return;
    }
    if (!Array.isArray(data)) {
      return;
    }
    this.unselectAll();
    const layer = this.currentLayer;
    try {
      const newEditors = [];
      for (const editor of data) {
        const deserializedEditor = layer.deserialize(editor);
        if (!deserializedEditor) {
          return;
        }
        newEditors.push(deserializedEditor);
      }
      const cmd = () => {
        for (const editor of newEditors) {
          this.#addEditorToLayer(editor);
        }
        this.#selectEditors(newEditors);
      };
      const undo = () => {
        for (const editor of newEditors) {
          editor.remove();
        }
      };
      this.addCommands({
        cmd,
        undo,
        mustExec: true
      });
    } catch (ex) {
      warn(`paste: "${ex.message}".`);
    }
  }
  keydown(event) {
    if (!this.isShiftKeyDown && event.key === "Shift") {
      this.isShiftKeyDown = true;
    }
    if (this.#mode !== AnnotationEditorType.NONE && !this.isEditorHandlingKeyboard) {
      _AnnotationEditorUIManager._keyboardManager.exec(this, event);
    }
  }
  keyup(event) {
    if (this.isShiftKeyDown && event.key === "Shift") {
      this.isShiftKeyDown = false;
      if (this.#highlightWhenShiftUp) {
        this.#highlightWhenShiftUp = false;
        this.#onSelectEnd("main_toolbar");
      }
    }
  }
  onEditingAction({
    name
  }) {
    switch (name) {
      case "undo":
      case "redo":
      case "delete":
      case "selectAll":
        this[name]();
        break;
      case "highlightSelection":
        this.highlightSelection("context_menu");
        break;
    }
  }
  #dispatchUpdateStates(details) {
    const hasChanged = Object.entries(details).some(([key, value]) => this.#previousStates[key] !== value);
    if (hasChanged) {
      this._eventBus.dispatch("annotationeditorstateschanged", {
        source: this,
        details: Object.assign(this.#previousStates, details)
      });
      if (this.#mode === AnnotationEditorType.HIGHLIGHT && details.hasSelectedEditor === false) {
        this.#dispatchUpdateUI([[AnnotationEditorParamsType.HIGHLIGHT_FREE, true]]);
      }
    }
  }
  #dispatchUpdateUI(details) {
    this._eventBus.dispatch("annotationeditorparamschanged", {
      source: this,
      details
    });
  }
  setEditingState(isEditing) {
    if (isEditing) {
      this.#addFocusManager();
      this.#addCopyPasteListeners();
      this.#dispatchUpdateStates({
        isEditing: this.#mode !== AnnotationEditorType.NONE,
        isEmpty: this.#isEmpty(),
        hasSomethingToUndo: this.#commandManager.hasSomethingToUndo(),
        hasSomethingToRedo: this.#commandManager.hasSomethingToRedo(),
        hasSelectedEditor: false
      });
    } else {
      this.#removeFocusManager();
      this.#removeCopyPasteListeners();
      this.#dispatchUpdateStates({
        isEditing: false
      });
      this.disableUserSelect(false);
    }
  }
  registerEditorTypes(types) {
    if (this.#editorTypes) {
      return;
    }
    this.#editorTypes = types;
    for (const editorType of this.#editorTypes) {
      this.#dispatchUpdateUI(editorType.defaultPropertiesToUpdate);
    }
  }
  getId() {
    return this.#idManager.id;
  }
  get currentLayer() {
    return this.#allLayers.get(this.#currentPageIndex);
  }
  getLayer(pageIndex) {
    return this.#allLayers.get(pageIndex);
  }
  get currentPageIndex() {
    return this.#currentPageIndex;
  }
  addLayer(layer) {
    this.#allLayers.set(layer.pageIndex, layer);
    if (this.#isEnabled) {
      layer.enable();
    } else {
      layer.disable();
    }
  }
  removeLayer(layer) {
    this.#allLayers.delete(layer.pageIndex);
  }
  updateMode(mode, editId = null, isFromKeyboard = false) {
    if (this.#mode === mode) {
      return;
    }
    this.#mode = mode;
    if (mode === AnnotationEditorType.NONE) {
      this.setEditingState(false);
      this.#disableAll();
      return;
    }
    this.setEditingState(true);
    this.#enableAll();
    this.unselectAll();
    for (const layer of this.#allLayers.values()) {
      layer.updateMode(mode);
    }
    if (!editId && isFromKeyboard) {
      this.addNewEditorFromKeyboard();
      return;
    }
    if (!editId) {
      return;
    }
    for (const editor of this.#allEditors.values()) {
      if (editor.annotationElementId === editId) {
        this.setSelected(editor);
        editor.enterInEditMode();
        break;
      }
    }
  }
  addNewEditorFromKeyboard() {
    if (this.currentLayer.canCreateNewEmptyEditor()) {
      this.currentLayer.addNewEditor();
    }
  }
  updateToolbar(mode) {
    if (mode === this.#mode) {
      return;
    }
    this._eventBus.dispatch("switchannotationeditormode", {
      source: this,
      mode
    });
  }
  updateParams(type, value) {
    if (!this.#editorTypes) {
      return;
    }
    switch (type) {
      case AnnotationEditorParamsType.CREATE:
        this.currentLayer.addNewEditor();
        return;
      case AnnotationEditorParamsType.HIGHLIGHT_DEFAULT_COLOR:
        this.#mainHighlightColorPicker?.updateColor(value);
        break;
      case AnnotationEditorParamsType.HIGHLIGHT_SHOW_ALL:
        this._eventBus.dispatch("reporttelemetry", {
          source: this,
          details: {
            type: "editing",
            data: {
              type: "highlight",
              action: "toggle_visibility"
            }
          }
        });
        (this.#showAllStates ||= /* @__PURE__ */ new Map()).set(type, value);
        this.showAllEditors("highlight", value);
        break;
    }
    for (const editor of this.#selectedEditors) {
      editor.updateParams(type, value);
    }
    for (const editorType of this.#editorTypes) {
      editorType.updateDefaultParams(type, value);
    }
  }
  showAllEditors(type, visible, updateButton = false) {
    for (const editor of this.#allEditors.values()) {
      if (editor.editorType === type) {
        editor.show(visible);
      }
    }
    const state = this.#showAllStates?.get(AnnotationEditorParamsType.HIGHLIGHT_SHOW_ALL) ?? true;
    if (state !== visible) {
      this.#dispatchUpdateUI([[AnnotationEditorParamsType.HIGHLIGHT_SHOW_ALL, visible]]);
    }
  }
  enableWaiting(mustWait = false) {
    if (this.#isWaiting === mustWait) {
      return;
    }
    this.#isWaiting = mustWait;
    for (const layer of this.#allLayers.values()) {
      if (mustWait) {
        layer.disableClick();
      } else {
        layer.enableClick();
      }
      layer.div.classList.toggle("waiting", mustWait);
    }
  }
  #enableAll() {
    if (!this.#isEnabled) {
      this.#isEnabled = true;
      for (const layer of this.#allLayers.values()) {
        layer.enable();
      }
      for (const editor of this.#allEditors.values()) {
        editor.enable();
      }
    }
  }
  #disableAll() {
    this.unselectAll();
    if (this.#isEnabled) {
      this.#isEnabled = false;
      for (const layer of this.#allLayers.values()) {
        layer.disable();
      }
      for (const editor of this.#allEditors.values()) {
        editor.disable();
      }
    }
  }
  getEditors(pageIndex) {
    const editors = [];
    for (const editor of this.#allEditors.values()) {
      if (editor.pageIndex === pageIndex) {
        editors.push(editor);
      }
    }
    return editors;
  }
  getEditor(id) {
    return this.#allEditors.get(id);
  }
  addEditor(editor) {
    this.#allEditors.set(editor.id, editor);
  }
  removeEditor(editor) {
    if (editor.div.contains(document.activeElement)) {
      if (this.#focusMainContainerTimeoutId) {
        clearTimeout(this.#focusMainContainerTimeoutId);
      }
      this.#focusMainContainerTimeoutId = setTimeout(() => {
        this.focusMainContainer();
        this.#focusMainContainerTimeoutId = null;
      }, 0);
    }
    this.#allEditors.delete(editor.id);
    this.unselect(editor);
    if (!editor.annotationElementId || !this.#deletedAnnotationsElementIds.has(editor.annotationElementId)) {
      this.#annotationStorage?.remove(editor.id);
    }
  }
  addDeletedAnnotationElement(editor) {
    this.#deletedAnnotationsElementIds.add(editor.annotationElementId);
    this.addChangedExistingAnnotation(editor);
    editor.deleted = true;
  }
  isDeletedAnnotationElement(annotationElementId) {
    return this.#deletedAnnotationsElementIds.has(annotationElementId);
  }
  removeDeletedAnnotationElement(editor) {
    this.#deletedAnnotationsElementIds.delete(editor.annotationElementId);
    this.removeChangedExistingAnnotation(editor);
    editor.deleted = false;
  }
  #addEditorToLayer(editor) {
    const layer = this.#allLayers.get(editor.pageIndex);
    if (layer) {
      layer.addOrRebuild(editor);
    } else {
      this.addEditor(editor);
      this.addToAnnotationStorage(editor);
    }
  }
  setActiveEditor(editor) {
    if (this.#activeEditor === editor) {
      return;
    }
    this.#activeEditor = editor;
    if (editor) {
      this.#dispatchUpdateUI(editor.propertiesToUpdate);
    }
  }
  get #lastSelectedEditor() {
    let ed = null;
    for (ed of this.#selectedEditors) {
    }
    return ed;
  }
  updateUI(editor) {
    if (this.#lastSelectedEditor === editor) {
      this.#dispatchUpdateUI(editor.propertiesToUpdate);
    }
  }
  toggleSelected(editor) {
    if (this.#selectedEditors.has(editor)) {
      this.#selectedEditors.delete(editor);
      editor.unselect();
      this.#dispatchUpdateStates({
        hasSelectedEditor: this.hasSelection
      });
      return;
    }
    this.#selectedEditors.add(editor);
    editor.select();
    this.#dispatchUpdateUI(editor.propertiesToUpdate);
    this.#dispatchUpdateStates({
      hasSelectedEditor: true
    });
  }
  setSelected(editor) {
    for (const ed of this.#selectedEditors) {
      if (ed !== editor) {
        ed.unselect();
      }
    }
    this.#selectedEditors.clear();
    this.#selectedEditors.add(editor);
    editor.select();
    this.#dispatchUpdateUI(editor.propertiesToUpdate);
    this.#dispatchUpdateStates({
      hasSelectedEditor: true
    });
  }
  isSelected(editor) {
    return this.#selectedEditors.has(editor);
  }
  get firstSelectedEditor() {
    return this.#selectedEditors.values().next().value;
  }
  unselect(editor) {
    editor.unselect();
    this.#selectedEditors.delete(editor);
    this.#dispatchUpdateStates({
      hasSelectedEditor: this.hasSelection
    });
  }
  get hasSelection() {
    return this.#selectedEditors.size !== 0;
  }
  get isEnterHandled() {
    return this.#selectedEditors.size === 1 && this.firstSelectedEditor.isEnterHandled;
  }
  undo() {
    this.#commandManager.undo();
    this.#dispatchUpdateStates({
      hasSomethingToUndo: this.#commandManager.hasSomethingToUndo(),
      hasSomethingToRedo: true,
      isEmpty: this.#isEmpty()
    });
  }
  redo() {
    this.#commandManager.redo();
    this.#dispatchUpdateStates({
      hasSomethingToUndo: true,
      hasSomethingToRedo: this.#commandManager.hasSomethingToRedo(),
      isEmpty: this.#isEmpty()
    });
  }
  addCommands(params) {
    this.#commandManager.add(params);
    this.#dispatchUpdateStates({
      hasSomethingToUndo: true,
      hasSomethingToRedo: false,
      isEmpty: this.#isEmpty()
    });
  }
  #isEmpty() {
    if (this.#allEditors.size === 0) {
      return true;
    }
    if (this.#allEditors.size === 1) {
      for (const editor of this.#allEditors.values()) {
        return editor.isEmpty();
      }
    }
    return false;
  }
  delete() {
    this.commitOrRemove();
    if (!this.hasSelection) {
      return;
    }
    const editors = [...this.#selectedEditors];
    const cmd = () => {
      for (const editor of editors) {
        editor.remove();
      }
    };
    const undo = () => {
      for (const editor of editors) {
        this.#addEditorToLayer(editor);
      }
    };
    this.addCommands({
      cmd,
      undo,
      mustExec: true
    });
  }
  commitOrRemove() {
    this.#activeEditor?.commitOrRemove();
  }
  hasSomethingToControl() {
    return this.#activeEditor || this.hasSelection;
  }
  #selectEditors(editors) {
    for (const editor of this.#selectedEditors) {
      editor.unselect();
    }
    this.#selectedEditors.clear();
    for (const editor of editors) {
      if (editor.isEmpty()) {
        continue;
      }
      this.#selectedEditors.add(editor);
      editor.select();
    }
    this.#dispatchUpdateStates({
      hasSelectedEditor: this.hasSelection
    });
  }
  selectAll() {
    for (const editor of this.#selectedEditors) {
      editor.commit();
    }
    this.#selectEditors(this.#allEditors.values());
  }
  unselectAll() {
    if (this.#activeEditor) {
      this.#activeEditor.commitOrRemove();
      if (this.#mode !== AnnotationEditorType.NONE) {
        return;
      }
    }
    if (!this.hasSelection) {
      return;
    }
    for (const editor of this.#selectedEditors) {
      editor.unselect();
    }
    this.#selectedEditors.clear();
    this.#dispatchUpdateStates({
      hasSelectedEditor: false
    });
  }
  translateSelectedEditors(x, y, noCommit = false) {
    if (!noCommit) {
      this.commitOrRemove();
    }
    if (!this.hasSelection) {
      return;
    }
    this.#translation[0] += x;
    this.#translation[1] += y;
    const [totalX, totalY] = this.#translation;
    const editors = [...this.#selectedEditors];
    const TIME_TO_WAIT = 1e3;
    if (this.#translationTimeoutId) {
      clearTimeout(this.#translationTimeoutId);
    }
    this.#translationTimeoutId = setTimeout(() => {
      this.#translationTimeoutId = null;
      this.#translation[0] = this.#translation[1] = 0;
      this.addCommands({
        cmd: () => {
          for (const editor of editors) {
            if (this.#allEditors.has(editor.id)) {
              editor.translateInPage(totalX, totalY);
            }
          }
        },
        undo: () => {
          for (const editor of editors) {
            if (this.#allEditors.has(editor.id)) {
              editor.translateInPage(-totalX, -totalY);
            }
          }
        },
        mustExec: false
      });
    }, TIME_TO_WAIT);
    for (const editor of editors) {
      editor.translateInPage(x, y);
    }
  }
  setUpDragSession() {
    if (!this.hasSelection) {
      return;
    }
    this.disableUserSelect(true);
    this.#draggingEditors = /* @__PURE__ */ new Map();
    for (const editor of this.#selectedEditors) {
      this.#draggingEditors.set(editor, {
        savedX: editor.x,
        savedY: editor.y,
        savedPageIndex: editor.pageIndex,
        newX: 0,
        newY: 0,
        newPageIndex: -1
      });
    }
  }
  endDragSession() {
    if (!this.#draggingEditors) {
      return false;
    }
    this.disableUserSelect(false);
    const map = this.#draggingEditors;
    this.#draggingEditors = null;
    let mustBeAddedInUndoStack = false;
    for (const [{
      x,
      y,
      pageIndex
    }, value] of map) {
      value.newX = x;
      value.newY = y;
      value.newPageIndex = pageIndex;
      mustBeAddedInUndoStack ||= x !== value.savedX || y !== value.savedY || pageIndex !== value.savedPageIndex;
    }
    if (!mustBeAddedInUndoStack) {
      return false;
    }
    const move = (editor, x, y, pageIndex) => {
      if (this.#allEditors.has(editor.id)) {
        const parent = this.#allLayers.get(pageIndex);
        if (parent) {
          editor._setParentAndPosition(parent, x, y);
        } else {
          editor.pageIndex = pageIndex;
          editor.x = x;
          editor.y = y;
        }
      }
    };
    this.addCommands({
      cmd: () => {
        for (const [editor, {
          newX,
          newY,
          newPageIndex
        }] of map) {
          move(editor, newX, newY, newPageIndex);
        }
      },
      undo: () => {
        for (const [editor, {
          savedX,
          savedY,
          savedPageIndex
        }] of map) {
          move(editor, savedX, savedY, savedPageIndex);
        }
      },
      mustExec: true
    });
    return true;
  }
  dragSelectedEditors(tx, ty) {
    if (!this.#draggingEditors) {
      return;
    }
    for (const editor of this.#draggingEditors.keys()) {
      editor.drag(tx, ty);
    }
  }
  rebuild(editor) {
    if (editor.parent === null) {
      const parent = this.getLayer(editor.pageIndex);
      if (parent) {
        parent.changeParent(editor);
        parent.addOrRebuild(editor);
      } else {
        this.addEditor(editor);
        this.addToAnnotationStorage(editor);
        editor.rebuild();
      }
    } else {
      editor.parent.addOrRebuild(editor);
    }
  }
  get isEditorHandlingKeyboard() {
    return this.getActive()?.shouldGetKeyboardEvents() || this.#selectedEditors.size === 1 && this.firstSelectedEditor.shouldGetKeyboardEvents();
  }
  isActive(editor) {
    return this.#activeEditor === editor;
  }
  getActive() {
    return this.#activeEditor;
  }
  getMode() {
    return this.#mode;
  }
  get imageManager() {
    return shadow(this, "imageManager", new ImageManager());
  }
  getSelectionBoxes(textLayer) {
    if (!textLayer) {
      return null;
    }
    const selection = document.getSelection();
    for (let i = 0, ii = selection.rangeCount; i < ii; i++) {
      if (!textLayer.contains(selection.getRangeAt(i).commonAncestorContainer)) {
        return null;
      }
    }
    const {
      x: layerX,
      y: layerY,
      width: parentWidth,
      height: parentHeight
    } = textLayer.getBoundingClientRect();
    let rotator;
    switch (textLayer.getAttribute("data-main-rotation")) {
      case "90":
        rotator = (x, y, w, h) => ({
          x: (y - layerY) / parentHeight,
          y: 1 - (x + w - layerX) / parentWidth,
          width: h / parentHeight,
          height: w / parentWidth
        });
        break;
      case "180":
        rotator = (x, y, w, h) => ({
          x: 1 - (x + w - layerX) / parentWidth,
          y: 1 - (y + h - layerY) / parentHeight,
          width: w / parentWidth,
          height: h / parentHeight
        });
        break;
      case "270":
        rotator = (x, y, w, h) => ({
          x: 1 - (y + h - layerY) / parentHeight,
          y: (x - layerX) / parentWidth,
          width: h / parentHeight,
          height: w / parentWidth
        });
        break;
      default:
        rotator = (x, y, w, h) => ({
          x: (x - layerX) / parentWidth,
          y: (y - layerY) / parentHeight,
          width: w / parentWidth,
          height: h / parentHeight
        });
        break;
    }
    const boxes = [];
    for (let i = 0, ii = selection.rangeCount; i < ii; i++) {
      const range = selection.getRangeAt(i);
      if (range.collapsed) {
        continue;
      }
      for (const {
        x,
        y,
        width,
        height
      } of range.getClientRects()) {
        if (width === 0 || height === 0) {
          continue;
        }
        boxes.push(rotator(x, y, width, height));
      }
    }
    return boxes.length === 0 ? null : boxes;
  }
  addChangedExistingAnnotation({
    annotationElementId,
    id
  }) {
    (this.#changedExistingAnnotations ||= /* @__PURE__ */ new Map()).set(annotationElementId, id);
  }
  removeChangedExistingAnnotation({
    annotationElementId
  }) {
    this.#changedExistingAnnotations?.delete(annotationElementId);
  }
  renderAnnotationElement(annotation) {
    const editorId = this.#changedExistingAnnotations?.get(annotation.data.id);
    if (!editorId) {
      return;
    }
    const editor = this.#annotationStorage.getRawValue(editorId);
    if (!editor) {
      return;
    }
    if (this.#mode === AnnotationEditorType.NONE && !editor.hasBeenModified) {
      return;
    }
    editor.renderAnnotationElement(annotation);
  }
};
var AltText = class _AltText {
  #altText = "";
  #altTextDecorative = false;
  #altTextButton = null;
  #altTextTooltip = null;
  #altTextTooltipTimeout = null;
  #altTextWasFromKeyBoard = false;
  #editor = null;
  static _l10nPromise = null;
  constructor(editor) {
    this.#editor = editor;
  }
  static initialize(l10nPromise) {
    _AltText._l10nPromise ||= l10nPromise;
  }
  async render() {
    const altText = this.#altTextButton = document.createElement("button");
    altText.className = "altText";
    const msg = await _AltText._l10nPromise.get("pdfjs-editor-alt-text-button-label");
    altText.textContent = msg;
    altText.setAttribute("aria-label", msg);
    altText.tabIndex = "0";
    const signal = this.#editor._uiManager._signal;
    altText.addEventListener("contextmenu", noContextMenu, {
      signal
    });
    altText.addEventListener("pointerdown", (event) => event.stopPropagation(), {
      signal
    });
    const onClick = (event) => {
      event.preventDefault();
      this.#editor._uiManager.editAltText(this.#editor);
    };
    altText.addEventListener("click", onClick, {
      capture: true,
      signal
    });
    altText.addEventListener("keydown", (event) => {
      if (event.target === altText && event.key === "Enter") {
        this.#altTextWasFromKeyBoard = true;
        onClick(event);
      }
    }, {
      signal
    });
    await this.#setState();
    return altText;
  }
  finish() {
    if (!this.#altTextButton) {
      return;
    }
    this.#altTextButton.focus({
      focusVisible: this.#altTextWasFromKeyBoard
    });
    this.#altTextWasFromKeyBoard = false;
  }
  isEmpty() {
    return !this.#altText && !this.#altTextDecorative;
  }
  get data() {
    return {
      altText: this.#altText,
      decorative: this.#altTextDecorative
    };
  }
  set data({
    altText,
    decorative
  }) {
    if (this.#altText === altText && this.#altTextDecorative === decorative) {
      return;
    }
    this.#altText = altText;
    this.#altTextDecorative = decorative;
    this.#setState();
  }
  toggle(enabled = false) {
    if (!this.#altTextButton) {
      return;
    }
    if (!enabled && this.#altTextTooltipTimeout) {
      clearTimeout(this.#altTextTooltipTimeout);
      this.#altTextTooltipTimeout = null;
    }
    this.#altTextButton.disabled = !enabled;
  }
  destroy() {
    this.#altTextButton?.remove();
    this.#altTextButton = null;
    this.#altTextTooltip = null;
  }
  async #setState() {
    const button = this.#altTextButton;
    if (!button) {
      return;
    }
    if (!this.#altText && !this.#altTextDecorative) {
      button.classList.remove("done");
      this.#altTextTooltip?.remove();
      return;
    }
    button.classList.add("done");
    _AltText._l10nPromise.get("pdfjs-editor-alt-text-edit-button-label").then((msg) => {
      button.setAttribute("aria-label", msg);
    });
    let tooltip = this.#altTextTooltip;
    if (!tooltip) {
      this.#altTextTooltip = tooltip = document.createElement("span");
      tooltip.className = "tooltip";
      tooltip.setAttribute("role", "tooltip");
      const id = tooltip.id = `alt-text-tooltip-${this.#editor.id}`;
      button.setAttribute("aria-describedby", id);
      const DELAY_TO_SHOW_TOOLTIP = 100;
      const signal = this.#editor._uiManager._signal;
      signal.addEventListener("abort", () => {
        clearTimeout(this.#altTextTooltipTimeout);
        this.#altTextTooltipTimeout = null;
      }, {
        once: true
      });
      button.addEventListener("mouseenter", () => {
        this.#altTextTooltipTimeout = setTimeout(() => {
          this.#altTextTooltipTimeout = null;
          this.#altTextTooltip.classList.add("show");
          this.#editor._reportTelemetry({
            action: "alt_text_tooltip"
          });
        }, DELAY_TO_SHOW_TOOLTIP);
      }, {
        signal
      });
      button.addEventListener("mouseleave", () => {
        if (this.#altTextTooltipTimeout) {
          clearTimeout(this.#altTextTooltipTimeout);
          this.#altTextTooltipTimeout = null;
        }
        this.#altTextTooltip?.classList.remove("show");
      }, {
        signal
      });
    }
    tooltip.innerText = this.#altTextDecorative ? await _AltText._l10nPromise.get("pdfjs-editor-alt-text-decorative-tooltip") : this.#altText;
    if (!tooltip.parentNode) {
      button.append(tooltip);
    }
    const element = this.#editor.getImageForAltText();
    element?.setAttribute("aria-describedby", tooltip.id);
  }
};
var AnnotationEditor = class _AnnotationEditor {
  #accessibilityData = null;
  #allResizerDivs = null;
  #altText = null;
  #disabled = false;
  #keepAspectRatio = false;
  #resizersDiv = null;
  #savedDimensions = null;
  #boundFocusin = this.focusin.bind(this);
  #boundFocusout = this.focusout.bind(this);
  #editToolbar = null;
  #focusedResizerName = "";
  #hasBeenClicked = false;
  #initialPosition = null;
  #isEditing = false;
  #isInEditMode = false;
  #isResizerEnabledForKeyboard = false;
  #moveInDOMTimeout = null;
  #prevDragX = 0;
  #prevDragY = 0;
  #telemetryTimeouts = null;
  _initialOptions = /* @__PURE__ */ Object.create(null);
  _isVisible = true;
  _uiManager = null;
  _focusEventsAllowed = true;
  _l10nPromise = null;
  #isDraggable = false;
  #zIndex = _AnnotationEditor._zIndex++;
  static _borderLineWidth = -1;
  static _colorManager = new ColorManager();
  static _zIndex = 1;
  static _telemetryTimeout = 1e3;
  static get _resizerKeyboardManager() {
    const resize = _AnnotationEditor.prototype._resizeWithKeyboard;
    const small = AnnotationEditorUIManager.TRANSLATE_SMALL;
    const big = AnnotationEditorUIManager.TRANSLATE_BIG;
    return shadow(this, "_resizerKeyboardManager", new KeyboardManager([[["ArrowLeft", "mac+ArrowLeft"], resize, {
      args: [-small, 0]
    }], [["ctrl+ArrowLeft", "mac+shift+ArrowLeft"], resize, {
      args: [-big, 0]
    }], [["ArrowRight", "mac+ArrowRight"], resize, {
      args: [small, 0]
    }], [["ctrl+ArrowRight", "mac+shift+ArrowRight"], resize, {
      args: [big, 0]
    }], [["ArrowUp", "mac+ArrowUp"], resize, {
      args: [0, -small]
    }], [["ctrl+ArrowUp", "mac+shift+ArrowUp"], resize, {
      args: [0, -big]
    }], [["ArrowDown", "mac+ArrowDown"], resize, {
      args: [0, small]
    }], [["ctrl+ArrowDown", "mac+shift+ArrowDown"], resize, {
      args: [0, big]
    }], [["Escape", "mac+Escape"], _AnnotationEditor.prototype._stopResizingWithKeyboard]]));
  }
  constructor(parameters) {
    if (this.constructor === _AnnotationEditor) {
      unreachable("Cannot initialize AnnotationEditor.");
    }
    this.parent = parameters.parent;
    this.id = parameters.id;
    this.width = this.height = null;
    this.pageIndex = parameters.parent.pageIndex;
    this.name = parameters.name;
    this.div = null;
    this._uiManager = parameters.uiManager;
    this.annotationElementId = null;
    this._willKeepAspectRatio = false;
    this._initialOptions.isCentered = parameters.isCentered;
    this._structTreeParentId = null;
    const {
      rotation,
      rawDims: {
        pageWidth,
        pageHeight,
        pageX,
        pageY
      }
    } = this.parent.viewport;
    this.rotation = rotation;
    this.pageRotation = (360 + rotation - this._uiManager.viewParameters.rotation) % 360;
    this.pageDimensions = [pageWidth, pageHeight];
    this.pageTranslation = [pageX, pageY];
    const [width, height] = this.parentDimensions;
    this.x = parameters.x / width;
    this.y = parameters.y / height;
    this.isAttachedToDOM = false;
    this.deleted = false;
  }
  get editorType() {
    return Object.getPrototypeOf(this).constructor._type;
  }
  static get _defaultLineColor() {
    return shadow(this, "_defaultLineColor", this._colorManager.getHexCode("CanvasText"));
  }
  static deleteAnnotationElement(editor) {
    const fakeEditor = new FakeEditor({
      id: editor.parent.getNextId(),
      parent: editor.parent,
      uiManager: editor._uiManager
    });
    fakeEditor.annotationElementId = editor.annotationElementId;
    fakeEditor.deleted = true;
    fakeEditor._uiManager.addToAnnotationStorage(fakeEditor);
  }
  static initialize(l10n, _uiManager, options) {
    _AnnotationEditor._l10nPromise ||= new Map(["pdfjs-editor-alt-text-button-label", "pdfjs-editor-alt-text-edit-button-label", "pdfjs-editor-alt-text-decorative-tooltip", "pdfjs-editor-resizer-label-topLeft", "pdfjs-editor-resizer-label-topMiddle", "pdfjs-editor-resizer-label-topRight", "pdfjs-editor-resizer-label-middleRight", "pdfjs-editor-resizer-label-bottomRight", "pdfjs-editor-resizer-label-bottomMiddle", "pdfjs-editor-resizer-label-bottomLeft", "pdfjs-editor-resizer-label-middleLeft"].map((str) => [str, l10n.get(str.replaceAll(/([A-Z])/g, (c) => `-${c.toLowerCase()}`))]));
    if (options?.strings) {
      for (const str of options.strings) {
        _AnnotationEditor._l10nPromise.set(str, l10n.get(str));
      }
    }
    if (_AnnotationEditor._borderLineWidth !== -1) {
      return;
    }
    const style = getComputedStyle(document.documentElement);
    _AnnotationEditor._borderLineWidth = parseFloat(style.getPropertyValue("--outline-width")) || 0;
  }
  static updateDefaultParams(_type, _value) {
  }
  static get defaultPropertiesToUpdate() {
    return [];
  }
  static isHandlingMimeForPasting(mime) {
    return false;
  }
  static paste(item, parent) {
    unreachable("Not implemented");
  }
  get propertiesToUpdate() {
    return [];
  }
  get _isDraggable() {
    return this.#isDraggable;
  }
  set _isDraggable(value) {
    this.#isDraggable = value;
    this.div?.classList.toggle("draggable", value);
  }
  get isEnterHandled() {
    return true;
  }
  center() {
    const [pageWidth, pageHeight] = this.pageDimensions;
    switch (this.parentRotation) {
      case 90:
        this.x -= this.height * pageHeight / (pageWidth * 2);
        this.y += this.width * pageWidth / (pageHeight * 2);
        break;
      case 180:
        this.x += this.width / 2;
        this.y += this.height / 2;
        break;
      case 270:
        this.x += this.height * pageHeight / (pageWidth * 2);
        this.y -= this.width * pageWidth / (pageHeight * 2);
        break;
      default:
        this.x -= this.width / 2;
        this.y -= this.height / 2;
        break;
    }
    this.fixAndSetPosition();
  }
  addCommands(params) {
    this._uiManager.addCommands(params);
  }
  get currentLayer() {
    return this._uiManager.currentLayer;
  }
  setInBackground() {
    this.div.style.zIndex = 0;
  }
  setInForeground() {
    this.div.style.zIndex = this.#zIndex;
  }
  setParent(parent) {
    if (parent !== null) {
      this.pageIndex = parent.pageIndex;
      this.pageDimensions = parent.pageDimensions;
    } else {
      this.#stopResizing();
    }
    this.parent = parent;
  }
  focusin(event) {
    if (!this._focusEventsAllowed) {
      return;
    }
    if (!this.#hasBeenClicked) {
      this.parent.setSelected(this);
    } else {
      this.#hasBeenClicked = false;
    }
  }
  focusout(event) {
    if (!this._focusEventsAllowed) {
      return;
    }
    if (!this.isAttachedToDOM) {
      return;
    }
    const target = event.relatedTarget;
    if (target?.closest(`#${this.id}`)) {
      return;
    }
    event.preventDefault();
    if (!this.parent?.isMultipleSelection) {
      this.commitOrRemove();
    }
  }
  commitOrRemove() {
    if (this.isEmpty()) {
      this.remove();
    } else {
      this.commit();
    }
  }
  commit() {
    this.addToAnnotationStorage();
  }
  addToAnnotationStorage() {
    this._uiManager.addToAnnotationStorage(this);
  }
  setAt(x, y, tx, ty) {
    const [width, height] = this.parentDimensions;
    [tx, ty] = this.screenToPageTranslation(tx, ty);
    this.x = (x + tx) / width;
    this.y = (y + ty) / height;
    this.fixAndSetPosition();
  }
  #translate([width, height], x, y) {
    [x, y] = this.screenToPageTranslation(x, y);
    this.x += x / width;
    this.y += y / height;
    this.fixAndSetPosition();
  }
  translate(x, y) {
    this.#translate(this.parentDimensions, x, y);
  }
  translateInPage(x, y) {
    this.#initialPosition ||= [this.x, this.y];
    this.#translate(this.pageDimensions, x, y);
    this.div.scrollIntoView({
      block: "nearest"
    });
  }
  drag(tx, ty) {
    this.#initialPosition ||= [this.x, this.y];
    const [parentWidth, parentHeight] = this.parentDimensions;
    this.x += tx / parentWidth;
    this.y += ty / parentHeight;
    if (this.parent && (this.x < 0 || this.x > 1 || this.y < 0 || this.y > 1)) {
      const {
        x: x2,
        y: y2
      } = this.div.getBoundingClientRect();
      if (this.parent.findNewParent(this, x2, y2)) {
        this.x -= Math.floor(this.x);
        this.y -= Math.floor(this.y);
      }
    }
    let {
      x,
      y
    } = this;
    const [bx, by] = this.getBaseTranslation();
    x += bx;
    y += by;
    this.div.style.left = `${(100 * x).toFixed(2)}%`;
    this.div.style.top = `${(100 * y).toFixed(2)}%`;
    this.div.scrollIntoView({
      block: "nearest"
    });
  }
  get _hasBeenMoved() {
    return !!this.#initialPosition && (this.#initialPosition[0] !== this.x || this.#initialPosition[1] !== this.y);
  }
  getBaseTranslation() {
    const [parentWidth, parentHeight] = this.parentDimensions;
    const {
      _borderLineWidth
    } = _AnnotationEditor;
    const x = _borderLineWidth / parentWidth;
    const y = _borderLineWidth / parentHeight;
    switch (this.rotation) {
      case 90:
        return [-x, y];
      case 180:
        return [x, y];
      case 270:
        return [x, -y];
      default:
        return [-x, -y];
    }
  }
  get _mustFixPosition() {
    return true;
  }
  fixAndSetPosition(rotation = this.rotation) {
    const [pageWidth, pageHeight] = this.pageDimensions;
    let {
      x,
      y,
      width,
      height
    } = this;
    width *= pageWidth;
    height *= pageHeight;
    x *= pageWidth;
    y *= pageHeight;
    if (this._mustFixPosition) {
      switch (rotation) {
        case 0:
          x = Math.max(0, Math.min(pageWidth - width, x));
          y = Math.max(0, Math.min(pageHeight - height, y));
          break;
        case 90:
          x = Math.max(0, Math.min(pageWidth - height, x));
          y = Math.min(pageHeight, Math.max(width, y));
          break;
        case 180:
          x = Math.min(pageWidth, Math.max(width, x));
          y = Math.min(pageHeight, Math.max(height, y));
          break;
        case 270:
          x = Math.min(pageWidth, Math.max(height, x));
          y = Math.max(0, Math.min(pageHeight - width, y));
          break;
      }
    }
    this.x = x /= pageWidth;
    this.y = y /= pageHeight;
    const [bx, by] = this.getBaseTranslation();
    x += bx;
    y += by;
    const {
      style
    } = this.div;
    style.left = `${(100 * x).toFixed(2)}%`;
    style.top = `${(100 * y).toFixed(2)}%`;
    this.moveInDOM();
  }
  static #rotatePoint(x, y, angle) {
    switch (angle) {
      case 90:
        return [y, -x];
      case 180:
        return [-x, -y];
      case 270:
        return [-y, x];
      default:
        return [x, y];
    }
  }
  screenToPageTranslation(x, y) {
    return _AnnotationEditor.#rotatePoint(x, y, this.parentRotation);
  }
  pageTranslationToScreen(x, y) {
    return _AnnotationEditor.#rotatePoint(x, y, 360 - this.parentRotation);
  }
  #getRotationMatrix(rotation) {
    switch (rotation) {
      case 90: {
        const [pageWidth, pageHeight] = this.pageDimensions;
        return [0, -pageWidth / pageHeight, pageHeight / pageWidth, 0];
      }
      case 180:
        return [-1, 0, 0, -1];
      case 270: {
        const [pageWidth, pageHeight] = this.pageDimensions;
        return [0, pageWidth / pageHeight, -pageHeight / pageWidth, 0];
      }
      default:
        return [1, 0, 0, 1];
    }
  }
  get parentScale() {
    return this._uiManager.viewParameters.realScale;
  }
  get parentRotation() {
    return (this._uiManager.viewParameters.rotation + this.pageRotation) % 360;
  }
  get parentDimensions() {
    const {
      parentScale,
      pageDimensions: [pageWidth, pageHeight]
    } = this;
    const scaledWidth = pageWidth * parentScale;
    const scaledHeight = pageHeight * parentScale;
    return util_FeatureTest.isCSSRoundSupported ? [Math.round(scaledWidth), Math.round(scaledHeight)] : [scaledWidth, scaledHeight];
  }
  setDims(width, height) {
    const [parentWidth, parentHeight] = this.parentDimensions;
    this.div.style.width = `${(100 * width / parentWidth).toFixed(2)}%`;
    if (!this.#keepAspectRatio) {
      this.div.style.height = `${(100 * height / parentHeight).toFixed(2)}%`;
    }
  }
  fixDims() {
    const {
      style
    } = this.div;
    const {
      height,
      width
    } = style;
    const widthPercent = width.endsWith("%");
    const heightPercent = !this.#keepAspectRatio && height.endsWith("%");
    if (widthPercent && heightPercent) {
      return;
    }
    const [parentWidth, parentHeight] = this.parentDimensions;
    if (!widthPercent) {
      style.width = `${(100 * parseFloat(width) / parentWidth).toFixed(2)}%`;
    }
    if (!this.#keepAspectRatio && !heightPercent) {
      style.height = `${(100 * parseFloat(height) / parentHeight).toFixed(2)}%`;
    }
  }
  getInitialTranslation() {
    return [0, 0];
  }
  #createResizers() {
    if (this.#resizersDiv) {
      return;
    }
    this.#resizersDiv = document.createElement("div");
    this.#resizersDiv.classList.add("resizers");
    const classes = this._willKeepAspectRatio ? ["topLeft", "topRight", "bottomRight", "bottomLeft"] : ["topLeft", "topMiddle", "topRight", "middleRight", "bottomRight", "bottomMiddle", "bottomLeft", "middleLeft"];
    const signal = this._uiManager._signal;
    for (const name of classes) {
      const div = document.createElement("div");
      this.#resizersDiv.append(div);
      div.classList.add("resizer", name);
      div.setAttribute("data-resizer-name", name);
      div.addEventListener("pointerdown", this.#resizerPointerdown.bind(this, name), {
        signal
      });
      div.addEventListener("contextmenu", noContextMenu, {
        signal
      });
      div.tabIndex = -1;
    }
    this.div.prepend(this.#resizersDiv);
  }
  #resizerPointerdown(name, event) {
    event.preventDefault();
    const {
      isMac
    } = util_FeatureTest.platform;
    if (event.button !== 0 || event.ctrlKey && isMac) {
      return;
    }
    this.#altText?.toggle(false);
    const boundResizerPointermove = this.#resizerPointermove.bind(this, name);
    const savedDraggable = this._isDraggable;
    this._isDraggable = false;
    const signal = this._uiManager._signal;
    const pointerMoveOptions = {
      passive: true,
      capture: true,
      signal
    };
    this.parent.togglePointerEvents(false);
    window.addEventListener("pointermove", boundResizerPointermove, pointerMoveOptions);
    window.addEventListener("contextmenu", noContextMenu, {
      signal
    });
    const savedX = this.x;
    const savedY = this.y;
    const savedWidth = this.width;
    const savedHeight = this.height;
    const savedParentCursor = this.parent.div.style.cursor;
    const savedCursor = this.div.style.cursor;
    this.div.style.cursor = this.parent.div.style.cursor = window.getComputedStyle(event.target).cursor;
    const pointerUpCallback = () => {
      this.parent.togglePointerEvents(true);
      this.#altText?.toggle(true);
      this._isDraggable = savedDraggable;
      window.removeEventListener("pointerup", pointerUpCallback);
      window.removeEventListener("blur", pointerUpCallback);
      window.removeEventListener("pointermove", boundResizerPointermove, pointerMoveOptions);
      window.removeEventListener("contextmenu", noContextMenu);
      this.parent.div.style.cursor = savedParentCursor;
      this.div.style.cursor = savedCursor;
      this.#addResizeToUndoStack(savedX, savedY, savedWidth, savedHeight);
    };
    window.addEventListener("pointerup", pointerUpCallback, {
      signal
    });
    window.addEventListener("blur", pointerUpCallback, {
      signal
    });
  }
  #addResizeToUndoStack(savedX, savedY, savedWidth, savedHeight) {
    const newX = this.x;
    const newY = this.y;
    const newWidth = this.width;
    const newHeight = this.height;
    if (newX === savedX && newY === savedY && newWidth === savedWidth && newHeight === savedHeight) {
      return;
    }
    this.addCommands({
      cmd: () => {
        this.width = newWidth;
        this.height = newHeight;
        this.x = newX;
        this.y = newY;
        const [parentWidth, parentHeight] = this.parentDimensions;
        this.setDims(parentWidth * newWidth, parentHeight * newHeight);
        this.fixAndSetPosition();
      },
      undo: () => {
        this.width = savedWidth;
        this.height = savedHeight;
        this.x = savedX;
        this.y = savedY;
        const [parentWidth, parentHeight] = this.parentDimensions;
        this.setDims(parentWidth * savedWidth, parentHeight * savedHeight);
        this.fixAndSetPosition();
      },
      mustExec: true
    });
  }
  #resizerPointermove(name, event) {
    const [parentWidth, parentHeight] = this.parentDimensions;
    const savedX = this.x;
    const savedY = this.y;
    const savedWidth = this.width;
    const savedHeight = this.height;
    const minWidth = _AnnotationEditor.MIN_SIZE / parentWidth;
    const minHeight = _AnnotationEditor.MIN_SIZE / parentHeight;
    const round = (x) => Math.round(x * 1e4) / 1e4;
    const rotationMatrix = this.#getRotationMatrix(this.rotation);
    const transf = (x, y) => [rotationMatrix[0] * x + rotationMatrix[2] * y, rotationMatrix[1] * x + rotationMatrix[3] * y];
    const invRotationMatrix = this.#getRotationMatrix(360 - this.rotation);
    const invTransf = (x, y) => [invRotationMatrix[0] * x + invRotationMatrix[2] * y, invRotationMatrix[1] * x + invRotationMatrix[3] * y];
    let getPoint;
    let getOpposite;
    let isDiagonal = false;
    let isHorizontal = false;
    switch (name) {
      case "topLeft":
        isDiagonal = true;
        getPoint = (w, h) => [0, 0];
        getOpposite = (w, h) => [w, h];
        break;
      case "topMiddle":
        getPoint = (w, h) => [w / 2, 0];
        getOpposite = (w, h) => [w / 2, h];
        break;
      case "topRight":
        isDiagonal = true;
        getPoint = (w, h) => [w, 0];
        getOpposite = (w, h) => [0, h];
        break;
      case "middleRight":
        isHorizontal = true;
        getPoint = (w, h) => [w, h / 2];
        getOpposite = (w, h) => [0, h / 2];
        break;
      case "bottomRight":
        isDiagonal = true;
        getPoint = (w, h) => [w, h];
        getOpposite = (w, h) => [0, 0];
        break;
      case "bottomMiddle":
        getPoint = (w, h) => [w / 2, h];
        getOpposite = (w, h) => [w / 2, 0];
        break;
      case "bottomLeft":
        isDiagonal = true;
        getPoint = (w, h) => [0, h];
        getOpposite = (w, h) => [w, 0];
        break;
      case "middleLeft":
        isHorizontal = true;
        getPoint = (w, h) => [0, h / 2];
        getOpposite = (w, h) => [w, h / 2];
        break;
    }
    const point = getPoint(savedWidth, savedHeight);
    const oppositePoint = getOpposite(savedWidth, savedHeight);
    let transfOppositePoint = transf(...oppositePoint);
    const oppositeX = round(savedX + transfOppositePoint[0]);
    const oppositeY = round(savedY + transfOppositePoint[1]);
    let ratioX = 1;
    let ratioY = 1;
    let [deltaX, deltaY] = this.screenToPageTranslation(event.movementX, event.movementY);
    [deltaX, deltaY] = invTransf(deltaX / parentWidth, deltaY / parentHeight);
    if (isDiagonal) {
      const oldDiag = Math.hypot(savedWidth, savedHeight);
      ratioX = ratioY = Math.max(Math.min(Math.hypot(oppositePoint[0] - point[0] - deltaX, oppositePoint[1] - point[1] - deltaY) / oldDiag, 1 / savedWidth, 1 / savedHeight), minWidth / savedWidth, minHeight / savedHeight);
    } else if (isHorizontal) {
      ratioX = Math.max(minWidth, Math.min(1, Math.abs(oppositePoint[0] - point[0] - deltaX))) / savedWidth;
    } else {
      ratioY = Math.max(minHeight, Math.min(1, Math.abs(oppositePoint[1] - point[1] - deltaY))) / savedHeight;
    }
    const newWidth = round(savedWidth * ratioX);
    const newHeight = round(savedHeight * ratioY);
    transfOppositePoint = transf(...getOpposite(newWidth, newHeight));
    const newX = oppositeX - transfOppositePoint[0];
    const newY = oppositeY - transfOppositePoint[1];
    this.width = newWidth;
    this.height = newHeight;
    this.x = newX;
    this.y = newY;
    this.setDims(parentWidth * newWidth, parentHeight * newHeight);
    this.fixAndSetPosition();
  }
  altTextFinish() {
    this.#altText?.finish();
  }
  async addEditToolbar() {
    if (this.#editToolbar || this.#isInEditMode) {
      return this.#editToolbar;
    }
    this.#editToolbar = new EditorToolbar(this);
    this.div.append(this.#editToolbar.render());
    if (this.#altText) {
      this.#editToolbar.addAltTextButton(await this.#altText.render());
    }
    return this.#editToolbar;
  }
  removeEditToolbar() {
    if (!this.#editToolbar) {
      return;
    }
    this.#editToolbar.remove();
    this.#editToolbar = null;
    this.#altText?.destroy();
  }
  getClientDimensions() {
    return this.div.getBoundingClientRect();
  }
  async addAltTextButton() {
    if (this.#altText) {
      return;
    }
    AltText.initialize(_AnnotationEditor._l10nPromise);
    this.#altText = new AltText(this);
    if (this.#accessibilityData) {
      this.#altText.data = this.#accessibilityData;
      this.#accessibilityData = null;
    }
    await this.addEditToolbar();
  }
  get altTextData() {
    return this.#altText?.data;
  }
  set altTextData(data) {
    if (!this.#altText) {
      return;
    }
    this.#altText.data = data;
  }
  hasAltText() {
    return !this.#altText?.isEmpty();
  }
  render() {
    this.div = document.createElement("div");
    this.div.setAttribute("data-editor-rotation", (360 - this.rotation) % 360);
    this.div.className = this.name;
    this.div.setAttribute("id", this.id);
    this.div.tabIndex = this.#disabled ? -1 : 0;
    if (!this._isVisible) {
      this.div.classList.add("hidden");
    }
    this.setInForeground();
    const signal = this._uiManager._signal;
    this.div.addEventListener("focusin", this.#boundFocusin, {
      signal
    });
    this.div.addEventListener("focusout", this.#boundFocusout, {
      signal
    });
    const [parentWidth, parentHeight] = this.parentDimensions;
    if (this.parentRotation % 180 !== 0) {
      this.div.style.maxWidth = `${(100 * parentHeight / parentWidth).toFixed(2)}%`;
      this.div.style.maxHeight = `${(100 * parentWidth / parentHeight).toFixed(2)}%`;
    }
    const [tx, ty] = this.getInitialTranslation();
    this.translate(tx, ty);
    bindEvents(this, this.div, ["pointerdown"]);
    return this.div;
  }
  pointerdown(event) {
    const {
      isMac
    } = util_FeatureTest.platform;
    if (event.button !== 0 || event.ctrlKey && isMac) {
      event.preventDefault();
      return;
    }
    this.#hasBeenClicked = true;
    if (this._isDraggable) {
      this.#setUpDragSession(event);
      return;
    }
    this.#selectOnPointerEvent(event);
  }
  #selectOnPointerEvent(event) {
    const {
      isMac
    } = util_FeatureTest.platform;
    if (event.ctrlKey && !isMac || event.shiftKey || event.metaKey && isMac) {
      this.parent.toggleSelected(this);
    } else {
      this.parent.setSelected(this);
    }
  }
  #setUpDragSession(event) {
    const isSelected = this._uiManager.isSelected(this);
    this._uiManager.setUpDragSession();
    let pointerMoveOptions, pointerMoveCallback;
    const signal = this._uiManager._signal;
    if (isSelected) {
      this.div.classList.add("moving");
      pointerMoveOptions = {
        passive: true,
        capture: true,
        signal
      };
      this.#prevDragX = event.clientX;
      this.#prevDragY = event.clientY;
      pointerMoveCallback = (e) => {
        const {
          clientX: x,
          clientY: y
        } = e;
        const [tx, ty] = this.screenToPageTranslation(x - this.#prevDragX, y - this.#prevDragY);
        this.#prevDragX = x;
        this.#prevDragY = y;
        this._uiManager.dragSelectedEditors(tx, ty);
      };
      window.addEventListener("pointermove", pointerMoveCallback, pointerMoveOptions);
    }
    const pointerUpCallback = () => {
      window.removeEventListener("pointerup", pointerUpCallback);
      window.removeEventListener("blur", pointerUpCallback);
      if (isSelected) {
        this.div.classList.remove("moving");
        window.removeEventListener("pointermove", pointerMoveCallback, pointerMoveOptions);
      }
      this.#hasBeenClicked = false;
      if (!this._uiManager.endDragSession()) {
        this.#selectOnPointerEvent(event);
      }
    };
    window.addEventListener("pointerup", pointerUpCallback, {
      signal
    });
    window.addEventListener("blur", pointerUpCallback, {
      signal
    });
  }
  moveInDOM() {
    if (this.#moveInDOMTimeout) {
      clearTimeout(this.#moveInDOMTimeout);
    }
    this.#moveInDOMTimeout = setTimeout(() => {
      this.#moveInDOMTimeout = null;
      this.parent?.moveEditorInDOM(this);
    }, 0);
  }
  _setParentAndPosition(parent, x, y) {
    parent.changeParent(this);
    this.x = x;
    this.y = y;
    this.fixAndSetPosition();
  }
  getRect(tx, ty, rotation = this.rotation) {
    const scale = this.parentScale;
    const [pageWidth, pageHeight] = this.pageDimensions;
    const [pageX, pageY] = this.pageTranslation;
    const shiftX = tx / scale;
    const shiftY = ty / scale;
    const x = this.x * pageWidth;
    const y = this.y * pageHeight;
    const width = this.width * pageWidth;
    const height = this.height * pageHeight;
    switch (rotation) {
      case 0:
        return [x + shiftX + pageX, pageHeight - y - shiftY - height + pageY, x + shiftX + width + pageX, pageHeight - y - shiftY + pageY];
      case 90:
        return [x + shiftY + pageX, pageHeight - y + shiftX + pageY, x + shiftY + height + pageX, pageHeight - y + shiftX + width + pageY];
      case 180:
        return [x - shiftX - width + pageX, pageHeight - y + shiftY + pageY, x - shiftX + pageX, pageHeight - y + shiftY + height + pageY];
      case 270:
        return [x - shiftY - height + pageX, pageHeight - y - shiftX - width + pageY, x - shiftY + pageX, pageHeight - y - shiftX + pageY];
      default:
        throw new Error("Invalid rotation");
    }
  }
  getRectInCurrentCoords(rect, pageHeight) {
    const [x1, y1, x2, y2] = rect;
    const width = x2 - x1;
    const height = y2 - y1;
    switch (this.rotation) {
      case 0:
        return [x1, pageHeight - y2, width, height];
      case 90:
        return [x1, pageHeight - y1, height, width];
      case 180:
        return [x2, pageHeight - y1, width, height];
      case 270:
        return [x2, pageHeight - y2, height, width];
      default:
        throw new Error("Invalid rotation");
    }
  }
  onceAdded() {
  }
  isEmpty() {
    return false;
  }
  enableEditMode() {
    this.#isInEditMode = true;
  }
  disableEditMode() {
    this.#isInEditMode = false;
  }
  isInEditMode() {
    return this.#isInEditMode;
  }
  shouldGetKeyboardEvents() {
    return this.#isResizerEnabledForKeyboard;
  }
  needsToBeRebuilt() {
    return this.div && !this.isAttachedToDOM;
  }
  rebuild() {
    const signal = this._uiManager._signal;
    this.div?.addEventListener("focusin", this.#boundFocusin, {
      signal
    });
    this.div?.addEventListener("focusout", this.#boundFocusout, {
      signal
    });
  }
  rotate(_angle) {
  }
  serialize(isForCopying = false, context = null) {
    unreachable("An editor must be serializable");
  }
  static deserialize(data, parent, uiManager) {
    const editor = new this.prototype.constructor({
      parent,
      id: parent.getNextId(),
      uiManager
    });
    editor.rotation = data.rotation;
    editor.#accessibilityData = data.accessibilityData;
    const [pageWidth, pageHeight] = editor.pageDimensions;
    const [x, y, width, height] = editor.getRectInCurrentCoords(data.rect, pageHeight);
    editor.x = x / pageWidth;
    editor.y = y / pageHeight;
    editor.width = width / pageWidth;
    editor.height = height / pageHeight;
    return editor;
  }
  get hasBeenModified() {
    return !!this.annotationElementId && (this.deleted || this.serialize() !== null);
  }
  remove() {
    this.div.removeEventListener("focusin", this.#boundFocusin);
    this.div.removeEventListener("focusout", this.#boundFocusout);
    if (!this.isEmpty()) {
      this.commit();
    }
    if (this.parent) {
      this.parent.remove(this);
    } else {
      this._uiManager.removeEditor(this);
    }
    if (this.#moveInDOMTimeout) {
      clearTimeout(this.#moveInDOMTimeout);
      this.#moveInDOMTimeout = null;
    }
    this.#stopResizing();
    this.removeEditToolbar();
    if (this.#telemetryTimeouts) {
      for (const timeout of this.#telemetryTimeouts.values()) {
        clearTimeout(timeout);
      }
      this.#telemetryTimeouts = null;
    }
    this.parent = null;
  }
  get isResizable() {
    return false;
  }
  makeResizable() {
    if (this.isResizable) {
      this.#createResizers();
      this.#resizersDiv.classList.remove("hidden");
      bindEvents(this, this.div, ["keydown"]);
    }
  }
  get toolbarPosition() {
    return null;
  }
  keydown(event) {
    if (!this.isResizable || event.target !== this.div || event.key !== "Enter") {
      return;
    }
    this._uiManager.setSelected(this);
    this.#savedDimensions = {
      savedX: this.x,
      savedY: this.y,
      savedWidth: this.width,
      savedHeight: this.height
    };
    const children = this.#resizersDiv.children;
    if (!this.#allResizerDivs) {
      this.#allResizerDivs = Array.from(children);
      const boundResizerKeydown = this.#resizerKeydown.bind(this);
      const boundResizerBlur = this.#resizerBlur.bind(this);
      const signal = this._uiManager._signal;
      for (const div of this.#allResizerDivs) {
        const name = div.getAttribute("data-resizer-name");
        div.setAttribute("role", "spinbutton");
        div.addEventListener("keydown", boundResizerKeydown, {
          signal
        });
        div.addEventListener("blur", boundResizerBlur, {
          signal
        });
        div.addEventListener("focus", this.#resizerFocus.bind(this, name), {
          signal
        });
        _AnnotationEditor._l10nPromise.get(`pdfjs-editor-resizer-label-${name}`).then((msg) => div.setAttribute("aria-label", msg));
      }
    }
    const first = this.#allResizerDivs[0];
    let firstPosition = 0;
    for (const div of children) {
      if (div === first) {
        break;
      }
      firstPosition++;
    }
    const nextFirstPosition = (360 - this.rotation + this.parentRotation) % 360 / 90 * (this.#allResizerDivs.length / 4);
    if (nextFirstPosition !== firstPosition) {
      if (nextFirstPosition < firstPosition) {
        for (let i2 = 0; i2 < firstPosition - nextFirstPosition; i2++) {
          this.#resizersDiv.append(this.#resizersDiv.firstChild);
        }
      } else if (nextFirstPosition > firstPosition) {
        for (let i2 = 0; i2 < nextFirstPosition - firstPosition; i2++) {
          this.#resizersDiv.firstChild.before(this.#resizersDiv.lastChild);
        }
      }
      let i = 0;
      for (const child of children) {
        const div = this.#allResizerDivs[i++];
        const name = div.getAttribute("data-resizer-name");
        _AnnotationEditor._l10nPromise.get(`pdfjs-editor-resizer-label-${name}`).then((msg) => child.setAttribute("aria-label", msg));
      }
    }
    this.#setResizerTabIndex(0);
    this.#isResizerEnabledForKeyboard = true;
    this.#resizersDiv.firstChild.focus({
      focusVisible: true
    });
    event.preventDefault();
    event.stopImmediatePropagation();
  }
  #resizerKeydown(event) {
    _AnnotationEditor._resizerKeyboardManager.exec(this, event);
  }
  #resizerBlur(event) {
    if (this.#isResizerEnabledForKeyboard && event.relatedTarget?.parentNode !== this.#resizersDiv) {
      this.#stopResizing();
    }
  }
  #resizerFocus(name) {
    this.#focusedResizerName = this.#isResizerEnabledForKeyboard ? name : "";
  }
  #setResizerTabIndex(value) {
    if (!this.#allResizerDivs) {
      return;
    }
    for (const div of this.#allResizerDivs) {
      div.tabIndex = value;
    }
  }
  _resizeWithKeyboard(x, y) {
    if (!this.#isResizerEnabledForKeyboard) {
      return;
    }
    this.#resizerPointermove(this.#focusedResizerName, {
      movementX: x,
      movementY: y
    });
  }
  #stopResizing() {
    this.#isResizerEnabledForKeyboard = false;
    this.#setResizerTabIndex(-1);
    if (this.#savedDimensions) {
      const {
        savedX,
        savedY,
        savedWidth,
        savedHeight
      } = this.#savedDimensions;
      this.#addResizeToUndoStack(savedX, savedY, savedWidth, savedHeight);
      this.#savedDimensions = null;
    }
  }
  _stopResizingWithKeyboard() {
    this.#stopResizing();
    this.div.focus();
  }
  select() {
    this.makeResizable();
    this.div?.classList.add("selectedEditor");
    if (!this.#editToolbar) {
      this.addEditToolbar().then(() => {
        if (this.div?.classList.contains("selectedEditor")) {
          this.#editToolbar?.show();
        }
      });
      return;
    }
    this.#editToolbar?.show();
  }
  unselect() {
    this.#resizersDiv?.classList.add("hidden");
    this.div?.classList.remove("selectedEditor");
    if (this.div?.contains(document.activeElement)) {
      this._uiManager.currentLayer.div.focus({
        preventScroll: true
      });
    }
    this.#editToolbar?.hide();
  }
  updateParams(type, value) {
  }
  disableEditing() {
  }
  enableEditing() {
  }
  enterInEditMode() {
  }
  getImageForAltText() {
    return null;
  }
  get contentDiv() {
    return this.div;
  }
  get isEditing() {
    return this.#isEditing;
  }
  set isEditing(value) {
    this.#isEditing = value;
    if (!this.parent) {
      return;
    }
    if (value) {
      this.parent.setSelected(this);
      this.parent.setActiveEditor(this);
    } else {
      this.parent.setActiveEditor(null);
    }
  }
  setAspectRatio(width, height) {
    this.#keepAspectRatio = true;
    const aspectRatio = width / height;
    const {
      style
    } = this.div;
    style.aspectRatio = aspectRatio;
    style.height = "auto";
  }
  static get MIN_SIZE() {
    return 16;
  }
  static canCreateNewEmptyEditor() {
    return true;
  }
  get telemetryInitialData() {
    return {
      action: "added"
    };
  }
  get telemetryFinalData() {
    return null;
  }
  _reportTelemetry(data, mustWait = false) {
    if (mustWait) {
      this.#telemetryTimeouts ||= /* @__PURE__ */ new Map();
      const {
        action
      } = data;
      let timeout = this.#telemetryTimeouts.get(action);
      if (timeout) {
        clearTimeout(timeout);
      }
      timeout = setTimeout(() => {
        this._reportTelemetry(data);
        this.#telemetryTimeouts.delete(action);
        if (this.#telemetryTimeouts.size === 0) {
          this.#telemetryTimeouts = null;
        }
      }, _AnnotationEditor._telemetryTimeout);
      this.#telemetryTimeouts.set(action, timeout);
      return;
    }
    data.type ||= this.editorType;
    this._uiManager._eventBus.dispatch("reporttelemetry", {
      source: this,
      details: {
        type: "editing",
        data
      }
    });
  }
  show(visible = this._isVisible) {
    this.div.classList.toggle("hidden", !visible);
    this._isVisible = visible;
  }
  enable() {
    if (this.div) {
      this.div.tabIndex = 0;
    }
    this.#disabled = false;
  }
  disable() {
    if (this.div) {
      this.div.tabIndex = -1;
    }
    this.#disabled = true;
  }
  renderAnnotationElement(annotation) {
    let content = annotation.container.querySelector(".annotationContent");
    if (!content) {
      content = document.createElement("div");
      content.classList.add("annotationContent", this.editorType);
      annotation.container.prepend(content);
    } else if (content.nodeName === "CANVAS") {
      const canvas = content;
      content = document.createElement("div");
      content.classList.add("annotationContent", this.editorType);
      canvas.before(content);
    }
    return content;
  }
  resetAnnotationElement(annotation) {
    const {
      firstChild
    } = annotation.container;
    if (firstChild.nodeName === "DIV" && firstChild.classList.contains("annotationContent")) {
      firstChild.remove();
    }
  }
};
var FakeEditor = class extends AnnotationEditor {
  constructor(params) {
    super(params);
    this.annotationElementId = params.annotationElementId;
    this.deleted = true;
  }
  serialize() {
    return {
      id: this.annotationElementId,
      deleted: true,
      pageIndex: this.pageIndex
    };
  }
};
var SEED = 3285377520;
var MASK_HIGH = 4294901760;
var MASK_LOW = 65535;
var MurmurHash3_64 = class {
  constructor(seed) {
    this.h1 = seed ? seed & 4294967295 : SEED;
    this.h2 = seed ? seed & 4294967295 : SEED;
  }
  update(input) {
    let data, length;
    if (typeof input === "string") {
      data = new Uint8Array(input.length * 2);
      length = 0;
      for (let i = 0, ii = input.length; i < ii; i++) {
        const code = input.charCodeAt(i);
        if (code <= 255) {
          data[length++] = code;
        } else {
          data[length++] = code >>> 8;
          data[length++] = code & 255;
        }
      }
    } else if (ArrayBuffer.isView(input)) {
      data = input.slice();
      length = data.byteLength;
    } else {
      throw new Error("Invalid data format, must be a string or TypedArray.");
    }
    const blockCounts = length >> 2;
    const tailLength = length - blockCounts * 4;
    const dataUint32 = new Uint32Array(data.buffer, 0, blockCounts);
    let k1 = 0, k2 = 0;
    let h1 = this.h1, h2 = this.h2;
    const C1 = 3432918353, C2 = 461845907;
    const C1_LOW = C1 & MASK_LOW, C2_LOW = C2 & MASK_LOW;
    for (let i = 0; i < blockCounts; i++) {
      if (i & 1) {
        k1 = dataUint32[i];
        k1 = k1 * C1 & MASK_HIGH | k1 * C1_LOW & MASK_LOW;
        k1 = k1 << 15 | k1 >>> 17;
        k1 = k1 * C2 & MASK_HIGH | k1 * C2_LOW & MASK_LOW;
        h1 ^= k1;
        h1 = h1 << 13 | h1 >>> 19;
        h1 = h1 * 5 + 3864292196;
      } else {
        k2 = dataUint32[i];
        k2 = k2 * C1 & MASK_HIGH | k2 * C1_LOW & MASK_LOW;
        k2 = k2 << 15 | k2 >>> 17;
        k2 = k2 * C2 & MASK_HIGH | k2 * C2_LOW & MASK_LOW;
        h2 ^= k2;
        h2 = h2 << 13 | h2 >>> 19;
        h2 = h2 * 5 + 3864292196;
      }
    }
    k1 = 0;
    switch (tailLength) {
      case 3:
        k1 ^= data[blockCounts * 4 + 2] << 16;
      case 2:
        k1 ^= data[blockCounts * 4 + 1] << 8;
      case 1:
        k1 ^= data[blockCounts * 4];
        k1 = k1 * C1 & MASK_HIGH | k1 * C1_LOW & MASK_LOW;
        k1 = k1 << 15 | k1 >>> 17;
        k1 = k1 * C2 & MASK_HIGH | k1 * C2_LOW & MASK_LOW;
        if (blockCounts & 1) {
          h1 ^= k1;
        } else {
          h2 ^= k1;
        }
    }
    this.h1 = h1;
    this.h2 = h2;
  }
  hexdigest() {
    let h1 = this.h1, h2 = this.h2;
    h1 ^= h2 >>> 1;
    h1 = h1 * 3981806797 & MASK_HIGH | h1 * 36045 & MASK_LOW;
    h2 = h2 * 4283543511 & MASK_HIGH | ((h2 << 16 | h1 >>> 16) * 2950163797 & MASK_HIGH) >>> 16;
    h1 ^= h2 >>> 1;
    h1 = h1 * 444984403 & MASK_HIGH | h1 * 60499 & MASK_LOW;
    h2 = h2 * 3301882366 & MASK_HIGH | ((h2 << 16 | h1 >>> 16) * 3120437893 & MASK_HIGH) >>> 16;
    h1 ^= h2 >>> 1;
    return (h1 >>> 0).toString(16).padStart(8, "0") + (h2 >>> 0).toString(16).padStart(8, "0");
  }
};
var SerializableEmpty = Object.freeze({
  map: null,
  hash: "",
  transfer: void 0
});
var AnnotationStorage = class {
  #modified = false;
  #modifiedIds = null;
  #storage = /* @__PURE__ */ new Map();
  constructor() {
    this.onSetModified = null;
    this.onResetModified = null;
    this.onAnnotationEditor = null;
  }
  getValue(key, defaultValue) {
    const value = this.#storage.get(key);
    if (value === void 0) {
      return defaultValue;
    }
    return Object.assign(defaultValue, value);
  }
  getRawValue(key) {
    return this.#storage.get(key);
  }
  remove(key) {
    this.#storage.delete(key);
    if (this.#storage.size === 0) {
      this.resetModified();
    }
    if (typeof this.onAnnotationEditor === "function") {
      for (const value of this.#storage.values()) {
        if (value instanceof AnnotationEditor) {
          return;
        }
      }
      this.onAnnotationEditor(null);
    }
  }
  setValue(key, value) {
    const obj = this.#storage.get(key);
    let modified = false;
    if (obj !== void 0) {
      for (const [entry, val] of Object.entries(value)) {
        if (obj[entry] !== val) {
          modified = true;
          obj[entry] = val;
        }
      }
    } else {
      modified = true;
      this.#storage.set(key, value);
    }
    if (modified) {
      this.#setModified();
    }
    if (value instanceof AnnotationEditor && typeof this.onAnnotationEditor === "function") {
      this.onAnnotationEditor(value.constructor._type);
    }
  }
  has(key) {
    return this.#storage.has(key);
  }
  getAll() {
    return this.#storage.size > 0 ? objectFromMap(this.#storage) : null;
  }
  setAll(obj) {
    for (const [key, val] of Object.entries(obj)) {
      this.setValue(key, val);
    }
  }
  get size() {
    return this.#storage.size;
  }
  #setModified() {
    if (!this.#modified) {
      this.#modified = true;
      if (typeof this.onSetModified === "function") {
        this.onSetModified();
      }
    }
  }
  resetModified() {
    if (this.#modified) {
      this.#modified = false;
      if (typeof this.onResetModified === "function") {
        this.onResetModified();
      }
    }
  }
  get print() {
    return new PrintAnnotationStorage(this);
  }
  get serializable() {
    if (this.#storage.size === 0) {
      return SerializableEmpty;
    }
    const map = /* @__PURE__ */ new Map(), hash = new MurmurHash3_64(), transfer = [];
    const context = /* @__PURE__ */ Object.create(null);
    let hasBitmap = false;
    for (const [key, val] of this.#storage) {
      const serialized = val instanceof AnnotationEditor ? val.serialize(false, context) : val;
      if (serialized) {
        map.set(key, serialized);
        hash.update(`${key}:${JSON.stringify(serialized)}`);
        hasBitmap ||= !!serialized.bitmap;
      }
    }
    if (hasBitmap) {
      for (const value of map.values()) {
        if (value.bitmap) {
          transfer.push(value.bitmap);
        }
      }
    }
    return map.size > 0 ? {
      map,
      hash: hash.hexdigest(),
      transfer
    } : SerializableEmpty;
  }
  get editorStats() {
    let stats = null;
    const typeToEditor = /* @__PURE__ */ new Map();
    for (const value of this.#storage.values()) {
      if (!(value instanceof AnnotationEditor)) {
        continue;
      }
      const editorStats = value.telemetryFinalData;
      if (!editorStats) {
        continue;
      }
      const {
        type
      } = editorStats;
      if (!typeToEditor.has(type)) {
        typeToEditor.set(type, Object.getPrototypeOf(value).constructor);
      }
      stats ||= /* @__PURE__ */ Object.create(null);
      const map = stats[type] ||= /* @__PURE__ */ new Map();
      for (const [key, val] of Object.entries(editorStats)) {
        if (key === "type") {
          continue;
        }
        let counters = map.get(key);
        if (!counters) {
          counters = /* @__PURE__ */ new Map();
          map.set(key, counters);
        }
        const count = counters.get(val) ?? 0;
        counters.set(val, count + 1);
      }
    }
    for (const [type, editor] of typeToEditor) {
      stats[type] = editor.computeTelemetryFinalData(stats[type]);
    }
    return stats;
  }
  resetModifiedIds() {
    this.#modifiedIds = null;
  }
  get modifiedIds() {
    if (this.#modifiedIds) {
      return this.#modifiedIds;
    }
    const ids = [];
    for (const value of this.#storage.values()) {
      if (!(value instanceof AnnotationEditor) || !value.annotationElementId || !value.serialize()) {
        continue;
      }
      ids.push(value.annotationElementId);
    }
    return this.#modifiedIds = {
      ids: new Set(ids),
      hash: ids.join(",")
    };
  }
};
var PrintAnnotationStorage = class extends AnnotationStorage {
  #serializable;
  constructor(parent) {
    super();
    const {
      map,
      hash,
      transfer
    } = parent.serializable;
    const clone = structuredClone(map, transfer ? {
      transfer
    } : null);
    this.#serializable = {
      map: clone,
      hash,
      transfer
    };
  }
  get print() {
    unreachable("Should not call PrintAnnotationStorage.print");
  }
  get serializable() {
    return this.#serializable;
  }
  get modifiedIds() {
    return shadow(this, "modifiedIds", {
      ids: /* @__PURE__ */ new Set(),
      hash: ""
    });
  }
};
var FontLoader = class {
  #systemFonts = /* @__PURE__ */ new Set();
  constructor({
    ownerDocument = globalThis.document,
    styleElement = null
  }) {
    this._document = ownerDocument;
    this.nativeFontFaces = /* @__PURE__ */ new Set();
    this.styleElement = null;
    this.loadingRequests = [];
    this.loadTestFontId = 0;
  }
  addNativeFontFace(nativeFontFace) {
    this.nativeFontFaces.add(nativeFontFace);
    this._document.fonts.add(nativeFontFace);
  }
  removeNativeFontFace(nativeFontFace) {
    this.nativeFontFaces.delete(nativeFontFace);
    this._document.fonts.delete(nativeFontFace);
  }
  insertRule(rule) {
    if (!this.styleElement) {
      this.styleElement = this._document.createElement("style");
      this._document.documentElement.getElementsByTagName("head")[0].append(this.styleElement);
    }
    const styleSheet = this.styleElement.sheet;
    styleSheet.insertRule(rule, styleSheet.cssRules.length);
  }
  clear() {
    for (const nativeFontFace of this.nativeFontFaces) {
      this._document.fonts.delete(nativeFontFace);
    }
    this.nativeFontFaces.clear();
    this.#systemFonts.clear();
    if (this.styleElement) {
      this.styleElement.remove();
      this.styleElement = null;
    }
  }
  async loadSystemFont({
    systemFontInfo: info2,
    _inspectFont
  }) {
    if (!info2 || this.#systemFonts.has(info2.loadedName)) {
      return;
    }
    assert(!this.disableFontFace, "loadSystemFont shouldn't be called when `disableFontFace` is set.");
    if (this.isFontLoadingAPISupported) {
      const {
        loadedName,
        src,
        style
      } = info2;
      const fontFace = new FontFace(loadedName, src, style);
      this.addNativeFontFace(fontFace);
      try {
        await fontFace.load();
        this.#systemFonts.add(loadedName);
        _inspectFont?.(info2);
      } catch {
        warn(`Cannot load system font: ${info2.baseFontName}, installing it could help to improve PDF rendering.`);
        this.removeNativeFontFace(fontFace);
      }
      return;
    }
    unreachable("Not implemented: loadSystemFont without the Font Loading API.");
  }
  async bind(font) {
    if (font.attached || font.missingFile && !font.systemFontInfo) {
      return;
    }
    font.attached = true;
    if (font.systemFontInfo) {
      await this.loadSystemFont(font);
      return;
    }
    if (this.isFontLoadingAPISupported) {
      const nativeFontFace = font.createNativeFontFace();
      if (nativeFontFace) {
        this.addNativeFontFace(nativeFontFace);
        try {
          await nativeFontFace.loaded;
        } catch (ex) {
          warn(`Failed to load font '${nativeFontFace.family}': '${ex}'.`);
          font.disableFontFace = true;
          throw ex;
        }
      }
      return;
    }
    const rule = font.createFontFaceRule();
    if (rule) {
      this.insertRule(rule);
      if (this.isSyncFontLoadingSupported) {
        return;
      }
      await new Promise((resolve) => {
        const request = this._queueLoadingCallback(resolve);
        this._prepareFontLoadEvent(font, request);
      });
    }
  }
  get isFontLoadingAPISupported() {
    const hasFonts = !!this._document?.fonts;
    return shadow(this, "isFontLoadingAPISupported", hasFonts);
  }
  get isSyncFontLoadingSupported() {
    let supported = false;
    if (isNodeJS) {
      supported = true;
    } else if (typeof navigator !== "undefined" && typeof navigator?.userAgent === "string" && /Mozilla\/5.0.*?rv:\d+.*? Gecko/.test(navigator.userAgent)) {
      supported = true;
    }
    return shadow(this, "isSyncFontLoadingSupported", supported);
  }
  _queueLoadingCallback(callback) {
    function completeRequest() {
      assert(!request.done, "completeRequest() cannot be called twice.");
      request.done = true;
      while (loadingRequests.length > 0 && loadingRequests[0].done) {
        const otherRequest = loadingRequests.shift();
        setTimeout(otherRequest.callback, 0);
      }
    }
    const {
      loadingRequests
    } = this;
    const request = {
      done: false,
      complete: completeRequest,
      callback
    };
    loadingRequests.push(request);
    return request;
  }
  get _loadTestFont() {
    const testFont = atob("T1RUTwALAIAAAwAwQ0ZGIDHtZg4AAAOYAAAAgUZGVE1lkzZwAAAEHAAAABxHREVGABQAFQAABDgAAAAeT1MvMlYNYwkAAAEgAAAAYGNtYXABDQLUAAACNAAAAUJoZWFk/xVFDQAAALwAAAA2aGhlYQdkA+oAAAD0AAAAJGhtdHgD6AAAAAAEWAAAAAZtYXhwAAJQAAAAARgAAAAGbmFtZVjmdH4AAAGAAAAAsXBvc3T/hgAzAAADeAAAACAAAQAAAAEAALZRFsRfDzz1AAsD6AAAAADOBOTLAAAAAM4KHDwAAAAAA+gDIQAAAAgAAgAAAAAAAAABAAADIQAAAFoD6AAAAAAD6AABAAAAAAAAAAAAAAAAAAAAAQAAUAAAAgAAAAQD6AH0AAUAAAKKArwAAACMAooCvAAAAeAAMQECAAACAAYJAAAAAAAAAAAAAQAAAAAAAAAAAAAAAFBmRWQAwAAuAC4DIP84AFoDIQAAAAAAAQAAAAAAAAAAACAAIAABAAAADgCuAAEAAAAAAAAAAQAAAAEAAAAAAAEAAQAAAAEAAAAAAAIAAQAAAAEAAAAAAAMAAQAAAAEAAAAAAAQAAQAAAAEAAAAAAAUAAQAAAAEAAAAAAAYAAQAAAAMAAQQJAAAAAgABAAMAAQQJAAEAAgABAAMAAQQJAAIAAgABAAMAAQQJAAMAAgABAAMAAQQJAAQAAgABAAMAAQQJAAUAAgABAAMAAQQJAAYAAgABWABYAAAAAAAAAwAAAAMAAAAcAAEAAAAAADwAAwABAAAAHAAEACAAAAAEAAQAAQAAAC7//wAAAC7////TAAEAAAAAAAABBgAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMAAAAAAAD/gwAyAAAAAQAAAAAAAAAAAAAAAAAAAAABAAQEAAEBAQJYAAEBASH4DwD4GwHEAvgcA/gXBIwMAYuL+nz5tQXkD5j3CBLnEQACAQEBIVhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYAAABAQAADwACAQEEE/t3Dov6fAH6fAT+fPp8+nwHDosMCvm1Cvm1DAz6fBQAAAAAAAABAAAAAMmJbzEAAAAAzgTjFQAAAADOBOQpAAEAAAAAAAAADAAUAAQAAAABAAAAAgABAAAAAAAAAAAD6AAAAAAAAA==");
    return shadow(this, "_loadTestFont", testFont);
  }
  _prepareFontLoadEvent(font, request) {
    function int32(data2, offset) {
      return data2.charCodeAt(offset) << 24 | data2.charCodeAt(offset + 1) << 16 | data2.charCodeAt(offset + 2) << 8 | data2.charCodeAt(offset + 3) & 255;
    }
    function spliceString(s, offset, remove, insert) {
      const chunk1 = s.substring(0, offset);
      const chunk2 = s.substring(offset + remove);
      return chunk1 + insert + chunk2;
    }
    let i, ii;
    const canvas = this._document.createElement("canvas");
    canvas.width = 1;
    canvas.height = 1;
    const ctx = canvas.getContext("2d");
    let called = 0;
    function isFontReady(name, callback) {
      if (++called > 30) {
        warn("Load test font never loaded.");
        callback();
        return;
      }
      ctx.font = "30px " + name;
      ctx.fillText(".", 0, 20);
      const imageData = ctx.getImageData(0, 0, 1, 1);
      if (imageData.data[3] > 0) {
        callback();
        return;
      }
      setTimeout(isFontReady.bind(null, name, callback));
    }
    const loadTestFontId = `lt${Date.now()}${this.loadTestFontId++}`;
    let data = this._loadTestFont;
    const COMMENT_OFFSET = 976;
    data = spliceString(data, COMMENT_OFFSET, loadTestFontId.length, loadTestFontId);
    const CFF_CHECKSUM_OFFSET = 16;
    const XXXX_VALUE = 1482184792;
    let checksum = int32(data, CFF_CHECKSUM_OFFSET);
    for (i = 0, ii = loadTestFontId.length - 3; i < ii; i += 4) {
      checksum = checksum - XXXX_VALUE + int32(loadTestFontId, i) | 0;
    }
    if (i < loadTestFontId.length) {
      checksum = checksum - XXXX_VALUE + int32(loadTestFontId + "XXX", i) | 0;
    }
    data = spliceString(data, CFF_CHECKSUM_OFFSET, 4, string32(checksum));
    const url = `url(data:font/opentype;base64,${btoa(data)});`;
    const rule = `@font-face {font-family:"${loadTestFontId}";src:${url}}`;
    this.insertRule(rule);
    const div = this._document.createElement("div");
    div.style.visibility = "hidden";
    div.style.width = div.style.height = "10px";
    div.style.position = "absolute";
    div.style.top = div.style.left = "0px";
    for (const name of [font.loadedName, loadTestFontId]) {
      const span = this._document.createElement("span");
      span.textContent = "Hi";
      span.style.fontFamily = name;
      div.append(span);
    }
    this._document.body.append(div);
    isFontReady(loadTestFontId, () => {
      div.remove();
      request.complete();
    });
  }
};
var FontFaceObject = class {
  constructor(translatedData, {
    disableFontFace = false,
    inspectFont = null
  }) {
    this.compiledGlyphs = /* @__PURE__ */ Object.create(null);
    for (const i in translatedData) {
      this[i] = translatedData[i];
    }
    this.disableFontFace = disableFontFace === true;
    this._inspectFont = inspectFont;
  }
  createNativeFontFace() {
    if (!this.data || this.disableFontFace) {
      return null;
    }
    let nativeFontFace;
    if (!this.cssFontInfo) {
      nativeFontFace = new FontFace(this.loadedName, this.data, {});
    } else {
      const css = {
        weight: this.cssFontInfo.fontWeight
      };
      if (this.cssFontInfo.italicAngle) {
        css.style = `oblique ${this.cssFontInfo.italicAngle}deg`;
      }
      nativeFontFace = new FontFace(this.cssFontInfo.fontFamily, this.data, css);
    }
    this._inspectFont?.(this);
    return nativeFontFace;
  }
  createFontFaceRule() {
    if (!this.data || this.disableFontFace) {
      return null;
    }
    const data = bytesToString(this.data);
    const url = `url(data:${this.mimetype};base64,${btoa(data)});`;
    let rule;
    if (!this.cssFontInfo) {
      rule = `@font-face {font-family:"${this.loadedName}";src:${url}}`;
    } else {
      let css = `font-weight: ${this.cssFontInfo.fontWeight};`;
      if (this.cssFontInfo.italicAngle) {
        css += `font-style: oblique ${this.cssFontInfo.italicAngle}deg;`;
      }
      rule = `@font-face {font-family:"${this.cssFontInfo.fontFamily}";${css}src:${url}}`;
    }
    this._inspectFont?.(this, url);
    return rule;
  }
  getPathGenerator(objs, character) {
    if (this.compiledGlyphs[character] !== void 0) {
      return this.compiledGlyphs[character];
    }
    let cmds;
    try {
      cmds = objs.get(this.loadedName + "_path_" + character);
    } catch (ex) {
      warn(`getPathGenerator - ignoring character: "${ex}".`);
    }
    if (!Array.isArray(cmds) || cmds.length === 0) {
      return this.compiledGlyphs[character] = function(c, size) {
      };
    }
    const commands = [];
    for (let i = 0, ii = cmds.length; i < ii; ) {
      switch (cmds[i++]) {
        case FontRenderOps.BEZIER_CURVE_TO:
          {
            const [a, b, c, d, e, f] = cmds.slice(i, i + 6);
            commands.push((ctx) => ctx.bezierCurveTo(a, b, c, d, e, f));
            i += 6;
          }
          break;
        case FontRenderOps.MOVE_TO:
          {
            const [a, b] = cmds.slice(i, i + 2);
            commands.push((ctx) => ctx.moveTo(a, b));
            i += 2;
          }
          break;
        case FontRenderOps.LINE_TO:
          {
            const [a, b] = cmds.slice(i, i + 2);
            commands.push((ctx) => ctx.lineTo(a, b));
            i += 2;
          }
          break;
        case FontRenderOps.QUADRATIC_CURVE_TO:
          {
            const [a, b, c, d] = cmds.slice(i, i + 4);
            commands.push((ctx) => ctx.quadraticCurveTo(a, b, c, d));
            i += 4;
          }
          break;
        case FontRenderOps.RESTORE:
          commands.push((ctx) => ctx.restore());
          break;
        case FontRenderOps.SAVE:
          commands.push((ctx) => ctx.save());
          break;
        case FontRenderOps.SCALE:
          assert(commands.length === 2, "Scale command is only valid at the third position.");
          break;
        case FontRenderOps.TRANSFORM:
          {
            const [a, b, c, d, e, f] = cmds.slice(i, i + 6);
            commands.push((ctx) => ctx.transform(a, b, c, d, e, f));
            i += 6;
          }
          break;
        case FontRenderOps.TRANSLATE:
          {
            const [a, b] = cmds.slice(i, i + 2);
            commands.push((ctx) => ctx.translate(a, b));
            i += 2;
          }
          break;
      }
    }
    return this.compiledGlyphs[character] = function glyphDrawer(ctx, size) {
      commands[0](ctx);
      commands[1](ctx);
      ctx.scale(size, -size);
      for (let i = 2, ii = commands.length; i < ii; i++) {
        commands[i](ctx);
      }
    };
  }
};
if (isNodeJS) {
  packageCapability = Promise.withResolvers();
  packageMap = null;
  const loadPackages = async () => {
    const fs = await Promise.resolve().then(() => __toESM(require_fs(), 1)), http = await Promise.resolve().then(() => __toESM(require_http(), 1)), https = await Promise.resolve().then(() => __toESM(require_https(), 1)), url = await Promise.resolve().then(() => __toESM(require_url(), 1));
    let canvas, path2d;
    return new Map(Object.entries({
      fs,
      http,
      https,
      url,
      canvas,
      path2d
    }));
  };
  loadPackages().then((map) => {
    packageMap = map;
    packageCapability.resolve();
  }, (reason) => {
    warn(`loadPackages: ${reason}`);
    packageMap = /* @__PURE__ */ new Map();
    packageCapability.resolve();
  });
}
var packageCapability;
var packageMap;
var NodePackages = class {
  static get promise() {
    return packageCapability.promise;
  }
  static get(name) {
    return packageMap?.get(name);
  }
};
var node_utils_fetchData = function(url) {
  const fs = NodePackages.get("fs");
  return fs.promises.readFile(url).then((data) => new Uint8Array(data));
};
var NodeFilterFactory = class extends BaseFilterFactory {
};
var NodeCanvasFactory = class extends BaseCanvasFactory {
  _createCanvas(width, height) {
    const canvas = NodePackages.get("canvas");
    return canvas.createCanvas(width, height);
  }
};
var NodeCMapReaderFactory = class extends BaseCMapReaderFactory {
  _fetchData(url, compressionType) {
    return node_utils_fetchData(url).then((data) => ({
      cMapData: data,
      compressionType
    }));
  }
};
var NodeStandardFontDataFactory = class extends BaseStandardFontDataFactory {
  _fetchData(url) {
    return node_utils_fetchData(url);
  }
};
var PathType = {
  FILL: "Fill",
  STROKE: "Stroke",
  SHADING: "Shading"
};
function applyBoundingBox(ctx, bbox) {
  if (!bbox) {
    return;
  }
  const width = bbox[2] - bbox[0];
  const height = bbox[3] - bbox[1];
  const region = new Path2D();
  region.rect(bbox[0], bbox[1], width, height);
  ctx.clip(region);
}
var BaseShadingPattern = class _BaseShadingPattern {
  constructor() {
    if (this.constructor === _BaseShadingPattern) {
      unreachable("Cannot initialize BaseShadingPattern.");
    }
  }
  getPattern() {
    unreachable("Abstract method `getPattern` called.");
  }
};
var RadialAxialShadingPattern = class extends BaseShadingPattern {
  constructor(IR) {
    super();
    this._type = IR[1];
    this._bbox = IR[2];
    this._colorStops = IR[3];
    this._p0 = IR[4];
    this._p1 = IR[5];
    this._r0 = IR[6];
    this._r1 = IR[7];
    this.matrix = null;
  }
  _createGradient(ctx) {
    let grad;
    if (this._type === "axial") {
      grad = ctx.createLinearGradient(this._p0[0], this._p0[1], this._p1[0], this._p1[1]);
    } else if (this._type === "radial") {
      grad = ctx.createRadialGradient(this._p0[0], this._p0[1], this._r0, this._p1[0], this._p1[1], this._r1);
    }
    for (const colorStop of this._colorStops) {
      grad.addColorStop(colorStop[0], colorStop[1]);
    }
    return grad;
  }
  getPattern(ctx, owner, inverse, pathType) {
    let pattern;
    if (pathType === PathType.STROKE || pathType === PathType.FILL) {
      const ownerBBox = owner.current.getClippedPathBoundingBox(pathType, getCurrentTransform(ctx)) || [0, 0, 0, 0];
      const width = Math.ceil(ownerBBox[2] - ownerBBox[0]) || 1;
      const height = Math.ceil(ownerBBox[3] - ownerBBox[1]) || 1;
      const tmpCanvas = owner.cachedCanvases.getCanvas("pattern", width, height, true);
      const tmpCtx = tmpCanvas.context;
      tmpCtx.clearRect(0, 0, tmpCtx.canvas.width, tmpCtx.canvas.height);
      tmpCtx.beginPath();
      tmpCtx.rect(0, 0, tmpCtx.canvas.width, tmpCtx.canvas.height);
      tmpCtx.translate(-ownerBBox[0], -ownerBBox[1]);
      inverse = Util.transform(inverse, [1, 0, 0, 1, ownerBBox[0], ownerBBox[1]]);
      tmpCtx.transform(...owner.baseTransform);
      if (this.matrix) {
        tmpCtx.transform(...this.matrix);
      }
      applyBoundingBox(tmpCtx, this._bbox);
      tmpCtx.fillStyle = this._createGradient(tmpCtx);
      tmpCtx.fill();
      pattern = ctx.createPattern(tmpCanvas.canvas, "no-repeat");
      const domMatrix = new DOMMatrix(inverse);
      pattern.setTransform(domMatrix);
    } else {
      applyBoundingBox(ctx, this._bbox);
      pattern = this._createGradient(ctx);
    }
    return pattern;
  }
};
function drawTriangle(data, context, p1, p2, p3, c1, c2, c3) {
  const coords = context.coords, colors = context.colors;
  const bytes = data.data, rowSize = data.width * 4;
  let tmp;
  if (coords[p1 + 1] > coords[p2 + 1]) {
    tmp = p1;
    p1 = p2;
    p2 = tmp;
    tmp = c1;
    c1 = c2;
    c2 = tmp;
  }
  if (coords[p2 + 1] > coords[p3 + 1]) {
    tmp = p2;
    p2 = p3;
    p3 = tmp;
    tmp = c2;
    c2 = c3;
    c3 = tmp;
  }
  if (coords[p1 + 1] > coords[p2 + 1]) {
    tmp = p1;
    p1 = p2;
    p2 = tmp;
    tmp = c1;
    c1 = c2;
    c2 = tmp;
  }
  const x1 = (coords[p1] + context.offsetX) * context.scaleX;
  const y1 = (coords[p1 + 1] + context.offsetY) * context.scaleY;
  const x2 = (coords[p2] + context.offsetX) * context.scaleX;
  const y2 = (coords[p2 + 1] + context.offsetY) * context.scaleY;
  const x3 = (coords[p3] + context.offsetX) * context.scaleX;
  const y3 = (coords[p3 + 1] + context.offsetY) * context.scaleY;
  if (y1 >= y3) {
    return;
  }
  const c1r = colors[c1], c1g = colors[c1 + 1], c1b = colors[c1 + 2];
  const c2r = colors[c2], c2g = colors[c2 + 1], c2b = colors[c2 + 2];
  const c3r = colors[c3], c3g = colors[c3 + 1], c3b = colors[c3 + 2];
  const minY = Math.round(y1), maxY = Math.round(y3);
  let xa, car, cag, cab;
  let xb, cbr, cbg, cbb;
  for (let y = minY; y <= maxY; y++) {
    if (y < y2) {
      const k2 = y < y1 ? 0 : (y1 - y) / (y1 - y2);
      xa = x1 - (x1 - x2) * k2;
      car = c1r - (c1r - c2r) * k2;
      cag = c1g - (c1g - c2g) * k2;
      cab = c1b - (c1b - c2b) * k2;
    } else {
      let k2;
      if (y > y3) {
        k2 = 1;
      } else if (y2 === y3) {
        k2 = 0;
      } else {
        k2 = (y2 - y) / (y2 - y3);
      }
      xa = x2 - (x2 - x3) * k2;
      car = c2r - (c2r - c3r) * k2;
      cag = c2g - (c2g - c3g) * k2;
      cab = c2b - (c2b - c3b) * k2;
    }
    let k;
    if (y < y1) {
      k = 0;
    } else if (y > y3) {
      k = 1;
    } else {
      k = (y1 - y) / (y1 - y3);
    }
    xb = x1 - (x1 - x3) * k;
    cbr = c1r - (c1r - c3r) * k;
    cbg = c1g - (c1g - c3g) * k;
    cbb = c1b - (c1b - c3b) * k;
    const x1_ = Math.round(Math.min(xa, xb));
    const x2_ = Math.round(Math.max(xa, xb));
    let j = rowSize * y + x1_ * 4;
    for (let x = x1_; x <= x2_; x++) {
      k = (xa - x) / (xa - xb);
      if (k < 0) {
        k = 0;
      } else if (k > 1) {
        k = 1;
      }
      bytes[j++] = car - (car - cbr) * k | 0;
      bytes[j++] = cag - (cag - cbg) * k | 0;
      bytes[j++] = cab - (cab - cbb) * k | 0;
      bytes[j++] = 255;
    }
  }
}
function drawFigure(data, figure, context) {
  const ps = figure.coords;
  const cs = figure.colors;
  let i, ii;
  switch (figure.type) {
    case "lattice":
      const verticesPerRow = figure.verticesPerRow;
      const rows = Math.floor(ps.length / verticesPerRow) - 1;
      const cols = verticesPerRow - 1;
      for (i = 0; i < rows; i++) {
        let q = i * verticesPerRow;
        for (let j = 0; j < cols; j++, q++) {
          drawTriangle(data, context, ps[q], ps[q + 1], ps[q + verticesPerRow], cs[q], cs[q + 1], cs[q + verticesPerRow]);
          drawTriangle(data, context, ps[q + verticesPerRow + 1], ps[q + 1], ps[q + verticesPerRow], cs[q + verticesPerRow + 1], cs[q + 1], cs[q + verticesPerRow]);
        }
      }
      break;
    case "triangles":
      for (i = 0, ii = ps.length; i < ii; i += 3) {
        drawTriangle(data, context, ps[i], ps[i + 1], ps[i + 2], cs[i], cs[i + 1], cs[i + 2]);
      }
      break;
    default:
      throw new Error("illegal figure");
  }
}
var MeshShadingPattern = class extends BaseShadingPattern {
  constructor(IR) {
    super();
    this._coords = IR[2];
    this._colors = IR[3];
    this._figures = IR[4];
    this._bounds = IR[5];
    this._bbox = IR[7];
    this._background = IR[8];
    this.matrix = null;
  }
  _createMeshCanvas(combinedScale, backgroundColor, cachedCanvases) {
    const EXPECTED_SCALE = 1.1;
    const MAX_PATTERN_SIZE = 3e3;
    const BORDER_SIZE = 2;
    const offsetX = Math.floor(this._bounds[0]);
    const offsetY = Math.floor(this._bounds[1]);
    const boundsWidth = Math.ceil(this._bounds[2]) - offsetX;
    const boundsHeight = Math.ceil(this._bounds[3]) - offsetY;
    const width = Math.min(Math.ceil(Math.abs(boundsWidth * combinedScale[0] * EXPECTED_SCALE)), MAX_PATTERN_SIZE);
    const height = Math.min(Math.ceil(Math.abs(boundsHeight * combinedScale[1] * EXPECTED_SCALE)), MAX_PATTERN_SIZE);
    const scaleX = boundsWidth / width;
    const scaleY = boundsHeight / height;
    const context = {
      coords: this._coords,
      colors: this._colors,
      offsetX: -offsetX,
      offsetY: -offsetY,
      scaleX: 1 / scaleX,
      scaleY: 1 / scaleY
    };
    const paddedWidth = width + BORDER_SIZE * 2;
    const paddedHeight = height + BORDER_SIZE * 2;
    const tmpCanvas = cachedCanvases.getCanvas("mesh", paddedWidth, paddedHeight, false);
    const tmpCtx = tmpCanvas.context;
    const data = tmpCtx.createImageData(width, height);
    if (backgroundColor) {
      const bytes = data.data;
      for (let i = 0, ii = bytes.length; i < ii; i += 4) {
        bytes[i] = backgroundColor[0];
        bytes[i + 1] = backgroundColor[1];
        bytes[i + 2] = backgroundColor[2];
        bytes[i + 3] = 255;
      }
    }
    for (const figure of this._figures) {
      drawFigure(data, figure, context);
    }
    tmpCtx.putImageData(data, BORDER_SIZE, BORDER_SIZE);
    const canvas = tmpCanvas.canvas;
    return {
      canvas,
      offsetX: offsetX - BORDER_SIZE * scaleX,
      offsetY: offsetY - BORDER_SIZE * scaleY,
      scaleX,
      scaleY
    };
  }
  getPattern(ctx, owner, inverse, pathType) {
    applyBoundingBox(ctx, this._bbox);
    let scale;
    if (pathType === PathType.SHADING) {
      scale = Util.singularValueDecompose2dScale(getCurrentTransform(ctx));
    } else {
      scale = Util.singularValueDecompose2dScale(owner.baseTransform);
      if (this.matrix) {
        const matrixScale = Util.singularValueDecompose2dScale(this.matrix);
        scale = [scale[0] * matrixScale[0], scale[1] * matrixScale[1]];
      }
    }
    const temporaryPatternCanvas = this._createMeshCanvas(scale, pathType === PathType.SHADING ? null : this._background, owner.cachedCanvases);
    if (pathType !== PathType.SHADING) {
      ctx.setTransform(...owner.baseTransform);
      if (this.matrix) {
        ctx.transform(...this.matrix);
      }
    }
    ctx.translate(temporaryPatternCanvas.offsetX, temporaryPatternCanvas.offsetY);
    ctx.scale(temporaryPatternCanvas.scaleX, temporaryPatternCanvas.scaleY);
    return ctx.createPattern(temporaryPatternCanvas.canvas, "no-repeat");
  }
};
var DummyShadingPattern = class extends BaseShadingPattern {
  getPattern() {
    return "hotpink";
  }
};
function getShadingPattern(IR) {
  switch (IR[0]) {
    case "RadialAxial":
      return new RadialAxialShadingPattern(IR);
    case "Mesh":
      return new MeshShadingPattern(IR);
    case "Dummy":
      return new DummyShadingPattern();
  }
  throw new Error(`Unknown IR type: ${IR[0]}`);
}
var PaintType = {
  COLORED: 1,
  UNCOLORED: 2
};
var TilingPattern = class _TilingPattern {
  static MAX_PATTERN_SIZE = 3e3;
  constructor(IR, color, ctx, canvasGraphicsFactory, baseTransform) {
    this.operatorList = IR[2];
    this.matrix = IR[3];
    this.bbox = IR[4];
    this.xstep = IR[5];
    this.ystep = IR[6];
    this.paintType = IR[7];
    this.tilingType = IR[8];
    this.color = color;
    this.ctx = ctx;
    this.canvasGraphicsFactory = canvasGraphicsFactory;
    this.baseTransform = baseTransform;
  }
  createPatternCanvas(owner) {
    const operatorList = this.operatorList;
    const bbox = this.bbox;
    const xstep = this.xstep;
    const ystep = this.ystep;
    const paintType = this.paintType;
    const tilingType = this.tilingType;
    const color = this.color;
    const canvasGraphicsFactory = this.canvasGraphicsFactory;
    info("TilingType: " + tilingType);
    const x0 = bbox[0], y0 = bbox[1], x1 = bbox[2], y1 = bbox[3];
    const matrixScale = Util.singularValueDecompose2dScale(this.matrix);
    const curMatrixScale = Util.singularValueDecompose2dScale(this.baseTransform);
    const combinedScale = [matrixScale[0] * curMatrixScale[0], matrixScale[1] * curMatrixScale[1]];
    const dimx = this.getSizeAndScale(xstep, this.ctx.canvas.width, combinedScale[0]);
    const dimy = this.getSizeAndScale(ystep, this.ctx.canvas.height, combinedScale[1]);
    const tmpCanvas = owner.cachedCanvases.getCanvas("pattern", dimx.size, dimy.size, true);
    const tmpCtx = tmpCanvas.context;
    const graphics = canvasGraphicsFactory.createCanvasGraphics(tmpCtx);
    graphics.groupLevel = owner.groupLevel;
    this.setFillAndStrokeStyleToContext(graphics, paintType, color);
    let adjustedX0 = x0;
    let adjustedY0 = y0;
    let adjustedX1 = x1;
    let adjustedY1 = y1;
    if (x0 < 0) {
      adjustedX0 = 0;
      adjustedX1 += Math.abs(x0);
    }
    if (y0 < 0) {
      adjustedY0 = 0;
      adjustedY1 += Math.abs(y0);
    }
    tmpCtx.translate(-(dimx.scale * adjustedX0), -(dimy.scale * adjustedY0));
    graphics.transform(dimx.scale, 0, 0, dimy.scale, 0, 0);
    tmpCtx.save();
    this.clipBbox(graphics, adjustedX0, adjustedY0, adjustedX1, adjustedY1);
    graphics.baseTransform = getCurrentTransform(graphics.ctx);
    graphics.executeOperatorList(operatorList);
    graphics.endDrawing();
    return {
      canvas: tmpCanvas.canvas,
      scaleX: dimx.scale,
      scaleY: dimy.scale,
      offsetX: adjustedX0,
      offsetY: adjustedY0
    };
  }
  getSizeAndScale(step, realOutputSize, scale) {
    step = Math.abs(step);
    const maxSize = Math.max(_TilingPattern.MAX_PATTERN_SIZE, realOutputSize);
    let size = Math.ceil(step * scale);
    if (size >= maxSize) {
      size = maxSize;
    } else {
      scale = size / step;
    }
    return {
      scale,
      size
    };
  }
  clipBbox(graphics, x0, y0, x1, y1) {
    const bboxWidth = x1 - x0;
    const bboxHeight = y1 - y0;
    graphics.ctx.rect(x0, y0, bboxWidth, bboxHeight);
    graphics.current.updateRectMinMax(getCurrentTransform(graphics.ctx), [x0, y0, x1, y1]);
    graphics.clip();
    graphics.endPath();
  }
  setFillAndStrokeStyleToContext(graphics, paintType, color) {
    const context = graphics.ctx, current = graphics.current;
    switch (paintType) {
      case PaintType.COLORED:
        const ctx = this.ctx;
        context.fillStyle = ctx.fillStyle;
        context.strokeStyle = ctx.strokeStyle;
        current.fillColor = ctx.fillStyle;
        current.strokeColor = ctx.strokeStyle;
        break;
      case PaintType.UNCOLORED:
        const cssColor = Util.makeHexColor(color[0], color[1], color[2]);
        context.fillStyle = cssColor;
        context.strokeStyle = cssColor;
        current.fillColor = cssColor;
        current.strokeColor = cssColor;
        break;
      default:
        throw new FormatError(`Unsupported paint type: ${paintType}`);
    }
  }
  getPattern(ctx, owner, inverse, pathType) {
    let matrix = inverse;
    if (pathType !== PathType.SHADING) {
      matrix = Util.transform(matrix, owner.baseTransform);
      if (this.matrix) {
        matrix = Util.transform(matrix, this.matrix);
      }
    }
    const temporaryPatternCanvas = this.createPatternCanvas(owner);
    let domMatrix = new DOMMatrix(matrix);
    domMatrix = domMatrix.translate(temporaryPatternCanvas.offsetX, temporaryPatternCanvas.offsetY);
    domMatrix = domMatrix.scale(1 / temporaryPatternCanvas.scaleX, 1 / temporaryPatternCanvas.scaleY);
    const pattern = ctx.createPattern(temporaryPatternCanvas.canvas, "repeat");
    pattern.setTransform(domMatrix);
    return pattern;
  }
};
function convertBlackAndWhiteToRGBA({
  src,
  srcPos = 0,
  dest,
  width,
  height,
  nonBlackColor = 4294967295,
  inverseDecode = false
}) {
  const black = util_FeatureTest.isLittleEndian ? 4278190080 : 255;
  const [zeroMapping, oneMapping] = inverseDecode ? [nonBlackColor, black] : [black, nonBlackColor];
  const widthInSource = width >> 3;
  const widthRemainder = width & 7;
  const srcLength = src.length;
  dest = new Uint32Array(dest.buffer);
  let destPos = 0;
  for (let i = 0; i < height; i++) {
    for (const max = srcPos + widthInSource; srcPos < max; srcPos++) {
      const elem2 = srcPos < srcLength ? src[srcPos] : 255;
      dest[destPos++] = elem2 & 128 ? oneMapping : zeroMapping;
      dest[destPos++] = elem2 & 64 ? oneMapping : zeroMapping;
      dest[destPos++] = elem2 & 32 ? oneMapping : zeroMapping;
      dest[destPos++] = elem2 & 16 ? oneMapping : zeroMapping;
      dest[destPos++] = elem2 & 8 ? oneMapping : zeroMapping;
      dest[destPos++] = elem2 & 4 ? oneMapping : zeroMapping;
      dest[destPos++] = elem2 & 2 ? oneMapping : zeroMapping;
      dest[destPos++] = elem2 & 1 ? oneMapping : zeroMapping;
    }
    if (widthRemainder === 0) {
      continue;
    }
    const elem = srcPos < srcLength ? src[srcPos++] : 255;
    for (let j = 0; j < widthRemainder; j++) {
      dest[destPos++] = elem & 1 << 7 - j ? oneMapping : zeroMapping;
    }
  }
  return {
    srcPos,
    destPos
  };
}
var MIN_FONT_SIZE = 16;
var MAX_FONT_SIZE = 100;
var EXECUTION_TIME = 15;
var EXECUTION_STEPS = 10;
var MAX_SIZE_TO_COMPILE = 1e3;
var FULL_CHUNK_HEIGHT = 16;
function mirrorContextOperations(ctx, destCtx) {
  if (ctx._removeMirroring) {
    throw new Error("Context is already forwarding operations.");
  }
  ctx.__originalSave = ctx.save;
  ctx.__originalRestore = ctx.restore;
  ctx.__originalRotate = ctx.rotate;
  ctx.__originalScale = ctx.scale;
  ctx.__originalTranslate = ctx.translate;
  ctx.__originalTransform = ctx.transform;
  ctx.__originalSetTransform = ctx.setTransform;
  ctx.__originalResetTransform = ctx.resetTransform;
  ctx.__originalClip = ctx.clip;
  ctx.__originalMoveTo = ctx.moveTo;
  ctx.__originalLineTo = ctx.lineTo;
  ctx.__originalBezierCurveTo = ctx.bezierCurveTo;
  ctx.__originalRect = ctx.rect;
  ctx.__originalClosePath = ctx.closePath;
  ctx.__originalBeginPath = ctx.beginPath;
  ctx._removeMirroring = () => {
    ctx.save = ctx.__originalSave;
    ctx.restore = ctx.__originalRestore;
    ctx.rotate = ctx.__originalRotate;
    ctx.scale = ctx.__originalScale;
    ctx.translate = ctx.__originalTranslate;
    ctx.transform = ctx.__originalTransform;
    ctx.setTransform = ctx.__originalSetTransform;
    ctx.resetTransform = ctx.__originalResetTransform;
    ctx.clip = ctx.__originalClip;
    ctx.moveTo = ctx.__originalMoveTo;
    ctx.lineTo = ctx.__originalLineTo;
    ctx.bezierCurveTo = ctx.__originalBezierCurveTo;
    ctx.rect = ctx.__originalRect;
    ctx.closePath = ctx.__originalClosePath;
    ctx.beginPath = ctx.__originalBeginPath;
    delete ctx._removeMirroring;
  };
  ctx.save = function ctxSave() {
    destCtx.save();
    this.__originalSave();
  };
  ctx.restore = function ctxRestore() {
    destCtx.restore();
    this.__originalRestore();
  };
  ctx.translate = function ctxTranslate(x, y) {
    destCtx.translate(x, y);
    this.__originalTranslate(x, y);
  };
  ctx.scale = function ctxScale(x, y) {
    destCtx.scale(x, y);
    this.__originalScale(x, y);
  };
  ctx.transform = function ctxTransform(a, b, c, d, e, f) {
    destCtx.transform(a, b, c, d, e, f);
    this.__originalTransform(a, b, c, d, e, f);
  };
  ctx.setTransform = function ctxSetTransform(a, b, c, d, e, f) {
    destCtx.setTransform(a, b, c, d, e, f);
    this.__originalSetTransform(a, b, c, d, e, f);
  };
  ctx.resetTransform = function ctxResetTransform() {
    destCtx.resetTransform();
    this.__originalResetTransform();
  };
  ctx.rotate = function ctxRotate(angle) {
    destCtx.rotate(angle);
    this.__originalRotate(angle);
  };
  ctx.clip = function ctxRotate(rule) {
    destCtx.clip(rule);
    this.__originalClip(rule);
  };
  ctx.moveTo = function(x, y) {
    destCtx.moveTo(x, y);
    this.__originalMoveTo(x, y);
  };
  ctx.lineTo = function(x, y) {
    destCtx.lineTo(x, y);
    this.__originalLineTo(x, y);
  };
  ctx.bezierCurveTo = function(cp1x, cp1y, cp2x, cp2y, x, y) {
    destCtx.bezierCurveTo(cp1x, cp1y, cp2x, cp2y, x, y);
    this.__originalBezierCurveTo(cp1x, cp1y, cp2x, cp2y, x, y);
  };
  ctx.rect = function(x, y, width, height) {
    destCtx.rect(x, y, width, height);
    this.__originalRect(x, y, width, height);
  };
  ctx.closePath = function() {
    destCtx.closePath();
    this.__originalClosePath();
  };
  ctx.beginPath = function() {
    destCtx.beginPath();
    this.__originalBeginPath();
  };
}
var CachedCanvases = class {
  constructor(canvasFactory) {
    this.canvasFactory = canvasFactory;
    this.cache = /* @__PURE__ */ Object.create(null);
  }
  getCanvas(id, width, height) {
    let canvasEntry;
    if (this.cache[id] !== void 0) {
      canvasEntry = this.cache[id];
      this.canvasFactory.reset(canvasEntry, width, height);
    } else {
      canvasEntry = this.canvasFactory.create(width, height);
      this.cache[id] = canvasEntry;
    }
    return canvasEntry;
  }
  delete(id) {
    delete this.cache[id];
  }
  clear() {
    for (const id in this.cache) {
      const canvasEntry = this.cache[id];
      this.canvasFactory.destroy(canvasEntry);
      delete this.cache[id];
    }
  }
};
function drawImageAtIntegerCoords(ctx, srcImg, srcX, srcY, srcW, srcH, destX, destY, destW, destH) {
  const [a, b, c, d, tx, ty] = getCurrentTransform(ctx);
  if (b === 0 && c === 0) {
    const tlX = destX * a + tx;
    const rTlX = Math.round(tlX);
    const tlY = destY * d + ty;
    const rTlY = Math.round(tlY);
    const brX = (destX + destW) * a + tx;
    const rWidth = Math.abs(Math.round(brX) - rTlX) || 1;
    const brY = (destY + destH) * d + ty;
    const rHeight = Math.abs(Math.round(brY) - rTlY) || 1;
    ctx.setTransform(Math.sign(a), 0, 0, Math.sign(d), rTlX, rTlY);
    ctx.drawImage(srcImg, srcX, srcY, srcW, srcH, 0, 0, rWidth, rHeight);
    ctx.setTransform(a, b, c, d, tx, ty);
    return [rWidth, rHeight];
  }
  if (a === 0 && d === 0) {
    const tlX = destY * c + tx;
    const rTlX = Math.round(tlX);
    const tlY = destX * b + ty;
    const rTlY = Math.round(tlY);
    const brX = (destY + destH) * c + tx;
    const rWidth = Math.abs(Math.round(brX) - rTlX) || 1;
    const brY = (destX + destW) * b + ty;
    const rHeight = Math.abs(Math.round(brY) - rTlY) || 1;
    ctx.setTransform(0, Math.sign(b), Math.sign(c), 0, rTlX, rTlY);
    ctx.drawImage(srcImg, srcX, srcY, srcW, srcH, 0, 0, rHeight, rWidth);
    ctx.setTransform(a, b, c, d, tx, ty);
    return [rHeight, rWidth];
  }
  ctx.drawImage(srcImg, srcX, srcY, srcW, srcH, destX, destY, destW, destH);
  const scaleX = Math.hypot(a, b);
  const scaleY = Math.hypot(c, d);
  return [scaleX * destW, scaleY * destH];
}
function compileType3Glyph(imgData) {
  const {
    width,
    height
  } = imgData;
  if (width > MAX_SIZE_TO_COMPILE || height > MAX_SIZE_TO_COMPILE) {
    return null;
  }
  const POINT_TO_PROCESS_LIMIT = 1e3;
  const POINT_TYPES = new Uint8Array([0, 2, 4, 0, 1, 0, 5, 4, 8, 10, 0, 8, 0, 2, 1, 0]);
  const width1 = width + 1;
  let points = new Uint8Array(width1 * (height + 1));
  let i, j, j0;
  const lineSize = width + 7 & ~7;
  let data = new Uint8Array(lineSize * height), pos = 0;
  for (const elem of imgData.data) {
    let mask = 128;
    while (mask > 0) {
      data[pos++] = elem & mask ? 0 : 255;
      mask >>= 1;
    }
  }
  let count = 0;
  pos = 0;
  if (data[pos] !== 0) {
    points[0] = 1;
    ++count;
  }
  for (j = 1; j < width; j++) {
    if (data[pos] !== data[pos + 1]) {
      points[j] = data[pos] ? 2 : 1;
      ++count;
    }
    pos++;
  }
  if (data[pos] !== 0) {
    points[j] = 2;
    ++count;
  }
  for (i = 1; i < height; i++) {
    pos = i * lineSize;
    j0 = i * width1;
    if (data[pos - lineSize] !== data[pos]) {
      points[j0] = data[pos] ? 1 : 8;
      ++count;
    }
    let sum = (data[pos] ? 4 : 0) + (data[pos - lineSize] ? 8 : 0);
    for (j = 1; j < width; j++) {
      sum = (sum >> 2) + (data[pos + 1] ? 4 : 0) + (data[pos - lineSize + 1] ? 8 : 0);
      if (POINT_TYPES[sum]) {
        points[j0 + j] = POINT_TYPES[sum];
        ++count;
      }
      pos++;
    }
    if (data[pos - lineSize] !== data[pos]) {
      points[j0 + j] = data[pos] ? 2 : 4;
      ++count;
    }
    if (count > POINT_TO_PROCESS_LIMIT) {
      return null;
    }
  }
  pos = lineSize * (height - 1);
  j0 = i * width1;
  if (data[pos] !== 0) {
    points[j0] = 8;
    ++count;
  }
  for (j = 1; j < width; j++) {
    if (data[pos] !== data[pos + 1]) {
      points[j0 + j] = data[pos] ? 4 : 8;
      ++count;
    }
    pos++;
  }
  if (data[pos] !== 0) {
    points[j0 + j] = 4;
    ++count;
  }
  if (count > POINT_TO_PROCESS_LIMIT) {
    return null;
  }
  const steps = new Int32Array([0, width1, -1, 0, -width1, 0, 0, 0, 1]);
  const path = new Path2D();
  for (i = 0; count && i <= height; i++) {
    let p = i * width1;
    const end = p + width;
    while (p < end && !points[p]) {
      p++;
    }
    if (p === end) {
      continue;
    }
    path.moveTo(p % width1, i);
    const p0 = p;
    let type = points[p];
    do {
      const step = steps[type];
      do {
        p += step;
      } while (!points[p]);
      const pp = points[p];
      if (pp !== 5 && pp !== 10) {
        type = pp;
        points[p] = 0;
      } else {
        type = pp & 51 * type >> 4;
        points[p] &= type >> 2 | type << 2;
      }
      path.lineTo(p % width1, p / width1 | 0);
      if (!points[p]) {
        --count;
      }
    } while (p0 !== p);
    --i;
  }
  data = null;
  points = null;
  const drawOutline = function(c) {
    c.save();
    c.scale(1 / width, -1 / height);
    c.translate(0, -height);
    c.fill(path);
    c.beginPath();
    c.restore();
  };
  return drawOutline;
}
var CanvasExtraState = class {
  constructor(width, height) {
    this.alphaIsShape = false;
    this.fontSize = 0;
    this.fontSizeScale = 1;
    this.textMatrix = IDENTITY_MATRIX;
    this.textMatrixScale = 1;
    this.fontMatrix = FONT_IDENTITY_MATRIX;
    this.leading = 0;
    this.x = 0;
    this.y = 0;
    this.lineX = 0;
    this.lineY = 0;
    this.charSpacing = 0;
    this.wordSpacing = 0;
    this.textHScale = 1;
    this.textRenderingMode = TextRenderingMode.FILL;
    this.textRise = 0;
    this.fillColor = "#000000";
    this.strokeColor = "#000000";
    this.patternFill = false;
    this.fillAlpha = 1;
    this.strokeAlpha = 1;
    this.lineWidth = 1;
    this.activeSMask = null;
    this.transferMaps = "none";
    this.startNewPathAndClipBox([0, 0, width, height]);
  }
  clone() {
    const clone = Object.create(this);
    clone.clipBox = this.clipBox.slice();
    return clone;
  }
  setCurrentPoint(x, y) {
    this.x = x;
    this.y = y;
  }
  updatePathMinMax(transform, x, y) {
    [x, y] = Util.applyTransform([x, y], transform);
    this.minX = Math.min(this.minX, x);
    this.minY = Math.min(this.minY, y);
    this.maxX = Math.max(this.maxX, x);
    this.maxY = Math.max(this.maxY, y);
  }
  updateRectMinMax(transform, rect) {
    const p1 = Util.applyTransform(rect, transform);
    const p2 = Util.applyTransform(rect.slice(2), transform);
    const p3 = Util.applyTransform([rect[0], rect[3]], transform);
    const p4 = Util.applyTransform([rect[2], rect[1]], transform);
    this.minX = Math.min(this.minX, p1[0], p2[0], p3[0], p4[0]);
    this.minY = Math.min(this.minY, p1[1], p2[1], p3[1], p4[1]);
    this.maxX = Math.max(this.maxX, p1[0], p2[0], p3[0], p4[0]);
    this.maxY = Math.max(this.maxY, p1[1], p2[1], p3[1], p4[1]);
  }
  updateScalingPathMinMax(transform, minMax) {
    Util.scaleMinMax(transform, minMax);
    this.minX = Math.min(this.minX, minMax[0]);
    this.minY = Math.min(this.minY, minMax[1]);
    this.maxX = Math.max(this.maxX, minMax[2]);
    this.maxY = Math.max(this.maxY, minMax[3]);
  }
  updateCurvePathMinMax(transform, x0, y0, x1, y1, x2, y2, x3, y3, minMax) {
    const box = Util.bezierBoundingBox(x0, y0, x1, y1, x2, y2, x3, y3, minMax);
    if (minMax) {
      return;
    }
    this.updateRectMinMax(transform, box);
  }
  getPathBoundingBox(pathType = PathType.FILL, transform = null) {
    const box = [this.minX, this.minY, this.maxX, this.maxY];
    if (pathType === PathType.STROKE) {
      if (!transform) {
        unreachable("Stroke bounding box must include transform.");
      }
      const scale = Util.singularValueDecompose2dScale(transform);
      const xStrokePad = scale[0] * this.lineWidth / 2;
      const yStrokePad = scale[1] * this.lineWidth / 2;
      box[0] -= xStrokePad;
      box[1] -= yStrokePad;
      box[2] += xStrokePad;
      box[3] += yStrokePad;
    }
    return box;
  }
  updateClipFromPath() {
    const intersect = Util.intersect(this.clipBox, this.getPathBoundingBox());
    this.startNewPathAndClipBox(intersect || [0, 0, 0, 0]);
  }
  isEmptyClip() {
    return this.minX === Infinity;
  }
  startNewPathAndClipBox(box) {
    this.clipBox = box;
    this.minX = Infinity;
    this.minY = Infinity;
    this.maxX = 0;
    this.maxY = 0;
  }
  getClippedPathBoundingBox(pathType = PathType.FILL, transform = null) {
    return Util.intersect(this.clipBox, this.getPathBoundingBox(pathType, transform));
  }
};
function putBinaryImageData(ctx, imgData) {
  if (typeof ImageData !== "undefined" && imgData instanceof ImageData) {
    ctx.putImageData(imgData, 0, 0);
    return;
  }
  const height = imgData.height, width = imgData.width;
  const partialChunkHeight = height % FULL_CHUNK_HEIGHT;
  const fullChunks = (height - partialChunkHeight) / FULL_CHUNK_HEIGHT;
  const totalChunks = partialChunkHeight === 0 ? fullChunks : fullChunks + 1;
  const chunkImgData = ctx.createImageData(width, FULL_CHUNK_HEIGHT);
  let srcPos = 0, destPos;
  const src = imgData.data;
  const dest = chunkImgData.data;
  let i, j, thisChunkHeight, elemsInThisChunk;
  if (imgData.kind === util_ImageKind.GRAYSCALE_1BPP) {
    const srcLength = src.byteLength;
    const dest32 = new Uint32Array(dest.buffer, 0, dest.byteLength >> 2);
    const dest32DataLength = dest32.length;
    const fullSrcDiff = width + 7 >> 3;
    const white = 4294967295;
    const black = util_FeatureTest.isLittleEndian ? 4278190080 : 255;
    for (i = 0; i < totalChunks; i++) {
      thisChunkHeight = i < fullChunks ? FULL_CHUNK_HEIGHT : partialChunkHeight;
      destPos = 0;
      for (j = 0; j < thisChunkHeight; j++) {
        const srcDiff = srcLength - srcPos;
        let k = 0;
        const kEnd = srcDiff > fullSrcDiff ? width : srcDiff * 8 - 7;
        const kEndUnrolled = kEnd & ~7;
        let mask = 0;
        let srcByte = 0;
        for (; k < kEndUnrolled; k += 8) {
          srcByte = src[srcPos++];
          dest32[destPos++] = srcByte & 128 ? white : black;
          dest32[destPos++] = srcByte & 64 ? white : black;
          dest32[destPos++] = srcByte & 32 ? white : black;
          dest32[destPos++] = srcByte & 16 ? white : black;
          dest32[destPos++] = srcByte & 8 ? white : black;
          dest32[destPos++] = srcByte & 4 ? white : black;
          dest32[destPos++] = srcByte & 2 ? white : black;
          dest32[destPos++] = srcByte & 1 ? white : black;
        }
        for (; k < kEnd; k++) {
          if (mask === 0) {
            srcByte = src[srcPos++];
            mask = 128;
          }
          dest32[destPos++] = srcByte & mask ? white : black;
          mask >>= 1;
        }
      }
      while (destPos < dest32DataLength) {
        dest32[destPos++] = 0;
      }
      ctx.putImageData(chunkImgData, 0, i * FULL_CHUNK_HEIGHT);
    }
  } else if (imgData.kind === util_ImageKind.RGBA_32BPP) {
    j = 0;
    elemsInThisChunk = width * FULL_CHUNK_HEIGHT * 4;
    for (i = 0; i < fullChunks; i++) {
      dest.set(src.subarray(srcPos, srcPos + elemsInThisChunk));
      srcPos += elemsInThisChunk;
      ctx.putImageData(chunkImgData, 0, j);
      j += FULL_CHUNK_HEIGHT;
    }
    if (i < totalChunks) {
      elemsInThisChunk = width * partialChunkHeight * 4;
      dest.set(src.subarray(srcPos, srcPos + elemsInThisChunk));
      ctx.putImageData(chunkImgData, 0, j);
    }
  } else if (imgData.kind === util_ImageKind.RGB_24BPP) {
    thisChunkHeight = FULL_CHUNK_HEIGHT;
    elemsInThisChunk = width * thisChunkHeight;
    for (i = 0; i < totalChunks; i++) {
      if (i >= fullChunks) {
        thisChunkHeight = partialChunkHeight;
        elemsInThisChunk = width * thisChunkHeight;
      }
      destPos = 0;
      for (j = elemsInThisChunk; j--; ) {
        dest[destPos++] = src[srcPos++];
        dest[destPos++] = src[srcPos++];
        dest[destPos++] = src[srcPos++];
        dest[destPos++] = 255;
      }
      ctx.putImageData(chunkImgData, 0, i * FULL_CHUNK_HEIGHT);
    }
  } else {
    throw new Error(`bad image kind: ${imgData.kind}`);
  }
}
function putBinaryImageMask(ctx, imgData) {
  if (imgData.bitmap) {
    ctx.drawImage(imgData.bitmap, 0, 0);
    return;
  }
  const height = imgData.height, width = imgData.width;
  const partialChunkHeight = height % FULL_CHUNK_HEIGHT;
  const fullChunks = (height - partialChunkHeight) / FULL_CHUNK_HEIGHT;
  const totalChunks = partialChunkHeight === 0 ? fullChunks : fullChunks + 1;
  const chunkImgData = ctx.createImageData(width, FULL_CHUNK_HEIGHT);
  let srcPos = 0;
  const src = imgData.data;
  const dest = chunkImgData.data;
  for (let i = 0; i < totalChunks; i++) {
    const thisChunkHeight = i < fullChunks ? FULL_CHUNK_HEIGHT : partialChunkHeight;
    ({
      srcPos
    } = convertBlackAndWhiteToRGBA({
      src,
      srcPos,
      dest,
      width,
      height: thisChunkHeight,
      nonBlackColor: 0
    }));
    ctx.putImageData(chunkImgData, 0, i * FULL_CHUNK_HEIGHT);
  }
}
function copyCtxState(sourceCtx, destCtx) {
  const properties = ["strokeStyle", "fillStyle", "fillRule", "globalAlpha", "lineWidth", "lineCap", "lineJoin", "miterLimit", "globalCompositeOperation", "font", "filter"];
  for (const property of properties) {
    if (sourceCtx[property] !== void 0) {
      destCtx[property] = sourceCtx[property];
    }
  }
  if (sourceCtx.setLineDash !== void 0) {
    destCtx.setLineDash(sourceCtx.getLineDash());
    destCtx.lineDashOffset = sourceCtx.lineDashOffset;
  }
}
function resetCtxToDefault(ctx) {
  ctx.strokeStyle = ctx.fillStyle = "#000000";
  ctx.fillRule = "nonzero";
  ctx.globalAlpha = 1;
  ctx.lineWidth = 1;
  ctx.lineCap = "butt";
  ctx.lineJoin = "miter";
  ctx.miterLimit = 10;
  ctx.globalCompositeOperation = "source-over";
  ctx.font = "10px sans-serif";
  if (ctx.setLineDash !== void 0) {
    ctx.setLineDash([]);
    ctx.lineDashOffset = 0;
  }
  if (!isNodeJS) {
    const {
      filter
    } = ctx;
    if (filter !== "none" && filter !== "") {
      ctx.filter = "none";
    }
  }
}
function getImageSmoothingEnabled(transform, interpolate) {
  if (interpolate) {
    return true;
  }
  const scale = Util.singularValueDecompose2dScale(transform);
  scale[0] = Math.fround(scale[0]);
  scale[1] = Math.fround(scale[1]);
  const actualScale = Math.fround((globalThis.devicePixelRatio || 1) * PixelsPerInch.PDF_TO_CSS_UNITS);
  return scale[0] <= actualScale && scale[1] <= actualScale;
}
var LINE_CAP_STYLES = ["butt", "round", "square"];
var LINE_JOIN_STYLES = ["miter", "round", "bevel"];
var NORMAL_CLIP = {};
var EO_CLIP = {};
var CanvasGraphics = class _CanvasGraphics {
  constructor(canvasCtx, commonObjs, objs, canvasFactory, filterFactory, {
    optionalContentConfig,
    markedContentStack = null
  }, annotationCanvasMap, pageColors) {
    this.ctx = canvasCtx;
    this.current = new CanvasExtraState(this.ctx.canvas.width, this.ctx.canvas.height);
    this.stateStack = [];
    this.pendingClip = null;
    this.pendingEOFill = false;
    this.res = null;
    this.xobjs = null;
    this.commonObjs = commonObjs;
    this.objs = objs;
    this.canvasFactory = canvasFactory;
    this.filterFactory = filterFactory;
    this.groupStack = [];
    this.processingType3 = null;
    this.baseTransform = null;
    this.baseTransformStack = [];
    this.groupLevel = 0;
    this.smaskStack = [];
    this.smaskCounter = 0;
    this.tempSMask = null;
    this.suspendedCtx = null;
    this.contentVisible = true;
    this.markedContentStack = markedContentStack || [];
    this.optionalContentConfig = optionalContentConfig;
    this.cachedCanvases = new CachedCanvases(this.canvasFactory);
    this.cachedPatterns = /* @__PURE__ */ new Map();
    this.annotationCanvasMap = annotationCanvasMap;
    this.viewportScale = 1;
    this.outputScaleX = 1;
    this.outputScaleY = 1;
    this.pageColors = pageColors;
    this._cachedScaleForStroking = [-1, 0];
    this._cachedGetSinglePixelWidth = null;
    this._cachedBitmapsMap = /* @__PURE__ */ new Map();
  }
  getObject(data, fallback = null) {
    if (typeof data === "string") {
      return data.startsWith("g_") ? this.commonObjs.get(data) : this.objs.get(data);
    }
    return fallback;
  }
  beginDrawing({
    transform,
    viewport,
    transparency = false,
    background = null
  }) {
    const width = this.ctx.canvas.width;
    const height = this.ctx.canvas.height;
    const savedFillStyle = this.ctx.fillStyle;
    this.ctx.fillStyle = background || "#ffffff";
    this.ctx.fillRect(0, 0, width, height);
    this.ctx.fillStyle = savedFillStyle;
    if (transparency) {
      const transparentCanvas = this.cachedCanvases.getCanvas("transparent", width, height);
      this.compositeCtx = this.ctx;
      this.transparentCanvas = transparentCanvas.canvas;
      this.ctx = transparentCanvas.context;
      this.ctx.save();
      this.ctx.transform(...getCurrentTransform(this.compositeCtx));
    }
    this.ctx.save();
    resetCtxToDefault(this.ctx);
    if (transform) {
      this.ctx.transform(...transform);
      this.outputScaleX = transform[0];
      this.outputScaleY = transform[0];
    }
    this.ctx.transform(...viewport.transform);
    this.viewportScale = viewport.scale;
    this.baseTransform = getCurrentTransform(this.ctx);
  }
  executeOperatorList(operatorList, executionStartIdx, continueCallback, stepper) {
    const argsArray = operatorList.argsArray;
    const fnArray = operatorList.fnArray;
    let i = executionStartIdx || 0;
    const argsArrayLen = argsArray.length;
    if (argsArrayLen === i) {
      return i;
    }
    const chunkOperations = argsArrayLen - i > EXECUTION_STEPS && typeof continueCallback === "function";
    const endTime = chunkOperations ? Date.now() + EXECUTION_TIME : 0;
    let steps = 0;
    const commonObjs = this.commonObjs;
    const objs = this.objs;
    let fnId;
    while (true) {
      if (stepper !== void 0 && i === stepper.nextBreakPoint) {
        stepper.breakIt(i, continueCallback);
        return i;
      }
      fnId = fnArray[i];
      if (fnId !== OPS.dependency) {
        this[fnId].apply(this, argsArray[i]);
      } else {
        for (const depObjId of argsArray[i]) {
          const objsPool = depObjId.startsWith("g_") ? commonObjs : objs;
          if (!objsPool.has(depObjId)) {
            objsPool.get(depObjId, continueCallback);
            return i;
          }
        }
      }
      i++;
      if (i === argsArrayLen) {
        return i;
      }
      if (chunkOperations && ++steps > EXECUTION_STEPS) {
        if (Date.now() > endTime) {
          continueCallback();
          return i;
        }
        steps = 0;
      }
    }
  }
  #restoreInitialState() {
    while (this.stateStack.length || this.inSMaskMode) {
      this.restore();
    }
    this.current.activeSMask = null;
    this.ctx.restore();
    if (this.transparentCanvas) {
      this.ctx = this.compositeCtx;
      this.ctx.save();
      this.ctx.setTransform(1, 0, 0, 1, 0, 0);
      this.ctx.drawImage(this.transparentCanvas, 0, 0);
      this.ctx.restore();
      this.transparentCanvas = null;
    }
  }
  endDrawing() {
    this.#restoreInitialState();
    this.cachedCanvases.clear();
    this.cachedPatterns.clear();
    for (const cache2 of this._cachedBitmapsMap.values()) {
      for (const canvas of cache2.values()) {
        if (typeof HTMLCanvasElement !== "undefined" && canvas instanceof HTMLCanvasElement) {
          canvas.width = canvas.height = 0;
        }
      }
      cache2.clear();
    }
    this._cachedBitmapsMap.clear();
    this.#drawFilter();
  }
  #drawFilter() {
    if (this.pageColors) {
      const hcmFilterId = this.filterFactory.addHCMFilter(this.pageColors.foreground, this.pageColors.background);
      if (hcmFilterId !== "none") {
        const savedFilter = this.ctx.filter;
        this.ctx.filter = hcmFilterId;
        this.ctx.drawImage(this.ctx.canvas, 0, 0);
        this.ctx.filter = savedFilter;
      }
    }
  }
  _scaleImage(img, inverseTransform) {
    const width = img.width;
    const height = img.height;
    let widthScale = Math.max(Math.hypot(inverseTransform[0], inverseTransform[1]), 1);
    let heightScale = Math.max(Math.hypot(inverseTransform[2], inverseTransform[3]), 1);
    let paintWidth = width, paintHeight = height;
    let tmpCanvasId = "prescale1";
    let tmpCanvas, tmpCtx;
    while (widthScale > 2 && paintWidth > 1 || heightScale > 2 && paintHeight > 1) {
      let newWidth = paintWidth, newHeight = paintHeight;
      if (widthScale > 2 && paintWidth > 1) {
        newWidth = paintWidth >= 16384 ? Math.floor(paintWidth / 2) - 1 || 1 : Math.ceil(paintWidth / 2);
        widthScale /= paintWidth / newWidth;
      }
      if (heightScale > 2 && paintHeight > 1) {
        newHeight = paintHeight >= 16384 ? Math.floor(paintHeight / 2) - 1 || 1 : Math.ceil(paintHeight) / 2;
        heightScale /= paintHeight / newHeight;
      }
      tmpCanvas = this.cachedCanvases.getCanvas(tmpCanvasId, newWidth, newHeight);
      tmpCtx = tmpCanvas.context;
      tmpCtx.clearRect(0, 0, newWidth, newHeight);
      tmpCtx.drawImage(img, 0, 0, paintWidth, paintHeight, 0, 0, newWidth, newHeight);
      img = tmpCanvas.canvas;
      paintWidth = newWidth;
      paintHeight = newHeight;
      tmpCanvasId = tmpCanvasId === "prescale1" ? "prescale2" : "prescale1";
    }
    return {
      img,
      paintWidth,
      paintHeight
    };
  }
  _createMaskCanvas(img) {
    const ctx = this.ctx;
    const {
      width,
      height
    } = img;
    const fillColor = this.current.fillColor;
    const isPatternFill = this.current.patternFill;
    const currentTransform = getCurrentTransform(ctx);
    let cache2, cacheKey, scaled, maskCanvas;
    if ((img.bitmap || img.data) && img.count > 1) {
      const mainKey = img.bitmap || img.data.buffer;
      cacheKey = JSON.stringify(isPatternFill ? currentTransform : [currentTransform.slice(0, 4), fillColor]);
      cache2 = this._cachedBitmapsMap.get(mainKey);
      if (!cache2) {
        cache2 = /* @__PURE__ */ new Map();
        this._cachedBitmapsMap.set(mainKey, cache2);
      }
      const cachedImage = cache2.get(cacheKey);
      if (cachedImage && !isPatternFill) {
        const offsetX2 = Math.round(Math.min(currentTransform[0], currentTransform[2]) + currentTransform[4]);
        const offsetY2 = Math.round(Math.min(currentTransform[1], currentTransform[3]) + currentTransform[5]);
        return {
          canvas: cachedImage,
          offsetX: offsetX2,
          offsetY: offsetY2
        };
      }
      scaled = cachedImage;
    }
    if (!scaled) {
      maskCanvas = this.cachedCanvases.getCanvas("maskCanvas", width, height);
      putBinaryImageMask(maskCanvas.context, img);
    }
    let maskToCanvas = Util.transform(currentTransform, [1 / width, 0, 0, -1 / height, 0, 0]);
    maskToCanvas = Util.transform(maskToCanvas, [1, 0, 0, 1, 0, -height]);
    const [minX, minY, maxX, maxY] = Util.getAxialAlignedBoundingBox([0, 0, width, height], maskToCanvas);
    const drawnWidth = Math.round(maxX - minX) || 1;
    const drawnHeight = Math.round(maxY - minY) || 1;
    const fillCanvas = this.cachedCanvases.getCanvas("fillCanvas", drawnWidth, drawnHeight);
    const fillCtx = fillCanvas.context;
    const offsetX = minX;
    const offsetY = minY;
    fillCtx.translate(-offsetX, -offsetY);
    fillCtx.transform(...maskToCanvas);
    if (!scaled) {
      scaled = this._scaleImage(maskCanvas.canvas, getCurrentTransformInverse(fillCtx));
      scaled = scaled.img;
      if (cache2 && isPatternFill) {
        cache2.set(cacheKey, scaled);
      }
    }
    fillCtx.imageSmoothingEnabled = getImageSmoothingEnabled(getCurrentTransform(fillCtx), img.interpolate);
    drawImageAtIntegerCoords(fillCtx, scaled, 0, 0, scaled.width, scaled.height, 0, 0, width, height);
    fillCtx.globalCompositeOperation = "source-in";
    const inverse = Util.transform(getCurrentTransformInverse(fillCtx), [1, 0, 0, 1, -offsetX, -offsetY]);
    fillCtx.fillStyle = isPatternFill ? fillColor.getPattern(ctx, this, inverse, PathType.FILL) : fillColor;
    fillCtx.fillRect(0, 0, width, height);
    if (cache2 && !isPatternFill) {
      this.cachedCanvases.delete("fillCanvas");
      cache2.set(cacheKey, fillCanvas.canvas);
    }
    return {
      canvas: fillCanvas.canvas,
      offsetX: Math.round(offsetX),
      offsetY: Math.round(offsetY)
    };
  }
  setLineWidth(width) {
    if (width !== this.current.lineWidth) {
      this._cachedScaleForStroking[0] = -1;
    }
    this.current.lineWidth = width;
    this.ctx.lineWidth = width;
  }
  setLineCap(style) {
    this.ctx.lineCap = LINE_CAP_STYLES[style];
  }
  setLineJoin(style) {
    this.ctx.lineJoin = LINE_JOIN_STYLES[style];
  }
  setMiterLimit(limit) {
    this.ctx.miterLimit = limit;
  }
  setDash(dashArray, dashPhase) {
    const ctx = this.ctx;
    if (ctx.setLineDash !== void 0) {
      ctx.setLineDash(dashArray);
      ctx.lineDashOffset = dashPhase;
    }
  }
  setRenderingIntent(intent) {
  }
  setFlatness(flatness) {
  }
  setGState(states) {
    for (const [key, value] of states) {
      switch (key) {
        case "LW":
          this.setLineWidth(value);
          break;
        case "LC":
          this.setLineCap(value);
          break;
        case "LJ":
          this.setLineJoin(value);
          break;
        case "ML":
          this.setMiterLimit(value);
          break;
        case "D":
          this.setDash(value[0], value[1]);
          break;
        case "RI":
          this.setRenderingIntent(value);
          break;
        case "FL":
          this.setFlatness(value);
          break;
        case "Font":
          this.setFont(value[0], value[1]);
          break;
        case "CA":
          this.current.strokeAlpha = value;
          break;
        case "ca":
          this.current.fillAlpha = value;
          this.ctx.globalAlpha = value;
          break;
        case "BM":
          this.ctx.globalCompositeOperation = value;
          break;
        case "SMask":
          this.current.activeSMask = value ? this.tempSMask : null;
          this.tempSMask = null;
          this.checkSMaskState();
          break;
        case "TR":
          this.ctx.filter = this.current.transferMaps = this.filterFactory.addFilter(value);
          break;
      }
    }
  }
  get inSMaskMode() {
    return !!this.suspendedCtx;
  }
  checkSMaskState() {
    const inSMaskMode = this.inSMaskMode;
    if (this.current.activeSMask && !inSMaskMode) {
      this.beginSMaskMode();
    } else if (!this.current.activeSMask && inSMaskMode) {
      this.endSMaskMode();
    }
  }
  beginSMaskMode() {
    if (this.inSMaskMode) {
      throw new Error("beginSMaskMode called while already in smask mode");
    }
    const drawnWidth = this.ctx.canvas.width;
    const drawnHeight = this.ctx.canvas.height;
    const cacheId = "smaskGroupAt" + this.groupLevel;
    const scratchCanvas = this.cachedCanvases.getCanvas(cacheId, drawnWidth, drawnHeight);
    this.suspendedCtx = this.ctx;
    this.ctx = scratchCanvas.context;
    const ctx = this.ctx;
    ctx.setTransform(...getCurrentTransform(this.suspendedCtx));
    copyCtxState(this.suspendedCtx, ctx);
    mirrorContextOperations(ctx, this.suspendedCtx);
    this.setGState([["BM", "source-over"], ["ca", 1], ["CA", 1]]);
  }
  endSMaskMode() {
    if (!this.inSMaskMode) {
      throw new Error("endSMaskMode called while not in smask mode");
    }
    this.ctx._removeMirroring();
    copyCtxState(this.ctx, this.suspendedCtx);
    this.ctx = this.suspendedCtx;
    this.suspendedCtx = null;
  }
  compose(dirtyBox) {
    if (!this.current.activeSMask) {
      return;
    }
    if (!dirtyBox) {
      dirtyBox = [0, 0, this.ctx.canvas.width, this.ctx.canvas.height];
    } else {
      dirtyBox[0] = Math.floor(dirtyBox[0]);
      dirtyBox[1] = Math.floor(dirtyBox[1]);
      dirtyBox[2] = Math.ceil(dirtyBox[2]);
      dirtyBox[3] = Math.ceil(dirtyBox[3]);
    }
    const smask = this.current.activeSMask;
    const suspendedCtx = this.suspendedCtx;
    this.composeSMask(suspendedCtx, smask, this.ctx, dirtyBox);
    this.ctx.save();
    this.ctx.setTransform(1, 0, 0, 1, 0, 0);
    this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);
    this.ctx.restore();
  }
  composeSMask(ctx, smask, layerCtx, layerBox) {
    const layerOffsetX = layerBox[0];
    const layerOffsetY = layerBox[1];
    const layerWidth = layerBox[2] - layerOffsetX;
    const layerHeight = layerBox[3] - layerOffsetY;
    if (layerWidth === 0 || layerHeight === 0) {
      return;
    }
    this.genericComposeSMask(smask.context, layerCtx, layerWidth, layerHeight, smask.subtype, smask.backdrop, smask.transferMap, layerOffsetX, layerOffsetY, smask.offsetX, smask.offsetY);
    ctx.save();
    ctx.globalAlpha = 1;
    ctx.globalCompositeOperation = "source-over";
    ctx.setTransform(1, 0, 0, 1, 0, 0);
    ctx.drawImage(layerCtx.canvas, 0, 0);
    ctx.restore();
  }
  genericComposeSMask(maskCtx, layerCtx, width, height, subtype, backdrop, transferMap, layerOffsetX, layerOffsetY, maskOffsetX, maskOffsetY) {
    let maskCanvas = maskCtx.canvas;
    let maskX = layerOffsetX - maskOffsetX;
    let maskY = layerOffsetY - maskOffsetY;
    if (backdrop) {
      if (maskX < 0 || maskY < 0 || maskX + width > maskCanvas.width || maskY + height > maskCanvas.height) {
        const canvas = this.cachedCanvases.getCanvas("maskExtension", width, height);
        const ctx = canvas.context;
        ctx.drawImage(maskCanvas, -maskX, -maskY);
        if (backdrop.some((c) => c !== 0)) {
          ctx.globalCompositeOperation = "destination-atop";
          ctx.fillStyle = Util.makeHexColor(...backdrop);
          ctx.fillRect(0, 0, width, height);
          ctx.globalCompositeOperation = "source-over";
        }
        maskCanvas = canvas.canvas;
        maskX = maskY = 0;
      } else if (backdrop.some((c) => c !== 0)) {
        maskCtx.save();
        maskCtx.globalAlpha = 1;
        maskCtx.setTransform(1, 0, 0, 1, 0, 0);
        const clip2 = new Path2D();
        clip2.rect(maskX, maskY, width, height);
        maskCtx.clip(clip2);
        maskCtx.globalCompositeOperation = "destination-atop";
        maskCtx.fillStyle = Util.makeHexColor(...backdrop);
        maskCtx.fillRect(maskX, maskY, width, height);
        maskCtx.restore();
      }
    }
    layerCtx.save();
    layerCtx.globalAlpha = 1;
    layerCtx.setTransform(1, 0, 0, 1, 0, 0);
    if (subtype === "Alpha" && transferMap) {
      layerCtx.filter = this.filterFactory.addAlphaFilter(transferMap);
    } else if (subtype === "Luminosity") {
      layerCtx.filter = this.filterFactory.addLuminosityFilter(transferMap);
    }
    const clip = new Path2D();
    clip.rect(layerOffsetX, layerOffsetY, width, height);
    layerCtx.clip(clip);
    layerCtx.globalCompositeOperation = "destination-in";
    layerCtx.drawImage(maskCanvas, maskX, maskY, width, height, layerOffsetX, layerOffsetY, width, height);
    layerCtx.restore();
  }
  save() {
    if (this.inSMaskMode) {
      copyCtxState(this.ctx, this.suspendedCtx);
      this.suspendedCtx.save();
    } else {
      this.ctx.save();
    }
    const old = this.current;
    this.stateStack.push(old);
    this.current = old.clone();
  }
  restore() {
    if (this.stateStack.length === 0 && this.inSMaskMode) {
      this.endSMaskMode();
    }
    if (this.stateStack.length !== 0) {
      this.current = this.stateStack.pop();
      if (this.inSMaskMode) {
        this.suspendedCtx.restore();
        copyCtxState(this.suspendedCtx, this.ctx);
      } else {
        this.ctx.restore();
      }
      this.checkSMaskState();
      this.pendingClip = null;
      this._cachedScaleForStroking[0] = -1;
      this._cachedGetSinglePixelWidth = null;
    }
  }
  transform(a, b, c, d, e, f) {
    this.ctx.transform(a, b, c, d, e, f);
    this._cachedScaleForStroking[0] = -1;
    this._cachedGetSinglePixelWidth = null;
  }
  constructPath(ops, args, minMax) {
    const ctx = this.ctx;
    const current = this.current;
    let x = current.x, y = current.y;
    let startX, startY;
    const currentTransform = getCurrentTransform(ctx);
    const isScalingMatrix = currentTransform[0] === 0 && currentTransform[3] === 0 || currentTransform[1] === 0 && currentTransform[2] === 0;
    const minMaxForBezier = isScalingMatrix ? minMax.slice(0) : null;
    for (let i = 0, j = 0, ii = ops.length; i < ii; i++) {
      switch (ops[i] | 0) {
        case OPS.rectangle:
          x = args[j++];
          y = args[j++];
          const width = args[j++];
          const height = args[j++];
          const xw = x + width;
          const yh = y + height;
          ctx.moveTo(x, y);
          if (width === 0 || height === 0) {
            ctx.lineTo(xw, yh);
          } else {
            ctx.lineTo(xw, y);
            ctx.lineTo(xw, yh);
            ctx.lineTo(x, yh);
          }
          if (!isScalingMatrix) {
            current.updateRectMinMax(currentTransform, [x, y, xw, yh]);
          }
          ctx.closePath();
          break;
        case OPS.moveTo:
          x = args[j++];
          y = args[j++];
          ctx.moveTo(x, y);
          if (!isScalingMatrix) {
            current.updatePathMinMax(currentTransform, x, y);
          }
          break;
        case OPS.lineTo:
          x = args[j++];
          y = args[j++];
          ctx.lineTo(x, y);
          if (!isScalingMatrix) {
            current.updatePathMinMax(currentTransform, x, y);
          }
          break;
        case OPS.curveTo:
          startX = x;
          startY = y;
          x = args[j + 4];
          y = args[j + 5];
          ctx.bezierCurveTo(args[j], args[j + 1], args[j + 2], args[j + 3], x, y);
          current.updateCurvePathMinMax(currentTransform, startX, startY, args[j], args[j + 1], args[j + 2], args[j + 3], x, y, minMaxForBezier);
          j += 6;
          break;
        case OPS.curveTo2:
          startX = x;
          startY = y;
          ctx.bezierCurveTo(x, y, args[j], args[j + 1], args[j + 2], args[j + 3]);
          current.updateCurvePathMinMax(currentTransform, startX, startY, x, y, args[j], args[j + 1], args[j + 2], args[j + 3], minMaxForBezier);
          x = args[j + 2];
          y = args[j + 3];
          j += 4;
          break;
        case OPS.curveTo3:
          startX = x;
          startY = y;
          x = args[j + 2];
          y = args[j + 3];
          ctx.bezierCurveTo(args[j], args[j + 1], x, y, x, y);
          current.updateCurvePathMinMax(currentTransform, startX, startY, args[j], args[j + 1], x, y, x, y, minMaxForBezier);
          j += 4;
          break;
        case OPS.closePath:
          ctx.closePath();
          break;
      }
    }
    if (isScalingMatrix) {
      current.updateScalingPathMinMax(currentTransform, minMaxForBezier);
    }
    current.setCurrentPoint(x, y);
  }
  closePath() {
    this.ctx.closePath();
  }
  stroke(consumePath = true) {
    const ctx = this.ctx;
    const strokeColor = this.current.strokeColor;
    ctx.globalAlpha = this.current.strokeAlpha;
    if (this.contentVisible) {
      if (typeof strokeColor === "object" && strokeColor?.getPattern) {
        ctx.save();
        ctx.strokeStyle = strokeColor.getPattern(ctx, this, getCurrentTransformInverse(ctx), PathType.STROKE);
        this.rescaleAndStroke(false);
        ctx.restore();
      } else {
        this.rescaleAndStroke(true);
      }
    }
    if (consumePath) {
      this.consumePath(this.current.getClippedPathBoundingBox());
    }
    ctx.globalAlpha = this.current.fillAlpha;
  }
  closeStroke() {
    this.closePath();
    this.stroke();
  }
  fill(consumePath = true) {
    const ctx = this.ctx;
    const fillColor = this.current.fillColor;
    const isPatternFill = this.current.patternFill;
    let needRestore = false;
    if (isPatternFill) {
      ctx.save();
      ctx.fillStyle = fillColor.getPattern(ctx, this, getCurrentTransformInverse(ctx), PathType.FILL);
      needRestore = true;
    }
    const intersect = this.current.getClippedPathBoundingBox();
    if (this.contentVisible && intersect !== null) {
      if (this.pendingEOFill) {
        ctx.fill("evenodd");
        this.pendingEOFill = false;
      } else {
        ctx.fill();
      }
    }
    if (needRestore) {
      ctx.restore();
    }
    if (consumePath) {
      this.consumePath(intersect);
    }
  }
  eoFill() {
    this.pendingEOFill = true;
    this.fill();
  }
  fillStroke() {
    this.fill(false);
    this.stroke(false);
    this.consumePath();
  }
  eoFillStroke() {
    this.pendingEOFill = true;
    this.fillStroke();
  }
  closeFillStroke() {
    this.closePath();
    this.fillStroke();
  }
  closeEOFillStroke() {
    this.pendingEOFill = true;
    this.closePath();
    this.fillStroke();
  }
  endPath() {
    this.consumePath();
  }
  clip() {
    this.pendingClip = NORMAL_CLIP;
  }
  eoClip() {
    this.pendingClip = EO_CLIP;
  }
  beginText() {
    this.current.textMatrix = IDENTITY_MATRIX;
    this.current.textMatrixScale = 1;
    this.current.x = this.current.lineX = 0;
    this.current.y = this.current.lineY = 0;
  }
  endText() {
    const paths = this.pendingTextPaths;
    const ctx = this.ctx;
    if (paths === void 0) {
      ctx.beginPath();
      return;
    }
    ctx.save();
    ctx.beginPath();
    for (const path of paths) {
      ctx.setTransform(...path.transform);
      ctx.translate(path.x, path.y);
      path.addToPath(ctx, path.fontSize);
    }
    ctx.restore();
    ctx.clip();
    ctx.beginPath();
    delete this.pendingTextPaths;
  }
  setCharSpacing(spacing) {
    this.current.charSpacing = spacing;
  }
  setWordSpacing(spacing) {
    this.current.wordSpacing = spacing;
  }
  setHScale(scale) {
    this.current.textHScale = scale / 100;
  }
  setLeading(leading) {
    this.current.leading = -leading;
  }
  setFont(fontRefName, size) {
    const fontObj = this.commonObjs.get(fontRefName);
    const current = this.current;
    if (!fontObj) {
      throw new Error(`Can't find font for ${fontRefName}`);
    }
    current.fontMatrix = fontObj.fontMatrix || FONT_IDENTITY_MATRIX;
    if (current.fontMatrix[0] === 0 || current.fontMatrix[3] === 0) {
      warn("Invalid font matrix for font " + fontRefName);
    }
    if (size < 0) {
      size = -size;
      current.fontDirection = -1;
    } else {
      current.fontDirection = 1;
    }
    this.current.font = fontObj;
    this.current.fontSize = size;
    if (fontObj.isType3Font) {
      return;
    }
    const name = fontObj.loadedName || "sans-serif";
    const typeface = fontObj.systemFontInfo?.css || `"${name}", ${fontObj.fallbackName}`;
    let bold = "normal";
    if (fontObj.black) {
      bold = "900";
    } else if (fontObj.bold) {
      bold = "bold";
    }
    const italic = fontObj.italic ? "italic" : "normal";
    let browserFontSize = size;
    if (size < MIN_FONT_SIZE) {
      browserFontSize = MIN_FONT_SIZE;
    } else if (size > MAX_FONT_SIZE) {
      browserFontSize = MAX_FONT_SIZE;
    }
    this.current.fontSizeScale = size / browserFontSize;
    this.ctx.font = `${italic} ${bold} ${browserFontSize}px ${typeface}`;
  }
  setTextRenderingMode(mode) {
    this.current.textRenderingMode = mode;
  }
  setTextRise(rise) {
    this.current.textRise = rise;
  }
  moveText(x, y) {
    this.current.x = this.current.lineX += x;
    this.current.y = this.current.lineY += y;
  }
  setLeadingMoveText(x, y) {
    this.setLeading(-y);
    this.moveText(x, y);
  }
  setTextMatrix(a, b, c, d, e, f) {
    this.current.textMatrix = [a, b, c, d, e, f];
    this.current.textMatrixScale = Math.hypot(a, b);
    this.current.x = this.current.lineX = 0;
    this.current.y = this.current.lineY = 0;
  }
  nextLine() {
    this.moveText(0, this.current.leading);
  }
  paintChar(character, x, y, patternTransform) {
    const ctx = this.ctx;
    const current = this.current;
    const font = current.font;
    const textRenderingMode = current.textRenderingMode;
    const fontSize = current.fontSize / current.fontSizeScale;
    const fillStrokeMode = textRenderingMode & TextRenderingMode.FILL_STROKE_MASK;
    const isAddToPathSet = !!(textRenderingMode & TextRenderingMode.ADD_TO_PATH_FLAG);
    const patternFill = current.patternFill && !font.missingFile;
    let addToPath;
    if (font.disableFontFace || isAddToPathSet || patternFill) {
      addToPath = font.getPathGenerator(this.commonObjs, character);
    }
    if (font.disableFontFace || patternFill) {
      ctx.save();
      ctx.translate(x, y);
      ctx.beginPath();
      addToPath(ctx, fontSize);
      if (patternTransform) {
        ctx.setTransform(...patternTransform);
      }
      if (fillStrokeMode === TextRenderingMode.FILL || fillStrokeMode === TextRenderingMode.FILL_STROKE) {
        ctx.fill();
      }
      if (fillStrokeMode === TextRenderingMode.STROKE || fillStrokeMode === TextRenderingMode.FILL_STROKE) {
        ctx.stroke();
      }
      ctx.restore();
    } else {
      if (fillStrokeMode === TextRenderingMode.FILL || fillStrokeMode === TextRenderingMode.FILL_STROKE) {
        ctx.fillText(character, x, y);
      }
      if (fillStrokeMode === TextRenderingMode.STROKE || fillStrokeMode === TextRenderingMode.FILL_STROKE) {
        ctx.strokeText(character, x, y);
      }
    }
    if (isAddToPathSet) {
      const paths = this.pendingTextPaths ||= [];
      paths.push({
        transform: getCurrentTransform(ctx),
        x,
        y,
        fontSize,
        addToPath
      });
    }
  }
  get isFontSubpixelAAEnabled() {
    const {
      context: ctx
    } = this.cachedCanvases.getCanvas("isFontSubpixelAAEnabled", 10, 10);
    ctx.scale(1.5, 1);
    ctx.fillText("I", 0, 10);
    const data = ctx.getImageData(0, 0, 10, 10).data;
    let enabled = false;
    for (let i = 3; i < data.length; i += 4) {
      if (data[i] > 0 && data[i] < 255) {
        enabled = true;
        break;
      }
    }
    return shadow(this, "isFontSubpixelAAEnabled", enabled);
  }
  showText(glyphs) {
    const current = this.current;
    const font = current.font;
    if (font.isType3Font) {
      return this.showType3Text(glyphs);
    }
    const fontSize = current.fontSize;
    if (fontSize === 0) {
      return void 0;
    }
    const ctx = this.ctx;
    const fontSizeScale = current.fontSizeScale;
    const charSpacing = current.charSpacing;
    const wordSpacing = current.wordSpacing;
    const fontDirection = current.fontDirection;
    const textHScale = current.textHScale * fontDirection;
    const glyphsLength = glyphs.length;
    const vertical = font.vertical;
    const spacingDir = vertical ? 1 : -1;
    const defaultVMetrics = font.defaultVMetrics;
    const widthAdvanceScale = fontSize * current.fontMatrix[0];
    const simpleFillText = current.textRenderingMode === TextRenderingMode.FILL && !font.disableFontFace && !current.patternFill;
    ctx.save();
    ctx.transform(...current.textMatrix);
    ctx.translate(current.x, current.y + current.textRise);
    if (fontDirection > 0) {
      ctx.scale(textHScale, -1);
    } else {
      ctx.scale(textHScale, 1);
    }
    let patternTransform;
    if (current.patternFill) {
      ctx.save();
      const pattern = current.fillColor.getPattern(ctx, this, getCurrentTransformInverse(ctx), PathType.FILL);
      patternTransform = getCurrentTransform(ctx);
      ctx.restore();
      ctx.fillStyle = pattern;
    }
    let lineWidth = current.lineWidth;
    const scale = current.textMatrixScale;
    if (scale === 0 || lineWidth === 0) {
      const fillStrokeMode = current.textRenderingMode & TextRenderingMode.FILL_STROKE_MASK;
      if (fillStrokeMode === TextRenderingMode.STROKE || fillStrokeMode === TextRenderingMode.FILL_STROKE) {
        lineWidth = this.getSinglePixelWidth();
      }
    } else {
      lineWidth /= scale;
    }
    if (fontSizeScale !== 1) {
      ctx.scale(fontSizeScale, fontSizeScale);
      lineWidth /= fontSizeScale;
    }
    ctx.lineWidth = lineWidth;
    if (font.isInvalidPDFjsFont) {
      const chars = [];
      let width = 0;
      for (const glyph of glyphs) {
        chars.push(glyph.unicode);
        width += glyph.width;
      }
      ctx.fillText(chars.join(""), 0, 0);
      current.x += width * widthAdvanceScale * textHScale;
      ctx.restore();
      this.compose();
      return void 0;
    }
    let x = 0, i;
    for (i = 0; i < glyphsLength; ++i) {
      const glyph = glyphs[i];
      if (typeof glyph === "number") {
        x += spacingDir * glyph * fontSize / 1e3;
        continue;
      }
      let restoreNeeded = false;
      const spacing = (glyph.isSpace ? wordSpacing : 0) + charSpacing;
      const character = glyph.fontChar;
      const accent = glyph.accent;
      let scaledX, scaledY;
      let width = glyph.width;
      if (vertical) {
        const vmetric = glyph.vmetric || defaultVMetrics;
        const vx = -(glyph.vmetric ? vmetric[1] : width * 0.5) * widthAdvanceScale;
        const vy = vmetric[2] * widthAdvanceScale;
        width = vmetric ? -vmetric[0] : width;
        scaledX = vx / fontSizeScale;
        scaledY = (x + vy) / fontSizeScale;
      } else {
        scaledX = x / fontSizeScale;
        scaledY = 0;
      }
      if (font.remeasure && width > 0) {
        const measuredWidth = ctx.measureText(character).width * 1e3 / fontSize * fontSizeScale;
        if (width < measuredWidth && this.isFontSubpixelAAEnabled) {
          const characterScaleX = width / measuredWidth;
          restoreNeeded = true;
          ctx.save();
          ctx.scale(characterScaleX, 1);
          scaledX /= characterScaleX;
        } else if (width !== measuredWidth) {
          scaledX += (width - measuredWidth) / 2e3 * fontSize / fontSizeScale;
        }
      }
      if (this.contentVisible && (glyph.isInFont || font.missingFile)) {
        if (simpleFillText && !accent) {
          ctx.fillText(character, scaledX, scaledY);
        } else {
          this.paintChar(character, scaledX, scaledY, patternTransform);
          if (accent) {
            const scaledAccentX = scaledX + fontSize * accent.offset.x / fontSizeScale;
            const scaledAccentY = scaledY - fontSize * accent.offset.y / fontSizeScale;
            this.paintChar(accent.fontChar, scaledAccentX, scaledAccentY, patternTransform);
          }
        }
      }
      const charWidth = vertical ? width * widthAdvanceScale - spacing * fontDirection : width * widthAdvanceScale + spacing * fontDirection;
      x += charWidth;
      if (restoreNeeded) {
        ctx.restore();
      }
    }
    if (vertical) {
      current.y -= x;
    } else {
      current.x += x * textHScale;
    }
    ctx.restore();
    this.compose();
    return void 0;
  }
  showType3Text(glyphs) {
    const ctx = this.ctx;
    const current = this.current;
    const font = current.font;
    const fontSize = current.fontSize;
    const fontDirection = current.fontDirection;
    const spacingDir = font.vertical ? 1 : -1;
    const charSpacing = current.charSpacing;
    const wordSpacing = current.wordSpacing;
    const textHScale = current.textHScale * fontDirection;
    const fontMatrix = current.fontMatrix || FONT_IDENTITY_MATRIX;
    const glyphsLength = glyphs.length;
    const isTextInvisible = current.textRenderingMode === TextRenderingMode.INVISIBLE;
    let i, glyph, width, spacingLength;
    if (isTextInvisible || fontSize === 0) {
      return;
    }
    this._cachedScaleForStroking[0] = -1;
    this._cachedGetSinglePixelWidth = null;
    ctx.save();
    ctx.transform(...current.textMatrix);
    ctx.translate(current.x, current.y);
    ctx.scale(textHScale, fontDirection);
    for (i = 0; i < glyphsLength; ++i) {
      glyph = glyphs[i];
      if (typeof glyph === "number") {
        spacingLength = spacingDir * glyph * fontSize / 1e3;
        this.ctx.translate(spacingLength, 0);
        current.x += spacingLength * textHScale;
        continue;
      }
      const spacing = (glyph.isSpace ? wordSpacing : 0) + charSpacing;
      const operatorList = font.charProcOperatorList[glyph.operatorListId];
      if (!operatorList) {
        warn(`Type3 character "${glyph.operatorListId}" is not available.`);
        continue;
      }
      if (this.contentVisible) {
        this.processingType3 = glyph;
        this.save();
        ctx.scale(fontSize, fontSize);
        ctx.transform(...fontMatrix);
        this.executeOperatorList(operatorList);
        this.restore();
      }
      const transformed = Util.applyTransform([glyph.width, 0], fontMatrix);
      width = transformed[0] * fontSize + spacing;
      ctx.translate(width, 0);
      current.x += width * textHScale;
    }
    ctx.restore();
    this.processingType3 = null;
  }
  setCharWidth(xWidth, yWidth) {
  }
  setCharWidthAndBounds(xWidth, yWidth, llx, lly, urx, ury) {
    this.ctx.rect(llx, lly, urx - llx, ury - lly);
    this.ctx.clip();
    this.endPath();
  }
  getColorN_Pattern(IR) {
    let pattern;
    if (IR[0] === "TilingPattern") {
      const color = IR[1];
      const baseTransform = this.baseTransform || getCurrentTransform(this.ctx);
      const canvasGraphicsFactory = {
        createCanvasGraphics: (ctx) => new _CanvasGraphics(ctx, this.commonObjs, this.objs, this.canvasFactory, this.filterFactory, {
          optionalContentConfig: this.optionalContentConfig,
          markedContentStack: this.markedContentStack
        })
      };
      pattern = new TilingPattern(IR, color, this.ctx, canvasGraphicsFactory, baseTransform);
    } else {
      pattern = this._getPattern(IR[1], IR[2]);
    }
    return pattern;
  }
  setStrokeColorN() {
    this.current.strokeColor = this.getColorN_Pattern(arguments);
  }
  setFillColorN() {
    this.current.fillColor = this.getColorN_Pattern(arguments);
    this.current.patternFill = true;
  }
  setStrokeRGBColor(r, g, b) {
    this.ctx.strokeStyle = this.current.strokeColor = Util.makeHexColor(r, g, b);
  }
  setStrokeTransparent() {
    this.ctx.strokeStyle = this.current.strokeColor = "transparent";
  }
  setFillRGBColor(r, g, b) {
    this.ctx.fillStyle = this.current.fillColor = Util.makeHexColor(r, g, b);
    this.current.patternFill = false;
  }
  setFillTransparent() {
    this.ctx.fillStyle = this.current.fillColor = "transparent";
    this.current.patternFill = false;
  }
  _getPattern(objId, matrix = null) {
    let pattern;
    if (this.cachedPatterns.has(objId)) {
      pattern = this.cachedPatterns.get(objId);
    } else {
      pattern = getShadingPattern(this.getObject(objId));
      this.cachedPatterns.set(objId, pattern);
    }
    if (matrix) {
      pattern.matrix = matrix;
    }
    return pattern;
  }
  shadingFill(objId) {
    if (!this.contentVisible) {
      return;
    }
    const ctx = this.ctx;
    this.save();
    const pattern = this._getPattern(objId);
    ctx.fillStyle = pattern.getPattern(ctx, this, getCurrentTransformInverse(ctx), PathType.SHADING);
    const inv = getCurrentTransformInverse(ctx);
    if (inv) {
      const {
        width,
        height
      } = ctx.canvas;
      const [x0, y0, x1, y1] = Util.getAxialAlignedBoundingBox([0, 0, width, height], inv);
      this.ctx.fillRect(x0, y0, x1 - x0, y1 - y0);
    } else {
      this.ctx.fillRect(-1e10, -1e10, 2e10, 2e10);
    }
    this.compose(this.current.getClippedPathBoundingBox());
    this.restore();
  }
  beginInlineImage() {
    unreachable("Should not call beginInlineImage");
  }
  beginImageData() {
    unreachable("Should not call beginImageData");
  }
  paintFormXObjectBegin(matrix, bbox) {
    if (!this.contentVisible) {
      return;
    }
    this.save();
    this.baseTransformStack.push(this.baseTransform);
    if (matrix) {
      this.transform(...matrix);
    }
    this.baseTransform = getCurrentTransform(this.ctx);
    if (bbox) {
      const width = bbox[2] - bbox[0];
      const height = bbox[3] - bbox[1];
      this.ctx.rect(bbox[0], bbox[1], width, height);
      this.current.updateRectMinMax(getCurrentTransform(this.ctx), bbox);
      this.clip();
      this.endPath();
    }
  }
  paintFormXObjectEnd() {
    if (!this.contentVisible) {
      return;
    }
    this.restore();
    this.baseTransform = this.baseTransformStack.pop();
  }
  beginGroup(group) {
    if (!this.contentVisible) {
      return;
    }
    this.save();
    if (this.inSMaskMode) {
      this.endSMaskMode();
      this.current.activeSMask = null;
    }
    const currentCtx = this.ctx;
    if (!group.isolated) {
      info("TODO: Support non-isolated groups.");
    }
    if (group.knockout) {
      warn("Knockout groups not supported.");
    }
    const currentTransform = getCurrentTransform(currentCtx);
    if (group.matrix) {
      currentCtx.transform(...group.matrix);
    }
    if (!group.bbox) {
      throw new Error("Bounding box is required.");
    }
    let bounds = Util.getAxialAlignedBoundingBox(group.bbox, getCurrentTransform(currentCtx));
    const canvasBounds = [0, 0, currentCtx.canvas.width, currentCtx.canvas.height];
    bounds = Util.intersect(bounds, canvasBounds) || [0, 0, 0, 0];
    const offsetX = Math.floor(bounds[0]);
    const offsetY = Math.floor(bounds[1]);
    const drawnWidth = Math.max(Math.ceil(bounds[2]) - offsetX, 1);
    const drawnHeight = Math.max(Math.ceil(bounds[3]) - offsetY, 1);
    this.current.startNewPathAndClipBox([0, 0, drawnWidth, drawnHeight]);
    let cacheId = "groupAt" + this.groupLevel;
    if (group.smask) {
      cacheId += "_smask_" + this.smaskCounter++ % 2;
    }
    const scratchCanvas = this.cachedCanvases.getCanvas(cacheId, drawnWidth, drawnHeight);
    const groupCtx = scratchCanvas.context;
    groupCtx.translate(-offsetX, -offsetY);
    groupCtx.transform(...currentTransform);
    if (group.smask) {
      this.smaskStack.push({
        canvas: scratchCanvas.canvas,
        context: groupCtx,
        offsetX,
        offsetY,
        subtype: group.smask.subtype,
        backdrop: group.smask.backdrop,
        transferMap: group.smask.transferMap || null,
        startTransformInverse: null
      });
    } else {
      currentCtx.setTransform(1, 0, 0, 1, 0, 0);
      currentCtx.translate(offsetX, offsetY);
      currentCtx.save();
    }
    copyCtxState(currentCtx, groupCtx);
    this.ctx = groupCtx;
    this.setGState([["BM", "source-over"], ["ca", 1], ["CA", 1]]);
    this.groupStack.push(currentCtx);
    this.groupLevel++;
  }
  endGroup(group) {
    if (!this.contentVisible) {
      return;
    }
    this.groupLevel--;
    const groupCtx = this.ctx;
    const ctx = this.groupStack.pop();
    this.ctx = ctx;
    this.ctx.imageSmoothingEnabled = false;
    if (group.smask) {
      this.tempSMask = this.smaskStack.pop();
      this.restore();
    } else {
      this.ctx.restore();
      const currentMtx = getCurrentTransform(this.ctx);
      this.restore();
      this.ctx.save();
      this.ctx.setTransform(...currentMtx);
      const dirtyBox = Util.getAxialAlignedBoundingBox([0, 0, groupCtx.canvas.width, groupCtx.canvas.height], currentMtx);
      this.ctx.drawImage(groupCtx.canvas, 0, 0);
      this.ctx.restore();
      this.compose(dirtyBox);
    }
  }
  beginAnnotation(id, rect, transform, matrix, hasOwnCanvas) {
    this.#restoreInitialState();
    resetCtxToDefault(this.ctx);
    this.ctx.save();
    this.save();
    if (this.baseTransform) {
      this.ctx.setTransform(...this.baseTransform);
    }
    if (rect) {
      const width = rect[2] - rect[0];
      const height = rect[3] - rect[1];
      if (hasOwnCanvas && this.annotationCanvasMap) {
        transform = transform.slice();
        transform[4] -= rect[0];
        transform[5] -= rect[1];
        rect = rect.slice();
        rect[0] = rect[1] = 0;
        rect[2] = width;
        rect[3] = height;
        const [scaleX, scaleY] = Util.singularValueDecompose2dScale(getCurrentTransform(this.ctx));
        const {
          viewportScale
        } = this;
        const canvasWidth = Math.ceil(width * this.outputScaleX * viewportScale);
        const canvasHeight = Math.ceil(height * this.outputScaleY * viewportScale);
        this.annotationCanvas = this.canvasFactory.create(canvasWidth, canvasHeight);
        const {
          canvas,
          context
        } = this.annotationCanvas;
        this.annotationCanvasMap.set(id, canvas);
        this.annotationCanvas.savedCtx = this.ctx;
        this.ctx = context;
        this.ctx.save();
        this.ctx.setTransform(scaleX, 0, 0, -scaleY, 0, height * scaleY);
        resetCtxToDefault(this.ctx);
      } else {
        resetCtxToDefault(this.ctx);
        this.ctx.rect(rect[0], rect[1], width, height);
        this.ctx.clip();
        this.endPath();
      }
    }
    this.current = new CanvasExtraState(this.ctx.canvas.width, this.ctx.canvas.height);
    this.transform(...transform);
    this.transform(...matrix);
  }
  endAnnotation() {
    if (this.annotationCanvas) {
      this.ctx.restore();
      this.#drawFilter();
      this.ctx = this.annotationCanvas.savedCtx;
      delete this.annotationCanvas.savedCtx;
      delete this.annotationCanvas;
    }
  }
  paintImageMaskXObject(img) {
    if (!this.contentVisible) {
      return;
    }
    const count = img.count;
    img = this.getObject(img.data, img);
    img.count = count;
    const ctx = this.ctx;
    const glyph = this.processingType3;
    if (glyph) {
      if (glyph.compiled === void 0) {
        glyph.compiled = compileType3Glyph(img);
      }
      if (glyph.compiled) {
        glyph.compiled(ctx);
        return;
      }
    }
    const mask = this._createMaskCanvas(img);
    const maskCanvas = mask.canvas;
    ctx.save();
    ctx.setTransform(1, 0, 0, 1, 0, 0);
    ctx.drawImage(maskCanvas, mask.offsetX, mask.offsetY);
    ctx.restore();
    this.compose();
  }
  paintImageMaskXObjectRepeat(img, scaleX, skewX = 0, skewY = 0, scaleY, positions) {
    if (!this.contentVisible) {
      return;
    }
    img = this.getObject(img.data, img);
    const ctx = this.ctx;
    ctx.save();
    const currentTransform = getCurrentTransform(ctx);
    ctx.transform(scaleX, skewX, skewY, scaleY, 0, 0);
    const mask = this._createMaskCanvas(img);
    ctx.setTransform(1, 0, 0, 1, mask.offsetX - currentTransform[4], mask.offsetY - currentTransform[5]);
    for (let i = 0, ii = positions.length; i < ii; i += 2) {
      const trans = Util.transform(currentTransform, [scaleX, skewX, skewY, scaleY, positions[i], positions[i + 1]]);
      const [x, y] = Util.applyTransform([0, 0], trans);
      ctx.drawImage(mask.canvas, x, y);
    }
    ctx.restore();
    this.compose();
  }
  paintImageMaskXObjectGroup(images) {
    if (!this.contentVisible) {
      return;
    }
    const ctx = this.ctx;
    const fillColor = this.current.fillColor;
    const isPatternFill = this.current.patternFill;
    for (const image of images) {
      const {
        data,
        width,
        height,
        transform
      } = image;
      const maskCanvas = this.cachedCanvases.getCanvas("maskCanvas", width, height);
      const maskCtx = maskCanvas.context;
      maskCtx.save();
      const img = this.getObject(data, image);
      putBinaryImageMask(maskCtx, img);
      maskCtx.globalCompositeOperation = "source-in";
      maskCtx.fillStyle = isPatternFill ? fillColor.getPattern(maskCtx, this, getCurrentTransformInverse(ctx), PathType.FILL) : fillColor;
      maskCtx.fillRect(0, 0, width, height);
      maskCtx.restore();
      ctx.save();
      ctx.transform(...transform);
      ctx.scale(1, -1);
      drawImageAtIntegerCoords(ctx, maskCanvas.canvas, 0, 0, width, height, 0, -1, 1, 1);
      ctx.restore();
    }
    this.compose();
  }
  paintImageXObject(objId) {
    if (!this.contentVisible) {
      return;
    }
    const imgData = this.getObject(objId);
    if (!imgData) {
      warn("Dependent image isn't ready yet");
      return;
    }
    this.paintInlineImageXObject(imgData);
  }
  paintImageXObjectRepeat(objId, scaleX, scaleY, positions) {
    if (!this.contentVisible) {
      return;
    }
    const imgData = this.getObject(objId);
    if (!imgData) {
      warn("Dependent image isn't ready yet");
      return;
    }
    const width = imgData.width;
    const height = imgData.height;
    const map = [];
    for (let i = 0, ii = positions.length; i < ii; i += 2) {
      map.push({
        transform: [scaleX, 0, 0, scaleY, positions[i], positions[i + 1]],
        x: 0,
        y: 0,
        w: width,
        h: height
      });
    }
    this.paintInlineImageXObjectGroup(imgData, map);
  }
  applyTransferMapsToCanvas(ctx) {
    if (this.current.transferMaps !== "none") {
      ctx.filter = this.current.transferMaps;
      ctx.drawImage(ctx.canvas, 0, 0);
      ctx.filter = "none";
    }
    return ctx.canvas;
  }
  applyTransferMapsToBitmap(imgData) {
    if (this.current.transferMaps === "none") {
      return imgData.bitmap;
    }
    const {
      bitmap,
      width,
      height
    } = imgData;
    const tmpCanvas = this.cachedCanvases.getCanvas("inlineImage", width, height);
    const tmpCtx = tmpCanvas.context;
    tmpCtx.filter = this.current.transferMaps;
    tmpCtx.drawImage(bitmap, 0, 0);
    tmpCtx.filter = "none";
    return tmpCanvas.canvas;
  }
  paintInlineImageXObject(imgData) {
    if (!this.contentVisible) {
      return;
    }
    const width = imgData.width;
    const height = imgData.height;
    const ctx = this.ctx;
    this.save();
    if (!isNodeJS) {
      const {
        filter
      } = ctx;
      if (filter !== "none" && filter !== "") {
        ctx.filter = "none";
      }
    }
    ctx.scale(1 / width, -1 / height);
    let imgToPaint;
    if (imgData.bitmap) {
      imgToPaint = this.applyTransferMapsToBitmap(imgData);
    } else if (typeof HTMLElement === "function" && imgData instanceof HTMLElement || !imgData.data) {
      imgToPaint = imgData;
    } else {
      const tmpCanvas = this.cachedCanvases.getCanvas("inlineImage", width, height);
      const tmpCtx = tmpCanvas.context;
      putBinaryImageData(tmpCtx, imgData);
      imgToPaint = this.applyTransferMapsToCanvas(tmpCtx);
    }
    const scaled = this._scaleImage(imgToPaint, getCurrentTransformInverse(ctx));
    ctx.imageSmoothingEnabled = getImageSmoothingEnabled(getCurrentTransform(ctx), imgData.interpolate);
    drawImageAtIntegerCoords(ctx, scaled.img, 0, 0, scaled.paintWidth, scaled.paintHeight, 0, -height, width, height);
    this.compose();
    this.restore();
  }
  paintInlineImageXObjectGroup(imgData, map) {
    if (!this.contentVisible) {
      return;
    }
    const ctx = this.ctx;
    let imgToPaint;
    if (imgData.bitmap) {
      imgToPaint = imgData.bitmap;
    } else {
      const w = imgData.width;
      const h = imgData.height;
      const tmpCanvas = this.cachedCanvases.getCanvas("inlineImage", w, h);
      const tmpCtx = tmpCanvas.context;
      putBinaryImageData(tmpCtx, imgData);
      imgToPaint = this.applyTransferMapsToCanvas(tmpCtx);
    }
    for (const entry of map) {
      ctx.save();
      ctx.transform(...entry.transform);
      ctx.scale(1, -1);
      drawImageAtIntegerCoords(ctx, imgToPaint, entry.x, entry.y, entry.w, entry.h, 0, -1, 1, 1);
      ctx.restore();
    }
    this.compose();
  }
  paintSolidColorImageMask() {
    if (!this.contentVisible) {
      return;
    }
    this.ctx.fillRect(0, 0, 1, 1);
    this.compose();
  }
  markPoint(tag) {
  }
  markPointProps(tag, properties) {
  }
  beginMarkedContent(tag) {
    this.markedContentStack.push({
      visible: true
    });
  }
  beginMarkedContentProps(tag, properties) {
    if (tag === "OC") {
      this.markedContentStack.push({
        visible: this.optionalContentConfig.isVisible(properties)
      });
    } else {
      this.markedContentStack.push({
        visible: true
      });
    }
    this.contentVisible = this.isContentVisible();
  }
  endMarkedContent() {
    this.markedContentStack.pop();
    this.contentVisible = this.isContentVisible();
  }
  beginCompat() {
  }
  endCompat() {
  }
  consumePath(clipBox) {
    const isEmpty = this.current.isEmptyClip();
    if (this.pendingClip) {
      this.current.updateClipFromPath();
    }
    if (!this.pendingClip) {
      this.compose(clipBox);
    }
    const ctx = this.ctx;
    if (this.pendingClip) {
      if (!isEmpty) {
        if (this.pendingClip === EO_CLIP) {
          ctx.clip("evenodd");
        } else {
          ctx.clip();
        }
      }
      this.pendingClip = null;
    }
    this.current.startNewPathAndClipBox(this.current.clipBox);
    ctx.beginPath();
  }
  getSinglePixelWidth() {
    if (!this._cachedGetSinglePixelWidth) {
      const m = getCurrentTransform(this.ctx);
      if (m[1] === 0 && m[2] === 0) {
        this._cachedGetSinglePixelWidth = 1 / Math.min(Math.abs(m[0]), Math.abs(m[3]));
      } else {
        const absDet = Math.abs(m[0] * m[3] - m[2] * m[1]);
        const normX = Math.hypot(m[0], m[2]);
        const normY = Math.hypot(m[1], m[3]);
        this._cachedGetSinglePixelWidth = Math.max(normX, normY) / absDet;
      }
    }
    return this._cachedGetSinglePixelWidth;
  }
  getScaleForStroking() {
    if (this._cachedScaleForStroking[0] === -1) {
      const {
        lineWidth
      } = this.current;
      const {
        a,
        b,
        c,
        d
      } = this.ctx.getTransform();
      let scaleX, scaleY;
      if (b === 0 && c === 0) {
        const normX = Math.abs(a);
        const normY = Math.abs(d);
        if (normX === normY) {
          if (lineWidth === 0) {
            scaleX = scaleY = 1 / normX;
          } else {
            const scaledLineWidth = normX * lineWidth;
            scaleX = scaleY = scaledLineWidth < 1 ? 1 / scaledLineWidth : 1;
          }
        } else if (lineWidth === 0) {
          scaleX = 1 / normX;
          scaleY = 1 / normY;
        } else {
          const scaledXLineWidth = normX * lineWidth;
          const scaledYLineWidth = normY * lineWidth;
          scaleX = scaledXLineWidth < 1 ? 1 / scaledXLineWidth : 1;
          scaleY = scaledYLineWidth < 1 ? 1 / scaledYLineWidth : 1;
        }
      } else {
        const absDet = Math.abs(a * d - b * c);
        const normX = Math.hypot(a, b);
        const normY = Math.hypot(c, d);
        if (lineWidth === 0) {
          scaleX = normY / absDet;
          scaleY = normX / absDet;
        } else {
          const baseArea = lineWidth * absDet;
          scaleX = normY > baseArea ? normY / baseArea : 1;
          scaleY = normX > baseArea ? normX / baseArea : 1;
        }
      }
      this._cachedScaleForStroking[0] = scaleX;
      this._cachedScaleForStroking[1] = scaleY;
    }
    return this._cachedScaleForStroking;
  }
  rescaleAndStroke(saveRestore) {
    const {
      ctx
    } = this;
    const {
      lineWidth
    } = this.current;
    const [scaleX, scaleY] = this.getScaleForStroking();
    ctx.lineWidth = lineWidth || 1;
    if (scaleX === 1 && scaleY === 1) {
      ctx.stroke();
      return;
    }
    const dashes = ctx.getLineDash();
    if (saveRestore) {
      ctx.save();
    }
    ctx.scale(scaleX, scaleY);
    if (dashes.length > 0) {
      const scale = Math.max(scaleX, scaleY);
      ctx.setLineDash(dashes.map((x) => x / scale));
      ctx.lineDashOffset /= scale;
    }
    ctx.stroke();
    if (saveRestore) {
      ctx.restore();
    }
  }
  isContentVisible() {
    for (let i = this.markedContentStack.length - 1; i >= 0; i--) {
      if (!this.markedContentStack[i].visible) {
        return false;
      }
    }
    return true;
  }
};
for (const op in OPS) {
  if (CanvasGraphics.prototype[op] !== void 0) {
    CanvasGraphics.prototype[OPS[op]] = CanvasGraphics.prototype[op];
  }
}
var GlobalWorkerOptions = class {
  static #port = null;
  static #src = "";
  static get workerPort() {
    return this.#port;
  }
  static set workerPort(val) {
    if (!(typeof Worker !== "undefined" && val instanceof Worker) && val !== null) {
      throw new Error("Invalid `workerPort` type.");
    }
    this.#port = val;
  }
  static get workerSrc() {
    return this.#src;
  }
  static set workerSrc(val) {
    if (typeof val !== "string") {
      throw new Error("Invalid `workerSrc` type.");
    }
    this.#src = val;
  }
};
var CallbackKind = {
  UNKNOWN: 0,
  DATA: 1,
  ERROR: 2
};
var StreamKind = {
  UNKNOWN: 0,
  CANCEL: 1,
  CANCEL_COMPLETE: 2,
  CLOSE: 3,
  ENQUEUE: 4,
  ERROR: 5,
  PULL: 6,
  PULL_COMPLETE: 7,
  START_COMPLETE: 8
};
function wrapReason(reason) {
  if (!(reason instanceof Error || typeof reason === "object" && reason !== null)) {
    unreachable('wrapReason: Expected "reason" to be a (possibly cloned) Error.');
  }
  switch (reason.name) {
    case "AbortException":
      return new AbortException(reason.message);
    case "MissingPDFException":
      return new MissingPDFException(reason.message);
    case "PasswordException":
      return new PasswordException(reason.message, reason.code);
    case "UnexpectedResponseException":
      return new UnexpectedResponseException(reason.message, reason.status);
    case "UnknownErrorException":
      return new UnknownErrorException(reason.message, reason.details);
    default:
      return new UnknownErrorException(reason.message, reason.toString());
  }
}
var MessageHandler = class {
  constructor(sourceName, targetName, comObj) {
    this.sourceName = sourceName;
    this.targetName = targetName;
    this.comObj = comObj;
    this.callbackId = 1;
    this.streamId = 1;
    this.streamSinks = /* @__PURE__ */ Object.create(null);
    this.streamControllers = /* @__PURE__ */ Object.create(null);
    this.callbackCapabilities = /* @__PURE__ */ Object.create(null);
    this.actionHandler = /* @__PURE__ */ Object.create(null);
    this._onComObjOnMessage = (event) => {
      const data = event.data;
      if (data.targetName !== this.sourceName) {
        return;
      }
      if (data.stream) {
        this.#processStreamMessage(data);
        return;
      }
      if (data.callback) {
        const callbackId = data.callbackId;
        const capability = this.callbackCapabilities[callbackId];
        if (!capability) {
          throw new Error(`Cannot resolve callback ${callbackId}`);
        }
        delete this.callbackCapabilities[callbackId];
        if (data.callback === CallbackKind.DATA) {
          capability.resolve(data.data);
        } else if (data.callback === CallbackKind.ERROR) {
          capability.reject(wrapReason(data.reason));
        } else {
          throw new Error("Unexpected callback case");
        }
        return;
      }
      const action = this.actionHandler[data.action];
      if (!action) {
        throw new Error(`Unknown action from worker: ${data.action}`);
      }
      if (data.callbackId) {
        const cbSourceName = this.sourceName;
        const cbTargetName = data.sourceName;
        new Promise(function(resolve) {
          resolve(action(data.data));
        }).then(function(result) {
          comObj.postMessage({
            sourceName: cbSourceName,
            targetName: cbTargetName,
            callback: CallbackKind.DATA,
            callbackId: data.callbackId,
            data: result
          });
        }, function(reason) {
          comObj.postMessage({
            sourceName: cbSourceName,
            targetName: cbTargetName,
            callback: CallbackKind.ERROR,
            callbackId: data.callbackId,
            reason: wrapReason(reason)
          });
        });
        return;
      }
      if (data.streamId) {
        this.#createStreamSink(data);
        return;
      }
      action(data.data);
    };
    comObj.addEventListener("message", this._onComObjOnMessage);
  }
  on(actionName, handler) {
    const ah = this.actionHandler;
    if (ah[actionName]) {
      throw new Error(`There is already an actionName called "${actionName}"`);
    }
    ah[actionName] = handler;
  }
  send(actionName, data, transfers) {
    this.comObj.postMessage({
      sourceName: this.sourceName,
      targetName: this.targetName,
      action: actionName,
      data
    }, transfers);
  }
  sendWithPromise(actionName, data, transfers) {
    const callbackId = this.callbackId++;
    const capability = Promise.withResolvers();
    this.callbackCapabilities[callbackId] = capability;
    try {
      this.comObj.postMessage({
        sourceName: this.sourceName,
        targetName: this.targetName,
        action: actionName,
        callbackId,
        data
      }, transfers);
    } catch (ex) {
      capability.reject(ex);
    }
    return capability.promise;
  }
  sendWithStream(actionName, data, queueingStrategy, transfers) {
    const streamId = this.streamId++, sourceName = this.sourceName, targetName = this.targetName, comObj = this.comObj;
    return new ReadableStream({
      start: (controller) => {
        const startCapability = Promise.withResolvers();
        this.streamControllers[streamId] = {
          controller,
          startCall: startCapability,
          pullCall: null,
          cancelCall: null,
          isClosed: false
        };
        comObj.postMessage({
          sourceName,
          targetName,
          action: actionName,
          streamId,
          data,
          desiredSize: controller.desiredSize
        }, transfers);
        return startCapability.promise;
      },
      pull: (controller) => {
        const pullCapability = Promise.withResolvers();
        this.streamControllers[streamId].pullCall = pullCapability;
        comObj.postMessage({
          sourceName,
          targetName,
          stream: StreamKind.PULL,
          streamId,
          desiredSize: controller.desiredSize
        });
        return pullCapability.promise;
      },
      cancel: (reason) => {
        assert(reason instanceof Error, "cancel must have a valid reason");
        const cancelCapability = Promise.withResolvers();
        this.streamControllers[streamId].cancelCall = cancelCapability;
        this.streamControllers[streamId].isClosed = true;
        comObj.postMessage({
          sourceName,
          targetName,
          stream: StreamKind.CANCEL,
          streamId,
          reason: wrapReason(reason)
        });
        return cancelCapability.promise;
      }
    }, queueingStrategy);
  }
  #createStreamSink(data) {
    const streamId = data.streamId, sourceName = this.sourceName, targetName = data.sourceName, comObj = this.comObj;
    const self = this, action = this.actionHandler[data.action];
    const streamSink = {
      enqueue(chunk, size = 1, transfers) {
        if (this.isCancelled) {
          return;
        }
        const lastDesiredSize = this.desiredSize;
        this.desiredSize -= size;
        if (lastDesiredSize > 0 && this.desiredSize <= 0) {
          this.sinkCapability = Promise.withResolvers();
          this.ready = this.sinkCapability.promise;
        }
        comObj.postMessage({
          sourceName,
          targetName,
          stream: StreamKind.ENQUEUE,
          streamId,
          chunk
        }, transfers);
      },
      close() {
        if (this.isCancelled) {
          return;
        }
        this.isCancelled = true;
        comObj.postMessage({
          sourceName,
          targetName,
          stream: StreamKind.CLOSE,
          streamId
        });
        delete self.streamSinks[streamId];
      },
      error(reason) {
        assert(reason instanceof Error, "error must have a valid reason");
        if (this.isCancelled) {
          return;
        }
        this.isCancelled = true;
        comObj.postMessage({
          sourceName,
          targetName,
          stream: StreamKind.ERROR,
          streamId,
          reason: wrapReason(reason)
        });
      },
      sinkCapability: Promise.withResolvers(),
      onPull: null,
      onCancel: null,
      isCancelled: false,
      desiredSize: data.desiredSize,
      ready: null
    };
    streamSink.sinkCapability.resolve();
    streamSink.ready = streamSink.sinkCapability.promise;
    this.streamSinks[streamId] = streamSink;
    new Promise(function(resolve) {
      resolve(action(data.data, streamSink));
    }).then(function() {
      comObj.postMessage({
        sourceName,
        targetName,
        stream: StreamKind.START_COMPLETE,
        streamId,
        success: true
      });
    }, function(reason) {
      comObj.postMessage({
        sourceName,
        targetName,
        stream: StreamKind.START_COMPLETE,
        streamId,
        reason: wrapReason(reason)
      });
    });
  }
  #processStreamMessage(data) {
    const streamId = data.streamId, sourceName = this.sourceName, targetName = data.sourceName, comObj = this.comObj;
    const streamController = this.streamControllers[streamId], streamSink = this.streamSinks[streamId];
    switch (data.stream) {
      case StreamKind.START_COMPLETE:
        if (data.success) {
          streamController.startCall.resolve();
        } else {
          streamController.startCall.reject(wrapReason(data.reason));
        }
        break;
      case StreamKind.PULL_COMPLETE:
        if (data.success) {
          streamController.pullCall.resolve();
        } else {
          streamController.pullCall.reject(wrapReason(data.reason));
        }
        break;
      case StreamKind.PULL:
        if (!streamSink) {
          comObj.postMessage({
            sourceName,
            targetName,
            stream: StreamKind.PULL_COMPLETE,
            streamId,
            success: true
          });
          break;
        }
        if (streamSink.desiredSize <= 0 && data.desiredSize > 0) {
          streamSink.sinkCapability.resolve();
        }
        streamSink.desiredSize = data.desiredSize;
        new Promise(function(resolve) {
          resolve(streamSink.onPull?.());
        }).then(function() {
          comObj.postMessage({
            sourceName,
            targetName,
            stream: StreamKind.PULL_COMPLETE,
            streamId,
            success: true
          });
        }, function(reason) {
          comObj.postMessage({
            sourceName,
            targetName,
            stream: StreamKind.PULL_COMPLETE,
            streamId,
            reason: wrapReason(reason)
          });
        });
        break;
      case StreamKind.ENQUEUE:
        assert(streamController, "enqueue should have stream controller");
        if (streamController.isClosed) {
          break;
        }
        streamController.controller.enqueue(data.chunk);
        break;
      case StreamKind.CLOSE:
        assert(streamController, "close should have stream controller");
        if (streamController.isClosed) {
          break;
        }
        streamController.isClosed = true;
        streamController.controller.close();
        this.#deleteStreamController(streamController, streamId);
        break;
      case StreamKind.ERROR:
        assert(streamController, "error should have stream controller");
        streamController.controller.error(wrapReason(data.reason));
        this.#deleteStreamController(streamController, streamId);
        break;
      case StreamKind.CANCEL_COMPLETE:
        if (data.success) {
          streamController.cancelCall.resolve();
        } else {
          streamController.cancelCall.reject(wrapReason(data.reason));
        }
        this.#deleteStreamController(streamController, streamId);
        break;
      case StreamKind.CANCEL:
        if (!streamSink) {
          break;
        }
        new Promise(function(resolve) {
          resolve(streamSink.onCancel?.(wrapReason(data.reason)));
        }).then(function() {
          comObj.postMessage({
            sourceName,
            targetName,
            stream: StreamKind.CANCEL_COMPLETE,
            streamId,
            success: true
          });
        }, function(reason) {
          comObj.postMessage({
            sourceName,
            targetName,
            stream: StreamKind.CANCEL_COMPLETE,
            streamId,
            reason: wrapReason(reason)
          });
        });
        streamSink.sinkCapability.reject(wrapReason(data.reason));
        streamSink.isCancelled = true;
        delete this.streamSinks[streamId];
        break;
      default:
        throw new Error("Unexpected stream case");
    }
  }
  async #deleteStreamController(streamController, streamId) {
    await Promise.allSettled([streamController.startCall?.promise, streamController.pullCall?.promise, streamController.cancelCall?.promise]);
    delete this.streamControllers[streamId];
  }
  destroy() {
    this.comObj.removeEventListener("message", this._onComObjOnMessage);
  }
};
var Metadata = class {
  #metadataMap;
  #data;
  constructor({
    parsedData,
    rawData
  }) {
    this.#metadataMap = parsedData;
    this.#data = rawData;
  }
  getRaw() {
    return this.#data;
  }
  get(name) {
    return this.#metadataMap.get(name) ?? null;
  }
  getAll() {
    return objectFromMap(this.#metadataMap);
  }
  has(name) {
    return this.#metadataMap.has(name);
  }
};
var INTERNAL = Symbol("INTERNAL");
var OptionalContentGroup = class {
  #isDisplay = false;
  #isPrint = false;
  #userSet = false;
  #visible = true;
  constructor(renderingIntent, {
    name,
    intent,
    usage
  }) {
    this.#isDisplay = !!(renderingIntent & RenderingIntentFlag.DISPLAY);
    this.#isPrint = !!(renderingIntent & RenderingIntentFlag.PRINT);
    this.name = name;
    this.intent = intent;
    this.usage = usage;
  }
  get visible() {
    if (this.#userSet) {
      return this.#visible;
    }
    if (!this.#visible) {
      return false;
    }
    const {
      print,
      view
    } = this.usage;
    if (this.#isDisplay) {
      return view?.viewState !== "OFF";
    } else if (this.#isPrint) {
      return print?.printState !== "OFF";
    }
    return true;
  }
  _setVisible(internal, visible, userSet = false) {
    if (internal !== INTERNAL) {
      unreachable("Internal method `_setVisible` called.");
    }
    this.#userSet = userSet;
    this.#visible = visible;
  }
};
var OptionalContentConfig = class {
  #cachedGetHash = null;
  #groups = /* @__PURE__ */ new Map();
  #initialHash = null;
  #order = null;
  constructor(data, renderingIntent = RenderingIntentFlag.DISPLAY) {
    this.renderingIntent = renderingIntent;
    this.name = null;
    this.creator = null;
    if (data === null) {
      return;
    }
    this.name = data.name;
    this.creator = data.creator;
    this.#order = data.order;
    for (const group of data.groups) {
      this.#groups.set(group.id, new OptionalContentGroup(renderingIntent, group));
    }
    if (data.baseState === "OFF") {
      for (const group of this.#groups.values()) {
        group._setVisible(INTERNAL, false);
      }
    }
    for (const on of data.on) {
      this.#groups.get(on)._setVisible(INTERNAL, true);
    }
    for (const off of data.off) {
      this.#groups.get(off)._setVisible(INTERNAL, false);
    }
    this.#initialHash = this.getHash();
  }
  #evaluateVisibilityExpression(array) {
    const length = array.length;
    if (length < 2) {
      return true;
    }
    const operator = array[0];
    for (let i = 1; i < length; i++) {
      const element = array[i];
      let state;
      if (Array.isArray(element)) {
        state = this.#evaluateVisibilityExpression(element);
      } else if (this.#groups.has(element)) {
        state = this.#groups.get(element).visible;
      } else {
        warn(`Optional content group not found: ${element}`);
        return true;
      }
      switch (operator) {
        case "And":
          if (!state) {
            return false;
          }
          break;
        case "Or":
          if (state) {
            return true;
          }
          break;
        case "Not":
          return !state;
        default:
          return true;
      }
    }
    return operator === "And";
  }
  isVisible(group) {
    if (this.#groups.size === 0) {
      return true;
    }
    if (!group) {
      info("Optional content group not defined.");
      return true;
    }
    if (group.type === "OCG") {
      if (!this.#groups.has(group.id)) {
        warn(`Optional content group not found: ${group.id}`);
        return true;
      }
      return this.#groups.get(group.id).visible;
    } else if (group.type === "OCMD") {
      if (group.expression) {
        return this.#evaluateVisibilityExpression(group.expression);
      }
      if (!group.policy || group.policy === "AnyOn") {
        for (const id of group.ids) {
          if (!this.#groups.has(id)) {
            warn(`Optional content group not found: ${id}`);
            return true;
          }
          if (this.#groups.get(id).visible) {
            return true;
          }
        }
        return false;
      } else if (group.policy === "AllOn") {
        for (const id of group.ids) {
          if (!this.#groups.has(id)) {
            warn(`Optional content group not found: ${id}`);
            return true;
          }
          if (!this.#groups.get(id).visible) {
            return false;
          }
        }
        return true;
      } else if (group.policy === "AnyOff") {
        for (const id of group.ids) {
          if (!this.#groups.has(id)) {
            warn(`Optional content group not found: ${id}`);
            return true;
          }
          if (!this.#groups.get(id).visible) {
            return true;
          }
        }
        return false;
      } else if (group.policy === "AllOff") {
        for (const id of group.ids) {
          if (!this.#groups.has(id)) {
            warn(`Optional content group not found: ${id}`);
            return true;
          }
          if (this.#groups.get(id).visible) {
            return false;
          }
        }
        return true;
      }
      warn(`Unknown optional content policy ${group.policy}.`);
      return true;
    }
    warn(`Unknown group type ${group.type}.`);
    return true;
  }
  setVisibility(id, visible = true) {
    const group = this.#groups.get(id);
    if (!group) {
      warn(`Optional content group not found: ${id}`);
      return;
    }
    group._setVisible(INTERNAL, !!visible, true);
    this.#cachedGetHash = null;
  }
  setOCGState({
    state,
    preserveRB
  }) {
    let operator;
    for (const elem of state) {
      switch (elem) {
        case "ON":
        case "OFF":
        case "Toggle":
          operator = elem;
          continue;
      }
      const group = this.#groups.get(elem);
      if (!group) {
        continue;
      }
      switch (operator) {
        case "ON":
          group._setVisible(INTERNAL, true);
          break;
        case "OFF":
          group._setVisible(INTERNAL, false);
          break;
        case "Toggle":
          group._setVisible(INTERNAL, !group.visible);
          break;
      }
    }
    this.#cachedGetHash = null;
  }
  get hasInitialVisibility() {
    return this.#initialHash === null || this.getHash() === this.#initialHash;
  }
  getOrder() {
    if (!this.#groups.size) {
      return null;
    }
    if (this.#order) {
      return this.#order.slice();
    }
    return [...this.#groups.keys()];
  }
  getGroups() {
    return this.#groups.size > 0 ? objectFromMap(this.#groups) : null;
  }
  getGroup(id) {
    return this.#groups.get(id) || null;
  }
  getHash() {
    if (this.#cachedGetHash !== null) {
      return this.#cachedGetHash;
    }
    const hash = new MurmurHash3_64();
    for (const [id, group] of this.#groups) {
      hash.update(`${id}:${group.visible}`);
    }
    return this.#cachedGetHash = hash.hexdigest();
  }
};
var PDFDataTransportStream = class {
  constructor(pdfDataRangeTransport, {
    disableRange = false,
    disableStream = false
  }) {
    assert(pdfDataRangeTransport, 'PDFDataTransportStream - missing required "pdfDataRangeTransport" argument.');
    const {
      length,
      initialData,
      progressiveDone,
      contentDispositionFilename
    } = pdfDataRangeTransport;
    this._queuedChunks = [];
    this._progressiveDone = progressiveDone;
    this._contentDispositionFilename = contentDispositionFilename;
    if (initialData?.length > 0) {
      const buffer = initialData instanceof Uint8Array && initialData.byteLength === initialData.buffer.byteLength ? initialData.buffer : new Uint8Array(initialData).buffer;
      this._queuedChunks.push(buffer);
    }
    this._pdfDataRangeTransport = pdfDataRangeTransport;
    this._isStreamingSupported = !disableStream;
    this._isRangeSupported = !disableRange;
    this._contentLength = length;
    this._fullRequestReader = null;
    this._rangeReaders = [];
    pdfDataRangeTransport.addRangeListener((begin, chunk) => {
      this._onReceiveData({
        begin,
        chunk
      });
    });
    pdfDataRangeTransport.addProgressListener((loaded, total) => {
      this._onProgress({
        loaded,
        total
      });
    });
    pdfDataRangeTransport.addProgressiveReadListener((chunk) => {
      this._onReceiveData({
        chunk
      });
    });
    pdfDataRangeTransport.addProgressiveDoneListener(() => {
      this._onProgressiveDone();
    });
    pdfDataRangeTransport.transportReady();
  }
  _onReceiveData({
    begin,
    chunk
  }) {
    const buffer = chunk instanceof Uint8Array && chunk.byteLength === chunk.buffer.byteLength ? chunk.buffer : new Uint8Array(chunk).buffer;
    if (begin === void 0) {
      if (this._fullRequestReader) {
        this._fullRequestReader._enqueue(buffer);
      } else {
        this._queuedChunks.push(buffer);
      }
    } else {
      const found = this._rangeReaders.some(function(rangeReader) {
        if (rangeReader._begin !== begin) {
          return false;
        }
        rangeReader._enqueue(buffer);
        return true;
      });
      assert(found, "_onReceiveData - no `PDFDataTransportStreamRangeReader` instance found.");
    }
  }
  get _progressiveDataLength() {
    return this._fullRequestReader?._loaded ?? 0;
  }
  _onProgress(evt) {
    if (evt.total === void 0) {
      this._rangeReaders[0]?.onProgress?.({
        loaded: evt.loaded
      });
    } else {
      this._fullRequestReader?.onProgress?.({
        loaded: evt.loaded,
        total: evt.total
      });
    }
  }
  _onProgressiveDone() {
    this._fullRequestReader?.progressiveDone();
    this._progressiveDone = true;
  }
  _removeRangeReader(reader) {
    const i = this._rangeReaders.indexOf(reader);
    if (i >= 0) {
      this._rangeReaders.splice(i, 1);
    }
  }
  getFullReader() {
    assert(!this._fullRequestReader, "PDFDataTransportStream.getFullReader can only be called once.");
    const queuedChunks = this._queuedChunks;
    this._queuedChunks = null;
    return new PDFDataTransportStreamReader(this, queuedChunks, this._progressiveDone, this._contentDispositionFilename);
  }
  getRangeReader(begin, end) {
    if (end <= this._progressiveDataLength) {
      return null;
    }
    const reader = new PDFDataTransportStreamRangeReader(this, begin, end);
    this._pdfDataRangeTransport.requestDataRange(begin, end);
    this._rangeReaders.push(reader);
    return reader;
  }
  cancelAllRequests(reason) {
    this._fullRequestReader?.cancel(reason);
    for (const reader of this._rangeReaders.slice(0)) {
      reader.cancel(reason);
    }
    this._pdfDataRangeTransport.abort();
  }
};
var PDFDataTransportStreamReader = class {
  constructor(stream, queuedChunks, progressiveDone = false, contentDispositionFilename = null) {
    this._stream = stream;
    this._done = progressiveDone || false;
    this._filename = isPdfFile(contentDispositionFilename) ? contentDispositionFilename : null;
    this._queuedChunks = queuedChunks || [];
    this._loaded = 0;
    for (const chunk of this._queuedChunks) {
      this._loaded += chunk.byteLength;
    }
    this._requests = [];
    this._headersReady = Promise.resolve();
    stream._fullRequestReader = this;
    this.onProgress = null;
  }
  _enqueue(chunk) {
    if (this._done) {
      return;
    }
    if (this._requests.length > 0) {
      const requestCapability = this._requests.shift();
      requestCapability.resolve({
        value: chunk,
        done: false
      });
    } else {
      this._queuedChunks.push(chunk);
    }
    this._loaded += chunk.byteLength;
  }
  get headersReady() {
    return this._headersReady;
  }
  get filename() {
    return this._filename;
  }
  get isRangeSupported() {
    return this._stream._isRangeSupported;
  }
  get isStreamingSupported() {
    return this._stream._isStreamingSupported;
  }
  get contentLength() {
    return this._stream._contentLength;
  }
  async read() {
    if (this._queuedChunks.length > 0) {
      const chunk = this._queuedChunks.shift();
      return {
        value: chunk,
        done: false
      };
    }
    if (this._done) {
      return {
        value: void 0,
        done: true
      };
    }
    const requestCapability = Promise.withResolvers();
    this._requests.push(requestCapability);
    return requestCapability.promise;
  }
  cancel(reason) {
    this._done = true;
    for (const requestCapability of this._requests) {
      requestCapability.resolve({
        value: void 0,
        done: true
      });
    }
    this._requests.length = 0;
  }
  progressiveDone() {
    if (this._done) {
      return;
    }
    this._done = true;
  }
};
var PDFDataTransportStreamRangeReader = class {
  constructor(stream, begin, end) {
    this._stream = stream;
    this._begin = begin;
    this._end = end;
    this._queuedChunk = null;
    this._requests = [];
    this._done = false;
    this.onProgress = null;
  }
  _enqueue(chunk) {
    if (this._done) {
      return;
    }
    if (this._requests.length === 0) {
      this._queuedChunk = chunk;
    } else {
      const requestsCapability = this._requests.shift();
      requestsCapability.resolve({
        value: chunk,
        done: false
      });
      for (const requestCapability of this._requests) {
        requestCapability.resolve({
          value: void 0,
          done: true
        });
      }
      this._requests.length = 0;
    }
    this._done = true;
    this._stream._removeRangeReader(this);
  }
  get isStreamingSupported() {
    return false;
  }
  async read() {
    if (this._queuedChunk) {
      const chunk = this._queuedChunk;
      this._queuedChunk = null;
      return {
        value: chunk,
        done: false
      };
    }
    if (this._done) {
      return {
        value: void 0,
        done: true
      };
    }
    const requestCapability = Promise.withResolvers();
    this._requests.push(requestCapability);
    return requestCapability.promise;
  }
  cancel(reason) {
    this._done = true;
    for (const requestCapability of this._requests) {
      requestCapability.resolve({
        value: void 0,
        done: true
      });
    }
    this._requests.length = 0;
    this._stream._removeRangeReader(this);
  }
};
function getFilenameFromContentDispositionHeader(contentDisposition) {
  let needsEncodingFixup = true;
  let tmp = toParamRegExp("filename\\*", "i").exec(contentDisposition);
  if (tmp) {
    tmp = tmp[1];
    let filename = rfc2616unquote(tmp);
    filename = unescape(filename);
    filename = rfc5987decode(filename);
    filename = rfc2047decode(filename);
    return fixupEncoding(filename);
  }
  tmp = rfc2231getparam(contentDisposition);
  if (tmp) {
    const filename = rfc2047decode(tmp);
    return fixupEncoding(filename);
  }
  tmp = toParamRegExp("filename", "i").exec(contentDisposition);
  if (tmp) {
    tmp = tmp[1];
    let filename = rfc2616unquote(tmp);
    filename = rfc2047decode(filename);
    return fixupEncoding(filename);
  }
  function toParamRegExp(attributePattern, flags) {
    return new RegExp("(?:^|;)\\s*" + attributePattern + '\\s*=\\s*([^";\\s][^;\\s]*|"(?:[^"\\\\]|\\\\"?)+"?)', flags);
  }
  function textdecode(encoding, value) {
    if (encoding) {
      if (!/^[\x00-\xFF]+$/.test(value)) {
        return value;
      }
      try {
        const decoder = new TextDecoder(encoding, {
          fatal: true
        });
        const buffer = stringToBytes(value);
        value = decoder.decode(buffer);
        needsEncodingFixup = false;
      } catch {
      }
    }
    return value;
  }
  function fixupEncoding(value) {
    if (needsEncodingFixup && /[\x80-\xff]/.test(value)) {
      value = textdecode("utf-8", value);
      if (needsEncodingFixup) {
        value = textdecode("iso-8859-1", value);
      }
    }
    return value;
  }
  function rfc2231getparam(contentDispositionStr) {
    const matches = [];
    let match2;
    const iter = toParamRegExp("filename\\*((?!0\\d)\\d+)(\\*?)", "ig");
    while ((match2 = iter.exec(contentDispositionStr)) !== null) {
      let [, n, quot, part] = match2;
      n = parseInt(n, 10);
      if (n in matches) {
        if (n === 0) {
          break;
        }
        continue;
      }
      matches[n] = [quot, part];
    }
    const parts = [];
    for (let n = 0; n < matches.length; ++n) {
      if (!(n in matches)) {
        break;
      }
      let [quot, part] = matches[n];
      part = rfc2616unquote(part);
      if (quot) {
        part = unescape(part);
        if (n === 0) {
          part = rfc5987decode(part);
        }
      }
      parts.push(part);
    }
    return parts.join("");
  }
  function rfc2616unquote(value) {
    if (value.startsWith('"')) {
      const parts = value.slice(1).split('\\"');
      for (let i = 0; i < parts.length; ++i) {
        const quotindex = parts[i].indexOf('"');
        if (quotindex !== -1) {
          parts[i] = parts[i].slice(0, quotindex);
          parts.length = i + 1;
        }
        parts[i] = parts[i].replaceAll(/\\(.)/g, "$1");
      }
      value = parts.join('"');
    }
    return value;
  }
  function rfc5987decode(extvalue) {
    const encodingend = extvalue.indexOf("'");
    if (encodingend === -1) {
      return extvalue;
    }
    const encoding = extvalue.slice(0, encodingend);
    const langvalue = extvalue.slice(encodingend + 1);
    const value = langvalue.replace(/^[^']*'/, "");
    return textdecode(encoding, value);
  }
  function rfc2047decode(value) {
    if (!value.startsWith("=?") || /[\x00-\x19\x80-\xff]/.test(value)) {
      return value;
    }
    return value.replaceAll(/=\?([\w-]*)\?([QqBb])\?((?:[^?]|\?(?!=))*)\?=/g, function(matches, charset, encoding, text) {
      if (encoding === "q" || encoding === "Q") {
        text = text.replaceAll("_", " ");
        text = text.replaceAll(/=([0-9a-fA-F]{2})/g, function(match2, hex) {
          return String.fromCharCode(parseInt(hex, 16));
        });
        return textdecode(charset, text);
      }
      try {
        text = atob(text);
      } catch {
      }
      return textdecode(charset, text);
    });
  }
  return "";
}
function validateRangeRequestCapabilities({
  getResponseHeader,
  isHttp,
  rangeChunkSize,
  disableRange
}) {
  const returnValues = {
    allowRangeRequests: false,
    suggestedLength: void 0
  };
  const length = parseInt(getResponseHeader("Content-Length"), 10);
  if (!Number.isInteger(length)) {
    return returnValues;
  }
  returnValues.suggestedLength = length;
  if (length <= 2 * rangeChunkSize) {
    return returnValues;
  }
  if (disableRange || !isHttp) {
    return returnValues;
  }
  if (getResponseHeader("Accept-Ranges") !== "bytes") {
    return returnValues;
  }
  const contentEncoding = getResponseHeader("Content-Encoding") || "identity";
  if (contentEncoding !== "identity") {
    return returnValues;
  }
  returnValues.allowRangeRequests = true;
  return returnValues;
}
function extractFilenameFromHeader(getResponseHeader) {
  const contentDisposition = getResponseHeader("Content-Disposition");
  if (contentDisposition) {
    let filename = getFilenameFromContentDispositionHeader(contentDisposition);
    if (filename.includes("%")) {
      try {
        filename = decodeURIComponent(filename);
      } catch {
      }
    }
    if (isPdfFile(filename)) {
      return filename;
    }
  }
  return null;
}
function createResponseStatusError(status, url) {
  if (status === 404 || status === 0 && url.startsWith("file:")) {
    return new MissingPDFException('Missing PDF "' + url + '".');
  }
  return new UnexpectedResponseException(`Unexpected server response (${status}) while retrieving PDF "${url}".`, status);
}
function validateResponseStatus(status) {
  return status === 200 || status === 206;
}
function createFetchOptions(headers, withCredentials, abortController) {
  return {
    method: "GET",
    headers,
    signal: abortController.signal,
    mode: "cors",
    credentials: withCredentials ? "include" : "same-origin",
    redirect: "follow"
  };
}
function createHeaders(httpHeaders) {
  const headers = new Headers();
  for (const property in httpHeaders) {
    const value = httpHeaders[property];
    if (value === void 0) {
      continue;
    }
    headers.append(property, value);
  }
  return headers;
}
function getArrayBuffer(val) {
  if (val instanceof Uint8Array) {
    return val.buffer;
  }
  if (val instanceof ArrayBuffer) {
    return val;
  }
  warn(`getArrayBuffer - unexpected data format: ${val}`);
  return new Uint8Array(val).buffer;
}
var PDFFetchStream = class {
  constructor(source) {
    this.source = source;
    this.isHttp = /^https?:/i.test(source.url);
    this.httpHeaders = this.isHttp && source.httpHeaders || {};
    this._fullRequestReader = null;
    this._rangeRequestReaders = [];
  }
  get _progressiveDataLength() {
    return this._fullRequestReader?._loaded ?? 0;
  }
  getFullReader() {
    assert(!this._fullRequestReader, "PDFFetchStream.getFullReader can only be called once.");
    this._fullRequestReader = new PDFFetchStreamReader(this);
    return this._fullRequestReader;
  }
  getRangeReader(begin, end) {
    if (end <= this._progressiveDataLength) {
      return null;
    }
    const reader = new PDFFetchStreamRangeReader(this, begin, end);
    this._rangeRequestReaders.push(reader);
    return reader;
  }
  cancelAllRequests(reason) {
    this._fullRequestReader?.cancel(reason);
    for (const reader of this._rangeRequestReaders.slice(0)) {
      reader.cancel(reason);
    }
  }
};
var PDFFetchStreamReader = class {
  constructor(stream) {
    this._stream = stream;
    this._reader = null;
    this._loaded = 0;
    this._filename = null;
    const source = stream.source;
    this._withCredentials = source.withCredentials || false;
    this._contentLength = source.length;
    this._headersCapability = Promise.withResolvers();
    this._disableRange = source.disableRange || false;
    this._rangeChunkSize = source.rangeChunkSize;
    if (!this._rangeChunkSize && !this._disableRange) {
      this._disableRange = true;
    }
    this._abortController = new AbortController();
    this._isStreamingSupported = !source.disableStream;
    this._isRangeSupported = !source.disableRange;
    this._headers = createHeaders(this._stream.httpHeaders);
    const url = source.url;
    fetch(url, createFetchOptions(this._headers, this._withCredentials, this._abortController)).then((response) => {
      if (!validateResponseStatus(response.status)) {
        throw createResponseStatusError(response.status, url);
      }
      this._reader = response.body.getReader();
      this._headersCapability.resolve();
      const getResponseHeader = (name) => response.headers.get(name);
      const {
        allowRangeRequests,
        suggestedLength
      } = validateRangeRequestCapabilities({
        getResponseHeader,
        isHttp: this._stream.isHttp,
        rangeChunkSize: this._rangeChunkSize,
        disableRange: this._disableRange
      });
      this._isRangeSupported = allowRangeRequests;
      this._contentLength = suggestedLength || this._contentLength;
      this._filename = extractFilenameFromHeader(getResponseHeader);
      if (!this._isStreamingSupported && this._isRangeSupported) {
        this.cancel(new AbortException("Streaming is disabled."));
      }
    }).catch(this._headersCapability.reject);
    this.onProgress = null;
  }
  get headersReady() {
    return this._headersCapability.promise;
  }
  get filename() {
    return this._filename;
  }
  get contentLength() {
    return this._contentLength;
  }
  get isRangeSupported() {
    return this._isRangeSupported;
  }
  get isStreamingSupported() {
    return this._isStreamingSupported;
  }
  async read() {
    await this._headersCapability.promise;
    const {
      value,
      done
    } = await this._reader.read();
    if (done) {
      return {
        value,
        done
      };
    }
    this._loaded += value.byteLength;
    this.onProgress?.({
      loaded: this._loaded,
      total: this._contentLength
    });
    return {
      value: getArrayBuffer(value),
      done: false
    };
  }
  cancel(reason) {
    this._reader?.cancel(reason);
    this._abortController.abort();
  }
};
var PDFFetchStreamRangeReader = class {
  constructor(stream, begin, end) {
    this._stream = stream;
    this._reader = null;
    this._loaded = 0;
    const source = stream.source;
    this._withCredentials = source.withCredentials || false;
    this._readCapability = Promise.withResolvers();
    this._isStreamingSupported = !source.disableStream;
    this._abortController = new AbortController();
    this._headers = createHeaders(this._stream.httpHeaders);
    this._headers.append("Range", `bytes=${begin}-${end - 1}`);
    const url = source.url;
    fetch(url, createFetchOptions(this._headers, this._withCredentials, this._abortController)).then((response) => {
      if (!validateResponseStatus(response.status)) {
        throw createResponseStatusError(response.status, url);
      }
      this._readCapability.resolve();
      this._reader = response.body.getReader();
    }).catch(this._readCapability.reject);
    this.onProgress = null;
  }
  get isStreamingSupported() {
    return this._isStreamingSupported;
  }
  async read() {
    await this._readCapability.promise;
    const {
      value,
      done
    } = await this._reader.read();
    if (done) {
      return {
        value,
        done
      };
    }
    this._loaded += value.byteLength;
    this.onProgress?.({
      loaded: this._loaded
    });
    return {
      value: getArrayBuffer(value),
      done: false
    };
  }
  cancel(reason) {
    this._reader?.cancel(reason);
    this._abortController.abort();
  }
};
var OK_RESPONSE = 200;
var PARTIAL_CONTENT_RESPONSE = 206;
function network_getArrayBuffer(xhr) {
  const data = xhr.response;
  if (typeof data !== "string") {
    return data;
  }
  return stringToBytes(data).buffer;
}
var NetworkManager = class {
  constructor(url, args = {}) {
    this.url = url;
    this.isHttp = /^https?:/i.test(url);
    this.httpHeaders = this.isHttp && args.httpHeaders || /* @__PURE__ */ Object.create(null);
    this.withCredentials = args.withCredentials || false;
    this.currXhrId = 0;
    this.pendingRequests = /* @__PURE__ */ Object.create(null);
  }
  requestRange(begin, end, listeners) {
    const args = {
      begin,
      end
    };
    for (const prop in listeners) {
      args[prop] = listeners[prop];
    }
    return this.request(args);
  }
  requestFull(listeners) {
    return this.request(listeners);
  }
  request(args) {
    const xhr = new XMLHttpRequest();
    const xhrId = this.currXhrId++;
    const pendingRequest = this.pendingRequests[xhrId] = {
      xhr
    };
    xhr.open("GET", this.url);
    xhr.withCredentials = this.withCredentials;
    for (const property in this.httpHeaders) {
      const value = this.httpHeaders[property];
      if (value === void 0) {
        continue;
      }
      xhr.setRequestHeader(property, value);
    }
    if (this.isHttp && "begin" in args && "end" in args) {
      xhr.setRequestHeader("Range", `bytes=${args.begin}-${args.end - 1}`);
      pendingRequest.expectedStatus = PARTIAL_CONTENT_RESPONSE;
    } else {
      pendingRequest.expectedStatus = OK_RESPONSE;
    }
    xhr.responseType = "arraybuffer";
    if (args.onError) {
      xhr.onerror = function(evt) {
        args.onError(xhr.status);
      };
    }
    xhr.onreadystatechange = this.onStateChange.bind(this, xhrId);
    xhr.onprogress = this.onProgress.bind(this, xhrId);
    pendingRequest.onHeadersReceived = args.onHeadersReceived;
    pendingRequest.onDone = args.onDone;
    pendingRequest.onError = args.onError;
    pendingRequest.onProgress = args.onProgress;
    xhr.send(null);
    return xhrId;
  }
  onProgress(xhrId, evt) {
    const pendingRequest = this.pendingRequests[xhrId];
    if (!pendingRequest) {
      return;
    }
    pendingRequest.onProgress?.(evt);
  }
  onStateChange(xhrId, evt) {
    const pendingRequest = this.pendingRequests[xhrId];
    if (!pendingRequest) {
      return;
    }
    const xhr = pendingRequest.xhr;
    if (xhr.readyState >= 2 && pendingRequest.onHeadersReceived) {
      pendingRequest.onHeadersReceived();
      delete pendingRequest.onHeadersReceived;
    }
    if (xhr.readyState !== 4) {
      return;
    }
    if (!(xhrId in this.pendingRequests)) {
      return;
    }
    delete this.pendingRequests[xhrId];
    if (xhr.status === 0 && this.isHttp) {
      pendingRequest.onError?.(xhr.status);
      return;
    }
    const xhrStatus = xhr.status || OK_RESPONSE;
    const ok_response_on_range_request = xhrStatus === OK_RESPONSE && pendingRequest.expectedStatus === PARTIAL_CONTENT_RESPONSE;
    if (!ok_response_on_range_request && xhrStatus !== pendingRequest.expectedStatus) {
      pendingRequest.onError?.(xhr.status);
      return;
    }
    const chunk = network_getArrayBuffer(xhr);
    if (xhrStatus === PARTIAL_CONTENT_RESPONSE) {
      const rangeHeader = xhr.getResponseHeader("Content-Range");
      const matches = /bytes (\d+)-(\d+)\/(\d+)/.exec(rangeHeader);
      pendingRequest.onDone({
        begin: parseInt(matches[1], 10),
        chunk
      });
    } else if (chunk) {
      pendingRequest.onDone({
        begin: 0,
        chunk
      });
    } else {
      pendingRequest.onError?.(xhr.status);
    }
  }
  getRequestXhr(xhrId) {
    return this.pendingRequests[xhrId].xhr;
  }
  isPendingRequest(xhrId) {
    return xhrId in this.pendingRequests;
  }
  abortRequest(xhrId) {
    const xhr = this.pendingRequests[xhrId].xhr;
    delete this.pendingRequests[xhrId];
    xhr.abort();
  }
};
var PDFNetworkStream = class {
  constructor(source) {
    this._source = source;
    this._manager = new NetworkManager(source.url, {
      httpHeaders: source.httpHeaders,
      withCredentials: source.withCredentials
    });
    this._rangeChunkSize = source.rangeChunkSize;
    this._fullRequestReader = null;
    this._rangeRequestReaders = [];
  }
  _onRangeRequestReaderClosed(reader) {
    const i = this._rangeRequestReaders.indexOf(reader);
    if (i >= 0) {
      this._rangeRequestReaders.splice(i, 1);
    }
  }
  getFullReader() {
    assert(!this._fullRequestReader, "PDFNetworkStream.getFullReader can only be called once.");
    this._fullRequestReader = new PDFNetworkStreamFullRequestReader(this._manager, this._source);
    return this._fullRequestReader;
  }
  getRangeReader(begin, end) {
    const reader = new PDFNetworkStreamRangeRequestReader(this._manager, begin, end);
    reader.onClosed = this._onRangeRequestReaderClosed.bind(this);
    this._rangeRequestReaders.push(reader);
    return reader;
  }
  cancelAllRequests(reason) {
    this._fullRequestReader?.cancel(reason);
    for (const reader of this._rangeRequestReaders.slice(0)) {
      reader.cancel(reason);
    }
  }
};
var PDFNetworkStreamFullRequestReader = class {
  constructor(manager, source) {
    this._manager = manager;
    const args = {
      onHeadersReceived: this._onHeadersReceived.bind(this),
      onDone: this._onDone.bind(this),
      onError: this._onError.bind(this),
      onProgress: this._onProgress.bind(this)
    };
    this._url = source.url;
    this._fullRequestId = manager.requestFull(args);
    this._headersReceivedCapability = Promise.withResolvers();
    this._disableRange = source.disableRange || false;
    this._contentLength = source.length;
    this._rangeChunkSize = source.rangeChunkSize;
    if (!this._rangeChunkSize && !this._disableRange) {
      this._disableRange = true;
    }
    this._isStreamingSupported = false;
    this._isRangeSupported = false;
    this._cachedChunks = [];
    this._requests = [];
    this._done = false;
    this._storedError = void 0;
    this._filename = null;
    this.onProgress = null;
  }
  _onHeadersReceived() {
    const fullRequestXhrId = this._fullRequestId;
    const fullRequestXhr = this._manager.getRequestXhr(fullRequestXhrId);
    const getResponseHeader = (name) => fullRequestXhr.getResponseHeader(name);
    const {
      allowRangeRequests,
      suggestedLength
    } = validateRangeRequestCapabilities({
      getResponseHeader,
      isHttp: this._manager.isHttp,
      rangeChunkSize: this._rangeChunkSize,
      disableRange: this._disableRange
    });
    if (allowRangeRequests) {
      this._isRangeSupported = true;
    }
    this._contentLength = suggestedLength || this._contentLength;
    this._filename = extractFilenameFromHeader(getResponseHeader);
    if (this._isRangeSupported) {
      this._manager.abortRequest(fullRequestXhrId);
    }
    this._headersReceivedCapability.resolve();
  }
  _onDone(data) {
    if (data) {
      if (this._requests.length > 0) {
        const requestCapability = this._requests.shift();
        requestCapability.resolve({
          value: data.chunk,
          done: false
        });
      } else {
        this._cachedChunks.push(data.chunk);
      }
    }
    this._done = true;
    if (this._cachedChunks.length > 0) {
      return;
    }
    for (const requestCapability of this._requests) {
      requestCapability.resolve({
        value: void 0,
        done: true
      });
    }
    this._requests.length = 0;
  }
  _onError(status) {
    this._storedError = createResponseStatusError(status, this._url);
    this._headersReceivedCapability.reject(this._storedError);
    for (const requestCapability of this._requests) {
      requestCapability.reject(this._storedError);
    }
    this._requests.length = 0;
    this._cachedChunks.length = 0;
  }
  _onProgress(evt) {
    this.onProgress?.({
      loaded: evt.loaded,
      total: evt.lengthComputable ? evt.total : this._contentLength
    });
  }
  get filename() {
    return this._filename;
  }
  get isRangeSupported() {
    return this._isRangeSupported;
  }
  get isStreamingSupported() {
    return this._isStreamingSupported;
  }
  get contentLength() {
    return this._contentLength;
  }
  get headersReady() {
    return this._headersReceivedCapability.promise;
  }
  async read() {
    if (this._storedError) {
      throw this._storedError;
    }
    if (this._cachedChunks.length > 0) {
      const chunk = this._cachedChunks.shift();
      return {
        value: chunk,
        done: false
      };
    }
    if (this._done) {
      return {
        value: void 0,
        done: true
      };
    }
    const requestCapability = Promise.withResolvers();
    this._requests.push(requestCapability);
    return requestCapability.promise;
  }
  cancel(reason) {
    this._done = true;
    this._headersReceivedCapability.reject(reason);
    for (const requestCapability of this._requests) {
      requestCapability.resolve({
        value: void 0,
        done: true
      });
    }
    this._requests.length = 0;
    if (this._manager.isPendingRequest(this._fullRequestId)) {
      this._manager.abortRequest(this._fullRequestId);
    }
    this._fullRequestReader = null;
  }
};
var PDFNetworkStreamRangeRequestReader = class {
  constructor(manager, begin, end) {
    this._manager = manager;
    const args = {
      onDone: this._onDone.bind(this),
      onError: this._onError.bind(this),
      onProgress: this._onProgress.bind(this)
    };
    this._url = manager.url;
    this._requestId = manager.requestRange(begin, end, args);
    this._requests = [];
    this._queuedChunk = null;
    this._done = false;
    this._storedError = void 0;
    this.onProgress = null;
    this.onClosed = null;
  }
  _close() {
    this.onClosed?.(this);
  }
  _onDone(data) {
    const chunk = data.chunk;
    if (this._requests.length > 0) {
      const requestCapability = this._requests.shift();
      requestCapability.resolve({
        value: chunk,
        done: false
      });
    } else {
      this._queuedChunk = chunk;
    }
    this._done = true;
    for (const requestCapability of this._requests) {
      requestCapability.resolve({
        value: void 0,
        done: true
      });
    }
    this._requests.length = 0;
    this._close();
  }
  _onError(status) {
    this._storedError = createResponseStatusError(status, this._url);
    for (const requestCapability of this._requests) {
      requestCapability.reject(this._storedError);
    }
    this._requests.length = 0;
    this._queuedChunk = null;
  }
  _onProgress(evt) {
    if (!this.isStreamingSupported) {
      this.onProgress?.({
        loaded: evt.loaded
      });
    }
  }
  get isStreamingSupported() {
    return false;
  }
  async read() {
    if (this._storedError) {
      throw this._storedError;
    }
    if (this._queuedChunk !== null) {
      const chunk = this._queuedChunk;
      this._queuedChunk = null;
      return {
        value: chunk,
        done: false
      };
    }
    if (this._done) {
      return {
        value: void 0,
        done: true
      };
    }
    const requestCapability = Promise.withResolvers();
    this._requests.push(requestCapability);
    return requestCapability.promise;
  }
  cancel(reason) {
    this._done = true;
    for (const requestCapability of this._requests) {
      requestCapability.resolve({
        value: void 0,
        done: true
      });
    }
    this._requests.length = 0;
    if (this._manager.isPendingRequest(this._requestId)) {
      this._manager.abortRequest(this._requestId);
    }
    this._close();
  }
};
var fileUriRegex = /^file:\/\/\/[a-zA-Z]:\//;
function parseUrl(sourceUrl) {
  const url = NodePackages.get("url");
  const parsedUrl = url.parse(sourceUrl);
  if (parsedUrl.protocol === "file:" || parsedUrl.host) {
    return parsedUrl;
  }
  if (/^[a-z]:[/\\]/i.test(sourceUrl)) {
    return url.parse(`file:///${sourceUrl}`);
  }
  if (!parsedUrl.host) {
    parsedUrl.protocol = "file:";
  }
  return parsedUrl;
}
var PDFNodeStream = class {
  constructor(source) {
    this.source = source;
    this.url = parseUrl(source.url);
    this.isHttp = this.url.protocol === "http:" || this.url.protocol === "https:";
    this.isFsUrl = this.url.protocol === "file:";
    this.httpHeaders = this.isHttp && source.httpHeaders || {};
    this._fullRequestReader = null;
    this._rangeRequestReaders = [];
  }
  get _progressiveDataLength() {
    return this._fullRequestReader?._loaded ?? 0;
  }
  getFullReader() {
    assert(!this._fullRequestReader, "PDFNodeStream.getFullReader can only be called once.");
    this._fullRequestReader = this.isFsUrl ? new PDFNodeStreamFsFullReader(this) : new PDFNodeStreamFullReader(this);
    return this._fullRequestReader;
  }
  getRangeReader(start, end) {
    if (end <= this._progressiveDataLength) {
      return null;
    }
    const rangeReader = this.isFsUrl ? new PDFNodeStreamFsRangeReader(this, start, end) : new PDFNodeStreamRangeReader(this, start, end);
    this._rangeRequestReaders.push(rangeReader);
    return rangeReader;
  }
  cancelAllRequests(reason) {
    this._fullRequestReader?.cancel(reason);
    for (const reader of this._rangeRequestReaders.slice(0)) {
      reader.cancel(reason);
    }
  }
};
var BaseFullReader = class {
  constructor(stream) {
    this._url = stream.url;
    this._done = false;
    this._storedError = null;
    this.onProgress = null;
    const source = stream.source;
    this._contentLength = source.length;
    this._loaded = 0;
    this._filename = null;
    this._disableRange = source.disableRange || false;
    this._rangeChunkSize = source.rangeChunkSize;
    if (!this._rangeChunkSize && !this._disableRange) {
      this._disableRange = true;
    }
    this._isStreamingSupported = !source.disableStream;
    this._isRangeSupported = !source.disableRange;
    this._readableStream = null;
    this._readCapability = Promise.withResolvers();
    this._headersCapability = Promise.withResolvers();
  }
  get headersReady() {
    return this._headersCapability.promise;
  }
  get filename() {
    return this._filename;
  }
  get contentLength() {
    return this._contentLength;
  }
  get isRangeSupported() {
    return this._isRangeSupported;
  }
  get isStreamingSupported() {
    return this._isStreamingSupported;
  }
  async read() {
    await this._readCapability.promise;
    if (this._done) {
      return {
        value: void 0,
        done: true
      };
    }
    if (this._storedError) {
      throw this._storedError;
    }
    const chunk = this._readableStream.read();
    if (chunk === null) {
      this._readCapability = Promise.withResolvers();
      return this.read();
    }
    this._loaded += chunk.length;
    this.onProgress?.({
      loaded: this._loaded,
      total: this._contentLength
    });
    const buffer = new Uint8Array(chunk).buffer;
    return {
      value: buffer,
      done: false
    };
  }
  cancel(reason) {
    if (!this._readableStream) {
      this._error(reason);
      return;
    }
    this._readableStream.destroy(reason);
  }
  _error(reason) {
    this._storedError = reason;
    this._readCapability.resolve();
  }
  _setReadableStream(readableStream) {
    this._readableStream = readableStream;
    readableStream.on("readable", () => {
      this._readCapability.resolve();
    });
    readableStream.on("end", () => {
      readableStream.destroy();
      this._done = true;
      this._readCapability.resolve();
    });
    readableStream.on("error", (reason) => {
      this._error(reason);
    });
    if (!this._isStreamingSupported && this._isRangeSupported) {
      this._error(new AbortException("streaming is disabled"));
    }
    if (this._storedError) {
      this._readableStream.destroy(this._storedError);
    }
  }
};
var BaseRangeReader = class {
  constructor(stream) {
    this._url = stream.url;
    this._done = false;
    this._storedError = null;
    this.onProgress = null;
    this._loaded = 0;
    this._readableStream = null;
    this._readCapability = Promise.withResolvers();
    const source = stream.source;
    this._isStreamingSupported = !source.disableStream;
  }
  get isStreamingSupported() {
    return this._isStreamingSupported;
  }
  async read() {
    await this._readCapability.promise;
    if (this._done) {
      return {
        value: void 0,
        done: true
      };
    }
    if (this._storedError) {
      throw this._storedError;
    }
    const chunk = this._readableStream.read();
    if (chunk === null) {
      this._readCapability = Promise.withResolvers();
      return this.read();
    }
    this._loaded += chunk.length;
    this.onProgress?.({
      loaded: this._loaded
    });
    const buffer = new Uint8Array(chunk).buffer;
    return {
      value: buffer,
      done: false
    };
  }
  cancel(reason) {
    if (!this._readableStream) {
      this._error(reason);
      return;
    }
    this._readableStream.destroy(reason);
  }
  _error(reason) {
    this._storedError = reason;
    this._readCapability.resolve();
  }
  _setReadableStream(readableStream) {
    this._readableStream = readableStream;
    readableStream.on("readable", () => {
      this._readCapability.resolve();
    });
    readableStream.on("end", () => {
      readableStream.destroy();
      this._done = true;
      this._readCapability.resolve();
    });
    readableStream.on("error", (reason) => {
      this._error(reason);
    });
    if (this._storedError) {
      this._readableStream.destroy(this._storedError);
    }
  }
};
function createRequestOptions(parsedUrl, headers) {
  return {
    protocol: parsedUrl.protocol,
    auth: parsedUrl.auth,
    host: parsedUrl.hostname,
    port: parsedUrl.port,
    path: parsedUrl.path,
    method: "GET",
    headers
  };
}
var PDFNodeStreamFullReader = class extends BaseFullReader {
  constructor(stream) {
    super(stream);
    const handleResponse = (response) => {
      if (response.statusCode === 404) {
        const error = new MissingPDFException(`Missing PDF "${this._url}".`);
        this._storedError = error;
        this._headersCapability.reject(error);
        return;
      }
      this._headersCapability.resolve();
      this._setReadableStream(response);
      const getResponseHeader = (name) => this._readableStream.headers[name.toLowerCase()];
      const {
        allowRangeRequests,
        suggestedLength
      } = validateRangeRequestCapabilities({
        getResponseHeader,
        isHttp: stream.isHttp,
        rangeChunkSize: this._rangeChunkSize,
        disableRange: this._disableRange
      });
      this._isRangeSupported = allowRangeRequests;
      this._contentLength = suggestedLength || this._contentLength;
      this._filename = extractFilenameFromHeader(getResponseHeader);
    };
    this._request = null;
    if (this._url.protocol === "http:") {
      const http = NodePackages.get("http");
      this._request = http.request(createRequestOptions(this._url, stream.httpHeaders), handleResponse);
    } else {
      const https = NodePackages.get("https");
      this._request = https.request(createRequestOptions(this._url, stream.httpHeaders), handleResponse);
    }
    this._request.on("error", (reason) => {
      this._storedError = reason;
      this._headersCapability.reject(reason);
    });
    this._request.end();
  }
};
var PDFNodeStreamRangeReader = class extends BaseRangeReader {
  constructor(stream, start, end) {
    super(stream);
    this._httpHeaders = {};
    for (const property in stream.httpHeaders) {
      const value = stream.httpHeaders[property];
      if (value === void 0) {
        continue;
      }
      this._httpHeaders[property] = value;
    }
    this._httpHeaders.Range = `bytes=${start}-${end - 1}`;
    const handleResponse = (response) => {
      if (response.statusCode === 404) {
        const error = new MissingPDFException(`Missing PDF "${this._url}".`);
        this._storedError = error;
        return;
      }
      this._setReadableStream(response);
    };
    this._request = null;
    if (this._url.protocol === "http:") {
      const http = NodePackages.get("http");
      this._request = http.request(createRequestOptions(this._url, this._httpHeaders), handleResponse);
    } else {
      const https = NodePackages.get("https");
      this._request = https.request(createRequestOptions(this._url, this._httpHeaders), handleResponse);
    }
    this._request.on("error", (reason) => {
      this._storedError = reason;
    });
    this._request.end();
  }
};
var PDFNodeStreamFsFullReader = class extends BaseFullReader {
  constructor(stream) {
    super(stream);
    let path = decodeURIComponent(this._url.path);
    if (fileUriRegex.test(this._url.href)) {
      path = path.replace(/^\//, "");
    }
    const fs = NodePackages.get("fs");
    fs.promises.lstat(path).then((stat) => {
      this._contentLength = stat.size;
      this._setReadableStream(fs.createReadStream(path));
      this._headersCapability.resolve();
    }, (error) => {
      if (error.code === "ENOENT") {
        error = new MissingPDFException(`Missing PDF "${path}".`);
      }
      this._storedError = error;
      this._headersCapability.reject(error);
    });
  }
};
var PDFNodeStreamFsRangeReader = class extends BaseRangeReader {
  constructor(stream, start, end) {
    super(stream);
    let path = decodeURIComponent(this._url.path);
    if (fileUriRegex.test(this._url.href)) {
      path = path.replace(/^\//, "");
    }
    const fs = NodePackages.get("fs");
    this._setReadableStream(fs.createReadStream(path, {
      start,
      end: end - 1
    }));
  }
};
var MAX_TEXT_DIVS_TO_RENDER = 1e5;
var DEFAULT_FONT_SIZE = 30;
var DEFAULT_FONT_ASCENT = 0.8;
var TextLayer = class _TextLayer {
  #capability = Promise.withResolvers();
  #container = null;
  #disableProcessItems = false;
  #fontInspectorEnabled = !!globalThis.FontInspector?.enabled;
  #lang = null;
  #layoutTextParams = null;
  #pageHeight = 0;
  #pageWidth = 0;
  #reader = null;
  #rootContainer = null;
  #rotation = 0;
  #scale = 0;
  #styleCache = /* @__PURE__ */ Object.create(null);
  #textContentItemsStr = [];
  #textContentSource = null;
  #textDivs = [];
  #textDivProperties = /* @__PURE__ */ new WeakMap();
  #transform = null;
  static #ascentCache = /* @__PURE__ */ new Map();
  static #canvasContexts = /* @__PURE__ */ new Map();
  static #minFontSize = null;
  static #pendingTextLayers = /* @__PURE__ */ new Set();
  constructor({
    textContentSource,
    container,
    viewport
  }) {
    if (textContentSource instanceof ReadableStream) {
      this.#textContentSource = textContentSource;
    } else if (typeof textContentSource === "object") {
      this.#textContentSource = new ReadableStream({
        start(controller) {
          controller.enqueue(textContentSource);
          controller.close();
        }
      });
    } else {
      throw new Error('No "textContentSource" parameter specified.');
    }
    this.#container = this.#rootContainer = container;
    this.#scale = viewport.scale * (globalThis.devicePixelRatio || 1);
    this.#rotation = viewport.rotation;
    this.#layoutTextParams = {
      prevFontSize: null,
      prevFontFamily: null,
      div: null,
      properties: null,
      ctx: null
    };
    const {
      pageWidth,
      pageHeight,
      pageX,
      pageY
    } = viewport.rawDims;
    this.#transform = [1, 0, 0, -1, -pageX, pageY + pageHeight];
    this.#pageWidth = pageWidth;
    this.#pageHeight = pageHeight;
    _TextLayer.#ensureMinFontSizeComputed();
    setLayerDimensions(container, viewport);
    this.#capability.promise.catch(() => {
    }).then(() => {
      _TextLayer.#pendingTextLayers.delete(this);
      this.#layoutTextParams = null;
      this.#styleCache = null;
    });
  }
  render() {
    const pump = () => {
      this.#reader.read().then(({
        value,
        done
      }) => {
        if (done) {
          this.#capability.resolve();
          return;
        }
        this.#lang ??= value.lang;
        Object.assign(this.#styleCache, value.styles);
        this.#processItems(value.items);
        pump();
      }, this.#capability.reject);
    };
    this.#reader = this.#textContentSource.getReader();
    _TextLayer.#pendingTextLayers.add(this);
    pump();
    return this.#capability.promise;
  }
  update({
    viewport,
    onBefore = null
  }) {
    const scale = viewport.scale * (globalThis.devicePixelRatio || 1);
    const rotation = viewport.rotation;
    if (rotation !== this.#rotation) {
      onBefore?.();
      this.#rotation = rotation;
      setLayerDimensions(this.#rootContainer, {
        rotation
      });
    }
    if (scale !== this.#scale) {
      onBefore?.();
      this.#scale = scale;
      const params = {
        prevFontSize: null,
        prevFontFamily: null,
        div: null,
        properties: null,
        ctx: _TextLayer.#getCtx(this.#lang)
      };
      for (const div of this.#textDivs) {
        params.properties = this.#textDivProperties.get(div);
        params.div = div;
        this.#layout(params);
      }
    }
  }
  cancel() {
    const abortEx = new AbortException("TextLayer task cancelled.");
    this.#reader?.cancel(abortEx).catch(() => {
    });
    this.#reader = null;
    this.#capability.reject(abortEx);
  }
  get textDivs() {
    return this.#textDivs;
  }
  get textContentItemsStr() {
    return this.#textContentItemsStr;
  }
  #processItems(items) {
    if (this.#disableProcessItems) {
      return;
    }
    this.#layoutTextParams.ctx ??= _TextLayer.#getCtx(this.#lang);
    const textDivs = this.#textDivs, textContentItemsStr = this.#textContentItemsStr;
    for (const item of items) {
      if (textDivs.length > MAX_TEXT_DIVS_TO_RENDER) {
        warn("Ignoring additional textDivs for performance reasons.");
        this.#disableProcessItems = true;
        return;
      }
      if (item.str === void 0) {
        if (item.type === "beginMarkedContentProps" || item.type === "beginMarkedContent") {
          const parent = this.#container;
          this.#container = document.createElement("span");
          this.#container.classList.add("markedContent");
          if (item.id !== null) {
            this.#container.setAttribute("id", `${item.id}`);
          }
          parent.append(this.#container);
        } else if (item.type === "endMarkedContent") {
          this.#container = this.#container.parentNode;
        }
        continue;
      }
      textContentItemsStr.push(item.str);
      this.#appendText(item);
    }
  }
  #appendText(geom) {
    const textDiv = document.createElement("span");
    const textDivProperties = {
      angle: 0,
      canvasWidth: 0,
      hasText: geom.str !== "",
      hasEOL: geom.hasEOL,
      fontSize: 0
    };
    this.#textDivs.push(textDiv);
    const tx = Util.transform(this.#transform, geom.transform);
    let angle = Math.atan2(tx[1], tx[0]);
    const style = this.#styleCache[geom.fontName];
    if (style.vertical) {
      angle += Math.PI / 2;
    }
    const fontFamily = this.#fontInspectorEnabled && style.fontSubstitution || style.fontFamily;
    const fontHeight = Math.hypot(tx[2], tx[3]);
    const fontAscent = fontHeight * _TextLayer.#getAscent(fontFamily, this.#lang);
    let left, top;
    if (angle === 0) {
      left = tx[4];
      top = tx[5] - fontAscent;
    } else {
      left = tx[4] + fontAscent * Math.sin(angle);
      top = tx[5] - fontAscent * Math.cos(angle);
    }
    const scaleFactorStr = "calc(var(--scale-factor)*";
    const divStyle = textDiv.style;
    if (this.#container === this.#rootContainer) {
      divStyle.left = `${(100 * left / this.#pageWidth).toFixed(2)}%`;
      divStyle.top = `${(100 * top / this.#pageHeight).toFixed(2)}%`;
    } else {
      divStyle.left = `${scaleFactorStr}${left.toFixed(2)}px)`;
      divStyle.top = `${scaleFactorStr}${top.toFixed(2)}px)`;
    }
    divStyle.fontSize = `${scaleFactorStr}${(_TextLayer.#minFontSize * fontHeight).toFixed(2)}px)`;
    divStyle.fontFamily = fontFamily;
    textDivProperties.fontSize = fontHeight;
    textDiv.setAttribute("role", "presentation");
    textDiv.textContent = geom.str;
    textDiv.dir = geom.dir;
    if (this.#fontInspectorEnabled) {
      textDiv.dataset.fontName = style.fontSubstitutionLoadedName || geom.fontName;
    }
    if (angle !== 0) {
      textDivProperties.angle = angle * (180 / Math.PI);
    }
    let shouldScaleText = false;
    if (geom.str.length > 1) {
      shouldScaleText = true;
    } else if (geom.str !== " " && geom.transform[0] !== geom.transform[3]) {
      const absScaleX = Math.abs(geom.transform[0]), absScaleY = Math.abs(geom.transform[3]);
      if (absScaleX !== absScaleY && Math.max(absScaleX, absScaleY) / Math.min(absScaleX, absScaleY) > 1.5) {
        shouldScaleText = true;
      }
    }
    if (shouldScaleText) {
      textDivProperties.canvasWidth = style.vertical ? geom.height : geom.width;
    }
    this.#textDivProperties.set(textDiv, textDivProperties);
    this.#layoutTextParams.div = textDiv;
    this.#layoutTextParams.properties = textDivProperties;
    this.#layout(this.#layoutTextParams);
    if (textDivProperties.hasText) {
      this.#container.append(textDiv);
    }
    if (textDivProperties.hasEOL) {
      const br = document.createElement("br");
      br.setAttribute("role", "presentation");
      this.#container.append(br);
    }
  }
  #layout(params) {
    const {
      div,
      properties,
      ctx,
      prevFontSize,
      prevFontFamily
    } = params;
    const {
      style
    } = div;
    let transform = "";
    if (_TextLayer.#minFontSize > 1) {
      transform = `scale(${1 / _TextLayer.#minFontSize})`;
    }
    if (properties.canvasWidth !== 0 && properties.hasText) {
      const {
        fontFamily
      } = style;
      const {
        canvasWidth,
        fontSize
      } = properties;
      if (prevFontSize !== fontSize || prevFontFamily !== fontFamily) {
        ctx.font = `${fontSize * this.#scale}px ${fontFamily}`;
        params.prevFontSize = fontSize;
        params.prevFontFamily = fontFamily;
      }
      const {
        width
      } = ctx.measureText(div.textContent);
      if (width > 0) {
        transform = `scaleX(${canvasWidth * this.#scale / width}) ${transform}`;
      }
    }
    if (properties.angle !== 0) {
      transform = `rotate(${properties.angle}deg) ${transform}`;
    }
    if (transform.length > 0) {
      style.transform = transform;
    }
  }
  static cleanup() {
    if (this.#pendingTextLayers.size > 0) {
      return;
    }
    this.#ascentCache.clear();
    for (const {
      canvas
    } of this.#canvasContexts.values()) {
      canvas.remove();
    }
    this.#canvasContexts.clear();
  }
  static #getCtx(lang = null) {
    let canvasContext = this.#canvasContexts.get(lang ||= "");
    if (!canvasContext) {
      const canvas = document.createElement("canvas");
      canvas.className = "hiddenCanvasElement";
      canvas.lang = lang;
      document.body.append(canvas);
      canvasContext = canvas.getContext("2d", {
        alpha: false,
        willReadFrequently: true
      });
      this.#canvasContexts.set(lang, canvasContext);
    }
    return canvasContext;
  }
  static #ensureMinFontSizeComputed() {
    if (this.#minFontSize !== null) {
      return;
    }
    const div = document.createElement("div");
    div.style.opacity = 0;
    div.style.lineHeight = 1;
    div.style.fontSize = "1px";
    div.style.position = "absolute";
    div.textContent = "X";
    document.body.append(div);
    this.#minFontSize = div.getBoundingClientRect().height;
    div.remove();
  }
  static #getAscent(fontFamily, lang) {
    const cachedAscent = this.#ascentCache.get(fontFamily);
    if (cachedAscent) {
      return cachedAscent;
    }
    const ctx = this.#getCtx(lang);
    const savedFont = ctx.font;
    ctx.canvas.width = ctx.canvas.height = DEFAULT_FONT_SIZE;
    ctx.font = `${DEFAULT_FONT_SIZE}px ${fontFamily}`;
    const metrics = ctx.measureText("");
    let ascent = metrics.fontBoundingBoxAscent;
    let descent = Math.abs(metrics.fontBoundingBoxDescent);
    if (ascent) {
      const ratio2 = ascent / (ascent + descent);
      this.#ascentCache.set(fontFamily, ratio2);
      ctx.canvas.width = ctx.canvas.height = 0;
      ctx.font = savedFont;
      return ratio2;
    }
    ctx.strokeStyle = "red";
    ctx.clearRect(0, 0, DEFAULT_FONT_SIZE, DEFAULT_FONT_SIZE);
    ctx.strokeText("g", 0, 0);
    let pixels = ctx.getImageData(0, 0, DEFAULT_FONT_SIZE, DEFAULT_FONT_SIZE).data;
    descent = 0;
    for (let i = pixels.length - 1 - 3; i >= 0; i -= 4) {
      if (pixels[i] > 0) {
        descent = Math.ceil(i / 4 / DEFAULT_FONT_SIZE);
        break;
      }
    }
    ctx.clearRect(0, 0, DEFAULT_FONT_SIZE, DEFAULT_FONT_SIZE);
    ctx.strokeText("A", 0, DEFAULT_FONT_SIZE);
    pixels = ctx.getImageData(0, 0, DEFAULT_FONT_SIZE, DEFAULT_FONT_SIZE).data;
    ascent = 0;
    for (let i = 0, ii = pixels.length; i < ii; i += 4) {
      if (pixels[i] > 0) {
        ascent = DEFAULT_FONT_SIZE - Math.floor(i / 4 / DEFAULT_FONT_SIZE);
        break;
      }
    }
    ctx.canvas.width = ctx.canvas.height = 0;
    ctx.font = savedFont;
    const ratio = ascent ? ascent / (ascent + descent) : DEFAULT_FONT_ASCENT;
    this.#ascentCache.set(fontFamily, ratio);
    return ratio;
  }
};
var XfaText = class _XfaText {
  static textContent(xfa) {
    const items = [];
    const output = {
      items,
      styles: /* @__PURE__ */ Object.create(null)
    };
    function walk(node) {
      if (!node) {
        return;
      }
      let str = null;
      const name = node.name;
      if (name === "#text") {
        str = node.value;
      } else if (!_XfaText.shouldBuildText(name)) {
        return;
      } else if (node?.attributes?.textContent) {
        str = node.attributes.textContent;
      } else if (node.value) {
        str = node.value;
      }
      if (str !== null) {
        items.push({
          str
        });
      }
      if (!node.children) {
        return;
      }
      for (const child of node.children) {
        walk(child);
      }
    }
    walk(xfa);
    return output;
  }
  static shouldBuildText(name) {
    return !(name === "textarea" || name === "input" || name === "option" || name === "select");
  }
};
var DEFAULT_RANGE_CHUNK_SIZE = 65536;
var RENDERING_CANCELLED_TIMEOUT = 100;
var DELAYED_CLEANUP_TIMEOUT = 5e3;
var DefaultCanvasFactory = isNodeJS ? NodeCanvasFactory : DOMCanvasFactory;
var DefaultCMapReaderFactory = isNodeJS ? NodeCMapReaderFactory : DOMCMapReaderFactory;
var DefaultFilterFactory = isNodeJS ? NodeFilterFactory : DOMFilterFactory;
var DefaultStandardFontDataFactory = isNodeJS ? NodeStandardFontDataFactory : DOMStandardFontDataFactory;
function getDocument(src = {}) {
  if (typeof src === "string" || src instanceof URL) {
    src = {
      url: src
    };
  } else if (src instanceof ArrayBuffer || ArrayBuffer.isView(src)) {
    src = {
      data: src
    };
  }
  const task = new PDFDocumentLoadingTask();
  const {
    docId
  } = task;
  const url = src.url ? getUrlProp(src.url) : null;
  const data = src.data ? getDataProp(src.data) : null;
  const httpHeaders = src.httpHeaders || null;
  const withCredentials = src.withCredentials === true;
  const password = src.password ?? null;
  const rangeTransport = src.range instanceof PDFDataRangeTransport ? src.range : null;
  const rangeChunkSize = Number.isInteger(src.rangeChunkSize) && src.rangeChunkSize > 0 ? src.rangeChunkSize : DEFAULT_RANGE_CHUNK_SIZE;
  let worker = src.worker instanceof PDFWorker ? src.worker : null;
  const verbosity2 = src.verbosity;
  const docBaseUrl = typeof src.docBaseUrl === "string" && !isDataScheme(src.docBaseUrl) ? src.docBaseUrl : null;
  const cMapUrl = typeof src.cMapUrl === "string" ? src.cMapUrl : null;
  const cMapPacked = src.cMapPacked !== false;
  const CMapReaderFactory = src.CMapReaderFactory || DefaultCMapReaderFactory;
  const standardFontDataUrl = typeof src.standardFontDataUrl === "string" ? src.standardFontDataUrl : null;
  const StandardFontDataFactory = src.StandardFontDataFactory || DefaultStandardFontDataFactory;
  const ignoreErrors = src.stopAtErrors !== true;
  const maxImageSize = Number.isInteger(src.maxImageSize) && src.maxImageSize > -1 ? src.maxImageSize : -1;
  const isEvalSupported2 = src.isEvalSupported !== false;
  const isOffscreenCanvasSupported = typeof src.isOffscreenCanvasSupported === "boolean" ? src.isOffscreenCanvasSupported : !isNodeJS;
  const canvasMaxAreaInBytes = Number.isInteger(src.canvasMaxAreaInBytes) ? src.canvasMaxAreaInBytes : -1;
  const disableFontFace = typeof src.disableFontFace === "boolean" ? src.disableFontFace : isNodeJS;
  const fontExtraProperties = src.fontExtraProperties === true;
  const enableXfa = src.enableXfa === true;
  const ownerDocument = src.ownerDocument || globalThis.document;
  const disableRange = src.disableRange === true;
  const disableStream = src.disableStream === true;
  const disableAutoFetch = src.disableAutoFetch === true;
  const pdfBug = src.pdfBug === true;
  const enableHWA = src.enableHWA === true;
  const length = rangeTransport ? rangeTransport.length : src.length ?? NaN;
  const useSystemFonts = typeof src.useSystemFonts === "boolean" ? src.useSystemFonts : !isNodeJS && !disableFontFace;
  const useWorkerFetch = typeof src.useWorkerFetch === "boolean" ? src.useWorkerFetch : CMapReaderFactory === DOMCMapReaderFactory && StandardFontDataFactory === DOMStandardFontDataFactory && cMapUrl && standardFontDataUrl && isValidFetchUrl(cMapUrl, document.baseURI) && isValidFetchUrl(standardFontDataUrl, document.baseURI);
  const canvasFactory = src.canvasFactory || new DefaultCanvasFactory({
    ownerDocument,
    enableHWA
  });
  const filterFactory = src.filterFactory || new DefaultFilterFactory({
    docId,
    ownerDocument
  });
  const styleElement = null;
  setVerbosityLevel(verbosity2);
  const transportFactory = {
    canvasFactory,
    filterFactory
  };
  if (!useWorkerFetch) {
    transportFactory.cMapReaderFactory = new CMapReaderFactory({
      baseUrl: cMapUrl,
      isCompressed: cMapPacked
    });
    transportFactory.standardFontDataFactory = new StandardFontDataFactory({
      baseUrl: standardFontDataUrl
    });
  }
  if (!worker) {
    const workerParams = {
      verbosity: verbosity2,
      port: GlobalWorkerOptions.workerPort
    };
    worker = workerParams.port ? PDFWorker.fromPort(workerParams) : new PDFWorker(workerParams);
    task._worker = worker;
  }
  const docParams = {
    docId,
    apiVersion: "4.5.136",
    data,
    password,
    disableAutoFetch,
    rangeChunkSize,
    length,
    docBaseUrl,
    enableXfa,
    evaluatorOptions: {
      maxImageSize,
      disableFontFace,
      ignoreErrors,
      isEvalSupported: isEvalSupported2,
      isOffscreenCanvasSupported,
      canvasMaxAreaInBytes,
      fontExtraProperties,
      useSystemFonts,
      cMapUrl: useWorkerFetch ? cMapUrl : null,
      standardFontDataUrl: useWorkerFetch ? standardFontDataUrl : null
    }
  };
  const transportParams = {
    disableFontFace,
    fontExtraProperties,
    ownerDocument,
    pdfBug,
    styleElement,
    loadingParams: {
      disableAutoFetch,
      enableXfa
    }
  };
  worker.promise.then(function() {
    if (task.destroyed) {
      throw new Error("Loading aborted");
    }
    if (worker.destroyed) {
      throw new Error("Worker was destroyed");
    }
    const workerIdPromise = worker.messageHandler.sendWithPromise("GetDocRequest", docParams, data ? [data.buffer] : null);
    let networkStream;
    if (rangeTransport) {
      networkStream = new PDFDataTransportStream(rangeTransport, {
        disableRange,
        disableStream
      });
    } else if (!data) {
      if (!url) {
        throw new Error("getDocument - no `url` parameter provided.");
      }
      const createPDFNetworkStream = (params) => {
        if (isNodeJS) {
          const isFetchSupported = function() {
            return typeof fetch !== "undefined" && typeof Response !== "undefined" && "body" in Response.prototype;
          };
          return isFetchSupported() && isValidFetchUrl(params.url) ? new PDFFetchStream(params) : new PDFNodeStream(params);
        }
        return isValidFetchUrl(params.url) ? new PDFFetchStream(params) : new PDFNetworkStream(params);
      };
      networkStream = createPDFNetworkStream({
        url,
        length,
        httpHeaders,
        withCredentials,
        rangeChunkSize,
        disableRange,
        disableStream
      });
    }
    return workerIdPromise.then((workerId) => {
      if (task.destroyed) {
        throw new Error("Loading aborted");
      }
      if (worker.destroyed) {
        throw new Error("Worker was destroyed");
      }
      const messageHandler = new MessageHandler(docId, workerId, worker.port);
      const transport = new WorkerTransport(messageHandler, task, networkStream, transportParams, transportFactory);
      task._transport = transport;
      messageHandler.send("Ready", null);
    });
  }).catch(task._capability.reject);
  return task;
}
function getUrlProp(val) {
  if (val instanceof URL) {
    return val.href;
  }
  try {
    return new URL(val, window.location).href;
  } catch {
    if (isNodeJS && typeof val === "string") {
      return val;
    }
  }
  throw new Error("Invalid PDF url data: either string or URL-object is expected in the url property.");
}
function getDataProp(val) {
  if (isNodeJS && typeof Buffer !== "undefined" && val instanceof Buffer) {
    throw new Error("Please provide binary data as `Uint8Array`, rather than `Buffer`.");
  }
  if (val instanceof Uint8Array && val.byteLength === val.buffer.byteLength) {
    return val;
  }
  if (typeof val === "string") {
    return stringToBytes(val);
  }
  if (val instanceof ArrayBuffer || ArrayBuffer.isView(val) || typeof val === "object" && !isNaN(val?.length)) {
    return new Uint8Array(val);
  }
  throw new Error("Invalid PDF binary data: either TypedArray, string, or array-like object is expected in the data property.");
}
function isRefProxy(ref) {
  return typeof ref === "object" && Number.isInteger(ref?.num) && ref.num >= 0 && Number.isInteger(ref?.gen) && ref.gen >= 0;
}
var PDFDocumentLoadingTask = class _PDFDocumentLoadingTask {
  static #docId = 0;
  constructor() {
    this._capability = Promise.withResolvers();
    this._transport = null;
    this._worker = null;
    this.docId = `d${_PDFDocumentLoadingTask.#docId++}`;
    this.destroyed = false;
    this.onPassword = null;
    this.onProgress = null;
  }
  get promise() {
    return this._capability.promise;
  }
  async destroy() {
    this.destroyed = true;
    try {
      if (this._worker?.port) {
        this._worker._pendingDestroy = true;
      }
      await this._transport?.destroy();
    } catch (ex) {
      if (this._worker?.port) {
        delete this._worker._pendingDestroy;
      }
      throw ex;
    }
    this._transport = null;
    if (this._worker) {
      this._worker.destroy();
      this._worker = null;
    }
  }
};
var PDFDataRangeTransport = class {
  constructor(length, initialData, progressiveDone = false, contentDispositionFilename = null) {
    this.length = length;
    this.initialData = initialData;
    this.progressiveDone = progressiveDone;
    this.contentDispositionFilename = contentDispositionFilename;
    this._rangeListeners = [];
    this._progressListeners = [];
    this._progressiveReadListeners = [];
    this._progressiveDoneListeners = [];
    this._readyCapability = Promise.withResolvers();
  }
  addRangeListener(listener) {
    this._rangeListeners.push(listener);
  }
  addProgressListener(listener) {
    this._progressListeners.push(listener);
  }
  addProgressiveReadListener(listener) {
    this._progressiveReadListeners.push(listener);
  }
  addProgressiveDoneListener(listener) {
    this._progressiveDoneListeners.push(listener);
  }
  onDataRange(begin, chunk) {
    for (const listener of this._rangeListeners) {
      listener(begin, chunk);
    }
  }
  onDataProgress(loaded, total) {
    this._readyCapability.promise.then(() => {
      for (const listener of this._progressListeners) {
        listener(loaded, total);
      }
    });
  }
  onDataProgressiveRead(chunk) {
    this._readyCapability.promise.then(() => {
      for (const listener of this._progressiveReadListeners) {
        listener(chunk);
      }
    });
  }
  onDataProgressiveDone() {
    this._readyCapability.promise.then(() => {
      for (const listener of this._progressiveDoneListeners) {
        listener();
      }
    });
  }
  transportReady() {
    this._readyCapability.resolve();
  }
  requestDataRange(begin, end) {
    unreachable("Abstract method PDFDataRangeTransport.requestDataRange");
  }
  abort() {
  }
};
var PDFDocumentProxy = class {
  constructor(pdfInfo, transport) {
    this._pdfInfo = pdfInfo;
    this._transport = transport;
  }
  get annotationStorage() {
    return this._transport.annotationStorage;
  }
  get filterFactory() {
    return this._transport.filterFactory;
  }
  get numPages() {
    return this._pdfInfo.numPages;
  }
  get fingerprints() {
    return this._pdfInfo.fingerprints;
  }
  get isPureXfa() {
    return shadow(this, "isPureXfa", !!this._transport._htmlForXfa);
  }
  get allXfaHtml() {
    return this._transport._htmlForXfa;
  }
  getPage(pageNumber) {
    return this._transport.getPage(pageNumber);
  }
  getPageIndex(ref) {
    return this._transport.getPageIndex(ref);
  }
  getDestinations() {
    return this._transport.getDestinations();
  }
  getDestination(id) {
    return this._transport.getDestination(id);
  }
  getPageLabels() {
    return this._transport.getPageLabels();
  }
  getPageLayout() {
    return this._transport.getPageLayout();
  }
  getPageMode() {
    return this._transport.getPageMode();
  }
  getViewerPreferences() {
    return this._transport.getViewerPreferences();
  }
  getOpenAction() {
    return this._transport.getOpenAction();
  }
  getAttachments() {
    return this._transport.getAttachments();
  }
  getJSActions() {
    return this._transport.getDocJSActions();
  }
  getOutline() {
    return this._transport.getOutline();
  }
  getOptionalContentConfig({
    intent = "display"
  } = {}) {
    const {
      renderingIntent
    } = this._transport.getRenderingIntent(intent);
    return this._transport.getOptionalContentConfig(renderingIntent);
  }
  getPermissions() {
    return this._transport.getPermissions();
  }
  getMetadata() {
    return this._transport.getMetadata();
  }
  getMarkInfo() {
    return this._transport.getMarkInfo();
  }
  getData() {
    return this._transport.getData();
  }
  saveDocument() {
    return this._transport.saveDocument();
  }
  getDownloadInfo() {
    return this._transport.downloadInfoCapability.promise;
  }
  cleanup(keepLoadedFonts = false) {
    return this._transport.startCleanup(keepLoadedFonts || this.isPureXfa);
  }
  destroy() {
    return this.loadingTask.destroy();
  }
  cachedPageNumber(ref) {
    return this._transport.cachedPageNumber(ref);
  }
  get loadingParams() {
    return this._transport.loadingParams;
  }
  get loadingTask() {
    return this._transport.loadingTask;
  }
  getFieldObjects() {
    return this._transport.getFieldObjects();
  }
  hasJSActions() {
    return this._transport.hasJSActions();
  }
  getCalculationOrderIds() {
    return this._transport.getCalculationOrderIds();
  }
};
var PDFPageProxy = class {
  #delayedCleanupTimeout = null;
  #pendingCleanup = false;
  constructor(pageIndex, pageInfo, transport, pdfBug = false) {
    this._pageIndex = pageIndex;
    this._pageInfo = pageInfo;
    this._transport = transport;
    this._stats = pdfBug ? new StatTimer() : null;
    this._pdfBug = pdfBug;
    this.commonObjs = transport.commonObjs;
    this.objs = new PDFObjects();
    this._maybeCleanupAfterRender = false;
    this._intentStates = /* @__PURE__ */ new Map();
    this.destroyed = false;
  }
  get pageNumber() {
    return this._pageIndex + 1;
  }
  get rotate() {
    return this._pageInfo.rotate;
  }
  get ref() {
    return this._pageInfo.ref;
  }
  get userUnit() {
    return this._pageInfo.userUnit;
  }
  get view() {
    return this._pageInfo.view;
  }
  getViewport({
    scale,
    rotation = this.rotate,
    offsetX = 0,
    offsetY = 0,
    dontFlip = false
  } = {}) {
    return new PageViewport({
      viewBox: this.view,
      scale,
      rotation,
      offsetX,
      offsetY,
      dontFlip
    });
  }
  getAnnotations({
    intent = "display"
  } = {}) {
    const {
      renderingIntent
    } = this._transport.getRenderingIntent(intent);
    return this._transport.getAnnotations(this._pageIndex, renderingIntent);
  }
  getJSActions() {
    return this._transport.getPageJSActions(this._pageIndex);
  }
  get filterFactory() {
    return this._transport.filterFactory;
  }
  get isPureXfa() {
    return shadow(this, "isPureXfa", !!this._transport._htmlForXfa);
  }
  async getXfa() {
    return this._transport._htmlForXfa?.children[this._pageIndex] || null;
  }
  render({
    canvasContext,
    viewport,
    intent = "display",
    annotationMode = AnnotationMode.ENABLE,
    transform = null,
    background = null,
    optionalContentConfigPromise = null,
    annotationCanvasMap = null,
    pageColors = null,
    printAnnotationStorage = null,
    isEditing = false
  }) {
    this._stats?.time("Overall");
    const intentArgs = this._transport.getRenderingIntent(intent, annotationMode, printAnnotationStorage, isEditing);
    const {
      renderingIntent,
      cacheKey
    } = intentArgs;
    this.#pendingCleanup = false;
    this.#abortDelayedCleanup();
    optionalContentConfigPromise ||= this._transport.getOptionalContentConfig(renderingIntent);
    let intentState = this._intentStates.get(cacheKey);
    if (!intentState) {
      intentState = /* @__PURE__ */ Object.create(null);
      this._intentStates.set(cacheKey, intentState);
    }
    if (intentState.streamReaderCancelTimeout) {
      clearTimeout(intentState.streamReaderCancelTimeout);
      intentState.streamReaderCancelTimeout = null;
    }
    const intentPrint = !!(renderingIntent & RenderingIntentFlag.PRINT);
    if (!intentState.displayReadyCapability) {
      intentState.displayReadyCapability = Promise.withResolvers();
      intentState.operatorList = {
        fnArray: [],
        argsArray: [],
        lastChunk: false,
        separateAnnots: null
      };
      this._stats?.time("Page Request");
      this._pumpOperatorList(intentArgs);
    }
    const complete = (error) => {
      intentState.renderTasks.delete(internalRenderTask);
      if (this._maybeCleanupAfterRender || intentPrint) {
        this.#pendingCleanup = true;
      }
      this.#tryCleanup(!intentPrint);
      if (error) {
        internalRenderTask.capability.reject(error);
        this._abortOperatorList({
          intentState,
          reason: error instanceof Error ? error : new Error(error)
        });
      } else {
        internalRenderTask.capability.resolve();
      }
      if (this._stats) {
        this._stats.timeEnd("Rendering");
        this._stats.timeEnd("Overall");
        if (globalThis.Stats?.enabled) {
          globalThis.Stats.add(this.pageNumber, this._stats);
        }
      }
    };
    const internalRenderTask = new InternalRenderTask({
      callback: complete,
      params: {
        canvasContext,
        viewport,
        transform,
        background
      },
      objs: this.objs,
      commonObjs: this.commonObjs,
      annotationCanvasMap,
      operatorList: intentState.operatorList,
      pageIndex: this._pageIndex,
      canvasFactory: this._transport.canvasFactory,
      filterFactory: this._transport.filterFactory,
      useRequestAnimationFrame: !intentPrint,
      pdfBug: this._pdfBug,
      pageColors
    });
    (intentState.renderTasks ||= /* @__PURE__ */ new Set()).add(internalRenderTask);
    const renderTask = internalRenderTask.task;
    Promise.all([intentState.displayReadyCapability.promise, optionalContentConfigPromise]).then(([transparency, optionalContentConfig]) => {
      if (this.destroyed) {
        complete();
        return;
      }
      this._stats?.time("Rendering");
      if (!(optionalContentConfig.renderingIntent & renderingIntent)) {
        throw new Error("Must use the same `intent`-argument when calling the `PDFPageProxy.render` and `PDFDocumentProxy.getOptionalContentConfig` methods.");
      }
      internalRenderTask.initializeGraphics({
        transparency,
        optionalContentConfig
      });
      internalRenderTask.operatorListChanged();
    }).catch(complete);
    return renderTask;
  }
  getOperatorList({
    intent = "display",
    annotationMode = AnnotationMode.ENABLE,
    printAnnotationStorage = null,
    isEditing = false
  } = {}) {
    function operatorListChanged() {
      if (intentState.operatorList.lastChunk) {
        intentState.opListReadCapability.resolve(intentState.operatorList);
        intentState.renderTasks.delete(opListTask);
      }
    }
    const intentArgs = this._transport.getRenderingIntent(intent, annotationMode, printAnnotationStorage, isEditing, true);
    let intentState = this._intentStates.get(intentArgs.cacheKey);
    if (!intentState) {
      intentState = /* @__PURE__ */ Object.create(null);
      this._intentStates.set(intentArgs.cacheKey, intentState);
    }
    let opListTask;
    if (!intentState.opListReadCapability) {
      opListTask = /* @__PURE__ */ Object.create(null);
      opListTask.operatorListChanged = operatorListChanged;
      intentState.opListReadCapability = Promise.withResolvers();
      (intentState.renderTasks ||= /* @__PURE__ */ new Set()).add(opListTask);
      intentState.operatorList = {
        fnArray: [],
        argsArray: [],
        lastChunk: false,
        separateAnnots: null
      };
      this._stats?.time("Page Request");
      this._pumpOperatorList(intentArgs);
    }
    return intentState.opListReadCapability.promise;
  }
  streamTextContent({
    includeMarkedContent = false,
    disableNormalization = false
  } = {}) {
    const TEXT_CONTENT_CHUNK_SIZE = 100;
    return this._transport.messageHandler.sendWithStream("GetTextContent", {
      pageIndex: this._pageIndex,
      includeMarkedContent: includeMarkedContent === true,
      disableNormalization: disableNormalization === true
    }, {
      highWaterMark: TEXT_CONTENT_CHUNK_SIZE,
      size(textContent) {
        return textContent.items.length;
      }
    });
  }
  getTextContent(params = {}) {
    if (this._transport._htmlForXfa) {
      return this.getXfa().then((xfa) => XfaText.textContent(xfa));
    }
    const readableStream = this.streamTextContent(params);
    return new Promise(function(resolve, reject) {
      function pump() {
        reader.read().then(function({
          value,
          done
        }) {
          if (done) {
            resolve(textContent);
            return;
          }
          textContent.lang ??= value.lang;
          Object.assign(textContent.styles, value.styles);
          textContent.items.push(...value.items);
          pump();
        }, reject);
      }
      const reader = readableStream.getReader();
      const textContent = {
        items: [],
        styles: /* @__PURE__ */ Object.create(null),
        lang: null
      };
      pump();
    });
  }
  getStructTree() {
    return this._transport.getStructTree(this._pageIndex);
  }
  _destroy() {
    this.destroyed = true;
    const waitOn = [];
    for (const intentState of this._intentStates.values()) {
      this._abortOperatorList({
        intentState,
        reason: new Error("Page was destroyed."),
        force: true
      });
      if (intentState.opListReadCapability) {
        continue;
      }
      for (const internalRenderTask of intentState.renderTasks) {
        waitOn.push(internalRenderTask.completed);
        internalRenderTask.cancel();
      }
    }
    this.objs.clear();
    this.#pendingCleanup = false;
    this.#abortDelayedCleanup();
    return Promise.all(waitOn);
  }
  cleanup(resetStats = false) {
    this.#pendingCleanup = true;
    const success = this.#tryCleanup(false);
    if (resetStats && success) {
      this._stats &&= new StatTimer();
    }
    return success;
  }
  #tryCleanup(delayed = false) {
    this.#abortDelayedCleanup();
    if (!this.#pendingCleanup || this.destroyed) {
      return false;
    }
    if (delayed) {
      this.#delayedCleanupTimeout = setTimeout(() => {
        this.#delayedCleanupTimeout = null;
        this.#tryCleanup(false);
      }, DELAYED_CLEANUP_TIMEOUT);
      return false;
    }
    for (const {
      renderTasks,
      operatorList
    } of this._intentStates.values()) {
      if (renderTasks.size > 0 || !operatorList.lastChunk) {
        return false;
      }
    }
    this._intentStates.clear();
    this.objs.clear();
    this.#pendingCleanup = false;
    return true;
  }
  #abortDelayedCleanup() {
    if (this.#delayedCleanupTimeout) {
      clearTimeout(this.#delayedCleanupTimeout);
      this.#delayedCleanupTimeout = null;
    }
  }
  _startRenderPage(transparency, cacheKey) {
    const intentState = this._intentStates.get(cacheKey);
    if (!intentState) {
      return;
    }
    this._stats?.timeEnd("Page Request");
    intentState.displayReadyCapability?.resolve(transparency);
  }
  _renderPageChunk(operatorListChunk, intentState) {
    for (let i = 0, ii = operatorListChunk.length; i < ii; i++) {
      intentState.operatorList.fnArray.push(operatorListChunk.fnArray[i]);
      intentState.operatorList.argsArray.push(operatorListChunk.argsArray[i]);
    }
    intentState.operatorList.lastChunk = operatorListChunk.lastChunk;
    intentState.operatorList.separateAnnots = operatorListChunk.separateAnnots;
    for (const internalRenderTask of intentState.renderTasks) {
      internalRenderTask.operatorListChanged();
    }
    if (operatorListChunk.lastChunk) {
      this.#tryCleanup(true);
    }
  }
  _pumpOperatorList({
    renderingIntent,
    cacheKey,
    annotationStorageSerializable,
    modifiedIds
  }) {
    const {
      map,
      transfer
    } = annotationStorageSerializable;
    const readableStream = this._transport.messageHandler.sendWithStream("GetOperatorList", {
      pageIndex: this._pageIndex,
      intent: renderingIntent,
      cacheKey,
      annotationStorage: map,
      modifiedIds
    }, transfer);
    const reader = readableStream.getReader();
    const intentState = this._intentStates.get(cacheKey);
    intentState.streamReader = reader;
    const pump = () => {
      reader.read().then(({
        value,
        done
      }) => {
        if (done) {
          intentState.streamReader = null;
          return;
        }
        if (this._transport.destroyed) {
          return;
        }
        this._renderPageChunk(value, intentState);
        pump();
      }, (reason) => {
        intentState.streamReader = null;
        if (this._transport.destroyed) {
          return;
        }
        if (intentState.operatorList) {
          intentState.operatorList.lastChunk = true;
          for (const internalRenderTask of intentState.renderTasks) {
            internalRenderTask.operatorListChanged();
          }
          this.#tryCleanup(true);
        }
        if (intentState.displayReadyCapability) {
          intentState.displayReadyCapability.reject(reason);
        } else if (intentState.opListReadCapability) {
          intentState.opListReadCapability.reject(reason);
        } else {
          throw reason;
        }
      });
    };
    pump();
  }
  _abortOperatorList({
    intentState,
    reason,
    force = false
  }) {
    if (!intentState.streamReader) {
      return;
    }
    if (intentState.streamReaderCancelTimeout) {
      clearTimeout(intentState.streamReaderCancelTimeout);
      intentState.streamReaderCancelTimeout = null;
    }
    if (!force) {
      if (intentState.renderTasks.size > 0) {
        return;
      }
      if (reason instanceof RenderingCancelledException) {
        let delay = RENDERING_CANCELLED_TIMEOUT;
        if (reason.extraDelay > 0 && reason.extraDelay < 1e3) {
          delay += reason.extraDelay;
        }
        intentState.streamReaderCancelTimeout = setTimeout(() => {
          intentState.streamReaderCancelTimeout = null;
          this._abortOperatorList({
            intentState,
            reason,
            force: true
          });
        }, delay);
        return;
      }
    }
    intentState.streamReader.cancel(new AbortException(reason.message)).catch(() => {
    });
    intentState.streamReader = null;
    if (this._transport.destroyed) {
      return;
    }
    for (const [curCacheKey, curIntentState] of this._intentStates) {
      if (curIntentState === intentState) {
        this._intentStates.delete(curCacheKey);
        break;
      }
    }
    this.cleanup();
  }
  get stats() {
    return this._stats;
  }
};
var LoopbackPort = class {
  #listeners = /* @__PURE__ */ new Set();
  #deferred = Promise.resolve();
  postMessage(obj, transfer) {
    const event = {
      data: structuredClone(obj, transfer ? {
        transfer
      } : null)
    };
    this.#deferred.then(() => {
      for (const listener of this.#listeners) {
        listener.call(this, event);
      }
    });
  }
  addEventListener(name, listener) {
    this.#listeners.add(listener);
  }
  removeEventListener(name, listener) {
    this.#listeners.delete(listener);
  }
  terminate() {
    this.#listeners.clear();
  }
};
var PDFWorkerUtil = {
  isWorkerDisabled: false,
  fakeWorkerId: 0
};
{
  if (isNodeJS) {
    PDFWorkerUtil.isWorkerDisabled = true;
    GlobalWorkerOptions.workerSrc ||= "./pdf.worker.mjs";
  }
  PDFWorkerUtil.isSameOrigin = function(baseUrl, otherUrl) {
    let base;
    try {
      base = new URL(baseUrl);
      if (!base.origin || base.origin === "null") {
        return false;
      }
    } catch {
      return false;
    }
    const other = new URL(otherUrl, base);
    return base.origin === other.origin;
  };
  PDFWorkerUtil.createCDNWrapper = function(url) {
    const wrapper = `await import("${url}");`;
    return URL.createObjectURL(new Blob([wrapper], {
      type: "text/javascript"
    }));
  };
}
var PDFWorker = class _PDFWorker {
  static #workerPorts;
  constructor({
    name = null,
    port = null,
    verbosity: verbosity2 = getVerbosityLevel()
  } = {}) {
    this.name = name;
    this.destroyed = false;
    this.verbosity = verbosity2;
    this._readyCapability = Promise.withResolvers();
    this._port = null;
    this._webWorker = null;
    this._messageHandler = null;
    if (port) {
      if (_PDFWorker.#workerPorts?.has(port)) {
        throw new Error("Cannot use more than one PDFWorker per port.");
      }
      (_PDFWorker.#workerPorts ||= /* @__PURE__ */ new WeakMap()).set(port, this);
      this._initializeFromPort(port);
      return;
    }
    this._initialize();
  }
  get promise() {
    if (isNodeJS) {
      return Promise.all([NodePackages.promise, this._readyCapability.promise]);
    }
    return this._readyCapability.promise;
  }
  #resolve() {
    this._readyCapability.resolve();
    this._messageHandler.send("configure", {
      verbosity: this.verbosity
    });
  }
  get port() {
    return this._port;
  }
  get messageHandler() {
    return this._messageHandler;
  }
  _initializeFromPort(port) {
    this._port = port;
    this._messageHandler = new MessageHandler("main", "worker", port);
    this._messageHandler.on("ready", function() {
    });
    this.#resolve();
  }
  _initialize() {
    if (PDFWorkerUtil.isWorkerDisabled || _PDFWorker.#mainThreadWorkerMessageHandler) {
      this._setupFakeWorker();
      return;
    }
    let {
      workerSrc
    } = _PDFWorker;
    try {
      if (!PDFWorkerUtil.isSameOrigin(window.location.href, workerSrc)) {
        workerSrc = PDFWorkerUtil.createCDNWrapper(new URL(workerSrc, window.location).href);
      }
      const worker = new Worker(workerSrc, {
        type: "module"
      });
      const messageHandler = new MessageHandler("main", "worker", worker);
      const terminateEarly = () => {
        ac.abort();
        messageHandler.destroy();
        worker.terminate();
        if (this.destroyed) {
          this._readyCapability.reject(new Error("Worker was destroyed"));
        } else {
          this._setupFakeWorker();
        }
      };
      const ac = new AbortController();
      worker.addEventListener("error", () => {
        if (!this._webWorker) {
          terminateEarly();
        }
      }, {
        signal: ac.signal
      });
      messageHandler.on("test", (data) => {
        ac.abort();
        if (this.destroyed || !data) {
          terminateEarly();
          return;
        }
        this._messageHandler = messageHandler;
        this._port = worker;
        this._webWorker = worker;
        this.#resolve();
      });
      messageHandler.on("ready", (data) => {
        ac.abort();
        if (this.destroyed) {
          terminateEarly();
          return;
        }
        try {
          sendTest();
        } catch {
          this._setupFakeWorker();
        }
      });
      const sendTest = () => {
        const testObj = new Uint8Array();
        messageHandler.send("test", testObj, [testObj.buffer]);
      };
      sendTest();
      return;
    } catch {
      info("The worker has been disabled.");
    }
    this._setupFakeWorker();
  }
  _setupFakeWorker() {
    if (!PDFWorkerUtil.isWorkerDisabled) {
      warn("Setting up fake worker.");
      PDFWorkerUtil.isWorkerDisabled = true;
    }
    _PDFWorker._setupFakeWorkerGlobal.then((WorkerMessageHandler) => {
      if (this.destroyed) {
        this._readyCapability.reject(new Error("Worker was destroyed"));
        return;
      }
      const port = new LoopbackPort();
      this._port = port;
      const id = `fake${PDFWorkerUtil.fakeWorkerId++}`;
      const workerHandler = new MessageHandler(id + "_worker", id, port);
      WorkerMessageHandler.setup(workerHandler, port);
      this._messageHandler = new MessageHandler(id, id + "_worker", port);
      this.#resolve();
    }).catch((reason) => {
      this._readyCapability.reject(new Error(`Setting up fake worker failed: "${reason.message}".`));
    });
  }
  destroy() {
    this.destroyed = true;
    if (this._webWorker) {
      this._webWorker.terminate();
      this._webWorker = null;
    }
    _PDFWorker.#workerPorts?.delete(this._port);
    this._port = null;
    if (this._messageHandler) {
      this._messageHandler.destroy();
      this._messageHandler = null;
    }
  }
  static fromPort(params) {
    if (!params?.port) {
      throw new Error("PDFWorker.fromPort - invalid method signature.");
    }
    const cachedPort = this.#workerPorts?.get(params.port);
    if (cachedPort) {
      if (cachedPort._pendingDestroy) {
        throw new Error("PDFWorker.fromPort - the worker is being destroyed.\nPlease remember to await `PDFDocumentLoadingTask.destroy()`-calls.");
      }
      return cachedPort;
    }
    return new _PDFWorker(params);
  }
  static get workerSrc() {
    if (GlobalWorkerOptions.workerSrc) {
      return GlobalWorkerOptions.workerSrc;
    }
    throw new Error('No "GlobalWorkerOptions.workerSrc" specified.');
  }
  static get #mainThreadWorkerMessageHandler() {
    try {
      return globalThis.pdfjsWorker?.WorkerMessageHandler || null;
    } catch {
      return null;
    }
  }
  static get _setupFakeWorkerGlobal() {
    const loader = async () => {
      if (this.#mainThreadWorkerMessageHandler) {
        return this.#mainThreadWorkerMessageHandler;
      }
      const worker = await import(
        /*webpackIgnore: true*/
        this.workerSrc
      );
      return worker.WorkerMessageHandler;
    };
    return shadow(this, "_setupFakeWorkerGlobal", loader());
  }
};
var WorkerTransport = class {
  #methodPromises = /* @__PURE__ */ new Map();
  #pageCache = /* @__PURE__ */ new Map();
  #pagePromises = /* @__PURE__ */ new Map();
  #pageRefCache = /* @__PURE__ */ new Map();
  #passwordCapability = null;
  constructor(messageHandler, loadingTask, networkStream, params, factory) {
    this.messageHandler = messageHandler;
    this.loadingTask = loadingTask;
    this.commonObjs = new PDFObjects();
    this.fontLoader = new FontLoader({
      ownerDocument: params.ownerDocument,
      styleElement: params.styleElement
    });
    this.loadingParams = params.loadingParams;
    this._params = params;
    this.canvasFactory = factory.canvasFactory;
    this.filterFactory = factory.filterFactory;
    this.cMapReaderFactory = factory.cMapReaderFactory;
    this.standardFontDataFactory = factory.standardFontDataFactory;
    this.destroyed = false;
    this.destroyCapability = null;
    this._networkStream = networkStream;
    this._fullReader = null;
    this._lastProgress = null;
    this.downloadInfoCapability = Promise.withResolvers();
    this.setupMessageHandler();
  }
  #cacheSimpleMethod(name, data = null) {
    const cachedPromise = this.#methodPromises.get(name);
    if (cachedPromise) {
      return cachedPromise;
    }
    const promise = this.messageHandler.sendWithPromise(name, data);
    this.#methodPromises.set(name, promise);
    return promise;
  }
  get annotationStorage() {
    return shadow(this, "annotationStorage", new AnnotationStorage());
  }
  getRenderingIntent(intent, annotationMode = AnnotationMode.ENABLE, printAnnotationStorage = null, isEditing = false, isOpList = false) {
    let renderingIntent = RenderingIntentFlag.DISPLAY;
    let annotationStorageSerializable = SerializableEmpty;
    switch (intent) {
      case "any":
        renderingIntent = RenderingIntentFlag.ANY;
        break;
      case "display":
        break;
      case "print":
        renderingIntent = RenderingIntentFlag.PRINT;
        break;
      default:
        warn(`getRenderingIntent - invalid intent: ${intent}`);
    }
    const annotationStorage = renderingIntent & RenderingIntentFlag.PRINT && printAnnotationStorage instanceof PrintAnnotationStorage ? printAnnotationStorage : this.annotationStorage;
    switch (annotationMode) {
      case AnnotationMode.DISABLE:
        renderingIntent += RenderingIntentFlag.ANNOTATIONS_DISABLE;
        break;
      case AnnotationMode.ENABLE:
        break;
      case AnnotationMode.ENABLE_FORMS:
        renderingIntent += RenderingIntentFlag.ANNOTATIONS_FORMS;
        break;
      case AnnotationMode.ENABLE_STORAGE:
        renderingIntent += RenderingIntentFlag.ANNOTATIONS_STORAGE;
        annotationStorageSerializable = annotationStorage.serializable;
        break;
      default:
        warn(`getRenderingIntent - invalid annotationMode: ${annotationMode}`);
    }
    if (isEditing) {
      renderingIntent += RenderingIntentFlag.IS_EDITING;
    }
    if (isOpList) {
      renderingIntent += RenderingIntentFlag.OPLIST;
    }
    const {
      ids: modifiedIds,
      hash: modifiedIdsHash
    } = annotationStorage.modifiedIds;
    const cacheKeyBuf = [renderingIntent, annotationStorageSerializable.hash, modifiedIdsHash];
    return {
      renderingIntent,
      cacheKey: cacheKeyBuf.join("_"),
      annotationStorageSerializable,
      modifiedIds
    };
  }
  destroy() {
    if (this.destroyCapability) {
      return this.destroyCapability.promise;
    }
    this.destroyed = true;
    this.destroyCapability = Promise.withResolvers();
    this.#passwordCapability?.reject(new Error("Worker was destroyed during onPassword callback"));
    const waitOn = [];
    for (const page of this.#pageCache.values()) {
      waitOn.push(page._destroy());
    }
    this.#pageCache.clear();
    this.#pagePromises.clear();
    this.#pageRefCache.clear();
    if (this.hasOwnProperty("annotationStorage")) {
      this.annotationStorage.resetModified();
    }
    const terminated = this.messageHandler.sendWithPromise("Terminate", null);
    waitOn.push(terminated);
    Promise.all(waitOn).then(() => {
      this.commonObjs.clear();
      this.fontLoader.clear();
      this.#methodPromises.clear();
      this.filterFactory.destroy();
      TextLayer.cleanup();
      this._networkStream?.cancelAllRequests(new AbortException("Worker was terminated."));
      if (this.messageHandler) {
        this.messageHandler.destroy();
        this.messageHandler = null;
      }
      this.destroyCapability.resolve();
    }, this.destroyCapability.reject);
    return this.destroyCapability.promise;
  }
  setupMessageHandler() {
    const {
      messageHandler,
      loadingTask
    } = this;
    messageHandler.on("GetReader", (data, sink) => {
      assert(this._networkStream, "GetReader - no `IPDFStream` instance available.");
      this._fullReader = this._networkStream.getFullReader();
      this._fullReader.onProgress = (evt) => {
        this._lastProgress = {
          loaded: evt.loaded,
          total: evt.total
        };
      };
      sink.onPull = () => {
        this._fullReader.read().then(function({
          value,
          done
        }) {
          if (done) {
            sink.close();
            return;
          }
          assert(value instanceof ArrayBuffer, "GetReader - expected an ArrayBuffer.");
          sink.enqueue(new Uint8Array(value), 1, [value]);
        }).catch((reason) => {
          sink.error(reason);
        });
      };
      sink.onCancel = (reason) => {
        this._fullReader.cancel(reason);
        sink.ready.catch((readyReason) => {
          if (this.destroyed) {
            return;
          }
          throw readyReason;
        });
      };
    });
    messageHandler.on("ReaderHeadersReady", (data) => {
      const headersCapability = Promise.withResolvers();
      const fullReader = this._fullReader;
      fullReader.headersReady.then(() => {
        if (!fullReader.isStreamingSupported || !fullReader.isRangeSupported) {
          if (this._lastProgress) {
            loadingTask.onProgress?.(this._lastProgress);
          }
          fullReader.onProgress = (evt) => {
            loadingTask.onProgress?.({
              loaded: evt.loaded,
              total: evt.total
            });
          };
        }
        headersCapability.resolve({
          isStreamingSupported: fullReader.isStreamingSupported,
          isRangeSupported: fullReader.isRangeSupported,
          contentLength: fullReader.contentLength
        });
      }, headersCapability.reject);
      return headersCapability.promise;
    });
    messageHandler.on("GetRangeReader", (data, sink) => {
      assert(this._networkStream, "GetRangeReader - no `IPDFStream` instance available.");
      const rangeReader = this._networkStream.getRangeReader(data.begin, data.end);
      if (!rangeReader) {
        sink.close();
        return;
      }
      sink.onPull = () => {
        rangeReader.read().then(function({
          value,
          done
        }) {
          if (done) {
            sink.close();
            return;
          }
          assert(value instanceof ArrayBuffer, "GetRangeReader - expected an ArrayBuffer.");
          sink.enqueue(new Uint8Array(value), 1, [value]);
        }).catch((reason) => {
          sink.error(reason);
        });
      };
      sink.onCancel = (reason) => {
        rangeReader.cancel(reason);
        sink.ready.catch((readyReason) => {
          if (this.destroyed) {
            return;
          }
          throw readyReason;
        });
      };
    });
    messageHandler.on("GetDoc", ({
      pdfInfo
    }) => {
      this._numPages = pdfInfo.numPages;
      this._htmlForXfa = pdfInfo.htmlForXfa;
      delete pdfInfo.htmlForXfa;
      loadingTask._capability.resolve(new PDFDocumentProxy(pdfInfo, this));
    });
    messageHandler.on("DocException", function(ex) {
      let reason;
      switch (ex.name) {
        case "PasswordException":
          reason = new PasswordException(ex.message, ex.code);
          break;
        case "InvalidPDFException":
          reason = new InvalidPDFException(ex.message);
          break;
        case "MissingPDFException":
          reason = new MissingPDFException(ex.message);
          break;
        case "UnexpectedResponseException":
          reason = new UnexpectedResponseException(ex.message, ex.status);
          break;
        case "UnknownErrorException":
          reason = new UnknownErrorException(ex.message, ex.details);
          break;
        default:
          unreachable("DocException - expected a valid Error.");
      }
      loadingTask._capability.reject(reason);
    });
    messageHandler.on("PasswordRequest", (exception) => {
      this.#passwordCapability = Promise.withResolvers();
      if (loadingTask.onPassword) {
        const updatePassword = (password) => {
          if (password instanceof Error) {
            this.#passwordCapability.reject(password);
          } else {
            this.#passwordCapability.resolve({
              password
            });
          }
        };
        try {
          loadingTask.onPassword(updatePassword, exception.code);
        } catch (ex) {
          this.#passwordCapability.reject(ex);
        }
      } else {
        this.#passwordCapability.reject(new PasswordException(exception.message, exception.code));
      }
      return this.#passwordCapability.promise;
    });
    messageHandler.on("DataLoaded", (data) => {
      loadingTask.onProgress?.({
        loaded: data.length,
        total: data.length
      });
      this.downloadInfoCapability.resolve(data);
    });
    messageHandler.on("StartRenderPage", (data) => {
      if (this.destroyed) {
        return;
      }
      const page = this.#pageCache.get(data.pageIndex);
      page._startRenderPage(data.transparency, data.cacheKey);
    });
    messageHandler.on("commonobj", ([id, type, exportedData]) => {
      if (this.destroyed) {
        return null;
      }
      if (this.commonObjs.has(id)) {
        return null;
      }
      switch (type) {
        case "Font":
          const {
            disableFontFace,
            fontExtraProperties,
            pdfBug
          } = this._params;
          if ("error" in exportedData) {
            const exportedError = exportedData.error;
            warn(`Error during font loading: ${exportedError}`);
            this.commonObjs.resolve(id, exportedError);
            break;
          }
          const inspectFont = pdfBug && globalThis.FontInspector?.enabled ? (font2, url) => globalThis.FontInspector.fontAdded(font2, url) : null;
          const font = new FontFaceObject(exportedData, {
            disableFontFace,
            inspectFont
          });
          this.fontLoader.bind(font).catch(() => messageHandler.sendWithPromise("FontFallback", {
            id
          })).finally(() => {
            if (!fontExtraProperties && font.data) {
              font.data = null;
            }
            this.commonObjs.resolve(id, font);
          });
          break;
        case "CopyLocalImage":
          const {
            imageRef
          } = exportedData;
          assert(imageRef, "The imageRef must be defined.");
          for (const pageProxy of this.#pageCache.values()) {
            for (const [, data] of pageProxy.objs) {
              if (data?.ref !== imageRef) {
                continue;
              }
              if (!data.dataLen) {
                return null;
              }
              this.commonObjs.resolve(id, structuredClone(data));
              return data.dataLen;
            }
          }
          break;
        case "FontPath":
        case "Image":
        case "Pattern":
          this.commonObjs.resolve(id, exportedData);
          break;
        default:
          throw new Error(`Got unknown common object type ${type}`);
      }
      return null;
    });
    messageHandler.on("obj", ([id, pageIndex, type, imageData]) => {
      if (this.destroyed) {
        return;
      }
      const pageProxy = this.#pageCache.get(pageIndex);
      if (pageProxy.objs.has(id)) {
        return;
      }
      if (pageProxy._intentStates.size === 0) {
        imageData?.bitmap?.close();
        return;
      }
      switch (type) {
        case "Image":
          pageProxy.objs.resolve(id, imageData);
          if (imageData?.dataLen > MAX_IMAGE_SIZE_TO_CACHE) {
            pageProxy._maybeCleanupAfterRender = true;
          }
          break;
        case "Pattern":
          pageProxy.objs.resolve(id, imageData);
          break;
        default:
          throw new Error(`Got unknown object type ${type}`);
      }
    });
    messageHandler.on("DocProgress", (data) => {
      if (this.destroyed) {
        return;
      }
      loadingTask.onProgress?.({
        loaded: data.loaded,
        total: data.total
      });
    });
    messageHandler.on("FetchBuiltInCMap", (data) => {
      if (this.destroyed) {
        return Promise.reject(new Error("Worker was destroyed."));
      }
      if (!this.cMapReaderFactory) {
        return Promise.reject(new Error("CMapReaderFactory not initialized, see the `useWorkerFetch` parameter."));
      }
      return this.cMapReaderFactory.fetch(data);
    });
    messageHandler.on("FetchStandardFontData", (data) => {
      if (this.destroyed) {
        return Promise.reject(new Error("Worker was destroyed."));
      }
      if (!this.standardFontDataFactory) {
        return Promise.reject(new Error("StandardFontDataFactory not initialized, see the `useWorkerFetch` parameter."));
      }
      return this.standardFontDataFactory.fetch(data);
    });
  }
  getData() {
    return this.messageHandler.sendWithPromise("GetData", null);
  }
  saveDocument() {
    if (this.annotationStorage.size <= 0) {
      warn("saveDocument called while `annotationStorage` is empty, please use the getData-method instead.");
    }
    const {
      map,
      transfer
    } = this.annotationStorage.serializable;
    return this.messageHandler.sendWithPromise("SaveDocument", {
      isPureXfa: !!this._htmlForXfa,
      numPages: this._numPages,
      annotationStorage: map,
      filename: this._fullReader?.filename ?? null
    }, transfer).finally(() => {
      this.annotationStorage.resetModified();
    });
  }
  getPage(pageNumber) {
    if (!Number.isInteger(pageNumber) || pageNumber <= 0 || pageNumber > this._numPages) {
      return Promise.reject(new Error("Invalid page request."));
    }
    const pageIndex = pageNumber - 1, cachedPromise = this.#pagePromises.get(pageIndex);
    if (cachedPromise) {
      return cachedPromise;
    }
    const promise = this.messageHandler.sendWithPromise("GetPage", {
      pageIndex
    }).then((pageInfo) => {
      if (this.destroyed) {
        throw new Error("Transport destroyed");
      }
      if (pageInfo.refStr) {
        this.#pageRefCache.set(pageInfo.refStr, pageNumber);
      }
      const page = new PDFPageProxy(pageIndex, pageInfo, this, this._params.pdfBug);
      this.#pageCache.set(pageIndex, page);
      return page;
    });
    this.#pagePromises.set(pageIndex, promise);
    return promise;
  }
  getPageIndex(ref) {
    if (!isRefProxy(ref)) {
      return Promise.reject(new Error("Invalid pageIndex request."));
    }
    return this.messageHandler.sendWithPromise("GetPageIndex", {
      num: ref.num,
      gen: ref.gen
    });
  }
  getAnnotations(pageIndex, intent) {
    return this.messageHandler.sendWithPromise("GetAnnotations", {
      pageIndex,
      intent
    });
  }
  getFieldObjects() {
    return this.#cacheSimpleMethod("GetFieldObjects");
  }
  hasJSActions() {
    return this.#cacheSimpleMethod("HasJSActions");
  }
  getCalculationOrderIds() {
    return this.messageHandler.sendWithPromise("GetCalculationOrderIds", null);
  }
  getDestinations() {
    return this.messageHandler.sendWithPromise("GetDestinations", null);
  }
  getDestination(id) {
    if (typeof id !== "string") {
      return Promise.reject(new Error("Invalid destination request."));
    }
    return this.messageHandler.sendWithPromise("GetDestination", {
      id
    });
  }
  getPageLabels() {
    return this.messageHandler.sendWithPromise("GetPageLabels", null);
  }
  getPageLayout() {
    return this.messageHandler.sendWithPromise("GetPageLayout", null);
  }
  getPageMode() {
    return this.messageHandler.sendWithPromise("GetPageMode", null);
  }
  getViewerPreferences() {
    return this.messageHandler.sendWithPromise("GetViewerPreferences", null);
  }
  getOpenAction() {
    return this.messageHandler.sendWithPromise("GetOpenAction", null);
  }
  getAttachments() {
    return this.messageHandler.sendWithPromise("GetAttachments", null);
  }
  getDocJSActions() {
    return this.#cacheSimpleMethod("GetDocJSActions");
  }
  getPageJSActions(pageIndex) {
    return this.messageHandler.sendWithPromise("GetPageJSActions", {
      pageIndex
    });
  }
  getStructTree(pageIndex) {
    return this.messageHandler.sendWithPromise("GetStructTree", {
      pageIndex
    });
  }
  getOutline() {
    return this.messageHandler.sendWithPromise("GetOutline", null);
  }
  getOptionalContentConfig(renderingIntent) {
    return this.#cacheSimpleMethod("GetOptionalContentConfig").then((data) => new OptionalContentConfig(data, renderingIntent));
  }
  getPermissions() {
    return this.messageHandler.sendWithPromise("GetPermissions", null);
  }
  getMetadata() {
    const name = "GetMetadata", cachedPromise = this.#methodPromises.get(name);
    if (cachedPromise) {
      return cachedPromise;
    }
    const promise = this.messageHandler.sendWithPromise(name, null).then((results) => ({
      info: results[0],
      metadata: results[1] ? new Metadata(results[1]) : null,
      contentDispositionFilename: this._fullReader?.filename ?? null,
      contentLength: this._fullReader?.contentLength ?? null
    }));
    this.#methodPromises.set(name, promise);
    return promise;
  }
  getMarkInfo() {
    return this.messageHandler.sendWithPromise("GetMarkInfo", null);
  }
  async startCleanup(keepLoadedFonts = false) {
    if (this.destroyed) {
      return;
    }
    await this.messageHandler.sendWithPromise("Cleanup", null);
    for (const page of this.#pageCache.values()) {
      const cleanupSuccessful = page.cleanup();
      if (!cleanupSuccessful) {
        throw new Error(`startCleanup: Page ${page.pageNumber} is currently rendering.`);
      }
    }
    this.commonObjs.clear();
    if (!keepLoadedFonts) {
      this.fontLoader.clear();
    }
    this.#methodPromises.clear();
    this.filterFactory.destroy(true);
    TextLayer.cleanup();
  }
  cachedPageNumber(ref) {
    if (!isRefProxy(ref)) {
      return null;
    }
    const refStr = ref.gen === 0 ? `${ref.num}R` : `${ref.num}R${ref.gen}`;
    return this.#pageRefCache.get(refStr) ?? null;
  }
};
var INITIAL_DATA = Symbol("INITIAL_DATA");
var PDFObjects = class {
  #objs = /* @__PURE__ */ Object.create(null);
  #ensureObj(objId) {
    return this.#objs[objId] ||= {
      ...Promise.withResolvers(),
      data: INITIAL_DATA
    };
  }
  get(objId, callback = null) {
    if (callback) {
      const obj2 = this.#ensureObj(objId);
      obj2.promise.then(() => callback(obj2.data));
      return null;
    }
    const obj = this.#objs[objId];
    if (!obj || obj.data === INITIAL_DATA) {
      throw new Error(`Requesting object that isn't resolved yet ${objId}.`);
    }
    return obj.data;
  }
  has(objId) {
    const obj = this.#objs[objId];
    return !!obj && obj.data !== INITIAL_DATA;
  }
  resolve(objId, data = null) {
    const obj = this.#ensureObj(objId);
    obj.data = data;
    obj.resolve();
  }
  clear() {
    for (const objId in this.#objs) {
      const {
        data
      } = this.#objs[objId];
      data?.bitmap?.close();
    }
    this.#objs = /* @__PURE__ */ Object.create(null);
  }
  *[Symbol.iterator]() {
    for (const objId in this.#objs) {
      const {
        data
      } = this.#objs[objId];
      if (data === INITIAL_DATA) {
        continue;
      }
      yield [objId, data];
    }
  }
};
var RenderTask = class {
  #internalRenderTask = null;
  constructor(internalRenderTask) {
    this.#internalRenderTask = internalRenderTask;
    this.onContinue = null;
  }
  get promise() {
    return this.#internalRenderTask.capability.promise;
  }
  cancel(extraDelay = 0) {
    this.#internalRenderTask.cancel(null, extraDelay);
  }
  get separateAnnots() {
    const {
      separateAnnots
    } = this.#internalRenderTask.operatorList;
    if (!separateAnnots) {
      return false;
    }
    const {
      annotationCanvasMap
    } = this.#internalRenderTask;
    return separateAnnots.form || separateAnnots.canvas && annotationCanvasMap?.size > 0;
  }
};
var InternalRenderTask = class _InternalRenderTask {
  #rAF = null;
  static #canvasInUse = /* @__PURE__ */ new WeakSet();
  constructor({
    callback,
    params,
    objs,
    commonObjs,
    annotationCanvasMap,
    operatorList,
    pageIndex,
    canvasFactory,
    filterFactory,
    useRequestAnimationFrame = false,
    pdfBug = false,
    pageColors = null
  }) {
    this.callback = callback;
    this.params = params;
    this.objs = objs;
    this.commonObjs = commonObjs;
    this.annotationCanvasMap = annotationCanvasMap;
    this.operatorListIdx = null;
    this.operatorList = operatorList;
    this._pageIndex = pageIndex;
    this.canvasFactory = canvasFactory;
    this.filterFactory = filterFactory;
    this._pdfBug = pdfBug;
    this.pageColors = pageColors;
    this.running = false;
    this.graphicsReadyCallback = null;
    this.graphicsReady = false;
    this._useRequestAnimationFrame = useRequestAnimationFrame === true && typeof window !== "undefined";
    this.cancelled = false;
    this.capability = Promise.withResolvers();
    this.task = new RenderTask(this);
    this._cancelBound = this.cancel.bind(this);
    this._continueBound = this._continue.bind(this);
    this._scheduleNextBound = this._scheduleNext.bind(this);
    this._nextBound = this._next.bind(this);
    this._canvas = params.canvasContext.canvas;
  }
  get completed() {
    return this.capability.promise.catch(function() {
    });
  }
  initializeGraphics({
    transparency = false,
    optionalContentConfig
  }) {
    if (this.cancelled) {
      return;
    }
    if (this._canvas) {
      if (_InternalRenderTask.#canvasInUse.has(this._canvas)) {
        throw new Error("Cannot use the same canvas during multiple render() operations. Use different canvas or ensure previous operations were cancelled or completed.");
      }
      _InternalRenderTask.#canvasInUse.add(this._canvas);
    }
    if (this._pdfBug && globalThis.StepperManager?.enabled) {
      this.stepper = globalThis.StepperManager.create(this._pageIndex);
      this.stepper.init(this.operatorList);
      this.stepper.nextBreakPoint = this.stepper.getNextBreakPoint();
    }
    const {
      canvasContext,
      viewport,
      transform,
      background
    } = this.params;
    this.gfx = new CanvasGraphics(canvasContext, this.commonObjs, this.objs, this.canvasFactory, this.filterFactory, {
      optionalContentConfig
    }, this.annotationCanvasMap, this.pageColors);
    this.gfx.beginDrawing({
      transform,
      viewport,
      transparency,
      background
    });
    this.operatorListIdx = 0;
    this.graphicsReady = true;
    this.graphicsReadyCallback?.();
  }
  cancel(error = null, extraDelay = 0) {
    this.running = false;
    this.cancelled = true;
    this.gfx?.endDrawing();
    if (this.#rAF) {
      window.cancelAnimationFrame(this.#rAF);
      this.#rAF = null;
    }
    _InternalRenderTask.#canvasInUse.delete(this._canvas);
    this.callback(error || new RenderingCancelledException(`Rendering cancelled, page ${this._pageIndex + 1}`, extraDelay));
  }
  operatorListChanged() {
    if (!this.graphicsReady) {
      this.graphicsReadyCallback ||= this._continueBound;
      return;
    }
    this.stepper?.updateOperatorList(this.operatorList);
    if (this.running) {
      return;
    }
    this._continue();
  }
  _continue() {
    this.running = true;
    if (this.cancelled) {
      return;
    }
    if (this.task.onContinue) {
      this.task.onContinue(this._scheduleNextBound);
    } else {
      this._scheduleNext();
    }
  }
  _scheduleNext() {
    if (this._useRequestAnimationFrame) {
      this.#rAF = window.requestAnimationFrame(() => {
        this.#rAF = null;
        this._nextBound().catch(this._cancelBound);
      });
    } else {
      Promise.resolve().then(this._nextBound).catch(this._cancelBound);
    }
  }
  async _next() {
    if (this.cancelled) {
      return;
    }
    this.operatorListIdx = this.gfx.executeOperatorList(this.operatorList, this.operatorListIdx, this._continueBound, this.stepper);
    if (this.operatorListIdx === this.operatorList.argsArray.length) {
      this.running = false;
      if (this.operatorList.lastChunk) {
        this.gfx.endDrawing();
        _InternalRenderTask.#canvasInUse.delete(this._canvas);
        this.callback();
      }
    }
  }
};
var version = "4.5.136";
var build = "3a21f03b0";
function makeColorComp(n) {
  return Math.floor(Math.max(0, Math.min(1, n)) * 255).toString(16).padStart(2, "0");
}
function scaleAndClamp(x) {
  return Math.max(0, Math.min(255, 255 * x));
}
var ColorConverters = class {
  static CMYK_G([c, y, m, k]) {
    return ["G", 1 - Math.min(1, 0.3 * c + 0.59 * m + 0.11 * y + k)];
  }
  static G_CMYK([g]) {
    return ["CMYK", 0, 0, 0, 1 - g];
  }
  static G_RGB([g]) {
    return ["RGB", g, g, g];
  }
  static G_rgb([g]) {
    g = scaleAndClamp(g);
    return [g, g, g];
  }
  static G_HTML([g]) {
    const G = makeColorComp(g);
    return `#${G}${G}${G}`;
  }
  static RGB_G([r, g, b]) {
    return ["G", 0.3 * r + 0.59 * g + 0.11 * b];
  }
  static RGB_rgb(color) {
    return color.map(scaleAndClamp);
  }
  static RGB_HTML(color) {
    return `#${color.map(makeColorComp).join("")}`;
  }
  static T_HTML() {
    return "#00000000";
  }
  static T_rgb() {
    return [null];
  }
  static CMYK_RGB([c, y, m, k]) {
    return ["RGB", 1 - Math.min(1, c + k), 1 - Math.min(1, m + k), 1 - Math.min(1, y + k)];
  }
  static CMYK_rgb([c, y, m, k]) {
    return [scaleAndClamp(1 - Math.min(1, c + k)), scaleAndClamp(1 - Math.min(1, m + k)), scaleAndClamp(1 - Math.min(1, y + k))];
  }
  static CMYK_HTML(components) {
    const rgb = this.CMYK_RGB(components).slice(1);
    return this.RGB_HTML(rgb);
  }
  static RGB_CMYK([r, g, b]) {
    const c = 1 - r;
    const m = 1 - g;
    const y = 1 - b;
    const k = Math.min(c, m, y);
    return ["CMYK", c, m, y, k];
  }
};
var XfaLayer = class {
  static setupStorage(html, id, element, storage, intent) {
    const storedData = storage.getValue(id, {
      value: null
    });
    switch (element.name) {
      case "textarea":
        if (storedData.value !== null) {
          html.textContent = storedData.value;
        }
        if (intent === "print") {
          break;
        }
        html.addEventListener("input", (event) => {
          storage.setValue(id, {
            value: event.target.value
          });
        });
        break;
      case "input":
        if (element.attributes.type === "radio" || element.attributes.type === "checkbox") {
          if (storedData.value === element.attributes.xfaOn) {
            html.setAttribute("checked", true);
          } else if (storedData.value === element.attributes.xfaOff) {
            html.removeAttribute("checked");
          }
          if (intent === "print") {
            break;
          }
          html.addEventListener("change", (event) => {
            storage.setValue(id, {
              value: event.target.checked ? event.target.getAttribute("xfaOn") : event.target.getAttribute("xfaOff")
            });
          });
        } else {
          if (storedData.value !== null) {
            html.setAttribute("value", storedData.value);
          }
          if (intent === "print") {
            break;
          }
          html.addEventListener("input", (event) => {
            storage.setValue(id, {
              value: event.target.value
            });
          });
        }
        break;
      case "select":
        if (storedData.value !== null) {
          html.setAttribute("value", storedData.value);
          for (const option of element.children) {
            if (option.attributes.value === storedData.value) {
              option.attributes.selected = true;
            } else if (option.attributes.hasOwnProperty("selected")) {
              delete option.attributes.selected;
            }
          }
        }
        html.addEventListener("input", (event) => {
          const options = event.target.options;
          const value = options.selectedIndex === -1 ? "" : options[options.selectedIndex].value;
          storage.setValue(id, {
            value
          });
        });
        break;
    }
  }
  static setAttributes({
    html,
    element,
    storage = null,
    intent,
    linkService
  }) {
    const {
      attributes
    } = element;
    const isHTMLAnchorElement = html instanceof HTMLAnchorElement;
    if (attributes.type === "radio") {
      attributes.name = `${attributes.name}-${intent}`;
    }
    for (const [key, value] of Object.entries(attributes)) {
      if (value === null || value === void 0) {
        continue;
      }
      switch (key) {
        case "class":
          if (value.length) {
            html.setAttribute(key, value.join(" "));
          }
          break;
        case "dataId":
          break;
        case "id":
          html.setAttribute("data-element-id", value);
          break;
        case "style":
          Object.assign(html.style, value);
          break;
        case "textContent":
          html.textContent = value;
          break;
        default:
          if (!isHTMLAnchorElement || key !== "href" && key !== "newWindow") {
            html.setAttribute(key, value);
          }
      }
    }
    if (isHTMLAnchorElement) {
      linkService.addLinkAttributes(html, attributes.href, attributes.newWindow);
    }
    if (storage && attributes.dataId) {
      this.setupStorage(html, attributes.dataId, element, storage);
    }
  }
  static render(parameters) {
    const storage = parameters.annotationStorage;
    const linkService = parameters.linkService;
    const root = parameters.xfaHtml;
    const intent = parameters.intent || "display";
    const rootHtml = document.createElement(root.name);
    if (root.attributes) {
      this.setAttributes({
        html: rootHtml,
        element: root,
        intent,
        linkService
      });
    }
    const isNotForRichText = intent !== "richText";
    const rootDiv = parameters.div;
    rootDiv.append(rootHtml);
    if (parameters.viewport) {
      const transform = `matrix(${parameters.viewport.transform.join(",")})`;
      rootDiv.style.transform = transform;
    }
    if (isNotForRichText) {
      rootDiv.setAttribute("class", "xfaLayer xfaFont");
    }
    const textDivs = [];
    if (root.children.length === 0) {
      if (root.value) {
        const node = document.createTextNode(root.value);
        rootHtml.append(node);
        if (isNotForRichText && XfaText.shouldBuildText(root.name)) {
          textDivs.push(node);
        }
      }
      return {
        textDivs
      };
    }
    const stack = [[root, -1, rootHtml]];
    while (stack.length > 0) {
      const [parent, i, html] = stack.at(-1);
      if (i + 1 === parent.children.length) {
        stack.pop();
        continue;
      }
      const child = parent.children[++stack.at(-1)[1]];
      if (child === null) {
        continue;
      }
      const {
        name
      } = child;
      if (name === "#text") {
        const node = document.createTextNode(child.value);
        textDivs.push(node);
        html.append(node);
        continue;
      }
      const childHtml = child?.attributes?.xmlns ? document.createElementNS(child.attributes.xmlns, name) : document.createElement(name);
      html.append(childHtml);
      if (child.attributes) {
        this.setAttributes({
          html: childHtml,
          element: child,
          storage,
          intent,
          linkService
        });
      }
      if (child.children?.length > 0) {
        stack.push([child, -1, childHtml]);
      } else if (child.value) {
        const node = document.createTextNode(child.value);
        if (isNotForRichText && XfaText.shouldBuildText(name)) {
          textDivs.push(node);
        }
        childHtml.append(node);
      }
    }
    for (const el of rootDiv.querySelectorAll(".xfaNonInteractive input, .xfaNonInteractive textarea")) {
      el.setAttribute("readOnly", true);
    }
    return {
      textDivs
    };
  }
  static update(parameters) {
    const transform = `matrix(${parameters.viewport.transform.join(",")})`;
    parameters.div.style.transform = transform;
    parameters.div.hidden = false;
  }
};
var DEFAULT_TAB_INDEX = 1e3;
var annotation_layer_DEFAULT_FONT_SIZE = 9;
var GetElementsByNameSet = /* @__PURE__ */ new WeakSet();
function getRectDims(rect) {
  return {
    width: rect[2] - rect[0],
    height: rect[3] - rect[1]
  };
}
var AnnotationElementFactory = class {
  static create(parameters) {
    const subtype = parameters.data.annotationType;
    switch (subtype) {
      case AnnotationType.LINK:
        return new LinkAnnotationElement(parameters);
      case AnnotationType.TEXT:
        return new TextAnnotationElement(parameters);
      case AnnotationType.WIDGET:
        const fieldType = parameters.data.fieldType;
        switch (fieldType) {
          case "Tx":
            return new TextWidgetAnnotationElement(parameters);
          case "Btn":
            if (parameters.data.radioButton) {
              return new RadioButtonWidgetAnnotationElement(parameters);
            } else if (parameters.data.checkBox) {
              return new CheckboxWidgetAnnotationElement(parameters);
            }
            return new PushButtonWidgetAnnotationElement(parameters);
          case "Ch":
            return new ChoiceWidgetAnnotationElement(parameters);
          case "Sig":
            return new SignatureWidgetAnnotationElement(parameters);
        }
        return new WidgetAnnotationElement(parameters);
      case AnnotationType.POPUP:
        return new PopupAnnotationElement(parameters);
      case AnnotationType.FREETEXT:
        return new FreeTextAnnotationElement(parameters);
      case AnnotationType.LINE:
        return new LineAnnotationElement(parameters);
      case AnnotationType.SQUARE:
        return new SquareAnnotationElement(parameters);
      case AnnotationType.CIRCLE:
        return new CircleAnnotationElement(parameters);
      case AnnotationType.POLYLINE:
        return new PolylineAnnotationElement(parameters);
      case AnnotationType.CARET:
        return new CaretAnnotationElement(parameters);
      case AnnotationType.INK:
        return new InkAnnotationElement(parameters);
      case AnnotationType.POLYGON:
        return new PolygonAnnotationElement(parameters);
      case AnnotationType.HIGHLIGHT:
        return new HighlightAnnotationElement(parameters);
      case AnnotationType.UNDERLINE:
        return new UnderlineAnnotationElement(parameters);
      case AnnotationType.SQUIGGLY:
        return new SquigglyAnnotationElement(parameters);
      case AnnotationType.STRIKEOUT:
        return new StrikeOutAnnotationElement(parameters);
      case AnnotationType.STAMP:
        return new StampAnnotationElement(parameters);
      case AnnotationType.FILEATTACHMENT:
        return new FileAttachmentAnnotationElement(parameters);
      default:
        return new AnnotationElement(parameters);
    }
  }
};
var AnnotationElement = class _AnnotationElement {
  #updates = null;
  #hasBorder = false;
  #popupElement = null;
  constructor(parameters, {
    isRenderable = false,
    ignoreBorder = false,
    createQuadrilaterals = false
  } = {}) {
    this.isRenderable = isRenderable;
    this.data = parameters.data;
    this.layer = parameters.layer;
    this.linkService = parameters.linkService;
    this.downloadManager = parameters.downloadManager;
    this.imageResourcesPath = parameters.imageResourcesPath;
    this.renderForms = parameters.renderForms;
    this.svgFactory = parameters.svgFactory;
    this.annotationStorage = parameters.annotationStorage;
    this.enableScripting = parameters.enableScripting;
    this.hasJSActions = parameters.hasJSActions;
    this._fieldObjects = parameters.fieldObjects;
    this.parent = parameters.parent;
    if (isRenderable) {
      this.container = this._createContainer(ignoreBorder);
    }
    if (createQuadrilaterals) {
      this._createQuadrilaterals();
    }
  }
  static _hasPopupData({
    titleObj,
    contentsObj,
    richText
  }) {
    return !!(titleObj?.str || contentsObj?.str || richText?.str);
  }
  get _isEditable() {
    return this.data.isEditable;
  }
  get hasPopupData() {
    return _AnnotationElement._hasPopupData(this.data);
  }
  updateEdited(params) {
    if (!this.container) {
      return;
    }
    this.#updates ||= {
      rect: this.data.rect.slice(0)
    };
    const {
      rect
    } = params;
    if (rect) {
      this.#setRectEdited(rect);
    }
    this.#popupElement?.popup.updateEdited(params);
  }
  resetEdited() {
    if (!this.#updates) {
      return;
    }
    this.#setRectEdited(this.#updates.rect);
    this.#popupElement?.popup.resetEdited();
    this.#updates = null;
  }
  #setRectEdited(rect) {
    const {
      container: {
        style
      },
      data: {
        rect: currentRect,
        rotation
      },
      parent: {
        viewport: {
          rawDims: {
            pageWidth,
            pageHeight,
            pageX,
            pageY
          }
        }
      }
    } = this;
    currentRect?.splice(0, 4, ...rect);
    const {
      width,
      height
    } = getRectDims(rect);
    style.left = `${100 * (rect[0] - pageX) / pageWidth}%`;
    style.top = `${100 * (pageHeight - rect[3] + pageY) / pageHeight}%`;
    if (rotation === 0) {
      style.width = `${100 * width / pageWidth}%`;
      style.height = `${100 * height / pageHeight}%`;
    } else {
      this.setRotation(rotation);
    }
  }
  _createContainer(ignoreBorder) {
    const {
      data,
      parent: {
        page,
        viewport
      }
    } = this;
    const container = document.createElement("section");
    container.setAttribute("data-annotation-id", data.id);
    if (!(this instanceof WidgetAnnotationElement)) {
      container.tabIndex = DEFAULT_TAB_INDEX;
    }
    const {
      style
    } = container;
    style.zIndex = this.parent.zIndex++;
    if (data.popupRef) {
      container.setAttribute("aria-haspopup", "dialog");
    }
    if (data.alternativeText) {
      container.title = data.alternativeText;
    }
    if (data.noRotate) {
      container.classList.add("norotate");
    }
    if (!data.rect || this instanceof PopupAnnotationElement) {
      const {
        rotation: rotation2
      } = data;
      if (!data.hasOwnCanvas && rotation2 !== 0) {
        this.setRotation(rotation2, container);
      }
      return container;
    }
    const {
      width,
      height
    } = getRectDims(data.rect);
    if (!ignoreBorder && data.borderStyle.width > 0) {
      style.borderWidth = `${data.borderStyle.width}px`;
      const horizontalRadius = data.borderStyle.horizontalCornerRadius;
      const verticalRadius = data.borderStyle.verticalCornerRadius;
      if (horizontalRadius > 0 || verticalRadius > 0) {
        const radius = `calc(${horizontalRadius}px * var(--scale-factor)) / calc(${verticalRadius}px * var(--scale-factor))`;
        style.borderRadius = radius;
      } else if (this instanceof RadioButtonWidgetAnnotationElement) {
        const radius = `calc(${width}px * var(--scale-factor)) / calc(${height}px * var(--scale-factor))`;
        style.borderRadius = radius;
      }
      switch (data.borderStyle.style) {
        case AnnotationBorderStyleType.SOLID:
          style.borderStyle = "solid";
          break;
        case AnnotationBorderStyleType.DASHED:
          style.borderStyle = "dashed";
          break;
        case AnnotationBorderStyleType.BEVELED:
          warn("Unimplemented border style: beveled");
          break;
        case AnnotationBorderStyleType.INSET:
          warn("Unimplemented border style: inset");
          break;
        case AnnotationBorderStyleType.UNDERLINE:
          style.borderBottomStyle = "solid";
          break;
        default:
          break;
      }
      const borderColor = data.borderColor || null;
      if (borderColor) {
        this.#hasBorder = true;
        style.borderColor = Util.makeHexColor(borderColor[0] | 0, borderColor[1] | 0, borderColor[2] | 0);
      } else {
        style.borderWidth = 0;
      }
    }
    const rect = Util.normalizeRect([data.rect[0], page.view[3] - data.rect[1] + page.view[1], data.rect[2], page.view[3] - data.rect[3] + page.view[1]]);
    const {
      pageWidth,
      pageHeight,
      pageX,
      pageY
    } = viewport.rawDims;
    style.left = `${100 * (rect[0] - pageX) / pageWidth}%`;
    style.top = `${100 * (rect[1] - pageY) / pageHeight}%`;
    const {
      rotation
    } = data;
    if (data.hasOwnCanvas || rotation === 0) {
      style.width = `${100 * width / pageWidth}%`;
      style.height = `${100 * height / pageHeight}%`;
    } else {
      this.setRotation(rotation, container);
    }
    return container;
  }
  setRotation(angle, container = this.container) {
    if (!this.data.rect) {
      return;
    }
    const {
      pageWidth,
      pageHeight
    } = this.parent.viewport.rawDims;
    const {
      width,
      height
    } = getRectDims(this.data.rect);
    let elementWidth, elementHeight;
    if (angle % 180 === 0) {
      elementWidth = 100 * width / pageWidth;
      elementHeight = 100 * height / pageHeight;
    } else {
      elementWidth = 100 * height / pageWidth;
      elementHeight = 100 * width / pageHeight;
    }
    container.style.width = `${elementWidth}%`;
    container.style.height = `${elementHeight}%`;
    container.setAttribute("data-main-rotation", (360 - angle) % 360);
  }
  get _commonActions() {
    const setColor = (jsName, styleName, event) => {
      const color = event.detail[jsName];
      const colorType = color[0];
      const colorArray = color.slice(1);
      event.target.style[styleName] = ColorConverters[`${colorType}_HTML`](colorArray);
      this.annotationStorage.setValue(this.data.id, {
        [styleName]: ColorConverters[`${colorType}_rgb`](colorArray)
      });
    };
    return shadow(this, "_commonActions", {
      display: (event) => {
        const {
          display
        } = event.detail;
        const hidden = display % 2 === 1;
        this.container.style.visibility = hidden ? "hidden" : "visible";
        this.annotationStorage.setValue(this.data.id, {
          noView: hidden,
          noPrint: display === 1 || display === 2
        });
      },
      print: (event) => {
        this.annotationStorage.setValue(this.data.id, {
          noPrint: !event.detail.print
        });
      },
      hidden: (event) => {
        const {
          hidden
        } = event.detail;
        this.container.style.visibility = hidden ? "hidden" : "visible";
        this.annotationStorage.setValue(this.data.id, {
          noPrint: hidden,
          noView: hidden
        });
      },
      focus: (event) => {
        setTimeout(() => event.target.focus({
          preventScroll: false
        }), 0);
      },
      userName: (event) => {
        event.target.title = event.detail.userName;
      },
      readonly: (event) => {
        event.target.disabled = event.detail.readonly;
      },
      required: (event) => {
        this._setRequired(event.target, event.detail.required);
      },
      bgColor: (event) => {
        setColor("bgColor", "backgroundColor", event);
      },
      fillColor: (event) => {
        setColor("fillColor", "backgroundColor", event);
      },
      fgColor: (event) => {
        setColor("fgColor", "color", event);
      },
      textColor: (event) => {
        setColor("textColor", "color", event);
      },
      borderColor: (event) => {
        setColor("borderColor", "borderColor", event);
      },
      strokeColor: (event) => {
        setColor("strokeColor", "borderColor", event);
      },
      rotation: (event) => {
        const angle = event.detail.rotation;
        this.setRotation(angle);
        this.annotationStorage.setValue(this.data.id, {
          rotation: angle
        });
      }
    });
  }
  _dispatchEventFromSandbox(actions, jsEvent) {
    const commonActions = this._commonActions;
    for (const name of Object.keys(jsEvent.detail)) {
      const action = actions[name] || commonActions[name];
      action?.(jsEvent);
    }
  }
  _setDefaultPropertiesFromJS(element) {
    if (!this.enableScripting) {
      return;
    }
    const storedData = this.annotationStorage.getRawValue(this.data.id);
    if (!storedData) {
      return;
    }
    const commonActions = this._commonActions;
    for (const [actionName, detail] of Object.entries(storedData)) {
      const action = commonActions[actionName];
      if (action) {
        const eventProxy = {
          detail: {
            [actionName]: detail
          },
          target: element
        };
        action(eventProxy);
        delete storedData[actionName];
      }
    }
  }
  _createQuadrilaterals() {
    if (!this.container) {
      return;
    }
    const {
      quadPoints
    } = this.data;
    if (!quadPoints) {
      return;
    }
    const [rectBlX, rectBlY, rectTrX, rectTrY] = this.data.rect.map((x) => Math.fround(x));
    if (quadPoints.length === 8) {
      const [trX, trY, blX, blY] = quadPoints.subarray(2, 6);
      if (rectTrX === trX && rectTrY === trY && rectBlX === blX && rectBlY === blY) {
        return;
      }
    }
    const {
      style
    } = this.container;
    let svgBuffer;
    if (this.#hasBorder) {
      const {
        borderColor,
        borderWidth
      } = style;
      style.borderWidth = 0;
      svgBuffer = ["url('data:image/svg+xml;utf8,", `<svg xmlns="http://www.w3.org/2000/svg"`, ` preserveAspectRatio="none" viewBox="0 0 1 1">`, `<g fill="transparent" stroke="${borderColor}" stroke-width="${borderWidth}">`];
      this.container.classList.add("hasBorder");
    }
    const width = rectTrX - rectBlX;
    const height = rectTrY - rectBlY;
    const {
      svgFactory
    } = this;
    const svg = svgFactory.createElement("svg");
    svg.classList.add("quadrilateralsContainer");
    svg.setAttribute("width", 0);
    svg.setAttribute("height", 0);
    const defs = svgFactory.createElement("defs");
    svg.append(defs);
    const clipPath = svgFactory.createElement("clipPath");
    const id = `clippath_${this.data.id}`;
    clipPath.setAttribute("id", id);
    clipPath.setAttribute("clipPathUnits", "objectBoundingBox");
    defs.append(clipPath);
    for (let i = 2, ii = quadPoints.length; i < ii; i += 8) {
      const trX = quadPoints[i];
      const trY = quadPoints[i + 1];
      const blX = quadPoints[i + 2];
      const blY = quadPoints[i + 3];
      const rect = svgFactory.createElement("rect");
      const x = (blX - rectBlX) / width;
      const y = (rectTrY - trY) / height;
      const rectWidth = (trX - blX) / width;
      const rectHeight = (trY - blY) / height;
      rect.setAttribute("x", x);
      rect.setAttribute("y", y);
      rect.setAttribute("width", rectWidth);
      rect.setAttribute("height", rectHeight);
      clipPath.append(rect);
      svgBuffer?.push(`<rect vector-effect="non-scaling-stroke" x="${x}" y="${y}" width="${rectWidth}" height="${rectHeight}"/>`);
    }
    if (this.#hasBorder) {
      svgBuffer.push(`</g></svg>')`);
      style.backgroundImage = svgBuffer.join("");
    }
    this.container.append(svg);
    this.container.style.clipPath = `url(#${id})`;
  }
  _createPopup() {
    const {
      container,
      data
    } = this;
    container.setAttribute("aria-haspopup", "dialog");
    const popup = this.#popupElement = new PopupAnnotationElement({
      data: {
        color: data.color,
        titleObj: data.titleObj,
        modificationDate: data.modificationDate,
        contentsObj: data.contentsObj,
        richText: data.richText,
        parentRect: data.rect,
        borderStyle: 0,
        id: `popup_${data.id}`,
        rotation: data.rotation
      },
      parent: this.parent,
      elements: [this]
    });
    this.parent.div.append(popup.render());
  }
  render() {
    unreachable("Abstract method `AnnotationElement.render` called");
  }
  _getElementsByName(name, skipId = null) {
    const fields = [];
    if (this._fieldObjects) {
      const fieldObj = this._fieldObjects[name];
      if (fieldObj) {
        for (const {
          page,
          id,
          exportValues
        } of fieldObj) {
          if (page === -1) {
            continue;
          }
          if (id === skipId) {
            continue;
          }
          const exportValue = typeof exportValues === "string" ? exportValues : null;
          const domElement = document.querySelector(`[data-element-id="${id}"]`);
          if (domElement && !GetElementsByNameSet.has(domElement)) {
            warn(`_getElementsByName - element not allowed: ${id}`);
            continue;
          }
          fields.push({
            id,
            exportValue,
            domElement
          });
        }
      }
      return fields;
    }
    for (const domElement of document.getElementsByName(name)) {
      const {
        exportValue
      } = domElement;
      const id = domElement.getAttribute("data-element-id");
      if (id === skipId) {
        continue;
      }
      if (!GetElementsByNameSet.has(domElement)) {
        continue;
      }
      fields.push({
        id,
        exportValue,
        domElement
      });
    }
    return fields;
  }
  show() {
    if (this.container) {
      this.container.hidden = false;
    }
    this.popup?.maybeShow();
  }
  hide() {
    if (this.container) {
      this.container.hidden = true;
    }
    this.popup?.forceHide();
  }
  getElementsToTriggerPopup() {
    return this.container;
  }
  addHighlightArea() {
    const triggers = this.getElementsToTriggerPopup();
    if (Array.isArray(triggers)) {
      for (const element of triggers) {
        element.classList.add("highlightArea");
      }
    } else {
      triggers.classList.add("highlightArea");
    }
  }
  _editOnDoubleClick() {
    if (!this._isEditable) {
      return;
    }
    const {
      annotationEditorType: mode,
      data: {
        id: editId
      }
    } = this;
    this.container.addEventListener("dblclick", () => {
      this.linkService.eventBus?.dispatch("switchannotationeditormode", {
        source: this,
        mode,
        editId
      });
    });
  }
};
var LinkAnnotationElement = class extends AnnotationElement {
  constructor(parameters, options = null) {
    super(parameters, {
      isRenderable: true,
      ignoreBorder: !!options?.ignoreBorder,
      createQuadrilaterals: true
    });
    this.isTooltipOnly = parameters.data.isTooltipOnly;
  }
  render() {
    const {
      data,
      linkService
    } = this;
    const link = document.createElement("a");
    link.setAttribute("data-element-id", data.id);
    let isBound = false;
    if (data.url) {
      linkService.addLinkAttributes(link, data.url, data.newWindow);
      isBound = true;
    } else if (data.action) {
      this._bindNamedAction(link, data.action);
      isBound = true;
    } else if (data.attachment) {
      this.#bindAttachment(link, data.attachment, data.attachmentDest);
      isBound = true;
    } else if (data.setOCGState) {
      this.#bindSetOCGState(link, data.setOCGState);
      isBound = true;
    } else if (data.dest) {
      this._bindLink(link, data.dest);
      isBound = true;
    } else {
      if (data.actions && (data.actions.Action || data.actions["Mouse Up"] || data.actions["Mouse Down"]) && this.enableScripting && this.hasJSActions) {
        this._bindJSAction(link, data);
        isBound = true;
      }
      if (data.resetForm) {
        this._bindResetFormAction(link, data.resetForm);
        isBound = true;
      } else if (this.isTooltipOnly && !isBound) {
        this._bindLink(link, "");
        isBound = true;
      }
    }
    this.container.classList.add("linkAnnotation");
    if (isBound) {
      this.container.append(link);
    }
    return this.container;
  }
  #setInternalLink() {
    this.container.setAttribute("data-internal-link", "");
  }
  _bindLink(link, destination) {
    link.href = this.linkService.getDestinationHash(destination);
    link.onclick = () => {
      if (destination) {
        this.linkService.goToDestination(destination);
      }
      return false;
    };
    if (destination || destination === "") {
      this.#setInternalLink();
    }
  }
  _bindNamedAction(link, action) {
    link.href = this.linkService.getAnchorUrl("");
    link.onclick = () => {
      this.linkService.executeNamedAction(action);
      return false;
    };
    this.#setInternalLink();
  }
  #bindAttachment(link, attachment, dest = null) {
    link.href = this.linkService.getAnchorUrl("");
    if (attachment.description) {
      link.title = attachment.description;
    }
    link.onclick = () => {
      this.downloadManager?.openOrDownloadData(attachment.content, attachment.filename, dest);
      return false;
    };
    this.#setInternalLink();
  }
  #bindSetOCGState(link, action) {
    link.href = this.linkService.getAnchorUrl("");
    link.onclick = () => {
      this.linkService.executeSetOCGState(action);
      return false;
    };
    this.#setInternalLink();
  }
  _bindJSAction(link, data) {
    link.href = this.linkService.getAnchorUrl("");
    const map = /* @__PURE__ */ new Map([["Action", "onclick"], ["Mouse Up", "onmouseup"], ["Mouse Down", "onmousedown"]]);
    for (const name of Object.keys(data.actions)) {
      const jsName = map.get(name);
      if (!jsName) {
        continue;
      }
      link[jsName] = () => {
        this.linkService.eventBus?.dispatch("dispatcheventinsandbox", {
          source: this,
          detail: {
            id: data.id,
            name
          }
        });
        return false;
      };
    }
    if (!link.onclick) {
      link.onclick = () => false;
    }
    this.#setInternalLink();
  }
  _bindResetFormAction(link, resetForm) {
    const otherClickAction = link.onclick;
    if (!otherClickAction) {
      link.href = this.linkService.getAnchorUrl("");
    }
    this.#setInternalLink();
    if (!this._fieldObjects) {
      warn(`_bindResetFormAction - "resetForm" action not supported, ensure that the \`fieldObjects\` parameter is provided.`);
      if (!otherClickAction) {
        link.onclick = () => false;
      }
      return;
    }
    link.onclick = () => {
      otherClickAction?.();
      const {
        fields: resetFormFields,
        refs: resetFormRefs,
        include
      } = resetForm;
      const allFields = [];
      if (resetFormFields.length !== 0 || resetFormRefs.length !== 0) {
        const fieldIds = new Set(resetFormRefs);
        for (const fieldName of resetFormFields) {
          const fields = this._fieldObjects[fieldName] || [];
          for (const {
            id
          } of fields) {
            fieldIds.add(id);
          }
        }
        for (const fields of Object.values(this._fieldObjects)) {
          for (const field of fields) {
            if (fieldIds.has(field.id) === include) {
              allFields.push(field);
            }
          }
        }
      } else {
        for (const fields of Object.values(this._fieldObjects)) {
          allFields.push(...fields);
        }
      }
      const storage = this.annotationStorage;
      const allIds = [];
      for (const field of allFields) {
        const {
          id
        } = field;
        allIds.push(id);
        switch (field.type) {
          case "text": {
            const value = field.defaultValue || "";
            storage.setValue(id, {
              value
            });
            break;
          }
          case "checkbox":
          case "radiobutton": {
            const value = field.defaultValue === field.exportValues;
            storage.setValue(id, {
              value
            });
            break;
          }
          case "combobox":
          case "listbox": {
            const value = field.defaultValue || "";
            storage.setValue(id, {
              value
            });
            break;
          }
          default:
            continue;
        }
        const domElement = document.querySelector(`[data-element-id="${id}"]`);
        if (!domElement) {
          continue;
        } else if (!GetElementsByNameSet.has(domElement)) {
          warn(`_bindResetFormAction - element not allowed: ${id}`);
          continue;
        }
        domElement.dispatchEvent(new Event("resetform"));
      }
      if (this.enableScripting) {
        this.linkService.eventBus?.dispatch("dispatcheventinsandbox", {
          source: this,
          detail: {
            id: "app",
            ids: allIds,
            name: "ResetForm"
          }
        });
      }
      return false;
    };
  }
};
var TextAnnotationElement = class extends AnnotationElement {
  constructor(parameters) {
    super(parameters, {
      isRenderable: true
    });
  }
  render() {
    this.container.classList.add("textAnnotation");
    const image = document.createElement("img");
    image.src = this.imageResourcesPath + "annotation-" + this.data.name.toLowerCase() + ".svg";
    image.setAttribute("data-l10n-id", "pdfjs-text-annotation-type");
    image.setAttribute("data-l10n-args", JSON.stringify({
      type: this.data.name
    }));
    if (!this.data.popupRef && this.hasPopupData) {
      this._createPopup();
    }
    this.container.append(image);
    return this.container;
  }
};
var WidgetAnnotationElement = class extends AnnotationElement {
  render() {
    return this.container;
  }
  showElementAndHideCanvas(element) {
    if (this.data.hasOwnCanvas) {
      if (element.previousSibling?.nodeName === "CANVAS") {
        element.previousSibling.hidden = true;
      }
      element.hidden = false;
    }
  }
  _getKeyModifier(event) {
    return util_FeatureTest.platform.isMac ? event.metaKey : event.ctrlKey;
  }
  _setEventListener(element, elementData, baseName, eventName, valueGetter) {
    if (baseName.includes("mouse")) {
      element.addEventListener(baseName, (event) => {
        this.linkService.eventBus?.dispatch("dispatcheventinsandbox", {
          source: this,
          detail: {
            id: this.data.id,
            name: eventName,
            value: valueGetter(event),
            shift: event.shiftKey,
            modifier: this._getKeyModifier(event)
          }
        });
      });
    } else {
      element.addEventListener(baseName, (event) => {
        if (baseName === "blur") {
          if (!elementData.focused || !event.relatedTarget) {
            return;
          }
          elementData.focused = false;
        } else if (baseName === "focus") {
          if (elementData.focused) {
            return;
          }
          elementData.focused = true;
        }
        if (!valueGetter) {
          return;
        }
        this.linkService.eventBus?.dispatch("dispatcheventinsandbox", {
          source: this,
          detail: {
            id: this.data.id,
            name: eventName,
            value: valueGetter(event)
          }
        });
      });
    }
  }
  _setEventListeners(element, elementData, names, getter) {
    for (const [baseName, eventName] of names) {
      if (eventName === "Action" || this.data.actions?.[eventName]) {
        if (eventName === "Focus" || eventName === "Blur") {
          elementData ||= {
            focused: false
          };
        }
        this._setEventListener(element, elementData, baseName, eventName, getter);
        if (eventName === "Focus" && !this.data.actions?.Blur) {
          this._setEventListener(element, elementData, "blur", "Blur", null);
        } else if (eventName === "Blur" && !this.data.actions?.Focus) {
          this._setEventListener(element, elementData, "focus", "Focus", null);
        }
      }
    }
  }
  _setBackgroundColor(element) {
    const color = this.data.backgroundColor || null;
    element.style.backgroundColor = color === null ? "transparent" : Util.makeHexColor(color[0], color[1], color[2]);
  }
  _setTextStyle(element) {
    const TEXT_ALIGNMENT = ["left", "center", "right"];
    const {
      fontColor
    } = this.data.defaultAppearanceData;
    const fontSize = this.data.defaultAppearanceData.fontSize || annotation_layer_DEFAULT_FONT_SIZE;
    const style = element.style;
    let computedFontSize;
    const BORDER_SIZE = 2;
    const roundToOneDecimal = (x) => Math.round(10 * x) / 10;
    if (this.data.multiLine) {
      const height = Math.abs(this.data.rect[3] - this.data.rect[1] - BORDER_SIZE);
      const numberOfLines = Math.round(height / (LINE_FACTOR * fontSize)) || 1;
      const lineHeight = height / numberOfLines;
      computedFontSize = Math.min(fontSize, roundToOneDecimal(lineHeight / LINE_FACTOR));
    } else {
      const height = Math.abs(this.data.rect[3] - this.data.rect[1] - BORDER_SIZE);
      computedFontSize = Math.min(fontSize, roundToOneDecimal(height / LINE_FACTOR));
    }
    style.fontSize = `calc(${computedFontSize}px * var(--scale-factor))`;
    style.color = Util.makeHexColor(fontColor[0], fontColor[1], fontColor[2]);
    if (this.data.textAlignment !== null) {
      style.textAlign = TEXT_ALIGNMENT[this.data.textAlignment];
    }
  }
  _setRequired(element, isRequired) {
    if (isRequired) {
      element.setAttribute("required", true);
    } else {
      element.removeAttribute("required");
    }
    element.setAttribute("aria-required", isRequired);
  }
};
var TextWidgetAnnotationElement = class extends WidgetAnnotationElement {
  constructor(parameters) {
    const isRenderable = parameters.renderForms || parameters.data.hasOwnCanvas || !parameters.data.hasAppearance && !!parameters.data.fieldValue;
    super(parameters, {
      isRenderable
    });
  }
  setPropertyOnSiblings(base, key, value, keyInStorage) {
    const storage = this.annotationStorage;
    for (const element of this._getElementsByName(base.name, base.id)) {
      if (element.domElement) {
        element.domElement[key] = value;
      }
      storage.setValue(element.id, {
        [keyInStorage]: value
      });
    }
  }
  render() {
    const storage = this.annotationStorage;
    const id = this.data.id;
    this.container.classList.add("textWidgetAnnotation");
    let element = null;
    if (this.renderForms) {
      const storedData = storage.getValue(id, {
        value: this.data.fieldValue
      });
      let textContent = storedData.value || "";
      const maxLen = storage.getValue(id, {
        charLimit: this.data.maxLen
      }).charLimit;
      if (maxLen && textContent.length > maxLen) {
        textContent = textContent.slice(0, maxLen);
      }
      let fieldFormattedValues = storedData.formattedValue || this.data.textContent?.join("\n") || null;
      if (fieldFormattedValues && this.data.comb) {
        fieldFormattedValues = fieldFormattedValues.replaceAll(/\s+/g, "");
      }
      const elementData = {
        userValue: textContent,
        formattedValue: fieldFormattedValues,
        lastCommittedValue: null,
        commitKey: 1,
        focused: false
      };
      if (this.data.multiLine) {
        element = document.createElement("textarea");
        element.textContent = fieldFormattedValues ?? textContent;
        if (this.data.doNotScroll) {
          element.style.overflowY = "hidden";
        }
      } else {
        element = document.createElement("input");
        element.type = "text";
        element.setAttribute("value", fieldFormattedValues ?? textContent);
        if (this.data.doNotScroll) {
          element.style.overflowX = "hidden";
        }
      }
      if (this.data.hasOwnCanvas) {
        element.hidden = true;
      }
      GetElementsByNameSet.add(element);
      element.setAttribute("data-element-id", id);
      element.disabled = this.data.readOnly;
      element.name = this.data.fieldName;
      element.tabIndex = DEFAULT_TAB_INDEX;
      this._setRequired(element, this.data.required);
      if (maxLen) {
        element.maxLength = maxLen;
      }
      element.addEventListener("input", (event) => {
        storage.setValue(id, {
          value: event.target.value
        });
        this.setPropertyOnSiblings(element, "value", event.target.value, "value");
        elementData.formattedValue = null;
      });
      element.addEventListener("resetform", (event) => {
        const defaultValue = this.data.defaultFieldValue ?? "";
        element.value = elementData.userValue = defaultValue;
        elementData.formattedValue = null;
      });
      let blurListener = (event) => {
        const {
          formattedValue
        } = elementData;
        if (formattedValue !== null && formattedValue !== void 0) {
          event.target.value = formattedValue;
        }
        event.target.scrollLeft = 0;
      };
      if (this.enableScripting && this.hasJSActions) {
        element.addEventListener("focus", (event) => {
          if (elementData.focused) {
            return;
          }
          const {
            target
          } = event;
          if (elementData.userValue) {
            target.value = elementData.userValue;
          }
          elementData.lastCommittedValue = target.value;
          elementData.commitKey = 1;
          if (!this.data.actions?.Focus) {
            elementData.focused = true;
          }
        });
        element.addEventListener("updatefromsandbox", (jsEvent) => {
          this.showElementAndHideCanvas(jsEvent.target);
          const actions = {
            value(event) {
              elementData.userValue = event.detail.value ?? "";
              storage.setValue(id, {
                value: elementData.userValue.toString()
              });
              event.target.value = elementData.userValue;
            },
            formattedValue(event) {
              const {
                formattedValue
              } = event.detail;
              elementData.formattedValue = formattedValue;
              if (formattedValue !== null && formattedValue !== void 0 && event.target !== document.activeElement) {
                event.target.value = formattedValue;
              }
              storage.setValue(id, {
                formattedValue
              });
            },
            selRange(event) {
              event.target.setSelectionRange(...event.detail.selRange);
            },
            charLimit: (event) => {
              const {
                charLimit
              } = event.detail;
              const {
                target
              } = event;
              if (charLimit === 0) {
                target.removeAttribute("maxLength");
                return;
              }
              target.setAttribute("maxLength", charLimit);
              let value = elementData.userValue;
              if (!value || value.length <= charLimit) {
                return;
              }
              value = value.slice(0, charLimit);
              target.value = elementData.userValue = value;
              storage.setValue(id, {
                value
              });
              this.linkService.eventBus?.dispatch("dispatcheventinsandbox", {
                source: this,
                detail: {
                  id,
                  name: "Keystroke",
                  value,
                  willCommit: true,
                  commitKey: 1,
                  selStart: target.selectionStart,
                  selEnd: target.selectionEnd
                }
              });
            }
          };
          this._dispatchEventFromSandbox(actions, jsEvent);
        });
        element.addEventListener("keydown", (event) => {
          elementData.commitKey = 1;
          let commitKey = -1;
          if (event.key === "Escape") {
            commitKey = 0;
          } else if (event.key === "Enter" && !this.data.multiLine) {
            commitKey = 2;
          } else if (event.key === "Tab") {
            elementData.commitKey = 3;
          }
          if (commitKey === -1) {
            return;
          }
          const {
            value
          } = event.target;
          if (elementData.lastCommittedValue === value) {
            return;
          }
          elementData.lastCommittedValue = value;
          elementData.userValue = value;
          this.linkService.eventBus?.dispatch("dispatcheventinsandbox", {
            source: this,
            detail: {
              id,
              name: "Keystroke",
              value,
              willCommit: true,
              commitKey,
              selStart: event.target.selectionStart,
              selEnd: event.target.selectionEnd
            }
          });
        });
        const _blurListener = blurListener;
        blurListener = null;
        element.addEventListener("blur", (event) => {
          if (!elementData.focused || !event.relatedTarget) {
            return;
          }
          if (!this.data.actions?.Blur) {
            elementData.focused = false;
          }
          const {
            value
          } = event.target;
          elementData.userValue = value;
          if (elementData.lastCommittedValue !== value) {
            this.linkService.eventBus?.dispatch("dispatcheventinsandbox", {
              source: this,
              detail: {
                id,
                name: "Keystroke",
                value,
                willCommit: true,
                commitKey: elementData.commitKey,
                selStart: event.target.selectionStart,
                selEnd: event.target.selectionEnd
              }
            });
          }
          _blurListener(event);
        });
        if (this.data.actions?.Keystroke) {
          element.addEventListener("beforeinput", (event) => {
            elementData.lastCommittedValue = null;
            const {
              data,
              target
            } = event;
            const {
              value,
              selectionStart,
              selectionEnd
            } = target;
            let selStart = selectionStart, selEnd = selectionEnd;
            switch (event.inputType) {
              case "deleteWordBackward": {
                const match2 = value.substring(0, selectionStart).match(/\w*[^\w]*$/);
                if (match2) {
                  selStart -= match2[0].length;
                }
                break;
              }
              case "deleteWordForward": {
                const match2 = value.substring(selectionStart).match(/^[^\w]*\w*/);
                if (match2) {
                  selEnd += match2[0].length;
                }
                break;
              }
              case "deleteContentBackward":
                if (selectionStart === selectionEnd) {
                  selStart -= 1;
                }
                break;
              case "deleteContentForward":
                if (selectionStart === selectionEnd) {
                  selEnd += 1;
                }
                break;
            }
            event.preventDefault();
            this.linkService.eventBus?.dispatch("dispatcheventinsandbox", {
              source: this,
              detail: {
                id,
                name: "Keystroke",
                value,
                change: data || "",
                willCommit: false,
                selStart,
                selEnd
              }
            });
          });
        }
        this._setEventListeners(element, elementData, [["focus", "Focus"], ["blur", "Blur"], ["mousedown", "Mouse Down"], ["mouseenter", "Mouse Enter"], ["mouseleave", "Mouse Exit"], ["mouseup", "Mouse Up"]], (event) => event.target.value);
      }
      if (blurListener) {
        element.addEventListener("blur", blurListener);
      }
      if (this.data.comb) {
        const fieldWidth = this.data.rect[2] - this.data.rect[0];
        const combWidth = fieldWidth / maxLen;
        element.classList.add("comb");
        element.style.letterSpacing = `calc(${combWidth}px * var(--scale-factor) - 1ch)`;
      }
    } else {
      element = document.createElement("div");
      element.textContent = this.data.fieldValue;
      element.style.verticalAlign = "middle";
      element.style.display = "table-cell";
      if (this.data.hasOwnCanvas) {
        element.hidden = true;
      }
    }
    this._setTextStyle(element);
    this._setBackgroundColor(element);
    this._setDefaultPropertiesFromJS(element);
    this.container.append(element);
    return this.container;
  }
};
var SignatureWidgetAnnotationElement = class extends WidgetAnnotationElement {
  constructor(parameters) {
    super(parameters, {
      isRenderable: !!parameters.data.hasOwnCanvas
    });
  }
};
var CheckboxWidgetAnnotationElement = class extends WidgetAnnotationElement {
  constructor(parameters) {
    super(parameters, {
      isRenderable: parameters.renderForms
    });
  }
  render() {
    const storage = this.annotationStorage;
    const data = this.data;
    const id = data.id;
    let value = storage.getValue(id, {
      value: data.exportValue === data.fieldValue
    }).value;
    if (typeof value === "string") {
      value = value !== "Off";
      storage.setValue(id, {
        value
      });
    }
    this.container.classList.add("buttonWidgetAnnotation", "checkBox");
    const element = document.createElement("input");
    GetElementsByNameSet.add(element);
    element.setAttribute("data-element-id", id);
    element.disabled = data.readOnly;
    this._setRequired(element, this.data.required);
    element.type = "checkbox";
    element.name = data.fieldName;
    if (value) {
      element.setAttribute("checked", true);
    }
    element.setAttribute("exportValue", data.exportValue);
    element.tabIndex = DEFAULT_TAB_INDEX;
    element.addEventListener("change", (event) => {
      const {
        name,
        checked
      } = event.target;
      for (const checkbox of this._getElementsByName(name, id)) {
        const curChecked = checked && checkbox.exportValue === data.exportValue;
        if (checkbox.domElement) {
          checkbox.domElement.checked = curChecked;
        }
        storage.setValue(checkbox.id, {
          value: curChecked
        });
      }
      storage.setValue(id, {
        value: checked
      });
    });
    element.addEventListener("resetform", (event) => {
      const defaultValue = data.defaultFieldValue || "Off";
      event.target.checked = defaultValue === data.exportValue;
    });
    if (this.enableScripting && this.hasJSActions) {
      element.addEventListener("updatefromsandbox", (jsEvent) => {
        const actions = {
          value(event) {
            event.target.checked = event.detail.value !== "Off";
            storage.setValue(id, {
              value: event.target.checked
            });
          }
        };
        this._dispatchEventFromSandbox(actions, jsEvent);
      });
      this._setEventListeners(element, null, [["change", "Validate"], ["change", "Action"], ["focus", "Focus"], ["blur", "Blur"], ["mousedown", "Mouse Down"], ["mouseenter", "Mouse Enter"], ["mouseleave", "Mouse Exit"], ["mouseup", "Mouse Up"]], (event) => event.target.checked);
    }
    this._setBackgroundColor(element);
    this._setDefaultPropertiesFromJS(element);
    this.container.append(element);
    return this.container;
  }
};
var RadioButtonWidgetAnnotationElement = class extends WidgetAnnotationElement {
  constructor(parameters) {
    super(parameters, {
      isRenderable: parameters.renderForms
    });
  }
  render() {
    this.container.classList.add("buttonWidgetAnnotation", "radioButton");
    const storage = this.annotationStorage;
    const data = this.data;
    const id = data.id;
    let value = storage.getValue(id, {
      value: data.fieldValue === data.buttonValue
    }).value;
    if (typeof value === "string") {
      value = value !== data.buttonValue;
      storage.setValue(id, {
        value
      });
    }
    if (value) {
      for (const radio of this._getElementsByName(data.fieldName, id)) {
        storage.setValue(radio.id, {
          value: false
        });
      }
    }
    const element = document.createElement("input");
    GetElementsByNameSet.add(element);
    element.setAttribute("data-element-id", id);
    element.disabled = data.readOnly;
    this._setRequired(element, this.data.required);
    element.type = "radio";
    element.name = data.fieldName;
    if (value) {
      element.setAttribute("checked", true);
    }
    element.tabIndex = DEFAULT_TAB_INDEX;
    element.addEventListener("change", (event) => {
      const {
        name,
        checked
      } = event.target;
      for (const radio of this._getElementsByName(name, id)) {
        storage.setValue(radio.id, {
          value: false
        });
      }
      storage.setValue(id, {
        value: checked
      });
    });
    element.addEventListener("resetform", (event) => {
      const defaultValue = data.defaultFieldValue;
      event.target.checked = defaultValue !== null && defaultValue !== void 0 && defaultValue === data.buttonValue;
    });
    if (this.enableScripting && this.hasJSActions) {
      const pdfButtonValue = data.buttonValue;
      element.addEventListener("updatefromsandbox", (jsEvent) => {
        const actions = {
          value: (event) => {
            const checked = pdfButtonValue === event.detail.value;
            for (const radio of this._getElementsByName(event.target.name)) {
              const curChecked = checked && radio.id === id;
              if (radio.domElement) {
                radio.domElement.checked = curChecked;
              }
              storage.setValue(radio.id, {
                value: curChecked
              });
            }
          }
        };
        this._dispatchEventFromSandbox(actions, jsEvent);
      });
      this._setEventListeners(element, null, [["change", "Validate"], ["change", "Action"], ["focus", "Focus"], ["blur", "Blur"], ["mousedown", "Mouse Down"], ["mouseenter", "Mouse Enter"], ["mouseleave", "Mouse Exit"], ["mouseup", "Mouse Up"]], (event) => event.target.checked);
    }
    this._setBackgroundColor(element);
    this._setDefaultPropertiesFromJS(element);
    this.container.append(element);
    return this.container;
  }
};
var PushButtonWidgetAnnotationElement = class extends LinkAnnotationElement {
  constructor(parameters) {
    super(parameters, {
      ignoreBorder: parameters.data.hasAppearance
    });
  }
  render() {
    const container = super.render();
    container.classList.add("buttonWidgetAnnotation", "pushButton");
    const linkElement = container.lastChild;
    if (this.enableScripting && this.hasJSActions && linkElement) {
      this._setDefaultPropertiesFromJS(linkElement);
      linkElement.addEventListener("updatefromsandbox", (jsEvent) => {
        this._dispatchEventFromSandbox({}, jsEvent);
      });
    }
    return container;
  }
};
var ChoiceWidgetAnnotationElement = class extends WidgetAnnotationElement {
  constructor(parameters) {
    super(parameters, {
      isRenderable: parameters.renderForms
    });
  }
  render() {
    this.container.classList.add("choiceWidgetAnnotation");
    const storage = this.annotationStorage;
    const id = this.data.id;
    const storedData = storage.getValue(id, {
      value: this.data.fieldValue
    });
    const selectElement = document.createElement("select");
    GetElementsByNameSet.add(selectElement);
    selectElement.setAttribute("data-element-id", id);
    selectElement.disabled = this.data.readOnly;
    this._setRequired(selectElement, this.data.required);
    selectElement.name = this.data.fieldName;
    selectElement.tabIndex = DEFAULT_TAB_INDEX;
    let addAnEmptyEntry = this.data.combo && this.data.options.length > 0;
    if (!this.data.combo) {
      selectElement.size = this.data.options.length;
      if (this.data.multiSelect) {
        selectElement.multiple = true;
      }
    }
    selectElement.addEventListener("resetform", (event) => {
      const defaultValue = this.data.defaultFieldValue;
      for (const option of selectElement.options) {
        option.selected = option.value === defaultValue;
      }
    });
    for (const option of this.data.options) {
      const optionElement = document.createElement("option");
      optionElement.textContent = option.displayValue;
      optionElement.value = option.exportValue;
      if (storedData.value.includes(option.exportValue)) {
        optionElement.setAttribute("selected", true);
        addAnEmptyEntry = false;
      }
      selectElement.append(optionElement);
    }
    let removeEmptyEntry = null;
    if (addAnEmptyEntry) {
      const noneOptionElement = document.createElement("option");
      noneOptionElement.value = " ";
      noneOptionElement.setAttribute("hidden", true);
      noneOptionElement.setAttribute("selected", true);
      selectElement.prepend(noneOptionElement);
      removeEmptyEntry = () => {
        noneOptionElement.remove();
        selectElement.removeEventListener("input", removeEmptyEntry);
        removeEmptyEntry = null;
      };
      selectElement.addEventListener("input", removeEmptyEntry);
    }
    const getValue = (isExport) => {
      const name = isExport ? "value" : "textContent";
      const {
        options,
        multiple
      } = selectElement;
      if (!multiple) {
        return options.selectedIndex === -1 ? null : options[options.selectedIndex][name];
      }
      return Array.prototype.filter.call(options, (option) => option.selected).map((option) => option[name]);
    };
    let selectedValues = getValue(false);
    const getItems = (event) => {
      const options = event.target.options;
      return Array.prototype.map.call(options, (option) => ({
        displayValue: option.textContent,
        exportValue: option.value
      }));
    };
    if (this.enableScripting && this.hasJSActions) {
      selectElement.addEventListener("updatefromsandbox", (jsEvent) => {
        const actions = {
          value(event) {
            removeEmptyEntry?.();
            const value = event.detail.value;
            const values2 = new Set(Array.isArray(value) ? value : [value]);
            for (const option of selectElement.options) {
              option.selected = values2.has(option.value);
            }
            storage.setValue(id, {
              value: getValue(true)
            });
            selectedValues = getValue(false);
          },
          multipleSelection(event) {
            selectElement.multiple = true;
          },
          remove(event) {
            const options = selectElement.options;
            const index = event.detail.remove;
            options[index].selected = false;
            selectElement.remove(index);
            if (options.length > 0) {
              const i = Array.prototype.findIndex.call(options, (option) => option.selected);
              if (i === -1) {
                options[0].selected = true;
              }
            }
            storage.setValue(id, {
              value: getValue(true),
              items: getItems(event)
            });
            selectedValues = getValue(false);
          },
          clear(event) {
            while (selectElement.length !== 0) {
              selectElement.remove(0);
            }
            storage.setValue(id, {
              value: null,
              items: []
            });
            selectedValues = getValue(false);
          },
          insert(event) {
            const {
              index,
              displayValue,
              exportValue
            } = event.detail.insert;
            const selectChild = selectElement.children[index];
            const optionElement = document.createElement("option");
            optionElement.textContent = displayValue;
            optionElement.value = exportValue;
            if (selectChild) {
              selectChild.before(optionElement);
            } else {
              selectElement.append(optionElement);
            }
            storage.setValue(id, {
              value: getValue(true),
              items: getItems(event)
            });
            selectedValues = getValue(false);
          },
          items(event) {
            const {
              items
            } = event.detail;
            while (selectElement.length !== 0) {
              selectElement.remove(0);
            }
            for (const item of items) {
              const {
                displayValue,
                exportValue
              } = item;
              const optionElement = document.createElement("option");
              optionElement.textContent = displayValue;
              optionElement.value = exportValue;
              selectElement.append(optionElement);
            }
            if (selectElement.options.length > 0) {
              selectElement.options[0].selected = true;
            }
            storage.setValue(id, {
              value: getValue(true),
              items: getItems(event)
            });
            selectedValues = getValue(false);
          },
          indices(event) {
            const indices = new Set(event.detail.indices);
            for (const option of event.target.options) {
              option.selected = indices.has(option.index);
            }
            storage.setValue(id, {
              value: getValue(true)
            });
            selectedValues = getValue(false);
          },
          editable(event) {
            event.target.disabled = !event.detail.editable;
          }
        };
        this._dispatchEventFromSandbox(actions, jsEvent);
      });
      selectElement.addEventListener("input", (event) => {
        const exportValue = getValue(true);
        const change = getValue(false);
        storage.setValue(id, {
          value: exportValue
        });
        event.preventDefault();
        this.linkService.eventBus?.dispatch("dispatcheventinsandbox", {
          source: this,
          detail: {
            id,
            name: "Keystroke",
            value: selectedValues,
            change,
            changeEx: exportValue,
            willCommit: false,
            commitKey: 1,
            keyDown: false
          }
        });
      });
      this._setEventListeners(selectElement, null, [["focus", "Focus"], ["blur", "Blur"], ["mousedown", "Mouse Down"], ["mouseenter", "Mouse Enter"], ["mouseleave", "Mouse Exit"], ["mouseup", "Mouse Up"], ["input", "Action"], ["input", "Validate"]], (event) => event.target.value);
    } else {
      selectElement.addEventListener("input", function(event) {
        storage.setValue(id, {
          value: getValue(true)
        });
      });
    }
    if (this.data.combo) {
      this._setTextStyle(selectElement);
    } else {
    }
    this._setBackgroundColor(selectElement);
    this._setDefaultPropertiesFromJS(selectElement);
    this.container.append(selectElement);
    return this.container;
  }
};
var PopupAnnotationElement = class extends AnnotationElement {
  constructor(parameters) {
    const {
      data,
      elements
    } = parameters;
    super(parameters, {
      isRenderable: AnnotationElement._hasPopupData(data)
    });
    this.elements = elements;
    this.popup = null;
  }
  render() {
    this.container.classList.add("popupAnnotation");
    const popup = this.popup = new PopupElement({
      container: this.container,
      color: this.data.color,
      titleObj: this.data.titleObj,
      modificationDate: this.data.modificationDate,
      contentsObj: this.data.contentsObj,
      richText: this.data.richText,
      rect: this.data.rect,
      parentRect: this.data.parentRect || null,
      parent: this.parent,
      elements: this.elements,
      open: this.data.open
    });
    const elementIds = [];
    for (const element of this.elements) {
      element.popup = popup;
      elementIds.push(element.data.id);
      element.addHighlightArea();
    }
    this.container.setAttribute("aria-controls", elementIds.map((id) => `${AnnotationPrefix}${id}`).join(","));
    return this.container;
  }
};
var PopupElement = class {
  #boundKeyDown = this.#keyDown.bind(this);
  #boundHide = this.#hide.bind(this);
  #boundShow = this.#show.bind(this);
  #boundToggle = this.#toggle.bind(this);
  #color = null;
  #container = null;
  #contentsObj = null;
  #dateObj = null;
  #elements = null;
  #parent = null;
  #parentRect = null;
  #pinned = false;
  #popup = null;
  #position = null;
  #rect = null;
  #richText = null;
  #titleObj = null;
  #updates = null;
  #wasVisible = false;
  constructor({
    container,
    color,
    elements,
    titleObj,
    modificationDate,
    contentsObj,
    richText,
    parent,
    rect,
    parentRect,
    open
  }) {
    this.#container = container;
    this.#titleObj = titleObj;
    this.#contentsObj = contentsObj;
    this.#richText = richText;
    this.#parent = parent;
    this.#color = color;
    this.#rect = rect;
    this.#parentRect = parentRect;
    this.#elements = elements;
    this.#dateObj = PDFDateString.toDateObject(modificationDate);
    this.trigger = elements.flatMap((e) => e.getElementsToTriggerPopup());
    for (const element of this.trigger) {
      element.addEventListener("click", this.#boundToggle);
      element.addEventListener("mouseenter", this.#boundShow);
      element.addEventListener("mouseleave", this.#boundHide);
      element.classList.add("popupTriggerArea");
    }
    for (const element of elements) {
      element.container?.addEventListener("keydown", this.#boundKeyDown);
    }
    this.#container.hidden = true;
    if (open) {
      this.#toggle();
    }
  }
  render() {
    if (this.#popup) {
      return;
    }
    const popup = this.#popup = document.createElement("div");
    popup.className = "popup";
    if (this.#color) {
      const baseColor = popup.style.outlineColor = Util.makeHexColor(...this.#color);
      if (CSS.supports("background-color", "color-mix(in srgb, red 30%, white)")) {
        popup.style.backgroundColor = `color-mix(in srgb, ${baseColor} 30%, white)`;
      } else {
        const BACKGROUND_ENLIGHT = 0.7;
        popup.style.backgroundColor = Util.makeHexColor(...this.#color.map((c) => Math.floor(BACKGROUND_ENLIGHT * (255 - c) + c)));
      }
    }
    const header = document.createElement("span");
    header.className = "header";
    const title = document.createElement("h1");
    header.append(title);
    ({
      dir: title.dir,
      str: title.textContent
    } = this.#titleObj);
    popup.append(header);
    if (this.#dateObj) {
      const modificationDate = document.createElement("span");
      modificationDate.classList.add("popupDate");
      modificationDate.setAttribute("data-l10n-id", "pdfjs-annotation-date-string");
      modificationDate.setAttribute("data-l10n-args", JSON.stringify({
        date: this.#dateObj.toLocaleDateString(),
        time: this.#dateObj.toLocaleTimeString()
      }));
      header.append(modificationDate);
    }
    const html = this.#html;
    if (html) {
      XfaLayer.render({
        xfaHtml: html,
        intent: "richText",
        div: popup
      });
      popup.lastChild.classList.add("richText", "popupContent");
    } else {
      const contents = this._formatContents(this.#contentsObj);
      popup.append(contents);
    }
    this.#container.append(popup);
  }
  get #html() {
    const richText = this.#richText;
    const contentsObj = this.#contentsObj;
    if (richText?.str && (!contentsObj?.str || contentsObj.str === richText.str)) {
      return this.#richText.html || null;
    }
    return null;
  }
  get #fontSize() {
    return this.#html?.attributes?.style?.fontSize || 0;
  }
  get #fontColor() {
    return this.#html?.attributes?.style?.color || null;
  }
  #makePopupContent(text) {
    const popupLines = [];
    const popupContent = {
      str: text,
      html: {
        name: "div",
        attributes: {
          dir: "auto"
        },
        children: [{
          name: "p",
          children: popupLines
        }]
      }
    };
    const lineAttributes = {
      style: {
        color: this.#fontColor,
        fontSize: this.#fontSize ? `calc(${this.#fontSize}px * var(--scale-factor))` : ""
      }
    };
    for (const line of text.split("\n")) {
      popupLines.push({
        name: "span",
        value: line,
        attributes: lineAttributes
      });
    }
    return popupContent;
  }
  _formatContents({
    str,
    dir
  }) {
    const p = document.createElement("p");
    p.classList.add("popupContent");
    p.dir = dir;
    const lines = str.split(/(?:\r\n?|\n)/);
    for (let i = 0, ii = lines.length; i < ii; ++i) {
      const line = lines[i];
      p.append(document.createTextNode(line));
      if (i < ii - 1) {
        p.append(document.createElement("br"));
      }
    }
    return p;
  }
  #keyDown(event) {
    if (event.altKey || event.shiftKey || event.ctrlKey || event.metaKey) {
      return;
    }
    if (event.key === "Enter" || event.key === "Escape" && this.#pinned) {
      this.#toggle();
    }
  }
  updateEdited({
    rect,
    popupContent
  }) {
    this.#updates ||= {
      contentsObj: this.#contentsObj,
      richText: this.#richText
    };
    if (rect) {
      this.#position = null;
    }
    if (popupContent) {
      this.#richText = this.#makePopupContent(popupContent);
      this.#contentsObj = null;
    }
    this.#popup?.remove();
    this.#popup = null;
  }
  resetEdited() {
    if (!this.#updates) {
      return;
    }
    ({
      contentsObj: this.#contentsObj,
      richText: this.#richText
    } = this.#updates);
    this.#updates = null;
    this.#popup?.remove();
    this.#popup = null;
    this.#position = null;
  }
  #setPosition() {
    if (this.#position !== null) {
      return;
    }
    const {
      page: {
        view
      },
      viewport: {
        rawDims: {
          pageWidth,
          pageHeight,
          pageX,
          pageY
        }
      }
    } = this.#parent;
    let useParentRect = !!this.#parentRect;
    let rect = useParentRect ? this.#parentRect : this.#rect;
    for (const element of this.#elements) {
      if (!rect || Util.intersect(element.data.rect, rect) !== null) {
        rect = element.data.rect;
        useParentRect = true;
        break;
      }
    }
    const normalizedRect = Util.normalizeRect([rect[0], view[3] - rect[1] + view[1], rect[2], view[3] - rect[3] + view[1]]);
    const HORIZONTAL_SPACE_AFTER_ANNOTATION = 5;
    const parentWidth = useParentRect ? rect[2] - rect[0] + HORIZONTAL_SPACE_AFTER_ANNOTATION : 0;
    const popupLeft = normalizedRect[0] + parentWidth;
    const popupTop = normalizedRect[1];
    this.#position = [100 * (popupLeft - pageX) / pageWidth, 100 * (popupTop - pageY) / pageHeight];
    const {
      style
    } = this.#container;
    style.left = `${this.#position[0]}%`;
    style.top = `${this.#position[1]}%`;
  }
  #toggle() {
    this.#pinned = !this.#pinned;
    if (this.#pinned) {
      this.#show();
      this.#container.addEventListener("click", this.#boundToggle);
      this.#container.addEventListener("keydown", this.#boundKeyDown);
    } else {
      this.#hide();
      this.#container.removeEventListener("click", this.#boundToggle);
      this.#container.removeEventListener("keydown", this.#boundKeyDown);
    }
  }
  #show() {
    if (!this.#popup) {
      this.render();
    }
    if (!this.isVisible) {
      this.#setPosition();
      this.#container.hidden = false;
      this.#container.style.zIndex = parseInt(this.#container.style.zIndex) + 1e3;
    } else if (this.#pinned) {
      this.#container.classList.add("focused");
    }
  }
  #hide() {
    this.#container.classList.remove("focused");
    if (this.#pinned || !this.isVisible) {
      return;
    }
    this.#container.hidden = true;
    this.#container.style.zIndex = parseInt(this.#container.style.zIndex) - 1e3;
  }
  forceHide() {
    this.#wasVisible = this.isVisible;
    if (!this.#wasVisible) {
      return;
    }
    this.#container.hidden = true;
  }
  maybeShow() {
    if (!this.#wasVisible) {
      return;
    }
    if (!this.#popup) {
      this.#show();
    }
    this.#wasVisible = false;
    this.#container.hidden = false;
  }
  get isVisible() {
    return this.#container.hidden === false;
  }
};
var FreeTextAnnotationElement = class extends AnnotationElement {
  constructor(parameters) {
    super(parameters, {
      isRenderable: true,
      ignoreBorder: true
    });
    this.textContent = parameters.data.textContent;
    this.textPosition = parameters.data.textPosition;
    this.annotationEditorType = AnnotationEditorType.FREETEXT;
  }
  render() {
    this.container.classList.add("freeTextAnnotation");
    if (this.textContent) {
      const content = document.createElement("div");
      content.classList.add("annotationTextContent");
      content.setAttribute("role", "comment");
      for (const line of this.textContent) {
        const lineSpan = document.createElement("span");
        lineSpan.textContent = line;
        content.append(lineSpan);
      }
      this.container.append(content);
    }
    if (!this.data.popupRef && this.hasPopupData) {
      this._createPopup();
    }
    this._editOnDoubleClick();
    return this.container;
  }
};
var LineAnnotationElement = class extends AnnotationElement {
  #line = null;
  constructor(parameters) {
    super(parameters, {
      isRenderable: true,
      ignoreBorder: true
    });
  }
  render() {
    this.container.classList.add("lineAnnotation");
    const data = this.data;
    const {
      width,
      height
    } = getRectDims(data.rect);
    const svg = this.svgFactory.create(width, height, true);
    const line = this.#line = this.svgFactory.createElement("svg:line");
    line.setAttribute("x1", data.rect[2] - data.lineCoordinates[0]);
    line.setAttribute("y1", data.rect[3] - data.lineCoordinates[1]);
    line.setAttribute("x2", data.rect[2] - data.lineCoordinates[2]);
    line.setAttribute("y2", data.rect[3] - data.lineCoordinates[3]);
    line.setAttribute("stroke-width", data.borderStyle.width || 1);
    line.setAttribute("stroke", "transparent");
    line.setAttribute("fill", "transparent");
    svg.append(line);
    this.container.append(svg);
    if (!data.popupRef && this.hasPopupData) {
      this._createPopup();
    }
    return this.container;
  }
  getElementsToTriggerPopup() {
    return this.#line;
  }
  addHighlightArea() {
    this.container.classList.add("highlightArea");
  }
};
var SquareAnnotationElement = class extends AnnotationElement {
  #square = null;
  constructor(parameters) {
    super(parameters, {
      isRenderable: true,
      ignoreBorder: true
    });
  }
  render() {
    this.container.classList.add("squareAnnotation");
    const data = this.data;
    const {
      width,
      height
    } = getRectDims(data.rect);
    const svg = this.svgFactory.create(width, height, true);
    const borderWidth = data.borderStyle.width;
    const square = this.#square = this.svgFactory.createElement("svg:rect");
    square.setAttribute("x", borderWidth / 2);
    square.setAttribute("y", borderWidth / 2);
    square.setAttribute("width", width - borderWidth);
    square.setAttribute("height", height - borderWidth);
    square.setAttribute("stroke-width", borderWidth || 1);
    square.setAttribute("stroke", "transparent");
    square.setAttribute("fill", "transparent");
    svg.append(square);
    this.container.append(svg);
    if (!data.popupRef && this.hasPopupData) {
      this._createPopup();
    }
    return this.container;
  }
  getElementsToTriggerPopup() {
    return this.#square;
  }
  addHighlightArea() {
    this.container.classList.add("highlightArea");
  }
};
var CircleAnnotationElement = class extends AnnotationElement {
  #circle = null;
  constructor(parameters) {
    super(parameters, {
      isRenderable: true,
      ignoreBorder: true
    });
  }
  render() {
    this.container.classList.add("circleAnnotation");
    const data = this.data;
    const {
      width,
      height
    } = getRectDims(data.rect);
    const svg = this.svgFactory.create(width, height, true);
    const borderWidth = data.borderStyle.width;
    const circle = this.#circle = this.svgFactory.createElement("svg:ellipse");
    circle.setAttribute("cx", width / 2);
    circle.setAttribute("cy", height / 2);
    circle.setAttribute("rx", width / 2 - borderWidth / 2);
    circle.setAttribute("ry", height / 2 - borderWidth / 2);
    circle.setAttribute("stroke-width", borderWidth || 1);
    circle.setAttribute("stroke", "transparent");
    circle.setAttribute("fill", "transparent");
    svg.append(circle);
    this.container.append(svg);
    if (!data.popupRef && this.hasPopupData) {
      this._createPopup();
    }
    return this.container;
  }
  getElementsToTriggerPopup() {
    return this.#circle;
  }
  addHighlightArea() {
    this.container.classList.add("highlightArea");
  }
};
var PolylineAnnotationElement = class extends AnnotationElement {
  #polyline = null;
  constructor(parameters) {
    super(parameters, {
      isRenderable: true,
      ignoreBorder: true
    });
    this.containerClassName = "polylineAnnotation";
    this.svgElementName = "svg:polyline";
  }
  render() {
    this.container.classList.add(this.containerClassName);
    const {
      data: {
        rect,
        vertices,
        borderStyle,
        popupRef
      }
    } = this;
    if (!vertices) {
      return this.container;
    }
    const {
      width,
      height
    } = getRectDims(rect);
    const svg = this.svgFactory.create(width, height, true);
    let points = [];
    for (let i = 0, ii = vertices.length; i < ii; i += 2) {
      const x = vertices[i] - rect[0];
      const y = rect[3] - vertices[i + 1];
      points.push(`${x},${y}`);
    }
    points = points.join(" ");
    const polyline = this.#polyline = this.svgFactory.createElement(this.svgElementName);
    polyline.setAttribute("points", points);
    polyline.setAttribute("stroke-width", borderStyle.width || 1);
    polyline.setAttribute("stroke", "transparent");
    polyline.setAttribute("fill", "transparent");
    svg.append(polyline);
    this.container.append(svg);
    if (!popupRef && this.hasPopupData) {
      this._createPopup();
    }
    return this.container;
  }
  getElementsToTriggerPopup() {
    return this.#polyline;
  }
  addHighlightArea() {
    this.container.classList.add("highlightArea");
  }
};
var PolygonAnnotationElement = class extends PolylineAnnotationElement {
  constructor(parameters) {
    super(parameters);
    this.containerClassName = "polygonAnnotation";
    this.svgElementName = "svg:polygon";
  }
};
var CaretAnnotationElement = class extends AnnotationElement {
  constructor(parameters) {
    super(parameters, {
      isRenderable: true,
      ignoreBorder: true
    });
  }
  render() {
    this.container.classList.add("caretAnnotation");
    if (!this.data.popupRef && this.hasPopupData) {
      this._createPopup();
    }
    return this.container;
  }
};
var InkAnnotationElement = class extends AnnotationElement {
  #polylines = [];
  constructor(parameters) {
    super(parameters, {
      isRenderable: true,
      ignoreBorder: true
    });
    this.containerClassName = "inkAnnotation";
    this.svgElementName = "svg:polyline";
    this.annotationEditorType = AnnotationEditorType.INK;
  }
  render() {
    this.container.classList.add(this.containerClassName);
    const {
      data: {
        rect,
        inkLists,
        borderStyle,
        popupRef
      }
    } = this;
    const {
      width,
      height
    } = getRectDims(rect);
    const svg = this.svgFactory.create(width, height, true);
    for (const inkList of inkLists) {
      let points = [];
      for (let i = 0, ii = inkList.length; i < ii; i += 2) {
        const x = inkList[i] - rect[0];
        const y = rect[3] - inkList[i + 1];
        points.push(`${x},${y}`);
      }
      points = points.join(" ");
      const polyline = this.svgFactory.createElement(this.svgElementName);
      this.#polylines.push(polyline);
      polyline.setAttribute("points", points);
      polyline.setAttribute("stroke-width", borderStyle.width || 1);
      polyline.setAttribute("stroke", "transparent");
      polyline.setAttribute("fill", "transparent");
      if (!popupRef && this.hasPopupData) {
        this._createPopup();
      }
      svg.append(polyline);
    }
    this.container.append(svg);
    return this.container;
  }
  getElementsToTriggerPopup() {
    return this.#polylines;
  }
  addHighlightArea() {
    this.container.classList.add("highlightArea");
  }
};
var HighlightAnnotationElement = class extends AnnotationElement {
  constructor(parameters) {
    super(parameters, {
      isRenderable: true,
      ignoreBorder: true,
      createQuadrilaterals: true
    });
  }
  render() {
    if (!this.data.popupRef && this.hasPopupData) {
      this._createPopup();
    }
    this.container.classList.add("highlightAnnotation");
    return this.container;
  }
};
var UnderlineAnnotationElement = class extends AnnotationElement {
  constructor(parameters) {
    super(parameters, {
      isRenderable: true,
      ignoreBorder: true,
      createQuadrilaterals: true
    });
  }
  render() {
    if (!this.data.popupRef && this.hasPopupData) {
      this._createPopup();
    }
    this.container.classList.add("underlineAnnotation");
    return this.container;
  }
};
var SquigglyAnnotationElement = class extends AnnotationElement {
  constructor(parameters) {
    super(parameters, {
      isRenderable: true,
      ignoreBorder: true,
      createQuadrilaterals: true
    });
  }
  render() {
    if (!this.data.popupRef && this.hasPopupData) {
      this._createPopup();
    }
    this.container.classList.add("squigglyAnnotation");
    return this.container;
  }
};
var StrikeOutAnnotationElement = class extends AnnotationElement {
  constructor(parameters) {
    super(parameters, {
      isRenderable: true,
      ignoreBorder: true,
      createQuadrilaterals: true
    });
  }
  render() {
    if (!this.data.popupRef && this.hasPopupData) {
      this._createPopup();
    }
    this.container.classList.add("strikeoutAnnotation");
    return this.container;
  }
};
var StampAnnotationElement = class extends AnnotationElement {
  constructor(parameters) {
    super(parameters, {
      isRenderable: true,
      ignoreBorder: true
    });
  }
  render() {
    this.container.classList.add("stampAnnotation");
    if (!this.data.popupRef && this.hasPopupData) {
      this._createPopup();
    }
    return this.container;
  }
};
var FileAttachmentAnnotationElement = class extends AnnotationElement {
  #trigger = null;
  constructor(parameters) {
    super(parameters, {
      isRenderable: true
    });
    const {
      file
    } = this.data;
    this.filename = file.filename;
    this.content = file.content;
    this.linkService.eventBus?.dispatch("fileattachmentannotation", {
      source: this,
      ...file
    });
  }
  render() {
    this.container.classList.add("fileAttachmentAnnotation");
    const {
      container,
      data
    } = this;
    let trigger;
    if (data.hasAppearance || data.fillAlpha === 0) {
      trigger = document.createElement("div");
    } else {
      trigger = document.createElement("img");
      trigger.src = `${this.imageResourcesPath}annotation-${/paperclip/i.test(data.name) ? "paperclip" : "pushpin"}.svg`;
      if (data.fillAlpha && data.fillAlpha < 1) {
        trigger.style = `filter: opacity(${Math.round(data.fillAlpha * 100)}%);`;
      }
    }
    trigger.addEventListener("dblclick", this.#download.bind(this));
    this.#trigger = trigger;
    const {
      isMac
    } = util_FeatureTest.platform;
    container.addEventListener("keydown", (evt) => {
      if (evt.key === "Enter" && (isMac ? evt.metaKey : evt.ctrlKey)) {
        this.#download();
      }
    });
    if (!data.popupRef && this.hasPopupData) {
      this._createPopup();
    } else {
      trigger.classList.add("popupTriggerArea");
    }
    container.append(trigger);
    return container;
  }
  getElementsToTriggerPopup() {
    return this.#trigger;
  }
  addHighlightArea() {
    this.container.classList.add("highlightArea");
  }
  #download() {
    this.downloadManager?.openOrDownloadData(this.content, this.filename);
  }
};
var AnnotationLayer = class {
  #accessibilityManager = null;
  #annotationCanvasMap = null;
  #editableAnnotations = /* @__PURE__ */ new Map();
  constructor({
    div,
    accessibilityManager,
    annotationCanvasMap,
    annotationEditorUIManager,
    page,
    viewport
  }) {
    this.div = div;
    this.#accessibilityManager = accessibilityManager;
    this.#annotationCanvasMap = annotationCanvasMap;
    this.page = page;
    this.viewport = viewport;
    this.zIndex = 0;
    this._annotationEditorUIManager = annotationEditorUIManager;
  }
  hasEditableAnnotations() {
    return this.#editableAnnotations.size > 0;
  }
  #appendElement(element, id) {
    const contentElement = element.firstChild || element;
    contentElement.id = `${AnnotationPrefix}${id}`;
    this.div.append(element);
    this.#accessibilityManager?.moveElementInDOM(this.div, element, contentElement, false);
  }
  async render(params) {
    const {
      annotations
    } = params;
    const layer = this.div;
    setLayerDimensions(layer, this.viewport);
    const popupToElements = /* @__PURE__ */ new Map();
    const elementParams = {
      data: null,
      layer,
      linkService: params.linkService,
      downloadManager: params.downloadManager,
      imageResourcesPath: params.imageResourcesPath || "",
      renderForms: params.renderForms !== false,
      svgFactory: new DOMSVGFactory(),
      annotationStorage: params.annotationStorage || new AnnotationStorage(),
      enableScripting: params.enableScripting === true,
      hasJSActions: params.hasJSActions,
      fieldObjects: params.fieldObjects,
      parent: this,
      elements: null
    };
    for (const data of annotations) {
      if (data.noHTML) {
        continue;
      }
      const isPopupAnnotation = data.annotationType === AnnotationType.POPUP;
      if (!isPopupAnnotation) {
        const {
          width,
          height
        } = getRectDims(data.rect);
        if (width <= 0 || height <= 0) {
          continue;
        }
      } else {
        const elements = popupToElements.get(data.id);
        if (!elements) {
          continue;
        }
        elementParams.elements = elements;
      }
      elementParams.data = data;
      const element = AnnotationElementFactory.create(elementParams);
      if (!element.isRenderable) {
        continue;
      }
      if (!isPopupAnnotation && data.popupRef) {
        const elements = popupToElements.get(data.popupRef);
        if (!elements) {
          popupToElements.set(data.popupRef, [element]);
        } else {
          elements.push(element);
        }
      }
      const rendered = element.render();
      if (data.hidden) {
        rendered.style.visibility = "hidden";
      }
      this.#appendElement(rendered, data.id);
      if (element._isEditable) {
        this.#editableAnnotations.set(element.data.id, element);
        this._annotationEditorUIManager?.renderAnnotationElement(element);
      }
    }
    this.#setAnnotationCanvasMap();
  }
  update({
    viewport
  }) {
    const layer = this.div;
    this.viewport = viewport;
    setLayerDimensions(layer, {
      rotation: viewport.rotation
    });
    this.#setAnnotationCanvasMap();
    layer.hidden = false;
  }
  #setAnnotationCanvasMap() {
    if (!this.#annotationCanvasMap) {
      return;
    }
    const layer = this.div;
    for (const [id, canvas] of this.#annotationCanvasMap) {
      const element = layer.querySelector(`[data-annotation-id="${id}"]`);
      if (!element) {
        continue;
      }
      canvas.className = "annotationContent";
      const {
        firstChild
      } = element;
      if (!firstChild) {
        element.append(canvas);
      } else if (firstChild.nodeName === "CANVAS") {
        firstChild.replaceWith(canvas);
      } else if (!firstChild.classList.contains("annotationContent")) {
        firstChild.before(canvas);
      } else {
        firstChild.after(canvas);
      }
    }
    this.#annotationCanvasMap.clear();
  }
  getEditableAnnotations() {
    return Array.from(this.#editableAnnotations.values());
  }
  getEditableAnnotation(id) {
    return this.#editableAnnotations.get(id);
  }
};
var EOL_PATTERN = /\r\n?|\n/g;
var FreeTextEditor = class _FreeTextEditor extends AnnotationEditor {
  #boundEditorDivBlur = this.editorDivBlur.bind(this);
  #boundEditorDivFocus = this.editorDivFocus.bind(this);
  #boundEditorDivInput = this.editorDivInput.bind(this);
  #boundEditorDivKeydown = this.editorDivKeydown.bind(this);
  #boundEditorDivPaste = this.editorDivPaste.bind(this);
  #color;
  #content = "";
  #editorDivId = `${this.id}-editor`;
  #fontSize;
  #initialData = null;
  static _freeTextDefaultContent = "";
  static _internalPadding = 0;
  static _defaultColor = null;
  static _defaultFontSize = 10;
  static get _keyboardManager() {
    const proto = _FreeTextEditor.prototype;
    const arrowChecker = (self) => self.isEmpty();
    const small = AnnotationEditorUIManager.TRANSLATE_SMALL;
    const big = AnnotationEditorUIManager.TRANSLATE_BIG;
    return shadow(this, "_keyboardManager", new KeyboardManager([[["ctrl+s", "mac+meta+s", "ctrl+p", "mac+meta+p"], proto.commitOrRemove, {
      bubbles: true
    }], [["ctrl+Enter", "mac+meta+Enter", "Escape", "mac+Escape"], proto.commitOrRemove], [["ArrowLeft", "mac+ArrowLeft"], proto._translateEmpty, {
      args: [-small, 0],
      checker: arrowChecker
    }], [["ctrl+ArrowLeft", "mac+shift+ArrowLeft"], proto._translateEmpty, {
      args: [-big, 0],
      checker: arrowChecker
    }], [["ArrowRight", "mac+ArrowRight"], proto._translateEmpty, {
      args: [small, 0],
      checker: arrowChecker
    }], [["ctrl+ArrowRight", "mac+shift+ArrowRight"], proto._translateEmpty, {
      args: [big, 0],
      checker: arrowChecker
    }], [["ArrowUp", "mac+ArrowUp"], proto._translateEmpty, {
      args: [0, -small],
      checker: arrowChecker
    }], [["ctrl+ArrowUp", "mac+shift+ArrowUp"], proto._translateEmpty, {
      args: [0, -big],
      checker: arrowChecker
    }], [["ArrowDown", "mac+ArrowDown"], proto._translateEmpty, {
      args: [0, small],
      checker: arrowChecker
    }], [["ctrl+ArrowDown", "mac+shift+ArrowDown"], proto._translateEmpty, {
      args: [0, big],
      checker: arrowChecker
    }]]));
  }
  static _type = "freetext";
  static _editorType = AnnotationEditorType.FREETEXT;
  constructor(params) {
    super({
      ...params,
      name: "freeTextEditor"
    });
    this.#color = params.color || _FreeTextEditor._defaultColor || AnnotationEditor._defaultLineColor;
    this.#fontSize = params.fontSize || _FreeTextEditor._defaultFontSize;
  }
  static initialize(l10n, uiManager) {
    AnnotationEditor.initialize(l10n, uiManager, {
      strings: ["pdfjs-free-text-default-content"]
    });
    const style = getComputedStyle(document.documentElement);
    this._internalPadding = parseFloat(style.getPropertyValue("--freetext-padding"));
  }
  static updateDefaultParams(type, value) {
    switch (type) {
      case AnnotationEditorParamsType.FREETEXT_SIZE:
        _FreeTextEditor._defaultFontSize = value;
        break;
      case AnnotationEditorParamsType.FREETEXT_COLOR:
        _FreeTextEditor._defaultColor = value;
        break;
    }
  }
  updateParams(type, value) {
    switch (type) {
      case AnnotationEditorParamsType.FREETEXT_SIZE:
        this.#updateFontSize(value);
        break;
      case AnnotationEditorParamsType.FREETEXT_COLOR:
        this.#updateColor(value);
        break;
    }
  }
  static get defaultPropertiesToUpdate() {
    return [[AnnotationEditorParamsType.FREETEXT_SIZE, _FreeTextEditor._defaultFontSize], [AnnotationEditorParamsType.FREETEXT_COLOR, _FreeTextEditor._defaultColor || AnnotationEditor._defaultLineColor]];
  }
  get propertiesToUpdate() {
    return [[AnnotationEditorParamsType.FREETEXT_SIZE, this.#fontSize], [AnnotationEditorParamsType.FREETEXT_COLOR, this.#color]];
  }
  #updateFontSize(fontSize) {
    const setFontsize = (size) => {
      this.editorDiv.style.fontSize = `calc(${size}px * var(--scale-factor))`;
      this.translate(0, -(size - this.#fontSize) * this.parentScale);
      this.#fontSize = size;
      this.#setEditorDimensions();
    };
    const savedFontsize = this.#fontSize;
    this.addCommands({
      cmd: setFontsize.bind(this, fontSize),
      undo: setFontsize.bind(this, savedFontsize),
      post: this._uiManager.updateUI.bind(this._uiManager, this),
      mustExec: true,
      type: AnnotationEditorParamsType.FREETEXT_SIZE,
      overwriteIfSameType: true,
      keepUndo: true
    });
  }
  #updateColor(color) {
    const setColor = (col) => {
      this.#color = this.editorDiv.style.color = col;
    };
    const savedColor = this.#color;
    this.addCommands({
      cmd: setColor.bind(this, color),
      undo: setColor.bind(this, savedColor),
      post: this._uiManager.updateUI.bind(this._uiManager, this),
      mustExec: true,
      type: AnnotationEditorParamsType.FREETEXT_COLOR,
      overwriteIfSameType: true,
      keepUndo: true
    });
  }
  _translateEmpty(x, y) {
    this._uiManager.translateSelectedEditors(x, y, true);
  }
  getInitialTranslation() {
    const scale = this.parentScale;
    return [-_FreeTextEditor._internalPadding * scale, -(_FreeTextEditor._internalPadding + this.#fontSize) * scale];
  }
  rebuild() {
    if (!this.parent) {
      return;
    }
    super.rebuild();
    if (this.div === null) {
      return;
    }
    if (!this.isAttachedToDOM) {
      this.parent.add(this);
    }
  }
  enableEditMode() {
    if (this.isInEditMode()) {
      return;
    }
    this.parent.setEditingState(false);
    this.parent.updateToolbar(AnnotationEditorType.FREETEXT);
    super.enableEditMode();
    this.overlayDiv.classList.remove("enabled");
    this.editorDiv.contentEditable = true;
    this._isDraggable = false;
    this.div.removeAttribute("aria-activedescendant");
    const signal = this._uiManager._signal;
    this.editorDiv.addEventListener("keydown", this.#boundEditorDivKeydown, {
      signal
    });
    this.editorDiv.addEventListener("focus", this.#boundEditorDivFocus, {
      signal
    });
    this.editorDiv.addEventListener("blur", this.#boundEditorDivBlur, {
      signal
    });
    this.editorDiv.addEventListener("input", this.#boundEditorDivInput, {
      signal
    });
    this.editorDiv.addEventListener("paste", this.#boundEditorDivPaste, {
      signal
    });
  }
  disableEditMode() {
    if (!this.isInEditMode()) {
      return;
    }
    this.parent.setEditingState(true);
    super.disableEditMode();
    this.overlayDiv.classList.add("enabled");
    this.editorDiv.contentEditable = false;
    this.div.setAttribute("aria-activedescendant", this.#editorDivId);
    this._isDraggable = true;
    this.editorDiv.removeEventListener("keydown", this.#boundEditorDivKeydown);
    this.editorDiv.removeEventListener("focus", this.#boundEditorDivFocus);
    this.editorDiv.removeEventListener("blur", this.#boundEditorDivBlur);
    this.editorDiv.removeEventListener("input", this.#boundEditorDivInput);
    this.editorDiv.removeEventListener("paste", this.#boundEditorDivPaste);
    this.div.focus({
      preventScroll: true
    });
    this.isEditing = false;
    this.parent.div.classList.add("freetextEditing");
  }
  focusin(event) {
    if (!this._focusEventsAllowed) {
      return;
    }
    super.focusin(event);
    if (event.target !== this.editorDiv) {
      this.editorDiv.focus();
    }
  }
  onceAdded() {
    if (this.width) {
      return;
    }
    this.enableEditMode();
    this.editorDiv.focus();
    if (this._initialOptions?.isCentered) {
      this.center();
    }
    this._initialOptions = null;
  }
  isEmpty() {
    return !this.editorDiv || this.editorDiv.innerText.trim() === "";
  }
  remove() {
    this.isEditing = false;
    if (this.parent) {
      this.parent.setEditingState(true);
      this.parent.div.classList.add("freetextEditing");
    }
    super.remove();
  }
  #extractText() {
    const buffer = [];
    this.editorDiv.normalize();
    for (const child of this.editorDiv.childNodes) {
      buffer.push(_FreeTextEditor.#getNodeContent(child));
    }
    return buffer.join("\n");
  }
  #setEditorDimensions() {
    const [parentWidth, parentHeight] = this.parentDimensions;
    let rect;
    if (this.isAttachedToDOM) {
      rect = this.div.getBoundingClientRect();
    } else {
      const {
        currentLayer,
        div
      } = this;
      const savedDisplay = div.style.display;
      const savedVisibility = div.classList.contains("hidden");
      div.classList.remove("hidden");
      div.style.display = "hidden";
      currentLayer.div.append(this.div);
      rect = div.getBoundingClientRect();
      div.remove();
      div.style.display = savedDisplay;
      div.classList.toggle("hidden", savedVisibility);
    }
    if (this.rotation % 180 === this.parentRotation % 180) {
      this.width = rect.width / parentWidth;
      this.height = rect.height / parentHeight;
    } else {
      this.width = rect.height / parentWidth;
      this.height = rect.width / parentHeight;
    }
    this.fixAndSetPosition();
  }
  commit() {
    if (!this.isInEditMode()) {
      return;
    }
    super.commit();
    this.disableEditMode();
    const savedText = this.#content;
    const newText = this.#content = this.#extractText().trimEnd();
    if (savedText === newText) {
      return;
    }
    const setText = (text) => {
      this.#content = text;
      if (!text) {
        this.remove();
        return;
      }
      this.#setContent();
      this._uiManager.rebuild(this);
      this.#setEditorDimensions();
    };
    this.addCommands({
      cmd: () => {
        setText(newText);
      },
      undo: () => {
        setText(savedText);
      },
      mustExec: false
    });
    this.#setEditorDimensions();
  }
  shouldGetKeyboardEvents() {
    return this.isInEditMode();
  }
  enterInEditMode() {
    this.enableEditMode();
    this.editorDiv.focus();
  }
  dblclick(event) {
    this.enterInEditMode();
  }
  keydown(event) {
    if (event.target === this.div && event.key === "Enter") {
      this.enterInEditMode();
      event.preventDefault();
    }
  }
  editorDivKeydown(event) {
    _FreeTextEditor._keyboardManager.exec(this, event);
  }
  editorDivFocus(event) {
    this.isEditing = true;
  }
  editorDivBlur(event) {
    this.isEditing = false;
  }
  editorDivInput(event) {
    this.parent.div.classList.toggle("freetextEditing", this.isEmpty());
  }
  disableEditing() {
    this.editorDiv.setAttribute("role", "comment");
    this.editorDiv.removeAttribute("aria-multiline");
  }
  enableEditing() {
    this.editorDiv.setAttribute("role", "textbox");
    this.editorDiv.setAttribute("aria-multiline", true);
  }
  render() {
    if (this.div) {
      return this.div;
    }
    let baseX, baseY;
    if (this.width) {
      baseX = this.x;
      baseY = this.y;
    }
    super.render();
    this.editorDiv = document.createElement("div");
    this.editorDiv.className = "internal";
    this.editorDiv.setAttribute("id", this.#editorDivId);
    this.editorDiv.setAttribute("data-l10n-id", "pdfjs-free-text");
    this.enableEditing();
    AnnotationEditor._l10nPromise.get("pdfjs-free-text-default-content").then((msg) => this.editorDiv?.setAttribute("default-content", msg));
    this.editorDiv.contentEditable = true;
    const {
      style
    } = this.editorDiv;
    style.fontSize = `calc(${this.#fontSize}px * var(--scale-factor))`;
    style.color = this.#color;
    this.div.append(this.editorDiv);
    this.overlayDiv = document.createElement("div");
    this.overlayDiv.classList.add("overlay", "enabled");
    this.div.append(this.overlayDiv);
    bindEvents(this, this.div, ["dblclick", "keydown"]);
    if (this.width) {
      const [parentWidth, parentHeight] = this.parentDimensions;
      if (this.annotationElementId) {
        const {
          position
        } = this.#initialData;
        let [tx, ty] = this.getInitialTranslation();
        [tx, ty] = this.pageTranslationToScreen(tx, ty);
        const [pageWidth, pageHeight] = this.pageDimensions;
        const [pageX, pageY] = this.pageTranslation;
        let posX, posY;
        switch (this.rotation) {
          case 0:
            posX = baseX + (position[0] - pageX) / pageWidth;
            posY = baseY + this.height - (position[1] - pageY) / pageHeight;
            break;
          case 90:
            posX = baseX + (position[0] - pageX) / pageWidth;
            posY = baseY - (position[1] - pageY) / pageHeight;
            [tx, ty] = [ty, -tx];
            break;
          case 180:
            posX = baseX - this.width + (position[0] - pageX) / pageWidth;
            posY = baseY - (position[1] - pageY) / pageHeight;
            [tx, ty] = [-tx, -ty];
            break;
          case 270:
            posX = baseX + (position[0] - pageX - this.height * pageHeight) / pageWidth;
            posY = baseY + (position[1] - pageY - this.width * pageWidth) / pageHeight;
            [tx, ty] = [-ty, tx];
            break;
        }
        this.setAt(posX * parentWidth, posY * parentHeight, tx, ty);
      } else {
        this.setAt(baseX * parentWidth, baseY * parentHeight, this.width * parentWidth, this.height * parentHeight);
      }
      this.#setContent();
      this._isDraggable = true;
      this.editorDiv.contentEditable = false;
    } else {
      this._isDraggable = false;
      this.editorDiv.contentEditable = true;
    }
    return this.div;
  }
  static #getNodeContent(node) {
    return (node.nodeType === Node.TEXT_NODE ? node.nodeValue : node.innerText).replaceAll(EOL_PATTERN, "");
  }
  editorDivPaste(event) {
    const clipboardData = event.clipboardData || window.clipboardData;
    const {
      types
    } = clipboardData;
    if (types.length === 1 && types[0] === "text/plain") {
      return;
    }
    event.preventDefault();
    const paste = _FreeTextEditor.#deserializeContent(clipboardData.getData("text") || "").replaceAll(EOL_PATTERN, "\n");
    if (!paste) {
      return;
    }
    const selection = window.getSelection();
    if (!selection.rangeCount) {
      return;
    }
    this.editorDiv.normalize();
    selection.deleteFromDocument();
    const range = selection.getRangeAt(0);
    if (!paste.includes("\n")) {
      range.insertNode(document.createTextNode(paste));
      this.editorDiv.normalize();
      selection.collapseToStart();
      return;
    }
    const {
      startContainer,
      startOffset
    } = range;
    const bufferBefore = [];
    const bufferAfter = [];
    if (startContainer.nodeType === Node.TEXT_NODE) {
      const parent = startContainer.parentElement;
      bufferAfter.push(startContainer.nodeValue.slice(startOffset).replaceAll(EOL_PATTERN, ""));
      if (parent !== this.editorDiv) {
        let buffer = bufferBefore;
        for (const child of this.editorDiv.childNodes) {
          if (child === parent) {
            buffer = bufferAfter;
            continue;
          }
          buffer.push(_FreeTextEditor.#getNodeContent(child));
        }
      }
      bufferBefore.push(startContainer.nodeValue.slice(0, startOffset).replaceAll(EOL_PATTERN, ""));
    } else if (startContainer === this.editorDiv) {
      let buffer = bufferBefore;
      let i = 0;
      for (const child of this.editorDiv.childNodes) {
        if (i++ === startOffset) {
          buffer = bufferAfter;
        }
        buffer.push(_FreeTextEditor.#getNodeContent(child));
      }
    }
    this.#content = `${bufferBefore.join("\n")}${paste}${bufferAfter.join("\n")}`;
    this.#setContent();
    const newRange = new Range();
    let beforeLength = bufferBefore.reduce((acc, line) => acc + line.length, 0);
    for (const {
      firstChild
    } of this.editorDiv.childNodes) {
      if (firstChild.nodeType === Node.TEXT_NODE) {
        const length = firstChild.nodeValue.length;
        if (beforeLength <= length) {
          newRange.setStart(firstChild, beforeLength);
          newRange.setEnd(firstChild, beforeLength);
          break;
        }
        beforeLength -= length;
      }
    }
    selection.removeAllRanges();
    selection.addRange(newRange);
  }
  #setContent() {
    this.editorDiv.replaceChildren();
    if (!this.#content) {
      return;
    }
    for (const line of this.#content.split("\n")) {
      const div = document.createElement("div");
      div.append(line ? document.createTextNode(line) : document.createElement("br"));
      this.editorDiv.append(div);
    }
  }
  #serializeContent() {
    return this.#content.replaceAll("\xA0", " ");
  }
  static #deserializeContent(content) {
    return content.replaceAll(" ", "\xA0");
  }
  get contentDiv() {
    return this.editorDiv;
  }
  static deserialize(data, parent, uiManager) {
    let initialData = null;
    if (data instanceof FreeTextAnnotationElement) {
      const {
        data: {
          defaultAppearanceData: {
            fontSize,
            fontColor
          },
          rect,
          rotation,
          id
        },
        textContent,
        textPosition,
        parent: {
          page: {
            pageNumber
          }
        }
      } = data;
      if (!textContent || textContent.length === 0) {
        return null;
      }
      initialData = data = {
        annotationType: AnnotationEditorType.FREETEXT,
        color: Array.from(fontColor),
        fontSize,
        value: textContent.join("\n"),
        position: textPosition,
        pageIndex: pageNumber - 1,
        rect: rect.slice(0),
        rotation,
        id,
        deleted: false
      };
    }
    const editor = super.deserialize(data, parent, uiManager);
    editor.#fontSize = data.fontSize;
    editor.#color = Util.makeHexColor(...data.color);
    editor.#content = _FreeTextEditor.#deserializeContent(data.value);
    editor.annotationElementId = data.id || null;
    editor.#initialData = initialData;
    return editor;
  }
  serialize(isForCopying = false) {
    if (this.isEmpty()) {
      return null;
    }
    if (this.deleted) {
      return {
        pageIndex: this.pageIndex,
        id: this.annotationElementId,
        deleted: true
      };
    }
    const padding = _FreeTextEditor._internalPadding * this.parentScale;
    const rect = this.getRect(padding, padding);
    const color = AnnotationEditor._colorManager.convert(this.isAttachedToDOM ? getComputedStyle(this.editorDiv).color : this.#color);
    const serialized = {
      annotationType: AnnotationEditorType.FREETEXT,
      color,
      fontSize: this.#fontSize,
      value: this.#serializeContent(),
      pageIndex: this.pageIndex,
      rect,
      rotation: this.rotation,
      structTreeParentId: this._structTreeParentId
    };
    if (isForCopying) {
      return serialized;
    }
    if (this.annotationElementId && !this.#hasElementChanged(serialized)) {
      return null;
    }
    serialized.id = this.annotationElementId;
    return serialized;
  }
  #hasElementChanged(serialized) {
    const {
      value,
      fontSize,
      color,
      pageIndex
    } = this.#initialData;
    return this._hasBeenMoved || serialized.value !== value || serialized.fontSize !== fontSize || serialized.color.some((c, i) => c !== color[i]) || serialized.pageIndex !== pageIndex;
  }
  renderAnnotationElement(annotation) {
    const content = super.renderAnnotationElement(annotation);
    if (this.deleted) {
      return content;
    }
    const {
      style
    } = content;
    style.fontSize = `calc(${this.#fontSize}px * var(--scale-factor))`;
    style.color = this.#color;
    content.replaceChildren();
    for (const line of this.#content.split("\n")) {
      const div = document.createElement("div");
      div.append(line ? document.createTextNode(line) : document.createElement("br"));
      content.append(div);
    }
    const padding = _FreeTextEditor._internalPadding * this.parentScale;
    annotation.updateEdited({
      rect: this.getRect(padding, padding),
      popupContent: this.#content
    });
    return content;
  }
  resetAnnotationElement(annotation) {
    super.resetAnnotationElement(annotation);
    annotation.resetEdited();
  }
};
var Outliner = class {
  #box;
  #verticalEdges = [];
  #intervals = [];
  constructor(boxes, borderWidth = 0, innerMargin = 0, isLTR = true) {
    let minX = Infinity;
    let maxX = -Infinity;
    let minY = Infinity;
    let maxY = -Infinity;
    const NUMBER_OF_DIGITS = 4;
    const EPSILON = 10 ** -NUMBER_OF_DIGITS;
    for (const {
      x,
      y,
      width,
      height
    } of boxes) {
      const x1 = Math.floor((x - borderWidth) / EPSILON) * EPSILON;
      const x2 = Math.ceil((x + width + borderWidth) / EPSILON) * EPSILON;
      const y1 = Math.floor((y - borderWidth) / EPSILON) * EPSILON;
      const y2 = Math.ceil((y + height + borderWidth) / EPSILON) * EPSILON;
      const left = [x1, y1, y2, true];
      const right = [x2, y1, y2, false];
      this.#verticalEdges.push(left, right);
      minX = Math.min(minX, x1);
      maxX = Math.max(maxX, x2);
      minY = Math.min(minY, y1);
      maxY = Math.max(maxY, y2);
    }
    const bboxWidth = maxX - minX + 2 * innerMargin;
    const bboxHeight = maxY - minY + 2 * innerMargin;
    const shiftedMinX = minX - innerMargin;
    const shiftedMinY = minY - innerMargin;
    const lastEdge = this.#verticalEdges.at(isLTR ? -1 : -2);
    const lastPoint = [lastEdge[0], lastEdge[2]];
    for (const edge of this.#verticalEdges) {
      const [x, y1, y2] = edge;
      edge[0] = (x - shiftedMinX) / bboxWidth;
      edge[1] = (y1 - shiftedMinY) / bboxHeight;
      edge[2] = (y2 - shiftedMinY) / bboxHeight;
    }
    this.#box = {
      x: shiftedMinX,
      y: shiftedMinY,
      width: bboxWidth,
      height: bboxHeight,
      lastPoint
    };
  }
  getOutlines() {
    this.#verticalEdges.sort((a, b) => a[0] - b[0] || a[1] - b[1] || a[2] - b[2]);
    const outlineVerticalEdges = [];
    for (const edge of this.#verticalEdges) {
      if (edge[3]) {
        outlineVerticalEdges.push(...this.#breakEdge(edge));
        this.#insert(edge);
      } else {
        this.#remove(edge);
        outlineVerticalEdges.push(...this.#breakEdge(edge));
      }
    }
    return this.#getOutlines(outlineVerticalEdges);
  }
  #getOutlines(outlineVerticalEdges) {
    const edges = [];
    const allEdges = /* @__PURE__ */ new Set();
    for (const edge of outlineVerticalEdges) {
      const [x, y1, y2] = edge;
      edges.push([x, y1, edge], [x, y2, edge]);
    }
    edges.sort((a, b) => a[1] - b[1] || a[0] - b[0]);
    for (let i = 0, ii = edges.length; i < ii; i += 2) {
      const edge1 = edges[i][2];
      const edge2 = edges[i + 1][2];
      edge1.push(edge2);
      edge2.push(edge1);
      allEdges.add(edge1);
      allEdges.add(edge2);
    }
    const outlines = [];
    let outline;
    while (allEdges.size > 0) {
      const edge = allEdges.values().next().value;
      let [x, y1, y2, edge1, edge2] = edge;
      allEdges.delete(edge);
      let lastPointX = x;
      let lastPointY = y1;
      outline = [x, y2];
      outlines.push(outline);
      while (true) {
        let e;
        if (allEdges.has(edge1)) {
          e = edge1;
        } else if (allEdges.has(edge2)) {
          e = edge2;
        } else {
          break;
        }
        allEdges.delete(e);
        [x, y1, y2, edge1, edge2] = e;
        if (lastPointX !== x) {
          outline.push(lastPointX, lastPointY, x, lastPointY === y1 ? y1 : y2);
          lastPointX = x;
        }
        lastPointY = lastPointY === y1 ? y2 : y1;
      }
      outline.push(lastPointX, lastPointY);
    }
    return new HighlightOutline(outlines, this.#box);
  }
  #binarySearch(y) {
    const array = this.#intervals;
    let start = 0;
    let end = array.length - 1;
    while (start <= end) {
      const middle = start + end >> 1;
      const y1 = array[middle][0];
      if (y1 === y) {
        return middle;
      }
      if (y1 < y) {
        start = middle + 1;
      } else {
        end = middle - 1;
      }
    }
    return end + 1;
  }
  #insert([, y1, y2]) {
    const index = this.#binarySearch(y1);
    this.#intervals.splice(index, 0, [y1, y2]);
  }
  #remove([, y1, y2]) {
    const index = this.#binarySearch(y1);
    for (let i = index; i < this.#intervals.length; i++) {
      const [start, end] = this.#intervals[i];
      if (start !== y1) {
        break;
      }
      if (start === y1 && end === y2) {
        this.#intervals.splice(i, 1);
        return;
      }
    }
    for (let i = index - 1; i >= 0; i--) {
      const [start, end] = this.#intervals[i];
      if (start !== y1) {
        break;
      }
      if (start === y1 && end === y2) {
        this.#intervals.splice(i, 1);
        return;
      }
    }
  }
  #breakEdge(edge) {
    const [x, y1, y2] = edge;
    const results = [[x, y1, y2]];
    const index = this.#binarySearch(y2);
    for (let i = 0; i < index; i++) {
      const [start, end] = this.#intervals[i];
      for (let j = 0, jj = results.length; j < jj; j++) {
        const [, y3, y4] = results[j];
        if (end <= y3 || y4 <= start) {
          continue;
        }
        if (y3 >= start) {
          if (y4 > end) {
            results[j][1] = end;
          } else {
            if (jj === 1) {
              return [];
            }
            results.splice(j, 1);
            j--;
            jj--;
          }
          continue;
        }
        results[j][2] = start;
        if (y4 > end) {
          results.push([x, end, y4]);
        }
      }
    }
    return results;
  }
};
var Outline = class {
  toSVGPath() {
    throw new Error("Abstract method `toSVGPath` must be implemented.");
  }
  get box() {
    throw new Error("Abstract getter `box` must be implemented.");
  }
  serialize(_bbox, _rotation) {
    throw new Error("Abstract method `serialize` must be implemented.");
  }
  get free() {
    return this instanceof FreeHighlightOutline;
  }
};
var HighlightOutline = class extends Outline {
  #box;
  #outlines;
  constructor(outlines, box) {
    super();
    this.#outlines = outlines;
    this.#box = box;
  }
  toSVGPath() {
    const buffer = [];
    for (const polygon of this.#outlines) {
      let [prevX, prevY] = polygon;
      buffer.push(`M${prevX} ${prevY}`);
      for (let i = 2; i < polygon.length; i += 2) {
        const x = polygon[i];
        const y = polygon[i + 1];
        if (x === prevX) {
          buffer.push(`V${y}`);
          prevY = y;
        } else if (y === prevY) {
          buffer.push(`H${x}`);
          prevX = x;
        }
      }
      buffer.push("Z");
    }
    return buffer.join(" ");
  }
  serialize([blX, blY, trX, trY], _rotation) {
    const outlines = [];
    const width = trX - blX;
    const height = trY - blY;
    for (const outline of this.#outlines) {
      const points = new Array(outline.length);
      for (let i = 0; i < outline.length; i += 2) {
        points[i] = blX + outline[i] * width;
        points[i + 1] = trY - outline[i + 1] * height;
      }
      outlines.push(points);
    }
    return outlines;
  }
  get box() {
    return this.#box;
  }
};
var FreeOutliner = class _FreeOutliner {
  #box;
  #bottom = [];
  #innerMargin;
  #isLTR;
  #top = [];
  #last = new Float64Array(18);
  #lastX;
  #lastY;
  #min;
  #min_dist;
  #scaleFactor;
  #thickness;
  #points = [];
  static #MIN_DIST = 8;
  static #MIN_DIFF = 2;
  static #MIN = _FreeOutliner.#MIN_DIST + _FreeOutliner.#MIN_DIFF;
  constructor({
    x,
    y
  }, box, scaleFactor, thickness, isLTR, innerMargin = 0) {
    this.#box = box;
    this.#thickness = thickness * scaleFactor;
    this.#isLTR = isLTR;
    this.#last.set([NaN, NaN, NaN, NaN, x, y], 6);
    this.#innerMargin = innerMargin;
    this.#min_dist = _FreeOutliner.#MIN_DIST * scaleFactor;
    this.#min = _FreeOutliner.#MIN * scaleFactor;
    this.#scaleFactor = scaleFactor;
    this.#points.push(x, y);
  }
  get free() {
    return true;
  }
  isEmpty() {
    return isNaN(this.#last[8]);
  }
  #getLastCoords() {
    const lastTop = this.#last.subarray(4, 6);
    const lastBottom = this.#last.subarray(16, 18);
    const [x, y, width, height] = this.#box;
    return [(this.#lastX + (lastTop[0] - lastBottom[0]) / 2 - x) / width, (this.#lastY + (lastTop[1] - lastBottom[1]) / 2 - y) / height, (this.#lastX + (lastBottom[0] - lastTop[0]) / 2 - x) / width, (this.#lastY + (lastBottom[1] - lastTop[1]) / 2 - y) / height];
  }
  add({
    x,
    y
  }) {
    this.#lastX = x;
    this.#lastY = y;
    const [layerX, layerY, layerWidth, layerHeight] = this.#box;
    let [x1, y1, x2, y2] = this.#last.subarray(8, 12);
    const diffX = x - x2;
    const diffY = y - y2;
    const d = Math.hypot(diffX, diffY);
    if (d < this.#min) {
      return false;
    }
    const diffD = d - this.#min_dist;
    const K = diffD / d;
    const shiftX = K * diffX;
    const shiftY = K * diffY;
    let x0 = x1;
    let y0 = y1;
    x1 = x2;
    y1 = y2;
    x2 += shiftX;
    y2 += shiftY;
    this.#points?.push(x, y);
    const nX = -shiftY / diffD;
    const nY = shiftX / diffD;
    const thX = nX * this.#thickness;
    const thY = nY * this.#thickness;
    this.#last.set(this.#last.subarray(2, 8), 0);
    this.#last.set([x2 + thX, y2 + thY], 4);
    this.#last.set(this.#last.subarray(14, 18), 12);
    this.#last.set([x2 - thX, y2 - thY], 16);
    if (isNaN(this.#last[6])) {
      if (this.#top.length === 0) {
        this.#last.set([x1 + thX, y1 + thY], 2);
        this.#top.push(NaN, NaN, NaN, NaN, (x1 + thX - layerX) / layerWidth, (y1 + thY - layerY) / layerHeight);
        this.#last.set([x1 - thX, y1 - thY], 14);
        this.#bottom.push(NaN, NaN, NaN, NaN, (x1 - thX - layerX) / layerWidth, (y1 - thY - layerY) / layerHeight);
      }
      this.#last.set([x0, y0, x1, y1, x2, y2], 6);
      return !this.isEmpty();
    }
    this.#last.set([x0, y0, x1, y1, x2, y2], 6);
    const angle = Math.abs(Math.atan2(y0 - y1, x0 - x1) - Math.atan2(shiftY, shiftX));
    if (angle < Math.PI / 2) {
      [x1, y1, x2, y2] = this.#last.subarray(2, 6);
      this.#top.push(NaN, NaN, NaN, NaN, ((x1 + x2) / 2 - layerX) / layerWidth, ((y1 + y2) / 2 - layerY) / layerHeight);
      [x1, y1, x0, y0] = this.#last.subarray(14, 18);
      this.#bottom.push(NaN, NaN, NaN, NaN, ((x0 + x1) / 2 - layerX) / layerWidth, ((y0 + y1) / 2 - layerY) / layerHeight);
      return true;
    }
    [x0, y0, x1, y1, x2, y2] = this.#last.subarray(0, 6);
    this.#top.push(((x0 + 5 * x1) / 6 - layerX) / layerWidth, ((y0 + 5 * y1) / 6 - layerY) / layerHeight, ((5 * x1 + x2) / 6 - layerX) / layerWidth, ((5 * y1 + y2) / 6 - layerY) / layerHeight, ((x1 + x2) / 2 - layerX) / layerWidth, ((y1 + y2) / 2 - layerY) / layerHeight);
    [x2, y2, x1, y1, x0, y0] = this.#last.subarray(12, 18);
    this.#bottom.push(((x0 + 5 * x1) / 6 - layerX) / layerWidth, ((y0 + 5 * y1) / 6 - layerY) / layerHeight, ((5 * x1 + x2) / 6 - layerX) / layerWidth, ((5 * y1 + y2) / 6 - layerY) / layerHeight, ((x1 + x2) / 2 - layerX) / layerWidth, ((y1 + y2) / 2 - layerY) / layerHeight);
    return true;
  }
  toSVGPath() {
    if (this.isEmpty()) {
      return "";
    }
    const top = this.#top;
    const bottom = this.#bottom;
    const lastTop = this.#last.subarray(4, 6);
    const lastBottom = this.#last.subarray(16, 18);
    const [x, y, width, height] = this.#box;
    const [lastTopX, lastTopY, lastBottomX, lastBottomY] = this.#getLastCoords();
    if (isNaN(this.#last[6]) && !this.isEmpty()) {
      return `M${(this.#last[2] - x) / width} ${(this.#last[3] - y) / height} L${(this.#last[4] - x) / width} ${(this.#last[5] - y) / height} L${lastTopX} ${lastTopY} L${lastBottomX} ${lastBottomY} L${(this.#last[16] - x) / width} ${(this.#last[17] - y) / height} L${(this.#last[14] - x) / width} ${(this.#last[15] - y) / height} Z`;
    }
    const buffer = [];
    buffer.push(`M${top[4]} ${top[5]}`);
    for (let i = 6; i < top.length; i += 6) {
      if (isNaN(top[i])) {
        buffer.push(`L${top[i + 4]} ${top[i + 5]}`);
      } else {
        buffer.push(`C${top[i]} ${top[i + 1]} ${top[i + 2]} ${top[i + 3]} ${top[i + 4]} ${top[i + 5]}`);
      }
    }
    buffer.push(`L${(lastTop[0] - x) / width} ${(lastTop[1] - y) / height} L${lastTopX} ${lastTopY} L${lastBottomX} ${lastBottomY} L${(lastBottom[0] - x) / width} ${(lastBottom[1] - y) / height}`);
    for (let i = bottom.length - 6; i >= 6; i -= 6) {
      if (isNaN(bottom[i])) {
        buffer.push(`L${bottom[i + 4]} ${bottom[i + 5]}`);
      } else {
        buffer.push(`C${bottom[i]} ${bottom[i + 1]} ${bottom[i + 2]} ${bottom[i + 3]} ${bottom[i + 4]} ${bottom[i + 5]}`);
      }
    }
    buffer.push(`L${bottom[4]} ${bottom[5]} Z`);
    return buffer.join(" ");
  }
  getOutlines() {
    const top = this.#top;
    const bottom = this.#bottom;
    const last = this.#last;
    const lastTop = last.subarray(4, 6);
    const lastBottom = last.subarray(16, 18);
    const [layerX, layerY, layerWidth, layerHeight] = this.#box;
    const points = new Float64Array((this.#points?.length ?? 0) + 2);
    for (let i = 0, ii = points.length - 2; i < ii; i += 2) {
      points[i] = (this.#points[i] - layerX) / layerWidth;
      points[i + 1] = (this.#points[i + 1] - layerY) / layerHeight;
    }
    points[points.length - 2] = (this.#lastX - layerX) / layerWidth;
    points[points.length - 1] = (this.#lastY - layerY) / layerHeight;
    const [lastTopX, lastTopY, lastBottomX, lastBottomY] = this.#getLastCoords();
    if (isNaN(last[6]) && !this.isEmpty()) {
      const outline2 = new Float64Array(36);
      outline2.set([NaN, NaN, NaN, NaN, (last[2] - layerX) / layerWidth, (last[3] - layerY) / layerHeight, NaN, NaN, NaN, NaN, (last[4] - layerX) / layerWidth, (last[5] - layerY) / layerHeight, NaN, NaN, NaN, NaN, lastTopX, lastTopY, NaN, NaN, NaN, NaN, lastBottomX, lastBottomY, NaN, NaN, NaN, NaN, (last[16] - layerX) / layerWidth, (last[17] - layerY) / layerHeight, NaN, NaN, NaN, NaN, (last[14] - layerX) / layerWidth, (last[15] - layerY) / layerHeight], 0);
      return new FreeHighlightOutline(outline2, points, this.#box, this.#scaleFactor, this.#innerMargin, this.#isLTR);
    }
    const outline = new Float64Array(this.#top.length + 24 + this.#bottom.length);
    let N = top.length;
    for (let i = 0; i < N; i += 2) {
      if (isNaN(top[i])) {
        outline[i] = outline[i + 1] = NaN;
        continue;
      }
      outline[i] = top[i];
      outline[i + 1] = top[i + 1];
    }
    outline.set([NaN, NaN, NaN, NaN, (lastTop[0] - layerX) / layerWidth, (lastTop[1] - layerY) / layerHeight, NaN, NaN, NaN, NaN, lastTopX, lastTopY, NaN, NaN, NaN, NaN, lastBottomX, lastBottomY, NaN, NaN, NaN, NaN, (lastBottom[0] - layerX) / layerWidth, (lastBottom[1] - layerY) / layerHeight], N);
    N += 24;
    for (let i = bottom.length - 6; i >= 6; i -= 6) {
      for (let j = 0; j < 6; j += 2) {
        if (isNaN(bottom[i + j])) {
          outline[N] = outline[N + 1] = NaN;
          N += 2;
          continue;
        }
        outline[N] = bottom[i + j];
        outline[N + 1] = bottom[i + j + 1];
        N += 2;
      }
    }
    outline.set([NaN, NaN, NaN, NaN, bottom[4], bottom[5]], N);
    return new FreeHighlightOutline(outline, points, this.#box, this.#scaleFactor, this.#innerMargin, this.#isLTR);
  }
};
var FreeHighlightOutline = class extends Outline {
  #box;
  #bbox = null;
  #innerMargin;
  #isLTR;
  #points;
  #scaleFactor;
  #outline;
  constructor(outline, points, box, scaleFactor, innerMargin, isLTR) {
    super();
    this.#outline = outline;
    this.#points = points;
    this.#box = box;
    this.#scaleFactor = scaleFactor;
    this.#innerMargin = innerMargin;
    this.#isLTR = isLTR;
    this.#computeMinMax(isLTR);
    const {
      x,
      y,
      width,
      height
    } = this.#bbox;
    for (let i = 0, ii = outline.length; i < ii; i += 2) {
      outline[i] = (outline[i] - x) / width;
      outline[i + 1] = (outline[i + 1] - y) / height;
    }
    for (let i = 0, ii = points.length; i < ii; i += 2) {
      points[i] = (points[i] - x) / width;
      points[i + 1] = (points[i + 1] - y) / height;
    }
  }
  toSVGPath() {
    const buffer = [`M${this.#outline[4]} ${this.#outline[5]}`];
    for (let i = 6, ii = this.#outline.length; i < ii; i += 6) {
      if (isNaN(this.#outline[i])) {
        buffer.push(`L${this.#outline[i + 4]} ${this.#outline[i + 5]}`);
        continue;
      }
      buffer.push(`C${this.#outline[i]} ${this.#outline[i + 1]} ${this.#outline[i + 2]} ${this.#outline[i + 3]} ${this.#outline[i + 4]} ${this.#outline[i + 5]}`);
    }
    buffer.push("Z");
    return buffer.join(" ");
  }
  serialize([blX, blY, trX, trY], rotation) {
    const width = trX - blX;
    const height = trY - blY;
    let outline;
    let points;
    switch (rotation) {
      case 0:
        outline = this.#rescale(this.#outline, blX, trY, width, -height);
        points = this.#rescale(this.#points, blX, trY, width, -height);
        break;
      case 90:
        outline = this.#rescaleAndSwap(this.#outline, blX, blY, width, height);
        points = this.#rescaleAndSwap(this.#points, blX, blY, width, height);
        break;
      case 180:
        outline = this.#rescale(this.#outline, trX, blY, -width, height);
        points = this.#rescale(this.#points, trX, blY, -width, height);
        break;
      case 270:
        outline = this.#rescaleAndSwap(this.#outline, trX, trY, -width, -height);
        points = this.#rescaleAndSwap(this.#points, trX, trY, -width, -height);
        break;
    }
    return {
      outline: Array.from(outline),
      points: [Array.from(points)]
    };
  }
  #rescale(src, tx, ty, sx, sy) {
    const dest = new Float64Array(src.length);
    for (let i = 0, ii = src.length; i < ii; i += 2) {
      dest[i] = tx + src[i] * sx;
      dest[i + 1] = ty + src[i + 1] * sy;
    }
    return dest;
  }
  #rescaleAndSwap(src, tx, ty, sx, sy) {
    const dest = new Float64Array(src.length);
    for (let i = 0, ii = src.length; i < ii; i += 2) {
      dest[i] = tx + src[i + 1] * sx;
      dest[i + 1] = ty + src[i] * sy;
    }
    return dest;
  }
  #computeMinMax(isLTR) {
    const outline = this.#outline;
    let lastX = outline[4];
    let lastY = outline[5];
    let minX = lastX;
    let minY = lastY;
    let maxX = lastX;
    let maxY = lastY;
    let lastPointX = lastX;
    let lastPointY = lastY;
    const ltrCallback = isLTR ? Math.max : Math.min;
    for (let i = 6, ii = outline.length; i < ii; i += 6) {
      if (isNaN(outline[i])) {
        minX = Math.min(minX, outline[i + 4]);
        minY = Math.min(minY, outline[i + 5]);
        maxX = Math.max(maxX, outline[i + 4]);
        maxY = Math.max(maxY, outline[i + 5]);
        if (lastPointY < outline[i + 5]) {
          lastPointX = outline[i + 4];
          lastPointY = outline[i + 5];
        } else if (lastPointY === outline[i + 5]) {
          lastPointX = ltrCallback(lastPointX, outline[i + 4]);
        }
      } else {
        const bbox = Util.bezierBoundingBox(lastX, lastY, ...outline.slice(i, i + 6));
        minX = Math.min(minX, bbox[0]);
        minY = Math.min(minY, bbox[1]);
        maxX = Math.max(maxX, bbox[2]);
        maxY = Math.max(maxY, bbox[3]);
        if (lastPointY < bbox[3]) {
          lastPointX = bbox[2];
          lastPointY = bbox[3];
        } else if (lastPointY === bbox[3]) {
          lastPointX = ltrCallback(lastPointX, bbox[2]);
        }
      }
      lastX = outline[i + 4];
      lastY = outline[i + 5];
    }
    const x = minX - this.#innerMargin, y = minY - this.#innerMargin, width = maxX - minX + 2 * this.#innerMargin, height = maxY - minY + 2 * this.#innerMargin;
    this.#bbox = {
      x,
      y,
      width,
      height,
      lastPoint: [lastPointX, lastPointY]
    };
  }
  get box() {
    return this.#bbox;
  }
  getNewOutline(thickness, innerMargin) {
    const {
      x,
      y,
      width,
      height
    } = this.#bbox;
    const [layerX, layerY, layerWidth, layerHeight] = this.#box;
    const sx = width * layerWidth;
    const sy = height * layerHeight;
    const tx = x * layerWidth + layerX;
    const ty = y * layerHeight + layerY;
    const outliner = new FreeOutliner({
      x: this.#points[0] * sx + tx,
      y: this.#points[1] * sy + ty
    }, this.#box, this.#scaleFactor, thickness, this.#isLTR, innerMargin ?? this.#innerMargin);
    for (let i = 2; i < this.#points.length; i += 2) {
      outliner.add({
        x: this.#points[i] * sx + tx,
        y: this.#points[i + 1] * sy + ty
      });
    }
    return outliner.getOutlines();
  }
};
var ColorPicker = class _ColorPicker {
  #boundKeyDown = this.#keyDown.bind(this);
  #boundPointerDown = this.#pointerDown.bind(this);
  #button = null;
  #buttonSwatch = null;
  #defaultColor;
  #dropdown = null;
  #dropdownWasFromKeyboard = false;
  #isMainColorPicker = false;
  #editor = null;
  #eventBus;
  #uiManager = null;
  #type;
  static get _keyboardManager() {
    return shadow(this, "_keyboardManager", new KeyboardManager([[["Escape", "mac+Escape"], _ColorPicker.prototype._hideDropdownFromKeyboard], [[" ", "mac+ "], _ColorPicker.prototype._colorSelectFromKeyboard], [["ArrowDown", "ArrowRight", "mac+ArrowDown", "mac+ArrowRight"], _ColorPicker.prototype._moveToNext], [["ArrowUp", "ArrowLeft", "mac+ArrowUp", "mac+ArrowLeft"], _ColorPicker.prototype._moveToPrevious], [["Home", "mac+Home"], _ColorPicker.prototype._moveToBeginning], [["End", "mac+End"], _ColorPicker.prototype._moveToEnd]]));
  }
  constructor({
    editor = null,
    uiManager = null
  }) {
    if (editor) {
      this.#isMainColorPicker = false;
      this.#type = AnnotationEditorParamsType.HIGHLIGHT_COLOR;
      this.#editor = editor;
    } else {
      this.#isMainColorPicker = true;
      this.#type = AnnotationEditorParamsType.HIGHLIGHT_DEFAULT_COLOR;
    }
    this.#uiManager = editor?._uiManager || uiManager;
    this.#eventBus = this.#uiManager._eventBus;
    this.#defaultColor = editor?.color || this.#uiManager?.highlightColors.values().next().value || "#FFFF98";
  }
  renderButton() {
    const button = this.#button = document.createElement("button");
    button.className = "colorPicker";
    button.tabIndex = "0";
    button.setAttribute("data-l10n-id", "pdfjs-editor-colorpicker-button");
    button.setAttribute("aria-haspopup", true);
    const signal = this.#uiManager._signal;
    button.addEventListener("click", this.#openDropdown.bind(this), {
      signal
    });
    button.addEventListener("keydown", this.#boundKeyDown, {
      signal
    });
    const swatch = this.#buttonSwatch = document.createElement("span");
    swatch.className = "swatch";
    swatch.setAttribute("aria-hidden", true);
    swatch.style.backgroundColor = this.#defaultColor;
    button.append(swatch);
    return button;
  }
  renderMainDropdown() {
    const dropdown = this.#dropdown = this.#getDropdownRoot();
    dropdown.setAttribute("aria-orientation", "horizontal");
    dropdown.setAttribute("aria-labelledby", "highlightColorPickerLabel");
    return dropdown;
  }
  #getDropdownRoot() {
    const div = document.createElement("div");
    const signal = this.#uiManager._signal;
    div.addEventListener("contextmenu", noContextMenu, {
      signal
    });
    div.className = "dropdown";
    div.role = "listbox";
    div.setAttribute("aria-multiselectable", false);
    div.setAttribute("aria-orientation", "vertical");
    div.setAttribute("data-l10n-id", "pdfjs-editor-colorpicker-dropdown");
    for (const [name, color] of this.#uiManager.highlightColors) {
      const button = document.createElement("button");
      button.tabIndex = "0";
      button.role = "option";
      button.setAttribute("data-color", color);
      button.title = name;
      button.setAttribute("data-l10n-id", `pdfjs-editor-colorpicker-${name}`);
      const swatch = document.createElement("span");
      button.append(swatch);
      swatch.className = "swatch";
      swatch.style.backgroundColor = color;
      button.setAttribute("aria-selected", color === this.#defaultColor);
      button.addEventListener("click", this.#colorSelect.bind(this, color), {
        signal
      });
      div.append(button);
    }
    div.addEventListener("keydown", this.#boundKeyDown, {
      signal
    });
    return div;
  }
  #colorSelect(color, event) {
    event.stopPropagation();
    this.#eventBus.dispatch("switchannotationeditorparams", {
      source: this,
      type: this.#type,
      value: color
    });
  }
  _colorSelectFromKeyboard(event) {
    if (event.target === this.#button) {
      this.#openDropdown(event);
      return;
    }
    const color = event.target.getAttribute("data-color");
    if (!color) {
      return;
    }
    this.#colorSelect(color, event);
  }
  _moveToNext(event) {
    if (!this.#isDropdownVisible) {
      this.#openDropdown(event);
      return;
    }
    if (event.target === this.#button) {
      this.#dropdown.firstChild?.focus();
      return;
    }
    event.target.nextSibling?.focus();
  }
  _moveToPrevious(event) {
    if (event.target === this.#dropdown?.firstChild || event.target === this.#button) {
      if (this.#isDropdownVisible) {
        this._hideDropdownFromKeyboard();
      }
      return;
    }
    if (!this.#isDropdownVisible) {
      this.#openDropdown(event);
    }
    event.target.previousSibling?.focus();
  }
  _moveToBeginning(event) {
    if (!this.#isDropdownVisible) {
      this.#openDropdown(event);
      return;
    }
    this.#dropdown.firstChild?.focus();
  }
  _moveToEnd(event) {
    if (!this.#isDropdownVisible) {
      this.#openDropdown(event);
      return;
    }
    this.#dropdown.lastChild?.focus();
  }
  #keyDown(event) {
    _ColorPicker._keyboardManager.exec(this, event);
  }
  #openDropdown(event) {
    if (this.#isDropdownVisible) {
      this.hideDropdown();
      return;
    }
    this.#dropdownWasFromKeyboard = event.detail === 0;
    window.addEventListener("pointerdown", this.#boundPointerDown, {
      signal: this.#uiManager._signal
    });
    if (this.#dropdown) {
      this.#dropdown.classList.remove("hidden");
      return;
    }
    const root = this.#dropdown = this.#getDropdownRoot();
    this.#button.append(root);
  }
  #pointerDown(event) {
    if (this.#dropdown?.contains(event.target)) {
      return;
    }
    this.hideDropdown();
  }
  hideDropdown() {
    this.#dropdown?.classList.add("hidden");
    window.removeEventListener("pointerdown", this.#boundPointerDown);
  }
  get #isDropdownVisible() {
    return this.#dropdown && !this.#dropdown.classList.contains("hidden");
  }
  _hideDropdownFromKeyboard() {
    if (this.#isMainColorPicker) {
      return;
    }
    if (!this.#isDropdownVisible) {
      this.#editor?.unselect();
      return;
    }
    this.hideDropdown();
    this.#button.focus({
      preventScroll: true,
      focusVisible: this.#dropdownWasFromKeyboard
    });
  }
  updateColor(color) {
    if (this.#buttonSwatch) {
      this.#buttonSwatch.style.backgroundColor = color;
    }
    if (!this.#dropdown) {
      return;
    }
    const i = this.#uiManager.highlightColors.values();
    for (const child of this.#dropdown.children) {
      child.setAttribute("aria-selected", i.next().value === color);
    }
  }
  destroy() {
    this.#button?.remove();
    this.#button = null;
    this.#buttonSwatch = null;
    this.#dropdown?.remove();
    this.#dropdown = null;
  }
};
var HighlightEditor = class _HighlightEditor extends AnnotationEditor {
  #anchorNode = null;
  #anchorOffset = 0;
  #boxes;
  #clipPathId = null;
  #colorPicker = null;
  #focusOutlines = null;
  #focusNode = null;
  #focusOffset = 0;
  #highlightDiv = null;
  #highlightOutlines = null;
  #id = null;
  #isFreeHighlight = false;
  #boundKeydown = this.#keydown.bind(this);
  #lastPoint = null;
  #opacity;
  #outlineId = null;
  #text = "";
  #thickness;
  #methodOfCreation = "";
  static _defaultColor = null;
  static _defaultOpacity = 1;
  static _defaultThickness = 12;
  static _l10nPromise;
  static _type = "highlight";
  static _editorType = AnnotationEditorType.HIGHLIGHT;
  static _freeHighlightId = -1;
  static _freeHighlight = null;
  static _freeHighlightClipId = "";
  static get _keyboardManager() {
    const proto = _HighlightEditor.prototype;
    return shadow(this, "_keyboardManager", new KeyboardManager([[["ArrowLeft", "mac+ArrowLeft"], proto._moveCaret, {
      args: [0]
    }], [["ArrowRight", "mac+ArrowRight"], proto._moveCaret, {
      args: [1]
    }], [["ArrowUp", "mac+ArrowUp"], proto._moveCaret, {
      args: [2]
    }], [["ArrowDown", "mac+ArrowDown"], proto._moveCaret, {
      args: [3]
    }]]));
  }
  constructor(params) {
    super({
      ...params,
      name: "highlightEditor"
    });
    this.color = params.color || _HighlightEditor._defaultColor;
    this.#thickness = params.thickness || _HighlightEditor._defaultThickness;
    this.#opacity = params.opacity || _HighlightEditor._defaultOpacity;
    this.#boxes = params.boxes || null;
    this.#methodOfCreation = params.methodOfCreation || "";
    this.#text = params.text || "";
    this._isDraggable = false;
    if (params.highlightId > -1) {
      this.#isFreeHighlight = true;
      this.#createFreeOutlines(params);
      this.#addToDrawLayer();
    } else {
      this.#anchorNode = params.anchorNode;
      this.#anchorOffset = params.anchorOffset;
      this.#focusNode = params.focusNode;
      this.#focusOffset = params.focusOffset;
      this.#createOutlines();
      this.#addToDrawLayer();
      this.rotate(this.rotation);
    }
  }
  get telemetryInitialData() {
    return {
      action: "added",
      type: this.#isFreeHighlight ? "free_highlight" : "highlight",
      color: this._uiManager.highlightColorNames.get(this.color),
      thickness: this.#thickness,
      methodOfCreation: this.#methodOfCreation
    };
  }
  get telemetryFinalData() {
    return {
      type: "highlight",
      color: this._uiManager.highlightColorNames.get(this.color)
    };
  }
  static computeTelemetryFinalData(data) {
    return {
      numberOfColors: data.get("color").size
    };
  }
  #createOutlines() {
    const outliner = new Outliner(this.#boxes, 1e-3);
    this.#highlightOutlines = outliner.getOutlines();
    ({
      x: this.x,
      y: this.y,
      width: this.width,
      height: this.height
    } = this.#highlightOutlines.box);
    const outlinerForOutline = new Outliner(this.#boxes, 25e-4, 1e-3, this._uiManager.direction === "ltr");
    this.#focusOutlines = outlinerForOutline.getOutlines();
    const {
      lastPoint
    } = this.#focusOutlines.box;
    this.#lastPoint = [(lastPoint[0] - this.x) / this.width, (lastPoint[1] - this.y) / this.height];
  }
  #createFreeOutlines({
    highlightOutlines,
    highlightId,
    clipPathId
  }) {
    this.#highlightOutlines = highlightOutlines;
    const extraThickness = 1.5;
    this.#focusOutlines = highlightOutlines.getNewOutline(this.#thickness / 2 + extraThickness, 25e-4);
    if (highlightId >= 0) {
      this.#id = highlightId;
      this.#clipPathId = clipPathId;
      this.parent.drawLayer.finalizeLine(highlightId, highlightOutlines);
      this.#outlineId = this.parent.drawLayer.highlightOutline(this.#focusOutlines);
    } else if (this.parent) {
      const angle = this.parent.viewport.rotation;
      this.parent.drawLayer.updateLine(this.#id, highlightOutlines);
      this.parent.drawLayer.updateBox(this.#id, _HighlightEditor.#rotateBbox(this.#highlightOutlines.box, (angle - this.rotation + 360) % 360));
      this.parent.drawLayer.updateLine(this.#outlineId, this.#focusOutlines);
      this.parent.drawLayer.updateBox(this.#outlineId, _HighlightEditor.#rotateBbox(this.#focusOutlines.box, angle));
    }
    const {
      x,
      y,
      width,
      height
    } = highlightOutlines.box;
    switch (this.rotation) {
      case 0:
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        break;
      case 90: {
        const [pageWidth, pageHeight] = this.parentDimensions;
        this.x = y;
        this.y = 1 - x;
        this.width = width * pageHeight / pageWidth;
        this.height = height * pageWidth / pageHeight;
        break;
      }
      case 180:
        this.x = 1 - x;
        this.y = 1 - y;
        this.width = width;
        this.height = height;
        break;
      case 270: {
        const [pageWidth, pageHeight] = this.parentDimensions;
        this.x = 1 - y;
        this.y = x;
        this.width = width * pageHeight / pageWidth;
        this.height = height * pageWidth / pageHeight;
        break;
      }
    }
    const {
      lastPoint
    } = this.#focusOutlines.box;
    this.#lastPoint = [(lastPoint[0] - x) / width, (lastPoint[1] - y) / height];
  }
  static initialize(l10n, uiManager) {
    AnnotationEditor.initialize(l10n, uiManager);
    _HighlightEditor._defaultColor ||= uiManager.highlightColors?.values().next().value || "#fff066";
  }
  static updateDefaultParams(type, value) {
    switch (type) {
      case AnnotationEditorParamsType.HIGHLIGHT_DEFAULT_COLOR:
        _HighlightEditor._defaultColor = value;
        break;
      case AnnotationEditorParamsType.HIGHLIGHT_THICKNESS:
        _HighlightEditor._defaultThickness = value;
        break;
    }
  }
  translateInPage(x, y) {
  }
  get toolbarPosition() {
    return this.#lastPoint;
  }
  updateParams(type, value) {
    switch (type) {
      case AnnotationEditorParamsType.HIGHLIGHT_COLOR:
        this.#updateColor(value);
        break;
      case AnnotationEditorParamsType.HIGHLIGHT_THICKNESS:
        this.#updateThickness(value);
        break;
    }
  }
  static get defaultPropertiesToUpdate() {
    return [[AnnotationEditorParamsType.HIGHLIGHT_DEFAULT_COLOR, _HighlightEditor._defaultColor], [AnnotationEditorParamsType.HIGHLIGHT_THICKNESS, _HighlightEditor._defaultThickness]];
  }
  get propertiesToUpdate() {
    return [[AnnotationEditorParamsType.HIGHLIGHT_COLOR, this.color || _HighlightEditor._defaultColor], [AnnotationEditorParamsType.HIGHLIGHT_THICKNESS, this.#thickness || _HighlightEditor._defaultThickness], [AnnotationEditorParamsType.HIGHLIGHT_FREE, this.#isFreeHighlight]];
  }
  #updateColor(color) {
    const setColor = (col) => {
      this.color = col;
      this.parent?.drawLayer.changeColor(this.#id, col);
      this.#colorPicker?.updateColor(col);
    };
    const savedColor = this.color;
    this.addCommands({
      cmd: setColor.bind(this, color),
      undo: setColor.bind(this, savedColor),
      post: this._uiManager.updateUI.bind(this._uiManager, this),
      mustExec: true,
      type: AnnotationEditorParamsType.HIGHLIGHT_COLOR,
      overwriteIfSameType: true,
      keepUndo: true
    });
    this._reportTelemetry({
      action: "color_changed",
      color: this._uiManager.highlightColorNames.get(color)
    }, true);
  }
  #updateThickness(thickness) {
    const savedThickness = this.#thickness;
    const setThickness = (th) => {
      this.#thickness = th;
      this.#changeThickness(th);
    };
    this.addCommands({
      cmd: setThickness.bind(this, thickness),
      undo: setThickness.bind(this, savedThickness),
      post: this._uiManager.updateUI.bind(this._uiManager, this),
      mustExec: true,
      type: AnnotationEditorParamsType.INK_THICKNESS,
      overwriteIfSameType: true,
      keepUndo: true
    });
    this._reportTelemetry({
      action: "thickness_changed",
      thickness
    }, true);
  }
  async addEditToolbar() {
    const toolbar = await super.addEditToolbar();
    if (!toolbar) {
      return null;
    }
    if (this._uiManager.highlightColors) {
      this.#colorPicker = new ColorPicker({
        editor: this
      });
      toolbar.addColorPicker(this.#colorPicker);
    }
    return toolbar;
  }
  disableEditing() {
    super.disableEditing();
    this.div.classList.toggle("disabled", true);
  }
  enableEditing() {
    super.enableEditing();
    this.div.classList.toggle("disabled", false);
  }
  fixAndSetPosition() {
    return super.fixAndSetPosition(this.#getRotation());
  }
  getBaseTranslation() {
    return [0, 0];
  }
  getRect(tx, ty) {
    return super.getRect(tx, ty, this.#getRotation());
  }
  onceAdded() {
    this.parent.addUndoableEditor(this);
    this.div.focus();
  }
  remove() {
    this.#cleanDrawLayer();
    this._reportTelemetry({
      action: "deleted"
    });
    super.remove();
  }
  rebuild() {
    if (!this.parent) {
      return;
    }
    super.rebuild();
    if (this.div === null) {
      return;
    }
    this.#addToDrawLayer();
    if (!this.isAttachedToDOM) {
      this.parent.add(this);
    }
  }
  setParent(parent) {
    let mustBeSelected = false;
    if (this.parent && !parent) {
      this.#cleanDrawLayer();
    } else if (parent) {
      this.#addToDrawLayer(parent);
      mustBeSelected = !this.parent && this.div?.classList.contains("selectedEditor");
    }
    super.setParent(parent);
    this.show(this._isVisible);
    if (mustBeSelected) {
      this.select();
    }
  }
  #changeThickness(thickness) {
    if (!this.#isFreeHighlight) {
      return;
    }
    this.#createFreeOutlines({
      highlightOutlines: this.#highlightOutlines.getNewOutline(thickness / 2)
    });
    this.fixAndSetPosition();
    const [parentWidth, parentHeight] = this.parentDimensions;
    this.setDims(this.width * parentWidth, this.height * parentHeight);
  }
  #cleanDrawLayer() {
    if (this.#id === null || !this.parent) {
      return;
    }
    this.parent.drawLayer.remove(this.#id);
    this.#id = null;
    this.parent.drawLayer.remove(this.#outlineId);
    this.#outlineId = null;
  }
  #addToDrawLayer(parent = this.parent) {
    if (this.#id !== null) {
      return;
    }
    ({
      id: this.#id,
      clipPathId: this.#clipPathId
    } = parent.drawLayer.highlight(this.#highlightOutlines, this.color, this.#opacity));
    this.#outlineId = parent.drawLayer.highlightOutline(this.#focusOutlines);
    if (this.#highlightDiv) {
      this.#highlightDiv.style.clipPath = this.#clipPathId;
    }
  }
  static #rotateBbox({
    x,
    y,
    width,
    height
  }, angle) {
    switch (angle) {
      case 90:
        return {
          x: 1 - y - height,
          y: x,
          width: height,
          height: width
        };
      case 180:
        return {
          x: 1 - x - width,
          y: 1 - y - height,
          width,
          height
        };
      case 270:
        return {
          x: y,
          y: 1 - x - width,
          width: height,
          height: width
        };
    }
    return {
      x,
      y,
      width,
      height
    };
  }
  rotate(angle) {
    const {
      drawLayer
    } = this.parent;
    let box;
    if (this.#isFreeHighlight) {
      angle = (angle - this.rotation + 360) % 360;
      box = _HighlightEditor.#rotateBbox(this.#highlightOutlines.box, angle);
    } else {
      box = _HighlightEditor.#rotateBbox(this, angle);
    }
    drawLayer.rotate(this.#id, angle);
    drawLayer.rotate(this.#outlineId, angle);
    drawLayer.updateBox(this.#id, box);
    drawLayer.updateBox(this.#outlineId, _HighlightEditor.#rotateBbox(this.#focusOutlines.box, angle));
  }
  render() {
    if (this.div) {
      return this.div;
    }
    const div = super.render();
    if (this.#text) {
      div.setAttribute("aria-label", this.#text);
      div.setAttribute("role", "mark");
    }
    if (this.#isFreeHighlight) {
      div.classList.add("free");
    } else {
      this.div.addEventListener("keydown", this.#boundKeydown, {
        signal: this._uiManager._signal
      });
    }
    const highlightDiv = this.#highlightDiv = document.createElement("div");
    div.append(highlightDiv);
    highlightDiv.setAttribute("aria-hidden", "true");
    highlightDiv.className = "internal";
    highlightDiv.style.clipPath = this.#clipPathId;
    const [parentWidth, parentHeight] = this.parentDimensions;
    this.setDims(this.width * parentWidth, this.height * parentHeight);
    bindEvents(this, this.#highlightDiv, ["pointerover", "pointerleave"]);
    this.enableEditing();
    return div;
  }
  pointerover() {
    this.parent.drawLayer.addClass(this.#outlineId, "hovered");
  }
  pointerleave() {
    this.parent.drawLayer.removeClass(this.#outlineId, "hovered");
  }
  #keydown(event) {
    _HighlightEditor._keyboardManager.exec(this, event);
  }
  _moveCaret(direction) {
    this.parent.unselect(this);
    switch (direction) {
      case 0:
      case 2:
        this.#setCaret(true);
        break;
      case 1:
      case 3:
        this.#setCaret(false);
        break;
    }
  }
  #setCaret(start) {
    if (!this.#anchorNode) {
      return;
    }
    const selection = window.getSelection();
    if (start) {
      selection.setPosition(this.#anchorNode, this.#anchorOffset);
    } else {
      selection.setPosition(this.#focusNode, this.#focusOffset);
    }
  }
  select() {
    super.select();
    if (!this.#outlineId) {
      return;
    }
    this.parent?.drawLayer.removeClass(this.#outlineId, "hovered");
    this.parent?.drawLayer.addClass(this.#outlineId, "selected");
  }
  unselect() {
    super.unselect();
    if (!this.#outlineId) {
      return;
    }
    this.parent?.drawLayer.removeClass(this.#outlineId, "selected");
    if (!this.#isFreeHighlight) {
      this.#setCaret(false);
    }
  }
  get _mustFixPosition() {
    return !this.#isFreeHighlight;
  }
  show(visible = this._isVisible) {
    super.show(visible);
    if (this.parent) {
      this.parent.drawLayer.show(this.#id, visible);
      this.parent.drawLayer.show(this.#outlineId, visible);
    }
  }
  #getRotation() {
    return this.#isFreeHighlight ? this.rotation : 0;
  }
  #serializeBoxes() {
    if (this.#isFreeHighlight) {
      return null;
    }
    const [pageWidth, pageHeight] = this.pageDimensions;
    const [pageX, pageY] = this.pageTranslation;
    const boxes = this.#boxes;
    const quadPoints = new Float32Array(boxes.length * 8);
    let i = 0;
    for (const {
      x,
      y,
      width,
      height
    } of boxes) {
      const sx = x * pageWidth + pageX;
      const sy = (1 - y - height) * pageHeight + pageY;
      quadPoints[i] = quadPoints[i + 4] = sx;
      quadPoints[i + 1] = quadPoints[i + 3] = sy;
      quadPoints[i + 2] = quadPoints[i + 6] = sx + width * pageWidth;
      quadPoints[i + 5] = quadPoints[i + 7] = sy + height * pageHeight;
      i += 8;
    }
    return quadPoints;
  }
  #serializeOutlines(rect) {
    return this.#highlightOutlines.serialize(rect, this.#getRotation());
  }
  static startHighlighting(parent, isLTR, {
    target: textLayer,
    x,
    y
  }) {
    const {
      x: layerX,
      y: layerY,
      width: parentWidth,
      height: parentHeight
    } = textLayer.getBoundingClientRect();
    const pointerMove = (e) => {
      this.#highlightMove(parent, e);
    };
    const signal = parent._signal;
    const pointerDownOptions = {
      capture: true,
      passive: false,
      signal
    };
    const pointerDown = (e) => {
      e.preventDefault();
      e.stopPropagation();
    };
    const pointerUpCallback = (e) => {
      textLayer.removeEventListener("pointermove", pointerMove);
      window.removeEventListener("blur", pointerUpCallback);
      window.removeEventListener("pointerup", pointerUpCallback);
      window.removeEventListener("pointerdown", pointerDown, pointerDownOptions);
      window.removeEventListener("contextmenu", noContextMenu);
      this.#endHighlight(parent, e);
    };
    window.addEventListener("blur", pointerUpCallback, {
      signal
    });
    window.addEventListener("pointerup", pointerUpCallback, {
      signal
    });
    window.addEventListener("pointerdown", pointerDown, pointerDownOptions);
    window.addEventListener("contextmenu", noContextMenu, {
      signal
    });
    textLayer.addEventListener("pointermove", pointerMove, {
      signal
    });
    this._freeHighlight = new FreeOutliner({
      x,
      y
    }, [layerX, layerY, parentWidth, parentHeight], parent.scale, this._defaultThickness / 2, isLTR, 1e-3);
    ({
      id: this._freeHighlightId,
      clipPathId: this._freeHighlightClipId
    } = parent.drawLayer.highlight(this._freeHighlight, this._defaultColor, this._defaultOpacity, true));
  }
  static #highlightMove(parent, event) {
    if (this._freeHighlight.add(event)) {
      parent.drawLayer.updatePath(this._freeHighlightId, this._freeHighlight);
    }
  }
  static #endHighlight(parent, event) {
    if (!this._freeHighlight.isEmpty()) {
      parent.createAndAddNewEditor(event, false, {
        highlightId: this._freeHighlightId,
        highlightOutlines: this._freeHighlight.getOutlines(),
        clipPathId: this._freeHighlightClipId,
        methodOfCreation: "main_toolbar"
      });
    } else {
      parent.drawLayer.removeFreeHighlight(this._freeHighlightId);
    }
    this._freeHighlightId = -1;
    this._freeHighlight = null;
    this._freeHighlightClipId = "";
  }
  static deserialize(data, parent, uiManager) {
    const editor = super.deserialize(data, parent, uiManager);
    const {
      rect: [blX, blY, trX, trY],
      color,
      quadPoints
    } = data;
    editor.color = Util.makeHexColor(...color);
    editor.#opacity = data.opacity;
    const [pageWidth, pageHeight] = editor.pageDimensions;
    editor.width = (trX - blX) / pageWidth;
    editor.height = (trY - blY) / pageHeight;
    const boxes = editor.#boxes = [];
    for (let i = 0; i < quadPoints.length; i += 8) {
      boxes.push({
        x: (quadPoints[4] - trX) / pageWidth,
        y: (trY - (1 - quadPoints[i + 5])) / pageHeight,
        width: (quadPoints[i + 2] - quadPoints[i]) / pageWidth,
        height: (quadPoints[i + 5] - quadPoints[i + 1]) / pageHeight
      });
    }
    editor.#createOutlines();
    return editor;
  }
  serialize(isForCopying = false) {
    if (this.isEmpty() || isForCopying) {
      return null;
    }
    const rect = this.getRect(0, 0);
    const color = AnnotationEditor._colorManager.convert(this.color);
    return {
      annotationType: AnnotationEditorType.HIGHLIGHT,
      color,
      opacity: this.#opacity,
      thickness: this.#thickness,
      quadPoints: this.#serializeBoxes(),
      outlines: this.#serializeOutlines(rect),
      pageIndex: this.pageIndex,
      rect,
      rotation: this.#getRotation(),
      structTreeParentId: this._structTreeParentId
    };
  }
  static canCreateNewEmptyEditor() {
    return false;
  }
};
var InkEditor = class _InkEditor extends AnnotationEditor {
  #baseHeight = 0;
  #baseWidth = 0;
  #boundCanvasPointermove = this.canvasPointermove.bind(this);
  #boundCanvasPointerleave = this.canvasPointerleave.bind(this);
  #boundCanvasPointerup = this.canvasPointerup.bind(this);
  #boundCanvasPointerdown = this.canvasPointerdown.bind(this);
  #canvasContextMenuTimeoutId = null;
  #currentPath2D = new Path2D();
  #disableEditing = false;
  #hasSomethingToDraw = false;
  #isCanvasInitialized = false;
  #observer = null;
  #realWidth = 0;
  #realHeight = 0;
  #requestFrameCallback = null;
  static _defaultColor = null;
  static _defaultOpacity = 1;
  static _defaultThickness = 1;
  static _type = "ink";
  static _editorType = AnnotationEditorType.INK;
  constructor(params) {
    super({
      ...params,
      name: "inkEditor"
    });
    this.color = params.color || null;
    this.thickness = params.thickness || null;
    this.opacity = params.opacity || null;
    this.paths = [];
    this.bezierPath2D = [];
    this.allRawPaths = [];
    this.currentPath = [];
    this.scaleFactor = 1;
    this.translationX = this.translationY = 0;
    this.x = 0;
    this.y = 0;
    this._willKeepAspectRatio = true;
  }
  static initialize(l10n, uiManager) {
    AnnotationEditor.initialize(l10n, uiManager);
  }
  static updateDefaultParams(type, value) {
    switch (type) {
      case AnnotationEditorParamsType.INK_THICKNESS:
        _InkEditor._defaultThickness = value;
        break;
      case AnnotationEditorParamsType.INK_COLOR:
        _InkEditor._defaultColor = value;
        break;
      case AnnotationEditorParamsType.INK_OPACITY:
        _InkEditor._defaultOpacity = value / 100;
        break;
    }
  }
  updateParams(type, value) {
    switch (type) {
      case AnnotationEditorParamsType.INK_THICKNESS:
        this.#updateThickness(value);
        break;
      case AnnotationEditorParamsType.INK_COLOR:
        this.#updateColor(value);
        break;
      case AnnotationEditorParamsType.INK_OPACITY:
        this.#updateOpacity(value);
        break;
    }
  }
  static get defaultPropertiesToUpdate() {
    return [[AnnotationEditorParamsType.INK_THICKNESS, _InkEditor._defaultThickness], [AnnotationEditorParamsType.INK_COLOR, _InkEditor._defaultColor || AnnotationEditor._defaultLineColor], [AnnotationEditorParamsType.INK_OPACITY, Math.round(_InkEditor._defaultOpacity * 100)]];
  }
  get propertiesToUpdate() {
    return [[AnnotationEditorParamsType.INK_THICKNESS, this.thickness || _InkEditor._defaultThickness], [AnnotationEditorParamsType.INK_COLOR, this.color || _InkEditor._defaultColor || AnnotationEditor._defaultLineColor], [AnnotationEditorParamsType.INK_OPACITY, Math.round(100 * (this.opacity ?? _InkEditor._defaultOpacity))]];
  }
  #updateThickness(thickness) {
    const setThickness = (th) => {
      this.thickness = th;
      this.#fitToContent();
    };
    const savedThickness = this.thickness;
    this.addCommands({
      cmd: setThickness.bind(this, thickness),
      undo: setThickness.bind(this, savedThickness),
      post: this._uiManager.updateUI.bind(this._uiManager, this),
      mustExec: true,
      type: AnnotationEditorParamsType.INK_THICKNESS,
      overwriteIfSameType: true,
      keepUndo: true
    });
  }
  #updateColor(color) {
    const setColor = (col) => {
      this.color = col;
      this.#redraw();
    };
    const savedColor = this.color;
    this.addCommands({
      cmd: setColor.bind(this, color),
      undo: setColor.bind(this, savedColor),
      post: this._uiManager.updateUI.bind(this._uiManager, this),
      mustExec: true,
      type: AnnotationEditorParamsType.INK_COLOR,
      overwriteIfSameType: true,
      keepUndo: true
    });
  }
  #updateOpacity(opacity) {
    const setOpacity = (op) => {
      this.opacity = op;
      this.#redraw();
    };
    opacity /= 100;
    const savedOpacity = this.opacity;
    this.addCommands({
      cmd: setOpacity.bind(this, opacity),
      undo: setOpacity.bind(this, savedOpacity),
      post: this._uiManager.updateUI.bind(this._uiManager, this),
      mustExec: true,
      type: AnnotationEditorParamsType.INK_OPACITY,
      overwriteIfSameType: true,
      keepUndo: true
    });
  }
  rebuild() {
    if (!this.parent) {
      return;
    }
    super.rebuild();
    if (this.div === null) {
      return;
    }
    if (!this.canvas) {
      this.#createCanvas();
      this.#createObserver();
    }
    if (!this.isAttachedToDOM) {
      this.parent.add(this);
      this.#setCanvasDims();
    }
    this.#fitToContent();
  }
  remove() {
    if (this.canvas === null) {
      return;
    }
    if (!this.isEmpty()) {
      this.commit();
    }
    this.canvas.width = this.canvas.height = 0;
    this.canvas.remove();
    this.canvas = null;
    if (this.#canvasContextMenuTimeoutId) {
      clearTimeout(this.#canvasContextMenuTimeoutId);
      this.#canvasContextMenuTimeoutId = null;
    }
    this.#observer?.disconnect();
    this.#observer = null;
    super.remove();
  }
  setParent(parent) {
    if (!this.parent && parent) {
      this._uiManager.removeShouldRescale(this);
    } else if (this.parent && parent === null) {
      this._uiManager.addShouldRescale(this);
    }
    super.setParent(parent);
  }
  onScaleChanging() {
    const [parentWidth, parentHeight] = this.parentDimensions;
    const width = this.width * parentWidth;
    const height = this.height * parentHeight;
    this.setDimensions(width, height);
  }
  enableEditMode() {
    if (this.#disableEditing || this.canvas === null) {
      return;
    }
    super.enableEditMode();
    this._isDraggable = false;
    this.canvas.addEventListener("pointerdown", this.#boundCanvasPointerdown, {
      signal: this._uiManager._signal
    });
  }
  disableEditMode() {
    if (!this.isInEditMode() || this.canvas === null) {
      return;
    }
    super.disableEditMode();
    this._isDraggable = !this.isEmpty();
    this.div.classList.remove("editing");
    this.canvas.removeEventListener("pointerdown", this.#boundCanvasPointerdown);
  }
  onceAdded() {
    this._isDraggable = !this.isEmpty();
  }
  isEmpty() {
    return this.paths.length === 0 || this.paths.length === 1 && this.paths[0].length === 0;
  }
  #getInitialBBox() {
    const {
      parentRotation,
      parentDimensions: [width, height]
    } = this;
    switch (parentRotation) {
      case 90:
        return [0, height, height, width];
      case 180:
        return [width, height, width, height];
      case 270:
        return [width, 0, height, width];
      default:
        return [0, 0, width, height];
    }
  }
  #setStroke() {
    const {
      ctx,
      color,
      opacity,
      thickness,
      parentScale,
      scaleFactor
    } = this;
    ctx.lineWidth = thickness * parentScale / scaleFactor;
    ctx.lineCap = "round";
    ctx.lineJoin = "round";
    ctx.miterLimit = 10;
    ctx.strokeStyle = `${color}${opacityToHex(opacity)}`;
  }
  #startDrawing(x, y) {
    const signal = this._uiManager._signal;
    this.canvas.addEventListener("contextmenu", noContextMenu, {
      signal
    });
    this.canvas.addEventListener("pointerleave", this.#boundCanvasPointerleave, {
      signal
    });
    this.canvas.addEventListener("pointermove", this.#boundCanvasPointermove, {
      signal
    });
    this.canvas.addEventListener("pointerup", this.#boundCanvasPointerup, {
      signal
    });
    this.canvas.removeEventListener("pointerdown", this.#boundCanvasPointerdown);
    this.isEditing = true;
    if (!this.#isCanvasInitialized) {
      this.#isCanvasInitialized = true;
      this.#setCanvasDims();
      this.thickness ||= _InkEditor._defaultThickness;
      this.color ||= _InkEditor._defaultColor || AnnotationEditor._defaultLineColor;
      this.opacity ??= _InkEditor._defaultOpacity;
    }
    this.currentPath.push([x, y]);
    this.#hasSomethingToDraw = false;
    this.#setStroke();
    this.#requestFrameCallback = () => {
      this.#drawPoints();
      if (this.#requestFrameCallback) {
        window.requestAnimationFrame(this.#requestFrameCallback);
      }
    };
    window.requestAnimationFrame(this.#requestFrameCallback);
  }
  #draw(x, y) {
    const [lastX, lastY] = this.currentPath.at(-1);
    if (this.currentPath.length > 1 && x === lastX && y === lastY) {
      return;
    }
    const currentPath = this.currentPath;
    let path2D = this.#currentPath2D;
    currentPath.push([x, y]);
    this.#hasSomethingToDraw = true;
    if (currentPath.length <= 2) {
      path2D.moveTo(...currentPath[0]);
      path2D.lineTo(x, y);
      return;
    }
    if (currentPath.length === 3) {
      this.#currentPath2D = path2D = new Path2D();
      path2D.moveTo(...currentPath[0]);
    }
    this.#makeBezierCurve(path2D, ...currentPath.at(-3), ...currentPath.at(-2), x, y);
  }
  #endPath() {
    if (this.currentPath.length === 0) {
      return;
    }
    const lastPoint = this.currentPath.at(-1);
    this.#currentPath2D.lineTo(...lastPoint);
  }
  #stopDrawing(x, y) {
    this.#requestFrameCallback = null;
    x = Math.min(Math.max(x, 0), this.canvas.width);
    y = Math.min(Math.max(y, 0), this.canvas.height);
    this.#draw(x, y);
    this.#endPath();
    let bezier;
    if (this.currentPath.length !== 1) {
      bezier = this.#generateBezierPoints();
    } else {
      const xy = [x, y];
      bezier = [[xy, xy.slice(), xy.slice(), xy]];
    }
    const path2D = this.#currentPath2D;
    const currentPath = this.currentPath;
    this.currentPath = [];
    this.#currentPath2D = new Path2D();
    const cmd = () => {
      this.allRawPaths.push(currentPath);
      this.paths.push(bezier);
      this.bezierPath2D.push(path2D);
      this._uiManager.rebuild(this);
    };
    const undo = () => {
      this.allRawPaths.pop();
      this.paths.pop();
      this.bezierPath2D.pop();
      if (this.paths.length === 0) {
        this.remove();
      } else {
        if (!this.canvas) {
          this.#createCanvas();
          this.#createObserver();
        }
        this.#fitToContent();
      }
    };
    this.addCommands({
      cmd,
      undo,
      mustExec: true
    });
  }
  #drawPoints() {
    if (!this.#hasSomethingToDraw) {
      return;
    }
    this.#hasSomethingToDraw = false;
    const thickness = Math.ceil(this.thickness * this.parentScale);
    const lastPoints = this.currentPath.slice(-3);
    const x = lastPoints.map((xy) => xy[0]);
    const y = lastPoints.map((xy) => xy[1]);
    const xMin = Math.min(...x) - thickness;
    const xMax = Math.max(...x) + thickness;
    const yMin = Math.min(...y) - thickness;
    const yMax = Math.max(...y) + thickness;
    const {
      ctx
    } = this;
    ctx.save();
    ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    for (const path of this.bezierPath2D) {
      ctx.stroke(path);
    }
    ctx.stroke(this.#currentPath2D);
    ctx.restore();
  }
  #makeBezierCurve(path2D, x0, y0, x1, y1, x2, y2) {
    const prevX = (x0 + x1) / 2;
    const prevY = (y0 + y1) / 2;
    const x3 = (x1 + x2) / 2;
    const y3 = (y1 + y2) / 2;
    path2D.bezierCurveTo(prevX + 2 * (x1 - prevX) / 3, prevY + 2 * (y1 - prevY) / 3, x3 + 2 * (x1 - x3) / 3, y3 + 2 * (y1 - y3) / 3, x3, y3);
  }
  #generateBezierPoints() {
    const path = this.currentPath;
    if (path.length <= 2) {
      return [[path[0], path[0], path.at(-1), path.at(-1)]];
    }
    const bezierPoints = [];
    let i;
    let [x0, y0] = path[0];
    for (i = 1; i < path.length - 2; i++) {
      const [x12, y12] = path[i];
      const [x22, y22] = path[i + 1];
      const x3 = (x12 + x22) / 2;
      const y3 = (y12 + y22) / 2;
      const control12 = [x0 + 2 * (x12 - x0) / 3, y0 + 2 * (y12 - y0) / 3];
      const control22 = [x3 + 2 * (x12 - x3) / 3, y3 + 2 * (y12 - y3) / 3];
      bezierPoints.push([[x0, y0], control12, control22, [x3, y3]]);
      [x0, y0] = [x3, y3];
    }
    const [x1, y1] = path[i];
    const [x2, y2] = path[i + 1];
    const control1 = [x0 + 2 * (x1 - x0) / 3, y0 + 2 * (y1 - y0) / 3];
    const control2 = [x2 + 2 * (x1 - x2) / 3, y2 + 2 * (y1 - y2) / 3];
    bezierPoints.push([[x0, y0], control1, control2, [x2, y2]]);
    return bezierPoints;
  }
  #redraw() {
    if (this.isEmpty()) {
      this.#updateTransform();
      return;
    }
    this.#setStroke();
    const {
      canvas,
      ctx
    } = this;
    ctx.setTransform(1, 0, 0, 1, 0, 0);
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    this.#updateTransform();
    for (const path of this.bezierPath2D) {
      ctx.stroke(path);
    }
  }
  commit() {
    if (this.#disableEditing) {
      return;
    }
    super.commit();
    this.isEditing = false;
    this.disableEditMode();
    this.setInForeground();
    this.#disableEditing = true;
    this.div.classList.add("disabled");
    this.#fitToContent(true);
    this.select();
    this.parent.addInkEditorIfNeeded(true);
    this.moveInDOM();
    this.div.focus({
      preventScroll: true
    });
  }
  focusin(event) {
    if (!this._focusEventsAllowed) {
      return;
    }
    super.focusin(event);
    this.enableEditMode();
  }
  canvasPointerdown(event) {
    if (event.button !== 0 || !this.isInEditMode() || this.#disableEditing) {
      return;
    }
    this.setInForeground();
    event.preventDefault();
    if (!this.div.contains(document.activeElement)) {
      this.div.focus({
        preventScroll: true
      });
    }
    this.#startDrawing(event.offsetX, event.offsetY);
  }
  canvasPointermove(event) {
    event.preventDefault();
    this.#draw(event.offsetX, event.offsetY);
  }
  canvasPointerup(event) {
    event.preventDefault();
    this.#endDrawing(event);
  }
  canvasPointerleave(event) {
    this.#endDrawing(event);
  }
  #endDrawing(event) {
    this.canvas.removeEventListener("pointerleave", this.#boundCanvasPointerleave);
    this.canvas.removeEventListener("pointermove", this.#boundCanvasPointermove);
    this.canvas.removeEventListener("pointerup", this.#boundCanvasPointerup);
    this.canvas.addEventListener("pointerdown", this.#boundCanvasPointerdown, {
      signal: this._uiManager._signal
    });
    if (this.#canvasContextMenuTimeoutId) {
      clearTimeout(this.#canvasContextMenuTimeoutId);
    }
    this.#canvasContextMenuTimeoutId = setTimeout(() => {
      this.#canvasContextMenuTimeoutId = null;
      this.canvas.removeEventListener("contextmenu", noContextMenu);
    }, 10);
    this.#stopDrawing(event.offsetX, event.offsetY);
    this.addToAnnotationStorage();
    this.setInBackground();
  }
  #createCanvas() {
    this.canvas = document.createElement("canvas");
    this.canvas.width = this.canvas.height = 0;
    this.canvas.className = "inkEditorCanvas";
    this.canvas.setAttribute("data-l10n-id", "pdfjs-ink-canvas");
    this.div.append(this.canvas);
    this.ctx = this.canvas.getContext("2d");
  }
  #createObserver() {
    this.#observer = new ResizeObserver((entries) => {
      const rect = entries[0].contentRect;
      if (rect.width && rect.height) {
        this.setDimensions(rect.width, rect.height);
      }
    });
    this.#observer.observe(this.div);
    this._uiManager._signal.addEventListener("abort", () => {
      this.#observer?.disconnect();
      this.#observer = null;
    }, {
      once: true
    });
  }
  get isResizable() {
    return !this.isEmpty() && this.#disableEditing;
  }
  render() {
    if (this.div) {
      return this.div;
    }
    let baseX, baseY;
    if (this.width) {
      baseX = this.x;
      baseY = this.y;
    }
    super.render();
    this.div.setAttribute("data-l10n-id", "pdfjs-ink");
    const [x, y, w, h] = this.#getInitialBBox();
    this.setAt(x, y, 0, 0);
    this.setDims(w, h);
    this.#createCanvas();
    if (this.width) {
      const [parentWidth, parentHeight] = this.parentDimensions;
      this.setAspectRatio(this.width * parentWidth, this.height * parentHeight);
      this.setAt(baseX * parentWidth, baseY * parentHeight, this.width * parentWidth, this.height * parentHeight);
      this.#isCanvasInitialized = true;
      this.#setCanvasDims();
      this.setDims(this.width * parentWidth, this.height * parentHeight);
      this.#redraw();
      this.div.classList.add("disabled");
    } else {
      this.div.classList.add("editing");
      this.enableEditMode();
    }
    this.#createObserver();
    return this.div;
  }
  #setCanvasDims() {
    if (!this.#isCanvasInitialized) {
      return;
    }
    const [parentWidth, parentHeight] = this.parentDimensions;
    this.canvas.width = Math.ceil(this.width * parentWidth);
    this.canvas.height = Math.ceil(this.height * parentHeight);
    this.#updateTransform();
  }
  setDimensions(width, height) {
    const roundedWidth = Math.round(width);
    const roundedHeight = Math.round(height);
    if (this.#realWidth === roundedWidth && this.#realHeight === roundedHeight) {
      return;
    }
    this.#realWidth = roundedWidth;
    this.#realHeight = roundedHeight;
    this.canvas.style.visibility = "hidden";
    const [parentWidth, parentHeight] = this.parentDimensions;
    this.width = width / parentWidth;
    this.height = height / parentHeight;
    this.fixAndSetPosition();
    if (this.#disableEditing) {
      this.#setScaleFactor(width, height);
    }
    this.#setCanvasDims();
    this.#redraw();
    this.canvas.style.visibility = "visible";
    this.fixDims();
  }
  #setScaleFactor(width, height) {
    const padding = this.#getPadding();
    const scaleFactorW = (width - padding) / this.#baseWidth;
    const scaleFactorH = (height - padding) / this.#baseHeight;
    this.scaleFactor = Math.min(scaleFactorW, scaleFactorH);
  }
  #updateTransform() {
    const padding = this.#getPadding() / 2;
    this.ctx.setTransform(this.scaleFactor, 0, 0, this.scaleFactor, this.translationX * this.scaleFactor + padding, this.translationY * this.scaleFactor + padding);
  }
  static #buildPath2D(bezier) {
    const path2D = new Path2D();
    for (let i = 0, ii = bezier.length; i < ii; i++) {
      const [first, control1, control2, second] = bezier[i];
      if (i === 0) {
        path2D.moveTo(...first);
      }
      path2D.bezierCurveTo(control1[0], control1[1], control2[0], control2[1], second[0], second[1]);
    }
    return path2D;
  }
  static #toPDFCoordinates(points, rect, rotation) {
    const [blX, blY, trX, trY] = rect;
    switch (rotation) {
      case 0:
        for (let i = 0, ii = points.length; i < ii; i += 2) {
          points[i] += blX;
          points[i + 1] = trY - points[i + 1];
        }
        break;
      case 90:
        for (let i = 0, ii = points.length; i < ii; i += 2) {
          const x = points[i];
          points[i] = points[i + 1] + blX;
          points[i + 1] = x + blY;
        }
        break;
      case 180:
        for (let i = 0, ii = points.length; i < ii; i += 2) {
          points[i] = trX - points[i];
          points[i + 1] += blY;
        }
        break;
      case 270:
        for (let i = 0, ii = points.length; i < ii; i += 2) {
          const x = points[i];
          points[i] = trX - points[i + 1];
          points[i + 1] = trY - x;
        }
        break;
      default:
        throw new Error("Invalid rotation");
    }
    return points;
  }
  static #fromPDFCoordinates(points, rect, rotation) {
    const [blX, blY, trX, trY] = rect;
    switch (rotation) {
      case 0:
        for (let i = 0, ii = points.length; i < ii; i += 2) {
          points[i] -= blX;
          points[i + 1] = trY - points[i + 1];
        }
        break;
      case 90:
        for (let i = 0, ii = points.length; i < ii; i += 2) {
          const x = points[i];
          points[i] = points[i + 1] - blY;
          points[i + 1] = x - blX;
        }
        break;
      case 180:
        for (let i = 0, ii = points.length; i < ii; i += 2) {
          points[i] = trX - points[i];
          points[i + 1] -= blY;
        }
        break;
      case 270:
        for (let i = 0, ii = points.length; i < ii; i += 2) {
          const x = points[i];
          points[i] = trY - points[i + 1];
          points[i + 1] = trX - x;
        }
        break;
      default:
        throw new Error("Invalid rotation");
    }
    return points;
  }
  #serializePaths(s, tx, ty, rect) {
    const paths = [];
    const padding = this.thickness / 2;
    const shiftX = s * tx + padding;
    const shiftY = s * ty + padding;
    for (const bezier of this.paths) {
      const buffer = [];
      const points = [];
      for (let j = 0, jj = bezier.length; j < jj; j++) {
        const [first, control1, control2, second] = bezier[j];
        if (first[0] === second[0] && first[1] === second[1] && jj === 1) {
          const p0 = s * first[0] + shiftX;
          const p1 = s * first[1] + shiftY;
          buffer.push(p0, p1);
          points.push(p0, p1);
          break;
        }
        const p10 = s * first[0] + shiftX;
        const p11 = s * first[1] + shiftY;
        const p20 = s * control1[0] + shiftX;
        const p21 = s * control1[1] + shiftY;
        const p30 = s * control2[0] + shiftX;
        const p31 = s * control2[1] + shiftY;
        const p40 = s * second[0] + shiftX;
        const p41 = s * second[1] + shiftY;
        if (j === 0) {
          buffer.push(p10, p11);
          points.push(p10, p11);
        }
        buffer.push(p20, p21, p30, p31, p40, p41);
        points.push(p20, p21);
        if (j === jj - 1) {
          points.push(p40, p41);
        }
      }
      paths.push({
        bezier: _InkEditor.#toPDFCoordinates(buffer, rect, this.rotation),
        points: _InkEditor.#toPDFCoordinates(points, rect, this.rotation)
      });
    }
    return paths;
  }
  #getBbox() {
    let xMin = Infinity;
    let xMax = -Infinity;
    let yMin = Infinity;
    let yMax = -Infinity;
    for (const path of this.paths) {
      for (const [first, control1, control2, second] of path) {
        const bbox = Util.bezierBoundingBox(...first, ...control1, ...control2, ...second);
        xMin = Math.min(xMin, bbox[0]);
        yMin = Math.min(yMin, bbox[1]);
        xMax = Math.max(xMax, bbox[2]);
        yMax = Math.max(yMax, bbox[3]);
      }
    }
    return [xMin, yMin, xMax, yMax];
  }
  #getPadding() {
    return this.#disableEditing ? Math.ceil(this.thickness * this.parentScale) : 0;
  }
  #fitToContent(firstTime = false) {
    if (this.isEmpty()) {
      return;
    }
    if (!this.#disableEditing) {
      this.#redraw();
      return;
    }
    const bbox = this.#getBbox();
    const padding = this.#getPadding();
    this.#baseWidth = Math.max(AnnotationEditor.MIN_SIZE, bbox[2] - bbox[0]);
    this.#baseHeight = Math.max(AnnotationEditor.MIN_SIZE, bbox[3] - bbox[1]);
    const width = Math.ceil(padding + this.#baseWidth * this.scaleFactor);
    const height = Math.ceil(padding + this.#baseHeight * this.scaleFactor);
    const [parentWidth, parentHeight] = this.parentDimensions;
    this.width = width / parentWidth;
    this.height = height / parentHeight;
    this.setAspectRatio(width, height);
    const prevTranslationX = this.translationX;
    const prevTranslationY = this.translationY;
    this.translationX = -bbox[0];
    this.translationY = -bbox[1];
    this.#setCanvasDims();
    this.#redraw();
    this.#realWidth = width;
    this.#realHeight = height;
    this.setDims(width, height);
    const unscaledPadding = firstTime ? padding / this.scaleFactor / 2 : 0;
    this.translate(prevTranslationX - this.translationX - unscaledPadding, prevTranslationY - this.translationY - unscaledPadding);
  }
  static deserialize(data, parent, uiManager) {
    if (data instanceof InkAnnotationElement) {
      return null;
    }
    const editor = super.deserialize(data, parent, uiManager);
    editor.thickness = data.thickness;
    editor.color = Util.makeHexColor(...data.color);
    editor.opacity = data.opacity;
    const [pageWidth, pageHeight] = editor.pageDimensions;
    const width = editor.width * pageWidth;
    const height = editor.height * pageHeight;
    const scaleFactor = editor.parentScale;
    const padding = data.thickness / 2;
    editor.#disableEditing = true;
    editor.#realWidth = Math.round(width);
    editor.#realHeight = Math.round(height);
    const {
      paths,
      rect,
      rotation
    } = data;
    for (let {
      bezier
    } of paths) {
      bezier = _InkEditor.#fromPDFCoordinates(bezier, rect, rotation);
      const path = [];
      editor.paths.push(path);
      let p0 = scaleFactor * (bezier[0] - padding);
      let p1 = scaleFactor * (bezier[1] - padding);
      for (let i = 2, ii = bezier.length; i < ii; i += 6) {
        const p10 = scaleFactor * (bezier[i] - padding);
        const p11 = scaleFactor * (bezier[i + 1] - padding);
        const p20 = scaleFactor * (bezier[i + 2] - padding);
        const p21 = scaleFactor * (bezier[i + 3] - padding);
        const p30 = scaleFactor * (bezier[i + 4] - padding);
        const p31 = scaleFactor * (bezier[i + 5] - padding);
        path.push([[p0, p1], [p10, p11], [p20, p21], [p30, p31]]);
        p0 = p30;
        p1 = p31;
      }
      const path2D = this.#buildPath2D(path);
      editor.bezierPath2D.push(path2D);
    }
    const bbox = editor.#getBbox();
    editor.#baseWidth = Math.max(AnnotationEditor.MIN_SIZE, bbox[2] - bbox[0]);
    editor.#baseHeight = Math.max(AnnotationEditor.MIN_SIZE, bbox[3] - bbox[1]);
    editor.#setScaleFactor(width, height);
    return editor;
  }
  serialize() {
    if (this.isEmpty()) {
      return null;
    }
    const rect = this.getRect(0, 0);
    const color = AnnotationEditor._colorManager.convert(this.ctx.strokeStyle);
    return {
      annotationType: AnnotationEditorType.INK,
      color,
      thickness: this.thickness,
      opacity: this.opacity,
      paths: this.#serializePaths(this.scaleFactor / this.parentScale, this.translationX, this.translationY, rect),
      pageIndex: this.pageIndex,
      rect,
      rotation: this.rotation,
      structTreeParentId: this._structTreeParentId
    };
  }
};
var StampEditor = class _StampEditor extends AnnotationEditor {
  #bitmap = null;
  #bitmapId = null;
  #bitmapPromise = null;
  #bitmapUrl = null;
  #bitmapFile = null;
  #bitmapFileName = "";
  #canvas = null;
  #hasMLBeenQueried = false;
  #observer = null;
  #resizeTimeoutId = null;
  #isSvg = false;
  #hasBeenAddedInUndoStack = false;
  static _type = "stamp";
  static _editorType = AnnotationEditorType.STAMP;
  constructor(params) {
    super({
      ...params,
      name: "stampEditor"
    });
    this.#bitmapUrl = params.bitmapUrl;
    this.#bitmapFile = params.bitmapFile;
  }
  static initialize(l10n, uiManager) {
    AnnotationEditor.initialize(l10n, uiManager);
  }
  static get supportedTypes() {
    const types = ["apng", "avif", "bmp", "gif", "jpeg", "png", "svg+xml", "webp", "x-icon"];
    return shadow(this, "supportedTypes", types.map((type) => `image/${type}`));
  }
  static get supportedTypesStr() {
    return shadow(this, "supportedTypesStr", this.supportedTypes.join(","));
  }
  static isHandlingMimeForPasting(mime) {
    return this.supportedTypes.includes(mime);
  }
  static paste(item, parent) {
    parent.pasteEditor(AnnotationEditorType.STAMP, {
      bitmapFile: item.getAsFile()
    });
  }
  #getBitmapFetched(data, fromId = false) {
    if (!data) {
      this.remove();
      return;
    }
    this.#bitmap = data.bitmap;
    if (!fromId) {
      this.#bitmapId = data.id;
      this.#isSvg = data.isSvg;
    }
    if (data.file) {
      this.#bitmapFileName = data.file.name;
    }
    this.#createCanvas();
  }
  #getBitmapDone() {
    this.#bitmapPromise = null;
    this._uiManager.enableWaiting(false);
    if (this.#canvas) {
      this.div.focus();
    }
  }
  #getBitmap() {
    if (this.#bitmapId) {
      this._uiManager.enableWaiting(true);
      this._uiManager.imageManager.getFromId(this.#bitmapId).then((data) => this.#getBitmapFetched(data, true)).finally(() => this.#getBitmapDone());
      return;
    }
    if (this.#bitmapUrl) {
      const url = this.#bitmapUrl;
      this.#bitmapUrl = null;
      this._uiManager.enableWaiting(true);
      this.#bitmapPromise = this._uiManager.imageManager.getFromUrl(url).then((data) => this.#getBitmapFetched(data)).finally(() => this.#getBitmapDone());
      return;
    }
    if (this.#bitmapFile) {
      const file = this.#bitmapFile;
      this.#bitmapFile = null;
      this._uiManager.enableWaiting(true);
      this.#bitmapPromise = this._uiManager.imageManager.getFromFile(file).then((data) => this.#getBitmapFetched(data)).finally(() => this.#getBitmapDone());
      return;
    }
    const input = document.createElement("input");
    input.type = "file";
    input.accept = _StampEditor.supportedTypesStr;
    const signal = this._uiManager._signal;
    this.#bitmapPromise = new Promise((resolve) => {
      input.addEventListener("change", async () => {
        if (!input.files || input.files.length === 0) {
          this.remove();
        } else {
          this._uiManager.enableWaiting(true);
          const data = await this._uiManager.imageManager.getFromFile(input.files[0]);
          this.#getBitmapFetched(data);
        }
        resolve();
      }, {
        signal
      });
      input.addEventListener("cancel", () => {
        this.remove();
        resolve();
      }, {
        signal
      });
    }).finally(() => this.#getBitmapDone());
    input.click();
  }
  remove() {
    if (this.#bitmapId) {
      this.#bitmap = null;
      this._uiManager.imageManager.deleteId(this.#bitmapId);
      this.#canvas?.remove();
      this.#canvas = null;
      this.#observer?.disconnect();
      this.#observer = null;
      if (this.#resizeTimeoutId) {
        clearTimeout(this.#resizeTimeoutId);
        this.#resizeTimeoutId = null;
      }
    }
    super.remove();
  }
  rebuild() {
    if (!this.parent) {
      if (this.#bitmapId) {
        this.#getBitmap();
      }
      return;
    }
    super.rebuild();
    if (this.div === null) {
      return;
    }
    if (this.#bitmapId && this.#canvas === null) {
      this.#getBitmap();
    }
    if (!this.isAttachedToDOM) {
      this.parent.add(this);
    }
  }
  onceAdded() {
    this._isDraggable = true;
    this.div.focus();
  }
  isEmpty() {
    return !(this.#bitmapPromise || this.#bitmap || this.#bitmapUrl || this.#bitmapFile || this.#bitmapId);
  }
  get isResizable() {
    return true;
  }
  render() {
    if (this.div) {
      return this.div;
    }
    let baseX, baseY;
    if (this.width) {
      baseX = this.x;
      baseY = this.y;
    }
    super.render();
    this.div.hidden = true;
    this.addAltTextButton();
    if (this.#bitmap) {
      this.#createCanvas();
    } else {
      this.#getBitmap();
    }
    if (this.width) {
      const [parentWidth, parentHeight] = this.parentDimensions;
      this.setAt(baseX * parentWidth, baseY * parentHeight, this.width * parentWidth, this.height * parentHeight);
    }
    return this.div;
  }
  #createCanvas() {
    const {
      div
    } = this;
    let {
      width,
      height
    } = this.#bitmap;
    const [pageWidth, pageHeight] = this.pageDimensions;
    const MAX_RATIO = 0.75;
    if (this.width) {
      width = this.width * pageWidth;
      height = this.height * pageHeight;
    } else if (width > MAX_RATIO * pageWidth || height > MAX_RATIO * pageHeight) {
      const factor = Math.min(MAX_RATIO * pageWidth / width, MAX_RATIO * pageHeight / height);
      width *= factor;
      height *= factor;
    }
    const [parentWidth, parentHeight] = this.parentDimensions;
    this.setDims(width * parentWidth / pageWidth, height * parentHeight / pageHeight);
    this._uiManager.enableWaiting(false);
    const canvas = this.#canvas = document.createElement("canvas");
    div.append(canvas);
    div.hidden = false;
    this.#drawBitmap(width, height);
    this.#createObserver();
    if (!this.#hasBeenAddedInUndoStack) {
      this.parent.addUndoableEditor(this);
      this.#hasBeenAddedInUndoStack = true;
    }
    this._reportTelemetry({
      action: "inserted_image"
    });
    if (this.#bitmapFileName) {
      canvas.setAttribute("aria-label", this.#bitmapFileName);
    }
  }
  #setDimensions(width, height) {
    const [parentWidth, parentHeight] = this.parentDimensions;
    this.width = width / parentWidth;
    this.height = height / parentHeight;
    this.setDims(width, height);
    if (this._initialOptions?.isCentered) {
      this.center();
    } else {
      this.fixAndSetPosition();
    }
    this._initialOptions = null;
    if (this.#resizeTimeoutId !== null) {
      clearTimeout(this.#resizeTimeoutId);
    }
    const TIME_TO_WAIT = 200;
    this.#resizeTimeoutId = setTimeout(() => {
      this.#resizeTimeoutId = null;
      this.#drawBitmap(width, height);
    }, TIME_TO_WAIT);
  }
  #scaleBitmap(width, height) {
    const {
      width: bitmapWidth,
      height: bitmapHeight
    } = this.#bitmap;
    let newWidth = bitmapWidth;
    let newHeight = bitmapHeight;
    let bitmap = this.#bitmap;
    while (newWidth > 2 * width || newHeight > 2 * height) {
      const prevWidth = newWidth;
      const prevHeight = newHeight;
      if (newWidth > 2 * width) {
        newWidth = newWidth >= 16384 ? Math.floor(newWidth / 2) - 1 : Math.ceil(newWidth / 2);
      }
      if (newHeight > 2 * height) {
        newHeight = newHeight >= 16384 ? Math.floor(newHeight / 2) - 1 : Math.ceil(newHeight / 2);
      }
      const offscreen = new OffscreenCanvas(newWidth, newHeight);
      const ctx = offscreen.getContext("2d");
      ctx.drawImage(bitmap, 0, 0, prevWidth, prevHeight, 0, 0, newWidth, newHeight);
      bitmap = offscreen.transferToImageBitmap();
    }
    return bitmap;
  }
  async #mlGuessAltText(bitmap, width, height) {
    if (this.#hasMLBeenQueried) {
      return;
    }
    this.#hasMLBeenQueried = true;
    const isMLEnabled = await this._uiManager.isMLEnabledFor("altText");
    if (!isMLEnabled || this.hasAltText()) {
      return;
    }
    const offscreen = new OffscreenCanvas(width, height);
    const ctx = offscreen.getContext("2d", {
      willReadFrequently: true
    });
    ctx.drawImage(bitmap, 0, 0, bitmap.width, bitmap.height, 0, 0, width, height);
    const response = await this._uiManager.mlGuess({
      service: "moz-image-to-text",
      request: {
        data: ctx.getImageData(0, 0, width, height).data,
        width,
        height,
        channels: 4
      }
    });
    const altText = response?.output || "";
    if (this.parent && altText && !this.hasAltText()) {
      this.altTextData = {
        altText,
        decorative: false
      };
    }
  }
  #drawBitmap(width, height) {
    width = Math.ceil(width);
    height = Math.ceil(height);
    const canvas = this.#canvas;
    if (!canvas || canvas.width === width && canvas.height === height) {
      return;
    }
    canvas.width = width;
    canvas.height = height;
    const bitmap = this.#isSvg ? this.#bitmap : this.#scaleBitmap(width, height);
    this.#mlGuessAltText(bitmap, width, height);
    const ctx = canvas.getContext("2d");
    ctx.filter = this._uiManager.hcmFilter;
    ctx.drawImage(bitmap, 0, 0, bitmap.width, bitmap.height, 0, 0, width, height);
  }
  getImageForAltText() {
    return this.#canvas;
  }
  #serializeBitmap(toUrl) {
    if (toUrl) {
      if (this.#isSvg) {
        const url = this._uiManager.imageManager.getSvgUrl(this.#bitmapId);
        if (url) {
          return url;
        }
      }
      const canvas = document.createElement("canvas");
      ({
        width: canvas.width,
        height: canvas.height
      } = this.#bitmap);
      const ctx = canvas.getContext("2d");
      ctx.drawImage(this.#bitmap, 0, 0);
      return canvas.toDataURL();
    }
    if (this.#isSvg) {
      const [pageWidth, pageHeight] = this.pageDimensions;
      const width = Math.round(this.width * pageWidth * PixelsPerInch.PDF_TO_CSS_UNITS);
      const height = Math.round(this.height * pageHeight * PixelsPerInch.PDF_TO_CSS_UNITS);
      const offscreen = new OffscreenCanvas(width, height);
      const ctx = offscreen.getContext("2d");
      ctx.drawImage(this.#bitmap, 0, 0, this.#bitmap.width, this.#bitmap.height, 0, 0, width, height);
      return offscreen.transferToImageBitmap();
    }
    return structuredClone(this.#bitmap);
  }
  #createObserver() {
    if (!this._uiManager._signal) {
      return;
    }
    this.#observer = new ResizeObserver((entries) => {
      const rect = entries[0].contentRect;
      if (rect.width && rect.height) {
        this.#setDimensions(rect.width, rect.height);
      }
    });
    this.#observer.observe(this.div);
    this._uiManager._signal.addEventListener("abort", () => {
      this.#observer?.disconnect();
      this.#observer = null;
    }, {
      once: true
    });
  }
  static deserialize(data, parent, uiManager) {
    if (data instanceof StampAnnotationElement) {
      return null;
    }
    const editor = super.deserialize(data, parent, uiManager);
    const {
      rect,
      bitmapUrl,
      bitmapId,
      isSvg,
      accessibilityData
    } = data;
    if (bitmapId && uiManager.imageManager.isValidId(bitmapId)) {
      editor.#bitmapId = bitmapId;
    } else {
      editor.#bitmapUrl = bitmapUrl;
    }
    editor.#isSvg = isSvg;
    const [parentWidth, parentHeight] = editor.pageDimensions;
    editor.width = (rect[2] - rect[0]) / parentWidth;
    editor.height = (rect[3] - rect[1]) / parentHeight;
    if (accessibilityData) {
      editor.altTextData = accessibilityData;
    }
    return editor;
  }
  serialize(isForCopying = false, context = null) {
    if (this.isEmpty()) {
      return null;
    }
    const serialized = {
      annotationType: AnnotationEditorType.STAMP,
      bitmapId: this.#bitmapId,
      pageIndex: this.pageIndex,
      rect: this.getRect(0, 0),
      rotation: this.rotation,
      isSvg: this.#isSvg,
      structTreeParentId: this._structTreeParentId
    };
    if (isForCopying) {
      serialized.bitmapUrl = this.#serializeBitmap(true);
      serialized.accessibilityData = this.altTextData;
      return serialized;
    }
    const {
      decorative,
      altText
    } = this.altTextData;
    if (!decorative && altText) {
      serialized.accessibilityData = {
        type: "Figure",
        alt: altText
      };
    }
    if (context === null) {
      return serialized;
    }
    context.stamps ||= /* @__PURE__ */ new Map();
    const area = this.#isSvg ? (serialized.rect[2] - serialized.rect[0]) * (serialized.rect[3] - serialized.rect[1]) : null;
    if (!context.stamps.has(this.#bitmapId)) {
      context.stamps.set(this.#bitmapId, {
        area,
        serialized
      });
      serialized.bitmap = this.#serializeBitmap(false);
    } else if (this.#isSvg) {
      const prevData = context.stamps.get(this.#bitmapId);
      if (area > prevData.area) {
        prevData.area = area;
        prevData.serialized.bitmap.close();
        prevData.serialized.bitmap = this.#serializeBitmap(false);
      }
    }
    return serialized;
  }
};
var AnnotationEditorLayer = class _AnnotationEditorLayer {
  #accessibilityManager;
  #allowClick = false;
  #annotationLayer = null;
  #boundPointerup = null;
  #boundPointerdown = null;
  #boundTextLayerPointerDown = null;
  #editorFocusTimeoutId = null;
  #editors = /* @__PURE__ */ new Map();
  #hadPointerDown = false;
  #isCleaningUp = false;
  #isDisabling = false;
  #textLayer = null;
  #uiManager;
  static _initialized = false;
  static #editorTypes = new Map([FreeTextEditor, InkEditor, StampEditor, HighlightEditor].map((type) => [type._editorType, type]));
  constructor({
    uiManager,
    pageIndex,
    div,
    accessibilityManager,
    annotationLayer,
    drawLayer,
    textLayer,
    viewport,
    l10n
  }) {
    const editorTypes = [..._AnnotationEditorLayer.#editorTypes.values()];
    if (!_AnnotationEditorLayer._initialized) {
      _AnnotationEditorLayer._initialized = true;
      for (const editorType of editorTypes) {
        editorType.initialize(l10n, uiManager);
      }
    }
    uiManager.registerEditorTypes(editorTypes);
    this.#uiManager = uiManager;
    this.pageIndex = pageIndex;
    this.div = div;
    this.#accessibilityManager = accessibilityManager;
    this.#annotationLayer = annotationLayer;
    this.viewport = viewport;
    this.#textLayer = textLayer;
    this.drawLayer = drawLayer;
    this.#uiManager.addLayer(this);
  }
  get isEmpty() {
    return this.#editors.size === 0;
  }
  get isInvisible() {
    return this.isEmpty && this.#uiManager.getMode() === AnnotationEditorType.NONE;
  }
  updateToolbar(mode) {
    this.#uiManager.updateToolbar(mode);
  }
  updateMode(mode = this.#uiManager.getMode()) {
    this.#cleanup();
    switch (mode) {
      case AnnotationEditorType.NONE:
        this.disableTextSelection();
        this.togglePointerEvents(false);
        this.toggleAnnotationLayerPointerEvents(true);
        this.disableClick();
        return;
      case AnnotationEditorType.INK:
        this.addInkEditorIfNeeded(false);
        this.disableTextSelection();
        this.togglePointerEvents(true);
        this.disableClick();
        break;
      case AnnotationEditorType.HIGHLIGHT:
        this.enableTextSelection();
        this.togglePointerEvents(false);
        this.disableClick();
        break;
      default:
        this.disableTextSelection();
        this.togglePointerEvents(true);
        this.enableClick();
    }
    this.toggleAnnotationLayerPointerEvents(false);
    const {
      classList
    } = this.div;
    for (const editorType of _AnnotationEditorLayer.#editorTypes.values()) {
      classList.toggle(`${editorType._type}Editing`, mode === editorType._editorType);
    }
    this.div.hidden = false;
  }
  hasTextLayer(textLayer) {
    return textLayer === this.#textLayer?.div;
  }
  addInkEditorIfNeeded(isCommitting) {
    if (this.#uiManager.getMode() !== AnnotationEditorType.INK) {
      return;
    }
    if (!isCommitting) {
      for (const editor2 of this.#editors.values()) {
        if (editor2.isEmpty()) {
          editor2.setInBackground();
          return;
        }
      }
    }
    const editor = this.createAndAddNewEditor({
      offsetX: 0,
      offsetY: 0
    }, false);
    editor.setInBackground();
  }
  setEditingState(isEditing) {
    this.#uiManager.setEditingState(isEditing);
  }
  addCommands(params) {
    this.#uiManager.addCommands(params);
  }
  toggleDrawing(enabled = false) {
    this.div.classList.toggle("drawing", !enabled);
  }
  togglePointerEvents(enabled = false) {
    this.div.classList.toggle("disabled", !enabled);
  }
  toggleAnnotationLayerPointerEvents(enabled = false) {
    this.#annotationLayer?.div.classList.toggle("disabled", !enabled);
  }
  enable() {
    this.div.tabIndex = 0;
    this.togglePointerEvents(true);
    const annotationElementIds = /* @__PURE__ */ new Set();
    for (const editor of this.#editors.values()) {
      editor.enableEditing();
      editor.show(true);
      if (editor.annotationElementId) {
        this.#uiManager.removeChangedExistingAnnotation(editor);
        annotationElementIds.add(editor.annotationElementId);
      }
    }
    if (!this.#annotationLayer) {
      return;
    }
    const editables = this.#annotationLayer.getEditableAnnotations();
    for (const editable of editables) {
      editable.hide();
      if (this.#uiManager.isDeletedAnnotationElement(editable.data.id)) {
        continue;
      }
      if (annotationElementIds.has(editable.data.id)) {
        continue;
      }
      const editor = this.deserialize(editable);
      if (!editor) {
        continue;
      }
      this.addOrRebuild(editor);
      editor.enableEditing();
    }
  }
  disable() {
    this.#isDisabling = true;
    this.div.tabIndex = -1;
    this.togglePointerEvents(false);
    const changedAnnotations = /* @__PURE__ */ new Map();
    const resetAnnotations = /* @__PURE__ */ new Map();
    for (const editor of this.#editors.values()) {
      editor.disableEditing();
      if (!editor.annotationElementId) {
        continue;
      }
      if (editor.serialize() !== null) {
        changedAnnotations.set(editor.annotationElementId, editor);
        continue;
      } else {
        resetAnnotations.set(editor.annotationElementId, editor);
      }
      this.getEditableAnnotation(editor.annotationElementId)?.show();
      editor.remove();
    }
    if (this.#annotationLayer) {
      const editables = this.#annotationLayer.getEditableAnnotations();
      for (const editable of editables) {
        const {
          id
        } = editable.data;
        if (this.#uiManager.isDeletedAnnotationElement(id)) {
          continue;
        }
        let editor = resetAnnotations.get(id);
        if (editor) {
          editor.resetAnnotationElement(editable);
          editor.show(false);
          editable.show();
          continue;
        }
        editor = changedAnnotations.get(id);
        if (editor) {
          this.#uiManager.addChangedExistingAnnotation(editor);
          editor.renderAnnotationElement(editable);
          editor.show(false);
        }
        editable.show();
      }
    }
    this.#cleanup();
    if (this.isEmpty) {
      this.div.hidden = true;
    }
    const {
      classList
    } = this.div;
    for (const editorType of _AnnotationEditorLayer.#editorTypes.values()) {
      classList.remove(`${editorType._type}Editing`);
    }
    this.disableTextSelection();
    this.toggleAnnotationLayerPointerEvents(true);
    this.#isDisabling = false;
  }
  getEditableAnnotation(id) {
    return this.#annotationLayer?.getEditableAnnotation(id) || null;
  }
  setActiveEditor(editor) {
    const currentActive = this.#uiManager.getActive();
    if (currentActive === editor) {
      return;
    }
    this.#uiManager.setActiveEditor(editor);
  }
  enableTextSelection() {
    this.div.tabIndex = -1;
    if (this.#textLayer?.div && !this.#boundTextLayerPointerDown) {
      this.#boundTextLayerPointerDown = this.#textLayerPointerDown.bind(this);
      this.#textLayer.div.addEventListener("pointerdown", this.#boundTextLayerPointerDown, {
        signal: this.#uiManager._signal
      });
      this.#textLayer.div.classList.add("highlighting");
    }
  }
  disableTextSelection() {
    this.div.tabIndex = 0;
    if (this.#textLayer?.div && this.#boundTextLayerPointerDown) {
      this.#textLayer.div.removeEventListener("pointerdown", this.#boundTextLayerPointerDown);
      this.#boundTextLayerPointerDown = null;
      this.#textLayer.div.classList.remove("highlighting");
    }
  }
  #textLayerPointerDown(event) {
    this.#uiManager.unselectAll();
    const {
      target
    } = event;
    if (target === this.#textLayer.div || target.classList.contains("endOfContent") && this.#textLayer.div.contains(target)) {
      const {
        isMac
      } = util_FeatureTest.platform;
      if (event.button !== 0 || event.ctrlKey && isMac) {
        return;
      }
      this.#uiManager.showAllEditors("highlight", true, true);
      this.#textLayer.div.classList.add("free");
      this.toggleDrawing();
      HighlightEditor.startHighlighting(this, this.#uiManager.direction === "ltr", event);
      this.#textLayer.div.addEventListener("pointerup", () => {
        this.#textLayer.div.classList.remove("free");
        this.toggleDrawing(true);
      }, {
        once: true,
        signal: this.#uiManager._signal
      });
      event.preventDefault();
    }
  }
  enableClick() {
    if (this.#boundPointerdown) {
      return;
    }
    const signal = this.#uiManager._signal;
    this.#boundPointerdown = this.pointerdown.bind(this);
    this.#boundPointerup = this.pointerup.bind(this);
    this.div.addEventListener("pointerdown", this.#boundPointerdown, {
      signal
    });
    this.div.addEventListener("pointerup", this.#boundPointerup, {
      signal
    });
  }
  disableClick() {
    if (!this.#boundPointerdown) {
      return;
    }
    this.div.removeEventListener("pointerdown", this.#boundPointerdown);
    this.div.removeEventListener("pointerup", this.#boundPointerup);
    this.#boundPointerdown = null;
    this.#boundPointerup = null;
  }
  attach(editor) {
    this.#editors.set(editor.id, editor);
    const {
      annotationElementId
    } = editor;
    if (annotationElementId && this.#uiManager.isDeletedAnnotationElement(annotationElementId)) {
      this.#uiManager.removeDeletedAnnotationElement(editor);
    }
  }
  detach(editor) {
    this.#editors.delete(editor.id);
    this.#accessibilityManager?.removePointerInTextLayer(editor.contentDiv);
    if (!this.#isDisabling && editor.annotationElementId) {
      this.#uiManager.addDeletedAnnotationElement(editor);
    }
  }
  remove(editor) {
    this.detach(editor);
    this.#uiManager.removeEditor(editor);
    editor.div.remove();
    editor.isAttachedToDOM = false;
    if (!this.#isCleaningUp) {
      this.addInkEditorIfNeeded(false);
    }
  }
  changeParent(editor) {
    if (editor.parent === this) {
      return;
    }
    if (editor.parent && editor.annotationElementId) {
      this.#uiManager.addDeletedAnnotationElement(editor.annotationElementId);
      AnnotationEditor.deleteAnnotationElement(editor);
      editor.annotationElementId = null;
    }
    this.attach(editor);
    editor.parent?.detach(editor);
    editor.setParent(this);
    if (editor.div && editor.isAttachedToDOM) {
      editor.div.remove();
      this.div.append(editor.div);
    }
  }
  add(editor) {
    if (editor.parent === this && editor.isAttachedToDOM) {
      return;
    }
    this.changeParent(editor);
    this.#uiManager.addEditor(editor);
    this.attach(editor);
    if (!editor.isAttachedToDOM) {
      const div = editor.render();
      this.div.append(div);
      editor.isAttachedToDOM = true;
    }
    editor.fixAndSetPosition();
    editor.onceAdded();
    this.#uiManager.addToAnnotationStorage(editor);
    editor._reportTelemetry(editor.telemetryInitialData);
  }
  moveEditorInDOM(editor) {
    if (!editor.isAttachedToDOM) {
      return;
    }
    const {
      activeElement
    } = document;
    if (editor.div.contains(activeElement) && !this.#editorFocusTimeoutId) {
      editor._focusEventsAllowed = false;
      this.#editorFocusTimeoutId = setTimeout(() => {
        this.#editorFocusTimeoutId = null;
        if (!editor.div.contains(document.activeElement)) {
          editor.div.addEventListener("focusin", () => {
            editor._focusEventsAllowed = true;
          }, {
            once: true,
            signal: this.#uiManager._signal
          });
          activeElement.focus();
        } else {
          editor._focusEventsAllowed = true;
        }
      }, 0);
    }
    editor._structTreeParentId = this.#accessibilityManager?.moveElementInDOM(this.div, editor.div, editor.contentDiv, true);
  }
  addOrRebuild(editor) {
    if (editor.needsToBeRebuilt()) {
      editor.parent ||= this;
      editor.rebuild();
      editor.show();
    } else {
      this.add(editor);
    }
  }
  addUndoableEditor(editor) {
    const cmd = () => editor._uiManager.rebuild(editor);
    const undo = () => {
      editor.remove();
    };
    this.addCommands({
      cmd,
      undo,
      mustExec: false
    });
  }
  getNextId() {
    return this.#uiManager.getId();
  }
  get #currentEditorType() {
    return _AnnotationEditorLayer.#editorTypes.get(this.#uiManager.getMode());
  }
  get _signal() {
    return this.#uiManager._signal;
  }
  #createNewEditor(params) {
    const editorType = this.#currentEditorType;
    return editorType ? new editorType.prototype.constructor(params) : null;
  }
  canCreateNewEmptyEditor() {
    return this.#currentEditorType?.canCreateNewEmptyEditor();
  }
  pasteEditor(mode, params) {
    this.#uiManager.updateToolbar(mode);
    this.#uiManager.updateMode(mode);
    const {
      offsetX,
      offsetY
    } = this.#getCenterPoint();
    const id = this.getNextId();
    const editor = this.#createNewEditor({
      parent: this,
      id,
      x: offsetX,
      y: offsetY,
      uiManager: this.#uiManager,
      isCentered: true,
      ...params
    });
    if (editor) {
      this.add(editor);
    }
  }
  deserialize(data) {
    return _AnnotationEditorLayer.#editorTypes.get(data.annotationType ?? data.annotationEditorType)?.deserialize(data, this, this.#uiManager) || null;
  }
  createAndAddNewEditor(event, isCentered, data = {}) {
    const id = this.getNextId();
    const editor = this.#createNewEditor({
      parent: this,
      id,
      x: event.offsetX,
      y: event.offsetY,
      uiManager: this.#uiManager,
      isCentered,
      ...data
    });
    if (editor) {
      this.add(editor);
    }
    return editor;
  }
  #getCenterPoint() {
    const {
      x,
      y,
      width,
      height
    } = this.div.getBoundingClientRect();
    const tlX = Math.max(0, x);
    const tlY = Math.max(0, y);
    const brX = Math.min(window.innerWidth, x + width);
    const brY = Math.min(window.innerHeight, y + height);
    const centerX = (tlX + brX) / 2 - x;
    const centerY = (tlY + brY) / 2 - y;
    const [offsetX, offsetY] = this.viewport.rotation % 180 === 0 ? [centerX, centerY] : [centerY, centerX];
    return {
      offsetX,
      offsetY
    };
  }
  addNewEditor() {
    this.createAndAddNewEditor(this.#getCenterPoint(), true);
  }
  setSelected(editor) {
    this.#uiManager.setSelected(editor);
  }
  toggleSelected(editor) {
    this.#uiManager.toggleSelected(editor);
  }
  isSelected(editor) {
    return this.#uiManager.isSelected(editor);
  }
  unselect(editor) {
    this.#uiManager.unselect(editor);
  }
  pointerup(event) {
    const {
      isMac
    } = util_FeatureTest.platform;
    if (event.button !== 0 || event.ctrlKey && isMac) {
      return;
    }
    if (event.target !== this.div) {
      return;
    }
    if (!this.#hadPointerDown) {
      return;
    }
    this.#hadPointerDown = false;
    if (!this.#allowClick) {
      this.#allowClick = true;
      return;
    }
    if (this.#uiManager.getMode() === AnnotationEditorType.STAMP) {
      this.#uiManager.unselectAll();
      return;
    }
    this.createAndAddNewEditor(event, false);
  }
  pointerdown(event) {
    if (this.#uiManager.getMode() === AnnotationEditorType.HIGHLIGHT) {
      this.enableTextSelection();
    }
    if (this.#hadPointerDown) {
      this.#hadPointerDown = false;
      return;
    }
    const {
      isMac
    } = util_FeatureTest.platform;
    if (event.button !== 0 || event.ctrlKey && isMac) {
      return;
    }
    if (event.target !== this.div) {
      return;
    }
    this.#hadPointerDown = true;
    const editor = this.#uiManager.getActive();
    this.#allowClick = !editor || editor.isEmpty();
  }
  findNewParent(editor, x, y) {
    const layer = this.#uiManager.findParent(x, y);
    if (layer === null || layer === this) {
      return false;
    }
    layer.changeParent(editor);
    return true;
  }
  destroy() {
    if (this.#uiManager.getActive()?.parent === this) {
      this.#uiManager.commitOrRemove();
      this.#uiManager.setActiveEditor(null);
    }
    if (this.#editorFocusTimeoutId) {
      clearTimeout(this.#editorFocusTimeoutId);
      this.#editorFocusTimeoutId = null;
    }
    for (const editor of this.#editors.values()) {
      this.#accessibilityManager?.removePointerInTextLayer(editor.contentDiv);
      editor.setParent(null);
      editor.isAttachedToDOM = false;
      editor.div.remove();
    }
    this.div = null;
    this.#editors.clear();
    this.#uiManager.removeLayer(this);
  }
  #cleanup() {
    this.#isCleaningUp = true;
    for (const editor of this.#editors.values()) {
      if (editor.isEmpty()) {
        editor.remove();
      }
    }
    this.#isCleaningUp = false;
  }
  render({
    viewport
  }) {
    this.viewport = viewport;
    setLayerDimensions(this.div, viewport);
    for (const editor of this.#uiManager.getEditors(this.pageIndex)) {
      this.add(editor);
      editor.rebuild();
    }
    this.updateMode();
  }
  update({
    viewport
  }) {
    this.#uiManager.commitOrRemove();
    this.#cleanup();
    const oldRotation = this.viewport.rotation;
    const rotation = viewport.rotation;
    this.viewport = viewport;
    setLayerDimensions(this.div, {
      rotation
    });
    if (oldRotation !== rotation) {
      for (const editor of this.#editors.values()) {
        editor.rotate(rotation);
      }
    }
    this.addInkEditorIfNeeded(false);
  }
  get pageDimensions() {
    const {
      pageWidth,
      pageHeight
    } = this.viewport.rawDims;
    return [pageWidth, pageHeight];
  }
  get scale() {
    return this.#uiManager.viewParameters.realScale;
  }
};
var DrawLayer = class _DrawLayer {
  #parent = null;
  #id = 0;
  #mapping = /* @__PURE__ */ new Map();
  #toUpdate = /* @__PURE__ */ new Map();
  constructor({
    pageIndex
  }) {
    this.pageIndex = pageIndex;
  }
  setParent(parent) {
    if (!this.#parent) {
      this.#parent = parent;
      return;
    }
    if (this.#parent !== parent) {
      if (this.#mapping.size > 0) {
        for (const root of this.#mapping.values()) {
          root.remove();
          parent.append(root);
        }
      }
      this.#parent = parent;
    }
  }
  static get _svgFactory() {
    return shadow(this, "_svgFactory", new DOMSVGFactory());
  }
  static #setBox(element, {
    x = 0,
    y = 0,
    width = 1,
    height = 1
  } = {}) {
    const {
      style
    } = element;
    style.top = `${100 * y}%`;
    style.left = `${100 * x}%`;
    style.width = `${100 * width}%`;
    style.height = `${100 * height}%`;
  }
  #createSVG(box) {
    const svg = _DrawLayer._svgFactory.create(1, 1, true);
    this.#parent.append(svg);
    svg.setAttribute("aria-hidden", true);
    _DrawLayer.#setBox(svg, box);
    return svg;
  }
  #createClipPath(defs, pathId) {
    const clipPath = _DrawLayer._svgFactory.createElement("clipPath");
    defs.append(clipPath);
    const clipPathId = `clip_${pathId}`;
    clipPath.setAttribute("id", clipPathId);
    clipPath.setAttribute("clipPathUnits", "objectBoundingBox");
    const clipPathUse = _DrawLayer._svgFactory.createElement("use");
    clipPath.append(clipPathUse);
    clipPathUse.setAttribute("href", `#${pathId}`);
    clipPathUse.classList.add("clip");
    return clipPathId;
  }
  highlight(outlines, color, opacity, isPathUpdatable = false) {
    const id = this.#id++;
    const root = this.#createSVG(outlines.box);
    root.classList.add("highlight");
    if (outlines.free) {
      root.classList.add("free");
    }
    const defs = _DrawLayer._svgFactory.createElement("defs");
    root.append(defs);
    const path = _DrawLayer._svgFactory.createElement("path");
    defs.append(path);
    const pathId = `path_p${this.pageIndex}_${id}`;
    path.setAttribute("id", pathId);
    path.setAttribute("d", outlines.toSVGPath());
    if (isPathUpdatable) {
      this.#toUpdate.set(id, path);
    }
    const clipPathId = this.#createClipPath(defs, pathId);
    const use = _DrawLayer._svgFactory.createElement("use");
    root.append(use);
    root.setAttribute("fill", color);
    root.setAttribute("fill-opacity", opacity);
    use.setAttribute("href", `#${pathId}`);
    this.#mapping.set(id, root);
    return {
      id,
      clipPathId: `url(#${clipPathId})`
    };
  }
  highlightOutline(outlines) {
    const id = this.#id++;
    const root = this.#createSVG(outlines.box);
    root.classList.add("highlightOutline");
    const defs = _DrawLayer._svgFactory.createElement("defs");
    root.append(defs);
    const path = _DrawLayer._svgFactory.createElement("path");
    defs.append(path);
    const pathId = `path_p${this.pageIndex}_${id}`;
    path.setAttribute("id", pathId);
    path.setAttribute("d", outlines.toSVGPath());
    path.setAttribute("vector-effect", "non-scaling-stroke");
    let maskId;
    if (outlines.free) {
      root.classList.add("free");
      const mask = _DrawLayer._svgFactory.createElement("mask");
      defs.append(mask);
      maskId = `mask_p${this.pageIndex}_${id}`;
      mask.setAttribute("id", maskId);
      mask.setAttribute("maskUnits", "objectBoundingBox");
      const rect = _DrawLayer._svgFactory.createElement("rect");
      mask.append(rect);
      rect.setAttribute("width", "1");
      rect.setAttribute("height", "1");
      rect.setAttribute("fill", "white");
      const use = _DrawLayer._svgFactory.createElement("use");
      mask.append(use);
      use.setAttribute("href", `#${pathId}`);
      use.setAttribute("stroke", "none");
      use.setAttribute("fill", "black");
      use.setAttribute("fill-rule", "nonzero");
      use.classList.add("mask");
    }
    const use1 = _DrawLayer._svgFactory.createElement("use");
    root.append(use1);
    use1.setAttribute("href", `#${pathId}`);
    if (maskId) {
      use1.setAttribute("mask", `url(#${maskId})`);
    }
    const use2 = use1.cloneNode();
    root.append(use2);
    use1.classList.add("mainOutline");
    use2.classList.add("secondaryOutline");
    this.#mapping.set(id, root);
    return id;
  }
  finalizeLine(id, line) {
    const path = this.#toUpdate.get(id);
    this.#toUpdate.delete(id);
    this.updateBox(id, line.box);
    path.setAttribute("d", line.toSVGPath());
  }
  updateLine(id, line) {
    const root = this.#mapping.get(id);
    const defs = root.firstChild;
    const path = defs.firstChild;
    path.setAttribute("d", line.toSVGPath());
  }
  removeFreeHighlight(id) {
    this.remove(id);
    this.#toUpdate.delete(id);
  }
  updatePath(id, line) {
    this.#toUpdate.get(id).setAttribute("d", line.toSVGPath());
  }
  updateBox(id, box) {
    _DrawLayer.#setBox(this.#mapping.get(id), box);
  }
  show(id, visible) {
    this.#mapping.get(id).classList.toggle("hidden", !visible);
  }
  rotate(id, angle) {
    this.#mapping.get(id).setAttribute("data-main-rotation", angle);
  }
  changeColor(id, color) {
    this.#mapping.get(id).setAttribute("fill", color);
  }
  changeOpacity(id, opacity) {
    this.#mapping.get(id).setAttribute("fill-opacity", opacity);
  }
  addClass(id, className) {
    this.#mapping.get(id).classList.add(className);
  }
  removeClass(id, className) {
    this.#mapping.get(id).classList.remove(className);
  }
  remove(id) {
    if (this.#parent === null) {
      return;
    }
    this.#mapping.get(id).remove();
    this.#mapping.delete(id);
  }
  destroy() {
    this.#parent = null;
    for (const root of this.#mapping.values()) {
      root.remove();
    }
    this.#mapping.clear();
  }
};
var __webpack_exports__AbortException = __webpack_exports__.AbortException;
var __webpack_exports__AnnotationEditorLayer = __webpack_exports__.AnnotationEditorLayer;
var __webpack_exports__AnnotationEditorParamsType = __webpack_exports__.AnnotationEditorParamsType;
var __webpack_exports__AnnotationEditorType = __webpack_exports__.AnnotationEditorType;
var __webpack_exports__AnnotationEditorUIManager = __webpack_exports__.AnnotationEditorUIManager;
var __webpack_exports__AnnotationLayer = __webpack_exports__.AnnotationLayer;
var __webpack_exports__AnnotationMode = __webpack_exports__.AnnotationMode;
var __webpack_exports__CMapCompressionType = __webpack_exports__.CMapCompressionType;
var __webpack_exports__ColorPicker = __webpack_exports__.ColorPicker;
var __webpack_exports__DOMSVGFactory = __webpack_exports__.DOMSVGFactory;
var __webpack_exports__DrawLayer = __webpack_exports__.DrawLayer;
var __webpack_exports__FeatureTest = __webpack_exports__.FeatureTest;
var __webpack_exports__GlobalWorkerOptions = __webpack_exports__.GlobalWorkerOptions;
var __webpack_exports__ImageKind = __webpack_exports__.ImageKind;
var __webpack_exports__InvalidPDFException = __webpack_exports__.InvalidPDFException;
var __webpack_exports__MissingPDFException = __webpack_exports__.MissingPDFException;
var __webpack_exports__OPS = __webpack_exports__.OPS;
var __webpack_exports__PDFDataRangeTransport = __webpack_exports__.PDFDataRangeTransport;
var __webpack_exports__PDFDateString = __webpack_exports__.PDFDateString;
var __webpack_exports__PDFWorker = __webpack_exports__.PDFWorker;
var __webpack_exports__PasswordResponses = __webpack_exports__.PasswordResponses;
var __webpack_exports__PermissionFlag = __webpack_exports__.PermissionFlag;
var __webpack_exports__PixelsPerInch = __webpack_exports__.PixelsPerInch;
var __webpack_exports__RenderingCancelledException = __webpack_exports__.RenderingCancelledException;
var __webpack_exports__TextLayer = __webpack_exports__.TextLayer;
var __webpack_exports__UnexpectedResponseException = __webpack_exports__.UnexpectedResponseException;
var __webpack_exports__Util = __webpack_exports__.Util;
var __webpack_exports__VerbosityLevel = __webpack_exports__.VerbosityLevel;
var __webpack_exports__XfaLayer = __webpack_exports__.XfaLayer;
var __webpack_exports__build = __webpack_exports__.build;
var __webpack_exports__createValidAbsoluteUrl = __webpack_exports__.createValidAbsoluteUrl;
var __webpack_exports__fetchData = __webpack_exports__.fetchData;
var __webpack_exports__getDocument = __webpack_exports__.getDocument;
var __webpack_exports__getFilenameFromUrl = __webpack_exports__.getFilenameFromUrl;
var __webpack_exports__getPdfFilenameFromUrl = __webpack_exports__.getPdfFilenameFromUrl;
var __webpack_exports__getXfaPageViewport = __webpack_exports__.getXfaPageViewport;
var __webpack_exports__isDataScheme = __webpack_exports__.isDataScheme;
var __webpack_exports__isPdfFile = __webpack_exports__.isPdfFile;
var __webpack_exports__noContextMenu = __webpack_exports__.noContextMenu;
var __webpack_exports__normalizeUnicode = __webpack_exports__.normalizeUnicode;
var __webpack_exports__setLayerDimensions = __webpack_exports__.setLayerDimensions;
var __webpack_exports__shadow = __webpack_exports__.shadow;
var __webpack_exports__version = __webpack_exports__.version;

// node_modules/.pnpm/pdfjs-dist@4.5.136/node_modules/pdfjs-dist/web/pdf_viewer.mjs
var __webpack_require__2 = {};
(() => {
  __webpack_require__2.d = (exports, definition) => {
    for (var key in definition) {
      if (__webpack_require__2.o(definition, key) && !__webpack_require__2.o(exports, key)) {
        Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
      }
    }
  };
})();
(() => {
  __webpack_require__2.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop);
})();
var __webpack_exports__2 = globalThis.pdfjsViewer = {};
__webpack_require__2.d(__webpack_exports__2, {
  AnnotationLayerBuilder: () => (
    /* reexport */
    AnnotationLayerBuilder
  ),
  DownloadManager: () => (
    /* reexport */
    DownloadManager
  ),
  EventBus: () => (
    /* reexport */
    EventBus
  ),
  FindState: () => (
    /* reexport */
    FindState
  ),
  GenericL10n: () => (
    /* reexport */
    genericl10n_GenericL10n
  ),
  LinkTarget: () => (
    /* reexport */
    LinkTarget
  ),
  PDFFindController: () => (
    /* reexport */
    PDFFindController
  ),
  PDFHistory: () => (
    /* reexport */
    PDFHistory
  ),
  PDFLinkService: () => (
    /* reexport */
    PDFLinkService
  ),
  PDFPageView: () => (
    /* reexport */
    PDFPageView
  ),
  PDFScriptingManager: () => (
    /* reexport */
    PDFScriptingManagerComponents
  ),
  PDFSinglePageViewer: () => (
    /* reexport */
    PDFSinglePageViewer
  ),
  PDFViewer: () => (
    /* reexport */
    PDFViewer
  ),
  ProgressBar: () => (
    /* reexport */
    ProgressBar
  ),
  RenderingStates: () => (
    /* reexport */
    RenderingStates
  ),
  ScrollMode: () => (
    /* reexport */
    ScrollMode
  ),
  SimpleLinkService: () => (
    /* reexport */
    SimpleLinkService
  ),
  SpreadMode: () => (
    /* reexport */
    SpreadMode
  ),
  StructTreeLayerBuilder: () => (
    /* reexport */
    StructTreeLayerBuilder
  ),
  TextLayerBuilder: () => (
    /* reexport */
    TextLayerBuilder
  ),
  XfaLayerBuilder: () => (
    /* reexport */
    XfaLayerBuilder
  ),
  parseQueryString: () => (
    /* reexport */
    parseQueryString
  )
});
var DEFAULT_SCALE_VALUE = "auto";
var DEFAULT_SCALE = 1;
var DEFAULT_SCALE_DELTA = 1.1;
var MIN_SCALE = 0.1;
var MAX_SCALE = 10;
var UNKNOWN_SCALE = 0;
var MAX_AUTO_SCALE = 1.25;
var SCROLLBAR_PADDING = 40;
var VERTICAL_PADDING = 5;
var RenderingStates = {
  INITIAL: 0,
  RUNNING: 1,
  PAUSED: 2,
  FINISHED: 3
};
var PresentationModeState = {
  UNKNOWN: 0,
  NORMAL: 1,
  CHANGING: 2,
  FULLSCREEN: 3
};
var TextLayerMode = {
  DISABLE: 0,
  ENABLE: 1,
  ENABLE_PERMISSIONS: 2
};
var ScrollMode = {
  UNKNOWN: -1,
  VERTICAL: 0,
  HORIZONTAL: 1,
  WRAPPED: 2,
  PAGE: 3
};
var SpreadMode = {
  UNKNOWN: -1,
  NONE: 0,
  ODD: 1,
  EVEN: 2
};
var OutputScale = class {
  constructor() {
    const pixelRatio = window.devicePixelRatio || 1;
    this.sx = pixelRatio;
    this.sy = pixelRatio;
  }
  get scaled() {
    return this.sx !== 1 || this.sy !== 1;
  }
};
function scrollIntoView(element, spot, scrollMatches = false) {
  let parent = element.offsetParent;
  if (!parent) {
    console.error("offsetParent is not set -- cannot scroll");
    return;
  }
  let offsetY = element.offsetTop + element.clientTop;
  let offsetX = element.offsetLeft + element.clientLeft;
  while (parent.clientHeight === parent.scrollHeight && parent.clientWidth === parent.scrollWidth || scrollMatches && (parent.classList.contains("markedContent") || getComputedStyle(parent).overflow === "hidden")) {
    offsetY += parent.offsetTop;
    offsetX += parent.offsetLeft;
    parent = parent.offsetParent;
    if (!parent) {
      return;
    }
  }
  if (spot) {
    if (spot.top !== void 0) {
      offsetY += spot.top;
    }
    if (spot.left !== void 0) {
      offsetX += spot.left;
      parent.scrollLeft = offsetX;
    }
  }
  parent.scrollTop = offsetY;
}
function watchScroll(viewAreaElement, callback, abortSignal = void 0) {
  const debounceScroll = function(evt) {
    if (rAF) {
      return;
    }
    rAF = window.requestAnimationFrame(function viewAreaElementScrolled() {
      rAF = null;
      const currentX = viewAreaElement.scrollLeft;
      const lastX = state.lastX;
      if (currentX !== lastX) {
        state.right = currentX > lastX;
      }
      state.lastX = currentX;
      const currentY = viewAreaElement.scrollTop;
      const lastY = state.lastY;
      if (currentY !== lastY) {
        state.down = currentY > lastY;
      }
      state.lastY = currentY;
      callback(state);
    });
  };
  const state = {
    right: true,
    down: true,
    lastX: viewAreaElement.scrollLeft,
    lastY: viewAreaElement.scrollTop,
    _eventHandler: debounceScroll
  };
  let rAF = null;
  viewAreaElement.addEventListener("scroll", debounceScroll, {
    useCapture: true,
    signal: abortSignal
  });
  abortSignal?.addEventListener("abort", () => window.cancelAnimationFrame(rAF), {
    once: true
  });
  return state;
}
function parseQueryString(query) {
  const params = /* @__PURE__ */ new Map();
  for (const [key, value] of new URLSearchParams(query)) {
    params.set(key.toLowerCase(), value);
  }
  return params;
}
var InvisibleCharsRegExp = /[\x00-\x1F]/g;
function removeNullCharacters(str, replaceInvisible = false) {
  if (!InvisibleCharsRegExp.test(str)) {
    return str;
  }
  if (replaceInvisible) {
    return str.replaceAll(InvisibleCharsRegExp, (m) => m === "\0" ? "" : " ");
  }
  return str.replaceAll("\0", "");
}
function binarySearchFirstItem(items, condition, start = 0) {
  let minIndex = start;
  let maxIndex = items.length - 1;
  if (maxIndex < 0 || !condition(items[maxIndex])) {
    return items.length;
  }
  if (condition(items[minIndex])) {
    return minIndex;
  }
  while (minIndex < maxIndex) {
    const currentIndex = minIndex + maxIndex >> 1;
    const currentItem = items[currentIndex];
    if (condition(currentItem)) {
      maxIndex = currentIndex;
    } else {
      minIndex = currentIndex + 1;
    }
  }
  return minIndex;
}
function approximateFraction(x) {
  if (Math.floor(x) === x) {
    return [x, 1];
  }
  const xinv = 1 / x;
  const limit = 8;
  if (xinv > limit) {
    return [1, limit];
  } else if (Math.floor(xinv) === xinv) {
    return [1, xinv];
  }
  const x_ = x > 1 ? xinv : x;
  let a = 0, b = 1, c = 1, d = 1;
  while (true) {
    const p = a + c, q = b + d;
    if (q > limit) {
      break;
    }
    if (x_ <= p / q) {
      c = p;
      d = q;
    } else {
      a = p;
      b = q;
    }
  }
  let result;
  if (x_ - a / b < c / d - x_) {
    result = x_ === x ? [a, b] : [b, a];
  } else {
    result = x_ === x ? [c, d] : [d, c];
  }
  return result;
}
function floorToDivide(x, div) {
  return x - x % div;
}
function backtrackBeforeAllVisibleElements(index, views, top) {
  if (index < 2) {
    return index;
  }
  let elt = views[index].div;
  let pageTop = elt.offsetTop + elt.clientTop;
  if (pageTop >= top) {
    elt = views[index - 1].div;
    pageTop = elt.offsetTop + elt.clientTop;
  }
  for (let i = index - 2; i >= 0; --i) {
    elt = views[i].div;
    if (elt.offsetTop + elt.clientTop + elt.clientHeight <= pageTop) {
      break;
    }
    index = i;
  }
  return index;
}
function getVisibleElements({
  scrollEl,
  views,
  sortByVisibility = false,
  horizontal = false,
  rtl = false
}) {
  const top = scrollEl.scrollTop, bottom = top + scrollEl.clientHeight;
  const left = scrollEl.scrollLeft, right = left + scrollEl.clientWidth;
  function isElementBottomAfterViewTop(view) {
    const element = view.div;
    const elementBottom = element.offsetTop + element.clientTop + element.clientHeight;
    return elementBottom > top;
  }
  function isElementNextAfterViewHorizontally(view) {
    const element = view.div;
    const elementLeft = element.offsetLeft + element.clientLeft;
    const elementRight = elementLeft + element.clientWidth;
    return rtl ? elementLeft < right : elementRight > left;
  }
  const visible = [], ids = /* @__PURE__ */ new Set(), numViews = views.length;
  let firstVisibleElementInd = binarySearchFirstItem(views, horizontal ? isElementNextAfterViewHorizontally : isElementBottomAfterViewTop);
  if (firstVisibleElementInd > 0 && firstVisibleElementInd < numViews && !horizontal) {
    firstVisibleElementInd = backtrackBeforeAllVisibleElements(firstVisibleElementInd, views, top);
  }
  let lastEdge = horizontal ? right : -1;
  for (let i = firstVisibleElementInd; i < numViews; i++) {
    const view = views[i], element = view.div;
    const currentWidth = element.offsetLeft + element.clientLeft;
    const currentHeight = element.offsetTop + element.clientTop;
    const viewWidth = element.clientWidth, viewHeight = element.clientHeight;
    const viewRight = currentWidth + viewWidth;
    const viewBottom = currentHeight + viewHeight;
    if (lastEdge === -1) {
      if (viewBottom >= bottom) {
        lastEdge = viewBottom;
      }
    } else if ((horizontal ? currentWidth : currentHeight) > lastEdge) {
      break;
    }
    if (viewBottom <= top || currentHeight >= bottom || viewRight <= left || currentWidth >= right) {
      continue;
    }
    const hiddenHeight = Math.max(0, top - currentHeight) + Math.max(0, viewBottom - bottom);
    const hiddenWidth = Math.max(0, left - currentWidth) + Math.max(0, viewRight - right);
    const fractionHeight = (viewHeight - hiddenHeight) / viewHeight, fractionWidth = (viewWidth - hiddenWidth) / viewWidth;
    const percent = fractionHeight * fractionWidth * 100 | 0;
    visible.push({
      id: view.id,
      x: currentWidth,
      y: currentHeight,
      view,
      percent,
      widthPercent: fractionWidth * 100 | 0
    });
    ids.add(view.id);
  }
  const first = visible[0], last = visible.at(-1);
  if (sortByVisibility) {
    visible.sort(function(a, b) {
      const pc = a.percent - b.percent;
      if (Math.abs(pc) > 1e-3) {
        return -pc;
      }
      return a.id - b.id;
    });
  }
  return {
    first,
    last,
    views: visible,
    ids
  };
}
function isValidRotation(angle) {
  return Number.isInteger(angle) && angle % 90 === 0;
}
function isValidScrollMode(mode) {
  return Number.isInteger(mode) && Object.values(ScrollMode).includes(mode) && mode !== ScrollMode.UNKNOWN;
}
function isValidSpreadMode(mode) {
  return Number.isInteger(mode) && Object.values(SpreadMode).includes(mode) && mode !== SpreadMode.UNKNOWN;
}
function isPortraitOrientation(size) {
  return size.width <= size.height;
}
var animationStarted = new Promise(function(resolve) {
  window.requestAnimationFrame(resolve);
});
var docStyle = document.documentElement.style;
function clamp(v, min, max) {
  return Math.min(Math.max(v, min), max);
}
var ProgressBar = class {
  #classList = null;
  #disableAutoFetchTimeout = null;
  #percent = 0;
  #style = null;
  #visible = true;
  constructor(bar) {
    this.#classList = bar.classList;
    this.#style = bar.style;
  }
  get percent() {
    return this.#percent;
  }
  set percent(val) {
    this.#percent = clamp(val, 0, 100);
    if (isNaN(val)) {
      this.#classList.add("indeterminate");
      return;
    }
    this.#classList.remove("indeterminate");
    this.#style.setProperty("--progressBar-percent", `${this.#percent}%`);
  }
  setWidth(viewer) {
    if (!viewer) {
      return;
    }
    const container = viewer.parentNode;
    const scrollbarWidth = container.offsetWidth - viewer.offsetWidth;
    if (scrollbarWidth > 0) {
      this.#style.setProperty("--progressBar-end-offset", `${scrollbarWidth}px`);
    }
  }
  setDisableAutoFetch(delay = 5e3) {
    if (this.#percent === 100 || isNaN(this.#percent)) {
      return;
    }
    if (this.#disableAutoFetchTimeout) {
      clearTimeout(this.#disableAutoFetchTimeout);
    }
    this.show();
    this.#disableAutoFetchTimeout = setTimeout(() => {
      this.#disableAutoFetchTimeout = null;
      this.hide();
    }, delay);
  }
  hide() {
    if (!this.#visible) {
      return;
    }
    this.#visible = false;
    this.#classList.add("hidden");
  }
  show() {
    if (this.#visible) {
      return;
    }
    this.#visible = true;
    this.#classList.remove("hidden");
  }
};
function apiPageLayoutToViewerModes(layout) {
  let scrollMode = ScrollMode.VERTICAL, spreadMode = SpreadMode.NONE;
  switch (layout) {
    case "SinglePage":
      scrollMode = ScrollMode.PAGE;
      break;
    case "OneColumn":
      break;
    case "TwoPageLeft":
      scrollMode = ScrollMode.PAGE;
    case "TwoColumnLeft":
      spreadMode = SpreadMode.ODD;
      break;
    case "TwoPageRight":
      scrollMode = ScrollMode.PAGE;
    case "TwoColumnRight":
      spreadMode = SpreadMode.EVEN;
      break;
  }
  return {
    scrollMode,
    spreadMode
  };
}
var CharacterType = {
  SPACE: 0,
  ALPHA_LETTER: 1,
  PUNCT: 2,
  HAN_LETTER: 3,
  KATAKANA_LETTER: 4,
  HIRAGANA_LETTER: 5,
  HALFWIDTH_KATAKANA_LETTER: 6,
  THAI_LETTER: 7
};
function isAlphabeticalScript(charCode) {
  return charCode < 11904;
}
function isAscii(charCode) {
  return (charCode & 65408) === 0;
}
function isAsciiAlpha(charCode) {
  return charCode >= 97 && charCode <= 122 || charCode >= 65 && charCode <= 90;
}
function isAsciiDigit(charCode) {
  return charCode >= 48 && charCode <= 57;
}
function isAsciiSpace(charCode) {
  return charCode === 32 || charCode === 9 || charCode === 13 || charCode === 10;
}
function isHan(charCode) {
  return charCode >= 13312 && charCode <= 40959 || charCode >= 63744 && charCode <= 64255;
}
function isKatakana(charCode) {
  return charCode >= 12448 && charCode <= 12543;
}
function isHiragana(charCode) {
  return charCode >= 12352 && charCode <= 12447;
}
function isHalfwidthKatakana(charCode) {
  return charCode >= 65376 && charCode <= 65439;
}
function isThai(charCode) {
  return (charCode & 65408) === 3584;
}
function getCharacterType(charCode) {
  if (isAlphabeticalScript(charCode)) {
    if (isAscii(charCode)) {
      if (isAsciiSpace(charCode)) {
        return CharacterType.SPACE;
      } else if (isAsciiAlpha(charCode) || isAsciiDigit(charCode) || charCode === 95) {
        return CharacterType.ALPHA_LETTER;
      }
      return CharacterType.PUNCT;
    } else if (isThai(charCode)) {
      return CharacterType.THAI_LETTER;
    } else if (charCode === 160) {
      return CharacterType.SPACE;
    }
    return CharacterType.ALPHA_LETTER;
  }
  if (isHan(charCode)) {
    return CharacterType.HAN_LETTER;
  } else if (isKatakana(charCode)) {
    return CharacterType.KATAKANA_LETTER;
  } else if (isHiragana(charCode)) {
    return CharacterType.HIRAGANA_LETTER;
  } else if (isHalfwidthKatakana(charCode)) {
    return CharacterType.HALFWIDTH_KATAKANA_LETTER;
  }
  return CharacterType.ALPHA_LETTER;
}
var NormalizeWithNFKC;
function getNormalizeWithNFKC() {
  NormalizeWithNFKC ||= `\xA0\xA8\xAA\xAF\xB2-\xB5\xB8-\xBA\xBC-\xBE\u0132-\u0133\u013F-\u0140\u0149\u017F\u01C4-\u01CC\u01F1-\u01F3\u02B0-\u02B8\u02D8-\u02DD\u02E0-\u02E4\u0374\u037A\u037E\u0384-\u0385\u0387\u03D0-\u03D6\u03F0-\u03F2\u03F4-\u03F5\u03F9\u0587\u0675-\u0678\u0958-\u095F\u09DC-\u09DD\u09DF\u0A33\u0A36\u0A59-\u0A5B\u0A5E\u0B5C-\u0B5D\u0E33\u0EB3\u0EDC-\u0EDD\u0F0C\u0F43\u0F4D\u0F52\u0F57\u0F5C\u0F69\u10FC\u1D2C-\u1D2E\u1D30-\u1D3A\u1D3C-\u1D4D\u1D4F-\u1D6A\u1D78\u1D9B-\u1DBF\u1E9A-\u1E9B\u1F71\u1F73\u1F75\u1F77\u1F79\u1F7B\u1F7D\u1FBB\u1FBD-\u1FC1\u1FC9\u1FCB\u1FCD-\u1FCF\u1FD3\u1FDB\u1FDD-\u1FDF\u1FE3\u1FEB\u1FED-\u1FEF\u1FF9\u1FFB\u1FFD-\u1FFE\u2000-\u200A\u2011\u2017\u2024-\u2026\u202F\u2033-\u2034\u2036-\u2037\u203C\u203E\u2047-\u2049\u2057\u205F\u2070-\u2071\u2074-\u208E\u2090-\u209C\u20A8\u2100-\u2103\u2105-\u2107\u2109-\u2113\u2115-\u2116\u2119-\u211D\u2120-\u2122\u2124\u2126\u2128\u212A-\u212D\u212F-\u2131\u2133-\u2139\u213B-\u2140\u2145-\u2149\u2150-\u217F\u2189\u222C-\u222D\u222F-\u2230\u2329-\u232A\u2460-\u24EA\u2A0C\u2A74-\u2A76\u2ADC\u2C7C-\u2C7D\u2D6F\u2E9F\u2EF3\u2F00-\u2FD5\u3000\u3036\u3038-\u303A\u309B-\u309C\u309F\u30FF\u3131-\u318E\u3192-\u319F\u3200-\u321E\u3220-\u3247\u3250-\u327E\u3280-\u33FF\uA69C-\uA69D\uA770\uA7F2-\uA7F4\uA7F8-\uA7F9\uAB5C-\uAB5F\uAB69\uF900-\uFA0D\uFA10\uFA12\uFA15-\uFA1E\uFA20\uFA22\uFA25-\uFA26\uFA2A-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB36\uFB38-\uFB3C\uFB3E\uFB40-\uFB41\uFB43-\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFC\uFE10-\uFE19\uFE30-\uFE44\uFE47-\uFE52\uFE54-\uFE66\uFE68-\uFE6B\uFE70-\uFE72\uFE74\uFE76-\uFEFC\uFF01-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC\uFFE0-\uFFE6`;
  return NormalizeWithNFKC;
}
var FindState = {
  FOUND: 0,
  NOT_FOUND: 1,
  WRAPPED: 2,
  PENDING: 3
};
var FIND_TIMEOUT = 250;
var MATCH_SCROLL_OFFSET_TOP = -50;
var MATCH_SCROLL_OFFSET_LEFT = -400;
var CHARACTERS_TO_NORMALIZE = {
  "\u2010": "-",
  "\u2018": "'",
  "\u2019": "'",
  "\u201A": "'",
  "\u201B": "'",
  "\u201C": '"',
  "\u201D": '"',
  "\u201E": '"',
  "\u201F": '"',
  "\xBC": "1/4",
  "\xBD": "1/2",
  "\xBE": "3/4"
};
var DIACRITICS_EXCEPTION = /* @__PURE__ */ new Set([12441, 12442, 2381, 2509, 2637, 2765, 2893, 3021, 3149, 3277, 3387, 3388, 3405, 3530, 3642, 3770, 3972, 4153, 4154, 5908, 5940, 6098, 6752, 6980, 7082, 7083, 7154, 7155, 11647, 43014, 43052, 43204, 43347, 43456, 43766, 44013, 3158, 3953, 3954, 3962, 3963, 3964, 3965, 3968, 3956]);
var DIACRITICS_EXCEPTION_STR;
var DIACRITICS_REG_EXP = /\p{M}+/gu;
var SPECIAL_CHARS_REG_EXP = /([.*+?^${}()|[\]\\])|(\p{P})|(\s+)|(\p{M})|(\p{L})/gu;
var NOT_DIACRITIC_FROM_END_REG_EXP = /([^\p{M}])\p{M}*$/u;
var NOT_DIACRITIC_FROM_START_REG_EXP = /^\p{M}*([^\p{M}])/u;
var SYLLABLES_REG_EXP = /[\uAC00-\uD7AF\uFA6C\uFACF-\uFAD1\uFAD5-\uFAD7]+/g;
var SYLLABLES_LENGTHS = /* @__PURE__ */ new Map();
var FIRST_CHAR_SYLLABLES_REG_EXP = "[\\u1100-\\u1112\\ud7a4-\\ud7af\\ud84a\\ud84c\\ud850\\ud854\\ud857\\ud85f]";
var NFKC_CHARS_TO_NORMALIZE = /* @__PURE__ */ new Map();
var noSyllablesRegExp = null;
var withSyllablesRegExp = null;
function normalize(text) {
  const syllablePositions = [];
  let m;
  while ((m = SYLLABLES_REG_EXP.exec(text)) !== null) {
    let {
      index
    } = m;
    for (const char of m[0]) {
      let len = SYLLABLES_LENGTHS.get(char);
      if (!len) {
        len = char.normalize("NFD").length;
        SYLLABLES_LENGTHS.set(char, len);
      }
      syllablePositions.push([len, index++]);
    }
  }
  let normalizationRegex;
  if (syllablePositions.length === 0 && noSyllablesRegExp) {
    normalizationRegex = noSyllablesRegExp;
  } else if (syllablePositions.length > 0 && withSyllablesRegExp) {
    normalizationRegex = withSyllablesRegExp;
  } else {
    const replace = Object.keys(CHARACTERS_TO_NORMALIZE).join("");
    const toNormalizeWithNFKC = getNormalizeWithNFKC();
    const CJK = "(?:\\p{Ideographic}|[\u3040-\u30FF])";
    const HKDiacritics = "(?:\u3099|\u309A)";
    const regexp = `([${replace}])|([${toNormalizeWithNFKC}])|(${HKDiacritics}\\n)|(\\p{M}+(?:-\\n)?)|(\\S-\\n)|(${CJK}\\n)|(\\n)`;
    if (syllablePositions.length === 0) {
      normalizationRegex = noSyllablesRegExp = new RegExp(regexp + "|(\\u0000)", "gum");
    } else {
      normalizationRegex = withSyllablesRegExp = new RegExp(regexp + `|(${FIRST_CHAR_SYLLABLES_REG_EXP})`, "gum");
    }
  }
  const rawDiacriticsPositions = [];
  while ((m = DIACRITICS_REG_EXP.exec(text)) !== null) {
    rawDiacriticsPositions.push([m[0].length, m.index]);
  }
  let normalized = text.normalize("NFD");
  const positions = [[0, 0]];
  let rawDiacriticsIndex = 0;
  let syllableIndex = 0;
  let shift = 0;
  let shiftOrigin = 0;
  let eol = 0;
  let hasDiacritics = false;
  normalized = normalized.replace(normalizationRegex, (match2, p1, p2, p3, p4, p5, p6, p7, p8, i) => {
    i -= shiftOrigin;
    if (p1) {
      const replacement = CHARACTERS_TO_NORMALIZE[p1];
      const jj = replacement.length;
      for (let j = 1; j < jj; j++) {
        positions.push([i - shift + j, shift - j]);
      }
      shift -= jj - 1;
      return replacement;
    }
    if (p2) {
      let replacement = NFKC_CHARS_TO_NORMALIZE.get(p2);
      if (!replacement) {
        replacement = p2.normalize("NFKC");
        NFKC_CHARS_TO_NORMALIZE.set(p2, replacement);
      }
      const jj = replacement.length;
      for (let j = 1; j < jj; j++) {
        positions.push([i - shift + j, shift - j]);
      }
      shift -= jj - 1;
      return replacement;
    }
    if (p3) {
      hasDiacritics = true;
      if (i + eol === rawDiacriticsPositions[rawDiacriticsIndex]?.[1]) {
        ++rawDiacriticsIndex;
      } else {
        positions.push([i - 1 - shift + 1, shift - 1]);
        shift -= 1;
        shiftOrigin += 1;
      }
      positions.push([i - shift + 1, shift]);
      shiftOrigin += 1;
      eol += 1;
      return p3.charAt(0);
    }
    if (p4) {
      const hasTrailingDashEOL = p4.endsWith("\n");
      const len = hasTrailingDashEOL ? p4.length - 2 : p4.length;
      hasDiacritics = true;
      let jj = len;
      if (i + eol === rawDiacriticsPositions[rawDiacriticsIndex]?.[1]) {
        jj -= rawDiacriticsPositions[rawDiacriticsIndex][0];
        ++rawDiacriticsIndex;
      }
      for (let j = 1; j <= jj; j++) {
        positions.push([i - 1 - shift + j, shift - j]);
      }
      shift -= jj;
      shiftOrigin += jj;
      if (hasTrailingDashEOL) {
        i += len - 1;
        positions.push([i - shift + 1, 1 + shift]);
        shift += 1;
        shiftOrigin += 1;
        eol += 1;
        return p4.slice(0, len);
      }
      return p4;
    }
    if (p5) {
      const len = p5.length - 2;
      positions.push([i - shift + len, 1 + shift]);
      shift += 1;
      shiftOrigin += 1;
      eol += 1;
      return p5.slice(0, -2);
    }
    if (p6) {
      const len = p6.length - 1;
      positions.push([i - shift + len, shift]);
      shiftOrigin += 1;
      eol += 1;
      return p6.slice(0, -1);
    }
    if (p7) {
      positions.push([i - shift + 1, shift - 1]);
      shift -= 1;
      shiftOrigin += 1;
      eol += 1;
      return " ";
    }
    if (i + eol === syllablePositions[syllableIndex]?.[1]) {
      const newCharLen = syllablePositions[syllableIndex][0] - 1;
      ++syllableIndex;
      for (let j = 1; j <= newCharLen; j++) {
        positions.push([i - (shift - j), shift - j]);
      }
      shift -= newCharLen;
      shiftOrigin += newCharLen;
    }
    return p8;
  });
  positions.push([normalized.length, shift]);
  return [normalized, positions, hasDiacritics];
}
function getOriginalIndex(diffs, pos, len) {
  if (!diffs) {
    return [pos, len];
  }
  const start = pos;
  const end = pos + len - 1;
  let i = binarySearchFirstItem(diffs, (x) => x[0] >= start);
  if (diffs[i][0] > start) {
    --i;
  }
  let j = binarySearchFirstItem(diffs, (x) => x[0] >= end, i);
  if (diffs[j][0] > end) {
    --j;
  }
  const oldStart = start + diffs[i][1];
  const oldEnd = end + diffs[j][1];
  const oldLen = oldEnd + 1 - oldStart;
  return [oldStart, oldLen];
}
var PDFFindController = class {
  #state = null;
  #updateMatchesCountOnProgress = true;
  #visitedPagesCount = 0;
  constructor({
    linkService,
    eventBus,
    updateMatchesCountOnProgress = true
  }) {
    this._linkService = linkService;
    this._eventBus = eventBus;
    this.#updateMatchesCountOnProgress = updateMatchesCountOnProgress;
    this.onIsPageVisible = null;
    this.#reset();
    eventBus._on("find", this.#onFind.bind(this));
    eventBus._on("findbarclose", this.#onFindBarClose.bind(this));
  }
  get highlightMatches() {
    return this._highlightMatches;
  }
  get pageMatches() {
    return this._pageMatches;
  }
  get pageMatchesLength() {
    return this._pageMatchesLength;
  }
  get selected() {
    return this._selected;
  }
  get state() {
    return this.#state;
  }
  setDocument(pdfDocument) {
    if (this._pdfDocument) {
      this.#reset();
    }
    if (!pdfDocument) {
      return;
    }
    this._pdfDocument = pdfDocument;
    this._firstPageCapability.resolve();
  }
  #onFind(state) {
    if (!state) {
      return;
    }
    const pdfDocument = this._pdfDocument;
    const {
      type
    } = state;
    if (this.#state === null || this.#shouldDirtyMatch(state)) {
      this._dirtyMatch = true;
    }
    this.#state = state;
    if (type !== "highlightallchange") {
      this.#updateUIState(FindState.PENDING);
    }
    this._firstPageCapability.promise.then(() => {
      if (!this._pdfDocument || pdfDocument && this._pdfDocument !== pdfDocument) {
        return;
      }
      this.#extractText();
      const findbarClosed = !this._highlightMatches;
      const pendingTimeout = !!this._findTimeout;
      if (this._findTimeout) {
        clearTimeout(this._findTimeout);
        this._findTimeout = null;
      }
      if (!type) {
        this._findTimeout = setTimeout(() => {
          this.#nextMatch();
          this._findTimeout = null;
        }, FIND_TIMEOUT);
      } else if (this._dirtyMatch) {
        this.#nextMatch();
      } else if (type === "again") {
        this.#nextMatch();
        if (findbarClosed && this.#state.highlightAll) {
          this.#updateAllPages();
        }
      } else if (type === "highlightallchange") {
        if (pendingTimeout) {
          this.#nextMatch();
        } else {
          this._highlightMatches = true;
        }
        this.#updateAllPages();
      } else {
        this.#nextMatch();
      }
    });
  }
  scrollMatchIntoView({
    element = null,
    selectedLeft = 0,
    pageIndex = -1,
    matchIndex = -1
  }) {
    if (!this._scrollMatches || !element) {
      return;
    } else if (matchIndex === -1 || matchIndex !== this._selected.matchIdx) {
      return;
    } else if (pageIndex === -1 || pageIndex !== this._selected.pageIdx) {
      return;
    }
    this._scrollMatches = false;
    const spot = {
      top: MATCH_SCROLL_OFFSET_TOP,
      left: selectedLeft + MATCH_SCROLL_OFFSET_LEFT
    };
    scrollIntoView(element, spot, true);
  }
  #reset() {
    this._highlightMatches = false;
    this._scrollMatches = false;
    this._pdfDocument = null;
    this._pageMatches = [];
    this._pageMatchesLength = [];
    this.#visitedPagesCount = 0;
    this.#state = null;
    this._selected = {
      pageIdx: -1,
      matchIdx: -1
    };
    this._offset = {
      pageIdx: null,
      matchIdx: null,
      wrapped: false
    };
    this._extractTextPromises = [];
    this._pageContents = [];
    this._pageDiffs = [];
    this._hasDiacritics = [];
    this._matchesCountTotal = 0;
    this._pagesToSearch = null;
    this._pendingFindMatches = /* @__PURE__ */ new Set();
    this._resumePageIdx = null;
    this._dirtyMatch = false;
    clearTimeout(this._findTimeout);
    this._findTimeout = null;
    this._firstPageCapability = Promise.withResolvers();
  }
  get #query() {
    const {
      query
    } = this.#state;
    if (typeof query === "string") {
      if (query !== this._rawQuery) {
        this._rawQuery = query;
        [this._normalizedQuery] = normalize(query);
      }
      return this._normalizedQuery;
    }
    return (query || []).filter((q) => !!q).map((q) => normalize(q)[0]);
  }
  #shouldDirtyMatch(state) {
    const newQuery = state.query, prevQuery = this.#state.query;
    const newType = typeof newQuery, prevType = typeof prevQuery;
    if (newType !== prevType) {
      return true;
    }
    if (newType === "string") {
      if (newQuery !== prevQuery) {
        return true;
      }
    } else if (JSON.stringify(newQuery) !== JSON.stringify(prevQuery)) {
      return true;
    }
    switch (state.type) {
      case "again":
        const pageNumber = this._selected.pageIdx + 1;
        const linkService = this._linkService;
        return pageNumber >= 1 && pageNumber <= linkService.pagesCount && pageNumber !== linkService.page && !(this.onIsPageVisible?.(pageNumber) ?? true);
      case "highlightallchange":
        return false;
    }
    return true;
  }
  #isEntireWord(content, startIdx, length) {
    let match2 = content.slice(0, startIdx).match(NOT_DIACRITIC_FROM_END_REG_EXP);
    if (match2) {
      const first = content.charCodeAt(startIdx);
      const limit = match2[1].charCodeAt(0);
      if (getCharacterType(first) === getCharacterType(limit)) {
        return false;
      }
    }
    match2 = content.slice(startIdx + length).match(NOT_DIACRITIC_FROM_START_REG_EXP);
    if (match2) {
      const last = content.charCodeAt(startIdx + length - 1);
      const limit = match2[1].charCodeAt(0);
      if (getCharacterType(last) === getCharacterType(limit)) {
        return false;
      }
    }
    return true;
  }
  #calculateRegExpMatch(query, entireWord, pageIndex, pageContent) {
    const matches = this._pageMatches[pageIndex] = [];
    const matchesLength = this._pageMatchesLength[pageIndex] = [];
    if (!query) {
      return;
    }
    const diffs = this._pageDiffs[pageIndex];
    let match2;
    while ((match2 = query.exec(pageContent)) !== null) {
      if (entireWord && !this.#isEntireWord(pageContent, match2.index, match2[0].length)) {
        continue;
      }
      const [matchPos, matchLen] = getOriginalIndex(diffs, match2.index, match2[0].length);
      if (matchLen) {
        matches.push(matchPos);
        matchesLength.push(matchLen);
      }
    }
  }
  #convertToRegExpString(query, hasDiacritics) {
    const {
      matchDiacritics
    } = this.#state;
    let isUnicode = false;
    query = query.replaceAll(SPECIAL_CHARS_REG_EXP, (match2, p1, p2, p3, p4, p5) => {
      if (p1) {
        return `[ ]*\\${p1}[ ]*`;
      }
      if (p2) {
        return `[ ]*${p2}[ ]*`;
      }
      if (p3) {
        return "[ ]+";
      }
      if (matchDiacritics) {
        return p4 || p5;
      }
      if (p4) {
        return DIACRITICS_EXCEPTION.has(p4.charCodeAt(0)) ? p4 : "";
      }
      if (hasDiacritics) {
        isUnicode = true;
        return `${p5}\\p{M}*`;
      }
      return p5;
    });
    const trailingSpaces = "[ ]*";
    if (query.endsWith(trailingSpaces)) {
      query = query.slice(0, query.length - trailingSpaces.length);
    }
    if (matchDiacritics) {
      if (hasDiacritics) {
        DIACRITICS_EXCEPTION_STR ||= String.fromCharCode(...DIACRITICS_EXCEPTION);
        isUnicode = true;
        query = `${query}(?=[${DIACRITICS_EXCEPTION_STR}]|[^\\p{M}]|$)`;
      }
    }
    return [isUnicode, query];
  }
  #calculateMatch(pageIndex) {
    let query = this.#query;
    if (query.length === 0) {
      return;
    }
    const {
      caseSensitive,
      entireWord
    } = this.#state;
    const pageContent = this._pageContents[pageIndex];
    const hasDiacritics = this._hasDiacritics[pageIndex];
    let isUnicode = false;
    if (typeof query === "string") {
      [isUnicode, query] = this.#convertToRegExpString(query, hasDiacritics);
    } else {
      query = query.sort().reverse().map((q) => {
        const [isUnicodePart, queryPart] = this.#convertToRegExpString(q, hasDiacritics);
        isUnicode ||= isUnicodePart;
        return `(${queryPart})`;
      }).join("|");
    }
    const flags = `g${isUnicode ? "u" : ""}${caseSensitive ? "" : "i"}`;
    query = query ? new RegExp(query, flags) : null;
    this.#calculateRegExpMatch(query, entireWord, pageIndex, pageContent);
    if (this.#state.highlightAll) {
      this.#updatePage(pageIndex);
    }
    if (this._resumePageIdx === pageIndex) {
      this._resumePageIdx = null;
      this.#nextPageMatch();
    }
    const pageMatchesCount = this._pageMatches[pageIndex].length;
    this._matchesCountTotal += pageMatchesCount;
    if (this.#updateMatchesCountOnProgress) {
      if (pageMatchesCount > 0) {
        this.#updateUIResultsCount();
      }
    } else if (++this.#visitedPagesCount === this._linkService.pagesCount) {
      this.#updateUIResultsCount();
    }
  }
  #extractText() {
    if (this._extractTextPromises.length > 0) {
      return;
    }
    let deferred = Promise.resolve();
    const textOptions = {
      disableNormalization: true
    };
    for (let i = 0, ii = this._linkService.pagesCount; i < ii; i++) {
      const {
        promise,
        resolve
      } = Promise.withResolvers();
      this._extractTextPromises[i] = promise;
      deferred = deferred.then(() => {
        return this._pdfDocument.getPage(i + 1).then((pdfPage) => pdfPage.getTextContent(textOptions)).then((textContent) => {
          const strBuf = [];
          for (const textItem of textContent.items) {
            strBuf.push(textItem.str);
            if (textItem.hasEOL) {
              strBuf.push("\n");
            }
          }
          [this._pageContents[i], this._pageDiffs[i], this._hasDiacritics[i]] = normalize(strBuf.join(""));
          resolve();
        }, (reason) => {
          console.error(`Unable to get text content for page ${i + 1}`, reason);
          this._pageContents[i] = "";
          this._pageDiffs[i] = null;
          this._hasDiacritics[i] = false;
          resolve();
        });
      });
    }
  }
  #updatePage(index) {
    if (this._scrollMatches && this._selected.pageIdx === index) {
      this._linkService.page = index + 1;
    }
    this._eventBus.dispatch("updatetextlayermatches", {
      source: this,
      pageIndex: index
    });
  }
  #updateAllPages() {
    this._eventBus.dispatch("updatetextlayermatches", {
      source: this,
      pageIndex: -1
    });
  }
  #nextMatch() {
    const previous = this.#state.findPrevious;
    const currentPageIndex = this._linkService.page - 1;
    const numPages = this._linkService.pagesCount;
    this._highlightMatches = true;
    if (this._dirtyMatch) {
      this._dirtyMatch = false;
      this._selected.pageIdx = this._selected.matchIdx = -1;
      this._offset.pageIdx = currentPageIndex;
      this._offset.matchIdx = null;
      this._offset.wrapped = false;
      this._resumePageIdx = null;
      this._pageMatches.length = 0;
      this._pageMatchesLength.length = 0;
      this.#visitedPagesCount = 0;
      this._matchesCountTotal = 0;
      this.#updateAllPages();
      for (let i = 0; i < numPages; i++) {
        if (this._pendingFindMatches.has(i)) {
          continue;
        }
        this._pendingFindMatches.add(i);
        this._extractTextPromises[i].then(() => {
          this._pendingFindMatches.delete(i);
          this.#calculateMatch(i);
        });
      }
    }
    const query = this.#query;
    if (query.length === 0) {
      this.#updateUIState(FindState.FOUND);
      return;
    }
    if (this._resumePageIdx) {
      return;
    }
    const offset = this._offset;
    this._pagesToSearch = numPages;
    if (offset.matchIdx !== null) {
      const numPageMatches = this._pageMatches[offset.pageIdx].length;
      if (!previous && offset.matchIdx + 1 < numPageMatches || previous && offset.matchIdx > 0) {
        offset.matchIdx = previous ? offset.matchIdx - 1 : offset.matchIdx + 1;
        this.#updateMatch(true);
        return;
      }
      this.#advanceOffsetPage(previous);
    }
    this.#nextPageMatch();
  }
  #matchesReady(matches) {
    const offset = this._offset;
    const numMatches = matches.length;
    const previous = this.#state.findPrevious;
    if (numMatches) {
      offset.matchIdx = previous ? numMatches - 1 : 0;
      this.#updateMatch(true);
      return true;
    }
    this.#advanceOffsetPage(previous);
    if (offset.wrapped) {
      offset.matchIdx = null;
      if (this._pagesToSearch < 0) {
        this.#updateMatch(false);
        return true;
      }
    }
    return false;
  }
  #nextPageMatch() {
    if (this._resumePageIdx !== null) {
      console.error("There can only be one pending page.");
    }
    let matches = null;
    do {
      const pageIdx = this._offset.pageIdx;
      matches = this._pageMatches[pageIdx];
      if (!matches) {
        this._resumePageIdx = pageIdx;
        break;
      }
    } while (!this.#matchesReady(matches));
  }
  #advanceOffsetPage(previous) {
    const offset = this._offset;
    const numPages = this._linkService.pagesCount;
    offset.pageIdx = previous ? offset.pageIdx - 1 : offset.pageIdx + 1;
    offset.matchIdx = null;
    this._pagesToSearch--;
    if (offset.pageIdx >= numPages || offset.pageIdx < 0) {
      offset.pageIdx = previous ? numPages - 1 : 0;
      offset.wrapped = true;
    }
  }
  #updateMatch(found = false) {
    let state = FindState.NOT_FOUND;
    const wrapped = this._offset.wrapped;
    this._offset.wrapped = false;
    if (found) {
      const previousPage = this._selected.pageIdx;
      this._selected.pageIdx = this._offset.pageIdx;
      this._selected.matchIdx = this._offset.matchIdx;
      state = wrapped ? FindState.WRAPPED : FindState.FOUND;
      if (previousPage !== -1 && previousPage !== this._selected.pageIdx) {
        this.#updatePage(previousPage);
      }
    }
    this.#updateUIState(state, this.#state.findPrevious);
    if (this._selected.pageIdx !== -1) {
      this._scrollMatches = true;
      this.#updatePage(this._selected.pageIdx);
    }
  }
  #onFindBarClose(evt) {
    const pdfDocument = this._pdfDocument;
    this._firstPageCapability.promise.then(() => {
      if (!this._pdfDocument || pdfDocument && this._pdfDocument !== pdfDocument) {
        return;
      }
      if (this._findTimeout) {
        clearTimeout(this._findTimeout);
        this._findTimeout = null;
      }
      if (this._resumePageIdx) {
        this._resumePageIdx = null;
        this._dirtyMatch = true;
      }
      this.#updateUIState(FindState.FOUND);
      this._highlightMatches = false;
      this.#updateAllPages();
    });
  }
  #requestMatchesCount() {
    const {
      pageIdx,
      matchIdx
    } = this._selected;
    let current = 0, total = this._matchesCountTotal;
    if (matchIdx !== -1) {
      for (let i = 0; i < pageIdx; i++) {
        current += this._pageMatches[i]?.length || 0;
      }
      current += matchIdx + 1;
    }
    if (current < 1 || current > total) {
      current = total = 0;
    }
    return {
      current,
      total
    };
  }
  #updateUIResultsCount() {
    this._eventBus.dispatch("updatefindmatchescount", {
      source: this,
      matchesCount: this.#requestMatchesCount()
    });
  }
  #updateUIState(state, previous = false) {
    if (!this.#updateMatchesCountOnProgress && (this.#visitedPagesCount !== this._linkService.pagesCount || state === FindState.PENDING)) {
      return;
    }
    this._eventBus.dispatch("updatefindcontrolstate", {
      source: this,
      state,
      previous,
      entireWord: this.#state?.entireWord ?? null,
      matchesCount: this.#requestMatchesCount(),
      rawQuery: this.#state?.query ?? null
    });
  }
};
var DEFAULT_LINK_REL = "noopener noreferrer nofollow";
var LinkTarget = {
  NONE: 0,
  SELF: 1,
  BLANK: 2,
  PARENT: 3,
  TOP: 4
};
var PDFLinkService = class _PDFLinkService {
  externalLinkEnabled = true;
  constructor({
    eventBus,
    externalLinkTarget = null,
    externalLinkRel = null,
    ignoreDestinationZoom = false
  } = {}) {
    this.eventBus = eventBus;
    this.externalLinkTarget = externalLinkTarget;
    this.externalLinkRel = externalLinkRel;
    this._ignoreDestinationZoom = ignoreDestinationZoom;
    this.baseUrl = null;
    this.pdfDocument = null;
    this.pdfViewer = null;
    this.pdfHistory = null;
  }
  setDocument(pdfDocument, baseUrl = null) {
    this.baseUrl = baseUrl;
    this.pdfDocument = pdfDocument;
  }
  setViewer(pdfViewer) {
    this.pdfViewer = pdfViewer;
  }
  setHistory(pdfHistory) {
    this.pdfHistory = pdfHistory;
  }
  get pagesCount() {
    return this.pdfDocument ? this.pdfDocument.numPages : 0;
  }
  get page() {
    return this.pdfDocument ? this.pdfViewer.currentPageNumber : 1;
  }
  set page(value) {
    if (this.pdfDocument) {
      this.pdfViewer.currentPageNumber = value;
    }
  }
  get rotation() {
    return this.pdfDocument ? this.pdfViewer.pagesRotation : 0;
  }
  set rotation(value) {
    if (this.pdfDocument) {
      this.pdfViewer.pagesRotation = value;
    }
  }
  get isInPresentationMode() {
    return this.pdfDocument ? this.pdfViewer.isInPresentationMode : false;
  }
  async goToDestination(dest) {
    if (!this.pdfDocument) {
      return;
    }
    let namedDest, explicitDest, pageNumber;
    if (typeof dest === "string") {
      namedDest = dest;
      explicitDest = await this.pdfDocument.getDestination(dest);
    } else {
      namedDest = null;
      explicitDest = await dest;
    }
    if (!Array.isArray(explicitDest)) {
      console.error(`goToDestination: "${explicitDest}" is not a valid destination array, for dest="${dest}".`);
      return;
    }
    const [destRef] = explicitDest;
    if (destRef && typeof destRef === "object") {
      pageNumber = this.pdfDocument.cachedPageNumber(destRef);
      if (!pageNumber) {
        try {
          pageNumber = await this.pdfDocument.getPageIndex(destRef) + 1;
        } catch {
          console.error(`goToDestination: "${destRef}" is not a valid page reference, for dest="${dest}".`);
          return;
        }
      }
    } else if (Number.isInteger(destRef)) {
      pageNumber = destRef + 1;
    }
    if (!pageNumber || pageNumber < 1 || pageNumber > this.pagesCount) {
      console.error(`goToDestination: "${pageNumber}" is not a valid page number, for dest="${dest}".`);
      return;
    }
    if (this.pdfHistory) {
      this.pdfHistory.pushCurrentPosition();
      this.pdfHistory.push({
        namedDest,
        explicitDest,
        pageNumber
      });
    }
    this.pdfViewer.scrollPageIntoView({
      pageNumber,
      destArray: explicitDest,
      ignoreDestinationZoom: this._ignoreDestinationZoom
    });
  }
  goToPage(val) {
    if (!this.pdfDocument) {
      return;
    }
    const pageNumber = typeof val === "string" && this.pdfViewer.pageLabelToPageNumber(val) || val | 0;
    if (!(Number.isInteger(pageNumber) && pageNumber > 0 && pageNumber <= this.pagesCount)) {
      console.error(`PDFLinkService.goToPage: "${val}" is not a valid page.`);
      return;
    }
    if (this.pdfHistory) {
      this.pdfHistory.pushCurrentPosition();
      this.pdfHistory.pushPage(pageNumber);
    }
    this.pdfViewer.scrollPageIntoView({
      pageNumber
    });
  }
  addLinkAttributes(link, url, newWindow = false) {
    if (!url || typeof url !== "string") {
      throw new Error('A valid "url" parameter must provided.');
    }
    const target = newWindow ? LinkTarget.BLANK : this.externalLinkTarget, rel = this.externalLinkRel;
    if (this.externalLinkEnabled) {
      link.href = link.title = url;
    } else {
      link.href = "";
      link.title = `Disabled: ${url}`;
      link.onclick = () => false;
    }
    let targetStr = "";
    switch (target) {
      case LinkTarget.NONE:
        break;
      case LinkTarget.SELF:
        targetStr = "_self";
        break;
      case LinkTarget.BLANK:
        targetStr = "_blank";
        break;
      case LinkTarget.PARENT:
        targetStr = "_parent";
        break;
      case LinkTarget.TOP:
        targetStr = "_top";
        break;
    }
    link.target = targetStr;
    link.rel = typeof rel === "string" ? rel : DEFAULT_LINK_REL;
  }
  getDestinationHash(dest) {
    if (typeof dest === "string") {
      if (dest.length > 0) {
        return this.getAnchorUrl("#" + escape(dest));
      }
    } else if (Array.isArray(dest)) {
      const str = JSON.stringify(dest);
      if (str.length > 0) {
        return this.getAnchorUrl("#" + escape(str));
      }
    }
    return this.getAnchorUrl("");
  }
  getAnchorUrl(anchor) {
    return this.baseUrl ? this.baseUrl + anchor : anchor;
  }
  setHash(hash) {
    if (!this.pdfDocument) {
      return;
    }
    let pageNumber, dest;
    if (hash.includes("=")) {
      const params = parseQueryString(hash);
      if (params.has("search")) {
        const query = params.get("search").replaceAll('"', ""), phrase = params.get("phrase") === "true";
        this.eventBus.dispatch("findfromurlhash", {
          source: this,
          query: phrase ? query : query.match(/\S+/g)
        });
      }
      if (params.has("page")) {
        pageNumber = params.get("page") | 0 || 1;
      }
      if (params.has("zoom")) {
        const zoomArgs = params.get("zoom").split(",");
        const zoomArg = zoomArgs[0];
        const zoomArgNumber = parseFloat(zoomArg);
        if (!zoomArg.includes("Fit")) {
          dest = [null, {
            name: "XYZ"
          }, zoomArgs.length > 1 ? zoomArgs[1] | 0 : null, zoomArgs.length > 2 ? zoomArgs[2] | 0 : null, zoomArgNumber ? zoomArgNumber / 100 : zoomArg];
        } else if (zoomArg === "Fit" || zoomArg === "FitB") {
          dest = [null, {
            name: zoomArg
          }];
        } else if (zoomArg === "FitH" || zoomArg === "FitBH" || zoomArg === "FitV" || zoomArg === "FitBV") {
          dest = [null, {
            name: zoomArg
          }, zoomArgs.length > 1 ? zoomArgs[1] | 0 : null];
        } else if (zoomArg === "FitR") {
          if (zoomArgs.length !== 5) {
            console.error('PDFLinkService.setHash: Not enough parameters for "FitR".');
          } else {
            dest = [null, {
              name: zoomArg
            }, zoomArgs[1] | 0, zoomArgs[2] | 0, zoomArgs[3] | 0, zoomArgs[4] | 0];
          }
        } else {
          console.error(`PDFLinkService.setHash: "${zoomArg}" is not a valid zoom value.`);
        }
      }
      if (dest) {
        this.pdfViewer.scrollPageIntoView({
          pageNumber: pageNumber || this.page,
          destArray: dest,
          allowNegativeOffset: true
        });
      } else if (pageNumber) {
        this.page = pageNumber;
      }
      if (params.has("pagemode")) {
        this.eventBus.dispatch("pagemode", {
          source: this,
          mode: params.get("pagemode")
        });
      }
      if (params.has("nameddest")) {
        this.goToDestination(params.get("nameddest"));
      }
      return;
    }
    dest = unescape(hash);
    try {
      dest = JSON.parse(dest);
      if (!Array.isArray(dest)) {
        dest = dest.toString();
      }
    } catch {
    }
    if (typeof dest === "string" || _PDFLinkService.#isValidExplicitDest(dest)) {
      this.goToDestination(dest);
      return;
    }
    console.error(`PDFLinkService.setHash: "${unescape(hash)}" is not a valid destination.`);
  }
  executeNamedAction(action) {
    if (!this.pdfDocument) {
      return;
    }
    switch (action) {
      case "GoBack":
        this.pdfHistory?.back();
        break;
      case "GoForward":
        this.pdfHistory?.forward();
        break;
      case "NextPage":
        this.pdfViewer.nextPage();
        break;
      case "PrevPage":
        this.pdfViewer.previousPage();
        break;
      case "LastPage":
        this.page = this.pagesCount;
        break;
      case "FirstPage":
        this.page = 1;
        break;
      default:
        break;
    }
    this.eventBus.dispatch("namedaction", {
      source: this,
      action
    });
  }
  async executeSetOCGState(action) {
    if (!this.pdfDocument) {
      return;
    }
    const pdfDocument = this.pdfDocument, optionalContentConfig = await this.pdfViewer.optionalContentConfigPromise;
    if (pdfDocument !== this.pdfDocument) {
      return;
    }
    optionalContentConfig.setOCGState(action);
    this.pdfViewer.optionalContentConfigPromise = Promise.resolve(optionalContentConfig);
  }
  static #isValidExplicitDest(dest) {
    if (!Array.isArray(dest) || dest.length < 2) {
      return false;
    }
    const [page, zoom, ...args] = dest;
    if (!(typeof page === "object" && Number.isInteger(page?.num) && Number.isInteger(page?.gen)) && !Number.isInteger(page)) {
      return false;
    }
    if (!(typeof zoom === "object" && typeof zoom?.name === "string")) {
      return false;
    }
    const argsLen = args.length;
    let allowNull = true;
    switch (zoom.name) {
      case "XYZ":
        if (argsLen < 2 || argsLen > 3) {
          return false;
        }
        break;
      case "Fit":
      case "FitB":
        return argsLen === 0;
      case "FitH":
      case "FitBH":
      case "FitV":
      case "FitBV":
        if (argsLen > 1) {
          return false;
        }
        break;
      case "FitR":
        if (argsLen !== 4) {
          return false;
        }
        allowNull = false;
        break;
      default:
        return false;
    }
    for (const arg of args) {
      if (!(typeof arg === "number" || allowNull && arg === null)) {
        return false;
      }
    }
    return true;
  }
};
var SimpleLinkService = class extends PDFLinkService {
  setDocument(pdfDocument, baseUrl = null) {
  }
};
var {
  AbortException: AbortException2,
  AnnotationEditorLayer: AnnotationEditorLayer2,
  AnnotationEditorParamsType: AnnotationEditorParamsType2,
  AnnotationEditorType: AnnotationEditorType2,
  AnnotationEditorUIManager: AnnotationEditorUIManager2,
  AnnotationLayer: AnnotationLayer2,
  AnnotationMode: AnnotationMode2,
  build: build2,
  CMapCompressionType: CMapCompressionType2,
  ColorPicker: ColorPicker2,
  createValidAbsoluteUrl: createValidAbsoluteUrl2,
  DOMSVGFactory: DOMSVGFactory2,
  DrawLayer: DrawLayer2,
  FeatureTest: FeatureTest2,
  fetchData: fetchData2,
  getDocument: getDocument2,
  getFilenameFromUrl: getFilenameFromUrl2,
  getPdfFilenameFromUrl: getPdfFilenameFromUrl2,
  getXfaPageViewport: getXfaPageViewport2,
  GlobalWorkerOptions: GlobalWorkerOptions2,
  ImageKind: ImageKind2,
  InvalidPDFException: InvalidPDFException2,
  isDataScheme: isDataScheme2,
  isPdfFile: isPdfFile2,
  MissingPDFException: MissingPDFException2,
  noContextMenu: noContextMenu2,
  normalizeUnicode: normalizeUnicode2,
  OPS: OPS2,
  PasswordResponses: PasswordResponses2,
  PDFDataRangeTransport: PDFDataRangeTransport2,
  PDFDateString: PDFDateString2,
  PDFWorker: PDFWorker2,
  PermissionFlag: PermissionFlag2,
  PixelsPerInch: PixelsPerInch2,
  RenderingCancelledException: RenderingCancelledException2,
  setLayerDimensions: setLayerDimensions2,
  shadow: shadow2,
  TextLayer: TextLayer2,
  UnexpectedResponseException: UnexpectedResponseException2,
  Util: Util2,
  VerbosityLevel: VerbosityLevel2,
  version: version2,
  XfaLayer: XfaLayer2
} = globalThis.pdfjsLib;
var AnnotationLayerBuilder = class {
  #onAppend = null;
  #eventAbortController = null;
  constructor({
    pdfPage,
    linkService,
    downloadManager,
    annotationStorage = null,
    imageResourcesPath = "",
    renderForms = true,
    enableScripting = false,
    hasJSActionsPromise = null,
    fieldObjectsPromise = null,
    annotationCanvasMap = null,
    accessibilityManager = null,
    annotationEditorUIManager = null,
    onAppend = null
  }) {
    this.pdfPage = pdfPage;
    this.linkService = linkService;
    this.downloadManager = downloadManager;
    this.imageResourcesPath = imageResourcesPath;
    this.renderForms = renderForms;
    this.annotationStorage = annotationStorage;
    this.enableScripting = enableScripting;
    this._hasJSActionsPromise = hasJSActionsPromise || Promise.resolve(false);
    this._fieldObjectsPromise = fieldObjectsPromise || Promise.resolve(null);
    this._annotationCanvasMap = annotationCanvasMap;
    this._accessibilityManager = accessibilityManager;
    this._annotationEditorUIManager = annotationEditorUIManager;
    this.#onAppend = onAppend;
    this.annotationLayer = null;
    this.div = null;
    this._cancelled = false;
    this._eventBus = linkService.eventBus;
  }
  async render(viewport, intent = "display") {
    if (this.div) {
      if (this._cancelled || !this.annotationLayer) {
        return;
      }
      this.annotationLayer.update({
        viewport: viewport.clone({
          dontFlip: true
        })
      });
      return;
    }
    const [annotations, hasJSActions, fieldObjects] = await Promise.all([this.pdfPage.getAnnotations({
      intent
    }), this._hasJSActionsPromise, this._fieldObjectsPromise]);
    if (this._cancelled) {
      return;
    }
    const div = this.div = document.createElement("div");
    div.className = "annotationLayer";
    this.#onAppend?.(div);
    if (annotations.length === 0) {
      this.hide();
      return;
    }
    this.annotationLayer = new AnnotationLayer2({
      div,
      accessibilityManager: this._accessibilityManager,
      annotationCanvasMap: this._annotationCanvasMap,
      annotationEditorUIManager: this._annotationEditorUIManager,
      page: this.pdfPage,
      viewport: viewport.clone({
        dontFlip: true
      })
    });
    await this.annotationLayer.render({
      annotations,
      imageResourcesPath: this.imageResourcesPath,
      renderForms: this.renderForms,
      linkService: this.linkService,
      downloadManager: this.downloadManager,
      annotationStorage: this.annotationStorage,
      enableScripting: this.enableScripting,
      hasJSActions,
      fieldObjects
    });
    if (this.linkService.isInPresentationMode) {
      this.#updatePresentationModeState(PresentationModeState.FULLSCREEN);
    }
    if (!this.#eventAbortController) {
      this.#eventAbortController = new AbortController();
      this._eventBus?._on("presentationmodechanged", (evt) => {
        this.#updatePresentationModeState(evt.state);
      }, {
        signal: this.#eventAbortController.signal
      });
    }
  }
  cancel() {
    this._cancelled = true;
    this.#eventAbortController?.abort();
    this.#eventAbortController = null;
  }
  hide() {
    if (!this.div) {
      return;
    }
    this.div.hidden = true;
  }
  hasEditableAnnotations() {
    return !!this.annotationLayer?.hasEditableAnnotations();
  }
  #updatePresentationModeState(state) {
    if (!this.div) {
      return;
    }
    let disableFormElements = false;
    switch (state) {
      case PresentationModeState.FULLSCREEN:
        disableFormElements = true;
        break;
      case PresentationModeState.NORMAL:
        break;
      default:
        return;
    }
    for (const section of this.div.childNodes) {
      if (section.hasAttribute("data-internal-link")) {
        continue;
      }
      section.inert = disableFormElements;
    }
  }
};
function download(blobUrl, filename) {
  const a = document.createElement("a");
  if (!a.click) {
    throw new Error('DownloadManager: "a.click()" is not supported.');
  }
  a.href = blobUrl;
  a.target = "_parent";
  if ("download" in a) {
    a.download = filename;
  }
  (document.body || document.documentElement).append(a);
  a.click();
  a.remove();
}
var DownloadManager = class {
  #openBlobUrls = /* @__PURE__ */ new WeakMap();
  downloadData(data, filename, contentType) {
    const blobUrl = URL.createObjectURL(new Blob([data], {
      type: contentType
    }));
    download(blobUrl, filename);
  }
  openOrDownloadData(data, filename, dest = null) {
    const isPdfData = isPdfFile2(filename);
    const contentType = isPdfData ? "application/pdf" : "";
    this.downloadData(data, filename, contentType);
    return false;
  }
  download(data, url, filename, _options) {
    let blobUrl;
    if (data) {
      blobUrl = URL.createObjectURL(new Blob([data], {
        type: "application/pdf"
      }));
    } else {
      if (!createValidAbsoluteUrl2(url, "http://example.com")) {
        console.error(`download - not a valid URL: ${url}`);
        return;
      }
      blobUrl = url + "#pdfjs.action=download";
    }
    download(blobUrl, filename);
  }
};
var WaitOnType = {
  EVENT: "event",
  TIMEOUT: "timeout"
};
async function waitOnEventOrTimeout({
  target,
  name,
  delay = 0
}) {
  if (typeof target !== "object" || !(name && typeof name === "string") || !(Number.isInteger(delay) && delay >= 0)) {
    throw new Error("waitOnEventOrTimeout - invalid parameters.");
  }
  const {
    promise,
    resolve
  } = Promise.withResolvers();
  const ac = new AbortController();
  function handler(type) {
    ac.abort();
    clearTimeout(timeout);
    resolve(type);
  }
  const evtMethod = target instanceof EventBus ? "_on" : "addEventListener";
  target[evtMethod](name, handler.bind(null, WaitOnType.EVENT), {
    signal: ac.signal
  });
  const timeout = setTimeout(handler.bind(null, WaitOnType.TIMEOUT), delay);
  return promise;
}
var EventBus = class {
  #listeners = /* @__PURE__ */ Object.create(null);
  on(eventName, listener, options = null) {
    this._on(eventName, listener, {
      external: true,
      once: options?.once,
      signal: options?.signal
    });
  }
  off(eventName, listener, options = null) {
    this._off(eventName, listener);
  }
  dispatch(eventName, data) {
    const eventListeners = this.#listeners[eventName];
    if (!eventListeners || eventListeners.length === 0) {
      return;
    }
    let externalListeners;
    for (const {
      listener,
      external,
      once
    } of eventListeners.slice(0)) {
      if (once) {
        this._off(eventName, listener);
      }
      if (external) {
        (externalListeners ||= []).push(listener);
        continue;
      }
      listener(data);
    }
    if (externalListeners) {
      for (const listener of externalListeners) {
        listener(data);
      }
      externalListeners = null;
    }
  }
  _on(eventName, listener, options = null) {
    let rmAbort = null;
    if (options?.signal instanceof AbortSignal) {
      const {
        signal
      } = options;
      if (signal.aborted) {
        console.error("Cannot use an `aborted` signal.");
        return;
      }
      const onAbort = () => this._off(eventName, listener);
      rmAbort = () => signal.removeEventListener("abort", onAbort);
      signal.addEventListener("abort", onAbort);
    }
    const eventListeners = this.#listeners[eventName] ||= [];
    eventListeners.push({
      listener,
      external: options?.external === true,
      once: options?.once === true,
      rmAbort
    });
  }
  _off(eventName, listener, options = null) {
    const eventListeners = this.#listeners[eventName];
    if (!eventListeners) {
      return;
    }
    for (let i = 0, ii = eventListeners.length; i < ii; i++) {
      const evt = eventListeners[i];
      if (evt.listener === listener) {
        evt.rmAbort?.();
        eventListeners.splice(i, 1);
        return;
      }
    }
  }
};
var FluentType = class {
  constructor(value) {
    this.value = value;
  }
  valueOf() {
    return this.value;
  }
};
var FluentNone = class extends FluentType {
  constructor(value = "???") {
    super(value);
  }
  toString(scope) {
    return `{${this.value}}`;
  }
};
var FluentNumber = class extends FluentType {
  constructor(value, opts = {}) {
    super(value);
    this.opts = opts;
  }
  toString(scope) {
    try {
      const nf = scope.memoizeIntlObject(Intl.NumberFormat, this.opts);
      return nf.format(this.value);
    } catch (err) {
      scope.reportError(err);
      return this.value.toString(10);
    }
  }
};
var FluentDateTime = class extends FluentType {
  constructor(value, opts = {}) {
    super(value);
    this.opts = opts;
  }
  toString(scope) {
    try {
      const dtf = scope.memoizeIntlObject(Intl.DateTimeFormat, this.opts);
      return dtf.format(this.value);
    } catch (err) {
      scope.reportError(err);
      return new Date(this.value).toISOString();
    }
  }
};
var MAX_PLACEABLES = 100;
var FSI = "\u2068";
var PDI = "\u2069";
function match(scope, selector, key) {
  if (key === selector) {
    return true;
  }
  if (key instanceof FluentNumber && selector instanceof FluentNumber && key.value === selector.value) {
    return true;
  }
  if (selector instanceof FluentNumber && typeof key === "string") {
    let category = scope.memoizeIntlObject(Intl.PluralRules, selector.opts).select(selector.value);
    if (key === category) {
      return true;
    }
  }
  return false;
}
function getDefault(scope, variants, star) {
  if (variants[star]) {
    return resolvePattern(scope, variants[star].value);
  }
  scope.reportError(new RangeError("No default"));
  return new FluentNone();
}
function getArguments(scope, args) {
  const positional = [];
  const named = /* @__PURE__ */ Object.create(null);
  for (const arg of args) {
    if (arg.type === "narg") {
      named[arg.name] = resolveExpression(scope, arg.value);
    } else {
      positional.push(resolveExpression(scope, arg));
    }
  }
  return {
    positional,
    named
  };
}
function resolveExpression(scope, expr) {
  switch (expr.type) {
    case "str":
      return expr.value;
    case "num":
      return new FluentNumber(expr.value, {
        minimumFractionDigits: expr.precision
      });
    case "var":
      return resolveVariableReference(scope, expr);
    case "mesg":
      return resolveMessageReference(scope, expr);
    case "term":
      return resolveTermReference(scope, expr);
    case "func":
      return resolveFunctionReference(scope, expr);
    case "select":
      return resolveSelectExpression(scope, expr);
    default:
      return new FluentNone();
  }
}
function resolveVariableReference(scope, {
  name
}) {
  let arg;
  if (scope.params) {
    if (Object.prototype.hasOwnProperty.call(scope.params, name)) {
      arg = scope.params[name];
    } else {
      return new FluentNone(`$${name}`);
    }
  } else if (scope.args && Object.prototype.hasOwnProperty.call(scope.args, name)) {
    arg = scope.args[name];
  } else {
    scope.reportError(new ReferenceError(`Unknown variable: $${name}`));
    return new FluentNone(`$${name}`);
  }
  if (arg instanceof FluentType) {
    return arg;
  }
  switch (typeof arg) {
    case "string":
      return arg;
    case "number":
      return new FluentNumber(arg);
    case "object":
      if (arg instanceof Date) {
        return new FluentDateTime(arg.getTime());
      }
    default:
      scope.reportError(new TypeError(`Variable type not supported: $${name}, ${typeof arg}`));
      return new FluentNone(`$${name}`);
  }
}
function resolveMessageReference(scope, {
  name,
  attr
}) {
  const message = scope.bundle._messages.get(name);
  if (!message) {
    scope.reportError(new ReferenceError(`Unknown message: ${name}`));
    return new FluentNone(name);
  }
  if (attr) {
    const attribute = message.attributes[attr];
    if (attribute) {
      return resolvePattern(scope, attribute);
    }
    scope.reportError(new ReferenceError(`Unknown attribute: ${attr}`));
    return new FluentNone(`${name}.${attr}`);
  }
  if (message.value) {
    return resolvePattern(scope, message.value);
  }
  scope.reportError(new ReferenceError(`No value: ${name}`));
  return new FluentNone(name);
}
function resolveTermReference(scope, {
  name,
  attr,
  args
}) {
  const id = `-${name}`;
  const term = scope.bundle._terms.get(id);
  if (!term) {
    scope.reportError(new ReferenceError(`Unknown term: ${id}`));
    return new FluentNone(id);
  }
  if (attr) {
    const attribute = term.attributes[attr];
    if (attribute) {
      scope.params = getArguments(scope, args).named;
      const resolved2 = resolvePattern(scope, attribute);
      scope.params = null;
      return resolved2;
    }
    scope.reportError(new ReferenceError(`Unknown attribute: ${attr}`));
    return new FluentNone(`${id}.${attr}`);
  }
  scope.params = getArguments(scope, args).named;
  const resolved = resolvePattern(scope, term.value);
  scope.params = null;
  return resolved;
}
function resolveFunctionReference(scope, {
  name,
  args
}) {
  let func = scope.bundle._functions[name];
  if (!func) {
    scope.reportError(new ReferenceError(`Unknown function: ${name}()`));
    return new FluentNone(`${name}()`);
  }
  if (typeof func !== "function") {
    scope.reportError(new TypeError(`Function ${name}() is not callable`));
    return new FluentNone(`${name}()`);
  }
  try {
    let resolved = getArguments(scope, args);
    return func(resolved.positional, resolved.named);
  } catch (err) {
    scope.reportError(err);
    return new FluentNone(`${name}()`);
  }
}
function resolveSelectExpression(scope, {
  selector,
  variants,
  star
}) {
  let sel = resolveExpression(scope, selector);
  if (sel instanceof FluentNone) {
    return getDefault(scope, variants, star);
  }
  for (const variant of variants) {
    const key = resolveExpression(scope, variant.key);
    if (match(scope, sel, key)) {
      return resolvePattern(scope, variant.value);
    }
  }
  return getDefault(scope, variants, star);
}
function resolveComplexPattern(scope, ptn) {
  if (scope.dirty.has(ptn)) {
    scope.reportError(new RangeError("Cyclic reference"));
    return new FluentNone();
  }
  scope.dirty.add(ptn);
  const result = [];
  const useIsolating = scope.bundle._useIsolating && ptn.length > 1;
  for (const elem of ptn) {
    if (typeof elem === "string") {
      result.push(scope.bundle._transform(elem));
      continue;
    }
    scope.placeables++;
    if (scope.placeables > MAX_PLACEABLES) {
      scope.dirty.delete(ptn);
      throw new RangeError(`Too many placeables expanded: ${scope.placeables}, max allowed is ${MAX_PLACEABLES}`);
    }
    if (useIsolating) {
      result.push(FSI);
    }
    result.push(resolveExpression(scope, elem).toString(scope));
    if (useIsolating) {
      result.push(PDI);
    }
  }
  scope.dirty.delete(ptn);
  return result.join("");
}
function resolvePattern(scope, value) {
  if (typeof value === "string") {
    return scope.bundle._transform(value);
  }
  return resolveComplexPattern(scope, value);
}
var Scope = class {
  constructor(bundle, errors, args) {
    this.dirty = /* @__PURE__ */ new WeakSet();
    this.params = null;
    this.placeables = 0;
    this.bundle = bundle;
    this.errors = errors;
    this.args = args;
  }
  reportError(error) {
    if (!this.errors || !(error instanceof Error)) {
      throw error;
    }
    this.errors.push(error);
  }
  memoizeIntlObject(ctor, opts) {
    let cache2 = this.bundle._intls.get(ctor);
    if (!cache2) {
      cache2 = {};
      this.bundle._intls.set(ctor, cache2);
    }
    let id = JSON.stringify(opts);
    if (!cache2[id]) {
      cache2[id] = new ctor(this.bundle.locales, opts);
    }
    return cache2[id];
  }
};
function values(opts, allowed) {
  const unwrapped = /* @__PURE__ */ Object.create(null);
  for (const [name, opt] of Object.entries(opts)) {
    if (allowed.includes(name)) {
      unwrapped[name] = opt.valueOf();
    }
  }
  return unwrapped;
}
var NUMBER_ALLOWED = ["unitDisplay", "currencyDisplay", "useGrouping", "minimumIntegerDigits", "minimumFractionDigits", "maximumFractionDigits", "minimumSignificantDigits", "maximumSignificantDigits"];
function NUMBER(args, opts) {
  let arg = args[0];
  if (arg instanceof FluentNone) {
    return new FluentNone(`NUMBER(${arg.valueOf()})`);
  }
  if (arg instanceof FluentNumber) {
    return new FluentNumber(arg.valueOf(), {
      ...arg.opts,
      ...values(opts, NUMBER_ALLOWED)
    });
  }
  if (arg instanceof FluentDateTime) {
    return new FluentNumber(arg.valueOf(), {
      ...values(opts, NUMBER_ALLOWED)
    });
  }
  throw new TypeError("Invalid argument to NUMBER");
}
var DATETIME_ALLOWED = ["dateStyle", "timeStyle", "fractionalSecondDigits", "dayPeriod", "hour12", "weekday", "era", "year", "month", "day", "hour", "minute", "second", "timeZoneName"];
function DATETIME(args, opts) {
  let arg = args[0];
  if (arg instanceof FluentNone) {
    return new FluentNone(`DATETIME(${arg.valueOf()})`);
  }
  if (arg instanceof FluentDateTime) {
    return new FluentDateTime(arg.valueOf(), {
      ...arg.opts,
      ...values(opts, DATETIME_ALLOWED)
    });
  }
  if (arg instanceof FluentNumber) {
    return new FluentDateTime(arg.valueOf(), {
      ...values(opts, DATETIME_ALLOWED)
    });
  }
  throw new TypeError("Invalid argument to DATETIME");
}
var cache = /* @__PURE__ */ new Map();
function getMemoizerForLocale(locales) {
  const stringLocale = Array.isArray(locales) ? locales.join(" ") : locales;
  let memoizer = cache.get(stringLocale);
  if (memoizer === void 0) {
    memoizer = /* @__PURE__ */ new Map();
    cache.set(stringLocale, memoizer);
  }
  return memoizer;
}
var FluentBundle = class {
  constructor(locales, {
    functions,
    useIsolating = true,
    transform = (v) => v
  } = {}) {
    this._terms = /* @__PURE__ */ new Map();
    this._messages = /* @__PURE__ */ new Map();
    this.locales = Array.isArray(locales) ? locales : [locales];
    this._functions = {
      NUMBER,
      DATETIME,
      ...functions
    };
    this._useIsolating = useIsolating;
    this._transform = transform;
    this._intls = getMemoizerForLocale(locales);
  }
  hasMessage(id) {
    return this._messages.has(id);
  }
  getMessage(id) {
    return this._messages.get(id);
  }
  addResource(res, {
    allowOverrides = false
  } = {}) {
    const errors = [];
    for (let i = 0; i < res.body.length; i++) {
      let entry = res.body[i];
      if (entry.id.startsWith("-")) {
        if (allowOverrides === false && this._terms.has(entry.id)) {
          errors.push(new Error(`Attempt to override an existing term: "${entry.id}"`));
          continue;
        }
        this._terms.set(entry.id, entry);
      } else {
        if (allowOverrides === false && this._messages.has(entry.id)) {
          errors.push(new Error(`Attempt to override an existing message: "${entry.id}"`));
          continue;
        }
        this._messages.set(entry.id, entry);
      }
    }
    return errors;
  }
  formatPattern(pattern, args = null, errors = null) {
    if (typeof pattern === "string") {
      return this._transform(pattern);
    }
    let scope = new Scope(this, errors, args);
    try {
      let value = resolveComplexPattern(scope, pattern);
      return value.toString(scope);
    } catch (err) {
      if (scope.errors && err instanceof Error) {
        scope.errors.push(err);
        return new FluentNone().toString(scope);
      }
      throw err;
    }
  }
};
var RE_MESSAGE_START = /^(-?[a-zA-Z][\w-]*) *= */gm;
var RE_ATTRIBUTE_START = /\.([a-zA-Z][\w-]*) *= */y;
var RE_VARIANT_START = /\*?\[/y;
var RE_NUMBER_LITERAL = /(-?[0-9]+(?:\.([0-9]+))?)/y;
var RE_IDENTIFIER = /([a-zA-Z][\w-]*)/y;
var RE_REFERENCE = /([$-])?([a-zA-Z][\w-]*)(?:\.([a-zA-Z][\w-]*))?/y;
var RE_FUNCTION_NAME = /^[A-Z][A-Z0-9_-]*$/;
var RE_TEXT_RUN = /([^{}\n\r]+)/y;
var RE_STRING_RUN = /([^\\"\n\r]*)/y;
var RE_STRING_ESCAPE = /\\([\\"])/y;
var RE_UNICODE_ESCAPE = /\\u([a-fA-F0-9]{4})|\\U([a-fA-F0-9]{6})/y;
var RE_LEADING_NEWLINES = /^\n+/;
var RE_TRAILING_SPACES = / +$/;
var RE_BLANK_LINES = / *\r?\n/g;
var RE_INDENT = /( *)$/;
var TOKEN_BRACE_OPEN = /{\s*/y;
var TOKEN_BRACE_CLOSE = /\s*}/y;
var TOKEN_BRACKET_OPEN = /\[\s*/y;
var TOKEN_BRACKET_CLOSE = /\s*] */y;
var TOKEN_PAREN_OPEN = /\s*\(\s*/y;
var TOKEN_ARROW = /\s*->\s*/y;
var TOKEN_COLON = /\s*:\s*/y;
var TOKEN_COMMA = /\s*,?\s*/y;
var TOKEN_BLANK = /\s+/y;
var FluentResource = class {
  constructor(source) {
    this.body = [];
    RE_MESSAGE_START.lastIndex = 0;
    let cursor = 0;
    while (true) {
      let next = RE_MESSAGE_START.exec(source);
      if (next === null) {
        break;
      }
      cursor = RE_MESSAGE_START.lastIndex;
      try {
        this.body.push(parseMessage(next[1]));
      } catch (err) {
        if (err instanceof SyntaxError) {
          continue;
        }
        throw err;
      }
    }
    function test(re) {
      re.lastIndex = cursor;
      return re.test(source);
    }
    function consumeChar(char, errorClass) {
      if (source[cursor] === char) {
        cursor++;
        return true;
      }
      if (errorClass) {
        throw new errorClass(`Expected ${char}`);
      }
      return false;
    }
    function consumeToken(re, errorClass) {
      if (test(re)) {
        cursor = re.lastIndex;
        return true;
      }
      if (errorClass) {
        throw new errorClass(`Expected ${re.toString()}`);
      }
      return false;
    }
    function match2(re) {
      re.lastIndex = cursor;
      let result = re.exec(source);
      if (result === null) {
        throw new SyntaxError(`Expected ${re.toString()}`);
      }
      cursor = re.lastIndex;
      return result;
    }
    function match1(re) {
      return match2(re)[1];
    }
    function parseMessage(id) {
      let value = parsePattern();
      let attributes = parseAttributes();
      if (value === null && Object.keys(attributes).length === 0) {
        throw new SyntaxError("Expected message value or attributes");
      }
      return {
        id,
        value,
        attributes
      };
    }
    function parseAttributes() {
      let attrs = /* @__PURE__ */ Object.create(null);
      while (test(RE_ATTRIBUTE_START)) {
        let name = match1(RE_ATTRIBUTE_START);
        let value = parsePattern();
        if (value === null) {
          throw new SyntaxError("Expected attribute value");
        }
        attrs[name] = value;
      }
      return attrs;
    }
    function parsePattern() {
      let first;
      if (test(RE_TEXT_RUN)) {
        first = match1(RE_TEXT_RUN);
      }
      if (source[cursor] === "{" || source[cursor] === "}") {
        return parsePatternElements(first ? [first] : [], Infinity);
      }
      let indent = parseIndent();
      if (indent) {
        if (first) {
          return parsePatternElements([first, indent], indent.length);
        }
        indent.value = trim(indent.value, RE_LEADING_NEWLINES);
        return parsePatternElements([indent], indent.length);
      }
      if (first) {
        return trim(first, RE_TRAILING_SPACES);
      }
      return null;
    }
    function parsePatternElements(elements = [], commonIndent) {
      while (true) {
        if (test(RE_TEXT_RUN)) {
          elements.push(match1(RE_TEXT_RUN));
          continue;
        }
        if (source[cursor] === "{") {
          elements.push(parsePlaceable());
          continue;
        }
        if (source[cursor] === "}") {
          throw new SyntaxError("Unbalanced closing brace");
        }
        let indent = parseIndent();
        if (indent) {
          elements.push(indent);
          commonIndent = Math.min(commonIndent, indent.length);
          continue;
        }
        break;
      }
      let lastIndex = elements.length - 1;
      let lastElement = elements[lastIndex];
      if (typeof lastElement === "string") {
        elements[lastIndex] = trim(lastElement, RE_TRAILING_SPACES);
      }
      let baked = [];
      for (let element of elements) {
        if (element instanceof Indent) {
          element = element.value.slice(0, element.value.length - commonIndent);
        }
        if (element) {
          baked.push(element);
        }
      }
      return baked;
    }
    function parsePlaceable() {
      consumeToken(TOKEN_BRACE_OPEN, SyntaxError);
      let selector = parseInlineExpression();
      if (consumeToken(TOKEN_BRACE_CLOSE)) {
        return selector;
      }
      if (consumeToken(TOKEN_ARROW)) {
        let variants = parseVariants();
        consumeToken(TOKEN_BRACE_CLOSE, SyntaxError);
        return {
          type: "select",
          selector,
          ...variants
        };
      }
      throw new SyntaxError("Unclosed placeable");
    }
    function parseInlineExpression() {
      if (source[cursor] === "{") {
        return parsePlaceable();
      }
      if (test(RE_REFERENCE)) {
        let [, sigil, name, attr = null] = match2(RE_REFERENCE);
        if (sigil === "$") {
          return {
            type: "var",
            name
          };
        }
        if (consumeToken(TOKEN_PAREN_OPEN)) {
          let args = parseArguments();
          if (sigil === "-") {
            return {
              type: "term",
              name,
              attr,
              args
            };
          }
          if (RE_FUNCTION_NAME.test(name)) {
            return {
              type: "func",
              name,
              args
            };
          }
          throw new SyntaxError("Function names must be all upper-case");
        }
        if (sigil === "-") {
          return {
            type: "term",
            name,
            attr,
            args: []
          };
        }
        return {
          type: "mesg",
          name,
          attr
        };
      }
      return parseLiteral();
    }
    function parseArguments() {
      let args = [];
      while (true) {
        switch (source[cursor]) {
          case ")":
            cursor++;
            return args;
          case void 0:
            throw new SyntaxError("Unclosed argument list");
        }
        args.push(parseArgument());
        consumeToken(TOKEN_COMMA);
      }
    }
    function parseArgument() {
      let expr = parseInlineExpression();
      if (expr.type !== "mesg") {
        return expr;
      }
      if (consumeToken(TOKEN_COLON)) {
        return {
          type: "narg",
          name: expr.name,
          value: parseLiteral()
        };
      }
      return expr;
    }
    function parseVariants() {
      let variants = [];
      let count = 0;
      let star;
      while (test(RE_VARIANT_START)) {
        if (consumeChar("*")) {
          star = count;
        }
        let key = parseVariantKey();
        let value = parsePattern();
        if (value === null) {
          throw new SyntaxError("Expected variant value");
        }
        variants[count++] = {
          key,
          value
        };
      }
      if (count === 0) {
        return null;
      }
      if (star === void 0) {
        throw new SyntaxError("Expected default variant");
      }
      return {
        variants,
        star
      };
    }
    function parseVariantKey() {
      consumeToken(TOKEN_BRACKET_OPEN, SyntaxError);
      let key;
      if (test(RE_NUMBER_LITERAL)) {
        key = parseNumberLiteral();
      } else {
        key = {
          type: "str",
          value: match1(RE_IDENTIFIER)
        };
      }
      consumeToken(TOKEN_BRACKET_CLOSE, SyntaxError);
      return key;
    }
    function parseLiteral() {
      if (test(RE_NUMBER_LITERAL)) {
        return parseNumberLiteral();
      }
      if (source[cursor] === '"') {
        return parseStringLiteral();
      }
      throw new SyntaxError("Invalid expression");
    }
    function parseNumberLiteral() {
      let [, value, fraction = ""] = match2(RE_NUMBER_LITERAL);
      let precision = fraction.length;
      return {
        type: "num",
        value: parseFloat(value),
        precision
      };
    }
    function parseStringLiteral() {
      consumeChar('"', SyntaxError);
      let value = "";
      while (true) {
        value += match1(RE_STRING_RUN);
        if (source[cursor] === "\\") {
          value += parseEscapeSequence();
          continue;
        }
        if (consumeChar('"')) {
          return {
            type: "str",
            value
          };
        }
        throw new SyntaxError("Unclosed string literal");
      }
    }
    function parseEscapeSequence() {
      if (test(RE_STRING_ESCAPE)) {
        return match1(RE_STRING_ESCAPE);
      }
      if (test(RE_UNICODE_ESCAPE)) {
        let [, codepoint4, codepoint6] = match2(RE_UNICODE_ESCAPE);
        let codepoint = parseInt(codepoint4 || codepoint6, 16);
        return codepoint <= 55295 || 57344 <= codepoint ? String.fromCodePoint(codepoint) : "\uFFFD";
      }
      throw new SyntaxError("Unknown escape sequence");
    }
    function parseIndent() {
      let start = cursor;
      consumeToken(TOKEN_BLANK);
      switch (source[cursor]) {
        case ".":
        case "[":
        case "*":
        case "}":
        case void 0:
          return false;
        case "{":
          return makeIndent(source.slice(start, cursor));
      }
      if (source[cursor - 1] === " ") {
        return makeIndent(source.slice(start, cursor));
      }
      return false;
    }
    function trim(text, re) {
      return text.replace(re, "");
    }
    function makeIndent(blank) {
      let value = blank.replace(RE_BLANK_LINES, "\n");
      let length = RE_INDENT.exec(blank)[1].length;
      return new Indent(value, length);
    }
  }
};
var Indent = class {
  constructor(value, length) {
    this.value = value;
    this.length = length;
  }
};
var reOverlay = /<|&#?\w+;/;
var TEXT_LEVEL_ELEMENTS = {
  "http://www.w3.org/1999/xhtml": ["em", "strong", "small", "s", "cite", "q", "dfn", "abbr", "data", "time", "code", "var", "samp", "kbd", "sub", "sup", "i", "b", "u", "mark", "bdi", "bdo", "span", "br", "wbr"]
};
var LOCALIZABLE_ATTRIBUTES = {
  "http://www.w3.org/1999/xhtml": {
    global: ["title", "aria-label", "aria-valuetext"],
    a: ["download"],
    area: ["download", "alt"],
    input: ["alt", "placeholder"],
    menuitem: ["label"],
    menu: ["label"],
    optgroup: ["label"],
    option: ["label"],
    track: ["label"],
    img: ["alt"],
    textarea: ["placeholder"],
    th: ["abbr"]
  },
  "http://www.mozilla.org/keymaster/gatekeeper/there.is.only.xul": {
    global: ["accesskey", "aria-label", "aria-valuetext", "label", "title", "tooltiptext"],
    description: ["value"],
    key: ["key", "keycode"],
    label: ["value"],
    textbox: ["placeholder", "value"]
  }
};
function translateElement(element, translation) {
  const {
    value
  } = translation;
  if (typeof value === "string") {
    if (element.localName === "title" && element.namespaceURI === "http://www.w3.org/1999/xhtml") {
      element.textContent = value;
    } else if (!reOverlay.test(value)) {
      element.textContent = value;
    } else {
      const templateElement = element.ownerDocument.createElementNS("http://www.w3.org/1999/xhtml", "template");
      templateElement.innerHTML = value;
      overlayChildNodes(templateElement.content, element);
    }
  }
  overlayAttributes(translation, element);
}
function overlayChildNodes(fromFragment, toElement) {
  for (const childNode of fromFragment.childNodes) {
    if (childNode.nodeType === childNode.TEXT_NODE) {
      continue;
    }
    if (childNode.hasAttribute("data-l10n-name")) {
      const sanitized = getNodeForNamedElement(toElement, childNode);
      fromFragment.replaceChild(sanitized, childNode);
      continue;
    }
    if (isElementAllowed(childNode)) {
      const sanitized = createSanitizedElement(childNode);
      fromFragment.replaceChild(sanitized, childNode);
      continue;
    }
    console.warn(`An element of forbidden type "${childNode.localName}" was found in the translation. Only safe text-level elements and elements with data-l10n-name are allowed.`);
    fromFragment.replaceChild(createTextNodeFromTextContent(childNode), childNode);
  }
  toElement.textContent = "";
  toElement.appendChild(fromFragment);
}
function hasAttribute(attributes, name) {
  if (!attributes) {
    return false;
  }
  for (let attr of attributes) {
    if (attr.name === name) {
      return true;
    }
  }
  return false;
}
function overlayAttributes(fromElement, toElement) {
  const explicitlyAllowed = toElement.hasAttribute("data-l10n-attrs") ? toElement.getAttribute("data-l10n-attrs").split(",").map((i) => i.trim()) : null;
  for (const attr of Array.from(toElement.attributes)) {
    if (isAttrNameLocalizable(attr.name, toElement, explicitlyAllowed) && !hasAttribute(fromElement.attributes, attr.name)) {
      toElement.removeAttribute(attr.name);
    }
  }
  if (!fromElement.attributes) {
    return;
  }
  for (const attr of Array.from(fromElement.attributes)) {
    if (isAttrNameLocalizable(attr.name, toElement, explicitlyAllowed) && toElement.getAttribute(attr.name) !== attr.value) {
      toElement.setAttribute(attr.name, attr.value);
    }
  }
}
function getNodeForNamedElement(sourceElement, translatedChild) {
  const childName = translatedChild.getAttribute("data-l10n-name");
  const sourceChild = sourceElement.querySelector(`[data-l10n-name="${childName}"]`);
  if (!sourceChild) {
    console.warn(`An element named "${childName}" wasn't found in the source.`);
    return createTextNodeFromTextContent(translatedChild);
  }
  if (sourceChild.localName !== translatedChild.localName) {
    console.warn(`An element named "${childName}" was found in the translation but its type ${translatedChild.localName} didn't match the element found in the source (${sourceChild.localName}).`);
    return createTextNodeFromTextContent(translatedChild);
  }
  sourceElement.removeChild(sourceChild);
  const clone = sourceChild.cloneNode(false);
  return shallowPopulateUsing(translatedChild, clone);
}
function createSanitizedElement(element) {
  const clone = element.ownerDocument.createElement(element.localName);
  return shallowPopulateUsing(element, clone);
}
function createTextNodeFromTextContent(element) {
  return element.ownerDocument.createTextNode(element.textContent);
}
function isElementAllowed(element) {
  const allowed = TEXT_LEVEL_ELEMENTS[element.namespaceURI];
  return allowed && allowed.includes(element.localName);
}
function isAttrNameLocalizable(name, element, explicitlyAllowed = null) {
  if (explicitlyAllowed && explicitlyAllowed.includes(name)) {
    return true;
  }
  const allowed = LOCALIZABLE_ATTRIBUTES[element.namespaceURI];
  if (!allowed) {
    return false;
  }
  const attrName = name.toLowerCase();
  const elemName = element.localName;
  if (allowed.global.includes(attrName)) {
    return true;
  }
  if (!allowed[elemName]) {
    return false;
  }
  if (allowed[elemName].includes(attrName)) {
    return true;
  }
  if (element.namespaceURI === "http://www.w3.org/1999/xhtml" && elemName === "input" && attrName === "value") {
    const type = element.type.toLowerCase();
    if (type === "submit" || type === "button" || type === "reset") {
      return true;
    }
  }
  return false;
}
function shallowPopulateUsing(fromElement, toElement) {
  toElement.textContent = fromElement.textContent;
  overlayAttributes(fromElement, toElement);
  return toElement;
}
var CachedIterable = class extends Array {
  static from(iterable) {
    if (iterable instanceof this) {
      return iterable;
    }
    return new this(iterable);
  }
};
var CachedAsyncIterable = class extends CachedIterable {
  constructor(iterable) {
    super();
    if (Symbol.asyncIterator in Object(iterable)) {
      this.iterator = iterable[Symbol.asyncIterator]();
    } else if (Symbol.iterator in Object(iterable)) {
      this.iterator = iterable[Symbol.iterator]();
    } else {
      throw new TypeError("Argument must implement the iteration protocol.");
    }
  }
  [Symbol.asyncIterator]() {
    const cached = this;
    let cur = 0;
    return {
      async next() {
        if (cached.length <= cur) {
          cached.push(cached.iterator.next());
        }
        return cached[cur++];
      }
    };
  }
  async touchNext(count = 1) {
    let idx = 0;
    while (idx++ < count) {
      const last = this[this.length - 1];
      if (last && (await last).done) {
        break;
      }
      this.push(this.iterator.next());
    }
    return this[this.length - 1];
  }
};
var Localization = class {
  constructor(resourceIds = [], generateBundles) {
    this.resourceIds = resourceIds;
    this.generateBundles = generateBundles;
    this.onChange(true);
  }
  addResourceIds(resourceIds, eager = false) {
    this.resourceIds.push(...resourceIds);
    this.onChange(eager);
    return this.resourceIds.length;
  }
  removeResourceIds(resourceIds) {
    this.resourceIds = this.resourceIds.filter((r) => !resourceIds.includes(r));
    this.onChange();
    return this.resourceIds.length;
  }
  async formatWithFallback(keys, method) {
    const translations = [];
    let hasAtLeastOneBundle = false;
    for await (const bundle of this.bundles) {
      hasAtLeastOneBundle = true;
      const missingIds = keysFromBundle(method, bundle, keys, translations);
      if (missingIds.size === 0) {
        break;
      }
      if (typeof console !== "undefined") {
        const locale = bundle.locales[0];
        const ids = Array.from(missingIds).join(", ");
        console.warn(`[fluent] Missing translations in ${locale}: ${ids}`);
      }
    }
    if (!hasAtLeastOneBundle && typeof console !== "undefined") {
      console.warn(`[fluent] Request for keys failed because no resource bundles got generated.
  keys: ${JSON.stringify(keys)}.
  resourceIds: ${JSON.stringify(this.resourceIds)}.`);
    }
    return translations;
  }
  formatMessages(keys) {
    return this.formatWithFallback(keys, messageFromBundle);
  }
  formatValues(keys) {
    return this.formatWithFallback(keys, valueFromBundle);
  }
  async formatValue(id, args) {
    const [val] = await this.formatValues([{
      id,
      args
    }]);
    return val;
  }
  handleEvent() {
    this.onChange();
  }
  onChange(eager = false) {
    this.bundles = CachedAsyncIterable.from(this.generateBundles(this.resourceIds));
    if (eager) {
      this.bundles.touchNext(2);
    }
  }
};
function valueFromBundle(bundle, errors, message, args) {
  if (message.value) {
    return bundle.formatPattern(message.value, args, errors);
  }
  return null;
}
function messageFromBundle(bundle, errors, message, args) {
  const formatted = {
    value: null,
    attributes: null
  };
  if (message.value) {
    formatted.value = bundle.formatPattern(message.value, args, errors);
  }
  let attrNames = Object.keys(message.attributes);
  if (attrNames.length > 0) {
    formatted.attributes = new Array(attrNames.length);
    for (let [i, name] of attrNames.entries()) {
      let value = bundle.formatPattern(message.attributes[name], args, errors);
      formatted.attributes[i] = {
        name,
        value
      };
    }
  }
  return formatted;
}
function keysFromBundle(method, bundle, keys, translations) {
  const messageErrors = [];
  const missingIds = /* @__PURE__ */ new Set();
  keys.forEach(({
    id,
    args
  }, i) => {
    if (translations[i] !== void 0) {
      return;
    }
    let message = bundle.getMessage(id);
    if (message) {
      messageErrors.length = 0;
      translations[i] = method(bundle, messageErrors, message, args);
      if (messageErrors.length > 0 && typeof console !== "undefined") {
        const locale = bundle.locales[0];
        const errors = messageErrors.join(", ");
        console.warn(`[fluent][resolver] errors in ${locale}/${id}: ${errors}.`);
      }
    } else {
      missingIds.add(id);
    }
  });
  return missingIds;
}
var L10NID_ATTR_NAME = "data-l10n-id";
var L10NARGS_ATTR_NAME = "data-l10n-args";
var L10N_ELEMENT_QUERY = `[${L10NID_ATTR_NAME}]`;
var DOMLocalization = class extends Localization {
  constructor(resourceIds, generateBundles) {
    super(resourceIds, generateBundles);
    this.roots = /* @__PURE__ */ new Set();
    this.pendingrAF = null;
    this.pendingElements = /* @__PURE__ */ new Set();
    this.windowElement = null;
    this.mutationObserver = null;
    this.observerConfig = {
      attributes: true,
      characterData: false,
      childList: true,
      subtree: true,
      attributeFilter: [L10NID_ATTR_NAME, L10NARGS_ATTR_NAME]
    };
  }
  onChange(eager = false) {
    super.onChange(eager);
    if (this.roots) {
      this.translateRoots();
    }
  }
  setAttributes(element, id, args) {
    element.setAttribute(L10NID_ATTR_NAME, id);
    if (args) {
      element.setAttribute(L10NARGS_ATTR_NAME, JSON.stringify(args));
    } else {
      element.removeAttribute(L10NARGS_ATTR_NAME);
    }
    return element;
  }
  getAttributes(element) {
    return {
      id: element.getAttribute(L10NID_ATTR_NAME),
      args: JSON.parse(element.getAttribute(L10NARGS_ATTR_NAME) || null)
    };
  }
  connectRoot(newRoot) {
    for (const root of this.roots) {
      if (root === newRoot || root.contains(newRoot) || newRoot.contains(root)) {
        throw new Error("Cannot add a root that overlaps with existing root.");
      }
    }
    if (this.windowElement) {
      if (this.windowElement !== newRoot.ownerDocument.defaultView) {
        throw new Error(`Cannot connect a root:
          DOMLocalization already has a root from a different window.`);
      }
    } else {
      this.windowElement = newRoot.ownerDocument.defaultView;
      this.mutationObserver = new this.windowElement.MutationObserver((mutations) => this.translateMutations(mutations));
    }
    this.roots.add(newRoot);
    this.mutationObserver.observe(newRoot, this.observerConfig);
  }
  disconnectRoot(root) {
    this.roots.delete(root);
    this.pauseObserving();
    if (this.roots.size === 0) {
      this.mutationObserver = null;
      if (this.windowElement && this.pendingrAF) {
        this.windowElement.cancelAnimationFrame(this.pendingrAF);
      }
      this.windowElement = null;
      this.pendingrAF = null;
      this.pendingElements.clear();
      return true;
    }
    this.resumeObserving();
    return false;
  }
  translateRoots() {
    const roots = Array.from(this.roots);
    return Promise.all(roots.map((root) => this.translateFragment(root)));
  }
  pauseObserving() {
    if (!this.mutationObserver) {
      return;
    }
    this.translateMutations(this.mutationObserver.takeRecords());
    this.mutationObserver.disconnect();
  }
  resumeObserving() {
    if (!this.mutationObserver) {
      return;
    }
    for (const root of this.roots) {
      this.mutationObserver.observe(root, this.observerConfig);
    }
  }
  translateMutations(mutations) {
    for (const mutation of mutations) {
      switch (mutation.type) {
        case "attributes":
          if (mutation.target.hasAttribute("data-l10n-id")) {
            this.pendingElements.add(mutation.target);
          }
          break;
        case "childList":
          for (const addedNode of mutation.addedNodes) {
            if (addedNode.nodeType === addedNode.ELEMENT_NODE) {
              if (addedNode.childElementCount) {
                for (const element of this.getTranslatables(addedNode)) {
                  this.pendingElements.add(element);
                }
              } else if (addedNode.hasAttribute(L10NID_ATTR_NAME)) {
                this.pendingElements.add(addedNode);
              }
            }
          }
          break;
      }
    }
    if (this.pendingElements.size > 0) {
      if (this.pendingrAF === null) {
        this.pendingrAF = this.windowElement.requestAnimationFrame(() => {
          this.translateElements(Array.from(this.pendingElements));
          this.pendingElements.clear();
          this.pendingrAF = null;
        });
      }
    }
  }
  translateFragment(frag) {
    return this.translateElements(this.getTranslatables(frag));
  }
  async translateElements(elements) {
    if (!elements.length) {
      return void 0;
    }
    const keys = elements.map(this.getKeysForElement);
    const translations = await this.formatMessages(keys);
    return this.applyTranslations(elements, translations);
  }
  applyTranslations(elements, translations) {
    this.pauseObserving();
    for (let i = 0; i < elements.length; i++) {
      if (translations[i] !== void 0) {
        translateElement(elements[i], translations[i]);
      }
    }
    this.resumeObserving();
  }
  getTranslatables(element) {
    const nodes = Array.from(element.querySelectorAll(L10N_ELEMENT_QUERY));
    if (typeof element.hasAttribute === "function" && element.hasAttribute(L10NID_ATTR_NAME)) {
      nodes.push(element);
    }
    return nodes;
  }
  getKeysForElement(element) {
    return {
      id: element.getAttribute(L10NID_ATTR_NAME),
      args: JSON.parse(element.getAttribute(L10NARGS_ATTR_NAME) || null)
    };
  }
};
var L10n = class _L10n {
  #dir;
  #elements = /* @__PURE__ */ new Set();
  #lang;
  #l10n;
  constructor({
    lang,
    isRTL
  }, l10n = null) {
    this.#lang = _L10n.#fixupLangCode(lang);
    this.#l10n = l10n;
    this.#dir = isRTL ?? _L10n.#isRTL(this.#lang) ? "rtl" : "ltr";
  }
  _setL10n(l10n) {
    this.#l10n = l10n;
  }
  getLanguage() {
    return this.#lang;
  }
  getDirection() {
    return this.#dir;
  }
  async get(ids, args = null, fallback) {
    if (Array.isArray(ids)) {
      ids = ids.map((id) => ({
        id
      }));
      const messages2 = await this.#l10n.formatMessages(ids);
      return messages2.map((message) => message.value);
    }
    const messages = await this.#l10n.formatMessages([{
      id: ids,
      args
    }]);
    return messages?.[0].value || fallback;
  }
  async translate(element) {
    this.#elements.add(element);
    try {
      this.#l10n.connectRoot(element);
      await this.#l10n.translateRoots();
    } catch {
    }
  }
  async destroy() {
    for (const element of this.#elements) {
      this.#l10n.disconnectRoot(element);
    }
    this.#elements.clear();
    this.#l10n.pauseObserving();
  }
  pause() {
    this.#l10n.pauseObserving();
  }
  resume() {
    this.#l10n.resumeObserving();
  }
  static #fixupLangCode(langCode) {
    langCode = langCode?.toLowerCase() || "en-us";
    const PARTIAL_LANG_CODES = {
      en: "en-us",
      es: "es-es",
      fy: "fy-nl",
      ga: "ga-ie",
      gu: "gu-in",
      hi: "hi-in",
      hy: "hy-am",
      nb: "nb-no",
      ne: "ne-np",
      nn: "nn-no",
      pa: "pa-in",
      pt: "pt-pt",
      sv: "sv-se",
      zh: "zh-cn"
    };
    return PARTIAL_LANG_CODES[langCode] || langCode;
  }
  static #isRTL(lang) {
    const shortCode = lang.split("-", 1)[0];
    return ["ar", "he", "fa", "ps", "ur"].includes(shortCode);
  }
};
function createBundle(lang, text) {
  const resource = new FluentResource(text);
  const bundle = new FluentBundle(lang);
  const errors = bundle.addResource(resource);
  if (errors.length) {
    console.error("L10n errors", errors);
  }
  return bundle;
}
var genericl10n_GenericL10n = class _genericl10n_GenericL10n extends L10n {
  constructor(lang) {
    super({
      lang
    });
    const generateBundles = !lang ? _genericl10n_GenericL10n.#generateBundlesFallback.bind(_genericl10n_GenericL10n, this.getLanguage()) : _genericl10n_GenericL10n.#generateBundles.bind(_genericl10n_GenericL10n, "en-us", this.getLanguage());
    this._setL10n(new DOMLocalization([], generateBundles));
  }
  static async *#generateBundles(defaultLang, baseLang) {
    const {
      baseURL,
      paths
    } = await this.#getPaths();
    const langs = [baseLang];
    if (defaultLang !== baseLang) {
      const shortLang = baseLang.split("-", 1)[0];
      if (shortLang !== baseLang) {
        langs.push(shortLang);
      }
      langs.push(defaultLang);
    }
    for (const lang of langs) {
      const bundle = await this.#createBundle(lang, baseURL, paths);
      if (bundle) {
        yield bundle;
      } else if (lang === "en-us") {
        yield this.#createBundleFallback(lang);
      }
    }
  }
  static async #createBundle(lang, baseURL, paths) {
    const path = paths[lang];
    if (!path) {
      return null;
    }
    const url = new URL(path, baseURL);
    const text = await fetchData2(url, "text");
    return createBundle(lang, text);
  }
  static async #getPaths() {
    try {
      const {
        href
      } = document.querySelector(`link[type="application/l10n"]`);
      const paths = await fetchData2(href, "json");
      return {
        baseURL: href.replace(/[^/]*$/, "") || "./",
        paths
      };
    } catch {
    }
    return {
      baseURL: "./",
      paths: /* @__PURE__ */ Object.create(null)
    };
  }
  static async *#generateBundlesFallback(lang) {
    yield this.#createBundleFallback(lang);
  }
  static async #createBundleFallback(lang) {
    const text = "pdfjs-previous-button =\n    .title = Previous Page\npdfjs-previous-button-label = Previous\npdfjs-next-button =\n    .title = Next Page\npdfjs-next-button-label = Next\npdfjs-page-input =\n    .title = Page\npdfjs-of-pages = of { $pagesCount }\npdfjs-page-of-pages = ({ $pageNumber } of { $pagesCount })\npdfjs-zoom-out-button =\n    .title = Zoom Out\npdfjs-zoom-out-button-label = Zoom Out\npdfjs-zoom-in-button =\n    .title = Zoom In\npdfjs-zoom-in-button-label = Zoom In\npdfjs-zoom-select =\n    .title = Zoom\npdfjs-presentation-mode-button =\n    .title = Switch to Presentation Mode\npdfjs-presentation-mode-button-label = Presentation Mode\npdfjs-open-file-button =\n    .title = Open File\npdfjs-open-file-button-label = Open\npdfjs-print-button =\n    .title = Print\npdfjs-print-button-label = Print\npdfjs-save-button =\n    .title = Save\npdfjs-save-button-label = Save\npdfjs-download-button =\n    .title = Download\npdfjs-download-button-label = Download\npdfjs-bookmark-button =\n    .title = Current Page (View URL from Current Page)\npdfjs-bookmark-button-label = Current Page\npdfjs-tools-button =\n    .title = Tools\npdfjs-tools-button-label = Tools\npdfjs-first-page-button =\n    .title = Go to First Page\npdfjs-first-page-button-label = Go to First Page\npdfjs-last-page-button =\n    .title = Go to Last Page\npdfjs-last-page-button-label = Go to Last Page\npdfjs-page-rotate-cw-button =\n    .title = Rotate Clockwise\npdfjs-page-rotate-cw-button-label = Rotate Clockwise\npdfjs-page-rotate-ccw-button =\n    .title = Rotate Counterclockwise\npdfjs-page-rotate-ccw-button-label = Rotate Counterclockwise\npdfjs-cursor-text-select-tool-button =\n    .title = Enable Text Selection Tool\npdfjs-cursor-text-select-tool-button-label = Text Selection Tool\npdfjs-cursor-hand-tool-button =\n    .title = Enable Hand Tool\npdfjs-cursor-hand-tool-button-label = Hand Tool\npdfjs-scroll-page-button =\n    .title = Use Page Scrolling\npdfjs-scroll-page-button-label = Page Scrolling\npdfjs-scroll-vertical-button =\n    .title = Use Vertical Scrolling\npdfjs-scroll-vertical-button-label = Vertical Scrolling\npdfjs-scroll-horizontal-button =\n    .title = Use Horizontal Scrolling\npdfjs-scroll-horizontal-button-label = Horizontal Scrolling\npdfjs-scroll-wrapped-button =\n    .title = Use Wrapped Scrolling\npdfjs-scroll-wrapped-button-label = Wrapped Scrolling\npdfjs-spread-none-button =\n    .title = Do not join page spreads\npdfjs-spread-none-button-label = No Spreads\npdfjs-spread-odd-button =\n    .title = Join page spreads starting with odd-numbered pages\npdfjs-spread-odd-button-label = Odd Spreads\npdfjs-spread-even-button =\n    .title = Join page spreads starting with even-numbered pages\npdfjs-spread-even-button-label = Even Spreads\npdfjs-document-properties-button =\n    .title = Document Properties\u2026\npdfjs-document-properties-button-label = Document Properties\u2026\npdfjs-document-properties-file-name = File name:\npdfjs-document-properties-file-size = File size:\npdfjs-document-properties-kb = { $size_kb } KB ({ $size_b } bytes)\npdfjs-document-properties-mb = { $size_mb } MB ({ $size_b } bytes)\npdfjs-document-properties-title = Title:\npdfjs-document-properties-author = Author:\npdfjs-document-properties-subject = Subject:\npdfjs-document-properties-keywords = Keywords:\npdfjs-document-properties-creation-date = Creation Date:\npdfjs-document-properties-modification-date = Modification Date:\npdfjs-document-properties-date-string = { $date }, { $time }\npdfjs-document-properties-creator = Creator:\npdfjs-document-properties-producer = PDF Producer:\npdfjs-document-properties-version = PDF Version:\npdfjs-document-properties-page-count = Page Count:\npdfjs-document-properties-page-size = Page Size:\npdfjs-document-properties-page-size-unit-inches = in\npdfjs-document-properties-page-size-unit-millimeters = mm\npdfjs-document-properties-page-size-orientation-portrait = portrait\npdfjs-document-properties-page-size-orientation-landscape = landscape\npdfjs-document-properties-page-size-name-a-three = A3\npdfjs-document-properties-page-size-name-a-four = A4\npdfjs-document-properties-page-size-name-letter = Letter\npdfjs-document-properties-page-size-name-legal = Legal\npdfjs-document-properties-page-size-dimension-string = { $width } \xD7 { $height } { $unit } ({ $orientation })\npdfjs-document-properties-page-size-dimension-name-string = { $width } \xD7 { $height } { $unit } ({ $name }, { $orientation })\npdfjs-document-properties-linearized = Fast Web View:\npdfjs-document-properties-linearized-yes = Yes\npdfjs-document-properties-linearized-no = No\npdfjs-document-properties-close-button = Close\npdfjs-print-progress-message = Preparing document for printing\u2026\npdfjs-print-progress-percent = { $progress }%\npdfjs-print-progress-close-button = Cancel\npdfjs-printing-not-supported = Warning: Printing is not fully supported by this browser.\npdfjs-printing-not-ready = Warning: The PDF is not fully loaded for printing.\npdfjs-toggle-sidebar-button =\n    .title = Toggle Sidebar\npdfjs-toggle-sidebar-notification-button =\n    .title = Toggle Sidebar (document contains outline/attachments/layers)\npdfjs-toggle-sidebar-button-label = Toggle Sidebar\npdfjs-document-outline-button =\n    .title = Show Document Outline (double-click to expand/collapse all items)\npdfjs-document-outline-button-label = Document Outline\npdfjs-attachments-button =\n    .title = Show Attachments\npdfjs-attachments-button-label = Attachments\npdfjs-layers-button =\n    .title = Show Layers (double-click to reset all layers to the default state)\npdfjs-layers-button-label = Layers\npdfjs-thumbs-button =\n    .title = Show Thumbnails\npdfjs-thumbs-button-label = Thumbnails\npdfjs-current-outline-item-button =\n    .title = Find Current Outline Item\npdfjs-current-outline-item-button-label = Current Outline Item\npdfjs-findbar-button =\n    .title = Find in Document\npdfjs-findbar-button-label = Find\npdfjs-additional-layers = Additional Layers\npdfjs-thumb-page-title =\n    .title = Page { $page }\npdfjs-thumb-page-canvas =\n    .aria-label = Thumbnail of Page { $page }\npdfjs-find-input =\n    .title = Find\n    .placeholder = Find in document\u2026\npdfjs-find-previous-button =\n    .title = Find the previous occurrence of the phrase\npdfjs-find-previous-button-label = Previous\npdfjs-find-next-button =\n    .title = Find the next occurrence of the phrase\npdfjs-find-next-button-label = Next\npdfjs-find-highlight-checkbox = Highlight All\npdfjs-find-match-case-checkbox-label = Match Case\npdfjs-find-match-diacritics-checkbox-label = Match Diacritics\npdfjs-find-entire-word-checkbox-label = Whole Words\npdfjs-find-reached-top = Reached top of document, continued from bottom\npdfjs-find-reached-bottom = Reached end of document, continued from top\npdfjs-find-match-count =\n    { $total ->\n        [one] { $current } of { $total } match\n       *[other] { $current } of { $total } matches\n    }\npdfjs-find-match-count-limit =\n    { $limit ->\n        [one] More than { $limit } match\n       *[other] More than { $limit } matches\n    }\npdfjs-find-not-found = Phrase not found\npdfjs-page-scale-width = Page Width\npdfjs-page-scale-fit = Page Fit\npdfjs-page-scale-auto = Automatic Zoom\npdfjs-page-scale-actual = Actual Size\npdfjs-page-scale-percent = { $scale }%\npdfjs-page-landmark =\n    .aria-label = Page { $page }\npdfjs-loading-error = An error occurred while loading the PDF.\npdfjs-invalid-file-error = Invalid or corrupted PDF file.\npdfjs-missing-file-error = Missing PDF file.\npdfjs-unexpected-response-error = Unexpected server response.\npdfjs-rendering-error = An error occurred while rendering the page.\npdfjs-annotation-date-string = { $date }, { $time }\npdfjs-text-annotation-type =\n    .alt = [{ $type } Annotation]\npdfjs-password-label = Enter the password to open this PDF file.\npdfjs-password-invalid = Invalid password. Please try again.\npdfjs-password-ok-button = OK\npdfjs-password-cancel-button = Cancel\npdfjs-web-fonts-disabled = Web fonts are disabled: unable to use embedded PDF fonts.\npdfjs-editor-free-text-button =\n    .title = Text\npdfjs-editor-free-text-button-label = Text\npdfjs-editor-ink-button =\n    .title = Draw\npdfjs-editor-ink-button-label = Draw\npdfjs-editor-stamp-button =\n    .title = Add or edit images\npdfjs-editor-stamp-button-label = Add or edit images\npdfjs-editor-highlight-button =\n    .title = Highlight\npdfjs-editor-highlight-button-label = Highlight\npdfjs-highlight-floating-button1 =\n    .title = Highlight\n    .aria-label = Highlight\npdfjs-highlight-floating-button-label = Highlight\npdfjs-editor-remove-ink-button =\n    .title = Remove drawing\npdfjs-editor-remove-freetext-button =\n    .title = Remove text\npdfjs-editor-remove-stamp-button =\n    .title = Remove image\npdfjs-editor-remove-highlight-button =\n    .title = Remove highlight\npdfjs-editor-free-text-color-input = Color\npdfjs-editor-free-text-size-input = Size\npdfjs-editor-ink-color-input = Color\npdfjs-editor-ink-thickness-input = Thickness\npdfjs-editor-ink-opacity-input = Opacity\npdfjs-editor-stamp-add-image-button =\n    .title = Add image\npdfjs-editor-stamp-add-image-button-label = Add image\npdfjs-editor-free-highlight-thickness-input = Thickness\npdfjs-editor-free-highlight-thickness-title =\n    .title = Change thickness when highlighting items other than text\npdfjs-free-text =\n    .aria-label = Text Editor\npdfjs-free-text-default-content = Start typing\u2026\npdfjs-ink =\n    .aria-label = Draw Editor\npdfjs-ink-canvas =\n    .aria-label = User-created image\npdfjs-editor-alt-text-button-label = Alt text\npdfjs-editor-alt-text-edit-button-label = Edit alt text\npdfjs-editor-alt-text-dialog-label = Choose an option\npdfjs-editor-alt-text-dialog-description = Alt text (alternative text) helps when people can\u2019t see the image or when it doesn\u2019t load.\npdfjs-editor-alt-text-add-description-label = Add a description\npdfjs-editor-alt-text-add-description-description = Aim for 1-2 sentences that describe the subject, setting, or actions.\npdfjs-editor-alt-text-mark-decorative-label = Mark as decorative\npdfjs-editor-alt-text-mark-decorative-description = This is used for ornamental images, like borders or watermarks.\npdfjs-editor-alt-text-cancel-button = Cancel\npdfjs-editor-alt-text-save-button = Save\npdfjs-editor-alt-text-decorative-tooltip = Marked as decorative\npdfjs-editor-alt-text-textarea =\n    .placeholder = For example, \u201CA young man sits down at a table to eat a meal\u201D\npdfjs-editor-resizer-label-top-left = Top left corner \u2014 resize\npdfjs-editor-resizer-label-top-middle = Top middle \u2014 resize\npdfjs-editor-resizer-label-top-right = Top right corner \u2014 resize\npdfjs-editor-resizer-label-middle-right = Middle right \u2014 resize\npdfjs-editor-resizer-label-bottom-right = Bottom right corner \u2014 resize\npdfjs-editor-resizer-label-bottom-middle = Bottom middle \u2014 resize\npdfjs-editor-resizer-label-bottom-left = Bottom left corner \u2014 resize\npdfjs-editor-resizer-label-middle-left = Middle left \u2014 resize\npdfjs-editor-highlight-colorpicker-label = Highlight color\npdfjs-editor-colorpicker-button =\n    .title = Change color\npdfjs-editor-colorpicker-dropdown =\n    .aria-label = Color choices\npdfjs-editor-colorpicker-yellow =\n    .title = Yellow\npdfjs-editor-colorpicker-green =\n    .title = Green\npdfjs-editor-colorpicker-blue =\n    .title = Blue\npdfjs-editor-colorpicker-pink =\n    .title = Pink\npdfjs-editor-colorpicker-red =\n    .title = Red\npdfjs-editor-highlight-show-all-button-label = Show all\npdfjs-editor-highlight-show-all-button =\n    .title = Show all";
    return createBundle(lang, text);
  }
};
var HASH_CHANGE_TIMEOUT = 1e3;
var POSITION_UPDATED_THRESHOLD = 50;
var UPDATE_VIEWAREA_TIMEOUT = 1e3;
function getCurrentHash() {
  return document.location.hash;
}
var PDFHistory = class {
  #eventAbortController = null;
  constructor({
    linkService,
    eventBus
  }) {
    this.linkService = linkService;
    this.eventBus = eventBus;
    this._initialized = false;
    this._fingerprint = "";
    this.reset();
    this.eventBus._on("pagesinit", () => {
      this._isPagesLoaded = false;
      this.eventBus._on("pagesloaded", (evt) => {
        this._isPagesLoaded = !!evt.pagesCount;
      }, {
        once: true
      });
    });
  }
  initialize({
    fingerprint,
    resetHistory = false,
    updateUrl = false
  }) {
    if (!fingerprint || typeof fingerprint !== "string") {
      console.error('PDFHistory.initialize: The "fingerprint" must be a non-empty string.');
      return;
    }
    if (this._initialized) {
      this.reset();
    }
    const reInitialized = this._fingerprint !== "" && this._fingerprint !== fingerprint;
    this._fingerprint = fingerprint;
    this._updateUrl = updateUrl === true;
    this._initialized = true;
    this.#bindEvents();
    const state = window.history.state;
    this._popStateInProgress = false;
    this._blockHashChange = 0;
    this._currentHash = getCurrentHash();
    this._numPositionUpdates = 0;
    this._uid = this._maxUid = 0;
    this._destination = null;
    this._position = null;
    if (!this.#isValidState(state, true) || resetHistory) {
      const {
        hash,
        page,
        rotation
      } = this.#parseCurrentHash(true);
      if (!hash || reInitialized || resetHistory) {
        this.#pushOrReplaceState(null, true);
        return;
      }
      this.#pushOrReplaceState({
        hash,
        page,
        rotation
      }, true);
      return;
    }
    const destination = state.destination;
    this.#updateInternalState(destination, state.uid, true);
    if (destination.rotation !== void 0) {
      this._initialRotation = destination.rotation;
    }
    if (destination.dest) {
      this._initialBookmark = JSON.stringify(destination.dest);
      this._destination.page = null;
    } else if (destination.hash) {
      this._initialBookmark = destination.hash;
    } else if (destination.page) {
      this._initialBookmark = `page=${destination.page}`;
    }
  }
  reset() {
    if (this._initialized) {
      this.#pageHide();
      this._initialized = false;
      this.#unbindEvents();
    }
    if (this._updateViewareaTimeout) {
      clearTimeout(this._updateViewareaTimeout);
      this._updateViewareaTimeout = null;
    }
    this._initialBookmark = null;
    this._initialRotation = null;
  }
  push({
    namedDest = null,
    explicitDest,
    pageNumber
  }) {
    if (!this._initialized) {
      return;
    }
    if (namedDest && typeof namedDest !== "string") {
      console.error(`PDFHistory.push: "${namedDest}" is not a valid namedDest parameter.`);
      return;
    } else if (!Array.isArray(explicitDest)) {
      console.error(`PDFHistory.push: "${explicitDest}" is not a valid explicitDest parameter.`);
      return;
    } else if (!this.#isValidPage(pageNumber)) {
      if (pageNumber !== null || this._destination) {
        console.error(`PDFHistory.push: "${pageNumber}" is not a valid pageNumber parameter.`);
        return;
      }
    }
    const hash = namedDest || JSON.stringify(explicitDest);
    if (!hash) {
      return;
    }
    let forceReplace = false;
    if (this._destination && (isDestHashesEqual(this._destination.hash, hash) || isDestArraysEqual(this._destination.dest, explicitDest))) {
      if (this._destination.page) {
        return;
      }
      forceReplace = true;
    }
    if (this._popStateInProgress && !forceReplace) {
      return;
    }
    this.#pushOrReplaceState({
      dest: explicitDest,
      hash,
      page: pageNumber,
      rotation: this.linkService.rotation
    }, forceReplace);
    if (!this._popStateInProgress) {
      this._popStateInProgress = true;
      Promise.resolve().then(() => {
        this._popStateInProgress = false;
      });
    }
  }
  pushPage(pageNumber) {
    if (!this._initialized) {
      return;
    }
    if (!this.#isValidPage(pageNumber)) {
      console.error(`PDFHistory.pushPage: "${pageNumber}" is not a valid page number.`);
      return;
    }
    if (this._destination?.page === pageNumber) {
      return;
    }
    if (this._popStateInProgress) {
      return;
    }
    this.#pushOrReplaceState({
      dest: null,
      hash: `page=${pageNumber}`,
      page: pageNumber,
      rotation: this.linkService.rotation
    });
    if (!this._popStateInProgress) {
      this._popStateInProgress = true;
      Promise.resolve().then(() => {
        this._popStateInProgress = false;
      });
    }
  }
  pushCurrentPosition() {
    if (!this._initialized || this._popStateInProgress) {
      return;
    }
    this.#tryPushCurrentPosition();
  }
  back() {
    if (!this._initialized || this._popStateInProgress) {
      return;
    }
    const state = window.history.state;
    if (this.#isValidState(state) && state.uid > 0) {
      window.history.back();
    }
  }
  forward() {
    if (!this._initialized || this._popStateInProgress) {
      return;
    }
    const state = window.history.state;
    if (this.#isValidState(state) && state.uid < this._maxUid) {
      window.history.forward();
    }
  }
  get popStateInProgress() {
    return this._initialized && (this._popStateInProgress || this._blockHashChange > 0);
  }
  get initialBookmark() {
    return this._initialized ? this._initialBookmark : null;
  }
  get initialRotation() {
    return this._initialized ? this._initialRotation : null;
  }
  #pushOrReplaceState(destination, forceReplace = false) {
    const shouldReplace = forceReplace || !this._destination;
    const newState = {
      fingerprint: this._fingerprint,
      uid: shouldReplace ? this._uid : this._uid + 1,
      destination
    };
    this.#updateInternalState(destination, newState.uid);
    let newUrl;
    if (this._updateUrl && destination?.hash) {
      const baseUrl = document.location.href.split("#", 1)[0];
      if (!baseUrl.startsWith("file://")) {
        newUrl = `${baseUrl}#${destination.hash}`;
      }
    }
    if (shouldReplace) {
      window.history.replaceState(newState, "", newUrl);
    } else {
      window.history.pushState(newState, "", newUrl);
    }
  }
  #tryPushCurrentPosition(temporary = false) {
    if (!this._position) {
      return;
    }
    let position = this._position;
    if (temporary) {
      position = Object.assign(/* @__PURE__ */ Object.create(null), this._position);
      position.temporary = true;
    }
    if (!this._destination) {
      this.#pushOrReplaceState(position);
      return;
    }
    if (this._destination.temporary) {
      this.#pushOrReplaceState(position, true);
      return;
    }
    if (this._destination.hash === position.hash) {
      return;
    }
    if (!this._destination.page && (POSITION_UPDATED_THRESHOLD <= 0 || this._numPositionUpdates <= POSITION_UPDATED_THRESHOLD)) {
      return;
    }
    let forceReplace = false;
    if (this._destination.page >= position.first && this._destination.page <= position.page) {
      if (this._destination.dest !== void 0 || !this._destination.first) {
        return;
      }
      forceReplace = true;
    }
    this.#pushOrReplaceState(position, forceReplace);
  }
  #isValidPage(val) {
    return Number.isInteger(val) && val > 0 && val <= this.linkService.pagesCount;
  }
  #isValidState(state, checkReload = false) {
    if (!state) {
      return false;
    }
    if (state.fingerprint !== this._fingerprint) {
      if (checkReload) {
        if (typeof state.fingerprint !== "string" || state.fingerprint.length !== this._fingerprint.length) {
          return false;
        }
        const [perfEntry] = performance.getEntriesByType("navigation");
        if (perfEntry?.type !== "reload") {
          return false;
        }
      } else {
        return false;
      }
    }
    if (!Number.isInteger(state.uid) || state.uid < 0) {
      return false;
    }
    if (state.destination === null || typeof state.destination !== "object") {
      return false;
    }
    return true;
  }
  #updateInternalState(destination, uid, removeTemporary = false) {
    if (this._updateViewareaTimeout) {
      clearTimeout(this._updateViewareaTimeout);
      this._updateViewareaTimeout = null;
    }
    if (removeTemporary && destination?.temporary) {
      delete destination.temporary;
    }
    this._destination = destination;
    this._uid = uid;
    this._maxUid = Math.max(this._maxUid, uid);
    this._numPositionUpdates = 0;
  }
  #parseCurrentHash(checkNameddest = false) {
    const hash = unescape(getCurrentHash()).substring(1);
    const params = parseQueryString(hash);
    const nameddest = params.get("nameddest") || "";
    let page = params.get("page") | 0;
    if (!this.#isValidPage(page) || checkNameddest && nameddest.length > 0) {
      page = null;
    }
    return {
      hash,
      page,
      rotation: this.linkService.rotation
    };
  }
  #updateViewarea({
    location: location2
  }) {
    if (this._updateViewareaTimeout) {
      clearTimeout(this._updateViewareaTimeout);
      this._updateViewareaTimeout = null;
    }
    this._position = {
      hash: location2.pdfOpenParams.substring(1),
      page: this.linkService.page,
      first: location2.pageNumber,
      rotation: location2.rotation
    };
    if (this._popStateInProgress) {
      return;
    }
    if (POSITION_UPDATED_THRESHOLD > 0 && this._isPagesLoaded && this._destination && !this._destination.page) {
      this._numPositionUpdates++;
    }
    if (UPDATE_VIEWAREA_TIMEOUT > 0) {
      this._updateViewareaTimeout = setTimeout(() => {
        if (!this._popStateInProgress) {
          this.#tryPushCurrentPosition(true);
        }
        this._updateViewareaTimeout = null;
      }, UPDATE_VIEWAREA_TIMEOUT);
    }
  }
  #popState({
    state
  }) {
    const newHash = getCurrentHash(), hashChanged = this._currentHash !== newHash;
    this._currentHash = newHash;
    if (!state) {
      this._uid++;
      const {
        hash,
        page,
        rotation
      } = this.#parseCurrentHash();
      this.#pushOrReplaceState({
        hash,
        page,
        rotation
      }, true);
      return;
    }
    if (!this.#isValidState(state)) {
      return;
    }
    this._popStateInProgress = true;
    if (hashChanged) {
      this._blockHashChange++;
      waitOnEventOrTimeout({
        target: window,
        name: "hashchange",
        delay: HASH_CHANGE_TIMEOUT
      }).then(() => {
        this._blockHashChange--;
      });
    }
    const destination = state.destination;
    this.#updateInternalState(destination, state.uid, true);
    if (isValidRotation(destination.rotation)) {
      this.linkService.rotation = destination.rotation;
    }
    if (destination.dest) {
      this.linkService.goToDestination(destination.dest);
    } else if (destination.hash) {
      this.linkService.setHash(destination.hash);
    } else if (destination.page) {
      this.linkService.page = destination.page;
    }
    Promise.resolve().then(() => {
      this._popStateInProgress = false;
    });
  }
  #pageHide() {
    if (!this._destination || this._destination.temporary) {
      this.#tryPushCurrentPosition();
    }
  }
  #bindEvents() {
    if (this.#eventAbortController) {
      return;
    }
    this.#eventAbortController = new AbortController();
    const {
      signal
    } = this.#eventAbortController;
    this.eventBus._on("updateviewarea", this.#updateViewarea.bind(this), {
      signal
    });
    window.addEventListener("popstate", this.#popState.bind(this), {
      signal
    });
    window.addEventListener("pagehide", this.#pageHide.bind(this), {
      signal
    });
  }
  #unbindEvents() {
    this.#eventAbortController?.abort();
    this.#eventAbortController = null;
  }
};
function isDestHashesEqual(destHash, pushHash) {
  if (typeof destHash !== "string" || typeof pushHash !== "string") {
    return false;
  }
  if (destHash === pushHash) {
    return true;
  }
  const nameddest = parseQueryString(destHash).get("nameddest");
  if (nameddest === pushHash) {
    return true;
  }
  return false;
}
function isDestArraysEqual(firstDest, secondDest) {
  function isEntryEqual(first, second) {
    if (typeof first !== typeof second) {
      return false;
    }
    if (Array.isArray(first) || Array.isArray(second)) {
      return false;
    }
    if (first !== null && typeof first === "object" && second !== null) {
      if (Object.keys(first).length !== Object.keys(second).length) {
        return false;
      }
      for (const key in first) {
        if (!isEntryEqual(first[key], second[key])) {
          return false;
        }
      }
      return true;
    }
    return first === second || Number.isNaN(first) && Number.isNaN(second);
  }
  if (!(Array.isArray(firstDest) && Array.isArray(secondDest))) {
    return false;
  }
  if (firstDest.length !== secondDest.length) {
    return false;
  }
  for (let i = 0, ii = firstDest.length; i < ii; i++) {
    if (!isEntryEqual(firstDest[i], secondDest[i])) {
      return false;
    }
  }
  return true;
}
var AnnotationEditorLayerBuilder = class {
  #annotationLayer = null;
  #drawLayer = null;
  #onAppend = null;
  #textLayer = null;
  #uiManager;
  constructor(options) {
    this.pdfPage = options.pdfPage;
    this.accessibilityManager = options.accessibilityManager;
    this.l10n = options.l10n;
    this.l10n ||= new genericl10n_GenericL10n();
    this.annotationEditorLayer = null;
    this.div = null;
    this._cancelled = false;
    this.#uiManager = options.uiManager;
    this.#annotationLayer = options.annotationLayer || null;
    this.#textLayer = options.textLayer || null;
    this.#drawLayer = options.drawLayer || null;
    this.#onAppend = options.onAppend || null;
  }
  async render(viewport, intent = "display") {
    if (intent !== "display") {
      return;
    }
    if (this._cancelled) {
      return;
    }
    const clonedViewport = viewport.clone({
      dontFlip: true
    });
    if (this.div) {
      this.annotationEditorLayer.update({
        viewport: clonedViewport
      });
      this.show();
      return;
    }
    const div = this.div = document.createElement("div");
    div.className = "annotationEditorLayer";
    div.hidden = true;
    div.dir = this.#uiManager.direction;
    this.#onAppend?.(div);
    this.annotationEditorLayer = new AnnotationEditorLayer2({
      uiManager: this.#uiManager,
      div,
      accessibilityManager: this.accessibilityManager,
      pageIndex: this.pdfPage.pageNumber - 1,
      l10n: this.l10n,
      viewport: clonedViewport,
      annotationLayer: this.#annotationLayer,
      textLayer: this.#textLayer,
      drawLayer: this.#drawLayer
    });
    const parameters = {
      viewport: clonedViewport,
      div,
      annotations: null,
      intent
    };
    this.annotationEditorLayer.render(parameters);
    this.show();
  }
  cancel() {
    this._cancelled = true;
    if (!this.div) {
      return;
    }
    this.annotationEditorLayer.destroy();
  }
  hide() {
    if (!this.div) {
      return;
    }
    this.div.hidden = true;
  }
  show() {
    if (!this.div || this.annotationEditorLayer.isInvisible) {
      return;
    }
    this.div.hidden = false;
  }
};
{
  compatParams = /* @__PURE__ */ new Map();
  const userAgent = navigator.userAgent || "";
  const platform = navigator.platform || "";
  const maxTouchPoints = navigator.maxTouchPoints || 1;
  const isAndroid = /Android/.test(userAgent);
  const isIOS = /\b(iPad|iPhone|iPod)(?=;)/.test(userAgent) || platform === "MacIntel" && maxTouchPoints > 1;
  (function() {
    if (isIOS || isAndroid) {
      compatParams.set("maxCanvasPixels", 5242880);
    }
  })();
  (function() {
    if (isAndroid) {
      compatParams.set("useSystemFonts", false);
    }
  })();
}
var compatParams;
var OptionKind = {
  BROWSER: 1,
  VIEWER: 2,
  API: 4,
  WORKER: 8,
  EVENT_DISPATCH: 16,
  PREFERENCE: 128
};
var Type = {
  BOOLEAN: 1,
  NUMBER: 2,
  OBJECT: 4,
  STRING: 8,
  UNDEFINED: 16
};
var defaultOptions = {
  allowedGlobalEvents: {
    value: null,
    kind: OptionKind.BROWSER
  },
  canvasMaxAreaInBytes: {
    value: -1,
    kind: OptionKind.BROWSER + OptionKind.API
  },
  isInAutomation: {
    value: false,
    kind: OptionKind.BROWSER
  },
  localeProperties: {
    value: {
      lang: navigator.language || "en-US"
    },
    kind: OptionKind.BROWSER
  },
  nimbusDataStr: {
    value: "",
    kind: OptionKind.BROWSER
  },
  supportsCaretBrowsingMode: {
    value: false,
    kind: OptionKind.BROWSER
  },
  supportsDocumentFonts: {
    value: true,
    kind: OptionKind.BROWSER
  },
  supportsIntegratedFind: {
    value: false,
    kind: OptionKind.BROWSER
  },
  supportsMouseWheelZoomCtrlKey: {
    value: true,
    kind: OptionKind.BROWSER
  },
  supportsMouseWheelZoomMetaKey: {
    value: true,
    kind: OptionKind.BROWSER
  },
  supportsPinchToZoom: {
    value: true,
    kind: OptionKind.BROWSER
  },
  toolbarDensity: {
    value: 0,
    kind: OptionKind.BROWSER + OptionKind.EVENT_DISPATCH
  },
  altTextLearnMoreUrl: {
    value: "",
    kind: OptionKind.VIEWER + OptionKind.PREFERENCE
  },
  annotationEditorMode: {
    value: 0,
    kind: OptionKind.VIEWER + OptionKind.PREFERENCE
  },
  annotationMode: {
    value: 2,
    kind: OptionKind.VIEWER + OptionKind.PREFERENCE
  },
  cursorToolOnLoad: {
    value: 0,
    kind: OptionKind.VIEWER + OptionKind.PREFERENCE
  },
  debuggerSrc: {
    value: "./debugger.mjs",
    kind: OptionKind.VIEWER
  },
  defaultZoomDelay: {
    value: 400,
    kind: OptionKind.VIEWER + OptionKind.PREFERENCE
  },
  defaultZoomValue: {
    value: "",
    kind: OptionKind.VIEWER + OptionKind.PREFERENCE
  },
  disableHistory: {
    value: false,
    kind: OptionKind.VIEWER
  },
  disablePageLabels: {
    value: false,
    kind: OptionKind.VIEWER + OptionKind.PREFERENCE
  },
  enableAltText: {
    value: false,
    kind: OptionKind.VIEWER + OptionKind.PREFERENCE
  },
  enableGuessAltText: {
    value: true,
    kind: OptionKind.VIEWER + OptionKind.PREFERENCE
  },
  enableHighlightEditor: {
    value: false,
    kind: OptionKind.VIEWER + OptionKind.PREFERENCE
  },
  enableHighlightFloatingButton: {
    value: false,
    kind: OptionKind.VIEWER + OptionKind.PREFERENCE
  },
  enablePermissions: {
    value: false,
    kind: OptionKind.VIEWER + OptionKind.PREFERENCE
  },
  enablePrintAutoRotate: {
    value: true,
    kind: OptionKind.VIEWER + OptionKind.PREFERENCE
  },
  enableScripting: {
    value: true,
    kind: OptionKind.VIEWER + OptionKind.PREFERENCE
  },
  enableUpdatedAddImage: {
    value: false,
    kind: OptionKind.VIEWER + OptionKind.PREFERENCE
  },
  externalLinkRel: {
    value: "noopener noreferrer nofollow",
    kind: OptionKind.VIEWER
  },
  externalLinkTarget: {
    value: 0,
    kind: OptionKind.VIEWER + OptionKind.PREFERENCE
  },
  highlightEditorColors: {
    value: "yellow=#FFFF98,green=#53FFBC,blue=#80EBFF,pink=#FFCBE6,red=#FF4F5F",
    kind: OptionKind.VIEWER + OptionKind.PREFERENCE
  },
  historyUpdateUrl: {
    value: false,
    kind: OptionKind.VIEWER + OptionKind.PREFERENCE
  },
  ignoreDestinationZoom: {
    value: false,
    kind: OptionKind.VIEWER + OptionKind.PREFERENCE
  },
  imageResourcesPath: {
    value: "./images/",
    kind: OptionKind.VIEWER
  },
  maxCanvasPixels: {
    value: 2 ** 25,
    kind: OptionKind.VIEWER
  },
  forcePageColors: {
    value: false,
    kind: OptionKind.VIEWER + OptionKind.PREFERENCE
  },
  pageColorsBackground: {
    value: "Canvas",
    kind: OptionKind.VIEWER + OptionKind.PREFERENCE
  },
  pageColorsForeground: {
    value: "CanvasText",
    kind: OptionKind.VIEWER + OptionKind.PREFERENCE
  },
  pdfBugEnabled: {
    value: false,
    kind: OptionKind.VIEWER + OptionKind.PREFERENCE
  },
  printResolution: {
    value: 150,
    kind: OptionKind.VIEWER
  },
  sidebarViewOnLoad: {
    value: -1,
    kind: OptionKind.VIEWER + OptionKind.PREFERENCE
  },
  scrollModeOnLoad: {
    value: -1,
    kind: OptionKind.VIEWER + OptionKind.PREFERENCE
  },
  spreadModeOnLoad: {
    value: -1,
    kind: OptionKind.VIEWER + OptionKind.PREFERENCE
  },
  textLayerMode: {
    value: 1,
    kind: OptionKind.VIEWER + OptionKind.PREFERENCE
  },
  viewOnLoad: {
    value: 0,
    kind: OptionKind.VIEWER + OptionKind.PREFERENCE
  },
  cMapPacked: {
    value: true,
    kind: OptionKind.API
  },
  cMapUrl: {
    value: "../web/cmaps/",
    kind: OptionKind.API
  },
  disableAutoFetch: {
    value: false,
    kind: OptionKind.API + OptionKind.PREFERENCE
  },
  disableFontFace: {
    value: false,
    kind: OptionKind.API + OptionKind.PREFERENCE
  },
  disableRange: {
    value: false,
    kind: OptionKind.API + OptionKind.PREFERENCE
  },
  disableStream: {
    value: false,
    kind: OptionKind.API + OptionKind.PREFERENCE
  },
  docBaseUrl: {
    value: "",
    kind: OptionKind.API
  },
  enableHWA: {
    value: true,
    kind: OptionKind.API + OptionKind.VIEWER + OptionKind.PREFERENCE
  },
  enableXfa: {
    value: true,
    kind: OptionKind.API + OptionKind.PREFERENCE
  },
  fontExtraProperties: {
    value: false,
    kind: OptionKind.API
  },
  isEvalSupported: {
    value: true,
    kind: OptionKind.API
  },
  isOffscreenCanvasSupported: {
    value: true,
    kind: OptionKind.API
  },
  maxImageSize: {
    value: -1,
    kind: OptionKind.API
  },
  pdfBug: {
    value: false,
    kind: OptionKind.API
  },
  standardFontDataUrl: {
    value: "../web/standard_fonts/",
    kind: OptionKind.API
  },
  useSystemFonts: {
    value: void 0,
    kind: OptionKind.API,
    type: Type.BOOLEAN + Type.UNDEFINED
  },
  verbosity: {
    value: 1,
    kind: OptionKind.API
  },
  workerPort: {
    value: null,
    kind: OptionKind.WORKER
  },
  workerSrc: {
    value: "../build/pdf.worker.mjs",
    kind: OptionKind.WORKER
  }
};
{
  defaultOptions.defaultUrl = {
    value: "compressed.tracemonkey-pldi-09.pdf",
    kind: OptionKind.VIEWER
  };
  defaultOptions.sandboxBundleSrc = {
    value: "../build/pdf.sandbox.mjs",
    kind: OptionKind.VIEWER
  };
  defaultOptions.viewerCssTheme = {
    value: 0,
    kind: OptionKind.VIEWER + OptionKind.PREFERENCE
  };
}
{
  defaultOptions.disablePreferences = {
    value: false,
    kind: OptionKind.VIEWER
  };
}
var userOptions = /* @__PURE__ */ new Map();
{
  for (const [name, value] of compatParams) {
    userOptions.set(name, value);
  }
}
var AppOptions = class {
  static eventBus;
  constructor() {
    throw new Error("Cannot initialize AppOptions.");
  }
  static get(name) {
    return userOptions.has(name) ? userOptions.get(name) : defaultOptions[name]?.value;
  }
  static getAll(kind = null, defaultOnly = false) {
    const options = /* @__PURE__ */ Object.create(null);
    for (const name in defaultOptions) {
      const defaultOpt = defaultOptions[name];
      if (kind && !(kind & defaultOpt.kind)) {
        continue;
      }
      options[name] = !defaultOnly && userOptions.has(name) ? userOptions.get(name) : defaultOpt.value;
    }
    return options;
  }
  static set(name, value) {
    this.setAll({
      [name]: value
    });
  }
  static setAll(options, prefs = false) {
    let events;
    for (const name in options) {
      const defaultOpt = defaultOptions[name], userOpt = options[name];
      if (!defaultOpt || !(typeof userOpt === typeof defaultOpt.value || Type[(typeof userOpt).toUpperCase()] & defaultOpt.type)) {
        continue;
      }
      const {
        kind
      } = defaultOpt;
      if (prefs && !(kind & OptionKind.BROWSER || kind & OptionKind.PREFERENCE)) {
        continue;
      }
      if (this.eventBus && kind & OptionKind.EVENT_DISPATCH) {
        (events ||= /* @__PURE__ */ new Map()).set(name, userOpt);
      }
      userOptions.set(name, userOpt);
    }
    if (events) {
      for (const [name, value] of events) {
        this.eventBus.dispatch(name.toLowerCase(), {
          source: this,
          value
        });
      }
    }
  }
};
{
  AppOptions._checkDisablePreferences = () => {
    if (AppOptions.get("disablePreferences")) {
      return true;
    }
    for (const [name] of userOptions) {
      if (compatParams.has(name)) {
        continue;
      }
      console.warn('The Preferences may override manually set AppOptions; please use the "disablePreferences"-option to prevent that.');
      break;
    }
    return false;
  };
}
var DrawLayerBuilder = class {
  #drawLayer = null;
  constructor(options) {
    this.pageIndex = options.pageIndex;
  }
  async render(intent = "display") {
    if (intent !== "display" || this.#drawLayer || this._cancelled) {
      return;
    }
    this.#drawLayer = new DrawLayer2({
      pageIndex: this.pageIndex
    });
  }
  cancel() {
    this._cancelled = true;
    if (!this.#drawLayer) {
      return;
    }
    this.#drawLayer.destroy();
    this.#drawLayer = null;
  }
  setParent(parent) {
    this.#drawLayer?.setParent(parent);
  }
  getDrawLayer() {
    return this.#drawLayer;
  }
};
var PDF_ROLE_TO_HTML_ROLE = {
  Document: null,
  DocumentFragment: null,
  Part: "group",
  Sect: "group",
  Div: "group",
  Aside: "note",
  NonStruct: "none",
  P: null,
  H: "heading",
  Title: null,
  FENote: "note",
  Sub: "group",
  Lbl: null,
  Span: null,
  Em: null,
  Strong: null,
  Link: "link",
  Annot: "note",
  Form: "form",
  Ruby: null,
  RB: null,
  RT: null,
  RP: null,
  Warichu: null,
  WT: null,
  WP: null,
  L: "list",
  LI: "listitem",
  LBody: null,
  Table: "table",
  TR: "row",
  TH: "columnheader",
  TD: "cell",
  THead: "columnheader",
  TBody: null,
  TFoot: null,
  Caption: null,
  Figure: "figure",
  Formula: null,
  Artifact: null
};
var HEADING_PATTERN = /^H(\d+)$/;
var StructTreeLayerBuilder = class {
  #treeDom = void 0;
  get renderingDone() {
    return this.#treeDom !== void 0;
  }
  render(structTree) {
    if (this.#treeDom !== void 0) {
      return this.#treeDom;
    }
    const treeDom = this.#walk(structTree);
    treeDom?.classList.add("structTree");
    return this.#treeDom = treeDom;
  }
  hide() {
    if (this.#treeDom && !this.#treeDom.hidden) {
      this.#treeDom.hidden = true;
    }
  }
  show() {
    if (this.#treeDom?.hidden) {
      this.#treeDom.hidden = false;
    }
  }
  #setAttributes(structElement, htmlElement) {
    const {
      alt,
      id,
      lang
    } = structElement;
    if (alt !== void 0) {
      htmlElement.setAttribute("aria-label", removeNullCharacters(alt));
    }
    if (id !== void 0) {
      htmlElement.setAttribute("aria-owns", id);
    }
    if (lang !== void 0) {
      htmlElement.setAttribute("lang", removeNullCharacters(lang, true));
    }
  }
  #walk(node) {
    if (!node) {
      return null;
    }
    const element = document.createElement("span");
    if ("role" in node) {
      const {
        role
      } = node;
      const match2 = role.match(HEADING_PATTERN);
      if (match2) {
        element.setAttribute("role", "heading");
        element.setAttribute("aria-level", match2[1]);
      } else if (PDF_ROLE_TO_HTML_ROLE[role]) {
        element.setAttribute("role", PDF_ROLE_TO_HTML_ROLE[role]);
      }
    }
    this.#setAttributes(node, element);
    if (node.children) {
      if (node.children.length === 1 && "id" in node.children[0]) {
        this.#setAttributes(node.children[0], element);
      } else {
        for (const kid of node.children) {
          element.append(this.#walk(kid));
        }
      }
    }
    return element;
  }
};
var TextAccessibilityManager = class _TextAccessibilityManager {
  #enabled = false;
  #textChildren = null;
  #textNodes = /* @__PURE__ */ new Map();
  #waitingElements = /* @__PURE__ */ new Map();
  setTextMapping(textDivs) {
    this.#textChildren = textDivs;
  }
  static #compareElementPositions(e1, e2) {
    const rect1 = e1.getBoundingClientRect();
    const rect2 = e2.getBoundingClientRect();
    if (rect1.width === 0 && rect1.height === 0) {
      return 1;
    }
    if (rect2.width === 0 && rect2.height === 0) {
      return -1;
    }
    const top1 = rect1.y;
    const bot1 = rect1.y + rect1.height;
    const mid1 = rect1.y + rect1.height / 2;
    const top2 = rect2.y;
    const bot2 = rect2.y + rect2.height;
    const mid2 = rect2.y + rect2.height / 2;
    if (mid1 <= top2 && mid2 >= bot1) {
      return -1;
    }
    if (mid2 <= top1 && mid1 >= bot2) {
      return 1;
    }
    const centerX1 = rect1.x + rect1.width / 2;
    const centerX2 = rect2.x + rect2.width / 2;
    return centerX1 - centerX2;
  }
  enable() {
    if (this.#enabled) {
      throw new Error("TextAccessibilityManager is already enabled.");
    }
    if (!this.#textChildren) {
      throw new Error("Text divs and strings have not been set.");
    }
    this.#enabled = true;
    this.#textChildren = this.#textChildren.slice();
    this.#textChildren.sort(_TextAccessibilityManager.#compareElementPositions);
    if (this.#textNodes.size > 0) {
      const textChildren = this.#textChildren;
      for (const [id, nodeIndex] of this.#textNodes) {
        const element = document.getElementById(id);
        if (!element) {
          this.#textNodes.delete(id);
          continue;
        }
        this.#addIdToAriaOwns(id, textChildren[nodeIndex]);
      }
    }
    for (const [element, isRemovable] of this.#waitingElements) {
      this.addPointerInTextLayer(element, isRemovable);
    }
    this.#waitingElements.clear();
  }
  disable() {
    if (!this.#enabled) {
      return;
    }
    this.#waitingElements.clear();
    this.#textChildren = null;
    this.#enabled = false;
  }
  removePointerInTextLayer(element) {
    if (!this.#enabled) {
      this.#waitingElements.delete(element);
      return;
    }
    const children = this.#textChildren;
    if (!children || children.length === 0) {
      return;
    }
    const {
      id
    } = element;
    const nodeIndex = this.#textNodes.get(id);
    if (nodeIndex === void 0) {
      return;
    }
    const node = children[nodeIndex];
    this.#textNodes.delete(id);
    let owns = node.getAttribute("aria-owns");
    if (owns?.includes(id)) {
      owns = owns.split(" ").filter((x) => x !== id).join(" ");
      if (owns) {
        node.setAttribute("aria-owns", owns);
      } else {
        node.removeAttribute("aria-owns");
        node.setAttribute("role", "presentation");
      }
    }
  }
  #addIdToAriaOwns(id, node) {
    const owns = node.getAttribute("aria-owns");
    if (!owns?.includes(id)) {
      node.setAttribute("aria-owns", owns ? `${owns} ${id}` : id);
    }
    node.removeAttribute("role");
  }
  addPointerInTextLayer(element, isRemovable) {
    const {
      id
    } = element;
    if (!id) {
      return null;
    }
    if (!this.#enabled) {
      this.#waitingElements.set(element, isRemovable);
      return null;
    }
    if (isRemovable) {
      this.removePointerInTextLayer(element);
    }
    const children = this.#textChildren;
    if (!children || children.length === 0) {
      return null;
    }
    const index = binarySearchFirstItem(children, (node) => _TextAccessibilityManager.#compareElementPositions(element, node) < 0);
    const nodeIndex = Math.max(0, index - 1);
    const child = children[nodeIndex];
    this.#addIdToAriaOwns(id, child);
    this.#textNodes.set(id, nodeIndex);
    const parent = child.parentNode;
    return parent?.classList.contains("markedContent") ? parent.id : null;
  }
  moveElementInDOM(container, element, contentElement, isRemovable) {
    const id = this.addPointerInTextLayer(contentElement, isRemovable);
    if (!container.hasChildNodes()) {
      container.append(element);
      return id;
    }
    const children = Array.from(container.childNodes).filter((node) => node !== element);
    if (children.length === 0) {
      return id;
    }
    const elementToCompare = contentElement || element;
    const index = binarySearchFirstItem(children, (node) => _TextAccessibilityManager.#compareElementPositions(elementToCompare, node) < 0);
    if (index === 0) {
      children[0].before(element);
    } else {
      children[index - 1].after(element);
    }
    return id;
  }
};
var TextHighlighter = class {
  #eventAbortController = null;
  constructor({
    findController,
    eventBus,
    pageIndex
  }) {
    this.findController = findController;
    this.matches = [];
    this.eventBus = eventBus;
    this.pageIdx = pageIndex;
    this.textDivs = null;
    this.textContentItemsStr = null;
    this.enabled = false;
  }
  setTextMapping(divs, texts) {
    this.textDivs = divs;
    this.textContentItemsStr = texts;
  }
  enable() {
    if (!this.textDivs || !this.textContentItemsStr) {
      throw new Error("Text divs and strings have not been set.");
    }
    if (this.enabled) {
      throw new Error("TextHighlighter is already enabled.");
    }
    this.enabled = true;
    if (!this.#eventAbortController) {
      this.#eventAbortController = new AbortController();
      this.eventBus._on("updatetextlayermatches", (evt) => {
        if (evt.pageIndex === this.pageIdx || evt.pageIndex === -1) {
          this._updateMatches();
        }
      }, {
        signal: this.#eventAbortController.signal
      });
    }
    this._updateMatches();
  }
  disable() {
    if (!this.enabled) {
      return;
    }
    this.enabled = false;
    this.#eventAbortController?.abort();
    this.#eventAbortController = null;
    this._updateMatches(true);
  }
  _convertMatches(matches, matchesLength) {
    if (!matches) {
      return [];
    }
    const {
      textContentItemsStr
    } = this;
    let i = 0, iIndex = 0;
    const end = textContentItemsStr.length - 1;
    const result = [];
    for (let m = 0, mm = matches.length; m < mm; m++) {
      let matchIdx = matches[m];
      while (i !== end && matchIdx >= iIndex + textContentItemsStr[i].length) {
        iIndex += textContentItemsStr[i].length;
        i++;
      }
      if (i === textContentItemsStr.length) {
        console.error("Could not find a matching mapping");
      }
      const match2 = {
        begin: {
          divIdx: i,
          offset: matchIdx - iIndex
        }
      };
      matchIdx += matchesLength[m];
      while (i !== end && matchIdx > iIndex + textContentItemsStr[i].length) {
        iIndex += textContentItemsStr[i].length;
        i++;
      }
      match2.end = {
        divIdx: i,
        offset: matchIdx - iIndex
      };
      result.push(match2);
    }
    return result;
  }
  _renderMatches(matches) {
    if (matches.length === 0) {
      return;
    }
    const {
      findController,
      pageIdx
    } = this;
    const {
      textContentItemsStr,
      textDivs
    } = this;
    const isSelectedPage = pageIdx === findController.selected.pageIdx;
    const selectedMatchIdx = findController.selected.matchIdx;
    const highlightAll = findController.state.highlightAll;
    let prevEnd = null;
    const infinity = {
      divIdx: -1,
      offset: void 0
    };
    function beginText(begin, className) {
      const divIdx = begin.divIdx;
      textDivs[divIdx].textContent = "";
      return appendTextToDiv(divIdx, 0, begin.offset, className);
    }
    function appendTextToDiv(divIdx, fromOffset, toOffset, className) {
      let div = textDivs[divIdx];
      if (div.nodeType === Node.TEXT_NODE) {
        const span = document.createElement("span");
        div.before(span);
        span.append(div);
        textDivs[divIdx] = span;
        div = span;
      }
      const content = textContentItemsStr[divIdx].substring(fromOffset, toOffset);
      const node = document.createTextNode(content);
      if (className) {
        const span = document.createElement("span");
        span.className = `${className} appended`;
        span.append(node);
        div.append(span);
        return className.includes("selected") ? span.offsetLeft : 0;
      }
      div.append(node);
      return 0;
    }
    let i0 = selectedMatchIdx, i1 = i0 + 1;
    if (highlightAll) {
      i0 = 0;
      i1 = matches.length;
    } else if (!isSelectedPage) {
      return;
    }
    let lastDivIdx = -1;
    let lastOffset = -1;
    for (let i = i0; i < i1; i++) {
      const match2 = matches[i];
      const begin = match2.begin;
      if (begin.divIdx === lastDivIdx && begin.offset === lastOffset) {
        continue;
      }
      lastDivIdx = begin.divIdx;
      lastOffset = begin.offset;
      const end = match2.end;
      const isSelected = isSelectedPage && i === selectedMatchIdx;
      const highlightSuffix = isSelected ? " selected" : "";
      let selectedLeft = 0;
      if (!prevEnd || begin.divIdx !== prevEnd.divIdx) {
        if (prevEnd !== null) {
          appendTextToDiv(prevEnd.divIdx, prevEnd.offset, infinity.offset);
        }
        beginText(begin);
      } else {
        appendTextToDiv(prevEnd.divIdx, prevEnd.offset, begin.offset);
      }
      if (begin.divIdx === end.divIdx) {
        selectedLeft = appendTextToDiv(begin.divIdx, begin.offset, end.offset, "highlight" + highlightSuffix);
      } else {
        selectedLeft = appendTextToDiv(begin.divIdx, begin.offset, infinity.offset, "highlight begin" + highlightSuffix);
        for (let n0 = begin.divIdx + 1, n1 = end.divIdx; n0 < n1; n0++) {
          textDivs[n0].className = "highlight middle" + highlightSuffix;
        }
        beginText(end, "highlight end" + highlightSuffix);
      }
      prevEnd = end;
      if (isSelected) {
        findController.scrollMatchIntoView({
          element: textDivs[begin.divIdx],
          selectedLeft,
          pageIndex: pageIdx,
          matchIndex: selectedMatchIdx
        });
      }
    }
    if (prevEnd) {
      appendTextToDiv(prevEnd.divIdx, prevEnd.offset, infinity.offset);
    }
  }
  _updateMatches(reset = false) {
    if (!this.enabled && !reset) {
      return;
    }
    const {
      findController,
      matches,
      pageIdx
    } = this;
    const {
      textContentItemsStr,
      textDivs
    } = this;
    let clearedUntilDivIdx = -1;
    for (const match2 of matches) {
      const begin = Math.max(clearedUntilDivIdx, match2.begin.divIdx);
      for (let n = begin, end = match2.end.divIdx; n <= end; n++) {
        const div = textDivs[n];
        div.textContent = textContentItemsStr[n];
        div.className = "";
      }
      clearedUntilDivIdx = match2.end.divIdx + 1;
    }
    if (!findController?.highlightMatches || reset) {
      return;
    }
    const pageMatches = findController.pageMatches[pageIdx] || null;
    const pageMatchesLength = findController.pageMatchesLength[pageIdx] || null;
    this.matches = this._convertMatches(pageMatches, pageMatchesLength);
    this._renderMatches(this.matches);
  }
};
var TextLayerBuilder = class _TextLayerBuilder {
  #enablePermissions = false;
  #onAppend = null;
  #renderingDone = false;
  #textLayer = null;
  static #textLayers = /* @__PURE__ */ new Map();
  static #selectionChangeAbortController = null;
  constructor({
    pdfPage,
    highlighter: highlighter2 = null,
    accessibilityManager = null,
    enablePermissions = false,
    onAppend = null
  }) {
    this.pdfPage = pdfPage;
    this.highlighter = highlighter2;
    this.accessibilityManager = accessibilityManager;
    this.#enablePermissions = enablePermissions === true;
    this.#onAppend = onAppend;
    this.div = document.createElement("div");
    this.div.tabIndex = 0;
    this.div.className = "textLayer";
  }
  async render(viewport, textContentParams = null) {
    if (this.#renderingDone && this.#textLayer) {
      this.#textLayer.update({
        viewport,
        onBefore: this.hide.bind(this)
      });
      this.show();
      return;
    }
    this.cancel();
    this.#textLayer = new TextLayer2({
      textContentSource: this.pdfPage.streamTextContent(textContentParams || {
        includeMarkedContent: true,
        disableNormalization: true
      }),
      container: this.div,
      viewport
    });
    const {
      textDivs,
      textContentItemsStr
    } = this.#textLayer;
    this.highlighter?.setTextMapping(textDivs, textContentItemsStr);
    this.accessibilityManager?.setTextMapping(textDivs);
    await this.#textLayer.render();
    this.#renderingDone = true;
    const endOfContent = document.createElement("div");
    endOfContent.className = "endOfContent";
    this.div.append(endOfContent);
    this.#bindMouse(endOfContent);
    this.#onAppend?.(this.div);
    this.highlighter?.enable();
    this.accessibilityManager?.enable();
  }
  hide() {
    if (!this.div.hidden && this.#renderingDone) {
      this.highlighter?.disable();
      this.div.hidden = true;
    }
  }
  show() {
    if (this.div.hidden && this.#renderingDone) {
      this.div.hidden = false;
      this.highlighter?.enable();
    }
  }
  cancel() {
    this.#textLayer?.cancel();
    this.#textLayer = null;
    this.highlighter?.disable();
    this.accessibilityManager?.disable();
    _TextLayerBuilder.#removeGlobalSelectionListener(this.div);
  }
  #bindMouse(end) {
    const {
      div
    } = this;
    div.addEventListener("mousedown", (evt) => {
      end.classList.add("active");
    });
    div.addEventListener("copy", (event) => {
      if (!this.#enablePermissions) {
        const selection = document.getSelection();
        event.clipboardData.setData("text/plain", removeNullCharacters(normalizeUnicode2(selection.toString())));
      }
      event.preventDefault();
      event.stopPropagation();
    });
    _TextLayerBuilder.#textLayers.set(div, end);
    _TextLayerBuilder.#enableGlobalSelectionListener();
  }
  static #removeGlobalSelectionListener(textLayerDiv) {
    this.#textLayers.delete(textLayerDiv);
    if (this.#textLayers.size === 0) {
      this.#selectionChangeAbortController?.abort();
      this.#selectionChangeAbortController = null;
    }
  }
  static #enableGlobalSelectionListener() {
    if (this.#selectionChangeAbortController) {
      return;
    }
    this.#selectionChangeAbortController = new AbortController();
    const {
      signal
    } = this.#selectionChangeAbortController;
    const reset = (end, textLayer) => {
      textLayer.append(end);
      end.style.width = "";
      end.style.height = "";
      end.classList.remove("active");
    };
    document.addEventListener("pointerup", () => {
      this.#textLayers.forEach(reset);
    }, {
      signal
    });
    var isFirefox, prevRange;
    document.addEventListener("selectionchange", () => {
      const selection = document.getSelection();
      if (selection.rangeCount === 0) {
        this.#textLayers.forEach(reset);
        return;
      }
      const activeTextLayers = /* @__PURE__ */ new Set();
      for (let i = 0; i < selection.rangeCount; i++) {
        const range2 = selection.getRangeAt(i);
        for (const textLayerDiv of this.#textLayers.keys()) {
          if (!activeTextLayers.has(textLayerDiv) && range2.intersectsNode(textLayerDiv)) {
            activeTextLayers.add(textLayerDiv);
          }
        }
      }
      for (const [textLayerDiv, endDiv2] of this.#textLayers) {
        if (activeTextLayers.has(textLayerDiv)) {
          endDiv2.classList.add("active");
        } else {
          reset(endDiv2, textLayerDiv);
        }
      }
      isFirefox ??= getComputedStyle(this.#textLayers.values().next().value).getPropertyValue("-moz-user-select") === "none";
      if (isFirefox) {
        return;
      }
      const range = selection.getRangeAt(0);
      const modifyStart = prevRange && (range.compareBoundaryPoints(Range.END_TO_END, prevRange) === 0 || range.compareBoundaryPoints(Range.START_TO_END, prevRange) === 0);
      let anchor = modifyStart ? range.startContainer : range.endContainer;
      if (anchor.nodeType === Node.TEXT_NODE) {
        anchor = anchor.parentNode;
      }
      const parentTextLayer = anchor.parentElement.closest(".textLayer");
      const endDiv = this.#textLayers.get(parentTextLayer);
      if (endDiv) {
        endDiv.style.width = parentTextLayer.style.width;
        endDiv.style.height = parentTextLayer.style.height;
        anchor.parentElement.insertBefore(endDiv, modifyStart ? anchor : anchor.nextSibling);
      }
      prevRange = range.cloneRange();
    }, {
      signal
    });
  }
};
var XfaLayerBuilder = class {
  constructor({
    pdfPage,
    annotationStorage = null,
    linkService,
    xfaHtml = null
  }) {
    this.pdfPage = pdfPage;
    this.annotationStorage = annotationStorage;
    this.linkService = linkService;
    this.xfaHtml = xfaHtml;
    this.div = null;
    this._cancelled = false;
  }
  async render(viewport, intent = "display") {
    if (intent === "print") {
      const parameters2 = {
        viewport: viewport.clone({
          dontFlip: true
        }),
        div: this.div,
        xfaHtml: this.xfaHtml,
        annotationStorage: this.annotationStorage,
        linkService: this.linkService,
        intent
      };
      this.div = document.createElement("div");
      parameters2.div = this.div;
      return XfaLayer2.render(parameters2);
    }
    const xfaHtml = await this.pdfPage.getXfa();
    if (this._cancelled || !xfaHtml) {
      return {
        textDivs: []
      };
    }
    const parameters = {
      viewport: viewport.clone({
        dontFlip: true
      }),
      div: this.div,
      xfaHtml,
      annotationStorage: this.annotationStorage,
      linkService: this.linkService,
      intent
    };
    if (this.div) {
      return XfaLayer2.update(parameters);
    }
    this.div = document.createElement("div");
    parameters.div = this.div;
    return XfaLayer2.render(parameters);
  }
  cancel() {
    this._cancelled = true;
  }
  hide() {
    if (!this.div) {
      return;
    }
    this.div.hidden = true;
  }
};
var DEFAULT_LAYER_PROPERTIES = {
  annotationEditorUIManager: null,
  annotationStorage: null,
  downloadManager: null,
  enableScripting: false,
  fieldObjectsPromise: null,
  findController: null,
  hasJSActionsPromise: null,
  get linkService() {
    return new SimpleLinkService();
  }
};
var LAYERS_ORDER = /* @__PURE__ */ new Map([["canvasWrapper", 0], ["textLayer", 1], ["annotationLayer", 2], ["annotationEditorLayer", 3], ["xfaLayer", 3]]);
var PDFPageView = class {
  #annotationMode = AnnotationMode2.ENABLE_FORMS;
  #enableHWA = false;
  #hasRestrictedScaling = false;
  #isEditing = false;
  #layerProperties = null;
  #loadingId = null;
  #previousRotation = null;
  #renderError = null;
  #renderingState = RenderingStates.INITIAL;
  #textLayerMode = TextLayerMode.ENABLE;
  #useThumbnailCanvas = {
    directDrawing: true,
    initialOptionalContent: true,
    regularAnnotations: true
  };
  #viewportMap = /* @__PURE__ */ new WeakMap();
  #layers = [null, null, null, null];
  constructor(options) {
    const container = options.container;
    const defaultViewport = options.defaultViewport;
    this.id = options.id;
    this.renderingId = "page" + this.id;
    this.#layerProperties = options.layerProperties || DEFAULT_LAYER_PROPERTIES;
    this.pdfPage = null;
    this.pageLabel = null;
    this.rotation = 0;
    this.scale = options.scale || DEFAULT_SCALE;
    this.viewport = defaultViewport;
    this.pdfPageRotate = defaultViewport.rotation;
    this._optionalContentConfigPromise = options.optionalContentConfigPromise || null;
    this.#textLayerMode = options.textLayerMode ?? TextLayerMode.ENABLE;
    this.#annotationMode = options.annotationMode ?? AnnotationMode2.ENABLE_FORMS;
    this.imageResourcesPath = options.imageResourcesPath || "";
    this.maxCanvasPixels = options.maxCanvasPixels ?? AppOptions.get("maxCanvasPixels");
    this.pageColors = options.pageColors || null;
    this.#enableHWA = options.enableHWA || false;
    this.eventBus = options.eventBus;
    this.renderingQueue = options.renderingQueue;
    this.l10n = options.l10n;
    this.l10n ||= new genericl10n_GenericL10n();
    this.renderTask = null;
    this.resume = null;
    this._isStandalone = !this.renderingQueue?.hasViewer();
    this._container = container;
    this._annotationCanvasMap = null;
    this.annotationLayer = null;
    this.annotationEditorLayer = null;
    this.textLayer = null;
    this.zoomLayer = null;
    this.xfaLayer = null;
    this.structTreeLayer = null;
    this.drawLayer = null;
    const div = document.createElement("div");
    div.className = "page";
    div.setAttribute("data-page-number", this.id);
    div.setAttribute("role", "region");
    div.setAttribute("data-l10n-id", "pdfjs-page-landmark");
    div.setAttribute("data-l10n-args", JSON.stringify({
      page: this.id
    }));
    this.div = div;
    this.#setDimensions();
    container?.append(div);
    if (this._isStandalone) {
      container?.style.setProperty("--scale-factor", this.scale * PixelsPerInch2.PDF_TO_CSS_UNITS);
      const {
        optionalContentConfigPromise
      } = options;
      if (optionalContentConfigPromise) {
        optionalContentConfigPromise.then((optionalContentConfig) => {
          if (optionalContentConfigPromise !== this._optionalContentConfigPromise) {
            return;
          }
          this.#useThumbnailCanvas.initialOptionalContent = optionalContentConfig.hasInitialVisibility;
        });
      }
      if (!options.l10n) {
        this.l10n.translate(this.div);
      }
    }
  }
  #addLayer(div, name) {
    const pos = LAYERS_ORDER.get(name);
    const oldDiv = this.#layers[pos];
    this.#layers[pos] = div;
    if (oldDiv) {
      oldDiv.replaceWith(div);
      return;
    }
    for (let i = pos - 1; i >= 0; i--) {
      const layer = this.#layers[i];
      if (layer) {
        layer.after(div);
        return;
      }
    }
    this.div.prepend(div);
  }
  get renderingState() {
    return this.#renderingState;
  }
  set renderingState(state) {
    if (state === this.#renderingState) {
      return;
    }
    this.#renderingState = state;
    if (this.#loadingId) {
      clearTimeout(this.#loadingId);
      this.#loadingId = null;
    }
    switch (state) {
      case RenderingStates.PAUSED:
        this.div.classList.remove("loading");
        break;
      case RenderingStates.RUNNING:
        this.div.classList.add("loadingIcon");
        this.#loadingId = setTimeout(() => {
          this.div.classList.add("loading");
          this.#loadingId = null;
        }, 0);
        break;
      case RenderingStates.INITIAL:
      case RenderingStates.FINISHED:
        this.div.classList.remove("loadingIcon", "loading");
        break;
    }
  }
  #setDimensions() {
    const {
      viewport
    } = this;
    if (this.pdfPage) {
      if (this.#previousRotation === viewport.rotation) {
        return;
      }
      this.#previousRotation = viewport.rotation;
    }
    setLayerDimensions2(this.div, viewport, true, false);
  }
  setPdfPage(pdfPage) {
    if (this._isStandalone && (this.pageColors?.foreground === "CanvasText" || this.pageColors?.background === "Canvas")) {
      this._container?.style.setProperty("--hcm-highlight-filter", pdfPage.filterFactory.addHighlightHCMFilter("highlight", "CanvasText", "Canvas", "HighlightText", "Highlight"));
      this._container?.style.setProperty("--hcm-highlight-selected-filter", pdfPage.filterFactory.addHighlightHCMFilter("highlight_selected", "CanvasText", "Canvas", "HighlightText", "Highlight"));
    }
    this.pdfPage = pdfPage;
    this.pdfPageRotate = pdfPage.rotate;
    const totalRotation = (this.rotation + this.pdfPageRotate) % 360;
    this.viewport = pdfPage.getViewport({
      scale: this.scale * PixelsPerInch2.PDF_TO_CSS_UNITS,
      rotation: totalRotation
    });
    this.#setDimensions();
    this.reset();
  }
  destroy() {
    this.reset();
    this.pdfPage?.cleanup();
  }
  hasEditableAnnotations() {
    return !!this.annotationLayer?.hasEditableAnnotations();
  }
  get _textHighlighter() {
    return shadow2(this, "_textHighlighter", new TextHighlighter({
      pageIndex: this.id - 1,
      eventBus: this.eventBus,
      findController: this.#layerProperties.findController
    }));
  }
  #dispatchLayerRendered(name, error) {
    this.eventBus.dispatch(name, {
      source: this,
      pageNumber: this.id,
      error
    });
  }
  async #renderAnnotationLayer() {
    let error = null;
    try {
      await this.annotationLayer.render(this.viewport, "display");
    } catch (ex) {
      console.error(`#renderAnnotationLayer: "${ex}".`);
      error = ex;
    } finally {
      this.#dispatchLayerRendered("annotationlayerrendered", error);
    }
  }
  async #renderAnnotationEditorLayer() {
    let error = null;
    try {
      await this.annotationEditorLayer.render(this.viewport, "display");
    } catch (ex) {
      console.error(`#renderAnnotationEditorLayer: "${ex}".`);
      error = ex;
    } finally {
      this.#dispatchLayerRendered("annotationeditorlayerrendered", error);
    }
  }
  async #renderDrawLayer() {
    try {
      await this.drawLayer.render("display");
    } catch (ex) {
      console.error(`#renderDrawLayer: "${ex}".`);
    }
  }
  async #renderXfaLayer() {
    let error = null;
    try {
      const result = await this.xfaLayer.render(this.viewport, "display");
      if (result?.textDivs && this._textHighlighter) {
        this.#buildXfaTextContentItems(result.textDivs);
      }
    } catch (ex) {
      console.error(`#renderXfaLayer: "${ex}".`);
      error = ex;
    } finally {
      if (this.xfaLayer?.div) {
        this.l10n.pause();
        this.#addLayer(this.xfaLayer.div, "xfaLayer");
        this.l10n.resume();
      }
      this.#dispatchLayerRendered("xfalayerrendered", error);
    }
  }
  async #renderTextLayer() {
    if (!this.textLayer) {
      return;
    }
    let error = null;
    try {
      await this.textLayer.render(this.viewport);
    } catch (ex) {
      if (ex instanceof AbortException2) {
        return;
      }
      console.error(`#renderTextLayer: "${ex}".`);
      error = ex;
    }
    this.#dispatchLayerRendered("textlayerrendered", error);
    this.#renderStructTreeLayer();
  }
  async #renderStructTreeLayer() {
    if (!this.textLayer) {
      return;
    }
    this.structTreeLayer ||= new StructTreeLayerBuilder();
    const tree = await (!this.structTreeLayer.renderingDone ? this.pdfPage.getStructTree() : null);
    const treeDom = this.structTreeLayer?.render(tree);
    if (treeDom) {
      this.l10n.pause();
      this.canvas?.append(treeDom);
      this.l10n.resume();
    }
    this.structTreeLayer?.show();
  }
  async #buildXfaTextContentItems(textDivs) {
    const text = await this.pdfPage.getTextContent();
    const items = [];
    for (const item of text.items) {
      items.push(item.str);
    }
    this._textHighlighter.setTextMapping(textDivs, items);
    this._textHighlighter.enable();
  }
  _resetZoomLayer(removeFromDOM = false) {
    if (!this.zoomLayer) {
      return;
    }
    const zoomLayerCanvas = this.zoomLayer.firstChild;
    this.#viewportMap.delete(zoomLayerCanvas);
    zoomLayerCanvas.width = 0;
    zoomLayerCanvas.height = 0;
    if (removeFromDOM) {
      this.zoomLayer.remove();
    }
    this.zoomLayer = null;
  }
  reset({
    keepZoomLayer = false,
    keepAnnotationLayer = false,
    keepAnnotationEditorLayer = false,
    keepXfaLayer = false,
    keepTextLayer = false
  } = {}) {
    this.cancelRendering({
      keepAnnotationLayer,
      keepAnnotationEditorLayer,
      keepXfaLayer,
      keepTextLayer
    });
    this.renderingState = RenderingStates.INITIAL;
    const div = this.div;
    const childNodes = div.childNodes, zoomLayerNode = keepZoomLayer && this.zoomLayer || null, annotationLayerNode = keepAnnotationLayer && this.annotationLayer?.div || null, annotationEditorLayerNode = keepAnnotationEditorLayer && this.annotationEditorLayer?.div || null, xfaLayerNode = keepXfaLayer && this.xfaLayer?.div || null, textLayerNode = keepTextLayer && this.textLayer?.div || null;
    for (let i = childNodes.length - 1; i >= 0; i--) {
      const node = childNodes[i];
      switch (node) {
        case zoomLayerNode:
        case annotationLayerNode:
        case annotationEditorLayerNode:
        case xfaLayerNode:
        case textLayerNode:
          continue;
      }
      node.remove();
      const layerIndex = this.#layers.indexOf(node);
      if (layerIndex >= 0) {
        this.#layers[layerIndex] = null;
      }
    }
    div.removeAttribute("data-loaded");
    if (annotationLayerNode) {
      this.annotationLayer.hide();
    }
    if (annotationEditorLayerNode) {
      this.annotationEditorLayer.hide();
    }
    if (xfaLayerNode) {
      this.xfaLayer.hide();
    }
    if (textLayerNode) {
      this.textLayer.hide();
    }
    this.structTreeLayer?.hide();
    if (!zoomLayerNode) {
      if (this.canvas) {
        this.#viewportMap.delete(this.canvas);
        this.canvas.width = 0;
        this.canvas.height = 0;
        delete this.canvas;
      }
      this._resetZoomLayer();
    }
  }
  toggleEditingMode(isEditing) {
    if (!this.hasEditableAnnotations()) {
      return;
    }
    this.#isEditing = isEditing;
    this.reset({
      keepZoomLayer: true,
      keepAnnotationLayer: true,
      keepAnnotationEditorLayer: true,
      keepXfaLayer: true,
      keepTextLayer: true
    });
  }
  update({
    scale = 0,
    rotation = null,
    optionalContentConfigPromise = null,
    drawingDelay = -1
  }) {
    this.scale = scale || this.scale;
    if (typeof rotation === "number") {
      this.rotation = rotation;
    }
    if (optionalContentConfigPromise instanceof Promise) {
      this._optionalContentConfigPromise = optionalContentConfigPromise;
      optionalContentConfigPromise.then((optionalContentConfig) => {
        if (optionalContentConfigPromise !== this._optionalContentConfigPromise) {
          return;
        }
        this.#useThumbnailCanvas.initialOptionalContent = optionalContentConfig.hasInitialVisibility;
      });
    }
    this.#useThumbnailCanvas.directDrawing = true;
    const totalRotation = (this.rotation + this.pdfPageRotate) % 360;
    this.viewport = this.viewport.clone({
      scale: this.scale * PixelsPerInch2.PDF_TO_CSS_UNITS,
      rotation: totalRotation
    });
    this.#setDimensions();
    if (this._isStandalone) {
      this._container?.style.setProperty("--scale-factor", this.viewport.scale);
    }
    if (this.canvas) {
      let onlyCssZoom = false;
      if (this.#hasRestrictedScaling) {
        if (this.maxCanvasPixels === 0) {
          onlyCssZoom = true;
        } else if (this.maxCanvasPixels > 0) {
          const {
            width,
            height
          } = this.viewport;
          const {
            sx,
            sy
          } = this.outputScale;
          onlyCssZoom = (Math.floor(width) * sx | 0) * (Math.floor(height) * sy | 0) > this.maxCanvasPixels;
        }
      }
      const postponeDrawing = drawingDelay >= 0 && drawingDelay < 1e3;
      if (postponeDrawing || onlyCssZoom) {
        if (postponeDrawing && !onlyCssZoom && this.renderingState !== RenderingStates.FINISHED) {
          this.cancelRendering({
            keepZoomLayer: true,
            keepAnnotationLayer: true,
            keepAnnotationEditorLayer: true,
            keepXfaLayer: true,
            keepTextLayer: true,
            cancelExtraDelay: drawingDelay
          });
          this.renderingState = RenderingStates.FINISHED;
          this.#useThumbnailCanvas.directDrawing = false;
        }
        this.cssTransform({
          target: this.canvas,
          redrawAnnotationLayer: true,
          redrawAnnotationEditorLayer: true,
          redrawXfaLayer: true,
          redrawTextLayer: !postponeDrawing,
          hideTextLayer: postponeDrawing
        });
        if (postponeDrawing) {
          return;
        }
        this.eventBus.dispatch("pagerendered", {
          source: this,
          pageNumber: this.id,
          cssTransform: true,
          timestamp: performance.now(),
          error: this.#renderError
        });
        return;
      }
      if (!this.zoomLayer && !this.canvas.hidden) {
        this.zoomLayer = this.canvas.parentNode;
        this.zoomLayer.style.position = "absolute";
      }
    }
    if (this.zoomLayer) {
      this.cssTransform({
        target: this.zoomLayer.firstChild
      });
    }
    this.reset({
      keepZoomLayer: true,
      keepAnnotationLayer: true,
      keepAnnotationEditorLayer: true,
      keepXfaLayer: true,
      keepTextLayer: true
    });
  }
  cancelRendering({
    keepAnnotationLayer = false,
    keepAnnotationEditorLayer = false,
    keepXfaLayer = false,
    keepTextLayer = false,
    cancelExtraDelay = 0
  } = {}) {
    if (this.renderTask) {
      this.renderTask.cancel(cancelExtraDelay);
      this.renderTask = null;
    }
    this.resume = null;
    if (this.textLayer && (!keepTextLayer || !this.textLayer.div)) {
      this.textLayer.cancel();
      this.textLayer = null;
    }
    if (this.structTreeLayer && !this.textLayer) {
      this.structTreeLayer = null;
    }
    if (this.annotationLayer && (!keepAnnotationLayer || !this.annotationLayer.div)) {
      this.annotationLayer.cancel();
      this.annotationLayer = null;
      this._annotationCanvasMap = null;
    }
    if (this.annotationEditorLayer && (!keepAnnotationEditorLayer || !this.annotationEditorLayer.div)) {
      if (this.drawLayer) {
        this.drawLayer.cancel();
        this.drawLayer = null;
      }
      this.annotationEditorLayer.cancel();
      this.annotationEditorLayer = null;
    }
    if (this.xfaLayer && (!keepXfaLayer || !this.xfaLayer.div)) {
      this.xfaLayer.cancel();
      this.xfaLayer = null;
      this._textHighlighter?.disable();
    }
  }
  cssTransform({
    target,
    redrawAnnotationLayer = false,
    redrawAnnotationEditorLayer = false,
    redrawXfaLayer = false,
    redrawTextLayer = false,
    hideTextLayer = false
  }) {
    if (!target.hasAttribute("zooming")) {
      target.setAttribute("zooming", true);
      const {
        style
      } = target;
      style.width = style.height = "";
    }
    const originalViewport = this.#viewportMap.get(target);
    if (this.viewport !== originalViewport) {
      const relativeRotation = this.viewport.rotation - originalViewport.rotation;
      const absRotation = Math.abs(relativeRotation);
      let scaleX = 1, scaleY = 1;
      if (absRotation === 90 || absRotation === 270) {
        const {
          width,
          height
        } = this.viewport;
        scaleX = height / width;
        scaleY = width / height;
      }
      target.style.transform = `rotate(${relativeRotation}deg) scale(${scaleX}, ${scaleY})`;
    }
    if (redrawAnnotationLayer && this.annotationLayer) {
      this.#renderAnnotationLayer();
    }
    if (redrawAnnotationEditorLayer && this.annotationEditorLayer) {
      if (this.drawLayer) {
        this.#renderDrawLayer();
      }
      this.#renderAnnotationEditorLayer();
    }
    if (redrawXfaLayer && this.xfaLayer) {
      this.#renderXfaLayer();
    }
    if (this.textLayer) {
      if (hideTextLayer) {
        this.textLayer.hide();
        this.structTreeLayer?.hide();
      } else if (redrawTextLayer) {
        this.#renderTextLayer();
      }
    }
  }
  get width() {
    return this.viewport.width;
  }
  get height() {
    return this.viewport.height;
  }
  getPagePoint(x, y) {
    return this.viewport.convertToPdfPoint(x, y);
  }
  async #finishRenderTask(renderTask, error = null) {
    if (renderTask === this.renderTask) {
      this.renderTask = null;
    }
    if (error instanceof RenderingCancelledException2) {
      this.#renderError = null;
      return;
    }
    this.#renderError = error;
    this.renderingState = RenderingStates.FINISHED;
    this._resetZoomLayer(true);
    this.#useThumbnailCanvas.regularAnnotations = !renderTask.separateAnnots;
    this.eventBus.dispatch("pagerendered", {
      source: this,
      pageNumber: this.id,
      cssTransform: false,
      timestamp: performance.now(),
      error: this.#renderError
    });
    if (error) {
      throw error;
    }
  }
  async draw() {
    if (this.renderingState !== RenderingStates.INITIAL) {
      console.error("Must be in new state before drawing");
      this.reset();
    }
    const {
      div,
      l10n,
      pageColors,
      pdfPage,
      viewport
    } = this;
    if (!pdfPage) {
      this.renderingState = RenderingStates.FINISHED;
      throw new Error("pdfPage is not loaded");
    }
    this.renderingState = RenderingStates.RUNNING;
    const canvasWrapper = document.createElement("div");
    canvasWrapper.classList.add("canvasWrapper");
    this.#addLayer(canvasWrapper, "canvasWrapper");
    if (!this.textLayer && this.#textLayerMode !== TextLayerMode.DISABLE && !pdfPage.isPureXfa) {
      this._accessibilityManager ||= new TextAccessibilityManager();
      this.textLayer = new TextLayerBuilder({
        pdfPage,
        highlighter: this._textHighlighter,
        accessibilityManager: this._accessibilityManager,
        enablePermissions: this.#textLayerMode === TextLayerMode.ENABLE_PERMISSIONS,
        onAppend: (textLayerDiv) => {
          this.l10n.pause();
          this.#addLayer(textLayerDiv, "textLayer");
          this.l10n.resume();
        }
      });
    }
    if (!this.annotationLayer && this.#annotationMode !== AnnotationMode2.DISABLE) {
      const {
        annotationStorage,
        annotationEditorUIManager,
        downloadManager,
        enableScripting,
        fieldObjectsPromise,
        hasJSActionsPromise,
        linkService
      } = this.#layerProperties;
      this._annotationCanvasMap ||= /* @__PURE__ */ new Map();
      this.annotationLayer = new AnnotationLayerBuilder({
        pdfPage,
        annotationStorage,
        imageResourcesPath: this.imageResourcesPath,
        renderForms: this.#annotationMode === AnnotationMode2.ENABLE_FORMS,
        linkService,
        downloadManager,
        enableScripting,
        hasJSActionsPromise,
        fieldObjectsPromise,
        annotationCanvasMap: this._annotationCanvasMap,
        accessibilityManager: this._accessibilityManager,
        annotationEditorUIManager,
        onAppend: (annotationLayerDiv) => {
          this.#addLayer(annotationLayerDiv, "annotationLayer");
        }
      });
    }
    const renderContinueCallback = (cont) => {
      showCanvas?.(false);
      if (this.renderingQueue && !this.renderingQueue.isHighestPriority(this)) {
        this.renderingState = RenderingStates.PAUSED;
        this.resume = () => {
          this.renderingState = RenderingStates.RUNNING;
          cont();
        };
        return;
      }
      cont();
    };
    const {
      width,
      height
    } = viewport;
    const canvas = document.createElement("canvas");
    canvas.setAttribute("role", "presentation");
    canvas.hidden = true;
    const hasHCM = !!(pageColors?.background && pageColors?.foreground);
    let showCanvas = (isLastShow) => {
      if (!hasHCM || isLastShow) {
        canvas.hidden = false;
        showCanvas = null;
      }
    };
    canvasWrapper.append(canvas);
    this.canvas = canvas;
    const ctx = canvas.getContext("2d", {
      alpha: false,
      willReadFrequently: !this.#enableHWA
    });
    const outputScale = this.outputScale = new OutputScale();
    if (this.maxCanvasPixels === 0) {
      const invScale = 1 / this.scale;
      outputScale.sx *= invScale;
      outputScale.sy *= invScale;
      this.#hasRestrictedScaling = true;
    } else if (this.maxCanvasPixels > 0) {
      const pixelsInViewport = width * height;
      const maxScale = Math.sqrt(this.maxCanvasPixels / pixelsInViewport);
      if (outputScale.sx > maxScale || outputScale.sy > maxScale) {
        outputScale.sx = maxScale;
        outputScale.sy = maxScale;
        this.#hasRestrictedScaling = true;
      } else {
        this.#hasRestrictedScaling = false;
      }
    }
    const sfx = approximateFraction(outputScale.sx);
    const sfy = approximateFraction(outputScale.sy);
    canvas.width = floorToDivide(width * outputScale.sx, sfx[0]);
    canvas.height = floorToDivide(height * outputScale.sy, sfy[0]);
    const {
      style
    } = canvas;
    style.width = floorToDivide(width, sfx[1]) + "px";
    style.height = floorToDivide(height, sfy[1]) + "px";
    this.#viewportMap.set(canvas, viewport);
    const transform = outputScale.scaled ? [outputScale.sx, 0, 0, outputScale.sy, 0, 0] : null;
    const renderContext = {
      canvasContext: ctx,
      transform,
      viewport,
      annotationMode: this.#annotationMode,
      optionalContentConfigPromise: this._optionalContentConfigPromise,
      annotationCanvasMap: this._annotationCanvasMap,
      pageColors,
      isEditing: this.#isEditing
    };
    const renderTask = this.renderTask = pdfPage.render(renderContext);
    renderTask.onContinue = renderContinueCallback;
    const resultPromise = renderTask.promise.then(async () => {
      showCanvas?.(true);
      await this.#finishRenderTask(renderTask);
      this.#renderTextLayer();
      if (this.annotationLayer) {
        await this.#renderAnnotationLayer();
      }
      const {
        annotationEditorUIManager
      } = this.#layerProperties;
      if (!annotationEditorUIManager) {
        return;
      }
      this.drawLayer ||= new DrawLayerBuilder({
        pageIndex: this.id
      });
      await this.#renderDrawLayer();
      this.drawLayer.setParent(canvasWrapper);
      if (!this.annotationEditorLayer) {
        this.annotationEditorLayer = new AnnotationEditorLayerBuilder({
          uiManager: annotationEditorUIManager,
          pdfPage,
          l10n,
          accessibilityManager: this._accessibilityManager,
          annotationLayer: this.annotationLayer?.annotationLayer,
          textLayer: this.textLayer,
          drawLayer: this.drawLayer.getDrawLayer(),
          onAppend: (annotationEditorLayerDiv) => {
            this.#addLayer(annotationEditorLayerDiv, "annotationEditorLayer");
          }
        });
      }
      this.#renderAnnotationEditorLayer();
    }, (error) => {
      if (!(error instanceof RenderingCancelledException2)) {
        showCanvas?.(true);
      }
      return this.#finishRenderTask(renderTask, error);
    });
    if (pdfPage.isPureXfa) {
      if (!this.xfaLayer) {
        const {
          annotationStorage,
          linkService
        } = this.#layerProperties;
        this.xfaLayer = new XfaLayerBuilder({
          pdfPage,
          annotationStorage,
          linkService
        });
      }
      this.#renderXfaLayer();
    }
    div.setAttribute("data-loaded", true);
    this.eventBus.dispatch("pagerender", {
      source: this,
      pageNumber: this.id
    });
    return resultPromise;
  }
  setPageLabel(label) {
    this.pageLabel = typeof label === "string" ? label : null;
    this.div.setAttribute("data-l10n-args", JSON.stringify({
      page: this.pageLabel ?? this.id
    }));
    if (this.pageLabel !== null) {
      this.div.setAttribute("data-page-label", this.pageLabel);
    } else {
      this.div.removeAttribute("data-page-label");
    }
  }
  get thumbnailCanvas() {
    const {
      directDrawing,
      initialOptionalContent,
      regularAnnotations
    } = this.#useThumbnailCanvas;
    return directDrawing && initialOptionalContent && regularAnnotations ? this.canvas : null;
  }
};
async function docProperties(pdfDocument) {
  const url = "", baseUrl = url.split("#", 1)[0];
  let {
    info: info2,
    metadata,
    contentDispositionFilename,
    contentLength
  } = await pdfDocument.getMetadata();
  if (!contentLength) {
    const {
      length
    } = await pdfDocument.getDownloadInfo();
    contentLength = length;
  }
  return {
    ...info2,
    baseURL: baseUrl,
    filesize: contentLength,
    filename: contentDispositionFilename || getPdfFilenameFromUrl2(url),
    metadata: metadata?.getRaw(),
    authors: metadata?.get("dc:creator"),
    numPages: pdfDocument.numPages,
    URL: url
  };
}
var GenericScripting = class {
  constructor(sandboxBundleSrc) {
    this._ready = new Promise((resolve, reject) => {
      const sandbox = import(
        /*webpackIgnore: true*/
        sandboxBundleSrc
      );
      sandbox.then((pdfjsSandbox) => {
        resolve(pdfjsSandbox.QuickJSSandbox());
      }).catch(reject);
    });
  }
  async createSandbox(data) {
    const sandbox = await this._ready;
    sandbox.create(data);
  }
  async dispatchEventInSandbox(event) {
    const sandbox = await this._ready;
    setTimeout(() => sandbox.dispatchEvent(event), 0);
  }
  async destroySandbox() {
    const sandbox = await this._ready;
    sandbox.nukeSandbox();
  }
};
var PDFScriptingManager = class {
  #closeCapability = null;
  #destroyCapability = null;
  #docProperties = null;
  #eventAbortController = null;
  #eventBus = null;
  #externalServices = null;
  #pdfDocument = null;
  #pdfViewer = null;
  #ready = false;
  #scripting = null;
  #willPrintCapability = null;
  constructor({
    eventBus,
    externalServices = null,
    docProperties: docProperties2 = null
  }) {
    this.#eventBus = eventBus;
    this.#externalServices = externalServices;
    this.#docProperties = docProperties2;
  }
  setViewer(pdfViewer) {
    this.#pdfViewer = pdfViewer;
  }
  async setDocument(pdfDocument) {
    if (this.#pdfDocument) {
      await this.#destroyScripting();
    }
    this.#pdfDocument = pdfDocument;
    if (!pdfDocument) {
      return;
    }
    const [objects, calculationOrder, docActions] = await Promise.all([pdfDocument.getFieldObjects(), pdfDocument.getCalculationOrderIds(), pdfDocument.getJSActions()]);
    if (!objects && !docActions) {
      await this.#destroyScripting();
      return;
    }
    if (pdfDocument !== this.#pdfDocument) {
      return;
    }
    try {
      this.#scripting = this.#initScripting();
    } catch (error) {
      console.error(`setDocument: "${error.message}".`);
      await this.#destroyScripting();
      return;
    }
    const eventBus = this.#eventBus;
    this.#eventAbortController = new AbortController();
    const {
      signal
    } = this.#eventAbortController;
    eventBus._on("updatefromsandbox", (event) => {
      if (event?.source === window) {
        this.#updateFromSandbox(event.detail);
      }
    }, {
      signal
    });
    eventBus._on("dispatcheventinsandbox", (event) => {
      this.#scripting?.dispatchEventInSandbox(event.detail);
    }, {
      signal
    });
    eventBus._on("pagechanging", ({
      pageNumber,
      previous
    }) => {
      if (pageNumber === previous) {
        return;
      }
      this.#dispatchPageClose(previous);
      this.#dispatchPageOpen(pageNumber);
    }, {
      signal
    });
    eventBus._on("pagerendered", ({
      pageNumber
    }) => {
      if (!this._pageOpenPending.has(pageNumber)) {
        return;
      }
      if (pageNumber !== this.#pdfViewer.currentPageNumber) {
        return;
      }
      this.#dispatchPageOpen(pageNumber);
    }, {
      signal
    });
    eventBus._on("pagesdestroy", async () => {
      await this.#dispatchPageClose(this.#pdfViewer.currentPageNumber);
      await this.#scripting?.dispatchEventInSandbox({
        id: "doc",
        name: "WillClose"
      });
      this.#closeCapability?.resolve();
    }, {
      signal
    });
    try {
      const docProperties2 = await this.#docProperties(pdfDocument);
      if (pdfDocument !== this.#pdfDocument) {
        return;
      }
      await this.#scripting.createSandbox({
        objects,
        calculationOrder,
        appInfo: {
          platform: navigator.platform,
          language: navigator.language
        },
        docInfo: {
          ...docProperties2,
          actions: docActions
        }
      });
      eventBus.dispatch("sandboxcreated", {
        source: this
      });
    } catch (error) {
      console.error(`setDocument: "${error.message}".`);
      await this.#destroyScripting();
      return;
    }
    await this.#scripting?.dispatchEventInSandbox({
      id: "doc",
      name: "Open"
    });
    await this.#dispatchPageOpen(this.#pdfViewer.currentPageNumber, true);
    Promise.resolve().then(() => {
      if (pdfDocument === this.#pdfDocument) {
        this.#ready = true;
      }
    });
  }
  async dispatchWillSave() {
    return this.#scripting?.dispatchEventInSandbox({
      id: "doc",
      name: "WillSave"
    });
  }
  async dispatchDidSave() {
    return this.#scripting?.dispatchEventInSandbox({
      id: "doc",
      name: "DidSave"
    });
  }
  async dispatchWillPrint() {
    if (!this.#scripting) {
      return;
    }
    await this.#willPrintCapability?.promise;
    this.#willPrintCapability = Promise.withResolvers();
    try {
      await this.#scripting.dispatchEventInSandbox({
        id: "doc",
        name: "WillPrint"
      });
    } catch (ex) {
      this.#willPrintCapability.resolve();
      this.#willPrintCapability = null;
      throw ex;
    }
    await this.#willPrintCapability.promise;
  }
  async dispatchDidPrint() {
    return this.#scripting?.dispatchEventInSandbox({
      id: "doc",
      name: "DidPrint"
    });
  }
  get destroyPromise() {
    return this.#destroyCapability?.promise || null;
  }
  get ready() {
    return this.#ready;
  }
  get _pageOpenPending() {
    return shadow2(this, "_pageOpenPending", /* @__PURE__ */ new Set());
  }
  get _visitedPages() {
    return shadow2(this, "_visitedPages", /* @__PURE__ */ new Map());
  }
  async #updateFromSandbox(detail) {
    const pdfViewer = this.#pdfViewer;
    const isInPresentationMode = pdfViewer.isInPresentationMode || pdfViewer.isChangingPresentationMode;
    const {
      id,
      siblings,
      command,
      value
    } = detail;
    if (!id) {
      switch (command) {
        case "clear":
          console.clear();
          break;
        case "error":
          console.error(value);
          break;
        case "layout":
          if (!isInPresentationMode) {
            const modes = apiPageLayoutToViewerModes(value);
            pdfViewer.spreadMode = modes.spreadMode;
          }
          break;
        case "page-num":
          pdfViewer.currentPageNumber = value + 1;
          break;
        case "print":
          await pdfViewer.pagesPromise;
          this.#eventBus.dispatch("print", {
            source: this
          });
          break;
        case "println":
          console.log(value);
          break;
        case "zoom":
          if (!isInPresentationMode) {
            pdfViewer.currentScaleValue = value;
          }
          break;
        case "SaveAs":
          this.#eventBus.dispatch("download", {
            source: this
          });
          break;
        case "FirstPage":
          pdfViewer.currentPageNumber = 1;
          break;
        case "LastPage":
          pdfViewer.currentPageNumber = pdfViewer.pagesCount;
          break;
        case "NextPage":
          pdfViewer.nextPage();
          break;
        case "PrevPage":
          pdfViewer.previousPage();
          break;
        case "ZoomViewIn":
          if (!isInPresentationMode) {
            pdfViewer.increaseScale();
          }
          break;
        case "ZoomViewOut":
          if (!isInPresentationMode) {
            pdfViewer.decreaseScale();
          }
          break;
        case "WillPrintFinished":
          this.#willPrintCapability?.resolve();
          this.#willPrintCapability = null;
          break;
      }
      return;
    }
    if (isInPresentationMode && detail.focus) {
      return;
    }
    delete detail.id;
    delete detail.siblings;
    const ids = siblings ? [id, ...siblings] : [id];
    for (const elementId of ids) {
      const element = document.querySelector(`[data-element-id="${elementId}"]`);
      if (element) {
        element.dispatchEvent(new CustomEvent("updatefromsandbox", {
          detail
        }));
      } else {
        this.#pdfDocument?.annotationStorage.setValue(elementId, detail);
      }
    }
  }
  async #dispatchPageOpen(pageNumber, initialize = false) {
    const pdfDocument = this.#pdfDocument, visitedPages = this._visitedPages;
    if (initialize) {
      this.#closeCapability = Promise.withResolvers();
    }
    if (!this.#closeCapability) {
      return;
    }
    const pageView = this.#pdfViewer.getPageView(pageNumber - 1);
    if (pageView?.renderingState !== RenderingStates.FINISHED) {
      this._pageOpenPending.add(pageNumber);
      return;
    }
    this._pageOpenPending.delete(pageNumber);
    const actionsPromise = (async () => {
      const actions = await (!visitedPages.has(pageNumber) ? pageView.pdfPage?.getJSActions() : null);
      if (pdfDocument !== this.#pdfDocument) {
        return;
      }
      await this.#scripting?.dispatchEventInSandbox({
        id: "page",
        name: "PageOpen",
        pageNumber,
        actions
      });
    })();
    visitedPages.set(pageNumber, actionsPromise);
  }
  async #dispatchPageClose(pageNumber) {
    const pdfDocument = this.#pdfDocument, visitedPages = this._visitedPages;
    if (!this.#closeCapability) {
      return;
    }
    if (this._pageOpenPending.has(pageNumber)) {
      return;
    }
    const actionsPromise = visitedPages.get(pageNumber);
    if (!actionsPromise) {
      return;
    }
    visitedPages.set(pageNumber, null);
    await actionsPromise;
    if (pdfDocument !== this.#pdfDocument) {
      return;
    }
    await this.#scripting?.dispatchEventInSandbox({
      id: "page",
      name: "PageClose",
      pageNumber
    });
  }
  #initScripting() {
    this.#destroyCapability = Promise.withResolvers();
    if (this.#scripting) {
      throw new Error("#initScripting: Scripting already exists.");
    }
    return this.#externalServices.createScripting();
  }
  async #destroyScripting() {
    if (!this.#scripting) {
      this.#pdfDocument = null;
      this.#destroyCapability?.resolve();
      return;
    }
    if (this.#closeCapability) {
      await Promise.race([this.#closeCapability.promise, new Promise((resolve) => {
        setTimeout(resolve, 1e3);
      })]).catch(() => {
      });
      this.#closeCapability = null;
    }
    this.#pdfDocument = null;
    try {
      await this.#scripting.destroySandbox();
    } catch {
    }
    this.#willPrintCapability?.reject(new Error("Scripting destroyed."));
    this.#willPrintCapability = null;
    this.#eventAbortController?.abort();
    this.#eventAbortController = null;
    this._pageOpenPending.clear();
    this._visitedPages.clear();
    this.#scripting = null;
    this.#ready = false;
    this.#destroyCapability?.resolve();
  }
};
var PDFScriptingManagerComponents = class extends PDFScriptingManager {
  constructor(options) {
    if (!options.externalServices) {
      window.addEventListener("updatefromsandbox", (event) => {
        options.eventBus.dispatch("updatefromsandbox", {
          source: window,
          detail: event.detail
        });
      });
    }
    options.externalServices ||= {
      createScripting: () => new GenericScripting(options.sandboxBundleSrc)
    };
    options.docProperties ||= (pdfDocument) => docProperties(pdfDocument);
    super(options);
  }
};
var CLEANUP_TIMEOUT = 3e4;
var PDFRenderingQueue = class {
  constructor() {
    this.pdfViewer = null;
    this.pdfThumbnailViewer = null;
    this.onIdle = null;
    this.highestPriorityPage = null;
    this.idleTimeout = null;
    this.printing = false;
    this.isThumbnailViewEnabled = false;
    Object.defineProperty(this, "hasViewer", {
      value: () => !!this.pdfViewer
    });
  }
  setViewer(pdfViewer) {
    this.pdfViewer = pdfViewer;
  }
  setThumbnailViewer(pdfThumbnailViewer) {
    this.pdfThumbnailViewer = pdfThumbnailViewer;
  }
  isHighestPriority(view) {
    return this.highestPriorityPage === view.renderingId;
  }
  renderHighestPriority(currentlyVisiblePages) {
    if (this.idleTimeout) {
      clearTimeout(this.idleTimeout);
      this.idleTimeout = null;
    }
    if (this.pdfViewer.forceRendering(currentlyVisiblePages)) {
      return;
    }
    if (this.isThumbnailViewEnabled && this.pdfThumbnailViewer?.forceRendering()) {
      return;
    }
    if (this.printing) {
      return;
    }
    if (this.onIdle) {
      this.idleTimeout = setTimeout(this.onIdle.bind(this), CLEANUP_TIMEOUT);
    }
  }
  getHighestPriority(visible, views, scrolledDown, preRenderExtra = false) {
    const visibleViews = visible.views, numVisible = visibleViews.length;
    if (numVisible === 0) {
      return null;
    }
    for (let i = 0; i < numVisible; i++) {
      const view = visibleViews[i].view;
      if (!this.isViewFinished(view)) {
        return view;
      }
    }
    const firstId = visible.first.id, lastId = visible.last.id;
    if (lastId - firstId + 1 > numVisible) {
      const visibleIds = visible.ids;
      for (let i = 1, ii = lastId - firstId; i < ii; i++) {
        const holeId = scrolledDown ? firstId + i : lastId - i;
        if (visibleIds.has(holeId)) {
          continue;
        }
        const holeView = views[holeId - 1];
        if (!this.isViewFinished(holeView)) {
          return holeView;
        }
      }
    }
    let preRenderIndex = scrolledDown ? lastId : firstId - 2;
    let preRenderView = views[preRenderIndex];
    if (preRenderView && !this.isViewFinished(preRenderView)) {
      return preRenderView;
    }
    if (preRenderExtra) {
      preRenderIndex += scrolledDown ? 1 : -1;
      preRenderView = views[preRenderIndex];
      if (preRenderView && !this.isViewFinished(preRenderView)) {
        return preRenderView;
      }
    }
    return null;
  }
  isViewFinished(view) {
    return view.renderingState === RenderingStates.FINISHED;
  }
  renderView(view) {
    switch (view.renderingState) {
      case RenderingStates.FINISHED:
        return false;
      case RenderingStates.PAUSED:
        this.highestPriorityPage = view.renderingId;
        view.resume();
        break;
      case RenderingStates.RUNNING:
        this.highestPriorityPage = view.renderingId;
        break;
      case RenderingStates.INITIAL:
        this.highestPriorityPage = view.renderingId;
        view.draw().finally(() => {
          this.renderHighestPriority();
        }).catch((reason) => {
          if (reason instanceof RenderingCancelledException2) {
            return;
          }
          console.error(`renderView: "${reason}"`);
        });
        break;
    }
    return true;
  }
};
var DEFAULT_CACHE_SIZE = 10;
var PagesCountLimit = {
  FORCE_SCROLL_MODE_PAGE: 1e4,
  FORCE_LAZY_PAGE_INIT: 5e3,
  PAUSE_EAGER_PAGE_INIT: 250
};
function isValidAnnotationEditorMode(mode) {
  return Object.values(AnnotationEditorType2).includes(mode) && mode !== AnnotationEditorType2.DISABLE;
}
var PDFPageViewBuffer = class {
  #buf = /* @__PURE__ */ new Set();
  #size = 0;
  constructor(size) {
    this.#size = size;
  }
  push(view) {
    const buf = this.#buf;
    if (buf.has(view)) {
      buf.delete(view);
    }
    buf.add(view);
    if (buf.size > this.#size) {
      this.#destroyFirstView();
    }
  }
  resize(newSize, idsToKeep = null) {
    this.#size = newSize;
    const buf = this.#buf;
    if (idsToKeep) {
      const ii = buf.size;
      let i = 1;
      for (const view of buf) {
        if (idsToKeep.has(view.id)) {
          buf.delete(view);
          buf.add(view);
        }
        if (++i > ii) {
          break;
        }
      }
    }
    while (buf.size > this.#size) {
      this.#destroyFirstView();
    }
  }
  has(view) {
    return this.#buf.has(view);
  }
  [Symbol.iterator]() {
    return this.#buf.keys();
  }
  #destroyFirstView() {
    const firstView = this.#buf.keys().next().value;
    firstView?.destroy();
    this.#buf.delete(firstView);
  }
};
var PDFViewer = class {
  #buffer = null;
  #altTextManager = null;
  #annotationEditorHighlightColors = null;
  #annotationEditorMode = AnnotationEditorType2.NONE;
  #annotationEditorUIManager = null;
  #annotationMode = AnnotationMode2.ENABLE_FORMS;
  #containerTopLeft = null;
  #enableHWA = false;
  #enableHighlightFloatingButton = false;
  #enablePermissions = false;
  #enableUpdatedAddImage = false;
  #eventAbortController = null;
  #mlManager = null;
  #onPageRenderedCallback = null;
  #switchAnnotationEditorModeTimeoutId = null;
  #getAllTextInProgress = false;
  #hiddenCopyElement = null;
  #interruptCopyCondition = false;
  #previousContainerHeight = 0;
  #resizeObserver = new ResizeObserver(this.#resizeObserverCallback.bind(this));
  #scrollModePageState = null;
  #scaleTimeoutId = null;
  #textLayerMode = TextLayerMode.ENABLE;
  constructor(options) {
    const viewerVersion = "4.5.136";
    if (version2 !== viewerVersion) {
      throw new Error(`The API version "${version2}" does not match the Viewer version "${viewerVersion}".`);
    }
    this.container = options.container;
    this.viewer = options.viewer || options.container.firstElementChild;
    if (this.container?.tagName !== "DIV" || this.viewer?.tagName !== "DIV") {
      throw new Error("Invalid `container` and/or `viewer` option.");
    }
    if (this.container.offsetParent && getComputedStyle(this.container).position !== "absolute") {
      throw new Error("The `container` must be absolutely positioned.");
    }
    this.#resizeObserver.observe(this.container);
    this.eventBus = options.eventBus;
    this.linkService = options.linkService || new SimpleLinkService();
    this.downloadManager = options.downloadManager || null;
    this.findController = options.findController || null;
    this.#altTextManager = options.altTextManager || null;
    if (this.findController) {
      this.findController.onIsPageVisible = (pageNumber) => this._getVisiblePages().ids.has(pageNumber);
    }
    this._scriptingManager = options.scriptingManager || null;
    this.#textLayerMode = options.textLayerMode ?? TextLayerMode.ENABLE;
    this.#annotationMode = options.annotationMode ?? AnnotationMode2.ENABLE_FORMS;
    this.#annotationEditorMode = options.annotationEditorMode ?? AnnotationEditorType2.NONE;
    this.#annotationEditorHighlightColors = options.annotationEditorHighlightColors || null;
    this.#enableHighlightFloatingButton = options.enableHighlightFloatingButton === true;
    this.#enableUpdatedAddImage = options.enableUpdatedAddImage === true;
    this.imageResourcesPath = options.imageResourcesPath || "";
    this.enablePrintAutoRotate = options.enablePrintAutoRotate || false;
    this.removePageBorders = options.removePageBorders || false;
    this.maxCanvasPixels = options.maxCanvasPixels;
    this.l10n = options.l10n;
    this.l10n ||= new genericl10n_GenericL10n();
    this.#enablePermissions = options.enablePermissions || false;
    this.pageColors = options.pageColors || null;
    this.#mlManager = options.mlManager || null;
    this.#enableHWA = options.enableHWA || false;
    this.defaultRenderingQueue = !options.renderingQueue;
    if (this.defaultRenderingQueue) {
      this.renderingQueue = new PDFRenderingQueue();
      this.renderingQueue.setViewer(this);
    } else {
      this.renderingQueue = options.renderingQueue;
    }
    const {
      abortSignal
    } = options;
    abortSignal?.addEventListener("abort", () => {
      this.#resizeObserver.disconnect();
      this.#resizeObserver = null;
    }, {
      once: true
    });
    this.scroll = watchScroll(this.container, this._scrollUpdate.bind(this), abortSignal);
    this.presentationModeState = PresentationModeState.UNKNOWN;
    this._resetView();
    if (this.removePageBorders) {
      this.viewer.classList.add("removePageBorders");
    }
    this.#updateContainerHeightCss();
    this.eventBus._on("thumbnailrendered", ({
      pageNumber,
      pdfPage
    }) => {
      const pageView = this._pages[pageNumber - 1];
      if (!this.#buffer.has(pageView)) {
        pdfPage?.cleanup();
      }
    });
    if (!options.l10n) {
      this.l10n.translate(this.container);
    }
  }
  get pagesCount() {
    return this._pages.length;
  }
  getPageView(index) {
    return this._pages[index];
  }
  getCachedPageViews() {
    return new Set(this.#buffer);
  }
  get pageViewsReady() {
    return this._pages.every((pageView) => pageView?.pdfPage);
  }
  get renderForms() {
    return this.#annotationMode === AnnotationMode2.ENABLE_FORMS;
  }
  get enableScripting() {
    return !!this._scriptingManager;
  }
  get currentPageNumber() {
    return this._currentPageNumber;
  }
  set currentPageNumber(val) {
    if (!Number.isInteger(val)) {
      throw new Error("Invalid page number.");
    }
    if (!this.pdfDocument) {
      return;
    }
    if (!this._setCurrentPageNumber(val, true)) {
      console.error(`currentPageNumber: "${val}" is not a valid page.`);
    }
  }
  _setCurrentPageNumber(val, resetCurrentPageView = false) {
    if (this._currentPageNumber === val) {
      if (resetCurrentPageView) {
        this.#resetCurrentPageView();
      }
      return true;
    }
    if (!(0 < val && val <= this.pagesCount)) {
      return false;
    }
    const previous = this._currentPageNumber;
    this._currentPageNumber = val;
    this.eventBus.dispatch("pagechanging", {
      source: this,
      pageNumber: val,
      pageLabel: this._pageLabels?.[val - 1] ?? null,
      previous
    });
    if (resetCurrentPageView) {
      this.#resetCurrentPageView();
    }
    return true;
  }
  get currentPageLabel() {
    return this._pageLabels?.[this._currentPageNumber - 1] ?? null;
  }
  set currentPageLabel(val) {
    if (!this.pdfDocument) {
      return;
    }
    let page = val | 0;
    if (this._pageLabels) {
      const i = this._pageLabels.indexOf(val);
      if (i >= 0) {
        page = i + 1;
      }
    }
    if (!this._setCurrentPageNumber(page, true)) {
      console.error(`currentPageLabel: "${val}" is not a valid page.`);
    }
  }
  get currentScale() {
    return this._currentScale !== UNKNOWN_SCALE ? this._currentScale : DEFAULT_SCALE;
  }
  set currentScale(val) {
    if (isNaN(val)) {
      throw new Error("Invalid numeric scale.");
    }
    if (!this.pdfDocument) {
      return;
    }
    this.#setScale(val, {
      noScroll: false
    });
  }
  get currentScaleValue() {
    return this._currentScaleValue;
  }
  set currentScaleValue(val) {
    if (!this.pdfDocument) {
      return;
    }
    this.#setScale(val, {
      noScroll: false
    });
  }
  get pagesRotation() {
    return this._pagesRotation;
  }
  set pagesRotation(rotation) {
    if (!isValidRotation(rotation)) {
      throw new Error("Invalid pages rotation angle.");
    }
    if (!this.pdfDocument) {
      return;
    }
    rotation %= 360;
    if (rotation < 0) {
      rotation += 360;
    }
    if (this._pagesRotation === rotation) {
      return;
    }
    this._pagesRotation = rotation;
    const pageNumber = this._currentPageNumber;
    this.refresh(true, {
      rotation
    });
    if (this._currentScaleValue) {
      this.#setScale(this._currentScaleValue, {
        noScroll: true
      });
    }
    this.eventBus.dispatch("rotationchanging", {
      source: this,
      pagesRotation: rotation,
      pageNumber
    });
    if (this.defaultRenderingQueue) {
      this.update();
    }
  }
  get firstPagePromise() {
    return this.pdfDocument ? this._firstPageCapability.promise : null;
  }
  get onePageRendered() {
    return this.pdfDocument ? this._onePageRenderedCapability.promise : null;
  }
  get pagesPromise() {
    return this.pdfDocument ? this._pagesCapability.promise : null;
  }
  get _layerProperties() {
    const self = this;
    return shadow2(this, "_layerProperties", {
      get annotationEditorUIManager() {
        return self.#annotationEditorUIManager;
      },
      get annotationStorage() {
        return self.pdfDocument?.annotationStorage;
      },
      get downloadManager() {
        return self.downloadManager;
      },
      get enableScripting() {
        return !!self._scriptingManager;
      },
      get fieldObjectsPromise() {
        return self.pdfDocument?.getFieldObjects();
      },
      get findController() {
        return self.findController;
      },
      get hasJSActionsPromise() {
        return self.pdfDocument?.hasJSActions();
      },
      get linkService() {
        return self.linkService;
      }
    });
  }
  #initializePermissions(permissions) {
    const params = {
      annotationEditorMode: this.#annotationEditorMode,
      annotationMode: this.#annotationMode,
      textLayerMode: this.#textLayerMode
    };
    if (!permissions) {
      return params;
    }
    if (!permissions.includes(PermissionFlag2.COPY) && this.#textLayerMode === TextLayerMode.ENABLE) {
      params.textLayerMode = TextLayerMode.ENABLE_PERMISSIONS;
    }
    if (!permissions.includes(PermissionFlag2.MODIFY_CONTENTS)) {
      params.annotationEditorMode = AnnotationEditorType2.DISABLE;
    }
    if (!permissions.includes(PermissionFlag2.MODIFY_ANNOTATIONS) && !permissions.includes(PermissionFlag2.FILL_INTERACTIVE_FORMS) && this.#annotationMode === AnnotationMode2.ENABLE_FORMS) {
      params.annotationMode = AnnotationMode2.ENABLE;
    }
    return params;
  }
  async #onePageRenderedOrForceFetch(signal) {
    if (document.visibilityState === "hidden" || !this.container.offsetParent || this._getVisiblePages().views.length === 0) {
      return;
    }
    const hiddenCapability = Promise.withResolvers();
    function onVisibilityChange() {
      if (document.visibilityState === "hidden") {
        hiddenCapability.resolve();
      }
    }
    document.addEventListener("visibilitychange", onVisibilityChange, {
      signal
    });
    await Promise.race([this._onePageRenderedCapability.promise, hiddenCapability.promise]);
    document.removeEventListener("visibilitychange", onVisibilityChange);
  }
  async getAllText() {
    const texts = [];
    const buffer = [];
    for (let pageNum = 1, pagesCount = this.pdfDocument.numPages; pageNum <= pagesCount; ++pageNum) {
      if (this.#interruptCopyCondition) {
        return null;
      }
      buffer.length = 0;
      const page = await this.pdfDocument.getPage(pageNum);
      const {
        items
      } = await page.getTextContent();
      for (const item of items) {
        if (item.str) {
          buffer.push(item.str);
        }
        if (item.hasEOL) {
          buffer.push("\n");
        }
      }
      texts.push(removeNullCharacters(buffer.join("")));
    }
    return texts.join("\n");
  }
  #copyCallback(textLayerMode, event) {
    const selection = document.getSelection();
    const {
      focusNode,
      anchorNode
    } = selection;
    if (anchorNode && focusNode && selection.containsNode(this.#hiddenCopyElement)) {
      if (this.#getAllTextInProgress || textLayerMode === TextLayerMode.ENABLE_PERMISSIONS) {
        event.preventDefault();
        event.stopPropagation();
        return;
      }
      this.#getAllTextInProgress = true;
      const {
        classList
      } = this.viewer;
      classList.add("copyAll");
      const ac = new AbortController();
      window.addEventListener("keydown", (ev) => this.#interruptCopyCondition = ev.key === "Escape", {
        signal: ac.signal
      });
      this.getAllText().then(async (text) => {
        if (text !== null) {
          await navigator.clipboard.writeText(text);
        }
      }).catch((reason) => {
        console.warn(`Something goes wrong when extracting the text: ${reason.message}`);
      }).finally(() => {
        this.#getAllTextInProgress = false;
        this.#interruptCopyCondition = false;
        ac.abort();
        classList.remove("copyAll");
      });
      event.preventDefault();
      event.stopPropagation();
    }
  }
  setDocument(pdfDocument) {
    if (this.pdfDocument) {
      this.eventBus.dispatch("pagesdestroy", {
        source: this
      });
      this._cancelRendering();
      this._resetView();
      this.findController?.setDocument(null);
      this._scriptingManager?.setDocument(null);
      if (this.#annotationEditorUIManager) {
        this.#annotationEditorUIManager.destroy();
        this.#annotationEditorUIManager = null;
      }
    }
    this.pdfDocument = pdfDocument;
    if (!pdfDocument) {
      return;
    }
    const pagesCount = pdfDocument.numPages;
    const firstPagePromise = pdfDocument.getPage(1);
    const optionalContentConfigPromise = pdfDocument.getOptionalContentConfig({
      intent: "display"
    });
    const permissionsPromise = this.#enablePermissions ? pdfDocument.getPermissions() : Promise.resolve();
    const {
      eventBus,
      pageColors,
      viewer
    } = this;
    this.#eventAbortController = new AbortController();
    const {
      signal
    } = this.#eventAbortController;
    if (pagesCount > PagesCountLimit.FORCE_SCROLL_MODE_PAGE) {
      console.warn("Forcing PAGE-scrolling for performance reasons, given the length of the document.");
      const mode = this._scrollMode = ScrollMode.PAGE;
      eventBus.dispatch("scrollmodechanged", {
        source: this,
        mode
      });
    }
    this._pagesCapability.promise.then(() => {
      eventBus.dispatch("pagesloaded", {
        source: this,
        pagesCount
      });
    }, () => {
    });
    const onBeforeDraw = (evt) => {
      const pageView = this._pages[evt.pageNumber - 1];
      if (!pageView) {
        return;
      }
      this.#buffer.push(pageView);
    };
    eventBus._on("pagerender", onBeforeDraw, {
      signal
    });
    const onAfterDraw = (evt) => {
      if (evt.cssTransform) {
        return;
      }
      this._onePageRenderedCapability.resolve({
        timestamp: evt.timestamp
      });
      eventBus._off("pagerendered", onAfterDraw);
    };
    eventBus._on("pagerendered", onAfterDraw, {
      signal
    });
    Promise.all([firstPagePromise, permissionsPromise]).then(([firstPdfPage, permissions]) => {
      if (pdfDocument !== this.pdfDocument) {
        return;
      }
      this._firstPageCapability.resolve(firstPdfPage);
      this._optionalContentConfigPromise = optionalContentConfigPromise;
      const {
        annotationEditorMode,
        annotationMode,
        textLayerMode
      } = this.#initializePermissions(permissions);
      if (textLayerMode !== TextLayerMode.DISABLE) {
        const element = this.#hiddenCopyElement = document.createElement("div");
        element.id = "hiddenCopyElement";
        viewer.before(element);
      }
      if (annotationEditorMode !== AnnotationEditorType2.DISABLE) {
        const mode = annotationEditorMode;
        if (pdfDocument.isPureXfa) {
          console.warn("Warning: XFA-editing is not implemented.");
        } else if (isValidAnnotationEditorMode(mode)) {
          this.#annotationEditorUIManager = new AnnotationEditorUIManager2(this.container, viewer, this.#altTextManager, eventBus, pdfDocument, pageColors, this.#annotationEditorHighlightColors, this.#enableHighlightFloatingButton, this.#enableUpdatedAddImage, this.#mlManager);
          eventBus.dispatch("annotationeditoruimanager", {
            source: this,
            uiManager: this.#annotationEditorUIManager
          });
          if (mode !== AnnotationEditorType2.NONE) {
            this.#annotationEditorUIManager.updateMode(mode);
          }
        } else {
          console.error(`Invalid AnnotationEditor mode: ${mode}`);
        }
      }
      const viewerElement = this._scrollMode === ScrollMode.PAGE ? null : viewer;
      const scale = this.currentScale;
      const viewport = firstPdfPage.getViewport({
        scale: scale * PixelsPerInch2.PDF_TO_CSS_UNITS
      });
      viewer.style.setProperty("--scale-factor", viewport.scale);
      if (pageColors?.foreground === "CanvasText" || pageColors?.background === "Canvas") {
        viewer.style.setProperty("--hcm-highlight-filter", pdfDocument.filterFactory.addHighlightHCMFilter("highlight", "CanvasText", "Canvas", "HighlightText", "Highlight"));
        viewer.style.setProperty("--hcm-highlight-selected-filter", pdfDocument.filterFactory.addHighlightHCMFilter("highlight_selected", "CanvasText", "Canvas", "HighlightText", "ButtonText"));
      }
      for (let pageNum = 1; pageNum <= pagesCount; ++pageNum) {
        const pageView = new PDFPageView({
          container: viewerElement,
          eventBus,
          id: pageNum,
          scale,
          defaultViewport: viewport.clone(),
          optionalContentConfigPromise,
          renderingQueue: this.renderingQueue,
          textLayerMode,
          annotationMode,
          imageResourcesPath: this.imageResourcesPath,
          maxCanvasPixels: this.maxCanvasPixels,
          pageColors,
          l10n: this.l10n,
          layerProperties: this._layerProperties,
          enableHWA: this.#enableHWA
        });
        this._pages.push(pageView);
      }
      this._pages[0]?.setPdfPage(firstPdfPage);
      if (this._scrollMode === ScrollMode.PAGE) {
        this.#ensurePageViewVisible();
      } else if (this._spreadMode !== SpreadMode.NONE) {
        this._updateSpreadMode();
      }
      this.#onePageRenderedOrForceFetch(signal).then(async () => {
        if (pdfDocument !== this.pdfDocument) {
          return;
        }
        this.findController?.setDocument(pdfDocument);
        this._scriptingManager?.setDocument(pdfDocument);
        if (this.#hiddenCopyElement) {
          document.addEventListener("copy", this.#copyCallback.bind(this, textLayerMode), {
            signal
          });
        }
        if (this.#annotationEditorUIManager) {
          eventBus.dispatch("annotationeditormodechanged", {
            source: this,
            mode: this.#annotationEditorMode
          });
        }
        if (pdfDocument.loadingParams.disableAutoFetch || pagesCount > PagesCountLimit.FORCE_LAZY_PAGE_INIT) {
          this._pagesCapability.resolve();
          return;
        }
        let getPagesLeft = pagesCount - 1;
        if (getPagesLeft <= 0) {
          this._pagesCapability.resolve();
          return;
        }
        for (let pageNum = 2; pageNum <= pagesCount; ++pageNum) {
          const promise = pdfDocument.getPage(pageNum).then((pdfPage) => {
            const pageView = this._pages[pageNum - 1];
            if (!pageView.pdfPage) {
              pageView.setPdfPage(pdfPage);
            }
            if (--getPagesLeft === 0) {
              this._pagesCapability.resolve();
            }
          }, (reason) => {
            console.error(`Unable to get page ${pageNum} to initialize viewer`, reason);
            if (--getPagesLeft === 0) {
              this._pagesCapability.resolve();
            }
          });
          if (pageNum % PagesCountLimit.PAUSE_EAGER_PAGE_INIT === 0) {
            await promise;
          }
        }
      });
      eventBus.dispatch("pagesinit", {
        source: this
      });
      pdfDocument.getMetadata().then(({
        info: info2
      }) => {
        if (pdfDocument !== this.pdfDocument) {
          return;
        }
        if (info2.Language) {
          viewer.lang = info2.Language;
        }
      });
      if (this.defaultRenderingQueue) {
        this.update();
      }
    }).catch((reason) => {
      console.error("Unable to initialize viewer", reason);
      this._pagesCapability.reject(reason);
    });
  }
  setPageLabels(labels) {
    if (!this.pdfDocument) {
      return;
    }
    if (!labels) {
      this._pageLabels = null;
    } else if (!(Array.isArray(labels) && this.pdfDocument.numPages === labels.length)) {
      this._pageLabels = null;
      console.error(`setPageLabels: Invalid page labels.`);
    } else {
      this._pageLabels = labels;
    }
    for (let i = 0, ii = this._pages.length; i < ii; i++) {
      this._pages[i].setPageLabel(this._pageLabels?.[i] ?? null);
    }
  }
  _resetView() {
    this._pages = [];
    this._currentPageNumber = 1;
    this._currentScale = UNKNOWN_SCALE;
    this._currentScaleValue = null;
    this._pageLabels = null;
    this.#buffer = new PDFPageViewBuffer(DEFAULT_CACHE_SIZE);
    this._location = null;
    this._pagesRotation = 0;
    this._optionalContentConfigPromise = null;
    this._firstPageCapability = Promise.withResolvers();
    this._onePageRenderedCapability = Promise.withResolvers();
    this._pagesCapability = Promise.withResolvers();
    this._scrollMode = ScrollMode.VERTICAL;
    this._previousScrollMode = ScrollMode.UNKNOWN;
    this._spreadMode = SpreadMode.NONE;
    this.#scrollModePageState = {
      previousPageNumber: 1,
      scrollDown: true,
      pages: []
    };
    this.#eventAbortController?.abort();
    this.#eventAbortController = null;
    this.viewer.textContent = "";
    this._updateScrollMode();
    this.viewer.removeAttribute("lang");
    this.#hiddenCopyElement?.remove();
    this.#hiddenCopyElement = null;
    this.#cleanupSwitchAnnotationEditorMode();
  }
  #ensurePageViewVisible() {
    if (this._scrollMode !== ScrollMode.PAGE) {
      throw new Error("#ensurePageViewVisible: Invalid scrollMode value.");
    }
    const pageNumber = this._currentPageNumber, state = this.#scrollModePageState, viewer = this.viewer;
    viewer.textContent = "";
    state.pages.length = 0;
    if (this._spreadMode === SpreadMode.NONE && !this.isInPresentationMode) {
      const pageView = this._pages[pageNumber - 1];
      viewer.append(pageView.div);
      state.pages.push(pageView);
    } else {
      const pageIndexSet = /* @__PURE__ */ new Set(), parity = this._spreadMode - 1;
      if (parity === -1) {
        pageIndexSet.add(pageNumber - 1);
      } else if (pageNumber % 2 !== parity) {
        pageIndexSet.add(pageNumber - 1);
        pageIndexSet.add(pageNumber);
      } else {
        pageIndexSet.add(pageNumber - 2);
        pageIndexSet.add(pageNumber - 1);
      }
      const spread = document.createElement("div");
      spread.className = "spread";
      if (this.isInPresentationMode) {
        const dummyPage = document.createElement("div");
        dummyPage.className = "dummyPage";
        spread.append(dummyPage);
      }
      for (const i of pageIndexSet) {
        const pageView = this._pages[i];
        if (!pageView) {
          continue;
        }
        spread.append(pageView.div);
        state.pages.push(pageView);
      }
      viewer.append(spread);
    }
    state.scrollDown = pageNumber >= state.previousPageNumber;
    state.previousPageNumber = pageNumber;
  }
  _scrollUpdate() {
    if (this.pagesCount === 0) {
      return;
    }
    this.update();
  }
  #scrollIntoView(pageView, pageSpot = null) {
    const {
      div,
      id
    } = pageView;
    if (this._currentPageNumber !== id) {
      this._setCurrentPageNumber(id);
    }
    if (this._scrollMode === ScrollMode.PAGE) {
      this.#ensurePageViewVisible();
      this.update();
    }
    if (!pageSpot && !this.isInPresentationMode) {
      const left = div.offsetLeft + div.clientLeft, right = left + div.clientWidth;
      const {
        scrollLeft,
        clientWidth
      } = this.container;
      if (this._scrollMode === ScrollMode.HORIZONTAL || left < scrollLeft || right > scrollLeft + clientWidth) {
        pageSpot = {
          left: 0,
          top: 0
        };
      }
    }
    scrollIntoView(div, pageSpot);
    if (!this._currentScaleValue && this._location) {
      this._location = null;
    }
  }
  #isSameScale(newScale) {
    return newScale === this._currentScale || Math.abs(newScale - this._currentScale) < 1e-15;
  }
  #setScaleUpdatePages(newScale, newValue, {
    noScroll = false,
    preset = false,
    drawingDelay = -1,
    origin = null
  }) {
    this._currentScaleValue = newValue.toString();
    if (this.#isSameScale(newScale)) {
      if (preset) {
        this.eventBus.dispatch("scalechanging", {
          source: this,
          scale: newScale,
          presetValue: newValue
        });
      }
      return;
    }
    this.viewer.style.setProperty("--scale-factor", newScale * PixelsPerInch2.PDF_TO_CSS_UNITS);
    const postponeDrawing = drawingDelay >= 0 && drawingDelay < 1e3;
    this.refresh(true, {
      scale: newScale,
      drawingDelay: postponeDrawing ? drawingDelay : -1
    });
    if (postponeDrawing) {
      this.#scaleTimeoutId = setTimeout(() => {
        this.#scaleTimeoutId = null;
        this.refresh();
      }, drawingDelay);
    }
    const previousScale = this._currentScale;
    this._currentScale = newScale;
    if (!noScroll) {
      let page = this._currentPageNumber, dest;
      if (this._location && !(this.isInPresentationMode || this.isChangingPresentationMode)) {
        page = this._location.pageNumber;
        dest = [null, {
          name: "XYZ"
        }, this._location.left, this._location.top, null];
      }
      this.scrollPageIntoView({
        pageNumber: page,
        destArray: dest,
        allowNegativeOffset: true
      });
      if (Array.isArray(origin)) {
        const scaleDiff = newScale / previousScale - 1;
        const [top, left] = this.containerTopLeft;
        this.container.scrollLeft += (origin[0] - left) * scaleDiff;
        this.container.scrollTop += (origin[1] - top) * scaleDiff;
      }
    }
    this.eventBus.dispatch("scalechanging", {
      source: this,
      scale: newScale,
      presetValue: preset ? newValue : void 0
    });
    if (this.defaultRenderingQueue) {
      this.update();
    }
  }
  get #pageWidthScaleFactor() {
    if (this._spreadMode !== SpreadMode.NONE && this._scrollMode !== ScrollMode.HORIZONTAL) {
      return 2;
    }
    return 1;
  }
  #setScale(value, options) {
    let scale = parseFloat(value);
    if (scale > 0) {
      options.preset = false;
      this.#setScaleUpdatePages(scale, value, options);
    } else {
      const currentPage = this._pages[this._currentPageNumber - 1];
      if (!currentPage) {
        return;
      }
      let hPadding = SCROLLBAR_PADDING, vPadding = VERTICAL_PADDING;
      if (this.isInPresentationMode) {
        hPadding = vPadding = 4;
        if (this._spreadMode !== SpreadMode.NONE) {
          hPadding *= 2;
        }
      } else if (this.removePageBorders) {
        hPadding = vPadding = 0;
      } else if (this._scrollMode === ScrollMode.HORIZONTAL) {
        [hPadding, vPadding] = [vPadding, hPadding];
      }
      const pageWidthScale = (this.container.clientWidth - hPadding) / currentPage.width * currentPage.scale / this.#pageWidthScaleFactor;
      const pageHeightScale = (this.container.clientHeight - vPadding) / currentPage.height * currentPage.scale;
      switch (value) {
        case "page-actual":
          scale = 1;
          break;
        case "page-width":
          scale = pageWidthScale;
          break;
        case "page-height":
          scale = pageHeightScale;
          break;
        case "page-fit":
          scale = Math.min(pageWidthScale, pageHeightScale);
          break;
        case "auto":
          const horizontalScale = isPortraitOrientation(currentPage) ? pageWidthScale : Math.min(pageHeightScale, pageWidthScale);
          scale = Math.min(MAX_AUTO_SCALE, horizontalScale);
          break;
        default:
          console.error(`#setScale: "${value}" is an unknown zoom value.`);
          return;
      }
      options.preset = true;
      this.#setScaleUpdatePages(scale, value, options);
    }
  }
  #resetCurrentPageView() {
    const pageView = this._pages[this._currentPageNumber - 1];
    if (this.isInPresentationMode) {
      this.#setScale(this._currentScaleValue, {
        noScroll: true
      });
    }
    this.#scrollIntoView(pageView);
  }
  pageLabelToPageNumber(label) {
    if (!this._pageLabels) {
      return null;
    }
    const i = this._pageLabels.indexOf(label);
    if (i < 0) {
      return null;
    }
    return i + 1;
  }
  scrollPageIntoView({
    pageNumber,
    destArray = null,
    allowNegativeOffset = false,
    ignoreDestinationZoom = false
  }) {
    if (!this.pdfDocument) {
      return;
    }
    const pageView = Number.isInteger(pageNumber) && this._pages[pageNumber - 1];
    if (!pageView) {
      console.error(`scrollPageIntoView: "${pageNumber}" is not a valid pageNumber parameter.`);
      return;
    }
    if (this.isInPresentationMode || !destArray) {
      this._setCurrentPageNumber(pageNumber, true);
      return;
    }
    let x = 0, y = 0;
    let width = 0, height = 0, widthScale, heightScale;
    const changeOrientation = pageView.rotation % 180 !== 0;
    const pageWidth = (changeOrientation ? pageView.height : pageView.width) / pageView.scale / PixelsPerInch2.PDF_TO_CSS_UNITS;
    const pageHeight = (changeOrientation ? pageView.width : pageView.height) / pageView.scale / PixelsPerInch2.PDF_TO_CSS_UNITS;
    let scale = 0;
    switch (destArray[1].name) {
      case "XYZ":
        x = destArray[2];
        y = destArray[3];
        scale = destArray[4];
        x = x !== null ? x : 0;
        y = y !== null ? y : pageHeight;
        break;
      case "Fit":
      case "FitB":
        scale = "page-fit";
        break;
      case "FitH":
      case "FitBH":
        y = destArray[2];
        scale = "page-width";
        if (y === null && this._location) {
          x = this._location.left;
          y = this._location.top;
        } else if (typeof y !== "number" || y < 0) {
          y = pageHeight;
        }
        break;
      case "FitV":
      case "FitBV":
        x = destArray[2];
        width = pageWidth;
        height = pageHeight;
        scale = "page-height";
        break;
      case "FitR":
        x = destArray[2];
        y = destArray[3];
        width = destArray[4] - x;
        height = destArray[5] - y;
        let hPadding = SCROLLBAR_PADDING, vPadding = VERTICAL_PADDING;
        if (this.removePageBorders) {
          hPadding = vPadding = 0;
        }
        widthScale = (this.container.clientWidth - hPadding) / width / PixelsPerInch2.PDF_TO_CSS_UNITS;
        heightScale = (this.container.clientHeight - vPadding) / height / PixelsPerInch2.PDF_TO_CSS_UNITS;
        scale = Math.min(Math.abs(widthScale), Math.abs(heightScale));
        break;
      default:
        console.error(`scrollPageIntoView: "${destArray[1].name}" is not a valid destination type.`);
        return;
    }
    if (!ignoreDestinationZoom) {
      if (scale && scale !== this._currentScale) {
        this.currentScaleValue = scale;
      } else if (this._currentScale === UNKNOWN_SCALE) {
        this.currentScaleValue = DEFAULT_SCALE_VALUE;
      }
    }
    if (scale === "page-fit" && !destArray[4]) {
      this.#scrollIntoView(pageView);
      return;
    }
    const boundingRect = [pageView.viewport.convertToViewportPoint(x, y), pageView.viewport.convertToViewportPoint(x + width, y + height)];
    let left = Math.min(boundingRect[0][0], boundingRect[1][0]);
    let top = Math.min(boundingRect[0][1], boundingRect[1][1]);
    if (!allowNegativeOffset) {
      left = Math.max(left, 0);
      top = Math.max(top, 0);
    }
    this.#scrollIntoView(pageView, {
      left,
      top
    });
  }
  _updateLocation(firstPage) {
    const currentScale = this._currentScale;
    const currentScaleValue = this._currentScaleValue;
    const normalizedScaleValue = parseFloat(currentScaleValue) === currentScale ? Math.round(currentScale * 1e4) / 100 : currentScaleValue;
    const pageNumber = firstPage.id;
    const currentPageView = this._pages[pageNumber - 1];
    const container = this.container;
    const topLeft = currentPageView.getPagePoint(container.scrollLeft - firstPage.x, container.scrollTop - firstPage.y);
    const intLeft = Math.round(topLeft[0]);
    const intTop = Math.round(topLeft[1]);
    let pdfOpenParams = `#page=${pageNumber}`;
    if (!this.isInPresentationMode) {
      pdfOpenParams += `&zoom=${normalizedScaleValue},${intLeft},${intTop}`;
    }
    this._location = {
      pageNumber,
      scale: normalizedScaleValue,
      top: intTop,
      left: intLeft,
      rotation: this._pagesRotation,
      pdfOpenParams
    };
  }
  update() {
    const visible = this._getVisiblePages();
    const visiblePages = visible.views, numVisiblePages = visiblePages.length;
    if (numVisiblePages === 0) {
      return;
    }
    const newCacheSize = Math.max(DEFAULT_CACHE_SIZE, 2 * numVisiblePages + 1);
    this.#buffer.resize(newCacheSize, visible.ids);
    this.renderingQueue.renderHighestPriority(visible);
    const isSimpleLayout = this._spreadMode === SpreadMode.NONE && (this._scrollMode === ScrollMode.PAGE || this._scrollMode === ScrollMode.VERTICAL);
    const currentId = this._currentPageNumber;
    let stillFullyVisible = false;
    for (const page of visiblePages) {
      if (page.percent < 100) {
        break;
      }
      if (page.id === currentId && isSimpleLayout) {
        stillFullyVisible = true;
        break;
      }
    }
    this._setCurrentPageNumber(stillFullyVisible ? currentId : visiblePages[0].id);
    this._updateLocation(visible.first);
    this.eventBus.dispatch("updateviewarea", {
      source: this,
      location: this._location
    });
  }
  #switchToEditAnnotationMode() {
    const visible = this._getVisiblePages();
    const pagesToRefresh = [];
    const {
      ids,
      views
    } = visible;
    for (const page of views) {
      const {
        view
      } = page;
      if (!view.hasEditableAnnotations()) {
        ids.delete(view.id);
        continue;
      }
      pagesToRefresh.push(page);
    }
    if (pagesToRefresh.length === 0) {
      return null;
    }
    this.renderingQueue.renderHighestPriority({
      first: pagesToRefresh[0],
      last: pagesToRefresh.at(-1),
      views: pagesToRefresh,
      ids
    });
    return ids;
  }
  containsElement(element) {
    return this.container.contains(element);
  }
  focus() {
    this.container.focus();
  }
  get _isContainerRtl() {
    return getComputedStyle(this.container).direction === "rtl";
  }
  get isInPresentationMode() {
    return this.presentationModeState === PresentationModeState.FULLSCREEN;
  }
  get isChangingPresentationMode() {
    return this.presentationModeState === PresentationModeState.CHANGING;
  }
  get isHorizontalScrollbarEnabled() {
    return this.isInPresentationMode ? false : this.container.scrollWidth > this.container.clientWidth;
  }
  get isVerticalScrollbarEnabled() {
    return this.isInPresentationMode ? false : this.container.scrollHeight > this.container.clientHeight;
  }
  _getVisiblePages() {
    const views = this._scrollMode === ScrollMode.PAGE ? this.#scrollModePageState.pages : this._pages, horizontal = this._scrollMode === ScrollMode.HORIZONTAL, rtl = horizontal && this._isContainerRtl;
    return getVisibleElements({
      scrollEl: this.container,
      views,
      sortByVisibility: true,
      horizontal,
      rtl
    });
  }
  cleanup() {
    for (const pageView of this._pages) {
      if (pageView.renderingState !== RenderingStates.FINISHED) {
        pageView.reset();
      }
    }
  }
  _cancelRendering() {
    for (const pageView of this._pages) {
      pageView.cancelRendering();
    }
  }
  async #ensurePdfPageLoaded(pageView) {
    if (pageView.pdfPage) {
      return pageView.pdfPage;
    }
    try {
      const pdfPage = await this.pdfDocument.getPage(pageView.id);
      if (!pageView.pdfPage) {
        pageView.setPdfPage(pdfPage);
      }
      return pdfPage;
    } catch (reason) {
      console.error("Unable to get page for page view", reason);
      return null;
    }
  }
  #getScrollAhead(visible) {
    if (visible.first?.id === 1) {
      return true;
    } else if (visible.last?.id === this.pagesCount) {
      return false;
    }
    switch (this._scrollMode) {
      case ScrollMode.PAGE:
        return this.#scrollModePageState.scrollDown;
      case ScrollMode.HORIZONTAL:
        return this.scroll.right;
    }
    return this.scroll.down;
  }
  forceRendering(currentlyVisiblePages) {
    const visiblePages = currentlyVisiblePages || this._getVisiblePages();
    const scrollAhead = this.#getScrollAhead(visiblePages);
    const preRenderExtra = this._spreadMode !== SpreadMode.NONE && this._scrollMode !== ScrollMode.HORIZONTAL;
    const pageView = this.renderingQueue.getHighestPriority(visiblePages, this._pages, scrollAhead, preRenderExtra);
    if (pageView) {
      this.#ensurePdfPageLoaded(pageView).then(() => {
        this.renderingQueue.renderView(pageView);
      });
      return true;
    }
    return false;
  }
  get hasEqualPageSizes() {
    const firstPageView = this._pages[0];
    for (let i = 1, ii = this._pages.length; i < ii; ++i) {
      const pageView = this._pages[i];
      if (pageView.width !== firstPageView.width || pageView.height !== firstPageView.height) {
        return false;
      }
    }
    return true;
  }
  getPagesOverview() {
    let initialOrientation;
    return this._pages.map((pageView) => {
      const viewport = pageView.pdfPage.getViewport({
        scale: 1
      });
      const orientation = isPortraitOrientation(viewport);
      if (initialOrientation === void 0) {
        initialOrientation = orientation;
      } else if (this.enablePrintAutoRotate && orientation !== initialOrientation) {
        return {
          width: viewport.height,
          height: viewport.width,
          rotation: (viewport.rotation - 90) % 360
        };
      }
      return {
        width: viewport.width,
        height: viewport.height,
        rotation: viewport.rotation
      };
    });
  }
  get optionalContentConfigPromise() {
    if (!this.pdfDocument) {
      return Promise.resolve(null);
    }
    if (!this._optionalContentConfigPromise) {
      console.error("optionalContentConfigPromise: Not initialized yet.");
      return this.pdfDocument.getOptionalContentConfig({
        intent: "display"
      });
    }
    return this._optionalContentConfigPromise;
  }
  set optionalContentConfigPromise(promise) {
    if (!(promise instanceof Promise)) {
      throw new Error(`Invalid optionalContentConfigPromise: ${promise}`);
    }
    if (!this.pdfDocument) {
      return;
    }
    if (!this._optionalContentConfigPromise) {
      return;
    }
    this._optionalContentConfigPromise = promise;
    this.refresh(false, {
      optionalContentConfigPromise: promise
    });
    this.eventBus.dispatch("optionalcontentconfigchanged", {
      source: this,
      promise
    });
  }
  get scrollMode() {
    return this._scrollMode;
  }
  set scrollMode(mode) {
    if (this._scrollMode === mode) {
      return;
    }
    if (!isValidScrollMode(mode)) {
      throw new Error(`Invalid scroll mode: ${mode}`);
    }
    if (this.pagesCount > PagesCountLimit.FORCE_SCROLL_MODE_PAGE) {
      return;
    }
    this._previousScrollMode = this._scrollMode;
    this._scrollMode = mode;
    this.eventBus.dispatch("scrollmodechanged", {
      source: this,
      mode
    });
    this._updateScrollMode(this._currentPageNumber);
  }
  _updateScrollMode(pageNumber = null) {
    const scrollMode = this._scrollMode, viewer = this.viewer;
    viewer.classList.toggle("scrollHorizontal", scrollMode === ScrollMode.HORIZONTAL);
    viewer.classList.toggle("scrollWrapped", scrollMode === ScrollMode.WRAPPED);
    if (!this.pdfDocument || !pageNumber) {
      return;
    }
    if (scrollMode === ScrollMode.PAGE) {
      this.#ensurePageViewVisible();
    } else if (this._previousScrollMode === ScrollMode.PAGE) {
      this._updateSpreadMode();
    }
    if (this._currentScaleValue && isNaN(this._currentScaleValue)) {
      this.#setScale(this._currentScaleValue, {
        noScroll: true
      });
    }
    this._setCurrentPageNumber(pageNumber, true);
    this.update();
  }
  get spreadMode() {
    return this._spreadMode;
  }
  set spreadMode(mode) {
    if (this._spreadMode === mode) {
      return;
    }
    if (!isValidSpreadMode(mode)) {
      throw new Error(`Invalid spread mode: ${mode}`);
    }
    this._spreadMode = mode;
    this.eventBus.dispatch("spreadmodechanged", {
      source: this,
      mode
    });
    this._updateSpreadMode(this._currentPageNumber);
  }
  _updateSpreadMode(pageNumber = null) {
    if (!this.pdfDocument) {
      return;
    }
    const viewer = this.viewer, pages2 = this._pages;
    if (this._scrollMode === ScrollMode.PAGE) {
      this.#ensurePageViewVisible();
    } else {
      viewer.textContent = "";
      if (this._spreadMode === SpreadMode.NONE) {
        for (const pageView of this._pages) {
          viewer.append(pageView.div);
        }
      } else {
        const parity = this._spreadMode - 1;
        let spread = null;
        for (let i = 0, ii = pages2.length; i < ii; ++i) {
          if (spread === null) {
            spread = document.createElement("div");
            spread.className = "spread";
            viewer.append(spread);
          } else if (i % 2 === parity) {
            spread = spread.cloneNode(false);
            viewer.append(spread);
          }
          spread.append(pages2[i].div);
        }
      }
    }
    if (!pageNumber) {
      return;
    }
    if (this._currentScaleValue && isNaN(this._currentScaleValue)) {
      this.#setScale(this._currentScaleValue, {
        noScroll: true
      });
    }
    this._setCurrentPageNumber(pageNumber, true);
    this.update();
  }
  _getPageAdvance(currentPageNumber, previous = false) {
    switch (this._scrollMode) {
      case ScrollMode.WRAPPED: {
        const {
          views
        } = this._getVisiblePages(), pageLayout = /* @__PURE__ */ new Map();
        for (const {
          id,
          y,
          percent,
          widthPercent
        } of views) {
          if (percent === 0 || widthPercent < 100) {
            continue;
          }
          let yArray = pageLayout.get(y);
          if (!yArray) {
            pageLayout.set(y, yArray ||= []);
          }
          yArray.push(id);
        }
        for (const yArray of pageLayout.values()) {
          const currentIndex = yArray.indexOf(currentPageNumber);
          if (currentIndex === -1) {
            continue;
          }
          const numPages = yArray.length;
          if (numPages === 1) {
            break;
          }
          if (previous) {
            for (let i = currentIndex - 1, ii = 0; i >= ii; i--) {
              const currentId = yArray[i], expectedId = yArray[i + 1] - 1;
              if (currentId < expectedId) {
                return currentPageNumber - expectedId;
              }
            }
          } else {
            for (let i = currentIndex + 1, ii = numPages; i < ii; i++) {
              const currentId = yArray[i], expectedId = yArray[i - 1] + 1;
              if (currentId > expectedId) {
                return expectedId - currentPageNumber;
              }
            }
          }
          if (previous) {
            const firstId = yArray[0];
            if (firstId < currentPageNumber) {
              return currentPageNumber - firstId + 1;
            }
          } else {
            const lastId = yArray[numPages - 1];
            if (lastId > currentPageNumber) {
              return lastId - currentPageNumber + 1;
            }
          }
          break;
        }
        break;
      }
      case ScrollMode.HORIZONTAL: {
        break;
      }
      case ScrollMode.PAGE:
      case ScrollMode.VERTICAL: {
        if (this._spreadMode === SpreadMode.NONE) {
          break;
        }
        const parity = this._spreadMode - 1;
        if (previous && currentPageNumber % 2 !== parity) {
          break;
        } else if (!previous && currentPageNumber % 2 === parity) {
          break;
        }
        const {
          views
        } = this._getVisiblePages(), expectedId = previous ? currentPageNumber - 1 : currentPageNumber + 1;
        for (const {
          id,
          percent,
          widthPercent
        } of views) {
          if (id !== expectedId) {
            continue;
          }
          if (percent > 0 && widthPercent === 100) {
            return 2;
          }
          break;
        }
        break;
      }
    }
    return 1;
  }
  nextPage() {
    const currentPageNumber = this._currentPageNumber, pagesCount = this.pagesCount;
    if (currentPageNumber >= pagesCount) {
      return false;
    }
    const advance = this._getPageAdvance(currentPageNumber, false) || 1;
    this.currentPageNumber = Math.min(currentPageNumber + advance, pagesCount);
    return true;
  }
  previousPage() {
    const currentPageNumber = this._currentPageNumber;
    if (currentPageNumber <= 1) {
      return false;
    }
    const advance = this._getPageAdvance(currentPageNumber, true) || 1;
    this.currentPageNumber = Math.max(currentPageNumber - advance, 1);
    return true;
  }
  updateScale({
    drawingDelay,
    scaleFactor = null,
    steps = null,
    origin
  }) {
    if (steps === null && scaleFactor === null) {
      throw new Error("Invalid updateScale options: either `steps` or `scaleFactor` must be provided.");
    }
    if (!this.pdfDocument) {
      return;
    }
    let newScale = this._currentScale;
    if (scaleFactor > 0 && scaleFactor !== 1) {
      newScale = Math.round(newScale * scaleFactor * 100) / 100;
    } else if (steps) {
      const delta = steps > 0 ? DEFAULT_SCALE_DELTA : 1 / DEFAULT_SCALE_DELTA;
      const round = steps > 0 ? Math.ceil : Math.floor;
      steps = Math.abs(steps);
      do {
        newScale = round((newScale * delta).toFixed(2) * 10) / 10;
      } while (--steps > 0);
    }
    newScale = Math.max(MIN_SCALE, Math.min(MAX_SCALE, newScale));
    this.#setScale(newScale, {
      noScroll: false,
      drawingDelay,
      origin
    });
  }
  increaseScale(options = {}) {
    this.updateScale({
      ...options,
      steps: options.steps ?? 1
    });
  }
  decreaseScale(options = {}) {
    this.updateScale({
      ...options,
      steps: -(options.steps ?? 1)
    });
  }
  #updateContainerHeightCss(height = this.container.clientHeight) {
    if (height !== this.#previousContainerHeight) {
      this.#previousContainerHeight = height;
      docStyle.setProperty("--viewer-container-height", `${height}px`);
    }
  }
  #resizeObserverCallback(entries) {
    for (const entry of entries) {
      if (entry.target === this.container) {
        this.#updateContainerHeightCss(Math.floor(entry.borderBoxSize[0].blockSize));
        this.#containerTopLeft = null;
        break;
      }
    }
  }
  get containerTopLeft() {
    return this.#containerTopLeft ||= [this.container.offsetTop, this.container.offsetLeft];
  }
  #cleanupSwitchAnnotationEditorMode() {
    if (this.#onPageRenderedCallback) {
      this.eventBus._off("pagerendered", this.#onPageRenderedCallback);
      this.#onPageRenderedCallback = null;
    }
    if (this.#switchAnnotationEditorModeTimeoutId !== null) {
      clearTimeout(this.#switchAnnotationEditorModeTimeoutId);
      this.#switchAnnotationEditorModeTimeoutId = null;
    }
  }
  get annotationEditorMode() {
    return this.#annotationEditorUIManager ? this.#annotationEditorMode : AnnotationEditorType2.DISABLE;
  }
  set annotationEditorMode({
    mode,
    editId = null,
    isFromKeyboard = false
  }) {
    if (!this.#annotationEditorUIManager) {
      throw new Error(`The AnnotationEditor is not enabled.`);
    }
    if (this.#annotationEditorMode === mode) {
      return;
    }
    if (!isValidAnnotationEditorMode(mode)) {
      throw new Error(`Invalid AnnotationEditor mode: ${mode}`);
    }
    if (!this.pdfDocument) {
      return;
    }
    const {
      eventBus
    } = this;
    const updater = () => {
      this.#cleanupSwitchAnnotationEditorMode();
      this.#annotationEditorMode = mode;
      this.#annotationEditorUIManager.updateMode(mode, editId, isFromKeyboard);
      eventBus.dispatch("annotationeditormodechanged", {
        source: this,
        mode
      });
    };
    if (mode === AnnotationEditorType2.NONE || this.#annotationEditorMode === AnnotationEditorType2.NONE) {
      const isEditing = mode !== AnnotationEditorType2.NONE;
      if (!isEditing) {
        this.pdfDocument.annotationStorage.resetModifiedIds();
      }
      for (const pageView of this._pages) {
        pageView.toggleEditingMode(isEditing);
      }
      const idsToRefresh = this.#switchToEditAnnotationMode();
      if (isEditing && idsToRefresh) {
        this.#cleanupSwitchAnnotationEditorMode();
        this.#onPageRenderedCallback = ({
          pageNumber
        }) => {
          idsToRefresh.delete(pageNumber);
          if (idsToRefresh.size === 0) {
            this.#switchAnnotationEditorModeTimeoutId = setTimeout(updater, 0);
          }
        };
        const {
          signal
        } = this.#eventAbortController;
        eventBus._on("pagerendered", this.#onPageRenderedCallback, {
          signal
        });
        return;
      }
    }
    updater();
  }
  set annotationEditorParams({
    type,
    value
  }) {
    if (!this.#annotationEditorUIManager) {
      throw new Error(`The AnnotationEditor is not enabled.`);
    }
    this.#annotationEditorUIManager.updateParams(type, value);
  }
  refresh(noUpdate = false, updateArgs = /* @__PURE__ */ Object.create(null)) {
    if (!this.pdfDocument) {
      return;
    }
    for (const pageView of this._pages) {
      pageView.update(updateArgs);
    }
    if (this.#scaleTimeoutId !== null) {
      clearTimeout(this.#scaleTimeoutId);
      this.#scaleTimeoutId = null;
    }
    if (!noUpdate) {
      this.update();
    }
  }
};
var PDFSinglePageViewer = class extends PDFViewer {
  _resetView() {
    super._resetView();
    this._scrollMode = ScrollMode.PAGE;
    this._spreadMode = SpreadMode.NONE;
  }
  set scrollMode(mode) {
  }
  _updateScrollMode() {
  }
  set spreadMode(mode) {
  }
  _updateSpreadMode() {
  }
};
var __webpack_exports__AnnotationLayerBuilder = __webpack_exports__2.AnnotationLayerBuilder;
var __webpack_exports__DownloadManager = __webpack_exports__2.DownloadManager;
var __webpack_exports__EventBus = __webpack_exports__2.EventBus;
var __webpack_exports__FindState = __webpack_exports__2.FindState;
var __webpack_exports__GenericL10n = __webpack_exports__2.GenericL10n;
var __webpack_exports__LinkTarget = __webpack_exports__2.LinkTarget;
var __webpack_exports__PDFFindController = __webpack_exports__2.PDFFindController;
var __webpack_exports__PDFHistory = __webpack_exports__2.PDFHistory;
var __webpack_exports__PDFLinkService = __webpack_exports__2.PDFLinkService;
var __webpack_exports__PDFPageView = __webpack_exports__2.PDFPageView;
var __webpack_exports__PDFScriptingManager = __webpack_exports__2.PDFScriptingManager;
var __webpack_exports__PDFSinglePageViewer = __webpack_exports__2.PDFSinglePageViewer;
var __webpack_exports__PDFViewer = __webpack_exports__2.PDFViewer;
var __webpack_exports__ProgressBar = __webpack_exports__2.ProgressBar;
var __webpack_exports__RenderingStates = __webpack_exports__2.RenderingStates;
var __webpack_exports__ScrollMode = __webpack_exports__2.ScrollMode;
var __webpack_exports__SimpleLinkService = __webpack_exports__2.SimpleLinkService;
var __webpack_exports__SpreadMode = __webpack_exports__2.SpreadMode;
var __webpack_exports__StructTreeLayerBuilder = __webpack_exports__2.StructTreeLayerBuilder;
var __webpack_exports__TextLayerBuilder = __webpack_exports__2.TextLayerBuilder;
var __webpack_exports__XfaLayerBuilder = __webpack_exports__2.XfaLayerBuilder;
var __webpack_exports__parseQueryString = __webpack_exports__2.parseQueryString;

// src/viewer/pdf-app.ts
function createPdfApp(container) {
  __webpack_exports__GlobalWorkerOptions.workerSrc = chrome.runtime.getURL("pdfjs/pdf.worker.mjs");
  const eventBus = new __webpack_exports__EventBus();
  const linkService = new __webpack_exports__PDFLinkService({ eventBus });
  const findController = new __webpack_exports__PDFFindController({ eventBus, linkService });
  const pdfViewer = new __webpack_exports__PDFViewer({ container, eventBus, linkService, findController });
  linkService.setViewer(pdfViewer);
  eventBus.on("pagesinit", () => {
    pdfViewer.currentScaleValue = "auto";
  });
  return { eventBus, pdfViewer, linkService, findController, document: null };
}
async function loadDocument(app2, url, onPassword) {
  const task = __webpack_exports__getDocument({
    url,
    cMapUrl: chrome.runtime.getURL("pdfjs/cmaps/"),
    cMapPacked: true,
    standardFontDataUrl: chrome.runtime.getURL("pdfjs/standard_fonts/")
  });
  if (onPassword) {
    task.onPassword = (updatePassword, reason) => {
      void onPassword(reason === __webpack_exports__PasswordResponses.INCORRECT_PASSWORD).then(updatePassword);
    };
  }
  const doc = await task.promise;
  app2.document = doc;
  app2.pdfViewer.setDocument(doc);
  app2.linkService.setDocument(doc, null);
  return doc;
}

// src/viewer/theme/theme-engine.ts
var DEFAULT_SHADE = 0.12;
var DEFAULT_TEXT_LEVEL = 0.88;
var DARK_FILTER = "invert(1) hue-rotate(180deg) url(#pdr-tone)";
var clamp2 = (v, lo, hi) => Math.max(lo, Math.min(hi, v));
function setTone(shade, textLevel, warm) {
  const lo = clamp2(shade, 0, 0.4);
  const hi = clamp2(textLevel, 0.4, 1);
  const apply = (channel, low, high) => {
    const el = document.querySelector(`#pdr-tone ${channel}`);
    if (el) el.setAttribute("tableValues", `${low.toFixed(3)} ${high.toFixed(3)}`);
  };
  apply("feFuncR", warm ? lo + 0.04 : lo, hi);
  apply("feFuncG", lo, hi);
  apply("feFuncB", warm ? Math.max(0, lo - 0.04) : lo + 0.012, warm ? hi * 0.9 : hi);
}
var ThemeEngine = class {
  theme;
  shade;
  textLevel;
  constructor(initial, shade = DEFAULT_SHADE, textLevel = DEFAULT_TEXT_LEVEL) {
    this.theme = initial;
    this.shade = shade;
    this.textLevel = textLevel;
    this.refresh();
  }
  refresh() {
    setTone(this.shade, this.textLevel, this.theme === "warmSepia");
  }
  setTheme(theme, pages2) {
    this.theme = theme;
    this.refresh();
    for (const c of pages2) this.applyToPage(c);
  }
  /** Background darkness: lower = near-black, higher = lighter grey. */
  setShade(shade) {
    this.shade = shade;
    this.refresh();
  }
  /** Text brightness: lower = dimmer off-white, higher = brighter/whiter. */
  setTextLevel(textLevel) {
    this.textLevel = textLevel;
    this.refresh();
  }
  /** Toggling is just a style change — no re-render, no pixel work. */
  applyToPage(canvas) {
    canvas.style.filter = this.theme === "off" ? "" : DARK_FILTER;
  }
};
function getPageCanvas(evt) {
  return evt.source?.canvas ?? null;
}

// src/viewer/highlight/doc-hash.ts
async function hashPdf(bytes) {
  const head = bytes.subarray(0, 256 * 1024);
  const lenTag = new TextEncoder().encode(`:${bytes.byteLength}`);
  const buf = new Uint8Array(head.byteLength + lenTag.byteLength);
  buf.set(head, 0);
  buf.set(lenTag, head.byteLength);
  const digest = await crypto.subtle.digest("SHA-256", buf);
  return [...new Uint8Array(digest)].map((b) => b.toString(16).padStart(2, "0")).join("");
}

// src/viewer/highlight/highlight-store.ts
var PREFIX = "hl:";
function isValid(h) {
  if (typeof h !== "object" || h === null) return false;
  const x = h;
  return typeof x.id === "string" && typeof x.page === "number" && typeof x.color === "string" && Array.isArray(x.rects) && x.rects.every((r) => r && typeof r.x0 === "number" && typeof r.y0 === "number" && typeof r.x1 === "number" && typeof r.y1 === "number");
}
var HighlightStore = class {
  key(docHash2) {
    return PREFIX + docHash2;
  }
  async get(docHash2) {
    const got = await chrome.storage.local.get(this.key(docHash2));
    const raw = got[this.key(docHash2)];
    return Array.isArray(raw) ? raw.filter(isValid) : [];
  }
  async add(docHash2, h) {
    const list = await this.get(docHash2);
    list.push(h);
    await chrome.storage.local.set({ [this.key(docHash2)]: list });
  }
  async remove(docHash2, id) {
    const list = (await this.get(docHash2)).filter((h) => h.id !== id);
    await chrome.storage.local.set({ [this.key(docHash2)]: list });
  }
  async exportAll() {
    const all = await chrome.storage.local.get(null);
    const out = {};
    for (const [k, v] of Object.entries(all)) {
      if (k.startsWith(PREFIX) && Array.isArray(v)) out[k] = v.filter(isValid);
    }
    return JSON.stringify(out);
  }
  async importAll(json) {
    const parsed = JSON.parse(json);
    const toSet = {};
    for (const [k, v] of Object.entries(parsed)) {
      if (k.startsWith(PREFIX) && Array.isArray(v)) toSet[k] = v.filter(isValid);
    }
    await chrome.storage.local.set(toSet);
  }
};

// src/viewer/highlight/highlight-model.ts
function pdfRectToScreen(r, vp) {
  const left = Math.min(r.x0, r.x1) * vp.scale;
  const right = Math.max(r.x0, r.x1) * vp.scale;
  const topPdf = Math.max(r.y0, r.y1);
  const bottomPdf = Math.min(r.y0, r.y1);
  const top = (vp.pageHeightPdf - topPdf) * vp.scale;
  const bottom = (vp.pageHeightPdf - bottomPdf) * vp.scale;
  return { left, top, width: right - left, height: bottom - top };
}
function screenRectToPdf(s, vp) {
  const x0 = s.left / vp.scale;
  const x1 = (s.left + s.width) / vp.scale;
  const topPdf = vp.pageHeightPdf - s.top / vp.scale;
  const bottomPdf = vp.pageHeightPdf - (s.top + s.height) / vp.scale;
  return { x0, y0: bottomPdf, x1, y1: topPdf };
}
var COLOR_HEX = {
  yellow: "#fff27a",
  green: "#9cf08a",
  pink: "#ff9ec4",
  blue: "#8ecbff"
};

// src/viewer/highlight/highlighter.ts
var Highlighter = class {
  constructor(store2, docHash2, lookup, onChange, genId) {
    this.store = store2;
    this.docHash = docHash2;
    this.lookup = lookup;
    this.onChange = onChange;
    this.genId = genId;
  }
  color = "yellow";
  enabled = false;
  setColor(c) {
    this.color = c;
  }
  /** Call on mouseup within the viewer. */
  async captureSelection() {
    if (!this.enabled) return;
    const sel = window.getSelection();
    if (!sel || sel.isCollapsed || sel.rangeCount === 0) return;
    const range = sel.getRangeAt(0);
    const page = this.lookup(range.startContainer);
    if (!page) return;
    const pageBox = page.div.getBoundingClientRect();
    const rects = coalesceByLine([...range.getClientRects()]).map(
      (cr) => screenRectToPdf(
        { left: cr.left - pageBox.left, top: cr.top - pageBox.top, width: cr.width, height: cr.height },
        page.viewport
      )
    );
    if (rects.length === 0) return;
    const h = {
      id: this.genId(),
      page: page.pageNumber,
      color: this.color,
      createdAt: Date.now(),
      rects
    };
    await this.store.add(this.docHash(), h);
    sel.removeAllRanges();
    this.onChange(page.pageNumber);
  }
};
function coalesceByLine(rects) {
  const valid = rects.filter((r) => r.width > 1 && r.height > 1).sort((a, b) => a.top - b.top || a.left - b.left);
  const lines = [];
  for (const r of valid) {
    const cur = lines[lines.length - 1];
    const overlap = cur ? Math.min(cur.bottom, r.bottom) - Math.max(cur.top, r.top) : 0;
    if (cur && overlap > 0.5 * Math.min(cur.bottom - cur.top, r.bottom - r.top)) {
      cur.left = Math.min(cur.left, r.left);
      cur.right = Math.max(cur.right, r.right);
      cur.top = Math.min(cur.top, r.top);
      cur.bottom = Math.max(cur.bottom, r.bottom);
    } else {
      lines.push({ left: r.left, top: r.top, right: r.right, bottom: r.bottom });
    }
  }
  return lines.map((l) => ({ left: l.left, top: l.top, width: l.right - l.left, height: l.bottom - l.top }));
}
function makeId() {
  return "h_" + crypto.randomUUID();
}

// src/viewer/highlight/overlay-layer.ts
function ensureOverlay(pageDiv) {
  let el = pageDiv.querySelector(".pdr-overlay");
  if (!el) {
    el = document.createElement("div");
    el.className = "pdr-overlay";
    Object.assign(el.style, {
      position: "absolute",
      inset: "0",
      pointerEvents: "none",
      zIndex: "1"
    });
    pageDiv.appendChild(el);
  }
  return el;
}
function renderHighlights(pageDiv, highlights, vp, onClick) {
  const overlay = ensureOverlay(pageDiv);
  overlay.replaceChildren();
  for (const h of highlights) {
    for (const r of h.rects) {
      const box = pdfRectToScreen(r, vp);
      const div = document.createElement("div");
      Object.assign(div.style, {
        position: "absolute",
        left: `${box.left}px`,
        top: `${box.top}px`,
        width: `${box.width}px`,
        height: `${box.height}px`,
        // Translucent tint, not an opaque block: the page text is rasterized into
        // the canvas underneath, so the overlay must let it show through. ~0.35
        // keeps light text legible while clearly marking the colored region.
        background: COLOR_HEX[h.color],
        opacity: "0.35",
        borderRadius: "2px",
        mixBlendMode: "normal",
        pointerEvents: "auto",
        cursor: "pointer"
      });
      div.title = "Click to remove highlight";
      div.addEventListener("click", () => onClick(h.id));
      overlay.appendChild(div);
    }
  }
}

// src/viewer/ui/toolbar.ts
var THEME_CYCLE = ["smartDark", "warmSepia", "off"];
var THEME_LABEL = {
  smartDark: "\u{1F319} Smart Dark",
  warmSepia: "\u{1F7E4} Warm Sepia",
  off: "\u2600\uFE0F Off"
};
var BTN = "background:transparent;border:1px solid #ffffff1a;border-radius:6px;color:#d7d4cc;padding:3px 8px;cursor:pointer;font:13px 'Segoe UI',system-ui";
function mountToolbar(handlers, colors, initialShade, initialTextLevel) {
  const host = document.getElementById("toolbar") ?? document.body;
  let themeIdx = 0;
  const themeBtn = document.createElement("button");
  themeBtn.style.cssText = BTN;
  themeBtn.textContent = THEME_LABEL[THEME_CYCLE[0]];
  themeBtn.addEventListener("click", () => {
    themeIdx = (themeIdx + 1) % THEME_CYCLE.length;
    const t = THEME_CYCLE[themeIdx];
    themeBtn.textContent = THEME_LABEL[t];
    handlers.onTheme(t);
  });
  const makeSlider = (icon, title, min, max, value, onInput) => {
    const label = document.createElement("label");
    label.title = title;
    label.style.cssText = "display:inline-flex;align-items:center;gap:5px;margin-left:4px;opacity:.85";
    const ic = document.createElement("span");
    ic.textContent = icon;
    const sl = document.createElement("input");
    sl.type = "range";
    sl.min = String(min);
    sl.max = String(max);
    sl.step = "0.01";
    sl.value = String(value);
    sl.style.cssText = "width:72px;accent-color:#8ecbff;cursor:pointer";
    sl.addEventListener("input", () => onInput(parseFloat(sl.value)));
    label.append(ic, sl);
    return label;
  };
  const shade = makeSlider("\u25D1", "Background darkness", 0.04, 0.22, initialShade, handlers.onShade);
  const textCtl = makeSlider("A", "Text brightness", 0.6, 1, initialTextLevel, handlers.onTextLevel);
  const hlBtn = document.createElement("button");
  hlBtn.style.cssText = BTN;
  hlBtn.textContent = "\u270F\uFE0F Highlight";
  let on = false;
  hlBtn.addEventListener("click", () => {
    on = !on;
    hlBtn.style.background = on ? "#3a3d42" : "transparent";
    handlers.onToggleHighlight(on);
  });
  const swatches = document.createElement("span");
  swatches.style.cssText = "display:inline-flex;gap:4px;align-items:center;margin-left:4px";
  for (const c of colors) {
    const dot = document.createElement("button");
    dot.title = c;
    dot.style.cssText = `width:16px;height:16px;border-radius:50%;border:1px solid #0006;cursor:pointer;background:${COLOR_HEX[c]}`;
    dot.addEventListener("click", () => handlers.onColor(c));
    swatches.appendChild(dot);
  }
  host.append(themeBtn, shade, textCtl, hlBtn, swatches);
}

// src/viewer/ui/error-card.ts
var SAFE_SCHEMES = /* @__PURE__ */ new Set(["http:", "https:", "file:"]);
function toSafeUrl(url) {
  if (!url) return null;
  try {
    const u = new URL(url, location.href);
    return SAFE_SCHEMES.has(u.protocol) ? u.href : null;
  } catch {
    return null;
  }
}
function showErrorCard(message, originalUrl) {
  const card = document.createElement("div");
  card.style.cssText = "position:fixed;inset:0;display:flex;align-items:center;justify-content:center;z-index:9999;background:#1e1f22;color:#d7d4cc;font:14px 'Segoe UI',system-ui";
  const inner = document.createElement("div");
  inner.style.cssText = "max-width:420px;text-align:center;padding:24px;border:1px solid #ffffff14;border-radius:12px";
  const title = document.createElement("h2");
  title.style.cssText = "margin:0 0 8px";
  title.textContent = "Couldn't open this PDF";
  const body = document.createElement("p");
  body.style.cssText = "opacity:.8;margin:0 0 16px";
  body.textContent = message;
  inner.append(title, body);
  const retry = document.createElement("button");
  retry.textContent = "Retry";
  retry.style.cssText = "margin:0 6px;padding:6px 14px;border-radius:8px;border:0;background:#3a3d42;color:#d7d4cc;cursor:pointer";
  retry.onclick = () => location.reload();
  inner.appendChild(retry);
  const safeUrl = toSafeUrl(originalUrl);
  if (safeUrl) {
    const open = document.createElement("a");
    open.textContent = "Open original";
    open.href = safeUrl;
    open.style.cssText = "margin:0 6px;color:#8ecbff";
    inner.appendChild(open);
  }
  card.appendChild(inner);
  document.body.appendChild(card);
}

// src/viewer/ui/password-prompt.ts
function promptPassword(incorrect) {
  return new Promise((resolve) => {
    const card = document.createElement("div");
    card.style.cssText = "position:fixed;inset:0;display:flex;align-items:center;justify-content:center;z-index:9999;background:#1e1f22;color:#d7d4cc;font:14px 'Segoe UI',system-ui";
    const inner = document.createElement("div");
    inner.style.cssText = "max-width:360px;width:80%;text-align:center;padding:24px;border:1px solid #ffffff14;border-radius:12px";
    const title = document.createElement("h2");
    title.style.cssText = "margin:0 0 8px";
    title.textContent = "Password required";
    const body = document.createElement("p");
    body.style.cssText = "opacity:.8;margin:0 0 16px";
    body.textContent = incorrect ? "Incorrect password. Please try again." : "This PDF is protected. Enter its password to view it.";
    const input = document.createElement("input");
    input.type = "password";
    input.autocomplete = "off";
    input.style.cssText = "width:100%;box-sizing:border-box;padding:8px;border-radius:8px;border:1px solid #ffffff1a;background:#2a2c30;color:#d7d4cc;margin-bottom:12px";
    const submit = document.createElement("button");
    submit.textContent = "Unlock";
    submit.style.cssText = "padding:6px 14px;border-radius:8px;border:0;background:#3a3d42;color:#d7d4cc;cursor:pointer";
    const done = () => {
      const value = input.value;
      card.remove();
      resolve(value);
    };
    submit.addEventListener("click", done);
    input.addEventListener("keydown", (e) => {
      if (e.key === "Enter") done();
    });
    inner.append(title, body, input, submit);
    card.appendChild(inner);
    document.body.appendChild(card);
    input.focus();
  });
}

// src/common/settings.ts
var DEFAULTS = {
  defaultTheme: "smartDark",
  // Pinned by default: the toolbar stays put. Auto-hide-on-scroll is opt-in via
  // the popup (a vanishing-on-scroll bar read as "not sticky").
  toolbarPinned: true,
  fileAccess: false,
  highlightColors: ["yellow", "green", "pink", "blue"],
  darkShade: 0.12,
  darkTextLevel: 0.88
};
var KEY = "settings";
async function getSettings() {
  const got = await chrome.storage.local.get(KEY);
  return { ...DEFAULTS, ...got[KEY] };
}
async function saveSettings(patch) {
  const next = { ...await getSettings(), ...patch };
  await chrome.storage.local.set({ [KEY]: next });
}

// src/viewer/file-param.ts
function parseFileParam(search) {
  const m = /^\?file=(.+)$/s.exec(search);
  return m ? m[1] : null;
}

// src/viewer/boot.ts
var KB_THEME_CYCLE = ["smartDark", "warmSepia", "off"];
var engine = new ThemeEngine("smartDark");
var store = new HighlightStore();
var pages = /* @__PURE__ */ new Set();
var docHash = "";
var app;
function viewportFor(pageView) {
  return { scale: pageView.viewport.scale, pageHeightPdf: pageView.viewport.viewBox[3] };
}
function pageRefFromNode(node) {
  const start = node instanceof Element ? node : node.parentElement;
  const el = start?.closest(".page");
  if (!el) return null;
  const pageNumber = Number(el.getAttribute("data-page-number"));
  const pv = app.pdfViewer.getPageView(pageNumber - 1);
  if (!pv) return null;
  return { div: el, pageNumber, viewport: viewportFor(pv) };
}
var highlighter = new Highlighter(
  store,
  () => docHash,
  pageRefFromNode,
  (pageNumber) => void refreshPage(pageNumber),
  makeId
);
async function setTabTitle(file) {
  let title = "";
  try {
    const meta = await app.document?.getMetadata();
    const info2 = meta?.info;
    if (typeof info2?.Title === "string") title = info2.Title.trim();
  } catch {
  }
  if (!title) {
    try {
      title = decodeURIComponent(new URL(file, location.href).pathname.split("/").pop() ?? "");
    } catch {
    }
  }
  if (title) document.title = title;
}
async function refreshPage(pageNumber) {
  const pv = app.pdfViewer.getPageView(pageNumber - 1);
  if (!pv?.div) return;
  const all = (await store.get(docHash)).filter((h) => h.page === pageNumber);
  renderHighlights(pv.div, all, viewportFor(pv), async (id) => {
    await store.remove(docHash, id);
    void refreshPage(pageNumber);
  });
}
async function main() {
  const container = document.getElementById("viewerContainer");
  app = createPdfApp(container);
  window.__pdfApp = app;
  app.eventBus.on("pagerendered", (e) => {
    const canvas = getPageCanvas(e);
    if (canvas) {
      pages.add(canvas);
      engine.applyToPage(canvas);
    }
    if (docHash) void refreshPage(e.pageNumber);
  });
  document.addEventListener("mouseup", () => void highlighter.captureSelection());
  const settings = await getSettings();
  engine.setShade(settings.darkShade);
  engine.setTextLevel(settings.darkTextLevel);
  engine.setTheme(settings.defaultTheme, [...pages]);
  mountToolbar({
    onTheme: (t) => engine.setTheme(t, [...pages]),
    onToggleHighlight: (on) => {
      highlighter.enabled = on;
    },
    onColor: (c) => highlighter.setColor(c),
    onShade: (v) => {
      engine.setShade(v);
      void saveSettings({ darkShade: v });
    },
    onTextLevel: (v) => {
      engine.setTextLevel(v);
      void saveSettings({ darkTextLevel: v });
    }
  }, settings.highlightColors, settings.darkShade, settings.darkTextLevel);
  if (!settings.toolbarPinned) {
    const bar = document.getElementById("toolbar");
    let lastY = 0;
    container.addEventListener("scroll", () => {
      const y = container.scrollTop;
      if (bar) bar.style.transform = y > lastY && y > 80 ? "translateY(-100%)" : "translateY(0)";
      lastY = y;
    });
  }
  let kbIdx = 0;
  document.addEventListener("keydown", (e) => {
    if (e.key.toLowerCase() === "d" && !e.ctrlKey && !e.metaKey && !(e.target instanceof HTMLInputElement)) {
      kbIdx = (kbIdx + 1) % KB_THEME_CYCLE.length;
      engine.setTheme(KB_THEME_CYCLE[kbIdx], [...pages]);
    }
  });
  const file = parseFileParam(location.search);
  console.log("[PDF Dark Reader] boot loaded", { file });
  if (!file) return;
  try {
    await loadDocument(app, file, (incorrect) => promptPassword(incorrect));
    void setTabTitle(file);
    const data = await app.document.getData();
    docHash = await hashPdf(data);
    for (let i = 0; i < app.pdfViewer.pagesCount; i++) {
      if (app.pdfViewer.getPageView(i)?.div) void refreshPage(i + 1);
    }
  } catch (e) {
    console.error("[PDF Dark Reader] load failed", e);
    showErrorCard(e instanceof Error ? e.message : "The file could not be loaded.", file);
  }
}
void main();
