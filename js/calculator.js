!(function (r) {
  var a = {};
  function n(e) {
    if (a[e]) return a[e].exports;
    var t = (a[e] = { i: e, l: !1, exports: {} });
    return r[e].call(t.exports, t, t.exports, n), (t.l = !0), t.exports;
  }
  (n.m = r),
    (n.c = a),
    (n.d = function (e, t, r) {
      n.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: r });
    }),
    (n.r = function (e) {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (n.t = function (t, e) {
      if ((1 & e && (t = n(t)), 8 & e)) return t;
      if (4 & e && "object" == typeof t && t && t.__esModule) return t;
      var r = Object.create(null);
      if (
        (n.r(r),
        Object.defineProperty(r, "default", { enumerable: !0, value: t }),
        2 & e && "string" != typeof t)
      )
        for (var a in t)
          n.d(
            r,
            a,
            function (e) {
              return t[e];
            }.bind(null, a)
          );
      return r;
    }),
    (n.n = function (e) {
      var t =
        e && e.__esModule
          ? function () {
              return e.default;
            }
          : function () {
              return e;
            };
      return n.d(t, "a", t), t;
    }),
    (n.o = function (e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }),
    (n.p = ""),
    n((n.s = 49));
})({
  0: function (e, t) {
    e.exports = jQuery;
  },
  27: function (e, t) {
    e.exports = {
      isFunction: function (e) {
        return "function" == typeof e;
      },
      isArray: function (e) {
        return "[object Array]" === Object.prototype.toString.apply(e);
      },
      each: function (e, t) {
        for (var r = 0, a = e.length; r < a && !1 !== t(e[r], r); r++);
      },
    };
  },
  42: function (e, t, r) {
    e.exports = (function (a) {
      "use strict";
      function e(e, t) {
        return (t = { exports: {} }), e(t, t.exports), t.exports;
      }
      function t(e) {
        return (e && e["default"]) || e;
      }
      a = a && a.hasOwnProperty("default") ? a["default"] : a;
      var f = {
          aliceblue: [240, 248, 255],
          antiquewhite: [250, 235, 215],
          aqua: [0, 255, 255],
          aquamarine: [127, 255, 212],
          azure: [240, 255, 255],
          beige: [245, 245, 220],
          bisque: [255, 228, 196],
          black: [0, 0, 0],
          blanchedalmond: [255, 235, 205],
          blue: [0, 0, 255],
          blueviolet: [138, 43, 226],
          brown: [165, 42, 42],
          burlywood: [222, 184, 135],
          cadetblue: [95, 158, 160],
          chartreuse: [127, 255, 0],
          chocolate: [210, 105, 30],
          coral: [255, 127, 80],
          cornflowerblue: [100, 149, 237],
          cornsilk: [255, 248, 220],
          crimson: [220, 20, 60],
          cyan: [0, 255, 255],
          darkblue: [0, 0, 139],
          darkcyan: [0, 139, 139],
          darkgoldenrod: [184, 134, 11],
          darkgray: [169, 169, 169],
          darkgreen: [0, 100, 0],
          darkgrey: [169, 169, 169],
          darkkhaki: [189, 183, 107],
          darkmagenta: [139, 0, 139],
          darkolivegreen: [85, 107, 47],
          darkorange: [255, 140, 0],
          darkorchid: [153, 50, 204],
          darkred: [139, 0, 0],
          darksalmon: [233, 150, 122],
          darkseagreen: [143, 188, 143],
          darkslateblue: [72, 61, 139],
          darkslategray: [47, 79, 79],
          darkslategrey: [47, 79, 79],
          darkturquoise: [0, 206, 209],
          darkviolet: [148, 0, 211],
          deeppink: [255, 20, 147],
          deepskyblue: [0, 191, 255],
          dimgray: [105, 105, 105],
          dimgrey: [105, 105, 105],
          dodgerblue: [30, 144, 255],
          firebrick: [178, 34, 34],
          floralwhite: [255, 250, 240],
          forestgreen: [34, 139, 34],
          fuchsia: [255, 0, 255],
          gainsboro: [220, 220, 220],
          ghostwhite: [248, 248, 255],
          gold: [255, 215, 0],
          goldenrod: [218, 165, 32],
          gray: [128, 128, 128],
          green: [0, 128, 0],
          greenyellow: [173, 255, 47],
          grey: [128, 128, 128],
          honeydew: [240, 255, 240],
          hotpink: [255, 105, 180],
          indianred: [205, 92, 92],
          indigo: [75, 0, 130],
          ivory: [255, 255, 240],
          khaki: [240, 230, 140],
          lavender: [230, 230, 250],
          lavenderblush: [255, 240, 245],
          lawngreen: [124, 252, 0],
          lemonchiffon: [255, 250, 205],
          lightblue: [173, 216, 230],
          lightcoral: [240, 128, 128],
          lightcyan: [224, 255, 255],
          lightgoldenrodyellow: [250, 250, 210],
          lightgray: [211, 211, 211],
          lightgreen: [144, 238, 144],
          lightgrey: [211, 211, 211],
          lightpink: [255, 182, 193],
          lightsalmon: [255, 160, 122],
          lightseagreen: [32, 178, 170],
          lightskyblue: [135, 206, 250],
          lightslategray: [119, 136, 153],
          lightslategrey: [119, 136, 153],
          lightsteelblue: [176, 196, 222],
          lightyellow: [255, 255, 224],
          lime: [0, 255, 0],
          limegreen: [50, 205, 50],
          linen: [250, 240, 230],
          magenta: [255, 0, 255],
          maroon: [128, 0, 0],
          mediumaquamarine: [102, 205, 170],
          mediumblue: [0, 0, 205],
          mediumorchid: [186, 85, 211],
          mediumpurple: [147, 112, 219],
          mediumseagreen: [60, 179, 113],
          mediumslateblue: [123, 104, 238],
          mediumspringgreen: [0, 250, 154],
          mediumturquoise: [72, 209, 204],
          mediumvioletred: [199, 21, 133],
          midnightblue: [25, 25, 112],
          mintcream: [245, 255, 250],
          mistyrose: [255, 228, 225],
          moccasin: [255, 228, 181],
          navajowhite: [255, 222, 173],
          navy: [0, 0, 128],
          oldlace: [253, 245, 230],
          olive: [128, 128, 0],
          olivedrab: [107, 142, 35],
          orange: [255, 165, 0],
          orangered: [255, 69, 0],
          orchid: [218, 112, 214],
          palegoldenrod: [238, 232, 170],
          palegreen: [152, 251, 152],
          paleturquoise: [175, 238, 238],
          palevioletred: [219, 112, 147],
          papayawhip: [255, 239, 213],
          peachpuff: [255, 218, 185],
          peru: [205, 133, 63],
          pink: [255, 192, 203],
          plum: [221, 160, 221],
          powderblue: [176, 224, 230],
          purple: [128, 0, 128],
          rebeccapurple: [102, 51, 153],
          red: [255, 0, 0],
          rosybrown: [188, 143, 143],
          royalblue: [65, 105, 225],
          saddlebrown: [139, 69, 19],
          salmon: [250, 128, 114],
          sandybrown: [244, 164, 96],
          seagreen: [46, 139, 87],
          seashell: [255, 245, 238],
          sienna: [160, 82, 45],
          silver: [192, 192, 192],
          skyblue: [135, 206, 235],
          slateblue: [106, 90, 205],
          slategray: [112, 128, 144],
          slategrey: [112, 128, 144],
          snow: [255, 250, 250],
          springgreen: [0, 255, 127],
          steelblue: [70, 130, 180],
          tan: [210, 180, 140],
          teal: [0, 128, 128],
          thistle: [216, 191, 216],
          tomato: [255, 99, 71],
          turquoise: [64, 224, 208],
          violet: [238, 130, 238],
          wheat: [245, 222, 179],
          white: [255, 255, 255],
          whitesmoke: [245, 245, 245],
          yellow: [255, 255, 0],
          yellowgreen: [154, 205, 50],
        },
        u = e(function (e) {
          var s = {};
          for (var t in f) if (f.hasOwnProperty(t)) s[f[t]] = t;
          var l = (e.exports = {
            rgb: { channels: 3, labels: "rgb" },
            hsl: { channels: 3, labels: "hsl" },
            hsv: { channels: 3, labels: "hsv" },
            hwb: { channels: 3, labels: "hwb" },
            cmyk: { channels: 4, labels: "cmyk" },
            xyz: { channels: 3, labels: "xyz" },
            lab: { channels: 3, labels: "lab" },
            lch: { channels: 3, labels: "lch" },
            hex: { channels: 1, labels: ["hex"] },
            keyword: { channels: 1, labels: ["keyword"] },
            ansi16: { channels: 1, labels: ["ansi16"] },
            ansi256: { channels: 1, labels: ["ansi256"] },
            hcg: { channels: 3, labels: ["h", "c", "g"] },
            apple: { channels: 3, labels: ["r16", "g16", "b16"] },
            gray: { channels: 1, labels: ["gray"] },
          });
          for (var r in l)
            if (l.hasOwnProperty(r)) {
              if (!("channels" in l[r]))
                throw new Error("missing channels property: " + r);
              if (!("labels" in l[r]))
                throw new Error("missing channel labels property: " + r);
              if (l[r].labels.length !== l[r].channels)
                throw new Error("channel and label counts mismatch: " + r);
              var a = l[r].channels;
              var n = l[r].labels;
              delete l[r].channels;
              delete l[r].labels;
              Object.defineProperty(l[r], "channels", { value: a });
              Object.defineProperty(l[r], "labels", { value: n });
            }
          l.rgb.hsl = function (e) {
            var t = e[0] / 255;
            var r = e[1] / 255;
            var a = e[2] / 255;
            var n = Math.min(t, r, a);
            var i = Math.max(t, r, a);
            var o = i - n;
            var s;
            var l;
            var u;
            if (i === n) s = 0;
            else if (t === i) s = (r - a) / o;
            else if (r === i) s = 2 + (a - t) / o;
            else if (a === i) s = 4 + (t - r) / o;
            s = Math.min(s * 60, 360);
            if (s < 0) s += 360;
            u = (n + i) / 2;
            if (i === n) l = 0;
            else if (u <= 0.5) l = o / (i + n);
            else l = o / (2 - i - n);
            return [s, l * 100, u * 100];
          };
          l.rgb.hsv = function (e) {
            var t;
            var r;
            var a;
            var n;
            var i;
            var o = e[0] / 255;
            var s = e[1] / 255;
            var l = e[2] / 255;
            var u = Math.max(o, s, l);
            var f = u - Math.min(o, s, l);
            var c = function (e) {
              return (u - e) / 6 / f + 1 / 2;
            };
            if (f === 0) n = i = 0;
            else {
              i = f / u;
              t = c(o);
              r = c(s);
              a = c(l);
              if (o === u) n = a - r;
              else if (s === u) n = 1 / 3 + t - a;
              else if (l === u) n = 2 / 3 + r - t;
              if (n < 0) n += 1;
              else if (n > 1) n -= 1;
            }
            return [n * 360, i * 100, u * 100];
          };
          l.rgb.hwb = function (e) {
            var t = e[0];
            var r = e[1];
            var a = e[2];
            var n = l.rgb.hsl(e)[0];
            var i = (1 / 255) * Math.min(t, Math.min(r, a));
            a = 1 - (1 / 255) * Math.max(t, Math.max(r, a));
            return [n, i * 100, a * 100];
          };
          l.rgb.cmyk = function (e) {
            var t = e[0] / 255;
            var r = e[1] / 255;
            var a = e[2] / 255;
            var n;
            var i;
            var o;
            var s;
            s = Math.min(1 - t, 1 - r, 1 - a);
            n = (1 - t - s) / (1 - s) || 0;
            i = (1 - r - s) / (1 - s) || 0;
            o = (1 - a - s) / (1 - s) || 0;
            return [n * 100, i * 100, o * 100, s * 100];
          };
          function u(e, t) {
            return (
              Math.pow(e[0] - t[0], 2) +
              Math.pow(e[1] - t[1], 2) +
              Math.pow(e[2] - t[2], 2)
            );
          }
          l.rgb.keyword = function (e) {
            var t = s[e];
            if (t) return t;
            var r = Infinity;
            var a;
            for (var n in f)
              if (f.hasOwnProperty(n)) {
                var i = f[n];
                var o = u(e, i);
                if (o < r) {
                  r = o;
                  a = n;
                }
              }
            return a;
          };
          l.keyword.rgb = function (e) {
            return f[e];
          };
          l.rgb.xyz = function (e) {
            var t = e[0] / 255;
            var r = e[1] / 255;
            var a = e[2] / 255;
            t = t > 0.04045 ? Math.pow((t + 0.055) / 1.055, 2.4) : t / 12.92;
            r = r > 0.04045 ? Math.pow((r + 0.055) / 1.055, 2.4) : r / 12.92;
            a = a > 0.04045 ? Math.pow((a + 0.055) / 1.055, 2.4) : a / 12.92;
            var n = t * 0.4124 + r * 0.3576 + a * 0.1805;
            var i = t * 0.2126 + r * 0.7152 + a * 0.0722;
            var o = t * 0.0193 + r * 0.1192 + a * 0.9505;
            return [n * 100, i * 100, o * 100];
          };
          l.rgb.lab = function (e) {
            var t = l.rgb.xyz(e);
            var r = t[0];
            var a = t[1];
            var n = t[2];
            var i;
            var o;
            var s;
            r /= 95.047;
            a /= 100;
            n /= 108.883;
            r = r > 0.008856 ? Math.pow(r, 1 / 3) : 7.787 * r + 16 / 116;
            a = a > 0.008856 ? Math.pow(a, 1 / 3) : 7.787 * a + 16 / 116;
            n = n > 0.008856 ? Math.pow(n, 1 / 3) : 7.787 * n + 16 / 116;
            i = 116 * a - 16;
            o = 500 * (r - a);
            s = 200 * (a - n);
            return [i, o, s];
          };
          l.hsl.rgb = function (e) {
            var t = e[0] / 360;
            var r = e[1] / 100;
            var a = e[2] / 100;
            var n;
            var i;
            var o;
            var s;
            var l;
            if (r === 0) {
              l = a * 255;
              return [l, l, l];
            }
            if (a < 0.5) i = a * (1 + r);
            else i = a + r - a * r;
            n = 2 * a - i;
            s = [0, 0, 0];
            for (var u = 0; u < 3; u++) {
              o = t + (1 / 3) * -(u - 1);
              if (o < 0) o++;
              if (o > 1) o--;
              if (6 * o < 1) l = n + (i - n) * 6 * o;
              else if (2 * o < 1) l = i;
              else if (3 * o < 2) l = n + (i - n) * (2 / 3 - o) * 6;
              else l = n;
              s[u] = l * 255;
            }
            return s;
          };
          l.hsl.hsv = function (e) {
            var t = e[0];
            var r = e[1] / 100;
            var a = e[2] / 100;
            var n = r;
            var i = Math.max(a, 0.01);
            var o;
            var s;
            a *= 2;
            r *= a <= 1 ? a : 2 - a;
            n *= i <= 1 ? i : 2 - i;
            s = (a + r) / 2;
            o = a === 0 ? (2 * n) / (i + n) : (2 * r) / (a + r);
            return [t, o * 100, s * 100];
          };
          l.hsv.rgb = function (e) {
            var t = e[0] / 60;
            var r = e[1] / 100;
            var a = e[2] / 100;
            var n = Math.floor(t) % 6;
            var i = t - Math.floor(t);
            var o = 255 * a * (1 - r);
            var s = 255 * a * (1 - r * i);
            var l = 255 * a * (1 - r * (1 - i));
            a *= 255;
            switch (n) {
              case 0:
                return [a, l, o];
              case 1:
                return [s, a, o];
              case 2:
                return [o, a, l];
              case 3:
                return [o, s, a];
              case 4:
                return [l, o, a];
              case 5:
                return [a, o, s];
            }
          };
          l.hsv.hsl = function (e) {
            var t = e[0];
            var r = e[1] / 100;
            var a = e[2] / 100;
            var n = Math.max(a, 0.01);
            var i;
            var o;
            var s;
            s = (2 - r) * a;
            i = (2 - r) * n;
            o = r * n;
            o /= i <= 1 ? i : 2 - i;
            o = o || 0;
            s /= 2;
            return [t, o * 100, s * 100];
          };
          l.hwb.rgb = function (e) {
            var t = e[0] / 360;
            var r = e[1] / 100;
            var a = e[2] / 100;
            var n = r + a;
            var i;
            var o;
            var s;
            var l;
            if (n > 1) {
              r /= n;
              a /= n;
            }
            i = Math.floor(6 * t);
            o = 1 - a;
            s = 6 * t - i;
            if ((i & 1) !== 0) s = 1 - s;
            l = r + s * (o - r);
            var u;
            var f;
            var c;
            switch (i) {
              default:
              case 6:
              case 0:
                u = o;
                f = l;
                c = r;
                break;
              case 1:
                u = l;
                f = o;
                c = r;
                break;
              case 2:
                u = r;
                f = o;
                c = l;
                break;
              case 3:
                u = r;
                f = l;
                c = o;
                break;
              case 4:
                u = l;
                f = r;
                c = o;
                break;
              case 5:
                u = o;
                f = r;
                c = l;
                break;
            }
            return [u * 255, f * 255, c * 255];
          };
          l.cmyk.rgb = function (e) {
            var t = e[0] / 100;
            var r = e[1] / 100;
            var a = e[2] / 100;
            var n = e[3] / 100;
            var i;
            var o;
            var s;
            i = 1 - Math.min(1, t * (1 - n) + n);
            o = 1 - Math.min(1, r * (1 - n) + n);
            s = 1 - Math.min(1, a * (1 - n) + n);
            return [i * 255, o * 255, s * 255];
          };
          l.xyz.rgb = function (e) {
            var t = e[0] / 100;
            var r = e[1] / 100;
            var a = e[2] / 100;
            var n;
            var i;
            var o;
            n = t * 3.2406 + r * -1.5372 + a * -0.4986;
            i = t * -0.9689 + r * 1.8758 + a * 0.0415;
            o = t * 0.0557 + r * -0.204 + a * 1.057;
            n =
              n > 0.0031308 ? 1.055 * Math.pow(n, 1 / 2.4) - 0.055 : n * 12.92;
            i =
              i > 0.0031308 ? 1.055 * Math.pow(i, 1 / 2.4) - 0.055 : i * 12.92;
            o =
              o > 0.0031308 ? 1.055 * Math.pow(o, 1 / 2.4) - 0.055 : o * 12.92;
            n = Math.min(Math.max(0, n), 1);
            i = Math.min(Math.max(0, i), 1);
            o = Math.min(Math.max(0, o), 1);
            return [n * 255, i * 255, o * 255];
          };
          l.xyz.lab = function (e) {
            var t = e[0];
            var r = e[1];
            var a = e[2];
            var n;
            var i;
            var o;
            t /= 95.047;
            r /= 100;
            a /= 108.883;
            t = t > 0.008856 ? Math.pow(t, 1 / 3) : 7.787 * t + 16 / 116;
            r = r > 0.008856 ? Math.pow(r, 1 / 3) : 7.787 * r + 16 / 116;
            a = a > 0.008856 ? Math.pow(a, 1 / 3) : 7.787 * a + 16 / 116;
            n = 116 * r - 16;
            i = 500 * (t - r);
            o = 200 * (r - a);
            return [n, i, o];
          };
          l.lab.xyz = function (e) {
            var t = e[0];
            var r = e[1];
            var a = e[2];
            var n;
            var i;
            var o;
            i = (t + 16) / 116;
            n = r / 500 + i;
            o = i - a / 200;
            var s = Math.pow(i, 3);
            var l = Math.pow(n, 3);
            var u = Math.pow(o, 3);
            i = s > 0.008856 ? s : (i - 16 / 116) / 7.787;
            n = l > 0.008856 ? l : (n - 16 / 116) / 7.787;
            o = u > 0.008856 ? u : (o - 16 / 116) / 7.787;
            n *= 95.047;
            i *= 100;
            o *= 108.883;
            return [n, i, o];
          };
          l.lab.lch = function (e) {
            var t = e[0];
            var r = e[1];
            var a = e[2];
            var n;
            var i;
            var o;
            n = Math.atan2(a, r);
            i = (n * 360) / 2 / Math.PI;
            if (i < 0) i += 360;
            o = Math.sqrt(r * r + a * a);
            return [t, o, i];
          };
          l.lch.lab = function (e) {
            var t = e[0];
            var r = e[1];
            var a = e[2];
            var n;
            var i;
            var o;
            o = (a / 360) * 2 * Math.PI;
            n = r * Math.cos(o);
            i = r * Math.sin(o);
            return [t, n, i];
          };
          l.rgb.ansi16 = function (e) {
            var t = e[0];
            var r = e[1];
            var a = e[2];
            var n = 1 in arguments ? arguments[1] : l.rgb.hsv(e)[2];
            n = Math.round(n / 50);
            if (n === 0) return 30;
            var i =
              30 +
              ((Math.round(a / 255) << 2) |
                (Math.round(r / 255) << 1) |
                Math.round(t / 255));
            if (n === 2) i += 60;
            return i;
          };
          l.hsv.ansi16 = function (e) {
            return l.rgb.ansi16(l.hsv.rgb(e), e[2]);
          };
          l.rgb.ansi256 = function (e) {
            var t = e[0];
            var r = e[1];
            var a = e[2];
            if (t === r && r === a) {
              if (t < 8) return 16;
              if (t > 248) return 231;
              return Math.round(((t - 8) / 247) * 24) + 232;
            }
            var n =
              16 +
              36 * Math.round((t / 255) * 5) +
              6 * Math.round((r / 255) * 5) +
              Math.round((a / 255) * 5);
            return n;
          };
          l.ansi16.rgb = function (e) {
            var t = e % 10;
            if (t === 0 || t === 7) {
              if (e > 50) t += 3.5;
              t = (t / 10.5) * 255;
              return [t, t, t];
            }
            var r = (~~(e > 50) + 1) * 0.5;
            var a = (t & 1) * r * 255;
            var n = ((t >> 1) & 1) * r * 255;
            var i = ((t >> 2) & 1) * r * 255;
            return [a, n, i];
          };
          l.ansi256.rgb = function (e) {
            if (e >= 232) {
              var t = (e - 232) * 10 + 8;
              return [t, t, t];
            }
            e -= 16;
            var r;
            var a = (Math.floor(e / 36) / 5) * 255;
            var n = (Math.floor((r = e % 36) / 6) / 5) * 255;
            var i = ((r % 6) / 5) * 255;
            return [a, n, i];
          };
          l.rgb.hex = function (e) {
            var t =
              ((Math.round(e[0]) & 255) << 16) +
              ((Math.round(e[1]) & 255) << 8) +
              (Math.round(e[2]) & 255);
            var r = t.toString(16).toUpperCase();
            return "000000".substring(r.length) + r;
          };
          l.hex.rgb = function (e) {
            var t = e.toString(16).match(/[a-f0-9]{6}|[a-f0-9]{3}/i);
            if (!t) return [0, 0, 0];
            var r = t[0];
            if (t[0].length === 3)
              r = r
                .split("")
                .map(function (e) {
                  return e + e;
                })
                .join("");
            var a = parseInt(r, 16);
            var n = (a >> 16) & 255;
            var i = (a >> 8) & 255;
            var o = a & 255;
            return [n, i, o];
          };
          l.rgb.hcg = function (e) {
            var t = e[0] / 255;
            var r = e[1] / 255;
            var a = e[2] / 255;
            var n = Math.max(Math.max(t, r), a);
            var i = Math.min(Math.min(t, r), a);
            var o = n - i;
            var s;
            var l;
            if (o < 1) s = i / (1 - o);
            else s = 0;
            if (o <= 0) l = 0;
            else if (n === t) l = ((r - a) / o) % 6;
            else if (n === r) l = 2 + (a - t) / o;
            else l = 4 + (t - r) / o + 4;
            l /= 6;
            l %= 1;
            return [l * 360, o * 100, s * 100];
          };
          l.hsl.hcg = function (e) {
            var t = e[1] / 100;
            var r = e[2] / 100;
            var a = 1;
            var n = 0;
            if (r < 0.5) a = 2 * t * r;
            else a = 2 * t * (1 - r);
            if (a < 1) n = (r - 0.5 * a) / (1 - a);
            return [e[0], a * 100, n * 100];
          };
          l.hsv.hcg = function (e) {
            var t = e[1] / 100;
            var r = e[2] / 100;
            var a = t * r;
            var n = 0;
            if (a < 1) n = (r - a) / (1 - a);
            return [e[0], a * 100, n * 100];
          };
          l.hcg.rgb = function (e) {
            var t = e[0] / 360;
            var r = e[1] / 100;
            var a = e[2] / 100;
            if (r === 0) return [a * 255, a * 255, a * 255];
            var n = [0, 0, 0];
            var i = (t % 1) * 6;
            var o = i % 1;
            var s = 1 - o;
            var l = 0;
            switch (Math.floor(i)) {
              case 0:
                n[0] = 1;
                n[1] = o;
                n[2] = 0;
                break;
              case 1:
                n[0] = s;
                n[1] = 1;
                n[2] = 0;
                break;
              case 2:
                n[0] = 0;
                n[1] = 1;
                n[2] = o;
                break;
              case 3:
                n[0] = 0;
                n[1] = s;
                n[2] = 1;
                break;
              case 4:
                n[0] = o;
                n[1] = 0;
                n[2] = 1;
                break;
              default:
                n[0] = 1;
                n[1] = 0;
                n[2] = s;
            }
            l = (1 - r) * a;
            return [
              (r * n[0] + l) * 255,
              (r * n[1] + l) * 255,
              (r * n[2] + l) * 255,
            ];
          };
          l.hcg.hsv = function (e) {
            var t = e[1] / 100;
            var r = e[2] / 100;
            var a = t + r * (1 - t);
            var n = 0;
            if (a > 0) n = t / a;
            return [e[0], n * 100, a * 100];
          };
          l.hcg.hsl = function (e) {
            var t = e[1] / 100;
            var r = e[2] / 100;
            var a = r * (1 - t) + 0.5 * t;
            var n = 0;
            if (a > 0 && a < 0.5) n = t / (2 * a);
            else if (a >= 0.5 && a < 1) n = t / (2 * (1 - a));
            return [e[0], n * 100, a * 100];
          };
          l.hcg.hwb = function (e) {
            var t = e[1] / 100;
            var r = e[2] / 100;
            var a = t + r * (1 - t);
            return [e[0], (a - t) * 100, (1 - a) * 100];
          };
          l.hwb.hcg = function (e) {
            var t = e[1] / 100;
            var r = e[2] / 100;
            var a = 1 - r;
            var n = a - t;
            var i = 0;
            if (n < 1) i = (a - n) / (1 - n);
            return [e[0], n * 100, i * 100];
          };
          l.apple.rgb = function (e) {
            return [
              (e[0] / 65535) * 255,
              (e[1] / 65535) * 255,
              (e[2] / 65535) * 255,
            ];
          };
          l.rgb.apple = function (e) {
            return [
              (e[0] / 255) * 65535,
              (e[1] / 255) * 65535,
              (e[2] / 255) * 65535,
            ];
          };
          l.gray.rgb = function (e) {
            return [(e[0] / 100) * 255, (e[0] / 100) * 255, (e[0] / 100) * 255];
          };
          l.gray.hsl = l.gray.hsv = function (e) {
            return [0, 0, e[0]];
          };
          l.gray.hwb = function (e) {
            return [0, 100, e[0]];
          };
          l.gray.cmyk = function (e) {
            return [0, 0, 0, e[0]];
          };
          l.gray.lab = function (e) {
            return [e[0], 0, 0];
          };
          l.gray.hex = function (e) {
            var t = Math.round((e[0] / 100) * 255) & 255;
            var r = (t << 16) + (t << 8) + t;
            var a = r.toString(16).toUpperCase();
            return "000000".substring(a.length) + a;
          };
          l.rgb.gray = function (e) {
            var t = (e[0] + e[1] + e[2]) / 3;
            return [(t / 255) * 100];
          };
        }),
        r = u.rgb,
        n = u.hsl,
        i = u.hsv,
        o = u.hwb,
        s = u.cmyk,
        l = u.xyz,
        c = u.lab,
        d = u.lch,
        h = u.hex,
        v = u.keyword,
        g = u.ansi16,
        p = u.ansi256,
        m = u.hcg,
        b = u.apple,
        x = u.gray;
      function y() {
        var e = {};
        var t = Object.keys(u);
        for (var r = t.length, a = 0; a < r; a++)
          e[t[a]] = { distance: -1, parent: null };
        return e;
      }
      function w(e) {
        var t = y();
        var r = [e];
        t[e].distance = 0;
        while (r.length) {
          var a = r.pop();
          var n = Object.keys(u[a]);
          for (var i = n.length, o = 0; o < i; o++) {
            var s = n[o];
            var l = t[s];
            if (l.distance === -1) {
              l.distance = t[a].distance + 1;
              l.parent = a;
              r.unshift(s);
            }
          }
        }
        return t;
      }
      function _(t, r) {
        return function (e) {
          return r(t(e));
        };
      }
      function k(e, t) {
        var r = [t[e].parent, e];
        var a = u[t[e].parent][e];
        var n = t[e].parent;
        while (t[n].parent) {
          r.unshift(t[n].parent);
          a = _(u[t[n].parent][n], a);
          n = t[n].parent;
        }
        a.conversion = r;
        return a;
      }
      var M = function (e) {
          var t = w(e);
          var r = {};
          var a = Object.keys(t);
          for (var n = a.length, i = 0; i < n; i++) {
            var o = a[i];
            var s = t[o];
            if (s.parent === null) continue;
            r[o] = k(o, t);
          }
          return r;
        },
        S = {},
        C;
      function P(t) {
        var e = function (e) {
          if (e === undefined || e === null) return e;
          if (arguments.length > 1) e = Array.prototype.slice.call(arguments);
          return t(e);
        };
        if ("conversion" in t) e.conversion = t.conversion;
        return e;
      }
      function A(n) {
        var e = function (e) {
          if (e === undefined || e === null) return e;
          if (arguments.length > 1) e = Array.prototype.slice.call(arguments);
          var t = n(e);
          if (typeof t === "object")
            for (var r = t.length, a = 0; a < r; a++) t[a] = Math.round(t[a]);
          return t;
        };
        if ("conversion" in n) e.conversion = n.conversion;
        return e;
      }
      Object.keys(u).forEach(function (r) {
        S[r] = {};
        Object.defineProperty(S[r], "channels", { value: u[r].channels });
        Object.defineProperty(S[r], "labels", { value: u[r].labels });
        var a = M(r);
        var e = Object.keys(a);
        e.forEach(function (e) {
          var t = a[e];
          S[r][e] = A(t);
          S[r][e].raw = P(t);
        });
      });
      var D = S,
        T = {
          aliceblue: [240, 248, 255],
          antiquewhite: [250, 235, 215],
          aqua: [0, 255, 255],
          aquamarine: [127, 255, 212],
          azure: [240, 255, 255],
          beige: [245, 245, 220],
          bisque: [255, 228, 196],
          black: [0, 0, 0],
          blanchedalmond: [255, 235, 205],
          blue: [0, 0, 255],
          blueviolet: [138, 43, 226],
          brown: [165, 42, 42],
          burlywood: [222, 184, 135],
          cadetblue: [95, 158, 160],
          chartreuse: [127, 255, 0],
          chocolate: [210, 105, 30],
          coral: [255, 127, 80],
          cornflowerblue: [100, 149, 237],
          cornsilk: [255, 248, 220],
          crimson: [220, 20, 60],
          cyan: [0, 255, 255],
          darkblue: [0, 0, 139],
          darkcyan: [0, 139, 139],
          darkgoldenrod: [184, 134, 11],
          darkgray: [169, 169, 169],
          darkgreen: [0, 100, 0],
          darkgrey: [169, 169, 169],
          darkkhaki: [189, 183, 107],
          darkmagenta: [139, 0, 139],
          darkolivegreen: [85, 107, 47],
          darkorange: [255, 140, 0],
          darkorchid: [153, 50, 204],
          darkred: [139, 0, 0],
          darksalmon: [233, 150, 122],
          darkseagreen: [143, 188, 143],
          darkslateblue: [72, 61, 139],
          darkslategray: [47, 79, 79],
          darkslategrey: [47, 79, 79],
          darkturquoise: [0, 206, 209],
          darkviolet: [148, 0, 211],
          deeppink: [255, 20, 147],
          deepskyblue: [0, 191, 255],
          dimgray: [105, 105, 105],
          dimgrey: [105, 105, 105],
          dodgerblue: [30, 144, 255],
          firebrick: [178, 34, 34],
          floralwhite: [255, 250, 240],
          forestgreen: [34, 139, 34],
          fuchsia: [255, 0, 255],
          gainsboro: [220, 220, 220],
          ghostwhite: [248, 248, 255],
          gold: [255, 215, 0],
          goldenrod: [218, 165, 32],
          gray: [128, 128, 128],
          green: [0, 128, 0],
          greenyellow: [173, 255, 47],
          grey: [128, 128, 128],
          honeydew: [240, 255, 240],
          hotpink: [255, 105, 180],
          indianred: [205, 92, 92],
          indigo: [75, 0, 130],
          ivory: [255, 255, 240],
          khaki: [240, 230, 140],
          lavender: [230, 230, 250],
          lavenderblush: [255, 240, 245],
          lawngreen: [124, 252, 0],
          lemonchiffon: [255, 250, 205],
          lightblue: [173, 216, 230],
          lightcoral: [240, 128, 128],
          lightcyan: [224, 255, 255],
          lightgoldenrodyellow: [250, 250, 210],
          lightgray: [211, 211, 211],
          lightgreen: [144, 238, 144],
          lightgrey: [211, 211, 211],
          lightpink: [255, 182, 193],
          lightsalmon: [255, 160, 122],
          lightseagreen: [32, 178, 170],
          lightskyblue: [135, 206, 250],
          lightslategray: [119, 136, 153],
          lightslategrey: [119, 136, 153],
          lightsteelblue: [176, 196, 222],
          lightyellow: [255, 255, 224],
          lime: [0, 255, 0],
          limegreen: [50, 205, 50],
          linen: [250, 240, 230],
          magenta: [255, 0, 255],
          maroon: [128, 0, 0],
          mediumaquamarine: [102, 205, 170],
          mediumblue: [0, 0, 205],
          mediumorchid: [186, 85, 211],
          mediumpurple: [147, 112, 219],
          mediumseagreen: [60, 179, 113],
          mediumslateblue: [123, 104, 238],
          mediumspringgreen: [0, 250, 154],
          mediumturquoise: [72, 209, 204],
          mediumvioletred: [199, 21, 133],
          midnightblue: [25, 25, 112],
          mintcream: [245, 255, 250],
          mistyrose: [255, 228, 225],
          moccasin: [255, 228, 181],
          navajowhite: [255, 222, 173],
          navy: [0, 0, 128],
          oldlace: [253, 245, 230],
          olive: [128, 128, 0],
          olivedrab: [107, 142, 35],
          orange: [255, 165, 0],
          orangered: [255, 69, 0],
          orchid: [218, 112, 214],
          palegoldenrod: [238, 232, 170],
          palegreen: [152, 251, 152],
          paleturquoise: [175, 238, 238],
          palevioletred: [219, 112, 147],
          papayawhip: [255, 239, 213],
          peachpuff: [255, 218, 185],
          peru: [205, 133, 63],
          pink: [255, 192, 203],
          plum: [221, 160, 221],
          powderblue: [176, 224, 230],
          purple: [128, 0, 128],
          rebeccapurple: [102, 51, 153],
          red: [255, 0, 0],
          rosybrown: [188, 143, 143],
          royalblue: [65, 105, 225],
          saddlebrown: [139, 69, 19],
          salmon: [250, 128, 114],
          sandybrown: [244, 164, 96],
          seagreen: [46, 139, 87],
          seashell: [255, 245, 238],
          sienna: [160, 82, 45],
          silver: [192, 192, 192],
          skyblue: [135, 206, 235],
          slateblue: [106, 90, 205],
          slategray: [112, 128, 144],
          slategrey: [112, 128, 144],
          snow: [255, 250, 250],
          springgreen: [0, 255, 127],
          steelblue: [70, 130, 180],
          tan: [210, 180, 140],
          teal: [0, 128, 128],
          thistle: [216, 191, 216],
          tomato: [255, 99, 71],
          turquoise: [64, 224, 208],
          violet: [238, 130, 238],
          wheat: [245, 222, 179],
          white: [255, 255, 255],
          whitesmoke: [245, 245, 245],
          yellow: [255, 255, 0],
          yellowgreen: [154, 205, 50],
        },
        I = {
          getRgba: F,
          getHsla: O,
          getRgb: E,
          getHsl: N,
          getHwb: L,
          getAlpha: R,
          hexString: z,
          rgbString: V,
          rgbaString: B,
          percentString: W,
          percentaString: H,
          hslString: j,
          hslaString: U,
          hwbString: q,
          keyword: Y,
        };
      function F(e) {
        if (!e) return;
        var t = /^#([a-fA-F0-9]{3,4})$/i,
          r = /^#([a-fA-F0-9]{6}([a-fA-F0-9]{2})?)$/i,
          a =
            /^rgba?\(\s*([+-]?\d+)\s*,\s*([+-]?\d+)\s*,\s*([+-]?\d+)\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)$/i,
          n =
            /^rgba?\(\s*([+-]?[\d\.]+)\%\s*,\s*([+-]?[\d\.]+)\%\s*,\s*([+-]?[\d\.]+)\%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)$/i,
          i = /(\w+)/;
        var o = [0, 0, 0],
          s = 1,
          l = e.match(t),
          u = "";
        if (l) {
          l = l[1];
          u = l[3];
          for (var f = 0; f < o.length; f++) o[f] = parseInt(l[f] + l[f], 16);
          if (u) s = Math.round((parseInt(u + u, 16) / 255) * 100) / 100;
        } else if ((l = e.match(r))) {
          u = l[2];
          l = l[1];
          for (var f = 0; f < o.length; f++)
            o[f] = parseInt(l.slice(f * 2, f * 2 + 2), 16);
          if (u) s = Math.round((parseInt(u, 16) / 255) * 100) / 100;
        } else if ((l = e.match(a))) {
          for (var f = 0; f < o.length; f++) o[f] = parseInt(l[f + 1]);
          s = parseFloat(l[4]);
        } else if ((l = e.match(n))) {
          for (var f = 0; f < o.length; f++)
            o[f] = Math.round(parseFloat(l[f + 1]) * 2.55);
          s = parseFloat(l[4]);
        } else if ((l = e.match(i))) {
          if (l[1] == "transparent") return [0, 0, 0, 0];
          o = T[l[1]];
          if (!o) return;
        }
        for (var f = 0; f < o.length; f++) o[f] = G(o[f], 0, 255);
        if (!s && s != 0) s = 1;
        else s = G(s, 0, 1);
        o[3] = s;
        return o;
      }
      function O(e) {
        if (!e) return;
        var t =
          /^hsla?\(\s*([+-]?\d+)(?:deg)?\s*,\s*([+-]?[\d\.]+)%\s*,\s*([+-]?[\d\.]+)%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)/;
        var r = e.match(t);
        if (r) {
          var a = parseFloat(r[4]);
          var n = G(parseInt(r[1]), 0, 360),
            i = G(parseFloat(r[2]), 0, 100),
            o = G(parseFloat(r[3]), 0, 100),
            s = G(isNaN(a) ? 1 : a, 0, 1);
          return [n, i, o, s];
        }
      }
      function L(e) {
        if (!e) return;
        var t =
          /^hwb\(\s*([+-]?\d+)(?:deg)?\s*,\s*([+-]?[\d\.]+)%\s*,\s*([+-]?[\d\.]+)%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)/;
        var r = e.match(t);
        if (r) {
          var a = parseFloat(r[4]);
          var n = G(parseInt(r[1]), 0, 360),
            i = G(parseFloat(r[2]), 0, 100),
            o = G(parseFloat(r[3]), 0, 100),
            s = G(isNaN(a) ? 1 : a, 0, 1);
          return [n, i, o, s];
        }
      }
      function E(e) {
        var t = F(e);
        return t && t.slice(0, 3);
      }
      function N(e) {
        var t = O(e);
        return t && t.slice(0, 3);
      }
      function R(e) {
        var t = F(e);
        if (t) return t[3];
        else if ((t = O(e))) return t[3];
        else if ((t = L(e))) return t[3];
      }
      function z(e, t) {
        var t = t !== undefined && e.length === 3 ? t : e[3];
        return (
          "#" +
          X(e[0]) +
          X(e[1]) +
          X(e[2]) +
          (t >= 0 && t < 1 ? X(Math.round(t * 255)) : "")
        );
      }
      function V(e, t) {
        if (t < 1 || (e[3] && e[3] < 1)) return B(e, t);
        return "rgb(" + e[0] + ", " + e[1] + ", " + e[2] + ")";
      }
      function B(e, t) {
        if (t === undefined) t = e[3] !== undefined ? e[3] : 1;
        return "rgba(" + e[0] + ", " + e[1] + ", " + e[2] + ", " + t + ")";
      }
      function W(e, t) {
        if (t < 1 || (e[3] && e[3] < 1)) return H(e, t);
        var r = Math.round((e[0] / 255) * 100),
          a = Math.round((e[1] / 255) * 100),
          n = Math.round((e[2] / 255) * 100);
        return "rgb(" + r + "%, " + a + "%, " + n + "%)";
      }
      function H(e, t) {
        var r = Math.round((e[0] / 255) * 100),
          a = Math.round((e[1] / 255) * 100),
          n = Math.round((e[2] / 255) * 100);
        return (
          "rgba(" + r + "%, " + a + "%, " + n + "%, " + (t || e[3] || 1) + ")"
        );
      }
      function j(e, t) {
        if (t < 1 || (e[3] && e[3] < 1)) return U(e, t);
        return "hsl(" + e[0] + ", " + e[1] + "%, " + e[2] + "%)";
      }
      function U(e, t) {
        if (t === undefined) t = e[3] !== undefined ? e[3] : 1;
        return "hsla(" + e[0] + ", " + e[1] + "%, " + e[2] + "%, " + t + ")";
      }
      function q(e, t) {
        if (t === undefined) t = e[3] !== undefined ? e[3] : 1;
        return (
          "hwb(" +
          e[0] +
          ", " +
          e[1] +
          "%, " +
          e[2] +
          "%" +
          (t !== undefined && t !== 1 ? ", " + t : "") +
          ")"
        );
      }
      function Y(e) {
        return K[e.slice(0, 3)];
      }
      function G(e, t, r) {
        return Math.min(Math.max(t, e), r);
      }
      function X(e) {
        var t = e.toString(16).toUpperCase();
        return t.length < 2 ? "0" + t : t;
      }
      var K = {},
        $;
      for ($ in T) K[T[$]] = $;
      var Z = function (e) {
        if (e instanceof Z) return e;
        if (!(this instanceof Z)) return new Z(e);
        this.valid = false;
        this.values = {
          rgb: [0, 0, 0],
          hsl: [0, 0, 0],
          hsv: [0, 0, 0],
          hwb: [0, 0, 0],
          cmyk: [0, 0, 0, 0],
          alpha: 1,
        };
        var t;
        if (typeof e === "string") {
          t = I.getRgba(e);
          if (t) this.setValues("rgb", t);
          else if ((t = I.getHsla(e))) this.setValues("hsl", t);
          else if ((t = I.getHwb(e))) this.setValues("hwb", t);
        } else if (typeof e === "object") {
          t = e;
          if (t.r !== undefined || t.red !== undefined)
            this.setValues("rgb", t);
          else if (t.l !== undefined || t.lightness !== undefined)
            this.setValues("hsl", t);
          else if (t.v !== undefined || t.value !== undefined)
            this.setValues("hsv", t);
          else if (t.w !== undefined || t.whiteness !== undefined)
            this.setValues("hwb", t);
          else if (t.c !== undefined || t.cyan !== undefined)
            this.setValues("cmyk", t);
        }
      };
      if (
        (((Z.prototype = {
          isValid: function () {
            return this.valid;
          },
          rgb: function () {
            return this.setSpace("rgb", arguments);
          },
          hsl: function () {
            return this.setSpace("hsl", arguments);
          },
          hsv: function () {
            return this.setSpace("hsv", arguments);
          },
          hwb: function () {
            return this.setSpace("hwb", arguments);
          },
          cmyk: function () {
            return this.setSpace("cmyk", arguments);
          },
          rgbArray: function () {
            return this.values.rgb;
          },
          hslArray: function () {
            return this.values.hsl;
          },
          hsvArray: function () {
            return this.values.hsv;
          },
          hwbArray: function () {
            var e = this.values;
            if (e.alpha !== 1) return e.hwb.concat([e.alpha]);
            return e.hwb;
          },
          cmykArray: function () {
            return this.values.cmyk;
          },
          rgbaArray: function () {
            var e = this.values;
            return e.rgb.concat([e.alpha]);
          },
          hslaArray: function () {
            var e = this.values;
            return e.hsl.concat([e.alpha]);
          },
          alpha: function (e) {
            if (e === undefined) return this.values.alpha;
            this.setValues("alpha", e);
            return this;
          },
          red: function (e) {
            return this.setChannel("rgb", 0, e);
          },
          green: function (e) {
            return this.setChannel("rgb", 1, e);
          },
          blue: function (e) {
            return this.setChannel("rgb", 2, e);
          },
          hue: function (e) {
            if (e) {
              e %= 360;
              e = e < 0 ? 360 + e : e;
            }
            return this.setChannel("hsl", 0, e);
          },
          saturation: function (e) {
            return this.setChannel("hsl", 1, e);
          },
          lightness: function (e) {
            return this.setChannel("hsl", 2, e);
          },
          saturationv: function (e) {
            return this.setChannel("hsv", 1, e);
          },
          whiteness: function (e) {
            return this.setChannel("hwb", 1, e);
          },
          blackness: function (e) {
            return this.setChannel("hwb", 2, e);
          },
          value: function (e) {
            return this.setChannel("hsv", 2, e);
          },
          cyan: function (e) {
            return this.setChannel("cmyk", 0, e);
          },
          magenta: function (e) {
            return this.setChannel("cmyk", 1, e);
          },
          yellow: function (e) {
            return this.setChannel("cmyk", 2, e);
          },
          black: function (e) {
            return this.setChannel("cmyk", 3, e);
          },
          hexString: function () {
            return I.hexString(this.values.rgb);
          },
          rgbString: function () {
            return I.rgbString(this.values.rgb, this.values.alpha);
          },
          rgbaString: function () {
            return I.rgbaString(this.values.rgb, this.values.alpha);
          },
          percentString: function () {
            return I.percentString(this.values.rgb, this.values.alpha);
          },
          hslString: function () {
            return I.hslString(this.values.hsl, this.values.alpha);
          },
          hslaString: function () {
            return I.hslaString(this.values.hsl, this.values.alpha);
          },
          hwbString: function () {
            return I.hwbString(this.values.hwb, this.values.alpha);
          },
          keyword: function () {
            return I.keyword(this.values.rgb, this.values.alpha);
          },
          rgbNumber: function () {
            var e = this.values.rgb;
            return (e[0] << 16) | (e[1] << 8) | e[2];
          },
          luminosity: function () {
            var e = this.values.rgb;
            var t = [];
            for (var r = 0; r < e.length; r++) {
              var a = e[r] / 255;
              t[r] =
                a <= 0.03928 ? a / 12.92 : Math.pow((a + 0.055) / 1.055, 2.4);
            }
            return 0.2126 * t[0] + 0.7152 * t[1] + 0.0722 * t[2];
          },
          contrast: function (e) {
            var t = this.luminosity();
            var r = e.luminosity();
            if (t > r) return (t + 0.05) / (r + 0.05);
            return (r + 0.05) / (t + 0.05);
          },
          level: function (e) {
            var t = this.contrast(e);
            if (t >= 7.1) return "AAA";
            return t >= 4.5 ? "AA" : "";
          },
          dark: function () {
            var e = this.values.rgb;
            var t = (e[0] * 299 + e[1] * 587 + e[2] * 114) / 1e3;
            return t < 128;
          },
          light: function () {
            return !this.dark();
          },
          negate: function () {
            var e = [];
            for (var t = 0; t < 3; t++) e[t] = 255 - this.values.rgb[t];
            this.setValues("rgb", e);
            return this;
          },
          lighten: function (e) {
            var t = this.values.hsl;
            t[2] += t[2] * e;
            this.setValues("hsl", t);
            return this;
          },
          darken: function (e) {
            var t = this.values.hsl;
            t[2] -= t[2] * e;
            this.setValues("hsl", t);
            return this;
          },
          saturate: function (e) {
            var t = this.values.hsl;
            t[1] += t[1] * e;
            this.setValues("hsl", t);
            return this;
          },
          desaturate: function (e) {
            var t = this.values.hsl;
            t[1] -= t[1] * e;
            this.setValues("hsl", t);
            return this;
          },
          whiten: function (e) {
            var t = this.values.hwb;
            t[1] += t[1] * e;
            this.setValues("hwb", t);
            return this;
          },
          blacken: function (e) {
            var t = this.values.hwb;
            t[2] += t[2] * e;
            this.setValues("hwb", t);
            return this;
          },
          greyscale: function () {
            var e = this.values.rgb;
            var t = e[0] * 0.3 + e[1] * 0.59 + e[2] * 0.11;
            this.setValues("rgb", [t, t, t]);
            return this;
          },
          clearer: function (e) {
            var t = this.values.alpha;
            this.setValues("alpha", t - t * e);
            return this;
          },
          opaquer: function (e) {
            var t = this.values.alpha;
            this.setValues("alpha", t + t * e);
            return this;
          },
          rotate: function (e) {
            var t = this.values.hsl;
            var r = (t[0] + e) % 360;
            t[0] = r < 0 ? 360 + r : r;
            this.setValues("hsl", t);
            return this;
          },
          mix: function (e, t) {
            var r = this;
            var a = e;
            var n = t === undefined ? 0.5 : t;
            var i = 2 * n - 1;
            var o = r.alpha() - a.alpha();
            var s = ((i * o === -1 ? i : (i + o) / (1 + i * o)) + 1) / 2;
            var l = 1 - s;
            return this.rgb(
              s * r.red() + l * a.red(),
              s * r.green() + l * a.green(),
              s * r.blue() + l * a.blue()
            ).alpha(r.alpha() * n + a.alpha() * (1 - n));
          },
          toJSON: function () {
            return this.rgb();
          },
          clone: function () {
            var e = new Z();
            var t = this.values;
            var r = e.values;
            var a, n;
            for (var i in t)
              if (t.hasOwnProperty(i)) {
                a = t[i];
                n = {}.toString.call(a);
                if (n === "[object Array]") r[i] = a.slice(0);
                else if (n === "[object Number]") r[i] = a;
                else console.error("unexpected color value:", a);
              }
            return e;
          },
        }).spaces = {
          rgb: ["red", "green", "blue"],
          hsl: ["hue", "saturation", "lightness"],
          hsv: ["hue", "saturation", "value"],
          hwb: ["hue", "whiteness", "blackness"],
          cmyk: ["cyan", "magenta", "yellow", "black"],
        }),
        (Z.prototype.maxes = {
          rgb: [255, 255, 255],
          hsl: [360, 100, 100],
          hsv: [360, 100, 100],
          hwb: [360, 100, 100],
          cmyk: [100, 100, 100, 100],
        }),
        (Z.prototype.getValues = function (e) {
          var t = this.values;
          var r = {};
          for (var a = 0; a < e.length; a++) r[e.charAt(a)] = t[e][a];
          if (t.alpha !== 1) r.a = t.alpha;
          return r;
        }),
        (Z.prototype.setValues = function (e, t) {
          var r = this.values;
          var a = this.spaces;
          var n = this.maxes;
          var i = 1;
          var o;
          this.valid = true;
          if (e === "alpha") i = t;
          else if (t.length) {
            r[e] = t.slice(0, e.length);
            i = t[e.length];
          } else if (t[e.charAt(0)] !== undefined) {
            for (o = 0; o < e.length; o++) r[e][o] = t[e.charAt(o)];
            i = t.a;
          } else if (t[a[e][0]] !== undefined) {
            var s = a[e];
            for (o = 0; o < e.length; o++) r[e][o] = t[s[o]];
            i = t.alpha;
          }
          r.alpha = Math.max(0, Math.min(1, i === undefined ? r.alpha : i));
          if (e === "alpha") return false;
          var l;
          for (o = 0; o < e.length; o++) {
            l = Math.max(0, Math.min(n[e][o], r[e][o]));
            r[e][o] = Math.round(l);
          }
          for (var u in a) if (u !== e) r[u] = D[e][u](r[e]);
          return true;
        }),
        (Z.prototype.setSpace = function (e, t) {
          var r = t[0];
          if (r === undefined) return this.getValues(e);
          if (typeof r === "number") r = Array.prototype.slice.call(t);
          this.setValues(e, r);
          return this;
        }),
        (Z.prototype.setChannel = function (e, t, r) {
          var a = this.values[e];
          if (r === undefined) return a[t];
          else if (r === a[t]) return this;
          a[t] = r;
          this.setValues(e, a);
          return this;
        }),
        typeof window !== "undefined")
      )
        window.Color = Z;
      var J = Z;
      function Q(e) {
        return ["__proto__", "prototype", "constructor"].indexOf(e) === -1;
      }
      var ee = {
          noop: function () {},
          uid: (function () {
            var e = 0;
            return function () {
              return e++;
            };
          })(),
          isNullOrUndef: function (e) {
            return e === null || typeof e === "undefined";
          },
          isArray: function (e) {
            if (Array.isArray && Array.isArray(e)) return true;
            var t = Object.prototype.toString.call(e);
            if (t.substr(0, 7) === "[object" && t.substr(-6) === "Array]")
              return true;
            return false;
          },
          isObject: function (e) {
            return (
              e !== null &&
              Object.prototype.toString.call(e) === "[object Object]"
            );
          },
          isFinite: function (e) {
            return (
              (typeof e === "number" || e instanceof Number) && isFinite(e)
            );
          },
          valueOrDefault: function (e, t) {
            return typeof e === "undefined" ? t : e;
          },
          valueAtIndexOrDefault: function (e, t, r) {
            return ee.valueOrDefault(ee.isArray(e) ? e[t] : e, r);
          },
          callback: function (e, t, r) {
            if (e && typeof e.call === "function") return e.apply(r, t);
          },
          each: function (e, t, r, a) {
            var n, i, o;
            if (ee.isArray(e)) {
              i = e.length;
              if (a) for (n = i - 1; n >= 0; n--) t.call(r, e[n], n);
              else for (n = 0; n < i; n++) t.call(r, e[n], n);
            } else if (ee.isObject(e)) {
              o = Object.keys(e);
              i = o.length;
              for (n = 0; n < i; n++) t.call(r, e[o[n]], o[n]);
            }
          },
          arrayEquals: function (e, t) {
            var r, a, n, i;
            if (!e || !t || e.length !== t.length) return false;
            for (r = 0, a = e.length; r < a; ++r) {
              n = e[r];
              i = t[r];
              if (n instanceof Array && i instanceof Array) {
                if (!ee.arrayEquals(n, i)) return false;
              } else if (n !== i) return false;
            }
            return true;
          },
          clone: function (e) {
            if (ee.isArray(e)) return e.map(ee.clone);
            if (ee.isObject(e)) {
              var t = Object.create(e);
              var r = Object.keys(e);
              var a = r.length;
              var n = 0;
              for (; n < a; ++n) t[r[n]] = ee.clone(e[r[n]]);
              return t;
            }
            return e;
          },
          _merger: function (e, t, r, a) {
            if (!Q(e)) return;
            var n = t[e];
            var i = r[e];
            if (ee.isObject(n) && ee.isObject(i)) ee.merge(n, i, a);
            else t[e] = ee.clone(i);
          },
          _mergerIf: function (e, t, r) {
            if (!Q(e)) return;
            var a = t[e];
            var n = r[e];
            if (ee.isObject(a) && ee.isObject(n)) ee.mergeIf(a, n);
            else if (!t.hasOwnProperty(e)) t[e] = ee.clone(n);
          },
          merge: function (e, t, r) {
            var a = ee.isArray(t) ? t : [t];
            var n = a.length;
            var i, o, s, l, u;
            if (!ee.isObject(e)) return e;
            r = r || {};
            i = r.merger || ee._merger;
            for (o = 0; o < n; ++o) {
              t = a[o];
              if (!ee.isObject(t)) continue;
              s = Object.keys(t);
              for (u = 0, l = s.length; u < l; ++u) i(s[u], e, t, r);
            }
            return e;
          },
          mergeIf: function (e, t) {
            return ee.merge(e, t, { merger: ee._mergerIf });
          },
          extend:
            Object.assign ||
            function (e) {
              return ee.merge(e, [].slice.call(arguments, 1), {
                merger: function (e, t, r) {
                  t[e] = r[e];
                },
              });
            },
          inherits: function (e) {
            var t = this;
            var r =
              e && e.hasOwnProperty("constructor")
                ? e.constructor
                : function () {
                    return t.apply(this, arguments);
                  };
            var a = function () {
              this.constructor = r;
            };
            a.prototype = t.prototype;
            r.prototype = new a();
            r.extend = ee.inherits;
            if (e) ee.extend(r.prototype, e);
            r.__super__ = t.prototype;
            return r;
          },
          _deprecated: function (e, t, r, a) {
            if (t !== undefined)
              console.warn(
                e +
                  ': "' +
                  r +
                  '" is deprecated. Please use "' +
                  a +
                  '" instead'
              );
          },
        },
        te = ee;
      (ee.callCallback = ee.callback),
        (ee.indexOf = function (e, t, r) {
          return Array.prototype.indexOf.call(e, t, r);
        }),
        (ee.getValueOrDefault = ee.valueOrDefault),
        (ee.getValueAtIndexOrDefault = ee.valueAtIndexOrDefault);
      var re = {
          linear: function (e) {
            return e;
          },
          easeInQuad: function (e) {
            return e * e;
          },
          easeOutQuad: function (e) {
            return -e * (e - 2);
          },
          easeInOutQuad: function (e) {
            if ((e /= 0.5) < 1) return 0.5 * e * e;
            return -0.5 * (--e * (e - 2) - 1);
          },
          easeInCubic: function (e) {
            return e * e * e;
          },
          easeOutCubic: function (e) {
            return (e = e - 1) * e * e + 1;
          },
          easeInOutCubic: function (e) {
            if ((e /= 0.5) < 1) return 0.5 * e * e * e;
            return 0.5 * ((e -= 2) * e * e + 2);
          },
          easeInQuart: function (e) {
            return e * e * e * e;
          },
          easeOutQuart: function (e) {
            return -((e = e - 1) * e * e * e - 1);
          },
          easeInOutQuart: function (e) {
            if ((e /= 0.5) < 1) return 0.5 * e * e * e * e;
            return -0.5 * ((e -= 2) * e * e * e - 2);
          },
          easeInQuint: function (e) {
            return e * e * e * e * e;
          },
          easeOutQuint: function (e) {
            return (e = e - 1) * e * e * e * e + 1;
          },
          easeInOutQuint: function (e) {
            if ((e /= 0.5) < 1) return 0.5 * e * e * e * e * e;
            return 0.5 * ((e -= 2) * e * e * e * e + 2);
          },
          easeInSine: function (e) {
            return -Math.cos(e * (Math.PI / 2)) + 1;
          },
          easeOutSine: function (e) {
            return Math.sin(e * (Math.PI / 2));
          },
          easeInOutSine: function (e) {
            return -0.5 * (Math.cos(Math.PI * e) - 1);
          },
          easeInExpo: function (e) {
            return e === 0 ? 0 : Math.pow(2, 10 * (e - 1));
          },
          easeOutExpo: function (e) {
            return e === 1 ? 1 : -Math.pow(2, -10 * e) + 1;
          },
          easeInOutExpo: function (e) {
            if (e === 0) return 0;
            if (e === 1) return 1;
            if ((e /= 0.5) < 1) return 0.5 * Math.pow(2, 10 * (e - 1));
            return 0.5 * (-Math.pow(2, -10 * --e) + 2);
          },
          easeInCirc: function (e) {
            if (e >= 1) return e;
            return -(Math.sqrt(1 - e * e) - 1);
          },
          easeOutCirc: function (e) {
            return Math.sqrt(1 - (e = e - 1) * e);
          },
          easeInOutCirc: function (e) {
            if ((e /= 0.5) < 1) return -0.5 * (Math.sqrt(1 - e * e) - 1);
            return 0.5 * (Math.sqrt(1 - (e -= 2) * e) + 1);
          },
          easeInElastic: function (e) {
            var t = 1.70158;
            var r = 0;
            var a = 1;
            if (e === 0) return 0;
            if (e === 1) return 1;
            if (!r) r = 0.3;
            if (a < 1) {
              a = 1;
              t = r / 4;
            } else t = (r / (2 * Math.PI)) * Math.asin(1 / a);
            return -(
              a *
              Math.pow(2, 10 * (e -= 1)) *
              Math.sin(((e - t) * (2 * Math.PI)) / r)
            );
          },
          easeOutElastic: function (e) {
            var t = 1.70158;
            var r = 0;
            var a = 1;
            if (e === 0) return 0;
            if (e === 1) return 1;
            if (!r) r = 0.3;
            if (a < 1) {
              a = 1;
              t = r / 4;
            } else t = (r / (2 * Math.PI)) * Math.asin(1 / a);
            return (
              a *
                Math.pow(2, -10 * e) *
                Math.sin(((e - t) * (2 * Math.PI)) / r) +
              1
            );
          },
          easeInOutElastic: function (e) {
            var t = 1.70158;
            var r = 0;
            var a = 1;
            if (e === 0) return 0;
            if ((e /= 0.5) === 2) return 1;
            if (!r) r = 0.45;
            if (a < 1) {
              a = 1;
              t = r / 4;
            } else t = (r / (2 * Math.PI)) * Math.asin(1 / a);
            if (e < 1)
              return (
                -0.5 *
                (a *
                  Math.pow(2, 10 * (e -= 1)) *
                  Math.sin(((e - t) * (2 * Math.PI)) / r))
              );
            return (
              a *
                Math.pow(2, -10 * (e -= 1)) *
                Math.sin(((e - t) * (2 * Math.PI)) / r) *
                0.5 +
              1
            );
          },
          easeInBack: function (e) {
            var t = 1.70158;
            return e * e * ((t + 1) * e - t);
          },
          easeOutBack: function (e) {
            var t = 1.70158;
            return (e = e - 1) * e * ((t + 1) * e + t) + 1;
          },
          easeInOutBack: function (e) {
            var t = 1.70158;
            if ((e /= 0.5) < 1)
              return 0.5 * (e * e * (((t *= 1.525) + 1) * e - t));
            return 0.5 * ((e -= 2) * e * (((t *= 1.525) + 1) * e + t) + 2);
          },
          easeInBounce: function (e) {
            return 1 - re.easeOutBounce(1 - e);
          },
          easeOutBounce: function (e) {
            if (e < 1 / 2.75) return 7.5625 * e * e;
            if (e < 2 / 2.75) return 7.5625 * (e -= 1.5 / 2.75) * e + 0.75;
            if (e < 2.5 / 2.75) return 7.5625 * (e -= 2.25 / 2.75) * e + 0.9375;
            return 7.5625 * (e -= 2.625 / 2.75) * e + 0.984375;
          },
          easeInOutBounce: function (e) {
            if (e < 0.5) return re.easeInBounce(e * 2) * 0.5;
            return re.easeOutBounce(e * 2 - 1) * 0.5 + 0.5;
          },
        },
        ae = { effects: re };
      te.easingEffects = re;
      var ne = Math.PI,
        ie = ne / 180,
        oe = ne * 2,
        se = ne / 2,
        le = ne / 4,
        ue = (ne * 2) / 3,
        fe = {
          clear: function (e) {
            e.ctx.clearRect(0, 0, e.width, e.height);
          },
          roundedRect: function (e, t, r, a, n, i) {
            if (i) {
              var o = Math.min(i, n / 2, a / 2);
              var s = t + o;
              var l = r + o;
              var u = t + a - o;
              var f = r + n - o;
              e.moveTo(t, l);
              if (s < u && l < f) {
                e.arc(s, l, o, -ne, -se);
                e.arc(u, l, o, -se, 0);
                e.arc(u, f, o, 0, se);
                e.arc(s, f, o, se, ne);
              } else if (s < u) {
                e.moveTo(s, r);
                e.arc(u, l, o, -se, se);
                e.arc(s, l, o, se, ne + se);
              } else if (l < f) {
                e.arc(s, l, o, -ne, 0);
                e.arc(s, f, o, 0, ne);
              } else e.arc(s, l, o, -ne, ne);
              e.closePath();
              e.moveTo(t, r);
            } else e.rect(t, r, a, n);
          },
          drawPoint: function (e, t, r, a, n, i) {
            var o, s, l, u, f;
            var c = (i || 0) * ie;
            if (t && typeof t === "object") {
              o = t.toString();
              if (
                o === "[object HTMLImageElement]" ||
                o === "[object HTMLCanvasElement]"
              ) {
                e.save();
                e.translate(a, n);
                e.rotate(c);
                e.drawImage(t, -t.width / 2, -t.height / 2, t.width, t.height);
                e.restore();
                return;
              }
            }
            if (isNaN(r) || r <= 0) return;
            e.beginPath();
            switch (t) {
              default:
                e.arc(a, n, r, 0, oe);
                e.closePath();
                break;
              case "triangle":
                e.moveTo(a + Math.sin(c) * r, n - Math.cos(c) * r);
                c += ue;
                e.lineTo(a + Math.sin(c) * r, n - Math.cos(c) * r);
                c += ue;
                e.lineTo(a + Math.sin(c) * r, n - Math.cos(c) * r);
                e.closePath();
                break;
              case "rectRounded":
                f = r * 0.516;
                u = r - f;
                s = Math.cos(c + le) * u;
                l = Math.sin(c + le) * u;
                e.arc(a - s, n - l, f, c - ne, c - se);
                e.arc(a + l, n - s, f, c - se, c);
                e.arc(a + s, n + l, f, c, c + se);
                e.arc(a - l, n + s, f, c + se, c + ne);
                e.closePath();
                break;
              case "rect":
                if (!i) {
                  u = Math.SQRT1_2 * r;
                  e.rect(a - u, n - u, 2 * u, 2 * u);
                  break;
                }
                c += le;
              case "rectRot":
                s = Math.cos(c) * r;
                l = Math.sin(c) * r;
                e.moveTo(a - s, n - l);
                e.lineTo(a + l, n - s);
                e.lineTo(a + s, n + l);
                e.lineTo(a - l, n + s);
                e.closePath();
                break;
              case "crossRot":
                c += le;
              case "cross":
                s = Math.cos(c) * r;
                l = Math.sin(c) * r;
                e.moveTo(a - s, n - l);
                e.lineTo(a + s, n + l);
                e.moveTo(a + l, n - s);
                e.lineTo(a - l, n + s);
                break;
              case "star":
                s = Math.cos(c) * r;
                l = Math.sin(c) * r;
                e.moveTo(a - s, n - l);
                e.lineTo(a + s, n + l);
                e.moveTo(a + l, n - s);
                e.lineTo(a - l, n + s);
                c += le;
                s = Math.cos(c) * r;
                l = Math.sin(c) * r;
                e.moveTo(a - s, n - l);
                e.lineTo(a + s, n + l);
                e.moveTo(a + l, n - s);
                e.lineTo(a - l, n + s);
                break;
              case "line":
                s = Math.cos(c) * r;
                l = Math.sin(c) * r;
                e.moveTo(a - s, n - l);
                e.lineTo(a + s, n + l);
                break;
              case "dash":
                e.moveTo(a, n);
                e.lineTo(a + Math.cos(c) * r, n + Math.sin(c) * r);
                break;
            }
            e.fill();
            e.stroke();
          },
          _isPointInArea: function (e, t) {
            var r = 1e-6;
            return (
              e.x > t.left - r &&
              e.x < t.right + r &&
              e.y > t.top - r &&
              e.y < t.bottom + r
            );
          },
          clipArea: function (e, t) {
            e.save();
            e.beginPath();
            e.rect(t.left, t.top, t.right - t.left, t.bottom - t.top);
            e.clip();
          },
          unclipArea: function (e) {
            e.restore();
          },
          lineTo: function (e, t, r, a) {
            var n = r.steppedLine;
            if (n) {
              if (n === "middle") {
                var i = (t.x + r.x) / 2;
                e.lineTo(i, a ? r.y : t.y);
                e.lineTo(i, a ? t.y : r.y);
              } else if ((n === "after" && !a) || (n !== "after" && a))
                e.lineTo(t.x, r.y);
              else e.lineTo(r.x, t.y);
              e.lineTo(r.x, r.y);
              return;
            }
            if (!r.tension) {
              e.lineTo(r.x, r.y);
              return;
            }
            e.bezierCurveTo(
              a ? t.controlPointPreviousX : t.controlPointNextX,
              a ? t.controlPointPreviousY : t.controlPointNextY,
              a ? r.controlPointNextX : r.controlPointPreviousX,
              a ? r.controlPointNextY : r.controlPointPreviousY,
              r.x,
              r.y
            );
          },
        },
        ce = fe;
      (te.clear = fe.clear),
        (te.drawRoundedRectangle = function (e) {
          e.beginPath();
          fe.roundedRect.apply(fe, arguments);
        });
      var de = {
        _set: function (e, t) {
          return te.merge(this[e] || (this[e] = {}), t);
        },
      };
      de._set("global", {
        defaultColor: "rgba(0,0,0,0.1)",
        defaultFontColor: "#666",
        defaultFontFamily: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",
        defaultFontSize: 12,
        defaultFontStyle: "normal",
        defaultLineHeight: 1.2,
        showLines: true,
      });
      var he = de,
        ve = te.valueOrDefault;
      function ge(e) {
        if (!e || te.isNullOrUndef(e.size) || te.isNullOrUndef(e.family))
          return null;
        return (
          (e.style ? e.style + " " : "") +
          (e.weight ? e.weight + " " : "") +
          e.size +
          "px " +
          e.family
        );
      }
      var pe = {
          toLineHeight: function (e, t) {
            var r = ("" + e).match(/^(normal|(\d+(?:\.\d+)?)(px|em|%)?)$/);
            if (!r || r[1] === "normal") return t * 1.2;
            e = +r[2];
            switch (r[3]) {
              case "px":
                return e;
              case "%":
                e /= 100;
                break;
            }
            return t * e;
          },
          toPadding: function (e) {
            var t, r, a, n;
            if (te.isObject(e)) {
              t = +e.top || 0;
              r = +e.right || 0;
              a = +e.bottom || 0;
              n = +e.left || 0;
            } else t = r = a = n = +e || 0;
            return {
              top: t,
              right: r,
              bottom: a,
              left: n,
              height: t + a,
              width: n + r,
            };
          },
          _parseFont: function (e) {
            var t = he.global;
            var r = ve(e.fontSize, t.defaultFontSize);
            var a = {
              family: ve(e.fontFamily, t.defaultFontFamily),
              lineHeight: te.options.toLineHeight(
                ve(e.lineHeight, t.defaultLineHeight),
                r
              ),
              size: r,
              style: ve(e.fontStyle, t.defaultFontStyle),
              weight: null,
              string: "",
            };
            a.string = ge(a);
            return a;
          },
          resolve: function (e, t, r, a) {
            var n = true;
            var i, o, s;
            for (i = 0, o = e.length; i < o; ++i) {
              s = e[i];
              if (s === undefined) continue;
              if (t !== undefined && typeof s === "function") {
                s = s(t);
                n = false;
              }
              if (r !== undefined && te.isArray(s)) {
                s = s[r];
                n = false;
              }
              if (s !== undefined) {
                if (a && !n) a.cacheable = false;
                return s;
              }
            }
          },
        },
        me = {
          _factorize: function (e) {
            var t = [];
            var r = Math.sqrt(e);
            var a;
            for (a = 1; a < r; a++)
              if (e % a === 0) {
                t.push(a);
                t.push(e / a);
              }
            if (r === (r | 0)) t.push(r);
            t.sort(function (e, t) {
              return e - t;
            }).pop();
            return t;
          },
          log10:
            Math.log10 ||
            function (e) {
              var t = Math.log(e) * Math.LOG10E;
              var r = Math.round(t);
              var a = e === Math.pow(10, r);
              return a ? r : t;
            },
        },
        be = me;
      te.log10 = me.log10;
      var xe = function (t, r) {
          return {
            x: function (e) {
              return t + t + r - e;
            },
            setWidth: function (e) {
              r = e;
            },
            textAlign: function (e) {
              if (e === "center") return e;
              return e === "right" ? "left" : "right";
            },
            xPlus: function (e, t) {
              return e - t;
            },
            leftForLtr: function (e, t) {
              return e - t;
            },
          };
        },
        ye = function () {
          return {
            x: function (e) {
              return e;
            },
            setWidth: function (e) {},
            textAlign: function (e) {
              return e;
            },
            xPlus: function (e, t) {
              return e + t;
            },
            leftForLtr: function (e, t) {
              return e;
            },
          };
        },
        we,
        _e,
        ke,
        Me,
        Se = te,
        Ce,
        Pe = ce,
        Ae = pe,
        De = be,
        Te = {
          getRtlAdapter: function (e, t, r) {
            return e ? xe(t, r) : ye();
          },
          overrideTextDirection: function (e, t) {
            var r, a;
            if (t === "ltr" || t === "rtl") {
              r = e.canvas.style;
              a = [
                r.getPropertyValue("direction"),
                r.getPropertyPriority("direction"),
              ];
              r.setProperty("direction", t, "important");
              e.prevTextDirection = a;
            }
          },
          restoreTextDirection: function (e) {
            var t = e.prevTextDirection;
            if (t !== undefined) {
              delete e.prevTextDirection;
              e.canvas.style.setProperty("direction", t[0], t[1]);
            }
          },
        };
      function Ie(e, t, r, a) {
        var n = Object.keys(r);
        var i, o, s, l, u, f, c, d, h;
        for (i = 0, o = n.length; i < o; ++i) {
          s = n[i];
          f = r[s];
          if (!t.hasOwnProperty(s)) t[s] = f;
          l = t[s];
          if (l === f || s[0] === "_") continue;
          if (!e.hasOwnProperty(s)) e[s] = l;
          u = e[s];
          c = typeof f;
          if (c === typeof u)
            if (c === "string") {
              d = J(u);
              if (d.valid) {
                h = J(f);
                if (h.valid) {
                  t[s] = h.mix(d, a).rgbString();
                  continue;
                }
              }
            } else if (Se.isFinite(u) && Se.isFinite(f)) {
              t[s] = u + (f - u) * a;
              continue;
            }
          t[s] = f;
        }
      }
      (Se.easing = ae),
        (Se.canvas = Pe),
        (Se.options = Ae),
        (Se.math = De),
        (Se.rtl = Te);
      var Fe = function (e) {
        Se.extend(this, e);
        this.initialize.apply(this, arguments);
      };
      Se.extend(Fe.prototype, {
        _type: undefined,
        initialize: function () {
          this.hidden = false;
        },
        pivot: function () {
          var e = this;
          if (!e._view) e._view = Se.extend({}, e._model);
          e._start = {};
          return e;
        },
        transition: function (e) {
          var t = this;
          var r = t._model;
          var a = t._start;
          var n = t._view;
          if (!r || e === 1) {
            t._view = Se.extend({}, r);
            t._start = null;
            return t;
          }
          if (!n) n = t._view = {};
          if (!a) a = t._start = {};
          Ie(a, n, r, e);
          return t;
        },
        tooltipPosition: function () {
          return { x: this._model.x, y: this._model.y };
        },
        hasValue: function () {
          return Se.isNumber(this._model.x) && Se.isNumber(this._model.y);
        },
      }),
        (Fe.extend = Se.inherits);
      var Oe = Fe,
        Le = Oe.extend({
          chart: null,
          currentStep: 0,
          numSteps: 60,
          easing: "",
          render: null,
          onAnimationProgress: null,
          onAnimationComplete: null,
        }),
        Ee = Le;
      Object.defineProperty(Le.prototype, "animationObject", {
        get: function () {
          return this;
        },
      }),
        Object.defineProperty(Le.prototype, "chartInstance", {
          get: function () {
            return this.chart;
          },
          set: function (e) {
            this.chart = e;
          },
        }),
        he._set("global", {
          animation: {
            duration: 1e3,
            easing: "easeOutQuart",
            onProgress: Se.noop,
            onComplete: Se.noop,
          },
        });
      var Ne = {
          animations: [],
          request: null,
          addAnimation: function (e, t, r, a) {
            var n = this.animations;
            var i, o;
            t.chart = e;
            t.startTime = Date.now();
            t.duration = r;
            if (!a) e.animating = true;
            for (i = 0, o = n.length; i < o; ++i)
              if (n[i].chart === e) {
                n[i] = t;
                return;
              }
            n.push(t);
            if (n.length === 1) this.requestAnimationFrame();
          },
          cancelAnimation: function (t) {
            var e = Se.findIndex(this.animations, function (e) {
              return e.chart === t;
            });
            if (e !== -1) {
              this.animations.splice(e, 1);
              t.animating = false;
            }
          },
          requestAnimationFrame: function () {
            var e = this;
            if (e.request === null)
              e.request = Se.requestAnimFrame.call(window, function () {
                e.request = null;
                e.startDigest();
              });
          },
          startDigest: function () {
            var e = this;
            e.advance();
            if (e.animations.length > 0) e.requestAnimationFrame();
          },
          advance: function () {
            var e = this.animations;
            var t, r, a, n;
            var i = 0;
            while (i < e.length) {
              t = e[i];
              r = t.chart;
              a = t.numSteps;
              n = Math.floor(((Date.now() - t.startTime) / t.duration) * a) + 1;
              t.currentStep = Math.min(n, a);
              Se.callback(t.render, [r, t], r);
              Se.callback(t.onAnimationProgress, [t], r);
              if (t.currentStep >= a) {
                Se.callback(t.onAnimationComplete, [t], r);
                r.animating = false;
                e.splice(i, 1);
              } else ++i;
            }
          },
        },
        Re = Se.options.resolve,
        ze = ["push", "pop", "shift", "splice", "unshift"];
      function Ve(n, e) {
        if (n._chartjs) {
          n._chartjs.listeners.push(e);
          return;
        }
        Object.defineProperty(n, "_chartjs", {
          configurable: true,
          enumerable: false,
          value: { listeners: [e] },
        });
        ze.forEach(function (e) {
          var r = "onData" + e.charAt(0).toUpperCase() + e.slice(1);
          var a = n[e];
          Object.defineProperty(n, e, {
            configurable: true,
            enumerable: false,
            value: function () {
              var t = Array.prototype.slice.call(arguments);
              var e = a.apply(this, t);
              Se.each(n._chartjs.listeners, function (e) {
                if (typeof e[r] === "function") e[r].apply(e, t);
              });
              return e;
            },
          });
        });
      }
      function Be(t, e) {
        var r = t._chartjs;
        if (!r) return;
        var a = r.listeners;
        var n = a.indexOf(e);
        if (n !== -1) a.splice(n, 1);
        if (a.length > 0) return;
        ze.forEach(function (e) {
          delete t[e];
        });
        delete t._chartjs;
      }
      var We = function (e, t) {
        this.initialize(e, t);
      };
      Se.extend(We.prototype, {
        datasetElementType: null,
        dataElementType: null,
        _datasetElementOptions: [
          "backgroundColor",
          "borderCapStyle",
          "borderColor",
          "borderDash",
          "borderDashOffset",
          "borderJoinStyle",
          "borderWidth",
        ],
        _dataElementOptions: [
          "backgroundColor",
          "borderColor",
          "borderWidth",
          "pointStyle",
        ],
        initialize: function (e, t) {
          var r = this;
          r.chart = e;
          r.index = t;
          r.linkScales();
          r.addElements();
          r._type = r.getMeta().type;
        },
        updateIndex: function (e) {
          this.index = e;
        },
        linkScales: function () {
          var e = this;
          var t = e.getMeta();
          var r = e.chart;
          var a = r.scales;
          var n = e.getDataset();
          var i = r.options.scales;
          if (t.xAxisID === null || !(t.xAxisID in a) || n.xAxisID)
            t.xAxisID = n.xAxisID || i.xAxes[0].id;
          if (t.yAxisID === null || !(t.yAxisID in a) || n.yAxisID)
            t.yAxisID = n.yAxisID || i.yAxes[0].id;
        },
        getDataset: function () {
          return this.chart.data.datasets[this.index];
        },
        getMeta: function () {
          return this.chart.getDatasetMeta(this.index);
        },
        getScaleForId: function (e) {
          return this.chart.scales[e];
        },
        _getValueScaleId: function () {
          return this.getMeta().yAxisID;
        },
        _getIndexScaleId: function () {
          return this.getMeta().xAxisID;
        },
        _getValueScale: function () {
          return this.getScaleForId(this._getValueScaleId());
        },
        _getIndexScale: function () {
          return this.getScaleForId(this._getIndexScaleId());
        },
        reset: function () {
          this._update(true);
        },
        destroy: function () {
          if (this._data) Be(this._data, this);
        },
        createMetaDataset: function () {
          var e = this;
          var t = e.datasetElementType;
          return t && new t({ _chart: e.chart, _datasetIndex: e.index });
        },
        createMetaData: function (e) {
          var t = this;
          var r = t.dataElementType;
          return (
            r && new r({ _chart: t.chart, _datasetIndex: t.index, _index: e })
          );
        },
        addElements: function () {
          var e = this;
          var t = e.getMeta();
          var r = e.getDataset().data || [];
          var a = t.data;
          var n, i;
          for (n = 0, i = r.length; n < i; ++n)
            a[n] = a[n] || e.createMetaData(n);
          t.dataset = t.dataset || e.createMetaDataset();
        },
        addElementAndReset: function (e) {
          var t = this.createMetaData(e);
          this.getMeta().data.splice(e, 0, t);
          this.updateElement(t, e, true);
        },
        buildOrUpdateElements: function () {
          var e = this;
          var t = e.getDataset();
          var r = t.data || (t.data = []);
          if (e._data !== r) {
            if (e._data) Be(e._data, e);
            if (r && Object.isExtensible(r)) Ve(r, e);
            e._data = r;
          }
          e.resyncElements();
        },
        _configure: function () {
          var e = this;
          e._config = Se.merge(
            Object.create(null),
            [e.chart.options.datasets[e._type], e.getDataset()],
            {
              merger: function (e, t, r) {
                if (e !== "_meta" && e !== "data") Se._merger(e, t, r);
              },
            }
          );
        },
        _update: function (e) {
          var t = this;
          t._configure();
          t._cachedDataOpts = null;
          t.update(e);
        },
        update: Se.noop,
        transition: function (e) {
          var t = this.getMeta();
          var r = t.data || [];
          var a = r.length;
          var n = 0;
          for (; n < a; ++n) r[n].transition(e);
          if (t.dataset) t.dataset.transition(e);
        },
        draw: function () {
          var e = this.getMeta();
          var t = e.data || [];
          var r = t.length;
          var a = 0;
          if (e.dataset) e.dataset.draw();
          for (; a < r; ++a) t[a].draw();
        },
        getStyle: function (e) {
          var t = this;
          var r = t.getMeta();
          var a = r.dataset;
          var n;
          t._configure();
          if (a && e === undefined)
            n = t._resolveDatasetElementOptions(a || {});
          else {
            e = e || 0;
            n = t._resolveDataElementOptions(r.data[e] || {}, e);
          }
          if (n.fill === false || n.fill === null)
            n.backgroundColor = n.borderColor;
          return n;
        },
        _resolveDatasetElementOptions: function (e, t) {
          var r = this;
          var a = r.chart;
          var n = r._config;
          var i = e.custom || {};
          var o =
            a.options.elements[r.datasetElementType.prototype._type] || {};
          var s = r._datasetElementOptions;
          var l = {};
          var u, f, c, d;
          var h = {
            chart: a,
            dataset: r.getDataset(),
            datasetIndex: r.index,
            hover: t,
          };
          for (u = 0, f = s.length; u < f; ++u) {
            c = s[u];
            d = t ? "hover" + c.charAt(0).toUpperCase() + c.slice(1) : c;
            l[c] = Re([i[d], n[d], o[d]], h);
          }
          return l;
        },
        _resolveDataElementOptions: function (e, t) {
          var r = this;
          var a = e && e.custom;
          var n = r._cachedDataOpts;
          if (n && !a) return n;
          var i = r.chart;
          var o = r._config;
          var s = i.options.elements[r.dataElementType.prototype._type] || {};
          var l = r._dataElementOptions;
          var u = {};
          var f = {
            chart: i,
            dataIndex: t,
            dataset: r.getDataset(),
            datasetIndex: r.index,
          };
          var c = { cacheable: !a };
          var d, h, v, g;
          a = a || {};
          if (Se.isArray(l))
            for (h = 0, v = l.length; h < v; ++h) {
              g = l[h];
              u[g] = Re([a[g], o[g], s[g]], f, t, c);
            }
          else {
            d = Object.keys(l);
            for (h = 0, v = d.length; h < v; ++h) {
              g = d[h];
              u[g] = Re([a[g], o[l[g]], o[g], s[g]], f, t, c);
            }
          }
          if (c.cacheable) r._cachedDataOpts = Object.freeze(u);
          return u;
        },
        removeHoverStyle: function (e) {
          Se.merge(e._model, e.$previousStyle || {});
          delete e.$previousStyle;
        },
        setHoverStyle: function (e) {
          var t = this.chart.data.datasets[e._datasetIndex];
          var r = e._index;
          var a = e.custom || {};
          var n = e._model;
          var i = Se.getHoverColor;
          e.$previousStyle = {
            backgroundColor: n.backgroundColor,
            borderColor: n.borderColor,
            borderWidth: n.borderWidth,
          };
          n.backgroundColor = Re(
            [
              a.hoverBackgroundColor,
              t.hoverBackgroundColor,
              i(n.backgroundColor),
            ],
            undefined,
            r
          );
          n.borderColor = Re(
            [a.hoverBorderColor, t.hoverBorderColor, i(n.borderColor)],
            undefined,
            r
          );
          n.borderWidth = Re(
            [a.hoverBorderWidth, t.hoverBorderWidth, n.borderWidth],
            undefined,
            r
          );
        },
        _removeDatasetHoverStyle: function () {
          var e = this.getMeta().dataset;
          if (e) this.removeHoverStyle(e);
        },
        _setDatasetHoverStyle: function () {
          var e = this.getMeta().dataset;
          var t = {};
          var r, a, n, i, o, s;
          if (!e) return;
          s = e._model;
          o = this._resolveDatasetElementOptions(e, true);
          i = Object.keys(o);
          for (r = 0, a = i.length; r < a; ++r) {
            n = i[r];
            t[n] = s[n];
            s[n] = o[n];
          }
          e.$previousStyle = t;
        },
        resyncElements: function () {
          var e = this;
          var t = e.getMeta();
          var r = e.getDataset().data;
          var a = t.data.length;
          var n = r.length;
          if (n < a) t.data.splice(n, a - n);
          else if (n > a) e.insertElements(a, n - a);
        },
        insertElements: function (e, t) {
          for (var r = 0; r < t; ++r) this.addElementAndReset(e + r);
        },
        onDataPush: function () {
          var e = arguments.length;
          this.insertElements(this.getDataset().data.length - e, e);
        },
        onDataPop: function () {
          this.getMeta().data.pop();
        },
        onDataShift: function () {
          this.getMeta().data.shift();
        },
        onDataSplice: function (e, t) {
          this.getMeta().data.splice(e, t);
          this.insertElements(e, arguments.length - 2);
        },
        onDataUnshift: function () {
          this.insertElements(0, arguments.length);
        },
      }),
        (We.extend = Se.inherits);
      var He = We,
        je = Math.PI * 2;
      function Ue(e, t) {
        var r = t.startAngle;
        var a = t.endAngle;
        var n = t.pixelMargin;
        var i = n / t.outerRadius;
        var o = t.x;
        var s = t.y;
        e.beginPath();
        e.arc(o, s, t.outerRadius, r - i, a + i);
        if (t.innerRadius > n) {
          i = n / t.innerRadius;
          e.arc(o, s, t.innerRadius - n, a + i, r - i, true);
        } else e.arc(o, s, n, a + Math.PI / 2, r - Math.PI / 2);
        e.closePath();
        e.clip();
      }
      function qe(e, t, r, a) {
        var n = r.endAngle;
        var i;
        if (a) {
          r.endAngle = r.startAngle + je;
          Ue(e, r);
          r.endAngle = n;
          if (r.endAngle === r.startAngle && r.fullCircles) {
            r.endAngle += je;
            r.fullCircles--;
          }
        }
        e.beginPath();
        e.arc(r.x, r.y, r.innerRadius, r.startAngle + je, r.startAngle, true);
        for (i = 0; i < r.fullCircles; ++i) e.stroke();
        e.beginPath();
        e.arc(r.x, r.y, t.outerRadius, r.startAngle, r.startAngle + je);
        for (i = 0; i < r.fullCircles; ++i) e.stroke();
      }
      function Ye(e, t, r) {
        var a = t.borderAlign === "inner";
        if (a) {
          e.lineWidth = t.borderWidth * 2;
          e.lineJoin = "round";
        } else {
          e.lineWidth = t.borderWidth;
          e.lineJoin = "bevel";
        }
        if (r.fullCircles) qe(e, t, r, a);
        if (a) Ue(e, r);
        e.beginPath();
        e.arc(r.x, r.y, t.outerRadius, r.startAngle, r.endAngle);
        e.arc(r.x, r.y, r.innerRadius, r.endAngle, r.startAngle, true);
        e.closePath();
        e.stroke();
      }
      he._set("global", {
        elements: {
          arc: {
            backgroundColor: he.global.defaultColor,
            borderColor: "#fff",
            borderWidth: 2,
            borderAlign: "center",
          },
        },
      });
      var Ge = Oe.extend({
          _type: "arc",
          inLabelRange: function (e) {
            var t = this._view;
            if (t)
              return (
                Math.pow(e - t.x, 2) < Math.pow(t.radius + t.hoverRadius, 2)
              );
            return false;
          },
          inRange: function (e, t) {
            var r = this._view;
            if (r) {
              var a = Se.getAngleFromPoint(r, { x: e, y: t });
              var n = a.angle;
              var i = a.distance;
              var o = r.startAngle;
              var s = r.endAngle;
              while (s < o) s += je;
              while (n > s) n -= je;
              while (n < o) n += je;
              var l = n >= o && n <= s;
              var u = i >= r.innerRadius && i <= r.outerRadius;
              return l && u;
            }
            return false;
          },
          getCenterPoint: function () {
            var e = this._view;
            var t = (e.startAngle + e.endAngle) / 2;
            var r = (e.innerRadius + e.outerRadius) / 2;
            return { x: e.x + Math.cos(t) * r, y: e.y + Math.sin(t) * r };
          },
          getArea: function () {
            var e = this._view;
            return (
              Math.PI *
              ((e.endAngle - e.startAngle) / (2 * Math.PI)) *
              (Math.pow(e.outerRadius, 2) - Math.pow(e.innerRadius, 2))
            );
          },
          tooltipPosition: function () {
            var e = this._view;
            var t = e.startAngle + (e.endAngle - e.startAngle) / 2;
            var r = (e.outerRadius - e.innerRadius) / 2 + e.innerRadius;
            return { x: e.x + Math.cos(t) * r, y: e.y + Math.sin(t) * r };
          },
          draw: function () {
            var e = this._chart.ctx;
            var t = this._view;
            var r = t.borderAlign === "inner" ? 0.33 : 0;
            var a = {
              x: t.x,
              y: t.y,
              innerRadius: t.innerRadius,
              outerRadius: Math.max(t.outerRadius - r, 0),
              pixelMargin: r,
              startAngle: t.startAngle,
              endAngle: t.endAngle,
              fullCircles: Math.floor(t.circumference / je),
            };
            var n;
            e.save();
            e.fillStyle = t.backgroundColor;
            e.strokeStyle = t.borderColor;
            if (a.fullCircles) {
              a.endAngle = a.startAngle + je;
              e.beginPath();
              e.arc(a.x, a.y, a.outerRadius, a.startAngle, a.endAngle);
              e.arc(a.x, a.y, a.innerRadius, a.endAngle, a.startAngle, true);
              e.closePath();
              for (n = 0; n < a.fullCircles; ++n) e.fill();
              a.endAngle = a.startAngle + (t.circumference % je);
            }
            e.beginPath();
            e.arc(a.x, a.y, a.outerRadius, a.startAngle, a.endAngle);
            e.arc(a.x, a.y, a.innerRadius, a.endAngle, a.startAngle, true);
            e.closePath();
            e.fill();
            if (t.borderWidth) Ye(e, t, a);
            e.restore();
          },
        }),
        Xe = Se.valueOrDefault,
        Ke = he.global.defaultColor;
      he._set("global", {
        elements: {
          line: {
            tension: 0.4,
            backgroundColor: Ke,
            borderWidth: 3,
            borderColor: Ke,
            borderCapStyle: "butt",
            borderDash: [],
            borderDashOffset: 0,
            borderJoinStyle: "miter",
            capBezierPoints: true,
            fill: true,
          },
        },
      });
      var $e = Oe.extend({
          _type: "line",
          draw: function () {
            var e = this;
            var t = e._view;
            var r = e._chart.ctx;
            var a = t.spanGaps;
            var n = e._children.slice();
            var i = he.global;
            var o = i.elements.line;
            var s = -1;
            var l = e._loop;
            var u, f, c;
            if (!n.length) return;
            if (e._loop) {
              for (u = 0; u < n.length; ++u) {
                f = Se.previousItem(n, u);
                if (!n[u]._view.skip && f._view.skip) {
                  n = n.slice(u).concat(n.slice(0, u));
                  l = a;
                  break;
                }
              }
              if (l) n.push(n[0]);
            }
            r.save();
            r.lineCap = t.borderCapStyle || o.borderCapStyle;
            if (r.setLineDash) r.setLineDash(t.borderDash || o.borderDash);
            r.lineDashOffset = Xe(t.borderDashOffset, o.borderDashOffset);
            r.lineJoin = t.borderJoinStyle || o.borderJoinStyle;
            r.lineWidth = Xe(t.borderWidth, o.borderWidth);
            r.strokeStyle = t.borderColor || i.defaultColor;
            r.beginPath();
            c = n[0]._view;
            if (!c.skip) {
              r.moveTo(c.x, c.y);
              s = 0;
            }
            for (u = 1; u < n.length; ++u) {
              c = n[u]._view;
              f = s === -1 ? Se.previousItem(n, u) : n[s];
              if (!c.skip) {
                if ((s !== u - 1 && !a) || s === -1) r.moveTo(c.x, c.y);
                else Se.canvas.lineTo(r, f._view, c);
                s = u;
              }
            }
            if (l) r.closePath();
            r.stroke();
            r.restore();
          },
        }),
        Ze = Se.valueOrDefault,
        Je = he.global.defaultColor;
      function Qe(e) {
        var t = this._view;
        return t ? Math.abs(e - t.x) < t.radius + t.hitRadius : false;
      }
      function et(e) {
        var t = this._view;
        return t ? Math.abs(e - t.y) < t.radius + t.hitRadius : false;
      }
      he._set("global", {
        elements: {
          point: {
            radius: 3,
            pointStyle: "circle",
            backgroundColor: Je,
            borderColor: Je,
            borderWidth: 1,
            hitRadius: 1,
            hoverRadius: 4,
            hoverBorderWidth: 1,
          },
        },
      });
      var tt = Oe.extend({
          _type: "point",
          inRange: function (e, t) {
            var r = this._view;
            return r
              ? Math.pow(e - r.x, 2) + Math.pow(t - r.y, 2) <
                  Math.pow(r.hitRadius + r.radius, 2)
              : false;
          },
          inLabelRange: Qe,
          inXRange: Qe,
          inYRange: et,
          getCenterPoint: function () {
            var e = this._view;
            return { x: e.x, y: e.y };
          },
          getArea: function () {
            return Math.PI * Math.pow(this._view.radius, 2);
          },
          tooltipPosition: function () {
            var e = this._view;
            return { x: e.x, y: e.y, padding: e.radius + e.borderWidth };
          },
          draw: function (e) {
            var t = this._view;
            var r = this._chart.ctx;
            var a = t.pointStyle;
            var n = t.rotation;
            var i = t.radius;
            var o = t.x;
            var s = t.y;
            var l = he.global;
            var u = l.defaultColor;
            if (t.skip) return;
            if (e === undefined || Se.canvas._isPointInArea(t, e)) {
              r.strokeStyle = t.borderColor || u;
              r.lineWidth = Ze(t.borderWidth, l.elements.point.borderWidth);
              r.fillStyle = t.backgroundColor || u;
              Se.canvas.drawPoint(r, a, i, o, s, n);
            }
          },
        }),
        rt = he.global.defaultColor;
      function at(e) {
        return e && e.width !== undefined;
      }
      function nt(e) {
        var t, r, a, n, i;
        if (at(e)) {
          i = e.width / 2;
          t = e.x - i;
          r = e.x + i;
          a = Math.min(e.y, e.base);
          n = Math.max(e.y, e.base);
        } else {
          i = e.height / 2;
          t = Math.min(e.x, e.base);
          r = Math.max(e.x, e.base);
          a = e.y - i;
          n = e.y + i;
        }
        return { left: t, top: a, right: r, bottom: n };
      }
      function it(e, t, r) {
        return e === t ? r : e === r ? t : e;
      }
      function ot(e) {
        var t = e.borderSkipped;
        var r = {};
        if (!t) return r;
        if (e.horizontal) {
          if (e.base > e.x) t = it(t, "left", "right");
        } else if (e.base < e.y) t = it(t, "bottom", "top");
        r[t] = true;
        return r;
      }
      function st(e, t, r) {
        var a = e.borderWidth;
        var n = ot(e);
        var i, o, s, l;
        if (Se.isObject(a)) {
          i = +a.top || 0;
          o = +a.right || 0;
          s = +a.bottom || 0;
          l = +a.left || 0;
        } else i = o = s = l = +a || 0;
        return {
          t: n.top || i < 0 ? 0 : i > r ? r : i,
          r: n.right || o < 0 ? 0 : o > t ? t : o,
          b: n.bottom || s < 0 ? 0 : s > r ? r : s,
          l: n.left || l < 0 ? 0 : l > t ? t : l,
        };
      }
      function lt(e) {
        var t = nt(e);
        var r = t.right - t.left;
        var a = t.bottom - t.top;
        var n = st(e, r / 2, a / 2);
        return {
          outer: { x: t.left, y: t.top, w: r, h: a },
          inner: {
            x: t.left + n.l,
            y: t.top + n.t,
            w: r - n.l - n.r,
            h: a - n.t - n.b,
          },
        };
      }
      function ut(e, t, r) {
        var a = t === null;
        var n = r === null;
        var i = !e || (a && n) ? false : nt(e);
        return (
          i &&
          (a || (t >= i.left && t <= i.right)) &&
          (n || (r >= i.top && r <= i.bottom))
        );
      }
      he._set("global", {
        elements: {
          rectangle: {
            backgroundColor: rt,
            borderColor: rt,
            borderSkipped: "bottom",
            borderWidth: 0,
          },
        },
      });
      var ft = Oe.extend({
          _type: "rectangle",
          draw: function () {
            var e = this._chart.ctx;
            var t = this._view;
            var r = lt(t);
            var a = r.outer;
            var n = r.inner;
            e.fillStyle = t.backgroundColor;
            e.fillRect(a.x, a.y, a.w, a.h);
            if (a.w === n.w && a.h === n.h) return;
            e.save();
            e.beginPath();
            e.rect(a.x, a.y, a.w, a.h);
            e.clip();
            e.fillStyle = t.borderColor;
            e.rect(n.x, n.y, n.w, n.h);
            e.fill("evenodd");
            e.restore();
          },
          height: function () {
            var e = this._view;
            return e.base - e.y;
          },
          inRange: function (e, t) {
            return ut(this._view, e, t);
          },
          inLabelRange: function (e, t) {
            var r = this._view;
            return at(r) ? ut(r, e, null) : ut(r, null, t);
          },
          inXRange: function (e) {
            return ut(this._view, e, null);
          },
          inYRange: function (e) {
            return ut(this._view, null, e);
          },
          getCenterPoint: function () {
            var e = this._view;
            var t, r;
            if (at(e)) {
              t = e.x;
              r = (e.y + e.base) / 2;
            } else {
              t = (e.x + e.base) / 2;
              r = e.y;
            }
            return { x: t, y: r };
          },
          getArea: function () {
            var e = this._view;
            return at(e)
              ? e.width * Math.abs(e.y - e.base)
              : e.height * Math.abs(e.x - e.base);
          },
          tooltipPosition: function () {
            var e = this._view;
            return { x: e.x, y: e.y };
          },
        }),
        ct = {},
        dt,
        ht = $e,
        vt = tt,
        gt = ft;
      (ct.Arc = Ge), (ct.Line = ht), (ct.Point = vt), (ct.Rectangle = gt);
      var pt = Se._deprecated,
        mt = Se.valueOrDefault;
      function bt(e, t) {
        var r = e._length;
        var a, n, i, o;
        for (i = 1, o = t.length; i < o; ++i)
          r = Math.min(r, Math.abs(t[i] - t[i - 1]));
        for (i = 0, o = e.getTicks().length; i < o; ++i) {
          n = e.getPixelForTick(i);
          r = i > 0 ? Math.min(r, Math.abs(n - a)) : r;
          a = n;
        }
        return r;
      }
      function xt(e, t, r) {
        var a = r.barThickness;
        var n = t.stackCount;
        var i = t.pixels[e];
        var o = Se.isNullOrUndef(a) ? bt(t.scale, t.pixels) : -1;
        var s, l;
        if (Se.isNullOrUndef(a)) {
          s = o * r.categoryPercentage;
          l = r.barPercentage;
        } else {
          s = a * n;
          l = 1;
        }
        return { chunk: s / n, ratio: l, start: i - s / 2 };
      }
      function yt(e, t, r) {
        var a = t.pixels;
        var n = a[e];
        var i = e > 0 ? a[e - 1] : null;
        var o = e < a.length - 1 ? a[e + 1] : null;
        var s = r.categoryPercentage;
        var l, u;
        if (i === null) i = n - (o === null ? t.end - t.start : o - n);
        if (o === null) o = n + n - i;
        l = n - ((n - Math.min(i, o)) / 2) * s;
        u = (Math.abs(o - i) / 2) * s;
        return { chunk: u / t.stackCount, ratio: r.barPercentage, start: l };
      }
      he._set("bar", {
        hover: { mode: "label" },
        scales: {
          xAxes: [
            {
              type: "category",
              offset: true,
              gridLines: { offsetGridLines: true },
            },
          ],
          yAxes: [{ type: "linear" }],
        },
      }),
        he._set("global", {
          datasets: { bar: { categoryPercentage: 0.8, barPercentage: 0.9 } },
        });
      var wt = He.extend({
          dataElementType: ct.Rectangle,
          _dataElementOptions: [
            "backgroundColor",
            "borderColor",
            "borderSkipped",
            "borderWidth",
            "barPercentage",
            "barThickness",
            "categoryPercentage",
            "maxBarThickness",
            "minBarLength",
          ],
          initialize: function () {
            var e = this;
            var t, r;
            He.prototype.initialize.apply(e, arguments);
            t = e.getMeta();
            t.stack = e.getDataset().stack;
            t.bar = true;
            r = e._getIndexScale().options;
            pt(
              "bar chart",
              r.barPercentage,
              "scales.[x/y]Axes.barPercentage",
              "dataset.barPercentage"
            );
            pt(
              "bar chart",
              r.barThickness,
              "scales.[x/y]Axes.barThickness",
              "dataset.barThickness"
            );
            pt(
              "bar chart",
              r.categoryPercentage,
              "scales.[x/y]Axes.categoryPercentage",
              "dataset.categoryPercentage"
            );
            pt(
              "bar chart",
              e._getValueScale().options.minBarLength,
              "scales.[x/y]Axes.minBarLength",
              "dataset.minBarLength"
            );
            pt(
              "bar chart",
              r.maxBarThickness,
              "scales.[x/y]Axes.maxBarThickness",
              "dataset.maxBarThickness"
            );
          },
          update: function (e) {
            var t = this;
            var r = t.getMeta().data;
            var a, n;
            t._ruler = t.getRuler();
            for (a = 0, n = r.length; a < n; ++a) t.updateElement(r[a], a, e);
          },
          updateElement: function (e, t, r) {
            var a = this;
            var n = a.getMeta();
            var i = a.getDataset();
            var o = a._resolveDataElementOptions(e, t);
            e._xScale = a.getScaleForId(n.xAxisID);
            e._yScale = a.getScaleForId(n.yAxisID);
            e._datasetIndex = a.index;
            e._index = t;
            e._model = {
              backgroundColor: o.backgroundColor,
              borderColor: o.borderColor,
              borderSkipped: o.borderSkipped,
              borderWidth: o.borderWidth,
              datasetLabel: i.label,
              label: a.chart.data.labels[t],
            };
            if (Se.isArray(i.data[t])) e._model.borderSkipped = null;
            a._updateElementGeometry(e, t, r, o);
            e.pivot();
          },
          _updateElementGeometry: function (e, t, r, a) {
            var n = this;
            var i = e._model;
            var o = n._getValueScale();
            var s = o.getBasePixel();
            var l = o.isHorizontal();
            var u = n._ruler || n.getRuler();
            var f = n.calculateBarValuePixels(n.index, t, a);
            var c = n.calculateBarIndexPixels(n.index, t, u, a);
            i.horizontal = l;
            i.base = r ? s : f.base;
            i.x = l ? (r ? s : f.head) : c.center;
            i.y = l ? c.center : r ? s : f.head;
            i.height = l ? c.size : undefined;
            i.width = l ? undefined : c.size;
          },
          _getStacks: function (e) {
            var t = this;
            var r = t._getIndexScale();
            var a = r._getMatchingVisibleMetas(t._type);
            var n = r.options.stacked;
            var i = a.length;
            var o = [];
            var s, l;
            for (s = 0; s < i; ++s) {
              l = a[s];
              if (
                n === false ||
                o.indexOf(l.stack) === -1 ||
                (n === undefined && l.stack === undefined)
              )
                o.push(l.stack);
              if (l.index === e) break;
            }
            return o;
          },
          getStackCount: function () {
            return this._getStacks().length;
          },
          getStackIndex: function (e, t) {
            var r = this._getStacks(e);
            var a = t !== undefined ? r.indexOf(t) : -1;
            return a === -1 ? r.length - 1 : a;
          },
          getRuler: function () {
            var e = this;
            var t = e._getIndexScale();
            var r = [];
            var a, n;
            for (a = 0, n = e.getMeta().data.length; a < n; ++a)
              r.push(t.getPixelForValue(null, a, e.index));
            return {
              pixels: r,
              start: t._startPixel,
              end: t._endPixel,
              stackCount: e.getStackCount(),
              scale: t,
            };
          },
          calculateBarValuePixels: function (e, t, r) {
            var a = this;
            var n = a.chart;
            var i = a._getValueScale();
            var o = i.isHorizontal();
            var s = n.data.datasets;
            var l = i._getMatchingVisibleMetas(a._type);
            var u = i._parseValue(s[e].data[t]);
            var f = r.minBarLength;
            var c = i.options.stacked;
            var d = a.getMeta().stack;
            var h =
              u.start === undefined
                ? 0
                : u.max >= 0 && u.min >= 0
                ? u.min
                : u.max;
            var v =
              u.start === undefined
                ? u.end
                : u.max >= 0 && u.min >= 0
                ? u.max - u.min
                : u.min - u.max;
            var g = l.length;
            var p, m, b, x, y, w, _;
            if (c || (c === undefined && d !== undefined))
              for (p = 0; p < g; ++p) {
                m = l[p];
                if (m.index === e) break;
                if (m.stack === d) {
                  _ = i._parseValue(s[m.index].data[t]);
                  b =
                    _.start === undefined
                      ? _.end
                      : _.min >= 0 && _.max >= 0
                      ? _.max
                      : _.min;
                  if ((u.min < 0 && b < 0) || (u.max >= 0 && b > 0)) h += b;
                }
              }
            x = i.getPixelForValue(h);
            y = i.getPixelForValue(h + v);
            w = y - x;
            if (f !== undefined && Math.abs(w) < f) {
              w = f;
              if ((v >= 0 && !o) || (v < 0 && o)) y = x - f;
              else y = x + f;
            }
            return { size: w, base: x, head: y, center: y + w / 2 };
          },
          calculateBarIndexPixels: function (e, t, r, a) {
            var n = this;
            var i = a.barThickness === "flex" ? yt(t, r, a) : xt(t, r, a);
            var o = n.getStackIndex(e, n.getMeta().stack);
            var s = i.start + i.chunk * o + i.chunk / 2;
            var l = Math.min(
              mt(a.maxBarThickness, Infinity),
              i.chunk * i.ratio
            );
            return { base: s - l / 2, head: s + l / 2, center: s, size: l };
          },
          draw: function () {
            var e = this;
            var t = e.chart;
            var r = e._getValueScale();
            var a = e.getMeta().data;
            var n = e.getDataset();
            var i = a.length;
            var o = 0;
            Se.canvas.clipArea(t.ctx, t.chartArea);
            for (; o < i; ++o) {
              var s = r._parseValue(n.data[o]);
              if (!isNaN(s.min) && !isNaN(s.max)) a[o].draw();
            }
            Se.canvas.unclipArea(t.ctx);
          },
          _resolveDataElementOptions: function () {
            var e = this;
            var t = Se.extend(
              {},
              He.prototype._resolveDataElementOptions.apply(e, arguments)
            );
            var r = e._getIndexScale().options;
            var a = e._getValueScale().options;
            t.barPercentage = mt(r.barPercentage, t.barPercentage);
            t.barThickness = mt(r.barThickness, t.barThickness);
            t.categoryPercentage = mt(
              r.categoryPercentage,
              t.categoryPercentage
            );
            t.maxBarThickness = mt(r.maxBarThickness, t.maxBarThickness);
            t.minBarLength = mt(a.minBarLength, t.minBarLength);
            return t;
          },
        }),
        _t = Se.valueOrDefault,
        kt = Se.options.resolve;
      he._set("bubble", {
        hover: { mode: "single" },
        scales: {
          xAxes: [{ type: "linear", position: "bottom", id: "x-axis-0" }],
          yAxes: [{ type: "linear", position: "left", id: "y-axis-0" }],
        },
        tooltips: {
          callbacks: {
            title: function () {
              return "";
            },
            label: function (e, t) {
              var r = t.datasets[e.datasetIndex].label || "";
              var a = t.datasets[e.datasetIndex].data[e.index];
              return r + ": (" + e.xLabel + ", " + e.yLabel + ", " + a.r + ")";
            },
          },
        },
      });
      var Mt = He.extend({
          dataElementType: ct.Point,
          _dataElementOptions: [
            "backgroundColor",
            "borderColor",
            "borderWidth",
            "hoverBackgroundColor",
            "hoverBorderColor",
            "hoverBorderWidth",
            "hoverRadius",
            "hitRadius",
            "pointStyle",
            "rotation",
          ],
          update: function (r) {
            var a = this;
            var e = a.getMeta();
            var t = e.data;
            Se.each(t, function (e, t) {
              a.updateElement(e, t, r);
            });
          },
          updateElement: function (e, t, r) {
            var a = this;
            var n = a.getMeta();
            var i = e.custom || {};
            var o = a.getScaleForId(n.xAxisID);
            var s = a.getScaleForId(n.yAxisID);
            var l = a._resolveDataElementOptions(e, t);
            var u = a.getDataset().data[t];
            var f = a.index;
            var c = r
              ? o.getPixelForDecimal(0.5)
              : o.getPixelForValue(typeof u === "object" ? u : NaN, t, f);
            var d = r ? s.getBasePixel() : s.getPixelForValue(u, t, f);
            e._xScale = o;
            e._yScale = s;
            e._options = l;
            e._datasetIndex = f;
            e._index = t;
            e._model = {
              backgroundColor: l.backgroundColor,
              borderColor: l.borderColor,
              borderWidth: l.borderWidth,
              hitRadius: l.hitRadius,
              pointStyle: l.pointStyle,
              rotation: l.rotation,
              radius: r ? 0 : l.radius,
              skip: i.skip || isNaN(c) || isNaN(d),
              x: c,
              y: d,
            };
            e.pivot();
          },
          setHoverStyle: function (e) {
            var t = e._model;
            var r = e._options;
            var a = Se.getHoverColor;
            e.$previousStyle = {
              backgroundColor: t.backgroundColor,
              borderColor: t.borderColor,
              borderWidth: t.borderWidth,
              radius: t.radius,
            };
            t.backgroundColor = _t(
              r.hoverBackgroundColor,
              a(r.backgroundColor)
            );
            t.borderColor = _t(r.hoverBorderColor, a(r.borderColor));
            t.borderWidth = _t(r.hoverBorderWidth, r.borderWidth);
            t.radius = r.radius + r.hoverRadius;
          },
          _resolveDataElementOptions: function (e, t) {
            var r = this;
            var a = r.chart;
            var n = r.getDataset();
            var i = e.custom || {};
            var o = n.data[t] || {};
            var s = He.prototype._resolveDataElementOptions.apply(r, arguments);
            var l = {
              chart: a,
              dataIndex: t,
              dataset: n,
              datasetIndex: r.index,
            };
            if (r._cachedDataOpts === s) s = Se.extend({}, s);
            s.radius = kt(
              [
                i.radius,
                o.r,
                r._config.radius,
                a.options.elements.point.radius,
              ],
              l,
              t
            );
            return s;
          },
        }),
        St = Se.valueOrDefault,
        Ct = Math.PI,
        Pt = Ct * 2,
        At = Ct / 2;
      he._set("doughnut", {
        animation: { animateRotate: true, animateScale: false },
        hover: { mode: "single" },
        legendCallback: function (e) {
          var t = document.createElement("ul");
          var r = e.data;
          var a = r.datasets;
          var n = r.labels;
          var i, o, s, l;
          t.setAttribute("class", e.id + "-legend");
          if (a.length)
            for (i = 0, o = a[0].data.length; i < o; ++i) {
              s = t.appendChild(document.createElement("li"));
              l = s.appendChild(document.createElement("span"));
              l.style.backgroundColor = a[0].backgroundColor[i];
              if (n[i]) s.appendChild(document.createTextNode(n[i]));
            }
          return t.outerHTML;
        },
        legend: {
          labels: {
            generateLabels: function (n) {
              var i = n.data;
              if (i.labels.length && i.datasets.length)
                return i.labels.map(function (e, t) {
                  var r = n.getDatasetMeta(0);
                  var a = r.controller.getStyle(t);
                  return {
                    text: e,
                    fillStyle: a.backgroundColor,
                    strokeStyle: a.borderColor,
                    lineWidth: a.borderWidth,
                    hidden: isNaN(i.datasets[0].data[t]) || r.data[t].hidden,
                    index: t,
                  };
                });
              return [];
            },
          },
          onClick: function (e, t) {
            var r = t.index;
            var a = this.chart;
            var n, i, o;
            for (n = 0, i = (a.data.datasets || []).length; n < i; ++n) {
              o = a.getDatasetMeta(n);
              if (o.data[r]) o.data[r].hidden = !o.data[r].hidden;
            }
            a.update();
          },
        },
        cutoutPercentage: 50,
        rotation: -At,
        circumference: Pt,
        tooltips: {
          callbacks: {
            title: function () {
              return "";
            },
            label: function (e, t) {
              var r = t.labels[e.index];
              var a = ": " + t.datasets[e.datasetIndex].data[e.index];
              if (Se.isArray(r)) {
                r = r.slice();
                r[0] += a;
              } else r += a;
              return r;
            },
          },
        },
      });
      var Dt = He.extend({
        dataElementType: ct.Arc,
        linkScales: Se.noop,
        _dataElementOptions: [
          "backgroundColor",
          "borderColor",
          "borderWidth",
          "borderAlign",
          "hoverBackgroundColor",
          "hoverBorderColor",
          "hoverBorderWidth",
        ],
        getRingIndex: function (e) {
          var t = 0;
          for (var r = 0; r < e; ++r) if (this.chart.isDatasetVisible(r)) ++t;
          return t;
        },
        update: function (e) {
          var t = this;
          var r = t.chart;
          var a = r.chartArea;
          var n = r.options;
          var i = 1;
          var o = 1;
          var s = 0;
          var l = 0;
          var u = t.getMeta();
          var f = u.data;
          var c = n.cutoutPercentage / 100 || 0;
          var d = n.circumference;
          var h = t._getRingWeight(t.index);
          var v, g, p, m;
          if (d < Pt) {
            var b = n.rotation % Pt;
            b += b >= Ct ? -Pt : b < -Ct ? Pt : 0;
            var x = b + d;
            var y = Math.cos(b);
            var w = Math.sin(b);
            var _ = Math.cos(x);
            var k = Math.sin(x);
            var M = (b <= 0 && x >= 0) || x >= Pt;
            var S = (b <= At && x >= At) || x >= Pt + At;
            var C = b === -Ct || x >= Ct;
            var P = (b <= -At && x >= -At) || x >= Ct + At;
            var A = C ? -1 : Math.min(y, y * c, _, _ * c);
            var D = P ? -1 : Math.min(w, w * c, k, k * c);
            var T = M ? 1 : Math.max(y, y * c, _, _ * c);
            var I = S ? 1 : Math.max(w, w * c, k, k * c);
            i = (T - A) / 2;
            o = (I - D) / 2;
            s = -(T + A) / 2;
            l = -(I + D) / 2;
          }
          for (p = 0, m = f.length; p < m; ++p)
            f[p]._options = t._resolveDataElementOptions(f[p], p);
          r.borderWidth = t.getMaxBorderWidth();
          v = (a.right - a.left - r.borderWidth) / i;
          g = (a.bottom - a.top - r.borderWidth) / o;
          r.outerRadius = Math.max(Math.min(v, g) / 2, 0);
          r.innerRadius = Math.max(r.outerRadius * c, 0);
          r.radiusLength =
            (r.outerRadius - r.innerRadius) /
            (t._getVisibleDatasetWeightTotal() || 1);
          r.offsetX = s * r.outerRadius;
          r.offsetY = l * r.outerRadius;
          u.total = t.calculateTotal();
          t.outerRadius =
            r.outerRadius - r.radiusLength * t._getRingWeightOffset(t.index);
          t.innerRadius = Math.max(t.outerRadius - r.radiusLength * h, 0);
          for (p = 0, m = f.length; p < m; ++p) t.updateElement(f[p], p, e);
        },
        updateElement: function (e, t, r) {
          var a = this;
          var n = a.chart;
          var i = n.chartArea;
          var o = n.options;
          var s = o.animation;
          var l = (i.left + i.right) / 2;
          var u = (i.top + i.bottom) / 2;
          var f = o.rotation;
          var c = o.rotation;
          var d = a.getDataset();
          var h =
            r && s.animateRotate
              ? 0
              : e.hidden
              ? 0
              : a.calculateCircumference(d.data[t]) * (o.circumference / Pt);
          var v = r && s.animateScale ? 0 : a.innerRadius;
          var g = r && s.animateScale ? 0 : a.outerRadius;
          var p = e._options || {};
          Se.extend(e, {
            _datasetIndex: a.index,
            _index: t,
            _model: {
              backgroundColor: p.backgroundColor,
              borderColor: p.borderColor,
              borderWidth: p.borderWidth,
              borderAlign: p.borderAlign,
              x: l + n.offsetX,
              y: u + n.offsetY,
              startAngle: f,
              endAngle: c,
              circumference: h,
              outerRadius: g,
              innerRadius: v,
              label: Se.valueAtIndexOrDefault(d.label, t, n.data.labels[t]),
            },
          });
          var m = e._model;
          if (!r || !s.animateRotate) {
            if (t === 0) m.startAngle = o.rotation;
            else m.startAngle = a.getMeta().data[t - 1]._model.endAngle;
            m.endAngle = m.startAngle + m.circumference;
          }
          e.pivot();
        },
        calculateTotal: function () {
          var r = this.getDataset();
          var e = this.getMeta();
          var a = 0;
          var n;
          Se.each(e.data, function (e, t) {
            n = r.data[t];
            if (!isNaN(n) && !e.hidden) a += Math.abs(n);
          });
          return a;
        },
        calculateCircumference: function (e) {
          var t = this.getMeta().total;
          if (t > 0 && !isNaN(e)) return Pt * (Math.abs(e) / t);
          return 0;
        },
        getMaxBorderWidth: function (e) {
          var t = this;
          var r = 0;
          var a = t.chart;
          var n, i, o, s, l, u, f, c;
          if (!e)
            for (n = 0, i = a.data.datasets.length; n < i; ++n)
              if (a.isDatasetVisible(n)) {
                o = a.getDatasetMeta(n);
                e = o.data;
                if (n !== t.index) l = o.controller;
                break;
              }
          if (!e) return 0;
          for (n = 0, i = e.length; n < i; ++n) {
            s = e[n];
            if (l) {
              l._configure();
              u = l._resolveDataElementOptions(s, n);
            } else u = s._options;
            if (u.borderAlign !== "inner") {
              f = u.borderWidth;
              c = u.hoverBorderWidth;
              r = f > r ? f : r;
              r = c > r ? c : r;
            }
          }
          return r;
        },
        setHoverStyle: function (e) {
          var t = e._model;
          var r = e._options;
          var a = Se.getHoverColor;
          e.$previousStyle = {
            backgroundColor: t.backgroundColor,
            borderColor: t.borderColor,
            borderWidth: t.borderWidth,
          };
          t.backgroundColor = St(r.hoverBackgroundColor, a(r.backgroundColor));
          t.borderColor = St(r.hoverBorderColor, a(r.borderColor));
          t.borderWidth = St(r.hoverBorderWidth, r.borderWidth);
        },
        _getRingWeightOffset: function (e) {
          var t = 0;
          for (var r = 0; r < e; ++r)
            if (this.chart.isDatasetVisible(r)) t += this._getRingWeight(r);
          return t;
        },
        _getRingWeight: function (e) {
          return Math.max(St(this.chart.data.datasets[e].weight, 1), 0);
        },
        _getVisibleDatasetWeightTotal: function () {
          return this._getRingWeightOffset(this.chart.data.datasets.length);
        },
      });
      he._set("horizontalBar", {
        hover: { mode: "index", axis: "y" },
        scales: {
          xAxes: [{ type: "linear", position: "bottom" }],
          yAxes: [
            {
              type: "category",
              position: "left",
              offset: true,
              gridLines: { offsetGridLines: true },
            },
          ],
        },
        elements: { rectangle: { borderSkipped: "left" } },
        tooltips: { mode: "index", axis: "y" },
      }),
        he._set("global", {
          datasets: {
            horizontalBar: { categoryPercentage: 0.8, barPercentage: 0.9 },
          },
        });
      var Tt = wt.extend({
          _getValueScaleId: function () {
            return this.getMeta().xAxisID;
          },
          _getIndexScaleId: function () {
            return this.getMeta().yAxisID;
          },
        }),
        It = Se.valueOrDefault,
        Ft = Se.options.resolve,
        Ot = Se.canvas._isPointInArea;
      function Lt(e, t) {
        var r = (e && e.options.ticks) || {};
        var a = r.reverse;
        var n = r.min === undefined ? t : 0;
        var i = r.max === undefined ? t : 0;
        return { start: a ? i : n, end: a ? n : i };
      }
      function Et(e, t, r) {
        var a = r / 2;
        var n = Lt(e, a);
        var i = Lt(t, a);
        return { top: i.end, right: n.end, bottom: i.start, left: n.start };
      }
      function Nt(e) {
        var t, r, a, n;
        if (Se.isObject(e)) {
          t = e.top;
          r = e.right;
          a = e.bottom;
          n = e.left;
        } else t = r = a = n = e;
        return { top: t, right: r, bottom: a, left: n };
      }
      he._set("line", {
        showLines: true,
        spanGaps: false,
        hover: { mode: "label" },
        scales: {
          xAxes: [{ type: "category", id: "x-axis-0" }],
          yAxes: [{ type: "linear", id: "y-axis-0" }],
        },
      });
      var Rt = He.extend({
          datasetElementType: ct.Line,
          dataElementType: ct.Point,
          _datasetElementOptions: [
            "backgroundColor",
            "borderCapStyle",
            "borderColor",
            "borderDash",
            "borderDashOffset",
            "borderJoinStyle",
            "borderWidth",
            "cubicInterpolationMode",
            "fill",
          ],
          _dataElementOptions: {
            backgroundColor: "pointBackgroundColor",
            borderColor: "pointBorderColor",
            borderWidth: "pointBorderWidth",
            hitRadius: "pointHitRadius",
            hoverBackgroundColor: "pointHoverBackgroundColor",
            hoverBorderColor: "pointHoverBorderColor",
            hoverBorderWidth: "pointHoverBorderWidth",
            hoverRadius: "pointHoverRadius",
            pointStyle: "pointStyle",
            radius: "pointRadius",
            rotation: "pointRotation",
          },
          update: function (e) {
            var t = this;
            var r = t.getMeta();
            var a = r.dataset;
            var n = r.data || [];
            var i = t.chart.options;
            var o = t._config;
            var s = (t._showLine = It(o.showLine, i.showLines));
            var l, u;
            t._xScale = t.getScaleForId(r.xAxisID);
            t._yScale = t.getScaleForId(r.yAxisID);
            if (s) {
              if (o.tension !== undefined && o.lineTension === undefined)
                o.lineTension = o.tension;
              a._scale = t._yScale;
              a._datasetIndex = t.index;
              a._children = n;
              a._model = t._resolveDatasetElementOptions(a);
              a.pivot();
            }
            for (l = 0, u = n.length; l < u; ++l) t.updateElement(n[l], l, e);
            if (s && a._model.tension !== 0) t.updateBezierControlPoints();
            for (l = 0, u = n.length; l < u; ++l) n[l].pivot();
          },
          updateElement: function (e, t, r) {
            var a = this;
            var n = a.getMeta();
            var i = e.custom || {};
            var o = a.getDataset();
            var s = a.index;
            var l = o.data[t];
            var u = a._xScale;
            var f = a._yScale;
            var c = n.dataset._model;
            var d, h;
            var v = a._resolveDataElementOptions(e, t);
            d = u.getPixelForValue(typeof l === "object" ? l : NaN, t, s);
            h = r ? f.getBasePixel() : a.calculatePointY(l, t, s);
            e._xScale = u;
            e._yScale = f;
            e._options = v;
            e._datasetIndex = s;
            e._index = t;
            e._model = {
              x: d,
              y: h,
              skip: i.skip || isNaN(d) || isNaN(h),
              radius: v.radius,
              pointStyle: v.pointStyle,
              rotation: v.rotation,
              backgroundColor: v.backgroundColor,
              borderColor: v.borderColor,
              borderWidth: v.borderWidth,
              tension: It(i.tension, c ? c.tension : 0),
              steppedLine: c ? c.steppedLine : false,
              hitRadius: v.hitRadius,
            };
          },
          _resolveDatasetElementOptions: function (e) {
            var t = this;
            var r = t._config;
            var a = e.custom || {};
            var n = t.chart.options;
            var i = n.elements.line;
            var o = He.prototype._resolveDatasetElementOptions.apply(
              t,
              arguments
            );
            o.spanGaps = It(r.spanGaps, n.spanGaps);
            o.tension = It(r.lineTension, i.tension);
            o.steppedLine = Ft([a.steppedLine, r.steppedLine, i.stepped]);
            o.clip = Nt(It(r.clip, Et(t._xScale, t._yScale, o.borderWidth)));
            return o;
          },
          calculatePointY: function (e, t, r) {
            var a = this;
            var n = a.chart;
            var i = a._yScale;
            var o = 0;
            var s = 0;
            var l, u, f, c, d, h, v;
            if (i.options.stacked) {
              d = +i.getRightValue(e);
              h = n._getSortedVisibleDatasetMetas();
              v = h.length;
              for (l = 0; l < v; ++l) {
                f = h[l];
                if (f.index === r) break;
                u = n.data.datasets[f.index];
                if (f.type === "line" && f.yAxisID === i.id) {
                  c = +i.getRightValue(u.data[t]);
                  if (c < 0) s += c || 0;
                  else o += c || 0;
                }
              }
              if (d < 0) return i.getPixelForValue(s + d);
              return i.getPixelForValue(o + d);
            }
            return i.getPixelForValue(e);
          },
          updateBezierControlPoints: function () {
            var e = this;
            var t = e.chart;
            var r = e.getMeta();
            var a = r.dataset._model;
            var n = t.chartArea;
            var i = r.data || [];
            var o, s, l, u;
            if (a.spanGaps)
              i = i.filter(function (e) {
                return !e._model.skip;
              });
            function f(e, t, r) {
              return Math.max(Math.min(e, r), t);
            }
            if (a.cubicInterpolationMode === "monotone")
              Se.splineCurveMonotone(i);
            else
              for (o = 0, s = i.length; o < s; ++o) {
                l = i[o]._model;
                u = Se.splineCurve(
                  Se.previousItem(i, o)._model,
                  l,
                  Se.nextItem(i, o)._model,
                  a.tension
                );
                l.controlPointPreviousX = u.previous.x;
                l.controlPointPreviousY = u.previous.y;
                l.controlPointNextX = u.next.x;
                l.controlPointNextY = u.next.y;
              }
            if (t.options.elements.line.capBezierPoints)
              for (o = 0, s = i.length; o < s; ++o) {
                l = i[o]._model;
                if (Ot(l, n)) {
                  if (o > 0 && Ot(i[o - 1]._model, n)) {
                    l.controlPointPreviousX = f(
                      l.controlPointPreviousX,
                      n.left,
                      n.right
                    );
                    l.controlPointPreviousY = f(
                      l.controlPointPreviousY,
                      n.top,
                      n.bottom
                    );
                  }
                  if (o < i.length - 1 && Ot(i[o + 1]._model, n)) {
                    l.controlPointNextX = f(
                      l.controlPointNextX,
                      n.left,
                      n.right
                    );
                    l.controlPointNextY = f(
                      l.controlPointNextY,
                      n.top,
                      n.bottom
                    );
                  }
                }
              }
          },
          draw: function () {
            var e = this;
            var t = e.chart;
            var r = e.getMeta();
            var a = r.data || [];
            var n = t.chartArea;
            var i = t.canvas;
            var o = 0;
            var s = a.length;
            var l;
            if (e._showLine) {
              l = r.dataset._model.clip;
              Se.canvas.clipArea(t.ctx, {
                left: l.left === false ? 0 : n.left - l.left,
                right: l.right === false ? i.width : n.right + l.right,
                top: l.top === false ? 0 : n.top - l.top,
                bottom: l.bottom === false ? i.height : n.bottom + l.bottom,
              });
              r.dataset.draw();
              Se.canvas.unclipArea(t.ctx);
            }
            for (; o < s; ++o) a[o].draw(n);
          },
          setHoverStyle: function (e) {
            var t = e._model;
            var r = e._options;
            var a = Se.getHoverColor;
            e.$previousStyle = {
              backgroundColor: t.backgroundColor,
              borderColor: t.borderColor,
              borderWidth: t.borderWidth,
              radius: t.radius,
            };
            t.backgroundColor = It(
              r.hoverBackgroundColor,
              a(r.backgroundColor)
            );
            t.borderColor = It(r.hoverBorderColor, a(r.borderColor));
            t.borderWidth = It(r.hoverBorderWidth, r.borderWidth);
            t.radius = It(r.hoverRadius, r.radius);
          },
        }),
        zt = Se.options.resolve;
      he._set("polarArea", {
        scale: {
          type: "radialLinear",
          angleLines: { display: false },
          gridLines: { circular: true },
          pointLabels: { display: false },
          ticks: { beginAtZero: true },
        },
        animation: { animateRotate: true, animateScale: true },
        startAngle: -0.5 * Math.PI,
        legendCallback: function (e) {
          var t = document.createElement("ul");
          var r = e.data;
          var a = r.datasets;
          var n = r.labels;
          var i, o, s, l;
          t.setAttribute("class", e.id + "-legend");
          if (a.length)
            for (i = 0, o = a[0].data.length; i < o; ++i) {
              s = t.appendChild(document.createElement("li"));
              l = s.appendChild(document.createElement("span"));
              l.style.backgroundColor = a[0].backgroundColor[i];
              if (n[i]) s.appendChild(document.createTextNode(n[i]));
            }
          return t.outerHTML;
        },
        legend: {
          labels: {
            generateLabels: function (n) {
              var i = n.data;
              if (i.labels.length && i.datasets.length)
                return i.labels.map(function (e, t) {
                  var r = n.getDatasetMeta(0);
                  var a = r.controller.getStyle(t);
                  return {
                    text: e,
                    fillStyle: a.backgroundColor,
                    strokeStyle: a.borderColor,
                    lineWidth: a.borderWidth,
                    hidden: isNaN(i.datasets[0].data[t]) || r.data[t].hidden,
                    index: t,
                  };
                });
              return [];
            },
          },
          onClick: function (e, t) {
            var r = t.index;
            var a = this.chart;
            var n, i, o;
            for (n = 0, i = (a.data.datasets || []).length; n < i; ++n) {
              o = a.getDatasetMeta(n);
              o.data[r].hidden = !o.data[r].hidden;
            }
            a.update();
          },
        },
        tooltips: {
          callbacks: {
            title: function () {
              return "";
            },
            label: function (e, t) {
              return t.labels[e.index] + ": " + e.yLabel;
            },
          },
        },
      });
      var Vt = He.extend({
        dataElementType: ct.Arc,
        linkScales: Se.noop,
        _dataElementOptions: [
          "backgroundColor",
          "borderColor",
          "borderWidth",
          "borderAlign",
          "hoverBackgroundColor",
          "hoverBorderColor",
          "hoverBorderWidth",
        ],
        _getIndexScaleId: function () {
          return this.chart.scale.id;
        },
        _getValueScaleId: function () {
          return this.chart.scale.id;
        },
        update: function (e) {
          var t = this;
          var r = t.getDataset();
          var a = t.getMeta();
          var n = t.chart.options.startAngle || 0;
          var i = (t._starts = []);
          var o = (t._angles = []);
          var s = a.data;
          var l, u, f;
          t._updateRadius();
          a.count = t.countVisibleElements();
          for (l = 0, u = r.data.length; l < u; l++) {
            i[l] = n;
            f = t._computeAngle(l);
            o[l] = f;
            n += f;
          }
          for (l = 0, u = s.length; l < u; ++l) {
            s[l]._options = t._resolveDataElementOptions(s[l], l);
            t.updateElement(s[l], l, e);
          }
        },
        _updateRadius: function () {
          var e = this;
          var t = e.chart;
          var r = t.chartArea;
          var a = t.options;
          var n = Math.min(r.right - r.left, r.bottom - r.top);
          t.outerRadius = Math.max(n / 2, 0);
          t.innerRadius = Math.max(
            a.cutoutPercentage ? (t.outerRadius / 100) * a.cutoutPercentage : 1,
            0
          );
          t.radiusLength =
            (t.outerRadius - t.innerRadius) / t.getVisibleDatasetCount();
          e.outerRadius = t.outerRadius - t.radiusLength * e.index;
          e.innerRadius = e.outerRadius - t.radiusLength;
        },
        updateElement: function (e, t, r) {
          var a = this;
          var n = a.chart;
          var i = a.getDataset();
          var o = n.options;
          var s = o.animation;
          var l = n.scale;
          var u = n.data.labels;
          var f = l.xCenter;
          var c = l.yCenter;
          var d = o.startAngle;
          var h = e.hidden ? 0 : l.getDistanceFromCenterForValue(i.data[t]);
          var v = a._starts[t];
          var g = v + (e.hidden ? 0 : a._angles[t]);
          var p = s.animateScale
            ? 0
            : l.getDistanceFromCenterForValue(i.data[t]);
          var m = e._options || {};
          Se.extend(e, {
            _datasetIndex: a.index,
            _index: t,
            _scale: l,
            _model: {
              backgroundColor: m.backgroundColor,
              borderColor: m.borderColor,
              borderWidth: m.borderWidth,
              borderAlign: m.borderAlign,
              x: f,
              y: c,
              innerRadius: 0,
              outerRadius: r ? p : h,
              startAngle: r && s.animateRotate ? d : v,
              endAngle: r && s.animateRotate ? d : g,
              label: Se.valueAtIndexOrDefault(u, t, u[t]),
            },
          });
          e.pivot();
        },
        countVisibleElements: function () {
          var r = this.getDataset();
          var e = this.getMeta();
          var a = 0;
          Se.each(e.data, function (e, t) {
            if (!isNaN(r.data[t]) && !e.hidden) a++;
          });
          return a;
        },
        setHoverStyle: function (e) {
          var t = e._model;
          var r = e._options;
          var a = Se.getHoverColor;
          var n = Se.valueOrDefault;
          e.$previousStyle = {
            backgroundColor: t.backgroundColor,
            borderColor: t.borderColor,
            borderWidth: t.borderWidth,
          };
          t.backgroundColor = n(r.hoverBackgroundColor, a(r.backgroundColor));
          t.borderColor = n(r.hoverBorderColor, a(r.borderColor));
          t.borderWidth = n(r.hoverBorderWidth, r.borderWidth);
        },
        _computeAngle: function (e) {
          var t = this;
          var r = this.getMeta().count;
          var a = t.getDataset();
          var n = t.getMeta();
          if (isNaN(a.data[e]) || n.data[e].hidden) return 0;
          var i = {
            chart: t.chart,
            dataIndex: e,
            dataset: a,
            datasetIndex: t.index,
          };
          return zt(
            [t.chart.options.elements.arc.angle, (2 * Math.PI) / r],
            i,
            e
          );
        },
      });
      he._set("pie", Se.clone(he.doughnut)),
        he._set("pie", { cutoutPercentage: 0 });
      var Bt = Dt,
        Wt = Se.valueOrDefault;
      he._set("radar", {
        spanGaps: false,
        scale: { type: "radialLinear" },
        elements: { line: { fill: "start", tension: 0 } },
      });
      var Ht = He.extend({
        datasetElementType: ct.Line,
        dataElementType: ct.Point,
        linkScales: Se.noop,
        _datasetElementOptions: [
          "backgroundColor",
          "borderWidth",
          "borderColor",
          "borderCapStyle",
          "borderDash",
          "borderDashOffset",
          "borderJoinStyle",
          "fill",
        ],
        _dataElementOptions: {
          backgroundColor: "pointBackgroundColor",
          borderColor: "pointBorderColor",
          borderWidth: "pointBorderWidth",
          hitRadius: "pointHitRadius",
          hoverBackgroundColor: "pointHoverBackgroundColor",
          hoverBorderColor: "pointHoverBorderColor",
          hoverBorderWidth: "pointHoverBorderWidth",
          hoverRadius: "pointHoverRadius",
          pointStyle: "pointStyle",
          radius: "pointRadius",
          rotation: "pointRotation",
        },
        _getIndexScaleId: function () {
          return this.chart.scale.id;
        },
        _getValueScaleId: function () {
          return this.chart.scale.id;
        },
        update: function (e) {
          var t = this;
          var r = t.getMeta();
          var a = r.dataset;
          var n = r.data || [];
          var i = t.chart.scale;
          var o = t._config;
          var s, l;
          if (o.tension !== undefined && o.lineTension === undefined)
            o.lineTension = o.tension;
          a._scale = i;
          a._datasetIndex = t.index;
          a._children = n;
          a._loop = true;
          a._model = t._resolveDatasetElementOptions(a);
          a.pivot();
          for (s = 0, l = n.length; s < l; ++s) t.updateElement(n[s], s, e);
          t.updateBezierControlPoints();
          for (s = 0, l = n.length; s < l; ++s) n[s].pivot();
        },
        updateElement: function (e, t, r) {
          var a = this;
          var n = e.custom || {};
          var i = a.getDataset();
          var o = a.chart.scale;
          var s = o.getPointPositionForValue(t, i.data[t]);
          var l = a._resolveDataElementOptions(e, t);
          var u = a.getMeta().dataset._model;
          var f = r ? o.xCenter : s.x;
          var c = r ? o.yCenter : s.y;
          e._scale = o;
          e._options = l;
          e._datasetIndex = a.index;
          e._index = t;
          e._model = {
            x: f,
            y: c,
            skip: n.skip || isNaN(f) || isNaN(c),
            radius: l.radius,
            pointStyle: l.pointStyle,
            rotation: l.rotation,
            backgroundColor: l.backgroundColor,
            borderColor: l.borderColor,
            borderWidth: l.borderWidth,
            tension: Wt(n.tension, u ? u.tension : 0),
            hitRadius: l.hitRadius,
          };
        },
        _resolveDatasetElementOptions: function () {
          var e = this;
          var t = e._config;
          var r = e.chart.options;
          var a = He.prototype._resolveDatasetElementOptions.apply(
            e,
            arguments
          );
          a.spanGaps = Wt(t.spanGaps, r.spanGaps);
          a.tension = Wt(t.lineTension, r.elements.line.tension);
          return a;
        },
        updateBezierControlPoints: function () {
          var e = this;
          var t = e.getMeta();
          var r = e.chart.chartArea;
          var a = t.data || [];
          var n, i, o, s;
          if (t.dataset._model.spanGaps)
            a = a.filter(function (e) {
              return !e._model.skip;
            });
          function l(e, t, r) {
            return Math.max(Math.min(e, r), t);
          }
          for (n = 0, i = a.length; n < i; ++n) {
            o = a[n]._model;
            s = Se.splineCurve(
              Se.previousItem(a, n, true)._model,
              o,
              Se.nextItem(a, n, true)._model,
              o.tension
            );
            o.controlPointPreviousX = l(s.previous.x, r.left, r.right);
            o.controlPointPreviousY = l(s.previous.y, r.top, r.bottom);
            o.controlPointNextX = l(s.next.x, r.left, r.right);
            o.controlPointNextY = l(s.next.y, r.top, r.bottom);
          }
        },
        setHoverStyle: function (e) {
          var t = e._model;
          var r = e._options;
          var a = Se.getHoverColor;
          e.$previousStyle = {
            backgroundColor: t.backgroundColor,
            borderColor: t.borderColor,
            borderWidth: t.borderWidth,
            radius: t.radius,
          };
          t.backgroundColor = Wt(r.hoverBackgroundColor, a(r.backgroundColor));
          t.borderColor = Wt(r.hoverBorderColor, a(r.borderColor));
          t.borderWidth = Wt(r.hoverBorderWidth, r.borderWidth);
          t.radius = Wt(r.hoverRadius, r.radius);
        },
      });
      he._set("scatter", {
        hover: { mode: "single" },
        scales: {
          xAxes: [{ id: "x-axis-1", type: "linear", position: "bottom" }],
          yAxes: [{ id: "y-axis-1", type: "linear", position: "left" }],
        },
        tooltips: {
          callbacks: {
            title: function () {
              return "";
            },
            label: function (e) {
              return "(" + e.xLabel + ", " + e.yLabel + ")";
            },
          },
        },
      }),
        he._set("global", { datasets: { scatter: { showLine: false } } });
      var jt,
        Ut = {
          bar: wt,
          bubble: Mt,
          doughnut: Dt,
          horizontalBar: Tt,
          line: Rt,
          polarArea: Vt,
          pie: Bt,
          radar: Ht,
          scatter: Rt,
        };
      function qt(e, t) {
        if (e.native) return { x: e.x, y: e.y };
        return Se.getRelativePosition(e, t);
      }
      function Yt(e, t) {
        var r = e._getSortedVisibleDatasetMetas();
        var a, n, i, o, s, l;
        for (n = 0, o = r.length; n < o; ++n) {
          a = r[n].data;
          for (i = 0, s = a.length; i < s; ++i) {
            l = a[i];
            if (!l._view.skip) t(l);
          }
        }
      }
      function Gt(e, t) {
        var r = [];
        Yt(e, function (e) {
          if (e.inRange(t.x, t.y)) r.push(e);
        });
        return r;
      }
      function Xt(e, a, n, i) {
        var o = Number.POSITIVE_INFINITY;
        var s = [];
        Yt(e, function (e) {
          if (n && !e.inRange(a.x, a.y)) return;
          var t = e.getCenterPoint();
          var r = i(a, t);
          if (r < o) {
            s = [e];
            o = r;
          } else if (r === o) s.push(e);
        });
        return s;
      }
      function Kt(e) {
        var n = e.indexOf("x") !== -1;
        var i = e.indexOf("y") !== -1;
        return function (e, t) {
          var r = n ? Math.abs(e.x - t.x) : 0;
          var a = i ? Math.abs(e.y - t.y) : 0;
          return Math.sqrt(Math.pow(r, 2) + Math.pow(a, 2));
        };
      }
      function $t(e, t, r) {
        var a = qt(t, e);
        r.axis = r.axis || "x";
        var n = Kt(r.axis);
        var i = r.intersect ? Gt(e, a) : Xt(e, a, false, n);
        var o = [];
        if (!i.length) return [];
        e._getSortedVisibleDatasetMetas().forEach(function (e) {
          var t = e.data[i[0]._index];
          if (t && !t._view.skip) o.push(t);
        });
        return o;
      }
      var Zt = {
          modes: {
            single: function (e, t) {
              var r = qt(t, e);
              var a = [];
              Yt(e, function (e) {
                if (e.inRange(r.x, r.y)) {
                  a.push(e);
                  return a;
                }
              });
              return a.slice(0, 1);
            },
            label: $t,
            index: $t,
            dataset: function (e, t, r) {
              var a = qt(t, e);
              r.axis = r.axis || "xy";
              var n = Kt(r.axis);
              var i = r.intersect ? Gt(e, a) : Xt(e, a, false, n);
              if (i.length > 0) i = e.getDatasetMeta(i[0]._datasetIndex).data;
              return i;
            },
            "x-axis": function (e, t) {
              return $t(e, t, { intersect: false });
            },
            point: function (e, t) {
              var r = qt(t, e);
              return Gt(e, r);
            },
            nearest: function (e, t, r) {
              var a = qt(t, e);
              r.axis = r.axis || "xy";
              var n = Kt(r.axis);
              return Xt(e, a, r.intersect, n);
            },
            x: function (e, t, r) {
              var a = qt(t, e);
              var n = [];
              var i = false;
              Yt(e, function (e) {
                if (e.inXRange(a.x)) n.push(e);
                if (e.inRange(a.x, a.y)) i = true;
              });
              if (r.intersect && !i) n = [];
              return n;
            },
            y: function (e, t, r) {
              var a = qt(t, e);
              var n = [];
              var i = false;
              Yt(e, function (e) {
                if (e.inYRange(a.y)) n.push(e);
                if (e.inRange(a.x, a.y)) i = true;
              });
              if (r.intersect && !i) n = [];
              return n;
            },
          },
        },
        Jt = Se.extend;
      function Qt(e, t) {
        return Se.where(e, function (e) {
          return e.pos === t;
        });
      }
      function er(e, n) {
        return e.sort(function (e, t) {
          var r = n ? t : e;
          var a = n ? e : t;
          return r.weight === a.weight
            ? r.index - a.index
            : r.weight - a.weight;
        });
      }
      function tr(e) {
        var t = [];
        var r, a, n;
        for (r = 0, a = (e || []).length; r < a; ++r) {
          n = e[r];
          t.push({
            index: r,
            box: n,
            pos: n.position,
            horizontal: n.isHorizontal(),
            weight: n.weight,
          });
        }
        return t;
      }
      function rr(e, t) {
        var r, a, n;
        for (r = 0, a = e.length; r < a; ++r) {
          n = e[r];
          n.width = n.horizontal
            ? n.box.fullWidth && t.availableWidth
            : t.vBoxMaxWidth;
          n.height = n.horizontal && t.hBoxMaxHeight;
        }
      }
      function ar(e) {
        var t = tr(e);
        var r = er(Qt(t, "left"), true);
        var a = er(Qt(t, "right"));
        var n = er(Qt(t, "top"), true);
        var i = er(Qt(t, "bottom"));
        return {
          leftAndTop: r.concat(n),
          rightAndBottom: a.concat(i),
          chartArea: Qt(t, "chartArea"),
          vertical: r.concat(a),
          horizontal: n.concat(i),
        };
      }
      function nr(e, t, r, a) {
        return Math.max(e[r], t[r]) + Math.max(e[a], t[a]);
      }
      function ir(e, t, r) {
        var a = r.box;
        var n = e.maxPadding;
        var i, o;
        if (r.size) e[r.pos] -= r.size;
        r.size = r.horizontal ? a.height : a.width;
        e[r.pos] += r.size;
        if (a.getPadding) {
          var s = a.getPadding();
          n.top = Math.max(n.top, s.top);
          n.left = Math.max(n.left, s.left);
          n.bottom = Math.max(n.bottom, s.bottom);
          n.right = Math.max(n.right, s.right);
        }
        i = t.outerWidth - nr(n, e, "left", "right");
        o = t.outerHeight - nr(n, e, "top", "bottom");
        if (i !== e.w || o !== e.h) {
          e.w = i;
          e.h = o;
          var l = r.horizontal ? [i, e.w] : [o, e.h];
          return l[0] !== l[1] && (!isNaN(l[0]) || !isNaN(l[1]));
        }
      }
      function or(r) {
        var a = r.maxPadding;
        function e(e) {
          var t = Math.max(a[e] - r[e], 0);
          r[e] += t;
          return t;
        }
        r.y += e("top");
        r.x += e("left");
        e("right");
        e("bottom");
      }
      function sr(e, r) {
        var a = r.maxPadding;
        function t(e) {
          var t = { left: 0, top: 0, right: 0, bottom: 0 };
          e.forEach(function (e) {
            t[e] = Math.max(r[e], a[e]);
          });
          return t;
        }
        return e ? t(["left", "right"]) : t(["top", "bottom"]);
      }
      function lr(e, t, r) {
        var a = [];
        var n, i, o, s, l, u;
        for (n = 0, i = e.length; n < i; ++n) {
          o = e[n];
          s = o.box;
          s.update(o.width || t.w, o.height || t.h, sr(o.horizontal, t));
          if (ir(t, r, o)) {
            u = true;
            if (a.length) l = true;
          }
          if (!s.fullWidth) a.push(o);
        }
        return l ? lr(a, t, r) || u : u;
      }
      function ur(e, t, r) {
        var a = r.padding;
        var n = t.x;
        var i = t.y;
        var o, s, l, u;
        for (o = 0, s = e.length; o < s; ++o) {
          l = e[o];
          u = l.box;
          if (l.horizontal) {
            u.left = u.fullWidth ? a.left : t.left;
            u.right = u.fullWidth ? r.outerWidth - a.right : t.left + t.w;
            u.top = i;
            u.bottom = i + u.height;
            u.width = u.right - u.left;
            i = u.bottom;
          } else {
            u.left = n;
            u.right = n + u.width;
            u.top = t.top;
            u.bottom = t.top + t.h;
            u.height = u.bottom - u.top;
            n = u.right;
          }
        }
        t.x = n;
        t.y = i;
      }
      he._set("global", {
        layout: { padding: { top: 0, right: 0, bottom: 0, left: 0 } },
      });
      var fr = {
          defaults: {},
          addBox: function (e, t) {
            if (!e.boxes) e.boxes = [];
            t.fullWidth = t.fullWidth || false;
            t.position = t.position || "top";
            t.weight = t.weight || 0;
            t._layers =
              t._layers ||
              function () {
                return [
                  {
                    z: 0,
                    draw: function () {
                      t.draw.apply(t, arguments);
                    },
                  },
                ];
              };
            e.boxes.push(t);
          },
          removeBox: function (e, t) {
            var r = e.boxes ? e.boxes.indexOf(t) : -1;
            if (r !== -1) e.boxes.splice(r, 1);
          },
          configure: function (e, t, r) {
            var a = ["fullWidth", "position", "weight"];
            var n = a.length;
            var i = 0;
            var o;
            for (; i < n; ++i) {
              o = a[i];
              if (r.hasOwnProperty(o)) t[o] = r[o];
            }
          },
          update: function (r, e, t) {
            if (!r) return;
            var a = r.options.layout || {};
            var n = Se.options.toPadding(a.padding);
            var i = e - n.width;
            var o = t - n.height;
            var s = ar(r.boxes);
            var l = s.vertical;
            var u = s.horizontal;
            var f = Object.freeze({
              outerWidth: e,
              outerHeight: t,
              padding: n,
              availableWidth: i,
              vBoxMaxWidth: i / 2 / l.length,
              hBoxMaxHeight: o / 2,
            });
            var c = Jt(
              { maxPadding: Jt({}, n), w: i, h: o, x: n.left, y: n.top },
              n
            );
            rr(l.concat(u), f);
            lr(l, c, f);
            if (lr(u, c, f)) lr(l, c, f);
            or(c);
            ur(s.leftAndTop, c, f);
            c.x += c.w;
            c.y += c.h;
            ur(s.rightAndBottom, c, f);
            r.chartArea = {
              left: c.left,
              top: c.top,
              right: c.left + c.w,
              bottom: c.top + c.h,
            };
            Se.each(s.chartArea, function (e) {
              var t = e.box;
              Jt(t, r.chartArea);
              t.update(c.w, c.h);
            });
          },
        },
        cr = {
          acquireContext: function (e) {
            if (e && e.canvas) e = e.canvas;
            return (e && e.getContext("2d")) || null;
          },
        },
        dr,
        hr,
        vr = t(
          Object.freeze({
            __proto__: null,
            default:
              "/*\r\n * DOM element rendering detection\r\n * https://davidwalsh.name/detect-node-insertion\r\n */\r\n@keyframes chartjs-render-animation {\r\n\tfrom { opacity: 0.99; }\r\n\tto { opacity: 1; }\r\n}\r\n\r\n.chartjs-render-monitor {\r\n\tanimation: chartjs-render-animation 0.001s;\r\n}\r\n\r\n/*\r\n * DOM element resizing detection\r\n * https://github.com/marcj/css-element-queries\r\n */\r\n.chartjs-size-monitor,\r\n.chartjs-size-monitor-expand,\r\n.chartjs-size-monitor-shrink {\r\n\tposition: absolute;\r\n\tdirection: ltr;\r\n\tleft: 0;\r\n\ttop: 0;\r\n\tright: 0;\r\n\tbottom: 0;\r\n\toverflow: hidden;\r\n\tpointer-events: none;\r\n\tvisibility: hidden;\r\n\tz-index: -1;\r\n}\r\n\r\n.chartjs-size-monitor-expand > div {\r\n\tposition: absolute;\r\n\twidth: 1000000px;\r\n\theight: 1000000px;\r\n\tleft: 0;\r\n\ttop: 0;\r\n}\r\n\r\n.chartjs-size-monitor-shrink > div {\r\n\tposition: absolute;\r\n\twidth: 200%;\r\n\theight: 200%;\r\n\tleft: 0;\r\n\ttop: 0;\r\n}\r\n",
          })
        ),
        gr = "$chartjs",
        pr = "chartjs-",
        mr = pr + "size-monitor",
        br = pr + "render-monitor",
        xr = pr + "render-animation",
        yr = ["animationstart", "webkitAnimationStart"],
        wr = {
          touchstart: "mousedown",
          touchmove: "mousemove",
          touchend: "mouseup",
          pointerenter: "mouseenter",
          pointerdown: "mousedown",
          pointermove: "mousemove",
          pointerup: "mouseup",
          pointerleave: "mouseout",
          pointerout: "mouseout",
        };
      function _r(e, t) {
        var r = Se.getStyle(e, t);
        var a = r && r.match(/^(\d+)(\.\d+)?px$/);
        return a ? Number(a[1]) : undefined;
      }
      function kr(e, t) {
        var r = e.style;
        var a = e.getAttribute("height");
        var n = e.getAttribute("width");
        e[gr] = {
          initial: {
            height: a,
            width: n,
            style: { display: r.display, height: r.height, width: r.width },
          },
        };
        r.display = r.display || "block";
        if (n === null || n === "") {
          var i = _r(e, "width");
          if (i !== undefined) e.width = i;
        }
        if (a === null || a === "")
          if (e.style.height === "")
            e.height = e.width / (t.options.aspectRatio || 2);
          else {
            var o = _r(e, "height");
            if (i !== undefined) e.height = o;
          }
        return e;
      }
      var Mr,
        Sr = (function () {
          var e = false;
          try {
            var t = Object.defineProperty({}, "passive", {
              get: function () {
                e = true;
              },
            });
            window.addEventListener("e", null, t);
          } catch (e) {}
          return e;
        })()
          ? { passive: true }
          : false;
      function Cr(e, t, r) {
        e.addEventListener(t, r, Sr);
      }
      function Pr(e, t, r) {
        e.removeEventListener(t, r, Sr);
      }
      function Ar(e, t, r, a, n) {
        return {
          type: e,
          chart: t,
          native: n || null,
          x: r !== undefined ? r : null,
          y: a !== undefined ? a : null,
        };
      }
      function Dr(e, t) {
        var r = wr[e.type] || e.type;
        var a = Se.getRelativePosition(e, t);
        return Ar(r, t, a.x, a.y, e);
      }
      function Tr(e, t) {
        var r = false;
        var a = [];
        return function () {
          a = Array.prototype.slice.call(arguments);
          t = t || this;
          if (!r) {
            r = true;
            Se.requestAnimFrame.call(window, function () {
              r = false;
              e.apply(t, a);
            });
          }
        };
      }
      function Ir(e) {
        var t = document.createElement("div");
        t.className = e || "";
        return t;
      }
      function Fr(e) {
        var t = 1e6;
        var r = Ir(mr);
        var a = Ir(mr + "-expand");
        var n = Ir(mr + "-shrink");
        a.appendChild(Ir());
        n.appendChild(Ir());
        r.appendChild(a);
        r.appendChild(n);
        r._reset = function () {
          a.scrollLeft = t;
          a.scrollTop = t;
          n.scrollLeft = t;
          n.scrollTop = t;
        };
        var i = function () {
          r._reset();
          e();
        };
        Cr(a, "scroll", i.bind(a, "expand"));
        Cr(n, "scroll", i.bind(n, "shrink"));
        return r;
      }
      function Or(t, r) {
        var e = t[gr] || (t[gr] = {});
        var a = (e.renderProxy = function (e) {
          if (e.animationName === xr) r();
        });
        Se.each(yr, function (e) {
          Cr(t, e, a);
        });
        e.reflow = !!t.offsetParent;
        t.classList.add(br);
      }
      function Lr(t) {
        var e = t[gr] || {};
        var r = e.renderProxy;
        if (r) {
          Se.each(yr, function (e) {
            Pr(t, e, r);
          });
          delete e.renderProxy;
        }
        t.classList.remove(br);
      }
      function Er(r, a, n) {
        var i = r[gr] || (r[gr] = {});
        var t = (i.resizer = Fr(
          Tr(function () {
            if (i.resizer) {
              var e = n.options.maintainAspectRatio && r.parentNode;
              var t = e ? e.clientWidth : 0;
              a(Ar("resize", n));
              if (e && e.clientWidth < t && n.canvas) a(Ar("resize", n));
            }
          })
        ));
        Or(r, function () {
          if (i.resizer) {
            var e = r.parentNode;
            if (e && e !== t.parentNode) e.insertBefore(t, e.firstChild);
            t._reset();
          }
        });
      }
      function Nr(e) {
        var t = e[gr] || {};
        var r = t.resizer;
        delete t.resizer;
        Lr(e);
        if (r && r.parentNode) r.parentNode.removeChild(r);
      }
      function Rr(e, t) {
        var r = e[gr] || (e[gr] = {});
        if (!r.containsStyles) {
          r.containsStyles = true;
          t = "/* Chart.js */\n" + t;
          var a = document.createElement("style");
          a.setAttribute("type", "text/css");
          a.appendChild(document.createTextNode(t));
          e.appendChild(a);
        }
      }
      var zr = {
        disableCSSInjection: false,
        _enabled:
          typeof window !== "undefined" && typeof document !== "undefined",
        _ensureLoaded: function (e) {
          if (!this.disableCSSInjection) {
            var t = e.getRootNode ? e.getRootNode() : document;
            var r = t.host ? t : document.head;
            Rr(r, vr);
          }
        },
        acquireContext: function (e, t) {
          if (typeof e === "string") e = document.getElementById(e);
          else if (e.length) e = e[0];
          if (e && e.canvas) e = e.canvas;
          var r = e && e.getContext && e.getContext("2d");
          if (r && r.canvas === e) {
            this._ensureLoaded(e);
            kr(e, t);
            return r;
          }
          return null;
        },
        releaseContext: function (e) {
          var r = e.canvas;
          if (!r[gr]) return;
          var a = r[gr].initial;
          ["height", "width"].forEach(function (e) {
            var t = a[e];
            if (Se.isNullOrUndef(t)) r.removeAttribute(e);
            else r.setAttribute(e, t);
          });
          Se.each(a.style || {}, function (e, t) {
            r.style[t] = e;
          });
          r.width = r.width;
          delete r[gr];
        },
        addEventListener: function (t, e, r) {
          var a = t.canvas;
          if (e === "resize") {
            Er(a, r, t);
            return;
          }
          var n = r[gr] || (r[gr] = {});
          var i = n.proxies || (n.proxies = {});
          var o = (i[t.id + "_" + e] = function (e) {
            r(Dr(e, t));
          });
          Cr(a, e, o);
        },
        removeEventListener: function (e, t, r) {
          var a = e.canvas;
          if (t === "resize") {
            Nr(a);
            return;
          }
          var n = r[gr] || {};
          var i = n.proxies || {};
          var o = i[e.id + "_" + t];
          if (!o) return;
          Pr(a, t, o);
        },
      };
      (Se.addEvent = Cr), (Se.removeEvent = Pr);
      var Vr,
        Br = Se.extend(
          {
            initialize: function () {},
            acquireContext: function () {},
            releaseContext: function () {},
            addEventListener: function () {},
            removeEventListener: function () {},
          },
          zr._enabled ? zr : cr
        );
      he._set("global", { plugins: {} });
      var Wr = {
          _plugins: [],
          _cacheId: 0,
          register: function (e) {
            var t = this._plugins;
            [].concat(e).forEach(function (e) {
              if (t.indexOf(e) === -1) t.push(e);
            });
            this._cacheId++;
          },
          unregister: function (e) {
            var r = this._plugins;
            [].concat(e).forEach(function (e) {
              var t = r.indexOf(e);
              if (t !== -1) r.splice(t, 1);
            });
            this._cacheId++;
          },
          clear: function () {
            this._plugins = [];
            this._cacheId++;
          },
          count: function () {
            return this._plugins.length;
          },
          getAll: function () {
            return this._plugins;
          },
          notify: function (e, t, r) {
            var a = this.descriptors(e);
            var n = a.length;
            var i, o, s, l, u;
            for (i = 0; i < n; ++i) {
              o = a[i];
              s = o.plugin;
              u = s[t];
              if (typeof u === "function") {
                l = [e].concat(r || []);
                l.push(o.options);
                if (u.apply(s, l) === false) return false;
              }
            }
            return true;
          },
          descriptors: function (e) {
            var t = e.$plugins || (e.$plugins = {});
            if (t.id === this._cacheId) return t.descriptors;
            var n = [];
            var i = [];
            var r = (e && e.config) || {};
            var o = (r.options && r.options.plugins) || {};
            this._plugins.concat(r.plugins || []).forEach(function (e) {
              var t = n.indexOf(e);
              if (t !== -1) return;
              var r = e.id;
              var a = o[r];
              if (a === false) return;
              if (a === true) a = Se.clone(he.global.plugins[r]);
              n.push(e);
              i.push({ plugin: e, options: a || {} });
            });
            t.descriptors = i;
            t.id = this._cacheId;
            return i;
          },
          _invalidate: function (e) {
            delete e.$plugins;
          },
        },
        Hr = {
          constructors: {},
          defaults: {},
          registerScaleType: function (e, t, r) {
            this.constructors[e] = t;
            this.defaults[e] = Se.clone(r);
          },
          getScaleConstructor: function (e) {
            return this.constructors.hasOwnProperty(e)
              ? this.constructors[e]
              : undefined;
          },
          getScaleDefaults: function (e) {
            return this.defaults.hasOwnProperty(e)
              ? Se.merge(Object.create(null), [he.scale, this.defaults[e]])
              : {};
          },
          updateScaleDefaults: function (e, t) {
            var r = this;
            if (r.defaults.hasOwnProperty(e))
              r.defaults[e] = Se.extend(r.defaults[e], t);
          },
          addScalesToLayout: function (t) {
            Se.each(t.scales, function (e) {
              e.fullWidth = e.options.fullWidth;
              e.position = e.options.position;
              e.weight = e.options.weight;
              fr.addBox(t, e);
            });
          },
        },
        jr = Se.valueOrDefault,
        Ur = Se.rtl.getRtlAdapter;
      he._set("global", {
        tooltips: {
          enabled: true,
          custom: null,
          mode: "nearest",
          position: "average",
          intersect: true,
          backgroundColor: "rgba(0,0,0,0.8)",
          titleFontStyle: "bold",
          titleSpacing: 2,
          titleMarginBottom: 6,
          titleFontColor: "#fff",
          titleAlign: "left",
          bodySpacing: 2,
          bodyFontColor: "#fff",
          bodyAlign: "left",
          footerFontStyle: "bold",
          footerSpacing: 2,
          footerMarginTop: 6,
          footerFontColor: "#fff",
          footerAlign: "left",
          yPadding: 6,
          xPadding: 6,
          caretPadding: 2,
          caretSize: 5,
          cornerRadius: 6,
          multiKeyBackground: "#fff",
          displayColors: true,
          borderColor: "rgba(0,0,0,0)",
          borderWidth: 0,
          callbacks: {
            beforeTitle: Se.noop,
            title: function (e, t) {
              var r = "";
              var a = t.labels;
              var n = a ? a.length : 0;
              if (e.length > 0) {
                var i = e[0];
                if (i.label) r = i.label;
                else if (i.xLabel) r = i.xLabel;
                else if (n > 0 && i.index < n) r = a[i.index];
              }
              return r;
            },
            afterTitle: Se.noop,
            beforeBody: Se.noop,
            beforeLabel: Se.noop,
            label: function (e, t) {
              var r = t.datasets[e.datasetIndex].label || "";
              if (r) r += ": ";
              if (!Se.isNullOrUndef(e.value)) r += e.value;
              else r += e.yLabel;
              return r;
            },
            labelColor: function (e, t) {
              var r = t.getDatasetMeta(e.datasetIndex);
              var a = r.data[e.index];
              var n = a._view;
              return {
                borderColor: n.borderColor,
                backgroundColor: n.backgroundColor,
              };
            },
            labelTextColor: function () {
              return this._options.bodyFontColor;
            },
            afterLabel: Se.noop,
            afterBody: Se.noop,
            beforeFooter: Se.noop,
            footer: Se.noop,
            afterFooter: Se.noop,
          },
        },
      });
      var qr = {
        average: function (e) {
          if (!e.length) return false;
          var t, r;
          var a = 0;
          var n = 0;
          var i = 0;
          for (t = 0, r = e.length; t < r; ++t) {
            var o = e[t];
            if (o && o.hasValue()) {
              var s = o.tooltipPosition();
              a += s.x;
              n += s.y;
              ++i;
            }
          }
          return { x: a / i, y: n / i };
        },
        nearest: function (e, t) {
          var r = t.x;
          var a = t.y;
          var n = Number.POSITIVE_INFINITY;
          var i, o, s;
          for (i = 0, o = e.length; i < o; ++i) {
            var l = e[i];
            if (l && l.hasValue()) {
              var u = l.getCenterPoint();
              var f = Se.distanceBetweenPoints(t, u);
              if (f < n) {
                n = f;
                s = l;
              }
            }
          }
          if (s) {
            var c = s.tooltipPosition();
            r = c.x;
            a = c.y;
          }
          return { x: r, y: a };
        },
      };
      function Yr(e, t) {
        if (t)
          if (Se.isArray(t)) Array.prototype.push.apply(e, t);
          else e.push(t);
        return e;
      }
      function Gr(e) {
        if (
          (typeof e === "string" || e instanceof String) &&
          e.indexOf("\n") > -1
        )
          return e.split("\n");
        return e;
      }
      function Xr(e) {
        var t = e._xScale;
        var r = e._yScale || e._scale;
        var a = e._index;
        var n = e._datasetIndex;
        var i = e._chart.getDatasetMeta(n).controller;
        var o = i._getIndexScale();
        var s = i._getValueScale();
        return {
          xLabel: t ? t.getLabelForIndex(a, n) : "",
          yLabel: r ? r.getLabelForIndex(a, n) : "",
          label: o ? "" + o.getLabelForIndex(a, n) : "",
          value: s ? "" + s.getLabelForIndex(a, n) : "",
          index: a,
          datasetIndex: n,
          x: e._model.x,
          y: e._model.y,
        };
      }
      function Kr(e) {
        var t = he.global;
        return {
          xPadding: e.xPadding,
          yPadding: e.yPadding,
          xAlign: e.xAlign,
          yAlign: e.yAlign,
          rtl: e.rtl,
          textDirection: e.textDirection,
          bodyFontColor: e.bodyFontColor,
          _bodyFontFamily: jr(e.bodyFontFamily, t.defaultFontFamily),
          _bodyFontStyle: jr(e.bodyFontStyle, t.defaultFontStyle),
          _bodyAlign: e.bodyAlign,
          bodyFontSize: jr(e.bodyFontSize, t.defaultFontSize),
          bodySpacing: e.bodySpacing,
          titleFontColor: e.titleFontColor,
          _titleFontFamily: jr(e.titleFontFamily, t.defaultFontFamily),
          _titleFontStyle: jr(e.titleFontStyle, t.defaultFontStyle),
          titleFontSize: jr(e.titleFontSize, t.defaultFontSize),
          _titleAlign: e.titleAlign,
          titleSpacing: e.titleSpacing,
          titleMarginBottom: e.titleMarginBottom,
          footerFontColor: e.footerFontColor,
          _footerFontFamily: jr(e.footerFontFamily, t.defaultFontFamily),
          _footerFontStyle: jr(e.footerFontStyle, t.defaultFontStyle),
          footerFontSize: jr(e.footerFontSize, t.defaultFontSize),
          _footerAlign: e.footerAlign,
          footerSpacing: e.footerSpacing,
          footerMarginTop: e.footerMarginTop,
          caretSize: e.caretSize,
          cornerRadius: e.cornerRadius,
          backgroundColor: e.backgroundColor,
          opacity: 0,
          legendColorBackground: e.multiKeyBackground,
          displayColors: e.displayColors,
          borderColor: e.borderColor,
          borderWidth: e.borderWidth,
        };
      }
      function $r(e, t) {
        var r = e._chart.ctx;
        var a = t.yPadding * 2;
        var n = 0;
        var i = t.body;
        var o = i.reduce(function (e, t) {
          return e + t.before.length + t.lines.length + t.after.length;
        }, 0);
        o += t.beforeBody.length + t.afterBody.length;
        var s = t.title.length;
        var l = t.footer.length;
        var u = t.titleFontSize;
        var f = t.bodyFontSize;
        var c = t.footerFontSize;
        a += s * u;
        a += s ? (s - 1) * t.titleSpacing : 0;
        a += s ? t.titleMarginBottom : 0;
        a += o * f;
        a += o ? (o - 1) * t.bodySpacing : 0;
        a += l ? t.footerMarginTop : 0;
        a += l * c;
        a += l ? (l - 1) * t.footerSpacing : 0;
        var d = 0;
        var h = function (e) {
          n = Math.max(n, r.measureText(e).width + d);
        };
        r.font = Se.fontString(u, t._titleFontStyle, t._titleFontFamily);
        Se.each(t.title, h);
        r.font = Se.fontString(f, t._bodyFontStyle, t._bodyFontFamily);
        Se.each(t.beforeBody.concat(t.afterBody), h);
        d = t.displayColors ? f + 2 : 0;
        Se.each(i, function (e) {
          Se.each(e.before, h);
          Se.each(e.lines, h);
          Se.each(e.after, h);
        });
        d = 0;
        r.font = Se.fontString(c, t._footerFontStyle, t._footerFontFamily);
        Se.each(t.footer, h);
        n += 2 * t.xPadding;
        return { width: n, height: a };
      }
      function Zr(e, t) {
        var r = e._model;
        var a = e._chart;
        var n = e._chart.chartArea;
        var i = "center";
        var o = "center";
        if (r.y < t.height) o = "top";
        else if (r.y > a.height - t.height) o = "bottom";
        var s, l;
        var u, f;
        var c;
        var d = (n.left + n.right) / 2;
        var h = (n.top + n.bottom) / 2;
        if (o === "center") {
          s = function (e) {
            return e <= d;
          };
          l = function (e) {
            return e > d;
          };
        } else {
          s = function (e) {
            return e <= t.width / 2;
          };
          l = function (e) {
            return e >= a.width - t.width / 2;
          };
        }
        u = function (e) {
          return e + t.width + r.caretSize + r.caretPadding > a.width;
        };
        f = function (e) {
          return e - t.width - r.caretSize - r.caretPadding < 0;
        };
        c = function (e) {
          return e <= h ? "top" : "bottom";
        };
        if (s(r.x)) {
          i = "left";
          if (u(r.x)) {
            i = "center";
            o = c(r.y);
          }
        } else if (l(r.x)) {
          i = "right";
          if (f(r.x)) {
            i = "center";
            o = c(r.y);
          }
        }
        var v = e._options;
        return {
          xAlign: v.xAlign ? v.xAlign : i,
          yAlign: v.yAlign ? v.yAlign : o,
        };
      }
      function Jr(e, t, r, a) {
        var n = e.x;
        var i = e.y;
        var o = e.caretSize;
        var s = e.caretPadding;
        var l = e.cornerRadius;
        var u = r.xAlign;
        var f = r.yAlign;
        var c = o + s;
        var d = l + s;
        if (u === "right") n -= t.width;
        else if (u === "center") {
          n -= t.width / 2;
          if (n + t.width > a.width) n = a.width - t.width;
          if (n < 0) n = 0;
        }
        if (f === "top") i += c;
        else if (f === "bottom") i -= t.height + c;
        else i -= t.height / 2;
        if (f === "center") {
          if (u === "left") n += c;
          else if (u === "right") n -= c;
        } else if (u === "left") n -= d;
        else if (u === "right") n += d;
        return { x: n, y: i };
      }
      function Qr(e, t) {
        return t === "center"
          ? e.x + e.width / 2
          : t === "right"
          ? e.x + e.width - e.xPadding
          : e.x + e.xPadding;
      }
      function ea(e) {
        return Yr([], Gr(e));
      }
      var ta,
        ra,
        aa = Oe.extend({
          initialize: function () {
            this._model = Kr(this._options);
            this._lastActive = [];
          },
          getTitle: function () {
            var e = this;
            var t = e._options;
            var r = t.callbacks;
            var a = r.beforeTitle.apply(e, arguments);
            var n = r.title.apply(e, arguments);
            var i = r.afterTitle.apply(e, arguments);
            var o = [];
            o = Yr(o, Gr(a));
            o = Yr(o, Gr(n));
            o = Yr(o, Gr(i));
            return o;
          },
          getBeforeBody: function () {
            return ea(
              this._options.callbacks.beforeBody.apply(this, arguments)
            );
          },
          getBody: function (e, r) {
            var a = this;
            var n = a._options.callbacks;
            var i = [];
            Se.each(e, function (e) {
              var t = { before: [], lines: [], after: [] };
              Yr(t.before, Gr(n.beforeLabel.call(a, e, r)));
              Yr(t.lines, n.label.call(a, e, r));
              Yr(t.after, Gr(n.afterLabel.call(a, e, r)));
              i.push(t);
            });
            return i;
          },
          getAfterBody: function () {
            return ea(this._options.callbacks.afterBody.apply(this, arguments));
          },
          getFooter: function () {
            var e = this;
            var t = e._options.callbacks;
            var r = t.beforeFooter.apply(e, arguments);
            var a = t.footer.apply(e, arguments);
            var n = t.afterFooter.apply(e, arguments);
            var i = [];
            i = Yr(i, Gr(r));
            i = Yr(i, Gr(a));
            i = Yr(i, Gr(n));
            return i;
          },
          update: function (e) {
            var t = this;
            var r = t._options;
            var a = t._model;
            var n = (t._model = Kr(r));
            var i = t._active;
            var o = t._data;
            var s = { xAlign: a.xAlign, yAlign: a.yAlign };
            var l = { x: a.x, y: a.y };
            var u = { width: a.width, height: a.height };
            var f = { x: a.caretX, y: a.caretY };
            var c, d;
            if (i.length) {
              n.opacity = 1;
              var h = [];
              var v = [];
              f = qr[r.position].call(t, i, t._eventPosition);
              var g = [];
              for (c = 0, d = i.length; c < d; ++c) g.push(Xr(i[c]));
              if (r.filter)
                g = g.filter(function (e) {
                  return r.filter(e, o);
                });
              if (r.itemSort)
                g = g.sort(function (e, t) {
                  return r.itemSort(e, t, o);
                });
              Se.each(g, function (e) {
                h.push(r.callbacks.labelColor.call(t, e, t._chart));
                v.push(r.callbacks.labelTextColor.call(t, e, t._chart));
              });
              n.title = t.getTitle(g, o);
              n.beforeBody = t.getBeforeBody(g, o);
              n.body = t.getBody(g, o);
              n.afterBody = t.getAfterBody(g, o);
              n.footer = t.getFooter(g, o);
              n.x = f.x;
              n.y = f.y;
              n.caretPadding = r.caretPadding;
              n.labelColors = h;
              n.labelTextColors = v;
              n.dataPoints = g;
              u = $r(this, n);
              s = Zr(this, u);
              l = Jr(n, u, s, t._chart);
            } else n.opacity = 0;
            n.xAlign = s.xAlign;
            n.yAlign = s.yAlign;
            n.x = l.x;
            n.y = l.y;
            n.width = u.width;
            n.height = u.height;
            n.caretX = f.x;
            n.caretY = f.y;
            t._model = n;
            if (e && r.custom) r.custom.call(t, n);
            return t;
          },
          drawCaret: function (e, t) {
            var r = this._chart.ctx;
            var a = this._view;
            var n = this.getCaretPosition(e, t, a);
            r.lineTo(n.x1, n.y1);
            r.lineTo(n.x2, n.y2);
            r.lineTo(n.x3, n.y3);
          },
          getCaretPosition: function (e, t, r) {
            var a, n, i, o, s, l;
            var u = r.caretSize;
            var f = r.cornerRadius;
            var c = r.xAlign;
            var d = r.yAlign;
            var h = e.x;
            var v = e.y;
            var g = t.width;
            var p = t.height;
            if (d === "center") {
              s = v + p / 2;
              if (c === "left") {
                a = h;
                n = a - u;
                i = a;
                o = s + u;
                l = s - u;
              } else {
                a = h + g;
                n = a + u;
                i = a;
                o = s - u;
                l = s + u;
              }
            } else {
              if (c === "left") {
                n = h + f + u;
                a = n - u;
                i = n + u;
              } else if (c === "right") {
                n = h + g - f - u;
                a = n - u;
                i = n + u;
              } else {
                n = r.caretX;
                a = n - u;
                i = n + u;
              }
              if (d === "top") {
                o = v;
                s = o - u;
                l = o;
              } else {
                o = v + p;
                s = o + u;
                l = o;
                var m = i;
                i = a;
                a = m;
              }
            }
            return { x1: a, x2: n, x3: i, y1: o, y2: s, y3: l };
          },
          drawTitle: function (e, t, r) {
            var a = t.title;
            var n = a.length;
            var i, o, s;
            if (n) {
              var l = Ur(t.rtl, t.x, t.width);
              e.x = Qr(t, t._titleAlign);
              r.textAlign = l.textAlign(t._titleAlign);
              r.textBaseline = "middle";
              i = t.titleFontSize;
              o = t.titleSpacing;
              r.fillStyle = t.titleFontColor;
              r.font = Se.fontString(i, t._titleFontStyle, t._titleFontFamily);
              for (s = 0; s < n; ++s) {
                r.fillText(a[s], l.x(e.x), e.y + i / 2);
                e.y += i + o;
                if (s + 1 === n) e.y += t.titleMarginBottom - o;
              }
            }
          },
          drawBody: function (t, e, r) {
            var a = e.bodyFontSize;
            var n = e.bodySpacing;
            var i = e._bodyAlign;
            var o = e.body;
            var s = e.displayColors;
            var l = 0;
            var u = s ? Qr(e, "left") : 0;
            var f = Ur(e.rtl, e.x, e.width);
            var c = function (e) {
              r.fillText(e, f.x(t.x + l), t.y + a / 2);
              t.y += a + n;
            };
            var d, h, v, g, p, m, b, x;
            var y = f.textAlign(i);
            r.textAlign = i;
            r.textBaseline = "middle";
            r.font = Se.fontString(a, e._bodyFontStyle, e._bodyFontFamily);
            t.x = Qr(e, y);
            r.fillStyle = e.bodyFontColor;
            Se.each(e.beforeBody, c);
            l = s && y !== "right" ? (i === "center" ? a / 2 + 1 : a + 2) : 0;
            for (p = 0, b = o.length; p < b; ++p) {
              d = o[p];
              h = e.labelTextColors[p];
              v = e.labelColors[p];
              r.fillStyle = h;
              Se.each(d.before, c);
              g = d.lines;
              for (m = 0, x = g.length; m < x; ++m) {
                if (s) {
                  var w = f.x(u);
                  r.fillStyle = e.legendColorBackground;
                  r.fillRect(f.leftForLtr(w, a), t.y, a, a);
                  r.lineWidth = 1;
                  r.strokeStyle = v.borderColor;
                  r.strokeRect(f.leftForLtr(w, a), t.y, a, a);
                  r.fillStyle = v.backgroundColor;
                  r.fillRect(
                    f.leftForLtr(f.xPlus(w, 1), a - 2),
                    t.y + 1,
                    a - 2,
                    a - 2
                  );
                  r.fillStyle = h;
                }
                c(g[m]);
              }
              Se.each(d.after, c);
            }
            l = 0;
            Se.each(e.afterBody, c);
            t.y -= n;
          },
          drawFooter: function (e, t, r) {
            var a = t.footer;
            var n = a.length;
            var i, o;
            if (n) {
              var s = Ur(t.rtl, t.x, t.width);
              e.x = Qr(t, t._footerAlign);
              e.y += t.footerMarginTop;
              r.textAlign = s.textAlign(t._footerAlign);
              r.textBaseline = "middle";
              i = t.footerFontSize;
              r.fillStyle = t.footerFontColor;
              r.font = Se.fontString(
                i,
                t._footerFontStyle,
                t._footerFontFamily
              );
              for (o = 0; o < n; ++o) {
                r.fillText(a[o], s.x(e.x), e.y + i / 2);
                e.y += i + t.footerSpacing;
              }
            }
          },
          drawBackground: function (e, t, r, a) {
            r.fillStyle = t.backgroundColor;
            r.strokeStyle = t.borderColor;
            r.lineWidth = t.borderWidth;
            var n = t.xAlign;
            var i = t.yAlign;
            var o = e.x;
            var s = e.y;
            var l = a.width;
            var u = a.height;
            var f = t.cornerRadius;
            r.beginPath();
            r.moveTo(o + f, s);
            if (i === "top") this.drawCaret(e, a);
            r.lineTo(o + l - f, s);
            r.quadraticCurveTo(o + l, s, o + l, s + f);
            if (i === "center" && n === "right") this.drawCaret(e, a);
            r.lineTo(o + l, s + u - f);
            r.quadraticCurveTo(o + l, s + u, o + l - f, s + u);
            if (i === "bottom") this.drawCaret(e, a);
            r.lineTo(o + f, s + u);
            r.quadraticCurveTo(o, s + u, o, s + u - f);
            if (i === "center" && n === "left") this.drawCaret(e, a);
            r.lineTo(o, s + f);
            r.quadraticCurveTo(o, s, o + f, s);
            r.closePath();
            r.fill();
            if (t.borderWidth > 0) r.stroke();
          },
          draw: function () {
            var e = this._chart.ctx;
            var t = this._view;
            if (t.opacity === 0) return;
            var r = { width: t.width, height: t.height };
            var a = { x: t.x, y: t.y };
            var n = Math.abs(t.opacity < 0.001) ? 0 : t.opacity;
            var i =
              t.title.length ||
              t.beforeBody.length ||
              t.body.length ||
              t.afterBody.length ||
              t.footer.length;
            if (this._options.enabled && i) {
              e.save();
              e.globalAlpha = n;
              this.drawBackground(a, t, e, r);
              a.y += t.yPadding;
              Se.rtl.overrideTextDirection(e, t.textDirection);
              this.drawTitle(a, t, e);
              this.drawBody(a, t, e);
              this.drawFooter(a, t, e);
              Se.rtl.restoreTextDirection(e, t.textDirection);
              e.restore();
            }
          },
          handleEvent: function (e) {
            var t = this;
            var r = t._options;
            var a = false;
            t._lastActive = t._lastActive || [];
            if (e.type === "mouseout") t._active = [];
            else {
              t._active = t._chart.getElementsAtEventForMode(e, r.mode, r);
              if (r.reverse) t._active.reverse();
            }
            a = !Se.arrayEquals(t._active, t._lastActive);
            if (a) {
              t._lastActive = t._active;
              if (r.enabled || r.custom) {
                t._eventPosition = { x: e.x, y: e.y };
                t.update(true);
                t.pivot();
              }
            }
            return a;
          },
        });
      aa.positioners = qr;
      var na = Se.valueOrDefault;
      function ia() {
        return Se.merge(Object.create(null), [].slice.call(arguments), {
          merger: function (e, t, r, a) {
            if (e === "xAxes" || e === "yAxes") {
              var n = r[e].length;
              var i, o, s;
              if (!t[e]) t[e] = [];
              for (i = 0; i < n; ++i) {
                s = r[e][i];
                o = na(s.type, e === "xAxes" ? "category" : "linear");
                if (i >= t[e].length) t[e].push({});
                if (!t[e][i].type || (s.type && s.type !== t[e][i].type))
                  Se.merge(t[e][i], [Hr.getScaleDefaults(o), s]);
                else Se.merge(t[e][i], s);
              }
            } else Se._merger(e, t, r, a);
          },
        });
      }
      function oa() {
        return Se.merge(Object.create(null), [].slice.call(arguments), {
          merger: function (e, t, r, a) {
            var n = t[e] || Object.create(null);
            var i = r[e];
            if (e === "scales") t[e] = ia(n, i);
            else if (e === "scale")
              t[e] = Se.merge(n, [Hr.getScaleDefaults(i.type), i]);
            else Se._merger(e, t, r, a);
          },
        });
      }
      function sa(e) {
        e = e || Object.create(null);
        var t = (e.data = e.data || {});
        t.datasets = t.datasets || [];
        t.labels = t.labels || [];
        e.options = oa(he.global, he[e.type], e.options || {});
        return e;
      }
      function la(t) {
        var e = t.options;
        Se.each(t.scales, function (e) {
          fr.removeBox(t, e);
        });
        e = oa(he.global, he[t.config.type], e);
        t.options = t.config.options = e;
        t.ensureScalesHaveIDs();
        t.buildOrUpdateScales();
        t.tooltip._options = e.tooltips;
        t.tooltip.initialize();
      }
      function ua(e, t, r) {
        var a;
        var n = function (e) {
          return e.id === a;
        };
        do {
          a = t + r++;
        } while (Se.findIndex(e, n) >= 0);
        return a;
      }
      function fa(e) {
        return e === "top" || e === "bottom";
      }
      function ca(r, a) {
        return function (e, t) {
          return e[r] === t[r] ? e[a] - t[a] : e[r] - t[r];
        };
      }
      he._set("global", {
        elements: {},
        events: ["mousemove", "mouseout", "click", "touchstart", "touchmove"],
        hover: {
          onHover: null,
          mode: "nearest",
          intersect: true,
          animationDuration: 400,
        },
        onClick: null,
        maintainAspectRatio: true,
        responsive: true,
        responsiveAnimationDuration: 0,
      });
      var da = function (e, t) {
        this.construct(e, t);
        return this;
      };
      Se.extend(da.prototype, {
        construct: function (e, t) {
          var r = this;
          t = sa(t);
          var a = Br.acquireContext(e, t);
          var n = a && a.canvas;
          var i = n && n.height;
          var o = n && n.width;
          r.id = Se.uid();
          r.ctx = a;
          r.canvas = n;
          r.config = t;
          r.width = o;
          r.height = i;
          r.aspectRatio = i ? o / i : null;
          r.options = t.options;
          r._bufferedRender = false;
          r._layers = [];
          r.chart = r;
          r.controller = r;
          da.instances[r.id] = r;
          Object.defineProperty(r, "data", {
            get: function () {
              return r.config.data;
            },
            set: function (e) {
              r.config.data = e;
            },
          });
          if (!a || !n) {
            console.error(
              "Failed to create chart: can't acquire context from the given item"
            );
            return;
          }
          r.initialize();
          r.update();
        },
        initialize: function () {
          var e = this;
          Wr.notify(e, "beforeInit");
          Se.retinaScale(e, e.options.devicePixelRatio);
          e.bindEvents();
          if (e.options.responsive) e.resize(true);
          e.initToolTip();
          Wr.notify(e, "afterInit");
          return e;
        },
        clear: function () {
          Se.canvas.clear(this);
          return this;
        },
        stop: function () {
          Ne.cancelAnimation(this);
          return this;
        },
        resize: function (e) {
          var t = this;
          var r = t.options;
          var a = t.canvas;
          var n = (r.maintainAspectRatio && t.aspectRatio) || null;
          var i = Math.max(0, Math.floor(Se.getMaximumWidth(a)));
          var o = Math.max(0, Math.floor(n ? i / n : Se.getMaximumHeight(a)));
          if (t.width === i && t.height === o) return;
          a.width = t.width = i;
          a.height = t.height = o;
          a.style.width = i + "px";
          a.style.height = o + "px";
          Se.retinaScale(t, r.devicePixelRatio);
          if (!e) {
            var s = { width: i, height: o };
            Wr.notify(t, "resize", [s]);
            if (r.onResize) r.onResize(t, s);
            t.stop();
            t.update({ duration: r.responsiveAnimationDuration });
          }
        },
        ensureScalesHaveIDs: function () {
          var e = this.options;
          var r = e.scales || {};
          var t = e.scale;
          Se.each(r.xAxes, function (e, t) {
            if (!e.id) e.id = ua(r.xAxes, "x-axis-", t);
          });
          Se.each(r.yAxes, function (e, t) {
            if (!e.id) e.id = ua(r.yAxes, "y-axis-", t);
          });
          if (t) t.id = t.id || "scale";
        },
        buildOrUpdateScales: function () {
          var o = this;
          var e = o.options;
          var s = o.scales || {};
          var t = [];
          var l = Object.keys(s).reduce(function (e, t) {
            e[t] = false;
            return e;
          }, {});
          if (e.scales)
            t = t.concat(
              (e.scales.xAxes || []).map(function (e) {
                return { options: e, dtype: "category", dposition: "bottom" };
              }),
              (e.scales.yAxes || []).map(function (e) {
                return { options: e, dtype: "linear", dposition: "left" };
              })
            );
          if (e.scale)
            t.push({
              options: e.scale,
              dtype: "radialLinear",
              isDefault: true,
              dposition: "chartArea",
            });
          Se.each(t, function (e) {
            var t = e.options;
            var r = t.id;
            var a = na(t.type, e.dtype);
            if (fa(t.position) !== fa(e.dposition)) t.position = e.dposition;
            l[r] = true;
            var n = null;
            if (r in s && s[r].type === a) {
              n = s[r];
              n.options = t;
              n.ctx = o.ctx;
              n.chart = o;
            } else {
              var i = Hr.getScaleConstructor(a);
              if (!i) return;
              n = new i({ id: r, type: a, options: t, ctx: o.ctx, chart: o });
              s[n.id] = n;
            }
            n.mergeTicksOptions();
            if (e.isDefault) o.scale = n;
          });
          Se.each(l, function (e, t) {
            if (!e) delete s[t];
          });
          o.scales = s;
          Hr.addScalesToLayout(this);
        },
        buildOrUpdateControllers: function () {
          var e = this;
          var t = [];
          var r = e.data.datasets;
          var a, n;
          for (a = 0, n = r.length; a < n; a++) {
            var i = r[a];
            var o = e.getDatasetMeta(a);
            var s = i.type || e.config.type;
            if (o.type && o.type !== s) {
              e.destroyDatasetMeta(a);
              o = e.getDatasetMeta(a);
            }
            o.type = s;
            o.order = i.order || 0;
            o.index = a;
            if (o.controller) {
              o.controller.updateIndex(a);
              o.controller.linkScales();
            } else {
              var l = Ut[o.type];
              if (l === undefined)
                throw new Error('"' + o.type + '" is not a chart type.');
              o.controller = new l(e, a);
              t.push(o.controller);
            }
          }
          return t;
        },
        resetElements: function () {
          var r = this;
          Se.each(
            r.data.datasets,
            function (e, t) {
              r.getDatasetMeta(t).controller.reset();
            },
            r
          );
        },
        reset: function () {
          this.resetElements();
          this.tooltip.initialize();
        },
        update: function (e) {
          var t = this;
          var r, a;
          if (!e || typeof e !== "object")
            e = { duration: e, lazy: arguments[1] };
          la(t);
          Wr._invalidate(t);
          if (Wr.notify(t, "beforeUpdate") === false) return;
          t.tooltip._data = t.data;
          var n = t.buildOrUpdateControllers();
          for (r = 0, a = t.data.datasets.length; r < a; r++)
            t.getDatasetMeta(r).controller.buildOrUpdateElements();
          t.updateLayout();
          if (t.options.animation && t.options.animation.duration)
            Se.each(n, function (e) {
              e.reset();
            });
          t.updateDatasets();
          t.tooltip.initialize();
          t.lastActive = [];
          Wr.notify(t, "afterUpdate");
          t._layers.sort(ca("z", "_idx"));
          if (t._bufferedRender)
            t._bufferedRequest = {
              duration: e.duration,
              easing: e.easing,
              lazy: e.lazy,
            };
          else t.render(e);
        },
        updateLayout: function () {
          var t = this;
          if (Wr.notify(t, "beforeLayout") === false) return;
          fr.update(this, this.width, this.height);
          t._layers = [];
          Se.each(
            t.boxes,
            function (e) {
              if (e._configure) e._configure();
              t._layers.push.apply(t._layers, e._layers());
            },
            t
          );
          t._layers.forEach(function (e, t) {
            e._idx = t;
          });
          Wr.notify(t, "afterScaleUpdate");
          Wr.notify(t, "afterLayout");
        },
        updateDatasets: function () {
          var e = this;
          if (Wr.notify(e, "beforeDatasetsUpdate") === false) return;
          for (var t = 0, r = e.data.datasets.length; t < r; ++t)
            e.updateDataset(t);
          Wr.notify(e, "afterDatasetsUpdate");
        },
        updateDataset: function (e) {
          var t = this;
          var r = t.getDatasetMeta(e);
          var a = { meta: r, index: e };
          if (Wr.notify(t, "beforeDatasetUpdate", [a]) === false) return;
          r.controller._update();
          Wr.notify(t, "afterDatasetUpdate", [a]);
        },
        render: function (e) {
          var t = this;
          if (!e || typeof e !== "object")
            e = { duration: e, lazy: arguments[1] };
          var r = t.options.animation;
          var a = na(e.duration, r && r.duration);
          var n = e.lazy;
          if (Wr.notify(t, "beforeRender") === false) return;
          var i = function (e) {
            Wr.notify(t, "afterRender");
            Se.callback(r && r.onComplete, [e], t);
          };
          if (r && a) {
            var o = new Ee({
              numSteps: a / 16.66,
              easing: e.easing || r.easing,
              render: function (e, t) {
                var r = Se.easing.effects[t.easing];
                var a = t.currentStep;
                var n = a / t.numSteps;
                e.draw(r(n), n, a);
              },
              onAnimationProgress: r.onProgress,
              onAnimationComplete: i,
            });
            Ne.addAnimation(t, o, a, n);
          } else {
            t.draw();
            i(new Ee({ numSteps: 0, chart: t }));
          }
          return t;
        },
        draw: function (e) {
          var t = this;
          var r, a;
          t.clear();
          if (Se.isNullOrUndef(e)) e = 1;
          t.transition(e);
          if (t.width <= 0 || t.height <= 0) return;
          if (Wr.notify(t, "beforeDraw", [e]) === false) return;
          a = t._layers;
          for (r = 0; r < a.length && a[r].z <= 0; ++r) a[r].draw(t.chartArea);
          t.drawDatasets(e);
          for (; r < a.length; ++r) a[r].draw(t.chartArea);
          t._drawTooltip(e);
          Wr.notify(t, "afterDraw", [e]);
        },
        transition: function (e) {
          var t = this;
          for (var r = 0, a = (t.data.datasets || []).length; r < a; ++r)
            if (t.isDatasetVisible(r))
              t.getDatasetMeta(r).controller.transition(e);
          t.tooltip.transition(e);
        },
        _getSortedDatasetMetas: function (e) {
          var t = this;
          var r = t.data.datasets || [];
          var a = [];
          var n, i;
          for (n = 0, i = r.length; n < i; ++n)
            if (!e || t.isDatasetVisible(n)) a.push(t.getDatasetMeta(n));
          a.sort(ca("order", "index"));
          return a;
        },
        _getSortedVisibleDatasetMetas: function () {
          return this._getSortedDatasetMetas(true);
        },
        drawDatasets: function (e) {
          var t = this;
          var r, a;
          if (Wr.notify(t, "beforeDatasetsDraw", [e]) === false) return;
          r = t._getSortedVisibleDatasetMetas();
          for (a = r.length - 1; a >= 0; --a) t.drawDataset(r[a], e);
          Wr.notify(t, "afterDatasetsDraw", [e]);
        },
        drawDataset: function (e, t) {
          var r = this;
          var a = { meta: e, index: e.index, easingValue: t };
          if (Wr.notify(r, "beforeDatasetDraw", [a]) === false) return;
          e.controller.draw(t);
          Wr.notify(r, "afterDatasetDraw", [a]);
        },
        _drawTooltip: function (e) {
          var t = this;
          var r = t.tooltip;
          var a = { tooltip: r, easingValue: e };
          if (Wr.notify(t, "beforeTooltipDraw", [a]) === false) return;
          r.draw();
          Wr.notify(t, "afterTooltipDraw", [a]);
        },
        getElementAtEvent: function (e) {
          return Zt.modes.single(this, e);
        },
        getElementsAtEvent: function (e) {
          return Zt.modes.label(this, e, { intersect: true });
        },
        getElementsAtXAxis: function (e) {
          return Zt.modes["x-axis"](this, e, { intersect: true });
        },
        getElementsAtEventForMode: function (e, t, r) {
          var a = Zt.modes[t];
          if (typeof a === "function") return a(this, e, r);
          return [];
        },
        getDatasetAtEvent: function (e) {
          return Zt.modes.dataset(this, e, { intersect: true });
        },
        getDatasetMeta: function (e) {
          var t = this;
          var r = t.data.datasets[e];
          if (!r._meta) r._meta = {};
          var a = r._meta[t.id];
          if (!a)
            a = r._meta[t.id] = {
              type: null,
              data: [],
              dataset: null,
              controller: null,
              hidden: null,
              xAxisID: null,
              yAxisID: null,
              order: r.order || 0,
              index: e,
            };
          return a;
        },
        getVisibleDatasetCount: function () {
          var e = 0;
          for (var t = 0, r = this.data.datasets.length; t < r; ++t)
            if (this.isDatasetVisible(t)) e++;
          return e;
        },
        isDatasetVisible: function (e) {
          var t = this.getDatasetMeta(e);
          return typeof t.hidden === "boolean"
            ? !t.hidden
            : !this.data.datasets[e].hidden;
        },
        generateLegend: function () {
          return this.options.legendCallback(this);
        },
        destroyDatasetMeta: function (e) {
          var t = this.id;
          var r = this.data.datasets[e];
          var a = r._meta && r._meta[t];
          if (a) {
            a.controller.destroy();
            delete r._meta[t];
          }
        },
        destroy: function () {
          var e = this;
          var t = e.canvas;
          var r, a;
          e.stop();
          for (r = 0, a = e.data.datasets.length; r < a; ++r)
            e.destroyDatasetMeta(r);
          if (t) {
            e.unbindEvents();
            Se.canvas.clear(e);
            Br.releaseContext(e.ctx);
            e.canvas = null;
            e.ctx = null;
          }
          Wr.notify(e, "destroy");
          delete da.instances[e.id];
        },
        toBase64Image: function () {
          return this.canvas.toDataURL.apply(this.canvas, arguments);
        },
        initToolTip: function () {
          var e = this;
          e.tooltip = new aa(
            {
              _chart: e,
              _chartInstance: e,
              _data: e.data,
              _options: e.options.tooltips,
            },
            e
          );
        },
        bindEvents: function () {
          var t = this;
          var r = (t._listeners = {});
          var a = function () {
            t.eventHandler.apply(t, arguments);
          };
          Se.each(t.options.events, function (e) {
            Br.addEventListener(t, e, a);
            r[e] = a;
          });
          if (t.options.responsive) {
            a = function () {
              t.resize();
            };
            Br.addEventListener(t, "resize", a);
            r.resize = a;
          }
        },
        unbindEvents: function () {
          var r = this;
          var e = r._listeners;
          if (!e) return;
          delete r._listeners;
          Se.each(e, function (e, t) {
            Br.removeEventListener(r, t, e);
          });
        },
        updateHoverStyle: function (e, t, r) {
          var a = r ? "set" : "remove";
          var n, i, o;
          for (i = 0, o = e.length; i < o; ++i) {
            n = e[i];
            if (n)
              this.getDatasetMeta(n._datasetIndex).controller[a + "HoverStyle"](
                n
              );
          }
          if (t === "dataset")
            this.getDatasetMeta(e[0]._datasetIndex).controller[
              "_" + a + "DatasetHoverStyle"
            ]();
        },
        eventHandler: function (e) {
          var t = this;
          var r = t.tooltip;
          if (Wr.notify(t, "beforeEvent", [e]) === false) return;
          t._bufferedRender = true;
          t._bufferedRequest = null;
          var a = t.handleEvent(e);
          if (r) a = r._start ? r.handleEvent(e) : a | r.handleEvent(e);
          Wr.notify(t, "afterEvent", [e]);
          var n = t._bufferedRequest;
          if (n) t.render(n);
          else if (a && !t.animating) {
            t.stop();
            t.render({
              duration: t.options.hover.animationDuration,
              lazy: true,
            });
          }
          t._bufferedRender = false;
          t._bufferedRequest = null;
          return t;
        },
        handleEvent: function (e) {
          var t = this;
          var r = t.options || {};
          var a = r.hover;
          var n = false;
          t.lastActive = t.lastActive || [];
          if (e.type === "mouseout") t.active = [];
          else t.active = t.getElementsAtEventForMode(e, a.mode, a);
          Se.callback(r.onHover || r.hover.onHover, [e.native, t.active], t);
          if (e.type === "mouseup" || e.type === "click")
            if (r.onClick) r.onClick.call(t, e.native, t.active);
          if (t.lastActive.length)
            t.updateHoverStyle(t.lastActive, a.mode, false);
          if (t.active.length && a.mode)
            t.updateHoverStyle(t.active, a.mode, true);
          n = !Se.arrayEquals(t.active, t.lastActive);
          t.lastActive = t.active;
          return n;
        },
      }),
        (da.instances = {});
      var ha = da;
      ((da.Controller = da).types = {}),
        (Se.configMerge = oa),
        (Se.scaleMerge = ia);
      var va = function () {
        Se.where = function (e, t) {
          if (Se.isArray(e) && Array.prototype.filter) return e.filter(t);
          var r = [];
          Se.each(e, function (e) {
            if (t(e)) r.push(e);
          });
          return r;
        };
        Se.findIndex = Array.prototype.findIndex
          ? function (e, t, r) {
              return e.findIndex(t, r);
            }
          : function (e, t, r) {
              r = r === undefined ? e : r;
              for (var a = 0, n = e.length; a < n; ++a)
                if (t.call(r, e[a], a, e)) return a;
              return -1;
            };
        Se.findNextWhere = function (e, t, r) {
          if (Se.isNullOrUndef(r)) r = -1;
          for (var a = r + 1; a < e.length; a++) {
            var n = e[a];
            if (t(n)) return n;
          }
        };
        Se.findPreviousWhere = function (e, t, r) {
          if (Se.isNullOrUndef(r)) r = e.length;
          for (var a = r - 1; a >= 0; a--) {
            var n = e[a];
            if (t(n)) return n;
          }
        };
        Se.isNumber = function (e) {
          return !isNaN(parseFloat(e)) && isFinite(e);
        };
        Se.almostEquals = function (e, t, r) {
          return Math.abs(e - t) < r;
        };
        Se.almostWhole = function (e, t) {
          var r = Math.round(e);
          return r - t <= e && r + t >= e;
        };
        Se.max = function (e) {
          return e.reduce(function (e, t) {
            if (!isNaN(t)) return Math.max(e, t);
            return e;
          }, Number.NEGATIVE_INFINITY);
        };
        Se.min = function (e) {
          return e.reduce(function (e, t) {
            if (!isNaN(t)) return Math.min(e, t);
            return e;
          }, Number.POSITIVE_INFINITY);
        };
        Se.sign = Math.sign
          ? function (e) {
              return Math.sign(e);
            }
          : function (e) {
              e = +e;
              if (e === 0 || isNaN(e)) return e;
              return e > 0 ? 1 : -1;
            };
        Se.toRadians = function (e) {
          return e * (Math.PI / 180);
        };
        Se.toDegrees = function (e) {
          return e * (180 / Math.PI);
        };
        Se._decimalPlaces = function (e) {
          if (!Se.isFinite(e)) return;
          var t = 1;
          var r = 0;
          while (Math.round(e * t) / t !== e) {
            t *= 10;
            r++;
          }
          return r;
        };
        Se.getAngleFromPoint = function (e, t) {
          var r = t.x - e.x;
          var a = t.y - e.y;
          var n = Math.sqrt(r * r + a * a);
          var i = Math.atan2(a, r);
          if (i < -0.5 * Math.PI) i += 2 * Math.PI;
          return { angle: i, distance: n };
        };
        Se.distanceBetweenPoints = function (e, t) {
          return Math.sqrt(Math.pow(t.x - e.x, 2) + Math.pow(t.y - e.y, 2));
        };
        Se.aliasPixel = function (e) {
          return e % 2 === 0 ? 0 : 0.5;
        };
        Se._alignPixel = function (e, t, r) {
          var a = e.currentDevicePixelRatio;
          var n = r / 2;
          return Math.round((t - n) * a) / a + n;
        };
        Se.splineCurve = function (e, t, r, a) {
          var n = e.skip ? t : e;
          var i = t;
          var o = r.skip ? t : r;
          var s = Math.sqrt(Math.pow(i.x - n.x, 2) + Math.pow(i.y - n.y, 2));
          var l = Math.sqrt(Math.pow(o.x - i.x, 2) + Math.pow(o.y - i.y, 2));
          var u = s / (s + l);
          var f = l / (s + l);
          u = isNaN(u) ? 0 : u;
          f = isNaN(f) ? 0 : f;
          var c = a * u;
          var d = a * f;
          return {
            previous: { x: i.x - c * (o.x - n.x), y: i.y - c * (o.y - n.y) },
            next: { x: i.x + d * (o.x - n.x), y: i.y + d * (o.y - n.y) },
          };
        };
        Se.EPSILON = Number.EPSILON || 1e-14;
        Se.splineCurveMonotone = function (e) {
          var t = (e || []).map(function (e) {
            return { model: e._model, deltaK: 0, mK: 0 };
          });
          var r = t.length;
          var a, n, i, o;
          for (a = 0; a < r; ++a) {
            i = t[a];
            if (i.model.skip) continue;
            n = a > 0 ? t[a - 1] : null;
            o = a < r - 1 ? t[a + 1] : null;
            if (o && !o.model.skip) {
              var s = o.model.x - i.model.x;
              i.deltaK = s !== 0 ? (o.model.y - i.model.y) / s : 0;
            }
            if (!n || n.model.skip) i.mK = i.deltaK;
            else if (!o || o.model.skip) i.mK = n.deltaK;
            else if (this.sign(n.deltaK) !== this.sign(i.deltaK)) i.mK = 0;
            else i.mK = (n.deltaK + i.deltaK) / 2;
          }
          var l, u, f, c;
          for (a = 0; a < r - 1; ++a) {
            i = t[a];
            o = t[a + 1];
            if (i.model.skip || o.model.skip) continue;
            if (Se.almostEquals(i.deltaK, 0, this.EPSILON)) {
              i.mK = o.mK = 0;
              continue;
            }
            l = i.mK / i.deltaK;
            u = o.mK / i.deltaK;
            c = Math.pow(l, 2) + Math.pow(u, 2);
            if (c <= 9) continue;
            f = 3 / Math.sqrt(c);
            i.mK = l * f * i.deltaK;
            o.mK = u * f * i.deltaK;
          }
          var d;
          for (a = 0; a < r; ++a) {
            i = t[a];
            if (i.model.skip) continue;
            n = a > 0 ? t[a - 1] : null;
            o = a < r - 1 ? t[a + 1] : null;
            if (n && !n.model.skip) {
              d = (i.model.x - n.model.x) / 3;
              i.model.controlPointPreviousX = i.model.x - d;
              i.model.controlPointPreviousY = i.model.y - d * i.mK;
            }
            if (o && !o.model.skip) {
              d = (o.model.x - i.model.x) / 3;
              i.model.controlPointNextX = i.model.x + d;
              i.model.controlPointNextY = i.model.y + d * i.mK;
            }
          }
        };
        Se.nextItem = function (e, t, r) {
          if (r) return t >= e.length - 1 ? e[0] : e[t + 1];
          return t >= e.length - 1 ? e[e.length - 1] : e[t + 1];
        };
        Se.previousItem = function (e, t, r) {
          if (r) return t <= 0 ? e[e.length - 1] : e[t - 1];
          return t <= 0 ? e[0] : e[t - 1];
        };
        Se.niceNum = function (e, t) {
          var r = Math.floor(Se.log10(e));
          var a = e / Math.pow(10, r);
          var n;
          if (t)
            if (a < 1.5) n = 1;
            else if (a < 3) n = 2;
            else if (a < 7) n = 5;
            else n = 10;
          else if (a <= 1) n = 1;
          else if (a <= 2) n = 2;
          else if (a <= 5) n = 5;
          else n = 10;
          return n * Math.pow(10, r);
        };
        Se.requestAnimFrame = (function () {
          if (typeof window === "undefined")
            return function (e) {
              e();
            };
          return (
            window.requestAnimationFrame ||
            window.webkitRequestAnimationFrame ||
            window.mozRequestAnimationFrame ||
            window.oRequestAnimationFrame ||
            window.msRequestAnimationFrame ||
            function (e) {
              return window.setTimeout(e, 1e3 / 60);
            }
          );
        })();
        Se.getRelativePosition = function (e, t) {
          var r, a;
          var n = e.originalEvent || e;
          var i = e.target || e.srcElement;
          var o = i.getBoundingClientRect();
          var s = n.touches;
          if (s && s.length > 0) {
            r = s[0].clientX;
            a = s[0].clientY;
          } else {
            r = n.clientX;
            a = n.clientY;
          }
          var l = parseFloat(Se.getStyle(i, "padding-left"));
          var u = parseFloat(Se.getStyle(i, "padding-top"));
          var f = parseFloat(Se.getStyle(i, "padding-right"));
          var c = parseFloat(Se.getStyle(i, "padding-bottom"));
          var d = o.right - o.left - l - f;
          var h = o.bottom - o.top - u - c;
          r = Math.round(
            (((r - o.left - l) / d) * i.width) / t.currentDevicePixelRatio
          );
          a = Math.round(
            (((a - o.top - u) / h) * i.height) / t.currentDevicePixelRatio
          );
          return { x: r, y: a };
        };
        function f(e, t, r) {
          var a;
          if (typeof e === "string") {
            a = parseInt(e, 10);
            if (e.indexOf("%") !== -1) a = (a / 100) * t.parentNode[r];
          } else a = e;
          return a;
        }
        function c(e) {
          return e !== undefined && e !== null && e !== "none";
        }
        function t(e, t, r) {
          var a = document.defaultView;
          var n = Se._getParentNode(e);
          var i = a.getComputedStyle(e)[t];
          var o = a.getComputedStyle(n)[t];
          var s = c(i);
          var l = c(o);
          var u = Number.POSITIVE_INFINITY;
          if (s || l) return Math.min(s ? f(i, e, r) : u, l ? f(o, n, r) : u);
          return "none";
        }
        Se.getConstraintWidth = function (e) {
          return t(e, "max-width", "clientWidth");
        };
        Se.getConstraintHeight = function (e) {
          return t(e, "max-height", "clientHeight");
        };
        Se._calculatePadding = function (e, t, r) {
          t = Se.getStyle(e, t);
          return t.indexOf("%") > -1
            ? (r * parseInt(t, 10)) / 100
            : parseInt(t, 10);
        };
        Se._getParentNode = function (e) {
          var t = e.parentNode;
          if (t && t.toString() === "[object ShadowRoot]") t = t.host;
          return t;
        };
        Se.getMaximumWidth = function (e) {
          var t = Se._getParentNode(e);
          if (!t) return e.clientWidth;
          var r = t.clientWidth;
          var a = Se._calculatePadding(t, "padding-left", r);
          var n = Se._calculatePadding(t, "padding-right", r);
          var i = r - a - n;
          var o = Se.getConstraintWidth(e);
          return isNaN(o) ? i : Math.min(i, o);
        };
        Se.getMaximumHeight = function (e) {
          var t = Se._getParentNode(e);
          if (!t) return e.clientHeight;
          var r = t.clientHeight;
          var a = Se._calculatePadding(t, "padding-top", r);
          var n = Se._calculatePadding(t, "padding-bottom", r);
          var i = r - a - n;
          var o = Se.getConstraintHeight(e);
          return isNaN(o) ? i : Math.min(i, o);
        };
        Se.getStyle = function (e, t) {
          return e.currentStyle
            ? e.currentStyle[t]
            : document.defaultView
                .getComputedStyle(e, null)
                .getPropertyValue(t);
        };
        Se.retinaScale = function (e, t) {
          var r = (e.currentDevicePixelRatio =
            t ||
            (typeof window !== "undefined" && window.devicePixelRatio) ||
            1);
          if (r === 1) return;
          var a = e.canvas;
          var n = e.height;
          var i = e.width;
          a.height = n * r;
          a.width = i * r;
          e.ctx.scale(r, r);
          if (!a.style.height && !a.style.width) {
            a.style.height = n + "px";
            a.style.width = i + "px";
          }
        };
        Se.fontString = function (e, t, r) {
          return t + " " + e + "px " + r;
        };
        Se.longestText = function (e, t, r, a) {
          a = a || {};
          var n = (a.data = a.data || {});
          var i = (a.garbageCollect = a.garbageCollect || []);
          if (a.font !== t) {
            n = a.data = {};
            i = a.garbageCollect = [];
            a.font = t;
          }
          e.font = t;
          var o = 0;
          var s = r.length;
          var l, u, f, c, d;
          for (l = 0; l < s; l++) {
            c = r[l];
            if (c !== undefined && c !== null && Se.isArray(c) !== true)
              o = Se.measureText(e, n, i, o, c);
            else if (Se.isArray(c))
              for (u = 0, f = c.length; u < f; u++) {
                d = c[u];
                if (d !== undefined && d !== null && !Se.isArray(d))
                  o = Se.measureText(e, n, i, o, d);
              }
          }
          var h = i.length / 2;
          if (h > r.length) {
            for (l = 0; l < h; l++) delete n[i[l]];
            i.splice(0, h);
          }
          return o;
        };
        Se.measureText = function (e, t, r, a, n) {
          var i = t[n];
          if (!i) {
            i = t[n] = e.measureText(n).width;
            r.push(n);
          }
          if (i > a) a = i;
          return a;
        };
        Se.numberOfLabelLines = function (e) {
          var t = 1;
          Se.each(e, function (e) {
            if (Se.isArray(e)) if (e.length > t) t = e.length;
          });
          return t;
        };
        Se.color = !J
          ? function (e) {
              console.error("Color.js not found!");
              return e;
            }
          : function (e) {
              if (e instanceof CanvasGradient) e = he.global.defaultColor;
              return J(e);
            };
        Se.getHoverColor = function (e) {
          return e instanceof CanvasPattern || e instanceof CanvasGradient
            ? e
            : Se.color(e).saturate(0.5).darken(0.1).rgbString();
        };
      };
      function ga() {
        throw new Error(
          "This method is not implemented: either no adapter can " +
            "be found or an incomplete integration was provided."
        );
      }
      function pa(e) {
        this.options = e || {};
      }
      Se.extend(pa.prototype, {
        formats: ga,
        parse: ga,
        format: ga,
        add: ga,
        diff: ga,
        startOf: ga,
        endOf: ga,
        _create: function (e) {
          return e;
        },
      }),
        (pa.override = function (e) {
          Se.extend(pa.prototype, e);
        });
      var ma,
        ba = { _date: pa },
        xa = {
          formatters: {
            values: function (e) {
              return Se.isArray(e) ? e : "" + e;
            },
            linear: function (e, t, r) {
              var a = r.length > 3 ? r[2] - r[1] : r[1] - r[0];
              if (Math.abs(a) > 1)
                if (e !== Math.floor(e)) a = e - Math.floor(e);
              var n = Se.log10(Math.abs(a));
              var i = "";
              if (e !== 0) {
                var o = Math.max(Math.abs(r[0]), Math.abs(r[r.length - 1]));
                if (o < 1e-4) {
                  var s = Se.log10(Math.abs(e));
                  var l = Math.floor(s) - Math.floor(n);
                  l = Math.max(Math.min(l, 20), 0);
                  i = e.toExponential(l);
                } else {
                  var u = -1 * Math.floor(n);
                  u = Math.max(Math.min(u, 20), 0);
                  i = e.toFixed(u);
                }
              } else i = "0";
              return i;
            },
            logarithmic: function (e, t, r) {
              var a = e / Math.pow(10, Math.floor(Se.log10(e)));
              if (e === 0) return "0";
              else if (
                a === 1 ||
                a === 2 ||
                a === 5 ||
                t === 0 ||
                t === r.length - 1
              )
                return e.toExponential();
              return "";
            },
          },
        },
        ya = Se.isArray,
        wa = Se.isNullOrUndef,
        _a = Se.valueOrDefault,
        ka = Se.valueAtIndexOrDefault;
      function Ma(e, t) {
        var r = [];
        var a = e.length / t;
        var n = 0;
        var i = e.length;
        for (; n < i; n += a) r.push(e[Math.floor(n)]);
        return r;
      }
      function Sa(e, t, r) {
        var a = e.getTicks().length;
        var n = Math.min(t, a - 1);
        var i = e.getPixelForTick(n);
        var o = e._startPixel;
        var s = e._endPixel;
        var l = 1e-6;
        var u;
        if (r) {
          if (a === 1) u = Math.max(i - o, s - i);
          else if (t === 0) u = (e.getPixelForTick(1) - i) / 2;
          else u = (i - e.getPixelForTick(n - 1)) / 2;
          i += n < t ? u : -u;
          if (i < o - l || i > s + l) return;
        }
        return i;
      }
      function Ca(e, n) {
        Se.each(e, function (e) {
          var t = e.gc;
          var r = t.length / 2;
          var a;
          if (r > n) {
            for (a = 0; a < r; ++a) delete e.data[t[a]];
            t.splice(0, r);
          }
        });
      }
      function Pa(e, t, r, a) {
        var n = r.length;
        var i = [];
        var o = [];
        var s = [];
        var l = 0;
        var u = 0;
        var f, c, d, h, v, g, p, m, b, x, y, w, _;
        for (f = 0; f < n; ++f) {
          h = r[f].label;
          v = r[f].major ? t.major : t.minor;
          e.font = g = v.string;
          p = a[g] = a[g] || { data: {}, gc: [] };
          m = v.lineHeight;
          b = x = 0;
          if (!wa(h) && !ya(h)) {
            b = Se.measureText(e, p.data, p.gc, b, h);
            x = m;
          } else if (ya(h))
            for (c = 0, d = h.length; c < d; ++c) {
              y = h[c];
              if (!wa(y) && !ya(y)) {
                b = Se.measureText(e, p.data, p.gc, b, y);
                x += m;
              }
            }
          i.push(b);
          o.push(x);
          s.push(m / 2);
          l = Math.max(b, l);
          u = Math.max(x, u);
        }
        Ca(a, n);
        w = i.indexOf(l);
        _ = o.indexOf(u);
        function k(e) {
          return { width: i[e] || 0, height: o[e] || 0, offset: s[e] || 0 };
        }
        return { first: k(0), last: k(n - 1), widest: k(w), highest: k(_) };
      }
      function Aa(e) {
        return e.drawTicks ? e.tickMarkLength : 0;
      }
      function Da(e) {
        var t, r;
        if (!e.display) return 0;
        t = Se.options._parseFont(e);
        r = Se.options.toPadding(e.padding);
        return t.lineHeight + r.height;
      }
      function Ta(e, t) {
        return Se.extend(
          Se.options._parseFont({
            fontFamily: _a(t.fontFamily, e.fontFamily),
            fontSize: _a(t.fontSize, e.fontSize),
            fontStyle: _a(t.fontStyle, e.fontStyle),
            lineHeight: _a(t.lineHeight, e.lineHeight),
          }),
          {
            color: Se.options.resolve([
              t.fontColor,
              e.fontColor,
              he.global.defaultFontColor,
            ]),
          }
        );
      }
      function Ia(e) {
        var t = Ta(e, e.minor);
        var r = e.major.enabled ? Ta(e, e.major) : t;
        return { minor: t, major: r };
      }
      function Fa(e) {
        var t = [];
        var r, a, n;
        for (a = 0, n = e.length; a < n; ++a) {
          r = e[a];
          if (typeof r._index !== "undefined") t.push(r);
        }
        return t;
      }
      function Oa(e) {
        var t = e.length;
        var r, a;
        if (t < 2) return false;
        for (a = e[0], r = 1; r < t; ++r)
          if (e[r] - e[r - 1] !== a) return false;
        return a;
      }
      function La(e, t, r, a) {
        var n = Oa(e);
        var i = (t.length - 1) / a;
        var o, s, l, u;
        if (!n) return Math.max(i, 1);
        o = Se.math._factorize(n);
        for (l = 0, u = o.length - 1; l < u; l++) {
          s = o[l];
          if (s > i) return s;
        }
        return Math.max(i, 1);
      }
      function Ea(e) {
        var t = [];
        var r, a;
        for (r = 0, a = e.length; r < a; r++) if (e[r].major) t.push(r);
        return t;
      }
      function Na(e, t, r) {
        var a = 0;
        var n = t[0];
        var i, o;
        r = Math.ceil(r);
        for (i = 0; i < e.length; i++) {
          o = e[i];
          if (i === n) {
            o._index = i;
            a++;
            n = t[a * r];
          } else delete o.label;
        }
      }
      function Ra(e, t, r, a) {
        var n = _a(r, 0);
        var i = Math.min(_a(a, e.length), e.length);
        var o = 0;
        var s, l, u, f;
        t = Math.ceil(t);
        if (a) {
          s = a - r;
          t = s / Math.floor(s / t);
        }
        f = n;
        while (f < 0) {
          o++;
          f = Math.round(n + o * t);
        }
        for (l = Math.max(n, 0); l < i; l++) {
          u = e[l];
          if (l === f) {
            u._index = l;
            o++;
            f = Math.round(n + o * t);
          } else delete u.label;
        }
      }
      he._set("scale", {
        display: true,
        position: "left",
        offset: false,
        gridLines: {
          display: true,
          color: "rgba(0,0,0,0.1)",
          lineWidth: 1,
          drawBorder: true,
          drawOnChartArea: true,
          drawTicks: true,
          tickMarkLength: 10,
          zeroLineWidth: 1,
          zeroLineColor: "rgba(0,0,0,0.25)",
          zeroLineBorderDash: [],
          zeroLineBorderDashOffset: 0,
          offsetGridLines: false,
          borderDash: [],
          borderDashOffset: 0,
        },
        scaleLabel: {
          display: false,
          labelString: "",
          padding: { top: 4, bottom: 4 },
        },
        ticks: {
          beginAtZero: false,
          minRotation: 0,
          maxRotation: 50,
          mirror: false,
          padding: 0,
          reverse: false,
          display: true,
          autoSkip: true,
          autoSkipPadding: 0,
          labelOffset: 0,
          callback: xa.formatters.values,
          minor: {},
          major: {},
        },
      });
      var za = Oe.extend({
        zeroLineIndex: 0,
        getPadding: function () {
          var e = this;
          return {
            left: e.paddingLeft || 0,
            top: e.paddingTop || 0,
            right: e.paddingRight || 0,
            bottom: e.paddingBottom || 0,
          };
        },
        getTicks: function () {
          return this._ticks;
        },
        _getLabels: function () {
          var e = this.chart.data;
          return (
            this.options.labels ||
            (this.isHorizontal() ? e.xLabels : e.yLabels) ||
            e.labels ||
            []
          );
        },
        mergeTicksOptions: function () {},
        beforeUpdate: function () {
          Se.callback(this.options.beforeUpdate, [this]);
        },
        update: function (e, t, r) {
          var a = this;
          var n = a.options.ticks;
          var i = n.sampleSize;
          var o, s, l, u, f;
          a.beforeUpdate();
          a.maxWidth = e;
          a.maxHeight = t;
          a.margins = Se.extend({ left: 0, right: 0, top: 0, bottom: 0 }, r);
          a._ticks = null;
          a.ticks = null;
          a._labelSizes = null;
          a._maxLabelLines = 0;
          a.longestLabelWidth = 0;
          a.longestTextCache = a.longestTextCache || {};
          a._gridLineItems = null;
          a._labelItems = null;
          a.beforeSetDimensions();
          a.setDimensions();
          a.afterSetDimensions();
          a.beforeDataLimits();
          a.determineDataLimits();
          a.afterDataLimits();
          a.beforeBuildTicks();
          u = a.buildTicks() || [];
          u = a.afterBuildTicks(u) || u;
          if ((!u || !u.length) && a.ticks) {
            u = [];
            for (o = 0, s = a.ticks.length; o < s; ++o)
              u.push({ value: a.ticks[o], major: false });
          }
          a._ticks = u;
          f = i < u.length;
          l = a._convertTicksToLabels(f ? Ma(u, i) : u);
          a._configure();
          a.beforeCalculateTickRotation();
          a.calculateTickRotation();
          a.afterCalculateTickRotation();
          a.beforeFit();
          a.fit();
          a.afterFit();
          a._ticksToDraw =
            n.display && (n.autoSkip || n.source === "auto")
              ? a._autoSkip(u)
              : u;
          if (f) l = a._convertTicksToLabels(a._ticksToDraw);
          a.ticks = l;
          a.afterUpdate();
          return a.minSize;
        },
        _configure: function () {
          var e = this;
          var t = e.options.ticks.reverse;
          var r, a;
          if (e.isHorizontal()) {
            r = e.left;
            a = e.right;
          } else {
            r = e.top;
            a = e.bottom;
            t = !t;
          }
          e._startPixel = r;
          e._endPixel = a;
          e._reversePixels = t;
          e._length = a - r;
        },
        afterUpdate: function () {
          Se.callback(this.options.afterUpdate, [this]);
        },
        beforeSetDimensions: function () {
          Se.callback(this.options.beforeSetDimensions, [this]);
        },
        setDimensions: function () {
          var e = this;
          if (e.isHorizontal()) {
            e.width = e.maxWidth;
            e.left = 0;
            e.right = e.width;
          } else {
            e.height = e.maxHeight;
            e.top = 0;
            e.bottom = e.height;
          }
          e.paddingLeft = 0;
          e.paddingTop = 0;
          e.paddingRight = 0;
          e.paddingBottom = 0;
        },
        afterSetDimensions: function () {
          Se.callback(this.options.afterSetDimensions, [this]);
        },
        beforeDataLimits: function () {
          Se.callback(this.options.beforeDataLimits, [this]);
        },
        determineDataLimits: Se.noop,
        afterDataLimits: function () {
          Se.callback(this.options.afterDataLimits, [this]);
        },
        beforeBuildTicks: function () {
          Se.callback(this.options.beforeBuildTicks, [this]);
        },
        buildTicks: Se.noop,
        afterBuildTicks: function (e) {
          var t = this;
          if (ya(e) && e.length)
            return Se.callback(t.options.afterBuildTicks, [t, e]);
          t.ticks =
            Se.callback(t.options.afterBuildTicks, [t, t.ticks]) || t.ticks;
          return e;
        },
        beforeTickToLabelConversion: function () {
          Se.callback(this.options.beforeTickToLabelConversion, [this]);
        },
        convertTicksToLabels: function () {
          var e = this;
          var t = e.options.ticks;
          e.ticks = e.ticks.map(t.userCallback || t.callback, this);
        },
        afterTickToLabelConversion: function () {
          Se.callback(this.options.afterTickToLabelConversion, [this]);
        },
        beforeCalculateTickRotation: function () {
          Se.callback(this.options.beforeCalculateTickRotation, [this]);
        },
        calculateTickRotation: function () {
          var e = this;
          var t = e.options;
          var r = t.ticks;
          var a = e.getTicks().length;
          var n = r.minRotation || 0;
          var i = r.maxRotation;
          var o = n;
          var s, l, u, f, c, d, h;
          if (
            !e._isVisible() ||
            !r.display ||
            n >= i ||
            a <= 1 ||
            !e.isHorizontal()
          ) {
            e.labelRotation = n;
            return;
          }
          s = e._getLabelSizes();
          l = s.widest.width;
          u = s.highest.height - s.highest.offset;
          f = Math.min(e.maxWidth, e.chart.width - l);
          c = t.offset ? e.maxWidth / a : f / (a - 1);
          if (l + 6 > c) {
            c = f / (a - (t.offset ? 0.5 : 1));
            d = e.maxHeight - Aa(t.gridLines) - r.padding - Da(t.scaleLabel);
            h = Math.sqrt(l * l + u * u);
            o = Se.toDegrees(
              Math.min(
                Math.asin(Math.min((s.highest.height + 6) / c, 1)),
                Math.asin(Math.min(d / h, 1)) - Math.asin(u / h)
              )
            );
            o = Math.max(n, Math.min(i, o));
          }
          e.labelRotation = o;
        },
        afterCalculateTickRotation: function () {
          Se.callback(this.options.afterCalculateTickRotation, [this]);
        },
        beforeFit: function () {
          Se.callback(this.options.beforeFit, [this]);
        },
        fit: function () {
          var e = this;
          var t = (e.minSize = { width: 0, height: 0 });
          var r = e.chart;
          var a = e.options;
          var n = a.ticks;
          var i = a.scaleLabel;
          var o = a.gridLines;
          var s = e._isVisible();
          var l = a.position === "bottom";
          var u = e.isHorizontal();
          if (u) t.width = e.maxWidth;
          else if (s) t.width = Aa(o) + Da(i);
          if (!u) t.height = e.maxHeight;
          else if (s) t.height = Aa(o) + Da(i);
          if (n.display && s) {
            var f = Ia(n);
            var c = e._getLabelSizes();
            var d = c.first;
            var h = c.last;
            var v = c.widest;
            var g = c.highest;
            var p = f.minor.lineHeight * 0.4;
            var m = n.padding;
            if (u) {
              var b = e.labelRotation !== 0;
              var x = Se.toRadians(e.labelRotation);
              var y = Math.cos(x);
              var w = Math.sin(x);
              var _ =
                w * v.width + y * (g.height - (b ? g.offset : 0)) + (b ? 0 : p);
              t.height = Math.min(e.maxHeight, t.height + _ + m);
              var k = e.getPixelForTick(0) - e.left;
              var M = e.right - e.getPixelForTick(e.getTicks().length - 1);
              var S, C;
              if (b) {
                S = l ? y * d.width + w * d.offset : w * (d.height - d.offset);
                C = l ? w * (h.height - h.offset) : y * h.width + w * h.offset;
              } else {
                S = d.width / 2;
                C = h.width / 2;
              }
              e.paddingLeft =
                Math.max(((S - k) * e.width) / (e.width - k), 0) + 3;
              e.paddingRight =
                Math.max(((C - M) * e.width) / (e.width - M), 0) + 3;
            } else {
              var P = n.mirror ? 0 : v.width + m + p;
              t.width = Math.min(e.maxWidth, t.width + P);
              e.paddingTop = d.height / 2;
              e.paddingBottom = h.height / 2;
            }
          }
          e.handleMargins();
          if (u) {
            e.width = e._length = r.width - e.margins.left - e.margins.right;
            e.height = t.height;
          } else {
            e.width = t.width;
            e.height = e._length = r.height - e.margins.top - e.margins.bottom;
          }
        },
        handleMargins: function () {
          var e = this;
          if (e.margins) {
            e.margins.left = Math.max(e.paddingLeft, e.margins.left);
            e.margins.top = Math.max(e.paddingTop, e.margins.top);
            e.margins.right = Math.max(e.paddingRight, e.margins.right);
            e.margins.bottom = Math.max(e.paddingBottom, e.margins.bottom);
          }
        },
        afterFit: function () {
          Se.callback(this.options.afterFit, [this]);
        },
        isHorizontal: function () {
          var e = this.options.position;
          return e === "top" || e === "bottom";
        },
        isFullWidth: function () {
          return this.options.fullWidth;
        },
        getRightValue: function (e) {
          if (wa(e)) return NaN;
          if ((typeof e === "number" || e instanceof Number) && !isFinite(e))
            return NaN;
          if (e)
            if (this.isHorizontal()) {
              if (e.x !== undefined) return this.getRightValue(e.x);
            } else if (e.y !== undefined) return this.getRightValue(e.y);
          return e;
        },
        _convertTicksToLabels: function (e) {
          var t = this;
          var r, a, n;
          t.ticks = e.map(function (e) {
            return e.value;
          });
          t.beforeTickToLabelConversion();
          r = t.convertTicksToLabels(e) || t.ticks;
          t.afterTickToLabelConversion();
          for (a = 0, n = e.length; a < n; ++a) e[a].label = r[a];
          return r;
        },
        _getLabelSizes: function () {
          var e = this;
          var t = e._labelSizes;
          if (!t) {
            e._labelSizes = t = Pa(
              e.ctx,
              Ia(e.options.ticks),
              e.getTicks(),
              e.longestTextCache
            );
            e.longestLabelWidth = t.widest.width;
          }
          return t;
        },
        _parseValue: function (e) {
          var t, r, a, n;
          if (ya(e)) {
            t = +this.getRightValue(e[0]);
            r = +this.getRightValue(e[1]);
            a = Math.min(t, r);
            n = Math.max(t, r);
          } else {
            e = +this.getRightValue(e);
            t = undefined;
            r = e;
            a = e;
            n = e;
          }
          return { min: a, max: n, start: t, end: r };
        },
        _getScaleLabel: function (e) {
          var t = this._parseValue(e);
          if (t.start !== undefined) return "[" + t.start + ", " + t.end + "]";
          return +this.getRightValue(e);
        },
        getLabelForIndex: Se.noop,
        getPixelForValue: Se.noop,
        getValueForPixel: Se.noop,
        getPixelForTick: function (e) {
          var t = this;
          var r = t.options.offset;
          var a = t._ticks.length;
          var n = 1 / Math.max(a - (r ? 0 : 1), 1);
          return e < 0 || e > a - 1
            ? null
            : t.getPixelForDecimal(e * n + (r ? n / 2 : 0));
        },
        getPixelForDecimal: function (e) {
          var t = this;
          if (t._reversePixels) e = 1 - e;
          return t._startPixel + e * t._length;
        },
        getDecimalForPixel: function (e) {
          var t = (e - this._startPixel) / this._length;
          return this._reversePixels ? 1 - t : t;
        },
        getBasePixel: function () {
          return this.getPixelForValue(this.getBaseValue());
        },
        getBaseValue: function () {
          var e = this;
          var t = e.min;
          var r = e.max;
          return e.beginAtZero
            ? 0
            : t < 0 && r < 0
            ? r
            : t > 0 && r > 0
            ? t
            : 0;
        },
        _autoSkip: function (e) {
          var t = this;
          var r = t.options.ticks;
          var a = t._length;
          var n = r.maxTicksLimit || a / t._tickSize() + 1;
          var i = r.major.enabled ? Ea(e) : [];
          var o = i.length;
          var s = i[0];
          var l = i[o - 1];
          var u, f, c, d;
          if (o > n) {
            Na(e, i, o / n);
            return Fa(e);
          }
          c = La(i, e, a, n);
          if (o > 0) {
            for (u = 0, f = o - 1; u < f; u++) Ra(e, c, i[u], i[u + 1]);
            d = o > 1 ? (l - s) / (o - 1) : null;
            Ra(e, c, Se.isNullOrUndef(d) ? 0 : s - d, s);
            Ra(e, c, l, Se.isNullOrUndef(d) ? e.length : l + d);
            return Fa(e);
          }
          Ra(e, c);
          return Fa(e);
        },
        _tickSize: function () {
          var e = this;
          var t = e.options.ticks;
          var r = Se.toRadians(e.labelRotation);
          var a = Math.abs(Math.cos(r));
          var n = Math.abs(Math.sin(r));
          var i = e._getLabelSizes();
          var o = t.autoSkipPadding || 0;
          var s = i ? i.widest.width + o : 0;
          var l = i ? i.highest.height + o : 0;
          return e.isHorizontal()
            ? l * a > s * n
              ? s / a
              : l / n
            : l * n < s * a
            ? l / a
            : s / n;
        },
        _isVisible: function () {
          var e = this;
          var t = e.chart;
          var r = e.options.display;
          var a, n, i;
          if (r !== "auto") return !!r;
          for (a = 0, n = t.data.datasets.length; a < n; ++a)
            if (t.isDatasetVisible(a)) {
              i = t.getDatasetMeta(a);
              if (i.xAxisID === e.id || i.yAxisID === e.id) return true;
            }
          return false;
        },
        _computeGridLineItems: function (e) {
          var t = this;
          var r = t.chart;
          var a = t.options;
          var n = a.gridLines;
          var i = a.position;
          var o = n.offsetGridLines;
          var s = t.isHorizontal();
          var l = t._ticksToDraw;
          var u = l.length + (o ? 1 : 0);
          var f = Aa(n);
          var c = [];
          var d = n.drawBorder ? ka(n.lineWidth, 0, 0) : 0;
          var h = d / 2;
          var v = Se._alignPixel;
          var g = function (e) {
            return v(r, e, d);
          };
          var p, m, b, x, y;
          var w, _, k, M, S, C, P, A, D, T, I, F;
          if (i === "top") {
            p = g(t.bottom);
            _ = t.bottom - f;
            M = p - h;
            C = g(e.top) + h;
            A = e.bottom;
          } else if (i === "bottom") {
            p = g(t.top);
            C = e.top;
            A = g(e.bottom) - h;
            _ = p + h;
            M = t.top + f;
          } else if (i === "left") {
            p = g(t.right);
            w = t.right - f;
            k = p - h;
            S = g(e.left) + h;
            P = e.right;
          } else {
            p = g(t.left);
            S = e.left;
            P = g(e.right) - h;
            w = p + h;
            k = t.left + f;
          }
          for (m = 0; m < u; ++m) {
            b = l[m] || {};
            if (wa(b.label) && m < l.length) continue;
            if (m === t.zeroLineIndex && a.offset === o) {
              D = n.zeroLineWidth;
              T = n.zeroLineColor;
              I = n.zeroLineBorderDash || [];
              F = n.zeroLineBorderDashOffset || 0;
            } else {
              D = ka(n.lineWidth, m, 1);
              T = ka(n.color, m, "rgba(0,0,0,0.1)");
              I = n.borderDash || [];
              F = n.borderDashOffset || 0;
            }
            x = Sa(t, b._index || m, o);
            if (x === undefined) continue;
            y = v(r, x, D);
            if (s) w = k = S = P = y;
            else _ = M = C = A = y;
            c.push({
              tx1: w,
              ty1: _,
              tx2: k,
              ty2: M,
              x1: S,
              y1: C,
              x2: P,
              y2: A,
              width: D,
              color: T,
              borderDash: I,
              borderDashOffset: F,
            });
          }
          c.ticksLength = u;
          c.borderValue = p;
          return c;
        },
        _computeLabelItems: function () {
          var e = this;
          var t = e.options;
          var r = t.ticks;
          var a = t.position;
          var n = r.mirror;
          var i = e.isHorizontal();
          var o = e._ticksToDraw;
          var s = Ia(r);
          var l = r.padding;
          var u = Aa(t.gridLines);
          var f = -Se.toRadians(e.labelRotation);
          var c = [];
          var d, h, v, g, p, m, b, x, y, w, _, k;
          if (a === "top") {
            m = e.bottom - u - l;
            b = !f ? "center" : "left";
          } else if (a === "bottom") {
            m = e.top + u + l;
            b = !f ? "center" : "right";
          } else if (a === "left") {
            p = e.right - (n ? 0 : u) - l;
            b = n ? "left" : "right";
          } else {
            p = e.left + (n ? 0 : u) + l;
            b = n ? "right" : "left";
          }
          for (d = 0, h = o.length; d < h; ++d) {
            v = o[d];
            g = v.label;
            if (wa(g)) continue;
            x = e.getPixelForTick(v._index || d) + r.labelOffset;
            y = v.major ? s.major : s.minor;
            w = y.lineHeight;
            _ = ya(g) ? g.length : 1;
            if (i) {
              p = x;
              k = a === "top" ? ((!f ? 0.5 : 1) - _) * w : (!f ? 0.5 : 0) * w;
            } else {
              m = x;
              k = ((1 - _) * w) / 2;
            }
            c.push({
              x: p,
              y: m,
              rotation: f,
              label: g,
              font: y,
              textOffset: k,
              textAlign: b,
            });
          }
          return c;
        },
        _drawGrid: function (e) {
          var t = this;
          var r = t.options.gridLines;
          if (!r.display) return;
          var a = t.ctx;
          var n = t.chart;
          var i = Se._alignPixel;
          var o = r.drawBorder ? ka(r.lineWidth, 0, 0) : 0;
          var s =
            t._gridLineItems || (t._gridLineItems = t._computeGridLineItems(e));
          var l, u, f, c, d;
          for (f = 0, c = s.length; f < c; ++f) {
            d = s[f];
            l = d.width;
            u = d.color;
            if (l && u) {
              a.save();
              a.lineWidth = l;
              a.strokeStyle = u;
              if (a.setLineDash) {
                a.setLineDash(d.borderDash);
                a.lineDashOffset = d.borderDashOffset;
              }
              a.beginPath();
              if (r.drawTicks) {
                a.moveTo(d.tx1, d.ty1);
                a.lineTo(d.tx2, d.ty2);
              }
              if (r.drawOnChartArea) {
                a.moveTo(d.x1, d.y1);
                a.lineTo(d.x2, d.y2);
              }
              a.stroke();
              a.restore();
            }
          }
          if (o) {
            var h = o;
            var v = ka(r.lineWidth, s.ticksLength - 1, 1);
            var g = s.borderValue;
            var p, m, b, x;
            if (t.isHorizontal()) {
              p = i(n, t.left, h) - h / 2;
              m = i(n, t.right, v) + v / 2;
              b = x = g;
            } else {
              b = i(n, t.top, h) - h / 2;
              x = i(n, t.bottom, v) + v / 2;
              p = m = g;
            }
            a.lineWidth = o;
            a.strokeStyle = ka(r.color, 0);
            a.beginPath();
            a.moveTo(p, b);
            a.lineTo(m, x);
            a.stroke();
          }
        },
        _drawLabels: function () {
          var e = this;
          var t = e.options.ticks;
          if (!t.display) return;
          var r = e.ctx;
          var a = e._labelItems || (e._labelItems = e._computeLabelItems());
          var n, i, o, s, l, u, f, c;
          for (n = 0, o = a.length; n < o; ++n) {
            l = a[n];
            u = l.font;
            r.save();
            r.translate(l.x, l.y);
            r.rotate(l.rotation);
            r.font = u.string;
            r.fillStyle = u.color;
            r.textBaseline = "middle";
            r.textAlign = l.textAlign;
            f = l.label;
            c = l.textOffset;
            if (ya(f))
              for (i = 0, s = f.length; i < s; ++i) {
                r.fillText("" + f[i], 0, c);
                c += u.lineHeight;
              }
            else r.fillText(f, 0, c);
            r.restore();
          }
        },
        _drawTitle: function () {
          var e = this;
          var t = e.ctx;
          var r = e.options;
          var a = r.scaleLabel;
          if (!a.display) return;
          var n = _a(a.fontColor, he.global.defaultFontColor);
          var i = Se.options._parseFont(a);
          var o = Se.options.toPadding(a.padding);
          var s = i.lineHeight / 2;
          var l = r.position;
          var u = 0;
          var f, c;
          if (e.isHorizontal()) {
            f = e.left + e.width / 2;
            c = l === "bottom" ? e.bottom - s - o.bottom : e.top + s + o.top;
          } else {
            var d = l === "left";
            f = d ? e.left + s + o.top : e.right - s - o.top;
            c = e.top + e.height / 2;
            u = d ? -0.5 * Math.PI : 0.5 * Math.PI;
          }
          t.save();
          t.translate(f, c);
          t.rotate(u);
          t.textAlign = "center";
          t.textBaseline = "middle";
          t.fillStyle = n;
          t.font = i.string;
          t.fillText(a.labelString, 0, 0);
          t.restore();
        },
        draw: function (e) {
          var t = this;
          if (!t._isVisible()) return;
          t._drawGrid(e);
          t._drawTitle();
          t._drawLabels();
        },
        _layers: function () {
          var e = this;
          var t = e.options;
          var r = (t.ticks && t.ticks.z) || 0;
          var a = (t.gridLines && t.gridLines.z) || 0;
          if (!e._isVisible() || r === a || e.draw !== e._draw)
            return [
              {
                z: r,
                draw: function () {
                  e.draw.apply(e, arguments);
                },
              },
            ];
          return [
            {
              z: a,
              draw: function () {
                e._drawGrid.apply(e, arguments);
                e._drawTitle.apply(e, arguments);
              },
            },
            {
              z: r,
              draw: function () {
                e._drawLabels.apply(e, arguments);
              },
            },
          ];
        },
        _getMatchingVisibleMetas: function (t) {
          var r = this;
          var a = r.isHorizontal();
          return r.chart._getSortedVisibleDatasetMetas().filter(function (e) {
            return (
              (!t || e.type === t) &&
              (a ? e.xAxisID === r.id : e.yAxisID === r.id)
            );
          });
        },
      });
      za.prototype._draw = za.prototype.draw;
      var Va = za,
        Ba = Se.isNullOrUndef,
        Wa = { position: "bottom" },
        Ha = Va.extend({
          determineDataLimits: function () {
            var e = this;
            var t = e._getLabels();
            var r = e.options.ticks;
            var a = r.min;
            var n = r.max;
            var i = 0;
            var o = t.length - 1;
            var s;
            if (a !== undefined) {
              s = t.indexOf(a);
              if (s >= 0) i = s;
            }
            if (n !== undefined) {
              s = t.indexOf(n);
              if (s >= 0) o = s;
            }
            e.minIndex = i;
            e.maxIndex = o;
            e.min = t[i];
            e.max = t[o];
          },
          buildTicks: function () {
            var e = this;
            var t = e._getLabels();
            var r = e.minIndex;
            var a = e.maxIndex;
            e.ticks = r === 0 && a === t.length - 1 ? t : t.slice(r, a + 1);
          },
          getLabelForIndex: function (e, t) {
            var r = this;
            var a = r.chart;
            if (a.getDatasetMeta(t).controller._getValueScaleId() === r.id)
              return r.getRightValue(a.data.datasets[t].data[e]);
            return r._getLabels()[e];
          },
          _configure: function () {
            var e = this;
            var t = e.options.offset;
            var r = e.ticks;
            Va.prototype._configure.call(e);
            if (!e.isHorizontal()) e._reversePixels = !e._reversePixels;
            if (!r) return;
            e._startValue = e.minIndex - (t ? 0.5 : 0);
            e._valueRange = Math.max(r.length - (t ? 0 : 1), 1);
          },
          getPixelForValue: function (e, t, r) {
            var a = this;
            var n, i, o;
            if (!Ba(t) && !Ba(r)) e = a.chart.data.datasets[r].data[t];
            if (!Ba(e)) n = a.isHorizontal() ? e.x : e.y;
            if (n !== undefined || (e !== undefined && isNaN(t))) {
              i = a._getLabels();
              e = Se.valueOrDefault(n, e);
              o = i.indexOf(e);
              t = o !== -1 ? o : t;
              if (isNaN(t)) t = e;
            }
            return a.getPixelForDecimal((t - a._startValue) / a._valueRange);
          },
          getPixelForTick: function (e) {
            var t = this.ticks;
            return e < 0 || e > t.length - 1
              ? null
              : this.getPixelForValue(t[e], e + this.minIndex);
          },
          getValueForPixel: function (e) {
            var t = this;
            var r = Math.round(
              t._startValue + t.getDecimalForPixel(e) * t._valueRange
            );
            return Math.min(Math.max(r, 0), t.ticks.length - 1);
          },
          getBasePixel: function () {
            return this.bottom;
          },
        }),
        ja;
      Ha._defaults = Wa;
      var Ua = Se.noop,
        qa = Se.isNullOrUndef;
      function Ya(e, t) {
        var r = [];
        var a = 1e-14;
        var n = e.stepSize;
        var i = n || 1;
        var o = e.maxTicks - 1;
        var s = e.min;
        var l = e.max;
        var u = e.precision;
        var f = t.min;
        var c = t.max;
        var d = Se.niceNum((c - f) / o / i) * i;
        var h, v, g, p;
        if (d < a && qa(s) && qa(l)) return [f, c];
        p = Math.ceil(c / d) - Math.floor(f / d);
        if (p > o) d = Se.niceNum((p * d) / o / i) * i;
        if (n || qa(u)) h = Math.pow(10, Se._decimalPlaces(d));
        else {
          h = Math.pow(10, u);
          d = Math.ceil(d * h) / h;
        }
        v = Math.floor(f / d) * d;
        g = Math.ceil(c / d) * d;
        if (n) {
          if (!qa(s) && Se.almostWhole(s / d, d / 1e3)) v = s;
          if (!qa(l) && Se.almostWhole(l / d, d / 1e3)) g = l;
        }
        p = (g - v) / d;
        if (Se.almostEquals(p, Math.round(p), d / 1e3)) p = Math.round(p);
        else p = Math.ceil(p);
        v = Math.round(v * h) / h;
        g = Math.round(g * h) / h;
        r.push(qa(s) ? v : s);
        for (var m = 1; m < p; ++m) r.push(Math.round((v + m * d) * h) / h);
        r.push(qa(l) ? g : l);
        return r;
      }
      var Ga = Va.extend({
          getRightValue: function (e) {
            if (typeof e === "string") return +e;
            return Va.prototype.getRightValue.call(this, e);
          },
          handleTickRangeOptions: function () {
            var e = this;
            var t = e.options;
            var r = t.ticks;
            if (r.beginAtZero) {
              var a = Se.sign(e.min);
              var n = Se.sign(e.max);
              if (a < 0 && n < 0) e.max = 0;
              else if (a > 0 && n > 0) e.min = 0;
            }
            var i = r.min !== undefined || r.suggestedMin !== undefined;
            var o = r.max !== undefined || r.suggestedMax !== undefined;
            if (r.min !== undefined) e.min = r.min;
            else if (r.suggestedMin !== undefined)
              if (e.min === null) e.min = r.suggestedMin;
              else e.min = Math.min(e.min, r.suggestedMin);
            if (r.max !== undefined) e.max = r.max;
            else if (r.suggestedMax !== undefined)
              if (e.max === null) e.max = r.suggestedMax;
              else e.max = Math.max(e.max, r.suggestedMax);
            if (i !== o)
              if (e.min >= e.max)
                if (i) e.max = e.min + 1;
                else e.min = e.max - 1;
            if (e.min === e.max) {
              e.max++;
              if (!r.beginAtZero) e.min--;
            }
          },
          getTickLimit: function () {
            var e = this;
            var t = e.options.ticks;
            var r = t.stepSize;
            var a = t.maxTicksLimit;
            var n;
            if (r) n = Math.ceil(e.max / r) - Math.floor(e.min / r) + 1;
            else {
              n = e._computeTickLimit();
              a = a || 11;
            }
            if (a) n = Math.min(a, n);
            return n;
          },
          _computeTickLimit: function () {
            return Number.POSITIVE_INFINITY;
          },
          handleDirectionalChanges: Ua,
          buildTicks: function () {
            var e = this;
            var t = e.options;
            var r = t.ticks;
            var a = e.getTickLimit();
            a = Math.max(2, a);
            var n = {
              maxTicks: a,
              min: r.min,
              max: r.max,
              precision: r.precision,
              stepSize: Se.valueOrDefault(r.fixedStepSize, r.stepSize),
            };
            var i = (e.ticks = Ya(n, e));
            e.handleDirectionalChanges();
            e.max = Se.max(i);
            e.min = Se.min(i);
            if (r.reverse) {
              i.reverse();
              e.start = e.max;
              e.end = e.min;
            } else {
              e.start = e.min;
              e.end = e.max;
            }
          },
          convertTicksToLabels: function () {
            var e = this;
            e.ticksAsNumbers = e.ticks.slice();
            e.zeroLineIndex = e.ticks.indexOf(0);
            Va.prototype.convertTicksToLabels.call(e);
          },
          _configure: function () {
            var e = this;
            var t = e.getTicks();
            var r = e.min;
            var a = e.max;
            var n;
            Va.prototype._configure.call(e);
            if (e.options.offset && t.length) {
              n = (a - r) / Math.max(t.length - 1, 1) / 2;
              r -= n;
              a += n;
            }
            e._startValue = r;
            e._endValue = a;
            e._valueRange = a - r;
          },
        }),
        Xa = { position: "left", ticks: { callback: xa.formatters.linear } },
        Ka = 0,
        $a = 1;
      function Za(e, t, r) {
        var a = [
          r.type,
          t === undefined && r.stack === undefined ? r.index : "",
          r.stack,
        ].join(".");
        if (e[a] === undefined) e[a] = { pos: [], neg: [] };
        return e[a];
      }
      function Ja(e, t, r, a) {
        var n = e.options;
        var i = n.stacked;
        var o = Za(t, i, r);
        var s = o.pos;
        var l = o.neg;
        var u = a.length;
        var f, c;
        for (f = 0; f < u; ++f) {
          c = e._parseValue(a[f]);
          if (isNaN(c.min) || isNaN(c.max) || r.data[f].hidden) continue;
          s[f] = s[f] || 0;
          l[f] = l[f] || 0;
          if (n.relativePoints) s[f] = 100;
          else if (c.min < 0 || c.max < 0) l[f] += c.min;
          else s[f] += c.max;
        }
      }
      function Qa(e, t, r) {
        var a = r.length;
        var n, i;
        for (n = 0; n < a; ++n) {
          i = e._parseValue(r[n]);
          if (isNaN(i.min) || isNaN(i.max) || t.data[n].hidden) continue;
          e.min = Math.min(e.min, i.min);
          e.max = Math.max(e.max, i.max);
        }
      }
      var en = Ga.extend({
          determineDataLimits: function () {
            var t = this;
            var e = t.options;
            var r = t.chart;
            var a = r.data.datasets;
            var n = t._getMatchingVisibleMetas();
            var i = e.stacked;
            var o = {};
            var s = n.length;
            var l, u, f, c;
            t.min = Number.POSITIVE_INFINITY;
            t.max = Number.NEGATIVE_INFINITY;
            if (i === undefined)
              for (l = 0; !i && l < s; ++l) {
                u = n[l];
                i = u.stack !== undefined;
              }
            for (l = 0; l < s; ++l) {
              u = n[l];
              f = a[u.index].data;
              if (i) Ja(t, o, u, f);
              else Qa(t, u, f);
            }
            Se.each(o, function (e) {
              c = e.pos.concat(e.neg);
              t.min = Math.min(t.min, Se.min(c));
              t.max = Math.max(t.max, Se.max(c));
            });
            t.min = Se.isFinite(t.min) && !isNaN(t.min) ? t.min : Ka;
            t.max = Se.isFinite(t.max) && !isNaN(t.max) ? t.max : $a;
            t.handleTickRangeOptions();
          },
          _computeTickLimit: function () {
            var e = this;
            var t;
            if (e.isHorizontal()) return Math.ceil(e.width / 40);
            t = Se.options._parseFont(e.options.ticks);
            return Math.ceil(e.height / t.lineHeight);
          },
          handleDirectionalChanges: function () {
            if (!this.isHorizontal()) this.ticks.reverse();
          },
          getLabelForIndex: function (e, t) {
            return this._getScaleLabel(this.chart.data.datasets[t].data[e]);
          },
          getPixelForValue: function (e) {
            var t = this;
            return t.getPixelForDecimal(
              (+t.getRightValue(e) - t._startValue) / t._valueRange
            );
          },
          getValueForPixel: function (e) {
            return (
              this._startValue + this.getDecimalForPixel(e) * this._valueRange
            );
          },
          getPixelForTick: function (e) {
            var t = this.ticksAsNumbers;
            if (e < 0 || e > t.length - 1) return null;
            return this.getPixelForValue(t[e]);
          },
        }),
        tn;
      en._defaults = Xa;
      var rn = Se.valueOrDefault,
        an = Se.math.log10;
      function nn(e, t) {
        var r = [];
        var a = rn(e.min, Math.pow(10, Math.floor(an(t.min))));
        var n = Math.floor(an(t.max));
        var i = Math.ceil(t.max / Math.pow(10, n));
        var o, s;
        if (a === 0) {
          o = Math.floor(an(t.minNotZero));
          s = Math.floor(t.minNotZero / Math.pow(10, o));
          r.push(a);
          a = s * Math.pow(10, o);
        } else {
          o = Math.floor(an(a));
          s = Math.floor(a / Math.pow(10, o));
        }
        var l = o < 0 ? Math.pow(10, Math.abs(o)) : 1;
        do {
          r.push(a);
          ++s;
          if (s === 10) {
            s = 1;
            ++o;
            l = o >= 0 ? 1 : l;
          }
          a = Math.round(s * Math.pow(10, o) * l) / l;
        } while (o < n || (o === n && s < i));
        var u = rn(e.max, a);
        r.push(u);
        return r;
      }
      var on = {
        position: "left",
        ticks: { callback: xa.formatters.logarithmic },
      };
      function sn(e, t) {
        return Se.isFinite(e) && e >= 0 ? e : t;
      }
      var ln = Va.extend({
          determineDataLimits: function () {
            var a = this;
            var e = a.options;
            var t = a.chart;
            var r = t.data.datasets;
            var n = a.isHorizontal();
            function i(e) {
              return n ? e.xAxisID === a.id : e.yAxisID === a.id;
            }
            var o, s, l, u, f, c;
            a.min = Number.POSITIVE_INFINITY;
            a.max = Number.NEGATIVE_INFINITY;
            a.minNotZero = Number.POSITIVE_INFINITY;
            var d = e.stacked;
            if (d === undefined)
              for (o = 0; o < r.length; o++) {
                s = t.getDatasetMeta(o);
                if (t.isDatasetVisible(o) && i(s) && s.stack !== undefined) {
                  d = true;
                  break;
                }
              }
            if (e.stacked || d) {
              var h = {};
              for (o = 0; o < r.length; o++) {
                s = t.getDatasetMeta(o);
                var v = [
                  s.type,
                  e.stacked === undefined && s.stack === undefined ? o : "",
                  s.stack,
                ].join(".");
                if (t.isDatasetVisible(o) && i(s)) {
                  if (h[v] === undefined) h[v] = [];
                  u = r[o].data;
                  for (f = 0, c = u.length; f < c; f++) {
                    var g = h[v];
                    l = a._parseValue(u[f]);
                    if (
                      isNaN(l.min) ||
                      isNaN(l.max) ||
                      s.data[f].hidden ||
                      l.min < 0 ||
                      l.max < 0
                    )
                      continue;
                    g[f] = g[f] || 0;
                    g[f] += l.max;
                  }
                }
              }
              Se.each(h, function (e) {
                if (e.length > 0) {
                  var t = Se.min(e);
                  var r = Se.max(e);
                  a.min = Math.min(a.min, t);
                  a.max = Math.max(a.max, r);
                }
              });
            } else
              for (o = 0; o < r.length; o++) {
                s = t.getDatasetMeta(o);
                if (t.isDatasetVisible(o) && i(s)) {
                  u = r[o].data;
                  for (f = 0, c = u.length; f < c; f++) {
                    l = a._parseValue(u[f]);
                    if (
                      isNaN(l.min) ||
                      isNaN(l.max) ||
                      s.data[f].hidden ||
                      l.min < 0 ||
                      l.max < 0
                    )
                      continue;
                    a.min = Math.min(l.min, a.min);
                    a.max = Math.max(l.max, a.max);
                    if (l.min !== 0)
                      a.minNotZero = Math.min(l.min, a.minNotZero);
                  }
                }
              }
            a.min = Se.isFinite(a.min) ? a.min : null;
            a.max = Se.isFinite(a.max) ? a.max : null;
            a.minNotZero = Se.isFinite(a.minNotZero) ? a.minNotZero : null;
            this.handleTickRangeOptions();
          },
          handleTickRangeOptions: function () {
            var e = this;
            var t = e.options.ticks;
            var r = 1;
            var a = 10;
            e.min = sn(t.min, e.min);
            e.max = sn(t.max, e.max);
            if (e.min === e.max)
              if (e.min !== 0 && e.min !== null) {
                e.min = Math.pow(10, Math.floor(an(e.min)) - 1);
                e.max = Math.pow(10, Math.floor(an(e.max)) + 1);
              } else {
                e.min = r;
                e.max = a;
              }
            if (e.min === null) e.min = Math.pow(10, Math.floor(an(e.max)) - 1);
            if (e.max === null)
              e.max = e.min !== 0 ? Math.pow(10, Math.floor(an(e.min)) + 1) : a;
            if (e.minNotZero === null)
              if (e.min > 0) e.minNotZero = e.min;
              else if (e.max < 1)
                e.minNotZero = Math.pow(10, Math.floor(an(e.max)));
              else e.minNotZero = r;
          },
          buildTicks: function () {
            var e = this;
            var t = e.options.ticks;
            var r = !e.isHorizontal();
            var a = { min: sn(t.min), max: sn(t.max) };
            var n = (e.ticks = nn(a, e));
            e.max = Se.max(n);
            e.min = Se.min(n);
            if (t.reverse) {
              r = !r;
              e.start = e.max;
              e.end = e.min;
            } else {
              e.start = e.min;
              e.end = e.max;
            }
            if (r) n.reverse();
          },
          convertTicksToLabels: function () {
            this.tickValues = this.ticks.slice();
            Va.prototype.convertTicksToLabels.call(this);
          },
          getLabelForIndex: function (e, t) {
            return this._getScaleLabel(this.chart.data.datasets[t].data[e]);
          },
          getPixelForTick: function (e) {
            var t = this.tickValues;
            if (e < 0 || e > t.length - 1) return null;
            return this.getPixelForValue(t[e]);
          },
          _getFirstTickValue: function (e) {
            var t = Math.floor(an(e));
            var r = Math.floor(e / Math.pow(10, t));
            return r * Math.pow(10, t);
          },
          _configure: function () {
            var e = this;
            var t = e.min;
            var r = 0;
            Va.prototype._configure.call(e);
            if (t === 0) {
              t = e._getFirstTickValue(e.minNotZero);
              r =
                rn(e.options.ticks.fontSize, he.global.defaultFontSize) /
                e._length;
            }
            e._startValue = an(t);
            e._valueOffset = r;
            e._valueRange = (an(e.max) - an(t)) / (1 - r);
          },
          getPixelForValue: function (e) {
            var t = this;
            var r = 0;
            e = +t.getRightValue(e);
            if (e > t.min && e > 0)
              r = (an(e) - t._startValue) / t._valueRange + t._valueOffset;
            return t.getPixelForDecimal(r);
          },
          getValueForPixel: function (e) {
            var t = this;
            var r = t.getDecimalForPixel(e);
            return r === 0 && t.min === 0
              ? 0
              : Math.pow(
                  10,
                  t._startValue + (r - t._valueOffset) * t._valueRange
                );
          },
        }),
        un;
      ln._defaults = on;
      var fn = Se.valueOrDefault,
        cn = Se.valueAtIndexOrDefault,
        dn = Se.options.resolve,
        hn = {
          display: true,
          animate: true,
          position: "chartArea",
          angleLines: {
            display: true,
            color: "rgba(0,0,0,0.1)",
            lineWidth: 1,
            borderDash: [],
            borderDashOffset: 0,
          },
          gridLines: { circular: false },
          ticks: {
            showLabelBackdrop: true,
            backdropColor: "rgba(255,255,255,0.75)",
            backdropPaddingY: 2,
            backdropPaddingX: 2,
            callback: xa.formatters.linear,
          },
          pointLabels: {
            display: true,
            fontSize: 10,
            callback: function (e) {
              return e;
            },
          },
        };
      function vn(e) {
        var t = e.ticks;
        if (t.display && e.display)
          return (
            fn(t.fontSize, he.global.defaultFontSize) + t.backdropPaddingY * 2
          );
        return 0;
      }
      function gn(e, t, r) {
        if (Se.isArray(r))
          return { w: Se.longestText(e, e.font, r), h: r.length * t };
        return { w: e.measureText(r).width, h: t };
      }
      function pn(e, t, r, a, n) {
        if (e === a || e === n) return { start: t - r / 2, end: t + r / 2 };
        else if (e < a || e > n) return { start: t - r, end: t };
        return { start: t, end: t + r };
      }
      function mn(e) {
        var t = Se.options._parseFont(e.options.pointLabels);
        var r = { l: 0, r: e.width, t: 0, b: e.height - e.paddingTop };
        var a = {};
        var n, i, o;
        e.ctx.font = t.string;
        e._pointLabelSizes = [];
        var s = e.chart.data.labels.length;
        for (n = 0; n < s; n++) {
          o = e.getPointPosition(n, e.drawingArea + 5);
          i = gn(e.ctx, t.lineHeight, e.pointLabels[n]);
          e._pointLabelSizes[n] = i;
          var l = e.getIndexAngle(n);
          var u = Se.toDegrees(l) % 360;
          var f = pn(u, o.x, i.w, 0, 180);
          var c = pn(u, o.y, i.h, 90, 270);
          if (f.start < r.l) {
            r.l = f.start;
            a.l = l;
          }
          if (f.end > r.r) {
            r.r = f.end;
            a.r = l;
          }
          if (c.start < r.t) {
            r.t = c.start;
            a.t = l;
          }
          if (c.end > r.b) {
            r.b = c.end;
            a.b = l;
          }
        }
        e.setReductions(e.drawingArea, r, a);
      }
      function bn(e) {
        if (e === 0 || e === 180) return "center";
        else if (e < 180) return "left";
        return "right";
      }
      function xn(e, t, r, a) {
        var n = r.y + a / 2;
        var i, o;
        if (Se.isArray(t))
          for (i = 0, o = t.length; i < o; ++i) {
            e.fillText(t[i], r.x, n);
            n += a;
          }
        else e.fillText(t, r.x, n);
      }
      function yn(e, t, r) {
        if (e === 90 || e === 270) r.y -= t.h / 2;
        else if (e > 270 || e < 90) r.y -= t.h;
      }
      function wn(e) {
        var t = e.ctx;
        var r = e.options;
        var a = r.pointLabels;
        var n = vn(r);
        var i = e.getDistanceFromCenterForValue(
          r.ticks.reverse ? e.min : e.max
        );
        var o = Se.options._parseFont(a);
        t.save();
        t.font = o.string;
        t.textBaseline = "middle";
        for (var s = e.chart.data.labels.length - 1; s >= 0; s--) {
          var l = s === 0 ? n / 2 : 0;
          var u = e.getPointPosition(s, i + l + 5);
          var f = cn(a.fontColor, s, he.global.defaultFontColor);
          t.fillStyle = f;
          var c = e.getIndexAngle(s);
          var d = Se.toDegrees(c);
          t.textAlign = bn(d);
          yn(d, e._pointLabelSizes[s], u);
          xn(t, e.pointLabels[s], u, o.lineHeight);
        }
        t.restore();
      }
      function _n(e, t, r, a) {
        var n = e.ctx;
        var i = t.circular;
        var o = e.chart.data.labels.length;
        var s = cn(t.color, a - 1);
        var l = cn(t.lineWidth, a - 1);
        var u;
        if ((!i && !o) || !s || !l) return;
        n.save();
        n.strokeStyle = s;
        n.lineWidth = l;
        if (n.setLineDash) {
          n.setLineDash(t.borderDash || []);
          n.lineDashOffset = t.borderDashOffset || 0;
        }
        n.beginPath();
        if (i) n.arc(e.xCenter, e.yCenter, r, 0, Math.PI * 2);
        else {
          u = e.getPointPosition(0, r);
          n.moveTo(u.x, u.y);
          for (var f = 1; f < o; f++) {
            u = e.getPointPosition(f, r);
            n.lineTo(u.x, u.y);
          }
        }
        n.closePath();
        n.stroke();
        n.restore();
      }
      function kn(e) {
        return Se.isNumber(e) ? e : 0;
      }
      var Mn = Ga.extend({
          setDimensions: function () {
            var e = this;
            e.width = e.maxWidth;
            e.height = e.maxHeight;
            e.paddingTop = vn(e.options) / 2;
            e.xCenter = Math.floor(e.width / 2);
            e.yCenter = Math.floor((e.height - e.paddingTop) / 2);
            e.drawingArea = Math.min(e.height - e.paddingTop, e.width) / 2;
          },
          determineDataLimits: function () {
            var n = this;
            var r = n.chart;
            var i = Number.POSITIVE_INFINITY;
            var o = Number.NEGATIVE_INFINITY;
            Se.each(r.data.datasets, function (e, t) {
              if (r.isDatasetVisible(t)) {
                var a = r.getDatasetMeta(t);
                Se.each(e.data, function (e, t) {
                  var r = +n.getRightValue(e);
                  if (isNaN(r) || a.data[t].hidden) return;
                  i = Math.min(r, i);
                  o = Math.max(r, o);
                });
              }
            });
            n.min = i === Number.POSITIVE_INFINITY ? 0 : i;
            n.max = o === Number.NEGATIVE_INFINITY ? 0 : o;
            n.handleTickRangeOptions();
          },
          _computeTickLimit: function () {
            return Math.ceil(this.drawingArea / vn(this.options));
          },
          convertTicksToLabels: function () {
            var t = this;
            Ga.prototype.convertTicksToLabels.call(t);
            t.pointLabels = t.chart.data.labels.map(function () {
              var e = Se.callback(t.options.pointLabels.callback, arguments, t);
              return e || e === 0 ? e : "";
            });
          },
          getLabelForIndex: function (e, t) {
            return +this.getRightValue(this.chart.data.datasets[t].data[e]);
          },
          fit: function () {
            var e = this;
            var t = e.options;
            if (t.display && t.pointLabels.display) mn(e);
            else e.setCenterPoint(0, 0, 0, 0);
          },
          setReductions: function (e, t, r) {
            var a = this;
            var n = t.l / Math.sin(r.l);
            var i = Math.max(t.r - a.width, 0) / Math.sin(r.r);
            var o = -t.t / Math.cos(r.t);
            var s =
              -Math.max(t.b - (a.height - a.paddingTop), 0) / Math.cos(r.b);
            n = kn(n);
            i = kn(i);
            o = kn(o);
            s = kn(s);
            a.drawingArea = Math.min(
              Math.floor(e - (n + i) / 2),
              Math.floor(e - (o + s) / 2)
            );
            a.setCenterPoint(n, i, o, s);
          },
          setCenterPoint: function (e, t, r, a) {
            var n = this;
            var i = n.width - t - n.drawingArea;
            var o = e + n.drawingArea;
            var s = r + n.drawingArea;
            var l = n.height - n.paddingTop - a - n.drawingArea;
            n.xCenter = Math.floor((o + i) / 2 + n.left);
            n.yCenter = Math.floor((s + l) / 2 + n.top + n.paddingTop);
          },
          getIndexAngle: function (e) {
            var t = this.chart;
            var r = 360 / t.data.labels.length;
            var a = t.options || {};
            var n = a.startAngle || 0;
            var i = (e * r + n) % 360;
            return ((i < 0 ? i + 360 : i) * Math.PI * 2) / 360;
          },
          getDistanceFromCenterForValue: function (e) {
            var t = this;
            if (Se.isNullOrUndef(e)) return NaN;
            var r = t.drawingArea / (t.max - t.min);
            if (t.options.ticks.reverse) return (t.max - e) * r;
            return (e - t.min) * r;
          },
          getPointPosition: function (e, t) {
            var r = this;
            var a = r.getIndexAngle(e) - Math.PI / 2;
            return {
              x: Math.cos(a) * t + r.xCenter,
              y: Math.sin(a) * t + r.yCenter,
            };
          },
          getPointPositionForValue: function (e, t) {
            return this.getPointPosition(
              e,
              this.getDistanceFromCenterForValue(t)
            );
          },
          getBasePosition: function (e) {
            var t = this;
            var r = t.min;
            var a = t.max;
            return t.getPointPositionForValue(
              e || 0,
              t.beginAtZero ? 0 : r < 0 && a < 0 ? a : r > 0 && a > 0 ? r : 0
            );
          },
          _drawGrid: function () {
            var r = this;
            var e = r.ctx;
            var t = r.options;
            var a = t.gridLines;
            var n = t.angleLines;
            var i = fn(n.lineWidth, a.lineWidth);
            var o = fn(n.color, a.color);
            var s, l, u;
            if (t.pointLabels.display) wn(r);
            if (a.display)
              Se.each(r.ticks, function (e, t) {
                if (t !== 0) {
                  l = r.getDistanceFromCenterForValue(r.ticksAsNumbers[t]);
                  _n(r, a, l, t);
                }
              });
            if (n.display && i && o) {
              e.save();
              e.lineWidth = i;
              e.strokeStyle = o;
              if (e.setLineDash) {
                e.setLineDash(dn([n.borderDash, a.borderDash, []]));
                e.lineDashOffset = dn([
                  n.borderDashOffset,
                  a.borderDashOffset,
                  0,
                ]);
              }
              for (s = r.chart.data.labels.length - 1; s >= 0; s--) {
                l = r.getDistanceFromCenterForValue(
                  t.ticks.reverse ? r.min : r.max
                );
                u = r.getPointPosition(s, l);
                e.beginPath();
                e.moveTo(r.xCenter, r.yCenter);
                e.lineTo(u.x, u.y);
                e.stroke();
              }
              e.restore();
            }
          },
          _drawLabels: function () {
            var r = this;
            var a = r.ctx;
            var e = r.options;
            var n = e.ticks;
            if (!n.display) return;
            var t = r.getIndexAngle(0);
            var i = Se.options._parseFont(n);
            var o = fn(n.fontColor, he.global.defaultFontColor);
            var s, l;
            a.save();
            a.font = i.string;
            a.translate(r.xCenter, r.yCenter);
            a.rotate(t);
            a.textAlign = "center";
            a.textBaseline = "middle";
            Se.each(r.ticks, function (e, t) {
              if (t === 0 && !n.reverse) return;
              s = r.getDistanceFromCenterForValue(r.ticksAsNumbers[t]);
              if (n.showLabelBackdrop) {
                l = a.measureText(e).width;
                a.fillStyle = n.backdropColor;
                a.fillRect(
                  -l / 2 - n.backdropPaddingX,
                  -s - i.size / 2 - n.backdropPaddingY,
                  l + n.backdropPaddingX * 2,
                  i.size + n.backdropPaddingY * 2
                );
              }
              a.fillStyle = o;
              a.fillText(e, 0, -s);
            });
            a.restore();
          },
          _drawTitle: Se.noop,
        }),
        Sn;
      Mn._defaults = hn;
      var Cn = Se._deprecated,
        Pn = Se.options.resolve,
        An = Se.valueOrDefault,
        Dn = Number.MIN_SAFE_INTEGER || -9007199254740991,
        Tn = Number.MAX_SAFE_INTEGER || 9007199254740991,
        In = {
          millisecond: { common: true, size: 1, steps: 1e3 },
          second: { common: true, size: 1e3, steps: 60 },
          minute: { common: true, size: 6e4, steps: 60 },
          hour: { common: true, size: 36e5, steps: 24 },
          day: { common: true, size: 864e5, steps: 30 },
          week: { common: false, size: 6048e5, steps: 4 },
          month: { common: true, size: 2628e6, steps: 12 },
          quarter: { common: false, size: 7884e6, steps: 4 },
          year: { common: true, size: 3154e7 },
        },
        Fn = Object.keys(In);
      function On(e, t) {
        return e - t;
      }
      function Ln(e) {
        var t = {};
        var r = [];
        var a, n, i;
        for (a = 0, n = e.length; a < n; ++a) {
          i = e[a];
          if (!t[i]) {
            t[i] = true;
            r.push(i);
          }
        }
        return r;
      }
      function En(e) {
        return Se.valueOrDefault(e.time.min, e.ticks.min);
      }
      function Nn(e) {
        return Se.valueOrDefault(e.time.max, e.ticks.max);
      }
      function Rn(e, t, r, a) {
        if (a === "linear" || !e.length)
          return [
            { time: t, pos: 0 },
            { time: r, pos: 1 },
          ];
        var n = [];
        var i = [t];
        var o, s, l, u, f;
        for (o = 0, s = e.length; o < s; ++o) {
          u = e[o];
          if (u > t && u < r) i.push(u);
        }
        i.push(r);
        for (o = 0, s = i.length; o < s; ++o) {
          f = i[o + 1];
          l = i[o - 1];
          u = i[o];
          if (
            l === undefined ||
            f === undefined ||
            Math.round((f + l) / 2) !== u
          )
            n.push({ time: u, pos: o / (s - 1) });
        }
        return n;
      }
      function zn(e, t, r) {
        var a = 0;
        var n = e.length - 1;
        var i, o, s;
        while (a >= 0 && a <= n) {
          i = (a + n) >> 1;
          o = e[i - 1] || null;
          s = e[i];
          if (!o) return { lo: null, hi: s };
          else if (s[t] < r) a = i + 1;
          else if (o[t] > r) n = i - 1;
          else return { lo: o, hi: s };
        }
        return { lo: s, hi: null };
      }
      function Vn(e, t, r, a) {
        var n = zn(e, t, r);
        var i = !n.lo ? e[0] : !n.hi ? e[e.length - 2] : n.lo;
        var o = !n.lo ? e[1] : !n.hi ? e[e.length - 1] : n.hi;
        var s = o[t] - i[t];
        var l = s ? (r - i[t]) / s : 0;
        var u = (o[a] - i[a]) * l;
        return i[a] + u;
      }
      function Bn(e, t) {
        var r = e._adapter;
        var a = e.options.time;
        var n = a.parser;
        var i = n || a.format;
        var o = t;
        if (typeof n === "function") o = n(o);
        if (!Se.isFinite(o))
          o = typeof i === "string" ? r.parse(o, i) : r.parse(o);
        if (o !== null) return +o;
        if (!n && typeof i === "function") {
          o = i(t);
          if (!Se.isFinite(o)) o = r.parse(o);
        }
        return o;
      }
      function Wn(e, t) {
        if (Se.isNullOrUndef(t)) return null;
        var r = e.options.time;
        var a = Bn(e, e.getRightValue(t));
        if (a === null) return a;
        if (r.round) a = +e._adapter.startOf(a, r.round);
        return a;
      }
      function Hn(e, t, r, a) {
        var n = Fn.length;
        var i, o, s;
        for (i = Fn.indexOf(e); i < n - 1; ++i) {
          o = In[Fn[i]];
          s = o.steps ? o.steps : Tn;
          if (o.common && Math.ceil((r - t) / (s * o.size)) <= a) return Fn[i];
        }
        return Fn[n - 1];
      }
      function jn(e, t, r, a, n) {
        var i, o;
        for (i = Fn.length - 1; i >= Fn.indexOf(r); i--) {
          o = Fn[i];
          if (In[o].common && e._adapter.diff(n, a, o) >= t - 1) return o;
        }
        return Fn[r ? Fn.indexOf(r) : 0];
      }
      function Un(e) {
        for (var t = Fn.indexOf(e) + 1, r = Fn.length; t < r; ++t)
          if (In[Fn[t]].common) return Fn[t];
      }
      function qn(e, t, r, a) {
        var n = e._adapter;
        var i = e.options;
        var o = i.time;
        var s = o.unit || Hn(o.minUnit, t, r, a);
        var l = Pn([o.stepSize, o.unitStepSize, 1]);
        var u = s === "week" ? o.isoWeekday : false;
        var f = t;
        var c = [];
        var d;
        if (u) f = +n.startOf(f, "isoWeek", u);
        f = +n.startOf(f, u ? "day" : s);
        if (n.diff(r, t, s) > 1e5 * l)
          throw (
            t +
            " and " +
            r +
            " are too far apart with stepSize of " +
            l +
            " " +
            s
          );
        for (d = f; d < r; d = +n.add(d, l, s)) c.push(d);
        if (d === r || i.bounds === "ticks") c.push(d);
        return c;
      }
      function Yn(e, t, r, a, n) {
        var i = 0;
        var o = 0;
        var s, l;
        if (n.offset && t.length) {
          s = Vn(e, "time", t[0], "pos");
          if (t.length === 1) i = 1 - s;
          else i = (Vn(e, "time", t[1], "pos") - s) / 2;
          l = Vn(e, "time", t[t.length - 1], "pos");
          if (t.length === 1) o = l;
          else o = (l - Vn(e, "time", t[t.length - 2], "pos")) / 2;
        }
        return { start: i, end: o, factor: 1 / (i + 1 + o) };
      }
      function Gn(e, t, r, a) {
        var n = e._adapter;
        var i = +n.startOf(t[0].value, a);
        var o = t[t.length - 1].value;
        var s, l;
        for (s = i; s <= o; s = +n.add(s, 1, a)) {
          l = r[s];
          if (l >= 0) t[l].major = true;
        }
        return t;
      }
      function Xn(e, t, r) {
        var a = [];
        var n = {};
        var i = t.length;
        var o, s;
        for (o = 0; o < i; ++o) {
          s = t[o];
          n[s] = o;
          a.push({ value: s, major: false });
        }
        return i === 0 || !r ? a : Gn(e, a, n, r);
      }
      var Kn = {
          position: "bottom",
          distribution: "linear",
          bounds: "data",
          adapters: {},
          time: {
            parser: false,
            unit: false,
            round: false,
            displayFormat: false,
            isoWeekday: false,
            minUnit: "millisecond",
            displayFormats: {},
          },
          ticks: { autoSkip: false, source: "auto", major: { enabled: false } },
        },
        $n = Va.extend({
          initialize: function () {
            this.mergeTicksOptions();
            Va.prototype.initialize.call(this);
          },
          update: function () {
            var e = this;
            var t = e.options;
            var r = t.time || (t.time = {});
            var a = (e._adapter = new ba._date(t.adapters.date));
            Cn("time scale", r.format, "time.format", "time.parser");
            Cn("time scale", r.min, "time.min", "ticks.min");
            Cn("time scale", r.max, "time.max", "ticks.max");
            Se.mergeIf(r.displayFormats, a.formats());
            return Va.prototype.update.apply(e, arguments);
          },
          getRightValue: function (e) {
            if (e && e.t !== undefined) e = e.t;
            return Va.prototype.getRightValue.call(this, e);
          },
          determineDataLimits: function () {
            var e = this;
            var t = e.chart;
            var r = e._adapter;
            var a = e.options;
            var n = a.time.unit || "day";
            var i = Tn;
            var o = Dn;
            var s = [];
            var l = [];
            var u = [];
            var f, c, d, h, v, g, p;
            var m = e._getLabels();
            for (f = 0, d = m.length; f < d; ++f) u.push(Wn(e, m[f]));
            for (f = 0, d = (t.data.datasets || []).length; f < d; ++f)
              if (t.isDatasetVisible(f)) {
                v = t.data.datasets[f].data;
                if (Se.isObject(v[0])) {
                  l[f] = [];
                  for (c = 0, h = v.length; c < h; ++c) {
                    g = Wn(e, v[c]);
                    s.push(g);
                    l[f][c] = g;
                  }
                } else {
                  l[f] = u.slice(0);
                  if (!p) {
                    s = s.concat(u);
                    p = true;
                  }
                }
              } else l[f] = [];
            if (u.length) {
              i = Math.min(i, u[0]);
              o = Math.max(o, u[u.length - 1]);
            }
            if (s.length) {
              s = d > 1 ? Ln(s).sort(On) : s.sort(On);
              i = Math.min(i, s[0]);
              o = Math.max(o, s[s.length - 1]);
            }
            i = Wn(e, En(a)) || i;
            o = Wn(e, Nn(a)) || o;
            i = i === Tn ? +r.startOf(Date.now(), n) : i;
            o = o === Dn ? +r.endOf(Date.now(), n) + 1 : o;
            e.min = Math.min(i, o);
            e.max = Math.max(i + 1, o);
            e._table = [];
            e._timestamps = { data: s, datasets: l, labels: u };
          },
          buildTicks: function () {
            var e = this;
            var t = e.min;
            var r = e.max;
            var a = e.options;
            var n = a.ticks;
            var i = a.time;
            var o = e._timestamps;
            var s = [];
            var l = e.getLabelCapacity(t);
            var u = n.source;
            var f = a.distribution;
            var c, d, h;
            if (u === "data" || (u === "auto" && f === "series")) o = o.data;
            else if (u === "labels") o = o.labels;
            else o = qn(e, t, r, l);
            if (a.bounds === "ticks" && o.length) {
              t = o[0];
              r = o[o.length - 1];
            }
            t = Wn(e, En(a)) || t;
            r = Wn(e, Nn(a)) || r;
            for (c = 0, d = o.length; c < d; ++c) {
              h = o[c];
              if (h >= t && h <= r) s.push(h);
            }
            e.min = t;
            e.max = r;
            e._unit =
              i.unit ||
              (n.autoSkip
                ? Hn(i.minUnit, e.min, e.max, l)
                : jn(e, s.length, i.minUnit, e.min, e.max));
            e._majorUnit =
              !n.major.enabled || e._unit === "year" ? undefined : Un(e._unit);
            e._table = Rn(e._timestamps.data, t, r, f);
            e._offsets = Yn(e._table, s, t, r, a);
            if (n.reverse) s.reverse();
            return Xn(e, s, e._majorUnit);
          },
          getLabelForIndex: function (e, t) {
            var r = this;
            var a = r._adapter;
            var n = r.chart.data;
            var i = r.options.time;
            var o = n.labels && e < n.labels.length ? n.labels[e] : "";
            var s = n.datasets[t].data[e];
            if (Se.isObject(s)) o = r.getRightValue(s);
            if (i.tooltipFormat) return a.format(Bn(r, o), i.tooltipFormat);
            if (typeof o === "string") return o;
            return a.format(Bn(r, o), i.displayFormats.datetime);
          },
          tickFormatFunction: function (e, t, r, a) {
            var n = this;
            var i = n._adapter;
            var o = n.options;
            var s = o.time.displayFormats;
            var l = s[n._unit];
            var u = n._majorUnit;
            var f = s[u];
            var c = r[t];
            var d = o.ticks;
            var h = u && f && c && c.major;
            var v = i.format(e, a ? a : h ? f : l);
            var g = h ? d.major : d.minor;
            var p = Pn([
              g.callback,
              g.userCallback,
              d.callback,
              d.userCallback,
            ]);
            return p ? p(v, t, r) : v;
          },
          convertTicksToLabels: function (e) {
            var t = [];
            var r, a;
            for (r = 0, a = e.length; r < a; ++r)
              t.push(this.tickFormatFunction(e[r].value, r, e));
            return t;
          },
          getPixelForOffset: function (e) {
            var t = this;
            var r = t._offsets;
            var a = Vn(t._table, "time", e, "pos");
            return t.getPixelForDecimal((r.start + a) * r.factor);
          },
          getPixelForValue: function (e, t, r) {
            var a = this;
            var n = null;
            if (t !== undefined && r !== undefined)
              n = a._timestamps.datasets[r][t];
            if (n === null) n = Wn(a, e);
            if (n !== null) return a.getPixelForOffset(n);
          },
          getPixelForTick: function (e) {
            var t = this.getTicks();
            return e >= 0 && e < t.length
              ? this.getPixelForOffset(t[e].value)
              : null;
          },
          getValueForPixel: function (e) {
            var t = this;
            var r = t._offsets;
            var a = t.getDecimalForPixel(e) / r.factor - r.end;
            var n = Vn(t._table, "pos", a, "time");
            return t._adapter._create(n);
          },
          _getLabelSize: function (e) {
            var t = this;
            var r = t.options.ticks;
            var a = t.ctx.measureText(e).width;
            var n = Se.toRadians(
              t.isHorizontal() ? r.maxRotation : r.minRotation
            );
            var i = Math.cos(n);
            var o = Math.sin(n);
            var s = An(r.fontSize, he.global.defaultFontSize);
            return { w: a * i + s * o, h: a * o + s * i };
          },
          getLabelWidth: function (e) {
            return this._getLabelSize(e).w;
          },
          getLabelCapacity: function (e) {
            var t = this;
            var r = t.options.time;
            var a = r.displayFormats;
            var n = a[r.unit] || a.millisecond;
            var i = t.tickFormatFunction(e, 0, Xn(t, [e], t._majorUnit), n);
            var o = t._getLabelSize(i);
            var s = Math.floor(
              t.isHorizontal() ? t.width / o.w : t.height / o.h
            );
            if (t.options.offset) s--;
            return s > 0 ? s : 1;
          },
        }),
        Zn;
      $n._defaults = Kn;
      var Jn = {
          category: Ha,
          linear: en,
          logarithmic: ln,
          radialLinear: Mn,
          time: $n,
        },
        Qn = {
          datetime: "MMM D, YYYY, h:mm:ss a",
          millisecond: "h:mm:ss.SSS a",
          second: "h:mm:ss a",
          minute: "h:mm a",
          hour: "hA",
          day: "MMM D",
          week: "ll",
          month: "MMM YYYY",
          quarter: "[Q]Q - YYYY",
          year: "YYYY",
        };
      ba._date.override(
        typeof a === "function"
          ? {
              _id: "moment",
              formats: function () {
                return Qn;
              },
              parse: function (e, t) {
                if (typeof e === "string" && typeof t === "string") e = a(e, t);
                else if (!(e instanceof a)) e = a(e);
                return e.isValid() ? e.valueOf() : null;
              },
              format: function (e, t) {
                return a(e).format(t);
              },
              add: function (e, t, r) {
                return a(e).add(t, r).valueOf();
              },
              diff: function (e, t, r) {
                return a(e).diff(a(t), r);
              },
              startOf: function (e, t, r) {
                e = a(e);
                if (t === "isoWeek") return e.isoWeekday(r).valueOf();
                return e.startOf(t).valueOf();
              },
              endOf: function (e, t) {
                return a(e).endOf(t).valueOf();
              },
              _create: function (e) {
                return a(e);
              },
            }
          : {}
      ),
        he._set("global", { plugins: { filler: { propagate: true } } });
      var ei = {
        dataset: function (e) {
          var t = e.fill;
          var r = e.chart;
          var a = r.getDatasetMeta(t);
          var n = a && r.isDatasetVisible(t);
          var i = (n && a.dataset._children) || [];
          var o = i.length || 0;
          return !o
            ? null
            : function (e, t) {
                return (t < o && i[t]._view) || null;
              };
        },
        boundary: function (e) {
          var r = e.boundary;
          var t = r ? r.x : null;
          var a = r ? r.y : null;
          if (Se.isArray(r))
            return function (e, t) {
              return r[t];
            };
          return function (e) {
            return { x: t === null ? e.x : t, y: a === null ? e.y : a };
          };
        },
      };
      function ti(e, t, r) {
        var a = e._model || {};
        var n = a.fill;
        var i;
        if (n === undefined) n = !!a.backgroundColor;
        if (n === false || n === null) return false;
        if (n === true) return "origin";
        i = parseFloat(n, 10);
        if (isFinite(i) && Math.floor(i) === i) {
          if (n[0] === "-" || n[0] === "+") i = t + i;
          if (i === t || i < 0 || i >= r) return false;
          return i;
        }
        switch (n) {
          case "bottom":
            return "start";
          case "top":
            return "end";
          case "zero":
            return "origin";
          case "origin":
          case "start":
          case "end":
            return n;
          default:
            return false;
        }
      }
      function ri(e) {
        var t = e.el._model || {};
        var r = e.el._scale || {};
        var a = e.fill;
        var n = null;
        var i;
        if (isFinite(a)) return null;
        if (a === "start")
          n = t.scaleBottom === undefined ? r.bottom : t.scaleBottom;
        else if (a === "end") n = t.scaleTop === undefined ? r.top : t.scaleTop;
        else if (t.scaleZero !== undefined) n = t.scaleZero;
        else if (r.getBasePixel) n = r.getBasePixel();
        if (n !== undefined && n !== null) {
          if (n.x !== undefined && n.y !== undefined) return n;
          if (Se.isFinite(n)) {
            i = r.isHorizontal();
            return { x: i ? n : null, y: i ? null : n };
          }
        }
        return null;
      }
      function ai(e) {
        var t = e.el._scale;
        var r = t.options;
        var a = t.chart.data.labels.length;
        var n = e.fill;
        var i = [];
        var o, s, l, u, f;
        if (!a) return null;
        o = r.ticks.reverse ? t.max : t.min;
        s = r.ticks.reverse ? t.min : t.max;
        l = t.getPointPositionForValue(0, o);
        for (u = 0; u < a; ++u) {
          f =
            n === "start" || n === "end"
              ? t.getPointPositionForValue(u, n === "start" ? o : s)
              : t.getBasePosition(u);
          if (r.gridLines.circular) {
            f.cx = l.x;
            f.cy = l.y;
            f.angle = t.getIndexAngle(u) - Math.PI / 2;
          }
          i.push(f);
        }
        return i;
      }
      function ni(e) {
        var t = e.el._scale || {};
        if (t.getPointPositionForValue) return ai(e);
        return ri(e);
      }
      function ii(e, t, r) {
        var a = e[t];
        var n = a.fill;
        var i = [t];
        var o;
        if (!r) return n;
        while (n !== false && i.indexOf(n) === -1) {
          if (!isFinite(n)) return n;
          o = e[n];
          if (!o) return false;
          if (o.visible) return n;
          i.push(n);
          n = o.fill;
        }
        return false;
      }
      function oi(e) {
        var t = e.fill;
        var r = "dataset";
        if (t === false) return null;
        if (!isFinite(t)) r = "boundary";
        return ei[r](e);
      }
      function si(e) {
        return e && !e.skip;
      }
      function li(e, t, r, a, n) {
        var i, o, s, l;
        if (!a || !n) return;
        e.moveTo(t[0].x, t[0].y);
        for (i = 1; i < a; ++i) Se.canvas.lineTo(e, t[i - 1], t[i]);
        if (r[0].angle !== undefined) {
          o = r[0].cx;
          s = r[0].cy;
          l = Math.sqrt(Math.pow(r[0].x - o, 2) + Math.pow(r[0].y - s, 2));
          for (i = n - 1; i > 0; --i)
            e.arc(o, s, l, r[i].angle, r[i - 1].angle, true);
          return;
        }
        e.lineTo(r[n - 1].x, r[n - 1].y);
        for (i = n - 1; i > 0; --i) Se.canvas.lineTo(e, r[i], r[i - 1], true);
      }
      function ui(e, t, r, a, n, i) {
        var o = t.length;
        var s = a.spanGaps;
        var l = [];
        var u = [];
        var f = 0;
        var c = 0;
        var d, h, v, g, p, m, b, x;
        e.beginPath();
        for (d = 0, h = o; d < h; ++d) {
          v = d % o;
          g = t[v]._view;
          p = r(g, v, a);
          m = si(g);
          b = si(p);
          if (i && x === undefined && m) {
            x = d + 1;
            h = o + x;
          }
          if (m && b) {
            f = l.push(g);
            c = u.push(p);
          } else if (f && c)
            if (!s) {
              li(e, l, u, f, c);
              f = c = 0;
              l = [];
              u = [];
            } else {
              if (m) l.push(g);
              if (b) u.push(p);
            }
        }
        li(e, l, u, f, c);
        e.closePath();
        e.fillStyle = n;
        e.fill();
      }
      var fi = {
          id: "filler",
          afterDatasetsUpdate: function (e, t) {
            var r = (e.data.datasets || []).length;
            var a = t.propagate;
            var n = [];
            var i, o, s, l;
            for (o = 0; o < r; ++o) {
              i = e.getDatasetMeta(o);
              s = i.dataset;
              l = null;
              if (s && s._model && s instanceof ct.Line)
                l = {
                  visible: e.isDatasetVisible(o),
                  fill: ti(s, o, r),
                  chart: e,
                  el: s,
                };
              i.$filler = l;
              n.push(l);
            }
            for (o = 0; o < r; ++o) {
              l = n[o];
              if (!l) continue;
              l.fill = ii(n, o, a);
              l.boundary = ni(l);
              l.mapper = oi(l);
            }
          },
          beforeDatasetsDraw: function (e) {
            var t = e._getSortedVisibleDatasetMetas();
            var r = e.ctx;
            var a, n, i, o, s, l, u;
            for (n = t.length - 1; n >= 0; --n) {
              a = t[n].$filler;
              if (!a || !a.visible) continue;
              i = a.el;
              o = i._view;
              s = i._children || [];
              l = a.mapper;
              u = o.backgroundColor || he.global.defaultColor;
              if (l && u && s.length) {
                Se.canvas.clipArea(r, e.chartArea);
                ui(r, s, l, o, u, i._loop);
                Se.canvas.unclipArea(r);
              }
            }
          },
        },
        ci = Se.rtl.getRtlAdapter,
        di = Se.noop,
        hi = Se.valueOrDefault;
      function vi(e, t) {
        return e.usePointStyle && e.boxWidth > t ? t : e.boxWidth;
      }
      he._set("global", {
        legend: {
          display: true,
          position: "top",
          align: "center",
          fullWidth: true,
          reverse: false,
          weight: 1e3,
          onClick: function (e, t) {
            var r = t.datasetIndex;
            var a = this.chart;
            var n = a.getDatasetMeta(r);
            n.hidden = n.hidden === null ? !a.data.datasets[r].hidden : null;
            a.update();
          },
          onHover: null,
          onLeave: null,
          labels: {
            boxWidth: 40,
            padding: 10,
            generateLabels: function (r) {
              var a = r.data.datasets;
              var e = r.options.legend || {};
              var n = e.labels && e.labels.usePointStyle;
              return r._getSortedDatasetMetas().map(function (e) {
                var t = e.controller.getStyle(n ? 0 : undefined);
                return {
                  text: a[e.index].label,
                  fillStyle: t.backgroundColor,
                  hidden: !r.isDatasetVisible(e.index),
                  lineCap: t.borderCapStyle,
                  lineDash: t.borderDash,
                  lineDashOffset: t.borderDashOffset,
                  lineJoin: t.borderJoinStyle,
                  lineWidth: t.borderWidth,
                  strokeStyle: t.borderColor,
                  pointStyle: t.pointStyle,
                  rotation: t.rotation,
                  datasetIndex: e.index,
                };
              }, this);
            },
          },
        },
        legendCallback: function (e) {
          var t = document.createElement("ul");
          var r = e.data.datasets;
          var a, n, i, o;
          t.setAttribute("class", e.id + "-legend");
          for (a = 0, n = r.length; a < n; a++) {
            i = t.appendChild(document.createElement("li"));
            o = i.appendChild(document.createElement("span"));
            o.style.backgroundColor = r[a].backgroundColor;
            if (r[a].label) i.appendChild(document.createTextNode(r[a].label));
          }
          return t.outerHTML;
        },
      });
      var gi = Oe.extend({
        initialize: function (e) {
          var t = this;
          Se.extend(t, e);
          t.legendHitBoxes = [];
          t._hoveredItem = null;
          t.doughnutMode = false;
        },
        beforeUpdate: di,
        update: function (e, t, r) {
          var a = this;
          a.beforeUpdate();
          a.maxWidth = e;
          a.maxHeight = t;
          a.margins = r;
          a.beforeSetDimensions();
          a.setDimensions();
          a.afterSetDimensions();
          a.beforeBuildLabels();
          a.buildLabels();
          a.afterBuildLabels();
          a.beforeFit();
          a.fit();
          a.afterFit();
          a.afterUpdate();
          return a.minSize;
        },
        afterUpdate: di,
        beforeSetDimensions: di,
        setDimensions: function () {
          var e = this;
          if (e.isHorizontal()) {
            e.width = e.maxWidth;
            e.left = 0;
            e.right = e.width;
          } else {
            e.height = e.maxHeight;
            e.top = 0;
            e.bottom = e.height;
          }
          e.paddingLeft = 0;
          e.paddingTop = 0;
          e.paddingRight = 0;
          e.paddingBottom = 0;
          e.minSize = { width: 0, height: 0 };
        },
        afterSetDimensions: di,
        beforeBuildLabels: di,
        buildLabels: function () {
          var t = this;
          var r = t.options.labels || {};
          var e = Se.callback(r.generateLabels, [t.chart], t) || [];
          if (r.filter)
            e = e.filter(function (e) {
              return r.filter(e, t.chart.data);
            });
          if (t.options.reverse) e.reverse();
          t.legendItems = e;
        },
        afterBuildLabels: di,
        beforeFit: di,
        fit: function () {
          var e = this;
          var t = e.options;
          var n = t.labels;
          var r = t.display;
          var i = e.ctx;
          var a = Se.options._parseFont(n);
          var o = a.size;
          var s = (e.legendHitBoxes = []);
          var l = e.minSize;
          var u = e.isHorizontal();
          if (u) {
            l.width = e.maxWidth;
            l.height = r ? 10 : 0;
          } else {
            l.width = r ? 10 : 0;
            l.height = e.maxHeight;
          }
          if (!r) {
            e.width = l.width = e.height = l.height = 0;
            return;
          }
          i.font = a.string;
          if (u) {
            var f = (e.lineWidths = [0]);
            var c = 0;
            i.textAlign = "left";
            i.textBaseline = "middle";
            Se.each(e.legendItems, function (e, t) {
              var r = vi(n, o);
              var a = r + o / 2 + i.measureText(e.text).width;
              if (t === 0 || f[f.length - 1] + a + 2 * n.padding > l.width) {
                c += o + n.padding;
                f[f.length - (t > 0 ? 0 : 1)] = 0;
              }
              s[t] = { left: 0, top: 0, width: a, height: o };
              f[f.length - 1] += a + n.padding;
            });
            l.height += c;
          } else {
            var d = n.padding;
            var h = (e.columnWidths = []);
            var v = (e.columnHeights = []);
            var g = n.padding;
            var p = 0;
            var m = 0;
            Se.each(e.legendItems, function (e, t) {
              var r = vi(n, o);
              var a = r + o / 2 + i.measureText(e.text).width;
              if (t > 0 && m + o + 2 * d > l.height) {
                g += p + n.padding;
                h.push(p);
                v.push(m);
                p = 0;
                m = 0;
              }
              p = Math.max(p, a);
              m += o + d;
              s[t] = { left: 0, top: 0, width: a, height: o };
            });
            g += p;
            h.push(p);
            v.push(m);
            l.width += g;
          }
          e.width = l.width;
          e.height = l.height;
        },
        afterFit: di,
        isHorizontal: function () {
          return (
            this.options.position === "top" ||
            this.options.position === "bottom"
          );
        },
        draw: function () {
          var s = this;
          var r = s.options;
          var l = r.labels;
          var e = he.global;
          var u = e.defaultColor;
          var f = e.elements.line;
          var c = s.height;
          var d = s.columnHeights;
          var h = s.width;
          var v = s.lineWidths;
          if (!r.display) return;
          var g = ci(r.rtl, s.left, s.minSize.width);
          var p = s.ctx;
          var t = hi(l.fontColor, e.defaultFontColor);
          var a = Se.options._parseFont(l);
          var m = a.size;
          var b;
          p.textAlign = g.textAlign("left");
          p.textBaseline = "middle";
          p.lineWidth = 0.5;
          p.strokeStyle = t;
          p.fillStyle = t;
          p.font = a.string;
          var x = vi(l, m);
          var y = s.legendHitBoxes;
          var w = function (e, t, r) {
            if (isNaN(x) || x <= 0) return;
            p.save();
            var a = hi(r.lineWidth, f.borderWidth);
            p.fillStyle = hi(r.fillStyle, u);
            p.lineCap = hi(r.lineCap, f.borderCapStyle);
            p.lineDashOffset = hi(r.lineDashOffset, f.borderDashOffset);
            p.lineJoin = hi(r.lineJoin, f.borderJoinStyle);
            p.lineWidth = a;
            p.strokeStyle = hi(r.strokeStyle, u);
            if (p.setLineDash) p.setLineDash(hi(r.lineDash, f.borderDash));
            if (l && l.usePointStyle) {
              var n = (x * Math.SQRT2) / 2;
              var i = g.xPlus(e, x / 2);
              var o = t + m / 2;
              Se.canvas.drawPoint(p, r.pointStyle, n, i, o, r.rotation);
            } else {
              p.fillRect(g.leftForLtr(e, x), t, x, m);
              if (a !== 0) p.strokeRect(g.leftForLtr(e, x), t, x, m);
            }
            p.restore();
          };
          var _ = function (e, t, r, a) {
            var n = m / 2;
            var i = g.xPlus(e, x + n);
            var o = t + n;
            p.fillText(r.text, i, o);
            if (r.hidden) {
              p.beginPath();
              p.lineWidth = 2;
              p.moveTo(i, o);
              p.lineTo(g.xPlus(i, a), o);
              p.stroke();
            }
          };
          var k = function (e, t) {
            switch (r.align) {
              case "start":
                return l.padding;
              case "end":
                return e - t;
              default:
                return (e - t + l.padding) / 2;
            }
          };
          var M = s.isHorizontal();
          if (M) b = { x: s.left + k(h, v[0]), y: s.top + l.padding, line: 0 };
          else b = { x: s.left + l.padding, y: s.top + k(c, d[0]), line: 0 };
          Se.rtl.overrideTextDirection(s.ctx, r.textDirection);
          var S = m + l.padding;
          Se.each(s.legendItems, function (e, t) {
            var r = p.measureText(e.text).width;
            var a = x + m / 2 + r;
            var n = b.x;
            var i = b.y;
            g.setWidth(s.minSize.width);
            if (M) {
              if (t > 0 && n + a + l.padding > s.left + s.minSize.width) {
                i = b.y += S;
                b.line++;
                n = b.x = s.left + k(h, v[b.line]);
              }
            } else if (t > 0 && i + S > s.top + s.minSize.height) {
              n = b.x = n + s.columnWidths[b.line] + l.padding;
              b.line++;
              i = b.y = s.top + k(c, d[b.line]);
            }
            var o = g.x(n);
            w(o, i, e);
            y[t].left = g.leftForLtr(o, y[t].width);
            y[t].top = i;
            _(o, i, e, r);
            if (M) b.x += a + l.padding;
            else b.y += S;
          });
          Se.rtl.restoreTextDirection(s.ctx, r.textDirection);
        },
        _getLegendItemAt: function (e, t) {
          var r = this;
          var a, n, i;
          if (e >= r.left && e <= r.right && t >= r.top && t <= r.bottom) {
            i = r.legendHitBoxes;
            for (a = 0; a < i.length; ++a) {
              n = i[a];
              if (
                e >= n.left &&
                e <= n.left + n.width &&
                t >= n.top &&
                t <= n.top + n.height
              )
                return r.legendItems[a];
            }
          }
          return null;
        },
        handleEvent: function (e) {
          var t = this;
          var r = t.options;
          var a = e.type === "mouseup" ? "click" : e.type;
          var n;
          if (a === "mousemove") {
            if (!r.onHover && !r.onLeave) return;
          } else if (a === "click") {
            if (!r.onClick) return;
          } else return;
          n = t._getLegendItemAt(e.x, e.y);
          if (a === "click") {
            if (n && r.onClick) r.onClick.call(t, e.native, n);
          } else {
            if (r.onLeave && n !== t._hoveredItem) {
              if (t._hoveredItem) r.onLeave.call(t, e.native, t._hoveredItem);
              t._hoveredItem = n;
            }
            if (r.onHover && n) r.onHover.call(t, e.native, n);
          }
        },
      });
      function pi(e, t) {
        var r = new gi({ ctx: e.ctx, options: t, chart: e });
        fr.configure(e, r, t);
        fr.addBox(e, r);
        e.legend = r;
      }
      var mi = {
          id: "legend",
          _element: gi,
          beforeInit: function (e) {
            var t = e.options.legend;
            if (t) pi(e, t);
          },
          beforeUpdate: function (e) {
            var t = e.options.legend;
            var r = e.legend;
            if (t) {
              Se.mergeIf(t, he.global.legend);
              if (r) {
                fr.configure(e, r, t);
                r.options = t;
              } else pi(e, t);
            } else if (r) {
              fr.removeBox(e, r);
              delete e.legend;
            }
          },
          afterEvent: function (e, t) {
            var r = e.legend;
            if (r) r.handleEvent(t);
          },
        },
        bi = Se.noop;
      he._set("global", {
        title: {
          display: false,
          fontStyle: "bold",
          fullWidth: true,
          padding: 10,
          position: "top",
          text: "",
          weight: 2e3,
        },
      });
      var xi = Oe.extend({
        initialize: function (e) {
          var t = this;
          Se.extend(t, e);
          t.legendHitBoxes = [];
        },
        beforeUpdate: bi,
        update: function (e, t, r) {
          var a = this;
          a.beforeUpdate();
          a.maxWidth = e;
          a.maxHeight = t;
          a.margins = r;
          a.beforeSetDimensions();
          a.setDimensions();
          a.afterSetDimensions();
          a.beforeBuildLabels();
          a.buildLabels();
          a.afterBuildLabels();
          a.beforeFit();
          a.fit();
          a.afterFit();
          a.afterUpdate();
          return a.minSize;
        },
        afterUpdate: bi,
        beforeSetDimensions: bi,
        setDimensions: function () {
          var e = this;
          if (e.isHorizontal()) {
            e.width = e.maxWidth;
            e.left = 0;
            e.right = e.width;
          } else {
            e.height = e.maxHeight;
            e.top = 0;
            e.bottom = e.height;
          }
          e.paddingLeft = 0;
          e.paddingTop = 0;
          e.paddingRight = 0;
          e.paddingBottom = 0;
          e.minSize = { width: 0, height: 0 };
        },
        afterSetDimensions: bi,
        beforeBuildLabels: bi,
        buildLabels: bi,
        afterBuildLabels: bi,
        beforeFit: bi,
        fit: function () {
          var e = this;
          var t = e.options;
          var r = (e.minSize = {});
          var a = e.isHorizontal();
          var n, i;
          if (!t.display) {
            e.width = r.width = e.height = r.height = 0;
            return;
          }
          n = Se.isArray(t.text) ? t.text.length : 1;
          i = n * Se.options._parseFont(t).lineHeight + t.padding * 2;
          e.width = r.width = a ? e.maxWidth : i;
          e.height = r.height = a ? i : e.maxHeight;
        },
        afterFit: bi,
        isHorizontal: function () {
          var e = this.options.position;
          return e === "top" || e === "bottom";
        },
        draw: function () {
          var e = this;
          var t = e.ctx;
          var r = e.options;
          if (!r.display) return;
          var a = Se.options._parseFont(r);
          var n = a.lineHeight;
          var i = n / 2 + r.padding;
          var o = 0;
          var s = e.top;
          var l = e.left;
          var u = e.bottom;
          var f = e.right;
          var c, d, h;
          t.fillStyle = Se.valueOrDefault(
            r.fontColor,
            he.global.defaultFontColor
          );
          t.font = a.string;
          if (e.isHorizontal()) {
            d = l + (f - l) / 2;
            h = s + i;
            c = f - l;
          } else {
            d = r.position === "left" ? l + i : f - i;
            h = s + (u - s) / 2;
            c = u - s;
            o = Math.PI * (r.position === "left" ? -0.5 : 0.5);
          }
          t.save();
          t.translate(d, h);
          t.rotate(o);
          t.textAlign = "center";
          t.textBaseline = "middle";
          var v = r.text;
          if (Se.isArray(v)) {
            var g = 0;
            for (var p = 0; p < v.length; ++p) {
              t.fillText(v[p], 0, g, c);
              g += n;
            }
          } else t.fillText(v, 0, 0, c);
          t.restore();
        },
      });
      function yi(e, t) {
        var r = new xi({ ctx: e.ctx, options: t, chart: e });
        fr.configure(e, r, t);
        fr.addBox(e, r);
        e.titleBlock = r;
      }
      var wi,
        _i = {},
        ki,
        Mi = mi,
        Si = {
          id: "title",
          _element: xi,
          beforeInit: function (e) {
            var t = e.options.title;
            if (t) yi(e, t);
          },
          beforeUpdate: function (e) {
            var t = e.options.title;
            var r = e.titleBlock;
            if (t) {
              Se.mergeIf(t, he.global.title);
              if (r) {
                fr.configure(e, r, t);
                r.options = t;
              } else yi(e, t);
            } else if (r) {
              fr.removeBox(e, r);
              delete e.titleBlock;
            }
          },
        },
        Ci;
      for (Ci in ((_i.filler = fi),
      (_i.legend = Mi),
      (_i.title = Si),
      (ha.helpers = Se),
      va(),
      (ha._adapters = ba),
      (ha.Animation = Ee),
      (ha.animationService = Ne),
      (ha.controllers = Ut),
      (ha.DatasetController = He),
      (ha.defaults = he),
      (ha.Element = Oe),
      (ha.elements = ct),
      (ha.Interaction = Zt),
      (ha.layouts = fr),
      (ha.platform = Br),
      (ha.plugins = Wr),
      (ha.Scale = Va),
      (ha.scaleService = Hr),
      (ha.Ticks = xa),
      (ha.Tooltip = aa),
      ha.helpers.each(Jn, function (e, t) {
        ha.scaleService.registerScaleType(t, e, e._defaults);
      }),
      _i))
        if (_i.hasOwnProperty(Ci)) ha.plugins.register(_i[Ci]);
      ha.platform.initialize();
      var Pi = ha;
      if (typeof window !== "undefined") window.Chart = ha;
      return (
        ((ha.Chart = ha).Legend = _i.legend._element),
        (ha.Title = _i.title._element),
        (ha.pluginService = ha.plugins),
        (ha.PluginBase = ha.Element.extend({})),
        (ha.canvasHelpers = ha.helpers.canvas),
        (ha.layoutService = ha.layouts),
        (ha.LinearScaleBase = Ga),
        ha.helpers.each(
          [
            "Bar",
            "Bubble",
            "Doughnut",
            "Line",
            "PolarArea",
            "Radar",
            "Scatter",
          ],
          function (r) {
            ha[r] = function (e, t) {
              return new ha(
                e,
                ha.helpers.merge(t || {}, {
                  type: r.charAt(0).toLowerCase() + r.slice(1),
                })
              );
            };
          }
        ),
        Pi
      );
    })(
      (function () {
        try {
          return r(52);
        } catch (e) {}
      })()
    );
  },
  43: function (e, t, r) {
    var a;
    void 0 ===
      (a =
        "function" ==
        typeof (a = function () {
          "use strict";
          var Me = "14.7.0";
          function t(e) {
            return (
              typeof e === "object" &&
              typeof e.to === "function" &&
              typeof e.from === "function"
            );
          }
          function Se(e) {
            e.parentElement.removeChild(e);
          }
          function Ce(e) {
            return e !== null && e !== undefined;
          }
          function Pe(e) {
            e.preventDefault();
          }
          function Ae(e) {
            return e.filter(function (e) {
              return !this[e] ? (this[e] = true) : false;
            }, {});
          }
          function s(e, t) {
            return Math.round(e / t) * t;
          }
          function De(e, t) {
            var r = e.getBoundingClientRect();
            var a = e.ownerDocument;
            var n = a.documentElement;
            var i = Ne(a);
            if (/webkit.*Chrome.*Mobile/i.test(navigator.userAgent)) i.x = 0;
            return t ? r.top + i.y - n.clientTop : r.left + i.x - n.clientLeft;
          }
          function o(e) {
            return typeof e === "number" && !isNaN(e) && isFinite(e);
          }
          function Te(e, t, r) {
            if (r > 0) {
              Oe(e, t);
              setTimeout(function () {
                Le(e, t);
              }, r);
            }
          }
          function Ie(e) {
            return Math.max(Math.min(e, 100), 0);
          }
          function Fe(e) {
            return Array.isArray(e) ? e : [e];
          }
          function r(e) {
            e = String(e);
            var t = e.split(".");
            return t.length > 1 ? t[1].length : 0;
          }
          function Oe(e, t) {
            if (e.classList && !/\s/.test(t)) e.classList.add(t);
            else e.className += " " + t;
          }
          function Le(e, t) {
            if (e.classList && !/\s/.test(t)) e.classList.remove(t);
            else
              e.className = e.className.replace(
                new RegExp(
                  "(^|\\b)" + t.split(" ").join("|") + "(\\b|$)",
                  "gi"
                ),
                " "
              );
          }
          function Ee(e, t) {
            return e.classList
              ? e.classList.contains(t)
              : new RegExp("\\b" + t + "\\b").test(e.className);
          }
          function Ne(e) {
            var t = window.pageXOffset !== undefined;
            var r = (e.compatMode || "") === "CSS1Compat";
            var a = t
              ? window.pageXOffset
              : r
              ? e.documentElement.scrollLeft
              : e.body.scrollLeft;
            var n = t
              ? window.pageYOffset
              : r
              ? e.documentElement.scrollTop
              : e.body.scrollTop;
            return { x: a, y: n };
          }
          function Re() {
            return window.navigator.pointerEnabled
              ? { start: "pointerdown", move: "pointermove", end: "pointerup" }
              : window.navigator.msPointerEnabled
              ? {
                  start: "MSPointerDown",
                  move: "MSPointerMove",
                  end: "MSPointerUp",
                }
              : {
                  start: "mousedown touchstart",
                  move: "mousemove touchmove",
                  end: "mouseup touchend",
                };
          }
          function ze() {
            var e = false;
            try {
              var t = Object.defineProperty({}, "passive", {
                get: function () {
                  e = true;
                },
              });
              window.addEventListener("test", null, t);
            } catch (e) {}
            return e;
          }
          function Ve() {
            return (
              window.CSS && CSS.supports && CSS.supports("touch-action", "none")
            );
          }
          function l(e, t) {
            return 100 / (t - e);
          }
          function u(e, t, r) {
            return (t * 100) / (e[r + 1] - e[r]);
          }
          function f(e, t) {
            return u(e, e[0] < 0 ? t + Math.abs(e[0]) : t - e[0], 0);
          }
          function c(e, t) {
            return (t * (e[1] - e[0])) / 100 + e[0];
          }
          function d(e, t) {
            var r = 1;
            while (e >= t[r]) r += 1;
            return r;
          }
          function a(e, t, r) {
            if (r >= e.slice(-1)[0]) return 100;
            var a = d(r, e);
            var n = e[a - 1];
            var i = e[a];
            var o = t[a - 1];
            var s = t[a];
            return o + f([n, i], r) / l(o, s);
          }
          function n(e, t, r) {
            if (r >= 100) return e.slice(-1)[0];
            var a = d(r, t);
            var n = e[a - 1];
            var i = e[a];
            var o = t[a - 1];
            var s = t[a];
            return c([n, i], (r - o) * l(o, s));
          }
          function i(e, t, r, a) {
            if (a === 100) return a;
            var n = d(a, e);
            var i = e[n - 1];
            var o = e[n];
            if (r) {
              if (a - i > (o - i) / 2) return o;
              return i;
            }
            if (!t[n - 1]) return a;
            return e[n - 1] + s(a - e[n - 1], t[n - 1]);
          }
          function h(e, t, r) {
            var a;
            if (typeof t === "number") t = [t];
            if (!Array.isArray(t))
              throw new Error(
                "noUiSlider (" + Me + "): 'range' contains invalid value."
              );
            if (e === "min") a = 0;
            else if (e === "max") a = 100;
            else a = parseFloat(e);
            if (!o(a) || !o(t[0]))
              throw new Error(
                "noUiSlider (" + Me + "): 'range' value isn't numeric."
              );
            r.xPct.push(a);
            r.xVal.push(t[0]);
            if (!a) {
              if (!isNaN(t[1])) r.xSteps[0] = t[1];
            } else r.xSteps.push(isNaN(t[1]) ? false : t[1]);
            r.xHighestCompleteStep.push(0);
          }
          function v(e, t, r) {
            if (!t) return;
            if (r.xVal[e] === r.xVal[e + 1]) {
              r.xSteps[e] = r.xHighestCompleteStep[e] = r.xVal[e];
              return;
            }
            r.xSteps[e] =
              u([r.xVal[e], r.xVal[e + 1]], t, 0) / l(r.xPct[e], r.xPct[e + 1]);
            var a = (r.xVal[e + 1] - r.xVal[e]) / r.xNumSteps[e];
            var n = Math.ceil(Number(a.toFixed(3)) - 1);
            var i = r.xVal[e] + r.xNumSteps[e] * n;
            r.xHighestCompleteStep[e] = i;
          }
          function g(e, t, r) {
            this.xPct = [];
            this.xVal = [];
            this.xSteps = [r || false];
            this.xNumSteps = [false];
            this.xHighestCompleteStep = [];
            this.snap = t;
            var a;
            var n = [];
            for (a in e) if (e.hasOwnProperty(a)) n.push([e[a], a]);
            if (n.length && typeof n[0][0] === "object")
              n.sort(function (e, t) {
                return e[0][0] - t[0][0];
              });
            else
              n.sort(function (e, t) {
                return e[0] - t[0];
              });
            for (a = 0; a < n.length; a++) h(n[a][1], n[a][0], this);
            this.xNumSteps = this.xSteps.slice(0);
            for (a = 0; a < this.xNumSteps.length; a++)
              v(a, this.xNumSteps[a], this);
          }
          (g.prototype.getDistance = function (e) {
            var t;
            var r = [];
            for (t = 0; t < this.xNumSteps.length - 1; t++) {
              var a = this.xNumSteps[t];
              if (a && (e / a) % 1 !== 0)
                throw new Error(
                  "noUiSlider (" +
                    Me +
                    "): 'limit', 'margin' and 'padding' of " +
                    this.xPct[t] +
                    "% range must be divisible by step."
                );
              r[t] = u(this.xVal, e, t);
            }
            return r;
          }),
            (g.prototype.getAbsoluteDistance = function (e, t, r) {
              var a = 0;
              if (e < this.xPct[this.xPct.length - 1])
                while (e > this.xPct[a + 1]) a++;
              else if (e === this.xPct[this.xPct.length - 1])
                a = this.xPct.length - 2;
              if (!r && e === this.xPct[a + 1]) a++;
              var n;
              var i = 1;
              var o = t[a];
              var s = 0;
              var l = 0;
              var u = 0;
              var f = 0;
              if (r) n = (e - this.xPct[a]) / (this.xPct[a + 1] - this.xPct[a]);
              else
                n = (this.xPct[a + 1] - e) / (this.xPct[a + 1] - this.xPct[a]);
              while (o > 0) {
                s = this.xPct[a + 1 + f] - this.xPct[a + f];
                if (t[a + f] * i + 100 - n * 100 > 100) {
                  l = s * n;
                  i = (o - 100 * n) / t[a + f];
                  n = 1;
                } else {
                  l = ((t[a + f] * s) / 100) * i;
                  i = 0;
                }
                if (r) {
                  u = u - l;
                  if (this.xPct.length + f >= 1) f--;
                } else {
                  u = u + l;
                  if (this.xPct.length - f >= 1) f++;
                }
                o = t[a + f] * i;
              }
              return e + u;
            }),
            (g.prototype.toStepping = function (e) {
              e = a(this.xVal, this.xPct, e);
              return e;
            }),
            (g.prototype.fromStepping = function (e) {
              return n(this.xVal, this.xPct, e);
            }),
            (g.prototype.getStep = function (e) {
              e = i(this.xPct, this.xSteps, this.snap, e);
              return e;
            }),
            (g.prototype.getDefaultStep = function (e, t, r) {
              var a = d(e, this.xPct);
              if (e === 100 || (t && e === this.xPct[a - 1]))
                a = Math.max(a - 1, 1);
              return (this.xVal[a] - this.xVal[a - 1]) / r;
            }),
            (g.prototype.getNearbySteps = function (e) {
              var t = d(e, this.xPct);
              return {
                stepBefore: {
                  startValue: this.xVal[t - 2],
                  step: this.xNumSteps[t - 2],
                  highestStep: this.xHighestCompleteStep[t - 2],
                },
                thisStep: {
                  startValue: this.xVal[t - 1],
                  step: this.xNumSteps[t - 1],
                  highestStep: this.xHighestCompleteStep[t - 1],
                },
                stepAfter: {
                  startValue: this.xVal[t],
                  step: this.xNumSteps[t],
                  highestStep: this.xHighestCompleteStep[t],
                },
              };
            }),
            (g.prototype.countStepDecimals = function () {
              var e = this.xNumSteps.map(r);
              return Math.max.apply(null, e);
            }),
            (g.prototype.convert = function (e) {
              return this.getStep(this.toStepping(e));
            });
          var p = {
              to: function (e) {
                return e !== undefined && e.toFixed(2);
              },
              from: Number,
            },
            m = {
              target: "target",
              base: "base",
              origin: "origin",
              handle: "handle",
              handleLower: "handle-lower",
              handleUpper: "handle-upper",
              touchArea: "touch-area",
              horizontal: "horizontal",
              vertical: "vertical",
              background: "background",
              connect: "connect",
              connects: "connects",
              ltr: "ltr",
              rtl: "rtl",
              textDirectionLtr: "txt-dir-ltr",
              textDirectionRtl: "txt-dir-rtl",
              draggable: "draggable",
              drag: "state-drag",
              tap: "state-tap",
              active: "active",
              tooltip: "tooltip",
              pips: "pips",
              pipsHorizontal: "pips-horizontal",
              pipsVertical: "pips-vertical",
              marker: "marker",
              markerHorizontal: "marker-horizontal",
              markerVertical: "marker-vertical",
              markerNormal: "marker-normal",
              markerLarge: "marker-large",
              markerSub: "marker-sub",
              value: "value",
              valueHorizontal: "value-horizontal",
              valueVertical: "value-vertical",
              valueNormal: "value-normal",
              valueLarge: "value-large",
              valueSub: "value-sub",
            },
            Be = { tooltips: ".__tooltips", aria: ".__aria" };
          function b(e) {
            if (t(e)) return true;
            throw new Error(
              "noUiSlider (" +
                Me +
                "): 'format' requires 'to' and 'from' methods."
            );
          }
          function x(e, t) {
            if (!o(t))
              throw new Error(
                "noUiSlider (" + Me + "): 'step' is not numeric."
              );
            e.singleStep = t;
          }
          function y(e, t) {
            if (!o(t))
              throw new Error(
                "noUiSlider (" +
                  Me +
                  "): 'keyboardPageMultiplier' is not numeric."
              );
            e.keyboardPageMultiplier = t;
          }
          function w(e, t) {
            if (!o(t))
              throw new Error(
                "noUiSlider (" + Me + "): 'keyboardDefaultStep' is not numeric."
              );
            e.keyboardDefaultStep = t;
          }
          function _(e, t) {
            if (typeof t !== "object" || Array.isArray(t))
              throw new Error(
                "noUiSlider (" + Me + "): 'range' is not an object."
              );
            if (t.min === undefined || t.max === undefined)
              throw new Error(
                "noUiSlider (" + Me + "): Missing 'min' or 'max' in 'range'."
              );
            if (t.min === t.max)
              throw new Error(
                "noUiSlider (" +
                  Me +
                  "): 'range' 'min' and 'max' cannot be equal."
              );
            e.spectrum = new g(t, e.snap, e.singleStep);
          }
          function k(e, t) {
            t = Fe(t);
            if (!Array.isArray(t) || !t.length)
              throw new Error(
                "noUiSlider (" + Me + "): 'start' option is incorrect."
              );
            e.handles = t.length;
            e.start = t;
          }
          function M(e, t) {
            e.snap = t;
            if (typeof t !== "boolean")
              throw new Error(
                "noUiSlider (" + Me + "): 'snap' option must be a boolean."
              );
          }
          function S(e, t) {
            e.animate = t;
            if (typeof t !== "boolean")
              throw new Error(
                "noUiSlider (" + Me + "): 'animate' option must be a boolean."
              );
          }
          function C(e, t) {
            e.animationDuration = t;
            if (typeof t !== "number")
              throw new Error(
                "noUiSlider (" +
                  Me +
                  "): 'animationDuration' option must be a number."
              );
          }
          function P(e, t) {
            var r = [false];
            var a;
            if (t === "lower") t = [true, false];
            else if (t === "upper") t = [false, true];
            if (t === true || t === false) {
              for (a = 1; a < e.handles; a++) r.push(t);
              r.push(false);
            } else if (
              !Array.isArray(t) ||
              !t.length ||
              t.length !== e.handles + 1
            )
              throw new Error(
                "noUiSlider (" +
                  Me +
                  "): 'connect' option doesn't match handle count."
              );
            else r = t;
            e.connect = r;
          }
          function A(e, t) {
            switch (t) {
              case "horizontal":
                e.ort = 0;
                break;
              case "vertical":
                e.ort = 1;
                break;
              default:
                throw new Error(
                  "noUiSlider (" + Me + "): 'orientation' option is invalid."
                );
            }
          }
          function D(e, t) {
            if (!o(t))
              throw new Error(
                "noUiSlider (" + Me + "): 'margin' option must be numeric."
              );
            if (t === 0) return;
            e.margin = e.spectrum.getDistance(t);
          }
          function T(e, t) {
            if (!o(t))
              throw new Error(
                "noUiSlider (" + Me + "): 'limit' option must be numeric."
              );
            e.limit = e.spectrum.getDistance(t);
            if (!e.limit || e.handles < 2)
              throw new Error(
                "noUiSlider (" +
                  Me +
                  "): 'limit' option is only supported on linear sliders with 2 or more handles."
              );
          }
          function I(e, t) {
            var r;
            if (!o(t) && !Array.isArray(t))
              throw new Error(
                "noUiSlider (" +
                  Me +
                  "): 'padding' option must be numeric or array of exactly 2 numbers."
              );
            if (Array.isArray(t) && !(t.length === 2 || o(t[0]) || o(t[1])))
              throw new Error(
                "noUiSlider (" +
                  Me +
                  "): 'padding' option must be numeric or array of exactly 2 numbers."
              );
            if (t === 0) return;
            if (!Array.isArray(t)) t = [t, t];
            e.padding = [
              e.spectrum.getDistance(t[0]),
              e.spectrum.getDistance(t[1]),
            ];
            for (r = 0; r < e.spectrum.xNumSteps.length - 1; r++)
              if (e.padding[0][r] < 0 || e.padding[1][r] < 0)
                throw new Error(
                  "noUiSlider (" +
                    Me +
                    "): 'padding' option must be a positive number(s)."
                );
            var a = t[0] + t[1];
            var n = e.spectrum.xVal[0];
            var i = e.spectrum.xVal[e.spectrum.xVal.length - 1];
            if (a / (i - n) > 1)
              throw new Error(
                "noUiSlider (" +
                  Me +
                  "): 'padding' option must not exceed 100% of the range."
              );
          }
          function F(e, t) {
            switch (t) {
              case "ltr":
                e.dir = 0;
                break;
              case "rtl":
                e.dir = 1;
                break;
              default:
                throw new Error(
                  "noUiSlider (" +
                    Me +
                    "): 'direction' option was not recognized."
                );
            }
          }
          function O(e, t) {
            if (typeof t !== "string")
              throw new Error(
                "noUiSlider (" +
                  Me +
                  "): 'behaviour' must be a string containing options."
              );
            var r = t.indexOf("tap") >= 0;
            var a = t.indexOf("drag") >= 0;
            var n = t.indexOf("fixed") >= 0;
            var i = t.indexOf("snap") >= 0;
            var o = t.indexOf("hover") >= 0;
            var s = t.indexOf("unconstrained") >= 0;
            if (n) {
              if (e.handles !== 2)
                throw new Error(
                  "noUiSlider (" +
                    Me +
                    "): 'fixed' behaviour must be used with 2 handles"
                );
              D(e, e.start[1] - e.start[0]);
            }
            if (s && (e.margin || e.limit))
              throw new Error(
                "noUiSlider (" +
                  Me +
                  "): 'unconstrained' behaviour cannot be used with margin or limit"
              );
            e.events = {
              tap: r || i,
              drag: a,
              fixed: n,
              snap: i,
              hover: o,
              unconstrained: s,
            };
          }
          function L(e, t) {
            if (t === false) return;
            if (t === true) {
              e.tooltips = [];
              for (var r = 0; r < e.handles; r++) e.tooltips.push(true);
            } else {
              e.tooltips = Fe(t);
              if (e.tooltips.length !== e.handles)
                throw new Error(
                  "noUiSlider (" +
                    Me +
                    "): must pass a formatter for all handles."
                );
              e.tooltips.forEach(function (e) {
                if (
                  typeof e !== "boolean" &&
                  (typeof e !== "object" || typeof e.to !== "function")
                )
                  throw new Error(
                    "noUiSlider (" +
                      Me +
                      "): 'tooltips' must be passed a formatter or 'false'."
                  );
              });
            }
          }
          function E(e, t) {
            e.ariaFormat = t;
            b(t);
          }
          function N(e, t) {
            e.format = t;
            b(t);
          }
          function R(e, t) {
            e.keyboardSupport = t;
            if (typeof t !== "boolean")
              throw new Error(
                "noUiSlider (" +
                  Me +
                  "): 'keyboardSupport' option must be a boolean."
              );
          }
          function z(e, t) {
            e.documentElement = t;
          }
          function V(e, t) {
            if (typeof t !== "string" && t !== false)
              throw new Error(
                "noUiSlider (" +
                  Me +
                  "): 'cssPrefix' must be a string or `false`."
              );
            e.cssPrefix = t;
          }
          function B(e, t) {
            if (typeof t !== "object")
              throw new Error(
                "noUiSlider (" + Me + "): 'cssClasses' must be an object."
              );
            if (typeof e.cssPrefix === "string") {
              e.cssClasses = {};
              for (var r in t) {
                if (!t.hasOwnProperty(r)) continue;
                e.cssClasses[r] = e.cssPrefix + t[r];
              }
            } else e.cssClasses = t;
          }
          function We(t) {
            var r = {
              margin: 0,
              limit: 0,
              padding: 0,
              animate: true,
              animationDuration: 300,
              ariaFormat: p,
              format: p,
            };
            var a = {
              step: { r: false, t: x },
              keyboardPageMultiplier: { r: false, t: y },
              keyboardDefaultStep: { r: false, t: w },
              start: { r: true, t: k },
              connect: { r: true, t: P },
              direction: { r: true, t: F },
              snap: { r: false, t: M },
              animate: { r: false, t: S },
              animationDuration: { r: false, t: C },
              range: { r: true, t: _ },
              orientation: { r: false, t: A },
              margin: { r: false, t: D },
              limit: { r: false, t: T },
              padding: { r: false, t: I },
              behaviour: { r: true, t: O },
              ariaFormat: { r: false, t: E },
              format: { r: false, t: N },
              tooltips: { r: false, t: L },
              keyboardSupport: { r: true, t: R },
              documentElement: { r: false, t: z },
              cssPrefix: { r: true, t: V },
              cssClasses: { r: true, t: B },
            };
            var n = {
              connect: false,
              direction: "ltr",
              behaviour: "tap",
              orientation: "horizontal",
              keyboardSupport: true,
              cssPrefix: "noUi-",
              cssClasses: m,
              keyboardPageMultiplier: 5,
              keyboardDefaultStep: 10,
            };
            if (t.format && !t.ariaFormat) t.ariaFormat = t.format;
            Object.keys(a).forEach(function (e) {
              if (!Ce(t[e]) && n[e] === undefined) {
                if (a[e].r)
                  throw new Error(
                    "noUiSlider (" + Me + "): '" + e + "' is required."
                  );
                return true;
              }
              a[e].t(r, !Ce(t[e]) ? n[e] : t[e]);
            });
            r.pips = t.pips;
            var e = document.createElement("div");
            var i = e.style.msTransform !== undefined;
            var o = e.style.transform !== undefined;
            r.transformRule = o
              ? "transform"
              : i
              ? "msTransform"
              : "webkitTransform";
            var s = [
              ["left", "top"],
              ["right", "bottom"],
            ];
            r.style = s[r.dir][r.ort];
            return r;
          }
          function W(e, b, i) {
            var l = Re();
            var t = Ve();
            var s = t && ze();
            var u = e;
            var a;
            var f;
            var o;
            var c;
            var n;
            var k = b.spectrum;
            var x = [];
            var y = [];
            var d = [];
            var h = 0;
            var v = {};
            var g;
            var p = e.ownerDocument;
            var m = b.documentElement || p.documentElement;
            var w = p.body;
            var _ = -1;
            var M = 0;
            var S = 1;
            var C = 2;
            var P = p.dir === "rtl" || b.ort === 1 ? 0 : 100;
            function A(e, t) {
              var r = p.createElement("div");
              if (t) Oe(r, t);
              e.appendChild(r);
              return r;
            }
            function D(e, t) {
              var r = A(e, b.cssClasses.origin);
              var a = A(r, b.cssClasses.handle);
              A(a, b.cssClasses.touchArea);
              a.setAttribute("data-handle", t);
              if (b.keyboardSupport) {
                a.setAttribute("tabindex", "0");
                a.addEventListener("keydown", function (e) {
                  return ee(e, t);
                });
              }
              a.setAttribute("role", "slider");
              a.setAttribute(
                "aria-orientation",
                b.ort ? "vertical" : "horizontal"
              );
              if (t === 0) Oe(a, b.cssClasses.handleLower);
              else if (t === b.handles - 1) Oe(a, b.cssClasses.handleUpper);
              return r;
            }
            function T(e, t) {
              if (!t) return false;
              return A(e, b.cssClasses.connect);
            }
            function r(e, t) {
              var r = A(t, b.cssClasses.connects);
              f = [];
              o = [];
              o.push(T(r, e[0]));
              for (var a = 0; a < b.handles; a++) {
                f.push(D(t, a));
                d[a] = a;
                o.push(T(r, e[a + 1]));
              }
            }
            function I(e) {
              Oe(e, b.cssClasses.target);
              if (b.dir === 0) Oe(e, b.cssClasses.ltr);
              else Oe(e, b.cssClasses.rtl);
              if (b.ort === 0) Oe(e, b.cssClasses.horizontal);
              else Oe(e, b.cssClasses.vertical);
              var t = getComputedStyle(e).direction;
              if (t === "rtl") Oe(e, b.cssClasses.textDirectionRtl);
              else Oe(e, b.cssClasses.textDirectionLtr);
              return A(e, b.cssClasses.base);
            }
            function F(e, t) {
              if (!b.tooltips[t]) return false;
              return A(e.firstChild, b.cssClasses.tooltip);
            }
            function O() {
              return u.hasAttribute("disabled");
            }
            function L(e) {
              var t = f[e];
              return t.hasAttribute("disabled");
            }
            function E() {
              if (n) {
                ne("update" + Be.tooltips);
                n.forEach(function (e) {
                  if (e) Se(e);
                });
                n = null;
              }
            }
            function N() {
              E();
              n = f.map(F);
              re("update" + Be.tooltips, function (e, t, r) {
                if (!n[t]) return;
                var a = e[t];
                if (b.tooltips[t] !== true) a = b.tooltips[t].to(r[t]);
                n[t].innerHTML = a;
              });
            }
            function R() {
              ne("update" + Be.aria);
              re("update" + Be.aria, function (e, t, o, r, s) {
                d.forEach(function (e) {
                  var t = f[e];
                  var r = oe(y, e, 0, true, true, true);
                  var a = oe(y, e, 100, true, true, true);
                  var n = s[e];
                  var i = b.ariaFormat.to(o[e]);
                  r = k.fromStepping(r).toFixed(1);
                  a = k.fromStepping(a).toFixed(1);
                  n = k.fromStepping(n).toFixed(1);
                  t.children[0].setAttribute("aria-valuemin", r);
                  t.children[0].setAttribute("aria-valuemax", a);
                  t.children[0].setAttribute("aria-valuenow", n);
                  t.children[0].setAttribute("aria-valuetext", i);
                });
              });
            }
            function z(e, t, r) {
              if (e === "range" || e === "steps") return k.xVal;
              if (e === "count") {
                if (t < 2)
                  throw new Error(
                    "noUiSlider (" +
                      Me +
                      "): 'values' (>= 2) required for mode 'count'."
                  );
                var a = t - 1;
                var n = 100 / a;
                t = [];
                while (a--) t[a] = a * n;
                t.push(100);
                e = "positions";
              }
              if (e === "positions")
                return t.map(function (e) {
                  return k.fromStepping(r ? k.getStep(e) : e);
                });
              if (e === "values") {
                if (r)
                  return t.map(function (e) {
                    return k.fromStepping(k.getStep(k.toStepping(e)));
                  });
                return t;
              }
            }
            function V(g, p, m) {
              function b(e, t) {
                return (e + t).toFixed(7) / 1;
              }
              var x = {};
              var e = k.xVal[0];
              var t = k.xVal[k.xVal.length - 1];
              var y = false;
              var w = false;
              var _ = 0;
              m = Ae(
                m.slice().sort(function (e, t) {
                  return e - t;
                })
              );
              if (m[0] !== e) {
                m.unshift(e);
                y = true;
              }
              if (m[m.length - 1] !== t) {
                m.push(t);
                w = true;
              }
              m.forEach(function (e, t) {
                var r;
                var a;
                var n;
                var i = e;
                var o = m[t + 1];
                var s;
                var l;
                var u;
                var f;
                var c;
                var d;
                var h;
                var v = p === "steps";
                if (v) r = k.xNumSteps[t];
                if (!r) r = o - i;
                if (i === false) return;
                if (o === undefined) o = i;
                r = Math.max(r, 1e-7);
                for (a = i; a <= o; a = b(a, r)) {
                  s = k.toStepping(a);
                  l = s - _;
                  c = l / g;
                  d = Math.round(c);
                  h = l / d;
                  for (n = 1; n <= d; n += 1) {
                    u = _ + n * h;
                    x[u.toFixed(5)] = [k.fromStepping(u), 0];
                  }
                  f = m.indexOf(a) > -1 ? S : v ? C : M;
                  if (!t && y && a !== o) f = 0;
                  if (!(a === o && w)) x[s.toFixed(5)] = [a, f];
                  _ = s;
                }
              });
              return x;
            }
            function B(t, n, i) {
              var o = p.createElement("div");
              var s = [];
              s[M] = b.cssClasses.valueNormal;
              s[S] = b.cssClasses.valueLarge;
              s[C] = b.cssClasses.valueSub;
              var l = [];
              l[M] = b.cssClasses.markerNormal;
              l[S] = b.cssClasses.markerLarge;
              l[C] = b.cssClasses.markerSub;
              var u = [
                b.cssClasses.valueHorizontal,
                b.cssClasses.valueVertical,
              ];
              var f = [
                b.cssClasses.markerHorizontal,
                b.cssClasses.markerVertical,
              ];
              Oe(o, b.cssClasses.pips);
              Oe(
                o,
                b.ort === 0
                  ? b.cssClasses.pipsHorizontal
                  : b.cssClasses.pipsVertical
              );
              function c(e, t) {
                var r = t === b.cssClasses.value;
                var a = r ? u : f;
                var n = r ? s : l;
                return t + " " + a[b.ort] + " " + n[e];
              }
              function r(e, t, r) {
                r = n ? n(t, r) : r;
                if (r === _) return;
                var a = A(o, false);
                a.className = c(r, b.cssClasses.marker);
                a.style[b.style] = e + "%";
                if (r > M) {
                  a = A(o, false);
                  a.className = c(r, b.cssClasses.value);
                  a.setAttribute("data-value", t);
                  a.style[b.style] = e + "%";
                  a.innerHTML = i.to(t);
                }
              }
              Object.keys(t).forEach(function (e) {
                r(e, t[e][0], t[e][1]);
              });
              return o;
            }
            function W() {
              if (c) {
                Se(c);
                c = null;
              }
            }
            function H(e) {
              W();
              var t = e.mode;
              var r = e.density || 1;
              var a = e.filter || false;
              var n = e.values || false;
              var i = e.stepped || false;
              var o = z(t, n, i);
              var s = V(r, t, o);
              var l = e.format || { to: Math.round };
              c = u.appendChild(B(s, a, l));
              return c;
            }
            function j() {
              var e = a.getBoundingClientRect();
              var t = "offset" + ["Width", "Height"][b.ort];
              return b.ort === 0 ? e.width || a[t] : e.height || a[t];
            }
            function U(t, r, a, n) {
              var i = function (e) {
                e = q(e, n.pageOffset, n.target || r);
                if (!e) return false;
                if (O() && !n.doNotReject) return false;
                if (Ee(u, b.cssClasses.tap) && !n.doNotReject) return false;
                if (t === l.start && e.buttons !== undefined && e.buttons > 1)
                  return false;
                if (n.hover && e.buttons) return false;
                if (!s) e.preventDefault();
                e.calcPoint = e.points[b.ort];
                a(e, n);
              };
              var o = [];
              t.split(" ").forEach(function (e) {
                r.addEventListener(e, i, s ? { passive: true } : false);
                o.push([e, i]);
              });
              return o;
            }
            function q(e, t, r) {
              var a = e.type.indexOf("touch") === 0;
              var n = e.type.indexOf("mouse") === 0;
              var i = e.type.indexOf("pointer") === 0;
              var o;
              var s;
              if (e.type.indexOf("MSPointer") === 0) i = true;
              if (e.type === "mousedown" && !e.buttons && !e.touches)
                return false;
              if (a) {
                var l = function (e) {
                  return (
                    e.target === r ||
                    r.contains(e.target) ||
                    (e.target.shadowRoot && e.target.shadowRoot.contains(r))
                  );
                };
                if (e.type === "touchstart") {
                  var u = Array.prototype.filter.call(e.touches, l);
                  if (u.length > 1) return false;
                  o = u[0].pageX;
                  s = u[0].pageY;
                } else {
                  var f = Array.prototype.find.call(e.changedTouches, l);
                  if (!f) return false;
                  o = f.pageX;
                  s = f.pageY;
                }
              }
              t = t || Ne(p);
              if (n || i) {
                o = e.clientX + t.x;
                s = e.clientY + t.y;
              }
              e.pageOffset = t;
              e.points = [o, s];
              e.cursor = n || i;
              return e;
            }
            function Y(e) {
              var t = e - De(a, b.ort);
              var r = (t * 100) / j();
              r = Ie(r);
              return b.dir ? 100 - r : r;
            }
            function G(s) {
              var l = 100;
              var u = false;
              f.forEach(function (e, t) {
                if (L(t)) return;
                var r = y[t];
                var a = Math.abs(r - s);
                var n = a === 100 && l === 100;
                var i = a < l;
                var o = a <= l && s > r;
                if (i || o || n) {
                  u = t;
                  l = a;
                }
              });
              return u;
            }
            function X(e, t) {
              if (
                e.type === "mouseout" &&
                e.target.nodeName === "HTML" &&
                e.relatedTarget === null
              )
                $(e, t);
            }
            function K(e, t) {
              if (
                navigator.appVersion.indexOf("MSIE 9") === -1 &&
                e.buttons === 0 &&
                t.buttonsProperty !== 0
              )
                return $(e, t);
              var r = (b.dir ? -1 : 1) * (e.calcPoint - t.startCalcPoint);
              var a = (r * 100) / t.baseSize;
              le(r > 0, a, t.locations, t.handleNumbers);
            }
            function $(e, t) {
              if (t.handle) {
                Le(t.handle, b.cssClasses.active);
                h -= 1;
              }
              t.listeners.forEach(function (e) {
                m.removeEventListener(e[0], e[1]);
              });
              if (h === 0) {
                Le(u, b.cssClasses.drag);
                ce();
                if (e.cursor) {
                  w.style.cursor = "";
                  w.removeEventListener("selectstart", Pe);
                }
              }
              t.handleNumbers.forEach(function (e) {
                ie("change", e);
                ie("set", e);
                ie("end", e);
              });
            }
            function Z(e, t) {
              if (t.handleNumbers.some(L)) return false;
              var r;
              if (t.handleNumbers.length === 1) {
                var a = f[t.handleNumbers[0]];
                r = a.children[0];
                h += 1;
                Oe(r, b.cssClasses.active);
              }
              e.stopPropagation();
              var n = [];
              var i = U(l.move, m, K, {
                target: e.target,
                handle: r,
                listeners: n,
                startCalcPoint: e.calcPoint,
                baseSize: j(),
                pageOffset: e.pageOffset,
                handleNumbers: t.handleNumbers,
                buttonsProperty: e.buttons,
                locations: y.slice(),
              });
              var o = U(l.end, m, $, {
                target: e.target,
                handle: r,
                listeners: n,
                doNotReject: true,
                handleNumbers: t.handleNumbers,
              });
              var s = U("mouseout", m, X, {
                target: e.target,
                handle: r,
                listeners: n,
                doNotReject: true,
                handleNumbers: t.handleNumbers,
              });
              n.push.apply(n, i.concat(o, s));
              if (e.cursor) {
                w.style.cursor = getComputedStyle(e.target).cursor;
                if (f.length > 1) Oe(u, b.cssClasses.drag);
                w.addEventListener("selectstart", Pe, false);
              }
              t.handleNumbers.forEach(function (e) {
                ie("start", e);
              });
            }
            function J(e) {
              e.stopPropagation();
              var t = Y(e.calcPoint);
              var r = G(t);
              if (r === false) return false;
              if (!b.events.snap) Te(u, b.cssClasses.tap, b.animationDuration);
              de(r, t, true, true);
              ce();
              ie("slide", r, true);
              ie("update", r, true);
              ie("change", r, true);
              ie("set", r, true);
              if (b.events.snap) Z(e, { handleNumbers: [r] });
            }
            function Q(e) {
              var t = Y(e.calcPoint);
              var r = k.getStep(t);
              var a = k.fromStepping(r);
              Object.keys(v).forEach(function (e) {
                if ("hover" === e.split(".")[0])
                  v[e].forEach(function (e) {
                    e.call(g, a);
                  });
              });
            }
            function ee(e, t) {
              if (O() || L(t)) return false;
              var r = ["Left", "Right"];
              var a = ["Down", "Up"];
              var n = ["PageDown", "PageUp"];
              var i = ["Home", "End"];
              if (b.dir && !b.ort) r.reverse();
              else if (b.ort && !b.dir) {
                a.reverse();
                n.reverse();
              }
              var o = e.key.replace("Arrow", "");
              var s = o === n[0];
              var l = o === n[1];
              var u = o === a[0] || o === r[0] || s;
              var f = o === a[1] || o === r[1] || l;
              var c = o === i[0];
              var d = o === i[1];
              if (!u && !f && !c && !d) return true;
              e.preventDefault();
              var h;
              if (f || u) {
                var v = b.keyboardPageMultiplier;
                var g = u ? 0 : 1;
                var p = ye(t);
                var m = p[g];
                if (m === null) return false;
                if (m === false)
                  m = k.getDefaultStep(y[t], u, b.keyboardDefaultStep);
                if (l || s) m *= v;
                m = Math.max(m, 1e-7);
                m = (u ? -1 : 1) * m;
                h = x[t] + m;
              } else if (d) h = b.spectrum.xVal[b.spectrum.xVal.length - 1];
              else h = b.spectrum.xVal[0];
              de(t, k.toStepping(h), true, true);
              ie("slide", t);
              ie("update", t);
              ie("change", t);
              ie("set", t);
              return false;
            }
            function te(i) {
              if (!i.fixed)
                f.forEach(function (e, t) {
                  U(l.start, e.children[0], Z, { handleNumbers: [t] });
                });
              if (i.tap) U(l.start, a, J, {});
              if (i.hover) U(l.move, a, Q, { hover: true });
              if (i.drag)
                o.forEach(function (e, t) {
                  if (e === false || t === 0 || t === o.length - 1) return;
                  var r = f[t - 1];
                  var a = f[t];
                  var n = [e];
                  Oe(e, b.cssClasses.draggable);
                  if (i.fixed) {
                    n.push(r.children[0]);
                    n.push(a.children[0]);
                  }
                  n.forEach(function (e) {
                    U(l.start, e, Z, {
                      handles: [r, a],
                      handleNumbers: [t - 1, t],
                    });
                  });
                });
            }
            function re(e, t) {
              v[e] = v[e] || [];
              v[e].push(t);
              if (e.split(".")[0] === "update")
                f.forEach(function (e, t) {
                  ie("update", t);
                });
            }
            function ae(e) {
              return e === Be.aria || e === Be.tooltips;
            }
            function ne(e) {
              var a = e && e.split(".")[0];
              var n = a ? e.substring(a.length) : e;
              Object.keys(v).forEach(function (e) {
                var t = e.split(".")[0];
                var r = e.substring(t.length);
                if ((!a || a === t) && (!n || n === r))
                  if (!ae(r) || n === r) delete v[e];
              });
            }
            function ie(r, a, n) {
              Object.keys(v).forEach(function (e) {
                var t = e.split(".")[0];
                if (r === t)
                  v[e].forEach(function (e) {
                    e.call(
                      g,
                      x.map(b.format.to),
                      a,
                      x.slice(),
                      n || false,
                      y.slice(),
                      g
                    );
                  });
              });
            }
            function oe(e, t, r, a, n, i) {
              var o;
              if (f.length > 1 && !b.events.unconstrained) {
                if (a && t > 0) {
                  o = k.getAbsoluteDistance(e[t - 1], b.margin, 0);
                  r = Math.max(r, o);
                }
                if (n && t < f.length - 1) {
                  o = k.getAbsoluteDistance(e[t + 1], b.margin, 1);
                  r = Math.min(r, o);
                }
              }
              if (f.length > 1 && b.limit) {
                if (a && t > 0) {
                  o = k.getAbsoluteDistance(e[t - 1], b.limit, 0);
                  r = Math.min(r, o);
                }
                if (n && t < f.length - 1) {
                  o = k.getAbsoluteDistance(e[t + 1], b.limit, 1);
                  r = Math.max(r, o);
                }
              }
              if (b.padding) {
                if (t === 0) {
                  o = k.getAbsoluteDistance(0, b.padding[0], 0);
                  r = Math.max(r, o);
                }
                if (t === f.length - 1) {
                  o = k.getAbsoluteDistance(100, b.padding[1], 1);
                  r = Math.min(r, o);
                }
              }
              r = k.getStep(r);
              r = Ie(r);
              if (r === e[t] && !i) return false;
              return r;
            }
            function se(e, t) {
              var r = b.ort;
              return (r ? t : e) + ", " + (r ? e : t);
            }
            function le(e, a, r, t) {
              var n = r.slice();
              var i = [!e, e];
              var o = [e, !e];
              t = t.slice();
              if (e) t.reverse();
              if (t.length > 1)
                t.forEach(function (e, t) {
                  var r = oe(n, e, n[e] + a, i[t], o[t], false);
                  if (r === false) a = 0;
                  else {
                    a = r - n[e];
                    n[e] = r;
                  }
                });
              else i = o = [true];
              var s = false;
              t.forEach(function (e, t) {
                s = de(e, r[e] + a, i[t], o[t]) || s;
              });
              if (s)
                t.forEach(function (e) {
                  ie("update", e);
                  ie("slide", e);
                });
            }
            function ue(e, t) {
              return b.dir ? 100 - e - t : e;
            }
            function fe(e, t) {
              y[e] = t;
              x[e] = k.fromStepping(t);
              var r = 10 * (ue(t, 0) - P);
              var a = "translate(" + se(r + "%", "0") + ")";
              f[e].style[b.transformRule] = a;
              he(e);
              he(e + 1);
            }
            function ce() {
              d.forEach(function (e) {
                var t = y[e] > 50 ? -1 : 1;
                var r = 3 + (f.length + t * e);
                f[e].style.zIndex = r;
              });
            }
            function de(e, t, r, a, n) {
              if (!n) t = oe(y, e, t, r, a, false);
              if (t === false) return false;
              fe(e, t);
              return true;
            }
            function he(e) {
              if (!o[e]) return;
              var t = 0;
              var r = 100;
              if (e !== 0) t = y[e - 1];
              if (e !== o.length - 1) r = y[e];
              var a = r - t;
              var n = "translate(" + se(ue(t, a) + "%", "0") + ")";
              var i = "scale(" + se(a / 100, "1") + ")";
              o[e].style[b.transformRule] = n + " " + i;
            }
            function ve(e, t) {
              if (e === null || e === false || e === undefined) return y[t];
              if (typeof e === "number") e = String(e);
              e = b.format.from(e);
              e = k.toStepping(e);
              if (e === false || isNaN(e)) return y[t];
              return e;
            }
            function ge(e, t, r) {
              var a = Fe(e);
              var n = y[0] === undefined;
              t = t === undefined ? true : !!t;
              if (b.animate && !n) Te(u, b.cssClasses.tap, b.animationDuration);
              d.forEach(function (e) {
                de(e, ve(a[e], e), true, false, r);
              });
              var i = d.length === 1 ? 0 : 1;
              for (; i < d.length; ++i)
                d.forEach(function (e) {
                  de(e, y[e], true, true, r);
                });
              ce();
              d.forEach(function (e) {
                ie("update", e);
                if (a[e] !== null && t) ie("set", e);
              });
            }
            function pe(e) {
              ge(b.start, e);
            }
            function me(e, t, r, a) {
              e = Number(e);
              if (!(e >= 0 && e < d.length))
                throw new Error(
                  "noUiSlider (" + Me + "): invalid handle number, got: " + e
                );
              de(e, ve(t, e), true, true, a);
              ie("update", e);
              if (r) ie("set", e);
            }
            function be() {
              var e = x.map(b.format.to);
              if (e.length === 1) return e[0];
              return e;
            }
            function xe() {
              ne(Be.aria);
              ne(Be.tooltips);
              for (var e in b.cssClasses) {
                if (!b.cssClasses.hasOwnProperty(e)) continue;
                Le(u, b.cssClasses[e]);
              }
              while (u.firstChild) u.removeChild(u.firstChild);
              delete u.noUiSlider;
            }
            function ye(e) {
              var t = y[e];
              var r = k.getNearbySteps(t);
              var a = x[e];
              var n = r.thisStep.step;
              var i = null;
              if (b.snap)
                return [
                  a - r.stepBefore.startValue || null,
                  r.stepAfter.startValue - a || null,
                ];
              if (n !== false)
                if (a + n > r.stepAfter.startValue)
                  n = r.stepAfter.startValue - a;
              if (a > r.thisStep.startValue) i = r.thisStep.step;
              else if (r.stepBefore.step === false) i = false;
              else i = a - r.stepBefore.highestStep;
              if (t === 100) n = null;
              else if (t === 0) i = null;
              var o = k.countStepDecimals();
              if (n !== null && n !== false) n = Number(n.toFixed(o));
              if (i !== null && i !== false) i = Number(i.toFixed(o));
              return [i, n];
            }
            function we() {
              return d.map(ye);
            }
            function _e(t, e) {
              var r = be();
              var a = [
                "margin",
                "limit",
                "padding",
                "range",
                "animate",
                "snap",
                "step",
                "format",
                "pips",
                "tooltips",
              ];
              a.forEach(function (e) {
                if (t[e] !== undefined) i[e] = t[e];
              });
              var n = We(i);
              a.forEach(function (e) {
                if (t[e] !== undefined) b[e] = n[e];
              });
              k = n.spectrum;
              b.margin = n.margin;
              b.limit = n.limit;
              b.padding = n.padding;
              if (b.pips) H(b.pips);
              else W();
              if (b.tooltips) N();
              else E();
              y = [];
              ge(Ce(t.start) ? t.start : r, e);
            }
            function ke() {
              a = I(u);
              r(b.connect, a);
              te(b.events);
              ge(b.start);
              if (b.pips) H(b.pips);
              if (b.tooltips) N();
              R();
            }
            ke();
            g = {
              destroy: xe,
              steps: we,
              on: re,
              off: ne,
              get: be,
              set: ge,
              setHandle: me,
              reset: pe,
              __moveHandles: function (e, t, r) {
                le(e, t, y, r);
              },
              options: i,
              updateOptions: _e,
              target: u,
              removePips: W,
              removeTooltips: E,
              getTooltips: function () {
                return n;
              },
              getOrigins: function () {
                return f;
              },
              pips: H,
            };
            return g;
          }
          function e(e, t) {
            if (!e || !e.nodeName)
              throw new Error(
                "noUiSlider (" +
                  Me +
                  "): create requires a single element, got: " +
                  e
              );
            if (e.noUiSlider)
              throw new Error(
                "noUiSlider (" + Me + "): Slider was already initialized."
              );
            var r = We(t);
            var a = W(e, r, t);
            e.noUiSlider = a;
            return a;
          }
          return { __spectrum: g, version: Me, cssClasses: m, create: e };
        })
          ? a.apply(t, [])
          : a) || (e.exports = a);
  },
  44: function (e, t, r) {
    r = r(53);
    e.exports = new r();
  },
  49: function (e, t, r) {
    e.exports = r(50);
  },
  50: function (e, t, r) {
    r(51);
  },
  51: function (e, t, r) {
    "use strict";
    r.r(t);
    var a = r(42),
      n = r.n(a),
      t = r(43),
      a = r.n(t),
      t = r(0),
      i = r.n(t),
      t = r(44),
      t = r.n(t);
    function o(e, t) {
      return (
        (function (e) {
          if (Array.isArray(e)) return e;
        })(e) ||
        (function (e, t) {
          var r =
            null == e
              ? null
              : ("undefined" != typeof Symbol && e[Symbol.iterator]) ||
                e["@@iterator"];
          if (null != r) {
            var a,
              n,
              i = [],
              o = !0,
              s = !1;
            try {
              for (
                r = r.call(e);
                !(o = (a = r.next()).done) &&
                (i.push(a.value), !t || i.length !== t);
                o = !0
              );
            } catch (e) {
              (s = !0), (n = e);
            } finally {
              try {
                o || null == r.return || r.return();
              } finally {
                if (s) throw n;
              }
            }
            return i;
          }
        })(e, t) ||
        l(e, t) ||
        (function () {
          throw new TypeError(
            "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
          );
        })()
      );
    }
    function s(e, t) {
      var r =
        ("undefined" != typeof Symbol && e[Symbol.iterator]) || e["@@iterator"];
      if (!r) {
        if (
          Array.isArray(e) ||
          (r = l(e)) ||
          (t && e && "number" == typeof e.length)
        ) {
          r && (e = r);
          var a = 0,
            t = function () {};
          return {
            s: t,
            n: function () {
              return a >= e.length ? { done: !0 } : { done: !1, value: e[a++] };
            },
            e: function (e) {
              throw e;
            },
            f: t,
          };
        }
        throw new TypeError(
          "Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
        );
      }
      var n,
        i = !0,
        o = !1;
      return {
        s: function () {
          r = r.call(e);
        },
        n: function () {
          var e = r.next();
          return (i = e.done), e;
        },
        e: function (e) {
          (o = !0), (n = e);
        },
        f: function () {
          try {
            i || null == r.return || r.return();
          } finally {
            if (o) throw n;
          }
        },
      };
    }
    function l(e, t) {
      if (e) {
        if ("string" == typeof e) return u(e, t);
        var r = Object.prototype.toString.call(e).slice(8, -1);
        return "Map" ===
          (r = "Object" === r && e.constructor ? e.constructor.name : r) ||
          "Set" === r
          ? Array.from(e)
          : "Arguments" === r ||
            /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
          ? u(e, t)
          : void 0;
      }
    }
    function u(e, t) {
      (null == t || t > e.length) && (t = e.length);
      for (var r = 0, a = new Array(t); r < t; r++) a[r] = e[r];
      return a;
    }
    r(56), r(57);
    var r = document.querySelector("#calculatorChart").getContext("2d"),
      f = new n.a(r, {
        type: "bar",
        data: {
          datasets: [
            {
              label: "Profit with leverage",
              backgroundColor: "red",
            },
            {
              label: "Profit without leverage",
              backgroundColor: "rgba(226, 19, 38, 0.8)",
            },
          ],
          labels: ["1%", "3%", "5%", "10%", "20%"],
        },
        options: {
          layout: { padding: { top: 30 } },
          legend: { display: !1, color: "white" },
          scales: {
            yAxes: [
              {
                type: "logarithmic",
                ticks: { display: !1, beginAtZero: !0, max: 2e4, min: 0 },
                gridLines: { display: !1 },
              },
            ],
            xAxes: [
              {
                ticks: {
                  display: !1,
                  fontSize: 20,
                  fontColor: "#131622",
                  fontFamily: "Open Sans",
                },
                gridLines: { display: !1 },
              },
            ],
          },
          showAllTooltips: !0,
          tooltips: {
            callbacks: {
              title: function (e, t) {
                return "";
              },
              label: function (e, t) {
                e = e.yLabel;
                return "$".concat(
                  e.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
                );
              },
            },
            xAlign: "center",
            yAlign: "bottom",
            caretSize: 0,
            backgroundColor: "rgba(255,255,255,0)",
            bodyFontColor: "white",
            bodyFontSize: 14,
            displayColors: !1,
          },
        },
      });
    t.a.register("screen and (max-width:575px)", {
      match: function () {
        (f.options.tooltips.bodyFontSize = 12), f.update();
      },
      unmatch: function () {
        (f.options.tooltips.bodyFontSize = 14), f.update();
      },
    });
    var t = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100],
      c = document.querySelector(".js_nouislider"),
      d = t.length - 1,
      h = {};
    t.forEach(function (e, t) {
      0 === t
        ? (h.min = e)
        : t < d
        ? ((t = "".concat(100 / (d / t), "%")), (h[t] = e))
        : (h.max = e);
    }),
      a.a.create(c, {
        connect: [!0, !1],
        range: h,
        start: 20,
        snap: !0,
        pips: {
          mode: "values",
          values: t,
          density: 20,
          format: {
            to: function (e) {
              return "".concat(e, "x");
            },
          },
        },
      });
    var v = c.querySelectorAll(".noUi-value");
    function g(e) {
      var t,
        r = s(v);
      try {
        for (r.s(); !(t = r.n()).done; )
          t.value.classList.remove("nouislider_pips-active");
      } catch (e) {
        r.e(e);
      } finally {
        r.f();
      }
      var a = Number(v[e].getAttribute("data-value"));
      v[e].classList.add("nouislider_pips-active"), c.noUiSlider.set(a);
    }
    var p,
      m = s(v.entries());
    try {
      for (m.s(); !(p = m.n()).done; ) {
        var b = o(p.value, 2),
          x = b[0],
          y = b[1];
        (y.style.cursor = "pointer"),
          y.addEventListener("click", g.bind(null, x));
      }
    } catch (e) {
      m.e(e);
    } finally {
      m.f();
    }
    var w = [1, 3, 5, 10, 20];
    function _(t) {
      f.data.datasets[0].data = w.map(function (e) {
        return (t / 100) * e * c.noUiSlider.get();
      });
    }
    function k(e) {
      var t = e / 100;
      f.data.datasets[1].data = w.map(function (e) {
        return t * e;
      });
    }
    c.noUiSlider.on("update", function (e, t) {
      var r,
        a = s(c.querySelectorAll(".noUi-value"));
      try {
        for (a.s(); !(r = a.n()).done; )
          r.value.classList.remove("nouislider_pips-active");
      } catch (e) {
        a.e(e);
      } finally {
        a.f();
      }
      t = e[t].split(".")[0];
      c.querySelector(".noUi-value[data-value='".concat(t, "']")).classList.add(
        "nouislider_pips-active"
      );
      t = parseInt(
        i()(".js-calculator__capital-btn.active").find("input").val(),
        10
      );
      _(t), k(t), f.update();
    }),
      i()(".js-calculator__capital-btn").click(function () {
        var e = parseInt(i()(this).find("input").val(), 10);
        k(e), _(e), f.update();
      });
  },
  52: function (e, t) {
    if ("undefined" == typeof moment) {
      var r = new Error("Cannot find module 'moment'");
      throw ((r.code = "MODULE_NOT_FOUND"), r);
    }
    e.exports = moment;
  },
  53: function (e, t, r) {
    var n = r(54),
      r = r(27),
      i = r.each,
      o = r.isFunction,
      s = r.isArray;
    function a() {
      if (!window.matchMedia)
        throw new Error(
          "matchMedia not present, legacy browsers require a polyfill"
        );
      (this.queries = {}),
        (this.browserIsIncapable = !window.matchMedia("only all").matches);
    }
    (a.prototype = {
      constructor: a,
      register: function (t, e, r) {
        var a = this.queries,
          r = r && this.browserIsIncapable;
        return (
          a[t] || (a[t] = new n(t, r)),
          o(e) && (e = { match: e }),
          s(e) || (e = [e]),
          i(e, function (e) {
            o(e) && (e = { match: e }), a[t].addHandler(e);
          }),
          this
        );
      },
      unregister: function (e, t) {
        var r = this.queries[e];
        return (
          r && (t ? r.removeHandler(t) : (r.clear(), delete this.queries[e])),
          this
        );
      },
    }),
      (e.exports = a);
  },
  54: function (e, t, r) {
    var a = r(55),
      n = r(27).each;
    function i(e, t) {
      (this.query = e),
        (this.isUnconditional = t),
        (this.handlers = []),
        (this.mql = window.matchMedia(e));
      var r = this;
      (this.listener = function (e) {
        (r.mql = e.currentTarget || e), r.assess();
      }),
        this.mql.addListener(this.listener);
    }
    (i.prototype = {
      constuctor: i,
      addHandler: function (e) {
        e = new a(e);
        this.handlers.push(e), this.matches() && e.on();
      },
      removeHandler: function (r) {
        var a = this.handlers;
        n(a, function (e, t) {
          if (e.equals(r)) return e.destroy(), !a.splice(t, 1);
        });
      },
      matches: function () {
        return this.mql.matches || this.isUnconditional;
      },
      clear: function () {
        n(this.handlers, function (e) {
          e.destroy();
        }),
          this.mql.removeListener(this.listener),
          (this.handlers.length = 0);
      },
      assess: function () {
        var t = this.matches() ? "on" : "off";
        n(this.handlers, function (e) {
          e[t]();
        });
      },
    }),
      (e.exports = i);
  },
  55: function (e, t) {
    function r(e) {
      (this.options = e).deferSetup || this.setup();
    }
    (r.prototype = {
      constructor: r,
      setup: function () {
        this.options.setup && this.options.setup(), (this.initialised = !0);
      },
      on: function () {
        this.initialised || this.setup(),
          this.options.match && this.options.match();
      },
      off: function () {
        this.options.unmatch && this.options.unmatch();
      },
      destroy: function () {
        this.options.destroy ? this.options.destroy() : this.off();
      },
      equals: function (e) {
        return this.options === e || this.options.match === e;
      },
    }),
      (e.exports = r);
  },
  56: function (e, t) {
    Chart.elements.Rectangle.prototype.draw = function () {
      var e,
        t,
        r,
        a,
        n,
        i,
        o,
        s,
        l,
        u = this._chart.ctx,
        f = this._view,
        c = f.borderWidth,
        d = f.horizontal
          ? ((e = f.base),
            (t = f.x),
            (r = f.y - f.height / 2),
            (a = f.y + f.height / 2),
            (o = e < t ? 1 : -1),
            (i = 1),
            f.borderSkipped || "left")
          : ((e = f.x - f.width / 2),
            (t = f.x + f.width / 2),
            (o = 1),
            (i = (r = f.y) < (a = f.base) ? 1 : -1),
            f.borderSkipped || "bottom");
      c &&
        ((n =
          (c = (l = Math.min(Math.abs(e - t), Math.abs(r - a))) < c ? l : c) /
          2),
        (s = r + ("top" !== d ? n * i : 0)),
        (l = a + ("bottom" !== d ? -n * i : 0)),
        (i = e + ("left" !== d ? n * o : 0)) !==
          (o = t + ("right" !== d ? -n * o : 0)) && ((r = s), (a = l)),
        s !== l && ((e = i), (t = o))),
        u.beginPath(),
        (u.fillStyle = f.backgroundColor),
        (u.strokeStyle = f.borderColor),
        (u.lineWidth = c);
      var h = [
          [e, a],
          [e, r],
          [t, r],
          [t, a],
        ],
        v = ["bottom", "left", "top", "right"].indexOf(d, 0);
      function g(e) {
        return h[(v + e) % 4];
      }
      -1 === v && (v = 0);
      var p = g(0);
      u.moveTo(p[0], p[1]);
      for (var m = 1; m < 4; m++) {
        g(m),
          (nextCornerId = m + 1),
          4 == nextCornerId && (nextCornerId = 0),
          (nextCorner = g(nextCornerId)),
          (width = h[2][0] - h[1][0]),
          (height = h[0][1] - h[1][1]),
          (x = h[1][0]),
          (y = h[1][1]);
        var b = 4;
        (b = b > height / 2 ? height / 2 : b) > width / 2 && (b = width / 2),
          u.moveTo(x + b, y),
          u.lineTo(x + width - b, y),
          u.quadraticCurveTo(x + width, y, x + width, y + b),
          u.lineTo(x + width, y + height - b),
          u.quadraticCurveTo(x + width, y + height, x + width - b, y + height),
          u.lineTo(x + b, y + height),
          u.quadraticCurveTo(x, y + height, x, y + height - b),
          u.lineTo(x, y + b),
          u.quadraticCurveTo(x, y, x + b, y);
      }
      u.fill(), c && u.stroke();
    };
  },
  57: function (e, t) {
    Chart.pluginService.register({
      beforeRender: function (r) {
        r.config.options.showAllTooltips &&
          ((r.pluginTooltips = []),
          r.config.data.datasets.forEach(function (e, t) {
            r.getDatasetMeta(t).data.forEach(function (e, t) {
              r.pluginTooltips.push(
                new Chart.Tooltip(
                  {
                    _chart: r.chart,
                    _chartInstance: r,
                    _data: r.data,
                    _options: r.options.tooltips,
                    _active: [e],
                  },
                  r
                )
              );
            });
          }),
          (r.options.tooltips.enabled = !1));
      },
      afterDraw: function (e, t) {
        if (e.config.options.showAllTooltips) {
          if (!e.allTooltipsOnce) {
            if (1 !== t) return;
            e.allTooltipsOnce = !0;
          }
          (e.options.tooltips.enabled = !0),
            Chart.helpers.each(e.pluginTooltips, function (e) {
              e.initialize(), e.update(), e.pivot(), e.transition(t).draw();
            }),
            (e.options.tooltips.enabled = !1);
        }
      },
    });
  },
});
