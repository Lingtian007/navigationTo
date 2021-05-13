/*
 * @Author: tangyu
 * @Date: 2021-05-12 10:16:47
 * @Company: orientsec.com.cn
 * @Description: 
 */
! function (t, e) {
  "object" == typeof exports && "object" == typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define([], e) : "object" == typeof exports ? exports.actions = e() : t.actions = e()
}(this, function () {
  return function (t) {
    function e(r) {
      if (n[r]) return n[r].exports;
      var o = n[r] = {
        i: r,
        l: !1,
        exports: {}
      };
      return t[r].call(o.exports, o, o.exports, e), o.l = !0, o.exports
    }
    var n = {};
    return e.m = t, e.c = n, e.i = function (t) {
      return t
    }, e.d = function (t, n, r) {
      e.o(t, n) || Object.defineProperty(t, n, {
        configurable: !1,
        enumerable: !0,
        get: r
      })
    }, e.n = function (t) {
      var n = t && t.__esModule ? function () {
        return t.default
      } : function () {
        return t
      };
      return e.d(n, "a", n), n
    }, e.o = function (t, e) {
      return Object.prototype.hasOwnProperty.call(t, e)
    }, e.p = "", e(e.s = 0)
  }([function (t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
      value: !0
    });
    var r = {
        wx: !1,
        my: !1,
        swan: !1,
        tt: !1,
        qq: !1,
        ft: !1
      },
      o = function () {
        try {
          r.wx = wx
        } catch (t) {
          r.wx = !1
        }
        try {
          r.my = my
        } catch (t) {
          r.my = !1
        }
        try {
          r.swan = swan
        } catch (t) {
          r.swan = !1
        }
        try {
          r.tt = tt
        } catch (t) {
          r.tt = !1
        }
        try {
          r.qq = qq
        } catch (t) {
          r.qq = !1
        }
        try {
          r.ft = ft
        } catch (t) {
          r.ft = !1
        }
      },
      a = function (t) {
        o(), r.wx ? wx.miniProgram.navigateTo(t) : r.my ? my.navigateTo(t) : r.swan ? swan.webView.navigateTo(t) : r.tt ? tt.miniProgram.navigateTo(t) : r.qq ? qq.miniProgram.navigateTo(t) : r.ft && (t.url = t.url.replace("..", "pages"), ft.miniProgram.navigateTo(t))
      },
      i = function (t) {
        o(), r.wx ? wx.miniProgram.postMessage(t) : r.my ? my.postMessage(t) : r.swan ? swan.webView.postMessage(t) : r.tt ? tt.miniProgram.postMessage(t) : r.qq ? qq.miniProgram.postMessage(t) : r.ft && ft.miniProgram.postMessage(t)
      };
    e.navigateTo = a, e.postMessage = i
  }])
});