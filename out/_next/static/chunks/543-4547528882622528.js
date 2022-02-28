;(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [543],
  {
    6354: function (e, t, n) {
      'use strict'
      n.d(t, {
        r: function () {
          return b
        },
      })
      var r = n(9642),
        i = n(7294),
        o = n(8529),
        a = n(7471),
        l = n(2659),
        s = n(9016),
        c = n(2506),
        u = n(7587),
        d = n(6637),
        p = n(852),
        h = (0, i.createContext)(null)
      function f() {
        var e = (0, i.useContext)(h)
        if (null === e) {
          var t = new Error(
            'You used a <Label /> component, but it is not inside a relevant parent.'
          )
          throw (Error.captureStackTrace && Error.captureStackTrace(t, f), t)
        }
        return e
      }
      var m = (0, i.createContext)(null)
      m.displayName = 'GroupContext'
      var g = i.Fragment
      function b(e) {
        var t = e.checked,
          n = e.onChange,
          u = (0, r.gK)(e, ['checked', 'onChange']),
          p = 'headlessui-switch-' + (0, c.M)(),
          h = (0, i.useContext)(m),
          f = (0, i.useRef)(null),
          g = (0, a.T)(f, null === h ? null : h.setSwitch),
          b = (0, i.useCallback)(
            function () {
              return n(!t)
            },
            [n, t]
          ),
          k = (0, i.useCallback)(
            function (e) {
              if ((0, s.P)(e.currentTarget)) return e.preventDefault()
              e.preventDefault(), b()
            },
            [b]
          ),
          v = (0, i.useCallback)(
            function (e) {
              e.key !== l.R.Tab && e.preventDefault(),
                e.key === l.R.Space && b()
            },
            [b]
          ),
          x = (0, i.useCallback)(function (e) {
            return e.preventDefault()
          }, []),
          y = (0, i.useMemo)(
            function () {
              return { checked: t }
            },
            [t]
          ),
          w = {
            id: p,
            ref: g,
            role: 'switch',
            type: (0, d.f)(e, f),
            tabIndex: 0,
            'aria-checked': t,
            'aria-labelledby': null == h ? void 0 : h.labelledby,
            'aria-describedby': null == h ? void 0 : h.describedby,
            onClick: k,
            onKeyUp: v,
            onKeyPress: x,
          }
        return (0, o.sY)({
          props: (0, r.gY)({}, u, w),
          slot: y,
          defaultTag: 'button',
          name: 'Switch',
        })
      }
      ;(b.Group = function (e) {
        var t = (0, i.useState)(null),
          n = t[0],
          r = t[1],
          a = (function () {
            var e = (0, i.useState)([]),
              t = e[0],
              n = e[1]
            return [
              t.length > 0 ? t.join(' ') : void 0,
              (0, i.useMemo)(
                function () {
                  return function (e) {
                    var t = (0, i.useCallback)(function (e) {
                        return (
                          n(function (t) {
                            return [].concat(t, [e])
                          }),
                          function () {
                            return n(function (t) {
                              var n = t.slice(),
                                r = n.indexOf(e)
                              return -1 !== r && n.splice(r, 1), n
                            })
                          }
                        )
                      }, []),
                      r = (0, i.useMemo)(
                        function () {
                          return {
                            register: t,
                            slot: e.slot,
                            name: e.name,
                            props: e.props,
                          }
                        },
                        [t, e.slot, e.name, e.props]
                      )
                    return i.createElement(h.Provider, { value: r }, e.children)
                  }
                },
                [n]
              ),
            ]
          })(),
          l = a[0],
          s = a[1],
          c = (0, u.f)(),
          d = c[0],
          p = c[1],
          f = (0, i.useMemo)(
            function () {
              return { switch: n, setSwitch: r, labelledby: l, describedby: d }
            },
            [n, r, l, d]
          )
        return i.createElement(
          p,
          { name: 'Switch.Description' },
          i.createElement(
            s,
            {
              name: 'Switch.Label',
              props: {
                onClick: function () {
                  n && (n.click(), n.focus({ preventScroll: !0 }))
                },
              },
            },
            i.createElement(
              m.Provider,
              { value: f },
              (0, o.sY)({ props: e, defaultTag: g, name: 'Switch.Group' })
            )
          )
        )
      }),
        (b.Label = function (e) {
          var t = e.passive,
            n = void 0 !== t && t,
            i = (0, r.gK)(e, ['passive']),
            a = f(),
            l = 'headlessui-label-' + (0, c.M)()
          ;(0, p.e)(
            function () {
              return a.register(l)
            },
            [l, a.register]
          )
          var s = (0, r.gY)({}, a.props, { id: l }),
            u = (0, r.gY)({}, i, s)
          return (
            n && delete u.onClick,
            (0, o.sY)({
              props: u,
              slot: a.slot || {},
              defaultTag: 'label',
              name: a.name || 'Label',
            })
          )
        }),
        (b.Description = u.d)
    },
    7856: function (e) {
      e.exports = (function () {
        'use strict'
        function e(e) {
          if (Array.isArray(e)) {
            for (var t = 0, n = Array(e.length); t < e.length; t++) n[t] = e[t]
            return n
          }
          return Array.from(e)
        }
        var t = Object.hasOwnProperty,
          n = Object.setPrototypeOf,
          r = Object.isFrozen,
          i = Object.getPrototypeOf,
          o = Object.getOwnPropertyDescriptor,
          a = Object.freeze,
          l = Object.seal,
          s = Object.create,
          c = 'undefined' !== typeof Reflect && Reflect,
          u = c.apply,
          d = c.construct
        u ||
          (u = function (e, t, n) {
            return e.apply(t, n)
          }),
          a ||
            (a = function (e) {
              return e
            }),
          l ||
            (l = function (e) {
              return e
            }),
          d ||
            (d = function (t, n) {
              return new (Function.prototype.bind.apply(
                t,
                [null].concat(e(n))
              ))()
            })
        var p = w(Array.prototype.forEach),
          h = w(Array.prototype.pop),
          f = w(Array.prototype.push),
          m = w(String.prototype.toLowerCase),
          g = w(String.prototype.match),
          b = w(String.prototype.replace),
          k = w(String.prototype.indexOf),
          v = w(String.prototype.trim),
          x = w(RegExp.prototype.test),
          y = S(TypeError)
        function w(e) {
          return function (t) {
            for (
              var n = arguments.length, r = Array(n > 1 ? n - 1 : 0), i = 1;
              i < n;
              i++
            )
              r[i - 1] = arguments[i]
            return u(e, t, r)
          }
        }
        function S(e) {
          return function () {
            for (var t = arguments.length, n = Array(t), r = 0; r < t; r++)
              n[r] = arguments[r]
            return d(e, n)
          }
        }
        function C(e, t) {
          n && n(e, null)
          for (var i = t.length; i--; ) {
            var o = t[i]
            if ('string' === typeof o) {
              var a = m(o)
              a !== o && (r(t) || (t[i] = a), (o = a))
            }
            e[o] = !0
          }
          return e
        }
        function _(e) {
          var n = s(null),
            r = void 0
          for (r in e) u(t, e, [r]) && (n[r] = e[r])
          return n
        }
        function E(e, t) {
          for (; null !== e; ) {
            var n = o(e, t)
            if (n) {
              if (n.get) return w(n.get)
              if ('function' === typeof n.value) return w(n.value)
            }
            e = i(e)
          }
          function r(e) {
            return console.warn('fallback value for', e), null
          }
          return r
        }
        var T = a([
            'a',
            'abbr',
            'acronym',
            'address',
            'area',
            'article',
            'aside',
            'audio',
            'b',
            'bdi',
            'bdo',
            'big',
            'blink',
            'blockquote',
            'body',
            'br',
            'button',
            'canvas',
            'caption',
            'center',
            'cite',
            'code',
            'col',
            'colgroup',
            'content',
            'data',
            'datalist',
            'dd',
            'decorator',
            'del',
            'details',
            'dfn',
            'dialog',
            'dir',
            'div',
            'dl',
            'dt',
            'element',
            'em',
            'fieldset',
            'figcaption',
            'figure',
            'font',
            'footer',
            'form',
            'h1',
            'h2',
            'h3',
            'h4',
            'h5',
            'h6',
            'head',
            'header',
            'hgroup',
            'hr',
            'html',
            'i',
            'img',
            'input',
            'ins',
            'kbd',
            'label',
            'legend',
            'li',
            'main',
            'map',
            'mark',
            'marquee',
            'menu',
            'menuitem',
            'meter',
            'nav',
            'nobr',
            'ol',
            'optgroup',
            'option',
            'output',
            'p',
            'picture',
            'pre',
            'progress',
            'q',
            'rp',
            'rt',
            'ruby',
            's',
            'samp',
            'section',
            'select',
            'shadow',
            'small',
            'source',
            'spacer',
            'span',
            'strike',
            'strong',
            'style',
            'sub',
            'summary',
            'sup',
            'table',
            'tbody',
            'td',
            'template',
            'textarea',
            'tfoot',
            'th',
            'thead',
            'time',
            'tr',
            'track',
            'tt',
            'u',
            'ul',
            'var',
            'video',
            'wbr',
          ]),
          A = a([
            'svg',
            'a',
            'altglyph',
            'altglyphdef',
            'altglyphitem',
            'animatecolor',
            'animatemotion',
            'animatetransform',
            'circle',
            'clippath',
            'defs',
            'desc',
            'ellipse',
            'filter',
            'font',
            'g',
            'glyph',
            'glyphref',
            'hkern',
            'image',
            'line',
            'lineargradient',
            'marker',
            'mask',
            'metadata',
            'mpath',
            'path',
            'pattern',
            'polygon',
            'polyline',
            'radialgradient',
            'rect',
            'stop',
            'style',
            'switch',
            'symbol',
            'text',
            'textpath',
            'title',
            'tref',
            'tspan',
            'view',
            'vkern',
          ]),
          O = a([
            'feBlend',
            'feColorMatrix',
            'feComponentTransfer',
            'feComposite',
            'feConvolveMatrix',
            'feDiffuseLighting',
            'feDisplacementMap',
            'feDistantLight',
            'feFlood',
            'feFuncA',
            'feFuncB',
            'feFuncG',
            'feFuncR',
            'feGaussianBlur',
            'feImage',
            'feMerge',
            'feMergeNode',
            'feMorphology',
            'feOffset',
            'fePointLight',
            'feSpecularLighting',
            'feSpotLight',
            'feTile',
            'feTurbulence',
          ]),
          N = a([
            'animate',
            'color-profile',
            'cursor',
            'discard',
            'fedropshadow',
            'font-face',
            'font-face-format',
            'font-face-name',
            'font-face-src',
            'font-face-uri',
            'foreignobject',
            'hatch',
            'hatchpath',
            'mesh',
            'meshgradient',
            'meshpatch',
            'meshrow',
            'missing-glyph',
            'script',
            'set',
            'solidcolor',
            'unknown',
            'use',
          ]),
          L = a([
            'math',
            'menclose',
            'merror',
            'mfenced',
            'mfrac',
            'mglyph',
            'mi',
            'mlabeledtr',
            'mmultiscripts',
            'mn',
            'mo',
            'mover',
            'mpadded',
            'mphantom',
            'mroot',
            'mrow',
            'ms',
            'mspace',
            'msqrt',
            'mstyle',
            'msub',
            'msup',
            'msubsup',
            'mtable',
            'mtd',
            'mtext',
            'mtr',
            'munder',
            'munderover',
          ]),
          R = a([
            'maction',
            'maligngroup',
            'malignmark',
            'mlongdiv',
            'mscarries',
            'mscarry',
            'msgroup',
            'mstack',
            'msline',
            'msrow',
            'semantics',
            'annotation',
            'annotation-xml',
            'mprescripts',
            'none',
          ]),
          z = a(['#text']),
          I = a([
            'accept',
            'action',
            'align',
            'alt',
            'autocapitalize',
            'autocomplete',
            'autopictureinpicture',
            'autoplay',
            'background',
            'bgcolor',
            'border',
            'capture',
            'cellpadding',
            'cellspacing',
            'checked',
            'cite',
            'class',
            'clear',
            'color',
            'cols',
            'colspan',
            'controls',
            'controlslist',
            'coords',
            'crossorigin',
            'datetime',
            'decoding',
            'default',
            'dir',
            'disabled',
            'disablepictureinpicture',
            'disableremoteplayback',
            'download',
            'draggable',
            'enctype',
            'enterkeyhint',
            'face',
            'for',
            'headers',
            'height',
            'hidden',
            'high',
            'href',
            'hreflang',
            'id',
            'inputmode',
            'integrity',
            'ismap',
            'kind',
            'label',
            'lang',
            'list',
            'loading',
            'loop',
            'low',
            'max',
            'maxlength',
            'media',
            'method',
            'min',
            'minlength',
            'multiple',
            'muted',
            'name',
            'nonce',
            'noshade',
            'novalidate',
            'nowrap',
            'open',
            'optimum',
            'pattern',
            'placeholder',
            'playsinline',
            'poster',
            'preload',
            'pubdate',
            'radiogroup',
            'readonly',
            'rel',
            'required',
            'rev',
            'reversed',
            'role',
            'rows',
            'rowspan',
            'spellcheck',
            'scope',
            'selected',
            'shape',
            'size',
            'sizes',
            'span',
            'srclang',
            'start',
            'src',
            'srcset',
            'step',
            'style',
            'summary',
            'tabindex',
            'title',
            'translate',
            'type',
            'usemap',
            'valign',
            'value',
            'width',
            'xmlns',
            'slot',
          ]),
          M = a([
            'accent-height',
            'accumulate',
            'additive',
            'alignment-baseline',
            'ascent',
            'attributename',
            'attributetype',
            'azimuth',
            'basefrequency',
            'baseline-shift',
            'begin',
            'bias',
            'by',
            'class',
            'clip',
            'clippathunits',
            'clip-path',
            'clip-rule',
            'color',
            'color-interpolation',
            'color-interpolation-filters',
            'color-profile',
            'color-rendering',
            'cx',
            'cy',
            'd',
            'dx',
            'dy',
            'diffuseconstant',
            'direction',
            'display',
            'divisor',
            'dur',
            'edgemode',
            'elevation',
            'end',
            'fill',
            'fill-opacity',
            'fill-rule',
            'filter',
            'filterunits',
            'flood-color',
            'flood-opacity',
            'font-family',
            'font-size',
            'font-size-adjust',
            'font-stretch',
            'font-style',
            'font-variant',
            'font-weight',
            'fx',
            'fy',
            'g1',
            'g2',
            'glyph-name',
            'glyphref',
            'gradientunits',
            'gradienttransform',
            'height',
            'href',
            'id',
            'image-rendering',
            'in',
            'in2',
            'k',
            'k1',
            'k2',
            'k3',
            'k4',
            'kerning',
            'keypoints',
            'keysplines',
            'keytimes',
            'lang',
            'lengthadjust',
            'letter-spacing',
            'kernelmatrix',
            'kernelunitlength',
            'lighting-color',
            'local',
            'marker-end',
            'marker-mid',
            'marker-start',
            'markerheight',
            'markerunits',
            'markerwidth',
            'maskcontentunits',
            'maskunits',
            'max',
            'mask',
            'media',
            'method',
            'mode',
            'min',
            'name',
            'numoctaves',
            'offset',
            'operator',
            'opacity',
            'order',
            'orient',
            'orientation',
            'origin',
            'overflow',
            'paint-order',
            'path',
            'pathlength',
            'patterncontentunits',
            'patterntransform',
            'patternunits',
            'points',
            'preservealpha',
            'preserveaspectratio',
            'primitiveunits',
            'r',
            'rx',
            'ry',
            'radius',
            'refx',
            'refy',
            'repeatcount',
            'repeatdur',
            'restart',
            'result',
            'rotate',
            'scale',
            'seed',
            'shape-rendering',
            'specularconstant',
            'specularexponent',
            'spreadmethod',
            'startoffset',
            'stddeviation',
            'stitchtiles',
            'stop-color',
            'stop-opacity',
            'stroke-dasharray',
            'stroke-dashoffset',
            'stroke-linecap',
            'stroke-linejoin',
            'stroke-miterlimit',
            'stroke-opacity',
            'stroke',
            'stroke-width',
            'style',
            'surfacescale',
            'systemlanguage',
            'tabindex',
            'targetx',
            'targety',
            'transform',
            'transform-origin',
            'text-anchor',
            'text-decoration',
            'text-rendering',
            'textlength',
            'type',
            'u1',
            'u2',
            'unicode',
            'values',
            'viewbox',
            'visibility',
            'version',
            'vert-adv-y',
            'vert-origin-x',
            'vert-origin-y',
            'width',
            'word-spacing',
            'wrap',
            'writing-mode',
            'xchannelselector',
            'ychannelselector',
            'x',
            'x1',
            'x2',
            'xmlns',
            'y',
            'y1',
            'y2',
            'z',
            'zoomandpan',
          ]),
          H = a([
            'accent',
            'accentunder',
            'align',
            'bevelled',
            'close',
            'columnsalign',
            'columnlines',
            'columnspan',
            'denomalign',
            'depth',
            'dir',
            'display',
            'displaystyle',
            'encoding',
            'fence',
            'frame',
            'height',
            'href',
            'id',
            'largeop',
            'length',
            'linethickness',
            'lspace',
            'lquote',
            'mathbackground',
            'mathcolor',
            'mathsize',
            'mathvariant',
            'maxsize',
            'minsize',
            'movablelimits',
            'notation',
            'numalign',
            'open',
            'rowalign',
            'rowlines',
            'rowspacing',
            'rowspan',
            'rspace',
            'rquote',
            'scriptlevel',
            'scriptminsize',
            'scriptsizemultiplier',
            'selection',
            'separator',
            'separators',
            'stretchy',
            'subscriptshift',
            'supscriptshift',
            'symmetric',
            'voffset',
            'width',
            'xmlns',
          ]),
          P = a([
            'xlink:href',
            'xml:id',
            'xlink:title',
            'xml:space',
            'xmlns:xlink',
          ]),
          D = l(/\{\{[\s\S]*|[\s\S]*\}\}/gm),
          $ = l(/<%[\s\S]*|[\s\S]*%>/gm),
          j = l(/^data-[\-\w.\u00B7-\uFFFF]/),
          U = l(/^aria-[\-\w]+$/),
          F = l(
            /^(?:(?:(?:f|ht)tps?|mailto|tel|callto|cid|xmpp):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i
          ),
          B = l(/^(?:\w+script|data):/i),
          W = l(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g),
          q =
            'function' === typeof Symbol && 'symbol' === typeof Symbol.iterator
              ? function (e) {
                  return typeof e
                }
              : function (e) {
                  return e &&
                    'function' === typeof Symbol &&
                    e.constructor === Symbol &&
                    e !== Symbol.prototype
                    ? 'symbol'
                    : typeof e
                }
        function Z(e) {
          if (Array.isArray(e)) {
            for (var t = 0, n = Array(e.length); t < e.length; t++) n[t] = e[t]
            return n
          }
          return Array.from(e)
        }
        var K = function () {
            return 'undefined' === typeof window ? null : window
          },
          G = function (e, t) {
            if (
              'object' !== ('undefined' === typeof e ? 'undefined' : q(e)) ||
              'function' !== typeof e.createPolicy
            )
              return null
            var n = null,
              r = 'data-tt-policy-suffix'
            t.currentScript &&
              t.currentScript.hasAttribute(r) &&
              (n = t.currentScript.getAttribute(r))
            var i = 'dompurify' + (n ? '#' + n : '')
            try {
              return e.createPolicy(i, {
                createHTML: function (e) {
                  return e
                },
              })
            } catch (o) {
              return (
                console.warn(
                  'TrustedTypes policy ' + i + ' could not be created.'
                ),
                null
              )
            }
          }
        function Q() {
          var e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : K(),
            t = function (e) {
              return Q(e)
            }
          if (
            ((t.version = '2.3.5'),
            (t.removed = []),
            !e || !e.document || 9 !== e.document.nodeType)
          )
            return (t.isSupported = !1), t
          var n = e.document,
            r = e.document,
            i = e.DocumentFragment,
            o = e.HTMLTemplateElement,
            l = e.Node,
            s = e.Element,
            c = e.NodeFilter,
            u = e.NamedNodeMap,
            d = void 0 === u ? e.NamedNodeMap || e.MozNamedAttrMap : u,
            w = e.HTMLFormElement,
            S = e.DOMParser,
            Y = e.trustedTypes,
            V = s.prototype,
            X = E(V, 'cloneNode'),
            J = E(V, 'nextSibling'),
            ee = E(V, 'childNodes'),
            te = E(V, 'parentNode')
          if ('function' === typeof o) {
            var ne = r.createElement('template')
            ne.content &&
              ne.content.ownerDocument &&
              (r = ne.content.ownerDocument)
          }
          var re = G(Y, n),
            ie = re ? re.createHTML('') : '',
            oe = r,
            ae = oe.implementation,
            le = oe.createNodeIterator,
            se = oe.createDocumentFragment,
            ce = oe.getElementsByTagName,
            ue = n.importNode,
            de = {}
          try {
            de = _(r).documentMode ? r.documentMode : {}
          } catch (St) {}
          var pe = {}
          t.isSupported =
            'function' === typeof te &&
            ae &&
            'undefined' !== typeof ae.createHTMLDocument &&
            9 !== de
          var he = D,
            fe = $,
            me = j,
            ge = U,
            be = B,
            ke = W,
            ve = F,
            xe = null,
            ye = C({}, [].concat(Z(T), Z(A), Z(O), Z(L), Z(z))),
            we = null,
            Se = C({}, [].concat(Z(I), Z(M), Z(H), Z(P))),
            Ce = Object.seal(
              Object.create(null, {
                tagNameCheck: {
                  writable: !0,
                  configurable: !1,
                  enumerable: !0,
                  value: null,
                },
                attributeNameCheck: {
                  writable: !0,
                  configurable: !1,
                  enumerable: !0,
                  value: null,
                },
                allowCustomizedBuiltInElements: {
                  writable: !0,
                  configurable: !1,
                  enumerable: !0,
                  value: !1,
                },
              })
            ),
            _e = null,
            Ee = null,
            Te = !0,
            Ae = !0,
            Oe = !1,
            Ne = !1,
            Le = !1,
            Re = !1,
            ze = !1,
            Ie = !1,
            Me = !1,
            He = !1,
            Pe = !0,
            De = !0,
            $e = !1,
            je = {},
            Ue = null,
            Fe = C({}, [
              'annotation-xml',
              'audio',
              'colgroup',
              'desc',
              'foreignobject',
              'head',
              'iframe',
              'math',
              'mi',
              'mn',
              'mo',
              'ms',
              'mtext',
              'noembed',
              'noframes',
              'noscript',
              'plaintext',
              'script',
              'style',
              'svg',
              'template',
              'thead',
              'title',
              'video',
              'xmp',
            ]),
            Be = null,
            We = C({}, ['audio', 'video', 'img', 'source', 'image', 'track']),
            qe = null,
            Ze = C({}, [
              'alt',
              'class',
              'for',
              'id',
              'label',
              'name',
              'pattern',
              'placeholder',
              'role',
              'summary',
              'title',
              'value',
              'style',
              'xmlns',
            ]),
            Ke = 'http://www.w3.org/1998/Math/MathML',
            Ge = 'http://www.w3.org/2000/svg',
            Qe = 'http://www.w3.org/1999/xhtml',
            Ye = Qe,
            Ve = !1,
            Xe = void 0,
            Je = ['application/xhtml+xml', 'text/html'],
            et = 'text/html',
            tt = void 0,
            nt = null,
            rt = r.createElement('form'),
            it = function (e) {
              return e instanceof RegExp || e instanceof Function
            },
            ot = function (e) {
              ;(nt && nt === e) ||
                ((e &&
                  'object' ===
                    ('undefined' === typeof e ? 'undefined' : q(e))) ||
                  (e = {}),
                (e = _(e)),
                (xe = 'ALLOWED_TAGS' in e ? C({}, e.ALLOWED_TAGS) : ye),
                (we = 'ALLOWED_ATTR' in e ? C({}, e.ALLOWED_ATTR) : Se),
                (qe =
                  'ADD_URI_SAFE_ATTR' in e
                    ? C(_(Ze), e.ADD_URI_SAFE_ATTR)
                    : Ze),
                (Be =
                  'ADD_DATA_URI_TAGS' in e
                    ? C(_(We), e.ADD_DATA_URI_TAGS)
                    : We),
                (Ue = 'FORBID_CONTENTS' in e ? C({}, e.FORBID_CONTENTS) : Fe),
                (_e = 'FORBID_TAGS' in e ? C({}, e.FORBID_TAGS) : {}),
                (Ee = 'FORBID_ATTR' in e ? C({}, e.FORBID_ATTR) : {}),
                (je = 'USE_PROFILES' in e && e.USE_PROFILES),
                (Te = !1 !== e.ALLOW_ARIA_ATTR),
                (Ae = !1 !== e.ALLOW_DATA_ATTR),
                (Oe = e.ALLOW_UNKNOWN_PROTOCOLS || !1),
                (Ne = e.SAFE_FOR_TEMPLATES || !1),
                (Le = e.WHOLE_DOCUMENT || !1),
                (Ie = e.RETURN_DOM || !1),
                (Me = e.RETURN_DOM_FRAGMENT || !1),
                (He = e.RETURN_TRUSTED_TYPE || !1),
                (ze = e.FORCE_BODY || !1),
                (Pe = !1 !== e.SANITIZE_DOM),
                (De = !1 !== e.KEEP_CONTENT),
                ($e = e.IN_PLACE || !1),
                (ve = e.ALLOWED_URI_REGEXP || ve),
                (Ye = e.NAMESPACE || Qe),
                e.CUSTOM_ELEMENT_HANDLING &&
                  it(e.CUSTOM_ELEMENT_HANDLING.tagNameCheck) &&
                  (Ce.tagNameCheck = e.CUSTOM_ELEMENT_HANDLING.tagNameCheck),
                e.CUSTOM_ELEMENT_HANDLING &&
                  it(e.CUSTOM_ELEMENT_HANDLING.attributeNameCheck) &&
                  (Ce.attributeNameCheck =
                    e.CUSTOM_ELEMENT_HANDLING.attributeNameCheck),
                e.CUSTOM_ELEMENT_HANDLING &&
                  'boolean' ===
                    typeof e.CUSTOM_ELEMENT_HANDLING
                      .allowCustomizedBuiltInElements &&
                  (Ce.allowCustomizedBuiltInElements =
                    e.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements),
                (Xe = Xe =
                  -1 === Je.indexOf(e.PARSER_MEDIA_TYPE)
                    ? et
                    : e.PARSER_MEDIA_TYPE),
                (tt =
                  'application/xhtml+xml' === Xe
                    ? function (e) {
                        return e
                      }
                    : m),
                Ne && (Ae = !1),
                Me && (Ie = !0),
                je &&
                  ((xe = C({}, [].concat(Z(z)))),
                  (we = []),
                  !0 === je.html && (C(xe, T), C(we, I)),
                  !0 === je.svg && (C(xe, A), C(we, M), C(we, P)),
                  !0 === je.svgFilters && (C(xe, O), C(we, M), C(we, P)),
                  !0 === je.mathMl && (C(xe, L), C(we, H), C(we, P))),
                e.ADD_TAGS && (xe === ye && (xe = _(xe)), C(xe, e.ADD_TAGS)),
                e.ADD_ATTR && (we === Se && (we = _(we)), C(we, e.ADD_ATTR)),
                e.ADD_URI_SAFE_ATTR && C(qe, e.ADD_URI_SAFE_ATTR),
                e.FORBID_CONTENTS &&
                  (Ue === Fe && (Ue = _(Ue)), C(Ue, e.FORBID_CONTENTS)),
                De && (xe['#text'] = !0),
                Le && C(xe, ['html', 'head', 'body']),
                xe.table && (C(xe, ['tbody']), delete _e.tbody),
                a && a(e),
                (nt = e))
            },
            at = C({}, ['mi', 'mo', 'mn', 'ms', 'mtext']),
            lt = C({}, ['foreignobject', 'desc', 'title', 'annotation-xml']),
            st = C({}, A)
          C(st, O), C(st, N)
          var ct = C({}, L)
          C(ct, R)
          var ut = function (e) {
              var t = te(e)
              ;(t && t.tagName) ||
                (t = { namespaceURI: Qe, tagName: 'template' })
              var n = m(e.tagName),
                r = m(t.tagName)
              if (e.namespaceURI === Ge)
                return t.namespaceURI === Qe
                  ? 'svg' === n
                  : t.namespaceURI === Ke
                  ? 'svg' === n && ('annotation-xml' === r || at[r])
                  : Boolean(st[n])
              if (e.namespaceURI === Ke)
                return t.namespaceURI === Qe
                  ? 'math' === n
                  : t.namespaceURI === Ge
                  ? 'math' === n && lt[r]
                  : Boolean(ct[n])
              if (e.namespaceURI === Qe) {
                if (t.namespaceURI === Ge && !lt[r]) return !1
                if (t.namespaceURI === Ke && !at[r]) return !1
                var i = C({}, ['title', 'style', 'font', 'a', 'script'])
                return !ct[n] && (i[n] || !st[n])
              }
              return !1
            },
            dt = function (e) {
              f(t.removed, { element: e })
              try {
                e.parentNode.removeChild(e)
              } catch (St) {
                try {
                  e.outerHTML = ie
                } catch (St) {
                  e.remove()
                }
              }
            },
            pt = function (e, n) {
              try {
                f(t.removed, { attribute: n.getAttributeNode(e), from: n })
              } catch (St) {
                f(t.removed, { attribute: null, from: n })
              }
              if ((n.removeAttribute(e), 'is' === e && !we[e]))
                if (Ie || Me)
                  try {
                    dt(n)
                  } catch (St) {}
                else
                  try {
                    n.setAttribute(e, '')
                  } catch (St) {}
            },
            ht = function (e) {
              var t = void 0,
                n = void 0
              if (ze) e = '<remove></remove>' + e
              else {
                var i = g(e, /^[\r\n\t ]+/)
                n = i && i[0]
              }
              'application/xhtml+xml' === Xe &&
                (e =
                  '<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>' +
                  e +
                  '</body></html>')
              var o = re ? re.createHTML(e) : e
              if (Ye === Qe)
                try {
                  t = new S().parseFromString(o, Xe)
                } catch (St) {}
              if (!t || !t.documentElement) {
                t = ae.createDocument(Ye, 'template', null)
                try {
                  t.documentElement.innerHTML = Ve ? '' : o
                } catch (St) {}
              }
              var a = t.body || t.documentElement
              return (
                e &&
                  n &&
                  a.insertBefore(r.createTextNode(n), a.childNodes[0] || null),
                Ye === Qe
                  ? ce.call(t, Le ? 'html' : 'body')[0]
                  : Le
                  ? t.documentElement
                  : a
              )
            },
            ft = function (e) {
              return le.call(
                e.ownerDocument || e,
                e,
                c.SHOW_ELEMENT | c.SHOW_COMMENT | c.SHOW_TEXT,
                null,
                !1
              )
            },
            mt = function (e) {
              return (
                e instanceof w &&
                ('string' !== typeof e.nodeName ||
                  'string' !== typeof e.textContent ||
                  'function' !== typeof e.removeChild ||
                  !(e.attributes instanceof d) ||
                  'function' !== typeof e.removeAttribute ||
                  'function' !== typeof e.setAttribute ||
                  'string' !== typeof e.namespaceURI ||
                  'function' !== typeof e.insertBefore)
              )
            },
            gt = function (e) {
              return 'object' ===
                ('undefined' === typeof l ? 'undefined' : q(l))
                ? e instanceof l
                : e &&
                    'object' ===
                      ('undefined' === typeof e ? 'undefined' : q(e)) &&
                    'number' === typeof e.nodeType &&
                    'string' === typeof e.nodeName
            },
            bt = function (e, n, r) {
              pe[e] &&
                p(pe[e], function (e) {
                  e.call(t, n, r, nt)
                })
            },
            kt = function (e) {
              var n = void 0
              if ((bt('beforeSanitizeElements', e, null), mt(e)))
                return dt(e), !0
              if (g(e.nodeName, /[\u0080-\uFFFF]/)) return dt(e), !0
              var r = tt(e.nodeName)
              if (
                (bt('uponSanitizeElement', e, { tagName: r, allowedTags: xe }),
                !gt(e.firstElementChild) &&
                  (!gt(e.content) || !gt(e.content.firstElementChild)) &&
                  x(/<[/\w]/g, e.innerHTML) &&
                  x(/<[/\w]/g, e.textContent))
              )
                return dt(e), !0
              if ('select' === r && x(/<template/i, e.innerHTML))
                return dt(e), !0
              if (!xe[r] || _e[r]) {
                if (De && !Ue[r]) {
                  var i = te(e) || e.parentNode,
                    o = ee(e) || e.childNodes
                  if (o && i)
                    for (var a = o.length - 1; a >= 0; --a)
                      i.insertBefore(X(o[a], !0), J(e))
                }
                if (!_e[r] && xt(r)) {
                  if (
                    Ce.tagNameCheck instanceof RegExp &&
                    x(Ce.tagNameCheck, r)
                  )
                    return !1
                  if (Ce.tagNameCheck instanceof Function && Ce.tagNameCheck(r))
                    return !1
                }
                return dt(e), !0
              }
              return e instanceof s && !ut(e)
                ? (dt(e), !0)
                : ('noscript' !== r && 'noembed' !== r) ||
                  !x(/<\/no(script|embed)/i, e.innerHTML)
                ? (Ne &&
                    3 === e.nodeType &&
                    ((n = e.textContent),
                    (n = b(n, he, ' ')),
                    (n = b(n, fe, ' ')),
                    e.textContent !== n &&
                      (f(t.removed, { element: e.cloneNode() }),
                      (e.textContent = n))),
                  bt('afterSanitizeElements', e, null),
                  !1)
                : (dt(e), !0)
            },
            vt = function (e, t, n) {
              if (Pe && ('id' === t || 'name' === t) && (n in r || n in rt))
                return !1
              if (Ae && !Ee[t] && x(me, t));
              else if (Te && x(ge, t));
              else if (!we[t] || Ee[t]) {
                if (
                  !(
                    (xt(e) &&
                      ((Ce.tagNameCheck instanceof RegExp &&
                        x(Ce.tagNameCheck, e)) ||
                        (Ce.tagNameCheck instanceof Function &&
                          Ce.tagNameCheck(e))) &&
                      ((Ce.attributeNameCheck instanceof RegExp &&
                        x(Ce.attributeNameCheck, t)) ||
                        (Ce.attributeNameCheck instanceof Function &&
                          Ce.attributeNameCheck(t)))) ||
                    ('is' === t &&
                      Ce.allowCustomizedBuiltInElements &&
                      ((Ce.tagNameCheck instanceof RegExp &&
                        x(Ce.tagNameCheck, n)) ||
                        (Ce.tagNameCheck instanceof Function &&
                          Ce.tagNameCheck(n))))
                  )
                )
                  return !1
              } else if (qe[t]);
              else if (x(ve, b(n, ke, '')));
              else if (
                ('src' !== t && 'xlink:href' !== t && 'href' !== t) ||
                'script' === e ||
                0 !== k(n, 'data:') ||
                !Be[e]
              )
                if (Oe && !x(be, b(n, ke, '')));
                else if (n) return !1
              return !0
            },
            xt = function (e) {
              return e.indexOf('-') > 0
            },
            yt = function (e) {
              var n = void 0,
                r = void 0,
                i = void 0,
                o = void 0
              bt('beforeSanitizeAttributes', e, null)
              var a = e.attributes
              if (a) {
                var l = {
                  attrName: '',
                  attrValue: '',
                  keepAttr: !0,
                  allowedAttributes: we,
                }
                for (o = a.length; o--; ) {
                  var s = (n = a[o]),
                    c = s.name,
                    u = s.namespaceURI
                  if (
                    ((r = v(n.value)),
                    (i = tt(c)),
                    (l.attrName = i),
                    (l.attrValue = r),
                    (l.keepAttr = !0),
                    (l.forceKeepAttr = void 0),
                    bt('uponSanitizeAttribute', e, l),
                    (r = l.attrValue),
                    !l.forceKeepAttr && (pt(c, e), l.keepAttr))
                  )
                    if (x(/\/>/i, r)) pt(c, e)
                    else {
                      Ne && ((r = b(r, he, ' ')), (r = b(r, fe, ' ')))
                      var d = tt(e.nodeName)
                      if (vt(d, i, r))
                        try {
                          u ? e.setAttributeNS(u, c, r) : e.setAttribute(c, r),
                            h(t.removed)
                        } catch (St) {}
                    }
                }
                bt('afterSanitizeAttributes', e, null)
              }
            },
            wt = function e(t) {
              var n = void 0,
                r = ft(t)
              for (bt('beforeSanitizeShadowDOM', t, null); (n = r.nextNode()); )
                bt('uponSanitizeShadowNode', n, null),
                  kt(n) || (n.content instanceof i && e(n.content), yt(n))
              bt('afterSanitizeShadowDOM', t, null)
            }
          return (
            (t.sanitize = function (r, o) {
              var a = void 0,
                s = void 0,
                c = void 0,
                u = void 0,
                d = void 0
              if (
                ((Ve = !r) && (r = '\x3c!--\x3e'),
                'string' !== typeof r && !gt(r))
              ) {
                if ('function' !== typeof r.toString)
                  throw y('toString is not a function')
                if ('string' !== typeof (r = r.toString()))
                  throw y('dirty is not a string, aborting')
              }
              if (!t.isSupported) {
                if (
                  'object' === q(e.toStaticHTML) ||
                  'function' === typeof e.toStaticHTML
                ) {
                  if ('string' === typeof r) return e.toStaticHTML(r)
                  if (gt(r)) return e.toStaticHTML(r.outerHTML)
                }
                return r
              }
              if (
                (Re || ot(o),
                (t.removed = []),
                'string' === typeof r && ($e = !1),
                $e)
              ) {
                if (r.nodeName) {
                  var p = tt(r.nodeName)
                  if (!xe[p] || _e[p])
                    throw y(
                      'root node is forbidden and cannot be sanitized in-place'
                    )
                }
              } else if (r instanceof l)
                (1 ===
                  (s = (a = ht('\x3c!----\x3e')).ownerDocument.importNode(
                    r,
                    !0
                  )).nodeType &&
                  'BODY' === s.nodeName) ||
                'HTML' === s.nodeName
                  ? (a = s)
                  : a.appendChild(s)
              else {
                if (!Ie && !Ne && !Le && -1 === r.indexOf('<'))
                  return re && He ? re.createHTML(r) : r
                if (!(a = ht(r))) return Ie ? null : He ? ie : ''
              }
              a && ze && dt(a.firstChild)
              for (var h = ft($e ? r : a); (c = h.nextNode()); )
                (3 === c.nodeType && c === u) ||
                  kt(c) ||
                  (c.content instanceof i && wt(c.content), yt(c), (u = c))
              if (((u = null), $e)) return r
              if (Ie) {
                if (Me)
                  for (d = se.call(a.ownerDocument); a.firstChild; )
                    d.appendChild(a.firstChild)
                else d = a
                return we.shadowroot && (d = ue.call(n, d, !0)), d
              }
              var f = Le ? a.outerHTML : a.innerHTML
              return (
                Ne && ((f = b(f, he, ' ')), (f = b(f, fe, ' '))),
                re && He ? re.createHTML(f) : f
              )
            }),
            (t.setConfig = function (e) {
              ot(e), (Re = !0)
            }),
            (t.clearConfig = function () {
              ;(nt = null), (Re = !1)
            }),
            (t.isValidAttribute = function (e, t, n) {
              nt || ot({})
              var r = tt(e),
                i = tt(t)
              return vt(r, i, n)
            }),
            (t.addHook = function (e, t) {
              'function' === typeof t && ((pe[e] = pe[e] || []), f(pe[e], t))
            }),
            (t.removeHook = function (e) {
              pe[e] && h(pe[e])
            }),
            (t.removeHooks = function (e) {
              pe[e] && (pe[e] = [])
            }),
            (t.removeAllHooks = function () {
              pe = {}
            }),
            t
          )
        }
        return Q()
      })()
    },
    9238: function (e, t, n) {
      e.exports =
        window.DOMPurify || (window.DOMPurify = n(7856).default || n(7856))
    },
    233: function (e, t, n) {
      'use strict'
      n.d(t, {
        Lu: function () {
          return s
        },
      })
      var r = n(7462),
        i = n(6826),
        o = n.n(i),
        a = {
          CASE_SENSITIVE_EQUAL: 7,
          EQUAL: 6,
          STARTS_WITH: 5,
          WORD_STARTS_WITH: 4,
          CONTAINS: 3,
          ACRONYM: 2,
          MATCHES: 1,
          NO_MATCH: 0,
        }
      s.rankings = a
      var l = function (e, t) {
        return String(e.rankedValue).localeCompare(String(t.rankedValue))
      }
      function s(e, t, n) {
        void 0 === n && (n = {})
        var i = n,
          o = i.keys,
          s = i.threshold,
          u = void 0 === s ? a.MATCHES : s,
          p = i.baseSort,
          f = void 0 === p ? l : p,
          m = i.sorter
        return (
          void 0 === m
            ? function (e) {
                return e.sort(function (e, t) {
                  return (function (e, t, n) {
                    var r = -1,
                      i = 1,
                      o = e.rank,
                      a = e.keyIndex,
                      l = t.rank,
                      s = t.keyIndex
                    return o === l
                      ? a === s
                        ? n(e, t)
                        : a < s
                        ? r
                        : i
                      : o > l
                      ? r
                      : i
                  })(e, t, f)
                })
              }
            : m
        )(
          e.reduce(function (e, i, l) {
            var s = (function (e, t, n, r) {
                if (!t) {
                  return {
                    rankedValue: e,
                    rank: c(e, n, r),
                    keyIndex: -1,
                    keyThreshold: r.threshold,
                  }
                }
                return (function (e, t) {
                  for (var n = [], r = 0, i = t.length; r < i; r++)
                    for (
                      var o = t[r], a = h(o), l = d(e, o), s = 0, c = l.length;
                      s < c;
                      s++
                    )
                      n.push({ itemValue: l[s], attributes: a })
                  return n
                })(e, t).reduce(
                  function (e, t, i) {
                    var o = e.rank,
                      l = e.rankedValue,
                      s = e.keyIndex,
                      u = e.keyThreshold,
                      d = t.itemValue,
                      p = t.attributes,
                      h = c(d, n, r),
                      f = l,
                      m = p.minRanking,
                      g = p.maxRanking,
                      b = p.threshold
                    return (
                      h < m && h >= a.MATCHES ? (h = m) : h > g && (h = g),
                      h > o && ((o = h), (s = i), (u = b), (f = d)),
                      { rankedValue: f, rank: o, keyIndex: s, keyThreshold: u }
                    )
                  },
                  {
                    rankedValue: e,
                    rank: a.NO_MATCH,
                    keyIndex: -1,
                    keyThreshold: r.threshold,
                  }
                )
              })(i, o, t, n),
              p = s.rank,
              f = s.keyThreshold
            p >= (void 0 === f ? u : f) &&
              e.push((0, r.Z)({}, s, { item: i, index: l }))
            return e
          }, [])
        ).map(function (e) {
          return e.item
        })
      }
      function c(e, t, n) {
        return (
          (e = u(e, n)),
          (t = u(t, n)).length > e.length
            ? a.NO_MATCH
            : e === t
            ? a.CASE_SENSITIVE_EQUAL
            : (e = e.toLowerCase()) === (t = t.toLowerCase())
            ? a.EQUAL
            : e.startsWith(t)
            ? a.STARTS_WITH
            : e.includes(' ' + t)
            ? a.WORD_STARTS_WITH
            : e.includes(t)
            ? a.CONTAINS
            : 1 === t.length
            ? a.NO_MATCH
            : (function (e) {
                var t = ''
                return (
                  e.split(' ').forEach(function (e) {
                    e.split('-').forEach(function (e) {
                      t += e.substr(0, 1)
                    })
                  }),
                  t
                )
              })(e).includes(t)
            ? a.ACRONYM
            : (function (e, t) {
                var n = 0,
                  r = 0
                function i(e, t, r) {
                  for (var i = r, o = t.length; i < o; i++) {
                    if (t[i] === e) return (n += 1), i + 1
                  }
                  return -1
                }
                function o(e) {
                  var r = 1 / e,
                    i = n / t.length
                  return a.MATCHES + i * r
                }
                var l = i(t[0], e, 0)
                if (l < 0) return a.NO_MATCH
                r = l
                for (var s = 1, c = t.length; s < c; s++) {
                  if (!((r = i(t[s], e, r)) > -1)) return a.NO_MATCH
                }
                return o(r - l)
              })(e, t)
        )
      }
      function u(e, t) {
        return (e = '' + e), t.keepDiacritics || (e = o()(e)), e
      }
      function d(e, t) {
        var n
        if (('object' === typeof t && (t = t.key), 'function' === typeof t))
          n = t(e)
        else if (null == e) n = null
        else if (Object.hasOwnProperty.call(e, t)) n = e[t]
        else {
          if (t.includes('.'))
            return (function (e, t) {
              for (
                var n = e.split('.'), r = [t], i = 0, o = n.length;
                i < o;
                i++
              ) {
                for (var a = n[i], l = [], s = 0, c = r.length; s < c; s++) {
                  var u = r[s]
                  if (null != u)
                    if (Object.hasOwnProperty.call(u, a)) {
                      var d = u[a]
                      null != d && l.push(d)
                    } else '*' === a && (l = l.concat(u))
                }
                r = l
              }
              if (Array.isArray(r[0])) {
                var p = []
                return p.concat.apply(p, r)
              }
              return r
            })(t, e)
          n = null
        }
        return null == n ? [] : Array.isArray(n) ? n : [String(n)]
      }
      var p = { maxRanking: 1 / 0, minRanking: -1 / 0 }
      function h(e) {
        return 'string' === typeof e ? p : (0, r.Z)({}, p, e)
      }
    },
    2441: function (e, t, n) {
      var r
      !(function (i, o, a) {
        if (i) {
          for (
            var l,
              s = {
                8: 'backspace',
                9: 'tab',
                13: 'enter',
                16: 'shift',
                17: 'ctrl',
                18: 'alt',
                20: 'capslock',
                27: 'esc',
                32: 'space',
                33: 'pageup',
                34: 'pagedown',
                35: 'end',
                36: 'home',
                37: 'left',
                38: 'up',
                39: 'right',
                40: 'down',
                45: 'ins',
                46: 'del',
                91: 'meta',
                93: 'meta',
                224: 'meta',
              },
              c = {
                106: '*',
                107: '+',
                109: '-',
                110: '.',
                111: '/',
                186: ';',
                187: '=',
                188: ',',
                189: '-',
                190: '.',
                191: '/',
                192: '`',
                219: '[',
                220: '\\',
                221: ']',
                222: "'",
              },
              u = {
                '~': '`',
                '!': '1',
                '@': '2',
                '#': '3',
                $: '4',
                '%': '5',
                '^': '6',
                '&': '7',
                '*': '8',
                '(': '9',
                ')': '0',
                _: '-',
                '+': '=',
                ':': ';',
                '"': "'",
                '<': ',',
                '>': '.',
                '?': '/',
                '|': '\\',
              },
              d = {
                option: 'alt',
                command: 'meta',
                return: 'enter',
                escape: 'esc',
                plus: '+',
                mod: /Mac|iPod|iPhone|iPad/.test(navigator.platform)
                  ? 'meta'
                  : 'ctrl',
              },
              p = 1;
            p < 20;
            ++p
          )
            s[111 + p] = 'f' + p
          for (p = 0; p <= 9; ++p) s[p + 96] = p.toString()
          ;(v.prototype.bind = function (e, t, n) {
            var r = this
            return (
              (e = e instanceof Array ? e : [e]),
              r._bindMultiple.call(r, e, t, n),
              r
            )
          }),
            (v.prototype.unbind = function (e, t) {
              return this.bind.call(this, e, function () {}, t)
            }),
            (v.prototype.trigger = function (e, t) {
              var n = this
              return (
                n._directMap[e + ':' + t] && n._directMap[e + ':' + t]({}, e), n
              )
            }),
            (v.prototype.reset = function () {
              var e = this
              return (e._callbacks = {}), (e._directMap = {}), e
            }),
            (v.prototype.stopCallback = function (e, t) {
              if ((' ' + t.className + ' ').indexOf(' mousetrap ') > -1)
                return !1
              if (k(t, this.target)) return !1
              if ('composedPath' in e && 'function' === typeof e.composedPath) {
                var n = e.composedPath()[0]
                n !== e.target && (t = n)
              }
              return (
                'INPUT' == t.tagName ||
                'SELECT' == t.tagName ||
                'TEXTAREA' == t.tagName ||
                t.isContentEditable
              )
            }),
            (v.prototype.handleKey = function () {
              var e = this
              return e._handleKey.apply(e, arguments)
            }),
            (v.addKeycodes = function (e) {
              for (var t in e) e.hasOwnProperty(t) && (s[t] = e[t])
              l = null
            }),
            (v.init = function () {
              var e = v(o)
              for (var t in e)
                '_' !== t.charAt(0) &&
                  (v[t] = (function (t) {
                    return function () {
                      return e[t].apply(e, arguments)
                    }
                  })(t))
            }),
            v.init(),
            (i.Mousetrap = v),
            e.exports && (e.exports = v),
            void 0 ===
              (r = function () {
                return v
              }.call(t, n, t, e)) || (e.exports = r)
        }
        function h(e, t, n) {
          e.addEventListener
            ? e.addEventListener(t, n, !1)
            : e.attachEvent('on' + t, n)
        }
        function f(e) {
          if ('keypress' == e.type) {
            var t = String.fromCharCode(e.which)
            return e.shiftKey || (t = t.toLowerCase()), t
          }
          return s[e.which]
            ? s[e.which]
            : c[e.which]
            ? c[e.which]
            : String.fromCharCode(e.which).toLowerCase()
        }
        function m(e) {
          return 'shift' == e || 'ctrl' == e || 'alt' == e || 'meta' == e
        }
        function g(e, t, n) {
          return (
            n ||
              (n = (function () {
                if (!l)
                  for (var e in ((l = {}), s))
                    (e > 95 && e < 112) ||
                      (s.hasOwnProperty(e) && (l[s[e]] = e))
                return l
              })()[e]
                ? 'keydown'
                : 'keypress'),
            'keypress' == n && t.length && (n = 'keydown'),
            n
          )
        }
        function b(e, t) {
          var n,
            r,
            i,
            o = []
          for (
            n = (function (e) {
              return '+' === e
                ? ['+']
                : (e = e.replace(/\+{2}/g, '+plus')).split('+')
            })(e),
              i = 0;
            i < n.length;
            ++i
          )
            (r = n[i]),
              d[r] && (r = d[r]),
              t && 'keypress' != t && u[r] && ((r = u[r]), o.push('shift')),
              m(r) && o.push(r)
          return { key: r, modifiers: o, action: (t = g(r, o, t)) }
        }
        function k(e, t) {
          return null !== e && e !== o && (e === t || k(e.parentNode, t))
        }
        function v(e) {
          var t = this
          if (((e = e || o), !(t instanceof v))) return new v(e)
          ;(t.target = e), (t._callbacks = {}), (t._directMap = {})
          var n,
            r = {},
            i = !1,
            a = !1,
            l = !1
          function s(e) {
            e = e || {}
            var t,
              n = !1
            for (t in r) e[t] ? (n = !0) : (r[t] = 0)
            n || (l = !1)
          }
          function c(e, n, i, o, a, l) {
            var s,
              c,
              u,
              d,
              p = [],
              h = i.type
            if (!t._callbacks[e]) return []
            for (
              'keyup' == h && m(e) && (n = [e]), s = 0;
              s < t._callbacks[e].length;
              ++s
            )
              if (
                ((c = t._callbacks[e][s]),
                (o || !c.seq || r[c.seq] == c.level) &&
                  h == c.action &&
                  (('keypress' == h && !i.metaKey && !i.ctrlKey) ||
                    ((u = n),
                    (d = c.modifiers),
                    u.sort().join(',') === d.sort().join(','))))
              ) {
                var f = !o && c.combo == a,
                  g = o && c.seq == o && c.level == l
                ;(f || g) && t._callbacks[e].splice(s, 1), p.push(c)
              }
            return p
          }
          function u(e, n, r, i) {
            t.stopCallback(n, n.target || n.srcElement, r, i) ||
              (!1 === e(n, r) &&
                ((function (e) {
                  e.preventDefault ? e.preventDefault() : (e.returnValue = !1)
                })(n),
                (function (e) {
                  e.stopPropagation
                    ? e.stopPropagation()
                    : (e.cancelBubble = !0)
                })(n)))
          }
          function d(e) {
            'number' !== typeof e.which && (e.which = e.keyCode)
            var n = f(e)
            n &&
              ('keyup' != e.type || i !== n
                ? t.handleKey(
                    n,
                    (function (e) {
                      var t = []
                      return (
                        e.shiftKey && t.push('shift'),
                        e.altKey && t.push('alt'),
                        e.ctrlKey && t.push('ctrl'),
                        e.metaKey && t.push('meta'),
                        t
                      )
                    })(e),
                    e
                  )
                : (i = !1))
          }
          function p(e, t, o, a) {
            function c(t) {
              return function () {
                ;(l = t), ++r[e], clearTimeout(n), (n = setTimeout(s, 1e3))
              }
            }
            function d(t) {
              u(o, t, e), 'keyup' !== a && (i = f(t)), setTimeout(s, 10)
            }
            r[e] = 0
            for (var p = 0; p < t.length; ++p) {
              var h = p + 1 === t.length ? d : c(a || b(t[p + 1]).action)
              g(t[p], h, a, e, p)
            }
          }
          function g(e, n, r, i, o) {
            t._directMap[e + ':' + r] = n
            var a,
              l = (e = e.replace(/\s+/g, ' ')).split(' ')
            l.length > 1
              ? p(e, l, n, r)
              : ((a = b(e, r)),
                (t._callbacks[a.key] = t._callbacks[a.key] || []),
                c(a.key, a.modifiers, { type: a.action }, i, e, o),
                t._callbacks[a.key][i ? 'unshift' : 'push']({
                  callback: n,
                  modifiers: a.modifiers,
                  action: a.action,
                  seq: i,
                  level: o,
                  combo: e,
                }))
          }
          ;(t._handleKey = function (e, t, n) {
            var r,
              i = c(e, t, n),
              o = {},
              d = 0,
              p = !1
            for (r = 0; r < i.length; ++r)
              i[r].seq && (d = Math.max(d, i[r].level))
            for (r = 0; r < i.length; ++r)
              if (i[r].seq) {
                if (i[r].level != d) continue
                ;(p = !0),
                  (o[i[r].seq] = 1),
                  u(i[r].callback, n, i[r].combo, i[r].seq)
              } else p || u(i[r].callback, n, i[r].combo)
            var h = 'keypress' == n.type && a
            n.type != l || m(e) || h || s(o), (a = p && 'keydown' == n.type)
          }),
            (t._bindMultiple = function (e, t, n) {
              for (var r = 0; r < e.length; ++r) g(e[r], t, n)
            }),
            h(e, 'keypress', d),
            h(e, 'keydown', d),
            h(e, 'keyup', d)
        }
      })(
        'undefined' !== typeof window ? window : null,
        'undefined' !== typeof window ? document : null
      )
    },
    9689: function (e, t, n) {
      var r = n(7294)
      t.I = function (e) {
        var t = e.onTriggered,
          n = e.disableClick,
          i = e.disableKeys,
          o = e.allowAnyKey,
          a = e.triggerKeys,
          l = r.useRef(null),
          s = r.useCallback(function (e) {
            o
              ? t(e)
              : a
              ? a.includes(e.key) && t(e)
              : 'Escape' === e.key && t(e)
          }, []),
          c = r.useCallback(
            function (e) {
              l &&
                l.current &&
                (l.current.contains(e.target) ||
                  null === t ||
                  void 0 === t ||
                  t(e))
            },
            [l.current]
          )
        return (
          r.useEffect(function () {
            return (
              !n && document.addEventListener('click', c),
              !i && document.addEventListener('keyup', s),
              function () {
                !n && document.removeEventListener('click', c),
                  !i && document.removeEventListener('keyup', s)
              }
            )
          }, []),
          l
        )
      }
    },
    6096: function (e, t, n) {
      'use strict'
      n.d(t, {
        Z: function () {
          return g
        },
      })
      var r = n(7462)
      var i = n(7294),
        o = i.useLayoutEffect,
        a = function (e) {
          var t = (0, i.useRef)(e)
          return (
            o(function () {
              t.current = e
            }),
            t
          )
        },
        l = function (e, t) {
          'function' !== typeof e ? (e.current = t) : e(t)
        },
        s = function (e, t) {
          var n = (0, i.useRef)()
          return (0, i.useCallback)(
            function (r) {
              ;(e.current = r),
                n.current && l(n.current, null),
                (n.current = t),
                t && l(t, r)
            },
            [t]
          )
        },
        c = {
          'min-height': '0',
          'max-height': 'none',
          height: '0',
          visibility: 'hidden',
          overflow: 'hidden',
          position: 'absolute',
          'z-index': '-1000',
          top: '0',
          right: '0',
        },
        u = function (e) {
          Object.keys(c).forEach(function (t) {
            e.style.setProperty(t, c[t], 'important')
          })
        },
        d = null
      var p = function () {},
        h = [
          'borderBottomWidth',
          'borderLeftWidth',
          'borderRightWidth',
          'borderTopWidth',
          'boxSizing',
          'fontFamily',
          'fontSize',
          'fontStyle',
          'fontWeight',
          'letterSpacing',
          'lineHeight',
          'paddingBottom',
          'paddingLeft',
          'paddingRight',
          'paddingTop',
          'tabSize',
          'textIndent',
          'textRendering',
          'textTransform',
          'width',
          'wordBreak',
        ],
        f = !!document.documentElement.currentStyle,
        m = function (e, t) {
          var n = e.cacheMeasurements,
            o = e.maxRows,
            l = e.minRows,
            c = e.onChange,
            m = void 0 === c ? p : c,
            g = e.onHeightChange,
            b = void 0 === g ? p : g,
            k = (function (e, t) {
              if (null == e) return {}
              var n,
                r,
                i = {},
                o = Object.keys(e)
              for (r = 0; r < o.length; r++)
                (n = o[r]), t.indexOf(n) >= 0 || (i[n] = e[n])
              return i
            })(e, [
              'cacheMeasurements',
              'maxRows',
              'minRows',
              'onChange',
              'onHeightChange',
            ])
          var v = void 0 !== k.value,
            x = (0, i.useRef)(null),
            y = s(x, t),
            w = (0, i.useRef)(0),
            S = (0, i.useRef)(),
            C = function () {
              var e = x.current,
                t =
                  n && S.current
                    ? S.current
                    : (function (e) {
                        var t = window.getComputedStyle(e)
                        if (null === t) return null
                        var n,
                          r =
                            ((n = t),
                            h.reduce(function (e, t) {
                              return (e[t] = n[t]), e
                            }, {})),
                          i = r.boxSizing
                        return '' === i
                          ? null
                          : (f &&
                              'border-box' === i &&
                              (r.width =
                                parseFloat(r.width) +
                                parseFloat(r.borderRightWidth) +
                                parseFloat(r.borderLeftWidth) +
                                parseFloat(r.paddingRight) +
                                parseFloat(r.paddingLeft) +
                                'px'),
                            {
                              sizingStyle: r,
                              paddingSize:
                                parseFloat(r.paddingBottom) +
                                parseFloat(r.paddingTop),
                              borderSize:
                                parseFloat(r.borderBottomWidth) +
                                parseFloat(r.borderTopWidth),
                            })
                      })(e)
              if (t) {
                S.current = t
                var r = (function (e, t, n, r) {
                    void 0 === n && (n = 1),
                      void 0 === r && (r = 1 / 0),
                      d ||
                        ((d = document.createElement('textarea')).setAttribute(
                          'tabindex',
                          '-1'
                        ),
                        d.setAttribute('aria-hidden', 'true'),
                        u(d)),
                      null === d.parentNode && document.body.appendChild(d)
                    var i = e.paddingSize,
                      o = e.borderSize,
                      a = e.sizingStyle,
                      l = a.boxSizing
                    Object.keys(a).forEach(function (e) {
                      var t = e
                      d.style[t] = a[t]
                    }),
                      u(d),
                      (d.value = t)
                    var s = (function (e, t) {
                      var n = e.scrollHeight
                      return 'border-box' === t.sizingStyle.boxSizing
                        ? n + t.borderSize
                        : n - t.paddingSize
                    })(d, e)
                    d.value = 'x'
                    var c = d.scrollHeight - i,
                      p = c * n
                    'border-box' === l && (p = p + i + o), (s = Math.max(p, s))
                    var h = c * r
                    return (
                      'border-box' === l && (h = h + i + o),
                      [(s = Math.min(h, s)), c]
                    )
                  })(t, e.value || e.placeholder || 'x', l, o),
                  i = r[0],
                  a = r[1]
                w.current !== i &&
                  ((w.current = i),
                  e.style.setProperty('height', i + 'px', 'important'),
                  b(i, { rowHeight: a }))
              }
            }
          return (
            (0, i.useLayoutEffect)(C),
            (function (e) {
              var t = a(e)
              ;(0, i.useLayoutEffect)(function () {
                var e = function (e) {
                  t.current(e)
                }
                return (
                  window.addEventListener('resize', e),
                  function () {
                    window.removeEventListener('resize', e)
                  }
                )
              }, [])
            })(C),
            (0, i.createElement)(
              'textarea',
              (0, r.Z)({}, k, {
                onChange: function (e) {
                  v || C(), m(e)
                },
                ref: y,
              })
            )
          )
        },
        g = (0, i.forwardRef)(m)
    },
    1554: function (e) {
      'use strict'
      e.exports = function (e) {
        var t,
          n,
          r,
          i,
          o,
          a = e.nodeName.toLowerCase(),
          l = e.type
        function s(e, t) {
          var n = Object.getOwnPropertyDescriptor(e, t)
          n && n.configurable && delete e[t]
        }
        function c(e) {
          e.preventDefault(),
            i || (e.target.checked = !1),
            o && (o.checked = !0)
        }
        'select' === a || ('input' === a && 'file' === l)
          ? ((t = document.createEvent('HTMLEvents')).initEvent(
              'change',
              !0,
              !1
            ),
            e.dispatchEvent(t))
          : ('input' === a &&
              {
                color: !0,
                date: !0,
                datetime: !0,
                'datetime-local': !0,
                email: !0,
                month: !0,
                number: !0,
                password: !0,
                range: !0,
                search: !0,
                tel: !0,
                text: !0,
                time: !0,
                url: !0,
                week: !0,
              }[l]) ||
            'textarea' === a
          ? ((n = Object.getOwnPropertyDescriptor(e, 'value')),
            (t = document.createEvent('UIEvents')).initEvent('focus', !1, !1),
            e.dispatchEvent(t),
            'range' === l
              ? (function (e) {
                  var t = e.min,
                    n = e.max,
                    r = e.step,
                    i = Number(e.value)
                  ;(e.min = i),
                    (e.max = i + 1),
                    (e.step = 1),
                    (e.value = i + 1),
                    s(e, 'value'),
                    (e.min = t),
                    (e.max = n),
                    (e.step = r),
                    (e.value = i)
                })(e)
              : ((r = e.value),
                (e.value = r + '#'),
                s(e, 'value'),
                (e.value = r)),
            (t = document.createEvent('HTMLEvents')).initEvent(
              'propertychange',
              !1,
              !1
            ),
            (t.propertyName = 'value'),
            e.dispatchEvent(t),
            (t = document.createEvent('HTMLEvents')).initEvent('input', !0, !1),
            e.dispatchEvent(t),
            n && Object.defineProperty(e, 'value', n))
          : 'input' === a && 'checkbox' === l
          ? ((e.checked = !e.checked),
            (t = document.createEvent('MouseEvents')).initEvent(
              'click',
              !0,
              !0
            ),
            e.dispatchEvent(t))
          : 'input' === a &&
            'radio' === l &&
            ((i = e.checked),
            (o = (function (e) {
              var t,
                n,
                r = e.name
              if (r)
                for (
                  t = document.querySelectorAll(
                    'input[type="radio"][name="' + r + '"]'
                  ),
                    n = 0;
                  n < t.length;
                  n += 1
                )
                  if (t[n].checked) return t[n] !== e ? t[n] : null
              return null
            })(e)),
            (n = Object.getOwnPropertyDescriptor(e, 'checked')),
            (e.checked = !i),
            s(e, 'checked'),
            (e.checked = i),
            e.addEventListener('click', c, !0),
            (t = document.createEvent('MouseEvents')).initEvent(
              'click',
              !0,
              !0
            ),
            e.dispatchEvent(t),
            e.removeEventListener('click', c, !0),
            n && Object.defineProperty(e, 'checked', n))
      }
    },
    6826: function (e) {
      var t = {
          '\xc0': 'A',
          '\xc1': 'A',
          '\xc2': 'A',
          '\xc3': 'A',
          '\xc4': 'A',
          '\xc5': 'A',
          '\u1ea4': 'A',
          '\u1eae': 'A',
          '\u1eb2': 'A',
          '\u1eb4': 'A',
          '\u1eb6': 'A',
          '\xc6': 'AE',
          '\u1ea6': 'A',
          '\u1eb0': 'A',
          '\u0202': 'A',
          '\xc7': 'C',
          '\u1e08': 'C',
          '\xc8': 'E',
          '\xc9': 'E',
          '\xca': 'E',
          '\xcb': 'E',
          '\u1ebe': 'E',
          '\u1e16': 'E',
          '\u1ec0': 'E',
          '\u1e14': 'E',
          '\u1e1c': 'E',
          '\u0206': 'E',
          '\xcc': 'I',
          '\xcd': 'I',
          '\xce': 'I',
          '\xcf': 'I',
          '\u1e2e': 'I',
          '\u020a': 'I',
          '\xd0': 'D',
          '\xd1': 'N',
          '\xd2': 'O',
          '\xd3': 'O',
          '\xd4': 'O',
          '\xd5': 'O',
          '\xd6': 'O',
          '\xd8': 'O',
          '\u1ed0': 'O',
          '\u1e4c': 'O',
          '\u1e52': 'O',
          '\u020e': 'O',
          '\xd9': 'U',
          '\xda': 'U',
          '\xdb': 'U',
          '\xdc': 'U',
          '\xdd': 'Y',
          '\xe0': 'a',
          '\xe1': 'a',
          '\xe2': 'a',
          '\xe3': 'a',
          '\xe4': 'a',
          '\xe5': 'a',
          '\u1ea5': 'a',
          '\u1eaf': 'a',
          '\u1eb3': 'a',
          '\u1eb5': 'a',
          '\u1eb7': 'a',
          '\xe6': 'ae',
          '\u1ea7': 'a',
          '\u1eb1': 'a',
          '\u0203': 'a',
          '\xe7': 'c',
          '\u1e09': 'c',
          '\xe8': 'e',
          '\xe9': 'e',
          '\xea': 'e',
          '\xeb': 'e',
          '\u1ebf': 'e',
          '\u1e17': 'e',
          '\u1ec1': 'e',
          '\u1e15': 'e',
          '\u1e1d': 'e',
          '\u0207': 'e',
          '\xec': 'i',
          '\xed': 'i',
          '\xee': 'i',
          '\xef': 'i',
          '\u1e2f': 'i',
          '\u020b': 'i',
          '\xf0': 'd',
          '\xf1': 'n',
          '\xf2': 'o',
          '\xf3': 'o',
          '\xf4': 'o',
          '\xf5': 'o',
          '\xf6': 'o',
          '\xf8': 'o',
          '\u1ed1': 'o',
          '\u1e4d': 'o',
          '\u1e53': 'o',
          '\u020f': 'o',
          '\xf9': 'u',
          '\xfa': 'u',
          '\xfb': 'u',
          '\xfc': 'u',
          '\xfd': 'y',
          '\xff': 'y',
          '\u0100': 'A',
          '\u0101': 'a',
          '\u0102': 'A',
          '\u0103': 'a',
          '\u0104': 'A',
          '\u0105': 'a',
          '\u0106': 'C',
          '\u0107': 'c',
          '\u0108': 'C',
          '\u0109': 'c',
          '\u010a': 'C',
          '\u010b': 'c',
          '\u010c': 'C',
          '\u010d': 'c',
          'C\u0306': 'C',
          'c\u0306': 'c',
          '\u010e': 'D',
          '\u010f': 'd',
          '\u0110': 'D',
          '\u0111': 'd',
          '\u0112': 'E',
          '\u0113': 'e',
          '\u0114': 'E',
          '\u0115': 'e',
          '\u0116': 'E',
          '\u0117': 'e',
          '\u0118': 'E',
          '\u0119': 'e',
          '\u011a': 'E',
          '\u011b': 'e',
          '\u011c': 'G',
          '\u01f4': 'G',
          '\u011d': 'g',
          '\u01f5': 'g',
          '\u011e': 'G',
          '\u011f': 'g',
          '\u0120': 'G',
          '\u0121': 'g',
          '\u0122': 'G',
          '\u0123': 'g',
          '\u0124': 'H',
          '\u0125': 'h',
          '\u0126': 'H',
          '\u0127': 'h',
          '\u1e2a': 'H',
          '\u1e2b': 'h',
          '\u0128': 'I',
          '\u0129': 'i',
          '\u012a': 'I',
          '\u012b': 'i',
          '\u012c': 'I',
          '\u012d': 'i',
          '\u012e': 'I',
          '\u012f': 'i',
          '\u0130': 'I',
          '\u0131': 'i',
          '\u0132': 'IJ',
          '\u0133': 'ij',
          '\u0134': 'J',
          '\u0135': 'j',
          '\u0136': 'K',
          '\u0137': 'k',
          '\u1e30': 'K',
          '\u1e31': 'k',
          'K\u0306': 'K',
          'k\u0306': 'k',
          '\u0139': 'L',
          '\u013a': 'l',
          '\u013b': 'L',
          '\u013c': 'l',
          '\u013d': 'L',
          '\u013e': 'l',
          '\u013f': 'L',
          '\u0140': 'l',
          '\u0141': 'l',
          '\u0142': 'l',
          '\u1e3e': 'M',
          '\u1e3f': 'm',
          'M\u0306': 'M',
          'm\u0306': 'm',
          '\u0143': 'N',
          '\u0144': 'n',
          '\u0145': 'N',
          '\u0146': 'n',
          '\u0147': 'N',
          '\u0148': 'n',
          '\u0149': 'n',
          'N\u0306': 'N',
          'n\u0306': 'n',
          '\u014c': 'O',
          '\u014d': 'o',
          '\u014e': 'O',
          '\u014f': 'o',
          '\u0150': 'O',
          '\u0151': 'o',
          '\u0152': 'OE',
          '\u0153': 'oe',
          'P\u0306': 'P',
          'p\u0306': 'p',
          '\u0154': 'R',
          '\u0155': 'r',
          '\u0156': 'R',
          '\u0157': 'r',
          '\u0158': 'R',
          '\u0159': 'r',
          'R\u0306': 'R',
          'r\u0306': 'r',
          '\u0212': 'R',
          '\u0213': 'r',
          '\u015a': 'S',
          '\u015b': 's',
          '\u015c': 'S',
          '\u015d': 's',
          '\u015e': 'S',
          '\u0218': 'S',
          '\u0219': 's',
          '\u015f': 's',
          '\u0160': 'S',
          '\u0161': 's',
          '\u0162': 'T',
          '\u0163': 't',
          '\u021b': 't',
          '\u021a': 'T',
          '\u0164': 'T',
          '\u0165': 't',
          '\u0166': 'T',
          '\u0167': 't',
          'T\u0306': 'T',
          't\u0306': 't',
          '\u0168': 'U',
          '\u0169': 'u',
          '\u016a': 'U',
          '\u016b': 'u',
          '\u016c': 'U',
          '\u016d': 'u',
          '\u016e': 'U',
          '\u016f': 'u',
          '\u0170': 'U',
          '\u0171': 'u',
          '\u0172': 'U',
          '\u0173': 'u',
          '\u0216': 'U',
          '\u0217': 'u',
          'V\u0306': 'V',
          'v\u0306': 'v',
          '\u0174': 'W',
          '\u0175': 'w',
          '\u1e82': 'W',
          '\u1e83': 'w',
          'X\u0306': 'X',
          'x\u0306': 'x',
          '\u0176': 'Y',
          '\u0177': 'y',
          '\u0178': 'Y',
          'Y\u0306': 'Y',
          'y\u0306': 'y',
          '\u0179': 'Z',
          '\u017a': 'z',
          '\u017b': 'Z',
          '\u017c': 'z',
          '\u017d': 'Z',
          '\u017e': 'z',
          '\u017f': 's',
          '\u0192': 'f',
          '\u01a0': 'O',
          '\u01a1': 'o',
          '\u01af': 'U',
          '\u01b0': 'u',
          '\u01cd': 'A',
          '\u01ce': 'a',
          '\u01cf': 'I',
          '\u01d0': 'i',
          '\u01d1': 'O',
          '\u01d2': 'o',
          '\u01d3': 'U',
          '\u01d4': 'u',
          '\u01d5': 'U',
          '\u01d6': 'u',
          '\u01d7': 'U',
          '\u01d8': 'u',
          '\u01d9': 'U',
          '\u01da': 'u',
          '\u01db': 'U',
          '\u01dc': 'u',
          '\u1ee8': 'U',
          '\u1ee9': 'u',
          '\u1e78': 'U',
          '\u1e79': 'u',
          '\u01fa': 'A',
          '\u01fb': 'a',
          '\u01fc': 'AE',
          '\u01fd': 'ae',
          '\u01fe': 'O',
          '\u01ff': 'o',
          '\xde': 'TH',
          '\xfe': 'th',
          '\u1e54': 'P',
          '\u1e55': 'p',
          '\u1e64': 'S',
          '\u1e65': 's',
          'X\u0301': 'X',
          'x\u0301': 'x',
          '\u0403': '\u0413',
          '\u0453': '\u0433',
          '\u040c': '\u041a',
          '\u045c': '\u043a',
          'A\u030b': 'A',
          'a\u030b': 'a',
          'E\u030b': 'E',
          'e\u030b': 'e',
          'I\u030b': 'I',
          'i\u030b': 'i',
          '\u01f8': 'N',
          '\u01f9': 'n',
          '\u1ed2': 'O',
          '\u1ed3': 'o',
          '\u1e50': 'O',
          '\u1e51': 'o',
          '\u1eea': 'U',
          '\u1eeb': 'u',
          '\u1e80': 'W',
          '\u1e81': 'w',
          '\u1ef2': 'Y',
          '\u1ef3': 'y',
          '\u0200': 'A',
          '\u0201': 'a',
          '\u0204': 'E',
          '\u0205': 'e',
          '\u0208': 'I',
          '\u0209': 'i',
          '\u020c': 'O',
          '\u020d': 'o',
          '\u0210': 'R',
          '\u0211': 'r',
          '\u0214': 'U',
          '\u0215': 'u',
          'B\u030c': 'B',
          'b\u030c': 'b',
          '\u010c\u0323': 'C',
          '\u010d\u0323': 'c',
          '\xca\u030c': 'E',
          '\xea\u030c': 'e',
          'F\u030c': 'F',
          'f\u030c': 'f',
          '\u01e6': 'G',
          '\u01e7': 'g',
          '\u021e': 'H',
          '\u021f': 'h',
          'J\u030c': 'J',
          '\u01f0': 'j',
          '\u01e8': 'K',
          '\u01e9': 'k',
          'M\u030c': 'M',
          'm\u030c': 'm',
          'P\u030c': 'P',
          'p\u030c': 'p',
          'Q\u030c': 'Q',
          'q\u030c': 'q',
          '\u0158\u0329': 'R',
          '\u0159\u0329': 'r',
          '\u1e66': 'S',
          '\u1e67': 's',
          'V\u030c': 'V',
          'v\u030c': 'v',
          'W\u030c': 'W',
          'w\u030c': 'w',
          'X\u030c': 'X',
          'x\u030c': 'x',
          'Y\u030c': 'Y',
          'y\u030c': 'y',
          'A\u0327': 'A',
          'a\u0327': 'a',
          'B\u0327': 'B',
          'b\u0327': 'b',
          '\u1e10': 'D',
          '\u1e11': 'd',
          '\u0228': 'E',
          '\u0229': 'e',
          '\u0190\u0327': 'E',
          '\u025b\u0327': 'e',
          '\u1e28': 'H',
          '\u1e29': 'h',
          'I\u0327': 'I',
          'i\u0327': 'i',
          '\u0197\u0327': 'I',
          '\u0268\u0327': 'i',
          'M\u0327': 'M',
          'm\u0327': 'm',
          'O\u0327': 'O',
          'o\u0327': 'o',
          'Q\u0327': 'Q',
          'q\u0327': 'q',
          'U\u0327': 'U',
          'u\u0327': 'u',
          'X\u0327': 'X',
          'x\u0327': 'x',
          'Z\u0327': 'Z',
          'z\u0327': 'z',
        },
        n = Object.keys(t).join('|'),
        r = new RegExp(n, 'g'),
        i = new RegExp(n, ''),
        o = function (e) {
          return e.replace(r, function (e) {
            return t[e]
          })
        }
      ;(e.exports = o),
        (e.exports.has = function (e) {
          return !!e.match(i)
        }),
        (e.exports.remove = o)
    },
    6496: function (e) {
      !(function () {
        var t = [
            'direction',
            'boxSizing',
            'width',
            'height',
            'overflowX',
            'overflowY',
            'borderTopWidth',
            'borderRightWidth',
            'borderBottomWidth',
            'borderLeftWidth',
            'borderStyle',
            'paddingTop',
            'paddingRight',
            'paddingBottom',
            'paddingLeft',
            'fontStyle',
            'fontVariant',
            'fontWeight',
            'fontStretch',
            'fontSize',
            'fontSizeAdjust',
            'lineHeight',
            'fontFamily',
            'textAlign',
            'textTransform',
            'textIndent',
            'textDecoration',
            'letterSpacing',
            'wordSpacing',
            'tabSize',
            'MozTabSize',
          ],
          n = 'undefined' !== typeof window,
          r = n && null != window.mozInnerScreenX
        function i(e, i, o) {
          if (!n)
            throw new Error(
              'textarea-caret-position#getCaretCoordinates should only be called in a browser'
            )
          var a = (o && o.debug) || !1
          if (a) {
            var l = document.querySelector(
              '#input-textarea-caret-position-mirror-div'
            )
            l && l.parentNode.removeChild(l)
          }
          var s = document.createElement('div')
          ;(s.id = 'input-textarea-caret-position-mirror-div'),
            document.body.appendChild(s)
          var c = s.style,
            u = window.getComputedStyle
              ? window.getComputedStyle(e)
              : e.currentStyle,
            d = 'INPUT' === e.nodeName
          ;(c.whiteSpace = 'pre-wrap'),
            d || (c.wordWrap = 'break-word'),
            (c.position = 'absolute'),
            a || (c.visibility = 'hidden'),
            t.forEach(function (e) {
              d && 'lineHeight' === e
                ? (c.lineHeight = u.height)
                : (c[e] = u[e])
            }),
            r
              ? e.scrollHeight > parseInt(u.height) && (c.overflowY = 'scroll')
              : (c.overflow = 'hidden'),
            (s.textContent = e.value.substring(0, i)),
            d && (s.textContent = s.textContent.replace(/\s/g, '\xa0'))
          var p = document.createElement('span')
          ;(p.textContent = e.value.substring(i) || '.'), s.appendChild(p)
          var h = {
            top: p.offsetTop + parseInt(u.borderTopWidth),
            left: p.offsetLeft + parseInt(u.borderLeftWidth),
            height: parseInt(u.lineHeight),
          }
          return (
            a
              ? (p.style.backgroundColor = '#aaa')
              : document.body.removeChild(s),
            h
          )
        }
        'undefined' != typeof e.exports
          ? (e.exports = i)
          : n && (window.getCaretCoordinates = i)
      })()
    },
    9618: function (e, t, n) {
      'use strict'
      var r =
          (this && this.__makeTemplateObject) ||
          function (e, t) {
            return (
              Object.defineProperty
                ? Object.defineProperty(e, 'raw', { value: t })
                : (e.raw = t),
              e
            )
          },
        i =
          (this && this.__assign) ||
          function () {
            return (i =
              Object.assign ||
              function (e) {
                for (var t, n = 1, r = arguments.length; n < r; n++)
                  for (var i in (t = arguments[n]))
                    Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i])
                return e
              }).apply(this, arguments)
          },
        o =
          (this && this.__spreadArrays) ||
          function () {
            for (var e = 0, t = 0, n = arguments.length; t < n; t++)
              e += arguments[t].length
            var r = Array(e),
              i = 0
            for (t = 0; t < n; t++)
              for (var o = arguments[t], a = 0, l = o.length; a < l; a++, i++)
                r[i] = o[a]
            return r
          }
      Object.defineProperty(t, '__esModule', { value: !0 }), (t.Cursor = void 0)
      var a,
        l,
        s,
        c,
        u,
        d,
        p,
        h = n(2978),
        f = n(1554),
        m = Symbol('selection position'),
        g = function (e) {
          for (var t = [], n = 1; n < arguments.length; n++)
            t[n - 1] = arguments[n]
          var r = String(Date.now()),
            o = e.map(function (e, n) {
              return (
                e +
                (t[n] === m ? r : 'string' === typeof t[n] ? String(t[n]) : '')
              )
            }),
            a = o.join(''),
            l = a.split(r),
            s = l.join(''),
            c = t.filter(function (e) {
              return e === m
            }),
            u = l.reduce(
              function (e, t, n) {
                var r = e[0],
                  i = e[1]
                return (
                  c[n] === m &&
                    (void 0 === r.currentSelectionStart
                      ? (r.currentSelectionStart = i + t.length)
                      : void 0 === r.currentSelectionEnd &&
                        (r.currentSelectionEnd = i + t.length)),
                  [r, i + t.length]
                )
              },
              [{}, 0]
            )[0]
          return i({ content: s }, u)
        },
        b = (function () {
          function e(t) {
            var n = this
            ;(this.element = t),
              (this.getLine = function (e) {
                var t =
                    null !== e && void 0 !== e
                      ? e
                      : n.getCurrentPosition().lineNumber,
                  r = n.element.value.split('\n')[t]
                return (null === r || void 0 === r ? void 0 : r.endsWith('\n'))
                  ? null === r || void 0 === r
                    ? void 0
                    : r.slice(0, -1)
                  : r
              }),
              (this.getIndentSize = function (e) {
                var t, r
                return null !==
                  (r =
                    null === (t = n.getLine(e).match(/^\s*/)) || void 0 === t
                      ? void 0
                      : t[0].length) && void 0 !== r
                  ? r
                  : 0
              }),
              (this.getCurrentPosition = function () {
                var e = function (e) {
                    return n.element.value
                      .slice(0, e)
                      .split('\n')
                      .map(function (e) {
                        return e + '\n'
                      })
                  },
                  t = function (e, t) {
                    return h.clamp(e, 0, n.getLine(t).length)
                  },
                  r = e(n.element.selectionStart),
                  i = e(n.element.selectionEnd),
                  o = r.length - 1,
                  a = i.length - 1,
                  l = n.element.selectionEnd - n.element.selectionStart,
                  s = t(
                    n.element.selectionStart - r.slice(0, -1).join('').length,
                    o
                  )
                return {
                  lineNumber: o,
                  lineNumberEnd: a,
                  lineSelectionEnd: t(s + l, o),
                  lineSelectionStart: s,
                  selectionDirection: n.element.selectionDirection,
                  selectionStart: n.element.selectionStart,
                  selectionEnd: n.element.selectionEnd,
                }
              }),
              (this.getText = function () {
                return n.element.value
              }),
              (this.setText = function (e) {
                document.activeElement !== n.element && n.element.focus(),
                  (n.element.value = e),
                  f(n.element)
              }),
              (this.getSelected = function () {
                var e = n.getCurrentPosition()
                return n.getText().slice(e.selectionStart, e.selectionEnd)
              }),
              (this.spliceContent = function (e, t) {
                void 0 === t && (t = {})
                var r = n.getText().split('\n'),
                  i = n.getCurrentPosition(),
                  a = t.replaceCount,
                  l = void 0 === a ? 0 : a,
                  s = t.startLineNumber,
                  c = void 0 === s ? i.lineNumber : s,
                  u = null !== e && void 0 !== e ? e : {},
                  d = u.content,
                  p = void 0 === d ? '' : d,
                  h = u.currentSelectionStart,
                  f = void 0 === h ? 0 : h,
                  m = u.currentSelectionEnd,
                  g = r.slice(0, c),
                  b = r.slice(c + l),
                  k = p.split('\n'),
                  v = o(g, k, b).join('\n')
                n.setText(v)
                var x = g
                    .map(function (e) {
                      return e.concat('\n')
                    })
                    .join('').length,
                  y = f + x,
                  w = (null !== m && void 0 !== m ? m : f) + x
                n.element.setSelectionRange(y, w)
              }),
              (this.removeLines = function () {
                for (var e = [], t = 0; t < arguments.length; t++)
                  e[t] = arguments[t]
                var r = n.getText(),
                  i = r.split('\n').filter(function (t, n) {
                    return !e.includes(n)
                  })
                n.setText(i.join('\n'))
              }),
              (this.insertPrefix = function (t, i) {
                var o = i.placeholder,
                  u = void 0 === o ? '' : o,
                  d = i.useUnprefix,
                  p = void 0 === d || d,
                  f = i.replaceBefore,
                  m = void 0 !== f && f,
                  g = n.getLine()
                if (g) {
                  var b = new RegExp('^' + h.escapeRegExp(t))
                  if (p && b.test(g)) {
                    v = e.raw(
                      l || (l = r(['', '', ''], ['', '', ''])),
                      g.replace(b, ''),
                      e.$
                    )
                    n.spliceContent(v, { replaceCount: 1 })
                  } else if (m) {
                    var k = !0 === m ? new RegExp('^' + h.escapeRegExp(t)) : m
                    v = e.raw(
                      s || (s = r(['', '', '', ''], ['', '', '', ''])),
                      t,
                      g.replace(k, ''),
                      e.$
                    )
                    n.spliceContent(v, { replaceCount: 1 })
                  } else
                    n.spliceContent(
                      e.raw(
                        c || (c = r(['', '', '', ''], ['', '', '', ''])),
                        t,
                        g,
                        e.$
                      ),
                      { replaceCount: 1 }
                    )
                } else {
                  var v = e.raw(
                    a || (a = r(['', '', '', '', ''], ['', '', '', '', ''])),
                    t,
                    e.$,
                    u,
                    e.$
                  )
                  n.spliceContent(v, { replaceCount: 1 })
                }
              }),
              (this.wrapSelected = function (e, t) {
                t.multiline
                  ? n.wrapMultiLineSelected(e, t)
                  : n.wrapSingleLineSelected(e, t)
              }),
              (this.wrapSingleLineSelected = function (t, i) {
                var o = i.placeholder,
                  a = void 0 === o ? '' : o,
                  l = i.useUnwrapping,
                  s = void 0 === l || l,
                  c = n.getCurrentPosition(),
                  p = n.getSelected().split('\n')[0],
                  f = n.getLine()
                if (p) {
                  var m = function (e) {
                      return h.clamp(e, 0, f.length)
                    },
                    g = c.lineSelectionStart,
                    b = c.lineSelectionEnd,
                    k =
                      s &&
                      f &&
                      (function () {
                        var e = n.getLine(),
                          r = n.getCurrentPosition(),
                          i = function (t) {
                            return h.clamp(t, 0, e.length)
                          },
                          o = e.slice(
                            i(r.lineSelectionStart - t.length),
                            r.lineSelectionStart
                          ),
                          a = e.slice(
                            r.lineSelectionEnd,
                            i(r.lineSelectionEnd + t.length)
                          )
                        return o === t && a === t
                      })(),
                    v = f.slice(0, m(g + (k ? -t.length : 0))),
                    x = f.slice(m(b + (k ? t.length : 0))),
                    y = k ? '' : t,
                    w = p || a,
                    S = e.raw(
                      d ||
                        (d = r(
                          ['', '', '', '', '', '', '', ''],
                          ['', '', '', '', '', '', '', '']
                        )),
                      v,
                      y,
                      e.$,
                      w,
                      e.$,
                      y,
                      x
                    )
                  n.spliceContent(S, { replaceCount: 1 })
                } else {
                  var C = f.slice(0, c.lineSelectionStart),
                    _ = f.slice(c.lineSelectionStart),
                    E = e.raw(
                      u ||
                        (u = r(
                          ['', '', '', '', '', '', '', ''],
                          ['', '', '', '', '', '', '', '']
                        )),
                      C,
                      t,
                      e.$,
                      a,
                      e.$,
                      t,
                      _
                    )
                  n.spliceContent(E, { replaceCount: 1 })
                }
              }),
              (this.wrapMultiLineSelected = function (t, i) {
                var o = i.placeholder,
                  a = void 0 === o ? '' : o,
                  l = i.useUnwrapping,
                  s = void 0 === l || l,
                  c = n.getCurrentPosition(),
                  u = n.getSelected(),
                  d = n.getLine()
                if (
                  (function () {
                    var e = n.getLine(c.lineNumber - 1),
                      r = n.getLine(c.lineNumberEnd + 1)
                    return u && e === t && r === t
                  })() &&
                  s
                )
                  n.removeLines(c.lineNumber - 1, c.lineNumberEnd + 1)
                else {
                  var h = d && !u ? '\n' : '',
                    f = u || a,
                    m = e.raw(
                      p ||
                        (p = r(
                          ['', '', '\n', '', '', '\n', ''],
                          ['', '', '\\n', '', '', '\\n', '']
                        )),
                      h,
                      t,
                      e.$,
                      f,
                      e.$,
                      t
                    )
                  n.spliceContent(m, {
                    replaceCount: u.split('\n').length,
                    startLineNumber: c.lineNumber,
                  })
                }
              })
          }
          return (e.$ = m), (e.raw = g), e
        })()
      t.Cursor = b
    },
    7279: function (e, t, n) {
      'use strict'
      var r =
          (this && this.__assign) ||
          function () {
            return (r =
              Object.assign ||
              function (e) {
                for (var t, n = 1, r = arguments.length; n < r; n++)
                  for (var i in (t = arguments[n]))
                    Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i])
                return e
              }).apply(this, arguments)
          },
        i =
          (this && this.__createBinding) ||
          (Object.create
            ? function (e, t, n, r) {
                void 0 === r && (r = n),
                  Object.defineProperty(e, r, {
                    enumerable: !0,
                    get: function () {
                      return t[n]
                    },
                  })
              }
            : function (e, t, n, r) {
                void 0 === r && (r = n), (e[r] = t[n])
              }),
        o =
          (this && this.__setModuleDefault) ||
          (Object.create
            ? function (e, t) {
                Object.defineProperty(e, 'default', {
                  enumerable: !0,
                  value: t,
                })
              }
            : function (e, t) {
                e.default = t
              }),
        a =
          (this && this.__importStar) ||
          function (e) {
            if (e && e.__esModule) return e
            var t = {}
            if (null != e)
              for (var n in e)
                'default' !== n &&
                  Object.prototype.hasOwnProperty.call(e, n) &&
                  i(t, e, n)
            return o(t, e), t
          },
        l =
          (this && this.__awaiter) ||
          function (e, t, n, r) {
            return new (n || (n = Promise))(function (i, o) {
              function a(e) {
                try {
                  s(r.next(e))
                } catch (t) {
                  o(t)
                }
              }
              function l(e) {
                try {
                  s(r.throw(e))
                } catch (t) {
                  o(t)
                }
              }
              function s(e) {
                var t
                e.done
                  ? i(e.value)
                  : ((t = e.value),
                    t instanceof n
                      ? t
                      : new n(function (e) {
                          e(t)
                        })).then(a, l)
              }
              s((r = r.apply(e, t || [])).next())
            })
          },
        s =
          (this && this.__generator) ||
          function (e, t) {
            var n,
              r,
              i,
              o,
              a = {
                label: 0,
                sent: function () {
                  if (1 & i[0]) throw i[1]
                  return i[1]
                },
                trys: [],
                ops: [],
              }
            return (
              (o = { next: l(0), throw: l(1), return: l(2) }),
              'function' === typeof Symbol &&
                (o[Symbol.iterator] = function () {
                  return this
                }),
              o
            )
            function l(o) {
              return function (l) {
                return (function (o) {
                  if (n) throw new TypeError('Generator is already executing.')
                  for (; a; )
                    try {
                      if (
                        ((n = 1),
                        r &&
                          (i =
                            2 & o[0]
                              ? r.return
                              : o[0]
                              ? r.throw || ((i = r.return) && i.call(r), 0)
                              : r.next) &&
                          !(i = i.call(r, o[1])).done)
                      )
                        return i
                      switch (((r = 0), i && (o = [2 & o[0], i.value]), o[0])) {
                        case 0:
                        case 1:
                          i = o
                          break
                        case 4:
                          return a.label++, { value: o[1], done: !1 }
                        case 5:
                          a.label++, (r = o[1]), (o = [0])
                          continue
                        case 7:
                          ;(o = a.ops.pop()), a.trys.pop()
                          continue
                        default:
                          if (
                            !(i = (i = a.trys).length > 0 && i[i.length - 1]) &&
                            (6 === o[0] || 2 === o[0])
                          ) {
                            a = 0
                            continue
                          }
                          if (
                            3 === o[0] &&
                            (!i || (o[1] > i[0] && o[1] < i[3]))
                          ) {
                            a.label = o[1]
                            break
                          }
                          if (6 === o[0] && a.label < i[1]) {
                            ;(a.label = i[1]), (i = o)
                            break
                          }
                          if (i && a.label < i[2]) {
                            ;(a.label = i[2]), a.ops.push(o)
                            break
                          }
                          i[2] && a.ops.pop(), a.trys.pop()
                          continue
                      }
                      o = t.call(e, a)
                    } catch (l) {
                      ;(o = [6, l]), (r = 0)
                    } finally {
                      n = i = 0
                    }
                  if (5 & o[0]) throw o[1]
                  return { value: o[0] ? o[1] : void 0, done: !0 }
                })([o, l])
              }
            }
          },
        c =
          (this && this.__rest) ||
          function (e, t) {
            var n = {}
            for (var r in e)
              Object.prototype.hasOwnProperty.call(e, r) &&
                t.indexOf(r) < 0 &&
                (n[r] = e[r])
            if (
              null != e &&
              'function' === typeof Object.getOwnPropertySymbols
            ) {
              var i = 0
              for (r = Object.getOwnPropertySymbols(e); i < r.length; i++)
                t.indexOf(r[i]) < 0 &&
                  Object.prototype.propertyIsEnumerable.call(e, r[i]) &&
                  (n[r[i]] = e[r[i]])
            }
            return n
          },
        u =
          (this && this.__spreadArrays) ||
          function () {
            for (var e = 0, t = 0, n = arguments.length; t < n; t++)
              e += arguments[t].length
            var r = Array(e),
              i = 0
            for (t = 0; t < n; t++)
              for (var o = arguments[t], a = 0, l = o.length; a < l; a++, i++)
                r[i] = o[a]
            return r
          },
        d =
          (this && this.__importDefault) ||
          function (e) {
            return e && e.__esModule ? e : { default: e }
          }
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.TextareaMarkdown = void 0)
      var p = a(n(1554)),
        h = n(1620),
        f = d(n(2441)),
        m = a(n(7294)),
        g = n(2978),
        b = n(9103),
        k =
          'TextareaMarkdown wrapper: child element must be instance of HTMLTextAreaElement or container with an textarea element'
      ;(t.TextareaMarkdown = m.forwardRef(function (e, t) {
        e.commands, e.options
        var n = c(e, ['commands', 'options']),
          i = m.useRef(null)
        return (
          x({ props: e, ref: t, textareaRef: i }),
          m.default.createElement('textarea', r({ ref: i }, n))
        )
      })),
        (t.TextareaMarkdown.Wrapper = m.forwardRef(function (e, t) {
          var n = e.children,
            r = m.useRef(),
            i = m.useRef(null)
          return (
            m.useEffect(
              function () {
                if (!r.current && i.current) {
                  if (1 !== m.default.Children.count(n)) throw new TypeError(k)
                  r.current = v(i.current.previousElementSibling)
                }
              },
              [n]
            ),
            x({ props: e, ref: t, textareaRef: r }),
            m.default.createElement(
              m.Fragment,
              null,
              n,
              m.default.createElement('div', {
                style: { display: 'none' },
                ref: i,
              })
            )
          )
        }))
      var v = function (e) {
          if (!e) throw new TypeError(k)
          if (e instanceof HTMLTextAreaElement) return e
          var t = e.querySelector('textarea')
          if (t instanceof HTMLTextAreaElement) return t
          throw new TypeError(k)
        },
        x = function (e) {
          var t = e.props,
            n = e.ref,
            r = e.textareaRef,
            i = t.commands,
            o = t.options,
            a = n,
            c = m.useMemo(
              function () {
                return y(null !== i && void 0 !== i ? i : [])
              },
              [i]
            ),
            u = m.useMemo(
              function () {
                return Object.assign({}, h.defaultTextareaMarkdownOptions, o)
              },
              [o]
            ),
            d = m.useCallback(
              function (e, t) {
                var n = t.__internal,
                  r = n.element,
                  i = n.keyEvent
                return l(void 0, void 0, void 0, function () {
                  var t, n, o
                  return s(this, function (a) {
                    switch (a.label) {
                      case 0:
                        if (
                          ((t = g.findLastIndex(c, function (t) {
                            return t.name === e
                          })),
                          !r)
                        )
                          return [2]
                        if (-1 === t)
                          throw new TypeError(
                            'Command with name "' + e + '" is not defined'
                          )
                        return !1 === (n = c[t]).enable
                          ? [2]
                          : [
                              4,
                              n.handler({
                                element: r,
                                keyEvent: i,
                                options: u,
                              }),
                            ]
                      case 1:
                        return (o = a.sent()) && ((r.value = o), p(r)), [2]
                    }
                  })
                })
              },
              [c, u]
            ),
            b = m.useCallback(
              function (e) {
                return d(e, { __internal: { element: r.current } })
              },
              [r, d]
            )
          m.useEffect(
            function () {
              h.isRefObject(a) &&
                r.current &&
                (a.current = Object.assign(r.current, { trigger: b }))
            },
            [r, a, b]
          )
          var k = m.useRef()
          return (
            m.useEffect(
              function () {
                var e
                if (r.current)
                  return (
                    null === (e = k.current) || void 0 === e || e.reset(),
                    (k.current = f.default(r.current)),
                    c.forEach(function (e) {
                      var t
                      e.shortcut &&
                        (null === (t = k.current) ||
                          void 0 === t ||
                          t.bind(e.shortcut, function (t) {
                            e.shortcutPreventDefault && t.preventDefault(),
                              d(e.name, {
                                __internal: { element: r.current, keyEvent: t },
                              })
                          }))
                    }),
                    function () {
                      var e
                      null === (e = k.current) || void 0 === e || e.reset(),
                        (k.current = void 0)
                    }
                  )
              },
              [c, r, d]
            ),
            { commands: c, options: u }
          )
        },
        y = function (e) {
          var t = u(b.wellKnownCommands)
          return (
            null === e ||
              void 0 === e ||
              e.forEach(function (e) {
                if (h.WELL_KNOWN_COMMANDS.includes(e.name)) {
                  var n = b.wellKnownCommands.findIndex(function (t) {
                      return t.name === e.name
                    }),
                    r = {
                      name: t[n].name,
                      handler: t[n].handler,
                      enable: e.enable,
                      shortcut: e.shortcut,
                    }
                  t[n] = r
                } else {
                  if (!e.handler || !(e.handler instanceof Function))
                    throw new TypeError(
                      'Custom command should have a handler function'
                    )
                  t.push(e)
                }
              }),
            t
          )
        }
    },
    9103: function (e, t, n) {
      'use strict'
      var r =
        (this && this.__spreadArrays) ||
        function () {
          for (var e = 0, t = 0, n = arguments.length; t < n; t++)
            e += arguments[t].length
          var r = Array(e),
            i = 0
          for (t = 0; t < n; t++)
            for (var o = arguments[t], a = 0, l = o.length; a < l; a++, i++)
              r[i] = o[a]
          return r
        }
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.wellKnownCommands = void 0)
      var i = n(6114),
        o = n(2978)
      t.wellKnownCommands = [
        {
          shortcut: o.metaCombination('b'),
          handler: i.boldCommandHandler,
          name: 'bold',
        },
        {
          shortcut: o.metaCombination('i'),
          handler: i.italicCommandHandler,
          name: 'italic',
        },
        {
          shortcut: 'enter',
          handler: i.nextLineCommandHandler,
          name: 'next-line',
        },
        { shortcut: 'tab', name: 'indent', handler: i.indentCommandHandler },
        {
          shortcut: 'shift+tab',
          name: 'unindent',
          handler: i.unindentCommandHandler,
        },
        {
          shortcut: o.metaCombination('v'),
          name: 'link-paste',
          handler: i.linkPasteCommandHandler,
        },
        { name: 'link', handler: i.linkCommandHandler },
        { name: 'image', handler: i.imageCommandHandler },
        { name: 'unordered-list', handler: i.unorderedListCommandHandler },
        { name: 'ordered-list', handler: i.orderedListCommandHandler },
        { name: 'code-block', handler: i.codeBlockCommandHandler },
        { name: 'code-inline', handler: i.codeInlineCommandHandler },
        { name: 'code', handler: i.codeSelectedCommandHandler },
        { name: 'block-quotes', handler: i.blockQuotesCommandHandler },
        {
          shortcut: r(o.metaCombination('shift', 'x'), ['alt+shift+f5']),
          name: 'strike-through',
          handler: i.strikeThroughCommandHandler,
        },
        { name: 'h1', handler: i.createHeadlineCommandHandler(1) },
        { name: 'h2', handler: i.createHeadlineCommandHandler(2) },
        { name: 'h3', handler: i.createHeadlineCommandHandler(3) },
        { name: 'h4', handler: i.createHeadlineCommandHandler(4) },
        { name: 'h5', handler: i.createHeadlineCommandHandler(5) },
        { name: 'h6', handler: i.createHeadlineCommandHandler(6) },
      ]
    },
    6114: function (e, t, n) {
      'use strict'
      var r =
          (this && this.__makeTemplateObject) ||
          function (e, t) {
            return (
              Object.defineProperty
                ? Object.defineProperty(e, 'raw', { value: t })
                : (e.raw = t),
              e
            )
          },
        i =
          (this && this.__awaiter) ||
          function (e, t, n, r) {
            return new (n || (n = Promise))(function (i, o) {
              function a(e) {
                try {
                  s(r.next(e))
                } catch (t) {
                  o(t)
                }
              }
              function l(e) {
                try {
                  s(r.throw(e))
                } catch (t) {
                  o(t)
                }
              }
              function s(e) {
                var t
                e.done
                  ? i(e.value)
                  : ((t = e.value),
                    t instanceof n
                      ? t
                      : new n(function (e) {
                          e(t)
                        })).then(a, l)
              }
              s((r = r.apply(e, t || [])).next())
            })
          },
        o =
          (this && this.__generator) ||
          function (e, t) {
            var n,
              r,
              i,
              o,
              a = {
                label: 0,
                sent: function () {
                  if (1 & i[0]) throw i[1]
                  return i[1]
                },
                trys: [],
                ops: [],
              }
            return (
              (o = { next: l(0), throw: l(1), return: l(2) }),
              'function' === typeof Symbol &&
                (o[Symbol.iterator] = function () {
                  return this
                }),
              o
            )
            function l(o) {
              return function (l) {
                return (function (o) {
                  if (n) throw new TypeError('Generator is already executing.')
                  for (; a; )
                    try {
                      if (
                        ((n = 1),
                        r &&
                          (i =
                            2 & o[0]
                              ? r.return
                              : o[0]
                              ? r.throw || ((i = r.return) && i.call(r), 0)
                              : r.next) &&
                          !(i = i.call(r, o[1])).done)
                      )
                        return i
                      switch (((r = 0), i && (o = [2 & o[0], i.value]), o[0])) {
                        case 0:
                        case 1:
                          i = o
                          break
                        case 4:
                          return a.label++, { value: o[1], done: !1 }
                        case 5:
                          a.label++, (r = o[1]), (o = [0])
                          continue
                        case 7:
                          ;(o = a.ops.pop()), a.trys.pop()
                          continue
                        default:
                          if (
                            !(i = (i = a.trys).length > 0 && i[i.length - 1]) &&
                            (6 === o[0] || 2 === o[0])
                          ) {
                            a = 0
                            continue
                          }
                          if (
                            3 === o[0] &&
                            (!i || (o[1] > i[0] && o[1] < i[3]))
                          ) {
                            a.label = o[1]
                            break
                          }
                          if (6 === o[0] && a.label < i[1]) {
                            ;(a.label = i[1]), (i = o)
                            break
                          }
                          if (i && a.label < i[2]) {
                            ;(a.label = i[2]), a.ops.push(o)
                            break
                          }
                          i[2] && a.ops.pop(), a.trys.pop()
                          continue
                      }
                      o = t.call(e, a)
                    } catch (l) {
                      ;(o = [6, l]), (r = 0)
                    } finally {
                      n = i = 0
                    }
                  if (5 & o[0]) throw o[1]
                  return { value: o[0] ? o[1] : void 0, done: !0 }
                })([o, l])
              }
            }
          }
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.strikeThroughCommandHandler =
          t.codeInlineCommandHandler =
          t.blockQuotesCommandHandler =
          t.unorderedListCommandHandler =
          t.orderedListCommandHandler =
          t.createHeadlineCommandHandler =
          t.italicCommandHandler =
          t.boldCommandHandler =
          t.codeSelectedCommandHandler =
          t.codeBlockCommandHandler =
          t.linkPasteCommandHandler =
          t.unindentCommandHandler =
          t.indentCommandHandler =
          t.nextLineCommandHandler =
          t.imageCommandHandler =
          t.linkCommandHandler =
            void 0)
      var a,
        l,
        s,
        c,
        u,
        d,
        p,
        h,
        f = n(2978),
        m = n(9618),
        g = /(https?|ftp):\/\/(-\.)?([^\s/?\.#-]+\.?)+(\/[^\s]*)?$/i,
        b =
          /(https?|ftp):\/\/(-\.)?([^\s/?\.#-]+\.?)+(\/[^\s]*)?\.(png|tiff|tif|bmp|jpg|jpeg|gif|eps|webp|bmp|dib|svg)$/i,
        k = /^(\s*(-|\*|>|(\d+\.){1,2})\s+)(.+)/,
        v = /^(\s*(-|\*|>|(\d+\.){1,2})\s{0,1})$/
      ;(t.linkCommandHandler = function (e) {
        var t = new m.Cursor(e.element)
        t.getCurrentPosition().lineNumberEnd
        var n = t.getCurrentPosition(),
          i = n.lineSelectionStart,
          o = n.lineSelectionEnd,
          l = t.getLine(),
          s = l.slice(i, o),
          c = l.slice(0, i),
          u = l.slice(o),
          d = s || 'example',
          p = m.Cursor.raw(
            a ||
              (a = r(
                ['', '[', '](', '', '', ')', ''],
                ['', '[', '](', '', '', ')', '']
              )),
            c,
            d,
            m.Cursor.$,
            'url',
            m.Cursor.$,
            u
          )
        t.spliceContent(p, { replaceCount: 1 })
      }),
        (t.imageCommandHandler = function (e) {
          var t = new m.Cursor(e.element),
            n = t.getCurrentPosition(),
            i = n.lineSelectionStart,
            o = n.lineSelectionEnd,
            a = t.getLine(),
            s = a.slice(0, i),
            c = a.slice(o),
            u = t.getSelected() || 'image.png',
            d = m.Cursor.raw(
              l ||
                (l = r(
                  ['', '![', '](', '', '', ')', ''],
                  ['', '![', '](', '', '', ')', '']
                )),
              s,
              'image',
              m.Cursor.$,
              u,
              m.Cursor.$,
              c
            )
          t.spliceContent(d, { replaceCount: 1 })
        }),
        (t.nextLineCommandHandler = function (e) {
          var t = new m.Cursor(e.element)
          setTimeout(function () {
            var e = t.getCurrentPosition(),
              n = t.getLine(e.lineNumber - 1) || '',
              i = t.getLine(),
              o = k.exec(n)
            if (v.test(n))
              return (
                t.removeLines(e.lineNumber),
                void t.spliceContent(
                  m.Cursor.raw(
                    s || (s = r(['\n', ''], ['\\n', ''])),
                    m.Cursor.$
                  ),
                  { startLineNumber: e.lineNumber - 1, replaceCount: 1 }
                )
              )
            if (null !== o) {
              var a = o[2],
                l = ' '.repeat(t.getIndentSize(e.lineNumber - 1)),
                u = m.Cursor.raw(
                  c || (c = r(['', '', ' ', '', ''], ['', '', ' ', '', ''])),
                  l,
                  (isNaN(parseFloat(a))
                    ? a
                    : (function () {
                        var e = a.split('.')
                        return (
                          (e[e.length - 2] = String(
                            parseInt(e[e.length - 2]) + 1
                          )),
                          e.join('.')
                        )
                      })()
                  ).trimStart(),
                  i,
                  m.Cursor.$
                )
              t.spliceContent(u, {
                startLineNumber: e.lineNumber,
                replaceCount: 1,
              })
            }
          }, 0)
        }),
        (t.indentCommandHandler = function (e) {
          var t = e.element,
            n = e.keyEvent,
            i = e.options,
            o = new m.Cursor(t)
          null === n || void 0 === n || n.preventDefault()
          var a = o.getLine(),
            l = v.exec(a),
            s = ' '.repeat(4),
            c = o.getCurrentPosition(),
            p = c.lineSelectionStart,
            h = c.lineSelectionEnd
          if (
            i.useListTabulation &&
            l &&
            0 === o.getIndentSize() &&
            !/^>(\s)*/.test(a)
          ) {
            var g = l[2],
              b =
                !isNaN(parseFloat(g)) && g.split('.').length <= 2
                  ? f.clamp(parseInt(g) - 1, 1, 1 / 0) + '.1.'
                  : g
            o.spliceContent(
              m.Cursor.raw(
                u || (u = r(['', '', ' ', ''], ['', '', ' ', ''])),
                s,
                b,
                m.Cursor.$
              ),
              { replaceCount: 1 }
            )
          } else {
            var k = m.Cursor.raw(
              d || (d = r(['', '', '', '', ''], ['', '', '', '', ''])),
              a.slice(0, p),
              s,
              m.Cursor.$,
              a.slice(h)
            )
            o.spliceContent(k, { replaceCount: 1 })
          }
        }),
        (t.unindentCommandHandler = function (e) {
          var t,
            n = e.element,
            i = e.keyEvent,
            o = e.options,
            a = new m.Cursor(n)
          null === i || void 0 === i || i.preventDefault()
          var l = a.getLine(),
            s = /^\s+(\d\.\d\.).*$/,
            c = l.slice(f.clamp(4, 0, a.getIndentSize()))
          if (o.useListTabulation && s.test(l)) {
            var u = (null !== (t = l.match(s)) && void 0 !== t ? t : [])[1],
              d =
                u
                  .split('.')
                  .slice(0, -1)
                  .map(function (e) {
                    return String(parseInt(e) + 1)
                  })
                  .slice(0, -1)
                  .join('.') + '.'
            c = c.replace(u, d)
          }
          a.spliceContent(
            m.Cursor.raw(
              p || (p = r(['', '', ''], ['', '', ''])),
              c,
              m.Cursor.$
            ),
            { replaceCount: 1 }
          )
        }),
        (t.linkPasteCommandHandler = function (e) {
          return i(void 0, void 0, void 0, function () {
            var t, n, i, a, l, s, c, u, d, p, k
            return o(this, function (o) {
              switch (o.label) {
                case 0:
                  return (
                    (t = new m.Cursor(e.element)),
                    (n = t.getCurrentPosition()),
                    (i = t.getLine(n.lineNumber)),
                    (a = g.test(
                      i.slice(n.lineSelectionStart, n.lineSelectionEnd)
                    )),
                    (l = t.getSelected()),
                    (s = (function () {
                      var e = i.slice(0, n.lineSelectionStart),
                        t = i.slice(n.lineSelectionEnd)
                      return /\[.*\]\($/gi.test(e) && /^\)/gi.test(t)
                    })()),
                    !l || s || a
                      ? [2]
                      : [
                          4,
                          f.getClipboardText().then(function (e) {
                            return null === e || void 0 === e
                              ? void 0
                              : e.trim()
                          }),
                        ]
                  )
                case 1:
                  return (c = o.sent()) && g.test(c)
                    ? ((u = i.slice(0, n.lineSelectionStart)),
                      (d = i.slice(n.lineSelectionEnd)),
                      (p = b.test(c)),
                      (k = m.Cursor.raw(
                        h ||
                          (h = r(
                            ['', '', '[', '', '', '](', ')', ''],
                            ['', '', '[', '', '', '](', ')', '']
                          )),
                        u,
                        p ? '!' : '',
                        m.Cursor.$,
                        l,
                        m.Cursor.$,
                        c,
                        d
                      )),
                      t.spliceContent(k, { replaceCount: 1 }),
                      [2])
                    : [2]
              }
            })
          })
        }),
        (t.codeBlockCommandHandler = function (e) {
          new m.Cursor(e.element).wrapSelected('```', {
            multiline: !0,
            placeholder: e.options.codeBlockPlaceholder,
          })
        }),
        (t.codeSelectedCommandHandler = function (e) {
          new m.Cursor(e.element).getSelected().includes('\n')
            ? t.codeBlockCommandHandler(e)
            : t.codeInlineCommandHandler(e)
        }),
        (t.boldCommandHandler = function (e) {
          var t = e.element,
            n = e.options
          new m.Cursor(t).wrapSelected(n.boldSyntax, {
            placeholder: n.boldPlaceholder,
          })
        }),
        (t.italicCommandHandler = function (e) {
          var t = e.element,
            n = e.options
          new m.Cursor(t).wrapSelected(n.italicSyntax, {
            placeholder: n.italicPlaceholder,
          })
        }),
        (t.createHeadlineCommandHandler = function (e) {
          return function (t) {
            var n = '#'.repeat(f.clamp(e, 1, 6)) + ' ',
              r = t.options.headlinePlaceholder,
              i = r instanceof Function ? r(e) : r
            new m.Cursor(t.element).insertPrefix(n, {
              placeholder: i,
              replaceBefore: /^#{0,6}\s+/,
            })
          }
        }),
        (t.orderedListCommandHandler = function (e) {
          new m.Cursor(e.element).insertPrefix('1. ', {
            placeholder: e.options.orderedListPlaceholder,
          })
        }),
        (t.unorderedListCommandHandler = function (e) {
          new m.Cursor(e.element).insertPrefix(
            e.options.unorderedListSyntax + ' ',
            { placeholder: e.options.unorderedListPlaceholder }
          )
        }),
        (t.blockQuotesCommandHandler = function (e) {
          new m.Cursor(e.element).insertPrefix('> ', {
            placeholder: e.options.blockQuotesPlaceholder,
          })
        }),
        (t.codeInlineCommandHandler = function (e) {
          new m.Cursor(e.element).wrapSelected('`', {
            placeholder: e.options.codeInlinePlaceholder,
          })
        }),
        (t.strikeThroughCommandHandler = function (e) {
          new m.Cursor(e.element).wrapSelected('~~', {
            placeholder: e.options.strikeThroughPlaceholder,
          })
        })
    },
    4722: function (e, t, n) {
      'use strict'
      t.ZP = t.CF = void 0
      var r = n(1620)
      var i = n(9618)
      Object.defineProperty(t, 'CF', {
        enumerable: !0,
        get: function () {
          return i.Cursor
        },
      })
      var o = n(7279)
      Object.defineProperty(t, 'ZP', {
        enumerable: !0,
        get: function () {
          return o.TextareaMarkdown
        },
      })
    },
    1620: function (e, t) {
      'use strict'
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.isRefObject =
          t.defaultTextareaMarkdownOptions =
          t.WELL_KNOWN_COMMANDS =
            void 0),
        (t.WELL_KNOWN_COMMANDS = [
          'bold',
          'italic',
          'strike-through',
          'h1',
          'h2',
          'h3',
          'h4',
          'h5',
          'h6',
          'unordered-list',
          'ordered-list',
          'next-line',
          'indent',
          'unindent',
          'code-block',
          'code-inline',
          'code',
          'link',
          'image',
          'link-paste',
          'block-quotes',
        ]),
        (t.defaultTextareaMarkdownOptions = {
          useListTabulation: !0,
          unorderedListSyntax: '-',
          boldSyntax: '**',
          italicSyntax: '*',
          boldPlaceholder: 'bold',
          italicPlaceholder: 'italic',
          strikeThroughPlaceholder: 'strike through',
          codeInlinePlaceholder: 'code',
          codeBlockPlaceholder: 'code block',
          orderedListPlaceholder: 'ordered list',
          unorderedListPlaceholder: 'unordered list',
          headlinePlaceholder: function (e) {
            return 'headline ' + e
          },
          blockQuotesPlaceholder: 'quote',
        }),
        (t.isRefObject = function (e) {
          return null !== e && 'object' === typeof e
        })
    },
    2978: function (e, t) {
      'use strict'
      var n =
          (this && this.__awaiter) ||
          function (e, t, n, r) {
            return new (n || (n = Promise))(function (i, o) {
              function a(e) {
                try {
                  s(r.next(e))
                } catch (t) {
                  o(t)
                }
              }
              function l(e) {
                try {
                  s(r.throw(e))
                } catch (t) {
                  o(t)
                }
              }
              function s(e) {
                var t
                e.done
                  ? i(e.value)
                  : ((t = e.value),
                    t instanceof n
                      ? t
                      : new n(function (e) {
                          e(t)
                        })).then(a, l)
              }
              s((r = r.apply(e, t || [])).next())
            })
          },
        r =
          (this && this.__generator) ||
          function (e, t) {
            var n,
              r,
              i,
              o,
              a = {
                label: 0,
                sent: function () {
                  if (1 & i[0]) throw i[1]
                  return i[1]
                },
                trys: [],
                ops: [],
              }
            return (
              (o = { next: l(0), throw: l(1), return: l(2) }),
              'function' === typeof Symbol &&
                (o[Symbol.iterator] = function () {
                  return this
                }),
              o
            )
            function l(o) {
              return function (l) {
                return (function (o) {
                  if (n) throw new TypeError('Generator is already executing.')
                  for (; a; )
                    try {
                      if (
                        ((n = 1),
                        r &&
                          (i =
                            2 & o[0]
                              ? r.return
                              : o[0]
                              ? r.throw || ((i = r.return) && i.call(r), 0)
                              : r.next) &&
                          !(i = i.call(r, o[1])).done)
                      )
                        return i
                      switch (((r = 0), i && (o = [2 & o[0], i.value]), o[0])) {
                        case 0:
                        case 1:
                          i = o
                          break
                        case 4:
                          return a.label++, { value: o[1], done: !1 }
                        case 5:
                          a.label++, (r = o[1]), (o = [0])
                          continue
                        case 7:
                          ;(o = a.ops.pop()), a.trys.pop()
                          continue
                        default:
                          if (
                            !(i = (i = a.trys).length > 0 && i[i.length - 1]) &&
                            (6 === o[0] || 2 === o[0])
                          ) {
                            a = 0
                            continue
                          }
                          if (
                            3 === o[0] &&
                            (!i || (o[1] > i[0] && o[1] < i[3]))
                          ) {
                            a.label = o[1]
                            break
                          }
                          if (6 === o[0] && a.label < i[1]) {
                            ;(a.label = i[1]), (i = o)
                            break
                          }
                          if (i && a.label < i[2]) {
                            ;(a.label = i[2]), a.ops.push(o)
                            break
                          }
                          i[2] && a.ops.pop(), a.trys.pop()
                          continue
                      }
                      o = t.call(e, a)
                    } catch (l) {
                      ;(o = [6, l]), (r = 0)
                    } finally {
                      n = i = 0
                    }
                  if (5 & o[0]) throw o[1]
                  return { value: o[0] ? o[1] : void 0, done: !0 }
                })([o, l])
              }
            }
          },
        i =
          (this && this.__spreadArrays) ||
          function () {
            for (var e = 0, t = 0, n = arguments.length; t < n; t++)
              e += arguments[t].length
            var r = Array(e),
              i = 0
            for (t = 0; t < n; t++)
              for (var o = arguments[t], a = 0, l = o.length; a < l; a++, i++)
                r[i] = o[a]
            return r
          }
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.escapeRegExp =
          t.trimChars =
          t.findLastIndex =
          t.getClipboardText =
          t.clamp =
          t.arrayInsert =
          t.metaCombination =
            void 0),
        (t.metaCombination = function () {
          for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t]
          return ['command+' + e.join('+'), 'ctrl+' + e.join('+')]
        }),
        (t.arrayInsert = function (e, t, n) {
          return i(e.slice(0, t), [n], e.slice(t))
        }),
        (t.clamp = function (e, t, n) {
          return Math.min(Math.max(t, e), n)
        }),
        (t.getClipboardText = function () {
          return n(void 0, void 0, void 0, function () {
            var e, t
            return r(this, function (n) {
              return (e =
                'clipboardData' in window
                  ? null === (t = window.clipboardData) || void 0 === t
                    ? void 0
                    : t.getData('text')
                  : null)
                ? [2, e]
                : [
                    2,
                    navigator.clipboard
                      .readText()
                      .then(function (e) {
                        return e
                      })
                      .catch(function () {
                        return null
                      }),
                  ]
            })
          })
        }),
        (t.findLastIndex = function (e, t) {
          for (var n = e.length; n--; ) if (t(e[n], n, e)) return n
          return -1
        }),
        (t.trimChars = function (e, t) {
          return (
            ']' === t && (t = '\\]'),
            '^' === t && (t = '\\^'),
            '\\' === t && (t = '\\\\'),
            e.replace(new RegExp('^[' + t + ']+|[' + t + ']+$', 'g'), '')
          )
        }),
        (t.escapeRegExp = function (e) {
          return e.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
        })
    },
    7441: function (e, t, n) {
      'use strict'
      function r() {
        return {
          baseUrl: null,
          breaks: !1,
          extensions: null,
          gfm: !0,
          headerIds: !0,
          headerPrefix: '',
          highlight: null,
          langPrefix: 'language-',
          mangle: !0,
          pedantic: !1,
          renderer: null,
          sanitize: !1,
          sanitizer: null,
          silent: !1,
          smartLists: !1,
          smartypants: !1,
          tokenizer: null,
          walkTokens: null,
          xhtml: !1,
        }
      }
      n.d(t, {
        TU: function () {
          return j
        },
      })
      let i = {
        baseUrl: null,
        breaks: !1,
        extensions: null,
        gfm: !0,
        headerIds: !0,
        headerPrefix: '',
        highlight: null,
        langPrefix: 'language-',
        mangle: !0,
        pedantic: !1,
        renderer: null,
        sanitize: !1,
        sanitizer: null,
        silent: !1,
        smartLists: !1,
        smartypants: !1,
        tokenizer: null,
        walkTokens: null,
        xhtml: !1,
      }
      const o = /[&<>"']/,
        a = /[&<>"']/g,
        l = /[<>"']|&(?!#?\w+;)/,
        s = /[<>"']|&(?!#?\w+;)/g,
        c = {
          '&': '&amp;',
          '<': '&lt;',
          '>': '&gt;',
          '"': '&quot;',
          "'": '&#39;',
        },
        u = (e) => c[e]
      function d(e, t) {
        if (t) {
          if (o.test(e)) return e.replace(a, u)
        } else if (l.test(e)) return e.replace(s, u)
        return e
      }
      const p = /&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/gi
      function h(e) {
        return e.replace(p, (e, t) =>
          'colon' === (t = t.toLowerCase())
            ? ':'
            : '#' === t.charAt(0)
            ? 'x' === t.charAt(1)
              ? String.fromCharCode(parseInt(t.substring(2), 16))
              : String.fromCharCode(+t.substring(1))
            : ''
        )
      }
      const f = /(^|[^\[])\^/g
      function m(e, t) {
        ;(e = e.source || e), (t = t || '')
        const n = {
          replace: (t, r) => (
            (r = (r = r.source || r).replace(f, '$1')), (e = e.replace(t, r)), n
          ),
          getRegex: () => new RegExp(e, t),
        }
        return n
      }
      const g = /[^\w:]/g,
        b = /^$|^[a-z][a-z0-9+.-]*:|^[?#]/i
      function k(e, t, n) {
        if (e) {
          let e
          try {
            e = decodeURIComponent(h(n)).replace(g, '').toLowerCase()
          } catch (r) {
            return null
          }
          if (
            0 === e.indexOf('javascript:') ||
            0 === e.indexOf('vbscript:') ||
            0 === e.indexOf('data:')
          )
            return null
        }
        t &&
          !b.test(n) &&
          (n = (function (e, t) {
            v[' ' + e] ||
              (x.test(e)
                ? (v[' ' + e] = e + '/')
                : (v[' ' + e] = E(e, '/', !0)))
            const n = -1 === (e = v[' ' + e]).indexOf(':')
            return '//' === t.substring(0, 2)
              ? n
                ? t
                : e.replace(y, '$1') + t
              : '/' === t.charAt(0)
              ? n
                ? t
                : e.replace(w, '$1') + t
              : e + t
          })(t, n))
        try {
          n = encodeURI(n).replace(/%25/g, '%')
        } catch (r) {
          return null
        }
        return n
      }
      const v = {},
        x = /^[^:]+:\/*[^/]*$/,
        y = /^([^:]+:)[\s\S]*$/,
        w = /^([^:]+:\/*[^/]*)[\s\S]*$/
      const S = { exec: function () {} }
      function C(e) {
        let t,
          n,
          r = 1
        for (; r < arguments.length; r++)
          for (n in ((t = arguments[r]), t))
            Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n])
        return e
      }
      function _(e, t) {
        const n = e
          .replace(/\|/g, (e, t, n) => {
            let r = !1,
              i = t
            for (; --i >= 0 && '\\' === n[i]; ) r = !r
            return r ? '|' : ' |'
          })
          .split(/ \|/)
        let r = 0
        if (
          (n[0].trim() || n.shift(),
          n.length > 0 && !n[n.length - 1].trim() && n.pop(),
          n.length > t)
        )
          n.splice(t)
        else for (; n.length < t; ) n.push('')
        for (; r < n.length; r++) n[r] = n[r].trim().replace(/\\\|/g, '|')
        return n
      }
      function E(e, t, n) {
        const r = e.length
        if (0 === r) return ''
        let i = 0
        for (; i < r; ) {
          const o = e.charAt(r - i - 1)
          if (o !== t || n) {
            if (o === t || !n) break
            i++
          } else i++
        }
        return e.substr(0, r - i)
      }
      function T(e) {
        e &&
          e.sanitize &&
          !e.silent &&
          console.warn(
            'marked(): sanitize and sanitizer parameters are deprecated since version 0.7.0, should not be used and will be removed in the future. Read more here: https://marked.js.org/#/USING_ADVANCED.md#options'
          )
      }
      function A(e, t) {
        if (t < 1) return ''
        let n = ''
        for (; t > 1; ) 1 & t && (n += e), (t >>= 1), (e += e)
        return n + e
      }
      function O(e, t, n, r) {
        const i = t.href,
          o = t.title ? d(t.title) : null,
          a = e[1].replace(/\\([\[\]])/g, '$1')
        if ('!' !== e[0].charAt(0)) {
          r.state.inLink = !0
          const e = {
            type: 'link',
            raw: n,
            href: i,
            title: o,
            text: a,
            tokens: r.inlineTokens(a, []),
          }
          return (r.state.inLink = !1), e
        }
        return { type: 'image', raw: n, href: i, title: o, text: d(a) }
      }
      class N {
        constructor(e) {
          this.options = e || i
        }
        space(e) {
          const t = this.rules.block.newline.exec(e)
          if (t && t[0].length > 0) return { type: 'space', raw: t[0] }
        }
        code(e) {
          const t = this.rules.block.code.exec(e)
          if (t) {
            const e = t[0].replace(/^ {1,4}/gm, '')
            return {
              type: 'code',
              raw: t[0],
              codeBlockStyle: 'indented',
              text: this.options.pedantic ? e : E(e, '\n'),
            }
          }
        }
        fences(e) {
          const t = this.rules.block.fences.exec(e)
          if (t) {
            const e = t[0],
              n = (function (e, t) {
                const n = e.match(/^(\s+)(?:```)/)
                if (null === n) return t
                const r = n[1]
                return t
                  .split('\n')
                  .map((e) => {
                    const t = e.match(/^\s+/)
                    if (null === t) return e
                    const [n] = t
                    return n.length >= r.length ? e.slice(r.length) : e
                  })
                  .join('\n')
              })(e, t[3] || '')
            return {
              type: 'code',
              raw: e,
              lang: t[2] ? t[2].trim() : t[2],
              text: n,
            }
          }
        }
        heading(e) {
          const t = this.rules.block.heading.exec(e)
          if (t) {
            let e = t[2].trim()
            if (/#$/.test(e)) {
              const t = E(e, '#')
              this.options.pedantic
                ? (e = t.trim())
                : (t && !/ $/.test(t)) || (e = t.trim())
            }
            const n = {
              type: 'heading',
              raw: t[0],
              depth: t[1].length,
              text: e,
              tokens: [],
            }
            return this.lexer.inline(n.text, n.tokens), n
          }
        }
        hr(e) {
          const t = this.rules.block.hr.exec(e)
          if (t) return { type: 'hr', raw: t[0] }
        }
        blockquote(e) {
          const t = this.rules.block.blockquote.exec(e)
          if (t) {
            const e = t[0].replace(/^ *> ?/gm, '')
            return {
              type: 'blockquote',
              raw: t[0],
              tokens: this.lexer.blockTokens(e, []),
              text: e,
            }
          }
        }
        list(e) {
          let t = this.rules.block.list.exec(e)
          if (t) {
            let n,
              r,
              i,
              o,
              a,
              l,
              s,
              c,
              u,
              d,
              p,
              h,
              f = t[1].trim()
            const m = f.length > 1,
              g = {
                type: 'list',
                raw: '',
                ordered: m,
                start: m ? +f.slice(0, -1) : '',
                loose: !1,
                items: [],
              }
            ;(f = m ? `\\d{1,9}\\${f.slice(-1)}` : `\\${f}`),
              this.options.pedantic && (f = m ? f : '[*+-]')
            const b = new RegExp(`^( {0,3}${f})((?: [^\\n]*)?(?:\\n|$))`)
            for (
              ;
              e && ((h = !1), (t = b.exec(e))) && !this.rules.block.hr.test(e);

            ) {
              if (
                ((n = t[0]),
                (e = e.substring(n.length)),
                (c = t[2].split('\n', 1)[0]),
                (u = e.split('\n', 1)[0]),
                this.options.pedantic
                  ? ((o = 2), (p = c.trimLeft()))
                  : ((o = t[2].search(/[^ ]/)),
                    (o = o > 4 ? 1 : o),
                    (p = c.slice(o)),
                    (o += t[1].length)),
                (l = !1),
                !c &&
                  /^ *$/.test(u) &&
                  ((n += u + '\n'), (e = e.substring(u.length + 1)), (h = !0)),
                !h)
              ) {
                const t = new RegExp(
                  `^ {0,${Math.min(3, o - 1)}}(?:[*+-]|\\d{1,9}[.)])`
                )
                for (
                  ;
                  e &&
                  ((d = e.split('\n', 1)[0]),
                  (c = d),
                  this.options.pedantic &&
                    (c = c.replace(/^ {1,4}(?=( {4})*[^ ])/g, '  ')),
                  !t.test(c));

                ) {
                  if (c.search(/[^ ]/) >= o || !c.trim()) p += '\n' + c.slice(o)
                  else {
                    if (l) break
                    p += '\n' + c
                  }
                  l || c.trim() || (l = !0),
                    (n += d + '\n'),
                    (e = e.substring(d.length + 1))
                }
              }
              g.loose || (s ? (g.loose = !0) : /\n *\n *$/.test(n) && (s = !0)),
                this.options.gfm &&
                  ((r = /^\[[ xX]\] /.exec(p)),
                  r &&
                    ((i = '[ ] ' !== r[0]),
                    (p = p.replace(/^\[[ xX]\] +/, '')))),
                g.items.push({
                  type: 'list_item',
                  raw: n,
                  task: !!r,
                  checked: i,
                  loose: !1,
                  text: p,
                }),
                (g.raw += n)
            }
            ;(g.items[g.items.length - 1].raw = n.trimRight()),
              (g.items[g.items.length - 1].text = p.trimRight()),
              (g.raw = g.raw.trimRight())
            const k = g.items.length
            for (a = 0; a < k; a++) {
              ;(this.lexer.state.top = !1),
                (g.items[a].tokens = this.lexer.blockTokens(
                  g.items[a].text,
                  []
                ))
              const e = g.items[a].tokens.filter((e) => 'space' === e.type),
                t = e.every((e) => {
                  const t = e.raw.split('')
                  let n = 0
                  for (const r of t)
                    if (('\n' === r && (n += 1), n > 1)) return !0
                  return !1
                })
              !g.loose &&
                e.length &&
                t &&
                ((g.loose = !0), (g.items[a].loose = !0))
            }
            return g
          }
        }
        html(e) {
          const t = this.rules.block.html.exec(e)
          if (t) {
            const e = {
              type: 'html',
              raw: t[0],
              pre:
                !this.options.sanitizer &&
                ('pre' === t[1] || 'script' === t[1] || 'style' === t[1]),
              text: t[0],
            }
            return (
              this.options.sanitize &&
                ((e.type = 'paragraph'),
                (e.text = this.options.sanitizer
                  ? this.options.sanitizer(t[0])
                  : d(t[0])),
                (e.tokens = []),
                this.lexer.inline(e.text, e.tokens)),
              e
            )
          }
        }
        def(e) {
          const t = this.rules.block.def.exec(e)
          if (t) {
            t[3] && (t[3] = t[3].substring(1, t[3].length - 1))
            return {
              type: 'def',
              tag: t[1].toLowerCase().replace(/\s+/g, ' '),
              raw: t[0],
              href: t[2],
              title: t[3],
            }
          }
        }
        table(e) {
          const t = this.rules.block.table.exec(e)
          if (t) {
            const e = {
              type: 'table',
              header: _(t[1]).map((e) => ({ text: e })),
              align: t[2].replace(/^ *|\| *$/g, '').split(/ *\| */),
              rows:
                t[3] && t[3].trim()
                  ? t[3].replace(/\n[ \t]*$/, '').split('\n')
                  : [],
            }
            if (e.header.length === e.align.length) {
              e.raw = t[0]
              let n,
                r,
                i,
                o,
                a = e.align.length
              for (n = 0; n < a; n++)
                /^ *-+: *$/.test(e.align[n])
                  ? (e.align[n] = 'right')
                  : /^ *:-+: *$/.test(e.align[n])
                  ? (e.align[n] = 'center')
                  : /^ *:-+ *$/.test(e.align[n])
                  ? (e.align[n] = 'left')
                  : (e.align[n] = null)
              for (a = e.rows.length, n = 0; n < a; n++)
                e.rows[n] = _(e.rows[n], e.header.length).map((e) => ({
                  text: e,
                }))
              for (a = e.header.length, r = 0; r < a; r++)
                (e.header[r].tokens = []),
                  this.lexer.inlineTokens(e.header[r].text, e.header[r].tokens)
              for (a = e.rows.length, r = 0; r < a; r++)
                for (o = e.rows[r], i = 0; i < o.length; i++)
                  (o[i].tokens = []),
                    this.lexer.inlineTokens(o[i].text, o[i].tokens)
              return e
            }
          }
        }
        lheading(e) {
          const t = this.rules.block.lheading.exec(e)
          if (t) {
            const e = {
              type: 'heading',
              raw: t[0],
              depth: '=' === t[2].charAt(0) ? 1 : 2,
              text: t[1],
              tokens: [],
            }
            return this.lexer.inline(e.text, e.tokens), e
          }
        }
        paragraph(e) {
          const t = this.rules.block.paragraph.exec(e)
          if (t) {
            const e = {
              type: 'paragraph',
              raw: t[0],
              text:
                '\n' === t[1].charAt(t[1].length - 1)
                  ? t[1].slice(0, -1)
                  : t[1],
              tokens: [],
            }
            return this.lexer.inline(e.text, e.tokens), e
          }
        }
        text(e) {
          const t = this.rules.block.text.exec(e)
          if (t) {
            const e = { type: 'text', raw: t[0], text: t[0], tokens: [] }
            return this.lexer.inline(e.text, e.tokens), e
          }
        }
        escape(e) {
          const t = this.rules.inline.escape.exec(e)
          if (t) return { type: 'escape', raw: t[0], text: d(t[1]) }
        }
        tag(e) {
          const t = this.rules.inline.tag.exec(e)
          if (t)
            return (
              !this.lexer.state.inLink && /^<a /i.test(t[0])
                ? (this.lexer.state.inLink = !0)
                : this.lexer.state.inLink &&
                  /^<\/a>/i.test(t[0]) &&
                  (this.lexer.state.inLink = !1),
              !this.lexer.state.inRawBlock &&
              /^<(pre|code|kbd|script)(\s|>)/i.test(t[0])
                ? (this.lexer.state.inRawBlock = !0)
                : this.lexer.state.inRawBlock &&
                  /^<\/(pre|code|kbd|script)(\s|>)/i.test(t[0]) &&
                  (this.lexer.state.inRawBlock = !1),
              {
                type: this.options.sanitize ? 'text' : 'html',
                raw: t[0],
                inLink: this.lexer.state.inLink,
                inRawBlock: this.lexer.state.inRawBlock,
                text: this.options.sanitize
                  ? this.options.sanitizer
                    ? this.options.sanitizer(t[0])
                    : d(t[0])
                  : t[0],
              }
            )
        }
        link(e) {
          const t = this.rules.inline.link.exec(e)
          if (t) {
            const e = t[2].trim()
            if (!this.options.pedantic && /^</.test(e)) {
              if (!/>$/.test(e)) return
              const t = E(e.slice(0, -1), '\\')
              if ((e.length - t.length) % 2 === 0) return
            } else {
              const e = (function (e, t) {
                if (-1 === e.indexOf(t[1])) return -1
                const n = e.length
                let r = 0,
                  i = 0
                for (; i < n; i++)
                  if ('\\' === e[i]) i++
                  else if (e[i] === t[0]) r++
                  else if (e[i] === t[1] && (r--, r < 0)) return i
                return -1
              })(t[2], '()')
              if (e > -1) {
                const n = (0 === t[0].indexOf('!') ? 5 : 4) + t[1].length + e
                ;(t[2] = t[2].substring(0, e)),
                  (t[0] = t[0].substring(0, n).trim()),
                  (t[3] = '')
              }
            }
            let n = t[2],
              r = ''
            if (this.options.pedantic) {
              const e = /^([^'"]*[^\s])\s+(['"])(.*)\2/.exec(n)
              e && ((n = e[1]), (r = e[3]))
            } else r = t[3] ? t[3].slice(1, -1) : ''
            return (
              (n = n.trim()),
              /^</.test(n) &&
                (n =
                  this.options.pedantic && !/>$/.test(e)
                    ? n.slice(1)
                    : n.slice(1, -1)),
              O(
                t,
                {
                  href: n ? n.replace(this.rules.inline._escapes, '$1') : n,
                  title: r ? r.replace(this.rules.inline._escapes, '$1') : r,
                },
                t[0],
                this.lexer
              )
            )
          }
        }
        reflink(e, t) {
          let n
          if (
            (n = this.rules.inline.reflink.exec(e)) ||
            (n = this.rules.inline.nolink.exec(e))
          ) {
            let e = (n[2] || n[1]).replace(/\s+/g, ' ')
            if (((e = t[e.toLowerCase()]), !e || !e.href)) {
              const e = n[0].charAt(0)
              return { type: 'text', raw: e, text: e }
            }
            return O(n, e, n[0], this.lexer)
          }
        }
        emStrong(e, t, n = '') {
          let r = this.rules.inline.emStrong.lDelim.exec(e)
          if (!r) return
          if (r[3] && n.match(/[\p{L}\p{N}]/u)) return
          const i = r[1] || r[2] || ''
          if (
            !i ||
            (i && ('' === n || this.rules.inline.punctuation.exec(n)))
          ) {
            const n = r[0].length - 1
            let i,
              o,
              a = n,
              l = 0
            const s =
              '*' === r[0][0]
                ? this.rules.inline.emStrong.rDelimAst
                : this.rules.inline.emStrong.rDelimUnd
            for (
              s.lastIndex = 0, t = t.slice(-1 * e.length + n);
              null != (r = s.exec(t));

            ) {
              if (((i = r[1] || r[2] || r[3] || r[4] || r[5] || r[6]), !i))
                continue
              if (((o = i.length), r[3] || r[4])) {
                a += o
                continue
              }
              if ((r[5] || r[6]) && n % 3 && !((n + o) % 3)) {
                l += o
                continue
              }
              if (((a -= o), a > 0)) continue
              if (((o = Math.min(o, o + a + l)), Math.min(n, o) % 2)) {
                const t = e.slice(1, n + r.index + o)
                return {
                  type: 'em',
                  raw: e.slice(0, n + r.index + o + 1),
                  text: t,
                  tokens: this.lexer.inlineTokens(t, []),
                }
              }
              const t = e.slice(2, n + r.index + o - 1)
              return {
                type: 'strong',
                raw: e.slice(0, n + r.index + o + 1),
                text: t,
                tokens: this.lexer.inlineTokens(t, []),
              }
            }
          }
        }
        codespan(e) {
          const t = this.rules.inline.code.exec(e)
          if (t) {
            let e = t[2].replace(/\n/g, ' ')
            const n = /[^ ]/.test(e),
              r = /^ /.test(e) && / $/.test(e)
            return (
              n && r && (e = e.substring(1, e.length - 1)),
              (e = d(e, !0)),
              { type: 'codespan', raw: t[0], text: e }
            )
          }
        }
        br(e) {
          const t = this.rules.inline.br.exec(e)
          if (t) return { type: 'br', raw: t[0] }
        }
        del(e) {
          const t = this.rules.inline.del.exec(e)
          if (t)
            return {
              type: 'del',
              raw: t[0],
              text: t[2],
              tokens: this.lexer.inlineTokens(t[2], []),
            }
        }
        autolink(e, t) {
          const n = this.rules.inline.autolink.exec(e)
          if (n) {
            let e, r
            return (
              '@' === n[2]
                ? ((e = d(this.options.mangle ? t(n[1]) : n[1])),
                  (r = 'mailto:' + e))
                : ((e = d(n[1])), (r = e)),
              {
                type: 'link',
                raw: n[0],
                text: e,
                href: r,
                tokens: [{ type: 'text', raw: e, text: e }],
              }
            )
          }
        }
        url(e, t) {
          let n
          if ((n = this.rules.inline.url.exec(e))) {
            let e, r
            if ('@' === n[2])
              (e = d(this.options.mangle ? t(n[0]) : n[0])), (r = 'mailto:' + e)
            else {
              let t
              do {
                ;(t = n[0]), (n[0] = this.rules.inline._backpedal.exec(n[0])[0])
              } while (t !== n[0])
              ;(e = d(n[0])), (r = 'www.' === n[1] ? 'http://' + e : e)
            }
            return {
              type: 'link',
              raw: n[0],
              text: e,
              href: r,
              tokens: [{ type: 'text', raw: e, text: e }],
            }
          }
        }
        inlineText(e, t) {
          const n = this.rules.inline.text.exec(e)
          if (n) {
            let e
            return (
              (e = this.lexer.state.inRawBlock
                ? this.options.sanitize
                  ? this.options.sanitizer
                    ? this.options.sanitizer(n[0])
                    : d(n[0])
                  : n[0]
                : d(this.options.smartypants ? t(n[0]) : n[0])),
              { type: 'text', raw: n[0], text: e }
            )
          }
        }
      }
      const L = {
        newline: /^(?: *(?:\n|$))+/,
        code: /^( {4}[^\n]+(?:\n(?: *(?:\n|$))*)?)+/,
        fences:
          /^ {0,3}(`{3,}(?=[^`\n]*\n)|~{3,})([^\n]*)\n(?:|([\s\S]*?)\n)(?: {0,3}\1[~`]* *(?=\n|$)|$)/,
        hr: /^ {0,3}((?:- *){3,}|(?:_ *){3,}|(?:\* *){3,})(?:\n+|$)/,
        heading: /^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,
        blockquote: /^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/,
        list: /^( {0,3}bull)( [^\n]+?)?(?:\n|$)/,
        html: '^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n *)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$))',
        def: /^ {0,3}\[(label)\]: *(?:\n *)?<?([^\s>]+)>?(?:(?: +(?:\n *)?| *\n *)(title))? *(?:\n+|$)/,
        table: S,
        lheading: /^([^\n]+)\n {0,3}(=+|-+) *(?:\n+|$)/,
        _paragraph:
          /^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/,
        text: /^[^\n]+/,
        _label: /(?!\s*\])(?:\\.|[^\[\]\\])+/,
        _title: /(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/,
      }
      ;(L.def = m(L.def)
        .replace('label', L._label)
        .replace('title', L._title)
        .getRegex()),
        (L.bullet = /(?:[*+-]|\d{1,9}[.)])/),
        (L.listItemStart = m(/^( *)(bull) */)
          .replace('bull', L.bullet)
          .getRegex()),
        (L.list = m(L.list)
          .replace(/bull/g, L.bullet)
          .replace(
            'hr',
            '\\n+(?=\\1?(?:(?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$))'
          )
          .replace('def', '\\n+(?=' + L.def.source + ')')
          .getRegex()),
        (L._tag =
          'address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|section|source|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul'),
        (L._comment = /<!--(?!-?>)[\s\S]*?(?:-->|$)/),
        (L.html = m(L.html, 'i')
          .replace('comment', L._comment)
          .replace('tag', L._tag)
          .replace(
            'attribute',
            / +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/
          )
          .getRegex()),
        (L.paragraph = m(L._paragraph)
          .replace('hr', L.hr)
          .replace('heading', ' {0,3}#{1,6} ')
          .replace('|lheading', '')
          .replace('|table', '')
          .replace('blockquote', ' {0,3}>')
          .replace('fences', ' {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n')
          .replace('list', ' {0,3}(?:[*+-]|1[.)]) ')
          .replace(
            'html',
            '</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)'
          )
          .replace('tag', L._tag)
          .getRegex()),
        (L.blockquote = m(L.blockquote)
          .replace('paragraph', L.paragraph)
          .getRegex()),
        (L.normal = C({}, L)),
        (L.gfm = C({}, L.normal, {
          table:
            '^ *([^\\n ].*\\|.*)\\n {0,3}(?:\\| *)?(:?-+:? *(?:\\| *:?-+:? *)*)(?:\\| *)?(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)',
        })),
        (L.gfm.table = m(L.gfm.table)
          .replace('hr', L.hr)
          .replace('heading', ' {0,3}#{1,6} ')
          .replace('blockquote', ' {0,3}>')
          .replace('code', ' {4}[^\\n]')
          .replace('fences', ' {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n')
          .replace('list', ' {0,3}(?:[*+-]|1[.)]) ')
          .replace(
            'html',
            '</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)'
          )
          .replace('tag', L._tag)
          .getRegex()),
        (L.gfm.paragraph = m(L._paragraph)
          .replace('hr', L.hr)
          .replace('heading', ' {0,3}#{1,6} ')
          .replace('|lheading', '')
          .replace('table', L.gfm.table)
          .replace('blockquote', ' {0,3}>')
          .replace('fences', ' {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n')
          .replace('list', ' {0,3}(?:[*+-]|1[.)]) ')
          .replace(
            'html',
            '</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)'
          )
          .replace('tag', L._tag)
          .getRegex()),
        (L.pedantic = C({}, L.normal, {
          html: m(
            '^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|\'[^\']*\'|\\s[^\'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))'
          )
            .replace('comment', L._comment)
            .replace(
              /tag/g,
              '(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b'
            )
            .getRegex(),
          def: /^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,
          heading: /^(#{1,6})(.*)(?:\n+|$)/,
          fences: S,
          paragraph: m(L.normal._paragraph)
            .replace('hr', L.hr)
            .replace('heading', ' *#{1,6} *[^\n]')
            .replace('lheading', L.lheading)
            .replace('blockquote', ' {0,3}>')
            .replace('|fences', '')
            .replace('|list', '')
            .replace('|html', '')
            .getRegex(),
        }))
      const R = {
        escape: /^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,
        autolink: /^<(scheme:[^\s\x00-\x1f<>]*|email)>/,
        url: S,
        tag: '^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>',
        link: /^!?\[(label)\]\(\s*(href)(?:\s+(title))?\s*\)/,
        reflink: /^!?\[(label)\]\[(ref)\]/,
        nolink: /^!?\[(ref)\](?:\[\])?/,
        reflinkSearch: 'reflink|nolink(?!\\()',
        emStrong: {
          lDelim: /^(?:\*+(?:([punct_])|[^\s*]))|^_+(?:([punct*])|([^\s_]))/,
          rDelimAst:
            /^[^_*]*?\_\_[^_*]*?\*[^_*]*?(?=\_\_)|[punct_](\*+)(?=[\s]|$)|[^punct*_\s](\*+)(?=[punct_\s]|$)|[punct_\s](\*+)(?=[^punct*_\s])|[\s](\*+)(?=[punct_])|[punct_](\*+)(?=[punct_])|[^punct*_\s](\*+)(?=[^punct*_\s])/,
          rDelimUnd:
            /^[^_*]*?\*\*[^_*]*?\_[^_*]*?(?=\*\*)|[punct*](\_+)(?=[\s]|$)|[^punct*_\s](\_+)(?=[punct*\s]|$)|[punct*\s](\_+)(?=[^punct*_\s])|[\s](\_+)(?=[punct*])|[punct*](\_+)(?=[punct*])/,
        },
        code: /^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,
        br: /^( {2,}|\\)\n(?!\s*$)/,
        del: S,
        text: /^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/,
        punctuation: /^([\spunctuation])/,
      }
      function z(e) {
        return e
          .replace(/---/g, '\u2014')
          .replace(/--/g, '\u2013')
          .replace(/(^|[-\u2014/(\[{"\s])'/g, '$1\u2018')
          .replace(/'/g, '\u2019')
          .replace(/(^|[-\u2014/(\[{\u2018\s])"/g, '$1\u201c')
          .replace(/"/g, '\u201d')
          .replace(/\.{3}/g, '\u2026')
      }
      function I(e) {
        let t,
          n,
          r = ''
        const i = e.length
        for (t = 0; t < i; t++)
          (n = e.charCodeAt(t)),
            Math.random() > 0.5 && (n = 'x' + n.toString(16)),
            (r += '&#' + n + ';')
        return r
      }
      ;(R._punctuation = '!"#$%&\'()+\\-.,/:;<=>?@\\[\\]`^{|}~'),
        (R.punctuation = m(R.punctuation)
          .replace(/punctuation/g, R._punctuation)
          .getRegex()),
        (R.blockSkip = /\[[^\]]*?\]\([^\)]*?\)|`[^`]*?`|<[^>]*?>/g),
        (R.escapedEmSt = /\\\*|\\_/g),
        (R._comment = m(L._comment)
          .replace('(?:--\x3e|$)', '--\x3e')
          .getRegex()),
        (R.emStrong.lDelim = m(R.emStrong.lDelim)
          .replace(/punct/g, R._punctuation)
          .getRegex()),
        (R.emStrong.rDelimAst = m(R.emStrong.rDelimAst, 'g')
          .replace(/punct/g, R._punctuation)
          .getRegex()),
        (R.emStrong.rDelimUnd = m(R.emStrong.rDelimUnd, 'g')
          .replace(/punct/g, R._punctuation)
          .getRegex()),
        (R._escapes = /\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/g),
        (R._scheme = /[a-zA-Z][a-zA-Z0-9+.-]{1,31}/),
        (R._email =
          /[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/),
        (R.autolink = m(R.autolink)
          .replace('scheme', R._scheme)
          .replace('email', R._email)
          .getRegex()),
        (R._attribute =
          /\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/),
        (R.tag = m(R.tag)
          .replace('comment', R._comment)
          .replace('attribute', R._attribute)
          .getRegex()),
        (R._label = /(?:\[(?:\\.|[^\[\]\\])*\]|\\.|`[^`]*`|[^\[\]\\`])*?/),
        (R._href = /<(?:\\.|[^\n<>\\])+>|[^\s\x00-\x1f]*/),
        (R._title =
          /"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/),
        (R.link = m(R.link)
          .replace('label', R._label)
          .replace('href', R._href)
          .replace('title', R._title)
          .getRegex()),
        (R.reflink = m(R.reflink)
          .replace('label', R._label)
          .replace('ref', L._label)
          .getRegex()),
        (R.nolink = m(R.nolink).replace('ref', L._label).getRegex()),
        (R.reflinkSearch = m(R.reflinkSearch, 'g')
          .replace('reflink', R.reflink)
          .replace('nolink', R.nolink)
          .getRegex()),
        (R.normal = C({}, R)),
        (R.pedantic = C({}, R.normal, {
          strong: {
            start: /^__|\*\*/,
            middle:
              /^__(?=\S)([\s\S]*?\S)__(?!_)|^\*\*(?=\S)([\s\S]*?\S)\*\*(?!\*)/,
            endAst: /\*\*(?!\*)/g,
            endUnd: /__(?!_)/g,
          },
          em: {
            start: /^_|\*/,
            middle:
              /^()\*(?=\S)([\s\S]*?\S)\*(?!\*)|^_(?=\S)([\s\S]*?\S)_(?!_)/,
            endAst: /\*(?!\*)/g,
            endUnd: /_(?!_)/g,
          },
          link: m(/^!?\[(label)\]\((.*?)\)/)
            .replace('label', R._label)
            .getRegex(),
          reflink: m(/^!?\[(label)\]\s*\[([^\]]*)\]/)
            .replace('label', R._label)
            .getRegex(),
        })),
        (R.gfm = C({}, R.normal, {
          escape: m(R.escape).replace('])', '~|])').getRegex(),
          _extended_email:
            /[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/,
          url: /^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/,
          _backpedal:
            /(?:[^?!.,:;*_~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_~)]+(?!$))+/,
          del: /^(~~?)(?=[^\s~])([\s\S]*?[^\s~])\1(?=[^~]|$)/,
          text: /^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/,
        })),
        (R.gfm.url = m(R.gfm.url, 'i')
          .replace('email', R.gfm._extended_email)
          .getRegex()),
        (R.breaks = C({}, R.gfm, {
          br: m(R.br).replace('{2,}', '*').getRegex(),
          text: m(R.gfm.text)
            .replace('\\b_', '\\b_| {2,}\\n')
            .replace(/\{2,\}/g, '*')
            .getRegex(),
        }))
      class M {
        constructor(e) {
          ;(this.tokens = []),
            (this.tokens.links = Object.create(null)),
            (this.options = e || i),
            (this.options.tokenizer = this.options.tokenizer || new N()),
            (this.tokenizer = this.options.tokenizer),
            (this.tokenizer.options = this.options),
            (this.tokenizer.lexer = this),
            (this.inlineQueue = []),
            (this.state = { inLink: !1, inRawBlock: !1, top: !0 })
          const t = { block: L.normal, inline: R.normal }
          this.options.pedantic
            ? ((t.block = L.pedantic), (t.inline = R.pedantic))
            : this.options.gfm &&
              ((t.block = L.gfm),
              this.options.breaks ? (t.inline = R.breaks) : (t.inline = R.gfm)),
            (this.tokenizer.rules = t)
        }
        static get rules() {
          return { block: L, inline: R }
        }
        static lex(e, t) {
          return new M(t).lex(e)
        }
        static lexInline(e, t) {
          return new M(t).inlineTokens(e)
        }
        lex(e) {
          let t
          for (
            e = e.replace(/\r\n|\r/g, '\n').replace(/\t/g, '    '),
              this.blockTokens(e, this.tokens);
            (t = this.inlineQueue.shift());

          )
            this.inlineTokens(t.src, t.tokens)
          return this.tokens
        }
        blockTokens(e, t = []) {
          let n, r, i, o
          for (this.options.pedantic && (e = e.replace(/^ +$/gm, '')); e; )
            if (
              !(
                this.options.extensions &&
                this.options.extensions.block &&
                this.options.extensions.block.some(
                  (r) =>
                    !!(n = r.call({ lexer: this }, e, t)) &&
                    ((e = e.substring(n.raw.length)), t.push(n), !0)
                )
              )
            )
              if ((n = this.tokenizer.space(e)))
                (e = e.substring(n.raw.length)),
                  1 === n.raw.length && t.length > 0
                    ? (t[t.length - 1].raw += '\n')
                    : t.push(n)
              else if ((n = this.tokenizer.code(e)))
                (e = e.substring(n.raw.length)),
                  (r = t[t.length - 1]),
                  !r || ('paragraph' !== r.type && 'text' !== r.type)
                    ? t.push(n)
                    : ((r.raw += '\n' + n.raw),
                      (r.text += '\n' + n.text),
                      (this.inlineQueue[this.inlineQueue.length - 1].src =
                        r.text))
              else if ((n = this.tokenizer.fences(e)))
                (e = e.substring(n.raw.length)), t.push(n)
              else if ((n = this.tokenizer.heading(e)))
                (e = e.substring(n.raw.length)), t.push(n)
              else if ((n = this.tokenizer.hr(e)))
                (e = e.substring(n.raw.length)), t.push(n)
              else if ((n = this.tokenizer.blockquote(e)))
                (e = e.substring(n.raw.length)), t.push(n)
              else if ((n = this.tokenizer.list(e)))
                (e = e.substring(n.raw.length)), t.push(n)
              else if ((n = this.tokenizer.html(e)))
                (e = e.substring(n.raw.length)), t.push(n)
              else if ((n = this.tokenizer.def(e)))
                (e = e.substring(n.raw.length)),
                  (r = t[t.length - 1]),
                  !r || ('paragraph' !== r.type && 'text' !== r.type)
                    ? this.tokens.links[n.tag] ||
                      (this.tokens.links[n.tag] = {
                        href: n.href,
                        title: n.title,
                      })
                    : ((r.raw += '\n' + n.raw),
                      (r.text += '\n' + n.raw),
                      (this.inlineQueue[this.inlineQueue.length - 1].src =
                        r.text))
              else if ((n = this.tokenizer.table(e)))
                (e = e.substring(n.raw.length)), t.push(n)
              else if ((n = this.tokenizer.lheading(e)))
                (e = e.substring(n.raw.length)), t.push(n)
              else {
                if (
                  ((i = e),
                  this.options.extensions && this.options.extensions.startBlock)
                ) {
                  let t = 1 / 0
                  const n = e.slice(1)
                  let r
                  this.options.extensions.startBlock.forEach(function (e) {
                    ;(r = e.call({ lexer: this }, n)),
                      'number' === typeof r && r >= 0 && (t = Math.min(t, r))
                  }),
                    t < 1 / 0 && t >= 0 && (i = e.substring(0, t + 1))
                }
                if (this.state.top && (n = this.tokenizer.paragraph(i)))
                  (r = t[t.length - 1]),
                    o && 'paragraph' === r.type
                      ? ((r.raw += '\n' + n.raw),
                        (r.text += '\n' + n.text),
                        this.inlineQueue.pop(),
                        (this.inlineQueue[this.inlineQueue.length - 1].src =
                          r.text))
                      : t.push(n),
                    (o = i.length !== e.length),
                    (e = e.substring(n.raw.length))
                else if ((n = this.tokenizer.text(e)))
                  (e = e.substring(n.raw.length)),
                    (r = t[t.length - 1]),
                    r && 'text' === r.type
                      ? ((r.raw += '\n' + n.raw),
                        (r.text += '\n' + n.text),
                        this.inlineQueue.pop(),
                        (this.inlineQueue[this.inlineQueue.length - 1].src =
                          r.text))
                      : t.push(n)
                else if (e) {
                  const t = 'Infinite loop on byte: ' + e.charCodeAt(0)
                  if (this.options.silent) {
                    console.error(t)
                    break
                  }
                  throw new Error(t)
                }
              }
          return (this.state.top = !0), t
        }
        inline(e, t) {
          this.inlineQueue.push({ src: e, tokens: t })
        }
        inlineTokens(e, t = []) {
          let n,
            r,
            i,
            o,
            a,
            l,
            s = e
          if (this.tokens.links) {
            const e = Object.keys(this.tokens.links)
            if (e.length > 0)
              for (
                ;
                null != (o = this.tokenizer.rules.inline.reflinkSearch.exec(s));

              )
                e.includes(o[0].slice(o[0].lastIndexOf('[') + 1, -1)) &&
                  (s =
                    s.slice(0, o.index) +
                    '[' +
                    A('a', o[0].length - 2) +
                    ']' +
                    s.slice(
                      this.tokenizer.rules.inline.reflinkSearch.lastIndex
                    ))
          }
          for (; null != (o = this.tokenizer.rules.inline.blockSkip.exec(s)); )
            s =
              s.slice(0, o.index) +
              '[' +
              A('a', o[0].length - 2) +
              ']' +
              s.slice(this.tokenizer.rules.inline.blockSkip.lastIndex)
          for (
            ;
            null != (o = this.tokenizer.rules.inline.escapedEmSt.exec(s));

          )
            s =
              s.slice(0, o.index) +
              '++' +
              s.slice(this.tokenizer.rules.inline.escapedEmSt.lastIndex)
          for (; e; )
            if (
              (a || (l = ''),
              (a = !1),
              !(
                this.options.extensions &&
                this.options.extensions.inline &&
                this.options.extensions.inline.some(
                  (r) =>
                    !!(n = r.call({ lexer: this }, e, t)) &&
                    ((e = e.substring(n.raw.length)), t.push(n), !0)
                )
              ))
            )
              if ((n = this.tokenizer.escape(e)))
                (e = e.substring(n.raw.length)), t.push(n)
              else if ((n = this.tokenizer.tag(e)))
                (e = e.substring(n.raw.length)),
                  (r = t[t.length - 1]),
                  r && 'text' === n.type && 'text' === r.type
                    ? ((r.raw += n.raw), (r.text += n.text))
                    : t.push(n)
              else if ((n = this.tokenizer.link(e)))
                (e = e.substring(n.raw.length)), t.push(n)
              else if ((n = this.tokenizer.reflink(e, this.tokens.links)))
                (e = e.substring(n.raw.length)),
                  (r = t[t.length - 1]),
                  r && 'text' === n.type && 'text' === r.type
                    ? ((r.raw += n.raw), (r.text += n.text))
                    : t.push(n)
              else if ((n = this.tokenizer.emStrong(e, s, l)))
                (e = e.substring(n.raw.length)), t.push(n)
              else if ((n = this.tokenizer.codespan(e)))
                (e = e.substring(n.raw.length)), t.push(n)
              else if ((n = this.tokenizer.br(e)))
                (e = e.substring(n.raw.length)), t.push(n)
              else if ((n = this.tokenizer.del(e)))
                (e = e.substring(n.raw.length)), t.push(n)
              else if ((n = this.tokenizer.autolink(e, I)))
                (e = e.substring(n.raw.length)), t.push(n)
              else if (this.state.inLink || !(n = this.tokenizer.url(e, I))) {
                if (
                  ((i = e),
                  this.options.extensions &&
                    this.options.extensions.startInline)
                ) {
                  let t = 1 / 0
                  const n = e.slice(1)
                  let r
                  this.options.extensions.startInline.forEach(function (e) {
                    ;(r = e.call({ lexer: this }, n)),
                      'number' === typeof r && r >= 0 && (t = Math.min(t, r))
                  }),
                    t < 1 / 0 && t >= 0 && (i = e.substring(0, t + 1))
                }
                if ((n = this.tokenizer.inlineText(i, z)))
                  (e = e.substring(n.raw.length)),
                    '_' !== n.raw.slice(-1) && (l = n.raw.slice(-1)),
                    (a = !0),
                    (r = t[t.length - 1]),
                    r && 'text' === r.type
                      ? ((r.raw += n.raw), (r.text += n.text))
                      : t.push(n)
                else if (e) {
                  const t = 'Infinite loop on byte: ' + e.charCodeAt(0)
                  if (this.options.silent) {
                    console.error(t)
                    break
                  }
                  throw new Error(t)
                }
              } else (e = e.substring(n.raw.length)), t.push(n)
          return t
        }
      }
      class H {
        constructor(e) {
          this.options = e || i
        }
        code(e, t, n) {
          const r = (t || '').match(/\S*/)[0]
          if (this.options.highlight) {
            const t = this.options.highlight(e, r)
            null != t && t !== e && ((n = !0), (e = t))
          }
          return (
            (e = e.replace(/\n$/, '') + '\n'),
            r
              ? '<pre><code class="' +
                this.options.langPrefix +
                d(r, !0) +
                '">' +
                (n ? e : d(e, !0)) +
                '</code></pre>\n'
              : '<pre><code>' + (n ? e : d(e, !0)) + '</code></pre>\n'
          )
        }
        blockquote(e) {
          return '<blockquote>\n' + e + '</blockquote>\n'
        }
        html(e) {
          return e
        }
        heading(e, t, n, r) {
          return this.options.headerIds
            ? '<h' +
                t +
                ' id="' +
                this.options.headerPrefix +
                r.slug(n) +
                '">' +
                e +
                '</h' +
                t +
                '>\n'
            : '<h' + t + '>' + e + '</h' + t + '>\n'
        }
        hr() {
          return this.options.xhtml ? '<hr/>\n' : '<hr>\n'
        }
        list(e, t, n) {
          const r = t ? 'ol' : 'ul'
          return (
            '<' +
            r +
            (t && 1 !== n ? ' start="' + n + '"' : '') +
            '>\n' +
            e +
            '</' +
            r +
            '>\n'
          )
        }
        listitem(e) {
          return '<li>' + e + '</li>\n'
        }
        checkbox(e) {
          return (
            '<input ' +
            (e ? 'checked="" ' : '') +
            'disabled="" type="checkbox"' +
            (this.options.xhtml ? ' /' : '') +
            '> '
          )
        }
        paragraph(e) {
          return '<p>' + e + '</p>\n'
        }
        table(e, t) {
          return (
            t && (t = '<tbody>' + t + '</tbody>'),
            '<table>\n<thead>\n' + e + '</thead>\n' + t + '</table>\n'
          )
        }
        tablerow(e) {
          return '<tr>\n' + e + '</tr>\n'
        }
        tablecell(e, t) {
          const n = t.header ? 'th' : 'td'
          return (
            (t.align ? '<' + n + ' align="' + t.align + '">' : '<' + n + '>') +
            e +
            '</' +
            n +
            '>\n'
          )
        }
        strong(e) {
          return '<strong>' + e + '</strong>'
        }
        em(e) {
          return '<em>' + e + '</em>'
        }
        codespan(e) {
          return '<code>' + e + '</code>'
        }
        br() {
          return this.options.xhtml ? '<br/>' : '<br>'
        }
        del(e) {
          return '<del>' + e + '</del>'
        }
        link(e, t, n) {
          if (null === (e = k(this.options.sanitize, this.options.baseUrl, e)))
            return n
          let r = '<a href="' + d(e) + '"'
          return t && (r += ' title="' + t + '"'), (r += '>' + n + '</a>'), r
        }
        image(e, t, n) {
          if (null === (e = k(this.options.sanitize, this.options.baseUrl, e)))
            return n
          let r = '<img src="' + e + '" alt="' + n + '"'
          return (
            t && (r += ' title="' + t + '"'),
            (r += this.options.xhtml ? '/>' : '>'),
            r
          )
        }
        text(e) {
          return e
        }
      }
      class P {
        strong(e) {
          return e
        }
        em(e) {
          return e
        }
        codespan(e) {
          return e
        }
        del(e) {
          return e
        }
        html(e) {
          return e
        }
        text(e) {
          return e
        }
        link(e, t, n) {
          return '' + n
        }
        image(e, t, n) {
          return '' + n
        }
        br() {
          return ''
        }
      }
      class D {
        constructor() {
          this.seen = {}
        }
        serialize(e) {
          return e
            .toLowerCase()
            .trim()
            .replace(/<[!\/a-z].*?>/gi, '')
            .replace(
              /[\u2000-\u206F\u2E00-\u2E7F\\'!"#$%&()*+,./:;<=>?@[\]^`{|}~]/g,
              ''
            )
            .replace(/\s/g, '-')
        }
        getNextSafeSlug(e, t) {
          let n = e,
            r = 0
          if (this.seen.hasOwnProperty(n)) {
            r = this.seen[e]
            do {
              r++, (n = e + '-' + r)
            } while (this.seen.hasOwnProperty(n))
          }
          return t || ((this.seen[e] = r), (this.seen[n] = 0)), n
        }
        slug(e, t = {}) {
          const n = this.serialize(e)
          return this.getNextSafeSlug(n, t.dryrun)
        }
      }
      class $ {
        constructor(e) {
          ;(this.options = e || i),
            (this.options.renderer = this.options.renderer || new H()),
            (this.renderer = this.options.renderer),
            (this.renderer.options = this.options),
            (this.textRenderer = new P()),
            (this.slugger = new D())
        }
        static parse(e, t) {
          return new $(t).parse(e)
        }
        static parseInline(e, t) {
          return new $(t).parseInline(e)
        }
        parse(e, t = !0) {
          let n,
            r,
            i,
            o,
            a,
            l,
            s,
            c,
            u,
            d,
            p,
            f,
            m,
            g,
            b,
            k,
            v,
            x,
            y,
            w = ''
          const S = e.length
          for (n = 0; n < S; n++)
            if (
              ((d = e[n]),
              this.options.extensions &&
                this.options.extensions.renderers &&
                this.options.extensions.renderers[d.type] &&
                ((y = this.options.extensions.renderers[d.type].call(
                  { parser: this },
                  d
                )),
                !1 !== y ||
                  ![
                    'space',
                    'hr',
                    'heading',
                    'code',
                    'table',
                    'blockquote',
                    'list',
                    'html',
                    'paragraph',
                    'text',
                  ].includes(d.type)))
            )
              w += y || ''
            else
              switch (d.type) {
                case 'space':
                  continue
                case 'hr':
                  w += this.renderer.hr()
                  continue
                case 'heading':
                  w += this.renderer.heading(
                    this.parseInline(d.tokens),
                    d.depth,
                    h(this.parseInline(d.tokens, this.textRenderer)),
                    this.slugger
                  )
                  continue
                case 'code':
                  w += this.renderer.code(d.text, d.lang, d.escaped)
                  continue
                case 'table':
                  for (c = '', s = '', o = d.header.length, r = 0; r < o; r++)
                    s += this.renderer.tablecell(
                      this.parseInline(d.header[r].tokens),
                      { header: !0, align: d.align[r] }
                    )
                  for (
                    c += this.renderer.tablerow(s),
                      u = '',
                      o = d.rows.length,
                      r = 0;
                    r < o;
                    r++
                  ) {
                    for (l = d.rows[r], s = '', a = l.length, i = 0; i < a; i++)
                      s += this.renderer.tablecell(
                        this.parseInline(l[i].tokens),
                        { header: !1, align: d.align[i] }
                      )
                    u += this.renderer.tablerow(s)
                  }
                  w += this.renderer.table(c, u)
                  continue
                case 'blockquote':
                  ;(u = this.parse(d.tokens)),
                    (w += this.renderer.blockquote(u))
                  continue
                case 'list':
                  for (
                    p = d.ordered,
                      f = d.start,
                      m = d.loose,
                      o = d.items.length,
                      u = '',
                      r = 0;
                    r < o;
                    r++
                  )
                    (b = d.items[r]),
                      (k = b.checked),
                      (v = b.task),
                      (g = ''),
                      b.task &&
                        ((x = this.renderer.checkbox(k)),
                        m
                          ? b.tokens.length > 0 &&
                            'paragraph' === b.tokens[0].type
                            ? ((b.tokens[0].text = x + ' ' + b.tokens[0].text),
                              b.tokens[0].tokens &&
                                b.tokens[0].tokens.length > 0 &&
                                'text' === b.tokens[0].tokens[0].type &&
                                (b.tokens[0].tokens[0].text =
                                  x + ' ' + b.tokens[0].tokens[0].text))
                            : b.tokens.unshift({ type: 'text', text: x })
                          : (g += x)),
                      (g += this.parse(b.tokens, m)),
                      (u += this.renderer.listitem(g, v, k))
                  w += this.renderer.list(u, p, f)
                  continue
                case 'html':
                  w += this.renderer.html(d.text)
                  continue
                case 'paragraph':
                  w += this.renderer.paragraph(this.parseInline(d.tokens))
                  continue
                case 'text':
                  for (
                    u = d.tokens ? this.parseInline(d.tokens) : d.text;
                    n + 1 < S && 'text' === e[n + 1].type;

                  )
                    (d = e[++n]),
                      (u +=
                        '\n' + (d.tokens ? this.parseInline(d.tokens) : d.text))
                  w += t ? this.renderer.paragraph(u) : u
                  continue
                default: {
                  const e = 'Token with "' + d.type + '" type was not found.'
                  if (this.options.silent) return void console.error(e)
                  throw new Error(e)
                }
              }
          return w
        }
        parseInline(e, t) {
          t = t || this.renderer
          let n,
            r,
            i,
            o = ''
          const a = e.length
          for (n = 0; n < a; n++)
            if (
              ((r = e[n]),
              this.options.extensions &&
                this.options.extensions.renderers &&
                this.options.extensions.renderers[r.type] &&
                ((i = this.options.extensions.renderers[r.type].call(
                  { parser: this },
                  r
                )),
                !1 !== i ||
                  ![
                    'escape',
                    'html',
                    'link',
                    'image',
                    'strong',
                    'em',
                    'codespan',
                    'br',
                    'del',
                    'text',
                  ].includes(r.type)))
            )
              o += i || ''
            else
              switch (r.type) {
                case 'escape':
                  o += t.text(r.text)
                  break
                case 'html':
                  o += t.html(r.text)
                  break
                case 'link':
                  o += t.link(r.href, r.title, this.parseInline(r.tokens, t))
                  break
                case 'image':
                  o += t.image(r.href, r.title, r.text)
                  break
                case 'strong':
                  o += t.strong(this.parseInline(r.tokens, t))
                  break
                case 'em':
                  o += t.em(this.parseInline(r.tokens, t))
                  break
                case 'codespan':
                  o += t.codespan(r.text)
                  break
                case 'br':
                  o += t.br()
                  break
                case 'del':
                  o += t.del(this.parseInline(r.tokens, t))
                  break
                case 'text':
                  o += t.text(r.text)
                  break
                default: {
                  const e = 'Token with "' + r.type + '" type was not found.'
                  if (this.options.silent) return void console.error(e)
                  throw new Error(e)
                }
              }
          return o
        }
      }
      function j(e, t, n) {
        if ('undefined' === typeof e || null === e)
          throw new Error('marked(): input parameter is undefined or null')
        if ('string' !== typeof e)
          throw new Error(
            'marked(): input parameter is of type ' +
              Object.prototype.toString.call(e) +
              ', string expected'
          )
        if (
          ('function' === typeof t && ((n = t), (t = null)),
          T((t = C({}, j.defaults, t || {}))),
          n)
        ) {
          const i = t.highlight
          let o
          try {
            o = M.lex(e, t)
          } catch (r) {
            return n(r)
          }
          const a = function (e) {
            let a
            if (!e)
              try {
                t.walkTokens && j.walkTokens(o, t.walkTokens),
                  (a = $.parse(o, t))
              } catch (r) {
                e = r
              }
            return (t.highlight = i), e ? n(e) : n(null, a)
          }
          if (!i || i.length < 3) return a()
          if ((delete t.highlight, !o.length)) return a()
          let l = 0
          return (
            j.walkTokens(o, function (e) {
              'code' === e.type &&
                (l++,
                setTimeout(() => {
                  i(e.text, e.lang, function (t, n) {
                    if (t) return a(t)
                    null != n &&
                      n !== e.text &&
                      ((e.text = n), (e.escaped = !0)),
                      l--,
                      0 === l && a()
                  })
                }, 0))
            }),
            void (0 === l && a())
          )
        }
        try {
          const n = M.lex(e, t)
          return t.walkTokens && j.walkTokens(n, t.walkTokens), $.parse(n, t)
        } catch (r) {
          if (
            ((r.message +=
              '\nPlease report this to https://github.com/markedjs/marked.'),
            t.silent)
          )
            return (
              '<p>An error occurred:</p><pre>' +
              d(r.message + '', !0) +
              '</pre>'
            )
          throw r
        }
      }
      ;(j.options = j.setOptions =
        function (e) {
          var t
          return C(j.defaults, e), (t = j.defaults), (i = t), j
        }),
        (j.getDefaults = r),
        (j.defaults = i),
        (j.use = function (...e) {
          const t = C({}, ...e),
            n = j.defaults.extensions || { renderers: {}, childTokens: {} }
          let r
          e.forEach((e) => {
            if (
              (e.extensions &&
                ((r = !0),
                e.extensions.forEach((e) => {
                  if (!e.name) throw new Error('extension name required')
                  if (e.renderer) {
                    const t = n.renderers ? n.renderers[e.name] : null
                    n.renderers[e.name] = t
                      ? function (...n) {
                          let r = e.renderer.apply(this, n)
                          return !1 === r && (r = t.apply(this, n)), r
                        }
                      : e.renderer
                  }
                  if (e.tokenizer) {
                    if (
                      !e.level ||
                      ('block' !== e.level && 'inline' !== e.level)
                    )
                      throw new Error(
                        "extension level must be 'block' or 'inline'"
                      )
                    n[e.level]
                      ? n[e.level].unshift(e.tokenizer)
                      : (n[e.level] = [e.tokenizer]),
                      e.start &&
                        ('block' === e.level
                          ? n.startBlock
                            ? n.startBlock.push(e.start)
                            : (n.startBlock = [e.start])
                          : 'inline' === e.level &&
                            (n.startInline
                              ? n.startInline.push(e.start)
                              : (n.startInline = [e.start])))
                  }
                  e.childTokens && (n.childTokens[e.name] = e.childTokens)
                })),
              e.renderer)
            ) {
              const n = j.defaults.renderer || new H()
              for (const t in e.renderer) {
                const r = n[t]
                n[t] = (...i) => {
                  let o = e.renderer[t].apply(n, i)
                  return !1 === o && (o = r.apply(n, i)), o
                }
              }
              t.renderer = n
            }
            if (e.tokenizer) {
              const n = j.defaults.tokenizer || new N()
              for (const t in e.tokenizer) {
                const r = n[t]
                n[t] = (...i) => {
                  let o = e.tokenizer[t].apply(n, i)
                  return !1 === o && (o = r.apply(n, i)), o
                }
              }
              t.tokenizer = n
            }
            if (e.walkTokens) {
              const n = j.defaults.walkTokens
              t.walkTokens = function (t) {
                e.walkTokens.call(this, t), n && n.call(this, t)
              }
            }
            r && (t.extensions = n), j.setOptions(t)
          })
        }),
        (j.walkTokens = function (e, t) {
          for (const n of e)
            switch ((t.call(j, n), n.type)) {
              case 'table':
                for (const e of n.header) j.walkTokens(e.tokens, t)
                for (const e of n.rows)
                  for (const n of e) j.walkTokens(n.tokens, t)
                break
              case 'list':
                j.walkTokens(n.items, t)
                break
              default:
                j.defaults.extensions &&
                j.defaults.extensions.childTokens &&
                j.defaults.extensions.childTokens[n.type]
                  ? j.defaults.extensions.childTokens[n.type].forEach(function (
                      e
                    ) {
                      j.walkTokens(n[e], t)
                    })
                  : n.tokens && j.walkTokens(n.tokens, t)
            }
        }),
        (j.parseInline = function (e, t) {
          if ('undefined' === typeof e || null === e)
            throw new Error(
              'marked.parseInline(): input parameter is undefined or null'
            )
          if ('string' !== typeof e)
            throw new Error(
              'marked.parseInline(): input parameter is of type ' +
                Object.prototype.toString.call(e) +
                ', string expected'
            )
          T((t = C({}, j.defaults, t || {})))
          try {
            const n = M.lexInline(e, t)
            return (
              t.walkTokens && j.walkTokens(n, t.walkTokens), $.parseInline(n, t)
            )
          } catch (n) {
            if (
              ((n.message +=
                '\nPlease report this to https://github.com/markedjs/marked.'),
              t.silent)
            )
              return (
                '<p>An error occurred:</p><pre>' +
                d(n.message + '', !0) +
                '</pre>'
              )
            throw n
          }
        }),
        (j.Parser = $),
        (j.parser = $.parse),
        (j.Renderer = H),
        (j.TextRenderer = P),
        (j.Lexer = M),
        (j.lexer = M.lex),
        (j.Tokenizer = N),
        (j.Slugger = D),
        (j.parse = j)
      j.options,
        j.setOptions,
        j.use,
        j.walkTokens,
        j.parseInline,
        $.parse,
        M.lex
    },
  },
])
