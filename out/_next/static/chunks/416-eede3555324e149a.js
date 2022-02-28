'use strict'
;(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [416],
  {
    2072: function (r, e, n) {
      n.d(e, {
        J: function () {
          return c
        },
        z: function () {
          return u
        },
      })
      var t = n(5893),
        o = n(4952),
        i = n(370)
      function s(r, e, n) {
        return (
          e in r
            ? Object.defineProperty(r, e, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (r[e] = n),
          r
        )
      }
      function l(r, e) {
        if (null == r) return {}
        var n,
          t,
          o = (function (r, e) {
            if (null == r) return {}
            var n,
              t,
              o = {},
              i = Object.keys(r)
            for (t = 0; t < i.length; t++)
              (n = i[t]), e.indexOf(n) >= 0 || (o[n] = r[n])
            return o
          })(r, e)
        if (Object.getOwnPropertySymbols) {
          var i = Object.getOwnPropertySymbols(r)
          for (t = 0; t < i.length; t++)
            (n = i[t]),
              e.indexOf(n) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(r, n) &&
                  (o[n] = r[n]))
        }
        return o
      }
      function c(r) {
        var e = r.className,
          n = r.variant,
          t = void 0 === n ? 'primary' : n,
          o = r.responsive,
          s = r.isLoading,
          l = r.disabled
        return (0, i.A)(
          'inline-flex items-center justify-center font-semibold transition-colors rounded-full focus-ring',
          o
            ? 'px-3 h-8 text-xs sm:px-4 sm:text-sm sm:h-button'
            : 'px-4 text-sm h-button',
          'primary' === t &&
            'text-secondary-inverse bg-secondary-inverse hover:text-primary-inverse hover:bg-primary-inverse',
          'secondary' === t &&
            'border text-primary border-secondary bg-primary hover:bg-secondary',
          (l || s) && 'opacity-50 cursor-default',
          e
        )
      }
      var u = n(7294).forwardRef(function (r, e) {
        var n = r.className,
          i = r.variant,
          u = void 0 === i ? 'primary' : i,
          h = r.responsive,
          a = r.type,
          d = void 0 === a ? 'button' : a,
          f = r.isLoading,
          w = void 0 !== f && f,
          x = r.loadingChildren,
          p = r.disabled,
          g = r.children,
          v = l(r, [
            'className',
            'variant',
            'responsive',
            'type',
            'isLoading',
            'loadingChildren',
            'disabled',
            'children',
          ])
        return (0, t.jsxs)(
          'button',
          (function (r) {
            for (var e = 1; e < arguments.length; e++) {
              var n = null != arguments[e] ? arguments[e] : {},
                t = Object.keys(n)
              'function' === typeof Object.getOwnPropertySymbols &&
                (t = t.concat(
                  Object.getOwnPropertySymbols(n).filter(function (r) {
                    return Object.getOwnPropertyDescriptor(n, r).enumerable
                  })
                )),
                t.forEach(function (e) {
                  s(r, e, n[e])
                })
            }
            return r
          })({}, v, {
            ref: e,
            type: d,
            disabled: p || w,
            className: c({
              className: n,
              disabled: p,
              variant: u,
              responsive: h,
              isLoading: w,
            }),
            children: [
              w &&
                (0, t.jsx)(o.L4, {
                  className: 'w-4 h-4 mr-2 -ml-1 animate-spin',
                }),
              w && x ? x : g,
            ],
          })
        )
      })
      u.displayName = 'Button'
    },
    7338: function (r, e, n) {
      n.d(e, {
        $: function () {
          return s
        },
      })
      var t = n(5893),
        o = n(4952),
        i = (n(7294), '1.0.0')
      function s() {
        return (0, t.jsxs)('footer', {
          className:
            'flex flex-col items-center justify-between gap-2 text-sm md:gap-4 md:flex-row text-secondary',
          children: [
            (0, t.jsxs)('div', {
              className: 'inline-flex items-center gap-1 text-sm',
              children: [
                (0, t.jsx)('span', { children: 'Made with' }),
                (0, t.jsx)(o.rg, { className: 'w-4 h-4' }),
                (0, t.jsxs)('span', {
                  children: [
                    'by',
                    ' ',
                    (0, t.jsx)('a', {
                      href: 'https://planetscale.com',
                      target: '_blank',
                      rel: 'noreferrer',
                      className:
                        'transition-colors text-secondary hover:text-primary',
                      children: 'PlanetScale',
                    }),
                  ],
                }),
              ],
            }),
            (0, t.jsxs)('a', {
              href: 'https://github.com/planetscale/beam',
              target: '_blank',
              rel: 'noreferrer',
              className:
                'inline-flex items-center gap-2 text-sm transition-colors text-secondary hover:text-primary',
              children: [
                (0, t.jsx)(o.bY, { className: 'w-4 h-4' }),
                (0, t.jsxs)('span', { children: ['Version ', i] }),
              ],
            }),
          ],
        })
      }
    },
    4952: function (r, e, n) {
      n.d(e, {
        W1: function () {
          return s
        },
        h_: function () {
          return l
        },
        rg: function () {
          return c
        },
        P$: function () {
          return u
        },
        wy: function () {
          return h
        },
        XC: function () {
          return a
        },
        dY: function () {
          return d
        },
        XH: function () {
          return f
        },
        mY: function () {
          return w
        },
        h3: function () {
          return x
        },
        DE: function () {
          return p
        },
        xP: function () {
          return g
        },
        b0: function () {
          return v
        },
        tE: function () {
          return j
        },
        LA: function () {
          return C
        },
        YA: function () {
          return m
        },
        Bu: function () {
          return k
        },
        TR: function () {
          return b
        },
        bY: function () {
          return y
        },
        L4: function () {
          return L
        },
      })
      var t = n(5893)
      n(7294)
      function o(r, e, n) {
        return (
          e in r
            ? Object.defineProperty(r, e, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (r[e] = n),
          r
        )
      }
      function i(r) {
        for (var e = 1; e < arguments.length; e++) {
          var n = null != arguments[e] ? arguments[e] : {},
            t = Object.keys(n)
          'function' === typeof Object.getOwnPropertySymbols &&
            (t = t.concat(
              Object.getOwnPropertySymbols(n).filter(function (r) {
                return Object.getOwnPropertyDescriptor(n, r).enumerable
              })
            )),
            t.forEach(function (e) {
              o(r, e, n[e])
            })
        }
        return r
      }
      function s(r) {
        return (0, t.jsx)(
          'svg',
          i(
            {
              width: 16,
              height: 16,
              viewBox: '0 0 16 16',
              fill: 'none',
              xmlns: 'http://www.w3.org/2000/svg',
            },
            r,
            {
              children: (0, t.jsx)('path', {
                d: 'M7.333 12.667A5.333 5.333 0 107.333 2a5.333 5.333 0 000 10.667zM14 14l-2.9-2.9',
                stroke: 'currentColor',
                strokeWidth: 1.33333,
                strokeLinecap: 'round',
                strokeLinejoin: 'round',
              }),
            }
          )
        )
      }
      function l(r) {
        return (0, t.jsx)(
          'svg',
          i(
            {
              width: 16,
              height: 16,
              viewBox: '0 0 16 16',
              fill: 'none',
              xmlns: 'http://www.w3.org/2000/svg',
            },
            r,
            {
              children: (0, t.jsx)('path', {
                d: 'M2 4.004c-.907 1.411-.686 3.31.5 4.496l4.793 4.793a1 1 0 001.414 0L13.5 8.5c1.186-1.186 1.407-3.085.5-4.496-1.38-2.147-4.584-2.123-6 0-1.416-2.123-4.62-2.147-6 0z',
                stroke: 'currentColor',
                strokeLinejoin: 'round',
              }),
            }
          )
        )
      }
      function c(r) {
        return (0, t.jsx)(
          'svg',
          i(
            {
              width: 16,
              height: 16,
              viewBox: '0 0 16 16',
              fill: 'none',
              xmlns: 'http://www.w3.org/2000/svg',
            },
            r,
            {
              children: (0, t.jsx)('path', {
                d: 'M2 4.004c-.907 1.411-.686 3.31.5 4.496l4.793 4.793a1 1 0 001.414 0L13.5 8.5c1.186-1.186 1.407-3.085.5-4.496-1.38-2.147-4.584-2.123-6 0-1.416-2.123-4.62-2.147-6 0z',
                fill: 'currentColor',
                stroke: 'currentColor',
                strokeLinejoin: 'round',
              }),
            }
          )
        )
      }
      function u(r) {
        return (0, t.jsx)(
          'svg',
          i(
            {
              width: 16,
              height: 16,
              viewBox: '0 0 16 16',
              fill: 'none',
              xmlns: 'http://www.w3.org/2000/svg',
            },
            r,
            {
              children: (0, t.jsx)('path', {
                d: 'M13.5 2.513a1 1 0 011 1V11.5a1 1 0 01-1 1H5.37a1 1 0 00-.65.24l-1.57 1.345a1 1 0 01-1.65-.76V3.514a1 1 0 011-1h11z',
                stroke: 'currentColor',
              }),
            }
          )
        )
      }
      function h(r) {
        return (0, t.jsx)(
          'svg',
          i(
            {
              width: 16,
              height: 16,
              viewBox: '0 0 16 16',
              fill: 'none',
              xmlns: 'http://www.w3.org/2000/svg',
            },
            r,
            {
              children: (0, t.jsx)('path', {
                d: 'M9.5 4.5L6.35355 7.64645C6.15829 7.84171 6.15829 8.15829 6.35355 8.35355L9.5 11.5',
                stroke: 'currentColor',
                strokeLinecap: 'round',
                strokeLinejoin: 'round',
              }),
            }
          )
        )
      }
      function a(r) {
        return (0, t.jsx)(
          'svg',
          i(
            {
              width: 16,
              height: 16,
              viewBox: '0 0 16 16',
              fill: 'none',
              xmlns: 'http://www.w3.org/2000/svg',
            },
            r,
            {
              children: (0, t.jsx)('path', {
                d: 'M6.5 11.5l3.146-3.146a.5.5 0 000-.708L6.5 4.5',
                stroke: 'currentColor',
                strokeLinecap: 'round',
                strokeLinejoin: 'round',
              }),
            }
          )
        )
      }
      function d(r) {
        return (0, t.jsx)(
          'svg',
          i(
            {
              width: 16,
              height: 16,
              viewBox: '0 0 16 16',
              fill: 'none',
              xmlns: 'http://www.w3.org/2000/svg',
            },
            r,
            {
              children: (0, t.jsx)('path', {
                d: 'M11.333 2A1.886 1.886 0 0114 4.667l-9 9-3.667 1 1-3.667 9-9z',
                stroke: 'currentColor',
                strokeWidth: 1.33333,
                strokeLinecap: 'round',
                strokeLinejoin: 'round',
              }),
            }
          )
        )
      }
      function f(r) {
        return (0, t.jsx)(
          'svg',
          i(
            {
              width: 16,
              height: 16,
              viewBox: '0 0 16 16',
              fill: 'none',
              xmlns: 'http://www.w3.org/2000/svg',
            },
            r,
            {
              children: (0, t.jsx)('path', {
                d: 'M2 4h12M5.333 4V2.667a1.333 1.333 0 011.334-1.334h2.666a1.333 1.333 0 011.334 1.334V4m2 0v9.333a1.333 1.333 0 01-1.334 1.334H4.667a1.334 1.334 0 01-1.334-1.334V4h9.334z',
                stroke: 'currentColor',
                strokeWidth: 1.41667,
                strokeLinecap: 'round',
                strokeLinejoin: 'round',
              }),
            }
          )
        )
      }
      function w(r) {
        return (0, t.jsxs)(
          'svg',
          i(
            {
              width: 16,
              height: 16,
              viewBox: '0 0 16 16',
              fill: 'none',
              xmlns: 'http://www.w3.org/2000/svg',
            },
            r,
            {
              children: [
                (0, t.jsx)('path', {
                  d: 'M4 2.667h5.333a2.667 2.667 0 110 5.333H4V2.667z',
                  stroke: 'currentColor',
                  strokeWidth: 1.33333,
                  strokeLinecap: 'round',
                  strokeLinejoin: 'round',
                }),
                (0, t.jsx)('path', {
                  d: 'M4 8h6a2.667 2.667 0 010 5.333H4V8z',
                  stroke: 'currentColor',
                  strokeWidth: 1.33333,
                  strokeLinecap: 'round',
                  strokeLinejoin: 'round',
                }),
              ],
            }
          )
        )
      }
      function x(r) {
        return (0, t.jsx)(
          'svg',
          i(
            {
              width: 16,
              height: 16,
              viewBox: '0 0 16 16',
              fill: 'none',
              xmlns: 'http://www.w3.org/2000/svg',
            },
            r,
            {
              children: (0, t.jsx)('path', {
                d: 'M12.667 2.667h-6M9.333 13.333h-6M10 2.667L6 13.333',
                stroke: 'currentColor',
                strokeWidth: 1.33333,
                strokeLinecap: 'round',
                strokeLinejoin: 'round',
              }),
            }
          )
        )
      }
      function p(r) {
        return (0, t.jsx)(
          'svg',
          i(
            {
              width: 16,
              height: 16,
              viewBox: '0 0 16 16',
              fill: 'none',
              xmlns: 'http://www.w3.org/2000/svg',
            },
            r,
            {
              children: (0, t.jsx)('path', {
                d: 'M5.333 4H14M5.333 8H14M5.333 12H14M2 4h.007M2 8h.007M2 12h.007',
                stroke: 'currentColor',
                strokeWidth: 1.33333,
                strokeLinecap: 'round',
                strokeLinejoin: 'round',
              }),
            }
          )
        )
      }
      function g(r) {
        return (0, t.jsxs)(
          'svg',
          i(
            {
              width: 16,
              height: 16,
              viewBox: '0 0 16 16',
              fill: 'none',
              xmlns: 'http://www.w3.org/2000/svg',
            },
            r,
            {
              children: [
                (0, t.jsx)('path', {
                  d: 'M6.667 8.667a3.333 3.333 0 005.026.36l2-2A3.334 3.334 0 008.98 2.313l-1.147 1.14',
                  stroke: 'currentColor',
                  strokeWidth: 1.33333,
                  strokeLinecap: 'round',
                  strokeLinejoin: 'round',
                }),
                (0, t.jsx)('path', {
                  d: 'M9.333 7.333a3.334 3.334 0 00-5.026-.36l-2 2a3.333 3.333 0 004.713 4.714l1.14-1.14',
                  stroke: 'currentColor',
                  strokeWidth: 1.33333,
                  strokeLinecap: 'round',
                  strokeLinejoin: 'round',
                }),
              ],
            }
          )
        )
      }
      function v(r) {
        return (0, t.jsx)(
          'svg',
          i(
            {
              width: 24,
              height: 24,
              viewBox: '0 0 24 24',
              fill: 'none',
              xmlns: 'http://www.w3.org/2000/svg',
            },
            r,
            {
              children: (0, t.jsx)('path', {
                d: 'M17.5 7l-11 11M6.5 7l11 11',
                stroke: 'currentColor',
                strokeWidth: 1.5,
                strokeLinecap: 'round',
                strokeLinejoin: 'round',
              }),
            }
          )
        )
      }
      function j(r) {
        return (0, t.jsxs)(
          'svg',
          i(
            {
              width: 16,
              height: 16,
              viewBox: '0 0 16 16',
              fill: 'none',
              xmlns: 'http://www.w3.org/2000/svg',
            },
            r,
            {
              children: [
                (0, t.jsx)('path', {
                  d: 'M14.627 7.449c.23.331.23.77 0 1.102C13.529 10.131 11.554 12.5 8 12.5s-5.53-2.368-6.627-3.949a.966.966 0 010-1.102C2.471 5.869 4.446 3.5 8 3.5s5.53 2.369 6.627 3.949z',
                  stroke: 'currentColor',
                  strokeLinejoin: 'round',
                }),
                (0, t.jsx)('path', {
                  d: 'M10 8a2 2 0 11-4 0 2 2 0 014 0z',
                  fill: 'currentColor',
                }),
              ],
            }
          )
        )
      }
      function C(r) {
        return (0, t.jsxs)(
          'svg',
          i(
            {
              width: 16,
              height: 16,
              viewBox: '0 0 16 16',
              fill: 'none',
              xmlns: 'http://www.w3.org/2000/svg',
            },
            r,
            {
              children: [
                (0, t.jsx)('path', {
                  d: 'M4.447 4.435C3.006 5.27 2.032 6.5 1.373 7.448a.967.967 0 000 1.103C2.471 10.131 4.446 12.5 8 12.5c1.429 0 2.602-.383 3.566-.943m1.65-1.286c.09-.09.178-.18.262-.271.463-.498.84-1.004 1.148-1.448a.967.967 0 00.001-1.103C13.529 5.869 11.554 3.5 8 3.5c-.511 0-.99.049-1.438.138',
                  stroke: 'currentColor',
                  strokeLinecap: 'round',
                  strokeLinejoin: 'round',
                }),
                (0, t.jsx)('path', {
                  d: 'M6 8a2 2 0 003.41 1.418L6.586 6.586A1.994 1.994 0 006 8z',
                  fill: 'currentColor',
                }),
                (0, t.jsx)('path', {
                  d: 'M13.5 13.5l-11-11',
                  stroke: 'currentColor',
                  strokeLinecap: 'round',
                  strokeLinejoin: 'round',
                }),
              ],
            }
          )
        )
      }
      function m(r) {
        return (0, t.jsx)(
          'svg',
          i(
            {
              width: 16,
              height: 16,
              viewBox: '0 0 16 16',
              fill: 'none',
              xmlns: 'http://www.w3.org/2000/svg',
            },
            r,
            {
              children: (0, t.jsx)('path', {
                d: 'M4 8a1 1 0 11-2 0 1 1 0 012 0zM9 8a1 1 0 11-2 0 1 1 0 012 0zM14 8a1 1 0 11-2 0 1 1 0 012 0z',
                fill: 'currentColor',
              }),
            }
          )
        )
      }
      function k(r) {
        return (0, t.jsxs)(
          'svg',
          i(
            {
              width: 26,
              height: 16,
              viewBox: '0 0 26 16',
              fill: 'none',
              xmlns: 'http://www.w3.org/2000/svg',
            },
            r,
            {
              children: [
                (0, t.jsxs)('g', {
                  clipPath: 'url(#clip0_33_726)',
                  children: [
                    (0, t.jsx)('path', {
                      d: 'M24.125.625H1.875c-.69 0-1.25.56-1.25 1.25v12.25c0 .69.56 1.25 1.25 1.25h22.25c.69 0 1.25-.56 1.25-1.25V1.875c0-.69-.56-1.25-1.25-1.25z',
                      stroke: 'currentColor',
                      strokeWidth: 1.29808,
                    }),
                    (0, t.jsx)('path', {
                      d: 'M3.75 12.25v-8.5h2.5l2.5 3.125 2.5-3.125h2.5v8.5h-2.5V7.375L8.75 10.5l-2.5-3.125v4.875h-2.5zm15.625 0l-3.75-4.125h2.5V3.75h2.5v4.375h2.5l-3.75 4.125z',
                      fill: 'currentColor',
                    }),
                  ],
                }),
                (0, t.jsx)('defs', {
                  children: (0, t.jsx)('clipPath', {
                    id: 'clip0_33_726',
                    children: (0, t.jsx)('path', {
                      fill: '#fff',
                      d: 'M0 0H26V16H0z',
                    }),
                  }),
                }),
              ],
            }
          )
        )
      }
      function b(r) {
        return (0, t.jsxs)(
          'svg',
          i(
            {
              width: 326,
              height: 94,
              viewBox: '0 0 326 94',
              fill: 'none',
              xmlns: 'http://www.w3.org/2000/svg',
            },
            r,
            {
              children: [
                (0, t.jsx)('path', {
                  fillRule: 'evenodd',
                  clipRule: 'evenodd',
                  d: 'M13.2035 2.60884C13.2035 1.61473 12.3976 0.808838 11.4034 0.808838H2.15889C1.16477 0.808838 0.358887 1.61473 0.358887 2.60884V58.1154H0.362244C0.626443 77.5323 16.4488 93.1911 35.9284 93.1911C55.573 93.1911 71.498 77.2661 71.498 57.6216C71.498 37.977 55.573 22.052 35.9284 22.052C27.2876 22.052 19.3663 25.1332 13.2035 30.2567V2.60884ZM13.2035 57.6216C13.2035 70.1722 23.3778 80.3466 35.9284 80.3466C48.4791 80.3466 58.6534 70.1722 58.6534 57.6216C58.6534 45.0709 48.4791 34.8966 35.9284 34.8966C23.3778 34.8966 13.2035 45.0709 13.2035 57.6216Z',
                  fill: 'currentColor',
                }),
                (0, t.jsx)('path', {
                  fillRule: 'evenodd',
                  clipRule: 'evenodd',
                  d: 'M189.008 22.0516C169.363 22.0516 153.438 37.9766 153.438 57.6211C153.438 77.2656 169.363 93.1907 189.008 93.1907C197.649 93.1907 205.57 90.1093 211.733 84.9854V89.9088C211.733 90.9029 212.539 91.7088 213.533 91.7088H222.778C223.772 91.7088 224.578 90.9029 224.578 89.9088V57.6213H224.577C224.577 37.9768 208.652 22.0516 189.008 22.0516ZM166.283 57.6211C166.283 45.0705 176.457 34.8961 189.008 34.8961C201.558 34.8961 211.733 45.0705 211.733 57.6211C211.733 70.1718 201.558 80.3461 189.008 80.3461C176.457 80.3461 166.283 70.1718 166.283 57.6211Z',
                  fill: 'currentColor',
                }),
                (0, t.jsx)('path', {
                  fillRule: 'evenodd',
                  clipRule: 'evenodd',
                  d: 'M76.8984 57.6216C76.8984 37.977 92.8235 22.052 112.468 22.052C132.113 22.052 148.038 37.977 148.038 57.6216C148.038 59.4776 147.895 61.3005 147.621 63.0799C147.49 63.9298 146.746 64.5375 145.886 64.5375L90.8146 64.5377C93.7406 73.7065 102.329 80.3466 112.468 80.3466C118.549 80.3466 124.072 77.958 128.151 74.0679C128.5 73.7343 128.961 73.5374 129.444 73.5374H141.371C142.71 73.5374 143.571 74.944 142.875 76.0877C136.633 86.3426 125.35 93.1911 112.468 93.1911C92.8235 93.1911 76.8984 77.2661 76.8984 57.6216ZM112.468 34.8966C101.968 34.8966 93.1317 42.0173 90.5241 51.6931L134.412 51.6931C131.804 42.0173 122.968 34.8966 112.468 34.8966Z',
                  fill: 'currentColor',
                }),
                (0, t.jsx)('path', {
                  d: 'M272.287 48.6827C272.262 41.0645 266.079 34.8966 258.455 34.8966C250.816 34.8966 244.624 41.0879 244.622 48.7259L244.622 89.909C244.622 90.9031 243.816 91.709 242.822 91.709H233.577C232.583 91.709 231.777 90.9032 231.777 89.909C231.777 76.1813 231.776 62.4536 231.777 48.7259C231.779 33.994 243.722 22.052 258.455 22.052C266.558 22.052 273.817 25.6647 278.709 31.3672C283.602 25.6647 290.861 22.052 298.964 22.052C313.698 22.052 325.641 33.9958 325.641 48.7292C325.641 62.4558 325.641 76.1824 325.641 89.909C325.641 90.9032 324.835 91.709 323.841 91.709H314.597C313.603 91.709 312.797 90.9032 312.797 89.909C312.797 76.1813 312.797 62.4536 312.797 48.7259C312.795 41.0879 306.603 34.8966 298.964 34.8966C291.34 34.8966 285.156 41.0649 285.132 48.6833L285.132 89.909C285.132 90.9032 284.326 91.709 283.332 91.709H274.087C273.093 91.709 272.287 90.9032 272.287 89.909L272.287 48.6827Z',
                  fill: 'currentColor',
                }),
              ],
            }
          )
        )
      }
      function y(r) {
        return (0, t.jsx)(
          'svg',
          i(
            {
              width: 17,
              height: 16,
              viewBox: '0 0 17 16',
              fill: 'none',
              xmlns: 'http://www.w3.org/2000/svg',
            },
            r,
            {
              children: (0, t.jsx)('path', {
                d: 'M8.5 0C3.806 0 0 3.668 0 8.192c0 3.62 2.436 6.69 5.813 7.774.425.075.58-.178.58-.395 0-.195-.007-.84-.01-1.525-2.366.496-2.865-.966-2.865-.966-.386-.947-.943-1.199-.943-1.199-.772-.508.058-.498.058-.498.853.058 1.303.844 1.303.844.758 1.253 1.988.89 2.473.681.077-.53.297-.89.54-1.095-1.888-.207-3.873-.91-3.873-4.049 0-.894.332-1.625.876-2.199-.088-.206-.38-1.04.082-2.168 0 0 .714-.22 2.339.84A8.435 8.435 0 018.5 3.961c.722.004 1.45.095 2.13.276 1.622-1.06 2.335-.84 2.335-.84.462 1.129.171 1.962.083 2.168.545.574.875 1.305.875 2.2 0 3.146-1.989 3.838-3.882 4.041.305.255.577.753.577 1.517 0 1.096-.01 1.979-.01 2.248 0 .218.153.474.584.393C14.568 14.88 17 11.81 17 8.192 17 3.668 13.194 0 8.5 0zM3.184 11.67c-.02.04-.086.053-.146.025-.062-.027-.096-.082-.076-.123.018-.042.084-.054.146-.026.062.027.097.083.076.124zm.418.36c-.04.036-.12.019-.174-.038-.055-.058-.066-.134-.025-.17.042-.037.119-.02.175.037.055.058.066.134.024.17zm.287.46c-.053.034-.138.002-.19-.071-.052-.073-.052-.16 0-.196.054-.035.137-.003.19.07.053.073.053.16 0 .196zm.485.532c-.047.05-.146.036-.219-.031-.074-.066-.095-.16-.048-.21.047-.05.147-.035.22.032.074.066.096.16.047.21zm.627.18c-.021.064-.117.093-.213.066-.096-.028-.159-.103-.14-.168.02-.065.117-.095.213-.066.096.028.16.103.14.168zm.713.076c.002.068-.08.124-.18.125-.102.002-.184-.052-.185-.119 0-.068.08-.124.181-.125.101-.002.184.052.184.12zm.701-.026c.012.066-.058.134-.159.152-.098.017-.19-.023-.202-.089-.012-.067.06-.135.158-.152.1-.017.19.022.203.09z',
                fill: 'currentColor',
              }),
            }
          )
        )
      }
      function L(r) {
        return (0, t.jsxs)(
          'svg',
          i(
            {
              xmlns: 'http://www.w3.org/2000/svg',
              fill: 'none',
              viewBox: '0 0 24 24',
            },
            r,
            {
              children: [
                (0, t.jsx)('circle', {
                  className: 'opacity-25',
                  cx: 12,
                  cy: 12,
                  r: 10,
                  stroke: 'currentColor',
                  strokeWidth: 4,
                }),
                (0, t.jsx)('path', {
                  className: 'opacity-75',
                  fill: 'currentColor',
                  d: 'M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z',
                }),
              ],
            }
          )
        )
      }
    },
    370: function (r, e, n) {
      function t() {
        for (var r = arguments.length, e = new Array(r), n = 0; n < r; n++)
          e[n] = arguments[n]
        return e.filter(Boolean).join(' ')
      }
      n.d(e, {
        A: function () {
          return t
        },
      })
    },
  },
])
