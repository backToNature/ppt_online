// window.UserVoice = {
//     events: window.UserVoice || [],
//     push: function(x) {
//         window.UserVoice.events.push(x)
//     },
//     account: {
//         "campaign": "footer_poweredby",
//         "name": "Slides",
//         "white_labeled": false,
//         "subdomain_ssl_host": "slides.uservoice.com",
//         "subdomain_site_host": "help.slides.com",
//         "subdomain_key": "slides",
//         "subdomain_id": 147810,
//         "client_key": "f7sH7NavrjjvuGxByaw",
//         "client_options": null,
//         "smartvote_autoprompt_enabled": true,
//         "satisfaction_autoprompt_enabled": true,
//         "messages": {
//             "Loading": "Loading"
//         }
//     },
//     client_widgets: {},
//     manifest: {
//         "tab-left-dark": "/pkg/clients/widget2/tab-left-dark-e89fceb89af232658b40362993385936.png",
//         "tab-left-dark-no-bullhorn": "/pkg/clients/widget2/tab-left-dark-no-bullhorn-b0b7f5027c63700387f010da3385d278.png",
//         "tab-left-light": "/pkg/clients/widget2/tab-left-light-e79b3d5a5bcb9a8cb3aaba4e7c08853e.png",
//         "tab-left-light-no-bullhorn": "/pkg/clients/widget2/tab-left-light-no-bullhorn-978e55e46fb61a295c914e2b6f3d4bfe.png",
//         "tab-right-dark": "/pkg/clients/widget2/tab-right-dark-da2413549ce324fc421ae86a0e5881ee.png",
//         "tab-right-dark-no-bullhorn": "/pkg/clients/widget2/tab-right-dark-no-bullhorn-0132cc76ef9e62ce31bb84088e8c0eb0.png",
//         "tab-right-light": "/pkg/clients/widget2/tab-right-light-087cbff98d6cd97b87d4a73c4232a642.png",
//         "tab-right-light-no-bullhorn": "/pkg/clients/widget2/tab-right-light-no-bullhorn-f246ba6076ce0e74cbffa93c1328fdc4.png",
//         "tab-horizontal-dark": "/pkg/clients/widget2/tab-horizontal-dark-3efc2033e3bb06b1eefaa3431d3d47d8.png",
//         "tab-horizontal-dark-no-bullhorn": "/pkg/clients/widget2/tab-horizontal-dark-no-bullhorn-7cdf414f3f944a78dd7439dced926fd2.png",
//         "tab-horizontal-light": "/pkg/clients/widget2/tab-horizontal-light-75fca6f195066c2da966daf9e706b949.png",
//         "tab-horizontal-light-no-bullhorn": "/pkg/clients/widget2/tab-horizontal-light-no-bullhorn-e052ef0d62993c4d8f7179a5fbb4f088.png",
//         "close": "/pkg/clients/widget2/close-cd8571377d9499a984190ca453714b3b.png",
//         "pb": "/pkg/clients/widget2/powered_by-0684ee8d751bce50921b2807087eaf1c.png",
//         "screenshot": "/pkg/clients/omnibox/screenshot-e8965e1bf01616360e480f88faa08a1f.js"
//     }
// };
// "undefined" != typeof UserVoice && UserVoice.showLightbox || !
//     function(t, e, o) {
//         function i(t) {
//             O("Error: " + t + " See https://www.uservoice.com/o/javascript-sdk for more help.")
//         }

//         function s(t) {
//             for (var e = [], o = 0; o < t.length; o++) e.push(t[o]);
//             return e
//         }

//         function n(t, e, o, i, s) {
//             var n = t - e / 2;
//             return o > n - s && (n = o + s),
//                 n + e + s > i && (n = i - e - s),
//                 n
//         }

//         function r(e) {
//             if ("getComputedStyle" in t) {
//                 for (var i = ["transitionDuration", "MozTransitionDuration", "WebkitTransitionDuration", "OTransitionDuration", "msTransitionDuration"], s = 0, n = 0, r = i.length; r > n; n++) {
//                     var a = i[n],
//                         l = A.getComputedStyle(e)[a] || e.style[a];
//                     if (l) {
//                         s = 1e3 * parseFloat(l);
//                         break
//                     }
//                 }
//                 if (0 !== s) {
//                     var p = A.data(e, "transition-timer"),
//                         d = A.data(e, "transition-timeout-at"),
//                         c = +new Date + s;
//                     A.addClass(e, "uv-is-transitioning"),
//                         e.offsetWidth, (p === o || c > d) && (clearTimeout(p), A.data(e, "transition-timer", setTimeout(function() {
//                                 A.removeClass(e, "uv-is-transitioning"),
//                                     e.offsetWidth
//                             },
//                             s)), A.data(e, "transition-timeout-at", c))
//                 }
//             }
//         }

//         function a(t) {
//             meta = e.createElement("meta"),
//                 meta.setAttribute("name", "viewport"),
//                 meta.setAttribute("content", t),
//                 e.head.appendChild(meta)
//         }

//         function l() {
//             for (var t, o = e.getElementsByTagName("meta"), i = 0; i < o.length; i++)
//                 if (/viewport/i.test(o[i].getAttribute("name"))) {
//                     t = o[i];
//                     break
//                 }
//             return t
//         }

//         function p() {
//             if (!Y) {
//                 var t = l(),
//                     e = /user-scalable\s*=\s*(0|1|no|yes)/;
//                 if (t) {
//                     I = t;
//                     var o = t.getAttribute("content");
//                     t.parentNode.removeChild(t),
//                         e.test(o) ? a(o.replace(e, "user-scalable=0")) : a(o + "; user-scalable=0")
//                 } else a("user-scalable=0");
//                 Y = !0
//             }
//         }

//         function d() {
//             if (Y) {
//                 var t = l();
//                 t.parentNode.removeChild(t),
//                     I ? e.head.appendChild(I) : a("user-scalable=1"),
//                     Y = !1
//             }
//         }

//         function c(t, e) {
//             return t.replace(/\#\{([^{}]*)\}/g,
//                 function(t, o) {
//                     var i = e[o];
//                     return "string" == typeof i || "number" == typeof i ? i : t
//                 })
//         }

//         function h(t) {
//             var o = e.createElement("div");
//             return o.innerHTML = t,
//                 e.body.insertBefore(o.firstChild, e.body.firstChild),
//                 e.body.firstChild
//         }

//         function u(t) {
//             return t.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
//         }

//         function g(t, e) {
//             e || (e = function(t) {
//                 return t
//             });
//             var o = [];
//             for (var i in t)
//                 if (t.hasOwnProperty(i)) {
//                     var s = e(i) + "=" + e(t[i]);
//                     o.push(s)
//                 }
//             return o.join("&")
//         }

//         function m(t) {
//             for (var e = Array.prototype.slice.call(arguments, 1), o = e.length, i = 0; o > i; i++)
//                 for (var s in e[i]) e[i].hasOwnProperty(s) && ("object" == typeof t[s] && "object" == typeof e[i][s] ? m(t[s], e[i][s]) : t[s] = e[i][s]);
//             return t
//         }

//         function b(t, o) {
//             var i = e.createElement("style");
//             i.type = "text/css",
//                 i.media = o || "screen",
//                 i.styleSheet ? i.styleSheet.cssText = t : i.appendChild(e.createTextNode(t)),
//                 e.getElementsByTagName("head")[0].appendChild(i)
//         }

//         function f() {
//             X || (b("#uvTab,.uv-tray,.uv-icon,.uv-popover,.uv-bubble{display:none!important}", "print"), X = !0)
//         }

//         function v() {
//             j || (b(".uv-icon:hover{opacity:1}"), j = !0)
//         }

//         function x() {
//             return e.getElementsByTagName("html")[0]
//         }

//         function y() {
//             var o = e.documentElement,
//                 i = o && o.clientWidth || e.body.clientWidth,
//                 s = t.innerHeight || o && o.clientHeight || e.body.clientHeight;
//             return {
//                 width: i,
//                 height: s
//             }
//         }

//         function w(t) {
//             return ((new Date).getTime() - t) / 1e3 / 60 / 60 / 24
//         }

//         function _(t) {
//             return t && (t.tab_color !== o && (t.trigger_background_color = t.tab_color), t.tab_position !== o && (t.trigger_position = t.tab_position)),
//                 t || {}
//         }

//         function k(t, e) {
//             return e && ("support" === e.mode ? e.post_suggestion_enabled = !1 : "feedback" === e.mode && (e.contact_enabled = !1), delete e.mode, e.default_mode !== o && (e.classic_default_mode = e.default_mode), _(e)),
//                 T({
//                         mode: t
//                     },
//                     e || {})
//         }

//         function C() {
//             C.fired || (C.fired = !0, Q.tracker.trackExternalView(), Q.tracker.ready(), Q.scan())
//         }
//         var S = {};
//         S.sanitizeValue = function(t, e) {
//                 var o;
//                 switch (e) {
//                     case "boolean":
//                         o = "true" === t || t === !0 ? !0 : !1;
//                         break;
//                     case "timestamp":
//                         "[object Date]" === Object.prototype.toString.call(t) ? o = t.getTime() : (o = parseInt(t, 10), isNaN(o) && (o = 0), 44308744825 > o && (o = 1e3 * o));
//                         break;
//                     case "int":
//                         o = parseInt(t, 10),
//                             isNaN(o) && (o = 0);
//                         break;
//                     case "float":
//                         o = parseFloat(t),
//                             isNaN(o) && (o = 0);
//                         break;
//                     case "string":
//                         o = t.toString();
//                         break;
//                     default:
//                         o = t
//                 }
//                 return o
//             },
//             S.uTF8Encode = function(t) {
//                 t = t.replace(/\x0d\x0a/g, "\n");
//                 for (var e = "",
//                         o = 0; o < t.length; o++) {
//                     var i = t.charCodeAt(o);
//                     128 > i ? e += String.fromCharCode(i) : i > 127 && 2048 > i ? (e += String.fromCharCode(192 | i >> 6), e += String.fromCharCode(128 | 63 & i)) : (e += String.fromCharCode(224 | i >> 12), e += String.fromCharCode(128 | 63 & i >> 6), e += String.fromCharCode(128 | 63 & i))
//                 }
//                 return e
//             },
//             S.base64Encode = function(t) {
//                 var e, o, i, s, n, r, a, l = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
//                     p = "",
//                     d = 0;
//                 for (t = S.uTF8Encode(t); d < t.length;) e = t.charCodeAt(d++),
//                     o = t.charCodeAt(d++),
//                     i = t.charCodeAt(d++),
//                     s = e >> 2,
//                     n = (3 & e) << 4 | o >> 4,
//                     r = (15 & o) << 2 | i >> 6,
//                     a = 63 & i,
//                     isNaN(o) ? r = a = 64 : isNaN(i) && (a = 64),
//                     p = p + l.charAt(s) + l.charAt(n) + l.charAt(r) + l.charAt(a);
//                 return p
//             },
//             S.extend = function(t) {
//                 for (var e = Array.prototype.slice.call(arguments, 1), o = e.length, i = 0; o > i; i++)
//                     for (var s in e[i]) e[i].hasOwnProperty(s) && (t[s] = e[i][s]);
//                 return t
//             },
//             S.values = function(t) {
//                 var e, o = [];
//                 if (null == t) return o;
//                 for (e in t) t.hasOwnProperty(e) && o.push(t[e]);
//                 return o
//             },
//             S.setCookie = function(t, o, i) {
//                 i = S.extend({
//                         path: "/",
//                         domain: "",
//                         expires: new Date
//                     },
//                     i || {});
//                 var s = [t, "=", encodeURIComponent(o), "; path=", i.path, "; domain=", i.domain];
//                 return i.expires && (i.expires.setFullYear(i.expires.getFullYear() + 1), s.push("; expires="), s.push(i.expires.toUTCString())),
//                     e.cookie = s.join(""),
//                     o
//             },
//             S.getCookie = function(t) {
//                 for (var o, i = (e.cookie || "").split(";"), s = i.length, n = 0; s > n; n++)
//                     if (o = S.trim(i[n]), o.substr(0, t.length + 1) === t + "=") return decodeURIComponent(o.substr(t.length + 1))
//             },
//             S.trim = function(t) {
//                 var e = String.prototype.trim;
//                 return e ? e.apply(t) : t.replace(/^\s+|\s+$/g, "")
//             },
//             S.isSpider = function() {
//                 return /(google web preview|baiduspider|yandexbot)/i.test(t.navigator.userAgent)
//             },
//             S.log = function() {
//                 "undefined" != typeof console && "undefined" != typeof console.log && "undefined" != typeof console.log.apply && console.log.apply(console, arguments)
//             },
//             function() {
//                 function e(t) {
//                     return 10 > t ? "0" + t : t
//                 }

//                 function o(t) {
//                     return a.lastIndex = 0,
//                         a.test(t) ? '"' + t.replace(a,
//                             function(t) {
//                                 var e = l[t];
//                                 return "string" == typeof e ? e : "\\u" + ("0000" + t.charCodeAt(0).toString(16)).slice(-4)
//                             }) + '"' : '"' + t + '"'
//                 }

//                 function i(t, e) {
//                     var a, l, p, d, c, h = s,
//                         u = e[t];
//                     switch (u && "object" == typeof u && "function" == typeof u.toJSON && (u = u.toJSON(t)), "function" == typeof r && (u = r.call(e, t, u)), typeof u) {
//                         case "string":
//                             return o(u);
//                         case "number":
//                             return isFinite(u) ? String(u) : "null";
//                         case "boolean":
//                         case "null":
//                             return String(u);
//                         case "object":
//                             if (!u) return "null";
//                             if (s += n, c = [], "[object Array]" === Object.prototype.toString.apply(u)) {
//                                 for (d = u.length, a = 0; d > a; a += 1) c[a] = i(a, u) || "null";
//                                 return p = 0 === c.length ? "[]" : s ? "[\n" + s + c.join(",\n" + s) + "\n" + h + "]" : "[" + c.join(",") + "]",
//                                     s = h,
//                                     p
//                             }
//                             if (r && "object" == typeof r)
//                                 for (d = r.length, a = 0; d > a; a += 1) "string" == typeof r[a] && (l = r[a], p = i(l, u), p && c.push(o(l) + (s ? ": " : ":") + p));
//                             else
//                                 for (l in u) Object.prototype.hasOwnProperty.call(u, l) && (p = i(l, u), p && c.push(o(l) + (s ? ": " : ":") + p));
//                             return p = 0 === c.length ? "{}" : s ? "{\n" + s + c.join(",\n" + s) + "\n" + h + "}" : "{" + c.join(",") + "}",
//                                 s = h,
//                                 p
//                     }
//                 }
//                 "object" != typeof JSON && (t.JSON = {}),
//                     "function" != typeof Date.prototype.toJSON && (Date.prototype.toJSON = function() {
//                             return isFinite(this.valueOf()) ? this.getUTCFullYear() + "-" + e(this.getUTCMonth() + 1) + "-" + e(this.getUTCDate()) + "T" + e(this.getUTCHours()) + ":" + e(this.getUTCMinutes()) + ":" + e(this.getUTCSeconds()) + "Z" : null
//                         },
//                         String.prototype.toJSON = Number.prototype.toJSON = Boolean.prototype.toJSON = function() {
//                             return this.valueOf()
//                         });
//                 var s, n, r, a = /[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
//                     l = {
//                         "\b": "\\b",
//                         "	": "\\t",
//                         "\n": "\\n",
//                         "\f": "\\f",
//                         "\r": "\\r",
//                         '"': '\\"',
//                         "\\": "\\\\"
//                     };
//                 "function" != typeof JSON.stringify && (JSON.stringify = function(t, e, o) {
//                     var a;
//                     if (s = "", n = "", "number" == typeof o)
//                         for (a = 0; o > a; a += 1) n += " ";
//                     else "string" == typeof o && (n = o);
//                     if (r = e, e && "function" != typeof e && ("object" != typeof e || "number" != typeof e.length)) throw new Error("JSON.stringify");
//                     return i("", {
//                         "": t
//                     })
//                 })
//             }();
//         var U = function(t, o) {
//                 function i(e, o) {
//                     var s = this;
//                     this.subdomain = e,
//                         this.config = S.extend({},
//                             i.default_config, o || {}),
//                         this.babaId = a++,
//                         this.sessionCallbackName = "__uvSessionData" + this.babaId,
//                         t[this.sessionCallbackName] = function(t) {
//                             s.sync(t)
//                         },
//                         this.tracks = [],
//                         this.identity = null,
//                         this.session = null,
//                         this.uvts = null,
//                         this.isReady = !1,
//                         this.needsIdentityFlush = !1,
//                         this.needsSessionFlush = !1,
//                         this.firedUvts = !1,
//                         this.firedSession = !1,
//                         this.syncedSession = !0,
//                         this.cookieable = null,
//                         this.initFromCookie(),
//                         t.__babas.push(this)
//                 }

//                 function s(t) {
//                     this.props = {}, !t === Object(t) && (t = {}),
//                         this.set(S.extend({},
//                             t, {
//                                 o: (new Date).getTimezoneOffset()
//                             }))
//                 }

//                 function n() {
//                     this.store = new r,
//                         this.recurrent = this.store.get("r"),
//                         this.store.set("r", !0)
//                 }

//                 function r() {
//                     var e = "x";
//                     this.storage = null;
//                     try {
//                         this.storage = "sessionStorage" in t && t.sessionStorage,
//                             this.set(e, e),
//                             this.get(e) !== e ? this.storage = null : this.remove(e)
//                     } catch (o) {
//                         this.storage = null
//                     }
//                 }
//                 var a = 0;
//                 t.__babas = t.__babas || [],
//                     i.prototype.initFromCookie = function() {
//                         var t = S.getCookie(this.config.cookie_name);
//                         this.log("Babayaga#initFromCookie: %s", t),
//                             t && this.setUvts(t)
//                     },
//                     i.prototype.identify = function(t) {
//                         this.log("Babayaga#identify: %O", t),
//                             this.identity ? this.identity.set(t) : this.identity = new s(t),
//                             this.needsIdentityFlush = !0,
//                             this.flush()
//                     },
//                     i.prototype.getIdentity = function() {
//                         return this.identity ? this.identity.toJSON() : void 0
//                     },
//                     i.prototype.syncSession = function() {
//                         this.syncedSession = !1,
//                             this.identify({})
//                     },
//                     i.prototype.updateSession = function(t) {
//                         this.log("Babayaga#updateSession: %O", t),
//                             this.needsSessionFlush = S.extend({},
//                                 this.needsSessionFlush || {},
//                                 this.session.set(t)),
//                             this.flush()
//                     },
//                     i.prototype.getSession = function(t) {
//                         return this.session.get(t)
//                     },
//                     i.prototype.dumpSession = function() {
//                         return this.session.toJSON()
//                     },
//                     i.prototype.sync = function(t) {
//                         this.log("Babayaga#sync: %O", t),
//                             t === Object(t) && (this.session.set(t), t.uvts && this.setUvts(t.uvts), this.syncCreatedAt(), this.fireSession())
//                     },
//                     i.prototype.syncCreatedAt = function() {
//                         var t = this.identity && this.identity.get("created_at");
//                         t && (this.log("Babayaga#syncCreatedAt: %O", t), this.session.set({
//                             created_at: t
//                         }))
//                     },
//                     i.prototype.fireSession = function() {
//                         this.session.isEnabled() && (this.firedSession ? this.syncedSession || ("function" == typeof this.config.onSync && this.config.onSync(), this.syncedSession = !0) : ("function" == typeof this.config.onSession && this.config.onSession(), this.firedSession = !0))
//                     },
//                     i.prototype.setUvts = function(t) {
//                         this.uvts = t,
//                             S.setCookie(this.config.cookie_name, t, {
//                                 domain: this.cookieDomain()
//                             }),
//                             this.firedUvts || ("function" == typeof this.config.onUvts && this.config.onUvts(t), this.firedUvts = !0)
//                     },
//                     i.prototype.setConfig = function(t) {
//                         this.config = S.extend(this.config, t)
//                     },
//                     i.prototype.setChannel = function(t) {
//                         this.setConfig({
//                             channel: t
//                         })
//                     },
//                     i.prototype.track = function(t, e, o) {
//                         var i = {
//                             evt: t,
//                             props: e
//                         };
//                         o && (i.channel = o),
//                             this.tracks.push(i),
//                             this.flush()
//                     },
//                     i.prototype.trackExternalView = function() {
//                         this.log("Babayaga#trackExternalView: %s", this.config.channel),
//                             "external" === this.config.channel && this.track("view_page", {
//                                 u: e.location.toString(),
//                                 r: e.referrer
//                             })
//                     },
//                     i.prototype.flush = function() {
//                         if (this.isReady && this.config.enabled) {
//                             var t = 0,
//                                 e = this.tracks.length;
//                             if (this.log("Babayaga#flush: %s", e), this.uvts || this.shouldTrack())
//                                 for ((0 === e && this.needsIdentityFlush || this.needsSessionFlush) && this.sendTrack({
//                                         evt: "identify"
//                                     }); e > t; t += 1) this.sendTrack(this.tracks.shift())
//                         }
//                     },
//                     i.prototype.sendTrack = function(t) {
//                         var o = [this.config.domain, "/t/", this.subdomain, "/", l[t.channel || this.config.channel] || "_", "/", p[t.evt] || "_"],
//                             i = {},
//                             s = !this.syncedSession || !this.session.recurrent && !this.firedSession;
//                         this.uvts && (o.push("/"), o.push(this.uvts)),
//                             o.push("/track.js?_=" + (new Date).getTime()),
//                             o.push("&s=" + (s ? "0" : "1")),
//                             o = o.join(""),
//                             this.needsIdentityFlush && (i.u = this.identity.toJSON(), this.needsIdentityFlush = !1),
//                             this.needsSessionFlush === Object(this.needsSessionFlush) && (i.u = S.extend({},
//                                 i.u || {},
//                                 this.needsSessionFlush), this.needsSessionFlush = !1),
//                             t.props && S.values(t.props).length > 0 && (i.e = t.props),
//                             this.log("Babayaga#sendTrack: %s, %O", o, i),
//                             i = S.values(i).length > 0 ? encodeURIComponent(S.base64Encode(JSON.stringify(i))) : null;
//                         var n, r, a;
//                         a = ["&c=", this.sessionCallbackName],
//                             i && (a.push("&d="), a.push(i)),
//                             n = e.getElementsByTagName("script")[0],
//                             r = e.createElement("script"),
//                             r.type = "application/javascript",
//                             r.async = !0,
//                             r.defer = !0,
//                             r.src = o + a.join(""),
//                             n.parentNode.insertBefore(r, n)
//                     },
//                     i.prototype.ready = function() {
//                         this.log("Babayaga#ready: %s", this.isReady),
//                             this.isReady || (this.isReady = !0, this.session = new n, this.flush(), this.afterReady())
//                     },
//                     i.prototype.afterReady = function() {},
//                     i.prototype.shouldTrack = function() {
//                         return !S.isSpider() && this.haveCookies()
//                     },
//                     i.prototype.haveCookies = function() {
//                         return null === this.cookieable && (S.setCookie("__uvt", "1", {
//                                 domain: this.cookieDomain()
//                             }), this.cookieable = !!S.getCookie("__uvt"), S.setCookie("__uvt", "", {
//                                 domain: this.cookieDomain()
//                             })),
//                             this.log("Babayaga#haveCookies: %s", this.cookieable),
//                             this.cookieable
//                     },
//                     i.prototype.log = function() {
//                         this.config.logging_enabled && S.log.apply(null, arguments)
//                     },
//                     i.prototype.cookieDomain = function(e) {
//                         return e || t.location.hostname
//                     },
//                     s.prototype.set = function(t) {
//                         var e, o;
//                         if (!t === Object(t) && (t = {}), t.account) {
//                             e = t.account,
//                                 delete t.account;
//                             for (o in e) e.hasOwnProperty(o) && (t["account_" + o] = e[o])
//                         }
//                         for (o in t) s.keys.hasOwnProperty(o) && (this.props[o] = S.sanitizeValue(t[o], s.keys[o]));
//                         return this.props
//                     },
//                     s.prototype.get = function(t) {
//                         return this.props[t]
//                     },
//                     s.prototype.toJSON = function() {
//                         return this.props
//                     },
//                     s.keys = {
//                         o: "int",
//                         name: "string",
//                         email: "string",
//                         id: "string",
//                         type: "string",
//                         created_at: "timestamp",
//                         account_name: "string",
//                         account_id: "string",
//                         account_monthly_rate: "float",
//                         account_ltv: "float",
//                         account_plan: "string",
//                         account_created_at: "timestamp"
//                     },
//                     n.prototype.set = function(t) {
//                         var e, o = {};
//                         for (e in t) n.keys.hasOwnProperty(e) && (o[e] = S.sanitizeValue(t[e], n.keys[e]));
//                         for (e in o) o.hasOwnProperty(e) && this.store.set(e, o[e]);
//                         return o
//                     },
//                     n.prototype.get = function(t) {
//                         return this.store.get(t)
//                     },
//                     n.prototype.toJSON = function() {
//                         var t, e = {};
//                         for (var i in n.keys) n.keys.hasOwnProperty(i) && (t = this.get(i), t !== o && (e[i] = t));
//                         return e
//                     },
//                     n.prototype.isEnabled = function() {
//                         return this.store.isEnabled()
//                     },
//                     n.keys = {
//                         created_at: "timestamp",
//                         last_sat_at: "timestamp",
//                         last_smartvote_at: "timestamp",
//                         dismissed_smartvote_at: "timestamp",
//                         dismissed_sat_at: "timestamp",
//                         autoprompted_satisfaction_at: "timestamp",
//                         autoprompted_smartvote_at: "timestamp",
//                         active_days: "int",
//                         autoprompt_disabled: "boolean"
//                     },
//                     r.prototype.isEnabled = function() {
//                         return !!this.storage
//                     },
//                     r.prototype.get = function(t) {
//                         if (this.storage) {
//                             var e, o = this.storage.getItem(this.makeKey(t));
//                             try {
//                                 e = JSON.parse(o)
//                             } catch (i) {}
//                             return e
//                         }
//                     },
//                     r.prototype.set = function(t, e) {
//                         this.storage && this.storage.setItem(this.makeKey(t), JSON.stringify(e))
//                     },
//                     r.prototype.remove = function(t) {
//                         this.storage && this.storage.removeItem(this.makeKey(t))
//                     },
//                     r.prototype.makeKey = function(t) {
//                         return r.namespace + t
//                     },
//                     r.namespace = "__uv_";
//                 var l = {
//                         external: "x",
//                         classic_widget: "w",
//                         smartvote_widget: "e",
//                         instant_answers_widget: "o",
//                         satisfaction_widget: "t",
//                         site2: "s",
//                         admin: "a"
//                     },
//                     p = {
//                         view_page: "p",
//                         view_forum: "m",
//                         view_topic: "c",
//                         view_kb: "k",
//                         view_channel: "o",
//                         view_idea: "i",
//                         view_article: "f",
//                         view_comparison: "a",
//                         authenticate: "u",
//                         search_ideas: "s",
//                         search_articles: "r",
//                         vote_idea: "v",
//                         vote_article: "z",
//                         submit_ticket: "t",
//                         submit_idea: "d",
//                         subscribe_idea: "b",
//                         rate_satisfaction: "e",
//                         identify: "y",
//                         comment_idea: "h",
//                         dismiss: "w",
//                         autoprompt: "x",
//                         pick_idea: "1",
//                         view_tweet_button: "2",
//                         clicked_tweet_button: "3",
//                         posted_tweet: "4"
//                     };
//                 return i.default_config = {
//                         cookie_name: "uvts",
//                         domain: "https://by.uservoice.com",
//                         channel: "external",
//                         enabled: !0,
//                         logging_enabled: !1
//                     },
//                     i
//             }(this),
//             z = S.base64Encode,
//             T = S.extend,
//             O = (S.values, S.setCookie, S.getCookie, S.lpad, S.trim, S.log),
//             E = ".uv-icon{-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:inline-block;cursor:pointer;position:relative;-webkit-transition:all 300ms;-moz-transition:all 300ms;-o-transition:all 300ms;transition:all 300ms;width:39px;height:39px;position:fixed;z-index:100002;opacity:0.8;-webkit-transition:opacity 100ms;-moz-transition:opacity 100ms;-o-transition:opacity 100ms;transition:opacity 100ms}.uv-icon.uv-bottom-right{bottom:10px;right:12px}.uv-icon.uv-top-right{top:10px;right:12px}.uv-icon.uv-bottom-left{bottom:10px;left:12px}.uv-icon.uv-top-left{top:10px;left:12px}.uv-icon.uv-is-selected{opacity:1}.uv-icon svg{width:39px;height:39px}.uv-popover{font-family:sans-serif;font-weight:100;font-size:13px;color:black;position:fixed;z-index:100001}.uv-popover-content{-webkit-border-radius:5px;-moz-border-radius:5px;-ms-border-radius:5px;-o-border-radius:5px;border-radius:5px;background:white;position:relative;width:325px;height:325px;-webkit-transition:background 200ms;-moz-transition:background 200ms;-o-transition:background 200ms;transition:background 200ms}.uv-bottom .uv-popover-content{-webkit-box-shadow:rgba(0,0,0,0.3) 0 -10px 60px,rgba(0,0,0,0.1) 0 0 20px;-moz-box-shadow:rgba(0,0,0,0.3) 0 -10px 60px,rgba(0,0,0,0.1) 0 0 20px;box-shadow:rgba(0,0,0,0.3) 0 -10px 60px,rgba(0,0,0,0.1) 0 0 20px}.uv-top .uv-popover-content{-webkit-box-shadow:rgba(0,0,0,0.3) 0 10px 60px,rgba(0,0,0,0.1) 0 0 20px;-moz-box-shadow:rgba(0,0,0,0.3) 0 10px 60px,rgba(0,0,0,0.1) 0 0 20px;box-shadow:rgba(0,0,0,0.3) 0 10px 60px,rgba(0,0,0,0.1) 0 0 20px}.uv-left .uv-popover-content{-webkit-box-shadow:rgba(0,0,0,0.3) 10px 0 60px,rgba(0,0,0,0.1) 0 0 20px;-moz-box-shadow:rgba(0,0,0,0.3) 10px 0 60px,rgba(0,0,0,0.1) 0 0 20px;box-shadow:rgba(0,0,0,0.3) 10px 0 60px,rgba(0,0,0,0.1) 0 0 20px}.uv-right .uv-popover-content{-webkit-box-shadow:rgba(0,0,0,0.3) -10px 0 60px,rgba(0,0,0,0.1) 0 0 20px;-moz-box-shadow:rgba(0,0,0,0.3) -10px 0 60px,rgba(0,0,0,0.1) 0 0 20px;box-shadow:rgba(0,0,0,0.3) -10px 0 60px,rgba(0,0,0,0.1) 0 0 20px}.uv-ie8 .uv-popover-content{position:relative}.uv-ie8 .uv-popover-content .uv-popover-content-shadow{display:block;background:black;content:'';position:absolute;left:-15px;top:-15px;width:100%;height:100%;filter:progid:DXImageTransform.Microsoft.Blur(PixelRadius=15,MakeShadow=true,ShadowOpacity=0.30);z-index:-1}.uv-popover-tail{border:9px solid transparent;width:0;z-index:10;position:absolute;-webkit-transition:border-top-color 200ms;-moz-transition:border-top-color 200ms;-o-transition:border-top-color 200ms;transition:border-top-color 200ms}.uv-top .uv-popover-tail{bottom:-20px;border-top:11px solid white}.uv-bottom .uv-popover-tail{top:-20px;border-bottom:11px solid white}.uv-left .uv-popover-tail{right:-20px;border-left:11px solid white}.uv-right .uv-popover-tail{left:-20px;border-right:11px solid white}.uv-popover-loading{background:white;-webkit-border-radius:5px;-moz-border-radius:5px;-ms-border-radius:5px;-o-border-radius:5px;border-radius:5px;position:absolute;width:100%;height:100%;left:0;top:0}.uv-popover-loading-text{position:absolute;top:50%;margin-top:-0.5em;width:100%;text-align:center}.uv-popover-iframe-container{height:100%}.uv-popover-iframe{-webkit-border-radius:5px;-moz-border-radius:5px;-ms-border-radius:5px;-o-border-radius:5px;border-radius:5px;overflow:hidden}.uv-is-hidden{display:none}.uv-is-invisible{display:block !important;visibility:hidden !important}.uv-is-transitioning{display:block !important}.uv-no-transition{-moz-transition:none !important;-webkit-transition:none !important;-o-transition:color 0 ease-in !important;transition:none !important}.uv-fade{opacity:1;-webkit-transition:opacity 200ms ease-out;-moz-transition:opacity 200ms ease-out;-o-transition:opacity 200ms ease-out;transition:opacity 200ms ease-out}.uv-fade.uv-is-hidden{opacity:0}.uv-scale-top,.uv-scale-top-left,.uv-scale-top-right,.uv-scale-bottom,.uv-scale-bottom-left,.uv-scale-bottom-right,.uv-scale-right,.uv-scale-right-top,.uv-scale-right-bottom,.uv-scale-left,.uv-scale-left-top,.uv-scale-left-bottom,.uv-slide-top,.uv-slide-bottom,.uv-slide-left,.uv-slide-right{opacity:1;-webkit-transition:all 80ms ease-out;-moz-transition:all 80ms ease-out;-o-transition:all 80ms ease-out;transition:all 80ms ease-out}.uv-scale-top.uv-is-hidden{opacity:0;-webkit-transform:scale(0.8) translateY(-15%);-moz-transform:scale(0.8) translateY(-15%);-ms-transform:scale(0.8) translateY(-15%);-o-transform:scale(0.8) translateY(-15%);transform:scale(0.8) translateY(-15%)}.uv-scale-top-left.uv-is-hidden{opacity:0;-webkit-transform:scale(0.8) translateY(-15%) translateX(-10%);-moz-transform:scale(0.8) translateY(-15%) translateX(-10%);-ms-transform:scale(0.8) translateY(-15%) translateX(-10%);-o-transform:scale(0.8) translateY(-15%) translateX(-10%);transform:scale(0.8) translateY(-15%) translateX(-10%)}.uv-scale-top-right.uv-is-hidden{opacity:0;-webkit-transform:scale(0.8) translateY(-15%) translateX(10%);-moz-transform:scale(0.8) translateY(-15%) translateX(10%);-ms-transform:scale(0.8) translateY(-15%) translateX(10%);-o-transform:scale(0.8) translateY(-15%) translateX(10%);transform:scale(0.8) translateY(-15%) translateX(10%)}.uv-scale-bottom.uv-is-hidden{opacity:0;-webkit-transform:scale(0.8) translateY(15%);-moz-transform:scale(0.8) translateY(15%);-ms-transform:scale(0.8) translateY(15%);-o-transform:scale(0.8) translateY(15%);transform:scale(0.8) translateY(15%)}.uv-scale-bottom-left.uv-is-hidden{opacity:0;-webkit-transform:scale(0.8) translateY(15%) translateX(-10%);-moz-transform:scale(0.8) translateY(15%) translateX(-10%);-ms-transform:scale(0.8) translateY(15%) translateX(-10%);-o-transform:scale(0.8) translateY(15%) translateX(-10%);transform:scale(0.8) translateY(15%) translateX(-10%)}.uv-scale-bottom-right.uv-is-hidden{opacity:0;-webkit-transform:scale(0.8) translateY(15%) translateX(10%);-moz-transform:scale(0.8) translateY(15%) translateX(10%);-ms-transform:scale(0.8) translateY(15%) translateX(10%);-o-transform:scale(0.8) translateY(15%) translateX(10%);transform:scale(0.8) translateY(15%) translateX(10%)}.uv-scale-right.uv-is-hidden{opacity:0;-webkit-transform:scale(0.8) translateX(15%);-moz-transform:scale(0.8) translateX(15%);-ms-transform:scale(0.8) translateX(15%);-o-transform:scale(0.8) translateX(15%);transform:scale(0.8) translateX(15%)}.uv-scale-right-top.uv-is-hidden{opacity:0;-webkit-transform:scale(0.8) translateX(15%) translateY(-10%);-moz-transform:scale(0.8) translateX(15%) translateY(-10%);-ms-transform:scale(0.8) translateX(15%) translateY(-10%);-o-transform:scale(0.8) translateX(15%) translateY(-10%);transform:scale(0.8) translateX(15%) translateY(-10%)}.uv-scale-right-bottom.uv-is-hidden{opacity:0;-webkit-transform:scale(0.8) translateX(15%) translateY(10%);-moz-transform:scale(0.8) translateX(15%) translateY(10%);-ms-transform:scale(0.8) translateX(15%) translateY(10%);-o-transform:scale(0.8) translateX(15%) translateY(10%);transform:scale(0.8) translateX(15%) translateY(10%)}.uv-scale-left.uv-is-hidden{opacity:0;-webkit-transform:scale(0.8) translateX(-15%);-moz-transform:scale(0.8) translateX(-15%);-ms-transform:scale(0.8) translateX(-15%);-o-transform:scale(0.8) translateX(-15%);transform:scale(0.8) translateX(-15%)}.uv-scale-left-top.uv-is-hidden{opacity:0;-webkit-transform:scale(0.8) translateX(-15%) translateY(-10%);-moz-transform:scale(0.8) translateX(-15%) translateY(-10%);-ms-transform:scale(0.8) translateX(-15%) translateY(-10%);-o-transform:scale(0.8) translateX(-15%) translateY(-10%);transform:scale(0.8) translateX(-15%) translateY(-10%)}.uv-scale-left-bottom.uv-is-hidden{opacity:0;-webkit-transform:scale(0.8) translateX(-15%) translateY(10%);-moz-transform:scale(0.8) translateX(-15%) translateY(10%);-ms-transform:scale(0.8) translateX(-15%) translateY(10%);-o-transform:scale(0.8) translateX(-15%) translateY(10%);transform:scale(0.8) translateX(-15%) translateY(10%)}.uv-slide-top.uv-is-hidden{-webkit-transform:translateY(-100%);-moz-transform:translateY(-100%);-ms-transform:translateY(-100%);-o-transform:translateY(-100%);transform:translateY(-100%)}.uv-slide-bottom.uv-is-hidden{-webkit-transform:translateY(100%);-moz-transform:translateY(100%);-ms-transform:translateY(100%);-o-transform:translateY(100%);transform:translateY(100%)}.uv-slide-left.uv-is-hidden{-webkit-transform:translateX(-100%);-moz-transform:translateX(-100%);-ms-transform:translateX(-100%);-o-transform:translateX(-100%);transform:translateX(-100%)}.uv-slide-right.uv-is-hidden{-webkit-transform:translateX(100%);-moz-transform:translateX(100%);-ms-transform:translateX(100%);-o-transform:translateX(100%);transform:translateX(100%)}\n",
//             V = function() {
//                 function e(t) {
//                     this.events = t,
//                         this.timer = null,
//                         this.last_hash = null
//                 }
//                 return e.prototype.listen = function() {
//                         var e = this;
//                         return "postMessage" in t && ("addEventListener" in t ? t.addEventListener("message",
//                                 function(t) {
//                                     e.dispatchEvent.apply(e, [t])
//                                 }, !1) : t.attachEvent("onmessage",
//                                 function(t) {
//                                     e.dispatchEvent.apply(e, [t])
//                                 })),
//                             this
//                     },
//                     e.prototype.dispatchEvent = function(t) {
//                         var e = t.data;
//                         try {
//                             e = JSON.parse(e)
//                         } catch (o) {}
//                         if (e === Object(e))
//                             for (var i in e) e.hasOwnProperty(i) && this.events.hasOwnProperty(i) && this.events[i](e[i], t.source, t.origin);
//                         else this.events.hasOwnProperty(e) && this.events[e]()
//                     },
//                     e.getHash = function() {
//                         var e = t.location.href.match(/#(.*)$/);
//                         return e ? e[1] : ""
//                     },
//                     e
//             }(),
//             F = {};
//         F.match = function(t) {
//                 return t.test(navigator.userAgent)
//             },
//             F.match(/IEMobile/i) ? F.ieMobile = !0 : F.match(/msie (\d+\.\d+);/i) ? (F.ie = !0, F.version = parseInt(RegExp.$1, 10), F["ie" + F.version] = !0, F.ieCompatibility = 7 === F.version && F.match(/Trident/i), F.ieQuirks = e.compatMode && "BackCompat" === e.compatMode) : F.match(/Trident.*rv:(\d+)/i) && (F.ie = !0, F.version = parseInt(RegExp.$1, 10), F["ie" + F.version] = !0),
//             F.touch = "ontouchstart" in t,
//             F.mobile = F.match(/Android.*Mobile|iPhone|IEMobile/i),
//             F.tablet = !F.mobile && F.match(/Android|iOS/i),
//             F.iOS = "ontouchstart" in t && F.match(/like Mac OS X/i);
//         var I, N = function(t) {
//                 return UserVoice.account.messages[t]
//             },
//             A = function() {
//                 var o = function() {
//                         var t, o, i;
//                         if (1 === arguments.length ? (t = e, o = "div", i = arguments[0]) : 2 === arguments.length ? (t = arguments[0], o = "div", i = arguments[1]) : (t = arguments[0], o = arguments[1], i = arguments[2]), t.querySelector) return t.querySelector(o + "." + i);
//                         for (var s = t.getElementsByTagName(o), n = new RegExp("\b" + i + "\b", "gmi"), r = 0; r < s.length; r++)
//                             if (n.test(s[r].className)) return s[r];
//                         return null
//                     },
//                     i = 0;
//                 return o.uniqId = function() {
//                         return i += 1,
//                             "uv-" + i
//                     },
//                     o.identify = function(t) {
//                         var e = t.getAttribute("id");
//                         return e ? e : (e = o.uniqId(), t.setAttribute("id", e), e)
//                     },
//                     o.data = function() {
//                         function t(t, i, s) {
//                             var n = o.identify(t);
//                             return e[n] = e[n] || {},
//                                 arguments.length > 2 ? e[n][i] = s : e[n][i]
//                         }
//                         var e = {};
//                         return t
//                     }(),
//                     o.addClass = function(t, e) {
//                         new RegExp("(^|\\s+)" + e + "(\\s+|$)").test(t.className) || (t.className += (t.className ? " " : "") + e)
//                     },
//                     o.removeClass = function(t, e) {
//                         t.className = t.className.replace(new RegExp("(?:^|\\s+)" + e + "(?:\\s+|$)", "g"), " ")
//                     },
//                     o.hasClass = function(t, e) {
//                         return t.className.indexOf(e) > -1
//                     },
//                     o.dimensions = function(t) {
//                         var e = t.display;
//                         if ("none" !== e && null !== e) return {
//                             width: t.offsetWidth,
//                             height: t.offsetHeight
//                         };
//                         var o = t.style,
//                             i = o.visibility,
//                             s = o.position,
//                             n = o.display;
//                         o.visibility = "hidden",
//                             o.position = "absolute",
//                             o.display = "block";
//                         var r = t.clientWidth,
//                             a = t.clientHeight;
//                         return o.display = n,
//                             o.position = s,
//                             o.visibility = i, {
//                                 width: r,
//                                 height: a
//                             }
//                     },
//                     o.offset = function(t) {
//                         for (var e = t,
//                                 o = {
//                                     top: 0,
//                                     left: 0
//                                 }; e;) o.top += e.offsetTop,
//                             o.left += e.offsetLeft,
//                             e = e.offsetParent;
//                         return o
//                     },
//                     o.on = function(e, o, i) {
//                         "addEventListener" in e ? e.addEventListener(o, i, !1) : e.attachEvent("on" + o,
//                             function() {
//                                 return i.call(e, t.event)
//                             })
//                     },
//                     o.off = function(t, e, o) {
//                         "removeEventListener" in t ? t.removeEventListener(e, o, !1) : t.detachEvent(e, o)
//                     },
//                     o.one = function(t, e, i) {
//                         var s = function() {
//                             i(arguments),
//                                 o.off(t, e, s)
//                         };
//                         o.on(t, e, s)
//                     },
//                     o.ready = function(o) {
//                         if (e.addEventListener) "complete" === e.readyState ? o() : (e.addEventListener("DOMContentLoaded", o, !1), t.addEventListener("load", o, !1));
//                         else if (e.attachEvent) {
//                             e.attachEvent("onreadystatechange", o),
//                                 t.attachEvent("onload", o);
//                             var i = !1;
//                             try {
//                                 i = null === t.frameElement
//                             } catch (s) {}
//                             e.documentElement.doScroll && i
//                         }
//                     },
//                     o.element = function(t) {
//                         return t.nodeName ? t : e.getElementById(t.substr(1))
//                     },
//                     o.getComputedStyle = function(e) {
//                         var o = t.getComputedStyle(e);
//                         return o ? o : {}
//                     },
//                     o
//             }(),
//             Y = !1,
//             X = !1,
//             j = !1,
//             M = ["https:" === e.location.protocol ? "https://" : "http://", "widget.uservoice.com"].join(""),
//             P = {
//                 "tab-light-bottom-right": "background:red url(#{bgImage}) 0 50% no-repeat;border:1px solid red;border-bottom:none;-moz-border-radius:4px 4px 0 0;-webkit-border-radius:4px 4px 0 0;border-radius:4px 4px 0 0;-moz-box-shadow:inset rgba(255,255,255,.9) 1px 1px 1px, rgba(0,0,0,.5) 0 1px 2px;-webkit-box-shadow:inset rgba(255,255,255,.9) 1px 1px 1px, rgba(0,0,0,.5) 0 1px 2px;box-shadow:inset rgba(255,255,255,.9) 1px 1px 1px, rgba(0,0,0,.5) 0 1px 2px;font:normal normal bold 14px/1em Arial, sans-serif;position:fixed;right:10px;bottom:0;z-index:9999;background-color:##{color};border-color:##{color};",
//                 "tab-dark-bottom-right": "background:red url(#{bgImage}) 0 50% no-repeat;border:1px solid #FFF;border-bottom:none;-moz-border-radius:4px 4px 0 0;-webkit-border-radius:4px 4px 0 0;border-radius:4px 4px 0 0;-moz-box-shadow:inset rgba(255,255,255,.25) 1px 1px 1px, rgba(0,0,0,.5) 0 1px 2px;-webkit-box-shadow:inset rgba(255,255,255,.25) 1px 1px 1px, rgba(0,0,0,.5) 0 1px 2px;box-shadow:inset rgba(255,255,255,.25) 1px 1px 1px, rgba(0,0,0,.5) 0 1px 2px;font:normal normal bold 14px/1em Arial, sans-serif;position:fixed;right:10px;bottom:0;z-index:9999;background-color:##{color};",
//                 "tab-light-top-right": "background:red url(#{bgImage}) 0 50% no-repeat;border:1px solid red;border-top:none;-moz-border-radius:0 0 4px 4px;-webkit-border-radius:0 0 4px 4px;border-radius:0 0 4px 4px;-moz-box-shadow:inset rgba(255,255,255,.9) 1px 1px 1px, rgba(0,0,0,.5) 0 1px 2px;-webkit-box-shadow:inset rgba(255,255,255,.9) 1px 1px 1px, rgba(0,0,0,.5) 0 1px 2px;box-shadow:inset rgba(255,255,255,.9) 1px 1px 1px, rgba(0,0,0,.5) 0 1px 2px;font:normal normal bold 14px/1em Arial, sans-serif;position:fixed;right:10px;top:0;z-index:9999;background-color:##{color};border-color:##{color};",
//                 "tab-dark-top-right": "background:red url(#{bgImage}) 0 50% no-repeat;border:1px solid #FFF;border-top:none;-moz-border-radius:0 0 4px 4px;-webkit-border-radius:0 0 4px 4px;border-radius:0 0 4px 4px;-moz-box-shadow:inset rgba(255,255,255,.25) 1px 1px 1px, rgba(0,0,0,.5) 0 1px 2px;-webkit-box-shadow:inset rgba(255,255,255,.25) 1px 1px 1px, rgba(0,0,0,.5) 0 1px 2px;box-shadow:inset rgba(255,255,255,.25) 1px 1px 1px, rgba(0,0,0,.5) 0 1px 2px;font:normal normal bold 14px/1em Arial, sans-serif;position:fixed;right:10px;top:0;z-index:9999;background-color:##{color};",
//                 "tab-light-bottom-left": "background:red url(#{bgImage}) 0 50% no-repeat;border:1px solid red;border-bottom:none;-moz-border-radius:4px 4px 0 0;-webkit-border-radius:4px 4px 0 0;border-radius:4px 4px 0 0;-moz-box-shadow:inset rgba(255,255,255,.9) 1px 1px 1px, rgba(0,0,0,.5) 0 1px 2px;-webkit-box-shadow:inset rgba(255,255,255,.9) 1px 1px 1px, rgba(0,0,0,.5) 0 1px 2px;box-shadow:inset rgba(255,255,255,.9) 1px 1px 1px, rgba(0,0,0,.5) 0 1px 2px;font:normal normal bold 14px/1em Arial, sans-serif;position:fixed;left:10px;bottom:0;z-index:9999;background-color:##{color};border-color:##{color};",
//                 "tab-dark-bottom-left": "background:red url(#{bgImage}) 0 50% no-repeat;border:1px solid #FFF;border-bottom:none;-moz-border-radius:4px 4px 0 0;-webkit-border-radius:4px 4px 0 0;border-radius:4px 4px 0 0;-moz-box-shadow:inset rgba(255,255,255,.25) 1px 1px 1px, rgba(0,0,0,.5) 0 1px 2px;-webkit-box-shadow:inset rgba(255,255,255,.25) 1px 1px 1px, rgba(0,0,0,.5) 0 1px 2px;box-shadow:inset rgba(255,255,255,.25) 1px 1px 1px, rgba(0,0,0,.5) 0 1px 2px;font:normal normal bold 14px/1em Arial, sans-serif;position:fixed;left:10px;bottom:0;z-index:9999;background-color:##{color};",
//                 "tab-light-top-left": "background:red url(#{bgImage}) 0 50% no-repeat;border:1px solid red;border-top:none;-moz-border-radius:0 0 4px 4px;-webkit-border-radius:0 0 4px 4px;border-radius:0 0 4px 4px;-moz-box-shadow:inset rgba(255,255,255,.9) 1px 1px 1px, rgba(0,0,0,.5) 0 1px 2px;-webkit-box-shadow:inset rgba(255,255,255,.9) 1px 1px 1px, rgba(0,0,0,.5) 0 1px 2px;box-shadow:inset rgba(255,255,255,.9) 1px 1px 1px, rgba(0,0,0,.5) 0 1px 2px;font:normal normal bold 14px/1em Arial, sans-serif;position:fixed;left:10px;top:0;z-index:9999;background-color:##{color};border-color:##{color};",
//                 "tab-dark-top-left": "background:red url(#{bgImage}) 0 50% no-repeat;border:1px solid #FFF;border-top:none;-moz-border-radius:0 0 4px 4px;-webkit-border-radius:0 0 4px 4px;border-radius:0 0 4px 4px;-moz-box-shadow:inset rgba(255,255,255,.25) 1px 1px 1px, rgba(0,0,0,.5) 0 1px 2px;-webkit-box-shadow:inset rgba(255,255,255,.25) 1px 1px 1px, rgba(0,0,0,.5) 0 1px 2px;box-shadow:inset rgba(255,255,255,.25) 1px 1px 1px, rgba(0,0,0,.5) 0 1px 2px;font:normal normal bold 14px/1em Arial, sans-serif;position:fixed;left:10px;top:0;z-index:9999;background-color:##{color};",
//                 "tab-light-middle-left": "background:red url(#{bgImage}) 50% 0 no-repeat;border:1px solid red;border-left:none;-moz-border-radius:0 4px 4px 0;-webkit-border-radius:0 4px 4px 0;border-radius:0 4px 4px 0;-moz-box-shadow:inset rgba(255,255,255,.9) 1px 1px 1px, rgba(0,0,0,.5) 0 1px 2px;-webkit-box-shadow:inset rgba(255,255,255,.9) 1px 1px 1px, rgba(0,0,0,.5) 0 1px 2px;box-shadow:inset rgba(255,255,255,.9) 1px 1px 1px, rgba(0,0,0,.5) 0 1px 2px;font:normal normal bold 14px/1em Arial, sans-serif;position:fixed;left:0;top:50%;z-index:9999;background-color:##{color};border-color:##{color};",
//                 "tab-dark-middle-left": "background:red url(#{bgImage}) 50% 0 no-repeat;border:1px solid #FFF;border-left:none;-moz-border-radius:0 4px 4px 0;-webkit-border-radius:0 4px 4px 0;border-radius:0 4px 4px 0;-moz-box-shadow:inset rgba(255,255,255,.25) 1px 1px 1px, rgba(0,0,0,.5) 0 1px 2px;-webkit-box-shadow:inset rgba(255,255,255,.25) 1px 1px 1px, rgba(0,0,0,.5) 0 1px 2px;box-shadow:inset rgba(255,255,255,.25) 1px 1px 1px, rgba(0,0,0,.5) 0 1px 2px;font:normal normal bold 14px/1em Arial, sans-serif;position:fixed;left:0;top:50%;z-index:9999;background-color:##{color};",
//                 "tab-light-middle-right": "background:red url(#{bgImage}) 50% 0 no-repeat;border:1px solid red;border-right:none;-moz-border-radius:4px 0 0 4px;-webkit-border-radius:4px 0 0 4px;border-radius:4px 0 0 4px;-moz-box-shadow:inset rgba(255,255,255,.9) 1px 1px 1px, rgba(0,0,0,.5) 0 1px 2px;-webkit-box-shadow:inset rgba(255,255,255,.9) 1px 1px 1px, rgba(0,0,0,.5) 0 1px 2px;box-shadow:inset rgba(255,255,255,.9) 1px 1px 1px, rgba(0,0,0,.5) 0 1px 2px;font:normal normal bold 14px/1em Arial, sans-serif;position:fixed;right:0;top:50%;z-index:9999;background-color:##{color};border-color:##{color};",
//                 "tab-dark-middle-right": "background:red url(#{bgImage}) 50% 0 no-repeat;border:1px solid #FFF;border-right:none;-moz-border-radius:4px 0 0 4px;-webkit-border-radius:4px 0 0 4px;border-radius:4px 0 0 4px;-moz-box-shadow:inset rgba(255,255,255,.25) 1px 1px 1px, rgba(0,0,0,.5) 0 1px 2px;-webkit-box-shadow:inset rgba(255,255,255,.25) 1px 1px 1px, rgba(0,0,0,.5) 0 1px 2px;box-shadow:inset rgba(255,255,255,.25) 1px 1px 1px, rgba(0,0,0,.5) 0 1px 2px;font:normal normal bold 14px/1em Arial, sans-serif;position:fixed;right:0;top:50%;z-index:9999;background-color:##{color};",
//                 "link-vertical": "display:block;padding:39px 5px 10px 5px;text-decoration:none;",
//                 "link-horizontal": "display:block;padding:6px 10px 2px 42px;text-decoration:none;",
//                 "link-vertical-no-bullhorn": "display:block;padding:10px 5px 10px 5px;text-decoration:none;",
//                 "link-horizontal-no-bullhorn": "display:block;padding:6px 10px 2px 10px;text-decoration:none;"
//             },
//             D = "    html.uvw-dialog-open object,    html.uvw-dialog-open iframe,    html.uvw-dialog-open embed {      visibility: hidden;    }    html.uvw-dialog-open iframe.uvw-dialog-iframe {      visibility: visible;    }    ",
//             L = function() {
//                 function t(t) {
//                     this.template = '<div id="uvTab" style="#{tabStyle}"><a id="uvTabLabel" style="background-color: transparent; #{linkStyle}" href="javascript:return false;"><img src="#{imgSrc}" alt="#{tab_label}" style="border:0; background-color: transparent; padding:0; margin:0;" /></a></div>',
//                         this.widgets = [],
//                         this.options = t,
//                         this.processOptions()
//                 }
//                 return t.prototype.push = function(t) {
//                         this.widget = t,
//                             this.widgets.push(t)
//                     },
//                     t.prototype.pop = function() {
//                         1 !== this.widgets.length && (this.widgets.pop(), this.widget = this.widgets[this.widgets.length - 1])
//                     },
//                     t.prototype.render = function() {
//                         this.el && this.el.parentNode && this.el.parentNode.removeChild(this.el);
//                         var t = new Image,
//                             e = this;
//                         A.on(t, "load",
//                                 function() {
//                                     e.createElement(),
//                                         e.show(),
//                                         Q.pendingAutoprompt && (Q.pendingAutoprompt = !1, Q.autoprompt())
//                                 }),
//                             t.src = this.options.imgSrc,
//                             f()
//                     },
//                     t.prototype.createElement = function() {
//                         var t = this.el = h(c(this.template, this.options)),
//                             e = t.getElementsByTagName("a")[0],
//                             o = this;
//                         A.addClass(t, "uv-tab uv-slide-" + this.edge),
//                             this.dimensions = A.dimensions(t),
//                             this.hide(!1),
//                             this.rotation && (t.style.marginTop = ["-", Math.round(this.dimensions.height / 2), "px"].join("")),
//                             A.on(e, "click",
//                                 function(t) {
//                                     return t.preventDefault && t.preventDefault(),
//                                         o.visibleWidget ? o.visibleWidget.hide() : o.widget.show(), !1
//                                 })
//                     },
//                     t.prototype.remove = function() {
//                         this.el && (this.widget.hide(), this.hide())
//                     },
//                     t.prototype.hide = function(t) {
//                         t = t === o ? !0 : t,
//                             t && r(this.el),
//                             A.addClass(this.el, "uv-is-hidden"),
//                             this.el.offsetWidth
//                     },
//                     t.prototype.show = function() {
//                         r(this.el),
//                             A.removeClass(this.el, "uv-is-hidden"),
//                             this.el.offsetWidth
//                     },
//                     t.prototype.processOptions = function() {
//                         var t = {
//                                 trigger_position: "right",
//                                 trigger_background_color: "CC6D00",
//                                 tab_label: "feedback",
//                                 tab_inverted: !1
//                             },
//                             e = T({},
//                                 t, this.options);
//                         e.trigger_position.match(/^((top|bottom|middle)-(left|right)|left|right)$/) || (e.trigger_position = t.trigger_position),
//                             e.trigger_position.match(/^(right|left)$/) && (e.trigger_position = "middle-" + e.trigger_position),
//                             "string" == typeof e.trigger_background_color && e.trigger_background_color.match(/^#/) && (e.trigger_background_color = e.trigger_background_color.substring(1));
//                         var o = /([^\-]+)-([^\-]+)/.exec(e.trigger_position),
//                             i = o[1],
//                             s = o[2],
//                             n = "middle" === o[1] ? 90 : 0,
//                             r = UserVoice.account.white_labeled ? "-no-bullhorn" : "",
//                             a = ["tab-", e.inverted ? "light-" : "dark-", e.trigger_position].join(""),
//                             l = [n ? "link-vertical" : "link-horizontal", r].join(""),
//                             p = [M, "/dcache", "/widget/feedback-tab.png?t=", encodeURIComponent(e.tab_label), "&c=", e.tab_inverted ? encodeURIComponent(e.trigger_background_color) : "ffffff", "&r=", encodeURIComponent(n), e.tab_inverted ? "&i=yes" : ""].join(""),
//                             d = e.trigger_position.replace(/middle-/, "").replace(/(bottom|top)-(right|left)/, "horizontal");
//                         d = ["tab-", d, e.tab_inverted ? "-light" : "-dark", r].join(""),
//                             d = [M, UserVoice.manifest[d]].join(""),
//                             e.bgImage = d,
//                             e.imgSrc = p,
//                             e.tab_label = u(e.tab_label),
//                             a = P[a],
//                             l = P[l], (F.ie6 || F.ieQuirks) && (a += "position:absolute !important;", "top" === i ? a += "top: expression(((document.documentElement.scrollTop || document.body.scrollTop) + (!this.offsetHeight && 0)) + 'px');" : "middle" === i ? a += "top: expression(((document.documentElement.scrollTop || document.body.scrollTop) + ((((document.documentElement.clientHeight || document.body.clientHeight) + (!this.offsetHeight && 0)) / 2) >> 0)) + 'px');" : "bottom" === i && (a += "top: expression(((document.documentElement.scrollTop || document.body.scrollTop) + (document.documentElement.clientHeight || document.body.clientHeight) - this.offsetHeight) + 'px');")),
//                             e.tabStyle = c(a, {
//                                 color: e.trigger_background_color,
//                                 bgImage: e.bgImage
//                             }),
//                             e.linkStyle = l,
//                             "top" === i ? this.edge = "top" : "bottom" === i ? this.edge = "bottom" : "left" === s ? this.edge = "left" : "right" === s && (this.edge = "right"),
//                             this.rotation = n,
//                             this.options = e
//                     },
//                     t
//             }(),
//             W = function() {
//                 function i() {}
//                 return i.template = '      <div class="uv-popover-content">        <div class="uv-popover-iframe-container"></div>        <div class="uv-popover-loading"><div class="uv-popover-loading-text">' + N("Loading") + '&#8230;</div></div>        <!-- shadow for ie8 -->        <div class="uv-popover-content-shadow"></div>      </div>    ',
//                     i.prototype.show = function(t) {
//                         t = t === o ? !0 : t,
//                             Q.hideActive(),
//                             Q.active = this,
//                             this.el || this.render(),
//                             this.trigger && (this.trigger.visibleWidget = this),
//                             this.trigger && this.trigger.popoverWillShow && this.trigger.popoverWillShow(),
//                             t ? this.animateIn() : A.removeClass(this.el, "uv-is-hidden"),
//                             this.iframe.poke({
//                                 show: !0
//                             }),
//                             this.iframe.poke({
//                                 focus: null
//                             })
//                     },
//                     i.prototype.hide = function(t) {
//                         if (t = t === o ? !0 : t, Q.active = null, this.el || this.render(), this.trigger && (this.trigger.visibleWidget = null), this.trigger && this.trigger.popoverWillHide && this.trigger.popoverWillHide(), t ? this.animateOut() : A.addClass(this.el, "uv-is-hidden"), this.temp) {
//                             var e = this.el;
//                             setTimeout(function() {
//                                     e.parentNode.removeChild(e)
//                                 },
//                                 500)
//                         }
//                     },
//                     i.prototype.toggle = function(t) {
//                         this.el || this.render(),
//                             this.visible() ? this.hide(t) : this.show(t)
//                     },
//                     i.prototype.animateIn = function() {
//                         this.position(),
//                             r(this.el),
//                             A.removeClass(this.el, "uv-is-hidden"),
//                             this.el.offsetWidth,
//                             this.createIframe()
//                     },
//                     i.prototype.preload = function() {
//                         this.el || this.render(),
//                             this.createIframe(!0)
//                     },
//                     i.prototype.animateOut = function() {
//                         r(this.el),
//                             A.addClass(this.el, "uv-is-hidden")
//                     },
//                     i.prototype.visible = function() {
//                         return !A.hasClass(this.el, "uv-is-hidden") && !this.preloading
//                     },
//                     i.prototype.paneOpened = function(t, e) {
//                         e.needsReload && (this.needsReload = !0)
//                     },
//                     i.prototype.position = function() {
//                         this.preloading && (A.addClass(this.el, "uv-is-hidden"), this.el.style.left = "", this.preloading = !1);
//                         var t = this.visible();
//                         A.addClass(this.el, "uv-no-transition"),
//                             t || (A.addClass(this.el, "uv-is-invisible"), this.el.style.left = "-1000px"),
//                             A.removeClass(this.el, "uv-scale-\\S+"),
//                             this.el.offsetWidth,
//                             this.calculatePosition(),
//                             this.el.offsetWidth,
//                             t || A.removeClass(this.el, "uv-is-invisible"),
//                             A.removeClass(this.el, "uv-no-transition"),
//                             this.el.offsetWidth
//                     },
//                     i.prototype.createIframe = function(e) {
//                         var o = A(this.el, "uv-popover-iframe-container"),
//                             i = A(this.el, "uv-popover-loading"),
//                             s = this;
//                         (!this.iframe || this.needsReload) && (this.iframe && (o.removeChild(this.iframe.el), this.needsReload = !1), e && (A.removeClass(this.el, "uv-is-hidden"), this.el.style.left = "-10000px", this.preloading = !0), this.iframe = new $("popover", this.options.widgetType, T({
//                                 height: "100%"
//                             },
//                             UserVoice.globalOptions, this.options)), this.iframe.render(), A.addClass(this.iframe.el, "uv-popover-iframe"), o.appendChild(this.iframe.el), F.ie8 && A.addClass(this.el, "uv-ie8"), A.on(t, "resize",
//                             function() {
//                                 s.visible() && s.calculatePosition()
//                             }), i && i.parentNode && (this.iframe.loaded || F.ie && F.version < 10 ? i.parentNode.removeChild(i) : A.one(this.iframe.el, "load",
//                             function() {
//                                 s.preloading && (A.addClass(s.el, "uv-is-hidden"), s.el.style.left = "", s.preloading = !1),
//                                     i.parentNode.removeChild(i)
//                             })))
//                     },
//                     i.prototype.createElement = function(t) {
//                         var o = this.el = e.createElement("div");
//                         o.innerHTML = this.template,
//                             o.setAttribute("data-html2canvas-ignore", !0),
//                             this.options.width && !F.mobile && (A(o, "uv-popover-content").style.width = this.options.width),
//                             this.options.height && !F.mobile && (A(o, "uv-popover-content").style.height = this.options.height),
//                             A.addClass(this.el, "uv-popover uv-is-hidden"),
//                             t.appendChild(o)
//                     },
//                     i
//             }(),
//             B = function() {
//                 function o(t) {
//                     this.template = W.template,
//                         this.options = t,
//                         f()
//                 }
//                 return o.prototype = T({},
//                         W.prototype),
//                     o.prototype.render = function() {
//                         this.createElement(e.body)
//                     },
//                     o.prototype.show = function() {
//                         var e, o, i;
//                         F.mobile && p(),
//                             W.prototype.show.apply(this, arguments),
//                             F.match(/iPhone OS 7/) && (e = this, i = function() {
//                                     e.visible() && (o !== y().height ? (t.scrollBy(0), o = y().height, setTimeout(i, 80)) : setTimeout(i, 800))
//                                 },
//                                 i())
//                     },
//                     o.prototype.hide = function() {
//                         W.prototype.hide.apply(this, arguments),
//                             F.mobile && (d(), this.needsReload = !0)
//                     },
//                     o.prototype.calculatePosition = function() {
//                         var e = this.options.position.match(/^(top|bottom)-(left|right)$/) ? this.options.position : "bottom-right",
//                             o = /(\w+)-(\w+)/.exec(e);
//                         if (this.el.style.zIndex = 100003, F.mobile) {
//                             var i = A(this.el, "uv-popover-content"),
//                                 s = t.innerWidth,
//                                 n = 325,
//                                 r = 10,
//                                 a = s / (n + 2 * r),
//                                 l = Math.round(a * r);
//                             i.style.width = "100%",
//                                 i.style.height = "100%",
//                                 this.el.style.position = "fixed",
//                                 this.el.style.top = l + "px",
//                                 this.el.style.left = l + "px",
//                                 this.el.style.bottom = l + "px",
//                                 this.el.style.right = l + "px"
//                         } else {
//                             var r = 20;
//                             this.el.style.left = "",
//                                 this.el.style[o[1]] = r + "px",
//                                 this.el.style[o[2]] = r + "px"
//                         }
//                         A.addClass(this.el, "uv-" + ("bottom" === o[1] ? "top" : "bottom")),
//                             A.addClass(this.el, "uv-scale-" + e)
//                     },
//                     o
//             }(),
//             R = function() {
//                 function t(t, e) {
//                     this.template = W.template + '<div class="uv-popover-tail"></div>',
//                         this.options = t,
//                         this.trigger = e,
//                         f()
//                 }
//                 return t.prototype = T({},
//                         W.prototype),
//                     t.prototype.render = function() {
//                         this.target = "self" === this.options.target ? this.trigger.el : A.element(this.options.target),
//                             Q.systemTrigger && this.target === Q.systemTrigger.el ? (this.container = this.target, this.isContained = !0) : this.container = e.body,
//                             this.createElement(this.container)
//                     },
//                     t.prototype.paneOpened = function(t, e) {
//                         W.prototype.paneOpened.apply(this, arguments),
//                             this.setTailColor(e.backgroundColor)
//                     },
//                     t.prototype.defaultPosition = function() {
//                         var t = this.target,
//                             o = A.offset(t),
//                             i = A.dimensions(t),
//                             s = t.currentStyle ? t.currentStyle.position : A.getComputedStyle(t, null).position,
//                             n = 100;
//                         return "fixed" !== s && (o.top -= e.body.scrollTop, o.left -= e.body.scrollLeft),
//                             o.top < n ? "bottom" : o.top + i.height + n > y().height ? "top" : o.left < n ? "right" : o.left + i.width + n > y().width ? "left" : o.top > o.top + i.height - y().height ? "bottom" : "top"
//                     },
//                     t.prototype.calculatePosition = function() {
//                         var t = A(this.el, "uv-popover-tail"),
//                             e = this.target,
//                             o = "automatic" === this.options.position ? this.defaultPosition() : this.options.position,
//                             i = "top" === o ? "bottom" : "right" === o ? "left" : "left" === o ? "right" : "top",
//                             s = "top" === o || "bottom" === o ? "left" : "top",
//                             r = "left" === s ? "width" : "height",
//                             a = "left" === s ? "top" : "left",
//                             l = "width" === r ? "height" : "width",
//                             p = A.dimensions(this.el),
//                             d = A.dimensions(e),
//                             c = A.offset(e),
//                             h = n(c[s] + d[r] / 2, p[r], 0, y()[r], 10),
//                             u = n(c[s] - h + d[r] / 2, A.dimensions(t)[r], 0, p[r], 15),
//                             g = 1 * (u - A.dimensions(t)[r] / 2) / p[r],
//                             m = 1 / 3 >= g ? "left" === s ? "-left" : "-top" : 2 / 3 >= g ? "" : "left" === s ? "-right" : "-bottom",
//                             b = e.currentStyle ? e.currentStyle.position : A.getComputedStyle(e, null).position;
//                         this.currentPosition = o,
//                             this.el.style.position = "fixed" !== b || this.isContained ? "absolute" : "fixed",
//                             this.el.style[s] = h - (this.isContained ? c[s] : 0) + "px",
//                             t.style[s] = u + "px",
//                             A.removeClass(this.el, "uv-(bottom|top|left|right)"),
//                             A.addClass(this.el, "uv-" + o),
//                             A.addClass(this.el, "uv-scale-" + i + m),
//                             "top" === o || "left" === o ? this.el.style[a] = (this.isContained ? 0 : c[a]) - p[l] - 14 + "px" : ("bottom" === o || "right" === o) && (this.el.style[a] = (this.isContained ? 0 : c[a]) + d[l] + 14 + "px")
//                     },
//                     t.prototype.setTailColor = function(t) {
//                         "transparent" !== t && ("#ffffff" === t || "rgb(255, 255, 255)" === t || "white" === t || "" === t ? A.removeClass(this.el, "uv-reversed") : A.addClass(this.el, "uv-reversed"), A(this.el, "uv-popover-content").style.backgroundColor = t, A(this.el, "uv-popover-tail").style["border" + this.currentPosition[0].toUpperCase() + this.currentPosition.slice(1) + "Color"] = t)
//                     },
//                     t
//             }(),
//             J = function() {
//                 function t(t) {
//                     var e = {
//                         trigger_background_color: "rgba(46, 49, 51, 0.6)",
//                         trigger_position: "bottom-right"
//                     };
//                     this.options = T({},
//                             e, t),
//                         this.options.trigger_position.match(/^(bottom|top)-(left|right)$/) || (this.options.trigger_position = e.trigger_position),
//                         this.widgets = [],
//                         F.touch || v(),
//                         f()
//                 }
//                 return t.icon_images = {
//                         contact: '<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"\r\n	 width="39px" height="39px" viewBox="0 0 39 39" enable-background="new 0 0 39 39" xml:space="preserve">\r\n<g>\r\n	<path class="uv-bubble-background" fill="rgba(46, 49, 51, 0.6)" d="M31.425,34.514c-0.432-0.944-0.579-2.007-0.591-2.999c4.264-3.133,7.008-7.969,7.008-13.409\r\n		C37.842,8.658,29.594,1,19.421,1S1,8.658,1,18.105c0,9.446,7.932,16.79,18.105,16.79c1.845,0,3.94,0.057,5.62-0.412\r\n		c0.979,1.023,2.243,2.3,2.915,2.791c3.785,2.759,7.571,0,7.571,0S32.687,37.274,31.425,34.514z"/>\r\n	<g>\r\n		<g>\r\n			<path class="uv-bubble-foreground" fill="#FFFFFF" d="M16.943,19.467c0-3.557,4.432-3.978,4.432-6.058c0-0.935-0.723-1.721-2.383-1.721\r\n				c-1.508,0-2.773,0.725-3.709,1.87l-2.441-2.743c1.598-1.9,4.01-2.924,6.602-2.924c3.891,0,6.271,1.959,6.271,4.765\r\n				c0,4.4-5.037,4.732-5.037,7.265c0,0.481,0.243,0.994,0.574,1.266l-3.316,0.965C17.303,21.459,16.943,20.522,16.943,19.467z\r\n				 M16.943,26.19c0-1.326,1.114-2.441,2.44-2.441c1.327,0,2.442,1.115,2.442,2.441c0,1.327-1.115,2.441-2.442,2.441\r\n				C18.058,28.632,16.943,27.518,16.943,26.19z"/>\r\n		</g>\r\n	</g>\r\n</g>\r\n</svg>\r\n',
//                         feedback: '<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"\n	 width="39px" height="39px" viewBox="0 0 39 39" enable-background="new 0 0 39 39" xml:space="preserve">\n<g>\n	<path class="uv-bubble-background" fill="rgba(46, 49, 51, 0.6)"  d="M31.425,34.514c-0.432-0.944-0.579-2.007-0.591-2.999c4.264-3.133,7.008-7.969,7.008-13.409\n		C37.842,8.658,29.594,1,19.421,1S1,8.658,1,18.105c0,9.446,7.932,16.79,18.105,16.79c1.845,0,3.94,0.057,5.62-0.412\n		c0.979,1.023,2.243,2.3,2.915,2.791c3.785,2.759,7.571,0,7.571,0S32.687,37.274,31.425,34.514z"/>\n</g>\n<g>\n	<g>\n		<path class="uv-bubble-foreground" fill="#FFFFFF" d="M24.951,9.07c-0.83-0.836-1.857-1.453-2.976-1.786C21.337,7.096,20.672,7,20,7\n			c-1.87,0-3.628,0.736-4.952,2.07C13.728,10.403,13,11.864,13,13.751l0.03,0.648c0.086,0.972,0.368,1.896,0.834,2.752\n			c0.776,1.399,2.367,2.849,2.637,4.993l0.163,0.972C16.809,23.703,17.105,24,17.549,24h5.054c0.445,0,0.742-0.297,0.884-0.884\n			l0.014-0.972c0.268-2.144,1.802-3.593,2.657-4.993c0.443-0.855,0.725-1.779,0.811-2.752L27,13.751\n			C26.999,11.864,26.271,10.405,24.951,9.07z M17.101,26.554h5.741v-1.66h-5.741V26.554z M18.392,28.668h3.216l0.414-0.83h-4.101\n			L18.392,28.668z"/>\n	</g>\n</g>\n</svg>\n',
//                         post_suggestion: '<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"\n	 width="39px" height="39px" viewBox="0 0 39 39" enable-background="new 0 0 39 39" xml:space="preserve">\n<g>\n	<path class="uv-bubble-background" fill="rgba(46, 49, 51, 0.6)"  d="M31.425,34.514c-0.432-0.944-0.579-2.007-0.591-2.999c4.264-3.133,7.008-7.969,7.008-13.409\n		C37.842,8.658,29.594,1,19.421,1S1,8.658,1,18.105c0,9.446,7.932,16.79,18.105,16.79c1.845,0,3.94,0.057,5.62-0.412\n		c0.979,1.023,2.243,2.3,2.915,2.791c3.785,2.759,7.571,0,7.571,0S32.687,37.274,31.425,34.514z"/>\n</g>\n<g>\n	<g>\n		<path class="uv-bubble-foreground" fill="#FFFFFF" d="M24.951,9.07c-0.83-0.836-1.857-1.453-2.976-1.786C21.337,7.096,20.672,7,20,7\n			c-1.87,0-3.628,0.736-4.952,2.07C13.728,10.403,13,11.864,13,13.751l0.03,0.648c0.086,0.972,0.368,1.896,0.834,2.752\n			c0.776,1.399,2.367,2.849,2.637,4.993l0.163,0.972C16.809,23.703,17.105,24,17.549,24h5.054c0.445,0,0.742-0.297,0.884-0.884\n			l0.014-0.972c0.268-2.144,1.802-3.593,2.657-4.993c0.443-0.855,0.725-1.779,0.811-2.752L27,13.751\n			C26.999,11.864,26.271,10.405,24.951,9.07z M17.101,26.554h5.741v-1.66h-5.741V26.554z M18.392,28.668h3.216l0.414-0.83h-4.101\n			L18.392,28.668z"/>\n	</g>\n</g>\n</svg>\n',
//                         smartvote: '<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"\n	 width="39px" height="39px" viewBox="0 0 39 39" enable-background="new 0 0 39 39" xml:space="preserve">\n<g>\n	<path class="uv-bubble-background" fill="rgba(46, 49, 51, 0.6)"  d="M31.425,34.514c-0.432-0.944-0.579-2.007-0.591-2.999c4.264-3.133,7.008-7.969,7.008-13.409\n		C37.842,8.658,29.594,1,19.421,1S1,8.658,1,18.105c0,9.446,7.932,16.79,18.105,16.79c1.845,0,3.94,0.057,5.62-0.412\n		c0.979,1.023,2.243,2.3,2.915,2.791c3.785,2.759,7.571,0,7.571,0S32.687,37.274,31.425,34.514z"/>\n</g>\n<g>\n	<g>\n		<path class="uv-bubble-foreground" fill="#FFFFFF" d="M24.951,9.07c-0.83-0.836-1.857-1.453-2.976-1.786C21.337,7.096,20.672,7,20,7\n			c-1.87,0-3.628,0.736-4.952,2.07C13.728,10.403,13,11.864,13,13.751l0.03,0.648c0.086,0.972,0.368,1.896,0.834,2.752\n			c0.776,1.399,2.367,2.849,2.637,4.993l0.163,0.972C16.809,23.703,17.105,24,17.549,24h5.054c0.445,0,0.742-0.297,0.884-0.884\n			l0.014-0.972c0.268-2.144,1.802-3.593,2.657-4.993c0.443-0.855,0.725-1.779,0.811-2.752L27,13.751\n			C26.999,11.864,26.271,10.405,24.951,9.07z M17.101,26.554h5.741v-1.66h-5.741V26.554z M18.392,28.668h3.216l0.414-0.83h-4.101\n			L18.392,28.668z"/>\n	</g>\n</g>\n</svg>\n',
//                         satisfaction: '<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"\r\n	 width="39px" height="39px" viewBox="0 0 39 39" enable-background="new 0 0 39 39" xml:space="preserve">\r\n<g>\r\n	<path class="uv-bubble-background" fill="rgba(46, 49, 51, 0.6)" d="M31.425,34.514c-0.432-0.944-0.579-2.007-0.591-2.999c4.264-3.133,7.008-7.969,7.008-13.409\r\n		C37.842,8.658,29.594,1,19.421,1S1,8.658,1,18.105c0,9.446,7.932,16.79,18.105,16.79c1.845,0,3.94,0.057,5.62-0.412\r\n		c0.979,1.023,2.243,2.3,2.915,2.791c3.785,2.759,7.571,0,7.571,0S32.687,37.274,31.425,34.514z"/>\r\n</g>\r\n<g>\r\n	<g>\r\n		<path class="uv-bubble-foreground" fill="#FFFFFF" d="M13.501,19.25c0.308,0.3,0.501,0.891,0.427,1.314l-1.02,5.95c-0.073,0.423,0.18,0.604,0.56,0.404\r\n			l5.338-2.806c0.381-0.2,1.004-0.2,1.385,0l5.338,2.806c0.38,0.201,0.633,0.018,0.561-0.404l-1.02-5.95\r\n			C25,20.141,25.191,19.55,25.499,19.25l4.321-4.21c0.308-0.3,0.211-0.596-0.215-0.658l-5.968-0.868\r\n			c-0.426-0.062-0.93-0.427-1.119-0.813l-2.673-5.412c-0.19-0.385-0.501-0.385-0.691,0l-2.671,5.412\r\n			c-0.191,0.385-0.695,0.75-1.12,0.813l-5.967,0.868c-0.426,0.062-0.523,0.358-0.215,0.658L13.501,19.25z"/>\r\n	</g>\r\n</g>\r\n</svg>\r\n'
//                     },
//                     t.icon_images_ie8 = {
//                         contact: "//widget.uservoice.com/omnibox/icons/question_mark_bubble_icon.png",
//                         feedback: "//widget.uservoice.com/omnibox/icons/lightbulb_bubble_icon.png",
//                         post_suggestion: "//widget.uservoice.com/omnibox/icons/lightbulb_bubble_icon.png",
//                         smartvote: "//widget.uservoice.com/omnibox/icons/lightbulb_bubble_icon.png",
//                         satisfaction: "//widget.uservoice.com/omnibox/icons/star_bubble_icon.png"
//                     },
//                     t.prototype.remove = function() {
//                         this.widget.hide();
//                         try {
//                             e.body.removeChild(this.el)
//                         } catch (t) {}
//                     },
//                     t.prototype.push = function(t) {
//                         this.widget = t,
//                             this.widgets.push(t)
//                     },
//                     t.prototype.pop = function() {
//                         1 !== this.widgets.length && (this.widgets.pop(), this.widget = this.widgets[this.widgets.length - 1])
//                     },
//                     t.prototype.render = function() {
//                         var e = this,
//                             o = "classic_widget" === this.widget.options.mode ? "contact" : this.widget.options.mode;
//                         this.el || this.createElement();
//                         var i = t.icon_images[o];
//                         if (F.ie8) {
//                             var s = t.icon_images_ie8[o];
//                             s += "?trigger_color=" + encodeURIComponent(this.options.trigger_color),
//                                 s += "&trigger_background_color=" + encodeURIComponent(this.options.trigger_background_color),
//                                 s += "&icon_version=3",
//                                 i = "<img src='" + s + "'/>"
//                         }
//                         this.el.innerHTML = i,
//                             F.ie8 || (this.options.trigger_color && (A(this.el, "path", "uv-bubble-foreground").style.fill = this.options.trigger_color), this.options.trigger_background_color && (A(this.el, "path", "uv-bubble-background").style.fill = this.options.trigger_background_color)),
//                             A.on(this.el, "click",
//                                 function() {
//                                     e.visibleWidget ? e.visibleWidget.hide() : e.widget.show()
//                                 }),
//                             F.touch || F.ie && !(F.ie && F.version > 9) || A.one(e.el, "mousemove",
//                                 function() {
//                                     e.widget.preload()
//                                 })
//                     },
//                     t.prototype.createElement = function() {
//                         var t = this.el = e.createElement("div");
//                         t.setAttribute("data-html2canvas-ignore", !0),
//                             A.addClass(this.el, "uv-icon uv-" + this.options.trigger_position),
//                             F.ie8 && A.addClass(this.el, "uv-ie8"),
//                             e.body.appendChild(this.el)
//                     },
//                     t.prototype.popoverWillShow = function() {
//                         A.addClass(this.el, "uv-is-selected")
//                     },
//                     t.prototype.popoverWillHide = function() {
//                         A.removeClass(this.el, "uv-is-selected")
//                     },
//                     t
//             }(),
//             H = function() {
//                 function t(t, e) {
//                     this.el = t,
//                         this.options = e,
//                         A.data(this.el, "trigger", this)
//                 }
//                 return t.prototype.render = function() {
//                         var t = this;
//                         this.clickHandler = function(e) {
//                                 return t.options.trigger_prevent_default_enabled && e.preventDefault && e.preventDefault(),
//                                     t.widget.toggle(),
//                                     t.options.trigger_prevent_default_enabled ? !1 : void 0
//                             },
//                             A.on(this.el, "click", this.clickHandler),
//                             F.touch || F.ie && !(F.ie && F.version > 9) || A.one(this.el, "mousemove",
//                                 function() {
//                                     t.removed || t.widget.preload()
//                                 })
//                     },
//                     t.prototype.remove = function() {
//                         this.removed = !0,
//                             A.off(this.el, "click", this.clickHandler)
//                     },
//                     t
//             }(),
//             $ = function() {
//                 function i(t, e, o) {
//                     this.options = T({
//                                 css: "display: block; background: transparent; padding: none; margin: none; border: none; width: #{width}; height: #{height}",
//                                 cdn: "omnibox" === e,
//                                 embed_type: t,
//                                 type: e,
//                                 width: "100%",
//                                 height: "100%"
//                             },
//                             o),
//                         this.options.mode.match(/contact|instant/) ? this.options.mode = "contact" : this.options.mode.match(/post_idea|post_suggestion/) ? this.options.mode = "feedback" : "satisfaction" === this.options.mode && (this.options.survey_lockout = !1),
//                         this.pokes = [],
//                         this.loaded = !1,
//                         this.setLocation(),
//                         this.src = [this.location.baseUrl, this.queryString()].join("?"),
//                         this.sendUserData(),
//                         i.all.push(this)
//                 }
//                 return i.all = [],
//                     i.prototype.setLocation = function() {
//                         var t = "https";
//                         if (this.options.cdn) {
//                             var e = "widget.uservoice.com";
//                             this.location = {
//                                 host: e,
//                                 protocol: t,
//                                 baseUrl: [t, "://", e, "/", this.options.type, "/", encodeURIComponent(this.options.locale || "0"), "/", encodeURIComponent(this.options.accent_color || "0"), "/", UserVoice.account.client_key].join("")
//                             }
//                         } else this.location = {
//                             host: UserVoice.account.subdomain_ssl_host,
//                             protocol: t,
//                             baseUrl: t + "://" + UserVoice.account.subdomain_ssl_host + "/clients/widgets/" + this.options.type
//                         };
//                         this.location.origin = [this.location.protocol, "://", this.location.host].join("")
//                     },
//                     i.prototype.doLoad = function() {
//                         this.loaded = !0,
//                             this.poke()
//                     },
//                     i.prototype.poke = function(e) {
//                         if (e && ("object" == typeof e && (e = JSON.stringify(e)), this.pokes.push(e)), this.loaded && this.el && this.el.contentWindow) {
//                             for (var o = this.el.contentWindow,
//                                     i = 0,
//                                     s = this.pokes.length; s > i; i++)
//                                 if ("postMessage" in t) o.postMessage(this.pokes[i], this.location.origin);
//                                 else try {
//                                     o.location.href = [this.src, (+new Date).toString() + "&" + this.pokes[i]].join("#")
//                                 } catch (n) {}
//                             this.pokes = []
//                         }
//                     },
//                     i.prototype.render = function() {
//                         this.loaded = !1,
//                             this.options.startIframeLoad = +new Date;
//                         var t = this.el = e.createElement("iframe"),
//                             o = this,
//                             i = {
//                                 height: this.options.height,
//                                 width: this.options.width
//                             },
//                             s = c(this.options.css, i);
//                         if (t.attachEvent ? t.attachEvent("onload",
//                                 function() {
//                                     o.doLoad()
//                                 }) : t.onload = function() {
//                                 o.doLoad()
//                             },
//                             t.name = "uvw-iframe-" + this.options.id, A.addClass(t, "uvw-dialog-iframe"), F.ie ? t.style.setAttribute("cssText", s, 0) : t.setAttribute("style", s), t.setAttribute("allowtransparency", "true"), t.setAttribute("frameBorder", "0"), t.frameBorder = 0, !(F.ie && F.version < 9)) {
//                             t.style.visibility = "hidden";
//                             var n = t.onload;
//                             t.onload = function() {
//                                 "function" == typeof n && n(),
//                                     t.style.visibility = "visible"
//                             }
//                         }
//                         return t.src = this.src,
//                             t
//                     },
//                     i.prototype.queryString = function() {
//                         for (var e = {},
//                                 i = ["sso", "sess", "mode", "locale", "link_color", "topic_id", "forum_id", "article_id", "suggestion_id", "feedback_tab_name", "support_tab_name", "contact_us", "email", "status_ids", "smartvote_status_ids", "states", "category_ids", "smartvote_category_ids", "survey_lockout", "primary_color", "accent_color", "trigger_color", "trigger_background_color", "header", "border", "custom_template_id", "design_settings_id", "mixpanel_channel", "allow_tests", "demo", "startIframeLoad", "org_name", "post_idea_title", "contact_title", "smartvote_title", "context", "embed_type", "trigger_method", "menu", "screenshot_enabled", "mobile", "twitter_demo", "twitter_demo_username", "twitter_demo_message", "twitter_demo_satisfaction_thanks_mode", "twitter_demo_satisfaction_thanks_message", "permalinks_enabled", "strings", "instant_answers", "smartvote", "satisfaction", "contact_enabled", "feedback_enabled"], s = 0; s < i.length; s++) {
//                             var n = i[s],
//                                 r = this.options[n];
//                             r === o && (r = this.options["__" + n]),
//                                 r !== o && ("string" == typeof r && n.match(/color/) && r.match(/^#/) && (r = r.substring(1)), "object" == typeof r && (r = JSON.stringify(r)), e[n] = r)
//                         }
//                         this.options.post_idea_enabled !== o && (this.options.post_suggestion_enabled = this.options.post_idea_enabled);
//                         var a = this.options.ticket_custom_fields || this.options.custom_fields;
//                         a && "object" == typeof a && (e.custom_fields = z(JSON.stringify(a)));
//                         var l = this.options.strings || {};
//                         return l && "object" == typeof l && (e.strings = z(JSON.stringify(l))),
//                             e.smartvote_status_ids && (e.status_ids = e.smartvote_status_ids, delete e.smartvote_status_ids),
//                             e.smartvote_category_ids && (e.category_ids = e.smartvote_category_ids, delete e.smartvote_category_ids),
//                             this.options.menu_enabled !== o && (e.menu = this.options.menu_enabled),
//                             this.options.smartvote_enabled !== o && (e.smartvote = this.options.smartvote_enabled),
//                             this.options.satisfaction_enabled !== o && (e.satisfaction = this.options.satisfaction_enabled),
//                             this.options.post_suggestion_enabled !== o && (e.feedback_enabled = this.options.post_suggestion_enabled),
//                             "classic_widget" === this.options.type && (this.options.classic_default_mode !== o && (e.default_mode = this.options.classic_default_mode), e.mode = this.options.contact_enabled ? this.options.post_suggestion_enabled ? "full" : "support" : "feedback"),
//                             e.referrer = t.location.href,
//                             g(e,
//                                 function(t) {
//                                     try {
//                                         t = decodeURIComponent(t)
//                                     } catch (e) {}
//                                     return encodeURIComponent(t)
//                                 })
//                     },
//                     i.prototype.sendUserData = function() {
//                         if (Q.uvts && this.poke({
//                                 setUvts: Q.uvts
//                             }), Q.email && this.poke({
//                                 setEmail: Q.email
//                             }), Q.external_user_ids && Q.external_user_ids.length)
//                             for (var t = 0; t < Q.external_user_ids.length; t++) this.poke({
//                                 addExternalUserId: Q.external_user_ids[t]
//                             })
//                     },
//                     i.sendUserData = function() {
//                         for (var t = 0; t < this.all.length; t++) this.all[t].sendUserData()
//                     },
//                     i
//             }(),
//             q = function() {
//                 function t(t, e) {
//                     var o = A.dimensions(t).height,
//                         i = {
//                             trigger_method: "embed",
//                             height: 10 > o ? "325px" : "100%",
//                             contact_enabled: !0,
//                             post_suggestion_enabled: !0,
//                             smartvote_enabled: !0,
//                             feedback_enabled: !0
//                         },
//                         s = Q.processModeOptions(T(i, UserVoice.globalOptions, e)),
//                         n = new $("inline", s.widgetType, s),
//                         r = t.currentStyle ? t.currentStyle.position : A.getComputedStyle(t, null).position;
//                     for ("static" === r && (t.style.position = "relative"); t.firstChild;) t.removeChild(t.firstChild);
//                     t.appendChild(n.render()),
//                         n.poke({
//                             show: !0
//                         })
//                 }
//                 return t
//             }(),
//             K = function() {
//                 function o(t) {
//                     this.iframe = new $("lightbox", t.widgetType, T({
//                                 css: "display: block; border: none; -moz-border-radius: 3px; -webkit-border-radius: 3px; height: 100%; padding: none; position: absolute; top: 0; right: 0; bottom: 0; left: 0; width: 100%;-webkit-transform: translate3d(0,0,0);"
//                             },
//                             t)),
//                         this.template = '<div class="uvOverlay1" id="uvw-overlay-#{id}" style="position: relative; visibility:hidden; z-index: 100003;"><div id="uvw-overlay-background-#{id}" style="background: #000; -ms-filter: alpha(opacity=75); filter: alpha(opacity=75); opacity: .75; position: fixed; top: 0; right: 0; bottom: 0; left: 0;"></div><div class="uvOverlay2" style="height: 100%; overflow: auto; position: fixed; top: 0; right: 0; bottom: 0; left: 0;"><div class="uvOverlay3" style="height: 100%; min-height: 550px; min-width: 900px; position: relative; width: 100%;"><div id="#{dialog_id}" style="-webkit-box-shadow: rgba(0,0,0,.5) 0 5px 5px; height: 500px; margin: -250px 0 0 -444px; position: absolute; top: 50%; left: 50%; width: 888px;"><div id="#{dialog_close_id}" title="Close Dialog" style="z-index: 100004; background: transparent url(' + M + UserVoice.manifest.close + ') 0 0 no-repeat; height: 48px; margin: 0; padding: 0; position: absolute; top: -22px; right: -24px; width: 48px;"><button style="background: none; border: none; -moz-box-shadow: none; -webkit-box-shadow: none; box-shadow: none; cursor: pointer; height: 30px; margin: 6px 0 0 9px; padding: 0; width: 30px; text-indent: -9000px;">Close Dialog</button></div>' + '<div id="#{dialog_content_id}" style="position:static; width:100%; height:100%"></div>' + (UserVoice.account.campaign ? '<a id="uvw-dialog-powered-by-#{id}" href="http://www.uservoice.com/powered-by?uv_experience=classic&amp;uv_company_name=' + UserVoice.account.name + "&amp;uv_contact_url=" + UserVoice.account.subdomain_site_host + "&amp;utm_campaign=" + UserVoice.account.campaign + "&amp;utm_medium=widget2&amp;utm_source=" + UserVoice.account.subdomain_ssl_host + '" target="_blank" style="background: url(' + M + UserVoice.manifest.pb + ') 0 0 no-repeat; font-size: 11px; height: 20px; position: absolute; bottom: -25px; right: 10px; text-indent: -9000px; width: 150px;">Powered by UserVoice</a>' : "") + "</div></div></div></div>",
//                         this.id = A.uniqId(),
//                         this.dialog_id = "uvw-dialog-" + this.id,
//                         this.dialog_close_id = "uvw-dialog-close-" + this.id,
//                         this.dialog_content_id = "uvw-dialog-content-" + this.id,
//                         this.options = t
//                 }
//                 return o.prototype.toggle = function() {
//                         this.show()
//                     },
//                     o.prototype.show = function() {
//                         F.ie6 || F.touch || F.ieMobile || F.iOS || F.ieQuirks ? t.open(this.iframe.src, "uservoice_widget", "height=500,width=888,resizable=yes,scrollbars=1") : (this.initPopup(), this.overlay.style.visibility = "visible", this.overlay.style.display = "block", this.dialog.focus(), A.addClass(x(), "uvw-dialog-open"))
//                     },
//                     o.prototype.preload = function() {},
//                     o.prototype.hide = function() {
//                         this.iframe.poke("reset"),
//                             this.overlay && (this.overlay.style.display = "none"),
//                             A.removeClass(x(), "uvw-dialog-open")
//                     },
//                     o.prototype.initPopup = function() {
//                         if (this.overlay || (b(D), this.overlay = h(c(this.template, this))), this.iframe.poke("opened"), !this.dialog || this.dialog.getAttribute("data-widget-key") !== this.id) {
//                             for (this.iframe.render(), this.dialogContent = e.getElementById(this.dialog_content_id); this.dialogContent.firstChild;) this.dialogContent.removeChild(this.dialogContent.firstChild);
//                             this.dialogContent.appendChild(this.iframe.el),
//                                 this.dialog = e.getElementById(this.dialog_id),
//                                 this.dialog.setAttribute("data-widget-key", this.id);
//                             var t = this;
//                             A.on(e.getElementById(this.dialog_close_id), "click",
//                                 function() {
//                                     return t.hide()
//                                 })
//                         }
//                     },
//                     o
//             }(),
//             Q = function() {
//                 var i = {
//                     session: !1,
//                     syncedSession: !1
//                 };
//                 return i.setUvts = function(t) {
//                         i.uvts = t,
//                             $.sendUserData()
//                     },
//                     i.setEmail = function(t) {
//                         i.email = t,
//                             $.sendUserData()
//                     },
//                     i.addExternalUserId = function(t) {
//                         i.external_user_ids || (i.external_user_ids = []),
//                             i.external_user_ids.push(t),
//                             $.sendUserData()
//                     },
//                     i.setSession = function() {
//                         i.session = !0,
//                             i.pendingAutoprompt && (i.pendingAutoprompt = !1, i.autoprompt())
//                     },
//                     i.syncSession = function() {
//                         i.syncedSession = !0,
//                             i.pendingAutoprompt && (i.pendingAutoprompt = !1, i.autoprompt())
//                     },
//                     i.tracker = new U(UserVoice.account.subdomain_id, {
//                         channel: e.location.host === UserVoice.account.subdomain_site_host ? "site2" : "external",
//                         onUvts: i.setUvts,
//                         onSession: i.setSession,
//                         onSync: i.syncSession
//                     }),
//                     i.autoprompt = function() {
//                         if (F.mobile) return this.pendingAutoprompt = !1,
//                             void 0;
//                         if (this.session === !1 || this.systemTrigger && this.systemTrigger.el === o) return this.pendingAutoprompt = !0,
//                             void 0;
//                         var t = this.tracker.dumpSession(),
//                             e = this.shouldShowSatisfactionPrompt(t),
//                             s = this.shouldShowSmartVotePrompt(t);
//                         if (e || s) {
//                             if (this.syncedSession === !1) return this.pendingAutoprompt = !0,
//                                 this.tracker.syncSession(),
//                                 void 0;
//                             e && (i.recordAutoprompt("satisfaction"), this.tracker.updateSession({
//                                     dismissed_sat_at: (new Date).getTime()
//                                 }), i.pushSystemWidget({
//                                     mode: "satisfaction"
//                                 }), i.showAutoprompt({
//                                     mode: "satisfaction"
//                                 }), this.tracker.track("autoprompt", {},
//                                     "satisfaction_widget")),
//                                 s && (i.recordAutoprompt("smartvote"), this.tracker.updateSession({
//                                     dismissed_smartvote_at: (new Date).getTime()
//                                 }), i.showAutoprompt({
//                                     mode: "smartvote"
//                                 }), this.tracker.track("autoprompt", {},
//                                     "smartvote_widget"))
//                         }
//                     },
//                     i.shouldShowSatisfactionPrompt = function(t) {
//                         if (!UserVoice.account.satisfaction_autoprompt_enabled) return !1;
//                         if (t.autoprompt_disabled) return !1;
//                         var e = ((new Date).getTime(), Math.max(t.created_at || 0, this.lastSatisfactionPrompt(t))),
//                             o = this.lastSmartvotePrompt(t);
//                         return 0 !== e ? w(e) >= 60 && (0 === o || w(o) >= 21) : !1
//                     },
//                     i.shouldShowSmartVotePrompt = function(t) {
//                         if (!UserVoice.account.smartvote_autoprompt_enabled) return !1;
//                         if (t.autoprompt_disabled) return !1;
//                         var e = ((new Date).getTime(), this.lastSmartvotePrompt(t)),
//                             o = this.lastSatisfactionPrompt(t);
//                         return 0 !== e ? w(e) >= 42 && (0 === o || w(o) >= 21) : 7 === t.active_days && (0 === o || w(o) >= 21)
//                     },
//                     i.lastSatisfactionPrompt = function(t) {
//                         return Math.max(t.last_sat_at || 0, t.dismissed_sat_at || 0, t.autoprompted_satisfaction_at || 0)
//                     },
//                     i.lastSmartvotePrompt = function(t) {
//                         return Math.max(t.last_smartvote_at || 0, t.dismissed_smartvote_at || 0, t.autoprompted_smartvote_at || 0)
//                     },
//                     i.scan = function() {
//                         var t, o = s(e.getElementsByTagName("*"));
//                         t = function(t, e, o) {
//                             var s = t.getAttribute(e);
//                             t.hasAttribute && t.hasAttribute(e) && !t.getAttribute("data-uv-scanned") && (t.setAttribute("data-uv-scanned", "true"), o(t, s, i.extractOptions(t)))
//                         };
//                         for (var n = 0; n < o.length; n++) {
//                             var r = o[n];
//                             t(r, "data-uv-inline", this.renderInline),
//                                 t(r, "data-uv-embed", this.renderInline),
//                                 t(r, "data-uv-lightbox", this.linkToLightbox),
//                                 t(r, "data-uv-show", this.linkToPopover),
//                                 t(r, "data-uv-trigger", this.linkToPopover)
//                         }
//                     },
//                     i.renderInline = function(t, e, o) {
//                         "classic_widget" === e ? new q(t, k(e, o)) : new q(t, T({
//                                 mode: e,
//                                 contact_enabled: !0,
//                                 post_suggestion_enabled: !0,
//                                 smartvote_enabled: !0,
//                                 feedback_enabled: !0
//                             },
//                             o))
//                     },
//                     i.linkToLightbox = function(t, e, o) {
//                         i.createCustomTrigger(t, T({
//                                 target: "lightbox"
//                             },
//                             k(e, o)))
//                     },
//                     i.linkToPopover = function(t, e, o) {
//                         i.createCustomTrigger(t, T({
//                                 mode: e
//                             },
//                             o))
//                     },
//                     i.extractOptions = function(t) {
//                         for (var e = {},
//                                 o = 0; o < t.attributes.length; o++) {
//                             var i = t.attributes[o],
//                                 s = i.value;
//                             i.specified && i.name.match(/^data-uv-/) && (s.match(/^(true|false)$/) && (s = "true" === s), e[i.name.replace(/^data-uv-/, "").replace(/-/g, "_")] = s)
//                         }
//                         return e
//                     },
//                     i.processModeOptions = function(t) {
//                         return t.mode = t.mode || (t.contact_enabled ? "contact" : t.smartvote_enabled ? "smartvote" : "post_suggestion"),
//                             t.mode.match(/instant/) && (t.mode = "contact"),
//                             "post_idea" === t.mode && (t.mode = "post_suggestion"),
//                             t.widgetType = "classic_widget" === t.mode ? t.mode : "omnibox",
//                             t
//                     },
//                     i.active = null,
//                     i.hideActive = function() {
//                         i.active && i.active.hide()
//                     },
//                     i.createCustomTrigger = function(t, e) {
//                         var o = new H(t, T({
//                                     trigger_prevent_default_enabled: !0
//                                 },
//                                 UserVoice.globalOptions, e)),
//                             s = i.createWidget(T({
//                                     trigger_method: "custom_trigger"
//                                 },
//                                 e), o);
//                         return e && e.autoprompt && (i.autopromptOptions = T({
//                                     target: t
//                                 },
//                                 Widget.autopromptOptions || {})),
//                             o.widget = s,
//                             o.render(),
//                             o
//                     },
//                     i.createSystemTrigger = function(t) {
//                         var e = T({
//                                     trigger_color: "white"
//                                 },
//                                 UserVoice.globalOptions, t || {}),
//                             o = e.trigger_style || "icon",
//                             s = "icon" === o ? new J(e) : new L(e),
//                             n = i.createWidget(T({
//                                     trigger_method: "pin"
//                                 },
//                                 t), s);
//                         if (!(F.ie && F.version < 8 && "icon" === o)) return s.push(n),
//                             s.render(),
//                             s
//                     },
//                     i.createWidget = function(t, e) {
//                         var o = {
//                                 target: "self",
//                                 contact_enabled: !0,
//                                 post_suggestion_enabled: !0,
//                                 smartvote_enabled: !0,
//                                 feedback_enabled: !0
//                             },
//                             s = i.processModeOptions(T(o, UserVoice.globalOptions, t));
//                         return F.mobile && (s.mobile = !0),
//                             "lightbox" === s.target || "classic_widget" === s.mode ? new K(s, e) : s.target === !1 || "self" === s.target && !e ? (s.position = s.position || "bottom-right", new B(s, e)) : (s.position && s.position.match(/^(automatic|top|bottom|left|right)$/) || (s.position = "automatic"), F.mobile ? new B(s, e) : new R(s, e))
//                     },
//                     i.showWidget = function(t) {
//                         i.createWidget(T({
//                                 temp: !0
//                             },
//                             t), i.systemTrigger).show()
//                     },
//                     i.showAutoprompt = function(t) {
//                         i.showWidget(T({
//                                 trigger_method: "autoprompt"
//                             },
//                             i.autopromptOptions || {},
//                             t))
//                     },
//                     i.pushSystemWidget = function(t) {
//                         i.systemTrigger && i.systemTrigger.push(i.createWidget(t, i.systemTrigger))
//                     },
//                     i.recordAutoprompt = function(t) {
//                         var o = i.tracker.getIdentity() || {},
//                             s = {
//                                 "audit[prompt_type]": t,
//                                 "audit[uvts]": i.uvts,
//                                 "audit[session_data]": JSON.stringify(i.tracker.dumpSession()),
//                                 "audit[external_user_id]": o.id,
//                                 "audit[email]": o.email
//                             },
//                             n = e.getElementsByTagName("script")[0],
//                             r = e.createElement("script");
//                         r.type = "application/javascript",
//                             r.async = !0,
//                             r.defer = !0,
//                             r.src = "http://" + UserVoice.account.subdomain_ssl_host + "/clients/widgets/omnibox/autoprompts/create.json?" + g(s),
//                             n.parentNode.insertBefore(r, n)
//                     },
//                     i.includeCss = function() {
//                         b(E)
//                     },
//                     new V({
//                         openPane: function(t) {
//                             i.active && i.active.paneOpened(t[0], t[1])
//                         },
//                         close: function() {
//                             i.active && i.active.hide()
//                         },
//                         dismiss: function() {
//                             i.active && i.active.hide()
//                         },
//                         voteSubmitted: function() {
//                             i.tracker.updateSession({
//                                 last_smartvote_at: (new Date).getTime()
//                             })
//                         },
//                         ratingSubmitted: function() {
//                             i.systemTrigger && i.systemTrigger.pop(),
//                                 i.tracker.updateSession({
//                                     last_sat_at: (new Date).getTime()
//                                 })
//                         },
//                         captureScreenshot: function(o, i, s) {
//                             ("http://widget.uservoice.com" === s || "https://widget.uservoice.com" === s) && (t.html2canvas_onload_options = {
//                                     onrendered: function(t) {
//                                         var e = t.toDataURL("image/png");
//                                         if (e) {
//                                             var n = e.split(",", 2)[1];
//                                             i.postMessage(JSON.stringify({
//                                                 identifier: o,
//                                                 content_type: "image/png",
//                                                 base64data: n,
//                                                 width: t.width,
//                                                 height: t.height
//                                             }), s)
//                                         }
//                                     }
//                                 },
//                                 function() {
//                                     var t = e.createElement("script");
//                                     t.type = "text/javascript",
//                                         t.async = !0,
//                                         t.src = "//assets.uvcdn.com" + UserVoice.manifest.screenshot + "?" + o;
//                                     var i = e.getElementsByTagName("head")[0];
//                                     i.appendChild(t)
//                                 }())
//                         }
//                     }).listen(),
//                     i
//             }();
//         UserVoice.globalOptions = {},
//             UserVoice.push = function(t) {
//                 var e = t[0],
//                     o = t.slice(1);
//                 "function" == typeof UserVoice[e] && UserVoice[e].apply(null, o)
//             },
//             UserVoice.set = function(t, e) {
//                 if ("object" == typeof t) UserVoice.globalOptions = m(UserVoice.globalOptions, t);
//                 else {
//                     var o = {};
//                     o[t] = e,
//                         UserVoice.set(o)
//                 }
//             },
//             UserVoice.embed = function() {
//                 var t = arguments[0],
//                     e = arguments[1],
//                     s = arguments[2];
//                 return ("string" != typeof t || "#" === t[0]) && (e = arguments[0], s = arguments[1], t = null),
//                     e === o ? i("please specify where to embed it.") : (Q.renderInline(A.element(e), t, s), void 0)
//             },
//             UserVoice.addTrigger = function(t, e) {
//                 if (t && t.nodeName || "string" == typeof t) {
//                     if (F.ie && F.version < 8) return;
//                     Q.createCustomTrigger(A.element(t), e)
//                 } else e = t || {},
//                     Q.systemTrigger && Q.systemTrigger.remove(),
//                     Q.systemTrigger = Q.createSystemTrigger(_(e))
//             },
//             UserVoice.show = function(t) {
//                 "string" == typeof arguments[0] && (t = T({
//                             mode: arguments[0]
//                         },
//                         arguments[1] || {})),
//                     Q.showWidget(T({
//                             trigger_method: "show"
//                         },
//                         t || {}))
//             },
//             UserVoice.hide = function() {
//                 Q.hideActive()
//             },
//             UserVoice.removeTrigger = function(t) {
//                 t ? A.data(A.element(t), "trigger").remove() : (Q.systemTrigger.remove(), Q.systemTrigger = null)
//             },
//             UserVoice.autoprompt = function(t) {
//                 Q.autopromptOptions = t,
//                     Q.autoprompt()
//             },
//             UserVoice.identify = function(t) {
//                 Q.tracker.identify(t),
//                     t && t.email && Q.setEmail(t.email)
//             },
//             UserVoice.track = function(t, e) {
//                 Q.tracker.track(t, e)
//             },
//             UserVoice.footprint = function(t) {
//                 Q.tracker.setConfig({
//                     enabled: t
//                 })
//             },
//             UserVoice.scan = function() {
//                 Q.scan()
//             },
//             UserVoice.addExternalUserId = function(t) {
//                 Q.addExternalUserId(t)
//             },
//             UserVoice.setOption = UserVoice.setOptions = UserVoice.set,
//             UserVoice.setSSO = function(t) {
//                 UserVoice.set("sso", t)
//             },
//             UserVoice.setCustomFields = function(t) {
//                 UserVoice.set("ticket_custom_fields", t)
//             },
//             UserVoice.setLocale = function(t) {
//                 UserVoice.set("locale", t)
//             },
//             UserVoice.showPrompt = UserVoice.showPopover = UserVoice.show,
//             UserVoice.showLightbox = function(t, e) {
//                 Q.showWidget(T({
//                         target: "lightbox"
//                     },
//                     k(t, e)))
//             },
//             UserVoice.hideLightbox = function() {},
//             UserVoice.showIcon = UserVoice.pin = function(t, e) {
//                 e && (e.trigger_position = e.position, e.position = "automatic"),
//                     UserVoice.addTrigger(T({
//                             mode: t,
//                             trigger_style: "icon"
//                         },
//                         e || {}))
//             },
//             UserVoice.showTab = function(t, e) {
//                 UserVoice.addTrigger(T({
//                         trigger_style: "tab"
//                     },
//                     k(t, e)))
//             },
//             Q.includeCss();
//         for (var Z = 0; Z < UserVoice.events.length; Z++) UserVoice.push(UserVoice.events[Z]);
//         Q.scan(),
//             A.ready(C)
//     }(window, document);