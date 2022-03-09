/*!
 * jQuery JavaScript Library v3.6.0
 * https://jquery.com/
 *
 * Includes Sizzle.js
 * https://sizzlejs.com/
 *
 * Copyright OpenJS Foundation and other contributors
 * Released under the MIT license
 * https://jquery.org/license
 *
 * Date: 2021-03-02T17:08Z
 */
(function(g, f) {
	"use strict";
	if (typeof module === "object" && typeof module.exports === "object") {
		module.exports = g.document ? f(g, true) : function(w) {
			if (!w.document) {
				throw new Error("jQuery requires a window with a document");
			}
			return f(w);
		};
	} else {
		f(g);
	}
})(typeof window !== "undefined" ? window : this, function(w, c) {
	"use strict";
	var d = [];
	var g = Object.getPrototypeOf;
	var f = d.slice;
	var h = d.flat ? function(a) {
		return d.flat.call(a);
	} : function(a) {
		return d.concat.apply([], a);
	};
	var k = d.push;
	var o = d.indexOf;
	var q = {};
	var r = q.toString;
	var u = q.hasOwnProperty;
	var T = u.toString;
	var O = T.call(Object);
	var x = {};
	var y = function y(a) {
		return typeof a === "function" && typeof a.nodeType !== "number" && typeof a.item !== "function";
	};
	var z = function z(a) {
		return a != null && a === a.window;
	};
	var A = w.document;
	var B = {
		type: true,
		src: true,
		nonce: true,
		noModule: true
	};

	function D(a, n, b) {
		b = b || A;
		var i, v, s = b.createElement("script");
		s.text = a;
		if (n) {
			for (i in B) {
				v = n[i] || n.getAttribute && n.getAttribute(i);
				if (v) {
					s.setAttribute(i, v);
				}
			}
		}
		b.head.appendChild(s).parentNode.removeChild(s);
	}

	function C(a) {
		if (a == null) {
			return a + "";
		}
		return typeof a === "object" || typeof a === "function" ? q[r.call(a)] || "object" : typeof a;
	}
	var E = "3.6.0",
		Q = function(s, a) {
			return new Q.fn.init(s, a);
		};
	Q.fn = Q.prototype = {
		jquery: E,
		constructor: Q,
		length: 0,
		toArray: function() {
			return f.call(this);
		},
		get: function(n) {
			if (n == null) {
				return f.call(this);
			}
			return n < 0 ? this[n + this.length] : this[n];
		},
		pushStack: function(e) {
			var a = Q.merge(this.constructor(), e);
			a.prevObject = this;
			return a;
		},
		each: function(a) {
			return Q.each(this, a);
		},
		map: function(a) {
			return this.pushStack(Q.map(this, function(e, i) {
				return a.call(e, i, e);
			}));
		},
		slice: function() {
			return this.pushStack(f.apply(this, arguments));
		},
		first: function() {
			return this.eq(0);
		},
		last: function() {
			return this.eq(-1);
		},
		even: function() {
			return this.pushStack(Q.grep(this, function(_, i) {
				return (i + 1) % 2;
			}));
		},
		odd: function() {
			return this.pushStack(Q.grep(this, function(_, i) {
				return i % 2;
			}));
		},
		eq: function(i) {
			var l = this.length,
				j = +i + (i < 0 ? l : 0);
			return this.pushStack(j >= 0 && j < l ? [this[j]] : []);
		},
		end: function() {
			return this.prevObject || this.constructor();
		},
		push: k,
		sort: d.sort,
		splice: d.splice
	};
	Q.extend = Q.fn.extend = function() {
		var a, n, s, b, e, j, t = arguments[0] || {},
			i = 1,
			l = arguments.length,
			m = false;
		if (typeof t === "boolean") {
			m = t;
			t = arguments[i] || {};
			i++;
		}
		if (typeof t !== "object" && !y(t)) {
			t = {};
		}
		if (i === l) {
			t = this;
			i--;
		}
		for (; i < l; i++) {
			if ((a = arguments[i]) != null) {
				for (n in a) {
					b = a[n];
					if (n === "__proto__" || t === b) {
						continue;
					}
					if (m && b && (Q.isPlainObject(b) || (e = Array.isArray(b)))) {
						s = t[n];
						if (e && !Array.isArray(s)) {
							j = [];
						} else if (!e && !Q.isPlainObject(s)) {
							j = {};
						} else {
							j = s;
						}
						e = false;
						t[n] = Q.extend(m, j, b);
					} else if (b !== undefined) {
						t[n] = b;
					}
				}
			}
		}
		return t;
	};
	Q.extend({
		expando: "jQuery" + (E + Math.random()).replace(/\D/g, ""),
		isReady: true,
		error: function(m) {
			throw new Error(m);
		},
		noop: function() {},
		isPlainObject: function(a) {
			var p, b;
			if (!a || r.call(a) !== "[object Object]") {
				return false;
			}
			p = g(a);
			if (!p) {
				return true;
			}
			b = u.call(p, "constructor") && p.constructor;
			return typeof b === "function" && T.call(b) === O;
		},
		isEmptyObject: function(a) {
			var n;
			for (n in a) {
				return false;
			}
			return true;
		},
		globalEval: function(a, b, e) {
			D(a, {
				nonce: b && b.nonce
			}, e);
		},
		each: function(a, b) {
			var l, i = 0;
			if (F(a)) {
				l = a.length;
				for (; i < l; i++) {
					if (b.call(a[i], i, a[i]) === false) {
						break;
					}
				}
			} else {
				for (i in a) {
					if (b.call(a[i], i, a[i]) === false) {
						break;
					}
				}
			}
			return a;
		},
		makeArray: function(d, a) {
			var b = a || [];
			if (d != null) {
				if (F(Object(d))) {
					Q.merge(b, typeof d === "string" ? [d] : d);
				} else {
					k.call(b, d);
				}
			}
			return b;
		},
		inArray: function(e, d, i) {
			return d == null ? -1 : o.call(d, e, i);
		},
		merge: function(a, s) {
			var l = +s.length,
				j = 0,
				i = a.length;
			for (; j < l; j++) {
				a[i++] = s[j];
			}
			a.length = i;
			return a;
		},
		grep: function(e, a, b) {
			var j, m = [],
				i = 0,
				l = e.length,
				n = !b;
			for (; i < l; i++) {
				j = !a(e[i], i);
				if (j !== n) {
					m.push(e[i]);
				}
			}
			return m;
		},
		map: function(e, a, b) {
			var l, v, i = 0,
				j = [];
			if (F(e)) {
				l = e.length;
				for (; i < l; i++) {
					v = a(e[i], i, b);
					if (v != null) {
						j.push(v);
					}
				}
			} else {
				for (i in e) {
					v = a(e[i], i, b);
					if (v != null) {
						j.push(v);
					}
				}
			}
			return h(j);
		},
		guid: 1,
		support: x
	});
	if (typeof Symbol === "function") {
		Q.fn[Symbol.iterator] = d[Symbol.iterator];
	}
	Q.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(_, n) {
		q["[object " + n + "]"] = n.toLowerCase();
	});

	function F(a) {
		var l = !!a && "length" in a && a.length,
			t = C(a);
		if (y(a) || z(a)) {
			return false;
		}
		return t === "array" || l === 0 || typeof l === "number" && l > 0 && (l - 1) in a;
	}
	var S =
		/*!
		 * Sizzle CSS Selector Engine v2.3.6
		 * https://sizzlejs.com/
		 *
		 * Copyright JS Foundation and other contributors
		 * Released under the MIT license
		 * https://js.foundation/
		 *
		 * Date: 2021-02-16
		 */
		(function(w) {
			var i, x, l, n, p, t, s, v, _, O1, $1, $2, A, s3, t3, u3, v3, w3, x3, y3 = "sizzle" + 1 * new Date(),
				z3 = w.document,
				A3 = 0,
				B3 = 0,
				C3 = d4(),
				D3 = d4(),
				E3 = d4(),
				F3 = d4(),
				G3 = function(a, b) {
					if (a === b) {
						$1 = true;
					}
					return 0;
				},
				u = ({}).hasOwnProperty,
				d = [],
				H3 = d.pop,
				I3 = d.push,
				k = d.push,
				f = d.slice,
				o = function(a, b) {
					var i = 0,
						j = a.length;
					for (; i < j; i++) {
						if (a[i] === b) {
							return i;
						}
					}
					return -1;
				},
				J3 = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|" +
				"ismap|loop|multiple|open|readonly|required|scoped",
				K3 = "[\\x20\\t\\r\\n\\f]",
				L3 = "(?:\\\\[\\da-fA-F]{1,6}" + K3 + "?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",
				M3 = "\\[" + K3 + "*(" + L3 + ")(?:" + K3 + "*([*^$|!~]?=)" + K3 + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + L3 +
				"))|)" + K3 + "*\\]",
				N3 = ":(" + L3 + ")(?:\\((" + "('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|" + "((?:\\\\.|[^\\\\()[\\]]|" + M3 + ")*)|" +
				".*" + ")\\)|)",
				O3 = new RegExp(K3 + "+", "g"),
				q3 = new RegExp("^" + K3 + "+|((?:^|[^\\\\])(?:\\\\.)*)" + K3 + "+$", "g"),
				P3 = new RegExp("^" + K3 + "*," + K3 + "*"),
				Q3 = new RegExp("^" + K3 + "*([>+~]|" + K3 + ")" + K3 + "*"),
				R3 = new RegExp(K3 + "|>"),
				S3 = new RegExp(N3),
				T3 = new RegExp("^" + L3 + "$"),
				U3 = {
					"ID": new RegExp("^#(" + L3 + ")"),
					"CLASS": new RegExp("^\\.(" + L3 + ")"),
					"TAG": new RegExp("^(" + L3 + "|[*])"),
					"ATTR": new RegExp("^" + M3),
					"PSEUDO": new RegExp("^" + N3),
					"CHILD": new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + K3 + "*(even|odd|(([+-]|)(\\d*)n|)" + K3 +
						"*(?:([+-]|)" + K3 + "*(\\d+)|))" + K3 + "*\\)|)", "i"),
					"bool": new RegExp("^(?:" + J3 + ")$", "i"),
					"needsContext": new RegExp("^" + K3 + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + K3 + "*((?:-\\d)?\\d*)" + K3 +
						"*\\)|)(?=[^-]|$)", "i")
				},
				H1 = /HTML$/i,
				V3 = /^(?:input|select|textarea|button)$/i,
				W3 = /^h\d$/i,
				X3 = /^[^{]+\{\s*\[native \w/,
				N = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
				Y3 = /[+~]/,
				Z3 = new RegExp("\\\\[\\da-fA-F]{1,6}" + K3 + "?|\\\\([^\\r\\n\\f])", "g"),
				$3 = function(a, b) {
					var j = "0x" + a.slice(1) - 0x10000;
					return b ? b : j < 0 ? String.fromCharCode(j + 0x10000) : String.fromCharCode(j >> 10 | 0xD800, j & 0x3FF | 0xDC00);
				},
				_3 = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
				a4 = function(a, b) {
					if (b) {
						if (a === "\0") {
							return "\uFFFD";
						}
						return a.slice(0, -1) + "\\" + a.charCodeAt(a.length - 1).toString(16) + " ";
					}
					return "\\" + a;
				},
				b4 = function() {
					$2();
				},
				c4 = p4(function(a) {
					return a.disabled === true && a.nodeName.toLowerCase() === "fieldset";
				}, {
					dir: "parentNode",
					next: "legend"
				});
			try {
				k.apply((d = f.call(z3.childNodes)), z3.childNodes);
				d[z3.childNodes.length].nodeType;
			} catch (e) {
				k = {
					apply: d.length ? function(a, b) {
						I3.apply(a, f.call(b));
					} : function(a, b) {
						var j = a.length,
							i = 0;
						while ((a[j++] = b[i++])) {}
						a.length = j - 1;
					}
				};
			}

			function S(a, b, j, w4) {
				var m, i, x4, y4, z4, A4, B4, C4 = b && b.ownerDocument,
					D4 = b ? b.nodeType : 9;
				j = j || [];
				if (typeof a !== "string" || !a || D4 !== 1 && D4 !== 9 && D4 !== 11) {
					return j;
				}
				if (!w4) {
					$2(b);
					b = b || A;
					if (t3) {
						if (D4 !== 11 && (z4 = N.exec(a))) {
							if ((m = z4[1])) {
								if (D4 === 9) {
									if ((x4 = b.getElementById(m))) {
										if (x4.id === m) {
											j.push(x4);
											return j;
										}
									} else {
										return j;
									}
								} else {
									if (C4 && (x4 = C4.getElementById(m)) && x3(b, x4) && x4.id === m) {
										j.push(x4);
										return j;
									}
								}
							} else if (z4[2]) {
								k.apply(j, b.getElementsByTagName(a));
								return j;
							} else if ((m = z4[3]) && x.getElementsByClassName && b.getElementsByClassName) {
								k.apply(j, b.getElementsByClassName(m));
								return j;
							}
						}
						if (x.qsa && !F3[a + " "] && (!u3 || !u3.test(a)) && (D4 !== 1 || b.nodeName.toLowerCase() !== "object")) {
							B4 = a;
							C4 = b;
							if (D4 === 1 && (R3.test(a) || Q3.test(a))) {
								C4 = Y3.test(a) && m4(b.parentNode) || b;
								if (C4 !== b || !x.scope) {
									if ((y4 = b.getAttribute("id"))) {
										y4 = y4.replace(_3, a4);
									} else {
										b.setAttribute("id", (y4 = y3));
									}
								}
								A4 = t(a);
								i = A4.length;
								while (i--) {
									A4[i] = (y4 ? "#" + y4 : ":scope") + " " + o4(A4[i]);
								}
								B4 = A4.join(",");
							}
							try {
								k.apply(j, C4.querySelectorAll(B4));
								return j;
							} catch (E4) {
								F3(a, true);
							} finally {
								if (y4 === y3) {
									b.removeAttribute("id");
								}
							}
						}
					}
				}
				return v(a.replace(q3, "$1"), b, j, w4);
			}

			function d4() {
				var a = [];

				function b(j, m) {
					if (a.push(j + " ") > l.cacheLength) {
						delete b[a.shift()];
					}
					return (b[j + " "] = m);
				}
				return b;
			}

			function e4(a) {
				a[y3] = true;
				return a;
			}

			function f4(a) {
				var b = A.createElement("fieldset");
				try {
					return !!a(b);
				} catch (e) {
					return false;
				} finally {
					if (b.parentNode) {
						b.parentNode.removeChild(b);
					}
					b = null;
				}
			}

			function g4(a, b) {
				var d = a.split("|"),
					i = d.length;
				while (i--) {
					l.attrHandle[d[i]] = b;
				}
			}

			function h4(a, b) {
				var j = b && a,
					m = j && a.nodeType === 1 && b.nodeType === 1 && a.sourceIndex - b.sourceIndex;
				if (m) {
					return m;
				}
				if (j) {
					while ((j = j.nextSibling)) {
						if (j === b) {
							return -1;
						}
					}
				}
				return a ? 1 : -1;
			}

			function i4(a) {
				return function(b) {
					var j = b.nodeName.toLowerCase();
					return j === "input" && b.type === a;
				};
			}

			function j4(a) {
				return function(b) {
					var j = b.nodeName.toLowerCase();
					return (j === "input" || j === "button") && b.type === a;
				};
			}

			function k4(a) {
				return function(b) {
					if ("form" in b) {
						if (b.parentNode && b.disabled === false) {
							if ("label" in b) {
								if ("label" in b.parentNode) {
									return b.parentNode.disabled === a;
								} else {
									return b.disabled === a;
								}
							}
							return b.isDisabled === a || b.isDisabled !== !a && c4(b) === a;
						}
						return b.disabled === a;
					} else if ("label" in b) {
						return b.disabled === a;
					}
					return false;
				};
			}

			function l4(a) {
				return e4(function(b) {
					b = +b;
					return e4(function(m, w3) {
						var j, w4 = a([], m.length, b),
							i = w4.length;
						while (i--) {
							if (m[(j = w4[i])]) {
								m[j] = !(w3[j] = m[j]);
							}
						}
					});
				});
			}

			function m4(a) {
				return a && typeof a.getElementsByTagName !== "undefined" && a;
			}
			x = S.support = {};
			p = S.isXML = function(a) {
				var b = a && a.namespaceURI,
					s3 = a && (a.ownerDocument || a).documentElement;
				return !H1.test(b || s3 && s3.nodeName || "HTML");
			};
			$2 = S.setDocument = function(j) {
				var m, w4, x4 = j ? j.ownerDocument || j : z3;
				if (x4 == A || x4.nodeType !== 9 || !x4.documentElement) {
					return A;
				}
				A = x4;
				s3 = A.documentElement;
				t3 = !p(A);
				if (z3 != A && (w4 = A.defaultView) && w4.top !== w4) {
					if (w4.addEventListener) {
						w4.addEventListener("unload", b4, false);
					} else if (w4.attachEvent) {
						w4.attachEvent("onunload", b4);
					}
				}
				x.scope = f4(function(a) {
					s3.appendChild(a).appendChild(A.createElement("div"));
					return typeof a.querySelectorAll !== "undefined" && !a.querySelectorAll(":scope fieldset div").length;
				});
				x.attributes = f4(function(a) {
					a.className = "i";
					return !a.getAttribute("className");
				});
				x.getElementsByTagName = f4(function(a) {
					a.appendChild(A.createComment(""));
					return !a.getElementsByTagName("*").length;
				});
				x.getElementsByClassName = X3.test(A.getElementsByClassName);
				x.getById = f4(function(a) {
					s3.appendChild(a).id = y3;
					return !A.getElementsByName || !A.getElementsByName(y3).length;
				});
				if (x.getById) {
					l.filter["ID"] = function(a) {
						var b = a.replace(Z3, $3);
						return function(y4) {
							return y4.getAttribute("id") === b;
						};
					};
					l.find["ID"] = function(a, b) {
						if (typeof b.getElementById !== "undefined" && t3) {
							var y4 = b.getElementById(a);
							return y4 ? [y4] : [];
						}
					};
				} else {
					l.filter["ID"] = function(a) {
						var b = a.replace(Z3, $3);
						return function(y4) {
							var j = typeof y4.getAttributeNode !== "undefined" && y4.getAttributeNode("id");
							return j && j.value === b;
						};
					};
					l.find["ID"] = function(a, b) {
						if (typeof b.getElementById !== "undefined" && t3) {
							var j, i, y4, z4 = b.getElementById(a);
							if (z4) {
								j = z4.getAttributeNode("id");
								if (j && j.value === a) {
									return [z4];
								}
								y4 = b.getElementsByName(a);
								i = 0;
								while ((z4 = y4[i++])) {
									j = z4.getAttributeNode("id");
									if (j && j.value === a) {
										return [z4];
									}
								}
							}
							return [];
						}
					};
				}
				l.find["TAG"] = x.getElementsByTagName ? function(a, b) {
					if (typeof b.getElementsByTagName !== "undefined") {
						return b.getElementsByTagName(a);
					} else if (x.qsa) {
						return b.querySelectorAll(a);
					}
				} : function(a, b) {
					var y4, z4 = [],
						i = 0,
						A4 = b.getElementsByTagName(a);
					if (a === "*") {
						while ((y4 = A4[i++])) {
							if (y4.nodeType === 1) {
								z4.push(y4);
							}
						}
						return z4;
					}
					return A4;
				};
				l.find["CLASS"] = x.getElementsByClassName && function(a, b) {
					if (typeof b.getElementsByClassName !== "undefined" && t3) {
						return b.getElementsByClassName(a);
					}
				};
				v3 = [];
				u3 = [];
				if ((x.qsa = X3.test(A.querySelectorAll))) {
					f4(function(a) {
						var b;
						s3.appendChild(a).innerHTML = "<a id='" + y3 + "'></a>" + "<select id='" + y3 + "-\r\\' msallowcapture=''>" +
							"<option selected=''></option></select>";
						if (a.querySelectorAll("[msallowcapture^='']").length) {
							u3.push("[*^$]=" + K3 + "*(?:''|\"\")");
						}
						if (!a.querySelectorAll("[selected]").length) {
							u3.push("\\[" + K3 + "*(?:value|" + J3 + ")");
						}
						if (!a.querySelectorAll("[id~=" + y3 + "-]").length) {
							u3.push("~=");
						}
						b = A.createElement("input");
						b.setAttribute("name", "");
						a.appendChild(b);
						if (!a.querySelectorAll("[name='']").length) {
							u3.push("\\[" + K3 + "*name" + K3 + "*=" + K3 + "*(?:''|\"\")");
						}
						if (!a.querySelectorAll(":checked").length) {
							u3.push(":checked");
						}
						if (!a.querySelectorAll("a#" + y3 + "+*").length) {
							u3.push(".#.+[+~]");
						}
						a.querySelectorAll("\\\f");
						u3.push("[\\r\\n\\f]");
					});
					f4(function(a) {
						a.innerHTML = "<a href='' disabled='disabled'></a>" + "<select disabled='disabled'><option/></select>";
						var b = A.createElement("input");
						b.setAttribute("type", "hidden");
						a.appendChild(b).setAttribute("name", "D");
						if (a.querySelectorAll("[name=d]").length) {
							u3.push("name" + K3 + "*[*^$|!~]?=");
						}
						if (a.querySelectorAll(":enabled").length !== 2) {
							u3.push(":enabled", ":disabled");
						}
						s3.appendChild(a).disabled = true;
						if (a.querySelectorAll(":disabled").length !== 2) {
							u3.push(":enabled", ":disabled");
						}
						a.querySelectorAll("*,:x");
						u3.push(",.*:");
					});
				}
				if ((x.matchesSelector = X3.test((w3 = s3.matches || s3.webkitMatchesSelector || s3.mozMatchesSelector || s3.oMatchesSelector || s3.msMatchesSelector)))) {
					f4(function(a) {
						x.disconnectedMatch = w3.call(a, "*");
						w3.call(a, "[s!='']:x");
						v3.push("!=", N3);
					});
				}
				u3 = u3.length && new RegExp(u3.join("|"));
				v3 = v3.length && new RegExp(v3.join("|"));
				m = X3.test(s3.compareDocumentPosition);
				x3 = m || X3.test(s3.contains) ? function(a, b) {
					var y4 = a.nodeType === 9 ? a.documentElement : a,
						z4 = b && b.parentNode;
					return a === z4 || !!(z4 && z4.nodeType === 1 && (y4.contains ? y4.contains(z4) : a.compareDocumentPosition && a.compareDocumentPosition(
						z4) & 16));
				} : function(a, b) {
					if (b) {
						while ((b = b.parentNode)) {
							if (b === a) {
								return true;
							}
						}
					}
					return false;
				};
				G3 = m ? function(a, b) {
					if (a === b) {
						$1 = true;
						return 0;
					}
					var y4 = !a.compareDocumentPosition - !b.compareDocumentPosition;
					if (y4) {
						return y4;
					}
					y4 = (a.ownerDocument || a) == (b.ownerDocument || b) ? a.compareDocumentPosition(b) : 1;
					if (y4 & 1 || (!x.sortDetached && b.compareDocumentPosition(a) === y4)) {
						if (a == A || a.ownerDocument == z3 && x3(z3, a)) {
							return -1;
						}
						if (b == A || b.ownerDocument == z3 && x3(z3, b)) {
							return 1;
						}
						return O1 ? (o(O1, a) - o(O1, b)) : 0;
					}
					return y4 & 4 ? -1 : 1;
				} : function(a, b) {
					if (a === b) {
						$1 = true;
						return 0;
					}
					var y4, i = 0,
						z4 = a.parentNode,
						A4 = b.parentNode,
						ap = [a],
						bp = [b];
					if (!z4 || !A4) {
						return a == A ? -1 : b == A ? 1 : z4 ? -1 : A4 ? 1 : O1 ? (o(O1, a) - o(O1, b)) : 0;
					} else if (z4 === A4) {
						return h4(a, b);
					}
					y4 = a;
					while ((y4 = y4.parentNode)) {
						ap.unshift(y4);
					}
					y4 = b;
					while ((y4 = y4.parentNode)) {
						bp.unshift(y4);
					}
					while (ap[i] === bp[i]) {
						i++;
					}
					return i ? h4(ap[i], bp[i]) : ap[i] == z3 ? -1 : bp[i] == z3 ? 1 : 0;
				};
				return A;
			};
			S.matches = function(a, b) {
				return S(a, null, null, b);
			};
			S.matchesSelector = function(a, b) {
				$2(a);
				if (x.matchesSelector && t3 && !F3[b + " "] && (!v3 || !v3.test(b)) && (!u3 || !u3.test(b))) {
					try {
						var j = w3.call(a, b);
						if (j || x.disconnectedMatch || a.document && a.document.nodeType !== 11) {
							return j;
						}
					} catch (e) {
						F3(b, true);
					}
				}
				return S(b, A, null, [a]).length > 0;
			};
			S.contains = function(a, b) {
				if ((a.ownerDocument || a) != A) {
					$2(a);
				}
				return x3(a, b);
			};
			S.attr = function(a, b) {
				if ((a.ownerDocument || a) != A) {
					$2(a);
				}
				var j = l.attrHandle[b.toLowerCase()],
					m = j && u.call(l.attrHandle, b.toLowerCase()) ? j(a, b, !t3) : undefined;
				return m !== undefined ? m : x.attributes || !t3 ? a.getAttribute(b) : (m = a.getAttributeNode(b)) && m.specified ? m.value : null;
			};
			S.escape = function(a) {
				return (a + "").replace(_3, a4);
			};
			S.error = function(m) {
				throw new Error("Syntax error, unrecognized expression: " + m);
			};
			S.uniqueSort = function(a) {
				var b, m = [],
					j = 0,
					i = 0;
				$1 = !x.detectDuplicates;
				O1 = !x.sortStable && a.slice(0);
				a.sort(G3);
				if ($1) {
					while ((b = a[i++])) {
						if (b === a[i]) {
							j = m.push(i);
						}
					}
					while (j--) {
						a.splice(m[j], 1);
					}
				}
				O1 = null;
				return a;
			};
			n = S.getText = function(a) {
				var b, j = "",
					i = 0,
					m = a.nodeType;
				if (!m) {
					while ((b = a[i++])) {
						j += n(b);
					}
				} else if (m === 1 || m === 9 || m === 11) {
					if (typeof a.textContent === "string") {
						return a.textContent;
					} else {
						for (a = a.firstChild; a; a = a.nextSibling) {
							j += n(a);
						}
					}
				} else if (m === 3 || m === 4) {
					return a.nodeValue;
				}
				return j;
			};
			l = S.selectors = {
				cacheLength: 50,
				createPseudo: e4,
				match: U3,
				attrHandle: {},
				find: {},
				relative: {
					">": {
						dir: "parentNode",
						first: true
					},
					" ": {
						dir: "parentNode"
					},
					"+": {
						dir: "previousSibling",
						first: true
					},
					"~": {
						dir: "previousSibling"
					}
				},
				preFilter: {
					"ATTR": function(m) {
						m[1] = m[1].replace(Z3, $3);
						m[3] = (m[3] || m[4] || m[5] || "").replace(Z3, $3);
						if (m[2] === "~=") {
							m[3] = " " + m[3] + " ";
						}
						return m.slice(0, 4);
					},
					"CHILD": function(m) {
						m[1] = m[1].toLowerCase();
						if (m[1].slice(0, 3) === "nth") {
							if (!m[3]) {
								S.error(m[0]);
							}
							m[4] = +(m[4] ? m[5] + (m[6] || 1) : 2 * (m[3] === "even" || m[3] === "odd"));
							m[5] = +((m[7] + m[8]) || m[3] === "odd");
						} else if (m[3]) {
							S.error(m[0]);
						}
						return m;
					},
					"PSEUDO": function(m) {
						var a, b = !m[6] && m[2];
						if (U3["CHILD"].test(m[0])) {
							return null;
						}
						if (m[3]) {
							m[2] = m[4] || m[5] || "";
						} else if (b && S3.test(b) && (a = t(b, true)) && (a = b.indexOf(")", b.length - a) - b.length)) {
							m[0] = m[0].slice(0, a);
							m[2] = b.slice(0, a);
						}
						return m.slice(0, 3);
					}
				},
				filter: {
					"TAG": function(a) {
						var J = a.replace(Z3, $3).toLowerCase();
						return a === "*" ? function() {
							return true;
						} : function(b) {
							return b.nodeName && b.nodeName.toLowerCase() === J;
						};
					},
					"CLASS": function(a) {
						var b = C3[a + " "];
						return b || (b = new RegExp("(^|" + K3 + ")" + a + "(" + K3 + "|$)")) && C3(a, function(j) {
							return b.test(typeof j.className === "string" && j.className || typeof j.getAttribute !== "undefined" && j.getAttribute(
								"class") || "");
						});
					},
					"ATTR": function(a, b, j) {
						return function(m) {
							var w4 = S.attr(m, a);
							if (w4 == null) {
								return b === "!=";
							}
							if (!b) {
								return true;
							}
							w4 += "";
							return b === "=" ? w4 === j : b === "!=" ? w4 !== j : b === "^=" ? j && w4.indexOf(j) === 0 : b === "*=" ? j && w4.indexOf(j) >
								-1 : b === "$=" ? j && w4.slice(-j.length) === j : b === "~=" ? (" " + w4.replace(O3, " ") + " ").indexOf(j) > -1 : b === "|=" ?
								w4 === j || w4.slice(0, j.length + 1) === j + "-" : false;
						};
					},
					"CHILD": function(a, b, j, m, w4) {
						var x4 = a.slice(0, 3) !== "nth",
							y4 = a.slice(-4) !== "last",
							z4 = b === "of-type";
						return m === 1 && w4 === 0 ? function(A4) {
							return !!A4.parentNode;
						} : function(A4, B4, C4) {
							var D4, E4, F4, G4, H4, I4, G = x4 !== y4 ? "nextSibling" : "previousSibling",
								J4 = A4.parentNode,
								K4 = z4 && A4.nodeName.toLowerCase(),
								L4 = !C4 && !z4,
								M4 = false;
							if (J4) {
								if (x4) {
									while (G) {
										G4 = A4;
										while ((G4 = G4[G])) {
											if (z4 ? G4.nodeName.toLowerCase() === K4 : G4.nodeType === 1) {
												return false;
											}
										}
										I4 = G = a === "only" && !I4 && "nextSibling";
									}
									return true;
								}
								I4 = [y4 ? J4.firstChild : J4.lastChild];
								if (y4 && L4) {
									G4 = J4;
									F4 = G4[y3] || (G4[y3] = {});
									E4 = F4[G4.uniqueID] || (F4[G4.uniqueID] = {});
									D4 = E4[a] || [];
									H4 = D4[0] === A3 && D4[1];
									M4 = H4 && D4[2];
									G4 = H4 && J4.childNodes[H4];
									while ((G4 = ++H4 && G4 && G4[G] || (M4 = H4 = 0) || I4.pop())) {
										if (G4.nodeType === 1 && ++M4 && G4 === A4) {
											E4[a] = [A3, H4, M4];
											break;
										}
									}
								} else {
									if (L4) {
										G4 = A4;
										F4 = G4[y3] || (G4[y3] = {});
										E4 = F4[G4.uniqueID] || (F4[G4.uniqueID] = {});
										D4 = E4[a] || [];
										H4 = D4[0] === A3 && D4[1];
										M4 = H4;
									}
									if (M4 === false) {
										while ((G4 = ++H4 && G4 && G4[G] || (M4 = H4 = 0) || I4.pop())) {
											if ((z4 ? G4.nodeName.toLowerCase() === K4 : G4.nodeType === 1) && ++M4) {
												if (L4) {
													F4 = G4[y3] || (G4[y3] = {});
													E4 = F4[G4.uniqueID] || (F4[G4.uniqueID] = {});
													E4[a] = [A3, M4];
												}
												if (G4 === A4) {
													break;
												}
											}
										}
									}
								}
								M4 -= w4;
								return M4 === m || (M4 % m === 0 && M4 / m >= 0);
							}
						};
					},
					"PSEUDO": function(a, b) {
						var j, m = l.pseudos[a] || l.setFilters[a.toLowerCase()] || S.error("unsupported pseudo: " + a);
						if (m[y3]) {
							return m(b);
						}
						if (m.length > 1) {
							j = [a, a, "", b];
							return l.setFilters.hasOwnProperty(a.toLowerCase()) ? e4(function(w4, w3) {
								var x4, y4 = m(w4, b),
									i = y4.length;
								while (i--) {
									x4 = o(w4, y4[i]);
									w4[x4] = !(w3[x4] = y4[i]);
								}
							}) : function(w4) {
								return m(w4, 0, j);
							};
						}
						return m;
					}
				},
				pseudos: {
					"not": e4(function(a) {
						var b = [],
							j = [],
							m = s(a.replace(q3, "$1"));
						return m[y3] ? e4(function(w4, w3, x4, y4) {
							var z4, A4 = m(w4, null, y4, []),
								i = w4.length;
							while (i--) {
								if ((z4 = A4[i])) {
									w4[i] = !(w3[i] = z4);
								}
							}
						}) : function(w4, x4, y4) {
							b[0] = w4;
							m(b, null, y4, j);
							b[0] = null;
							return !j.pop();
						};
					}),
					"has": e4(function(a) {
						return function(b) {
							return S(a, b).length > 0;
						};
					}),
					"contains": e4(function(a) {
						a = a.replace(Z3, $3);
						return function(b) {
							return (b.textContent || n(b)).indexOf(a) > -1;
						};
					}),
					"lang": e4(function(a) {
						if (!T3.test(a || "")) {
							S.error("unsupported lang: " + a);
						}
						a = a.replace(Z3, $3).toLowerCase();
						return function(b) {
							var j;
							do {
								if ((j = t3 ? b.lang : b.getAttribute("xml:lang") || b.getAttribute("lang"))) {
									j = j.toLowerCase();
									return j === a || j.indexOf(a + "-") === 0;
								}
							} while ((b = b.parentNode) && b.nodeType === 1);
							return false;
						};
					}),
					"target": function(a) {
						var b = w.location && w.location.hash;
						return b && b.slice(1) === a.id;
					},
					"root": function(a) {
						return a === s3;
					},
					"focus": function(a) {
						return a === A.activeElement && (!A.hasFocus || A.hasFocus()) && !!(a.type || a.href || ~a.tabIndex);
					},
					"enabled": k4(false),
					"disabled": k4(true),
					"checked": function(a) {
						var J = a.nodeName.toLowerCase();
						return (J === "input" && !!a.checked) || (J === "option" && !!a.selected);
					},
					"selected": function(a) {
						if (a.parentNode) {
							a.parentNode.selectedIndex;
						}
						return a.selected === true;
					},
					"empty": function(a) {
						for (a = a.firstChild; a; a = a.nextSibling) {
							if (a.nodeType < 6) {
								return false;
							}
						}
						return true;
					},
					"parent": function(a) {
						return !l.pseudos["empty"](a);
					},
					"header": function(a) {
						return W3.test(a.nodeName);
					},
					"input": function(a) {
						return V3.test(a.nodeName);
					},
					"button": function(a) {
						var b = a.nodeName.toLowerCase();
						return b === "input" && a.type === "button" || b === "button";
					},
					"text": function(a) {
						var b;
						return a.nodeName.toLowerCase() === "input" && a.type === "text" && ((b = a.getAttribute("type")) == null || b.toLowerCase() ===
							"text");
					},
					"first": l4(function() {
						return [0];
					}),
					"last": l4(function(a, b) {
						return [b - 1];
					}),
					"eq": l4(function(a, b, j) {
						return [j < 0 ? j + b : j];
					}),
					"even": l4(function(m, a) {
						var i = 0;
						for (; i < a; i += 2) {
							m.push(i);
						}
						return m;
					}),
					"odd": l4(function(m, a) {
						var i = 1;
						for (; i < a; i += 2) {
							m.push(i);
						}
						return m;
					}),
					"lt": l4(function(m, a, b) {
						var i = b < 0 ? b + a : b > a ? a : b;
						for (; --i >= 0;) {
							m.push(i);
						}
						return m;
					}),
					"gt": l4(function(m, a, b) {
						var i = b < 0 ? b + a : b;
						for (; ++i < a;) {
							m.push(i);
						}
						return m;
					})
				}
			};
			l.pseudos["nth"] = l.pseudos["eq"];
			for (i in {
					radio: true,
					checkbox: true,
					file: true,
					password: true,
					image: true
				}) {
				l.pseudos[i] = i4(i);
			}
			for (i in {
					submit: true,
					reset: true
				}) {
				l.pseudos[i] = j4(i);
			}

			function n4() {}
			n4.prototype = l.filters = l.pseudos;
			l.setFilters = new n4();
			t = S.tokenize = function(a, b) {
				var m, j, w4, x4, y4, z4, A4, B4 = D3[a + " "];
				if (B4) {
					return b ? 0 : B4.slice(0);
				}
				y4 = a;
				z4 = [];
				A4 = l.preFilter;
				while (y4) {
					if (!m || (j = P3.exec(y4))) {
						if (j) {
							y4 = y4.slice(j[0].length) || y4;
						}
						z4.push((w4 = []));
					}
					m = false;
					if ((j = Q3.exec(y4))) {
						m = j.shift();
						w4.push({
							value: m,
							type: j[0].replace(q3, " ")
						});
						y4 = y4.slice(m.length);
					}
					for (x4 in l.filter) {
						if ((j = U3[x4].exec(y4)) && (!A4[x4] || (j = A4[x4](j)))) {
							m = j.shift();
							w4.push({
								value: m,
								type: x4,
								matches: j
							});
							y4 = y4.slice(m.length);
						}
					}
					if (!m) {
						break;
					}
				}
				return b ? y4.length : y4 ? S.error(a) : D3(a, z4).slice(0);
			};

			function o4(a) {
				var i = 0,
					b = a.length,
					j = "";
				for (; i < b; i++) {
					j += a[i].value;
				}
				return j;
			}

			function p4(m, a, b) {
				var G = a.dir,
					j = a.next,
					w4 = j || G,
					x4 = b && w4 === "parentNode",
					y4 = B3++;
				return a.first ? function(z4, A4, B4) {
					while ((z4 = z4[G])) {
						if (z4.nodeType === 1 || x4) {
							return m(z4, A4, B4);
						}
					}
					return false;
				} : function(z4, A4, B4) {
					var C4, D4, E4, F4 = [A3, y4];
					if (B4) {
						while ((z4 = z4[G])) {
							if (z4.nodeType === 1 || x4) {
								if (m(z4, A4, B4)) {
									return true;
								}
							}
						}
					} else {
						while ((z4 = z4[G])) {
							if (z4.nodeType === 1 || x4) {
								E4 = z4[y3] || (z4[y3] = {});
								D4 = E4[z4.uniqueID] || (E4[z4.uniqueID] = {});
								if (j && j === z4.nodeName.toLowerCase()) {
									z4 = z4[G] || z4;
								} else if ((C4 = D4[w4]) && C4[0] === A3 && C4[1] === y4) {
									return (F4[2] = C4[2]);
								} else {
									D4[w4] = F4;
									if ((F4[2] = m(z4, A4, B4))) {
										return true;
									}
								}
							}
						}
					}
					return false;
				};
			}

			function q4(m) {
				return m.length > 1 ? function(a, b, j) {
					var i = m.length;
					while (i--) {
						if (!m[i](a, b, j)) {
							return false;
						}
					}
					return true;
				} : m[0];
			}

			function r4(a, b, j) {
				var i = 0,
					m = b.length;
				for (; i < m; i++) {
					S(a, b[i], j);
				}
				return j;
			}

			function s4(a, m, b, j, w4) {
				var x4, y4 = [],
					i = 0,
					z4 = a.length,
					A4 = m != null;
				for (; i < z4; i++) {
					if ((x4 = a[i])) {
						if (!b || b(x4, j, w4)) {
							y4.push(x4);
							if (A4) {
								m.push(i);
							}
						}
					}
				}
				return y4;
			}

			function t4(a, b, m, j, w4, x4) {
				if (j && !j[y3]) {
					j = t4(j);
				}
				if (w4 && !w4[y3]) {
					w4 = t4(w4, x4);
				}
				return e4(function(y4, z4, A4, B4) {
					var C4, i, D4, E4 = [],
						F4 = [],
						G4 = z4.length,
						H4 = y4 || r4(b || "*", A4.nodeType ? [A4] : A4, []),
						I4 = a && (y4 || !b) ? s4(H4, E4, a, A4, B4) : H4,
						J4 = m ? w4 || (y4 ? a : G4 || j) ? [] : z4 : I4;
					if (m) {
						m(I4, J4, A4, B4);
					}
					if (j) {
						C4 = s4(J4, F4);
						j(C4, [], A4, B4);
						i = C4.length;
						while (i--) {
							if ((D4 = C4[i])) {
								J4[F4[i]] = !(I4[F4[i]] = D4);
							}
						}
					}
					if (y4) {
						if (w4 || a) {
							if (w4) {
								C4 = [];
								i = J4.length;
								while (i--) {
									if ((D4 = J4[i])) {
										C4.push((I4[i] = D4));
									}
								}
								w4(null, (J4 = []), C4, B4);
							}
							i = J4.length;
							while (i--) {
								if ((D4 = J4[i]) && (C4 = w4 ? o(y4, D4) : E4[i]) > -1) {
									y4[C4] = !(z4[C4] = D4);
								}
							}
						}
					} else {
						J4 = s4(J4 === z4 ? J4.splice(G4, J4.length) : J4);
						if (w4) {
							w4(null, z4, J4, B4);
						} else {
							k.apply(z4, J4);
						}
					}
				});
			}

			function u4(a) {
				var b, m, j, w4 = a.length,
					x4 = l.relative[a[0].type],
					y4 = x4 || l.relative[" "],
					i = x4 ? 1 : 0,
					z4 = p4(function(C4) {
						return C4 === b;
					}, y4, true),
					A4 = p4(function(C4) {
						return o(b, C4) > -1;
					}, y4, true),
					B4 = [function(C4, D4, E4) {
						var F4 = (!x4 && (E4 || D4 !== _)) || ((b = D4).nodeType ? z4(C4, D4, E4) : A4(C4, D4, E4));
						b = null;
						return F4;
					}];
				for (; i < w4; i++) {
					if ((m = l.relative[a[i].type])) {
						B4 = [p4(q4(B4), m)];
					} else {
						m = l.filter[a[i].type].apply(null, a[i].matches);
						if (m[y3]) {
							j = ++i;
							for (; j < w4; j++) {
								if (l.relative[a[j].type]) {
									break;
								}
							}
							return t4(i > 1 && q4(B4), i > 1 && o4(a.slice(0, i - 1).concat({
								value: a[i - 2].type === " " ? "*" : ""
							})).replace(q3, "$1"), m, i < j && u4(a.slice(i, j)), j < w4 && u4((a = a.slice(j))), j < w4 && o4(a));
						}
						B4.push(m);
					}
				}
				return q4(B4);
			}

			function v4(a, b) {
				var m = b.length > 0,
					w4 = a.length > 0,
					x4 = function(y4, z4, A4, B4, C4) {
						var D4, j, E4, F4 = 0,
							i = "0",
							G4 = y4 && [],
							H4 = [],
							I4 = _,
							J4 = y4 || w4 && l.find["TAG"]("*", C4),
							K4 = (A3 += I4 == null ? 1 : Math.random() || 0.1),
							L4 = J4.length;
						if (C4) {
							_ = z4 == A || z4 || C4;
						}
						for (; i !== L4 && (D4 = J4[i]) != null; i++) {
							if (w4 && D4) {
								j = 0;
								if (!z4 && D4.ownerDocument != A) {
									$2(D4);
									A4 = !t3;
								}
								while ((E4 = a[j++])) {
									if (E4(D4, z4 || A, A4)) {
										B4.push(D4);
										break;
									}
								}
								if (C4) {
									A3 = K4;
								}
							}
							if (m) {
								if ((D4 = !E4 && D4)) {
									F4--;
								}
								if (y4) {
									G4.push(D4);
								}
							}
						}
						F4 += i;
						if (m && i !== F4) {
							j = 0;
							while ((E4 = b[j++])) {
								E4(G4, H4, z4, A4);
							}
							if (y4) {
								if (F4 > 0) {
									while (i--) {
										if (!(G4[i] || H4[i])) {
											H4[i] = H3.call(B4);
										}
									}
								}
								H4 = s4(H4);
							}
							k.apply(B4, H4);
							if (C4 && !y4 && H4.length > 0 && (F4 + b.length) > 1) {
								S.uniqueSort(B4);
							}
						}
						if (C4) {
							A3 = K4;
							_ = I4;
						}
						return G4;
					};
				return m ? e4(x4) : x4;
			}
			s = S.compile = function(a, m) {
				var i, b = [],
					j = [],
					w4 = E3[a + " "];
				if (!w4) {
					if (!m) {
						m = t(a);
					}
					i = m.length;
					while (i--) {
						w4 = u4(m[i]);
						if (w4[y3]) {
							b.push(w4);
						} else {
							j.push(w4);
						}
					}
					w4 = E3(a, v4(j, b));
					w4.selector = a;
				}
				return w4;
			};
			v = S.select = function(a, b, j, m) {
				var i, w4, x4, y4, z4, A4 = typeof a === "function" && a,
					B4 = !m && t((a = A4.selector || a));
				j = j || [];
				if (B4.length === 1) {
					w4 = B4[0] = B4[0].slice(0);
					if (w4.length > 2 && (x4 = w4[0]).type === "ID" && b.nodeType === 9 && t3 && l.relative[w4[1].type]) {
						b = (l.find["ID"](x4.matches[0].replace(Z3, $3), b) || [])[0];
						if (!b) {
							return j;
						} else if (A4) {
							b = b.parentNode;
						}
						a = a.slice(w4.shift().value.length);
					}
					i = U3["needsContext"].test(a) ? 0 : w4.length;
					while (i--) {
						x4 = w4[i];
						if (l.relative[(y4 = x4.type)]) {
							break;
						}
						if ((z4 = l.find[y4])) {
							if ((m = z4(x4.matches[0].replace(Z3, $3), Y3.test(w4[0].type) && m4(b.parentNode) || b))) {
								w4.splice(i, 1);
								a = m.length && o4(w4);
								if (!a) {
									k.apply(j, m);
									return j;
								}
								break;
							}
						}
					}
				}(A4 || s(a, B4))(m, b, !t3, j, !b || Y3.test(a) && m4(b.parentNode) || b);
				return j;
			};
			x.sortStable = y3.split("").sort(G3).join("") === y3;
			x.detectDuplicates = !!$1;
			$2();
			x.sortDetached = f4(function(a) {
				return a.compareDocumentPosition(A.createElement("fieldset")) & 1;
			});
			if (!f4(function(a) {
					a.innerHTML = "<a href='#'></a>";
					return a.firstChild.getAttribute("href") === "#";
				})) {
				g4("type|href|height|width", function(a, b, p) {
					if (!p) {
						return a.getAttribute(b, b.toLowerCase() === "type" ? 1 : 2);
					}
				});
			}
			if (!x.attributes || !f4(function(a) {
					a.innerHTML = "<input/>";
					a.firstChild.setAttribute("value", "");
					return a.firstChild.getAttribute("value") === "";
				})) {
				g4("value", function(a, b, p) {
					if (!p && a.nodeName.toLowerCase() === "input") {
						return a.defaultValue;
					}
				});
			}
			if (!f4(function(a) {
					return a.getAttribute("disabled") == null;
				})) {
				g4(J3, function(a, b, p) {
					var j;
					if (!p) {
						return a[b] === true ? b.toLowerCase() : (j = a.getAttributeNode(b)) && j.specified ? j.value : null;
					}
				});
			}
			return S;
		})(w);
	Q.find = S;
	Q.expr = S.selectors;
	Q.expr[":"] = Q.expr.pseudos;
	Q.uniqueSort = Q.unique = S.uniqueSort;
	Q.text = S.getText;
	Q.isXMLDoc = S.isXML;
	Q.contains = S.contains;
	Q.escapeSelector = S.escape;
	var G = function(e, G, a) {
		var m = [],
			t = a !== undefined;
		while ((e = e[G]) && e.nodeType !== 9) {
			if (e.nodeType === 1) {
				if (t && Q(e).is(a)) {
					break;
				}
				m.push(e);
			}
		}
		return m;
	};
	var H = function(n, e) {
		var m = [];
		for (; n; n = n.nextSibling) {
			if (n.nodeType === 1 && n !== e) {
				m.push(n);
			}
		}
		return m;
	};
	var I = Q.expr.match.needsContext;

	function J(e, n) {
		return e.nodeName && e.nodeName.toLowerCase() === n.toLowerCase();
	}
	var K = (/^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i);

	function L(e, a, n) {
		if (y(a)) {
			return Q.grep(e, function(b, i) {
				return !!a.call(b, i, b) !== n;
			});
		}
		if (a.nodeType) {
			return Q.grep(e, function(b) {
				return (b === a) !== n;
			});
		}
		if (typeof a !== "string") {
			return Q.grep(e, function(b) {
				return (o.call(a, b) > -1) !== n;
			});
		}
		return Q.filter(a, e, n);
	}
	Q.filter = function(e, a, n) {
		var b = a[0];
		if (n) {
			e = ":not(" + e + ")";
		}
		if (a.length === 1 && b.nodeType === 1) {
			return Q.find.matchesSelector(b, e) ? [b] : [];
		}
		return Q.find.matches(e, Q.grep(a, function(b) {
			return b.nodeType === 1;
		}));
	};
	Q.fn.extend({
		find: function(s) {
			var i, a, l = this.length,
				b = this;
			if (typeof s !== "string") {
				return this.pushStack(Q(s).filter(function() {
					for (i = 0; i < l; i++) {
						if (Q.contains(b[i], this)) {
							return true;
						}
					}
				}));
			}
			a = this.pushStack([]);
			for (i = 0; i < l; i++) {
				Q.find(s, b[i], a);
			}
			return l > 1 ? Q.uniqueSort(a) : a;
		},
		filter: function(s) {
			return this.pushStack(L(this, s || [], false));
		},
		not: function(s) {
			return this.pushStack(L(this, s || [], true));
		},
		is: function(s) {
			return !!L(this, typeof s === "string" && I.test(s) ? Q(s) : s || [], false).length;
		}
	});
	var M, N = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,
		P = Q.fn.init = function(s, a, b) {
			var m, e;
			if (!s) {
				return this;
			}
			b = b || M;
			if (typeof s === "string") {
				if (s[0] === "<" && s[s.length - 1] === ">" && s.length >= 3) {
					m = [null, s, null];
				} else {
					m = N.exec(s);
				}
				if (m && (m[1] || !a)) {
					if (m[1]) {
						a = a instanceof Q ? a[0] : a;
						Q.merge(this, Q.parseHTML(m[1], a && a.nodeType ? a.ownerDocument || a : A, true));
						if (K.test(m[1]) && Q.isPlainObject(a)) {
							for (m in a) {
								if (y(this[m])) {
									this[m](a[m]);
								} else {
									this.attr(m, a[m]);
								}
							}
						}
						return this;
					} else {
						e = A.getElementById(m[2]);
						if (e) {
							this[0] = e;
							this.length = 1;
						}
						return this;
					}
				} else if (!a || a.jquery) {
					return (a || b).find(s);
				} else {
					return this.constructor(a).find(s);
				}
			} else if (s.nodeType) {
				this[0] = s;
				this.length = 1;
				return this;
			} else if (y(s)) {
				return b.ready !== undefined ? b.ready(s) : s(Q);
			}
			return Q.makeArray(s, this);
		};
	P.prototype = Q.fn;
	M = Q(A);
	var R = /^(?:parents|prev(?:Until|All))/,
		U = {
			children: true,
			contents: true,
			next: true,
			prev: true
		};
	Q.fn.extend({
		has: function(t) {
			var a = Q(t, this),
				l = a.length;
			return this.filter(function() {
				var i = 0;
				for (; i < l; i++) {
					if (Q.contains(this, a[i])) {
						return true;
					}
				}
			});
		},
		closest: function(s, a) {
			var b, i = 0,
				l = this.length,
				m = [],
				t = typeof s !== "string" && Q(s);
			if (!I.test(s)) {
				for (; i < l; i++) {
					for (b = this[i]; b && b !== a; b = b.parentNode) {
						if (b.nodeType < 11 && (t ? t.index(b) > -1 : b.nodeType === 1 && Q.find.matchesSelector(b, s))) {
							m.push(b);
							break;
						}
					}
				}
			}
			return this.pushStack(m.length > 1 ? Q.uniqueSort(m) : m);
		},
		index: function(e) {
			if (!e) {
				return (this[0] && this[0].parentNode) ? this.first().prevAll().length : -1;
			}
			if (typeof e === "string") {
				return o.call(Q(e), this[0]);
			}
			return o.call(this, e.jquery ? e[0] : e);
		},
		add: function(s, a) {
			return this.pushStack(Q.uniqueSort(Q.merge(this.get(), Q(s, a))));
		},
		addBack: function(s) {
			return this.add(s == null ? this.prevObject : this.prevObject.filter(s));
		}
	});

	function V(a, G) {
		while ((a = a[G]) && a.nodeType !== 1) {}
		return a;
	}
	Q.each({
		parent: function(e) {
			var p = e.parentNode;
			return p && p.nodeType !== 11 ? p : null;
		},
		parents: function(e) {
			return G(e, "parentNode");
		},
		parentsUntil: function(e, _, a) {
			return G(e, "parentNode", a);
		},
		next: function(e) {
			return V(e, "nextSibling");
		},
		prev: function(e) {
			return V(e, "previousSibling");
		},
		nextAll: function(e) {
			return G(e, "nextSibling");
		},
		prevAll: function(e) {
			return G(e, "previousSibling");
		},
		nextUntil: function(e, _, a) {
			return G(e, "nextSibling", a);
		},
		prevUntil: function(e, _, a) {
			return G(e, "previousSibling", a);
		},
		siblings: function(e) {
			return H((e.parentNode || {}).firstChild, e);
		},
		children: function(e) {
			return H(e.firstChild);
		},
		contents: function(e) {
			if (e.contentDocument != null && g(e.contentDocument)) {
				return e.contentDocument;
			}
			if (J(e, "template")) {
				e = e.content || e;
			}
			return Q.merge([], e.childNodes);
		}
	}, function(n, a) {
		Q.fn[n] = function(b, s) {
			var m = Q.map(this, a, b);
			if (n.slice(-5) !== "Until") {
				s = b;
			}
			if (s && typeof s === "string") {
				m = Q.filter(s, m);
			}
			if (this.length > 1) {
				if (!U[n]) {
					Q.uniqueSort(m);
				}
				if (R.test(n)) {
					m.reverse();
				}
			}
			return this.pushStack(m);
		};
	});
	var W = (/[^\x20\t\r\n\f]+/g);

	function X(a) {
		var b = {};
		Q.each(a.match(W) || [], function(_, e) {
			b[e] = true;
		});
		return b;
	}
	Q.Callbacks = function(a) {
		a = typeof a === "string" ? X(a) : Q.extend({}, a);
		var b, m, e, l, i = [],
			j = [],
			n = -1,
			p = function() {
				l = l || a.once;
				e = b = true;
				for (; j.length; n = -1) {
					m = j.shift();
					while (++n < i.length) {
						if (i[n].apply(m[0], m[1]) === false && a.stopOnFalse) {
							n = i.length;
							m = false;
						}
					}
				}
				if (!a.memory) {
					m = false;
				}
				b = false;
				if (l) {
					if (m) {
						i = [];
					} else {
						i = "";
					}
				}
			},
			s = {
				add: function() {
					if (i) {
						if (m && !b) {
							n = i.length - 1;
							j.push(m);
						}(function v(t) {
							Q.each(t, function(_, O1) {
								if (y(O1)) {
									if (!a.unique || !s.has(O1)) {
										i.push(O1);
									}
								} else if (O1 && O1.length && C(O1) !== "string") {
									v(O1);
								}
							});
						})(arguments);
						if (m && !b) {
							p();
						}
					}
					return this;
				},
				remove: function() {
					Q.each(arguments, function(_, t) {
						var v;
						while ((v = Q.inArray(t, i, v)) > -1) {
							i.splice(v, 1);
							if (v <= n) {
								n--;
							}
						}
					});
					return this;
				},
				has: function(t) {
					return t ? Q.inArray(t, i) > -1 : i.length > 0;
				},
				empty: function() {
					if (i) {
						i = [];
					}
					return this;
				},
				disable: function() {
					l = j = [];
					i = m = "";
					return this;
				},
				disabled: function() {
					return !i;
				},
				lock: function() {
					l = j = [];
					if (!m && !b) {
						i = m = "";
					}
					return this;
				},
				locked: function() {
					return !!l;
				},
				fireWith: function(t, v) {
					if (!l) {
						v = v || [];
						v = [t, v.slice ? v.slice() : v];
						j.push(v);
						if (!b) {
							p();
						}
					}
					return this;
				},
				fire: function() {
					s.fireWith(this, arguments);
					return this;
				},
				fired: function() {
					return !!e;
				}
			};
		return s;
	};

	function Y(v) {
		return v;
	}

	function Z(e) {
		throw e;
	}

	function $(v, a, b, n) {
		var m;
		try {
			if (v && y((m = v.promise))) {
				m.call(v).done(a).fail(b);
			} else if (v && y((m = v.then))) {
				m.call(v, a, b);
			} else {
				a.apply(undefined, [v].slice(n));
			}
		} catch (v) {
			b.apply(undefined, [v]);
		}
	}
	Q.extend({
		Deferred: function(a) {
			var t = [
					["notify", "progress", Q.Callbacks("memory"), Q.Callbacks("memory"), 2],
					["resolve", "done", Q.Callbacks("once memory"), Q.Callbacks("once memory"), 0, "resolved"],
					["reject", "fail", Q.Callbacks("once memory"), Q.Callbacks("once memory"), 1, "rejected"]
				],
				s = "pending",
				p = {
					state: function() {
						return s;
					},
					always: function() {
						b.done(arguments).fail(arguments);
						return this;
					},
					"catch": function(e) {
						return p.then(null, e);
					},
					pipe: function() {
						var e = arguments;
						return Q.Deferred(function(n) {
							Q.each(t, function(_, i) {
								var j = y(e[i[4]]) && e[i[4]];
								b[i[1]](function() {
									var l = j && j.apply(this, arguments);
									if (l && y(l.promise)) {
										l.promise().progress(n.notify).done(n.resolve).fail(n.reject);
									} else {
										n[i[0] + "With"](this, j ? [l] : arguments);
									}
								});
							});
							e = null;
						}).promise();
					},
					then: function(i, j, l) {
						var m = 0;

						function n(v, b, _, O1) {
							return function() {
								var $1 = this,
									$2 = arguments,
									s3 = function() {
										var e, u3;
										if (v < m) {
											return;
										}
										e = _.apply($1, $2);
										if (e === b.promise()) {
											throw new TypeError("Thenable self-resolution");
										}
										u3 = e && (typeof e === "object" || typeof e === "function") && e.then;
										if (y(u3)) {
											if (O1) {
												u3.call(e, n(m, b, Y, O1), n(m, b, Z, O1));
											} else {
												m++;
												u3.call(e, n(m, b, Y, O1), n(m, b, Z, O1), n(m, b, Y, b.notifyWith));
											}
										} else {
											if (_ !== Y) {
												$1 = undefined;
												$2 = [e];
											}(O1 || b.resolveWith)($1, $2);
										}
									},
									t3 = O1 ? s3 : function() {
										try {
											s3();
										} catch (e) {
											if (Q.Deferred.exceptionHook) {
												Q.Deferred.exceptionHook(e, t3.stackTrace);
											}
											if (v + 1 >= m) {
												if (_ !== Z) {
													$1 = undefined;
													$2 = [e];
												}
												b.rejectWith($1, $2);
											}
										}
									};
								if (v) {
									t3();
								} else {
									if (Q.Deferred.getStackHook) {
										t3.stackTrace = Q.Deferred.getStackHook();
									}
									w.setTimeout(t3);
								}
							};
						}
						return Q.Deferred(function(e) {
							t[0][3].add(n(0, e, y(l) ? l : Y, e.notifyWith));
							t[1][3].add(n(0, e, y(i) ? i : Y));
							t[2][3].add(n(0, e, y(j) ? j : Z));
						}).promise();
					},
					promise: function(e) {
						return e != null ? Q.extend(e, p) : p;
					}
				},
				b = {};
			Q.each(t, function(i, e) {
				var l = e[2],
					j = e[5];
				p[e[1]] = l.add;
				if (j) {
					l.add(function() {
						s = j;
					}, t[3 - i][2].disable, t[3 - i][3].disable, t[0][2].lock, t[0][3].lock);
				}
				l.add(e[3].fire);
				b[e[0]] = function() {
					b[e[0] + "With"](this === b ? undefined : this, arguments);
					return this;
				};
				b[e[0] + "With"] = l.fireWith;
			});
			p.promise(b);
			if (a) {
				a.call(b, b);
			}
			return b;
		},
		when: function(s) {
			var a = arguments.length,
				i = a,
				b = Array(i),
				e = f.call(arguments),
				p = Q.Deferred(),
				j = function(i) {
					return function(v) {
						b[i] = this;
						e[i] = arguments.length > 1 ? f.call(arguments) : v;
						if (!(--a)) {
							p.resolveWith(b, e);
						}
					};
				};
			if (a <= 1) {
				$(s, p.done(j(i)).resolve, p.reject, !a);
				if (p.state() === "pending" || y(e[i] && e[i].then)) {
					return p.then();
				}
			}
			while (i--) {
				$(e[i], j(i), p.reject);
			}
			return p.promise();
		}
	});
	var a1 = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
	Q.Deferred.exceptionHook = function(e, s) {
		if (w.console && w.console.warn && e && a1.test(e.name)) {
			w.console.warn("jQuery.Deferred exception: " + e.message, e.stack, s);
		}
	};
	Q.readyException = function(e) {
		w.setTimeout(function() {
			throw e;
		});
	};
	var b1 = Q.Deferred();
	Q.fn.ready = function(a) {
		b1.then(a).catch(function(e) {
			Q.readyException(e);
		});
		return this;
	};
	Q.extend({
		isReady: false,
		readyWait: 1,
		ready: function(a) {
			if (a === true ? --Q.readyWait : Q.isReady) {
				return;
			}
			Q.isReady = true;
			if (a !== true && --Q.readyWait > 0) {
				return;
			}
			b1.resolveWith(A, [Q]);
		}
	});
	Q.ready.then = b1.then;

	function c1() {
		A.removeEventListener("DOMContentLoaded", c1);
		w.removeEventListener("load", c1);
		Q.ready();
	}
	if (A.readyState === "complete" || (A.readyState !== "loading" && !A.documentElement.doScroll)) {
		w.setTimeout(Q.ready);
	} else {
		A.addEventListener("DOMContentLoaded", c1);
		w.addEventListener("load", c1);
	}
	var d1 = function(e, a, b, v, j, l, m) {
		var i = 0,
			n = e.length,
			p = b == null;
		if (C(b) === "object") {
			j = true;
			for (i in b) {
				d1(e, a, i, b[i], true, l, m);
			}
		} else if (v !== undefined) {
			j = true;
			if (!y(v)) {
				m = true;
			}
			if (p) {
				if (m) {
					a.call(e, v);
					a = null;
				} else {
					p = a;
					a = function(s, _, v) {
						return p.call(Q(s), v);
					};
				}
			}
			if (a) {
				for (; i < n; i++) {
					a(e[i], b, m ? v : v.call(e[i], i, a(e[i], b)));
				}
			}
		}
		if (j) {
			return e;
		}
		if (p) {
			return a.call(e);
		}
		return n ? a(e[0], b) : l;
	};
	var e1 = /^-ms-/,
		f1 = /-([a-z])/g;

	function g1(_, l) {
		return l.toUpperCase();
	}

	function h1(s) {
		return s.replace(e1, "ms-").replace(f1, g1);
	}
	var i1 = function(a) {
		return a.nodeType === 1 || a.nodeType === 9 || !(+a.nodeType);
	};

	function j1() {
		this.expando = Q.expando + j1.uid++;
	}
	j1.uid = 1;
	j1.prototype = {
		cache: function(a) {
			var v = a[this.expando];
			if (!v) {
				v = {};
				if (i1(a)) {
					if (a.nodeType) {
						a[this.expando] = v;
					} else {
						Object.defineProperty(a, this.expando, {
							value: v,
							configurable: true
						});
					}
				}
			}
			return v;
		},
		set: function(a, b, v) {
			var p, e = this.cache(a);
			if (typeof b === "string") {
				e[h1(b)] = v;
			} else {
				for (p in b) {
					e[h1(p)] = b[p];
				}
			}
			return e;
		},
		get: function(a, b) {
			return b === undefined ? this.cache(a) : a[this.expando] && a[this.expando][h1(b)];
		},
		access: function(a, b, v) {
			if (b === undefined || ((b && typeof b === "string") && v === undefined)) {
				return this.get(a, b);
			}
			this.set(a, b, v);
			return v !== undefined ? v : b;
		},
		remove: function(a, b) {
			var i, e = a[this.expando];
			if (e === undefined) {
				return;
			}
			if (b !== undefined) {
				if (Array.isArray(b)) {
					b = b.map(h1);
				} else {
					b = h1(b);
					b = b in e ? [b] : (b.match(W) || []);
				}
				i = b.length;
				while (i--) {
					delete e[b[i]];
				}
			}
			if (b === undefined || Q.isEmptyObject(e)) {
				if (a.nodeType) {
					a[this.expando] = undefined;
				} else {
					delete a[this.expando];
				}
			}
		},
		hasData: function(a) {
			var b = a[this.expando];
			return b !== undefined && !Q.isEmptyObject(b);
		}
	};
	var k1 = new j1();
	var l1 = new j1();
	var m1 = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
		n1 = /[A-Z]/g;

	function o1(a) {
		if (a === "true") {
			return true;
		}
		if (a === "false") {
			return false;
		}
		if (a === "null") {
			return null;
		}
		if (a === +a + "") {
			return +a;
		}
		if (m1.test(a)) {
			return JSON.parse(a);
		}
		return a;
	}

	function p1(a, b, i) {
		var n;
		if (i === undefined && a.nodeType === 1) {
			n = "data-" + b.replace(n1, "-$&").toLowerCase();
			i = a.getAttribute(n);
			if (typeof i === "string") {
				try {
					i = o1(i);
				} catch (e) {}
				l1.set(a, b, i);
			} else {
				i = undefined;
			}
		}
		return i;
	}
	Q.extend({
		hasData: function(e) {
			return l1.hasData(e) || k1.hasData(e);
		},
		data: function(e, n, a) {
			return l1.access(e, n, a);
		},
		removeData: function(e, n) {
			l1.remove(e, n);
		},
		_data: function(e, n, a) {
			return k1.access(e, n, a);
		},
		_removeData: function(e, n) {
			k1.remove(e, n);
		}
	});
	Q.fn.extend({
		data: function(a, v) {
			var i, n, b, e = this[0],
				j = e && e.attributes;
			if (a === undefined) {
				if (this.length) {
					b = l1.get(e);
					if (e.nodeType === 1 && !k1.get(e, "hasDataAttrs")) {
						i = j.length;
						while (i--) {
							if (j[i]) {
								n = j[i].name;
								if (n.indexOf("data-") === 0) {
									n = h1(n.slice(5));
									p1(e, n, b[n]);
								}
							}
						}
						k1.set(e, "hasDataAttrs", true);
					}
				}
				return b;
			}
			if (typeof a === "object") {
				return this.each(function() {
					l1.set(this, a);
				});
			}
			return d1(this, function(v) {
				var b;
				if (e && v === undefined) {
					b = l1.get(e, a);
					if (b !== undefined) {
						return b;
					}
					b = p1(e, a);
					if (b !== undefined) {
						return b;
					}
					return;
				}
				this.each(function() {
					l1.set(this, a, v);
				});
			}, null, v, arguments.length > 1, null, true);
		},
		removeData: function(a) {
			return this.each(function() {
				l1.remove(this, a);
			});
		}
	});
	Q.extend({
		queue: function(e, t, a) {
			var b;
			if (e) {
				t = (t || "fx") + "queue";
				b = k1.get(e, t);
				if (a) {
					if (!b || Array.isArray(a)) {
						b = k1.access(e, t, Q.makeArray(a));
					} else {
						b.push(a);
					}
				}
				return b || [];
			}
		},
		dequeue: function(e, t) {
			t = t || "fx";
			var a = Q.queue(e, t),
				s = a.length,
				b = a.shift(),
				i = Q._queueHooks(e, t),
				n = function() {
					Q.dequeue(e, t);
				};
			if (b === "inprogress") {
				b = a.shift();
				s--;
			}
			if (b) {
				if (t === "fx") {
					a.unshift("inprogress");
				}
				delete i.stop;
				b.call(e, n, i);
			}
			if (!s && i) {
				i.empty.fire();
			}
		},
		_queueHooks: function(e, t) {
			var a = t + "queueHooks";
			return k1.get(e, a) || k1.access(e, a, {
				empty: Q.Callbacks("once memory").add(function() {
					k1.remove(e, [t + "queue", a]);
				})
			});
		}
	});
	Q.fn.extend({
		queue: function(t, a) {
			var s = 2;
			if (typeof t !== "string") {
				a = t;
				t = "fx";
				s--;
			}
			if (arguments.length < s) {
				return Q.queue(this[0], t);
			}
			return a === undefined ? this : this.each(function() {
				var b = Q.queue(this, t, a);
				Q._queueHooks(this, t);
				if (t === "fx" && b[0] !== "inprogress") {
					Q.dequeue(this, t);
				}
			});
		},
		dequeue: function(t) {
			return this.each(function() {
				Q.dequeue(this, t);
			});
		},
		clearQueue: function(t) {
			return this.queue(t || "fx", []);
		},
		promise: function(t, a) {
			var b, e = 1,
				j = Q.Deferred(),
				l = this,
				i = this.length,
				m = function() {
					if (!(--e)) {
						j.resolveWith(l, [l]);
					}
				};
			if (typeof t !== "string") {
				a = t;
				t = undefined;
			}
			t = t || "fx";
			while (i--) {
				b = k1.get(l[i], t + "queueHooks");
				if (b && b.empty) {
					e++;
					b.empty.add(m);
				}
			}
			m();
			return j.promise(a);
		}
	});
	var q1 = (/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/).source;
	var r1 = new RegExp("^(?:([+-])=|)(" + q1 + ")([a-z%]*)$", "i");
	var s1 = ["Top", "Right", "Bottom", "Left"];
	var t1 = A.documentElement;
	var u1 = function(e) {
			return Q.contains(e.ownerDocument, e);
		},
		v1 = {
			composed: true
		};
	if (t1.getRootNode) {
		u1 = function(e) {
			return Q.contains(e.ownerDocument, e) || e.getRootNode(v1) === e.ownerDocument;
		};
	}
	var w1 = function(e, a) {
		e = a || e;
		return e.style.display === "none" || e.style.display === "" && u1(e) && Q.css(e, "display") === "none";
	};

	function x1(e, p, v, t) {
		var a, s, m = 20,
			b = t ? function() {
				return t.cur();
			} : function() {
				return Q.css(e, p, "");
			},
			i = b(),
			j = v && v[3] || (Q.cssNumber[p] ? "" : "px"),
			l = e.nodeType && (Q.cssNumber[p] || j !== "px" && +i) && r1.exec(Q.css(e, p));
		if (l && l[3] !== j) {
			i = i / 2;
			j = j || l[3];
			l = +i || 1;
			while (m--) {
				Q.style(e, p, l + j);
				if ((1 - s) * (1 - (s = b() / i || 0.5)) <= 0) {
					m = 0;
				}
				l = l / s;
			}
			l = l * 2;
			Q.style(e, p, l + j);
			v = v || [];
		}
		if (v) {
			l = +l || +i || 0;
			a = v[1] ? l + (v[1] + 1) * v[2] : +v[2];
			if (t) {
				t.unit = j;
				t.start = l;
				t.end = a;
			}
		}
		return a;
	}
	var y1 = {};

	function z1(e) {
		var t, a = e.ownerDocument,
			J = e.nodeName,
			b = y1[J];
		if (b) {
			return b;
		}
		t = a.body.appendChild(a.createElement(J));
		b = Q.css(t, "display");
		t.parentNode.removeChild(t);
		if (b === "none") {
			b = "block";
		}
		y1[J] = b;
		return b;
	}

	function A1(e, s) {
		var a, b, v = [],
			i = 0,
			l = e.length;
		for (; i < l; i++) {
			b = e[i];
			if (!b.style) {
				continue;
			}
			a = b.style.display;
			if (s) {
				if (a === "none") {
					v[i] = k1.get(b, "display") || null;
					if (!v[i]) {
						b.style.display = "";
					}
				}
				if (b.style.display === "" && w1(b)) {
					v[i] = z1(b);
				}
			} else {
				if (a !== "none") {
					v[i] = "none";
					k1.set(b, "display", a);
				}
			}
		}
		for (i = 0; i < l; i++) {
			if (v[i] != null) {
				e[i].style.display = v[i];
			}
		}
		return e;
	}
	Q.fn.extend({
		show: function() {
			return A1(this, true);
		},
		hide: function() {
			return A1(this);
		},
		toggle: function(s) {
			if (typeof s === "boolean") {
				return s ? this.show() : this.hide();
			}
			return this.each(function() {
				if (w1(this)) {
					Q(this).show();
				} else {
					Q(this).hide();
				}
			});
		}
	});
	var B1 = (/^(?:checkbox|radio)$/i);
	var C1 = (/<([a-z][^\/\0>\x20\t\r\n\f]*)/i);
	var D1 = (/^$|^module$|\/(?:java|ecma)script/i);
	(function() {
		var a = A.createDocumentFragment(),
			b = a.appendChild(A.createElement("div")),
			i = A.createElement("input");
		i.setAttribute("type", "radio");
		i.setAttribute("checked", "checked");
		i.setAttribute("name", "t");
		b.appendChild(i);
		x.checkClone = b.cloneNode(true).cloneNode(true).lastChild.checked;
		b.innerHTML = "<textarea>x</textarea>";
		x.noCloneChecked = !!b.cloneNode(true).lastChild.defaultValue;
		b.innerHTML = "<option></option>";
		x.option = !!b.lastChild;
	})();
	var E1 = {
		thead: [1, "<table>", "</table>"],
		col: [2, "<table><colgroup>", "</colgroup></table>"],
		tr: [2, "<table><tbody>", "</tbody></table>"],
		td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
		_default: [0, "", ""]
	};
	E1.tbody = E1.tfoot = E1.colgroup = E1.caption = E1.thead;
	E1.th = E1.td;
	if (!x.option) {
		E1.optgroup = E1.option = [1, "<select multiple='multiple'>", "</select>"];
	}

	function F1(a, t) {
		var b;
		if (typeof a.getElementsByTagName !== "undefined") {
			b = a.getElementsByTagName(t || "*");
		} else if (typeof a.querySelectorAll !== "undefined") {
			b = a.querySelectorAll(t || "*");
		} else {
			b = [];
		}
		if (t === undefined || t && J(a, t)) {
			return Q.merge([a], b);
		}
		return b;
	}

	function G1(e, a) {
		var i = 0,
			l = e.length;
		for (; i < l; i++) {
			k1.set(e[i], "globalEval", !a || k1.get(a[i], "globalEval"));
		}
	}
	var H1 = /<|&#?\w+;/;

	function I1(e, a, s, b, m) {
		var n, t, p, v, _, j, O1 = a.createDocumentFragment(),
			$1 = [],
			i = 0,
			l = e.length;
		for (; i < l; i++) {
			n = e[i];
			if (n || n === 0) {
				if (C(n) === "object") {
					Q.merge($1, n.nodeType ? [n] : n);
				} else if (!H1.test(n)) {
					$1.push(a.createTextNode(n));
				} else {
					t = t || O1.appendChild(a.createElement("div"));
					p = (C1.exec(n) || ["", ""])[1].toLowerCase();
					v = E1[p] || E1._default;
					t.innerHTML = v[1] + Q.htmlPrefilter(n) + v[2];
					j = v[0];
					while (j--) {
						t = t.lastChild;
					}
					Q.merge($1, t.childNodes);
					t = O1.firstChild;
					t.textContent = "";
				}
			}
		}
		O1.textContent = "";
		i = 0;
		while ((n = $1[i++])) {
			if (b && Q.inArray(n, b) > -1) {
				if (m) {
					m.push(n);
				}
				continue;
			}
			_ = u1(n);
			t = F1(O1.appendChild(n), "script");
			if (_) {
				G1(t);
			}
			if (s) {
				j = 0;
				while ((n = t[j++])) {
					if (D1.test(n.type || "")) {
						s.push(n);
					}
				}
			}
		}
		return O1;
	}
	var J1 = /^([^.]*)(?:\.(.+)|)/;

	function K1() {
		return true;
	}

	function L1() {
		return false;
	}

	function M1(e, t) {
		return (e === N1()) === (t === "focus");
	}

	function N1() {
		try {
			return A.activeElement;
		} catch (e) {}
	}

	function on(e, t, s, a, b, i) {
		var j, l;
		if (typeof t === "object") {
			if (typeof s !== "string") {
				a = a || s;
				s = undefined;
			}
			for (l in t) {
				on(e, l, s, a, t[l], i);
			}
			return e;
		}
		if (a == null && b == null) {
			b = s;
			a = s = undefined;
		} else if (b == null) {
			if (typeof s === "string") {
				b = a;
				a = undefined;
			} else {
				b = a;
				a = s;
				s = undefined;
			}
		}
		if (b === false) {
			b = L1;
		} else if (!b) {
			return e;
		}
		if (i === 1) {
			j = b;
			b = function(m) {
				Q().off(m);
				return j.apply(this, arguments);
			};
			b.guid = j.guid || (j.guid = Q.guid++);
		}
		return e.each(function() {
			Q.event.add(this, t, b, a, s);
		});
	}
	Q.event = {
		global: {},
		add: function(a, b, i, j, s) {
			var l, m, n, p, t, v, _, O1, $1, $2, s3, t3 = k1.get(a);
			if (!i1(a)) {
				return;
			}
			if (i.handler) {
				l = i;
				i = l.handler;
				s = l.selector;
			}
			if (s) {
				Q.find.matchesSelector(t1, s);
			}
			if (!i.guid) {
				i.guid = Q.guid++;
			}
			if (!(p = t3.events)) {
				p = t3.events = Object.create(null);
			}
			if (!(m = t3.handle)) {
				m = t3.handle = function(e) {
					return typeof Q !== "undefined" && Q.event.triggered !== e.type ? Q.event.dispatch.apply(a, arguments) : undefined;
				};
			}
			b = (b || "").match(W) || [""];
			t = b.length;
			while (t--) {
				n = J1.exec(b[t]) || [];
				$1 = s3 = n[1];
				$2 = (n[2] || "").split(".").sort();
				if (!$1) {
					continue;
				}
				_ = Q.event.special[$1] || {};
				$1 = (s ? _.delegateType : _.bindType) || $1;
				_ = Q.event.special[$1] || {};
				v = Q.extend({
					type: $1,
					origType: s3,
					data: j,
					handler: i,
					guid: i.guid,
					selector: s,
					needsContext: s && Q.expr.match.needsContext.test(s),
					namespace: $2.join(".")
				}, l);
				if (!(O1 = p[$1])) {
					O1 = p[$1] = [];
					O1.delegateCount = 0;
					if (!_.setup || _.setup.call(a, j, $2, m) === false) {
						if (a.addEventListener) {
							a.addEventListener($1, m);
						}
					}
				}
				if (_.add) {
					_.add.call(a, v);
					if (!v.handler.guid) {
						v.handler.guid = i.guid;
					}
				}
				if (s) {
					O1.splice(O1.delegateCount++, 0, v);
				} else {
					O1.push(v);
				}
				Q.event.global[$1] = true;
			}
		},
		remove: function(e, a, b, s, m) {
			var j, i, l, n, t, p, v, _, O1, $1, $2, s3 = k1.hasData(e) && k1.get(e);
			if (!s3 || !(n = s3.events)) {
				return;
			}
			a = (a || "").match(W) || [""];
			t = a.length;
			while (t--) {
				l = J1.exec(a[t]) || [];
				O1 = $2 = l[1];
				$1 = (l[2] || "").split(".").sort();
				if (!O1) {
					for (O1 in n) {
						Q.event.remove(e, O1 + a[t], b, s, true);
					}
					continue;
				}
				v = Q.event.special[O1] || {};
				O1 = (s ? v.delegateType : v.bindType) || O1;
				_ = n[O1] || [];
				l = l[2] && new RegExp("(^|\\.)" + $1.join("\\.(?:.*\\.|)") + "(\\.|$)");
				i = j = _.length;
				while (j--) {
					p = _[j];
					if ((m || $2 === p.origType) && (!b || b.guid === p.guid) && (!l || l.test(p.namespace)) && (!s || s === p.selector || s === "**" &&
							p.selector)) {
						_.splice(j, 1);
						if (p.selector) {
							_.delegateCount--;
						}
						if (v.remove) {
							v.remove.call(e, p);
						}
					}
				}
				if (i && !_.length) {
					if (!v.teardown || v.teardown.call(e, $1, s3.handle) === false) {
						Q.removeEvent(e, O1, s3.handle);
					}
					delete n[O1];
				}
			}
			if (Q.isEmptyObject(n)) {
				k1.remove(e, "handle events");
			}
		},
		dispatch: function(n) {
			var i, j, a, m, b, e, l = new Array(arguments.length),
				p = Q.event.fix(n),
				s = (k1.get(this, "events") || Object.create(null))[p.type] || [],
				t = Q.event.special[p.type] || {};
			l[0] = p;
			for (i = 1; i < arguments.length; i++) {
				l[i] = arguments[i];
			}
			p.delegateTarget = this;
			if (t.preDispatch && t.preDispatch.call(this, p) === false) {
				return;
			}
			e = Q.event.handlers.call(this, p, s);
			i = 0;
			while ((m = e[i++]) && !p.isPropagationStopped()) {
				p.currentTarget = m.elem;
				j = 0;
				while ((b = m.handlers[j++]) && !p.isImmediatePropagationStopped()) {
					if (!p.rnamespace || b.namespace === false || p.rnamespace.test(b.namespace)) {
						p.handleObj = b;
						p.data = b.data;
						a = ((Q.event.special[b.origType] || {}).handle || b.handler).apply(m.elem, l);
						if (a !== undefined) {
							if ((p.result = a) === false) {
								p.preventDefault();
								p.stopPropagation();
							}
						}
					}
				}
			}
			if (t.postDispatch) {
				t.postDispatch.call(this, p);
			}
			return p.result;
		},
		handlers: function(e, a) {
			var i, b, s, m, j, l = [],
				n = a.delegateCount,
				p = e.target;
			if (n && p.nodeType && !(e.type === "click" && e.button >= 1)) {
				for (; p !== this; p = p.parentNode || this) {
					if (p.nodeType === 1 && !(e.type === "click" && p.disabled === true)) {
						m = [];
						j = {};
						for (i = 0; i < n; i++) {
							b = a[i];
							s = b.selector + " ";
							if (j[s] === undefined) {
								j[s] = b.needsContext ? Q(s, this).index(p) > -1 : Q.find(s, this, null, [p]).length;
							}
							if (j[s]) {
								m.push(b);
							}
						}
						if (m.length) {
							l.push({
								elem: p,
								handlers: m
							});
						}
					}
				}
			}
			p = this;
			if (n < a.length) {
				l.push({
					elem: p,
					handlers: a.slice(n)
				});
			}
			return l;
		},
		addProp: function(n, a) {
			Object.defineProperty(Q.Event.prototype, n, {
				enumerable: true,
				configurable: true,
				get: y(a) ? function() {
					if (this.originalEvent) {
						return a(this.originalEvent);
					}
				} : function() {
					if (this.originalEvent) {
						return this.originalEvent[n];
					}
				},
				set: function(v) {
					Object.defineProperty(this, n, {
						enumerable: true,
						configurable: true,
						writable: true,
						value: v
					});
				}
			});
		},
		fix: function(a) {
			return a[Q.expando] ? a : new Q.Event(a);
		},
		special: {
			load: {
				noBubble: true
			},
			click: {
				setup: function(a) {
					var e = this || a;
					if (B1.test(e.type) && e.click && J(e, "input")) {
						P1(e, "click", K1);
					}
					return false;
				},
				trigger: function(a) {
					var e = this || a;
					if (B1.test(e.type) && e.click && J(e, "input")) {
						P1(e, "click");
					}
					return true;
				},
				_default: function(e) {
					var t = e.target;
					return B1.test(t.type) && t.click && J(t, "input") && k1.get(t, "click") || J(t, "a");
				}
			},
			beforeunload: {
				postDispatch: function(e) {
					if (e.result !== undefined && e.originalEvent) {
						e.originalEvent.returnValue = e.result;
					}
				}
			}
		}
	};

	function P1(e, t, M1) {
		if (!M1) {
			if (k1.get(e, t) === undefined) {
				Q.event.add(e, t, K1);
			}
			return;
		}
		k1.set(e, t, false);
		Q.event.add(e, t, {
			namespace: false,
			handler: function(a) {
				var n, b, s = k1.get(this, t);
				if ((a.isTrigger & 1) && this[t]) {
					if (!s.length) {
						s = f.call(arguments);
						k1.set(this, t, s);
						n = M1(this, t);
						this[t]();
						b = k1.get(this, t);
						if (s !== b || n) {
							k1.set(this, t, false);
						} else {
							b = {};
						}
						if (s !== b) {
							a.stopImmediatePropagation();
							a.preventDefault();
							return b && b.value;
						}
					} else if ((Q.event.special[t] || {}).delegateType) {
						a.stopPropagation();
					}
				} else if (s.length) {
					k1.set(this, t, {
						value: Q.event.trigger(Q.extend(s[0], Q.Event.prototype), s.slice(1), this)
					});
					a.stopImmediatePropagation();
				}
			}
		});
	}
	Q.removeEvent = function(e, t, a) {
		if (e.removeEventListener) {
			e.removeEventListener(t, a);
		}
	};
	Q.Event = function(s, p) {
		if (!(this instanceof Q.Event)) {
			return new Q.Event(s, p);
		}
		if (s && s.type) {
			this.originalEvent = s;
			this.type = s.type;
			this.isDefaultPrevented = s.defaultPrevented || s.defaultPrevented === undefined && s.returnValue === false ? K1 : L1;
			this.target = (s.target && s.target.nodeType === 3) ? s.target.parentNode : s.target;
			this.currentTarget = s.currentTarget;
			this.relatedTarget = s.relatedTarget;
		} else {
			this.type = s;
		}
		if (p) {
			Q.extend(this, p);
		}
		this.timeStamp = s && s.timeStamp || Date.now();
		this[Q.expando] = true;
	};
	Q.Event.prototype = {
		constructor: Q.Event,
		isDefaultPrevented: L1,
		isPropagationStopped: L1,
		isImmediatePropagationStopped: L1,
		isSimulated: false,
		preventDefault: function() {
			var e = this.originalEvent;
			this.isDefaultPrevented = K1;
			if (e && !this.isSimulated) {
				e.preventDefault();
			}
		},
		stopPropagation: function() {
			var e = this.originalEvent;
			this.isPropagationStopped = K1;
			if (e && !this.isSimulated) {
				e.stopPropagation();
			}
		},
		stopImmediatePropagation: function() {
			var e = this.originalEvent;
			this.isImmediatePropagationStopped = K1;
			if (e && !this.isSimulated) {
				e.stopImmediatePropagation();
			}
			this.stopPropagation();
		}
	};
	Q.each({
		altKey: true,
		bubbles: true,
		cancelable: true,
		changedTouches: true,
		ctrlKey: true,
		detail: true,
		eventPhase: true,
		metaKey: true,
		pageX: true,
		pageY: true,
		shiftKey: true,
		view: true,
		"char": true,
		code: true,
		charCode: true,
		key: true,
		keyCode: true,
		button: true,
		buttons: true,
		clientX: true,
		clientY: true,
		offsetX: true,
		offsetY: true,
		pointerId: true,
		pointerType: true,
		screenX: true,
		screenY: true,
		targetTouches: true,
		toElement: true,
		touches: true,
		which: true
	}, Q.event.addProp);
	Q.each({
		focus: "focusin",
		blur: "focusout"
	}, function(t, a) {
		Q.event.special[t] = {
			setup: function() {
				P1(this, t, M1);
				return false;
			},
			trigger: function() {
				P1(this, t);
				return true;
			},
			_default: function() {
				return true;
			},
			delegateType: a
		};
	});
	Q.each({
		mouseenter: "mouseover",
		mouseleave: "mouseout",
		pointerenter: "pointerover",
		pointerleave: "pointerout"
	}, function(a, b) {
		Q.event.special[a] = {
			delegateType: b,
			bindType: b,
			handle: function(e) {
				var i, t = this,
					j = e.relatedTarget,
					l = e.handleObj;
				if (!j || (j !== t && !Q.contains(t, j))) {
					e.type = l.origType;
					i = l.handler.apply(this, arguments);
					e.type = b;
				}
				return i;
			}
		};
	});
	Q.fn.extend({
		on: function(t, s, a, b) {
			return on(this, t, s, a, b);
		},
		one: function(t, s, a, b) {
			return on(this, t, s, a, b, 1);
		},
		off: function(t, s, a) {
			var b, e;
			if (t && t.preventDefault && t.handleObj) {
				b = t.handleObj;
				Q(t.delegateTarget).off(b.namespace ? b.origType + "." + b.namespace : b.origType, b.selector, b.handler);
				return this;
			}
			if (typeof t === "object") {
				for (e in t) {
					this.off(e, s, t[e]);
				}
				return this;
			}
			if (s === false || typeof s === "function") {
				a = s;
				s = undefined;
			}
			if (a === false) {
				a = L1;
			}
			return this.each(function() {
				Q.event.remove(this, t, a, s);
			});
		}
	});
	var Q1 = /<script|<style|<link/i,
		R1 = /checked\s*(?:[^=]|=\s*.checked.)/i,
		S1 = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

	function T1(e, a) {
		if (J(e, "table") && J(a.nodeType !== 11 ? a : a.firstChild, "tr")) {
			var t = Q(e).children("tbody")[0];
			if (t) {
				return t;
			} else {
				if (w.sap && w.sap.ui && w.sap.ui._jQuery3Compat && w.sap.ui._jQuery3Compat._migrateWarn) {
					w.sap.ui._jQuery3Compat._migrateWarn("Trying to add a <tr> element to a <table> without a <tbody>. " +
						"At this point, jQuery version 2 would have inserted a <tbody> element for you. " +
						"Since jQuery version 3, jQuery does not automatically create a <tbody> element anymore. " +
						"Please add the <tbody> on your own, if your code or CSS expects it.");
				}
				return e;
			}
		}
		return e;
	}

	function U1(e) {
		e.type = (e.getAttribute("type") !== null) + "/" + e.type;
		return e;
	}

	function V1(e) {
		if ((e.type || "").slice(0, 5) === "true/") {
			e.type = e.type.slice(5);
		} else {
			e.removeAttribute("type");
		}
		return e;
	}

	function W1(s, a) {
		var i, l, t, p, b, e, j;
		if (a.nodeType !== 1) {
			return;
		}
		if (k1.hasData(s)) {
			p = k1.get(s);
			j = p.events;
			if (j) {
				k1.remove(a, "handle events");
				for (t in j) {
					for (i = 0, l = j[t].length; i < l; i++) {
						Q.event.add(a, t, j[t][i]);
					}
				}
			}
		}
		if (l1.hasData(s)) {
			b = l1.access(s);
			e = Q.extend({}, b);
			l1.set(a, e);
		}
	}

	function X1(s, a) {
		var J = a.nodeName.toLowerCase();
		if (J === "input" && B1.test(s.type)) {
			a.checked = s.checked;
		} else if (J === "input" || J === "textarea") {
			a.defaultValue = s.defaultValue;
		}
	}

	function Y1(a, b, e, j) {
		b = h(b);
		var m, n, s, p, t, v, i = 0,
			l = a.length,
			_ = l - 1,
			O1 = b[0],
			$1 = y(O1);
		if ($1 || (l > 1 && typeof O1 === "string" && !x.checkClone && R1.test(O1))) {
			return a.each(function($2) {
				var s3 = a.eq($2);
				if ($1) {
					b[0] = O1.call(this, $2, s3.html());
				}
				Y1(s3, b, e, j);
			});
		}
		if (l) {
			m = I1(b, a[0].ownerDocument, false, a, j);
			n = m.firstChild;
			if (m.childNodes.length === 1) {
				m = n;
			}
			if (n || j) {
				s = Q.map(F1(m, "script"), U1);
				p = s.length;
				for (; i < l; i++) {
					t = m;
					if (i !== _) {
						t = Q.clone(t, true, true);
						if (p) {
							Q.merge(s, F1(t, "script"));
						}
					}
					e.call(a[i], t, i);
				}
				if (p) {
					v = s[s.length - 1].ownerDocument;
					Q.map(s, V1);
					for (i = 0; i < p; i++) {
						t = s[i];
						if (D1.test(t.type || "") && !k1.access(t, "globalEval") && Q.contains(v, t)) {
							if (t.src && (t.type || "").toLowerCase() !== "module") {
								if (Q._evalUrl && !t.noModule) {
									Q._evalUrl(t.src, {
										nonce: t.nonce || t.getAttribute("nonce")
									}, v);
								}
							} else {
								D(t.textContent.replace(S1, ""), t, v);
							}
						}
					}
				}
			}
		}
		return a;
	}

	function Z1(e, s, a) {
		var n, b = s ? Q.filter(s, e) : e,
			i = 0;
		for (;
			(n = b[i]) != null; i++) {
			if (!a && n.nodeType === 1) {
				Q.cleanData(F1(n));
			}
			if (n.parentNode) {
				if (a && u1(n)) {
					G1(F1(n, "script"));
				}
				n.parentNode.removeChild(n);
			}
		}
		return e;
	}
	Q.extend({
		htmlPrefilter: function(a) {
			return a;
		},
		clone: function(e, a, b) {
			var i, l, s, j, m = e.cloneNode(true),
				n = u1(e);
			if (!x.noCloneChecked && (e.nodeType === 1 || e.nodeType === 11) && !Q.isXMLDoc(e)) {
				j = F1(m);
				s = F1(e);
				for (i = 0, l = s.length; i < l; i++) {
					X1(s[i], j[i]);
				}
			}
			if (a) {
				if (b) {
					s = s || F1(e);
					j = j || F1(m);
					for (i = 0, l = s.length; i < l; i++) {
						W1(s[i], j[i]);
					}
				} else {
					W1(e, m);
				}
			}
			j = F1(m, "script");
			if (j.length > 0) {
				G1(j, !n && F1(e, "script"));
			}
			return m;
		},
		cleanData: function(e) {
			var a, b, t, s = Q.event.special,
				i = 0;
			for (;
				(b = e[i]) !== undefined; i++) {
				if (i1(b)) {
					if ((a = b[k1.expando])) {
						if (a.events) {
							for (t in a.events) {
								if (s[t]) {
									Q.event.remove(b, t);
								} else {
									Q.removeEvent(b, t, a.handle);
								}
							}
						}
						b[k1.expando] = undefined;
					}
					if (b[l1.expando]) {
						b[l1.expando] = undefined;
					}
				}
			}
		}
	});
	if (/(?:\?|&)sap-ui-xx-self-closing-check=(?:x|X|true)/.exec(w.location.search)) {
		var _1 = new RegExp(
			"^(?:a|abbr|address|article|aside|audio|b|bdi|bdo|blockquote|body|button|canvas|caption|cite|code|colgroup|data|datalist|dd|del|details|dfn|dialog|div|dl|dt|em|fieldset" +
			"|figcaption|figure|footer|form|h1|h2|h3|h4|h5|h6|head|header|hgroup|html|i|iframe|ins|kbd|label|legend|li|main|map|mark|menu|meter|nav|noscript|object|ol|optgroup|option" +
			"|output|p|picture|pre|progress|q|rp|rt|ruby|s|samp|script|section|select|slot|small|span|strong|style|sub|summary|sup|table|tbody|td|template|textarea|tfoot|th|thead|time" +
			"|title|tr|u|ul|var|video)$", "i");
		var a2 = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi;
		Q.htmlPrefilter = function(a) {
			a.replace(a2, function(b, e, i) {
				if (_1.test(i) && b.length < a.length) {
					var j = "<" + e + "></" + i + ">";
					var n = "https://launchpad.support.sap.com/#/notes/2944336";
					var l = "https://github.com/SAP/openui5/blob/master/docs/self_closing_tags_fix_instructions.md";
					var m = "jQuery incompatibility: non-void HTML tags must not use self-closing syntax.\n" +
						"HTML element used as self-closing tag: <" + e + "/>\n" + "HTML element should be closed correctly, such as: " + j + "\n" +
						"Please check the following note for more information:\n";
					var p = m + n + " or\n" + l;
					console.error(p);
					try {
						sap.ui.require(["sap/m/MessageBox", "sap/m/FormattedText", "sap/base/security/encodeXML"], function(t, v, _) {
							var O1 = new v({
								htmlText: _(m).replace(/&#xa;/g, "<br>") + '<a href="' + n + '" target="_blank" rel="noopener noreferrer">' + n +
									'</a> or<br>' + '<a href="' + l + '" target="_blank" rel="noopener noreferrer">' + l + '</a>'
							});
							t.alert(O1, {
								title: "Incompatibility detected"
							});
						}, function() {
							console.error("Showing error with UI5 controls failed. Falling back to alert().");
							setTimeout(function() {
								alert(p);
							});
						});
					} catch (s) {
						console.error("Exception in error handling: " + s + ". Falling back to alert().");
						setTimeout(function() {
							alert(p);
						});
					}
				}
			});
			return a;
		};
	}
	Q.fn.extend({
		detach: function(s) {
			return Z1(this, s, true);
		},
		remove: function(s) {
			return Z1(this, s);
		},
		text: function(v) {
			return d1(this, function(v) {
				return v === undefined ? Q.text(this) : this.empty().each(function() {
					if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
						this.textContent = v;
					}
				});
			}, null, v, arguments.length);
		},
		append: function() {
			return Y1(this, arguments, function(e) {
				if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
					var t = T1(this, e);
					t.appendChild(e);
				}
			});
		},
		prepend: function() {
			return Y1(this, arguments, function(e) {
				if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
					var t = T1(this, e);
					t.insertBefore(e, t.firstChild);
				}
			});
		},
		before: function() {
			return Y1(this, arguments, function(e) {
				if (this.parentNode) {
					this.parentNode.insertBefore(e, this);
				}
			});
		},
		after: function() {
			return Y1(this, arguments, function(e) {
				if (this.parentNode) {
					this.parentNode.insertBefore(e, this.nextSibling);
				}
			});
		},
		empty: function() {
			var e, i = 0;
			for (;
				(e = this[i]) != null; i++) {
				if (e.nodeType === 1) {
					Q.cleanData(F1(e, false));
					e.textContent = "";
				}
			}
			return this;
		},
		clone: function(a, b) {
			a = a == null ? false : a;
			b = b == null ? a : b;
			return this.map(function() {
				return Q.clone(this, a, b);
			});
		},
		html: function(v) {
			return d1(this, function(v) {
				var a = this[0] || {},
					i = 0,
					l = this.length;
				if (v === undefined && a.nodeType === 1) {
					return a.innerHTML;
				}
				if (typeof v === "string" && !Q1.test(v) && !E1[(C1.exec(v) || ["", ""])[1].toLowerCase()]) {
					v = Q.htmlPrefilter(v);
					try {
						for (; i < l; i++) {
							a = this[i] || {};
							if (a.nodeType === 1) {
								Q.cleanData(F1(a, false));
								a.innerHTML = v;
							}
						}
						a = 0;
					} catch (e) {}
				}
				if (a) {
					this.empty().append(v);
				}
			}, null, v, arguments.length);
		},
		replaceWith: function() {
			var i = [];
			return Y1(this, arguments, function(e) {
				var p = this.parentNode;
				if (Q.inArray(this, i) < 0) {
					Q.cleanData(F1(this));
					if (p) {
						p.replaceChild(e, this);
					}
				}
			}, i);
		}
	});
	Q.each({
		appendTo: "append",
		prependTo: "prepend",
		insertBefore: "before",
		insertAfter: "after",
		replaceAll: "replaceWith"
	}, function(n, a) {
		Q.fn[n] = function(s) {
			var e, b = [],
				j = Q(s),
				l = j.length - 1,
				i = 0;
			for (; i <= l; i++) {
				e = i === l ? this : this.clone(true);
				Q(j[i])[a](e);
				k.apply(b, e.get());
			}
			return this.pushStack(b);
		};
	});
	var b2 = new RegExp("^(" + q1 + ")(?!px)[a-z%]+$", "i");
	var c2 = function(e) {
		var v = e.ownerDocument.defaultView;
		if (!v || !v.opener) {
			v = w;
		}
		return v.getComputedStyle(e);
	};
	var d2 = function(e, a, b) {
		var i, n, j = {};
		for (n in a) {
			j[n] = e.style[n];
			e.style[n] = a[n];
		}
		i = b.call(e);
		for (n in a) {
			e.style[n] = j[n];
		}
		return i;
	};
	var e2 = new RegExp(s1.join("|"), "i");
	(function() {
		function a() {
			if (!n) {
				return;
			}
			m.style.cssText = "position:absolute;left:-11111px;width:60px;" + "margin-top:1px;padding:0;border:0";
			n.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;" + "margin:auto;border:1px;padding:1px;" +
				"width:60%;top:1%";
			t1.appendChild(m).appendChild(n);
			var t = w.getComputedStyle(n);
			p = t.top !== "1%";
			l = b(t.marginLeft) === 12;
			n.style.right = "60%";
			i = b(t.right) === 36;
			e = b(t.width) === 36;
			n.style.position = "absolute";
			s = b(n.offsetWidth / 3) === 12;
			t1.removeChild(m);
			n = null;
		}

		function b(t) {
			return Math.round(parseFloat(t));
		}
		var p, e, s, i, j, l, m = A.createElement("div"),
			n = A.createElement("div");
		if (!n.style) {
			return;
		}
		n.style.backgroundClip = "content-box";
		n.cloneNode(true).style.backgroundClip = "";
		x.clearCloneStyle = n.style.backgroundClip === "content-box";
		Q.extend(x, {
			boxSizingReliable: function() {
				a();
				return e;
			},
			pixelBoxStyles: function() {
				a();
				return i;
			},
			pixelPosition: function() {
				a();
				return p;
			},
			reliableMarginLeft: function() {
				a();
				return l;
			},
			scrollboxSize: function() {
				a();
				return s;
			},
			reliableTrDimensions: function() {
				var t, v, _, O1;
				if (j == null) {
					t = A.createElement("table");
					v = A.createElement("tr");
					_ = A.createElement("div");
					t.style.cssText = "position:absolute;left:-11111px;border-collapse:separate";
					v.style.cssText = "border:1px solid";
					v.style.height = "1px";
					_.style.height = "9px";
					_.style.display = "block";
					t1.appendChild(t).appendChild(v).appendChild(_);
					O1 = w.getComputedStyle(v);
					j = (parseInt(O1.height, 10) + parseInt(O1.borderTopWidth, 10) + parseInt(O1.borderBottomWidth, 10)) === v.offsetHeight;
					t1.removeChild(t);
				}
				return j;
			}
		});
	})();

	function f2(e, n, a) {
		var b, m, i, j, s = e.style;
		a = a || c2(e);
		if (a) {
			j = a.getPropertyValue(n) || a[n];
			if (j === "" && !u1(e)) {
				j = Q.style(e, n);
			}
			if (!x.pixelBoxStyles() && b2.test(j) && e2.test(n)) {
				b = s.width;
				m = s.minWidth;
				i = s.maxWidth;
				s.minWidth = s.maxWidth = s.width = j;
				j = a.width;
				s.width = b;
				s.minWidth = m;
				s.maxWidth = i;
			}
		}
		return j !== undefined ? j + "" : j;
	}

	function g2(a, b) {
		return {
			get: function() {
				if (a()) {
					delete this.get;
					return;
				}
				return (this.get = b).apply(this, arguments);
			}
		};
	}
	var h2 = ["Webkit", "Moz", "ms"],
		i2 = A.createElement("div").style,
		j2 = {};

	function k2(n) {
		var a = n[0].toUpperCase() + n.slice(1),
			i = h2.length;
		while (i--) {
			n = h2[i] + a;
			if (n in i2) {
				return n;
			}
		}
	}

	function l2(n) {
		var a = Q.cssProps[n] || j2[n];
		if (a) {
			return a;
		}
		if (n in i2) {
			return n;
		}
		return j2[n] = k2(n) || n;
	}
	var m2 = /^(none|table(?!-c[ea]).+)/,
		n2 = /^--/,
		o2 = {
			position: "absolute",
			visibility: "hidden",
			display: "block"
		},
		p2 = {
			letterSpacing: "0",
			fontWeight: "400"
		};

	function q2(_, v, s) {
		var m = r1.exec(v);
		return m ? Math.max(0, m[2] - (s || 0)) + (m[3] || "px") : v;
	}

	function r2(e, a, b, j, s, l) {
		var i = a === "width" ? 1 : 0,
			m = 0,
			n = 0;
		if (b === (j ? "border" : "content")) {
			return 0;
		}
		for (; i < 4; i += 2) {
			if (b === "margin") {
				n += Q.css(e, b + s1[i], true, s);
			}
			if (!j) {
				n += Q.css(e, "padding" + s1[i], true, s);
				if (b !== "padding") {
					n += Q.css(e, "border" + s1[i] + "Width", true, s);
				} else {
					m += Q.css(e, "border" + s1[i] + "Width", true, s);
				}
			} else {
				if (b === "content") {
					n -= Q.css(e, "padding" + s1[i], true, s);
				}
				if (b !== "margin") {
					n -= Q.css(e, "border" + s1[i] + "Width", true, s);
				}
			}
		}
		if (!j && l >= 0) {
			n += Math.max(0, Math.ceil(e["offset" + a[0].toUpperCase() + a.slice(1)] - l - n - m - 0.5)) || 0;
		}
		return n;
	}

	function s2(e, a, b) {
		var s = c2(e),
			i = !x.boxSizingReliable() || b,
			j = i && Q.css(e, "boxSizing", false, s) === "border-box",
			v = j,
			l = f2(e, a, s),
			m = "offset" + a[0].toUpperCase() + a.slice(1);
		if (b2.test(l)) {
			if (!b) {
				return l;
			}
			l = "auto";
		}
		if ((!x.boxSizingReliable() && j || !x.reliableTrDimensions() && J(e, "tr") || l === "auto" || !parseFloat(l) && Q.css(e, "display",
				false, s) === "inline") && e.getClientRects().length) {
			j = Q.css(e, "boxSizing", false, s) === "border-box";
			v = m in e;
			if (v) {
				l = e[m];
			}
		}
		l = parseFloat(l) || 0;
		return (l + r2(e, a, b || (j ? "border" : "content"), v, s, l)) + "px";
	}
	Q.extend({
		cssHooks: {
			opacity: {
				get: function(e, a) {
					if (a) {
						var b = f2(e, "opacity");
						return b === "" ? "1" : b;
					}
				}
			}
		},
		cssNumber: {
			"animationIterationCount": true,
			"columnCount": true,
			"fillOpacity": true,
			"flexGrow": true,
			"flexShrink": true,
			"fontWeight": true,
			"gridArea": true,
			"gridColumn": true,
			"gridColumnEnd": true,
			"gridColumnStart": true,
			"gridRow": true,
			"gridRowEnd": true,
			"gridRowStart": true,
			"lineHeight": true,
			"opacity": true,
			"order": true,
			"orphans": true,
			"widows": true,
			"zIndex": true,
			"zoom": true
		},
		cssProps: {},
		style: function(e, n, v, a) {
			if (!e || e.nodeType === 3 || e.nodeType === 8 || !e.style) {
				return;
			}
			var b, t, i, j = h1(n),
				l = n2.test(n),
				s = e.style;
			if (!l) {
				n = l2(j);
			}
			i = Q.cssHooks[n] || Q.cssHooks[j];
			if (v !== undefined) {
				t = typeof v;
				if (t === "string" && (b = r1.exec(v)) && b[1]) {
					v = x1(e, n, b);
					t = "number";
				}
				if (v == null || v !== v) {
					return;
				}
				if (t === "number" && !l) {
					v += b && b[3] || (Q.cssNumber[j] ? "" : "px");
				}
				if (!x.clearCloneStyle && v === "" && n.indexOf("background") === 0) {
					s[n] = "inherit";
				}
				if (!i || !("set" in i) || (v = i.set(e, v, a)) !== undefined) {
					if (l) {
						s.setProperty(n, v);
					} else {
						s[n] = v;
					}
				}
			} else {
				if (i && "get" in i && (b = i.get(e, false, a)) !== undefined) {
					return b;
				}
				return s[n];
			}
		},
		css: function(e, n, a, s) {
			var v, b, i, j = h1(n),
				l = n2.test(n);
			if (!l) {
				n = l2(j);
			}
			i = Q.cssHooks[n] || Q.cssHooks[j];
			if (i && "get" in i) {
				v = i.get(e, true, a);
			}
			if (v === undefined) {
				v = f2(e, n, s);
			}
			if (v === "normal" && n in p2) {
				v = p2[n];
			}
			if (a === "" || a) {
				b = parseFloat(v);
				return a === true || isFinite(b) ? b || 0 : v;
			}
			return v;
		}
	});
	Q.each(["height", "width"], function(_, a) {
		Q.cssHooks[a] = {
			get: function(e, b, i) {
				if (b) {
					return m2.test(Q.css(e, "display")) && (!e.getClientRects().length || !e.getBoundingClientRect().width) ? d2(e, o2, function() {
						return s2(e, a, i);
					}) : s2(e, a, i);
				}
			},
			set: function(e, v, b) {
				var m, s = c2(e),
					i = !x.scrollboxSize() && s.position === "absolute",
					j = i || b,
					l = j && Q.css(e, "boxSizing", false, s) === "border-box",
					n = b ? r2(e, a, b, l, s) : 0;
				if (l && i) {
					n -= Math.ceil(e["offset" + a[0].toUpperCase() + a.slice(1)] - parseFloat(s[a]) - r2(e, a, "border", false, s) - 0.5);
				}
				if (n && (m = r1.exec(v)) && (m[3] || "px") !== "px") {
					e.style[a] = v;
					v = Q.css(e, a);
				}
				return q2(e, v, n);
			}
		};
	});
	Q.cssHooks.marginLeft = g2(x.reliableMarginLeft, function(e, a) {
		if (a) {
			return (parseFloat(f2(e, "marginLeft")) || e.getBoundingClientRect().left - d2(e, {
				marginLeft: 0
			}, function() {
				return e.getBoundingClientRect().left;
			})) + "px";
		}
	});
	Q.each({
		margin: "",
		padding: "",
		border: "Width"
	}, function(p, s) {
		Q.cssHooks[p + s] = {
			expand: function(v) {
				var i = 0,
					e = {},
					a = typeof v === "string" ? v.split(" ") : [v];
				for (; i < 4; i++) {
					e[p + s1[i] + s] = a[i] || a[i - 2] || a[0];
				}
				return e;
			}
		};
		if (p !== "margin") {
			Q.cssHooks[p + s].set = q2;
		}
	});
	Q.fn.extend({
		css: function(n, v) {
			return d1(this, function(e, n, v) {
				var s, l, m = {},
					i = 0;
				if (Array.isArray(n)) {
					s = c2(e);
					l = n.length;
					for (; i < l; i++) {
						m[n[i]] = Q.css(e, n[i], false, s);
					}
					return m;
				}
				return v !== undefined ? Q.style(e, n, v) : Q.css(e, n);
			}, n, v, arguments.length > 1);
		}
	});

	function t2(e, a, p, b, i) {
		return new t2.prototype.init(e, a, p, b, i);
	}
	Q.Tween = t2;
	t2.prototype = {
		constructor: t2,
		init: function(e, a, p, b, i, j) {
			this.elem = e;
			this.prop = p;
			this.easing = i || Q.easing._default;
			this.options = a;
			this.start = this.now = this.cur();
			this.end = b;
			this.unit = j || (Q.cssNumber[p] ? "" : "px");
		},
		cur: function() {
			var a = t2.propHooks[this.prop];
			return a && a.get ? a.get(this) : t2.propHooks._default.get(this);
		},
		run: function(p) {
			var e, a = t2.propHooks[this.prop];
			if (this.options.duration) {
				this.pos = e = Q.easing[this.easing](p, this.options.duration * p, 0, 1, this.options.duration);
			} else {
				this.pos = e = p;
			}
			this.now = (this.end - this.start) * e + this.start;
			if (this.options.step) {
				this.options.step.call(this.elem, this.now, this);
			}
			if (a && a.set) {
				a.set(this);
			} else {
				t2.propHooks._default.set(this);
			}
			return this;
		}
	};
	t2.prototype.init.prototype = t2.prototype;
	t2.propHooks = {
		_default: {
			get: function(t) {
				var a;
				if (t.elem.nodeType !== 1 || t.elem[t.prop] != null && t.elem.style[t.prop] == null) {
					return t.elem[t.prop];
				}
				a = Q.css(t.elem, t.prop, "");
				return !a || a === "auto" ? 0 : a;
			},
			set: function(t) {
				if (Q.fx.step[t.prop]) {
					Q.fx.step[t.prop](t);
				} else if (t.elem.nodeType === 1 && (Q.cssHooks[t.prop] || t.elem.style[l2(t.prop)] != null)) {
					Q.style(t.elem, t.prop, t.now + t.unit);
				} else {
					t.elem[t.prop] = t.now;
				}
			}
		}
	};
	t2.propHooks.scrollTop = t2.propHooks.scrollLeft = {
		set: function(t) {
			if (t.elem.nodeType && t.elem.parentNode) {
				t.elem[t.prop] = t.now;
			}
		}
	};
	Q.easing = {
		linear: function(p) {
			return p;
		},
		swing: function(p) {
			return 0.5 - Math.cos(p * Math.PI) / 2;
		},
		_default: "swing"
	};
	Q.fx = t2.prototype.init;
	Q.fx.step = {};
	var u2, v2, w2 = /^(?:toggle|show|hide)$/,
		x2 = /queueHooks$/;

	function y2() {
		if (v2) {
			if (A.hidden === false && w.requestAnimationFrame) {
				w.requestAnimationFrame(y2);
			} else {
				w.setTimeout(y2, Q.fx.interval);
			}
			Q.fx.tick();
		}
	}

	function z2() {
		w.setTimeout(function() {
			u2 = undefined;
		});
		return (u2 = Date.now());
	}

	function A2(t, a) {
		var b, i = 0,
			e = {
				height: t
			};
		a = a ? 1 : 0;
		for (; i < 4; i += 2 - a) {
			b = s1[i];
			e["margin" + b] = e["padding" + b] = t;
		}
		if (a) {
			e.opacity = e.width = t;
		}
		return e;
	}

	function B2(v, p, a) {
		var t, b = (E2.tweeners[p] || []).concat(E2.tweeners["*"]),
			i = 0,
			l = b.length;
		for (; i < l; i++) {
			if ((t = b[i].call(a, p, v))) {
				return t;
			}
		}
	}

	function C2(e, p, a) {
		var b, v, t, i, j, l, m, n, s = "width" in p || "height" in p,
			_ = this,
			O1 = {},
			$1 = e.style,
			$2 = e.nodeType && w1(e),
			s3 = k1.get(e, "fxshow");
		if (!a.queue) {
			i = Q._queueHooks(e, "fx");
			if (i.unqueued == null) {
				i.unqueued = 0;
				j = i.empty.fire;
				i.empty.fire = function() {
					if (!i.unqueued) {
						j();
					}
				};
			}
			i.unqueued++;
			_.always(function() {
				_.always(function() {
					i.unqueued--;
					if (!Q.queue(e, "fx").length) {
						i.empty.fire();
					}
				});
			});
		}
		for (b in p) {
			v = p[b];
			if (w2.test(v)) {
				delete p[b];
				t = t || v === "toggle";
				if (v === ($2 ? "hide" : "show")) {
					if (v === "show" && s3 && s3[b] !== undefined) {
						$2 = true;
					} else {
						continue;
					}
				}
				O1[b] = s3 && s3[b] || Q.style(e, b);
			}
		}
		l = !Q.isEmptyObject(p);
		if (!l && Q.isEmptyObject(O1)) {
			return;
		}
		if (s && e.nodeType === 1) {
			a.overflow = [$1.overflow, $1.overflowX, $1.overflowY];
			m = s3 && s3.display;
			if (m == null) {
				m = k1.get(e, "display");
			}
			n = Q.css(e, "display");
			if (n === "none") {
				if (m) {
					n = m;
				} else {
					A1([e], true);
					m = e.style.display || m;
					n = Q.css(e, "display");
					A1([e]);
				}
			}
			if (n === "inline" || n === "inline-block" && m != null) {
				if (Q.css(e, "float") === "none") {
					if (!l) {
						_.done(function() {
							$1.display = m;
						});
						if (m == null) {
							n = $1.display;
							m = n === "none" ? "" : n;
						}
					}
					$1.display = "inline-block";
				}
			}
		}
		if (a.overflow) {
			$1.overflow = "hidden";
			_.always(function() {
				$1.overflow = a.overflow[0];
				$1.overflowX = a.overflow[1];
				$1.overflowY = a.overflow[2];
			});
		}
		l = false;
		for (b in O1) {
			if (!l) {
				if (s3) {
					if ("hidden" in s3) {
						$2 = s3.hidden;
					}
				} else {
					s3 = k1.access(e, "fxshow", {
						display: m
					});
				}
				if (t) {
					s3.hidden = !$2;
				}
				if ($2) {
					A1([e], true);
				}
				_.done(function() {
					if (!$2) {
						A1([e]);
					}
					k1.remove(e, "fxshow");
					for (b in O1) {
						Q.style(e, b, O1[b]);
					}
				});
			}
			l = B2($2 ? s3[b] : 0, b, _);
			if (!(b in s3)) {
				s3[b] = l.start;
				if ($2) {
					l.end = l.start;
					l.start = 0;
				}
			}
		}
	}

	function D2(p, s) {
		var i, n, e, v, a;
		for (i in p) {
			n = h1(i);
			e = s[n];
			v = p[i];
			if (Array.isArray(v)) {
				e = v[1];
				v = p[i] = v[0];
			}
			if (i !== n) {
				p[n] = v;
				delete p[i];
			}
			a = Q.cssHooks[n];
			if (a && "expand" in a) {
				v = a.expand(v);
				delete p[n];
				for (i in v) {
					if (!(i in p)) {
						p[i] = v[i];
						s[i] = e;
					}
				}
			} else {
				s[n] = e;
			}
		}
	}

	function E2(e, p, a) {
		var b, s, i = 0,
			l = E2.prefilters.length,
			j = Q.Deferred().always(function() {
				delete t.elem;
			}),
			t = function() {
				if (s) {
					return false;
				}
				var v = u2 || z2(),
					_ = Math.max(0, m.startTime + m.duration - v),
					O1 = _ / m.duration || 0,
					$1 = 1 - O1,
					i = 0,
					l = m.tweens.length;
				for (; i < l; i++) {
					m.tweens[i].run($1);
				}
				j.notifyWith(e, [m, $1, _]);
				if ($1 < 1 && l) {
					return _;
				}
				if (!l) {
					j.notifyWith(e, [m, 1, 0]);
				}
				j.resolveWith(e, [m]);
				return false;
			},
			m = j.promise({
				elem: e,
				props: Q.extend({}, p),
				opts: Q.extend(true, {
					specialEasing: {},
					easing: Q.easing._default
				}, a),
				originalProperties: p,
				originalOptions: a,
				startTime: u2 || z2(),
				duration: a.duration,
				tweens: [],
				createTween: function(v, _) {
					var O1 = Q.Tween(e, m.opts, v, _, m.opts.specialEasing[v] || m.opts.easing);
					m.tweens.push(O1);
					return O1;
				},
				stop: function(v) {
					var i = 0,
						l = v ? m.tweens.length : 0;
					if (s) {
						return this;
					}
					s = true;
					for (; i < l; i++) {
						m.tweens[i].run(1);
					}
					if (v) {
						j.notifyWith(e, [m, 1, 0]);
						j.resolveWith(e, [m, v]);
					} else {
						j.rejectWith(e, [m, v]);
					}
					return this;
				}
			}),
			n = m.props;
		D2(n, m.opts.specialEasing);
		for (; i < l; i++) {
			b = E2.prefilters[i].call(m, e, n, m.opts);
			if (b) {
				if (y(b.stop)) {
					Q._queueHooks(m.elem, m.opts.queue).stop = b.stop.bind(b);
				}
				return b;
			}
		}
		Q.map(n, B2, m);
		if (y(m.opts.start)) {
			m.opts.start.call(e, m);
		}
		m.progress(m.opts.progress).done(m.opts.done, m.opts.complete).fail(m.opts.fail).always(m.opts.always);
		Q.fx.timer(Q.extend(t, {
			elem: e,
			anim: m,
			queue: m.opts.queue
		}));
		return m;
	}
	Q.Animation = Q.extend(E2, {
		tweeners: {
			"*": [function(p, v) {
				var t = this.createTween(p, v);
				x1(t.elem, p, r1.exec(v), t);
				return t;
			}]
		},
		tweener: function(p, a) {
			if (y(p)) {
				a = p;
				p = ["*"];
			} else {
				p = p.match(W);
			}
			var b, i = 0,
				l = p.length;
			for (; i < l; i++) {
				b = p[i];
				E2.tweeners[b] = E2.tweeners[b] || [];
				E2.tweeners[b].unshift(a);
			}
		},
		prefilters: [C2],
		prefilter: function(a, p) {
			if (p) {
				E2.prefilters.unshift(a);
			} else {
				E2.prefilters.push(a);
			}
		}
	});
	Q.speed = function(s, e, a) {
		var b = s && typeof s === "object" ? Q.extend({}, s) : {
			complete: a || !a && e || y(s) && s,
			duration: s,
			easing: a && e || e && !y(e) && e
		};
		if (Q.fx.off) {
			b.duration = 0;
		} else {
			if (typeof b.duration !== "number") {
				if (b.duration in Q.fx.speeds) {
					b.duration = Q.fx.speeds[b.duration];
				} else {
					b.duration = Q.fx.speeds._default;
				}
			}
		}
		if (b.queue == null || b.queue === true) {
			b.queue = "fx";
		}
		b.old = b.complete;
		b.complete = function() {
			if (y(b.old)) {
				b.old.call(this);
			}
			if (b.queue) {
				Q.dequeue(this, b.queue);
			}
		};
		return b;
	};
	Q.fn.extend({
		fadeTo: function(s, t, e, a) {
			return this.filter(w1).css("opacity", 0).show().end().animate({
				opacity: t
			}, s, e, a);
		},
		animate: function(p, s, e, a) {
			var b = Q.isEmptyObject(p),
				i = Q.speed(s, e, a),
				j = function() {
					var l = E2(this, Q.extend({}, p), i);
					if (b || k1.get(this, "finish")) {
						l.stop(true);
					}
				};
			j.finish = j;
			return b || i.queue === false ? this.each(j) : this.queue(i.queue, j);
		},
		stop: function(t, a, b) {
			var s = function(e) {
				var i = e.stop;
				delete e.stop;
				i(b);
			};
			if (typeof t !== "string") {
				b = a;
				a = t;
				t = undefined;
			}
			if (a) {
				this.queue(t || "fx", []);
			}
			return this.each(function() {
				var e = true,
					i = t != null && t + "queueHooks",
					j = Q.timers,
					l = k1.get(this);
				if (i) {
					if (l[i] && l[i].stop) {
						s(l[i]);
					}
				} else {
					for (i in l) {
						if (l[i] && l[i].stop && x2.test(i)) {
							s(l[i]);
						}
					}
				}
				for (i = j.length; i--;) {
					if (j[i].elem === this && (t == null || j[i].queue === t)) {
						j[i].anim.stop(b);
						e = false;
						j.splice(i, 1);
					}
				}
				if (e || !b) {
					Q.dequeue(this, t);
				}
			});
		},
		finish: function(t) {
			if (t !== false) {
				t = t || "fx";
			}
			return this.each(function() {
				var i, a = k1.get(this),
					b = a[t + "queue"],
					e = a[t + "queueHooks"],
					j = Q.timers,
					l = b ? b.length : 0;
				a.finish = true;
				Q.queue(this, t, []);
				if (e && e.stop) {
					e.stop.call(this, true);
				}
				for (i = j.length; i--;) {
					if (j[i].elem === this && j[i].queue === t) {
						j[i].anim.stop(true);
						j.splice(i, 1);
					}
				}
				for (i = 0; i < l; i++) {
					if (b[i] && b[i].finish) {
						b[i].finish.call(this);
					}
				}
				delete a.finish;
			});
		}
	});
	Q.each(["toggle", "show", "hide"], function(_, n) {
		var a = Q.fn[n];
		Q.fn[n] = function(s, e, b) {
			return s == null || typeof s === "boolean" ? a.apply(this, arguments) : this.animate(A2(n, true), s, e, b);
		};
	});
	Q.each({
		slideDown: A2("show"),
		slideUp: A2("hide"),
		slideToggle: A2("toggle"),
		fadeIn: {
			opacity: "show"
		},
		fadeOut: {
			opacity: "hide"
		},
		fadeToggle: {
			opacity: "toggle"
		}
	}, function(n, p) {
		Q.fn[n] = function(s, e, a) {
			return this.animate(p, s, e, a);
		};
	});
	Q.timers = [];
	Q.fx.tick = function() {
		var t, i = 0,
			a = Q.timers;
		u2 = Date.now();
		for (; i < a.length; i++) {
			t = a[i];
			if (!t() && a[i] === t) {
				a.splice(i--, 1);
			}
		}
		if (!a.length) {
			Q.fx.stop();
		}
		u2 = undefined;
	};
	Q.fx.timer = function(t) {
		Q.timers.push(t);
		Q.fx.start();
	};
	Q.fx.interval = 13;
	Q.fx.start = function() {
		if (v2) {
			return;
		}
		v2 = true;
		y2();
	};
	Q.fx.stop = function() {
		v2 = null;
	};
	Q.fx.speeds = {
		slow: 600,
		fast: 200,
		_default: 400
	};
	Q.fn.delay = function(t, a) {
		t = Q.fx ? Q.fx.speeds[t] || t : t;
		a = a || "fx";
		return this.queue(a, function(n, b) {
			var e = w.setTimeout(n, t);
			b.stop = function() {
				w.clearTimeout(e);
			};
		});
	};
	(function() {
		var i = A.createElement("input"),
			s = A.createElement("select"),
			a = s.appendChild(A.createElement("option"));
		i.type = "checkbox";
		x.checkOn = i.value !== "";
		x.optSelected = a.selected;
		i = A.createElement("input");
		i.value = "t";
		i.type = "radio";
		x.radioValue = i.value === "t";
	})();
	var F2, G2 = Q.expr.attrHandle;
	Q.fn.extend({
		attr: function(n, v) {
			return d1(this, Q.attr, n, v, arguments.length > 1);
		},
		removeAttr: function(n) {
			return this.each(function() {
				Q.removeAttr(this, n);
			});
		}
	});
	Q.extend({
		attr: function(e, n, v) {
			var a, b, i = e.nodeType;
			if (i === 3 || i === 8 || i === 2) {
				return;
			}
			if (typeof e.getAttribute === "undefined") {
				return Q.prop(e, n, v);
			}
			if (i !== 1 || !Q.isXMLDoc(e)) {
				b = Q.attrHooks[n.toLowerCase()] || (Q.expr.match.bool.test(n) ? F2 : undefined);
			}
			if (v !== undefined) {
				if (v === null) {
					Q.removeAttr(e, n);
					return;
				}
				if (b && "set" in b && (a = b.set(e, v, n)) !== undefined) {
					return a;
				}
				e.setAttribute(n, v + "");
				return v;
			}
			if (b && "get" in b && (a = b.get(e, n)) !== null) {
				return a;
			}
			a = Q.find.attr(e, n);
			return a == null ? undefined : a;
		},
		attrHooks: {
			type: {
				set: function(e, v) {
					if (!x.radioValue && v === "radio" && J(e, "input")) {
						var a = e.value;
						e.setAttribute("type", v);
						if (a) {
							e.value = a;
						}
						return v;
					}
				}
			},
			style: {
				set: function(e, v) {
					return e.style = v + "";
				}
			}
		},
		removeAttr: function(e, v) {
			var n, i = 0,
				a = v && v.match(W);
			if (a && e.nodeType === 1) {
				while ((n = a[i++])) {
					if (n === "style") {
						e.style = "";
					} else {
						e.removeAttribute(n);
					}
				}
			}
		}
	});
	F2 = {
		set: function(e, v, n) {
			if (v === false) {
				Q.removeAttr(e, n);
			} else {
				e.setAttribute(n, n);
			}
			return n;
		}
	};
	Q.each(Q.expr.match.bool.source.match(/\w+/g), function(_, n) {
		var a = G2[n] || Q.find.attr;
		G2[n] = function(e, n, i) {
			var b, j, l = n.toLowerCase();
			if (!i) {
				j = G2[l];
				G2[l] = b;
				b = a(e, n, i) != null ? l : null;
				G2[l] = j;
			}
			return b;
		};
	});
	var H2 = /^(?:input|select|textarea|button)$/i,
		I2 = /^(?:a|area)$/i;
	Q.fn.extend({
		prop: function(n, v) {
			return d1(this, Q.prop, n, v, arguments.length > 1);
		},
		removeProp: function(n) {
			return this.each(function() {
				delete this[Q.propFix[n] || n];
			});
		}
	});
	Q.extend({
		prop: function(e, n, v) {
			var a, b, i = e.nodeType;
			if (i === 3 || i === 8 || i === 2) {
				return;
			}
			if (i !== 1 || !Q.isXMLDoc(e)) {
				n = Q.propFix[n] || n;
				b = Q.propHooks[n];
			}
			if (v !== undefined) {
				if (b && "set" in b && (a = b.set(e, v, n)) !== undefined) {
					return a;
				}
				return (e[n] = v);
			}
			if (b && "get" in b && (a = b.get(e, n)) !== null) {
				return a;
			}
			return e[n];
		},
		propHooks: {
			tabIndex: {
				get: function(e) {
					var t = Q.find.attr(e, "tabindex");
					if (t) {
						return parseInt(t, 10);
					}
					if (H2.test(e.nodeName) || I2.test(e.nodeName) && e.href) {
						return 0;
					}
					return -1;
				}
			}
		},
		propFix: {
			"for": "htmlFor",
			"class": "className"
		}
	});
	if (!x.optSelected) {
		Q.propHooks.selected = {
			get: function(e) {
				var p = e.parentNode;
				if (p && p.parentNode) {
					p.parentNode.selectedIndex;
				}
				return null;
			},
			set: function(e) {
				var p = e.parentNode;
				if (p) {
					p.selectedIndex;
					if (p.parentNode) {
						p.parentNode.selectedIndex;
					}
				}
			}
		};
	}
	Q.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder",
		"contentEditable"
	], function() {
		Q.propFix[this.toLowerCase()] = this;
	});

	function J2(v) {
		var t = v.match(W) || [];
		return t.join(" ");
	}

	function K2(e) {
		return e.getAttribute && e.getAttribute("class") || "";
	}

	function L2(v) {
		if (Array.isArray(v)) {
			return v;
		}
		if (typeof v === "string") {
			return v.match(W) || [];
		}
		return [];
	}
	Q.fn.extend({
		addClass: function(v) {
			var a, e, b, l, m, j, n, i = 0;
			if (y(v)) {
				return this.each(function(j) {
					Q(this).addClass(v.call(this, j, K2(this)));
				});
			}
			a = L2(v);
			if (a.length) {
				while ((e = this[i++])) {
					l = K2(e);
					b = e.nodeType === 1 && (" " + J2(l) + " ");
					if (b) {
						j = 0;
						while ((m = a[j++])) {
							if (b.indexOf(" " + m + " ") < 0) {
								b += m + " ";
							}
						}
						n = J2(b);
						if (l !== n) {
							e.setAttribute("class", n);
						}
					}
				}
			}
			return this;
		},
		removeClass: function(v) {
			var a, e, b, l, m, j, n, i = 0;
			if (y(v)) {
				return this.each(function(j) {
					Q(this).removeClass(v.call(this, j, K2(this)));
				});
			}
			if (!arguments.length) {
				return this.attr("class", "");
			}
			a = L2(v);
			if (a.length) {
				while ((e = this[i++])) {
					l = K2(e);
					b = e.nodeType === 1 && (" " + J2(l) + " ");
					if (b) {
						j = 0;
						while ((m = a[j++])) {
							while (b.indexOf(" " + m + " ") > -1) {
								b = b.replace(" " + m + " ", " ");
							}
						}
						n = J2(b);
						if (l !== n) {
							e.setAttribute("class", n);
						}
					}
				}
			}
			return this;
		},
		toggleClass: function(v, s) {
			var t = typeof v,
				a = t === "string" || Array.isArray(v);
			if (typeof s === "boolean" && a) {
				return s ? this.addClass(v) : this.removeClass(v);
			}
			if (y(v)) {
				return this.each(function(i) {
					Q(this).toggleClass(v.call(this, i, K2(this), s), s);
				});
			}
			return this.each(function() {
				var b, i, e, j;
				if (a) {
					i = 0;
					e = Q(this);
					j = L2(v);
					while ((b = j[i++])) {
						if (e.hasClass(b)) {
							e.removeClass(b);
						} else {
							e.addClass(b);
						}
					}
				} else if (v === undefined || t === "boolean") {
					b = K2(this);
					if (b) {
						k1.set(this, "__className__", b);
					}
					if (this.setAttribute) {
						this.setAttribute("class", b || v === false ? "" : k1.get(this, "__className__") || "");
					}
				}
			});
		},
		hasClass: function(s) {
			var a, e, i = 0;
			a = " " + s + " ";
			while ((e = this[i++])) {
				if (e.nodeType === 1 && (" " + J2(K2(e)) + " ").indexOf(a) > -1) {
					return true;
				}
			}
			return false;
		}
	});
	var M2 = /\r/g;
	Q.fn.extend({
		val: function(v) {
			var a, b, e, j = this[0];
			if (!arguments.length) {
				if (j) {
					a = Q.valHooks[j.type] || Q.valHooks[j.nodeName.toLowerCase()];
					if (a && "get" in a && (b = a.get(j, "value")) !== undefined) {
						return b;
					}
					b = j.value;
					if (typeof b === "string") {
						return b.replace(M2, "");
					}
					return b == null ? "" : b;
				}
				return;
			}
			e = y(v);
			return this.each(function(i) {
				var l;
				if (this.nodeType !== 1) {
					return;
				}
				if (e) {
					l = v.call(this, i, Q(this).val());
				} else {
					l = v;
				}
				if (l == null) {
					l = "";
				} else if (typeof l === "number") {
					l += "";
				} else if (Array.isArray(l)) {
					l = Q.map(l, function(v) {
						return v == null ? "" : v + "";
					});
				}
				a = Q.valHooks[this.type] || Q.valHooks[this.nodeName.toLowerCase()];
				if (!a || !("set" in a) || a.set(this, l, "value") === undefined) {
					this.value = l;
				}
			});
		}
	});
	Q.extend({
		valHooks: {
			option: {
				get: function(e) {
					var v = Q.find.attr(e, "value");
					return v != null ? v : J2(Q.text(e));
				}
			},
			select: {
				get: function(e) {
					var v, a, i, b = e.options,
						j = e.selectedIndex,
						l = e.type === "select-one",
						m = l ? null : [],
						n = l ? j + 1 : b.length;
					if (j < 0) {
						i = n;
					} else {
						i = l ? j : 0;
					}
					for (; i < n; i++) {
						a = b[i];
						if ((a.selected || i === j) && !a.disabled && (!a.parentNode.disabled || !J(a.parentNode, "optgroup"))) {
							v = Q(a).val();
							if (l) {
								return v;
							}
							m.push(v);
						}
					}
					return m;
				},
				set: function(e, v) {
					var a, b, j = e.options,
						l = Q.makeArray(v),
						i = j.length;
					while (i--) {
						b = j[i];
						if (b.selected = Q.inArray(Q.valHooks.option.get(b), l) > -1) {
							a = true;
						}
					}
					if (!a) {
						e.selectedIndex = -1;
					}
					return l;
				}
			}
		}
	});
	Q.each(["radio", "checkbox"], function() {
		Q.valHooks[this] = {
			set: function(e, v) {
				if (Array.isArray(v)) {
					return (e.checked = Q.inArray(Q(e).val(), v) > -1);
				}
			}
		};
		if (!x.checkOn) {
			Q.valHooks[this].get = function(e) {
				return e.getAttribute("value") === null ? "on" : e.value;
			};
		}
	});
	var N2 = /^(?:focusinfocus|focusoutblur)$/,
		O2 = function(e) {
			e.stopPropagation();
		};
	Q.extend(Q.event, {
		trigger: function(e, a, b, j) {
			var i, l, t, m, n, p, s, v, _ = [b || A],
				O1 = u.call(e, "type") ? e.type : e,
				$1 = u.call(e, "namespace") ? e.namespace.split(".") : [];
			l = v = t = b = b || A;
			if (b.nodeType === 3 || b.nodeType === 8) {
				return;
			}
			if (N2.test(O1 + Q.event.triggered)) {
				return;
			}
			if (O1.indexOf(".") > -1) {
				$1 = O1.split(".");
				O1 = $1.shift();
				$1.sort();
			}
			n = O1.indexOf(":") < 0 && "on" + O1;
			e = e[Q.expando] ? e : new Q.Event(O1, typeof e === "object" && e);
			e.isTrigger = j ? 2 : 3;
			e.namespace = $1.join(".");
			e.rnamespace = e.namespace ? new RegExp("(^|\\.)" + $1.join("\\.(?:.*\\.|)") + "(\\.|$)") : null;
			e.result = undefined;
			if (!e.target) {
				e.target = b;
			}
			a = a == null ? [e] : Q.makeArray(a, [e]);
			s = Q.event.special[O1] || {};
			if (!j && s.trigger && s.trigger.apply(b, a) === false) {
				return;
			}
			if (!j && !s.noBubble && !z(b)) {
				m = s.delegateType || O1;
				if (!N2.test(m + O1)) {
					l = l.parentNode;
				}
				for (; l; l = l.parentNode) {
					_.push(l);
					t = l;
				}
				if (t === (b.ownerDocument || A)) {
					_.push(t.defaultView || t.parentWindow || w);
				}
			}
			i = 0;
			while ((l = _[i++]) && !e.isPropagationStopped()) {
				v = l;
				e.type = i > 1 ? m : s.bindType || O1;
				p = (k1.get(l, "events") || Object.create(null))[e.type] && k1.get(l, "handle");
				if (p) {
					p.apply(l, a);
				}
				p = n && l[n];
				if (p && p.apply && i1(l)) {
					e.result = p.apply(l, a);
					if (e.result === false) {
						e.preventDefault();
					}
				}
			}
			e.type = O1;
			if (!j && !e.isDefaultPrevented()) {
				if ((!s._default || s._default.apply(_.pop(), a) === false) && i1(b)) {
					if (n && y(b[O1]) && !z(b)) {
						t = b[n];
						if (t) {
							b[n] = null;
						}
						Q.event.triggered = O1;
						if (e.isPropagationStopped()) {
							v.addEventListener(O1, O2);
						}
						b[O1]();
						if (e.isPropagationStopped()) {
							v.removeEventListener(O1, O2);
						}
						Q.event.triggered = undefined;
						if (t) {
							b[n] = t;
						}
					}
				}
			}
			return e.result;
		},
		simulate: function(t, a, b) {
			var e = Q.extend(new Q.Event(), b, {
				type: t,
				isSimulated: true
			});
			Q.event.trigger(e, null, a);
		}
	});
	Q.fn.extend({
		trigger: function(t, a) {
			return this.each(function() {
				Q.event.trigger(t, a, this);
			});
		},
		triggerHandler: function(t, a) {
			var e = this[0];
			if (e) {
				return Q.event.trigger(t, a, e, true);
			}
		}
	});
	var P2 = w.location;
	var Q2 = {
		guid: Date.now()
	};
	var R2 = (/\?/);
	Q.parseXML = function(a) {
		var b, p;
		if (!a || typeof a !== "string") {
			return null;
		}
		try {
			b = (new w.DOMParser()).parseFromString(a, "text/xml");
		} catch (e) {}
		p = b && b.getElementsByTagName("parsererror")[0];
		if (!b || p) {
			Q.error("Invalid XML: " + (p ? Q.map(p.childNodes, function(i) {
				return i.textContent;
			}).join("\n") : a));
		}
		return b;
	};
	var S2 = /\[\]$/,
		T2 = /\r?\n/g,
		U2 = /^(?:submit|button|image|reset|file)$/i,
		V2 = /^(?:input|select|textarea|keygen)/i;

	function W2(p, a, t, b) {
		var n;
		if (Array.isArray(a)) {
			Q.each(a, function(i, v) {
				if (t || S2.test(p)) {
					b(p, v);
				} else {
					W2(p + "[" + (typeof v === "object" && v != null ? i : "") + "]", v, t, b);
				}
			});
		} else if (!t && C(a) === "object") {
			for (n in a) {
				W2(p + "[" + n + "]", a[n], t, b);
			}
		} else {
			b(p, a);
		}
	}
	Q.param = function(a, t) {
		var p, s = [],
			b = function(e, v) {
				var i = y(v) ? v() : v;
				s[s.length] = encodeURIComponent(e) + "=" + encodeURIComponent(i == null ? "" : i);
			};
		if (a == null) {
			return "";
		}
		if (Array.isArray(a) || (a.jquery && !Q.isPlainObject(a))) {
			Q.each(a, function() {
				b(this.name, this.value);
			});
		} else {
			for (p in a) {
				W2(p, a[p], t, b);
			}
		}
		return s.join("&");
	};
	Q.fn.extend({
		serialize: function() {
			return Q.param(this.serializeArray());
		},
		serializeArray: function() {
			return this.map(function() {
				var e = Q.prop(this, "elements");
				return e ? Q.makeArray(e) : this;
			}).filter(function() {
				var t = this.type;
				return this.name && !Q(this).is(":disabled") && V2.test(this.nodeName) && !U2.test(t) && (this.checked || !B1.test(t));
			}).map(function(_, e) {
				var v = Q(this).val();
				if (v == null) {
					return null;
				}
				if (Array.isArray(v)) {
					return Q.map(v, function(v) {
						return {
							name: e.name,
							value: v.replace(T2, "\r\n")
						};
					});
				}
				return {
					name: e.name,
					value: v.replace(T2, "\r\n")
				};
			}).get();
		}
	});
	var X2 = /%20/g,
		Y2 = /#.*$/,
		Z2 = /([?&])_=[^&]*/,
		_2 = /^(.*?):[ \t]*([^\r\n]*)$/mg,
		a3 = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
		b3 = /^(?:GET|HEAD)$/,
		c3 = /^\/\//,
		d3 = {},
		e3 = {},
		f3 = "*/".concat("*"),
		g3 = A.createElement("a");
	g3.href = P2.href;

	function h3(s) {
		return function(a, b) {
			if (typeof a !== "string") {
				b = a;
				a = "*";
			}
			var e, i = 0,
				j = a.toLowerCase().match(W) || [];
			if (y(b)) {
				while ((e = j[i++])) {
					if (e[0] === "+") {
						e = e.slice(1) || "*";
						(s[e] = s[e] || []).unshift(b);
					} else {
						(s[e] = s[e] || []).push(b);
					}
				}
			}
		};
	}

	function i3(s, a, b, j) {
		var i = {},
			e = (s === e3);

		function l(m) {
			var n;
			i[m] = true;
			Q.each(s[m] || [], function(_, p) {
				var t = p(a, b, j);
				if (typeof t === "string" && !e && !i[t]) {
					a.dataTypes.unshift(t);
					l(t);
					return false;
				} else if (e) {
					return !(n = t);
				}
			});
			return n;
		}
		return l(a.dataTypes[0]) || !i["*"] && l("*");
	}

	function j3(t, s) {
		var a, b, e = Q.ajaxSettings.flatOptions || {};
		for (a in s) {
			if (s[a] !== undefined) {
				(e[a] ? t : (b || (b = {})))[a] = s[a];
			}
		}
		if (b) {
			Q.extend(true, t, b);
		}
		return t;
	}

	function k3(s, j, a) {
		var b, t, e, i, l = s.contents,
			m = s.dataTypes;
		while (m[0] === "*") {
			m.shift();
			if (b === undefined) {
				b = s.mimeType || j.getResponseHeader("Content-Type");
			}
		}
		if (b) {
			for (t in l) {
				if (l[t] && l[t].test(b)) {
					m.unshift(t);
					break;
				}
			}
		}
		if (m[0] in a) {
			e = m[0];
		} else {
			for (t in a) {
				if (!m[0] || s.converters[t + " " + m[0]]) {
					e = t;
					break;
				}
				if (!i) {
					i = t;
				}
			}
			e = e || i;
		}
		if (e) {
			if (e !== m[0]) {
				m.unshift(e);
			}
			return a[e];
		}
	}

	function l3(s, a, j, i) {
		var b, l, m, t, p, n = {},
			v = s.dataTypes.slice();
		if (v[1]) {
			for (m in s.converters) {
				n[m.toLowerCase()] = s.converters[m];
			}
		}
		l = v.shift();
		while (l) {
			if (s.responseFields[l]) {
				j[s.responseFields[l]] = a;
			}
			if (!p && i && s.dataFilter) {
				a = s.dataFilter(a, s.dataType);
			}
			p = l;
			l = v.shift();
			if (l) {
				if (l === "*") {
					l = p;
				} else if (p !== "*" && p !== l) {
					m = n[p + " " + l] || n["* " + l];
					if (!m) {
						for (b in n) {
							t = b.split(" ");
							if (t[1] === l) {
								m = n[p + " " + t[0]] || n["* " + t[0]];
								if (m) {
									if (m === true) {
										m = n[b];
									} else if (n[b] !== true) {
										l = t[0];
										v.unshift(t[1]);
									}
									break;
								}
							}
						}
					}
					if (m !== true) {
						if (m && s.throws) {
							a = m(a);
						} else {
							try {
								a = m(a);
							} catch (e) {
								return {
									state: "parsererror",
									error: m ? e : "No conversion from " + p + " to " + l
								};
							}
						}
					}
				}
			}
		}
		return {
			state: "success",
			data: a
		};
	}
	Q.extend({
		active: 0,
		lastModified: {},
		etag: {},
		ajaxSettings: {
			url: P2.href,
			type: "GET",
			isLocal: a3.test(P2.protocol),
			global: true,
			processData: true,
			async: true,
			contentType: "application/x-www-form-urlencoded; charset=UTF-8",
			accepts: {
				"*": f3,
				text: "text/plain",
				html: "text/html",
				xml: "application/xml, text/xml",
				json: "application/json, text/javascript"
			},
			contents: {
				xml: /\bxml\b/,
				html: /\bhtml/,
				json: /\bjson\b/
			},
			responseFields: {
				xml: "responseXML",
				text: "responseText",
				json: "responseJSON"
			},
			converters: {
				"* text": String,
				"text html": true,
				"text json": JSON.parse,
				"text xml": Q.parseXML
			},
			flatOptions: {
				url: true,
				context: true
			}
		},
		ajaxSetup: function(t, s) {
			return s ? j3(j3(t, Q.ajaxSettings), s) : j3(Q.ajaxSettings, t);
		},
		ajaxPrefilter: h3(d3),
		ajaxTransport: h3(e3),
		ajax: function(a, b) {
			if (typeof a === "object") {
				b = a;
				a = undefined;
			}
			b = b || {};
			var t, j, l, m, n, p, c1, v, i, _, s = Q.ajaxSetup({}, b),
				O1 = s.context || s,
				$1 = s.context && (O1.nodeType || O1.jquery) ? Q(O1) : Q.event,
				$2 = Q.Deferred(),
				s3 = Q.Callbacks("once memory"),
				t3 = s.statusCode || {},
				u3 = {},
				v3 = {},
				w3 = "canceled",
				x3 = {
					readyState: 0,
					getResponseHeader: function(z3) {
						var A3;
						if (c1) {
							if (!m) {
								m = {};
								while ((A3 = _2.exec(l))) {
									m[A3[1].toLowerCase() + " "] = (m[A3[1].toLowerCase() + " "] || []).concat(A3[2]);
								}
							}
							A3 = m[z3.toLowerCase() + " "];
						}
						return A3 == null ? null : A3.join(", ");
					},
					getAllResponseHeaders: function() {
						return c1 ? l : null;
					},
					setRequestHeader: function(z3, A3) {
						if (c1 == null) {
							z3 = v3[z3.toLowerCase()] = v3[z3.toLowerCase()] || z3;
							u3[z3] = A3;
						}
						return this;
					},
					overrideMimeType: function(z3) {
						if (c1 == null) {
							s.mimeType = z3;
						}
						return this;
					},
					statusCode: function(z3) {
						var A3;
						if (z3) {
							if (c1) {
								x3.always(z3[x3.status]);
							} else {
								for (A3 in z3) {
									t3[A3] = [t3[A3], z3[A3]];
								}
							}
						}
						return this;
					},
					abort: function(z3) {
						var A3 = z3 || w3;
						if (t) {
							t.abort(A3);
						}
						y3(0, A3);
						return this;
					}
				};
			$2.promise(x3);
			s.url = ((a || s.url || P2.href) + "").replace(c3, P2.protocol + "//");
			s.type = b.method || b.type || s.method || s.type;
			s.dataTypes = (s.dataType || "*").toLowerCase().match(W) || [""];
			if (s.crossDomain == null) {
				p = A.createElement("a");
				try {
					p.href = s.url;
					p.href = p.href;
					s.crossDomain = g3.protocol + "//" + g3.host !== p.protocol + "//" + p.host;
				} catch (e) {
					s.crossDomain = true;
				}
			}
			if (s.data && s.processData && typeof s.data !== "string") {
				s.data = Q.param(s.data, s.traditional);
			}
			i3(d3, s, b, x3);
			if (c1) {
				return x3;
			}
			v = Q.event && s.global;
			if (v && Q.active++ === 0) {
				Q.event.trigger("ajaxStart");
			}
			s.type = s.type.toUpperCase();
			s.hasContent = !b3.test(s.type);
			j = s.url.replace(Y2, "");
			if (!s.hasContent) {
				_ = s.url.slice(j.length);
				if (s.data && (s.processData || typeof s.data === "string")) {
					j += (R2.test(j) ? "&" : "?") + s.data;
					delete s.data;
				}
				if (s.cache === false) {
					j = j.replace(Z2, "$1");
					_ = (R2.test(j) ? "&" : "?") + "_=" + (Q2.guid++) + _;
				}
				s.url = j + _;
			} else if (s.data && s.processData && (s.contentType || "").indexOf("application/x-www-form-urlencoded") === 0) {
				s.data = s.data.replace(X2, "+");
			}
			if (s.ifModified) {
				if (Q.lastModified[j]) {
					x3.setRequestHeader("If-Modified-Since", Q.lastModified[j]);
				}
				if (Q.etag[j]) {
					x3.setRequestHeader("If-None-Match", Q.etag[j]);
				}
			}
			if (s.data && s.hasContent && s.contentType !== false || b.contentType) {
				x3.setRequestHeader("Content-Type", s.contentType);
			}
			x3.setRequestHeader("Accept", s.dataTypes[0] && s.accepts[s.dataTypes[0]] ? s.accepts[s.dataTypes[0]] + (s.dataTypes[0] !== "*" ?
				", " + f3 + "; q=0.01" : "") : s.accepts["*"]);
			for (i in s.headers) {
				x3.setRequestHeader(i, s.headers[i]);
			}
			if (s.beforeSend && (s.beforeSend.call(O1, x3, s) === false || c1)) {
				return x3.abort();
			}
			w3 = "abort";
			s3.add(s.complete);
			x3.done(s.success);
			x3.fail(s.error);
			t = i3(e3, s, b, x3);
			if (!t) {
				y3(-1, "No Transport");
			} else {
				x3.readyState = 1;
				if (v) {
					$1.trigger("ajaxSend", [x3, s]);
				}
				if (c1) {
					return x3;
				}
				if (s.async && s.timeout > 0) {
					n = w.setTimeout(function() {
						x3.abort("timeout");
					}, s.timeout);
				}
				try {
					c1 = false;
					t.send(u3, y3);
				} catch (e) {
					if (c1) {
						throw e;
					}
					y3(-1, e);
				}
			}

			function y3(z3, A3, B3, C3) {
				var D3, E3, F3, G3, H3, I3 = A3;
				if (c1) {
					return;
				}
				c1 = true;
				if (n) {
					w.clearTimeout(n);
				}
				t = undefined;
				l = C3 || "";
				x3.readyState = z3 > 0 ? 4 : 0;
				D3 = z3 >= 200 && z3 < 300 || z3 === 304;
				if (B3) {
					G3 = k3(s, x3, B3);
				}
				if (!D3 && Q.inArray("script", s.dataTypes) > -1 && Q.inArray("json", s.dataTypes) < 0) {
					s.converters["text script"] = function() {};
				}
				G3 = l3(s, G3, x3, D3);
				if (D3) {
					if (s.ifModified) {
						H3 = x3.getResponseHeader("Last-Modified");
						if (H3) {
							Q.lastModified[j] = H3;
						}
						H3 = x3.getResponseHeader("etag");
						if (H3) {
							Q.etag[j] = H3;
						}
					}
					if (z3 === 204 || s.type === "HEAD") {
						I3 = "nocontent";
					} else if (z3 === 304) {
						I3 = "notmodified";
					} else {
						I3 = G3.state;
						E3 = G3.data;
						F3 = G3.error;
						D3 = !F3;
					}
				} else {
					F3 = I3;
					if (z3 || !I3) {
						I3 = "error";
						if (z3 < 0) {
							z3 = 0;
						}
					}
				}
				x3.status = z3;
				x3.statusText = (A3 || I3) + "";
				if (D3) {
					$2.resolveWith(O1, [E3, I3, x3]);
				} else {
					$2.rejectWith(O1, [x3, I3, F3]);
				}
				x3.statusCode(t3);
				t3 = undefined;
				if (v) {
					$1.trigger(D3 ? "ajaxSuccess" : "ajaxError", [x3, s, D3 ? E3 : F3]);
				}
				s3.fireWith(O1, [x3, I3]);
				if (v) {
					$1.trigger("ajaxComplete", [x3, s]);
					if (!(--Q.active)) {
						Q.event.trigger("ajaxStop");
					}
				}
			}
			return x3;
		},
		getJSON: function(a, b, e) {
			return Q.get(a, b, e, "json");
		},
		getScript: function(a, b) {
			return Q.get(a, undefined, b, "script");
		}
	});
	Q.each(["get", "post"], function(_, m) {
		Q[m] = function(a, b, e, t) {
			if (y(b)) {
				t = t || e;
				e = b;
				b = undefined;
			}
			return Q.ajax(Q.extend({
				url: a,
				type: m,
				dataType: t,
				data: b,
				success: e
			}, Q.isPlainObject(a) && a));
		};
	});
	Q.ajaxPrefilter(function(s) {
		var i;
		for (i in s.headers) {
			if (i.toLowerCase() === "content-type") {
				s.contentType = s.headers[i] || "";
			}
		}
	});
	Q._evalUrl = function(a, b, e) {
		return Q.ajax({
			url: a,
			type: "GET",
			dataType: "script",
			cache: true,
			async: false,
			global: false,
			converters: {
				"text script": function() {}
			},
			dataFilter: function(i) {
				Q.globalEval(i, b, e);
			}
		});
	};
	Q.fn.extend({
		wrapAll: function(a) {
			var b;
			if (this[0]) {
				if (y(a)) {
					a = a.call(this[0]);
				}
				b = Q(a, this[0].ownerDocument).eq(0).clone(true);
				if (this[0].parentNode) {
					b.insertBefore(this[0]);
				}
				b.map(function() {
					var e = this;
					while (e.firstElementChild) {
						e = e.firstElementChild;
					}
					return e;
				}).append(this);
			}
			return this;
		},
		wrapInner: function(a) {
			if (y(a)) {
				return this.each(function(i) {
					Q(this).wrapInner(a.call(this, i));
				});
			}
			return this.each(function() {
				var s = Q(this),
					b = s.contents();
				if (b.length) {
					b.wrapAll(a);
				} else {
					s.append(a);
				}
			});
		},
		wrap: function(a) {
			var b = y(a);
			return this.each(function(i) {
				Q(this).wrapAll(b ? a.call(this, i) : a);
			});
		},
		unwrap: function(s) {
			this.parent(s).not("body").each(function() {
				Q(this).replaceWith(this.childNodes);
			});
			return this;
		}
	});
	Q.expr.pseudos.hidden = function(e) {
		return !Q.expr.pseudos.visible(e);
	};
	Q.expr.pseudos.visible = function(e) {
		return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length);
	};
	Q.ajaxSettings.xhr = function() {
		try {
			return new w.XMLHttpRequest();
		} catch (e) {}
	};
	var m3 = {
			0: 200,
			1223: 204
		},
		n3 = Q.ajaxSettings.xhr();
	x.cors = !!n3 && ("withCredentials" in n3);
	x.ajax = n3 = !!n3;
	Q.ajaxTransport(function(a) {
		var b, j;
		if (x.cors || n3 && !a.crossDomain) {
			return {
				send: function(l, m) {
					var i, n = a.xhr();
					n.open(a.type, a.url, a.async, a.username, a.password);
					if (a.xhrFields) {
						for (i in a.xhrFields) {
							n[i] = a.xhrFields[i];
						}
					}
					if (a.mimeType && n.overrideMimeType) {
						n.overrideMimeType(a.mimeType);
					}
					if (!a.crossDomain && !l["X-Requested-With"]) {
						l["X-Requested-With"] = "XMLHttpRequest";
					}
					for (i in l) {
						n.setRequestHeader(i, l[i]);
					}
					b = function(t) {
						return function() {
							if (b) {
								b = j = n.onload = n.onerror = n.onabort = n.ontimeout = n.onreadystatechange = null;
								if (t === "abort") {
									n.abort();
								} else if (t === "error") {
									if (typeof n.status !== "number") {
										m(0, "error");
									} else {
										m(n.status, n.statusText);
									}
								} else {
									m(m3[n.status] || n.status, n.statusText, (n.responseType || "text") !== "text" || typeof n.responseText !== "string" ? {
										binary: n.response
									} : {
										text: n.responseText
									}, n.getAllResponseHeaders());
								}
							}
						};
					};
					n.onload = b();
					j = n.onerror = n.ontimeout = b("error");
					if (n.onabort !== undefined) {
						n.onabort = j;
					} else {
						n.onreadystatechange = function() {
							if (n.readyState === 4) {
								w.setTimeout(function() {
									if (b) {
										j();
									}
								});
							}
						};
					}
					b = b("abort");
					try {
						n.send(a.hasContent && a.data || null);
					} catch (e) {
						if (b) {
							throw e;
						}
					}
				},
				abort: function() {
					if (b) {
						b();
					}
				}
			};
		}
	});
	Q.ajaxPrefilter(function(s) {
		if (s.crossDomain) {
			s.contents.script = false;
		}
	});
	Q.ajaxSetup({
		accepts: {
			script: "text/javascript, application/javascript, " + "application/ecmascript, application/x-ecmascript"
		},
		contents: {
			script: /\b(?:java|ecma)script\b/
		},
		converters: {
			"text script": function(t) {
				Q.globalEval(t);
				return t;
			}
		}
	});
	Q.ajaxPrefilter("script", function(s) {
		if (s.cache === undefined) {
			s.cache = false;
		}
		if (s.crossDomain) {
			s.type = "GET";
		}
	});
	Q.ajaxTransport("script", function(s) {
		if (s.crossDomain || s.scriptAttrs) {
			var a, b;
			return {
				send: function(_, e) {
					a = Q("<script>").attr(s.scriptAttrs || {}).prop({
						charset: s.scriptCharset,
						src: s.url
					}).on("load error", b = function(i) {
						a.remove();
						b = null;
						if (i) {
							e(i.type === "error" ? 404 : 200, i.type);
						}
					});
					A.head.appendChild(a[0]);
				},
				abort: function() {
					if (b) {
						b();
					}
				}
			};
		}
	});
	var o3 = [],
		p3 = /(=)\?(?=&|$)|\?\?/;
	Q.ajaxSetup({
		jsonp: "callback",
		jsonpCallback: function() {
			var a = o3.pop() || (Q.expando + "_" + (Q2.guid++));
			this[a] = true;
			return a;
		}
	});
	Q.ajaxPrefilter("json jsonp", function(s, a, j) {
		var b, e, i, l = s.jsonp !== false && (p3.test(s.url) ? "url" : typeof s.data === "string" && (s.contentType || "").indexOf(
			"application/x-www-form-urlencoded") === 0 && p3.test(s.data) && "data");
		if (l || s.dataTypes[0] === "jsonp") {
			b = s.jsonpCallback = y(s.jsonpCallback) ? s.jsonpCallback() : s.jsonpCallback;
			if (l) {
				s[l] = s[l].replace(p3, "$1" + b);
			} else if (s.jsonp !== false) {
				s.url += (R2.test(s.url) ? "&" : "?") + s.jsonp + "=" + b;
			}
			s.converters["script json"] = function() {
				if (!i) {
					Q.error(b + " was not called");
				}
				return i[0];
			};
			s.dataTypes[0] = "json";
			e = w[b];
			w[b] = function() {
				i = arguments;
			};
			j.always(function() {
				if (e === undefined) {
					Q(w).removeProp(b);
				} else {
					w[b] = e;
				}
				if (s[b]) {
					s.jsonpCallback = a.jsonpCallback;
					o3.push(b);
				}
				if (i && y(e)) {
					e(i[0]);
				}
				i = e = undefined;
			});
			return "script";
		}
	});
	x.createHTMLDocument = (function() {
		var b = A.implementation.createHTMLDocument("").body;
		b.innerHTML = "<form></form><form></form>";
		return b.childNodes.length === 2;
	})();
	Q.parseHTML = function(a, b, e) {
		if (typeof a !== "string") {
			return [];
		}
		if (typeof b === "boolean") {
			e = b;
			b = false;
		}
		var i, p, s;
		if (!b) {
			if (x.createHTMLDocument) {
				b = A.implementation.createHTMLDocument("");
				if (b.domain !== A.domain) {
					b.domain = A.domain;
				}
				i = b.createElement("base");
				i.href = A.location.href;
				b.head.appendChild(i);
			} else {
				b = A;
			}
		}
		p = K.exec(a);
		s = !e && [];
		if (p) {
			return [b.createElement(p[1])];
		}
		p = I1([a], b, s);
		if (s && s.length) {
			Q(s).remove();
		}
		return Q.merge([], p.childNodes);
	};
	Q.fn.load = function(a, p, b) {
		var s, t, e, i = this,
			j = a.indexOf(" ");
		if (j > -1) {
			s = J2(a.slice(j));
			a = a.slice(0, j);
		}
		if (y(p)) {
			b = p;
			p = undefined;
		} else if (p && typeof p === "object") {
			t = "POST";
		}
		if (i.length > 0) {
			Q.ajax({
				url: a,
				type: t || "GET",
				dataType: "html",
				data: p
			}).done(function(l) {
				e = arguments;
				i.html(s ? Q("<div>").append(Q.parseHTML(l)).find(s) : l);
			}).always(b && function(l, m) {
				i.each(function() {
					b.apply(this, e || [l.responseText, m, l]);
				});
			});
		}
		return this;
	};
	Q.expr.pseudos.animated = function(e) {
		return Q.grep(Q.timers, function(a) {
			return e === a.elem;
		}).length;
	};
	Q.offset = {
		setOffset: function(e, a, i) {
			var b, j, l, m, n, p, s, t = Q.css(e, "position"),
				v = Q(e),
				_ = {};
			if (t === "static") {
				e.style.position = "relative";
			}
			n = v.offset();
			l = Q.css(e, "top");
			p = Q.css(e, "left");
			s = (t === "absolute" || t === "fixed") && (l + p).indexOf("auto") > -1;
			if (s) {
				b = v.position();
				m = b.top;
				j = b.left;
			} else {
				m = parseFloat(l) || 0;
				j = parseFloat(p) || 0;
			}
			if (y(a)) {
				a = a.call(e, i, Q.extend({}, n));
			}
			if (a.top != null) {
				_.top = (a.top - n.top) + m;
			}
			if (a.left != null) {
				_.left = (a.left - n.left) + j;
			}
			if ("using" in a) {
				a.using.call(e, _);
			} else {
				v.css(_);
			}
		}
	};
	x.safeBoundingClientRect = (function() {
		var a = A.createElement("div");
		try {
			return !!a.getBoundingClientRect();
		} catch (e) {
			return false;
		} finally {
			a = null;
		}
	})();
	Q.fn.extend({
		offset: function(a) {
			if (arguments.length) {
				return a === undefined ? this : this.each(function(i) {
					Q.offset.setOffset(this, a, i);
				});
			}
			var b, e, j = this[0];
			if (!j) {
				return;
			}
			if (!x.safeBoundingClientRect && !j.getClientRects().length) {
				return {
					top: 0,
					left: 0
				};
			}
			b = j.getBoundingClientRect();
			e = j.ownerDocument.defaultView;
			return {
				top: b.top + e.pageYOffset,
				left: b.left + e.pageXOffset
			};
		},
		position: function() {
			if (!this[0]) {
				return;
			}
			var a, b, e, i = this[0],
				p = {
					top: 0,
					left: 0
				};
			if (Q.css(i, "position") === "fixed") {
				b = i.getBoundingClientRect();
			} else {
				b = this.offset();
				e = i.ownerDocument;
				a = this.offsetParent()[0];
				while (a && (a === e.body || a === e.documentElement) && Q.css(a, "position") === "static") {
					a = a.parentNode;
				}
				if (a && a !== i && a.nodeType === 1) {
					p = Q(a).offset();
					p.top += Q.css(a, "borderTopWidth", true);
					p.left += Q.css(a, "borderLeftWidth", true);
				}
			}
			return {
				top: b.top - p.top - Q.css(i, "marginTop", true),
				left: b.left - p.left - Q.css(i, "marginLeft", true)
			};
		},
		offsetParent: function() {
			return this.map(function() {
				var a = this.offsetParent;
				while (a && Q.css(a, "position") === "static") {
					a = a.offsetParent;
				}
				return a || t1;
			});
		}
	});
	Q.each({
		scrollLeft: "pageXOffset",
		scrollTop: "pageYOffset"
	}, function(m, p) {
		var t = "pageYOffset" === p;
		Q.fn[m] = function(v) {
			return d1(this, function(e, m, v) {
				var a;
				if (z(e)) {
					a = e;
				} else if (e.nodeType === 9) {
					a = e.defaultView;
				}
				if (v === undefined) {
					return a ? a[p] : e[m];
				}
				if (a) {
					a.scrollTo(!t ? v : a.pageXOffset, t ? v : a.pageYOffset);
				} else {
					e[m] = v;
				}
			}, m, v, arguments.length);
		};
	});
	Q.each(["top", "left"], function(_, p) {
		Q.cssHooks[p] = g2(x.pixelPosition, function(e, a) {
			if (a) {
				a = f2(e, p);
				return b2.test(a) ? Q(e).position()[p] + "px" : a;
			}
		});
	});
	Q.each({
		Height: "height",
		Width: "width"
	}, function(n, t) {
		Q.each({
			padding: "inner" + n,
			content: t,
			"": "outer" + n
		}, function(a, b) {
			Q.fn[b] = function(m, v) {
				var e = arguments.length && (a || typeof m !== "boolean"),
					i = a || (m === true || v === true ? "margin" : "border");
				return d1(this, function(j, t, v) {
					var l;
					if (z(j)) {
						return b.indexOf("outer") === 0 ? j["inner" + n] : j.document.documentElement["client" + n];
					}
					if (j.nodeType === 9) {
						l = j.documentElement;
						return Math.max(j.body["scroll" + n], l["scroll" + n], j.body["offset" + n], l["offset" + n], l["client" + n]);
					}
					return v === undefined ? Q.css(j, t, i) : Q.style(j, t, v, i);
				}, t, e ? m : undefined, e);
			};
		});
	});
	Q.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(_, t) {
		Q.fn[t] = function(a) {
			return this.on(t, a);
		};
	});
	Q.fn.extend({
		bind: function(t, a, b) {
			return this.on(t, null, a, b);
		},
		unbind: function(t, a) {
			return this.off(t, null, a);
		},
		delegate: function(s, t, a, b) {
			return this.on(t, s, a, b);
		},
		undelegate: function(s, t, a) {
			return arguments.length === 1 ? this.off(s, "**") : this.off(t, s || "**", a);
		},
		hover: function(a, b) {
			return this.mouseenter(a).mouseleave(b || a);
		}
	});
	Q.each(("blur focus focusin focusout resize scroll click dblclick " +
		"mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave " + "change select submit keydown keypress keyup contextmenu").split(
		" "), function(_, n) {
		Q.fn[n] = function(a, b) {
			return arguments.length > 0 ? this.on(n, null, a, b) : this.trigger(n);
		};
	});
	var q3 = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
	Q.proxy = function(a, b) {
		var t, e, p;
		if (typeof b === "string") {
			t = a[b];
			b = a;
			a = t;
		}
		if (!y(a)) {
			return undefined;
		}
		e = f.call(arguments, 2);
		p = function() {
			return a.apply(b || this, e.concat(f.call(arguments)));
		};
		p.guid = a.guid = a.guid || Q.guid++;
		return p;
	};
	Q.holdReady = function(a) {
		if (a) {
			Q.readyWait++;
		} else {
			Q.ready(true);
		}
	};
	Q.isArray = Array.isArray;
	Q.parseJSON = JSON.parse;
	Q.nodeName = J;
	Q.isFunction = y;
	Q.isWindow = z;
	Q.camelCase = h1;
	Q.type = C;
	Q.now = Date.now;
	Q.isNumeric = function(a) {
		var t = Q.type(a);
		return (t === "number" || t === "string") && !isNaN(a - parseFloat(a));
	};
	Q.trim = function(t) {
		return t == null ? "" : (t + "").replace(q3, "");
	};
	if (typeof define === "function" && define.amd) {
		define("jquery", [], function() {
			return Q;
		});
	}
	var r3 = w.jQuery,
		_$ = w.$;
	Q.noConflict = function(a) {
		if (w.$ === Q) {
			w.$ = _$;
		}
		if (a && w.jQuery === Q) {
			w.jQuery = r3;
		}
		return Q;
	};
	if (typeof c === "undefined") {
		w.jQuery = w.$ = Q;
	}
	return Q;
});
if (window.sap && window.sap.ui && window.sap.ui._jQuery3Compat) {
	sap.ui._jQuery3Compat._factory(jQuery, window);
}