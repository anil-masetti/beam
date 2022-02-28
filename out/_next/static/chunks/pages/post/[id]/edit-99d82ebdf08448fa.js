;(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [978],
  {
    3640: function (e, t, r) {
      ;(window.__NEXT_P = window.__NEXT_P || []).push([
        '/post/[id]/edit',
        function () {
          return r(5894)
        },
      ])
    },
    7443: function (e, t, r) {
      'use strict'
      r.d(t, {
        s: function () {
          return g
        },
      })
      var n = r(5893),
        a = r(2072),
        i = r(5428),
        o = r(4952),
        s = r(7097),
        u = r(6498),
        c = r(1163),
        l = r(7294),
        d = (r(5697), 'Invariant failed')
      var f = function (e) {
        null != e &&
          'function' !== typeof e &&
          (function (e, t) {
            if (!e) throw new Error(d)
          })(!1)
        var t = (0, l.useRef)()
        ;(0, l.useEffect)(
          function () {
            t.current = function (t) {
              var r = null === e || void 0 === e ? void 0 : e(t)
              return 'string' === typeof r
                ? (t.returnValue = r)
                : t.defaultPrevented
                ? (t.returnValue = '')
                : void 0
            }
          },
          [e]
        ),
          (0, l.useEffect)(function () {
            var e = function (e) {
              return t.current(e)
            }
            return (
              window.addEventListener('beforeunload', e),
              function () {
                window.removeEventListener('beforeunload', e)
              }
            )
          }, [])
      }
      var b = r(7536)
      function m(e, t, r) {
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
      function h(e) {
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
              m(e, t, r[t])
            })
        }
        return e
      }
      function g(e) {
        var t = e.defaultValues,
          r = e.isSubmitting,
          d = e.backTo,
          m = e.onSubmit,
          g = (0, b.cI)({ defaultValues: t }),
          p = g.control,
          v = g.register,
          y = g.formState,
          x = g.getValues,
          j = g.reset,
          w = g.handleSubmit
        !(function (e) {
          var t = e.formState,
            r = e.message,
            n = void 0 === r ? 'Are you sure to leave without saving?' : r,
            a = (0, c.useRouter)(),
            i = t.isDirty,
            o = l.useCallback(
              function () {
                if (i) {
                  if (window.confirm(n)) return !0
                  throw "Abort route change by user's confirmation."
                }
              },
              [i, n]
            )
          l.useEffect(
            function () {
              return (
                a.events.on('routeChangeStart', o),
                function () {
                  a.events.off('routeChangeStart', o)
                }
              )
            },
            [a.events, o]
          ),
            f(function (e) {
              i && e.preventDefault()
            })
        })({ formState: y })
        var O = y.isSubmitSuccessful
        return (
          l.useEffect(
            function () {
              O && j(x())
            },
            [O, j, x]
          ),
          (0, n.jsxs)('form', {
            onSubmit: w(m),
            children: [
              (0, n.jsx)(
                u.n,
                h({}, v('title', { required: !0 }), {
                  label: 'Title',
                  autoFocus: !0,
                  required: !0,
                  className: 'text-lg font-semibold !py-1.5',
                })
              ),
              (0, n.jsx)('div', {
                className: 'mt-6',
                children: (0, n.jsx)(b.Qr, {
                  name: 'content',
                  control: p,
                  rules: { required: !0 },
                  render: function (e) {
                    var t = e.field
                    return (0, n.jsx)(s.c, {
                      label: 'Post',
                      value: t.value,
                      onChange: t.onChange,
                      onTriggerSubmit: w(m),
                      required: !0,
                    })
                  },
                }),
              }),
              (0, n.jsxs)('div', {
                className: 'flex items-center justify-between gap-4 mt-8',
                children: [
                  (0, n.jsxs)('div', {
                    className: 'flex gap-4',
                    children: [
                      (0, n.jsx)(a.z, {
                        type: 'submit',
                        isLoading: r,
                        loadingChildren: ''.concat(t ? 'Saving' : 'Publishing'),
                        children: (
                          null === t || void 0 === t ? void 0 : t.title
                        )
                          ? 'Save'
                          : 'Publish',
                      }),
                      (0, n.jsx)(i.Z, {
                        href: d,
                        variant: 'secondary',
                        children: 'Cancel',
                      }),
                    ],
                  }),
                  !r &&
                    (0, n.jsxs)('a', {
                      href: 'https://docs.github.com/en/github/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax',
                      target: '_blank',
                      rel: 'noreferrer',
                      className:
                        'flex items-center gap-2 transition-colors text-secondary hover:text-blue',
                      children: [
                        (0, n.jsx)(o.Bu, {}),
                        (0, n.jsx)('span', {
                          className: 'text-xs',
                          children: 'Markdown supported',
                        }),
                      ],
                    }),
                ],
              }),
            ],
          })
        )
      }
    },
    6498: function (e, t, r) {
      'use strict'
      r.d(t, {
        n: function () {
          return u
        },
      })
      var n = r(5893),
        a = r(370)
      function i(e, t, r) {
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
              i(e, t, r[t])
            })
        }
        return e
      }
      function s(e, t) {
        if (null == e) return {}
        var r,
          n,
          a = (function (e, t) {
            if (null == e) return {}
            var r,
              n,
              a = {},
              i = Object.keys(e)
            for (n = 0; n < i.length; n++)
              (r = i[n]), t.indexOf(r) >= 0 || (a[r] = e[r])
            return a
          })(e, t)
        if (Object.getOwnPropertySymbols) {
          var i = Object.getOwnPropertySymbols(e)
          for (n = 0; n < i.length; n++)
            (r = i[n]),
              t.indexOf(r) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, r) &&
                  (a[r] = e[r]))
        }
        return a
      }
      var u = r(7294).forwardRef(function (e, t) {
        var r = e.label,
          i = e.id,
          u = e.name,
          c = e.type,
          l = void 0 === c ? 'text' : c,
          d = e.className,
          f = s(e, ['label', 'id', 'name', 'type', 'className'])
        return (0,
        n.jsxs)('div', { children: [r && (0, n.jsx)('label', { htmlFor: i || u, className: 'block mb-2 font-semibold', children: r }), (0, n.jsx)('input', o({}, f, { ref: t, id: i || u, name: u, type: l, className: (0, a.A)('block w-full py-1 rounded shadow-sm bg-secondary border-secondary focus-ring', d) }))] })
      })
      u.displayName = 'TextField'
    },
    5894: function (e, t, r) {
      'use strict'
      r.r(t)
      var n = r(5893),
        a = r(7135),
        i = r(7443),
        o = r(4245),
        s = r(3299),
        u = r(9008),
        c = r(1163),
        l = r(2620),
        d = function () {
          var e = (0, s.useSession)().data,
            t = (0, c.useRouter)(),
            r = o.S.useQuery(['post.detail', { id: Number(t.query.id) }]),
            a = o.S.useMutation('post.edit', {
              onError: function (e) {
                l.ZP.error('Something went wrong: '.concat(e.message))
              },
            })
          if (r.data) {
            var d = r.data.author.id === e.user.id
            return (0, n.jsxs)(n.Fragment, {
              children: [
                (0, n.jsx)(u.default, {
                  children: (0, n.jsxs)('title', {
                    children: ['Edit ', r.data.title, ' - Beam'],
                  }),
                }),
                d
                  ? (0, n.jsxs)(n.Fragment, {
                      children: [
                        (0, n.jsxs)('h1', {
                          className:
                            'text-2xl font-semibold tracking-tight md:text-3xl',
                          children: ['Edit "', r.data.title, '"'],
                        }),
                        (0, n.jsx)('div', {
                          className: 'mt-6',
                          children: (0, n.jsx)(i.s, {
                            isSubmitting: a.isLoading,
                            defaultValues: {
                              title: r.data.title,
                              content: r.data.content,
                            },
                            backTo: '/post/'.concat(r.data.id),
                            onSubmit: function (e) {
                              a.mutate(
                                {
                                  id: r.data.id,
                                  data: { title: e.title, content: e.content },
                                },
                                {
                                  onSuccess: function () {
                                    return t.push('/post/'.concat(r.data.id))
                                  },
                                }
                              )
                            },
                          }),
                        }),
                      ],
                    })
                  : (0, n.jsx)('div', {
                      children: "You don't have permissions to edit this post.",
                    }),
              ],
            })
          }
          return r.isError
            ? (0, n.jsxs)('div', { children: ['Error: ', r.error.message] })
            : (0, n.jsxs)('div', {
                className: 'animate-pulse',
                children: [
                  (0, n.jsx)('div', {
                    className: 'w-3/4 bg-gray-200 rounded h-9 dark:bg-gray-700',
                  }),
                  (0, n.jsxs)('div', {
                    className: 'mt-7',
                    children: [
                      (0, n.jsxs)('div', {
                        children: [
                          (0, n.jsx)('div', {
                            className:
                              'w-10 h-5 bg-gray-200 rounded dark:bg-gray-700',
                          }),
                          (0, n.jsx)('div', {
                            className:
                              'border rounded h-[42px] border-secondary mt-2',
                          }),
                        ],
                      }),
                      (0, n.jsxs)('div', {
                        className: 'mt-6',
                        children: [
                          (0, n.jsx)('div', {
                            className:
                              'w-10 h-5 bg-gray-200 rounded dark:bg-gray-700',
                          }),
                          (0, n.jsx)('div', {
                            className:
                              'mt-2 border rounded h-9 border-secondary',
                          }),
                          (0, n.jsx)('div', {
                            className:
                              'mt-2 border rounded h-[378px] border-secondary',
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, n.jsxs)('div', {
                    className: 'flex gap-4 mt-9',
                    children: [
                      (0, n.jsx)('div', {
                        className:
                          'w-[92px] bg-gray-200 rounded-full h-button dark:bg-gray-700',
                      }),
                      (0, n.jsx)('div', {
                        className:
                          'w-20 border rounded-full h-button border-secondary',
                      }),
                    ],
                  }),
                ],
              })
        }
      ;(d.auth = !0),
        (d.getLayout = function (e) {
          return (0, n.jsx)(a.A, { children: e })
        }),
        (t.default = d)
    },
    2703: function (e, t, r) {
      'use strict'
      var n = r(414)
      function a() {}
      function i() {}
      ;(i.resetWarningCache = a),
        (e.exports = function () {
          function e(e, t, r, a, i, o) {
            if (o !== n) {
              var s = new Error(
                'Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types'
              )
              throw ((s.name = 'Invariant Violation'), s)
            }
          }
          function t() {
            return e
          }
          e.isRequired = e
          var r = {
            array: e,
            bool: e,
            func: e,
            number: e,
            object: e,
            string: e,
            symbol: e,
            any: e,
            arrayOf: t,
            element: e,
            elementType: e,
            instanceOf: t,
            node: e,
            objectOf: t,
            oneOf: t,
            oneOfType: t,
            shape: t,
            exact: t,
            checkPropTypes: i,
            resetWarningCache: a,
          }
          return (r.PropTypes = r), r
        })
    },
    5697: function (e, t, r) {
      e.exports = r(2703)()
    },
    414: function (e) {
      'use strict'
      e.exports = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED'
    },
  },
  function (e) {
    e.O(0, [33, 364, 543, 416, 135, 97, 774, 888, 179], function () {
      return (t = 3640), e((e.s = t))
      var t
    })
    var t = e.O()
    _N_E = t
  },
])
