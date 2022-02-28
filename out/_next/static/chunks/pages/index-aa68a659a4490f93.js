;(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [405],
  {
    5301: function (e, r, t) {
      ;(window.__NEXT_P = window.__NEXT_P || []).push([
        '/',
        function () {
          return t(5075)
        },
      ])
    },
    5075: function (e, r, t) {
      'use strict'
      t.r(r)
      var n = t(4051),
        u = t.n(n),
        o = t(5893),
        i = t(7135),
        a = t(4036),
        s = t(8137),
        c = t(4245),
        l = t(3299),
        d = t(5152),
        f = t(9008),
        p = t(1163)
      t(7294)
      function y(e, r) {
        ;(null == r || r > e.length) && (r = e.length)
        for (var t = 0, n = new Array(r); t < r; t++) n[t] = e[t]
        return n
      }
      function m(e, r, t, n, u, o, i) {
        try {
          var a = e[o](i),
            s = a.value
        } catch (c) {
          return void t(c)
        }
        a.done ? r(s) : Promise.resolve(s).then(n, u)
      }
      function v(e) {
        return function () {
          var r = this,
            t = arguments
          return new Promise(function (n, u) {
            var o = e.apply(r, t)
            function i(e) {
              m(o, n, u, i, a, 'next', e)
            }
            function a(e) {
              m(o, n, u, i, a, 'throw', e)
            }
            i(void 0)
          })
        }
      }
      function h(e, r, t) {
        return (
          r in e
            ? Object.defineProperty(e, r, {
                value: t,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[r] = t),
          e
        )
      }
      function b(e) {
        for (var r = 1; r < arguments.length; r++) {
          var t = null != arguments[r] ? arguments[r] : {},
            n = Object.keys(t)
          'function' === typeof Object.getOwnPropertySymbols &&
            (n = n.concat(
              Object.getOwnPropertySymbols(t).filter(function (e) {
                return Object.getOwnPropertyDescriptor(t, e).enumerable
              })
            )),
            n.forEach(function (r) {
              h(e, r, t[r])
            })
        }
        return e
      }
      function x(e) {
        return (
          (function (e) {
            if (Array.isArray(e)) return y(e)
          })(e) ||
          (function (e) {
            if (
              ('undefined' !== typeof Symbol && null != e[Symbol.iterator]) ||
              null != e['@@iterator']
            )
              return Array.from(e)
          })(e) ||
          (function (e, r) {
            if (!e) return
            if ('string' === typeof e) return y(e, r)
            var t = Object.prototype.toString.call(e).slice(8, -1)
            'Object' === t && e.constructor && (t = e.constructor.name)
            if ('Map' === t || 'Set' === t) return Array.from(t)
            if (
              'Arguments' === t ||
              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)
            )
              return y(e, r)
          })(e) ||
          (function () {
            throw new TypeError(
              'Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
            )
          })()
        )
      }
      var j = (0, d.default)(
          function () {
            return Promise.all([t.e(944), t.e(11)])
              .then(t.bind(t, 7011))
              .then(function (e) {
                return e.PostSummary
              })
          },
          {
            loadableGenerated: {
              webpack: function () {
                return [7011]
              },
            },
            ssr: !1,
          }
        ),
        w = function () {
          var e = (0, l.useSession)().data,
            r = (0, p.useRouter)(),
            t = r.query.page ? Number(r.query.page) : 1,
            n = c.S.useContext(),
            i = ['post.feed', (0, a.z)(20, t)],
            d = c.S.useQuery(i),
            y = c.S.useMutation(['post.like'], {
              onMutate: (function () {
                var r = v(
                  u().mark(function r(t) {
                    var o
                    return u().wrap(function (r) {
                      for (;;)
                        switch ((r.prev = r.next)) {
                          case 0:
                            return (r.next = 2), n.cancelQuery(i)
                          case 2:
                            return (
                              (o = n.getQueryData(i)) &&
                                n.setQueryData(
                                  i,
                                  b({}, o, {
                                    posts: o.posts.map(function (r) {
                                      return r.id === t
                                        ? b({}, r, {
                                            likedBy: x(r.likedBy).concat([
                                              {
                                                user: {
                                                  id: e.user.id,
                                                  name: e.user.name,
                                                },
                                              },
                                            ]),
                                          })
                                        : r
                                    }),
                                  })
                                ),
                              r.abrupt('return', { previousQuery: o })
                            )
                          case 5:
                          case 'end':
                            return r.stop()
                        }
                    }, r)
                  })
                )
                return function (e) {
                  return r.apply(this, arguments)
                }
              })(),
              onError: function (e, r, t) {
                ;(null === t || void 0 === t ? void 0 : t.previousQuery) &&
                  n.setQueryData(i, t.previousQuery)
              },
            }),
            m = c.S.useMutation(['post.unlike'], {
              onMutate: (function () {
                var r = v(
                  u().mark(function r(t) {
                    var o
                    return u().wrap(function (r) {
                      for (;;)
                        switch ((r.prev = r.next)) {
                          case 0:
                            return (r.next = 2), n.cancelQuery(i)
                          case 2:
                            return (
                              (o = n.getQueryData(i)) &&
                                n.setQueryData(
                                  i,
                                  b({}, o, {
                                    posts: o.posts.map(function (r) {
                                      return r.id === t
                                        ? b({}, r, {
                                            likedBy: r.likedBy.filter(function (
                                              r
                                            ) {
                                              return r.user.id !== e.user.id
                                            }),
                                          })
                                        : r
                                    }),
                                  })
                                ),
                              r.abrupt('return', { previousQuery: o })
                            )
                          case 5:
                          case 'end':
                            return r.stop()
                        }
                    }, r)
                  })
                )
                return function (e) {
                  return r.apply(this, arguments)
                }
              })(),
              onError: function (e, r, t) {
                ;(null === t || void 0 === t ? void 0 : t.previousQuery) &&
                  n.setQueryData(i, t.previousQuery)
              },
            })
          return d.data
            ? (0, o.jsxs)(o.Fragment, {
                children: [
                  (0, o.jsx)(f.default, {
                    children: (0, o.jsx)('title', { children: 'Beam' }),
                  }),
                  0 === d.data.postCount
                    ? (0, o.jsx)('div', {
                        className:
                          'text-center text-secondary border rounded py-20 px-10',
                        children: 'There are no published posts to show yet.',
                      })
                    : (0, o.jsx)('div', {
                        className: 'flow-root',
                        children: (0, o.jsx)('ul', {
                          className: '-my-12 divide-y divide-primary',
                          children: d.data.posts.map(function (e) {
                            return (0, o.jsx)(
                              'li',
                              {
                                className: 'py-10',
                                children: (0, o.jsx)(j, {
                                  post: e,
                                  onLike: function () {
                                    y.mutate(e.id)
                                  },
                                  onUnlike: function () {
                                    m.mutate(e.id)
                                  },
                                }),
                              },
                              e.id
                            )
                          }),
                        }),
                      }),
                  (0, o.jsx)(a.t, {
                    itemCount: d.data.postCount,
                    itemsPerPage: 20,
                    currentPageNumber: t,
                  }),
                ],
              })
            : d.isError
            ? (0, o.jsxs)('div', { children: ['Error: ', d.error.message] })
            : (0, o.jsx)('div', {
                className: 'flow-root',
                children: (0, o.jsx)('ul', {
                  className: '-my-12 divide-y divide-primary',
                  children: x(Array(3)).map(function (e, r) {
                    return (0,
                    o.jsx)('li', { className: 'py-10', children: (0, o.jsx)(s.b, {}) }, r)
                  }),
                }),
              })
        }
      ;(w.auth = !0),
        (w.getLayout = function (e) {
          return (0, o.jsx)(i.A, { children: e })
        }),
        (r.default = w)
    },
  },
  function (e) {
    e.O(0, [774, 33, 416, 135, 183, 888, 179], function () {
      return (r = 5301), e((e.s = r))
      var r
    })
    var r = e.O()
    _N_E = r
  },
])
