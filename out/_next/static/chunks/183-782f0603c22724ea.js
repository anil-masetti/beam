;(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [183],
  {
    4036: function (e, t, r) {
      'use strict'
      r.d(t, {
        z: function () {
          return l
        },
        t: function () {
          return c
        },
      })
      var n = r(5893),
        a = r(5428),
        o = r(4952),
        u = r(1163)
      function s(e, t, r) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = r),
          e
        )
      }
      function i(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {},
            n = Object.keys(r)
          'function' === typeof Object.getOwnPropertySymbols &&
            (n = n.concat(
              Object.getOwnPropertySymbols(r).filter(function (e) {
                return Object.getOwnPropertyDescriptor(r, e).enumerable
              })
            )),
            n.forEach(function (t) {
              s(e, t, r[t])
            })
        }
        return e
      }
      function l(e, t) {
        return { take: e, skip: 1 === t ? void 0 : e * (t - 1) }
      }
      function c(e) {
        var t = e.itemCount,
          r = e.itemsPerPage,
          s = e.currentPageNumber,
          l = (0, u.useRouter)(),
          c = Math.ceil(t / r)
        return c <= 1
          ? null
          : (0, n.jsxs)('div', {
              className: 'flex justify-center gap-4 mt-12',
              children: [
                (0, n.jsxs)(a.Z, {
                  href: {
                    pathname: l.pathname,
                    query: i({}, l.query, { page: s - 1 }),
                  },
                  variant: 'secondary',
                  className: 1 === s ? 'pointer-events-none opacity-50' : '',
                  children: [
                    (0, n.jsx)('span', {
                      className: 'mr-1',
                      children: (0, n.jsx)(o.wy, {}),
                    }),
                    'Newer posts',
                  ],
                }),
                (0, n.jsxs)(a.Z, {
                  href: {
                    pathname: l.pathname,
                    query: i({}, l.query, { page: s + 1 }),
                  },
                  variant: 'secondary',
                  className: s === c ? 'pointer-events-none opacity-50' : '',
                  children: [
                    'Older posts',
                    ' ',
                    (0, n.jsx)('span', {
                      className: 'ml-1',
                      children: (0, n.jsx)(o.XC, {}),
                    }),
                  ],
                }),
              ],
            })
      }
    },
    8137: function (e, t, r) {
      'use strict'
      r.d(t, {
        b: function () {
          return o
        },
      })
      var n = r(5893),
        a = r(370)
      function o(e) {
        var t = e.hideAuthor
        return (0, n.jsxs)('div', {
          className: 'animate-pulse',
          children: [
            (0, n.jsx)('div', {
              className: 'w-3/4 h-8 bg-gray-200 rounded dark:bg-gray-700',
            }),
            (0, n.jsx)('div', {
              className: (0, a.A)(
                'flex items-center justify-between gap-4',
                t ? 'mt-2' : 'mt-6'
              ),
              children: (0, n.jsxs)('div', {
                className: 'flex items-center gap-4',
                children: [
                  !t &&
                    (0, n.jsx)('div', {
                      className:
                        'w-12 h-12 bg-gray-200 rounded-full dark:bg-gray-700',
                    }),
                  (0, n.jsxs)('div', {
                    className: 'flex-1',
                    children: [
                      (0, n.jsx)('div', {
                        className:
                          'w-24 h-4 bg-gray-200 rounded dark:bg-gray-700',
                      }),
                      !t &&
                        (0, n.jsx)('div', {
                          className:
                            'w-32 h-3 mt-2 bg-gray-200 rounded dark:bg-gray-700',
                        }),
                    ],
                  }),
                ],
              }),
            }),
            (0, n.jsxs)('div', {
              className: 'space-y-3 mt-7',
              children: [
                (0, n.jsxs)('div', {
                  className: 'grid grid-cols-3 gap-4',
                  children: [
                    (0, n.jsx)('div', {
                      className:
                        'h-5 col-span-2 bg-gray-200 rounded dark:bg-gray-700',
                    }),
                    (0, n.jsx)('div', {
                      className:
                        'h-5 col-span-1 bg-gray-200 rounded dark:bg-gray-700',
                    }),
                  ],
                }),
                (0, n.jsx)('div', {
                  className: 'w-1/2 h-5 bg-gray-200 rounded dark:bg-gray-700',
                }),
              ],
            }),
          ],
        })
      }
    },
    638: function (e, t, r) {
      'use strict'
      function n(e, t, r) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = r),
          e
        )
      }
      function a(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {},
            a = Object.keys(r)
          'function' === typeof Object.getOwnPropertySymbols &&
            (a = a.concat(
              Object.getOwnPropertySymbols(r).filter(function (e) {
                return Object.getOwnPropertyDescriptor(r, e).enumerable
              })
            )),
            a.forEach(function (t) {
              n(e, t, r[t])
            })
        }
        return e
      }
      t.default = function (e, t) {
        var r = o.default,
          n = {
            loading: function (e) {
              e.error, e.isLoading
              return e.pastDelay, null
            },
          }
        ;(u = e),
          (i = Promise),
          (
            null != i && 'undefined' !== typeof Symbol && i[Symbol.hasInstance]
              ? i[Symbol.hasInstance](u)
              : u instanceof i
          )
            ? (n.loader = function () {
                return e
              })
            : 'function' === typeof e
            ? (n.loader = e)
            : 'object' === typeof e && (n = a({}, n, e))
        var u, i
        var l = (n = a({}, n, t))
        if (l.suspense)
          throw new Error(
            'Invalid suspense option usage in next/dynamic. Read more: https://nextjs.org/docs/messages/invalid-dynamic-suspense'
          )
        if (l.suspense) return r(l)
        n.loadableGenerated &&
          delete (n = a({}, n, n.loadableGenerated)).loadableGenerated
        if ('boolean' === typeof n.ssr) {
          if (!n.ssr) return delete n.ssr, s(r, n)
          delete n.ssr
        }
        return r(n)
      }
      u(r(7294))
      var o = u(r(4302))
      function u(e) {
        return e && e.__esModule ? e : { default: e }
      }
      function s(e, t) {
        return delete t.webpack, delete t.modules, e(t)
      }
    },
    6319: function (e, t, r) {
      'use strict'
      var n
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.LoadableContext = void 0)
      var a = (
        (n = r(7294)) && n.__esModule ? n : { default: n }
      ).default.createContext(null)
      t.LoadableContext = a
    },
    4302: function (e, t, r) {
      'use strict'
      function n(e, t) {
        for (var r = 0; r < t.length; r++) {
          var n = t[r]
          ;(n.enumerable = n.enumerable || !1),
            (n.configurable = !0),
            'value' in n && (n.writable = !0),
            Object.defineProperty(e, n.key, n)
        }
      }
      function a(e, t, r) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = r),
          e
        )
      }
      function o(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {},
            n = Object.keys(r)
          'function' === typeof Object.getOwnPropertySymbols &&
            (n = n.concat(
              Object.getOwnPropertySymbols(r).filter(function (e) {
                return Object.getOwnPropertyDescriptor(r, e).enumerable
              })
            )),
            n.forEach(function (t) {
              a(e, t, r[t])
            })
        }
        return e
      }
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.default = void 0)
      var u,
        s = (u = r(7294)) && u.__esModule ? u : { default: u },
        i = r(7161),
        l = r(6319)
      var c = [],
        d = [],
        f = !1
      function y(e) {
        var t = e(),
          r = { loading: !0, loaded: null, error: null }
        return (
          (r.promise = t
            .then(function (e) {
              return (r.loading = !1), (r.loaded = e), e
            })
            .catch(function (e) {
              throw ((r.loading = !1), (r.error = e), e)
            })),
          r
        )
      }
      var p = (function () {
        function e(t, r) {
          !(function (e, t) {
            if (!(e instanceof t))
              throw new TypeError('Cannot call a class as a function')
          })(this, e),
            (this._loadFn = t),
            (this._opts = r),
            (this._callbacks = new Set()),
            (this._delay = null),
            (this._timeout = null),
            this.retry()
        }
        var t, r, a
        return (
          (t = e),
          (r = [
            {
              key: 'promise',
              value: function () {
                return this._res.promise
              },
            },
            {
              key: 'retry',
              value: function () {
                var e = this
                this._clearTimeouts(),
                  (this._res = this._loadFn(this._opts.loader)),
                  (this._state = { pastDelay: !1, timedOut: !1 })
                var t = this._res,
                  r = this._opts
                if (t.loading) {
                  if ('number' === typeof r.delay)
                    if (0 === r.delay) this._state.pastDelay = !0
                    else {
                      var n = this
                      this._delay = setTimeout(function () {
                        n._update({ pastDelay: !0 })
                      }, r.delay)
                    }
                  if ('number' === typeof r.timeout) {
                    var a = this
                    this._timeout = setTimeout(function () {
                      a._update({ timedOut: !0 })
                    }, r.timeout)
                  }
                }
                this._res.promise
                  .then(function () {
                    e._update({}), e._clearTimeouts()
                  })
                  .catch(function (t) {
                    e._update({}), e._clearTimeouts()
                  }),
                  this._update({})
              },
            },
            {
              key: '_update',
              value: function (e) {
                ;(this._state = o(
                  {},
                  this._state,
                  {
                    error: this._res.error,
                    loaded: this._res.loaded,
                    loading: this._res.loading,
                  },
                  e
                )),
                  this._callbacks.forEach(function (e) {
                    return e()
                  })
              },
            },
            {
              key: '_clearTimeouts',
              value: function () {
                clearTimeout(this._delay), clearTimeout(this._timeout)
              },
            },
            {
              key: 'getCurrentValue',
              value: function () {
                return this._state
              },
            },
            {
              key: 'subscribe',
              value: function (e) {
                var t = this
                return (
                  this._callbacks.add(e),
                  function () {
                    t._callbacks.delete(e)
                  }
                )
              },
            },
          ]) && n(t.prototype, r),
          a && n(t, a),
          e
        )
      })()
      function m(e) {
        return (function (e, t) {
          var r = function () {
              if (!a) {
                var t = new p(e, n)
                a = {
                  getCurrentValue: t.getCurrentValue.bind(t),
                  subscribe: t.subscribe.bind(t),
                  retry: t.retry.bind(t),
                  promise: t.promise.bind(t),
                }
              }
              return a.promise()
            },
            n = Object.assign(
              {
                loader: null,
                loading: null,
                delay: 200,
                timeout: null,
                webpack: null,
                modules: null,
                suspense: !1,
              },
              t
            )
          n.suspense && (n.lazy = s.default.lazy(n.loader))
          var a = null
          if (!f && !n.suspense) {
            var u = n.webpack ? n.webpack() : n.modules
            u &&
              d.push(function (e) {
                var t = !0,
                  n = !1,
                  a = void 0
                try {
                  for (
                    var o, s = u[Symbol.iterator]();
                    !(t = (o = s.next()).done);
                    t = !0
                  ) {
                    var i = o.value
                    if (-1 !== e.indexOf(i)) return r()
                  }
                } catch (l) {
                  ;(n = !0), (a = l)
                } finally {
                  try {
                    t || null == s.return || s.return()
                  } finally {
                    if (n) throw a
                  }
                }
              })
          }
          var c = n.suspense
            ? function (e, t) {
                return s.default.createElement(n.lazy, o({}, e, { ref: t }))
              }
            : function (e, t) {
                r()
                var o = s.default.useContext(l.LoadableContext),
                  u = i.useSubscription(a)
                return (
                  s.default.useImperativeHandle(
                    t,
                    function () {
                      return { retry: a.retry }
                    },
                    []
                  ),
                  o &&
                    Array.isArray(n.modules) &&
                    n.modules.forEach(function (e) {
                      o(e)
                    }),
                  s.default.useMemo(
                    function () {
                      return u.loading || u.error
                        ? s.default.createElement(n.loading, {
                            isLoading: u.loading,
                            pastDelay: u.pastDelay,
                            timedOut: u.timedOut,
                            error: u.error,
                            retry: a.retry,
                          })
                        : u.loaded
                        ? s.default.createElement(
                            (function (e) {
                              return e && e.__esModule ? e.default : e
                            })(u.loaded),
                            e
                          )
                        : null
                    },
                    [e, u]
                  )
                )
              }
          return (
            (c.preload = function () {
              return !n.suspense && r()
            }),
            (c.displayName = 'LoadableComponent'),
            s.default.forwardRef(c)
          )
        })(y, e)
      }
      function b(e, t) {
        for (var r = []; e.length; ) {
          var n = e.pop()
          r.push(n(t))
        }
        return Promise.all(r).then(function () {
          if (e.length) return b(e, t)
        })
      }
      ;(m.preloadAll = function () {
        return new Promise(function (e, t) {
          b(c).then(e, t)
        })
      }),
        (m.preloadReady = function () {
          var e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : []
          return new Promise(function (t) {
            var r = function () {
              return (f = !0), t()
            }
            b(d, e).then(r, r)
          })
        }),
        (window.__NEXT_PRELOADREADY = m.preloadReady)
      var h = m
      t.default = h
    },
    5152: function (e, t, r) {
      e.exports = r(638)
    },
  },
])
