'use strict'
;(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [11],
  {
    8416: function (e, s, n) {
      n.d(s, {
        l: function () {
          return l
        },
      })
      var t = n(5893),
        r = n(8063),
        a = n(9879),
        i = n(1664)
      function l(e) {
        var s = e.author,
          n = e.date
        return (0, t.jsxs)('div', {
          className: 'flex items-center gap-2 sm:gap-4',
          children: [
            (0, t.jsx)(i.default, {
              href: '/profile/'.concat(s.id),
              children: (0, t.jsxs)('a', {
                className: 'relative inline-flex',
                children: [
                  (0, t.jsx)('span', {
                    className: 'hidden sm:flex',
                    children: (0, t.jsx)(r.q, { name: s.name, src: s.image }),
                  }),
                  (0, t.jsx)('span', {
                    className: 'flex sm:hidden',
                    children: (0, t.jsx)(r.q, {
                      name: s.name,
                      src: s.image,
                      size: 'sm',
                    }),
                  }),
                ],
              }),
            }),
            (0, t.jsxs)('div', {
              className: 'flex-1 text-sm sm:text-base',
              children: [
                (0, t.jsx)('div', {
                  children: (0, t.jsx)(i.default, {
                    href: '/profile/'.concat(s.id),
                    children: (0, t.jsx)('a', {
                      className:
                        'font-medium tracking-tight transition-colors hover:text-blue',
                      children: s.name,
                    }),
                  }),
                }),
                (0, t.jsxs)('p', {
                  className: 'tracking-tight text-secondary',
                  children: [
                    (0, t.jsx)('time', {
                      dateTime: n.toISOString(),
                      children: (0, a.Z)(n),
                    }),
                    ' ',
                    'ago',
                  ],
                }),
              ],
            }),
          ],
        })
      }
    },
    554: function (e, s, n) {
      n.d(s, {
        j: function () {
          return a
        },
      })
      var t = n(5893),
        r = n(370)
      n(7294)
      function a(e) {
        var s = e.children,
          n = e.className
        return (0, t.jsx)('div', {
          className: (0, r.A)(
            'p-6 font-semibold leading-snug border rounded bg-yellow-light border-yellow-light',
            n
          ),
          children: s,
        })
      }
    },
    7949: function (e, s, n) {
      n.d(s, {
        u: function () {
          return a
        },
      })
      var t = n(5893),
        r = n(370)
      function a(e) {
        var s = e.html,
          n = e.className
        return (0, t.jsx)('div', {
          className: (0, r.A)('prose max-w-none', n),
          dangerouslySetInnerHTML: { __html: s },
        })
      }
    },
    9931: function (e, s, n) {
      n.d(s, {
        c: function () {
          return o
        },
        d: function () {
          return m
        },
      })
      var t = n(5893),
        r = n(2072),
        a = n(4952),
        i = n(370),
        l = n(5754),
        d = n(3299),
        c = n(7294),
        o = 50
      function m(e) {
        var s = e.likedBy,
          n = e.responsive,
          m = e.onLike,
          u = e.onUnlike,
          x = (0, c.useState)(!1),
          h = x[0],
          f = x[1],
          g = (0, d.useSession)().data,
          j = Boolean(
            s.find(function (e) {
              return e.user.id === g.user.id
            })
          ),
          p = s.length
        return (0, t.jsxs)(l.fC, {
          delayDuration: 300,
          children: [
            (0, t.jsx)(l.xz, {
              asChild: !0,
              onClick: function (e) {
                e.preventDefault()
              },
              onMouseDown: function (e) {
                e.preventDefault()
              },
              children: (0, t.jsxs)(r.z, {
                variant: 'secondary',
                responsive: n,
                className: (0, i.A)(
                  'transition-colors overflow-hidden [transform:translateZ(0)] space-x-1.5',
                  j &&
                    'border-red-300 !bg-red-100 dark:!bg-red-900 dark:border-red-700',
                  h && '!border-red-600 !bg-red-600 dark:!bg-red-600'
                ),
                onClick: function () {
                  h ||
                    (j
                      ? u()
                      : (f(!h),
                        m(),
                        setTimeout(function () {
                          f(!1)
                        }, 1e3)))
                },
                children: [
                  (0, t.jsx)('span', {
                    className: 'relative block w-4 h-4 shrink-0',
                    children:
                      j && !h
                        ? (0, t.jsx)(a.rg, {
                            className: 'absolute inset-0 text-red scale-1',
                          })
                        : (0, t.jsxs)(t.Fragment, {
                            children: [
                              (0, t.jsx)(a.h_, {
                                className: (0, i.A)(
                                  'absolute inset-0 transition-all text-red fill-transparent transform-gpu',
                                  h && '!scale-[12] !fill-red-600'
                                ),
                              }),
                              (0, t.jsx)('span', {
                                className: (0, i.A)(
                                  'absolute w-4 h-4 top-0 left-[-.5px] rounded-full ring-inset ring-6 ring-gray-50 transition-all duration-300 transform-gpu z-10',
                                  h ? 'scale-150 !ring-0' : 'scale-0'
                                ),
                              }),
                              (0, t.jsx)(a.rg, {
                                className: (0, i.A)(
                                  'absolute inset-0 transition-transform delay-200 duration-300 text-gray-50 transform-gpu z-10 ease-spring',
                                  h ? 'scale-1' : 'scale-0'
                                ),
                              }),
                            ],
                          }),
                  }),
                  (0, t.jsx)('span', {
                    className: (0, i.A)(
                      'relative z-10 tabular-nums',
                      h && 'transition-colors duration-100 text-gray-50'
                    ),
                    children: p,
                  }),
                ],
              }),
            }),
            (0, t.jsxs)(l.VY, {
              side: 'bottom',
              sideOffset: 4,
              className: (0, i.A)(
                'max-w-[260px] px-3 py-1.5 rounded shadow-lg bg-secondary-inverse text-secondary-inverse sm:max-w-sm',
                0 === p && 'hidden'
              ),
              children: [
                (0, t.jsxs)('p', {
                  className: 'text-sm',
                  children: [
                    s
                      .slice(0, o)
                      .map(function (e) {
                        return e.user.id === g.user.id ? 'You' : e.user.name
                      })
                      .join(', '),
                    p > o && ' and '.concat(p - o, ' more'),
                  ],
                }),
                (0, t.jsx)(l.Eh, {
                  offset: 22,
                  className: 'fill-gray-800 dark:fill-gray-50',
                }),
              ],
            }),
          ],
        })
      }
    },
    7011: function (e, s, n) {
      n.r(s),
        n.d(s, {
          PostSummary: function () {
            return f
          },
        })
      var t = n(5893),
        r = n(8416),
        a = n(554),
        i = n(7949),
        l = n(4952),
        d = n(9931),
        c = n(370),
        o = n(5754),
        m = n(9879),
        u = n(3299),
        x = n(1664),
        h = n(7294)
      function f(e) {
        var s = e.post,
          n = e.hideAuthor,
          f = void 0 !== n && n,
          g =
            (e.onLike,
            e.onUnlike,
            h.useMemo(
              function () {
                return new DOMParser().parseFromString(
                  s.contentHtml,
                  'text/html'
                )
              },
              [s.contentHtml]
            )),
          j = h.useMemo(
            function () {
              var e = !0,
                s = !1,
                n = void 0
              try {
                for (
                  var t,
                    r = ['p', 'ul', 'ol', 'h3', 'pre', 'img'][
                      Symbol.iterator
                    ]();
                  !(e = (t = r.next()).done);
                  e = !0
                ) {
                  var a = t.value,
                    i = g.body.querySelector(a)
                  if (i) return i.outerHTML
                }
              } catch (l) {
                ;(s = !0), (n = l)
              } finally {
                try {
                  e || null == r.return || r.return()
                } finally {
                  if (s) throw n
                }
              }
              return "<p>Summary couldn't be generated</p>"
            },
            [g]
          ),
          p = h.useMemo(
            function () {
              return g.body.children.length > 1
            },
            [g]
          ),
          v = (0, u.useSession)().data,
          N = Boolean(
            s.likedBy.find(function (e) {
              return e.user.id === v.user.id
            })
          ),
          y = s.likedBy.length
        return (0, t.jsxs)('div', {
          children: [
            s.hidden &&
              (0, t.jsx)(a.j, {
                className: 'mb-6',
                children:
                  'This post has been hidden and is only visible to administrators.',
              }),
            (0, t.jsxs)('div', {
              className: (0, c.A)(s.hidden ? 'opacity-50' : ''),
              children: [
                (0, t.jsx)(x.default, {
                  href: '/post/'.concat(s.id),
                  children: (0, t.jsx)('a', {
                    children: (0, t.jsx)('h2', {
                      className:
                        'text-2xl font-semibold tracking-tight md:text-3xl',
                      children: s.title,
                    }),
                  }),
                }),
                (0, t.jsx)('div', {
                  className: (0, c.A)(f ? 'mt-2' : 'mt-6'),
                  children: f
                    ? (0, t.jsxs)('p', {
                        className: 'tracking-tight text-secondary',
                        children: [
                          (0, t.jsx)('time', {
                            dateTime: s.createdAt.toISOString(),
                            children: (0, m.Z)(s.createdAt),
                          }),
                          ' ',
                          'ago',
                        ],
                      })
                    : (0, t.jsx)(r.l, { author: s.author, date: s.createdAt }),
                }),
                (0, t.jsx)(i.u, { html: j, className: f ? 'mt-4' : 'mt-6' }),
                (0, t.jsxs)('div', {
                  className: 'flex items-center gap-4 mt-4',
                  children: [
                    p &&
                      (0, t.jsx)(x.default, {
                        href: '/post/'.concat(s.id),
                        children: (0, t.jsxs)('a', {
                          className:
                            'inline-flex items-center font-medium transition-colors text-blue',
                          children: [
                            'Continue reading ',
                            (0, t.jsx)(l.XC, { className: 'w-4 h-4 ml-1' }),
                          ],
                        }),
                      }),
                    (0, t.jsxs)('div', {
                      className: 'ml-auto flex gap-6',
                      children: [
                        (0, t.jsxs)(o.fC, {
                          delayDuration: 300,
                          children: [
                            (0, t.jsx)(o.xz, {
                              asChild: !0,
                              onClick: function (e) {
                                e.preventDefault()
                              },
                              onMouseDown: function (e) {
                                e.preventDefault()
                              },
                              children: (0, t.jsxs)('div', {
                                className: 'inline-flex items-center gap-1.5',
                                children: [
                                  N
                                    ? (0, t.jsx)(l.rg, {
                                        className: 'w-4 h-4 text-red',
                                      })
                                    : (0, t.jsx)(l.h_, {
                                        className: 'w-4 h-4 text-red',
                                      }),
                                  (0, t.jsx)('span', {
                                    className:
                                      'text-sm font-semibold tabular-nums',
                                    children: y,
                                  }),
                                ],
                              }),
                            }),
                            (0, t.jsxs)(o.VY, {
                              side: 'bottom',
                              sideOffset: 4,
                              className: (0, c.A)(
                                'max-w-[260px] px-3 py-1.5 rounded shadow-lg bg-secondary-inverse text-secondary-inverse sm:max-w-sm',
                                0 === y && 'hidden'
                              ),
                              children: [
                                (0, t.jsxs)('p', {
                                  className: 'text-sm',
                                  children: [
                                    s.likedBy
                                      .slice(0, d.c)
                                      .map(function (e) {
                                        return e.user.id === v.user.id
                                          ? 'You'
                                          : e.user.name
                                      })
                                      .join(', '),
                                    y > d.c && ' and '.concat(y - d.c, ' more'),
                                  ],
                                }),
                                (0, t.jsx)(o.Eh, {
                                  offset: 22,
                                  className: 'fill-gray-800 dark:fill-gray-50',
                                }),
                              ],
                            }),
                          ],
                        }),
                        (0, t.jsxs)('div', {
                          className: 'inline-flex items-center gap-1.5',
                          children: [
                            (0, t.jsx)(l.P$, {
                              className: 'w-4 h-4 text-secondary',
                            }),
                            (0, t.jsx)('span', {
                              className: 'text-sm font-semibold tabular-nums',
                              children: s._count.comments,
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
          ],
        })
      }
    },
  },
])
