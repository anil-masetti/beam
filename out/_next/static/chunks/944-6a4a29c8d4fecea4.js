'use strict'
;(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [944],
  {
    5754: function (e, t, n) {
      n.d(t, {
        Eh: function () {
          return ve
        },
        VY: function () {
          return ge
        },
        fC: function () {
          return me
        },
        xz: function () {
          return pe
        },
      })
      var r = n(7294),
        o = n.t(r, 2)
      const a = Boolean(
          null === globalThis || void 0 === globalThis
            ? void 0
            : globalThis.document
        )
          ? r.useLayoutEffect
          : () => {},
        i = o['useId'.toString()] || (() => {})
      let s = 0
      function u(e) {
        const [t, n] = r.useState(i())
        return (
          a(() => {
            e || n((e) => (null != e ? e : String(s++)))
          }, [e]),
          e || (t ? `radix-${t}` : '')
        )
      }
      function l(...e) {
        return (t) =>
          e.forEach((e) =>
            (function (e, t) {
              'function' == typeof e ? e(t) : null != e && (e.current = t)
            })(e, t)
          )
      }
      function c(...e) {
        return r.useCallback(l(...e), e)
      }
      var d = n(7462)
      const f = r.forwardRef((e, t) => {
        const { children: n, ...o } = e
        return r.Children.toArray(n).some(p)
          ? r.createElement(
              r.Fragment,
              null,
              r.Children.map(n, (e) =>
                p(e)
                  ? r.createElement(
                      h,
                      (0, d.Z)({}, o, { ref: t }),
                      e.props.children
                    )
                  : e
              )
            )
          : r.createElement(h, (0, d.Z)({}, o, { ref: t }), n)
      })
      f.displayName = 'Slot'
      const h = r.forwardRef((e, t) => {
        const { children: n, ...o } = e
        return r.isValidElement(n)
          ? r.cloneElement(n, { ...g(o, n.props), ref: l(t, n.ref) })
          : r.Children.count(n) > 1
          ? r.Children.only(null)
          : null
      })
      h.displayName = 'SlotClone'
      const m = ({ children: e }) => r.createElement(r.Fragment, null, e)
      function p(e) {
        return r.isValidElement(e) && e.type === m
      }
      function g(e, t) {
        const n = { ...t }
        for (const r in t) {
          const o = e[r],
            a = t[r]
          ;/^on[A-Z]/.test(r)
            ? (n[r] = (...e) => {
                null == a || a(...e), null == o || o(...e)
              })
            : 'style' === r
            ? (n[r] = { ...o, ...a })
            : 'className' === r && (n[r] = [o, a].filter(Boolean).join(' '))
        }
        return { ...e, ...n }
      }
      const v = [
          'a',
          'button',
          'div',
          'h2',
          'h3',
          'img',
          'li',
          'nav',
          'p',
          'span',
          'svg',
          'ul',
        ].reduce(
          (e, t) => ({
            ...e,
            [t]: r.forwardRef((e, n) => {
              const { asChild: o, ...a } = e,
                i = o ? f : t
              return (
                r.useEffect(() => {
                  window[Symbol.for('radix-ui')] = !0
                }, []),
                e.as && console.error(w),
                r.createElement(i, (0, d.Z)({}, a, { ref: n }))
              )
            }),
          }),
          {}
        ),
        w =
          'Warning: The `as` prop has been removed in favour of `asChild`. For details, see https://radix-ui.com/docs/primitives/overview/styling#changing-the-rendered-element',
        y = r.forwardRef((e, t) =>
          r.createElement(
            v.span,
            (0, d.Z)({}, e, {
              ref: t,
              style: {
                ...e.style,
                position: 'absolute',
                border: 0,
                width: 1,
                height: 1,
                padding: 0,
                margin: -1,
                overflow: 'hidden',
                clip: 'rect(0, 0, 0, 0)',
                whiteSpace: 'nowrap',
                wordWrap: 'normal',
              },
            })
          )
        )
      var b = n(3935)
      const M = r.forwardRef((e, t) => {
          var n, o
          const { containerRef: i, style: s, ...u } = e,
            l =
              null !== (n = null == i ? void 0 : i.current) && void 0 !== n
                ? n
                : null === globalThis ||
                  void 0 === globalThis ||
                  null === (o = globalThis.document) ||
                  void 0 === o
                ? void 0
                : o.body,
            [, c] = r.useState({})
          return (
            a(() => {
              c({})
            }, []),
            l
              ? b.createPortal(
                  r.createElement(
                    v.div,
                    (0, d.Z)({ 'data-radix-portal': '' }, u, {
                      ref: t,
                      style:
                        l === document.body
                          ? {
                              position: 'absolute',
                              top: 0,
                              left: 0,
                              zIndex: 2147483647,
                              ...s,
                            }
                          : void 0,
                    })
                  ),
                  l
                )
              : null
          )
        }),
        E = r.forwardRef((e, t) => {
          const { children: n, width: o = 10, height: a = 5, ...i } = e
          return r.createElement(
            v.svg,
            (0, d.Z)({}, i, {
              ref: t,
              width: o,
              height: a,
              viewBox: '0 0 30 10',
              preserveAspectRatio: 'none',
            }),
            e.asChild
              ? n
              : r.createElement('polygon', { points: '0,0 30,0 15,10' })
          )
        })
      function S(e) {
        const [t, n] = r.useState(void 0)
        return (
          r.useEffect(() => {
            if (e) {
              const t = new ResizeObserver((t) => {
                if (!Array.isArray(t)) return
                if (!t.length) return
                const r = t[0]
                let o, a
                if ('borderBoxSize' in r) {
                  const e = r.borderBoxSize,
                    t = Array.isArray(e) ? e[0] : e
                  ;(o = t.inlineSize), (a = t.blockSize)
                } else {
                  const t = e.getBoundingClientRect()
                  ;(o = t.width), (a = t.height)
                }
                n({ width: o, height: a })
              })
              return (
                t.observe(e, { box: 'border-box' }),
                () => {
                  n(void 0), t.unobserve(e)
                }
              )
            }
          }, [e]),
          t
        )
      }
      function C(e, t) {
        const n = T.get(e)
        return (
          void 0 === n
            ? (T.set(e, { rect: {}, callbacks: [t] }),
              1 === T.size && (x = requestAnimationFrame(D)))
            : (n.callbacks.push(t), t(e.getBoundingClientRect())),
          () => {
            const n = T.get(e)
            if (void 0 === n) return
            const r = n.callbacks.indexOf(t)
            r > -1 && n.callbacks.splice(r, 1),
              0 === n.callbacks.length &&
                (T.delete(e), 0 === T.size && cancelAnimationFrame(x))
          }
        )
      }
      let x
      const T = new Map()
      function D() {
        const e = []
        T.forEach((t, n) => {
          const r = n.getBoundingClientRect()
          var o, a
          ;(a = r),
            ((o = t.rect).width !== a.width ||
              o.height !== a.height ||
              o.top !== a.top ||
              o.right !== a.right ||
              o.bottom !== a.bottom ||
              o.left !== a.left) &&
              ((t.rect = r), e.push(t))
        }),
          e.forEach((e) => {
            e.callbacks.forEach((t) => t(e.rect))
          }),
          (x = requestAnimationFrame(D))
      }
      function P(e) {
        const [t, n] = r.useState()
        return (
          r.useEffect(() => {
            if (e) {
              const t = C(e, n)
              return () => {
                n(void 0), t()
              }
            }
          }, [e]),
          t
        )
      }
      function k(e, t = []) {
        let n = []
        const o = () => {
          const t = n.map((e) => r.createContext(e))
          return function (n) {
            const o = (null == n ? void 0 : n[e]) || t
            return r.useMemo(
              () => ({ [`__scope${e}`]: { ...n, [e]: o } }),
              [n, o]
            )
          }
        }
        return (
          (o.scopeName = e),
          [
            function (t, o) {
              const a = r.createContext(o),
                i = n.length
              function s(t) {
                const { scope: n, children: o, ...s } = t,
                  u = (null == n ? void 0 : n[e][i]) || a,
                  l = r.useMemo(() => s, Object.values(s))
                return r.createElement(u.Provider, { value: l }, o)
              }
              return (
                (n = [...n, o]),
                (s.displayName = t + 'Provider'),
                [
                  s,
                  function (n, s) {
                    const u = (null == s ? void 0 : s[e][i]) || a,
                      l = r.useContext(u)
                    if (l) return l
                    if (void 0 !== o) return o
                    throw new Error(`\`${n}\` must be used within \`${t}\``)
                  },
                ]
              )
            },
            A(o, ...t),
          ]
        )
      }
      function A(...e) {
        const t = e[0]
        if (1 === e.length) return t
        const n = () => {
          const n = e.map((e) => ({ useScope: e(), scopeName: e.scopeName }))
          return function (e) {
            const o = n.reduce(
              (t, { useScope: n, scopeName: r }) => ({
                ...t,
                ...n(e)[`__scope${r}`],
              }),
              {}
            )
            return r.useMemo(() => ({ [`__scope${t.scopeName}`]: o }), [o])
          }
        }
        return (n.scopeName = t.scopeName), n
      }
      function O(e, t, n) {
        const r = e['x' === n ? 'left' : 'top'],
          o = 'x' === n ? 'width' : 'height',
          a = e[o],
          i = t[o]
        return {
          before: r - i,
          start: r,
          center: r + (a - i) / 2,
          end: r + a - i,
          after: r + a,
        }
      }
      function N(e) {
        return {
          position: 'absolute',
          top: 0,
          left: 0,
          minWidth: 'max-content',
          willChange: 'transform',
          transform: `translate3d(${Math.round(
            e.x + window.scrollX
          )}px, ${Math.round(e.y + window.scrollY)}px, 0)`,
        }
      }
      function R(e, t, n, r, o) {
        const a = 'top' === t || 'bottom' === t,
          i = o ? o.width : 0,
          s = o ? o.height : 0,
          u = i / 2 + r
        let l = '',
          c = ''
        return (
          a
            ? ((l = {
                start: `${u}px`,
                center: 'center',
                end: e.width - u + 'px',
              }[n]),
              (c = 'top' === t ? `${e.height + s}px` : -s + 'px'))
            : ((l = 'left' === t ? `${e.width + s}px` : -s + 'px'),
              (c = {
                start: `${u}px`,
                center: 'center',
                end: e.height - u + 'px',
              }[n])),
          `${l} ${c}`
        )
      }
      const W = {
          position: 'fixed',
          top: 0,
          left: 0,
          opacity: 0,
          transform: 'translate3d(0, -200%, 0)',
        },
        _ = { position: 'absolute', opacity: 0 }
      function z({
        popperSize: e,
        arrowSize: t,
        arrowOffset: n,
        side: r,
        align: o,
      }) {
        const a = (e.width - t.width) / 2,
          i = (e.height - t.width) / 2,
          s = { top: 0, right: 90, bottom: 180, left: -90 }[r],
          u = Math.max(t.width, t.height),
          l = {
            width: `${u}px`,
            height: `${u}px`,
            transform: `rotate(${s}deg)`,
            willChange: 'transform',
            position: 'absolute',
            [r]: '100%',
            direction: F(r, o),
          }
        return (
          ('top' !== r && 'bottom' !== r) ||
            ('start' === o && (l.left = `${n}px`),
            'center' === o && (l.left = `${a}px`),
            'end' === o && (l.right = `${n}px`)),
          ('left' !== r && 'right' !== r) ||
            ('start' === o && (l.top = `${n}px`),
            'center' === o && (l.top = `${i}px`),
            'end' === o && (l.bottom = `${n}px`)),
          l
        )
      }
      function F(e, t) {
        return (('top' !== e && 'right' !== e) || 'end' !== t) &&
          (('bottom' !== e && 'left' !== e) || 'end' === t)
          ? 'ltr'
          : 'rtl'
      }
      function $(e) {
        return { top: 'bottom', right: 'left', bottom: 'top', left: 'right' }[e]
      }
      function j(e, t) {
        return {
          top: e.top < t.top,
          right: e.right > t.right,
          bottom: e.bottom > t.bottom,
          left: e.left < t.left,
        }
      }
      const [X, L] = k('Popper'),
        [B, I] = X('Popper'),
        Y = r.forwardRef((e, t) => {
          const { __scopePopper: n, virtualRef: o, ...a } = e,
            i = I('PopperAnchor', n),
            s = r.useRef(null),
            u = c(t, s)
          return (
            r.useEffect(() => {
              i.onAnchorChange((null == o ? void 0 : o.current) || s.current)
            }),
            o ? null : r.createElement(v.div, (0, d.Z)({}, a, { ref: u }))
          )
        }),
        [Z, U] = X('PopperContent'),
        q = (e) => {
          const { __scopePopper: t, children: n } = e,
            [o, a] = r.useState(null)
          return r.createElement(
            B,
            { scope: t, anchor: o, onAnchorChange: a },
            n
          )
        },
        J = Y,
        H = r.forwardRef((e, t) => {
          const {
              __scopePopper: n,
              side: o = 'bottom',
              sideOffset: a,
              align: i = 'center',
              alignOffset: s,
              collisionTolerance: u,
              avoidCollisions: l = !0,
              ...f
            } = e,
            h = I('PopperContent', n),
            [m, p] = r.useState(),
            g = P(h.anchor),
            [w, y] = r.useState(null),
            b = S(w),
            [M, E] = r.useState(null),
            C = S(M),
            x = c(t, (e) => y(e)),
            T = (function () {
              const [e, t] = r.useState(void 0)
              return (
                r.useEffect(() => {
                  let e
                  function n() {
                    t({ width: window.innerWidth, height: window.innerHeight })
                  }
                  function r() {
                    window.clearTimeout(e), (e = window.setTimeout(n, 100))
                  }
                  return (
                    n(),
                    window.addEventListener('resize', r),
                    () => window.removeEventListener('resize', r)
                  )
                }, []),
                e
              )
            })(),
            D = T ? DOMRect.fromRect({ ...T, x: 0, y: 0 }) : void 0,
            {
              popperStyles: k,
              arrowStyles: A,
              placedSide: F,
              placedAlign: X,
            } = (function ({
              anchorRect: e,
              popperSize: t,
              arrowSize: n,
              arrowOffset: r = 0,
              side: o,
              sideOffset: a = 0,
              align: i,
              alignOffset: s = 0,
              shouldAvoidCollisions: u = !0,
              collisionBoundariesRect: l,
              collisionTolerance: c = 0,
            }) {
              if (!e || !t || !l) return { popperStyles: W, arrowStyles: _ }
              const d = (function (e, t, n = 0, r = 0, o) {
                  const a = o ? o.height : 0,
                    i = O(t, e, 'x'),
                    s = O(t, e, 'y'),
                    u = s.before - n - a,
                    l = s.after + n + a,
                    c = i.before - n - a,
                    d = i.after + n + a
                  return {
                    top: {
                      start: { x: i.start + r, y: u },
                      center: { x: i.center, y: u },
                      end: { x: i.end - r, y: u },
                    },
                    right: {
                      start: { x: d, y: s.start + r },
                      center: { x: d, y: s.center },
                      end: { x: d, y: s.end - r },
                    },
                    bottom: {
                      start: { x: i.start + r, y: l },
                      center: { x: i.center, y: l },
                      end: { x: i.end - r, y: l },
                    },
                    left: {
                      start: { x: c, y: s.start + r },
                      center: { x: c, y: s.center },
                      end: { x: c, y: s.end - r },
                    },
                  }
                })(t, e, a, s, n),
                f = d[o][i]
              if (!1 === u) {
                const e = N(f)
                let a = _
                return (
                  n &&
                    (a = z({
                      popperSize: t,
                      arrowSize: n,
                      arrowOffset: r,
                      side: o,
                      align: i,
                    })),
                  {
                    popperStyles: {
                      ...e,
                      '--radix-popper-transform-origin': R(t, o, i, r, n),
                    },
                    arrowStyles: a,
                    placedSide: o,
                    placedAlign: i,
                  }
                )
              }
              const h = DOMRect.fromRect({ ...t, ...f }),
                m =
                  ((p = l),
                  (g = c),
                  DOMRect.fromRect({
                    width: p.width - 2 * g,
                    height: p.height - 2 * g,
                    x: p.left + g,
                    y: p.top + g,
                  }))
              var p, g
              const v = j(h, m),
                w = d[$(o)][i],
                y = (function (e, t, n) {
                  const r = $(e)
                  return t[e] && !n[r] ? r : e
                })(o, v, j(DOMRect.fromRect({ ...t, ...w }), m)),
                b = (function (e, t, n, r, o) {
                  const a = 'top' === n || 'bottom' === n,
                    i = a ? 'left' : 'top',
                    s = a ? 'right' : 'bottom',
                    u = a ? 'width' : 'height',
                    l = t[u] > e[u]
                  return ('start' !== r && 'center' !== r) ||
                    !((o[i] && l) || (o[s] && !l))
                    ? ('end' !== r && 'center' !== r) ||
                      !((o[s] && l) || (o[i] && !l))
                      ? r
                      : 'start'
                    : 'end'
                })(t, e, o, i, v),
                M = N(d[y][b])
              let E = _
              return (
                n &&
                  (E = z({
                    popperSize: t,
                    arrowSize: n,
                    arrowOffset: r,
                    side: y,
                    align: b,
                  })),
                {
                  popperStyles: {
                    ...M,
                    '--radix-popper-transform-origin': R(t, y, b, r, n),
                  },
                  arrowStyles: E,
                  placedSide: y,
                  placedAlign: b,
                }
              )
            })({
              anchorRect: g,
              popperSize: b,
              arrowSize: C,
              arrowOffset: m,
              side: o,
              sideOffset: a,
              align: i,
              alignOffset: s,
              shouldAvoidCollisions: l,
              collisionBoundariesRect: D,
              collisionTolerance: u,
            }),
            L = void 0 !== F
          return r.createElement(
            'div',
            { style: k, 'data-radix-popper-content-wrapper': '' },
            r.createElement(
              Z,
              {
                scope: n,
                arrowStyles: A,
                onArrowChange: E,
                onArrowOffsetChange: p,
              },
              r.createElement(
                v.div,
                (0, d.Z)({ 'data-side': F, 'data-align': X }, f, {
                  style: { ...f.style, animation: L ? void 0 : 'none' },
                  ref: x,
                })
              )
            )
          )
        }),
        V = r.forwardRef(function (e, t) {
          const { __scopePopper: n, offset: o, ...a } = e,
            i = U('PopperArrow', n),
            { onArrowOffsetChange: s } = i
          return (
            r.useEffect(() => s(o), [s, o]),
            r.createElement(
              'span',
              { style: { ...i.arrowStyles, pointerEvents: 'none' } },
              r.createElement(
                'span',
                {
                  ref: i.onArrowChange,
                  style: {
                    display: 'inline-block',
                    verticalAlign: 'top',
                    pointerEvents: 'auto',
                  },
                },
                r.createElement(
                  E,
                  (0, d.Z)({}, a, {
                    ref: t,
                    style: { ...a.style, display: 'block' },
                  })
                )
              )
            )
          )
        }),
        Q = (e) => {
          const { present: t, children: n } = e,
            o = (function (e) {
              const [t, n] = r.useState(),
                o = r.useRef({}),
                i = r.useRef(e),
                s = r.useRef('none'),
                u = e ? 'mounted' : 'unmounted',
                [l, c] = (function (e, t) {
                  return r.useReducer((e, n) => {
                    const r = t[e][n]
                    return null != r ? r : e
                  }, e)
                })(u, {
                  mounted: {
                    UNMOUNT: 'unmounted',
                    ANIMATION_OUT: 'unmountSuspended',
                  },
                  unmountSuspended: {
                    MOUNT: 'mounted',
                    ANIMATION_END: 'unmounted',
                  },
                  unmounted: { MOUNT: 'mounted' },
                })
              return (
                r.useEffect(() => {
                  const e = G(o.current)
                  s.current = 'mounted' === l ? e : 'none'
                }, [l]),
                a(() => {
                  const t = o.current,
                    n = i.current
                  if (n !== e) {
                    const r = s.current,
                      o = G(t)
                    if (e) c('MOUNT')
                    else if (
                      'none' === o ||
                      'none' === (null == t ? void 0 : t.display)
                    )
                      c('UNMOUNT')
                    else {
                      const e = r !== o
                      c(n && e ? 'ANIMATION_OUT' : 'UNMOUNT')
                    }
                    i.current = e
                  }
                }, [e, c]),
                a(() => {
                  if (t) {
                    const e = (e) => {
                        const n = G(o.current).includes(e.animationName)
                        e.target === t && n && c('ANIMATION_END')
                      },
                      n = (e) => {
                        e.target === t && (s.current = G(o.current))
                      }
                    return (
                      t.addEventListener('animationstart', n),
                      t.addEventListener('animationcancel', e),
                      t.addEventListener('animationend', e),
                      () => {
                        t.removeEventListener('animationstart', n),
                          t.removeEventListener('animationcancel', e),
                          t.removeEventListener('animationend', e)
                      }
                    )
                  }
                }, [t, c]),
                {
                  isPresent: ['mounted', 'unmountSuspended'].includes(l),
                  ref: r.useCallback((e) => {
                    e && (o.current = getComputedStyle(e)), n(e)
                  }, []),
                }
              )
            })(t),
            i =
              'function' == typeof n
                ? n({ present: o.isPresent })
                : r.Children.only(n),
            s = c(o.ref, i.ref)
          return 'function' == typeof n || o.isPresent
            ? r.cloneElement(i, { ref: s })
            : null
        }
      function G(e) {
        return (null == e ? void 0 : e.animationName) || 'none'
      }
      function K(e) {
        const t = r.useRef(e)
        return (
          r.useEffect(() => {
            t.current = e
          }, [e]),
          t.current
        )
      }
      function ee(e) {
        const t = r.useRef(e)
        return (
          r.useEffect(() => {
            t.current = e
          }),
          r.useMemo(
            () =>
              (...e) => {
                var n
                return null === (n = t.current) || void 0 === n
                  ? void 0
                  : n.call(t, ...e)
              },
            []
          )
        )
      }
      function te(e, t, { checkForDefaultPrevented: n = !0 } = {}) {
        return function (r) {
          if ((null == e || e(r), !1 === n || !r.defaultPrevented))
            return null == t ? void 0 : t(r)
        }
      }
      Q.displayName = 'Presence'
      const [ne, re] = k('Tooltip', [L]),
        oe = L(),
        ae = 700,
        [ie, se] = ne('TooltipProvider', {
          isOpenDelayed: !0,
          delayDuration: ae,
          onOpen: () => {},
          onClose: () => {},
        }),
        [ue, le] = ne('Tooltip'),
        ce = r.forwardRef((e, t) => {
          const { __scopeTooltip: n, ...o } = e,
            a = le('TooltipTrigger', n),
            i = oe(n),
            s = c(t, a.onTriggerChange),
            u = r.useRef(!1),
            l = r.useCallback(() => (u.current = !1), [])
          return (
            r.useEffect(
              () => () => document.removeEventListener('mouseup', l),
              [l]
            ),
            r.createElement(
              J,
              (0, d.Z)({ asChild: !0 }, i),
              r.createElement(
                v.button,
                (0, d.Z)(
                  {
                    'aria-describedby': a.open ? a.contentId : void 0,
                    'data-state': a.stateAttribute,
                  },
                  o,
                  {
                    ref: s,
                    onMouseEnter: te(e.onMouseEnter, a.onTriggerEnter),
                    onMouseLeave: te(e.onMouseLeave, a.onClose),
                    onMouseDown: te(e.onMouseDown, () => {
                      a.onClose(),
                        (u.current = !0),
                        document.addEventListener('mouseup', l, { once: !0 })
                    }),
                    onFocus: te(e.onFocus, () => {
                      u.current || a.onOpen()
                    }),
                    onBlur: te(e.onBlur, a.onClose),
                    onClick: te(e.onClick, a.onClose),
                  }
                )
              )
            )
          )
        }),
        de = r.forwardRef((e, t) => {
          const { forceMount: n, ...o } = e,
            a = le('TooltipContent', e.__scopeTooltip)
          return r.createElement(
            Q,
            { present: n || a.open },
            r.createElement(fe, (0, d.Z)({ ref: t }, o))
          )
        }),
        fe = r.forwardRef((e, t) => {
          const {
              __scopeTooltip: n,
              children: o,
              'aria-label': a,
              portalled: i = !0,
              ...s
            } = e,
            u = le('TooltipContent', n),
            l = oe(n),
            c = i ? M : r.Fragment,
            { onClose: f } = u
          return (
            (function (e) {
              const t = ee(e)
              r.useEffect(() => {
                const e = (e) => {
                  'Escape' === e.key && t(e)
                }
                return (
                  document.addEventListener('keydown', e),
                  () => document.removeEventListener('keydown', e)
                )
              }, [t])
            })(() => f()),
            r.useEffect(
              () => (
                document.addEventListener('tooltip.open', f),
                () => document.removeEventListener('tooltip.open', f)
              ),
              [f]
            ),
            r.createElement(
              c,
              null,
              r.createElement(he, { __scopeTooltip: n }),
              r.createElement(
                H,
                (0, d.Z)({ 'data-state': u.stateAttribute }, l, s, {
                  ref: t,
                  style: {
                    ...s.style,
                    '--radix-tooltip-content-transform-origin':
                      'var(--radix-popper-transform-origin)',
                  },
                }),
                r.createElement(m, null, o),
                r.createElement(y, { id: u.contentId, role: 'tooltip' }, a || o)
              )
            )
          )
        })
      function he(e) {
        const { __scopeTooltip: t } = e,
          n = le('CheckTriggerMoved', t),
          o = P(n.trigger),
          a = null == o ? void 0 : o.left,
          i = K(a),
          s = null == o ? void 0 : o.top,
          u = K(s),
          l = n.onClose
        return (
          r.useEffect(() => {
            ;((void 0 !== i && i !== a) || (void 0 !== u && u !== s)) && l()
          }, [l, i, u, a, s]),
          null
        )
      }
      const me = (e) => {
          const {
              __scopeTooltip: t,
              children: n,
              open: o,
              defaultOpen: a = !1,
              onOpenChange: i,
              delayDuration: s,
            } = e,
            l = se('Tooltip', t),
            c = oe(t),
            [d, f] = r.useState(null),
            h = u(),
            m = r.useRef(0),
            p = null != s ? s : l.delayDuration,
            g = r.useRef(!1),
            { onOpen: v, onClose: w } = l,
            [y = !1, b] = (function ({
              prop: e,
              defaultProp: t,
              onChange: n = () => {},
            }) {
              const [o, a] = (function ({ defaultProp: e, onChange: t }) {
                  const n = r.useState(e),
                    [o] = n,
                    a = r.useRef(o),
                    i = ee(t)
                  return (
                    r.useEffect(() => {
                      a.current !== o && (i(o), (a.current = o))
                    }, [o, a, i]),
                    n
                  )
                })({ defaultProp: t, onChange: n }),
                i = void 0 !== e,
                s = i ? e : o,
                u = ee(n)
              return [
                s,
                r.useCallback(
                  (t) => {
                    if (i) {
                      const n = t,
                        r = 'function' == typeof t ? n(e) : t
                      r !== e && u(r)
                    } else a(t)
                  },
                  [i, e, a, u]
                ),
              ]
            })({
              prop: o,
              defaultProp: a,
              onChange: (e) => {
                e &&
                  (document.dispatchEvent(new CustomEvent('tooltip.open')),
                  v()),
                  null == i || i(e)
              },
            }),
            M = r.useMemo(
              () =>
                y ? (g.current ? 'delayed-open' : 'instant-open') : 'closed',
              [y]
            ),
            E = r.useCallback(() => {
              window.clearTimeout(m.current), (g.current = !1), b(!0)
            }, [b]),
            S = r.useCallback(() => {
              window.clearTimeout(m.current),
                (m.current = window.setTimeout(() => {
                  ;(g.current = !0), b(!0)
                }, p))
            }, [p, b])
          return (
            r.useEffect(() => () => window.clearTimeout(m.current), []),
            r.createElement(
              q,
              c,
              r.createElement(
                ue,
                {
                  scope: t,
                  contentId: h,
                  open: y,
                  stateAttribute: M,
                  trigger: d,
                  onTriggerChange: f,
                  onTriggerEnter: r.useCallback(() => {
                    l.isOpenDelayed ? S() : E()
                  }, [l.isOpenDelayed, S, E]),
                  onOpen: r.useCallback(E, [E]),
                  onClose: r.useCallback(() => {
                    window.clearTimeout(m.current), b(!1), w()
                  }, [b, w]),
                },
                n
              )
            )
          )
        },
        pe = ce,
        ge = de,
        ve = r.forwardRef((e, t) => {
          const { __scopeTooltip: n, ...o } = e,
            a = oe(n)
          return r.createElement(V, (0, d.Z)({}, a, o, { ref: t }))
        })
    },
    9879: function (e, t, n) {
      function r(e, t) {
        if (t.length < e)
          throw new TypeError(
            e +
              ' argument' +
              (e > 1 ? 's' : '') +
              ' required, but only ' +
              t.length +
              ' present'
          )
      }
      function o(e) {
        r(1, arguments)
        var t = Object.prototype.toString.call(e)
        return e instanceof Date ||
          ('object' === typeof e && '[object Date]' === t)
          ? new Date(e.getTime())
          : 'number' === typeof e || '[object Number]' === t
          ? new Date(e)
          : (('string' !== typeof e && '[object String]' !== t) ||
              'undefined' === typeof console ||
              (console.warn(
                "Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://git.io/fjule"
              ),
              console.warn(new Error().stack)),
            new Date(NaN))
      }
      function a(e, t) {
        r(2, arguments)
        var n = o(e),
          a = o(t),
          i = n.getTime() - a.getTime()
        return i < 0 ? -1 : i > 0 ? 1 : i
      }
      function i(e, t) {
        r(2, arguments)
        var n = o(e),
          a = o(t),
          i = n.getFullYear() - a.getFullYear(),
          s = n.getMonth() - a.getMonth()
        return 12 * i + s
      }
      function s(e) {
        r(1, arguments)
        var t = o(e)
        return t.setHours(23, 59, 59, 999), t
      }
      function u(e) {
        r(1, arguments)
        var t = o(e),
          n = t.getMonth()
        return (
          t.setFullYear(t.getFullYear(), n + 1, 0),
          t.setHours(23, 59, 59, 999),
          t
        )
      }
      function l(e) {
        r(1, arguments)
        var t = o(e)
        return s(t).getTime() === u(t).getTime()
      }
      function c(e, t) {
        r(2, arguments)
        var n,
          s = o(e),
          u = o(t),
          c = a(s, u),
          d = Math.abs(i(s, u))
        if (d < 1) n = 0
        else {
          1 === s.getMonth() && s.getDate() > 27 && s.setDate(30),
            s.setMonth(s.getMonth() - c * d)
          var f = a(s, u) === -c
          l(o(e)) && 1 === d && 1 === a(e, u) && (f = !1),
            (n = c * (d - Number(f)))
        }
        return 0 === n ? 0 : n
      }
      function d(e, t) {
        return r(2, arguments), o(e).getTime() - o(t).getTime()
      }
      n.d(t, {
        Z: function () {
          return O
        },
      })
      var f = {
        ceil: Math.ceil,
        round: Math.round,
        floor: Math.floor,
        trunc: function (e) {
          return e < 0 ? Math.ceil(e) : Math.floor(e)
        },
      }
      function h(e) {
        return e ? f[e] : f.trunc
      }
      function m(e, t, n) {
        r(2, arguments)
        var o = d(e, t) / 1e3
        return h(null === n || void 0 === n ? void 0 : n.roundingMethod)(o)
      }
      var p = {
          lessThanXSeconds: {
            one: 'less than a second',
            other: 'less than {{count}} seconds',
          },
          xSeconds: { one: '1 second', other: '{{count}} seconds' },
          halfAMinute: 'half a minute',
          lessThanXMinutes: {
            one: 'less than a minute',
            other: 'less than {{count}} minutes',
          },
          xMinutes: { one: '1 minute', other: '{{count}} minutes' },
          aboutXHours: { one: 'about 1 hour', other: 'about {{count}} hours' },
          xHours: { one: '1 hour', other: '{{count}} hours' },
          xDays: { one: '1 day', other: '{{count}} days' },
          aboutXWeeks: { one: 'about 1 week', other: 'about {{count}} weeks' },
          xWeeks: { one: '1 week', other: '{{count}} weeks' },
          aboutXMonths: {
            one: 'about 1 month',
            other: 'about {{count}} months',
          },
          xMonths: { one: '1 month', other: '{{count}} months' },
          aboutXYears: { one: 'about 1 year', other: 'about {{count}} years' },
          xYears: { one: '1 year', other: '{{count}} years' },
          overXYears: { one: 'over 1 year', other: 'over {{count}} years' },
          almostXYears: {
            one: 'almost 1 year',
            other: 'almost {{count}} years',
          },
        },
        g = function (e, t, n) {
          var r,
            o = p[e]
          return (
            (r =
              'string' === typeof o
                ? o
                : 1 === t
                ? o.one
                : o.other.replace('{{count}}', t.toString())),
            null !== n && void 0 !== n && n.addSuffix
              ? n.comparison && n.comparison > 0
                ? 'in ' + r
                : r + ' ago'
              : r
          )
        }
      function v(e) {
        return function () {
          var t =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : {},
            n = t.width ? String(t.width) : e.defaultWidth,
            r = e.formats[n] || e.formats[e.defaultWidth]
          return r
        }
      }
      var w = {
          date: v({
            formats: {
              full: 'EEEE, MMMM do, y',
              long: 'MMMM do, y',
              medium: 'MMM d, y',
              short: 'MM/dd/yyyy',
            },
            defaultWidth: 'full',
          }),
          time: v({
            formats: {
              full: 'h:mm:ss a zzzz',
              long: 'h:mm:ss a z',
              medium: 'h:mm:ss a',
              short: 'h:mm a',
            },
            defaultWidth: 'full',
          }),
          dateTime: v({
            formats: {
              full: "{{date}} 'at' {{time}}",
              long: "{{date}} 'at' {{time}}",
              medium: '{{date}}, {{time}}',
              short: '{{date}}, {{time}}',
            },
            defaultWidth: 'full',
          }),
        },
        y = {
          lastWeek: "'last' eeee 'at' p",
          yesterday: "'yesterday at' p",
          today: "'today at' p",
          tomorrow: "'tomorrow at' p",
          nextWeek: "eeee 'at' p",
          other: 'P',
        }
      function b(e) {
        return function (t, n) {
          var r,
            o = n || {}
          if (
            'formatting' === (o.context ? String(o.context) : 'standalone') &&
            e.formattingValues
          ) {
            var a = e.defaultFormattingWidth || e.defaultWidth,
              i = o.width ? String(o.width) : a
            r = e.formattingValues[i] || e.formattingValues[a]
          } else {
            var s = e.defaultWidth,
              u = o.width ? String(o.width) : e.defaultWidth
            r = e.values[u] || e.values[s]
          }
          return r[e.argumentCallback ? e.argumentCallback(t) : t]
        }
      }
      function M(e) {
        return function (t) {
          var n =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : {},
            r = n.width,
            o =
              (r && e.matchPatterns[r]) || e.matchPatterns[e.defaultMatchWidth],
            a = t.match(o)
          if (!a) return null
          var i,
            s = a[0],
            u =
              (r && e.parsePatterns[r]) || e.parsePatterns[e.defaultParseWidth],
            l = Array.isArray(u)
              ? S(u, function (e) {
                  return e.test(s)
                })
              : E(u, function (e) {
                  return e.test(s)
                })
          ;(i = e.valueCallback ? e.valueCallback(l) : l),
            (i = n.valueCallback ? n.valueCallback(i) : i)
          var c = t.slice(s.length)
          return { value: i, rest: c }
        }
      }
      function E(e, t) {
        for (var n in e) if (e.hasOwnProperty(n) && t(e[n])) return n
      }
      function S(e, t) {
        for (var n = 0; n < e.length; n++) if (t(e[n])) return n
      }
      var C,
        x = {
          code: 'en-US',
          formatDistance: g,
          formatLong: w,
          formatRelative: function (e, t, n, r) {
            return y[e]
          },
          localize: {
            ordinalNumber: function (e, t) {
              var n = Number(e),
                r = n % 100
              if (r > 20 || r < 10)
                switch (r % 10) {
                  case 1:
                    return n + 'st'
                  case 2:
                    return n + 'nd'
                  case 3:
                    return n + 'rd'
                }
              return n + 'th'
            },
            era: b({
              values: {
                narrow: ['B', 'A'],
                abbreviated: ['BC', 'AD'],
                wide: ['Before Christ', 'Anno Domini'],
              },
              defaultWidth: 'wide',
            }),
            quarter: b({
              values: {
                narrow: ['1', '2', '3', '4'],
                abbreviated: ['Q1', 'Q2', 'Q3', 'Q4'],
                wide: [
                  '1st quarter',
                  '2nd quarter',
                  '3rd quarter',
                  '4th quarter',
                ],
              },
              defaultWidth: 'wide',
              argumentCallback: function (e) {
                return e - 1
              },
            }),
            month: b({
              values: {
                narrow: [
                  'J',
                  'F',
                  'M',
                  'A',
                  'M',
                  'J',
                  'J',
                  'A',
                  'S',
                  'O',
                  'N',
                  'D',
                ],
                abbreviated: [
                  'Jan',
                  'Feb',
                  'Mar',
                  'Apr',
                  'May',
                  'Jun',
                  'Jul',
                  'Aug',
                  'Sep',
                  'Oct',
                  'Nov',
                  'Dec',
                ],
                wide: [
                  'January',
                  'February',
                  'March',
                  'April',
                  'May',
                  'June',
                  'July',
                  'August',
                  'September',
                  'October',
                  'November',
                  'December',
                ],
              },
              defaultWidth: 'wide',
            }),
            day: b({
              values: {
                narrow: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
                short: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'],
                abbreviated: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
                wide: [
                  'Sunday',
                  'Monday',
                  'Tuesday',
                  'Wednesday',
                  'Thursday',
                  'Friday',
                  'Saturday',
                ],
              },
              defaultWidth: 'wide',
            }),
            dayPeriod: b({
              values: {
                narrow: {
                  am: 'a',
                  pm: 'p',
                  midnight: 'mi',
                  noon: 'n',
                  morning: 'morning',
                  afternoon: 'afternoon',
                  evening: 'evening',
                  night: 'night',
                },
                abbreviated: {
                  am: 'AM',
                  pm: 'PM',
                  midnight: 'midnight',
                  noon: 'noon',
                  morning: 'morning',
                  afternoon: 'afternoon',
                  evening: 'evening',
                  night: 'night',
                },
                wide: {
                  am: 'a.m.',
                  pm: 'p.m.',
                  midnight: 'midnight',
                  noon: 'noon',
                  morning: 'morning',
                  afternoon: 'afternoon',
                  evening: 'evening',
                  night: 'night',
                },
              },
              defaultWidth: 'wide',
              formattingValues: {
                narrow: {
                  am: 'a',
                  pm: 'p',
                  midnight: 'mi',
                  noon: 'n',
                  morning: 'in the morning',
                  afternoon: 'in the afternoon',
                  evening: 'in the evening',
                  night: 'at night',
                },
                abbreviated: {
                  am: 'AM',
                  pm: 'PM',
                  midnight: 'midnight',
                  noon: 'noon',
                  morning: 'in the morning',
                  afternoon: 'in the afternoon',
                  evening: 'in the evening',
                  night: 'at night',
                },
                wide: {
                  am: 'a.m.',
                  pm: 'p.m.',
                  midnight: 'midnight',
                  noon: 'noon',
                  morning: 'in the morning',
                  afternoon: 'in the afternoon',
                  evening: 'in the evening',
                  night: 'at night',
                },
              },
              defaultFormattingWidth: 'wide',
            }),
          },
          match: {
            ordinalNumber:
              ((C = {
                matchPattern: /^(\d+)(th|st|nd|rd)?/i,
                parsePattern: /\d+/i,
                valueCallback: function (e) {
                  return parseInt(e, 10)
                },
              }),
              function (e) {
                var t =
                    arguments.length > 1 && void 0 !== arguments[1]
                      ? arguments[1]
                      : {},
                  n = e.match(C.matchPattern)
                if (!n) return null
                var r = n[0],
                  o = e.match(C.parsePattern)
                if (!o) return null
                var a = C.valueCallback ? C.valueCallback(o[0]) : o[0]
                a = t.valueCallback ? t.valueCallback(a) : a
                var i = e.slice(r.length)
                return { value: a, rest: i }
              }),
            era: M({
              matchPatterns: {
                narrow: /^(b|a)/i,
                abbreviated:
                  /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
                wide: /^(before christ|before common era|anno domini|common era)/i,
              },
              defaultMatchWidth: 'wide',
              parsePatterns: { any: [/^b/i, /^(a|c)/i] },
              defaultParseWidth: 'any',
            }),
            quarter: M({
              matchPatterns: {
                narrow: /^[1234]/i,
                abbreviated: /^q[1234]/i,
                wide: /^[1234](th|st|nd|rd)? quarter/i,
              },
              defaultMatchWidth: 'wide',
              parsePatterns: { any: [/1/i, /2/i, /3/i, /4/i] },
              defaultParseWidth: 'any',
              valueCallback: function (e) {
                return e + 1
              },
            }),
            month: M({
              matchPatterns: {
                narrow: /^[jfmasond]/i,
                abbreviated:
                  /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
                wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i,
              },
              defaultMatchWidth: 'wide',
              parsePatterns: {
                narrow: [
                  /^j/i,
                  /^f/i,
                  /^m/i,
                  /^a/i,
                  /^m/i,
                  /^j/i,
                  /^j/i,
                  /^a/i,
                  /^s/i,
                  /^o/i,
                  /^n/i,
                  /^d/i,
                ],
                any: [
                  /^ja/i,
                  /^f/i,
                  /^mar/i,
                  /^ap/i,
                  /^may/i,
                  /^jun/i,
                  /^jul/i,
                  /^au/i,
                  /^s/i,
                  /^o/i,
                  /^n/i,
                  /^d/i,
                ],
              },
              defaultParseWidth: 'any',
            }),
            day: M({
              matchPatterns: {
                narrow: /^[smtwf]/i,
                short: /^(su|mo|tu|we|th|fr|sa)/i,
                abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
                wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i,
              },
              defaultMatchWidth: 'wide',
              parsePatterns: {
                narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
                any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i],
              },
              defaultParseWidth: 'any',
            }),
            dayPeriod: M({
              matchPatterns: {
                narrow:
                  /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
                any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i,
              },
              defaultMatchWidth: 'any',
              parsePatterns: {
                any: {
                  am: /^a/i,
                  pm: /^p/i,
                  midnight: /^mi/i,
                  noon: /^no/i,
                  morning: /morning/i,
                  afternoon: /afternoon/i,
                  evening: /evening/i,
                  night: /night/i,
                },
              },
              defaultParseWidth: 'any',
            }),
          },
          options: { weekStartsOn: 0, firstWeekContainsDate: 1 },
        }
      function T(e) {
        return (function (e, t) {
          if (null == e)
            throw new TypeError(
              'assign requires that input parameter not be null or undefined'
            )
          for (var n in (t = t || {}))
            Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n])
          return e
        })({}, e)
      }
      function D(e) {
        var t = new Date(
          Date.UTC(
            e.getFullYear(),
            e.getMonth(),
            e.getDate(),
            e.getHours(),
            e.getMinutes(),
            e.getSeconds(),
            e.getMilliseconds()
          )
        )
        return t.setUTCFullYear(e.getFullYear()), e.getTime() - t.getTime()
      }
      var P = 1440,
        k = 43200
      function A(e, t) {
        var n =
          arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}
        r(2, arguments)
        var i = n.locale || x
        if (!i.formatDistance)
          throw new RangeError('locale must contain formatDistance property')
        var s = a(e, t)
        if (isNaN(s)) throw new RangeError('Invalid time value')
        var u,
          l,
          d = T(n)
        ;(d.addSuffix = Boolean(n.addSuffix)),
          (d.comparison = s),
          s > 0 ? ((u = o(t)), (l = o(e))) : ((u = o(e)), (l = o(t)))
        var f,
          h = m(l, u),
          p = (D(l) - D(u)) / 1e3,
          g = Math.round((h - p) / 60)
        if (g < 2)
          return n.includeSeconds
            ? h < 5
              ? i.formatDistance('lessThanXSeconds', 5, d)
              : h < 10
              ? i.formatDistance('lessThanXSeconds', 10, d)
              : h < 20
              ? i.formatDistance('lessThanXSeconds', 20, d)
              : h < 40
              ? i.formatDistance('halfAMinute', null, d)
              : h < 60
              ? i.formatDistance('lessThanXMinutes', 1, d)
              : i.formatDistance('xMinutes', 1, d)
            : 0 === g
            ? i.formatDistance('lessThanXMinutes', 1, d)
            : i.formatDistance('xMinutes', g, d)
        if (g < 45) return i.formatDistance('xMinutes', g, d)
        if (g < 90) return i.formatDistance('aboutXHours', 1, d)
        if (g < P) {
          var v = Math.round(g / 60)
          return i.formatDistance('aboutXHours', v, d)
        }
        if (g < 2520) return i.formatDistance('xDays', 1, d)
        if (g < k) {
          var w = Math.round(g / P)
          return i.formatDistance('xDays', w, d)
        }
        if (g < 86400)
          return (f = Math.round(g / k)), i.formatDistance('aboutXMonths', f, d)
        if ((f = c(l, u)) < 12) {
          var y = Math.round(g / k)
          return i.formatDistance('xMonths', y, d)
        }
        var b = f % 12,
          M = Math.floor(f / 12)
        return b < 3
          ? i.formatDistance('aboutXYears', M, d)
          : b < 9
          ? i.formatDistance('overXYears', M, d)
          : i.formatDistance('almostXYears', M + 1, d)
      }
      function O(e, t) {
        return r(1, arguments), A(e, Date.now(), t)
      }
    },
  },
])
