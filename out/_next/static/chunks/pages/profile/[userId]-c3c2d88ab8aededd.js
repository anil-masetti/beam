;(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [565],
  {
    9914: function (e, r, n) {
      ;(window.__NEXT_P = window.__NEXT_P || []).push([
        '/profile/[userId]',
        function () {
          return n(5112)
        },
      ])
    },
    2629: function (e, r, n) {
      'use strict'
      n.d(r, {
        Vq: function () {
          return c
        },
        cZ: function () {
          return u
        },
        kX: function () {
          return l
        },
        $N: function () {
          return d
        },
        Be: function () {
          return f
        },
        iK: function () {
          return m
        },
      })
      var t = n(5893),
        a = n(4952),
        i = n(9196),
        s = n(5220),
        o = n(7294)
      function c(e) {
        var r = e.isOpen,
          n = e.onClose,
          a = e.children,
          c = e.initialFocus
        return (0, t.jsx)(i.u.Root, {
          show: r,
          as: o.Fragment,
          children: (0, t.jsx)(s.V, {
            as: 'div',
            className: 'fixed inset-0 z-10 overflow-y-auto',
            onClose: n,
            initialFocus: c,
            children: (0, t.jsxs)('div', {
              className: 'min-h-screen px-4 text-center',
              children: [
                (0, t.jsx)(i.u.Child, {
                  as: o.Fragment,
                  enter: 'ease-out duration-100',
                  enterFrom: 'opacity-0',
                  enterTo: 'opacity-100',
                  leave: 'ease-in duration-50',
                  leaveFrom: 'opacity-100',
                  leaveTo: 'opacity-0',
                  children: (0, t.jsx)(s.V.Overlay, {
                    className:
                      'fixed inset-0 transition-opacity bg-gray-700 opacity-90 dark:bg-gray-900',
                  }),
                }),
                (0, t.jsx)(i.u.Child, {
                  as: o.Fragment,
                  enter: 'ease-out duration-100',
                  enterFrom: 'opacity-0 scale-95',
                  enterTo: 'opacity-100 scale-100',
                  leave: 'ease-in duration-50',
                  leaveFrom: 'opacity-100 scale-100',
                  leaveTo: 'opacity-0 scale-95',
                  children: (0, t.jsx)('div', {
                    className:
                      'inline-block w-full max-w-md mt-[15vh] mb-8 overflow-hidden text-left align-middle transition-all transform bg-primary rounded-lg shadow-xl dark:border',
                    children: a,
                  }),
                }),
              ],
            }),
          }),
        })
      }
      function u(e) {
        var r = e.children
        return (0, t.jsx)('div', { className: 'px-6 pt-6 pb-12', children: r })
      }
      function l(e) {
        var r = e.children
        return (0, t.jsx)('div', {
          className: 'flex gap-4 px-6 py-4 border-t',
          children: r,
        })
      }
      function d(e) {
        var r = e.children
        return (0, t.jsx)(s.V.Title, {
          as: 'h3',
          className: 'text-lg font-semibold',
          children: r,
        })
      }
      function f(e) {
        var r = e.children,
          n = e.className
        return (0, t.jsx)(s.V.Description, { className: n, children: r })
      }
      function m(e) {
        var r = e.onClick
        return (0, t.jsx)('div', {
          className: 'absolute top-0 right-0 pt-6 pr-6',
          children: (0, t.jsxs)('button', {
            type: 'button',
            className:
              'inline-flex items-center justify-center transition-colors rounded-sm text-secondary hover:text-primary hover:bg-secondary',
            onClick: r,
            children: [
              (0, t.jsx)('span', { className: 'sr-only', children: 'Close' }),
              (0, t.jsx)(a.b0, { className: 'w-6 h-6', 'aria-hidden': 'true' }),
            ],
          }),
        })
      }
    },
    6498: function (e, r, n) {
      'use strict'
      n.d(r, {
        n: function () {
          return c
        },
      })
      var t = n(5893),
        a = n(370)
      function i(e, r, n) {
        return (
          r in e
            ? Object.defineProperty(e, r, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[r] = n),
          e
        )
      }
      function s(e) {
        for (var r = 1; r < arguments.length; r++) {
          var n = null != arguments[r] ? arguments[r] : {},
            t = Object.keys(n)
          'function' === typeof Object.getOwnPropertySymbols &&
            (t = t.concat(
              Object.getOwnPropertySymbols(n).filter(function (e) {
                return Object.getOwnPropertyDescriptor(n, e).enumerable
              })
            )),
            t.forEach(function (r) {
              i(e, r, n[r])
            })
        }
        return e
      }
      function o(e, r) {
        if (null == e) return {}
        var n,
          t,
          a = (function (e, r) {
            if (null == e) return {}
            var n,
              t,
              a = {},
              i = Object.keys(e)
            for (t = 0; t < i.length; t++)
              (n = i[t]), r.indexOf(n) >= 0 || (a[n] = e[n])
            return a
          })(e, r)
        if (Object.getOwnPropertySymbols) {
          var i = Object.getOwnPropertySymbols(e)
          for (t = 0; t < i.length; t++)
            (n = i[t]),
              r.indexOf(n) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, n) &&
                  (a[n] = e[n]))
        }
        return a
      }
      var c = n(7294).forwardRef(function (e, r) {
        var n = e.label,
          i = e.id,
          c = e.name,
          u = e.type,
          l = void 0 === u ? 'text' : u,
          d = e.className,
          f = o(e, ['label', 'id', 'name', 'type', 'className'])
        return (0,
        t.jsxs)('div', { children: [n && (0, t.jsx)('label', { htmlFor: i || c, className: 'block mb-2 font-semibold', children: n }), (0, t.jsx)('input', s({}, f, { ref: r, id: i || c, name: c, type: l, className: (0, a.A)('block w-full py-1 rounded shadow-sm bg-secondary border-secondary focus-ring', d) }))] })
      })
      c.displayName = 'TextField'
    },
    159: function (e, r, n) {
      'use strict'
      n.d(r, {
        h: function () {
          return i
        },
      })
      var t = n(408),
        a = n(3454),
        i = (0, t.S7)({
          NEXT_PUBLIC_ENABLE_IMAGE_UPLOAD: (0, t.Xg)({
            input: a.env.NEXT_PUBLIC_ENABLE_IMAGE_UPLOAD,
            default: !1,
          }),
        })
    },
    5712: function (e, r, n) {
      'use strict'
      n.d(r, {
        I: function () {
          return o
        },
      })
      var t = n(4051),
        a = n.n(t)
      function i(e, r, n, t, a, i, s) {
        try {
          var o = e[i](s),
            c = o.value
        } catch (u) {
          return void n(u)
        }
        o.done ? r(c) : Promise.resolve(c).then(t, a)
      }
      function s(e) {
        return function () {
          var r = this,
            n = arguments
          return new Promise(function (t, a) {
            var s = e.apply(r, n)
            function o(e) {
              i(s, t, a, o, c, 'next', e)
            }
            function c(e) {
              i(s, t, a, o, c, 'throw', e)
            }
            o(void 0)
          })
        }
      }
      function o(e) {
        return c.apply(this, arguments)
      }
      function c() {
        return (c = s(
          a().mark(function e(r) {
            var n, t, i, s, o
            return a().wrap(function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    return (
                      (e.next = 2),
                      fetch('/api/sign-cloudinary', { method: 'POST' })
                    )
                  case 2:
                    return (n = e.sent), (e.next = 5), n.json()
                  case 5:
                    return (
                      (t = e.sent),
                      (i = new FormData()).append('file', r),
                      i.append('api_key', t.apiKey),
                      i.append('timestamp', t.timestamp),
                      i.append('signature', t.signature),
                      i.append('folder', t.folder),
                      i.append('image_metadata', 'true'),
                      (e.next = 15),
                      fetch(
                        'https://api.cloudinary.com/v1_1/'.concat(
                          t.cloudName,
                          '/image/upload'
                        ),
                        { method: 'POST', body: i }
                      )
                    )
                  case 15:
                    return (s = e.sent), (e.next = 18), s.json()
                  case 18:
                    if (!(o = e.sent).error) {
                      e.next = 21
                      break
                    }
                    throw Error(o.error.message)
                  case 21:
                    return e.abrupt('return', {
                      url: o.secure_url,
                      originalFilename: o.original_filename,
                      width: o.width,
                      dpi: Number(o.image_metadata.DPI),
                    })
                  case 22:
                  case 'end':
                    return e.stop()
                }
            }, e)
          })
        )).apply(this, arguments)
      }
    },
    5112: function (e, r, n) {
      'use strict'
      n.r(r)
      var t = n(4051),
        a = n.n(t),
        i = n(5893),
        s = n(8063),
        o = n(2072),
        c = n(2629),
        u = n(8848),
        l = n(4952),
        d = n(7135),
        f = n(4036),
        m = n(8137),
        p = n(6498),
        h = n(159),
        y = n(5712),
        x = n(4245),
        v = n(3299),
        g = n(5152),
        j = n(9008),
        b = n(1163),
        w = n(7294),
        N = n(7536),
        k = n(2620),
        S = n(8767)
      function O(e, r) {
        ;(null == r || r > e.length) && (r = e.length)
        for (var n = 0, t = new Array(r); n < r; n++) t[n] = e[n]
        return t
      }
      function C(e, r, n, t, a, i, s) {
        try {
          var o = e[i](s),
            c = o.value
        } catch (u) {
          return void n(u)
        }
        o.done ? r(c) : Promise.resolve(c).then(t, a)
      }
      function P(e) {
        return function () {
          var r = this,
            n = arguments
          return new Promise(function (t, a) {
            var i = e.apply(r, n)
            function s(e) {
              C(i, t, a, s, o, 'next', e)
            }
            function o(e) {
              C(i, t, a, s, o, 'throw', e)
            }
            s(void 0)
          })
        }
      }
      function E(e, r, n) {
        return (
          r in e
            ? Object.defineProperty(e, r, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[r] = n),
          e
        )
      }
      function _(e) {
        for (var r = 1; r < arguments.length; r++) {
          var n = null != arguments[r] ? arguments[r] : {},
            t = Object.keys(n)
          'function' === typeof Object.getOwnPropertySymbols &&
            (t = t.concat(
              Object.getOwnPropertySymbols(n).filter(function (e) {
                return Object.getOwnPropertyDescriptor(n, e).enumerable
              })
            )),
            t.forEach(function (r) {
              E(e, r, n[r])
            })
        }
        return e
      }
      function A(e, r) {
        return (
          (function (e) {
            if (Array.isArray(e)) return e
          })(e) ||
          (function (e, r) {
            var n =
              null == e
                ? null
                : ('undefined' !== typeof Symbol && e[Symbol.iterator]) ||
                  e['@@iterator']
            if (null != n) {
              var t,
                a,
                i = [],
                s = !0,
                o = !1
              try {
                for (
                  n = n.call(e);
                  !(s = (t = n.next()).done) &&
                  (i.push(t.value), !r || i.length !== r);
                  s = !0
                );
              } catch (c) {
                ;(o = !0), (a = c)
              } finally {
                try {
                  s || null == n.return || n.return()
                } finally {
                  if (o) throw a
                }
              }
              return i
            }
          })(e, r) ||
          L(e, r) ||
          (function () {
            throw new TypeError(
              'Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
            )
          })()
        )
      }
      function I(e) {
        return (
          (function (e) {
            if (Array.isArray(e)) return O(e)
          })(e) ||
          (function (e) {
            if (
              ('undefined' !== typeof Symbol && null != e[Symbol.iterator]) ||
              null != e['@@iterator']
            )
              return Array.from(e)
          })(e) ||
          L(e) ||
          (function () {
            throw new TypeError(
              'Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
            )
          })()
        )
      }
      function L(e, r) {
        if (e) {
          if ('string' === typeof e) return O(e, r)
          var n = Object.prototype.toString.call(e).slice(8, -1)
          return (
            'Object' === n && e.constructor && (n = e.constructor.name),
            'Map' === n || 'Set' === n
              ? Array.from(n)
              : 'Arguments' === n ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
              ? O(e, r)
              : void 0
          )
        }
      }
      var F = (0, g.default)(
        function () {
          return Promise.all([n.e(944), n.e(11)])
            .then(n.bind(n, 7011))
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
      )
      function Q(e) {
        return ['user.profile', { id: e }]
      }
      var T = function () {
        return (0, i.jsxs)(i.Fragment, {
          children: [(0, i.jsx)(B, {}), (0, i.jsx)(U, {})],
        })
      }
      function B() {
        var e = (0, v.useSession)().data,
          r = (0, b.useRouter)(),
          n = Q(String(r.query.userId)),
          t = x.S.useQuery(n),
          a = A(w.useState(!1), 2),
          o = a[0],
          c = a[1],
          d = A(w.useState(!1), 2),
          f = d[0],
          m = d[1]
        if (t.data) {
          var p = t.data.id === e.user.id
          return (0, i.jsxs)(i.Fragment, {
            children: [
              (0, i.jsx)(j.default, {
                children: (0, i.jsxs)('title', {
                  children: [t.data.name, ' - Beam'],
                }),
              }),
              (0, i.jsxs)('div', {
                className:
                  'relative flex items-center gap-4 py-8 overflow-hidden',
                children: [
                  (0, i.jsxs)('div', {
                    className: 'flex items-center gap-8',
                    children: [
                      h.h.NEXT_PUBLIC_ENABLE_IMAGE_UPLOAD && p
                        ? (0, i.jsxs)('button', {
                            type: 'button',
                            className: 'relative inline-flex group',
                            onClick: function () {
                              m(!0)
                            },
                            children: [
                              (0, i.jsx)(s.q, {
                                name: t.data.name,
                                src: t.data.image,
                                size: 'lg',
                              }),
                              (0, i.jsx)('div', {
                                className:
                                  'absolute inset-0 transition-opacity bg-gray-900 rounded-full opacity-0 group-hover:opacity-50',
                              }),
                              (0, i.jsx)('div', {
                                className:
                                  'absolute inline-flex items-center justify-center transition-opacity -translate-x-1/2 -translate-y-1/2 bg-gray-900 border border-white rounded-full opacity-0 top-1/2 left-1/2 h-9 w-9 group-hover:opacity-100',
                                children: (0, i.jsx)(l.dY, {
                                  className: 'w-4 h-4 text-white',
                                }),
                              }),
                            ],
                          })
                        : (0, i.jsx)(s.q, {
                            name: t.data.name,
                            src: t.data.image,
                            size: 'lg',
                          }),
                      (0, i.jsxs)('div', {
                        className: 'flex-1',
                        children: [
                          (0, i.jsx)('h1', {
                            className:
                              'bg-primary text-2xl font-semibold tracking-tight md:text-3xl',
                            children: t.data.name,
                          }),
                          t.data.title &&
                            (0, i.jsx)('p', {
                              className:
                                'text-lg tracking-tight text-secondary',
                              children: t.data.title,
                            }),
                        ],
                      }),
                    ],
                  }),
                  p &&
                    (0, i.jsx)('div', {
                      className: 'ml-auto mr-10',
                      children: (0, i.jsx)(u.h, {
                        variant: 'secondary',
                        onClick: function () {
                          c(!0)
                        },
                        children: (0, i.jsx)(l.dY, { className: 'w-4 h-4' }),
                      }),
                    }),
                  (0, i.jsx)(D, {}),
                ],
              }),
              (0, i.jsx)(q, {
                user: { name: t.data.name, title: t.data.title },
                isOpen: o,
                onClose: function () {
                  c(!1)
                },
              }),
              (0, i.jsx)(
                z,
                {
                  user: { name: t.data.name, image: t.data.image },
                  isOpen: f,
                  onClose: function () {
                    m(!1)
                  },
                },
                t.data.image
              ),
            ],
          })
        }
        return t.isError
          ? (0, i.jsxs)('div', { children: ['Error: ', t.error.message] })
          : (0, i.jsxs)('div', {
              className:
                'relative flex items-center gap-8 py-8 overflow-hidden animate-pulse',
              children: [
                (0, i.jsx)('div', {
                  className:
                    'w-32 h-32 bg-gray-200 rounded-full dark:bg-gray-700',
                }),
                (0, i.jsxs)('div', {
                  className: 'flex-1',
                  children: [
                    (0, i.jsx)('div', {
                      className:
                        'h-8 bg-gray-200 rounded w-60 dark:bg-gray-700',
                    }),
                    (0, i.jsx)('div', {
                      className:
                        'w-40 h-5 mt-2 bg-gray-200 rounded dark:bg-gray-700',
                    }),
                  ],
                }),
                (0, i.jsx)(D, {}),
              ],
            })
      }
      function U() {
        var e = (0, v.useSession)().data,
          r = (0, b.useRouter)(),
          n = r.query.page ? Number(r.query.page) : 1,
          t = x.S.useContext(),
          s = [
            'post.feed',
            _({}, (0, f.z)(20, n), { authorId: String(r.query.userId) }),
          ],
          o = x.S.useQuery(s),
          c = x.S.useMutation(['post.like'], {
            onMutate: (function () {
              var r = P(
                a().mark(function r(n) {
                  var i
                  return a().wrap(function (r) {
                    for (;;)
                      switch ((r.prev = r.next)) {
                        case 0:
                          return (r.next = 2), t.cancelQuery(s)
                        case 2:
                          return (
                            (i = t.getQueryData(s)) &&
                              t.setQueryData(
                                s,
                                _({}, i, {
                                  posts: i.posts.map(function (r) {
                                    return r.id === n
                                      ? _({}, r, {
                                          likedBy: I(r.likedBy).concat([
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
                            r.abrupt('return', { previousQuery: i })
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
            onError: function (e, r, n) {
              ;(null === n || void 0 === n ? void 0 : n.previousQuery) &&
                t.setQueryData(s, n.previousQuery)
            },
          }),
          u = x.S.useMutation(['post.unlike'], {
            onMutate: (function () {
              var r = P(
                a().mark(function r(n) {
                  var i
                  return a().wrap(function (r) {
                    for (;;)
                      switch ((r.prev = r.next)) {
                        case 0:
                          return (r.next = 2), t.cancelQuery(s)
                        case 2:
                          return (
                            (i = t.getQueryData(s)) &&
                              t.setQueryData(
                                s,
                                _({}, i, {
                                  posts: i.posts.map(function (r) {
                                    return r.id === n
                                      ? _({}, r, {
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
                            r.abrupt('return', { previousQuery: i })
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
            onError: function (e, r, n) {
              ;(null === n || void 0 === n ? void 0 : n.previousQuery) &&
                t.setQueryData(s, n.previousQuery)
            },
          })
        return o.data
          ? (0, i.jsxs)(i.Fragment, {
              children: [
                (0, i.jsx)('div', {
                  className: 'flow-root mt-28',
                  children:
                    0 === o.data.postCount
                      ? (0, i.jsx)('div', {
                          className:
                            'text-center text-secondary border rounded py-20 px-10',
                          children: "This user hasn't published any posts yet.",
                        })
                      : (0, i.jsx)('ul', {
                          className: '-my-12 divide-y divide-primary',
                          children: o.data.posts.map(function (e) {
                            return (0, i.jsx)(
                              'li',
                              {
                                className: 'py-10',
                                children: (0, i.jsx)(F, {
                                  hideAuthor: !0,
                                  post: e,
                                  onLike: function () {
                                    c.mutate(e.id)
                                  },
                                  onUnlike: function () {
                                    u.mutate(e.id)
                                  },
                                }),
                              },
                              e.id
                            )
                          }),
                        }),
                }),
                (0, i.jsx)(f.t, {
                  itemCount: o.data.postCount,
                  itemsPerPage: 20,
                  currentPageNumber: n,
                }),
              ],
            })
          : o.isError
          ? (0, i.jsxs)('div', {
              className: 'mt-28',
              children: ['Error: ', o.error.message],
            })
          : (0, i.jsx)('div', {
              className: 'flow-root mt-28',
              children: (0, i.jsx)('ul', {
                className: '-my-12 divide-y divide-primary',
                children: I(Array(3)).map(function (e, r) {
                  return (0,
                  i.jsx)('li', { className: 'py-10', children: (0, i.jsx)(m.b, { hideAuthor: !0 }) }, r)
                }),
              }),
            })
      }
      function D() {
        return (0, i.jsxs)('svg', {
          className: 'absolute inset-0 -z-1',
          width: 720,
          height: 240,
          fill: 'none',
          viewBox: '0 0 720 240',
          children: [
            (0, i.jsx)('defs', {
              children: (0, i.jsx)('pattern', {
                id: 'dot-pattern',
                x: 0,
                y: 0,
                width: 31.5,
                height: 31.5,
                patternUnits: 'userSpaceOnUse',
                children: (0, i.jsx)('circle', {
                  cx: 1.5,
                  cy: 1.5,
                  r: 1.5,
                  className: 'text-gray-100 dark:text-gray-700',
                  fill: 'currentColor',
                }),
              }),
            }),
            (0, i.jsx)('rect', {
              width: 720,
              height: 240,
              fill: 'url(#dot-pattern)',
            }),
          ],
        })
      }
      function q(e) {
        var r = e.user,
          n = e.isOpen,
          t = e.onClose,
          a = function () {
            t(), d()
          },
          s = (0, N.cI)({ defaultValues: { name: r.name, title: r.title } }),
          u = s.register,
          l = s.handleSubmit,
          d = s.reset,
          f = (0, b.useRouter)(),
          m = x.S.useContext(),
          h = x.S.useMutation('user.edit', {
            onSuccess: function () {
              return (
                window.location.reload(),
                m.invalidateQueries(Q(String(f.query.userId)))
              )
            },
            onError: function (e) {
              k.ZP.error('Something went wrong: '.concat(e.message))
            },
          })
        return (0, i.jsx)(c.Vq, {
          isOpen: n,
          onClose: a,
          children: (0, i.jsxs)('form', {
            onSubmit: l(function (e) {
              h.mutate(
                { name: e.name, title: e.title },
                {
                  onSuccess: function () {
                    return t()
                  },
                }
              )
            }),
            children: [
              (0, i.jsxs)(c.cZ, {
                children: [
                  (0, i.jsx)(c.$N, { children: 'Edit profile' }),
                  (0, i.jsxs)('div', {
                    className: 'mt-6 space-y-6',
                    children: [
                      (0, i.jsx)(
                        p.n,
                        _({}, u('name', { required: !0 }), {
                          label: 'Name',
                          required: !0,
                        })
                      ),
                      (0, i.jsx)(p.n, _({}, u('title'), { label: 'Title' })),
                    ],
                  }),
                  (0, i.jsx)(c.iK, { onClick: a }),
                ],
              }),
              (0, i.jsxs)(c.kX, {
                children: [
                  (0, i.jsx)(o.z, {
                    type: 'submit',
                    isLoading: h.isLoading,
                    loadingChildren: 'Saving',
                    children: 'Save',
                  }),
                  (0, i.jsx)(o.z, {
                    variant: 'secondary',
                    onClick: a,
                    children: 'Cancel',
                  }),
                ],
              }),
            ],
          }),
        })
      }
      function z(e) {
        var r = e.user,
          n = e.isOpen,
          t = e.onClose,
          u = function () {
            t(), m(r.image)
          },
          l = w.useRef(null),
          d = A(w.useState(r.image), 2),
          f = d[0],
          m = d[1],
          p = x.S.useMutation('user.update-avatar', {
            onSuccess: function () {
              window.location.reload()
            },
            onError: function (e) {
              k.ZP.error('Something went wrong: '.concat(e.message))
            },
          }),
          h = (0, S.useMutation)(
            function (e) {
              return (0, y.I)(e)
            },
            {
              onError: function (e) {
                k.ZP.error('Error uploading image: '.concat(e.message))
              },
            }
          )
        return (0, i.jsxs)(c.Vq, {
          isOpen: n,
          onClose: u,
          children: [
            (0, i.jsxs)(c.cZ, {
              children: [
                (0, i.jsx)(c.$N, { children: 'Update avatar' }),
                (0, i.jsx)(c.iK, { onClick: u }),
                (0, i.jsx)('div', {
                  className: 'flex justify-center mt-8',
                  children: (0, i.jsx)(s.q, {
                    name: r.name,
                    src: f,
                    size: 'lg',
                  }),
                }),
                (0, i.jsxs)('div', {
                  className: 'grid grid-flow-col gap-6 mt-6',
                  children: [
                    (0, i.jsxs)('div', {
                      className: 'text-center',
                      children: [
                        (0, i.jsx)(o.z, {
                          variant: 'secondary',
                          onClick: function () {
                            var e
                            null === (e = l.current) ||
                              void 0 === e ||
                              e.click()
                          },
                          children: 'Choose file\u2026',
                        }),
                        (0, i.jsx)('input', {
                          ref: l,
                          name: 'user-image',
                          type: 'file',
                          accept: '.jpg, .jpeg, .png, .gif',
                          className: 'hidden',
                          onChange: function (e) {
                            var r = e.target.files
                            if (r && r.length > 0) {
                              if (r[0].size > 5242880)
                                return void k.ZP.error(
                                  'Image is bigger than 5MB'
                                )
                              m(URL.createObjectURL(r[0]))
                            }
                          },
                        }),
                        (0, i.jsx)('p', {
                          className: 'mt-2 text-xs text-secondary',
                          children: 'JPEG, PNG, GIF / 5MB max',
                        }),
                      ],
                    }),
                    f &&
                      (0, i.jsxs)('div', {
                        className: 'text-center',
                        children: [
                          (0, i.jsx)(o.z, {
                            variant: 'secondary',
                            className: '!text-red',
                            onClick: function () {
                              ;(l.current.value = ''),
                                URL.revokeObjectURL(f),
                                m(null)
                            },
                            children: 'Remove photo',
                          }),
                          (0, i.jsx)('p', {
                            className: 'mt-2 text-xs text-secondary',
                            children: 'And use default avatar',
                          }),
                        ],
                      }),
                  ],
                }),
              ],
            }),
            (0, i.jsxs)(c.kX, {
              children: [
                (0, i.jsx)(o.z, {
                  isLoading: p.isLoading || h.isLoading,
                  loadingChildren: 'Saving changes',
                  onClick: P(
                    a().mark(function e() {
                      var n, t
                      return a().wrap(function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              r.image === f
                                ? u()
                                : (t =
                                    null === (n = l.current) || void 0 === n
                                      ? void 0
                                      : n.files) && t.length > 0
                                ? h.mutate(t[0], {
                                    onSuccess: function (e) {
                                      p.mutate({ image: e.url })
                                    },
                                  })
                                : p.mutate({ image: null })
                            case 1:
                            case 'end':
                              return e.stop()
                          }
                      }, e)
                    })
                  ),
                  children: 'Save changes',
                }),
                (0, i.jsx)(o.z, {
                  variant: 'secondary',
                  onClick: u,
                  children: 'Cancel',
                }),
              ],
            }),
          ],
        })
      }
      ;(T.auth = !0),
        (T.getLayout = function (e) {
          return (0, i.jsx)(d.A, { children: e })
        }),
        (r.default = T)
    },
  },
  function (e) {
    e.O(0, [774, 33, 364, 416, 135, 183, 888, 179], function () {
      return (r = 9914), e((e.s = r))
      var r
    })
    var r = e.O()
    _N_E = r
  },
])
