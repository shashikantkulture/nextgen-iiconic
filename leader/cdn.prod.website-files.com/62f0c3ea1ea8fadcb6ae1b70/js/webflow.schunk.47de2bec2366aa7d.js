(self.webpackChunk = self.webpackChunk || []).push([
  ["746"],
  {
    5487: function () {
      "use strict";
      window.tram = (function (e) {
        function t(e, t) {
          return new U.Bare().init(e, t);
        }
        function n(e) {
          var t = parseInt(e.slice(1), 16);
          return [(t >> 16) & 255, (t >> 8) & 255, 255 & t];
        }
        function a(e, t, n) {
          return (
            "#" + (0x1000000 | (e << 16) | (t << 8) | n).toString(16).slice(1)
          );
        }
        function i() {}
        function o(e, t, n) {
          if ((void 0 !== t && (n = t), void 0 === e)) return n;
          var a = n;
          return (
            $.test(e) || !K.test(e)
              ? (a = parseInt(e, 10))
              : K.test(e) && (a = 1e3 * parseFloat(e)),
            0 > a && (a = 0),
            a == a ? a : n
          );
        }
        function l(e) {
          Q.debug && window && window.console.warn(e);
        }
        var d,
          r,
          c,
          s = (function (e, t, n) {
            function a(e) {
              return "object" == typeof e;
            }
            function i(e) {
              return "function" == typeof e;
            }
            function o() {}
            return function l(d, r) {
              function c() {
                var e = new s();
                return i(e.init) && e.init.apply(e, arguments), e;
              }
              function s() {}
              r === n && ((r = d), (d = Object)), (c.Bare = s);
              var u,
                f = (o[e] = d[e]),
                p = (s[e] = c[e] = new o());
              return (
                (p.constructor = c),
                (c.mixin = function (t) {
                  return (s[e] = c[e] = l(c, t)[e]), c;
                }),
                (c.open = function (e) {
                  if (
                    ((u = {}),
                    i(e) ? (u = e.call(c, p, f, c, d)) : a(e) && (u = e),
                    a(u))
                  )
                    for (var n in u) t.call(u, n) && (p[n] = u[n]);
                  return i(p.init) || (p.init = d), c;
                }),
                c.open(r)
              );
            };
          })("prototype", {}.hasOwnProperty),
          u = {
            ease: [
              "ease",
              function (e, t, n, a) {
                var i = (e /= a) * e,
                  o = i * e;
                return (
                  t +
                  n *
                    (-2.75 * o * i + 11 * i * i + -15.5 * o + 8 * i + 0.25 * e)
                );
              },
            ],
            "ease-in": [
              "ease-in",
              function (e, t, n, a) {
                var i = (e /= a) * e,
                  o = i * e;
                return t + n * (-1 * o * i + 3 * i * i + -3 * o + 2 * i);
              },
            ],
            "ease-out": [
              "ease-out",
              function (e, t, n, a) {
                var i = (e /= a) * e,
                  o = i * e;
                return (
                  t +
                  n *
                    (0.3 * o * i + -1.6 * i * i + 2.2 * o + -1.8 * i + 1.9 * e)
                );
              },
            ],
            "ease-in-out": [
              "ease-in-out",
              function (e, t, n, a) {
                var i = (e /= a) * e,
                  o = i * e;
                return t + n * (2 * o * i + -5 * i * i + 2 * o + 2 * i);
              },
            ],
            linear: [
              "linear",
              function (e, t, n, a) {
                return (n * e) / a + t;
              },
            ],
            "ease-in-quad": [
              "cubic-bezier(0.550, 0.085, 0.680, 0.530)",
              function (e, t, n, a) {
                return n * (e /= a) * e + t;
              },
            ],
            "ease-out-quad": [
              "cubic-bezier(0.250, 0.460, 0.450, 0.940)",
              function (e, t, n, a) {
                return -n * (e /= a) * (e - 2) + t;
              },
            ],
            "ease-in-out-quad": [
              "cubic-bezier(0.455, 0.030, 0.515, 0.955)",
              function (e, t, n, a) {
                return (e /= a / 2) < 1
                  ? (n / 2) * e * e + t
                  : (-n / 2) * (--e * (e - 2) - 1) + t;
              },
            ],
            "ease-in-cubic": [
              "cubic-bezier(0.550, 0.055, 0.675, 0.190)",
              function (e, t, n, a) {
                return n * (e /= a) * e * e + t;
              },
            ],
            "ease-out-cubic": [
              "cubic-bezier(0.215, 0.610, 0.355, 1)",
              function (e, t, n, a) {
                return n * ((e = e / a - 1) * e * e + 1) + t;
              },
            ],
            "ease-in-out-cubic": [
              "cubic-bezier(0.645, 0.045, 0.355, 1)",
              function (e, t, n, a) {
                return (e /= a / 2) < 1
                  ? (n / 2) * e * e * e + t
                  : (n / 2) * ((e -= 2) * e * e + 2) + t;
              },
            ],
            "ease-in-quart": [
              "cubic-bezier(0.895, 0.030, 0.685, 0.220)",
              function (e, t, n, a) {
                return n * (e /= a) * e * e * e + t;
              },
            ],
            "ease-out-quart": [
              "cubic-bezier(0.165, 0.840, 0.440, 1)",
              function (e, t, n, a) {
                return -n * ((e = e / a - 1) * e * e * e - 1) + t;
              },
            ],
            "ease-in-out-quart": [
              "cubic-bezier(0.770, 0, 0.175, 1)",
              function (e, t, n, a) {
                return (e /= a / 2) < 1
                  ? (n / 2) * e * e * e * e + t
                  : (-n / 2) * ((e -= 2) * e * e * e - 2) + t;
              },
            ],
            "ease-in-quint": [
              "cubic-bezier(0.755, 0.050, 0.855, 0.060)",
              function (e, t, n, a) {
                return n * (e /= a) * e * e * e * e + t;
              },
            ],
            "ease-out-quint": [
              "cubic-bezier(0.230, 1, 0.320, 1)",
              function (e, t, n, a) {
                return n * ((e = e / a - 1) * e * e * e * e + 1) + t;
              },
            ],
            "ease-in-out-quint": [
              "cubic-bezier(0.860, 0, 0.070, 1)",
              function (e, t, n, a) {
                return (e /= a / 2) < 1
                  ? (n / 2) * e * e * e * e * e + t
                  : (n / 2) * ((e -= 2) * e * e * e * e + 2) + t;
              },
            ],
            "ease-in-sine": [
              "cubic-bezier(0.470, 0, 0.745, 0.715)",
              function (e, t, n, a) {
                return -n * Math.cos((e / a) * (Math.PI / 2)) + n + t;
              },
            ],
            "ease-out-sine": [
              "cubic-bezier(0.390, 0.575, 0.565, 1)",
              function (e, t, n, a) {
                return n * Math.sin((e / a) * (Math.PI / 2)) + t;
              },
            ],
            "ease-in-out-sine": [
              "cubic-bezier(0.445, 0.050, 0.550, 0.950)",
              function (e, t, n, a) {
                return (-n / 2) * (Math.cos((Math.PI * e) / a) - 1) + t;
              },
            ],
            "ease-in-expo": [
              "cubic-bezier(0.950, 0.050, 0.795, 0.035)",
              function (e, t, n, a) {
                return 0 === e ? t : n * Math.pow(2, 10 * (e / a - 1)) + t;
              },
            ],
            "ease-out-expo": [
              "cubic-bezier(0.190, 1, 0.220, 1)",
              function (e, t, n, a) {
                return e === a
                  ? t + n
                  : n * (-Math.pow(2, (-10 * e) / a) + 1) + t;
              },
            ],
            "ease-in-out-expo": [
              "cubic-bezier(1, 0, 0, 1)",
              function (e, t, n, a) {
                return 0 === e
                  ? t
                  : e === a
                  ? t + n
                  : (e /= a / 2) < 1
                  ? (n / 2) * Math.pow(2, 10 * (e - 1)) + t
                  : (n / 2) * (-Math.pow(2, -10 * --e) + 2) + t;
              },
            ],
            "ease-in-circ": [
              "cubic-bezier(0.600, 0.040, 0.980, 0.335)",
              function (e, t, n, a) {
                return -n * (Math.sqrt(1 - (e /= a) * e) - 1) + t;
              },
            ],
            "ease-out-circ": [
              "cubic-bezier(0.075, 0.820, 0.165, 1)",
              function (e, t, n, a) {
                return n * Math.sqrt(1 - (e = e / a - 1) * e) + t;
              },
            ],
            "ease-in-out-circ": [
              "cubic-bezier(0.785, 0.135, 0.150, 0.860)",
              function (e, t, n, a) {
                return (e /= a / 2) < 1
                  ? (-n / 2) * (Math.sqrt(1 - e * e) - 1) + t
                  : (n / 2) * (Math.sqrt(1 - (e -= 2) * e) + 1) + t;
              },
            ],
            "ease-in-back": [
              "cubic-bezier(0.600, -0.280, 0.735, 0.045)",
              function (e, t, n, a, i) {
                return (
                  void 0 === i && (i = 1.70158),
                  n * (e /= a) * e * ((i + 1) * e - i) + t
                );
              },
            ],
            "ease-out-back": [
              "cubic-bezier(0.175, 0.885, 0.320, 1.275)",
              function (e, t, n, a, i) {
                return (
                  void 0 === i && (i = 1.70158),
                  n * ((e = e / a - 1) * e * ((i + 1) * e + i) + 1) + t
                );
              },
            ],
            "ease-in-out-back": [
              "cubic-bezier(0.680, -0.550, 0.265, 1.550)",
              function (e, t, n, a, i) {
                return (
                  void 0 === i && (i = 1.70158),
                  (e /= a / 2) < 1
                    ? (n / 2) * e * e * (((i *= 1.525) + 1) * e - i) + t
                    : (n / 2) *
                        ((e -= 2) * e * (((i *= 1.525) + 1) * e + i) + 2) +
                      t
                );
              },
            ],
          },
          f = {
            "ease-in-back": "cubic-bezier(0.600, 0, 0.735, 0.045)",
            "ease-out-back": "cubic-bezier(0.175, 0.885, 0.320, 1)",
            "ease-in-out-back": "cubic-bezier(0.680, 0, 0.265, 1)",
          },
          p = window,
          I = "bkwld-tram",
          E = /[\-\.0-9]/g,
          y = /[A-Z]/,
          T = "number",
          g = /^(rgb|#)/,
          m = /(em|cm|mm|in|pt|pc|px)$/,
          b = /(em|cm|mm|in|pt|pc|px|%)$/,
          O = /(deg|rad|turn)$/,
          v = "unitless",
          A = /(all|none) 0s ease 0s/,
          R = /^(width|height)$/,
          _ = document.createElement("a"),
          S = ["Webkit", "Moz", "O", "ms"],
          h = ["-webkit-", "-moz-", "-o-", "-ms-"],
          L = function (e) {
            if (e in _.style) return { dom: e, css: e };
            var t,
              n,
              a = "",
              i = e.split("-");
            for (t = 0; t < i.length; t++)
              a += i[t].charAt(0).toUpperCase() + i[t].slice(1);
            for (t = 0; t < S.length; t++)
              if ((n = S[t] + a) in _.style) return { dom: n, css: h[t] + e };
          },
          N = (t.support = {
            bind: Function.prototype.bind,
            transform: L("transform"),
            transition: L("transition"),
            backface: L("backface-visibility"),
            timing: L("transition-timing-function"),
          });
        if (N.transition) {
          var C = N.timing.dom;
          if (((_.style[C] = u["ease-in-back"][0]), !_.style[C]))
            for (var G in f) u[G][0] = f[G];
        }
        var P = (t.frame =
            (d =
              p.requestAnimationFrame ||
              p.webkitRequestAnimationFrame ||
              p.mozRequestAnimationFrame ||
              p.oRequestAnimationFrame ||
              p.msRequestAnimationFrame) && N.bind
              ? d.bind(p)
              : function (e) {
                  p.setTimeout(e, 16);
                }),
          M = (t.now =
            (c =
              (r = p.performance) &&
              (r.now || r.webkitNow || r.msNow || r.mozNow)) && N.bind
              ? c.bind(r)
              : Date.now ||
                function () {
                  return +new Date();
                }),
          x = s(function (t) {
            function n(e, t) {
              var n = (function (e) {
                  for (var t = -1, n = e ? e.length : 0, a = []; ++t < n; ) {
                    var i = e[t];
                    i && a.push(i);
                  }
                  return a;
                })(("" + e).split(" ")),
                a = n[0];
              t = t || {};
              var i = j[a];
              if (!i) return l("Unsupported property: " + a);
              if (!t.weak || !this.props[a]) {
                var o = i[0],
                  d = this.props[a];
                return (
                  d || (d = this.props[a] = new o.Bare()),
                  d.init(this.$el, n, i, t),
                  d
                );
              }
            }
            function a(e, t, a) {
              if (e) {
                var l = typeof e;
                if (
                  (t ||
                    (this.timer && this.timer.destroy(),
                    (this.queue = []),
                    (this.active = !1)),
                  "number" == l && t)
                )
                  return (
                    (this.timer = new D({
                      duration: e,
                      context: this,
                      complete: i,
                    })),
                    void (this.active = !0)
                  );
                if ("string" == l && t) {
                  switch (e) {
                    case "hide":
                      r.call(this);
                      break;
                    case "stop":
                      d.call(this);
                      break;
                    case "redraw":
                      c.call(this);
                      break;
                    default:
                      n.call(this, e, a && a[1]);
                  }
                  return i.call(this);
                }
                if ("function" == l) return void e.call(this, this);
                if ("object" == l) {
                  var f = 0;
                  u.call(
                    this,
                    e,
                    function (e, t) {
                      e.span > f && (f = e.span), e.stop(), e.animate(t);
                    },
                    function (e) {
                      "wait" in e && (f = o(e.wait, 0));
                    }
                  ),
                    s.call(this),
                    f > 0 &&
                      ((this.timer = new D({ duration: f, context: this })),
                      (this.active = !0),
                      t && (this.timer.complete = i));
                  var p = this,
                    I = !1,
                    E = {};
                  P(function () {
                    u.call(p, e, function (e) {
                      e.active && ((I = !0), (E[e.name] = e.nextStyle));
                    }),
                      I && p.$el.css(E);
                  });
                }
              }
            }
            function i() {
              if (
                (this.timer && this.timer.destroy(),
                (this.active = !1),
                this.queue.length)
              ) {
                var e = this.queue.shift();
                a.call(this, e.options, !0, e.args);
              }
            }
            function d(e) {
              var t;
              this.timer && this.timer.destroy(),
                (this.queue = []),
                (this.active = !1),
                "string" == typeof e
                  ? ((t = {})[e] = 1)
                  : (t = "object" == typeof e && null != e ? e : this.props),
                u.call(this, t, f),
                s.call(this);
            }
            function r() {
              d.call(this), (this.el.style.display = "none");
            }
            function c() {
              this.el.offsetHeight;
            }
            function s() {
              var e,
                t,
                n = [];
              for (e in (this.upstream && n.push(this.upstream), this.props))
                (t = this.props[e]).active && n.push(t.string);
              (n = n.join(",")),
                this.style !== n &&
                  ((this.style = n), (this.el.style[N.transition.dom] = n));
            }
            function u(e, t, a) {
              var i,
                o,
                l,
                d,
                r = t !== f,
                c = {};
              for (i in e)
                (l = e[i]),
                  i in H
                    ? (c.transform || (c.transform = {}), (c.transform[i] = l))
                    : (y.test(i) &&
                        (i = i.replace(/[A-Z]/g, function (e) {
                          return "-" + e.toLowerCase();
                        })),
                      i in j ? (c[i] = l) : (d || (d = {}), (d[i] = l)));
              for (i in c) {
                if (((l = c[i]), !(o = this.props[i]))) {
                  if (!r) continue;
                  o = n.call(this, i);
                }
                t.call(this, o, l);
              }
              a && d && a.call(this, d);
            }
            function f(e) {
              e.stop();
            }
            function p(e, t) {
              e.set(t);
            }
            function E(e) {
              this.$el.css(e);
            }
            function T(e, n) {
              t[e] = function () {
                return this.children
                  ? g.call(this, n, arguments)
                  : (this.el && n.apply(this, arguments), this);
              };
            }
            function g(e, t) {
              var n,
                a = this.children.length;
              for (n = 0; a > n; n++) e.apply(this.children[n], t);
              return this;
            }
            (t.init = function (t) {
              if (
                ((this.$el = e(t)),
                (this.el = this.$el[0]),
                (this.props = {}),
                (this.queue = []),
                (this.style = ""),
                (this.active = !1),
                Q.keepInherited && !Q.fallback)
              ) {
                var n = W(this.el, "transition");
                n && !A.test(n) && (this.upstream = n);
              }
              N.backface &&
                Q.hideBackface &&
                z(this.el, N.backface.css, "hidden");
            }),
              T("add", n),
              T("start", a),
              T("wait", function (e) {
                (e = o(e, 0)),
                  this.active
                    ? this.queue.push({ options: e })
                    : ((this.timer = new D({
                        duration: e,
                        context: this,
                        complete: i,
                      })),
                      (this.active = !0));
              }),
              T("then", function (e) {
                return this.active
                  ? (this.queue.push({ options: e, args: arguments }),
                    void (this.timer.complete = i))
                  : l(
                      "No active transition timer. Use start() or wait() before then()."
                    );
              }),
              T("next", i),
              T("stop", d),
              T("set", function (e) {
                d.call(this, e), u.call(this, e, p, E);
              }),
              T("show", function (e) {
                "string" != typeof e && (e = "block"),
                  (this.el.style.display = e);
              }),
              T("hide", r),
              T("redraw", c),
              T("destroy", function () {
                d.call(this),
                  e.removeData(this.el, I),
                  (this.$el = this.el = null);
              });
          }),
          U = s(x, function (t) {
            function n(t, n) {
              var a = e.data(t, I) || e.data(t, I, new x.Bare());
              return a.el || a.init(t), n ? a.start(n) : a;
            }
            t.init = function (t, a) {
              var i = e(t);
              if (!i.length) return this;
              if (1 === i.length) return n(i[0], a);
              var o = [];
              return (
                i.each(function (e, t) {
                  o.push(n(t, a));
                }),
                (this.children = o),
                this
              );
            };
          }),
          w = s(function (e) {
            function t() {
              var e = this.get();
              this.update("auto");
              var t = this.get();
              return this.update(e), t;
            }
            (e.init = function (e, t, n, a) {
              (this.$el = e), (this.el = e[0]);
              var i,
                l,
                d,
                r = t[0];
              n[2] && (r = n[2]),
                Y[r] && (r = Y[r]),
                (this.name = r),
                (this.type = n[1]),
                (this.duration = o(t[1], this.duration, 500)),
                (this.ease =
                  ((i = t[2]),
                  (l = this.ease),
                  (d = "ease"),
                  void 0 !== l && (d = l),
                  i in u ? i : d)),
                (this.delay = o(t[3], this.delay, 0)),
                (this.span = this.duration + this.delay),
                (this.active = !1),
                (this.nextStyle = null),
                (this.auto = R.test(this.name)),
                (this.unit = a.unit || this.unit || Q.defaultUnit),
                (this.angle = a.angle || this.angle || Q.defaultAngle),
                Q.fallback || a.fallback
                  ? (this.animate = this.fallback)
                  : ((this.animate = this.transition),
                    (this.string =
                      this.name +
                      " " +
                      this.duration +
                      "ms" +
                      ("ease" != this.ease ? " " + u[this.ease][0] : "") +
                      (this.delay ? " " + this.delay + "ms" : "")));
            }),
              (e.set = function (e) {
                (e = this.convert(e, this.type)), this.update(e), this.redraw();
              }),
              (e.transition = function (e) {
                (this.active = !0),
                  (e = this.convert(e, this.type)),
                  this.auto &&
                    ("auto" == this.el.style[this.name] &&
                      (this.update(this.get()), this.redraw()),
                    "auto" == e && (e = t.call(this))),
                  (this.nextStyle = e);
              }),
              (e.fallback = function (e) {
                var n =
                  this.el.style[this.name] ||
                  this.convert(this.get(), this.type);
                (e = this.convert(e, this.type)),
                  this.auto &&
                    ("auto" == n && (n = this.convert(this.get(), this.type)),
                    "auto" == e && (e = t.call(this))),
                  (this.tween = new B({
                    from: n,
                    to: e,
                    duration: this.duration,
                    delay: this.delay,
                    ease: this.ease,
                    update: this.update,
                    context: this,
                  }));
              }),
              (e.get = function () {
                return W(this.el, this.name);
              }),
              (e.update = function (e) {
                z(this.el, this.name, e);
              }),
              (e.stop = function () {
                (this.active || this.nextStyle) &&
                  ((this.active = !1),
                  (this.nextStyle = null),
                  z(this.el, this.name, this.get()));
                var e = this.tween;
                e && e.context && e.destroy();
              }),
              (e.convert = function (e, t) {
                if ("auto" == e && this.auto) return e;
                var n,
                  i,
                  o = "number" == typeof e,
                  d = "string" == typeof e;
                switch (t) {
                  case T:
                    if (o) return e;
                    if (d && "" === e.replace(E, "")) return +e;
                    i = "number(unitless)";
                    break;
                  case g:
                    if (d) {
                      if ("" === e && this.original) return this.original;
                      if (t.test(e))
                        return "#" == e.charAt(0) && 7 == e.length
                          ? e
                          : ((n = /rgba?\((\d+),\s*(\d+),\s*(\d+)/.exec(e))
                              ? a(n[1], n[2], n[3])
                              : e
                            ).replace(/#(\w)(\w)(\w)$/, "#$1$1$2$2$3$3");
                    }
                    i = "hex or rgb string";
                    break;
                  case m:
                    if (o) return e + this.unit;
                    if (d && t.test(e)) return e;
                    i = "number(px) or string(unit)";
                    break;
                  case b:
                    if (o) return e + this.unit;
                    if (d && t.test(e)) return e;
                    i = "number(px) or string(unit or %)";
                    break;
                  case O:
                    if (o) return e + this.angle;
                    if (d && t.test(e)) return e;
                    i = "number(deg) or string(angle)";
                    break;
                  case v:
                    if (o || (d && b.test(e))) return e;
                    i = "number(unitless) or string(unit or %)";
                }
                return (
                  l(
                    "Type warning: Expected: [" +
                      i +
                      "] Got: [" +
                      typeof e +
                      "] " +
                      e
                  ),
                  e
                );
              }),
              (e.redraw = function () {
                this.el.offsetHeight;
              });
          }),
          V = s(w, function (e, t) {
            e.init = function () {
              t.init.apply(this, arguments),
                this.original || (this.original = this.convert(this.get(), g));
            };
          }),
          F = s(w, function (e, t) {
            (e.init = function () {
              t.init.apply(this, arguments), (this.animate = this.fallback);
            }),
              (e.get = function () {
                return this.$el[this.name]();
              }),
              (e.update = function (e) {
                this.$el[this.name](e);
              });
          }),
          k = s(w, function (e, t) {
            function n(e, t) {
              var n, a, i, o, l;
              for (n in e)
                (i = (o = H[n])[0]),
                  (a = o[1] || n),
                  (l = this.convert(e[n], i)),
                  t.call(this, a, l, i);
            }
            (e.init = function () {
              t.init.apply(this, arguments),
                this.current ||
                  ((this.current = {}),
                  H.perspective &&
                    Q.perspective &&
                    ((this.current.perspective = Q.perspective),
                    z(this.el, this.name, this.style(this.current)),
                    this.redraw()));
            }),
              (e.set = function (e) {
                n.call(this, e, function (e, t) {
                  this.current[e] = t;
                }),
                  z(this.el, this.name, this.style(this.current)),
                  this.redraw();
              }),
              (e.transition = function (e) {
                var t = this.values(e);
                this.tween = new X({
                  current: this.current,
                  values: t,
                  duration: this.duration,
                  delay: this.delay,
                  ease: this.ease,
                });
                var n,
                  a = {};
                for (n in this.current) a[n] = n in t ? t[n] : this.current[n];
                (this.active = !0), (this.nextStyle = this.style(a));
              }),
              (e.fallback = function (e) {
                var t = this.values(e);
                this.tween = new X({
                  current: this.current,
                  values: t,
                  duration: this.duration,
                  delay: this.delay,
                  ease: this.ease,
                  update: this.update,
                  context: this,
                });
              }),
              (e.update = function () {
                z(this.el, this.name, this.style(this.current));
              }),
              (e.style = function (e) {
                var t,
                  n = "";
                for (t in e) n += t + "(" + e[t] + ") ";
                return n;
              }),
              (e.values = function (e) {
                var t,
                  a = {};
                return (
                  n.call(this, e, function (e, n, i) {
                    (a[e] = n),
                      void 0 === this.current[e] &&
                        ((t = 0),
                        ~e.indexOf("scale") && (t = 1),
                        (this.current[e] = this.convert(t, i)));
                  }),
                  a
                );
              });
          }),
          B = s(function (t) {
            function o() {
              var e,
                t,
                n,
                a = r.length;
              if (a)
                for (P(o), t = M(), e = a; e--; ) (n = r[e]) && n.render(t);
            }
            var d = { ease: u.ease[1], from: 0, to: 1 };
            (t.init = function (e) {
              (this.duration = e.duration || 0), (this.delay = e.delay || 0);
              var t = e.ease || d.ease;
              u[t] && (t = u[t][1]),
                "function" != typeof t && (t = d.ease),
                (this.ease = t),
                (this.update = e.update || i),
                (this.complete = e.complete || i),
                (this.context = e.context || this),
                (this.name = e.name);
              var n = e.from,
                a = e.to;
              void 0 === n && (n = d.from),
                void 0 === a && (a = d.to),
                (this.unit = e.unit || ""),
                "number" == typeof n && "number" == typeof a
                  ? ((this.begin = n), (this.change = a - n))
                  : this.format(a, n),
                (this.value = this.begin + this.unit),
                (this.start = M()),
                !1 !== e.autoplay && this.play();
            }),
              (t.play = function () {
                this.active ||
                  (this.start || (this.start = M()),
                  (this.active = !0),
                  1 === r.push(this) && P(o));
              }),
              (t.stop = function () {
                var t, n;
                this.active &&
                  ((this.active = !1),
                  (n = e.inArray(this, r)) >= 0 &&
                    ((t = r.slice(n + 1)),
                    (r.length = n),
                    t.length && (r = r.concat(t))));
              }),
              (t.render = function (e) {
                var t,
                  n = e - this.start;
                if (this.delay) {
                  if (n <= this.delay) return;
                  n -= this.delay;
                }
                if (n < this.duration) {
                  var i,
                    o,
                    l = this.ease(n, 0, 1, this.duration);
                  return (
                    (t = this.startRGB
                      ? ((i = this.startRGB),
                        (o = this.endRGB),
                        a(
                          i[0] + l * (o[0] - i[0]),
                          i[1] + l * (o[1] - i[1]),
                          i[2] + l * (o[2] - i[2])
                        ))
                      : Math.round((this.begin + l * this.change) * c) / c),
                    (this.value = t + this.unit),
                    void this.update.call(this.context, this.value)
                  );
                }
                (t = this.endHex || this.begin + this.change),
                  (this.value = t + this.unit),
                  this.update.call(this.context, this.value),
                  this.complete.call(this.context),
                  this.destroy();
              }),
              (t.format = function (e, t) {
                if (((t += ""), "#" == (e += "").charAt(0)))
                  return (
                    (this.startRGB = n(t)),
                    (this.endRGB = n(e)),
                    (this.endHex = e),
                    (this.begin = 0),
                    void (this.change = 1)
                  );
                if (!this.unit) {
                  var a = t.replace(E, "");
                  a !== e.replace(E, "") &&
                    l("Units do not match [tween]: " + t + ", " + e),
                    (this.unit = a);
                }
                (t = parseFloat(t)),
                  (e = parseFloat(e)),
                  (this.begin = this.value = t),
                  (this.change = e - t);
              }),
              (t.destroy = function () {
                this.stop(),
                  (this.context = null),
                  (this.ease = this.update = this.complete = i);
              });
            var r = [],
              c = 1e3;
          }),
          D = s(B, function (e) {
            (e.init = function (e) {
              (this.duration = e.duration || 0),
                (this.complete = e.complete || i),
                (this.context = e.context),
                this.play();
            }),
              (e.render = function (e) {
                e - this.start < this.duration ||
                  (this.complete.call(this.context), this.destroy());
              });
          }),
          X = s(B, function (e, t) {
            (e.init = function (e) {
              var t, n;
              for (t in ((this.context = e.context),
              (this.update = e.update),
              (this.tweens = []),
              (this.current = e.current),
              e.values))
                (n = e.values[t]),
                  this.current[t] !== n &&
                    this.tweens.push(
                      new B({
                        name: t,
                        from: this.current[t],
                        to: n,
                        duration: e.duration,
                        delay: e.delay,
                        ease: e.ease,
                        autoplay: !1,
                      })
                    );
              this.play();
            }),
              (e.render = function (e) {
                var t,
                  n,
                  a = this.tweens.length,
                  i = !1;
                for (t = a; t--; )
                  (n = this.tweens[t]).context &&
                    (n.render(e), (this.current[n.name] = n.value), (i = !0));
                return i
                  ? void (this.update && this.update.call(this.context))
                  : this.destroy();
              }),
              (e.destroy = function () {
                if ((t.destroy.call(this), this.tweens)) {
                  var e;
                  for (e = this.tweens.length; e--; ) this.tweens[e].destroy();
                  (this.tweens = null), (this.current = null);
                }
              });
          }),
          Q = (t.config = {
            debug: !1,
            defaultUnit: "px",
            defaultAngle: "deg",
            keepInherited: !1,
            hideBackface: !1,
            perspective: "",
            fallback: !N.transition,
            agentTests: [],
          });
        (t.fallback = function (e) {
          if (!N.transition) return (Q.fallback = !0);
          Q.agentTests.push("(" + e + ")");
          var t = RegExp(Q.agentTests.join("|"), "i");
          Q.fallback = t.test(navigator.userAgent);
        }),
          t.fallback("6.0.[2-5] Safari"),
          (t.tween = function (e) {
            return new B(e);
          }),
          (t.delay = function (e, t, n) {
            return new D({ complete: t, duration: e, context: n });
          }),
          (e.fn.tram = function (e) {
            return t.call(null, this, e);
          });
        var z = e.style,
          W = e.css,
          Y = { transform: N.transform && N.transform.css },
          j = {
            color: [V, g],
            background: [V, g, "background-color"],
            "outline-color": [V, g],
            "border-color": [V, g],
            "border-top-color": [V, g],
            "border-right-color": [V, g],
            "border-bottom-color": [V, g],
            "border-left-color": [V, g],
            "border-width": [w, m],
            "border-top-width": [w, m],
            "border-right-width": [w, m],
            "border-bottom-width": [w, m],
            "border-left-width": [w, m],
            "border-spacing": [w, m],
            "letter-spacing": [w, m],
            margin: [w, m],
            "margin-top": [w, m],
            "margin-right": [w, m],
            "margin-bottom": [w, m],
            "margin-left": [w, m],
            padding: [w, m],
            "padding-top": [w, m],
            "padding-right": [w, m],
            "padding-bottom": [w, m],
            "padding-left": [w, m],
            "outline-width": [w, m],
            opacity: [w, T],
            top: [w, b],
            right: [w, b],
            bottom: [w, b],
            left: [w, b],
            "font-size": [w, b],
            "text-indent": [w, b],
            "word-spacing": [w, b],
            width: [w, b],
            "min-width": [w, b],
            "max-width": [w, b],
            height: [w, b],
            "min-height": [w, b],
            "max-height": [w, b],
            "line-height": [w, v],
            "scroll-top": [F, T, "scrollTop"],
            "scroll-left": [F, T, "scrollLeft"],
          },
          H = {};
        N.transform &&
          ((j.transform = [k]),
          (H = {
            x: [b, "translateX"],
            y: [b, "translateY"],
            rotate: [O],
            rotateX: [O],
            rotateY: [O],
            scale: [T],
            scaleX: [T],
            scaleY: [T],
            skew: [O],
            skewX: [O],
            skewY: [O],
          })),
          N.transform &&
            N.backface &&
            ((H.z = [b, "translateZ"]),
            (H.rotateZ = [O]),
            (H.scaleZ = [T]),
            (H.perspective = [m]));
        var $ = /ms/,
          K = /s|\./;
        return (e.tram = t);
      })(window.jQuery);
    },
    5756: function (e, t, n) {
      "use strict";
      var a,
        i,
        o,
        l,
        d,
        r,
        c,
        s,
        u,
        f,
        p,
        I,
        E,
        y,
        T,
        g,
        m,
        b,
        O,
        v,
        A = window.$,
        R = n(5487) && A.tram;
      ((a = {}).VERSION = "1.6.0-Webflow"),
        (i = {}),
        (o = Array.prototype),
        (l = Object.prototype),
        (d = Function.prototype),
        o.push,
        (r = o.slice),
        o.concat,
        l.toString,
        (c = l.hasOwnProperty),
        (s = o.forEach),
        (u = o.map),
        o.reduce,
        o.reduceRight,
        (f = o.filter),
        o.every,
        (p = o.some),
        (I = o.indexOf),
        o.lastIndexOf,
        (E = Object.keys),
        d.bind,
        (y =
          a.each =
          a.forEach =
            function (e, t, n) {
              if (null == e) return e;
              if (s && e.forEach === s) e.forEach(t, n);
              else if (e.length === +e.length) {
                for (var o = 0, l = e.length; o < l; o++)
                  if (t.call(n, e[o], o, e) === i) return;
              } else
                for (var d = a.keys(e), o = 0, l = d.length; o < l; o++)
                  if (t.call(n, e[d[o]], d[o], e) === i) return;
              return e;
            }),
        (a.map = a.collect =
          function (e, t, n) {
            var a = [];
            return null == e
              ? a
              : u && e.map === u
              ? e.map(t, n)
              : (y(e, function (e, i, o) {
                  a.push(t.call(n, e, i, o));
                }),
                a);
          }),
        (a.find = a.detect =
          function (e, t, n) {
            var a;
            return (
              T(e, function (e, i, o) {
                if (t.call(n, e, i, o)) return (a = e), !0;
              }),
              a
            );
          }),
        (a.filter = a.select =
          function (e, t, n) {
            var a = [];
            return null == e
              ? a
              : f && e.filter === f
              ? e.filter(t, n)
              : (y(e, function (e, i, o) {
                  t.call(n, e, i, o) && a.push(e);
                }),
                a);
          }),
        (T =
          a.some =
          a.any =
            function (e, t, n) {
              t || (t = a.identity);
              var o = !1;
              return null == e
                ? o
                : p && e.some === p
                ? e.some(t, n)
                : (y(e, function (e, a, l) {
                    if (o || (o = t.call(n, e, a, l))) return i;
                  }),
                  !!o);
            }),
        (a.contains = a.include =
          function (e, t) {
            return (
              null != e &&
              (I && e.indexOf === I
                ? -1 != e.indexOf(t)
                : T(e, function (e) {
                    return e === t;
                  }))
            );
          }),
        (a.delay = function (e, t) {
          var n = r.call(arguments, 2);
          return setTimeout(function () {
            return e.apply(null, n);
          }, t);
        }),
        (a.defer = function (e) {
          return a.delay.apply(a, [e, 1].concat(r.call(arguments, 1)));
        }),
        (a.throttle = function (e) {
          var t, n, a;
          return function () {
            t ||
              ((t = !0),
              (n = arguments),
              (a = this),
              R.frame(function () {
                (t = !1), e.apply(a, n);
              }));
          };
        }),
        (a.debounce = function (e, t, n) {
          var i,
            o,
            l,
            d,
            r,
            c = function () {
              var s = a.now() - d;
              s < t
                ? (i = setTimeout(c, t - s))
                : ((i = null), n || ((r = e.apply(l, o)), (l = o = null)));
            };
          return function () {
            (l = this), (o = arguments), (d = a.now());
            var s = n && !i;
            return (
              i || (i = setTimeout(c, t)),
              s && ((r = e.apply(l, o)), (l = o = null)),
              r
            );
          };
        }),
        (a.defaults = function (e) {
          if (!a.isObject(e)) return e;
          for (var t = 1, n = arguments.length; t < n; t++) {
            var i = arguments[t];
            for (var o in i) void 0 === e[o] && (e[o] = i[o]);
          }
          return e;
        }),
        (a.keys = function (e) {
          if (!a.isObject(e)) return [];
          if (E) return E(e);
          var t = [];
          for (var n in e) a.has(e, n) && t.push(n);
          return t;
        }),
        (a.has = function (e, t) {
          return c.call(e, t);
        }),
        (a.isObject = function (e) {
          return e === Object(e);
        }),
        (a.now =
          Date.now ||
          function () {
            return new Date().getTime();
          }),
        (a.templateSettings = {
          evaluate: /<%([\s\S]+?)%>/g,
          interpolate: /<%=([\s\S]+?)%>/g,
          escape: /<%-([\s\S]+?)%>/g,
        }),
        (g = /(.)^/),
        (m = {
          "'": "'",
          "\\": "\\",
          "\r": "r",
          "\n": "n",
          "\u2028": "u2028",
          "\u2029": "u2029",
        }),
        (b = /\\|'|\r|\n|\u2028|\u2029/g),
        (O = function (e) {
          return "\\" + m[e];
        }),
        (v = /^\s*(\w|\$)+\s*$/),
        (a.template = function (e, t, n) {
          !t && n && (t = n);
          var i,
            o = RegExp(
              [
                ((t = a.defaults({}, t, a.templateSettings)).escape || g)
                  .source,
                (t.interpolate || g).source,
                (t.evaluate || g).source,
              ].join("|") + "|$",
              "g"
            ),
            l = 0,
            d = "__p+='";
          e.replace(o, function (t, n, a, i, o) {
            return (
              (d += e.slice(l, o).replace(b, O)),
              (l = o + t.length),
              n
                ? (d += "'+\n((__t=(" + n + "))==null?'':_.escape(__t))+\n'")
                : a
                ? (d += "'+\n((__t=(" + a + "))==null?'':__t)+\n'")
                : i && (d += "';\n" + i + "\n__p+='"),
              t
            );
          }),
            (d += "';\n");
          var r = t.variable;
          if (r) {
            if (!v.test(r))
              throw Error("variable is not a bare identifier: " + r);
          } else (d = "with(obj||{}){\n" + d + "}\n"), (r = "obj");
          d =
            "var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\n" +
            d +
            "return __p;\n";
          try {
            i = Function(t.variable || "obj", "_", d);
          } catch (e) {
            throw ((e.source = d), e);
          }
          var c = function (e) {
            return i.call(this, e, a);
          };
          return (c.source = "function(" + r + "){\n" + d + "}"), c;
        }),
        (e.exports = a);
    },
    9461: function (e, t, n) {
      "use strict";
      var a = n(3949);
      a.define(
        "brand",
        (e.exports = function (e) {
          var t,
            n = {},
            i = document,
            o = e("html"),
            l = e("body"),
            d = window.location,
            r = /PhantomJS/i.test(navigator.userAgent),
            c =
              "fullscreenchange webkitfullscreenchange mozfullscreenchange msfullscreenchange";
          function s() {
            var n =
              i.fullScreen ||
              i.mozFullScreen ||
              i.webkitIsFullScreen ||
              i.msFullscreenElement ||
              !!i.webkitFullscreenElement;
            e(t).attr("style", n ? "display: none !important;" : "");
          }
          function u() {
            var e = l.children(".w-webflow-badge"),
              n = e.length && e.get(0) === t,
              i = a.env("editor");
            if (n) {
              i && e.remove();
              return;
            }
            e.length && e.remove(), i || l.append(t);
          }
          return (
            (n.ready = function () {
              var n,
                a,
                l,
                f = o.attr("data-wf-status"),
                p = o.attr("data-wf-domain") || "";
              /\.webflow\.io$/i.test(p) && d.hostname !== p && (f = !0),
                f &&
                  !r &&
                  ((t =
                    t ||
                    ((n = e('<a class="w-webflow-badge"></a>').attr(
                      "href",
                      "https://webflow.com?utm_campaign=brandjs"
                    )),
                    (a = e("<img>")
                      .attr(
                        "src",
                        "https://d3e54v103j8qbb.cloudfront.net/img/webflow-badge-icon-d2.89e12c322e.svg"
                      )
                      .attr("alt", "")
                      .css({ marginRight: "4px", width: "26px" })),
                    (l = e("<img>")
                      .attr(
                        "src",
                        "https://d3e54v103j8qbb.cloudfront.net/img/webflow-badge-text-d2.c82cec3b78.svg"
                      )
                      .attr("alt", "Made in Webflow")),
                    n.append(a, l),
                    n[0])),
                  u(),
                  setTimeout(u, 500),
                  e(i).off(c, s).on(c, s));
            }),
            n
          );
        })
      );
    },
    322: function (e, t, n) {
      "use strict";
      var a = n(3949);
      a.define(
        "edit",
        (e.exports = function (e, t, n) {
          if (
            ((n = n || {}),
            (a.env("test") || a.env("frame")) &&
              !n.fixture &&
              !(function () {
                try {
                  return !!(window.top.__Cypress__ || window.PLAYWRIGHT_TEST);
                } catch (e) {
                  return !1;
                }
              })())
          )
            return { exit: 1 };
          var i,
            o = e(window),
            l = e(document.documentElement),
            d = document.location,
            r = "hashchange",
            c =
              n.load ||
              function () {
                var t, n, a;
                (i = !0),
                  (window.WebflowEditor = !0),
                  o.off(r, u),
                  (t = function (t) {
                    var n;
                    e.ajax({
                      url: p("https://editor-api.webflow.com/api/editor/view"),
                      data: { siteId: l.attr("data-wf-site") },
                      xhrFields: { withCredentials: !0 },
                      dataType: "json",
                      crossDomain: !0,
                      success:
                        ((n = t),
                        function (t) {
                          var a, i, o;
                          if (!t)
                            return void console.error(
                              "Could not load editor data"
                            );
                          (t.thirdPartyCookiesSupported = n),
                            (i =
                              (a = t.scriptPath).indexOf("//") >= 0
                                ? a
                                : p("https://editor-api.webflow.com" + a)),
                            (o = function () {
                              window.WebflowEditor(t);
                            }),
                            e
                              .ajax({
                                type: "GET",
                                url: i,
                                dataType: "script",
                                cache: !0,
                              })
                              .then(o, f);
                        }),
                    });
                  }),
                  ((n = window.document.createElement("iframe")).src =
                    "https://webflow.com/site/third-party-cookie-check.html"),
                  (n.style.display = "none"),
                  (n.sandbox = "allow-scripts allow-same-origin"),
                  (a = function (e) {
                    "WF_third_party_cookies_unsupported" === e.data
                      ? (I(n, a), t(!1))
                      : "WF_third_party_cookies_supported" === e.data &&
                        (I(n, a), t(!0));
                  }),
                  (n.onerror = function () {
                    I(n, a), t(!1);
                  }),
                  window.addEventListener("message", a, !1),
                  window.document.body.appendChild(n);
              },
            s = !1;
          try {
            s =
              localStorage &&
              localStorage.getItem &&
              localStorage.getItem("WebflowEditor");
          } catch (e) {}
          function u() {
            !i && /\?edit/.test(d.hash) && c();
          }
          function f(e, t, n) {
            throw (console.error("Could not load editor script: " + t), n);
          }
          function p(e) {
            return e.replace(/([^:])\/\//g, "$1/");
          }
          function I(e, t) {
            window.removeEventListener("message", t, !1), e.remove();
          }
          return (
            /[?&](update)(?:[=&?]|$)/.test(d.search) || /\?update$/.test(d.href)
              ? (function () {
                  var e = document.documentElement,
                    t = e.getAttribute("data-wf-site"),
                    n = e.getAttribute("data-wf-page"),
                    a = e.getAttribute("data-wf-item-slug"),
                    i = e.getAttribute("data-wf-collection"),
                    o = e.getAttribute("data-wf-domain");
                  if (t && n) {
                    var l = "pageId=" + n + "&mode=edit";
                    (l += "&simulateRole=editor&utm_source=legacy_editor"),
                      a &&
                        i &&
                        o &&
                        (l +=
                          "&domain=" +
                          encodeURIComponent(o) +
                          "&itemSlug=" +
                          encodeURIComponent(a) +
                          "&collectionId=" +
                          i),
                      (window.location.href =
                        "https://webflow.com/external/designer/" + t + "?" + l);
                  }
                })()
              : s
              ? c()
              : d.search
              ? (/[?&](edit)(?:[=&?]|$)/.test(d.search) ||
                  /\?edit$/.test(d.href)) &&
                c()
              : o.on(r, u).triggerHandler(r),
            {}
          );
        })
      );
    },
    2338: function (e, t, n) {
      "use strict";
      n(3949).define(
        "focus-visible",
        (e.exports = function () {
          return {
            ready: function () {
              if ("undefined" != typeof document)
                try {
                  document.querySelector(":focus-visible");
                } catch (e) {
                  !(function (e) {
                    var t = !0,
                      n = !1,
                      a = null,
                      i = {
                        text: !0,
                        search: !0,
                        url: !0,
                        tel: !0,
                        email: !0,
                        password: !0,
                        number: !0,
                        date: !0,
                        month: !0,
                        week: !0,
                        time: !0,
                        datetime: !0,
                        "datetime-local": !0,
                      };
                    function o(e) {
                      return (
                        !!e &&
                        e !== document &&
                        "HTML" !== e.nodeName &&
                        "BODY" !== e.nodeName &&
                        "classList" in e &&
                        "contains" in e.classList
                      );
                    }
                    function l(e) {
                      e.getAttribute("data-wf-focus-visible") ||
                        e.setAttribute("data-wf-focus-visible", "true");
                    }
                    function d() {
                      t = !1;
                    }
                    function r() {
                      document.addEventListener("mousemove", c),
                        document.addEventListener("mousedown", c),
                        document.addEventListener("mouseup", c),
                        document.addEventListener("pointermove", c),
                        document.addEventListener("pointerdown", c),
                        document.addEventListener("pointerup", c),
                        document.addEventListener("touchmove", c),
                        document.addEventListener("touchstart", c),
                        document.addEventListener("touchend", c);
                    }
                    function c(e) {
                      (e.target.nodeName &&
                        "html" === e.target.nodeName.toLowerCase()) ||
                        ((t = !1),
                        document.removeEventListener("mousemove", c),
                        document.removeEventListener("mousedown", c),
                        document.removeEventListener("mouseup", c),
                        document.removeEventListener("pointermove", c),
                        document.removeEventListener("pointerdown", c),
                        document.removeEventListener("pointerup", c),
                        document.removeEventListener("touchmove", c),
                        document.removeEventListener("touchstart", c),
                        document.removeEventListener("touchend", c));
                    }
                    document.addEventListener(
                      "keydown",
                      function (n) {
                        n.metaKey ||
                          n.altKey ||
                          n.ctrlKey ||
                          (o(e.activeElement) && l(e.activeElement), (t = !0));
                      },
                      !0
                    ),
                      document.addEventListener("mousedown", d, !0),
                      document.addEventListener("pointerdown", d, !0),
                      document.addEventListener("touchstart", d, !0),
                      document.addEventListener(
                        "visibilitychange",
                        function () {
                          "hidden" === document.visibilityState &&
                            (n && (t = !0), r());
                        },
                        !0
                      ),
                      r(),
                      e.addEventListener(
                        "focus",
                        function (e) {
                          if (o(e.target)) {
                            var n, a, d;
                            (t ||
                              ((a = (n = e.target).type),
                              ("INPUT" === (d = n.tagName) &&
                                i[a] &&
                                !n.readOnly) ||
                                ("TEXTAREA" === d && !n.readOnly) ||
                                n.isContentEditable ||
                                0)) &&
                              l(e.target);
                          }
                        },
                        !0
                      ),
                      e.addEventListener(
                        "blur",
                        function (e) {
                          if (
                            o(e.target) &&
                            e.target.hasAttribute("data-wf-focus-visible")
                          ) {
                            var t;
                            (n = !0),
                              window.clearTimeout(a),
                              (a = window.setTimeout(function () {
                                n = !1;
                              }, 100)),
                              (t = e.target).getAttribute(
                                "data-wf-focus-visible"
                              ) && t.removeAttribute("data-wf-focus-visible");
                          }
                        },
                        !0
                      );
                  })(document);
                }
            },
          };
        })
      );
    },
    8334: function (e, t, n) {
      "use strict";
      var a = n(3949);
      a.define(
        "focus",
        (e.exports = function () {
          var e = [],
            t = !1;
          function n(n) {
            t &&
              (n.preventDefault(),
              n.stopPropagation(),
              n.stopImmediatePropagation(),
              e.unshift(n));
          }
          function i(n) {
            var a, i;
            (i = (a = n.target).tagName),
              ((/^a$/i.test(i) && null != a.href) ||
                (/^(button|textarea)$/i.test(i) && !0 !== a.disabled) ||
                (/^input$/i.test(i) &&
                  /^(button|reset|submit|radio|checkbox)$/i.test(a.type) &&
                  !a.disabled) ||
                (!/^(button|input|textarea|select|a)$/i.test(i) &&
                  !Number.isNaN(Number.parseFloat(a.tabIndex))) ||
                /^audio$/i.test(i) ||
                (/^video$/i.test(i) && !0 === a.controls)) &&
                ((t = !0),
                setTimeout(() => {
                  for (t = !1, n.target.focus(); e.length > 0; ) {
                    var a = e.pop();
                    a.target.dispatchEvent(new MouseEvent(a.type, a));
                  }
                }, 0));
          }
          return {
            ready: function () {
              "undefined" != typeof document &&
                document.body.hasAttribute("data-wf-focus-within") &&
                a.env.safari &&
                (document.addEventListener("mousedown", i, !0),
                document.addEventListener("mouseup", n, !0),
                document.addEventListener("click", n, !0));
            },
          };
        })
      );
    },
    7199: function (e) {
      "use strict";
      var t = window.jQuery,
        n = {},
        a = [],
        i = ".w-ix",
        o = {
          reset: function (e, t) {
            t.__wf_intro = null;
          },
          intro: function (e, a) {
            a.__wf_intro ||
              ((a.__wf_intro = !0), t(a).triggerHandler(n.types.INTRO));
          },
          outro: function (e, a) {
            a.__wf_intro &&
              ((a.__wf_intro = null), t(a).triggerHandler(n.types.OUTRO));
          },
        };
      (n.triggers = {}),
        (n.types = { INTRO: "w-ix-intro" + i, OUTRO: "w-ix-outro" + i }),
        (n.init = function () {
          for (var e = a.length, i = 0; i < e; i++) {
            var l = a[i];
            l[0](0, l[1]);
          }
          (a = []), t.extend(n.triggers, o);
        }),
        (n.async = function () {
          for (var e in o) {
            var t = o[e];
            o.hasOwnProperty(e) &&
              (n.triggers[e] = function (e, n) {
                a.push([t, n]);
              });
          }
        }),
        n.async(),
        (e.exports = n);
    },
    5134: function (e, t, n) {
      "use strict";
      var a = n(7199);
      function i(e, t, n) {
        var a = document.createEvent("CustomEvent");
        a.initCustomEvent(t, !0, !0, n || null), e.dispatchEvent(a);
      }
      var o = window.jQuery,
        l = {},
        d = ".w-ix";
      (l.triggers = {}),
        (l.types = { INTRO: "w-ix-intro" + d, OUTRO: "w-ix-outro" + d }),
        o.extend(l.triggers, {
          reset: function (e, t) {
            a.triggers.reset(e, t);
          },
          intro: function (e, t) {
            a.triggers.intro(e, t), i(t, "COMPONENT_ACTIVE");
          },
          outro: function (e, t) {
            a.triggers.outro(e, t), i(t, "COMPONENT_INACTIVE");
          },
        }),
        (l.dispatchCustomEvent = i),
        (e.exports = l);
    },
    941: function (e, t, n) {
      "use strict";
      var a = n(3949),
        i = n(6011);
      i.setEnv(a.env),
        a.define(
          "ix2",
          (e.exports = function () {
            return i;
          })
        );
    },
    3949: function (e, t, n) {
      "use strict";
      var a,
        i,
        o = {},
        l = {},
        d = [],
        r = window.Webflow || [],
        c = window.jQuery,
        s = c(window),
        u = c(document),
        f = c.isFunction,
        p = (o._ = n(5756)),
        I = (o.tram = n(5487) && c.tram),
        E = !1,
        y = !1;
      function T(e) {
        o.env() &&
          (f(e.design) && s.on("__wf_design", e.design),
          f(e.preview) && s.on("__wf_preview", e.preview)),
          f(e.destroy) && s.on("__wf_destroy", e.destroy),
          e.ready &&
            f(e.ready) &&
            (function (e) {
              if (E) return e.ready();
              p.contains(d, e.ready) || d.push(e.ready);
            })(e);
      }
      function g(e) {
        var t;
        f(e.design) && s.off("__wf_design", e.design),
          f(e.preview) && s.off("__wf_preview", e.preview),
          f(e.destroy) && s.off("__wf_destroy", e.destroy),
          e.ready &&
            f(e.ready) &&
            ((t = e),
            (d = p.filter(d, function (e) {
              return e !== t.ready;
            })));
      }
      (I.config.hideBackface = !1),
        (I.config.keepInherited = !0),
        (o.define = function (e, t, n) {
          l[e] && g(l[e]);
          var a = (l[e] = t(c, p, n) || {});
          return T(a), a;
        }),
        (o.require = function (e) {
          return l[e];
        }),
        (o.push = function (e) {
          if (E) {
            f(e) && e();
            return;
          }
          r.push(e);
        }),
        (o.env = function (e) {
          var t = window.__wf_design,
            n = void 0 !== t;
          return e
            ? "design" === e
              ? n && t
              : "preview" === e
              ? n && !t
              : "slug" === e
              ? n && window.__wf_slug
              : "editor" === e
              ? window.WebflowEditor
              : "test" === e
              ? window.__wf_test
              : "frame" === e
              ? window !== window.top
              : void 0
            : n;
        });
      var m = navigator.userAgent.toLowerCase(),
        b = (o.env.touch =
          "ontouchstart" in window ||
          (window.DocumentTouch && document instanceof window.DocumentTouch)),
        O = (o.env.chrome =
          /chrome/.test(m) &&
          /Google/.test(navigator.vendor) &&
          parseInt(m.match(/chrome\/(\d+)\./)[1], 10)),
        v = (o.env.ios = /(ipod|iphone|ipad)/.test(m));
      (o.env.safari = /safari/.test(m) && !O && !v),
        b &&
          u.on("touchstart mousedown", function (e) {
            a = e.target;
          }),
        (o.validClick = b
          ? function (e) {
              return e === a || c.contains(e, a);
            }
          : function () {
              return !0;
            });
      var A = "resize.webflow orientationchange.webflow load.webflow",
        R = "scroll.webflow " + A;
      function _(e, t) {
        var n = [],
          a = {};
        return (
          (a.up = p.throttle(function (e) {
            p.each(n, function (t) {
              t(e);
            });
          })),
          e && t && e.on(t, a.up),
          (a.on = function (e) {
            "function" == typeof e && (p.contains(n, e) || n.push(e));
          }),
          (a.off = function (e) {
            if (!arguments.length) {
              n = [];
              return;
            }
            n = p.filter(n, function (t) {
              return t !== e;
            });
          }),
          a
        );
      }
      function S(e) {
        f(e) && e();
      }
      function h() {
        i && (i.reject(), s.off("load", i.resolve)),
          (i = new c.Deferred()),
          s.on("load", i.resolve);
      }
      (o.resize = _(s, A)),
        (o.scroll = _(s, R)),
        (o.redraw = _()),
        (o.location = function (e) {
          window.location = e;
        }),
        o.env() && (o.location = function () {}),
        (o.ready = function () {
          (E = !0),
            y ? ((y = !1), p.each(l, T)) : p.each(d, S),
            p.each(r, S),
            o.resize.up();
        }),
        (o.load = function (e) {
          i.then(e);
        }),
        (o.destroy = function (e) {
          (e = e || {}),
            (y = !0),
            s.triggerHandler("__wf_destroy"),
            null != e.domready && (E = e.domready),
            p.each(l, g),
            o.resize.off(),
            o.scroll.off(),
            o.redraw.off(),
            (d = []),
            (r = []),
            "pending" === i.state() && h();
        }),
        c(o.ready),
        h(),
        (e.exports = window.Webflow = o);
    },
    7624: function (e, t, n) {
      "use strict";
      var a = n(3949);
      a.define(
        "links",
        (e.exports = function (e, t) {
          var n,
            i,
            o,
            l = {},
            d = e(window),
            r = a.env(),
            c = window.location,
            s = document.createElement("a"),
            u = "w--current",
            f = /index\.(html|php)$/,
            p = /\/$/;
          function I() {
            var e = d.scrollTop(),
              n = d.height();
            t.each(i, function (t) {
              if (!t.link.attr("hreflang")) {
                var a = t.link,
                  i = t.sec,
                  o = i.offset().top,
                  l = i.outerHeight(),
                  d = 0.5 * n,
                  r = i.is(":visible") && o + l - d >= e && o + d <= e + n;
                t.active !== r && ((t.active = r), E(a, u, r));
              }
            });
          }
          function E(e, t, n) {
            var a = e.hasClass(t);
            (!n || !a) && (n || a) && (n ? e.addClass(t) : e.removeClass(t));
          }
          return (
            (l.ready =
              l.design =
              l.preview =
                function () {
                  (n = r && a.env("design")),
                    (o = a.env("slug") || c.pathname || ""),
                    a.scroll.off(I),
                    (i = []);
                  for (var t = document.links, l = 0; l < t.length; ++l)
                    !(function (t) {
                      if (!t.getAttribute("hreflang")) {
                        var a =
                          (n && t.getAttribute("href-disabled")) ||
                          t.getAttribute("href");
                        if (((s.href = a), !(a.indexOf(":") >= 0))) {
                          var l = e(t);
                          if (
                            s.hash.length > 1 &&
                            s.host + s.pathname === c.host + c.pathname
                          ) {
                            if (!/^#[a-zA-Z0-9\-\_]+$/.test(s.hash)) return;
                            var d = e(s.hash);
                            d.length && i.push({ link: l, sec: d, active: !1 });
                            return;
                          }
                          "#" !== a &&
                            "" !== a &&
                            E(
                              l,
                              u,
                              (!r && s.href === c.href) ||
                                a === o ||
                                (f.test(a) && p.test(o))
                            );
                        }
                      }
                    })(t[l]);
                  i.length && (a.scroll.on(I), I());
                }),
            l
          );
        })
      );
    },
    286: function (e, t, n) {
      "use strict";
      var a = n(3949);
      a.define(
        "scroll",
        (e.exports = function (e) {
          var t = {
              WF_CLICK_EMPTY: "click.wf-empty-link",
              WF_CLICK_SCROLL: "click.wf-scroll",
            },
            n = window.location,
            i = !(function () {
              try {
                return !!window.frameElement;
              } catch (e) {
                return !0;
              }
            })()
              ? window.history
              : null,
            o = e(window),
            l = e(document),
            d = e(document.body),
            r =
              window.requestAnimationFrame ||
              window.mozRequestAnimationFrame ||
              window.webkitRequestAnimationFrame ||
              function (e) {
                window.setTimeout(e, 15);
              },
            c = a.env("editor") ? ".w-editor-body" : "body",
            s =
              "header, " +
              c +
              " > .header, " +
              c +
              " > .w-nav:not([data-no-scroll])",
            u = 'a[href="#"]',
            f = 'a[href*="#"]:not(.w-tab-link):not(' + u + ")",
            p = document.createElement("style");
          p.appendChild(
            document.createTextNode(
              '.wf-force-outline-none[tabindex="-1"]:focus{outline:none;}'
            )
          );
          var I = /^#[a-zA-Z0-9][\w:.-]*$/;
          let E =
            "function" == typeof window.matchMedia &&
            window.matchMedia("(prefers-reduced-motion: reduce)");
          function y(e, t) {
            var n;
            switch (t) {
              case "add":
                (n = e.attr("tabindex"))
                  ? e.attr("data-wf-tabindex-swap", n)
                  : e.attr("tabindex", "-1");
                break;
              case "remove":
                (n = e.attr("data-wf-tabindex-swap"))
                  ? (e.attr("tabindex", n),
                    e.removeAttr("data-wf-tabindex-swap"))
                  : e.removeAttr("tabindex");
            }
            e.toggleClass("wf-force-outline-none", "add" === t);
          }
          function T(t) {
            var l = t.currentTarget;
            if (
              !(
                a.env("design") ||
                (window.$.mobile && /(?:^|\s)ui-link(?:$|\s)/.test(l.className))
              )
            ) {
              var c =
                I.test(l.hash) && l.host + l.pathname === n.host + n.pathname
                  ? l.hash
                  : "";
              if ("" !== c) {
                var u,
                  f = e(c);
                f.length &&
                  (t && (t.preventDefault(), t.stopPropagation()),
                  (u = c),
                  n.hash !== u &&
                    i &&
                    i.pushState &&
                    !(a.env.chrome && "file:" === n.protocol) &&
                    (i.state && i.state.hash) !== u &&
                    i.pushState({ hash: u }, "", u),
                  window.setTimeout(function () {
                    !(function (t, n) {
                      var a = o.scrollTop(),
                        i = (function (t) {
                          var n = e(s),
                            a =
                              "fixed" === n.css("position")
                                ? n.outerHeight()
                                : 0,
                            i = t.offset().top - a;
                          if ("mid" === t.data("scroll")) {
                            var l = o.height() - a,
                              d = t.outerHeight();
                            d < l && (i -= Math.round((l - d) / 2));
                          }
                          return i;
                        })(t);
                      if (a !== i) {
                        var l = (function (e, t, n) {
                            if (
                              "none" ===
                                document.body.getAttribute(
                                  "data-wf-scroll-motion"
                                ) ||
                              E.matches
                            )
                              return 0;
                            var a = 1;
                            return (
                              d.add(e).each(function (e, t) {
                                var n = parseFloat(
                                  t.getAttribute("data-scroll-time")
                                );
                                !isNaN(n) && n >= 0 && (a = n);
                              }),
                              (472.143 * Math.log(Math.abs(t - n) + 125) -
                                2e3) *
                                a
                            );
                          })(t, a, i),
                          c = Date.now(),
                          u = function () {
                            var e,
                              t,
                              o,
                              d,
                              s,
                              f = Date.now() - c;
                            window.scroll(
                              0,
                              ((e = a),
                              (t = i),
                              (o = f) > (d = l)
                                ? t
                                : e +
                                  (t - e) *
                                    ((s = o / d) < 0.5
                                      ? 4 * s * s * s
                                      : (s - 1) * (2 * s - 2) * (2 * s - 2) +
                                        1))
                            ),
                              f <= l ? r(u) : "function" == typeof n && n();
                          };
                        r(u);
                      }
                    })(f, function () {
                      y(f, "add"),
                        f.get(0).focus({ preventScroll: !0 }),
                        y(f, "remove");
                    });
                  }, 300 * !t));
              }
            }
          }
          return {
            ready: function () {
              var { WF_CLICK_EMPTY: e, WF_CLICK_SCROLL: n } = t;
              l.on(n, f, T),
                l.on(e, u, function (e) {
                  e.preventDefault();
                }),
                document.head.insertBefore(p, document.head.firstChild);
            },
          };
        })
      );
    },
    3695: function (e, t, n) {
      "use strict";
      n(3949).define(
        "touch",
        (e.exports = function (e) {
          var t = {},
            n = window.getSelection;
          function a(t) {
            var a,
              i,
              o = !1,
              l = !1,
              d = Math.min(Math.round(0.04 * window.innerWidth), 40);
            function r(e) {
              var t = e.touches;
              (t && t.length > 1) ||
                ((o = !0),
                t ? ((l = !0), (a = t[0].clientX)) : (a = e.clientX),
                (i = a));
            }
            function c(t) {
              if (o) {
                if (l && "mousemove" === t.type) {
                  t.preventDefault(), t.stopPropagation();
                  return;
                }
                var a,
                  r,
                  c,
                  s,
                  f = t.touches,
                  p = f ? f[0].clientX : t.clientX,
                  I = p - i;
                (i = p),
                  Math.abs(I) > d &&
                    n &&
                    "" === String(n()) &&
                    ((a = "swipe"),
                    (r = t),
                    (c = { direction: I > 0 ? "right" : "left" }),
                    (s = e.Event(a, { originalEvent: r })),
                    e(r.target).trigger(s, c),
                    u());
              }
            }
            function s(e) {
              if (o && ((o = !1), l && "mouseup" === e.type)) {
                e.preventDefault(), e.stopPropagation(), (l = !1);
                return;
              }
            }
            function u() {
              o = !1;
            }
            t.addEventListener("touchstart", r, !1),
              t.addEventListener("touchmove", c, !1),
              t.addEventListener("touchend", s, !1),
              t.addEventListener("touchcancel", u, !1),
              t.addEventListener("mousedown", r, !1),
              t.addEventListener("mousemove", c, !1),
              t.addEventListener("mouseup", s, !1),
              t.addEventListener("mouseout", u, !1),
              (this.destroy = function () {
                t.removeEventListener("touchstart", r, !1),
                  t.removeEventListener("touchmove", c, !1),
                  t.removeEventListener("touchend", s, !1),
                  t.removeEventListener("touchcancel", u, !1),
                  t.removeEventListener("mousedown", r, !1),
                  t.removeEventListener("mousemove", c, !1),
                  t.removeEventListener("mouseup", s, !1),
                  t.removeEventListener("mouseout", u, !1),
                  (t = null);
              });
          }
          return (
            (e.event.special.tap = {
              bindType: "click",
              delegateType: "click",
            }),
            (t.init = function (t) {
              return (t = "string" == typeof t ? e(t).get(0) : t)
                ? new a(t)
                : null;
            }),
            (t.instance = t.init(document)),
            t
          );
        })
      );
    },
    1655: function (e, t, n) {
      "use strict";
      var a = n(3949),
        i = n(5134);
      let o = {
        ARROW_LEFT: 37,
        ARROW_UP: 38,
        ARROW_RIGHT: 39,
        ARROW_DOWN: 40,
        ESCAPE: 27,
        SPACE: 32,
        ENTER: 13,
        HOME: 36,
        END: 35,
      };
      function l(e, t) {
        i.dispatchCustomEvent(e, "IX3_COMPONENT_STATE_CHANGE", {
          component: "navbar",
          state: t,
        });
      }
      a.define(
        "navbar",
        (e.exports = function (e, t) {
          var n,
            d,
            r,
            c,
            s = {},
            u = e.tram,
            f = e(window),
            p = e(document),
            I = t.debounce,
            E = a.env(),
            y = ".w-nav",
            T = "w--open",
            g = "w--nav-dropdown-open",
            m = "w--nav-dropdown-toggle-open",
            b = "w--nav-dropdown-list-open",
            O = "w--nav-link-open",
            v = i.triggers,
            A = e();
          function R() {
            a.resize.off(_);
          }
          function _() {
            d.each(U);
          }
          function S(n, a) {
            var i,
              l,
              d,
              s,
              u,
              I = e(a),
              E = e.data(a, y);
            E ||
              (E = e.data(a, y, {
                open: !1,
                el: I,
                config: {},
                selectedIdx: -1,
              })),
              (E.menu = I.find(".w-nav-menu")),
              (E.links = E.menu.find(".w-nav-link")),
              (E.dropdowns = E.menu.find(".w-dropdown")),
              (E.dropdownToggle = E.menu.find(".w-dropdown-toggle")),
              (E.dropdownList = E.menu.find(".w-dropdown-list")),
              (E.button = I.find(".w-nav-button")),
              (E.container = I.find(".w-container")),
              (E.overlayContainerId = "w-nav-overlay-" + n),
              (E.outside =
                ((i = E).outside && p.off("click" + y, i.outside),
                function (t) {
                  var n = e(t.target);
                  (c && n.closest(".w-editor-bem-EditorOverlay").length) ||
                    x(i, n);
                }));
            var T = I.find(".w-nav-brand");
            T &&
              "/" === T.attr("href") &&
              null == T.attr("aria-label") &&
              T.attr("aria-label", "home"),
              E.button.attr("style", "-webkit-user-select: text;"),
              null == E.button.attr("aria-label") &&
                E.button.attr("aria-label", "menu"),
              E.button.attr("role", "button"),
              E.button.attr("tabindex", "0"),
              E.button.attr("aria-controls", E.overlayContainerId),
              E.button.attr("aria-haspopup", "menu"),
              E.button.attr("aria-expanded", "false"),
              E.el.off(y),
              E.button.off(y),
              E.menu.off(y),
              N(E),
              r
                ? (L(E),
                  E.el.on(
                    "setting" + y,
                    ((l = E),
                    function (e, n) {
                      n = n || {};
                      var a = f.width();
                      N(l),
                        !0 === n.open && k(l, !0),
                        !1 === n.open && D(l, !0),
                        l.open &&
                          t.defer(function () {
                            a !== f.width() && G(l);
                          });
                    })
                  ))
                : ((d = E).overlay ||
                    ((d.overlay = e(
                      '<div class="w-nav-overlay" data-wf-ignore />'
                    ).appendTo(d.el)),
                    d.overlay.attr("id", d.overlayContainerId),
                    (d.parent = d.menu.parent()),
                    D(d, !0)),
                  E.button.on("click" + y, P(E)),
                  E.menu.on("click" + y, "a", M(E)),
                  E.button.on(
                    "keydown" + y,
                    ((s = E),
                    function (e) {
                      switch (e.keyCode) {
                        case o.SPACE:
                        case o.ENTER:
                          return (
                            P(s)(), e.preventDefault(), e.stopPropagation()
                          );
                        case o.ESCAPE:
                          return D(s), e.preventDefault(), e.stopPropagation();
                        case o.ARROW_RIGHT:
                        case o.ARROW_DOWN:
                        case o.HOME:
                        case o.END:
                          if (!s.open)
                            return e.preventDefault(), e.stopPropagation();
                          return (
                            e.keyCode === o.END
                              ? (s.selectedIdx = s.links.length - 1)
                              : (s.selectedIdx = 0),
                            C(s),
                            e.preventDefault(),
                            e.stopPropagation()
                          );
                      }
                    })
                  ),
                  E.el.on(
                    "keydown" + y,
                    ((u = E),
                    function (e) {
                      if (u.open)
                        switch (
                          ((u.selectedIdx = u.links.index(
                            document.activeElement
                          )),
                          e.keyCode)
                        ) {
                          case o.HOME:
                          case o.END:
                            return (
                              e.keyCode === o.END
                                ? (u.selectedIdx = u.links.length - 1)
                                : (u.selectedIdx = 0),
                              C(u),
                              e.preventDefault(),
                              e.stopPropagation()
                            );
                          case o.ESCAPE:
                            return (
                              D(u),
                              u.button.focus(),
                              e.preventDefault(),
                              e.stopPropagation()
                            );
                          case o.ARROW_LEFT:
                          case o.ARROW_UP:
                            return (
                              (u.selectedIdx = Math.max(-1, u.selectedIdx - 1)),
                              C(u),
                              e.preventDefault(),
                              e.stopPropagation()
                            );
                          case o.ARROW_RIGHT:
                          case o.ARROW_DOWN:
                            return (
                              (u.selectedIdx = Math.min(
                                u.links.length - 1,
                                u.selectedIdx + 1
                              )),
                              C(u),
                              e.preventDefault(),
                              e.stopPropagation()
                            );
                        }
                    })
                  )),
              U(n, a);
          }
          function h(t, n) {
            var a = e.data(n, y);
            a && (L(a), e.removeData(n, y));
          }
          function L(e) {
            e.overlay && (D(e, !0), e.overlay.remove(), (e.overlay = null));
          }
          function N(e) {
            var n = {},
              a = e.config || {},
              i = (n.animation = e.el.attr("data-animation") || "default");
            (n.animOver = /^over/.test(i)),
              (n.animDirect = /left$/.test(i) ? -1 : 1),
              a.animation !== i && e.open && t.defer(G, e),
              (n.easing = e.el.attr("data-easing") || "ease"),
              (n.easing2 = e.el.attr("data-easing2") || "ease");
            var o = e.el.attr("data-duration");
            (n.duration = null != o ? Number(o) : 400),
              (n.docHeight = e.el.attr("data-doc-height")),
              (e.config = n);
          }
          function C(e) {
            if (e.links[e.selectedIdx]) {
              var t = e.links[e.selectedIdx];
              t.focus(), M(t);
            }
          }
          function G(e) {
            e.open && (D(e, !0), k(e, !0));
          }
          function P(e) {
            return I(function () {
              e.open ? D(e) : k(e);
            });
          }
          function M(t) {
            return function (n) {
              var i = e(this).attr("href");
              if (!a.validClick(n.currentTarget))
                return void n.preventDefault();
              i && 0 === i.indexOf("#") && t.open && D(t);
            };
          }
          (s.ready =
            s.design =
            s.preview =
              function () {
                (r = E && a.env("design")),
                  (c = a.env("editor")),
                  (n = e(document.body)),
                  (d = p.find(y)).length && (d.each(S), R(), a.resize.on(_));
              }),
            (s.destroy = function () {
              (A = e()), R(), d && d.length && d.each(h);
            });
          var x = I(function (e, t) {
            if (e.open) {
              var n = t.closest(".w-nav-menu");
              e.menu.is(n) || D(e);
            }
          });
          function U(t, n) {
            var a = e.data(n, y),
              i = (a.collapsed = "none" !== a.button.css("display"));
            if ((!a.open || i || r || D(a, !0), a.container.length)) {
              var o,
                l =
                  ("none" === (o = a.container.css(w)) && (o = ""),
                  function (t, n) {
                    (n = e(n)).css(w, ""), "none" === n.css(w) && n.css(w, o);
                  });
              a.links.each(l), a.dropdowns.each(l);
            }
            a.open && B(a);
          }
          var w = "max-width";
          function V(e, t) {
            t.setAttribute("data-nav-menu-open", "");
          }
          function F(e, t) {
            t.removeAttribute("data-nav-menu-open");
          }
          function k(e, t) {
            if (!e.open) {
              (e.open = !0),
                e.menu.each(V),
                e.links.addClass(O),
                e.dropdowns.addClass(g),
                e.dropdownToggle.addClass(m),
                e.dropdownList.addClass(b),
                e.button.addClass(T);
              var n = e.config;
              ("none" === n.animation ||
                !u.support.transform ||
                n.duration <= 0) &&
                (t = !0);
              var i = B(e),
                o = e.menu.outerHeight(!0),
                d = e.menu.outerWidth(!0),
                c = e.el.height(),
                s = e.el[0];
              if (
                (U(0, s),
                v.intro(0, s),
                l(s, "open"),
                a.redraw.up(),
                r || p.on("click" + y, e.outside),
                t)
              )
                return void I();
              var f = "transform " + n.duration + "ms " + n.easing;
              if (
                (e.overlay &&
                  ((A = e.menu.prev()), e.overlay.show().append(e.menu)),
                n.animOver)
              ) {
                u(e.menu)
                  .add(f)
                  .set({ x: n.animDirect * d, height: i })
                  .start({ x: 0 })
                  .then(I),
                  e.overlay && e.overlay.width(d);
                return;
              }
              u(e.menu)
                .add(f)
                .set({ y: -(c + o) })
                .start({ y: 0 })
                .then(I);
            }
            function I() {
              e.button.attr("aria-expanded", "true");
            }
          }
          function B(e) {
            var t = e.config,
              a = t.docHeight ? p.height() : n.height();
            return (
              t.animOver
                ? e.menu.height(a)
                : "fixed" !== e.el.css("position") &&
                  (a -= e.el.outerHeight(!0)),
              e.overlay && e.overlay.height(a),
              a
            );
          }
          function D(e, t) {
            if (e.open) {
              (e.open = !1), e.button.removeClass(T);
              var n = e.config;
              if (
                (("none" === n.animation ||
                  !u.support.transform ||
                  n.duration <= 0) &&
                  (t = !0),
                v.outro(0, e.el[0]),
                l(e.el[0], "close"),
                p.off("click" + y, e.outside),
                t)
              ) {
                u(e.menu).stop(), r();
                return;
              }
              var a = "transform " + n.duration + "ms " + n.easing2,
                i = e.menu.outerHeight(!0),
                o = e.menu.outerWidth(!0),
                d = e.el.height();
              if (n.animOver)
                return void u(e.menu)
                  .add(a)
                  .start({ x: o * n.animDirect })
                  .then(r);
              u(e.menu)
                .add(a)
                .start({ y: -(d + i) })
                .then(r);
            }
            function r() {
              e.menu.height(""),
                u(e.menu).set({ x: 0, y: 0 }),
                e.menu.each(F),
                e.links.removeClass(O),
                e.dropdowns.removeClass(g),
                e.dropdownToggle.removeClass(m),
                e.dropdownList.removeClass(b),
                e.overlay &&
                  e.overlay.children().length &&
                  (A.length
                    ? e.menu.insertAfter(A)
                    : e.menu.prependTo(e.parent),
                  e.overlay.attr("style", "").hide()),
                e.el.triggerHandler("w-close"),
                e.button.attr("aria-expanded", "false");
            }
          }
          return s;
        })
      );
    },
    3946: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var a = {
        actionListPlaybackChanged: function () {
          return W;
        },
        animationFrameChanged: function () {
          return k;
        },
        clearRequested: function () {
          return U;
        },
        elementStateChanged: function () {
          return z;
        },
        eventListenerAdded: function () {
          return w;
        },
        eventStateChanged: function () {
          return F;
        },
        instanceAdded: function () {
          return D;
        },
        instanceRemoved: function () {
          return Q;
        },
        instanceStarted: function () {
          return X;
        },
        mediaQueriesDefined: function () {
          return j;
        },
        parameterChanged: function () {
          return B;
        },
        playbackRequested: function () {
          return M;
        },
        previewRequested: function () {
          return P;
        },
        rawDataImported: function () {
          return L;
        },
        sessionInitialized: function () {
          return N;
        },
        sessionStarted: function () {
          return C;
        },
        sessionStopped: function () {
          return G;
        },
        stopRequested: function () {
          return x;
        },
        testFrameRendered: function () {
          return V;
        },
        viewportWidthChanged: function () {
          return Y;
        },
      };
      for (var i in a)
        Object.defineProperty(t, i, { enumerable: !0, get: a[i] });
      let o = n(7087),
        l = n(9468),
        {
          IX2_RAW_DATA_IMPORTED: d,
          IX2_SESSION_INITIALIZED: r,
          IX2_SESSION_STARTED: c,
          IX2_SESSION_STOPPED: s,
          IX2_PREVIEW_REQUESTED: u,
          IX2_PLAYBACK_REQUESTED: f,
          IX2_STOP_REQUESTED: p,
          IX2_CLEAR_REQUESTED: I,
          IX2_EVENT_LISTENER_ADDED: E,
          IX2_TEST_FRAME_RENDERED: y,
          IX2_EVENT_STATE_CHANGED: T,
          IX2_ANIMATION_FRAME_CHANGED: g,
          IX2_PARAMETER_CHANGED: m,
          IX2_INSTANCE_ADDED: b,
          IX2_INSTANCE_STARTED: O,
          IX2_INSTANCE_REMOVED: v,
          IX2_ELEMENT_STATE_CHANGED: A,
          IX2_ACTION_LIST_PLAYBACK_CHANGED: R,
          IX2_VIEWPORT_WIDTH_CHANGED: _,
          IX2_MEDIA_QUERIES_DEFINED: S,
        } = o.IX2EngineActionTypes,
        { reifyState: h } = l.IX2VanillaUtils,
        L = (e) => ({ type: d, payload: { ...h(e) } }),
        N = ({ hasBoundaryNodes: e, reducedMotion: t }) => ({
          type: r,
          payload: { hasBoundaryNodes: e, reducedMotion: t },
        }),
        C = () => ({ type: c }),
        G = () => ({ type: s }),
        P = ({ rawData: e, defer: t }) => ({
          type: u,
          payload: { defer: t, rawData: e },
        }),
        M = ({
          actionTypeId: e = o.ActionTypeConsts.GENERAL_START_ACTION,
          actionListId: t,
          actionItemId: n,
          eventId: a,
          allowEvents: i,
          immediate: l,
          testManual: d,
          verbose: r,
          rawData: c,
        }) => ({
          type: f,
          payload: {
            actionTypeId: e,
            actionListId: t,
            actionItemId: n,
            testManual: d,
            eventId: a,
            allowEvents: i,
            immediate: l,
            verbose: r,
            rawData: c,
          },
        }),
        x = (e) => ({ type: p, payload: { actionListId: e } }),
        U = () => ({ type: I }),
        w = (e, t) => ({ type: E, payload: { target: e, listenerParams: t } }),
        V = (e = 1) => ({ type: y, payload: { step: e } }),
        F = (e, t) => ({ type: T, payload: { stateKey: e, newState: t } }),
        k = (e, t) => ({ type: g, payload: { now: e, parameters: t } }),
        B = (e, t) => ({ type: m, payload: { key: e, value: t } }),
        D = (e) => ({ type: b, payload: { ...e } }),
        X = (e, t) => ({ type: O, payload: { instanceId: e, time: t } }),
        Q = (e) => ({ type: v, payload: { instanceId: e } }),
        z = (e, t, n, a) => ({
          type: A,
          payload: { elementId: e, actionTypeId: t, current: n, actionItem: a },
        }),
        W = ({ actionListId: e, isPlaying: t }) => ({
          type: R,
          payload: { actionListId: e, isPlaying: t },
        }),
        Y = ({ width: e, mediaQueries: t }) => ({
          type: _,
          payload: { width: e, mediaQueries: t },
        }),
        j = () => ({ type: S });
    },
    6011: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var a,
        i = {
          actions: function () {
            return c;
          },
          destroy: function () {
            return I;
          },
          init: function () {
            return p;
          },
          setEnv: function () {
            return f;
          },
          store: function () {
            return u;
          },
        };
      for (var o in i)
        Object.defineProperty(t, o, { enumerable: !0, get: i[o] });
      let l = n(9516),
        d = (a = n(7243)) && a.__esModule ? a : { default: a },
        r = n(1970),
        c = (function (e, t) {
          if (e && e.__esModule) return e;
          if (null === e || ("object" != typeof e && "function" != typeof e))
            return { default: e };
          var n = s(t);
          if (n && n.has(e)) return n.get(e);
          var a = { __proto__: null },
            i = Object.defineProperty && Object.getOwnPropertyDescriptor;
          for (var o in e)
            if ("default" !== o && Object.prototype.hasOwnProperty.call(e, o)) {
              var l = i ? Object.getOwnPropertyDescriptor(e, o) : null;
              l && (l.get || l.set)
                ? Object.defineProperty(a, o, l)
                : (a[o] = e[o]);
            }
          return (a.default = e), n && n.set(e, a), a;
        })(n(3946));
      function s(e) {
        if ("function" != typeof WeakMap) return null;
        var t = new WeakMap(),
          n = new WeakMap();
        return (s = function (e) {
          return e ? n : t;
        })(e);
      }
      let u = (0, l.createStore)(d.default);
      function f(e) {
        e() && (0, r.observeRequests)(u);
      }
      function p(e) {
        I(), (0, r.startEngine)({ store: u, rawData: e, allowEvents: !0 });
      }
      function I() {
        (0, r.stopEngine)(u);
      }
    },
    5012: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var a = {
        elementContains: function () {
          return m;
        },
        getChildElements: function () {
          return O;
        },
        getClosestElement: function () {
          return A;
        },
        getProperty: function () {
          return I;
        },
        getQuerySelector: function () {
          return y;
        },
        getRefType: function () {
          return R;
        },
        getSiblingElements: function () {
          return v;
        },
        getStyle: function () {
          return p;
        },
        getValidDocument: function () {
          return T;
        },
        isSiblingNode: function () {
          return b;
        },
        matchSelector: function () {
          return E;
        },
        queryDocument: function () {
          return g;
        },
        setStyle: function () {
          return f;
        },
      };
      for (var i in a)
        Object.defineProperty(t, i, { enumerable: !0, get: a[i] });
      let o = n(9468),
        l = n(7087),
        { ELEMENT_MATCHES: d } = o.IX2BrowserSupport,
        {
          IX2_ID_DELIMITER: r,
          HTML_ELEMENT: c,
          PLAIN_OBJECT: s,
          WF_PAGE: u,
        } = l.IX2EngineConstants;
      function f(e, t, n) {
        e.style[t] = n;
      }
      function p(e, t) {
        return t.startsWith("--")
          ? window
              .getComputedStyle(document.documentElement)
              .getPropertyValue(t)
          : e.style instanceof CSSStyleDeclaration
          ? e.style[t]
          : void 0;
      }
      function I(e, t) {
        return e[t];
      }
      function E(e) {
        return (t) => t[d](e);
      }
      function y({ id: e, selector: t }) {
        if (e) {
          let t = e;
          if (-1 !== e.indexOf(r)) {
            let n = e.split(r),
              a = n[0];
            if (((t = n[1]), a !== document.documentElement.getAttribute(u)))
              return null;
          }
          return `[data-w-id="${t}"], [data-w-id^="${t}_instance"]`;
        }
        return t;
      }
      function T(e) {
        return null == e || e === document.documentElement.getAttribute(u)
          ? document
          : null;
      }
      function g(e, t) {
        return Array.prototype.slice.call(
          document.querySelectorAll(t ? e + " " + t : e)
        );
      }
      function m(e, t) {
        return e.contains(t);
      }
      function b(e, t) {
        return e !== t && e.parentNode === t.parentNode;
      }
      function O(e) {
        let t = [];
        for (let n = 0, { length: a } = e || []; n < a; n++) {
          let { children: a } = e[n],
            { length: i } = a;
          if (i) for (let e = 0; e < i; e++) t.push(a[e]);
        }
        return t;
      }
      function v(e = []) {
        let t = [],
          n = [];
        for (let a = 0, { length: i } = e; a < i; a++) {
          let { parentNode: i } = e[a];
          if (!i || !i.children || !i.children.length || -1 !== n.indexOf(i))
            continue;
          n.push(i);
          let o = i.firstElementChild;
          for (; null != o; )
            -1 === e.indexOf(o) && t.push(o), (o = o.nextElementSibling);
        }
        return t;
      }
      let A = Element.prototype.closest
        ? (e, t) => (document.documentElement.contains(e) ? e.closest(t) : null)
        : (e, t) => {
            if (!document.documentElement.contains(e)) return null;
            let n = e;
            do {
              if (n[d] && n[d](t)) return n;
              n = n.parentNode;
            } while (null != n);
            return null;
          };
      function R(e) {
        return null != e && "object" == typeof e
          ? e instanceof Element
            ? c
            : s
          : null;
      }
    },
    1970: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var a = {
        observeRequests: function () {
          return q;
        },
        startActionGroup: function () {
          return eI;
        },
        startEngine: function () {
          return ea;
        },
        stopActionGroup: function () {
          return ep;
        },
        stopAllActionGroups: function () {
          return ef;
        },
        stopEngine: function () {
          return ei;
        },
      };
      for (var i in a)
        Object.defineProperty(t, i, { enumerable: !0, get: a[i] });
      let o = g(n(9777)),
        l = g(n(4738)),
        d = g(n(4659)),
        r = g(n(3452)),
        c = g(n(6633)),
        s = g(n(3729)),
        u = g(n(2397)),
        f = g(n(5082)),
        p = n(7087),
        I = n(9468),
        E = n(3946),
        y = (function (e, t) {
          if (e && e.__esModule) return e;
          if (null === e || ("object" != typeof e && "function" != typeof e))
            return { default: e };
          var n = m(t);
          if (n && n.has(e)) return n.get(e);
          var a = { __proto__: null },
            i = Object.defineProperty && Object.getOwnPropertyDescriptor;
          for (var o in e)
            if ("default" !== o && Object.prototype.hasOwnProperty.call(e, o)) {
              var l = i ? Object.getOwnPropertyDescriptor(e, o) : null;
              l && (l.get || l.set)
                ? Object.defineProperty(a, o, l)
                : (a[o] = e[o]);
            }
          return (a.default = e), n && n.set(e, a), a;
        })(n(5012)),
        T = g(n(8955));
      function g(e) {
        return e && e.__esModule ? e : { default: e };
      }
      function m(e) {
        if ("function" != typeof WeakMap) return null;
        var t = new WeakMap(),
          n = new WeakMap();
        return (m = function (e) {
          return e ? n : t;
        })(e);
      }
      let b = Object.keys(p.QuickEffectIds),
        O = (e) => b.includes(e),
        {
          COLON_DELIMITER: v,
          BOUNDARY_SELECTOR: A,
          HTML_ELEMENT: R,
          RENDER_GENERAL: _,
          W_MOD_IX: S,
        } = p.IX2EngineConstants,
        {
          getAffectedElements: h,
          getElementId: L,
          getDestinationValues: N,
          observeStore: C,
          getInstanceId: G,
          renderHTMLElement: P,
          clearAllStyles: M,
          getMaxDurationItemIndex: x,
          getComputedStyle: U,
          getInstanceOrigin: w,
          reduceListToGroup: V,
          shouldNamespaceEventParameter: F,
          getNamespacedParameterId: k,
          shouldAllowMediaQuery: B,
          cleanupHTMLElement: D,
          clearObjectCache: X,
          stringifyTarget: Q,
          mediaQueriesEqual: z,
          shallowEqual: W,
        } = I.IX2VanillaUtils,
        {
          isPluginType: Y,
          createPluginInstance: j,
          getPluginDuration: H,
        } = I.IX2VanillaPlugins,
        $ = navigator.userAgent,
        K = $.match(/iPad/i) || $.match(/iPhone/);
      function q(e) {
        C({ store: e, select: ({ ixRequest: e }) => e.preview, onChange: Z }),
          C({
            store: e,
            select: ({ ixRequest: e }) => e.playback,
            onChange: ee,
          }),
          C({ store: e, select: ({ ixRequest: e }) => e.stop, onChange: et }),
          C({ store: e, select: ({ ixRequest: e }) => e.clear, onChange: en });
      }
      function Z({ rawData: e, defer: t }, n) {
        let a = () => {
          ea({ store: n, rawData: e, allowEvents: !0 }), J();
        };
        t ? setTimeout(a, 0) : a();
      }
      function J() {
        document.dispatchEvent(new CustomEvent("IX2_PAGE_UPDATE"));
      }
      function ee(e, t) {
        let {
            actionTypeId: n,
            actionListId: a,
            actionItemId: i,
            eventId: o,
            allowEvents: l,
            immediate: d,
            testManual: r,
            verbose: c = !0,
          } = e,
          { rawData: s } = e;
        if (a && i && s && d) {
          let e = s.actionLists[a];
          e && (s = V({ actionList: e, actionItemId: i, rawData: s }));
        }
        if (
          (ea({ store: t, rawData: s, allowEvents: l, testManual: r }),
          (a && n === p.ActionTypeConsts.GENERAL_START_ACTION) || O(n))
        ) {
          ep({ store: t, actionListId: a }),
            eu({ store: t, actionListId: a, eventId: o });
          let e = eI({
            store: t,
            eventId: o,
            actionListId: a,
            immediate: d,
            verbose: c,
          });
          c &&
            e &&
            t.dispatch(
              (0, E.actionListPlaybackChanged)({
                actionListId: a,
                isPlaying: !d,
              })
            );
        }
      }
      function et({ actionListId: e }, t) {
        e ? ep({ store: t, actionListId: e }) : ef({ store: t }), ei(t);
      }
      function en(e, t) {
        ei(t), M({ store: t, elementApi: y });
      }
      function ea({ store: e, rawData: t, allowEvents: n, testManual: a }) {
        let { ixSession: i } = e.getState();
        if ((t && e.dispatch((0, E.rawDataImported)(t)), !i.active)) {
          (e.dispatch(
            (0, E.sessionInitialized)({
              hasBoundaryNodes: !!document.querySelector(A),
              reducedMotion:
                document.body.hasAttribute("data-wf-ix-vacation") &&
                window.matchMedia("(prefers-reduced-motion)").matches,
            })
          ),
          n) &&
            ((function (e) {
              let { ixData: t } = e.getState(),
                { eventTypeMap: n } = t;
              ed(e),
                (0, u.default)(n, (t, n) => {
                  let a = T.default[n];
                  if (!a)
                    return void console.warn(
                      `IX2 event type not configured: ${n}`
                    );
                  !(function ({ logic: e, store: t, events: n }) {
                    !(function (e) {
                      if (!K) return;
                      let t = {},
                        n = "";
                      for (let a in e) {
                        let { eventTypeId: i, target: o } = e[a],
                          l = y.getQuerySelector(o);
                        t[l] ||
                          ((i === p.EventTypeConsts.MOUSE_CLICK ||
                            i === p.EventTypeConsts.MOUSE_SECOND_CLICK) &&
                            ((t[l] = !0),
                            (n +=
                              l +
                              "{cursor: pointer;touch-action: manipulation;}")));
                      }
                      if (n) {
                        let e = document.createElement("style");
                        (e.textContent = n), document.body.appendChild(e);
                      }
                    })(n);
                    let { types: a, handler: i } = e,
                      { ixData: r } = t.getState(),
                      { actionLists: c } = r,
                      s = er(n, es);
                    if (!(0, d.default)(s)) return;
                    (0, u.default)(s, (e, a) => {
                      let i = n[a],
                        {
                          action: d,
                          id: s,
                          mediaQueries: u = r.mediaQueryKeys,
                        } = i,
                        { actionListId: f } = d.config;
                      z(u, r.mediaQueryKeys) ||
                        t.dispatch((0, E.mediaQueriesDefined)()),
                        d.actionTypeId ===
                          p.ActionTypeConsts.GENERAL_CONTINUOUS_ACTION &&
                          (Array.isArray(i.config)
                            ? i.config
                            : [i.config]
                          ).forEach((n) => {
                            let { continuousParameterGroupId: a } = n,
                              i = (0, l.default)(
                                c,
                                `${f}.continuousParameterGroups`,
                                []
                              ),
                              d = (0, o.default)(i, ({ id: e }) => e === a),
                              r = (n.smoothing || 0) / 100,
                              u = (n.restingState || 0) / 100;
                            d &&
                              e.forEach((e, a) => {
                                !(function ({
                                  store: e,
                                  eventStateKey: t,
                                  eventTarget: n,
                                  eventId: a,
                                  eventConfig: i,
                                  actionListId: o,
                                  parameterGroup: d,
                                  smoothing: r,
                                  restingValue: c,
                                }) {
                                  let { ixData: s, ixSession: u } =
                                      e.getState(),
                                    { events: f } = s,
                                    I = f[a],
                                    { eventTypeId: E } = I,
                                    T = {},
                                    g = {},
                                    m = [],
                                    { continuousActionGroups: b } = d,
                                    { id: O } = d;
                                  F(E, i) && (O = k(t, O));
                                  let R =
                                    u.hasBoundaryNodes && n
                                      ? y.getClosestElement(n, A)
                                      : null;
                                  b.forEach((e) => {
                                    let { keyframe: t, actionItems: a } = e;
                                    a.forEach((e) => {
                                      let { actionTypeId: a } = e,
                                        { target: i } = e.config;
                                      if (!i) return;
                                      let o = i.boundaryMode ? R : null,
                                        l = Q(i) + v + a;
                                      if (
                                        ((g[l] = (function (e = [], t, n) {
                                          let a,
                                            i = [...e];
                                          return (
                                            i.some(
                                              (e, n) =>
                                                e.keyframe === t &&
                                                ((a = n), !0)
                                            ),
                                            null == a &&
                                              ((a = i.length),
                                              i.push({
                                                keyframe: t,
                                                actionItems: [],
                                              })),
                                            i[a].actionItems.push(n),
                                            i
                                          );
                                        })(g[l], t, e)),
                                        !T[l])
                                      ) {
                                        T[l] = !0;
                                        let { config: t } = e;
                                        h({
                                          config: t,
                                          event: I,
                                          eventTarget: n,
                                          elementRoot: o,
                                          elementApi: y,
                                        }).forEach((e) => {
                                          m.push({ element: e, key: l });
                                        });
                                      }
                                    });
                                  }),
                                    m.forEach(({ element: t, key: n }) => {
                                      let i = g[n],
                                        d = (0, l.default)(
                                          i,
                                          "[0].actionItems[0]",
                                          {}
                                        ),
                                        { actionTypeId: s } = d,
                                        u = (
                                          s === p.ActionTypeConsts.PLUGIN_RIVE
                                            ? 0 ===
                                              (
                                                d.config?.target
                                                  ?.selectorGuids || []
                                              ).length
                                            : Y(s)
                                        )
                                          ? j(s)?.(t, d)
                                          : null,
                                        f = N(
                                          {
                                            element: t,
                                            actionItem: d,
                                            elementApi: y,
                                          },
                                          u
                                        );
                                      eE({
                                        store: e,
                                        element: t,
                                        eventId: a,
                                        actionListId: o,
                                        actionItem: d,
                                        destination: f,
                                        continuous: !0,
                                        parameterId: O,
                                        actionGroups: i,
                                        smoothing: r,
                                        restingValue: c,
                                        pluginInstance: u,
                                      });
                                    });
                                })({
                                  store: t,
                                  eventStateKey: s + v + a,
                                  eventTarget: e,
                                  eventId: s,
                                  eventConfig: n,
                                  actionListId: f,
                                  parameterGroup: d,
                                  smoothing: r,
                                  restingValue: u,
                                });
                              });
                          }),
                        (d.actionTypeId ===
                          p.ActionTypeConsts.GENERAL_START_ACTION ||
                          O(d.actionTypeId)) &&
                          eu({ store: t, actionListId: f, eventId: s });
                    });
                    let I = (e) => {
                        let { ixSession: a } = t.getState();
                        ec(s, (o, l, d) => {
                          let c = n[l],
                            s = a.eventState[d],
                            { action: u, mediaQueries: f = r.mediaQueryKeys } =
                              c;
                          if (!B(f, a.mediaQueryKey)) return;
                          let I = (n = {}) => {
                            let a = i(
                              {
                                store: t,
                                element: o,
                                event: c,
                                eventConfig: n,
                                nativeEvent: e,
                                eventStateKey: d,
                              },
                              s
                            );
                            W(a, s) ||
                              t.dispatch((0, E.eventStateChanged)(d, a));
                          };
                          u.actionTypeId ===
                          p.ActionTypeConsts.GENERAL_CONTINUOUS_ACTION
                            ? (Array.isArray(c.config)
                                ? c.config
                                : [c.config]
                              ).forEach(I)
                            : I();
                        });
                      },
                      T = (0, f.default)(I, 12),
                      g = ({ target: e = document, types: n, throttle: a }) => {
                        n.split(" ")
                          .filter(Boolean)
                          .forEach((n) => {
                            let i = a ? T : I;
                            e.addEventListener(n, i),
                              t.dispatch((0, E.eventListenerAdded)(e, [n, i]));
                          });
                      };
                    Array.isArray(a)
                      ? a.forEach(g)
                      : "string" == typeof a && g(e);
                  })({ logic: a, store: e, events: t });
                });
              let { ixSession: a } = e.getState();
              a.eventListeners.length &&
                (function (e) {
                  let t = () => {
                    ed(e);
                  };
                  el.forEach((n) => {
                    window.addEventListener(n, t),
                      e.dispatch((0, E.eventListenerAdded)(window, [n, t]));
                  }),
                    t();
                })(e);
            })(e),
            (function () {
              let { documentElement: e } = document;
              -1 === e.className.indexOf(S) && (e.className += ` ${S}`);
            })(),
            e.getState().ixSession.hasDefinedMediaQueries &&
              C({
                store: e,
                select: ({ ixSession: e }) => e.mediaQueryKey,
                onChange: () => {
                  ei(e),
                    M({ store: e, elementApi: y }),
                    ea({ store: e, allowEvents: !0 }),
                    J();
                },
              }));
          e.dispatch((0, E.sessionStarted)()),
            (function (e, t) {
              let n = (a) => {
                let { ixSession: i, ixParameters: o } = e.getState();
                if (i.active)
                  if ((e.dispatch((0, E.animationFrameChanged)(a, o)), t)) {
                    let t = C({
                      store: e,
                      select: ({ ixSession: e }) => e.tick,
                      onChange: (e) => {
                        n(e), t();
                      },
                    });
                  } else requestAnimationFrame(n);
              };
              n(window.performance.now());
            })(e, a);
        }
      }
      function ei(e) {
        let { ixSession: t } = e.getState();
        if (t.active) {
          let { eventListeners: n } = t;
          n.forEach(eo), X(), e.dispatch((0, E.sessionStopped)());
        }
      }
      function eo({ target: e, listenerParams: t }) {
        e.removeEventListener.apply(e, t);
      }
      let el = ["resize", "orientationchange"];
      function ed(e) {
        let { ixSession: t, ixData: n } = e.getState(),
          a = window.innerWidth;
        if (a !== t.viewportWidth) {
          let { mediaQueries: t } = n;
          e.dispatch(
            (0, E.viewportWidthChanged)({ width: a, mediaQueries: t })
          );
        }
      }
      let er = (e, t) => (0, r.default)((0, s.default)(e, t), c.default),
        ec = (e, t) => {
          (0, u.default)(e, (e, n) => {
            e.forEach((e, a) => {
              t(e, n, n + v + a);
            });
          });
        },
        es = (e) =>
          h({
            config: { target: e.target, targets: e.targets },
            elementApi: y,
          });
      function eu({ store: e, actionListId: t, eventId: n }) {
        let { ixData: a, ixSession: i } = e.getState(),
          { actionLists: o, events: d } = a,
          r = d[n],
          c = o[t];
        if (c && c.useFirstGroupAsInitialState) {
          let o = (0, l.default)(c, "actionItemGroups[0].actionItems", []);
          if (
            !B(
              (0, l.default)(r, "mediaQueries", a.mediaQueryKeys),
              i.mediaQueryKey
            )
          )
            return;
          o.forEach((a) => {
            let { config: i, actionTypeId: o } = a,
              l = h({
                config:
                  i?.target?.useEventTarget === !0 &&
                  i?.target?.objectId == null
                    ? { target: r.target, targets: r.targets }
                    : i,
                event: r,
                elementApi: y,
              }),
              d = Y(o);
            l.forEach((i) => {
              let l = d ? j(o)?.(i, a) : null;
              eE({
                destination: N({ element: i, actionItem: a, elementApi: y }, l),
                immediate: !0,
                store: e,
                element: i,
                eventId: n,
                actionItem: a,
                actionListId: t,
                pluginInstance: l,
              });
            });
          });
        }
      }
      function ef({ store: e }) {
        let { ixInstances: t } = e.getState();
        (0, u.default)(t, (t) => {
          if (!t.continuous) {
            let { actionListId: n, verbose: a } = t;
            ey(t, e),
              a &&
                e.dispatch(
                  (0, E.actionListPlaybackChanged)({
                    actionListId: n,
                    isPlaying: !1,
                  })
                );
          }
        });
      }
      function ep({
        store: e,
        eventId: t,
        eventTarget: n,
        eventStateKey: a,
        actionListId: i,
      }) {
        let { ixInstances: o, ixSession: d } = e.getState(),
          r = d.hasBoundaryNodes && n ? y.getClosestElement(n, A) : null;
        (0, u.default)(o, (n) => {
          let o = (0, l.default)(n, "actionItem.config.target.boundaryMode"),
            d = !a || n.eventStateKey === a;
          if (n.actionListId === i && n.eventId === t && d) {
            if (r && o && !y.elementContains(r, n.element)) return;
            ey(n, e),
              n.verbose &&
                e.dispatch(
                  (0, E.actionListPlaybackChanged)({
                    actionListId: i,
                    isPlaying: !1,
                  })
                );
          }
        });
      }
      function eI({
        store: e,
        eventId: t,
        eventTarget: n,
        eventStateKey: a,
        actionListId: i,
        groupIndex: o = 0,
        immediate: d,
        verbose: r,
      }) {
        let { ixData: c, ixSession: s } = e.getState(),
          { events: u } = c,
          f = u[t] || {},
          { mediaQueries: p = c.mediaQueryKeys } = f,
          { actionItemGroups: I, useFirstGroupAsInitialState: E } = (0,
          l.default)(c, `actionLists.${i}`, {});
        if (!I || !I.length) return !1;
        o >= I.length && (0, l.default)(f, "config.loop") && (o = 0),
          0 === o && E && o++;
        let T =
            (0 === o || (1 === o && E)) && O(f.action?.actionTypeId)
              ? f.config.delay
              : void 0,
          g = (0, l.default)(I, [o, "actionItems"], []);
        if (!g.length || !B(p, s.mediaQueryKey)) return !1;
        let m = s.hasBoundaryNodes && n ? y.getClosestElement(n, A) : null,
          b = x(g),
          v = !1;
        return (
          g.forEach((l, c) => {
            let { config: s, actionTypeId: u } = l,
              p = Y(u),
              { target: I } = s;
            I &&
              h({
                config: s,
                event: f,
                eventTarget: n,
                elementRoot: I.boundaryMode ? m : null,
                elementApi: y,
              }).forEach((s, f) => {
                let I = p ? j(u)?.(s, l) : null,
                  E = p ? H(u)(s, l) : null;
                v = !0;
                let g = U({ element: s, actionItem: l }),
                  m = N({ element: s, actionItem: l, elementApi: y }, I);
                eE({
                  store: e,
                  element: s,
                  actionItem: l,
                  eventId: t,
                  eventTarget: n,
                  eventStateKey: a,
                  actionListId: i,
                  groupIndex: o,
                  isCarrier: b === c && 0 === f,
                  computedStyle: g,
                  destination: m,
                  immediate: d,
                  verbose: r,
                  pluginInstance: I,
                  pluginDuration: E,
                  instanceDelay: T,
                });
              });
          }),
          v
        );
      }
      function eE(e) {
        let t,
          { store: n, computedStyle: a, ...i } = e,
          {
            element: o,
            actionItem: l,
            immediate: d,
            pluginInstance: r,
            continuous: c,
            restingValue: s,
            eventId: u,
          } = i,
          f = G(),
          { ixElements: I, ixSession: T, ixData: g } = n.getState(),
          m = L(I, o),
          { refState: b } = I[m] || {},
          O = y.getRefType(o),
          v = T.reducedMotion && p.ReducedMotionTypes[l.actionTypeId];
        if (v && c)
          switch (g.events[u]?.eventTypeId) {
            case p.EventTypeConsts.MOUSE_MOVE:
            case p.EventTypeConsts.MOUSE_MOVE_IN_VIEWPORT:
              t = s;
              break;
            default:
              t = 0.5;
          }
        let A = w(o, b, a, l, y, r);
        if (
          (n.dispatch(
            (0, E.instanceAdded)({
              instanceId: f,
              elementId: m,
              origin: A,
              refType: O,
              skipMotion: v,
              skipToValue: t,
              ...i,
            })
          ),
          eT(document.body, "ix2-animation-started", f),
          d)
        )
          return void (function (e, t) {
            let { ixParameters: n } = e.getState();
            e.dispatch((0, E.instanceStarted)(t, 0)),
              e.dispatch((0, E.animationFrameChanged)(performance.now(), n));
            let { ixInstances: a } = e.getState();
            eg(a[t], e);
          })(n, f);
        C({ store: n, select: ({ ixInstances: e }) => e[f], onChange: eg }),
          c || n.dispatch((0, E.instanceStarted)(f, T.tick));
      }
      function ey(e, t) {
        eT(document.body, "ix2-animation-stopping", {
          instanceId: e.id,
          state: t.getState(),
        });
        let { elementId: n, actionItem: a } = e,
          { ixElements: i } = t.getState(),
          { ref: o, refType: l } = i[n] || {};
        l === R && D(o, a, y), t.dispatch((0, E.instanceRemoved)(e.id));
      }
      function eT(e, t, n) {
        let a = document.createEvent("CustomEvent");
        a.initCustomEvent(t, !0, !0, n), e.dispatchEvent(a);
      }
      function eg(e, t) {
        let {
            active: n,
            continuous: a,
            complete: i,
            elementId: o,
            actionItem: l,
            actionTypeId: d,
            renderType: r,
            current: c,
            groupIndex: s,
            eventId: u,
            eventTarget: f,
            eventStateKey: p,
            actionListId: I,
            isCarrier: T,
            styleProp: g,
            verbose: m,
            pluginInstance: b,
          } = e,
          { ixData: O, ixSession: v } = t.getState(),
          { events: A } = O,
          { mediaQueries: S = O.mediaQueryKeys } = A && A[u] ? A[u] : {};
        if (B(S, v.mediaQueryKey) && (a || n || i)) {
          if (c || (r === _ && i)) {
            t.dispatch((0, E.elementStateChanged)(o, d, c, l));
            let { ixElements: e } = t.getState(),
              { ref: n, refType: a, refState: i } = e[o] || {},
              s = i && i[d];
            (a === R || Y(d)) && P(n, i, s, u, l, g, y, r, b);
          }
          if (i) {
            if (T) {
              let e = eI({
                store: t,
                eventId: u,
                eventTarget: f,
                eventStateKey: p,
                actionListId: I,
                groupIndex: s + 1,
                verbose: m,
              });
              m &&
                !e &&
                t.dispatch(
                  (0, E.actionListPlaybackChanged)({
                    actionListId: I,
                    isPlaying: !1,
                  })
                );
            }
            ey(e, t);
          }
        }
      }
    },
    8955: function (e, t, n) {
      "use strict";
      let a;
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "default", {
          enumerable: !0,
          get: function () {
            return ep;
          },
        });
      let i = u(n(5801)),
        o = u(n(4738)),
        l = u(n(3789)),
        d = n(7087),
        r = n(1970),
        c = n(3946),
        s = n(9468);
      function u(e) {
        return e && e.__esModule ? e : { default: e };
      }
      let {
          MOUSE_CLICK: f,
          MOUSE_SECOND_CLICK: p,
          MOUSE_DOWN: I,
          MOUSE_UP: E,
          MOUSE_OVER: y,
          MOUSE_OUT: T,
          DROPDOWN_CLOSE: g,
          DROPDOWN_OPEN: m,
          SLIDER_ACTIVE: b,
          SLIDER_INACTIVE: O,
          TAB_ACTIVE: v,
          TAB_INACTIVE: A,
          NAVBAR_CLOSE: R,
          NAVBAR_OPEN: _,
          MOUSE_MOVE: S,
          PAGE_SCROLL_DOWN: h,
          SCROLL_INTO_VIEW: L,
          SCROLL_OUT_OF_VIEW: N,
          PAGE_SCROLL_UP: C,
          SCROLLING_IN_VIEW: G,
          PAGE_FINISH: P,
          ECOMMERCE_CART_CLOSE: M,
          ECOMMERCE_CART_OPEN: x,
          PAGE_START: U,
          PAGE_SCROLL: w,
        } = d.EventTypeConsts,
        V = "COMPONENT_ACTIVE",
        F = "COMPONENT_INACTIVE",
        { COLON_DELIMITER: k } = d.IX2EngineConstants,
        { getNamespacedParameterId: B } = s.IX2VanillaUtils,
        D = (e) => (t) => !!("object" == typeof t && e(t)) || t,
        X = D(({ element: e, nativeEvent: t }) => e === t.target),
        Q = D(({ element: e, nativeEvent: t }) => e.contains(t.target)),
        z = (0, i.default)([X, Q]),
        W = (e, t) => {
          if (t) {
            let { ixData: n } = e.getState(),
              { events: a } = n,
              i = a[t];
            if (i && !ee[i.eventTypeId]) return i;
          }
          return null;
        },
        Y = ({ store: e, event: t }) => {
          let { action: n } = t,
            { autoStopEventId: a } = n.config;
          return !!W(e, a);
        },
        j = ({ store: e, event: t, element: n, eventStateKey: a }, i) => {
          let { action: l, id: d } = t,
            { actionListId: c, autoStopEventId: s } = l.config,
            u = W(e, s);
          return (
            u &&
              (0, r.stopActionGroup)({
                store: e,
                eventId: s,
                eventTarget: n,
                eventStateKey: s + k + a.split(k)[1],
                actionListId: (0, o.default)(u, "action.config.actionListId"),
              }),
            (0, r.stopActionGroup)({
              store: e,
              eventId: d,
              eventTarget: n,
              eventStateKey: a,
              actionListId: c,
            }),
            (0, r.startActionGroup)({
              store: e,
              eventId: d,
              eventTarget: n,
              eventStateKey: a,
              actionListId: c,
            }),
            i
          );
        },
        H = (e, t) => (n, a) => !0 === e(n, a) ? t(n, a) : a,
        $ = { handler: H(z, j) },
        K = { ...$, types: [V, F].join(" ") },
        q = [
          { target: window, types: "resize orientationchange", throttle: !0 },
          {
            target: document,
            types: "scroll wheel readystatechange IX2_PAGE_UPDATE",
            throttle: !0,
          },
        ],
        Z = "mouseover mouseout",
        J = { types: q },
        ee = { PAGE_START: U, PAGE_FINISH: P },
        et = (() => {
          let e = void 0 !== window.pageXOffset,
            t =
              "CSS1Compat" === document.compatMode
                ? document.documentElement
                : document.body;
          return () => ({
            scrollLeft: e ? window.pageXOffset : t.scrollLeft,
            scrollTop: e ? window.pageYOffset : t.scrollTop,
            stiffScrollTop: (0, l.default)(
              e ? window.pageYOffset : t.scrollTop,
              0,
              t.scrollHeight - window.innerHeight
            ),
            scrollWidth: t.scrollWidth,
            scrollHeight: t.scrollHeight,
            clientWidth: t.clientWidth,
            clientHeight: t.clientHeight,
            innerWidth: window.innerWidth,
            innerHeight: window.innerHeight,
          });
        })(),
        en = (e, t) =>
          !(
            e.left > t.right ||
            e.right < t.left ||
            e.top > t.bottom ||
            e.bottom < t.top
          ),
        ea = ({ element: e, nativeEvent: t }) => {
          let { type: n, target: a, relatedTarget: i } = t,
            o = e.contains(a);
          if ("mouseover" === n && o) return !0;
          let l = e.contains(i);
          return "mouseout" === n && !!o && !!l;
        },
        ei = (e) => {
          let {
              element: t,
              event: { config: n },
            } = e,
            { clientWidth: a, clientHeight: i } = et(),
            o = n.scrollOffsetValue,
            l = "PX" === n.scrollOffsetUnit ? o : (i * (o || 0)) / 100;
          return en(t.getBoundingClientRect(), {
            left: 0,
            top: l,
            right: a,
            bottom: i - l,
          });
        },
        eo = (e) => (t, n) => {
          let { type: a } = t.nativeEvent,
            i = -1 !== [V, F].indexOf(a) ? a === V : n.isActive,
            o = { ...n, isActive: i };
          return ((!n || o.isActive !== n.isActive) && e(t, o)) || o;
        },
        el = (e) => (t, n) => {
          let a = { elementHovered: ea(t) };
          return (
            ((n ? a.elementHovered !== n.elementHovered : a.elementHovered) &&
              e(t, a)) ||
            a
          );
        },
        ed =
          (e) =>
          (t, n = {}) => {
            let a,
              i,
              { stiffScrollTop: o, scrollHeight: l, innerHeight: d } = et(),
              {
                event: { config: r, eventTypeId: c },
              } = t,
              { scrollOffsetValue: s, scrollOffsetUnit: u } = r,
              f = l - d,
              p = Number((o / f).toFixed(2));
            if (n && n.percentTop === p) return n;
            let I = ("PX" === u ? s : (d * (s || 0)) / 100) / f,
              E = 0;
            n &&
              ((a = p > n.percentTop),
              (E = (i = n.scrollingDown !== a) ? p : n.anchorTop));
            let y = c === h ? p >= E + I : p <= E - I,
              T = {
                ...n,
                percentTop: p,
                inBounds: y,
                anchorTop: E,
                scrollingDown: a,
              };
            return (n && y && (i || T.inBounds !== n.inBounds) && e(t, T)) || T;
          },
        er = (e, t) =>
          e.left > t.left &&
          e.left < t.right &&
          e.top > t.top &&
          e.top < t.bottom,
        ec =
          (e) =>
          (t, n = { clickCount: 0 }) => {
            let a = { clickCount: (n.clickCount % 2) + 1 };
            return (a.clickCount !== n.clickCount && e(t, a)) || a;
          },
        es = (e = !0) => ({
          ...K,
          handler: H(
            e ? z : X,
            eo((e, t) => (t.isActive ? $.handler(e, t) : t))
          ),
        }),
        eu = (e = !0) => ({
          ...K,
          handler: H(
            e ? z : X,
            eo((e, t) => (t.isActive ? t : $.handler(e, t)))
          ),
        }),
        ef = {
          ...J,
          handler:
            ((a = (e, t) => {
              let { elementVisible: n } = t,
                { event: a, store: i } = e,
                { ixData: o } = i.getState(),
                { events: l } = o;
              return !l[a.action.config.autoStopEventId] && t.triggered
                ? t
                : (a.eventTypeId === L) === n
                ? (j(e), { ...t, triggered: !0 })
                : t;
            }),
            (e, t) => {
              let n = { ...t, elementVisible: ei(e) };
              return (
                ((t
                  ? n.elementVisible !== t.elementVisible
                  : n.elementVisible) &&
                  a(e, n)) ||
                n
              );
            }),
        },
        ep = {
          [b]: es(),
          [O]: eu(),
          [m]: es(),
          [g]: eu(),
          [_]: es(!1),
          [R]: eu(!1),
          [v]: es(),
          [A]: eu(),
          [x]: { types: "ecommerce-cart-open", handler: H(z, j) },
          [M]: { types: "ecommerce-cart-close", handler: H(z, j) },
          [f]: {
            types: "click",
            handler: H(
              z,
              ec((e, { clickCount: t }) => {
                Y(e) ? 1 === t && j(e) : j(e);
              })
            ),
          },
          [p]: {
            types: "click",
            handler: H(
              z,
              ec((e, { clickCount: t }) => {
                2 === t && j(e);
              })
            ),
          },
          [I]: { ...$, types: "mousedown" },
          [E]: { ...$, types: "mouseup" },
          [y]: {
            types: Z,
            handler: H(
              z,
              el((e, t) => {
                t.elementHovered && j(e);
              })
            ),
          },
          [T]: {
            types: Z,
            handler: H(
              z,
              el((e, t) => {
                t.elementHovered || j(e);
              })
            ),
          },
          [S]: {
            types: "mousemove mouseout scroll",
            handler: (
              {
                store: e,
                element: t,
                eventConfig: n,
                nativeEvent: a,
                eventStateKey: i,
              },
              o = { clientX: 0, clientY: 0, pageX: 0, pageY: 0 }
            ) => {
              let {
                  basedOn: l,
                  selectedAxis: r,
                  continuousParameterGroupId: s,
                  reverse: u,
                  restingState: f = 0,
                } = n,
                {
                  clientX: p = o.clientX,
                  clientY: I = o.clientY,
                  pageX: E = o.pageX,
                  pageY: y = o.pageY,
                } = a,
                T = "X_AXIS" === r,
                g = "mouseout" === a.type,
                m = f / 100,
                b = s,
                O = !1;
              switch (l) {
                case d.EventBasedOn.VIEWPORT:
                  m = T
                    ? Math.min(p, window.innerWidth) / window.innerWidth
                    : Math.min(I, window.innerHeight) / window.innerHeight;
                  break;
                case d.EventBasedOn.PAGE: {
                  let {
                    scrollLeft: e,
                    scrollTop: t,
                    scrollWidth: n,
                    scrollHeight: a,
                  } = et();
                  m = T ? Math.min(e + E, n) / n : Math.min(t + y, a) / a;
                  break;
                }
                case d.EventBasedOn.ELEMENT:
                default: {
                  b = B(i, s);
                  let e = 0 === a.type.indexOf("mouse");
                  if (e && !0 !== z({ element: t, nativeEvent: a })) break;
                  let n = t.getBoundingClientRect(),
                    { left: o, top: l, width: d, height: r } = n;
                  if (!e && !er({ left: p, top: I }, n)) break;
                  (O = !0), (m = T ? (p - o) / d : (I - l) / r);
                }
              }
              return (
                g && (m > 0.95 || m < 0.05) && (m = Math.round(m)),
                (l !== d.EventBasedOn.ELEMENT || O || O !== o.elementHovered) &&
                  ((m = u ? 1 - m : m),
                  e.dispatch((0, c.parameterChanged)(b, m))),
                {
                  elementHovered: O,
                  clientX: p,
                  clientY: I,
                  pageX: E,
                  pageY: y,
                }
              );
            },
          },
          [w]: {
            types: q,
            handler: ({ store: e, eventConfig: t }) => {
              let { continuousParameterGroupId: n, reverse: a } = t,
                { scrollTop: i, scrollHeight: o, clientHeight: l } = et(),
                d = i / (o - l);
              (d = a ? 1 - d : d), e.dispatch((0, c.parameterChanged)(n, d));
            },
          },
          [G]: {
            types: q,
            handler: (
              { element: e, store: t, eventConfig: n, eventStateKey: a },
              i = { scrollPercent: 0 }
            ) => {
              let {
                  scrollLeft: o,
                  scrollTop: l,
                  scrollWidth: r,
                  scrollHeight: s,
                  clientHeight: u,
                } = et(),
                {
                  basedOn: f,
                  selectedAxis: p,
                  continuousParameterGroupId: I,
                  startsEntering: E,
                  startsExiting: y,
                  addEndOffset: T,
                  addStartOffset: g,
                  addOffsetValue: m = 0,
                  endOffsetValue: b = 0,
                } = n;
              if (f === d.EventBasedOn.VIEWPORT) {
                let e = "X_AXIS" === p ? o / r : l / s;
                return (
                  e !== i.scrollPercent &&
                    t.dispatch((0, c.parameterChanged)(I, e)),
                  { scrollPercent: e }
                );
              }
              {
                let n = B(a, I),
                  o = e.getBoundingClientRect(),
                  l = (g ? m : 0) / 100,
                  d = (T ? b : 0) / 100;
                (l = E ? l : 1 - l), (d = y ? d : 1 - d);
                let r = o.top + Math.min(o.height * l, u),
                  f = Math.min(u + (o.top + o.height * d - r), s),
                  p = Math.min(Math.max(0, u - r), f) / f;
                return (
                  p !== i.scrollPercent &&
                    t.dispatch((0, c.parameterChanged)(n, p)),
                  { scrollPercent: p }
                );
              }
            },
          },
          [L]: ef,
          [N]: ef,
          [h]: {
            ...J,
            handler: ed((e, t) => {
              t.scrollingDown && j(e);
            }),
          },
          [C]: {
            ...J,
            handler: ed((e, t) => {
              t.scrollingDown || j(e);
            }),
          },
          [P]: {
            types: "readystatechange IX2_PAGE_UPDATE",
            handler: H(X, (e, t) => {
              let n = { finished: "complete" === document.readyState };
              return n.finished && !(t && t.finshed) && j(e), n;
            }),
          },
          [U]: {
            types: "readystatechange IX2_PAGE_UPDATE",
            handler: H(X, (e, t) => (t || j(e), { started: !0 })),
          },
        };
    },
    4609: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "ixData", {
          enumerable: !0,
          get: function () {
            return i;
          },
        });
      let { IX2_RAW_DATA_IMPORTED: a } = n(7087).IX2EngineActionTypes,
        i = (e = Object.freeze({}), t) =>
          t.type === a ? t.payload.ixData || Object.freeze({}) : e;
    },
    7718: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "ixInstances", {
          enumerable: !0,
          get: function () {
            return O;
          },
        });
      let a = n(7087),
        i = n(9468),
        o = n(1185),
        {
          IX2_RAW_DATA_IMPORTED: l,
          IX2_SESSION_STOPPED: d,
          IX2_INSTANCE_ADDED: r,
          IX2_INSTANCE_STARTED: c,
          IX2_INSTANCE_REMOVED: s,
          IX2_ANIMATION_FRAME_CHANGED: u,
        } = a.IX2EngineActionTypes,
        {
          optimizeFloat: f,
          applyEasing: p,
          createBezierEasing: I,
        } = i.IX2EasingUtils,
        { RENDER_GENERAL: E } = a.IX2EngineConstants,
        {
          getItemConfigByKey: y,
          getRenderType: T,
          getStyleProp: g,
        } = i.IX2VanillaUtils,
        m = (e, t) => {
          let n,
            a,
            i,
            l,
            {
              position: d,
              parameterId: r,
              actionGroups: c,
              destinationKeys: s,
              smoothing: u,
              restingValue: I,
              actionTypeId: E,
              customEasingFn: T,
              skipMotion: g,
              skipToValue: m,
            } = e,
            { parameters: b } = t.payload,
            O = Math.max(1 - u, 0.01),
            v = b[r];
          null == v && ((O = 1), (v = I));
          let A = f((Math.max(v, 0) || 0) - d),
            R = g ? m : f(d + A * O),
            _ = 100 * R;
          if (R === d && e.current) return e;
          for (let e = 0, { length: t } = c; e < t; e++) {
            let { keyframe: t, actionItems: o } = c[e];
            if ((0 === e && (n = o[0]), _ >= t)) {
              n = o[0];
              let d = c[e + 1],
                r = d && _ !== t;
              (a = r ? d.actionItems[0] : null),
                r && ((i = t / 100), (l = (d.keyframe - t) / 100));
            }
          }
          let S = {};
          if (n && !a)
            for (let e = 0, { length: t } = s; e < t; e++) {
              let t = s[e];
              S[t] = y(E, t, n.config);
            }
          else if (n && a && void 0 !== i && void 0 !== l) {
            let e = (R - i) / l,
              t = p(n.config.easing, e, T);
            for (let e = 0, { length: i } = s; e < i; e++) {
              let i = s[e],
                o = y(E, i, n.config),
                l = (y(E, i, a.config) - o) * t + o;
              S[i] = l;
            }
          }
          return (0, o.merge)(e, { position: R, current: S });
        },
        b = (e, t) => {
          let {
              active: n,
              origin: a,
              start: i,
              immediate: l,
              renderType: d,
              verbose: r,
              actionItem: c,
              destination: s,
              destinationKeys: u,
              pluginDuration: I,
              instanceDelay: y,
              customEasingFn: T,
              skipMotion: g,
            } = e,
            m = c.config.easing,
            { duration: b, delay: O } = c.config;
          null != I && (b = I),
            (O = null != y ? y : O),
            d === E ? (b = 0) : (l || g) && (b = O = 0);
          let { now: v } = t.payload;
          if (n && a) {
            let t = v - (i + O);
            if (r) {
              let t = b + O,
                n = f(Math.min(Math.max(0, (v - i) / t), 1));
              e = (0, o.set)(e, "verboseTimeElapsed", t * n);
            }
            if (t < 0) return e;
            let n = f(Math.min(Math.max(0, t / b), 1)),
              l = p(m, n, T),
              d = {},
              c = null;
            return (
              u.length &&
                (c = u.reduce((e, t) => {
                  let n = s[t],
                    i = parseFloat(a[t]) || 0,
                    o = parseFloat(n) - i;
                  return (e[t] = o * l + i), e;
                }, {})),
              (d.current = c),
              (d.position = n),
              1 === n && ((d.active = !1), (d.complete = !0)),
              (0, o.merge)(e, d)
            );
          }
          return e;
        },
        O = (e = Object.freeze({}), t) => {
          switch (t.type) {
            case l:
              return t.payload.ixInstances || Object.freeze({});
            case d:
              return Object.freeze({});
            case r: {
              let {
                  instanceId: n,
                  elementId: a,
                  actionItem: i,
                  eventId: l,
                  eventTarget: d,
                  eventStateKey: r,
                  actionListId: c,
                  groupIndex: s,
                  isCarrier: u,
                  origin: f,
                  destination: p,
                  immediate: E,
                  verbose: y,
                  continuous: m,
                  parameterId: b,
                  actionGroups: O,
                  smoothing: v,
                  restingValue: A,
                  pluginInstance: R,
                  pluginDuration: _,
                  instanceDelay: S,
                  skipMotion: h,
                  skipToValue: L,
                } = t.payload,
                { actionTypeId: N } = i,
                C = T(N),
                G = g(C, N),
                P = Object.keys(p).filter(
                  (e) => null != p[e] && "string" != typeof p[e]
                ),
                { easing: M } = i.config;
              return (0, o.set)(e, n, {
                id: n,
                elementId: a,
                active: !1,
                position: 0,
                start: 0,
                origin: f,
                destination: p,
                destinationKeys: P,
                immediate: E,
                verbose: y,
                current: null,
                actionItem: i,
                actionTypeId: N,
                eventId: l,
                eventTarget: d,
                eventStateKey: r,
                actionListId: c,
                groupIndex: s,
                renderType: C,
                isCarrier: u,
                styleProp: G,
                continuous: m,
                parameterId: b,
                actionGroups: O,
                smoothing: v,
                restingValue: A,
                pluginInstance: R,
                pluginDuration: _,
                instanceDelay: S,
                skipMotion: h,
                skipToValue: L,
                customEasingFn:
                  Array.isArray(M) && 4 === M.length ? I(M) : void 0,
              });
            }
            case c: {
              let { instanceId: n, time: a } = t.payload;
              return (0, o.mergeIn)(e, [n], {
                active: !0,
                complete: !1,
                start: a,
              });
            }
            case s: {
              let { instanceId: n } = t.payload;
              if (!e[n]) return e;
              let a = {},
                i = Object.keys(e),
                { length: o } = i;
              for (let t = 0; t < o; t++) {
                let o = i[t];
                o !== n && (a[o] = e[o]);
              }
              return a;
            }
            case u: {
              let n = e,
                a = Object.keys(e),
                { length: i } = a;
              for (let l = 0; l < i; l++) {
                let i = a[l],
                  d = e[i],
                  r = d.continuous ? m : b;
                n = (0, o.set)(n, i, r(d, t));
              }
              return n;
            }
            default:
              return e;
          }
        };
    },
    1540: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "ixParameters", {
          enumerable: !0,
          get: function () {
            return l;
          },
        });
      let {
          IX2_RAW_DATA_IMPORTED: a,
          IX2_SESSION_STOPPED: i,
          IX2_PARAMETER_CHANGED: o,
        } = n(7087).IX2EngineActionTypes,
        l = (e = {}, t) => {
          switch (t.type) {
            case a:
              return t.payload.ixParameters || {};
            case i:
              return {};
            case o: {
              let { key: n, value: a } = t.payload;
              return (e[n] = a), e;
            }
            default:
              return e;
          }
        };
    },
    7243: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "default", {
          enumerable: !0,
          get: function () {
            return u;
          },
        });
      let a = n(9516),
        i = n(4609),
        o = n(628),
        l = n(5862),
        d = n(9468),
        r = n(7718),
        c = n(1540),
        { ixElements: s } = d.IX2ElementsReducer,
        u = (0, a.combineReducers)({
          ixData: i.ixData,
          ixRequest: o.ixRequest,
          ixSession: l.ixSession,
          ixElements: s,
          ixInstances: r.ixInstances,
          ixParameters: c.ixParameters,
        });
    },
    628: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "ixRequest", {
          enumerable: !0,
          get: function () {
            return u;
          },
        });
      let a = n(7087),
        i = n(1185),
        {
          IX2_PREVIEW_REQUESTED: o,
          IX2_PLAYBACK_REQUESTED: l,
          IX2_STOP_REQUESTED: d,
          IX2_CLEAR_REQUESTED: r,
        } = a.IX2EngineActionTypes,
        c = { preview: {}, playback: {}, stop: {}, clear: {} },
        s = Object.create(null, {
          [o]: { value: "preview" },
          [l]: { value: "playback" },
          [d]: { value: "stop" },
          [r]: { value: "clear" },
        }),
        u = (e = c, t) => {
          if (t.type in s) {
            let n = [s[t.type]];
            return (0, i.setIn)(e, [n], { ...t.payload });
          }
          return e;
        };
    },
    5862: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "ixSession", {
          enumerable: !0,
          get: function () {
            return y;
          },
        });
      let a = n(7087),
        i = n(1185),
        {
          IX2_SESSION_INITIALIZED: o,
          IX2_SESSION_STARTED: l,
          IX2_TEST_FRAME_RENDERED: d,
          IX2_SESSION_STOPPED: r,
          IX2_EVENT_LISTENER_ADDED: c,
          IX2_EVENT_STATE_CHANGED: s,
          IX2_ANIMATION_FRAME_CHANGED: u,
          IX2_ACTION_LIST_PLAYBACK_CHANGED: f,
          IX2_VIEWPORT_WIDTH_CHANGED: p,
          IX2_MEDIA_QUERIES_DEFINED: I,
        } = a.IX2EngineActionTypes,
        E = {
          active: !1,
          tick: 0,
          eventListeners: [],
          eventState: {},
          playbackState: {},
          viewportWidth: 0,
          mediaQueryKey: null,
          hasBoundaryNodes: !1,
          hasDefinedMediaQueries: !1,
          reducedMotion: !1,
        },
        y = (e = E, t) => {
          switch (t.type) {
            case o: {
              let { hasBoundaryNodes: n, reducedMotion: a } = t.payload;
              return (0, i.merge)(e, { hasBoundaryNodes: n, reducedMotion: a });
            }
            case l:
              return (0, i.set)(e, "active", !0);
            case d: {
              let {
                payload: { step: n = 20 },
              } = t;
              return (0, i.set)(e, "tick", e.tick + n);
            }
            case r:
              return E;
            case u: {
              let {
                payload: { now: n },
              } = t;
              return (0, i.set)(e, "tick", n);
            }
            case c: {
              let n = (0, i.addLast)(e.eventListeners, t.payload);
              return (0, i.set)(e, "eventListeners", n);
            }
            case s: {
              let { stateKey: n, newState: a } = t.payload;
              return (0, i.setIn)(e, ["eventState", n], a);
            }
            case f: {
              let { actionListId: n, isPlaying: a } = t.payload;
              return (0, i.setIn)(e, ["playbackState", n], a);
            }
            case p: {
              let { width: n, mediaQueries: a } = t.payload,
                o = a.length,
                l = null;
              for (let e = 0; e < o; e++) {
                let { key: t, min: i, max: o } = a[e];
                if (n >= i && n <= o) {
                  l = t;
                  break;
                }
              }
              return (0, i.merge)(e, { viewportWidth: n, mediaQueryKey: l });
            }
            case I:
              return (0, i.set)(e, "hasDefinedMediaQueries", !0);
            default:
              return e;
          }
        };
    },
    7377: function (e, t) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var n = {
        clearPlugin: function () {
          return s;
        },
        createPluginInstance: function () {
          return r;
        },
        getPluginConfig: function () {
          return i;
        },
        getPluginDestination: function () {
          return d;
        },
        getPluginDuration: function () {
          return o;
        },
        getPluginOrigin: function () {
          return l;
        },
        renderPlugin: function () {
          return c;
        },
      };
      for (var a in n)
        Object.defineProperty(t, a, { enumerable: !0, get: n[a] });
      let i = (e) => e.value,
        o = (e, t) => {
          if ("auto" !== t.config.duration) return null;
          let n = parseFloat(e.getAttribute("data-duration"));
          return n > 0
            ? 1e3 * n
            : 1e3 * parseFloat(e.getAttribute("data-default-duration"));
        },
        l = (e) => e || { value: 0 },
        d = (e) => ({ value: e.value }),
        r = (e) => {
          let t = window.Webflow.require("lottie");
          if (!t) return null;
          let n = t.createInstance(e);
          return n.stop(), n.setSubframe(!0), n;
        },
        c = (e, t, n) => {
          if (!e) return;
          let a = t[n.actionTypeId].value / 100;
          e.goToFrame(e.frames * a);
        },
        s = (e) => {
          let t = window.Webflow.require("lottie");
          t && t.createInstance(e).stop();
        };
    },
    2570: function (e, t) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var n = {
        clearPlugin: function () {
          return I;
        },
        createPluginInstance: function () {
          return f;
        },
        getPluginConfig: function () {
          return r;
        },
        getPluginDestination: function () {
          return u;
        },
        getPluginDuration: function () {
          return c;
        },
        getPluginOrigin: function () {
          return s;
        },
        renderPlugin: function () {
          return p;
        },
      };
      for (var a in n)
        Object.defineProperty(t, a, { enumerable: !0, get: n[a] });
      let i = "--wf-rive-fit",
        o = "--wf-rive-alignment",
        l = (e) => document.querySelector(`[data-w-id="${e}"]`),
        d = () => window.Webflow.require("rive"),
        r = (e, t) => e.value.inputs[t],
        c = () => null,
        s = (e, t) => {
          if (e) return e;
          let n = {},
            { inputs: a = {} } = t.config.value;
          for (let e in a) null == a[e] && (n[e] = 0);
          return n;
        },
        u = (e) => e.value.inputs ?? {},
        f = (e, t) => {
          if ((t.config?.target?.selectorGuids || []).length > 0) return e;
          let n = t?.config?.target?.pluginElement;
          return n ? l(n) : null;
        },
        p = (e, { PLUGIN_RIVE: t }, n) => {
          let a = d();
          if (!a) return;
          let l = a.getInstance(e),
            r = a.rive.StateMachineInputType,
            { name: c, inputs: s = {} } = n.config.value || {};
          function u(e) {
            if (e.loaded) n();
            else {
              let t = () => {
                n(), e?.off("load", t);
              };
              e?.on("load", t);
            }
            function n() {
              let n = e.stateMachineInputs(c);
              if (null != n) {
                if ((e.isPlaying || e.play(c, !1), i in s || o in s)) {
                  let t = e.layout,
                    n = s[i] ?? t.fit,
                    a = s[o] ?? t.alignment;
                  (n !== t.fit || a !== t.alignment) &&
                    (e.layout = t.copyWith({ fit: n, alignment: a }));
                }
                for (let e in s) {
                  if (e === i || e === o) continue;
                  let a = n.find((t) => t.name === e);
                  if (null != a)
                    switch (a.type) {
                      case r.Boolean:
                        null != s[e] && (a.value = !!s[e]);
                        break;
                      case r.Number: {
                        let n = t[e];
                        null != n && (a.value = n);
                        break;
                      }
                      case r.Trigger:
                        s[e] && a.fire();
                    }
                }
              }
            }
          }
          l?.rive ? u(l.rive) : a.setLoadHandler(e, u);
        },
        I = (e, t) => null;
    },
    2866: function (e, t) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var n = {
        clearPlugin: function () {
          return I;
        },
        createPluginInstance: function () {
          return f;
        },
        getPluginConfig: function () {
          return d;
        },
        getPluginDestination: function () {
          return u;
        },
        getPluginDuration: function () {
          return r;
        },
        getPluginOrigin: function () {
          return s;
        },
        renderPlugin: function () {
          return p;
        },
      };
      for (var a in n)
        Object.defineProperty(t, a, { enumerable: !0, get: n[a] });
      let i = (e) => document.querySelector(`[data-w-id="${e}"]`),
        o = () => window.Webflow.require("spline"),
        l = (e, t) => e.filter((e) => !t.includes(e)),
        d = (e, t) => e.value[t],
        r = () => null,
        c = Object.freeze({
          positionX: 0,
          positionY: 0,
          positionZ: 0,
          rotationX: 0,
          rotationY: 0,
          rotationZ: 0,
          scaleX: 1,
          scaleY: 1,
          scaleZ: 1,
        }),
        s = (e, t) => {
          let n = Object.keys(t.config.value);
          if (e) {
            let t = l(n, Object.keys(e));
            return t.length ? t.reduce((e, t) => ((e[t] = c[t]), e), e) : e;
          }
          return n.reduce((e, t) => ((e[t] = c[t]), e), {});
        },
        u = (e) => e.value,
        f = (e, t) => {
          let n = t?.config?.target?.pluginElement;
          return n ? i(n) : null;
        },
        p = (e, t, n) => {
          let a = o();
          if (!a) return;
          let i = a.getInstance(e),
            l = n.config.target.objectId,
            d = (e) => {
              if (!e) throw Error("Invalid spline app passed to renderSpline");
              let n = l && e.findObjectById(l);
              if (!n) return;
              let { PLUGIN_SPLINE: a } = t;
              null != a.positionX && (n.position.x = a.positionX),
                null != a.positionY && (n.position.y = a.positionY),
                null != a.positionZ && (n.position.z = a.positionZ),
                null != a.rotationX && (n.rotation.x = a.rotationX),
                null != a.rotationY && (n.rotation.y = a.rotationY),
                null != a.rotationZ && (n.rotation.z = a.rotationZ),
                null != a.scaleX && (n.scale.x = a.scaleX),
                null != a.scaleY && (n.scale.y = a.scaleY),
                null != a.scaleZ && (n.scale.z = a.scaleZ);
            };
          i ? d(i.spline) : a.setLoadHandler(e, d);
        },
        I = () => null;
    },
    1407: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var a = {
        clearPlugin: function () {
          return p;
        },
        createPluginInstance: function () {
          return s;
        },
        getPluginConfig: function () {
          return l;
        },
        getPluginDestination: function () {
          return c;
        },
        getPluginDuration: function () {
          return d;
        },
        getPluginOrigin: function () {
          return r;
        },
        renderPlugin: function () {
          return f;
        },
      };
      for (var i in a)
        Object.defineProperty(t, i, { enumerable: !0, get: a[i] });
      let o = n(380),
        l = (e, t) => e.value[t],
        d = () => null,
        r = (e, t) => {
          if (e) return e;
          let n = t.config.value,
            a = t.config.target.objectId,
            i = getComputedStyle(document.documentElement).getPropertyValue(a);
          return null != n.size
            ? { size: parseInt(i, 10) }
            : "%" === n.unit || "-" === n.unit
            ? { size: parseFloat(i) }
            : null != n.red && null != n.green && null != n.blue
            ? (0, o.normalizeColor)(i)
            : void 0;
        },
        c = (e) => e.value,
        s = () => null,
        u = {
          color: {
            match: ({ red: e, green: t, blue: n, alpha: a }) =>
              [e, t, n, a].every((e) => null != e),
            getValue: ({ red: e, green: t, blue: n, alpha: a }) =>
              `rgba(${e}, ${t}, ${n}, ${a})`,
          },
          size: {
            match: ({ size: e }) => null != e,
            getValue: ({ size: e }, t) => ("-" === t ? e : `${e}${t}`),
          },
        },
        f = (e, t, n) => {
          let {
              target: { objectId: a },
              value: { unit: i },
            } = n.config,
            o = t.PLUGIN_VARIABLE,
            l = Object.values(u).find((e) => e.match(o, i));
          l && document.documentElement.style.setProperty(a, l.getValue(o, i));
        },
        p = (e, t) => {
          let n = t.config.target.objectId;
          document.documentElement.style.removeProperty(n);
        };
    },
    3690: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "pluginMethodMap", {
          enumerable: !0,
          get: function () {
            return s;
          },
        });
      let a = n(7087),
        i = c(n(7377)),
        o = c(n(2866)),
        l = c(n(2570)),
        d = c(n(1407));
      function r(e) {
        if ("function" != typeof WeakMap) return null;
        var t = new WeakMap(),
          n = new WeakMap();
        return (r = function (e) {
          return e ? n : t;
        })(e);
      }
      function c(e, t) {
        if (!t && e && e.__esModule) return e;
        if (null === e || ("object" != typeof e && "function" != typeof e))
          return { default: e };
        var n = r(t);
        if (n && n.has(e)) return n.get(e);
        var a = { __proto__: null },
          i = Object.defineProperty && Object.getOwnPropertyDescriptor;
        for (var o in e)
          if ("default" !== o && Object.prototype.hasOwnProperty.call(e, o)) {
            var l = i ? Object.getOwnPropertyDescriptor(e, o) : null;
            l && (l.get || l.set)
              ? Object.defineProperty(a, o, l)
              : (a[o] = e[o]);
          }
        return (a.default = e), n && n.set(e, a), a;
      }
      let s = new Map([
        [a.ActionTypeConsts.PLUGIN_LOTTIE, { ...i }],
        [a.ActionTypeConsts.PLUGIN_SPLINE, { ...o }],
        [a.ActionTypeConsts.PLUGIN_RIVE, { ...l }],
        [a.ActionTypeConsts.PLUGIN_VARIABLE, { ...d }],
      ]);
    },
    8023: function (e, t) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var n = {
        IX2_ACTION_LIST_PLAYBACK_CHANGED: function () {
          return b;
        },
        IX2_ANIMATION_FRAME_CHANGED: function () {
          return I;
        },
        IX2_CLEAR_REQUESTED: function () {
          return u;
        },
        IX2_ELEMENT_STATE_CHANGED: function () {
          return m;
        },
        IX2_EVENT_LISTENER_ADDED: function () {
          return f;
        },
        IX2_EVENT_STATE_CHANGED: function () {
          return p;
        },
        IX2_INSTANCE_ADDED: function () {
          return y;
        },
        IX2_INSTANCE_REMOVED: function () {
          return g;
        },
        IX2_INSTANCE_STARTED: function () {
          return T;
        },
        IX2_MEDIA_QUERIES_DEFINED: function () {
          return v;
        },
        IX2_PARAMETER_CHANGED: function () {
          return E;
        },
        IX2_PLAYBACK_REQUESTED: function () {
          return c;
        },
        IX2_PREVIEW_REQUESTED: function () {
          return r;
        },
        IX2_RAW_DATA_IMPORTED: function () {
          return i;
        },
        IX2_SESSION_INITIALIZED: function () {
          return o;
        },
        IX2_SESSION_STARTED: function () {
          return l;
        },
        IX2_SESSION_STOPPED: function () {
          return d;
        },
        IX2_STOP_REQUESTED: function () {
          return s;
        },
        IX2_TEST_FRAME_RENDERED: function () {
          return A;
        },
        IX2_VIEWPORT_WIDTH_CHANGED: function () {
          return O;
        },
      };
      for (var a in n)
        Object.defineProperty(t, a, { enumerable: !0, get: n[a] });
      let i = "IX2_RAW_DATA_IMPORTED",
        o = "IX2_SESSION_INITIALIZED",
        l = "IX2_SESSION_STARTED",
        d = "IX2_SESSION_STOPPED",
        r = "IX2_PREVIEW_REQUESTED",
        c = "IX2_PLAYBACK_REQUESTED",
        s = "IX2_STOP_REQUESTED",
        u = "IX2_CLEAR_REQUESTED",
        f = "IX2_EVENT_LISTENER_ADDED",
        p = "IX2_EVENT_STATE_CHANGED",
        I = "IX2_ANIMATION_FRAME_CHANGED",
        E = "IX2_PARAMETER_CHANGED",
        y = "IX2_INSTANCE_ADDED",
        T = "IX2_INSTANCE_STARTED",
        g = "IX2_INSTANCE_REMOVED",
        m = "IX2_ELEMENT_STATE_CHANGED",
        b = "IX2_ACTION_LIST_PLAYBACK_CHANGED",
        O = "IX2_VIEWPORT_WIDTH_CHANGED",
        v = "IX2_MEDIA_QUERIES_DEFINED",
        A = "IX2_TEST_FRAME_RENDERED";
    },
    2686: function (e, t) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var n = {
        ABSTRACT_NODE: function () {
          return et;
        },
        AUTO: function () {
          return z;
        },
        BACKGROUND: function () {
          return F;
        },
        BACKGROUND_COLOR: function () {
          return V;
        },
        BAR_DELIMITER: function () {
          return j;
        },
        BORDER_COLOR: function () {
          return k;
        },
        BOUNDARY_SELECTOR: function () {
          return r;
        },
        CHILDREN: function () {
          return H;
        },
        COLON_DELIMITER: function () {
          return Y;
        },
        COLOR: function () {
          return B;
        },
        COMMA_DELIMITER: function () {
          return W;
        },
        CONFIG_UNIT: function () {
          return y;
        },
        CONFIG_VALUE: function () {
          return f;
        },
        CONFIG_X_UNIT: function () {
          return p;
        },
        CONFIG_X_VALUE: function () {
          return c;
        },
        CONFIG_Y_UNIT: function () {
          return I;
        },
        CONFIG_Y_VALUE: function () {
          return s;
        },
        CONFIG_Z_UNIT: function () {
          return E;
        },
        CONFIG_Z_VALUE: function () {
          return u;
        },
        DISPLAY: function () {
          return D;
        },
        FILTER: function () {
          return M;
        },
        FLEX: function () {
          return X;
        },
        FONT_VARIATION_SETTINGS: function () {
          return x;
        },
        HEIGHT: function () {
          return w;
        },
        HTML_ELEMENT: function () {
          return J;
        },
        IMMEDIATE_CHILDREN: function () {
          return $;
        },
        IX2_ID_DELIMITER: function () {
          return i;
        },
        OPACITY: function () {
          return P;
        },
        PARENT: function () {
          return q;
        },
        PLAIN_OBJECT: function () {
          return ee;
        },
        PRESERVE_3D: function () {
          return Z;
        },
        RENDER_GENERAL: function () {
          return ea;
        },
        RENDER_PLUGIN: function () {
          return eo;
        },
        RENDER_STYLE: function () {
          return ei;
        },
        RENDER_TRANSFORM: function () {
          return en;
        },
        ROTATE_X: function () {
          return S;
        },
        ROTATE_Y: function () {
          return h;
        },
        ROTATE_Z: function () {
          return L;
        },
        SCALE_3D: function () {
          return _;
        },
        SCALE_X: function () {
          return v;
        },
        SCALE_Y: function () {
          return A;
        },
        SCALE_Z: function () {
          return R;
        },
        SIBLINGS: function () {
          return K;
        },
        SKEW: function () {
          return N;
        },
        SKEW_X: function () {
          return C;
        },
        SKEW_Y: function () {
          return G;
        },
        TRANSFORM: function () {
          return T;
        },
        TRANSLATE_3D: function () {
          return O;
        },
        TRANSLATE_X: function () {
          return g;
        },
        TRANSLATE_Y: function () {
          return m;
        },
        TRANSLATE_Z: function () {
          return b;
        },
        WF_PAGE: function () {
          return o;
        },
        WIDTH: function () {
          return U;
        },
        WILL_CHANGE: function () {
          return Q;
        },
        W_MOD_IX: function () {
          return d;
        },
        W_MOD_JS: function () {
          return l;
        },
      };
      for (var a in n)
        Object.defineProperty(t, a, { enumerable: !0, get: n[a] });
      let i = "|",
        o = "data-wf-page",
        l = "w-mod-js",
        d = "w-mod-ix",
        r = ".w-dyn-item",
        c = "xValue",
        s = "yValue",
        u = "zValue",
        f = "value",
        p = "xUnit",
        I = "yUnit",
        E = "zUnit",
        y = "unit",
        T = "transform",
        g = "translateX",
        m = "translateY",
        b = "translateZ",
        O = "translate3d",
        v = "scaleX",
        A = "scaleY",
        R = "scaleZ",
        _ = "scale3d",
        S = "rotateX",
        h = "rotateY",
        L = "rotateZ",
        N = "skew",
        C = "skewX",
        G = "skewY",
        P = "opacity",
        M = "filter",
        x = "font-variation-settings",
        U = "width",
        w = "height",
        V = "backgroundColor",
        F = "background",
        k = "borderColor",
        B = "color",
        D = "display",
        X = "flex",
        Q = "willChange",
        z = "AUTO",
        W = ",",
        Y = ":",
        j = "|",
        H = "CHILDREN",
        $ = "IMMEDIATE_CHILDREN",
        K = "SIBLINGS",
        q = "PARENT",
        Z = "preserve-3d",
        J = "HTML_ELEMENT",
        ee = "PLAIN_OBJECT",
        et = "ABSTRACT_NODE",
        en = "RENDER_TRANSFORM",
        ea = "RENDER_GENERAL",
        ei = "RENDER_STYLE",
        eo = "RENDER_PLUGIN";
    },
    262: function (e, t) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var n = {
        ActionAppliesTo: function () {
          return o;
        },
        ActionTypeConsts: function () {
          return i;
        },
      };
      for (var a in n)
        Object.defineProperty(t, a, { enumerable: !0, get: n[a] });
      let i = {
          TRANSFORM_MOVE: "TRANSFORM_MOVE",
          TRANSFORM_SCALE: "TRANSFORM_SCALE",
          TRANSFORM_ROTATE: "TRANSFORM_ROTATE",
          TRANSFORM_SKEW: "TRANSFORM_SKEW",
          STYLE_OPACITY: "STYLE_OPACITY",
          STYLE_SIZE: "STYLE_SIZE",
          STYLE_FILTER: "STYLE_FILTER",
          STYLE_FONT_VARIATION: "STYLE_FONT_VARIATION",
          STYLE_BACKGROUND_COLOR: "STYLE_BACKGROUND_COLOR",
          STYLE_BORDER: "STYLE_BORDER",
          STYLE_TEXT_COLOR: "STYLE_TEXT_COLOR",
          OBJECT_VALUE: "OBJECT_VALUE",
          PLUGIN_LOTTIE: "PLUGIN_LOTTIE",
          PLUGIN_SPLINE: "PLUGIN_SPLINE",
          PLUGIN_RIVE: "PLUGIN_RIVE",
          PLUGIN_VARIABLE: "PLUGIN_VARIABLE",
          GENERAL_DISPLAY: "GENERAL_DISPLAY",
          GENERAL_START_ACTION: "GENERAL_START_ACTION",
          GENERAL_CONTINUOUS_ACTION: "GENERAL_CONTINUOUS_ACTION",
          GENERAL_COMBO_CLASS: "GENERAL_COMBO_CLASS",
          GENERAL_STOP_ACTION: "GENERAL_STOP_ACTION",
          GENERAL_LOOP: "GENERAL_LOOP",
          STYLE_BOX_SHADOW: "STYLE_BOX_SHADOW",
        },
        o = {
          ELEMENT: "ELEMENT",
          ELEMENT_CLASS: "ELEMENT_CLASS",
          TRIGGER_ELEMENT: "TRIGGER_ELEMENT",
        };
    },
    7087: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var a = {
        ActionTypeConsts: function () {
          return l.ActionTypeConsts;
        },
        IX2EngineActionTypes: function () {
          return d;
        },
        IX2EngineConstants: function () {
          return r;
        },
        QuickEffectIds: function () {
          return o.QuickEffectIds;
        },
      };
      for (var i in a)
        Object.defineProperty(t, i, { enumerable: !0, get: a[i] });
      let o = c(n(1833), t),
        l = c(n(262), t);
      c(n(8704), t), c(n(3213), t);
      let d = u(n(8023)),
        r = u(n(2686));
      function c(e, t) {
        return (
          Object.keys(e).forEach(function (n) {
            "default" === n ||
              Object.prototype.hasOwnProperty.call(t, n) ||
              Object.defineProperty(t, n, {
                enumerable: !0,
                get: function () {
                  return e[n];
                },
              });
          }),
          e
        );
      }
      function s(e) {
        if ("function" != typeof WeakMap) return null;
        var t = new WeakMap(),
          n = new WeakMap();
        return (s = function (e) {
          return e ? n : t;
        })(e);
      }
      function u(e, t) {
        if (!t && e && e.__esModule) return e;
        if (null === e || ("object" != typeof e && "function" != typeof e))
          return { default: e };
        var n = s(t);
        if (n && n.has(e)) return n.get(e);
        var a = { __proto__: null },
          i = Object.defineProperty && Object.getOwnPropertyDescriptor;
        for (var o in e)
          if ("default" !== o && Object.prototype.hasOwnProperty.call(e, o)) {
            var l = i ? Object.getOwnPropertyDescriptor(e, o) : null;
            l && (l.get || l.set)
              ? Object.defineProperty(a, o, l)
              : (a[o] = e[o]);
          }
        return (a.default = e), n && n.set(e, a), a;
      }
    },
    3213: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "ReducedMotionTypes", {
          enumerable: !0,
          get: function () {
            return s;
          },
        });
      let {
          TRANSFORM_MOVE: a,
          TRANSFORM_SCALE: i,
          TRANSFORM_ROTATE: o,
          TRANSFORM_SKEW: l,
          STYLE_SIZE: d,
          STYLE_FILTER: r,
          STYLE_FONT_VARIATION: c,
        } = n(262).ActionTypeConsts,
        s = { [a]: !0, [i]: !0, [o]: !0, [l]: !0, [d]: !0, [r]: !0, [c]: !0 };
    },
    1833: function (e, t) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var n = {
        EventAppliesTo: function () {
          return o;
        },
        EventBasedOn: function () {
          return l;
        },
        EventContinuousMouseAxes: function () {
          return d;
        },
        EventLimitAffectedElements: function () {
          return r;
        },
        EventTypeConsts: function () {
          return i;
        },
        QuickEffectDirectionConsts: function () {
          return s;
        },
        QuickEffectIds: function () {
          return c;
        },
      };
      for (var a in n)
        Object.defineProperty(t, a, { enumerable: !0, get: n[a] });
      let i = {
          NAVBAR_OPEN: "NAVBAR_OPEN",
          NAVBAR_CLOSE: "NAVBAR_CLOSE",
          TAB_ACTIVE: "TAB_ACTIVE",
          TAB_INACTIVE: "TAB_INACTIVE",
          SLIDER_ACTIVE: "SLIDER_ACTIVE",
          SLIDER_INACTIVE: "SLIDER_INACTIVE",
          DROPDOWN_OPEN: "DROPDOWN_OPEN",
          DROPDOWN_CLOSE: "DROPDOWN_CLOSE",
          MOUSE_CLICK: "MOUSE_CLICK",
          MOUSE_SECOND_CLICK: "MOUSE_SECOND_CLICK",
          MOUSE_DOWN: "MOUSE_DOWN",
          MOUSE_UP: "MOUSE_UP",
          MOUSE_OVER: "MOUSE_OVER",
          MOUSE_OUT: "MOUSE_OUT",
          MOUSE_MOVE: "MOUSE_MOVE",
          MOUSE_MOVE_IN_VIEWPORT: "MOUSE_MOVE_IN_VIEWPORT",
          SCROLL_INTO_VIEW: "SCROLL_INTO_VIEW",
          SCROLL_OUT_OF_VIEW: "SCROLL_OUT_OF_VIEW",
          SCROLLING_IN_VIEW: "SCROLLING_IN_VIEW",
          ECOMMERCE_CART_OPEN: "ECOMMERCE_CART_OPEN",
          ECOMMERCE_CART_CLOSE: "ECOMMERCE_CART_CLOSE",
          PAGE_START: "PAGE_START",
          PAGE_FINISH: "PAGE_FINISH",
          PAGE_SCROLL_UP: "PAGE_SCROLL_UP",
          PAGE_SCROLL_DOWN: "PAGE_SCROLL_DOWN",
          PAGE_SCROLL: "PAGE_SCROLL",
        },
        o = { ELEMENT: "ELEMENT", CLASS: "CLASS", PAGE: "PAGE" },
        l = { ELEMENT: "ELEMENT", VIEWPORT: "VIEWPORT" },
        d = { X_AXIS: "X_AXIS", Y_AXIS: "Y_AXIS" },
        r = {
          CHILDREN: "CHILDREN",
          SIBLINGS: "SIBLINGS",
          IMMEDIATE_CHILDREN: "IMMEDIATE_CHILDREN",
        },
        c = {
          FADE_EFFECT: "FADE_EFFECT",
          SLIDE_EFFECT: "SLIDE_EFFECT",
          GROW_EFFECT: "GROW_EFFECT",
          SHRINK_EFFECT: "SHRINK_EFFECT",
          SPIN_EFFECT: "SPIN_EFFECT",
          FLY_EFFECT: "FLY_EFFECT",
          POP_EFFECT: "POP_EFFECT",
          FLIP_EFFECT: "FLIP_EFFECT",
          JIGGLE_EFFECT: "JIGGLE_EFFECT",
          PULSE_EFFECT: "PULSE_EFFECT",
          DROP_EFFECT: "DROP_EFFECT",
          BLINK_EFFECT: "BLINK_EFFECT",
          BOUNCE_EFFECT: "BOUNCE_EFFECT",
          FLIP_LEFT_TO_RIGHT_EFFECT: "FLIP_LEFT_TO_RIGHT_EFFECT",
          FLIP_RIGHT_TO_LEFT_EFFECT: "FLIP_RIGHT_TO_LEFT_EFFECT",
          RUBBER_BAND_EFFECT: "RUBBER_BAND_EFFECT",
          JELLO_EFFECT: "JELLO_EFFECT",
          GROW_BIG_EFFECT: "GROW_BIG_EFFECT",
          SHRINK_BIG_EFFECT: "SHRINK_BIG_EFFECT",
          PLUGIN_LOTTIE_EFFECT: "PLUGIN_LOTTIE_EFFECT",
        },
        s = {
          LEFT: "LEFT",
          RIGHT: "RIGHT",
          BOTTOM: "BOTTOM",
          TOP: "TOP",
          BOTTOM_LEFT: "BOTTOM_LEFT",
          BOTTOM_RIGHT: "BOTTOM_RIGHT",
          TOP_RIGHT: "TOP_RIGHT",
          TOP_LEFT: "TOP_LEFT",
          CLOCKWISE: "CLOCKWISE",
          COUNTER_CLOCKWISE: "COUNTER_CLOCKWISE",
        };
    },
    8704: function (e, t) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "InteractionTypeConsts", {
          enumerable: !0,
          get: function () {
            return n;
          },
        });
      let n = {
        MOUSE_CLICK_INTERACTION: "MOUSE_CLICK_INTERACTION",
        MOUSE_HOVER_INTERACTION: "MOUSE_HOVER_INTERACTION",
        MOUSE_MOVE_INTERACTION: "MOUSE_MOVE_INTERACTION",
        SCROLL_INTO_VIEW_INTERACTION: "SCROLL_INTO_VIEW_INTERACTION",
        SCROLLING_IN_VIEW_INTERACTION: "SCROLLING_IN_VIEW_INTERACTION",
        MOUSE_MOVE_IN_VIEWPORT_INTERACTION:
          "MOUSE_MOVE_IN_VIEWPORT_INTERACTION",
        PAGE_IS_SCROLLING_INTERACTION: "PAGE_IS_SCROLLING_INTERACTION",
        PAGE_LOAD_INTERACTION: "PAGE_LOAD_INTERACTION",
        PAGE_SCROLLED_INTERACTION: "PAGE_SCROLLED_INTERACTION",
        NAVBAR_INTERACTION: "NAVBAR_INTERACTION",
        DROPDOWN_INTERACTION: "DROPDOWN_INTERACTION",
        ECOMMERCE_CART_INTERACTION: "ECOMMERCE_CART_INTERACTION",
        TAB_INTERACTION: "TAB_INTERACTION",
        SLIDER_INTERACTION: "SLIDER_INTERACTION",
      };
    },
    380: function (e, t) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "normalizeColor", {
          enumerable: !0,
          get: function () {
            return a;
          },
        });
      let n = {
        aliceblue: "#F0F8FF",
        antiquewhite: "#FAEBD7",
        aqua: "#00FFFF",
        aquamarine: "#7FFFD4",
        azure: "#F0FFFF",
        beige: "#F5F5DC",
        bisque: "#FFE4C4",
        black: "#000000",
        blanchedalmond: "#FFEBCD",
        blue: "#0000FF",
        blueviolet: "#8A2BE2",
        brown: "#A52A2A",
        burlywood: "#DEB887",
        cadetblue: "#5F9EA0",
        chartreuse: "#7FFF00",
        chocolate: "#D2691E",
        coral: "#FF7F50",
        cornflowerblue: "#6495ED",
        cornsilk: "#FFF8DC",
        crimson: "#DC143C",
        cyan: "#00FFFF",
        darkblue: "#00008B",
        darkcyan: "#008B8B",
        darkgoldenrod: "#B8860B",
        darkgray: "#A9A9A9",
        darkgreen: "#006400",
        darkgrey: "#A9A9A9",
        darkkhaki: "#BDB76B",
        darkmagenta: "#8B008B",
        darkolivegreen: "#556B2F",
        darkorange: "#FF8C00",
        darkorchid: "#9932CC",
        darkred: "#8B0000",
        darksalmon: "#E9967A",
        darkseagreen: "#8FBC8F",
        darkslateblue: "#483D8B",
        darkslategray: "#2F4F4F",
        darkslategrey: "#2F4F4F",
        darkturquoise: "#00CED1",
        darkviolet: "#9400D3",
        deeppink: "#FF1493",
        deepskyblue: "#00BFFF",
        dimgray: "#696969",
        dimgrey: "#696969",
        dodgerblue: "#1E90FF",
        firebrick: "#B22222",
        floralwhite: "#FFFAF0",
        forestgreen: "#228B22",
        fuchsia: "#FF00FF",
        gainsboro: "#DCDCDC",
        ghostwhite: "#F8F8FF",
        gold: "#FFD700",
        goldenrod: "#DAA520",
        gray: "#808080",
        green: "#008000",
        greenyellow: "#ADFF2F",
        grey: "#808080",
        honeydew: "#F0FFF0",
        hotpink: "#FF69B4",
        indianred: "#CD5C5C",
        indigo: "#4B0082",
        ivory: "#FFFFF0",
        khaki: "#F0E68C",
        lavender: "#E6E6FA",
        lavenderblush: "#FFF0F5",
        lawngreen: "#7CFC00",
        lemonchiffon: "#FFFACD",
        lightblue: "#ADD8E6",
        lightcoral: "#F08080",
        lightcyan: "#E0FFFF",
        lightgoldenrodyellow: "#FAFAD2",
        lightgray: "#D3D3D3",
        lightgreen: "#90EE90",
        lightgrey: "#D3D3D3",
        lightpink: "#FFB6C1",
        lightsalmon: "#FFA07A",
        lightseagreen: "#20B2AA",
        lightskyblue: "#87CEFA",
        lightslategray: "#778899",
        lightslategrey: "#778899",
        lightsteelblue: "#B0C4DE",
        lightyellow: "#FFFFE0",
        lime: "#00FF00",
        limegreen: "#32CD32",
        linen: "#FAF0E6",
        magenta: "#FF00FF",
        maroon: "#800000",
        mediumaquamarine: "#66CDAA",
        mediumblue: "#0000CD",
        mediumorchid: "#BA55D3",
        mediumpurple: "#9370DB",
        mediumseagreen: "#3CB371",
        mediumslateblue: "#7B68EE",
        mediumspringgreen: "#00FA9A",
        mediumturquoise: "#48D1CC",
        mediumvioletred: "#C71585",
        midnightblue: "#191970",
        mintcream: "#F5FFFA",
        mistyrose: "#FFE4E1",
        moccasin: "#FFE4B5",
        navajowhite: "#FFDEAD",
        navy: "#000080",
        oldlace: "#FDF5E6",
        olive: "#808000",
        olivedrab: "#6B8E23",
        orange: "#FFA500",
        orangered: "#FF4500",
        orchid: "#DA70D6",
        palegoldenrod: "#EEE8AA",
        palegreen: "#98FB98",
        paleturquoise: "#AFEEEE",
        palevioletred: "#DB7093",
        papayawhip: "#FFEFD5",
        peachpuff: "#FFDAB9",
        peru: "#CD853F",
        pink: "#FFC0CB",
        plum: "#DDA0DD",
        powderblue: "#B0E0E6",
        purple: "#800080",
        rebeccapurple: "#663399",
        red: "#FF0000",
        rosybrown: "#BC8F8F",
        royalblue: "#4169E1",
        saddlebrown: "#8B4513",
        salmon: "#FA8072",
        sandybrown: "#F4A460",
        seagreen: "#2E8B57",
        seashell: "#FFF5EE",
        sienna: "#A0522D",
        silver: "#C0C0C0",
        skyblue: "#87CEEB",
        slateblue: "#6A5ACD",
        slategray: "#708090",
        slategrey: "#708090",
        snow: "#FFFAFA",
        springgreen: "#00FF7F",
        steelblue: "#4682B4",
        tan: "#D2B48C",
        teal: "#008080",
        thistle: "#D8BFD8",
        tomato: "#FF6347",
        turquoise: "#40E0D0",
        violet: "#EE82EE",
        wheat: "#F5DEB3",
        white: "#FFFFFF",
        whitesmoke: "#F5F5F5",
        yellow: "#FFFF00",
        yellowgreen: "#9ACD32",
      };
      function a(e) {
        let t,
          a,
          i,
          o = 1,
          l = e.replace(/\s/g, "").toLowerCase(),
          d = ("string" == typeof n[l] ? n[l].toLowerCase() : null) || l;
        if (d.startsWith("#")) {
          let e = d.substring(1);
          3 === e.length || 4 === e.length
            ? ((t = parseInt(e[0] + e[0], 16)),
              (a = parseInt(e[1] + e[1], 16)),
              (i = parseInt(e[2] + e[2], 16)),
              4 === e.length && (o = parseInt(e[3] + e[3], 16) / 255))
            : (6 === e.length || 8 === e.length) &&
              ((t = parseInt(e.substring(0, 2), 16)),
              (a = parseInt(e.substring(2, 4), 16)),
              (i = parseInt(e.substring(4, 6), 16)),
              8 === e.length && (o = parseInt(e.substring(6, 8), 16) / 255));
        } else if (d.startsWith("rgba")) {
          let e = d.match(/rgba\(([^)]+)\)/)[1].split(",");
          (t = parseInt(e[0], 10)),
            (a = parseInt(e[1], 10)),
            (i = parseInt(e[2], 10)),
            (o = parseFloat(e[3]));
        } else if (d.startsWith("rgb")) {
          let e = d.match(/rgb\(([^)]+)\)/)[1].split(",");
          (t = parseInt(e[0], 10)),
            (a = parseInt(e[1], 10)),
            (i = parseInt(e[2], 10));
        } else if (d.startsWith("hsla")) {
          let e,
            n,
            l,
            r = d.match(/hsla\(([^)]+)\)/)[1].split(","),
            c = parseFloat(r[0]),
            s = parseFloat(r[1].replace("%", "")) / 100,
            u = parseFloat(r[2].replace("%", "")) / 100;
          o = parseFloat(r[3]);
          let f = (1 - Math.abs(2 * u - 1)) * s,
            p = f * (1 - Math.abs(((c / 60) % 2) - 1)),
            I = u - f / 2;
          c >= 0 && c < 60
            ? ((e = f), (n = p), (l = 0))
            : c >= 60 && c < 120
            ? ((e = p), (n = f), (l = 0))
            : c >= 120 && c < 180
            ? ((e = 0), (n = f), (l = p))
            : c >= 180 && c < 240
            ? ((e = 0), (n = p), (l = f))
            : c >= 240 && c < 300
            ? ((e = p), (n = 0), (l = f))
            : ((e = f), (n = 0), (l = p)),
            (t = Math.round((e + I) * 255)),
            (a = Math.round((n + I) * 255)),
            (i = Math.round((l + I) * 255));
        } else if (d.startsWith("hsl")) {
          let e,
            n,
            o,
            l = d.match(/hsl\(([^)]+)\)/)[1].split(","),
            r = parseFloat(l[0]),
            c = parseFloat(l[1].replace("%", "")) / 100,
            s = parseFloat(l[2].replace("%", "")) / 100,
            u = (1 - Math.abs(2 * s - 1)) * c,
            f = u * (1 - Math.abs(((r / 60) % 2) - 1)),
            p = s - u / 2;
          r >= 0 && r < 60
            ? ((e = u), (n = f), (o = 0))
            : r >= 60 && r < 120
            ? ((e = f), (n = u), (o = 0))
            : r >= 120 && r < 180
            ? ((e = 0), (n = u), (o = f))
            : r >= 180 && r < 240
            ? ((e = 0), (n = f), (o = u))
            : r >= 240 && r < 300
            ? ((e = f), (n = 0), (o = u))
            : ((e = u), (n = 0), (o = f)),
            (t = Math.round((e + p) * 255)),
            (a = Math.round((n + p) * 255)),
            (i = Math.round((o + p) * 255));
        }
        if (Number.isNaN(t) || Number.isNaN(a) || Number.isNaN(i))
          throw Error(
            `Invalid color in [ix2/shared/utils/normalizeColor.js] '${e}'`
          );
        return { red: t, green: a, blue: i, alpha: o };
      }
    },
    9468: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var a = {
        IX2BrowserSupport: function () {
          return o;
        },
        IX2EasingUtils: function () {
          return d;
        },
        IX2Easings: function () {
          return l;
        },
        IX2ElementsReducer: function () {
          return r;
        },
        IX2VanillaPlugins: function () {
          return c;
        },
        IX2VanillaUtils: function () {
          return s;
        },
      };
      for (var i in a)
        Object.defineProperty(t, i, { enumerable: !0, get: a[i] });
      let o = f(n(2662)),
        l = f(n(8686)),
        d = f(n(3767)),
        r = f(n(5861)),
        c = f(n(1799)),
        s = f(n(4124));
      function u(e) {
        if ("function" != typeof WeakMap) return null;
        var t = new WeakMap(),
          n = new WeakMap();
        return (u = function (e) {
          return e ? n : t;
        })(e);
      }
      function f(e, t) {
        if (!t && e && e.__esModule) return e;
        if (null === e || ("object" != typeof e && "function" != typeof e))
          return { default: e };
        var n = u(t);
        if (n && n.has(e)) return n.get(e);
        var a = { __proto__: null },
          i = Object.defineProperty && Object.getOwnPropertyDescriptor;
        for (var o in e)
          if ("default" !== o && Object.prototype.hasOwnProperty.call(e, o)) {
            var l = i ? Object.getOwnPropertyDescriptor(e, o) : null;
            l && (l.get || l.set)
              ? Object.defineProperty(a, o, l)
              : (a[o] = e[o]);
          }
        return (a.default = e), n && n.set(e, a), a;
      }
    },
    2662: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var a,
        i = {
          ELEMENT_MATCHES: function () {
            return c;
          },
          FLEX_PREFIXED: function () {
            return s;
          },
          IS_BROWSER_ENV: function () {
            return d;
          },
          TRANSFORM_PREFIXED: function () {
            return u;
          },
          TRANSFORM_STYLE_PREFIXED: function () {
            return p;
          },
          withBrowser: function () {
            return r;
          },
        };
      for (var o in i)
        Object.defineProperty(t, o, { enumerable: !0, get: i[o] });
      let l = (a = n(9777)) && a.__esModule ? a : { default: a },
        d = "undefined" != typeof window,
        r = (e, t) => (d ? e() : t),
        c = r(() =>
          (0, l.default)(
            [
              "matches",
              "matchesSelector",
              "mozMatchesSelector",
              "msMatchesSelector",
              "oMatchesSelector",
              "webkitMatchesSelector",
            ],
            (e) => e in Element.prototype
          )
        ),
        s = r(() => {
          let e = document.createElement("i"),
            t = [
              "flex",
              "-webkit-flex",
              "-ms-flexbox",
              "-moz-box",
              "-webkit-box",
            ];
          try {
            let { length: n } = t;
            for (let a = 0; a < n; a++) {
              let n = t[a];
              if (((e.style.display = n), e.style.display === n)) return n;
            }
            return "";
          } catch (e) {
            return "";
          }
        }, "flex"),
        u = r(() => {
          let e = document.createElement("i");
          if (null == e.style.transform) {
            let t = ["Webkit", "Moz", "ms"],
              { length: n } = t;
            for (let a = 0; a < n; a++) {
              let n = t[a] + "Transform";
              if (void 0 !== e.style[n]) return n;
            }
          }
          return "transform";
        }, "transform"),
        f = u.split("transform")[0],
        p = f ? f + "TransformStyle" : "transformStyle";
    },
    3767: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var a,
        i = {
          applyEasing: function () {
            return u;
          },
          createBezierEasing: function () {
            return s;
          },
          optimizeFloat: function () {
            return c;
          },
        };
      for (var o in i)
        Object.defineProperty(t, o, { enumerable: !0, get: i[o] });
      let l = (function (e, t) {
          if (e && e.__esModule) return e;
          if (null === e || ("object" != typeof e && "function" != typeof e))
            return { default: e };
          var n = r(t);
          if (n && n.has(e)) return n.get(e);
          var a = { __proto__: null },
            i = Object.defineProperty && Object.getOwnPropertyDescriptor;
          for (var o in e)
            if ("default" !== o && Object.prototype.hasOwnProperty.call(e, o)) {
              var l = i ? Object.getOwnPropertyDescriptor(e, o) : null;
              l && (l.get || l.set)
                ? Object.defineProperty(a, o, l)
                : (a[o] = e[o]);
            }
          return (a.default = e), n && n.set(e, a), a;
        })(n(8686)),
        d = (a = n(1361)) && a.__esModule ? a : { default: a };
      function r(e) {
        if ("function" != typeof WeakMap) return null;
        var t = new WeakMap(),
          n = new WeakMap();
        return (r = function (e) {
          return e ? n : t;
        })(e);
      }
      function c(e, t = 5, n = 10) {
        let a = Math.pow(n, t),
          i = Number(Math.round(e * a) / a);
        return Math.abs(i) > 1e-4 ? i : 0;
      }
      function s(e) {
        return (0, d.default)(...e);
      }
      function u(e, t, n) {
        return 0 === t
          ? 0
          : 1 === t
          ? 1
          : n
          ? c(t > 0 ? n(t) : t)
          : c(t > 0 && e && l[e] ? l[e](t) : t);
      }
    },
    8686: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var a,
        i = {
          bounce: function () {
            return X;
          },
          bouncePast: function () {
            return Q;
          },
          ease: function () {
            return d;
          },
          easeIn: function () {
            return r;
          },
          easeInOut: function () {
            return s;
          },
          easeOut: function () {
            return c;
          },
          inBack: function () {
            return M;
          },
          inCirc: function () {
            return N;
          },
          inCubic: function () {
            return I;
          },
          inElastic: function () {
            return w;
          },
          inExpo: function () {
            return S;
          },
          inOutBack: function () {
            return U;
          },
          inOutCirc: function () {
            return G;
          },
          inOutCubic: function () {
            return y;
          },
          inOutElastic: function () {
            return F;
          },
          inOutExpo: function () {
            return L;
          },
          inOutQuad: function () {
            return p;
          },
          inOutQuart: function () {
            return m;
          },
          inOutQuint: function () {
            return v;
          },
          inOutSine: function () {
            return _;
          },
          inQuad: function () {
            return u;
          },
          inQuart: function () {
            return T;
          },
          inQuint: function () {
            return b;
          },
          inSine: function () {
            return A;
          },
          outBack: function () {
            return x;
          },
          outBounce: function () {
            return P;
          },
          outCirc: function () {
            return C;
          },
          outCubic: function () {
            return E;
          },
          outElastic: function () {
            return V;
          },
          outExpo: function () {
            return h;
          },
          outQuad: function () {
            return f;
          },
          outQuart: function () {
            return g;
          },
          outQuint: function () {
            return O;
          },
          outSine: function () {
            return R;
          },
          swingFrom: function () {
            return B;
          },
          swingFromTo: function () {
            return k;
          },
          swingTo: function () {
            return D;
          },
        };
      for (var o in i)
        Object.defineProperty(t, o, { enumerable: !0, get: i[o] });
      let l = (a = n(1361)) && a.__esModule ? a : { default: a },
        d = (0, l.default)(0.25, 0.1, 0.25, 1),
        r = (0, l.default)(0.42, 0, 1, 1),
        c = (0, l.default)(0, 0, 0.58, 1),
        s = (0, l.default)(0.42, 0, 0.58, 1);
      function u(e) {
        return Math.pow(e, 2);
      }
      function f(e) {
        return -(Math.pow(e - 1, 2) - 1);
      }
      function p(e) {
        return (e /= 0.5) < 1
          ? 0.5 * Math.pow(e, 2)
          : -0.5 * ((e -= 2) * e - 2);
      }
      function I(e) {
        return Math.pow(e, 3);
      }
      function E(e) {
        return Math.pow(e - 1, 3) + 1;
      }
      function y(e) {
        return (e /= 0.5) < 1
          ? 0.5 * Math.pow(e, 3)
          : 0.5 * (Math.pow(e - 2, 3) + 2);
      }
      function T(e) {
        return Math.pow(e, 4);
      }
      function g(e) {
        return -(Math.pow(e - 1, 4) - 1);
      }
      function m(e) {
        return (e /= 0.5) < 1
          ? 0.5 * Math.pow(e, 4)
          : -0.5 * ((e -= 2) * Math.pow(e, 3) - 2);
      }
      function b(e) {
        return Math.pow(e, 5);
      }
      function O(e) {
        return Math.pow(e - 1, 5) + 1;
      }
      function v(e) {
        return (e /= 0.5) < 1
          ? 0.5 * Math.pow(e, 5)
          : 0.5 * (Math.pow(e - 2, 5) + 2);
      }
      function A(e) {
        return -Math.cos((Math.PI / 2) * e) + 1;
      }
      function R(e) {
        return Math.sin((Math.PI / 2) * e);
      }
      function _(e) {
        return -0.5 * (Math.cos(Math.PI * e) - 1);
      }
      function S(e) {
        return 0 === e ? 0 : Math.pow(2, 10 * (e - 1));
      }
      function h(e) {
        return 1 === e ? 1 : -Math.pow(2, -10 * e) + 1;
      }
      function L(e) {
        return 0 === e
          ? 0
          : 1 === e
          ? 1
          : (e /= 0.5) < 1
          ? 0.5 * Math.pow(2, 10 * (e - 1))
          : 0.5 * (-Math.pow(2, -10 * --e) + 2);
      }
      function N(e) {
        return -(Math.sqrt(1 - e * e) - 1);
      }
      function C(e) {
        return Math.sqrt(1 - Math.pow(e - 1, 2));
      }
      function G(e) {
        return (e /= 0.5) < 1
          ? -0.5 * (Math.sqrt(1 - e * e) - 1)
          : 0.5 * (Math.sqrt(1 - (e -= 2) * e) + 1);
      }
      function P(e) {
        return e < 1 / 2.75
          ? 7.5625 * e * e
          : e < 2 / 2.75
          ? 7.5625 * (e -= 1.5 / 2.75) * e + 0.75
          : e < 2.5 / 2.75
          ? 7.5625 * (e -= 2.25 / 2.75) * e + 0.9375
          : 7.5625 * (e -= 2.625 / 2.75) * e + 0.984375;
      }
      function M(e) {
        return e * e * (2.70158 * e - 1.70158);
      }
      function x(e) {
        return (e -= 1) * e * (2.70158 * e + 1.70158) + 1;
      }
      function U(e) {
        let t = 1.70158;
        return (e /= 0.5) < 1
          ? 0.5 * (e * e * (((t *= 1.525) + 1) * e - t))
          : 0.5 * ((e -= 2) * e * (((t *= 1.525) + 1) * e + t) + 2);
      }
      function w(e) {
        let t = 1.70158,
          n = 0,
          a = 1;
        return 0 === e
          ? 0
          : 1 === e
          ? 1
          : (n || (n = 0.3),
            a < 1
              ? ((a = 1), (t = n / 4))
              : (t = (n / (2 * Math.PI)) * Math.asin(1 / a)),
            -(
              a *
              Math.pow(2, 10 * (e -= 1)) *
              Math.sin((2 * Math.PI * (e - t)) / n)
            ));
      }
      function V(e) {
        let t = 1.70158,
          n = 0,
          a = 1;
        return 0 === e
          ? 0
          : 1 === e
          ? 1
          : (n || (n = 0.3),
            a < 1
              ? ((a = 1), (t = n / 4))
              : (t = (n / (2 * Math.PI)) * Math.asin(1 / a)),
            a * Math.pow(2, -10 * e) * Math.sin((2 * Math.PI * (e - t)) / n) +
              1);
      }
      function F(e) {
        let t = 1.70158,
          n = 0,
          a = 1;
        return 0 === e
          ? 0
          : 2 == (e /= 0.5)
          ? 1
          : (n || (n = 0.3 * 1.5),
            a < 1
              ? ((a = 1), (t = n / 4))
              : (t = (n / (2 * Math.PI)) * Math.asin(1 / a)),
            e < 1)
          ? -0.5 *
            (a *
              Math.pow(2, 10 * (e -= 1)) *
              Math.sin((2 * Math.PI * (e - t)) / n))
          : a *
              Math.pow(2, -10 * (e -= 1)) *
              Math.sin((2 * Math.PI * (e - t)) / n) *
              0.5 +
            1;
      }
      function k(e) {
        let t = 1.70158;
        return (e /= 0.5) < 1
          ? 0.5 * (e * e * (((t *= 1.525) + 1) * e - t))
          : 0.5 * ((e -= 2) * e * (((t *= 1.525) + 1) * e + t) + 2);
      }
      function B(e) {
        return e * e * (2.70158 * e - 1.70158);
      }
      function D(e) {
        return (e -= 1) * e * (2.70158 * e + 1.70158) + 1;
      }
      function X(e) {
        return e < 1 / 2.75
          ? 7.5625 * e * e
          : e < 2 / 2.75
          ? 7.5625 * (e -= 1.5 / 2.75) * e + 0.75
          : e < 2.5 / 2.75
          ? 7.5625 * (e -= 2.25 / 2.75) * e + 0.9375
          : 7.5625 * (e -= 2.625 / 2.75) * e + 0.984375;
      }
      function Q(e) {
        return e < 1 / 2.75
          ? 7.5625 * e * e
          : e < 2 / 2.75
          ? 2 - (7.5625 * (e -= 1.5 / 2.75) * e + 0.75)
          : e < 2.5 / 2.75
          ? 2 - (7.5625 * (e -= 2.25 / 2.75) * e + 0.9375)
          : 2 - (7.5625 * (e -= 2.625 / 2.75) * e + 0.984375);
      }
    },
    1799: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var a = {
        clearPlugin: function () {
          return E;
        },
        createPluginInstance: function () {
          return p;
        },
        getPluginConfig: function () {
          return c;
        },
        getPluginDestination: function () {
          return f;
        },
        getPluginDuration: function () {
          return u;
        },
        getPluginOrigin: function () {
          return s;
        },
        isPluginType: function () {
          return d;
        },
        renderPlugin: function () {
          return I;
        },
      };
      for (var i in a)
        Object.defineProperty(t, i, { enumerable: !0, get: a[i] });
      let o = n(2662),
        l = n(3690);
      function d(e) {
        return l.pluginMethodMap.has(e);
      }
      let r = (e) => (t) => {
          if (!o.IS_BROWSER_ENV) return () => null;
          let n = l.pluginMethodMap.get(t);
          if (!n) throw Error(`IX2 no plugin configured for: ${t}`);
          let a = n[e];
          if (!a) throw Error(`IX2 invalid plugin method: ${e}`);
          return a;
        },
        c = r("getPluginConfig"),
        s = r("getPluginOrigin"),
        u = r("getPluginDuration"),
        f = r("getPluginDestination"),
        p = r("createPluginInstance"),
        I = r("renderPlugin"),
        E = r("clearPlugin");
    },
    4124: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var a = {
        cleanupHTMLElement: function () {
          return eW;
        },
        clearAllStyles: function () {
          return eX;
        },
        clearObjectCache: function () {
          return eu;
        },
        getActionListProgress: function () {
          return e$;
        },
        getAffectedElements: function () {
          return eb;
        },
        getComputedStyle: function () {
          return eO;
        },
        getDestinationValues: function () {
          return eN;
        },
        getElementId: function () {
          return eE;
        },
        getInstanceId: function () {
          return ep;
        },
        getInstanceOrigin: function () {
          return e_;
        },
        getItemConfigByKey: function () {
          return eL;
        },
        getMaxDurationItemIndex: function () {
          return eH;
        },
        getNamespacedParameterId: function () {
          return eZ;
        },
        getRenderType: function () {
          return eC;
        },
        getStyleProp: function () {
          return eG;
        },
        mediaQueriesEqual: function () {
          return e0;
        },
        observeStore: function () {
          return eg;
        },
        reduceListToGroup: function () {
          return eK;
        },
        reifyState: function () {
          return ey;
        },
        renderHTMLElement: function () {
          return eP;
        },
        shallowEqual: function () {
          return s.default;
        },
        shouldAllowMediaQuery: function () {
          return eJ;
        },
        shouldNamespaceEventParameter: function () {
          return eq;
        },
        stringifyTarget: function () {
          return e1;
        },
      };
      for (var i in a)
        Object.defineProperty(t, i, { enumerable: !0, get: a[i] });
      let o = E(n(4075)),
        l = E(n(1455)),
        d = E(n(5720)),
        r = n(1185),
        c = n(7087),
        s = E(n(7164)),
        u = n(3767),
        f = n(380),
        p = n(1799),
        I = n(2662);
      function E(e) {
        return e && e.__esModule ? e : { default: e };
      }
      let {
          BACKGROUND: y,
          TRANSFORM: T,
          TRANSLATE_3D: g,
          SCALE_3D: m,
          ROTATE_X: b,
          ROTATE_Y: O,
          ROTATE_Z: v,
          SKEW: A,
          PRESERVE_3D: R,
          FLEX: _,
          OPACITY: S,
          FILTER: h,
          FONT_VARIATION_SETTINGS: L,
          WIDTH: N,
          HEIGHT: C,
          BACKGROUND_COLOR: G,
          BORDER_COLOR: P,
          COLOR: M,
          CHILDREN: x,
          IMMEDIATE_CHILDREN: U,
          SIBLINGS: w,
          PARENT: V,
          DISPLAY: F,
          WILL_CHANGE: k,
          AUTO: B,
          COMMA_DELIMITER: D,
          COLON_DELIMITER: X,
          BAR_DELIMITER: Q,
          RENDER_TRANSFORM: z,
          RENDER_GENERAL: W,
          RENDER_STYLE: Y,
          RENDER_PLUGIN: j,
        } = c.IX2EngineConstants,
        {
          TRANSFORM_MOVE: H,
          TRANSFORM_SCALE: $,
          TRANSFORM_ROTATE: K,
          TRANSFORM_SKEW: q,
          STYLE_OPACITY: Z,
          STYLE_FILTER: J,
          STYLE_FONT_VARIATION: ee,
          STYLE_SIZE: et,
          STYLE_BACKGROUND_COLOR: en,
          STYLE_BORDER: ea,
          STYLE_TEXT_COLOR: ei,
          GENERAL_DISPLAY: eo,
          OBJECT_VALUE: el,
        } = c.ActionTypeConsts,
        ed = (e) => e.trim(),
        er = Object.freeze({ [en]: G, [ea]: P, [ei]: M }),
        ec = Object.freeze({
          [I.TRANSFORM_PREFIXED]: T,
          [G]: y,
          [S]: S,
          [h]: h,
          [N]: N,
          [C]: C,
          [L]: L,
        }),
        es = new Map();
      function eu() {
        es.clear();
      }
      let ef = 1;
      function ep() {
        return "i" + ef++;
      }
      let eI = 1;
      function eE(e, t) {
        for (let n in e) {
          let a = e[n];
          if (a && a.ref === t) return a.id;
        }
        return "e" + eI++;
      }
      function ey({ events: e, actionLists: t, site: n } = {}) {
        let a = (0, l.default)(
            e,
            (e, t) => {
              let { eventTypeId: n } = t;
              return e[n] || (e[n] = {}), (e[n][t.id] = t), e;
            },
            {}
          ),
          i = n && n.mediaQueries,
          o = [];
        return (
          i
            ? (o = i.map((e) => e.key))
            : ((i = []), console.warn("IX2 missing mediaQueries in site data")),
          {
            ixData: {
              events: e,
              actionLists: t,
              eventTypeMap: a,
              mediaQueries: i,
              mediaQueryKeys: o,
            },
          }
        );
      }
      let eT = (e, t) => e === t;
      function eg({ store: e, select: t, onChange: n, comparator: a = eT }) {
        let { getState: i, subscribe: o } = e,
          l = o(function () {
            let o = t(i());
            if (null == o) return void l();
            a(o, d) || n((d = o), e);
          }),
          d = t(i());
        return l;
      }
      function em(e) {
        let t = typeof e;
        if ("string" === t) return { id: e };
        if (null != e && "object" === t) {
          let {
            id: t,
            objectId: n,
            selector: a,
            selectorGuids: i,
            appliesTo: o,
            useEventTarget: l,
          } = e;
          return {
            id: t,
            objectId: n,
            selector: a,
            selectorGuids: i,
            appliesTo: o,
            useEventTarget: l,
          };
        }
        return {};
      }
      function eb({
        config: e,
        event: t,
        eventTarget: n,
        elementRoot: a,
        elementApi: i,
      }) {
        let o, l, d;
        if (!i) throw Error("IX2 missing elementApi");
        let { targets: r } = e;
        if (Array.isArray(r) && r.length > 0)
          return r.reduce(
            (e, o) =>
              e.concat(
                eb({
                  config: { target: o },
                  event: t,
                  eventTarget: n,
                  elementRoot: a,
                  elementApi: i,
                })
              ),
            []
          );
        let {
            getValidDocument: s,
            getQuerySelector: u,
            queryDocument: f,
            getChildElements: p,
            getSiblingElements: E,
            matchSelector: y,
            elementContains: T,
            isSiblingNode: g,
          } = i,
          { target: m } = e;
        if (!m) return [];
        let {
          id: b,
          objectId: O,
          selector: v,
          selectorGuids: A,
          appliesTo: R,
          useEventTarget: _,
        } = em(m);
        if (O) return [es.has(O) ? es.get(O) : es.set(O, {}).get(O)];
        if (R === c.EventAppliesTo.PAGE) {
          let e = s(b);
          return e ? [e] : [];
        }
        let S = (t?.action?.config?.affectedElements ?? {})[b || v] || {},
          h = !!(S.id || S.selector),
          L = t && u(em(t.target));
        if (
          (h
            ? ((o = S.limitAffectedElements), (l = L), (d = u(S)))
            : (l = d = u({ id: b, selector: v, selectorGuids: A })),
          t && _)
        ) {
          let e = n && (d || !0 === _) ? [n] : f(L);
          if (d) {
            if (_ === V) return f(d).filter((t) => e.some((e) => T(t, e)));
            if (_ === x) return f(d).filter((t) => e.some((e) => T(e, t)));
            if (_ === w) return f(d).filter((t) => e.some((e) => g(e, t)));
          }
          return e;
        }
        return null == l || null == d
          ? []
          : I.IS_BROWSER_ENV && a
          ? f(d).filter((e) => a.contains(e))
          : o === x
          ? f(l, d)
          : o === U
          ? p(f(l)).filter(y(d))
          : o === w
          ? E(f(l)).filter(y(d))
          : f(d);
      }
      function eO({ element: e, actionItem: t }) {
        if (!I.IS_BROWSER_ENV) return {};
        let { actionTypeId: n } = t;
        switch (n) {
          case et:
          case en:
          case ea:
          case ei:
          case eo:
            return window.getComputedStyle(e);
          default:
            return {};
        }
      }
      let ev = /px/,
        eA = (e, t) =>
          t.reduce(
            (e, t) => (null == e[t.type] && (e[t.type] = ex[t.type]), e),
            e || {}
          ),
        eR = (e, t) =>
          t.reduce(
            (e, t) => (
              null == e[t.type] &&
                (e[t.type] = eU[t.type] || t.defaultValue || 0),
              e
            ),
            e || {}
          );
      function e_(e, t = {}, n = {}, a, i) {
        let { getStyle: l } = i,
          { actionTypeId: d } = a;
        if ((0, p.isPluginType)(d)) return (0, p.getPluginOrigin)(d)(t[d], a);
        switch (a.actionTypeId) {
          case H:
          case $:
          case K:
          case q:
            return t[a.actionTypeId] || eM[a.actionTypeId];
          case J:
            return eA(t[a.actionTypeId], a.config.filters);
          case ee:
            return eR(t[a.actionTypeId], a.config.fontVariations);
          case Z:
            return { value: (0, o.default)(parseFloat(l(e, S)), 1) };
          case et: {
            let t,
              i = l(e, N),
              d = l(e, C);
            return {
              widthValue:
                a.config.widthUnit === B
                  ? ev.test(i)
                    ? parseFloat(i)
                    : parseFloat(n.width)
                  : (0, o.default)(parseFloat(i), parseFloat(n.width)),
              heightValue:
                a.config.heightUnit === B
                  ? ev.test(d)
                    ? parseFloat(d)
                    : parseFloat(n.height)
                  : (0, o.default)(parseFloat(d), parseFloat(n.height)),
            };
          }
          case en:
          case ea:
          case ei:
            return (function ({
              element: e,
              actionTypeId: t,
              computedStyle: n,
              getStyle: a,
            }) {
              let i = er[t],
                l = a(e, i),
                d = (function (e, t) {
                  let n = e.exec(t);
                  return n ? n[1] : "";
                })(ek, eF.test(l) ? l : n[i]).split(D);
              return {
                rValue: (0, o.default)(parseInt(d[0], 10), 255),
                gValue: (0, o.default)(parseInt(d[1], 10), 255),
                bValue: (0, o.default)(parseInt(d[2], 10), 255),
                aValue: (0, o.default)(parseFloat(d[3]), 1),
              };
            })({
              element: e,
              actionTypeId: a.actionTypeId,
              computedStyle: n,
              getStyle: l,
            });
          case eo:
            return { value: (0, o.default)(l(e, F), n.display) };
          case el:
            return t[a.actionTypeId] || { value: 0 };
          default:
            return;
        }
      }
      let eS = (e, t) => (t && (e[t.type] = t.value || 0), e),
        eh = (e, t) => (t && (e[t.type] = t.value || 0), e),
        eL = (e, t, n) => {
          if ((0, p.isPluginType)(e)) return (0, p.getPluginConfig)(e)(n, t);
          switch (e) {
            case J: {
              let e = (0, d.default)(n.filters, ({ type: e }) => e === t);
              return e ? e.value : 0;
            }
            case ee: {
              let e = (0, d.default)(
                n.fontVariations,
                ({ type: e }) => e === t
              );
              return e ? e.value : 0;
            }
            default:
              return n[t];
          }
        };
      function eN({ element: e, actionItem: t, elementApi: n }) {
        if ((0, p.isPluginType)(t.actionTypeId))
          return (0, p.getPluginDestination)(t.actionTypeId)(t.config);
        switch (t.actionTypeId) {
          case H:
          case $:
          case K:
          case q: {
            let { xValue: e, yValue: n, zValue: a } = t.config;
            return { xValue: e, yValue: n, zValue: a };
          }
          case et: {
            let { getStyle: a, setStyle: i, getProperty: o } = n,
              { widthUnit: l, heightUnit: d } = t.config,
              { widthValue: r, heightValue: c } = t.config;
            if (!I.IS_BROWSER_ENV) return { widthValue: r, heightValue: c };
            if (l === B) {
              let t = a(e, N);
              i(e, N, ""), (r = o(e, "offsetWidth")), i(e, N, t);
            }
            if (d === B) {
              let t = a(e, C);
              i(e, C, ""), (c = o(e, "offsetHeight")), i(e, C, t);
            }
            return { widthValue: r, heightValue: c };
          }
          case en:
          case ea:
          case ei: {
            let {
              rValue: a,
              gValue: i,
              bValue: o,
              aValue: l,
              globalSwatchId: d,
            } = t.config;
            if (d && d.startsWith("--")) {
              let { getStyle: t } = n,
                a = t(e, d),
                i = (0, f.normalizeColor)(a);
              return {
                rValue: i.red,
                gValue: i.green,
                bValue: i.blue,
                aValue: i.alpha,
              };
            }
            return { rValue: a, gValue: i, bValue: o, aValue: l };
          }
          case J:
            return t.config.filters.reduce(eS, {});
          case ee:
            return t.config.fontVariations.reduce(eh, {});
          default: {
            let { value: e } = t.config;
            return { value: e };
          }
        }
      }
      function eC(e) {
        return /^TRANSFORM_/.test(e)
          ? z
          : /^STYLE_/.test(e)
          ? Y
          : /^GENERAL_/.test(e)
          ? W
          : /^PLUGIN_/.test(e)
          ? j
          : void 0;
      }
      function eG(e, t) {
        return e === Y ? t.replace("STYLE_", "").toLowerCase() : null;
      }
      function eP(e, t, n, a, i, o, d, r, c) {
        switch (r) {
          case z:
            var s = e,
              u = t,
              f = n,
              E = i,
              y = d;
            let T = eV
                .map((e) => {
                  let t = eM[e],
                    {
                      xValue: n = t.xValue,
                      yValue: a = t.yValue,
                      zValue: i = t.zValue,
                      xUnit: o = "",
                      yUnit: l = "",
                      zUnit: d = "",
                    } = u[e] || {};
                  switch (e) {
                    case H:
                      return `${g}(${n}${o}, ${a}${l}, ${i}${d})`;
                    case $:
                      return `${m}(${n}${o}, ${a}${l}, ${i}${d})`;
                    case K:
                      return `${b}(${n}${o}) ${O}(${a}${l}) ${v}(${i}${d})`;
                    case q:
                      return `${A}(${n}${o}, ${a}${l})`;
                    default:
                      return "";
                  }
                })
                .join(" "),
              { setStyle: S } = y;
            eB(s, I.TRANSFORM_PREFIXED, y),
              S(s, I.TRANSFORM_PREFIXED, T),
              (function (
                { actionTypeId: e },
                { xValue: t, yValue: n, zValue: a }
              ) {
                return (
                  (e === H && void 0 !== a) ||
                  (e === $ && void 0 !== a) ||
                  (e === K && (void 0 !== t || void 0 !== n))
                );
              })(E, f) && S(s, I.TRANSFORM_STYLE_PREFIXED, R);
            return;
          case Y:
            return (function (e, t, n, a, i, o) {
              let { setStyle: d } = o;
              switch (a.actionTypeId) {
                case et: {
                  let { widthUnit: t = "", heightUnit: i = "" } = a.config,
                    { widthValue: l, heightValue: r } = n;
                  void 0 !== l &&
                    (t === B && (t = "px"), eB(e, N, o), d(e, N, l + t)),
                    void 0 !== r &&
                      (i === B && (i = "px"), eB(e, C, o), d(e, C, r + i));
                  break;
                }
                case J:
                  var r = a.config;
                  let c = (0, l.default)(
                      n,
                      (e, t, n) => `${e} ${n}(${t}${ew(n, r)})`,
                      ""
                    ),
                    { setStyle: s } = o;
                  eB(e, h, o), s(e, h, c);
                  break;
                case ee:
                  a.config;
                  let u = (0, l.default)(
                      n,
                      (e, t, n) => (e.push(`"${n}" ${t}`), e),
                      []
                    ).join(", "),
                    { setStyle: f } = o;
                  eB(e, L, o), f(e, L, u);
                  break;
                case en:
                case ea:
                case ei: {
                  let t = er[a.actionTypeId],
                    i = Math.round(n.rValue),
                    l = Math.round(n.gValue),
                    r = Math.round(n.bValue),
                    c = n.aValue;
                  eB(e, t, o),
                    d(
                      e,
                      t,
                      c >= 1
                        ? `rgb(${i},${l},${r})`
                        : `rgba(${i},${l},${r},${c})`
                    );
                  break;
                }
                default: {
                  let { unit: t = "" } = a.config;
                  eB(e, i, o), d(e, i, n.value + t);
                }
              }
            })(e, 0, n, i, o, d);
          case W:
            var G = e,
              P = i,
              M = d;
            let { setStyle: x } = M;
            if (P.actionTypeId === eo) {
              let { value: e } = P.config;
              x(G, F, e === _ && I.IS_BROWSER_ENV ? I.FLEX_PREFIXED : e);
            }
            return;
          case j: {
            let { actionTypeId: e } = i;
            if ((0, p.isPluginType)(e)) return (0, p.renderPlugin)(e)(c, t, i);
          }
        }
      }
      let eM = {
          [H]: Object.freeze({ xValue: 0, yValue: 0, zValue: 0 }),
          [$]: Object.freeze({ xValue: 1, yValue: 1, zValue: 1 }),
          [K]: Object.freeze({ xValue: 0, yValue: 0, zValue: 0 }),
          [q]: Object.freeze({ xValue: 0, yValue: 0 }),
        },
        ex = Object.freeze({
          blur: 0,
          "hue-rotate": 0,
          invert: 0,
          grayscale: 0,
          saturate: 100,
          sepia: 0,
          contrast: 100,
          brightness: 100,
        }),
        eU = Object.freeze({ wght: 0, opsz: 0, wdth: 0, slnt: 0 }),
        ew = (e, t) => {
          let n = (0, d.default)(t.filters, ({ type: t }) => t === e);
          if (n && n.unit) return n.unit;
          switch (e) {
            case "blur":
              return "px";
            case "hue-rotate":
              return "deg";
            default:
              return "%";
          }
        },
        eV = Object.keys(eM),
        eF = /^rgb/,
        ek = RegExp("rgba?\\(([^)]+)\\)");
      function eB(e, t, n) {
        if (!I.IS_BROWSER_ENV) return;
        let a = ec[t];
        if (!a) return;
        let { getStyle: i, setStyle: o } = n,
          l = i(e, k);
        if (!l) return void o(e, k, a);
        let d = l.split(D).map(ed);
        -1 === d.indexOf(a) && o(e, k, d.concat(a).join(D));
      }
      function eD(e, t, n) {
        if (!I.IS_BROWSER_ENV) return;
        let a = ec[t];
        if (!a) return;
        let { getStyle: i, setStyle: o } = n,
          l = i(e, k);
        l &&
          -1 !== l.indexOf(a) &&
          o(
            e,
            k,
            l
              .split(D)
              .map(ed)
              .filter((e) => e !== a)
              .join(D)
          );
      }
      function eX({ store: e, elementApi: t }) {
        let { ixData: n } = e.getState(),
          { events: a = {}, actionLists: i = {} } = n;
        Object.keys(a).forEach((e) => {
          let n = a[e],
            { config: o } = n.action,
            { actionListId: l } = o,
            d = i[l];
          d && eQ({ actionList: d, event: n, elementApi: t });
        }),
          Object.keys(i).forEach((e) => {
            eQ({ actionList: i[e], elementApi: t });
          });
      }
      function eQ({ actionList: e = {}, event: t, elementApi: n }) {
        let { actionItemGroups: a, continuousParameterGroups: i } = e;
        a &&
          a.forEach((e) => {
            ez({ actionGroup: e, event: t, elementApi: n });
          }),
          i &&
            i.forEach((e) => {
              let { continuousActionGroups: a } = e;
              a.forEach((e) => {
                ez({ actionGroup: e, event: t, elementApi: n });
              });
            });
      }
      function ez({ actionGroup: e, event: t, elementApi: n }) {
        let { actionItems: a } = e;
        a.forEach((e) => {
          let a,
            { actionTypeId: i, config: o } = e;
          (a = (0, p.isPluginType)(i)
            ? (t) => (0, p.clearPlugin)(i)(t, e)
            : eY({ effect: ej, actionTypeId: i, elementApi: n })),
            eb({ config: o, event: t, elementApi: n }).forEach(a);
        });
      }
      function eW(e, t, n) {
        let { setStyle: a, getStyle: i } = n,
          { actionTypeId: o } = t;
        if (o === et) {
          let { config: n } = t;
          n.widthUnit === B && a(e, N, ""), n.heightUnit === B && a(e, C, "");
        }
        i(e, k) && eY({ effect: eD, actionTypeId: o, elementApi: n })(e);
      }
      let eY =
        ({ effect: e, actionTypeId: t, elementApi: n }) =>
        (a) => {
          switch (t) {
            case H:
            case $:
            case K:
            case q:
              e(a, I.TRANSFORM_PREFIXED, n);
              break;
            case J:
              e(a, h, n);
              break;
            case ee:
              e(a, L, n);
              break;
            case Z:
              e(a, S, n);
              break;
            case et:
              e(a, N, n), e(a, C, n);
              break;
            case en:
            case ea:
            case ei:
              e(a, er[t], n);
              break;
            case eo:
              e(a, F, n);
          }
        };
      function ej(e, t, n) {
        let { setStyle: a } = n;
        eD(e, t, n),
          a(e, t, ""),
          t === I.TRANSFORM_PREFIXED && a(e, I.TRANSFORM_STYLE_PREFIXED, "");
      }
      function eH(e) {
        let t = 0,
          n = 0;
        return (
          e.forEach((e, a) => {
            let { config: i } = e,
              o = i.delay + i.duration;
            o >= t && ((t = o), (n = a));
          }),
          n
        );
      }
      function e$(e, t) {
        let { actionItemGroups: n, useFirstGroupAsInitialState: a } = e,
          { actionItem: i, verboseTimeElapsed: o = 0 } = t,
          l = 0,
          d = 0;
        return (
          n.forEach((e, t) => {
            if (a && 0 === t) return;
            let { actionItems: n } = e,
              r = n[eH(n)],
              { config: c, actionTypeId: s } = r;
            i.id === r.id && (d = l + o);
            let u = eC(s) === W ? 0 : c.duration;
            l += c.delay + u;
          }),
          l > 0 ? (0, u.optimizeFloat)(d / l) : 0
        );
      }
      function eK({ actionList: e, actionItemId: t, rawData: n }) {
        let { actionItemGroups: a, continuousParameterGroups: i } = e,
          o = [],
          l = (e) => (
            o.push((0, r.mergeIn)(e, ["config"], { delay: 0, duration: 0 })),
            e.id === t
          );
        return (
          a && a.some(({ actionItems: e }) => e.some(l)),
          i &&
            i.some((e) => {
              let { continuousActionGroups: t } = e;
              return t.some(({ actionItems: e }) => e.some(l));
            }),
          (0, r.setIn)(n, ["actionLists"], {
            [e.id]: { id: e.id, actionItemGroups: [{ actionItems: o }] },
          })
        );
      }
      function eq(e, { basedOn: t }) {
        return (
          (e === c.EventTypeConsts.SCROLLING_IN_VIEW &&
            (t === c.EventBasedOn.ELEMENT || null == t)) ||
          (e === c.EventTypeConsts.MOUSE_MOVE && t === c.EventBasedOn.ELEMENT)
        );
      }
      function eZ(e, t) {
        return e + X + t;
      }
      function eJ(e, t) {
        return null == t || -1 !== e.indexOf(t);
      }
      function e0(e, t) {
        return (0, s.default)(e && e.sort(), t && t.sort());
      }
      function e1(e) {
        if ("string" == typeof e) return e;
        if (e.pluginElement && e.objectId)
          return e.pluginElement + Q + e.objectId;
        if (e.objectId) return e.objectId;
        let { id: t = "", selector: n = "", useEventTarget: a = "" } = e;
        return t + Q + n + Q + a;
      }
    },
    7164: function (e, t) {
      "use strict";
      function n(e, t) {
        return e === t
          ? 0 !== e || 0 !== t || 1 / e == 1 / t
          : e != e && t != t;
      }
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "default", {
          enumerable: !0,
          get: function () {
            return a;
          },
        });
      let a = function (e, t) {
        if (n(e, t)) return !0;
        if (
          "object" != typeof e ||
          null === e ||
          "object" != typeof t ||
          null === t
        )
          return !1;
        let a = Object.keys(e),
          i = Object.keys(t);
        if (a.length !== i.length) return !1;
        for (let i = 0; i < a.length; i++)
          if (!Object.hasOwn(t, a[i]) || !n(e[a[i]], t[a[i]])) return !1;
        return !0;
      };
    },
    5861: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var a = {
        createElementState: function () {
          return A;
        },
        ixElements: function () {
          return v;
        },
        mergeActionState: function () {
          return R;
        },
      };
      for (var i in a)
        Object.defineProperty(t, i, { enumerable: !0, get: a[i] });
      let o = n(1185),
        l = n(7087),
        {
          HTML_ELEMENT: d,
          PLAIN_OBJECT: r,
          ABSTRACT_NODE: c,
          CONFIG_X_VALUE: s,
          CONFIG_Y_VALUE: u,
          CONFIG_Z_VALUE: f,
          CONFIG_VALUE: p,
          CONFIG_X_UNIT: I,
          CONFIG_Y_UNIT: E,
          CONFIG_Z_UNIT: y,
          CONFIG_UNIT: T,
        } = l.IX2EngineConstants,
        {
          IX2_SESSION_STOPPED: g,
          IX2_INSTANCE_ADDED: m,
          IX2_ELEMENT_STATE_CHANGED: b,
        } = l.IX2EngineActionTypes,
        O = {},
        v = (e = O, t = {}) => {
          switch (t.type) {
            case g:
              return O;
            case m: {
              let {
                  elementId: n,
                  element: a,
                  origin: i,
                  actionItem: l,
                  refType: d,
                } = t.payload,
                { actionTypeId: r } = l,
                c = e;
              return (
                (0, o.getIn)(c, [n, a]) !== a && (c = A(c, a, d, n, l)),
                R(c, n, r, i, l)
              );
            }
            case b: {
              let {
                elementId: n,
                actionTypeId: a,
                current: i,
                actionItem: o,
              } = t.payload;
              return R(e, n, a, i, o);
            }
            default:
              return e;
          }
        };
      function A(e, t, n, a, i) {
        let l =
          n === r ? (0, o.getIn)(i, ["config", "target", "objectId"]) : null;
        return (0, o.mergeIn)(e, [a], { id: a, ref: t, refId: l, refType: n });
      }
      function R(e, t, n, a, i) {
        let l = (function (e) {
          let { config: t } = e;
          return _.reduce((e, n) => {
            let a = n[0],
              i = n[1],
              o = t[a],
              l = t[i];
            return null != o && null != l && (e[i] = l), e;
          }, {});
        })(i);
        return (0, o.mergeIn)(e, [t, "refState", n], a, l);
      }
      let _ = [
        [s, I],
        [u, E],
        [f, y],
        [p, T],
      ];
    },
    4653: function () {
      Webflow.require("ix2").init({
        events: {
          "e-17": {
            id: "e-17",
            name: "",
            animationType: "custom",
            eventTypeId: "PAGE_START",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-5",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-18",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "636a4ed9d15e7102d7995e7b",
              appliesTo: "PAGE",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "636a4ed9d15e7102d7995e7b",
                appliesTo: "PAGE",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x182f12c9777,
          },
          "e-18": {
            id: "e-18",
            name: "",
            animationType: "custom",
            eventTypeId: "PAGE_FINISH",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-6",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-17",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "636a4ed9d15e7102d7995e7b",
              appliesTo: "PAGE",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "636a4ed9d15e7102d7995e7b",
                appliesTo: "PAGE",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x182f12c9778,
          },
          "e-19": {
            id: "e-19",
            name: "",
            animationType: "custom",
            eventTypeId: "PAGE_START",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-5",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-20",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "636a4ed9d15e712ce2995e94",
              appliesTo: "PAGE",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "636a4ed9d15e712ce2995e94",
                appliesTo: "PAGE",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x182f12d118b,
          },
          "e-20": {
            id: "e-20",
            name: "",
            animationType: "custom",
            eventTypeId: "PAGE_FINISH",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-6",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-19",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "636a4ed9d15e712ce2995e94",
              appliesTo: "PAGE",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "636a4ed9d15e712ce2995e94",
                appliesTo: "PAGE",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x182f12d118d,
          },
          "e-21": {
            id: "e-21",
            name: "",
            animationType: "custom",
            eventTypeId: "PAGE_START",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-5",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-22",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "636a4ed9d15e716171995e79",
              appliesTo: "PAGE",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "636a4ed9d15e716171995e79",
                appliesTo: "PAGE",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x182f12d5f61,
          },
          "e-22": {
            id: "e-22",
            name: "",
            animationType: "custom",
            eventTypeId: "PAGE_FINISH",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-6",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-21",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "636a4ed9d15e716171995e79",
              appliesTo: "PAGE",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "636a4ed9d15e716171995e79",
                appliesTo: "PAGE",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x182f12d5f63,
          },
          "e-25": {
            id: "e-25",
            name: "",
            animationType: "custom",
            eventTypeId: "PAGE_START",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-5",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-26",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "636a4ed9d15e713d23995e2a",
              appliesTo: "PAGE",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "636a4ed9d15e713d23995e2a",
                appliesTo: "PAGE",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x182f12dfbba,
          },
          "e-26": {
            id: "e-26",
            name: "",
            animationType: "custom",
            eventTypeId: "PAGE_FINISH",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-6",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-25",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "636a4ed9d15e713d23995e2a",
              appliesTo: "PAGE",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "636a4ed9d15e713d23995e2a",
                appliesTo: "PAGE",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x182f12dfbf2,
          },
          "e-27": {
            id: "e-27",
            name: "",
            animationType: "custom",
            eventTypeId: "PAGE_START",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-5",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-28",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "636a4ed9d15e717093995e1e",
              appliesTo: "PAGE",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "636a4ed9d15e717093995e1e",
                appliesTo: "PAGE",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x182f12e4141,
          },
          "e-28": {
            id: "e-28",
            name: "",
            animationType: "custom",
            eventTypeId: "PAGE_FINISH",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-6",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-27",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "636a4ed9d15e717093995e1e",
              appliesTo: "PAGE",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "636a4ed9d15e717093995e1e",
                appliesTo: "PAGE",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x182f12e4143,
          },
          "e-31": {
            id: "e-31",
            name: "",
            animationType: "custom",
            eventTypeId: "PAGE_START",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-5",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-32",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "636a4ed9d15e715e7b995e7e",
              appliesTo: "PAGE",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "636a4ed9d15e715e7b995e7e",
                appliesTo: "PAGE",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x182f12ecf31,
          },
          "e-32": {
            id: "e-32",
            name: "",
            animationType: "custom",
            eventTypeId: "PAGE_FINISH",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-6",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-31",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "636a4ed9d15e715e7b995e7e",
              appliesTo: "PAGE",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "636a4ed9d15e715e7b995e7e",
                appliesTo: "PAGE",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x182f12ecf69,
          },
          "e-35": {
            id: "e-35",
            name: "",
            animationType: "custom",
            eventTypeId: "PAGE_START",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-5",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-36",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "636a4ed9d15e71d2b4995e7f",
              appliesTo: "PAGE",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "636a4ed9d15e71d2b4995e7f",
                appliesTo: "PAGE",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x182f12fb7a0,
          },
          "e-36": {
            id: "e-36",
            name: "",
            animationType: "custom",
            eventTypeId: "PAGE_FINISH",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-6",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-35",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "636a4ed9d15e71d2b4995e7f",
              appliesTo: "PAGE",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "636a4ed9d15e71d2b4995e7f",
                appliesTo: "PAGE",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x182f12fb7a2,
          },
          "e-37": {
            id: "e-37",
            name: "",
            animationType: "custom",
            eventTypeId: "PAGE_START",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-5",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-38",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "636a4ed9d15e712318995e7a",
              appliesTo: "PAGE",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "636a4ed9d15e712318995e7a",
                appliesTo: "PAGE",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x182f130022f,
          },
          "e-38": {
            id: "e-38",
            name: "",
            animationType: "custom",
            eventTypeId: "PAGE_FINISH",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-6",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-37",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "636a4ed9d15e712318995e7a",
              appliesTo: "PAGE",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "636a4ed9d15e712318995e7a",
                appliesTo: "PAGE",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x182f1300231,
          },
          "e-39": {
            id: "e-39",
            name: "",
            animationType: "custom",
            eventTypeId: "PAGE_START",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-5",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-40",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "636a4ed9d15e718de2995e27",
              appliesTo: "PAGE",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "636a4ed9d15e718de2995e27",
                appliesTo: "PAGE",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x182f13048af,
          },
          "e-40": {
            id: "e-40",
            name: "",
            animationType: "custom",
            eventTypeId: "PAGE_FINISH",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-6",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-39",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "636a4ed9d15e718de2995e27",
              appliesTo: "PAGE",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "636a4ed9d15e718de2995e27",
                appliesTo: "PAGE",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x182f13048b1,
          },
          "e-41": {
            id: "e-41",
            name: "",
            animationType: "custom",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-8",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-42",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "c6f74f12-fcd1-b02c-d13f-6d0108921cf1",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "c6f74f12-fcd1-b02c-d13f-6d0108921cf1",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !0,
              playInReverse: !1,
              scrollOffsetValue: 0,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x18149f40fa8,
          },
          "e-43": {
            id: "e-43",
            name: "",
            animationType: "custom",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-9",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-44",
              },
            },
            mediaQueries: ["main", "medium"],
            target: {
              id: "c6f74f12-fcd1-b02c-d13f-6d0108921cf1",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "c6f74f12-fcd1-b02c-d13f-6d0108921cf1",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !0,
              playInReverse: !1,
              scrollOffsetValue: 0,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x182d6128992,
          },
          "e-45": {
            id: "e-45",
            name: "",
            animationType: "custom",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-10",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-46",
              },
            },
            mediaQueries: ["small", "tiny"],
            target: {
              id: "c6f74f12-fcd1-b02c-d13f-6d0108921cf1",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "c6f74f12-fcd1-b02c-d13f-6d0108921cf1",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 0,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x182d612e26b,
          },
          "e-707": {
            id: "e-707",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_CLICK",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-17",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-708",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "636a4ed9d15e7160b6995e78|dd30ddde-9f7c-59c7-b256-48fa4afbed32",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "636a4ed9d15e7160b6995e78|dd30ddde-9f7c-59c7-b256-48fa4afbed32",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x1837e44c993,
          },
          "e-708": {
            id: "e-708",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_SECOND_CLICK",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-18",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-707",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "636a4ed9d15e7160b6995e78|dd30ddde-9f7c-59c7-b256-48fa4afbed32",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "636a4ed9d15e7160b6995e78|dd30ddde-9f7c-59c7-b256-48fa4afbed32",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x1837e44c9a3,
          },
          "e-709": {
            id: "e-709",
            name: "",
            animationType: "custom",
            eventTypeId: "PAGE_START",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-19",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-710",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "636a4ed9d15e717e3b995e75",
              appliesTo: "PAGE",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "636a4ed9d15e717e3b995e75",
                appliesTo: "PAGE",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !0,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x1839dce712b,
          },
          "e-721": {
            id: "e-721",
            name: "",
            animationType: "preset",
            eventTypeId: "MOUSE_CLICK",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-19",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-722",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "db5494a8-1e61-ed3d-ddc4-a7b430798203",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "db5494a8-1e61-ed3d-ddc4-a7b430798203",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !0,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x1839e408f75,
          },
          "e-723": {
            id: "e-723",
            name: "",
            animationType: "preset",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-26",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-724",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "db5494a8-1e61-ed3d-ddc4-a7b430798203",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "db5494a8-1e61-ed3d-ddc4-a7b430798203",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 0,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x1839e408f75,
          },
          "e-725": {
            id: "e-725",
            name: "",
            animationType: "custom",
            eventTypeId: "PAGE_START",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-19",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-726",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "636a4ed9d15e71422c995dd4",
              appliesTo: "PAGE",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "636a4ed9d15e71422c995dd4",
                appliesTo: "PAGE",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !0,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x1839e4103c4,
          },
          "e-727": {
            id: "e-727",
            name: "",
            animationType: "preset",
            eventTypeId: "PAGE_START",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-28",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-728",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "636a4ed9d15e712818995e7c",
              appliesTo: "PAGE",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "636a4ed9d15e712818995e7c",
                appliesTo: "PAGE",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x183eac4b2fc,
          },
          "e-728": {
            id: "e-728",
            name: "",
            animationType: "preset",
            eventTypeId: "PAGE_FINISH",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-6",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-727",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "636a4ed9d15e712818995e7c",
              appliesTo: "PAGE",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "636a4ed9d15e712818995e7c",
                appliesTo: "PAGE",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x183eac4b2fc,
          },
          "e-729": {
            id: "e-729",
            name: "",
            animationType: "preset",
            eventTypeId: "PAGE_START",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-19",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-730",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "636a4ed9d15e71536e995eb0",
              appliesTo: "PAGE",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "636a4ed9d15e71536e995eb0",
                appliesTo: "PAGE",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !0,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x1842e6a98a8,
          },
          "e-733": {
            id: "e-733",
            name: "",
            animationType: "preset",
            eventTypeId: "PAGE_START",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-19",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-734",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "63e1218beaf006d663b42d21",
              appliesTo: "PAGE",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "63e1218beaf006d663b42d21",
                appliesTo: "PAGE",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !0,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x186276b082f,
          },
          "e-1415": {
            id: "e-1415",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_OVER",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-35",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-1416",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              selector: ".underline-link",
              originalId: "b8d350e8-96a0-1537-9c18-c5a6c9bd9cc8",
              appliesTo: "CLASS",
            },
            targets: [
              {
                selector: ".underline-link",
                originalId: "b8d350e8-96a0-1537-9c18-c5a6c9bd9cc8",
                appliesTo: "CLASS",
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x180d2d3fc93,
          },
          "e-1416": {
            id: "e-1416",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_OUT",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-36",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-1415",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              selector: ".underline-link",
              originalId: "b8d350e8-96a0-1537-9c18-c5a6c9bd9cc8",
              appliesTo: "CLASS",
            },
            targets: [
              {
                selector: ".underline-link",
                originalId: "b8d350e8-96a0-1537-9c18-c5a6c9bd9cc8",
                appliesTo: "CLASS",
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x180d2d3fc95,
          },
          "e-1417": {
            id: "e-1417",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_OVER",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-35",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-1418",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              selector: ".button-2",
              originalId:
                "651fecc8f02881a1833ad5c5|fc089a42-9a26-6138-c237-472289e5c13a",
              appliesTo: "CLASS",
            },
            targets: [
              {
                selector: ".button-2",
                originalId:
                  "651fecc8f02881a1833ad5c5|fc089a42-9a26-6138-c237-472289e5c13a",
                appliesTo: "CLASS",
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x180cf82760f,
          },
          "e-1418": {
            id: "e-1418",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_OUT",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-36",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-1417",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              selector: ".button-2",
              originalId:
                "651fecc8f02881a1833ad5c5|fc089a42-9a26-6138-c237-472289e5c13a",
              appliesTo: "CLASS",
            },
            targets: [
              {
                selector: ".button-2",
                originalId:
                  "651fecc8f02881a1833ad5c5|fc089a42-9a26-6138-c237-472289e5c13a",
                appliesTo: "CLASS",
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x180cf827610,
          },
          "e-1422": {
            id: "e-1422",
            name: "",
            animationType: "preset",
            eventTypeId: "SCROLLING_IN_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_CONTINUOUS_ACTION",
              config: {
                actionListId: "a-38",
                affectedElements: {},
                duration: 0,
              },
            },
            mediaQueries: ["main", "medium"],
            target: {
              id: "636a4ed9d15e71d2b4995e7f|a9666e47-44ba-52f4-a548-71bb5b8db84b",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "636a4ed9d15e71d2b4995e7f|a9666e47-44ba-52f4-a548-71bb5b8db84b",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: [
              {
                continuousParameterGroupId: "a-38-p",
                smoothing: 65,
                startsEntering: !0,
                addStartOffset: !1,
                addOffsetValue: 50,
                startsExiting: !1,
                addEndOffset: !1,
                endOffsetValue: 50,
              },
            ],
            createdOn: 0x18b0a19d383,
          },
          "e-1423": {
            id: "e-1423",
            name: "",
            animationType: "preset",
            eventTypeId: "SCROLLING_IN_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_CONTINUOUS_ACTION",
              config: {
                actionListId: "a-37",
                affectedElements: {},
                duration: 0,
              },
            },
            mediaQueries: ["main", "medium"],
            target: {
              id: "636a4ed9d15e71d2b4995e7f|a9666e47-44ba-52f4-a548-71bb5b8db84b",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "636a4ed9d15e71d2b4995e7f|a9666e47-44ba-52f4-a548-71bb5b8db84b",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: [
              {
                continuousParameterGroupId: "a-37-p",
                smoothing: 65,
                startsEntering: !0,
                addStartOffset: !1,
                addOffsetValue: 50,
                startsExiting: !1,
                addEndOffset: !1,
                endOffsetValue: 50,
              },
            ],
            createdOn: 0x18b0a19d383,
          },
          "e-1424": {
            id: "e-1424",
            name: "",
            animationType: "preset",
            eventTypeId: "SCROLLING_IN_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_CONTINUOUS_ACTION",
              config: {
                actionListId: "a-39",
                affectedElements: {},
                duration: 0,
              },
            },
            mediaQueries: ["main", "medium"],
            target: {
              id: "636a4ed9d15e71d2b4995e7f|a9666e47-44ba-52f4-a548-71bb5b8db84b",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "636a4ed9d15e71d2b4995e7f|a9666e47-44ba-52f4-a548-71bb5b8db84b",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: [
              {
                continuousParameterGroupId: "a-39-p",
                smoothing: 65,
                startsEntering: !0,
                addStartOffset: !1,
                addOffsetValue: 50,
                startsExiting: !1,
                addEndOffset: !0,
                endOffsetValue: 5,
              },
            ],
            createdOn: 0x18b0a19d383,
          },
          "e-1431": {
            id: "e-1431",
            name: "",
            animationType: "preset",
            eventTypeId: "PAGE_START",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-19",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-1432",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "65a236b137b6a1c4fa046653",
              appliesTo: "PAGE",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "65a236b137b6a1c4fa046653",
                appliesTo: "PAGE",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !0,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x18d01a5a8a9,
          },
          "e-1433": {
            id: "e-1433",
            name: "",
            animationType: "preset",
            eventTypeId: "PAGE_START",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-19",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-1434",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "65a237f5fc7fdb5d37ba5853",
              appliesTo: "PAGE",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "65a237f5fc7fdb5d37ba5853",
                appliesTo: "PAGE",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !0,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x18d01aa976c,
          },
          "e-1445": {
            id: "e-1445",
            name: "",
            animationType: "custom",
            eventTypeId: "SLIDER_ACTIVE",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-45",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-1446",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              selector: ".speaker-slide",
              originalId:
                "65d597cee0b63a235e236114|e4bc9710-c1d2-671c-54dc-4ca77dc6dd37",
              appliesTo: "CLASS",
            },
            targets: [
              {
                selector: ".speaker-slide",
                originalId:
                  "65d597cee0b63a235e236114|e4bc9710-c1d2-671c-54dc-4ca77dc6dd37",
                appliesTo: "CLASS",
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x1785c46f524,
          },
          "e-1446": {
            id: "e-1446",
            name: "",
            animationType: "custom",
            eventTypeId: "SLIDER_INACTIVE",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-46",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-1445",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              selector: ".speaker-slide",
              originalId:
                "65d597cee0b63a235e236114|e4bc9710-c1d2-671c-54dc-4ca77dc6dd37",
              appliesTo: "CLASS",
            },
            targets: [
              {
                selector: ".speaker-slide",
                originalId:
                  "65d597cee0b63a235e236114|e4bc9710-c1d2-671c-54dc-4ca77dc6dd37",
                appliesTo: "CLASS",
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x1785c46f525,
          },
          "e-1447": {
            id: "e-1447",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_OVER",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-47",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-1448",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              selector: ".speaker-arrow",
              originalId:
                "65d597cee0b63a235e236114|e4bc9710-c1d2-671c-54dc-4ca77dc6dd8e",
              appliesTo: "CLASS",
            },
            targets: [
              {
                selector: ".speaker-arrow",
                originalId:
                  "65d597cee0b63a235e236114|e4bc9710-c1d2-671c-54dc-4ca77dc6dd8e",
                appliesTo: "CLASS",
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x17861ddf9c9,
          },
          "e-1448": {
            id: "e-1448",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_OUT",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-48",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-1447",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              selector: ".speaker-arrow",
              originalId:
                "65d597cee0b63a235e236114|e4bc9710-c1d2-671c-54dc-4ca77dc6dd8e",
              appliesTo: "CLASS",
            },
            targets: [
              {
                selector: ".speaker-arrow",
                originalId:
                  "65d597cee0b63a235e236114|e4bc9710-c1d2-671c-54dc-4ca77dc6dd8e",
                appliesTo: "CLASS",
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x17861ddf9ce,
          },
          "e-1449": {
            id: "e-1449",
            name: "",
            animationType: "custom",
            eventTypeId: "PAGE_START",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-49",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-1450",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "65d597cee0b63a235e236114",
              appliesTo: "PAGE",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "65d597cee0b63a235e236114",
                appliesTo: "PAGE",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !0,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x18ec1a688ca,
          },
          "e-1455": {
            id: "e-1455",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_CLICK",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-53",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-1456",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "1ae770d3-88f0-8073-4286-e5c58ca99a57",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "1ae770d3-88f0-8073-4286-e5c58ca99a57",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x18f3a5f96c3,
          },
          "e-1461": {
            id: "e-1461",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_OVER",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-57",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-1462",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              selector: ".evx-frosted-link",
              originalId: "1ae770d3-88f0-8073-4286-e5c58ca99a1f",
              appliesTo: "CLASS",
            },
            targets: [
              {
                selector: ".evx-frosted-link",
                originalId: "1ae770d3-88f0-8073-4286-e5c58ca99a1f",
                appliesTo: "CLASS",
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x18f3de53231,
          },
          "e-1462": {
            id: "e-1462",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_OUT",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-58",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-1461",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              selector: ".evx-frosted-link",
              originalId: "1ae770d3-88f0-8073-4286-e5c58ca99a1f",
              appliesTo: "CLASS",
            },
            targets: [
              {
                selector: ".evx-frosted-link",
                originalId: "1ae770d3-88f0-8073-4286-e5c58ca99a1f",
                appliesTo: "CLASS",
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x18f3de53236,
          },
          "e-1463": {
            id: "e-1463",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_OVER",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-60",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-1464",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              selector: ".evx-special-button",
              originalId: "a4ad75e9-2f46-c662-9701-cbb70014eaf9",
              appliesTo: "CLASS",
            },
            targets: [
              {
                selector: ".evx-special-button",
                originalId: "a4ad75e9-2f46-c662-9701-cbb70014eaf9",
                appliesTo: "CLASS",
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x18f3e968f15,
          },
          "e-1464": {
            id: "e-1464",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_OUT",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-61",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-1463",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              selector: ".evx-special-button",
              originalId: "a4ad75e9-2f46-c662-9701-cbb70014eaf9",
              appliesTo: "CLASS",
            },
            targets: [
              {
                selector: ".evx-special-button",
                originalId: "a4ad75e9-2f46-c662-9701-cbb70014eaf9",
                appliesTo: "CLASS",
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x18f3e968f19,
          },
          "e-1467": {
            id: "e-1467",
            name: "",
            animationType: "custom",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-62",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-1468",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              selector: ".evx-main-cta-back",
              originalId: "a4ad75e9-2f46-c662-9701-cbb70014eaf1",
              appliesTo: "CLASS",
            },
            targets: [
              {
                selector: ".evx-main-cta-back",
                originalId: "a4ad75e9-2f46-c662-9701-cbb70014eaf1",
                appliesTo: "CLASS",
              },
            ],
            config: {
              loop: !0,
              playInReverse: !1,
              scrollOffsetValue: 0,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x18f525473d2,
          },
          "e-1471": {
            id: "e-1471",
            name: "",
            animationType: "preset",
            eventTypeId: "PAGE_START",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-49",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-1472",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "6641c1115e5a4642dda317bc",
              appliesTo: "PAGE",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "6641c1115e5a4642dda317bc",
                appliesTo: "PAGE",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !0,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x18f70da2f69,
          },
          "e-1568": {
            id: "e-1568",
            name: "",
            animationType: "custom",
            eventTypeId: "PAGE_START",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-70",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-1569",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "636a4ed9d15e7127c6995e80",
              appliesTo: "PAGE",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "636a4ed9d15e7127c6995e80",
                appliesTo: "PAGE",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !0,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x1902590a1ee,
          },
          "e-1574": {
            id: "e-1574",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_OVER",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-71",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-1575",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "aed1d69c-50c5-4c5a-2af3-86c8626914cd",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "aed1d69c-50c5-4c5a-2af3-86c8626914cd",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x1903130e155,
          },
          "e-1575": {
            id: "e-1575",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_OUT",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-72",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-1574",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "aed1d69c-50c5-4c5a-2af3-86c8626914cd",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "aed1d69c-50c5-4c5a-2af3-86c8626914cd",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x1903130e15c,
          },
          "e-1590": {
            id: "e-1590",
            name: "",
            animationType: "preset",
            eventTypeId: "PAGE_START",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-19",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-1591",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "667bd5f3a1a9cdd8fc644ceb",
              appliesTo: "PAGE",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "667bd5f3a1a9cdd8fc644ceb",
                appliesTo: "PAGE",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !0,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x19053bbc267,
          },
          "e-1632": {
            id: "e-1632",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_OVER",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-79",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-1633",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              selector: ".evx-single-category-top",
              originalId:
                "636a4ed9d15e717c27995e29|105e3059-bea9-83dc-d9a1-cfa35a24edf4",
              appliesTo: "CLASS",
            },
            targets: [
              {
                selector: ".evx-single-category-top",
                originalId:
                  "636a4ed9d15e717c27995e29|105e3059-bea9-83dc-d9a1-cfa35a24edf4",
                appliesTo: "CLASS",
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x190776b3975,
          },
          "e-1633": {
            id: "e-1633",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_OUT",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-80",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-1632",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              selector: ".evx-single-category-top",
              originalId:
                "636a4ed9d15e717c27995e29|105e3059-bea9-83dc-d9a1-cfa35a24edf4",
              appliesTo: "CLASS",
            },
            targets: [
              {
                selector: ".evx-single-category-top",
                originalId:
                  "636a4ed9d15e717c27995e29|105e3059-bea9-83dc-d9a1-cfa35a24edf4",
                appliesTo: "CLASS",
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x190776b3979,
          },
          "e-1634": {
            id: "e-1634",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_CLICK",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-77",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-1635",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              selector: ".evx-single-category-top",
              originalId:
                "636a4ed9d15e717c27995e29|105e3059-bea9-83dc-d9a1-cfa35a24edf4",
              appliesTo: "CLASS",
            },
            targets: [
              {
                selector: ".evx-single-category-top",
                originalId:
                  "636a4ed9d15e717c27995e29|105e3059-bea9-83dc-d9a1-cfa35a24edf4",
                appliesTo: "CLASS",
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x190776bedca,
          },
          "e-1635": {
            id: "e-1635",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_SECOND_CLICK",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-78",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-1634",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              selector: ".evx-single-category-top",
              originalId:
                "636a4ed9d15e717c27995e29|105e3059-bea9-83dc-d9a1-cfa35a24edf4",
              appliesTo: "CLASS",
            },
            targets: [
              {
                selector: ".evx-single-category-top",
                originalId:
                  "636a4ed9d15e717c27995e29|105e3059-bea9-83dc-d9a1-cfa35a24edf4",
                appliesTo: "CLASS",
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x190776bedf2,
          },
          "e-1660": {
            id: "e-1660",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_CLICK",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-77",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-1661",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              selector: ".evx-single-category-top-white",
              originalId:
                "636a4ed9d15e717c27995e29|dd8da4f7-645a-7ec2-b60e-23faed477ffc",
              appliesTo: "CLASS",
            },
            targets: [
              {
                selector: ".evx-single-category-top-white",
                originalId:
                  "636a4ed9d15e717c27995e29|dd8da4f7-645a-7ec2-b60e-23faed477ffc",
                appliesTo: "CLASS",
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x19077a75967,
          },
          "e-1661": {
            id: "e-1661",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_SECOND_CLICK",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-78",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-1660",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              selector: ".evx-single-category-top-white",
              originalId:
                "636a4ed9d15e717c27995e29|dd8da4f7-645a-7ec2-b60e-23faed477ffc",
              appliesTo: "CLASS",
            },
            targets: [
              {
                selector: ".evx-single-category-top-white",
                originalId:
                  "636a4ed9d15e717c27995e29|dd8da4f7-645a-7ec2-b60e-23faed477ffc",
                appliesTo: "CLASS",
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x19077a7596b,
          },
          "e-1662": {
            id: "e-1662",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_OVER",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-81",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-1663",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              selector: ".evx-single-category-top-white",
              originalId:
                "636a4ed9d15e717c27995e29|dd8da4f7-645a-7ec2-b60e-23faed477ffc",
              appliesTo: "CLASS",
            },
            targets: [
              {
                selector: ".evx-single-category-top-white",
                originalId:
                  "636a4ed9d15e717c27995e29|dd8da4f7-645a-7ec2-b60e-23faed477ffc",
                appliesTo: "CLASS",
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x19077a81115,
          },
          "e-1663": {
            id: "e-1663",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_OUT",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-82",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-1662",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              selector: ".evx-single-category-top-white",
              originalId:
                "636a4ed9d15e717c27995e29|dd8da4f7-645a-7ec2-b60e-23faed477ffc",
              appliesTo: "CLASS",
            },
            targets: [
              {
                selector: ".evx-single-category-top-white",
                originalId:
                  "636a4ed9d15e717c27995e29|dd8da4f7-645a-7ec2-b60e-23faed477ffc",
                appliesTo: "CLASS",
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x19077a8111b,
          },
          "e-1735": {
            id: "e-1735",
            name: "",
            animationType: "preset",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-63",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-1736",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "a0d6f4b7-a3e5-1f25-9627-f1bcb0c2b7bb",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "a0d6f4b7-a3e5-1f25-9627-f1bcb0c2b7bb",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !0,
              playInReverse: !1,
              scrollOffsetValue: 0,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x190b70f53b2,
          },
          "e-1737": {
            id: "e-1737",
            name: "",
            animationType: "preset",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-64",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-1738",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "a0d6f4b7-a3e5-1f25-9627-f1bcb0c2b7c0",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "a0d6f4b7-a3e5-1f25-9627-f1bcb0c2b7c0",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !0,
              playInReverse: !1,
              scrollOffsetValue: 0,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x190b70f53b2,
          },
          "e-1739": {
            id: "e-1739",
            name: "",
            animationType: "preset",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-64",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-1740",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "636a4ed9d15e716171995e79|4b5c1140-cbb2-f3b3-b9ff-89fb32f792c6",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "636a4ed9d15e716171995e79|4b5c1140-cbb2-f3b3-b9ff-89fb32f792c6",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !0,
              playInReverse: !1,
              scrollOffsetValue: 0,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x190ca5ab41f,
          },
          "e-1741": {
            id: "e-1741",
            name: "",
            animationType: "preset",
            eventTypeId: "PAGE_START",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-83",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-1742",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "66b352f79a5cecb5ec23451f",
              appliesTo: "PAGE",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "66b352f79a5cecb5ec23451f",
                appliesTo: "PAGE",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x1912c7c192a,
          },
          "e-1742": {
            id: "e-1742",
            name: "",
            animationType: "preset",
            eventTypeId: "PAGE_FINISH",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-6",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-1741",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "66b352f79a5cecb5ec23451f",
              appliesTo: "PAGE",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "66b352f79a5cecb5ec23451f",
                appliesTo: "PAGE",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x1912c7c192a,
          },
          "e-1747": {
            id: "e-1747",
            name: "",
            animationType: "preset",
            eventTypeId: "PAGE_START",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-19",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-1748",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "66b358c37e5f230600ac4b0e",
              appliesTo: "PAGE",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "66b358c37e5f230600ac4b0e",
                appliesTo: "PAGE",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !0,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x1912c92bf42,
          },
          "e-1751": {
            id: "e-1751",
            name: "",
            animationType: "preset",
            eventTypeId: "MOUSE_OVER",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-84",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-1752",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              selector: ".evx-special-button",
              originalId:
                "636a4ed9d15e717c27995e29|2e84031c-d2ed-95bd-090d-9678b3d0b905",
              appliesTo: "CLASS",
            },
            targets: [
              {
                selector: ".evx-special-button",
                originalId:
                  "636a4ed9d15e717c27995e29|2e84031c-d2ed-95bd-090d-9678b3d0b905",
                appliesTo: "CLASS",
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x19131fec6fa,
          },
          "e-1752": {
            id: "e-1752",
            name: "",
            animationType: "preset",
            eventTypeId: "MOUSE_OUT",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-85",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-1751",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              selector: ".evx-special-button",
              originalId:
                "636a4ed9d15e717c27995e29|2e84031c-d2ed-95bd-090d-9678b3d0b905",
              appliesTo: "CLASS",
            },
            targets: [
              {
                selector: ".evx-special-button",
                originalId:
                  "636a4ed9d15e717c27995e29|2e84031c-d2ed-95bd-090d-9678b3d0b905",
                appliesTo: "CLASS",
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x19131fec6fa,
          },
          "e-1753": {
            id: "e-1753",
            name: "",
            animationType: "preset",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-86",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-1754",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              selector: ".evx-main-cta-back",
              originalId:
                "636a4ed9d15e717c27995e29|2e84031c-d2ed-95bd-090d-9678b3d0b8fd",
              appliesTo: "CLASS",
            },
            targets: [
              {
                selector: ".evx-main-cta-back",
                originalId:
                  "636a4ed9d15e717c27995e29|2e84031c-d2ed-95bd-090d-9678b3d0b8fd",
                appliesTo: "CLASS",
              },
            ],
            config: {
              loop: !0,
              playInReverse: !1,
              scrollOffsetValue: 0,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x19131fec6fa,
          },
          "e-1757": {
            id: "e-1757",
            name: "",
            animationType: "preset",
            eventTypeId: "PAGE_START",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-87",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-1758",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "66ed35ba05aec7490fef2eca",
              appliesTo: "PAGE",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "66ed35ba05aec7490fef2eca",
                appliesTo: "PAGE",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !0,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x1920e99e552,
          },
          "e-1763": {
            id: "e-1763",
            name: "",
            animationType: "preset",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-64",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-1764",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "6720dc511c2ab6e9c810b495|6a3d2378-b22d-c1d2-08cc-da2cca05343f",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "6720dc511c2ab6e9c810b495|6a3d2378-b22d-c1d2-08cc-da2cca05343f",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !0,
              playInReverse: !1,
              scrollOffsetValue: 0,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x192d866d0b3,
          },
          "e-1765": {
            id: "e-1765",
            name: "",
            animationType: "preset",
            eventTypeId: "PAGE_START",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-19",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-1766",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "67334cb3063417de9f6bd45e",
              appliesTo: "PAGE",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "67334cb3063417de9f6bd45e",
                appliesTo: "PAGE",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !0,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x1932063a062,
          },
          "e-1795": {
            id: "e-1795",
            name: "",
            animationType: "preset",
            eventTypeId: "PAGE_START",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-19",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-1796",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "677ba1ab406d7b033ca92664",
              appliesTo: "PAGE",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "677ba1ab406d7b033ca92664",
                appliesTo: "PAGE",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !0,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x1943aef86f3,
          },
          "e-1801": {
            id: "e-1801",
            name: "",
            animationType: "preset",
            eventTypeId: "PAGE_START",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-90",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-1802",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "67926b7fe8f2b4d8a07e5820",
              appliesTo: "PAGE",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "67926b7fe8f2b4d8a07e5820",
                appliesTo: "PAGE",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x19493f3ecae,
          },
          "e-1802": {
            id: "e-1802",
            name: "",
            animationType: "preset",
            eventTypeId: "PAGE_FINISH",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-6",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-1801",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "67926b7fe8f2b4d8a07e5820",
              appliesTo: "PAGE",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "67926b7fe8f2b4d8a07e5820",
                appliesTo: "PAGE",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x19493f3ecae,
          },
          "e-1807": {
            id: "e-1807",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_OVER",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-92",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-1808",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              selector: ".evx-box-holder-home.trans.category-link",
              originalId:
                "667bde01b1a8202a8813c0b5|692ef04d-f492-2d68-0c22-e80c5e44fe13",
              appliesTo: "CLASS",
            },
            targets: [
              {
                selector: ".evx-box-holder-home.trans.category-link",
                originalId:
                  "667bde01b1a8202a8813c0b5|692ef04d-f492-2d68-0c22-e80c5e44fe13",
                appliesTo: "CLASS",
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x194b2799388,
          },
          "e-1808": {
            id: "e-1808",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_OUT",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-93",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-1807",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              selector: ".evx-box-holder-home.trans.category-link",
              originalId:
                "667bde01b1a8202a8813c0b5|692ef04d-f492-2d68-0c22-e80c5e44fe13",
              appliesTo: "CLASS",
            },
            targets: [
              {
                selector: ".evx-box-holder-home.trans.category-link",
                originalId:
                  "667bde01b1a8202a8813c0b5|692ef04d-f492-2d68-0c22-e80c5e44fe13",
                appliesTo: "CLASS",
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x194b279938e,
          },
          "e-1818": {
            id: "e-1818",
            name: "",
            animationType: "preset",
            eventTypeId: "MOUSE_OVER",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-71",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-1819",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "636a4ed9d15e712900995e2c|a572bdc6-9464-adf9-c093-b41544e55248",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "636a4ed9d15e712900995e2c|a572bdc6-9464-adf9-c093-b41544e55248",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x19522b20c2a,
          },
          "e-1819": {
            id: "e-1819",
            name: "",
            animationType: "preset",
            eventTypeId: "MOUSE_OUT",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-72",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-1818",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "636a4ed9d15e712900995e2c|a572bdc6-9464-adf9-c093-b41544e55248",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "636a4ed9d15e712900995e2c|a572bdc6-9464-adf9-c093-b41544e55248",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x19522b20c2a,
          },
          "e-1820": {
            id: "e-1820",
            name: "",
            animationType: "custom",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-94",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-1821",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "67bc5c9efe714f9fbe1bd752|a1ebc529-dd51-b083-0375-74e1b90314ea",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "67bc5c9efe714f9fbe1bd752|a1ebc529-dd51-b083-0375-74e1b90314ea",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 3,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x1953d02feb6,
          },
          "e-1824": {
            id: "e-1824",
            name: "",
            animationType: "preset",
            eventTypeId: "PAGE_START",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-96",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-1825",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "67c9c7ff2922465adca3c4a6",
              appliesTo: "PAGE",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "67c9c7ff2922465adca3c4a6",
                appliesTo: "PAGE",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x1956c35420c,
          },
          "e-1825": {
            id: "e-1825",
            name: "",
            animationType: "preset",
            eventTypeId: "PAGE_FINISH",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-6",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-1824",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "67c9c7ff2922465adca3c4a6",
              appliesTo: "PAGE",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "67c9c7ff2922465adca3c4a6",
                appliesTo: "PAGE",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x1956c35420c,
          },
          "e-1840": {
            id: "e-1840",
            name: "",
            animationType: "preset",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-94",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-1841",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "67bc5c9efe714f9fbe1bd752|3f2a383f-5707-73ca-2782-bbdda3487157",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "67bc5c9efe714f9fbe1bd752|3f2a383f-5707-73ca-2782-bbdda3487157",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 3,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x195ae8cc6a8,
          },
          "e-1842": {
            id: "e-1842",
            name: "",
            animationType: "preset",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-63",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-1843",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "67bc5c9efe714f9fbe1bd752|28a9f79b-7196-b311-b456-005ac9360a43",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "67bc5c9efe714f9fbe1bd752|28a9f79b-7196-b311-b456-005ac9360a43",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !0,
              playInReverse: !1,
              scrollOffsetValue: 0,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x195b8b30a09,
          },
          "e-1848": {
            id: "e-1848",
            name: "",
            animationType: "preset",
            eventTypeId: "MOUSE_OVER",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-71",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-1849",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "67e66bcf73aeb680b975667c|3a78b70d-e660-aaf3-3019-d83da69ab4ea",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "67e66bcf73aeb680b975667c|3a78b70d-e660-aaf3-3019-d83da69ab4ea",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x195dc302ea1,
          },
          "e-1849": {
            id: "e-1849",
            name: "",
            animationType: "preset",
            eventTypeId: "MOUSE_OUT",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-72",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-1848",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "67e66bcf73aeb680b975667c|3a78b70d-e660-aaf3-3019-d83da69ab4ea",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "67e66bcf73aeb680b975667c|3a78b70d-e660-aaf3-3019-d83da69ab4ea",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x195dc302ea1,
          },
          "e-1850": {
            id: "e-1850",
            name: "",
            animationType: "custom",
            eventTypeId: "SCROLLING_IN_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_CONTINUOUS_ACTION",
              config: {
                actionListId: "a-97",
                affectedElements: {},
                duration: 0,
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "67bc5c9efe714f9fbe1bd752|12a391ff-93d4-8bc9-2272-5f5142b5a883",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "67bc5c9efe714f9fbe1bd752|12a391ff-93d4-8bc9-2272-5f5142b5a883",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: [
              {
                continuousParameterGroupId: "a-97-p",
                smoothing: 97,
                startsEntering: !0,
                addStartOffset: !1,
                addOffsetValue: 50,
                startsExiting: !1,
                addEndOffset: !1,
                endOffsetValue: 50,
              },
            ],
            createdOn: 0x195dc989db3,
          },
          "e-1851": {
            id: "e-1851",
            name: "",
            animationType: "preset",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-64",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-1852",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "d0fe27a7-47f9-8369-a1c3-563a4f28c613",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "d0fe27a7-47f9-8369-a1c3-563a4f28c613",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !0,
              playInReverse: !1,
              scrollOffsetValue: 0,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x1963e0b860e,
          },
          "e-1853": {
            id: "e-1853",
            name: "",
            animationType: "preset",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-64",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-1854",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "e91fc0df-3c6d-8f3a-0c5c-86265c8ac647",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "e91fc0df-3c6d-8f3a-0c5c-86265c8ac647",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !0,
              playInReverse: !1,
              scrollOffsetValue: 0,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x1963e5bee53,
          },
          "e-1855": {
            id: "e-1855",
            name: "",
            animationType: "preset",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-64",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-1856",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "7383d1ad-d153-3b9c-2966-17cbc039cf68",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "7383d1ad-d153-3b9c-2966-17cbc039cf68",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !0,
              playInReverse: !1,
              scrollOffsetValue: 0,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x1963ec87dd1,
          },
          "e-1857": {
            id: "e-1857",
            name: "",
            animationType: "preset",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-67",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-1858",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "d7f764b3-d12f-2d92-93d5-93b3f0007ea9",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "d7f764b3-d12f-2d92-93d5-93b3f0007ea9",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !0,
              playInReverse: !1,
              scrollOffsetValue: 0,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x1964276253d,
          },
          "e-1859": {
            id: "e-1859",
            name: "",
            animationType: "preset",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-64",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-1860",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "ee45076e-4c92-9b34-d019-ce30fc302542",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "ee45076e-4c92-9b34-d019-ce30fc302542",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !0,
              playInReverse: !1,
              scrollOffsetValue: 0,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x19642836700,
          },
          "e-1881": {
            id: "e-1881",
            name: "",
            animationType: "preset",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-99",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-1882",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "6811e52eb2d08280bde9038b|e185aca9-9d77-76b9-c465-cf813663b0b8",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "6811e52eb2d08280bde9038b|e185aca9-9d77-76b9-c465-cf813663b0b8",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !0,
              playInReverse: !1,
              scrollOffsetValue: 0,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x19685e7c974,
          },
          "e-1898": {
            id: "e-1898",
            name: "",
            animationType: "custom",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-64",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-1901",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "fc139bf1-0737-8691-b04d-23bb25f4dbbc",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "fc139bf1-0737-8691-b04d-23bb25f4dbbc",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !0,
              playInReverse: !1,
              scrollOffsetValue: 0,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x196e8173d0b,
          },
          "e-1900": {
            id: "e-1900",
            name: "",
            animationType: "custom",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-64",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-1901",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "c576b89c-3821-00ae-6ad3-afd14219802e",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "c576b89c-3821-00ae-6ad3-afd14219802e",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !0,
              playInReverse: !1,
              scrollOffsetValue: 0,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x196e8173d0b,
          },
          "e-1902": {
            id: "e-1902",
            name: "",
            animationType: "preset",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-103",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-1903",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "54d0ffe0-01a9-74e6-2777-bc09cf017445",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "54d0ffe0-01a9-74e6-2777-bc09cf017445",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !0,
              playInReverse: !1,
              scrollOffsetValue: 0,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x196e82a9096,
          },
          "e-1904": {
            id: "e-1904",
            name: "",
            animationType: "preset",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-104",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-1905",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "54d0ffe0-01a9-74e6-2777-bc09cf017449",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "54d0ffe0-01a9-74e6-2777-bc09cf017449",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !0,
              playInReverse: !1,
              scrollOffsetValue: 0,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x196e82a9096,
          },
          "e-1906": {
            id: "e-1906",
            name: "",
            animationType: "custom",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-64",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-1901",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "80b63927-c512-8fae-bf2a-0217230aaae7",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "80b63927-c512-8fae-bf2a-0217230aaae7",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !0,
              playInReverse: !1,
              scrollOffsetValue: 0,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x196e8173d0b,
          },
          "e-1910": {
            id: "e-1910",
            name: "",
            animationType: "preset",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-63",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-1911",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "e423d00d-6976-f20d-30c1-44b9f734d6fb",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "e423d00d-6976-f20d-30c1-44b9f734d6fb",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !0,
              playInReverse: !1,
              scrollOffsetValue: 0,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x196f29039d5,
          },
          "e-1912": {
            id: "e-1912",
            name: "",
            animationType: "preset",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-106",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-1913",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "0440245f-d5d7-0270-3b2e-9d599cc71039",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "0440245f-d5d7-0270-3b2e-9d599cc71039",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !0,
              playInReverse: !1,
              scrollOffsetValue: 0,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x196f292bd25,
          },
          "e-1914": {
            id: "e-1914",
            name: "",
            animationType: "preset",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-63",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-1915",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "c85ef8f5-47e8-4e72-da9e-caa5a3103d0f",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "c85ef8f5-47e8-4e72-da9e-caa5a3103d0f",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !0,
              playInReverse: !1,
              scrollOffsetValue: 0,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x196f29b50bb,
          },
          "e-1916": {
            id: "e-1916",
            name: "",
            animationType: "preset",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-63",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-1917",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "235b326d-8368-8555-dee5-517ac724259a",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "235b326d-8368-8555-dee5-517ac724259a",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !0,
              playInReverse: !1,
              scrollOffsetValue: 0,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x196f29c9ecf,
          },
          "e-1918": {
            id: "e-1918",
            name: "",
            animationType: "custom",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-64",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-1919",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "6ac24bdf-3c73-7a8d-6009-be668099c813",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "6ac24bdf-3c73-7a8d-6009-be668099c813",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !0,
              playInReverse: !1,
              scrollOffsetValue: 0,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x196f2a32fb5,
          },
          "e-1922": {
            id: "e-1922",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_CLICK",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-112",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-1923",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              selector: ".faq-tile-top",
              originalId: "5fb12b7d-c846-3879-be98-0f90f028ed1d",
              appliesTo: "CLASS",
            },
            targets: [
              {
                selector: ".faq-tile-top",
                originalId: "5fb12b7d-c846-3879-be98-0f90f028ed1d",
                appliesTo: "CLASS",
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x196f7695c4a,
          },
          "e-1923": {
            id: "e-1923",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_SECOND_CLICK",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-113",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-1922",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              selector: ".faq-tile-top",
              originalId: "5fb12b7d-c846-3879-be98-0f90f028ed1d",
              appliesTo: "CLASS",
            },
            targets: [
              {
                selector: ".faq-tile-top",
                originalId: "5fb12b7d-c846-3879-be98-0f90f028ed1d",
                appliesTo: "CLASS",
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x196f7695c4c,
          },
          "e-1926": {
            id: "e-1926",
            name: "",
            animationType: "custom",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-64",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-1927",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "27fb97cb-2aaa-607d-4c6b-585f6f671195",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "27fb97cb-2aaa-607d-4c6b-585f6f671195",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !0,
              playInReverse: !1,
              scrollOffsetValue: 0,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x196f7a7adf3,
          },
          "e-1930": {
            id: "e-1930",
            name: "",
            animationType: "preset",
            eventTypeId: "MOUSE_CLICK",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-115",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-1931",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              selector: ".faq-tile-top",
              originalId:
                "636a4ed9d15e71d2b4995e7f|0e2275ab-42f6-287f-2255-22dcae387938",
              appliesTo: "CLASS",
            },
            targets: [
              {
                selector: ".faq-tile-top",
                originalId:
                  "636a4ed9d15e71d2b4995e7f|0e2275ab-42f6-287f-2255-22dcae387938",
                appliesTo: "CLASS",
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x196f804279b,
          },
          "e-1931": {
            id: "e-1931",
            name: "",
            animationType: "preset",
            eventTypeId: "MOUSE_SECOND_CLICK",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-116",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-1930",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              selector: ".faq-tile-top",
              originalId:
                "636a4ed9d15e71d2b4995e7f|0e2275ab-42f6-287f-2255-22dcae387938",
              appliesTo: "CLASS",
            },
            targets: [
              {
                selector: ".faq-tile-top",
                originalId:
                  "636a4ed9d15e71d2b4995e7f|0e2275ab-42f6-287f-2255-22dcae387938",
                appliesTo: "CLASS",
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x196f804279b,
          },
          "e-1932": {
            id: "e-1932",
            name: "",
            animationType: "custom",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-64",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-1933",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "67bc5c9efe714f9fbe1bd752|c26d74b4-f002-9954-e2e4-687d9e674fd5",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "67bc5c9efe714f9fbe1bd752|c26d74b4-f002-9954-e2e4-687d9e674fd5",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !0,
              playInReverse: !1,
              scrollOffsetValue: 0,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x196f833e82f,
          },
          "e-2000": {
            id: "e-2000",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_MOVE",
            action: {
              id: "",
              actionTypeId: "GENERAL_CONTINUOUS_ACTION",
              config: {
                actionListId: "a-117",
                affectedElements: {},
                duration: 0,
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "6631203d8d8b7c2b0280a8aa",
              appliesTo: "PAGE",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "6631203d8d8b7c2b0280a8aa",
                appliesTo: "PAGE",
                styleBlockIds: [],
              },
            ],
            config: [
              {
                continuousParameterGroupId: "a-117-p",
                selectedAxis: "X_AXIS",
                basedOn: "VIEWPORT",
                reverse: !1,
                smoothing: 97,
                restingState: 50,
              },
              {
                continuousParameterGroupId: "a-117-p-2",
                selectedAxis: "Y_AXIS",
                basedOn: "VIEWPORT",
                reverse: !1,
                smoothing: 97,
                restingState: 50,
              },
            ],
            createdOn: 0x1973fc74752,
          },
          "e-2013": {
            id: "e-2013",
            name: "",
            animationType: "preset",
            eventTypeId: "MOUSE_MOVE",
            action: {
              id: "",
              actionTypeId: "GENERAL_CONTINUOUS_ACTION",
              config: {
                actionListId: "a-117",
                affectedElements: {},
                duration: 0,
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "685135f97b2bc8a891c67004",
              appliesTo: "PAGE",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "685135f97b2bc8a891c67004",
                appliesTo: "PAGE",
                styleBlockIds: [],
              },
            ],
            config: [
              {
                continuousParameterGroupId: "a-117-p",
                selectedAxis: "X_AXIS",
                basedOn: "VIEWPORT",
                reverse: !1,
                smoothing: 97,
                restingState: 50,
              },
              {
                continuousParameterGroupId: "a-117-p-2",
                selectedAxis: "Y_AXIS",
                basedOn: "VIEWPORT",
                reverse: !1,
                smoothing: 97,
                restingState: 50,
              },
            ],
            createdOn: 0x1977d3ada8b,
          },
          "e-2026": {
            id: "e-2026",
            name: "",
            animationType: "preset",
            eventTypeId: "MOUSE_MOVE",
            action: {
              id: "",
              actionTypeId: "GENERAL_CONTINUOUS_ACTION",
              config: {
                actionListId: "a-117",
                affectedElements: {},
                duration: 0,
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "6870eb9f41190992453d04dc",
              appliesTo: "PAGE",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "6870eb9f41190992453d04dc",
                appliesTo: "PAGE",
                styleBlockIds: [],
              },
            ],
            config: [
              {
                continuousParameterGroupId: "a-117-p",
                selectedAxis: "X_AXIS",
                basedOn: "VIEWPORT",
                reverse: !1,
                smoothing: 97,
                restingState: 50,
              },
              {
                continuousParameterGroupId: "a-117-p-2",
                selectedAxis: "Y_AXIS",
                basedOn: "VIEWPORT",
                reverse: !1,
                smoothing: 97,
                restingState: 50,
              },
            ],
            createdOn: 0x197f9186735,
          },
          "e-2039": {
            id: "e-2039",
            name: "",
            animationType: "preset",
            eventTypeId: "MOUSE_MOVE",
            action: {
              id: "",
              actionTypeId: "GENERAL_CONTINUOUS_ACTION",
              config: {
                actionListId: "a-117",
                affectedElements: {},
                duration: 0,
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "6870f000fb18e1ea8f23587f",
              appliesTo: "PAGE",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "6870f000fb18e1ea8f23587f",
                appliesTo: "PAGE",
                styleBlockIds: [],
              },
            ],
            config: [
              {
                continuousParameterGroupId: "a-117-p",
                selectedAxis: "X_AXIS",
                basedOn: "VIEWPORT",
                reverse: !1,
                smoothing: 97,
                restingState: 50,
              },
              {
                continuousParameterGroupId: "a-117-p-2",
                selectedAxis: "Y_AXIS",
                basedOn: "VIEWPORT",
                reverse: !1,
                smoothing: 97,
                restingState: 50,
              },
            ],
            createdOn: 0x197f929837c,
          },
          "e-2040": {
            id: "e-2040",
            name: "",
            animationType: "preset",
            eventTypeId: "PAGE_START",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-118",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-2041",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "68717c269913d39eb6cea4a4",
              appliesTo: "PAGE",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "68717c269913d39eb6cea4a4",
                appliesTo: "PAGE",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x197fb4d008f,
          },
          "e-2041": {
            id: "e-2041",
            name: "",
            animationType: "preset",
            eventTypeId: "PAGE_FINISH",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-6",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-2040",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "68717c269913d39eb6cea4a4",
              appliesTo: "PAGE",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "68717c269913d39eb6cea4a4",
                appliesTo: "PAGE",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x197fb4d008f,
          },
          "e-2050": {
            id: "e-2050",
            name: "",
            animationType: "preset",
            eventTypeId: "MOUSE_MOVE",
            action: {
              id: "",
              actionTypeId: "GENERAL_CONTINUOUS_ACTION",
              config: {
                actionListId: "a-117",
                affectedElements: {},
                duration: 0,
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "6880aa1f8c3c5ee97fadf4bc",
              appliesTo: "PAGE",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "6880aa1f8c3c5ee97fadf4bc",
                appliesTo: "PAGE",
                styleBlockIds: [],
              },
            ],
            config: [
              {
                continuousParameterGroupId: "a-117-p",
                selectedAxis: "X_AXIS",
                basedOn: "VIEWPORT",
                reverse: !1,
                smoothing: 97,
                restingState: 50,
              },
              {
                continuousParameterGroupId: "a-117-p-2",
                selectedAxis: "Y_AXIS",
                basedOn: "VIEWPORT",
                reverse: !1,
                smoothing: 97,
                restingState: 50,
              },
            ],
            createdOn: 0x19836988eae,
          },
          "e-2095": {
            id: "e-2095",
            name: "",
            animationType: "preset",
            eventTypeId: "MOUSE_MOVE",
            action: {
              id: "",
              actionTypeId: "GENERAL_CONTINUOUS_ACTION",
              config: {
                actionListId: "a-117",
                affectedElements: {},
                duration: 0,
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "6880dabee3ac5bcc005d8930",
              appliesTo: "PAGE",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "6880dabee3ac5bcc005d8930",
                appliesTo: "PAGE",
                styleBlockIds: [],
              },
            ],
            config: [
              {
                continuousParameterGroupId: "a-117-p",
                selectedAxis: "X_AXIS",
                basedOn: "VIEWPORT",
                reverse: !1,
                smoothing: 97,
                restingState: 50,
              },
              {
                continuousParameterGroupId: "a-117-p-2",
                selectedAxis: "Y_AXIS",
                basedOn: "VIEWPORT",
                reverse: !1,
                smoothing: 97,
                restingState: 50,
              },
            ],
            createdOn: 0x19837567981,
          },
          "e-2096": {
            id: "e-2096",
            name: "",
            animationType: "preset",
            eventTypeId: "MOUSE_CLICK",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-77",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-2097",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "68ad8bd3e2e7e437b2059ba6|f4495e08-219b-a17a-13cc-5c4ffee62eac",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "68ad8bd3e2e7e437b2059ba6|f4495e08-219b-a17a-13cc-5c4ffee62eac",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x198efb35af8,
          },
          "e-2097": {
            id: "e-2097",
            name: "",
            animationType: "preset",
            eventTypeId: "MOUSE_SECOND_CLICK",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-78",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-2096",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "68ad8bd3e2e7e437b2059ba6|f4495e08-219b-a17a-13cc-5c4ffee62eac",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "68ad8bd3e2e7e437b2059ba6|f4495e08-219b-a17a-13cc-5c4ffee62eac",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x198efb35af8,
          },
          "e-2098": {
            id: "e-2098",
            name: "",
            animationType: "preset",
            eventTypeId: "MOUSE_OVER",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-79",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-2099",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "68ad8bd3e2e7e437b2059ba6|f4495e08-219b-a17a-13cc-5c4ffee62eac",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "68ad8bd3e2e7e437b2059ba6|f4495e08-219b-a17a-13cc-5c4ffee62eac",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x198efb35af8,
          },
          "e-2099": {
            id: "e-2099",
            name: "",
            animationType: "preset",
            eventTypeId: "MOUSE_OUT",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-80",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-2098",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "68ad8bd3e2e7e437b2059ba6|f4495e08-219b-a17a-13cc-5c4ffee62eac",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "68ad8bd3e2e7e437b2059ba6|f4495e08-219b-a17a-13cc-5c4ffee62eac",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x198efb35af8,
          },
          "e-2100": {
            id: "e-2100",
            name: "",
            animationType: "preset",
            eventTypeId: "MOUSE_CLICK",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-77",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-2101",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "68ad8bd3e2e7e437b2059ba6|f4495e08-219b-a17a-13cc-5c4ffee62ebb",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "68ad8bd3e2e7e437b2059ba6|f4495e08-219b-a17a-13cc-5c4ffee62ebb",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x198efb35af8,
          },
          "e-2101": {
            id: "e-2101",
            name: "",
            animationType: "preset",
            eventTypeId: "MOUSE_SECOND_CLICK",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-78",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-2100",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "68ad8bd3e2e7e437b2059ba6|f4495e08-219b-a17a-13cc-5c4ffee62ebb",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "68ad8bd3e2e7e437b2059ba6|f4495e08-219b-a17a-13cc-5c4ffee62ebb",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x198efb35af8,
          },
          "e-2102": {
            id: "e-2102",
            name: "",
            animationType: "preset",
            eventTypeId: "MOUSE_OVER",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-79",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-2103",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "68ad8bd3e2e7e437b2059ba6|f4495e08-219b-a17a-13cc-5c4ffee62ebb",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "68ad8bd3e2e7e437b2059ba6|f4495e08-219b-a17a-13cc-5c4ffee62ebb",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x198efb35af8,
          },
          "e-2103": {
            id: "e-2103",
            name: "",
            animationType: "preset",
            eventTypeId: "MOUSE_OUT",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-80",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-2102",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "68ad8bd3e2e7e437b2059ba6|f4495e08-219b-a17a-13cc-5c4ffee62ebb",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "68ad8bd3e2e7e437b2059ba6|f4495e08-219b-a17a-13cc-5c4ffee62ebb",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x198efb35af8,
          },
          "e-2104": {
            id: "e-2104",
            name: "",
            animationType: "preset",
            eventTypeId: "MOUSE_OVER",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-79",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-2105",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "68ad8bd3e2e7e437b2059ba6|f4495e08-219b-a17a-13cc-5c4ffee62f28",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "68ad8bd3e2e7e437b2059ba6|f4495e08-219b-a17a-13cc-5c4ffee62f28",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x198efb35af8,
          },
          "e-2105": {
            id: "e-2105",
            name: "",
            animationType: "preset",
            eventTypeId: "MOUSE_OUT",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-80",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-2104",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "68ad8bd3e2e7e437b2059ba6|f4495e08-219b-a17a-13cc-5c4ffee62f28",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "68ad8bd3e2e7e437b2059ba6|f4495e08-219b-a17a-13cc-5c4ffee62f28",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x198efb35af8,
          },
          "e-2106": {
            id: "e-2106",
            name: "",
            animationType: "preset",
            eventTypeId: "MOUSE_CLICK",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-77",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-2107",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "68ad8bd3e2e7e437b2059ba6|f4495e08-219b-a17a-13cc-5c4ffee62f28",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "68ad8bd3e2e7e437b2059ba6|f4495e08-219b-a17a-13cc-5c4ffee62f28",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x198efb35af8,
          },
          "e-2107": {
            id: "e-2107",
            name: "",
            animationType: "preset",
            eventTypeId: "MOUSE_SECOND_CLICK",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-78",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-2106",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "68ad8bd3e2e7e437b2059ba6|f4495e08-219b-a17a-13cc-5c4ffee62f28",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "68ad8bd3e2e7e437b2059ba6|f4495e08-219b-a17a-13cc-5c4ffee62f28",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x198efb35af8,
          },
          "e-2108": {
            id: "e-2108",
            name: "",
            animationType: "preset",
            eventTypeId: "MOUSE_OVER",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-79",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-2109",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "68ad8bd3e2e7e437b2059ba6|f4495e08-219b-a17a-13cc-5c4ffee62f37",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "68ad8bd3e2e7e437b2059ba6|f4495e08-219b-a17a-13cc-5c4ffee62f37",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x198efb35af8,
          },
          "e-2109": {
            id: "e-2109",
            name: "",
            animationType: "preset",
            eventTypeId: "MOUSE_OUT",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-80",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-2108",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "68ad8bd3e2e7e437b2059ba6|f4495e08-219b-a17a-13cc-5c4ffee62f37",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "68ad8bd3e2e7e437b2059ba6|f4495e08-219b-a17a-13cc-5c4ffee62f37",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x198efb35af8,
          },
          "e-2110": {
            id: "e-2110",
            name: "",
            animationType: "preset",
            eventTypeId: "MOUSE_CLICK",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-77",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-2111",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "68ad8bd3e2e7e437b2059ba6|f4495e08-219b-a17a-13cc-5c4ffee62f37",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "68ad8bd3e2e7e437b2059ba6|f4495e08-219b-a17a-13cc-5c4ffee62f37",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x198efb35af8,
          },
          "e-2111": {
            id: "e-2111",
            name: "",
            animationType: "preset",
            eventTypeId: "MOUSE_SECOND_CLICK",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-78",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-2110",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "68ad8bd3e2e7e437b2059ba6|f4495e08-219b-a17a-13cc-5c4ffee62f37",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "68ad8bd3e2e7e437b2059ba6|f4495e08-219b-a17a-13cc-5c4ffee62f37",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x198efb35af8,
          },
          "e-2112": {
            id: "e-2112",
            name: "",
            animationType: "preset",
            eventTypeId: "MOUSE_CLICK",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-77",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-2113",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "68ad8bd3e2e7e437b2059ba6|f4495e08-219b-a17a-13cc-5c4ffee62f46",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "68ad8bd3e2e7e437b2059ba6|f4495e08-219b-a17a-13cc-5c4ffee62f46",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x198efb35af8,
          },
          "e-2113": {
            id: "e-2113",
            name: "",
            animationType: "preset",
            eventTypeId: "MOUSE_SECOND_CLICK",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-78",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-2112",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "68ad8bd3e2e7e437b2059ba6|f4495e08-219b-a17a-13cc-5c4ffee62f46",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "68ad8bd3e2e7e437b2059ba6|f4495e08-219b-a17a-13cc-5c4ffee62f46",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x198efb35af8,
          },
          "e-2114": {
            id: "e-2114",
            name: "",
            animationType: "preset",
            eventTypeId: "MOUSE_OVER",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-79",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-2115",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "68ad8bd3e2e7e437b2059ba6|f4495e08-219b-a17a-13cc-5c4ffee62f46",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "68ad8bd3e2e7e437b2059ba6|f4495e08-219b-a17a-13cc-5c4ffee62f46",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x198efb35af8,
          },
          "e-2115": {
            id: "e-2115",
            name: "",
            animationType: "preset",
            eventTypeId: "MOUSE_OUT",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-80",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-2114",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "68ad8bd3e2e7e437b2059ba6|f4495e08-219b-a17a-13cc-5c4ffee62f46",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "68ad8bd3e2e7e437b2059ba6|f4495e08-219b-a17a-13cc-5c4ffee62f46",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x198efb35af8,
          },
          "e-2116": {
            id: "e-2116",
            name: "",
            animationType: "preset",
            eventTypeId: "PAGE_START",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-120",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-2117",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "68b6fb47a34163ca73f2564c",
              appliesTo: "PAGE",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "68b6fb47a34163ca73f2564c",
                appliesTo: "PAGE",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x1990ac590cc,
          },
          "e-2117": {
            id: "e-2117",
            name: "",
            animationType: "preset",
            eventTypeId: "PAGE_FINISH",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-6",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-2116",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "68b6fb47a34163ca73f2564c",
              appliesTo: "PAGE",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "68b6fb47a34163ca73f2564c",
                appliesTo: "PAGE",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x1990ac590cc,
          },
          "e-2126": {
            id: "e-2126",
            name: "",
            animationType: "preset",
            eventTypeId: "PAGE_START",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-123",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-2127",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "68b97795a8b62613e2615633",
              appliesTo: "PAGE",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "68b97795a8b62613e2615633",
                appliesTo: "PAGE",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x199147b239a,
          },
          "e-2127": {
            id: "e-2127",
            name: "",
            animationType: "preset",
            eventTypeId: "PAGE_FINISH",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-6",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-2126",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "68b97795a8b62613e2615633",
              appliesTo: "PAGE",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "68b97795a8b62613e2615633",
                appliesTo: "PAGE",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x199147b239a,
          },
          "e-2128": {
            id: "e-2128",
            name: "",
            animationType: "preset",
            eventTypeId: "MOUSE_OVER",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-121",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-2129",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "68b6fb47a34163ca73f2564c|20df771e-ec0f-0530-bb28-123ad1f9075c",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "68b6fb47a34163ca73f2564c|20df771e-ec0f-0530-bb28-123ad1f9075c",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x1992e21bcf6,
          },
          "e-2129": {
            id: "e-2129",
            name: "",
            animationType: "preset",
            eventTypeId: "MOUSE_OUT",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-122",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-2128",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "68b6fb47a34163ca73f2564c|20df771e-ec0f-0530-bb28-123ad1f9075c",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "68b6fb47a34163ca73f2564c|20df771e-ec0f-0530-bb28-123ad1f9075c",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x1992e21bcf6,
          },
          "e-2130": {
            id: "e-2130",
            name: "",
            animationType: "preset",
            eventTypeId: "MOUSE_OVER",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-121",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-2131",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "636a4ed9d15e712318995e7a|0210922d-df4f-7b0d-bb99-47188490caea",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "636a4ed9d15e712318995e7a|0210922d-df4f-7b0d-bb99-47188490caea",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x19932a6ad51,
          },
          "e-2131": {
            id: "e-2131",
            name: "",
            animationType: "preset",
            eventTypeId: "MOUSE_OUT",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-122",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-2130",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "636a4ed9d15e712318995e7a|0210922d-df4f-7b0d-bb99-47188490caea",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "636a4ed9d15e712318995e7a|0210922d-df4f-7b0d-bb99-47188490caea",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x19932a6ad51,
          },
          "e-2134": {
            id: "e-2134",
            name: "",
            animationType: "preset",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-126",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-2135",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "68dfc455260def2acbfd286e|b3fe6fa6-f68d-37f5-8e50-4a4905dca7bb",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "68dfc455260def2acbfd286e|b3fe6fa6-f68d-37f5-8e50-4a4905dca7bb",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !0,
              playInReverse: !1,
              scrollOffsetValue: 0,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x199aa1a6471,
          },
          "e-2138": {
            id: "e-2138",
            name: "",
            animationType: "preset",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-64",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-2139",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "68f0e0bdd0d60dd01da11fe2|859331b9-6bcb-4c75-bd65-308d591cc4d2",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "68f0e0bdd0d60dd01da11fe2|859331b9-6bcb-4c75-bd65-308d591cc4d2",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !0,
              playInReverse: !1,
              scrollOffsetValue: 0,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x199ecee95de,
          },
          "e-2140": {
            id: "e-2140",
            name: "",
            animationType: "preset",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-64",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-2141",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "68f0e0bdd0d60dd01da11fe2|7abff730-d575-9c33-60c9-1855b64b6291",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "68f0e0bdd0d60dd01da11fe2|7abff730-d575-9c33-60c9-1855b64b6291",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !0,
              playInReverse: !1,
              scrollOffsetValue: 0,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x19a15ddfec7,
          },
          "e-2142": {
            id: "e-2142",
            name: "",
            animationType: "preset",
            eventTypeId: "SCROLLING_IN_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_CONTINUOUS_ACTION",
              config: {
                actionListId: "a-97",
                affectedElements: {},
                duration: 0,
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "68dfc455260def2acbfd286e|96330e61-35c7-414a-7e94-2e0ac8fa06a3",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "68dfc455260def2acbfd286e|96330e61-35c7-414a-7e94-2e0ac8fa06a3",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: [
              {
                continuousParameterGroupId: "a-97-p",
                smoothing: 97,
                startsEntering: !0,
                addStartOffset: !1,
                addOffsetValue: 50,
                startsExiting: !1,
                addEndOffset: !1,
                endOffsetValue: 50,
              },
            ],
            createdOn: 0x19ac4e948eb,
          },
          "e-2143": {
            id: "e-2143",
            name: "",
            animationType: "custom",
            eventTypeId: "PAGE_START",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-129",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-2144",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "697346b226a6f897ec5cb283",
              appliesTo: "PAGE",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "697346b226a6f897ec5cb283",
                appliesTo: "PAGE",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !0,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x19bea698065,
          },
          "e-2145": {
            id: "e-2145",
            name: "",
            animationType: "preset",
            eventTypeId: "PAGE_START",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-130",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-2146",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "69772aa25826b3a06e8183f2",
              appliesTo: "PAGE",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "69772aa25826b3a06e8183f2",
                appliesTo: "PAGE",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x19bf97e8bcb,
          },
          "e-2146": {
            id: "e-2146",
            name: "",
            animationType: "preset",
            eventTypeId: "PAGE_FINISH",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-6",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-2145",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "69772aa25826b3a06e8183f2",
              appliesTo: "PAGE",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "69772aa25826b3a06e8183f2",
                appliesTo: "PAGE",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x19bf97e8bcb,
          },
          "e-2147": {
            id: "e-2147",
            name: "",
            animationType: "preset",
            eventTypeId: "MOUSE_OVER",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-131",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-2148",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "69772aa25826b3a06e8183f2|e5cf6e5d-255d-ccaa-d25d-2cd434067bee",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "69772aa25826b3a06e8183f2|e5cf6e5d-255d-ccaa-d25d-2cd434067bee",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x19bf980df9a,
          },
          "e-2148": {
            id: "e-2148",
            name: "",
            animationType: "preset",
            eventTypeId: "MOUSE_OUT",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-132",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-2147",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "69772aa25826b3a06e8183f2|e5cf6e5d-255d-ccaa-d25d-2cd434067bee",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "69772aa25826b3a06e8183f2|e5cf6e5d-255d-ccaa-d25d-2cd434067bee",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x19bf980df9a,
          },
          "e-2149": {
            id: "e-2149",
            name: "",
            animationType: "preset",
            eventTypeId: "PAGE_START",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-133",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-2150",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "698c79e27f84f8b56af3b2f8",
              appliesTo: "PAGE",
              styleBlockIds: [],
            },
            targets: [],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x19c4cbc1e80,
          },
          "e-2150": {
            id: "e-2150",
            name: "",
            animationType: "preset",
            eventTypeId: "PAGE_FINISH",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-6",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-2149",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "698c79e27f84f8b56af3b2f8",
              appliesTo: "PAGE",
              styleBlockIds: [],
            },
            targets: [],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x19c4cbc1e80,
          },
          "e-2151": {
            id: "e-2151",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_CLICK",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-134",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-2152",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              appliesTo: "ELEMENT",
              styleBlockIds: [],
              id: "636a4ed9d15e712900995e2c|16505ff4-0096-4aec-350a-cc8a0eb24662",
            },
            targets: [],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x19c4da21c88,
          },
          "e-2152": {
            id: "e-2152",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_SECOND_CLICK",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-135",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-2151",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              appliesTo: "ELEMENT",
              styleBlockIds: [],
              id: "636a4ed9d15e712900995e2c|16505ff4-0096-4aec-350a-cc8a0eb24662",
            },
            targets: [],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x19c4da21c89,
          },
        },
        actionLists: {
          "a-5": {
            id: "a-5",
            title: "Hide popup on load",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-5-n",
                    actionTypeId: "GENERAL_DISPLAY",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 0,
                      target: { id: "4b46cfe0-e0a8-0268-a687-26afca0bd18b" },
                      value: "none",
                    },
                  },
                  {
                    id: "a-5-n-2",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: { id: "4b46cfe0-e0a8-0268-a687-26afca0bd18b" },
                      value: 0,
                      unit: "",
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !0,
            createdOn: 0x182ecccf4cf,
          },
          "a-6": {
            id: "a-6",
            title: "Show popup",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-6-n",
                    actionTypeId: "GENERAL_DISPLAY",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 0,
                      target: {
                        selector: ".exit-intent.exit-intent-popup",
                        selectorGuids: [
                          "fe5cfbc2-a947-e3a6-d72f-3539ff5b9d01",
                          "102d9a5e-5aa1-738b-fad0-eac3f9adf1fd",
                        ],
                      },
                      value: "block",
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: "a-6-n-2",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 5e3,
                      easing: "",
                      duration: 500,
                      target: {
                        selector: ".exit-intent.exit-intent-popup",
                        selectorGuids: [
                          "fe5cfbc2-a947-e3a6-d72f-3539ff5b9d01",
                          "102d9a5e-5aa1-738b-fad0-eac3f9adf1fd",
                        ],
                      },
                      value: 1,
                      unit: "",
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !1,
            createdOn: 0x182eedbb195,
          },
          "a-8": {
            id: "a-8",
            title: "Logo-slider-fade",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-8-n",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: { id: "c6f74f12-fcd1-b02c-d13f-6d0108921cf1" },
                      value: 0,
                      unit: "",
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: "a-8-n-2",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 2e3,
                      target: { id: "c6f74f12-fcd1-b02c-d13f-6d0108921cf1" },
                      value: 1,
                      unit: "",
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !0,
            createdOn: 0x18149f31a54,
          },
          "a-9": {
            id: "a-9",
            title: "Logo-Slider-Desktop",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-9-n",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 0,
                      target: { id: "c6f74f12-fcd1-b02c-d13f-6d0108921cf1" },
                      xValue: 0,
                      yValue: 0,
                      zValue: 0,
                      xUnit: "px",
                      yUnit: "px",
                      zUnit: "px",
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: "a-9-n-2",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 3e4,
                      target: { id: "c6f74f12-fcd1-b02c-d13f-6d0108921cf1" },
                      xValue: -2300,
                      xUnit: "px",
                      yUnit: "PX",
                      zUnit: "PX",
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !1,
            createdOn: 0x18186475c15,
          },
          "a-10": {
            id: "a-10",
            title: "Logo-Slider-Phone",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-10-n",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 0,
                      target: { id: "c6f74f12-fcd1-b02c-d13f-6d0108921cf1" },
                      xValue: 0,
                      yValue: 0,
                      zValue: 0,
                      xUnit: "px",
                      yUnit: "px",
                      zUnit: "px",
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: "a-10-n-2",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 36e3,
                      target: { id: "c6f74f12-fcd1-b02c-d13f-6d0108921cf1" },
                      xValue: -1500,
                      xUnit: "px",
                      yUnit: "PX",
                      zUnit: "PX",
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !0,
            createdOn: 0x181864a9247,
          },
          "a-17": {
            id: "a-17",
            title: "Show Scoring",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-17-n",
                    actionTypeId: "GENERAL_DISPLAY",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 0,
                      target: {
                        useEventTarget: "SIBLINGS",
                        selector: ".index-p",
                        selectorGuids: ["e538b8e3-f009-4978-9e82-601f4c083780"],
                      },
                      value: "none",
                    },
                  },
                  {
                    id: "a-17-n-3",
                    actionTypeId: "GENERAL_DISPLAY",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 0,
                      target: {
                        useEventTarget: "SIBLINGS",
                        selector: ".grid-7.score-grid",
                        selectorGuids: [
                          "349c192e-5013-deac-d36a-9ad22aadbc89",
                          "6d9cad80-9270-db08-1366-73b1042635f8",
                        ],
                      },
                      value: "none",
                    },
                  },
                  {
                    id: "a-17-n-4",
                    actionTypeId: "GENERAL_DISPLAY",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 0,
                      target: {
                        useEventTarget: "SIBLINGS",
                        selector: ".collection-list-wrapper-3",
                        selectorGuids: ["9ca435b2-c3ce-6428-6094-b3b439ab9681"],
                      },
                      value: "none",
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: "a-17-n-2",
                    actionTypeId: "GENERAL_DISPLAY",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 0,
                      target: {
                        useEventTarget: "SIBLINGS",
                        selector: ".index-p",
                        selectorGuids: ["e538b8e3-f009-4978-9e82-601f4c083780"],
                      },
                      value: "block",
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: "a-17-n-5",
                    actionTypeId: "GENERAL_DISPLAY",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 0,
                      target: {
                        useEventTarget: "SIBLINGS",
                        selector: ".grid-7.score-grid",
                        selectorGuids: [
                          "349c192e-5013-deac-d36a-9ad22aadbc89",
                          "6d9cad80-9270-db08-1366-73b1042635f8",
                        ],
                      },
                      value: "grid",
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: "a-17-n-6",
                    actionTypeId: "GENERAL_DISPLAY",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 0,
                      target: {
                        useEventTarget: "SIBLINGS",
                        selector: ".collection-list-wrapper-3",
                        selectorGuids: ["9ca435b2-c3ce-6428-6094-b3b439ab9681"],
                      },
                      value: "grid",
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !0,
            createdOn: 0x1837e455669,
          },
          "a-18": {
            id: "a-18",
            title: "Hide Scoring",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-18-n",
                    actionTypeId: "GENERAL_DISPLAY",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 0,
                      target: {
                        useEventTarget: "SIBLINGS",
                        selector: ".index-p",
                        selectorGuids: ["e538b8e3-f009-4978-9e82-601f4c083780"],
                      },
                      value: "none",
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: "a-18-n-2",
                    actionTypeId: "GENERAL_DISPLAY",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 0,
                      target: {
                        useEventTarget: "SIBLINGS",
                        selector: ".grid-7.score-grid",
                        selectorGuids: [
                          "349c192e-5013-deac-d36a-9ad22aadbc89",
                          "6d9cad80-9270-db08-1366-73b1042635f8",
                        ],
                      },
                      value: "none",
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: "a-18-n-3",
                    actionTypeId: "GENERAL_DISPLAY",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 0,
                      target: {
                        useEventTarget: "SIBLINGS",
                        selector: ".collection-list-wrapper-3",
                        selectorGuids: ["9ca435b2-c3ce-6428-6094-b3b439ab9681"],
                      },
                      value: "none",
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !1,
            createdOn: 0x1837e463844,
          },
          "a-19": {
            id: "a-19",
            title: "Logo Carousel",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-19-n",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        selector: ".logo-carousel-wrap",
                        selectorGuids: ["722409f4-9a4c-47a1-b5a2-6f85bc691112"],
                      },
                      xValue: 0,
                      xUnit: "%",
                      yUnit: "PX",
                      zUnit: "PX",
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: "a-19-n-2",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 35e3,
                      target: {
                        selector: ".logo-carousel-wrap",
                        selectorGuids: ["722409f4-9a4c-47a1-b5a2-6f85bc691112"],
                      },
                      xValue: -56,
                      xUnit: "%",
                      yUnit: "PX",
                      zUnit: "PX",
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: "a-19-n-3",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 0,
                      target: {
                        selector: ".logo-carousel-wrap",
                        selectorGuids: ["722409f4-9a4c-47a1-b5a2-6f85bc691112"],
                      },
                      xValue: 0,
                      xUnit: "%",
                      yUnit: "PX",
                      zUnit: "PX",
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !0,
            createdOn: 0x1839dce8deb,
          },
          "a-26": {
            id: "a-26",
            title: "Opacity Logo",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-26-n",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: !0,
                        id: "636a4ed9d15e717e3b995e75|ac00b449-c428-e69e-d369-0f6f517171ba",
                      },
                      value: 0,
                      unit: "",
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: "a-26-n-2",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 2e3,
                      target: {
                        useEventTarget: !0,
                        id: "636a4ed9d15e717e3b995e75|ac00b449-c428-e69e-d369-0f6f517171ba",
                      },
                      value: 1,
                      unit: "",
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !0,
            createdOn: 0x1839e2d8eec,
          },
          "a-28": {
            id: "a-28",
            title: "Hide popup on load 3",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-28-n",
                    actionTypeId: "GENERAL_DISPLAY",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 0,
                      target: {
                        id: "636a4ed9d15e712818995e7c|4b46cfe0-e0a8-0268-a687-26afca0bd18b",
                      },
                      value: "none",
                    },
                  },
                  {
                    id: "a-28-n-2",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        id: "636a4ed9d15e712818995e7c|4b46cfe0-e0a8-0268-a687-26afca0bd18b",
                      },
                      value: 0,
                      unit: "",
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !0,
            createdOn: 0x182ecccf4cf,
          },
          "a-35": {
            id: "a-35",
            title: "Button hover out",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-35-n",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "outQuint",
                      duration: 350,
                      target: {},
                      yValue: -100,
                      xUnit: "PX",
                      yUnit: "%",
                      zUnit: "PX",
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !1,
            createdOn: 0x180b8f53a02,
          },
          "a-36": {
            id: "a-36",
            title: "Button on hover",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-36-n",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "outQuint",
                      duration: 350,
                      target: {},
                      yValue: 0,
                      xUnit: "PX",
                      yUnit: "%",
                      zUnit: "PX",
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !1,
            createdOn: 0x180b8f53a02,
          },
          "a-38": {
            id: "a-38",
            title: "Hero  fast",
            continuousParameterGroups: [
              {
                id: "a-38-p",
                type: "SCROLL_PROGRESS",
                parameterLabel: "Scroll",
                continuousActionGroups: [
                  {
                    keyframe: 0,
                    actionItems: [
                      {
                        id: "a-38-n",
                        actionTypeId: "TRANSFORM_MOVE",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {},
                          yValue: 0,
                          xUnit: "PX",
                          yUnit: "%",
                          zUnit: "PX",
                        },
                      },
                    ],
                  },
                  {
                    keyframe: 100,
                    actionItems: [
                      {
                        id: "a-38-n-2",
                        actionTypeId: "TRANSFORM_MOVE",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {},
                          yValue: -90,
                          xUnit: "PX",
                          yUnit: "%",
                          zUnit: "PX",
                        },
                      },
                    ],
                  },
                ],
              },
            ],
            createdOn: 0x18080db9a08,
          },
          "a-37": {
            id: "a-37",
            title: "Hero",
            continuousParameterGroups: [
              {
                id: "a-37-p",
                type: "SCROLL_PROGRESS",
                parameterLabel: "Scroll",
                continuousActionGroups: [
                  {
                    keyframe: 0,
                    actionItems: [
                      {
                        id: "a-37-n",
                        actionTypeId: "TRANSFORM_MOVE",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {},
                          yValue: 0,
                          xUnit: "PX",
                          yUnit: "%",
                          zUnit: "PX",
                        },
                      },
                    ],
                  },
                  {
                    keyframe: 100,
                    actionItems: [
                      {
                        id: "a-37-n-2",
                        actionTypeId: "TRANSFORM_MOVE",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {},
                          yValue: -50,
                          xUnit: "PX",
                          yUnit: "%",
                          zUnit: "PX",
                        },
                      },
                    ],
                  },
                ],
              },
            ],
            createdOn: 0x18080db9a08,
          },
          "a-39": {
            id: "a-39",
            title: "Hero home opacity",
            continuousParameterGroups: [
              {
                id: "a-39-p",
                type: "SCROLL_PROGRESS",
                parameterLabel: "Scroll",
                continuousActionGroups: [
                  {
                    keyframe: 50,
                    actionItems: [
                      {
                        id: "a-39-n",
                        actionTypeId: "STYLE_OPACITY",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {},
                          value: 1,
                          unit: "",
                        },
                      },
                    ],
                  },
                  {
                    keyframe: 70,
                    actionItems: [
                      {
                        id: "a-39-n-2",
                        actionTypeId: "STYLE_OPACITY",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {},
                          value: 0,
                          unit: "",
                        },
                      },
                    ],
                  },
                ],
              },
            ],
            createdOn: 0x18081359c5c,
          },
          "a-45": {
            id: "a-45",
            title: "Speaker slide in view",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-45-n",
                    actionTypeId: "TRANSFORM_SCALE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {},
                      xValue: 0.7,
                      yValue: 0.7,
                      locked: !0,
                    },
                  },
                  {
                    id: "a-45-n-2",
                    actionTypeId: "GENERAL_DISPLAY",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 0,
                      target: {},
                      value: "block",
                    },
                  },
                  {
                    id: "a-45-n-3",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {},
                      value: 0,
                      unit: "",
                    },
                  },
                  {
                    id: "a-45-n-4",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {},
                      value: 0,
                      unit: "",
                    },
                  },
                  {
                    id: "a-45-n-5",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {},
                      value: 0,
                      unit: "",
                    },
                  },
                  {
                    id: "a-45-n-6",
                    actionTypeId: "TRANSFORM_SKEW",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {},
                      yValue: 5,
                      xUnit: "DEG",
                      yUnit: "deg",
                      zUnit: "DEG",
                    },
                  },
                  {
                    id: "a-45-n-7",
                    actionTypeId: "TRANSFORM_SKEW",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {},
                      xValue: null,
                      yValue: 5,
                      xUnit: "deg",
                      yUnit: "deg",
                      zUnit: "DEG",
                    },
                  },
                  {
                    id: "a-45-n-8",
                    actionTypeId: "TRANSFORM_SKEW",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {},
                      xValue: null,
                      yValue: 5,
                      xUnit: "deg",
                      yUnit: "deg",
                      zUnit: "DEG",
                    },
                  },
                  {
                    id: "a-45-n-9",
                    actionTypeId: "TRANSFORM_SCALE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {},
                      xValue: 1.3,
                      yValue: 1.3,
                      locked: !0,
                    },
                  },
                  {
                    id: "a-45-n-10",
                    actionTypeId: "TRANSFORM_SCALE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {},
                      xValue: 1.02,
                      yValue: 1.02,
                      locked: !0,
                    },
                  },
                  {
                    id: "a-45-n-11",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {},
                      value: 1,
                      unit: "",
                    },
                  },
                  {
                    id: "a-45-n-12",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {},
                      yValue: 100,
                      xUnit: "PX",
                      yUnit: "%",
                      zUnit: "PX",
                    },
                  },
                  {
                    id: "a-45-n-13",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {},
                      yValue: 100,
                      xUnit: "PX",
                      yUnit: "%",
                      zUnit: "PX",
                    },
                  },
                  {
                    id: "a-45-n-14",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {},
                      yValue: 100,
                      xUnit: "PX",
                      yUnit: "%",
                      zUnit: "PX",
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: "a-45-n-15",
                    actionTypeId: "TRANSFORM_SCALE",
                    config: {
                      delay: 0,
                      easing: "inOutCirc",
                      duration: 1800,
                      target: {},
                      xValue: 1,
                      yValue: 1,
                      locked: !0,
                    },
                  },
                  {
                    id: "a-45-n-16",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "inOutCirc",
                      duration: 1800,
                      target: {},
                      value: 0,
                      unit: "",
                    },
                  },
                  {
                    id: "a-45-n-17",
                    actionTypeId: "TRANSFORM_SCALE",
                    config: {
                      delay: 0,
                      easing: "inOutCirc",
                      duration: 1800,
                      target: {},
                      xValue: 1.5,
                      yValue: 1.5,
                      locked: !0,
                    },
                  },
                  {
                    id: "a-45-n-18",
                    actionTypeId: "TRANSFORM_SCALE",
                    config: {
                      delay: 0,
                      easing: "inOutCirc",
                      duration: 1800,
                      target: {},
                      xValue: 1,
                      yValue: 1,
                      locked: !0,
                    },
                  },
                  {
                    id: "a-45-n-19",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 700,
                      easing: "outCirc",
                      duration: 900,
                      target: {},
                      yValue: 0,
                      xUnit: "PX",
                      yUnit: "%",
                      zUnit: "PX",
                    },
                  },
                  {
                    id: "a-45-n-20",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 700,
                      easing: "outCirc",
                      duration: 900,
                      target: {},
                      value: 1,
                      unit: "",
                    },
                  },
                  {
                    id: "a-45-n-21",
                    actionTypeId: "TRANSFORM_SKEW",
                    config: {
                      delay: 700,
                      easing: "outCirc",
                      duration: 900,
                      target: {},
                      xValue: null,
                      yValue: 0,
                      xUnit: "deg",
                      yUnit: "deg",
                      zUnit: "DEG",
                    },
                  },
                  {
                    id: "a-45-n-22",
                    actionTypeId: "TRANSFORM_SKEW",
                    config: {
                      delay: 800,
                      easing: "outCirc",
                      duration: 900,
                      target: {},
                      yValue: 0,
                      xUnit: "DEG",
                      yUnit: "deg",
                      zUnit: "DEG",
                    },
                  },
                  {
                    id: "a-45-n-23",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 800,
                      easing: "outCirc",
                      duration: 900,
                      target: {},
                      yValue: 0,
                      xUnit: "PX",
                      yUnit: "%",
                      zUnit: "PX",
                    },
                  },
                  {
                    id: "a-45-n-24",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 800,
                      easing: "outCirc",
                      duration: 900,
                      target: {},
                      value: 1,
                      unit: "",
                    },
                  },
                  {
                    id: "a-45-n-25",
                    actionTypeId: "TRANSFORM_SKEW",
                    config: {
                      delay: 900,
                      easing: "outCirc",
                      duration: 900,
                      target: {},
                      yValue: 0,
                      xUnit: "DEG",
                      yUnit: "deg",
                      zUnit: "DEG",
                    },
                  },
                  {
                    id: "a-45-n-26",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 900,
                      easing: "outCirc",
                      duration: 900,
                      target: {},
                      yValue: 0,
                      xUnit: "PX",
                      yUnit: "%",
                      zUnit: "PX",
                    },
                  },
                  {
                    id: "a-45-n-27",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 900,
                      easing: "outCirc",
                      duration: 900,
                      target: {},
                      value: 1,
                      unit: "",
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !0,
            createdOn: 0x1785c47019b,
          },
          "a-46": {
            id: "a-46",
            title: "Speaker slide out view",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-46-n",
                    actionTypeId: "TRANSFORM_SCALE",
                    config: {
                      delay: 0,
                      easing: "outQuad",
                      duration: 600,
                      target: {},
                      xValue: 0.7,
                      yValue: 0.7,
                      locked: !0,
                    },
                  },
                  {
                    id: "a-46-n-2",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "outQuad",
                      duration: 600,
                      target: {},
                      value: 0,
                      unit: "",
                    },
                  },
                  {
                    id: "a-46-n-3",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "outQuad",
                      duration: 600,
                      target: {},
                      value: 0,
                      unit: "",
                    },
                  },
                  {
                    id: "a-46-n-4",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "outQuad",
                      duration: 600,
                      target: {},
                      value: 0,
                      unit: "",
                    },
                  },
                  {
                    id: "a-46-n-5",
                    actionTypeId: "TRANSFORM_SKEW",
                    config: {
                      delay: 0,
                      easing: "outQuad",
                      duration: 600,
                      target: {},
                      yValue: 5,
                      xUnit: "DEG",
                      yUnit: "deg",
                      zUnit: "DEG",
                    },
                  },
                  {
                    id: "a-46-n-6",
                    actionTypeId: "TRANSFORM_SKEW",
                    config: {
                      delay: 0,
                      easing: "outQuad",
                      duration: 600,
                      target: {},
                      xValue: null,
                      yValue: 5,
                      xUnit: "deg",
                      yUnit: "deg",
                      zUnit: "DEG",
                    },
                  },
                  {
                    id: "a-46-n-7",
                    actionTypeId: "TRANSFORM_SKEW",
                    config: {
                      delay: 0,
                      easing: "outQuad",
                      duration: 600,
                      target: {},
                      xValue: null,
                      yValue: 5,
                      xUnit: "deg",
                      yUnit: "deg",
                      zUnit: "DEG",
                    },
                  },
                  {
                    id: "a-46-n-8",
                    actionTypeId: "TRANSFORM_SCALE",
                    config: {
                      delay: 0,
                      easing: "outQuad",
                      duration: 600,
                      target: {},
                      xValue: 1.3,
                      yValue: 1.3,
                      locked: !0,
                    },
                  },
                  {
                    id: "a-46-n-9",
                    actionTypeId: "TRANSFORM_SCALE",
                    config: {
                      delay: 0,
                      easing: "outQuad",
                      duration: 600,
                      target: {},
                      xValue: 1.02,
                      yValue: 1.02,
                      locked: !0,
                    },
                  },
                  {
                    id: "a-46-n-10",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "outQuad",
                      duration: 600,
                      target: {},
                      value: 1,
                      unit: "",
                    },
                  },
                  {
                    id: "a-46-n-11",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "outQuad",
                      duration: 600,
                      target: {},
                      yValue: 100,
                      xUnit: "PX",
                      yUnit: "%",
                      zUnit: "PX",
                    },
                  },
                  {
                    id: "a-46-n-12",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "outQuad",
                      duration: 600,
                      target: {},
                      yValue: 100,
                      xUnit: "PX",
                      yUnit: "%",
                      zUnit: "PX",
                    },
                  },
                  {
                    id: "a-46-n-13",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "outQuad",
                      duration: 600,
                      target: {},
                      yValue: 100,
                      xUnit: "PX",
                      yUnit: "%",
                      zUnit: "PX",
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !1,
            createdOn: 0x1785c47019b,
          },
          "a-47": {
            id: "a-47",
            title: "Slider arrow hover",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-47-n",
                    actionTypeId: "TRANSFORM_SCALE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".speaker-arrow",
                        selectorGuids: ["dc84d517-c7d4-c6b7-a97e-76e7e28eb70b"],
                      },
                      xValue: 1,
                      yValue: 1,
                      locked: !0,
                    },
                  },
                  {
                    id: "a-47-n-2",
                    actionTypeId: "STYLE_FILTER",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {},
                      filters: [
                        {
                          type: "invert",
                          filterId: "b98c",
                          value: 0,
                          unit: "%",
                        },
                      ],
                    },
                  },
                  {
                    id: "a-47-n-3",
                    actionTypeId: "STYLE_BACKGROUND_COLOR",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".speaker-arrow",
                        selectorGuids: ["dc84d517-c7d4-c6b7-a97e-76e7e28eb70b"],
                      },
                      globalSwatchId: "c4e753ff",
                      rValue: 30,
                      bValue: 41,
                      gValue: 32,
                      aValue: 1,
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: "a-47-n-4",
                    actionTypeId: "TRANSFORM_SCALE",
                    config: {
                      delay: 0,
                      easing: "outQuad",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".speaker-arrow",
                        selectorGuids: ["dc84d517-c7d4-c6b7-a97e-76e7e28eb70b"],
                      },
                      xValue: 1.1,
                      yValue: 1.1,
                      locked: !0,
                    },
                  },
                  {
                    id: "a-47-n-5",
                    actionTypeId: "STYLE_FILTER",
                    config: {
                      delay: 0,
                      easing: "outQuad",
                      duration: 500,
                      target: {},
                      filters: [
                        {
                          type: "invert",
                          filterId: "26fa",
                          value: 100,
                          unit: "%",
                        },
                      ],
                    },
                  },
                  {
                    id: "a-47-n-6",
                    actionTypeId: "STYLE_BACKGROUND_COLOR",
                    config: {
                      delay: 0,
                      easing: "outQuad",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".speaker-arrow",
                        selectorGuids: ["dc84d517-c7d4-c6b7-a97e-76e7e28eb70b"],
                      },
                      globalSwatchId: "",
                      rValue: 255,
                      bValue: 255,
                      gValue: 255,
                      aValue: 1,
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !0,
            createdOn: 0x17861de054a,
          },
          "a-48": {
            id: "a-48",
            title: "Slider arrow hover 2",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-48-n",
                    actionTypeId: "TRANSFORM_SCALE",
                    config: {
                      delay: 0,
                      easing: "outQuad",
                      duration: 300,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".speaker-arrow",
                        selectorGuids: ["dc84d517-c7d4-c6b7-a97e-76e7e28eb70b"],
                      },
                      xValue: 1,
                      yValue: 1,
                      locked: !0,
                    },
                  },
                  {
                    id: "a-48-n-2",
                    actionTypeId: "STYLE_FILTER",
                    config: {
                      delay: 0,
                      easing: "outQuad",
                      duration: 300,
                      target: {},
                      filters: [
                        {
                          type: "invert",
                          filterId: "b98c",
                          value: 0,
                          unit: "%",
                        },
                      ],
                    },
                  },
                  {
                    id: "a-48-n-3",
                    actionTypeId: "STYLE_BACKGROUND_COLOR",
                    config: {
                      delay: 0,
                      easing: "outQuad",
                      duration: 300,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".speaker-arrow",
                        selectorGuids: ["dc84d517-c7d4-c6b7-a97e-76e7e28eb70b"],
                      },
                      globalSwatchId: "c4e753ff",
                      rValue: 30,
                      bValue: 41,
                      gValue: 32,
                      aValue: 1,
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !1,
            createdOn: 0x17861de054a,
          },
          "a-49": {
            id: "a-49",
            title: "B2B Logos",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-49-n",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 45e3,
                      target: {
                        selector: ".b2b-logos-row",
                        selectorGuids: ["717be08d-6068-c656-ab50-4d655b3b0d90"],
                      },
                      xValue: -100,
                      xUnit: "%",
                      yUnit: "PX",
                      zUnit: "PX",
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: "a-49-n-2",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 0,
                      target: {
                        selector: ".b2b-logos-row",
                        selectorGuids: ["717be08d-6068-c656-ab50-4d655b3b0d90"],
                      },
                      xValue: 0,
                      xUnit: "%",
                      yUnit: "PX",
                      zUnit: "PX",
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !1,
            createdOn: 0x18ebe318bb5,
          },
          "a-53": {
            id: "a-53",
            title: "Evx Hide Mega Nav Mobile",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-53-n",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 300,
                      target: {
                        useEventTarget: "PARENT",
                        selector: ".eventex-mega-nav-container.mobile",
                        selectorGuids: [
                          "5952054b-6d63-34b2-0b37-d72220b00046",
                          "61a2854d-e826-6412-b141-c00faa596821",
                        ],
                      },
                      yValue: -120,
                      xUnit: "PX",
                      yUnit: "vh",
                      zUnit: "PX",
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !1,
            createdOn: 0x18f3a5fda0a,
          },
          "a-57": {
            id: "a-57",
            title: "Evx Frosted Mouse In",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-57-n",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".evx-frosted-arrow",
                        selectorGuids: ["d00f8ed7-8068-fe21-a581-0fe9a05a0945"],
                      },
                      xValue: 0,
                      xUnit: "px",
                      yUnit: "PX",
                      zUnit: "PX",
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: "a-57-n-2",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 300,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".evx-frosted-arrow",
                        selectorGuids: ["d00f8ed7-8068-fe21-a581-0fe9a05a0945"],
                      },
                      xValue: 8,
                      xUnit: "px",
                      yUnit: "PX",
                      zUnit: "PX",
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !0,
            createdOn: 0x18f3de5612d,
          },
          "a-58": {
            id: "a-58",
            title: "Evx Frosted Mouse Out",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-58-n",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 300,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".evx-frosted-arrow",
                        selectorGuids: ["d00f8ed7-8068-fe21-a581-0fe9a05a0945"],
                      },
                      xValue: 0,
                      xUnit: "px",
                      yUnit: "PX",
                      zUnit: "PX",
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !1,
            createdOn: 0x18f3de65a18,
          },
          "a-60": {
            id: "a-60",
            title: "Evx Special Button Mouse In",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-60-n",
                    actionTypeId: "TRANSFORM_ROTATE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".evx-special-button-arrow",
                        selectorGuids: ["637da39c-7a3a-3d16-3fca-f1e8dfc0853c"],
                      },
                      zValue: 0,
                      xUnit: "DEG",
                      yUnit: "DEG",
                      zUnit: "deg",
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: "a-60-n-2",
                    actionTypeId: "TRANSFORM_ROTATE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 200,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".evx-special-button-arrow",
                        selectorGuids: ["637da39c-7a3a-3d16-3fca-f1e8dfc0853c"],
                      },
                      zValue: -45,
                      xUnit: "DEG",
                      yUnit: "DEG",
                      zUnit: "deg",
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !0,
            createdOn: 0x18f3e96d230,
          },
          "a-61": {
            id: "a-61",
            title: "Evx Special Button Mouse Out",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-61-n",
                    actionTypeId: "TRANSFORM_ROTATE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 200,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".evx-special-button-arrow",
                        selectorGuids: ["637da39c-7a3a-3d16-3fca-f1e8dfc0853c"],
                      },
                      zValue: 0,
                      xUnit: "DEG",
                      yUnit: "DEG",
                      zUnit: "deg",
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !1,
            createdOn: 0x18f3e97a75c,
          },
          "a-62": {
            id: "a-62",
            title: "Evx Main CTA Juggle",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-62-n",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: { id: "a4ad75e9-2f46-c662-9701-cbb70014eaf1" },
                      xValue: 0,
                      xUnit: "vw",
                      yUnit: "PX",
                      zUnit: "PX",
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: "a-62-n-2",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "easeInOut",
                      duration: 8e3,
                      target: { id: "a4ad75e9-2f46-c662-9701-cbb70014eaf1" },
                      xValue: -100,
                      xUnit: "vw",
                      yUnit: "PX",
                      zUnit: "PX",
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: "a-62-n-3",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "easeInOut",
                      duration: 8e3,
                      target: { id: "a4ad75e9-2f46-c662-9701-cbb70014eaf1" },
                      xValue: 0,
                      xUnit: "vw",
                      yUnit: "PX",
                      zUnit: "PX",
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !0,
            createdOn: 0x18f3e9c4d36,
          },
          "a-70": {
            id: "a-70",
            title: "Evx Back Small Juggle",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-70-n",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 4e3,
                      target: {
                        id: "636a4ed9d15e7127c6995e80|de2fb261-f33c-e9a2-5767-86ae9e3dfa69",
                      },
                      xValue: 20,
                      xUnit: "vw",
                      yUnit: "PX",
                      zUnit: "PX",
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: "a-70-n-2",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 4e3,
                      target: {
                        id: "636a4ed9d15e7127c6995e80|de2fb261-f33c-e9a2-5767-86ae9e3dfa69",
                      },
                      xValue: 0,
                      xUnit: "vw",
                      yUnit: "PX",
                      zUnit: "PX",
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: "a-70-n-3",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 4e3,
                      target: {
                        id: "636a4ed9d15e7127c6995e80|de2fb261-f33c-e9a2-5767-86ae9e3dfa69",
                      },
                      xValue: 20,
                      xUnit: "vw",
                      yUnit: "PX",
                      zUnit: "PX",
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !0,
            createdOn: 0x1902590b652,
          },
          "a-71": {
            id: "a-71",
            title: "Evx Blog Tile [IN]",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-71-n",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".evx-para-m-15.right-arrow",
                        selectorGuids: [
                          "68c0779a-3590-c7b0-05fa-d780a7e59d65",
                          "5d85570b-4ac0-a016-5fcc-a49036f34d82",
                        ],
                      },
                      xValue: 0,
                      xUnit: "px",
                      yUnit: "PX",
                      zUnit: "PX",
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: "a-71-n-2",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 250,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".evx-para-m-15.right-arrow",
                        selectorGuids: [
                          "68c0779a-3590-c7b0-05fa-d780a7e59d65",
                          "5d85570b-4ac0-a016-5fcc-a49036f34d82",
                        ],
                      },
                      xValue: 4,
                      xUnit: "px",
                      yUnit: "PX",
                      zUnit: "PX",
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !0,
            createdOn: 0x1903130f0dd,
          },
          "a-72": {
            id: "a-72",
            title: "Evx Blog Tile [OUT]",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-72-n",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "ease",
                      duration: 200,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".evx-para-m-15.right-arrow",
                        selectorGuids: [
                          "68c0779a-3590-c7b0-05fa-d780a7e59d65",
                          "5d85570b-4ac0-a016-5fcc-a49036f34d82",
                        ],
                      },
                      xValue: 0,
                      xUnit: "px",
                      yUnit: "PX",
                      zUnit: "PX",
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !1,
            createdOn: 0x1903133d787,
          },
          "a-79": {
            id: "a-79",
            title: "Evx Category [IN]",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-79-n",
                    actionTypeId: "STYLE_TEXT_COLOR",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".evx-para-m",
                        selectorGuids: ["0da8878c-8631-d00e-d26f-75f39f13068f"],
                      },
                      globalSwatchId: "--evx-black",
                      rValue: 27,
                      bValue: 45,
                      gValue: 23,
                      aValue: 1,
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: "a-79-n-2",
                    actionTypeId: "STYLE_TEXT_COLOR",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 300,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".evx-para-m",
                        selectorGuids: ["0da8878c-8631-d00e-d26f-75f39f13068f"],
                      },
                      globalSwatchId: "--evx-purple",
                      rValue: 102,
                      bValue: 202,
                      gValue: 0,
                      aValue: 1,
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !0,
            createdOn: 0x19073ee3017,
          },
          "a-80": {
            id: "a-80",
            title: "Evx Category [OUT]",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-80-n",
                    actionTypeId: "STYLE_TEXT_COLOR",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 200,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".evx-para-m",
                        selectorGuids: ["0da8878c-8631-d00e-d26f-75f39f13068f"],
                      },
                      globalSwatchId: "--evx-black",
                      rValue: 27,
                      bValue: 45,
                      gValue: 23,
                      aValue: 1,
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !1,
            createdOn: 0x19073ef40c7,
          },
          "a-77": {
            id: "a-77",
            title: "Evx Category [OPEN]",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-77-n",
                    actionTypeId: "STYLE_SIZE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 0,
                      target: {
                        useEventTarget: "SIBLINGS",
                        selector: ".evx-single-category-bottom",
                        selectorGuids: ["d9c439fd-af23-fd3b-68e6-7ed7f1aedd21"],
                      },
                      heightValue: 0,
                      widthUnit: "PX",
                      heightUnit: "px",
                      locked: !1,
                    },
                  },
                  {
                    id: "a-77-n-3",
                    actionTypeId: "TRANSFORM_ROTATE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".evx-category-open",
                        selectorGuids: ["2c298f42-0fad-1ab3-ba98-16deb86b576c"],
                      },
                      zValue: 0,
                      xUnit: "DEG",
                      yUnit: "DEG",
                      zUnit: "deg",
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: "a-77-n-2",
                    actionTypeId: "STYLE_SIZE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 300,
                      target: {
                        useEventTarget: "SIBLINGS",
                        selector: ".evx-single-category-bottom",
                        selectorGuids: ["d9c439fd-af23-fd3b-68e6-7ed7f1aedd21"],
                      },
                      widthUnit: "PX",
                      heightUnit: "AUTO",
                      locked: !1,
                    },
                  },
                  {
                    id: "a-77-n-4",
                    actionTypeId: "TRANSFORM_ROTATE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 200,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".evx-category-open",
                        selectorGuids: ["2c298f42-0fad-1ab3-ba98-16deb86b576c"],
                      },
                      zValue: 90,
                      xUnit: "DEG",
                      yUnit: "DEG",
                      zUnit: "deg",
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !0,
            createdOn: 0x19073e5f645,
          },
          "a-78": {
            id: "a-78",
            title: "Evx Category [CLOSE]",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-78-n",
                    actionTypeId: "STYLE_SIZE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 300,
                      target: {
                        useEventTarget: "SIBLINGS",
                        selector: ".evx-single-category-bottom",
                        selectorGuids: ["d9c439fd-af23-fd3b-68e6-7ed7f1aedd21"],
                      },
                      heightValue: 0,
                      widthUnit: "PX",
                      heightUnit: "px",
                      locked: !1,
                    },
                  },
                  {
                    id: "a-78-n-2",
                    actionTypeId: "TRANSFORM_ROTATE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 200,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".evx-category-open",
                        selectorGuids: ["2c298f42-0fad-1ab3-ba98-16deb86b576c"],
                      },
                      zValue: 0,
                      xUnit: "DEG",
                      yUnit: "DEG",
                      zUnit: "deg",
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !1,
            createdOn: 0x19073ebe1b5,
          },
          "a-81": {
            id: "a-81",
            title: "Evx Category [IN] 2",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-81-n",
                    actionTypeId: "STYLE_TEXT_COLOR",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".evx-para-m",
                        selectorGuids: ["0da8878c-8631-d00e-d26f-75f39f13068f"],
                      },
                      globalSwatchId: "--white",
                      rValue: 255,
                      bValue: 255,
                      gValue: 255,
                      aValue: 1,
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: "a-81-n-2",
                    actionTypeId: "STYLE_TEXT_COLOR",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 300,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".evx-para-m",
                        selectorGuids: ["0da8878c-8631-d00e-d26f-75f39f13068f"],
                      },
                      globalSwatchId: "--fown",
                      rValue: 245,
                      bValue: 130,
                      gValue: 190,
                      aValue: 1,
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !0,
            createdOn: 0x19073ee3017,
          },
          "a-82": {
            id: "a-82",
            title: "Evx Category [OUT] 2",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-82-n",
                    actionTypeId: "STYLE_TEXT_COLOR",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 200,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".evx-para-m",
                        selectorGuids: ["0da8878c-8631-d00e-d26f-75f39f13068f"],
                      },
                      globalSwatchId: "--white",
                      rValue: 255,
                      bValue: 255,
                      gValue: 255,
                      aValue: 1,
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !1,
            createdOn: 0x19073ef40c7,
          },
          "a-63": {
            id: "a-63",
            title: "Evx Mouse Juggle",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-63-n",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: !0,
                        id: "645b9f5631d2231fef16e98f|4e3991eb-dee4-5938-a7b2-aae605708b21",
                      },
                      yValue: 0,
                      xUnit: "PX",
                      yUnit: "px",
                      zUnit: "PX",
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: "a-63-n-2",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 600,
                      target: {
                        useEventTarget: !0,
                        id: "645b9f5631d2231fef16e98f|4e3991eb-dee4-5938-a7b2-aae605708b21",
                      },
                      yValue: 2,
                      xUnit: "PX",
                      yUnit: "px",
                      zUnit: "PX",
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: "a-63-n-3",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 600,
                      target: {
                        useEventTarget: !0,
                        id: "645b9f5631d2231fef16e98f|4e3991eb-dee4-5938-a7b2-aae605708b21",
                      },
                      yValue: 0,
                      xUnit: "PX",
                      yUnit: "px",
                      zUnit: "PX",
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !0,
            createdOn: 0x18fbf20367e,
          },
          "a-64": {
            id: "a-64",
            title: "Evx Pink Gradient Juggle",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-64-n",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: !0,
                        id: "645b9f5631d2231fef16e98f|2bbe8888-d381-e837-db3e-cd720dd7aa85",
                      },
                      xValue: 0,
                      xUnit: "vw",
                      yUnit: "PX",
                      zUnit: "PX",
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: "a-64-n-2",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 5e3,
                      target: {
                        useEventTarget: !0,
                        id: "645b9f5631d2231fef16e98f|2bbe8888-d381-e837-db3e-cd720dd7aa85",
                      },
                      xValue: 30,
                      xUnit: "vw",
                      yUnit: "PX",
                      zUnit: "PX",
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: "a-64-n-3",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 5e3,
                      target: {
                        useEventTarget: !0,
                        id: "645b9f5631d2231fef16e98f|2bbe8888-d381-e837-db3e-cd720dd7aa85",
                      },
                      xValue: 0,
                      xUnit: "vw",
                      yUnit: "PX",
                      zUnit: "PX",
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !0,
            createdOn: 0x18fbf6494de,
          },
          "a-83": {
            id: "a-83",
            title: "Hide popup on load 4",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-83-n",
                    actionTypeId: "GENERAL_DISPLAY",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 0,
                      target: {
                        id: "66b352f79a5cecb5ec23451f|4b46cfe0-e0a8-0268-a687-26afca0bd18b",
                      },
                      value: "none",
                    },
                  },
                  {
                    id: "a-83-n-2",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        id: "66b352f79a5cecb5ec23451f|4b46cfe0-e0a8-0268-a687-26afca0bd18b",
                      },
                      value: 0,
                      unit: "",
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !0,
            createdOn: 0x182ecccf4cf,
          },
          "a-84": {
            id: "a-84",
            title: "Evx Special Button Mouse In 2",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-84-n",
                    actionTypeId: "TRANSFORM_ROTATE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".evx-special-button-arrow",
                        selectorGuids: ["637da39c-7a3a-3d16-3fca-f1e8dfc0853c"],
                      },
                      zValue: 0,
                      xUnit: "DEG",
                      yUnit: "DEG",
                      zUnit: "deg",
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: "a-84-n-2",
                    actionTypeId: "TRANSFORM_ROTATE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 200,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".evx-special-button-arrow",
                        selectorGuids: ["637da39c-7a3a-3d16-3fca-f1e8dfc0853c"],
                      },
                      zValue: -45,
                      xUnit: "DEG",
                      yUnit: "DEG",
                      zUnit: "deg",
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !0,
            createdOn: 0x18f3e96d230,
          },
          "a-85": {
            id: "a-85",
            title: "Evx Special Button Mouse Out 2",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-85-n",
                    actionTypeId: "TRANSFORM_ROTATE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 200,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".evx-special-button-arrow",
                        selectorGuids: ["637da39c-7a3a-3d16-3fca-f1e8dfc0853c"],
                      },
                      zValue: 0,
                      xUnit: "DEG",
                      yUnit: "DEG",
                      zUnit: "deg",
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !1,
            createdOn: 0x18f3e97a75c,
          },
          "a-86": {
            id: "a-86",
            title: "Evx Main CTA Juggle 2",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-86-n",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        id: "636a4ed9d15e717c27995e29|2e84031c-d2ed-95bd-090d-9678b3d0b8fd",
                      },
                      xValue: 0,
                      xUnit: "vw",
                      yUnit: "PX",
                      zUnit: "PX",
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: "a-86-n-2",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "easeInOut",
                      duration: 8e3,
                      target: {
                        id: "636a4ed9d15e717c27995e29|2e84031c-d2ed-95bd-090d-9678b3d0b8fd",
                      },
                      xValue: -100,
                      xUnit: "vw",
                      yUnit: "PX",
                      zUnit: "PX",
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: "a-86-n-3",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "easeInOut",
                      duration: 8e3,
                      target: {
                        id: "636a4ed9d15e717c27995e29|2e84031c-d2ed-95bd-090d-9678b3d0b8fd",
                      },
                      xValue: 0,
                      xUnit: "vw",
                      yUnit: "PX",
                      zUnit: "PX",
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !0,
            createdOn: 0x18f3e9c4d36,
          },
          "a-87": {
            id: "a-87",
            title: "Evx Back Small Juggle 2",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-87-n",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 4e3,
                      target: {
                        id: "66ed35ba05aec7490fef2eca|de2fb261-f33c-e9a2-5767-86ae9e3dfa69",
                      },
                      xValue: 20,
                      xUnit: "vw",
                      yUnit: "PX",
                      zUnit: "PX",
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: "a-87-n-2",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 4e3,
                      target: {
                        id: "66ed35ba05aec7490fef2eca|de2fb261-f33c-e9a2-5767-86ae9e3dfa69",
                      },
                      xValue: 0,
                      xUnit: "vw",
                      yUnit: "PX",
                      zUnit: "PX",
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: "a-87-n-3",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 4e3,
                      target: {
                        id: "66ed35ba05aec7490fef2eca|de2fb261-f33c-e9a2-5767-86ae9e3dfa69",
                      },
                      xValue: 20,
                      xUnit: "vw",
                      yUnit: "PX",
                      zUnit: "PX",
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !0,
            createdOn: 0x1902590b652,
          },
          "a-90": {
            id: "a-90",
            title: "Hide popup on load 5",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-90-n",
                    actionTypeId: "GENERAL_DISPLAY",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 0,
                      target: {
                        id: "67926b7fe8f2b4d8a07e5820|4b46cfe0-e0a8-0268-a687-26afca0bd18b",
                      },
                      value: "none",
                    },
                  },
                  {
                    id: "a-90-n-2",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        id: "67926b7fe8f2b4d8a07e5820|4b46cfe0-e0a8-0268-a687-26afca0bd18b",
                      },
                      value: 0,
                      unit: "",
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !0,
            createdOn: 0x182ecccf4cf,
          },
          "a-92": {
            id: "a-92",
            title: "Mouse On Category",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-92-n",
                    actionTypeId: "TRANSFORM_ROTATE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".category-arrow",
                        selectorGuids: ["d57ef9d0-f409-08ba-b4fc-1a8b5e91ac42"],
                      },
                      zValue: 0,
                      xUnit: "DEG",
                      yUnit: "DEG",
                      zUnit: "deg",
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: "a-92-n-2",
                    actionTypeId: "TRANSFORM_ROTATE",
                    config: {
                      delay: 0,
                      easing: "ease",
                      duration: 300,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".category-arrow",
                        selectorGuids: ["d57ef9d0-f409-08ba-b4fc-1a8b5e91ac42"],
                      },
                      zValue: -45,
                      xUnit: "DEG",
                      yUnit: "DEG",
                      zUnit: "deg",
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !0,
            createdOn: 0x194b279a118,
          },
          "a-93": {
            id: "a-93",
            title: "Mouse Off Category",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-93-n",
                    actionTypeId: "TRANSFORM_ROTATE",
                    config: {
                      delay: 100,
                      easing: "",
                      duration: 200,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".category-arrow",
                        selectorGuids: ["d57ef9d0-f409-08ba-b4fc-1a8b5e91ac42"],
                      },
                      zValue: 0,
                      xUnit: "DEG",
                      yUnit: "DEG",
                      zUnit: "deg",
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !1,
            createdOn: 0x194b27bbfeb,
          },
          "a-94": {
            id: "a-94",
            title: "Reveal Agency Stat",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-94-n",
                    actionTypeId: "STYLE_SIZE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".agency-ranking-back",
                        selectorGuids: ["c01a0cde-8c62-4ce6-e662-5dd180a14312"],
                      },
                      widthValue: 0,
                      widthUnit: "px",
                      heightUnit: "PX",
                      locked: !1,
                    },
                  },
                  {
                    id: "a-94-n-3",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".agency-ranking-back",
                        selectorGuids: ["c01a0cde-8c62-4ce6-e662-5dd180a14312"],
                      },
                      value: 0,
                      unit: "",
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: "a-94-n-2",
                    actionTypeId: "STYLE_SIZE",
                    config: {
                      delay: 0,
                      easing: "ease",
                      duration: 1100,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".agency-ranking-back",
                        selectorGuids: ["c01a0cde-8c62-4ce6-e662-5dd180a14312"],
                      },
                      widthValue: 100,
                      widthUnit: "%",
                      heightUnit: "PX",
                      locked: !1,
                    },
                  },
                  {
                    id: "a-94-n-4",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 300,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".agency-ranking-back",
                        selectorGuids: ["c01a0cde-8c62-4ce6-e662-5dd180a14312"],
                      },
                      value: 1,
                      unit: "",
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !0,
            createdOn: 0x1953d0314b0,
          },
          "a-96": {
            id: "a-96",
            title: "Hide popup on load 6",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-96-n",
                    actionTypeId: "GENERAL_DISPLAY",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 0,
                      target: {
                        id: "67c9c7ff2922465adca3c4a6|4b46cfe0-e0a8-0268-a687-26afca0bd18b",
                      },
                      value: "none",
                    },
                  },
                  {
                    id: "a-96-n-2",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        id: "67c9c7ff2922465adca3c4a6|4b46cfe0-e0a8-0268-a687-26afca0bd18b",
                      },
                      value: 0,
                      unit: "",
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !0,
            createdOn: 0x182ecccf4cf,
          },
          "a-97": {
            id: "a-97",
            title: "Globe Up And Down",
            continuousParameterGroups: [
              {
                id: "a-97-p",
                type: "SCROLL_PROGRESS",
                parameterLabel: "Scroll",
                continuousActionGroups: [
                  {
                    keyframe: 0,
                    actionItems: [
                      {
                        id: "a-97-n",
                        actionTypeId: "TRANSFORM_MOVE",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            useEventTarget: !0,
                            id: "67bc5c9efe714f9fbe1bd752|12a391ff-93d4-8bc9-2272-5f5142b5a883",
                          },
                          yValue: 150,
                          xUnit: "PX",
                          yUnit: "px",
                          zUnit: "PX",
                        },
                      },
                    ],
                  },
                  {
                    keyframe: 100,
                    actionItems: [
                      {
                        id: "a-97-n-2",
                        actionTypeId: "TRANSFORM_MOVE",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            useEventTarget: !0,
                            id: "67bc5c9efe714f9fbe1bd752|12a391ff-93d4-8bc9-2272-5f5142b5a883",
                          },
                          yValue: -190,
                          xUnit: "PX",
                          yUnit: "px",
                          zUnit: "PX",
                        },
                      },
                    ],
                  },
                ],
              },
            ],
            createdOn: 0x195dc98ae65,
          },
          "a-67": {
            id: "a-67",
            title: "Evx Pink Gradient Juggle up and down",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-67-n",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: !0,
                        id: "636a4ed9d15e712818995e7c|fac98242-0f10-5802-280e-ba81ed77ebf6",
                      },
                      yValue: 0,
                      xUnit: "PX",
                      yUnit: "%",
                      zUnit: "PX",
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: "a-67-n-2",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "easeInOut",
                      duration: 6e3,
                      target: {
                        useEventTarget: !0,
                        id: "636a4ed9d15e712818995e7c|fac98242-0f10-5802-280e-ba81ed77ebf6",
                      },
                      yValue: -20,
                      xUnit: "PX",
                      yUnit: "%",
                      zUnit: "PX",
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: "a-67-n-3",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "easeInOut",
                      duration: 6e3,
                      target: {
                        useEventTarget: !0,
                        id: "636a4ed9d15e712818995e7c|fac98242-0f10-5802-280e-ba81ed77ebf6",
                      },
                      yValue: 0,
                      xUnit: "PX",
                      yUnit: "%",
                      zUnit: "PX",
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !0,
            createdOn: 0x18fc8f790cc,
          },
          "a-99": {
            id: "a-99",
            title: "Evx Pink Gradient Juggle 2",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-99-n",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: !0,
                        id: "6811e52eb2d08280bde9038b|2bbe8888-d381-e837-db3e-cd720dd7aa85",
                      },
                      xValue: 0,
                      xUnit: "vw",
                      yUnit: "PX",
                      zUnit: "PX",
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: "a-99-n-2",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 5e3,
                      target: {
                        useEventTarget: !0,
                        id: "6811e52eb2d08280bde9038b|2bbe8888-d381-e837-db3e-cd720dd7aa85",
                      },
                      xValue: 30,
                      xUnit: "vw",
                      yUnit: "PX",
                      zUnit: "PX",
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: "a-99-n-3",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 5e3,
                      target: {
                        useEventTarget: !0,
                        id: "6811e52eb2d08280bde9038b|2bbe8888-d381-e837-db3e-cd720dd7aa85",
                      },
                      xValue: 0,
                      xUnit: "vw",
                      yUnit: "PX",
                      zUnit: "PX",
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !0,
            createdOn: 0x18fbf6494de,
          },
          "a-103": {
            id: "a-103",
            title: "Evx Mouse Juggle 3",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-103-n",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".evx-mouse-scroll",
                        selectorGuids: ["b1d8ebd7-bd95-24b9-86bd-c578412a20f0"],
                      },
                      yValue: 0,
                      xUnit: "PX",
                      yUnit: "px",
                      zUnit: "PX",
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: "a-103-n-2",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 600,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".evx-mouse-scroll",
                        selectorGuids: ["b1d8ebd7-bd95-24b9-86bd-c578412a20f0"],
                      },
                      yValue: 2,
                      xUnit: "PX",
                      yUnit: "px",
                      zUnit: "PX",
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: "a-103-n-3",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 600,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".evx-mouse-scroll",
                        selectorGuids: ["b1d8ebd7-bd95-24b9-86bd-c578412a20f0"],
                      },
                      yValue: 0,
                      xUnit: "PX",
                      yUnit: "px",
                      zUnit: "PX",
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !0,
            createdOn: 0x18fbf20367e,
          },
          "a-104": {
            id: "a-104",
            title: "Evx Pink Gradient Juggle 5",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-104-n",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: !0,
                        id: "681dd0b4fa3b03f5c637f311|2bbe8888-d381-e837-db3e-cd720dd7aa85",
                      },
                      xValue: 0,
                      xUnit: "vw",
                      yUnit: "PX",
                      zUnit: "PX",
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: "a-104-n-2",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 5e3,
                      target: {
                        useEventTarget: !0,
                        id: "681dd0b4fa3b03f5c637f311|2bbe8888-d381-e837-db3e-cd720dd7aa85",
                      },
                      xValue: 30,
                      xUnit: "vw",
                      yUnit: "PX",
                      zUnit: "PX",
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: "a-104-n-3",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 5e3,
                      target: {
                        useEventTarget: !0,
                        id: "681dd0b4fa3b03f5c637f311|2bbe8888-d381-e837-db3e-cd720dd7aa85",
                      },
                      xValue: 0,
                      xUnit: "vw",
                      yUnit: "PX",
                      zUnit: "PX",
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !0,
            createdOn: 0x18fbf6494de,
          },
          "a-106": {
            id: "a-106",
            title: "Evx Mouse Juggle 4",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-106-n",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: !0,
                        id: "681dd0b4fa3b03f5c637f311|4e3991eb-dee4-5938-a7b2-aae605708b21",
                      },
                      yValue: 0,
                      xUnit: "PX",
                      yUnit: "px",
                      zUnit: "PX",
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: "a-106-n-2",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 600,
                      target: {
                        useEventTarget: !0,
                        id: "681dd0b4fa3b03f5c637f311|4e3991eb-dee4-5938-a7b2-aae605708b21",
                      },
                      yValue: 2,
                      xUnit: "PX",
                      yUnit: "px",
                      zUnit: "PX",
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: "a-106-n-3",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 600,
                      target: {
                        useEventTarget: !0,
                        id: "681dd0b4fa3b03f5c637f311|4e3991eb-dee4-5938-a7b2-aae605708b21",
                      },
                      yValue: 0,
                      xUnit: "PX",
                      yUnit: "px",
                      zUnit: "PX",
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !0,
            createdOn: 0x18fbf20367e,
          },
          "a-112": {
            id: "a-112",
            title: "FAQ Open Up",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-112-n",
                    actionTypeId: "STYLE_SIZE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: "SIBLINGS",
                        selector: ".faq-tile-bottom",
                        selectorGuids: ["a6f53873-d0df-0c05-4a3e-43edbf6e8427"],
                      },
                      heightValue: 0,
                      widthUnit: "PX",
                      heightUnit: "px",
                      locked: !1,
                    },
                  },
                  {
                    id: "a-112-n-3",
                    actionTypeId: "TRANSFORM_ROTATE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".faq-tile-icon",
                        selectorGuids: ["3187499e-8d22-c8cf-0faf-578329a86bdd"],
                      },
                      zValue: 0,
                      xUnit: "DEG",
                      yUnit: "DEG",
                      zUnit: "deg",
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: "a-112-n-2",
                    actionTypeId: "STYLE_SIZE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 200,
                      target: {
                        useEventTarget: "SIBLINGS",
                        selector: ".faq-tile-bottom",
                        selectorGuids: ["a6f53873-d0df-0c05-4a3e-43edbf6e8427"],
                      },
                      widthUnit: "PX",
                      heightUnit: "AUTO",
                      locked: !1,
                    },
                  },
                  {
                    id: "a-112-n-4",
                    actionTypeId: "TRANSFORM_ROTATE",
                    config: {
                      delay: 0,
                      easing: "easeInOut",
                      duration: 200,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".faq-tile-icon",
                        selectorGuids: ["3187499e-8d22-c8cf-0faf-578329a86bdd"],
                      },
                      zValue: 180,
                      xUnit: "DEG",
                      yUnit: "DEG",
                      zUnit: "deg",
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !0,
            createdOn: 0x196f769793e,
          },
          "a-113": {
            id: "a-113",
            title: "FAQ Close",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-113-n",
                    actionTypeId: "STYLE_SIZE",
                    config: {
                      delay: 150,
                      easing: "easeIn",
                      duration: 200,
                      target: {
                        useEventTarget: "SIBLINGS",
                        selector: ".faq-tile-bottom",
                        selectorGuids: ["a6f53873-d0df-0c05-4a3e-43edbf6e8427"],
                      },
                      heightValue: 0,
                      widthUnit: "PX",
                      heightUnit: "px",
                      locked: !1,
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: "a-113-n-2",
                    actionTypeId: "TRANSFORM_ROTATE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 200,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".faq-tile-icon",
                        selectorGuids: ["3187499e-8d22-c8cf-0faf-578329a86bdd"],
                      },
                      zValue: 0,
                      xUnit: "DEG",
                      yUnit: "DEG",
                      zUnit: "deg",
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !1,
            createdOn: 0x196f76fb6c4,
          },
          "a-115": {
            id: "a-115",
            title: "FAQ Open Up 2",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-115-n",
                    actionTypeId: "STYLE_SIZE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: "SIBLINGS",
                        selector: ".faq-tile-bottom",
                        selectorGuids: ["a6f53873-d0df-0c05-4a3e-43edbf6e8427"],
                      },
                      heightValue: 0,
                      widthUnit: "PX",
                      heightUnit: "px",
                      locked: !1,
                    },
                  },
                  {
                    id: "a-115-n-2",
                    actionTypeId: "TRANSFORM_ROTATE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".faq-tile-icon",
                        selectorGuids: ["3187499e-8d22-c8cf-0faf-578329a86bdd"],
                      },
                      zValue: 0,
                      xUnit: "DEG",
                      yUnit: "DEG",
                      zUnit: "deg",
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: "a-115-n-3",
                    actionTypeId: "STYLE_SIZE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 200,
                      target: {
                        useEventTarget: "SIBLINGS",
                        selector: ".faq-tile-bottom",
                        selectorGuids: ["a6f53873-d0df-0c05-4a3e-43edbf6e8427"],
                      },
                      widthUnit: "PX",
                      heightUnit: "AUTO",
                      locked: !1,
                    },
                  },
                  {
                    id: "a-115-n-4",
                    actionTypeId: "TRANSFORM_ROTATE",
                    config: {
                      delay: 0,
                      easing: "easeInOut",
                      duration: 200,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".faq-tile-icon",
                        selectorGuids: ["3187499e-8d22-c8cf-0faf-578329a86bdd"],
                      },
                      zValue: 180,
                      xUnit: "DEG",
                      yUnit: "DEG",
                      zUnit: "deg",
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !0,
            createdOn: 0x196f769793e,
          },
          "a-116": {
            id: "a-116",
            title: "FAQ Close 2",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-116-n",
                    actionTypeId: "STYLE_SIZE",
                    config: {
                      delay: 150,
                      easing: "easeIn",
                      duration: 200,
                      target: {
                        useEventTarget: "SIBLINGS",
                        selector: ".faq-tile-bottom",
                        selectorGuids: ["a6f53873-d0df-0c05-4a3e-43edbf6e8427"],
                      },
                      heightValue: 0,
                      widthUnit: "PX",
                      heightUnit: "px",
                      locked: !1,
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: "a-116-n-2",
                    actionTypeId: "TRANSFORM_ROTATE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 200,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".faq-tile-icon",
                        selectorGuids: ["3187499e-8d22-c8cf-0faf-578329a86bdd"],
                      },
                      zValue: 0,
                      xUnit: "DEG",
                      yUnit: "DEG",
                      zUnit: "deg",
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !1,
            createdOn: 0x196f76fb6c4,
          },
          "a-117": {
            id: "a-117",
            title: "Follow Mouse Blur",
            continuousParameterGroups: [
              {
                id: "a-117-p",
                type: "MOUSE_X",
                parameterLabel: "Mouse X",
                continuousActionGroups: [
                  {
                    keyframe: 0,
                    actionItems: [
                      {
                        id: "a-117-n",
                        actionTypeId: "TRANSFORM_MOVE",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {},
                          xValue: -3,
                          xUnit: "vw",
                          yUnit: "PX",
                          zUnit: "PX",
                        },
                      },
                    ],
                  },
                  {
                    keyframe: 100,
                    actionItems: [
                      {
                        id: "a-117-n-2",
                        actionTypeId: "TRANSFORM_MOVE",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {},
                          xValue: 103,
                          xUnit: "vw",
                          yUnit: "PX",
                          zUnit: "PX",
                        },
                      },
                    ],
                  },
                ],
              },
              {
                id: "a-117-p-2",
                type: "MOUSE_Y",
                parameterLabel: "Mouse Y",
                continuousActionGroups: [
                  {
                    keyframe: 0,
                    actionItems: [
                      {
                        id: "a-117-n-3",
                        actionTypeId: "TRANSFORM_MOVE",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {},
                          yValue: -3,
                          xUnit: "PX",
                          yUnit: "vh",
                          zUnit: "PX",
                        },
                      },
                    ],
                  },
                  {
                    keyframe: 100,
                    actionItems: [
                      {
                        id: "a-117-n-4",
                        actionTypeId: "TRANSFORM_MOVE",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {},
                          yValue: 103,
                          xUnit: "PX",
                          yUnit: "vh",
                          zUnit: "PX",
                        },
                      },
                    ],
                  },
                ],
              },
            ],
            createdOn: 0x1973fc17757,
          },
          "a-118": {
            id: "a-118",
            title: "Hide popup on load 7",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-118-n",
                    actionTypeId: "GENERAL_DISPLAY",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 0,
                      target: {
                        id: "68717c269913d39eb6cea4a4|4b46cfe0-e0a8-0268-a687-26afca0bd18b",
                      },
                      value: "none",
                    },
                  },
                  {
                    id: "a-118-n-2",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        id: "68717c269913d39eb6cea4a4|4b46cfe0-e0a8-0268-a687-26afca0bd18b",
                      },
                      value: 0,
                      unit: "",
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !0,
            createdOn: 0x182ecccf4cf,
          },
          "a-120": {
            id: "a-120",
            title: "Hide popup on load 8",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-120-n",
                    actionTypeId: "GENERAL_DISPLAY",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 0,
                      target: {
                        id: "68b6fb47a34163ca73f2564c|4b46cfe0-e0a8-0268-a687-26afca0bd18b",
                      },
                      value: "none",
                    },
                  },
                  {
                    id: "a-120-n-2",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        id: "68b6fb47a34163ca73f2564c|4b46cfe0-e0a8-0268-a687-26afca0bd18b",
                      },
                      value: 0,
                      unit: "",
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !0,
            createdOn: 0x182ecccf4cf,
          },
          "a-123": {
            id: "a-123",
            title: "Hide popup on load 9",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-123-n",
                    actionTypeId: "GENERAL_DISPLAY",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 0,
                      target: {
                        id: "68b97795a8b62613e2615633|4b46cfe0-e0a8-0268-a687-26afca0bd18b",
                      },
                      value: "none",
                    },
                  },
                  {
                    id: "a-123-n-2",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        id: "68b97795a8b62613e2615633|4b46cfe0-e0a8-0268-a687-26afca0bd18b",
                      },
                      value: 0,
                      unit: "",
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !0,
            createdOn: 0x182ecccf4cf,
          },
          "a-121": {
            id: "a-121",
            title: "Tip Mouse In",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-121-n",
                    actionTypeId: "GENERAL_DISPLAY",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 0,
                      target: {
                        useEventTarget: "SIBLINGS",
                        selector: ".fee-t-holder",
                        selectorGuids: ["4e9240dc-7e2b-00d5-4ec2-9782c844951d"],
                      },
                      value: "block",
                    },
                  },
                  {
                    id: "a-121-n-2",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 0,
                      target: {
                        useEventTarget: "SIBLINGS",
                        selector: ".fee-t-holder",
                        selectorGuids: ["4e9240dc-7e2b-00d5-4ec2-9782c844951d"],
                      },
                      value: 0,
                      unit: "",
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: "a-121-n-3",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: "SIBLINGS",
                        selector: ".fee-t-holder",
                        selectorGuids: ["4e9240dc-7e2b-00d5-4ec2-9782c844951d"],
                      },
                      value: 1,
                      unit: "",
                    },
                  },
                  {
                    id: "a-121-n-4",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: "SIBLINGS",
                        selector: ".fee-t-holder",
                        selectorGuids: ["4e9240dc-7e2b-00d5-4ec2-9782c844951d"],
                      },
                      yValue: 4,
                      xUnit: "PX",
                      yUnit: "px",
                      zUnit: "PX",
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !1,
            createdOn: 0x1990f32d1b6,
          },
          "a-122": {
            id: "a-122",
            title: "Tip Mouse Out",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-122-n-2",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 200,
                      easing: "",
                      duration: 200,
                      target: {
                        useEventTarget: "SIBLINGS",
                        selector: ".fee-t-holder",
                        selectorGuids: ["4e9240dc-7e2b-00d5-4ec2-9782c844951d"],
                      },
                      yValue: 0,
                      xUnit: "PX",
                      yUnit: "px",
                      zUnit: "PX",
                    },
                  },
                  {
                    id: "a-122-n",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 200,
                      easing: "",
                      duration: 200,
                      target: {
                        useEventTarget: "SIBLINGS",
                        selector: ".fee-t-holder",
                        selectorGuids: ["4e9240dc-7e2b-00d5-4ec2-9782c844951d"],
                      },
                      value: 0,
                      unit: "",
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: "a-122-n-3",
                    actionTypeId: "GENERAL_DISPLAY",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 0,
                      target: {
                        useEventTarget: "SIBLINGS",
                        selector: ".fee-t-holder",
                        selectorGuids: ["4e9240dc-7e2b-00d5-4ec2-9782c844951d"],
                      },
                      value: "none",
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !1,
            createdOn: 0x1990f3438d1,
          },
          "a-126": {
            id: "a-126",
            title: "Evx Pink Gradient Juggle 12",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-126-n",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: !0,
                        id: "68dfc455260def2acbfd286e|2bbe8888-d381-e837-db3e-cd720dd7aa85",
                      },
                      xValue: 0,
                      xUnit: "vw",
                      yUnit: "PX",
                      zUnit: "PX",
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: "a-126-n-2",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 5e3,
                      target: {
                        useEventTarget: !0,
                        id: "68dfc455260def2acbfd286e|2bbe8888-d381-e837-db3e-cd720dd7aa85",
                      },
                      xValue: 30,
                      xUnit: "vw",
                      yUnit: "PX",
                      zUnit: "PX",
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: "a-126-n-3",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 5e3,
                      target: {
                        useEventTarget: !0,
                        id: "68dfc455260def2acbfd286e|2bbe8888-d381-e837-db3e-cd720dd7aa85",
                      },
                      xValue: 0,
                      xUnit: "vw",
                      yUnit: "PX",
                      zUnit: "PX",
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !0,
            createdOn: 0x18fbf6494de,
          },
          "a-129": {
            id: "a-129",
            title: "Test back 1",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-129-n",
                    actionTypeId: "TRANSFORM_ROTATE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 1e4,
                      target: {
                        id: "697346b226a6f897ec5cb283|1307bdbf-3f61-5a64-ba1b-27bdb8229784",
                      },
                      zValue: 0,
                      xUnit: "DEG",
                      yUnit: "DEG",
                      zUnit: "deg",
                    },
                  },
                  {
                    id: "a-129-n-2",
                    actionTypeId: "TRANSFORM_ROTATE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 1e4,
                      target: {
                        id: "697346b226a6f897ec5cb283|111ad4a0-f8ff-de46-98a7-39b20fd590ac",
                      },
                      zValue: 0,
                      xUnit: "DEG",
                      yUnit: "DEG",
                      zUnit: "deg",
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: "a-129-n-3",
                    actionTypeId: "TRANSFORM_ROTATE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 13e3,
                      target: {
                        id: "697346b226a6f897ec5cb283|111ad4a0-f8ff-de46-98a7-39b20fd590ac",
                      },
                      zValue: 360,
                      xUnit: "DEG",
                      yUnit: "DEG",
                      zUnit: "deg",
                    },
                  },
                  {
                    id: "a-129-n-4",
                    actionTypeId: "TRANSFORM_ROTATE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 13e3,
                      target: {
                        id: "697346b226a6f897ec5cb283|1307bdbf-3f61-5a64-ba1b-27bdb8229784",
                      },
                      zValue: 360,
                      xUnit: "DEG",
                      yUnit: "DEG",
                      zUnit: "deg",
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !0,
            createdOn: 0x19bea698dbd,
          },
          "a-130": {
            id: "a-130",
            title: "Hide popup on load 10",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-130-n",
                    actionTypeId: "GENERAL_DISPLAY",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 0,
                      target: {
                        id: "69772aa25826b3a06e8183f2|4b46cfe0-e0a8-0268-a687-26afca0bd18b",
                      },
                      value: "none",
                    },
                  },
                  {
                    id: "a-130-n-2",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        id: "69772aa25826b3a06e8183f2|4b46cfe0-e0a8-0268-a687-26afca0bd18b",
                      },
                      value: 0,
                      unit: "",
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !0,
            createdOn: 0x182ecccf4cf,
          },
          "a-131": {
            id: "a-131",
            title: "Evx Blog Tile [IN] 2",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-131-n",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".evx-para-m-15.right-arrow",
                        selectorGuids: [
                          "68c0779a-3590-c7b0-05fa-d780a7e59d65",
                          "5d85570b-4ac0-a016-5fcc-a49036f34d82",
                        ],
                      },
                      xValue: 0,
                      xUnit: "px",
                      yUnit: "PX",
                      zUnit: "PX",
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: "a-131-n-2",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 250,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".evx-para-m-15.right-arrow",
                        selectorGuids: [
                          "68c0779a-3590-c7b0-05fa-d780a7e59d65",
                          "5d85570b-4ac0-a016-5fcc-a49036f34d82",
                        ],
                      },
                      xValue: 4,
                      xUnit: "px",
                      yUnit: "PX",
                      zUnit: "PX",
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !0,
            createdOn: 0x1903130f0dd,
          },
          "a-132": {
            id: "a-132",
            title: "Evx Blog Tile [OUT] 2",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-132-n",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "ease",
                      duration: 200,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".evx-para-m-15.right-arrow",
                        selectorGuids: [
                          "68c0779a-3590-c7b0-05fa-d780a7e59d65",
                          "5d85570b-4ac0-a016-5fcc-a49036f34d82",
                        ],
                      },
                      xValue: 0,
                      xUnit: "px",
                      yUnit: "PX",
                      zUnit: "PX",
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !1,
            createdOn: 0x1903133d787,
          },
          "a-133": {
            id: "a-133",
            title: "Hide popup on load 11",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-133-n",
                    actionTypeId: "GENERAL_DISPLAY",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 0,
                      target: {
                        id: "698c79e27f84f8b56af3b2f8|4b46cfe0-e0a8-0268-a687-26afca0bd18b",
                      },
                      value: "none",
                    },
                  },
                  {
                    id: "a-133-n-2",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        id: "698c79e27f84f8b56af3b2f8|4b46cfe0-e0a8-0268-a687-26afca0bd18b",
                      },
                      value: 0,
                      unit: "",
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !0,
            createdOn: 0x182ecccf4cf,
          },
          "a-134": {
            id: "a-134",
            title: "Blog Contents Open",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-134-n",
                    actionTypeId: "STYLE_SIZE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      locked: !1,
                      target: {
                        useEventTarget: "SIBLINGS",
                        selector: ".contents-links-flex",
                        selectorGuids: ["adaaa66b-698b-866a-fd5c-318eed270898"],
                      },
                      heightValue: 0,
                      widthUnit: "PX",
                      heightUnit: "px",
                    },
                  },
                  {
                    id: "a-134-n-3",
                    actionTypeId: "TRANSFORM_ROTATE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".icon-contents",
                        selectorGuids: ["1dcec5da-971a-da59-db1d-e781de03c62e"],
                      },
                      zValue: 0,
                      xUnit: "DEG",
                      yUnit: "DEG",
                      zUnit: "deg",
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: "a-134-n-2",
                    actionTypeId: "STYLE_SIZE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 300,
                      locked: !1,
                      target: {
                        useEventTarget: "SIBLINGS",
                        selector: ".contents-links-flex",
                        selectorGuids: ["adaaa66b-698b-866a-fd5c-318eed270898"],
                      },
                      widthUnit: "PX",
                      heightUnit: "AUTO",
                    },
                  },
                  {
                    id: "a-134-n-4",
                    actionTypeId: "TRANSFORM_ROTATE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 200,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".icon-contents",
                        selectorGuids: ["1dcec5da-971a-da59-db1d-e781de03c62e"],
                      },
                      zValue: 180,
                      xUnit: "DEG",
                      yUnit: "DEG",
                      zUnit: "deg",
                    },
                  },
                ],
              },
            ],
            createdOn: 0x19c4d9f8cf6,
            useFirstGroupAsInitialState: !0,
          },
          "a-135": {
            id: "a-135",
            title: "Blog Content Close",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-135-n",
                    actionTypeId: "STYLE_SIZE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 200,
                      locked: !1,
                      target: {
                        useEventTarget: "SIBLINGS",
                        selector: ".contents-links-flex",
                        selectorGuids: ["adaaa66b-698b-866a-fd5c-318eed270898"],
                      },
                      heightValue: 0,
                      widthUnit: "PX",
                      heightUnit: "px",
                    },
                  },
                  {
                    id: "a-135-n-2",
                    actionTypeId: "TRANSFORM_ROTATE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 200,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".icon-contents",
                        selectorGuids: ["1dcec5da-971a-da59-db1d-e781de03c62e"],
                      },
                      zValue: 0,
                      xUnit: "DEG",
                      yUnit: "DEG",
                      zUnit: "deg",
                    },
                  },
                ],
              },
            ],
            createdOn: 0x19c4da0c48f,
            useFirstGroupAsInitialState: !1,
          },
        },
        site: {
          mediaQueries: [
            { key: "main", min: 992, max: 1e4 },
            { key: "medium", min: 768, max: 991 },
            { key: "small", min: 480, max: 767 },
            { key: "tiny", min: 0, max: 479 },
          ],
        },
      });
    },
  },
]);
