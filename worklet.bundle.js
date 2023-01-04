(() => {
  // node_modules/@georgedoescode/generative-utils/dist/index.js
  var Ji = Object.create;
  var on = Object.defineProperty;
  var to = Object.getOwnPropertyDescriptor;
  var eo = Object.getOwnPropertyNames;
  var no = Object.getPrototypeOf;
  var ro = Object.prototype.hasOwnProperty;
  var io = (t2) => on(t2, "__esModule", { value: true });
  var U = (t2, e) => () => (e || t2((e = { exports: {} }).exports, e), e.exports);
  var oo = (t2, e, n) => {
    if (e && typeof e == "object" || typeof e == "function")
      for (let r of eo(e))
        !ro.call(t2, r) && r !== "default" && on(t2, r, { get: () => e[r], enumerable: !(n = to(e, r)) || n.enumerable });
    return t2;
  };
  var sn = (t2) => oo(io(on(t2 != null ? Ji(no(t2)) : {}, "default", t2 && t2.__esModule && "default" in t2 ? { get: () => t2.default, enumerable: true } : { value: t2, enumerable: true })), t2);
  var Rn = U((zn, an) => {
    (function(t2, e, n) {
      function r(o) {
        var l = this, f = a();
        l.next = function() {
          var u = 2091639 * l.s0 + l.c * 23283064365386963e-26;
          return l.s0 = l.s1, l.s1 = l.s2, l.s2 = u - (l.c = u | 0);
        }, l.c = 1, l.s0 = f(" "), l.s1 = f(" "), l.s2 = f(" "), l.s0 -= f(o), l.s0 < 0 && (l.s0 += 1), l.s1 -= f(o), l.s1 < 0 && (l.s1 += 1), l.s2 -= f(o), l.s2 < 0 && (l.s2 += 1), f = null;
      }
      function i(o, l) {
        return l.c = o.c, l.s0 = o.s0, l.s1 = o.s1, l.s2 = o.s2, l;
      }
      function s(o, l) {
        var f = new r(o), u = l && l.state, c = f.next;
        return c.int32 = function() {
          return f.next() * 4294967296 | 0;
        }, c.double = function() {
          return c() + (c() * 2097152 | 0) * 11102230246251565e-32;
        }, c.quick = c, u && (typeof u == "object" && i(u, f), c.state = function() {
          return i(f, {});
        }), c;
      }
      function a() {
        var o = 4022871197, l = function(f) {
          f = String(f);
          for (var u = 0; u < f.length; u++) {
            o += f.charCodeAt(u);
            var c = 0.02519603282416938 * o;
            o = c >>> 0, c -= o, c *= o, o = c >>> 0, c -= o, o += c * 4294967296;
          }
          return (o >>> 0) * 23283064365386963e-26;
        };
        return l;
      }
      e && e.exports ? e.exports = s : n && n.amd ? n(function() {
        return s;
      }) : this.alea = s;
    })(zn, typeof an == "object" && an, typeof define == "function" && define);
  });
  var Fn = U((Bn, ln) => {
    (function(t2, e, n) {
      function r(a) {
        var o = this, l = "";
        o.x = 0, o.y = 0, o.z = 0, o.w = 0, o.next = function() {
          var u = o.x ^ o.x << 11;
          return o.x = o.y, o.y = o.z, o.z = o.w, o.w ^= o.w >>> 19 ^ u ^ u >>> 8;
        }, a === (a | 0) ? o.x = a : l += a;
        for (var f = 0; f < l.length + 64; f++)
          o.x ^= l.charCodeAt(f) | 0, o.next();
      }
      function i(a, o) {
        return o.x = a.x, o.y = a.y, o.z = a.z, o.w = a.w, o;
      }
      function s(a, o) {
        var l = new r(a), f = o && o.state, u = function() {
          return (l.next() >>> 0) / 4294967296;
        };
        return u.double = function() {
          do
            var c = l.next() >>> 11, h = (l.next() >>> 0) / 4294967296, p = (c + h) / (1 << 21);
          while (p === 0);
          return p;
        }, u.int32 = l.next, u.quick = u, f && (typeof f == "object" && i(f, l), u.state = function() {
          return i(l, {});
        }), u;
      }
      e && e.exports ? e.exports = s : n && n.amd ? n(function() {
        return s;
      }) : this.xor128 = s;
    })(Bn, typeof ln == "object" && ln, typeof define == "function" && define);
  });
  var Vn = U((Ln, un) => {
    (function(t2, e, n) {
      function r(a) {
        var o = this, l = "";
        o.next = function() {
          var u = o.x ^ o.x >>> 2;
          return o.x = o.y, o.y = o.z, o.z = o.w, o.w = o.v, (o.d = o.d + 362437 | 0) + (o.v = o.v ^ o.v << 4 ^ (u ^ u << 1)) | 0;
        }, o.x = 0, o.y = 0, o.z = 0, o.w = 0, o.v = 0, a === (a | 0) ? o.x = a : l += a;
        for (var f = 0; f < l.length + 64; f++)
          o.x ^= l.charCodeAt(f) | 0, f == l.length && (o.d = o.x << 10 ^ o.x >>> 4), o.next();
      }
      function i(a, o) {
        return o.x = a.x, o.y = a.y, o.z = a.z, o.w = a.w, o.v = a.v, o.d = a.d, o;
      }
      function s(a, o) {
        var l = new r(a), f = o && o.state, u = function() {
          return (l.next() >>> 0) / 4294967296;
        };
        return u.double = function() {
          do
            var c = l.next() >>> 11, h = (l.next() >>> 0) / 4294967296, p = (c + h) / (1 << 21);
          while (p === 0);
          return p;
        }, u.int32 = l.next, u.quick = u, f && (typeof f == "object" && i(f, l), u.state = function() {
          return i(l, {});
        }), u;
      }
      e && e.exports ? e.exports = s : n && n.amd ? n(function() {
        return s;
      }) : this.xorwow = s;
    })(Ln, typeof un == "object" && un, typeof define == "function" && define);
  });
  var Hn = U((Yn, cn) => {
    (function(t2, e, n) {
      function r(a) {
        var o = this;
        o.next = function() {
          var f = o.x, u = o.i, c, h, p;
          return c = f[u], c ^= c >>> 7, h = c ^ c << 24, c = f[u + 1 & 7], h ^= c ^ c >>> 10, c = f[u + 3 & 7], h ^= c ^ c >>> 3, c = f[u + 4 & 7], h ^= c ^ c << 7, c = f[u + 7 & 7], c = c ^ c << 13, h ^= c ^ c << 9, f[u] = h, o.i = u + 1 & 7, h;
        };
        function l(f, u) {
          var c, h, p = [];
          if (u === (u | 0))
            h = p[0] = u;
          else
            for (u = "" + u, c = 0; c < u.length; ++c)
              p[c & 7] = p[c & 7] << 15 ^ u.charCodeAt(c) + p[c + 1 & 7] << 13;
          for (; p.length < 8; )
            p.push(0);
          for (c = 0; c < 8 && p[c] === 0; ++c)
            ;
          for (c == 8 ? h = p[7] = -1 : h = p[c], f.x = p, f.i = 0, c = 256; c > 0; --c)
            f.next();
        }
        l(o, a);
      }
      function i(a, o) {
        return o.x = a.x.slice(), o.i = a.i, o;
      }
      function s(a, o) {
        a == null && (a = +new Date());
        var l = new r(a), f = o && o.state, u = function() {
          return (l.next() >>> 0) / 4294967296;
        };
        return u.double = function() {
          do
            var c = l.next() >>> 11, h = (l.next() >>> 0) / 4294967296, p = (c + h) / (1 << 21);
          while (p === 0);
          return p;
        }, u.int32 = l.next, u.quick = u, f && (f.x && i(f, l), u.state = function() {
          return i(l, {});
        }), u;
      }
      e && e.exports ? e.exports = s : n && n.amd ? n(function() {
        return s;
      }) : this.xorshift7 = s;
    })(Yn, typeof cn == "object" && cn, typeof define == "function" && define);
  });
  var $n = U((Gn, fn) => {
    (function(t2, e, n) {
      function r(a) {
        var o = this;
        o.next = function() {
          var f = o.w, u = o.X, c = o.i, h, p;
          return o.w = f = f + 1640531527 | 0, p = u[c + 34 & 127], h = u[c = c + 1 & 127], p ^= p << 13, h ^= h << 17, p ^= p >>> 15, h ^= h >>> 12, p = u[c] = p ^ h, o.i = c, p + (f ^ f >>> 16) | 0;
        };
        function l(f, u) {
          var c, h, p, d, m, x = [], _ = 128;
          for (u === (u | 0) ? (h = u, u = null) : (u = u + "\0", h = 0, _ = Math.max(_, u.length)), p = 0, d = -32; d < _; ++d)
            u && (h ^= u.charCodeAt((d + 32) % u.length)), d === 0 && (m = h), h ^= h << 10, h ^= h >>> 15, h ^= h << 4, h ^= h >>> 13, d >= 0 && (m = m + 1640531527 | 0, c = x[d & 127] ^= h + m, p = c == 0 ? p + 1 : 0);
          for (p >= 128 && (x[(u && u.length || 0) & 127] = -1), p = 127, d = 4 * 128; d > 0; --d)
            h = x[p + 34 & 127], c = x[p = p + 1 & 127], h ^= h << 13, c ^= c << 17, h ^= h >>> 15, c ^= c >>> 12, x[p] = h ^ c;
          f.w = m, f.X = x, f.i = p;
        }
        l(o, a);
      }
      function i(a, o) {
        return o.i = a.i, o.w = a.w, o.X = a.X.slice(), o;
      }
      function s(a, o) {
        a == null && (a = +new Date());
        var l = new r(a), f = o && o.state, u = function() {
          return (l.next() >>> 0) / 4294967296;
        };
        return u.double = function() {
          do
            var c = l.next() >>> 11, h = (l.next() >>> 0) / 4294967296, p = (c + h) / (1 << 21);
          while (p === 0);
          return p;
        }, u.int32 = l.next, u.quick = u, f && (f.X && i(f, l), u.state = function() {
          return i(l, {});
        }), u;
      }
      e && e.exports ? e.exports = s : n && n.amd ? n(function() {
        return s;
      }) : this.xor4096 = s;
    })(Gn, typeof fn == "object" && fn, typeof define == "function" && define);
  });
  var Un = U((Qn, hn) => {
    (function(t2, e, n) {
      function r(a) {
        var o = this, l = "";
        o.next = function() {
          var u = o.b, c = o.c, h = o.d, p = o.a;
          return u = u << 25 ^ u >>> 7 ^ c, c = c - h | 0, h = h << 24 ^ h >>> 8 ^ p, p = p - u | 0, o.b = u = u << 20 ^ u >>> 12 ^ c, o.c = c = c - h | 0, o.d = h << 16 ^ c >>> 16 ^ p, o.a = p - u | 0;
        }, o.a = 0, o.b = 0, o.c = 2654435769 | 0, o.d = 1367130551, a === Math.floor(a) ? (o.a = a / 4294967296 | 0, o.b = a | 0) : l += a;
        for (var f = 0; f < l.length + 20; f++)
          o.b ^= l.charCodeAt(f) | 0, o.next();
      }
      function i(a, o) {
        return o.a = a.a, o.b = a.b, o.c = a.c, o.d = a.d, o;
      }
      function s(a, o) {
        var l = new r(a), f = o && o.state, u = function() {
          return (l.next() >>> 0) / 4294967296;
        };
        return u.double = function() {
          do
            var c = l.next() >>> 11, h = (l.next() >>> 0) / 4294967296, p = (c + h) / (1 << 21);
          while (p === 0);
          return p;
        }, u.int32 = l.next, u.quick = u, f && (typeof f == "object" && i(f, l), u.state = function() {
          return i(l, {});
        }), u;
      }
      e && e.exports ? e.exports = s : n && n.amd ? n(function() {
        return s;
      }) : this.tychei = s;
    })(Qn, typeof hn == "object" && hn, typeof define == "function" && define);
  });
  var Kn = U(() => {
  });
  var Wn = U((Zn, ve) => {
    (function(t2, e, n) {
      var r = 256, i = 6, s = 52, a = "random", o = n.pow(r, i), l = n.pow(2, s), f = l * 2, u = r - 1, c;
      function h(y, w, T) {
        var A = [];
        w = w == true ? { entropy: true } : w || {};
        var C = x(m(w.entropy ? [y, b(e)] : y ?? _(), 3), A), S = new p(A), N = function() {
          for (var v = S.g(i), M = o, j = 0; v < l; )
            v = (v + j) * r, M *= r, j = S.g(1);
          for (; v >= f; )
            v /= 2, M /= 2, j >>>= 1;
          return (v + j) / M;
        };
        return N.int32 = function() {
          return S.g(4) | 0;
        }, N.quick = function() {
          return S.g(4) / 4294967296;
        }, N.double = N, x(b(S.S), e), (w.pass || T || function(v, M, j, k) {
          return k && (k.S && d(k, S), v.state = function() {
            return d(S, {});
          }), j ? (n[a] = v, M) : v;
        })(N, C, "global" in w ? w.global : this == n, w.state);
      }
      function p(y) {
        var w, T = y.length, A = this, C = 0, S = A.i = A.j = 0, N = A.S = [];
        for (T || (y = [T++]); C < r; )
          N[C] = C++;
        for (C = 0; C < r; C++)
          N[C] = N[S = u & S + y[C % T] + (w = N[C])], N[S] = w;
        (A.g = function(v) {
          for (var M, j = 0, k = A.i, E = A.j, P = A.S; v--; )
            M = P[k = u & k + 1], j = j * r + P[u & (P[k] = P[E = u & E + M]) + (P[E] = M)];
          return A.i = k, A.j = E, j;
        })(r);
      }
      function d(y, w) {
        return w.i = y.i, w.j = y.j, w.S = y.S.slice(), w;
      }
      function m(y, w) {
        var T = [], A = typeof y, C;
        if (w && A == "object")
          for (C in y)
            try {
              T.push(m(y[C], w - 1));
            } catch (S) {
            }
        return T.length ? T : A == "string" ? y : y + "\0";
      }
      function x(y, w) {
        for (var T = y + "", A, C = 0; C < T.length; )
          w[u & C] = u & (A ^= w[u & C] * 19) + T.charCodeAt(C++);
        return b(w);
      }
      function _() {
        try {
          var y;
          return c && (y = c.randomBytes) ? y = y(r) : (y = new Uint8Array(r), (t2.crypto || t2.msCrypto).getRandomValues(y)), b(y);
        } catch (A) {
          var w = t2.navigator, T = w && w.plugins;
          return [+new Date(), t2, T, t2.screen, b(e)];
        }
      }
      function b(y) {
        return String.fromCharCode.apply(0, y);
      }
      if (x(n.random(), e), typeof ve == "object" && ve.exports) {
        ve.exports = h;
        try {
          c = Kn();
        } catch (y) {
        }
      } else
        typeof define == "function" && define.amd ? define(function() {
          return h;
        }) : n["seed" + a] = h;
    })(typeof self != "undefined" ? self : Zn, [], Math);
  });
  var tr = U((nl, Jn) => {
    var so = Rn(), ao = Fn(), lo = Vn(), uo = Hn(), co = $n(), fo = Un(), Mt = Wn();
    Mt.alea = so;
    Mt.xor128 = ao;
    Mt.xorwow = lo;
    Mt.xorshift7 = uo;
    Mt.xor4096 = co;
    Mt.tychei = fo;
    Jn.exports = Mt;
  });
  var er = U((dl, _e) => {
    (function() {
      function t2(e, n, r, i) {
        this.max_objects = n || 10, this.max_levels = r || 4, this.level = i || 0, this.bounds = e, this.objects = [], this.nodes = [];
      }
      t2.prototype.split = function() {
        var e = this.level + 1, n = this.bounds.width / 2, r = this.bounds.height / 2, i = this.bounds.x, s = this.bounds.y;
        this.nodes[0] = new t2({ x: i + n, y: s, width: n, height: r }, this.max_objects, this.max_levels, e), this.nodes[1] = new t2({ x: i, y: s, width: n, height: r }, this.max_objects, this.max_levels, e), this.nodes[2] = new t2({ x: i, y: s + r, width: n, height: r }, this.max_objects, this.max_levels, e), this.nodes[3] = new t2({ x: i + n, y: s + r, width: n, height: r }, this.max_objects, this.max_levels, e);
      }, t2.prototype.getIndex = function(e) {
        var n = [], r = this.bounds.x + this.bounds.width / 2, i = this.bounds.y + this.bounds.height / 2, s = e.y < i, a = e.x < r, o = e.x + e.width > r, l = e.y + e.height > i;
        return s && o && n.push(0), a && s && n.push(1), a && l && n.push(2), o && l && n.push(3), n;
      }, t2.prototype.insert = function(e) {
        var n = 0, r;
        if (this.nodes.length) {
          for (r = this.getIndex(e), n = 0; n < r.length; n++)
            this.nodes[r[n]].insert(e);
          return;
        }
        if (this.objects.push(e), this.objects.length > this.max_objects && this.level < this.max_levels) {
          for (this.nodes.length || this.split(), n = 0; n < this.objects.length; n++) {
            r = this.getIndex(this.objects[n]);
            for (var i = 0; i < r.length; i++)
              this.nodes[r[i]].insert(this.objects[n]);
          }
          this.objects = [];
        }
      }, t2.prototype.retrieve = function(e) {
        var n = this.getIndex(e), r = this.objects;
        if (this.nodes.length)
          for (var i = 0; i < n.length; i++)
            r = r.concat(this.nodes[n[i]].retrieve(e));
        return r = r.filter(function(s, a) {
          return r.indexOf(s) >= a;
        }), r;
      }, t2.prototype.clear = function() {
        this.objects = [];
        for (var e = 0; e < this.nodes.length; e++)
          this.nodes.length && this.nodes[e].clear();
        this.nodes = [];
      }, typeof _e != "undefined" && typeof _e.exports != "undefined" ? _e.exports = t2 : window.Quadtree = t2;
    })();
  });
  var Ki = U((qn, Xn) => {
    (function() {
      "use strict";
      var t2 = 0.5 * (Math.sqrt(3) - 1), e = (3 - Math.sqrt(3)) / 6, n = 1 / 3, r = 1 / 6, i = (Math.sqrt(5) - 1) / 4, s = (5 - Math.sqrt(5)) / 20;
      function a(u) {
        var c;
        typeof u == "function" ? c = u : u ? c = l(u) : c = Math.random, this.p = o(c), this.perm = new Uint8Array(512), this.permMod12 = new Uint8Array(512);
        for (var h = 0; h < 512; h++)
          this.perm[h] = this.p[h & 255], this.permMod12[h] = this.perm[h] % 12;
      }
      a.prototype = { grad3: new Float32Array([1, 1, 0, -1, 1, 0, 1, -1, 0, -1, -1, 0, 1, 0, 1, -1, 0, 1, 1, 0, -1, -1, 0, -1, 0, 1, 1, 0, -1, 1, 0, 1, -1, 0, -1, -1]), grad4: new Float32Array([0, 1, 1, 1, 0, 1, 1, -1, 0, 1, -1, 1, 0, 1, -1, -1, 0, -1, 1, 1, 0, -1, 1, -1, 0, -1, -1, 1, 0, -1, -1, -1, 1, 0, 1, 1, 1, 0, 1, -1, 1, 0, -1, 1, 1, 0, -1, -1, -1, 0, 1, 1, -1, 0, 1, -1, -1, 0, -1, 1, -1, 0, -1, -1, 1, 1, 0, 1, 1, 1, 0, -1, 1, -1, 0, 1, 1, -1, 0, -1, -1, 1, 0, 1, -1, 1, 0, -1, -1, -1, 0, 1, -1, -1, 0, -1, 1, 1, 1, 0, 1, 1, -1, 0, 1, -1, 1, 0, 1, -1, -1, 0, -1, 1, 1, 0, -1, 1, -1, 0, -1, -1, 1, 0, -1, -1, -1, 0]), noise2D: function(u, c) {
        var h = this.permMod12, p = this.perm, d = this.grad3, m = 0, x = 0, _ = 0, b = (u + c) * t2, y = Math.floor(u + b), w = Math.floor(c + b), T = (y + w) * e, A = y - T, C = w - T, S = u - A, N = c - C, v, M;
        S > N ? (v = 1, M = 0) : (v = 0, M = 1);
        var j = S - v + e, k = N - M + e, E = S - 1 + 2 * e, P = N - 1 + 2 * e, D = y & 255, I = w & 255, O = 0.5 - S * S - N * N;
        if (O >= 0) {
          var z = h[D + p[I]] * 3;
          O *= O, m = O * O * (d[z] * S + d[z + 1] * N);
        }
        var X = 0.5 - j * j - k * k;
        if (X >= 0) {
          var V = h[D + v + p[I + M]] * 3;
          X *= X, x = X * X * (d[V] * j + d[V + 1] * k);
        }
        var L = 0.5 - E * E - P * P;
        if (L >= 0) {
          var Z = h[D + 1 + p[I + 1]] * 3;
          L *= L, _ = L * L * (d[Z] * E + d[Z + 1] * P);
        }
        return 70 * (m + x + _);
      }, noise3D: function(u, c, h) {
        var p = this.permMod12, d = this.perm, m = this.grad3, x, _, b, y, w = (u + c + h) * n, T = Math.floor(u + w), A = Math.floor(c + w), C = Math.floor(h + w), S = (T + A + C) * r, N = T - S, v = A - S, M = C - S, j = u - N, k = c - v, E = h - M, P, D, I, O, z, X;
        j >= k ? k >= E ? (P = 1, D = 0, I = 0, O = 1, z = 1, X = 0) : j >= E ? (P = 1, D = 0, I = 0, O = 1, z = 0, X = 1) : (P = 0, D = 0, I = 1, O = 1, z = 0, X = 1) : k < E ? (P = 0, D = 0, I = 1, O = 0, z = 1, X = 1) : j < E ? (P = 0, D = 1, I = 0, O = 0, z = 1, X = 1) : (P = 0, D = 1, I = 0, O = 1, z = 1, X = 0);
        var V = j - P + r, L = k - D + r, Z = E - I + r, dt = j - O + 2 * r, mt = k - z + 2 * r, gt = E - X + 2 * r, xt = j - 1 + 3 * r, vt = k - 1 + 3 * r, _t = E - 1 + 3 * r, at = T & 255, lt = A & 255, ut = C & 255, tt = 0.6 - j * j - k * k - E * E;
        if (tt < 0)
          x = 0;
        else {
          var yt = p[at + d[lt + d[ut]]] * 3;
          tt *= tt, x = tt * tt * (m[yt] * j + m[yt + 1] * k + m[yt + 2] * E);
        }
        var et = 0.6 - V * V - L * L - Z * Z;
        if (et < 0)
          _ = 0;
        else {
          var wt = p[at + P + d[lt + D + d[ut + I]]] * 3;
          et *= et, _ = et * et * (m[wt] * V + m[wt + 1] * L + m[wt + 2] * Z);
        }
        var nt = 0.6 - dt * dt - mt * mt - gt * gt;
        if (nt < 0)
          b = 0;
        else {
          var bt = p[at + O + d[lt + z + d[ut + X]]] * 3;
          nt *= nt, b = nt * nt * (m[bt] * dt + m[bt + 1] * mt + m[bt + 2] * gt);
        }
        var rt = 0.6 - xt * xt - vt * vt - _t * _t;
        if (rt < 0)
          y = 0;
        else {
          var jt = p[at + 1 + d[lt + 1 + d[ut + 1]]] * 3;
          rt *= rt, y = rt * rt * (m[jt] * xt + m[jt + 1] * vt + m[jt + 2] * _t);
        }
        return 32 * (x + _ + b + y);
      }, noise4D: function(u, c, h, p) {
        var d = this.perm, m = this.grad4, x, _, b, y, w, T = (u + c + h + p) * i, A = Math.floor(u + T), C = Math.floor(c + T), S = Math.floor(h + T), N = Math.floor(p + T), v = (A + C + S + N) * s, M = A - v, j = C - v, k = S - v, E = N - v, P = u - M, D = c - j, I = h - k, O = p - E, z = 0, X = 0, V = 0, L = 0;
        P > D ? z++ : X++, P > I ? z++ : V++, P > O ? z++ : L++, D > I ? X++ : V++, D > O ? X++ : L++, I > O ? V++ : L++;
        var Z, dt, mt, gt, xt, vt, _t, at, lt, ut, tt, yt;
        Z = z >= 3 ? 1 : 0, dt = X >= 3 ? 1 : 0, mt = V >= 3 ? 1 : 0, gt = L >= 3 ? 1 : 0, xt = z >= 2 ? 1 : 0, vt = X >= 2 ? 1 : 0, _t = V >= 2 ? 1 : 0, at = L >= 2 ? 1 : 0, lt = z >= 1 ? 1 : 0, ut = X >= 1 ? 1 : 0, tt = V >= 1 ? 1 : 0, yt = L >= 1 ? 1 : 0;
        var et = P - Z + s, wt = D - dt + s, nt = I - mt + s, bt = O - gt + s, rt = P - xt + 2 * s, jt = D - vt + 2 * s, Qe = I - _t + 2 * s, Ue = O - at + 2 * s, Ke = P - lt + 3 * s, Ze = D - ut + 3 * s, We = I - tt + 3 * s, Je = O - yt + 3 * s, tn = P - 1 + 4 * s, en = D - 1 + 4 * s, nn = I - 1 + 4 * s, rn = O - 1 + 4 * s, Ft = A & 255, Lt = C & 255, Vt = S & 255, Yt = N & 255, Ht = 0.6 - P * P - D * D - I * I - O * O;
        if (Ht < 0)
          x = 0;
        else {
          var pe = d[Ft + d[Lt + d[Vt + d[Yt]]]] % 32 * 4;
          Ht *= Ht, x = Ht * Ht * (m[pe] * P + m[pe + 1] * D + m[pe + 2] * I + m[pe + 3] * O);
        }
        var Gt = 0.6 - et * et - wt * wt - nt * nt - bt * bt;
        if (Gt < 0)
          _ = 0;
        else {
          var de = d[Ft + Z + d[Lt + dt + d[Vt + mt + d[Yt + gt]]]] % 32 * 4;
          Gt *= Gt, _ = Gt * Gt * (m[de] * et + m[de + 1] * wt + m[de + 2] * nt + m[de + 3] * bt);
        }
        var $t = 0.6 - rt * rt - jt * jt - Qe * Qe - Ue * Ue;
        if ($t < 0)
          b = 0;
        else {
          var me = d[Ft + xt + d[Lt + vt + d[Vt + _t + d[Yt + at]]]] % 32 * 4;
          $t *= $t, b = $t * $t * (m[me] * rt + m[me + 1] * jt + m[me + 2] * Qe + m[me + 3] * Ue);
        }
        var Qt = 0.6 - Ke * Ke - Ze * Ze - We * We - Je * Je;
        if (Qt < 0)
          y = 0;
        else {
          var ge = d[Ft + lt + d[Lt + ut + d[Vt + tt + d[Yt + yt]]]] % 32 * 4;
          Qt *= Qt, y = Qt * Qt * (m[ge] * Ke + m[ge + 1] * Ze + m[ge + 2] * We + m[ge + 3] * Je);
        }
        var Ut = 0.6 - tn * tn - en * en - nn * nn - rn * rn;
        if (Ut < 0)
          w = 0;
        else {
          var xe = d[Ft + 1 + d[Lt + 1 + d[Vt + 1 + d[Yt + 1]]]] % 32 * 4;
          Ut *= Ut, w = Ut * Ut * (m[xe] * tn + m[xe + 1] * en + m[xe + 2] * nn + m[xe + 3] * rn);
        }
        return 27 * (x + _ + b + y + w);
      } };
      function o(u) {
        var c, h = new Uint8Array(256);
        for (c = 0; c < 256; c++)
          h[c] = c;
        for (c = 0; c < 255; c++) {
          var p = c + ~~(u() * (256 - c)), d = h[c];
          h[c] = h[p], h[p] = d;
        }
        return h;
      }
      a._buildPermutationTable = o;
      function l() {
        var u = 0, c = 0, h = 0, p = 1, d = f();
        u = d(" "), c = d(" "), h = d(" ");
        for (var m = 0; m < arguments.length; m++)
          u -= d(arguments[m]), u < 0 && (u += 1), c -= d(arguments[m]), c < 0 && (c += 1), h -= d(arguments[m]), h < 0 && (h += 1);
        return d = null, function() {
          var x = 2091639 * u + p * 23283064365386963e-26;
          return u = c, c = h, h = x - (p = x | 0);
        };
      }
      function f() {
        var u = 4022871197;
        return function(c) {
          c = c.toString();
          for (var h = 0; h < c.length; h++) {
            u += c.charCodeAt(h);
            var p = 0.02519603282416938 * u;
            u = p >>> 0, p -= u, p *= u, u = p >>> 0, p -= u, u += p * 4294967296;
          }
          return (u >>> 0) * 23283064365386963e-26;
        };
      }
      typeof define != "undefined" && define.amd && define(function() {
        return a;
      }), typeof qn != "undefined" ? qn.SimplexNoise = a : typeof window != "undefined" && (window.SimplexNoise = a), typeof Xn != "undefined" && (Xn.exports = a);
    })();
  });
  var pn = sn(tr());
  var dn = (0, pn.default)();
  function ho(t2) {
    dn = (0, pn.default)(t2);
  }
  function At() {
    if (Array.isArray(arguments[0])) {
      let e = arguments[0];
      return e[At(0, e.length - 1, true)];
    } else {
      let e = arguments[0], n = arguments[1], r = arguments[2] || false, i = dn() * (n - e) + e;
      return r ? Math.round(i) : i;
    }
  }
  var nr = sn(er());
  function rr(t2) {
    return t2 * t2;
  }
  function mn(t2, e) {
    return rr(t2[0] - e[0]) + rr(t2[1] - e[1]);
  }
  function Ao(t2, e, n) {
    var r = mn(e, n);
    if (r === 0)
      return mn(t2, e);
    var i = ((t2[0] - e[0]) * (n[0] - e[0]) + (t2[1] - e[1]) * (n[1] - e[1])) / r;
    return i = Math.max(0, Math.min(1, i)), mn(t2, [e[0] + i * (n[0] - e[0]), e[1] + i * (n[1] - e[1])]);
  }
  function ye(t2, e, n) {
    return Math.sqrt(Ao(t2, e, n));
  }
  var q = 11102230246251565e-32;
  var R = 134217729;
  var Kt = (3 + 8 * q) * q;
  function kt(t2, e, n, r, i) {
    let s, a, o, l, f = e[0], u = r[0], c = 0, h = 0;
    u > f == u > -f ? (s = f, f = e[++c]) : (s = u, u = r[++h]);
    let p = 0;
    if (c < t2 && h < n)
      for (u > f == u > -f ? (a = f + s, o = s - (a - f), f = e[++c]) : (a = u + s, o = s - (a - u), u = r[++h]), s = a, o !== 0 && (i[p++] = o); c < t2 && h < n; )
        u > f == u > -f ? (a = s + f, l = a - s, o = s - (a - l) + (f - l), f = e[++c]) : (a = s + u, l = a - s, o = s - (a - l) + (u - l), u = r[++h]), s = a, o !== 0 && (i[p++] = o);
    for (; c < t2; )
      a = s + f, l = a - s, o = s - (a - l) + (f - l), f = e[++c], s = a, o !== 0 && (i[p++] = o);
    for (; h < n; )
      a = s + u, l = a - s, o = s - (a - l) + (u - l), u = r[++h], s = a, o !== 0 && (i[p++] = o);
    return (s !== 0 || p === 0) && (i[p++] = s), p;
  }
  function Zt(t2, e) {
    let n = e[0];
    for (let r = 1; r < t2; r++)
      n += e[r];
    return n;
  }
  function g(t2) {
    return new Float64Array(t2);
  }
  var ko = (3 + 16 * q) * q;
  var To = (2 + 12 * q) * q;
  var Io = (9 + 64 * q) * q * q;
  var Nt = g(4);
  var ir = g(8);
  var or = g(12);
  var sr = g(16);
  var H = g(4);
  function So(t2, e, n, r, i, s, a) {
    let o, l, f, u, c, h, p, d, m, x, _, b, y, w, T, A, C, S, N = t2 - i, v = n - i, M = e - s, j = r - s;
    w = N * j, h = R * N, p = h - (h - N), d = N - p, h = R * j, m = h - (h - j), x = j - m, T = d * x - (w - p * m - d * m - p * x), A = M * v, h = R * M, p = h - (h - M), d = M - p, h = R * v, m = h - (h - v), x = v - m, C = d * x - (A - p * m - d * m - p * x), _ = T - C, c = T - _, Nt[0] = T - (_ + c) + (c - C), b = w + _, c = b - w, y = w - (b - c) + (_ - c), _ = y - A, c = y - _, Nt[1] = y - (_ + c) + (c - A), S = b + _, c = S - b, Nt[2] = b - (S - c) + (_ - c), Nt[3] = S;
    let k = Zt(4, Nt), E = To * a;
    if (k >= E || -k >= E || (c = t2 - N, o = t2 - (N + c) + (c - i), c = n - v, f = n - (v + c) + (c - i), c = e - M, l = e - (M + c) + (c - s), c = r - j, u = r - (j + c) + (c - s), o === 0 && l === 0 && f === 0 && u === 0) || (E = Io * a + Kt * Math.abs(k), k += N * u + j * o - (M * f + v * l), k >= E || -k >= E))
      return k;
    w = o * j, h = R * o, p = h - (h - o), d = o - p, h = R * j, m = h - (h - j), x = j - m, T = d * x - (w - p * m - d * m - p * x), A = l * v, h = R * l, p = h - (h - l), d = l - p, h = R * v, m = h - (h - v), x = v - m, C = d * x - (A - p * m - d * m - p * x), _ = T - C, c = T - _, H[0] = T - (_ + c) + (c - C), b = w + _, c = b - w, y = w - (b - c) + (_ - c), _ = y - A, c = y - _, H[1] = y - (_ + c) + (c - A), S = b + _, c = S - b, H[2] = b - (S - c) + (_ - c), H[3] = S;
    let P = kt(4, Nt, 4, H, ir);
    w = N * u, h = R * N, p = h - (h - N), d = N - p, h = R * u, m = h - (h - u), x = u - m, T = d * x - (w - p * m - d * m - p * x), A = M * f, h = R * M, p = h - (h - M), d = M - p, h = R * f, m = h - (h - f), x = f - m, C = d * x - (A - p * m - d * m - p * x), _ = T - C, c = T - _, H[0] = T - (_ + c) + (c - C), b = w + _, c = b - w, y = w - (b - c) + (_ - c), _ = y - A, c = y - _, H[1] = y - (_ + c) + (c - A), S = b + _, c = S - b, H[2] = b - (S - c) + (_ - c), H[3] = S;
    let D = kt(P, ir, 4, H, or);
    w = o * u, h = R * o, p = h - (h - o), d = o - p, h = R * u, m = h - (h - u), x = u - m, T = d * x - (w - p * m - d * m - p * x), A = l * f, h = R * l, p = h - (h - l), d = l - p, h = R * f, m = h - (h - f), x = f - m, C = d * x - (A - p * m - d * m - p * x), _ = T - C, c = T - _, H[0] = T - (_ + c) + (c - C), b = w + _, c = b - w, y = w - (b - c) + (_ - c), _ = y - A, c = y - _, H[1] = y - (_ + c) + (c - A), S = b + _, c = S - b, H[2] = b - (S - c) + (_ - c), H[3] = S;
    let I = kt(D, or, 4, H, sr);
    return sr[I - 1];
  }
  function Ot(t2, e, n, r, i, s) {
    let a = (e - s) * (n - i), o = (t2 - i) * (r - s), l = a - o;
    if (a === 0 || o === 0 || a > 0 != o > 0)
      return l;
    let f = Math.abs(a + o);
    return Math.abs(l) >= ko * f ? l : -So(t2, e, n, r, i, s, f);
  }
  var wl = (7 + 56 * q) * q;
  var bl = (3 + 28 * q) * q;
  var jl = (26 + 288 * q) * q * q;
  var Ml = g(4);
  var Al = g(4);
  var kl = g(4);
  var Tl = g(4);
  var Il = g(4);
  var Sl = g(4);
  var Cl = g(4);
  var El = g(4);
  var Nl = g(4);
  var Ol = g(8);
  var Pl = g(8);
  var Dl = g(8);
  var ql = g(4);
  var Xl = g(8);
  var zl = g(8);
  var Rl = g(8);
  var Bl = g(12);
  var Fl = g(192);
  var Ll = g(192);
  var Hl = (10 + 96 * q) * q;
  var Gl = (4 + 48 * q) * q;
  var $l = (44 + 576 * q) * q * q;
  var Ql = g(4);
  var Ul = g(4);
  var Kl = g(4);
  var Zl = g(4);
  var Wl = g(4);
  var Jl = g(4);
  var tu = g(4);
  var eu = g(4);
  var nu = g(8);
  var ru = g(8);
  var iu = g(8);
  var ou = g(8);
  var su = g(8);
  var au = g(8);
  var lu = g(8);
  var uu = g(8);
  var cu = g(8);
  var fu = g(4);
  var hu = g(4);
  var pu = g(4);
  var du = g(8);
  var mu = g(16);
  var gu = g(16);
  var xu = g(16);
  var vu = g(32);
  var _u = g(32);
  var yu = g(48);
  var wu = g(64);
  var bu = g(1152);
  var ju = g(1152);
  var Tu = (16 + 224 * q) * q;
  var Iu = (5 + 72 * q) * q;
  var Su = (71 + 1408 * q) * q * q;
  var Cu = g(4);
  var Eu = g(4);
  var Nu = g(4);
  var Ou = g(4);
  var Pu = g(4);
  var Du = g(4);
  var qu = g(4);
  var Xu = g(4);
  var zu = g(4);
  var Ru = g(4);
  var Bu = g(24);
  var Fu = g(24);
  var Lu = g(24);
  var Vu = g(24);
  var Yu = g(24);
  var Hu = g(24);
  var Gu = g(24);
  var $u = g(24);
  var Qu = g(24);
  var Uu = g(24);
  var Ku = g(1152);
  var Zu = g(1152);
  var Wu = g(1152);
  var Ju = g(1152);
  var tc = g(1152);
  var ec = g(2304);
  var nc = g(2304);
  var rc = g(3456);
  var ic = g(5760);
  var oc = g(8);
  var sc = g(8);
  var ac = g(8);
  var lc = g(16);
  var uc = g(24);
  var cc = g(48);
  var fc = g(48);
  var hc = g(96);
  var pc = g(192);
  var dc = g(384);
  var mc = g(384);
  var gc = g(384);
  var xc = g(768);
  var vc = g(96);
  var _c = g(96);
  var yc = g(96);
  var wc = g(1152);
  var lr = Math.pow(2, -52);
  var we = new Uint32Array(512);
  var Tt = class {
    static from(e, n = Do, r = qo) {
      let i = e.length, s = new Float64Array(i * 2);
      for (let a = 0; a < i; a++) {
        let o = e[a];
        s[2 * a] = n(o), s[2 * a + 1] = r(o);
      }
      return new Tt(s);
    }
    constructor(e) {
      let n = e.length >> 1;
      if (n > 0 && typeof e[0] != "number")
        throw new Error("Expected coords to contain numbers.");
      this.coords = e;
      let r = Math.max(2 * n - 5, 0);
      this._triangles = new Uint32Array(r * 3), this._halfedges = new Int32Array(r * 3), this._hashSize = Math.ceil(Math.sqrt(n)), this._hullPrev = new Uint32Array(n), this._hullNext = new Uint32Array(n), this._hullTri = new Uint32Array(n), this._hullHash = new Int32Array(this._hashSize).fill(-1), this._ids = new Uint32Array(n), this._dists = new Float64Array(n), this.update();
    }
    update() {
      let { coords: e, _hullPrev: n, _hullNext: r, _hullTri: i, _hullHash: s } = this, a = e.length >> 1, o = Infinity, l = Infinity, f = -Infinity, u = -Infinity;
      for (let v = 0; v < a; v++) {
        let M = e[2 * v], j = e[2 * v + 1];
        M < o && (o = M), j < l && (l = j), M > f && (f = M), j > u && (u = j), this._ids[v] = v;
      }
      let c = (o + f) / 2, h = (l + u) / 2, p = Infinity, d, m, x;
      for (let v = 0; v < a; v++) {
        let M = gn(c, h, e[2 * v], e[2 * v + 1]);
        M < p && (d = v, p = M);
      }
      let _ = e[2 * d], b = e[2 * d + 1];
      p = Infinity;
      for (let v = 0; v < a; v++) {
        if (v === d)
          continue;
        let M = gn(_, b, e[2 * v], e[2 * v + 1]);
        M < p && M > 0 && (m = v, p = M);
      }
      let y = e[2 * m], w = e[2 * m + 1], T = Infinity;
      for (let v = 0; v < a; v++) {
        if (v === d || v === m)
          continue;
        let M = Oo(_, b, y, w, e[2 * v], e[2 * v + 1]);
        M < T && (x = v, T = M);
      }
      let A = e[2 * x], C = e[2 * x + 1];
      if (T === Infinity) {
        for (let j = 0; j < a; j++)
          this._dists[j] = e[2 * j] - e[0] || e[2 * j + 1] - e[1];
        Pt(this._ids, this._dists, 0, a - 1);
        let v = new Uint32Array(a), M = 0;
        for (let j = 0, k = -Infinity; j < a; j++) {
          let E = this._ids[j];
          this._dists[E] > k && (v[M++] = E, k = this._dists[E]);
        }
        this.hull = v.subarray(0, M), this.triangles = new Uint32Array(0), this.halfedges = new Uint32Array(0);
        return;
      }
      if (Ot(_, b, y, w, A, C) < 0) {
        let v = m, M = y, j = w;
        m = x, y = A, w = C, x = v, A = M, C = j;
      }
      let S = Po(_, b, y, w, A, C);
      this._cx = S.x, this._cy = S.y;
      for (let v = 0; v < a; v++)
        this._dists[v] = gn(e[2 * v], e[2 * v + 1], S.x, S.y);
      Pt(this._ids, this._dists, 0, a - 1), this._hullStart = d;
      let N = 3;
      r[d] = n[x] = m, r[m] = n[d] = x, r[x] = n[m] = d, i[d] = 0, i[m] = 1, i[x] = 2, s.fill(-1), s[this._hashKey(_, b)] = d, s[this._hashKey(y, w)] = m, s[this._hashKey(A, C)] = x, this.trianglesLen = 0, this._addTriangle(d, m, x, -1, -1, -1);
      for (let v = 0, M, j; v < this._ids.length; v++) {
        let k = this._ids[v], E = e[2 * k], P = e[2 * k + 1];
        if (v > 0 && Math.abs(E - M) <= lr && Math.abs(P - j) <= lr || (M = E, j = P, k === d || k === m || k === x))
          continue;
        let D = 0;
        for (let V = 0, L = this._hashKey(E, P); V < this._hashSize && (D = s[(L + V) % this._hashSize], !(D !== -1 && D !== r[D])); V++)
          ;
        D = n[D];
        let I = D, O;
        for (; O = r[I], Ot(E, P, e[2 * I], e[2 * I + 1], e[2 * O], e[2 * O + 1]) >= 0; )
          if (I = O, I === D) {
            I = -1;
            break;
          }
        if (I === -1)
          continue;
        let z = this._addTriangle(I, k, r[I], -1, -1, i[I]);
        i[k] = this._legalize(z + 2), i[I] = z, N++;
        let X = r[I];
        for (; O = r[X], Ot(E, P, e[2 * X], e[2 * X + 1], e[2 * O], e[2 * O + 1]) < 0; )
          z = this._addTriangle(X, k, O, i[k], -1, i[X]), i[k] = this._legalize(z + 2), r[X] = X, N--, X = O;
        if (I === D)
          for (; O = n[I], Ot(E, P, e[2 * O], e[2 * O + 1], e[2 * I], e[2 * I + 1]) < 0; )
            z = this._addTriangle(O, k, I, -1, i[I], i[O]), this._legalize(z + 2), i[O] = z, r[I] = I, N--, I = O;
        this._hullStart = n[k] = I, r[I] = n[X] = k, r[k] = X, s[this._hashKey(E, P)] = k, s[this._hashKey(e[2 * I], e[2 * I + 1])] = I;
      }
      this.hull = new Uint32Array(N);
      for (let v = 0, M = this._hullStart; v < N; v++)
        this.hull[v] = M, M = r[M];
      this.triangles = this._triangles.subarray(0, this.trianglesLen), this.halfedges = this._halfedges.subarray(0, this.trianglesLen);
    }
    _hashKey(e, n) {
      return Math.floor(Eo(e - this._cx, n - this._cy) * this._hashSize) % this._hashSize;
    }
    _legalize(e) {
      let { _triangles: n, _halfedges: r, coords: i } = this, s = 0, a = 0;
      for (; ; ) {
        let o = r[e], l = e - e % 3;
        if (a = l + (e + 2) % 3, o === -1) {
          if (s === 0)
            break;
          e = we[--s];
          continue;
        }
        let f = o - o % 3, u = l + (e + 1) % 3, c = f + (o + 2) % 3, h = n[a], p = n[e], d = n[u], m = n[c];
        if (No(i[2 * h], i[2 * h + 1], i[2 * p], i[2 * p + 1], i[2 * d], i[2 * d + 1], i[2 * m], i[2 * m + 1])) {
          n[e] = m, n[o] = h;
          let _ = r[c];
          if (_ === -1) {
            let y = this._hullStart;
            do {
              if (this._hullTri[y] === c) {
                this._hullTri[y] = e;
                break;
              }
              y = this._hullPrev[y];
            } while (y !== this._hullStart);
          }
          this._link(e, _), this._link(o, r[a]), this._link(a, c);
          let b = f + (o + 1) % 3;
          s < we.length && (we[s++] = b);
        } else {
          if (s === 0)
            break;
          e = we[--s];
        }
      }
      return a;
    }
    _link(e, n) {
      this._halfedges[e] = n, n !== -1 && (this._halfedges[n] = e);
    }
    _addTriangle(e, n, r, i, s, a) {
      let o = this.trianglesLen;
      return this._triangles[o] = e, this._triangles[o + 1] = n, this._triangles[o + 2] = r, this._link(o, i), this._link(o + 1, s), this._link(o + 2, a), this.trianglesLen += 3, o;
    }
  };
  function Eo(t2, e) {
    let n = t2 / (Math.abs(t2) + Math.abs(e));
    return (e > 0 ? 3 - n : 1 + n) / 4;
  }
  function gn(t2, e, n, r) {
    let i = t2 - n, s = e - r;
    return i * i + s * s;
  }
  function No(t2, e, n, r, i, s, a, o) {
    let l = t2 - a, f = e - o, u = n - a, c = r - o, h = i - a, p = s - o, d = l * l + f * f, m = u * u + c * c, x = h * h + p * p;
    return l * (c * x - m * p) - f * (u * x - m * h) + d * (u * p - c * h) < 0;
  }
  function Oo(t2, e, n, r, i, s) {
    let a = n - t2, o = r - e, l = i - t2, f = s - e, u = a * a + o * o, c = l * l + f * f, h = 0.5 / (a * f - o * l), p = (f * u - o * c) * h, d = (a * c - l * u) * h;
    return p * p + d * d;
  }
  function Po(t2, e, n, r, i, s) {
    let a = n - t2, o = r - e, l = i - t2, f = s - e, u = a * a + o * o, c = l * l + f * f, h = 0.5 / (a * f - o * l), p = t2 + (f * u - o * c) * h, d = e + (a * c - l * u) * h;
    return { x: p, y: d };
  }
  function Pt(t2, e, n, r) {
    if (r - n <= 20)
      for (let i = n + 1; i <= r; i++) {
        let s = t2[i], a = e[s], o = i - 1;
        for (; o >= n && e[t2[o]] > a; )
          t2[o + 1] = t2[o--];
        t2[o + 1] = s;
      }
    else {
      let i = n + r >> 1, s = n + 1, a = r;
      Wt(t2, i, s), e[t2[n]] > e[t2[r]] && Wt(t2, n, r), e[t2[s]] > e[t2[r]] && Wt(t2, s, r), e[t2[n]] > e[t2[s]] && Wt(t2, n, s);
      let o = t2[s], l = e[o];
      for (; ; ) {
        do
          s++;
        while (e[t2[s]] < l);
        do
          a--;
        while (e[t2[a]] > l);
        if (a < s)
          break;
        Wt(t2, s, a);
      }
      t2[n + 1] = t2[a], t2[a] = o, r - s + 1 >= a - n ? (Pt(t2, e, s, r), Pt(t2, e, n, a - 1)) : (Pt(t2, e, n, a - 1), Pt(t2, e, s, r));
    }
  }
  function Wt(t2, e, n) {
    let r = t2[e];
    t2[e] = t2[n], t2[n] = r;
  }
  function Do(t2) {
    return t2[0];
  }
  function qo(t2) {
    return t2[1];
  }
  var ur = 1e-6;
  var K = class {
    constructor() {
      this._x0 = this._y0 = this._x1 = this._y1 = null, this._ = "";
    }
    moveTo(e, n) {
      this._ += `M${this._x0 = this._x1 = +e},${this._y0 = this._y1 = +n}`;
    }
    closePath() {
      this._x1 !== null && (this._x1 = this._x0, this._y1 = this._y0, this._ += "Z");
    }
    lineTo(e, n) {
      this._ += `L${this._x1 = +e},${this._y1 = +n}`;
    }
    arc(e, n, r) {
      e = +e, n = +n, r = +r;
      let i = e + r, s = n;
      if (r < 0)
        throw new Error("negative radius");
      this._x1 === null ? this._ += `M${i},${s}` : (Math.abs(this._x1 - i) > ur || Math.abs(this._y1 - s) > ur) && (this._ += "L" + i + "," + s), !!r && (this._ += `A${r},${r},0,1,1,${e - r},${n}A${r},${r},0,1,1,${this._x1 = i},${this._y1 = s}`);
    }
    rect(e, n, r, i) {
      this._ += `M${this._x0 = this._x1 = +e},${this._y0 = this._y1 = +n}h${+r}v${+i}h${-r}Z`;
    }
    value() {
      return this._ || null;
    }
  };
  var It = class {
    constructor() {
      this._ = [];
    }
    moveTo(e, n) {
      this._.push([e, n]);
    }
    closePath() {
      this._.push(this._[0].slice());
    }
    lineTo(e, n) {
      this._.push([e, n]);
    }
    value() {
      return this._.length ? this._ : null;
    }
  };
  var be = class {
    constructor(e, [n, r, i, s] = [0, 0, 960, 500]) {
      if (!((i = +i) >= (n = +n)) || !((s = +s) >= (r = +r)))
        throw new Error("invalid bounds");
      this.delaunay = e, this._circumcenters = new Float64Array(e.points.length * 2), this.vectors = new Float64Array(e.points.length * 2), this.xmax = i, this.xmin = n, this.ymax = s, this.ymin = r, this._init();
    }
    update() {
      return this.delaunay.update(), this._init(), this;
    }
    _init() {
      let { delaunay: { points: e, hull: n, triangles: r }, vectors: i } = this, s = this.circumcenters = this._circumcenters.subarray(0, r.length / 3 * 2);
      for (let p = 0, d = 0, m = r.length, x, _; p < m; p += 3, d += 2) {
        let b = r[p] * 2, y = r[p + 1] * 2, w = r[p + 2] * 2, T = e[b], A = e[b + 1], C = e[y], S = e[y + 1], N = e[w], v = e[w + 1], M = C - T, j = S - A, k = N - T, E = v - A, P = (M * E - j * k) * 2;
        if (Math.abs(P) < 1e-9) {
          let D = 1e9, I = r[0] * 2;
          D *= Math.sign((e[I] - T) * E - (e[I + 1] - A) * k), x = (T + N) / 2 - D * E, _ = (A + v) / 2 + D * k;
        } else {
          let D = 1 / P, I = M * M + j * j, O = k * k + E * E;
          x = T + (E * I - j * O) * D, _ = A + (M * O - k * I) * D;
        }
        s[d] = x, s[d + 1] = _;
      }
      let a = n[n.length - 1], o, l = a * 4, f, u = e[2 * a], c, h = e[2 * a + 1];
      i.fill(0);
      for (let p = 0; p < n.length; ++p)
        a = n[p], o = l, f = u, c = h, l = a * 4, u = e[2 * a], h = e[2 * a + 1], i[o + 2] = i[l] = c - h, i[o + 3] = i[l + 1] = u - f;
    }
    render(e) {
      let n = e == null ? e = new K() : void 0, { delaunay: { halfedges: r, inedges: i, hull: s }, circumcenters: a, vectors: o } = this;
      if (s.length <= 1)
        return null;
      for (let u = 0, c = r.length; u < c; ++u) {
        let h = r[u];
        if (h < u)
          continue;
        let p = Math.floor(u / 3) * 2, d = Math.floor(h / 3) * 2, m = a[p], x = a[p + 1], _ = a[d], b = a[d + 1];
        this._renderSegment(m, x, _, b, e);
      }
      let l, f = s[s.length - 1];
      for (let u = 0; u < s.length; ++u) {
        l = f, f = s[u];
        let c = Math.floor(i[f] / 3) * 2, h = a[c], p = a[c + 1], d = l * 4, m = this._project(h, p, o[d + 2], o[d + 3]);
        m && this._renderSegment(h, p, m[0], m[1], e);
      }
      return n && n.value();
    }
    renderBounds(e) {
      let n = e == null ? e = new K() : void 0;
      return e.rect(this.xmin, this.ymin, this.xmax - this.xmin, this.ymax - this.ymin), n && n.value();
    }
    renderCell(e, n) {
      let r = n == null ? n = new K() : void 0, i = this._clip(e);
      if (i === null || !i.length)
        return;
      n.moveTo(i[0], i[1]);
      let s = i.length;
      for (; i[0] === i[s - 2] && i[1] === i[s - 1] && s > 1; )
        s -= 2;
      for (let a = 2; a < s; a += 2)
        (i[a] !== i[a - 2] || i[a + 1] !== i[a - 1]) && n.lineTo(i[a], i[a + 1]);
      return n.closePath(), r && r.value();
    }
    *cellPolygons() {
      let { delaunay: { points: e } } = this;
      for (let n = 0, r = e.length / 2; n < r; ++n) {
        let i = this.cellPolygon(n);
        i && (i.index = n, yield i);
      }
    }
    cellPolygon(e) {
      let n = new It();
      return this.renderCell(e, n), n.value();
    }
    _renderSegment(e, n, r, i, s) {
      let a, o = this._regioncode(e, n), l = this._regioncode(r, i);
      o === 0 && l === 0 ? (s.moveTo(e, n), s.lineTo(r, i)) : (a = this._clipSegment(e, n, r, i, o, l)) && (s.moveTo(a[0], a[1]), s.lineTo(a[2], a[3]));
    }
    contains(e, n, r) {
      return n = +n, n !== n || (r = +r, r !== r) ? false : this.delaunay._step(e, n, r) === e;
    }
    *neighbors(e) {
      let n = this._clip(e);
      if (n)
        for (let r of this.delaunay.neighbors(e)) {
          let i = this._clip(r);
          if (i)
            t:
              for (let s = 0, a = n.length; s < a; s += 2)
                for (let o = 0, l = i.length; o < l; o += 2)
                  if (n[s] == i[o] && n[s + 1] == i[o + 1] && n[(s + 2) % a] == i[(o + l - 2) % l] && n[(s + 3) % a] == i[(o + l - 1) % l]) {
                    yield r;
                    break t;
                  }
        }
    }
    _cell(e) {
      let { circumcenters: n, delaunay: { inedges: r, halfedges: i, triangles: s } } = this, a = r[e];
      if (a === -1)
        return null;
      let o = [], l = a;
      do {
        let f = Math.floor(l / 3);
        if (o.push(n[f * 2], n[f * 2 + 1]), l = l % 3 == 2 ? l - 2 : l + 1, s[l] !== e)
          break;
        l = i[l];
      } while (l !== a && l !== -1);
      return o;
    }
    _clip(e) {
      if (e === 0 && this.delaunay.hull.length === 1)
        return [this.xmax, this.ymin, this.xmax, this.ymax, this.xmin, this.ymax, this.xmin, this.ymin];
      let n = this._cell(e);
      if (n === null)
        return null;
      let { vectors: r } = this, i = e * 4;
      return r[i] || r[i + 1] ? this._clipInfinite(e, n, r[i], r[i + 1], r[i + 2], r[i + 3]) : this._clipFinite(e, n);
    }
    _clipFinite(e, n) {
      let r = n.length, i = null, s, a, o = n[r - 2], l = n[r - 1], f, u = this._regioncode(o, l), c, h = 0;
      for (let p = 0; p < r; p += 2)
        if (s = o, a = l, o = n[p], l = n[p + 1], f = u, u = this._regioncode(o, l), f === 0 && u === 0)
          c = h, h = 0, i ? i.push(o, l) : i = [o, l];
        else {
          let d, m, x, _, b;
          if (f === 0) {
            if ((d = this._clipSegment(s, a, o, l, f, u)) === null)
              continue;
            [m, x, _, b] = d;
          } else {
            if ((d = this._clipSegment(o, l, s, a, u, f)) === null)
              continue;
            [_, b, m, x] = d, c = h, h = this._edgecode(m, x), c && h && this._edge(e, c, h, i, i.length), i ? i.push(m, x) : i = [m, x];
          }
          c = h, h = this._edgecode(_, b), c && h && this._edge(e, c, h, i, i.length), i ? i.push(_, b) : i = [_, b];
        }
      if (i)
        c = h, h = this._edgecode(i[0], i[1]), c && h && this._edge(e, c, h, i, i.length);
      else if (this.contains(e, (this.xmin + this.xmax) / 2, (this.ymin + this.ymax) / 2))
        return [this.xmax, this.ymin, this.xmax, this.ymax, this.xmin, this.ymax, this.xmin, this.ymin];
      return i;
    }
    _clipSegment(e, n, r, i, s, a) {
      for (; ; ) {
        if (s === 0 && a === 0)
          return [e, n, r, i];
        if (s & a)
          return null;
        let o, l, f = s || a;
        f & 8 ? (o = e + (r - e) * (this.ymax - n) / (i - n), l = this.ymax) : f & 4 ? (o = e + (r - e) * (this.ymin - n) / (i - n), l = this.ymin) : f & 2 ? (l = n + (i - n) * (this.xmax - e) / (r - e), o = this.xmax) : (l = n + (i - n) * (this.xmin - e) / (r - e), o = this.xmin), s ? (e = o, n = l, s = this._regioncode(e, n)) : (r = o, i = l, a = this._regioncode(r, i));
      }
    }
    _clipInfinite(e, n, r, i, s, a) {
      let o = Array.from(n), l;
      if ((l = this._project(o[0], o[1], r, i)) && o.unshift(l[0], l[1]), (l = this._project(o[o.length - 2], o[o.length - 1], s, a)) && o.push(l[0], l[1]), o = this._clipFinite(e, o))
        for (let f = 0, u = o.length, c, h = this._edgecode(o[u - 2], o[u - 1]); f < u; f += 2)
          c = h, h = this._edgecode(o[f], o[f + 1]), c && h && (f = this._edge(e, c, h, o, f), u = o.length);
      else
        this.contains(e, (this.xmin + this.xmax) / 2, (this.ymin + this.ymax) / 2) && (o = [this.xmin, this.ymin, this.xmax, this.ymin, this.xmax, this.ymax, this.xmin, this.ymax]);
      return o;
    }
    _edge(e, n, r, i, s) {
      for (; n !== r; ) {
        let a, o;
        switch (n) {
          case 5:
            n = 4;
            continue;
          case 4:
            n = 6, a = this.xmax, o = this.ymin;
            break;
          case 6:
            n = 2;
            continue;
          case 2:
            n = 10, a = this.xmax, o = this.ymax;
            break;
          case 10:
            n = 8;
            continue;
          case 8:
            n = 9, a = this.xmin, o = this.ymax;
            break;
          case 9:
            n = 1;
            continue;
          case 1:
            n = 5, a = this.xmin, o = this.ymin;
            break;
        }
        (i[s] !== a || i[s + 1] !== o) && this.contains(e, a, o) && (i.splice(s, 0, a, o), s += 2);
      }
      if (i.length > 4)
        for (let a = 0; a < i.length; a += 2) {
          let o = (a + 2) % i.length, l = (a + 4) % i.length;
          (i[a] === i[o] && i[o] === i[l] || i[a + 1] === i[o + 1] && i[o + 1] === i[l + 1]) && (i.splice(o, 2), a -= 2);
        }
      return s;
    }
    _project(e, n, r, i) {
      let s = Infinity, a, o, l;
      if (i < 0) {
        if (n <= this.ymin)
          return null;
        (a = (this.ymin - n) / i) < s && (l = this.ymin, o = e + (s = a) * r);
      } else if (i > 0) {
        if (n >= this.ymax)
          return null;
        (a = (this.ymax - n) / i) < s && (l = this.ymax, o = e + (s = a) * r);
      }
      if (r > 0) {
        if (e >= this.xmax)
          return null;
        (a = (this.xmax - e) / r) < s && (o = this.xmax, l = n + (s = a) * i);
      } else if (r < 0) {
        if (e <= this.xmin)
          return null;
        (a = (this.xmin - e) / r) < s && (o = this.xmin, l = n + (s = a) * i);
      }
      return [o, l];
    }
    _edgecode(e, n) {
      return (e === this.xmin ? 1 : e === this.xmax ? 2 : 0) | (n === this.ymin ? 4 : n === this.ymax ? 8 : 0);
    }
    _regioncode(e, n) {
      return (e < this.xmin ? 1 : e > this.xmax ? 2 : 0) | (n < this.ymin ? 4 : n > this.ymax ? 8 : 0);
    }
  };
  var Xo = 2 * Math.PI;
  var Dt = Math.pow;
  function zo(t2) {
    return t2[0];
  }
  function Ro(t2) {
    return t2[1];
  }
  function Bo(t2) {
    let { triangles: e, coords: n } = t2;
    for (let r = 0; r < e.length; r += 3) {
      let i = 2 * e[r], s = 2 * e[r + 1], a = 2 * e[r + 2];
      if ((n[a] - n[i]) * (n[s + 1] - n[i + 1]) - (n[s] - n[i]) * (n[a + 1] - n[i + 1]) > 1e-10)
        return false;
    }
    return true;
  }
  function Fo(t2, e, n) {
    return [t2 + Math.sin(t2 + e) * n, e + Math.cos(t2 - e) * n];
  }
  var St = class {
    static from(e, n = zo, r = Ro, i) {
      return new St("length" in e ? Lo(e, n, r, i) : Float64Array.from(Vo(e, n, r, i)));
    }
    constructor(e) {
      this._delaunator = new Tt(e), this.inedges = new Int32Array(e.length / 2), this._hullIndex = new Int32Array(e.length / 2), this.points = this._delaunator.coords, this._init();
    }
    update() {
      return this._delaunator.update(), this._init(), this;
    }
    _init() {
      let e = this._delaunator, n = this.points;
      if (e.hull && e.hull.length > 2 && Bo(e)) {
        this.collinear = Int32Array.from({ length: n.length / 2 }, (h, p) => p).sort((h, p) => n[2 * h] - n[2 * p] || n[2 * h + 1] - n[2 * p + 1]);
        let l = this.collinear[0], f = this.collinear[this.collinear.length - 1], u = [n[2 * l], n[2 * l + 1], n[2 * f], n[2 * f + 1]], c = 1e-8 * Math.hypot(u[3] - u[1], u[2] - u[0]);
        for (let h = 0, p = n.length / 2; h < p; ++h) {
          let d = Fo(n[2 * h], n[2 * h + 1], c);
          n[2 * h] = d[0], n[2 * h + 1] = d[1];
        }
        this._delaunator = new Tt(n);
      } else
        delete this.collinear;
      let r = this.halfedges = this._delaunator.halfedges, i = this.hull = this._delaunator.hull, s = this.triangles = this._delaunator.triangles, a = this.inedges.fill(-1), o = this._hullIndex.fill(-1);
      for (let l = 0, f = r.length; l < f; ++l) {
        let u = s[l % 3 == 2 ? l - 2 : l + 1];
        (r[l] === -1 || a[u] === -1) && (a[u] = l);
      }
      for (let l = 0, f = i.length; l < f; ++l)
        o[i[l]] = l;
      i.length <= 2 && i.length > 0 && (this.triangles = new Int32Array(3).fill(-1), this.halfedges = new Int32Array(3).fill(-1), this.triangles[0] = i[0], a[i[0]] = 1, i.length === 2 && (a[i[1]] = 0, this.triangles[1] = i[1], this.triangles[2] = i[1]));
    }
    voronoi(e) {
      return new be(this, e);
    }
    *neighbors(e) {
      let { inedges: n, hull: r, _hullIndex: i, halfedges: s, triangles: a, collinear: o } = this;
      if (o) {
        let c = o.indexOf(e);
        c > 0 && (yield o[c - 1]), c < o.length - 1 && (yield o[c + 1]);
        return;
      }
      let l = n[e];
      if (l === -1)
        return;
      let f = l, u = -1;
      do {
        if (yield u = a[f], f = f % 3 == 2 ? f - 2 : f + 1, a[f] !== e)
          return;
        if (f = s[f], f === -1) {
          let c = r[(i[e] + 1) % r.length];
          c !== u && (yield c);
          return;
        }
      } while (f !== l);
    }
    find(e, n, r = 0) {
      if (e = +e, e !== e || (n = +n, n !== n))
        return -1;
      let i = r, s;
      for (; (s = this._step(r, e, n)) >= 0 && s !== r && s !== i; )
        r = s;
      return s;
    }
    _step(e, n, r) {
      let { inedges: i, hull: s, _hullIndex: a, halfedges: o, triangles: l, points: f } = this;
      if (i[e] === -1 || !f.length)
        return (e + 1) % (f.length >> 1);
      let u = e, c = Dt(n - f[e * 2], 2) + Dt(r - f[e * 2 + 1], 2), h = i[e], p = h;
      do {
        let d = l[p], m = Dt(n - f[d * 2], 2) + Dt(r - f[d * 2 + 1], 2);
        if (m < c && (c = m, u = d), p = p % 3 == 2 ? p - 2 : p + 1, l[p] !== e)
          break;
        if (p = o[p], p === -1) {
          if (p = s[(a[e] + 1) % s.length], p !== d && Dt(n - f[p * 2], 2) + Dt(r - f[p * 2 + 1], 2) < c)
            return p;
          break;
        }
      } while (p !== h);
      return u;
    }
    render(e) {
      let n = e == null ? e = new K() : void 0, { points: r, halfedges: i, triangles: s } = this;
      for (let a = 0, o = i.length; a < o; ++a) {
        let l = i[a];
        if (l < a)
          continue;
        let f = s[a] * 2, u = s[l] * 2;
        e.moveTo(r[f], r[f + 1]), e.lineTo(r[u], r[u + 1]);
      }
      return this.renderHull(e), n && n.value();
    }
    renderPoints(e, n) {
      n === void 0 && (!e || typeof e.moveTo != "function") && (n = e, e = null), n = n == null ? 2 : +n;
      let r = e == null ? e = new K() : void 0, { points: i } = this;
      for (let s = 0, a = i.length; s < a; s += 2) {
        let o = i[s], l = i[s + 1];
        e.moveTo(o + n, l), e.arc(o, l, n, 0, Xo);
      }
      return r && r.value();
    }
    renderHull(e) {
      let n = e == null ? e = new K() : void 0, { hull: r, points: i } = this, s = r[0] * 2, a = r.length;
      e.moveTo(i[s], i[s + 1]);
      for (let o = 1; o < a; ++o) {
        let l = 2 * r[o];
        e.lineTo(i[l], i[l + 1]);
      }
      return e.closePath(), n && n.value();
    }
    hullPolygon() {
      let e = new It();
      return this.renderHull(e), e.value();
    }
    renderTriangle(e, n) {
      let r = n == null ? n = new K() : void 0, { points: i, triangles: s } = this, a = s[e *= 3] * 2, o = s[e + 1] * 2, l = s[e + 2] * 2;
      return n.moveTo(i[a], i[a + 1]), n.lineTo(i[o], i[o + 1]), n.lineTo(i[l], i[l + 1]), n.closePath(), r && r.value();
    }
    *trianglePolygons() {
      let { triangles: e } = this;
      for (let n = 0, r = e.length / 3; n < r; ++n)
        yield this.trianglePolygon(n);
    }
    trianglePolygon(e) {
      let n = new It();
      return this.renderTriangle(e, n), n.value();
    }
  };
  function Lo(t2, e, n, r) {
    let i = t2.length, s = new Float64Array(i * 2);
    for (let a = 0; a < i; ++a) {
      let o = t2[a];
      s[a * 2] = e.call(r, o, a, t2), s[a * 2 + 1] = n.call(r, o, a, t2);
    }
    return s;
  }
  function* Vo(t2, e, n, r) {
    let i = 0;
    for (let s of t2)
      yield e.call(r, s, i, t2), yield n.call(r, s, i, t2), ++i;
  }
  var Yo = { value: () => {
  } };
  function cr() {
    for (var t2 = 0, e = arguments.length, n = {}, r; t2 < e; ++t2) {
      if (!(r = arguments[t2] + "") || r in n || /[\s.]/.test(r))
        throw new Error("illegal type: " + r);
      n[r] = [];
    }
    return new je(n);
  }
  function je(t2) {
    this._ = t2;
  }
  function Ho(t2, e) {
    return t2.trim().split(/^|\s+/).map(function(n) {
      var r = "", i = n.indexOf(".");
      if (i >= 0 && (r = n.slice(i + 1), n = n.slice(0, i)), n && !e.hasOwnProperty(n))
        throw new Error("unknown type: " + n);
      return { type: n, name: r };
    });
  }
  je.prototype = cr.prototype = { constructor: je, on: function(t2, e) {
    var n = this._, r = Ho(t2 + "", n), i, s = -1, a = r.length;
    if (arguments.length < 2) {
      for (; ++s < a; )
        if ((i = (t2 = r[s]).type) && (i = Go(n[i], t2.name)))
          return i;
      return;
    }
    if (e != null && typeof e != "function")
      throw new Error("invalid callback: " + e);
    for (; ++s < a; )
      if (i = (t2 = r[s]).type)
        n[i] = fr(n[i], t2.name, e);
      else if (e == null)
        for (i in n)
          n[i] = fr(n[i], t2.name, null);
    return this;
  }, copy: function() {
    var t2 = {}, e = this._;
    for (var n in e)
      t2[n] = e[n].slice();
    return new je(t2);
  }, call: function(t2, e) {
    if ((i = arguments.length - 2) > 0)
      for (var n = new Array(i), r = 0, i, s; r < i; ++r)
        n[r] = arguments[r + 2];
    if (!this._.hasOwnProperty(t2))
      throw new Error("unknown type: " + t2);
    for (s = this._[t2], r = 0, i = s.length; r < i; ++r)
      s[r].value.apply(e, n);
  }, apply: function(t2, e, n) {
    if (!this._.hasOwnProperty(t2))
      throw new Error("unknown type: " + t2);
    for (var r = this._[t2], i = 0, s = r.length; i < s; ++i)
      r[i].value.apply(e, n);
  } };
  function Go(t2, e) {
    for (var n = 0, r = t2.length, i; n < r; ++n)
      if ((i = t2[n]).name === e)
        return i.value;
  }
  function fr(t2, e, n) {
    for (var r = 0, i = t2.length; r < i; ++r)
      if (t2[r].name === e) {
        t2[r] = Yo, t2 = t2.slice(0, r).concat(t2.slice(r + 1));
        break;
      }
    return n != null && t2.push({ name: e, value: n }), t2;
  }
  var xn = cr;
  var Me = "http://www.w3.org/1999/xhtml";
  var vn = { svg: "http://www.w3.org/2000/svg", xhtml: Me, xlink: "http://www.w3.org/1999/xlink", xml: "http://www.w3.org/XML/1998/namespace", xmlns: "http://www.w3.org/2000/xmlns/" };
  function it(t2) {
    var e = t2 += "", n = e.indexOf(":");
    return n >= 0 && (e = t2.slice(0, n)) !== "xmlns" && (t2 = t2.slice(n + 1)), vn.hasOwnProperty(e) ? { space: vn[e], local: t2 } : t2;
  }
  function $o(t2) {
    return function() {
      var e = this.ownerDocument, n = this.namespaceURI;
      return n === Me && e.documentElement.namespaceURI === Me ? e.createElement(t2) : e.createElementNS(n, t2);
    };
  }
  function Qo(t2) {
    return function() {
      return this.ownerDocument.createElementNS(t2.space, t2.local);
    };
  }
  function Ae(t2) {
    var e = it(t2);
    return (e.local ? Qo : $o)(e);
  }
  function Uo() {
  }
  function Ct(t2) {
    return t2 == null ? Uo : function() {
      return this.querySelector(t2);
    };
  }
  function hr(t2) {
    typeof t2 != "function" && (t2 = Ct(t2));
    for (var e = this._groups, n = e.length, r = new Array(n), i = 0; i < n; ++i)
      for (var s = e[i], a = s.length, o = r[i] = new Array(a), l, f, u = 0; u < a; ++u)
        (l = s[u]) && (f = t2.call(l, l.__data__, u, s)) && ("__data__" in l && (f.__data__ = l.__data__), o[u] = f);
    return new B(r, this._parents);
  }
  function _n(t2) {
    return t2 == null ? [] : Array.isArray(t2) ? t2 : Array.from(t2);
  }
  function Ko() {
    return [];
  }
  function Jt(t2) {
    return t2 == null ? Ko : function() {
      return this.querySelectorAll(t2);
    };
  }
  function Zo(t2) {
    return function() {
      return _n(t2.apply(this, arguments));
    };
  }
  function pr(t2) {
    typeof t2 == "function" ? t2 = Zo(t2) : t2 = Jt(t2);
    for (var e = this._groups, n = e.length, r = [], i = [], s = 0; s < n; ++s)
      for (var a = e[s], o = a.length, l, f = 0; f < o; ++f)
        (l = a[f]) && (r.push(t2.call(l, l.__data__, f, a)), i.push(l));
    return new B(r, i);
  }
  function te(t2) {
    return function() {
      return this.matches(t2);
    };
  }
  function ke(t2) {
    return function(e) {
      return e.matches(t2);
    };
  }
  var Wo = Array.prototype.find;
  function Jo(t2) {
    return function() {
      return Wo.call(this.children, t2);
    };
  }
  function ts() {
    return this.firstElementChild;
  }
  function dr(t2) {
    return this.select(t2 == null ? ts : Jo(typeof t2 == "function" ? t2 : ke(t2)));
  }
  var es = Array.prototype.filter;
  function ns() {
    return Array.from(this.children);
  }
  function rs(t2) {
    return function() {
      return es.call(this.children, t2);
    };
  }
  function mr(t2) {
    return this.selectAll(t2 == null ? ns : rs(typeof t2 == "function" ? t2 : ke(t2)));
  }
  function gr(t2) {
    typeof t2 != "function" && (t2 = te(t2));
    for (var e = this._groups, n = e.length, r = new Array(n), i = 0; i < n; ++i)
      for (var s = e[i], a = s.length, o = r[i] = [], l, f = 0; f < a; ++f)
        (l = s[f]) && t2.call(l, l.__data__, f, s) && o.push(l);
    return new B(r, this._parents);
  }
  function Te(t2) {
    return new Array(t2.length);
  }
  function xr() {
    return new B(this._enter || this._groups.map(Te), this._parents);
  }
  function ee(t2, e) {
    this.ownerDocument = t2.ownerDocument, this.namespaceURI = t2.namespaceURI, this._next = null, this._parent = t2, this.__data__ = e;
  }
  ee.prototype = { constructor: ee, appendChild: function(t2) {
    return this._parent.insertBefore(t2, this._next);
  }, insertBefore: function(t2, e) {
    return this._parent.insertBefore(t2, e);
  }, querySelector: function(t2) {
    return this._parent.querySelector(t2);
  }, querySelectorAll: function(t2) {
    return this._parent.querySelectorAll(t2);
  } };
  function vr(t2) {
    return function() {
      return t2;
    };
  }
  function is(t2, e, n, r, i, s) {
    for (var a = 0, o, l = e.length, f = s.length; a < f; ++a)
      (o = e[a]) ? (o.__data__ = s[a], r[a] = o) : n[a] = new ee(t2, s[a]);
    for (; a < l; ++a)
      (o = e[a]) && (i[a] = o);
  }
  function os(t2, e, n, r, i, s, a) {
    var o, l, f = new Map(), u = e.length, c = s.length, h = new Array(u), p;
    for (o = 0; o < u; ++o)
      (l = e[o]) && (h[o] = p = a.call(l, l.__data__, o, e) + "", f.has(p) ? i[o] = l : f.set(p, l));
    for (o = 0; o < c; ++o)
      p = a.call(t2, s[o], o, s) + "", (l = f.get(p)) ? (r[o] = l, l.__data__ = s[o], f.delete(p)) : n[o] = new ee(t2, s[o]);
    for (o = 0; o < u; ++o)
      (l = e[o]) && f.get(h[o]) === l && (i[o] = l);
  }
  function ss(t2) {
    return t2.__data__;
  }
  function _r(t2, e) {
    if (!arguments.length)
      return Array.from(this, ss);
    var n = e ? os : is, r = this._parents, i = this._groups;
    typeof t2 != "function" && (t2 = vr(t2));
    for (var s = i.length, a = new Array(s), o = new Array(s), l = new Array(s), f = 0; f < s; ++f) {
      var u = r[f], c = i[f], h = c.length, p = as(t2.call(u, u && u.__data__, f, r)), d = p.length, m = o[f] = new Array(d), x = a[f] = new Array(d), _ = l[f] = new Array(h);
      n(u, c, m, x, _, p, e);
      for (var b = 0, y = 0, w, T; b < d; ++b)
        if (w = m[b]) {
          for (b >= y && (y = b + 1); !(T = x[y]) && ++y < d; )
            ;
          w._next = T || null;
        }
    }
    return a = new B(a, r), a._enter = o, a._exit = l, a;
  }
  function as(t2) {
    return typeof t2 == "object" && "length" in t2 ? t2 : Array.from(t2);
  }
  function yr() {
    return new B(this._exit || this._groups.map(Te), this._parents);
  }
  function wr(t2, e, n) {
    var r = this.enter(), i = this, s = this.exit();
    return typeof t2 == "function" ? (r = t2(r), r && (r = r.selection())) : r = r.append(t2 + ""), e != null && (i = e(i), i && (i = i.selection())), n == null ? s.remove() : n(s), r && i ? r.merge(i).order() : i;
  }
  function br(t2) {
    for (var e = t2.selection ? t2.selection() : t2, n = this._groups, r = e._groups, i = n.length, s = r.length, a = Math.min(i, s), o = new Array(i), l = 0; l < a; ++l)
      for (var f = n[l], u = r[l], c = f.length, h = o[l] = new Array(c), p, d = 0; d < c; ++d)
        (p = f[d] || u[d]) && (h[d] = p);
    for (; l < i; ++l)
      o[l] = n[l];
    return new B(o, this._parents);
  }
  function jr() {
    for (var t2 = this._groups, e = -1, n = t2.length; ++e < n; )
      for (var r = t2[e], i = r.length - 1, s = r[i], a; --i >= 0; )
        (a = r[i]) && (s && a.compareDocumentPosition(s) ^ 4 && s.parentNode.insertBefore(a, s), s = a);
    return this;
  }
  function Mr(t2) {
    t2 || (t2 = ls);
    function e(c, h) {
      return c && h ? t2(c.__data__, h.__data__) : !c - !h;
    }
    for (var n = this._groups, r = n.length, i = new Array(r), s = 0; s < r; ++s) {
      for (var a = n[s], o = a.length, l = i[s] = new Array(o), f, u = 0; u < o; ++u)
        (f = a[u]) && (l[u] = f);
      l.sort(e);
    }
    return new B(i, this._parents).order();
  }
  function ls(t2, e) {
    return t2 < e ? -1 : t2 > e ? 1 : t2 >= e ? 0 : NaN;
  }
  function Ar() {
    var t2 = arguments[0];
    return arguments[0] = this, t2.apply(null, arguments), this;
  }
  function kr() {
    return Array.from(this);
  }
  function Tr() {
    for (var t2 = this._groups, e = 0, n = t2.length; e < n; ++e)
      for (var r = t2[e], i = 0, s = r.length; i < s; ++i) {
        var a = r[i];
        if (a)
          return a;
      }
    return null;
  }
  function Ir() {
    let t2 = 0;
    for (let e of this)
      ++t2;
    return t2;
  }
  function Sr() {
    return !this.node();
  }
  function Cr(t2) {
    for (var e = this._groups, n = 0, r = e.length; n < r; ++n)
      for (var i = e[n], s = 0, a = i.length, o; s < a; ++s)
        (o = i[s]) && t2.call(o, o.__data__, s, i);
    return this;
  }
  function us(t2) {
    return function() {
      this.removeAttribute(t2);
    };
  }
  function cs(t2) {
    return function() {
      this.removeAttributeNS(t2.space, t2.local);
    };
  }
  function fs(t2, e) {
    return function() {
      this.setAttribute(t2, e);
    };
  }
  function hs(t2, e) {
    return function() {
      this.setAttributeNS(t2.space, t2.local, e);
    };
  }
  function ps(t2, e) {
    return function() {
      var n = e.apply(this, arguments);
      n == null ? this.removeAttribute(t2) : this.setAttribute(t2, n);
    };
  }
  function ds(t2, e) {
    return function() {
      var n = e.apply(this, arguments);
      n == null ? this.removeAttributeNS(t2.space, t2.local) : this.setAttributeNS(t2.space, t2.local, n);
    };
  }
  function Er(t2, e) {
    var n = it(t2);
    if (arguments.length < 2) {
      var r = this.node();
      return n.local ? r.getAttributeNS(n.space, n.local) : r.getAttribute(n);
    }
    return this.each((e == null ? n.local ? cs : us : typeof e == "function" ? n.local ? ds : ps : n.local ? hs : fs)(n, e));
  }
  function Ie(t2) {
    return t2.ownerDocument && t2.ownerDocument.defaultView || t2.document && t2 || t2.defaultView;
  }
  function ms(t2) {
    return function() {
      this.style.removeProperty(t2);
    };
  }
  function gs(t2, e, n) {
    return function() {
      this.style.setProperty(t2, e, n);
    };
  }
  function xs(t2, e, n) {
    return function() {
      var r = e.apply(this, arguments);
      r == null ? this.style.removeProperty(t2) : this.style.setProperty(t2, r, n);
    };
  }
  function Nr(t2, e, n) {
    return arguments.length > 1 ? this.each((e == null ? ms : typeof e == "function" ? xs : gs)(t2, e, n ?? "")) : ct(this.node(), t2);
  }
  function ct(t2, e) {
    return t2.style.getPropertyValue(e) || Ie(t2).getComputedStyle(t2, null).getPropertyValue(e);
  }
  function vs(t2) {
    return function() {
      delete this[t2];
    };
  }
  function _s(t2, e) {
    return function() {
      this[t2] = e;
    };
  }
  function ys(t2, e) {
    return function() {
      var n = e.apply(this, arguments);
      n == null ? delete this[t2] : this[t2] = n;
    };
  }
  function Or(t2, e) {
    return arguments.length > 1 ? this.each((e == null ? vs : typeof e == "function" ? ys : _s)(t2, e)) : this.node()[t2];
  }
  function Pr(t2) {
    return t2.trim().split(/^|\s+/);
  }
  function yn(t2) {
    return t2.classList || new Dr(t2);
  }
  function Dr(t2) {
    this._node = t2, this._names = Pr(t2.getAttribute("class") || "");
  }
  Dr.prototype = { add: function(t2) {
    var e = this._names.indexOf(t2);
    e < 0 && (this._names.push(t2), this._node.setAttribute("class", this._names.join(" ")));
  }, remove: function(t2) {
    var e = this._names.indexOf(t2);
    e >= 0 && (this._names.splice(e, 1), this._node.setAttribute("class", this._names.join(" ")));
  }, contains: function(t2) {
    return this._names.indexOf(t2) >= 0;
  } };
  function qr(t2, e) {
    for (var n = yn(t2), r = -1, i = e.length; ++r < i; )
      n.add(e[r]);
  }
  function Xr(t2, e) {
    for (var n = yn(t2), r = -1, i = e.length; ++r < i; )
      n.remove(e[r]);
  }
  function ws(t2) {
    return function() {
      qr(this, t2);
    };
  }
  function bs(t2) {
    return function() {
      Xr(this, t2);
    };
  }
  function js(t2, e) {
    return function() {
      (e.apply(this, arguments) ? qr : Xr)(this, t2);
    };
  }
  function zr(t2, e) {
    var n = Pr(t2 + "");
    if (arguments.length < 2) {
      for (var r = yn(this.node()), i = -1, s = n.length; ++i < s; )
        if (!r.contains(n[i]))
          return false;
      return true;
    }
    return this.each((typeof e == "function" ? js : e ? ws : bs)(n, e));
  }
  function Ms() {
    this.textContent = "";
  }
  function As(t2) {
    return function() {
      this.textContent = t2;
    };
  }
  function ks(t2) {
    return function() {
      var e = t2.apply(this, arguments);
      this.textContent = e ?? "";
    };
  }
  function Rr(t2) {
    return arguments.length ? this.each(t2 == null ? Ms : (typeof t2 == "function" ? ks : As)(t2)) : this.node().textContent;
  }
  function Ts() {
    this.innerHTML = "";
  }
  function Is(t2) {
    return function() {
      this.innerHTML = t2;
    };
  }
  function Ss(t2) {
    return function() {
      var e = t2.apply(this, arguments);
      this.innerHTML = e ?? "";
    };
  }
  function Br(t2) {
    return arguments.length ? this.each(t2 == null ? Ts : (typeof t2 == "function" ? Ss : Is)(t2)) : this.node().innerHTML;
  }
  function Cs() {
    this.nextSibling && this.parentNode.appendChild(this);
  }
  function Fr() {
    return this.each(Cs);
  }
  function Es() {
    this.previousSibling && this.parentNode.insertBefore(this, this.parentNode.firstChild);
  }
  function Lr() {
    return this.each(Es);
  }
  function Vr(t2) {
    var e = typeof t2 == "function" ? t2 : Ae(t2);
    return this.select(function() {
      return this.appendChild(e.apply(this, arguments));
    });
  }
  function Ns() {
    return null;
  }
  function Yr(t2, e) {
    var n = typeof t2 == "function" ? t2 : Ae(t2), r = e == null ? Ns : typeof e == "function" ? e : Ct(e);
    return this.select(function() {
      return this.insertBefore(n.apply(this, arguments), r.apply(this, arguments) || null);
    });
  }
  function Os() {
    var t2 = this.parentNode;
    t2 && t2.removeChild(this);
  }
  function Hr() {
    return this.each(Os);
  }
  function Ps() {
    var t2 = this.cloneNode(false), e = this.parentNode;
    return e ? e.insertBefore(t2, this.nextSibling) : t2;
  }
  function Ds() {
    var t2 = this.cloneNode(true), e = this.parentNode;
    return e ? e.insertBefore(t2, this.nextSibling) : t2;
  }
  function Gr(t2) {
    return this.select(t2 ? Ds : Ps);
  }
  function $r(t2) {
    return arguments.length ? this.property("__data__", t2) : this.node().__data__;
  }
  function qs(t2) {
    return function(e) {
      t2.call(this, e, this.__data__);
    };
  }
  function Xs(t2) {
    return t2.trim().split(/^|\s+/).map(function(e) {
      var n = "", r = e.indexOf(".");
      return r >= 0 && (n = e.slice(r + 1), e = e.slice(0, r)), { type: e, name: n };
    });
  }
  function zs(t2) {
    return function() {
      var e = this.__on;
      if (!!e) {
        for (var n = 0, r = -1, i = e.length, s; n < i; ++n)
          s = e[n], (!t2.type || s.type === t2.type) && s.name === t2.name ? this.removeEventListener(s.type, s.listener, s.options) : e[++r] = s;
        ++r ? e.length = r : delete this.__on;
      }
    };
  }
  function Rs(t2, e, n) {
    return function() {
      var r = this.__on, i, s = qs(e);
      if (r) {
        for (var a = 0, o = r.length; a < o; ++a)
          if ((i = r[a]).type === t2.type && i.name === t2.name) {
            this.removeEventListener(i.type, i.listener, i.options), this.addEventListener(i.type, i.listener = s, i.options = n), i.value = e;
            return;
          }
      }
      this.addEventListener(t2.type, s, n), i = { type: t2.type, name: t2.name, value: e, listener: s, options: n }, r ? r.push(i) : this.__on = [i];
    };
  }
  function Qr(t2, e, n) {
    var r = Xs(t2 + ""), i, s = r.length, a;
    if (arguments.length < 2) {
      var o = this.node().__on;
      if (o) {
        for (var l = 0, f = o.length, u; l < f; ++l)
          for (i = 0, u = o[l]; i < s; ++i)
            if ((a = r[i]).type === u.type && a.name === u.name)
              return u.value;
      }
      return;
    }
    for (o = e ? Rs : zs, i = 0; i < s; ++i)
      this.each(o(r[i], e, n));
    return this;
  }
  function Ur(t2, e, n) {
    var r = Ie(t2), i = r.CustomEvent;
    typeof i == "function" ? i = new i(e, n) : (i = r.document.createEvent("Event"), n ? (i.initEvent(e, n.bubbles, n.cancelable), i.detail = n.detail) : i.initEvent(e, false, false)), t2.dispatchEvent(i);
  }
  function Bs(t2, e) {
    return function() {
      return Ur(this, t2, e);
    };
  }
  function Fs(t2, e) {
    return function() {
      return Ur(this, t2, e.apply(this, arguments));
    };
  }
  function Kr(t2, e) {
    return this.each((typeof e == "function" ? Fs : Bs)(t2, e));
  }
  function* Zr() {
    for (var t2 = this._groups, e = 0, n = t2.length; e < n; ++e)
      for (var r = t2[e], i = 0, s = r.length, a; i < s; ++i)
        (a = r[i]) && (yield a);
  }
  var Ls = [null];
  function B(t2, e) {
    this._groups = t2, this._parents = e;
  }
  function Wr() {
    return new B([[document.documentElement]], Ls);
  }
  function Vs() {
    return this;
  }
  B.prototype = Wr.prototype = { constructor: B, select: hr, selectAll: pr, selectChild: dr, selectChildren: mr, filter: gr, data: _r, enter: xr, exit: yr, join: wr, merge: br, selection: Vs, order: jr, sort: Mr, call: Ar, nodes: kr, node: Tr, size: Ir, empty: Sr, each: Cr, attr: Er, style: Nr, property: Or, classed: zr, text: Rr, html: Br, raise: Fr, lower: Lr, append: Vr, insert: Yr, remove: Hr, clone: Gr, datum: $r, on: Qr, dispatch: Kr, [Symbol.iterator]: Zr };
  var ot = Wr;
  function Se(t2, e, n) {
    t2.prototype = e.prototype = n, n.constructor = t2;
  }
  function wn(t2, e) {
    var n = Object.create(t2.prototype);
    for (var r in e)
      n[r] = e[r];
    return n;
  }
  function ne() {
  }
  var re = 0.7;
  var Ce = 1 / re;
  var qt = "\\s*([+-]?\\d+)\\s*";
  var ie = "\\s*([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)\\s*";
  var W = "\\s*([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)%\\s*";
  var Ys = /^#([0-9a-f]{3,8})$/;
  var Hs = new RegExp("^rgb\\(" + [qt, qt, qt] + "\\)$");
  var Gs = new RegExp("^rgb\\(" + [W, W, W] + "\\)$");
  var $s = new RegExp("^rgba\\(" + [qt, qt, qt, ie] + "\\)$");
  var Qs = new RegExp("^rgba\\(" + [W, W, W, ie] + "\\)$");
  var Us = new RegExp("^hsl\\(" + [ie, W, W] + "\\)$");
  var Ks = new RegExp("^hsla\\(" + [ie, W, W, ie] + "\\)$");
  var Jr = { aliceblue: 15792383, antiquewhite: 16444375, aqua: 65535, aquamarine: 8388564, azure: 15794175, beige: 16119260, bisque: 16770244, black: 0, blanchedalmond: 16772045, blue: 255, blueviolet: 9055202, brown: 10824234, burlywood: 14596231, cadetblue: 6266528, chartreuse: 8388352, chocolate: 13789470, coral: 16744272, cornflowerblue: 6591981, cornsilk: 16775388, crimson: 14423100, cyan: 65535, darkblue: 139, darkcyan: 35723, darkgoldenrod: 12092939, darkgray: 11119017, darkgreen: 25600, darkgrey: 11119017, darkkhaki: 12433259, darkmagenta: 9109643, darkolivegreen: 5597999, darkorange: 16747520, darkorchid: 10040012, darkred: 9109504, darksalmon: 15308410, darkseagreen: 9419919, darkslateblue: 4734347, darkslategray: 3100495, darkslategrey: 3100495, darkturquoise: 52945, darkviolet: 9699539, deeppink: 16716947, deepskyblue: 49151, dimgray: 6908265, dimgrey: 6908265, dodgerblue: 2003199, firebrick: 11674146, floralwhite: 16775920, forestgreen: 2263842, fuchsia: 16711935, gainsboro: 14474460, ghostwhite: 16316671, gold: 16766720, goldenrod: 14329120, gray: 8421504, green: 32768, greenyellow: 11403055, grey: 8421504, honeydew: 15794160, hotpink: 16738740, indianred: 13458524, indigo: 4915330, ivory: 16777200, khaki: 15787660, lavender: 15132410, lavenderblush: 16773365, lawngreen: 8190976, lemonchiffon: 16775885, lightblue: 11393254, lightcoral: 15761536, lightcyan: 14745599, lightgoldenrodyellow: 16448210, lightgray: 13882323, lightgreen: 9498256, lightgrey: 13882323, lightpink: 16758465, lightsalmon: 16752762, lightseagreen: 2142890, lightskyblue: 8900346, lightslategray: 7833753, lightslategrey: 7833753, lightsteelblue: 11584734, lightyellow: 16777184, lime: 65280, limegreen: 3329330, linen: 16445670, magenta: 16711935, maroon: 8388608, mediumaquamarine: 6737322, mediumblue: 205, mediumorchid: 12211667, mediumpurple: 9662683, mediumseagreen: 3978097, mediumslateblue: 8087790, mediumspringgreen: 64154, mediumturquoise: 4772300, mediumvioletred: 13047173, midnightblue: 1644912, mintcream: 16121850, mistyrose: 16770273, moccasin: 16770229, navajowhite: 16768685, navy: 128, oldlace: 16643558, olive: 8421376, olivedrab: 7048739, orange: 16753920, orangered: 16729344, orchid: 14315734, palegoldenrod: 15657130, palegreen: 10025880, paleturquoise: 11529966, palevioletred: 14381203, papayawhip: 16773077, peachpuff: 16767673, peru: 13468991, pink: 16761035, plum: 14524637, powderblue: 11591910, purple: 8388736, rebeccapurple: 6697881, red: 16711680, rosybrown: 12357519, royalblue: 4286945, saddlebrown: 9127187, salmon: 16416882, sandybrown: 16032864, seagreen: 3050327, seashell: 16774638, sienna: 10506797, silver: 12632256, skyblue: 8900331, slateblue: 6970061, slategray: 7372944, slategrey: 7372944, snow: 16775930, springgreen: 65407, steelblue: 4620980, tan: 13808780, teal: 32896, thistle: 14204888, tomato: 16737095, turquoise: 4251856, violet: 15631086, wheat: 16113331, white: 16777215, whitesmoke: 16119285, yellow: 16776960, yellowgreen: 10145074 };
  Se(ne, ft, { copy: function(t2) {
    return Object.assign(new this.constructor(), this, t2);
  }, displayable: function() {
    return this.rgb().displayable();
  }, hex: ti, formatHex: ti, formatHsl: Zs, formatRgb: ei, toString: ei });
  function ti() {
    return this.rgb().formatHex();
  }
  function Zs() {
    return si(this).formatHsl();
  }
  function ei() {
    return this.rgb().formatRgb();
  }
  function ft(t2) {
    var e, n;
    return t2 = (t2 + "").trim().toLowerCase(), (e = Ys.exec(t2)) ? (n = e[1].length, e = parseInt(e[1], 16), n === 6 ? ni(e) : n === 3 ? new $(e >> 8 & 15 | e >> 4 & 240, e >> 4 & 15 | e & 240, (e & 15) << 4 | e & 15, 1) : n === 8 ? Ee(e >> 24 & 255, e >> 16 & 255, e >> 8 & 255, (e & 255) / 255) : n === 4 ? Ee(e >> 12 & 15 | e >> 8 & 240, e >> 8 & 15 | e >> 4 & 240, e >> 4 & 15 | e & 240, ((e & 15) << 4 | e & 15) / 255) : null) : (e = Hs.exec(t2)) ? new $(e[1], e[2], e[3], 1) : (e = Gs.exec(t2)) ? new $(e[1] * 255 / 100, e[2] * 255 / 100, e[3] * 255 / 100, 1) : (e = $s.exec(t2)) ? Ee(e[1], e[2], e[3], e[4]) : (e = Qs.exec(t2)) ? Ee(e[1] * 255 / 100, e[2] * 255 / 100, e[3] * 255 / 100, e[4]) : (e = Us.exec(t2)) ? oi(e[1], e[2] / 100, e[3] / 100, 1) : (e = Ks.exec(t2)) ? oi(e[1], e[2] / 100, e[3] / 100, e[4]) : Jr.hasOwnProperty(t2) ? ni(Jr[t2]) : t2 === "transparent" ? new $(NaN, NaN, NaN, 0) : null;
  }
  function ni(t2) {
    return new $(t2 >> 16 & 255, t2 >> 8 & 255, t2 & 255, 1);
  }
  function Ee(t2, e, n, r) {
    return r <= 0 && (t2 = e = n = NaN), new $(t2, e, n, r);
  }
  function Ws(t2) {
    return t2 instanceof ne || (t2 = ft(t2)), t2 ? (t2 = t2.rgb(), new $(t2.r, t2.g, t2.b, t2.opacity)) : new $();
  }
  function Xt(t2, e, n, r) {
    return arguments.length === 1 ? Ws(t2) : new $(t2, e, n, r ?? 1);
  }
  function $(t2, e, n, r) {
    this.r = +t2, this.g = +e, this.b = +n, this.opacity = +r;
  }
  Se($, Xt, wn(ne, { brighter: function(t2) {
    return t2 = t2 == null ? Ce : Math.pow(Ce, t2), new $(this.r * t2, this.g * t2, this.b * t2, this.opacity);
  }, darker: function(t2) {
    return t2 = t2 == null ? re : Math.pow(re, t2), new $(this.r * t2, this.g * t2, this.b * t2, this.opacity);
  }, rgb: function() {
    return this;
  }, displayable: function() {
    return -0.5 <= this.r && this.r < 255.5 && -0.5 <= this.g && this.g < 255.5 && -0.5 <= this.b && this.b < 255.5 && 0 <= this.opacity && this.opacity <= 1;
  }, hex: ri, formatHex: ri, formatRgb: ii, toString: ii }));
  function ri() {
    return "#" + bn(this.r) + bn(this.g) + bn(this.b);
  }
  function ii() {
    var t2 = this.opacity;
    return t2 = isNaN(t2) ? 1 : Math.max(0, Math.min(1, t2)), (t2 === 1 ? "rgb(" : "rgba(") + Math.max(0, Math.min(255, Math.round(this.r) || 0)) + ", " + Math.max(0, Math.min(255, Math.round(this.g) || 0)) + ", " + Math.max(0, Math.min(255, Math.round(this.b) || 0)) + (t2 === 1 ? ")" : ", " + t2 + ")");
  }
  function bn(t2) {
    return t2 = Math.max(0, Math.min(255, Math.round(t2) || 0)), (t2 < 16 ? "0" : "") + t2.toString(16);
  }
  function oi(t2, e, n, r) {
    return r <= 0 ? t2 = e = n = NaN : n <= 0 || n >= 1 ? t2 = e = NaN : e <= 0 && (t2 = NaN), new J(t2, e, n, r);
  }
  function si(t2) {
    if (t2 instanceof J)
      return new J(t2.h, t2.s, t2.l, t2.opacity);
    if (t2 instanceof ne || (t2 = ft(t2)), !t2)
      return new J();
    if (t2 instanceof J)
      return t2;
    t2 = t2.rgb();
    var e = t2.r / 255, n = t2.g / 255, r = t2.b / 255, i = Math.min(e, n, r), s = Math.max(e, n, r), a = NaN, o = s - i, l = (s + i) / 2;
    return o ? (e === s ? a = (n - r) / o + (n < r) * 6 : n === s ? a = (r - e) / o + 2 : a = (e - n) / o + 4, o /= l < 0.5 ? s + i : 2 - s - i, a *= 60) : o = l > 0 && l < 1 ? 0 : a, new J(a, o, l, t2.opacity);
  }
  function ai(t2, e, n, r) {
    return arguments.length === 1 ? si(t2) : new J(t2, e, n, r ?? 1);
  }
  function J(t2, e, n, r) {
    this.h = +t2, this.s = +e, this.l = +n, this.opacity = +r;
  }
  Se(J, ai, wn(ne, { brighter: function(t2) {
    return t2 = t2 == null ? Ce : Math.pow(Ce, t2), new J(this.h, this.s, this.l * t2, this.opacity);
  }, darker: function(t2) {
    return t2 = t2 == null ? re : Math.pow(re, t2), new J(this.h, this.s, this.l * t2, this.opacity);
  }, rgb: function() {
    var t2 = this.h % 360 + (this.h < 0) * 360, e = isNaN(t2) || isNaN(this.s) ? 0 : this.s, n = this.l, r = n + (n < 0.5 ? n : 1 - n) * e, i = 2 * n - r;
    return new $(jn(t2 >= 240 ? t2 - 240 : t2 + 120, i, r), jn(t2, i, r), jn(t2 < 120 ? t2 + 240 : t2 - 120, i, r), this.opacity);
  }, displayable: function() {
    return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1;
  }, formatHsl: function() {
    var t2 = this.opacity;
    return t2 = isNaN(t2) ? 1 : Math.max(0, Math.min(1, t2)), (t2 === 1 ? "hsl(" : "hsla(") + (this.h || 0) + ", " + (this.s || 0) * 100 + "%, " + (this.l || 0) * 100 + "%" + (t2 === 1 ? ")" : ", " + t2 + ")");
  } }));
  function jn(t2, e, n) {
    return (t2 < 60 ? e + (n - e) * t2 / 60 : t2 < 180 ? n : t2 < 240 ? e + (n - e) * (240 - t2) / 60 : e) * 255;
  }
  function Mn(t2, e, n, r, i) {
    var s = t2 * t2, a = s * t2;
    return ((1 - 3 * t2 + 3 * s - a) * e + (4 - 6 * s + 3 * a) * n + (1 + 3 * t2 + 3 * s - 3 * a) * r + a * i) / 6;
  }
  function li(t2) {
    var e = t2.length - 1;
    return function(n) {
      var r = n <= 0 ? n = 0 : n >= 1 ? (n = 1, e - 1) : Math.floor(n * e), i = t2[r], s = t2[r + 1], a = r > 0 ? t2[r - 1] : 2 * i - s, o = r < e - 1 ? t2[r + 2] : 2 * s - i;
      return Mn((n - r / e) * e, a, i, s, o);
    };
  }
  function ui(t2) {
    var e = t2.length;
    return function(n) {
      var r = Math.floor(((n %= 1) < 0 ? ++n : n) * e), i = t2[(r + e - 1) % e], s = t2[r % e], a = t2[(r + 1) % e], o = t2[(r + 2) % e];
      return Mn((n - r / e) * e, i, s, a, o);
    };
  }
  var An = (t2) => () => t2;
  function Js(t2, e) {
    return function(n) {
      return t2 + n * e;
    };
  }
  function ta(t2, e, n) {
    return t2 = Math.pow(t2, n), e = Math.pow(e, n) - t2, n = 1 / n, function(r) {
      return Math.pow(t2 + r * e, n);
    };
  }
  function ci(t2) {
    return (t2 = +t2) == 1 ? Ne : function(e, n) {
      return n - e ? ta(e, n, t2) : An(isNaN(e) ? n : e);
    };
  }
  function Ne(t2, e) {
    var n = e - t2;
    return n ? Js(t2, n) : An(isNaN(t2) ? e : t2);
  }
  var Oe = function t(e) {
    var n = ci(e);
    function r(i, s) {
      var a = n((i = Xt(i)).r, (s = Xt(s)).r), o = n(i.g, s.g), l = n(i.b, s.b), f = Ne(i.opacity, s.opacity);
      return function(u) {
        return i.r = a(u), i.g = o(u), i.b = l(u), i.opacity = f(u), i + "";
      };
    }
    return r.gamma = t, r;
  }(1);
  function fi(t2) {
    return function(e) {
      var n = e.length, r = new Array(n), i = new Array(n), s = new Array(n), a, o;
      for (a = 0; a < n; ++a)
        o = Xt(e[a]), r[a] = o.r || 0, i[a] = o.g || 0, s[a] = o.b || 0;
      return r = t2(r), i = t2(i), s = t2(s), o.opacity = 1, function(l) {
        return o.r = r(l), o.g = i(l), o.b = s(l), o + "";
      };
    };
  }
  var ea = fi(li);
  var na = fi(ui);
  function Q(t2, e) {
    return t2 = +t2, e = +e, function(n) {
      return t2 * (1 - n) + e * n;
    };
  }
  var kn = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g;
  var Tn = new RegExp(kn.source, "g");
  function ra(t2) {
    return function() {
      return t2;
    };
  }
  function ia(t2) {
    return function(e) {
      return t2(e) + "";
    };
  }
  function In(t2, e) {
    var n = kn.lastIndex = Tn.lastIndex = 0, r, i, s, a = -1, o = [], l = [];
    for (t2 = t2 + "", e = e + ""; (r = kn.exec(t2)) && (i = Tn.exec(e)); )
      (s = i.index) > n && (s = e.slice(n, s), o[a] ? o[a] += s : o[++a] = s), (r = r[0]) === (i = i[0]) ? o[a] ? o[a] += i : o[++a] = i : (o[++a] = null, l.push({ i: a, x: Q(r, i) })), n = Tn.lastIndex;
    return n < e.length && (s = e.slice(n), o[a] ? o[a] += s : o[++a] = s), o.length < 2 ? l[0] ? ia(l[0].x) : ra(e) : (e = l.length, function(f) {
      for (var u = 0, c; u < e; ++u)
        o[(c = l[u]).i] = c.x(f);
      return o.join("");
    });
  }
  var hi = 180 / Math.PI;
  var Pe = { translateX: 0, translateY: 0, rotate: 0, skewX: 0, scaleX: 1, scaleY: 1 };
  function Sn(t2, e, n, r, i, s) {
    var a, o, l;
    return (a = Math.sqrt(t2 * t2 + e * e)) && (t2 /= a, e /= a), (l = t2 * n + e * r) && (n -= t2 * l, r -= e * l), (o = Math.sqrt(n * n + r * r)) && (n /= o, r /= o, l /= o), t2 * r < e * n && (t2 = -t2, e = -e, l = -l, a = -a), { translateX: i, translateY: s, rotate: Math.atan2(e, t2) * hi, skewX: Math.atan(l) * hi, scaleX: a, scaleY: o };
  }
  var De;
  function pi(t2) {
    let e = new (typeof DOMMatrix == "function" ? DOMMatrix : WebKitCSSMatrix)(t2 + "");
    return e.isIdentity ? Pe : Sn(e.a, e.b, e.c, e.d, e.e, e.f);
  }
  function di(t2) {
    return t2 == null ? Pe : (De || (De = document.createElementNS("http://www.w3.org/2000/svg", "g")), De.setAttribute("transform", t2), (t2 = De.transform.baseVal.consolidate()) ? (t2 = t2.matrix, Sn(t2.a, t2.b, t2.c, t2.d, t2.e, t2.f)) : Pe);
  }
  function mi(t2, e, n, r) {
    function i(f) {
      return f.length ? f.pop() + " " : "";
    }
    function s(f, u, c, h, p, d) {
      if (f !== c || u !== h) {
        var m = p.push("translate(", null, e, null, n);
        d.push({ i: m - 4, x: Q(f, c) }, { i: m - 2, x: Q(u, h) });
      } else
        (c || h) && p.push("translate(" + c + e + h + n);
    }
    function a(f, u, c, h) {
      f !== u ? (f - u > 180 ? u += 360 : u - f > 180 && (f += 360), h.push({ i: c.push(i(c) + "rotate(", null, r) - 2, x: Q(f, u) })) : u && c.push(i(c) + "rotate(" + u + r);
    }
    function o(f, u, c, h) {
      f !== u ? h.push({ i: c.push(i(c) + "skewX(", null, r) - 2, x: Q(f, u) }) : u && c.push(i(c) + "skewX(" + u + r);
    }
    function l(f, u, c, h, p, d) {
      if (f !== c || u !== h) {
        var m = p.push(i(p) + "scale(", null, ",", null, ")");
        d.push({ i: m - 4, x: Q(f, c) }, { i: m - 2, x: Q(u, h) });
      } else
        (c !== 1 || h !== 1) && p.push(i(p) + "scale(" + c + "," + h + ")");
    }
    return function(f, u) {
      var c = [], h = [];
      return f = t2(f), u = t2(u), s(f.translateX, f.translateY, u.translateX, u.translateY, c, h), a(f.rotate, u.rotate, c, h), o(f.skewX, u.skewX, c, h), l(f.scaleX, f.scaleY, u.scaleX, u.scaleY, c, h), f = u = null, function(p) {
        for (var d = -1, m = h.length, x; ++d < m; )
          c[(x = h[d]).i] = x.x(p);
        return c.join("");
      };
    };
  }
  var Cn = mi(pi, "px, ", "px)", "deg)");
  var En = mi(di, ", ", ")", ")");
  var zt = 0;
  var oe = 0;
  var se = 0;
  var gi = 1e3;
  var qe;
  var ae;
  var Xe = 0;
  var Et = 0;
  var ze = 0;
  var le = typeof performance == "object" && performance.now ? performance : Date;
  var xi = typeof window == "object" && window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : function(t2) {
    setTimeout(t2, 17);
  };
  function ue() {
    return Et || (xi(oa), Et = le.now() + ze);
  }
  function oa() {
    Et = 0;
  }
  function ce() {
    this._call = this._time = this._next = null;
  }
  ce.prototype = Re.prototype = { constructor: ce, restart: function(t2, e, n) {
    if (typeof t2 != "function")
      throw new TypeError("callback is not a function");
    n = (n == null ? ue() : +n) + (e == null ? 0 : +e), !this._next && ae !== this && (ae ? ae._next = this : qe = this, ae = this), this._call = t2, this._time = n, Nn();
  }, stop: function() {
    this._call && (this._call = null, this._time = Infinity, Nn());
  } };
  function Re(t2, e, n) {
    var r = new ce();
    return r.restart(t2, e, n), r;
  }
  function vi() {
    ue(), ++zt;
    for (var t2 = qe, e; t2; )
      (e = Et - t2._time) >= 0 && t2._call.call(void 0, e), t2 = t2._next;
    --zt;
  }
  function _i() {
    Et = (Xe = le.now()) + ze, zt = oe = 0;
    try {
      vi();
    } finally {
      zt = 0, aa(), Et = 0;
    }
  }
  function sa() {
    var t2 = le.now(), e = t2 - Xe;
    e > gi && (ze -= e, Xe = t2);
  }
  function aa() {
    for (var t2, e = qe, n, r = Infinity; e; )
      e._call ? (r > e._time && (r = e._time), t2 = e, e = e._next) : (n = e._next, e._next = null, e = t2 ? t2._next = n : qe = n);
    ae = t2, Nn(r);
  }
  function Nn(t2) {
    if (!zt) {
      oe && (oe = clearTimeout(oe));
      var e = t2 - Et;
      e > 24 ? (t2 < Infinity && (oe = setTimeout(_i, t2 - le.now() - ze)), se && (se = clearInterval(se))) : (se || (Xe = le.now(), se = setInterval(sa, gi)), zt = 1, xi(_i));
    }
  }
  function Be(t2, e, n) {
    var r = new ce();
    return e = e == null ? 0 : +e, r.restart((i) => {
      r.stop(), t2(i + e);
    }, e, n), r;
  }
  var la = xn("start", "end", "cancel", "interrupt");
  var ua = [];
  var yi = 0;
  var wi = 1;
  var Fe = 2;
  var Le = 3;
  var bi = 4;
  var Ve = 5;
  var fe = 6;
  function ht(t2, e, n, r, i, s) {
    var a = t2.__transition;
    if (!a)
      t2.__transition = {};
    else if (n in a)
      return;
    ca(t2, n, { name: e, index: r, group: i, on: la, tween: ua, time: s.time, delay: s.delay, duration: s.duration, ease: s.ease, timer: null, state: yi });
  }
  function he(t2, e) {
    var n = F(t2, e);
    if (n.state > yi)
      throw new Error("too late; already scheduled");
    return n;
  }
  function Y(t2, e) {
    var n = F(t2, e);
    if (n.state > Le)
      throw new Error("too late; already running");
    return n;
  }
  function F(t2, e) {
    var n = t2.__transition;
    if (!n || !(n = n[e]))
      throw new Error("transition not found");
    return n;
  }
  function ca(t2, e, n) {
    var r = t2.__transition, i;
    r[e] = n, n.timer = Re(s, 0, n.time);
    function s(f) {
      n.state = wi, n.timer.restart(a, n.delay, n.time), n.delay <= f && a(f - n.delay);
    }
    function a(f) {
      var u, c, h, p;
      if (n.state !== wi)
        return l();
      for (u in r)
        if (p = r[u], p.name === n.name) {
          if (p.state === Le)
            return Be(a);
          p.state === bi ? (p.state = fe, p.timer.stop(), p.on.call("interrupt", t2, t2.__data__, p.index, p.group), delete r[u]) : +u < e && (p.state = fe, p.timer.stop(), p.on.call("cancel", t2, t2.__data__, p.index, p.group), delete r[u]);
        }
      if (Be(function() {
        n.state === Le && (n.state = bi, n.timer.restart(o, n.delay, n.time), o(f));
      }), n.state = Fe, n.on.call("start", t2, t2.__data__, n.index, n.group), n.state === Fe) {
        for (n.state = Le, i = new Array(h = n.tween.length), u = 0, c = -1; u < h; ++u)
          (p = n.tween[u].value.call(t2, t2.__data__, n.index, n.group)) && (i[++c] = p);
        i.length = c + 1;
      }
    }
    function o(f) {
      for (var u = f < n.duration ? n.ease.call(null, f / n.duration) : (n.timer.restart(l), n.state = Ve, 1), c = -1, h = i.length; ++c < h; )
        i[c].call(t2, u);
      n.state === Ve && (n.on.call("end", t2, t2.__data__, n.index, n.group), l());
    }
    function l() {
      n.state = fe, n.timer.stop(), delete r[e];
      for (var f in r)
        return;
      delete t2.__transition;
    }
  }
  function Ye(t2, e) {
    var n = t2.__transition, r, i, s = true, a;
    if (!!n) {
      e = e == null ? null : e + "";
      for (a in n) {
        if ((r = n[a]).name !== e) {
          s = false;
          continue;
        }
        i = r.state > Fe && r.state < Ve, r.state = fe, r.timer.stop(), r.on.call(i ? "interrupt" : "cancel", t2, t2.__data__, r.index, r.group), delete n[a];
      }
      s && delete t2.__transition;
    }
  }
  function ji(t2) {
    return this.each(function() {
      Ye(this, t2);
    });
  }
  function fa(t2, e) {
    var n, r;
    return function() {
      var i = Y(this, t2), s = i.tween;
      if (s !== n) {
        r = n = s;
        for (var a = 0, o = r.length; a < o; ++a)
          if (r[a].name === e) {
            r = r.slice(), r.splice(a, 1);
            break;
          }
      }
      i.tween = r;
    };
  }
  function ha(t2, e, n) {
    var r, i;
    if (typeof n != "function")
      throw new Error();
    return function() {
      var s = Y(this, t2), a = s.tween;
      if (a !== r) {
        i = (r = a).slice();
        for (var o = { name: e, value: n }, l = 0, f = i.length; l < f; ++l)
          if (i[l].name === e) {
            i[l] = o;
            break;
          }
        l === f && i.push(o);
      }
      s.tween = i;
    };
  }
  function Mi(t2, e) {
    var n = this._id;
    if (t2 += "", arguments.length < 2) {
      for (var r = F(this.node(), n).tween, i = 0, s = r.length, a; i < s; ++i)
        if ((a = r[i]).name === t2)
          return a.value;
      return null;
    }
    return this.each((e == null ? fa : ha)(n, t2, e));
  }
  function Rt(t2, e, n) {
    var r = t2._id;
    return t2.each(function() {
      var i = Y(this, r);
      (i.value || (i.value = {}))[e] = n.apply(this, arguments);
    }), function(i) {
      return F(i, r).value[e];
    };
  }
  function He(t2, e) {
    var n;
    return (typeof e == "number" ? Q : e instanceof ft ? Oe : (n = ft(e)) ? (e = n, Oe) : In)(t2, e);
  }
  function pa(t2) {
    return function() {
      this.removeAttribute(t2);
    };
  }
  function da(t2) {
    return function() {
      this.removeAttributeNS(t2.space, t2.local);
    };
  }
  function ma(t2, e, n) {
    var r, i = n + "", s;
    return function() {
      var a = this.getAttribute(t2);
      return a === i ? null : a === r ? s : s = e(r = a, n);
    };
  }
  function ga(t2, e, n) {
    var r, i = n + "", s;
    return function() {
      var a = this.getAttributeNS(t2.space, t2.local);
      return a === i ? null : a === r ? s : s = e(r = a, n);
    };
  }
  function xa(t2, e, n) {
    var r, i, s;
    return function() {
      var a, o = n(this), l;
      return o == null ? void this.removeAttribute(t2) : (a = this.getAttribute(t2), l = o + "", a === l ? null : a === r && l === i ? s : (i = l, s = e(r = a, o)));
    };
  }
  function va(t2, e, n) {
    var r, i, s;
    return function() {
      var a, o = n(this), l;
      return o == null ? void this.removeAttributeNS(t2.space, t2.local) : (a = this.getAttributeNS(t2.space, t2.local), l = o + "", a === l ? null : a === r && l === i ? s : (i = l, s = e(r = a, o)));
    };
  }
  function Ai(t2, e) {
    var n = it(t2), r = n === "transform" ? En : He;
    return this.attrTween(t2, typeof e == "function" ? (n.local ? va : xa)(n, r, Rt(this, "attr." + t2, e)) : e == null ? (n.local ? da : pa)(n) : (n.local ? ga : ma)(n, r, e));
  }
  function _a(t2, e) {
    return function(n) {
      this.setAttribute(t2, e.call(this, n));
    };
  }
  function ya(t2, e) {
    return function(n) {
      this.setAttributeNS(t2.space, t2.local, e.call(this, n));
    };
  }
  function wa(t2, e) {
    var n, r;
    function i() {
      var s = e.apply(this, arguments);
      return s !== r && (n = (r = s) && ya(t2, s)), n;
    }
    return i._value = e, i;
  }
  function ba(t2, e) {
    var n, r;
    function i() {
      var s = e.apply(this, arguments);
      return s !== r && (n = (r = s) && _a(t2, s)), n;
    }
    return i._value = e, i;
  }
  function ki(t2, e) {
    var n = "attr." + t2;
    if (arguments.length < 2)
      return (n = this.tween(n)) && n._value;
    if (e == null)
      return this.tween(n, null);
    if (typeof e != "function")
      throw new Error();
    var r = it(t2);
    return this.tween(n, (r.local ? wa : ba)(r, e));
  }
  function ja(t2, e) {
    return function() {
      he(this, t2).delay = +e.apply(this, arguments);
    };
  }
  function Ma(t2, e) {
    return e = +e, function() {
      he(this, t2).delay = e;
    };
  }
  function Ti(t2) {
    var e = this._id;
    return arguments.length ? this.each((typeof t2 == "function" ? ja : Ma)(e, t2)) : F(this.node(), e).delay;
  }
  function Aa(t2, e) {
    return function() {
      Y(this, t2).duration = +e.apply(this, arguments);
    };
  }
  function ka(t2, e) {
    return e = +e, function() {
      Y(this, t2).duration = e;
    };
  }
  function Ii(t2) {
    var e = this._id;
    return arguments.length ? this.each((typeof t2 == "function" ? Aa : ka)(e, t2)) : F(this.node(), e).duration;
  }
  function Ta(t2, e) {
    if (typeof e != "function")
      throw new Error();
    return function() {
      Y(this, t2).ease = e;
    };
  }
  function Si(t2) {
    var e = this._id;
    return arguments.length ? this.each(Ta(e, t2)) : F(this.node(), e).ease;
  }
  function Ia(t2, e) {
    return function() {
      var n = e.apply(this, arguments);
      if (typeof n != "function")
        throw new Error();
      Y(this, t2).ease = n;
    };
  }
  function Ci(t2) {
    if (typeof t2 != "function")
      throw new Error();
    return this.each(Ia(this._id, t2));
  }
  function Ei(t2) {
    typeof t2 != "function" && (t2 = te(t2));
    for (var e = this._groups, n = e.length, r = new Array(n), i = 0; i < n; ++i)
      for (var s = e[i], a = s.length, o = r[i] = [], l, f = 0; f < a; ++f)
        (l = s[f]) && t2.call(l, l.__data__, f, s) && o.push(l);
    return new G(r, this._parents, this._name, this._id);
  }
  function Ni(t2) {
    if (t2._id !== this._id)
      throw new Error();
    for (var e = this._groups, n = t2._groups, r = e.length, i = n.length, s = Math.min(r, i), a = new Array(r), o = 0; o < s; ++o)
      for (var l = e[o], f = n[o], u = l.length, c = a[o] = new Array(u), h, p = 0; p < u; ++p)
        (h = l[p] || f[p]) && (c[p] = h);
    for (; o < r; ++o)
      a[o] = e[o];
    return new G(a, this._parents, this._name, this._id);
  }
  function Sa(t2) {
    return (t2 + "").trim().split(/^|\s+/).every(function(e) {
      var n = e.indexOf(".");
      return n >= 0 && (e = e.slice(0, n)), !e || e === "start";
    });
  }
  function Ca(t2, e, n) {
    var r, i, s = Sa(e) ? he : Y;
    return function() {
      var a = s(this, t2), o = a.on;
      o !== r && (i = (r = o).copy()).on(e, n), a.on = i;
    };
  }
  function Oi(t2, e) {
    var n = this._id;
    return arguments.length < 2 ? F(this.node(), n).on.on(t2) : this.each(Ca(n, t2, e));
  }
  function Ea(t2) {
    return function() {
      var e = this.parentNode;
      for (var n in this.__transition)
        if (+n !== t2)
          return;
      e && e.removeChild(this);
    };
  }
  function Pi() {
    return this.on("end.remove", Ea(this._id));
  }
  function Di(t2) {
    var e = this._name, n = this._id;
    typeof t2 != "function" && (t2 = Ct(t2));
    for (var r = this._groups, i = r.length, s = new Array(i), a = 0; a < i; ++a)
      for (var o = r[a], l = o.length, f = s[a] = new Array(l), u, c, h = 0; h < l; ++h)
        (u = o[h]) && (c = t2.call(u, u.__data__, h, o)) && ("__data__" in u && (c.__data__ = u.__data__), f[h] = c, ht(f[h], e, n, h, f, F(u, n)));
    return new G(s, this._parents, e, n);
  }
  function qi(t2) {
    var e = this._name, n = this._id;
    typeof t2 != "function" && (t2 = Jt(t2));
    for (var r = this._groups, i = r.length, s = [], a = [], o = 0; o < i; ++o)
      for (var l = r[o], f = l.length, u, c = 0; c < f; ++c)
        if (u = l[c]) {
          for (var h = t2.call(u, u.__data__, c, l), p, d = F(u, n), m = 0, x = h.length; m < x; ++m)
            (p = h[m]) && ht(p, e, n, m, h, d);
          s.push(h), a.push(u);
        }
    return new G(s, a, e, n);
  }
  var Na = ot.prototype.constructor;
  function Xi() {
    return new Na(this._groups, this._parents);
  }
  function Oa(t2, e) {
    var n, r, i;
    return function() {
      var s = ct(this, t2), a = (this.style.removeProperty(t2), ct(this, t2));
      return s === a ? null : s === n && a === r ? i : i = e(n = s, r = a);
    };
  }
  function zi(t2) {
    return function() {
      this.style.removeProperty(t2);
    };
  }
  function Pa(t2, e, n) {
    var r, i = n + "", s;
    return function() {
      var a = ct(this, t2);
      return a === i ? null : a === r ? s : s = e(r = a, n);
    };
  }
  function Da(t2, e, n) {
    var r, i, s;
    return function() {
      var a = ct(this, t2), o = n(this), l = o + "";
      return o == null && (l = o = (this.style.removeProperty(t2), ct(this, t2))), a === l ? null : a === r && l === i ? s : (i = l, s = e(r = a, o));
    };
  }
  function qa(t2, e) {
    var n, r, i, s = "style." + e, a = "end." + s, o;
    return function() {
      var l = Y(this, t2), f = l.on, u = l.value[s] == null ? o || (o = zi(e)) : void 0;
      (f !== n || i !== u) && (r = (n = f).copy()).on(a, i = u), l.on = r;
    };
  }
  function Ri(t2, e, n) {
    var r = (t2 += "") === "transform" ? Cn : He;
    return e == null ? this.styleTween(t2, Oa(t2, r)).on("end.style." + t2, zi(t2)) : typeof e == "function" ? this.styleTween(t2, Da(t2, r, Rt(this, "style." + t2, e))).each(qa(this._id, t2)) : this.styleTween(t2, Pa(t2, r, e), n).on("end.style." + t2, null);
  }
  function Xa(t2, e, n) {
    return function(r) {
      this.style.setProperty(t2, e.call(this, r), n);
    };
  }
  function za(t2, e, n) {
    var r, i;
    function s() {
      var a = e.apply(this, arguments);
      return a !== i && (r = (i = a) && Xa(t2, a, n)), r;
    }
    return s._value = e, s;
  }
  function Bi(t2, e, n) {
    var r = "style." + (t2 += "");
    if (arguments.length < 2)
      return (r = this.tween(r)) && r._value;
    if (e == null)
      return this.tween(r, null);
    if (typeof e != "function")
      throw new Error();
    return this.tween(r, za(t2, e, n ?? ""));
  }
  function Ra(t2) {
    return function() {
      this.textContent = t2;
    };
  }
  function Ba(t2) {
    return function() {
      var e = t2(this);
      this.textContent = e ?? "";
    };
  }
  function Fi(t2) {
    return this.tween("text", typeof t2 == "function" ? Ba(Rt(this, "text", t2)) : Ra(t2 == null ? "" : t2 + ""));
  }
  function Fa(t2) {
    return function(e) {
      this.textContent = t2.call(this, e);
    };
  }
  function La(t2) {
    var e, n;
    function r() {
      var i = t2.apply(this, arguments);
      return i !== n && (e = (n = i) && Fa(i)), e;
    }
    return r._value = t2, r;
  }
  function Li(t2) {
    var e = "text";
    if (arguments.length < 1)
      return (e = this.tween(e)) && e._value;
    if (t2 == null)
      return this.tween(e, null);
    if (typeof t2 != "function")
      throw new Error();
    return this.tween(e, La(t2));
  }
  function Vi() {
    for (var t2 = this._name, e = this._id, n = Ge(), r = this._groups, i = r.length, s = 0; s < i; ++s)
      for (var a = r[s], o = a.length, l, f = 0; f < o; ++f)
        if (l = a[f]) {
          var u = F(l, e);
          ht(l, t2, n, f, a, { time: u.time + u.delay + u.duration, delay: 0, duration: u.duration, ease: u.ease });
        }
    return new G(r, this._parents, t2, n);
  }
  function Yi() {
    var t2, e, n = this, r = n._id, i = n.size();
    return new Promise(function(s, a) {
      var o = { value: a }, l = { value: function() {
        --i == 0 && s();
      } };
      n.each(function() {
        var f = Y(this, r), u = f.on;
        u !== t2 && (e = (t2 = u).copy(), e._.cancel.push(o), e._.interrupt.push(o), e._.end.push(l)), f.on = e;
      }), i === 0 && s();
    });
  }
  var Va = 0;
  function G(t2, e, n, r) {
    this._groups = t2, this._parents = e, this._name = n, this._id = r;
  }
  function Hi(t2) {
    return ot().transition(t2);
  }
  function Ge() {
    return ++Va;
  }
  var st = ot.prototype;
  G.prototype = Hi.prototype = { constructor: G, select: Di, selectAll: qi, selectChild: st.selectChild, selectChildren: st.selectChildren, filter: Ei, merge: Ni, selection: Xi, transition: Vi, call: st.call, nodes: st.nodes, node: st.node, size: st.size, empty: st.empty, each: st.each, on: Oi, attr: Ai, attrTween: ki, style: Ri, styleTween: Bi, text: Fi, textTween: Li, remove: Pi, tween: Mi, delay: Ti, duration: Ii, ease: Si, easeVarying: Ci, end: Yi, [Symbol.iterator]: st[Symbol.iterator] };
  function $e(t2) {
    return ((t2 *= 2) <= 1 ? t2 * t2 * t2 : (t2 -= 2) * t2 * t2 + 2) / 2;
  }
  var Ya = { time: null, delay: 0, duration: 250, ease: $e };
  function Ha(t2, e) {
    for (var n; !(n = t2.__transition) || !(n = n[e]); )
      if (!(t2 = t2.parentNode))
        throw new Error(`transition ${e} not found`);
    return n;
  }
  function Gi(t2) {
    var e, n;
    t2 instanceof G ? (e = t2._id, t2 = t2._name) : (e = Ge(), (n = Ya).time = ue(), t2 = t2 == null ? null : t2 + "");
    for (var r = this._groups, i = r.length, s = 0; s < i; ++s)
      for (var a = r[s], o = a.length, l, f = 0; f < o; ++f)
        (l = a[f]) && ht(l, t2, e, f, a, n || Ha(l, e));
    return new G(r, this._parents, t2, e);
  }
  ot.prototype.interrupt = ji;
  ot.prototype.transition = Gi;
  function $i(t2) {
    return [+t2[0], +t2[1]];
  }
  function Ga(t2) {
    return [$i(t2[0]), $i(t2[1])];
  }
  var Fd = { name: "x", handles: ["w", "e"].map(On), input: function(t2, e) {
    return t2 == null ? null : [[+t2[0], e[0][1]], [+t2[1], e[1][1]]];
  }, output: function(t2) {
    return t2 && [t2[0][0], t2[1][0]];
  } };
  var Ld = { name: "y", handles: ["n", "s"].map(On), input: function(t2, e) {
    return t2 == null ? null : [[e[0][0], +t2[0]], [e[1][0], +t2[1]]];
  }, output: function(t2) {
    return t2 && [t2[0][1], t2[1][1]];
  } };
  var Vd = { name: "xy", handles: ["n", "w", "e", "s", "nw", "ne", "sw", "se"].map(On), input: function(t2) {
    return t2 == null ? null : Ga(t2);
  }, output: function(t2) {
    return t2;
  } };
  function On(t2) {
    return { type: t2 };
  }
  function Bt(t2) {
    for (var e = -1, n = t2.length, r = 0, i = 0, s, a = t2[n - 1], o, l = 0; ++e < n; )
      s = a, a = t2[e], l += o = s[0] * a[1] - a[0] * s[1], r += (s[0] + a[0]) * o, i += (s[1] + a[1]) * o;
    return l *= 3, [r / l, i / l];
  }
  function pt(t2, e, n) {
    this.k = t2, this.x = e, this.y = n;
  }
  pt.prototype = { constructor: pt, scale: function(t2) {
    return t2 === 1 ? this : new pt(this.k * t2, this.x, this.y);
  }, translate: function(t2, e) {
    return t2 === 0 & e === 0 ? this : new pt(this.k, this.x + this.k * t2, this.y + this.k * e);
  }, apply: function(t2) {
    return [t2[0] * this.k + this.x, t2[1] * this.k + this.y];
  }, applyX: function(t2) {
    return t2 * this.k + this.x;
  }, applyY: function(t2) {
    return t2 * this.k + this.y;
  }, invert: function(t2) {
    return [(t2[0] - this.x) / this.k, (t2[1] - this.y) / this.k];
  }, invertX: function(t2) {
    return (t2 - this.x) / this.k;
  }, invertY: function(t2) {
    return (t2 - this.y) / this.k;
  }, rescaleX: function(t2) {
    return t2.copy().domain(t2.range().map(this.invertX, this).map(t2.invert, t2));
  }, rescaleY: function(t2) {
    return t2.copy().domain(t2.range().map(this.invertY, this).map(t2.invert, t2));
  }, toString: function() {
    return "translate(" + this.x + "," + this.y + ") scale(" + this.k + ")";
  } };
  var Pn = new pt(1, 0, 0);
  Dn.prototype = pt.prototype;
  function Dn(t2) {
    for (; !t2.__zoom; )
      if (!(t2 = t2.parentNode))
        return Pn;
    return t2.__zoom;
  }
  var $a = { width: 1024, height: 1024, points: [], relaxIterations: 8 };
  function Qi(t2) {
    t2 = Object.assign({}, $a, t2), t2.points = t2.points.map((s) => [s.x, s.y]);
    let e = St.from(t2.points), n = e.voronoi([0, 0, t2.width, t2.height]), r = [];
    for (let s = 0; s < t2.relaxIterations; s++) {
      for (let a = 0; a < e.points.length; a += 2) {
        let o = n.cellPolygon(a >> 1);
        if (o === null)
          continue;
        let l = e.points[a], f = e.points[a + 1], [u, c] = Bt(o);
        e.points[a] = l + (u - l) * 1, e.points[a + 1] = f + (c - f) * 1;
      }
      n.update();
    }
    for (let s = 0; s < e.points.length; s += 2) {
      let a = e.points[s], o = e.points[s + 1];
      r.push({ x: a, y: o });
    }
    let i = [];
    for (let s = 0; s < e.points.length; s += 2) {
      let a = n.cellPolygon(s >> 1);
      a !== null && i.push({ ...Ui(a), neighbors: [...n.neighbors(s)].map((o) => ({ ...Ui(n.cellPolygon(o)) })) });
    }
    return { cells: i.map((s, a) => {
      let o = [...n.neighbors(a)];
      return s.neighbors = o.map((l) => i[l]), s;
    }), points: r };
  }
  function Ui(t2) {
    return { points: t2, innerCircleRadius: Qa(t2), centroid: { x: Bt(t2)[0], y: Bt(t2)[1] } };
  }
  function Qa(t2) {
    let e = Bt(t2), n = Ua(e, t2), r = ye(e, n[0], n[1]);
    for (let i = 1; i < t2.length - 1; i++)
      if (t2[i + 1]) {
        let s = ye(e, n[i], n[i + 1]);
        s < r && (r = s);
      }
    return r;
  }
  function Ua(t2, e) {
    let n = t2, r = e.slice(0), i = (s, a) => Math.atan2(s[1] - n[1], s[0] - n[0]) * 180 / Math.PI - Math.atan2(a[1] - n[1], a[0] - n[0]) * 180 / Math.PI;
    return r.sort(i), r;
  }
  var Zi = sn(Ki());
  var Ka = { width: 200, height: 200, resolution: 8, xInc: 0.01, yInc: 0.01, seed: Math.random() * 1e3 };

  // worklet.js
  var COLORS = [...Array(8)].map((_, i) => `--fluid-pattern-color-${i + 1}`);
  var FluidPattern = class {
    static get inputProperties() {
      return [
        "--fluid-pattern-seed",
        "--fluid-pattern-bg-color",
        "--fluid-pattern-shape-bias-circle",
        "--fluid-pattern-shape-bias-arc",
        "--fluid-pattern-shape-bias-line",
        "--fluid-pattern-shape-bias-rect",
        "--fluid-pattern-points",
        ...COLORS
      ];
    }
    propToString(prop) {
      return prop.toString().trim();
    }
    getDefinedColors(props) {
      return COLORS.map((key) => {
        return this.propToString(props.get(key));
      }).filter((value) => value);
    }
    paint(ctx, geometry, props) {
      const { width, height } = geometry;
      const seed = this.propToString(props.get("--fluid-pattern-seed")) || 123456;
      ho(seed);
      const bgColor = this.propToString(props.get("--fluid-pattern-bg-color"));
      const colors = this.getDefinedColors(props);
      const shapeBiases = {
        circle: parseFloat(props.get("--fluid-pattern-shape-bias-circle")) || At(0, 8),
        arc: parseFloat(props.get("--fluid-pattern-shape-bias-arc")) || At(0, 8),
        line: parseFloat(props.get("--fluid-pattern-shape-bias-line")) || At(0, 8),
        rectangle: parseFloat(props.get("--fluid-pattern-shape-bias-rect")) || At(0, 8)
      };
      let points = props.get("--fluid-pattern-points");
      if (points.length === 1) {
        points = parseInt(points);
      } else {
        points = 24;
      }
      const { cells } = Qi({
        width,
        height,
        points: [...Array(points)].map(() => ({
          x: At(0, width),
          y: At(0, height)
        })),
        relaxIterations: 6
      });
      ctx.fillStyle = bgColor;
      ctx.fillRect(0, 0, width, height);
      ctx.lineCap = "round";
      cells.forEach((cell) => {
        cell.innerCircleRadius *= 0.75;
        const shapeChoice = At(weightedArray([
          {
            value: "circle",
            count: shapeBiases.circle
          },
          {
            value: "arc",
            count: shapeBiases.arc
          },
          {
            value: "line",
            count: shapeBiases.line
          },
          {
            value: "rectangle",
            count: shapeBiases.rectangle
          }
        ]));
        ctx.lineWidth = Math.min(cell.innerCircleRadius, 40);
        const colorChoice = At(colors);
        ctx.fillStyle = colorChoice;
        ctx.strokeStyle = colorChoice;
        const radius = At(cell.innerCircleRadius / 1.5, cell.innerCircleRadius);
        const rotationDegrees = At(0, 360);
        ctx.save();
        rotate(ctx, cell.centroid.x, cell.centroid.y, rotationDegrees);
        switch (shapeChoice) {
          case "circle":
            circle(ctx, cell.centroid.x, cell.centroid.y, radius);
            if (At(0, 1) > 0.5) {
              ctx.fillStyle = bgColor;
              circle(ctx, cell.centroid.x, cell.centroid.y, radius / 2);
            }
            break;
          case "arc":
            semiCircle(ctx, cell.centroid.x, cell.centroid.y, radius);
            if (At(0, 1) > 0.5) {
              ctx.fillStyle = bgColor;
              semiCircle(ctx, cell.centroid.x, cell.centroid.y - 1, radius / 2);
            }
            break;
          case "line":
            line(ctx, cell.centroid.x, cell.centroid.y, radius * 0.5);
            break;
          case "rectangle":
            rectangle(ctx, cell.centroid.x, cell.centroid.y, radius);
            break;
        }
        ctx.restore();
      });
    }
  };
  function circle(ctx, cx, cy, radius) {
    ctx.beginPath();
    ctx.arc(cx, cy, radius, 0, Math.PI * 2);
    ctx.fill();
  }
  function semiCircle(ctx, cx, cy, radius) {
    ctx.beginPath();
    ctx.arc(cx, cy, radius, 0, Math.PI * 1);
    ctx.fill();
  }
  function line(ctx, cx, cy, length) {
    ctx.beginPath();
    ctx.moveTo(cx - length / 2, cy - length / 2);
    ctx.lineTo(cx + length, cy + length);
    ctx.stroke();
  }
  function rectangle(ctx, cx, cy, size) {
    ctx.fillRect(cx - size / 2, cy - size / 2, size, size);
  }
  function rotate(ctx, originX, originY, deg) {
    ctx.translate(originX, originY);
    ctx.rotate(deg * Math.PI / 180);
    ctx.translate(-originX, -originY);
  }
  function weightedArray(opts) {
    const items = [];
    opts.forEach((opt) => {
      for (let i = 0; i < opt.count; i++) {
        items.push(opt.value);
      }
    });
    return items;
  }
  registerPaint("fluidPattern", FluidPattern);
})();
/**
 * quadtree-js
 * @version 1.2.4
 * @license MIT
 * @author Timo Hausmann
 */
